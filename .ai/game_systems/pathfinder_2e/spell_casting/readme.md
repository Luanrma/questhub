# Submodulo: Pathfinder 2e Spell Casting (Product)

## 1. Proposito
Implementacao PF2e da fatia minima de conjuracao definida em `.ai/spell_casting/`: regras de consumo por categoria de entrada, perfil de conjuracao (area/alcance/tempo/alvo) derivado do catalogo de magias, e conversao de unidades (pes → celulas) para o preview visual.

## 2. Regras de Negocio (PF2e)
* Truques (trait `cantrip`) nunca consomem recurso e podem ser conjurados a vontade.
* `PREPARED`: cada slot preparado individual (`rank` + `slotIndex`) so pode ser gasto uma vez ate o proximo preparo diario (`expended`).
* `SPONTANEOUS`: qualquer magia do repertorio pode consumir qualquer slot livre do rank (contador `used`/`max` por rank; o modelo de slots do spellbook ganhou o campo opcional `used`).
* `FOCUS`: consome 1 ponto do focus pool da entrada; refocus recupera 1 (nunca acima de `max`); descanso diario enche o pool.
* `INNATE`: cada magia inata tem contador proprio (`used`/`usesPerDay`); `at-will` nao consome.
* `RITUAL`/`ITEMS`: fora do fluxo de conjuracao nesta fase (rituais tem fluxo proprio futuro; item casting e fase futura).
* Tempo de conjuracao simples (1/2/3 acoes — formato real do catalogo e o digito puro em `system.time.value`, nao a forma por extenso) e interpretado pelo submodulo PF2e e debitado pelo endpoint generico quando ha encontro ativo. Reactions, free actions e tempos variaveis permanecem pendentes.
* Distancia: 5 pes = 1 celula tatica = 1.5 m. A conversao para celulas do grid usa `metersPerCell` da cena (`pathfinder2eFeetToCells`).
* Areas suportadas (tipos reais do compendio): burst, emanation, cone, line (largura 5 pes), cylinder (tratado como burst 2D), square, cube (centrados no ponto escolhido). Tipo desconhecido → sem area (reportado, nunca aproximado).
* Alcance: formatos reais "N feet", "touch", "N mile(s)", "planetary"; "varies" e demais → sem validacao de alcance (mostrado como texto).
* Alvo individual (magias sem area): `system.target.value` do catalogo interpretado como contagem quando o formato e simples ("1 creature", "up to N creatures", "N or M creatures", "one/two/three creature(s)" — cobre a maioria das ~860 magias com texto de alvo real). O jogador seleciona token(s) na cena antes de conjurar; o servidor revalida contagem, existencia e alcance de cada alvo. Texto vazio (auto-alvo/area) nao exige selecao; texto composto ou baseado em traits ("willing", "ally", "1 ally and 1 enemy") fica sem selecao, nunca bloqueado nem adivinhado.

## 3. Limites
Pertence: transformacao pura de consumo (`applyPathfinder2eCast`), montagem do perfil de conjuracao (`buildPathfinder2eCastOptions`), parsing de action cost simples (`parsePathfinder2eCastActionCost`), parsing de contagem de alvo (`parsePathfinder2eSpellTargetCount`), conversao de unidades (`spell-area.ts`), sugestao de entrada por classe (`spellcasting-suggestion.ts`).
Nao pertence: resolucao, effects, action economy avancada, heightening executavel, item casting, rituais — fases futuras do plano canonico.
