# Auditoria Inicial de Consistência Documental

Status: **IN PROGRESS**  
Data da auditoria inicial: 2026-08-15  
Branch base analisada: `main`

## Objetivo

Registrar divergências entre documentação, instruções de IA, contratos e implementação antes da introdução de agents autônomos.

A auditoria não autoriza um agent a escolher silenciosamente qual lado de uma divergência está correto.

## Estado após primeira rodada da Sprint 0

Foram criados/consolidados:

- `docs/PROJECT_CONSTITUTION.md`;
- `docs/governance/SOURCE_OF_TRUTH.md`;
- `docs/ARCHITECTURE.md`;
- ADR-0001 a ADR-0005;
- `docs/features/campaign-creation/spec.md`;
- `AGENTS.md` como roteador de contexto;
- depreciação explícita da documentação antiga de arquitetura;
- atualização de `docs/Objetivo do Sistema.md`;
- depreciação da antiga documentação `.ai/campaign_creation/*`.

## GOV-001 — Modelo de Character divergente

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED (documentation governance)**

A documentação antiga descrevia `Character` global/reutilizável e `CampaignCharacter`, enquanto arquitetura e schema atuais usam `CampaignMember` + `CampaignActor`.

### Resolução

- `docs/ARCHITECTURE.md` consolidou o modelo atual;
- ADR-0003 formalizou `CampaignMember` ≠ `CampaignActor`;
- `docs/Arquitetura do Sistema.md` foi marcado como deprecated;
- `docs/Objetivo do Sistema.md` foi alinhado ao modelo atual.

Não houve alteração de código nesta Sprint para resolver este item.

## GOV-002 — Campaign com ou sem Game System

**Severidade inicial:** CRITICAL  
**Estado:** **RESOLVED**

### Decisão

Toda Campaign deve possuir obrigatoriamente um Game System selecionado em sua criação.

A identificação do sistema pode ser persistida/transportada para composição, sem permitir que o VTT interprete regras concretas.

### Evidência

- decisão registrada em ADR-0001;
- Project Constitution atualizada;
- `docs/ARCHITECTURE.md` consolidado;
- `docs/features/campaign-creation/spec.md` criado;
- `.ai/campaign_creation/*` deixou de ser fonte canônica.

## GOV-003 — `.ai/` mistura conhecimento de produto e comportamento de agents

**Severidade:** HIGH  
**Estado:** **IN PROGRESS**

A pasta `.ai/` ainda contém grande quantidade de specs e conhecimento de produto legado.

### Direção aceita

- produto/arquitetura migram para `docs/`;
- `.ai/` converge para roles, policies, prompts e instruções operacionais;
- `AGENTS.md` agora declara documentos `.ai/` legados como contexto histórico, não como autoridade superior.

### Trabalho restante

Migrar os domínios gradualmente, evitando uma reescrita massiva sem auditoria contra código.

## GOV-004 — `AGENTS.md` permitia decisão autônoma em divergência

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED**

`AGENTS.md` foi reduzido ao papel de roteador e agora:

- aponta para Constitution, Source of Truth, Architecture, ADR e Feature Specs;
- proíbe resolução autônoma de lacunas de produto/arquitetura;
- permite decisão autônoma apenas para detalhes locais, reversíveis e sem impacto em contrato/comportamento/arquitetura.

## GOV-005 — Configuração concreta de Pathfinder em módulo de Campaign

**Severidade:** HIGH  
**Estado:** **OPEN — ARCHITECTURE DEBT**

`apps/api/src/modules/campaigns/routes.ts` contém configuração `pathfinder2e.contentLocale` dentro de `defaultCampaignUserSettings`, schema e merge de preferências.

ADR-0005 estabelece que módulos genéricos do VTT não devem incorporar conceitos/configurações concretos de ruleset como parte de sua lógica.

### Próxima ação

Criar tarefa arquitetural específica para decidir/migrar preferências namespaced de Game System para registry/adapter ou outro contrato agnóstico.

Não alterar durante a Sprint 0 documental sem Spec/ADR técnico apropriado.

## GOV-006 — Guard determinístico cobre apenas parte da política declarada

**Severidade:** MEDIUM/HIGH  
**Estado:** **OPEN — ENFORCEMENT GAP**

`scripts/check-game-system-boundaries.mjs` protege imports entre `modules` e `game_systems` e procura conceitos concretos em partes do frontend, mas não captura todo vazamento equivalente no backend.

### Próxima ação

Após fechar as regras de namespacing/composition necessárias para GOV-005, expandir `check:architecture` e CI para refletir a política aceita.

## GOV-007 — Exceção arquitetural existente sem ADR/debt record

**Severidade:** MEDIUM  
**Estado:** **OPEN — ARCHITECTURE DEBT**

O guard contém whitelist para:

`CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal`

O comentário no próprio check afirma que novas entradas não devem ser adicionadas sem decisão arquitetural, mas a exceção existente ainda precisa de registro explícito ou remoção.

### Próxima ação

Auditar a bridge e decidir entre:

- movê-la para Composition Root/registry apropriado; ou
- registrar dívida/exceção temporária com caminho de remoção.

## GOV-008 — Documentação antiga dizia que Core não persiste ficha/itens

**Severidade inicial:** HIGH  
**Estado:** **RESOLVED (documentation governance)**

A formulação antiga confundia persistência com interpretação de regras.

### Resolução

Architecture e Constitution agora distinguem explicitamente:

- persistência agnóstica/opaca de `CampaignCharacterSheet`, entries, `Inventory` e entries;
- interpretação mecânica, que pertence ao Game System.

## Pontos coerentes confirmados

- `CampaignToken.actorId` é opcional no schema;
- `CampaignActor` e `CampaignMember` são entidades distintas;
- `Inventory` é ligado a `CampaignActor`;
- `CampaignCharacterSheet` é ligado a `CampaignActor`;
- `Campaign.gameSystem` é obrigatório;
- existe `npm run check:architecture`;
- existem CI de qualidade e CI específico de fronteiras;
- existe Architecture Guardian documentado.

## Próximas ações da Sprint 0

1. criar templates de Feature Spec e ADR;
2. criar template de Pull Request com gates de documentação/arquitetura/testes;
3. definir roles iniciais de BA, Architect e Documentation Auditor;
4. auditar e migrar os próximos documentos `.ai/` por domínio, sem migração cega;
5. criar cards separados para GOV-005, GOV-006 e GOV-007;
6. estruturar o Trello com Definition of Ready e Definition of Done;
7. somente depois iniciar Developer/Reviewer/QA agents autônomos.
