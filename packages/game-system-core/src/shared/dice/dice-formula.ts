export type DiceFormula = { kind: 'dice'; count: number; sides: number; bonus: number } | { kind: 'flat'; amount: number }

const DICE_PATTERN = /^(\d+)d(\d+)(?:\+(\d+))?$/
const FLAT_PATTERN = /^(\d+)$/

export function parseDiceFormula(raw: string): DiceFormula | null {
  const normalized = raw.trim()

  const diceMatch = normalized.match(DICE_PATTERN)
  if (diceMatch) {
    const count = Number(diceMatch[1])
    const sides = Number(diceMatch[2])
    const bonus = diceMatch[3] ? Number(diceMatch[3]) : 0
    if (count <= 0 || sides <= 0) return null
    return { kind: 'dice', count, sides, bonus }
  }

  const flatMatch = normalized.match(FLAT_PATTERN)
  if (flatMatch) return { kind: 'flat', amount: Number(flatMatch[1]) }

  return null
}
