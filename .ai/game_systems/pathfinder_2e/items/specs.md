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
    dexCap?: number
    strengthRequirement?: number
    checkPenalty?: number
    speedPenaltyFeet?: number
    description?: string
    publicationTitle?: string
    remaster?: boolean
    license?: string
  }
}
```

`dexCap`, `strengthRequirement`, `checkPenalty` e `speedPenaltyFeet` foram adicionados para alimentar o calculo de Armor Class (`.ai/game_systems/pathfinder_2e/armor_class/`). `systemData` e o unico bloco que sobrevive a clonagem de um item do catalogo para `CampaignItemDefinition`/`EquippedItem` — por isso esses campos precisam estar aqui, e nao apenas no bloco tipado `armor`/`shield` da secao 1.1.1.

5.217 itens normalizados (`PATHFINDER_2E_ITEM_SOURCE_SUMMARY`: armor 165, backpack 43, consumable 1670, equipment 2178, kit 2, shield 98, treasure 153, weapon 908).

### 1.1.0 Auditoria dos dados reais do compendio

Auditoria local em `pf2e-master/packs/equipment` (2026-07-10):

* tipos documentais: `equipment` 2178, `consumable` 1670, `weapon` 908, `armor` 165, `treasure` 153, `shield` 98, `backpack` 43, `kit` 2;
* `system.category`: `ammo` 195, `potion` 178, `elixir` 150, `talisman` 143, `poison` 113, `gadget` 77, `snare` 76, `catalyst` 64, `oil` 58, `mutagen` 48, `fulu` 46, `wand` 20, `scroll` 10, alem de categorias de arma/armadura como `simple`, `martial`, `advanced`, `light`, `medium`, `heavy`;
* `system.stackGroup` em `category=ammo`: `rounds10` 48, `arrows` 10, `slingBullets` 8, `bolts` 6, `rounds5` 4, `blowgunDarts` 1, `woodenTaws` 1, ausente 117;
* principais `system.usage.value`: `held-in-one-hand` 2616, `held-in-two-hands` 551, ausente 418, `worn` 337, `other` 117, `tattooed-on-the-body` 97, `affixed-to-armor` 85, `affixed-to-armor-or-a-weapon` 81, `worncloak` 64, `wornmask` 61, `carried` 58, `etched-onto-a-weapon` 57, `etched-onto-armor` 56, `wornheadwear` 46, `worneyepiece` 40;
* grupos de armas relevantes para municao futura: `bow` 24, `crossbow` 17, `sling` 12, `firearm` 103, `dart` 16.

Decisao: a primeira normalizacao V2 usa `document.type`, `system.category`, `system.stackGroup`, `system.usage.value`, `system.group` e `traits`; nao usa nome nem icone como fonte de verdade.

### 1.1.1 Contrato V2 de normalizacao de itens

Decisao registrada (2026-07-10): o contrato acima passa a ser tratado como **V1 legado**. Novas entradas normalizadas de PF2e devem usar `schemaVersion: 2` e separar explicitamente estas dimensoes:

* `itemType`: tipo documental de origem Foundry (`weapon`, `armor`, `equipment`, `consumable`, `treasure`, `backpack`, `shield`, `kit`);
* `classification.role`: papel mecanico (`weapon`, `armor`, `shield`, `wearable`, `held-equipment`, `ammunition`, `consumable`, `container`, `attachment`, `treasure`, `kit`, `other`);
* `usage`: uso bruto preservado e normalizado (`raw`, `mode`, `hands`, `placement`);
* `equipment`: politica de equipamento (`equippable`, `options`);
* blocos especificos opcionais do ruleset (`consumable`, `ammunition`, `weapon`, `armor`, `shield`);
* `normalizationWarnings`: avisos quando o dado bruto nao puder ser classificado com seguranca.

O formato V2 alvo:

```ts
type Pathfinder2eCompendiumItemV2 = {
  schemaVersion: 2
  id: string
  sourcePack: string
  sourceId: string
  name: string
  itemType: Pathfinder2eItemType
  classification: { role: Pathfinder2eItemRole; subtype: string | null }
  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number
  stack: { stackable: boolean }
  usage: {
    raw: string | null
    mode: Pathfinder2eUsageMode
    hands: 0 | 1 | 2
    placement: Pathfinder2eBodyPlacement | null
  }
  equipment: {
    equippable: boolean
    options: Pathfinder2eEquipmentOption[]
  }
  consumable?: { category: string }
  ammunition?: { kind: Pathfinder2eAmmunitionKind }
  weapon?: {
    group?: string
    category?: string
    damage?: string
    hands: 1 | 2
    ammunition?: {
      required: boolean
      acceptedKinds: Pathfinder2eAmmunitionKind[]
      quantityPerAttack: number
    }
  }
  armor?: {
    category?: string
    group?: string
    ac?: number
    dexCap?: number
    strengthRequirement?: number
    checkPenalty?: number
    speedPenaltyFeet?: number
  }
  shield?: { ac?: number; speedPenaltyFeet?: number }
  systemData: Pathfinder2eItemSystemData
  normalizationWarnings?: string[]
}
```

`armor`/`shield` sao a visao tipada de catalogo (paridade de exibicao); o canal que efetivamente chega ate um item equipado em campanha e `systemData` (secao 1.1), pois a clonagem catalogo->campanha nao copia estes blocos tipados hoje.

Regras V2:

* `equipSlot` nao deve ser a fonte principal de decisao mecanica. Ele pode existir apenas em leitura V1 durante a transicao.
* `two_hands` nao e slot; duas maos sao dois recursos (`pf2e:hand:main` e `pf2e:hand:off`).
* munição (`classification.role = "ammunition"`) nunca e equipavel e deve retornar `equipment.options = []`.
* consumivel (`itemType = "consumable"`) nao deve virar equipamento persistente apenas por `system.usage.value = held-*`; no inventario do QuestHub ele deve permanecer como item consumivel/stackavel, com `equipment.equippable=false` e `equipment.options=[]`, salvo fluxo futuro explicito de preparacao/anexo.
* consumivel sem uso bruto segurado confiavel nao deve virar `worn`.
* valor bruto desconhecido deve falhar de forma segura (`equippable=false`) e gerar warning.

### 1.2 Normalizacao V1 de `usage` para Equipamento

O campo bruto `systemData.usage` deve preservar o valor de uso do compendio Foundry sempre que existir. O campo normalizado `equipSlot` abaixo permanece documentado somente como compatibilidade V1 enquanto itens antigos ainda existirem em `CampaignItemDefinition`.

Mapeamento atual:

* `weapon` com `usage` de duas maos -> `equipSlot = "two_hands"`;
* outros `weapon` -> `equipSlot = "main_hand"`; o adapter permite `main_hand` ou `off_hand`;
* `shield` -> `equipSlot = "shield"`;
* `armor` -> `equipSlot = "armor"`;
* `backpack` -> `equipSlot = "backpack"` com significado de stowed/mochila no produto;
* `usage` iniciado por `worn` -> `equipSlot = "worn"`;
* `usage` iniciado por `held` -> `equipSlot = "held"` e o adapter decide quais maos consome;
* `consumable` -> compatibilidade de catalogo; o adapter deve tratar como `worn` para acesso rapido ou `held` quando o uso exigir mao;
* `affixed`, runas, talismas, gadgets e outros casos especiais -> `equipSlot = "other"` ate existir fluxo proprio de anexo.

Itens com trait `invested` devem ser reconhecidos pelo adapter de inventario PF2e e consumir `pf2e:investiture` (limite 10).

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
