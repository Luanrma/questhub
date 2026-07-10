import { getItemIconUrl } from '../domain/itemIcon'
import type { InventoryItemView } from '../domain/inventoryTypes'

export function InventoryItemSlot({
  item,
  onContextMenu,
}: {
  item: InventoryItemView
  onContextMenu: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
  const isEquipped = item.state === 'EQUIPPED'
  const label = item.customName || item.itemDefinition.name

  return (
    <button
      type="button"
      title={label}
      onContextMenu={(event) => {
        event.preventDefault()
        onContextMenu(event)
      }}
      className={[
        'relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border p-1.5 transition',
        isEquipped
          ? 'border-emerald-400/40 bg-emerald-500/10 hover:bg-emerald-500/20'
          : 'border-white/10 bg-black/20 hover:bg-white/10',
      ].join(' ')}
    >
      <img src={getItemIconUrl(item.itemDefinition)} alt="" draggable={false} className="h-full w-full object-contain" />

      {item.quantity > 1 ? (
        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[10px] font-semibold text-amber-200">
          x{item.quantity}
        </span>
      ) : null}
    </button>
  )
}
