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

Após sucesso do POST, `PathfinderActiveEffectComposer` agora chama:

```text
publishLocalActorEffectsChanged({ campaignId, actorId })
```

`useActorActiveEffects` e `useTokenActiveEffects` já escutam esse evento. O Token só recarrega quando o `actorId` recebido corresponde ao Actor atualmente vinculado; não há polling.

### Compatibilidade com instâncias antigas

A UI possui normalização defensiva em `vtt/actor-effects/presentationText.ts`. Assim, uma instância PF2e persistida antes deste card com `<p>...</p>` também deixa de mostrar tags cruas no detalhe.

O resolver PF2e da ficha normaliza `summary`, e o modal/lista do Token normaliza a descrição antes de exibi-la.

### Modal do Token

O modal permanece read-only e genérico, porém deixa de reduzir metadata a uma linha compacta. A área de detalhe separa explicitamente:

- Polaridade;
- Categoria, quando houver;
- Valor exibido, quando houver;
- Descrição normalizada.

Ele não lê nem renderiza `payload`, `origin`, namespace ou `definitionKey`, e não conhece termos concretos de Pathfinder.

## Regressões cobertas

- Frightened continua HARMFUL, `condition`, valor 1 por default e descrição sem tag `<p>`;
- Quickened continua BENEFICIAL;
- normalizador remove `script`/tags e preserva texto/lista;
- Composition Root consome a query layer QH-EFF-013;
- Composer publica invalidação local somente depois do POST bem-sucedido;
- Token continua escutando socket + invalidation local sem polling;
- modal exige metadata explícita e normalização, sem `dangerouslySetInnerHTML` ou campos opacos;
- arquitetura VTT/Game System continua coberta pelos gates existentes.

## Fora de escopo

Nenhuma mudança foi feita em stacking, duration, Rule Elements, saves, attacks, damage, modifiers ou automação Spell→Effect. QH-EFF-015 permanece responsável pelas referências clicáveis de conteúdo PF2e.
