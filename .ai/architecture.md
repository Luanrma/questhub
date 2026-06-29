# Arquitetura do Sistema

## 1. Visao Geral
QuestHub e um VTT web para campanhas de RPG online. A aplicacao atual e um monorepo com frontend React/Vite e API Fastify/Prisma, organizado por bounded contexts documentados em `.ai/`.

## 2. Aplicacoes
* `apps/web`: cliente React com React Router, contexto de sessao e Socket.IO client.
* `apps/api`: API HTTP Fastify, Socket.IO, Prisma e PostgreSQL.

## 3. Bounded Contexts Implementados
* `auth`: cadastro, login, sessao via cookie JWT, logout e `GET /api/me`.
* `characters`: criacao, listagem, detalhe e edicao basica de `Character`.
* `campaigns`: criacao de campanha, entrada por convite, listagem, settings e aprovacao/recusa de jogadores.
* `campaign-presence`: presenca realtime por campanha, estado online do mestre e eventos de entrada/saida.
* `chat`: historico e envio realtime de mensagens por campanha.

## 4. Organizacao Backend
O arquivo `apps/api/src/server.ts` deve permanecer como composition root:
* configura ambiente, CORS e cookies;
* inicializa Socket.IO/presenca;
* registra rotas por modulo;
* inicia o servidor.

Rotas e regras devem viver em `apps/api/src/modules/[context]/`. Utilitarios compartilhados ficam em `apps/api/src/http`, `apps/api/src/auth` e `apps/api/src/db`.

## 5. Modelo de Dominio Atual
* `User`: dono de personagens e criador historico de campanhas.
* `Character`: entidade base de personagem, com `system`, `sheet`, `avatarUrl` e `deletedAt`. Bio pertence a `Character.sheet.metadata.bio`, dentro do envelope definido pelo ruleset em `game_systems`.
* `Campaign`: mesa/campanha com sistema obrigatorio, politica de entrada e invite code.
* `CampaignCharacter`: vinculo operacional entre personagem e campanha, com `role` e `status`.

Participacao operacional em campanha deve vir de `CampaignCharacter`, nao de uma relacao direta usuario-campanha.

## 6. Regras Arquiteturais
* Novos comportamentos precisam ser documentados em `.ai/[modulo]/` antes da implementacao.
* `server.ts` nao deve voltar a concentrar regras de negocio.
* Prisma deve continuar encapsulado por modulo e evoluir para repositorios/casos de uso quando a complexidade crescer.
* O VTT deve permanecer generico: mapa, cena, token, chat, dado, presenca, movimentacao e manipulacao visual nao podem depender de Pathfinder 2e, D&D 5e ou outro sistema especifico.
* Regras mecanicas de RPG pertencem a `game_systems` e seus submodulos, como `game_systems/pathfinder_2e`.
* Ficha de personagem e uma capacidade de ruleset. Nao deve existir modulo global de regras de ficha fora de `game_systems`.
* Realtime de campanha pertence ao contexto `campaign-presence`; outros eventos realtime devem ter modulo e spec proprios.

## 7. Dependencias Principais
* Frontend: React, React Router, Socket.IO client, Tailwind CSS, lucide-react.
* Backend: Fastify, Socket.IO, Prisma, PostgreSQL, Zod, bcryptjs, jsonwebtoken.

## 8. Estrategia de Testes
* Testes unitarios devem usar `node:test`, sem dependencia obrigatoria de banco, servidor HTTP real ou Socket.IO real.
* A suite unitaria deve compilar TypeScript para `.tmp/api-tests` com `tsc` e executar um agregador unico com Node.
* Regras puras, validadores, presenters e helpers devem ficar em arquivos pequenos e importaveis isoladamente.
* Rotas Fastify devem delegar validacao/apresentacao para helpers testaveis sempre que possivel.
* O hook Git `pre-push` deve executar a suite unitaria completa e bloquear o push quando houver falha.
* Testes de integracao com banco/API ficam fora do escopo inicial e devem ter setup proprio quando forem introduzidos.

## 9. Riscos e Debitos Tecnicos
* `trade` possui apenas um stub tecnico legado no codigo e ainda nao e um fluxo de produto implementado.
* Quando implementado, `trade` deve operar entre `Character` ativos que pertencam a mesma `campaignId`, nunca diretamente entre usuarios.
* O codigo backend de ficha deve viver em `apps/api/src/modules/game_systems/[system]/character_sheet`.
* O codigo frontend de ficha especifica deve viver em `apps/web/src/game-systems/[system-slug]/character-sheet`, como `apps/web/src/game-systems/pathfinder-2e/character-sheet`.
* O schema Prisma ja reserva `DND_5E`, mas os fluxos funcionais atuais de criacao usam apenas `PATHFINDER_2E`.
* Arquivar/deletar personagens, NPCs e transicoes `LEFT`/`DEAD` ainda nao possuem fluxo operacional completo.
* Permissao do mestre para editar personagens vinculados ainda nao esta implementada.
* Validacoes de ficha por sistema ainda sao placeholders.
