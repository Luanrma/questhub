import { useCallback, useEffect, useState } from 'react'
import { ApiError } from '../../lib/api'
import type { WalletView } from '../domain/inventoryTypes'
import {
  adjustWallet,
  getWallet,
  transferCurrency,
  type AdjustWalletPayload,
  type TransferCurrencyPayload,
} from '../infrastructure/inventoryApi'

export function useWallet(campaignId: string | null | undefined, characterId: string | null | undefined) {
  const [wallet, setWallet] = useState<WalletView | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const reload = useCallback(async () => {
    if (!campaignId || !characterId) return
    setLoading(true)
    setError(null)
    try {
      setWallet(await getWallet(campaignId, characterId))
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Falha ao carregar carteira')
    } finally {
      setLoading(false)
    }
  }, [campaignId, characterId])

  useEffect(() => {
    void reload()
  }, [reload])

  async function adjust(payload: AdjustWalletPayload) {
    if (!campaignId || !characterId) return
    setWallet(await adjustWallet(campaignId, characterId, payload))
  }

  async function transfer(payload: TransferCurrencyPayload) {
    if (!campaignId || !characterId) return
    setWallet(await transferCurrency(campaignId, characterId, payload))
  }

  return { wallet, loading, error, reload, adjust, transfer }
}
