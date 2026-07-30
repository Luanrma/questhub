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
- Nunca pertence a `User`, e-mail, `CampaignMember`, Token ou ficha.
- É criado junto do ator quando a extensão que o materializa oferece a
  capacidade de inventário.
- A ausência é válida para atores de NPC materializados pelo bestiário, que não
  expõem inventário.
- Entrar na campanha, atribuir controlador ou vincular Token não cria inventário.
- A API não cria inventários ausentes por `upsert`; em atores com a capacidade,
  ausência indica violação da invariante.

### InventoryEntry

```ts
type InventoryEntry = {
  id: string
  inventoryId: string
  quantity: number
  slotIndex: number
  catalogNamespace: string | null
  catalogContentId: string | null
  data: unknown
  createdAt: Date
  updatedAt: Date
}
```

Regras:

- `quantity` é inteiro e maior que zero.
- `data` contém uma cópia completa do item original.
- `slotIndex` é inteiro não negativo e não pode se repetir no mesmo inventário.
- Não existe capacidade máxima persistida no core.
- Uma inclusão usa o primeiro índice livre.
- A interface organiza os índices em páginas visuais de 10 × 10 e adiciona novas páginas conforme necessário.
- Soltar sobre um slot vazio move a entrada; soltar sobre outra entrada troca as posições atomicamente.
- `catalogNamespace` identifica de forma estável o provedor, sistema e domínio do catálogo.
- `catalogContentId` identifica o conteúdo dentro desse namespace.
- Namespace e identificador são ambos nulos ou ambos preenchidos.
- O core armazena e transporta `data`, mas não interpreta sua estrutura.

## Namespace do catálogo

O padrão inicial é:

```text
questhub:{game-system}:items:v1
```

Exemplo:

```text
questhub:pathfinder_2e:items:v1
```

O provider pode declarar um namespace próprio quando precisar diferenciar versões ou sourcepacks.

## Contrato de agrupamento

```ts
interface GameSystemInventoryPolicy {
  canStack(existingData: unknown, incomingData: unknown): boolean
}
```

- O game system decide se duas entradas podem ser agrupadas.
- A primeira política do Pathfinder 2e utiliza igualdade profunda entre os JSONs.
- Quando `canStack` retornar `true`, a inclusão pode aumentar `quantity` em vez de criar outra entrada.
- A política pode evoluir sem mudança no schema de `InventoryEntry`.

## Contratos HTTP

- `GET /api/campaigns/:campaignId/inventory/actors`: alimenta o painel administrativo do Mestre e a resolução segura do Token controlado.
- `GET /api/campaigns/:campaignId/inventory/recipients`: lista atores controlados por jogadores ativos.
- `POST /api/campaigns/:campaignId/catalog/items/:contentId/send`: recebe `recipientActorId` e `quantity`.
- `PATCH /api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/slot`: recebe qualquer `slotIndex` inteiro não negativo.
- `GET /api/campaigns/:campaignId/catalog/items/:contentId?locale=pt-BR|en-US`: retorna a ficha localizada do item referenciado.
- Rotas de inventário por ator validam Mestre ou `CampaignActor.controllerMemberId`.
- Somente o Mestre altera quantidades ou remove entradas.
- Mestre e controlador do ator podem reorganizar slots; para o jogador, o ator deve possuir Token vinculado sob seu controle.

## Critérios de aceitação

- Existem tabelas para `CampaignActor`, `Inventory` e `InventoryEntry`.
- Um inventário pertence exclusivamente a um ator.
- Todo ator com capacidade de inventário nasce com exatamente um inventário.
- NPC materializado pelo bestiário nasce sem inventário.
- Criar ou entrar em campanha não cria inventário.
- Excluir definitivamente o ator exclui seu inventário e entradas; arquivar preserva tudo.
- O banco rejeita `quantity <= 0` e `slotIndex < 0`.
- O banco não impõe quantidade máxima de slots.
- Existe um registry agnóstico para políticas de inventário.
- Pathfinder 2e registra uma política baseada em igualdade profunda.
- Containers, moedas, peso e capacidade permanecem fora desta entrega.
- Um jogador com vários atores visualiza um inventário por ator e nenhum inventário de perfil.
- A grade apresenta páginas visuais de 100 slots e cresce conforme o maior índice utilizado.
- A preferência padrão de ficha fica em `CampaignUserSettings.inventory.itemSheetLocale`.
