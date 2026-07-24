# Pathfinder 2e — Catálogo Bilíngue — Especificação

## 1. Domínios obrigatórios

```ts
type Pathfinder2eContentDomain = 'BESTIARY' | 'SPELL' | 'ITEM'
type Pathfinder2eContentLocale = 'en-US' | 'pt-BR'
```

Toda rodada com `kind = "CONTENT"` deve possuir seleção para os três domínios e os dois idiomas.

O domínio `BESTIARY` reúne duas espécies de entrada:

```ts
type Pathfinder2eBestiaryEntryType = 'CREATURE' | 'HAZARD'
```

Entradas históricas sem `entryType` são interpretadas como `CREATURE`.

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
- o caminho deve começar com `/api/game-systems/pathfinder-2e/icons/`;
- o arquivo físico correspondente fica em `apps/api/src/game_systems/pathfinder_2e/icons/`;
- sem correspondência local exata, `image` deve ser omitido e a interface usa o ícone genérico;
- a remoção do arquivo não pode impedir o build nem remover o registro do catálogo.

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
- fallback para `en-US` não altera o status de tradução;
- `REVIEWED` não gera tag visual;
- traduções ainda pendentes geram `Tradução em revisão` em `editorialStatus`;
- o filtro `ready` continua usando o status persistido, mesmo sem tag visual.

### 5.1. Texto apresentado

O texto entregue ao contrato neutro do catálogo deve estar livre de comandos
de runtime da fonte.

```ts
type Pathfinder2eInlineTextContext = {
  locale: Pathfinder2eContentLocale
  itemLevel?: number
  itemRank?: number
  actorLevel?: number
  actorStrengthModifier?: number
}
```

O adapter Pathfinder deve:

- resolver `@item.level` e `@item.rank` com o nível ou Rank do registro;
- calcular operações aritméticas suportadas de forma determinística e sem
  executar código arbitrário;
- converter `@Template[type|distance:N]` em uma descrição textual da área;
- converter anotações de dano como `[bleed]` e `[persistent,fire]` em texto
  legível;
- remover rótulos auxiliares de rolagem delimitados por `{...}`;
- garantir que `name`, `description`, campos da ficha e textos de ações não
  exponham tokens iniciados por `@`.

Para `Grim Tendrils` no Rank 1, por exemplo:

```text
(@item.level)[bleed] damage
→ 1 persistent bleed damage
```

O original congelado e seus hashes não são reescritos por essa adaptação de
apresentação.

### 5.2. Cobertura de traits

Toda trait estruturada apresentada em `pt-BR` deve estar em uma destas
categorias:

1. tradução explícita compartilhada;
2. tradução explícita específica do domínio;
3. termo próprio explicitamente marcado como preservado;
4. família parametrizada reconhecida e formatada.

O glossário deve expor uma verificação de cobertura separada da tradução. Uma
tradução cujo resultado textual coincida com o identificador original ainda
pode estar coberta, mas um identificador desconhecido que caiu no fallback não
pode passar nos testes editoriais.

A verificação inclui:

- traits das entidades de Bestiário;
- traits dos ataques incorporados;
- traits de Items;
- todas as entregas integradas ao catálogo.

### 5.3. Hazard

```ts
type Pathfinder2eHazardData = {
  schemaVersion: 1
  entryType: 'HAZARD'
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  description: string
  armorClass: number
  hitPoints: number
  hardness: number
  stealth: {
    modifier: number
    details: string
  }
  disable: string
  isComplex: boolean
  routine: string
  reset: string
  saves: {
    fortitude: number
    reflex: number
    will: number
  }
  defenses: {
    immunities: string[]
    resistances: string[]
    weaknesses: string[]
  }
  actions: Array<{
    id: string
    name: string
    kind: 'action' | 'reaction' | 'passive'
    description: string
    traits: string[]
  }>
}
```

A ficha neutra de hazard apresenta as seções na seguinte ordem:

1. `Detecção`, com Furtividade e requisitos de detecção;
2. `Desarme`, com o procedimento completo em um campo largo;
3. `Defesas`, com CA, PV, Dureza, salvamentos, imunidades, resistências e
   fraquezas;
4. `Comportamento`, com Rotina e Reinicialização;
5. `Ações e reações`.

Seções sem campos não são renderizadas. Campos exclusivos de criatura não
fazem parte desse registro. Macros técnicas de testes provenientes da fonte,
como `check (thievery, dc:26, ...)`, devem ser convertidas pelo adapter em
texto legível para o idioma solicitado; em `pt-BR`, o exemplo resulta em
`Ladinagem CD 26`.

O overlay `pt-BR` de um hazard contém `name`, `description`, `size`,
`stealthDetails`, `disable`, `routine`, `reset`, `defenses` e `actions`. Ações
são endereçadas pelo ID original, da mesma forma que ações de criaturas.

### 5.4. Filtro do Bestiário

A listagem neutra do catálogo aceita:

```ts
type GameSystemCatalogBestiaryFilter = 'all' | 'creatures' | 'hazards'

type GameSystemCatalogQuery = {
  // demais campos
  bestiaryType?: GameSystemCatalogBestiaryFilter
}
```

O filtro só restringe resultados quando `domain = 'BESTIARY'` e é aplicado
antes da busca, ordenação e paginação. Entradas históricas sem `entryType` são
tratadas como criaturas. Para os demais domínios, o provider ignora
`bestiaryType`.

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

`level` e `rank` são filtros de inventário, não declarações automáticas de
cobertura. Uma faixa só é concluída quando todos os IDs elegíveis dentro dela
estiverem associados a uma entrega publicada ou a uma rejeição justificada.

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

O programa `LEGACY_OGL` recebe registros com `remaster = false`. O valor
`license = "OGL"` isoladamente não torna um registro Legacy: conteúdos
editorialmente Remaster preservam a licença declarada pela fonte e permanecem
no programa correspondente à publicação.

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

### 9.1. Cursor exaustivo por domínio

```ts
type DomainCoverageCursor = {
  domain: Pathfinder2eContentDomain
  publicationTitle: string
  lowestIncompleteValue: number
  remainingAtValue: number
  exhaustedThrough: number | null
}
```

Regras:

- Bestiário e Items usam `level`;
- Spells usa `rank`;
- documentos da fonte com `type = "npc"` ou `type = "hazard"` são elegíveis
  para Bestiário;
- o cursor começa no menor valor existente na fonte travada; truques permanecem
  identificados pela trait `cantrip` e pelo Rank normalizado da fonte;
- ordenar primeiro pelo valor crescente e depois por `sourcePack + sourceId`;
- excluir somente IDs publicados ou rejeitados com justificativa;
- selecionar no máximo 100 criaturas, 40 magias e 100 itens por lote;
- não selecionar valor superior enquanto houver entrada elegível pendente em
  qualquer valor inferior do mesmo domínio;
- os três cursores avançam independentemente;
- cada domínio mantém também um cursor de publicação independente;
- a publicação de um domínio só avança quando não houver nenhuma entrada
  elegível pendente nela;
- avançar a publicação de um domínio não altera o livro corrente dos demais;
- a seleção e o manifesto devem registrar explicitamente a publicação de cada
  domínio, inclusive quando uma rodada combinar livros Core Remaster distintos;
- se um domínio esgotar todas as publicações de um programa antes dos demais,
  somente esse cursor avança para o programa editorial seguinte;
- a rodada de transição usa em `program` o programa mais antigo ainda pendente
  em qualquer domínio; cada entrada preserva sua publicação real em
  `source.publicationTitle`;
- a importação de Bestiário deve receber explicitamente o pack técnico da
  publicação quando ele não for `pathfinder-monster-core`;
- o pack técnico informado compõe `sourcePack`, `contentId` e o diretório de
  leitura, sem inferência por nome aproximado;
- toda entrega continua contendo os três domínios.

Quando uma cobertura de Bestiário combina packs, a ordem editorial dos packs
tem precedência sobre nível. Dentro de cada pack/publicação, a ordenação
continua sendo nível crescente e `sourcePack + sourceId`.

Quando um item `kit` da publicação travada não declarar `system.level`, o
normalizador atribui nível 0 e inclui
`missing-source-level-defaulted-to-zero` em `normalizationWarnings`.

Um conteúdo original normalizado sem tradução editorial deve possuir overlay
PT-BR explícito:

```ts
{
  status: "NOT_STARTED",
  fields: {}
}
```

Esse registro representa ausência de tradução. Copiar conteúdo inglês para
`fields` e marcá-lo como rascunho é proibido.

Quando todos os campos textuais previstos para a entidade forem preenchidos em
PT-BR por tradução automática, o status passa para `MACHINE_DRAFT`. Nomes,
descrições, ataques, ações, conjuração e campos específicos de Spells e Items
devem ser cobertos; o original inglês permanece imutável.

O asset de uma entrada gerada deve ser resolvido exclusivamente a partir do
`img` original:

```ts
systems/pf2e/icons/<relativePath>
  -> /api/game-systems/pathfinder-2e/icons/<relativePath>
```

A rota só é emitida se `<relativePath>` existir no repositório QuestHub.

Da Cobertura exaustiva 02 em diante, cada lote seleciona até 100 entradas de
Bestiário, 40 magias e 100 itens. Quando as publicações correntes possuem menos
entradas elegíveis pendentes, o domínio encerra abaixo do limite sem criar
registros artificiais. Os IDs dos pilotos e de todas as coberturas exaustivas
anteriores devem ser descontados antes da ordenação e do corte do lote.

A normalização de criaturas preserva conjuração incorporada. Cada entrada de
conjuração mantém ID, nome, tradição, categoria, CD, modificador de ataque e a
lista de spells com ID, nome e Rank. A ficha neutra apenas apresenta esses
dados; ela não executa regras de Pathfinder.

O campo normalizado `speedFeet` deve ser sempre numérico. A velocidade terrestre
finita da fonte tem prioridade; quando ela for `null`, o normalizador usa a
primeira velocidade alternativa finita na ordem original (por exemplo, voo de
uma criatura incorpórea). Se a fonte não fornecer nenhuma velocidade numérica,
o valor normalizado é `0`. Essa adaptação preserva a capacidade de exibição do
contrato atual sem introduzir automação de movimento no VTT.

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
- nenhuma automação mecânica do VTT é criada nesta entrega;
- nenhum conteúdo original é alterado;
- nenhuma imagem é carregada de URL externa em runtime;
- a ausência de todos os ícones mantém o catálogo funcional.

## 13. Manifesto concreto da Rodada 2

A Rodada 2 continua a validação por amostragem com três representantes em cada
domínio. Assim como a Rodada 1, ela é um piloto histórico e não representa
cobertura integral nem avanço do cursor das faixas de nível e Rank.

Seleção congelada:

```text
Bestiário — Pathfinder Monster Core
  pf2e:bestiary:pathfinder-monster-core:animated-statue
  pf2e:bestiary:pathfinder-monster-core:dryad
  pf2e:bestiary:pathfinder-monster-core:griffon

Spells — Pathfinder Player Core
  pf2e:spell:spells-srd:blazing-bolt
  pf2e:spell:spells-srd:dispel-magic
  pf2e:spell:spells-srd:invisibility

Items — Pathfinder Player Core
  pf2e:item:equipment-srd:full-plate
  pf2e:item:equipment-srd:healers-toolkit-expanded
  pf2e:item:equipment-srd:spyglass-fine
```

Critério representativo:

- Bestiário cobre constructo, criatura com habilidades mágicas e criatura voadora,
  incluindo níveis 3 e 4;
- Spells cobre ataque, contramágica/utilidade e defesa/ilusão no Rank 2;
- Items cobre armadura e equipamento, distribuídos entre os níveis 2, 3 e 4.

Os overlays `pt-BR` entram como `MACHINE_DRAFT`. A rodada permanece em
`REVIEWING` e `ready = false` até aprovação humana das nove traduções.
