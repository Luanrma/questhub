import { useEffect, useMemo, useState } from 'react'
import {
  BookUser,
  FilePlus2,
  Link2,
  RefreshCw,
  Search,
  UserRound,
  X,
} from 'lucide-react'
import { api, ApiError } from '../lib/api'
import { requestCampaignCharacterSheetOpen } from './character-sheet-window-events'
import type { GameSystemKey } from './registry'

type CharacterSheetManagerEntry = {
  sheetId: string
  name: string
  avatarUrl: string | null
  assignedUser: { id: string; label: string } | null
  updatedAt: string
  token: { id: string; name: string } | null
  subtitle: string | null
  badges: string[]
  stats: Array<{ label: string; value: string }>
  warnings: string[]
}

type UserAssignmentTarget = {
  userId: string
  role: 'MASTER' | 'PLAYER'
  email: string
}

type TokenAssignmentTarget = {
  tokenId: string
  name: string
  assignedSheetId: string | null
}

type CharacterSheetManagerResponse = {
  available: boolean
  system: {
    key: GameSystemKey
    label: string
  }
  entries: CharacterSheetManagerEntry[]
  assignmentTargets: {
    users: UserAssignmentTarget[]
    tokens: TokenAssignmentTarget[]
  }
}

type Props = {
  campaignId: string
  onClose: () => void
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
  const [name, setName] = useState('')
  const [updatingSheetId, setUpdatingSheetId] = useState<string | null>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    let cancelled = false
    queueMicrotask(() => {
      if (cancelled) return
      setLoading(true)
      setError(null)
    })

    api<CharacterSheetManagerResponse>(`/api/campaigns/${campaignId}/character-sheets`)
      .then((response) => {
        if (!cancelled) setData(response)
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

  const visibleEntries = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase('pt-BR')
    if (!normalized) return data?.entries ?? []

    return (data?.entries ?? []).filter((entry) => [
      entry.name,
      entry.assignedUser?.label,
      entry.subtitle,
      entry.token?.name,
      ...entry.badges,
    ].some((value) => value?.toLocaleLowerCase('pt-BR').includes(normalized)))
  }, [data?.entries, search])

  function openSheet(entry: Pick<CharacterSheetManagerEntry, 'sheetId' | 'name'>) {
    requestCampaignCharacterSheetOpen({
      campaignId,
      sheetId: entry.sheetId,
      title: entry.name,
    })
    onClose()
  }

  async function createSheet() {
    if (!name.trim() || creating) return

    setCreating(true)
    setError(null)
    try {
      const created = await api<{ sheetId: string; entry: CharacterSheetManagerEntry | null }>(
        `/api/campaigns/${campaignId}/character-sheets`,
        {
          method: 'POST',
          body: JSON.stringify({ name: name.trim() }),
        },
      )

      requestCampaignCharacterSheetOpen({
        campaignId,
        sheetId: created.sheetId,
        title: created.entry?.name ?? name.trim(),
      })
      setName('')
      onClose()
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : 'Não foi possível criar a ficha.')
    } finally {
      setCreating(false)
    }
  }

  async function updateAssignments(
    sheetId: string,
    changes: { assignedUserId?: string | null; tokenId?: string | null },
  ) {
    if (updatingSheetId) return
    setUpdatingSheetId(sheetId)
    setError(null)
    try {
      const updated = await api<{
        sheetId: string
        assignedUser: { id: string; label: string } | null
        token: { id: string; name: string } | null
      }>(`/api/campaigns/${campaignId}/character-sheets/${sheetId}/assignments`, {
        method: 'PATCH',
        body: JSON.stringify(changes),
      })

      setData((current) => current
        ? {
            ...current,
            entries: current.entries.map((entry) => entry.sheetId === sheetId
              ? {
                  ...entry,
                  assignedUser: updated.assignedUser,
                  token: updated.token,
                }
              : entry),
            assignmentTargets: {
              ...current.assignmentTargets,
              tokens: current.assignmentTargets.tokens.map((token) => {
                if (token.assignedSheetId === sheetId) {
                  return { ...token, assignedSheetId: null }
                }
                if (updated.token?.id === token.tokenId) {
                  return { ...token, assignedSheetId: sheetId }
                }
                return token
              }),
            },
          }
        : current)
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : 'Não foi possível alterar a atribuição.')
    } finally {
      setUpdatingSheetId(null)
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
                {data?.system.label ?? 'Sistema da campanha'} · independentes de Player, NPC e Token
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
          <section className="grid gap-4 border-b border-white/10 bg-indigo-500/[0.06] px-5 py-4 md:grid-cols-[1fr_auto] md:items-end">
            <label className="grid gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Nome da ficha</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nome da ficha"
                maxLength={80}
                className="h-10 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white outline-none focus:border-indigo-300/50"
              />
              <span className="text-xs text-zinc-500">
                A ficha será criada sem proprietário e sem Token. Essas relações podem ser definidas depois.
              </span>
            </label>
            <button
              type="button"
              disabled={creating || !name.trim()}
              onClick={() => void createSheet()}
              className="h-10 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
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
              placeholder="Buscar por ficha, classe, ancestralidade, usuário ou Token"
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
                <article key={entry.sheetId} className="min-w-0 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.07]">
                  <div className="flex min-w-0 items-start gap-4">
                    <CharacterAvatar entry={entry} />
                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-sm font-semibold text-white">{entry.name}</h2>
                      <p className="mt-1 truncate text-xs text-zinc-400">{entry.subtitle}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {entry.stats.map((stat) => (
                          <span key={`${stat.label}:${stat.value}`} className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[11px] text-zinc-200">{stat.label} {stat.value}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 border-t border-white/10 pt-3">
                    <label className="grid gap-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Atribuir a usuário</span>
                      <select
                        value={entry.assignedUser?.id ?? ''}
                        disabled={updatingSheetId === entry.sheetId}
                        onChange={(event) => void updateAssignments(entry.sheetId, {
                          assignedUserId: event.target.value || null,
                        })}
                        className="h-9 rounded-lg border border-white/10 bg-black/35 px-3 text-xs text-white outline-none focus:border-indigo-300/50 disabled:opacity-50"
                      >
                        <option value="">Não atribuída</option>
                        {data.assignmentTargets.users.map((target) => (
                          <option key={target.userId} value={target.userId}>
                            {target.email} · {target.role === 'MASTER' ? 'Mestre' : 'Player'}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Vincular a Token</span>
                      <select
                        value={entry.token?.id ?? ''}
                        disabled={updatingSheetId === entry.sheetId}
                        onChange={(event) => void updateAssignments(entry.sheetId, {
                          tokenId: event.target.value || null,
                        })}
                        className="h-9 rounded-lg border border-white/10 bg-black/35 px-3 text-xs text-white outline-none focus:border-indigo-300/50 disabled:opacity-50"
                      >
                        <option value="">Sem Token</option>
                        {data.assignmentTargets.tokens.map((token) => (
                          <option
                            key={token.tokenId}
                            value={token.tokenId}
                            disabled={Boolean(token.assignedSheetId && token.assignedSheetId !== entry.sheetId)}
                          >
                            {token.name}{token.assignedSheetId && token.assignedSheetId !== entry.sheetId ? ' · já vinculado' : ''}
                          </option>
                        ))}
                      </select>
                    </label>

                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded border border-white/10 bg-black/20 px-2 py-1 text-[10px] text-zinc-400">
                        <Link2 className="h-3 w-3" />
                        {entry.assignedUser?.label ?? 'Sem usuário'}
                      </span>
                      {entry.badges.map((badge) => (
                        <span key={badge} className="max-w-full truncate rounded border border-white/10 bg-black/20 px-2 py-1 text-[10px] text-zinc-400">{badge}</span>
                      ))}
                    </div>

                    {entry.warnings.length > 0 ? <div className="line-clamp-2 text-[11px] text-amber-200/80">{entry.warnings.join(' ')}</div> : null}
                    <button
                      type="button"
                      onClick={() => openSheet(entry)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-500/25"
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
