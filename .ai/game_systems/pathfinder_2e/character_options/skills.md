# Modulo: Opcoes de Personagem Pathfinder 2e (Skills & Tech)

## 1. Stack
* TypeScript para contratos, catalogo, adapter e normalizadores de runtime.
* Node.js em script `.cjs` para extracao local dos packs PF2e.
* Zod quando os contratos forem expostos por API HTTP.
* React para seletores, detalhes e escolhas de build na ficha.

## 2. Padroes
* **Spec-Driven Development:** contratos documentados antes do codigo.
* **Core Agnostico:** `packages/game-system-core` so conhece kind, source, display e `systemData: unknown`.
* **PF2e Package Boundary:** campos mecanicos como HP, boosts, proficiencias, idiomas, visao e rules ficam em `packages/game-system-pathfinder-2e`.
* **Static Generated Data:** o gerador produz arquivos TypeScript versionados no package PF2e; runtime nao busca dados externos.
* **Adapter Pattern:** o package PF2e expoe um adapter compativel com o contrato generico de character options.
* **Deterministic Generation:** outputs ordenados e estaveis para reduzir diffs artificiais.

## 3. Restricoes Tecnicas
* Nao usar `any`; dados brutos e campos desconhecidos devem ser `unknown` ou `Record<string, unknown>`.
* Nao inferir Heranca versatil por nome ou pasta; usar `system.ancestry === null`.
* Nao descartar Rule Elements desconhecidas.
* Nao descartar UUIDs, publicacao, licenca, remaster, source pack ou source path.
* Nao renderizar HTML bruto sem sanitizacao.
* Nao adicionar campos mecanicos PF2e ao core.
* Nao persistir o documento completo do Foundry em `Character.sheet`.
* Nao criar migration Prisma para catalogos estaticos enquanto JSON versionado e arquivos gerados forem suficientes.

## 4. Estrutura De Codigo Alvo
Core generico:

```text
packages/game-system-core/src/server/character-options/
  models.ts
  index.ts
```

Package PF2e:

```text
packages/game-system-pathfinder-2e/src/server/character-options/
  models.ts
  constants.ts
  normalize-common.ts
  normalize-description.ts
  normalize-publication.ts
  normalize-rules.ts
  normalize-references.ts
  normalize-attribute-choices.ts
  normalize-class.ts
  normalize-ancestry.ts
  normalize-heritage.ts
  normalize-background.ts
  compatibility.ts
  catalog.ts
  adapter.ts
  index.ts

  data/
    classes.generated.ts
    ancestries.generated.ts
    heritages.generated.ts
    backgrounds.generated.ts
    summary.generated.ts
```

API:

```text
apps/api/src/modules/game_systems/character-options/
  models.ts
  registry.ts
  routes.ts
```

Frontend PF2e:

```text
packages/game-system-pathfinder-2e/src/web/character-options/
  components/
  hooks/
  domain/
  infrastructure/
  index.ts
```

## 5. Performance
* Catalogos gerados devem ser carregados em memoria.
* Busca inicial pode ser normalizada por `plainText`, `name`, `slug` e tags; indices mais sofisticados ficam para volume maior.
* Paginacao deve acontecer antes da resposta HTTP.
* O filtro de Herancas deve usar indice por `ancestry.slug` e lista separada de versateis.

## 6. Seguranca
* API de catalogo exige autenticacao quando exposta pelo backend.
* A API nao deve depender de campanha para listar opcoes oficiais.
* Dados HTML de origem sao tratados como conteudo nao confiavel.
* Se futuramente houver catalogo custom por campanha, permissoes de campanha devem ser implementadas em modulo proprio, nao neste MVP.

## 7. Comandos Esperados
Comando alvo a adicionar:

```text
npm run generate:pf2e-character-options
```

O comando deve ler apenas a copia local `pf2e-master`, falhar em estrutura ambigua ou incompleta, e registrar a revisao auditada no summary gerado.

