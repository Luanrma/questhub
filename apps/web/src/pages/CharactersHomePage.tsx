import { useEffect, useMemo, useState } from 'react'
import { Pencil, Plus, ScrollText, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api } from '../lib/api'

type GameSystem = 'DND_5E' | 'PATHFINDER_2E'

type CharacterCampaign = {
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  campaign: {
    id: string
    title: string
    system: GameSystem
  }
}

type Character = {
  id: string
  name: string
  avatarUrl?: string | null
  bio?: string | null
  system?: GameSystem | null
  createdAt: string
  campaigns: CharacterCampaign[]
  available: boolean
  hasSheet: boolean
}

const systemLabels: Record<GameSystem, string> = {
  DND_5E: 'D&D 5e',
  PATHFINDER_2E: 'Pathfinder 2e',
}

const roleLabels: Record<CharacterCampaign['role'], string> = {
  MASTER: 'Mestre',
  PLAYER: 'Jogador',
  NPC: 'NPC',
}

export function CharactersHomePage() {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const sorted = useMemo(() => {
    return [...characters].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  }, [characters])

  useEffect(() => {
    let cancelled = false

    async function loadCharacters() {
      setLoading(true)
      setError(null)

      try {
        const list = await api<Character[]>('/api/characters')
        if (!cancelled) setCharacters(list)
      } catch {
        if (!cancelled) setError('Não foi possível carregar seus personagens.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadCharacters()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-white font-semibold">Quest Hub</div>
          <div className="text-xs text-zinc-300">Personagens</div>
        </div>
        <Button variant="ghost" onClick={() => navigate('/home')}>
          Home
        </Button>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/5 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-400/10 text-amber-100">
            <Plus className="h-4 w-4" />
          </span>
          <h1 className="text-lg font-semibold text-white">Criar personagem</h1>
        </div>
        <p className="mt-1 text-sm text-zinc-300">Prepare um personagem livre para usar em campanhas.</p>
        <Button className="mt-4 w-full gap-2 sm:w-auto" onClick={() => navigate('/characters/new')}>
          <Plus className="h-4 w-4" />
          Criar personagem
        </Button>
      </div>

      <section className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Meus personagens</h2>
          {loading ? <span className="text-xs text-zinc-400">Carregando...</span> : null}
        </div>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="mt-4 grid gap-3">
          {!loading && sorted.length === 0 ? (
            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-zinc-400">
              Nenhum personagem ainda.
            </div>
          ) : null}

          {sorted.map((character) => {
            const campaignLink = character.campaigns[0]

            return (
              <div key={character.id} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="flex items-start gap-4">
                  {character.avatarUrl ? (
                    <img
                      src={character.avatarUrl}
                      alt=""
                      className="h-12 w-12 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-zinc-300">
                      <UserRound className="h-6 w-6" />
                    </span>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-white">{character.name}</h3>
                        <span
                          className={[
                            'rounded-full border px-2 py-0.5 text-[10px]',
                            character.available
                              ? 'border-emerald-300/20 bg-emerald-400/10 text-emerald-200'
                              : 'border-indigo-300/20 bg-indigo-400/10 text-indigo-200',
                          ].join(' ')}
                        >
                          {character.available ? 'Livre' : 'Em campanha'}
                        </span>
                        {character.hasSheet ? (
                          <span className="rounded-full border border-zinc-300/20 bg-zinc-400/10 px-2 py-0.5 text-[10px] text-zinc-200">
                            Ficha
                          </span>
                        ) : null}
                      </div>

                      <Button
                        variant="ghost"
                        className="shrink-0 gap-2 px-3 py-1.5 text-xs"
                        onClick={() => navigate(`/characters/${character.id}/edit`)}
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Editar
                      </Button>
                    </div>

                    <div className="mt-1 text-xs text-zinc-400">
                      {character.system ? systemLabels[character.system] : 'Sem sistema definido'}
                    </div>

                    {character.bio ? <p className="mt-3 text-sm text-zinc-300">{character.bio}</p> : null}

                    {campaignLink ? (
                      <div className="mt-3 flex items-center gap-2 text-xs text-zinc-300">
                        <ScrollText className="h-3.5 w-3.5" />
                        <span>
                          {campaignLink.campaign.title} · {roleLabels[campaignLink.role]} · {campaignLink.status}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
