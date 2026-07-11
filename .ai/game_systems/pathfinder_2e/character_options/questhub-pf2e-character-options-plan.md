# QuestHub — Plano de Extração e Integração de Classe, Ancestralidade, Herança e Background do Pathfinder 2e

## 1. Objetivo

Implementar no QuestHub um catálogo canônico e normalizado de:

- Classes;
- Ancestralidades;
- Heranças;
- Backgrounds.

Os dados devem ser extraídos da cópia local do repositório oficial do sistema Pathfinder 2e para Foundry VTT, localizada em:

```text
pf2e-master/
```

O repositório oficial de referência é:

```text
foundryvtt/pf2e
```

A branch do QuestHub utilizada como base deve ser:

```text
development
```

A solução deve substituir o uso atual de texto livre para Classe, Ancestralidade, Herança e Background por referências estruturadas ao catálogo, preservando suporte a conteúdo customizado e preparando o sistema para criação guiada e aplicação mecânica.

---

# 2. Resultado esperado

Ao final da implementação, o QuestHub deve ser capaz de:

1. extrair todos os documentos canônicos dos packs oficiais;
2. normalizar os dados para contratos próprios do QuestHub;
3. listar e pesquisar Classes, Ancestralidades, Heranças e Backgrounds;
4. exibir detalhes completos de cada opção;
5. filtrar Heranças compatíveis com a Ancestralidade escolhida;
6. identificar Heranças versáteis;
7. persistir referências estáveis na ficha do personagem;
8. preservar escolhas do usuário separadamente da opção selecionada;
9. migrar fichas antigas que utilizam texto livre;
10. preparar a aplicação automática de HP, proficiências, boosts, idiomas, visão e outras regras;
11. preservar rules e referências do Foundry mesmo quando ainda não forem executáveis;
12. permanecer agnóstico no core e manter regras PF2e dentro do package específico.

A regra arquitetural principal é:

```text
Catálogo != Seleção != Escolhas != Efeitos derivados
```

---

# 3. Contexto atual do QuestHub

## 3.1. Ficha PF2e atual

A ficha atual possui:

```ts
export type Pathfinder2eIdentity = {
  level: number
  ancestry: string
  heritage: string
  background: string
  className: string
}
```

Os quatro campos são tratados como texto livre.

No frontend, a ficha renderiza inputs comuns para:

```text
Classe
Ancestralidade
Herança
Background
```

No schema, os valores são apenas strings.

Esse modelo foi suficiente para o MVP, mas não permite:

- validação canônica;
- relacionamento entre Ancestralidade e Herança;
- aplicação de HP;
- aplicação de proficiências;
- boosts de atributos;
- idiomas;
- visão;
- velocidade;
- features;
- escolhas obrigatórias de classe;
- migração segura entre versões do catálogo.

## 3.2. Persistência atual

A ficha é persistida em:

```text
Character.sheet
```

Como um JSON versionado pelo envelope de game system:

```json
{
  "system": "PATHFINDER_2E",
  "version": 1,
  "data": {
    "pathfinder2e": {}
  }
}
```

A nova solução deve evoluir o envelope para versão 2.

## 3.3. Limite do módulo de Character

O módulo genérico de criação de personagem é responsável por:

- identidade básica;
- nome;
- avatar;
- vínculo com campanha;
- ownership;
- role;
- status.

Ele não deve conhecer regras específicas como:

```text
Fighter
Elf
Nephilim
Acolyte
Key Ability
Ancestry Boost
Saving Throw Rank
```

Essas regras pertencem ao package:

```text
packages/game-system-pathfinder-2e
```

---

# 4. Fonte canônica dos dados

## 4.1. Repositório oficial

A fonte original é o repositório:

```text
foundryvtt/pf2e
```

O branch oficial pode mudar com o tempo. Portanto:

- não depender de branch móvel em runtime;
- usar a cópia local `pf2e-master`;
- registrar a revisão ou commit da cópia utilizada;
- gerar arquivos estáticos no build/dev;
- nunca buscar os dados diretamente no GitHub em runtime.

## 4.2. Packs principais

A estrutura esperada é:

```text
pf2e-master/
└── packs/
    └── pf2e/
        ├── classes/
        ├── ancestries/
        ├── heritages/
        └── backgrounds/
```

O gerador deve suportar também, por compatibilidade, layouts alternativos:

```text
pf2e-master/packs/classes
pf2e-master/packs/ancestries
pf2e-master/packs/heritages
pf2e-master/packs/backgrounds
```

A detecção deve ser explícita e falhar quando:

- nenhum diretório for encontrado;
- mais de um candidato ambíguo for encontrado;
- a estrutura estiver incompleta.

## 4.3. Requisitos de licença e proveniência

Cada documento extraído deve preservar:

```text
publication.title
publication.license
publication.remaster
sourcePack
sourceId
sourcePath
```

O QuestHub deve ser capaz de responder:

- de qual pack o dado veio;
- qual `_id` original foi usado;
- qual publicação originou o conteúdo;
- qual licença foi declarada;
- qual revisão do repositório foi utilizada.

---

# 5. Novo bounded context

Criar:

```text
.ai/game_systems/pathfinder_2e/character_options/
  readme.md
  skills.md
  specs.md
  todo.md
```

## 5.1. Responsabilidade

O módulo `character_options` será responsável por:

- catálogo de Classes;
- catálogo de Ancestralidades;
- catálogo de Heranças;
- catálogo de Backgrounds;
- normalização dos documentos oficiais;
- relacionamentos entre opções;
- filtros de compatibilidade;
- apresentação dos dados;
- opções disponíveis para criação de personagem;
- referências usadas pela ficha;
- validação das escolhas canônicas;
- preparação para aplicação mecânica.

## 5.2. Fora de escopo inicial

Não implementar imediatamente:

- todas as Rule Elements do Foundry;
- todos os feats;
- todos os spells;
- multiclass;
- dedications;
- archetypes;
- variants de regras;
- free archetype;
- dual class;
- automatic bonus progression;
- execução completa de predicates;
- execução genérica de UUIDs arbitrários;
- progressão completa de nível 1 a 20.

Esses dados devem ser preservados, mas sua execução pode ser posterior.

---

# 6. Estrutura de código proposta

## 6.1. Core genérico

```text
packages/game-system-core/src/server/character-options/
  models.ts
  index.ts
```

## 6.2. Package PF2e

```text
packages/game-system-pathfinder-2e/src/server/character-options/
  models.ts
  constants.ts
  normalize-common.ts
  normalize-description.ts
  normalize-publication.ts
  normalize-rules.ts
  normalize-references.ts
  normalize-attribute-choices.ts
  normalize-class.ts
  normalize-ancestry.ts
  normalize-heritage.ts
  normalize-background.ts
  compatibility.ts
  catalog.ts
  adapter.ts
  index.ts

  data/
    classes.generated.ts
    ancestries.generated.ts
    heritages.generated.ts
    backgrounds.generated.ts
    summary.generated.ts
```

## 6.3. Scripts

```text
scripts/generate-pf2e-character-options.cjs
```

Opcionalmente:

```text
scripts/lib/pf2e-character-options/
  files.cjs
  normalize.cjs
  validate.cjs
  summary.cjs
```

## 6.4. API

```text
apps/api/src/modules/game_systems/character-options/
  models.ts
  registry.ts
  routes.ts
```

O código específico de PF2e deve ser apenas reexportado ou registrado pela API.

## 6.5. Frontend PF2e

```text
packages/game-system-pathfinder-2e/src/web/character-options/
  CharacterOptionSelector.tsx
  CharacterOptionModal.tsx
  CharacterOptionDetails.tsx
  ClassSelector.tsx
  AncestrySelector.tsx
  HeritageSelector.tsx
  BackgroundSelector.tsx
  BuildChoicesForm.tsx
  types.ts
  index.ts
```

---

# 7. Contrato genérico no game-system-core

O core deve expor apenas uma estrutura agnóstica.

```ts
export type GameSystemCharacterOptionKind =
  | 'class'
  | 'ancestry'
  | 'heritage'
  | 'background'

export type GameSystemCharacterOptionSource = {
  pack: string
  id: string
  path?: string
  publication?: string
  license?: string
  remaster?: boolean
}

export type GameSystemCharacterOptionDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemCharacterOptionDisplay = {
  subtitle?: string
  description?: string
  image?: string
  tags: string[]
  stats: GameSystemCharacterOptionDisplayStat[]
}

export type GameSystemCharacterOptionEntry<TSystemData = unknown> = {
  id: string
  system: string
  kind: GameSystemCharacterOptionKind
  slug: string
  name: string
  source: GameSystemCharacterOptionSource
  display: GameSystemCharacterOptionDisplay
  systemData: TSystemData
}

export type GameSystemCharacterOptionListOptions = {
  kind: GameSystemCharacterOptionKind
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, string | number | boolean>
}

export interface GameSystemCharacterOptionsAdapter {
  system: string

  listEntries(
    options: GameSystemCharacterOptionListOptions,
  ): GameSystemCharacterOptionEntry[]

  countEntries(
    options: Omit<GameSystemCharacterOptionListOptions, 'limit' | 'offset'>,
  ): number

  findEntry(
    kind: GameSystemCharacterOptionKind,
    entryId: string,
  ): GameSystemCharacterOptionEntry | null

  findEntryBySource?(
    kind: GameSystemCharacterOptionKind,
    sourcePack: string,
    sourceId: string,
  ): GameSystemCharacterOptionEntry | null
}
```

O core não deve declarar:

```text
hitPointsPerLevel
keyAbility
ancestryBoosts
heritageAncestry
trainedSkills
savingThrows
vision
languages
```

Esses campos pertencem ao `systemData` de PF2e.

---

# 8. Contratos comuns PF2e

## 8.1. Identificadores

```ts
export type Pathfinder2eCharacterOptionKind =
  | 'class'
  | 'ancestry'
  | 'heritage'
  | 'background'

export type Pathfinder2eAttributeSlug =
  | 'str'
  | 'dex'
  | 'con'
  | 'int'
  | 'wis'
  | 'cha'

export type Pathfinder2eRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'unique'
  | string
```

## 8.2. Fonte

```ts
export type Pathfinder2eCharacterOptionSource = {
  sourcePack: string
  sourceId: string
  sourcePath: string
  slug: string
  image: string | null

  publication: {
    title: string | null
    license: string | null
    remaster: boolean
  }
}
```

## 8.3. Descrição

```ts
export type Pathfinder2eDescription = {
  sourceHtml: string
  plainText: string
}
```

Regras:

- preservar HTML original;
- gerar texto limpo para busca e UI simples;
- nunca renderizar `sourceHtml` com `dangerouslySetInnerHTML` sem sanitização;
- preservar UUIDs no HTML bruto;
- opcionalmente produzir referências extraídas.

## 8.4. Regra bruta

```ts
export type Pathfinder2eRuleElement = {
  key: string
  data: Record<string, unknown>
}
```

Preservar cada rule integralmente:

```ts
{
  key: rule.key,
  data: structuredClone(rule),
}
```

Não remover campos desconhecidos.

## 8.5. Referências concedidas

```ts
export type Pathfinder2eGrantedItemReference = {
  name: string
  image: string | null
  level: number
  uuid: string

  parsedReference: {
    system: string | null
    pack: string | null
    documentType: string | null
    documentIdOrName: string | null
  }
}
```

## 8.6. Base comum

```ts
export type Pathfinder2eCharacterOptionBase = {
  schemaVersion: 1

  id: string
  kind: Pathfinder2eCharacterOptionKind
  slug: string
  name: string

  description: Pathfinder2eDescription

  rarity: Pathfinder2eRarity
  traits: string[]
  rules: Pathfinder2eRuleElement[]
  grantedItems: Pathfinder2eGrantedItemReference[]

  source: Pathfinder2eCharacterOptionSource

  normalizationWarnings: string[]
}
```

---

# 9. Normalização de Classe

## 9.1. Dados existentes

Uma Classe canônica pode conter:

- HP por nível;
- key abilities possíveis;
- Perception inicial;
- Saving Throws;
- proficiência em ataques;
- proficiência em defesa;
- spellcasting;
- trained skills fixas;
- quantidade de trained skills adicionais;
- níveis de ancestry feats;
- níveis de class feats;
- níveis de general feats;
- níveis de skill feats;
- níveis de skill increases;
- class features concedidas;
- rules;
- traits;
- raridade;
- descrição;
- publicação.

## 9.2. Contrato

```ts
export type Pathfinder2eClassEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'class'

    hitPointsPerLevel: number

    keyAbility: {
      options: Pathfinder2eAttributeSlug[]
    }

    proficiencies: {
      perception: number

      savingThrows: {
        fortitude: number
        reflex: number
        will: number
      }

      attacks: {
        simple: number
        martial: number
        advanced: number
        unarmed: number
        other: {
          name: string
          rank: number
        }
      }

      defenses: {
        unarmored: number
        light: number
        medium: number
        heavy: number
      }

      spellcasting: number
    }

    trainedSkills: {
      fixed: string[]
      additional: number
    }

    progression: {
      ancestryFeatLevels: number[]
      classFeatLevels: number[]
      generalFeatLevels: number[]
      skillFeatLevels: number[]
      skillIncreaseLevels: number[]
    }
  }
```

## 9.3. Regras de validação

- `hitPointsPerLevel` deve ser inteiro positivo;
- key abilities devem usar slugs conhecidos;
- ranks devem ser inteiros;
- arrays de nível devem conter apenas inteiros entre 1 e 20;
- arrays devem ser ordenados e sem duplicatas;
- `trainedSkills.additional` deve ser inteiro não negativo;
- UUIDs das class features devem ser preservados;
- rules desconhecidas devem gerar summary, não falha automática.

## 9.4. Exemplo: Fighter

A normalização do Fighter deve preservar:

```text
HP por nível: 10
Key Ability: DEX ou STR
Perception: 2
Fortitude: 2
Reflex: 2
Will: 1
Simple: 2
Martial: 2
Advanced: 1
Unarmed: 2
Additional trained skills: 3
```

Além disso, deve preservar a rule `ChoiceSet` que exige escolha entre Acrobatics e Athletics.

---

# 10. Normalização de Ancestralidade

## 10.1. Dados existentes

Uma Ancestralidade pode conter:

- HP base;
- boosts;
- flaws;
- boosts alternativos;
- idiomas;
- idiomas adicionais;
- velocidade;
- tamanho;
- mãos;
- alcance;
- visão;
- traits;
- raridade;
- features;
- rules;
- descrição;
- publicação.

## 10.2. Escolhas de atributos

```ts
export type Pathfinder2eAttributeChoice = {
  key: string
  options: Pathfinder2eAttributeSlug[]
  count: number
  free: boolean
}
```

## 10.3. Idiomas

```ts
export type Pathfinder2eLanguageProfile = {
  granted: string[]

  additional: {
    count: number
    options: string[]
    custom: string | null
  }
}
```

## 10.4. Contrato

```ts
export type Pathfinder2eAncestryEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'ancestry'

    hitPoints: number
    speedFeet: number
    size: string
    hands: number
    reachFeet: number
    vision: string

    languages: Pathfinder2eLanguageProfile

    attributes: {
      boosts: Pathfinder2eAttributeChoice[]
      flaws: Pathfinder2eAttributeChoice[]
      alternateBoosts: Pathfinder2eAttributeSlug[]
    }
  }
```

## 10.5. Regras

- preservar velocidade em pés;
- converter para metros apenas na apresentação;
- HP deve ser inteiro não negativo;
- mãos devem ser inteiras;
- alcance deve ser inteiro;
- boosts fixos terão uma opção;
- boost livre terá seis opções;
- flaws seguem o mesmo contrato;
- `alternateAncestryBoosts` deve ser preservado;
- nenhuma regra deve ser inferida pelo nome da ancestralidade.

## 10.6. Exemplo: Elf

```text
HP: 6
Speed: 30 ft
Size: med
Hands: 2
Reach: 5 ft
Vision: low-light-vision
Languages: common, elven
Boosts fixos: dex, int
Boost livre: qualquer atributo
Flaw: con
```

---

# 11. Normalização de Herança

## 11.1. Tipos de Herança

Existem dois grupos:

### Herança específica

```ts
system.ancestry = {
  name,
  slug,
  uuid,
}
```

### Herança versátil

```ts
system.ancestry = null
```

## 11.2. Contrato

```ts
export type Pathfinder2eHeritageAncestryReference = {
  name: string
  slug: string
  uuid: string
  sourceId: string | null
}

export type Pathfinder2eHeritageEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'heritage'

    ancestry: Pathfinder2eHeritageAncestryReference | null
    versatile: boolean
  }
```

## 11.3. Regra de versatilidade

```ts
versatile = ancestry === null
```

Não inferir pela pasta `versatile-heritages`.

A pasta pode ser usada como metadado de auditoria, mas não como regra principal.

## 11.4. Compatibilidade

```ts
export function isCompatibleHeritage(
  heritage: Pathfinder2eHeritageEntry,
  ancestry: Pathfinder2eAncestryEntry,
): boolean {
  return (
    heritage.versatile ||
    heritage.ancestry?.slug === ancestry.slug
  )
}
```

## 11.5. Alteração da Ancestralidade

Ao trocar a Ancestralidade:

1. verificar a Herança atual;
2. manter se for versátil;
3. manter se o slug corresponder;
4. limpar se for incompatível;
5. alertar o usuário;
6. limpar choices dependentes da Herança anterior;
7. recalcular efeitos derivados.

## 11.6. Referência por UUID

Exemplo:

```text
Compendium.pf2e.ancestries.Item.PgKmsA2aKdbLU6O0
```

O gerador deve tentar resolver:

```text
sourceId = PgKmsA2aKdbLU6O0
```

Se não resolver:

- preservar UUID;
- adicionar warning;
- não descartar a Herança.

## 11.7. Exemplos

### Arctic Elf

```text
ancestry.slug = elf
versatile = false
```

### Nephilim

```text
ancestry = null
versatile = true
```

---

# 12. Normalização de Background

## 12.1. Dados existentes

Um Background pode conter:

- dois ou mais boosts;
- escolhas de atributo;
- skills treinadas;
- Lore treinado;
- feat concedido;
- rules;
- traits;
- raridade;
- descrição;
- publicação.

## 12.2. Contrato

```ts
export type Pathfinder2eBackgroundEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'background'

    attributes: {
      boosts: Pathfinder2eAttributeChoice[]
    }

    trainedSkills: {
      skills: string[]
      lore: string[]
    }
  }
```

## 12.3. Exemplo: Acolyte

```text
Primeiro boost: INT ou WIS
Segundo boost: livre
Skill treinada: religion
Lore treinado: Scribing Lore
Feat: Student of the Canon
```

## 12.4. Regras

- preservar todas as opções;
- não salvar apenas o atributo final;
- preservar Lore como texto;
- preservar referências concedidas;
- feat não deve ser copiado como conteúdo completo nesta etapa;
- UUID original deve permanecer disponível.

---

# 13. Normalização de descrições

## 13.1. HTML bruto

Preservar:

```ts
description.sourceHtml
```

## 13.2. Texto limpo

Gerar:

```ts
description.plainText
```

Tratamento mínimo:

- remover tags HTML;
- converter `<br>` e encerramento de parágrafo em espaço;
- remover espaços duplicados;
- preservar texto dos links Foundry;
- não truncar;
- não destruir UUIDs no bruto;
- usar texto limpo para busca.

## 13.3. Segurança

A UI deve:

- renderizar `plainText` por padrão;
- sanitizar HTML quando a ficha detalhada exigir formatação;
- nunca confiar diretamente no HTML de origem;
- não usar `dangerouslySetInnerHTML` sem sanitização explícita.

---

# 14. Normalização de Rule Elements

## 14.1. Princípio

Extrair tudo não significa executar tudo.

O QuestHub deve preservar:

```ts
rules: Pathfinder2eRuleElement[]
```

## 14.2. Keys

O gerador deve contar todas as `rule.key` encontradas.

Exemplos possíveis:

```text
ChoiceSet
ActiveEffectLike
Resistance
Sense
GrantItem
RollOption
FlatModifier
AdjustModifier
ActorTraits
CreatureSize
BaseSpeed
```

A lista não deve ser hardcoded como validação fechada.

## 14.3. Summary

```ts
unsupportedByQuestHub: Record<string, number>
```

Neste estágio, “unsupported” significa:

```text
a regra foi encontrada, mas não existe executor QuestHub registrado.
```

## 14.4. Execução futura

Criar posteriormente:

```ts
export interface Pathfinder2eRuleExecutor {
  key: string
  validate(rule: Pathfinder2eRuleElement): ValidationResult
  apply(context: Pathfinder2eBuildContext): Pathfinder2eBuildPatch
}
```

Não implementar executor genérico dentro do gerador.

---

# 15. Gerador

## 15.1. Arquivo

```text
scripts/generate-pf2e-character-options.cjs
```

## 15.2. Packs

```js
const CHARACTER_OPTION_PACKS = {
  class: 'classes',
  ancestry: 'ancestries',
  heritage: 'heritages',
  background: 'backgrounds',
}
```

## 15.3. Resolução de diretórios

```js
function resolvePackDirectory(root, packName) {
  const candidates = [
    path.join(root, 'packs', 'pf2e', packName),
    path.join(root, 'packs', packName),
  ]

  const matches = candidates.filter(fs.existsSync)

  if (matches.length !== 1) {
    throw new Error(
      `Expected exactly one directory for ${packName}. Found: ${matches.join(', ')}`,
    )
  }

  return matches[0]
}
```

## 15.4. Walker

O walker deve:

- caminhar recursivamente;
- ler `.json`;
- ignorar `_folders.json`;
- ignorar arquivos que retornem array;
- validar tipo;
- preservar caminho relativo;
- ordenar caminhos antes de processar.

## 15.5. Slug

Preferência:

1. `system.slug`, se existir;
2. slug derivado do nome;
3. slug do nome do arquivo.

O slug deve ser:

- lowercase;
- kebab-case;
- determinístico;
- validado contra duplicatas por tipo.

## 15.6. ID QuestHub

Formato sugerido:

```text
pf2e:class:fighter
pf2e:ancestry:elf
pf2e:heritage:arctic-elf
pf2e:background:acolyte
```

Em caso de slug duplicado, o gerador deve preferir falhar e exigir decisão explícita.

## 15.7. Validação de documento

Cada normalizador deve validar:

```text
document._id
document.name
document.type
document.system
```

Se inválido:

- não gerar silenciosamente;
- incluir em `invalidDocuments`;
- falhar o build para documentos críticos.

## 15.8. Determinismo

O output deve:

- ordenar por nome;
- desempatar por ID;
- não incluir timestamp variável;
- usar indentação estável;
- produzir o mesmo hash com a mesma fonte.

## 15.9. Revisão da fonte

Extrair uma revisão de:

```text
git -C pf2e-master rev-parse HEAD
```

Quando indisponível:

```text
revision = null
```

e gerar warning.

Não quebrar ambientes onde `pf2e-master` não possui `.git`, desde que exista uma versão declarada.

## 15.10. Arquivos gerados

```text
classes.generated.ts
ancestries.generated.ts
heritages.generated.ts
backgrounds.generated.ts
summary.generated.ts
```

Cada arquivo deve exportar array tipado.

---

# 16. Summary de auditoria

```ts
export const PATHFINDER_2E_CHARACTER_OPTIONS_SUMMARY = {
  source: {
    root: 'pf2e-master',
    revision: null,
  },

  counts: {
    classes: 0,
    ancestries: 0,
    heritages: 0,
    backgrounds: 0,
  },

  heritages: {
    ancestrySpecific: 0,
    versatile: 0,
  },

  rarities: {},
  publications: {},
  licenses: {},

  rules: {
    byKey: {},
    unsupportedByQuestHub: {},
  },

  validation: {
    duplicateIds: [],
    duplicateSlugs: [],
    unresolvedHeritageAncestries: [],
    unresolvedGrantedItemReferences: [],
    invalidDocuments: [],
    normalizationWarnings: [],
  },
} as const
```

## 16.1. Falhas bloqueantes

O gerador deve falhar quando houver:

- ID duplicado;
- slug duplicado no mesmo tipo;
- documento sem `_id`;
- documento sem nome;
- tipo diferente do pack esperado;
- pack ausente;
- saída vazia inesperada;
- Herança específica com ancestry sem slug;
- JSON inválido.

## 16.2. Warnings não bloqueantes

- UUID de feature não resolvido;
- rule key sem executor;
- publicação vazia;
- imagem ausente;
- ancestry UUID não resolvido, mas slug presente;
- campo novo não mapeado.

---

# 17. Catálogo em memória

## 17.1. Índices

```ts
const classesById = new Map<string, Pathfinder2eClassEntry>()
const ancestriesById = new Map<string, Pathfinder2eAncestryEntry>()
const ancestriesBySlug = new Map<string, Pathfinder2eAncestryEntry>()
const heritagesById = new Map<string, Pathfinder2eHeritageEntry>()
const backgroundsById = new Map<string, Pathfinder2eBackgroundEntry>()
```

## 17.2. Índice de Heranças

```ts
const heritagesByAncestrySlug =
  new Map<string, Pathfinder2eHeritageEntry[]>()

const versatileHeritages: Pathfinder2eHeritageEntry[] = []
```

## 17.3. API interna

```ts
export const pathfinder2eCharacterOptionsCatalog = {
  listClasses,
  findClass,

  listAncestries,
  findAncestry,

  listHeritages,
  findHeritage,
  listCompatibleHeritages,

  listBackgrounds,
  findBackground,
}
```

---

# 18. Adapter de apresentação

## 18.1. Classe

Exibir:

```text
HP por nível
Atributos-chave
Perception
Fortitude
Reflex
Will
Perícias adicionais
Raridade
Publicação
```

## 18.2. Ancestralidade

Exibir:

```text
HP
Velocidade
Tamanho
Visão
Idiomas
Boosts
Flaws
Traits
Raridade
```

## 18.3. Herança

Exibir:

```text
Ancestralidade compatível
Herança versátil
Traits
Raridade
Descrição
Publicação
```

## 18.4. Background

Exibir:

```text
Boosts
Skills
Lore
Feat concedido
Raridade
Descrição
Publicação
```

---

# 19. API HTTP

## 19.1. Princípio

O catálogo não depende de campanha.

Personagens livres podem ser criados antes de entrar em campanha.

## 19.2. Listagem

```text
GET /api/game-systems/:system/character-options
```

Query:

```ts
type CharacterOptionsQuery = {
  kind: 'class' | 'ancestry' | 'heritage' | 'background'
  q?: string
  rarity?: string
  ancestryId?: string
  includeVersatile?: boolean
  page?: number
  limit?: number
}
```

## 19.3. Detalhe

```text
GET /api/game-systems/:system/character-options/:kind/:optionId
```

## 19.4. Respostas

```ts
type ListCharacterOptionsResponse = {
  system: string
  kind: GameSystemCharacterOptionKind

  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }

  entries: GameSystemCharacterOptionEntry[]
}
```

## 19.5. Permissões

- usuário autenticado;
- não exige campanha;
- não exige Mestre;
- não permite alteração;
- catálogo é read-only.

## 19.6. Filtros de Herança

Quando `kind=heritage`:

```text
ancestryId obrigatório na UI guiada
includeVersatile default true
```

A API pode permitir listagem sem ancestry para tela administrativa.

---

# 20. Persistência da identidade PF2e

## 20.1. Nova seleção

```ts
export type Pathfinder2eIdentitySelection =
  | {
      source: 'catalog'
      id: string
      sourcePack: string
      sourceId: string
      slug: string
      name: string
    }
  | {
      source: 'custom'
      name: string
    }
```

## 20.2. Nova identidade

```ts
export type Pathfinder2eIdentity = {
  level: number

  ancestry: Pathfinder2eIdentitySelection | null
  heritage: Pathfinder2eIdentitySelection | null
  background: Pathfinder2eIdentitySelection | null
  class: Pathfinder2eIdentitySelection | null
}
```

## 20.3. Motivo de persistir name

Mesmo em seleção de catálogo, persistir `name` para:

- snapshot de apresentação;
- tolerância a renomeação futura;
- exibição offline;
- migração de catálogo;
- histórico.

A fonte de verdade mecânica continua sendo o ID.

## 20.4. Não persistir documento inteiro

Não copiar Classe, Ancestralidade, Herança ou Background completos para a ficha.

Persistir:

- referência;
- escolhas;
- snapshot mínimo;
- versão do catálogo utilizada, se necessário.

---

# 21. Escolhas de build

## 21.1. Separação

Seleções:

```text
Elf
Arctic Elf
Acolyte
Fighter
```

Escolhas:

```text
Boost livre = STR
Key Ability = STR
Fighter Skill = Athletics
Idioma adicional = Draconic
```

Esses dados são responsabilidades diferentes.

## 21.2. Contrato

```ts
export type Pathfinder2eBuildChoices = {
  ancestry: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    flaws: Record<string, Pathfinder2eAttributeSlug>
    alternateBoostsEnabled: boolean
    additionalLanguages: string[]
    ruleSelections: Record<string, unknown>
  }

  heritage: {
    ruleSelections: Record<string, unknown>
  }

  background: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    ruleSelections: Record<string, unknown>
  }

  class: {
    keyAbility: Pathfinder2eAttributeSlug | null
    trainedSkills: string[]
    ruleSelections: Record<string, unknown>
  }
}
```

## 21.3. Validação

- escolha deve existir no conjunto permitido;
- opções livres não podem repetir quando a regra proibir;
- número de idiomas deve respeitar count;
- key ability deve pertencer à Classe;
- trained skills devem respeitar quantidade;
- ruleSelections devem corresponder às rules conhecidas;
- escolhas incompatíveis devem impedir confirmação, mas podem existir em rascunho.

---

# 22. Evolução da ficha para version 2

## 22.1. Envelope

```json
{
  "system": "PATHFINDER_2E",
  "version": 2,
  "data": {
    "pathfinder2e": {
      "identity": {},
      "buildChoices": {}
    }
  }
}
```

## 22.2. Compatibilidade

O backend deve aceitar:

```text
version 1
version 2
```

durante a transição.

## 22.3. Escrita

- novas fichas usam version 2;
- edições de ficha V1 devem migrar;
- persistência final deve gravar V2;
- não manter writes novos no contrato antigo.

---

# 23. Migração V1 para V2

## 23.1. Entrada

```json
{
  "ancestry": "Elf",
  "heritage": "Arctic Elf",
  "background": "Acolyte",
  "className": "Fighter"
}
```

## 23.2. Matching

Para cada campo:

1. trim;
2. normalizar case;
3. normalizar espaços;
4. buscar nome exato;
5. buscar slug exato;
6. exigir resultado único.

## 23.3. Resultado único

```ts
{
  source: 'catalog',
  id,
  sourcePack,
  sourceId,
  slug,
  name,
}
```

## 23.4. Sem resultado ou ambíguo

```ts
{
  source: 'custom',
  name: originalValue,
}
```

Nunca descartar texto antigo.

## 23.5. Herança

Se Ancestralidade e Herança forem mapeadas:

- validar compatibilidade;
- se incompatível, manter Herança como custom ou marcar issue;
- não apagar silenciosamente.

## 23.6. Migration issue

```ts
export type Pathfinder2eMigrationIssue = {
  field: 'class' | 'ancestry' | 'heritage' | 'background'
  value: string
  reason:
    | 'not_found'
    | 'ambiguous'
    | 'incompatible'
}
```

---

# 24. UI de seleção

## 24.1. Substituir inputs livres

A seção Identificação deve usar seletores pesquisáveis.

## 24.2. Ordem

```text
Ancestralidade
Herança
Background
Classe
```

Essa ordem facilita dependência de Herança.

## 24.3. Cada selector deve ter

- busca;
- filtro por raridade;
- paginação;
- card compacto;
- botão de detalhes;
- source/publication;
- seleção customizada;
- estado loading;
- estado vazio;
- erro;
- opção selecionada.

## 24.4. Herança

Após escolher Ancestralidade:

- buscar específicas;
- incluir versáteis;
- separar grupos visualmente;
- bloquear incompatíveis.

## 24.5. Custom

Deve existir:

```text
Usar opção personalizada
```

Ela salva:

```ts
{
  source: 'custom',
  name: '...'
}
```

## 24.6. Rascunho

A ficha continua permitindo campos vazios.

```text
ancestry = null
heritage = null
background = null
class = null
```

---

# 25. Aplicação mecânica futura

## 25.1. Serviço

```ts
export function buildPathfinder2eCharacter(
  input: Pathfinder2eCharacterBuildInput,
): Pathfinder2eCharacterBuildResult
```

## 25.2. Entrada

```ts
export type Pathfinder2eCharacterBuildInput = {
  level: number
  selections: Pathfinder2eIdentity
  choices: Pathfinder2eBuildChoices
  baseAttributes: Record<Pathfinder2eAttributeSlug, number>
}
```

## 25.3. Resultado

```ts
export type Pathfinder2eCharacterBuildResult = {
  attributes: Record<Pathfinder2eAttributeSlug, number>

  hitPoints: {
    ancestryBase: number
    classPerLevel: number
    constitutionPerLevel: number
    total: number
  }

  speedFeet: number
  vision: string
  size: string
  reachFeet: number
  languages: string[]

  proficiencies: {
    perception: number
    savingThrows: {
      fortitude: number
      reflex: number
      will: number
    }
    attacks: Record<string, number>
    defenses: Record<string, number>
    spellcasting: number
  }

  trainedSkills: string[]

  grantedItems: Pathfinder2eGrantedItemReference[]

  validationIssues: Pathfinder2eBuildValidationIssue[]
}
```

## 25.4. Recalcular sempre

Não aplicar bônus cumulativos diretamente.

Ao alterar uma seleção:

```text
reconstruir resultado a partir das seleções e escolhas
```

Isso evita:

- HP antigo de outra Classe;
- idioma antigo;
- visão antiga;
- proficiência residual;
- boost duplicado;
- feat residual.

---

# 26. Features e UUIDs

## 26.1. Classes, Ancestralidades e Backgrounds

Podem possuir:

```text
system.items
```

## 26.2. Primeira entrega

Preservar referências.

Não copiar automaticamente o documento completo.

## 26.3. Resolver depois

Futuro catálogo adicional:

```text
class-features
ancestry-features
feats
```

## 26.4. Integridade

O summary deve informar:

```text
unresolvedGrantedItemReferences
```

Mas não bloquear toda geração caso a referência seja externa ou baseada em nome.

---

# 27. Testes obrigatórios

## 27.1. Gerador

- encontra todos os packs;
- suporta diretórios recursivos;
- ignora `_folders.json`;
- gera output determinístico;
- não gera IDs duplicados;
- não gera slugs duplicados;
- preserva `_id`;
- preserva source path;
- preserva publication;
- preserva rules;
- preserva `system.items`;
- falha com JSON inválido.

## 27.2. Classes

Testar ao menos:

```text
Fighter
Wizard
Cleric
Rogue
Alchemist
```

Validar:

- HP;
- key abilities;
- proficiências;
- progressão;
- trained skills;
- rules;
- features.

## 27.3. Ancestralidades

Testar ao menos:

```text
Elf
Human
Dwarf
Goblin
Orc
```

Validar:

- boosts;
- flaws;
- HP;
- velocidade;
- visão;
- idiomas;
- traits.

## 27.4. Heranças

Testar:

```text
Arctic Elf
uma herança de Dwarf
uma herança de Human
Nephilim
outra herança versátil
```

Validar:

- específica;
- versátil;
- slug;
- UUID;
- compatibilidade.

## 27.5. Backgrounds

Testar:

```text
Acolyte
Scholar
Warrior
Criminal
Artisan
```

Validar:

- boosts;
- skills;
- lore;
- granted feat.

## 27.6. API

- lista por kind;
- paginação;
- busca;
- filtro de raridade;
- detalhe;
- 404;
- validação de kind;
- Heranças por Ancestralidade;
- inclusão de versáteis;
- autenticação.

## 27.7. Ficha

- cria ficha V2 vazia;
- persiste seleção de catálogo;
- persiste seleção custom;
- migra V1;
- preserva texto sem match;
- invalida Herança incompatível;
- mantém Herança versátil;
- troca Ancestralidade corretamente.

## 27.8. Build choices

- key ability válida;
- key ability inválida;
- boost válido;
- boost fora das opções;
- idioma adicional;
- quantidade de skill correta;
- ChoiceSet da Classe.

---

# 28. Critérios de aceite

- [ ] Existe módulo `.ai/game_systems/pathfinder_2e/character_options`.
- [ ] Os quatro packs são extraídos.
- [ ] A geração usa a cópia local `pf2e-master`.
- [ ] A revisão da fonte é registrada.
- [ ] Todos os documentos possuem ID estável.
- [ ] Todos possuem source metadata.
- [ ] Todos possuem descrição normalizada.
- [ ] Todas as rules são preservadas.
- [ ] Todos os `system.items` são preservados como referências.
- [ ] Classes possuem HP, key abilities e proficiências.
- [ ] Ancestralidades possuem HP, boosts, flaws, idiomas, velocidade e visão.
- [ ] Heranças específicas apontam para Ancestralidade.
- [ ] Heranças versáteis usam `ancestry = null`.
- [ ] Backgrounds possuem boosts, skills e Lore.
- [ ] A API é independente de campanha.
- [ ] A API permite busca e paginação.
- [ ] A ficha V2 não usa strings livres como única fonte canônica.
- [ ] Conteúdo customizado continua suportado.
- [ ] Fichas V1 são migráveis.
- [ ] Herança incompatível não permanece silenciosamente.
- [ ] O core não contém campos mecânicos PF2e.
- [ ] O registry da API apenas registra o adapter.
- [ ] A UI não conhece a estrutura bruta do Foundry.
- [ ] O build passa.
- [ ] Os testes passam.
- [ ] A documentação está atualizada.

---

# 29. Todo list de execução

## Fase 0 — Auditoria

- [ ] Ler `AGENTS.md`.
- [ ] Ler `.ai/game_systems/pathfinder_2e/character_sheet/*`.
- [ ] Ler `.ai/character_creation/*`.
- [ ] Mapear todos os usos de `className`.
- [ ] Mapear todos os usos de `identity.ancestry`.
- [ ] Mapear todos os usos de `identity.heritage`.
- [ ] Mapear todos os usos de `identity.background`.
- [ ] Mapear validação do envelope.
- [ ] Mapear default sheet.
- [ ] Mapear frontend.
- [ ] Confirmar estrutura local de `pf2e-master`.
- [ ] Obter revisão local do repositório.
- [ ] Contar arquivos dos quatro packs.
- [ ] Auditar valores de `type`.
- [ ] Auditar `system.items`.
- [ ] Auditar `rules.key`.
- [ ] Auditar Heranças com `ancestry = null`.
- [ ] Auditar Heranças com ancestry específica.
- [ ] Auditar slugs duplicados.
- [ ] Documentar achados antes do código.

## Fase 1 — Especificação

- [ ] Criar `readme.md`.
- [ ] Criar `skills.md`.
- [ ] Criar `specs.md`.
- [ ] Criar `todo.md`.
- [ ] Atualizar docs da ficha PF2e.
- [ ] Remover “validação canônica fora do escopo”.
- [ ] Documentar V2.
- [ ] Documentar migração V1.
- [ ] Documentar custom selections.
- [ ] Documentar compatibilidade de Herança.
- [ ] Documentar rules preservadas.
- [ ] Documentar limites do MVP.
- [ ] Registrar ADR se necessário.

## Fase 2 — Core genérico

- [ ] Criar package path de character-options.
- [ ] Criar kinds genéricos.
- [ ] Criar source.
- [ ] Criar display.
- [ ] Criar entry.
- [ ] Criar list options.
- [ ] Criar adapter.
- [ ] Exportar no index.
- [ ] Garantir ausência de campos PF2e no core.
- [ ] Adicionar testes de tipos quando aplicável.

## Fase 3 — Modelos PF2e

- [ ] Criar base comum.
- [ ] Criar source.
- [ ] Criar description.
- [ ] Criar rule element.
- [ ] Criar granted item.
- [ ] Criar attribute choice.
- [ ] Criar class entry.
- [ ] Criar ancestry entry.
- [ ] Criar heritage entry.
- [ ] Criar background entry.
- [ ] Criar enums e slugs.
- [ ] Adicionar schemaVersion.
- [ ] Adicionar warnings.

## Fase 4 — Utilitários do gerador

- [ ] Criar resolução de packs.
- [ ] Criar walker recursivo.
- [ ] Criar parser JSON.
- [ ] Criar slug.
- [ ] Criar cleaner HTML.
- [ ] Criar publication parser.
- [ ] Criar rule parser.
- [ ] Criar UUID parser.
- [ ] Criar feature parser.
- [ ] Criar validação comum.
- [ ] Criar deterministic sort.

## Fase 5 — Normalizador de Classe

- [ ] Validar type.
- [ ] Extrair HP.
- [ ] Extrair key abilities.
- [ ] Extrair Perception.
- [ ] Extrair saves.
- [ ] Extrair attacks.
- [ ] Extrair defenses.
- [ ] Extrair spellcasting.
- [ ] Extrair trained skills.
- [ ] Extrair progressão.
- [ ] Extrair items.
- [ ] Extrair rules.
- [ ] Extrair traits.
- [ ] Extrair publicação.
- [ ] Adicionar testes.

## Fase 6 — Normalizador de Ancestralidade

- [ ] Extrair HP.
- [ ] Extrair speed.
- [ ] Extrair size.
- [ ] Extrair hands.
- [ ] Extrair reach.
- [ ] Extrair vision.
- [ ] Extrair languages.
- [ ] Extrair additional languages.
- [ ] Extrair boosts.
- [ ] Extrair flaws.
- [ ] Extrair alternate boosts.
- [ ] Extrair rules.
- [ ] Extrair items.
- [ ] Adicionar testes.

## Fase 7 — Normalizador de Herança

- [ ] Extrair ancestry.
- [ ] Detectar versatile.
- [ ] Preservar name.
- [ ] Preservar slug.
- [ ] Preservar UUID.
- [ ] Resolver source ID.
- [ ] Criar índice por Ancestralidade.
- [ ] Criar lista de versáteis.
- [ ] Registrar ancestry não resolvida.
- [ ] Adicionar testes.

## Fase 8 — Normalizador de Background

- [ ] Extrair boosts.
- [ ] Extrair trained skills.
- [ ] Extrair Lore.
- [ ] Extrair items.
- [ ] Extrair rules.
- [ ] Extrair traits.
- [ ] Extrair publicação.
- [ ] Adicionar testes.

## Fase 9 — Summary

- [ ] Contar classes.
- [ ] Contar ancestries.
- [ ] Contar heritages.
- [ ] Contar backgrounds.
- [ ] Contar heranças versáteis.
- [ ] Contar raridades.
- [ ] Contar publicações.
- [ ] Contar licenças.
- [ ] Contar rule keys.
- [ ] Listar rule keys sem executor.
- [ ] Listar slugs duplicados.
- [ ] Listar IDs duplicados.
- [ ] Listar ancestry refs não resolvidas.
- [ ] Listar feature refs não resolvidas.
- [ ] Listar documentos inválidos.
- [ ] Listar warnings.
- [ ] Criar testes do summary.

## Fase 10 — Arquivos gerados

- [ ] Gerar classes.
- [ ] Gerar ancestries.
- [ ] Gerar heritages.
- [ ] Gerar backgrounds.
- [ ] Gerar summary.
- [ ] Validar determinismo.
- [ ] Revisar tamanho dos arquivos.
- [ ] Confirmar ausência de dados temporários.
- [ ] Adicionar comando no package.json.
- [ ] Documentar como regenerar.

## Fase 11 — Catálogo e adapter

- [ ] Criar Maps.
- [ ] Criar list functions.
- [ ] Criar find functions.
- [ ] Criar busca textual.
- [ ] Criar filtros.
- [ ] Criar paginação.
- [ ] Criar compatibilidade de Herança.
- [ ] Criar display adapter.
- [ ] Exportar adapter.
- [ ] Registrar no game system registry.

## Fase 12 — API

- [ ] Criar models genéricos.
- [ ] Criar registry.
- [ ] Criar rota de listagem.
- [ ] Criar rota de detalhe.
- [ ] Criar query schema.
- [ ] Validar system.
- [ ] Validar kind.
- [ ] Validar paginação.
- [ ] Validar ancestryId.
- [ ] Aplicar auth.
- [ ] Adicionar testes HTTP.
- [ ] Registrar rotas no server.

## Fase 13 — Ficha V2

- [ ] Criar selection type.
- [ ] Atualizar identity.
- [ ] Adicionar buildChoices.
- [ ] Atualizar models.
- [ ] Atualizar schema Zod.
- [ ] Atualizar default sheet.
- [ ] Atualizar fixtures.
- [ ] Atualizar adapter version.
- [ ] Aceitar V1 temporariamente.
- [ ] Escrever apenas V2.
- [ ] Atualizar testes.

## Fase 14 — Migração

- [ ] Criar normalização de texto.
- [ ] Criar busca por nome.
- [ ] Criar busca por slug.
- [ ] Migrar Classe.
- [ ] Migrar Ancestralidade.
- [ ] Migrar Herança.
- [ ] Migrar Background.
- [ ] Tratar ambiguidade.
- [ ] Tratar custom.
- [ ] Validar compatibilidade.
- [ ] Gerar migration issues.
- [ ] Testar idempotência.
- [ ] Não perder texto original.

## Fase 15 — UI

- [ ] Criar selector genérico.
- [ ] Criar modal.
- [ ] Criar cards.
- [ ] Criar detalhes.
- [ ] Criar selector de Classe.
- [ ] Criar selector de Ancestralidade.
- [ ] Criar selector de Herança.
- [ ] Criar selector de Background.
- [ ] Criar custom option.
- [ ] Criar loading.
- [ ] Criar empty state.
- [ ] Criar error state.
- [ ] Criar paginação.
- [ ] Criar busca.
- [ ] Criar filtro de raridade.
- [ ] Integrar na ficha.
- [ ] Limpar Herança incompatível.
- [ ] Adicionar testes de UI.

## Fase 16 — Build choices

- [ ] Criar formulário de boosts.
- [ ] Criar escolha de key ability.
- [ ] Criar escolha de trained skills.
- [ ] Criar idiomas adicionais.
- [ ] Criar rule selections.
- [ ] Validar quantidade.
- [ ] Persistir choices.
- [ ] Limpar choices obsoletas.
- [ ] Adicionar testes.

## Fase 17 — Aplicação mecânica mínima

- [ ] Criar build service.
- [ ] Aplicar HP de Ancestralidade.
- [ ] Aplicar HP de Classe.
- [ ] Aplicar boosts.
- [ ] Aplicar flaws.
- [ ] Aplicar speed.
- [ ] Aplicar vision.
- [ ] Aplicar size.
- [ ] Aplicar languages.
- [ ] Aplicar Perception.
- [ ] Aplicar saves.
- [ ] Aplicar proficiências.
- [ ] Aplicar trained skills.
- [ ] Produzir validation issues.
- [ ] Não executar rules desconhecidas.
- [ ] Adicionar testes.

## Fase 18 — Qualidade

- [ ] Rodar testes unitários.
- [ ] Rodar testes da API.
- [ ] Rodar testes do frontend.
- [ ] Rodar build da API.
- [ ] Rodar build web.
- [ ] Rodar lint.
- [ ] Revisar outputs gerados.
- [ ] Revisar summary.
- [ ] Revisar documentação.
- [ ] Confirmar arquitetura modular.
- [ ] Confirmar ausência de lógica PF2e no core.
- [ ] Confirmar ausência de fetch remoto em runtime.

## Fase 19 — Validação manual

- [ ] Selecionar Fighter.
- [ ] Selecionar Elf.
- [ ] Selecionar Arctic Elf.
- [ ] Selecionar Nephilim.
- [ ] Selecionar Acolyte.
- [ ] Trocar Elf por Dwarf.
- [ ] Confirmar limpeza de Arctic Elf.
- [ ] Confirmar manutenção de Nephilim.
- [ ] Criar opção customizada.
- [ ] Migrar ficha antiga.
- [ ] Abrir detalhes de cada opção.
- [ ] Validar source/publication.
- [ ] Validar busca.
- [ ] Validar paginação.
- [ ] Validar rascunho incompleto.
- [ ] Validar save/reload.

---

# 30. Não fazer

- Não manter os quatro campos apenas como strings.
- Não salvar somente nomes.
- Não identificar documentos pelo nome.
- Não associar Herança pela pasta.
- Não inferir Herança versátil pelo nome.
- Não colocar regras PF2e no core.
- Não copiar o documento inteiro para `Character.sheet`.
- Não popular banco relacional com todos os catálogos.
- Não buscar GitHub em runtime.
- Não executar Rule Elements desconhecidas.
- Não descartar rules.
- Não descartar UUIDs.
- Não descartar publicação e licença.
- Não renderizar HTML bruto sem sanitização.
- Não aplicar bônus cumulativamente.
- Não manter efeitos antigos após troca de opção.
- Não apagar conteúdo customizado.
- Não quebrar fichas V1 sem migração.
- Não criar migration Prisma se o JSON versionado for suficiente.
- Não alterar módulos não relacionados.
- Não encerrar sem testes e documentação.

---

# 31. Entregáveis

O agent deve entregar:

1. documentação do novo módulo;
2. contratos core;
3. contratos PF2e;
4. script de geração;
5. normalizadores;
6. arquivos gerados;
7. summary de auditoria;
8. catálogo em memória;
9. adapter genérico;
10. rotas HTTP;
11. ficha version 2;
12. migração V1 para V2;
13. seletores frontend;
14. suporte custom;
15. filtro de Heranças;
16. build choices;
17. aplicação mecânica mínima, se incluída no escopo;
18. testes;
19. relatório final.

---

# 32. Relatório final obrigatório do agent

Ao concluir, o agent deve informar:

```text
Arquivos criados
Arquivos alterados
Contratos adicionados
Quantidade de Classes extraídas
Quantidade de Ancestralidades extraídas
Quantidade de Heranças específicas
Quantidade de Heranças versáteis
Quantidade de Backgrounds
Rule keys encontradas
Referências não resolvidas
Warnings de normalização
Testes executados
Builds executados
Pendências futuras
```

O relatório deve citar a revisão utilizada de `pf2e-master`.

---

# 33. Resultado final esperado

Exemplo de ficha:

```ts
identity: {
  level: 1,

  ancestry: {
    source: 'catalog',
    id: 'pf2e:ancestry:elf',
    sourcePack: 'ancestries',
    sourceId: 'PgKmsA2aKdbLU6O0',
    slug: 'elf',
    name: 'Elf',
  },

  heritage: {
    source: 'catalog',
    id: 'pf2e:heritage:arctic-elf',
    sourcePack: 'heritages',
    sourceId: '1dYDucCIaZpCJqBc',
    slug: 'arctic-elf',
    name: 'Arctic Elf',
  },

  background: {
    source: 'catalog',
    id: 'pf2e:background:acolyte',
    sourcePack: 'backgrounds',
    sourceId: 'CAjQrHZZbALE7Qjy',
    slug: 'acolyte',
    name: 'Acolyte',
  },

  class: {
    source: 'catalog',
    id: 'pf2e:class:fighter',
    sourcePack: 'classes',
    sourceId: '8zn3cD6GSmoo1LW4',
    slug: 'fighter',
    name: 'Fighter',
  },
}
```

Escolhas:

```ts
buildChoices: {
  ancestry: {
    boosts: {
      '0': 'dex',
      '1': 'int',
      '2': 'str',
    },
    flaws: {
      '0': 'con',
    },
    alternateBoostsEnabled: false,
    additionalLanguages: [],
    ruleSelections: {},
  },

  heritage: {
    ruleSelections: {},
  },

  background: {
    boosts: {
      '0': 'wis',
      '1': 'str',
    },
    ruleSelections: {},
  },

  class: {
    keyAbility: 'str',
    trainedSkills: ['athletics'],
    ruleSelections: {
      fighterSkill: 'athletics',
    },
  },
}
```

A ficha deve poder ser reconstruída mecanicamente a partir de:

```text
catálogo + seleções + escolhas + nível
```

Sem depender de texto livre, estado acumulado ou lógica escondida no frontend.
