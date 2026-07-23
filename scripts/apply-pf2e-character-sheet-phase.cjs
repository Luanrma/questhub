const fs = require('node:fs')

function replaceOnce(filePath, search, replacement) {
  const current = fs.readFileSync(filePath, 'utf8')
  if (current.includes(replacement)) return
  if (!current.includes(search)) throw new Error(`Expected text not found in ${filePath}`)
  fs.writeFileSync(filePath, current.replace(search, replacement))
}

replaceOnce(
  'apps/api/prisma/schema.prisma',
  '  campaignTokens CampaignToken[]\n\n  @@index([userId])',
  '  campaignTokens CampaignToken[]\n  sheet          CharacterSheet?\n\n  @@index([userId])',
)

replaceOnce(
  'apps/api/prisma/schema.prisma',
  '}\n\nmodel CampaignCharacter {',
  `}\n\nmodel CharacterSheet {\n  id            String   @id @default(cuid())\n  characterId   String   @unique\n  systemKey     String\n  schemaVersion Int      @default(1)\n  data          Json\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n\n  character Character @relation(fields: [characterId], references: [id], onDelete: Cascade)\n\n  @@index([systemKey])\n}\n\nmodel CampaignCharacter {`,
)

replaceOnce(
  'apps/api/src/server.ts',
  "import { registerEffectAreaSocketHandlers } from './modules/effect_area/presentation/socket'",
  "import { registerEffectAreaSocketHandlers } from './modules/effect_area/presentation/socket'\nimport { registerPathfinder2eCharacterSheetRoutes } from './modules/game_systems/pathfinder_2e/character-sheet/routes'",
)

replaceOnce(
  'apps/api/src/server.ts',
  'registerCharacterRoutes(app)\nregisterCampaignRoutes(app, presence)',
  'registerCharacterRoutes(app)\nregisterPathfinder2eCharacterSheetRoutes(app)\nregisterCampaignRoutes(app, presence)',
)

replaceOnce(
  'apps/api/src/unit.test.ts',
  "import './modules/fog-of-war/application/fog-service.test'",
  "import './modules/fog-of-war/application/fog-service.test'\nimport './modules/game_systems/pathfinder_2e/character-sheet/schema.test'",
)

replaceOnce(
  'apps/web/src/App.tsx',
  "import { HomePage } from './features/home-navigation/pages/HomePage'",
  "import { HomePage } from './features/home-navigation/pages/HomePage'\nimport { Pathfinder2eCharacterSheetPage } from './features/pathfinder-2e/character-sheet/Pathfinder2eCharacterSheetPage'",
)

replaceOnce(
  'apps/web/src/App.tsx',
  '        <Route path="/characters/:characterId/edit" element={<CharacterCreatePage />} />',
  '        <Route path="/characters/:characterId/edit" element={<CharacterCreatePage />} />\n        <Route path="/characters/:characterId/pathfinder-2e-sheet" element={<Pathfinder2eCharacterSheetPage />} />',
)

replaceOnce(
  'apps/web/src/pages/CharactersHomePage.tsx',
  "import { Pencil, Plus, ScrollText, UserRound } from 'lucide-react'",
  "import { FileText, Pencil, Plus, ScrollText, UserRound } from 'lucide-react'",
)

replaceOnce(
  'apps/web/src/pages/CharactersHomePage.tsx',
  `                      <Button\n                        variant="ghost"\n                        className="shrink-0 gap-2 px-3 py-1.5 text-xs"\n                        onClick={() => navigate(\`/characters/\${character.id}/edit\`)}\n                      >\n                        <Pencil className="h-3.5 w-3.5" />\n                        Editar\n                      </Button>`,
  `                      <div className="flex shrink-0 flex-wrap justify-end gap-2">\n                        <Button\n                          variant="ghost"\n                          className="gap-2 px-3 py-1.5 text-xs"\n                          onClick={() => navigate(\`/characters/\${character.id}/pathfinder-2e-sheet\`)}\n                        >\n                          <FileText className="h-3.5 w-3.5" />\n                          Ficha PF2e\n                        </Button>\n                        <Button\n                          variant="ghost"\n                          className="gap-2 px-3 py-1.5 text-xs"\n                          onClick={() => navigate(\`/characters/\${character.id}/edit\`)}\n                        >\n                          <Pencil className="h-3.5 w-3.5" />\n                          Editar\n                        </Button>\n                      </div>`,
)

console.log('PF2e character sheet phase integrated into Prisma, API and web routes.')
