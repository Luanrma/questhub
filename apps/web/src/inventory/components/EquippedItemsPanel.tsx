import { Shield } from 'lucide-react'
import { groupEquippedItemsBySlot } from '../domain/inventoryViewModel'
import type { InventoryItemView } from '../domain/inventoryTypes'

export function EquippedItemsPanel({
  equippedItemViews,
  canManage,
  onUnequip,
}: {
  equippedItemViews: InventoryItemView[]
  canManage: boolean
  onUnequip: (equippedItemId: string) => void
}) {
  const equipped = equippedItemViews.flatMap((item) => (item.equipped ? [{ item, equipped: item.equipped }] : []))
  const grouped = groupEquippedItemsBySlot(equipped.map(({ equipped: e }) => e))

  return (
    <section className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <Shield className="h-4 w-4 text-emerald-300" />
        <div>
          <div className="text-sm font-semibold text-white">Equipados</div>
          <div className="text-[11px] uppercase text-zinc-500">Slots ocupados</div>
        </div>
      </div>

      {grouped.size === 0 ? (
        <div className="text-xs text-zinc-500">Nenhum item equipado.</div>
      ) : (
        Array.from(grouped.entries()).map(([slot, items]) => (
          <div key={slot} className="rounded-md border border-white/10 bg-black/20 p-2 text-xs">
            <div className="mb-1 text-[11px] uppercase text-zinc-500">{slot}</div>
            {items.map((equippedView) => {
              const matched = equipped.find(({ equipped: e }) => e.id === equippedView.id)
              return (
                <div key={equippedView.id} className="flex items-center justify-between gap-2 py-0.5">
                  <span className="text-white">{matched?.item.customName || matched?.item.itemDefinition.name}</span>
                  {canManage ? (
                    <button
                      type="button"
                      onClick={() => onUnequip(equippedView.id)}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300 hover:bg-white/10"
                    >
                      Desequipar
                    </button>
                  ) : null}
                </div>
              )
            })}
          </div>
        ))
      )}
    </section>
  )
}
