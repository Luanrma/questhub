# Feature Spec — Consolidação documental e rastreabilidade de trabalho

Status: **READY**

Card: `QH-GOV-009` — https://trello.com/c/BqDTOIRz/3-qh-gov-009-consolidar-legado-ai-e-impor-rastreabilidade-trello  
Domínio: `governance / documentation`

## Objetivo

Eliminar a dupla fonte de verdade criada pela documentação de produto legada em `.ai/`, consolidar os contratos ainda válidos em `docs/` e tornar obrigatória a existência prévia de um card Trello para qualquer tarefa de desenvolvimento ou governança do QuestHub.

## Problema

A pasta `.ai/` mistura atualmente definições operacionais de Agents com Specs, READMEs, prompts, decisões antigas e documentação de produto. Parte desse material contradiz diretamente a Constituição e a arquitetura atuais, enquanto outra parte contém contratos recentes que ainda não possuem equivalente canônico em `docs/`.

Ao mesmo tempo, a esteira formal usa Trello para controlar gates, mas a obrigatoriedade de criar um card antes de iniciar uma tarefa ainda depende de disciplina manual não documentada como invariante de governança.

## Escopo

- inventariar e classificar todo o conteúdo atual de `.ai/`;
- manter em `.ai/` somente as definições de role em `.ai/agents/*.md`;
- promover para `docs/features/` somente Specs e documentos auxiliares que ainda representem contratos válidos e úteis;
- remover documentação duplicada, obsoleta, contraditória ou puramente transitória sem criar arquivo de archive apenas por preservação defensiva;
- criar `docs/PROJECT_MAP.md` como índice de navegação, sem transformá-lo em fonte superior às fontes canônicas;
- registrar a política obrigatória de card Trello antes do início de qualquer tarefa de desenvolvimento ou governança;
- exigir que a identidade do card apareça nos artefatos de entrega aplicáveis, especialmente Feature Spec e PR;
- adicionar guard determinístico que impeça a reintrodução de documentação de produto fora de `.ai/agents/`;
- integrar o guard à qualidade/CI;
- atualizar a auditoria documental e a arquitetura consolidada.

## Fora de escopo

- alterar comportamento funcional do VTT ou de qualquer Game System;
- alterar schema Prisma, migrations ou dados persistidos;
- reescrever contratos de features migradas apenas para padronizar estilo;
- consultar Trello a partir do CI ou adicionar credenciais Trello ao pipeline;
- automatizar transições de cards dentro do runtime `apps/agents`;
- auto-merge;
- resolver GOV-006 ou GOV-007 além de preservar seu estado documental correto.

## Personas / permissões

- `Humano / responsável pela entrega`: cria ou confirma o card antes do trabalho e mantém a aprovação final.
- `Agent`: não inicia desenvolvimento/governança sem card existente e usa o identificador do card como identidade operacional da entrega.
- `CI`: valida regras determinísticas do repositório, mas não assume autoridade para criar, consultar ou mover cards Trello.

## Regras

1. Toda tarefa de desenvolvimento ou governança deve possuir um card Trello **antes** da criação/alteração de Spec, branch ou implementação.
2. O card representa identidade, prioridade, estado e passagem pelos gates; seu texto não substitui requisitos versionados no repositório.
3. Feature Specs criadas para uma entrega devem referenciar o card correspondente.
4. PRs de entrega devem referenciar o card correspondente.
5. Depois desta tarefa, nenhum arquivo de produto, arquitetura, Spec, prompt de execução ou documentação auxiliar pode permanecer em `.ai/` fora de `.ai/agents/`.
6. `.ai/agents/*.md` continua contendo apenas identidade, missão, responsabilidades, limites e formato dos roles; modelo e runtime continuam fora desses arquivos.
7. Material legado que contradiz fonte superior deve ser removido, não promovido.
8. Material legado ainda válido deve ser promovido para `docs/features/<dominio>/`, mantendo seu conteúdo de contrato sem inventar novas decisões.
9. Documentos auxiliares promovidos continuam subordinados à Feature Spec, Architecture, ADRs e Constitution conforme `SOURCE_OF_TRUTH.md`.
10. O CI deve falhar se um arquivo voltar a existir em `.ai/` fora do conjunto permitido de roles.
11. O CI não precisa nem deve possuir credencial Trello para validar a existência remota do card; essa existência é pré-condição operacional verificada antes do trabalho.
12. A aprovação humana continua obrigatória antes do merge.

## Fluxo principal

1. Criar/confirmar card Trello em `INBOX`.
2. BA produz Spec referenciando o card e move o item para Architecture Review.
3. Architect registra qualquer decisão estrutural necessária por ADR e aprova/rejeita o desenho.
4. A tarefa segue para Development apenas após os gates anteriores.
5. Development executa a migração/limpeza e os guards.
6. Code Review, Documentation Audit e QA verificam a mesma identidade de card, Spec e PR.
7. A tarefa termina em `HUMAN APPROVAL`; somente decisão humana permite merge.

## Estados e erros relevantes

- `sem card`: trabalho bloqueado; nenhuma branch/Spec/implementação deve ser iniciada.
- `arquivo legado contraditório`: remover; não promover silenciosamente.
- `arquivo legado útil sem equivalente canônico`: promover para `docs/features/`.
- `novo arquivo em .ai fora de agents`: `check:documentation-governance` falha.
- `divergência entre conteúdo promovido e fonte superior`: `CONSISTENCY: BLOCKED` conforme `SOURCE_OF_TRUTH.md`.

## Contratos

Não há mudança de contrato HTTP, realtime, banco ou runtime do produto.

Contratos de governança introduzidos:

- `.ai/**` permitido somente para `.ai/agents/*.md`;
- `docs/PROJECT_MAP.md` como mapa navegacional;
- `docs/features/_TEMPLATE.md` com card obrigatório;
- `.github/pull_request_template.md` com referência obrigatória ao card;
- `scripts/check-documentation-governance.mjs` como guard determinístico local/CI.

## Impacto arquitetural

- [ ] Nenhum
- [ ] Usa ADR existente
- [x] Exige novo ADR

A obrigatoriedade universal de card antes de qualquer tarefa é uma nova invariante de governança e deve ser registrada em ADR antes da consolidação final.

## Segurança / isolamento

Nenhuma mudança em autenticação, autorização ou isolamento de Campaign. O CI não recebe novos segredos Trello.

## Realtime

Não aplicável.

## Critérios de aceite

### AC-01 — Card obrigatório

Dada uma nova tarefa de desenvolvimento/governança, quando ela for iniciada, então um card Trello já deve existir e servir como identidade do workflow.

### AC-02 — `.ai` operacional

Dado o tree final, quando `.ai/` for inspecionada, então somente `.ai/agents/*.md` permanece.

### AC-03 — Sem perda de contratos válidos

Dado um documento legado classificado como contrato ainda válido, quando a limpeza terminar, então ele existe sob `docs/features/` ou foi absorvido por uma fonte canônica explicitamente identificável.

### AC-04 — Sem promoção de drift conhecido

Dados documentos que contradizem Constitution/ADRs/Architecture, quando a limpeza terminar, então eles não foram promovidos para documentação ativa.

### AC-05 — Mapa do projeto

Dado um contribuidor ou Agent, quando abrir `docs/PROJECT_MAP.md`, então consegue localizar fontes de governança, arquitetura, features, runtime de Agents e principais domínios sem depender da antiga `.ai/`.

### AC-06 — Guard de regressão

Dado um arquivo fora de `.ai/agents/`, quando `check:documentation-governance` executar, então o check falha com mensagem objetiva.

### AC-07 — CI

Dado o branch/PR, quando o workflow de Quality executar, então o guard documental é executado antes das suítes mais caras.

### AC-08 — Feature Spec rastreável

Dada esta entrega, quando sua Spec for inspecionada, então ela referencia `QH-GOV-009`.

### AC-09 — PR rastreável

Dado o PR desta entrega, quando sua descrição for inspecionada, então ela referencia `QH-GOV-009` e a Feature Spec.

### AC-10 — Source of Truth preservado

Dada a nova obrigatoriedade de Trello, quando as fontes forem comparadas, então Trello continua classificado como workflow/status e não substitui requisitos canônicos do repositório.

### AC-11 — Sem mudança funcional

Dado o diff, quando código de produto, schema e migrations forem comparados, então não há alteração de comportamento funcional decorrente desta tarefa.

### AC-12 — Gates

Dado o card, quando a entrega terminar tecnicamente, então ela está em `HUMAN APPROVAL`, não em `DONE`, até decisão humana de merge.

## Testes esperados

- execução do guard documental em estado válido;
- teste negativo do guard por inspeção lógica/fixture ou regra determinística equivalente;
- `npm run check:architecture`;
- testes/builds já exigidos pelo workflow Quality para garantir ausência de regressão;
- inspeção do tree final de `.ai/`;
- busca por referências ativas aos caminhos legados removidos.

## Dependências

- `docs/PROJECT_CONSTITUTION.md`;
- `docs/governance/SOURCE_OF_TRUTH.md`;
- `docs/ARCHITECTURE.md`;
- ADR-0001 a ADR-0005;
- card Trello `QH-GOV-009`.

## Decisões relacionadas

- `ADR-0001` a `ADR-0005` — permanecem inalterados.
- `ADR-0006` — obrigatório para registrar a nova invariante de rastreabilidade Trello.

## Questões abertas

Nenhuma.
