# Arquitetura

## Limites

* `Campaign`: mesa independente de regras, convite e politica de entrada.
* `Character`: identidade com nome, avatar, bio e ciclo de vida.
* `CampaignCharacter`: vinculo, papel e status da identidade na campanha.
* `campaign_scene`: cena, mapa, grid, token e camera.
* `chat`, `campaign_presence`, `campaign_session`, `campaign_diary` e `assets`: capacidades operacionais do VTT.

## Regras

* O VTT nao persiste fichas ou identificadores de regras no dominio principal.
* Criar campanha ou personagem nunca exige escolher um conjunto de regras.
* Tokens podem referenciar identidades, mas nao carregam estatisticas mecanicas.
* Extensoes futuras devem ser opcionais e nao alterar a disponibilidade do VTT base.
* Backend valida autenticacao, ownership e papeis; frontend nao e fronteira de seguranca.
