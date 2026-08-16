# ADR-0006 — Card Trello obrigatório para toda entrega

Status: **ACCEPTED**  
Data: 2026-08-16  
Supersedes: nenhum

## Contexto

O QuestHub já utiliza Trello como representação operacional da esteira `INBOX -> BA -> ARCHITECTURE REVIEW -> READY -> DEVELOPMENT -> CODE REVIEW -> DOCUMENTATION AUDIT -> QA -> HUMAN APPROVAL -> DONE`.

Entretanto, a existência do card antes do início de uma tarefa ainda não estava registrada como invariante. Isso permite que trabalho seja iniciado em branch, Spec ou implementação antes de existir uma identidade operacional que o acompanhe pelos gates.

Ao mesmo tempo, `docs/governance/SOURCE_OF_TRUTH.md` corretamente mantém Trello abaixo das fontes versionadas do repositório. Tornar o card obrigatório não pode transformar sua descrição em fonte canônica de requisitos ou arquitetura.

## Decisão

1. Toda tarefa de **desenvolvimento ou governança** do QuestHub deve possuir um card no board Trello do projeto **antes do início do trabalho**.
2. Para esta regra, início do trabalho inclui criar ou alterar Feature Spec da entrega, branch de implementação, código, schema, documentação de mudança ou outro artefato destinado à entrega.
3. O card é a **identidade operacional** da tarefa e registra prioridade, estado e passagem pelos gates.
4. Feature Specs e Pull Requests associados a uma entrega devem referenciar o identificador do card correspondente.
5. Trello continua subordinado à hierarquia definida em `docs/governance/SOURCE_OF_TRUTH.md`; texto do card não substitui Constitution, ADR, Architecture, Feature Spec ou contratos executáveis.
6. Se uma conversa originar uma nova tarefa, o primeiro ato operacional é criar o card; somente depois a tarefa entra em BA/Refinement e segue os gates.
7. Nenhum Agent pode criar uma exceção implícita à regra por a mudança parecer pequena, local ou de baixo risco.
8. `DONE` continua condicionado ao fluxo definido pelo projeto; merge permanece dependente de aprovação humana quando aplicável.

## Alternativas consideradas

### Alternativa A — Card recomendado, mas opcional

- menor overhead para mudanças pequenas;
- mantém dependência de memória e disciplina individual;
- permite entregas sem identidade única entre Spec, branch, PR e gates.

Rejeitada porque não resolve o problema de rastreabilidade de forma determinística no processo.

### Alternativa B — Trello como fonte canônica de requisitos

- centralizaria workflow e requisito no mesmo lugar;
- facilitaria edição rápida fora do repositório;
- quebraria a governança documental já aceita, reduziria versionamento/review e criaria conflito de autoridade.

Rejeitada.

### Alternativa C — Card obrigatório como identidade operacional, repositório como autoridade

- garante que toda entrega entra na esteira desde o início;
- preserva versionamento e hierarquia documental;
- permite relacionar card, Spec, branch e PR sem duplicar autoridade.

Aceita.

## Consequências

### Positivas

- toda tarefa passa a possuir identidade única antes de produzir mudanças;
- gates deixam de depender de reconstrução posterior de contexto;
- Feature Specs e PRs podem ser rastreados ao workflow correspondente;
- Trello e GitHub mantêm responsabilidades distintas e explícitas.

### Restrições / custos

- até mudanças pequenas de desenvolvimento/governança exigem criação prévia de card;
- CI não consegue provar sozinho a existência remota do card sem integração/credencial externa;
- a verificação da existência do card é uma pré-condição operacional, complementada por checks determinísticos de referências no repositório.

## Enforcement

A decisão é protegida por:

- `AGENTS.md`, que bloqueia início de tarefa sem card;
- `docs/features/_TEMPLATE.md`, que exige identificação do card;
- `.github/pull_request_template.md`, que exige referência ao card e à Spec;
- `scripts/check-documentation-governance.mjs`, que protege a organização documental e a presença dos pontos de rastreabilidade versionados;
- Code Review e Documentation Audit;
- fluxo Trello, que deve começar em `INBOX` antes dos demais artefatos;
- aprovação humana antes de merge.

O CI **não** recebe credenciais Trello nesta decisão e não consulta a API do Trello. Uma integração remota futura exige escopo próprio.

## Impacto em documentação

- `docs/PROJECT_CONSTITUTION.md`: adiciona a invariante de rastreabilidade;
- `docs/governance/SOURCE_OF_TRUTH.md`: esclarece Trello obrigatório sem elevar sua autoridade;
- `AGENTS.md`: adiciona preflight de card;
- `docs/features/_TEMPLATE.md`: card passa a ser campo obrigatório;
- `docs/PROJECT_MAP.md`: documenta o fluxo e as fontes;
- `docs/governance/DOCUMENTATION_AUDIT.md`: registra a consolidação.

## Não decidido por este ADR

- automação de criação/movimentação de cards pelo runtime `apps/agents`;
- credenciais Trello em CI;
- gatilhos/webhooks externos;
- auto-merge;
- mudança na hierarquia de autoridade documental;
- políticas de nomenclatura de cards além da necessidade de identificação rastreável.
