import { createContext, useContext } from 'react'
import type { Socket } from 'socket.io-client'
import type { Me } from '../lib/api'
import type { VttGridSettings } from '../vtt/grid'

export type Campaign = {
  id: string
  title: string
  description?: string | null
  inviteCode: string | null
  gmName: string
  gmUserId: string
  joinPolicy: 'PUBLIC' | 'PRIVATE'
  createdAt: string
  myRole: 'MASTER' | 'PLAYER'
  myStatus?: 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT'
  isOnline: boolean
  sessionState?: 'ACTIVE' | 'PAUSED' | null
}

export type SessionContextValue = {
  me: Me | null
  loading: boolean
  campaigns: Campaign[]
  campaignsLoading: boolean
  activeCampaignId: string | null
  socket: Socket | null
  refreshMe: () => Promise<void>
  loadCampaigns: (options?: { force?: boolean }) => Promise<Campaign[]>
  setActiveCampaignId: (campaignId: string | null) => void
  enterPresence: (params: { campaignId: string }) => Promise<void>
  startCampaignSession: (params: { campaignId: string }) => Promise<void>
  endCampaignSession: (params: { campaignId: string }) => Promise<void>
  pauseCampaignSession: (params: { campaignId: string }) => Promise<void>
  resumeCampaignSession: (params: { campaignId: string }) => Promise<void>
  updateVttGridSettings: (params: {
    campaignId: string
    sceneId?: string
    settings: VttGridSettings
  }) => Promise<void>
  connectRealtime: () => Socket
  signIn: (params: { email: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

export const SessionContext = createContext<SessionContextValue | null>(null)

export function useSession() {
  const context = useContext(SessionContext)
  if (!context) throw new Error('useSession deve ser usado dentro de <SessionProvider>')
  return context
}
