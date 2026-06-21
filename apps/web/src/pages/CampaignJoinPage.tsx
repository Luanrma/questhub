import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'
import { api, ApiError } from '../lib/api'

type FoundCampaign = {
  id: string
  title: string
  description?: string | null
  inviteCode: string
  gmName: string
  gmUserId: string
  joinPolicy: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  isOnline: boolean
}

export function CampaignJoinPage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()
  const [inviteCode, setInviteCode] = useState('')
  const [characterName, setCharacterName] = useState('')
  const [foundCampaign, setFoundCampaign] = useState<FoundCampaign | null>(null)
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [loadingJoin, setLoadingJoin] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const visibleCampaigns = foundCampaign ? [foundCampaign] : []

  async function onSearch() {
    const code = inviteCode.trim().toUpperCase()
    if (!code) return

    setLoadingSearch(true)
    setError(null)
    setFoundCampaign(null)

    try {
      const campaign = await api<FoundCampaign>(`/api/campaigns/invite/${encodeURIComponent(code)}`)
      setFoundCampaign(campaign)
    } catch (err) {
      if (err instanceof ApiError && err.status === 404) {
        setError('Campanha nao encontrada. Confira o codigo de convite.')
        return
      }
      setError('Nao foi possivel procurar a campanha agora.')
    } finally {
      setLoadingSearch(false)
    }
  }

  async function onJoin(campaign: FoundCampaign) {
    if (!characterName.trim()) {
      setError('Informe o nome do personagem para continuar.')
      return
    }

    setLoadingJoin(true)
    setError(null)

    try {
      const joined = await api<any>('/api/campaigns/join', {
        method: 'POST',
        body: JSON.stringify({ inviteCode: campaign.inviteCode, characterName: characterName.trim() }),
      })

      await loadCampaigns({ force: true })

      if (joined.status === 'PENDING') {
        alert('Solicitacao enviada! Aguarde o mestre aprovar.')
        navigate('/campaigns', { replace: true })
        return
      }

      setActiveCampaignId(joined.id)
      navigate(`/campaign/${joined.id}/overview`, { replace: true })
    } catch {
      setError('Nao foi possivel entrar. Confira o codigo e o personagem.')
    } finally {
      setLoadingJoin(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        type="button"
        className="text-sm text-zinc-300 hover:text-white mb-4"
        onClick={() => navigate('/campaigns')}
      >
        Voltar
      </button>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold text-white">Entrar em uma campanha</h1>
        <p className="text-sm text-zinc-300 mt-1">Digite o invite code fornecido pelo mestre.</p>

        <div className="mt-6 grid gap-3">
          <input
            value={inviteCode}
            onChange={(event) => {
              setInviteCode(event.target.value)
              setFoundCampaign(null)
              setError(null)
            }}
            placeholder="Codigo de convite (ex.: ABCD-1234)"
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase"
          />
          <Button className="w-full" disabled={loadingSearch || !inviteCode.trim()} onClick={onSearch}>
            {loadingSearch ? 'Procurando...' : 'Procurar campanha'}
          </Button>
        </div>

        {foundCampaign ? (
          <div className="mt-6 grid gap-3">
            <input
              value={characterName}
              onChange={(event) => setCharacterName(event.target.value)}
              placeholder="Nome do seu personagem"
              className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        ) : null}

        {error ? (
          <div className="mt-4 rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <div className="text-xs text-zinc-400">resultado</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="text-lg font-semibold text-white">Campanhas disponiveis para voce</h2>
        <div className="mt-4 grid gap-3">
          {visibleCampaigns.length === 0 ? (
            <div className="text-sm text-zinc-400">Nenhuma campanha ainda.</div>
          ) : (
            visibleCampaigns.map((campaign) => {
              const isFound = foundCampaign?.id === campaign.id
              const isPrivate = campaign.joinPolicy === 'PRIVATE'

              return (
                <div key={campaign.id} className="w-full rounded-lg border border-white/10 bg-black/20 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-white font-semibold flex flex-wrap items-center gap-2">
                        {campaign.title}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-400/10 text-zinc-200 border border-zinc-300/20">
                          {isPrivate ? 'Privada' : 'Publica'}
                        </span>
                        <span
                          className={[
                            'text-[10px] px-2 py-0.5 rounded-full border',
                            campaign.isOnline
                              ? 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20'
                              : 'bg-zinc-400/10 text-zinc-200 border-zinc-300/20',
                          ].join(' ')}
                        >
                          {campaign.isOnline ? 'Online' : 'Offline'}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-300 mt-1">Mestre: {campaign.gmName}</div>
                      {campaign.description ? (
                        <p className="mt-2 text-sm text-zinc-400">{campaign.description}</p>
                      ) : null}
                    </div>

                    {isFound ? (
                      <Button
                        className="shrink-0 px-3 py-1.5 text-xs"
                        disabled={loadingJoin}
                        onClick={() => onJoin(campaign)}
                      >
                        {isPrivate ? 'Solicitar entrada' : 'Entrar'}
                      </Button>
                    ) : null}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
