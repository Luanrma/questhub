import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Euler, Group, Material, Mesh, Quaternion, Vector3 } from 'three'
import { getDiceFaceQuaternion } from '../faceQuaternions'
import type { ActiveDiceRoll, DiceRollVisualState } from '../types'

const rollingDurationSeconds = 1.45
const settledDurationSeconds = 5
const fadingDurationSeconds = 1

const slotPositions = [
  new Vector3(0, 0.82, 0),
  new Vector3(-1.65, 0.82, -0.3),
  new Vector3(1.65, 0.82, -0.3),
  new Vector3(-0.85, 0.82, 1.15),
  new Vector3(0.85, 0.82, 1.15),
  new Vector3(0, 0.82, -1.45),
]

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3
}

function seededValue(seed: number, salt: number) {
  const x = Math.sin(seed * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

function createStartQuaternion(roll: ActiveDiceRoll) {
  const x = (2 + seededValue(roll.id, 1) * 2) * Math.PI
  const y = (2 + seededValue(roll.id, 2) * 2) * Math.PI
  const z = (1 + seededValue(roll.id, 3) * 2) * Math.PI
  return new Quaternion().setFromEuler(new Euler(x, y, z, 'XYZ'))
}

function cloneMaterialsForIndependentOpacity(group: Group) {
  const materials: Material[] = []

  group.traverse((object) => {
    const mesh = object as Mesh
    if (!mesh.isMesh) return

    const originalMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    const clonedMaterials = originalMaterials.map((material) => {
      const clone = material.clone()
      clone.transparent = true
      clone.opacity = 1
      materials.push(clone)
      return clone
    })

    mesh.material = Array.isArray(mesh.material) ? clonedMaterials : clonedMaterials[0]
  })

  return materials
}

export function useDiceRollController({ roll, onIdle }: { roll: ActiveDiceRoll; onIdle: (visualId: string) => void }) {
  const groupRef = useRef<Group>(null)
  const stateRef = useRef<DiceRollVisualState>('rolling')
  const startedAtRef = useRef<number | null>(null)
  const stateStartedAtRef = useRef<number | null>(null)
  const notifiedIdleRef = useRef(false)
  const materialsRef = useRef<Material[]>([])
  const startQuaternion = useMemo(() => createStartQuaternion(roll), [roll])
  const targetQuaternion = useMemo(() => getDiceFaceQuaternion(roll.sides, roll.value), [roll.sides, roll.value])
  const basePosition = slotPositions[roll.slot % slotPositions.length] ?? slotPositions[0]

  useEffect(() => {
    const group = groupRef.current
    if (!group) return

    group.visible = true
    group.quaternion.copy(startQuaternion)
    group.position.copy(basePosition)
    materialsRef.current = cloneMaterialsForIndependentOpacity(group)

    return () => {
      materialsRef.current = []
    }
  }, [basePosition, startQuaternion])

  function setOpacity(opacity: number) {
    for (const material of materialsRef.current) {
      // Three.js material opacity is intentionally mutated inside the render loop.
      // eslint-disable-next-line react-hooks/immutability
      material.opacity = opacity
    }
  }

  useFrame(({ clock }) => {
    const group = groupRef.current
    if (!group) return
    if (startedAtRef.current === null) {
      startedAtRef.current = clock.elapsedTime
      stateStartedAtRef.current = clock.elapsedTime
    }

    const stateStartedAt = stateStartedAtRef.current ?? clock.elapsedTime
    const stateElapsed = clock.elapsedTime - stateStartedAt

    if (stateRef.current === 'rolling') {
      const progress = Math.min(stateElapsed / rollingDurationSeconds, 1)
      const eased = easeOutCubic(progress)
      const hop = Math.sin(progress * Math.PI) * 0.65

      group.visible = true
      group.position.set(basePosition.x, basePosition.y + hop, basePosition.z)
      group.quaternion.copy(startQuaternion).slerp(targetQuaternion, eased)
      setOpacity(1)

      if (progress < 1) return
      stateRef.current = 'settled'
      stateStartedAtRef.current = clock.elapsedTime
      group.quaternion.copy(targetQuaternion)
      group.position.copy(basePosition)
      return
    }

    if (stateRef.current === 'settled') {
      group.visible = true
      group.quaternion.copy(targetQuaternion)
      group.position.copy(basePosition)
      setOpacity(1)

      if (stateElapsed < settledDurationSeconds) return
      stateRef.current = 'fading'
      stateStartedAtRef.current = clock.elapsedTime
      return
    }

    if (stateRef.current === 'fading') {
      const progress = Math.min(stateElapsed / fadingDurationSeconds, 1)
      group.visible = true
      setOpacity(1 - progress)

      if (progress < 1) return
      stateRef.current = 'idle'
      group.visible = false
      setOpacity(1)
    }

    if (stateRef.current === 'idle' && !notifiedIdleRef.current) {
      notifiedIdleRef.current = true
      onIdle(roll.visualId)
    }
  })

  return { groupRef, stateRef }
}
