import { z } from 'zod'

export const PATHFINDER_2E_CURRENCY_NAMESPACE = 'questhub:pathfinder_2e'
export const PATHFINDER_2E_CURRENCY_TYPE_KEY = 'currency'
export const PATHFINDER_2E_CURRENCY_CATALOG_NAMESPACE = 'questhub:pathfinder_2e:currency:v1'
export const PATHFINDER_2E_CURRENCY_CATALOG_CONTENT_ID = 'wallet'
export const PATHFINDER_2E_CURRENCY_MAX = 100_000_000

const currencyCountSchema = z.number().int().min(0).max(PATHFINDER_2E_CURRENCY_MAX)
const currencyAdjustmentSchema = z.number().int().min(-PATHFINDER_2E_CURRENCY_MAX).max(PATHFINDER_2E_CURRENCY_MAX)

export const pathfinder2eCurrencySchema = z.object({
  platinum: currencyCountSchema,
  gold: currencyCountSchema,
  silver: currencyCountSchema,
  copper: currencyCountSchema,
}).strict()

export const pathfinder2eCurrencyAdjustmentSchema = z.object({
  platinum: currencyAdjustmentSchema,
  gold: currencyAdjustmentSchema,
  silver: currencyAdjustmentSchema,
  copper: currencyAdjustmentSchema,
}).strict()

export type Pathfinder2eCurrency = z.infer<typeof pathfinder2eCurrencySchema>
export type Pathfinder2eCurrencyAdjustment = z.infer<typeof pathfinder2eCurrencyAdjustmentSchema>

export const emptyPathfinder2eCurrency: Pathfinder2eCurrency = {
  platinum: 0,
  gold: 0,
  silver: 0,
  copper: 0,
}

export function parsePathfinder2eCurrency(input: unknown): Pathfinder2eCurrency {
  return pathfinder2eCurrencySchema.parse(input)
}

export function hasPathfinder2eCurrencyValue(amount: Pathfinder2eCurrency | Pathfinder2eCurrencyAdjustment) {
  return Object.values(amount).some((value) => value !== 0)
}

export function addPathfinder2eCurrency(
  current: Pathfinder2eCurrency,
  adjustment: Pathfinder2eCurrencyAdjustment,
): Pathfinder2eCurrency | null {
  const result = {
    platinum: current.platinum + adjustment.platinum,
    gold: current.gold + adjustment.gold,
    silver: current.silver + adjustment.silver,
    copper: current.copper + adjustment.copper,
  }
  return pathfinder2eCurrencySchema.safeParse(result).success ? result : null
}

export function subtractPathfinder2eCurrency(
  current: Pathfinder2eCurrency,
  amount: Pathfinder2eCurrency,
): Pathfinder2eCurrency | null {
  return addPathfinder2eCurrency(current, {
    platinum: -amount.platinum,
    gold: -amount.gold,
    silver: -amount.silver,
    copper: -amount.copper,
  })
}
