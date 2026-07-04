export type BestiarySheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type BestiarySheetSection = {
  key: string
  title: string
  entries: BestiarySheetEntry[]
}

export type BestiaryCreature = {
  id: string
  system: string
  name: string
  display: {
    subtitle?: string
    level?: {
      label: string
      value: string
    }
    stats: Array<{
      key: string
      label: string
      value: string
    }>
    tags: string[]
    sheet?: {
      sections: BestiarySheetSection[]
    }
  }
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
}

export type BestiaryResponse = {
  campaignId: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  creatures: BestiaryCreature[]
}
