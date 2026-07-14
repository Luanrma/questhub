# Modulo: Scene Geometry (Product)

## 1. Proposito
Fornecer a matematica pura e agnostica de sistema para formas de area sobre o grid da cena (Fase 6 do plano `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md`): dado uma forma (burst, cone, linha, etc.) posicionada no tabuleiro, calcular **quais celulas do grid sao cobertas** e **quais tokens sao afetados** — os tres requisitos visuais da secao 23 do plano (preview de area, celulas pintadas, alvos destacados) nascem deste modulo.

## 2. Problema Resolvido
Sem este modulo, qualquer efeito de area (magia, hazard, aura) precisaria reinventar a conversao forma→celulas e forma→tokens, e o preview visual nao teria uma fonte unica de verdade compartilhavel entre cliente e servidor. O modulo e o motor: quem desenha (SVG no board) e quem interpreta a regra (package PF2e converte pes→celulas) sao camadas separadas.

## 3. Regras de Negocio
* Todas as coordenadas sao em **unidades de celula** (mesmo sistema do VTT: centro do token em `x = coluna + 0.5`). Nenhuma unidade de regra de sistema (pes, metros) entra aqui — a conversao pertence ao package do sistema (`GameSystemDistancePolicy`, plano secao 10).
* Uma celula e coberta quando seu **centro** esta dentro da forma (criterio center-point, o mesmo usado por templates de VTTs de referencia em grid quadrado). Isso torna o resultado deterministico e identico entre cliente e servidor.
* Um token e afetado quando a celula que contem o **centro do token** esta na lista de celulas cobertas (footprint 1x1 nesta fase; footprint maior e fase futura).
* Formas suportadas nesta fase: `BURST` (circulo a partir de um ponto), `EMANATION` (circulo a partir do token, raio + meia-celula do proprio token), `CONE` (90 graus, direcao em radianos), `LINE` (comprimento + largura, direcao em radianos), `CUBE`/`SQUARE` (quadrado a partir de origem), `CYLINDER` (identico a BURST no plano 2D — altura ignorada nesta fase), `RING` (anel: raio externo menos raio interno).
* Grid **quadrado**: todas as 8 formas. Grid **hexagonal**: suporte parcial (rodada de 2026-07-13) — apenas as formas redondas (`BURST`, `EMANATION`, `CYLINDER`, `RING`), via `computeCoveredHexCells`/`findAffectedHexTokens`/`hexDistanceInCells` (secao 7 de `specs.md`). `CONE`/`LINE`/`SQUARE`/`CUBE` em hex continuam sem suporte — o chamador deve tratar como bloqueado, nunca aproximar silenciosamente.

## 4. Personas
* **Desenvolvedor:** unico consumidor direto — o modulo nao tem UI nem API propria. Consumidores atuais: overlay visual do VTT (`apps/web/src/vtt/table/components/SpellAreaOverlay.tsx`), o fluxo de conjuracao PF2e no cliente e a revalidacao de area/alcance no servidor (`apps/api/src/modules/spell_casting/routes.ts`).

## 5. Casos de Uso
* Calcular as celulas cobertas por um burst de raio 6 celulas centrado num ponto do tabuleiro.
* Calcular quais tokens estao dentro de um cone de 4 celulas a partir do token conjurador, apontando para o cursor.
* Validar (no cliente, e futuramente no servidor) que o ponto de origem de uma area esta dentro do alcance do conjurador.

## 6. Limites
Pertence ao modulo:
* tipos de forma (`SceneAreaShape`), celula (`SceneGridCell`) e ponto (`ScenePoint`);
* `computeCoveredCells(shape, bounds)` e `findAffectedTokens(cells, tokens)`;
* distancia euclidiana em celulas (`distanceInCells`).

Nao pertence ao modulo:
* conversao de unidades de sistema (pes PF2e → celulas) — package do sistema;
* renderizacao (SVG/canvas) — componente do VTT;
* regra de qual forma uma magia usa — catalogo do sistema;
* line of effect, cover, paredes, elevacao, footprint >1x1, cone/linha/quadrado/cubo em grid hexagonal — fases futuras (plano secao 10);
* persistencia de regioes (areas que ficam na cena apos a conjuracao) — fase `Effects completos`.
