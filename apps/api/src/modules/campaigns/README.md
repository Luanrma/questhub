# Campaigns

## Objetivo do modulo

Gerenciar campanhas, convites, entrada de jogadores, configuracoes e participantes.

## Responsabilidade principal

Aplicar regras de vinculo entre usuario, personagem e campanha.

## Funcionalidades existentes

- Listar campanhas do usuario.
- Buscar campanha por invite code.
- Criar campanha com personagem mestre.
- Entrar em campanha publica ou privada.
- Obter personagem do usuario em uma campanha.
- Alterar politica de entrada.
- Listar jogadores.
- Aprovar ou rejeitar jogadores.
- Gerar invite code unico.

## Dependencias internas e externas

- Internas: Prisma, `requireAuth`, `game_systems`, `campaign-presence`.
- Externas: Fastify, Socket.IO, Zod, Prisma types.

## Modulos relacionados

- `characters`: personagens usados em campanhas.
- `game_systems`: cria ficha default.
- `campaign-presence`: informa status online e emite eventos.
- Web: paginas de campanhas e jogadores.

## Pontos de entrada

- `routes.ts`.
- `invite-code.ts`.

## Fluxos importantes

- Criacao de campanha roda em transacao.
- Entrada em campanha roda em transacao.
- Personagem deve pertencer ao usuario, nao estar arquivado, nao estar vinculado e ter sistema compativel.
- Campanha privada cria status `PENDING`.
- Campanha publica cria status `ACTIVE`.
- Mestre deve ser `MASTER` ativo para aprovar, recusar ou alterar configuracao.

## Arquivos criticos

- `routes.ts`.
- `invite-code.ts`.
- `invite-code.test.ts`.

## Observacoes tecnicas e debitos

- Handler e grande e concentra muitas regras.
- Ha trecho com indentacao desalinhada no retorno de `/api/campaigns/join`.
- Existe tratamento para erro `MASTER_OFFLINE`, mas esse erro nao e lancado no fluxo atual de join.
- A API atual aceita apenas `PATHFINDER_2E` na criacao, apesar de `DND_5E` existir no enum Prisma.
- Regras de ficha pertencem a `game_systems/[system]/character_sheet`.

