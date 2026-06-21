# Modulo: Criacao de Campanha (Product)

## 1. Proposito
Fornecer o fluxo para um usuario criar uma campanha jogavel, definindo identidade basica, sistema de RPG, politica de entrada e o personagem que atuara como mestre.

No QuestHub, a campanha nao possui um "membro usuario" como vinculo operacional principal. O acesso de jogo acontece por `CampaignCharacter`: um personagem vinculado a campanha com role e status.

## 2. Personas
* **Mestre/GM:** Cria campanha, escolhe o sistema, define se a entrada e publica ou privada e seleciona/cria o personagem `MASTER`.
* **Jogador:** Visualiza campanhas onde possui um personagem ativo e entra quando o mestre estiver online.

## 3. Escopo do Modulo
Incluido:
* Criar campanha com titulo obrigatorio.
* Definir descricao opcional.
* Definir sistema obrigatorio: `DND_5E` ou `PATHFINDER_2E`.
* Definir politica de entrada: `PUBLIC` ou `PRIVATE`.
* Selecionar um personagem livre existente para ser `MASTER`.
* Criar um novo personagem mestre durante o fluxo de criacao.
* Criar automaticamente o vinculo `CampaignCharacter` do mestre com role `MASTER`, status `ACTIVE` e `joinedAt`.
* Listar campanhas acessiveis ao usuario por meio dos personagens ativos dele.

Fora de escopo:
* Criar ou editar ficha mecanica completa.
* Aprovar/rejeitar solicitacoes de entrada privadas.
* Criar NPCs.
* Gerenciar sessoes, diario, canvas ou tabuleiro.

## 4. Regras de Produto
* Toda campanha deve ter um sistema definido na criacao.
* Toda campanha deve nascer com exatamente um personagem `MASTER` ativo.
* O personagem `MASTER` deve pertencer ao usuario autenticado.
* O personagem `MASTER` deve estar livre, ou seja, sem `CampaignCharacter` existente e sem `deletedAt`.
* Um personagem sem sistema pode herdar o sistema da campanha ao ser vinculado como `MASTER`.
* Um personagem com sistema diferente da campanha nao pode ser usado como `MASTER`.
* O campo historico `createdByUserId` registra quem criou a campanha, mas permissoes operacionais devem vir do `CampaignCharacter` com role `MASTER`.
* `Campaign.gmName` nao existe no modelo novo; o nome publico do mestre vem do `Character.name`.

## 5. Relacao com Outros Modulos
* `character_creation`: fornece personagens livres e cria/vincula o personagem `MASTER`.
* `character_sheet`: define compatibilidade de sistema quando houver ficha mecanica.
* `login`: identifica o usuario autenticado que cria a campanha.
* `campaign_presence`: deve considerar a campanha online quando o personagem `MASTER` entra na presenca.
