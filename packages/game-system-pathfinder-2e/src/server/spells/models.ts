export type Pathfinder2eSpellCategory = 'spell' | 'ritual'

export type Pathfinder2eSpellDamageKind = 'damage' | 'healing'

export type Pathfinder2eSpellDamageComponent = {
  formula: string
  type: string
  kinds: Pathfinder2eSpellDamageKind[]
  category: string | null
  applyMod: boolean
  materials: string[]
}

export type Pathfinder2eSpellArea = {
  type: string
  value: number
  details?: string
}

export type Pathfinder2eSpellDefense = {
  save: {
    statistic: 'fortitude' | 'reflex' | 'will'
    basic: boolean
  }
} | null

export type Pathfinder2eSpellDuration = {
  value: string
  sustained: boolean
}

export type Pathfinder2eSpellHeighteningInterval = {
  type: 'interval'
  interval: number
  damage?: Record<string, string>
  area?: number
}

export type Pathfinder2eSpellHeighteningFixed = {
  type: 'fixed'
  levels: Record<string, unknown>
}

export type Pathfinder2eSpellHeightening = Pathfinder2eSpellHeighteningInterval | Pathfinder2eSpellHeighteningFixed | null

export type Pathfinder2eSpellOverlay = {
  id: string
  name?: string
  overlayType: string
  sort: number
  system: Record<string, unknown>
}

export type Pathfinder2eRuleElementSource = Record<string, unknown> & { key: string }

export type Pathfinder2eRitualData = {
  primaryCheck?: string
  secondaryChecks?: string
  secondaryCasters?: number
}

export type Pathfinder2eSpellSource = {
  pack: string
  id: string
  title?: string
  license?: string
  remaster: boolean
}

export type Pathfinder2eRichTextNode =
  | { kind: 'TEXT'; value: string }
  | { kind: 'UUID'; uuid: string; label?: string }
  | { kind: 'CHECK'; statistic: string; dc?: string; basic?: boolean; against?: string }
  | { kind: 'DAMAGE'; formula: string; damageTypes: string[]; label?: string }
  | { kind: 'TEMPLATE'; shape: string; distance?: number; width?: number }
  | { kind: 'LOCALIZE'; key: string }
  | { kind: 'ACTION_GLYPH'; actions: string }

export type Pathfinder2eRichTextDocument = {
  raw: string
  nodes: Pathfinder2eRichTextNode[]
}

export type Pathfinder2eSpellDefinition = {
  id: string
  source: Pathfinder2eSpellSource
  name: string
  category: Pathfinder2eSpellCategory
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  time: string
  cost?: string
  requirements?: string
  range?: string
  target?: string
  area: Pathfinder2eSpellArea | null
  duration: Pathfinder2eSpellDuration
  defense: Pathfinder2eSpellDefense
  damage: Record<string, Pathfinder2eSpellDamageComponent>
  heightening: Pathfinder2eSpellHeightening
  overlays: Pathfinder2eSpellOverlay[]
  counteraction: boolean
  ritual: Pathfinder2eRitualData | null
  rules: Pathfinder2eRuleElementSource[]
  description: Pathfinder2eRichTextDocument
  dependencyIds: string[]
}

export type Pathfinder2eSpellEffectDocumentType = 'effect' | 'condition'

export type Pathfinder2eSpellEffectDependency = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  documentType: Pathfinder2eSpellEffectDocumentType
  rules: Pathfinder2eRuleElementSource[]
  description: Pathfinder2eRichTextDocument
}

export type Pathfinder2eSourceManifest = {
  repository: 'foundryvtt/pf2e'
  systemVersion: string
  commitSha: string | null
  importedAt: string
  packs: Array<{ path: string; fileCount: number; checksum: string }>
}

export type Pathfinder2eSpellCompatibilityReport = {
  sourceManifest: Pathfinder2eSourceManifest
  totalSpells: number
  totalRituals: number
  totalDependencies: number
  unresolvedReferences: Array<{ fromId: string; uuid: string }>
  unknownRuleElementKeys: string[]
  compilationFailures: Array<{ id: string; reason: string }>
}
