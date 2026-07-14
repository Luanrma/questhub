/**
 * Sugestao de entrada de conjuracao derivada da classe do personagem
 * (.ai/game_systems/pathfinder_2e/spell_casting/specs.md secao 6; expectativa
 * de produto registrada no plano canonico secao 23, item 1).
 *
 * Tabela auditada contra pf2e-master/packs/classes (as 11 classes com slots
 * de classe) e contra as tabelas normativas E.1–E.4 do doc de regras
 * (pathfinder-2e-regras-de-magias-questhub.md, Parte I). Onde a tradicao ou o
 * atributo dependem de uma escolha de jogo real (linhagem do feiticeiro,
 * patrono da bruxa, eidolon do invocador, mente consciente do psiquico), o
 * campo fica `null` e a UI exige a escolha — nunca chutamos um default.
 *
 * Divergencia documentada (regra A.1 do doc normativo): esta tabela e uma
 * copia manual auditada, nao gerada do snapshot — a geracao automatica de
 * progressoes e o item 16 da secao 22 do plano canonico.
 */

export type Pathfinder2eSpellcastingCategorySuggestion = 'PREPARED' | 'SPONTANEOUS'

export type Pathfinder2eCasterClassProfile = {
  classSlug: string
  className: string
  category: Pathfinder2eSpellcastingCategorySuggestion
  /** null = depende de escolha do jogador (linhagem/patrono/eidolon). */
  tradition: 'arcane' | 'divine' | 'occult' | 'primal' | null
  /** null = depende de escolha do jogador (mente consciente do psiquico). */
  ability: 'int' | 'wis' | 'cha' | null
  /**
   * Progressao-base de slots (tabelas E.1–E.3 do doc normativo):
   * 'three' = 3 slots (E.1: destrava com 2 no nivel impar, teto 3 no par) —
   * Mago/Clerigo/Druida/Bruxa/Bardo; 'four' = 4 slots (E.2: destrava com 3,
   * teto 4) — Feiticeiro/Oraculo; 'psychic' = E.3 (destrava com 1, teto 2,
   * 3 truques escolhidos); null = progressao em onda propria (E.4/E.5,
   * magus/summoner/animist) — sem tabela sugerida, o usuario define.
   */
  slotProgression: 'three' | 'four' | 'psychic' | null
}

const CASTER_CLASS_PROFILES: Pathfinder2eCasterClassProfile[] = [
  { classSlug: 'wizard', className: 'Wizard', category: 'PREPARED', tradition: 'arcane', ability: 'int', slotProgression: 'three' },
  { classSlug: 'cleric', className: 'Cleric', category: 'PREPARED', tradition: 'divine', ability: 'wis', slotProgression: 'three' },
  { classSlug: 'druid', className: 'Druid', category: 'PREPARED', tradition: 'primal', ability: 'wis', slotProgression: 'three' },
  { classSlug: 'bard', className: 'Bard', category: 'SPONTANEOUS', tradition: 'occult', ability: 'cha', slotProgression: 'three' },
  { classSlug: 'oracle', className: 'Oracle', category: 'SPONTANEOUS', tradition: 'divine', ability: 'cha', slotProgression: 'four' },
  { classSlug: 'sorcerer', className: 'Sorcerer', category: 'SPONTANEOUS', tradition: null, ability: 'cha', slotProgression: 'four' },
  { classSlug: 'witch', className: 'Witch', category: 'PREPARED', tradition: null, ability: 'int', slotProgression: 'three' },
  { classSlug: 'psychic', className: 'Psychic', category: 'SPONTANEOUS', tradition: 'occult', ability: null, slotProgression: 'psychic' },
  { classSlug: 'magus', className: 'Magus', category: 'PREPARED', tradition: 'arcane', ability: 'int', slotProgression: null },
  { classSlug: 'summoner', className: 'Summoner', category: 'SPONTANEOUS', tradition: null, ability: 'cha', slotProgression: null },
  { classSlug: 'animist', className: 'Animist', category: 'PREPARED', tradition: 'divine', ability: 'wis', slotProgression: null },
]

const PROFILE_BY_SLUG = new Map(CASTER_CLASS_PROFILES.map((profile) => [profile.classSlug, profile]))

/**
 * Aceita tanto o slug puro ('wizard') quanto o id de catalogo do QuestHub
 * ('pf2e:class:wizard').
 */
export function getPathfinder2eCasterClassProfile(classIdOrSlug: string | null | undefined): Pathfinder2eCasterClassProfile | null {
  if (!classIdOrSlug) return null
  const slug = classIdOrSlug.includes(':') ? classIdOrSlug.split(':').pop() ?? '' : classIdOrSlug
  return PROFILE_BY_SLUG.get(slug.toLowerCase()) ?? null
}

export type Pathfinder2eSuggestedSlotRank = { rank: number; max: number }

/**
 * Progressoes-base das tabelas E.1–E.3 do doc normativo: rank r destrava no
 * nivel 2r-1 com `unlock` slots e sobe para `cap` no nivel 2r. Rank 10 so no
 * nivel 19+ (1 slot especial de feature de classe, regra E.6). Truques
 * (rank 0): 5 para 'three'/'four'; 3 escolhidos para 'psychic' (os 3 psi
 * cantrips da mente consciente sao grants fixos adicionais — E.7.5 — e nao
 * entram na capacidade escolhida). Retorna lista vazia para progressao null
 * (conjurador em onda, E.4/E.5).
 */
const SLOT_PROGRESSION_SHAPE = {
  three: { cantrips: 5, unlock: 2, cap: 3 },
  four: { cantrips: 5, unlock: 3, cap: 4 },
  psychic: { cantrips: 3, unlock: 1, cap: 2 },
} as const

export function buildPathfinder2eSuggestedSlots(
  progression: Pathfinder2eCasterClassProfile['slotProgression'],
  level: number,
): Pathfinder2eSuggestedSlotRank[] {
  if (!progression || level < 1) return []

  const shape = SLOT_PROGRESSION_SHAPE[progression]
  const slots: Pathfinder2eSuggestedSlotRank[] = [{ rank: 0, max: shape.cantrips }]

  for (let rank = 1; rank <= 9; rank += 1) {
    const unlockLevel = rank * 2 - 1
    if (level < unlockLevel) break
    slots.push({ rank, max: level >= rank * 2 ? shape.cap : shape.unlock })
  }

  if (level >= 19) slots.push({ rank: 10, max: 1 })

  return slots
}
