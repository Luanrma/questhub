import type { AreaRenderModel } from '../domain/types'
import { AreaVisualPattern } from './AreaVisualPatterns'
import { areaVisualPatternId, areaVisualPresentation, type AnimatedAreaVisualEffect } from './areaVisualConfig'

const polygonPoints = (area: AreaRenderModel) => area.polygon.map((point) => `${point.x},${point.y}`).join(' ')

function safeEffectId(key: string) {
  return key.replace(/[^a-zA-Z0-9_-]/g, '')
}

export function AreaVisualFill({ area, mask }: { area: AreaRenderModel; mask?: string }) {
  const style = area.template.style
  const points = polygonPoints(area)

  if ((style.visualEffect ?? 'DEFAULT') === 'DEFAULT') {
    return <polygon points={points} fill={style.fillColor} fillOpacity={style.opacity * 0.55} stroke={style.borderColor} strokeWidth={style.borderWidthPx} mask={mask} />
  }

  const id = safeEffectId(area.key)
  const effect = style.visualEffect as AnimatedAreaVisualEffect
  const patternId = areaVisualPatternId(effect, id)
  const presentation = areaVisualPresentation(effect)

  return <>
    <AreaVisualPattern effect={effect} id={id} rotationDegrees={area.rotationDegrees} />
    <polygon points={points} fill={presentation.baseColor} fillOpacity={Math.max(0.3, style.opacity)} stroke={style.borderColor} strokeWidth={style.borderWidthPx} mask={mask} />
    <polygon className={presentation.surfaceClass} points={points} fill={`url(#${patternId})`} fillOpacity={Math.min(0.92, Math.max(0.58, style.opacity + 0.35))} stroke={presentation.borderColor} strokeWidth={style.borderWidthPx} mask={mask} />
  </>
}
