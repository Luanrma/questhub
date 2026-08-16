# Source of Truth e Governança Documental

Status: **ACCEPTED**

Este documento define qual artefato tem autoridade no QuestHub e como conflitos devem ser tratados.

## Hierarquia de autoridade

1. `docs/PROJECT_CONSTITUTION.md`
2. ADRs com status `ACCEPTED`
3. `docs/ARCHITECTURE.md`
4. Feature Specs aprovadas
5. Contratos executáveis: schema, tipos públicos, migrations e testes de contrato
6. Código de implementação
7. Documentação operacional e auxiliares
8. Trello, comentários, chats e contexto transitório

A posição na lista não significa que um artefato superior possa ser ignorado se estiver desatualizado. Significa que uma divergência deve ser tratada explicitamente antes de prosseguir.

## Código é realidade executável, não política automática

O código revela o comportamento atualmente implementado, mas não pode redefinir sozinho produto ou arquitetura.

Quando o código divergir de uma fonte autoritativa:

1. registrar a divergência;
2. determinar se o código está incorreto ou se a decisão mudou;
3. se a decisão mudou, registrar ADR/Spec apropriado antes de consolidar a nova arquitetura;
4. somente então alinhar implementação e documentação.

É proibido atualizar documentação apenas para 'combinar com o código' sem validar a intenção.

## Tipos de documentação

### Constituição

Somente invariantes de produto, arquitetura e governança. Deve ser curta e estável.

### ADR

Registra uma decisão arquitetural, contexto, alternativas e consequências.

Estados permitidos:

- `PROPOSED`
- `ACCEPTED`
- `SUPERSEDED`
- `REJECTED`

ADRs aceitos não devem ser reescritos para alterar a decisão histórica.

### Architecture

Representa a arquitetura atual consolidada. Deve apontar para ADRs que explicam decisões relevantes.

### Feature Spec

Representa o comportamento esperado de uma feature específica: objetivo, escopo, fora de escopo, regras, permissões, contratos e critérios de aceite.

Toda nova Feature Spec de uma entrega deve identificar o card Trello que originou e acompanha a tarefa.

### Agent Instructions

Arquivos de agents definem COMO um agent trabalha. Eles não definem requisitos de produto nem substituem Architecture, ADR ou Spec.

A pasta `.ai/` é reservada às definições de role em `.ai/agents/*.md`. Conhecimento de produto, Specs e decisões arquiteturais não devem ser mantidos ali.

## Trello

Trello controla fluxo de trabalho, prioridade, estado e identidade operacional da entrega.

**Toda tarefa de desenvolvimento ou governança deve possuir um card Trello antes do início do trabalho.**

O card deve existir antes de criar/alterar Feature Spec, branch, implementação ou documentação destinada à entrega. O fluxo começa em `INBOX` e segue os gates aplicáveis.

Um card pode e deve referenciar, quando aplicável:

- Feature Spec;
- ADR;
- branch;
- PR;
- dependências;
- evidências dos gates.

Feature Specs e Pull Requests de entrega devem referenciar o card correspondente.

O conteúdo do card **não substitui** a documentação versionada no repositório e não sobe na hierarquia de autoridade por ser obrigatório no workflow.

A existência remota do card é uma pré-condição operacional verificada antes do trabalho. O CI não recebe credenciais Trello apenas para consultar essa existência; checks do repositório validam os pontos de rastreabilidade que podem ser verificados localmente.

Referência: ADR-0006.

## Protocolo de divergência

Quando um agent detectar conflito relevante, deve retornar:

```text
CONSISTENCY: BLOCKED

Fontes em conflito:
- <fonte A>
- <fonte B>

Divergência:
<descrição objetiva>

Impacto:
<por que não é seguro prosseguir>

Decisão necessária:
<pergunta objetiva que precisa ser resolvida>
```

Nenhum Developer Agent, Reviewer Agent, QA Agent ou Documentation Auditor pode escolher silenciosamente qual lado prevalece.

## Ciclo de vida

Documentos obsoletos devem ser:

1. removidos quando não possuem valor histórico; ou
2. movidos para `docs/archive/` com cabeçalho explícito `DEPRECATED` quando seu valor histórico justificar permanência.

Não é aceitável manter duas descrições concorrentes como documentação ativa.

Documentação antiga não deve ser arquivada apenas por cautela. Se ela contradiz fontes superiores e não possui valor histórico necessário, a remoção é o resultado preferido.
