import type { InventoryItemView } from '../domain/inventoryTypes'
import { InventoryItemSlot } from './InventoryItemSlot'

export function InventoryGrid({
  items,
  emptyLabel,
  onItemContextMenu,
  slotCount,
}: {
  items: InventoryItemView[]
  emptyLabel: string
  onItemContextMenu: (item: InventoryItemView, event: React.MouseEvent<HTMLButtonElement>) => void
  /** When set, renders a fixed-column grid padded with empty placeholder slots up to this count (columns = slotCount / rows, 10 per row). Items beyond slotCount still render as extra rows — no hard capacity limit. */
  slotCount?: number
}) {
  if (!slotCount && items.length === 0) {
    return <div className="text-xs text-zinc-500">{emptyLabel}</div>
  }

  const emptySlotCount = slotCount ? Math.max(0, slotCount - items.length) : 0

  return (
    <div className={slotCount ? 'grid grid-cols-10 gap-2' : 'grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2'}>
      {items.map((item) => (
        <InventoryItemSlot key={item.id} item={item} onContextMenu={(event) => onItemContextMenu(item, event)} />
      ))}
      {Array.from({ length: emptySlotCount }, (_, index) => (
        <div key={`empty-slot-${index}`} className="aspect-square rounded-md border border-dashed border-white/10 bg-black/10" />
      ))}
    </div>
  )
}
