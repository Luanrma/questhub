import type {
  Pathfinder2eCharacterSpellbookData,
  Pathfinder2eKnownSpell,
  Pathfinder2ePreparedSpellSlot,
  Pathfinder2eSpellcastingCategory,
  Pathfinder2eSpellcastingEntry,
} from '../types'

export const SPELLCASTING_CATEGORY_LABELS: Record<Pathfinder2eSpellcastingCategory, string> = {
  PREPARED: 'Preparada',
  SPONTANEOUS: 'Espontanea',
  INNATE: 'Inata',
  FOCUS: 'Foco',
  ITEMS: 'Itens',
  RITUAL: 'Ritual',
}

export function createSpellcastingEntry(name: string, category: Pathfinder2eSpellcastingCategory, tradition: string, ability: string): Pathfinder2eSpellcastingEntry {
  return {
    id: `entry-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    category,
    tradition,
    ability,
    proficiencyRank: 0,
    slots: [],
    known: [],
    prepared: [],
    innateUses: [],
    signatureSpellIds: [],
  }
}

export function withEntry(
  spellbook: Pathfinder2eCharacterSpellbookData,
  entryId: string,
  update: (entry: Pathfinder2eSpellcastingEntry) => Pathfinder2eSpellcastingEntry,
): Pathfinder2eCharacterSpellbookData {
  return {
    ...spellbook,
    entries: spellbook.entries.map((entry) => (entry.id === entryId ? update(entry) : entry)),
  }
}

export function addKnownSpell(entry: Pathfinder2eSpellcastingEntry, spell: Pathfinder2eKnownSpell): Pathfinder2eSpellcastingEntry {
  return { ...entry, known: [...entry.known, spell] }
}

export function removeKnownSpell(entry: Pathfinder2eSpellcastingEntry, spellId: string): Pathfinder2eSpellcastingEntry {
  return { ...entry, known: entry.known.filter((spell) => spell.spellId !== spellId) }
}

export function addPreparedSlot(entry: Pathfinder2eSpellcastingEntry, rank: number): Pathfinder2eSpellcastingEntry {
  const nextIndex = entry.prepared.filter((slot) => slot.rank === rank).length
  const slot: Pathfinder2ePreparedSpellSlot = { rank, slotIndex: nextIndex, spellId: null, name: null, expended: false }
  return { ...entry, prepared: [...entry.prepared, slot] }
}

export function setPreparedSpell(entry: Pathfinder2eSpellcastingEntry, rank: number, slotIndex: number, spellId: string | null, name: string | null): Pathfinder2eSpellcastingEntry {
  return {
    ...entry,
    prepared: entry.prepared.map((slot) => (slot.rank === rank && slot.slotIndex === slotIndex ? { ...slot, spellId, name } : slot)),
  }
}

export function toggleExpended(entry: Pathfinder2eSpellcastingEntry, rank: number, slotIndex: number): Pathfinder2eSpellcastingEntry {
  return {
    ...entry,
    prepared: entry.prepared.map((slot) => (slot.rank === rank && slot.slotIndex === slotIndex ? { ...slot, expended: !slot.expended } : slot)),
  }
}

export function removePreparedSlot(entry: Pathfinder2eSpellcastingEntry, rank: number, slotIndex: number): Pathfinder2eSpellcastingEntry {
  return { ...entry, prepared: entry.prepared.filter((slot) => !(slot.rank === rank && slot.slotIndex === slotIndex)) }
}

export function setSlotMax(entry: Pathfinder2eSpellcastingEntry, rank: number, max: number): Pathfinder2eSpellcastingEntry {
  const exists = entry.slots.some((slot) => slot.rank === rank)
  const slots = exists
    ? entry.slots.map((slot) => (slot.rank === rank ? { ...slot, max } : slot))
    : [...entry.slots, { rank, max }].sort((left, right) => left.rank - right.rank)
  return { ...entry, slots }
}
