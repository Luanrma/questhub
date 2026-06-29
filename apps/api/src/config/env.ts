import { config as loadDotEnv } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..', '..', '..', '..')
const nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development'

loadDotEnv({ path: path.resolve(repoRoot, `.env.${nodeEnv}`) })
loadDotEnv({ path: path.resolve(repoRoot, '.env') })

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  FIREBASE_PROJECT_ID: z.string().trim().min(1),
  FIREBASE_CLIENT_EMAIL: z.string().trim().email(),
  FIREBASE_PRIVATE_KEY: z.string().trim().min(1),
  FIREBASE_STORAGE_BUCKET: z.string().trim().min(1).optional(),
  ASSET_MAX_UPLOAD_BYTES: z.coerce.number().int().positive().default(10 * 1024 * 1024),
  ASSET_USER_STORAGE_LIMIT_BYTES: z.coerce.number().int().positive().default(100 * 1024 * 1024),
  ASSET_IMAGE_MAX_WIDTH: z.coerce.number().int().positive().default(2048),
  ASSET_IMAGE_QUALITY: z.coerce.number().int().min(1).max(100).default(82),
})

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV ?? nodeEnv,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
  ASSET_MAX_UPLOAD_BYTES: process.env.ASSET_MAX_UPLOAD_BYTES,
  ASSET_USER_STORAGE_LIMIT_BYTES: process.env.ASSET_USER_STORAGE_LIMIT_BYTES,
  ASSET_IMAGE_MAX_WIDTH: process.env.ASSET_IMAGE_MAX_WIDTH,
  ASSET_IMAGE_QUALITY: process.env.ASSET_IMAGE_QUALITY,
})

function normalizePrivateKey(rawPrivateKey: string) {
  const trimmedPrivateKey = rawPrivateKey.trim()
  const unquotedPrivateKey = trimmedPrivateKey.replace(/^["']|["']$/g, '')
  const escapedPrivateKey = unquotedPrivateKey.replace(/\\n/g, '\n')
  const beginMarker = '-----BEGIN PRIVATE KEY-----'
  const endMarker = '-----END PRIVATE KEY-----'
  const beginIndex = escapedPrivateKey.indexOf(beginMarker)
  const endIndex = escapedPrivateKey.indexOf(endMarker)

  if (beginIndex >= 0 && endIndex >= beginIndex) {
    return escapedPrivateKey.slice(beginIndex, endIndex + endMarker.length)
  }

  try {
    return Buffer.from(unquotedPrivateKey, 'base64').toString('utf8').replace(/\\n/g, '\n')
  } catch {
    return escapedPrivateKey
  }
}

export const firebasePrivateKey = normalizePrivateKey(env.FIREBASE_PRIVATE_KEY)
export const firebaseStorageBucket = env.FIREBASE_STORAGE_BUCKET ?? `${env.FIREBASE_PROJECT_ID}.appspot.com`
export const assetEnvironmentPrefix = env.NODE_ENV === 'production' ? 'prod' : 'dev'
