import crypto from 'node:crypto'
import { prisma } from '../../db/prisma'

export async function generateInviteCode(db: typeof prisma = prisma) {
  for (let i = 0; i < 5; i++) {
    const code = crypto.randomBytes(6).toString('base64url').slice(0, 8).toUpperCase()
    const exists = await db.campaign.findUnique({ where: { inviteCode: code } })
    if (!exists) return code
  }

  return crypto.randomBytes(12).toString('hex').slice(0, 10).toUpperCase()
}
