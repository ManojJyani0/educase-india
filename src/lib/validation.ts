import { z } from 'zod'

export const registerSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  phone: z.string(),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  companyName: z.string().min(1, 'Please company name'),
  isAgency: z.boolean()
}).refine((data) => data.isAgency, {
  message: "Company name is required",
  path: ['companyName'],  
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  remember: z.boolean().optional(),
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>