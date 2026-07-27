import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ChevronRight, Eye, EyeOff, FileText, Settings, Trash2 } from 'lucide-react'
import { requestCampaignCharacterSheetOpen } from '../../../game-systems/actor-sheet-window-events'
import { api, ApiError } from '../../../lib/api'
import type {
  CampaignPlayer,
  VttPlayerToken,
  VttTokenCandidate,
  VttTokenContextMenu,
} from '../domain/types'
import { TokenImagePickerDialog } from './TokenImagePickerDialog'
import { normalizeFogLightSource, normalizeTokenVisionConfig } from '../../fog-of-war/domain/config'
import type { FogLightSourceConfig, TokenVisionConfig } from '../../fog-of-war/domain/types'

const viewportPadding = 12
const rootMenuWidth = 208
const settingsMenuWidth = 224
const menuGap = 8
const estimatedSettingsMenuHeight = 540

type TokenContextMenuProps = {
  menu: VttTokenContextMenu
  isMaster: boolean
  isCurrentController: boolean
  masterCanUseVtt: boolean
  tokenCandidates: VttTokenCandidate[]
  campaignPlayers: CampaignPlayer[]
  onUpdateToken: (tokenId: string, changes: Record<string, unknown>) => void
  onConfigureFog: (tokenId: string, visionConfig: TokenVisionConfig, lightConfig: FogLightSourceConfig) => Promise<void>
  onToggleVisibility: (token: VttPlayerToken) => void
  onRemoveFromScene: (token: VttPlayerToken) => void
  onDelete: (token: VttPlayerToken) => void
}

type ResolvedTokenSheet = {
  sheetId: string
  title: string
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), Math.max(minimum, maximum))
}

function getMenuPositions(menu: VttTokenContextMenu) {
  const viewportWidth = typeof window === 'undefined' ? 1440 : window.innerWidth
  const viewportHeight = typeof window === 'undefined' ? 900 : window.innerHeight
  const rootLeft = clamp(menu.x, viewportPadding, viewportWidth - rootMenuWidth - viewportPadding)
  const rootTop = clamp(menu.y, viewportPadding, viewportHeight - 96 - viewportPadding)
  const hasRoomOnRight = rootLeft + rootMenuWidth + menuGap + settingsMenuWidth <= viewportWidth - viewportPadding

  return {
    root: { left: rootLeft, top: rootTop },
    settings: {
      left: hasRoomOnRight
        ? rootLeft + rootMenuWidth + menuGap
        : Math.max(viewportPadding, rootLeft - settingsMenuWidth - menuGap),
      top: clamp(rootTop, viewportPadding, viewportHeight - estimatedSettingsMenuHeight - viewportPadding),
    },
  }
}

export function TokenContextMenu({
  menu,
  isMaster,
  isCurrentController,
  masterCanUseVtt,
  campaignPlayers,
  onUpdateToken,
  onConfigureFog,
  onToggleVisibility,
  onRemoveFromScene,
  onDelete,
}: TokenContextMenuProps) {
  const { campaignId } = useParams()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [imagePickerOpen, setImagePickerOpen] = useState(false)
  const [linkedSheet, setLinkedSheet] = useState<ResolvedTokenSheet | null>(null)
  const [sheetLoading, setSheetLoading] = useState(false)
  const initialVision = normalizeTokenVisionConfig(menu.token.visionConfig)
  const initialLight = normalizeFogLightSource(menu.token.lightConfig, `token-light:${menu.token.id}`)
  const [visionRangeMeters, setVisionRangeMeters] = useState(initialVision.rangeMeters)
  const [lightEnabled, setLightEnabled] = useState(initialLight.enabled)
  const [lightRangeMeters, setLightRangeMeters] = useState(initialLight.rangeMeters)
  const [fogSaving, setFogSaving] = useState(false)
  const [fogSaveError, setFogSaveError] = useState<string | null>(null)
  const [fogSaved, setFogSaved] = useState(false)
  const positions = getMenuPositions(menu)
  const token = menu.token

  useEffect(() => {
    if (!campaignId || (!isMaster && !isCurrentController)) return
    let cancelled = false
    setSheetLoading(true)
    setLinkedSheet(null)

    api<ResolvedTokenSheet>(`/api/campaigns/${campaignId}/tokens/${token.id}/actor-sheet`)
      .then((result) => {
        if (!cancelled) setLinkedSheet(result)
      })
      .catch((cause) => {
        if (cancelled) return
        if (!(cause instanceof ApiError) || cause.status !== 404) {
          setLinkedSheet(null)
        }
      })
      .finally(() => {
        if (!cancelled) setSheetLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, isCurrentController, isMaster, token.id])

  if (!isMaster && !isCurrentController) return null

  function updateName() {
    const name = window.prompt('Nome do Token:', token.name)?.trim()
    if (name) onUpdateToken(token.id, { name })
  }

  function openCharacterSheet() {
    if (!campaignId || !linkedSheet) return
    requestCampaignCharacterSheetOpen({
      campaignId,
      sheetId: linkedSheet.sheetId,
      title: linkedSheet.title,
    })
  }

  async function saveFogSettings() {
    setFogSaving(true)
    setFogSaveError(null)
    setFogSaved(false)
    try {
      const visionConfig = normalizeTokenVisionConfig({ rangeMeters: visionRangeMeters })
      const lightConfig = normalizeFogLightSource({
        ...initialLight,
        enabled: lightEnabled,
        rangeMeters: lightRangeMeters,
      }, `token-light:${token.id}`)
      await onConfigureFog(token.id, visionConfig, lightConfig)
      setVisionRangeMeters(visionConfig.rangeMeters)
      setLightRangeMeters(lightConfig.rangeMeters)
      setFogSaved(true)
    } catch (error) {
      setFogSaveError(error instanceof Error ? error.message : 'Não foi possível salvar visão e iluminação.')
    } finally {
      setFogSaving(false)
    }
  }

  return (
    <>
      <div
        role="menu"
        aria-label={`Acoes do Token ${token.name}`}
        className="pointer-events-auto fixed z-50 w-52 overflow-hidden rounded-lg border border-white/10 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
        style={positions.root}
        onClick={(event) => event.stopPropagation()}
        onContextMenu={(event) => event.preventDefault()}
      >
        <div className="border-b border-white/10 px-2 pb-2">
          <div className="truncate text-sm font-semibold">{token.name}</div>
          <div className="truncate text-xs text-zinc-500">
            {isMaster ? `Controle: ${token.ownerName ?? 'somente Mestre'}` : 'Token controlado por voce'}
          </div>
        </div>

        {linkedSheet ? (
          <button
            type="button"
            role="menuitem"
            className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
            onClick={openCharacterSheet}
          >
            <FileText className="h-4 w-4" />
            <span>Abrir ficha</span>
          </button>
        ) : sheetLoading ? (
          <div className="mt-2 px-2 py-2 text-xs text-zinc-500">Verificando ficha...</div>
        ) : null}

        <button
          type="button"
          role="menuitem"
          aria-haspopup="menu"
          aria-expanded={settingsOpen}
          className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
          onClick={() => setSettingsOpen((current) => !current)}
        >
          <Settings className="h-4 w-4" />
          <span className="flex-1">Configurações</span>
          <ChevronRight className={`h-4 w-4 transition ${settingsOpen ? 'rotate-90' : ''}`} />
        </button>
      </div>

      {settingsOpen ? (
        <div
          role="menu"
          aria-label={`Configuracoes do Token ${token.name}`}
          className="pointer-events-auto fixed z-[51] max-h-[calc(100vh-1.5rem)] w-56 overflow-y-auto rounded-lg border border-white/10 bg-[#111217]/95 p-2 text-white shadow-2xl backdrop-blur"
          style={positions.settings}
          onClick={(event) => event.stopPropagation()}
          onContextMenu={(event) => event.preventDefault()}
        >
          <div className="border-b border-white/10 px-2 pb-2">
            <div className="truncate text-sm font-semibold">{token.name}</div>
            <div className="truncate text-xs text-zinc-500">
              {isMaster
                ? `Controle: ${token.ownerName ?? 'somente Mestre'}`
                : token.canCustomizeAppearance
                  ? 'Personalizacao autorizada pelo Mestre'
                  : 'Controle operacional'}
            </div>
          </div>

          {isMaster ? (
            <>
              <div className="mt-2 rounded-md border border-white/10 bg-black/20 px-2 py-2 text-[10px] text-zinc-500">
                O vínculo com ficha é gerenciado no painel <strong className="text-zinc-300">Fichas</strong> da campanha.
              </div>
              <label className="mt-2 grid gap-1 px-2 text-[10px] font-semibold uppercase text-zinc-500">
                Player controlador
                <select
                  value={token.controllerUserId ?? ''}
                  className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal normal-case text-white"
                  onChange={(event) => onUpdateToken(token.id, { controllerUserId: event.target.value || null })}
                >
                  <option value="">Somente Mestre</option>
                  {campaignPlayers.map((player) => (
                    <option key={player.userId} value={player.userId}>{player.actorName} — {player.email}</option>
                  ))}
                </select>
              </label>
              <section className="mt-2 grid gap-2 border-y border-white/10 px-2 py-2">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Visão e iluminação</div>
                <label className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-500">
                  Alcance da visão (m)
                  <input
                    type="number"
                    min="0.5"
                    max="1000"
                    step="0.5"
                    value={visionRangeMeters}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal normal-case text-white"
                    onChange={(event) => { setVisionRangeMeters(Number(event.currentTarget.value)); setFogSaved(false) }}
                  />
                </label>
                <label className="flex items-center gap-2 text-xs text-zinc-200">
                  <input
                    type="checkbox"
                    checked={lightEnabled}
                    className="h-4 w-4 accent-amber-500"
                    onChange={(event) => { setLightEnabled(event.currentTarget.checked); setFogSaved(false) }}
                  />
                  Fonte de luz própria
                </label>
                <label className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-500">
                  Alcance da iluminação (m)
                  <input
                    type="number"
                    min="0.5"
                    max="1000"
                    step="0.5"
                    value={lightRangeMeters}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal normal-case text-white disabled:opacity-50"
                    onChange={(event) => { setLightRangeMeters(Number(event.currentTarget.value)); setFogSaved(false) }}
                  />
                </label>
                {fogSaveError ? <p className="text-[10px] text-red-300">{fogSaveError}</p> : null}
                {fogSaved ? <p className="text-[10px] text-emerald-300">Visão e iluminação salvas.</p> : null}
                <button
                  type="button"
                  disabled={fogSaving}
                  className="rounded-md bg-indigo-600 px-2 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500 disabled:opacity-50"
                  onClick={() => void saveFogSettings()}
                >
                  {fogSaving ? 'Salvando...' : 'Salvar visão e luz'}
                </button>
              </section>
            </>
          ) : null}

          {(isMaster || token.canCustomizeAppearance) ? (
            <div className="mt-2 grid grid-cols-2 gap-1 px-2">
              <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={updateName}>
                Alterar nome
              </button>
              <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={() => setImagePickerOpen(true)}>
                Alterar imagem
              </button>
            </div>
          ) : null}

          {isMaster ? (
            <button
              type="button"
              className="mt-2 flex w-full items-center rounded-md px-2 py-2 text-left text-xs text-zinc-300 transition hover:bg-white/10"
              onClick={() => onUpdateToken(token.id, { canCustomizeAppearance: !token.canCustomizeAppearance })}
            >
              {token.canCustomizeAppearance ? '✓ Player pode alterar nome e imagem' : 'Player nao altera nome e imagem'}
            </button>
          ) : null}

          {isMaster ? (
            <>
              <button
                type="button"
                disabled={!masterCanUseVtt}
                className="mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => onToggleVisibility(token)}
              >
                {token.hidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                {token.hidden ? 'Tornar visivel' : 'Tornar invisivel'}
              </button>
              <button
                type="button"
                disabled={!masterCanUseVtt}
                className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-200 transition hover:bg-red-500/10 hover:text-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => onRemoveFromScene(token)}
              >
                <Trash2 className="h-4 w-4" />
                Remover da cena
              </button>
              <button
                type="button"
                disabled={!masterCanUseVtt}
                className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-red-300 transition hover:bg-red-500/15 hover:text-red-100 disabled:opacity-50"
                onClick={() => onDelete(token)}
              >
                <Trash2 className="h-4 w-4" />
                Excluir Token (preserva ficha)
              </button>
            </>
          ) : null}
        </div>
      ) : null}
      {imagePickerOpen ? (
        <TokenImagePickerDialog
          tokenName={token.name}
          currentAvatarUrl={token.avatarUrl}
          currentColor={token.color}
          tokenId={token.id}
          onCancel={() => setImagePickerOpen(false)}
          onSave={(changes) => onUpdateToken(token.id, changes)}
        />
      ) : null}
    </>
  )
}
