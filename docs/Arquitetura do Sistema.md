# Arquitetura do Sistema

## Visao arquitetural

QuestHub e um monorepo Node.js com dois aplicativos principais:

- `apps/api`: API HTTP em Fastify, integracao Socket.IO e persistencia via Prisma/PostgreSQL.
- `apps/web`: SPA React/Vite/TypeScript que consome a API por `fetch` e Socket.IO.

A raiz centraliza dependencias, scripts, Docker, variaveis de ambiente e Prisma CLI. O projeto nao usa `package.json` por aplicativo; todos os scripts rodam a partir da raiz.

Fluxo principal: o usuario acessa a SPA, a SPA chama a API com `credentials: include`, a API autentica pelo cookie HTTP-only `token`, rotas protegidas usam `requireAuth`, dados persistem em PostgreSQL via Prisma e eventos de campanha/presenca trafegam por Socket.IO autenticado pelo mesmo cookie.

## Padroes utilizados

- Monorepo simples com apps em `apps/*` e infraestrutura na raiz.
- Handlers Fastify registrados por modulo em `apps/api/src/server.ts`.
- Validacao de entrada com Zod.
- Prisma Client singleton em `apps/api/src/db/prisma.ts`.
- JWT em cookie HTTP-only para sessao.
- React Router centralizado em `apps/web/src/App.tsx`.
- Context API para sessao, campanhas, Socket.IO e campanha ativa.
- Ficha de personagem em envelope versionado: `{ system, version, metadata, data }`.

## Regras arquiteturais observadas

- Arquivos globais ficam na raiz: `package.json`, `.env`, Docker, lockfile e scripts.
- `apps/api/src/server.ts` e o ponto de composicao da API.
- Toda rota de negocio protegida chama `requireAuth`.
- Personagens vinculados a campanha nao podem ter nome alterado pelo jogador.
- Um personagem so pode estar vinculado a uma campanha por causa de `CampaignCharacter.characterId @unique`.
- Criacao e entrada em campanha criam ou vinculam personagem e garantem ficha default quando necessario.
- Campanhas privadas geram entrada `PENDING`; campanhas publicas geram entrada `ACTIVE`.
- Jogadores so entram na area de campanha quando o mestre esta online; mestres marcam campanha online ao emitir `presence:enter`.
- No codigo atual, apenas `PATHFINDER_2E` e aceito nos formularios e validacoes, embora o enum Prisma tambem contenha `DND_5E`.

## Convencoes tecnicas

- TypeScript ESM com `"type": "module"` na raiz.
- Scripts npm da raiz executam API, Web, build, lint, testes e Prisma.
- API usa rotas `/api/*`.
- Web usa `VITE_API_URL`, com fallback para `http://localhost:3001`.
- API carrega `.env` exclusivamente da raiz por `apps/api/src/env.ts`.
- Mensagens de erro sao retornadas como `{ error: ... }`.
- Testes unitarios da API usam `node:test` e sao agregados por `apps/api/src/unit.test.ts`.

## Separacao de responsabilidades

- `apps/api/src/auth`: assinatura e verificacao de JWT.
- `apps/api/src/http`: utilitarios HTTP, cookie e autenticacao.
- `apps/api/src/db`: inicializacao do Prisma.
- `apps/api/src/modules/auth`: cadastro, login, sessao atual e logout.
- `apps/api/src/modules/campaigns`: campanhas, convite, entrada, configuracao e aprovacao de jogadores.
- `apps/api/src/modules/campaign-presence`: Socket.IO, presenca em campanha e status online.
- `apps/api/src/modules/characters`: CRUD parcial de personagens e apresentacao.
- `apps/api/src/modules/character_sheet`: contrato, validacao, metadata e adaptadores de fichas.
- `apps/api/src/modules/trade`: endpoint experimental de envio de item por Socket.IO.
- `apps/web/src/contexts`: estado de sessao e conexao Socket.IO.
- `apps/web/src/pages`: telas de negocio.
- `apps/web/src/layouts`: protecao e estrutura visual das rotas.
- `apps/web/src/components`: UI compartilhada e ficha.

## Fluxo de comunicacao entre modulos

Autenticacao: `LoginPage` ou `RegisterPage` chama a API; `modules/auth/routes.ts` valida dados, consulta Prisma, assina JWT e grava cookie; `SessionContext.refreshMe` chama `/api/me`.

Campanhas: Web chama `/api/campaigns`; `campaigns/routes.ts` consulta `CampaignCharacter` e monta dados, incluindo `isOnline` vindo de `campaign-presence`; criacao e entrada usam transacao Prisma e `buildDefaultCharacterSheetEnvelope`; eventos sao emitidos via Socket.IO para salas `user:{userId}`.

Presenca: `CampaignLayout` chama `/api/campaigns/:campaignId/my-character`; se autorizado, emite `presence:enter`; `campaign-presence/socket.ts` valida vinculo ativo e atualiza mapas em memoria; eventos sao enviados por `campaign:status`, `presence:update` e `campaign:kicked`.

Ficha: `CharacterSheetModal` busca `/api/characters/:characterId/sheet`; se nao houver ficha, busca default; o formulario Pathfinder 2e altera o envelope local; o modal salva via `PUT /api/characters/:characterId/sheet`; API valida envelope e adapter antes de persistir.

## Dependencias criticas

- PostgreSQL e obrigatorio para API operacional.
- Prisma Client depende de `DATABASE_URL`.
- JWT depende de `JWT_SECRET`; ausencia aborta a API ao importar `auth/jwt.ts`.
- Web e API dependem de cookie cross-origin com CORS `credentials: true`.
- Socket.IO depende do cookie `token` no handshake.
- `CampaignPresence` usa mapas em memoria; status online nao e persistido.
- Ficha depende do adapter `PATHFINDER_2E`; outros sistemas nao possuem adapter implementado.

## Riscos tecnicos e acoplamentos

- Alto acoplamento entre rotas, regras de negocio e Prisma: handlers contem validacao, autorizacao, transacao, apresentacao e eventos.
- Eventos Socket.IO sao disparados dentro de rotas de campanha; isso acopla regras HTTP ao modulo de presenca.
- Presenca em memoria nao escala para multiplas instancias sem adapter externo para Socket.IO e storage compartilhado.
- `DND_5E` existe no schema Prisma, mas nao e suportado pela validacao atual nem pelo registry de ficha.
- `PrivateLayout` existe mas nao e usado em `App.tsx`; potencial modulo orfao.
- `apps/web/src/assets/react.svg` e `apps/web/src/assets/vite.svg` parecem sobras do template Vite; nao ha imports identificados no codigo lido.
- Varias strings exibem mojibake, como `NÃ£o`, `SessÃµes`, `VisÃ£o`; ha risco de encoding incorreto em arquivos.
- `trade/routes.ts` aceita `item` como `unknown` e apenas exige `toUserId`; falta validacao de campanha, autorizacao do destinatario e contrato de item.
- CORS em desenvolvimento aceita qualquer origem quando `NODE_ENV !== 'production'`.
- Falta teste automatizado de rotas HTTP completas, transacoes Prisma, Socket.IO e frontend.

## Modulos orfaos ou parcialmente implementados

- `apps/web/src/layouts/PrivateLayout.tsx`: nao registrado nas rotas atuais.
- Rotas de UI `/sessions`, `/characters` dentro de campanha e `/journal`: usam `PlaceholderPage`.
- `apps/api/src/modules/trade`: endpoint isolado sem tela web encontrada.
- `DND_5E`: enum de banco sem fluxo funcional implementado.
- Assets Vite padrao: `react.svg` e `vite.svg` nao aparecem em imports relevantes.

## Diretrizes para futuras implementacoes

- Antes de adicionar novo dominio, definir contrato de API, modelo Prisma, autorizacao e eventos em documento de especificacao.
- Separar regras reutilizaveis de negocio em funcoes/servicos quando mais de uma rota precisar da mesma validacao.
- Manter todo endpoint protegido com `requireAuth` e validar ownership no banco, nao apenas no frontend.
- Ao adicionar novo sistema de ficha, criar adapter em `character_sheet`, schema Zod, default sheet, tipos de frontend e formulario especifico.
- Evitar usar enum Prisma como sinal de suporte funcional; documentar e validar apenas sistemas realmente implementados.
- Se houver deploy horizontal, substituir presenca em memoria por adapter Socket.IO compativel com multiplas instancias.
- Padronizar encoding UTF-8 dos arquivos antes de expandir texto de interface.
- Criar testes para rotas de campanha/personagem/ficha e para eventos Socket.IO antes de refatoracoes grandes.
- Manter READMEs de modulo atualizados quando pontos de entrada, dependencias ou regras de negocio mudarem.

