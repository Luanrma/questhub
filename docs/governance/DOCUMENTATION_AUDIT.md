# Auditoria de Consistência Documental

Status: **IN PROGRESS**  
Auditoria iniciada em: 2026-08-15  
Última consolidação: 2026-08-16

## Objetivo

Registrar divergências entre documentação, contratos e implementação sem permitir que um agent escolha silenciosamente qual lado está correto.

## Governança consolidada

Fontes e controles vigentes:

- `docs/PROJECT_CONSTITUTION.md`;
- `docs/governance/SOURCE_OF_TRUTH.md`;
- `docs/ARCHITECTURE.md`;
- `docs/PROJECT_MAP.md`;
- ADR-0001 a ADR-0007, observando o status de cada ADR;
- Feature Specs em `docs/features/`;
- documentação de sistemas concretos em `docs/features/game-system/<game-system>/`;
- `AGENTS.md` como roteador de contexto/processo;
- `.ai/` restrita a `.ai/agents/*.md`;
- runtime read-only/advisory dos Agents em `apps/agents/`;
- guards determinísticos de fronteira arquitetural, Agent runtime e governança documental.

Rastreabilidade vigente: ADR-0007. Card Trello é obrigatório para trabalho funcional/arquitetural/executável; manutenção estritamente documental/organizacional pode declarar `NO-CARD`.

## GOV-001 — Modelo de Character divergente

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

A arquitetura vigente usa `CampaignMember` + `CampaignActor`, com ficha/inventário associados ao Actor. Não existem agregados globais `Character`/`CampaignCharacter` como fonte atual do mundo da Campaign.

## GOV-002 — Campaign com ou sem Game System

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

Toda Campaign possui obrigatoriamente um Game System. Evidência: ADR-0001, Constitution, Architecture e `docs/features/campaign-creation/spec.md`.

## GOV-003 — `.ai/` misturava produto e comportamento de agents

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED — MERGED IN QH-GOV-009 / PR #53**

QH-GOV-009 removeu documentação de produto da `.ai/`, promoveu contratos compatíveis para `docs/`, eliminou drift conhecido, criou `docs/PROJECT_MAP.md` e adicionou `scripts/check-documentation-governance.mjs`.

A `.ai/` atual aceita somente `.ai/agents/*.md` e rejeita symlinks.

## GOV-004 — `AGENTS.md` e autonomia em divergência

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

`AGENTS.md` aponta para as fontes canônicas, aplica `CONSISTENCY: BLOCKED` em conflitos e classifica a rastreabilidade antes do trabalho conforme ADR-0007.

## GOV-005 — Configuração concreta de Pathfinder em módulo de Campaign

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED — MERGED IN QH-ARCH-001 / PR #51**

Backend genérico persiste namespaces de Game System como dados opacos e a UI genérica delega painéis específicos ao composition shell.

## GOV-006 — Guard determinístico cobre apenas parte da política arquitetural

**Severidade:** MEDIUM/HIGH  
**Estado:** **PARTIALLY RESOLVED / OPEN FOR BROADER COVERAGE**

Cobertura atual:

- `scripts/check-game-system-boundaries.mjs`;
- `scripts/check-agent-runtime-boundaries.mjs`;
- `scripts/check-documentation-governance.mjs`.

A cobertura de todo o backend ainda não representa integralmente todas as fronteiras do ADR-0005. Expansões devem continuar por domínio, evitando regex global com exceções informais.

## GOV-007 — Bridge de Inventory whitelistada

**Severidade:** MEDIUM  
**Estado:** **OPEN — ARCHITECTURE DEBT**

Permanece a necessidade de auditar a bridge `CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal` e decidir entre Composition Root apropriado ou dívida/exceção formal com caminho de remoção.

## GOV-008 — Persistência agnóstica de ficha/itens

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

Architecture e Constitution distinguem persistência agnóstica/opaca de interpretação mecânica, que pertence ao Game System.

## QH-AI-001 — Runtime operacional dos Agents

**Estado documental:** **CONSISTENT — MERGED IN PR #52**

`apps/agents/` permanece tooling separado do runtime do produto, read-only/advisory, sem tools/handoffs/shell/GitHub/Trello writes e sem autonomia de merge.

## QH-GOV-009 — Consolidação documental

**Estado documental:** **MERGED IN PR #53**

QH-GOV-009 consolidou a antiga `.ai/` e introduziu ADR-0006, que naquele momento tornou card Trello universalmente obrigatório.

Essa parte da decisão foi posteriormente considerada excessiva para manutenção documental pequena. O histórico de QH-GOV-009 continua válido, mas a política universal do ADR-0006 foi **SUPERSEDED** pelo ADR-0007.

## Correção pós-QH-GOV-009 — hierarquia de Game Systems e Trello proporcional

**Modo:** `NO-CARD`  
**Motivo:** manutenção documental/organizacional sem mudança funcional do produto, schema, contratos, segurança ou mecânicas.

Decisões atuais:

- documentação específica de sistema fica sob `docs/features/game-system/<game-system>/`;
- Pathfinder 2e fica sob `docs/features/game-system/pathfinder-2e/`;
- domínios PF2e atuais: `character-options`, `character-spells`, `content-catalog`, `currency`, `encounter-actions` e `equipment`;
- futuros sistemas devem ser irmãos de `pathfinder-2e`, por exemplo `dnd-5e` quando existir documentação aprovada;
- integrações genéricas de Game System continuam diretamente em `docs/features/`;
- ADR-0007 substitui a obrigatoriedade universal do ADR-0006;
- `NO-CARD` é permitido somente para manutenção não funcional dentro dos caminhos permitidos pelo guard;
- mudanças executáveis/funcionais continuam exigindo card `QH-*`;
- PRs `NO-CARD` precisam declarar o modo e justificar sua classificação;
- Human Approval continua obrigatória antes do merge.

## Pontos coerentes confirmados

- `CampaignToken.actorId` é opcional;
- `CampaignActor` e `CampaignMember` são entidades distintas;
- `Inventory` e `CampaignCharacterSheet` pertencem ao Actor da Campaign;
- `Campaign.gameSystem` é obrigatório;
- `apps/agents` permanece isolado de API/web/Game Systems;
- `.ai/` contém somente roles;
- documentação PF2e não fica mais espalhada por pastas `pathfinder-2e-*` na raiz de `docs/features/`;
- Trello continua abaixo das fontes versionadas na hierarquia de autoridade.

## Próximas ações de governança

1. auditar GOV-007;
2. ampliar enforcement do ADR-0005 por domínio;
3. evoluir orquestração/Trello/GitHub dos Agents somente em entregas separadas e governadas quando envolver comportamento executável.
