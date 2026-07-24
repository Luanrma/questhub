import type { GameSystemContentLocale } from '../../../catalog'

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
  goblin: 'goblin',
  healing: 'cura',
  humanoid: 'humanoide',
  manipulate: 'manipulação',
  mindless: 'sem mente',
  skeleton: 'esqueleto',
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
  armor: 'armadura',
  bow: 'arco',
  cold: 'frio',
  electricity: 'eletricidade',
  fire: 'fogo',
  leather: 'couro',
  light: 'leve',
  martial: 'marcial',
  piercing: 'perfurante',
  slashing: 'cortante',
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
