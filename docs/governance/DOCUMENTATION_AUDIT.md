# Auditoria Inicial de Consistência Documental

Status: **IN PROGRESS**
Data da auditoria inicial: 2026-08-15
Branch analisada: `main`

## Objetivo

Registrar divergências entre documentação, instruções de IA, contratos e implementação antes da introdução de agents autônomos.

Este relatório não decide automaticamente qual lado de uma divergência está correto.

## Resumo

A base atual possui boas proteções parciais — testes, `check:architecture`, CI e um Architecture Guardian — mas a documentação está distribuída entre `docs/`, `.ai/`, `AGENTS.md` e o próprio código sem uma hierarquia formal de autoridade.

## GOV-001 — Modelo de Character divergente

**Severidade:** CRITICAL

`docs/Arquitetura do Sistema.md` e `docs/Objetivo do Sistema.md` descrevem um `Character` global/reutilizável e `CampaignCharacter`.

A arquitetura mais nova em `.ai/architecture.md` afirma explicitamente que essas entidades não existem e define `CampaignMember` + `CampaignActor`.

O schema atual implementa `CampaignMember` e `CampaignActor` e não possui `Character` global.

**Estado:** documentação antiga incompatível com arquitetura e implementação atuais.

**Ação proposta:** substituir a documentação geral antiga por uma arquitetura consolidada e mover/remover os documentos obsoletos.

## GOV-002 — Campaign com ou sem game system

**Severidade:** CRITICAL

`.ai/campaign_creation/specs.md` afirma que `POST /api/campaigns` recebe somente `title`, `description?` e `joinPolicy` e que a campanha nasce sem propriedade de regras.

O schema atual exige `Campaign.gameSystem` e o endpoint atual exige `gameSystem: PATHFINDER_2E`.

**Estado:** decisão de produto/arquitetura não resolvida nesta auditoria.

**Decisão necessária:** uma Campaign deve sempre selecionar um game system, pode não possuir game system, ou deve armazenar apenas uma chave opaca de engine?

**Bloqueio:** nenhum agent deve tentar 'corrigir' documentação ou código até essa decisão ser registrada.

## GOV-003 — `.ai/` mistura conhecimento de produto e comportamento de agents

**Severidade:** HIGH

A pasta `.ai/` atualmente contém:

- arquitetura de produto;
- specs de features/domínios;
- decisões técnicas;
- instruções de agent, como `architecture-guardian/agent.md`.

Isso torna ambíguo se `.ai/` é fonte de verdade do produto ou configuração operacional para IA.

**Ação proposta:** migrar documentação autoritativa do produto para `docs/`; reservar `.ai/` para roles, policies e instruções dos agents.

## GOV-004 — `AGENTS.md` permite decisão autônoma em divergência

**Severidade:** HIGH

O `AGENTS.md` atual instrui a IA a documentar e prosseguir quando uma divergência puder ser resolvida por uma decisão técnica considerada razoável.

Isso é aceitável para detalhes locais e reversíveis, mas perigoso para produto, domínio, contratos e arquitetura.

**Ação proposta:** transformar `AGENTS.md` em roteador de contexto e proibir resolução autônoma de divergências que alterem intenção, fronteiras ou contratos.

## GOV-005 — Configuração concreta de Pathfinder em módulo de Campaign

**Severidade:** HIGH

`apps/api/src/modules/campaigns/routes.ts` contém configuração `pathfinder2e.contentLocale` dentro de `defaultCampaignUserSettings`, schema e merge de preferências.

O Architecture Guardian declara que regras e conceitos de sistemas concretos devem permanecer fora do VTT Core.

**Estado:** candidato a vazamento de fronteira. A configuração pode precisar ser movida para um registro/adapter do game system ou representada por configuração genérica/namespace opaco.

**Ação proposta:** Architecture review antes de alterar.

## GOV-006 — Guard determinístico cobre apenas parte da política declarada

**Severidade:** MEDIUM/HIGH

`scripts/check-game-system-boundaries.mjs` protege imports entre `modules` e `game_systems`, procura termos concretos dentro de `apps/web/src/vtt` e possui uma whitelist explícita para uma bridge existente.

Porém ele não procura identificadores/conceitos concretos de game system dentro de todos os módulos do backend. Por isso GOV-005 não é capturado pelo check atual.

**Ação proposta:** após consolidar a arquitetura, expandir os checks determinísticos para refletir exatamente as fronteiras aceitas.

## GOV-007 — Exceção arquitetural existente sem ADR associado visível

**Severidade:** MEDIUM

O guard contém a whitelist:

`CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal`

O comentário afirma que novas entradas exigem ADR, porém a exceção atual precisa estar ligada a uma decisão/debt record explícita para não virar precedente invisível.

**Ação proposta:** criar ADR/debt record ou remover a bridge durante a Sprint 0, dependendo da arquitetura consolidada.

## GOV-008 — Documentação antiga afirma que o Core não persiste ficha/itens

**Severidade:** HIGH

`docs/Objetivo do Sistema.md` afirma que o núcleo não cria nem persiste fichas mecânicas ou itens.

O schema atual possui armazenamento genérico `CampaignCharacterSheet`, `CampaignCharacterSheetEntry`, `Inventory` e `InventoryEntry`.

Essas estruturas podem continuar agnósticas e ainda assim persistir estado fornecido por um game system. Portanto a formulação antiga não representa o modelo atual.

**Ação proposta:** arquitetura consolidada deve distinguir claramente:

- persistência agnóstica de dados mecânicos opacos;
- interpretação de regras mecânicas, que pertence ao game system.

## Pontos já coerentes

- `CampaignToken.actorId` é opcional no schema.
- `CampaignActor` e `CampaignMember` são entidades distintas.
- `Inventory` é ligado a `CampaignActor`.
- `CampaignCharacterSheet` é ligado a `CampaignActor`.
- existe `npm run check:architecture`.
- existe CI de qualidade e CI específico para fronteiras de game system.
- existe Architecture Guardian documentado.

## Próximas ações da Sprint 0

1. Resolver GOV-002 como decisão explícita.
2. Criar `docs/ARCHITECTURE.md` consolidando somente o estado vigente.
3. Criar os ADRs das decisões arquiteturais fundamentais já aceitas.
4. Reescrever `AGENTS.md` como roteador de contexto.
5. Migrar conhecimento de produto de `.ai/` para `docs/` gradualmente.
6. Criar instruções separadas para BA, Architect, Documentation Auditor, Developer, Reviewer e QA.
7. Expandir checks determinísticos somente depois que as fronteiras forem formalizadas.
8. Integrar esse fluxo ao Trello.
