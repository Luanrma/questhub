import { Activity, Backpack, BookOpen, Sparkles, Swords } from 'lucide-react'
import type { GameSystemCatalogIcon } from './registry'

const ICONS: Record<GameSystemCatalogIcon, typeof BookOpen> = {
  activity: Activity,
  backpack: Backpack,
  'book-open': BookOpen,
  sparkles: Sparkles,
  swords: Swords,
}

type Props = {
  icon?: GameSystemCatalogIcon
  size?: number
}

export function CatalogDomainIcon({ icon, size = 18 }: Props) {
  const Icon = icon ? ICONS[icon] : BookOpen
  return <Icon size={size} />
}
