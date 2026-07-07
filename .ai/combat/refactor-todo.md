# Combate PF2e — Todo do Escopo de HP (Vida em Combate)

Referencia: `.ai/game_systems/pathfinder_2e/combat/questhub-combat-hp-scope.md`.

Regras de execucao (mesmo padrao usado em Hazards):
- Cada Fase abaixo e uma entrega fechada que nao pode deixar o QuestHub quebrado (build/typecheck/testes passando ao final da fase).
- Item concluido -> `[x]`. Item parcialmente feito -> `[~]` com nota do que falta. Item nao iniciado -> `[ ]`.
- Ao terminar uma Fase inteira, parar e perguntar ao usuario se continua para a proxima.
- Ao retomar o trabalho, primeiro checar o estado real dos itens (o que ja esta implementado) antes de seguir.

Estado geral: **Fase D concluida (com 1 item parcial: UI tests, sem infra de teste de componente no repo) + melhoria pos-Fase-D (HP inicial de NPC vindo do bestiario).** Escopo completo do doc original entregue: HP persistente, dano/cura, ficha vs. instancia, mascaramento por papel, tempo real e UI minima.

**Divergencia resolvida com o usuario em 2026-07-07 (antes da Fase B comecar):** o doc de referencia propunha uma unica tabela (`CampaignSceneTokenHealth`) para todo tipo de token. O usuario corrigiu: vida de personagem de jogador deve morar na ficha (`Character.sheet`), nao numa tabela presa ao token (senao a vida se perderia se o token fosse removido/recriado no mapa); vida de NPC/bestiario continua presa ao token (correto, cada instancia e uma criatura independente). Isso NAO exige alterar a migration da Fase A (`CampaignSceneTokenHealth` continua correta, so passa a ser usada exclusivamente para `source: 'bestiary'`), mas muda o escopo da Fase B: agora inclui um adapter de sistema para ler/escrever HP na ficha, cruzando `packages/game-system-core` e `packages/game-system-pathfinder-2e`. Docs (`readme.md`, `specs.md`, `skills.md`) ja atualizadas com o desenho final — ver `specs.md` secao 2.1.

---

## Fase A — Documentacao do modulo + Prisma (fundacao, sem UI ainda)
Escopo do doc: secoes 4, 5, 9, 17.1/17.2/17.11/17.12, 18 (Etapa 1+2).

- [x] Criar `.ai/combat/readme.md`, `.ai/combat/skills.md`, `.ai/combat/specs.md` (contrato completo: modelo de dados, regras DAMAGE/HEAL/SET_*, eventos socket, permissoes, visibilidade).
- [x] Prisma: enum `CombatHealthOperation`, model `CampaignSceneTokenHealth` (1:1 com `CampaignSceneToken`, valido apenas para tokens `source: 'bestiary'`), model `CampaignSceneTokenHealthLog`, relacao `health` em `CampaignSceneToken` (migration `20260708023951_combat_token_health`, aditiva).
- [x] Migration aplicada + `prisma generate`.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 60/60.

## Fase B — Dominio + repositorios + service (regra de HP isolada e testavel)
Escopo do doc: secoes 6, 8, 9.3, 18 (Etapa 3+4+5) + adaptacao da secao "duas fontes de verdade" (ver nota acima e `specs.md` secao 2.1).

### Adapter de ficha (cross-package, pre-requisito para vida de jogador)
- [x] `packages/game-system-core/src/server/character-sheet/models.ts`: `CharacterSheetHealth`, `CharacterSheetHealthAccessor<TSheet>` (sintaxe de metodo, nao arrow-property, para nao quebrar a variancia do `Map<string, CharacterSheetSystemAdapter<unknown>>` do registry) e campo opcional `health?` em `CharacterSheetSystemAdapter<TSheet>`.
- [x] `packages/game-system-pathfinder-2e/src/server/character-sheet/adapter.ts`: `health` implementado no `pathfinder2eSheetAdapter`, mapeando `current/maximum/temporary` <-> `current/max/temporary`, preservando `wounded`/`dying`/`doomed`.

### Dominio (agnostico, reusado pelos dois caminhos)
- [x] `apps/api/src/modules/combat/domain/types.ts`: `VttCombatantHealth`, `PublicNpcHealth`, `RawCombatHealth`, `CombatantIdentity`, `CombatHealthOperation`.
- [x] `apps/api/src/modules/combat/domain/health-rules.ts`: `applyDamage`, `applyHeal`, `setCurrentHitPoints`, `setMaxHitPoints`, `setTemporaryHitPoints`, `deriveHealthState`, `toCombatantHealth`, `derivePublicNpcHealth` (puras, sem Prisma/socket, operam sobre `RawCombatHealth` generico).
- [x] `apps/api/src/modules/combat/domain/validation.ts`: `vttCombatHealthAdjustSchema`, `vttCombatHealthSetSchema`, `vttCombatHealthRequestSchema`.
- [x] `apps/api/src/modules/combat/domain/presenter.ts`: `presentHealthForRole` (Mestre = exato; personagem de jogador = exato para qualquer jogador; NPC = `PublicNpcHealth` por faixa; hidden nao vaza para nao-Mestre).

### Repositorios (dois caminhos, mesma interface de saida)
- [x] `apps/api/src/modules/combat/repositories/token-health.ts`: `getTokenHealth`, `upsertTokenHealth` sobre `CampaignSceneTokenHealth` (so para `source: 'bestiary'`).
- [x] `apps/api/src/modules/combat/repositories/character-health.ts`: `getCharacterHealth`, `writeCharacterHealth` — busca `Character`, resolve adapter via `getCharacterSheetAdapter`, valida envelope com `characterSheetEnvelopeSchema`, le/escreve `data[dataKey]` via `adapter.health`, persiste com `prisma.character.update` preservando o resto do envelope.
- [x] `apps/api/src/modules/combat/repositories/health-log.ts`: `appendHealthLog` sobre `CampaignSceneTokenHealthLog` (comum aos dois caminhos).
- [x] `apps/api/src/modules/combat/services/combat-health-service.ts`: `getOrInitializeHealth`, `adjustHealth`, `setHealth`, `presentHealthForCombatant` — decide entre os dois repositorios com base em `combatant.source`, aplica `health-rules`, grava log.
- [x] Testes: `health-rules.test.ts` (todos os casos da secao 16.1 do doc, 10 testes), `adapter.test.ts` no pacote PF2e (`health.read`/`health.write` preservam os demais campos da ficha, com re-export em `apps/api`), `presenter.test.ts` (Mestre exato, jogador exato p/ personagem, jogador sem HP exato de NPC, hidden bloqueado p/ nao-Mestre, hidden visivel p/ Mestre). Testes de `service` diretos contra banco ficam para quando houver suite de integracao (o repo atual so tem testes puros em `test:unit`); a Fase C cobre o service indiretamente via contract tests de socket.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `tsc -b apps/web/tsconfig.json --force` limpo, `npm run test:unit` 78/78 (18 novos).

## Fase C — Socket + contratos (liga o service ao tempo real, sem UI ainda)
Escopo do doc: secoes 7, 12, 18 (Etapa 6+7).

- [x] Decisao tecnica (ver `specs.md` secao 3): `VttPlayerToken` **nao** ganha `health` (o pipeline de `vtt:tokens:snapshot` nao mascara por papel hoje; colocar HP exato la vazaria NPC pra jogador). So `VttEncounterCreatureParticipant` ganha `health?: VttCombatantHealth | PublicNpcHealth | null` + `source: 'character' | 'bestiary'` (necessario pra mascarar). HP fora de encontro sincroniza via canal dedicado (`vtt:combat:health:changed`), nao pelo snapshot generico.
- [x] `apps/api/src/modules/campaign-presence/contracts.ts`: `source`/`health?` em `VttEncounterCreatureParticipant`; `VttCombatantHealth`/`PublicNpcHealth` exportados.
- [x] `campaign-presence/socket.ts`: handlers `vtt:combat:health:adjust`, `vtt:combat:health:set`, `vtt:combat:health:request`, delegando regra ao `combat-health-service` (via helpers `toCombatantIdentity`, `resolveTokenForHealth`, `emitCombatHealthChanged`, `syncEncounterParticipantHealth`); emitem `vtt:combat:health:changed` mascarado por papel (iterando sockets da sala, mesmo padrao de `emitSceneHazardChanged`) e disparam `vtt:encounter:changed` quando o token e participante de encontro ativo.
- [x] `presentEncounterForRole`: mascara `participant.health` para `PublicNpcHealth` quando `participant.source === 'bestiary'` e papel != MASTER (reusa `derivePublicNpcHealth`).
- [x] `vtt:encounter:start`: hidrata `health`/`source` de cada token criatura ao montar `VttEncounterCreatureParticipant` (via `getOrInitializeHealth`).
- [x] `apps/web/src/vtt/table/domain/types.ts`: `VttCombatantHealth`/`PublicNpcHealth`/`VttCombatHealthChangedPayload`, `source`/`health?` em `VttEncounterCreatureParticipant`.
- [~] Backend/contract tests dos novos eventos: nao escritos. O repo atual nao tem suite de integracao de socket (nenhum modulo, nem hazards, tem `*.test.ts` batendo em socket/Prisma real — `test:unit` so cobre dominio/presenter/validation puros). Cobertura real desta fase ficou nos testes puros da Fase B (`health-rules`, `presenter`, adapter PF2e) + verificacao manual em mesa (proxima etapa combinada com o usuario). Se o projeto ganhar suite de integracao de socket no futuro, este item deve ser revisitado.
- [x] Verificacao: `tsc -b apps/web/tsconfig.json --force` limpo, `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 78/78, `vite build` ok.

## Fase D — UI minima (barra de HP, controles de encontro, modal)
Escopo do doc: secoes 11.4, 13, 18 (Etapa 8).

- [x] `HealthBar` (`apps/web/src/vtt/table/components/HealthBar.tsx`, novo componente compartilhado, usado tanto no mapa quanto no encontro): renderiza numeros exatos (`current/max +temp`) quando recebe `VttCombatantHealth`, ou barra aproximada por faixa (`Saudavel...Caido`) sem numero quando recebe `PublicNpcHealth`. Qual forma cada socket recebe ja e decidido no backend (Fase C); o componente so sabe desenhar o que chegou.
- [x] Token no mapa (`BoardOverlays.tsx`, `PlayerToken`): nova prop `health`, renderiza `HealthBar` (tamanho `sm`) logo abaixo do token. `CampaignOverviewPage.tsx` mantem `combatHealthByTokenId` (populado por `vtt:combat:health:changed`, + merge automatico com o HP dos participantes do encontro ativo) e solicita HP uma vez por token via `vtt:combat:health:request` (dedupe por `useRef<Set>`, sem polling).
- [~] `EncounterTrackerPanel`: **desenho diferente do planejado.** Em vez de um componente `EncounterHealthControls` com botoes rapidos de dano/cura dentro do card, o card (sidebar e destacado) mostra a `HealthBar` inline no lugar do subtitulo e um icone de coracao "Editar HP" (Mestre-only) que abre o `CombatHealthEditorModal` — os botoes de dano/cura rapidos ficam dentro do modal (linha "Quantidade" + Aplicar dano/Aplicar cura), nao no card. Motivo: a coluna do card e estreita demais (72px) pra caber input+multiplos botoes sem quebrar o layout existente. Efeito pratico e o mesmo (dano/cura em poucos cliques), so a localizacao dos controles mudou.
- [x] `CombatHealthEditorModal.tsx`: campos HP atual/maximo/temporario (prefiltrados com o HP conhecido) + nota, "Aplicar dano"/"Aplicar cura" com campo de quantidade separado, fechar. Tambem acessivel pelo menu de contexto do token no mapa (`Editar HP`, novo item, Mestre-only).
- [x] Correcao pos-teste em mesa (feedback do usuario): botao "Salvar valores" removido — cada campo (atual/maximo/temporario) agora salva sozinho no `onBlur`, so quando o valor mudou de fato desde o ultimo commit (nao reenvia os 3 campos a cada interacao). Tambem corrigido: o modal ficava com os campos vazios quando aberto pelo menu de contexto do token no mapa, porque o `useState` inicial so rodava uma vez e nao se atualizava quando a resposta do `vtt:combat:health:request` chegava depois (corrida entre abrir o modal e a ida-e-volta pela rede) — agora sincroniza via `useEffect` assim que o valor chega, e abrir o editor sempre reenvia o pedido na hora. E a `HealthBar` (rotulo de status do NPC, ex. "A beira da queda") estava ilegivel no mapa — texto quase invisivel; trocado para branco com sombra de contraste.
- [ ] UI tests minimos (secao 16.4): **nao escritos.** O repo nao tem nenhuma infraestrutura de teste de componente React (`test:unit` so roda `apps/api`, nao ha vitest/RTL configurado nem um unico `*.test.tsx` no projeto). Introduzir esse framework do zero e uma decisao maior que nao foi pedida nesta rodada — ficou como lacuna conhecida, nao coberta.
- [x] Docs (`specs.md`) — pendente de uma pequena atualizacao final descrevendo os componentes de UI reais (ver proximo passo).
- [x] Verificacao completa: `tsc -b apps/web/tsconfig.json --force` limpo, `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 78/78, `vite build` ok.

---

## Melhoria pos-Fase-D — HP inicial de NPC vindo do bestiario
Pedido explicito do usuario apos ver a ficha de bestiario (campo "PV"): "A vida inicial NPC's, devem vir automaticamente da sheet deles". O doc original listava isso como fora de escopo (secao 15/9); o usuario decidiu trazer pra dentro do escopo.

- [x] `apps/api/src/modules/combat/repositories/bestiary-health.ts` (novo): `getCatalogHealth(campaignId, bestiaryCreatureId)` resolve o sistema da campanha, busca a entrada via `findBestiaryEntry` (facade ja existente em `game_systems/bestiary/registry.ts`, mesmo padrao usado por `hazard-instances`), filtra `category === 'npc'`, le o PV pelo `display.stats` neutro (`key === 'hitPoints'`, nunca por `systemData` especifico do sistema).
- [x] `CombatantIdentity` ganhou `bestiaryCreatureId: string | null`.
- [x] `combat-health-service.getOrInitializeHealth(combatant, campaignId)` agora recebe `campaignId` e cai para `getCatalogHealth` quando nao existe `CampaignSceneTokenHealth`, persistindo o resultado (o token passa a ter um registro real de HP, seedado pelo bestiario, na primeira leitura).
- [x] `adjustHealth`/`setHealth` passaram a usar `getOrInitializeHealth` em vez do `getHealth` cru — corrige um bug que essa mudanca revelou: aplicar dano/cura num NPC que nunca teve HP tocado antes retornava `null` e nao fazia nada, porque `adjustHealth` so olhava pra um registro ja existente.
- [x] `campaign-presence/socket.ts`: `toCombatantIdentity` inclui `bestiaryCreatureId`; as duas chamadas de `getOrInitializeHealth` (`vtt:encounter:start` e `vtt:combat:health:request`) passam `campaignId`.
- [x] Docs (`specs.md` secoes 7.1 e 9) atualizadas.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 78/78. Sem teste novo dedicado (funcao toca Prisma + registry estatico, mesmo motivo pelo qual repositorios da Fase B/C nao tem teste direto — o repo nao tem suite de integracao).

---

## Fora de escopo nesta rodada (secao 15 do doc)
Nao implementar: rolagem automatica de ataque/dano, tipos de dano, resistencia/fraqueza/imunidade, dureza/hardness de objeto ou hazard, escudo, condicoes `dying`/`wounded`/morte automatica/estabilizacao, HP de Hazard, integracao profunda com ficha PF2e, chat automatico de dano/cura (fica como toggle futuro), mana/stamina/spell slots.
