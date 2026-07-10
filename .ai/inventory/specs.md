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
  slot                String
  exclusiveSlotKey    String?
  quantity            Int      @default(1)
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  campaignCharacter CampaignCharacter @relation(fields: [campaignCharacterId], references: [id], onDelete: Cascade)
  inventoryItem     InventoryItem     @relation(fields: [inventoryItemId], references: [id], onDelete: Cascade)

  @@index([campaignCharacterId])
  @@index([slot])
  @@unique([campaignCharacterId, exclusiveSlotKey])
}
```

Regras:

* `inventoryItemId` unico impede equipar a mesma instancia duas vezes.
* `exclusiveSlotKey` deve ser preenchido para slots exclusivos.
* `exclusiveSlotKey = null` para slots nao exclusivos.
* Para PF2e, slots exclusivos iniciais: `main_hand`, `off_hand`, `two_hands`, `armor`, `shield`.

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
  slot: string
  exclusiveSlotKey?: string | null
  quantity: number
}

type InventoryView = {
  id: string
  campaignId: string
  characterId: string
  campaignCharacterId: string
  items: InventoryItemView[]
  equippedItems: EquippedItemView[]
}
```

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
  slot: string
}
```

Regras:

* item deve pertencer ao personagem que esta equipando;
* se slot for exclusivo, nao pode haver outro item no mesmo `exclusiveSlotKey`;
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
* Slot exclusivo deve validar conflito.

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
EXCLUSIVE_SLOT_OCCUPIED
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

## 12. PF2e: Contrato Inicial

### 12.1. Moeda

```ts
const PF2E_CURRENCY = {
  cp: 1,
  sp: 10,
  gp: 100,
  pp: 1000,
} as const
```

### 12.2. Slots iniciais

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

## 13. Criterios de Aceitacao

* Existe `.ai/inventory/readme.md`, `.ai/inventory/skills.md`, `.ai/inventory/specs.md` e `.ai/inventory/todo.md`.
* Prisma possui modelos para definicao de item, inventario, item no inventario, item equipado, wallet e ledgers.
* Inventario/wallet sao associados a `CampaignCharacter` e `campaignId`.
* Dinheiro e salvo como inteiro em unidade menor.
* Item equipado referencia `InventoryItem`.
* Nao e possivel equipar item de outro personagem.
* Nao e possivel ter dois itens no mesmo slot exclusivo.
* Transferencia de item e moeda e atomica.
* Toda mutacao relevante cria ledger.
* Endpoints validam permissao de Mestre/Jogador.
* Eventos realtime sao emitidos apenas apos commit.
* UI consegue listar inventario, wallet e itens equipados.
* Mestre consegue enviar um item do catalogo de referencia do ruleset diretamente para o inventario de um jogador ativo, e o item aparece na mochila do jogador; enviar o mesmo item do catalogo novamente reaproveita a `CampaignItemDefinition` ja clonada em vez de duplicar.
* Testes cobrem regras principais.

---

## 14. Decisao sobre a Rota Antiga de Trade

A rota `POST /api/items/trade` deve ser considerada legado temporario.

Opcoes:

1. manter como wrapper temporario que chama `transferItemUseCase` quando possivel;
2. manter apenas enquanto a UI antiga existir;
3. remover apos migrar UI para os novos endpoints.

Nao criar nova regra de negocio em cima dela sem persistencia.
