import assert from 'node:assert/strict'
import test from 'node:test'
import { parseAgentCliArgs } from './cli'

test('parses role input and repeated contexts', () => {
  assert.deepEqual(
    parseAgentCliArgs([
      '--role', 'architect',
      '--input', 'Review feature',
      '--context', 'docs/features/a/spec.md',
      '--context', 'docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md',
    ]),
    {
      role: 'architect',
      input: 'Review feature',
      contextPaths: [
        'docs/features/a/spec.md',
        'docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md',
      ],
    },
  )
})

test('rejects missing required CLI arguments', () => {
  assert.throws(() => parseAgentCliArgs(['--role', 'qa']), /--input is required/)
  assert.throws(() => parseAgentCliArgs(['--input', 'test']), /--role is required/)
  assert.throws(() => parseAgentCliArgs(['--wat']), /Unknown argument/)
})
