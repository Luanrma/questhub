# Arquitetura do Sistema

QuestHub e um monorepo Node.js com uma API Fastify/Socket.IO/Prisma e uma SPA React/Vite.

## Principios

- O dominio principal e um VTT independente de regras.
- `Campaign` nao conhece sistema de RPG.
- `Character` e uma identidade com nome, avatar e bio; nao e uma ficha mecanica.
- Campanhas, personagens, cenas, tokens, chat e sessoes devem funcionar sem extensoes.
- Uma futura integracao de regras deve usar um limite opcional separado e nao alterar os contratos base.

## Modulos principais

- `auth`: cadastro, login, cookie JWT e sessao atual.
- `characters`: identidades reutilizaveis e seus vinculos.
- `campaigns`: campanha, convite, entrada, configuracao e participantes.
- `campaign-presence`: presenca e estado online em tempo real.
- `campaign_scene`: cenas, mapas, grid, tokens e estado da camera.
- `chat`: mensagens e rolagens na campanha.
- `campaign_diary`: conteudo narrativo da campanha.
- `assets`: biblioteca e associacao de arquivos.
- `trade`: troca experimental de dados entre participantes.

## Modelo de identidade

Um `Character` pode existir sem campanha e sem qualquer conjunto de regras. `CampaignCharacter` associa a identidade a exatamente uma campanha e define papel e status. A criacao de campanha e a entrada por convite podem criar uma identidade minima, mas nunca uma ficha.

## Comunicacao

A SPA usa `fetch` com cookie HTTP-only para a API. Rotas protegidas validam `requireAuth`. Prisma persiste o estado em PostgreSQL. Socket.IO usa o mesmo cookie para autenticar presenca, chat e eventos de campanha.

## Diretrizes de evolucao

- Regras mecanicas nao devem entrar no schema ou nas rotas do VTT.
- Extensoes futuras devem ser opcionais, versionadas e substituiveis.
- Autorizacao e ownership devem ser validados no backend.
- Presenca em memoria deve migrar para storage compartilhado antes de escalar horizontalmente.
- Novos dominios devem definir contratos, persistencia e testes sem acoplar o nucleo a um ruleset.
