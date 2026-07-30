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

Defesas estruturadas de magias seguem o contrato determinístico abaixo:

| Original `en-US` | Campo `defense` em `pt-BR` |
| --- | --- |
| `will save` | `teste de Vontade` |
| `fortitude save` | `teste de Fortitude` |
| `reflex save` | `teste de Reflexos` |
| `basic will save` | `teste básico de Vontade` |
| `basic fortitude save` | `teste básico de Fortitude` |
| `basic reflex save` | `teste básico de Reflexos` |
| `fortitude-dc` | `CD de Fortitude` |
| `ac` | `CA` |

O importador não envia esses valores ao tradutor automático. Na apresentação,
o adapter deriva novamente o texto a partir do original para proteger lotes
anteriores contra traduções literais como `vai salvar`.

Nomes de ações incorporadas que representam modificadores mecânicos também
devem ser traduzidos deterministicamente a partir do original. Construções
como `Saves vs.`, `Will Saves vs.` e `AC vs.` usam, respectivamente, `testes
de resistência contra`, `testes de Vontade contra` e `CA contra`; tipos de
bônus e alvos do modificador devem ser preservados. Esses nomes não podem ser
publicados truncados em `vs.`, com `Will Saves` ou com `salvamentos`.

Como `magia` é um substantivo feminino, os overlays `pt-BR` devem normalizar
determinantes imediatamente associados ao termo. Isso inclui artigos,
demonstrativos, numerais indefinidos e contrações: `o magia` → `a magia`,
`este magia` → `esta magia`, `um magia` → `uma magia`, `do magia` → `da
magia`, com as mesmas correções para plural e capitalização. A regra deve ser
idempotente, atuar somente diante de `magia` ou `magias` e ser aplicada tanto
às novas traduções quanto à sanitização dos lotes anteriores.

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
- aplicar a mesma resolução às fórmulas estruturadas de dano ou cura de
  Spells, tanto durante a normalização quanto na fronteira de apresentação;
- calcular operações aritméticas suportadas de forma determinística e sem
  executar código arbitrário;
- converter `@Template[type|distance:N]` em uma descrição textual da área;
- converter anotações de dano como `[bleed]` e `[persistent,fire]` em texto
  legível;
- reduzir comandos enriquecidos `[[/r ...]]`, `[[/gmr ...]]` e `[[/br ...]]`
  à fórmula exibível;
- converter `[[/act ... dc=N]]` em nome de ação legível com a CD preservada;
- descartar opções de automação de `@Damage` depois de preservar fórmula e tipo;
- remover rótulos auxiliares de rolagem delimitados por `{...}`;
- garantir que `name`, `description`, campos da ficha e textos de ações não
  exponham tokens iniciados por `@` ou comandos iniciados por `[[/`.

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

### 5.4. Filtros do Bestiário

A fronteira compartilhada do catálogo transporta filtros sem conhecer conceitos
de Pathfinder:

```ts
type GameSystemCatalogFilterSelection = Readonly<Record<string, readonly string[]>>

type GameSystemCatalogFilterDefinition = {
  id: string
  label: string
  kind: 'single' | 'multiple'
  options: ReadonlyArray<{ value: string; label: string }>
}

type GameSystemCatalogQuery = {
  // demais campos
  filters?: GameSystemCatalogFilterSelection
}
```

Na query HTTP, cada seleção usa um parâmetro repetível e opaco:

```text
filter=<filterId>:<value>
```

O registry valida somente tamanho e quantidade, agrupa os valores por
`filterId` e delega a interpretação ao provider do sistema da campanha. Ele não
declara IDs nem opções específicas.

Quando `domain = 'BESTIARY'`, o provider Pathfinder 2e publica quatro
descritores:

| ID | Tipo | Fonte |
|---|---|---|
| `type` | `single` | `entryType`, tratando a ausência histórica como criatura |
| `level` | `single` | `data.level` |
| `rarity` | `single` | `data.rarity` |
| `traits` | `multiple` | `data.traits` |

Regras:

- nível, raridade e tipo aceitam um valor efetivo por vez;
- traits aceitam múltiplos valores e usam semântica `AND`;
- labels de raridade e traits são localizados pelo glossário, mas os values
  permanecem mecânicos e estáveis;
- opções são derivadas do conjunto completo do Bestiário e ordenadas
  deterministicamente;
- filtros podem ser combinados entre si, com busca e status editorial;
- todos são aplicados antes da ordenação e da paginação;
- valores desconhecidos e filtros de Bestiário enviados a outros domínios são
  ignorados;
- entradas históricas sem `entryType` são tratadas como criaturas;
- o resultado devolve `filterDefinitions`, permitindo que a UI compartilhada
  renderize os controles sem conhecer Pathfinder 2e.

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
  exhaustedDomains?: Pathfinder2eContentDomain[]
  terminalReconciliation?: boolean
}
```

Antes de `SOURCE_LOCKED`, `frozenEntryIds` pode estar vazio. Depois disso, a
seleção deve estar congelada e possuir ao menos uma entrada em cada domínio
que ainda tenha registros elegíveis. Um domínio pode ficar vazio somente se:

1. a reconciliação integral com a fonte travada comprovar saldo zero;
2. o domínio estiver explicitamente listado em `exhaustedDomains`;
3. seu array em `frozenEntryIds` estiver vazio;
4. nenhum registro duplicado ou placeholder for criado para preencher a
   rodada.

`terminalReconciliation = true` autoriza uma seleção acima do limite normal
somente para o último domínio pendente. O contrato exige:

1. ao menos um domínio com seleção acima do limite corrente;
2. todos os demais domínios listados em `exhaustedDomains`;
3. inventário e source lock determinísticos;
4. seleção integral do saldo, sem corte parcial;
5. zero registros elegíveis pendentes após a integração.

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

O modo de elegibilidade da importação deve ser explícito:

- `REMASTER_ONLY` aceita somente registros com `publication.remaster = true`;
- `LEGACY_ONLY` aceita somente registros com `publication.remaster = false`;
- `ANY` existe apenas para reproduzir lotes históricos anteriores.

Esse filtro ocorre antes da precedência de publicação, nível/Rank e identidade
da fonte. Registros de títulos mistos permanecem no cursor do programa
correspondente ao próprio indicador editorial.

O argumento pode declarar modos independentes na ordem
`Items|Spells|Bestiário`. O importador deve validar as três posições e aplicar
cada modo exclusivamente ao respectivo domínio. Um modo único equivale a
repeti-lo nas três posições. Isso preserva o avanço independente quando um
domínio já esgotou Remaster e avançou para Legacy/OGL antes dos demais.

## 8. Regra para publicação sem os três domínios

Se uma publicação possuir apenas um ou dois domínios:

1. não criar uma rodada incompleta;
2. acumular a publicação com a próxima publicação do mesmo programa;
3. interromper o agrupamento assim que houver ao menos uma entrada nos três domínios;
4. respeitar os limites máximos da rodada;
5. se os limites forem excedidos, dividir por nível/rank mantendo todos os domínios em cada divisão.

A divisão do item 5 não se aplica à reconciliação terminal explicitamente
solicitada e marcada por `terminalReconciliation = true`.

Essa regra deixa de exigir uma entrada apenas para domínios já comprovadamente
esgotados no inventário global. As rodadas terminais continuam declarando os
três seletores, mas `frozenEntryIds` permanece vazio nos domínios listados em
`exhaustedDomains`.

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
- selecionar no máximo 400 entradas de Bestiário, 200 magias e 400 itens por
  lote;
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
- a importação de Spells deve receber um seletor técnico exato
  (`spells`, `focus` ou `rituals`) quando não usar o diretório ordinário;
- o seletor de Spells altera somente o subdiretório de leitura em
  `packs/pf2e/spells/` e o relatório de importação; `sourcePack` e `contentId`
  continuam usando `spells-srd`;
- uma execução seleciona um único diretório técnico de Spells, sem inferência
  por publicação;
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

Da Cobertura exaustiva 02 até a 15, cada lote seleciona até 100 entradas de
Bestiário, 40 magias e 100 itens. A partir da Cobertura exaustiva 16, os limites
passam a `200 / 100 / 200`; na Cobertura exaustiva 17, passam a
`400 / 200 / 400`. Quando as publicações correntes possuem menos entradas
elegíveis pendentes, o domínio encerra abaixo do limite sem criar registros
artificiais. Os IDs dos pilotos e de todas as coberturas exaustivas anteriores
devem ser descontados antes da ordenação e do corte do lote.

Quando um domínio recebe mais de uma publicação, a seleção é ordenada por:

1. posição da publicação na lista editorial explícita;
2. nível ou Rank crescente dentro da publicação;
3. identidade estável da fonte.

Uma publicação posterior nunca pode intercalar registros com a publicação
corrente, ainda que possua níveis ou Ranks menores.

O título editorial normalizado usa `publication.title.trim()`. Quando a fonte
contiver whitespace externo, o registro preserva o hash do documento bruto,
persiste o título sem whitespace e recebe o aviso
`source-publication-title-trimmed` no manifesto de importação.

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

`skills` contém somente modificadores numéricos finitos; entradas inválidas são
omitidas com aviso, nunca convertidas em zero. O bloco opcional `damage` de
Items só é emitido quando quantidade de dados, dado e tipo estão completos.
Estruturas incompletas são omitidas com aviso, preservando integralmente a
descrição textual da fonte.

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
