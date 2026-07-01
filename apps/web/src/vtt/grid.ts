export type VttGridShape = 'square' | 'hex'

export type VttGridSettings = {
  visible: boolean
  shape: VttGridShape
  size: number
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  lineWidth: number
  color: string
}

export type VttGridChangedPayload = {
  campaignId: string
  settings: VttGridSettings
}

export const defaultGridSettings: VttGridSettings = {
  visible: false,
  shape: 'square',
  size: 32,
  metersPerCell: 1,
  squareMeasurementColor: '#f97316',
  hexMeasurementColor: '#f97316',
  lineWidth: 1,
  color: '#94a3b8',
}

const gridSizeLimits = { min: 24, max: 96 }
const gridLineWidthLimits = { min: 1, max: 4 }
export const metersPerCellAllowedValues = [
  0.5,
  ...Array.from({ length: 10 }, (_, index) => index + 1),
  15,
  20,
  25,
  30,
  40,
  50,
  75,
  100,
]

function isGridShape(value: unknown): value is VttGridShape {
  return value === 'square' || value === 'hex'
}

function isHexColor(value: unknown): value is string {
  return typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)
}

function clampInteger(value: unknown, min: number, max: number, fallback: number) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return fallback
  return Math.min(max, Math.max(min, Math.round(value)))
}

function normalizeMetersPerCell(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return defaultGridSettings.metersPerCell
  const candidate = Math.min(10000, Math.max(0.01, value))
  return metersPerCellAllowedValues.reduce((closest, current) => {
    if (Math.abs(current - candidate) >= Math.abs(closest - candidate)) return closest
    return current
  }, defaultGridSettings.metersPerCell)
}

export function normalizeGridSettings(value: unknown): VttGridSettings {
  if (!value || typeof value !== 'object') return defaultGridSettings

  const settings = value as Partial<VttGridSettings>

  return {
    visible: typeof settings.visible === 'boolean' ? settings.visible : defaultGridSettings.visible,
    shape: isGridShape(settings.shape) ? settings.shape : defaultGridSettings.shape,
    size: clampInteger(settings.size, gridSizeLimits.min, gridSizeLimits.max, defaultGridSettings.size),
    metersPerCell: normalizeMetersPerCell(settings.metersPerCell ?? (settings as { squareMeters?: unknown }).squareMeters),
    squareMeasurementColor: isHexColor(settings.squareMeasurementColor)
      ? settings.squareMeasurementColor
      : defaultGridSettings.squareMeasurementColor,
    hexMeasurementColor: isHexColor(settings.hexMeasurementColor)
      ? settings.hexMeasurementColor
      : defaultGridSettings.hexMeasurementColor,
    lineWidth: clampInteger(
      settings.lineWidth,
      gridLineWidthLimits.min,
      gridLineWidthLimits.max,
      defaultGridSettings.lineWidth,
    ),
    color: isHexColor(settings.color) ? settings.color : defaultGridSettings.color,
  }
}

export function readStoredGridSettings(campaignId: string) {
  try {
    const raw = localStorage.getItem(`questhub.vtt.grid.${campaignId}`)
    if (!raw) return defaultGridSettings
    return normalizeGridSettings(JSON.parse(raw))
  } catch {
    return defaultGridSettings
  }
}

export function storeGridSettings(campaignId: string, settings: VttGridSettings) {
  try {
    localStorage.setItem(`questhub.vtt.grid.${campaignId}`, JSON.stringify(normalizeGridSettings(settings)))
  } catch {
    // ignore storage failures
  }
}
