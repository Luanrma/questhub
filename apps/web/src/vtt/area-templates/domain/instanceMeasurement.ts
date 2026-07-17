import type { CampaignAreaTemplate } from './types'

function measurementFactor(template: CampaignAreaTemplate, metersPerCell: number) {
  return template.measurementMode === 'GRID_CELLS' ? metersPerCell : 1
}

export function primaryAreaDimension(template: CampaignAreaTemplate, metersPerCell: number) {
  const factor = measurementFactor(template, metersPerCell)
  if (template.shape === 'CIRCLE' || template.shape === 'RING') {
    return { label: 'Raio (m)', baseMeters: Math.max(0.001, (template.dimensions.radius ?? 1) * factor) }
  }
  return { label: 'Comprimento (m)', baseMeters: Math.max(0.001, (template.dimensions.length ?? 1) * factor) }
}

export function areaScaleForMeters(meters: number, baseMeters: number) {
  return Math.max(0.1, Math.min(10, meters / Math.max(0.001, baseMeters)))
}
