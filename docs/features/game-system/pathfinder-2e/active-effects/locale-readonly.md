# QH-EFF-017 — Locale e imutabilidade de Active Effects canônicos

## Objetivo

Garantir que instâncias de Active Effects vinculadas a definições canônicas sejam apresentadas no locale configurado pelo usuário para o conteúdo do Game System e não possam ter sua apresentação editada como se fossem Effects manuais.

## Regras

### Locale

Para campanhas Pathfinder 2e, a preferência existente `pathfinder2e.contentLocale` continua sendo a fonte de verdade:

- `pt-BR` apresenta nome e descrição canônicos em português;
- `en-US` apresenta o conteúdo canônico original em inglês;
- ausência ou valor inválido mantém o default efetivo `pt-BR`.

Token e ficha não interpretam essa configuração. Os componentes genéricos enviam apenas as `definitionKey` para a Composition Root de Active Effects. A Composition Root resolve a preferência do usuário/campanha e devolve a apresentação canônica já localizada.

A consulta de detalhe também omite o locale na primeira abertura. O backend resolve a preferência persistida. O seletor de idioma do modal continua disponível como override temporário daquela consulta e não altera as configurações gerais.

Mudanças de Campaign User Settings disparam nova consulta das apresentações canônicas, mantendo Token e ficha sincronizados com a preferência atual.

## Imutabilidade de definição canônica

`CampaignActorEffect.definitionKey` é uma referência genérica para uma definição canônica. Quando `definitionKey != null`:

- nome, descrição, polaridade, categoria e valor de apresentação não podem ser alterados pelo PATCH genérico de Actor Effects;
- a UI de gerenciamento não oferece a ação Editar;
- uma chamada HTTP direta ao PATCH recebe conflito (`409`);
- remover/desaplicar a instância continua permitido ao Mestre;
- a definição canônica em si nunca é alterada pela remoção da instância.

Quando `definitionKey == null`, o Effect é manual/customizado e continua editável pelas mesmas regras de autorização existentes.

## Fronteira arquitetural

A regra de imutabilidade baseada em `definitionKey` é genérica e pertence ao Core de Actor Effects.

A interpretação de `pathfinder2e.contentLocale` permanece fora do VTT Core e dentro da Composition Root/Game System. Os componentes genéricos conhecem apenas o endpoint de apresentações canônicas e o contrato de `definitionKey`.

Não são adicionadas regras de PF2e, Conditions, Spells, Rule Elements, duração, stacking, dano ou saves ao VTT Core.

## Critérios de aceite

1. Token e ficha exibem o nome canônico em `pt-BR` quando essa é a preferência efetiva.
2. Com `en-US`, Token, ficha e detalhe apresentam a definição original em inglês.
3. Alterar Campaign User Settings provoca atualização das apresentações canônicas sem polling.
4. O detalhe canônico abre inicialmente no locale configurado e permite apenas override temporário pelo seletor local.
5. Effects com `definitionKey` não exibem ação Editar.
6. PATCH genérico de um Effect com `definitionKey` retorna `409` e não altera dados.
7. Effects manuais (`definitionKey == null`) continuam editáveis.
8. DELETE de instâncias canônicas continua permitido conforme autorização existente.
9. Token e ficha continuam usando o mesmo modal canônico de detalhe.
10. Game System Boundaries, unit tests e builds permanecem verdes.

## Implementação

- `apps/api/src/modules/campaign_actor_effects/service.ts`: bloqueio genérico de PATCH canônico.
- `apps/api/src/modules/campaign_actor_effects/routes.ts`: exposição do conflito como HTTP 409.
- `apps/api/src/composition/game-system-active-effects/routes.ts`: resolução de locale por Campaign User Settings quando não há override explícito.
- `apps/web/src/vtt/actor-effects/useCanonicalActorEffectPresentations.ts`: preload genérico e em lote de apresentações por `definitionKey`.
- `apps/web/src/vtt/actor-effects/ActorActiveEffectsPanel.tsx`: nome canônico localizado e edição apenas para Effects manuais.
- `apps/web/src/vtt/token-presentation/TokenPresentationOverlay.tsx`: nome/ícone canônicos localizados na lista do Token.
- `apps/web/src/vtt/actor-effects/CampaignActiveEffectDefinitionModal.tsx`: primeira consulta usa locale global; seletor funciona como override temporário.

## Referências

- `docs/features/game-system-user-settings-boundary/spec.md`
- `docs/features/game-system/pathfinder-2e/active-effects/spec.md`
- `docs/features/actor-active-effects/api.md`
- `docs/architecture/adr/ADR-0005-vtt-game-system-boundary.md`
