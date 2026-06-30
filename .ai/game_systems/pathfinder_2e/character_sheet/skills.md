# Submodulo: Ficha Pathfinder 2e (Skills & Tech)

## 1. Stack
* TypeScript para tipos, defaults e constantes.
* Zod para validacao do bloco `pathfinder2e`.
* React para formulario de edicao e visualizacao.

## 2. Padroes
* **System Adapter:** Exportar `system`, `dataKey`, `version`, `defaultSheet` e `schema` para consumo do registry de `game_systems`.
* **Constants as Domain Vocabulary:** Ranks de proficiencia devem ser constantes numericas tipadas.
* **Schema First:** O backend valida exatamente o mesmo contrato documentado para a ficha.
* **Calculated Values, Persisted Snapshot:** Totais de pericia sao calculados no frontend a partir de nivel, rank e atributo chave, e persistidos como snapshot em `value`.
* **Fixed Summary Panel:** O resumo lateral fixo da ficha consome e edita o mesmo bloco `data.pathfinder2e`, sem criar estado paralelo de UI.

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
* Implementar apenas o calculo automatico de totais de pericias no frontend; demais calculos mecanicos continuam fora do MVP.
* Nao validar listas oficiais de opcoes neste MVP.
* Expor validadores e defaults para consumo do registry de `game_systems`.
* Manter componentes, labels, paginas e tipos de formulario Pathfinder 2e dentro de `apps/web/src/game-systems/pathfinder-2e/character-sheet` depois da migracao tecnica.
* A navegacao visual por abas pertence ao modal base, mas paginas, labels e icones da ficha Pathfinder 2e pertencem a este submodulo.
* O modal base nao deve conter condicionais por titulo de pagina Pathfinder 2e, nem importar icones para representar paginas Pathfinder 2e.
* O painel fixo de resumo pertence ao componente Pathfinder 2e e deve receber do modal apenas o nome generico do personagem.
* O arquivo `pathfinder_2e_sheet.json` no frontend deve representar exatamente o envelope persistido em `Character.sheet` para Pathfinder 2e.
* Tooltips simples de descricao podem ser implementados com CSS no componente Pathfinder 2e, sem persistir descricoes no banco.
* O motor de calculo de pericias deve ficar no submodulo Pathfinder 2e do frontend ate existir um adaptador compartilhado de regras.
* Nao criar README ou documentacao paralela dentro dos diretorios de codigo da ficha Pathfinder 2e; informacoes tecnicas devem ser atualizadas nos arquivos deste diretorio canonico em `.ai`.
