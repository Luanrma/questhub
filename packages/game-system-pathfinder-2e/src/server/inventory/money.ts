export const PF2E_CURRENCY = {
  cp: 1,
  sp: 10,
  gp: 100,
  pp: 1000,
} as const

export type Pathfinder2eCurrencyBreakdown = {
  pp: number
  gp: number
  sp: number
  cp: number
}

export function toCopper(input: Pathfinder2eCurrencyBreakdown): number {
  return (
    input.pp * PF2E_CURRENCY.pp +
    input.gp * PF2E_CURRENCY.gp +
    input.sp * PF2E_CURRENCY.sp +
    input.cp * PF2E_CURRENCY.cp
  )
}

export function fromCopper(totalCopper: number): Pathfinder2eCurrencyBreakdown {
  const magnitude = Math.trunc(Math.abs(totalCopper))

  const pp = Math.floor(magnitude / PF2E_CURRENCY.pp)
  const remainingAfterPp = magnitude % PF2E_CURRENCY.pp

  const gp = Math.floor(remainingAfterPp / PF2E_CURRENCY.gp)
  const remainingAfterGp = remainingAfterPp % PF2E_CURRENCY.gp

  const sp = Math.floor(remainingAfterGp / PF2E_CURRENCY.sp)
  const cp = remainingAfterGp % PF2E_CURRENCY.sp

  return { pp, gp, sp, cp }
}

export function formatPathfinder2eCurrency(totalCopper: number): string {
  const breakdown = fromCopper(totalCopper)
  const sign = totalCopper < 0 ? '-' : ''

  const parts: string[] = []
  if (breakdown.pp > 0) parts.push(`${breakdown.pp} pp`)
  if (breakdown.gp > 0) parts.push(`${breakdown.gp} gp`)
  if (breakdown.sp > 0) parts.push(`${breakdown.sp} sp`)
  if (breakdown.cp > 0 || parts.length === 0) parts.push(`${breakdown.cp} cp`)

  return sign + parts.join(' ')
}
