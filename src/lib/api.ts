import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// API configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Common API request function with TypeScript generics
export async function apiRequest<TResponse = any, TRequest = any>(
  config: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    path: string
    data?: TRequest
    params?: Record<string, any>
    headers?: Record<string, string>
  }
): Promise<TResponse> {
  try {
    const response: AxiosResponse<TResponse> = await api({
      method: config.method,
      url: config.path,
      data: config.data,
      params: config.params,
      headers: config.headers
    })
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Request failed')
    }
    throw new Error('Network error')
  }
}

// Example usage with types
export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data: {
    user: {
      id: number
      email: string
      name: string
    }
    token: string
  }
}

// API endpoints
export const endpoints = {
  auth: {
    login: () => '/user/login',
    register: () => '/user/register'
  },
  quiz: {
    list: () => '/quiz',
    create: () => '/quiz',
    getById: (id: number) => `/quiz/${id}`,
    update: (id: number) => `/quiz/${id}`,
    delete: (id: number) => `/quiz/${id}`
  }
} as const

// Example usage:
/*
const loginUser = async (credentials: LoginRequest) => {
  return apiRequest<LoginResponse, LoginRequest>({
    method: 'POST',
    path: endpoints.auth.login(),
    data: credentials
  })
}
*/