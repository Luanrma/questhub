import assert from 'node:assert/strict'
import test from 'node:test'
import type { Pathfinder2eContentRoadmap, Pathfinder2eContentRound } from './models'
import {
  getNextPathfinder2eContentRound,
  PATHFINDER_2E_CONTENT_ROADMAP,
  selectNextPathfinder2eCoverageBatch,
  validatePathfinder2eContentRoadmap,
} from './roadmap'

function withFirstRound(firstRound: Pathfinder2eContentRound): Pathfinder2eContentRoadmap {
  return {
    ...structuredClone(PATHFINDER_2E_CONTENT_ROADMAP),
    rounds: [firstRound, ...PATHFINDER_2E_CONTENT_ROADMAP.rounds.slice(1)],
  }
}

test('PF2e content roadmap is valid', () => {
  assert.deepEqual(validatePathfinder2eContentRoadmap(), { valid: true, errors: [] })
})

test('every PF2e content round requires Bestiary, Spells, Items, en-US and pt-BR', () => {
  for (const round of PATHFINDER_2E_CONTENT_ROADMAP.rounds) {
    assert.ok(round.selection.bestiary)
    assert.ok(round.selection.spells)
    assert.ok(round.selection.items)
    assert.ok(round.locales.includes('en-US'))
    assert.ok(round.locales.includes('pt-BR'))
  }
})

test('the next PF2e content round is deterministic', () => {
  assert.equal(getNextPathfinder2eContentRound()?.id, 'pf2e-core-remaster-01')

  const firstRound: Pathfinder2eContentRound = {
    ...PATHFINDER_2E_CONTENT_ROADMAP.rounds[0],
    status: 'PUBLISHED',
    frozenEntryIds: {
      bestiary: ['bestiary:1'],
      spells: ['spell:1'],
      items: ['item:1'],
    },
  }

  assert.equal(getNextPathfinder2eContentRound(withFirstRound(firstRound))?.id, 'pf2e-core-remaster-02')
})

test('a locked PF2e round cannot omit a frozen domain', () => {
  const firstRound: Pathfinder2eContentRound = {
    ...PATHFINDER_2E_CONTENT_ROADMAP.rounds[0],
    status: 'SOURCE_LOCKED',
    frozenEntryIds: {
      bestiary: ['bestiary:1'],
      spells: ['spell:1'],
      items: [],
    },
  }

  const validation = validatePathfinder2eContentRoadmap(withFirstRound(firstRound))
  assert.equal(validation.valid, false)
  assert.ok(validation.errors.includes('pf2e-core-remaster-01:non-planned-round-must-freeze-all-domains'))
})

test('a terminal PF2e round may omit only an explicitly exhausted domain', () => {
  const current = PATHFINDER_2E_CONTENT_ROADMAP.rounds[0]
  const terminalRound: Pathfinder2eContentRound = {
    ...current,
    exhaustedDomains: ['ITEM'],
    frozenEntryIds: {
      ...current.frozenEntryIds,
      items: [],
    },
  }

  assert.deepEqual(
    validatePathfinder2eContentRoadmap(withFirstRound(terminalRound)),
    { valid: true, errors: [] },
  )

  const invalidDeclaration: Pathfinder2eContentRound = {
    ...current,
    exhaustedDomains: ['ITEM'],
  }
  assert.ok(
    validatePathfinder2eContentRoadmap(withFirstRound(invalidDeclaration)).errors.includes(
      'pf2e-core-remaster-01:exhausted-domain-must-freeze-zero:ITEM',
    ),
  )
})

test('only an explicit terminal reconciliation may exceed the normal round limit', () => {
  const current = PATHFINDER_2E_CONTENT_ROADMAP.rounds[0]
  const oversizedRound: Pathfinder2eContentRound = {
    ...current,
    selection: {
      ...current.selection,
      bestiary: {
        ...current.selection.bestiary,
        maxEntries: PATHFINDER_2E_CONTENT_ROADMAP.roundLimits.bestiary + 1,
      },
    },
  }

  assert.ok(
    validatePathfinder2eContentRoadmap(withFirstRound(oversizedRound)).errors.includes(
      'pf2e-core-remaster-01:selection-exceeds-round-limit',
    ),
  )

  const terminalRound: Pathfinder2eContentRound = {
    ...oversizedRound,
    terminalReconciliation: true,
    exhaustedDomains: ['SPELL', 'ITEM'],
    frozenEntryIds: {
      ...current.frozenEntryIds,
      spells: [],
      items: [],
    },
  }

  assert.deepEqual(
    validatePathfinder2eContentRoadmap(withFirstRound(terminalRound)),
    { valid: true, errors: [] },
  )
})

test('exhaustive PF2e coverage freezes the configured limits without pre-skipping', () => {
  assert.deepEqual(PATHFINDER_2E_CONTENT_ROADMAP.roundLimits, {
    bestiary: 400,
    spells: 200,
    items: 400,
  })

  const backlog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-01',
  )

  assert.ok(backlog)
  assert.equal(backlog.status, 'REVIEWING')
  assert.equal(backlog.frozenEntryIds.bestiary.length, 50)
  assert.equal(backlog.frozenEntryIds.spells.length, 20)
  assert.equal(backlog.frozenEntryIds.items.length, 50)
  assert.deepEqual(backlog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 50,
  })
  assert.deepEqual(backlog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 20,
  })
  assert.deepEqual(backlog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 50,
  })

  const doubledBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-02',
  )

  assert.ok(doubledBacklog)
  assert.equal(doubledBacklog.status, 'REVIEWING')
  assert.equal(doubledBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(doubledBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(doubledBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(doubledBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(doubledBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(doubledBacklog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 100,
  })

  const thirdBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-03',
  )

  assert.ok(thirdBacklog)
  assert.equal(thirdBacklog.status, 'REVIEWING')
  assert.equal(thirdBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(thirdBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(thirdBacklog.frozenEntryIds.items.length, 65)
  assert.deepEqual(thirdBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(thirdBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(thirdBacklog.selection.items, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 100,
  })

  const fourthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-04',
  )

  assert.ok(fourthBacklog)
  assert.equal(fourthBacklog.status, 'REVIEWING')
  assert.equal(fourthBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(fourthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(fourthBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(fourthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(fourthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(fourthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const fifthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-05',
  )

  assert.ok(fifthBacklog)
  assert.equal(fifthBacklog.status, 'REVIEWING')
  assert.equal(fifthBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(fifthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(fifthBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(fifthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(fifthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(fifthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const sixthBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-06',
  )

  assert.ok(sixthBacklog)
  assert.equal(sixthBacklog.status, 'REVIEWING')
  assert.equal(sixthBacklog.frozenEntryIds.bestiary.length, 36)
  assert.equal(sixthBacklog.frozenEntryIds.spells.length, 40)
  assert.equal(sixthBacklog.frozenEntryIds.items.length, 83)
  assert.deepEqual(sixthBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core'],
    maxEntries: 100,
  })
  assert.deepEqual(sixthBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 40,
  })
  assert.deepEqual(sixthBacklog.selection.items, {
    publications: ['Pathfinder Player Core 2'],
    maxEntries: 100,
  })

  const seventhBacklog = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (round) => round.id === 'pf2e-core-remaster-backlog-07',
  )

  assert.ok(seventhBacklog)
  assert.equal(seventhBacklog.status, 'REVIEWING')
  assert.equal(seventhBacklog.frozenEntryIds.bestiary.length, 100)
  assert.equal(seventhBacklog.frozenEntryIds.spells.length, 18)
  assert.equal(seventhBacklog.frozenEntryIds.items.length, 100)
  assert.deepEqual(seventhBacklog.selection.bestiary, {
    publications: ['Pathfinder Monster Core 2'],
    maxEntries: 100,
  })
  assert.deepEqual(seventhBacklog.selection.spells, {
    publications: ['Pathfinder Player Core'],
    maxEntries: 18,
  })
  assert.deepEqual(seventhBacklog.selection.items, {
    publications: ['Pathfinder GM Core'],
    maxEntries: 100,
  })
})

test('sixteenth PF2e coverage uses the expanded limits and exhausts the current Rulebooks sources', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-16',
  )

  assert.ok(round)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [76, 81, 150],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: ['Pathfinder Howl of the Wild'],
    maxEntries: 76,
  })
  assert.deepEqual(round.selection.spells, {
    publications: ['Pathfinder Rage of Elements'],
    maxEntries: 81,
  })
  assert.deepEqual(round.selection.items, {
    publications: ['Pathfinder Rage of Elements'],
    maxEntries: 150,
  })
})

test('seventeenth PF2e coverage preserves publication precedence with the largest batch', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-17',
  )

  assert.ok(round)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [71, 56, 386],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: ['Pathfinder War of Immortals', 'Pathfinder Battlecry!'],
    maxEntries: 71,
  })
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder Howl of the Wild',
      'Pathfinder War of Immortals',
      'Pathfinder Battlecry!',
    ],
    maxEntries: 56,
  })
  assert.deepEqual(round.selection.items, {
    publications: [
      'Pathfinder Howl of the Wild',
      'Pathfinder War of Immortals',
      'Pathfinder Battlecry!',
    ],
    maxEntries: 386,
  })
})

test('eighteenth PF2e coverage completes Dark Archive and starts Treasure Vault items', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-18',
  )

  assert.ok(round)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [26, 32, 400],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: ['Pathfinder Dark Archive (Remastered)'],
    maxEntries: 26,
  })
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder Dark Archive (Remastered)',
      'Pathfinder Treasure Vault (Remastered)',
    ],
    maxEntries: 32,
  })
  assert.deepEqual(round.selection.items, {
    publications: [
      'Pathfinder Guns & Gears',
      'Pathfinder Dark Archive (Remastered)',
      'Pathfinder Treasure Vault (Remastered)',
    ],
    maxEntries: 400,
  })
})

test('nineteenth PF2e coverage prioritizes Lost Omens creatures without advancing the item cursor', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-19',
  )

  assert.ok(round)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [291, 93, 400],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: [
      'Pathfinder Lost Omens Tian Xia World Guide',
      'Pathfinder Lost Omens Shining Kingdoms',
      'Pathfinder Lost Omens Draconic Codex',
      'Pathfinder Lost Omens Hellfire Dispatches',
      'Pathfinder Lost Omens High Seas',
    ],
    maxEntries: 291,
  })
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder Lost Omens Divine Mysteries',
      'Pathfinder Lost Omens Rival Academies',
      'Pathfinder Lost Omens Shining Kingdoms',
      'Pathfinder Lost Omens Draconic Codex',
      'Pathfinder Lost Omens High Seas',
    ],
    maxEntries: 93,
  })
  assert.deepEqual(round.selection.items, {
    publications: ['Pathfinder Treasure Vault (Remastered)'],
    maxEntries: 400,
  })
})

test('twentieth PF2e coverage exhausts standalone Remaster adventures before Adventure Paths', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-20',
  )

  assert.ok(round)
  assert.equal(round.order, 22)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 20, 400],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: [
      'Pathfinder Adventures: Dark Archive Web Supplement: In Darkness (Remastered)',
      'Pathfinder Free RPG Day Adventure: The Great Toy Heist',
      'Pathfinder Adventure: Prey for Death',
      'Pathfinder Claws of the Tyrant',
      'Pathfinder Adventures: Troubles in Grayce',
      'Pathfinder Adventure: The Scourge of Sheerleaf',
      'Pathfinder Game Night: Dawn of the Frogs',
      'Pathfinder Beginner Box: Secrets of the Unlit Star',
      'Pathfinder Adventure Path: Gatewalkers',
      'Pathfinder Season of Ghosts Hardcover Compilation',
      'Pathfinder #201: Pactbreaker',
      'Pathfinder #202: Severed at the Root',
    ],
    maxEntries: 400,
  })
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder Adventure: Prey for Death',
      'Pathfinder Adventure Path: Gatewalkers',
      'Pathfinder Season of Ghosts Hardcover Compilation',
      'Pathfinder #201: Pactbreaker',
    ],
    maxEntries: 20,
  })
  assert.deepEqual(round.selection.items, {
    publications: ['Pathfinder Treasure Vault (Remastered)'],
    maxEntries: 400,
  })
})

test('twenty-first PF2e coverage advances only the frozen Remaster publication queue', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-rulebooks-backlog-21',
  )

  assert.ok(round)
  assert.equal(round.order, 23)
  assert.equal(round.program, 'RULEBOOKS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 20, 400],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: [
      'Pathfinder #202: Severed at the Root',
      'Pathfinder #203: Shepherd of Decay',
      'Pathfinder #204: Stage Fright',
      'Pathfinder #205: Singer, Stalker, Skinsaw Man',
      'Pathfinder #206: Bring the House Down',
      'Pathfinder #207: The Resurrection Flood',
      'Pathfinder #208: Hoof, Cinder, and Storm',
      'Pathfinder #209: Destroyer\'s Doom',
      'Pathfinder #210: Whispers in the Dirt',
      'Pathfinder #211: The Secret of Deathstalk Tower',
      'Pathfinder #212: A Voice in the Blight',
      'Pathfinder #213: Thirst for Blood',
      'Pathfinder #213: Thirst for Blood',
      'Pathfinder #214: The Broken Palace',
      'Pathfinder #215: To Blot Out the Sun',
      'Pathfinder Adventure Path #215: To Blot Out the Sun',
      'Pathfinder #216: The Acropolis Pyre',
    ],
    maxEntries: 400,
  })
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder #203: Shepherd of Decay',
      'Pathfinder #205: Singer, Stalker, Skinsaw Man',
      'Pathfinder #209: Destroyer\'s Doom',
      'Pathfinder #211: The Secret of Deathstalk Tower',
      'Pathfinder #212: A Voice in the Blight',
      'Pathfinder #216: The Acropolis Pyre',
    ],
    maxEntries: 20,
  })
  assert.deepEqual(round.selection.items, {
    publications: [
      'Pathfinder Treasure Vault (Remastered)',
      'Pathfinder Lost Omens Tian Xia Actor Guide',
      'Pathfinder Lost Omens Divine Mysteries',
      'Pathfinder Lost Omens Rival Academies',
      'Pathfinder Lost Omens Shining Kingdoms',
    ],
    maxEntries: 400,
  })
})

test('twenty-second PF2e coverage freezes the independent Legacy spell transition', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-lost-omens-backlog-22',
  )

  assert.ok(round)
  assert.equal(round.order, 24)
  assert.equal(round.program, 'LOST_OMENS')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 200, 400],
  )
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder Core Rulebook',
      'Pathfinder Advanced Player\'s Guide',
      'Pathfinder Secrets of Magic',
    ],
    maxEntries: 200,
  })
  assert.equal(round.selection.bestiary.publications.at(0), 'Pathfinder #216: The Acropolis Pyre')
  assert.equal(round.selection.bestiary.publications.at(-1), 'Pathfinder Adventure Path: Hellbreakers')
  assert.equal(round.selection.items.publications.at(0), 'Pathfinder Lost Omens Shining Kingdoms')
  assert.equal(round.selection.items.publications.at(-1), 'Pathfinder #214: The Broken Palace')
})

test('twenty-third PF2e coverage reconciles alternate packs before advancing', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-core-remaster-reconciliation-23',
  )

  assert.ok(round)
  assert.equal(round.order, 25)
  assert.equal(round.program, 'CORE_REMASTER')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 189, 171],
  )
  assert.equal(round.selection.bestiary.publications.at(0), 'Pathfinder Player Core')
  assert.equal(
    round.selection.bestiary.publications.at(-1),
    'Pathfinder Society Scenario #7-03: A Foot in the Door',
  )
  assert.equal(round.selection.spells.publications.at(0), 'Pathfinder Secrets of Magic')
  assert.equal(round.selection.spells.publications.at(-1), 'Pathfinder Wake the Dead #4')
  assert.equal(round.selection.items.publications.at(0), 'Pathfinder Monster Core')
  assert.equal(
    round.selection.items.publications.at(-1),
    'Pathfinder Society Scenario #6-05: Silver Bark, Golden Blades',
  )
})

test('twenty-fourth PF2e coverage expands spells to focus without changing logical IDs', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-core-remaster-reconciliation-24',
  )

  assert.ok(round)
  assert.equal(round.order, 26)
  assert.equal(round.program, 'CORE_REMASTER')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [61, 200, 400],
  )
  assert.equal(
    round.selection.bestiary.publications.at(0),
    'Pathfinder Society Scenario #7-03: A Foot in the Door',
  )
  assert.equal(
    round.selection.bestiary.publications.at(-1),
    'Paizo Blog: It\'s Foolish To Go Alone',
  )
  assert.deepEqual(round.selection.spells, {
    publications: ['Pathfinder Player Core', 'Pathfinder Player Core 2'],
    maxEntries: 200,
  })
  assert.equal(round.selection.items.publications.at(0), 'Pathfinder Core Rulebook')
  assert.equal(
    round.selection.items.publications.at(-1),
    'Pathfinder Lost Omens Actor Guide',
  )
})

test('twenty-fifth PF2e coverage advances Legacy cursors while focus remains Remaster', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-core-remaster-reconciliation-25',
  )

  assert.ok(round)
  assert.equal(round.order, 27)
  assert.equal(round.program, 'CORE_REMASTER')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 200, 400],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: ['Pathfinder Bestiary', 'Pathfinder Bestiary 2', 'Pathfinder Bestiary 3'],
    maxEntries: 400,
  })
  assert.equal(round.selection.spells.publications.at(0), 'Pathfinder Player Core 2')
  assert.equal(
    round.selection.spells.publications.at(-1),
    'Pathfinder #215: To Blot Out the Sun',
  )
  assert.equal(
    round.selection.items.publications.at(0),
    'Pathfinder Lost Omens Actor Guide',
  )
  assert.equal(
    round.selection.items.publications.at(-1),
    'Pathfinder Lost Omens The Grand Bazaar',
  )
})

test('twenty-sixth PF2e coverage closes Remaster focus and advances Legacy queues', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-core-remaster-reconciliation-26',
  )

  assert.ok(round)
  assert.equal(round.order, 28)
  assert.equal(round.program, 'CORE_REMASTER')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 3, 400],
  )
  assert.equal(round.selection.bestiary.publications.at(0), 'Pathfinder Bestiary')
  assert.equal(
    round.selection.bestiary.publications.at(-1),
    'Pathfinder #148: Fires of the Haunted City',
  )
  assert.deepEqual(round.selection.spells, {
    publications: [
      'Pathfinder #216: The Acropolis Pyre',
      'Pathfinder Adventure Path: Hell\'s Destiny',
    ],
    maxEntries: 3,
  })
  assert.equal(
    round.selection.items.publications.at(0),
    'Pathfinder Lost Omens The Grand Bazaar',
  )
  assert.equal(
    round.selection.items.publications.at(-1),
    'Pathfinder #160: Assault on Hunting Lodge Seven',
  )
})

test('twenty-seventh PF2e coverage exhausts Legacy focus and numbered AP items', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-legacy-ogl-exhaustive-27',
  )

  assert.ok(round)
  assert.equal(round.order, 29)
  assert.equal(round.program, 'LEGACY_OGL')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 105, 364],
  )
  assert.equal(
    round.selection.bestiary.publications.at(0),
    'Pathfinder #148: Fires of the Haunted City',
  )
  assert.equal(
    round.selection.bestiary.publications.at(-1),
    'Pathfinder #162: Ruins of the Radiant Siege',
  )
  assert.equal(round.selection.spells.maxEntries, 105)
  assert.equal(round.selection.spells.publications.at(0), 'Pathfinder Core Rulebook')
  assert.equal(round.selection.spells.publications.at(-1), 'Pathfinder Wake the Dead #2')
  assert.equal(
    round.selection.items.publications.at(-1),
    'Pathfinder #200: Seven Dooms for Sandpoint',
  )
  assert.equal(round.selection.items.maxEntries, 364)
})

test('twenty-eighth PF2e coverage reconciles Remaster rituals and exhausts Items', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-core-remaster-reconciliation-28',
  )

  assert.ok(round)
  assert.equal(round.order, 30)
  assert.equal(round.program, 'CORE_REMASTER')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 103, 155],
  )
  assert.equal(
    round.selection.bestiary.publications.at(0),
    'Pathfinder #162: Ruins of the Radiant Siege',
  )
  assert.equal(
    round.selection.bestiary.publications.at(-1),
    'Pathfinder #174: Shadows of the Ancients',
  )
  assert.equal(round.selection.spells.maxEntries, 103)
  assert.equal(round.selection.spells.publications.at(0), 'Pathfinder Player Core')
  assert.equal(
    round.selection.spells.publications.at(-1),
    'Pathfinder Adventure Path: Hellbreakers',
  )
  assert.equal(
    round.selection.items.publications.at(0),
    'Pathfinder Adventure: The Fall of Plaguestone',
  )
  assert.equal(round.selection.items.publications.at(-1), 'Pathfinder Lost Omens High Seas')
  assert.equal(round.selection.items.maxEntries, 155)
})

test('twenty-ninth PF2e coverage exhausts Legacy rituals with Items terminal', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-legacy-ogl-exhaustive-29',
  )

  assert.ok(round)
  assert.equal(round.order, 31)
  assert.equal(round.program, 'LEGACY_OGL')
  assert.equal(round.status, 'REVIEWING')
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [400, 47, 0],
  )
  assert.deepEqual(round.exhaustedDomains, ['ITEM'])
  assert.equal(
    round.selection.bestiary.publications.at(0),
    'Pathfinder #174: Shadows of the Ancients',
  )
  assert.equal(round.selection.bestiary.publications.at(-1), 'Pathfinder #190: The Choosing')
  assert.equal(round.selection.spells.publications.at(0), 'Pathfinder Secrets of Magic')
  assert.equal(round.selection.spells.publications.at(-1), 'Pathfinder Wake the Dead #2')
  assert.equal(round.selection.spells.maxEntries, 47)
  assert.deepEqual(round.selection.items, {
    publications: ['Pathfinder Lost Omens High Seas'],
    maxEntries: 1,
  })
})

test('thirtieth PF2e coverage performs the explicit terminal Bestiary reconciliation', () => {
  const round = PATHFINDER_2E_CONTENT_ROADMAP.rounds.find(
    (candidate) => candidate.id === 'pf2e-legacy-ogl-terminal-reconciliation-30',
  )

  assert.ok(round)
  assert.equal(round.order, 32)
  assert.equal(round.program, 'LEGACY_OGL')
  assert.equal(round.status, 'REVIEWING')
  assert.equal(round.terminalReconciliation, true)
  assert.deepEqual(round.exhaustedDomains, ['SPELL', 'ITEM'])
  assert.deepEqual(
    [
      round.frozenEntryIds.bestiary.length,
      round.frozenEntryIds.spells.length,
      round.frozenEntryIds.items.length,
    ],
    [2_070, 0, 0],
  )
  assert.deepEqual(round.selection.bestiary, {
    publications: ['ALL_REMAINING_LEGACY_BESTIARY'],
    maxEntries: 2_070,
  })
  assert.equal(round.selection.spells.maxEntries, 1)
  assert.equal(round.selection.items.maxEntries, 1)
})

test('exhaustive PF2e batch selection never skips a lower pending value', () => {
  const inventory = [
    { contentId: 'level-1-b', value: 1, sourcePack: 'pack', sourceId: 'b' },
    { contentId: 'level-0-c', value: 0, sourcePack: 'pack', sourceId: 'c' },
    { contentId: 'level-0-a', value: 0, sourcePack: 'pack', sourceId: 'a' },
    { contentId: 'level-1-a', value: 1, sourcePack: 'pack', sourceId: 'a' },
  ]

  assert.deepEqual(
    selectNextPathfinder2eCoverageBatch(inventory, new Set(), 2).map((entry) => entry.contentId),
    ['level-0-a', 'level-0-c'],
  )
  assert.deepEqual(
    selectNextPathfinder2eCoverageBatch(inventory, new Set(['level-0-a']), 2)
      .map((entry) => entry.contentId),
    ['level-0-c', 'level-1-a'],
  )
})
