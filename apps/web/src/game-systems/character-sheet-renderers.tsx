import type { ComponentType } from 'react'
import { PathfinderCharacterSheetAdapter } from './PathfinderCharacterSheetAdapter'
import type { GameSystemKey } from './registry'

export type CharacterSheetRendererProps = {
  campaignId: string
  sheetId: string
  activePage: string
  presentation: 'FULL' | 'SIMPLIFIED'
}

export type CharacterSheetPageDescriptor = {
  id: string
  label: string
}

export type CharacterSheetRendererRegistration = {
  pages: readonly CharacterSheetPageDescriptor[]
  Renderer: ComponentType<CharacterSheetRendererProps>
}

const pathfinderPages: readonly CharacterSheetPageDescriptor[] = [
  { id: 'identity', label: 'Identidade' },
  { id: 'statistics', label: 'Atributos e defesa' },
  { id: 'skills', label: 'Perícias' },
  { id: 'notes', label: 'Anotações' },
]

const registrations: Partial<Record<GameSystemKey, CharacterSheetRendererRegistration>> = {
  PATHFINDER_2E: {
    pages: pathfinderPages,
    Renderer: PathfinderCharacterSheetAdapter,
  },
}

export function getCharacterSheetRenderer(system: GameSystemKey | null | undefined) {
  return system ? registrations[system] ?? null : null
}
