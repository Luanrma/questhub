export type SpellSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type SpellSheetSection = {
  key: string
  title: string
  entries: SpellSheetEntry[]
}

export type CampaignSpellCategory = 'spell' | 'ritual'

export type CampaignSpellEntry = {
  id: string
  system: string
  category: CampaignSpellCategory
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
      sections: SpellSheetSection[]
    }
  }
}

export type CampaignSpellListResponse = {
  campaignId: string
  system: string
  category: CampaignSpellCategory | 'all'
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  entries: CampaignSpellEntry[]
}
