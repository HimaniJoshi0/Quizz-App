import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

type GetQuizResponse = {
  success: boolean;
  message: string;
  data?: {
    quizzes: {
      id: number;
      title: string;
      description: string | null;
      timeLimit: number;
      isPublic: boolean;
      topic: string | null;
      questions: {
        id: number;
        text: string;
        options: {
          id: number;
          text: string;
          isCorrect: boolean;
        }[];
      }[];
      createdAt: Date;
      updatedAt: Date;
    }[];
  };
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetQuizResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { isPublic, q } = req.query;
    const searchQuery = q as string;

    const whereCondition: Prisma.QuizWhereInput = {
      AND: [
        isPublic === "true" ? { isPublic: true } : {},
        searchQuery
          ? {
              OR: [
                {
                  title: {
                    contains: searchQuery,
                  },
                },
                {
                  description: {
                    contains: searchQuery,
                  },
                },
              ],
            }
          : {},
      ],
    };

    const quizzes = await prisma.quiz.findMany({
      where: whereCondition,
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      message: "Quizzes fetched successfully",
      data: {
        quizzes,
      },
    });
  } catch (error) {
    console.error("Fetch quizzes error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: (error as Error).message,
    });
  } finally {
    await prisma.$disconnect();
  }
}
