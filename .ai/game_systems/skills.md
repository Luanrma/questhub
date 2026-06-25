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

## 3. Restricoes
* Nao usar condicionais espalhadas como `if system === 'PATHFINDER_2E'` fora do modulo de registry/adapters.
* O VTT nao deve importar arquivos internos de um ruleset.
* `campaigns` nao deve validar regras mecanicas de sistema.
* `characters` nao deve conhecer campos internos de ficha.
* `game_systems` valida o envelope comum e delega o bloco especifico ao ruleset.
* Cada ruleset deve ter seus proprios contratos documentados dentro de `.ai/game_systems/[system]/`.

## 4. Organizacao Recomendada
Backend:

```text
apps/api/src/modules/game_systems/
  registry.ts
  models.ts
  pathfinder_2e/
    index.ts
    character_sheet/
    classes/
    ancestries/
    heritages/
    backgrounds/
    feats/
    spells/
    items/
```

Frontend:

```text
apps/web/src/game-systems/
  registry.ts
  pathfinder-2e/
    character-sheet/
    classes/
    ancestries/
    heritages/
    backgrounds/
    feats/
    spells/
    items/
```

## 5. Migracao
O backend de ficha Pathfinder 2e deve viver em `apps/api/src/modules/game_systems/pathfinder_2e/character_sheet`. Novas regras de ficha nao devem ser criadas em um modulo global de `character_sheet`.

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
