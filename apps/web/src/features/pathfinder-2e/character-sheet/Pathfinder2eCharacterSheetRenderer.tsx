import { useEffect, useMemo, useState } from 'react'
import { Save, UserRound } from 'lucide-react'
import { Button } from '../../../components/Button'
import { api, ApiError } from '../../../lib/api'
import {
  ArmorProficiencyField,
  DerivedNumberField,
  ManualCatalogSelect,
  ManualNumberField,
  ProficiencyEditor,
  SheetSection,
  manualTextareaClass,
} from './components/ManualSheetFields'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eCharacterSheetOptions,
  Pathfinder2eCharacterSheetResponse,
  Pathfinder2eDerivedCharacterSheet,
  Pathfinder2eProficiencyValue,
  Pathfinder2eResolvedCharacterSheet,
} from './types'

export type Pathfinder2eCharacterSheetPage = 'identity' | 'statistics' | 'skills' | 'notes'

type Props = {
  campaignId: string
  characterId: string
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

const savingThrowLabels: Array<{ key: keyof Pathfinder2eCharacterSheetData['savingThrows']; label: string }> = [
  { key: 'fortitude', label: 'Fortitude' },
  { key: 'reflex', label: 'Reflexos' },
  { key: 'will', label: 'Vontade' },
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

export function Pathfinder2eCharacterSheetRenderer({ campaignId, characterId, activePage }: Props) {
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

  const campaignQuery = useMemo(
    () => `?${new URLSearchParams({ campaignId }).toString()}`,
    [campaignId],
  )
  const dirty = useMemo(
    () => Boolean(sheet && JSON.stringify(sheet) !== savedSnapshot),
    [savedSnapshot, sheet],
  )

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [sheetResponse, sheetOptions] = await Promise.all([
          api<Pathfinder2eCharacterSheetResponse>(
            `/api/characters/${characterId}/pathfinder-2e-sheet${campaignQuery}`,
          ),
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
  }, [campaignQuery, characterId])

  useEffect(() => {
    if (!sheet || loading) return
    let cancelled = false
    const timeout = window.setTimeout(async () => {
      setDeriving(true)
      try {
        const preview = await api<Pathfinder2eResolvedCharacterSheet>(
          `/api/characters/${characterId}/pathfinder-2e-sheet/derive${campaignQuery}`,
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
  }, [campaignQuery, characterId, loading, sheet])

  async function save() {
    if (!sheet || saving) return
    setSaving(true)
    setError(null)
    setSavedMessage(null)
    try {
      const saved = await api<Pathfinder2eResolvedCharacterSheet>(
        `/api/characters/${characterId}/pathfinder-2e-sheet${campaignQuery}`,
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

  const hpDetail = `${derived.mechanics.ancestryHitPoints} ancestral + nível × (${derived.mechanics.classHitPointsPerLevel} classe + ${sheet.attributes.constitution} CON) + ${sheet.hitPoints.bonus} bônus`
  const acDetail = `10 + ${derived.armorClass.dexterityModifier} DES + ${derived.armorClass.proficiencyBonus} proficiência + ${derived.armorClass.bonus} bônus`

  return (
    <div className="space-y-4 pb-6">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-indigo-300/15 bg-indigo-500/10 p-4">
        <div className="flex min-w-0 items-center gap-3">
          {response.character.avatarUrl ? (
            <img src={response.character.avatarUrl} alt="" className="h-12 w-12 rounded-full border border-white/15 object-cover" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-zinc-300">
              <UserRound className="h-6 w-6" />
            </div>
          )}
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Pathfinder 2e</div>
            <h2 className="truncate text-lg font-semibold text-white">{response.character.name}</h2>
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

      {error ? <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div> : null}
      {warnings.length > 0 ? (
        <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {warnings.map((warning) => <div key={warning}>{warning}</div>)}
        </div>
      ) : null}

      {activePage === 'identity' ? (
        <>
          <SheetSection title="Identidade" description="A campanha determina o sistema; o Mestre administra esta ficha dentro do mundo.">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <ManualNumberField label="Nível" value={sheet.identity.level} min={1} max={20} onChange={(level) => setSheet({ ...sheet, identity: { ...sheet.identity, level } })} />
              <ManualCatalogSelect label="Ancestralidade" value={sheet.identity.ancestry} options={options.ancestries} onChange={(ancestry) => setSheet({ ...sheet, identity: { ...sheet.identity, ancestry } })} />
              <ManualCatalogSelect label="Herança" value={sheet.identity.heritage} options={options.heritages} onChange={(heritage) => setSheet({ ...sheet, identity: { ...sheet.identity, heritage } })} />
              <ManualCatalogSelect label="Background" value={sheet.identity.background} options={options.backgrounds} onChange={(background) => setSheet({ ...sheet, identity: { ...sheet.identity, background } })} />
              <ManualCatalogSelect label="Classe" value={sheet.identity.class} options={options.classes} onChange={(className) => setSheet({ ...sheet, identity: { ...sheet.identity, class: className } })} />
              <ManualCatalogSelect label="Divindade" value={sheet.identity.deity} options={options.deities} onChange={(deity) => setSheet({ ...sheet, identity: { ...sheet.identity, deity } })} />
            </div>
          </SheetSection>
          <SheetSection title="Progressão e movimento">
            <div className="grid gap-4 sm:grid-cols-3">
              <ManualNumberField label="EXP atual" value={sheet.general.experience.current} min={0} onChange={(current) => setSheet({ ...sheet, general: { ...sheet.general, experience: { ...sheet.general.experience, current } } })} />
              <ManualNumberField label="EXP para o próximo nível" value={sheet.general.experience.nextLevel} min={0} onChange={(nextLevel) => setSheet({ ...sheet, general: { ...sheet.general, experience: { ...sheet.general.experience, nextLevel } } })} />
              <ManualNumberField label="Movimento em metros" value={sheet.general.movementMeters} min={0} step={0.5} onChange={(movementMeters) => setSheet({ ...sheet, general: { ...sheet.general, movementMeters } })} />
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
          <div className="grid gap-4 xl:grid-cols-2">
            <SheetSection title="Vida e sobrevivência">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <DerivedNumberField label="Vida máxima" value={derived.hitPoints.maximum} detail={hpDetail} />
                <ManualNumberField label="Vida atual" value={sheet.hitPoints.current} min={0} onChange={(current) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, current } })} />
                <ManualNumberField label="Vida temporária" value={sheet.hitPoints.temporary} min={0} onChange={(temporary) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, temporary } })} />
                <ManualNumberField label="Ferido" value={sheet.hitPoints.wounded} min={0} onChange={(wounded) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, wounded } })} />
                <ManualNumberField label="Morrendo" value={sheet.hitPoints.dying} min={0} onChange={(dying) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, dying } })} />
                <ManualNumberField label="Condenado" value={sheet.hitPoints.doomed} min={0} onChange={(doomed) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, doomed } })} />
                <ManualNumberField label="Bônus de PV" value={sheet.hitPoints.bonus} onChange={(bonus) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, bonus } })} />
              </div>
            </SheetSection>
            <SheetSection title="Defesa e iniciativa" description="A CA usa defesa sem armadura até a integração com equipamentos.">
              <div className="grid gap-4 sm:grid-cols-2">
                <DerivedNumberField label="Classe de Armadura" value={derived.armorClass.value} detail={acDetail} />
                <ManualNumberField label="Bônus de CA" value={sheet.armorClass.bonus} onChange={(bonus) => setSheet({ ...sheet, armorClass: { bonus } })} />
                <DerivedNumberField label="Iniciativa" value={derived.initiative.value} detail={`Percepção ${derived.initiative.sourceValue} + bônus ${derived.initiative.bonus}`} />
                <ManualNumberField label="Bônus de iniciativa" value={sheet.initiative.bonus} onChange={(bonus) => setSheet({ ...sheet, initiative: { bonus } })} />
              </div>
              <div className="mt-4">
                <ProficiencyEditor label="Percepção" value={sheet.perception} total={derived.perception.value} onChange={(value) => updateProficiency('perception', 'perception', value)} />
              </div>
            </SheetSection>
          </div>
          <SheetSection title="Testes de resistência">
            <div className="grid gap-3">
              {savingThrowLabels.map(({ key, label }) => (
                <ProficiencyEditor key={key} label={label} value={sheet.savingThrows[key]} total={derived.savingThrows[key].value} onChange={(value) => updateProficiency('savingThrows', key, value)} />
              ))}
            </div>
          </SheetSection>
        </>
      ) : null}

      {activePage === 'skills' ? (
        <>
          <SheetSection title="Perícias" description="O atributo correto é aplicado automaticamente a cada perícia.">
            <div className="grid gap-3 xl:grid-cols-2">
              {skillLabels.map(({ key, label }) => (
                <ProficiencyEditor key={key} label={label} value={sheet.skills[key]} total={derived.skills[key].value} onChange={(value) => updateProficiency('skills', key, value)} />
              ))}
            </div>
          </SheetSection>
          <SheetSection title="Proficiência com armaduras" description="Somente Sem armadura participa da CA neste recorte.">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {armorLabels.map(({ key, label }) => (
                <ArmorProficiencyField key={key} label={label} value={sheet.armorProficiencies[key]} onChange={(value) => setSheet({ ...sheet, armorProficiencies: { ...sheet.armorProficiencies, [key]: value } })} />
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
    </div>
  )
}
