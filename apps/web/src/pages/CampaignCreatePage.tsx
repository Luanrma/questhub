import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Check, Crown, Plus, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api, ApiError } from '../lib/api'
import { useSession } from '../contexts/SessionContext'

type GameSystem = 'DND_5E' | 'PATHFINDER_2E'
type JoinPolicy = 'PUBLIC' | 'PRIVATE'

type CharacterOption = {
  id: string
  name: string
  avatarUrl?: string | null
  system?: GameSystem | null
  available: boolean
}

type MasterMode = 'existing' | 'new'

const systemLabels: Record<GameSystem, string> = {
  DND_5E: 'D&D 5e',
  PATHFINDER_2E: 'Pathfinder 2e',
}

export function CampaignCreatePage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()

  const [characters, setCharacters] = useState<CharacterOption[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [system, setSystem] = useState<GameSystem>('PATHFINDER_2E')
  const [joinPolicy, setJoinPolicy] = useState<JoinPolicy>('PUBLIC')
  const [masterMode, setMasterMode] = useState<MasterMode>('existing')
  const [masterCharacterId, setMasterCharacterId] = useState('')
  const [masterCharacterName, setMasterCharacterName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const submittingRef = useRef(false)

  const availableCharacters = useMemo(() => {
    return characters.filter((character) => character.available && (!character.system || character.system === system))
  }, [characters, system])

  const selectedCharacter = availableCharacters.find((character) => character.id === masterCharacterId)
  const hasExistingCharacters = availableCharacters.length > 0
  const canCreate = useMemo(() => {
    if (!title.trim()) return false
    if (masterMode === 'existing') return Boolean(masterCharacterId)
    return Boolean(masterCharacterName.trim())
  }, [masterCharacterId, masterCharacterName, masterMode, title])

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      try {
        const list = await api<CharacterOption[]>('/api/characters')
        if (cancelled) return

        setCharacters(list)
        const firstAvailable = list.find((character) => character.available && (!character.system || character.system === 'PATHFINDER_2E'))
        if (firstAvailable) {
          setMasterMode('existing')
          setMasterCharacterId(firstAvailable.id)
          return
        }

        setMasterMode('new')
      } catch {
        if (!cancelled) setMasterMode('new')
      }
    }

    loadCharacters()

    return () => {
      cancelled = true
    }
  }, [])

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canCreate) return
    if (submittingRef.current) return

    submittingRef.current = true
    setLoading(true)
    setError(null)

    try {
      const created = await api<any>('/api/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          system,
          joinPolicy,
          masterCharacterId: masterMode === 'existing' ? masterCharacterId : undefined,
          masterCharacterName: masterMode === 'new' ? masterCharacterName.trim() : undefined,
        }),
      })

      await loadCampaigns()
      setActiveCampaignId(created.id)
      navigate(`/campaign/${created.id}/overview`, { replace: true })
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
        return
      }

      setError('Erro ao criar campanha. Verifique a API/DB.')
    } finally {
      submittingRef.current = false
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        type="button"
        className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
        onClick={() => navigate('/campaigns')}
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-400/10 text-amber-100">
            <Crown className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white">Criar nova campanha</h1>
            <p className="text-sm text-zinc-300 mt-1">Escolha o sistema e o personagem que sera o mestre.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-5">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Titulo da campanha"
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descricao (opcional)"
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-28"
          />

          <div className="grid gap-3 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-200">Sistema</span>
              <select
                value={system}
                onChange={(event) => setSystem(event.target.value as GameSystem)}
                className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="PATHFINDER_2E">{systemLabels.PATHFINDER_2E}</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-200">Entrada</span>
              <select
                value={joinPolicy}
                onChange={(event) => setJoinPolicy(event.target.value as JoinPolicy)}
                className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="PUBLIC">Publica</option>
                <option value="PRIVATE">Privada</option>
              </select>
            </label>
          </div>

          <section className="grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-white">Personagem mestre</h2>
              <div className="inline-flex rounded-lg border border-white/10 bg-black/20 p-1">
                <button
                  type="button"
                  disabled={!hasExistingCharacters}
                  onClick={() => setMasterMode('existing')}
                  className={[
                    'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition disabled:opacity-40',
                    masterMode === 'existing' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                  ].join(' ')}
                >
                  <UserRound className="h-3.5 w-3.5" />
                  Existente
                </button>
                <button
                  type="button"
                  onClick={() => setMasterMode('new')}
                  className={[
                    'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition',
                    masterMode === 'new' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                  ].join(' ')}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Novo
                </button>
              </div>
            </div>

            {masterMode === 'existing' ? (
              <div className="grid gap-2">
                {availableCharacters.length === 0 ? (
                  <div className="text-sm text-zinc-400">Nenhum personagem livre disponivel.</div>
                ) : (
                  availableCharacters.map((character) => (
                    <button
                      key={character.id}
                      type="button"
                      onClick={() => setMasterCharacterId(character.id)}
                      className={[
                        'flex items-center justify-between gap-3 rounded-lg border p-3 text-left transition',
                        masterCharacterId === character.id
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
                      {masterCharacterId === character.id ? <Check className="h-4 w-4 text-indigo-200" /> : null}
                    </button>
                  ))
                )}
              </div>
            ) : (
              <input
                value={masterCharacterName}
                onChange={(event) => setMasterCharacterName(event.target.value)}
                placeholder="Nome do personagem mestre"
                className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </section>

          {selectedCharacter?.system && selectedCharacter.system !== system ? (
            <div className="rounded-lg border border-amber-300/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
              Este personagem tem outro sistema. Escolha uma campanha compativel ou outro personagem.
            </div>
          ) : null}

          {error ? (
            <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <Button type="submit" className="w-full" disabled={loading || !canCreate}>
            {loading ? 'Criando...' : 'Criar campanha'}
          </Button>
        </form>
      </div>
    </div>
  )
}
