import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Image, X } from 'lucide-react'
import { useTokenImageLibrary } from '../hooks/useTokenImageLibrary'
import { TokenAvatar } from './TokenAvatar'
import {
  handleTokenImagePickerBackdropMouseDown,
  stopTokenImagePickerClickPropagation,
} from './tokenImagePickerEvents'
import { getLastTokenColor, saveLastTokenColor } from '../infrastructure/tokenAppearancePreferences'

export type TokenAppearanceChanges = {
  avatarUrl: string | null
  color: string | null
}

type TokenImagePickerDialogProps = {
  tokenName: string
  tokenId: string
  currentAvatarUrl: string | null
  currentColor: string | null
  onCancel: () => void
  onSave: (changes: TokenAppearanceChanges) => Promise<void> | void
}

export function TokenImagePickerDialog({
  tokenName,
  tokenId,
  currentAvatarUrl,
  currentColor,
  onCancel,
  onSave,
}: TokenImagePickerDialogProps) {
  const { assets, loading, error } = useTokenImageLibrary()
  const currentLocalPath = currentAvatarUrl?.startsWith('/tokens/') ? currentAvatarUrl : null
  const [selectedAssetPath, setSelectedAssetPath] = useState<string | null>(currentLocalPath)
  const [customUrl, setCustomUrl] = useState(currentLocalPath ? '' : currentAvatarUrl ?? '')
  const [selectedColor, setSelectedColor] = useState(currentColor ?? getLastTokenColor)
  const [backgroundEnabled, setBackgroundEnabled] = useState(Boolean(currentAvatarUrl && currentColor))
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const selectedAvatarUrl = customUrl.trim() || selectedAssetPath
  const hasImage = Boolean(selectedAvatarUrl)

  function selectAsset(avatarUrl: string | null) {
    setSelectedAssetPath(avatarUrl)
    setCustomUrl('')
    setBackgroundEnabled(false)
  }

  async function save() {
    const color = hasImage && !backgroundEnabled ? null : selectedColor
    setSaving(true)
    setSaveError(null)
    try {
      await onSave({ avatarUrl: selectedAvatarUrl, color })
      if (color) saveLastTokenColor(color)
      onCancel()
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Nao foi possivel salvar a imagem do Token.')
    } finally {
      setSaving(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => handleTokenImagePickerBackdropMouseDown(event, saving, onCancel)}
      onClick={stopTokenImagePickerClickPropagation}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Imagem do Token ${tokenName}`}
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#111218] text-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <Image className="h-5 w-5 text-indigo-300" />
            <div>
              <h2 className="text-sm font-semibold">Alterar imagem</h2>
              <p className="text-xs text-zinc-500">{tokenName}</p>
            </div>
          </div>
          <button type="button" aria-label="Fechar" disabled={saving} className="rounded-md p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white disabled:opacity-50" onClick={onCancel}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid max-h-72 grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-5">
            <button
              type="button"
              className={`grid place-items-center gap-2 rounded-lg border p-2 text-center text-xs transition ${selectedAssetPath === null && !customUrl ? 'border-indigo-400 bg-indigo-500/15' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'}`}
              onClick={() => selectAsset(null)}
            >
              <span className="grid aspect-square w-full place-items-center overflow-hidden rounded-full text-lg font-bold text-white">
                <TokenAvatar avatarUrl={null} name={tokenName} fallbackSeed={tokenId} color={selectedColor} />
              </span>
              <span>Sem imagem</span>
            </button>
            {assets.map((asset) => (
              <button
                key={asset.path}
                type="button"
                title={asset.name}
                className={`grid gap-2 rounded-lg border p-2 text-center text-xs transition ${selectedAssetPath === asset.path && !customUrl ? 'border-indigo-400 bg-indigo-500/15' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'}`}
                onClick={() => selectAsset(asset.path)}
              >
                <span className="grid aspect-square w-full place-items-center overflow-hidden rounded-full text-lg font-bold text-zinc-400">
                  <TokenAvatar avatarUrl={asset.path} name={asset.name} color={null} />
                </span>
                <span className="truncate">{asset.name}</span>
              </button>
            ))}
          </div>

          {loading ? <p className="rounded-md border border-white/10 px-3 py-4 text-center text-xs text-zinc-400">Carregando imagens...</p> : null}
          {!loading && !error && !assets.length ? <p className="rounded-md border border-dashed border-white/10 px-3 py-4 text-center text-xs text-zinc-500">Nenhuma imagem encontrada em apps/web/public/tokens.</p> : null}
          {error ? <p role="alert" className="rounded-md border border-red-400/20 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</p> : null}

          <label className="grid gap-1.5 text-xs font-semibold text-zinc-300">
            URL personalizada
            <input
              value={customUrl}
              placeholder="https://..."
              className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm font-normal text-white outline-none focus:border-indigo-400/60"
              onChange={(event) => {
                setCustomUrl(event.target.value)
                setSelectedAssetPath(null)
                setBackgroundEnabled(false)
              }}
            />
          </label>

          <div className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 sm:grid-cols-[auto_1fr] sm:items-center">
            {!hasImage ? (
              <div className="flex items-center gap-2">
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full text-lg font-bold text-white">
                  <TokenAvatar avatarUrl={null} name={tokenName} fallbackSeed={tokenId} color={selectedColor} />
                </span>
                <span className="text-xs text-zinc-500">Letra gerada localmente pelo Token</span>
              </div>
            ) : (
              <label className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <input type="checkbox" checked={backgroundEnabled} className="h-4 w-4 accent-indigo-500" onChange={(event) => setBackgroundEnabled(event.target.checked)} />
                Usar fundo colorido
              </label>
            )}

            {(!hasImage || backgroundEnabled) ? (
              <label className="flex items-center justify-between gap-3 text-xs font-semibold text-zinc-300">
                Cor do fundo
                <input type="color" value={selectedColor} className="h-9 w-14 cursor-pointer rounded border border-white/10 bg-transparent" onChange={(event) => setSelectedColor(event.target.value)} />
              </label>
            ) : (
              <span className="text-xs text-zinc-500">Fundo transparente</span>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-white/10 px-5 py-4">
          {saveError ? <p role="alert" className="mr-auto text-xs text-red-300">{saveError}</p> : null}
          <button type="button" disabled={saving} className="rounded-md px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/10 disabled:opacity-50" onClick={onCancel}>Cancelar</button>
          <button type="button" disabled={saving} className="rounded-md bg-indigo-500 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-400 disabled:opacity-50" onClick={() => void save()}>{saving ? 'Salvando...' : 'Salvar imagem'}</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
