# Submodulo: Pathfinder 2e (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript para modelos do ruleset.
* Zod para validacao de blocos persistidos.
* React para componentes de ficha e componentes futuros de catalogos.

## 2. Padroes Aplicados
* **Ruleset Adapter:** exporta capacidades Pathfinder 2e para o registry de sistemas.
* **Catalog Modules:** cada familia de dados futura deve ficar em pasta propria.
* **Derived Calculations:** calculos como modificador de atributo e proficiencia ficam em funcoes puras testaveis.
* **Schema Versioning:** mudancas em estrutura persistida devem incrementar versao quando quebrarem compatibilidade.

## 3. Organizacao Recomendada

```text
pathfinder-2e/
  index.ts
  character-sheet/
  ancestries/
  heritages/
  backgrounds/
  classes/
  feats/
  spells/
  items/
```

## 4. Restricoes
* Nenhuma regra Pathfinder 2e deve ser implementada em `campaigns`.
* Nenhuma regra Pathfinder 2e deve ser implementada em `vtt`.
* Componentes Pathfinder 2e podem ser carregados por registry, nao por imports diretos em modulos genericos.
* Catalogos futuros devem ter contratos proprios antes da implementacao.
* Regras de equipamento PF2e devem ficar no adapter do ruleset. O core de `inventory` recebe apenas `equipmentOptionKey`, `resourceLocks` e `systemData`.
* Nao recriar slots corporais antigos (cabeca, cinto, aneis, botas). PF2e deve usar usage (`held`, `worn`, `stowed`), maos, armadura, escudo e investidura.
* O limite de investidura deve ser validado por recurso/capacidade do adapter (`pf2e:investiture`, maximo 10), nao por coluna especifica no core.
