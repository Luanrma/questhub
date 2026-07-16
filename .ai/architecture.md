# Arquitetura

## Limites

* `Campaign`: mesa independente de regras, convite e politica de entrada.
* `Character`: identidade narrativa/operacional opcional, com nome, avatar, bio e ciclo de vida.
* `CampaignCharacter`: vinculo, papel e status da identidade na campanha.
* `campaign_scene`: cena, mapa, grid, token generico, paredes, portas e camera.
* `chat`, `campaign_presence`, `campaign_session`, `campaign_diary` e `assets`: capacidades operacionais do VTT.

## Regras

* O VTT nao persiste fichas ou identificadores de regras no dominio principal.
* Criar campanha ou personagem nunca exige escolher um conjunto de regras.
* Criar, mover, ocultar, remover e testar tokens nunca exige ficha, bestiario, inventario, combate ou sistema de jogo.
* Tokens podem referenciar identidades, mas a referencia e opcional e nao carrega estatisticas mecanicas.
* Qualquer campo como ruleset, origem de bestiario, PV, CA, magia, item, economia ou efeito ativo pertence a uma extensao opcional fora do contrato base do VTT.
* Extensoes futuras devem ser opcionais e nao alterar a disponibilidade do VTT base.
* Backend valida autenticacao, ownership e papeis; frontend nao e fronteira de seguranca.
