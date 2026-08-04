import { useEffect, useMemo, useState } from 'react'
import {
  Backpack,
  BookOpen,
  CircleAlert,
  Hand,
  Loader2,
  Shield,
  Shirt,
  Swords,
} from 'lucide-react'
import { api } from '../../../lib/api'
import { CatalogEntitySheetModal } from '../../../game-systems/CatalogEntitySheetModal'
import { readStoredInventoryDisplaySettings } from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'

type CarryMode = 'STOWED' | 'HELD' | 'WORN'

type EquipmentAction = {
  carryMode: Exclude<CarryMode, 'STOWED'>
  conflictEntryIds: string[]
}

type EquipmentEntry = {
  entryId: string
  name: string
  itemType: string
  currentMode: CarryMode
  supportedModes: Array<Exclude<CarryMode, 'STOWED'>>
  requiredHands: number
  usageKey: string | null
  catalogContentId: string | null
  actions: EquipmentAction[]
  warnings: string[]
}

type EquipmentView = {
  systemKey: 'PATHFINDER_2E'
  hands: {
    capacity: number
    occupied: number
    entries: Array<{ entryId: string; hands: number }>
  }
  armor: {
    entryId: string | null
  }
  wornGroups: Array<{
    key: string
    label: string
    exclusive: boolean
    entryIds: string[]
  }>
  entries: EquipmentEntry[]
  armorClass: {
    value: number
    category: 'unarmored' | 'light' | 'medium' | 'heavy'
    sourceName: string | null
    breakdown: Array<{ label: string; value: number }>
  } | null
  warnings: string[]
}

type EquipmentResponse = {
  equipment: EquipmentView
}

type Props = {
  campaignId: string
  actorId: string
  catalogSheetZIndex?: number
  onEquipmentChanged?: () => void
}

const modeLabels: Record<CarryMode, string> = {
  STOWED: 'Guardado',
  HELD: 'Segurado',
  WORN: 'Vestido',
}

const categoryLabels = {
  unarmored: 'Sem armadura',
  light: 'Armadura leve',
  medium: 'Armadura média',
  heavy: 'Armadura pesada',
} satisfies Record<NonNullable<EquipmentView['armorClass']>['category'], string>

function entryIcon(entry: EquipmentEntry) {
  if (entry.itemType === 'armor') return <Shield className="h-4 w-4" />
  if (entry.currentMode === 'WORN') return <Shirt className="h-4 w-4" />
  if (entry.itemType === 'weapon' || entry.itemType === 'shield') return <Swords className="h-4 w-4" />
  return <Backpack className="h-4 w-4" />
}

export function Pathfinder2eEquipmentPanel({
  campaignId,
  actorId,
  catalogSheetZIndex = 120,
  onEquipmentChanged,
}: Props) {
  const [view, setView] = useState<EquipmentView | null>(null)
  const [loading, setLoading] = useState(true)
  const [updatingEntryId, setUpdatingEntryId] = useState<string | null>(null)
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const itemSheetLocale = readStoredInventoryDisplaySettings(campaignId).itemSheetLocale

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    api<EquipmentResponse>(
      `/api/campaigns/${campaignId}/actors/${actorId}/equipment/pathfinder-2e`,
      { signal: controller.signal },
    )
      .then((response) => setView(response.equipment))
      .catch((cause) => {
        if (controller.signal.aborted) return
        setView(null)
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os equipamentos.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [actorId, campaignId])

  const entriesById = useMemo(
    () => new Map(view?.entries.map((entry) => [entry.entryId, entry]) ?? []),
    [view],
  )
  const equippedEntries = view?.entries.filter((entry) => entry.currentMode !== 'STOWED') ?? []
  const availableEntries = view?.entries.filter((entry) => (
    entry.currentMode === 'STOWED' && entry.actions.length > 0
  )) ?? []

  function openItemSheet(entry: EquipmentEntry) {
    if (!entry.catalogContentId) return
    setSelectedContentId(entry.catalogContentId)
  }

  async function changeMode(entry: EquipmentEntry, carryMode: CarryMode) {
    if (updatingEntryId) return
    const action = carryMode === 'STOWED'
      ? null
      : entry.actions.find((candidate) => candidate.carryMode === carryMode) ?? null
    const conflictNames = action?.conflictEntryIds
      .map((entryId) => entriesById.get(entryId)?.name)
      .filter((name): name is string => Boolean(name)) ?? []
    const resolveConflicts = conflictNames.length > 0

    if (resolveConflicts) {
      const confirmed = window.confirm(
        `Para ${carryMode === 'WORN' ? 'vestir' : 'segurar'} ${entry.name}, será necessário guardar: ${conflictNames.join(', ')}. Continuar?`,
      )
      if (!confirmed) return
    }

    setUpdatingEntryId(entry.entryId)
    setError(null)
    try {
      const response = await api<EquipmentResponse>(
        `/api/campaigns/${campaignId}/actors/${actorId}/inventory/entries/${entry.entryId}/equipment/pathfinder-2e`,
        {
          method: 'PATCH',
          body: JSON.stringify({ carryMode, resolveConflicts }),
        },
      )
      setView(response.equipment)
      onEquipmentChanged?.()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível alterar o equipamento.')
    } finally {
      setUpdatingEntryId(null)
    }
  }

  if (loading) {
    return (
      <section className="mb-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-zinc-400">
        <Loader2 className="h-4 w-4 animate-spin" />
        Carregando equipamentos Pathfinder...
      </section>
    )
  }

  if (!view) {
    return error ? (
      <section className="mb-4 rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
        {error}
      </section>
    ) : null
  }

  return (
    <>
      <section className="mb-4 overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-950/15">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-4 py-3">
          <div>
            <div className="text-sm font-semibold text-white">Equipamentos Pathfinder 2e</div>
            <div className="mt-0.5 text-[11px] text-zinc-400">
              Itens em uso deixam a mochila e retornam ao primeiro slot livre quando guardados.
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-xs text-zinc-300">
            <Hand className="h-4 w-4 text-violet-200" />
            Mãos {view.hands.occupied}/{view.hands.capacity}
          </div>
        </header>

        {error ? (
          <div className="border-b border-red-300/20 bg-red-500/10 px-4 py-2 text-xs text-red-100">
            {error}
          </div>
        ) : null}

        <div className="grid gap-3 p-4 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="space-y-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-violet-100/75">
                  <Shield className="h-4 w-4" /> Classe de Armadura
                </span>
                <span className="text-3xl font-black text-white">{view.armorClass?.value ?? '—'}</span>
              </div>
              <div className="mt-1 text-sm font-medium text-zinc-200">
                {view.armorClass?.sourceName ?? 'Sem armadura equipada'}
              </div>
              {view.armorClass ? (
                <div className="mt-1 text-[10px] uppercase tracking-wide text-zinc-500">
                  {categoryLabels[view.armorClass.category]}
                </div>
              ) : null}
              <div className="mt-3 space-y-1 border-t border-white/10 pt-2">
                {view.armorClass?.breakdown.map((part) => (
                  <div key={part.label} className="flex items-center justify-between text-xs text-zinc-400">
                    <span>{part.label}</span>
                    <span className="font-semibold text-zinc-200">{part.value >= 0 ? `+${part.value}` : part.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {view.warnings.map((warning) => (
              <div key={warning} className="flex gap-2 rounded-lg border border-amber-300/20 bg-amber-500/10 p-2 text-xs text-amber-100">
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{warning}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">Em uso</div>
              {equippedEntries.length ? (
                <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {equippedEntries.map((entry) => (
                    <article key={entry.entryId} className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-3">
                      <div className="flex items-start gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-emerald-100">
                            {entryIcon(entry)}
                            <span className="truncate text-sm font-semibold">{entry.name}</span>
                          </div>
                          <div className="mt-1 text-[10px] uppercase tracking-wide text-emerald-100/55">
                            {modeLabels[entry.currentMode]}
                            {entry.requiredHands ? ` · ${entry.requiredHands} mão${entry.requiredHands > 1 ? 's' : ''}` : ''}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {entry.catalogContentId ? (
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-[11px] text-zinc-200 transition hover:bg-white/10"
                            onClick={() => openItemSheet(entry)}
                          >
                            <BookOpen className="h-3.5 w-3.5" /> Ficha
                          </button>
                        ) : null}
                        <button
                          type="button"
                          disabled={Boolean(updatingEntryId)}
                          className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-zinc-200 transition hover:bg-white/10 disabled:opacity-40"
                          onClick={() => void changeMode(entry, 'STOWED')}
                        >
                          Guardar
                        </button>
                      </div>
                      {entry.warnings.map((warning) => (
                        <div key={warning} className="mt-2 text-[11px] text-amber-100/85">{warning}</div>
                      ))}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/10 px-4 py-5 text-center text-sm text-zinc-500">
                  Nenhum item equipado.
                </div>
              )}
            </div>

            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">Disponíveis no inventário</div>
              {availableEntries.length ? (
                <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {availableEntries.map((entry) => (
                    <article key={entry.entryId} className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <div className="flex items-center gap-2 text-zinc-100">
                        {entryIcon(entry)}
                        <span className="truncate text-sm font-semibold">{entry.name}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {entry.catalogContentId ? (
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 text-xs font-semibold text-zinc-200 transition hover:bg-white/10"
                            onClick={() => openItemSheet(entry)}
                          >
                            <BookOpen className="h-3.5 w-3.5" /> Ficha
                          </button>
                        ) : null}
                        {entry.actions.map((action) => (
                          <button
                            key={action.carryMode}
                            type="button"
                            disabled={Boolean(updatingEntryId)}
                            className="rounded-md border border-violet-300/20 bg-violet-500/10 px-2.5 py-1.5 text-xs font-semibold text-violet-100 transition hover:bg-violet-500/20 disabled:opacity-40"
                            onClick={() => void changeMode(entry, action.carryMode)}
                          >
                            {action.carryMode === 'HELD' ? 'Segurar' : 'Vestir'}
                          </button>
                        ))}
                      </div>
                      {entry.warnings.map((warning) => (
                        <div key={warning} className="mt-2 text-[11px] text-amber-100/85">{warning}</div>
                      ))}
                    </article>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/10 px-4 py-5 text-center text-sm text-zinc-500">
                  Nenhum item equipável disponível.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {selectedContentId ? (
        <CatalogEntitySheetModal
          campaignId={campaignId}
          contentId={selectedContentId}
          domain="ITEMS"
          locale={itemSheetLocale}
          zIndex={catalogSheetZIndex}
          onClose={() => setSelectedContentId(null)}
        />
      ) : null}
    </>
  )
}
