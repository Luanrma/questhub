# Feature Spec — Indicadores de efeitos ativos no Token/VTT

Status: **IMPLEMENTED / EVOLVED**

Origem: `QH-EFF-010`  
Evoluções relevantes: `QH-EFF-015`, `QH-EFF-017`, `QH-EFF-018`  
Domínio: `VTT Core / CampaignToken presentation / CampaignActorEffect`

## Objetivo

Tornar Active Effects perceptíveis diretamente no VTT por meio de indicadores compactos associados ao Token que representa um `CampaignActor`, sem copiar ownership para o Token e sem fazer o VTT interpretar regras de um Game System.

A fonte de verdade **estrutural** continua sendo `CampaignActorEffect[]` do Actor. Quando a instância possui `definitionKey`, uma Composition Root pode fornecer a apresentação canônica atual daquela definição. O snapshot persistido na instância continua sendo fallback, não a autoridade editorial atual.

## Fonte de verdade e vínculo estrutural

```text
CampaignToken
  -> actorId opcional
  -> CampaignActor
  -> CampaignActorEffect[]
  -> definitionKey opcional
  -> apresentação canônica pela Composition Root, quando disponível
  -> indicadores no VTT
```

Regras:

- `CampaignToken.actorId = null`: não existe projeção de efeitos;
- efeitos pertencem ao Actor, nunca ao Token ou placement;
- desvincular/remover o Token não remove nem altera os efeitos do Actor;
- múltiplas instâncias iguais continuam permitidas e visíveis;
- `CampaignActorEffect` determina existência, valor exibido e identidade da instância;
- para `definitionKey != null`, a apresentação canônica atual pode substituir o snapshot persistido sem alterar a instância.

## Permissões

A feature não cria política própria. A leitura reutiliza a autorização genérica de Active Effects:

- `MASTER`: pode consultar Effects dos Actors ativos da própria Campaign;
- `PLAYER`: pode consultar somente Actors autorizados pela política genérica;
- Actor arquivado não projeta Effects;
- Token/Actor de outra Campaign não atravessa a fronteira;
- falha de leitura limpa a projeção local em vez de manter conteúdo obsoleto.

O backend permanece a fronteira de segurança.

## Contratos de leitura

A instância estrutural continua vindo de:

```http
GET /api/campaigns/:campaignId/tokens/:tokenId/actor-effects
```

Esse endpoint é somente leitura, campaign-scoped e não conhece Game System concreto.

Para instâncias com `definitionKey`, a UI pode consultar adicionalmente:

```http
GET /api/campaigns/:campaignId/game-system-effects/presentations?definitionKeys=...
```

A Composition Root resolve a definição no Game System responsável e entrega uma projeção neutra ao VTT.

## Apresentação

### Resumo

- até 3 Effects aparecem como badges compactos;
- excedentes aparecem como `+N`;
- `displayValue` continua vindo da instância e é apenas texto;
- não há deduplicação ou priorização mecânica;
- os badges não alteram posição, hitbox, seleção, targeting, movimento ou iniciativa.

### Autoridade visual canônica

Para Effect manual (`definitionKey == null`), a apresentação usa os próprios campos da instância.

Para Effect canônico (`definitionKey != null`), quando a projeção está disponível, a UI usa da **mesma definição canônica**:

- `name`;
- `iconUrl`;
- `polarity`;
- `category`.

Somente quando a projeção canônica não puder ser resolvida a UI recorre ao snapshot persistido (`effect.name`, `effect.iconUrl`, `effect.polarity`, `effect.category`). Esse fallback existe para resiliência e compatibilidade com instâncias antigas; ele não deve prevalecer sobre uma definição canônica disponível.

### Polaridade

A polaridade é apenas apresentação visual genérica:

- `BENEFICIAL` → Benéfico;
- `HARMFUL` → Prejudicial;
- `NEUTRAL` → Neutro.

Para Effect canônico, texto, borda e fallback icon usam a **polaridade canônica resolvida**, evitando inconsistência entre nome atualizado e snapshot antigo.

Regressão explícita do `QH-EFF-018`:

```text
bestiary-effects:1UHjPz8hgdnrN3zL
Effect: Deny Fate / Efeito: Negar o Destino
polarity = HARMFUL
```

O Token deve apresentá-lo como **Prejudicial**, mesmo que uma instância antiga tenha sido materializada como `NEUTRAL`.

### Categoria

`condition`, `effect` e `affliction` são apenas rótulos de apresentação recebidos pela projeção. O VTT não interpreta sua semântica mecânica.

### Detalhe

Ao clicar em um Effect aplicado, Token e ficha convergem no mesmo `CampaignActiveEffectDefinitionModal`, que usa o shell visual compartilhado `ActiveEffectDefinitionModal`.

Não mostrar ao usuário `payload`, `origin`, `namespace` ou `definitionKey` como dump técnico. A consulta é somente leitura e não executa regra mecânica.

## Sincronização

O Token refaz a leitura quando necessário por:

- `vtt:actor-effects:changed` da mesma Campaign/Actor;
- mudança de vínculo do Token;
- reconnect;
- invalidação local;
- mudança de Campaign User Settings para a apresentação canônica.

Não existe polling periódico. Socket/eventos apenas invalidam; a API continua sendo fonte de dados.

## Fronteira arquitetural

1. O Token não possui Effects.
2. `CampaignActorEffect` continua sendo o estado estrutural genérico do Actor.
3. `definitionKey` é opaca para o VTT Core.
4. O VTT consome somente o contrato neutro de apresentação canônica.
5. Resolver PF2e, locale, Conditions ou qualquer regra concreta pertence à Composition Root/Game System.
6. Nenhuma polaridade/categoria executa comportamento mecânico.
7. Nenhuma interação desta feature altera HP, CA, saves, atributos, rolagens, ações ou combate.

## Critérios de aceite atuais

1. Token sem Actor continua válido e não apresenta Effects.
2. Até 3 instâncias aparecem no resumo e excedentes como `+N`, sem deduplicação.
3. `displayValue` é apenas texto e não é interpretado.
4. Para manual, a apresentação da instância permanece válida.
5. Para canônico, nome, ícone, polaridade e categoria da definição atual prevalecem sobre snapshot persistido.
6. `Deny Fate` canônico aparece como `HARMFUL` / **Prejudicial**.
7. Fallback icon e classes visuais usam a mesma polaridade resolvida do rótulo textual.
8. Token e ficha abrem o mesmo modal canônico de detalhe.
9. Campos opacos não são exibidos.
10. Realtime/settings invalidam sem polling.
11. VTT permanece sem semântica concreta de Game System.
12. Nenhuma apresentação executa automação mecânica.

## Testes esperados

- projeção estrutural Token → Actor Effects continua somente leitura e campaign-scoped;
- resumo 3 + `+N` sem rolagem horizontal;
- apresentação canônica em lote por `definitionKey`;
- nome/ícone/polaridade/categoria canônicos prevalecem sobre snapshot antigo;
- caso `Deny Fate` é `HARMFUL` e exibido como Prejudicial;
- fallback icon recebe a polaridade resolvida;
- mudança de settings invalida apresentação;
- campos opacos não são renderizados;
- ausência de polling;
- boundary sem semântica PF2e no módulo genérico;
- `npm run test:unit`;
- `npm run build:web`;
- Game System Boundaries.

## Referências

- `docs/features/actor-active-effects/api.md`
- `docs/features/actor-active-effects/sheet.md`
- `docs/features/game-system/pathfinder-2e/active-effects/locale-readonly.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
