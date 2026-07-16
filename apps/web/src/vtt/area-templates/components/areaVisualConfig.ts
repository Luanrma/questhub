import type { AreaVisualEffect } from '../domain/types'

export type AnimatedAreaVisualEffect = Exclude<AreaVisualEffect, 'DEFAULT'>

const presentations: Record<AnimatedAreaVisualEffect, { baseColor: string; borderColor: string; surfaceClass: string }> = {
  FIRE: { baseColor: '#7c2d12', borderColor: '#fb923c', surfaceClass: 'questhub-area-fire-surface' },
  ELECTRIC: { baseColor: '#172554', borderColor: '#67e8f9', surfaceClass: 'questhub-area-electric-surface' },
  HEALING: { baseColor: '#064e3b', borderColor: '#86efac', surfaceClass: 'questhub-area-healing-surface' },
  EARTH: { baseColor: '#422006', borderColor: '#d6a66a', surfaceClass: 'questhub-area-earth-surface' },
  VINES: { baseColor: '#052e16', borderColor: '#65a30d', surfaceClass: 'questhub-area-vines-surface' },
  LEAVES: { baseColor: '#14532d', borderColor: '#bef264', surfaceClass: 'questhub-area-leaves-surface' },
}

export function areaVisualPresentation(effect: AnimatedAreaVisualEffect) {
  return presentations[effect]
}

export function areaVisualPatternId(effect: AnimatedAreaVisualEffect, id: string) {
  return `area-${effect.toLowerCase()}-pattern-${id}`
}
