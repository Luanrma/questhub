import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  Compass,
  Eye,
  Hammer,
  HeartPulse,
  KeyRound,
  Leaf,
  MessageCircle,
  Music,
  Save,
  Shield,
  Skull,
  Sparkles,
  Swords,
  Users,
  Wind,
} from 'lucide-react'
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

const skillLabels: Array<{
  key: keyof Pathfinder2eCharacterSheetData['skills']
  label: string
  attribute: string
  icon: React.ReactNode
}> = [
  { key: 'acrobatics', label: 'Acrobacia', attribute: 'Destreza', icon: <Wind className="h-4 w-4" /> },
  { key: 'arcana', label: 'Arcanismo', attribute: 'Inteligência', icon: <BookOpen className="h-4 w-4" /> },
  { key: 'athletics', label: 'Atletismo', attribute: 'Força', icon: <Swords className="h-4 w-4" /> },
  { key: 'crafting', label: 'Manufatura', attribute: 'Inteligência', icon: <Hammer className="h-4 w-4" /> },
  { key: 'deception', label: 'Enganação', attribute: 'Carisma', icon: <Eye className="h-4 w-4" /> },
  { key: 'diplomacy', label: 'Diplomacia', attribute: 'Carisma', icon: <MessageCircle className="h-4 w-4" /> },
  { key: 'intimidation', label: 'Intimidação', attribute: 'Carisma', icon: <Skull className="h-4 w-4" /> },
  { key: 'medicine', label: 'Medicina', attribute: 'Sabedoria', icon: <HeartPulse className="h-4 w-4" /> },
  { key: 'nature', label: 'Natureza', attribute: 'Sabedoria', icon: <Leaf className="h-4 w-4" /> },
  { key: 'occultism', label: 'Ocultismo', attribute: 'Inteligência', icon: <Sparkles className="h-4 w-4" /> },
  { key: 'performance', label: 'Performance', attribute: 'Carisma', icon: <Music className="h-4 w-4" /> },
  { key: 'religion', label: 'Religião', attribute: 'Sabedoria', icon: <Shield className="h-4 w-4" /> },
  { key: 'society', label: 'Sociedade', attribute: 'Inteligência', icon: <Users className="h-4 w-4" /> },
  { key: 'stealth', label: 'Furtividade', attribute: 'Destreza', icon: <Eye className="h-4 w-4" /> },
  { key: 'survival', label: 'Sobrevivência', attribute: 'Sabedoria', icon: <Compass className="h-4 w-4" /> },
  { key: 'thievery', label: 'Ladroagem', attribute: 'Destreza', icon: <KeyRound className="h-4 w-4" /> },
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
    return <div className="rounded-lg border border-[#8f7d62]/45 bg-[#cfc0a5] p-5 text-sm text-[#5f5240]">Carregando ficha...</div>
  }

  if (!sheet || !derived || !options || !response) {
    return (
      <div className="rounded-lg border border-[#9b4b4b]/35 bg-[#c9a8a0] p-4 text-sm text-[#6f2929]">
        {error ?? 'Ficha indisponível.'}
      </div>
    )
  }

  return (
    <div className="min-w-0 space-y-2.5 text-[#2d271f]">
      <div className="flex min-h-8 flex-wrap items-center justify-end gap-2">
        {deriving ? <span className="text-[10px] uppercase tracking-wide text-[#6f6250]">Recalculando...</span> : null}
        {savedMessage ? <span className="text-[10px] font-medium text-[#45623e]">{savedMessage}</span> : null}
        <button
          type="button"
          onClick={() => void save()}
          disabled={!dirty || saving}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#6d4ac8]/35 bg-[#6d4ac8] px-3 py-1.5 text-xs font-semibold text-[#fff9ef] shadow-sm transition hover:bg-[#5c3eb0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Save className="h-3.5 w-3.5" />
          {saving ? 'Salvando...' : 'Salvar'}
        </button>
      </div>

      <div className="grid min-w-0 items-start gap-2.5 lg:grid-cols-[220px_minmax(0,1fr)]">
        <CharacterSheetAppendix
          name={response.metadata.name}
          avatarUrl={response.metadata.avatarUrl}
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

        <main className="min-w-0 space-y-2.5">
          {error ? <div className="rounded-lg border border-[#9b4b4b]/35 bg-[#c9a8a0] px-3 py-2 text-xs text-[#6f2929]">{error}</div> : null}
          {warnings.length > 0 ? (
            <div className="rounded-lg border border-[#9b7a3e]/35 bg-[#d1bd91] px-3 py-2 text-xs text-[#654f25]">
              {warnings.map((warning) => <div key={warning}>{warning}</div>)}
            </div>
          ) : null}

          {activePage === 'identity' ? (
            <>
              <SheetSection title="Identidade" description="A campanha determina o sistema; a ficha pode existir sem Player, NPC ou Token atribuído.">
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  <ManualNumberField label="Nível" value={sheet.identity.level} min={1} max={20} onChange={(level) => setSheet({ ...sheet, identity: { ...sheet.identity, level } })} />
                  <ManualCatalogSelect label="Ancestralidade" value={sheet.identity.ancestry} options={options.ancestries} locale={contentLocale} onChange={updateAncestry} />
                  <ManualCatalogSelect label="Herança" value={sheet.identity.heritage} options={compatibleHeritages} locale={contentLocale} onChange={(heritage) => setSheet({ ...sheet, identity: { ...sheet.identity, heritage } })} />
                  <ManualCatalogSelect label="Antecedente" value={sheet.identity.background} options={options.backgrounds} locale={contentLocale} onChange={(background) => setSheet({ ...sheet, identity: { ...sheet.identity, background } })} />
                  <ManualCatalogSelect label="Classe" value={sheet.identity.class} options={options.classes} locale={contentLocale} onChange={(className) => setSheet({ ...sheet, identity: { ...sheet.identity, class: className } })} />
                  <ManualCatalogSelect label="Divindade" value={sheet.identity.deity} options={options.deities} locale={contentLocale} onChange={(deity) => setSheet({ ...sheet, identity: { ...sheet.identity, deity } })} />
                </div>
              </SheetSection>
              <SheetSection title="Progressão e movimento">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                  {attributeLabels.map(({ key, label }) => (
                    <ManualNumberField key={key} label={label} value={sheet.attributes[key]} min={-20} max={20} onChange={(value) => setSheet({ ...sheet, attributes: { ...sheet.attributes, [key]: value } })} />
                  ))}
                </div>
              </SheetSection>
              <SheetSection title="Estados de sobrevivência" description="Os pontos de vida e as defesas principais ficam no apêndice de consulta rápida.">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
              <SheetSection title="Perícias" description="Clique em uma perícia para editar grau e bônus. O atributo correto continua sendo aplicado automaticamente.">
                <div className="grid min-w-0 gap-2 lg:grid-cols-2">
                  {skillLabels.map(({ key, label, attribute, icon }) => (
                    <ProficiencyEditor
                      key={key}
                      label={label}
                      attributeLabel={attribute}
                      icon={icon}
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
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756754]">Texto livre</span>
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
