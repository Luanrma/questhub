import { DiceModel } from './DiceModel'
import { useDiceRollController } from './hooks/useDiceRollController'
import type { ActiveDiceRoll } from './types'

export function DiceRollVisual({ roll, onIdle }: { roll: ActiveDiceRoll; onIdle: (visualId: string) => void }) {
  const { groupRef } = useDiceRollController({ roll, onIdle })

  return (
    <group ref={groupRef}>
      <DiceModel sides={roll.sides} />
    </group>
  )
}
