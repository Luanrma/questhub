# Feature Spec — API e ciclo de vida manual de Active Effects

Status: **READY**

Card: `QH-EFF-002` — `https://trello.com/c/byTr8cZ3/7-qh-eff-002-api-e-ciclo-de-vida-manual-de-active-effects`
Dependência: `QH-EFF-001`
Domínio: `VTT Core / CampaignActorEffect`

## Objetivo

Expor contratos genéricos para listar, criar manualmente, editar e remover instâncias atualmente ativas de `CampaignActorEffect`, sem interpretar regras de Game System e sem alterar atributos, ficha, Token ou qualquer mecânica.

A API deve servir como base para a futura UI de ficha e para integrações de Game System, mantendo separadas a entrada manual pública e a criação programática por serviços internos.

## Escopo

- listar efeitos ativos de um `CampaignActor`;
- criar efeito manual por HTTP;
- editar campos genéricos de apresentação de uma instância existente;
- remover uma instância ativa;
- fornecer serviço interno genérico capaz de persistir efeitos namespaced originados por Game System;
- validar autenticação, membership ativo, `campaignId`, `actorId` e `effectId` no backend;
- respeitar controle de Actor para leitura;
- restringir mutações HTTP ao Mestre;
- rejeitar operações normais em Actor arquivado, preservando os efeitos existentes até eventual restauração;
- emitir evento realtime genérico de invalidação após criação, edição ou remoção.

## Fora de escopo

- UI na ficha;
- indicadores no Token;
- qualquer Condition/Spell/Item/Creature/Hazard específico;
- regras PF2e;
- stacking, substituição ou deduplicação;
- duração automática;
- resolução de save/attack;
- alteração de HP, CA, saves, atributos, rolagens ou qualquer outra mecânica;
- histórico de efeitos removidos;
- soft delete de efeito;
- permitir Player criar, editar ou remover efeitos;
- endpoint público capaz de forjar `namespace`, `definitionKey`, `schemaVersion`, `payload` ou `origin` de um Game System.

## Permissões

### Mestre

Um `CampaignMember` ativo com papel `MASTER` pode:

- listar efeitos de qualquer Actor ativo da própria Campaign;
- criar efeitos manuais;
- editar campos genéricos de apresentação;
- remover efeitos ativos.

### Player

Um `CampaignMember` ativo com papel `PLAYER` pode:

- listar efeitos somente de Actors ativos cujo `controllerMemberId` seja o próprio membership;
- não pode criar, editar ou remover efeitos por esta API.

O vínculo com Token não é requisito para leitura: o efeito pertence ao Actor.

### Não membros / membros inativos

Não possuem acesso.

## Actor arquivado

Os endpoints normais tratam Actor com `archivedAt != null` como indisponível.

Consequências:

- os efeitos já persistidos permanecem intactos;
- nenhuma listagem, criação, edição ou remoção é executada por estes endpoints enquanto o Actor estiver arquivado;
- se o Actor for restaurado, os efeitos preservados voltam a estar acessíveis.

## Ciclo de vida

Esta feature representa somente instâncias atualmente ativas.

- `POST` cria uma nova instância;
- `PATCH` altera a instância existente;
- `DELETE` remove definitivamente a instância;
- não existe `removedAt`, `endedAt` ou histórico nesta entrega.

Remover e recriar resulta em uma nova identidade de efeito.

## Contratos HTTP

### GET `/api/campaigns/:campaignId/actors/:actorId/effects`

Retorna as instâncias ativas do Actor ordenadas por `createdAt` e `id`.

Resposta conceitual:

```ts
type ActorEffectResponse = {
  id: string
  actorId: string
  namespace: string
  definitionKey: string | null
  name: string
  description: string | null
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  category: string | null
  displayValue: string | null
  schemaVersion: number
  payload: unknown | null
  origin: unknown | null
  createdAt: string
  updatedAt: string
}
```

### POST `/api/campaigns/:campaignId/actors/:actorId/effects`

Cria exclusivamente um efeito manual.

Body:

```ts
type CreateManualActorEffectRequest = {
  name: string
  description?: string | null
  iconUrl?: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  category?: string | null
  displayValue?: string | null
}
```

A rota define internamente:

- `namespace = 'questhub:manual-effects:v1'`;
- `definitionKey = null`;
- `schemaVersion = 1`;
- `payload = null`;
- `origin = { type: 'MANUAL' }`.

O cliente HTTP não controla identidade ou estado opaco de Game System.

Retorna `201` com a instância criada.

### PATCH `/api/campaigns/:campaignId/actors/:actorId/effects/:effectId`

Permite alterar somente campos genéricos de apresentação:

```ts
type UpdateActorEffectRequest = {
  name?: string
  description?: string | null
  iconUrl?: string | null
  polarity?: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  category?: string | null
  displayValue?: string | null
}
```

O body deve conter pelo menos um campo.

A rota não altera:

- `actorId`;
- `namespace`;
- `definitionKey`;
- `schemaVersion`;
- `payload`;
- `origin`.

Retorna a instância atualizada.

### DELETE `/api/campaigns/:campaignId/actors/:actorId/effects/:effectId`

Remove definitivamente a instância ativa.

- retorna `204` quando a instância é removida;
- uma repetição posterior pode retornar `404`; o estado final permanece idempotente: a instância não existe.

## Serviço interno genérico

A implementação deve possuir uma camada de serviço reutilizável que não dependa de HTTP e possa, posteriormente, ser chamada por uma integração de Game System.

Contrato conceitual:

```ts
type CreateActorEffectInput = {
  actorId: string
  namespace: string
  definitionKey?: string | null
  name: string
  description?: string | null
  iconUrl?: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  category?: string | null
  displayValue?: string | null
  schemaVersion?: number
  payload?: unknown | null
  origin?: unknown | null
}
```

O serviço persiste e transporta esses dados sem interpretar semântica concreta.

`QH-EFF-009` poderá usar essa capacidade para materializar uma definição PF2e em uma instância do Actor sem fazer o VTT Core conhecer PF2e.

## Realtime

Após `POST`, `PATCH` ou `DELETE`, o backend publica um evento genérico de invalidação na sala da Campaign:

```ts
'vtt:actor-effects:changed'
{
  campaignId: string
  actorId: string
}
```

O evento não carrega regra de Game System nem exige que o cliente aceite o payload da mutação como fonte de verdade. Consumidores podem refazer a leitura autenticada.

Não usar polling periódico como mecanismo padrão de sincronização.

## Validação

- `campaignId`, `actorId` e `effectId`: string não vazia;
- `name`: trim, mínimo 1, máximo 120 caracteres;
- `description`: máximo 4000 caracteres;
- `iconUrl`: string opcional/nula, máximo 2048 caracteres;
- `category`: trim opcional/nula, máximo 120 caracteres;
- `displayValue`: trim opcional/nula, máximo 120 caracteres;
- `polarity`: apenas os três valores persistidos pelo Core;
- strings opcionais vazias são normalizadas para `null` quando aplicável.

## Erros esperados

- `400`: parâmetros/body inválidos;
- `403`: membership ausente/inativo ou permissão insuficiente;
- `404`: Actor inexistente, pertencente a outra Campaign, arquivado, efeito inexistente ou efeito pertencente a outro Actor;
- `201`: criação concluída;
- `204`: remoção concluída.

A API não revela por erro que um Actor/effect pertence a outra Campaign.

## Regras

1. A Campaign continua sendo a fronteira do mundo.
2. O efeito continua pertencendo exclusivamente ao `CampaignActor`.
3. Token e ficha não participam da autorização estrutural do efeito.
4. O Core não conhece nomes ou regras de Conditions concretas.
5. Duas instâncias com a mesma definição continuam permitidas.
6. `POST` manual nunca executa deduplicação ou stacking.
7. `PATCH` é uma atribuição de estado e deve ser idempotente para o mesmo body.
8. `DELETE` remove a instância atual; não cria histórico implícito.
9. Mutações não alteram qualquer outro recurso mecânico.
10. Dados opacos de Game System só entram pelo serviço interno apropriado, não por spoofing da rota manual.

## Critérios de aceite

### AC-01 — Leitura por Mestre

Mestre ativo consegue listar efeitos de qualquer Actor ativo da própria Campaign.

### AC-02 — Leitura por controlador

Player ativo consegue listar efeitos de um Actor que controla, mesmo sem Token vinculado.

### AC-03 — Isolamento de leitura

Player não consegue listar efeitos de Actor que não controla; IDs de outra Campaign não atravessam a fronteira.

### AC-04 — Mutação somente pelo Mestre

Player não consegue criar, editar ou remover efeitos por esta API.

### AC-05 — Criação manual segura

POST cria uma nova instância usando namespace/origin manual definidos pelo backend e não aceita spoofing de identidade de Game System.

### AC-06 — Duplicidade preservada

Criar duas vezes o mesmo efeito manual gera duas instâncias distintas; o Core não aplica deduplicação.

### AC-07 — Atualização limitada

PATCH altera apenas os campos de apresentação permitidos e preserva identidade/opacos.

### AC-08 — Remoção sem histórico

DELETE remove a instância ativa definitivamente e não cria `removedAt` ou registro histórico.

### AC-09 — Actor arquivado preservado

Enquanto o Actor estiver arquivado, endpoints normais não mutam seus efeitos; a persistência existente permanece intacta.

### AC-10 — Realtime genérico

Cada mutação bem-sucedida publica `vtt:actor-effects:changed` com apenas `campaignId` e `actorId`.

### AC-11 — Sem automação mecânica

Nenhuma operação desta feature altera ficha, HP, CA, saves, atributos, rolagens, Token ou outra mecânica.

### AC-12 — Serviço reutilizável

Existe serviço interno agnóstico capaz de criar instâncias namespaced/opacas sem importar Game System concreto.

## Testes esperados

- validação dos bodies de POST/PATCH;
- matriz de autorização Mestre/Player/controlador;
- isolamento por Campaign;
- Actor arquivado tratado como indisponível;
- effectId limitado ao Actor informado;
- criação manual com namespace/origin definidos pelo backend;
- duas criações iguais resultam em duas IDs;
- PATCH preserva campos não mutáveis;
- DELETE remove a instância;
- evento realtime após cada mutação;
- teste estrutural garantindo ausência de PF2e/Condition/Spell no módulo genérico;
- `npm run check:architecture`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

Architecture Review required: **YES**, pois a entrega cria contrato HTTP/realtime e autorização sobre recurso de Campaign.

## Questões abertas

Nenhuma questão de produto bloqueante para `QH-EFF-002`.
