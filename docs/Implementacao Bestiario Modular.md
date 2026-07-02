# Implementacao - Bestiario Modular

Data: 2026-07-02.

## Objetivo

Criar a primeira fatia do bestiario por sistema de jogo. O design deve permitir PF2e agora e DnD 5e depois, sem acoplar regras especificas ao core da campanha.

## Implementado nesta rodada

Backend:

- Criado contrato modular de bestiario em `apps/api/src/modules/game_systems/bestiary/models.ts`.
- Criado registro de adaptadores em `apps/api/src/modules/game_systems/bestiary/registry.ts`.
- Criado adaptador inicial PF2e em `apps/api/src/modules/game_systems/pathfinder_2e/bestiary/index.ts`.
- Criada rota `GET /api/campaigns/:campaignId/bestiary`.
- A rota usa o `system` da campanha para escolher o bestiario.
- A rota exige que o usuario seja mestre ativo da campanha.
- Adicionados testes unitarios para o registro do bestiario.

Frontend:

- Criada pagina `CampaignBestiaryPage`.
- Adicionada rota `/campaign/:campaignId/bestiary`.
- Adicionado item `Bestiario` no menu lateral da campanha.
- A tela lista criaturas, token visual, nivel, CA, PV, deslocamento, tamanho, raridade e traits.
- A busca filtra por nome, pack de origem e trait.
- Cards do bestiario podem ser arrastados para o tabuleiro.
- O menu `Tokens` tambem lista criaturas do bestiario como candidatos.
- Dropar uma criatura cria um token de cena com origem `BESTIARY`, sem criar `Character`.
- Multiplos drops da mesma criatura criam tokens independentes.
- Preferencia de idioma de conteudo fica em `Configuracoes`, por usuario, com default `pt-BR`.

## Dados atuais

O catalogo esta em memoria e tem apenas algumas criaturas PF2e para validar fluxo e UI:

- Goblin Warrior.
- Air Mephit.
- Barghest.
- Aapoph Granitescale.
- Adamantine Golem.
- Balor.

Essa escolha e intencional: valida o contrato sem exigir ainda uma migracao grande ou a ingestao completa dos packs do Foundry.

## Decisoes

- Criaturas sao representadas como documentos de bestiario normalizados, nao como `Character` do banco.
- O campo `token.imageUrl` ja existe no contrato, mas as entradas iniciais usam fallback visual por iniciais e cor.
- Tokens colocados a partir de criaturas do bestiario sao efemeros de cena e persistem em `CampaignSceneToken`.
- `CampaignSceneToken.source` diferencia `CHARACTER` e `BESTIARY`.
- Tokens de bestiario usam `bestiaryCreatureId`, `name`, `avatarUrl` e `tokenBorderColor`, e podem existir varias vezes na mesma cena.
- `CampaignUserSettings.gameContent.language` controla exibicao de texto de ruleset por usuario. O default e `pt-BR`; `original` preserva o texto importado.
- O importador real de PF2e deve ler apenas arquivos com `type: "npc"`, conforme `docs/Mapeamento PF2e Bestiarios.md`.
- `hazard`, glossarios de habilidades e efeitos ficam fora da primeira fase.

## Proximas etapas recomendadas

1. Criar importador de PF2e que leia `pf2e-master/packs/**` e normalize `type: "npc"`.
2. Persistir bestiario importado em banco ou gerar artefato JSON versionado.
3. Resolver assets/tokens reais: copiar imagens disponiveis ou mapear URLs servidas pelo QuestHub.
4. Permitir que o mestre crie um token de cena a partir de uma criatura do bestiario.
5. Criar adaptador DnD 5e seguindo o mesmo contrato.
