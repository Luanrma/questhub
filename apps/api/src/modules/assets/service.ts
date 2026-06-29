import { randomUUID } from 'node:crypto'
import { pipeline } from 'node:stream/promises'
import type { Readable } from 'node:stream'
import { assetEnvironmentPrefix } from '../../config/env'
import { getFirebaseStorage } from '../../lib/firebase'

type UploadInput = {
  userId: string
  campaignId?: string | null
  filename: string
  mimeType: string
  buffer: Buffer
  extension?: string | null
}

type UploadStreamInput = Omit<UploadInput, 'buffer'> & {
  stream: Readable
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 120) || 'asset'
}

function withExtension(filename: string, extension?: string | null) {
  if (!extension) return filename
  if (/\.[^.]+$/.test(filename)) return filename.replace(/\.[^.]+$/, `.${extension}`)
  return `${filename}.${extension}`
}

export function extensionForAssetMimeType(mimeType: string) {
  if (mimeType === 'image/jpeg') return 'jpg'
  if (mimeType === 'image/png') return 'png'
  if (mimeType === 'image/webp') return 'webp'
  if (mimeType === 'image/avif') return 'avif'
  return null
}

export class AssetService {
  private get bucket() {
    return getFirebaseStorage().bucket()
  }

  async upload(input: UploadInput) {
    const storagePath = this.buildStoragePath(input.userId, input.filename, input.extension, input.campaignId)
    const file = this.bucket.file(storagePath)

    await file.save(input.buffer, {
      contentType: input.mimeType,
      resumable: false,
      metadata: {
        cacheControl: 'private, max-age=0',
      },
    })

    return { storagePath }
  }

  async uploadStream(input: UploadStreamInput) {
    const storagePath = this.buildStoragePath(input.userId, input.filename)
    const file = this.bucket.file(storagePath)
    const writeStream = file.createWriteStream({
      contentType: input.mimeType,
      resumable: false,
      metadata: {
        cacheControl: 'private, max-age=0',
      },
    })

    await pipeline(input.stream, writeStream)

    return { storagePath }
  }

  async delete(storagePath: string) {
    await this.bucket.file(storagePath).delete({ ignoreNotFound: true })
  }

  async getSignedUrl(storagePath: string) {
    const [url] = await this.bucket.file(storagePath).getSignedUrl({
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000,
    })

    return url
  }

  async getPublicUrl(storagePath: string) {
    return `https://storage.googleapis.com/${this.bucket.name}/${encodeURI(storagePath)}`
  }

  buildStoragePath(userId: string, filename: string, extension?: string | null, campaignId?: string | null) {
    const sanitizedFilename = sanitizeFilename(filename)
    const filenameWithExtension = withExtension(sanitizedFilename, extension)
    if (campaignId) return `${assetEnvironmentPrefix}/questhub/assets/${userId}/${campaignId}/${filenameWithExtension}`
    return `${assetEnvironmentPrefix}/questhub/assets/${userId}/${randomUUID()}-${filenameWithExtension}`
  }
}

export const assetService = new AssetService()
