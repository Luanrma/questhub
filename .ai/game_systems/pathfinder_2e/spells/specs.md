# Submodulo: Pathfinder 2e Livro de Magias (Specs & Contracts)

## 1. Responsabilidade
Expor magias e rituais Pathfinder 2e normalizados como catalogo de ruleset (Livro de Magias) e fornecer uma ficha simplificada para consulta do Mestre e de jogadores quando a magia ja esta referenciada no spellbook. Apenas o catalogo faz parte desta entrega; conjuracao, personagem e efeitos ficam fora de escopo (ver `readme.md` secao 6).

Decisao de nomenclatura registrada: os contratos genericos usam o prefixo `GameSystemSpell*`, seguindo a convencao ja estabelecida por `GameSystemBestiary*` (`packages/game-system-core/src/server/bestiary`) e `GameSystemItem*` (`packages/game-system-core/src/server/items`), em vez dos nomes ilustrativos citados no prompt original (`SpellDefinition`, `SpellRepository`, `SpellCatalogProvider`). Mantem consistencia entre os tres catalogos do core.

## 1.1 Auditoria dos dados reais do compendio
Auditoria local de `pf2e-master/packs/spells` (2026-07-12): 1.717 documentos, todos com `type = "spell"` no Foundry — a distincao de categoria nao vem do `type` documental, e sim de `system.ritual` (ver abaixo).

Distribuicao por pasta do compendio (apenas informativo/organizacional, nunca fonte de verdade para normalizacao):

* `1st-rank` 166, `2nd-rank` 183, `3rd-rank` 149, `4th-rank` 147, `5th-rank` 124, `6th-rank` 75, `7th-rank` 66, `8th-rank` 48, `9th-rank` 40, `10th-rank` 22;
* `cantrip` 69, `focus` 493, `ritual` 134.

Classificacao real usada pela normalizacao (campos estruturados, nunca nome/pasta/icone):

* `category = 'ritual'` quando `system.ritual` existe no documento (contem `primary.check` e `secondary.casters`/`secondary.checks`); caso contrario `category = 'spell'`.
* trait `cantrip` em `system.traits.value` marca truques; trait `focus` em `system.traits.value` marca magias de foco. Ambos permanecem `category = 'spell'` e aparecem como tags em `display.tags`.
* `system.level.value` e o rank bruto do documento (1 a 10). Truques tipicamente armazenam rank 1 no dado bruto (escalam com o nivel do conjurador nas regras remaster) e devem exibir o label "Truque" em vez de "Rank 1" quando o trait `cantrip` estiver presente.
* `system.defense.save.statistic` (`fortitude`/`reflex`/`will`) e `system.defense.save.basic` descrevem o salvamento, quando existir; `system.defense` e `null` para magias sem salvamento (ex.: ataque de magia ou sem resistencia).
* `system.traits.traditions` (array, pode ser vazio) contem as tradicoes brutas (`arcane`, `divine`, `occult`, `primal`); tratado como lista de strings opacas no catalogo, nunca como enum tipado no core.

## 1.2 Dado bruto do package (`systemData`) — modelo lossless (Fase 1)

A partir da Fase 1 do plano de interacao e efeitos, `systemData` deixa de ser uma projecao resumida (texto sanitizado, campos formatados) e passa a ser `Pathfinder2eSpellDefinition`: um modelo lossless que preserva tudo que o compendio Foundry expressa estruturalmente para uma magia ou ritual, incluindo os campos usados por conjuracao/regras futuras (nao interpretados nesta fase, apenas armazenados).

```ts
type Pathfinder2eSpellCategory = 'spell' | 'ritual'

type Pathfinder2eSpellDamageKind = 'damage' | 'healing'

type Pathfinder2eSpellDamageComponent = {
  formula: string
  type: string
  kinds: Pathfinder2eSpellDamageKind[]
  category: string | null
  applyMod: boolean
  materials: string[]
}

type Pathfinder2eSpellArea = {
  type: string
  value: number
  details?: string
}

type Pathfinder2eSpellDefense = {
  save: {
    statistic: 'fortitude' | 'reflex' | 'will'
    basic: boolean
  }
} | null

type Pathfinder2eSpellDuration = {
  value: string
  sustained: boolean
}

type Pathfinder2eSpellHeightening =
  | { type: 'interval'; interval: number; damage?: Record<string, string>; area?: number }
  | { type: 'fixed'; levels: Record<string, unknown> }
  | null

type Pathfinder2eSpellOverlay = {
  id: string
  name?: string
  overlayType: string
  sort: number
  system: Record<string, unknown>
}

type Pathfinder2eRuleElementSource = Record<string, unknown> & { key: string }

type Pathfinder2eRitualData = {
  primaryCheck?: string
  secondaryChecks?: string
  secondaryCasters?: number
}

type Pathfinder2eSpellSource = {
  pack: string
  id: string
  title?: string
  license?: string
  remaster: boolean
}

type Pathfinder2eRichTextNode =
  | { kind: 'TEXT'; value: string }
  | { kind: 'UUID'; uuid: string; label?: string }
  | { kind: 'CHECK'; statistic: string; dc?: string; basic?: boolean; against?: string }
  | { kind: 'DAMAGE'; formula: string; damageTypes: string[]; label?: string }
  | { kind: 'TEMPLATE'; shape: string; distance?: number; width?: number }
  | { kind: 'LOCALIZE'; key: string }
  | { kind: 'ACTION_GLYPH'; actions: string }

type Pathfinder2eRichTextDocument = {
  raw: string
  nodes: Pathfinder2eRichTextNode[]
}

type Pathfinder2eSpellDefinition = {
  id: string
  source: Pathfinder2eSpellSource
  name: string
  category: Pathfinder2eSpellCategory
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  time: string
  cost?: string
  requirements?: string
  range?: string
  target?: string
  area: Pathfinder2eSpellArea | null
  duration: Pathfinder2eSpellDuration
  defense: Pathfinder2eSpellDefense
  damage: Record<string, Pathfinder2eSpellDamageComponent>
  heightening: Pathfinder2eSpellHeightening
  overlays: Pathfinder2eSpellOverlay[]
  counteraction: boolean
  ritual: Pathfinder2eRitualData | null
  rules: Pathfinder2eRuleElementSource[]
  description: Pathfinder2eRichTextDocument
  dependencyIds: string[]
}
```

`systemData` (o campo generico exposto por `GameSystemSpellEntry<TSystemData>`) e `Pathfinder2eSpellDefinition`. O contrato de apresentacao (`display`, secao 2) continua sendo produzido pelo adapter a partir desse modelo lossless, entao o catalogo (API/web ja implementados) nao muda de forma.

## 1.3 Dependency graph e fechamento transitivo (Fase 1)

Documentos referenciados por uma magia/ritual sao resolvidos e incluidos como fechamento transitivo interno, nao como catalogo publico (ver `skills.md` secao 6):

```ts
type Pathfinder2eSpellEffectDependency = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  documentType: 'effect' | 'condition'
  rules: Pathfinder2eRuleElementSource[]
  description: Pathfinder2eRichTextDocument
}
```

Regra de extracao de `dependencyIds` (aplicada recursivamente sobre os proprios `Pathfinder2eSpellEffectDependency` encontrados, com deteccao de ciclo):

1. `system.rules[].uuid` (GrantItem) e `system.rules[].effects[].uuid` (EphemeralEffect/Aura) do documento;
2. UUIDs de tipo `Item` na descricao apontando para packs de efeito (`spell-effects`, `conditions`/`conditionitems`, `equipment-effects`, `feat-effects`, `other-effects`, `campaign-effects`, `bestiary-effects`), resolvidos via tabela de alias de pack legado.

UUIDs fora desse criterio (citacao textual a `actions`, `spells`, `feats`, Atores de bestiario, journals, macros) nao entram no grafo.

## 1.4 Manifesto de origem e relatorio de compatibilidade (Fase 1)

```ts
type Pathfinder2eSourceManifest = {
  repository: 'foundryvtt/pf2e'
  systemVersion: string
  commitSha: string | null
  importedAt: string
  packs: Array<{ path: string; fileCount: number; checksum: string }>
}

type Pathfinder2eSpellCompatibilityReport = {
  sourceManifest: Pathfinder2eSourceManifest
  totalSpells: number
  totalRituals: number
  totalDependencies: number
  unresolvedReferences: Array<{ fromId: string; uuid: string }>
  unknownRuleElementKeys: string[]
  compilationFailures: Array<{ id: string; reason: string }>
}
```

`commitSha` e `null` quando o vendor local nao e um checkout git rastreavel (situacao atual de `pf2e-master`, ver `skills.md` secao 6). O relatorio e gerado junto ao catalogo e versionado como `packages/game-system-pathfinder-2e/src/server/spells/compatibility-report.generated.ts`.

## 2. Contrato de Apresentacao
O adapter PF2e converte cada `Pathfinder2eSpellData` para o contrato neutro do core, reaproveitando literalmente o formato de `GameSystemBestiarySheet`/`GameSystemItemSheet`:

```ts
type GameSystemSpellEntry<TSystemData = unknown> = {
  id: string
  system: string
  category: string
  name: string
  source?: { pack?: string; id?: string; title?: string; license?: string }
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: GameSystemSpellSheet
  }
  systemData: TSystemData
}

type GameSystemSpellSheet = {
  sections: Array<{
    key: string
    title: string
    entries: Array<{ key: string; label: string; value?: string; detail?: string; tags?: string[] }>
  }>
}

type GameSystemSpellAdapter = {
  system: string
  listEntries: (options?: GameSystemSpellListOptions) => GameSystemSpellEntry[]
  countEntries: (options?: Pick<GameSystemSpellListOptions, 'search' | 'filters'>) => number
  findEntry?: (id: string) => GameSystemSpellEntry | null
}

type GameSystemSpellListOptions = {
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, string | number>
}
```

## 3. Secoes da Ficha Simplificada PF2e
Cada magia ou ritual pode expor:

* `casting`: tempo de conjuracao, custo, tradicoes, requisitos;
* `targeting`: alcance, alvo, area;
* `effect`: duracao, salvamento (estatistica e se e "basico"), tags de dano quando presentes no texto bruto;
* `description`: texto descritivo (sanitizado, sem HTML/macros do Foundry);
* `heightening`: texto de aprimoramento por rank, quando existir;
* `ritual`: checagem primaria, checagens secundarias e numero de conjuradores secundarios — apenas para `category = 'ritual'`;
* `source`: publicacao de origem e licenca.

Secoes sem entradas devem ser omitidas.

## 4. Contrato HTTP
`GET /api/campaigns/:campaignId/spells` — lista paginada.

Query:

```ts
type CampaignSpellListQuery = {
  q?: string // busca por nome ou trait, max 80 caracteres
  category?: 'spell' | 'ritual' | 'all' // default 'all'
  rank?: number
  tradition?: string // max 40 caracteres, valor opaco (arcane/divine/occult/primal)
  rarity?: string // max 40 caracteres
  page?: number // default 1
  limit?: number // default 10, max 20
}
```

Resposta:

```ts
type CampaignSpellListResponse = {
  campaignId: string
  system: string
  category: CampaignSpellListQuery['category']
  pagination: { page: number; limit: number; total: number; totalPages: number }
  entries: GameSystemSpellEntry[]
}
```

`GET /api/campaigns/:campaignId/spells/:spellId` — retorna uma unica entrada (`GameSystemSpellEntry`).

Erros:
* `403`: usuario nao e membro ativo da campanha;
* `404`: sistema nao possui catalogo de magias ou a magia/ritual nao existe no ruleset da campanha.

Nao ha endpoint de escrita neste submodulo (sem equivalente a "enviar para jogador" — ver `readme.md` secao 3).

### 4.1. Busca minima para qualquer membro da campanha (nao Mestre-apenas)

```txt
GET /api/campaigns/:campaignId/spells/search
```

Criado para resolver a tensao de acesso documentada em `.ai/game_systems/pathfinder_2e/character_spells/skills.md` secao 3: a aba "Magias" da ficha precisa deixar o jogador buscar uma magia por nome para adicionar ao proprio spellbook, mas o catalogo completo (`GET /api/campaigns/:campaignId/spells` e `/:spellId`, secao 4) continua Mestre-apenas — nunca foi aberto, nunca sera por este endpoint.

Query:
```ts
type CampaignSpellSearchQuery = {
  q?: string // busca por nome ou trait, max 80 caracteres
  category?: 'spell' | 'ritual' | 'all' // default 'all'
  limit?: number // default 8, max 10 — deliberadamente menor que a listagem completa (secao 4), e um seletor de digitacao, nao paginacao
}
```

Resposta:
```ts
type GameSystemSpellSearchResult = {
  id: string
  name: string
  category: 'spell' | 'ritual'
  rank: string | null   // GameSystemSpellEntry.display.level?.value (ja neutro/generico)
  tags: string[]         // GameSystemSpellEntry.display.tags (rarity + tradicoes + traits, ja opaco/generico)
}

type CampaignSpellSearchResponse = {
  campaignId: string
  results: GameSystemSpellSearchResult[]
}
```

Permissao: **qualquer membro ativo da campanha** (jogador ou Mestre, `CampaignCharacter.status === 'ACTIVE'`, qualquer `role`) — mesma regra ja usada pelo chat (`apps/api/src/modules/chat/routes.ts`), deliberadamente mais aberta que a listagem completa da secao 4.

Projecao: a resposta e derivada de `GameSystemSpellEntry` descartando `source`, `systemData` e os campos ricos de `display` (`subtitle`, `stats`, `sheet`) — nunca a descricao, dano, salvamento, heightening ou qualquer texto mecanico da magia. So `id`/`name`/`category`/`rank`/`tags`, os mesmos campos genericos que o core ja expõe como apresentacao neutra (`.ai/game_systems/pathfinder_2e/spells/readme.md` secao 3: "o core jamais deve conhecer... como conceitos tipados" — aqui nem o core nem o jogador recebem o campo tipado, so o rotulo/tag ja formatado). A funcao pura que faz essa projecao (`toSpellSearchResult`, `apps/api/src/modules/game_systems/spells/search.ts`) e testada isoladamente para impedir que um campo mecanico vaze por engano no futuro.

Erros: `401` nao autenticado; `400` campanha/busca invalida; `403` usuario nao pertence a campanha; `404` sistema sem catalogo de magias.

## 5. Regras de Validacao
* Apenas Mestre ativo da campanha pode listar o catalogo completo de magias (secao 4; mesma regra do Bestiario e dos Itens). O detalhe pontual `/:spellId` pode ser consultado por qualquer membro ativo da campanha para abrir a ficha completa de uma magia conhecida/preparada exibida na ficha.
* Qualquer membro ativo da campanha pode usar a busca minima da secao 4.1; ela continua devolvendo so `id`/`name`/`category`/`rank`/`tags`.
* `page` deve ser inteiro maior ou igual a 1.
* `limit` deve ficar entre 1 e 20 na listagem completa, entre 1 e 10 na busca minima.
* `q` deve ter no maximo 80 caracteres.
* `rank` deve ser inteiro quando informado.
* `tradition` deve ter no maximo 40 caracteres quando informado.
* `rarity` deve ter no maximo 40 caracteres.
* `category`, quando informada, deve ser `spell`, `ritual` ou `all`.

## 6. Criterios de Aceitacao
* O menu do Mestre exibe a entrada "Magias" (Livro de Magias), seguindo o mesmo padrao de painel flutuante ja usado por "Bestiario" e "Itens".
* A lista permite busca por nome/trait, filtro por categoria, rank, tradicao e raridade, e paginacao.
* Cada card com `display.sheet` abre a ficha simplificada em modal proprio, arrastavel e redimensionavel, seguindo `.ai/game_systems/bestiary_guide.md`; o mesmo contrato e usado pelo icone de consulta da aba Magias da ficha de personagem.
* Rituais exibem a secao `ritual` na ficha; magias comuns nao exibem essa secao.
* Truques exibem label "Truque" em `display.level`; magias de foco exibem a tag `focus` em `display.tags`.
* O core (`packages/game-system-core`) continua sem campos mecanicos especificos de Pathfinder e sem os literais `arcane`/`divine`/`occult`/`primal` tipados.
* Nenhum fluxo do catalogo escreve em personagem, ficha ou inventario — o submodulo e somente leitura nesta entrega.
* Players nao podem acessar o catalogo de magias da campanha.
* Testes do registry cobrem: contagem total do catalogo, busca por nome/trait, filtro por categoria (`spell`/`ritual`), filtro por rank e presenca da secao `ritual` apenas em entradas de ritual.

## 7. Fixtures Douradas (Fase 1)

Exigidas pelo plano (secao 16), cobrindo o importador lossless e o dependency graph:

* **Fireball:** `damage` com um componente `6d6 fire`, `defense.save = {statistic: 'reflex', basic: true}`, `area = {type: 'burst', value: 20}`, `heightening = {type: 'interval', interval: 1, damage: {'0': '2d6'}}`, `description.nodes` sem perda do texto de heightening.
* **Heal:** `overlays` com as 4 variantes (toque/1 acao, 2 acoes vs. vivo, 2 acoes vs. morto-vivo, 3 acoes/emanacao), cada uma com seu `system` parcial preservado; `damage` com `kinds: ['damage','healing']`.
* **Haste:** `dependencyIds` contendo o id resolvido de "Spell Effect: Haste" (pack `spell-effects`, alias `spell-effects`) e, transitivamente, o id de "Quickened" (pack `conditions`, alias legado `conditionitems`); o `Pathfinder2eSpellEffectDependency` de "Spell Effect: Haste" deve conter uma rule `GrantItem` com `uuid` apontando para Quickened.

Esses testes vivem em `packages/game-system-pathfinder-2e/src/server/spells/*.test.ts` e sao importados por `apps/api/src/unit.test.ts`, seguindo o padrao ja usado por `character-sheet/identity.test.ts`.
