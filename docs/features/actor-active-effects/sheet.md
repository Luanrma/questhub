# Feature Spec — Efeitos ativos na ficha

Status: **IMPLEMENTED / EVOLVED**

Origem: `QH-EFF-003`  
Evoluções relevantes: `QH-EFF-015`, `QH-EFF-017`  
Domínio: `VTT Core / Campaign Character Sheet Composition / CampaignActorEffect`

## Objetivo

A ficha de campanha é um ponto de consulta e gerenciamento das instâncias ativas do `CampaignActor`. A fonte de verdade estrutural continua sendo `CampaignActorEffect`; definições canônicas podem fornecer a apresentação atual através da Composition Root.

O VTT Core não interpreta regras ou locale de um Game System.

## Composição

Em fichas com apresentação `FULL`:

```text
CampaignCharacterSheetWorkspace(sheetId)
  -> Core resolve actorId
  -> ActorActiveEffectsPanel(actorId)
  -> GET CampaignActorEffect[]
  -> para definitionKey não nula, busca apresentação canônica em lote pela Composition Root
```

O renderer concreto do Game System não controla o ciclo de vida do painel.

## Apresentação

O painel:

- permanece visível entre páginas da ficha;
- não possui rolagem horizontal;
- mostra até 6 Effects no resumo e `+N Ver todos` para excedentes;
- diferencia visualmente `BENEFICIAL`, `HARMFUL` e `NEUTRAL` sem efeito mecânico;
- nunca renderiza `payload`/`origin` opacos como JSON;
- usa campos persistidos como fallback para instâncias manuais ou quando uma apresentação canônica não estiver disponível.

### Instâncias canônicas

Quando `effect.definitionKey != null`, o painel consulta o endpoint genérico de apresentações canônicas. Ele usa o nome/ícone devolvidos pela Composition Root em vez de tratar `effect.name` persistido como fonte editorial atual.

A UI genérica conhece somente `definitionKey` e o contrato de apresentação. Ela não conhece PF2e, Conditions, Spells ou `pathfinder2e.contentLocale`.

Mudanças nas Campaign User Settings invalidam a apresentação canônica e provocam nova consulta sem polling.

## Detalhes

Ficha e Token abrem o mesmo `CampaignActiveEffectDefinitionModal` para uma instância aplicada.

Na primeira abertura de uma definição canônica, o modal não força um idioma local: a Composition Root resolve a preferência geral persistida do usuário/campanha. O seletor de idioma permanece como override temporário somente daquele modal.

Effects manuais/sem definição canônica usam o mesmo shell visual com fallback genérico.

## Gerenciamento

### Criar

Somente Mestre recebe `Adicionar efeito`. O formulário cria uma instância manual e não envia `namespace`, `definitionKey`, `schemaVersion`, `payload` ou `origin`.

### Editar

Somente Effects manuais (`definitionKey == null`) exibem a ação Editar.

Effects vinculados a uma definição canônica (`definitionKey != null`) são somente leitura quanto aos campos de apresentação. A UI não mostra o lápis e mantém guarda defensiva contra estado obsoleto. O backend continua sendo a autoridade e rejeita PATCH canônico com `409`.

### Remover

Mestre pode remover uma instância manual ou canônica após confirmação. Remover uma instância canônica apenas a desaplica do Actor; a definição canônica não é alterada.

### Player

Player permanece somente leitura. Ocultar controles no frontend nunca substitui autorização backend.

## Dados e sincronização

Fonte estrutural:

```text
CampaignActorEffect[] do CampaignActor
```

Rotas de ciclo de vida:

```http
GET    /api/campaigns/:campaignId/actors/:actorId/effects
POST   /api/campaigns/:campaignId/actors/:actorId/effects
PATCH  /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
DELETE /api/campaigns/:campaignId/actors/:actorId/effects/:effectId
```

Apresentação canônica em lote:

```http
GET /api/campaigns/:campaignId/game-system-effects/presentations?definitionKeys=...
```

O componente não envia parâmetro de locale nessa consulta normal. A Composition Root resolve a preferência efetiva. O hook divide mais de 100 `definitionKey` em lotes compatíveis com o limite do endpoint.

Atualização ocorre por:

- `vtt:actor-effects:changed` para Campaign/Actor correspondente;
- reconnect;
- invalidação local após mutação bem-sucedida;
- mudança das Campaign User Settings para apresentações canônicas.

Não há polling periódico.

## Fronteira arquitetural

1. `CampaignActorEffect` continua genérico.
2. A presença de `definitionKey` é um fato estrutural genérico, não uma regra PF2e.
3. Resolver locale/conteúdo da definição pertence à Composition Root/Game System.
4. O painel não importa settings, catálogo ou engine de um Game System.
5. Nenhuma interação do painel altera HP, CA, saves, atributos, rolagens ou estado mecânico da ficha.

## Critérios de aceite atuais

1. Até 6 Effects aparecem no resumo sem rolagem horizontal.
2. Nome canônico localizado substitui o nome persistido quando há apresentação disponível.
3. Alteração da preferência geral de conteúdo provoca atualização de nome/apresentação.
4. Ficha e Token convergem no mesmo modal de detalhe.
5. Effect canônico não exibe ação Editar.
6. Effect manual continua editável pelo Mestre.
7. DELETE continua disponível para Effect canônico e manual conforme autorização.
8. Player não recebe controles de mutação.
9. `payload`/`origin` opacos não são apresentados.
10. O módulo genérico permanece sem semântica específica de Game System.

## Testes esperados

- limite visual 6 + `Ver todos` e ausência de overflow horizontal;
- preload de apresentação canônica por `definitionKey`;
- refetch em Campaign User Settings changed;
- Token/ficha mostram `presentation.name` para instância canônica;
- ausência do Pencil quando `definitionKey != null`;
- guardas de edição na UI e `409` no backend;
- manual continua editável;
- DELETE canônico continua permitido;
- realtime e reconnect sem polling;
- boundary estrutural sem PF2e/Condition/Spell no módulo genérico;
- `npm run test:unit` e `npm run build:web`.

## Referências

- `docs/features/actor-active-effects/api.md`
- `docs/features/game-system/pathfinder-2e/active-effects/locale-readonly.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
