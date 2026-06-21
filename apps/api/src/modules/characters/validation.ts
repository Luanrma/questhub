import { z } from 'zod'

export const avatarUrlSchema = z
  .string()
  .trim()
  .max(2048)
  .refine((value) => {
    if (value === '') return true
    if (value.startsWith('/')) return true

    try {
      const url = new URL(value)
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
      return false
    }
  }, 'Avatar deve ser uma URL valida')

export const createCharacterSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo'),
  avatarUrl: avatarUrlSchema.optional(),
  bio: z.string().trim().max(2000, 'Bio deve ter no maximo 2000 caracteres').optional(),
})

export const updateCharacterSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo').optional(),
  avatarUrl: avatarUrlSchema.nullable().optional(),
  bio: z.string().trim().max(2000, 'Bio deve ter no maximo 2000 caracteres').nullable().optional(),
})
