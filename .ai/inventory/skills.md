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

**Decisao registrada (2026-07-09):** as funcoes de moeda (`toCopper`, `fromCopper`, `formatPathfinder2eCurrency`, `PF2E_CURRENCY`) e as opcoes/recursos de equipamento PF2e continuam no package `packages/game-system-pathfinder-2e/src/server/inventory/` e no adapter registrado em `apps/api/src/modules/game_systems/registry.ts`. O core de inventario nao importa mais a facade `pathfinder_2e/inventory` diretamente; ele resolve `inventory` e `currency` por `GameSystemAdapter`. Isso preserva a fronteira core/game-system: `apps/api/src/modules/inventory/` conhece apenas o contrato generico de adapter.

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

Moeda e slots PF2e NAO ficam em `domain/` deste modulo (ver decisao na secao 2.5). `domain/` e agnostico de sistema; o modulo `inventory` resolve essas capacidades pelo `GameSystemAdapter` registrado em `apps/api/src/modules/game_systems/registry.ts`.

```txt
apps/api/src/modules/inventory/
  domain/
    inventory-errors.ts
    inventory-rules.ts
    presenters.ts
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
    InventoryModal.tsx
    InventoryGrid.tsx
    InventoryItemSlot.tsx
    InventoryItemContextMenu.tsx
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
    itemIcon.ts
  infrastructure/
    inventoryApi.ts
```

Regras:

* Componentes renderizam UI e disparam callbacks.
* Hooks coordenam estado, chamadas HTTP e listeners realtime.
* `domain/money.ts` do frontend nao reimplementa conversao de moeda: apenas reexporta/adapta as funcoes de `apps/web/src/game-systems/pathfinder-2e/inventory/` (facade), decidindo qual sistema usar. `domain/inventoryViewModel.ts` monta view models agnosticos (agrupar por opcao/estado, resolver labels de equipados).
* Services HTTP ficam em `infrastructure`.

**Decisao registrada (2026-07-10):** o inventario deixou de ser renderizado como aba fixa do painel lateral (`InventoryPanel.tsx`, removido) e passou a ser um modal (`InventoryModal.tsx`) aberto por clique direito no token, com grid de slots (`InventoryGrid.tsx`/`InventoryItemSlot.tsx`) e menu de contexto por item (`InventoryItemContextMenu.tsx`) substituindo a lista de linhas com `<select>` de opcao de equipamento (`InventoryItemCard.tsx`/`EquippedItemsPanel.tsx`, removidos). A mochila usa grid fixo de 50 slots (10x5); itens sao exibidos por icone (`domain/itemIcon.ts`), resolvido por heuristica de palavras-chave contra `apps/web/public/assets/icons`, nao pelo nome em texto. Ver contrato completo em `.ai/inventory/specs.md` secao 12.1.

**Decisao registrada (2026-07-10):** o utilitario generico de drag/resize de janela usado por todos os modais do sistema (`clamp`, `calculateBounds`) foi extraido de `apps/web/src/game-systems/character-sheet/drag.ts` para `apps/web/src/components/windowDrag.ts`, um local compartilhado fora de qualquer feature especifica. Isso evita que `inventory` (ou qualquer outro modulo) precise importar de dentro de `game-systems/character-sheet` so para reaproveitar matematica de janela generica. `CharacterSheetModal`, `BestiaryCreatureSheetModal`, `ItemSheetModal`, `HazardEncounterPanel` e o novo `InventoryModal` importam todos do mesmo local.

**Decisao registrada (2026-07-10):** a opcao "Ficha" do menu de contexto da Mochila reutiliza `apps/web/src/features/items/components/ItemSheetModal.tsx` (o mesmo componente que o Mestre ja usa no catalogo de itens da campanha) em vez de criar uma ficha de item nova dentro do modulo `inventory`. `InventoryModal.tsx` busca a ficha via `getInventoryItemCatalogSheet` (`infrastructure/inventoryApi.ts`, novo endpoint — ver `.ai/inventory/specs.md` secao 6.12) e passa o resultado como `initialItem` para o `ItemSheetModal`, que entao pula o proprio fetch interno (o qual e restrito ao Mestre e indexado por id de catalogo, incompativel com o fluxo da Mochila). Isso e uma dependencia cruzada intencional `inventory` -> `features/items` (reuso de UI de apresentacao, nao de regra de negocio) e so cobre itens `SYSTEM_CATALOG`; itens `CUSTOM` nao mostram a opcao "Ficha".

---

## 6. Dinheiro: Regra Tecnica

Persistir moeda em unidade menor.

**Local de implementacao (ver decisao secao 2.5):** as funcoes abaixo vivem em `packages/game-system-pathfinder-2e/src/server/inventory/money.ts`, nao em `apps/api/src/modules/inventory/domain/`. O backend consome moeda via `GameSystemAdapter.currency`; o frontend generico deve preferir o display normalizado retornado pela API.

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

## 7. Equipment Agnostico

O modulo `inventory` nao deve diferenciar slots ou categorias especificas de ruleset. Ele deve persistir um estado equipado generico e pedir ao adapter do sistema que valide opcoes, conflitos, capacidade e recursos consumidos.

**Decisao registrada (2026-07-10):** chaves como `main_hand`, `off_hand`, `armor` e `shield` pertencem exclusivamente ao adapter Pathfinder 2e. O core recebe e persiste apenas `equipmentOptionKey`, `resourceLocks` e `systemData` opaco. A validacao final de equipamento deve ocorrer dentro da transacao de equipar, usando o snapshot atual de itens equipados do personagem.

**Decisao registrada (2026-07-10):** quando o item normalizado pelo ruleset possuir uma opcao canonica de equipamento (`equipSlot` no contrato atual), o adapter do sistema deve tratar esse valor como restricao de compatibilidade. O frontend pode usar esse mesmo campo para filtrar opcoes exibidas, mas a garantia de integridade pertence ao backend dentro da transacao.

Conceitos permitidos no core:

* `equipmentOptionKey`;
* `resourceLocks`;
* `EquipmentValidationResult`;
* `InventoryItem.state = EQUIPPED`;
* ledger `EQUIP`/`UNEQUIP`.

Conceitos proibidos no core:

* maos;
* armaduras;
* escudos;
* body slots;
* itens investidos;
* recursos ou capacidade especificos de qualquer RPG.

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
* impedir conflitos/capacidades reportados pelo adapter do sistema, como maos/armadura/escudo/investidura em PF2e;
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

* Nao calcular todos os bonus de equipamento automaticamente.
* Nao implementar bulk/carga como regra bloqueante inicialmente.
* Nao implementar lojas, craft e venda automatizada completa inicialmente.
* Nao implementar trade com aceite/recusa se transferencia direta atender a primeira necessidade.
* Nao remover a rota antiga de trade sem validar a UI existente.

---

## 13. Catalogo de Itens PF2e (Decisao Registrada)

A limitacao original "nao importar compendio oficial completo de itens PF2e no primeiro passo" foi revista a pedido explicito do usuario. O catalogo oficial de equipamentos foi importado do compendio Foundry VTT (`pf2e-master/packs/equipment`, 5217 itens) para `packages/game-system-pathfinder-2e/src/server/items/`, seguindo o mesmo padrao de geracao ja usado pelo bestiario (`scripts/generate-pf2e-bestiary-data.cjs`):

* `scripts/generate-pf2e-item-data.cjs` — script gerador, normaliza cada documento Foundry (`type` em `weapon|armor|equipment|consumable|treasure|backpack|shield|kit`) em um `Pathfinder2eCompendiumItem`.
* `packages/game-system-pathfinder-2e/src/server/items/models.ts` — tipos `Pathfinder2eCompendiumItem`/`Pathfinder2eItemSystemData`.
* `packages/game-system-pathfinder-2e/src/server/items/data.generated.ts` — array gerado (`PATHFINDER_2E_ITEM_DATA`) e resumo (`PATHFINDER_2E_ITEM_SOURCE_SUMMARY`). Arquivo gerado, nao editar manualmente — rodar o script novamente para atualizar.
* Exportado via `packages/game-system-pathfinder-2e/package.json` (`./server/items`).

Escopo desta importacao: **apenas o catalogo de referencia** (dados estaticos, sem I/O, sem tocar banco por si so).

**Decisao de produto atualizada (2026-07-09):** a proibicao original de qualquer escrita em `CampaignItemDefinition` a partir do catalogo foi revista pelo usuario para permitir exatamente um fluxo controlado: o Mestre, a partir do menu "Itens", pode enviar um item especifico do catalogo diretamente para o inventario de um jogador ativo (`.ai/game_systems/pathfinder_2e/items/specs.md` secao referente a `send-to-player`, `.ai/inventory/specs.md` secao 6.4.1). Isso permanece **diferente** de um seed/importacao em massa:

* a escrita e por clique, um item por vez, sempre iniciada explicitamente pelo Mestre — nunca automatica, nunca em lote, nunca disparada por migration/seed;
* usa o enum generico `ItemDefinitionSource.SYSTEM_CATALOG` e deduplica por `campaignId + source + sourcePack + sourceId`, entao reenviar o mesmo item nao cria linhas duplicadas;
* continua **proibido**: qualquer endpoint/UI de "importar todo o catalogo", qualquer seed de migration populando `CampaignItemDefinition` com dados do compendio, ou qualquer fluxo que clone itens sem uma acao explicita do Mestre direcionada a um jogador especifico.

Fora desse fluxo pontual de envio, o catalogo em `packages/game-system-pathfinder-2e/src/server/items/` continua servindo como **referencia estatica** (consulta, listagem, ficha), sem nenhuma outra ponte para o banco.
