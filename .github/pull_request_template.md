# QuestHub Pull Request

## Rastreabilidade

Escolha **um** modo:

- [ ] CARD — Trello: `<QH-XXX>` — `<URL do card>`
- [ ] `NO-CARD` — manutenção estritamente não funcional/documental

Feature Spec: `docs/features/<feature>/spec.md` ou `N/A` para `NO-CARD`.

Justificativa NO-CARD: `<explique por que não altera comportamento, contrato, schema, segurança, arquitetura de produto ou mecânica de Game System>`

> `NO-CARD` não pode ser combinado com `QH-*`. Se o escopo crescer para trabalho funcional/arquitetural/executável, crie o card antes de prosseguir.

## Objetivo

Descreva objetivamente o que esta PR entrega.

## Arquitetura

- [ ] Sem impacto arquitetural de produto
- [ ] Usa ADR existente: `<ADR-XXXX>`
- [ ] Novo ADR incluído: `<ADR-XXXX>`

## Áreas alteradas

- [ ] VTT Core
- [ ] Game System Runtime / contratos
- [ ] Composition Root
- [ ] Game System concreto
- [ ] Backend
- [ ] Frontend
- [ ] Realtime
- [ ] Banco / migrations
- [ ] Documentação
- [ ] Governança / tooling documental

## Critérios de aceite

Para entrega com Feature Spec, liste os ACs cobertos. Para `NO-CARD`, registre `N/A — manutenção não funcional`.

## Segurança e isolamento

- [ ] não aplicável
- [ ] autenticação/permissões verificadas
- [ ] ownership/pertença à Campaign validados no backend

## VTT / Game System boundary

- [ ] não aplicável
- [ ] `npm run check:architecture` executado
- [ ] VTT não interpreta regra concreta
- [ ] engine não depende de implementação interna do VTT

## Realtime

- [ ] não aplicável
- [ ] clientes afetados recebem atualização pelo fluxo apropriado

## Testes executados

```text
<commands/resultados>
```

## Documentação

- [ ] fontes canônicas continuam coerentes
- [ ] Architecture/ADRs continuam compatíveis
- [ ] caminhos/referências afetados foram atualizados

## Gates

Para CARD, marque os gates aplicáveis. Para `NO-CARD`, gates de BA/Architecture/QA podem ser `N/A` quando a mudança não entra nessa esteira.

- [ ] BA / REFINEMENT ou N/A
- [ ] ARCHITECTURE REVIEW ou N/A
- [ ] DEVELOPMENT / manutenção
- [ ] CODE REVIEW
- [ ] DOCUMENTATION AUDIT ou N/A
- [ ] QA ou N/A
- [ ] HUMAN APPROVAL

**HUMAN APPROVAL é obrigatório antes do merge. Não fazer auto-merge.**

## Dívidas / follow-ups

Liste explicitamente qualquer dívida que permaneça.
