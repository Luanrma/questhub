# Auditoria de Consistência Documental

Status: **IN PROGRESS**  
Auditoria iniciada em: 2026-08-15  
Base de governança: `main`

## Objetivo

Registrar divergências entre documentação, instruções de IA, contratos e implementação e acompanhar sua resolução sem permitir que um agent escolha silenciosamente qual lado está correto.

## Governança consolidada

Foram criados/consolidados:

- `docs/PROJECT_CONSTITUTION.md`;
- `docs/governance/SOURCE_OF_TRUTH.md`;
- `docs/ARCHITECTURE.md`;
- ADR-0001 a ADR-0005;
- Feature Specs canônicas em `docs/features/`;
- `AGENTS.md` como roteador de contexto e roles;
- BA, Architect, Developer, Code Reviewer, Documentation Auditor e QA como papéis separados;
- workflow Trello com gates explícitos;
- depreciação gradual de documentação de produto legada em `.ai/`.

## GOV-001 — Modelo de Character divergente

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED (documentation governance)**

A documentação antiga descrevia `Character` global/reutilizável e `CampaignCharacter`, enquanto arquitetura e schema atuais usam `CampaignMember` + `CampaignActor`.

### Resolução

- `docs/ARCHITECTURE.md` consolidou o modelo atual;
- ADR-0003 formalizou `CampaignMember` ≠ `CampaignActor`;
- `docs/Arquitetura do Sistema.md` foi marcado como deprecated;
- `docs/Objetivo do Sistema.md` foi alinhado ao modelo atual.

## GOV-002 — Campaign com ou sem Game System

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

### Decisão

Toda Campaign possui obrigatoriamente um Game System selecionado em sua criação.

A identificação do sistema pode ser persistida/transportada para composição, sem permitir que o VTT interprete regras concretas.

### Evidência

- ADR-0001;
- Project Constitution;
- `docs/ARCHITECTURE.md`;
- `docs/features/campaign-creation/spec.md`.

## GOV-003 — `.ai/` mistura conhecimento de produto e comportamento de agents

**Severidade:** HIGH  
**Estado:** **IN PROGRESS**

A pasta `.ai/` ainda contém conhecimento de produto legado.

### Direção aceita

- produto/arquitetura migram para `docs/`;
- `.ai/` converge para roles, policies, prompts e instruções operacionais;
- arquivos legados podem servir como contexto histórico, mas não superam Constitution, ADRs, Architecture ou Feature Specs.

### Progresso adicional

QH-ARCH-001 migrou `campaign_user_settings` para documentação canônica em `docs/features/campaign-user-settings/spec.md` e transformou os antigos arquivos `.ai/campaign_user_settings/*` em redirecionamentos deprecated.

## GOV-004 — `AGENTS.md` permitia decisão autônoma em divergência

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

`AGENTS.md` agora:

- aponta para Constitution, Source of Truth, Architecture, ADR e Feature Specs;
- proíbe resolução autônoma de lacunas de produto/arquitetura;
- permite decisão autônoma apenas para detalhes locais/reversíveis sem impacto estrutural;
- roteia explicitamente BA, Architect, Developer, Code Reviewer, Documentation Auditor e QA para seus arquivos de role.

## GOV-005 — Configuração concreta de Pathfinder em módulo de Campaign

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED IN QH-ARCH-001 — PENDING MERGE**

### Problema original

`apps/api/src/modules/campaigns/routes.ts` interpretava `pathfinder2e.contentLocale` em defaults, schema e merge. A página genérica `CampaignSettingsPage` também importava/renderizava diretamente infraestrutura PF2e.

### Resolução implementada

- o backend genérico conhece apenas namespaces do Core (`dice` e `inventory`);
- namespaces de Game System são persistidos e mesclados como dados opacos;
- validação/default de `pathfinder2e.contentLocale` pertence ao código PF2e;
- `CampaignSettingsPage` delega painéis específicos para `apps/web/src/game-systems/settings-panels.tsx`;
- o composition shell seleciona o painel pelo `GameSystemKey`;
- dados existentes continuam usando o namespace `pathfinder2e`, sem migration de banco;
- testes e architecture check impedem reintrodução do acoplamento nos pontos corrigidos.

### Evidência

- `docs/features/game-system-user-settings-boundary/spec.md`;
- `docs/features/campaign-user-settings/spec.md`;
- ADR-0005;
- PR #51.

## GOV-006 — Guard determinístico cobre apenas parte da política declarada

**Severidade:** MEDIUM/HIGH  
**Estado:** **PARTIALLY RESOLVED / OPEN FOR BROADER COVERAGE**

QH-ARCH-001 ampliou `scripts/check-game-system-boundaries.mjs` para proteger especificamente:

- a página genérica de Campaign Settings;
- o registry de painéis de settings;
- a interpretação de settings específicos dentro das rotas genéricas de Campaign.

Também foram adicionados testes de regressão para o registry e namespaces opacos.

### Trabalho restante

A cobertura determinística de todo o backend ainda não representa integralmente todas as fronteiras declaradas no ADR-0005. Expansões futuras devem ser feitas por domínio, evitando regex global que gere falsos positivos ou exceções informais.

## GOV-007 — Exceção arquitetural existente sem ADR/debt record

**Severidade:** MEDIUM  
**Estado:** **OPEN — ARCHITECTURE DEBT**

O guard contém whitelist para:

`CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal`

### Próxima ação

Auditar a bridge e decidir entre:

- movê-la para Composition Root/registry apropriado; ou
- registrar dívida/exceção temporária com caminho explícito de remoção.

QH-ARCH-001 não altera essa bridge porque ela está fora do escopo da Feature Spec.

## GOV-008 — Documentação antiga dizia que Core não persiste ficha/itens

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED (documentation governance)**

Architecture e Constitution distinguem:

- persistência agnóstica/opaca de `CampaignCharacterSheet`, entries, `Inventory` e entries;
- interpretação mecânica, que pertence ao Game System.

## Esteira de agents validada

QH-ARCH-001 é o primeiro item executado pelos gates formalizados no Trello.

O fluxo já exercitado inclui:

`INBOX -> BA -> ARCHITECTURE -> READY -> DEVELOPMENT -> CODE REVIEW -> DOCUMENTATION AUDIT`

Durante esse fluxo:

- Code Reviewer encontrou defeitos e devolveu a tarefa para Development;
- as correções foram reapresentadas e aprovadas após CI;
- Documentation Auditor detectou documentação canônica desatualizada e bloqueou a progressão para QA;
- esta atualização documental é a correção desse bloqueio.

Isso confirma que os gates não são apenas nomes de colunas: eles podem interromper e devolver trabalho quando a evidência não satisfaz o papel correspondente.

## Pontos coerentes confirmados

- `CampaignToken.actorId` é opcional no schema;
- `CampaignActor` e `CampaignMember` são entidades distintas;
- `Inventory` é ligado a `CampaignActor`;
- `CampaignCharacterSheet` é ligado a `CampaignActor`;
- `Campaign.gameSystem` é obrigatório;
- existe `npm run check:architecture`;
- existem CI de qualidade e CI específico de fronteiras;
- existe Architecture Guardian documentado;
- Campaign User Settings possui contrato canônico e separa namespaces Core de namespaces opacos de Game System.

## Próximas ações de governança

1. concluir QH-ARCH-001 com Documentation Audit, QA e Human Approval;
2. auditar GOV-007 (bridge de Inventory whitelistada);
3. ampliar o enforcement de ADR-0005 por domínio conforme novas fronteiras forem consolidadas;
4. continuar migrando documentação de produto remanescente em `.ai/` para `docs/`;
5. automatizar gradualmente a orquestração Trello/GitHub mantendo os gates e autoridade humana.
