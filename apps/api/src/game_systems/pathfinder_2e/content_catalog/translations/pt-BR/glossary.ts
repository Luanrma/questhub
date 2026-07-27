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
  adjusted: 'ajustado',
  adjustment: 'ajuste',
  'additive1': 'aditivo 1',
  acid: 'ácido',
  aeon: 'éon',
  agile: 'ágil',
  air: 'ar',
  alchemical: 'alquímico',
  amphibious: 'anfíbio',
  angel: 'anjo',
  animal: 'animal',
  android: 'androide',
  aquadynamic: 'aquadinâmico',
  aquatic: 'aquático',
  arcane: 'arcano',
  archon: 'arconte',
  apex: 'ápice',
  artifact: 'artefato',
  astral: 'astral',
  attack: 'ataque',
  attached: 'acoplado',
  'attached-to-crossbow-or-firearm': 'acoplado a besta ou arma de fogo',
  'attached-to-shield': 'acoplado a escudo',
  auditory: 'auditivo',
  aura: 'aura',
  automaton: 'autômato',
  backstabber: 'apunhaladora',
  backswing: 'retorno',
  barding: 'barda',
  beast: 'besta',
  blight: 'praga',
  bomb: 'bomba',
  'bottled-breath': 'sopro engarrafado',
  brace: 'escorar',
  brutal: 'brutal',
  bulwark: 'baluarte',
  cantrip: 'truque',
  catalyst: 'catalisador',
  catfolk: 'povo-gato',
  celestial: 'celestial',
  censer: 'incensário',
  centaur: 'centauro',
  'certain-kill': 'morte certa',
  changeling: 'cambiante',
  champion: 'campeão',
  clockwork: 'mecanismo',
  cobbled: 'improvisada',
  coda: 'coda',
  cold: 'frio',
  'cold-iron': 'ferro frio',
  comfort: 'conforto',
  companion: 'companheiro',
  combination: 'combinada',
  concealable: 'ocultável',
  concentrate: 'concentração',
  consecration: 'consagração',
  concussive: 'concussiva',
  consumable: 'consumível',
  contact: 'contato',
  contract: 'contrato',
  construct: 'constructo',
  curse: 'maldição',
  cursed: 'amaldiçoado',
  cursebound: 'vinculado à maldição',
  chaotic: 'caótico',
  'critical-fusion': 'fusão crítica',
  darkness: 'escuridão',
  death: 'morte',
  'deadly-d10': 'mortal d10',
  'deflecting-bludgeoning': 'defletor contra dano contundente',
  'deflecting-physical-ranged': 'defletor contra ataques físicos à distância',
  'deflecting-slashing': 'defletor contra dano cortante',
  detection: 'detecção',
  demon: 'demônio',
  devil: 'diabo',
  dinosaur: 'dinossauro',
  disarm: 'desarmar',
  disease: 'doença',
  divine: 'divino',
  dragon: 'dragão',
  dream: 'sonho',
  drug: 'droga',
  'double-barrel': 'cano duplo',
  downtime: 'recesso',
  drow: 'drow',
  dwarf: 'anão',
  earth: 'terra',
  eidolon: 'eidolon',
  electricity: 'eletricidade',
  elemental: 'elemental',
  elf: 'elfo',
  elixir: 'elixir',
  emotion: 'emoção',
  'entrench-melee': 'entrincheirar corpo a corpo',
  'entrench-ranged': 'entrincheirar à distância',
  environmental: 'ambiental',
  exemplar: 'exemplar',
  exploration: 'exploração',
  ethereal: 'etéreo',
  evil: 'maligno',
  expandable: 'expansível',
  extradimensional: 'extradimensional',
  fear: 'medo',
  'fatal-aim-d10': 'mira fatal d10',
  'fatal-aim-d12': 'mira fatal d12',
  fey: 'feérico',
  figurehead: 'figura de proa',
  finesse: 'acuidade',
  good: 'bom',
  fire: 'fogo',
  fighter: 'guerreiro',
  fiend: 'ínfero',
  flexible: 'flexível',
  fleshwarp: 'distorcido',
  flourish: 'floreio',
  foldaway: 'dobrável',
  focused: 'focado',
  force: 'força',
  fortune: 'fortuna',
  forceful: 'impetuosa',
  'free-hand': 'mão livre',
  fungus: 'fungo',
  gadget: 'engenhoca',
  genie: 'gênio',
  geniekin: 'geniekin',
  ghost: 'fantasma',
  ghoul: 'carniçal',
  giant: 'gigante',
  gnome: 'gnomo',
  goblin: 'goblin',
  golem: 'golem',
  grapple: 'agarrar',
  graft: 'enxerto',
  graveknight: 'cavaleiro tumular',
  general: 'geral',
  grimoire: 'grimório',
  herald: 'arauto',
  hag: 'megera',
  halfling: 'halfling',
  hampering: 'dificultador',
  harnessed: 'atrelado',
  haunt: 'assombração',
  healing: 'cura',
  'hefty-2': 'pesado 2',
  hobgoblin: 'hobgoblin',
  holy: 'sagrado',
  human: 'humano',
  humanoid: 'humanoide',
  hindering: 'impeditivo',
  incapacitation: 'incapacitação',
  incorporeal: 'incorpóreo',
  illusion: 'ilusão',
  impulse: 'impulso',
  infused: 'infundido',
  injection: 'injeção',
  ingested: 'ingerido',
  inhaled: 'inalado',
  injury: 'ferimento',
  inscribed: 'inscrito',
  intelligent: 'inteligente',
  inevitable: 'inevitável',
  'integrated-1d6-s': 'integrada 1d6 C',
  'integrated-1d6-s-versatile-p': 'integrada 1d6 C e versátil P',
  invested: 'investido',
  kickback: 'coice',
  knockdown: 'derrubar',
  kovintus: 'kovintus',
  laminar: 'lamelar',
  'launching-dart': 'dardo lançador',
  light: 'luz',
  linguistic: 'linguística',
  lawful: 'leal',
  lizardfolk: 'povo-lagarto',
  lozenge: 'losango',
  magical: 'mágico',
  manipulate: 'manipulação',
  mechanical: 'mecânico',
  mental: 'mental',
  minion: 'lacaio',
  merfolk: 'povo-marinho',
  metal: 'metal',
  mindless: 'sem mente',
  misfortune: 'infortúnio',
  missive: 'mensagem',
  modular: 'modular',
  monk: 'monge',
  monitor: 'monitor',
  mortic: 'mortic',
  morph: 'transformar',
  move: 'mover',
  mummy: 'múmia',
  mutagen: 'mutagênico',
  mutant: 'mutante',
  mythic: 'mítico',
  noisy: 'barulhento',
  nightmare: 'pesadelo',
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
  possession: 'possessão',
  press: 'pressão',
  ponderous: 'ponderoso',
  potion: 'poção',
  precious: 'precioso',
  prediction: 'previsão',
  processed: 'processado',
  primal: 'primal',
  propulsive: 'propulsivo',
  protean: 'proteano',
  psychic: 'psíquico',
  psychopomp: 'psicopompo',
  radiation: 'radiação',
  rage: 'fúria',
  'ranged-trip': 'derrubar à distância',
  ranger: 'patrulheiro',
  ratfolk: 'povo-rato',
  razing: 'demolidor',
  reach: 'alcance',
  'reach-10': 'alcance 10 pés',
  'reload-0': 'recarga 0',
  relic: 'relíquia',
  repeating: 'repetição',
  resonant: 'ressonante',
  recovery: 'recuperação',
  revelation: 'revelação',
  sanctified: 'santificado',
  scroll: 'pergaminho',
  'sea-devil': 'diabo-marinho',
  scrying: 'vidência',
  secret: 'secreto',
  skill: 'perícia',
  silver: 'prata',
  serpentfolk: 'povo-serpente',
  shade: 'sombra',
  shadow: 'sombrio',
  'shield-throw-20': 'arremesso de escudo 20 pés',
  'shield-throw-30': 'arremesso de escudo 30 pés',
  shove: 'empurrar',
  shabti: 'shabti',
  skeleton: 'esqueleto',
  skelm: 'skelm',
  skulk: 'skulk',
  sleep: 'dormir',
  snare: 'laço',
  sonic: 'sônico',
  soulbound: 'vinculado à alma',
  splash: 'respingo',
  sporeborn: 'nascido de esporos',
  spellshape: 'moldagem de magia',
  spellgun: 'arma de magia',
  spellheart: 'coração mágico',
  spirit: 'espírito',
  spriggan: 'spriggan',
  sprite: 'sprite',
  staff: 'cajado',
  stance: 'postura',
  steam: 'vapor',
  structure: 'estrutura',
  subtle: 'sutil',
  summon: 'invocação',
  summoned: 'invocado',
  sweep: 'varredura',
  swarm: 'enxame',
  talisman: 'talismã',
  tattoo: 'tatuagem',
  tea: 'chá',
  tech: 'tecnológico',
  technological: 'tecnológico',
  teleportation: 'teletransporte',
  tethered: 'amarrado',
  tearing: 'dilacerante',
  thrown: 'arremesso',
  time: 'tempo',
  titan: 'titã',
  trap: 'armadilha',
  training: 'treinamento',
  trip: 'derrubar',
  troll: 'troll',
  troop: 'tropa',
  twin: 'gêmeo',
  unarmed: 'desarmado',
  undead: 'morto-vivo',
  unholy: 'profano',
  unstable: 'instável',
  'versatile-fire': 'versátil fogo',
  'versatile-spirit': 'versátil espírito',
  'versatile-vitality': 'versátil vitalidade',
  vampire: 'vampiro',
  vehicular: 'veicular',
  virulent: 'virulento',
  visual: 'visual',
  vitality: 'vitalidade',
  void: 'vazio',
  wand: 'varinha',
  water: 'água',
  werecreature: 'metamorfo',
  whetstone: 'pedra de amolar',
  wight: 'infausto',
  'wild-hunt': 'caçada selvagem',
  wizard: 'mago',
  wood: 'madeira',
  wraith: 'aparição',
  zombie: 'zumbi',
}

const PRESERVED_TRAITS_PT_BR = new Set([
  'aesir',
  'agathion',
  'aiuvarin',
  'aphorite',
  'anadi',
  'anugobu',
  'ardande',
  'asura',
  'azarketi',
  'azata',
  'beastkin',
  'boggard',
  'bugbear',
  'caligni',
  'charau-ka',
  'couatl',
  'conrasu',
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
  'formian',
  'ganzi',
  'girtablilu',
  'gigas',
  'ghul',
  'ghoran',
  'gremlin',
  'grioth',
  'fulu',
  'harrow-court',
  'hantu',
  'hryngar',
  'hungerseed',
  'ikeshti',
  'jotunborn',
  'kami',
  'kaiju',
  'kholo',
  'kitsune',
  'kobold',
  'leshy',
  'lilu',
  'locathah',
  'maftet',
  'magus',
  'morlock',
  'munavri',
  'naari',
  'nagaji',
  'nephilim',
  'nindoru',
  'oni',
  'paaridar',
  'palinthanos',
  'poppet',
  'oread',
  'qlippoth',
  'rakshasa',
  'saggorak',
  'sahkil',
  'samsaran',
  'sedacthy',
  'seugathi',
  'siktempora',
  'shisk',
  'shobhad',
  'shoony',
  'stheno',
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
  'wraithvine',
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
  ITEMS: {
    climbing: 'escalada',
  },
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
    bludgeoning: 'contundente',
    cold: 'frio',
    electricity: 'eletricidade',
    fire: 'fogo',
    force: 'força',
    mental: 'mental',
    piercing: 'perfurante',
    poison: 'veneno',
    slashing: 'cortante',
    sonic: 'sônico',
    spirit: 'espírito',
    untyped: 'sem tipo',
    vitality: 'vitalidade',
    void: 'vazio',
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
