import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'
import { enrichPf2eBatchSourceReferences } from './lib/enrich-pf2e-source-references.mjs'

const importerVersion = 15
const sourceRoot = resolve(process.argv[2] ?? '.tmp/pf2e-source')
const batchNumber = String(process.argv[3] ?? '01').padStart(2, '0')
const baseImporter = resolve('scripts/import-pf2e-core-exhaustive-base.mjs')

const result = spawnSync(
  process.execPath,
  [baseImporter, ...process.argv.slice(2)],
  {
    cwd: process.cwd(),
    encoding: 'utf8',
    env: process.env,
  },
)

if (result.stderr) process.stderr.write(result.stderr)
if (result.error) throw result.error
if (result.status !== 0) {
  if (result.stdout) process.stdout.write(result.stdout)
  process.exit(result.status ?? 1)
}

let report
try {
  report = JSON.parse(result.stdout)
} catch (cause) {
  throw new Error(
    `Base PF2e importer did not return a valid JSON report: ${cause instanceof Error ? cause.message : String(cause)}`,
  )
}

const sourceReferences = enrichPf2eBatchSourceReferences({
  sourceRoot,
  batchNumber,
})

console.log(JSON.stringify({
  ...report,
  importerVersion,
  sourceReferences,
}, null, 2))
