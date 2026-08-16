# QuestHub Pull Request

## Rastreabilidade

Escolha **um** modo:

- [ ] CARD — Trello: `<QH-XXX>` — `<URL do card>`
- [ ] `NO-CARD` — manutenção estritamente não funcional/documental

Feature Spec: `docs/features/<feature>/spec.md` ou `N/A` para `NO-CARD`.

Justificativa NO-CARD: `<explique por que não altera comportamento, contrato, schema, segurança, arquitetura de produto ou mecânica de Game System>`

> `NO-CARD` não pode ser combinado com `QH-*`. Se o escopo crescer para trabalho funcional/arquitetural/executável, crie o card antes de prosseguir.

## Card / objetivo

Descreva objetivamente o que esta PR entrega.

## Arquitetura

- [ ] Sem impacto arquitetural
- [ ] Usa ADR existente: `<ADR-XXXX>`
- [ ] Novo ADR incluído: `<ADR-XXXX>`

Explique qualquer impacto em fronteiras, contratos ou ownership.

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
- [ ] Governança / tooling

## Critérios de aceite

Liste os ACs da Feature Spec cobertos por esta PR. Para `NO-CARD` sem Feature Spec, registre `N/A — manutenção não funcional`.

- [ ] AC-XX — <descrição>

## Segurança e isolamento

- [ ] autenticação/permissões verificadas quando aplicável
- [ ] ownership validado no backend quando aplicável
- [ ] pertença à Campaign validada quando aplicável
- [ ] sem dependência de proteção exclusiva do frontend

## VTT / Game System boundary

- [ ] não aplicável
- [ ] `npm run check:architecture` executado
- [ ] VTT não interpreta regra concreta
- [ ] engine não depende de implementação interna do VTT
- [ ] nova exceção/whitelist possui ADR explícito

## Realtime

- [ ] não aplicável
- [ ] clientes afetados recebem atualização pelo fluxo realtime apropriado
- [ ] não foi introduzido polling periódico como workaround arquitetural

## Testes executados

```text
<commands/resultados>
```

## Documentação

- [ ] Feature Spec continua compatível ou N/A
- [ ] Architecture continua compatível
- [ ] ADRs continuam compatíveis
- [ ] documentação alterada quando necessário
- [ ] caminhos/referências afetados foram atualizados

## Gates

Para CARD, marque os gates aplicáveis. Para `NO-CARD`, gates que não se aplicam podem ser marcados como N/A na descrição da PR.

- [ ] BA / REFINEMENT ou N/A
- [ ] ARCHITECTURE REVIEW ou N/A
- [ ] DEVELOPMENT / manutenção
- [ ] CODE REVIEW
- [ ] DOCUMENTATION AUDIT ou N/A
- [ ] QA ou N/A
- [ ] HUMAN APPROVAL

**HUMAN APPROVAL é obrigatório antes do merge. Não fazer auto-merge.**

## Dívidas / follow-ups

Liste explicitamente qualquer dívida que permaneça. Não esconda dívida conhecida dentro do merge.
