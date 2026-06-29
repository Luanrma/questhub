import test from 'node:test'
import assert from 'node:assert/strict'

process.env.JWT_SECRET = 'unit-test-secret'

const auth = require('./auth') as typeof import('./auth')
const jwt = require('../auth/jwt') as typeof import('../auth/jwt')
const session = require('../auth/session') as typeof import('../auth/session')

function createReply() {
  return {
    statusCode: 200,
    sent: undefined as unknown,
    cookies: [] as Array<{ name: string; value: string; options: Record<string, unknown> }>,
    setCookie(name: string, value: string, options: Record<string, unknown>) {
      this.cookies.push({ name, value, options })
      return this
    },
    status(code: number) {
      this.statusCode = code
      return this
    },
    send(payload: unknown) {
      this.sent = payload
      return this
    },
  }
}

test('setAuthCookie writes the expected secure cookie settings', () => {
  const reply = createReply()

  auth.setAuthCookie(reply as never, 'token-value')

  assert.deepEqual(reply.cookies[0], {
    name: auth.TOKEN_COOKIE,
    value: 'token-value',
    options: {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    },
  })
})

test('clearAuthCookie expires the auth cookie', () => {
  const reply = createReply()

  auth.clearAuthCookie(reply as never)

  assert.equal(reply.cookies[0].name, auth.TOKEN_COOKIE)
  assert.equal(reply.cookies[0].value, '')
  assert.equal(reply.cookies[0].options.maxAge, 0)
})

test('requireAuth rejects missing token', () => {
  const reply = createReply()

  const payload = auth.requireAuth({ cookies: {} } as never, reply as never)

  assert.equal(payload, null)
  assert.equal(reply.statusCode, 401)
  assert.deepEqual(reply.sent, { error: 'Nao autenticado' })
})

test('requireAuth accepts a valid token payload', () => {
  const reply = createReply()
  const activeSession = session.createActiveSession('user-1')
  const token = jwt.signToken({
    id: 'user-1',
    name: 'luan',
    email: 'luan@example.com',
    type: 'USER',
    sessionId: activeSession.sessionId,
  })

  const payload = auth.requireAuth({ cookies: { [auth.TOKEN_COOKIE]: token } } as never, reply as never)

  assert.equal(payload?.id, 'user-1')
  assert.equal(payload?.email, 'luan@example.com')
  assert.equal(reply.statusCode, 200)
})

test('requireAuth rejects a token that is not the active session', () => {
  const reply = createReply()
  session.createActiveSession('user-2')
  const token = jwt.signToken({
    id: 'user-2',
    name: 'luan',
    email: 'luan@example.com',
    type: 'USER',
    sessionId: 'old-session',
  })

  const payload = auth.requireAuth({ cookies: { [auth.TOKEN_COOKIE]: token } } as never, reply as never)

  assert.equal(payload, null)
  assert.equal(reply.statusCode, 401)
})
