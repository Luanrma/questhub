import { z } from 'zod'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'

const pathfinder2eCatalogTokenSheetDataSchema = z.object({
  schemaVersion: z.literal(1),
  hitPoints: z.object({
    current: z.number().int().nonnegative(),
    maximum: z.number().int().nonnegative(),
  }).strict(),
}).strict()

const pathfinder2eBestiaryVitalitySchema = z.object({
  hitPoints: z.number().int().nonnegative(),
}).passthrough()

const pathfinder2eBestiarySizeSchema = z.object({
  size: z.string().trim(),
}).passthrough()

const PATHFINDER_2E_TOKEN_SIZE_BY_CREATURE_SIZE: Readonly<Record<string, number>> = {
  tiny: 0.5,
  small: 1,
  medium: 1,
  large: 2,
  huge: 3,
  gargantuan: 4,
}

export type Pathfinder2eCatalogTokenSheetData = z.infer<
  typeof pathfinder2eCatalogTokenSheetDataSchema
>

export function createPathfinder2eCatalogTokenSheetData(
  bestiaryData: unknown,
): Pathfinder2eCatalogTokenSheetData | null {
  const parsed = pathfinder2eBestiaryVitalitySchema.safeParse(bestiaryData)
  if (!parsed.success) return null

  return {
    schemaVersion: 1,
    hitPoints: {
      current: parsed.data.hitPoints,
      maximum: parsed.data.hitPoints,
    },
  }
}

export function resolvePathfinder2eCatalogTokenSize(bestiaryData: unknown) {
  const parsed = pathfinder2eBestiarySizeSchema.safeParse(bestiaryData)
  if (!parsed.success) return 1

  return PATHFINDER_2E_TOKEN_SIZE_BY_CREATURE_SIZE[parsed.data.size.toLowerCase()] ?? 1
}

export function parsePathfinder2eCatalogTokenSheetData(
  input: unknown,
): Pathfinder2eCatalogTokenSheetData | null {
  const parsed = pathfinder2eCatalogTokenSheetDataSchema.safeParse(input)
  return parsed.success ? parsed.data : null
}

export function resolvePathfinder2eCatalogTokenSheetData(
  contentId: string,
): Pathfinder2eCatalogTokenSheetData | null {
  const entry = PATHFINDER_2E_CONTENT_ENTRIES.find(
    (candidate) => candidate.original.domain === 'BESTIARY'
      && candidate.original.contentId === contentId,
  )
  return entry
    ? createPathfinder2eCatalogTokenSheetData(entry.original.data)
    : null
}
