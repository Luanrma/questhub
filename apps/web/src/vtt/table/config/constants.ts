export const gridSizeLimits = { min: 24, max: 96 }
export const gridLineWidthLimits = { min: 1, max: 4 }
export const zoomLimits = { min: 50, max: 150, step: 10 }
export const boardGridLimits = { columns: 50, rows: 34 }

export const sceneImageMaxBytes = Number(import.meta.env.VITE_ASSET_MAX_UPLOAD_BYTES ?? 10 * 1024 * 1024)
export const sceneImageMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'] as const
export const sceneImageMimeTypeLabels = 'JPG, PNG, WEBP ou AVIF'

export const questhubCharacterDragType = 'application/x-questhub-character-id'
export const questhubBestiaryDragType = 'application/x-questhub-bestiary-creature-id'
