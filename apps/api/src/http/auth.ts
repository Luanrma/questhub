import type { FastifyReply, FastifyRequest } from 'fastify'
import type { TokenPayload } from '../auth/jwt'
import { verifyToken } from '../auth/jwt'

export const TOKEN_COOKIE = 'token'

export function setAuthCookie(reply: FastifyReply, token: string) {
  reply.setCookie(TOKEN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export function clearAuthCookie(reply: FastifyReply) {
  reply.setCookie(TOKEN_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  })
}

export function requireAuth(req: FastifyRequest, reply: FastifyReply): TokenPayload | null {
  const token = (req.cookies as Record<string, string | undefined> | undefined)?.[TOKEN_COOKIE]
  if (!token) {
    reply.status(401).send({ error: 'Nao autenticado' })
    return null
  }

  const payload = verifyToken(token)
  if (!payload) {
    reply.status(401).send({ error: 'Nao autenticado' })
    return null
  }

  return payload
}
