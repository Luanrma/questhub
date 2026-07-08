# Modulo: Combat (Skills & Tech)

## 1. Stack Tecnologica
* Fastify + Socket.IO em `apps/api`.
* Prisma/PostgreSQL para persistencia (`CampaignSceneTokenHealth`, `CampaignSceneTokenHealthLog`).
* Zod para validacao de payload de socket.
* React + Tailwind em `apps/web` para UI (barra de HP, controles de encontro, modal de edicao).

## 2. Localizacao no Codigo
* Este modulo pertence ao **Core Engine**, nao a `packages/game-system-*`. HP de token e estado de VTT generico, valido para qualquer sistema de RPG — mas para personagem de jogador, o *valor* mora na ficha, cujo formato e especifico de cada sistema.
* Backend: `apps/api/src/modules/combat/{domain,repositories,services}`.
* `campaign-presence/socket.ts` continua orquestrando Socket.IO, mas delega toda regra de calculo de HP para `combat-health-service`.
* Frontend: componentes de HP moram em `apps/web/src/vtt/table/components/` (mesma pasta dos demais componentes de mesa), reaproveitando os tipos definidos em `apps/web/src/vtt/table/domain/types.ts`.

## 3. Padroes Aplicados
* **Domain purity:** `domain/health-rules.ts` nao depende de Prisma, Socket.IO nem React — funcoes puras testadas isoladamente, operando sempre sobre `{ current, max, temporary }` generico, nunca sobre o shape de uma ficha especifica.
* **Repository boundary:** `services/combat-health-service.ts` nao conhece Prisma Client diretamente, so os contratos de `repositories/read.ts`/`write.ts`.
* **Presenter por papel:** `domain/presenter.ts` decide o payload exato vs. `PublicNpcHealth` por faixa percentual, mesmo padrao ja usado em `hazard-instances/domain/presenter.ts`.
* **Snapshot em encounter:** `VttEncounterCreatureParticipant.health` e sempre um snapshot derivado da fonte correta (ficha ou `CampaignSceneTokenHealth`) no momento da leitura/alteracao, nunca escrito diretamente sem passar pelo service.
* **Adapter de sistema para vida de personagem (fronteira Core/Game-System):** o modulo `combat` nao sabe que a ficha PF2e tem um campo `hitPoints.maximum`. Ele so sabe pedir "leia/escreva a vida deste personagem" a um adapter resolvido por `Character.system`, reaproveitando o registry ja existente em `apps/api/src/modules/game_systems/registry.ts` (`getCharacterSheetAdapter`). O contrato `CharacterSheetSystemAdapter<TSheet>` (em `packages/game-system-core/src/server/character-sheet`) ganha um campo opcional `health` com `read(sheet): {current,max,temporary}` e `write(sheet, next): sheet`; `pathfinder2eSheetAdapter` (em `packages/game-system-pathfinder-2e`) implementa esse campo mapeando para `Pathfinder2eHitPoints.{current,maximum,temporary}`. Isso segue a excecao explicita do AGENTS.md: "codigo novo especifico de sistema nao deve ser criado em apps/api ou apps/web, exceto por registries, composition roots ou facades" — o `combat` module e o composition root que usa esse registry, nao um lugar onde logica PF2e é reimplementada.

## 4. Restricoes Tecnicas
* Nao adicionar HP a `VttEncounterHazardParticipant` nesta etapa.
* Nao alterar nenhum outro campo da ficha ao ler/escrever vida de personagem — so o bloco de HP e tocado, o resto do envelope (`data[dataKey]`) e preservado byte a byte.
* Nao hardcodar nomes de campo de sistema (`hitPoints`, `maximum`, `pathfinder2e` etc.) fora do adapter do respectivo `packages/game-system-*`.
* Nao alterar o catalogo do Bestiario ao inicializar HP de token de bestiario.
* Nao expor `currentHitPoints`/`maxHitPoints` exatos de NPC para jogadores — usar `PublicNpcHealth` (estado por faixa percentual).
* Nao persistir HP de Hazard nesta etapa (dano/dureza de Hazard e modulo futuro separado, ver `.ai/game_systems/pathfinder_2e/hazards/`).
* Nao usar `any` nos contratos de socket; validar payload com Zod antes de chamar o service.
* A escrita de HP de personagem no socket usa acesso direto a `prisma.character` (Mestre pode alterar a vida de qualquer personagem da campanha, nao so a propria) — nao reaproveitar a rota HTTP `PUT /api/characters/:characterId/sheet` (essa rota e restrita ao dono do personagem e substitui a ficha inteira).

## 5. Decisoes de Performance
* Ajuste de HP e persistente (nao efemero) — toda chamada de `vtt:combat:health:adjust`/`:set` grava em `CampaignSceneTokenHealth` e em `CampaignSceneTokenHealthLog`.
* Emissao para a room `campaign:<campaignId>` (broadcast completo) apos persistir, seguindo o mesmo padrao de `token:moved`/`vtt:hazard:*`.
* `vtt:encounter:changed` so e reemitido quando o token alterado for de fato participante do encontro ativo (evita broadcast desnecessario fora de combate).

## 6. Limitacoes Conhecidas
* Sem automacao de dano por tipo, resistencia, fraqueza, imunidade ou dureza nesta etapa.
* Sem condicoes (`dying`, `wounded`, morte, estabilizacao) nesta etapa — `state` e binario (`OK`/`DOWN`).
* Sem edicao de HP pelo dono do token (jogador) nesta etapa — so o Mestre edita.
* Sem HP de Hazard.
* Sem postagem automatica em `ChatMessage` (fica como toggle futuro). O log de batalha efemero do encontro (`.ai/encounter/specs.md` secao 2.1) e um canal diferente, ja ativo — ver `specs.md` secao 8.
