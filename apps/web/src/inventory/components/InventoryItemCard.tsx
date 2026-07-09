import { useState } from 'react'
import { PATHFINDER_2E_EXCLUSIVE_SLOTS, PATHFINDER_2E_NON_EXCLUSIVE_SLOTS } from '../../game-systems/pathfinder-2e/inventory'
import type { InventoryItemView } from '../domain/inventoryTypes'

const ALL_SLOTS = [...PATHFINDER_2E_EXCLUSIVE_SLOTS, ...PATHFINDER_2E_NON_EXCLUSIVE_SLOTS]

export function InventoryItemCard({
  item,
  canManage,
  onEquip,
  onUnequip,
  onTransfer,
}: {
  item: InventoryItemView
  canManage: boolean
  onEquip: (slot: string) => void
  onUnequip?: () => void
  onTransfer: (toCharacterId: string, quantity: number) => void
}) {
  const [slot, setSlot] = useState<string>(ALL_SLOTS[0])
  const [transferOpen, setTransferOpen] = useState(false)
  const [transferTarget, setTransferTarget] = useState('')
  const [transferQuantity, setTransferQuantity] = useState('1')

  const isEquipped = item.state === 'EQUIPPED'

  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-2 text-xs">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="font-semibold text-white">{item.customName || item.itemDefinition.name}</div>
          <div className="text-[11px] text-zinc-500">
            {item.itemDefinition.itemType}
            {item.itemDefinition.bulk ? ` · bulk ${item.itemDefinition.bulk}` : ''}
            {item.quantity > 1 ? ` · x${item.quantity}` : ''}
          </div>
        </div>
        {isEquipped ? <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">equipado</span> : null}
      </div>

      {canManage ? (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {isEquipped ? (
            <button type="button" onClick={() => onUnequip?.()} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-zinc-200 hover:bg-white/10">
              Desequipar
            </button>
          ) : (
            <>
              <select value={slot} onChange={(event) => setSlot(event.target.value)} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-zinc-200">
                {ALL_SLOTS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button type="button" onClick={() => onEquip(slot)} className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-emerald-200 hover:bg-emerald-500/20">
                Equipar
              </button>
              <button type="button" onClick={() => setTransferOpen((value) => !value)} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-zinc-200 hover:bg-white/10">
                Transferir
              </button>
            </>
          )}
        </div>
      ) : null}

      {transferOpen ? (
        <form
          className="mt-2 flex flex-wrap items-center gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            const quantity = Number(transferQuantity)
            if (!transferTarget.trim() || !Number.isInteger(quantity) || quantity <= 0) return
            onTransfer(transferTarget.trim(), quantity)
            setTransferOpen(false)
            setTransferTarget('')
          }}
        >
          <input
            type="text"
            placeholder="ID do personagem destino"
            value={transferTarget}
            onChange={(event) => setTransferTarget(event.target.value)}
            className="w-40 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-zinc-200"
          />
          <input
            type="number"
            min={1}
            max={item.quantity}
            value={transferQuantity}
            onChange={(event) => setTransferQuantity(event.target.value)}
            className="w-16 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-zinc-200"
          />
          <button type="submit" className="rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2 py-1 text-indigo-200 hover:bg-indigo-500/20">
            Confirmar
          </button>
        </form>
      ) : null}
    </div>
  )
}
