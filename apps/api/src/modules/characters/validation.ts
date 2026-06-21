import { z } from 'zod'
import { CHARACTER_SHEET_BIO_MAX_LENGTH } from '../character_sheet/constants'

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
  system: z.enum(['PATHFINDER_2E']),
  avatarUrl: avatarUrlSchema.nullable().optional(),
  bio: z.string().trim().max(CHARACTER_SHEET_BIO_MAX_LENGTH, 'Bio deve ter no maximo 2000 caracteres').nullable().optional(),
})

export const updateCharacterSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(80, 'Nome muito longo').optional(),
  system: z.enum(['PATHFINDER_2E']).optional(),
  avatarUrl: avatarUrlSchema.nullable().optional(),
  bio: z.string().trim().max(CHARACTER_SHEET_BIO_MAX_LENGTH, 'Bio deve ter no maximo 2000 caracteres').nullable().optional(),
})
