import { useState } from 'react'
import { ChevronRight, Eye, EyeOff, Settings, Trash2 } from 'lucide-react'
import type {
  CampaignPlayer,
  VttPlayerToken,
  VttTokenCandidate,
  VttTokenContextMenu,
} from '../domain/types'

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
  onSetLayer: (token: VttPlayerToken, layer: VttPlayerToken['layer']) => void
  onRotate: (token: VttPlayerToken, delta: number) => void
  onToggleVisibility: (token: VttPlayerToken) => void
  onRemoveFromScene: (token: VttPlayerToken) => void
  onDelete: (token: VttPlayerToken) => void
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
  tokenCandidates,
  campaignPlayers,
  onUpdateToken,
  onSetLayer,
  onRotate,
  onToggleVisibility,
  onRemoveFromScene,
  onDelete,
}: TokenContextMenuProps) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const positions = getMenuPositions(menu)
  const token = menu.token

  if (!isMaster && !isCurrentController) return null

  function updateName() {
    const name = window.prompt('Nome do Token:', token.name)?.trim()
    if (name) onUpdateToken(token.id, { name })
  }

  function updateImage() {
    const avatarUrl = window.prompt('URL da imagem (vazio para remover):', token.avatarUrl ?? '')
    if (avatarUrl !== null) onUpdateToken(token.id, { avatarUrl: avatarUrl.trim() || null })
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
              <label className="mt-2 grid gap-1 px-2 text-[10px] font-semibold uppercase text-zinc-500">
                Ficha vinculada
                <select
                  value={token.characterId ?? ''}
                  className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal normal-case text-white"
                  onChange={(event) => onUpdateToken(token.id, { characterId: event.target.value || null })}
                >
                  <option value="">Sem ficha</option>
                  {token.characterId ? <option value={token.characterId}>{token.name} (atual)</option> : null}
                  {tokenCandidates.map((candidate) => (
                    <option key={candidate.characterId} value={candidate.characterId}>{candidate.name}</option>
                  ))}
                </select>
              </label>
              <label className="mt-2 grid gap-1 px-2 text-[10px] font-semibold uppercase text-zinc-500">
                Player controlador
                <select
                  value={token.controllerUserId ?? ''}
                  className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal normal-case text-white"
                  onChange={(event) => onUpdateToken(token.id, { controllerUserId: event.target.value || null })}
                >
                  <option value="">Somente Mestre</option>
                  {campaignPlayers.map((player) => (
                    <option key={player.userId} value={player.userId}>{player.characterName} — {player.email}</option>
                  ))}
                </select>
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                <label className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-500">
                  Tamanho
                  <select
                    value={token.size}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal text-white"
                    onChange={(event) => onUpdateToken(token.id, { size: Number(event.target.value) })}
                  >
                    {[0.5, 1, 1.5, 2, 3, 4].map((size) => <option key={size} value={size}>{size}x</option>)}
                  </select>
                </label>
                <label className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-500">
                  Camada
                  <select
                    value={token.layer}
                    className="rounded-md border border-white/10 bg-black/40 px-2 py-1.5 text-xs font-normal text-white"
                    onChange={(event) => onSetLayer(token, event.target.value as VttPlayerToken['layer'])}
                  >
                    <option value="OBJECT">Objeto</option>
                    <option value="TOKEN">Token</option>
                    <option value="OVERLAY">Overlay</option>
                  </select>
                </label>
              </div>
            </>
          ) : null}

          {(isMaster || token.canCustomizeAppearance) ? (
            <div className="mt-2 grid grid-cols-2 gap-1 px-2">
              <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={updateName}>
                Alterar nome
              </button>
              <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={updateImage}>
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

          <div className="grid grid-cols-2 gap-1 px-2 pb-1">
            <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={() => onRotate(token, -45)}>↺ 45°</button>
            <button type="button" className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs hover:bg-white/10" onClick={() => onRotate(token, 45)}>↻ 45°</button>
          </div>

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
    </>
  )
}
