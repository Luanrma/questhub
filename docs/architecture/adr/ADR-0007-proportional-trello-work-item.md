# ADR-0007 — Rastreabilidade Trello proporcional ao tipo de trabalho

Status: **ACCEPTED**  
Data: 2026-08-16  
Supersedes: **ADR-0006**

## Contexto

ADR-0006 tornou obrigatório um card Trello antes de qualquer tarefa de desenvolvimento ou governança. A regra resolveu a falta de rastreabilidade de entregas relevantes, mas mostrou-se excessiva para manutenção pequena e não funcional, como reorganização de pastas de documentação, correção de links, nomes, formatação ou housekeeping equivalente.

Obrigar toda alteração desse tipo a percorrer a esteira completa adiciona processo sem aumentar proporcionalmente a segurança do produto. Ao mesmo tempo, remover toda obrigatoriedade de card abriria espaço para mudanças funcionais, arquiteturais ou mecânicas escaparem dos gates do projeto.

## Decisão

O QuestHub passa a usar rastreabilidade proporcional ao tipo de trabalho.

### Trabalho com card Trello obrigatório

Um card deve existir antes do início quando a mudança envolve qualquer um dos itens abaixo:

- comportamento funcional do produto, feature ou correção de bug observável;
- código executável do produto em `apps/`;
- schema, migrations, persistência estrutural ou contratos de banco;
- contrato HTTP, realtime, tipo público ou integração entre domínios;
- autenticação, autorização, segurança, ownership ou isolamento de Campaign;
- arquitetura de produto, invariantes ou fronteiras VTT/Game System;
- regras, cálculos, automações ou mecânicas de um Game System;
- trabalho que, pelo seu escopo, precisa percorrer BA, Architecture Review, Development, Code Review, Documentation Audit e QA.

Nesses casos, o card continua sendo a identidade operacional da entrega e deve ser referenciado pelos artefatos aplicáveis.

### Manutenção `NO-CARD`

Um card não é obrigatório para manutenção estritamente não funcional e de baixo risco, como:

- reorganização de pastas e caminhos de documentação;
- correção de links, nomes, ortografia, formatação ou referências documentais;
- limpeza de documentação redundante sem alterar requisito vigente;
- housekeeping de governança/tooling documental que não altera comportamento do produto;
- ajustes equivalentes limitados a documentação e controles de documentação.

Esse modo deve ser declarado explicitamente como `NO-CARD`, com justificativa no Pull Request quando houver PR.

`NO-CARD` não pode ser usado para esconder ou fracionar mudança que deveria possuir card. Se o escopo crescer e passar a tocar uma categoria que exige card, o trabalho deve parar antes dessa expansão e um card Trello deve ser criado.

## Rastreabilidade no repositório

O guard documental reconhece dois modos mutuamente exclusivos:

1. **CARD** — um identificador concreto `QH-*` acompanha commit/PR e, quando aplicável, a Feature Spec;
2. **NO-CARD** — marcador explícito para manutenção não funcional dentro do conjunto de caminhos permitido pelo guard.

Um commit ou PR não pode combinar `NO-CARD` e `QH-*`.

O CI não recebe credenciais Trello para consultar a existência remota do card. A existência do card continua sendo verificada operacionalmente quando o modo CARD for aplicável.

## Trello e autoridade documental

Trello continua sendo workflow/status e identidade operacional. Ele não substitui Constitution, ADRs, Architecture, Feature Specs ou contratos executáveis.

A possibilidade de `NO-CARD` não altera a hierarquia de autoridade de `docs/governance/SOURCE_OF_TRUTH.md`.

## Human Approval

A dispensa de card não é dispensa de revisão humana. Pull Requests continuam dependentes de Human Approval antes do merge, salvo um fluxo futuro explicitamente aprovado que diga o contrário.

## Consequências

### Positivas

- pequenas correções documentais deixam de gerar cards artificiais;
- entregas relevantes continuam rastreáveis pelos gates formais;
- o guard consegue distinguir manutenção de trabalho governado sem credencial Trello;
- o processo fica proporcional ao risco da mudança.

### Restrições

- `NO-CARD` exige declaração explícita e escopo compatível;
- alterações executáveis do produto não podem usar `NO-CARD`;
- se houver dúvida material sobre impacto funcional/arquitetural, prevalece o fluxo com card.

## Enforcement

- `AGENTS.md` classifica a tarefa antes de iniciar;
- `.github/pull_request_template.md` oferece modos CARD e `NO-CARD`;
- `scripts/check-documentation-governance.mjs` valida exclusividade do modo e restringe `NO-CARD` a caminhos de manutenção;
- Feature Specs continuam usando card, pois representam trabalho funcional/governado;
- Code Review e Human Approval permanecem barreiras finais.

## Relação com ADR-0006

ADR-0006 permanece no histórico como a decisão que introduziu a obrigatoriedade universal. Esta decisão a substitui a partir de 2026-08-16 e remove apenas a universalidade da obrigação, preservando o papel do Trello para entregas governadas.
