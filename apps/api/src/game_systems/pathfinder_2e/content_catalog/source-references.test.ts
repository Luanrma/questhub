import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import test from 'node:test'
import type { Pathfinder2eOriginalContentRecord } from './records'
import type { Pathfinder2eSourceReference } from './source-references'

const root = process.cwd()
const helperFile = path.join(root, 'scripts', 'lib', 'pf2e-source-references.mjs')
const nativeImport = new Function('specifier', 'return import(specifier)') as (
  specifier: string,
) => Promise<Record<string, unknown>>

async function sourceReferenceModule() {
  return nativeImport(pathToFileURL(helperFile).href) as Promise<{
    collectPf2eSourceReferences(document: unknown, options?: { resolveTarget?: (target: unknown) => unknown }): Pathfinder2eSourceReference[]
    createPf2eSourceReferenceResolver(sourceRoot: string): (target: unknown) => unknown
    parseFoundryUuid(uuid: string): Record<string, string>
  }>
}

test('inline UUID metadata preserves repeated source references independently', async () => {
  const { collectPf2eSourceReferences } = await sourceReferenceModule()
  const document = {
    _id: 'spell-source-id',
    name: 'Example Spell',
    type: 'spell',
    system: {
      description: {
        value: [
          'Success @UUID[Compendium.pf2e.conditionitems.Item.shared-key]{State 1}.',
          'Failure @UUID[Compendium.pf2e.conditionitems.Item.shared-key]{State 2}.',
          'Critical Failure @UUID[Compendium.pf2e.conditionitems.Item.shared-key]{State 3}.',
        ].join(' '),
      },
    },
  }

  const references = collectPf2eSourceReferences(document)
  assert.equal(references.length, 3)
  assert.deepEqual(references.map((reference) => reference.label), ['State 1', 'State 2', 'State 3'])
  assert.ok(references.every((reference) => reference.uuid === 'Compendium.pf2e.conditionitems.Item.shared-key'))
  assert.ok(references.every((reference) => reference.sourcePath === '/system/description/value'))
  assert.ok(references[0].sourceIndex < references[1].sourceIndex)
  assert.ok(references[1].sourceIndex < references[2].sourceIndex)
  assert.deepEqual(references[0].owner, {
    sourceId: 'spell-source-id',
    name: 'Example Spell',
    type: 'spell',
  })
})

test('whole UUID values and embedded owner identity are preserved with JSON Pointer escaping', async () => {
  const { collectPf2eSourceReferences } = await sourceReferenceModule()
  const document = {
    _id: 'actor-id',
    name: 'Creature',
    type: 'npc',
    'rules/list': [
      {
        _id: 'embedded-id',
        name: 'Embedded Action',
        type: 'action',
        rule: {
          type: 'GrantItem',
          uuid: 'Compendium.pf2e.spell-effects.Item.effect-key',
        },
      },
    ],
  }

  const [reference] = collectPf2eSourceReferences(document)
  assert.equal(reference.syntax, 'UUID_VALUE')
  assert.equal(reference.sourceIndex, 0)
  assert.equal(reference.sourcePath, '/rules~1list/0/rule/uuid')
  assert.equal(reference.label, null)
  assert.deepEqual(reference.owner, {
    sourceId: 'embedded-id',
    name: 'Embedded Action',
    type: 'action',
  })
})

test('plain text alone never creates source reference metadata', async () => {
  const { collectPf2eSourceReferences } = await sourceReferenceModule()
  const references = collectPf2eSourceReferences({
    system: { description: { value: 'The target gains a named state 2.' } },
  })
  assert.deepEqual(references, [])
})

test('Foundry Compendium UUID parsing preserves structural target parts without classifying mechanics', async () => {
  const { parseFoundryUuid } = await sourceReferenceModule()
  assert.deepEqual(
    parseFoundryUuid('Compendium.pf2e.any-pack.Item.some.key'),
    {
      uuid: 'Compendium.pf2e.any-pack.Item.some.key',
      package: 'pf2e',
      sourcePack: 'any-pack',
      documentType: 'Item',
      compendiumKey: 'some.key',
    },
  )
  assert.deepEqual(parseFoundryUuid('Actor.actor-id'), { uuid: 'Actor.actor-id' })
})

test('target resolver follows source manifest pack name-to-path mapping', async () => {
  const { createPf2eSourceReferenceResolver, parseFoundryUuid } = await sourceReferenceModule()
  const fixtureRoot = mkdtempSync(path.join(tmpdir(), 'questhub-pf2e-ref-'))
  try {
    const physicalPack = path.join(fixtureRoot, 'packs', 'pf2e', 'conditions')
    mkdirSync(physicalPack, { recursive: true })
    writeFileSync(path.join(fixtureRoot, 'system.pf2e.json'), JSON.stringify({
      packs: [{ name: 'conditionitems', path: 'packs/conditions', type: 'Item' }],
    }))
    writeFileSync(path.join(physicalPack, 'one.json'), JSON.stringify({
      _id: 'target-1',
      name: 'Exact Target',
      type: 'effect',
      system: { slug: 'exact-target' },
    }))

    const resolve = createPf2eSourceReferenceResolver(fixtureRoot)
    assert.deepEqual(
      resolve(parseFoundryUuid('Compendium.pf2e.conditionitems.Item.exact-target')),
      {
        sourceId: 'target-1',
        slug: 'exact-target',
        name: 'Exact Target',
        type: 'effect',
      },
    )
    assert.equal(resolve(parseFoundryUuid('Compendium.pf2e.conditionitems.Item.missing')), null)

    writeFileSync(path.join(physicalPack, 'two.json'), JSON.stringify({
      _id: 'target-2',
      name: 'Exact Target',
      type: 'effect',
      system: { slug: 'duplicate-slug' },
    }))
    const resolveWithAmbiguity = createPf2eSourceReferenceResolver(fixtureRoot)
    assert.equal(
      resolveWithAmbiguity(parseFoundryUuid('Compendium.pf2e.conditionitems.Item.Exact Target')),
      null,
    )
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true })
  }
})

test('target resolver refuses unknown packs instead of inferring from labels', async () => {
  const { createPf2eSourceReferenceResolver, parseFoundryUuid } = await sourceReferenceModule()
  const fixtureRoot = mkdtempSync(path.join(tmpdir(), 'questhub-pf2e-ref-'))
  try {
    mkdirSync(path.join(fixtureRoot, 'packs', 'pf2e', 'unrelated-directory'), { recursive: true })
    const resolve = createPf2eSourceReferenceResolver(fixtureRoot)
    assert.equal(resolve(parseFoundryUuid('Compendium.pf2e.not-a-pack.Item.anything')), null)
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true })
  }
})

test('OriginalContentRecord keeps source references optional and outside translated data', () => {
  const legacyRecord: Pathfinder2eOriginalContentRecord<{ schemaVersion: 1 }> = {
    contentId: 'pf2e:spell:test:legacy',
    domain: 'SPELL',
    locale: 'en-US',
    source: { sourcePack: 'test', sourceId: 'legacy-id' },
    sourceHash: 'sha256:source',
    translatableHash: 'sha256:translated',
    data: { schemaVersion: 1 },
  }

  const enrichedRecord: Pathfinder2eOriginalContentRecord<{ schemaVersion: 1 }> = {
    ...legacyRecord,
    sourceReferences: [],
  }

  assert.equal(legacyRecord.sourceReferences, undefined)
  assert.deepEqual(enrichedRecord.sourceReferences, [])
})

test('reference extractor contains no concrete effect names or mechanical classification mapping', () => {
  const source = readFileSync(helperFile, 'utf8')
  assert.doesNotMatch(source, /Frightened|Slowed|Stupefied|Affliction|BENEFICIAL|HARMFUL/)
  assert.doesNotMatch(source, /conditionitems\s*[:=]|spell-effects\s*[:=]|equipment-effects\s*[:=]/)
})
