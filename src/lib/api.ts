import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie' // <-- Add this import

// API configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})


// Base response type for all API responses
export interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
}

// Common API request function with TypeScript generics
export async function apiRequest<TResponse extends ApiResponse<unknown>, TRequest>(
  config: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    path: string
    data?: TRequest
    params?: Record<string, string | number | boolean>
    headers?: Record<string, string>
  }
): Promise<TResponse> {
  try {
    const token = Cookies.get('authToken')
    const headers = {
      ...config.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }

    const response: AxiosResponse<TResponse> = await api({
      method: config.method,
      url: config.path,
      data: config.data,
      params: config.params,
      headers: headers
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Request failed')
    }
    throw new Error('Network error')
  }
}


