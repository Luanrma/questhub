import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Save, Shield, UserRound } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { api, ApiError } from '../../../lib/api'
import {
  ArmorProficiencyField,
  ManualCatalogSelect,
  ManualNumberField,
  ProficiencyEditor,
  SheetSection,
  manualTextareaClass,
} from './components/ManualSheetFields'
import type {
  Pathfinder2eCharacterSheetOptions,
  Pathfinder2eCharacterSheetResponse,
  Pathfinder2eManualCharacterSheet,
  Pathfinder2eProficiencyValue,
} from './types'

const attributeLabels: Array<{ key: keyof Pathfinder2eManualCharacterSheet['attributes']; label: string }> = [
  { key: 'strength', label: 'Forca' },
  { key: 'dexterity', label: 'Destreza' },
  { key: 'constitution', label: 'Constituicao' },
  { key: 'intelligence', label: 'Inteligencia' },
  { key: 'wisdom', label: 'Sabedoria' },
  { key: 'charisma', label: 'Carisma' },
]

const savingThrowLabels: Array<{ key: keyof Pathfinder2eManualCharacterSheet['savingThrows']; label: string }> = [
  { key: 'fortitude', label: 'Fortitude' },
  { key: 'reflex', label: 'Reflexos' },
  { key: 'will', label: 'Vontade' },
]

const skillLabels: Array<{ key: keyof Pathfinder2eManualCharacterSheet['skills']; label: string }> = [
  { key: 'acrobatics', label: 'Acrobacia' },
  { key: 'arcana', label: 'Arcanismo' },
  { key: 'athletics', label: 'Atletismo' },
  { key: 'crafting', label: 'Manufatura' },
  { key: 'deception', label: 'Enganacao' },
  { key: 'diplomacy', label: 'Diplomacia' },
  { key: 'intimidation', label: 'Intimidacao' },
  { key: 'medicine', label: 'Medicina' },
  { key: 'nature', label: 'Natureza' },
  { key: 'occultism', label: 'Ocultismo' },
  { key: 'performance', label: 'Performance' },
  { key: 'religion', label: 'Religiao' },
  { key: 'society', label: 'Sociedade' },
  { key: 'stealth', label: 'Furtividade' },
  { key: 'survival', label: 'Sobrevivencia' },
  { key: 'thievery', label: 'Ladroagem' },
]

const armorLabels: Array<{ key: keyof Pathfinder2eManualCharacterSheet['armorProficiencies']; label: string }> = [
  { key: 'unarmored', label: 'Sem armadura' },
  { key: 'light', label: 'Armadura leve' },
  { key: 'medium', label: 'Armadura media' },
  { key: 'heavy', label: 'Armadura pesada' },
]

export function Pathfinder2eCharacterSheetPage() {
  const navigate = useNavigate()
  const { characterId } = useParams()
  const [response, setResponse] = useState<Pathfinder2eCharacterSheetResponse | null>(null)
  const [options, setOptions] = useState<Pathfinder2eCharacterSheetOptions | null>(null)
  const [sheet, setSheet] = useState<Pathfinder2eManualCharacterSheet | null>(null)
  const [savedSnapshot, setSavedSnapshot] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savedMessage, setSavedMessage] = useState<string | null>(null)

  const dirty = useMemo(() => Boolean(sheet && JSON.stringify(sheet) !== savedSnapshot), [savedSnapshot, sheet])

  useEffect(() => {
    if (!characterId) return
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [sheetResponse, sheetOptions] = await Promise.all([
          api<Pathfinder2eCharacterSheetResponse>(`/api/characters/${characterId}/pathfinder-2e-sheet`),
          api<Pathfinder2eCharacterSheetOptions>('/api/game-systems/pathfinder-2e/character-sheet/options'),
        ])
        if (cancelled) return
        setResponse(sheetResponse)
        setOptions(sheetOptions)
        setSheet(sheetResponse.sheet.data)
        setSavedSnapshot(JSON.stringify(sheetResponse.sheet.data))
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : 'Nao foi possivel carregar a ficha.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [characterId])

  async function save() {
    if (!characterId || !sheet || saving) return
    setSaving(true)
    setError(null)
    setSavedMessage(null)
    try {
      await api(`/api/characters/${characterId}/pathfinder-2e-sheet`, {
        method: 'PUT',
        body: JSON.stringify({ data: sheet }),
      })
      setSavedSnapshot(JSON.stringify(sheet))
      setSavedMessage('Ficha salva.')
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Nao foi possivel salvar a ficha.')
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

  if (!sheet || !options || !response) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => navigate('/characters')} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Button>
        <div className="rounded-xl border border-red-300/20 bg-red-500/10 p-5 text-sm text-red-100">
          {error ?? 'Ficha indisponivel.'}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5 pb-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button variant="ghost" onClick={() => navigate('/characters')} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Personagens
        </Button>
        <div className="flex items-center gap-3">
          {savedMessage ? <span className="text-sm text-emerald-300">{savedMessage}</span> : null}
          <Button onClick={save} disabled={!dirty || saving} className="gap-2">
            <Save className="h-4 w-4" /> {saving ? 'Salvando...' : 'Salvar ficha'}
          </Button>
        </div>
      </div>

      <header className="rounded-xl border border-indigo-300/15 bg-gradient-to-br from-indigo-500/10 to-white/5 p-5">
        <div className="flex items-center gap-4">
          {response.character.avatarUrl ? (
            <img src={response.character.avatarUrl} alt="" className="h-16 w-16 rounded-full border border-white/15 object-cover" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/20 text-zinc-300">
              <UserRound className="h-8 w-8" />
            </div>
          )}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Pathfinder 2e</div>
            <h1 className="text-2xl font-semibold text-white">{response.character.name}</h1>
            <p className="mt-1 text-sm text-zinc-400">Todos os valores abaixo sao informados manualmente.</p>
          </div>
        </div>
      </header>

      {error ? (
        <div className="rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div>
      ) : null}

      <SheetSection title="Identidade" description="Os cinco catalogos exibem somente nomes e nao alteram outros campos da ficha.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ManualNumberField
            label="Nivel"
            value={sheet.identity.level}
            min={1}
            max={20}
            onChange={(level) => setSheet({ ...sheet, identity: { ...sheet.identity, level } })}
          />
          <ManualCatalogSelect
            label="Ancestralidade"
            value={sheet.identity.ancestry}
            options={options.ancestries}
            onChange={(ancestry) => setSheet({ ...sheet, identity: { ...sheet.identity, ancestry } })}
          />
          <ManualCatalogSelect
            label="Heranca"
            value={sheet.identity.heritage}
            options={options.heritages}
            onChange={(heritage) => setSheet({ ...sheet, identity: { ...sheet.identity, heritage } })}
          />
          <ManualCatalogSelect
            label="Background"
            value={sheet.identity.background}
            options={options.backgrounds}
            onChange={(background) => setSheet({ ...sheet, identity: { ...sheet.identity, background } })}
          />
          <ManualCatalogSelect
            label="Classe"
            value={sheet.identity.class}
            options={options.classes}
            onChange={(className) => setSheet({ ...sheet, identity: { ...sheet.identity, class: className } })}
          />
          <ManualCatalogSelect
            label="Divindade"
            value={sheet.identity.deity}
            options={options.deities}
            onChange={(deity) => setSheet({ ...sheet, identity: { ...sheet.identity, deity } })}
          />
        </div>
      </SheetSection>

      <SheetSection title="Progressao e movimento">
        <div className="grid gap-4 sm:grid-cols-3">
          <ManualNumberField
            label="EXP atual"
            value={sheet.general.experience.current}
            min={0}
            onChange={(current) => setSheet({
              ...sheet,
              general: { ...sheet.general, experience: { ...sheet.general.experience, current } },
            })}
          />
          <ManualNumberField
            label="EXP para o proximo nivel"
            value={sheet.general.experience.nextLevel}
            min={0}
            onChange={(nextLevel) => setSheet({
              ...sheet,
              general: { ...sheet.general, experience: { ...sheet.general.experience, nextLevel } },
            })}
          />
          <ManualNumberField
            label="Movimento em metros"
            value={sheet.general.movementMeters}
            min={0}
            step={0.5}
            onChange={(movementMeters) => setSheet({ ...sheet, general: { ...sheet.general, movementMeters } })}
          />
        </div>
      </SheetSection>

      <SheetSection title="Atributos">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {attributeLabels.map(({ key, label }) => (
            <ManualNumberField
              key={key}
              label={label}
              value={sheet.attributes[key]}
              onChange={(value) => setSheet({ ...sheet, attributes: { ...sheet.attributes, [key]: value } })}
            />
          ))}
        </div>
      </SheetSection>

      <div className="grid gap-5 xl:grid-cols-2">
        <SheetSection title="Vida e sobrevivencia">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ManualNumberField label="Vida maxima" value={sheet.hitPoints.maximum} min={0} onChange={(maximum) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, maximum } })} />
            <ManualNumberField label="Vida atual" value={sheet.hitPoints.current} min={0} onChange={(current) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, current } })} />
            <ManualNumberField label="Vida temporaria" value={sheet.hitPoints.temporary} min={0} onChange={(temporary) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, temporary } })} />
            <ManualNumberField label="Ferido" value={sheet.hitPoints.wounded} min={0} onChange={(wounded) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, wounded } })} />
            <ManualNumberField label="Morrendo" value={sheet.hitPoints.dying} min={0} onChange={(dying) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, dying } })} />
            <ManualNumberField label="Condenado" value={sheet.hitPoints.doomed} min={0} onChange={(doomed) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, doomed } })} />
            <ManualNumberField label="Bonus" value={sheet.hitPoints.bonus} onChange={(bonus) => setSheet({ ...sheet, hitPoints: { ...sheet.hitPoints, bonus } })} />
          </div>
        </SheetSection>

        <SheetSection title="Defesa e iniciativa">
          <div className="grid gap-4 sm:grid-cols-2">
            <ManualNumberField label="Classe de Armadura" value={sheet.armorClass} onChange={(armorClass) => setSheet({ ...sheet, armorClass })} />
            <ManualNumberField label="Iniciativa" value={sheet.initiative} onChange={(initiative) => setSheet({ ...sheet, initiative })} />
          </div>
          <div className="mt-4">
            <ProficiencyEditor label="Percepcao" value={sheet.perception} onChange={(value) => updateProficiency('perception', 'perception', value)} />
          </div>
        </SheetSection>
      </div>

      <SheetSection title="Testes de resistencia">
        <div className="grid gap-3">
          {savingThrowLabels.map(({ key, label }) => (
            <ProficiencyEditor
              key={key}
              label={label}
              value={sheet.savingThrows[key]}
              onChange={(value) => updateProficiency('savingThrows', key, value)}
            />
          ))}
        </div>
      </SheetSection>

      <SheetSection title="Pericias">
        <div className="grid gap-3 xl:grid-cols-2">
          {skillLabels.map(({ key, label }) => (
            <ProficiencyEditor
              key={key}
              label={label}
              value={sheet.skills[key]}
              onChange={(value) => updateProficiency('skills', key, value)}
            />
          ))}
        </div>
      </SheetSection>

      <SheetSection title="Proficiencia com armaduras">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {armorLabels.map(({ key, label }) => (
            <ArmorProficiencyField
              key={key}
              label={label}
              value={sheet.armorProficiencies[key]}
              onChange={(value) => setSheet({
                ...sheet,
                armorProficiencies: { ...sheet.armorProficiencies, [key]: value },
              })}
            />
          ))}
        </div>
      </SheetSection>

      <SheetSection title="Anotacoes">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Texto livre</span>
          <textarea
            className={manualTextareaClass}
            value={sheet.notes}
            maxLength={20_000}
            onChange={(event) => setSheet({ ...sheet, notes: event.target.value })}
          />
        </label>
      </SheetSection>

      <div className="flex justify-end">
        <Button onClick={save} disabled={!dirty || saving} className="gap-2">
          <Shield className="h-4 w-4" /> {saving ? 'Salvando...' : 'Salvar ficha'}
        </Button>
      </div>
    </div>
  )
}
