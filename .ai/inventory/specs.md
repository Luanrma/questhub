# Inventory — Especificação inicial

## Modelo de domínio

```text
Campaign
└── CampaignActor
    └── Inventory
        └── InventoryEntry[]
```

### CampaignActor

Entidade agnóstica pertencente exclusivamente a uma campanha.

### Inventory

- Relação 1:1 com `CampaignActor`.
- Funciona como agregado de armazenamento do ator.
- Deve ser criado junto do ator pela camada de aplicação em uma transação.

### InventoryEntry

```ts
type InventoryEntry = {
  id: string
  inventoryId: string
  quantity: number
  slotIndex: number
  catalogContentId: string | null
  data: unknown
  createdAt: Date
  updatedAt: Date
}
```

Regras:

- `quantity` é inteiro e maior que zero.
- `data` contém uma cópia completa do item original.
- `slotIndex` varia de `0` a `99` e não pode se repetir dentro do mesmo inventário.
- Uma inclusão usa o primeiro slot livre; inventário cheio rejeita nova entrada.
- Soltar sobre um slot vazio move a entrada; soltar sobre outra entrada troca as duas posições atomicamente.
- `catalogContentId` referencia de forma opcional o conteúdo neutro do catálogo e permite obter a ficha em `pt-BR` ou `en-US`.
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

## Contratos HTTP

- `GET /api/campaigns/:campaignId/inventory/actors`: alimenta o painel administrativo do Mestre e a resolução segura do Token controlado.
- `GET /api/campaigns/:campaignId/inventory/recipients`: lista atores controlados por jogadores ativos.
- `POST /api/campaigns/:campaignId/catalog/items/:contentId/send`: recebe `recipientActorId` e `quantity`.
- `PATCH /api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/slot`: recebe `slotIndex` entre `0` e `99`.
- `GET /api/campaigns/:campaignId/catalog/items/:contentId?locale=pt-BR|en-US`: reutiliza o contrato do catálogo para retornar a ficha localizada do item referenciado por `catalogContentId`.
- Rotas de inventário por ator sempre validam Mestre ou `CampaignActor.controllerMemberId`.
- Somente o Mestre altera quantidades ou remove entradas.
- Mestre e controlador do ator podem reorganizar slots; para o jogador, o ator deve possuir Token vinculado sob seu controle.
- O jogador visualiza o inventário pelo menu contextual de um Token cujo controle efetivo pertence ao seu membro.

## Critérios de aceitação

- Existem tabelas para `CampaignActor`, `Inventory` e `InventoryEntry`.
- Um inventário não pode pertencer a mais de um ator.
- Excluir o ator exclui seu inventário e suas entradas.
- O banco rejeita `quantity <= 0`.
- Existe um registry agnóstico para políticas de inventário.
- Pathfinder 2e registra uma política baseada em igualdade profunda.
- Containers e moedas permanecem fora desta entrega.
- Um jogador com vários atores visualiza um inventário por ator e nenhum inventário artificial de perfil.
- A grade sempre apresenta 100 slots em 10 colunas por 10 linhas, inclusive os vazios.
- A grade ocupa responsivamente o espaço útil da janela sem exigir rolagem para exibir slots com dimensões fixas.
- A janela do inventário não aplica backdrop visual nem bloqueia eventos destinados à mesa fora de seus limites.
- Fechar, minimizar, rolar, abrir ficha e reorganizar itens permanecem interativos mesmo quando o inventário é aberto a partir do HUD da mesa.
- Clicar em entrada com referência de catálogo abre sua ficha detalhada no idioma preferido do usuário.
- A preferência padrão de ficha fica em `CampaignUserSettings.inventory.itemSheetLocale`.
