# Auditoria de Consistência Documental

Status: **IN PROGRESS**  
Auditoria iniciada em: 2026-08-15  
Última consolidação: 2026-08-16

## Objetivo

Registrar divergências entre documentação, instruções de IA, contratos e implementação e acompanhar sua resolução sem permitir que um agent escolha silenciosamente qual lado está correto.

## Governança consolidada

Fontes e controles vigentes:

- `docs/PROJECT_CONSTITUTION.md`;
- `docs/governance/SOURCE_OF_TRUTH.md`;
- `docs/ARCHITECTURE.md`;
- `docs/PROJECT_MAP.md`;
- ADR-0001 a ADR-0006;
- Feature Specs em `docs/features/`;
- `AGENTS.md` como roteador de contexto/processo;
- BA, Architect, Developer, Code Reviewer, Documentation Auditor e QA como roles separados;
- Trello com gates explícitos e card obrigatório antes do início de qualquer tarefa de desenvolvimento/governança;
- `.ai/` restrita a `.ai/agents/*.md`;
- runtime read-only/advisory dos Agents em `apps/agents/`;
- guards determinísticos de fronteira arquitetural, Agent runtime e governança documental.

## GOV-001 — Modelo de Character divergente

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

A documentação antiga descrevia `Character` global/reutilizável e `CampaignCharacter`, enquanto a arquitetura vigente usa `CampaignMember` + `CampaignActor`, com `CampaignCharacterSheet` associado ao Actor.

### Resolução

- `docs/ARCHITECTURE.md` consolida o modelo atual;
- ADR-0003 formaliza `CampaignMember` ≠ `CampaignActor`;
- ADR-0004 formaliza a independência Token/Actor;
- `docs/Objetivo do Sistema.md` está alinhado ao modelo atual;
- o tombstone `docs/Arquitetura do Sistema.md` foi removido em QH-GOV-009 porque o histórico já existe no Git;
- Specs legadas que ainda dependiam do agregado global `Character` não foram promovidas durante a consolidação da antiga `.ai/`.

## GOV-002 — Campaign com ou sem Game System

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

Toda Campaign possui obrigatoriamente um Game System selecionado em sua criação. A identificação do sistema pode ser persistida/transportada para composição, sem permitir que o VTT interprete regras concretas.

### Evidência

- ADR-0001;
- Project Constitution;
- `docs/ARCHITECTURE.md`;
- `docs/features/campaign-creation/spec.md`.

## GOV-003 — `.ai/` mistura conhecimento de produto e comportamento de agents

**Severidade:** HIGH  
**Estado:** **RESOLVED BY QH-GOV-009 — PENDING MERGE**

### Problema original

`.ai/` acumulava Feature Specs, READMEs, prompts, arquitetura, documentação operacional e roles de Agents. Parte desse conteúdo já contradizia Constitution/ADRs/Architecture, enquanto outra parte ainda continha contratos úteis sem equivalente em `docs/`.

### Resolução implementada

QH-GOV-009:

- substituiu a árvore `.ai/` por uma árvore contendo somente `.ai/agents/`;
- promoveu para `docs/features/` apenas contratos avaliados como compatíveis com a arquitetura vigente;
- removeu, sem archive defensivo, documentos contraditórios ou redundantes;
- removeu Specs antigas que usavam `Character`/`CharacterSheet` globais ou ficha diretamente na Campaign;
- promoveu a arquitetura atual de Token para `docs/features/vtt/token-architecture.md`;
- adicionou notas de migração ao lado de contratos grandes que preservam referências literais históricas;
- criou `docs/PROJECT_MAP.md`;
- criou `scripts/check-documentation-governance.mjs` e integrou o check a `check:architecture` e ao workflow Quality;
- tornou `.ai/agents/*.md` o único formato permitido sob `.ai/`.

## GOV-004 — `AGENTS.md` permitia decisão autônoma em divergência

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

`AGENTS.md`:

- aponta para Constitution, Source of Truth, Architecture, ADR e Feature Specs;
- proíbe resolução autônoma de lacunas de produto/arquitetura;
- permite decisão autônoma apenas para detalhes locais/reversíveis sem impacto estrutural;
- roteia BA, Architect, Developer, Code Reviewer, Documentation Auditor e QA;
- exige card Trello antes de qualquer tarefa de desenvolvimento/governança.

## GOV-005 — Configuração concreta de Pathfinder em módulo de Campaign

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED — MERGED IN QH-ARCH-001 / PR #51**

### Resolução

- backend genérico conhece apenas namespaces Core;
- namespaces de Game System são persistidos como dados opacos;
- defaults/validação semântica PF2e pertencem ao sistema;
- `CampaignSettingsPage` delega painéis específicos ao composition shell;
- testes e architecture checks protegem os pontos corrigidos.

### Evidência

- `docs/features/game-system-user-settings-boundary/spec.md`;
- `docs/features/campaign-user-settings/spec.md`;
- ADR-0005;
- PR #51 mesclada.

## GOV-006 — Guard determinístico cobre apenas parte da política declarada

**Severidade:** MEDIUM/HIGH  
**Estado:** **PARTIALLY RESOLVED / OPEN FOR BROADER COVERAGE**

Cobertura existente:

- `scripts/check-game-system-boundaries.mjs` protege fronteiras VTT/Game System selecionadas;
- `scripts/check-agent-runtime-boundaries.mjs` protege o tooling de Agents;
- QH-GOV-009 adiciona `scripts/check-documentation-governance.mjs` para a organização documental e rastreabilidade versionada do work item.

### Trabalho restante

A cobertura determinística de todo o backend ainda não representa integralmente todas as fronteiras declaradas no ADR-0005. Expansões futuras devem ser feitas por domínio, evitando regex global com exceções informais.

## GOV-007 — Exceção arquitetural existente sem ADR/debt record

**Severidade:** MEDIUM  
**Estado:** **OPEN — ARCHITECTURE DEBT**

O guard contém whitelist para:

`CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal`

### Próxima ação

Auditar a bridge e decidir entre:

- movê-la para Composition Root/registry apropriado; ou
- registrar dívida/exceção temporária com caminho explícito de remoção.

## GOV-008 — Documentação antiga dizia que Core não persiste ficha/itens

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

Architecture e Constitution distinguem:

- persistência agnóstica/opaca de `CampaignCharacterSheet`, entries, `Inventory` e entries;
- interpretação mecânica, que pertence ao Game System.

## QH-AI-001 — Runtime operacional dos Agents

**Estado documental:** **CONSISTENT — MERGED IN PR #52**

A Feature Spec `docs/features/ai-agent-runtime/spec.md`, a implementação e `docs/ARCHITECTURE.md` estabelecem consistentemente:

- `apps/agents/` como tooling operacional separado do runtime do produto;
- `.ai/agents/*.md` como definição de role, sem seleção de modelo;
- Model Policy centralizada e sobrescrevível por ambiente;
- um role por execução;
- contexto obrigatório de governança carregado pelo runtime;
- contexto adicional explícito e limitado a Markdown autorizado;
- execução read-only/advisory;
- ausência de tools, handoffs, shell, GitHub/Trello writes e autonomia de merge;
- tracing sem payload sensível;
- `maxTurns` explícito;
- CI cobrindo boundary guard, testes e typecheck sem chamada real à API.

## QH-GOV-009 — Consolidação documental e rastreabilidade Trello

**Estado documental:** **DOCUMENTATION AUDIT PASS — PENDING QA / HUMAN APPROVAL**

Card: `QH-GOV-009`  
Spec: `docs/features/governance-doc-consolidation/spec.md`  
ADR: `docs/architecture/adr/ADR-0006-mandatory-trello-work-item.md`  
PR: `#53`

### Decisões consolidadas

- toda tarefa de desenvolvimento/governança possui card Trello antes de Spec, branch ou implementação;
- Trello é identidade operacional/workflow, não fonte canônica de requisito;
- commits usam um identificador concreto `QH-*`;
- PRs usam exatamente um identificador concreto no título e repetem o mesmo ID no corpo;
- quando o PR referencia uma Feature Spec, o guard exige o mesmo card na Spec;
- CI não recebe credenciais Trello para provar existência remota do card;
- a existência remota é pré-condição operacional; a rastreabilidade verificável no repo/PR é protegida por guard;
- `.ai/` contém apenas roles e symlinks são rejeitados;
- documentação de produto pertence a `docs/`;
- remoção é preferida a archive quando um documento contraditório não possui valor histórico necessário.

### Classificação relevante da antiga `.ai/`

Removidos por drift/obsolescência, entre outros:

- propósito antigo que permitia Campaign sem Game System;
- documentação Prisma antiga com invariantes superadas;
- Trade baseado em `CampaignCharacter`;
- Game System Runtime antigo baseado em `Character` global;
- ficha PF2e V3 baseada em `Character`/`CharacterSheet` globais;
- prompts/skills/readmes redundantes;
- duplicatas de features já canônicas.

Promovidos seletivamente:

- contratos atuais de Campaign/VTT/Inventory/Area Effect/Fog/Chat/Combat e domínios relacionados;
- contrato genérico `CampaignCharacterSheetEntry`;
- PF2e currency, equipment, character spells/options, encounter actions e content catalog;
- arquitetura de Token atual.

Contratos grandes preservados com referências históricas literais possuem notas `MIGRATION.md` no domínio correspondente para resolver o caminho atual sem reintroduzir a árvore antiga.

### Gate de Documentation Audit

**PASS.** Foram comparados Constitution, ADR-0006, Source of Truth, Architecture, Feature Spec, Project Map, AGENTS, PR/template e guard.

Confirmado:

- nenhuma fonte eleva Trello acima da hierarquia canônica;
- todas descrevem a pré-condição obrigatória de card de forma compatível;
- o guard executa enforcement determinístico sem introduzir credencial Trello;
- o Code Review corrigiu a lacuna de placeholder/identidade e o bypass por symlink antes deste gate;
- GOV-006 e GOV-007 permanecem explicitamente abertos e não foram silenciosamente declarados resolvidos;
- não há mudança de schema, contrato HTTP/realtime ou comportamento funcional atribuída a QH-GOV-009.

## Pontos coerentes confirmados

- `CampaignToken.actorId` é opcional;
- `CampaignActor` e `CampaignMember` são entidades distintas;
- `Inventory` é ligado a `CampaignActor`;
- `CampaignCharacterSheet` é ligado a `CampaignActor`;
- `Campaign.gameSystem` é obrigatório;
- `npm run check:architecture` existe e agrega guards;
- existe CI de qualidade e CI específico de fronteiras;
- Campaign User Settings separa namespaces Core de namespaces opacos de Game System;
- `apps/agents` está isolado de API/web/Game Systems;
- modelos não fazem parte da identidade textual dos roles;
- `.ai/` contém somente `.ai/agents/` no branch de QH-GOV-009;
- `docs/PROJECT_MAP.md` fornece navegação sem alterar a hierarquia de autoridade.

## Próximas ações de governança

1. concluir QA e Human Approval de QH-GOV-009;
2. auditar GOV-007 (bridge de Inventory whitelistada);
3. ampliar enforcement de ADR-0005 por domínio conforme novas fronteiras forem consolidadas;
4. evoluir orquestração/Trello/GitHub dos Agents somente em entregas separadas e governadas.
