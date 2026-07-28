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
- O inventário visual possui 10 colunas por 10 linhas, totalizando 100 slots.
- Cada `InventoryEntry` ocupa exatamente um slot; slots vazios continuam visíveis.
- A posição dos itens pertence ao inventário e é compartilhada entre Mestre e controlador do ator.
- O jogador pode reorganizar os itens do inventário de um Token controlado, mas não pode alterar quantidade nem remover entradas.
- A ficha do item respeita a preferência individual entre tradução `pt-BR` e conteúdo original `en-US`.

## Fora do escopo inicial

- Containers internos e capacidade.
- Peso, Bulk, slots ou limites.
- Equipamento e efeitos mecânicos na ficha.
- Moedas e conversão monetária.
- Containers internos e automações mecânicas.

`Character`, `CharacterSheet` e `CampaignCharacter` não existem no modelo. Participação é `CampaignMember`; entidade do mundo é `CampaignActor`.

## Acesso

- O inventário pertence ao ator, nunca diretamente ao usuário ou ao membro.
- O painel lateral de inventários existe somente para o Mestre.
- O jogador abre o inventário pelo menu de contexto de um Token controlado e apenas em modo de visualização.
- O Mestre acessa todos os inventários da campanha e envia itens escolhendo o ator destinatário.
- Não existe inventário de perfil, personagem principal ou ator ativo.

## Experiência visual

- O inventário é uma janela não bloqueante: não escurece nem desfoca a mesa e não impede interação com o fundo.
- Somente a superfície da janela captura eventos de ponteiro.
- A grade se ajusta ao espaço útil da janela e distribui as 10 colunas e 10 linhas sem dimensões fixas por slot.
- O inventário pode ser minimizado sem ser fechado.
- Quando minimizado, torna-se uma mochila flutuante e arrastável sobre a mesa.
- Clicar na mochila restaura a janela do mesmo inventário.
- A posição da mochila é preferência visual local e não altera o domínio.
