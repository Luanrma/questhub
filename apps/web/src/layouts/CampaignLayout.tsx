import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { GripHorizontal, MapPinned, Maximize2, Minimize2, Pause, Play, Power, X } from 'lucide-react'
import { Aside } from '../components/Aside'
import { CharacterSheetModal } from '../components/CharacterSheetModal'
import { LoadingScreen } from '../components/LoadingScreen'
import { useSession } from '../contexts/SessionContext'
import { Button } from '../components/Button'
import { api } from '../lib/api'
import { CampaignOverviewPage } from '../vtt/table/CampaignOverviewPage'
import {
  defaultGridSettings,
  normalizeGridSettings,
  readStoredGridSettings,
  storeGridSettings,
  type VttGridChangedPayload,
  type VttGridSettings,
} from '../vtt/grid'
import {
  storeCampaignUserSettings,
  type CampaignUserSettings,
} from '../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import { CampaignBestiaryPage } from '../features/bestiary/pages/CampaignBestiaryPage'
import { CampaignPlayersPage } from '../features/campaign-presence/pages/CampaignPlayersPage'
import { CampaignSettingsPage } from '../features/campaigns/pages/CampaignSettingsPage'
import { PlaceholderPage } from '../features/campaigns/pages/PlaceholderPage'

type MyCampaignCharacter = {
  id: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING'
}

type CampaignPanelId = 'sessions' | 'characters' | 'bestiary' | 'players' | 'journal' | 'settings'

type FloatingPanelState = {
  id: CampaignPanelId
  position: { x: number; y: number }
  size: { width: number; height: number }
  collapsed: boolean
  zIndex: number
}

const panelTitles: Record<CampaignPanelId, string> = {
  sessions: 'Sessões',
  characters: 'Personagens',
  bestiary: 'Bestiario',
  players: 'Jogadores',
  journal: 'Diário',
  settings: 'Configurações',
}

function panelIdFromPath(pathname: string): CampaignPanelId | null {
  if (pathname.endsWith('/sessions')) return 'sessions'
  if (pathname.endsWith('/characters')) return 'characters'
  if (pathname.endsWith('/bestiary')) return 'bestiary'
  if (pathname.endsWith('/players')) return 'players'
  if (pathname.endsWith('/journal')) return 'journal'
  if (pathname.endsWith('/settings')) return 'settings'
  return null
}

function getDefaultPanelState(id: CampaignPanelId, index: number, zIndex: number): FloatingPanelState {
  const largePanel = id === 'bestiary' || id === 'settings' || id === 'players'
  return {
    id,
    position: { x: 112 + index * 28, y: 96 + index * 28 },
    size: largePanel ? { width: 920, height: 720 } : { width: 620, height: 420 },
    collapsed: false,
    zIndex,
  }
}

function getPanelTitle(pathname: string) {
  if (pathname.endsWith('/sessions')) return 'Sessões'
  if (pathname.endsWith('/characters')) return 'Personagens'
  if (pathname.endsWith('/bestiary')) return 'Bestiario'
  if (pathname.endsWith('/players')) return 'Jogadores'
  if (pathname.endsWith('/journal')) return 'Diário'
  if (pathname.endsWith('/settings')) return 'Configurações'
  return 'Painel'
}

function FloatingCampaignPanel({
  title,
  defaultPosition,
  defaultSize,
  zIndex,
  onClose,
  onFocus,
  children,
}: {
  title: string
  defaultPosition: { x: number; y: number }
  defaultSize: { width: number; height: number }
  zIndex: number
  onClose: () => void
  onFocus: () => void
  children: (size: { width: number; height: number }) => ReactNode
}) {
  const [position, setPosition] = useState(defaultPosition)
  const [size, setSize] = useState(defaultSize)
  const [collapsed, setCollapsed] = useState(false)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const resizeStartRef = useRef({ pointerX: 0, pointerY: 0, width: 0, height: 0 })
  const [dragging, setDragging] = useState(false)
  const [resizing, setResizing] = useState(false)

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      setPosition({
        x: Math.max(16, dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX),
        y: Math.max(78, dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY),
      })
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!resizing) return

      setSize({
        width: Math.min(window.innerWidth - 48, Math.max(380, resizeStartRef.current.width + event.clientX - resizeStartRef.current.pointerX)),
        height: Math.min(window.innerHeight - 104, Math.max(220, resizeStartRef.current.height + event.clientY - resizeStartRef.current.pointerY)),
      })
    }

    function onPointerUp() {
      setResizing(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [resizing])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    onFocus()
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panelX: position.x,
      panelY: position.y,
    }
    setDragging(true)
  }

  function startResize(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()
    onFocus()
    resizeStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      width: size.width,
      height: size.height,
    }
    setResizing(true)
  }

  return (
    <section
      className="campaign-floating-panel fixed z-30 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur"
      style={{
        left: position.x,
        top: position.y,
        width: Math.min(size.width, window.innerWidth - 48),
        height: collapsed ? undefined : Math.min(size.height, window.innerHeight - 104),
        zIndex,
      }}
      onPointerDown={onFocus}
    >
      <div
        className="flex cursor-grab items-center justify-between gap-3 border-b border-white/10 bg-black/30 px-4 py-3 active:cursor-grabbing"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-3">
          <GripHorizontal className="h-4 w-4 shrink-0 text-zinc-500" />
          <h1 className="truncate text-sm font-semibold text-white">{title}</h1>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            title={collapsed ? 'Expandir menu' : 'Recolher menu'}
            className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setCollapsed((current) => !current)}
          >
            {collapsed ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            type="button"
            title="Fechar painel"
            className="rounded-md p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      {!collapsed ? <div className="min-h-0 flex-1 overflow-auto p-5">{children(size)}</div> : null}
      {!collapsed ? (
        <button
          type="button"
          title="Redimensionar painel"
          aria-label="Redimensionar painel"
          className="absolute bottom-0 right-0 h-5 w-5 cursor-nwse-resize rounded-tl-md border-l border-t border-white/10 bg-white/[0.06] transition hover:bg-white/15"
          onPointerDown={startResize}
        />
      ) : null}
    </section>
  )
}

export function CampaignLayout() {
  const { campaignId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    me,
    loading,
    campaigns,
    campaignsLoading,
    setActiveCampaignId,
    enterPresence,
    startCampaignSession,
    endCampaignSession,
    pauseCampaignSession,
    resumeCampaignSession,
    updateVttGridSettings,
    socket,
  } = useSession()

  const presenceKeyRef = useRef<string | null>(null)
  const [myCharacter, setMyCharacter] = useState<MyCampaignCharacter | null>(null)
  const [mySheetOpen, setMySheetOpen] = useState(false)
  const [sessionActionLoading, setSessionActionLoading] = useState(false)
  const [openPanels, setOpenPanels] = useState<CampaignPanelId[]>([])
  const [gridSettings, setGridSettings] = useState<VttGridSettings>(() =>
    campaignId ? readStoredGridSettings(campaignId) : defaultGridSettings,
  )
  const [gridSettingsOpen, setGridSettingsOpen] = useState(false)
  const campaign = campaigns.find((c) => c.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const sessionState = campaign?.sessionState ?? (campaign?.isOnline ? 'ACTIVE' : null)
  const isTableRoute = Boolean(campaignId && location.pathname === `/campaign/${campaignId}/overview`)
  const navigationState = location.state as { characterId?: string | null } | null

  function openCampaignPanel(panelId: CampaignPanelId) {
    setOpenPanels((current) => {
      const without = current.filter((item) => item !== panelId)
      return [...without, panelId]
    })
  }

  function openCampaignPanelFromPath(path: string) {
    const panelId = panelIdFromPath(path)
    if (!panelId) return
    openCampaignPanel(panelId)
  }

  function closeCampaignPanel(panelId: CampaignPanelId) {
    setOpenPanels((current) => current.filter((item) => item !== panelId))
  }

  function renderCampaignPanel(panelId: CampaignPanelId, size: { width: number; height: number }) {
    if (panelId === 'sessions') return <PlaceholderPage title="Sessões" />
    if (panelId === 'characters') return <PlaceholderPage title="Personagens" />
    if (panelId === 'bestiary') return <CampaignBestiaryPage compact={size.width < 720} />
    if (panelId === 'players') return <CampaignPlayersPage />
    if (panelId === 'journal') return <PlaceholderPage title="Diário" />
    return <CampaignSettingsPage />
  }

  useEffect(() => {
    if (campaignId) setActiveCampaignId(campaignId)
  }, [campaignId, setActiveCampaignId])

  useEffect(() => {
    if (!campaignId || isTableRoute) return
    const panelId = panelIdFromPath(location.pathname)
    if (!panelId) return
    openCampaignPanel(panelId)
    navigate(`/campaign/${campaignId}/overview`, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId, isTableRoute, location.pathname])

  useEffect(() => {
    if (!campaignId || !campaign) return

    let cancelled = false
    api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`)
      .then((response) => {
        if (cancelled) return
        storeCampaignUserSettings(campaignId, response.settings)
      })
      .catch(() => {
        // Cache local continua valido quando o backend nao responder.
      })

    return () => {
      cancelled = true
    }
  }, [campaign, campaignId])

  useEffect(() => {
    if (!socket || !campaignId) return

    function onGridChanged(payload: VttGridChangedPayload) {
      if (payload.campaignId !== campaignId) return
      if (isMaster) return
      const nextSettings = normalizeGridSettings(payload.settings)
      setGridSettings(nextSettings)
      storeGridSettings(campaignId, nextSettings)
    }

    socket.on('vtt:grid:changed', onGridChanged)

    return () => {
      socket.off('vtt:grid:changed', onGridChanged)
    }
  }, [socket, campaignId, isMaster])

  function applyGridSettings(settings: VttGridSettings, options?: { realtime?: boolean; sceneId?: string }) {
    if (!campaignId) return

    const nextSettings = normalizeGridSettings(settings)
    setGridSettings(nextSettings)
    storeGridSettings(campaignId, nextSettings)

    if (options?.realtime === false) return
    if (!isMaster || !campaign?.isOnline) return
    updateVttGridSettings({
      campaignId,
      sceneId: options?.sceneId,
      settings: nextSettings,
    }).catch(() => {})
  }

  // Hooks precisam ser chamados sempre: a lógica fica DENTRO do efeito.
  useEffect(() => {
    ;(async () => {
      if (!campaignId) return
      if (loading) return
      if (!me) return
      if (campaignsLoading) return

      if (!campaign) {
        navigate('/campaigns', { replace: true })
        return
      }

      try {
        const selectedCharacterId = navigationState?.characterId ?? campaign.myCharacterId
        const selectedCharacterQuery = selectedCharacterId ? `?characterId=${encodeURIComponent(selectedCharacterId)}` : ''
        const ch = await api<MyCampaignCharacter>(`/api/campaigns/${campaignId}/my-character${selectedCharacterQuery}`)
        setMyCharacter(ch)
        if (ch?.id && ch.role === 'PLAYER' && campaign.isOnline) {
          const key = `${campaignId}:${ch.id}`
          if (presenceKeyRef.current === key) return
          presenceKeyRef.current = key
          enterPresence({ campaignId, characterId: ch.id })
        }
      } catch {
        alert('Campanha offline (mestre não está online) ou acesso não liberado.')
        navigate('/campaigns', { replace: true })
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId, loading, me, campaignsLoading, campaign])

  async function onStartSession() {
    if (!campaignId || !myCharacter?.id) return

    setSessionActionLoading(true)
    try {
      await startCampaignSession({ campaignId, characterId: myCharacter.id })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Não foi possível iniciar a sessão.'
      alert(message)
    } finally {
      setSessionActionLoading(false)
    }
  }

  async function endCurrentSession(destination?: '/campaigns') {
    if (!campaignId) return

    setSessionActionLoading(true)
    try {
      await endCampaignSession({ campaignId })
      if (destination) {
        setActiveCampaignId(null)
        navigate(destination, { replace: true })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Não foi possível encerrar a sessão.'
      alert(message)
    } finally {
      setSessionActionLoading(false)
    }
  }

  async function onEndSession() {
    const confirmed = window.confirm('Deseja realmente encerrar a sessão? Todos os jogadores serão enviados para a tela inicial.')
    if (!confirmed) return
    await endCurrentSession()
  }

  async function onTogglePauseSession() {
    if (!campaignId || !campaign?.isOnline) return

    setSessionActionLoading(true)
    try {
      if (sessionState === 'PAUSED') {
        await resumeCampaignSession({ campaignId })
      } else {
        await pauseCampaignSession({ campaignId })
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Nao foi possivel alterar a pausa da sessao.'
      alert(message)
    } finally {
      setSessionActionLoading(false)
    }
  }

  async function onSwitchCampaign() {
    if (isMaster && campaign?.isOnline) {
      await endCurrentSession('/campaigns')
      return
    }

    setActiveCampaignId(null)
    navigate('/campaigns')
  }

  if (loading) return <LoadingScreen />
  if (!me) return <Navigate to="/login" replace />
  if (!campaignId) return <Navigate to="/campaigns" replace />

  if (campaignsLoading) return <LoadingScreen />

  if (!campaign) {
    // não tem acesso / não existe na lista do usuário
    return <Navigate to="/campaigns" replace />
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#08090c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
      <div className="relative h-full min-h-0">
        <Aside
          campaignId={campaignId}
          role={campaign.myRole}
          canOpenMySheet={Boolean(myCharacter?.id)}
          onOpenMySheet={() => setMySheetOpen(true)}
          onSwitchCampaign={onSwitchCampaign}
          onOpenCampaignPanel={openCampaignPanelFromPath}
        />

        <div className="flex h-full min-h-0 flex-col">
          {/* Top bar (inspirado no layout de referência) */}
          <header className="relative z-30 shrink-0 border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="flex min-h-[73px] items-center justify-between gap-4 py-3 pl-24 pr-6 max-sm:pl-4 max-sm:pr-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs uppercase text-zinc-400">
                  <MapPinned className="h-4 w-4 text-indigo-300" />
                  Mesa ativa
                  <span
                    className={[
                      'rounded-full border px-2 py-0.5 text-[10px]',
                      campaign.isOnline
                        ? 'border-emerald-300/25 bg-emerald-400/10 text-emerald-200'
                        : 'border-zinc-300/20 bg-zinc-400/10 text-zinc-300',
                    ].join(' ')}
                  >
                    {campaign.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="truncate font-semibold text-white">{campaign.title}</div>
                <div className="text-xs text-zinc-300">Mestre: {campaign.gmName}</div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {(!isMaster && campaign.isOnline) && (
                  <>
                    {sessionState === 'PAUSED' ? (
                      <span className="text-red-500">
                        <Pause className="h-4 w-4" />
                      </span>
                    ) : (
                      <span className="text-green-500">
                        <Play className="h-4 w-4" />
                      </span>
                    )}
                    {sessionState === 'PAUSED' ? 'Sessão Pausada' : 'Sessão em Andamento'}
                  </>
                )}
                {isMaster ? (
                  <>
                    {campaign.isOnline ? (
                      <Button
                        className="gap-2"
                        variant="ghost"
                        disabled={sessionActionLoading || !myCharacter?.id}
                        onClick={onTogglePauseSession}
                      >
                        {sessionState === 'PAUSED'
                          ? <span className="text-green-500"><Play className="h-4 w-4" /></span>
                          : <span className="text-red-500"><Pause className="h-4 w-4" /></span>
                        }
                        {sessionState === 'PAUSED' ? 'Retomar Sessao' : 'Pausar Sessão'}
                      </Button>
                    ) : null}
                    <Button
                      className="gap-2"
                      variant={campaign.isOnline ? 'danger' : 'primary'}
                      disabled={sessionActionLoading || !myCharacter?.id}
                      onClick={campaign.isOnline ? onEndSession : onStartSession}
                    >
                      {campaign.isOnline ? <Power className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {campaign.isOnline ? 'Encerrar Sessão' : 'Iniciar Sessão'}
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
          </header>

          <main className="relative z-10 min-h-0 flex-1 overflow-hidden">
            <CampaignOverviewPage
              gridSettings={gridSettings}
              gridSettingsOpen={Boolean(isMaster && gridSettingsOpen)}
              canConfigureGrid={Boolean(isMaster)}
              sessionState={sessionState}
              myCharacter={myCharacter}
              onGridSettingsChange={applyGridSettings}
              onGridSettingsOpenChange={setGridSettingsOpen}
            />

            {openPanels.map((panelId, index) => {
              const panel = getDefaultPanelState(panelId, index, 30 + index)

              return (
                <FloatingCampaignPanel
                  key={panelId}
                  title={panelTitles[panelId] ?? getPanelTitle(location.pathname)}
                  defaultPosition={panel.position}
                  defaultSize={panel.size}
                  zIndex={panel.zIndex}
                  onFocus={() => openCampaignPanel(panelId)}
                  onClose={() => closeCampaignPanel(panelId)}
                >
                  {(size) => renderCampaignPanel(panelId, size)}
                </FloatingCampaignPanel>
              )
            })}
          </main>
        </div>
      </div>

      {mySheetOpen && myCharacter ? (
        <CharacterSheetModal characterId={myCharacter.id} characterName={myCharacter.name} onClose={() => setMySheetOpen(false)} />
      ) : null}
    </div>
  )
}
