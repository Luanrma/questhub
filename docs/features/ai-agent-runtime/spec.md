# QH-AI-001 — Runtime e política de modelos dos Agents

Status: **ARCHITECTURE APPROVED / READY**

## Objetivo

Criar a primeira camada executável dos Agents do QuestHub, transformando os roles versionados em `.ai/agents/` em agentes de IA que possam ser executados de forma controlada por um runtime TypeScript baseado no OpenAI Agents SDK.

Esta entrega estabelece a separação entre:

- **Role**: identidade, missão, limites e formato esperado do Agent;
- **Model Policy**: modelo e `modelSettings` usados para executar cada role;
- **Runtime**: carregamento de contexto, criação e execução do Agent;
- **Workflow**: continua determinístico e humano-controlado nesta entrega.

## Problema atual

Os roles de BA, Architect, Developer, Code Reviewer, Documentation Auditor e QA já existem como arquivos `.md`, porém ainda não há um runtime do projeto que:

- carregue esses roles como instruções de um Agent;
- aplique uma política explícita de modelos por role;
- execute o Agent via OpenAI Agents SDK;
- mantenha o modelo desacoplado da definição textual do role;
- produza uma saída observável e auditável;
- permita evoluir posteriormente para integração automatizada com Trello/GitHub.

## Escopo

### Runtime TypeScript

Criar uma aplicação/módulo de runtime em `apps/agents/` capaz de:

- aceitar um `role` conhecido;
- aceitar um texto de entrada/tarefa;
- carregar o arquivo `.ai/agents/<role>.md` correspondente;
- carregar o contexto de governança obrigatório do repositório;
- criar um `Agent` do OpenAI Agents SDK;
- selecionar o modelo a partir de uma política centralizada;
- executar o Agent;
- retornar uma saída textual e metadados operacionais mínimos.

### Roles suportados inicialmente

- `ba`;
- `architect`;
- `developer`;
- `code-reviewer`;
- `documentation-auditor`;
- `qa`.

Não será criado Orchestrator nesta entrega.

### Contexto obrigatório

O runtime deve carregar, antes das instruções específicas do role:

1. `AGENTS.md`;
2. `docs/PROJECT_CONSTITUTION.md`;
3. `docs/governance/SOURCE_OF_TRUTH.md`;
4. `docs/ARCHITECTURE.md`;
5. o arquivo do role selecionado.

O runtime pode aceitar caminhos adicionais de contexto explicitamente informados pelo chamador, por exemplo Feature Spec ou ADR aplicável.

Nesta primeira versão, contextos adicionais são restritos a arquivos documentais dentro de `docs/` ou `.ai/`. O loader deve rejeitar caminhos fora do repositório, `.env*`, `.git/`, `node_modules/` e outros caminhos não autorizados. Código-fonte adicional e descoberta semântica/autônoma ficam fora de escopo.

## Política inicial de modelos

A política deve ficar centralizada em código/configuração e não dentro de `.ai/agents/*.md`.

Defaults iniciais:

| Role | Modelo | Reasoning |
|---|---|---|
| BA | `gpt-5.6-terra` | `medium` |
| Architect | `gpt-5.6-sol` | `high` |
| Developer | `gpt-5.6-sol` | `high` |
| Code Reviewer | `gpt-5.6-sol` | `high` |
| Documentation Auditor | `gpt-5.6-terra` | `medium` |
| QA | `gpt-5.6-terra` | `medium` |

Esses valores são **defaults operacionais**, não regras de produto ou arquitetura.

O runtime deve permitir override por variável de ambiente por role sem alterar o arquivo do role.

Exemplo conceitual:

```text
QH_AGENT_MODEL_ARCHITECT=gpt-5.6-sol
QH_AGENT_REASONING_ARCHITECT=high
```

A nomenclatura final das variáveis deve ser consistente e testada.

## OpenAI Agents SDK

A implementação deve usar o SDK oficial TypeScript `@openai/agents`.

Regras:

- `model` é definido a partir da Model Policy;
- `modelSettings.reasoning.effort` é definido pela política;
- o runtime não deve depender do modelo default implícito do SDK para roles conhecidos;
- `OPENAI_API_KEY` deve ser obtida do ambiente, sem segredo versionado;
- tracing padrão do SDK deve permanecer habilitado em execução normal de servidor/CLI, salvo quando explicitamente desabilitado pelo ambiente;
- o workflow name do tracing deve identificar QuestHub e o role executado quando a API do SDK permitir.

## Execução

Deve existir uma interface de linha de comando simples para execução manual durante esta fase.

Exemplo de UX pretendida:

```bash
npm run agent:run -- --role architect --input "Revise a arquitetura da feature X" --context docs/features/x/spec.md
```

A forma exata de parsing pode variar, desde que:

- role inválido seja rejeitado antes de chamar a API;
- input vazio seja rejeitado;
- caminho adicional inexistente/não autorizado seja rejeitado;
- ausência de `OPENAI_API_KEY` produza erro claro antes da execução remota;
- a saída identifique role e modelo efetivamente selecionado.

## Segurança / autoridade

Nesta entrega, os Agents executáveis são **read-only/advisory**.

O runtime NÃO fornece tools para:

- fazer commit;
- fazer push;
- criar/mesclar PR;
- editar arquivos;
- executar shell;
- mover cards no Trello;
- alterar issues;
- chamar endpoints internos do QuestHub;
- realizar handoff automático entre Agents.

A saída do Agent é texto para revisão/consumo por humano ou por uma camada de workflow futura.

## Determinismo de workflow

Esta entrega não automatiza a passagem entre gates.

O Trello continua representando o estado operacional e a progressão continua sendo controlada externamente.

O runtime executa **um role por chamada**.

## Fronteira arquitetural de `apps/agents`

`apps/agents` é tooling operacional de desenvolvimento/automação, não VTT Core, API de produto, frontend de produto ou Game System engine.

Regras:

- `apps/api` não importa `apps/agents`;
- `apps/web` não importa `apps/agents`;
- Game System engines não importam `apps/agents`;
- `apps/agents` pode ler documentação/versionamento do repositório para montar contexto;
- adicionar ferramentas mutáveis ao runtime exigirá uma Feature Spec/Architecture Review futura.

## Configuração e extensibilidade

A implementação deve separar pelo menos:

```text
apps/agents/src/
  config/
    model-policy.ts
  roles/
    role-registry.ts
  runtime/
    context-loader.ts
    create-agent.ts
    run-agent.ts
  cli.ts
```

A estrutura pode variar em detalhes locais, desde que as responsabilidades permaneçam separadas.

Adicionar um novo role no futuro deve exigir explicitamente:

- arquivo de role;
- entrada no role registry;
- entrada na model policy;
- teste correspondente.

## Dependências

- Node.js compatível com o SDK;
- `@openai/agents`;
- Zod já utilizado pelo repositório;
- acesso a `OPENAI_API_KEY` apenas em runtime real.

## Fora de escopo

- Orchestrator Agent;
- handoffs automáticos;
- Agents como tools uns dos outros;
- ferramentas de escrita no GitHub;
- ferramentas de escrita no Trello;
- execução de shell/Codex;
- sandbox de filesystem para Developer;
- gatilhos automáticos por webhook/polling;
- persistência de sessões/conversas;
- banco de dados para runs;
- dashboard de custos;
- seleção dinâmica por risco;
- fallback automático entre Sol/Terra/Luna;
- autonomia de aprovação ou merge.

## Critérios de aceite

1. Existe runtime TypeScript versionado em `apps/agents/`.
2. O runtime usa `@openai/agents` como SDK de execução.
3. Os seis roles existentes possuem entrada explícita no registry.
4. Cada role possui modelo e reasoning default explícitos na Model Policy.
5. Nenhum arquivo `.ai/agents/*.md` contém a escolha do modelo como parte da identidade do role.
6. A política inicial usa Terra/medium para BA, Documentation Auditor e QA; Sol/high para Architect, Developer e Code Reviewer.
7. É possível sobrescrever modelo e reasoning por role via ambiente.
8. O runtime carrega os quatro documentos globais de governança mais o role antes de executar.
9. Contextos adicionais podem ser passados explicitamente somente de `docs/`/`.ai/`, com proteção contra path traversal e caminhos sensíveis.
10. Role inválido, input vazio, contexto inexistente/não autorizado e API key ausente falham antes de uma chamada remota.
11. Existe CLI manual para executar um role individual.
12. A execução usa limite explícito de turns; não depende de loop ilimitado.
13. Tracing do Agents SDK não é desabilitado por padrão em execução normal.
14. O runtime não oferece tools de escrita, shell, GitHub ou Trello nesta entrega.
15. Testes automatizados cobrem registry, model policy/overrides e carregamento/validação de contexto sem exigir chamada real à API.
16. A CI existente continua passando e a aplicação web/API/Game Systems não passam a importar `apps/agents`.
17. A arquitetura/documentação passa a reconhecer `apps/agents` como tooling de desenvolvimento/automação separado do VTT Core e das Game System engines.

## Impacto arquitetural

**Architecture review: APPROVED.**

A nova aplicação é classificada como tooling operacional separado do runtime do produto. Não altera invariantes de Campaign, VTT/Game System, persistência ou contratos públicos do QuestHub.

**Novo ADR: não necessário.** A decisão cabe na arquitetura/governança já aceita; a arquitetura canônica deve apenas registrar a nova camada operacional.

Enforcement requerido:

- testes de exhaustividade entre role registry e model policy;
- testes do context loader e seus limites de caminho;
- check determinístico impedindo imports de `apps/agents` por `apps/api`, `apps/web` e engines;
- CI/build/test do runtime sem chamada real à API.

Architecture debt introduced: **NO**.

## Referências externas verificadas

- OpenAI Agents SDK TypeScript — Agents, models, Runner e tracing;
- GPT-5.6 Sol/Terra/Luna disponíveis na OpenAI API.

## Resultado do BA

```text
BA: READY
Spec: docs/features/ai-agent-runtime/spec.md
Architecture review required: YES
Open product questions: 0
```

## Resultado do Architect

```text
ARCHITECTURE: APPROVED
ADRs: none
Required enforcement: registry/model-policy tests; context path safety; product→agents import guard; runtime CI tests
Architecture debt introduced: NO
```
