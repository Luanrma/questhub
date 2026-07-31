import assert from 'node:assert/strict'
import test from 'node:test'
import { createPathfinder2eCharacterSpellSnapshot } from '../character-spells/domain'
import { createDefaultPathfinder2eCharacterSheet } from '../character-sheet/defaults'
import { PATHFINDER_2E_CONTENT_ENTRIES } from '../content_catalog/deliveries'
import { pathfinder2eTokenPresentationProvider } from './token-presentation-provider'

test('Pathfinder projects linked character spells as encounter actions', async () => {
  const catalogSpell = PATHFINDER_2E_CONTENT_ENTRIES.find(
    (entry) => entry.original.domain === 'SPELL'
      && createPathfinder2eCharacterSpellSnapshot(entry.original.contentId) !== null,
  )
  assert.ok(catalogSpell)

  const snapshot = createPathfinder2eCharacterSpellSnapshot(catalogSpell.original.contentId)
  assert.ok(snapshot)

  const sheetUpdatedAt = new Date('2026-07-31T10:00:00.000Z')
  const entryUpdatedAt = new Date('2026-07-31T10:05:00.000Z')
  const presentation = await pathfinder2eTokenPresentationProvider.buildTokenPresentation({
    campaignId: 'campaign-1',
    tokenId: 'player-token',
    characterSheet: {
      systemKey: 'pathfinder-2e',
      schemaVersion: 3,
      updatedAt: sheetUpdatedAt,
      data: createDefaultPathfinder2eCharacterSheet(),
      entries: [
        {
          id: 'linked-spell-1',
          ...snapshot,
          state: null,
          sortOrder: 0,
          createdAt: entryUpdatedAt,
          updatedAt: entryUpdatedAt,
        },
      ],
    },
    viewer: {
      userId: 'player-1',
      role: 'PLAYER',
      controlsToken: true,
    },
  })

  const spellActions = presentation.actions.filter((action) => action.group === 'Magias')
  assert.equal(spellActions.length, 1)
  assert.equal(spellActions[0]?.id, 'spell:linked-spell-1')
  assert.equal(spellActions[0]?.visibility, 'OWNER_AND_MASTER')
  assert.deepEqual(spellActions[0]?.contexts, ['ENCOUNTER'])
  assert.match(spellActions[0]?.detail ?? '', /Rank \d+/)
  assert.equal(presentation.revision, entryUpdatedAt.toISOString())

  assert.equal(
    presentation.actions
      .filter((action) => action.group === 'Perícias')
      .every((action) => action.contexts[0] === 'REFERENCE'),
    true,
  )
})
