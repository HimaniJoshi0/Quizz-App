import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    })
  }

  try {
    const { email, password, name } = req.body

    // Validate required fields
    if (!email || !password || !name) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'User already exists' 
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    })

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: userWithoutPassword
    })
  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    })
  } finally {
    await prisma.$disconnect()
  }
}