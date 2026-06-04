const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

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
    const text = await res.text().catch(() => '')
    throw new Error(text || `Erro HTTP ${res.status}`)
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

