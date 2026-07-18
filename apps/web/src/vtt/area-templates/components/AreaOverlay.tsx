import type { AreaRenderModel } from '../domain/types'
import { AreaVisualFill } from './AreaVisualFill'

const points = (polygon: Array<{ x: number; y: number }>) => polygon.map((point) => `${point.x},${point.y}`).join(' ')
const safeAreaId = (key: string) => key.replace(/[^a-zA-Z0-9_-]/g, '')

export function AreaOverlay({ areas }: { areas: AreaRenderModel[] }) {
  if (!areas.length) return null
  return <svg className="pointer-events-none absolute inset-0 z-[4] h-full w-full overflow-visible">
    <defs>
      {areas.filter((area) => area.innerPolygon).map((area) => <mask key={`inner-${area.key}`} id={`area-mask-${safeAreaId(area.key)}`}><rect width="100%" height="100%" fill="white" /><polygon points={points(area.innerPolygon ?? [])} fill="black" /></mask>)}
      {areas.filter((area) => area.template.shape === 'ORTHOGONAL' && area.coveredCells.length > 0).map((area) => <mask key={`orthogonal-${area.key}`} id={`orthogonal-area-mask-${safeAreaId(area.key)}`}><rect width="100%" height="100%" fill="black" />{area.coveredCells.map((cell) => <polygon key={cell.id} points={points(cell.polygon)} fill="white" />)}</mask>)}
    </defs>
    {areas.map((area) => {
      const style = area.template.style
      const mask = area.template.shape === 'ORTHOGONAL' && area.coveredCells.length > 0
        ? `url(#orthogonal-area-mask-${safeAreaId(area.key)})`
        : area.innerPolygon ? `url(#area-mask-${safeAreaId(area.key)})` : undefined
      const coveredCellFillOpacity = area.template.shape === 'ORTHOGONAL' && style.visualEffect !== 'DEFAULT'
        ? Math.min(0.12, style.opacity)
        : Math.min(0.68, style.opacity + 0.16)
      return <g key={area.key} opacity={area.selected ? 1 : 0.62}>
        <AreaVisualFill area={area} mask={mask} />
        {style.showCoveredCells && area.template.tokenIntersectionRule === 'COVERED_CELLS' ? area.coveredCells.map((cell) => <polygon key={cell.id} points={points(cell.polygon)} fill={style.fillColor} fillOpacity={coveredCellFillOpacity} stroke={style.borderColor} strokeOpacity="0.65" strokeWidth="1" />) : null}
        {style.showDirectionLine && area.template.shape !== 'ORTHOGONAL' ? <line x1={area.origin.x} y1={area.origin.y} x2={area.polygon.reduce((furthest, point) => Math.hypot(point.x - area.origin.x, point.y - area.origin.y) > Math.hypot(furthest.x - area.origin.x, furthest.y - area.origin.y) ? point : furthest, area.origin).x} y2={area.polygon.reduce((furthest, point) => Math.hypot(point.x - area.origin.x, point.y - area.origin.y) > Math.hypot(furthest.x - area.origin.x, furthest.y - area.origin.y) ? point : furthest, area.origin).y} stroke={style.borderColor} strokeDasharray="6 5" strokeWidth="1.5" /> : null}
        {style.showOrigin ? <><circle cx={area.origin.x} cy={area.origin.y} r="6" fill="#09090b" stroke={style.borderColor} strokeWidth="2" /><circle cx={area.origin.x} cy={area.origin.y} r="2" fill={style.borderColor} /></> : null}
      </g>
    })}
  </svg>
}
