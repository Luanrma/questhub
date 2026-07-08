# Modulo: Inventory & Economy (TODO)

## Objetivo

Implementar inventario, itens equipados e wallet/economia no QuestHub, inspirado no `rpkage`, mas adaptado ao modelo atual com `CampaignCharacter`.

---

## Fase 0 — Auditoria Inicial

- [ ] Ler `.ai/inventory/readme.md`.
- [ ] Ler `.ai/inventory/skills.md`.
- [ ] Ler `.ai/inventory/specs.md`.
- [ ] Ler `AGENTS.md`.
- [ ] Revisar `apps/api/prisma/schema.prisma` atual.
- [ ] Revisar `apps/api/src/modules/trade/routes.ts` e mapear dependencias da UI.
- [ ] Verificar se existe alguma UI consumindo `POST /api/items/trade`.
- [ ] Identificar onde a ficha/personagem abre paineis laterais ou modais para encaixar inventario.

Entrega da fase:

- [ ] Resumo tecnico dos arquivos impactados.
- [ ] Confirmacao se a rota antiga de trade sera mantida como compatibilidade temporaria.

---

## Fase 1 — Schema Prisma

- [ ] Criar enums:
  - [ ] `ItemDefinitionSource`.
  - [ ] `InventoryItemState`.
  - [ ] `InventoryLedgerType`.
  - [ ] `WalletLedgerType`.
- [ ] Criar model `CampaignItemDefinition`.
- [ ] Criar model `Inventory`.
- [ ] Criar model `InventoryItem`.
- [ ] Criar model `EquippedItem`.
- [ ] Criar model `Wallet`.
- [ ] Criar model `InventoryLedger`.
- [ ] Criar model `WalletLedger`.
- [ ] Adicionar relacoes em `Campaign`.
- [ ] Adicionar relacoes em `CampaignCharacter`.
- [ ] Criar indices definidos em `specs.md`.
- [ ] Rodar formatacao do Prisma.
- [ ] Gerar migration.
- [ ] Rodar `npm run db:generate`.

Validacoes:

- [ ] Schema compila.
- [ ] Migration nao remove dados existentes.
- [ ] Relacoes usam `onDelete` coerente com campanha/personagem.

---

## Fase 2 — Dominio Backend

- [ ] Criar pasta `apps/api/src/modules/inventory`.
- [ ] Criar tipos de dominio.
- [ ] Criar erros de dominio com codigos estaveis.
- [ ] Criar funcoes puras de dinheiro PF2e:
  - [ ] `toCopper`.
  - [ ] `fromCopper`.
  - [ ] `formatPathfinder2eCurrency`.
- [ ] Criar regras puras de slot:
  - [ ] detectar slot exclusivo;
  - [ ] mapear `exclusiveSlotKey`;
  - [ ] validar conflito.
- [ ] Criar presenter de inventario.
- [ ] Criar presenter de wallet.

Validacoes:

- [ ] Funcoes puras nao dependem de Prisma, Fastify, Socket.IO ou React.
- [ ] Testes unitarios cobrem conversao de moeda e slots.

---

## Fase 3 — Repositorios e Transacoes

- [ ] Criar ports:
  - [ ] `InventoryRepository`.
  - [ ] `WalletRepository`.
  - [ ] `InventoryEventBus`.
- [ ] Criar implementacoes Prisma.
- [ ] Criar helpers para carregar acesso de campanha:
  - [ ] Mestre ativo;
  - [ ] dono jogador ativo;
  - [ ] personagem alvo na campanha.
- [ ] Garantir criacao lazy ou automatica de `Inventory` e `Wallet`.
- [ ] Implementar operacoes atomicas com `prisma.$transaction`.

Validacoes:

- [ ] Transferencia de item nao deixa origem/destino inconsistentes.
- [ ] Transferencia de moeda nao deixa saldo parcial.
- [ ] Ledger e snapshot sao salvos na mesma transacao.

---

## Fase 4 — Use Cases

- [ ] `GetInventoryUseCase`.
- [ ] `GetWalletUseCase`.
- [ ] `CreateCampaignItemDefinitionUseCase`.
- [ ] `AddItemToInventoryUseCase`.
- [ ] `UpdateInventoryItemUseCase`.
- [ ] `EquipItemUseCase`.
- [ ] `UnequipItemUseCase`.
- [ ] `TransferItemUseCase`.
- [ ] `AdjustWalletUseCase`.
- [ ] `TransferCurrencyUseCase`.
- [ ] `GetInventoryLedgerUseCase`.
- [ ] `GetWalletLedgerUseCase`.

Validacoes obrigatorias:

- [ ] Jogador nao ajusta dinheiro livremente.
- [ ] Jogador nao edita inventario de outro personagem.
- [ ] Mestre edita qualquer personagem ativo da campanha.
- [ ] Item equipado nao transfere sem desequipar.
- [ ] Stack com quantidade maior que 1 nao equipa sem split.
- [ ] Saldo nao fica negativo.

---

## Fase 5 — Rotas HTTP

- [ ] Criar `presentation/validation.ts` com Zod.
- [ ] Criar `presentation/routes.ts`.
- [ ] Registrar rotas no `server.ts`.
- [ ] Implementar endpoint `GET /api/campaigns/:campaignId/characters/:characterId/inventory`.
- [ ] Implementar endpoint `GET /api/campaigns/:campaignId/characters/:characterId/wallet`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/items`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:characterId/inventory/items`.
- [ ] Implementar endpoint `PATCH /api/campaigns/:campaignId/inventory-items/:inventoryItemId`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/equip`.
- [ ] Implementar endpoint `DELETE /api/campaigns/:campaignId/equipped-items/:equippedItemId`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/inventory-items/:inventoryItemId/transfer`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:characterId/wallet/adjust`.
- [ ] Implementar endpoint `POST /api/campaigns/:campaignId/characters/:fromCharacterId/wallet/transfer`.
- [ ] Implementar endpoints paginados de ledger.

Validacoes:

- [ ] Todos os endpoints usam `requireAuth`.
- [ ] Todos os payloads usam Zod.
- [ ] Todos os erros retornam codigos consistentes.

---

## Fase 6 — Realtime

- [ ] Criar `SocketInventoryEventBus`.
- [ ] Definir rooms/alvos de emissao conforme a presenca existente.
- [ ] Emitir `inventory:changed` apos mutacoes de item.
- [ ] Emitir `wallet:changed` apos mutacoes de dinheiro.
- [ ] Emitir eventos de transferencia para origem/destino.
- [ ] Garantir que jogadores nao recebam inventario de NPC ou de outros jogadores sem permissao.
- [ ] Avaliar compatibilidade com `trade:received` atual.

Validacoes:

- [ ] Evento so e emitido depois do commit.
- [ ] Payload nao contem dados proibidos.
- [ ] UI aberta atualiza sem reload manual.

---

## Fase 7 — Frontend

- [ ] Criar service HTTP `inventoryApi.ts`.
- [ ] Criar hooks:
  - [ ] `useInventory`.
  - [ ] `useWallet`.
  - [ ] `useInventoryRealtime`.
- [ ] Criar componentes:
  - [ ] `InventoryPanel`.
  - [ ] `InventoryItemCard`.
  - [ ] `EquippedItemsPanel`.
  - [ ] `WalletPanel`.
  - [ ] `CurrencyBreakdown`.
- [ ] Adicionar acao de equipar/desequipar.
- [ ] Adicionar acao de transferir item se permitido.
- [ ] Adicionar acao de transferir moeda se permitido.
- [ ] Adicionar UI Mestre para conceder/remover item e ajustar wallet.
- [ ] Adicionar estados de loading, empty e error.

Validacoes:

- [ ] Jogador ve apenas proprio inventario/wallet.
- [ ] Mestre consegue alternar personagens.
- [ ] UI nao guarda regra de dominio pesada dentro dos componentes.

---

## Fase 8 — Pathfinder 2e Inicial

- [ ] Implementar formatacao `pp/gp/sp/cp`.
- [ ] Implementar slots PF2e iniciais.
- [ ] Exibir traits, raridade, nivel, bulk e preco.
- [ ] Exibir item equipado separado por slot.
- [ ] Preparar `systemData` para receber dados PF2e sem acoplamento prematuro.
- [ ] Criar pelo menos alguns itens customizados manuais para validar fluxo.

Nao fazer nesta fase:

- [ ] Nao importar compendio oficial completo de itens.
- [ ] Nao calcular bonus automaticos na ficha.
- [ ] Nao bloquear por bulk/carga.
- [ ] Nao implementar investidura completa.

---

## Fase 9 — Testes

- [ ] Testes de moeda.
- [ ] Testes de slots exclusivos.
- [ ] Testes de permissao Mestre/Jogador.
- [ ] Testes de adicionar item.
- [ ] Testes de equipar/desequipar.
- [ ] Testes de transferencia de item.
- [ ] Testes de ajuste de wallet.
- [ ] Testes de transferencia de moeda.
- [ ] Testes de ledger.
- [ ] Testes de bloqueio cross-campaign.
- [ ] Testes de saldo negativo.

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

- [ ] Mapear consumidores de `POST /api/items/trade`.
- [ ] Se existir UI usando a rota, criar wrapper temporario que chama o novo use case ou manter evento legado.
- [ ] Marcar rota antiga como deprecated.
- [ ] Migrar UI para endpoints novos.
- [ ] Remover rota antiga somente depois de nao haver consumidores.

Criterio de aceite:

- [ ] Nenhuma transferencia real depende apenas de evento efemero.
- [ ] Toda transferencia persistida gera ledger.

---

## Fase 11 — Revisao Final

- [ ] Conferir se `.ai/inventory/*` reflete o codigo entregue.
- [ ] Conferir se `AGENTS.md` foi respeitado.
- [ ] Conferir se modulo nao contaminou `Character.sheet`.
- [ ] Conferir se dinheiro nao usa `String` ou `Float`.
- [ ] Conferir se `EquippedItem` aponta para `InventoryItem`.
- [ ] Conferir se endpoints e eventos respeitam permissoes.
- [ ] Conferir se migrations sao seguras.
- [ ] Conferir se testes principais passam.

Entrega final esperada:

- [ ] Schema Prisma atualizado.
- [ ] Backend funcional.
- [ ] UI basica funcional.
- [ ] Eventos realtime basicos.
- [ ] Testes principais.
- [ ] Rota antiga de trade tratada como legado ou migrada.
