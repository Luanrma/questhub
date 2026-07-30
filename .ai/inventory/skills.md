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
- O namespace do catálogo deve ser estável e não pode depender do nome localizado do item.

## Persistência

- `Inventory` referencia `CampaignActor` com relação única.
- `CampaignActor` com capacidade de inventário nasce com seu inventário na mesma
  operação; uma extensão que não oferece essa capacidade não cria o agregado.
- Entrar na campanha ou atribuir controle nunca cria inventário.
- A exclusão definitiva do ator remove inventário e entradas em cascata; arquivamento preserva tudo.
- `InventoryEntry.quantity` fica fora do JSON.
- `InventoryEntry.slotIndex` aceita qualquer inteiro não negativo e é único dentro do inventário.
- `catalogNamespace` e `catalogContentId` são ambos nulos ou ambos preenchidos.
- O banco deve rejeitar quantidades menores ou iguais a zero.

## Frontend

- A grade é renderizada por slots explícitos e não por cards de conteúdo.
- Cada página visual usa trilhas CSS responsivas de `10 x 10`; novas páginas surgem conforme necessário.
- A janela é renderizada em portal no `document.body` para não herdar bloqueios de ponteiro da camada de HUD da mesa.
- O contêiner de posicionamento não captura eventos; somente o painel e a mochila minimizada usam `pointer-events: auto`.
- Drag-and-drop usa `DataTransfer` tipado pelo ID da entrada e confirma a troca no backend.
- A UI aplica atualização otimista e restaura o estado anterior se a persistência falhar.
- A janela e a mochila flutuante são componentes visuais; regras de posição e troca ficam em funções puras.
- A ficha detalhada reutiliza o contrato neutro do catálogo do game system.

## Evolução

Containers, capacidade, moedas e regras de equipamento devem ser adicionados por contratos próprios, sem alterar o significado básico de `InventoryEntry.data`.
