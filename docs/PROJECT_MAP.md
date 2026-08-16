# QuestHub — Project Map

Status: **CURRENT**  
Última consolidação: 2026-08-16

Este arquivo é um **mapa de navegação**, não uma fonte superior de requisitos ou arquitetura. Em caso de divergência, siga `docs/governance/SOURCE_OF_TRUTH.md`.

## 1. Antes de qualquer tarefa

Classifique a rastreabilidade conforme ADR-0007:

- trabalho funcional/arquitetural/executável -> card Trello `QH-*` e gates aplicáveis;
- manutenção estritamente documental/organizacional -> pode usar `NO-CARD` com justificativa.

Se um trabalho `NO-CARD` crescer para um escopo funcional ou arquitetural de produto, pare antes da expansão e crie o card.

Fluxo governado quando há card:

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

Trello representa workflow/status e identidade operacional quando aplicável. Requisitos e decisões permanecem no repositório.

## 2. Ordem de leitura obrigatória

1. `docs/PROJECT_CONSTITUTION.md`
2. `docs/governance/SOURCE_OF_TRUTH.md`
3. `docs/ARCHITECTURE.md`
4. `docs/architecture/adr/`
5. Feature Spec aplicável em `docs/features/`
6. contratos executáveis e código

## 3. Estrutura principal

### Produto

- `apps/api/` — backend Fastify, Socket.IO, Prisma/PostgreSQL.
- `apps/web/` — frontend React/Vite e VTT.
- `apps/api/src/game_systems/` — engines/adaptadores de Game Systems.
- `apps/web/src/game-systems/` — composition shell/registries de Game Systems.

### AI tooling

- `apps/agents/` — runtime controlado dos Agents.
- `.ai/agents/` — único conteúdo permitido dentro de `.ai/`.

### Persistência e qualidade

- `apps/api/prisma/` — schema, migrations e invariantes.
- `scripts/` — guards/tooling.
- `.github/workflows/` — CI.

### Documentação

- `docs/PROJECT_CONSTITUTION.md` — Constituição.
- `docs/ARCHITECTURE.md` — arquitetura atual.
- `docs/architecture/adr/` — ADRs.
- `docs/features/` — features genéricas e integrações.
- `docs/features/game-system/` — documentação agrupada por Game System concreto.
- `docs/governance/` — Source of Truth e auditorias.

## 4. VTT Core e Campaign

Consulte ADR-0001 a ADR-0005 e as features genéricas em `docs/features/`, incluindo:

- `authentication/`
- `assets/`
- `campaign-creation/`
- `campaign-actor/`
- `campaign-presence/`
- `campaign-session/`
- `campaign-scene/`
- `campaign-diary/`
- `campaign-user-settings/`
- `chat/`
- `combat/`
- `fog-of-war/`
- `area-effect/`
- `inventory/`
- `vtt/`
- `character-sheet-entries/`

## 5. Game System boundary e integrações genéricas

Contratos que não pertencem a um sistema específico permanecem diretamente em `docs/features/`, por exemplo:

- `docs/features/game-system-catalog-integration/`
- `docs/features/game-system-user-settings-boundary/`
- `docs/features/character-sheet-entries/`

O VTT pode persistir/transportar dados mecânicos opacos e selecionar uma engine por `Campaign.gameSystem`, mas não interpreta regras concretas.

## 6. Game Systems concretos

A documentação específica de cada sistema fica agrupada por sistema:

```text
docs/features/game-system/
  pathfinder-2e/
    character-options/
    character-spells/
    content-catalog/
    currency/
    encounter-actions/
    equipment/
  dnd-5e/                 # futuro, quando existir documentação aprovada
  <outro-game-system>/    # futuro
```

Pathfinder 2e é o primeiro Game System concreto, não uma dependência conceitual do VTT Core.

A antiga Spec de ficha baseada em `Character`/`CharacterSheet` globais não foi promovida porque conflita com `CampaignActor -> CampaignCharacterSheet`.

## 7. Agents

Roles ficam em `.ai/agents/`. Runtime fica em `apps/agents/`. O runtime atual é read-only/advisory.

## 8. Guards e qualidade

- `scripts/check-game-system-boundaries.mjs`
- `scripts/check-agent-runtime-boundaries.mjs`
- `scripts/check-documentation-governance.mjs`

Comandos principais:

```text
npm run check:documentation-governance
npm run check:architecture
npm run test:unit
npm run test:agents
npm run build:agents
npm run build:web
```

## 9. Regra para documentação nova

- feature genérica -> `docs/features/<feature>/`;
- feature específica de sistema -> `docs/features/game-system/<game-system>/<feature>/`;
- decisão arquitetural -> `docs/architecture/adr/`;
- arquitetura consolidada -> `docs/ARCHITECTURE.md`;
- governança -> `docs/governance/` e, quando for invariante, Constitution/ADR;
- role -> `.ai/agents/`;
- tooling de Agent -> `apps/agents/`;
- documento obsoleto sem valor histórico -> remover;
- documento histórico necessário -> `docs/archive/` com `DEPRECATED`.

Não recrie a antiga estrutura `.ai/<feature>/readme.md|skills.md|specs.md`.
