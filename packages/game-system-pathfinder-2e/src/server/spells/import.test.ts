import assert from 'node:assert/strict'
import test from 'node:test'
import { PATHFINDER_2E_SPELL_DATA } from './data.generated'
import { PATHFINDER_2E_SPELL_IMPORT_MANIFEST } from './import-manifest.generated'

test('catalogo gerado usa apenas o contrato canonico do QuestHub', () => {
  assert.ok(PATHFINDER_2E_SPELL_DATA.length > 1_000)
  assert.equal(PATHFINDER_2E_SPELL_IMPORT_MANIFEST.imported, PATHFINDER_2E_SPELL_DATA.length)
  assert.equal(PATHFINDER_2E_SPELL_IMPORT_MANIFEST.rejected.length, 0)

  for (const spell of PATHFINDER_2E_SPELL_DATA) {
    assert.match(spell.id, /^pf2e\.spell\./)
    assert.ok(['SPELL', 'RITUAL'].includes(spell.kind))
    assert.ok(!('system' in spell))
    assert.ok(!('rules' in spell))
    assert.ok(!('overlays' in spell))
    assert.ok(!('dependencyIds' in spell))
    assert.ok(!('sourcePack' in spell.source))
    assert.equal(typeof spell.description, 'string')
    assert.ok(!spell.description.includes('@UUID['))
  }
})

test('automacao explicita quando a importacao nao foi completamente traduzida', () => {
  const manualOrPartial = PATHFINDER_2E_SPELL_DATA.filter((spell) => spell.automation.status !== 'SUPPORTED')
  assert.ok(manualOrPartial.length > 0)
  assert.ok(manualOrPartial.every((spell) => spell.automation.reasons.length > 0))
})
