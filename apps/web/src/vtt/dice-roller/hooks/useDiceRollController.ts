import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { Group, Material, Mesh, Quaternion, Vector3 } from 'three'
import { getDiceFaceQuaternion } from '../faceQuaternions'
import {
  createDiceKinematicBody,
  createDiceKinematicSeed,
  stepDiceKinematics,
  type DiceKinematicBody,
  type DiceKinematicStep,
} from '../kinematics'
import type { ActiveDiceRoll, DiceRollVisualState } from '../types'

const settledDurationSeconds = 5
const fadingDurationSeconds = 1

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
  const kinematicBodyRef = useRef<DiceKinematicBody | null>(null)
  const kinematicStepRef = useRef<DiceKinematicStep | null>(null)
  const targetQuaternion = useMemo(() => getDiceFaceQuaternion(roll.sides, roll.value), [roll.sides, roll.value])
  const kinematicSeed = useMemo(() => createDiceKinematicSeed(roll), [roll])

  useEffect(() => {
    const group = groupRef.current
    if (!group) return

    const kinematicBody = createDiceKinematicBody(kinematicSeed, targetQuaternion)
    kinematicBodyRef.current = kinematicBody
    kinematicStepRef.current = {
      body: kinematicBody,
      targetQuaternion,
      deltaSeconds: 0,
      frameDirection: new Vector3(),
      frameAxis: new Vector3(),
      frameRotation: new Quaternion(),
      velocityXDelta: 0,
      velocityZDelta: 0,
    }

    group.visible = true
    group.quaternion.copy(kinematicBody.rotation)
    group.position.copy(kinematicBody.position)
    materialsRef.current = cloneMaterialsForIndependentOpacity(group)

    return () => {
      materialsRef.current = []
      kinematicBodyRef.current = null
      kinematicStepRef.current = null
    }
  }, [kinematicSeed, targetQuaternion])

  function setOpacity(opacity: number) {
    for (const material of materialsRef.current) {
      // Three.js material opacity is intentionally mutated inside the render loop.
      // eslint-disable-next-line react-hooks/immutability
      material.opacity = opacity
    }
  }

  useFrame(({ clock }, delta) => {
    const group = groupRef.current
    if (!group) return
    if (startedAtRef.current === null) {
      startedAtRef.current = clock.elapsedTime
      stateStartedAtRef.current = clock.elapsedTime
    }

    const stateStartedAt = stateStartedAtRef.current ?? clock.elapsedTime
    const stateElapsed = clock.elapsedTime - stateStartedAt

    if (stateRef.current === 'rolling') {
      const kinematicStep = kinematicStepRef.current
      if (!kinematicStep) return

      kinematicStep.deltaSeconds = Math.min(delta, 1 / 30)
      stepDiceKinematics(kinematicStep)

      group.visible = true
      group.position.copy(kinematicStep.body.position)
      group.quaternion.copy(kinematicStep.body.rotation)
      setOpacity(1)

      if (!kinematicStep.body.settled) return
      stateRef.current = 'settled'
      stateStartedAtRef.current = clock.elapsedTime
      group.quaternion.copy(targetQuaternion)
      return
    }

    if (stateRef.current === 'settled') {
      const kinematicBody = kinematicBodyRef.current
      group.visible = true
      group.quaternion.copy(targetQuaternion)
      if (kinematicBody) group.position.copy(kinematicBody.position)
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
