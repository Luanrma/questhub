# QH-ARCH-001 — Isolar configurações específicas de Game System

Status: **READY**

## Objetivo

Remover conhecimento específico de Pathfinder 2e dos módulos genéricos de Campaign/User Settings, preservando a funcionalidade atual de preferência de idioma do conteúdo PF2e.

## Problema atual

O módulo genérico `apps/api/src/modules/campaigns/routes.ts` conhece e normaliza `pathfinder2e.contentLocale`.

A página genérica `apps/web/src/features/campaigns/pages/CampaignSettingsPage.tsx` importa diretamente infraestrutura de Pathfinder 2e e contém lógica condicional para `PATHFINDER_2E`.

Isso contradiz ADR-0005: o VTT/Core e módulos genéricos não devem conhecer configurações concretas de um Game System.

## Escopo

- tornar o backend de Campaign User Settings agnóstico a namespaces de Game System;
- manter os namespaces genéricos atualmente pertencentes ao Core (`dice` e `inventory`) normalizados pelo módulo genérico;
- preservar namespaces desconhecidos/opacos durante GET/PATCH e persistência;
- mover normalização/default de `pathfinder2e.contentLocale` para código pertencente ao PF2e;
- retirar import e renderização específica de Pathfinder da `CampaignSettingsPage` genérica;
- usar um registry/composition shell em `apps/web/src/game-systems/` para selecionar o painel de configurações do Game System da Campaign;
- manter a experiência atual de escolha entre `pt-BR` e `en-US` para campanhas PF2e;
- adicionar testes/checks suficientes para impedir regressão dessa fronteira no escopo alterado;
- alinhar a documentação de Campaign User Settings com a arquitetura vigente.

## Fora de escopo

- alterar o modelo Prisma `CampaignUserSettings`;
- criar tabela separada para configurações de Game System;
- alterar a exigência de `Campaign.gameSystem`;
- mudar os valores disponíveis de idioma do PF2e;
- resolver a bridge de Inventory atualmente whitelistada pelo architecture check;
- redesenhar toda a arquitetura de registries de Game System;
- migrar todos os documentos legados de `.ai/` nesta entrega.

## Regras

### Configurações genéricas

O Core pode conhecer e normalizar configurações que pertencem ao próprio VTT, incluindo atualmente:

- `dice`;
- `inventory`.

### Configurações específicas de Game System

Um namespace específico de Game System deve ser tratado pelo Core como dado opaco.

O Core pode persistir e devolver esse namespace, mas não pode:

- conhecer suas propriedades internas;
- aplicar defaults específicos;
- validar semântica específica do ruleset;
- renderizar controles específicos daquele sistema.

### Pathfinder 2e

A preferência atual:

```json
{
  "pathfinder2e": {
    "contentLocale": "pt-BR"
  }
}
```

continua compatível para não exigir migração de dados.

A normalização da propriedade `contentLocale` pertence ao código PF2e:

- `en-US` permanece `en-US`;
- valor ausente/inválido resulta em `pt-BR` no consumidor PF2e.

### HTTP

Os endpoints existentes permanecem:

- `GET /api/campaigns/:campaignId/my-settings`;
- `PATCH /api/campaigns/:campaignId/my-settings`.

O contrato genérico preserva namespaces desconhecidos quando possível.

Não é criado endpoint Pathfinder dentro do módulo `campaigns`.

### UI / Composition

`CampaignSettingsPage` pode consumir um componente genérico do composition shell, mas não pode importar diretamente um componente/infraestrutura PF2e nem possuir um `if/switch` concreto para Pathfinder.

O composition shell em `apps/web/src/game-systems/` pode mapear `GameSystemKey` para um painel concreto, seguindo o padrão já usado por outros renderers de Game System.

## Segurança e permissões

As regras atuais dos endpoints de settings permanecem:

- usuário autenticado;
- `CampaignMember` ativo na Campaign;
- settings persistidas por `(campaignId, userId)`.

Esta mudança não relaxa autorização.

## Compatibilidade

- registros existentes com namespace `pathfinder2e` devem continuar legíveis;
- `pt-BR` continua sendo o default efetivo do PF2e;
- escolher `en-US` continua persistindo e sendo restaurado após reload/sincronização;
- configurações de Dice e Inventory não devem sofrer regressão.

## Critérios de aceite

1. `apps/api/src/modules/campaigns/routes.ts` não contém lógica de default, validação ou merge de `pathfinder2e.contentLocale`.
2. PATCH de um namespace opaco como `pathfinder2e` preserva esse namespace na resposta/persistência sem interpretar suas propriedades internas.
3. GET continua devolvendo namespaces opacos previamente persistidos.
4. Dice e Inventory continuam recebendo defaults/normalização genéricos existentes.
5. `CampaignSettingsPage.tsx` não importa diretamente código de `features/pathfinder-2e` e não contém condicional concreta `PATHFINDER_2E` para renderizar settings.
6. Um registry/composition shell seleciona o painel PF2e quando a Campaign usa Pathfinder 2e.
7. O painel PF2e continua permitindo `pt-BR` e `en-US`.
8. Ausência ou valor inválido de `pathfinder2e.contentLocale` resulta em `pt-BR` no código PF2e, sem o Core conhecer essa regra.
9. A alteração de locale continua sendo salva pelo endpoint existente e restaurada após nova leitura.
10. Não há migration de banco nesta entrega.
11. Testes/checks relacionados passam e existe cobertura contra regressão da preservação de namespaces opacos.
12. A documentação canônica e a implementação descrevem a mesma fronteira.

## Direção arquitetural aprovada

### Backend

Extrair a normalização/merge de Campaign User Settings para um módulo genérico e testável dentro de `modules/campaigns`. Esse módulo conhece apenas namespaces do Core e preserva propriedades top-level desconhecidas por `passthrough`, sem importar ou chamar engine concreta.

### Frontend

Criar um composition shell em `apps/web/src/game-systems/` que mapeia `GameSystemKey` para um painel concreto. `CampaignSettingsPage` monta apenas o bridge genérico. O componente concreto PF2e fica em `features/pathfinder-2e` e é responsável pela preferência `contentLocale`.

### Enforcement

- teste unitário para normalização/merge genérico e preservação de namespace opaco;
- teste de registry web seguindo o padrão já usado por equipment renderers;
- proteção determinística do ponto genérico alterado para evitar reintrodução de dependência concreta.

Nenhuma nova decisão arquitetural é necessária: ADR-0005 já cobre a direção.

## Referências

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
- `docs/governance/DOCUMENTATION_AUDIT.md` — GOV-005

## Resultado do BA

```text
BA: READY
Spec: docs/features/game-system-user-settings-boundary/spec.md
Architecture review required: YES
Open product questions: 0
```

## Resultado do Architect

```text
ARCHITECTURE: APPROVED
ADRs: ADR-0005
Required enforcement: generic settings tests + web settings registry test/check
Architecture debt introduced: NO
```
