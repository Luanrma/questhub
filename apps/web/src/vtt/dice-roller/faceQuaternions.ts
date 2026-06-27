import { Euler, Quaternion } from 'three'
import type { DiceSides, SerializedQuaternion } from './types'

type DiceFaceQuaternionMap = Record<number, SerializedQuaternion>

const identityQuaternion: SerializedQuaternion = [0, 0, 0, 1]

function fromEuler(x: number, y: number, z: number): SerializedQuaternion {
  const quaternion = new Quaternion().setFromEuler(new Euler(x, y, z, 'XYZ'))
  return [quaternion.x, quaternion.y, quaternion.z, quaternion.w]
}

function createUncalibratedFaceMap(sides: DiceSides): DiceFaceQuaternionMap {
  return Object.fromEntries(Array.from({ length: sides }, (_, index) => [index + 1, identityQuaternion]))
}

export const diceFaceQuaternions: Record<DiceSides, DiceFaceQuaternionMap> = {
  4: createUncalibratedFaceMap(4),
  6: {
    1: fromEuler(-Math.PI / 2, 0, 0),
    2: fromEuler(0, 0, 0),
    3: fromEuler(0, 0, -Math.PI / 2),
    4: fromEuler(0, 0, Math.PI / 2),
    5: fromEuler(Math.PI, 0, 0),
    6: fromEuler(Math.PI / 2, 0, 0),
  },
  8: createUncalibratedFaceMap(8),
  10: createUncalibratedFaceMap(10),
  12: createUncalibratedFaceMap(12),
  20: createUncalibratedFaceMap(20),
}

export function getDiceFaceQuaternion(sides: DiceSides, value: number) {
  const serialized = diceFaceQuaternions[sides][value] ?? identityQuaternion
  return new Quaternion().fromArray(serialized)
}
