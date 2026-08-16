# QuestHub Pull Request

## Card / objetivo

Card: `<QH-XXX | N/A>`

Descreva objetivamente o que esta PR entrega.

## Feature Spec

- [ ] Não é mudança funcional
- [ ] Spec: `docs/features/<feature>/spec.md`

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

## Critérios de aceite

Liste os ACs da Feature Spec cobertos por esta PR.

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

- [ ] Feature Spec continua compatível
- [ ] Architecture continua compatível
- [ ] ADRs continuam compatíveis
- [ ] documentação alterada quando necessário

## Dívidas / follow-ups

Liste explicitamente qualquer dívida que permaneça. Não esconda dívida conhecida dentro do merge.
