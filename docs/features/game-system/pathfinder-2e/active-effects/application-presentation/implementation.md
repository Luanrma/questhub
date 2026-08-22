# QH-EFF-014 — Implementation Notes

## Alterações

### Composition Root

A rota de descoberta manual deixou de montar sua lista por `searchPathfinder2eEffectDefinitions` e passou a consumir `listPathfinder2eActiveEffectDefinitionViews`, o contrato de consulta do QH-EFF-013. O retorno usado pelo Composer continua compacto e deriva `valued`/`baseValue` de `conditionValue`.

A persistência continua sendo feita exclusivamente por `createActorEffect` no Core genérico.

### Resolução PF2e

`resolvePathfinder2eEffectApplication` continua sendo o único caminho de materialização para aplicações MANUAL, SPELL, ITEM, CREATURE e HAZARD.

A resolução preserva a polaridade editorial versionada da definição. Não existe inferência nem fallback de `NEUTRAL` durante a aplicação.

A descrição copiada para a instância passa por `normalizePathfinder2eAppliedEffectDescription`, que remove markup executável/cru sem consultar fonte externa e sem alterar o texto editorial intencional.

### Atualização de ficha e Token

O POST da Composition Root já publicava `vtt:actor-effects:changed` no room da Campaign. O problema observado na validação humana era que o Composer PF2e não executava a mesma invalidação local do CRUD genérico.

Após sucesso do POST, `PathfinderActiveEffectComposer` chama:

```text
publishLocalActorEffectsChanged({ campaignId, actorId })
```

`useActorActiveEffects` e `useTokenActiveEffects` escutam esse evento. O Token só recarrega quando o `actorId` recebido corresponde ao Actor atualmente vinculado; não há polling.

### Compatibilidade com instâncias antigas

A UI possui normalização defensiva em `vtt/actor-effects/presentationText.ts`. Assim, uma instância PF2e persistida antes deste card com `<p>...</p>` também deixa de mostrar tags cruas quando precisa usar a descrição persistida como fallback.

O resolver PF2e da ficha continua normalizando `summary`.

### Evolução posterior do detalhe do Token

O detalhe criado inicialmente neste card era read-only e genérico, com metadata explícita de polaridade, categoria, valor e descrição normalizada.

QH-EFF-015 evolui essa apresentação após feedback de Human Approval: quando a instância possui `definitionKey`, o Token consulta novamente a definição canônica pela Composition Root e usa o mesmo `ActiveEffectDefinitionModal` compartilhado pelas referências de conteúdo. Assim:

- a instância persistida não vira uma segunda fonte de verdade da definição;
- o VTT continua sem semântica PF2e;
- o visual de detalhe deixa de ter duas implementações concorrentes;
- `pt-BR`/`en-US` e descrição formatada são fornecidos pelo contrato canônico atual;
- efeitos manuais/sem `definitionKey` continuam usando fallback genérico seguro.

## Regressões cobertas

- Frightened continua HARMFUL, `condition`, valor 1 por default e descrição persistida normalizada;
- Quickened continua BENEFICIAL;
- normalizador remove `script`/tags e preserva texto/lista;
- Composition Root consome a query layer QH-EFF-013;
- Composer publica invalidação local somente depois do POST bem-sucedido;
- Token continua escutando socket + invalidation local sem polling;
- campos opacos não são renderizados como JSON;
- arquitetura VTT/Game System continua coberta pelos gates existentes.

## Fora de escopo

Nenhuma mudança foi feita em stacking, duration, Rule Elements, saves, attacks, damage, modifiers ou automação Spell→Effect. QH-EFF-015 permanece responsável pelas referências clicáveis e pela convergência da consulta canônica na UI.
