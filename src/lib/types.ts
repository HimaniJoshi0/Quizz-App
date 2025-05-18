export interface Navtypes {
  title: string
  link: string
}



export interface NavLink {
  title: string;
  to: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface CardsType {
  title: string;
  description: string
}

export interface CommonResponse<T=unknown> {
  success: boolean
  message: string
  data?: T
}

export interface User {
  id: number
  name: string
  email: string
  // Add other user fields as needed
}

export interface Option {
  id: number
  text?: string
  isCorrect: boolean
  createdAt: string
  updatedAt: string
}

export interface Question {
  id: number
  quizId: number
  text: string
  options: Option[]
  createdAt: string
  updatedAt: string
}

export interface QuizAttempt {
  id: number
  userId: number
  quizId: number
  score: number
  attemptedAt: string
  // Add other attempt fields as needed
}

export interface QuizzDataTypes {
  id: number
  title: string
  description?: string
  timeLimit: number // Time limit in minutes
  isPublic: boolean
  author: User | undefined
  authorId: number
  questions: Question[]
  attempts: QuizAttempt[]
  topic?: string
  createdAt: string
  updatedAt: string
}