# Pathfinder 2e — Moedas — Especificação

## Persistência

Cada ficha PF2e completa pode ter uma entrada de carteira:

```ts
{
  namespace: 'questhub:pathfinder_2e'
  typeKey: 'currency'
  catalogNamespace: 'questhub:pathfinder_2e:currency:v1'
  catalogContentId: 'wallet'
  schemaVersion: 1
  data: { platinum: number, gold: number, silver: number, copper: number }
  state: null
}
```

Todos os valores são inteiros entre `0` e `100_000_000`. A carteira é criada
preguiçosamente com saldo zero. Não há alteração de schema ou migration.

## HTTP

```text
GET  /api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency
GET  /api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency/recipients
POST /api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency/transfers
PATCH /api/campaigns/:campaignId/actors/:actorId/pathfinder-2e/currency
```

`GET` exige Mestre ou controlador do ator. A lista de destinatários mostra
somente outros atores ativos da mesma campanha com ficha PF2e completa e
controlador ativo, incluindo atores do Mestre.

Transferência recebe:

```ts
{ recipientActorId: string, amount: Currency }
```

O remetente precisa controlar o ator de origem (ou ser Mestre), o destino deve
ser outro ator elegível da mesma campanha, e `amount` deve possuir ao menos uma
moeda positiva. A operação falha integralmente se qualquer denominação de origem
ficar negativa.

Ajuste do Mestre recebe:

```ts
{ adjustment: { platinum: number, gold: number, silver: number, copper: number } }
```

Valores são inteiros assinados; ao menos um precisa ser diferente de zero. O
resultado não pode ter denominação negativa.

## Interface

O inventário PF2e mostra um box de moedas no canto inferior direito do rodapé,
fora da área rolável e sem sobrepor os slots. Jogadores clicam para transferir
ao destinatário elegível. Mestres clicam para creditar ou debitar. Os quatro
campos representam as denominações reais e não realizam conversão implícita.

## Critérios de aceite

1. O VTT e o inventário neutro não conhecem moeda PF2e.
2. Saldo persiste ao recarregar.
3. Jogador não consegue alterar diretamente o próprio saldo.
4. Jogador não transfere a ator de outra campanha, a si mesmo ou sem saldo.
5. Mestre pode adicionar e subtrair sem permitir saldo negativo.
6. Uma transferência atualiza origem e destino atomicamente.
