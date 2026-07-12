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
* Macros, UUIDs Foundry e links internos sao removidos ou apresentados como texto simples.
* Regras de heightening, dano estruturado e formulas de rolagem nao sao interpretadas nem calculadas; permanecem como texto dentro de `systemData`/`display.sheet`.
* Rituais sao apenas catalogados (nome, checagens sugeridas, descricao); nenhum fluxo de execucao de ritual e implementado.
