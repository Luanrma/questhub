# Encounter Movement — Todo de Entregas

Referencia: `.ai/game_systems/pathfinder_2e/movement/questhub-encounter-movement-scope.md` (doc original do usuario) + `.ai/encounter_movement/{readme,skills,specs}.md` (desenho final, com divergencias documentadas em `readme.md` secao 8).

Regras de execucao (mesmo padrao usado em Hazards/Combat):
- Cada Fase e uma entrega fechada que nao pode deixar o QuestHub quebrado (build/typecheck/testes passando ao final da fase).
- Item concluido -> `[x]`. Item parcialmente feito -> `[~]` com nota do que falta. Item nao iniciado -> `[ ]`.
- Ao terminar uma Fase inteira, parar e perguntar ao usuario se continua para a proxima.
- Ao retomar o trabalho, primeiro checar o estado real dos itens antes de seguir.

Estado geral: **Todas as 4 fases + Fase E (revisao pos-teste em mesa) concluidas.** Escopo entregue: movimento limitado por 3 acoes por turno em encontro (calculo puro, enforcement no backend, previsao no cliente, trava/feedback no frontend) + sidebar da ficha Player padronizado com o do NPC.

Decisao confirmada com o usuario antes de comecar: jogador so move o proprio token, nunca o de um aliado (mesmo no turno do aliado).

---

## Fase A — Dominio puro + leitura de velocidade (sem enforcement ainda)
Escopo: `specs.md` secoes 2-6.

- [x] `packages/game-system-core/src/server/character-sheet/models.ts`: `CharacterSheetMovement`, `CharacterSheetMovementAccessor<TSheet>` + campo opcional `movement?` em `CharacterSheetSystemAdapter<TSheet>`.
- [x] `packages/game-system-pathfinder-2e/src/server/character-sheet/adapter.ts`: `movement.read` lendo `sheet.general.movementMeters`.
- [x] `apps/api/src/modules/encounter_movement/domain/types.ts`: `GridPoint`, `MovementBudget`, `MovementValidationResult`.
- [x] `apps/api/src/modules/encounter_movement/domain/movement-distance.ts`: `cellDistance`, `cellsToMeters`, `feetToMeters` (puras).
- [x] `apps/api/src/modules/encounter_movement/domain/movement-validation.ts`: `validateMovement` (pura, com clamp).
- [x] `apps/api/src/modules/encounter_movement/repositories/bestiary-speed.ts`: `getCatalogSpeedFeet` (le `display.stats.key === 'speed'`, parseia o numero do formato `"25 ft"`).
- [x] `apps/api/src/modules/encounter_movement/repositories/character-speed.ts`: `getCharacterSpeedMeters`.
- [x] Testes unitarios: `movement-distance.test.ts` (5 testes: celula ortogonal/diagonal/irregular, conversao cell->metros e pes->metros com metersPerCell variavel), `movement-validation.test.ts` (4 testes: aceita dentro do orcamento, clampa quando excede, orcamento zerado, `maxMeters: null` nao bloqueia), + teste do accessor `movement` no adapter PF2e.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `tsc -b apps/web/tsconfig.json --force` limpo, `npm run test:unit` 88/88 (10 novos).

## Fase B — Enforcement no socket (trava por turno + clamp + aviso ao Mestre)
Escopo: `specs.md` secoes 6-7.

- [x] `apps/api/src/modules/campaign-presence/contracts.ts`: `VttMovementBudget`, `VttEncounterCreatureParticipant.movement`; schema `vttCombatMovementResetSchema`.
- [x] `vtt:encounter:start`: hidrata `movement` de cada participante `creature` via `resolveMovementMaxMeters` (NPC: `getCatalogSpeedFeet` + `feetToMeters` com `metersPerCell` da cena; Player: `getCharacterSpeedMeters` direto).
- [x] `vtt:token:move`: sem encontro ativo, comportamento identico ao anterior (nenhuma regressao). Com encontro ativo: jogador exige ser o participante `creature` ativo, aplica `validateMovement` (bloqueia se nao for o turno dele/token fora do encontro, clampa posicao se exceder, persiste `usedMeters`, reemite `vtt:encounter:changed`); Mestre sempre move pra posicao pedida, sem clamp, so emite `vtt:combat:movement:warning` (privado, so pro proprio socket) quando excede — nao mexe em `usedMeters` do Mestre.
- [x] `vtt:encounter:next-turn`/`vtt:encounter:previous-turn`: `resetParticipantMovement` zera `usedMeters` do novo participante ativo antes de emitir `vtt:encounter:changed`.
- [x] `vtt:combat:movement:reset` (novo handler, Mestre-only): zera `usedMeters` de um participante especifico por `participantId`.
- [x] `apps/web/src/vtt/table/domain/types.ts`: `VttMovementBudget`, `movement` em `VttEncounterCreatureParticipant`, `VttCombatMovementWarningPayload`.
- [x] Verificacao: `tsc -b apps/web/tsconfig.json --force` limpo, `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 88/88, `vite build` ok.

## Fase C — Frontend: travar arraste fora do turno + feedback visual
Escopo: `specs.md` secao 9.

- [x] `CampaignOverviewPage.tsx`: `canDrag` do `PlayerToken` passa a exigir "sem encontro ativo OU sou o participante ativo" pra jogador (Mestre continua sempre podendo, como hoje). Nova prop `turnLocked` calculada junto.
- [x] `BoardOverlays.tsx` (`PlayerToken`): nova prop `turnLocked`, cursor `not-allowed` + opacidade reduzida + tooltip "Aguarde seu turno para mover este token" quando travado.
- [x] `MovementRemaining` (novo, em `EncounterTrackerPanel.tsx`): mostra "Mov: restante/max m" no participante ativo, sidebar e destacado.
- [x] Botao "Resetar movimento" (icone `RotateCcw`, Mestre-only, so no participante ativo) no card do participante, emitindo `vtt:combat:movement:reset` via `resetParticipantMovement`.
- [x] Banner de aviso (`vtt:combat:movement:warning`): banner ambar fixo no topo da tela, auto-esconde em 4s, so aparece pro Mestre que excedeu.
- [x] Verificacao completa: `tsc -b apps/web/tsconfig.json --force` limpo, `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `npm run test:unit` 88/88, `vite build` ok.

## Fase D — Ficha PF2e: padronizar sidebar do Player com o do NPC
Escopo: `.ai/game_systems/pathfinder_2e/character_sheet/specs.md` (secao atualizada nesta rodada).

- [x] `Pathfinder2eSheetForm.tsx`: `Mov.` (renomeado "Terrestre (m)") saiu da linha `sheet-quick-bottom` (que era um grid de 3 colunas) e virou campo de largura total, com titulo de secao `Movimento` acima — renderizado direto como filho do `<aside>` (grid de coluna unica), mesmo padrao dos `SheetEntry` do NPC.
- [x] Titulo de secao `Defesas` adicionado acima da linha `Fortitude`/`Reflexo`/`Vontade`.
- [x] `sheet-quick-bottom` (Inic./Percepcao) ficou com 2 dos 3 slots do grid preenchidos — aceitavel, nao quebra layout (grid `repeat(3, minmax(0,1fr))` so deixa uma coluna vazia).
- [x] Verificacao: `tsc -b apps/web/tsconfig.json --force` limpo, `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `vite build` ok.

---

## Fase E — Revisao pos-teste em mesa (bug real + pedido de mudanca de regra)
O usuario testou as Fases A-D em mesa e reportou: "os tokens estao se movendo livremente sem respeitar o maximo setado" + pediu pra modelar a economia de 3 acoes do PF2e. Ver `readme.md` secao 8 (Revisao 1 e 2) pro relato completo.

- [x] **Bug real identificado e corrigido:** o cliente movia o token otimisticamente na tela a cada tique do mouse, sem esperar confirmacao do servidor. O corte de verdade acontecia no backend a cada evento, mas a UI nunca refletia isso durante o arraste — so quando o gesto terminava e a ultima resposta do servidor "vencia" a atualizacao otimista, dando a impressao de "arrasta livre e depois volta pra tras". Corrigido com previsao no cliente (novo `apps/web/src/vtt/table/domain/movementPrediction.ts`, puro, espelha o backend).
- [x] **Modelo trocado de "total por turno" pra "3 acoes por turno":** `MovementBudget` (backend `encounter_movement/domain/types.ts` e `VttMovementBudget` em ambos os `contracts.ts`) agora e `{ maxMetersPerAction, actionsRemaining, metersUsedThisAction }`. Nova funcao pura `commitMovementAction` (domain) consome 1 acao quando um gesto de movimento termina (sobrante da acao nao usada e descartado, nao acumula).
- [x] Novo evento `vtt:combat:movement:commit` (cliente -> servidor): disparado ao soltar um arraste real (`PlayerToken`, via `onMovementActionCommit`) ou ao confirmar um movimento medido (`confirmMeasuredTokenMove`, barra de espaco). Nunca avanca turno sozinho.
- [x] Evento `vtt:combat:movement:warning` **removido** (backend e frontend) — obsoleto, ver proximo item.
- [x] **Mestre agora tambem e limitado pela distancia** (nao so recebe aviso) — `vtt:token:move` unificou o caminho de validacao pra Mestre e jogador quando o token e participante do encontro; a unica diferenca remanescente e que o Mestre nao precisa esperar o turno ativo pra mover um token.
- [x] `resolveMovementMaxMeters`/hidratacao em `vtt:encounter:start`, reset em `next-turn`/`previous-turn`/`vtt:combat:movement:reset`: todos atualizados pro novo formato (`actionsRemaining: 3, metersUsedThisAction: 0` no reset).
- [x] `EncounterTrackerPanel`: `MovementRemaining` agora mostra "N acoes - restante/max m" em vez de so "restante/max m".
- [x] Testes de dominio reescritos para o novo modelo (`movement-validation.test.ts`: 8 testes, incluindo um replicando o exemplo literal do usuario — 3m + 5m com velocidade 6m, confirmando que o sobrante nao acumula).
- [x] **Achado de tooling (nao e bug meu, e pre-existente):** `apps/api/tsconfig.test.json` so type-checa arquivos alcancaveis a partir de `unit.test.ts` — `campaign-presence/socket.ts` (onde a maior parte deste modulo vive) **nunca foi coberto** por nenhum script de type-check do projeto (nem `test:unit`, nem `dev:api`, que roda via `tsx` sem checagem de tipos). Usei uma checagem avulsa (`tsc --noEmit` direto em `apps/api/src/server.ts` com as mesmas `compilerOptions`) pra validar este modulo de verdade, e vou continuar usando essa checagem em qualquer trabalho futuro que toque `socket.ts`. Vale considerar, numa conversa separada, adicionar um script de `tsc --noEmit` cobrindo `server.ts` no `package.json` pra fechar essa lacuna permanentemente.
- [x] **Ponto de atencao pra validar em mesa:** o calculo de distancia (`cellDistance`) usa a mesma formula ja empregada por `checkTokenTriggeredHazards` (posicao dividida pelo tamanho de celula da cena). Nao consegui confirmar com certeza absoluta, sem testar ao vivo, se essa formula bate com a unidade real de `token.position` em todos os cenarios de zoom/pan — se o limite de movimento parecer sistematicamente grande demais ou pequeno demais (nao so "impreciso por causa de um bug pontual"), me avise que reviso essa conta especificamente.
- [x] Verificacao: `tsc --noEmit` avulso sobre `server.ts` limpo (so 4 erros pre-existentes e nao relacionados em `campaigns/routes.ts`), `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `tsc -b apps/web/tsconfig.json --force` limpo, `npm run test:unit` 92/92, `vite build` ok.

---

## Fora de escopo nesta rodada (ver `readme.md` secao 6)
Stride/Step/Leap, terreno dificil/maior, voo com altitude, natacao/escalada com custo especial, diagonal alternada PF2e, reacoes automaticas, pathfinding, colisao com paredes, line of sight, auras, condicao slowed/quickened, multiplas acoes por turno, desfazer movimento automatico, mudar unidade exibida na ficha de bestiario de "ft" pra "m".
