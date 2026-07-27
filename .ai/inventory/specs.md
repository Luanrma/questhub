# Inventory — Especificação inicial

## Modelo de domínio

```text
Campaign
└── CampaignActor
    └── Inventory
        └── InventoryEntry[]
```

### CampaignActor

Entidade agnóstica pertencente exclusivamente a uma campanha. Nesta etapa ela é criada como base independente; fichas e tokens existentes ainda não serão migrados.

### Inventory

- Relação 1:1 com `CampaignActor`.
- Funciona como agregado de armazenamento do ator.
- Deve ser criado junto do ator pela camada de aplicação em uma transação futura.

### InventoryEntry

```ts
type InventoryEntry = {
  id: string
  inventoryId: string
  quantity: number
  data: unknown
  createdAt: Date
  updatedAt: Date
}
```

Regras:

- `quantity` é inteiro e maior que zero.
- `data` contém uma cópia completa do item original.
- O core armazena e transporta `data`, mas não interpreta sua estrutura.

## Contrato de agrupamento

```ts
interface GameSystemInventoryPolicy {
  canStack(existingData: unknown, incomingData: unknown): boolean
}
```

- O game system decide se duas entradas podem ser agrupadas.
- A primeira política do Pathfinder 2e utiliza igualdade profunda entre os JSONs.
- Quando `canStack` retornar `true`, uma futura operação de inclusão poderá aumentar `quantity` em vez de criar outra entrada.
- A política poderá evoluir sem mudança no schema de `InventoryEntry`.

## Critérios de aceitação desta etapa

- Existem tabelas para `CampaignActor`, `Inventory` e `InventoryEntry`.
- Um inventário não pode pertencer a mais de um ator.
- Excluir o ator exclui seu inventário e suas entradas.
- O banco rejeita `quantity <= 0`.
- Existe um registry agnóstico para políticas de inventário.
- Pathfinder 2e registra uma política baseada em igualdade profunda.
- Containers, moedas, API e UI permanecem fora desta entrega.
