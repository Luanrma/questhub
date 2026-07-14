import { useState } from 'react'
import { WandSparkles } from 'lucide-react'
import {
  buildPathfinder2eSuggestedSlots,
  getPathfinder2eCasterClassProfile,
} from '../../../../shared/spellcasting-suggestion'
import { createSpellcastingEntry } from '../domain/spellbookHelpers'
import type { Pathfinder2eSpellcastingEntry } from '../types'

const TRADITION_OPTIONS = ['arcane', 'divine', 'occult', 'primal'] as const
const ABILITY_OPTIONS = ['int', 'cha'] as const

/**
 * Sugestao de entrada de conjuracao derivada da classe do personagem
 * (plano canonico secao 23, item 1). Tradicao/atributo que dependem de
 * escolha real de jogo (linhagem/patrono/mente consciente) viram dropdowns
 * obrigatorios — nunca um default silencioso.
 */
export function SuggestedEntryCard({
  classSelectionId,
  level,
  hasEntries,
  onCreate,
}: {
  classSelectionId: string | null
  level: number
  hasEntries: boolean
  onCreate: (entry: Pathfinder2eSpellcastingEntry) => void
}) {
  const profile = getPathfinder2eCasterClassProfile(classSelectionId)
  const [tradition, setTradition] = useState('')
  const [ability, setAbility] = useState('')

  if (!profile || hasEntries) return null

  const needsTradition = profile.tradition === null
  const needsAbility = profile.ability === null
  const resolvedTradition = profile.tradition ?? tradition
  const resolvedAbility = profile.ability ?? ability
  const canCreate = Boolean(resolvedTradition && resolvedAbility)

  function handleCreate() {
    if (!profile || !canCreate) return
    const entry = createSpellcastingEntry(
      `Conjuracao de ${profile.className}`,
      profile.category,
      resolvedTradition,
      resolvedAbility,
    )
    onCreate({
      ...entry,
      proficiencyRank: 2,
      slots: buildPathfinder2eSuggestedSlots(profile.slotProgression, level),
    })
  }

  return (
    <div className="sheet-build-group">
      <div className="sheet-build-group-title">
        <WandSparkles size={20} strokeWidth={1.7} />
        <strong>{`${profile.className} e uma classe conjuradora`}</strong>
      </div>
      <p>
        {profile.slotProgression
          ? `Criar a entrada de conjuracao sugerida (${profile.category === 'PREPARED' ? 'preparada' : 'espontanea'}, slots pelo nivel ${level})?`
          : `Criar a entrada de conjuracao (${profile.category === 'PREPARED' ? 'preparada' : 'espontanea'})? Esta classe tem progressao propria de slots — configure os slots manualmente depois.`}
      </p>
      <div className="sheet-build-choice-grid">
        {needsTradition ? (
          <label className="sheet-build-choice">
            <span>Tradicao (linhagem/patrono/eidolon)</span>
            <select value={tradition} onChange={(event) => setTradition(event.target.value)}>
              <option value="">Escolha...</option>
              {TRADITION_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        {needsAbility ? (
          <label className="sheet-build-choice">
            <span>Atributo-chave</span>
            <select value={ability} onChange={(event) => setAbility(event.target.value)}>
              <option value="">Escolha...</option>
              {ABILITY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ) : null}
      </div>
      <button type="button" className="sheet-build-apply" disabled={!canCreate} onClick={handleCreate}>
        Criar entrada sugerida
      </button>
    </div>
  )
}
