import { useState } from 'react'
import { Cloud, Eye, EyeOff, ScrollText, Swords, Trash2, TriangleAlert } from 'lucide-react'
import type { VttSceneHazard } from '../domain/types'

const visibilityLabels: Record<VttSceneHazard['visibility'], string> = {
  HIDDEN: 'Oculto',
  HINTED: 'Sugerido',
  REVEALED: 'Revelado',
}

const stateLabels: Record<VttSceneHazard['state'], string> = {
  ARMED: 'Armado',
  TRIGGERED: 'Disparado',
  ACTIVE: 'Ativo',
  DISABLED: 'Desativado',
  EXPIRED: 'Expirado',
}

function SceneHazardCard({
  hazard,
  canControl,
  disabledSendToEncounter,
  onOpenSheet,
  onCycleVisibility,
  onCycleState,
  onUpdateNotes,
  onRemove,
  onSendToEncounter,
}: {
  hazard: VttSceneHazard
  canControl: boolean
  disabledSendToEncounter: boolean
  onOpenSheet: (hazardEntryId: string) => void
  onCycleVisibility: (hazard: VttSceneHazard) => void
  onCycleState: (hazard: VttSceneHazard) => void
  onUpdateNotes: (hazard: VttSceneHazard, notes: string) => void
  onRemove: (hazard: VttSceneHazard) => void
  onSendToEncounter: (hazard: VttSceneHazard) => void
}) {
  const [notesDraft, setNotesDraft] = useState(hazard.notes ?? '')

  return (
    <div className="grid gap-2 rounded-md border border-cyan-300/15 bg-cyan-500/[0.05] p-3">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-500/15 text-cyan-100">
          <Cloud className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-white">{hazard.name}</div>
          <div className="truncate text-[10px] uppercase text-cyan-200/70">Efeito de cena</div>
        </div>
        {hazard.hazardEntryId ? (
          <button
            type="button"
            title="Abrir ficha"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-sky-300/20 bg-sky-500/10 text-sky-100 transition hover:bg-sky-500/20"
            onClick={() => onOpenSheet(hazard.hazardEntryId as string)}
          >
            <ScrollText className="h-3.5 w-3.5" />
          </button>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          disabled={!canControl}
          className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => onCycleVisibility(hazard)}
        >
          {hazard.visibility === 'HIDDEN' ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          {visibilityLabels[hazard.visibility]}
        </button>
        <button
          type="button"
          disabled={!canControl}
          className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => onCycleState(hazard)}
        >
          <TriangleAlert className="h-3.5 w-3.5" />
          {stateLabels[hazard.state]}
        </button>
        <button
          type="button"
          disabled={!canControl || disabledSendToEncounter}
          className={[
            'flex items-center gap-1 rounded-md border px-2 py-1 text-[11px] transition disabled:cursor-not-allowed disabled:opacity-50',
            hazard.executionMode === 'ENCOUNTER_PARTICIPANT'
              ? 'border-red-300/25 bg-red-500/15 text-red-100 hover:bg-red-500/25'
              : 'border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/10 hover:text-white',
          ].join(' ')}
          onClick={() => onSendToEncounter(hazard)}
        >
          <Swords className="h-3.5 w-3.5" />
          Enviar p/ Encontro
        </button>
        <button
          type="button"
          disabled={!canControl}
          title="Remover"
          className="ml-auto flex items-center gap-1 rounded-md border border-red-300/20 bg-red-500/10 px-2 py-1 text-[11px] text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => onRemove(hazard)}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <textarea
        value={notesDraft}
        disabled={!canControl}
        rows={2}
        className="min-h-[44px] w-full resize-none rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-xs text-white outline-none transition focus:border-cyan-300/60 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Notas do Mestre..."
        onChange={(event) => setNotesDraft(event.currentTarget.value)}
        onBlur={() => onUpdateNotes(hazard, notesDraft)}
      />
    </div>
  )
}

export function SceneHazardsPanel({
  hazards,
  canControl,
  hasActiveEncounter,
  pendingEncounterHazardIds,
  onOpenSheet,
  onCycleVisibility,
  onCycleState,
  onUpdateNotes,
  onRemove,
  onSendToEncounter,
}: {
  hazards: VttSceneHazard[]
  canControl: boolean
  hasActiveEncounter: boolean
  pendingEncounterHazardIds: string[]
  onOpenSheet: (hazardEntryId: string) => void
  onCycleVisibility: (hazard: VttSceneHazard) => void
  onCycleState: (hazard: VttSceneHazard) => void
  onUpdateNotes: (hazard: VttSceneHazard, notes: string) => void
  onRemove: (hazard: VttSceneHazard) => void
  onSendToEncounter: (hazard: VttSceneHazard) => void
}) {
  return (
    <section className="grid h-full min-h-0 grid-rows-[auto_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Cloud className="h-4 w-4 text-cyan-300" />
        <div>
          <div className="text-sm font-semibold text-white">Hazards ativos da cena</div>
          <div className="text-[11px] uppercase text-zinc-500">Efeitos sem posicao no mapa</div>
        </div>
      </div>

      <div className="grid min-h-0 gap-2 overflow-y-auto pr-1">
        {!hazards.length ? (
          <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-xs text-zinc-500">
            Nenhum efeito de cena. Use o icone de nuvem no card de um Hazard preparado para adicionar um.
          </div>
        ) : null}
        {hazards.map((hazard) => (
          <SceneHazardCard
            key={hazard.id}
            hazard={hazard}
            canControl={canControl}
            disabledSendToEncounter={hasActiveEncounter || pendingEncounterHazardIds.includes(hazard.id)}
            onOpenSheet={onOpenSheet}
            onCycleVisibility={onCycleVisibility}
            onCycleState={onCycleState}
            onUpdateNotes={onUpdateNotes}
            onRemove={onRemove}
            onSendToEncounter={onSendToEncounter}
          />
        ))}
      </div>
    </section>
  )
}
