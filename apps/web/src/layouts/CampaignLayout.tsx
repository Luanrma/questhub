import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { GripHorizontal, MapPinned, Pause, Play, Power, X } from 'lucide-react'
import { Aside } from '../components/Aside'
import { CharacterSheetModal } from '../components/CharacterSheetModal'
import { LoadingScreen } from '../components/LoadingScreen'
import { useSession } from '../contexts/SessionContext'
import { Button } from '../components/Button'
import { api } from '../lib/api'
import { CampaignOverviewPage } from '../pages/campaign/CampaignOverviewPage'
import {
  defaultGridSettings,
  normalizeGridSettings,
  readStoredGridSettings,
  storeGridSettings,
  type VttGridChangedPayload,
  type VttGridSettings,
} from '../vtt/grid'

type MyCampaignCharacter = {
  id: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING'
}

function getPanelTitle(pathname: string) {
  if (pathname.endsWith('/sessions')) return 'Sessões'
  if (pathname.endsWith('/characters')) return 'Personagens'
  if (pathname.endsWith('/players')) return 'Jogadores'
  if (pathname.endsWith('/journal')) return 'Diário'
  if (pathname.endsWith('/settings')) return 'Configurações'
  return 'Painel'
}

function FloatingCampaignPanel({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 112, y: 96 })
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const [dragging, setDragging] = useState(false)

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

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panelX: position.x,
      panelY: position.y,
    }
    setDragging(true)
  }

  return (
    <section
      className="campaign-floating-panel fixed z-30 flex max-h-[calc(100vh-120px)] w-[min(920px,calc(100vw-160px))] flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl backdrop-blur"
      style={{ left: position.x, top: position.y }}
    >
      <div
        className="flex cursor-grab items-center justify-between gap-3 border-b border-white/10 bg-black/30 px-4 py-3 active:cursor-grabbing"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-3">
          <GripHorizontal className="h-4 w-4 shrink-0 text-zinc-500" />
          <h1 className="truncate text-sm font-semibold text-white">{title}</h1>
        </div>
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
      <div className="min-h-0 overflow-auto p-5">{children}</div>
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
  const [gridSettings, setGridSettings] = useState<VttGridSettings>(() =>
    campaignId ? readStoredGridSettings(campaignId) : defaultGridSettings,
  )
  const [gridSettingsOpen, setGridSettingsOpen] = useState(false)
  const campaign = campaigns.find((c) => c.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const sessionState = campaign?.sessionState ?? (campaign?.isOnline ? 'ACTIVE' : null)
  const isTableRoute = Boolean(campaignId && location.pathname === `/campaign/${campaignId}/overview`)
  const hasFloatingPanel = !isTableRoute
  const panelTitle = getPanelTitle(location.pathname)

  useEffect(() => {
    if (campaignId) setActiveCampaignId(campaignId)
  }, [campaignId, setActiveCampaignId])

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

  function applyGridSettings(settings: VttGridSettings, options?: { clearSceneTokens?: boolean }) {
    if (!campaignId) return

    const nextSettings = normalizeGridSettings(settings)
    setGridSettings(nextSettings)
    storeGridSettings(campaignId, nextSettings)

    if (!isMaster || !campaign?.isOnline) return
    updateVttGridSettings({ campaignId, settings: nextSettings, clearSceneTokens: options?.clearSceneTokens }).catch(() => {})
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
        const ch = await api<MyCampaignCharacter>(`/api/campaigns/${campaignId}/my-character`)
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
    <div className="relative min-h-screen w-full overflow-hidden bg-[#08090c]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />
      <div className="min-h-screen">
        <Aside
          campaignId={campaignId}
          role={campaign.myRole}
          canOpenMySheet={Boolean(myCharacter?.id)}
          onOpenMySheet={() => setMySheetOpen(true)}
          onSwitchCampaign={onSwitchCampaign}
        />

        <div className="min-h-screen">
          {/* Top bar (inspirado no layout de referência) */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur">
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

          <main className="relative z-10 h-[calc(100vh-73px)] overflow-hidden">
            <CampaignOverviewPage
              gridSettings={gridSettings}
              gridSettingsOpen={Boolean(isMaster && gridSettingsOpen)}
              canConfigureGrid={Boolean(isMaster)}
              sessionState={sessionState}
              myCharacter={myCharacter}
              onGridSettingsChange={applyGridSettings}
              onGridSettingsOpenChange={setGridSettingsOpen}
            />

            {hasFloatingPanel ? (
              <FloatingCampaignPanel title={panelTitle} onClose={() => navigate(`/campaign/${campaignId}/overview`)}>
                <Outlet />
              </FloatingCampaignPanel>
            ) : null}
          </main>
        </div>
      </div>

      {mySheetOpen && myCharacter ? (
        <CharacterSheetModal characterId={myCharacter.id} characterName={myCharacter.name} onClose={() => setMySheetOpen(false)} />
      ) : null}
    </div>
  )
}
