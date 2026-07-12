# Submodulo: Pathfinder 2e Livro de Magias (Specs & Contracts)

## 1. Responsabilidade
Expor magias e rituais Pathfinder 2e normalizados como catalogo de ruleset (Livro de Magias) e fornecer uma ficha simplificada para consulta do Mestre. Apenas o catalogo faz parte desta entrega; conjuracao, personagem e efeitos ficam fora de escopo (ver `readme.md` secao 6).

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

## 1.2 Dado bruto do package (`systemData`)

```ts
type Pathfinder2eSpellCategory = 'spell' | 'ritual'

type Pathfinder2eSpellDefense = {
  save: 'fortitude' | 'reflex' | 'will'
  basic: boolean
} | null

type Pathfinder2eSpellRitualData = {
  primaryCheck?: string
  secondaryChecks?: string
  secondaryCasters?: number
}

type Pathfinder2eSpellData = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  category: Pathfinder2eSpellCategory
  rank: number
  rarity: string
  traditions: string[]
  traits: string[]
  castingTime?: string
  cost?: string
  range?: string
  target?: string
  area?: string
  duration?: string
  defense: Pathfinder2eSpellDefense
  requirements?: string
  description: string
  heightening?: string
  ritual?: Pathfinder2eSpellRitualData
  publicationTitle?: string
  remaster?: boolean
  license?: string
}
```

`systemData` e o unico bloco com dados mecanicos completos; e o que o adapter PF2e expoe atras do generico `TSystemData` do core.

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
* `403`: usuario nao e Mestre ativo da campanha;
* `404`: sistema nao possui catalogo de magias ou a magia/ritual nao existe no ruleset da campanha.

Nao ha endpoint de escrita neste submodulo (sem equivalente a "enviar para jogador" — ver `readme.md` secao 3).

## 5. Regras de Validacao
* Apenas Mestre ativo da campanha pode listar/consultar o catalogo de magias (mesma regra do Bestiario e dos Itens).
* `page` deve ser inteiro maior ou igual a 1.
* `limit` deve ficar entre 1 e 20.
* `q` deve ter no maximo 80 caracteres.
* `rank` deve ser inteiro quando informado.
* `tradition` deve ter no maximo 40 caracteres quando informado.
* `rarity` deve ter no maximo 40 caracteres.
* `category`, quando informada, deve ser `spell`, `ritual` ou `all`.

## 6. Criterios de Aceitacao
* O menu do Mestre exibe a entrada "Magias" (Livro de Magias), seguindo o mesmo padrao de painel flutuante ja usado por "Bestiario" e "Itens".
* A lista permite busca por nome/trait, filtro por categoria, rank, tradicao e raridade, e paginacao.
* Cada card com `display.sheet` abre a ficha simplificada em modal proprio, arrastavel e redimensionavel, seguindo `.ai/game_systems/bestiary_guide.md`.
* Rituais exibem a secao `ritual` na ficha; magias comuns nao exibem essa secao.
* Truques exibem label "Truque" em `display.level`; magias de foco exibem a tag `focus` em `display.tags`.
* O core (`packages/game-system-core`) continua sem campos mecanicos especificos de Pathfinder e sem os literais `arcane`/`divine`/`occult`/`primal` tipados.
* Nenhum fluxo do catalogo escreve em personagem, ficha ou inventario — o submodulo e somente leitura nesta entrega.
* Players nao podem acessar o catalogo de magias da campanha.
* Testes do registry cobrem: contagem total do catalogo, busca por nome/trait, filtro por categoria (`spell`/`ritual`), filtro por rank e presenca da secao `ritual` apenas em entradas de ritual.
