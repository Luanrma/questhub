import {
  Pathfinder2eCharacterSheetRenderer,
  type Pathfinder2eCharacterSheetPage,
} from '../features/pathfinder-2e/character-sheet/Pathfinder2eCharacterSheetRenderer'
import { Pathfinder2eCharacterSpellsPanel } from '../features/pathfinder-2e/character-sheet/Pathfinder2eCharacterSpellsPanel'
import type { CharacterSheetRendererProps } from './character-sheet-renderers'
import { SimplifiedCatalogTokenSheetRenderer } from './SimplifiedCatalogTokenSheetRenderer'

export function PathfinderCharacterSheetAdapter(props: CharacterSheetRendererProps) {
  if (props.presentation === 'SIMPLIFIED') {
    return (
      <SimplifiedCatalogTokenSheetRenderer
        campaignId={props.campaignId}
        sheetId={props.sheetId}
      />
    )
  }

  if (props.activePage === 'spells') {
    return (
      <Pathfinder2eCharacterSpellsPanel
        campaignId={props.campaignId}
        sheetId={props.sheetId}
      />
    )
  }

  return (
    <Pathfinder2eCharacterSheetRenderer
      campaignId={props.campaignId}
      sheetId={props.sheetId}
      activePage={props.activePage as Pathfinder2eCharacterSheetPage}
    />
  )
}
