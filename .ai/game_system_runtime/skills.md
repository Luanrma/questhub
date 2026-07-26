# Game System Runtime - Ferramentas e restrições

## Stack

- TypeScript estrito;
- Zod nos adaptadores que validam payloads de sistema;
- funções puras para derivação de regras;
- Node Test para contratos e fórmulas;
- Fastify e Prisma somente nas camadas externas que chamam o Runtime.

## Organização inicial

```text
apps/api/src/game_systems/runtime/
  contracts.ts
  game-system-runtime.ts
```

Adaptadores concretos permanecem dentro do próprio sistema:

```text
apps/api/src/game_systems/pathfinder_2e/
  runtime.ts
  character-sheet/
    adapter.ts
    mechanics.ts
```

## Restrições obrigatórias

- o Runtime não importa Pathfinder 2e nem qualquer outro sistema concreto;
- adaptadores de sistema não importam `apps/api/src/modules/**`;
- regras não acessam Prisma, Fastify, Socket.io, DOM, React ou Canvas;
- derivação deve ser determinística e sem efeitos colaterais;
- somente dados fundamentais e estado mutável são persistidos;
- valores derivados são recalculados ao carregar, validar ou salvar;
- toda mudança incompatível exige incremento de `schemaVersion` e migração explícita;
- nenhum erro de regra pode resultar em mutação parcial de banco;
- warnings de dados incompletos devem ser retornados ao chamador, não escondidos.

## Integração com o VTT

Interações futuras devem usar DTOs genéricos. Exemplos:

- `PLACE_AREA_TEMPLATE`;
- `SELECT_TOKENS`;
- `REQUEST_ROLL`;
- `SHOW_TOKEN_HIGHLIGHT`;
- `SHOW_AREA_ANIMATION`.

Os DTOs não podem conter tipos de Pathfinder como `Reflex`, `basic save`, `fire damage` ou `off-guard` no contrato do VTT. Esses conceitos permanecem dentro do payload opaco do sistema ou são interpretados pelo adaptador antes de solicitar uma capacidade genérica.

## Segurança

- autenticação e ownership são verificados antes da execução;
- o backend é a fonte autoritativa dos cálculos;
- o cliente pode solicitar uma prévia, mas não fornece totais derivados confiáveis;
- planos de mutação futuros devem ser validados pelo Runtime antes da transação.

## Performance

- fórmulas de ficha são síncronas e puras;
- catálogos mecânicos são estáticos e carregados em memória;
- não existe download de regras durante a execução;
- cálculos reativos no frontend devem usar debounce e endpoint de prévia;
- resultados derivados podem ser cacheados futuramente, mas nunca substituem os dados fundamentais.

## Testes mínimos

- validação do schema atual;
- migração da versão anterior;
- fórmula de proficiência por nível;
- fórmula de PV por ancestralidade, classe e Constituição;
- fórmula de CA sem armadura;
- mapeamento de atributos para saves e perícias;
- ausência de imports do VTT nos adaptadores.
