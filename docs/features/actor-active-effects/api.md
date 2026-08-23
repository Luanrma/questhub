# Feature Spec — API e ciclo de vida de Active Effects

Status: **IMPLEMENTED / EVOLVED**

Origem: `QH-EFF-002`  
Evolução de imutabilidade canônica: `QH-EFF-017`  
Domínio: `VTT Core / CampaignActorEffect`

## Objetivo

Expor contratos genéricos para listar, criar, editar quando permitido e remover instâncias atualmente ativas de `CampaignActorEffect`, sem interpretar regras de Game System e sem alterar ficha, Token ou valores mecânicos.

O Core diferencia apenas dois estados estruturais:

- `definitionKey == null`: instância manual/customizada;
- `definitionKey != null`: instância vinculada a uma definição canônica externa ao Core.

O Core não interpreta o conteúdo da `definitionKey` nem sabe a qual Game System ela pertence.

## Permissões

### Mestre

Um `CampaignMember` ativo com papel `MASTER` pode:

- listar efeitos de qualquer Actor ativo da Campaign;
- criar efeitos manuais;
- editar campos de apresentação **somente de Effects manuais**;
- remover Effects manuais ou canônicos aplicados ao Actor.

### Player

Um `CampaignMember` ativo com papel `PLAYER` pode listar Effects de Actors que controla, mas não pode criar, editar ou remover Effects por esta API.

Autorização é sempre validada no backend. IDs de outra Campaign não atravessam a fronteira.

## Contratos HTTP

### GET `/api/campaigns/:campaignId/actors/:actorId/effects`

Retorna as instâncias persistidas atualmente ativas do Actor. A resposta inclui, entre outros campos genéricos:

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
}
```

Os campos persistidos de uma instância canônica são transporte/fallback. A apresentação atual pode ser resolvida por Composition Root através de `definitionKey`.

### POST `/api/campaigns/:campaignId/actors/:actorId/effects`

Cria exclusivamente um Effect manual. O cliente pode fornecer somente campos genéricos de apresentação. A rota fixa no backend:

- `namespace = 'questhub:manual-effects:v1'`;
- `definitionKey = null`;
- `schemaVersion = 1`;
- `payload = null`;
- `origin = { type: 'MANUAL' }`.

O cliente não pode forjar identidade/opacos de Game System.

### PATCH `/api/campaigns/:campaignId/actors/:actorId/effects/:effectId`

Permite alterar campos genéricos de apresentação **somente quando `definitionKey == null`**:

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

A rota nunca altera `actorId`, `namespace`, `definitionKey`, `schemaVersion`, `payload` ou `origin`.

Se a instância possui `definitionKey != null`, o PATCH retorna `409`: a apresentação está vinculada à definição canônica e é somente leitura. Essa regra é aplicada no service/persistência, portanto não depende de esconder controles no frontend.

### DELETE `/api/campaigns/:campaignId/actors/:actorId/effects/:effectId`

Remove a instância ativa do Actor e retorna `204` quando concluído.

A presença de `definitionKey` **não bloqueia DELETE**. Remover uma instância canônica aplicada significa apenas desaplicá-la daquele Actor; não altera nem exclui a definição canônica.

## Actor arquivado

Actors com `archivedAt != null` são indisponíveis para os endpoints normais. A persistência existente permanece intacta e as mutações revalidam o Actor ativo dentro da transação.

## Serviço interno e fronteira de composição

O serviço interno genérico aceita dados namespaced/opacos para criação por fluxos de composição, mas não interpreta semântica concreta.

Direção permitida:

```text
Game System
  -> Composition Root
  -> serviço genérico CampaignActorEffect
  -> persistência
```

Engines de Game System não importam módulos internos do VTT Core. Ver `ADR-0005`.

## Realtime

Após mutações bem-sucedidas, o backend publica:

```ts
'vtt:actor-effects:changed'
{ campaignId: string; actorId: string }
```

PATCH canônico rejeitado não publica invalidação porque nenhuma mutação ocorreu. Não há polling periódico.

## Erros relevantes

- `400`: parâmetros/body inválidos;
- `403`: membership/permissão insuficiente;
- `404`: Actor/Effect indisponível no escopo autorizado;
- `409`: tentativa de editar apresentação de instância canônica (`definitionKey != null`);
- `201`: criação manual concluída;
- `204`: remoção concluída.

## Regras invariantes

1. Campaign é a fronteira do mundo.
2. Effect pertence ao `CampaignActor`.
3. O Core não conhece Conditions, Spells ou regras concretas.
4. `definitionKey` é opaca para o Core, mas sua presença indica vínculo canônico.
5. Effects canônicos são read-only para PATCH de apresentação.
6. Effects manuais permanecem editáveis pelo Mestre.
7. DELETE de uma instância canônica é permitido e não muta a definição.
8. Duas instâncias com a mesma definição continuam possíveis; o Core não deduplica nem aplica stacking.
9. Nenhuma mutação de Active Effect altera HP, CA, saves, atributos, rolagens ou Token.
10. Dados opacos de Game System entram somente pelo fluxo de composição autorizado.

## Critérios de aceite atuais

- leitura/autorização continuam campaign-scoped;
- POST manual não aceita spoofing de identidade;
- PATCH manual atualiza apenas campos permitidos;
- PATCH canônico retorna `409` e não persiste alterações;
- DELETE funciona para instâncias manuais e canônicas;
- Actor arquivado é protegido no limite transacional;
- realtime ocorre apenas após mutação bem-sucedida;
- módulo genérico permanece sem semântica/import de Game System.

## Referências

- `docs/features/actor-active-effects/sheet.md`
- `docs/features/game-system/pathfinder-2e/active-effects/locale-readonly.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
