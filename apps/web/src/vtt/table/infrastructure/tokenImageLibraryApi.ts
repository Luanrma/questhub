import { api } from '../../../lib/api'

export type TokenImageAsset = {
  name: string
  path: string
}

type TokenImageLibraryResponse = {
  assets: TokenImageAsset[]
}

export async function listTokenImageAssets(): Promise<TokenImageAsset[]> {
  const response = await api<TokenImageLibraryResponse>('/api/assets/token-library')
  return response.assets
}
