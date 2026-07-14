# Modulo: Spell Casting (Skills & Tech — camada generica)

## 1. Stack Tecnologica
* Fastify + Zod em `apps/api/src/modules/spell_casting/routes.ts` (HTTP) — mesmo estilo fino de `character_spells`/`character_effects`.
* Socket.io na infra de presenca existente (`apps/api/src/modules/campaign-presence/socket.ts`) para o preview efemero de area, espelhando o evento de medicao (`vtt:measurement:*`).
* Toda interpretacao mecanica PF2e (consumo por categoria, conversao de area, alcance) vive em `packages/game-system-pathfinder-2e` — ver `.ai/game_systems/pathfinder_2e/spell_casting/skills.md`.

## 2. Padroes Aplicados
* **Servidor monta as opcoes de conjuracao** (`cast-options`): o join spellbook × catalogo de magias acontece no backend, que tem acesso irrestrito ao catalogo — o jogador nunca ganha acesso ao catalogo Mestre-apenas por causa disso; recebe apenas o perfil de conjuracao (nome, rank, area, alcance, tempo, defesa) **das magias que ja estao no proprio spellbook**.
* **Consumo = escrita otimista no spellbook existente** (`CharacterSpellbook.revision`), nenhuma tabela nova. O cast e uma transformacao pura do blob (`applyPathfinder2eCast`) testada isoladamente; a rota adiciona um ledger pequeno de idempotencia (`recentCasts`) no proprio blob para replay por `clientCastId`.
* **Preview efemero** classificado como evento `efemero` (AGENTS.md secao 5.8): broadcast direto, sem persistencia, com estado em memoria por campanha para snapshot de quem entra depois — identico ao `vtt:measurement:*`.

## 3. Restricoes Tecnicas
* Cast/rest/refocus: permitidos ao dono do personagem OU ao Mestre ativo da campanha (mesma query de acesso do spellbook).
* Cast com area deve incluir `placement`; a rota reconsulta a cena/token no banco e usa `distanceInCells`/`hexDistanceInCells` (conforme `gridShape` da cena) + politica PF2e de pes para celulas para validar alcance. O cliente continua oferecendo feedback visual, mas nao e mais autoridade final para area/range.
* Cast com contagem de alvo (`targets`) reconsulta a cena buscando o token conjurador **e** todos os tokens alvo numa unica query (`tokens: { where: { id: { in: [...] } } }`), valida a contagem contra o perfil resolvido do catalogo e o alcance de cada alvo individualmente — mesma politica de distancia do `placement`.
* Cast pelo token envia `caster` (`sceneId` + `casterTokenId`) mesmo quando nao ha area nem alvo. A rota usa a porta `consumeEncounterActionsForCharacter` exposta por `campaign_presence` para debitar action economy no encontro vivo, sem persistir encontros no banco.
* O evento de area so pode ser emitido por quem esta na campanha (`socket.data.campaignId === campaignId`), e respeita sessao pausada como os demais eventos VTT.
* **Bug real corrigido nesta rodada**: o contexto de cena resolvido (`castContext`) tinha duas formas inconsistentes dependendo do caminho (`placementValidation.context` cru vs. `resolveCastSceneContext(...)` envelopado em `{ok,context}`) — um `tsc --noEmit` direto no arquivo (nao coberto por nenhum script do projeto, ver secao 5) confirmou o erro de tipo antes de qualquer teste de runtime. Corrigido unificando a resolucao em `resolveNonAreaCastContext`, que sempre devolve a mesma forma.

## 4. Decisoes de Performance
* Preview de area: throttle no cliente (por frame de pointer-move) e payload pequeno (forma + label, nao a lista de celulas — cada cliente recalcula as celulas localmente com `computeCoveredCells`, deterministico).
* `cast-options` e calculado sob demanda (sem cache) — o catalogo esta em memoria no processo.

## 5. Limitacoes Conhecidas
* Sem reactions/free actions mecanicas, quickened/slowed/stunned, sustain, resolucao ou effects.
* Heightening nao interage com o consumo (conjurar em rank mais alto usa o slot do rank escolhido, mas nada muda no "efeito" porque nao ha resolucao).
* Grid hex: so burst/emanation/cylinder tem cobertura de area; cone/linha/quadrado/cubo continuam bloqueados (ver `.ai/scene_geometry/skills.md` secao 5).
* Selecao de alvo (`targets`) so cobre magias cujo texto de alvo parseia como contagem simples (~86% das ~860 magias com texto de alvo real); texto composto/trait-based (`willing`, `ally`, `1 ally and 1 enemy`, "any number of") fica sem seletor — a conjuracao segue sem exigir alvo.
* Selecionar o token do proprio conjurador como alvo e permitido (nao ha distincao "creature other than you" no parser) — correto para a maioria das magias, mas nao filtra os poucos casos reais que excluem o proprio conjurador.
* **Lacuna de tooling descoberta nesta rodada**: `apps/api/src/modules/**/*.ts` nao e coberto por nenhum script de typecheck do projeto — `npm run test:unit` so cobre `packages/**` + `unit.test.ts` (via `apps/api/tsconfig.test.json`, cujo `include` nao alcança `apps/api/src/modules`), e `npm run dev:api` usa `tsx` (transpila sem checar tipos). O bug de `castContext` (secao 3) so foi encontrado por um `tsc --noEmit` manual neste arquivo. Nenhum script novo foi adicionado para cobrir isso — decisao de escopo a confirmar com o usuario.
