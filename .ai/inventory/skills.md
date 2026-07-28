# Inventory — Diretrizes técnicas

## Stack

- PostgreSQL.
- Prisma ORM.
- TypeScript.
- Testes com `node:test` e `node:assert/strict`.

## Restrições

- O core não pode interpretar o conteúdo de `InventoryEntry.data`.
- O core não pode conhecer tipos concretos como arma, flecha, poção ou Bulk.
- A política de agrupamento deve ser registrada pelo game system.
- O inventário deve continuar funcional para sistemas sem política de agrupamento elaborada.
- Não comparar itens por nome isoladamente.
- Não criar `stackKey` ou metadados de sourcepack no schema genérico.

## Persistência

- `Inventory` referencia `CampaignActor` com relação única.
- A exclusão do ator remove inventário e entradas em cascata.
- `InventoryEntry.quantity` fica fora do JSON.
- `InventoryEntry.slotIndex` persiste uma posição entre `0` e `99` e é único dentro do inventário.
- `InventoryEntry.catalogContentId` é opcional e permite reabrir a ficha localizada do item enviado pelo catálogo.
- O banco deve rejeitar quantidades menores ou iguais a zero.

## Frontend

- A grade é renderizada por slots explícitos e não por cards de conteúdo.
- A grade usa trilhas CSS responsivas de `10 x 10`; o slot não possui largura ou altura fixa.
- A janela é renderizada em portal no `document.body` para não herdar bloqueios de ponteiro da camada de HUD da mesa.
- O contêiner de posicionamento não captura eventos; somente o painel e a mochila minimizada usam `pointer-events: auto`.
- Drag-and-drop usa `DataTransfer` tipado pelo ID da entrada e confirma a troca no backend.
- A UI aplica atualização otimista e restaura o estado anterior se a persistência falhar.
- A janela e a mochila flutuante são componentes visuais; regras de posição e troca ficam em funções puras.
- A ficha detalhada reutiliza o contrato neutro do catálogo do game system.

## Evolução

Containers, capacidade, moedas e regras de equipamento devem ser adicionados por contratos próprios, sem alterar o significado básico de `InventoryEntry.data`.
