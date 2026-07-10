export type ItemSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type ItemSheetSection = {
  key: string
  title: string
  entries: ItemSheetEntry[]
}

export type CampaignItemType = 'weapon' | 'armor' | 'equipment' | 'consumable' | 'treasure' | 'backpack' | 'shield' | 'kit'

export type CampaignItemEntry = {
  id: string
  system: string
  itemType: CampaignItemType
  name: string
  display: {
    subtitle?: string
    level?: {
      label: string
      value: string
    }
    price?: {
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
      sections: ItemSheetSection[]
    }
  }
}

export type CampaignItemListResponse = {
  campaignId: string
  system: string
  itemType: CampaignItemType | 'all'
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  entries: CampaignItemEntry[]
}
