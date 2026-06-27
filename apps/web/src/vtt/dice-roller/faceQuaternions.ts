import { Quaternion, Vector3 } from 'three'
import type { DiceSides, SerializedQuaternion } from './types'

type DiceFaceQuaternionMap = Record<number, SerializedQuaternion>

const identityQuaternion: SerializedQuaternion = [0, 0, 0, 1]

function createFallbackFaceMap(sides: DiceSides): DiceFaceQuaternionMap {
  return Object.fromEntries(
    Array.from({ length: sides }, (_, index) => {
      const angle = ((index + 1) / sides) * Math.PI * 2
      const quaternion = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), angle)
      return [index + 1, [quaternion.x, quaternion.y, quaternion.z, quaternion.w] satisfies SerializedQuaternion]
    }),
  )
}

export const diceFaceQuaternions: Record<DiceSides, DiceFaceQuaternionMap> = {
  4: createFallbackFaceMap(4),
  6: createFallbackFaceMap(6),
  8: createFallbackFaceMap(8),
  10: createFallbackFaceMap(10),
  12: createFallbackFaceMap(12),
  20: createFallbackFaceMap(20),
}

export function getDiceFaceQuaternion(sides: DiceSides, value: number) {
  const serialized = diceFaceQuaternions[sides][value] ?? identityQuaternion
  return new Quaternion().fromArray(serialized)
}
