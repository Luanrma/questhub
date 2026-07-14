# Modulo: Dice (Product)

## 1. Proposito
Rolagem de formula de dados **autoritativa no servidor**, usada por qualquer fluxo de jogo que precise de um resultado que o cliente nao pode ditar (resolucao de magia, ataques, checks). Distinto do dice-roller visual existente (`apps/web/src/vtt/dice-roller/`), que e cosmetico/client-side (fisica do `@3d-dice/dice-box`) e nao e usado como fonte de verdade de nenhuma regra — ver `.ai/vtt/specs.md` e `.ai/chat/specs.md` sobre `vtt:dice:roll`/`vtt:dice:rolled` serem legado.

## 2. Regras de Negocio
* Uma formula de dados (`"6d6"`, `"1d8+4"`, `"10"`) e interpretada em duas etapas independentes: parsing (puro, sem aleatoriedade, roda em qualquer ambiente) e rolagem (usa RNG, so deve rodar no servidor quando o resultado tem consequencia de jogo real).
* O servidor nunca aceita um resultado de dado computado pelo cliente para nenhuma acao que altere estado persistente (dano, cura, sucesso/falha). O cliente pode mostrar uma previa visual (dice-box), mas o numero que conta e sempre recalculado no servidor.
* Formatos suportados (auditados em `pf2e-master/packs/spells`, 74 formulas de dano distintas, secao `resolution` de `.ai/game_systems/pathfinder_2e/resolution/specs.md`): `NdM` (`"6d6"`), `NdM+K` (`"1d8+4"`), numero fixo (`"10"`). Nenhum formato com subtracao, multiplicador ou referencia dinamica (`"@item.rank"`) foi observado nos casos suportados por esta fatia — tratado como nao suportado, nunca aproximado.

## 3. Limites
Pertence: parsing de formula de dados (`parseDiceFormula`), rolagem autoritativa com RNG criptografico (`rollDiceFormula`, `rollD20`).
Nao pertence: qualquer regra de sistema de jogo (grau de sucesso, Spell DC, dano basico por salvamento — isso e `.ai/game_systems/pathfinder_2e/resolution/`); apresentacao visual de dados (`apps/web/src/vtt/dice-roller/`); persistencia de resultado (quem persiste e o modulo que consome a rolagem, ex.: `combat`).
