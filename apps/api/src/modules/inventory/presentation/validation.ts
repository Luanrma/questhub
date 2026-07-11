import { z } from 'zod'

export const campaignParamsSchema = z.object({
  campaignId: z.string().trim().min(1, 'Campanha invalida'),
})

export const campaignCharacterParamsSchema = campaignParamsSchema.extend({
  characterId: z.string().trim().min(1, 'Personagem invalido'),
})

export const campaignFromCharacterParamsSchema = campaignParamsSchema.extend({
  fromCharacterId: z.string().trim().min(1, 'Personagem invalido'),
})

export const inventoryItemParamsSchema = campaignParamsSchema.extend({
  inventoryItemId: z.string().trim().min(1, 'Item invalido'),
})

export const equippedItemParamsSchema = campaignParamsSchema.extend({
  equippedItemId: z.string().trim().min(1, 'Equipamento invalido'),
})

export const createCampaignItemDefinitionSchema = z.object({
  name: z.string().trim().min(1, 'Nome e obrigatorio').max(120, 'Nome muito longo'),
  itemType: z.string().trim().min(1, 'Tipo e obrigatorio').max(60, 'Tipo muito longo'),
  rarity: z.string().trim().max(40).optional(),
  level: z.number().int().min(0).max(30).optional(),
  traits: z.array(z.string().trim().min(1)).max(20).optional(),
  bulk: z.string().trim().max(20).optional(),
  priceMinorUnit: z.number().int().min(0).optional(),
  equipSlot: z.string().trim().max(40).optional(),
  isStackable: z.boolean().optional(),
  systemData: z.unknown().optional(),
})

export const addInventoryItemSchema = z.object({
  itemDefinitionId: z.string().trim().min(1, 'Item invalido'),
  quantity: z.number().int().positive('Quantidade deve ser positiva').optional(),
  customName: z.string().trim().max(120).optional(),
  notes: z.string().trim().max(2000).optional(),
})

export const updateInventoryItemSchema = z.object({
  quantity: z.number().int().positive('Quantidade deve ser positiva').optional(),
  customName: z.string().trim().max(120).nullable().optional(),
  notes: z.string().trim().max(2000).nullable().optional(),
  state: z.enum(['STORED', 'CONSUMED', 'DESTROYED', 'DROPPED']).optional(),
})

export const equipInventoryItemSchema = z
  .object({
    equipmentOptionKey: z.string().trim().min(1, 'Opcao de equipamento e obrigatoria').optional(),
    slot: z.string().trim().min(1, 'Slot e obrigatorio').optional(),
  })
  .transform((value, ctx) => {
    const equipmentOptionKey = value.equipmentOptionKey ?? value.slot
    if (!equipmentOptionKey) {
      ctx.addIssue({
        code: 'custom',
        message: 'Opcao de equipamento e obrigatoria',
        path: ['equipmentOptionKey'],
      })
      return z.NEVER
    }
    return { equipmentOptionKey }
  })

export const toggleShieldRaisedSchema = z.object({
  raised: z.boolean(),
})

export const transferInventoryItemSchema = z.object({
  toCharacterId: z.string().trim().min(1, 'Personagem de destino invalido'),
  quantity: z.number().int().positive('Quantidade deve ser positiva'),
  note: z.string().trim().max(500).optional(),
})

export const adjustWalletSchema = z.object({
  deltaMinorUnit: z.number().int().refine((value) => value !== 0, 'Delta nao pode ser zero'),
  reason: z.enum(['LOOT', 'REWARD', 'PURCHASE', 'SALE', 'CORRECTION', 'ADJUSTMENT']),
  note: z.string().trim().max(500).optional(),
})

export const transferCurrencySchema = z.object({
  toCharacterId: z.string().trim().min(1, 'Personagem de destino invalido'),
  amountMinorUnit: z.number().int().positive('Valor deve ser positivo'),
  note: z.string().trim().max(500).optional(),
})

export const ledgerQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
})
