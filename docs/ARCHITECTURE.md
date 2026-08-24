# QuestHub — Arquitetura Canônica

Status: **CURRENT**  
Última consolidação: 2026-08-24

Este documento descreve a arquitetura vigente do QuestHub. Ele é subordinado a `docs/PROJECT_CONSTITUTION.md` e aos ADRs aceitos em `docs/architecture/adr/`.

Quando este documento divergir de um ADR aceito, o ADR prevalece. Quando documentação e implementação divergirem, a divergência deve ser registrada e resolvida explicitamente; não é permitido escolher silenciosamente um lado.

## 1. Visão do produto

QuestHub é um Virtual Tabletop para campanhas de RPG com suporte a múltiplos Game Systems.

O produto é dividido conceitualmente entre:

- **VTT Core**: capacidades genéricas de mundo, mesa, colaboração, persistência e apresentação;
- **Game System Runtime / contracts**: fronteira agnóstica para ativar engines e transportar comandos/projeções;
- **Game System engines**: regras, schemas, cálculos e conteúdo mecânico de um ruleset específico;
- **Composition Root**: seleciona e registra a engine correspondente ao Game System da Campaign.

Tooling de desenvolvimento/automação de IA é uma camada operacional separada e não faz parte do runtime do produto.

## 2. Stack e topologia atual

O repositório é um monorepo TypeScript/Node.js.

### Backend

- Fastify;
- Socket.IO;
- Prisma;
- PostgreSQL;
- Zod para validação de payloads.

Código principal: `apps/api/`.

### Frontend

- React;
- Vite;
- Tailwind;
- Socket.IO client.

Código principal: `apps/web/`.

### AI agent tooling

- TypeScript/Node.js;
- OpenAI Agents SDK;
- roles versionados exclusivamente em `.ai/agents/`;
- runtime operacional em `apps/agents/`.

### Qualidade

O projeto possui:

- testes unitários;
- testes/invariantes de banco;
- build do frontend em CI;
- testes/typecheck do agent runtime;
- `npm run check:architecture` para fronteiras VTT/Game System, Agent tooling e governança documental;
- `npm run check:documentation-governance` para impedir que `.ai/` volte a acumular documentação de produto;
- workflow específico de Game System boundaries.

## 3. Campaign

`Campaign` representa o mundo de uma campanha e é a fronteira máxima de isolamento dos dados de jogo.

Toda Campaign possui obrigatoriamente um Game System escolhido em sua criação.

A identificação do Game System serve para que o sistema selecione a engine correspondente. Ela não permite que módulos genéricos do VTT passem a interpretar regras concretas.

Referências:

- ADR-0001 — Campaign exige um Game System;
- ADR-0002 — Campaign é a fronteira de isolamento dos dados.

## 4. User e CampaignMember

`User` representa a conta/autenticação do usuário.

`CampaignMember` representa exclusivamente a participação desse User em uma Campaign, contendo papel e status de participação.

Papéis atuais persistidos:

- `MASTER`;
- `PLAYER`.

Status atuais persistidos:

- `PENDING`;
- `ACTIVE`;
- `REJECTED`;
- `LEFT`.

Membership não é personagem, criatura ou entidade do mundo.

## 5. CampaignActor

`CampaignActor` representa uma entidade existente dentro da Campaign.

Exemplos conceituais:

- personagem de Player;
- NPC;
- criatura;
- familiar;
- companion;
- montaria;
- outra entidade equivalente definida pela Campaign/Game System.

Um Actor pode opcionalmente ser controlado por um CampaignMember por meio de uma relação explícita de controle.

`CampaignActorEffect` representa uma instância de efeito atualmente ativa sobre o Actor. O efeito pertence ao Actor, não à ficha nem ao Token, e pode existir mesmo quando essas representações estão ausentes.

O Core persiste apenas identidade/apresentação genérica e dados opacos do efeito: polaridade genérica (`BENEFICIAL`, `HARMFUL`, `NEUTRAL`), namespace, chave de definição opcional, categoria/valor de exibição opcionais e payload/origin versionados. O significado de Conditions concretas, stacking, duração e consequências mecânicas pertence ao Game System.

Múltiplas instâncias com a mesma definição podem coexistir no Core. Arquivar o Actor preserva seus efeitos ativos; excluir definitivamente o Actor remove essas instâncias por cascade.

Não existe `Character` global contendo estado mutável reutilizado entre Campaigns e não existe `CampaignCharacter` combinando participação e entidade do mundo.

Referências:

- ADR-0003;
- ADR-0005;
- `docs/features/actor-active-effects/spec.md`.

## 6. CampaignToken

`CampaignToken` é uma entidade visual e operacional do VTT.

Token e Actor possuem ciclos de vida independentes.

O vínculo com Actor é opcional e atualmente 1:0/1:1 por meio de `CampaignToken.actorId` único e anulável.

Consequências:

- Token pode existir sem Actor;
- Actor pode existir sem Token;
- remover Token não remove Actor;
- remover/arquivar Actor não exige remover Token;
- posicionamento na cena pertence à camada de Token/placement.

Referência: ADR-0004.

## 7. Character Sheet

`CampaignCharacterSheet` é armazenamento de ficha associado a um CampaignActor.

O VTT pode persistir dados mecânicos de forma agnóstica/opaca, mas não pode interpretar a semântica interna do JSON de um Game System.

Campos estruturais como `systemKey` e `schemaVersion` existem para identificar/versionar o formato. A interpretação do conteúdo pertence à engine correspondente.

`CampaignCharacterSheetEntry` permite organizar entradas mecânicas versionadas e namespaced sem transferir a interpretação das regras para o VTT.

Contrato auxiliar: `docs/features/character-sheet-entries/spec.md`.

## 8. Inventory

`Inventory` é um agregado genérico ligado a `CampaignActor`.

`InventoryEntry` pode armazenar quantidade, referências de catálogo e dados/estado em JSON.

A persistência genérica não torna o VTT responsável por interpretar:

- slot específico de ruleset;
- peso/carga conforme regras concretas;
- equipamento permitido;
- efeitos de equipamento;
- moeda e conversões;
- preço ou regras de comércio.

Essas regras pertencem ao Game System quando forem específicas dele.

## 9. VTT Core

O VTT Core é responsável por capacidades genéricas, incluindo quando aplicável:

- Campaign e membership;
- Actors genéricos;
- efeitos ativos genéricos pertencentes a Actors;
- cenas, mapas e grid;
- Tokens e placements;
- paredes;
- fog of war;
- iluminação e visão por contratos genéricos;
- seleção de alvos;
- áreas e overlays;
- chat de diálogo;
- Campaign Game Log para eventos mecânicos genéricos;
- presença e sessão;
- assets;
- diário;
- permissões e visibilidade;
- eventos em tempo real;
- persistência agnóstica necessária para suportar o mundo.

O Core não interpreta regras de um ruleset concreto.

### 9.1 Chat e Campaign Game Log

`ChatMessage` representa exclusivamente diálogo. Rolagens e outros eventos mecânicos não são mensagens de Chat.

O Campaign Game Log recebe fatos estruturados produzidos por capacidades já autorizadas do VTT. Fora de um Encontro, esses fatos existem apenas no realtime. Durante um Encontro, o Core persiste entradas vinculadas a `CampaignEncounter`, preservando snapshots genéricos para consulta histórica após o encerramento.

`CampaignEncounter` é a identidade persistente do agrupamento histórico; tracker, rodada, turno e participantes continuam como estado operacional vivo do Encounter Mode. O Log pode transportar payload opaco de uma engine, mas não interpreta acerto, dano, modificadores ou qualquer regra concreta.

Contrato: `docs/features/campaign-game-log/spec.md`.

Configurações pessoais de Game System podem ser persistidas como namespaces opacos em estruturas genéricas, mas defaults, validação semântica e UI concreta desses namespaces pertencem ao sistema correspondente.

## 10. Game System engines

Uma engine concreta é responsável por seu próprio ruleset.

Pode conhecer:

- atributos e fórmulas;
- classes/ancestries/heranças;
- regras de combate;
- dano e defesa;
- condições;
- spells;
- itens e equipamentos;
- moedas;
- progressão;
- schemas e migrações do próprio sistema;
- conteúdo mecânico e catálogos;
- preferências específicas do próprio sistema.

Não deve conhecer detalhes internos de UI/transporte do VTT como React, JSX, Pixi/Canvas, Socket.IO ou módulos internos do Core.

Referência: ADR-0005.

## 11. Contratos entre VTT e Game System

A integração deve acontecer por contratos agnósticos.

Exemplos conceituais:

- projeções de recursos/indicadores para Token;
- comandos mecânicos;
- resultados de cálculos;
- solicitações de rolagem;
- invalidação/atualização de apresentação;
- metadados de capacidades oferecidas pela engine;
- namespaces opacos de configuração persistidos sem interpretação pelo Core.

O VTT decide **como apresentar/interagir genericamente**; a engine decide **o significado mecânico**.

## 12. Composition Root

O Composition Root é a fronteira autorizada a conhecer a identificação do Game System e selecionar a engine correspondente.

A existência de `Campaign.gameSystem` não deve produzir condicionais de regras espalhadas pelo VTT.

Novos pontos de integração devem ser registrados por interfaces/registries explícitos.

Painéis de configuração específicos de Game System seguem a mesma regra: páginas genéricas delegam a seleção ao composition shell, que monta a implementação concreta adequada ao `GameSystemKey`.

## 13. Realtime

Alterações persistidas relevantes para o estado compartilhado da mesa devem utilizar eventos em tempo real quando o comportamento exigir atualização dos clientes.

Para projeções mecânicas sobre Tokens, polling periódico não é o mecanismo padrão aceito; o fluxo deve usar eventos/invalidação e leitura autenticada quando necessário.

## 14. Segurança

Autenticação, autorização, pertencimento à Campaign, ownership e permissões são responsabilidade do backend.

O frontend não é fronteira de segurança.

Qualquer operação que combine IDs de recursos de Campaign deve validar que esses recursos pertencem ao mesmo mundo quando aplicável.

## 15. Governança de mudanças

Uma feature deve seguir a hierarquia definida em `docs/governance/SOURCE_OF_TRUTH.md`.

Antes de qualquer tarefa de desenvolvimento ou governança produzir Spec, branch ou implementação, um card Trello deve existir e identificar o item no workflow. Essa obrigatoriedade não transforma Trello em fonte canônica de requisitos.

Mudanças estruturais exigem ADR quando alterarem:

- invariantes da Constitution;
- fronteiras entre VTT e Game System;
- ownership/ciclo de vida de entidades fundamentais;
- isolamento por Campaign;
- contratos estruturais entre domínios;
- decisões arquiteturais já aceitas.

ADRs aceitos não são reescritos para apagar histórico. Novas decisões usam `Supersedes` quando substituem decisões anteriores.

Referência: ADR-0006 para a identidade obrigatória de trabalho no Trello.

## 16. AI Agent Tooling

`apps/agents/` é tooling operacional de desenvolvimento e automação. Não pertence ao runtime do VTT, à API de produto, ao frontend do produto nem a uma Game System engine.

Os conceitos são separados:

- `.ai/agents/*.md` define **role**: missão, responsabilidades, limites e formato de saída;
- `apps/agents/src/config/` define **política operacional**, incluindo modelo e reasoning default;
- `apps/agents/src/runtime/` define **como uma execução controlada acontece**;
- Trello representa o **estado operacional do workflow**, sem se tornar fonte canônica de produto/arquitetura.

`.ai/` não é mais área de documentação de produto em migração. Qualquer arquivo ali fora de `.ai/agents/*.md` viola a organização documental e deve ser bloqueado pelo guard correspondente.

Na fase QH-AI-001:

- cada execução usa apenas um role;
- os Agents são read-only/advisory;
- não há handoffs automáticos;
- não há tools de shell, GitHub ou Trello;
- não há autonomia de aprovação ou merge;
- o contexto obrigatório é carregado do repositório antes da execução;
- contexto adicional é explícito e limitado a documentação autorizada;
- `apps/api`, `apps/web` e Game System engines não podem importar `apps/agents`.

A evolução para ferramentas mutáveis, sandboxes, orquestração automática ou gatilhos externos exige Feature Spec e Architecture Review próprios.

## 17. Documentação e mapa do projeto

`docs/PROJECT_MAP.md` é o índice navegacional da estrutura vigente. Ele não altera a hierarquia de autoridade.

Feature Specs e contratos de produto pertencem a `docs/features/`. ADRs pertencem a `docs/architecture/adr/`. A pasta `.ai/` fica restrita às definições de roles.

QH-GOV-009 removeu a documentação de produto legada em `.ai/`, promoveu apenas contratos compatíveis com a arquitetura atual e eliminou documentos contraditórios em vez de arquivá-los defensivamente.

## 18. Dívidas e divergências conhecidas

As divergências detectadas pela Sprint 0 são registradas em `docs/governance/DOCUMENTATION_AUDIT.md`.

QH-ARCH-001 removeu a interpretação de `pathfinder2e.contentLocale` do módulo genérico de Campaign User Settings e adicionou proteção determinística para os pontos corrigidos.

QH-GOV-009 resolveu a dívida de manter documentação autoritativa de produto dentro de `.ai/`.

Ainda requerem tratamento posterior:

- ampliar a cobertura determinística de fronteiras para outros módulos backend ainda não mapeados explicitamente;
- resolver a bridge web explicitamente whitelisted pelo architecture check.
