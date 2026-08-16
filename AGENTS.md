# QuestHub — Agent Router

Este arquivo orienta qualquer agente de IA que trabalhe no repositório QuestHub. Ele **não é fonte de verdade de produto ou arquitetura**.

## 0. Preflight de rastreabilidade

Antes de criar branch, Spec, código ou documentação de entrega, classifique o trabalho conforme ADR-0007.

### CARD obrigatório

Crie/confirme um card Trello antes de prosseguir quando a mudança envolver:

- comportamento funcional, feature ou bug observável;
- código executável do produto em `apps/`;
- schema, migration ou persistência estrutural;
- contrato HTTP/realtime/tipo público ou integração entre domínios;
- autenticação, autorização, segurança ou isolamento de Campaign;
- arquitetura de produto ou fronteira VTT/Game System;
- regra, cálculo, automação ou mecânica de Game System.

Use o identificador `QH-*` como identidade operacional e faça Spec/PR referenciarem o mesmo card quando aplicável.

### `NO-CARD`

Manutenção estritamente não funcional pode usar `NO-CARD`, incluindo reorganização de documentação, correção de caminhos/links, nomes, ortografia, formatação e housekeeping documental equivalente.

`NO-CARD` deve ser explícito e justificado. Ele não pode ser usado para contornar a esteira. Se o escopo crescer para uma categoria que exige card, pare antes da expansão e crie o card.

Trello representa workflow/status. Requisitos e decisões continuam versionados no repositório.

## 1. Contexto obrigatório

Antes de analisar ou modificar comportamento do produto, leia nesta ordem:

1. `docs/PROJECT_CONSTITUTION.md`
2. `docs/governance/SOURCE_OF_TRUTH.md`
3. `docs/ARCHITECTURE.md`
4. ADRs aplicáveis em `docs/architecture/adr/`
5. Feature Spec aplicável
6. contratos executáveis e código relevante

Não implemente com base apenas em Trello, conversa, comentário ou README auxiliar.

## 2. Hierarquia e divergências

A autoridade documental é definida por `docs/governance/SOURCE_OF_TRUTH.md`.

Em divergência relevante, não escolha silenciosamente a fonte mais conveniente. Use o protocolo `CONSISTENCY: BLOCKED`.

## 3. `.ai/`

`.ai/` é reservada exclusivamente a `.ai/agents/*.md`.

- produto/Specs -> `docs/features/`;
- decisões arquiteturais -> `docs/architecture/adr/`;
- arquitetura consolidada -> `docs/ARCHITECTURE.md`;
- roles -> `.ai/agents/*.md`;
- modelo/reasoning/runtime -> fora dos arquivos de role.

Roles atuais:

- BA: `.ai/agents/ba.md`
- Architect: `.ai/agents/architect.md`
- Developer: `.ai/agents/developer.md`
- Code Reviewer: `.ai/agents/code-reviewer.md`
- Documentation Auditor: `.ai/agents/documentation-auditor.md`
- QA: `.ai/agents/qa.md`

Um role não herda automaticamente a autoridade de outro.

## 4. Antes de qualquer mudança

Identifique:

- modo de rastreabilidade: `QH-*` ou `NO-CARD` com justificativa;
- objetivo e domínio afetado;
- VTT Core, Game System Runtime/contratos, Composition Root ou engine concreta;
- frontend/backend/realtime/persistência/testes/documentação afetados;
- Feature Spec e ADRs relacionados, quando aplicáveis;
- impacto em contratos, Campaign isolation e permissões.

## 5. Feature development

Mudança funcional deve possuir Feature Spec implementável/verificável e card Trello. A Spec define objetivo, escopo, fora de escopo, regras, permissões, contratos, erros e critérios de aceite.

Não invente decisão de produto ausente durante implementação.

## 6. Mudança arquitetural

Mudanças em invariantes, ownership/ciclo de vida fundamental, Campaign isolation, fronteira VTT/Game System, contrato estrutural ou ADR aceito exigem decisão arquitetural explícita e card Trello quando afetarem arquitetura do produto.

ADRs históricos não são reescritos para apagar decisões; use `Supersedes`.

## 7. Fronteira VTT / Game System

Siga ADR-0005:

- VTT oferece capacidades e contratos genéricos;
- Game System interpreta regras;
- Composition Root seleciona/registra engines;
- VTT não importa implementação concreta de sistema;
- engine concreta não depende de internos do VTT;
- persistência opaca pode existir, interpretação mecânica pelo Core não.

Execute `npm run check:architecture` quando aplicável.

## 8. Campaign, Actor e Token

Siga ADR-0001 a ADR-0004:

- Campaign sempre possui Game System;
- Campaign é a fronteira de isolamento;
- CampaignMember != CampaignActor;
- CampaignToken pode existir sem Actor;
- excluir Token não exclui Actor e vice-versa.

## 9. Segurança e realtime

Autenticação, autorização, ownership, pertença à Campaign e permissões são validados no backend. Frontend não é fronteira de segurança.

Mudanças persistidas compartilhadas devem usar o fluxo realtime apropriado; polling periódico não substitui silenciosamente esse fluxo.

## 10. Qualidade mínima

Verifique conforme o escopo:

- tipos/build;
- testes unitários/contrato;
- invariantes de banco;
- `npm run check:architecture`;
- segurança/permissões;
- realtime;
- coerência entre rastreabilidade (`QH-*` ou `NO-CARD`), documentação, código e testes.

## 11. Autonomia local

Um agent pode decidir detalhes locais, reversíveis e estritamente de implementação apenas quando não alterarem requisito, critério de aceite, contrato público, persistência, permissão, comportamento observável ou arquitetura.

## 12. Princípio final

Não otimize apenas para “funcionar”. Entregue uma mudança em que intenção, arquitetura, contratos, código, testes e documentação continuem contando a mesma história.
