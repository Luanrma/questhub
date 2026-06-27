import type { DiceSides } from './types'
import { D4Model, D6Model, D8Model, D10Model, D12Model, D20Model } from './models'

export function DiceModel({ sides }: { sides: DiceSides }) {
  if (sides === 4) return <D4Model scale={0.8} />
  if (sides === 6) return <D6Model scale={0.8} />
  if (sides === 8) return <D8Model scale={0.8} />
  if (sides === 10) return <D10Model scale={0.8} />
  if (sides === 12) return <D12Model scale={0.8} />
  return <D20Model scale={0.8} />
}
