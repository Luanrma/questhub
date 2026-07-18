import { useEffect, useState } from 'react'
import { listTokenImageAssets, type TokenImageAsset } from '../infrastructure/tokenImageLibraryApi'

type TokenImageLibraryState = {
  assets: TokenImageAsset[]
  loading: boolean
  error: string | null
}

export function useTokenImageLibrary(): TokenImageLibraryState {
  const [state, setState] = useState<TokenImageLibraryState>({ assets: [], loading: true, error: null })

  useEffect(() => {
    let active = true

    listTokenImageAssets()
      .then((assets) => {
        if (active) setState({ assets, loading: false, error: null })
      })
      .catch((error: unknown) => {
        if (!active) return
        setState({
          assets: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Nao foi possivel carregar as imagens locais.',
        })
      })

    return () => {
      active = false
    }
  }, [])

  return state
}
