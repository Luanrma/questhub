# QuestHub — Project Map

Status: **CURRENT**  
Última consolidação: 2026-08-16

Este arquivo é um **mapa de navegação**, não uma fonte superior de requisitos ou arquitetura. Em caso de divergência, siga `docs/governance/SOURCE_OF_TRUTH.md`.

## 1. Antes de qualquer tarefa

Toda tarefa de desenvolvimento ou governança precisa possuir um card Trello **antes** de criar/alterar Spec, branch, implementação ou documentação de entrega.

Fluxo operacional:

```text
INBOX
  -> BA / REFINEMENT
  -> ARCHITECTURE REVIEW
  -> READY
  -> DEVELOPMENT
  -> CODE REVIEW
  -> DOCUMENTATION AUDIT
  -> QA
  -> HUMAN APPROVAL
  -> DONE
```

O card representa identidade, prioridade e estado. Requisitos e decisões permanecem no repositório.

Referência: `ADR-0006-mandatory-trello-work-item.md`.

## 2. Ordem de leitura obrigatória

1. `docs/PROJECT_CONSTITUTION.md` — invariantes estáveis do projeto.
2. `docs/governance/SOURCE_OF_TRUTH.md` — hierarquia de autoridade e protocolo de divergência.
3. `docs/ARCHITECTURE.md` — arquitetura atual consolidada.
4. `docs/architecture/adr/` — decisões arquiteturais aceitas.
5. `docs/features/<feature>/spec.md` — comportamento esperado de cada feature.
6. contratos executáveis e código — realidade implementada/verificável.

`docs/Objetivo do Sistema.md` é uma visão resumida do produto e permanece subordinada às fontes acima.

## 3. Estrutura principal do repositório

### Produto

- `apps/api/` — backend Fastify, Socket.IO, Prisma/PostgreSQL e composição HTTP.
- `apps/web/` — frontend React/Vite e VTT.
- `apps/api/src/game_systems/` — engines/adaptadores de Game Systems e contratos relacionados conforme a arquitetura vigente.
- `apps/web/src/game-systems/` — composition shell/registries de renderers e capacidades específicas de Game System.

### AI tooling

- `apps/agents/` — runtime controlado dos Agents.
- `.ai/agents/` — **único conteúdo permitido dentro de `.ai/`**; define roles, não produto.

### Persistência e qualidade

- `apps/api/prisma/` — schema, migrations e invariantes de banco.
- `scripts/` — checks arquiteturais, tooling e utilitários versionados.
- `.github/workflows/` — CI.

### Documentação

- `docs/PROJECT_CONSTITUTION.md` — Constituição.
- `docs/ARCHITECTURE.md` — arquitetura canônica atual.
- `docs/architecture/adr/` — ADRs.
- `docs/features/` — Feature Specs e documentos auxiliares de features.
- `docs/governance/` — Source of Truth, auditorias e governança.
- `docs/PROJECT_MAP.md` — este mapa.

## 4. VTT Core e mundo da Campaign

Fontes principais:

- `docs/ARCHITECTURE.md`
- ADR-0001 — Campaign exige Game System.
- ADR-0002 — Campaign é a fronteira de isolamento.
- ADR-0003 — CampaignMember e CampaignActor são conceitos distintos.
- ADR-0004 — Token e Actor possuem ciclos de vida independentes.
- ADR-0005 — fronteira VTT/Game System.

Features/documentos de apoio atuais incluem:

- `docs/features/authentication/`
- `docs/features/assets/`
- `docs/features/campaign-creation/`
- `docs/features/campaign-actor/`
- `docs/features/campaign-presence/`
- `docs/features/campaign-session/`
- `docs/features/campaign-scene/`
- `docs/features/campaign-diary/`
- `docs/features/campaign-user-settings/`
- `docs/features/chat/`
- `docs/features/combat/`
- `docs/features/fog-of-war/`
- `docs/features/area-effect/`
- `docs/features/inventory/`
- `docs/features/vtt/`
- `docs/features/character-sheet-entries/`

## 5. Game System boundary e integração

O VTT pode persistir/transportar dados mecânicos opacos e selecionar uma engine por `Campaign.gameSystem`, mas não interpreta regras concretas.

Consulte:

- `ADR-0005-vtt-game-system-boundary.md`
- `docs/ARCHITECTURE.md`, seções Game System/Composition Root/contratos
- `docs/features/game-system-catalog-integration/`
- `docs/features/game-system-user-settings-boundary/`
- `docs/features/character-sheet-entries/`
- `scripts/check-game-system-boundaries.mjs`

## 6. Pathfinder 2e

Pathfinder 2e é o primeiro Game System concreto, não uma dependência conceitual do VTT Core.

Specs/documentos promovidos e ainda compatíveis com a arquitetura vigente:

- `docs/features/pathfinder-2e-character-options/`
- `docs/features/pathfinder-2e-character-spells/`
- `docs/features/pathfinder-2e-content-catalog/`
- `docs/features/pathfinder-2e-currency/`
- `docs/features/pathfinder-2e-encounter-actions/`
- `docs/features/pathfinder-2e-equipment/`

A antiga Spec de ficha baseada em `Character`/`CharacterSheet` globais **não foi promovida**, pois conflita com a arquitetura atual baseada em `CampaignActor -> CampaignCharacterSheet`.

## 7. Agents e workflow

Roles:

- `.ai/agents/ba.md`
- `.ai/agents/architect.md`
- `.ai/agents/developer.md`
- `.ai/agents/code-reviewer.md`
- `.ai/agents/documentation-auditor.md`
- `.ai/agents/qa.md`

Runtime:

- `apps/agents/src/roles/` — registry de roles.
- `apps/agents/src/config/` — política de modelos.
- `apps/agents/src/runtime/` — execução controlada.
- `docs/features/ai-agent-runtime/spec.md` — escopo/contratos do runtime atual.

O runtime atual é read-only/advisory. O workflow do Trello não é automaticamente delegado a esses Agents.

## 8. Guards e qualidade

Checks estruturais:

- `scripts/check-game-system-boundaries.mjs`
- `scripts/check-agent-runtime-boundaries.mjs`
- `scripts/check-documentation-governance.mjs`

Comandos:

```text
npm run check:documentation-governance
npm run check:architecture
npm run test:unit
npm run test:agents
npm run build:agents
npm run build:web
```

`check:documentation-governance` impede que `.ai/` volte a receber Specs, arquitetura, prompts de execução ou outros arquivos fora de `.ai/agents/*.md`.

## 9. Regra para documentação nova

- requisito/feature -> `docs/features/`;
- decisão arquitetural -> `docs/architecture/adr/`;
- arquitetura consolidada -> `docs/ARCHITECTURE.md`;
- regra de autoridade/processo -> `docs/governance/` e, quando for invariante, Constitution/ADR;
- role de Agent -> `.ai/agents/`;
- tooling de Agent -> `apps/agents/`;
- documento obsoleto sem valor histórico necessário -> remover;
- documento histórico realmente necessário -> `docs/archive/` com `DEPRECATED` explícito.

Não recrie a antiga estrutura `.ai/<feature>/readme.md|skills.md|specs.md`.
