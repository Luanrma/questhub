import { Lightbulb, Plus, RotateCcw, Save, Trash2, Undo2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { VttPlayerToken } from '../../table/domain/types'
import { normalizeSceneFogConfig, normalizeTokenVisionConfig } from '../domain/config'
import type { FogFixedLightSource, MasterFogViewMode, SceneFogConfig, TokenVisionConfig } from '../domain/types'

export type FogSetupDraft = {
  fogConfig: SceneFogConfig
  fixedLights: FogFixedLightSource[]
  token: { id: string; visionConfig: TokenVisionConfig; blocksVisionAndLight: boolean } | null
}

const fieldClass = 'w-full rounded-md border border-white/10 bg-black/30 px-2 py-1.5 text-xs text-zinc-100'

type FogControlsPanelProps = {
  sceneFog: SceneFogConfig
  fixedLights: FogFixedLightSource[]
  selectedToken: VttPlayerToken | null
  masterMode: MasterFogViewMode
  onMasterModeChange: (mode: MasterFogViewMode) => void
  onPreview: (draft: FogSetupDraft | null) => void
  previewDraft: FogSetupDraft | null
  onApply: (draft: FogSetupDraft) => Promise<void>
  onResetExploration: () => void
  boardCenter: { x: number; y: number }
}

function createDraft(props: Pick<FogControlsPanelProps, 'sceneFog' | 'fixedLights' | 'selectedToken'>): FogSetupDraft {
  const token = props.selectedToken
  return {
    fogConfig: normalizeSceneFogConfig(props.sceneFog),
    fixedLights: props.fixedLights.map((light) => ({
      ...light,
      position: { ...light.position },
      permission: { allowedControllerMemberIds: [...light.permission.allowedControllerMemberIds] },
    })),
    token: token ? {
      id: token.id,
      visionConfig: normalizeTokenVisionConfig(token.visionConfig),
      blocksVisionAndLight: token.blocksVisionAndLight,
    } : null,
  }
}

function mergePreviewPositions(draft: FogSetupDraft, preview: FogSetupDraft | null): FogSetupDraft {
  if (!preview) return draft
  const positions = new Map(preview.fixedLights.map((light) => [light.id, light.position]))
  return {
    ...draft,
    fixedLights: draft.fixedLights.map((light) => {
      const position = positions.get(light.id)
      return position ? { ...light, position: { ...position } } : light
    }),
  }
}

export function FogControlsPanel(props: FogControlsPanelProps) {
  const initialDraft = createDraft(props)
  const [confirmedDraft, setConfirmedDraft] = useState(initialDraft)
  const [draft, setDraft] = useState(initialDraft)
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)
  const { onPreview } = props
  const displayedDraft = mergePreviewPositions(draft, props.previewDraft)
  const positionsChanged = displayedDraft.fixedLights.some((light) => {
    const initial = confirmedDraft.fixedLights.find((candidate) => candidate.id === light.id)
    return !initial || initial.position.x !== light.position.x || initial.position.y !== light.position.y
  })
  const hasChanges = dirty || positionsChanged

  useEffect(() => {
    onPreview(confirmedDraft)
    return () => onPreview(null)
  }, [confirmedDraft, onPreview])

  function change(next: FogSetupDraft) {
    const merged = mergePreviewPositions(next, props.previewDraft)
    setDraft(merged)
    setDirty(true)
    setSaveError(null)
    props.onPreview(merged)
  }

  function updateLights(fixedLights: FogFixedLightSource[]) {
    change({ ...draft, fixedLights })
  }

  function revert() {
    const initial = createDraft({ sceneFog: confirmedDraft.fogConfig, fixedLights: confirmedDraft.fixedLights, selectedToken: props.selectedToken })
    initial.token = confirmedDraft.token ? { ...confirmedDraft.token, visionConfig: { ...confirmedDraft.token.visionConfig } } : null
    setDraft(initial)
    setDirty(false)
    setSaveError(null)
    props.onPreview(initial)
  }

  async function apply() {
    setSaving(true)
    setSaveError(null)
    try {
      const finalDraft = mergePreviewPositions(draft, props.previewDraft)
      await props.onApply(finalDraft)
      setConfirmedDraft(finalDraft)
      setDraft(finalDraft)
      setDirty(false)
      props.onPreview(finalDraft)
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Não foi possível aplicar o setup.')
    } finally {
      setSaving(false)
    }
  }

  return <aside className="pointer-events-auto absolute left-16 top-[76px] z-40 grid max-h-[calc(100vh-100px)] w-[320px] gap-3 overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/95 p-3 text-zinc-100 shadow-2xl backdrop-blur">
    <div className="flex items-center justify-between">
      <div><h2 className="text-sm font-semibold">Fog of War</h2><p className="text-[11px] text-zinc-400">Rascunho local · salve em Aplicar</p></div>
      <label className="flex items-center gap-2 text-xs"><input type="checkbox" checked={draft.fogConfig.enabled} onChange={(event) => change({ ...draft, fogConfig: { ...draft.fogConfig, enabled: event.currentTarget.checked } })} /> Ativo</label>
    </div>

    <label className="flex items-start gap-2 rounded-lg border border-white/10 p-2 text-xs">
      <input className="mt-0.5" type="checkbox" checked={draft.fogConfig.darkness} onChange={(event) => change({ ...draft, fogConfig: { ...draft.fogConfig, darkness: event.currentTarget.checked } })} />
      <span><span className="block font-medium">Escuridão</span><span className="mt-0.5 block text-[10px] leading-relaxed text-zinc-500">Tokens enxergam somente áreas iluminadas dentro do alcance máximo de visão.</span></span>
    </label>

    <label className="grid gap-1 text-[11px] text-zinc-400">Visão do Mestre<select className={fieldClass} value={props.masterMode} onChange={(event) => props.onMasterModeChange(event.currentTarget.value as MasterFogViewMode)}><option value="FULL">Total</option><option value="TRANSLUCENT">FOG translúcido</option><option value="TOKEN_PREVIEW">Prévia do token</option></select></label>

    <section className="grid gap-2 rounded-lg border border-white/10 p-2">
      <div className="flex items-center justify-between"><div className="text-xs font-semibold">Lâmpadas <span className="text-zinc-500">({displayedDraft.fixedLights.length})</span></div><button type="button" className="flex items-center gap-1 rounded border border-white/10 px-2 py-1 text-[10px] hover:bg-white/10" title="Criar lâmpada no centro do mapa" onClick={() => updateLights([...displayedDraft.fixedLights, { id: crypto.randomUUID(), enabled: true, position: props.boardCenter, rangeMeters: 8, permission: { allowedControllerMemberIds: [] } }])}><Plus className="h-3.5 w-3.5" /> Nova</button></div>
      <p className="text-[10px] leading-relaxed text-zinc-500">Cada lâmpada possui apenas alcance. Arraste o ícone pelo cenário.</p>
      {displayedDraft.fixedLights.length > 32 ? <p className="text-[10px] text-amber-300">Mais de 32 lâmpadas: qualidade adaptativa ativa.</p> : null}
      {displayedDraft.fixedLights.map((light, index) => <div key={light.id} className="grid grid-cols-[28px_1fr_28px] items-end gap-2 rounded border border-white/5 p-2">
        <Lightbulb className="mb-2 h-4 w-4 text-amber-300" />
        <label className="grid gap-1 text-[10px] text-zinc-400">Alcance (m)<input className={fieldClass} type="number" min="0.5" value={light.rangeMeters} onChange={(event) => updateLights(displayedDraft.fixedLights.map((item, itemIndex) => itemIndex === index ? { ...item, rangeMeters: Number(event.currentTarget.value) } : item))} /></label>
        <button type="button" className="mb-1 grid h-7 w-7 place-items-center rounded border border-red-400/20 text-red-300 hover:bg-red-500/10" onClick={() => updateLights(displayedDraft.fixedLights.filter((_, itemIndex) => itemIndex !== index))}><Trash2 className="h-3.5 w-3.5" /></button>
      </div>)}
    </section>

    <section className="grid gap-2 rounded-lg border border-white/10 p-2">
      <div className="text-xs font-semibold">Token {props.selectedToken ? `— ${props.selectedToken.name}` : ''}</div>
      {props.selectedToken && draft.token ? <>
        <label className="grid gap-1 text-[10px] text-zinc-400">Alcance da visão 360° (m)<input className={fieldClass} type="number" min="0.5" value={draft.token.visionConfig.rangeMeters} onChange={(event) => change({ ...draft, token: { ...draft.token!, visionConfig: normalizeTokenVisionConfig({ rangeMeters: Number(event.currentTarget.value) }) } })} /></label>
        {props.selectedToken.layer === 'OBJECT' ? <label className="flex items-center gap-2 text-[11px]"><input type="checkbox" checked={draft.token.blocksVisionAndLight} onChange={(event) => change({ ...draft, token: { ...draft.token!, blocksVisionAndLight: event.currentTarget.checked } })} /> Bloqueia visão e luz</label> : null}
      </> : <p className="text-[11px] text-zinc-500">Selecione um token no tabuleiro.</p>}
    </section>

    {saveError ? <p className="rounded border border-red-400/20 bg-red-500/10 px-2 py-1.5 text-[11px] text-red-200">{saveError}</p> : null}
    <div className="grid grid-cols-2 gap-2">
      <button type="button" disabled={!hasChanges || saving} className="flex items-center justify-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10 disabled:opacity-40" onClick={revert}><Undo2 className="h-3.5 w-3.5" /> Reverter</button>
      <button type="button" disabled={!hasChanges || saving} className="flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-500 disabled:opacity-40" onClick={() => void apply()}><Save className="h-3.5 w-3.5" /> {saving ? 'Aplicando...' : 'Aplicar'}</button>
    </div>
    <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-red-400/20 px-3 py-2 text-xs text-red-200 hover:bg-red-500/10" onClick={props.onResetExploration}><RotateCcw className="h-3.5 w-3.5" /> Apagar exploração da cena</button>
  </aside>
}
