# Modulo: Scene Geometry (Specs & Contracts)

## 1. Responsabilidade
Contratos de formas de area, cobertura de celulas e tokens afetados. Codigo em `packages/game-system-core/src/shared/scene-geometry/`.

## 2. Tipos

```ts
export type ScenePoint = { x: number; y: number } // unidades de celula; centro de celula = inteiro + 0.5

export type SceneGridCell = { column: number; row: number } // indices inteiros >= 0

export type SceneGridBounds = { columns: number; rows: number }

export type SceneAreaShape =
  | { kind: 'BURST'; center: ScenePoint; radiusCells: number }
  | { kind: 'EMANATION'; center: ScenePoint; radiusCells: number } // raio efetivo = radiusCells + 0.5
  | { kind: 'CONE'; origin: ScenePoint; directionRadians: number; lengthCells: number } // abertura fixa de 90 graus
  | { kind: 'LINE'; origin: ScenePoint; directionRadians: number; lengthCells: number; widthCells: number }
  | { kind: 'CUBE'; origin: ScenePoint; sizeCells: number }   // origem = canto superior esquerdo
  | { kind: 'SQUARE'; origin: ScenePoint; sizeCells: number } // identico a CUBE no plano 2D
  | { kind: 'CYLINDER'; center: ScenePoint; radiusCells: number } // identico a BURST no plano 2D
  | { kind: 'RING'; center: ScenePoint; radiusCells: number; thicknessCells: number }
```

## 3. Funcoes

```ts
export function computeCoveredCells(shape: SceneAreaShape, bounds: SceneGridBounds): SceneGridCell[]
// Celula coberta <=> centro da celula (col+0.5, row+0.5) dentro da forma.
// Resultado ordenado por row, depois column. Nunca inclui celulas fora de bounds.

export type SceneTokenPosition = { id: string; position: ScenePoint }

export function findAffectedTokens(cells: SceneGridCell[], tokens: SceneTokenPosition[]): string[]
// Token afetado <=> floor(position.x)/floor(position.y) esta em cells. Retorna ids na ordem de entrada.

export function distanceInCells(a: ScenePoint, b: ScenePoint): number // euclidiana
```

## 4. Regras de Cobertura por Forma
* `BURST`/`CYLINDER`: `distance(centroCelula, center) <= radiusCells`.
* `EMANATION`: `distance <= radiusCells + 0.5` (mede da borda do token).
* `CONE`: `distance(centroCelula, origin) <= lengthCells` E angulo entre (centroCelula - origin) e `directionRadians` dentro de ±45 graus. A celula da propria origem nao e coberta (cone parte do conjurador, nao o inclui).
* `LINE`: projecao do vetor (centroCelula - origin) sobre a direcao em (0, lengthCells] (estritamente maior que zero) E distancia perpendicular <= widthCells / 2. Projecao 0 e excluida de proposito: e o centro da celula do proprio conjurador, que a linha nao cobre (comprovado por teste — incluir `<= 0` era um bug real detectado na primeira rodada).
* `CUBE`/`SQUARE`: centroCelula dentro do retangulo `[origin.x, origin.x + sizeCells] x [origin.y, origin.y + sizeCells]`.
* `RING`: `radiusCells - thicknessCells < distance <= radiusCells`.

## 5. Cenarios de Erro / Fora de Escopo
* `computeCoveredCells`/`findAffectedTokens` sao **exclusivas de grid quadrado**. Para grid hexagonal, ver secao 7 — nunca reaproveitar essas duas funcoes com coordenadas hex.
* `radiusCells/lengthCells/sizeCells <= 0`: retorna lista vazia (sem excecao).
* Formas desconhecidas vindas de dados de sistema: o adapter do sistema retorna `null` antes de chegar aqui (ver `.ai/game_systems/pathfinder_2e/spell_casting/specs.md` secao 3).

## 6. Criterios de Aceitacao
* Burst de raio 1 centrado no centro de uma celula cobre exatamente 5 celulas (cruz: propria + 4 ortogonais) — `distance = 1` conta como dentro.
* Emanation de raio 1 a partir de um token cobre 3x3 = 9 celulas.
* Cone de comprimento 3 apontando para leste cobre celulas a leste dentro de ±45 graus, nunca a celula do conjurador.
* Linha de comprimento 4, largura 1, para leste cobre 4 celulas em linha reta.
* Nenhuma celula retornada fora de `bounds`.
* Token com centro em celula coberta e afetado; token adjacente fora da area nao e.
* Mesmo input produz exatamente a mesma lista (ordenada) em qualquer chamada.

## 7. Grid Hexagonal (suporte parcial, rodada de 2026-07-13)

Decisao de produto (confirmada com o usuario): apenas as formas "redondas" — `BURST`, `EMANATION`, `CYLINDER`, `RING` — tem cobertura hexagonal. `CONE`/`LINE`/`SQUARE`/`CUBE` continuam bloqueados em hex, sem aproximacao: nenhum VTT de referencia resolve cone/linha/quadrado sobre grid hexagonal da mesma forma, e adivinhar uma convencao arriscaria uma area visualmente errada na mesa.

Convencao: **odd-r offset, topo pontudo** (linhas impares deslocadas 0.5 celula para a direita), identica a ja usada pelo VTT para posicionar tokens e desenhar a regua de medicao hex (`apps/web/src/vtt/table/domain/boardMath.ts`: `hexRowStepUnits = sqrt(3)/2`, `snapHexTokenPosition`, `hexPolygonPoints`). `ScenePoint` em modo hex usa as mesmas unidades que um token hex realmente ocupa (`x = coluna + deslocamento_da_linha`, `y = linha * HEX_ROW_STEP_UNITS`) — nao ha um segundo sistema de coordenadas para a geometria.

```ts
export const HEX_ROW_STEP_UNITS = Math.sqrt(3) / 2 // = sen(60°), mesma constante do VTT

export function isAreaShapeSupportedOnHexGrid(shapeKind: SceneAreaShape['kind']): boolean
// true apenas para BURST/EMANATION/CYLINDER/RING.

export function hexCellFromPoint(point: ScenePoint): SceneGridCell
// Encontra a celula hex mais proxima de um ponto (usado para snap de posicionamento).

export function hexCellCenter(cell: SceneGridCell): ScenePoint
// Inverso de hexCellFromPoint — centro exato de uma celula hex.

export function hexDistanceInCells(a: ScenePoint, b: ScenePoint): number
// Distancia hexagonal em PASSOS INTEIROS de hexagono (nao euclidiana) — via
// conversao para coordenadas cubo e a formula padrao (|dx|+|dy|+|dz|)/2.
// Duas celulas adjacentes tem distancia exatamente 1.

export function computeCoveredHexCells(shape: SceneAreaShape, bounds: SceneGridBounds): SceneGridCell[] | null
// null (nunca []) quando a forma nao e suportada em hex — distingue
// "cobertura vazia porque o raio e zero" de "esta forma nao existe em hex".
// BURST/CYLINDER/EMANATION: disco de raio Math.round(radiusCells) passos ao
// redor da celula do centro (algoritmo de "range" em coordenadas cubo).
// RING: disco externo menos disco interno (radiusCells - thicknessCells).

export function findAffectedHexTokens(cells: SceneGridCell[], tokens: SceneTokenPosition[]): string[]
// Equivalente hexagonal de findAffectedTokens — usa hexCellFromPoint em vez
// de floor(x)/floor(y), porque floor nao encontra a celula hex correta
// (o deslocamento de linha e o espacamento vertical comprimido quebram o
// floor ingenuo).
```

Decisao deliberada sobre `EMANATION` em hex: o ajuste "+0.5 celula" do grid quadrado (secao 4) existe para incluir a propria celula do token numa distancia euclidiana continua. Em hex, um disco de raio R em passos inteiros ja inclui a celula central (R=0) por construcao — aplicar o mesmo raio de `BURST` e `EMANATION` em hex e a escolha correta, nao um descuido por omitir o ajuste.

### Criterios de Aceitacao (hex)
* Duas celulas hex adjacentes (uma na linha do token, uma na linha seguinte, respeitando o deslocamento odd-r) tem `hexDistanceInCells` exatamente `1`.
* Burst de raio 1 cobre a celula central mais as 6 vizinhas (7 celulas).
* Emanation de raio 1 cobre exatamente as mesmas 7 celulas que um burst de raio 1 (sem o ajuste `+0.5`).
* Ring de raio 2 espessura 1 nunca inclui a celula central.
* `computeCoveredHexCells` retorna `null` (nao `[]`) para `CONE`/`LINE`/`SQUARE`/`CUBE`.
* Nenhuma celula hex retornada fora de `bounds`.
* `findAffectedHexTokens` encontra um token na celula vizinha (linha seguinte) e nao encontra um token distante.
