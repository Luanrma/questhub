# Submodulo: Ficha Pathfinder 2e (Skills & Tech)

## 1. Stack
* TypeScript para tipos, defaults e constantes.
* Zod para validacao do bloco `pathfinder2e`.
* React para formulario de edicao e visualizacao.

## 2. Padroes
* **System Adapter:** Exportar `system`, `dataKey`, `version`, `defaultSheet` e `schema` para consumo do modulo `character_sheet`.
* **Constants as Domain Vocabulary:** Ranks de proficiencia devem ser constantes numericas tipadas.
* **Schema First:** O backend valida exatamente o mesmo contrato documentado para a ficha.
* **Manual Values Now, Calculated Values Later:** Campos finais sao editaveis hoje, mas o schema guarda informacao suficiente para calculos futuros.

## 3. Constantes

```ts
export const PATHFINDER_2E_SYSTEM = 'PATHFINDER_2E' as const
export const PATHFINDER_2E_DATA_KEY = 'pathfinder2e' as const

export const PROFICIENCY_RANKS = {
  UNTRAINED: 0,
  TRAINED: 2,
  EXPERT: 4,
  MASTER: 6,
  LEGENDARY: 8,
} as const
```

## 4. Restricoes
* Nao criar nem vincular `Character`.
* Nao acessar canvas/tabuleiro diretamente.
* Nao salvar strings de rank como dado canonico.
* Nao implementar calculos automaticos neste MVP.
* Nao validar listas oficiais de opcoes neste MVP.
* Expor validadores e defaults para consumo do modulo `character_sheet`.
* Manter componentes, labels, paginas e tipos de formulario Pathfinder 2e dentro de `apps/web/src/components/character_sheet/pathfinder_2e_sheet`.
