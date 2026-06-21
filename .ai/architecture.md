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
* `trade`: endpoint experimental de envio realtime de item entre usuarios.

## 4. Organizacao Backend
O arquivo `apps/api/src/server.ts` deve permanecer como composition root:
* configura ambiente, CORS e cookies;
* inicializa Socket.IO/presenca;
* registra rotas por modulo;
* inicia o servidor.

Rotas e regras devem viver em `apps/api/src/modules/[context]/`. Utilitarios compartilhados ficam em `apps/api/src/http`, `apps/api/src/auth` e `apps/api/src/db`.

## 5. Modelo de Dominio Atual
* `User`: dono de personagens e criador historico de campanhas.
* `Character`: entidade base de personagem, com `system`, `sheet`, `avatarUrl` e `deletedAt`. Bio pertence a `character_sheet.metadata.bio`.
* `Campaign`: mesa/campanha com sistema obrigatorio, politica de entrada e invite code.
* `CampaignCharacter`: vinculo operacional entre personagem e campanha, com `role` e `status`.

Participacao operacional em campanha deve vir de `CampaignCharacter`, nao de uma relacao direta usuario-campanha.

## 6. Regras Arquiteturais
* Novos comportamentos precisam ser documentados em `.ai/[modulo]/` antes da implementacao.
* `server.ts` nao deve voltar a concentrar regras de negocio.
* Prisma deve continuar encapsulado por modulo e evoluir para repositorios/casos de uso quando a complexidade crescer.
* Regras mecanicas comuns de ficha pertencem a `character_sheet`; regras especificas de sistema pertencem aos submodulos internos `character_sheet/dnd_5e_sheet` e `character_sheet/pathfinder_2e_sheet`.
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
* `trade` existe no codigo, mas ainda precisa de especificacao modular propria.
* `character_sheet` possui contrato e API inicial para envelope de ficha, metadata generica e ficha Pathfinder 2e.
* Arquivar/deletar personagens, NPCs e transicoes `LEFT`/`DEAD` ainda nao possuem fluxo operacional completo.
* Permissao do mestre para editar personagens vinculados ainda nao esta implementada.
* Validacoes de ficha por sistema ainda sao placeholders.
