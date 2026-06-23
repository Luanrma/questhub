import { useEffect, useMemo, useState } from 'react'
import { Check, Plus, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'
import { api, ApiError } from '../lib/api'

type GameSystem = 'DND_5E' | 'PATHFINDER_2E'

type FoundCampaign = {
  id: string
  title: string
  description?: string | null
  inviteCode: string
  system: GameSystem
  gmName: string
  gmUserId: string
  joinPolicy: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  isOnline: boolean
}

type CharacterOption = {
  id: string
  name: string
  avatarUrl?: string | null
  system?: GameSystem | null
  available: boolean
}

type CharacterMode = 'existing' | 'new'

type JoinedCampaign = {
  id: string
  status?: 'ACTIVE' | 'PENDING'
}

const systemLabels: Record<GameSystem, string> = {
  DND_5E: 'D&D 5e',
  PATHFINDER_2E: 'Pathfinder 2e',
}

export function CampaignJoinPage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()
  const [inviteCode, setInviteCode] = useState('')
  const [characters, setCharacters] = useState<CharacterOption[]>([])
  const [characterMode, setCharacterMode] = useState<CharacterMode>('existing')
  const [requestedCharacterId, setRequestedCharacterId] = useState('')
  const [characterName, setCharacterName] = useState('')
  const [foundCampaign, setFoundCampaign] = useState<FoundCampaign | null>(null)
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [loadingJoin, setLoadingJoin] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const visibleCampaigns = foundCampaign ? [foundCampaign] : []
  const availableCharacters = useMemo(() => {
    return characters.filter((character) => {
      if (!character.available) return false
      if (!foundCampaign) return true
      return !character.system || character.system === foundCampaign.system
    })
  }, [characters, foundCampaign])
  const hasExistingCharacters = availableCharacters.length > 0
  const selectedCharacterId = availableCharacters.some((character) => character.id === requestedCharacterId)
    ? requestedCharacterId
    : (availableCharacters[0]?.id ?? '')
  const activeCharacterMode: CharacterMode = characterMode === 'existing' && !hasExistingCharacters ? 'new' : characterMode
  const canJoin = activeCharacterMode === 'existing' ? Boolean(selectedCharacterId) : Boolean(characterName.trim())

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        const list = await api<CharacterOption[]>('/api/characters')
        if (cancelled) return

        setCharacters(list)
        const firstAvailable = list.find((character) => character.available)
        if (firstAvailable) {
          setCharacterMode('existing')
          setRequestedCharacterId(firstAvailable.id)
          return
        }

        setCharacterMode('new')
      } catch {
        if (!cancelled) setCharacterMode('new')
      }
    }

    loadCharacters()

    return () => {
      cancelled = true
    }
  }, [])

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
    if (!canJoin) {
      setError(activeCharacterMode === 'existing' ? 'Selecione um personagem livre para continuar.' : 'Informe o nome do personagem para continuar.')
      return
    }

    setLoadingJoin(true)
    setError(null)

    try {
      const joined = await api<JoinedCampaign>('/api/campaigns/join', {
        method: 'POST',
        body: JSON.stringify({
          inviteCode: campaign.inviteCode,
          characterId: activeCharacterMode === 'existing' ? selectedCharacterId : undefined,
          characterName: activeCharacterMode === 'new' ? characterName.trim() : undefined,
        }),
      })

      await loadCampaigns({ force: true })

      if (joined.status === 'PENDING') {
        alert('Solicitacao enviada! Aguarde o mestre aprovar.')
        navigate('/campaigns', { replace: true })
        return
      }

      setActiveCampaignId(joined.id)
      navigate(`/campaign/${joined.id}/overview`, { replace: true })
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
        return
      }

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
          <section className="mt-6 grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-white">Seu personagem</h2>
              <div className="inline-flex rounded-lg border border-white/10 bg-black/20 p-1">
                <button
                  type="button"
                  disabled={!hasExistingCharacters}
                  onClick={() => setCharacterMode('existing')}
                  className={[
                    'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition disabled:opacity-40',
                    activeCharacterMode === 'existing' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                  ].join(' ')}
                >
                  <UserRound className="h-3.5 w-3.5" />
                  Existente
                </button>
                <button
                  type="button"
                  onClick={() => setCharacterMode('new')}
                  className={[
                    'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition',
                    activeCharacterMode === 'new' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                  ].join(' ')}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Novo
                </button>
              </div>
            </div>

            {activeCharacterMode === 'existing' ? (
              <div className="grid gap-2">
                {availableCharacters.length === 0 ? (
                  <div className="text-sm text-zinc-400">Nenhum personagem livre disponivel para {systemLabels[foundCampaign.system]}.</div>
                ) : (
                  availableCharacters.map((character) => (
                    <button
                      key={character.id}
                      type="button"
                      onClick={() => setRequestedCharacterId(character.id)}
                      className={[
                        'flex items-center justify-between gap-3 rounded-lg border p-3 text-left transition',
                        selectedCharacterId === character.id
                          ? 'border-indigo-300/70 bg-indigo-500/10'
                          : 'border-white/10 bg-gray-900 hover:border-white/20',
                      ].join(' ')}
                    >
                      <span className="flex items-center gap-3">
                        {character.avatarUrl ? (
                          <img src={character.avatarUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
                        ) : (
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-zinc-300">
                            <UserRound className="h-5 w-5" />
                          </span>
                        )}
                        <span>
                          <span className="block text-sm font-semibold text-white">{character.name}</span>
                          <span className="text-xs text-zinc-400">
                            {character.system ? systemLabels[character.system] : 'Sem sistema'}
                          </span>
                        </span>
                      </span>
                      {selectedCharacterId === character.id ? <Check className="h-4 w-4 text-indigo-200" /> : null}
                    </button>
                  ))
                )}
              </div>
            ) : (
              <input
                value={characterName}
                onChange={(event) => setCharacterName(event.target.value)}
                placeholder="Nome do seu personagem"
                className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </section>
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
                        disabled={loadingJoin || !canJoin}
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
