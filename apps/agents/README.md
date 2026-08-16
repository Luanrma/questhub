# QuestHub AI Agent Runtime

`apps/agents/` é o runtime operacional dos Agents de desenvolvimento do QuestHub.

Ele não faz parte do VTT Core, da API do produto, do frontend nem de uma Game System engine.

## Conceitos

- `.ai/agents/*.md`: define o **role** do Agent — missão, responsabilidades, limites e formato de saída.
- `src/config/model-policy.ts`: define a **política operacional de modelo** por role.
- `src/runtime/`: monta contexto e executa um role de forma controlada.
- Trello/GitHub: continuam fora do runtime nesta primeira versão; não há tools mutáveis ou handoffs automáticos.

## Pré-requisitos para execução real

Defina `OPENAI_API_KEY` no ambiente. Nunca versione a chave no repositório.

Os testes e o typecheck do runtime não fazem chamadas reais à API e não exigem a chave.

## Executar um Agent manualmente

```bash
npm run agent:run -- --role architect --input "Revise a arquitetura desta feature" --context docs/features/minha-feature/spec.md
```

`--context` pode ser repetido. Na fase QH-AI-001, contexto adicional é aceito somente para arquivos Markdown dentro de `docs/` ou `.ai/`.

Roles disponíveis:

- `ba`
- `architect`
- `developer`
- `code-reviewer`
- `documentation-auditor`
- `qa`

## Política default de modelos

| Role | Modelo | Reasoning |
|---|---|---|
| BA | `gpt-5.6-terra` | `medium` |
| Architect | `gpt-5.6-sol` | `high` |
| Developer | `gpt-5.6-sol` | `high` |
| Code Reviewer | `gpt-5.6-sol` | `high` |
| Documentation Auditor | `gpt-5.6-terra` | `medium` |
| QA | `gpt-5.6-terra` | `medium` |

A tabela é política operacional, não identidade do role. Para trocar o modelo, altere a Model Policy ou use override de ambiente; não edite `.ai/agents/*.md` para isso.

## Overrides por ambiente

Formato:

```text
QH_AGENT_MODEL_<ROLE>
QH_AGENT_REASONING_<ROLE>
```

Exemplos:

```bash
QH_AGENT_MODEL_ARCHITECT=gpt-5.6-terra
QH_AGENT_REASONING_ARCHITECT=high
QH_AGENT_MODEL_CODE_REVIEWER=gpt-5.6-sol
```

Roles com hífen usam `_` no nome da variável, em maiúsculas.

## Segurança nesta fase

O runtime executa um role por chamada e não fornece:

- shell;
- edição de arquivos;
- commit ou push;
- criação/merge de PR;
- escrita no Trello;
- handoffs entre Agents;
- autonomia de aprovação.

O contexto é lido pelo runtime e fornecido ao Agent; o Agent não recebe acesso livre ao filesystem.

## Tracing

Tracing permanece habilitado por padrão. O runtime configura `traceIncludeSensitiveData: false` para não incluir o conteúdo completo do contexto/input/output nos traces.

Para desabilitar tracing explicitamente em uma execução:

```bash
OPENAI_AGENTS_DISABLE_TRACING=1 npm run agent:run -- --role qa --input "Valide a spec"
```

## Qualidade

```bash
npm run test:agents
npm run build:agents
npm run check:agent-boundaries
```

`npm run check:architecture` inclui o boundary check desse runtime.
