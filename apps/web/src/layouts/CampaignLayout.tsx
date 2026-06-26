import { Navigate, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Dice5, GripHorizontal, MapPinned, Play, Power, X } from 'lucide-react'
import { Aside } from '../components/Aside'
import { CharacterSheetModal } from '../components/CharacterSheetModal'
import { CHAT_LOCAL_MESSAGE_EVENT, type ChatMessage } from '../components/CampaignChat'
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
import { type DiceRollAnimation } from '../vtt/DiceRollOverlay'

type MyCampaignCharacter = {
  id: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING'
}

type ChatAck = {
  ok: boolean
  error?: string
  message?: ChatMessage
}

const diceOptions = [4, 6, 8, 10, 12, 20] as const

function rollDieValue(sides: (typeof diceOptions)[number]) {
  return Math.floor(Math.random() * sides) + 1
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
    updateVttGridSettings,
    socket,
  } = useSession()

  const presenceKeyRef = useRef<string | null>(null)
  const diceRollTimeoutRef = useRef<number | null>(null)
  const [myCharacter, setMyCharacter] = useState<MyCampaignCharacter | null>(null)
  const [mySheetOpen, setMySheetOpen] = useState(false)
  const [playerTokenRequest, setPlayerTokenRequest] = useState(0)
  const [sessionActionLoading, setSessionActionLoading] = useState(false)
  const [gridSettings, setGridSettings] = useState<VttGridSettings>(() =>
    campaignId ? readStoredGridSettings(campaignId) : defaultGridSettings,
  )
  const [gridSettingsOpen, setGridSettingsOpen] = useState(false)
  const diceMenuRef = useRef<HTMLDivElement | null>(null)
  const [diceMenuOpen, setDiceMenuOpen] = useState(false)
  const [diceRolling, setDiceRolling] = useState(false)
  const [selectedDieSides, setSelectedDieSides] = useState<(typeof diceOptions)[number]>(20)
  const [diceRollAnimation, setDiceRollAnimation] = useState<DiceRollAnimation | null>(null)
  const campaign = campaigns.find((c) => c.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'
  const canRollDice = Boolean(campaignId && campaign?.isOnline && campaign?.myStatus === 'ACTIVE' && myCharacter?.id && socket)
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
      const nextSettings = normalizeGridSettings(payload.settings)
      setGridSettings(nextSettings)
      storeGridSettings(campaignId, nextSettings)
    }

    socket.on('vtt:grid:changed', onGridChanged)

    return () => {
      socket.off('vtt:grid:changed', onGridChanged)
    }
  }, [socket, campaignId])

  useEffect(() => {
    if (!diceMenuOpen) return

    function onPointerDown(event: PointerEvent) {
      if (diceMenuRef.current?.contains(event.target as Node)) return
      setDiceMenuOpen(false)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setDiceMenuOpen(false)
    }

    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [diceMenuOpen])

  useEffect(() => {
    return () => {
      if (diceRollTimeoutRef.current) window.clearTimeout(diceRollTimeoutRef.current)
    }
  }, [])

  function applyGridSettings(settings: VttGridSettings) {
    if (!campaignId) return

    const nextSettings = normalizeGridSettings(settings)
    setGridSettings(nextSettings)
    storeGridSettings(campaignId, nextSettings)

    if (!isMaster || !campaign?.isOnline) return
    updateVttGridSettings({ campaignId, settings: nextSettings }).catch(() => {})
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
      await updateVttGridSettings({ campaignId, settings: gridSettings })
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

  async function onSwitchCampaign() {
    if (isMaster && campaign?.isOnline) {
      await endCurrentSession('/campaigns')
      return
    }

    setActiveCampaignId(null)
    navigate('/campaigns')
  }

  async function rollSelectedDie() {
    if (!campaignId || !socket || !myCharacter?.id) return

    const value = rollDieValue(selectedDieSides)
    const diceRollAnimationId = Date.now()
    setDiceRollAnimation({ id: diceRollAnimationId, sides: selectedDieSides, value })
    setDiceRolling(true)

    try {
      const ack = await new Promise<ChatAck>((resolve, reject) => {
        socket.timeout(5000).emit(
          'chat:message:create',
          { campaignId, characterId: myCharacter.id, content: `ROLOU D${selectedDieSides}: ${value}` },
          (err: Error | null, response?: ChatAck) => {
            if (err) {
              reject(new Error('Tempo esgotado ao publicar rolagem.'))
              return
            }

            resolve(response ?? { ok: false, error: 'Resposta invalida do servidor.' })
          },
        )
      })

      if (!ack.ok || !ack.message) {
        alert(ack.error ?? 'Nao foi possivel publicar a rolagem.')
        return
      }

      window.dispatchEvent(new CustomEvent<ChatMessage>(CHAT_LOCAL_MESSAGE_EVENT, { detail: ack.message }))
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Nao foi possivel publicar a rolagem.'
      alert(message)
    } finally {
      setDiceRolling(false)
      // Keep animation visible for 5 seconds, then clear it
      setTimeout(() => {
        setDiceRollAnimation(null)
      }, 5000)
    }
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
          onCreatePlayerToken={() => setPlayerTokenRequest((request) => request + 1)}
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
                <div ref={diceMenuRef} className="relative flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-9 min-w-16 gap-2 px-3"
                    disabled={!canRollDice || diceRolling}
                    title={`Rolar D${selectedDieSides}`}
                    onClick={rollSelectedDie}
                  >
                    <Dice5 className="h-4 w-4" />
                    {diceRolling ? '...' : `D${selectedDieSides}`}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="h-9 gap-2 px-3"
                    disabled={!canRollDice || diceRolling}
                    aria-haspopup="menu"
                    aria-expanded={diceMenuOpen}
                    onClick={() => setDiceMenuOpen((open) => !open)}
                  >
                    Dados
                  </Button>

                  {diceMenuOpen ? (
                    <div
                      role="menu"
                      className="absolute right-0 top-11 z-40 grid w-44 grid-cols-2 gap-1 rounded-lg border border-white/10 bg-[#101116]/95 p-2 text-white shadow-2xl backdrop-blur"
                    >
                      {diceOptions.map((sides) => (
                        <button
                          key={sides}
                          type="button"
                          role="menuitem"
                          className={[
                            'rounded-md border px-3 py-2 text-sm font-semibold transition',
                            selectedDieSides === sides
                              ? 'border-indigo-300/50 bg-indigo-500/25 text-white'
                              : 'border-white/10 bg-white/[0.03] text-zinc-100 hover:border-indigo-300/40 hover:bg-indigo-500/20 hover:text-white',
                          ].join(' ')}
                          onClick={() => {
                            setSelectedDieSides(sides)
                            setDiceMenuOpen(false)
                          }}
                        >
                          D{sides}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                {isMaster ? (
                  <Button
                    className="gap-2"
                    variant={campaign.isOnline ? 'danger' : 'primary'}
                    disabled={sessionActionLoading || !myCharacter?.id}
                    onClick={campaign.isOnline ? onEndSession : onStartSession}
                  >
                    {campaign.isOnline ? <Power className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    {campaign.isOnline ? 'Encerrar Sessão' : 'Iniciar Sessão'}
                  </Button>
                ) : null}
              </div>
            </div>
          </header>

          <main className="relative z-10 h-[calc(100vh-73px)] overflow-hidden">
            <CampaignOverviewPage
              gridSettings={gridSettings}
              gridSettingsOpen={Boolean(isMaster && gridSettingsOpen)}
              canConfigureGrid={Boolean(isMaster)}
              myCharacter={myCharacter}
              playerTokenRequest={playerTokenRequest}
              diceRollAnimation={diceRollAnimation}
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
