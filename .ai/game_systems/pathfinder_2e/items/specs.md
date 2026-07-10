# Submodulo: Pathfinder 2e Catalogo de Itens (Specs & Contracts)

## 1. Responsabilidade
Expor itens de equipamento Pathfinder 2e normalizados como catalogo de ruleset e fornecer uma ficha simplificada para consulta do Mestre.

## 1.1 Dado Bruto do Package
`packages/game-system-pathfinder-2e/src/server/items/models.ts` ja define o formato normalizado gerado a partir de `pf2e-master/packs/equipment`:

```ts
type Pathfinder2eItemType = 'weapon' | 'armor' | 'equipment' | 'consumable' | 'treasure' | 'backpack' | 'shield' | 'kit'

type Pathfinder2eCompendiumItem = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  itemType: Pathfinder2eItemType
  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number
  isStackable: boolean
  equipSlot: string | null
  systemData: {
    usage?: string
    group?: string
    category?: string
    damage?: string
    ac?: number
    description?: string
    publicationTitle?: string
    remaster?: boolean
    license?: string
  }
}
```

5.217 itens normalizados (`PATHFINDER_2E_ITEM_SOURCE_SUMMARY`: armor 165, backpack 43, consumable 1670, equipment 2178, kit 2, shield 98, treasure 153, weapon 908).

## 2. Contrato de Apresentacao
O adapter PF2e converte cada `Pathfinder2eCompendiumItem` para o contrato neutro do core:

```ts
type GameSystemItemEntry<TSystemData = unknown> = {
  id: string
  system: string
  itemType: string
  name: string
  source?: { pack?: string; id?: string; title?: string; license?: string }
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    price?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: GameSystemItemSheet
  }
  systemData: TSystemData
}

type GameSystemItemSheet = {
  sections: Array<{
    key: string
    title: string
    entries: Array<{ key: string; label: string; value?: string; detail?: string; tags?: string[] }>
  }>
}
```

Este contrato reaproveita literalmente o formato de `GameSystemBestiarySheet`/`GameSystemBestiarySheetSection`/`GameSystemBestiarySheetEntry`, so que sob o namespace `items`, para manter consistencia entre catalogos do core.

## 3. Secoes da Ficha Simplificada PF2e
* `details`: tipo, nivel, raridade, preco, bulk, uso;
* `combat`: dano (armas) ou CA (armaduras/escudos), quando aplicavel;
* `description`: texto descritivo do item, quando disponivel;
* `source`: publicacao de origem e licenca.

Secoes sem entradas devem ser omitidas.

## 4. Contrato HTTP
`GET /api/campaigns/:campaignId/items` — lista paginada.

Query:

```ts
type CampaignItemListQuery = {
  q?: string          // busca por nome ou trait, max 80 caracteres
  itemType?: 'weapon' | 'armor' | 'equipment' | 'consumable' | 'treasure' | 'backpack' | 'shield' | 'kit' | 'all' // default 'all'
  level?: number
  rarity?: string      // max 40 caracteres
  page?: number         // default 1
  limit?: number        // default 10, max 20
}
```

Resposta:

```ts
type CampaignItemListResponse = {
  campaignId: string
  system: string
  itemType: CampaignItemListQuery['itemType']
  pagination: { page: number; limit: number; total: number; totalPages: number }
  entries: GameSystemItemEntry[]
}
```

`GET /api/campaigns/:campaignId/items/:itemId` — retorna uma unica entrada (`GameSystemItemEntry`).

Erros:
* `403`: usuario nao e Mestre ativo da campanha;
* `404`: sistema nao possui catalogo de itens ou o item nao existe no ruleset da campanha.

`POST /api/campaigns/:campaignId/items/:itemId/send-to-player` — envia o item `:itemId` do catalogo diretamente para o inventario de um jogador ativo. Contrato completo, incluindo payload, regras de deduplicacao e codigos de erro, em `.ai/inventory/specs.md` secao 6.4.1. Esta rota e registrada neste submodulo (mesmo arquivo `apps/api/src/modules/game_systems/items/routes.ts`), mas a implementacao (clonagem de definicao, ledger, evento realtime) pertence ao modulo `inventory`.

## 5. Regras de Validacao
* Apenas Mestre ativo da campanha pode listar/consultar o catalogo de itens (mesma regra do bestiario).
* `page` deve ser inteiro maior ou igual a 1.
* `limit` deve ficar entre 1 e 20.
* `q` deve ter no maximo 80 caracteres.
* `level` deve ser inteiro quando informado.
* `rarity` deve ter no maximo 40 caracteres.
* `itemType`, quando informado, deve ser um dos tipos validos ou `all`.

## 6. Criterios de Aceitacao
* O menu do Mestre exibe a entrada "Itens" logo abaixo de "Bestiario", seguindo o mesmo padrao de painel flutuante.
* A lista permite busca por nome/trait, filtro por tipo, nivel e raridade, e paginacao.
* Cada card com `display.sheet` abre a ficha simplificada em modal proprio, arrastavel e redimensionavel, seguindo `.ai/game_systems/bestiary_guide.md`.
* O core (`packages/game-system-core`) continua sem campos mecanicos especificos de Pathfinder.
* Nenhum fluxo do catalogo escreve em `CampaignItemDefinition`, exceto o envio pontual de item para jogador descrito acima.
* O botao "Enviar para jogador" so envia para `CampaignCharacter` com `role = PLAYER` e `status = ACTIVE`; Mestre e NPC nao aparecem como destino.
* Testes do registry cobrem contagem total do catalogo e busca/filtro por tipo, nivel e trait.
