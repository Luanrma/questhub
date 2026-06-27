import { memo, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import type { Socket } from 'socket.io-client'
import { DiceRollVisual } from './DiceRollVisual'
import type { ActiveDiceRoll, DiceRolledPayload, DiceRollAnimation } from './types'

function createActiveRoll(roll: DiceRollAnimation, slot: number): ActiveDiceRoll {
  return {
    ...roll,
    visualId: `${roll.id}:${roll.characterId}:${roll.rolledAt}:${slot}`,
    slot,
  }
}

function DiceRollFallback() {
  return (
    <mesh position={[0, 1.5, 0]}>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial color="#ef4444" />
    </mesh>
  )
}

export const DiceRollOverlay = memo(function DiceRollOverlay({
  campaignId,
  socket,
}: {
  campaignId: string | undefined
  socket: Socket | null
}) {
  const [activeRolls, setActiveRolls] = useState<ActiveDiceRoll[]>([])
  const nextSlotRef = useRef(0)

  useEffect(() => {
    if (!socket || !campaignId) return

    function onDiceRolled(payload: DiceRolledPayload) {
      if (payload.campaignId !== campaignId) return

      const incomingRolls = payload.rolls ?? (payload.roll ? [payload.roll] : [])
      if (!incomingRolls.length) return

      setActiveRolls((current) => [
        ...current,
        ...incomingRolls.map((roll) => {
          const slot = nextSlotRef.current
          nextSlotRef.current += 1
          return createActiveRoll(roll, slot)
        }),
      ])
    }

    socket.on('vtt:dice:rolled', onDiceRolled)

    return () => {
      socket.off('vtt:dice:rolled', onDiceRolled)
    }
  }, [campaignId, socket])

  const removeRoll = useCallback((visualId: string) => {
    setActiveRolls((current) => current.filter((roll) => roll.visualId !== visualId))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      <Canvas camera={{ position: [0, 5, 8], fov: 50 }} dpr={[1, 1.5]} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} />

        <Suspense fallback={<DiceRollFallback />}>
          {activeRolls.map((roll) => (
            <DiceRollVisual key={roll.visualId} roll={roll} onIdle={removeRoll} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  )
})
