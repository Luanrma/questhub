# Modulo: Inventory & Economy (TODO)

## Objetivo

Implementar inventario, itens equipados e wallet/economia no QuestHub, inspirado no `rpkage`, mas adaptado ao modelo atual com `CampaignCharacter`.

---

## Fase 0 — Auditoria Inicial

- [x] Ler `.ai/inventory/readme.md`.
- [x] Ler `.ai/inventory/skills.md`.
- [x] Ler `.ai/inventory/specs.md`.
- [x] Ler `AGENTS.md`.
- [x] Revisar `apps/api/prisma/schema.prisma` atual.
- [x] Revisar `apps/api/src/modules/trade/routes.ts` e mapear dependencias da UI.
- [x] Verificar se existe alguma UI consumindo `POST /api/items/trade`.
- [x] Identificar onde a ficha/personagem abre paineis laterais ou modais para encaixar inventario.

Entrega da fase:

- [x] Resumo tecnico dos arquivos impactados.
- [x] Confirmacao se a rota antiga de trade sera mantida como compatibilidade temporaria.

---

## Fase 1 — Schema Prisma

- [x] Criar enums:
  - [x] `ItemDefinitionSource`.
  - [x] `InventoryItemState`.
  - [x] `InventoryLedgerType`.
  - [x] `WalletLedgerType`.
- [x] Criar model `CampaignItemDefinition`.
- [x] Criar model `Inventory`.
- [x] Criar model `InventoryItem`.
- [x] Criar model `EquippedItem`.
- [x] Criar model `Wallet`.
- [x] Criar model `InventoryLedger`.
- [x] Criar model `WalletLedger`.
- [x] Adicionar relacoes em `Campaign`.
- [x] Adicionar relacoes em `CampaignCharacter`.
- [x] Criar indices definidos em `specs.md`.
- [x] Rodar formatacao do Prisma.
- [x] Gerar migration.
- [x] Rodar `npm run db:generate`.

Validacoes:

- [x] Schema compila.
- [x] Migration nao remove dados existentes.
- [x] Relacoes usam `onDelete` coerente com campanha/personagem.

---

## Fase 2 — Dominio Backend

- [x] Criar pasta `apps/api/src/modules/inventory`.
- [x] Criar tipos de dominio.
- [x] Criar erros de dominio com codigos estaveis.
- [x] Criar funcoes puras de dinheiro PF2e:
  - [x] `toCopper`.
  - [x] `fromCopper`.
  - [x] `formatPathfinder2eCurrency`.
- [x] Criar regras puras de slot:
  - [x] detectar slot exclusivo;
  - [x] mapear `exclusiveSlotKey`;
  - [x] validar conflito.
- [x] Criar presenter de inventario.
- [x] Criar presenter de wallet.

Validacoes:

- [x] Funcoes puras nao dependem de Prisma, Fastify, Socket.IO ou React.
- [x] Testes unitarios cobrem conversao de moeda e slots.

---

## Fase 3 — Repositorios e Transacoes

- [x] Criar ports:
  - [x] `InventoryRepository`.
  - [x] `WalletRepository`.
  - [x] `InventoryEventBus`.
- [x] Criar implementacoes Prisma.
- [x] Criar helpers para carregar acesso de campanha:
  - [x] Mestre ativo;
  - [x] dono jogador ativo;
  - [x] personagem alvo na campanha.
- [x] Garantir criacao lazy ou automatica de `Inventory` e `Wallet`.
- [x] Implementar operacoes atomicas com `prisma.$transaction`.

Validacoes:

- [x] Transferencia de item nao deixa origem/destino inconsistentes.
- [x] Transferencia de moeda nao deixa saldo parcial.
- [x] Ledger e snapshot sao salvos na mesma transacao.

---

## Fase 4 — Use Cases

- [x] `GetInventoryUseCase`.
- [x] `GetWalletUseCase`.
- [x] `CreateCampaignItemDefinitionUseCase`.
- [x] `AddItemToInventoryUseCase`.
- [x] `UpdateInventoryItemUseCase`.
- [x] `EquipItemUseCase`.
- [x] `UnequipItemUseCase`.
- [x] `TransferItemUseCase`.
- [x] `AdjustWalletUseCase`.
- [x] `TransferCurrencyUseCase`.
- [x] `GetInventoryLedgerUseCase`.
- [x] `GetWalletLedgerUseCase`.

Validacoes obrigatorias:

- [x] Jogador nao ajusta dinheiro livremente.
- [x] Jogador nao edita inventario de outro personagem.
- [x] Mestre edita qualquer personagem ativo da campanha.
- [x] Item equipado nao transfere sem desequipar.
- [x] Stack com quantidade maior que 1 nao equipa sem split.
- [x] Saldo nao fica negativo.

---

## Fase 5 — Rotas HTTP

- [x] Criar `presentation/validation.ts` com Zod.
- [x] Criar `presentation/routes.ts`.
- [x] Registrar rotas no `server.ts`.
- [x] Implementar endpoint `GET /api/campaigns/:campaignId/characters/:characterId/inventory`.
- [x] Implementar endpoint `GET /api/campaigns/:campaignId/characters/:characterId/wallet`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/items`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:characterId/inventory/items`.
- [x] Implementar endpoint `PATCH /api/campaigns/:campaignId/inventory-items/:inventoryItemId`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/equip`.
- [x] Implementar endpoint `DELETE /api/campaigns/:campaignId/equipped-items/:equippedItemId`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/transfer`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:characterId/wallet/adjust`.
- [x] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:fromCharacterId/wallet/transfer`.
- [x] Implementar endpoints paginados de ledger.

Validacoes:

- [x] Todos os endpoints usam `requireAuth`.
- [x] Todos os payloads usam Zod.
- [x] Todos os erros retornam codigos consistentes.

---

## Fase 6 — Realtime

- [x] Criar `SocketInventoryEventBus`.
- [x] Definir rooms/alvos de emissao conforme a presenca existente.
- [x] Emitir `inventory:changed` apos mutacoes de item.
- [x] Emitir `wallet:changed` apos mutacoes de dinheiro.
- [x] Emitir eventos de transferencia para origem/destino.
- [x] Garantir que jogadores nao recebam inventario de NPC ou de outros jogadores sem permissao.
- [x] Avaliar compatibilidade com `trade:received` atual.

Validacoes:

- [x] Evento so e emitido depois do commit.
- [x] Payload nao contem dados proibidos.
- [x] UI aberta atualiza sem reload manual.

---

## Fase 7 — Frontend

- [x] Criar service HTTP `inventoryApi.ts`.
- [x] Criar hooks:
  - [x] `useInventory`.
  - [x] `useWallet`.
  - [x] `useInventoryRealtime`.
- [x] Criar componentes:
  - [x] `InventoryPanel`.
  - [x] `InventoryItemCard`.
  - [x] `EquippedItemsPanel`.
  - [x] `WalletPanel`.
  - [x] `CurrencyBreakdown`.
- [x] Adicionar acao de equipar/desequipar.
- [x] Adicionar acao de transferir item se permitido.
- [x] Adicionar acao de transferir moeda se permitido.
- [x] Adicionar UI Mestre para conceder/remover item e ajustar wallet.
- [x] Adicionar estados de loading, empty e error.

Validacoes:

- [x] Jogador ve apenas proprio inventario/wallet.
- [x] Mestre consegue alternar personagens.
- [x] UI nao guarda regra de dominio pesada dentro dos componentes.

---

## Fase 8 — Pathfinder 2e Inicial

- [x] Implementar formatacao `pp/gp/sp/cp`.
- [x] Implementar slots PF2e iniciais.
- [x] Exibir traits, raridade, nivel, bulk e preco.
- [x] Exibir item equipado separado por slot.
- [x] Preparar `systemData` para receber dados PF2e sem acoplamento prematuro.
- [x] Criar pelo menos alguns itens customizados manuais para validar fluxo.

Nao fazer nesta fase:

- [ ] Nao importar compendio oficial completo de itens.
- [ ] Nao calcular bonus automaticos na ficha.
- [ ] Nao bloquear por bulk/carga.
- [ ] Nao implementar investidura completa.

---

## Fase 9 — Testes

- [x] Testes de moeda.
- [x] Testes de slots exclusivos.
- [x] Testes de permissao Mestre/Jogador.
- [x] Testes de adicionar item.
- [x] Testes de equipar/desequipar.
- [x] Testes de transferencia de item.
- [x] Testes de ajuste de wallet.
- [x] Testes de transferencia de moeda.
- [x] Testes de ledger.
- [x] Testes de bloqueio cross-campaign.
- [x] Testes de saldo negativo.

Executar:

```txt
npm run test:unit
npm run db:generate
```

Quando aplicavel:

```txt
npm run build:web
```

---

## Fase 10 — Migracao do Trade Antigo

- [x] Mapear consumidores de `POST /api/items/trade`.
- [x] Se existir UI usando a rota, criar wrapper temporario que chama o novo use case ou manter evento legado.
- [x] Marcar rota antiga como deprecated.
- [x] Migrar UI para endpoints novos.
- [x] Remover rota antiga somente depois de nao haver consumidores.

Criterio de aceite:

- [x] Nenhuma transferencia real depende apenas de evento efemero.
- [x] Toda transferencia persistida gera ledger.

---

## Fase 11 — Revisao Final

- [x] Conferir se `.ai/inventory/*` reflete o codigo entregue.
- [x] Conferir se `AGENTS.md` foi respeitado.
- [x] Conferir se modulo nao contaminou `Character.sheet`.
- [x] Conferir se dinheiro nao usa `String` ou `Float`.
- [x] Conferir se `EquippedItem` aponta para `InventoryItem`.
- [x] Conferir se endpoints e eventos respeitam permissoes.
- [x] Conferir se migrations sao seguras.
- [x] Conferir se testes principais passam.

Entrega final esperada:

- [x] Schema Prisma atualizado.
- [x] Backend funcional.
- [x] UI basica funcional.
- [x] Eventos realtime basicos.
- [x] Testes principais.
- [x] Rota antiga de trade tratada como legado ou migrada.

---

## Fase 12 — Refatoracao para Core Agnostico de Sistema

- [x] Mapear acoplamentos diretos com Pathfinder/D&D no core.
- [x] Definir contratos genericos de `GameSystemAdapter`, `InventorySystemAdapter` e `CurrencySystemAdapter`.
- [x] Ajustar `GameSystemRegistry` para expor capacidades de inventario, moeda e itens.
- [x] Migrar validacao de slots de equipamento para adapter de sistema.
- [x] Migrar display de wallet para adapter de moeda do sistema da campanha.
- [x] Remover imports diretos de Pathfinder do modulo `inventory`.
- [x] Generalizar `ItemDefinitionSource.PF2E_COMPENDIUM` para `SYSTEM_CATALOG`.
- [x] Validar frontend para nao tipar breakdown de moeda como PF2e.
- [x] Rodar typecheck/testes disponiveis.
- [x] Documentar acoplamentos restantes e proximos passos.
