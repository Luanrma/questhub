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
* Toda implementacao de backend deve seguir SOLID. Cada camada, arquivo e modulo deve ter uma responsabilidade principal clara.
* O backend deve seguir um desenho orientado a DDD sempre que houver regra de negocio: modulos representam bounded contexts, nao agrupamentos acidentais de rotas.
* Um modulo nao deve absorver entidades sem relacao direta com seu dominio. Quando um conceito for independente, ele deve possuir modulo proprio em `.ai/` e em `apps/api/src/modules/`.
* Rotas/controllers Fastify sao adaptadores HTTP: autenticam, validam entrada, chamam casos de uso/services e formatam resposta. Elas nao devem conter regra de negocio nem acessar Prisma diretamente.
* Interacoes com banco devem passar por repositories do proprio modulo. Services, casos de uso e rotas nao devem depender diretamente de `PrismaClient`.
* Repositories devem ficar sempre dentro de uma pasta `repositories/`.
* Repositories devem ser separados por intencao em arquivos de leitura e escrita, como `repositories/read.ts` e `repositories/write.ts`.
* Repositories nunca devem ser acessados diretamente por rotas/controllers, presenters, validators ou outros modulos. A camada autorizada a conversar com repositories e `services/`.
* Repositories cuidam de persistencia e consultas. Eles nao devem decidir regras de produto que pertencem ao dominio ou aos services.
* Services/casos de uso devem ficar dentro de uma pasta `services/` e coordenam regras de negocio, autorizacao operacional e fluxos que envolvem uma ou mais entidades do mesmo modulo.
* Quando entidades de modulos diferentes tiverem relacao direta ou indireta em um fluxo, a integracao deve ser representada por um service/caso de uso de aplicacao, sem misturar responsabilidades dentro de um dos modulos envolvidos.
* Domain deve ficar dentro de uma pasta `domain/`. Interfaces/tipos, presenters/serializers, validators e policies/helpers puros pertencem a `domain/` e nao devem acessar Prisma.
* Prisma deve permanecer encapsulado atras de repositories; o schema e migrations definem persistencia, nao autorizacao, apresentacao ou fluxo de produto.
* O VTT deve permanecer generico: mapa, cena, token, chat, dado, presenca, movimentacao e manipulacao visual nao podem depender de Pathfinder 2e, D&D 5e ou outro sistema especifico.
* Regras mecanicas de RPG pertencem a `game_systems` e seus submodulos, como `game_systems/pathfinder_2e`.
* Ficha de personagem e uma capacidade de ruleset. Nao deve existir modulo global de regras de ficha fora de `game_systems`.
* Realtime de campanha pertence ao contexto `campaign-presence`; outros eventos realtime devem ter modulo e spec proprios.
* Toda documentacao de sistema, modulo, arquitetura, contrato ou implementacao deve viver dentro de `.ai/`, exceto o `README.md` da raiz do projeto e `scripts/README.md`.
* READMEs dentro de `apps/` ou subpastas de codigo nao devem ser usados como fonte documental; quando uma informacao for util, ela deve ser incorporada ao modulo canonico correspondente em `.ai/`.

## 7. Dependencias Principais
* Frontend: React, React Router, Socket.IO client, Tailwind CSS, lucide-react.
* Backend: Fastify, Socket.IO, Prisma, PostgreSQL, Zod, bcryptjs, jsonwebtoken.

## 8. Estrategia de Testes
* Testes unitarios devem usar `node:test`, sem dependencia obrigatoria de banco, servidor HTTP real ou Socket.IO real.
* A suite unitaria deve compilar TypeScript para `.tmp/api-tests` com `tsc` e executar um agregador unico com Node.
* Regras puras, validadores, presenters e helpers devem ficar em arquivos pequenos e importaveis isoladamente.
* Testes devem acompanhar a camada que exercitam: testes de repositories em `repositories/`, testes de services em `services/` e testes de domain em `domain/`.
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
