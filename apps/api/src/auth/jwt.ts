import jwt from 'jsonwebtoken'

const jwtSecret = process.env.JWT_SECRET
if (!jwtSecret) throw new Error('JWT_SECRET nao definido')

const JWT_SECRET: jwt.Secret = jwtSecret

export type TokenPayload = {
  id: string
  name: string
  email: string
  type: string
}

export function signToken(payload: TokenPayload, expiresIn: jwt.SignOptions['expiresIn'] = '7d') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as unknown as TokenPayload
  } catch {
    return null
  }
}
