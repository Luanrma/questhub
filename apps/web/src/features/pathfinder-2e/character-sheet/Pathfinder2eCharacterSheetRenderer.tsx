import { useEffect, useMemo, useState } from 'react'
import { Save, UserRound } from 'lucide-react'
import { Button } from '../../../components/Button'
import { api, ApiError } from '../../../lib/api'
import {
  readStoredPathfinder2eDisplaySettings,
  subscribeToPathfinder2eDisplaySettings,
} from './infrastructure/pathfinder2eDisplaySettingsStorage'
import {
  ArmorProficiencyField,
  DerivedNumberField,
  ManualCatalogSelect,
  ManualNumberField,
  ProficiencyEditor,
  SheetSection,
  manualTextareaClass,
} from './components/ManualSheetFields'
import { CharacterSheetAppendix } from './components/CharacterSheetAppendix'
import { Pathfinder2eCharacterSpellsPanel } from './Pathfinder2eCharacterSpellsPanel'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eCharacterSheetOptions,
  Pathfinder2eCharacterSheetResponse,
  Pathfinder2eDerivedCharacterSheet,
  Pathfinder2eProficiencyValue,
  Pathfinder2eResolvedCharacterSheet,
} from './types'

export type Pathfinder2eCharacterSheetPage = 'identity' | 'statistics' | 'skills' | 'spells' | 'notes'

type Props = {
  campaignId: string
  sheetId: string
  activePage: Pathfinder2eCharacterSheetPage
}

const attributeLabels: Array<{ key: keyof Pathfinder2eCharacterSheetData['attributes']; label: string }> = [
  { key: 'strength', label: 'Força' },
  { key: 'dexterity', label: 'Destreza' },
  { key: 'constitution', label: 'Constituição' },
  { key: 'intelligence', label: 'Inteligência' },
  { key: 'wisdom', label: 'Sabedoria' },
  { key: 'charisma', label: 'Carisma' },
]

const skillLabels: Array<{ key: keyof Pathfinder2eCharacterSheetData['skills']; label: string }> = [
  { key: 'acrobatics', label: 'Acrobacia' },
  { key: 'arcana', label: 'Arcanismo' },
  { key: 'athletics', label: 'Atletismo' },
  { key: 'crafting', label: 'Manufatura' },
  { key: 'deception', label: 'Enganação' },
  { key: 'diplomacy', label: 'Diplomacia' },
  { key: 'intimidation', label: 'Intimidação' },
  { key: 'medicine', label: 'Medicina' },
  { key: 'nature', label: 'Natureza' },
  { key: 'occultism', label: 'Ocultismo' },
  { key: 'performance', label: 'Performance' },
  { key: 'religion', label: 'Religião' },
  { key: 'society', label: 'Sociedade' },
  { key: 'stealth', label: 'Furtividade' },
  { key: 'survival', label: 'Sobrevivência' },
  { key: 'thievery', label: 'Ladroagem' },
]

const armorLabels: Array<{ key: keyof Pathfinder2eCharacterSheetData['armorProficiencies']; label: string }> = [
  { key: 'unarmored', label: 'Sem armadura' },
  { key: 'light', label: 'Armadura leve' },
  { key: 'medium', label: 'Armadura média' },
  { key: 'heavy', label: 'Armadura pesada' },
]

export function Pathfinder2eCharacterSheetRenderer({ campaignId, sheetId, activePage }: Props) {
  const [response, setResponse] = useState<Pathfinder2eCharacterSheetResponse | null>(null)
  const [options, setOptions] = useState<Pathfinder2eCharacterSheetOptions | null>(null)
  const [sheet, setSheet] = useState<Pathfinder2eCharacterSheetData | null>(null)
  const [derived, setDerived] = useState<Pathfinder2eDerivedCharacterSheet | null>(null)
  const [warnings, setWarnings] = useState<string[]>([])
  const [savedSnapshot, setSavedSnapshot] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deriving, setDeriving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [contentLocale, setContentLocale] = useState<'pt-BR' | 'en-US'>(
    () => readStoredPathfinder2eDisplaySettings(campaignId).contentLocale,
  )

  const sheetEndpoint = useMemo(
    () => `/api/campaigns/${campaignId}/character-sheets/${sheetId}/pathfinder-2e`,
    [campaignId, sheetId],
  )
  const dirty = useMemo(
    () => Boolean(sheet && JSON.stringify(sheet) !== savedSnapshot),
    [savedSnapshot, sheet],
  )
  const compatibleHeritages = options && sheet?.identity.ancestry
    ? options.heritages.filter((heritage) => (
      heritage.compatibility.versatile
      || heritage.compatibility.ancestry === sheet.identity.ancestry
    ))
    : []

  useEffect(() => {
    return subscribeToPathfinder2eDisplaySettings(
      campaignId,
      (settings) => setContentLocale(settings.contentLocale),
    )
  }, [campaignId])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [sheetResponse, sheetOptions] = await Promise.all([
          api<Pathfinder2eCharacterSheetResponse>(sheetEndpoint),
          api<Pathfinder2eCharacterSheetOptions>('/api/game-systems/pathfinder-2e/character-sheet/options'),
        ])
        if (cancelled) return
        setResponse(sheetResponse)
        setOptions(sheetOptions)
        setSheet(sheetResponse.sheet.data)
        setDerived(sheetResponse.sheet.derived)
        setWarnings(sheetResponse.sheet.warnings)
        setSavedSnapshot(JSON.stringify(sheetResponse.sheet.data))
      } catch (cause) {
        if (cancelled) return
        setError(cause instanceof ApiError ? cause.message : 'Não foi possível carregar a ficha.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [sheetEndpoint])

  useEffect(() => {
    if (!sheet || loading) return
    let cancelled = false
    const timeout = window.setTimeout(async () => {
      setDeriving(true)
      try {
        const preview = await api<Pathfinder2eResolvedCharacterSheet>(
          `${sheetEndpoint}/derive`,
          {
            method: 'POST',
            body: JSON.stringify({ data: sheet }),
          },
        )
        if (cancelled) return
        setDerived(preview.derived)
        setWarnings(preview.warnings)
      } catch (cause) {
        if (!cancelled) {
          setError(cause instanceof ApiError ? cause.message : 'Não foi possível recalcular a ficha.')
        }
      } finally {
        if (!cancelled) setDeriving(false)
      }
    }, 180)

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
    }
  }, [loading, sheet, sheetEndpoint])

  function updateAncestry(ancestry: string) {
    setSheet((current) => {
      if (!current) return current
      const selectedHeritage = options?.heritages.find(
        (heritage) => heritage.value === current.identity.heritage,
      )
      const heritageRemainsCompatible = Boolean(ancestry) && (
        !selectedHeritage
        || selectedHeritage.compatibility.versatile
        || selectedHeritage.compatibility.ancestry === ancestry
      )

      return {
        ...current,
        identity: {
          ...current.identity,
          ancestry,
          heritage: heritageRemainsCompatible ? current.identity.heritage : '',
        },
      }
    })
  }

  async function save() {
    if (!sheet || saving) return
    setSaving(true)
    setError(null)
    setSavedMessage(null)
    try {
      const saved = await api<Pathfinder2eResolvedCharacterSheet>(
        sheetEndpoint,
        {
          method: 'PUT',
          body: JSON.stringify({ data: sheet }),
        },
      )
      setSheet(saved.data)
      setDerived(saved.derived)
      setWarnings(saved.warnings)
      setSavedSnapshot(JSON.stringify(saved.data))
      setSavedMessage('Ficha salva e recalculada.')
    } catch (cause) {
      setError(cause instanceof ApiError ? cause.message : 'Não foi possível salvar a ficha.')
    } finally {
      setSaving(false)
    }
  }

  function updateProficiency(
    group: 'perception' | 'savingThrows' | 'skills',
    key: string,
    value: Pathfinder2eProficiencyValue,
  ) {
    setSheet((current) => {
      if (!current) return current
      if (group === 'perception') return { ...current, perception: value }
      if (group === 'savingThrows') {
        return {
          ...current,
          savingThrows: { ...current.savingThrows, [key]: value },
        }
      }
      return {
        ...current,
        skills: { ...current.skills, [key]: value },
      }
    })
  }

  if (loading) {
    return <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">Carregando ficha...</div>
  }

  if (!sheet || !derived || !options || !response) {
    return (
      <div className="rounded-xl border border-red-300/20 bg-red-500/10 p-5 text-sm text-red-100">
        {error ?? 'Ficha indisponível.'}
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-6">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-300/15 bg-indigo-500/10 p-4">
        <div className="flex min-w-0 items-center gap-3">
          {response.metadata.avatarUrl ? (
            <img src={response.metadata.avatarUrl} alt="" className="h-12 w-12 rounded-full border border-white/15 object-cover" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-zinc-300">
              <UserRound className="h-6 w-6" />
            </div>
          )}
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Pathfinder 2e</div>
            <h2 className="truncate text-lg font-semibold text-white">{response.metadata.name}</h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {deriving ? <span className="text-xs text-indigo-200">Recalculando...</span> : null}
          {savedMessage ? <span className="text-xs text-emerald-300">{savedMessage}</span> : null}
          <Button onClick={save} disabled={!dirty || saving} className="gap-2">
            <Save className="h-4 w-4" /> {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </header>

      <div className="grid items-start gap-4 md:grid-cols-[minmax(250px,280px)_minmax(0,1fr)]">
        <CharacterSheetAppendix
          sheet={sheet}
          derived={derived}
          onHitPointsChange={({ current, temporary }) => setSheet({
            ...sheet,
            hitPoints: { ...sheet.hitPoints, current, temporary },
          })}
          onArmorClassBonusChange={(bonus) => setSheet({ ...sheet, armorClass: { bonus } })}
          onInitiativeBonusChange={(bonus) => setSheet({ ...sheet, initiative: { bonus } })}
          onProficiencyChange={updateProficiency}
          onDefensesChange={(defenses) => setSheet({ ...sheet, defenses })}
        />

        <main className="min-w-0 space-y-4">
          {error ? <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}
          {warnings.length > 0 ? (
            <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
              {warnings.map((warning) => <div key={warning}>{warning}</div>)}
            </div>
          ) : null}

      {activePage === 'identity' ? (
        <>
          <SheetSection title="Identidade" description="A campanha determina o sistema; a ficha pode existir sem Player, NPC ou Token atribuído.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <ManualNumberField label="Nível" value={sheet.identity.level} min={1} max={20} onChange={(level) => setSheet({ ...sheet, identity: { ...sheet.identity, level } })} />
              <ManualCatalogSelect label="Ancestralidade" value={sheet.identity.ancestry} options={options.ancestries} locale={contentLocale} onChange={updateAncestry} />
              <ManualCatalogSelect label="Herança" value={sheet.identity.heritage} options={compatibleHeritages} locale={contentLocale} onChange={(heritage) => setSheet({ ...sheet, identity: { ...sheet.identity, heritage } })} />
              <ManualCatalogSelect label="Antecedente" value={sheet.identity.background} options={options.backgrounds} locale={contentLocale} onChange={(background) => setSheet({ ...sheet, identity: { ...sheet.identity, background } })} />
              <ManualCatalogSelect label="Classe" value={sheet.identity.class} options={options.classes} locale={contentLocale} onChange={(className) => setSheet({ ...sheet, identity: { ...sheet.identity, class: className } })} />
              <ManualCatalogSelect label="Divindade" value={sheet.identity.deity} options={options.deities} locale={contentLocale} onChange={(deity) => setSheet({ ...sheet, identity: { ...sheet.identity, deity } })} />
            </div>
          </SheetSection>
          <SheetSection title="Progressão e movimento">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <ManualNumberField label="EXP atual" value={sheet.general.experience.current} min={0} onChange={(current) => setSheet({ ...sheet, general: { ...sheet.general, experience: { ...sheet.general.experience, current } } })} />
              <ManualNumberField label="EXP para o próximo nível" value={sheet.general.experience.nextLevel} min={0} onChange={(nextLevel) => setSheet({ ...sheet, general: { ...sheet.general, experience: { ...sheet.general.experience, nextLevel } } })} />
              <ManualNumberField label="Movimento manual (0 = ancestralidade)" value={sheet.general.movementMeters} min={0} step={0.5} onChange={(movementMeters) => setSheet({ ...sheet, general: { ...sheet.general, movementMeters } })} />
              <DerivedNumberField
                label="Movimento efetivo (m)"
                value={derived.movement.valueMeters}
                detail={derived.movement.manualOverride
                  ? 'Valor manual'
                  : `${derived.movement.ancestryBaseFeet} pés da Ancestralidade`}
              />
            </div>
          </SheetSection>
        </>
      ) : null}

      {activePage === 'statistics' ? (
        <>
          <SheetSection title="Modificadores de atributo">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {attributeLabels.map(({ key, label }) => (
                <ManualNumberField key={key} label={label} value={sheet.attributes[key]} min={-20} max={20} onChange={(value) => setSheet({ ...sheet, attributes: { ...sheet.attributes, [key]: value } })} />
              ))}
            </div>
          </SheetSection>
          <SheetSection title="Estados de sobrevivência" description="Os pontos de vida e as defesas principais ficam no apêndice de consulta rápida.">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <ManualNumberField label="Ferido" value={sheet.hitPoints.wounded} min={0} onChange={(wounded) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, wounded } })} />
                <ManualNumberField label="Morrendo" value={sheet.hitPoints.dying} min={0} onChange={(dying) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, dying } })} />
                <ManualNumberField label="Condenado" value={sheet.hitPoints.doomed} min={0} onChange={(doomed) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, doomed } })} />
                <ManualNumberField label="Bônus de PV" value={sheet.hitPoints.bonus} onChange={(bonus) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, bonus } })} />
              </div>
          </SheetSection>
        </>
      ) : null}

      {activePage === 'skills' ? (
        <>
          <SheetSection title="Perícias" description="O atributo correto é aplicado automaticamente a cada perícia.">
            <div className="grid gap-3 xl:grid-cols-2">
              {skillLabels.map(({ key, label }) => (
                <ProficiencyEditor
                  key={key}
                  label={label}
                  value={sheet.skills[key]}
                  total={derived.skills[key].value}
                  effectiveRank={derived.skills[key].effectiveRank}
                  grantSources={derived.skills[key].grantSources}
                  onChange={(value) => updateProficiency('skills', key, value)}
                />
              ))}
            </div>
          </SheetSection>
          <SheetSection title="Proficiência com armaduras" description="Somente Sem armadura participa da CA neste recorte.">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {armorLabels.map(({ key, label }) => (
                <ArmorProficiencyField
                  key={key}
                  label={label}
                  value={sheet.armorProficiencies[key]}
                  effectiveRank={derived.armorProficiencies[key].effectiveRank}
                  onChange={(value) => setSheet({ ...sheet, armorProficiencies: { ...sheet.armorProficiencies, [key]: value } })}
                />
              ))}
            </div>
          </SheetSection>
        </>
      ) : null}

      {activePage === 'notes' ? (
        <SheetSection title="Anotações">
          <label className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Texto livre</span>
            <textarea className={manualTextareaClass} value={sheet.notes} maxLength={20_000} onChange={(event) => setSheet({ ...sheet, notes: event.target.value })} />
          </label>
        </SheetSection>
      ) : null}
          {activePage === 'spells' ? (
            <Pathfinder2eCharacterSpellsPanel campaignId={campaignId} sheetId={sheetId} />
          ) : null}
        </main>
      </div>
    </div>
  )
}
