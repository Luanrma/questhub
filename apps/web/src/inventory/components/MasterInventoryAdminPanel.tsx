import { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { CampaignItemDefinitionForm } from './CampaignItemDefinitionForm'
import type { CreateCampaignItemDefinitionPayload } from '../infrastructure/inventoryApi'

export function MasterInventoryAdminPanel({
  onCreateItemDefinition,
  onGrantItem,
}: {
  onCreateItemDefinition: (payload: CreateCampaignItemDefinitionPayload) => void
  onGrantItem: (itemDefinitionId: string, quantity: number) => void
}) {
  const [itemDefinitionId, setItemDefinitionId] = useState('')
  const [quantity, setQuantity] = useState('1')

  return (
    <section className="grid gap-3 rounded-lg border border-purple-400/20 bg-purple-500/[0.04] p-3">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Wand2 className="h-4 w-4 text-purple-300" />
        <div>
          <div className="text-sm font-semibold text-white">Administracao (Mestre)</div>
          <div className="text-[11px] uppercase text-zinc-500">Criar e conceder itens</div>
        </div>
      </div>

      <CampaignItemDefinitionForm onSubmit={onCreateItemDefinition} />

      <form
        className="flex flex-wrap items-center gap-2 text-xs"
        onSubmit={(event) => {
          event.preventDefault()
          const parsedQuantity = Number(quantity)
          if (!itemDefinitionId.trim() || !Number.isInteger(parsedQuantity) || parsedQuantity <= 0) return
          onGrantItem(itemDefinitionId.trim(), parsedQuantity)
          setItemDefinitionId('')
          setQuantity('1')
        }}
      >
        <input
          type="text"
          placeholder="ID da definicao de item"
          value={itemDefinitionId}
          onChange={(event) => setItemDefinitionId(event.target.value)}
          className="min-w-48 flex-1 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          className="w-16 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
        <button type="submit" className="rounded-md border border-purple-400/30 bg-purple-500/10 px-2 py-1 text-purple-200 hover:bg-purple-500/20">
          Conceder
        </button>
      </form>
    </section>
  )
}
