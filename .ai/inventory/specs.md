# Modulo: Inventory & Economy (Specs & Contracts)

## 1. Responsabilidade

Definir contratos de banco, dominio, HTTP, WebSocket, permissao e validacao para inventario, itens equipados e wallet/economia.

Este modulo deve funcionar para Pathfinder 2e primeiro, mantendo a arquitetura preparada para outros sistemas.

---

## 2. Decisoes Arquiteturais

### 2.1. Agregado principal

O agregado operacional e o `CampaignCharacter`.

Motivo:

* `Character` representa o personagem do usuario.
* `CampaignCharacter` representa esse personagem dentro de uma campanha, com role/status.
* Inventario e dinheiro existem no contexto de uma mesa/campanha, nao como patrimonio global do usuario.

### 2.2. Dinheiro separado de item

Wallet nao e item.

Moeda deve ser persistida em unidade menor inteira.

Para PF2e, a unidade menor e `cp`.

### 2.3. Ledger obrigatorio

Mutacoes relevantes devem gerar historico.

O snapshot atual fica nos modelos principais (`InventoryItem`, `Wallet`).
O historico fica em tabelas de ledger.

---

## 3. Modelo de Banco Proposto

> Ajustar nomes conforme convencao final do projeto, mas preservar as relacoes e invariantes.

### 3.1. Enums

```prisma
enum ItemDefinitionSource {
  CUSTOM
  SYSTEM_CATALOG
  IMPORTED
}

enum InventoryItemState {
  STORED
  EQUIPPED
  DROPPED
  CONSUMED
  DESTROYED
  TRANSFERRED
}

enum InventoryLedgerType {
  GRANT
  REMOVE
  ADJUST_QUANTITY
  TRANSFER_IN
  TRANSFER_OUT
  EQUIP
  UNEQUIP
  CONSUME
  SPLIT_STACK
  MERGE_STACK
  PURCHASE
  SALE
  LOOT
  REWARD
  CORRECTION
}

enum WalletLedgerType {
  SET_BALANCE
  ADJUSTMENT
  TRANSFER_IN
  TRANSFER_OUT
  PURCHASE
  SALE
  LOOT
  REWARD
  CORRECTION
}
```

### 3.2. CampaignItemDefinition

Representa a definicao/template de um item disponivel na campanha.

```prisma
model CampaignItemDefinition {
  id          String               @id @default(cuid())
  campaignId  String
  system      GameSystem
  source      ItemDefinitionSource @default(CUSTOM)
  sourcePack  String?
  sourceId    String?

  itemData Json?

  createdByUserId String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  campaign       Campaign        @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  inventoryItems InventoryItem[]

  @@unique([campaignId, source, sourcePack, sourceId])
  @@index([campaignId])
}
```

Notas:

* `source = CUSTOM` para item criado pelo Mestre; `sourcePack`/`sourceId` ficam `null`.
* `source = SYSTEM_CATALOG` para item clonado do catalogo de referencia do ruleset quando o Mestre envia um item do catalogo diretamente para um jogador (secao 6.4.1). `sourcePack`/`sourceId` identificam a entrada de origem no catalogo e formam, junto com `campaignId` e `source`, a chave de deduplicacao: enviar o mesmo item do catalogo mais de uma vez na mesma campanha reaproveita a mesma `CampaignItemDefinition`, nunca cria duplicata.
* **Decisao de modelagem (mesmo padrao de `Character.sheet`):** todos os campos mecanicos/apresentacao (`name`, `itemType`, `rarity`, `level`, `traits`, `bulk`, `priceMinorUnit`, `equipSlot`, `isStackable`, `systemData`) ficam agrupados dentro de `itemData`, em vez de colunas tipadas separadas. `itemData` e opaco para o dominio generico e so e interpretado pela camada de infra (`prisma-inventory-repository.ts`) ao converter para `ItemDefinitionSnapshot` (secao 5.2), que continua expondo esses campos individualmente para dominio/aplicacao/apresentacao/frontend — a mudanca fica isolada na infra.
* Fora do envio de item do catalogo descrito acima, nenhum outro fluxo deve popular `CampaignItemDefinition` a partir do compendio oficial PF2e (seed, migration ou importacao em massa continuam proibidos — ver `.ai/inventory/skills.md` secao 13).

### 3.3. Inventory

```prisma
model Inventory {
  id                  String   @id @default(cuid())
  campaignId          String
  campaignCharacterId String   @unique
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  campaign          Campaign          @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  campaignCharacter CampaignCharacter @relation(fields: [campaignCharacterId], references: [id], onDelete: Cascade)
  items             InventoryItem[]
  ledger            InventoryLedger[]

  @@index([campaignId])
  @@index([campaignCharacterId])
}
```

### 3.4. InventoryItem

Representa uma posse concreta ou stack no inventario.

```prisma
model InventoryItem {
  id               String             @id @default(cuid())
  inventoryId      String
  itemDefinitionId String
  quantity         Int                @default(1)
  state            InventoryItemState @default(STORED)
  customName       String?
  notes            String?
  systemData       Json?
  createdAt        DateTime           @default(now())
  updatedAt        DateTime           @updatedAt

  inventory      Inventory              @relation(fields: [inventoryId], references: [id], onDelete: Cascade)
  itemDefinition CampaignItemDefinition @relation(fields: [itemDefinitionId], references: [id])
  equippedItem   EquippedItem?
  ledger         InventoryLedger[]

  @@index([inventoryId])
  @@index([itemDefinitionId])
  @@index([state])
}
```

Regras:

* `quantity` deve ser maior que zero para itens ativos.
* Itens consumidos/destruidos podem ser mantidos como historico com `state`, mas nao devem aparecer no inventario ativo por padrao.
* Item equipado deve ter uma `EquippedItem` relacionada.

### 3.5. EquippedItem

```prisma
model EquippedItem {
  id                  String   @id @default(cuid())
  campaignCharacterId String
  inventoryItemId     String   @unique
  equipmentOptionKey  String
  resourceLocks       Json
  systemData          Json?
  quantity            Int      @default(1)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  campaignCharacter CampaignCharacter @relation(fields: [campaignCharacterId], references: [id], onDelete: Cascade)
  inventoryItem     InventoryItem     @relation(fields: [inventoryItemId], references: [id], onDelete: Cascade)

  @@index([campaignCharacterId])
  @@index([equipmentOptionKey])
}
```

Regras:

* `inventoryItemId` unico impede equipar a mesma instancia duas vezes.
* `equipmentOptionKey` e uma chave opaca escolhida pelo adapter do sistema.
* `resourceLocks` e um JSON opaco para o core contendo os recursos consumidos pelo equipamento, como retornados pelo adapter do sistema.
* `systemData` guarda metadados especificos do sistema sobre aquele estado equipado (ex.: em Pathfinder 2e, `shieldRaised: boolean` para o toggle de escudo erguido usado pelo calculo de Armor Class — ver `.ai/game_systems/pathfinder_2e/armor_class/specs.md` secao 5).
* O core nao conhece maos, armaduras, escudos, body slots, investidura ou qualquer outra regra mecanica.
* Conflitos, capacidades e mensagens de erro devem ser calculados pelo `InventorySystemAdapter` dentro do fluxo transacional de equipar.

### 3.6. Wallet

```prisma
model Wallet {
  id                  String   @id @default(cuid())
  campaignId          String
  campaignCharacterId String   @unique
  balanceMinorUnit    Int      @default(0)
  currencySystem      String   @default("CAMPAIGN_SYSTEM")
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  campaign          Campaign          @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  campaignCharacter CampaignCharacter @relation(fields: [campaignCharacterId], references: [id], onDelete: Cascade)
  ledger            WalletLedger[]

  @@index([campaignId])
  @@index([campaignCharacterId])
}
```

### 3.7. InventoryLedger

```prisma
model InventoryLedger {
  id                  String              @id @default(cuid())
  campaignId          String
  inventoryId         String
  inventoryItemId     String?
  itemDefinitionId    String?
  actorUserId         String?
  actorCharacterId    String?
  counterpartyInventoryId String?
  operationId         String?
  type                InventoryLedgerType
  deltaQuantity       Int?
  before              Json?
  after               Json?
  note                String?
  createdAt           DateTime            @default(now())

  inventory     Inventory      @relation(fields: [inventoryId], references: [id], onDelete: Cascade)
  inventoryItem InventoryItem? @relation(fields: [inventoryItemId], references: [id], onDelete: SetNull)

  @@index([campaignId, createdAt])
  @@index([inventoryId, createdAt])
  @@index([inventoryItemId])
  @@index([operationId])
}
```

### 3.8. WalletLedger

```prisma
model WalletLedger {
  id                    String           @id @default(cuid())
  campaignId            String
  walletId              String
  actorUserId           String?
  actorCharacterId      String?
  counterpartyWalletId  String?
  operationId           String?
  type                  WalletLedgerType
  deltaMinorUnit        Int
  balanceBeforeMinorUnit Int
  balanceAfterMinorUnit  Int
  note                  String?
  createdAt             DateTime         @default(now())

  wallet Wallet @relation(fields: [walletId], references: [id], onDelete: Cascade)

  @@index([campaignId, createdAt])
  @@index([walletId, createdAt])
  @@index([operationId])
}
```

---

## 4. Alteracoes Necessarias em Modelos Existentes

Adicionar relacoes em `Campaign`:

```prisma
itemDefinitions CampaignItemDefinition[]
inventories     Inventory[]
wallets         Wallet[]
```

Adicionar relacoes em `CampaignCharacter`:

```prisma
inventory     Inventory?
wallet        Wallet?
equippedItems EquippedItem[]
```

Nao adicionar inventario direto em `User`.
Nao guardar inventario em `Character.sheet`.

---

## 5. Contratos TypeScript

### 5.1. Money

```ts
type WalletView = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  balanceMinorUnit: number
  display: {
    system: 'PATHFINDER_2E' | 'DND_5E' | string
    breakdown: Record<string, number>
    label: string
  }
}
```

### 5.2. Inventory

```ts
type InventoryItemDefinitionView = {
  id: string
  name: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  source: 'CUSTOM' | 'SYSTEM_CATALOG' | 'IMPORTED'
  itemType: string
  rarity?: string | null
  level?: number | null
  traits: string[]
  bulk?: string | null
  priceMinorUnit?: number | null
  equipSlot?: string | null
  isStackable: boolean
}

type InventoryItemView = {
  id: string
  itemDefinition: InventoryItemDefinitionView
  quantity: number
  state: 'STORED' | 'EQUIPPED' | 'DROPPED' | 'CONSUMED' | 'DESTROYED' | 'TRANSFERRED'
  customName?: string | null
  notes?: string | null
  equipped?: EquippedItemView | null
}

type EquippedItemView = {
  id: string
  inventoryItemId: string
  equipmentOptionKey: string
  resourceLocks: Array<{ resource: string; amount: number; exclusive?: boolean }>
  systemData?: unknown
  quantity: number
}

type EquippedGroupView = {
  id: string
  label: string
  items: EquippedItemView[]
  metadata?: unknown
}

type InventoryView = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  equipmentOptions?: EquipmentOption[]
  equippedGroups?: EquippedGroupView[]
  items: InventoryItemView[]
  equippedItems: EquippedItemView[]
}
```

### 5.2.1 Compatibilidade de `itemData` V1/V2

Decisao registrada (2026-07-10): `CampaignItemDefinition.itemData` aceita dois envelopes durante a transicao:

* **V1 legado:** campos planos com `equipSlot`, `isStackable` e `systemData.usage`;
* **V2 normalizado:** `schemaVersion: 2`, `classification`, `usage`, `equipment`, `stack` e blocos opcionais especificos de PF2e.

O modulo `inventory` permanece agnostico: nao interpreta maos, armadura, escudo, posicao corporal, municao ou investidura. Ele persiste `equipmentOptionKey` e `resourceLocks` como dados opacos retornados pelo adapter do sistema.

Politica de transicao:

* novos itens clonados do catalogo PF2e devem preservar `schemaVersion: 2` quando a origem ja estiver normalizada;
* itens V1 seguem legiveis por parser de compatibilidade;
* codigo novo nao deve gravar `equipSlot` como fonte mecanica principal;
* V1 ambiguo nao deve receber permissao ampla para equipar.

---

## 6. Contrato HTTP

### 6.1. Obter inventario

```txt
GET /api/campaigns/:campaignId/characters/:characterId/inventory
```

Permissao:

* Mestre ativo da campanha: qualquer personagem da campanha.
* Jogador ativo: apenas o proprio personagem.

Resposta:

```ts
type GetInventoryResponse = InventoryView
```

### 6.2. Obter wallet

```txt
GET /api/campaigns/:campaignId/characters/:characterId/wallet
```

Resposta:

```ts
type GetWalletResponse = WalletView
```

### 6.3. Criar definicao de item customizado

```txt
POST /api/campaigns/:campaignId/items
```

Permissao: somente Mestre.

Payload:

```ts
type CreateCampaignItemDefinitionRequest = {
  name: string
  itemType: string
  rarity?: string
  level?: number
  traits?: string[]
  bulk?: string
  priceMinorUnit?: number
  equipSlot?: string
  isStackable?: boolean
  systemData?: unknown
}
```

### 6.4. Adicionar item ao inventario

```txt
POST /api/campaigns/:campaignId/characters/:characterId/inventory/items
```

Permissao: Mestre. Jogador somente se regra futura permitir.

Payload:

```ts
type AddInventoryItemRequest = {
  itemDefinitionId: string
  quantity?: number
  customName?: string
  notes?: string
}
```

### 6.4.1. Enviar item do catalogo de referencia para um jogador

```txt
POST /api/campaigns/:campaignId/items/:itemId/send-to-player
```

Rota registrada junto com o catalogo de itens (`.ai/game_systems/pathfinder_2e/items/`), mas implementada pelo modulo de inventario (`sendCatalogItemToPlayerUseCase`), reaproveitando `InventoryRepository.addItem`. `:itemId` e o id do catalogo de referencia do ruleset (ex.: `pf2e:equipment:dagger`), nao um `itemDefinitionId` de campanha.

Permissao: somente Mestre ativo da campanha.

Payload:

```ts
type SendCatalogItemToPlayerRequest = {
  characterId: string
  quantity?: number
}
```

Regras:

* `characterId` deve referenciar um `CampaignCharacter` da mesma campanha com `role = PLAYER` e `status = ACTIVE`; Mestre e NPC nao sao destinos validos por este endpoint;
* `quantity` default 1, deve ser inteiro positivo;
* o item do catalogo e clonado (find-or-create, deduplicado por `sourcePack`/`sourceId`) para uma `CampaignItemDefinition` com `source = SYSTEM_CATALOG` antes de ser concedido — ver secao 3.2;
* a concessao em si segue as mesmas regras de `AddItemToInventoryUseCase` (empilha em stack existente quando `isStackable`, gera ledger `GRANT`, emite `inventory:changed`).

Resposta (sucesso, `201`):

```ts
type SendCatalogItemToPlayerResponse = {
  ok: true
  itemDefinitionId: string
}
```

Erros: `403` (nao e Mestre), `404` (personagem ou item do catalogo nao encontrado), `400` (alvo nao e jogador ativo, ou quantidade invalida).

### 6.5. Atualizar item do inventario

```txt
PATCH /api/campaigns/:campaignId/inventory-items/:inventoryItemId
```

Payload:

```ts
type UpdateInventoryItemRequest = {
  quantity?: number
  customName?: string | null
  notes?: string | null
  state?: 'STORED' | 'CONSUMED' | 'DESTROYED' | 'DROPPED'
}
```

Regras de `state` (decisao registrada para cobrir remocao/consumo/descarte, ja que nao existe endpoint dedicado):

* somente Mestre pode alterar `state` por este endpoint;
* `state` alvo deve ser uma transicao valida a partir do estado atual, conforme o diagrama da secao 11 (`STORED -> CONSUMED`, `STORED -> DESTROYED`, `STORED -> DROPPED`); qualquer outra combinacao retorna `INVALID_PAYLOAD`;
* nao e permitido setar `state` para `EQUIPPED` ou `TRANSFERRED` por este endpoint — essas transicoes tem rotas proprias (`equip`/`transfer`);
* alterar `state` para `CONSUMED`/`DESTROYED`/`DROPPED` gera ledger (`CONSUME` para `CONSUMED`, `REMOVE` para `DESTROYED`/`DROPPED`);
* alterar apenas `customName`/`notes` nao gera ledger; alterar `quantity` gera `ADJUST_QUANTITY` como ja descrito.

### 6.6. Equipar item

```txt
POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/equip
```

Payload:

```ts
type EquipInventoryItemRequest = {
  equipmentOptionKey: string
}
```

Regras:

* item deve pertencer ao personagem que esta equipando;
* `equipmentOptionKey` deve ser validado pelo adapter do sistema da campanha;
* quando a definicao do item informar uma opcao canonica de equipamento (`equipSlot`/campo equivalente normalizado pelo adapter), o adapter deve rejeitar qualquer `equipmentOptionKey` diferente; itens legados/custom sem opcao canonica podem seguir a politica de compatibilidade do adapter;
* conflitos, capacidade, incompatibilidades e recursos consumidos devem ser decididos pelo adapter do sistema;
* a validacao final deve ocorrer dentro da transacao que persiste o equipamento;
* se o item estiver em stack com `quantity > 1`, o use case deve dividir a stack ou retornar erro `STACK_MUST_BE_SPLIT`;
* registrar ledger `EQUIP`.

### 6.7. Desequipar item

```txt
DELETE /api/campaigns/:campaignId/equipped-items/:equippedItemId
```

Regras:

* remover `EquippedItem`;
* voltar `InventoryItem.state` para `STORED` quando aplicavel;
* registrar ledger `UNEQUIP`.

### 6.8. Transferir item

```txt
POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/transfer
```

Payload:

```ts
type TransferInventoryItemRequest = {
  toCharacterId: string
  quantity: number
  note?: string
}
```

Regras:

* origem e destino devem pertencer a mesma campanha;
* item equipado nao pode ser transferido sem desequipar antes;
* quantidade deve ser positiva;
* transacao deve debitar origem e creditar destino atomicamente;
* usar mesmo `operationId` para ledgers de saida e entrada;
* emitir eventos apos commit.

### 6.9. Ajustar wallet

```txt
POST /api/campaigns/:campaignId/characters/:characterId/wallet/adjust
```

Permissao: Mestre.

Payload:

```ts
type AdjustWalletRequest = {
  deltaMinorUnit: number
  reason: 'LOOT' | 'REWARD' | 'PURCHASE' | 'SALE' | 'CORRECTION' | 'ADJUSTMENT'
  note?: string
}
```

### 6.10. Transferir moeda

```txt
POST /api/campaigns/:campaignId/characters/:fromCharacterId/wallet/transfer
```

Payload:

```ts
type TransferCurrencyRequest = {
  toCharacterId: string
  amountMinorUnit: number
  note?: string
}
```

Regras:

* `amountMinorUnit > 0`;
* origem e destino na mesma campanha;
* origem deve ter saldo suficiente, salvo regra futura explicita;
* debito e credito na mesma transacao;
* ledgers com mesmo `operationId`.

### 6.11. Historico

```txt
GET /api/campaigns/:campaignId/characters/:characterId/inventory/ledger?page=1&limit=20
GET /api/campaigns/:campaignId/characters/:characterId/wallet/ledger?page=1&limit=20
```

Historico deve ser paginado.

### 6.12. Ficha de catalogo de um item guardado

```txt
GET /api/campaigns/:campaignId/inventory-items/:inventoryItemId/catalog-sheet
```

**Decisao registrada (2026-07-10):** endpoint dedicado para a UI de "Ficha" no menu de contexto da Mochila (secao 12.1) reutilizar exatamente o mesmo componente de ficha que o Mestre ja usa no catalogo de itens (`features/items`/`ItemSheetModal`), sem duplicar a logica de apresentacao.

Permissao: mesma de "Ver inventario" (secao 8) — Mestre ativo sempre; dono jogador ativo apenas para o proprio personagem; nenhum outro jogador.

Resolucao:

* carrega o `InventoryItem` pelo `inventoryItemId` e sua `CampaignItemDefinition`;
* se `source !== 'SYSTEM_CATALOG'` (item `CUSTOM`/`IMPORTED`, sem origem no catalogo), retorna `404 ITEM_NOT_FROM_CATALOG` — nao existe ficha de catalogo para itens criados manualmente pelo Mestre;
* se `source === 'SYSTEM_CATALOG'`, resolve a entrada original do catalogo de referencia do ruleset a partir de `sourcePack`+`sourceId` (os mesmos campos usados para deduplicar no envio de item — secao 3.2/6.4.1) via um novo metodo opcional do adapter de itens do sistema, `findEntryBySource(sourcePack, sourceId)`;
* resposta e o mesmo formato usado pelo catalogo (`GameSystemItemEntry`/`CampaignItemEntry`, com `display.sheet.sections`), consumido pelo frontend sem transformacao.

Erros: `401` (nao autenticado), `403 FORBIDDEN` (sem permissao para ver este inventario), `404 INVENTORY_ITEM_NOT_FOUND`, `404 ITEM_NOT_FROM_CATALOG`.

Este endpoint e deliberadamente separado de `GET /api/campaigns/:campaignId/items/:itemId` (secao do modulo `game_systems/items`), que continua restrito ao Mestre e indexado por id de catalogo — a Mochila e acessivel por jogadores donos do proprio personagem, e o unico dado que o cliente possui e o `inventoryItemId`, nao o id de catalogo.

### 6.13. Fatos de equipamento para Armor Class (Pathfinder 2e)

```txt
GET /api/campaigns/:campaignId/characters/:characterId/armor-class-equipment
```

**Decisao registrada:** endpoint generico do modulo `inventory`, mas cujo conteudo e inteiramente resolvido pelo `InventorySystemAdapter` do sistema da campanha (capacidade opcional `resolveArmorClassEquipment`). O core so orquestra permissao e busca do inventario; nao interpreta armadura/escudo. Contrato completo da formula que consome esta resposta em `.ai/game_systems/pathfinder_2e/armor_class/specs.md`.

Permissao: mesma de "Ver inventario" (secao 8) — Mestre ativo sempre; dono jogador ativo para o proprio personagem; nenhum outro jogador.

Resposta:

```ts
type ArmorClassEquipmentResponse = {
  system: string
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}
```

Erros: `401` nao autenticado; `403 FORBIDDEN` sem permissao; `404 CAMPAIGN_CHARACTER_NOT_FOUND` personagem nao encontrado na campanha.

### 6.14. Alternar escudo erguido (Pathfinder 2e)

```txt
PATCH /api/campaigns/:campaignId/equipped-items/:equippedItemId/shield
```

Payload:

```ts
type ToggleShieldRaisedRequest = { raised: boolean }
```

Regras:

* item alvo deve ter `classification.role === 'shield'` (validado via `CatalogSheetLookupPort`/definicao do item), senao `400 INVALID_PAYLOAD`;
* item deve pertencer ao personagem do ator (dono ativo) ou o ator deve ser o Mestre ativo da campanha, senao `403 FORBIDDEN`;
* grava `raised` em `EquippedItem.systemData.shieldRaised` (opaco, interpretado apenas pelo adapter PF2e);
* emite `inventory:changed` com `reason: 'ITEM_UPDATED'` (valor ja existente no union, sem novo reason) e `changedItemIds: [inventoryItemId]`.

Erros: `401` nao autenticado; `403 FORBIDDEN`; `404 EQUIPPED_ITEM_NOT_FOUND`; `400 INVALID_PAYLOAD`.

---

## 7. Contratos WebSocket

Eventos emitidos pelo servidor apos commit:

```ts
type InventoryChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  inventoryId: string
  reason:
    | 'ITEM_ADDED'
    | 'ITEM_UPDATED'
    | 'ITEM_REMOVED'
    | 'ITEM_EQUIPPED'
    | 'ITEM_UNEQUIPPED'
    | 'ITEM_TRANSFERRED'
  changedItemIds: string[]
  occurredAt: string
}

type WalletChangedEvent = {
  campaignId: string
  characterId: string
  campaignCharacterId: string
  walletId: string
  reason:
    | 'BALANCE_ADJUSTED'
    | 'CURRENCY_TRANSFERRED'
    | 'PURCHASE'
    | 'SALE'
    | 'REWARD'
  balanceMinorUnit: number
  occurredAt: string
}
```

Eventos:

```txt
inventory:changed
wallet:changed
inventory:item-transferred
wallet:currency-transferred
```

Visibilidade:

* Mestre recebe eventos de todos os personagens da campanha.
* Jogador recebe eventos do proprio personagem.
* Jogador pode receber evento de transferencia quando for origem ou destino.
* Nao emitir inventario completo de NPC para jogadores.

---

## 8. Regras de Permissao

| Acao | Mestre | Dono Jogador | Outro Jogador |
|---|---:|---:|---:|
| Ver inventario | Sim | Sim | Nao |
| Ver wallet | Sim | Sim | Nao |
| Criar item customizado | Sim | Nao | Nao |
| Enviar item do catalogo para jogador ativo | Sim | Nao | Nao |
| Adicionar item | Sim | Configuravel futuramente | Nao |
| Remover item | Sim | Configuravel futuramente | Nao |
| Equipar item | Sim | Sim | Nao |
| Desequipar item | Sim | Sim | Nao |
| Ver fatos de equipamento para AC | Sim | Sim (proprio) | Nao |
| Alternar escudo erguido | Sim | Sim (proprio) | Nao |
| Transferir item proprio | Sim | Configuravel | Nao |
| Ajustar dinheiro livremente | Sim | Nao | Nao |
| Transferir dinheiro proprio | Sim | Configuravel | Nao |
| Ver ledger completo | Sim | Proprio | Nao |

---

## 9. Regras de Validacao

* `campaignId` deve existir.
* `characterId` deve pertencer a campanha via `CampaignCharacter`.
* `CampaignCharacter.status` deve ser `ACTIVE` para mutacoes comuns.
* `quantity` deve ser inteiro positivo.
* `deltaMinorUnit` pode ser negativo em ajuste, mas saldo final nao pode ficar negativo por padrao.
* `amountMinorUnit` em transferencia deve ser inteiro positivo.
* `InventoryItem.inventoryId` deve pertencer a campanha informada.
* `Wallet.campaignId` deve bater com a campanha informada.
* Item equipado nao pode ser transferido ou consumido sem resolver o equipamento antes.
* Item nao stackavel nao deve ser mesclado em stack com quantidade maior que 1.
* Item stackavel so pode ser equipado se a stack for dividida ou quantidade for 1.
* O adapter do sistema deve validar conflitos de equipamento com base no snapshot atual de equipamentos do personagem.
* O adapter do sistema deve validar se a opcao escolhida e compativel com a definicao do item quando o item trouxer uma opcao canonica.

---

## 10. Erros de Dominio

Codigos recomendados:

```txt
UNAUTHORIZED
FORBIDDEN
CAMPAIGN_NOT_FOUND
CHARACTER_NOT_FOUND
CAMPAIGN_CHARACTER_NOT_FOUND
INVENTORY_NOT_FOUND
WALLET_NOT_FOUND
ITEM_DEFINITION_NOT_FOUND
CATALOG_ITEM_NOT_FOUND
TARGET_NOT_ACTIVE_PLAYER
INVENTORY_ITEM_NOT_FOUND
EQUIPPED_ITEM_NOT_FOUND
INVALID_QUANTITY
INVALID_CURRENCY_AMOUNT
INSUFFICIENT_FUNDS
ITEM_BELONGS_TO_ANOTHER_CHARACTER
ITEM_ALREADY_EQUIPPED
ITEM_NOT_EQUIPPED
EQUIPMENT_CONFLICT
STACK_MUST_BE_SPLIT
CROSS_CAMPAIGN_TRANSFER_NOT_ALLOWED
NEGATIVE_BALANCE_NOT_ALLOWED
INVALID_PAYLOAD
INTERNAL_ERROR
```

---

## 11. Estado de InventoryItem

```txt
STORED -> EQUIPPED
EQUIPPED -> STORED
STORED -> TRANSFERRED
STORED -> CONSUMED
STORED -> DESTROYED
STORED -> DROPPED
```

Observacoes:

* `TRANSFERRED` pode ser usado na entrada original quando a instancia inteira saiu do inventario.
* Para transferencia parcial, reduzir quantidade na origem e criar/aumentar stack no destino.
* `DROPPED` nao representa item em cena persistente nesta fase; e apenas estado/auditoria.

---

## 12. Equipment Agnostico de Sistema

O modulo `inventory` deve tratar equipamento como estado persistente generico. Ele nao conhece slots, maos, armaduras, escudos, body slots ou investidura.

Contratos esperados do adapter:

```ts
type EquipmentOption = {
  key: string
  label: string
  description?: string
  disabled?: boolean
  metadata?: unknown
}

type EquipmentResourceUsage = {
  resource: string
  amount: number
  exclusive?: boolean
}

type EquipmentValidationResult =
  | {
      ok: true
      optionKey: string
      resourceUsage: EquipmentResourceUsage[]
      systemData?: unknown
    }
  | {
      ok: false
      code: string
      message: string
      details?: unknown
    }
```

O adapter tambem pode devolver grupos de apresentacao de equipamento:

```ts
type EquipmentGroup = {
  id: string
  label: string
  itemIds: string[]
  metadata?: unknown
}
```

Regras:

* `itemIds` referencia ids de `EquippedItem`.
* O core apenas transporta esses grupos para a UI, expandindo `itemIds` para `EquippedItemView[]` na resposta HTTP.
* A UI generica deve renderizar `label` e `items`, nao `equipmentOptionKey`.
* Chaves tecnicas como `main_hand`, `off_hand`, `armor`, `shield`, `body`, `head`, `ring` ou equivalentes pertencem ao adapter/ruleset, nao ao layout generico.

Para compatibilidade temporaria, a rota HTTP pode aceitar `slot` como alias de `equipmentOptionKey`, mas nenhum codigo novo deve depender de `slot`.

---

## 12.1. Contrato de UI: Mochila em Modal com Grid de Slots

**Decisao registrada (2026-07-10):** o inventario deixou de ser uma aba fixa do painel lateral direito e passou a ser um modal ("Mochila"), aberto por clique direito no token (mesma permissao de "Ver inventario" da tabela da secao 8: Mestre sempre, dono jogador para o proprio personagem, nenhum outro jogador). O modal segue o mesmo padrao visual/comportamental dos demais modais do sistema (portal, arrastavel, redimensionavel, botao de fechar), sem nenhum contrato HTTP/WS novo — reaproveita integralmente `equip`/`unequip`/`updateInventoryItem`/`equipmentOptions`/`equippedGroups` ja descritos nesta spec.

Regras de apresentacao:

* itens sao renderizados em um **grid de slots**, um item por slot; itens empilhaveis mostram um badge `xN` no slot quando `quantity > 1`;
* cada item e representado por um **icone**, nao pelo nome em texto (nome fica disponivel como tooltip/`title`); o icone e resolvido por heuristica de palavras-chave sobre `itemType`/`name`/`traits` (campos genericos ja existentes no contrato) contra o pacote de arte estatico em `apps/web/public/assets/icons` (`apps/web/src/inventory/domain/itemIcon.ts`) — nao e um mapeamento 1:1 exato do catalogo (que tem milhares de itens), e sim o icone generico mais proximo, com fallback por `itemType` e um icone padrao final;
* a secao **Mochila** usa um grid fixo de **50 slots (10 colunas x 5 linhas)**; slots vazios aparecem como placeholders tracejados. **Sem limite rigido de capacidade** nesta fase — se houver mais de 50 itens guardados, o grid apenas cresce em linhas extras (ainda 10 colunas), sem bloquear ou esconder itens (consistente com a decisao da secao 12/skills.md de nao bloquear por bulk/carga ainda). A secao **Equipados** continua com grid responsivo sem slots vazios (agrupada por opcao, tipicamente poucos itens por grupo);
* o modal separa visualmente **itens equipados** (agrupados usando `equippedGroups`/`label`, nunca a `equipmentOptionKey` crua — reforcando a regra ja registrada acima) dos **itens da mochila** (`state = STORED`);
* a interacao principal e **clique direito no item**, abrindo um menu de contexto com as acoes validas para aquele item:
  * "Ficha" — disponivel apenas para itens com `itemDefinition.source === 'SYSTEM_CATALOG'` (clonados do catalogo de referencia do ruleset); reutiliza o mesmo modal (`ItemSheetModal`/`Pathfinder2eItemSheetView`) que o Mestre ja usa no catalogo de itens da campanha (`features/items`), em vez de criar uma ficha nova. Como o catalogo e `CampaignItemDefinition` vivem em espacos de id diferentes (`GET /api/campaigns/:campaignId/items/:itemId` espera um id de catalogo tipo `pf2e:equipment:dagger` e e restrito ao Mestre), foi adicionado um novo endpoint dedicado — ver secao 6.12 — que resolve a ficha a partir do `inventoryItemId` respeitando a mesma permissao de "Ver inventario". Itens `CUSTOM` (criados manualmente pelo Mestre, sem origem no catalogo) nao tem ficha de catalogo; a opcao "Ficha" nao aparece para eles;
  * `STORED` com opcoes de equipamento compativeis: "Equipar" — equipa direto se houver exatamente uma opcao valida, ou abre um submenu com os `label`s de cada `EquipmentOption` quando houver mais de uma;
  * `STORED` com `itemDefinition.itemType === 'consumable'`: "Consumir" (`PATCH .../inventory-items/:id` com `state: 'CONSUMED'`);
  * `STORED`: "Dropar", sempre disponivel (`state: 'DROPPED'`);
  * `EQUIPPED`: apenas "Desequipar" (`DELETE .../equipped-items/:id`);
* **sem drag-and-drop** nesta iteracao — nao ha biblioteca de drag-and-drop no frontend hoje; reordenar/mover itens entre slots nao e suportado, apenas as acoes do menu de contexto.

---

## 13. PF2e: Contrato Inicial

### 12.1. Moeda

```ts
const PF2E_CURRENCY = {
  cp: 1,
  sp: 10,
  gp: 100,
  pp: 1000,
} as const
```

### 12.2. Opcoes iniciais de equipamento

```ts
type Pathfinder2eEquipmentSlot =
  | 'main_hand'
  | 'off_hand'
  | 'two_hands'
  | 'armor'
  | 'shield'
  | 'worn'
  | 'held'
  | 'backpack'
  | 'consumable'
  | 'other'
```

Essas chaves pertencem exclusivamente ao adapter Pathfinder 2e. Para o core, elas sao apenas `equipmentOptionKey`.

Quando um item PF2e do catalogo define `equipSlot`, esse valor e interpretado pelo adapter como uma categoria canonica, nao como um slot corporal antigo. Ex.: armaduras com `equipSlot = "armor"` so podem usar a opcao `armor`; armas de uma mao com `equipSlot = "main_hand"` podem usar `main_hand` ou `off_hand`; itens `held` consomem maos; itens com trait `invested` contam para o limite PF2e de 10 investiduras. Itens stowed/guardados continuam representados como itens `STORED` no inventario geral ate existir suporte persistente a containers.

Este bloco e V1 legado. Para V2, o adapter PF2e deve preferir `itemData.equipment.options`:

* `equipment.equippable=false` falha no fluxo de equipar;
* a opcao escolhida deve existir em `equipment.options`;
* `resourceUsage` da opcao e a fonte dos `resourceLocks`;
* municao e consumiveis sem uso segurado confiavel nao possuem opcoes de equipamento;
* regras PF2e especificas ficam no package `packages/game-system-pathfinder-2e`, nao no registry generico.

Recursos PF2e esperados no adapter:

* `pf2e:hand:main` e `pf2e:hand:off` para maos;
* `pf2e:armor` para armadura ativa;
* `pf2e:shield` para escudo ativo;
* `pf2e:investiture` para itens investidos, com capacidade maxima 10.

O core continua sem saber o significado desses recursos.

A apresentacao PF2e inicial deve agrupar itens equipados por estado de uso:

* `held` -> `Segurados`;
* `worn` -> `Vestidos`;
* `invested` -> `Investidos`;
* `prepared` -> `Preparados`.

Esses labels pertencem ao adapter PF2e. A UI generica nao deve mostrar `main_hand`, `off_hand`, `armor` ou `shield` como cabecalhos.

### 12.3. Campos de exibicao recomendados

```ts
type Pathfinder2eItemSystemData = {
  itemType?: string
  level?: number
  rarity?: string
  traits?: string[]
  bulk?: string
  price?: {
    valueMinorUnit: number
    display: string
  }
  usage?: string
  hands?: string
  group?: string
  category?: string
  description?: string
}
```

---

## 14. Criterios de Aceitacao

* Existe `.ai/inventory/readme.md`, `.ai/inventory/skills.md`, `.ai/inventory/specs.md` e `.ai/inventory/todo.md`.
* Prisma possui modelos para definicao de item, inventario, item no inventario, item equipado, wallet e ledgers.
* Inventario/wallet sao associados a `CampaignCharacter` e `campaignId`.
* Dinheiro e salvo como inteiro em unidade menor.
* Item equipado referencia `InventoryItem`.
* Nao e possivel equipar item de outro personagem.
* Nao e possivel violar conflitos/capacidades reportados pelo adapter do sistema.
* Transferencia de item e moeda e atomica.
* Toda mutacao relevante cria ledger.
* Endpoints validam permissao de Mestre/Jogador.
* Eventos realtime sao emitidos apenas apos commit.
* UI consegue listar inventario, wallet e itens equipados.
* Mestre consegue enviar um item do catalogo de referencia do ruleset diretamente para o inventario de um jogador ativo, e o item aparece na mochila do jogador; enviar o mesmo item do catalogo novamente reaproveita a `CampaignItemDefinition` ja clonada em vez de duplicar.
* Testes cobrem regras principais.

---

## 15. Decisao sobre a Rota Antiga de Trade

A rota `POST /api/items/trade` deve ser considerada legado temporario.

Opcoes:

1. manter como wrapper temporario que chama `transferItemUseCase` quando possivel;
2. manter apenas enquanto a UI antiga existir;
3. remover apos migrar UI para os novos endpoints.

Nao criar nova regra de negocio em cima dela sem persistencia.
