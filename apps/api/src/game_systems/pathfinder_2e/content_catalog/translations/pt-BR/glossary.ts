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
  aberration: 'aberração',
  adamantine: 'adamantina',
  acid: 'ácido',
  aeon: 'éon',
  agile: 'ágil',
  air: 'ar',
  alchemical: 'alquímico',
  amphibious: 'anfíbio',
  angel: 'anjo',
  animal: 'animal',
  aquatic: 'aquático',
  arcane: 'arcano',
  archon: 'arconte',
  apex: 'ápice',
  artifact: 'artefato',
  astral: 'astral',
  attack: 'ataque',
  'attached-to-shield': 'acoplado a escudo',
  auditory: 'auditivo',
  aura: 'aura',
  automaton: 'autômato',
  backstabber: 'apunhaladora',
  backswing: 'retorno',
  barding: 'barda',
  beast: 'besta',
  bomb: 'bomba',
  brutal: 'brutal',
  bulwark: 'baluarte',
  cantrip: 'truque',
  catfolk: 'povo-gato',
  celestial: 'celestial',
  centaur: 'centauro',
  changeling: 'cambiante',
  clockwork: 'mecanismo',
  cobbled: 'improvisada',
  cold: 'frio',
  'cold-iron': 'ferro frio',
  comfort: 'conforto',
  companion: 'companheiro',
  concealable: 'ocultável',
  concentrate: 'concentração',
  concussive: 'concussiva',
  consumable: 'consumível',
  contact: 'contato',
  construct: 'constructo',
  curse: 'maldição',
  cursed: 'amaldiçoado',
  darkness: 'escuridão',
  death: 'morte',
  'deadly-d10': 'mortal d10',
  detection: 'detecção',
  demon: 'demônio',
  devil: 'diabo',
  dinosaur: 'dinossauro',
  disarm: 'desarmar',
  disease: 'doença',
  divine: 'divino',
  dragon: 'dragão',
  dream: 'sonho',
  downtime: 'recesso',
  dwarf: 'anão',
  earth: 'terra',
  eidolon: 'eidolon',
  electricity: 'eletricidade',
  elemental: 'elemental',
  elf: 'elfo',
  elixir: 'elixir',
  emotion: 'emoção',
  environmental: 'ambiental',
  exploration: 'exploração',
  ethereal: 'etéreo',
  evil: 'maligno',
  expandable: 'expansível',
  extradimensional: 'extradimensional',
  fear: 'medo',
  fey: 'feérico',
  finesse: 'acuidade',
  fire: 'fogo',
  fighter: 'guerreiro',
  fiend: 'ínfero',
  flexible: 'flexível',
  focused: 'focado',
  force: 'força',
  fortune: 'fortuna',
  forceful: 'impetuosa',
  'free-hand': 'mão livre',
  fungus: 'fungo',
  genie: 'gênio',
  ghost: 'fantasma',
  ghoul: 'carniçal',
  giant: 'gigante',
  gnome: 'gnomo',
  goblin: 'goblin',
  grapple: 'agarrar',
  graveknight: 'cavaleiro tumular',
  hag: 'megera',
  halfling: 'halfling',
  hampering: 'dificultador',
  haunt: 'assombração',
  healing: 'cura',
  hobgoblin: 'hobgoblin',
  holy: 'sagrado',
  human: 'humano',
  humanoid: 'humanoide',
  incapacitation: 'incapacitação',
  incorporeal: 'incorpóreo',
  illusion: 'ilusão',
  impulse: 'impulso',
  infused: 'infundido',
  ingested: 'ingerido',
  inhaled: 'inalado',
  injury: 'ferimento',
  intelligent: 'inteligente',
  invested: 'investido',
  kickback: 'coice',
  knockdown: 'derrubar',
  light: 'luz',
  linguistic: 'linguística',
  lizardfolk: 'povo-lagarto',
  magical: 'mágico',
  manipulate: 'manipulação',
  mechanical: 'mecânico',
  mental: 'mental',
  merfolk: 'povo-marinho',
  metal: 'metal',
  mindless: 'sem mente',
  misfortune: 'infortúnio',
  modular: 'modular',
  monk: 'monge',
  monitor: 'monitor',
  morph: 'transformar',
  move: 'mover',
  mummy: 'múmia',
  mutagen: 'mutagênico',
  mutant: 'mutante',
  noisy: 'barulhento',
  nonlethal: 'não letal',
  nymph: 'ninfa',
  occult: 'ocultista',
  olfactory: 'olfativo',
  oil: 'óleo',
  ooze: 'limo',
  overflow: 'transbordamento',
  orc: 'orc',
  parry: 'aparar',
  phantom: 'espectro',
  plant: 'planta',
  polymorph: 'polimorfo',
  poison: 'veneno',
  potion: 'poção',
  precious: 'precioso',
  prediction: 'previsão',
  primal: 'primal',
  propulsive: 'propulsivo',
  protean: 'proteano',
  psychopomp: 'psicopompo',
  radiation: 'radiação',
  'ranged-trip': 'derrubar à distância',
  ratfolk: 'povo-rato',
  razing: 'demolidor',
  reach: 'alcance',
  'reach-10': 'alcance 10 pés',
  'reload-0': 'recarga 0',
  relic: 'relíquia',
  sanctified: 'santificado',
  scroll: 'pergaminho',
  scrying: 'vidência',
  serpentfolk: 'povo-serpente',
  shade: 'sombra',
  shadow: 'sombrio',
  shove: 'empurrar',
  skeleton: 'esqueleto',
  sleep: 'dormir',
  snare: 'laço',
  sonic: 'sônico',
  soulbound: 'vinculado à alma',
  splash: 'respingo',
  spellshape: 'moldagem de magia',
  spirit: 'espírito',
  sprite: 'sprite',
  staff: 'cajado',
  stance: 'postura',
  structure: 'estrutura',
  subtle: 'sutil',
  summon: 'invocação',
  summoned: 'invocado',
  sweep: 'varredura',
  swarm: 'enxame',
  talisman: 'talismã',
  teleportation: 'teletransporte',
  tethered: 'amarrado',
  thrown: 'arremesso',
  time: 'tempo',
  titan: 'titã',
  trap: 'armadilha',
  trip: 'derrubar',
  troll: 'troll',
  troop: 'tropa',
  twin: 'gêmeo',
  unarmed: 'desarmado',
  undead: 'morto-vivo',
  unholy: 'profano',
  vampire: 'vampiro',
  virulent: 'virulento',
  visual: 'visual',
  vitality: 'vitalidade',
  void: 'vazio',
  wand: 'varinha',
  water: 'água',
  werecreature: 'metamorfo',
  wight: 'infausto',
  wood: 'madeira',
  wraith: 'aparição',
  zombie: 'zumbi',
}

const PRESERVED_TRAITS_PT_BR = new Set([
  'aesir',
  'agathion',
  'aiuvarin',
  'ardande',
  'asura',
  'azarketi',
  'azata',
  'boggard',
  'bugbear',
  'caligni',
  'couatl',
  'daemon',
  'darvakka',
  'dero',
  'dhampir',
  'div',
  'dragonblood',
  'dromaar',
  'duergar',
  'duskwalker',
  'fetchling',
  'girtablilu',
  'gremlin',
  'grioth',
  'jotunborn',
  'kami',
  'kholo',
  'kitsune',
  'kobold',
  'leshy',
  'locathah',
  'maftet',
  'munavri',
  'naari',
  'nagaji',
  'nephilim',
  'oni',
  'oread',
  'qlippoth',
  'rakshasa',
  'sahkil',
  'samsaran',
  'sedacthy',
  'strix',
  'suli',
  'sylph',
  'tane',
  'talos',
  'tanggal',
  'tanuki',
  'tengu',
  'tripkee',
  'undine',
  'urdefhan',
  'vanara',
  'velstrac',
  'vishkanya',
  'wayang',
  'wyrwood',
  'xulgath',
])

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
    bludgeoning: 'contundente',
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
    fire: 'fogo',
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
    crafting: 'ofício',
    diplomacy: 'diplomacia',
    intimidation: 'intimidação',
    nature: 'natureza',
    perception: 'percepção',
    stealth: 'furtividade',
    survival: 'sobrevivência',
    thievery: 'ladinagem',
  },
}

const SHARED_TERMS_PT_BR: Glossary = {
  'adventuring-gear': 'equipamento de aventura',
  armor: 'armadura',
  bow: 'arco',
  equipment: 'equipamento',
  heavy: 'pesada',
  leather: 'couro',
  light: 'leve',
  martial: 'marcial',
  plate: 'placas',
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

function translateParameterizedTrait(value: string) {
  const diceTrait = value.match(/^(deadly|fatal|jousting|two-hand)-((?:\d+)?d\d+)$/)
  if (diceTrait) {
    const labels: Readonly<Record<string, string>> = {
      deadly: 'mortal',
      fatal: 'fatal',
      jousting: 'justa',
      'two-hand': 'duas mãos',
    }
    return `${labels[diceTrait[1]]} ${diceTrait[2]}`
  }

  const distanceTrait = value.match(/^(reach|thrown|volley)-(\d+)$/)
  if (distanceTrait) {
    const labels: Readonly<Record<string, string>> = {
      reach: 'alcance',
      thrown: 'arremesso',
      volley: 'saraivada',
    }
    return `${labels[distanceTrait[1]]} ${distanceTrait[2]} pés`
  }

  const capacityTrait = value.match(/^capacity-(\d+)$/)
  if (capacityTrait) return `capacidade ${capacityTrait[1]}`

  const scatterTrait = value.match(/^scatter-(\d+)$/)
  if (scatterTrait) return `dispersão ${scatterTrait[1]} pés`

  const reloadTrait = value.match(/^reload-(\d+)$/)
  if (reloadTrait) return `recarga ${reloadTrait[1]}`

  const versatileTrait = value.match(/^versatile-([bps])$/)
  if (versatileTrait) {
    const damageTypes: Readonly<Record<string, string>> = {
      b: 'contundente',
      p: 'perfurante',
      s: 'cortante',
    }
    return `versátil ${damageTypes[versatileTrait[1]]}`
  }

  return undefined
}

export function hasPathfinder2eTraitTranslation(
  value: string,
  domain?: GameSystemCatalogDomain,
) {
  return SHARED_TRAITS_PT_BR[value] !== undefined
    || (domain !== undefined && TRAITS_BY_DOMAIN_PT_BR[domain]?.[value] !== undefined)
    || PRESERVED_TRAITS_PT_BR.has(value)
    || translateParameterizedTrait(value) !== undefined
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
  if (locale !== 'pt-BR') return value

  return (domain ? TRAITS_BY_DOMAIN_PT_BR[domain]?.[value] : undefined)
    ?? SHARED_TRAITS_PT_BR[value]
    ?? translateParameterizedTrait(value)
    ?? value
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
