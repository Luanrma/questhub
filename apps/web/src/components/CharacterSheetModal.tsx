import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, GripHorizontal, Save, X } from 'lucide-react'
import { Button } from './Button'
import { api, ApiError } from '../lib/api'

type GameSystem = 'PATHFINDER_2E'
type ProficiencyRank = 0 | 2 | 4 | 6 | 8

type ProficiencyValue = {
  rank: ProficiencyRank
  value: number
}

type Pathfinder2eSheet = {
  identity: {
    level: number
    ancestry: string
    heritage: string
    background: string
    className: string
  }
  attributes: {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
  }
  hitPoints: {
    maximum: number
    current: number
    temporary: number
    wounded: number
    dying: number
    doomed: number
  }
  armorClass: number
  initiative: number
  perception: ProficiencyValue
  savingThrows: {
    fortitude: ProficiencyValue
    reflex: ProficiencyValue
    will: ProficiencyValue
  }
  notes: string
}

type CharacterSheetEnvelope = {
  system: GameSystem
  version: number
  metadata?: {
    bio?: string | null
  }
  data: {
    pathfinder2e: Pathfinder2eSheet
  }
}

type CharacterSheetResponse = {
  characterId: string
  system: GameSystem | null
  sheet: CharacterSheetEnvelope | null
}

type Props = {
  characterId: string
  characterName: string
  system?: GameSystem | null
  onClose: () => void
  onSaved?: (sheet: CharacterSheetEnvelope) => void
}

type ModalBounds = {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

const PAGE_TITLES = ['Identidade', 'Atributos', 'Proficiências']
const PROFICIENCY_OPTIONS: Array<{ value: ProficiencyRank; label: string }> = [
  { value: 0, label: 'Não treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendário' },
]

const ATTRIBUTE_LABELS: Array<{ key: keyof Pathfinder2eSheet['attributes']; label: string }> = [
  { key: 'strength', label: 'FOR' },
  { key: 'dexterity', label: 'DES' },
  { key: 'constitution', label: 'CON' },
  { key: 'intelligence', label: 'INT' },
  { key: 'wisdom', label: 'SAB' },
  { key: 'charisma', label: 'CAR' },
]

function toInteger(value: string) {
  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

function toBoundedInteger(value: string, min?: number) {
  const parsed = toInteger(value)
  if (min === undefined) return parsed
  return Math.max(min, parsed)
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

function calculateBounds(modal: HTMLDivElement | null): ModalBounds {
  const margin = 12
  const width = modal?.offsetWidth ?? Math.min(window.innerWidth - margin * 2, 860)
  const height = modal?.offsetHeight ?? Math.min(window.innerHeight - margin * 2, 760)

  return {
    minX: margin,
    maxX: Math.max(margin, window.innerWidth - width - margin),
    minY: margin,
    maxY: Math.max(margin, window.innerHeight - height - margin),
  }
}

export function CharacterSheetModal({ characterId, characterName, system, onClose, onSaved }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [page, setPage] = useState(0)
  const [position, setPosition] = useState({ x: 24, y: 24 })
  const [dragging, setDragging] = useState(false)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, modalX: 0, modalY: 0 })
  const [sheet, setSheet] = useState<CharacterSheetEnvelope | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pathfinder2e = sheet?.data.pathfinder2e ?? null
  const canSave = Boolean(sheet && !loading && !saving)

  useEffect(() => {
    let cancelled = false

    async function loadSheet() {
      setLoading(true)
      setError(null)

      try {
        const current = await api<CharacterSheetResponse>(`/api/characters/${characterId}/sheet`)
        if (cancelled) return

        if (current.sheet) {
          setSheet(current.sheet)
          return
        }

        const defaultSystem = current.system ?? system ?? 'PATHFINDER_2E'
        const defaultSheet = await api<CharacterSheetEnvelope>(`/api/character-sheets/systems/${defaultSystem}/default`)
        if (!cancelled) setSheet(defaultSheet)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : 'Não foi possível carregar a ficha.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadSheet()

    return () => {
      cancelled = true
    }
  }, [characterId, system])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return

      const nextX = dragStartRef.current.modalX + event.clientX - dragStartRef.current.pointerX
      const nextY = dragStartRef.current.modalY + event.clientY - dragStartRef.current.pointerY
      const bounds = calculateBounds(modalRef.current)
      setPosition({
        x: clamp(nextX, bounds.minX, bounds.maxX),
        y: clamp(nextY, bounds.minY, bounds.maxY),
      })
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  useEffect(() => {
    function keepInsideViewport() {
      const bounds = calculateBounds(modalRef.current)
      setPosition((current) => ({
        x: clamp(current.x, bounds.minX, bounds.maxX),
        y: clamp(current.y, bounds.minY, bounds.maxY),
      }))
    }

    keepInsideViewport()
    window.addEventListener('resize', keepInsideViewport)

    return () => {
      window.removeEventListener('resize', keepInsideViewport)
    }
  }, [])

  const pageLabel = useMemo(() => `${page + 1}/${PAGE_TITLES.length}`, [page])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      modalX: position.x,
      modalY: position.y,
    }
    setDragging(true)
  }

  function updatePathfinder2e(update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) {
    setSheet((current) => {
      if (!current) return current

      return {
        ...current,
        data: {
          pathfinder2e: update(current.data.pathfinder2e),
        },
      }
    })
  }

  function updateBio(value: string) {
    setSheet((current) => {
      if (!current) return current

      return {
        ...current,
        metadata: {
          ...(current.metadata ?? {}),
          bio: value,
        },
      }
    })
  }

  async function saveSheet() {
    if (!sheet) return

    setSaving(true)
    setError(null)

    try {
      const saved = await api<{ sheet: CharacterSheetEnvelope }>(`/api/characters/${characterId}/sheet`, {
        method: 'PUT',
        body: JSON.stringify(sheet),
      })
      setSheet(saved.sheet)
      onSaved?.(saved.sheet)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Não foi possível salvar a ficha.')
    } finally {
      setSaving(false)
    }
  }

  function numberInput(label: string, value: number, onChange: (value: number) => void, min?: number) {
    return (
      <label className="sheet-field">
        <span>{label}</span>
        <input
          type="number"
          inputMode="numeric"
          step={1}
          min={min}
          value={value}
          onChange={(event) => onChange(toBoundedInteger(event.target.value, min))}
        />
      </label>
    )
  }

  function textInput(label: string, value: string, onChange: (value: string) => void) {
    return (
      <label className="sheet-line-field">
        <span>{label}</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    )
  }

  function proficiencyInput(label: string, value: ProficiencyValue, onChange: (value: ProficiencyValue) => void) {
    return (
      <div className="sheet-proficiency-row">
        <label>
          <span>{label}</span>
          <select
            value={value.rank}
            onChange={(event) => onChange({ ...value, rank: Number(event.target.value) as ProficiencyRank })}
          >
            {PROFICIENCY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        {numberInput('Valor', value.value, (nextValue) => onChange({ ...value, value: nextValue }))}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div
        ref={modalRef}
        className="character-sheet-window"
        style={{ left: position.x, top: position.y }}
      >
        <div
          className="sheet-drag-bar"
          onPointerDown={startDrag}
        >
          <div className="flex min-w-0 items-center gap-3">
            <GripHorizontal className="h-4 w-4 shrink-0" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">{characterName}</div>
              <div className="text-xs">{PAGE_TITLES[page]} · {pageLabel}</div>
            </div>
          </div>
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
            className="sheet-icon-button"
            title="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="sheet-paper">
          <div className="sheet-paper-header">
            <div>
              <div className="sheet-kicker">QuestHub</div>
              <h2>Ficha de Personagem</h2>
            </div>
            <div className="sheet-system-mark">PF2e</div>
          </div>

          {loading ? <div className="sheet-message">Carregando ficha...</div> : null}
          {error ? (
            <div className="sheet-error">
              {error}
            </div>
          ) : null}

          {!loading && pathfinder2e ? (
            <div className="sheet-page">
              {page === 0 ? (
                <>
                  <div className="sheet-identity-grid">
                    {numberInput('Nível', pathfinder2e.identity.level, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        identity: { ...current.identity, level: value },
                      }))
                    }, 1)}
                    {textInput('Classe', pathfinder2e.identity.className, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        identity: { ...current.identity, className: value },
                      }))
                    })}
                    {textInput('Ancestralidade', pathfinder2e.identity.ancestry, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        identity: { ...current.identity, ancestry: value },
                      }))
                    })}
                    {textInput('Herança', pathfinder2e.identity.heritage, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        identity: { ...current.identity, heritage: value },
                      }))
                    })}
                    <div className="sm:col-span-2">
                      {textInput('Background', pathfinder2e.identity.background, (value) => {
                        updatePathfinder2e((current) => ({
                          ...current,
                          identity: { ...current.identity, background: value },
                        }))
                      })}
                    </div>
                  </div>

                  <label className="sheet-box min-h-52">
                    <span className="sheet-box-title">Bio</span>
                    <textarea
                      value={sheet?.metadata?.bio ?? ''}
                      onChange={(event) => updateBio(event.target.value)}
                      maxLength={2000}
                      className="sheet-notes-area min-h-32"
                    />
                  </label>
                </>
              ) : null}

              {page === 1 ? (
                <>
                  <div className="sheet-attributes-row">
                    {ATTRIBUTE_LABELS.map((attribute) => (
                      <label key={attribute.key} className="sheet-attribute-card">
                        <span>{attribute.label}</span>
                        <input
                          type="number"
                          min={1}
                          step={1}
                          value={pathfinder2e.attributes[attribute.key]}
                          onChange={(event) => {
                            updatePathfinder2e((current) => ({
                              ...current,
                              attributes: {
                                ...current.attributes,
                                [attribute.key]: toBoundedInteger(event.target.value, 1),
                              },
                            }))
                          }}
                        />
                      </label>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {numberInput('HP máximo', pathfinder2e.hitPoints.maximum, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, maximum: value } }))
                    }, 0)}
                    {numberInput('HP atual', pathfinder2e.hitPoints.current, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, current: value } }))
                    }, 0)}
                    {numberInput('HP temporário', pathfinder2e.hitPoints.temporary, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, temporary: value } }))
                    }, 0)}
                    {numberInput('Ferido', pathfinder2e.hitPoints.wounded, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, wounded: value } }))
                    }, 0)}
                    {numberInput('Morrendo', pathfinder2e.hitPoints.dying, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, dying: value } }))
                    }, 0)}
                    {numberInput('Condenado', pathfinder2e.hitPoints.doomed, (value) => {
                      updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, doomed: value } }))
                    }, 0)}
                  </div>
                </>
              ) : null}

              {page === 2 ? (
                <>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {numberInput('Classe de Armadura', pathfinder2e.armorClass, (value) => {
                      updatePathfinder2e((current) => ({ ...current, armorClass: value }))
                    }, 0)}
                    {numberInput('Iniciativa', pathfinder2e.initiative, (value) => {
                      updatePathfinder2e((current) => ({ ...current, initiative: value }))
                    })}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {proficiencyInput('Percepção', pathfinder2e.perception, (value) => {
                      updatePathfinder2e((current) => ({ ...current, perception: value }))
                    })}
                    {proficiencyInput('Fortitude', pathfinder2e.savingThrows.fortitude, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        savingThrows: { ...current.savingThrows, fortitude: value },
                      }))
                    })}
                    {proficiencyInput('Reflexos', pathfinder2e.savingThrows.reflex, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        savingThrows: { ...current.savingThrows, reflex: value },
                      }))
                    })}
                    {proficiencyInput('Vontade', pathfinder2e.savingThrows.will, (value) => {
                      updatePathfinder2e((current) => ({
                        ...current,
                        savingThrows: { ...current.savingThrows, will: value },
                      }))
                    })}
                  </div>

                  <label className="sheet-box min-h-52">
                    <span className="sheet-box-title">Notas</span>
                    <textarea
                      value={pathfinder2e.notes}
                      onChange={(event) => updatePathfinder2e((current) => ({ ...current, notes: event.target.value }))}
                      className="sheet-notes-area min-h-32"
                    />
                  </label>
                </>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="sheet-footer">
          <div className="flex gap-2">
            <Button type="button" variant="ghost" className="gap-2 px-3" disabled={page === 0} onClick={() => setPage((current) => Math.max(0, current - 1))}>
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <Button type="button" variant="ghost" className="gap-2 px-3" disabled={page === PAGE_TITLES.length - 1} onClick={() => setPage((current) => Math.min(PAGE_TITLES.length - 1, current + 1))}>
              Próxima
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button type="button" className="gap-2" disabled={!canSave} onClick={saveSheet}>
            <Save className="h-4 w-4" />
            {saving ? 'Salvando...' : 'Salvar ficha'}
          </Button>
        </div>
      </div>
    </div>
  )
}
