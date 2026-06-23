# Modulo: Criacao de Personagem (Product)

## 1. Proposito
Fornecer uma experiencia para criar, listar, editar, arquivar, deletar e vincular personagens a campanhas.

O personagem pertence primeiro ao usuario que o criou. Ele pode existir sem campanha como personagem livre. O vinculo com uma campanha acontece por meio de `CampaignCharacter`, que define papel, status e historico daquele personagem dentro da campanha.

Este modulo nao implementa regras mecanicas completas de ficha. Dados como atributos, classe, HP, pericias, inventario e formulas pertencem ao modulo `character_sheet` e aos seus submodulos especificos de sistema.

## 2. Personas
* **Jogador:** Cria e gerencia seus proprios personagens livres ou ja vinculados.
* **Mestre/GM:** Cria campanha selecionando ou criando um personagem livre para atuar como `MASTER`; gerencia personagens vinculados a sua campanha; cria NPCs dentro da campanha.

## 3. Conceitos de Produto
* **Character:** entidade base controlada por um usuario. Possui nome, avatar opcional, ficha opcional e sistema opcional. Bio pertence a metadata da ficha.
* **Personagem livre:** `Character` sem registro em `CampaignCharacter` e sem `deletedAt`.
* **CampaignCharacter:** vinculo permanente entre um personagem e uma campanha.
* **Role de campanha:** `MASTER`, `PLAYER` ou `NPC`, sempre no vinculo `CampaignCharacter`, nunca no personagem livre.
* **Status de campanha:** `PENDING`, `ACTIVE`, `REJECTED`, `LEFT` ou `DEAD`.

## 4. Escopo do Modulo
Incluido:
* Criar personagem livre com nome obrigatorio.
* Editar nome, avatar e bio da ficha de personagem livre.
* Listar "Meus Personagens" em abas ou filtros: livres e em campanha.
* Exibir secao compacta de personagens no dashboard inicial.
* Arquivar personagem livre usando `deletedAt`.
* Deletar definitivamente personagem livre quando permitido.
* Vincular personagem livre a uma campanha por `CampaignCharacter`.
* Criar campanha selecionando ou criando um personagem livre que sera o `MASTER`.
* Solicitar entrada em campanha usando um personagem.
* Criar NPC dentro de campanha, apenas pelo `MASTER`.
* Marcar personagem de campanha como `LEFT` ou `DEAD` sem deletar o `Character`.

Fora de escopo:
* Validacao completa de ficha mecanica.
* Regras especificas de D&D 5e ou Pathfinder 2e.
* Upload de avatar.
* Reutilizar personagem em outra campanha depois de vinculado.
* Relacao direta usuario-campanha como fonte de participacao.

## 5. Regras de Produto
* Um personagem pode ser vinculado a apenas uma campanha durante toda sua vida.
* O usuario nao possui vinculo direto operacional com campanha; quem participa da campanha e o personagem.
* Campanha publica cria `CampaignCharacter` ativo imediatamente depois que o usuario escolhe ou cria um personagem compativel.
* Campanha privada cria `CampaignCharacter` como `PENDING`; o mestre aprova ou rejeita a solicitacao.
* Todo personagem usado para criar campanha vira `MASTER` ativo no mesmo fluxo.
* Uma campanha tem apenas um `MASTER` ativo.
* Um usuario pode mestrar varias campanhas se usar personagens livres diferentes.
* Nome de personagem pode repetir entre personagens do mesmo usuario e dentro da mesma campanha.
* Bio da ficha e avatar sao opcionais.
* Bio da ficha e visivel apenas para dono do personagem e mestre da campanha.
* Avatar e armazenado como uma unica URL em `Character.avatarUrl`; pode apontar para asset interno ou URL externa.
* Bio da ficha tem limite de 2.000 caracteres.
* Jogador pode editar avatar e bio da ficha de personagem vinculado; nome fica bloqueado para ele.
* A tela de edicao reutiliza a experiencia de criacao, mas troca o comando principal para `Salvar mudancas`.
* A selecao de avatar acontece a partir do preview do avatar, por modal compacto com presets e URL.
* Mestre pode editar nome, avatar e bio da ficha de personagens vinculados a sua campanha.
* Personagem vinculado nao pode ser deletado definitivamente pelo fluxo comum.
* Morte ou saida da campanha muda apenas `CampaignCharacter.status` para `DEAD` ou `LEFT`.
* NPC usa `Character` e `CampaignCharacter`, mas so pode ser criado dentro de uma campanha pelo `MASTER`.

## 6. Ficha e Compatibilidade
* Campanha possui sistema obrigatorio: `DND_5E` ou `PATHFINDER_2E`.
* Personagem pode existir sem ficha e sem sistema.
* Se um personagem sem ficha entra em campanha, pode herdar o sistema da campanha.
* Se um personagem ja possui ficha, ele so pode entrar em campanha compativel.
* Se a ficha for incompativel, o usuario pode apagar definitivamente a ficha atual com alerta de confirmacao ou duplicar o personagem sem ficha para preservar o original.

## 7. Relacao com Outros Modulos
* `campaign`: define campanha, politica de entrada, sistema obrigatorio e fluxo de criacao com personagem `MASTER`.
* `login`: identifica o usuario dono ou criador do personagem.
* `character_sheet`: guarda e valida a ficha mecanica do personagem.
* `character_sheet/dnd_5e_sheet`: regras especificas futuras de D&D 5e.
* `character_sheet/pathfinder_2e_sheet`: regras especificas futuras de Pathfinder 2e.
* `canvas` ou `vtt`: consome personagens ativos da campanha para representacao no tabuleiro.

## 8. Dashboard de Campanhas por Personagem
* A lista "Suas campanhas" deve ser derivada exclusivamente de `CampaignCharacter` do usuario autenticado.
* A lista deve exibir apenas campanhas em que o usuario possui um personagem vinculado.
* Cada card deve mostrar nome do personagem vinculado, role (`MASTER`, `PLAYER` ou `NPC` quando aplicavel) e status do vinculo (`PENDING`, `ACTIVE`, `REJECTED`, `LEFT` ou `DEAD`).
* O botao `Entrar` deve ficar habilitado para `MASTER` ativo e para `PLAYER` ativo quando a campanha esta online.
* Status de sessao online/offline continuam sendo uma regra de entrada para jogadores, mas nao substituem o status do personagem.
