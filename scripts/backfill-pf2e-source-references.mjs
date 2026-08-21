import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import { backfillPf2eCatalogSourceReferences } from './lib/backfill-pf2e-source-references.mjs'

const EXPECTED_SOURCE_COMMIT = '01114da5851f31404078d8020809b13e4000bc4b'
const sourceRoot = resolve(process.argv[2] ?? '.tmp/pf2e-source')
const checkOnly = process.argv.includes('--check')

const revision = spawnSync('git', ['-C', sourceRoot, 'rev-parse', 'HEAD'], {
  cwd: process.cwd(),
  encoding: 'utf8',
})
if (revision.error) throw revision.error
if (revision.status !== 0) {
  throw new Error(`Unable to read PF2e source revision: ${revision.stderr?.trim() || 'git failed'}`)
}

const sourceCommit = revision.stdout.trim()
if (sourceCommit !== EXPECTED_SOURCE_COMMIT) {
  throw new Error(
    `PF2e source commit mismatch: expected ${EXPECTED_SOURCE_COMMIT}, received ${sourceCommit}`,
  )
}

const result = backfillPf2eCatalogSourceReferences({
  sourceRoot,
  write: !checkOnly,
})

console.log(JSON.stringify({
  sourceCommit,
  mode: checkOnly ? 'CHECK' : 'WRITE',
  ...result,
}, null, 2))

if (checkOnly && result.changedFileCount > 0) {
  process.exitCode = 1
}
