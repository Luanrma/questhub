# Inventory

## Visão geral

O módulo `inventory` persiste os itens pertencentes a um `CampaignActor` sem conhecer regras específicas de Pathfinder 2e ou de qualquer outro game system.

## Responsabilidades

- Manter um único agregado `Inventory` para cada `CampaignActor` que ofereça a
  capacidade de inventário.
- Persistir várias `InventoryEntry` dentro do inventário.
- Manter `quantity` como dado genérico do inventário.
- Armazenar em `InventoryEntry.data` uma cópia JSON completa do item fornecido pelo game system.
- Permitir que o game system decida se duas entradas podem ser agrupadas.

## Regras de negócio

- Um `CampaignActor` com capacidade de inventário deve possuir exatamente um
  `Inventory` no domínio.
- Atores de NPC materializados pelo bestiário podem não oferecer inventário e,
  nesse caso, não possuem registro `Inventory`.
- O inventário pertence ao ator, nunca ao usuário, e-mail, membro, ficha ou Token.
- Entrar na campanha, atribuir um controlador ou vincular um Token não cria inventário.
- O inventário representa todo o armazenamento do ator, não uma mochila física específica.
- Mochilas, pochetes e outros containers serão espaços internos do inventário em uma evolução posterior.
- `InventoryEntry.data` não possui schema imposto pelo core.
- `quantity` deve ser um inteiro maior que zero.
- Na primeira versão do Pathfinder 2e, itens com JSON equivalente podem ser agrupados.
- Cada `InventoryEntry` ocupa um índice não negativo exclusivo dentro do inventário.
- Não existe quantidade máxima de índices ou entradas no core.
- A interface organiza os índices em páginas visuais de 20 colunas por 5 linhas.
- A posição dos itens pertence ao inventário e é compartilhada entre Mestre e controlador do ator.
- O jogador pode reorganizar os itens do inventário de um Token controlado, mas não pode alterar quantidade nem remover entradas.
- A ficha do item respeita a preferência individual entre tradução `pt-BR` e conteúdo original `en-US`.
- Referências ao catálogo usam `catalogNamespace` e `catalogContentId`; o snapshot JSON mantém o item utilizável sem o catálogo.

## Fora do escopo inicial

- Containers internos e capacidade.
- Peso, Bulk e limites.
- Equipamento e efeitos mecânicos na ficha.
- Moedas e conversão monetária no Core. A carteira PF2e é uma extensão da
  ficha do ator e apenas usa a janela do inventário como ponto de visualização.
- Containers internos e automações mecânicas.

`Character`, `CharacterSheet` e `CampaignCharacter` não existem no modelo. Participação é `CampaignMember`; entidade do mundo é `CampaignActor`.

## Acesso

- O painel lateral de inventários existe somente para o Mestre.
- O jogador abre o inventário pelo menu de contexto de um Token controlado e apenas em modo de visualização.
- O Mestre acessa todos os inventários da campanha e envia itens escolhendo o ator destinatário.
- Não existe inventário de perfil, personagem principal ou ator ativo.

## Experiência visual

- O inventário é uma janela não bloqueante: não escurece nem desfoca a mesa e não impede interação com o fundo.
- Somente a superfície da janela captura eventos de ponteiro.
- Cada página visual possui 20 colunas por 5 linhas de slots quadrados compactos. O conjunto ocupa toda a largura útil, evitando vazio lateral e rolagem vertical quando o conteúdo cabe na janela. Novas páginas aparecem somente quando um item ocupa um índice fora da página atual.
- A navegação de páginas fica oculta enquanto todos os itens couberem na primeira página.
- A imagem do item usa toda a área útil do slot, preservando sua proporção e sem recorte.
- O inventário pode ser minimizado sem ser fechado.
- Quando minimizado, torna-se uma mochila flutuante e arrastável sobre a mesa.
- Clicar na mochila restaura a janela do mesmo inventário.
- A posição da mochila é preferência visual local e não altera o domínio.
- Um renderer de Game System pode posicionar um resumo mecânico no canto
  inferior direito do rodapé da janela, sem sobrepor a grade nem transformar
  `InventoryEntry` em dado de sistema.
