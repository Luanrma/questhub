# Modulo: Inventory & Economy (Skills & Tech)

## 1. Stack Tecnologica

* TypeScript.
* Backend em `apps/api` com Fastify.
* Validacao com Zod.
* Persistencia com PostgreSQL + Prisma.
* Realtime com Socket.IO.
* Frontend em `apps/web` com React + Vite + TypeScript.
* Contratos agnosticos quando necessario em `packages/game-system-core`.
* Adaptadores especificos de Pathfinder 2e em `packages/game-system-pathfinder-2e`.

---

## 2. Padroes Aplicados

### 2.1. Bounded Context

`inventory` deve ser um modulo proprio.

Nao implementar inventario dentro de:

* `campaigns`;
* `characters`;
* `game_systems`;
* `campaign_scene`;
* `trade` antigo;
* `Character.sheet`.

### 2.2. Item Definition vs Item Instance

Separar definicao/template de item da posse concreta.

* Definicao: nome, tipo, raridade, traits, preco, bulk, dados PF2e.
* Instancia: dono, quantidade, estado, notas, nome customizado.
* Equipamento: ponte entre personagem e instancia de item.

### 2.3. Ledger/Auditoria

Toda mutacao persistente deve registrar historico.

Use ledger para responder perguntas como:

* quem adicionou o item?
* quem removeu?
* quem transferiu?
* quanto dinheiro entrou/saiu?
* qual era o saldo antes e depois?
* qual usuario executou a acao?

### 2.4. Unit of Work / Transacao

Transferencias devem ser atomicas.

Nao faca:

1. debita origem;
2. responde sucesso;
3. tenta creditar destino.

Use `prisma.$transaction` para item e wallet.

### 2.5. Anti-Corruption Layer PF2e

Dados mecanicos PF2e devem entrar por adapters/normalizadores.

O core do modulo pode saber que existe `GameSystem`, `systemData` e metadados exibiveis, mas nao deve codificar regra profunda de PF2e em controllers genericos.

---

## 3. Restricoes Tecnicas

* Nao usar `String` para saldo monetario.
* Nao usar `Float` para saldo monetario.
* Nao guardar inventario inteiro em `Character.sheet`.
* Nao deixar `EquippedItem` apontar diretamente para `ItemDefinition`; ele deve apontar para `InventoryItem`.
* Nao permitir item equipado sem item correspondente no inventario.
* Nao executar regra de negocio diretamente dentro de controller Fastify.
* Nao acessar banco diretamente dentro de listener Socket.IO.
* Nao emitir evento realtime antes do commit da transacao.
* Nao confiar em `userId`, `role`, `campaignId`, `characterId` ou permissoes enviados pelo cliente.
* Nao permitir transferencia entre campanhas diferentes.
* Nao permitir alterar wallet/inventory de personagem com `CampaignCharacter.status` diferente de `ACTIVE`, exceto operacoes administrativas explicitamente projetadas.
* Nao acoplar compra/venda/craft completo na primeira entrega.

---

## 4. Estrutura Recomendada no Backend

```txt
apps/api/src/modules/inventory/
  domain/
    inventory-errors.ts
    inventory-rules.ts
    money.ts
    slots.ts
    types.ts
  application/
    add-item-to-inventory.use-case.ts
    adjust-wallet.use-case.ts
    equip-item.use-case.ts
    get-inventory.use-case.ts
    transfer-currency.use-case.ts
    transfer-item.use-case.ts
    unequip-item.use-case.ts
  application/ports/
    inventory-repository.ts
    wallet-repository.ts
    inventory-event-bus.ts
  infra/
    prisma-inventory-repository.ts
    prisma-wallet-repository.ts
    socket-inventory-event-bus.ts
  presentation/
    routes.ts
    validation.ts
    presenter.ts
  index.ts
```

Se o projeto atual estiver mais simples, uma estrutura menor pode ser aceita temporariamente, mas as responsabilidades nao devem ser misturadas.

---

## 5. Estrutura Recomendada no Frontend

```txt
apps/web/src/inventory/
  components/
    InventoryPanel.tsx
    InventoryItemCard.tsx
    EquippedItemsPanel.tsx
    WalletPanel.tsx
    CurrencyBreakdown.tsx
  hooks/
    useInventory.ts
    useWallet.ts
    useInventoryRealtime.ts
  domain/
    money.ts
    inventoryTypes.ts
    inventoryViewModel.ts
  infrastructure/
    inventoryApi.ts
```

Regras:

* Componentes renderizam UI e disparam callbacks.
* Hooks coordenam estado, chamadas HTTP e listeners realtime.
* Funcoes de dominio formatam moeda, validam slots e montam view models.
* Services HTTP ficam em `infrastructure`.

---

## 6. Dinheiro: Regra Tecnica

Persistir moeda em unidade menor.

Para PF2e:

```ts
type Pathfinder2eCurrencyBreakdown = {
  pp: number
  gp: number
  sp: number
  cp: number
}
```

Valor canonico:

```ts
type MoneyMinorUnit = number // copper pieces para PF2e
```

Funcoes puras esperadas:

```ts
function toCopper(input: Pathfinder2eCurrencyBreakdown): number
function fromCopper(totalCopper: number): Pathfinder2eCurrencyBreakdown
function formatPathfinder2eCurrency(totalCopper: number): string
```

Essas funcoes devem ser testadas com unit tests.

---

## 7. Slots e Equipamento

O modulo deve diferenciar slots exclusivos e nao exclusivos.

Slots exclusivos iniciais:

* `main_hand`;
* `off_hand`;
* `two_hands`;
* `armor`;
* `shield`.

Slots nao exclusivos iniciais:

* `worn`;
* `held`;
* `backpack`;
* `consumable`;
* `other`.

Regra tecnica recomendada:

* `EquippedItem.inventoryItemId` deve ser unico.
* `EquippedItem.exclusiveSlotKey` deve ser preenchido apenas para slots exclusivos.
* Criar unique composto por `campaignCharacterId + exclusiveSlotKey` para impedir dois itens no mesmo slot exclusivo.
* Para slots nao exclusivos, `exclusiveSlotKey` deve ser `null`.

---

## 8. Eventos Realtime

Eventos devem ser emitidos apos commit.

Eventos recomendados:

```txt
inventory:changed
wallet:changed
inventory:item-transferred
wallet:currency-transferred
trade:received          // compatibilidade temporaria, se necessario
```

Preferir payloads pequenos contendo IDs e snapshot atualizado ou versao.

Nao emitir dados secretos de inventarios de NPC/personagens que o usuario nao pode ver.

---

## 9. Seguranca e Permissoes

Toda rota deve:

1. autenticar usuario;
2. validar params/body com Zod;
3. carregar `CampaignCharacter` do usuario na campanha;
4. determinar role/status;
5. verificar permissao por caso de uso;
6. executar mutacao em transacao quando necessario;
7. retornar DTO sem campos internos desnecessarios.

Regras minimas:

* Mestre ativo pode administrar todos os inventarios da campanha.
* Jogador ativo pode consultar o proprio inventario e wallet.
* Jogador ativo pode equipar/desequipar o proprio item se a configuracao da campanha permitir.
* Jogador nao pode ajustar saldo livremente.
* Jogador nao pode criar item de campanha, salvo permissao futura explicita.
* Usuario fora da campanha nunca ve inventario/wallet.

---

## 10. Performance

* Indexar `campaignId` em todos os agregados principais.
* Indexar `campaignCharacterId` em `Inventory` e `Wallet`.
* Indexar `inventoryId` em `InventoryItem`.
* Indexar `itemDefinitionId` em `InventoryItem`.
* Indexar `walletId` e `createdAt` em ledger de wallet.
* Indexar `inventoryId` e `createdAt` em ledger de inventario.
* Paginar historico/ledger.
* Evitar carregar ledger completo junto com inventario por padrao.
* Buscar snapshot atual separado do historico.

---

## 11. Testes Obrigatorios

Criar ou atualizar testes para:

* criacao automatica/manual de inventory e wallet;
* adicionar item;
* empilhar item stackavel;
* impedir quantidade negativa;
* equipar item proprio;
* impedir equipar item de outro personagem;
* impedir dois itens no mesmo slot exclusivo;
* desequipar item;
* transferir item entre personagens da mesma campanha;
* bloquear transferencia entre campanhas;
* ajustar wallet como Mestre;
* bloquear ajuste de wallet como Jogador;
* transferir moeda de forma atomica;
* impedir saldo negativo;
* registrar ledger de item;
* registrar ledger de wallet.

---

## 12. Limitacoes Conhecidas da Primeira Entrega

* Nao implementar compendio oficial completo de itens PF2e no primeiro passo.
* Nao calcular todos os bonus de equipamento automaticamente.
* Nao implementar bulk/carga como regra bloqueante inicialmente.
* Nao implementar lojas, craft e venda automatizada completa inicialmente.
* Nao implementar trade com aceite/recusa se transferencia direta atender a primeira necessidade.
* Nao remover a rota antiga de trade sem validar a UI existente.
