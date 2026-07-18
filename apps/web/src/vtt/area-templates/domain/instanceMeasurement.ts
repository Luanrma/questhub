import type { CampaignAreaTemplate } from './types'

function measurementFactor(template: CampaignAreaTemplate, metersPerCell: number) {
  return template.measurementMode === 'GRID_CELLS' ? metersPerCell : 1
}

function measurementUnitLabel(template: CampaignAreaTemplate) {
  if (template.measurementMode === 'GRID_CELLS') return 'm'
  return template.measurementUnit?.toLowerCase() === 'ft' ? 'ft' : 'm'
}

export function primaryAreaDimension(template: CampaignAreaTemplate, metersPerCell: number) {
  const factor = measurementFactor(template, metersPerCell)
  const unit = measurementUnitLabel(template)
  if (template.shape === 'CIRCLE' || template.shape === 'ORTHOGONAL' || template.shape === 'RING') {
    return { label: `Raio (${unit})`, baseMeters: Math.max(0.001, (template.dimensions.radius ?? 1) * factor) }
  }
  return { label: `Comprimento (${unit})`, baseMeters: Math.max(0.001, (template.dimensions.length ?? 1) * factor) }
}

export function areaScaleForMeters(meters: number, baseMeters: number) {
  return Math.max(0.1, Math.min(10, meters / Math.max(0.001, baseMeters)))
}
