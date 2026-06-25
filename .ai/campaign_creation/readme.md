# Modulo: Criacao de Campanha (Product)

## 1. Proposito
Fornecer o fluxo para um usuario criar uma campanha jogavel, definindo identidade basica, sistema de RPG, politica de entrada e o personagem que atuara como mestre.

No QuestHub, a campanha nao possui um "membro usuario" como vinculo operacional principal. O acesso de jogo acontece por `CampaignCharacter`: um personagem vinculado a campanha com role e status.

## 2. Personas
* **Mestre/GM:** Cria campanha, escolhe o sistema, define se a entrada e publica ou privada e seleciona/cria o personagem `MASTER`.
* **Jogador:** Visualiza campanhas onde possui personagem ativo ou solicitacao pendente. Pode entrar/solicitar vinculo por invite code mesmo que a mesa esteja offline; para abrir a mesa de jogo como jogador, o mestre precisa estar online.

## 3. Escopo do Modulo
Incluido:
* Criar campanha com titulo obrigatorio.
* Definir descricao opcional.
* Definir sistema obrigatorio. No codigo atual, o fluxo funcional aceita apenas `PATHFINDER_2E`; `DND_5E` esta reservado no dominio para implementacao futura.
* Definir politica de entrada: `PUBLIC` ou `PRIVATE`.
* Selecionar um personagem livre existente para ser `MASTER`.
* Criar um novo personagem mestre durante o fluxo de criacao.
* Criar automaticamente o vinculo `CampaignCharacter` do mestre com role `MASTER`, status `ACTIVE` e `joinedAt`.
* Listar campanhas acessiveis ao usuario por meio dos personagens ativos ou solicitacoes pendentes dele.
* Buscar campanha por invite code antes de confirmar entrada.
* Notificar o mestre em tempo real quando um jogador solicitar entrada em campanha privada.
* Notificar o mestre em tempo real quando um novo jogador entrar em campanha publica.

Fora de escopo:
* Criar ou editar ficha mecanica completa.
* Aprovar/rejeitar solicitacoes de entrada privadas.
* Criar NPCs.
* Gerenciar sessoes, diario, canvas ou tabuleiro.

## 4. Regras de Produto
* Toda campanha deve ter um sistema definido na criacao.
* No MVP funcional atual, apenas `PATHFINDER_2E` pode ser criado pela API.
* Toda campanha deve nascer com exatamente um personagem `MASTER` ativo.
* O personagem `MASTER` deve pertencer ao usuario autenticado.
* O personagem `MASTER` deve estar livre, ou seja, sem `CampaignCharacter` existente e sem `deletedAt`.
* Um personagem sem sistema pode herdar o sistema da campanha ao ser vinculado como `MASTER`.
* Um personagem com sistema diferente da campanha nao pode ser usado como `MASTER`.
* O campo historico `createdByUserId` registra quem criou a campanha, mas permissoes operacionais devem vir do `CampaignCharacter` com role `MASTER`.
* `Campaign.gmName` nao existe no modelo novo; o nome publico do mestre vem do `Character.name`.
* Em campanha privada, usar invite code cria uma solicitacao pendente e deve aparecer para o jogador na lista de campanhas como `PENDING`.
* Em campanha publica, usar invite code cria entrada ativa e deve notificar o mestre em tempo real.

## 5. Relacao com Outros Modulos
* `character_creation`: fornece personagens livres e cria/vincula o personagem `MASTER`.
* `game_systems`: define compatibilidade de sistema e capacidades de ficha quando houver ficha mecanica.
* `login`: identifica o usuario autenticado que cria a campanha.
* `campaign_presence`: deve considerar a campanha online quando o personagem `MASTER` entra na presenca.
