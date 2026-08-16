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
- É criado junto do ator quando a extensão que o materializa oferece a capacidade de inventário.
- A ausência é válida para atores de NPC materializados pelo bestiário que não exponham inventário.
- Entrar na campanha, atribuir controlador ou vincular Token não cria inventário.
- A API não cria inventários ausentes por `upsert`; em atores com a capacidade, ausência indica violação da invariante.

### InventoryEntry

```ts
type InventoryEntry = {
  id: string
  inventoryId: string
  quantity: number
  slotIndex: number | null
  catalogNamespace: string | null
  catalogContentId: string | null
  data: unknown
  state: unknown | null
  createdAt: Date
  updatedAt: Date
}
```

Regras:

- `quantity` é inteiro e maior que zero.
- `data` contém uma cópia completa do item original.
- `state` guarda estado operacional opaco para o Core.
- `slotIndex` numérico é inteiro não negativo e não pode se repetir no mesmo inventário.
- `slotIndex = null` significa apenas que a entrada pertence ao ator, mas não ocupa uma posição na grade visual.
- O Core não interpreta por que uma entrada está fora da grade; essa decisão pertence ao Game System ou à capacidade que alterou o item.
- Índices negativos são inválidos e não possuem significado reservado.
- Não existe capacidade máxima persistida no Core.
- Uma inclusão usa o primeiro índice livre.
- A interface organiza os índices em páginas visuais de 20 × 5 com slots quadrados e adiciona páginas somente quando um índice ocupado exigir a página seguinte.
- Soltar sobre um slot vazio move a entrada; soltar sobre outra entrada troca as posições atomicamente.
- Uma entrada com `slotIndex = null` precisa retornar à grade por meio da capacidade que a removeu antes de ser reorganizada pela rota genérica de slots.
- `catalogNamespace` identifica de forma estável o provedor, sistema e domínio do catálogo.
- `catalogContentId` identifica o conteúdo dentro desse namespace.
- Namespace e identificador são ambos nulos ou ambos preenchidos.
- O Core armazena e transporta `data` e `state`, mas não interpreta suas estruturas.

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

- O Game System decide se duas entradas podem ser agrupadas.
- A primeira política do Pathfinder 2e utiliza igualdade profunda entre os JSONs.
- Quando `canStack` retornar `true`, a inclusão pode aumentar `quantity` em vez de criar outra entrada.
- Entradas com estado operacional não são agrupadas.
- A política não decide posição de grade nem interpreta `slotIndex`.

## Contratos HTTP

- `GET /api/campaigns/:campaignId/inventory/actors`: alimenta o painel administrativo do Mestre e a resolução segura do Token controlado.
- `GET /api/campaigns/:campaignId/inventory/actor-recipients`: lista atores da campanha que possuem inventário, independentemente de o controlador ser Mestre, Jogador ou inexistente.
- `POST /api/campaigns/:campaignId/catalog/items/:contentId/send-to-actor`: recebe `recipientActorId` e `quantity`.
- `GET /api/campaigns/:campaignId/inventory/system`: informa ao composition shell qual renderer de Game System pode ser montado.
- `PATCH /api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/slot`: recebe qualquer `slotIndex` inteiro não negativo para uma entrada que já ocupa a grade.
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
- O banco rejeita `quantity <= 0` e qualquer `slotIndex < 0`.
- O banco aceita `slotIndex = null` para entradas fora da grade.
- O banco não impõe quantidade máxima de slots.
- Existe um registry agnóstico para políticas de inventário.
- Pathfinder 2e registra uma política baseada em igualdade profunda.
- Containers, peso e capacidade permanecem fora desta entrega. Moedas PF2e são
  uma extensão de ficha documentada em `.ai/game_systems/pathfinder_2e/currency/`
  e não alteram este contrato.
- Um jogador com vários atores visualiza um inventário por ator e nenhum inventário de perfil.
- A grade apresenta páginas visuais de 100 slots quadrados em 20 colunas por 5 linhas; ocupa toda a largura útil sem gerar rolagem própria quando couber no painel, e a quantidade de páginas cresce conforme o maior índice utilizado.
- Com itens apenas nos índices `0..99`, a grade exibe uma única página e oculta a navegação.
- Imagens de itens ocupam a área útil do slot com `object-fit: contain`, sem distorção ou recorte.
- O resumo mecânico do Game System fica no rodapé, fora da área rolável da grade.
- A preferência padrão de ficha fica em `CampaignUserSettings.inventory.itemSheetLocale`.
