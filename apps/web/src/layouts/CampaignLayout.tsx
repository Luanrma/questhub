import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Aside } from '../components/Aside'
import { LoadingScreen } from '../components/LoadingScreen'
import { useSession } from '../contexts/SessionContext'
import { Button } from '../components/Button'
import { api } from '../lib/api'

export function CampaignLayout() {
  const { campaignId } = useParams()
  const navigate = useNavigate()
  const { me, loading, campaigns, campaignsLoading, setActiveCampaignId, enterPresence } = useSession()

  const presenceKeyRef = useRef<string | null>(null)
  const campaign = campaigns.find((c) => c.id === campaignId)

  useEffect(() => {
    if (campaignId) setActiveCampaignId(campaignId)
  }, [campaignId, setActiveCampaignId])

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
        const ch = await api<any>(`/api/campaigns/${campaignId}/my-character`)
        if (ch?.id) {
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

  if (loading) return <LoadingScreen />
  if (!me) return <Navigate to="/login" replace />
  if (!campaignId) return <Navigate to="/campaigns" replace />

  // Enquanto carrega campanhas, mostra loading (para resolver título/GM etc.)
  if (campaignsLoading) return <LoadingScreen />

  if (!campaign) {
    // não tem acesso / não existe na lista do usuário
    return <Navigate to="/campaigns" replace />
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="flex min-h-screen">
        <Aside campaignId={campaignId} />

        <div className="flex-1">
          {/* Top bar (inspirado no layout de referência) */}
          <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <div className="text-white font-semibold">{campaign.title}</div>
                <div className="text-xs text-zinc-300">Mestre: {campaign.gmName}</div>
              </div>

              <div className="flex items-center gap-2">
                <Button className="gap-2">
                  <span className="text-lg leading-none">＋</span>
                  Nova sessão
                </Button>
              </div>
            </div>
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
