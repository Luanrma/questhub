import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { api } from '../lib/api'
import type { Me } from '../lib/api'

export type Campaign = {
  id: string
  title: string
  description?: string | null
  inviteCode: string
  gmName: string
  gmUserId: string
  joinPolicy: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  myRole: 'MASTER' | 'PLAYER'
  myStatus?: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'
  myCharacterName?: string | null
  isOnline: boolean
}

type SessionContextValue = {
  me: Me | null
  loading: boolean
  campaigns: Campaign[]
  campaignsLoading: boolean
  activeCampaignId: string | null
  socket: Socket | null
  refreshMe: () => Promise<void>
  loadCampaigns: (options?: { force?: boolean }) => Promise<void>
  setActiveCampaignId: (campaignId: string | null) => void
  enterPresence: (params: { campaignId: string; characterId: string }) => void
  signIn: (params: { email: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

const SessionContext = createContext<SessionContextValue | null>(null)

const ACTIVE_CAMPAIGN_STORAGE_KEY = 'questhub.activeCampaignId'

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [me, setMe] = useState<Me | null>(null)
  const [loading, setLoading] = useState(true)
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [campaignsLoading, setCampaignsLoading] = useState(false)
  const socketRef = useRef<Socket | null>(null)
  const [socket, setSocket] = useState<Socket | null>(null)
  const lastCampaignsRefreshRef = useRef<number>(0)
  const [activeCampaignId, _setActiveCampaignId] = useState<string | null>(() => {
    try {
      return localStorage.getItem(ACTIVE_CAMPAIGN_STORAGE_KEY)
    } catch {
      return null
    }
  })

  function setActiveCampaignId(campaignId: string | null) {
    _setActiveCampaignId(campaignId)
    try {
      if (campaignId) localStorage.setItem(ACTIVE_CAMPAIGN_STORAGE_KEY, campaignId)
      else localStorage.removeItem(ACTIVE_CAMPAIGN_STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  async function refreshMe() {
    try {
      const data = await api<Me>('/api/me')
      setMe(data)
    } catch {
      setMe(null)
    }
  }

  async function loadCampaigns(options?: { force?: boolean }) {
    const now = Date.now()
    if (!options?.force && now - lastCampaignsRefreshRef.current < 800) return
    lastCampaignsRefreshRef.current = now

    setCampaignsLoading(true)
    try {
      const list = await api<Campaign[]>('/api/campaigns')
      setCampaigns(list)

      if (activeCampaignId && !list.some((campaign) => campaign.id === activeCampaignId)) {
        setActiveCampaignId(null)
      }
    } finally {
      setCampaignsLoading(false)
    }
  }

  async function signIn(params: { email: string; password: string }) {
    await api('/api/sign-in', {
      method: 'POST',
      body: JSON.stringify(params),
    })
    await refreshMe()
    await loadCampaigns({ force: true }).catch(() => {})
  }

  async function logout() {
    await api('/api/logout', { method: 'POST', body: '{}' })
    setMe(null)
    setCampaigns([])
    setActiveCampaignId(null)
    socketRef.current?.disconnect()
    socketRef.current = null
    setSocket(null)
  }

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      await refreshMe()
      await loadCampaigns({ force: true }).catch(() => {})
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!me) return
    if (socketRef.current) return

    const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'
    const socketConnection = io(API_URL, { withCredentials: true })

    socketConnection.on('connect_error', () => {
      // ignore
    })

    socketConnection.on('campaign:join-approved', async (payload: any) => {
      alert(payload?.message ?? 'Sua solicitacao foi aprovada!')
      await loadCampaigns({ force: true }).catch(() => {})
    })

    socketConnection.on('campaign:join-rejected', async (payload: any) => {
      alert(payload?.message ?? 'Sua solicitacao foi recusada.')
      await loadCampaigns({ force: true }).catch(() => {})
    })

    socketConnection.on('campaign:join-requested', async (payload: any) => {
      alert(`Nova solicitacao de acesso: ${payload?.email ?? 'usuario'}`)
      await loadCampaigns({ force: true }).catch(() => {})
    })

    socketConnection.on('campaign:player-joined', async (payload: any) => {
      alert(`${payload?.characterName ?? 'Novo personagem'} entrou na campanha.`)
      await loadCampaigns({ force: true }).catch(() => {})
    })

    socketConnection.on('campaign:status', async () => {
      await loadCampaigns({ force: true }).catch(() => {})
    })

    socketConnection.on('campaign:kicked', async (payload: any) => {
      alert(payload?.message ?? 'Voce foi desconectado da campanha.')
      await loadCampaigns({ force: true }).catch(() => {})
      window.location.href = '/campaigns'
    })

    socketRef.current = socketConnection
    setSocket(socketConnection)

    return () => {
      socketConnection.disconnect()
      socketRef.current = null
      setSocket(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me])

  function enterPresence(params: { campaignId: string; characterId: string }) {
    socketRef.current?.emit('presence:enter', params)
  }

  const value = useMemo(
    () => ({
      me,
      loading,
      campaigns,
      campaignsLoading,
      activeCampaignId,
      socket,
      refreshMe,
      loadCampaigns,
      setActiveCampaignId,
      enterPresence,
      signIn,
      logout,
    }),
    [me, loading, campaigns, campaignsLoading, activeCampaignId, socket],
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSession deve ser usado dentro de <SessionProvider>')
  return ctx
}
