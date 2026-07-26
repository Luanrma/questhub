import { useEffect, useMemo, useState } from 'react'
import {
  BookUser,
  FilePlus2,
  RefreshCw,
  Search,
  UserRound,
  X,
} from 'lucide-react'
import { api, ApiError } from '../lib/api'
import { requestCampaignCharacterSheetOpen } from './character-sheet-window-events'
import type { GameSystemKey } from './registry'

type CharacterSheetManagerEntry = {
  characterId: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER' | 'NPC'
  status: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  ownerLabel: string
  hasSheet: boolean
  updatedAt: string | null
  token: { id: string; name: string } | null
  subtitle: string | null
  badges: string[]
  stats: Array<{ label: string; value: string }>
  warnings: string[]
}

type AssignmentTarget = {
  userId: string
  role: 'MASTER' | 'PLAYER'
  email: string
  identityCharacterId: string
  identityName: string
  hasSheet: boolean
}

type CharacterSheetManagerResponse = {
  available: boolean
  system: {
    key: GameSystemKey
    label: string
  }
  entries: CharacterSheetManagerEntry[]
  assignmentTargets: AssignmentTarget[]
}

type Props = {
  campaignId: string
  onClose: () => void
}

type CreateRole = 'MASTER' | 'PLAYER' | 'NPC'

const roleLabels: Record<CharacterSheetManagerEntry['role'], string> = {
  MASTER: 'Mestre',
  PLAYER: 'Player',
  NPC: 'NPC',
}

const statusLabels: Record<CharacterSheetManagerEntry['status'], string> = {
  PENDING: 'Pendente',
  ACTIVE: 'Ativo',
  REJECTED: 'Rejeitado',
  LEFT: 'Saiu',
  DEAD: 'Morto',
}

function CharacterAvatar({ entry }: { entry: CharacterSheetManagerEntry }) {
  if (entry.avatarUrl) {
    return (
      <img
        src={entry.avatarUrl}
        alt=""
        className="h-16 w-16 shrink-0 rounded-xl border border-indigo-300/25 bg-black/30 object-cover"
      />
    )
  }

  return (
    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
      <UserRound className="h-7 w-7" />
    </div>
  )
}

export function CampaignCharacterSheetsModal({ campaignId, onClose }: Props) {
  const [data, setData] = useState<CharacterSheetManagerResponse | null>(null)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshVersion, setRefreshVersion] = useState(0)
  const [creating, setCreating] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const [createRole, setCreateRole] = useState<CreateRole>('PLAYER')
  const [name, setName] = useState('')
  const [assignedUserId, setAssignedUserId] = useState('')

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    api<CharacterSheetManagerResponse>(`/api/campaigns/${campaignId}/character-sheets`)
      .then((response) => {
        if (cancelled) return
        setData(response)
        const firstAvailablePlayer = response.assignmentTargets.find(
          (target) => target.role === 'PLAYER' && !target.hasSheet,
        )
        setAssignedUserId((current) => current || firstAvailablePlayer?.userId || '')
      })
      .catch((cause) => {
        if (cancelled) return
        setError(cause instanceof ApiError ? cause.message : 'Não foi possível carregar as fichas.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, refreshVersion])

  const availablePlayers = useMemo(
    () => (data?.assignmentTargets ?? []).filter((target) => target.role === 'PLAYER' && !target.hasSheet),
    [data?.assignmentTargets],
  )
  const masterTarget = useMemo(
    () => (data?.assignmentTargets ?? []).find((target) => target.role === 'MASTER'),
    [data?.assignmentTargets],
  )
  const visibleEntries = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase('pt-BR')
    if (!normalized) return data?.entries ?? []

    return (data?.entries ?? []).filter((entry) => [
      entry.name,
      entry.ownerLabel,
      entry.subtitle,
      entry.token?.name,
      roleLabels[entry.role],
      statusLabels[entry.status],
      ...entry.badges,
    ].some((value) => value?.toLocaleLowerCase('pt-BR').includes(normalized)))
  }, [data?.entries, search])

  function openSheet(entry: Pick<CharacterSheetManagerEntry, 'characterId' | 'name'>) {
    requestCampaignCharacterSheetOpen({
      campaignId,
      characterId: entry.characterId,
      title: entry.name,
    })
    onClose()
  }

  async function createSheet() {
    if (!name.trim() || creating) return
    if (createRole === 'PLAYER' && !assignedUserId) {
      setError('Selecione o Player que receberá a ficha.')
      return
    }
    if (createRole === 'MASTER' && masterTarget?.hasSheet) {
      setError('O Mestre já possui uma ficha nesta campanha.')
      return
    }

    setCreating(true)
    setError(null)
    try {
      const created = await api<{ characterId: string; entry: CharacterSheetManagerEntry | null }>(
        `/api/campaigns/${campaignId}/character-sheets`,
        {
          method: 'POST',
          body: JSON.stringify({
            name: name.trim(),
            role: createRole,
            assignedUserId: createRole === 'PLAYER' ? assignedUserId : undefined,
          }),
        },
      )

      requestCampaignCharacterSheetOpen({
        campaignId,
        characterId: created.characterId,
        title: created.entry?.name ?? name.trim(),
      })
      onClose()
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : 'Não foi possível criar a ficha.')
    } finally {
      setCreating(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Fichas da campanha"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218]/98 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <BookUser className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">Fichas</h1>
              <p className="truncate text-xs text-zinc-400">
                {data?.system.label ?? 'Sistema da campanha'} · criadas somente pelo Mestre
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCreateOpen((current) => !current)}
              className="flex items-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-500/25"
            >
              <FilePlus2 className="h-4 w-4" />
              Criar ficha
            </button>
            <button
              type="button"
              title="Atualizar fichas"
              disabled={loading}
              onClick={() => setRefreshVersion((current) => current + 1)}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:opacity-40"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              type="button"
              title="Fechar"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        {createOpen ? (
          <section className="grid gap-4 border-b border-white/10 bg-indigo-500/[0.06] px-5 py-4 md:grid-cols-[1fr_180px_1fr_auto] md:items-end">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Nome da ficha</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nome do personagem ou NPC"
                maxLength={80}
                className="h-10 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white outline-none focus:border-indigo-300/50"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Tipo</span>
              <select
                value={createRole}
                onChange={(event) => setCreateRole(event.target.value as CreateRole)}
                className="h-10 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white outline-none focus:border-indigo-300/50"
              >
                <option value="PLAYER">Player</option>
                <option value="NPC">NPC</option>
                <option value="MASTER">Mestre</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Atribuição</span>
              {createRole === 'PLAYER' ? (
                <select
                  value={assignedUserId}
                  onChange={(event) => setAssignedUserId(event.target.value)}
                  className="h-10 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white outline-none focus:border-indigo-300/50"
                >
                  <option value="">Selecione um Player</option>
                  {availablePlayers.map((target) => (
                    <option key={target.userId} value={target.userId}>{target.email}</option>
                  ))}
                </select>
              ) : (
                <div className="flex h-10 items-center rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-zinc-400">
                  {createRole === 'MASTER' ? masterTarget?.email ?? 'Mestre atual' : 'Não atribuída a Player'}
                </div>
              )}
            </label>
            <button
              type="button"
              disabled={creating || !name.trim() || (createRole === 'PLAYER' && !assignedUserId)}
              onClick={() => void createSheet()}
              className="h-10 rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {creating ? 'Criando...' : 'Criar'}
            </button>
          </section>
        ) : null}

        <div className="border-b border-white/10 px-5 py-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por personagem, classe, ancestralidade, proprietário ou Token"
              className="h-11 w-full rounded-lg border border-white/10 bg-black/35 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
            />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-5">
          {error ? <div className="mb-4 rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}
          {loading && !data ? <div className="text-sm text-zinc-400">Carregando fichas...</div> : null}
          {data && !data.available ? (
            <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 p-5 text-sm text-amber-100">
              O sistema da campanha ainda não registrou um gerenciador de fichas.
            </div>
          ) : null}
          {data?.available && visibleEntries.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-8 text-center text-sm text-zinc-400">
              Nenhuma ficha foi criada nesta campanha.
            </div>
          ) : null}

          {data?.available ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {visibleEntries.map((entry) => (
                <article key={entry.characterId} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.07]">
                  <div className="flex min-w-0 items-start gap-4">
                    <CharacterAvatar entry={entry} />
                    <div className="min-w-0 flex-1">
                      <div className="flex min-w-0 items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h2 className="truncate text-sm font-semibold text-white">{entry.name}</h2>
                          <p className="mt-1 truncate text-xs text-zinc-400">{entry.subtitle}</p>
                        </div>
                        <span className="shrink-0 rounded border border-white/10 bg-black/25 px-2 py-1 text-[10px] uppercase text-zinc-300">{roleLabels[entry.role]}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.stats.map((stat) => (
                          <span key={`${stat.label}:${stat.value}`} className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[11px] text-zinc-200">{stat.label} {stat.value}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded border border-indigo-300/15 bg-indigo-500/10 px-2 py-0.5 text-[10px] uppercase text-indigo-100/80">{statusLabels[entry.status]}</span>
                    {entry.badges.map((badge) => (
                      <span key={badge} className="max-w-full truncate rounded border border-white/10 bg-black/20 px-2 py-0.5 text-[10px] text-zinc-400">{badge}</span>
                    ))}
                  </div>

                  <div className="mt-3 border-t border-white/10 pt-3">
                    <div className="truncate text-[11px] text-zinc-500">Atribuída a: {entry.ownerLabel}</div>
                    {entry.warnings.length > 0 ? <div className="mt-2 line-clamp-2 text-[11px] text-amber-200/80">{entry.warnings.join(' ')}</div> : null}
                    <button
                      type="button"
                      onClick={() => openSheet(entry)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-500/25"
                    >
                      <BookUser className="h-4 w-4" />
                      Abrir ficha na mesa
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>

        {data?.available ? (
          <footer className="border-t border-white/10 bg-black/20 px-5 py-3 text-xs text-zinc-400">
            {visibleEntries.length} de {data.entries.length} fichas exibidas
          </footer>
        ) : null}
      </section>
    </div>
  )
}
