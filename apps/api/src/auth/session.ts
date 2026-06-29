import { randomUUID } from 'node:crypto'

const sessionDurationMs = 1000 * 60 * 60 * 24 * 7

type ActiveSession = {
  sessionId: string
  expiresAt: number
}

const activeSessionsByUserId = new Map<string, ActiveSession>()

function getActiveSession(userId: string) {
  const session = activeSessionsByUserId.get(userId)
  if (!session) return null

  if (session.expiresAt <= Date.now()) {
    activeSessionsByUserId.delete(userId)
    return null
  }

  return session
}

export function hasActiveSession(userId: string) {
  return Boolean(getActiveSession(userId))
}

export function createActiveSession(userId: string) {
  const session: ActiveSession = {
    sessionId: randomUUID(),
    expiresAt: Date.now() + sessionDurationMs,
  }
  activeSessionsByUserId.set(userId, session)
  return session
}

export function clearActiveSession(userId: string, sessionId?: string) {
  const session = activeSessionsByUserId.get(userId)
  if (!session) return
  if (sessionId && session.sessionId !== sessionId) return
  activeSessionsByUserId.delete(userId)
}

export function isActiveSession(userId: string, sessionId: string | undefined) {
  if (!sessionId) return false
  return getActiveSession(userId)?.sessionId === sessionId
}
