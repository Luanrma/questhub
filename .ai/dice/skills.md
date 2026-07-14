# Modulo: Dice (Skills & Tech)

## 1. Stack
* `packages/game-system-core/src/shared/dice/dice-formula.ts` — parsing puro, sem dependencia de Node/crypto, reutilizavel no web (preview de texto) e no servidor.
* `packages/game-system-core/src/server/dice/roll-dice-formula.ts` — rolagem usando `node:crypto` (`randomInt`), so importado por codigo server-side (`apps/api`). Nunca importado pelo bundle web.

## 2. Padroes Aplicados
* **RNG injetavel**: `rollDiceFormula(formula, rollDie?)` e `rollD20(rollDie?)` aceitam uma funcao `(sides: number) => number` opcional (default `crypto.randomInt(1, sides + 1)`), permitindo testes deterministicos sem mockar `crypto`.
* **Parsing conservador**: `parseDiceFormula` reconhece so `NdM`, `NdM+K` e numero fixo; qualquer outra coisa retorna `null` — quem chama decide o que fazer com `null` (nunca um fallback silencioso de dano 0 ou 1).

## 3. Restricoes Tecnicas
* `rollDiceFormula`/`rollD20` nunca devem ser importados por codigo que roda no navegador — RNG criptografico do lado do cliente nao teria nenhuma garantia de autoridade (o jogador controla o proprio processo).
* Sem cache, sem estado — cada chamada e uma rolagem nova.

## 4. Limitacoes Conhecidas
* Sem suporte a subtracao (`NdM-K`), multiplicador, ou expressao com mais de um termo de dado (`NdM+PdQ`) — nenhum caso real observado no escopo atual (dano de magia com salvamento basico, componente unico). Se um consumidor futuro precisar disso, o parser deve ser estendido e reauditado contra dados reais, nao adivinhado.
* Sem "explosao" de dado, vantagem/desvantagem ou re-rolagem — mecanicas fora do escopo desta fatia.
