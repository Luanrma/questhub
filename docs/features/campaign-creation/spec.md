# Feature Spec — Criação de Campaign

Status: **CURRENT**

## Objetivo

Permitir que um usuário autenticado crie uma nova Campaign, tornando-se seu MASTER ativo e escolhendo obrigatoriamente o Game System daquele mundo.

## Escopo

- informar título;
- informar descrição opcional;
- escolher política de entrada;
- escolher Game System suportado;
- criar Campaign;
- criar o CampaignMember do criador com papel `MASTER` e status `ACTIVE`;
- gerar código de convite;
- executar criação da Campaign e membership inicial de forma atômica.

## Fora de escopo

- criar CampaignActor automaticamente;
- criar Character Sheet automaticamente;
- criar Inventory automaticamente;
- trocar Game System depois da criação;
- instalar/registrar novos Game Systems;
- interpretar qualquer regra do Game System durante a criação da Campaign.

## Pré-condições

- usuário autenticado;
- Game System informado deve ser aceito pelo sistema/registry disponível.

## Contrato atual

`POST /api/campaigns`

Payload:

```ts
{
  title: string
  description?: string
  joinPolicy?: 'PUBLIC' | 'PRIVATE'
  gameSystem: 'PATHFINDER_2E' // único sistema aceito pela implementação atual
}
```

Regras atuais:

- `title` é obrigatório e não pode ser vazio após trim;
- `description` vazia após trim é persistida como `null`;
- `joinPolicy` assume `PUBLIC` quando omitida;
- `gameSystem` é obrigatório;
- a implementação atual aceita `PATHFINDER_2E`;
- expansão para novos sistemas deve respeitar ADR-0001 e ADR-0005.

## Persistência

A operação deve criar em uma única transação:

1. `Campaign`;
2. `CampaignMember` do usuário criador.

Campaign:

- `createdByUserId` = usuário autenticado;
- `gameSystem` = sistema selecionado;
- `inviteCode` = código único gerado;
- demais campos conforme payload/valores padrão.

CampaignMember inicial:

- `campaignId` = Campaign criada;
- `userId` = usuário criador;
- `role` = `MASTER`;
- `status` = `ACTIVE`;
- `joinedAt` preenchido.

Nenhum `CampaignActor`, `CampaignCharacterSheet` ou `Inventory` é criado implicitamente.

## Resposta atual

Em sucesso, retorna HTTP `201` com dados da Campaign criada e metadados do criador necessários ao cliente, incluindo `gameSystem`, papel `MASTER` e estado inicial offline.

## Erros

- payload inválido: HTTP `400`;
- ausência/falha de autenticação: conforme contrato global de autenticação;
- falha transacional: nenhuma criação parcial de Campaign/membership deve permanecer.

## Critérios de aceite

### AC-01 — Game System obrigatório

Dado um usuário autenticado, quando tentar criar uma Campaign sem `gameSystem`, então a requisição deve ser rejeitada e nenhuma Campaign deve ser criada.

### AC-02 — Campaign com sistema selecionado

Dado um usuário autenticado e um Game System suportado, quando criar a Campaign com payload válido, então `Campaign.gameSystem` deve corresponder ao sistema escolhido.

### AC-03 — Criador vira MASTER ativo

Quando a Campaign for criada com sucesso, deve existir exatamente o membership inicial esperado para o criador com `role=MASTER` e `status=ACTIVE`.

### AC-04 — Atomicidade

Se a criação do membership inicial falhar, a Campaign não deve permanecer criada parcialmente.

### AC-05 — Nenhum Actor implícito

Criar uma Campaign não deve criar `CampaignActor`, Character Sheet ou Inventory automaticamente.

### AC-06 — Core não interpreta o ruleset

O fluxo genérico de criação pode validar/transportar a identificação de um Game System suportado, mas não deve executar regras mecânicas específicas dele.

## Decisões relacionadas

- ADR-0001 — Campaign exige um Game System;
- ADR-0002 — Campaign é a fronteira de isolamento dos dados;
- ADR-0003 — CampaignMember e CampaignActor são conceitos distintos;
- ADR-0005 — VTT Core não interpreta regras de Game System.
