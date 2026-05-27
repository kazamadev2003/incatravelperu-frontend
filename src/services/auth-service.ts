import { api } from "@/lib/api"
import type { AuthResponse, LoginCredentials } from "@/types/auth"
import type { User, UpdateUserDto } from "@/types/user"

interface CreateUserDto {
  firstName: string
  lastName: string
  email: string
  authProvider: "local" | "google" | "facebook"
  password?: string
  externalId?: string
  roles?: string[]
  country?: string
  phone?: string
  address?: string
  documentType?: string
  documentNumber?: string
  avatar?: string
}

export const authService = {
  // REGISTER
  async register(data: CreateUserDto) {
    const response = await api.post<AuthResponse>("/auth/register", data)
    return response.data
  },

  // LOGIN
  async loginLocal(credentials: LoginCredentials) {
    const response = await api.post<AuthResponse>("/auth/login/local", credentials)
    return response.data
  },

  // PROFILE
  async getProfile() {
    const response = await api.get<User>("/auth/profile")
    return response.data
  },

  // UPDATE
  async updateProfile(id: string, data: UpdateUserDto) {
    const response = await api.patch<User>(`/auth/${id}`, data)
    return response.data
  },

  // LOGOUT
  async logout() {
    const response = await api.post("/auth/logout")
    return response.data
  },

  // OAuth URLs
  getGoogleAuthUrl() {
    return `${api.defaults.baseURL}/auth/google`
  },

  getGoogleRedirectUrl() {
    return `${api.defaults.baseURL}/auth/google/redirect`
  },

  getFacebookAuthUrl() {
    return `${api.defaults.baseURL}/auth/facebook`
  },

  getFacebookRedirectUrl() {
    return `${api.defaults.baseURL}/auth/facebook/redirect`
  },
}
