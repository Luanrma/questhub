export type Pathfinder2eCastActionCost =
  | { kind: 'actions'; actions: 1 | 2 | 3 }
  | { kind: 'reaction' }
  | { kind: 'free' }
  | { kind: 'unsupported'; raw: string }

export function parsePathfinder2eCastActionCost(time: string | null | undefined): Pathfinder2eCastActionCost {
  const normalized = time?.trim().toLowerCase() ?? ''
  if (!normalized) return { kind: 'unsupported', raw: time ?? '' }

  if (normalized === 'reaction') return { kind: 'reaction' }
  if (normalized === 'free action' || normalized === 'free') return { kind: 'free' }

  // Formato real importado de pf2e-master/packs/spells (system.time.value) e
  // o digito puro ("1"/"2"/"3", 1341 das ~1716 magias do snapshot) — o
  // sufixo "action(s)" e opcional para nao quebrar se algum dado vier
  // formatado por extenso.
  const match = normalized.match(/^([123])(?:\s+actions?)?$/)
  if (match) return { kind: 'actions', actions: Number(match[1]) as 1 | 2 | 3 }

  return { kind: 'unsupported', raw: time ?? '' }
}
