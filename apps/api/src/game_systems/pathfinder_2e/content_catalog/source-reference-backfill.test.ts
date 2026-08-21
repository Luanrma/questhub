import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import test from 'node:test'

const root = process.cwd()
const helperFile = path.join(root, 'scripts', 'lib', 'backfill-pf2e-source-references.mjs')
const nativeImport = new Function('specifier', 'return import(specifier)') as (
  specifier: string,
) => Promise<{
  backfillPf2eCatalogSourceReferences(options: {
    sourceRoot: string
    outputRoot: string
    write?: boolean
  }): {
    fileCount: number
    recordCount: number
    sourceReferenceCount: number
    recordsWithReferences: number
    referenceCount: number
    unresolvedTargetCount: number
    changedFileCount: number
    changedFiles: string[]
  }
}>

function writeJson(file: string, value: unknown) {
  mkdirSync(path.dirname(file), { recursive: true })
  writeFileSync(file, JSON.stringify(value, null, 2))
}

function originalFile(record: unknown) {
  return [
    "import type { Pathfinder2eOriginalContentRecord } from '../../records'",
    '',
    'export const FIXTURE: readonly Pathfinder2eOriginalContentRecord<unknown>[] = ',
    `${JSON.stringify([record], null, 2)}`,
    '',
  ].join('\n')
}

function historicalOriginalFile(record: Record<string, unknown>) {
  const recordText = JSON.stringify(record, null, 2)
    .replace('"image": {\n    "path": "/fixture/icon.svg"\n  }', '"image": { "path": DEFAULT_ICON }')
  return [
    "import type { Pathfinder2eOriginalContentRecord } from '../../records'",
    '',
    "const DEFAULT_ICON = '/fixture/icon.svg'",
    '',
    'export const FIXTURE: readonly Pathfinder2eOriginalContentRecord<unknown>[] = [',
    recordText,
    ']',
    '',
  ].join('\n')
}

function record(input: {
  contentId: string
  domain: 'BESTIARY' | 'SPELL' | 'ITEM'
  sourcePack: string
  sourceId: string
  slug: string
  image?: boolean
}) {
  return {
    contentId: input.contentId,
    domain: input.domain,
    locale: 'en-US',
    source: {
      sourcePack: input.sourcePack,
      sourceId: input.sourceId,
      slug: input.slug,
      publicationTitle: 'Fixture Book',
    },
    ...(input.image ? { image: { path: '/fixture/icon.svg' } } : {}),
    sourceHash: `sha256:${input.sourceId}:source`,
    translatableHash: `sha256:${input.sourceId}:translation`,
    data: {
      schemaVersion: 1,
      name: input.slug,
      preserved: true,
    },
  }
}

test('backfill creates a semantic sidecar for all existing domains and leaves originals byte-identical', async () => {
  const { backfillPf2eCatalogSourceReferences } = await nativeImport(pathToFileURL(helperFile).href)
  const fixtureRoot = mkdtempSync(path.join(tmpdir(), 'questhub-pf2e-backfill-'))
  const sourceRoot = path.join(fixtureRoot, 'source')
  const outputRoot = path.join(fixtureRoot, 'catalog')

  try {
    writeJson(path.join(sourceRoot, 'system.pf2e.json'), {
      packs: [
        { name: 'conditionitems', path: 'packs/conditions' },
        { name: 'spells-srd', path: 'packs/spells' },
        { name: 'equipment-srd', path: 'packs/equipment' },
        { name: 'fixture-bestiary', path: 'packs/fixture-bestiary' },
      ],
    })

    writeJson(path.join(sourceRoot, 'packs', 'pf2e', 'conditions', 'frightened.json'), {
      _id: 'condition-frightened',
      name: 'Frightened',
      type: 'condition',
      system: { slug: 'frightened' },
    })
    writeJson(path.join(sourceRoot, 'packs', 'pf2e', 'spells', 'other-spell.json'), {
      _id: 'other-spell-id',
      name: 'Other Spell',
      type: 'spell',
      system: { slug: 'other-spell', publication: { title: 'Fixture Book' } },
    })

    const semantic = '@UUID[Compendium.pf2e.conditionitems.Item.frightened]{Frightened 2}'
    const nonSemantic = '@UUID[Compendium.pf2e.spells-srd.Item.other-spell]{Other Spell}'
    const unresolved = '@UUID[Compendium.pf2e.missing-pack.Item.unresolved]{Unresolved Source Reference}'
    const description = `${semantic} ${nonSemantic} ${unresolved}`

    writeJson(path.join(sourceRoot, 'packs', 'pf2e', 'fixture-bestiary', 'creature.json'), {
      _id: 'actor-source',
      name: 'Creature',
      type: 'npc',
      system: {
        slug: 'creature',
        details: { publication: { title: 'Fixture Book' } },
        description: { value: description },
      },
    })
    writeJson(path.join(sourceRoot, 'packs', 'pf2e', 'spells', 'spell.json'), {
      _id: 'spell-source',
      name: 'Spell',
      type: 'spell',
      system: {
        slug: 'spell',
        publication: { title: 'Fixture Book' },
        description: { value: description },
      },
    })
    writeJson(path.join(sourceRoot, 'packs', 'pf2e', 'equipment', 'item.json'), {
      _id: 'item-source',
      name: 'Item',
      type: 'equipment',
      system: {
        slug: 'item',
        publication: { title: 'Fixture Book' },
        description: { value: description },
      },
    })

    const bestiaryPath = path.join(outputRoot, 'bestiary', 'original', 'pilot.ts')
    const spellPath = path.join(outputRoot, 'spells', 'original', 'existing.ts')
    const itemPath = path.join(outputRoot, 'items', 'equipment', 'original', 'pilot.ts')

    const bestiaryRecord = record({
      contentId: 'pf2e:bestiary:fixture-bestiary:creature',
      domain: 'BESTIARY',
      sourcePack: 'fixture-bestiary',
      sourceId: 'actor-source',
      slug: 'creature',
      image: true,
    })
    const spellRecord = record({
      contentId: 'pf2e:spell:spells-srd:spell',
      domain: 'SPELL',
      sourcePack: 'spells-srd',
      sourceId: 'spell-source',
      slug: 'spell',
    })
    const itemRecord = record({
      contentId: 'pf2e:item:equipment-srd:item',
      domain: 'ITEM',
      sourcePack: 'equipment-srd',
      sourceId: 'item-source',
      slug: 'item',
    })

    mkdirSync(path.dirname(bestiaryPath), { recursive: true })
    mkdirSync(path.dirname(spellPath), { recursive: true })
    mkdirSync(path.dirname(itemPath), { recursive: true })
    writeFileSync(bestiaryPath, historicalOriginalFile(bestiaryRecord))
    writeFileSync(spellPath, originalFile(spellRecord))
    writeFileSync(itemPath, originalFile(itemRecord))

    const originalsBefore = new Map([
      [bestiaryPath, readFileSync(bestiaryPath, 'utf8')],
      [spellPath, readFileSync(spellPath, 'utf8')],
      [itemPath, readFileSync(itemPath, 'utf8')],
    ])

    const result = backfillPf2eCatalogSourceReferences({ sourceRoot, outputRoot })
    assert.equal(result.recordCount, 3)
    assert.equal(result.sourceReferenceCount, 9)
    assert.equal(result.recordsWithReferences, 3)
    assert.equal(result.referenceCount, 6)
    assert.equal(result.unresolvedTargetCount, 3)
    assert.equal(result.changedFileCount, 3)
    assert.deepEqual(
      [...result.changedFiles].sort(),
      [
        'source_reference_index/generated/bestiary.ts',
        'source_reference_index/generated/items.ts',
        'source_reference_index/generated/spells.ts',
      ],
    )

    for (const [file, before] of originalsBefore) {
      assert.equal(readFileSync(file, 'utf8'), before, `original mutated: ${file}`)
    }

    for (const generated of ['bestiary.ts', 'spells.ts', 'items.ts']) {
      const content = readFileSync(
        path.join(outputRoot, 'source_reference_index', 'generated', generated),
        'utf8',
      )
      assert.match(content, /Compendium\.pf2e\.conditionitems\.Item\.frightened/)
      assert.match(content, /Compendium\.pf2e\.missing-pack\.Item\.unresolved/)
      assert.doesNotMatch(content, /Compendium\.pf2e\.spells-srd\.Item\.other-spell/)
      assert.match(content, /condition-frightened/)
      assert.match(content, /"condition"/)
      assert.match(content, /,null\]\]/)
    }

    const secondPass = backfillPf2eCatalogSourceReferences({ sourceRoot, outputRoot })
    assert.equal(secondPass.changedFileCount, 0)
    assert.equal(secondPass.recordCount, 3)
    assert.equal(secondPass.referenceCount, 6)
    assert.equal(secondPass.unresolvedTargetCount, 3)
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true })
  }
})

test('backfill refuses to infer a source document when persisted identity remains ambiguous', async () => {
  const { backfillPf2eCatalogSourceReferences } = await nativeImport(pathToFileURL(helperFile).href)
  const fixtureRoot = mkdtempSync(path.join(tmpdir(), 'questhub-pf2e-backfill-ambiguous-'))
  const sourceRoot = path.join(fixtureRoot, 'source')
  const outputRoot = path.join(fixtureRoot, 'catalog')

  try {
    writeJson(path.join(sourceRoot, 'system.pf2e.json'), { packs: [] })
    for (const pack of ['a', 'b']) {
      writeJson(path.join(sourceRoot, 'packs', 'pf2e', pack, 'duplicate.json'), {
        _id: 'duplicate-id',
        name: 'Duplicate',
        type: 'equipment',
        system: { publication: { title: 'Same Book' } },
      })
    }

    const file = path.join(outputRoot, 'items', 'original', 'ambiguous.ts')
    mkdirSync(path.dirname(file), { recursive: true })
    writeFileSync(file, originalFile({
      contentId: 'pf2e:item:unknown:duplicate',
      domain: 'ITEM',
      locale: 'en-US',
      source: {
        sourcePack: 'unknown',
        sourceId: 'duplicate-id',
        publicationTitle: 'Same Book',
      },
      sourceHash: 'sha256:source',
      translatableHash: 'sha256:translation',
      data: { schemaVersion: 1 },
    }))

    assert.throws(
      () => backfillPf2eCatalogSourceReferences({ sourceRoot, outputRoot }),
      /Expected exactly one source document/,
    )
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true })
  }
})
