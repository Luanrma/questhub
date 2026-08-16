# Feature Spec — <nome da feature>

Status: **DRAFT | READY | CURRENT | DEPRECATED**

Card: `<QH-XXX>` — `<URL do card Trello>`  
Domínio: `<domínio>`

> Uma Feature Spec representa trabalho funcional/governado e, portanto, exige card Trello antes de sua criação. Manutenção elegível a `NO-CARD` não cria Feature Spec apenas para satisfazer processo.

## Objetivo

Descreva o resultado que a feature deve entregar para o usuário/produto, sem prescrever implementação desnecessária.

## Problema

Qual problema existe hoje e por que precisa ser resolvido?

## Escopo

- <incluído>

## Fora de escopo

- <explicitamente não incluído>

## Personas / permissões

- `<persona/papel>`: <o que pode fazer>

## Regras

1. <regra observável/de negócio>

## Fluxo principal

1. <passo>
2. <passo>

## Estados e erros relevantes

- <estado/erro>: <comportamento esperado>

## Contratos

Documente somente quando aplicável:

- HTTP;
- realtime/eventos;
- tipos públicos;
- persistência estrutural;
- integração VTT/Game System.

## Impacto arquitetural

- [ ] Nenhum
- [ ] Usa ADR existente: `<ADR-XXXX>`
- [ ] Exige novo ADR

## Segurança / isolamento

Descreva validações de autenticação, permissão, ownership e pertença à Campaign quando aplicável.

## Realtime

Descreva como outros clientes são atualizados quando aplicável. Não introduza polling como substituto silencioso de um fluxo realtime existente.

## Critérios de aceite

### AC-01 — <nome>

Dado <contexto>, quando <ação>, então <resultado observável>.

### AC-02 — <nome>

Dado <contexto>, quando <ação>, então <resultado observável>.

## Testes esperados

- <teste unitário/contrato/e2e/invariante necessário>

## Dependências

- <dependência ou "nenhuma">

## Decisões relacionadas

- `<ADR-XXXX>` — <descrição>

## Questões abertas

Uma Feature Spec não pode receber status `READY` enquanto existir questão aberta que altere requisito, contrato, permissão ou arquitetura.
