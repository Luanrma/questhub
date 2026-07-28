import { useMemo, useRef, useState } from 'react'
import { ArrowLeft, Crown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api, ApiError } from '../lib/api'
import { useSession } from '../contexts/SessionContext'
import { GAME_SYSTEM_OPTIONS, type GameSystemKey } from '../game-systems/registry'

type JoinPolicy = 'PUBLIC' | 'PRIVATE'

type CreatedCampaign = {
  id: string
}

export function CampaignCreatePage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [gameSystem, setGameSystem] = useState<GameSystemKey | ''>('')
  const [joinPolicy, setJoinPolicy] = useState<JoinPolicy>('PUBLIC')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const submittingRef = useRef(false)

  const canCreate = useMemo(
    () => Boolean(title.trim() && gameSystem),
    [gameSystem, title],
  )

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canCreate || !gameSystem || submittingRef.current) return

    submittingRef.current = true
    setLoading(true)
    setError(null)

    try {
      const created = await api<CreatedCampaign>('/api/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || undefined,
          joinPolicy,
          gameSystem,
        }),
      })

      await loadCampaigns({ force: true })
      setActiveCampaignId(created.id)
      navigate(`/campaign/${created.id}/overview`, { replace: true })
    } catch (cause) {
      if (cause instanceof ApiError) {
        setError(cause.message)
      } else {
        setError('Erro ao criar campanha. Verifique a API/DB.')
      }
    } finally {
      submittingRef.current = false
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
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
            <p className="mt-1 text-sm text-zinc-300">
              O sistema escolhido determinará os catálogos, regras e o renderer das fichas criadas dentro desta campanha.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-200">Título *</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Título da campanha"
              maxLength={120}
              className="rounded border border-white/10 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-200">Descrição</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Descrição opcional"
              className="min-h-28 rounded border border-white/10 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-200">Sistema de jogo *</span>
            <select
              value={gameSystem}
              onChange={(event) => setGameSystem(event.target.value as GameSystemKey | '')}
              required
              className="rounded border border-white/10 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecione o sistema</option>
              {GAME_SYSTEM_OPTIONS.map((system) => (
                <option key={system.key} value={system.key}>{system.label}</option>
              ))}
            </select>
            <span className="text-xs text-zinc-400">
              Jogadores não escolhem sistema nem criam fichas. O Mestre fará isso dentro da campanha.
            </span>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-200">Entrada</span>
            <select
              value={joinPolicy}
              onChange={(event) => setJoinPolicy(event.target.value as JoinPolicy)}
              className="rounded border border-white/10 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="PUBLIC">Pública</option>
              <option value="PRIVATE">Privada</option>
            </select>
          </label>

          <div className="rounded-lg border border-indigo-300/15 bg-indigo-500/10 px-4 py-3 text-sm text-indigo-100/80">
            A campanha será criada sem ficha mecânica do Mestre. Depois, use <strong>Fichas</strong> no painel lateral para criar e atribuir fichas.
          </div>

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
