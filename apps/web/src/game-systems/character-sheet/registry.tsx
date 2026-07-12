import { FileText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Socket } from 'socket.io-client'
import { pathfinder2eCharacterSheetRenderer } from '../pathfinder-2e/character-sheet/Pathfinder2eSheetForm'
import type { CharacterSheetEnvelope, GameSystem } from './types'

export type CharacterSheetPageDefinition = {
  title: string
  Icon: LucideIcon
}

export type CharacterSheetRenderer = {
  systemMark: string
  pages: CharacterSheetPageDefinition[]
  renderPage: (props: {
    page: number
    characterName: string
    sheet: CharacterSheetEnvelope
    onChangeSheet: (sheet: CharacterSheetEnvelope) => void
    identityLocked?: boolean
    isGameMaster?: boolean
    characterId?: string | null
    campaignId?: string | null
    socket?: Socket | null
  }) => ReactNode
}

const unsupportedCharacterSheetRenderer: CharacterSheetRenderer = {
  systemMark: 'Ficha',
  pages: [{ title: 'Ficha', Icon: FileText }],
  renderPage: () => <div className="sheet-message">Sistema de ficha nao suportado.</div>,
}

const characterSheetRenderers: Partial<Record<GameSystem, CharacterSheetRenderer>> = {
  PATHFINDER_2E: pathfinder2eCharacterSheetRenderer as CharacterSheetRenderer,
}

export function getCharacterSheetRenderer(sheet: CharacterSheetEnvelope | null) {
  if (!sheet) return unsupportedCharacterSheetRenderer
  return characterSheetRenderers[sheet.system] ?? unsupportedCharacterSheetRenderer
}
