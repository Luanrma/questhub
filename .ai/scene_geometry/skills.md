# Modulo: Scene Geometry (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript puro em `packages/game-system-core/src/shared/scene-geometry/` — zero dependencias (sem React, DOM, Socket, Zod, Prisma). Importavel por `apps/web`, `apps/api` e packages de sistema.
* Testes com `node:test` agregados em `apps/api/src/unit.test.ts`.

## 2. Padroes Aplicados
* **Funcoes puras e deterministicas**: mesma entrada → mesma lista de celulas, em qualquer runtime — pre-requisito para validar no cliente e no servidor com o mesmo codigo (plano secao 10, "mesma validacao no cliente e servidor").
* **Unidade unica (celula)**: o modulo nao conhece pes nem metros. `GameSystemDistancePolicy` (conversao de unidade de regra para celulas) vive no package do sistema; `metersPerCell` do grid nao decide regra aqui.
* **Criterio center-point**: celula coberta = centro da celula dentro da forma. Escolha deliberada (simples, deterministica, comum em VTTs para grid quadrado); o criterio alternativo do PF2e de tabletop fisico (template tocando a celula) fica documentado como evolucao possivel, nunca misturado silenciosamente.

## 3. Restricoes Tecnicas
* Ordenacao estavel da lista de celulas (linha, depois coluna) para igualdade estrutural em testes e diffs de payload.
* `EMANATION` soma 0.5 celula ao raio (a emanacao PF2e mede a partir da borda do conjurador, nao do centro) — unica regra "de sistema" tolerada aqui por ser puramente geometrica e parametrizada.
* Formas com direcao (`CONE`, `LINE`) recebem `directionRadians`; o chamador converte a posicao do cursor em angulo.
* `bounds` (largura/altura do tabuleiro em celulas) e obrigatorio em `computeCoveredCells` — celulas fora do tabuleiro nunca sao retornadas.

## 4. Decisoes de Performance
* Iteracao limitada ao bounding box da forma (nao o tabuleiro inteiro).
* Sem alocacao alem da lista final; sem cache (o calculo por frame de preview e barato: bounding box tipico < 400 celulas).

## 5. Limitacoes Conhecidas
* Grid hex: so as formas redondas (`BURST`/`EMANATION`/`CYLINDER`/`RING`, ver `specs.md` secao 7). `CONE`/`LINE`/`SQUARE`/`CUBE` retornam `null` em `computeCoveredHexCells` — nunca lista vazia, para o chamador distinguir "sem cobertura" de "forma nao suportada".
* Footprint de token fixo em 1x1 (centro do token decide).
* Sem line of effect/paredes/elevacao.
* `CYLINDER` tratado como circulo 2D (altura ignorada).
