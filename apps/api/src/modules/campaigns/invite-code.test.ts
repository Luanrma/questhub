import test from 'node:test'
import assert from 'node:assert/strict'
import { generateInviteCode } from './invite-code'

function createDb(existingCodes: Set<string>, calls: string[]) {
  return {
    campaign: {
      async findUnique({ where }: { where: { inviteCode: string } }) {
        calls.push(where.inviteCode)
        return existingCodes.has(where.inviteCode) ? { id: 'existing-campaign' } : null
      },
    },
  }
}

test('generateInviteCode returns an uppercase 8 character code when available', async () => {
  const calls: string[] = []
  const code = await generateInviteCode(createDb(new Set(), calls))

  assert.match(code, /^[A-Z0-9_-]{8}$/)
  assert.equal(calls.length, 1)
  assert.equal(calls[0], code)
})

test('generateInviteCode retries conflicts and falls back after five attempts', async () => {
  const calls: string[] = []
  const db = createDb(new Set(), calls)

  db.campaign.findUnique = async ({ where }: { where: { inviteCode: string } }) => {
    calls.push(where.inviteCode)
    return { id: 'existing-campaign' }
  }

  const code = await generateInviteCode(db)

  assert.equal(calls.length, 5)
  assert.match(code, /^[A-F0-9]{10}$/)
})
