# Autonomous Agent Workflow

Este documento define disciplina operacional para execuções em que o usuário autoriza explicitamente que o fluxo de agentes avance autonomamente até um gate humano.

Ele não substitui Feature Specs, ADRs ou a autoridade de cada role. Seu objetivo é evitar interrupções operacionais desnecessárias e estados declarados prematuramente.

## 1. Autorização de loop

Quando o usuário autorizar explicitamente uma execução até `HUMAN APPROVAL`, o agente coordenador deve continuar por todos os gates aplicáveis sem pedir confirmação a cada transição:

```text
BA -> ARCHITECTURE REVIEW -> READY -> DEVELOPMENT -> CODE REVIEW -> DOCUMENTATION AUDIT -> QA -> HUMAN APPROVAL
```

Retornos internos são esperados e também devem ser executados autonomamente, por exemplo:

```text
DEVELOPMENT -> BA -> ARCHITECTURE REVIEW -> READY -> DEVELOPMENT
CODE REVIEW -> DEVELOPMENT -> CODE REVIEW
QA -> DEVELOPMENT -> CODE REVIEW -> DOCUMENTATION AUDIT -> QA
```

## 2. Quando interromper antes de HUMAN APPROVAL

A execução só deve parar para o usuário quando existir uma decisão que os agentes não possuem autoridade para tomar, como:

- decisão nova de produto sem resposta em fonte autoritativa;
- mudança arquitetural que exige decisão humana e não pode ser resolvida pelos ADRs vigentes;
- ação destrutiva ou externa que exige autorização humana específica;
- impossibilidade técnica real de prosseguir após tentativas razoáveis, como conector indisponível ou dados necessários inacessíveis.

Não são motivos para interromper o loop:

- teste quebrado;
- CI vermelho;
- finding de Code Review;
- documentação desatualizada;
- necessidade de retornar ao BA ou Architect para registrar uma descoberta;
- necessidade de reexecutar QA;
- CI ainda em andamento.

Esses casos devem ser tratados dentro do próprio loop.

## 3. Disciplina de CI

Para preservar a janela operacional da execução:

1. agrupe mudanças relacionadas antes de disparar nova rodada de CI;
2. não faça polling agressivo do mesmo workflow/job;
3. prefira consultar o status consolidado da commit/PR antes de abrir logs detalhados;
4. abra logs somente quando houver failure ou quando o status não explicar o bloqueio;
5. após uma correção, aguarde a nova execução e evite consultas redundantes enquanto não houver sinal de mudança;
6. um CI vermelho devolve o trabalho ao gate responsável; não autoriza mover o card adiante.

## 4. Disciplina de Trello

Trello representa estado de workflow, não telemetria de cada micro-etapa.

Atualize o card principalmente quando houver:

- transição real de gate;
- bloqueio real;
- retorno a um gate anterior;
- conclusão/revalidação relevante que altere o estado do workflow;
- entrada em `HUMAN APPROVAL` ou `DONE`.

Evite atualizar descrição/lista repetidamente para cada pequena ação interna, polling ou tentativa intermediária.

## 5. Regra para HUMAN APPROVAL

Nunca declare ou mova um card para `HUMAN APPROVAL` apenas porque a implementação parece concluída.

Antes desse gate, todos os gates aplicáveis devem estar efetivamente aprovados e os checks obrigatórios devem estar verdes na revisão corrente do código.

Se um commit posterior alterar código, teste ou documentação depois de Code Review/Documentation Audit/QA, reexecute os gates afetados antes de retornar a `HUMAN APPROVAL`.

## 6. Merge

`HUMAN APPROVAL` encerra a autonomia de entrega.

O agente pode preparar branch, PR, checks e evidências, mas **não faz merge**. Merge é responsabilidade humana, salvo mudança explícita futura da governança do projeto.

## 7. Comunicação ao usuário

Durante um loop autorizado:

- não interrompa para relatar progresso normal;
- não peça para o usuário dizer `continue` após falha recuperável;
- só envie uma resposta final quando chegar a `HUMAN APPROVAL` ou quando houver bloqueio humano real;
- se a plataforma encerrar a execução antes do gate final, registre precisamente o estado atual e retome do ponto exato na próxima mensagem, sem reiniciar gates já válidos.

## 8. Pós-incidente operacional

Quando uma execução revelar um padrão de erro repetível no próprio workflow, registre a lição em governança operacional se ela for geral e reutilizável.

Não coloque lições operacionais genéricas dentro de Feature Specs de produto apenas porque foram descobertas durante uma feature.
