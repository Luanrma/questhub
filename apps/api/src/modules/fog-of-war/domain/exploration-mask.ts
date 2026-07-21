export const maximumFogMaskDimension = 1024

export type FogExplorationMask = {
  revision: number
  width: number
  height: number
  mask: Uint8Array
}

export type FogExplorationMaskValidation =
  | { ok: true; value: FogExplorationMask }
  | { ok: false; code: 'INVALID_MASK_DIMENSIONS' | 'INVALID_MASK_SIZE' }

export function expectedFogMaskByteLength(width: number, height: number) {
  return Math.ceil((width * height) / 8)
}

export function validateFogExplorationMask(value: FogExplorationMask): FogExplorationMaskValidation {
  if (!Number.isInteger(value.width) || !Number.isInteger(value.height) ||
    value.width < 1 || value.height < 1 ||
    value.width > maximumFogMaskDimension || value.height > maximumFogMaskDimension) {
    return { ok: false, code: 'INVALID_MASK_DIMENSIONS' }
  }
  if (!Number.isInteger(value.revision) || value.revision < 0) {
    return { ok: false, code: 'INVALID_MASK_DIMENSIONS' }
  }
  if (value.mask.byteLength !== expectedFogMaskByteLength(value.width, value.height)) {
    return { ok: false, code: 'INVALID_MASK_SIZE' }
  }
  return { ok: true, value }
}

export function unionFogExplorationMasks(current: FogExplorationMask | null, incoming: FogExplorationMask) {
  const valid = validateFogExplorationMask(incoming)
  if (!valid.ok) return valid
  if (!current) return { ok: true as const, value: { ...incoming, mask: incoming.mask.slice() } }
  if (current.revision !== incoming.revision) {
    return { ok: false as const, code: 'STALE_FOG_REVISION' as const }
  }
  if (current.width !== incoming.width || current.height !== incoming.height) {
    return { ok: false as const, code: 'INVALID_MASK_DIMENSIONS' as const }
  }
  const mask = current.mask.slice()
  for (let index = 0; index < mask.length; index += 1) mask[index] |= incoming.mask[index]
  return { ok: true as const, value: { ...current, mask } }
}

export function resetFogExplorationMask(current: FogExplorationMask | null): FogExplorationMask {
  return {
    revision: (current?.revision ?? 0) + 1,
    width: current?.width ?? 1,
    height: current?.height ?? 1,
    mask: new Uint8Array(current?.mask.byteLength ?? 1),
  }
}
