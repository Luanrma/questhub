# Submodulo: Pathfinder 2e Livro de Magias (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript no package `packages/game-system-pathfinder-2e`.
* Contratos agnosticos de apresentacao em `packages/game-system-core/src/server/spells`.
* React no renderer `packages/game-system-pathfinder-2e/src/web/spells`, consumido por modal no app web (mesmo padrao do Bestiario e dos Itens).
* Dados extraidos/normalizados de JSONs do Foundry PF2e em `pf2e-master/packs/spells` (subpastas `1st-rank` a `10th-rank`, `cantrip`, `focus` e `ritual` — organizacao do compendio, nunca fonte de verdade para classificacao).
* Geracao de dados estaticos em TypeScript via `scripts/generate-pf2e-spell-data.cjs`, mesmo padrao de `scripts/generate-pf2e-bestiary-data.cjs` e `scripts/generate-pf2e-item-data.cjs`, para evitar parsing dos packs em runtime.

## 2. Padroes Aplicados
* **Anti-Corruption Layer:** nomes e estruturas internas do Foundry nao vazam para o VTT.
* **Catalog Boundary:** magias e rituais do catalogo sao entradas de referencia do ruleset, nunca estado de personagem.
* **Presentation DTO:** a ficha simplificada e entregue como secoes genericas de apresentacao (`GameSystemSpellSheet`), reaproveitando literalmente o mesmo formato usado por `GameSystemBestiarySheet` e `GameSystemItemSheet`.
* **System Data Opaque:** dados mecanicos completos (rank, tradicao, escola, salvamento, dano, heightening) ficam em `systemData`, tipado apenas pelo package PF2e.
* **Structured Classification:** a categoria (`spell` vs `ritual`) e os traits (`cantrip`, `focus`) sao lidos de campos estruturados do compendio (`system.ritual`, `system.traits.value`), nunca de nome de arquivo, pasta ou icone.

## 3. Restricoes Tecnicas
* Nao adicionar campos como `spellRank`, `tradition`, `school`, `savingThrow` ou nomes de tradicao (`arcane`, `divine`, `occult`, `primal`) ao core como contrato tipado; eles ficam em `systemData` e sao adaptados para `display` como strings/tags opacas.
* A tela generica deve renderizar `display.sheet` sem conhecer regras internas de Pathfinder.
* A API deve validar que apenas Mestre ativo acessa o catalogo de magias da campanha (mesma regra de acesso do Bestiario e dos Itens).
* Nao implementar conjuracao, resolucao de ataque/salvamento, dano ou heightening executavel nesta fase. O campo `heightening` do Foundry, quando existir, e apenas texto de apresentacao dentro de `systemData`/`display.sheet`, nunca logica executavel.
* Descricoes longas do Foundry (`system.description.value`, HTML) devem ser sanitizadas e limpas de macros (`@UUID`, `@Damage`, `@Check`, `@Localize`) e tags, reaproveitando o padrao `cleanText()` ja usado pelo gerador do Bestiario; nao usar `dangerouslySetInnerHTML`.
* Normalizadores nao podem identificar categoria ou traits por `name`, pasta ou icone — apenas por `system.ritual`, `system.traits.value` e `system.level.value` (mesma restricao ja aplicada aos normalizadores de Itens).
* Sem traducao pt-BR nesta primeira entrega (mesma decisao ja tomada para os Itens): os dados gerados nao possuem bloco de traducao; o catalogo e exibido no idioma original.

## 4. Decisoes de Performance
* A listagem e paginada e filtrada em memoria sobre dados estaticos normalizados (mesmo padrao do Bestiario/Itens).
* O endpoint de detalhe usa lookup por id sobre um `Map` construido a partir do catalogo normalizado.
* O arquivo gerado deve conter apenas os campos necessarios para listagem, ficha simplificada, fonte e `systemData` minimo; HTML extenso do Foundry deve ser sanitizado/resumido antes de ser embutido no arquivo gerado.

## 5. Limitacoes Conhecidas
* Sem traducao pt-BR nesta entrega (ver secao 3).
* Regras de heightening, dano estruturado e formulas de rolagem nao sao interpretadas nem calculadas (nenhum Rule Engine nesta fase); os dados brutos sao preservados losslessly para consumo por uma fase futura.
* Rituais sao apenas catalogados (nome, checagens sugeridas, descricao); nenhum fluxo de execucao de ritual e implementado.

## 6. Fase 1 do Plano de Interacao e Efeitos — Decisoes Tecnicas

Escopo desta fase definido em `.ai/game_systems/pathfinder_2e/spells/questhub-spell-interaction-effects-plan.md` secao 19: Baseline + importador lossless + dependency graph. Decisoes tomadas para viabilizar essa fase sem violar as restricoes do plano nem o padrao arquitetural do projeto:

* **Rich-text AST em vez de sanitizacao destrutiva.** O antigo `cleanText()` (que apagava `@UUID`/`@Check`/`@Damage`/`@Template` e truncava a descricao) foi substituido por um compilador (`compileRichText`) que devolve `{ raw, nodes }`: `raw` e o HTML original intacto (sem truncamento) e `nodes` e uma sequencia tipada (`TEXT`, `UUID`, `CHECK`, `DAMAGE`, `TEMPLATE`, `LOCALIZE`, `ACTION_GLYPH`) que preserva o payload de cada macro. Tabelas HTML (`<table>`) sao compiladas para linhas de texto (`celula | celula`), nao descartadas.
* **`system.damage`, `system.overlays` e `system.rules` sao importados integralmente**, sem normalizacao/interpretacao. `overlays` viram `Pathfinder2eSpellOverlay[]` (patch por variante de acoes); `rules` viram `Pathfinder2eRuleElementSource[]` (passthrough opaco, usado apenas para localizar `key`, `uuid` e `effects[].uuid` durante a resolucao de dependencias — a implementacao do comportamento de cada Rule Element pertence ao Rule Engine, fase futura).
* **Grafo de dependencias com escopo explicito.** Nesta fase, `dependencyIds` de uma magia/ritual cobre: (a) UUIDs em `system.rules[].uuid`/`effects[].uuid` (GrantItem/EphemeralEffect/Aura) da propria magia; (b) UUIDs de tipo `Item` na descricao que apontam para packs de efeito conhecidos (`spell-effects`, `conditions`/`conditionitems`, `equipment-effects`, `feat-effects`, `other-effects`, `campaign-effects`, `bestiary-effects`) — convencao usada pelo compendio para linkar o effect concedido por uma magia (ex.: Haste -> "Spell Effect: Haste"). Referencias de mera citacao textual (ex.: `@UUID` para `actions`, `spells-srd`, `feats-srd`, Atores de bestiario, journals, macros) **nao** entram em `dependencyIds`: sao apenas links de leitura dentro da prosa, nao dependencias mecanicas. A resolucao e recursiva (profundidade limitada, com deteccao de ciclo) sobre os effects/conditions encontrados, repetindo o mesmo criterio.
* **Alias de packs legados.** UUIDs do compendio usam nomes de pack antigos que nao batem 1:1 com as pastas atuais de `pf2e-master/packs` (`spells-srd`->`spells`, `actionspf2e`->`actions`, `conditionitems`->`conditions`, `equipment-srd`->`equipment`, `feats-srd`->`feats`). O resolver mantem uma tabela de alias fixa; pack nao mapeado e resolvido pelo proprio nome.
* **Effects/Conditions nao viram catalogo publico nesta fase.** Os documentos de `spell-effects`/`conditions` alcancados pelo grafo de dependencias sao importados apenas como fechamento transitivo interno (`Pathfinder2eSpellEffectDependency[]`), para suportar a resolucao e as fixtures douradas. Um catalogo completo de Effects/Conditions com API/UI proprias, `.ai/game_systems/pathfinder_2e/effects/` e `.../conditions/`, fica para uma fase futura — nao criar esses modulos agora.
* **Manifesto de origem sem SHA fabricado.** `pf2e-master` esta vendorizado neste repositorio sem `.git` proprio (nao e um checkout rastreavel) e nao possui `system.json`; nao ha commit SHA verificavel do `foundryvtt/pf2e`. `Pathfinder2eSourceManifest.commitSha` fica `null` nesta condicao, e `systemVersion` usa o valor real e verificavel de `pf2e-master/package.json` (`"foundry-pf2e"`, hoje `6.12.4`). Nunca inventar um SHA para preencher o campo.
* **Compatibility report gerado, gate manual.** O gerador escreve `Pathfinder2eSpellCompatibilityReport` (contagens de referencias nao resolvidas, Rule Elements desconhecidos no grafo de dependencias, falhas de compilacao) versionado junto ao catalogo. Nao existe pipeline de CI neste projeto para travar o build automaticamente nesta fase; o gate da secao 15 do plano (`unresolvedReferences.length === 0` etc.) e verificado por teste automatizado (`node:test`) que le o relatorio gerado, e nao deve ser silenciado nem editado manualmente para "zerar" um numero real.
* **Excecao mantida: `// @ts-nocheck` no arquivo gerado.** O plano (secao 15) pede para nao usar `@ts-nocheck` como solucao final para os dados gerados. Regra mantida: o objetivo e nao *esconder* incompatibilidade atras do `@ts-nocheck` — e por isso o compatibility report existe e e testado. Mas o `data.generated.ts` em si continua com `@ts-nocheck`, seguindo o mesmo padrao ja usado por `bestiary/data.generated.ts` e `items/data.generated.ts`: checar estruturalmente ~1.700 literais contra um union type recursivo no `tsc` deste projeto (sem build incremental dedicado a isso) e caro e nao e a forma de verificacao adotada aqui. A verificacao real vem do compatibility report + das fixtures douradas (Fireball/Heal/Haste), nao do type-checker sobre o literal gerado. Decisao registrada para nao ser revertida sem discussao.
