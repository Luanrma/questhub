import { useState } from 'react'
import type { CreateCampaignItemDefinitionPayload } from '../infrastructure/inventoryApi'

export function CampaignItemDefinitionForm({ onSubmit }: { onSubmit: (payload: CreateCampaignItemDefinitionPayload) => void }) {
  const [name, setName] = useState('')
  const [itemType, setItemType] = useState('')
  const [bulk, setBulk] = useState('')
  const [priceGp, setPriceGp] = useState('')
  const [isStackable, setIsStackable] = useState(false)

  return (
    <form
      className="grid gap-2 text-xs"
      onSubmit={(event) => {
        event.preventDefault()
        if (!name.trim() || !itemType.trim()) return
        const priceMinorUnit = priceGp ? Math.round(Number(priceGp) * 100) : undefined
        onSubmit({
          name: name.trim(),
          itemType: itemType.trim(),
          bulk: bulk.trim() || undefined,
          priceMinorUnit,
          isStackable,
        })
        setName('')
        setItemType('')
        setBulk('')
        setPriceGp('')
        setIsStackable(false)
      }}
    >
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Nome do item"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="min-w-40 flex-1 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
        <input
          type="text"
          placeholder="Tipo (ex: weapon)"
          value={itemType}
          onChange={(event) => setItemType(event.target.value)}
          className="w-32 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Bulk"
          value={bulk}
          onChange={(event) => setBulk(event.target.value)}
          className="w-20 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Preco em gp"
          value={priceGp}
          onChange={(event) => setPriceGp(event.target.value)}
          className="w-28 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-white"
        />
        <label className="flex items-center gap-1 text-zinc-400">
          <input type="checkbox" checked={isStackable} onChange={(event) => setIsStackable(event.target.checked)} />
          Empilhavel
        </label>
        <button type="submit" className="rounded-md border border-purple-400/30 bg-purple-500/10 px-2 py-1 text-purple-200 hover:bg-purple-500/20">
          Criar item
        </button>
      </div>
    </form>
  )
}
