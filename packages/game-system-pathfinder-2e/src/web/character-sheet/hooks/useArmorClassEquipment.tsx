import { useCallback, useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

export type Pathfinder2eArmorClassEquipmentFacts = {
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}

type InventoryChangedPayload = {
  campaignId: string
  characterId: string
}

/**
 * Busca os fatos de equipamento (armadura/escudo) usados pelo calculo de
 * Armor Class e reage a mudancas de inventario em tempo real. Ver
 * .ai/game_systems/pathfinder_2e/armor_class/specs.md secoes 6.1 e 7.
 *
 * Fetch/socket ficam aqui (no pacote) em vez de `apps/web` porque o socket ja
 * chega como prop desde `CharacterSheetModal`; nao ha necessidade de importar
 * infraestrutura de `apps/web/src/inventory` para isso.
 */
export function useArmorClassEquipment(
  campaignId: string | null | undefined,
  characterId: string | null | undefined,
  socket: Socket | null | undefined,
) {
  const [equipment, setEquipment] = useState<Pathfinder2eArmorClassEquipmentFacts | null>(null)

  const reload = useCallback(async () => {
    if (!campaignId || !characterId) {
      setEquipment(null)
      return
    }

    try {
      const response = await fetch(
        `${API_URL}/api/campaigns/${campaignId}/characters/${characterId}/armor-class-equipment`,
        { credentials: 'include' },
      )
      if (!response.ok) return
      const data = (await response.json()) as Pathfinder2eArmorClassEquipmentFacts
      setEquipment({ armor: data.armor, shield: data.shield })
    } catch {
      // mantem o ultimo valor conhecido; a proxima mudanca de inventario tenta novamente
    }
  }, [campaignId, characterId])

  useEffect(() => {
    void reload()
  }, [reload])

  useEffect(() => {
    if (!socket || !campaignId || !characterId) return

    function handleInventoryChanged(payload: InventoryChangedPayload) {
      if (payload.campaignId === campaignId && payload.characterId === characterId) void reload()
    }

    socket.on('inventory:changed', handleInventoryChanged)
    return () => {
      socket.off('inventory:changed', handleInventoryChanged)
    }
  }, [socket, campaignId, characterId, reload])

  return { equipment, reload }
}

export async function toggleArmorClassShieldRaised(campaignId: string, equippedItemId: string, raised: boolean) {
  const response = await fetch(`${API_URL}/api/campaigns/${campaignId}/equipped-items/${equippedItemId}/shield`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ raised }),
  })
  return response.ok
}
