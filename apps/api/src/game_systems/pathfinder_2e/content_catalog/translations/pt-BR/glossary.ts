import type {
  GameSystemCatalogDomain,
  GameSystemContentLocale,
} from '../../../../catalog'

export type Pathfinder2eGlossaryCategory =
  | 'trait'
  | 'rarity'
  | 'tradition'
  | 'damage-type'
  | 'effect-kind'
  | 'skill'
  | 'general'

export type Pathfinder2eGlossaryContext = {
  domain: GameSystemCatalogDomain
  category: Pathfinder2eGlossaryCategory
}

type Glossary = Readonly<Record<string, string>>
type DomainGlossary = Readonly<Partial<Record<GameSystemCatalogDomain, Glossary>>>

const SHARED_TRAITS_PT_BR: Glossary = {
  agile: 'ágil',
  animal: 'animal',
  backstabber: 'apunhaladora',
  cantrip: 'truque',
  concentrate: 'concentração',
  'deadly-d10': 'mortal d10',
  finesse: 'acuidade',
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

const TRAITS_BY_DOMAIN_PT_BR: DomainGlossary = {
  BESTIARY: {
    electricity: 'eletricidade',
    force: 'força',
  },
  SPELLS: {
    electricity: 'eletricidade',
    force: 'força',
  },
  ITEMS: {},
}

const SHARED_RARITIES_PT_BR: Glossary = {
  common: 'comum',
  uncommon: 'incomum',
  rare: 'raro',
  unique: 'único',
}

const TRADITIONS_BY_DOMAIN_PT_BR: DomainGlossary = {
  SPELLS: {
    arcane: 'arcana',
    divine: 'divina',
    occult: 'ocultista',
    primal: 'primal',
  },
}

const DAMAGE_TYPES_BY_DOMAIN_PT_BR: DomainGlossary = {
  BESTIARY: {
    cold: 'frio',
    electricity: 'eletricidade',
    fire: 'fogo',
    force: 'força',
    piercing: 'perfurante',
    slashing: 'cortante',
    vitality: 'vitalidade',
  },
  SPELLS: {
    electricity: 'eletricidade',
    force: 'força',
    vitality: 'vitalidade',
  },
  ITEMS: {
    piercing: 'perfurante',
    slashing: 'cortante',
  },
}

const EFFECT_KINDS_BY_DOMAIN_PT_BR: DomainGlossary = {
  SPELLS: {
    damage: 'dano',
    healing: 'cura',
    'damage-or-healing': 'dano ou cura',
  },
}

const SKILLS_BY_DOMAIN_PT_BR: DomainGlossary = {
  BESTIARY: {
    acrobatics: 'acrobacia',
    athletics: 'atletismo',
    nature: 'natureza',
    stealth: 'furtividade',
    survival: 'sobrevivência',
  },
}

const SHARED_TERMS_PT_BR: Glossary = {
  armor: 'armadura',
  bow: 'arco',
  leather: 'couro',
  light: 'leve',
  martial: 'marcial',
  sword: 'espada',
  weapon: 'arma',
}

function translateFromGlossary(
  value: string,
  locale: GameSystemContentLocale,
  shared: Glossary,
  contextual: DomainGlossary,
  domain?: GameSystemCatalogDomain,
) {
  if (locale !== 'pt-BR') return value
  return (domain ? contextual[domain]?.[value] : undefined) ?? shared[value] ?? value
}

function glossaryForCategory(category: Pathfinder2eGlossaryCategory): DomainGlossary {
  if (category === 'trait') return TRAITS_BY_DOMAIN_PT_BR
  if (category === 'tradition') return TRADITIONS_BY_DOMAIN_PT_BR
  if (category === 'damage-type') return DAMAGE_TYPES_BY_DOMAIN_PT_BR
  if (category === 'effect-kind') return EFFECT_KINDS_BY_DOMAIN_PT_BR
  if (category === 'skill') return SKILLS_BY_DOMAIN_PT_BR
  return {}
}

function sharedGlossaryForCategory(category: Pathfinder2eGlossaryCategory): Glossary {
  if (category === 'trait') return SHARED_TRAITS_PT_BR
  if (category === 'rarity') return SHARED_RARITIES_PT_BR
  if (category === 'general') return SHARED_TERMS_PT_BR
  return {}
}

export function translatePathfinder2eGlossaryTerm(
  value: string,
  locale: GameSystemContentLocale,
  context: Pathfinder2eGlossaryContext,
) {
  return translateFromGlossary(
    value,
    locale,
    sharedGlossaryForCategory(context.category),
    glossaryForCategory(context.category),
    context.domain,
  )
}

export function translatePathfinder2eTrait(
  value: string,
  locale: GameSystemContentLocale,
  domain?: GameSystemCatalogDomain,
) {
  return translateFromGlossary(value, locale, SHARED_TRAITS_PT_BR, TRAITS_BY_DOMAIN_PT_BR, domain)
}

export function translatePathfinder2eTraits(
  values: readonly string[],
  locale: GameSystemContentLocale,
  domain?: GameSystemCatalogDomain,
) {
  return values.map((value) => translatePathfinder2eTrait(value, locale, domain))
}

export function translatePathfinder2eRarity(
  value: string,
  locale: GameSystemContentLocale,
  domain?: GameSystemCatalogDomain,
) {
  return translateFromGlossary(value, locale, SHARED_RARITIES_PT_BR, {}, domain)
}

export function translatePathfinder2eTradition(
  value: string,
  locale: GameSystemContentLocale,
  domain: GameSystemCatalogDomain = 'SPELLS',
) {
  return translateFromGlossary(value, locale, {}, TRADITIONS_BY_DOMAIN_PT_BR, domain)
}

export function translatePathfinder2eTerm(
  value: string,
  locale: GameSystemContentLocale,
  context?: Pathfinder2eGlossaryContext,
) {
  if (context) return translatePathfinder2eGlossaryTerm(value, locale, context)
  return translateFromGlossary(value, locale, SHARED_TERMS_PT_BR, {}, undefined)
}
