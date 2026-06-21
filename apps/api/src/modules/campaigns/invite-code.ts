import crypto from 'node:crypto'

type InviteCodeDb = {
  campaign: {
    findUnique: (args: { where: { inviteCode: string } }) => Promise<unknown>
  }
}

async function getDefaultDb() {
  const module = await import('../../db/prisma')
  return module.prisma
}

export async function generateInviteCode(db?: InviteCodeDb) {
  const targetDb = db ?? (await getDefaultDb())

  for (let i = 0; i < 5; i++) {
    const code = crypto.randomBytes(6).toString('base64url').slice(0, 8).toUpperCase()
    const exists = await targetDb.campaign.findUnique({ where: { inviteCode: code } })
    if (!exists) return code
  }

  return crypto.randomBytes(12).toString('hex').slice(0, 10).toUpperCase()
}
