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
- O banco deve rejeitar quantidades menores ou iguais a zero.

## Evolução

Containers, capacidade, moedas e regras de equipamento devem ser adicionados por contratos próprios, sem alterar o significado básico de `InventoryEntry.data`.
