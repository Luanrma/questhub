export type Pathfinder2eSourceReferenceSyntax =
  | 'INLINE_UUID'
  | 'UUID_VALUE'

export type Pathfinder2eSourceReferenceTarget = {
  uuid: string
  package?: string
  sourcePack?: string
  documentType?: string
  compendiumKey?: string
  sourceId?: string
  slug?: string
  name?: string
  type?: string
}

export type Pathfinder2eSourceReferenceOwner = {
  sourceId?: string
  name?: string
  type?: string
}

export type Pathfinder2eSourceReference = {
  syntax: Pathfinder2eSourceReferenceSyntax
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  target: Pathfinder2eSourceReferenceTarget
  owner?: Pathfinder2eSourceReferenceOwner
}
