const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

type ApiErrorBody = {
  error?: unknown
}

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

function extractApiErrorMessage(body: ApiErrorBody | null, fallback: string) {
  if (!body) return fallback
  if (typeof body.error === 'string') return body.error
  return fallback
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })

  if (!res.ok) {
    const contentType = res.headers.get('content-type') ?? ''
    if (contentType.includes('application/json')) {
      const body = (await res.json().catch(() => null)) as ApiErrorBody | null
      throw new ApiError(res.status, extractApiErrorMessage(body, `Erro HTTP ${res.status}`))
    }

    const text = await res.text().catch(() => '')
    throw new ApiError(res.status, text || `Erro HTTP ${res.status}`)
  }

  // Alguns endpoints podem retornar vazio
  const contentType = res.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) return (undefined as T)

  return (await res.json()) as T
}

export type Me = {
  id: string
  name: string
  email: string
  type: string
  iat?: number
  exp?: number
}

