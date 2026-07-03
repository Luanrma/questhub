# Modulo: Sistemas de Jogo (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript para contratos de adapters.
* Zod para validacao de dados persistidos por sistema.
* React para componentes especificos de ruleset no frontend.
* Prisma apenas para persistir referencias genericas como `system` e JSONs de ficha/catalogo quando necessario.

## 2. Padroes Aplicados
* **Plugin Registry:** cada sistema registra um adapter com identificador, label, versao e capacidades.
* **Strategy:** validacoes, defaults e calculos mecanicos sao delegados ao adapter do sistema.
* **Anti-Corruption Layer:** modulos genericos consomem interfaces estaveis e nao estruturas internas de Pathfinder ou D&D.
* **Catalog Boundary:** classes, ancestralidades, spells, feats e itens devem ser tratados como catalogos do ruleset, nao como tabelas genericas obrigatorias do VTT.
* **Internal Package Boundary:** codigo especifico de sistema vive em package proprio dentro do monorepo, com facades temporarias nos apps apenas para compatibilidade.

## 3. Restricoes
* Nao usar condicionais espalhadas como `if system === 'PATHFINDER_2E'` fora do modulo de registry/adapters.
* O VTT nao deve importar arquivos internos de um ruleset.
* `campaigns` nao deve validar regras mecanicas de sistema.
* `characters` nao deve conhecer campos internos de ficha.
* `game_systems` valida o envelope comum e delega o bloco especifico ao ruleset.
* Cada ruleset deve ter seus proprios contratos documentados dentro de `.ai/game_systems/[system]/`.
* Codigo novo especifico de sistema nao deve ser adicionado diretamente em `apps/api/src/modules/game_systems/[system]` nem em `apps/web/src/game-systems/[system]`; use `packages/game-system-[system]`.
* Packages especificos de sistema podem depender de `packages/game-system-core`, mas nao devem depender de `apps/api` ou `apps/web`.
* Contratos de `game-system-core` nao devem conter campos mecanicos de sistemas especificos. Dados como CA, PV, traits, raridade, slots, proficiencia, ancestry, class, feat e equivalentes devem viver no package do sistema.
* Quando uma tela generica precisar exibir dados de sistema, o package deve adaptar esses dados para uma estrutura neutra de apresentacao, como `display.stats`, `display.tags`, `display.level` e `systemData` opaco.

## 4. Organizacao Recomendada
Packages:

```text
packages/
  game-system-core/
    src/server/character-sheet/
    src/server/bestiary/
  game-system-pathfinder-2e/
    src/server/character-sheet/
    src/server/bestiary/
    src/web/character-sheet/
    src/shared/
```

Application facades:

```text
apps/api/src/modules/game_systems/
  registry.ts
  bestiary/registry.ts
  pathfinder_2e/        # reexports temporarios
apps/web/src/game-systems/
  character-sheet/registry.tsx
  pathfinder-2e/        # reexports temporarios
```

## 5. Migracao
O backend de ficha Pathfinder 2e deve migrar para `packages/game-system-pathfinder-2e/src/server/character-sheet`. Novas regras de ficha nao devem ser criadas em um modulo global de `character_sheet`.

Durante a migracao, manter compatibilidade com o envelope persistido:

```json
{
  "system": "PATHFINDER_2E",
  "version": 1,
  "data": {
    "pathfinder2e": {}
  }
}
```
