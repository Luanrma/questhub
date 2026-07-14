import type {
  Pathfinder2eCharacterSpellbookData,
  Pathfinder2eRecentCast,
  Pathfinder2eSpellcastingEntry,
} from '../character-spells/models'

export type Pathfinder2eCastSource =
  | { kind: 'prepared'; rank: number; slotIndex: number }
  | { kind: 'spontaneous'; rank: number }
  | { kind: 'focus' }
  | { kind: 'innate' }
  | { kind: 'cantrip' }

export type Pathfinder2eCastRequest = {
  entryId: string
  spellId: string
  source: Pathfinder2eCastSource
}

export type Pathfinder2eCastResult =
  | { ok: true; spellbook: Pathfinder2eCharacterSpellbookData; spellName: string; consumed: string }
  | { ok: false; error: string }

export const PATHFINDER_2E_RECENT_CAST_LIMIT = 20

export function buildPathfinder2eCastRequestKey(request: Pathfinder2eCastRequest, placement?: unknown): string {
  return JSON.stringify({
    entryId: request.entryId,
    spellId: request.spellId,
    source: request.source,
    placement: placement ?? null,
  })
}

export function findPathfinder2eRecentCast(
  spellbook: Pathfinder2eCharacterSpellbookData,
  clientCastId: string,
): Pathfinder2eRecentCast | null {
  return spellbook.recentCasts?.find((cast) => cast.clientCastId === clientCastId) ?? null
}

export function appendPathfinder2eRecentCast(
  spellbook: Pathfinder2eCharacterSpellbookData,
  recentCast: Pathfinder2eRecentCast,
): Pathfinder2eCharacterSpellbookData {
  const withoutDuplicate = (spellbook.recentCasts ?? []).filter((cast) => cast.clientCastId !== recentCast.clientCastId)
  return {
    ...spellbook,
    recentCasts: [...withoutDuplicate, recentCast].slice(-PATHFINDER_2E_RECENT_CAST_LIMIT),
  }
}

function findSpellNameInEntry(entry: Pathfinder2eSpellcastingEntry, spellId: string): string | null {
  const known = entry.known.find((spell) => spell.spellId === spellId)
  if (known) return known.name
  const prepared = entry.prepared.find((slot) => slot.spellId === spellId)
  if (prepared?.name) return prepared.name
  const innate = entry.innateUses.find((use) => use.spellId === spellId)
  if (innate) return innate.name
  return null
}

function withEntry(
  spellbook: Pathfinder2eCharacterSpellbookData,
  entryId: string,
  update: (entry: Pathfinder2eSpellcastingEntry) => Pathfinder2eSpellcastingEntry,
): Pathfinder2eCharacterSpellbookData {
  return {
    ...spellbook,
    entries: spellbook.entries.map((entry) => (entry.id === entryId ? update(entry) : entry)),
  }
}

function withoutLegacyEntryFocusPools(entries: Pathfinder2eSpellcastingEntry[]): Pathfinder2eSpellcastingEntry[] {
  return entries.map((entry) => {
    const { focusPool: _legacyFocusPool, ...withoutFocusPool } = entry
    return withoutFocusPool
  })
}

function clampFocusPool(points: number, max: number): { points: number; max: number } {
  const safeMax = Math.max(0, Math.min(3, Math.floor(max)))
  const safePoints = Math.max(0, Math.min(safeMax, Math.floor(points)))
  return { points: safePoints, max: safeMax }
}

export function normalizePathfinder2eFocusPool(
  spellbook: Pathfinder2eCharacterSpellbookData,
): Pathfinder2eCharacterSpellbookData {
  if (spellbook.focusPool) {
    return {
      ...spellbook,
      focusPool: clampFocusPool(spellbook.focusPool.points, spellbook.focusPool.max),
      entries: withoutLegacyEntryFocusPools(spellbook.entries),
    }
  }

  const legacyPools = spellbook.entries.flatMap((entry) => (entry.focusPool ? [entry.focusPool] : []))
  if (legacyPools.length === 0) return spellbook

  const legacyMax = legacyPools.reduce((total, pool) => total + pool.max, 0)
  const legacyPoints = legacyPools.reduce((total, pool) => total + pool.points, 0)
  return {
    ...spellbook,
    focusPool: clampFocusPool(legacyPoints, legacyMax),
    entries: withoutLegacyEntryFocusPools(spellbook.entries),
  }
}

export function applyPathfinder2eCast(
  spellbook: Pathfinder2eCharacterSpellbookData,
  request: Pathfinder2eCastRequest,
): Pathfinder2eCastResult {
  const normalizedSpellbook = normalizePathfinder2eFocusPool(spellbook)
  const entry = normalizedSpellbook.entries.find((candidate) => candidate.id === request.entryId)
  if (!entry) return { ok: false, error: 'Entrada de conjuracao nao encontrada' }

  if (entry.category === 'RITUAL' || entry.category === 'ITEMS') {
    return { ok: false, error: 'Conjuracao desta categoria ainda nao e suportada' }
  }

  const spellName = findSpellNameInEntry(entry, request.spellId)
  if (!spellName) return { ok: false, error: 'Magia nao encontrada nesta entrada de conjuracao' }

  const source = request.source

  if (source.kind === 'cantrip') {
    return { ok: true, spellbook: normalizedSpellbook, spellName, consumed: 'nada (truque)' }
  }

  if (source.kind === 'prepared') {
    const slot = entry.prepared.find(
      (candidate) => candidate.rank === source.rank && candidate.slotIndex === source.slotIndex,
    )
    if (!slot) return { ok: false, error: 'Slot preparado nao encontrado' }
    if (slot.spellId !== request.spellId) return { ok: false, error: 'O slot escolhido nao contem esta magia' }
    if (slot.expended) return { ok: false, error: 'Este slot ja foi gasto' }

    const next = withEntry(normalizedSpellbook, entry.id, (current) => ({
      ...current,
      prepared: current.prepared.map((candidate) =>
        candidate.rank === source.rank && candidate.slotIndex === source.slotIndex
          ? { ...candidate, expended: true }
          : candidate,
      ),
    }))
    return { ok: true, spellbook: next, spellName, consumed: `slot preparado R${source.rank}` }
  }

  if (source.kind === 'spontaneous') {
    // Regra 5.1/5.3 do doc normativo (pathfinder-2e-regras-de-magias-questhub.md):
    // o slot deve ser do rank conhecido da magia ou maior. Gastar slot maior
    // sem elevar e permitido; slot menor, nunca.
    const knownSpell = entry.known.find((candidate) => candidate.spellId === request.spellId)
    if (knownSpell && source.rank < knownSpell.rank) {
      return {
        ok: false,
        error: `Esta magia e conhecida no rank ${knownSpell.rank}; use um slot de rank ${knownSpell.rank} ou maior`,
      }
    }

    const slotRank = entry.slots.find((candidate) => candidate.rank === source.rank)
    if (!slotRank) return { ok: false, error: `Nenhum slot configurado para o rank ${source.rank}` }
    const used = slotRank.used ?? 0
    if (used >= slotRank.max) return { ok: false, error: `Todos os slots de rank ${source.rank} ja foram gastos` }

    const next = withEntry(normalizedSpellbook, entry.id, (current) => ({
      ...current,
      slots: current.slots.map((candidate) =>
        candidate.rank === source.rank ? { ...candidate, used: (candidate.used ?? 0) + 1 } : candidate,
      ),
    }))
    return { ok: true, spellbook: next, spellName, consumed: `slot espontaneo R${source.rank}` }
  }

  if (source.kind === 'focus') {
    const focusPool = normalizedSpellbook.focusPool
    if (!focusPool || focusPool.max < 1) return { ok: false, error: 'Este personagem nao tem reservatorio de foco' }
    if (focusPool.points < 1) return { ok: false, error: 'Sem pontos de foco disponiveis' }

    const next = {
      ...normalizedSpellbook,
      focusPool: { ...focusPool, points: focusPool.points - 1 },
    }
    return { ok: true, spellbook: next, spellName, consumed: '1 ponto de foco' }
  }

  // innate
  const innateUse = entry.innateUses.find((use) => use.spellId === request.spellId)
  if (!innateUse) return { ok: false, error: 'Uso inato nao encontrado para esta magia' }
  if (innateUse.usesPerDay === 'at-will') {
    return { ok: true, spellbook: normalizedSpellbook, spellName, consumed: 'nada (a vontade)' }
  }
  if (innateUse.used >= innateUse.usesPerDay) return { ok: false, error: 'Usos inatos de hoje esgotados' }

  const next = withEntry(normalizedSpellbook, entry.id, (current) => ({
    ...current,
    innateUses: current.innateUses.map((use) =>
      use.spellId === request.spellId ? { ...use, used: use.used + 1 } : use,
    ),
  }))
  return { ok: true, spellbook: next, spellName, consumed: '1 uso inato' }
}

export function applyPathfinder2eRest(spellbook: Pathfinder2eCharacterSpellbookData): Pathfinder2eCharacterSpellbookData {
  const normalizedSpellbook = normalizePathfinder2eFocusPool(spellbook)
  return {
    ...normalizedSpellbook,
    focusPool: normalizedSpellbook.focusPool
      ? { ...normalizedSpellbook.focusPool, points: normalizedSpellbook.focusPool.max }
      : normalizedSpellbook.focusPool,
    entries: normalizedSpellbook.entries.map((entry) => ({
      ...entry,
      prepared: entry.prepared.map((slot) => ({ ...slot, expended: false })),
      slots: entry.slots.map((slot) => ({ ...slot, used: 0 })),
      innateUses: entry.innateUses.map((use) => ({ ...use, used: 0 })),
    })),
  }
}

export function applyPathfinder2eRefocus(spellbook: Pathfinder2eCharacterSpellbookData): Pathfinder2eCharacterSpellbookData {
  // Regra 7.2/7.3 do doc normativo: o personagem tem um unico reservatorio e
  // Refocar recupera exatamente 1 ponto por acionamento — no total, nao por
  // entrada.
  const normalizedSpellbook = normalizePathfinder2eFocusPool(spellbook)
  const focusPool = normalizedSpellbook.focusPool
  if (!focusPool || focusPool.points >= focusPool.max) return normalizedSpellbook

  return {
    ...normalizedSpellbook,
    focusPool: { ...focusPool, points: focusPool.points + 1 },
  }
}
