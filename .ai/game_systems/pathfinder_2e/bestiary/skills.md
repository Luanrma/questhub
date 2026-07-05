# Submodulo: Pathfinder 2e Bestiario (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript no package `packages/game-system-pathfinder-2e`.
* Contratos agnosticos de apresentacao em `packages/game-system-core/src/server/bestiary`.
* React no renderer `packages/game-system-pathfinder-2e/src/web/bestiary`, consumido por modal no app web.
* Dados extraidos/normalizados de JSONs do Foundry PF2e em `pf2e-master/packs`.
* Geracao de dados estaticos em TypeScript via `scripts/generate-pf2e-bestiary-data.cjs` para evitar parsing dos packs em runtime.

## 2. Padroes Aplicados
* **Anti-Corruption Layer:** nomes e estruturas internas do Foundry nao vazam para o VTT.
* **Catalog Boundary:** criaturas sao entradas de catalogo do ruleset, nao entidades de campanha.
* **Presentation DTO:** a ficha simplificada deve ser entregue como secoes genericas de apresentacao.
* **System Data Opaque:** dados mecanicos completos ficam em `systemData`, tipados apenas pelo package PF2e.

## 3. Restricoes Tecnicas
* Nao adicionar campos como `armorClass`, `hitPoints`, `savingThrows` ou `traits` ao core como contrato mecanico.
* A tela generica deve renderizar `display.sheet` sem conhecer regras internas de Pathfinder.
* O layout visual da ficha simplificada PF2e deve ficar no package Pathfinder 2e e reaproveitar o padrao visual da ficha de personagem.
* O modal da ficha deve usar a infraestrutura comum de modal arrastavel/redimensionavel e seguir `.ai/game_systems/bestiary_guide.md`.
* Nao usar `dangerouslySetInnerHTML` com descricoes importadas do Foundry; textos devem ser plain text ou sanitizados antes de renderizar.
* A API deve continuar validando que apenas Mestre ativo acessa o bestiario da campanha.
* A ficha simplificada nao deve alterar o contrato de criacao de token no VTT.

## 4. Decisoes de Performance
* A listagem continua paginada.
* A listagem permanece paginada e filtrada em memoria sobre dados estaticos normalizados.
* Filtros de categoria devem usar dados ja normalizados, sem reler `pf2e-master/packs` em runtime.
* O endpoint de detalhe deve usar lookup por id sobre o catalogo normalizado.
* O arquivo gerado deve conter apenas campos necessarios para listagem, token, fonte, ficha simplificada e `systemData` minimo; HTML extenso do Foundry deve ser sanitizado/resumido.

## 5. Limitacoes Conhecidas
* Traducoes atuais cobrem labels padrao de apresentacao; conteudo oficial textual permanece no idioma original quando nao houver traducao.
* Macros, UUIDs Foundry e links internos sao removidos ou apresentados como texto simples.
