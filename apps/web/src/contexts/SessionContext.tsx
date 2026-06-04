import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'
import type { Me } from '../lib/api'

type SessionContextValue = {
  me: Me | null
  loading: boolean
  refreshMe: () => Promise<void>
  signIn: (params: { email: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

const SessionContext = createContext<SessionContextValue | null>(null)

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [me, setMe] = useState<Me | null>(null)
  const [loading, setLoading] = useState(true)

  async function refreshMe() {
    try {
      const data = await api<Me>('/api/me')
      setMe(data)
    } catch {
      setMe(null)
    }
  }

  async function signIn(params: { email: string; password: string }) {
    await api('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify(params),
    })
    await refreshMe()
  }

  async function logout() {
    await api('/api/logout', { method: 'POST', body: '{}' })
    setMe(null)
  }

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      await refreshMe()
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo(
    () => ({ me, loading, refreshMe, signIn, logout }),
    [me, loading],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession deve ser usado dentro de <SessionProvider>')
  return ctx
}
