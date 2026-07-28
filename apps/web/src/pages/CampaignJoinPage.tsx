import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'
import { api, ApiError } from '../lib/api'
import { getGameSystemOption, type GameSystemKey } from '../game-systems/registry'

type FoundCampaign = {
  id: string
  title: string
  description?: string | null
  inviteCode: string
  gmName: string
  gmUserId: string
  gameSystem: GameSystemKey
  joinPolicy: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  isOnline: boolean
}

type JoinedCampaign = {
  id: string
  status?: 'ACTIVE' | 'PENDING'
}

type CampaignSystemLookup = {
  campaignId: string
  gameSystem: GameSystemKey
}

export function CampaignJoinPage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()
  const [inviteCode, setInviteCode] = useState('')
  const [foundCampaign, setFoundCampaign] = useState<FoundCampaign | null>(null)
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [loadingJoin, setLoadingJoin] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSearch() {
    const code = inviteCode.trim().toUpperCase()
    if (!code) return

    setLoadingSearch(true)
    setError(null)
    setFoundCampaign(null)

    try {
      const [campaign, system] = await Promise.all([
        api<Omit<FoundCampaign, 'gameSystem'>>(`/api/campaigns/invite/${encodeURIComponent(code)}`),
        api<CampaignSystemLookup>(`/api/game-systems/campaign-invites/${encodeURIComponent(code)}`),
      ])
      setFoundCampaign({ ...campaign, gameSystem: system.gameSystem })
    } catch (cause) {
      if (cause instanceof ApiError && cause.status === 404) {
        setError('Campanha não encontrada. Confira o código de convite.')
      } else {
        setError('Não foi possível procurar a campanha agora.')
      }
    } finally {
      setLoadingSearch(false)
    }
  }

  async function onJoin(campaign: FoundCampaign) {
    setLoadingJoin(true)
    setError(null)

    try {
      const joined = await api<JoinedCampaign>('/api/campaigns/join', {
        method: 'POST',
        body: JSON.stringify({
          inviteCode: campaign.inviteCode,
        }),
      })

      await loadCampaigns({ force: true })

      if (joined.status === 'PENDING') {
        alert('Solicitação enviada! Aguarde o Mestre aprovar. Os atores e fichas serão atribuídos dentro da campanha.')
        navigate('/campaigns', { replace: true })
        return
      }

      setActiveCampaignId(joined.id)
      navigate(`/campaign/${joined.id}/overview`, { replace: true })
    } catch (cause) {
      if (cause instanceof ApiError) {
        setError(cause.message)
      } else {
        setError('Não foi possível entrar. Confira o código da campanha.')
      }
    } finally {
      setLoadingJoin(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <button
        type="button"
        className="mb-4 text-sm text-zinc-300 hover:text-white"
        onClick={() => navigate('/campaigns')}
      >
        Voltar
      </button>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold text-white">Entrar em uma campanha</h1>
        <p className="mt-1 text-sm text-zinc-300">Digite o código de convite fornecido pelo Mestre.</p>

        <div className="mt-6 grid gap-3">
          <input
            value={inviteCode}
            onChange={(event) => {
              setInviteCode(event.target.value)
              setFoundCampaign(null)
              setError(null)
            }}
            placeholder="Código de convite (ex.: ABCD-1234)"
            className="rounded border border-white/10 bg-gray-900 p-3 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button className="w-full" disabled={loadingSearch || !inviteCode.trim()} onClick={onSearch}>
            {loadingSearch ? 'Procurando...' : 'Procurar campanha'}
          </Button>
        </div>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        {foundCampaign ? (
          <section className="mt-6 rounded-lg border border-white/10 bg-black/20 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-white">{foundCampaign.title}</h2>
                  <span className="rounded-full border border-purple-300/20 bg-purple-400/10 px-2 py-0.5 text-[10px] text-purple-100">
                    {getGameSystemOption(foundCampaign.gameSystem)?.label ?? foundCampaign.gameSystem}
                  </span>
                  <span className="rounded-full border border-zinc-300/20 bg-zinc-400/10 px-2 py-0.5 text-[10px] text-zinc-200">
                    {foundCampaign.joinPolicy === 'PRIVATE' ? 'Privada' : 'Pública'}
                  </span>
                </div>
                <div className="mt-1 text-xs text-zinc-300">Mestre: {foundCampaign.gmName}</div>
                {foundCampaign.description ? (
                  <p className="mt-3 text-sm text-zinc-400">{foundCampaign.description}</p>
                ) : null}
              </div>

              <Button
                className="shrink-0"
                disabled={loadingJoin}
                onClick={() => void onJoin(foundCampaign)}
              >
                {loadingJoin ? 'Entrando...' : 'Entrar'}
              </Button>
            </div>

            <div className="mt-4 rounded-lg border border-indigo-300/15 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-100/80">
              Você entrará apenas como participante. O sistema e o formato da ficha são definidos pela campanha, e somente o Mestre poderá criar e atribuir sua ficha.
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
