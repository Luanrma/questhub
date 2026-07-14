import { useState } from 'react'
import { X, Plus, Trash2 } from 'lucide-react'
import {
  saveNpcSpellbook,
  SpellSearchPicker,
  type CampaignNpcDefinitionView,
  type Pathfinder2eCharacterSpellbookData,
  type Pathfinder2eSpellcastingEntry,
} from '../../../game-systems/pathfinder-2e/npc-spellcasting'

type Props = {
  campaignId: string
  definition: CampaignNpcDefinitionView
  onClose: () => void
  onSaved: (definition: CampaignNpcDefinitionView) => void
}

function createEntry(name: string, npcSpellDC: number): Pathfinder2eSpellcastingEntry {
  return {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
    name,
    category: 'INNATE',
    tradition: 'arcane',
    ability: 'cha',
    proficiencyRank: 0,
    slots: [],
    known: [],
    prepared: [],
    innateUses: [],
    signatureSpellIds: [],
    npcSpellDC,
  }
}

export function NpcSpellbookEditorModal({ campaignId, definition, onClose, onSaved }: Props) {
  const [spellbook, setSpellbook] = useState<Pathfinder2eCharacterSpellbookData>(definition.spellbook)
  const [newEntryName, setNewEntryName] = useState('')
  const [newEntryDC, setNewEntryDC] = useState('15')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  function addEntry() {
    const name = newEntryName.trim()
    const dc = Number.parseInt(newEntryDC, 10)
    if (!name || !Number.isFinite(dc) || dc < 1) return
    setSpellbook((current) => ({ ...current, entries: [...current.entries, createEntry(name, dc)] }))
    setNewEntryName('')
  }

  function removeEntry(entryId: string) {
    setSpellbook((current) => ({ ...current, entries: current.entries.filter((entry) => entry.id !== entryId) }))
  }

  function addSpellToEntry(entryId: string, spellId: string, name: string) {
    setSpellbook((current) => ({
      ...current,
      entries: current.entries.map((entry) => {
        if (entry.id !== entryId) return entry
        if (entry.innateUses.some((use) => use.spellId === spellId)) return entry
        return { ...entry, innateUses: [...entry.innateUses, { spellId, name, usesPerDay: 'at-will' as const, used: 0 }] }
      }),
    }))
  }

  function removeSpellFromEntry(entryId: string, spellId: string) {
    setSpellbook((current) => ({
      ...current,
      entries: current.entries.map((entry) =>
        entry.id === entryId ? { ...entry, innateUses: entry.innateUses.filter((use) => use.spellId !== spellId) } : entry,
      ),
    }))
  }

  function setSpellUsesPerDay(entryId: string, spellId: string, usesPerDay: number | 'at-will') {
    setSpellbook((current) => ({
      ...current,
      entries: current.entries.map((entry) =>
        entry.id === entryId
          ? { ...entry, innateUses: entry.innateUses.map((use) => (use.spellId === spellId ? { ...use, usesPerDay } : use)) }
          : entry,
      ),
    }))
  }

  async function save() {
    setBusy(true)
    setError(null)
    try {
      const updated = await saveNpcSpellbook(campaignId, definition.id, spellbook)
      setSpellbook(updated.spellbook)
      setFeedback('Salvo.')
      onSaved(updated)
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Erro ao salvar')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-lg border border-white/10 bg-[#111217] text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h2 className="text-sm font-semibold">Magias de {definition.name}</h2>
          <button type="button" className="rounded p-1 text-zinc-400 hover:bg-white/10 hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
          {error ? <p className="mb-2 rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs text-red-200">{error}</p> : null}
          {feedback ? <p className="mb-2 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">{feedback}</p> : null}

          <p className="mb-3 text-xs text-zinc-400">
            Cada entrada representa um grupo de magias inatas do NPC (estilo statblock: "a vontade" ou "N/dia"), com um Spell DC fixo. O
            catalogo original desta criatura nunca e alterado — isso fica salvo so nesta campanha.
          </p>

          <div className="mb-4 flex items-end gap-2 rounded-md border border-white/10 bg-white/[0.03] p-3">
            <label className="flex-1 text-xs text-zinc-300">
              Nome da entrada
              <input
                value={newEntryName}
                onChange={(event) => setNewEntryName(event.target.value)}
                placeholder="ex.: Magias Inatas"
                className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-sm text-white outline-none"
              />
            </label>
            <label className="w-24 text-xs text-zinc-300">
              Spell DC
              <input
                value={newEntryDC}
                onChange={(event) => setNewEntryDC(event.target.value)}
                inputMode="numeric"
                className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-sm text-white outline-none"
              />
            </label>
            <button
              type="button"
              disabled={!newEntryName.trim()}
              onClick={addEntry}
              className="flex h-9 items-center gap-1 rounded-md bg-indigo-500/20 px-3 text-xs font-medium text-indigo-200 hover:bg-indigo-500/35 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus className="h-3.5 w-3.5" /> Adicionar entrada
            </button>
          </div>

          {spellbook.entries.length === 0 ? <p className="text-sm text-zinc-500">Nenhuma entrada de conjuracao ainda.</p> : null}

          {spellbook.entries.map((entry) => (
            <div key={entry.id} className="mb-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm font-semibold">
                  {entry.name} <span className="text-xs font-normal text-zinc-400">DC {entry.npcSpellDC ?? '-'}</span>
                </div>
                <button type="button" className="rounded p-1 text-red-300 hover:bg-red-500/10" onClick={() => removeEntry(entry.id)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="mt-2 space-y-1">
                {entry.innateUses.map((use) => (
                  <div key={use.spellId} className="flex items-center gap-2 rounded bg-black/20 px-2 py-1 text-xs">
                    <span className="min-w-0 flex-1 truncate">{use.name}</span>
                    <select
                      value={use.usesPerDay === 'at-will' ? 'at-will' : String(use.usesPerDay)}
                      onChange={(event) =>
                        setSpellUsesPerDay(entry.id, use.spellId, event.target.value === 'at-will' ? 'at-will' : Number(event.target.value))
                      }
                      className="rounded border border-white/10 bg-black/30 px-1 py-0.5 text-white"
                    >
                      <option value="at-will">a vontade</option>
                      <option value="1">1/dia</option>
                      <option value="2">2/dia</option>
                      <option value="3">3/dia</option>
                    </select>
                    <button
                      type="button"
                      className="rounded p-0.5 text-red-300 hover:bg-red-500/10"
                      onClick={() => removeSpellFromEntry(entry.id, use.spellId)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <SpellSearchPicker
                  campaignId={campaignId}
                  category="spell"
                  onPick={(result) => addSpellToEntry(entry.id, result.id, result.name)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 border-t border-white/10 px-4 py-3">
          <button type="button" onClick={onClose} className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10">
            Fechar
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => void save()}
            className="rounded-md bg-indigo-500/30 px-3 py-1.5 text-xs font-medium text-indigo-100 hover:bg-indigo-500/45 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
