# Inventory

## Visão geral

O módulo `inventory` persiste os itens pertencentes a um `CampaignActor` sem conhecer regras específicas de Pathfinder 2e ou de qualquer outro game system.

## Responsabilidades

- Manter um único agregado `Inventory` para cada `CampaignActor`.
- Persistir várias `InventoryEntry` dentro do inventário.
- Manter `quantity` como dado genérico do inventário.
- Armazenar em `InventoryEntry.data` uma cópia JSON completa do item fornecido pelo game system.
- Permitir que o game system decida se duas entradas podem ser agrupadas.

## Regras de negócio

- Um `CampaignActor` deve possuir exatamente um `Inventory` no domínio.
- O inventário representa todo o armazenamento do ator, não uma mochila física específica.
- Mochilas, pochetes e outros containers serão espaços internos do inventário em uma evolução posterior.
- `InventoryEntry.data` não possui schema imposto pelo core.
- Não existem campos obrigatórios de origem, sourcepack, versão ou identificador externo.
- `quantity` deve ser um inteiro maior que zero.
- Na primeira versão do Pathfinder 2e, itens com JSON equivalente podem ser agrupados.

## Fora do escopo inicial

- Containers internos e capacidade.
- Peso, Bulk, slots ou limites.
- Equipamento e efeitos mecânicos na ficha.
- Moedas e conversão monetária.
- Rotas HTTP e interface visual.
- Migração automática de fichas ou tokens existentes para `CampaignActor`.
