import type { GameSystemContentLocale } from '../../../../catalog'

const TRAITS_PT_BR: Readonly<Record<string, string>> = {
  agile: 'ágil',
  animal: 'animal',
  backstabber: 'apunhaladora',
  cantrip: 'truque',
  concentrate: 'concentração',
  'deadly-d10': 'mortal d10',
  electricity: 'eletricidade',
  finesse: 'acuidade',
  force: 'força',
  forceful: 'impetuosa',
  goblin: 'goblin',
  healing: 'cura',
  humanoid: 'humanoide',
  knockdown: 'derrubar',
  manipulate: 'manipulação',
  mindless: 'sem mente',
  'reload-0': 'recarga 0',
  skeleton: 'esqueleto',
  sweep: 'varredura',
  unarmed: 'desarmado',
  undead: 'morto-vivo',
  unholy: 'profano',
  vitality: 'vitalidade',
}

const RARITIES_PT_BR: Readonly<Record<string, string>> = {
  common: 'comum',
  uncommon: 'incomum',
  rare: 'raro',
  unique: 'único',
}

const TRADITIONS_PT_BR: Readonly<Record<string, string>> = {
  arcane: 'arcana',
  divine: 'divina',
  occult: 'ocultista',
  primal: 'primal',
}

const TERMS_PT_BR: Readonly<Record<string, string>> = {
  acrobatics: 'acrobacia',
  armor: 'armadura',
  athletics: 'atletismo',
  bow: 'arco',
  cold: 'frio',
  damage: 'dano',
  'damage-or-healing': 'dano ou cura',
  electricity: 'eletricidade',
  fire: 'fogo',
  healing: 'cura',
  leather: 'couro',
  light: 'leve',
  martial: 'marcial',
  nature: 'natureza',
  piercing: 'perfurante',
  slashing: 'cortante',
  stealth: 'furtividade',
  survival: 'sobrevivência',
  sword: 'espada',
  weapon: 'arma',
}

function translateFromGlossary(
  value: string,
  locale: GameSystemContentLocale,
  glossary: Readonly<Record<string, string>>,
) {
  if (locale !== 'pt-BR') return value
  return glossary[value] ?? value
}

export function translatePathfinder2eTrait(value: string, locale: GameSystemContentLocale) {
  return translateFromGlossary(value, locale, TRAITS_PT_BR)
}

export function translatePathfinder2eTraits(values: readonly string[], locale: GameSystemContentLocale) {
  return values.map((value) => translatePathfinder2eTrait(value, locale))
}

export function translatePathfinder2eRarity(value: string, locale: GameSystemContentLocale) {
  return translateFromGlossary(value, locale, RARITIES_PT_BR)
}

export function translatePathfinder2eTradition(value: string, locale: GameSystemContentLocale) {
  return translateFromGlossary(value, locale, TRADITIONS_PT_BR)
}

export function translatePathfinder2eTerm(value: string, locale: GameSystemContentLocale) {
  return translateFromGlossary(value, locale, TERMS_PT_BR)
}
