import {
  Pathfinder2eCharacterSheetRenderer,
  type Pathfinder2eCharacterSheetPage,
} from '../features/pathfinder-2e/character-sheet/Pathfinder2eCharacterSheetRenderer'
import type { CharacterSheetRendererProps } from './character-sheet-renderers'

export function PathfinderCharacterSheetAdapter(props: CharacterSheetRendererProps) {
  return (
    <Pathfinder2eCharacterSheetRenderer
      campaignId={props.campaignId}
      sheetId={props.sheetId}
      activePage={props.activePage as Pathfinder2eCharacterSheetPage}
    />
  )
}
