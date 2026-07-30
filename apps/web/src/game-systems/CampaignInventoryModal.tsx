import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Backpack, Loader2, Minus, UserRound, X } from 'lucide-react'
import { api } from '../lib/api'
import {
  INVENTORY_DISPLAY_SETTINGS_CHANGED_EVENT,
  readStoredInventoryDisplaySettings,
  type InventoryDisplaySettings,
} from '../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import { CatalogEntitySheetModal } from './CatalogEntitySheetModal'
import {
  InventoryGrid,
  type InventoryGridEntry,
} from './inventory/components/InventoryGrid'
import { FloatingInventoryBackpack } from './inventory/components/FloatingInventoryBackpack'
import { moveEntryOptimistically } from './inventory/domain/inventoryGrid'
import { registerVttWindow } from '../vtt/table/infrastructure/vttInteractionRegistry'

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

type InventoryEntry = InventoryGridEntry & {
  inventoryId: string
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

type SlotUpdateResponse = {
  entries: InventoryEntry[]
}

type Props = {
  campaignId: string
  actorId?: string
  readOnly?: boolean
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

function mergeUpdatedEntries(
  current: readonly InventoryEntry[],
  updated: readonly InventoryEntry[],
) {
  const updatedById = new Map(updated.map((entry) => [entry.id, entry]))
  return current.map((entry) => updatedById.get(entry.id) ?? entry)
}

export function CampaignInventoryModal({
  campaignId,
  actorId,
  readOnly = false,
  onClose,
}: Props) {
  const [actorsData, setActorsData] = useState<InventoryActorsResponse | null>(null)
  const [selectedActorId, setSelectedActorId] = useState<string | null>(actorId ?? null)
  const [inventory, setInventory] = useState<InventoryResponse | null>(null)
  const [loadingActors, setLoadingActors] = useState(true)
  const [loadedInventoryActorId, setLoadedInventoryActorId] = useState<string | null>(null)
  const [movingEntryId, setMovingEntryId] = useState<string | null>(null)
  const [updatingEntryId, setUpdatingEntryId] = useState<string | null>(null)
  const [sheetEntry, setSheetEntry] = useState<InventoryEntry | null>(null)
  const [minimized, setMinimized] = useState(false)
  const [itemSheetLocale, setItemSheetLocale] = useState<InventoryDisplaySettings['itemSheetLocale']>(
    () => readStoredInventoryDisplaySettings(campaignId).itemSheetLocale,
  )
  const [error, setError] = useState<string | null>(null)
  const directActorMode = Boolean(actorId)
  const loadingInventory = Boolean(
    selectedActorId && loadedInventoryActorId !== selectedActorId,
  )

  const selectedActor = useMemo(
    () => actorsData?.actors.find((actor) => actor.id === selectedActorId) ?? null,
    [actorsData, selectedActorId],
  )

  useEffect(() => registerVttWindow({
    id: `campaign-inventory:${campaignId}:${actorId ?? 'manager'}`,
    getZIndex: () => sheetEntry ? 160 : 100,
    close: () => sheetEntry ? setSheetEntry(null) : onClose(),
    isVisible: () => !minimized,
  }), [actorId, campaignId, minimized, onClose, sheetEntry])

  useEffect(() => {
    function onInventorySettingsChanged(event: Event) {
      const detail = (event as CustomEvent<{
        campaignId: string
        settings: InventoryDisplaySettings
      }>).detail
      if (!detail || detail.campaignId !== campaignId) return
      setItemSheetLocale(detail.settings.itemSheetLocale)
    }

    window.addEventListener(
      INVENTORY_DISPLAY_SETTINGS_CHANGED_EVENT,
      onInventorySettingsChanged,
    )
    return () => {
      window.removeEventListener(
        INVENTORY_DISPLAY_SETTINGS_CHANGED_EVENT,
        onInventorySettingsChanged,
      )
    }
  }, [campaignId])

  useEffect(() => {
    const controller = new AbortController()

    api<InventoryActorsResponse>(`/api/campaigns/${campaignId}/inventory/actors`, {
      signal: controller.signal,
    })
      .then((response) => {
        const visibleActors = actorId
          ? response.actors.filter((actor) => actor.id === actorId)
          : response.actors
        setActorsData({ ...response, actors: visibleActors })
        setSelectedActorId(actorId ?? visibleActors[0]?.id ?? null)
        if (actorId && visibleActors.length === 0) {
          setError('Este Token não possui um ator sob seu controle.')
        }
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os inventários.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoadingActors(false)
      })

    return () => controller.abort()
  }, [actorId, campaignId])

  useEffect(() => {
    if (!selectedActorId) return
    const controller = new AbortController()

    api<InventoryResponse>(
      `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory`,
      { signal: controller.signal },
    )
      .then((response) => {
        setInventory(response)
        setLoadedInventoryActorId(selectedActorId)
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setInventory(null)
        setLoadedInventoryActorId(selectedActorId)
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar o inventário.')
      })

    return () => controller.abort()
  }, [campaignId, selectedActorId])

  async function moveEntry(entryId: string, slotIndex: number) {
    if (!selectedActorId || !inventory || movingEntryId) return
    const source = inventory.entries.find((entry) => entry.id === entryId)
    if (!source || source.slotIndex === slotIndex) return

    const previousEntries = inventory.entries
    setMovingEntryId(entryId)
    setError(null)
    setInventory({
      ...inventory,
      entries: moveEntryOptimistically(previousEntries, entryId, slotIndex),
    })

    try {
      const response = await api<SlotUpdateResponse>(
        `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory/entries/${entryId}/slot`,
        {
          method: 'PATCH',
          body: JSON.stringify({ slotIndex }),
        },
      )
      setInventory((current) => current
        ? { ...current, entries: mergeUpdatedEntries(current.entries, response.entries) }
        : current)
    } catch (cause) {
      setInventory((current) => current ? { ...current, entries: previousEntries } : current)
      setError(cause instanceof Error ? cause.message : 'Não foi possível mover o item.')
    } finally {
      setMovingEntryId(null)
    }
  }

  async function updateQuantity(entry: InventoryEntry, quantity: number) {
    if (!selectedActorId || readOnly) return
    setUpdatingEntryId(entry.id)
    setError(null)
    try {
      const updated = await api<InventoryEntry>(
        `/api/campaigns/${campaignId}/actors/${selectedActorId}/inventory/entries/${entry.id}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ quantity }),
        },
      )
      setInventory((current) => current
        ? {
            ...current,
            entries: current.entries.map((candidate) => candidate.id === updated.id ? updated : candidate),
          }
        : current)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível alterar a quantidade.')
    } finally {
      setUpdatingEntryId(null)
    }
  }

  async function removeEntry(entry: InventoryEntry) {
    if (!selectedActorId || readOnly) return
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
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível remover o item.')
    } finally {
      setUpdatingEntryId(null)
    }
  }

  function manageEntry(entry: InventoryEntry) {
    if (readOnly || updatingEntryId) return
    const itemName = entry.presentation?.name ?? 'Item do sistema'
    const rawQuantity = window.prompt(
      `Quantidade de ${itemName}. Digite 0 para remover:`,
      String(entry.quantity),
    )
    if (rawQuantity === null) return
    const quantity = Number(rawQuantity)
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 1_000_000) {
      setError('Informe uma quantidade inteira entre 0 e 1.000.000.')
      return
    }
    if (quantity === 0) {
      if (window.confirm(`Remover ${itemName} do inventário?`)) void removeEntry(entry)
      return
    }
    if (quantity !== entry.quantity) void updateQuantity(entry, quantity)
  }

  function openEntrySheet(entry: InventoryEntry) {
    if (!entry.catalogContentId) {
      setError('Este item não possui uma ficha de catálogo vinculada.')
      return
    }
    setSheetEntry(entry)
  }

  const portalTarget = typeof document === 'undefined' ? null : document.body
  if (!portalTarget) return null

  if (minimized && selectedActorId) {
    return createPortal(
      <FloatingInventoryBackpack
        campaignId={campaignId}
        actorId={selectedActorId}
        actorName={selectedActor?.name ?? 'Token'}
        onRestore={() => setMinimized(false)}
      />,
      portalTarget,
    )
  }

  return createPortal(
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="presentation"
      >
        <section
          className="pointer-events-auto flex h-[min(680px,calc(100vh-6rem))] w-[min(1024px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218]/98 text-white shadow-[0_30px_100px_rgba(0,0,0,0.65)]"
          role="dialog"
          aria-modal="false"
          aria-label="Inventário da campanha"
          onPointerDown={(event) => event.stopPropagation()}
          onWheel={(event) => event.stopPropagation()}
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <Backpack className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">{directActorMode ? 'Inventário' : 'Inventários'}</h1>
              <p className="truncate text-xs text-zinc-400">
                {directActorMode && readOnly
                  ? 'Itens do Token controlado — arraste para reorganizar'
                  : actorsData?.role === 'MASTER'
                    ? 'Gerencie e organize os inventários da campanha'
                    : 'Organize os itens dos Tokens sob seu controle'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              title="Minimizar inventário"
              onClick={() => setMinimized(true)}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <Minus className="h-5 w-5" />
            </button>
            <button
              type="button"
              title="Fechar inventário"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          </header>

          {error ? (
            <div className="border-b border-red-300/20 bg-red-500/10 px-5 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <div className={['grid min-h-0 flex-1', directActorMode ? 'grid-cols-1' : 'md:grid-cols-[240px_minmax(0,1fr)]'].join(' ')}>
          {!directActorMode ? (
            <aside className="min-h-0 overflow-y-auto border-b border-white/10 bg-black/20 p-3 md:border-b-0 md:border-r">
              {loadingActors ? (
                <div className="flex items-center gap-2 px-3 py-4 text-sm text-zinc-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Carregando atores...
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
          ) : null}

          <main className="flex min-h-0 flex-col p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
              <div>
                <h2 className="text-xl font-semibold">{selectedActor?.name ?? 'Inventário'}</h2>
                <p className="mt-1 text-xs text-zinc-500">
                  Clique para abrir a ficha. Arraste os ícones para trocar os slots.
                </p>
              </div>
              <span className="rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-xs text-zinc-300">
                {inventory?.entries.length ?? 0} slots ocupados
              </span>
            </div>

            {loadingInventory ? (
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Carregando inventário...
              </div>
            ) : (
              <InventoryGrid
                entries={inventory?.entries ?? []}
                movingEntryId={movingEntryId}
                onMove={(entryId, slotIndex) => void moveEntry(entryId, slotIndex)}
                onOpen={(entry) => openEntrySheet(entry as InventoryEntry)}
                onManage={readOnly ? undefined : (entry) => manageEntry(entry as InventoryEntry)}
              />
            )}

            {!readOnly ? (
              <p className="mt-3 text-[11px] text-zinc-500">
                Clique com o botão direito em um item para alterar sua quantidade ou removê-lo.
              </p>
            ) : null}
          </main>
          </div>
        </section>
      </div>

      {sheetEntry?.catalogContentId ? (
        <CatalogEntitySheetModal
          campaignId={campaignId}
          contentId={sheetEntry.catalogContentId}
          domain="ITEMS"
          locale={itemSheetLocale}
          onClose={() => setSheetEntry(null)}
        />
      ) : null}
    </>,
    portalTarget,
  )
}
