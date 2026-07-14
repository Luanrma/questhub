import type { Pathfinder2eCharacterSpellbookData, Pathfinder2eSpellcastingEntry } from '../character-spells/models'
import type { Pathfinder2eSpellDefinition } from '../spells/models'
import { parsePathfinder2eSpellRange } from '../../shared/spell-area'
import { parsePathfinder2eSpellTargetCount } from '../../shared/spell-target'
import type { Pathfinder2eSpellTargetProfile } from '../../shared/spell-target'
import { normalizePathfinder2eFocusPool } from './consume'
import { resolvePathfinder2eSpellResolutionProfile } from './resolution-profile'
import type { Pathfinder2eSpellResolutionProfile } from './resolution-profile'

export type Pathfinder2eCastResource =
  | { kind: 'prepared'; slots: Array<{ rank: number; slotIndex: number; expended: boolean }> }
  | { kind: 'spontaneous'; byRank: Array<{ rank: number; max: number; used: number }> }
  | { kind: 'focus' }
  | { kind: 'innate'; usesPerDay: number | 'at-will'; used: number }
  | { kind: 'cantrip' }
  | { kind: 'unavailable'; reason: string }

export type Pathfinder2eCastableSpell = {
  spellId: string
  name: string
  rank: number
  isCantrip: boolean
  time: string | null
  rangeFeet: number | null
  rangeKind: 'feet' | 'touch' | 'unlimited' | 'unsupported' | 'none'
  area: { type: string; valueFeet: number } | null
  targetProfile: Pathfinder2eSpellTargetProfile
  resolution: Pathfinder2eSpellResolutionProfile
  resource: Pathfinder2eCastResource
}

export type Pathfinder2eCastOptionsEntry = {
  entryId: string
  entryName: string
  category: Pathfinder2eSpellcastingEntry['category']
  focusPoints?: { points: number; max: number }
  spells: Pathfinder2eCastableSpell[]
}

function collectEntrySpells(
  entry: Pathfinder2eSpellcastingEntry,
): Array<{ spellId: string; name: string; rank: number | null }> {
  const seen = new Map<string, { spellId: string; name: string; rank: number | null }>()

  for (const spell of entry.known) {
    if (!seen.has(spell.spellId)) seen.set(spell.spellId, { spellId: spell.spellId, name: spell.name, rank: spell.rank })
  }
  for (const slot of entry.prepared) {
    if (slot.spellId && slot.name && !seen.has(slot.spellId)) {
      seen.set(slot.spellId, { spellId: slot.spellId, name: slot.name, rank: slot.rank })
    }
  }
  for (const use of entry.innateUses) {
    // Uso inato nao guarda rank no spellbook; `null` (nao `0`) para que a
    // ausencia de definicao no catalogo nunca classifique a magia como truque.
    if (!seen.has(use.spellId)) seen.set(use.spellId, { spellId: use.spellId, name: use.name, rank: null })
  }

  return [...seen.values()]
}

function resolveResource(
  entry: Pathfinder2eSpellcastingEntry,
  spellId: string,
  isCantrip: boolean,
): Pathfinder2eCastResource {
  if (isCantrip) return { kind: 'cantrip' }

  if (entry.category === 'PREPARED') {
    return {
      kind: 'prepared',
      slots: entry.prepared
        .filter((slot) => slot.spellId === spellId)
        .map((slot) => ({ rank: slot.rank, slotIndex: slot.slotIndex, expended: slot.expended })),
    }
  }

  if (entry.category === 'SPONTANEOUS') {
    // Regra 5.1/5.3 do doc normativo: so ranks >= rank conhecido da magia sao
    // validos (mesma validacao autoritativa de applyPathfinder2eCast).
    const knownRank = entry.known.find((candidate) => candidate.spellId === spellId)?.rank ?? 0
    return {
      kind: 'spontaneous',
      byRank: entry.slots
        .filter((slot) => slot.rank > 0 && slot.rank >= knownRank)
        .map((slot) => ({ rank: slot.rank, max: slot.max, used: slot.used ?? 0 })),
    }
  }

  if (entry.category === 'FOCUS') return { kind: 'focus' }

  if (entry.category === 'INNATE') {
    const use = entry.innateUses.find((candidate) => candidate.spellId === spellId)
    if (!use) return { kind: 'unavailable', reason: 'Sem uso inato configurado' }
    return { kind: 'innate', usesPerDay: use.usesPerDay, used: use.used }
  }

  return { kind: 'unavailable', reason: 'Categoria fora do fluxo de conjuracao' }
}

export function buildPathfinder2eCastOptions(
  spellbook: Pathfinder2eCharacterSpellbookData,
  findSpell: (spellId: string) => Pathfinder2eSpellDefinition | null,
): Pathfinder2eCastOptionsEntry[] {
  const normalizedSpellbook = normalizePathfinder2eFocusPool(spellbook)
  const entries: Pathfinder2eCastOptionsEntry[] = []

  for (const entry of normalizedSpellbook.entries) {
    if (entry.category === 'RITUAL' || entry.category === 'ITEMS') continue

    const spells: Pathfinder2eCastableSpell[] = collectEntrySpells(entry).map((reference) => {
      const definition = findSpell(reference.spellId)
      const isCantrip = definition ? definition.traits.includes('cantrip') : reference.rank === 0
      const rangeProfile = definition ? parsePathfinder2eSpellRange(definition.range) : null

      return {
        spellId: reference.spellId,
        name: definition?.name ?? reference.name,
        rank: definition?.rank ?? reference.rank ?? 0,
        isCantrip,
        time: definition?.time ?? null,
        rangeFeet: rangeProfile?.kind === 'feet' ? rangeProfile.feet : null,
        rangeKind: rangeProfile ? rangeProfile.kind : 'none',
        area: definition?.area ? { type: definition.area.type, valueFeet: definition.area.value } : null,
        targetProfile: parsePathfinder2eSpellTargetCount(definition?.target),
        resolution: resolvePathfinder2eSpellResolutionProfile(definition ?? null),
        resource: resolveResource(entry, reference.spellId, isCantrip),
      }
    })

    entries.push({
      entryId: entry.id,
      entryName: entry.name,
      category: entry.category,
      ...(entry.category === 'FOCUS' && normalizedSpellbook.focusPool
        ? {
            focusPoints: {
              points: normalizedSpellbook.focusPool.points,
              max: normalizedSpellbook.focusPool.max,
            },
          }
        : {}),
      spells,
    })
  }

  return entries
}
