import { useEffect, useMemo, useState } from 'react'
import {
  Backpack,
  Loader2,
  Minus,
  Package,
  Plus,
  Trash2,
  UserRound,
  X,
} from 'lucide-react'
import { api } from '../lib/api'

type InventoryActor = {
  id: string
  name: string
  avatarUrl: string | null
  owner: {
    memberId: string
    userId: string
    email: string
    role: 'MASTER' | 'PLAYER'
    active: boolean
  } | null
}

type InventoryActorsResponse = {
  role: 'MASTER' | 'PLAYER'
  actors: InventoryActor[]
}

type InventoryPresentation = {
  name: string
  subtitle?: string | null
  description?: string | null
  imageUrl?: string | null
  traits?: readonly string[]
  details?: ReadonlyArray<{ label: string; value: string }>
}

type InventoryEntry = {
  id: string
  inventoryId: string
  quantity: number
  data: unknown
  presentation: InventoryPresentation | null
  createdAt: string
  updatedAt: string
}

type InventoryResponse = {
  id: string
  actorId: string
  entries: InventoryEntry[]
  createdAt: string
  updatedAt: string
}

type Props = {
  campaignId: string
  onClose: () => void
}

function ActorAvatar({ actor }: { actor: InventoryActor }) {
  const [failed, setFailed] = useState(false)

  if (actor.avatarUrl && !failed) {
    return (
      <img
        src={actor.avatarUrl}
        alt=""
        draggable={false}
        onError={() => setFailed(true)}
        className="h-10 w-10 shrink-0 rounded-lg border border-white/10 bg-black/30 object-cover"
      />
    )
  }

  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
      <UserRound className="h-5 w-5" />
    </div>
  )
}

export function CampaignInventoryModal({ campaignId, onClose }: Props) {
  const [actorsData, setActorsData] = useState<InventoryActorsResponse | null>(null)
  const [selectedActorId, setSelectedActorId] = useState<string | null>(null)
  const [inventory, setInventory] = useState<InventoryResponse | null>(null)
  const [quantityDrafts, setQuantityDrafts] = useState<Record<string, string>>({})
  const [loadingActors, setLoadingActors] = useState(true)
  const [loadingInventory, setLoadingInventory] = useState(false)
  const [updatingEntryId, setUpdatingEntryId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const selectedActor = useMemo(
    () => actorsData?.actors.find((actor) => actor.id === selectedActorId) ?? null,
    [actorsData, selectedActorId],
  )

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    const controller = new AbortController()
    setLoadingActors(true)
    setError(null)

    api<InventoryActorsResponse>(`/api/campaigns/${campaignId}/inventory/actors`, {
      signal: controller.signal,
    })
      .then((response) => {
        setActorsData(response)
        setSelectedActorId((current) => current ?? response.actors[0]?.id ?? null)
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os inventários.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingActors(false)
      })

    return () => controller.abort()
  }, [campaignId])

  useEffect(() => {
    if (!selectedActorId) {
      setInventory(null)
      setQuantityDrafts({})
      return
    }

    const controller = new AbortController()
    setLoadingInventory(true)
    setError(null)

    api<InventoryResponse>(
      `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory`,
      { signal: controller.signal },
    )
      .then((response) => {
        setInventory(response)
        setQuantityDrafts(Object.fromEntries(
          response.entries.map((entry) => [entry.id, String(entry.quantity)]),
        ))
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setInventory(null)
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar o inventário.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingInventory(false)
      })

    return () => controller.abort()
  }, [campaignId, selectedActorId])

  async function updateQuantity(entry: InventoryEntry, nextQuantity: number) {
    if (!selectedActorId || nextQuantity < 1 || nextQuantity > 1_000_000) {
      setQuantityDrafts((current) => ({ ...current, [entry.id]: String(entry.quantity) }))
      return
    }

    setUpdatingEntryId(entry.id)
    setError(null)

    try {
      const updated = await api<InventoryEntry>(
        `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory/entries/${entry.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ quantity: nextQuantity }),
        },
      )

      setInventory((current) => current
        ? {
            ...current,
            entries: current.entries.map((candidate) => candidate.id === updated.id ? updated : candidate),
          }
        : current)
      setQuantityDrafts((current) => ({ ...current, [entry.id]: String(updated.quantity) }))
    } catch (cause) {
      setQuantityDrafts((current) => ({ ...current, [entry.id]: String(entry.quantity) }))
      setError(cause instanceof Error ? cause.message : 'Não foi possível alterar a quantidade.')
    } finally {
      setUpdatingEntryId(null)
    }
  }

  async function removeEntry(entry: InventoryEntry) {
    if (!selectedActorId) return
    const itemName = entry.presentation?.name ?? 'este item'
    if (!window.confirm(`Remover ${itemName} do inventário?`)) return

    setUpdatingEntryId(entry.id)
    setError(null)

    try {
      await api<void>(
        `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory/entries/${entry.id}`,
        { method: 'DELETE' },
      )
      setInventory((current) => current
        ? { ...current, entries: current.entries.filter((candidate) => candidate.id !== entry.id) }
        : current)
      setQuantityDrafts((current) => {
        const next = { ...current }
        delete next[entry.id]
        return next
      })
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível remover o item.')
    } finally {
      setUpdatingEntryId(null)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Inventários da campanha"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="flex h-[min(820px,92vh)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218]/98 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <Backpack className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">Inventários</h1>
              <p className="truncate text-xs text-zinc-400">
                {actorsData?.role === 'MASTER'
                  ? 'Gerencie os itens de todos os atores da campanha'
                  : 'Gerencie os itens dos atores sob seu controle'}
              </p>
            </div>
          </div>

          <button
            type="button"
            title="Fechar inventários"
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {error ? (
          <div className="border-b border-red-300/20 bg-red-500/10 px-5 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <div className="grid min-h-0 flex-1 md:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="min-h-0 overflow-y-auto border-b border-white/10 bg-black/20 p-3 md:border-b-0 md:border-r">
            {loadingActors ? (
              <div className="flex items-center gap-2 px-3 py-4 text-sm text-zinc-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Carregando atores...
              </div>
            ) : null}

            {!loadingActors && actorsData?.actors.length === 0 ? (
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-400">
                Nenhum ator disponível para este usuário.
              </div>
            ) : null}

            <div className="space-y-1.5">
              {actorsData?.actors.map((actor) => (
                <button
                  key={actor.id}
                  type="button"
                  onClick={() => setSelectedActorId(actor.id)}
                  className={[
                    'flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition',
                    actor.id === selectedActorId
                      ? 'border-indigo-300/40 bg-indigo-500/15 text-white'
                      : 'border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white',
                  ].join(' ')}
                >
                  <ActorAvatar actor={actor} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">{actor.name}</span>
                    <span className="mt-0.5 block truncate text-[11px] text-zinc-500">
                      {actor.owner?.email ?? 'Sem jogador atribuído'}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <main className="min-h-0 overflow-y-auto p-5">
            {selectedActor ? (
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{selectedActor.name}</h2>
                  <p className="mt-1 text-xs text-zinc-500">
                    {selectedActor.owner?.email ?? 'Ator sem jogador atribuído'}
                  </p>
                </div>
                <span className="rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-xs text-zinc-300">
                  {inventory?.entries.length ?? 0} entradas
                </span>
              </div>
            ) : null}

            {loadingInventory ? (
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Carregando inventário...
              </div>
            ) : null}

            {!loadingInventory && selectedActor && inventory?.entries.length === 0 ? (
              <div className="grid min-h-72 place-items-center rounded-2xl border border-dashed border-white/10 bg-white/[0.025] p-8 text-center">
                <div>
                  <Package className="mx-auto h-10 w-10 text-zinc-600" />
                  <h3 className="mt-4 font-semibold text-zinc-200">Inventário vazio</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                    O Mestre pode enviar itens diretamente pelo catálogo de itens da campanha.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="grid gap-3 xl:grid-cols-2">
              {inventory?.entries.map((entry) => {
                const presentation = entry.presentation
                const busy = updatingEntryId === entry.id
                const draft = quantityDrafts[entry.id] ?? String(entry.quantity)

                return (
                  <article key={entry.id} className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
                        <Package className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold text-white">
                          {presentation?.name ?? 'Item do sistema'}
                        </h3>
                        {presentation?.subtitle ? (
                          <p className="mt-1 truncate text-xs text-zinc-500">{presentation.subtitle}</p>
                        ) : null}
                      </div>
                    </div>

                    {presentation?.description ? (
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-zinc-400">
                        {presentation.description}
                      </p>
                    ) : null}

                    {presentation?.traits?.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {presentation.traits.map((trait) => (
                          <span key={trait} className="rounded border border-indigo-300/15 bg-indigo-500/10 px-2 py-0.5 text-[10px] uppercase text-indigo-100/80">
                            {trait}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {presentation?.details?.length ? (
                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        {presentation.details.slice(0, 6).map((detail) => (
                          <div key={`${detail.label}:${detail.value}`} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                            <div className="text-[10px] uppercase text-zinc-600">{detail.label}</div>
                            <div className="mt-0.5 truncate text-zinc-300">{detail.value}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                      <div className="inline-flex items-center rounded-lg border border-white/10 bg-black/25">
                        <button
                          type="button"
                          disabled={busy || entry.quantity <= 1}
                          onClick={() => void updateQuantity(entry, entry.quantity - 1)}
                          className="p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                          title="Diminuir quantidade"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          value={draft}
                          inputMode="numeric"
                          aria-label={`Quantidade de ${presentation?.name ?? 'item'}`}
                          onChange={(event) => setQuantityDrafts((current) => ({
                            ...current,
                            [entry.id]: event.target.value.replace(/\D/g, '').slice(0, 7),
                          }))}
                          onBlur={() => {
                            const parsed = Number(draft)
                            if (parsed !== entry.quantity) void updateQuantity(entry, parsed)
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') event.currentTarget.blur()
                          }}
                          disabled={busy}
                          className="h-8 w-16 border-x border-white/10 bg-transparent text-center text-sm font-semibold text-white outline-none disabled:opacity-50"
                        />
                        <button
                          type="button"
                          disabled={busy || entry.quantity >= 1_000_000}
                          onClick={() => void updateQuantity(entry, entry.quantity + 1)}
                          className="p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                          title="Aumentar quantidade"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void removeEntry(entry)}
                        className="inline-flex items-center gap-2 rounded-lg border border-red-300/15 bg-red-500/5 px-3 py-2 text-xs font-semibold text-red-200 transition hover:border-red-300/35 hover:bg-red-500/15 disabled:opacity-50"
                      >
                        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        Remover
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </main>
        </div>
      </section>
    </div>
  )
}
