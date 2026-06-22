# Characters

## Objetivo do modulo

Gerenciar biblioteca de personagens do usuario.

## Responsabilidade principal

Criar, listar, consultar e atualizar dados basicos de personagens.

## Funcionalidades existentes

- `POST /api/characters`.
- `GET /api/characters`.
- `GET /api/characters/:characterId`.
- `PATCH /api/characters/:characterId`.
- Validacao de avatar, nome, sistema e bio.
- Presenter que calcula `available`, `hasSheet` e `bio`.

## Dependencias internas e externas

- Internas: Prisma, `requireAuth`, `character_sheet`.
- Externas: Zod e Prisma types.

## Modulos relacionados

- `campaigns`: vincula personagens a campanhas.
- `character_sheet`: cria e le metadata da ficha.
- Web: paginas de personagens e modal de ficha.

## Pontos de entrada

- `routes.ts`.
- `validation.ts`.
- `presenter.ts`.

## Fluxos importantes

- Criacao sempre cria ficha default para `PATHFINDER_2E`.
- Edicao bloqueia mudanca de nome quando personagem tem campanha vinculada.
- Bio fica dentro de `sheet.metadata.bio`.

## Arquivos criticos

- `routes.ts`.
- `validation.ts`.
- `presenter.ts`.

## Observacoes tecnicas e debitos

- Nao ha rota de exclusao/arquivamento, apesar de `deletedAt` existir.
- `DND_5E` nao e aceito pelas validacoes atuais.

