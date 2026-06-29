import type { FastifyReply, FastifyRequest } from 'fastify'
import type { TokenPayload } from '../auth/jwt'
import { verifyToken } from '../auth/jwt'
import { isActiveSession } from '../auth/session'

export const TOKEN_COOKIE = 'token'

type CookieReply = FastifyReply & {
  setCookie: (name: string, value: string, options: Record<string, unknown>) => FastifyReply
}

type CookieRequest = FastifyRequest & {
  cookies?: Record<string, string | undefined>
}

export function setAuthCookie(reply: FastifyReply, token: string) {
  ;(reply as CookieReply).setCookie(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export function clearAuthCookie(reply: FastifyReply) {
  ;(reply as CookieReply).setCookie(TOKEN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
}

export function requireAuth(req: FastifyRequest, reply: FastifyReply): TokenPayload | null {
  const token = (req as CookieRequest).cookies?.[TOKEN_COOKIE]
  if (!token) {
    reply.status(401).send({ error: 'Nao autenticado' })
    return null
  }

  const payload = verifyToken(token)
  if (!payload || !isActiveSession(payload.id, payload.sessionId)) {
    reply.status(401).send({ error: 'Nao autenticado' })
    return null
  }

  return payload
}
