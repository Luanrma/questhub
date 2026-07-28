import { isDeepStrictEqual } from 'node:util'
import type { GameSystemInventoryPolicy } from '../../inventory'
import type { Pathfinder2eItemData } from '../content_catalog/items/types'

const itemTypeLabels: Record<Pathfinder2eItemData['itemType'], string> = {
  weapon: 'Arma',
  armor: 'Armadura',
  shield: 'Escudo',
  equipment: 'Equipamento',
  consumable: 'Consumível',
  ammunition: 'Munição',
  treasure: 'Tesouro',
  container: 'Recipiente',
  kit: 'Kit',
}

function isPathfinder2eItemData(value: unknown): value is Pathfinder2eItemData {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const data = value as Partial<Pathfinder2eItemData>
  return typeof data.name === 'string' && typeof data.itemType === 'string'
}

function formatPrice(price: Pathfinder2eItemData['price']) {
  const parts = [
    price.gp ? `${price.gp} po` : null,
    price.sp ? `${price.sp} pp` : null,
    price.cp ? `${price.cp} pc` : null,
  ].filter((value): value is string => Boolean(value))

  return parts.length ? parts.join(' ') : '—'
}

export const pathfinder2eInventoryPolicy: GameSystemInventoryPolicy = {
  canStack(existingData, incomingData) {
    return isDeepStrictEqual(existingData, incomingData)
  },

  present(data) {
    if (!isPathfinder2eItemData(data)) return null

    const details = [
      { label: 'Nível', value: String(data.level) },
      { label: 'Volume', value: String(data.bulk) },
      { label: 'Preço', value: formatPrice(data.price) },
      data.usage ? { label: 'Uso', value: data.usage } : null,
      data.category ? { label: 'Categoria', value: data.category } : null,
      data.group ? { label: 'Grupo', value: data.group } : null,
    ].filter((value): value is { label: string; value: string } => Boolean(value))

    return {
      name: data.name,
      subtitle: `${itemTypeLabels[data.itemType]} · Nível ${data.level}`,
      description: data.description,
      traits: data.traits,
      details,
    }
  },
}
