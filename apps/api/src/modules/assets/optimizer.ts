import sharp from 'sharp'
import { env } from '../../config/env'

type OptimizedAsset = {
  buffer: Buffer
  mimeType: string
  extension: string | null
  optimized: boolean
}

const supportedImageMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif'])

function extensionForMimeType(mimeType: string) {
  if (mimeType === 'image/jpeg') return 'jpg'
  if (mimeType === 'image/png') return 'png'
  if (mimeType === 'image/webp') return 'webp'
  if (mimeType === 'image/avif') return 'avif'
  return null
}

export async function optimizeAssetBuffer(buffer: Buffer, mimeType: string): Promise<OptimizedAsset> {
  if (!supportedImageMimeTypes.has(mimeType)) {
    return { buffer, mimeType, extension: null, optimized: false }
  }

  let image = sharp(buffer, { failOn: 'none' }).rotate().resize({
    width: env.ASSET_IMAGE_MAX_WIDTH,
    withoutEnlargement: true,
  })

  if (mimeType === 'image/jpeg') image = image.jpeg({ quality: env.ASSET_IMAGE_QUALITY, mozjpeg: true })
  if (mimeType === 'image/png') image = image.png({ compressionLevel: 9, palette: true })
  if (mimeType === 'image/webp') image = image.webp({ quality: env.ASSET_IMAGE_QUALITY })
  if (mimeType === 'image/avif') image = image.avif({ quality: env.ASSET_IMAGE_QUALITY })

  const optimizedBuffer = await image.toBuffer()
  if (optimizedBuffer.byteLength >= buffer.byteLength) {
    return { buffer, mimeType, extension: extensionForMimeType(mimeType), optimized: false }
  }

  return {
    buffer: optimizedBuffer,
    mimeType,
    extension: extensionForMimeType(mimeType),
    optimized: true,
  }
}
