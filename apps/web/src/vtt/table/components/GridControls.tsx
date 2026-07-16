import { useState, type CSSProperties } from 'react'
import { Palette, SlidersHorizontal, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { metersPerCellAllowedValues, type VttGridSettings, type VttGridShape } from '../../grid'
import { gridLineWidthLimits, gridSizeLimits } from '../config/constants'

function createHexGridDataUrl(settings: VttGridSettings) {
  const hexWidth = settings.size
  const radius = hexWidth / Math.sqrt(3)
  const rowStep = radius * 1.5
  const patternWidth = hexWidth * 2
  const patternHeight = rowStep * 2
  const halfWidth = hexWidth / 2
  const halfRadius = radius / 2

  function hexPath(centerX: number, centerY: number) {
    return [
      `M ${centerX} ${centerY - radius}`,
      `L ${centerX + halfWidth} ${centerY - halfRadius}`,
      `L ${centerX + halfWidth} ${centerY + halfRadius}`,
      `L ${centerX} ${centerY + radius}`,
      `L ${centerX - halfWidth} ${centerY + halfRadius}`,
      `L ${centerX - halfWidth} ${centerY - halfRadius}`,
      'Z',
    ].join(' ')
  }

  const paths = [
    hexPath(0, 0),
    hexPath(hexWidth, 0),
    hexPath(patternWidth, 0),
    hexPath(halfWidth, rowStep),
    hexPath(hexWidth + halfWidth, rowStep),
    hexPath(0, patternHeight),
    hexPath(hexWidth, patternHeight),
    hexPath(patternWidth, patternHeight),
  ]

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${patternWidth}" height="${patternHeight}" viewBox="0 0 ${patternWidth} ${patternHeight}">`,
    `<path d="${paths.join(' ')}" fill="none" stroke="${settings.color}" stroke-width="${settings.lineWidth}" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`,
    '</svg>',
  ].join('')

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

function getGridStyle(settings: VttGridSettings): CSSProperties {
  if (!settings.visible) return { display: 'none' }

  if (settings.shape === 'hex') {
    const radius = settings.size / Math.sqrt(3)
    const rowStep = radius * 1.5

    return {
      backgroundImage: createHexGridDataUrl(settings),
      backgroundSize: `${settings.size * 2}px ${rowStep * 2}px`,
      opacity: 0.72,
    }
  }

  return {
    backgroundImage: [
      `linear-gradient(${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
      `linear-gradient(90deg, ${settings.color} ${settings.lineWidth}px, transparent ${settings.lineWidth}px)`,
    ].join(', '),
    backgroundSize: `${settings.size}px ${settings.size}px`,
    opacity: 0.72,
  }
}

export function VttGridOverlay({ settings }: { settings: VttGridSettings }) {
  return <div className="absolute inset-0 pointer-events-none" style={getGridStyle(settings)} />
}

export function VttGridSettingsModal({
  settings,
  onChange,
  onClose,
}: {
  settings: VttGridSettings
  onChange: (settings: VttGridSettings) => void
  onClose: () => void
}) {
  const [box, setBox] = useState<ResizableBox>({ x: 96, y: 80, width: 360, height: 430 })

  function updateSetting<Key extends keyof VttGridSettings>(key: Key, value: VttGridSettings[Key]) {
    onChange({ ...settings, [key]: value })
  }

  const metersPerCellIndex = Math.max(0, metersPerCellAllowedValues.indexOf(settings.metersPerCell))

  return (
    <div
      className="pointer-events-auto absolute z-30 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur"
      style={{ left: box.x, top: box.y, width: box.width, height: box.height }}
    >
      <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 320, minHeight: 360, viewportMargin: 16 }} />
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-indigo-300" />
          <h2 className="truncate text-sm font-semibold">Configurar grid</h2>
        </div>
        <button type="button" title="Fechar" className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white" onClick={onClose}>
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid min-h-0 gap-4 overflow-y-auto overflow-x-hidden p-4">
        <label className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm">
          <span className="text-zinc-200">Mostrar grid</span>
          <input type="checkbox" className="h-4 w-4 accent-indigo-500" checked={settings.visible} onChange={(event) => updateSetting('visible', event.target.checked)} />
        </label>

        <div className="grid gap-2">
          <span className="text-xs font-semibold uppercase text-zinc-400">Formato</span>
          <div className="grid grid-cols-2 gap-2">
            {[
              ['square', 'Quadrado'],
              ['hex', 'Hexagonal'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={[
                  'rounded-md border px-3 py-2 text-sm font-semibold transition',
                  settings.shape === value
                    ? 'border-indigo-300/40 bg-indigo-500/20 text-indigo-100'
                    : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white',
                ].join(' ')}
                onClick={() => updateSetting('shape', value as VttGridShape)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Tamanho</span>
            <span className="text-zinc-400">{settings.size}px</span>
          </div>
          <input type="range" min={gridSizeLimits.min} max={gridSizeLimits.max} value={settings.size} className="accent-indigo-500" onChange={(event) => updateSetting('size', Number(event.target.value))} />
        </label>

        {settings.shape === 'square' ? (
          <label className="grid gap-2 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-zinc-200">Metros por celula</span>
              <span className="text-zinc-400">{settings.metersPerCell}m</span>
            </div>
            <input type="range" min={0} max={metersPerCellAllowedValues.length - 1} value={metersPerCellIndex} className="accent-indigo-500" onChange={(event) => updateSetting('metersPerCell', metersPerCellAllowedValues[Number(event.target.value)])} />
          </label>
        ) : null}

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            {settings.shape === 'square' ? 'Cor do tracejado' : 'Cor da pintura'}
          </span>
          <input
            type="color"
            value={settings.shape === 'square' ? settings.squareMeasurementColor : settings.hexMeasurementColor}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) => updateSetting(settings.shape === 'square' ? 'squareMeasurementColor' : 'hexMeasurementColor', event.target.value)}
          />
        </label>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Espessura</span>
            <span className="text-zinc-400">{settings.lineWidth}px</span>
          </div>
          <input type="range" min={gridLineWidthLimits.min} max={gridLineWidthLimits.max} value={settings.lineWidth} className="accent-indigo-500" onChange={(event) => updateSetting('lineWidth', Number(event.target.value))} />
        </label>

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            Cor
          </span>
          <input type="color" value={settings.color} className="h-9 w-14 rounded border border-white/10 bg-transparent p-1" onChange={(event) => updateSetting('color', event.target.value)} />
        </label>
      </div>
    </div>
  )
}
