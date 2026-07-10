# Submodulo: Pathfinder 2e Catalogo de Itens (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript no package `packages/game-system-pathfinder-2e`.
* Contratos agnosticos de apresentacao em `packages/game-system-core/src/server/items`.
* Dados extraidos/normalizados de JSONs do Foundry PF2e em `pf2e-master/packs/equipment`.
* Geracao de dados estaticos em TypeScript via `scripts/generate-pf2e-item-data.cjs` para evitar parsing dos packs em runtime (mesmo padrao de `scripts/generate-pf2e-bestiary-data.cjs`).

## 2. Padroes Aplicados
* **Anti-Corruption Layer:** nomes e estruturas internas do Foundry nao vazam para o VTT.
* **Catalog Boundary:** itens do catalogo sao entradas de referencia do ruleset, nunca linhas de `CampaignItemDefinition`.
* **Presentation DTO:** a ficha simplificada e entregue como secoes genericas de apresentacao (`GameSystemItemSheet`), no mesmo formato usado pelo bestiario.
* **System Data Opaque:** dados mecanicos completos ficam em `systemData`, tipado apenas pelo package PF2e.
* **Mechanical Classification:** comportamento de equipamento deve vir de `classification`, `usage` e `equipment`, nao do tipo documental nem de nomes de item.

## 3. Restricoes Tecnicas
* Nao adicionar campos como `armorClass`, `damage`, `bulk` ou `traits` ao core como contrato mecanico; eles ficam em `systemData` e sao adaptados para `display`.
* A tela generica deve renderizar `display.sheet` sem conhecer regras internas de Pathfinder.
* A API deve continuar validando que apenas Mestre ativo acessa o catalogo de itens da campanha (mesma regra de acesso do bestiario).
* **Nunca** popular `CampaignItemDefinition` a partir deste catalogo via migration, seed ou fluxo de UI "importar todo o catalogo" — decisao de produto permanente, ver `.ai/inventory/skills.md` secao 13. A unica excecao autorizada e o endpoint pontual `POST /api/campaigns/:campaignId/items/:itemId/send-to-player` (`.ai/inventory/specs.md` secao 6.4.1), que clona um unico item por acao explicita do Mestre.
* Sem traducao pt-BR nesta primeira entrega: os dados gerados nao possuem bloco de traducao (diferente do bestiario). O catalogo e exibido apenas no idioma original.
* Normalizadores nao podem identificar comportamento por `name` ou por icone. Devem usar `document.type`, `system.usage.value`, `system.category`, traits e campos estruturados do compendio.
* O gerador deve preservar o valor bruto de `system.usage.value` em `usage.raw` e registrar warnings para valores desconhecidos.
* `equipSlot` e V1 legado. Codigo novo PF2e deve preferir `equipment.options`; codigo generico deve tratar chaves e recursos como opacos.

## 4. Decisoes de Performance
* A listagem e paginada e filtrada em memoria sobre dados estaticos normalizados (`PATHFINDER_2E_ITEM_DATA`).
* O endpoint de detalhe usa lookup por id sobre um `Map` construido a partir do catalogo normalizado.

## 5. Limitacoes Conhecidas
* Sem traducao pt-BR (ver secao 3).
* Descricoes longas do Foundry (`systemData.description`) sao texto plano; nao usar `dangerouslySetInnerHTML`.
