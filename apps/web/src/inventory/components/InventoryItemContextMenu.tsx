import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Flame, PackageMinus, ScrollText, Shirt, Undo2 } from 'lucide-react'
import { getEquipmentOptionsForItem } from '../domain/inventoryViewModel'
import type { EquipmentOptionView, InventoryItemView } from '../domain/inventoryTypes'

export function InventoryItemContextMenu({
  item,
  x,
  y,
  equipmentOptions,
  onOpenSheet,
  onEquip,
  onUnequip,
  onConsume,
  onDrop,
  onClose,
}: {
  item: InventoryItemView
  x: number
  y: number
  equipmentOptions: EquipmentOptionView[]
  onOpenSheet: () => void
  onEquip: (equipmentOptionKey: string) => void
  onUnequip: () => void
  onConsume: () => void
  onDrop: () => void
  onClose: () => void
}) {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [equipSubmenuOpen, setEquipSubmenuOpen] = useState(false)

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (menuRef.current?.contains(event.target as Node)) return
      onClose()
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  const isEquipped = item.state === 'EQUIPPED'
  const compatibleOptions = getEquipmentOptionsForItem(item, equipmentOptions)
  const isConsumable = item.itemDefinition.itemType === 'consumable'

  function equip(equipmentOptionKey: string) {
    onEquip(equipmentOptionKey)
    onClose()
  }

  return (
    <div
      ref={menuRef}
      className="fixed z-[70] w-48 rounded-lg border border-white/10 bg-[#111217]/95 p-1.5 text-white shadow-2xl backdrop-blur"
      style={{ left: x, top: y }}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="truncate border-b border-white/10 px-2 pb-1.5 text-xs font-semibold">
        {item.customName || item.itemDefinition.name}
      </div>

      {item.itemDefinition.source === 'SYSTEM_CATALOG' ? (
        <button
          type="button"
          className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
          onClick={() => {
            onOpenSheet()
            onClose()
          }}
        >
          <ScrollText className="h-3.5 w-3.5" />
          Ficha
        </button>
      ) : null}

      {isEquipped ? (
        <button
          type="button"
          className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
          onClick={() => {
            onUnequip()
            onClose()
          }}
        >
          <Undo2 className="h-3.5 w-3.5" />
          Desequipar
        </button>
      ) : (
        <>
          {compatibleOptions.length === 1 ? (
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
              onClick={() => equip(compatibleOptions[0].key)}
            >
              <Shirt className="h-3.5 w-3.5" />
              Equipar
            </button>
          ) : null}

          {compatibleOptions.length > 1 ? (
            <div className="relative mt-1">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setEquipSubmenuOpen((value) => !value)}
              >
                <span className="flex items-center gap-2">
                  <Shirt className="h-3.5 w-3.5" />
                  Equipar
                </span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
              {equipSubmenuOpen ? (
                <div className="absolute left-full top-0 ml-1 w-44 rounded-lg border border-white/10 bg-[#111217]/95 p-1.5 shadow-2xl backdrop-blur">
                  {compatibleOptions.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      className="flex w-full items-center rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
                      onClick={() => equip(option.key)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {isConsumable ? (
            <button
              type="button"
              className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-zinc-200 transition hover:bg-white/10 hover:text-white"
              onClick={() => {
                onConsume()
                onClose()
              }}
            >
              <Flame className="h-3.5 w-3.5" />
              Consumir
            </button>
          ) : null}

          <button
            type="button"
            className="mt-1 flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-red-200 transition hover:bg-red-500/10 hover:text-red-100"
            onClick={() => {
              onDrop()
              onClose()
            }}
          >
            <PackageMinus className="h-3.5 w-3.5" />
            Dropar
          </button>
        </>
      )}
    </div>
  )
}
