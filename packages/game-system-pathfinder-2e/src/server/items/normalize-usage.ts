import type { Pathfinder2eBodyPlacement, Pathfinder2eUsage } from './models'

export type NormalizedPathfinder2eUsage = Pathfinder2eUsage & {
  normalized: string
  warnings: string[]
}

const placementByToken: Record<string, Pathfinder2eBodyPlacement> = {
  armor: 'armor',
  back: 'back',
  belt: 'waist',
  boots: 'feet',
  bracelet: 'hands',
  cloak: 'shoulders',
  clothing: 'torso',
  collar: 'neck',
  crown: 'head',
  eyes: 'eyes',
  epaulet: 'shoulders',
  feet: 'feet',
  footwear: 'feet',
  gloves: 'hands',
  hand: 'hands',
  hands: 'hands',
  head: 'head',
  headwear: 'head',
  horseshoes: 'feet',
  mask: 'eyes',
  necklace: 'neck',
  neck: 'neck',
  ring: 'ring',
  saddle: 'back',
  sandals: 'feet',
  sandles: 'feet',
  shoulders: 'shoulders',
  underarmor: 'torso',
  waist: 'waist',
}

export function normalizePathfinder2eToken(value: unknown): string {
  if (typeof value !== 'string') return ''

  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
}

function findPlacement(normalized: string): Pathfinder2eBodyPlacement | null {
  if (!normalized.startsWith('worn')) return null

  const placementToken = normalized.slice('worn'.length)
  return placementByToken[placementToken] ?? null
}

export function normalizePathfinder2eUsage(value: unknown): NormalizedPathfinder2eUsage {
  const raw = typeof value === 'string' && value.trim() ? value : null
  const normalized = normalizePathfinder2eToken(value)
  const warnings: string[] = []

  if (!normalized) {
    return { raw, normalized, mode: 'none', hands: 0, placement: null, warnings }
  }

  if (normalized === 'ammo' || normalized === 'ammunition') {
    return { raw, normalized, mode: 'ammunition', hands: 0, placement: null, warnings }
  }

  if (isAffixedLikeUsage(normalized)) {
    return { raw, normalized, mode: 'affixed', hands: 0, placement: null, warnings }
  }

  if (normalized.startsWith('held')) {
    const hands = normalized.includes('twohands') || normalized.includes('2hands') ? 2 : 1
    return { raw, normalized, mode: 'held', hands, placement: null, warnings }
  }

  if (normalized.startsWith('worn')) {
    const placement = findPlacement(normalized)
    if (!placement) warnings.push(`UNKNOWN_WORN_PLACEMENT:${raw ?? normalized}`)
    return { raw, normalized, mode: 'worn', hands: 0, placement, warnings }
  }

  if (normalized.startsWith('stowed')) {
    return { raw, normalized, mode: 'stowed', hands: 0, placement: null, warnings }
  }

  if (normalized.startsWith('consumed')) {
    return { raw, normalized, mode: 'consumed', hands: 0, placement: null, warnings }
  }

  warnings.push(`UNKNOWN_USAGE:${raw ?? normalized}`)
  return { raw, normalized, mode: 'none', hands: 0, placement: null, warnings }
}

function isAffixedLikeUsage(normalized: string) {
  return (
    normalized.startsWith('affixed') ||
    normalized.startsWith('etched') ||
    normalized.startsWith('attached') ||
    normalized.startsWith('applied') ||
    normalized.startsWith('bonded') ||
    normalized.includes('attached') ||
    normalized.includes('applied') ||
    normalized.startsWith('sewn') ||
    normalized.startsWith('mounted')
  )
}
