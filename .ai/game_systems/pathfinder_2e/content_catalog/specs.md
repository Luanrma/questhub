# Pathfinder 2e — Catálogo Bilíngue — Especificação

## 1. Domínios obrigatórios

```ts
type Pathfinder2eContentDomain = 'BESTIARY' | 'SPELL' | 'ITEM'
type Pathfinder2eContentLocale = 'en-US' | 'pt-BR'
```

Toda rodada com `kind = "CONTENT"` deve possuir seleção para os três domínios e os dois idiomas.

## 2. Estados

### 2.1. Rodada

```ts
type ContentRoundStatus =
  | 'PLANNED'
  | 'SOURCE_LOCKED'
  | 'IMPORTING'
  | 'TRANSLATING'
  | 'REVIEWING'
  | 'READY'
  | 'PUBLISHED'
  | 'BLOCKED'
```

### 2.2. Importação por entrada

```ts
type ImportStatus =
  | 'PLANNED'
  | 'IMPORTED'
  | 'NORMALIZED'
  | 'REJECTED'
  | 'STALE'
  | 'RETIRED'
```

### 2.3. Tradução por campo

```ts
type TranslationStatus =
  | 'NOT_STARTED'
  | 'MACHINE_DRAFT'
  | 'HUMAN_DRAFT'
  | 'REVIEWED'
  | 'STALE'
  | 'BLOCKED'
  | 'NOT_REQUIRED'
```

## 3. Referência neutra da fonte

O catálogo não conhece um tipo de provedor externo. A origem é registrada apenas com identificadores técnicos neutros e dados editoriais.

```ts
type SourceLock = {
  systemVersion: string
  sourceCommit: string
  inputChecksum: string
  importerVersion: number
  importedAt: string
}

type SourceIdentity = {
  sourcePack: string
  sourceId: string
  slug?: string
  publicationTitle?: string
  license?: string
  remaster?: boolean
}
```

A chave canônica é:

```text
{sourcePack}:{sourceId}
```

É proibido adicionar ao modelo:

- enum de provedor externo;
- URL de repositório externo;
- lógica de download em runtime;
- dependência de uma aplicação ou serviço de terceiros.

## 4. Documento original

```ts
type OriginalContentRecord<TData = unknown> = {
  contentId: string
  domain: Pathfinder2eContentDomain
  locale: 'en-US'
  source: SourceIdentity
  image?: {
    path: string
  }
  sourceHash: string
  translatableHash: string
  data: TData
}
```

Regras:

- `data` nunca é substituído por uma tradução;
- `sourceHash` considera todo o registro normalizado;
- `translatableHash` considera apenas campos traduzíveis;
- o registro deve continuar consultável mesmo sem tradução;
- `image.path`, quando presente, aponta exclusivamente para um arquivo versionado no repositório QuestHub;
- o caminho público deve começar com `/game-systems/pathfinder-2e/`;
- sem arquivo local, `image` deve ser omitido e a interface usa o ícone genérico.

## 5. Overlay de tradução

```ts
type ContentTranslation = {
  contentId: string
  locale: 'pt-BR'
  sourceTranslatableHash: string
  version: number
  status: TranslationStatus
  fields: Record<string, string | string[] | Record<string, unknown>>
}
```

Regras:

- `fields` contém somente campos traduzíveis;
- chaves mecânicas permanecem no original;
- elementos incorporados devem ser endereçados por ID estável;
- se `sourceTranslatableHash` divergir do original atual, a tradução fica `STALE`;
- fallback para `en-US` não altera o status de tradução.

## 6. Contrato de rodada

```ts
type ContentSelection = {
  publications: string[]
  level?: { min: number; max: number }
  rank?: { min: number; max: number }
  maxEntries: number
}

type ContentRound = {
  id: string
  order: number
  kind: 'CONTENT'
  program: string
  title: string
  status: ContentRoundStatus
  locales: ['en-US', 'pt-BR']
  selection: {
    bestiary: ContentSelection
    spells: ContentSelection
    items: ContentSelection
  }
  frozenEntryIds: {
    bestiary: string[]
    spells: string[]
    items: string[]
  }
}
```

Antes de `SOURCE_LOCKED`, `frozenEntryIds` pode estar vazio. Depois disso, a seleção deve estar congelada e possuir ao menos uma entrada em cada domínio.

## 7. Programas do roadmap

A sequência completa é:

1. Core Remaster;
2. NPC Core;
3. Rulebooks adicionais;
4. Lost Omens;
5. Aventuras independentes;
6. Adventure Paths, por volume;
7. Pathfinder Society, por temporada e cenário;
8. conteúdo Legacy/OGL.

Dentro de cada programa, a ordenação editorial definida no roadmap é obrigatória.

## 8. Regra para publicação sem os três domínios

Se uma publicação possuir apenas um ou dois domínios:

1. não criar uma rodada incompleta;
2. acumular a publicação com a próxima publicação do mesmo programa;
3. interromper o agrupamento assim que houver ao menos uma entrada nos três domínios;
4. respeitar os limites máximos da rodada;
5. se os limites forem excedidos, dividir por nível/rank mantendo todos os domínios em cada divisão.

## 9. Próxima rodada

A próxima rodada é a primeira, ordenada por `order`, cujo status não seja `PUBLISHED`.

Dentro dela, o próximo trabalho é determinado nesta ordem:

```text
source lock
→ inventário
→ importação
→ normalização
→ tradução
→ revisão
→ validação
→ publicação
```

## 10. Relatório de cobertura

Cada rodada deve produzir:

```ts
type DomainCoverage = {
  planned: number
  imported: number
  normalized: number
  translated: number
  reviewed: number
  stale: number
  rejected: number
}

type RoundCoverage = {
  roundId: string
  bestiary: DomainCoverage
  spells: DomainCoverage
  items: DomainCoverage
  ready: boolean
}
```

`ready` só pode ser `true` quando:

- os três domínios possuem entradas;
- todas as entradas planejadas foram normalizadas ou rejeitadas com justificativa;
- todos os campos obrigatórios em `pt-BR` estão `REVIEWED` ou `NOT_REQUIRED`;
- não existem traduções `STALE`;
- publicação e licença estão preenchidas;
- a fonte está travada por commit e checksum.

## 11. Baseline da branch development

O primeiro inventário deve reconciliar, como referência inicial:

```text
Bestiário/NPCs: 5.492
Spells: 1.802
Items: 5.217
```

Esses números são baseline de migração, não constantes permanentes. A fonte travada pode produzir números diferentes, que devem ser explicados no relatório de auditoria.

## 12. Critérios de aceitação da fundação

- existe um roadmap ordenado;
- toda rodada de conteúdo contém os três domínios;
- toda rodada exige `en-US` e `pt-BR`;
- existe função determinística para localizar a próxima rodada;
- existe validação automática do roadmap;
- a fundação não importa módulos do VTT;
- nenhuma rota ou automação é criada nesta entrega;
- nenhum conteúdo original é alterado;
- nenhuma imagem é carregada de URL externa em runtime.
