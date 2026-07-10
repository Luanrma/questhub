export type CurrencyBreakdown = Record<string, number>

const PREFERRED_DENOMINATION_ORDER = ['pp', 'gp', 'sp', 'cp']

export function orderedCurrencyEntries(breakdown: CurrencyBreakdown) {
  return Object.entries(breakdown).sort(([left], [right]) => {
    const leftIndex = PREFERRED_DENOMINATION_ORDER.indexOf(left)
    const rightIndex = PREFERRED_DENOMINATION_ORDER.indexOf(right)

    if (leftIndex === -1 && rightIndex === -1) return left.localeCompare(right)
    if (leftIndex === -1) return 1
    if (rightIndex === -1) return -1
    return leftIndex - rightIndex
  })
}
