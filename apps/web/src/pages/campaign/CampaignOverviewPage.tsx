import type { CSSProperties } from 'react'
import { Grid3X3, MousePointer2, Move, Palette, Plus, Ruler, SlidersHorizontal, Users, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CampaignChat } from '../../components/CampaignChat'
import { useSession } from '../../contexts/SessionContext'
import type { VttGridSettings, VttGridShape } from '../../vtt/grid'

const gridSizeLimits = { min: 24, max: 96 }
const gridLineWidthLimits = { min: 1, max: 4 }

const toolButtons = [
  { label: 'Selecionar', icon: MousePointer2 },
  { label: 'Mover', icon: Move },
  { label: 'Medir', icon: Ruler },
  { label: 'Grid', icon: Grid3X3 },
]

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

function VttGridOverlay({ settings }: { settings: VttGridSettings }) {
  return <div className="absolute inset-0 pointer-events-none" style={getGridStyle(settings)} />
}

function VttGridSettingsModal({
  settings,
  onChange,
  onClose,
}: {
  settings: VttGridSettings
  onChange: (settings: VttGridSettings) => void
  onClose: () => void
}) {
  function updateSetting<Key extends keyof VttGridSettings>(key: Key, value: VttGridSettings[Key]) {
    onChange({ ...settings, [key]: value })
  }

  return (
    <div className="absolute left-24 top-20 z-30 w-[min(360px,calc(100vw-48px))] rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-indigo-300" />
          <h2 className="truncate text-sm font-semibold">Configurar grid</h2>
        </div>
        <button
          type="button"
          title="Fechar"
          className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 p-4">
        <label className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm">
          <span className="text-zinc-200">Mostrar grid</span>
          <input
            type="checkbox"
            className="h-4 w-4 accent-indigo-500"
            checked={settings.visible}
            onChange={(event) => updateSetting('visible', event.target.checked)}
          />
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
          <input
            type="range"
            min={gridSizeLimits.min}
            max={gridSizeLimits.max}
            value={settings.size}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('size', Number(event.target.value))}
          />
        </label>

        <label className="grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <span className="text-zinc-200">Espessura</span>
            <span className="text-zinc-400">{settings.lineWidth}px</span>
          </div>
          <input
            type="range"
            min={gridLineWidthLimits.min}
            max={gridLineWidthLimits.max}
            value={settings.lineWidth}
            className="accent-indigo-500"
            onChange={(event) => updateSetting('lineWidth', Number(event.target.value))}
          />
        </label>

        <label className="flex items-center justify-between gap-3 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            Cor
          </span>
          <input
            type="color"
            value={settings.color}
            className="h-9 w-14 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) => updateSetting('color', event.target.value)}
          />
        </label>
      </div>
    </div>
  )
}

type CampaignOverviewPageProps = {
  gridSettings: VttGridSettings
  gridSettingsOpen: boolean
  canConfigureGrid: boolean
  onGridSettingsChange: (settings: VttGridSettings) => void
  onGridSettingsOpenChange: (open: boolean) => void
}

export function CampaignOverviewPage({
  gridSettings,
  gridSettingsOpen,
  canConfigureGrid,
  onGridSettingsChange,
  onGridSettingsOpenChange,
}: CampaignOverviewPageProps) {
  const { campaignId } = useParams()
  const { campaigns } = useSession()

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const visibleToolButtons = canConfigureGrid ? toolButtons : toolButtons.filter((tool) => tool.label !== 'Grid')

  return (
    <div className="grid h-full min-h-0 grid-cols-[minmax(0,1fr)_320px] bg-[#08090c] text-white max-xl:grid-cols-1">
      <section className="relative min-h-0 overflow-hidden border-r border-white/10 bg-[#0b0d12]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
        <VttGridOverlay settings={gridSettings} />

        <div className="relative z-10 flex h-full min-h-[560px] flex-col">
          <div className="relative flex-1">
            <div className="absolute left-24 top-5 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              {visibleToolButtons.map((tool, index) => {
                const Icon = tool.icon
                const active = tool.label === 'Grid' ? gridSettingsOpen : index === 0

                return (
                  <button
                    key={tool.label}
                    type="button"
                    title={tool.label}
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-md transition',
                      active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                    onClick={() => {
                      if (tool.label === 'Grid') onGridSettingsOpenChange(true)
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>

            {gridSettingsOpen && canConfigureGrid ? (
              <VttGridSettingsModal
                settings={gridSettings}
                onChange={onGridSettingsChange}
                onClose={() => onGridSettingsOpenChange(false)}
              />
            ) : null}

            <div className="absolute right-5 top-5 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              <button
                type="button"
                title="Diminuir zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="flex h-10 min-w-16 items-center justify-center px-3 text-xs text-zinc-200">100%</div>
              <button
                type="button"
                title="Aumentar zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-black/45 px-4 py-3 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">Cena sem mapa carregado</div>
                  <div className="text-xs text-zinc-400">Grid pronto para mapas, tokens e medidas.</div>
                </div>
                {isMaster ? (
                  <Button variant="ghost" className="h-9 gap-2 px-3">
                    <Plus className="h-4 w-4" />
                    Preparar cena
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="min-h-0 overflow-hidden border-l border-white/10 bg-[#101116] p-5 max-xl:border-l-0 max-xl:border-t">
        <div className="flex h-full min-h-0 flex-col gap-5">
          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-white">Jogadores</div>
              <Users className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="mt-3 rounded-md border border-dashed border-white/10 px-3 py-5 text-center text-sm text-zinc-500">
              Nenhum token ativo na mesa.
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-semibold text-white">Sessão</div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Rodada</span>
                <span className="text-zinc-200">-</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Turno</span>
                <span className="text-zinc-200">Livre</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Grid</span>
                <span className="text-zinc-200">
                  {gridSettings.visible ? `${gridSettings.shape === 'square' ? 'Quadrado' : 'Hex'} ${gridSettings.size}px` : 'Oculto'}
                </span>
              </div>
            </div>
          </section>

          {campaignId ? (
            <CampaignChat
              campaignId={campaignId}
              characterId={campaign?.myCharacterId}
              enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')}
            />
          ) : null}
        </div>
      </aside>
    </div>
  )
}
