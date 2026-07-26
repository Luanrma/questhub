import type { ComponentType } from 'react'
import {
  Pathfinder2eCharacterSheetRenderer,
  type Pathfinder2eCharacterSheetPage,
} from '../features/pathfinder-2e/character-sheet/Pathfinder2eCharacterSheetRenderer'
import type { GameSystemKey } from './registry'

export type CharacterSheetRendererProps = {
  campaignId: string
  characterId: string
  activePage: string
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

function PathfinderRenderer(props: CharacterSheetRendererProps) {
  return (
    <Pathfinder2eCharacterSheetRenderer
      campaignId={props.campaignId}
      characterId={props.characterId}
      activePage={props.activePage as Pathfinder2eCharacterSheetPage}
    />
  )
}

const registrations: Partial<Record<GameSystemKey, CharacterSheetRendererRegistration>> = {
  PATHFINDER_2E: {
    pages: pathfinderPages,
    Renderer: PathfinderRenderer,
  },
}

export function getCharacterSheetRenderer(system: GameSystemKey | null | undefined) {
  return system ? registrations[system] ?? null : null
}
