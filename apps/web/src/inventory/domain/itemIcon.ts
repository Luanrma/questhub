import type { InventoryItemDefinitionView } from './inventoryTypes'

const ICONS_BASE_URL = '/assets/icons'
const DEFAULT_ICON = 'Misc/Chest.png'

type KeywordIcon = readonly [keyword: string, icon: string]

const WEAPON_KEYWORDS: KeywordIcon[] = [
  ['bow', 'Weapon & Tool/Bow.png'],
  ['arrow', 'Weapon & Tool/Arrow.png'],
  ['adze', 'Weapon & Tool/Axe.png'],
  ['axe', 'Weapon & Tool/Axe.png'],
  ['pickaxe', 'Weapon & Tool/Pickaxe.png'],
  ['pick', 'Weapon & Tool/Pickaxe.png'],
  ['shovel', 'Weapon & Tool/Shovel.png'],
  ['spade', 'Weapon & Tool/Shovel.png'],
  ['hammer', 'Weapon & Tool/Hammer.png'],
  ['maul', 'Weapon & Tool/Hammer.png'],
  ['mace', 'Weapon & Tool/Hammer.png'],
  ['wand', 'Weapon & Tool/Magic Wand.png'],
  ['staff', 'Weapon & Tool/Wooden Staff.png'],
  ['torch', 'Weapon & Tool/Torch.png'],
  ['knife', 'Weapon & Tool/Knife.png'],
  ['dagger', 'Weapon & Tool/Knife.png'],
  ['sword', 'Weapon & Tool/Iron Sword.png'],
  ['blade', 'Weapon & Tool/Iron Sword.png'],
  ['rapier', 'Weapon & Tool/Iron Sword.png'],
  ['scimitar', 'Weapon & Tool/Iron Sword.png'],
]

const SHIELD_KEYWORDS: KeywordIcon[] = [
  ['buckler', 'Weapon & Tool/Iron Shield.png'],
  ['wood', 'Weapon & Tool/Wooden Shield.png'],
]

const ARMOR_KEYWORDS: KeywordIcon[] = [
  ['helm', 'Equipment/Iron Helmet.png'],
  ['hat', 'Equipment/Wizard Hat.png'],
  ['boot', 'Equipment/Leather Boot.png'],
  ['belt', 'Equipment/Belt.png'],
  ['wood', 'Equipment/Wooden Armor.png'],
]

const CONSUMABLE_KEYWORDS: KeywordIcon[] = [
  ['wine', 'Food/Wine.png'],
  ['beer', 'Food/Beer.png'],
  ['ale', 'Food/Beer.png'],
  ['alcohol', 'Food/Beer.png'],
  ['liquor', 'Food/Beer.png'],
  ['bread', 'Food/Bread.png'],
  ['cheese', 'Food/Cheese.png'],
  ['fish', 'Food/Fish Steak.png'],
  ['meat', 'Food/Meat.png'],
  ['ham', 'Food/Ham.png'],
  ['apple', 'Food/Apple.png'],
  ['mushroom', 'Food/Mushroom.png'],
  ['water', 'Potion/Water Bottle.png'],
  ['blue', 'Potion/Blue Potion.png'],
  ['green', 'Potion/Green Potion.png'],
  ['red', 'Potion/Red Potion.png'],
]

const GEM_MATERIAL_KEYWORDS: KeywordIcon[] = [
  ['ruby', 'Ore & Gem/Ruby.png'],
  ['emerald', 'Ore & Gem/Emerald.png'],
  ['sapphire', 'Ore & Gem/Sapphire.png'],
  ['topaz', 'Ore & Gem/Topaz.png'],
  ['diamond', 'Ore & Gem/Diamond.png'],
  ['pearl', 'Ore & Gem/Pearl.png'],
  ['obsidian', 'Ore & Gem/Obsidian.png'],
  ['crystal', 'Ore & Gem/Crystal.png'],
  ['coal', 'Ore & Gem/Coal.png'],
  ['gold', 'Misc/Golden Coin.png'],
  ['silver', 'Misc/Silver Coin.png'],
  ['copper', 'Misc/Copper Coin.png'],
  ['ingot', 'Ore & Gem/Silver Ingot.png'],
  ['nugget', 'Ore & Gem/Gold Nugget.png'],
  ['ore', 'Ore & Gem/Coal.png'],
  ['gem', 'Ore & Gem/Crystal.png'],
  ['chunk', 'Ore & Gem/Crystal.png'],
]

const MONSTER_PART_KEYWORDS: KeywordIcon[] = [
  ['bone', 'Monster Part/Bone.png'],
  ['fang', 'Monster Part/Bone.png'],
  ['claw', 'Monster Part/Bone.png'],
  ['skull', 'Monster Part/Skull.png'],
  ['feather', 'Monster Part/Feather.png'],
  ['egg', 'Monster Part/Egg.png'],
  ['eye', 'Monster Part/Monster Eye.png'],
  ['slime', 'Monster Part/Slime Gel.png'],
  ['gel', 'Monster Part/Slime Gel.png'],
]

const RAW_MATERIAL_KEYWORDS: KeywordIcon[] = [
  ['hide', 'Material/Leather.png'],
  ['leather', 'Material/Leather.png'],
  ['wool', 'Material/Wool.png'],
  ['fabric', 'Material/Fabric.png'],
  ['cloth', 'Material/Fabric.png'],
  ['string', 'Material/String.png'],
  ['thread', 'Material/String.png'],
  ['rope', 'Material/Rope.png'],
  ['plank', 'Material/Wooden Plank.png'],
  ['log', 'Material/Wood Log.png'],
  ['paper', 'Material/Paper.png'],
]

const CONTAINER_MISC_KEYWORDS: KeywordIcon[] = [
  ['key', 'Misc/Iron Key.png'],
  ['book', 'Misc/Book.png'],
  ['tome', 'Misc/Book.png'],
  ['scroll', 'Misc/Scroll.png'],
  ['map', 'Misc/Map.png'],
  ['candle', 'Misc/Candle.png'],
  ['lantern', 'Misc/Lantern.png'],
  ['lamp', 'Misc/Lantern.png'],
  ['rune', 'Misc/Rune Stone.png'],
  ['crate', 'Misc/Crate.png'],
  ['chest', 'Misc/Chest.png'],
  ['bag', 'Equipment/Bag.png'],
  ['backpack', 'Equipment/Bag.png'],
  ['pouch', 'Equipment/Bag.png'],
  ['sack', 'Equipment/Bag.png'],
]

const EQUIPMENT_KEYWORDS: KeywordIcon[] = [
  ...CONTAINER_MISC_KEYWORDS,
  ...MONSTER_PART_KEYWORDS,
  ...RAW_MATERIAL_KEYWORDS,
]

const TREASURE_KEYWORDS: KeywordIcon[] = [...GEM_MATERIAL_KEYWORDS, ...MONSTER_PART_KEYWORDS, ...RAW_MATERIAL_KEYWORDS]

const ITEM_TYPE_ICON_TABLE: Record<string, { keywords: KeywordIcon[]; fallback: string }> = {
  weapon: { keywords: WEAPON_KEYWORDS, fallback: 'Weapon & Tool/Iron Sword.png' },
  shield: { keywords: SHIELD_KEYWORDS, fallback: 'Weapon & Tool/Iron Shield.png' },
  armor: { keywords: ARMOR_KEYWORDS, fallback: 'Equipment/Leather Armor.png' },
  consumable: { keywords: CONSUMABLE_KEYWORDS, fallback: 'Potion/Red Potion.png' },
  treasure: { keywords: TREASURE_KEYWORDS, fallback: 'Misc/Golden Coin.png' },
  backpack: { keywords: CONTAINER_MISC_KEYWORDS, fallback: 'Equipment/Bag.png' },
  kit: { keywords: CONTAINER_MISC_KEYWORDS, fallback: 'Misc/Crate.png' },
  equipment: { keywords: EQUIPMENT_KEYWORDS, fallback: 'Misc/Gear.png' },
}

const ALL_KEYWORDS: KeywordIcon[] = Object.values(ITEM_TYPE_ICON_TABLE).flatMap((entry) => entry.keywords)

function toIconUrl(relativeIconPath: string): string {
  return `${ICONS_BASE_URL}/${relativeIconPath.split('/').map(encodeURIComponent).join('/')}`
}

/**
 * Best-effort visual icon for an item based on its generic display fields (itemType/name/traits),
 * matched against the static art pack in apps/web/public/assets/icons. Not an exact catalog
 * mapping — PF2e's item catalog has thousands of entries with no matching bespoke art, so this
 * picks the closest generic icon by keyword instead.
 */
export function getItemIconUrl(itemDefinition: InventoryItemDefinitionView): string {
  const haystack = `${itemDefinition.name} ${itemDefinition.traits.join(' ')}`.toLowerCase()
  const typeEntry = ITEM_TYPE_ICON_TABLE[itemDefinition.itemType]

  if (typeEntry) {
    const match = typeEntry.keywords.find(([keyword]) => haystack.includes(keyword))
    return toIconUrl(match?.[1] ?? typeEntry.fallback)
  }

  const match = ALL_KEYWORDS.find(([keyword]) => haystack.includes(keyword))
  return toIconUrl(match?.[1] ?? DEFAULT_ICON)
}
