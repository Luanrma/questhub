import { areaTemplateToInput, type AreaDimensions, type AreaTemplateInput } from './types'

function scaleDimensions(dimensions: AreaDimensions, factor: number): AreaDimensions {
  const scaled = { ...dimensions }
  const linearFields = ['radius', 'innerRadius', 'length', 'width', 'startWidth', 'endWidth', 'height', 'elevation'] as const
  for (const field of linearFields) {
    const value = dimensions[field]
    if (value !== undefined) scaled[field] = value * factor
  }
  if (dimensions.polygonPoints) scaled.polygonPoints = dimensions.polygonPoints.map((point) => ({ x: point.x * factor, y: point.y * factor }))
  return scaled
}

export function areaTemplateForMeterEditor(template: AreaTemplateInput, metersPerCell: number): AreaTemplateInput {
  const input = areaTemplateToInput(template)
  if (input.measurementMode === 'WORLD_UNIT') return { ...input, measurementUnit: 'm' }
  return {
    ...input,
    measurementMode: 'WORLD_UNIT',
    measurementUnit: 'm',
    dimensions: scaleDimensions(input.dimensions, metersPerCell),
  }
}
