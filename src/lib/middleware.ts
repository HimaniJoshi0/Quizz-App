import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: number;
  };
}

type HandlerFunction = (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>;

export function withAuth(handler: HandlerFunction) {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      // Get token from header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
          success: false,
          message: 'No token provided'
        });
      }

      const token = authHeader.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { userId: number };

      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'User not found'
        });
      }

      // Add user to request object
      req.user = { id: user.id };

      // Call the actual handler
      return handler(req, res);
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized'
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    } finally {
      await prisma.$disconnect();
    }
  };
}