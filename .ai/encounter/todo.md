# Modulo: Encounter Mode (Todo)

## Fase 0 - MVP Encounter Mode
- [x] Contrato `VttEncounterState`/`VttEncounterParticipant` sem campos mecanicos proibidos.
- [x] Estado em memoria por campanha (`CampaignPresenceState.campaignEncounters`), sem persistencia.
- [x] Eventos `vtt:encounter:start|update-initiative|next-turn|previous-turn|end|request` e fato `vtt:encounter:changed`.
- [x] `start` aceita somente `tokenIds`; participantes montados no servidor a partir dos tokens da cena; tokens ocultos filtrados.
- [x] Permissao restrita ao Mestre ativo da sessao em todos os comandos de escrita.
- [x] Ordenacao por iniciativa descendente com desempate por ordem anterior.
- [x] Avancar/voltar turno com wrap circular de rodada (minimo 1).
- [x] Encerrar sessao e trocar cena ativa limpam o encontro vivo.
- [x] Remocao/ocultacao de token remove o participante e recalcula turno ativo.
- [x] Painel lateral e painel destacado (resizable, carrossel circular, pregar de volta).
- [x] Pre-selecao `Shift`+clique com indicador visual e limpeza ao clicar fora.
- [x] `Shift`+arraste do grupo pre-selecionado ate a dropzone, sem mover token no grid.
- [x] Acao no menu de contexto para enviar selecao/grupo ao Encounter Mode sem duplicar.

## Fase 1 - Encontro Manual via Hazard
Referencia: `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secao 8, modo `manual`).
- [x] Atalho "Iniciar Encontro" no card de Hazard preparado (toolbar do VTT). Removido da ficha de Hazard (`BestiaryCreatureSheetModal`) por decisao de produto — a ficha ficou so para consulta, o atalho de encontro existe unicamente no card da toolbar.
- [x] Painel de gerenciamento manual (sem iniciativa) exibindo secoes da ficha do Hazard (defesas/operacao/acoes) e campo de notas do Mestre.
- [x] Painel e efemero (estado de cliente, Mestre-only), sem alterar o contrato `VttEncounterState`.

## Fase 2 - Instancia de Hazard em Cena
Referencia: `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secao 9, `SceneHazardInstance`).
- [x] Contrato e modulo responsavel definidos: `apps/api/src/modules/campaign_scene/hazard-instances/` (domain/repositories/services), persistido em `CampaignSceneHazard` (migration `20260707161018_campaign_scene_hazard_instance`).
- [x] Estados de visibilidade `HIDDEN|HINTED|REVEALED` e de instancia `ARMED|TRIGGERED|DISABLED|EXPIRED`.
- [x] Posicionamento por drag-and-drop do card de Hazard preparado para a mesa (`vtt:hazard:place`), sem reaproveitar semantica de token NPC.
- [x] Eventos `vtt:hazard:place|update|remove|request` e fatos `vtt:hazard:changed|removed`, `vtt:hazards:snapshot`, com filtragem de visibilidade por papel (Mestre ve tudo; Jogador nunca ve `HIDDEN`; `HINTED` chega ao Jogador com nome generico).
- [x] Marcador no VTT (`HazardMarker`) e menu de contexto do Mestre para alternar visibilidade/estado e remover a instancia.
- [x] Reposicionar instancia ja colocada por arraste no canvas (`HazardMarker` com drag via pointer events, emite `vtt:hazard:update` com a posicao final ao soltar).
- [x] Edicao de notas da instancia pela UI (textarea no menu de contexto, salva em `onBlur` via `vtt:hazard:update`).

## Fase 3 - Participante especial de Encontro (`type: 'hazard'`)
Referencia: `.ai/encounter/specs.md` + `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secao 8).
- [x] `VttEncounterParticipant` virou uniao discriminada `VttEncounterCreatureParticipant | VttEncounterHazardParticipant`, com `participantId` generico usado por ordenacao, turno e `update-initiative` (o campo trocou de `characterId` para `participantId` no payload de `vtt:encounter:update-initiative`).
- [x] `vttEncounterStartSchema` aceita `hazardInstanceIds` alem de `tokenIds` (pelo menos um dos dois precisa ter itens); o servidor busca as instancias via `findSceneHazardsForEncounter` (modulo `hazard-instances`) e monta participantes `type: 'hazard'`.
- [x] UI do tracker (`EncounterTrackerPanel`) exibe participante de Hazard com icone `TriangleAlert` em vez de avatar, tanto no painel lateral quanto no destacado, e a caixa de selecao antes de iniciar mostra tokens e Hazards juntos.
- [x] Visibilidade por participante (`HIDDEN|REVEALED`, distinta da visibilidade da instancia de cena) mascara o nome do Hazard (`Perigo desconhecido`) para Jogadores; `emitEncounterChanged`/`vtt:encounter:request` agora filtram por papel do socket (`presentEncounterForRole`) em vez de fazer broadcast unico para todos.
- [x] Acao "Enviar p/ Encontro" no menu de contexto do `HazardMarker` adiciona a instancia a selecao pendente (mesma caixa usada pelos tokens), bloqueada enquanto ha encontro ativo.

Simplificacoes conscientes:
- Nao ha checagem de `complexity` (simple/complex) do catalogo PF2e para permitir envio ao encontro; qualquer instancia de Hazard colocada na cena pode virar participante. Essa regra, se desejada, deve ser aplicada na camada PF2e/UI, nao no modulo generico `encounter`.
- Uma vez adicionado ao encontro, o participante de Hazard fica desacoplado da instancia de cena (visibilidade/estado do participante nao sincronizam mais com edicoes feitas na cena depois do inicio), conforme a intencao do contrato conceitual de manter estado local proprio durante o encontro.

## Fase 4 - Automacao opcional
Referencia: `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secao 10, ultimo item).
- [x] Gatilho manual "Disparar Hazard" no participante `type: 'hazard'` do Encounter Mode (`vtt:encounter:trigger-hazard`, Mestre-only): muda `state` para `TRIGGERED`, forca `visibility: 'REVEALED'` e publica uma mensagem no chat da campanha (`⚠ <nome> foi disparado!`) atribuida ao personagem do Mestre.
- [x] Lembrete de rotina: quando o participante ativo (turno atual) e um Hazard, o painel lateral do Encounter Mode exibe a secao `operations` (disable/rotina/reset/descricao) da ficha do catalogo para o Mestre (`HazardRoutineHint`), sem executar nada automaticamente.
- [ ] Prompts de dano/salvamento, rotina automatizada por turno (sem intervencao do Mestre) e integracoes mais profundas com mapa/area — fica para uma proxima iteracao, deliberadamente fora deste incremento.
- [x] Gatilho por movimento de token ("armadilha que dispara ao Token passar por cima"): implementado conforme spec em `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secao 12). Campo `triggerMode: 'ON_TOKEN_ENTER'` na instancia (refatorado de `triggerOnTokenEnter` boolean para o modelo de 4 eixos em `.ai/game_systems/pathfinder_2e/hazards/refactor-todo.md` Fase A), toggle "Disparar ao pisar" no menu de contexto do `HazardMarker`, deteccao no handler `vtt:token:move` usando o caminho completo do arraste (`movementPath`).

Simplificacoes conscientes:
- O disparo manual nao envolve rolagem de dados nem calculo de dano; e apenas uma transicao de estado + notificacao textual, decisao do Mestre continua manual.
- O lembrete de rotina so aparece no painel lateral (`sidebar`), nao no painel destacado (`detached`), pois o layout compacto do destacado nao comporta o bloco de texto sem quebrar o dimensionamento fixo do card.
- A mensagem de chat reaproveita a tabela `ChatMessage` existente (atribuida ao personagem do Mestre), sem criar conceito de "mensagem de sistema" no chat.

## Fase 5 - Log de Batalha (concluida em 2026-07-08)
Pedido do usuario em 2026-07-08: a area do painel de Encounter Mode abaixo do card de participantes deve virar um chat/log de batalha (dano, cura, rolagens de dado), visivel para Mestre e Jogadores. Referencia: `.ai/encounter/specs.md` secao 2.1, `.ai/combat/specs.md` secao 8, `.ai/chat/specs.md` secao "Rolagem rapida".
- [x] `VttEncounterState` ganha campo `log: VttEncounterLogEntry[]` (uniao `DAMAGE|HEAL|DICE_ROLL|SYSTEM`), iniciado vazio em `vtt:encounter:start`, limitado a 50 entradas (FIFO) via `vttEncounterLogLimit`.
- [x] `presentEncounterForRole` mascara entradas `DAMAGE`/`HEAL` de participantes `source: 'bestiary'` para Jogador (`amount: null`, `resultingHealth` em `PublicNpcHealth`), reaproveitando `derivePublicNpcHealth`.
- [x] `vtt:combat:health:adjust` (`campaign-presence/socket.ts`) passa a acrescentar uma entrada `DAMAGE`/`HEAL` no log do encontro ativo da cena do token (quando existir) via `appendEncounterLogEntry`, reemitindo `vtt:encounter:changed` mesmo quando o token nao e participante rastreado. **Simplificacao consciente:** `vtt:combat:health:set` (edicao direta dos campos PV atual/maximo/temporario) nao gera entrada de log — nao e uma acao narrativa de dano/cura, e sim correcao de valor.
- [x] `chat:message:create` ganha campo opcional `kind: 'DICE_ROLL'` + `diceRoll: { notation: string; total: number }` no payload; `useVttDiceRoller`/`publishDiceRollChatMessage` passam a enviar esses campos. O handler de chat, ao receber `kind: 'DICE_ROLL'`, alem de persistir a `ChatMessage` normal, chama `presence.appendDiceRollToActiveEncounter` para acrescentar uma entrada `DICE_ROLL` no log do encontro ativo (se houver) da cena do personagem que rolou. `chat/socket.ts` passou a receber o facade `presence` inteiro (nao so `presence.io`) para poder chamar essa funcao — `server.ts` atualizado.
- [x] Disparo de Hazard (manual e por movimento) passa a tambem acrescentar uma entrada `SYSTEM` no log do encontro via `postHazardTriggerChatMessage` (agora recebe `sceneId`), alem de continuar publicando a `ChatMessage` existente.
- [x] `vtt:encounter:end`, troca de cena e encerrar sessao limpam `log` junto com o restante do estado vivo (nenhuma mudanca de codigo alem do que ja zera o encontro).
- [x] Novo componente `BattleLogPanel.tsx` (`apps/web/src/vtt/table/components/`), renderizado em `CampaignOverviewPage.tsx` logo abaixo de `EncounterTrackerPanel` na aba "Encounter Mode", visivel para Mestre e Jogador somente quando `encounter?.status === 'ACTIVE'`, somente leitura, com scroll automatico para a entrada mais recente. Nao adicionado ao painel destacado (`displayMode="detached"`), conforme escopo original.
- [x] `apps/web/src/vtt/table/domain/types.ts` ganha os tipos `VttEncounterLogEntry`/variantes espelhando o contrato do backend.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `tsc -b apps/web/tsconfig.json --force` limpo, `npm run test:unit` 92/92, `vite build` ok.

### Correcao pos-feedback do usuario (2026-07-08, mesma sessao)
Feedback com print anotado (1a rodada): o log de batalha gerava a entrada certa (bug de conexao ja funcionava), mas renderizava encolhido ao lado da lista de participantes em vez de preencher a area grande vazia da aba; e faltava um indicador explicito de quem esta jogando agora.
- [x] Bug de layout corrigido: `CampaignOverviewPage.tsx` tinha um `<div className="flex h-full min-h-0 flex-col gap-2">` aninhado dentro do container `min-h-0 flex-1 overflow-hidden` da aba direita — o `h-full` (altura por porcentagem) nao resolvia de forma confiavel, entao o `flex-1` do `BattleLogPanel` nao tinha espaco pra crescer e o painel encolhia ao conteudo. Corrigido removendo o wrapper aninhado: o proprio container `min-h-0 flex-1 overflow-hidden` da aba direita agora vira `flex flex-col` diretamente (so quando `rightPanelTab === 'encounter'`, via classe condicional, sem afetar as outras abas), e `EncounterTrackerPanel`/`BattleLogPanel` passam a ser filhos diretos dele — elimina a dependencia de altura por porcentagem aninhada.
- [x] Primeira tentativa: componente `ActiveTurnBanner.tsx` separado mostrando "Token ativo da vez". **Revertido na 2a rodada de feedback** (ver abaixo) por duplicar a sinalizacao que a propria linha do participante ativo ja da na lista.

Feedback com print anotado (2a rodada): o usuario rejeitou o banner separado — pediu para unir a sinalizacao de "token ativo" com edicao de PV diretamente na mesma linha do participante ativo, dentro do proprio box do Encounter Mode, sem precisar abrir o modal.
- [x] `ActiveTurnBanner.tsx` removido (arquivo deletado, import/uso retirado de `CampaignOverviewPage.tsx`).
- [x] `EncounterTrackerPanel.tsx`: a faixa inline de dano/cura do participante ativo foi removida em 2026-07-14, porque fazia o token do turno aparecer como alvo de dano de si mesmo. O icone de coracao (`CombatHealthEditorModal`) continua disponivel para todos os participantes, incluindo o ativo, para ajustes/correcao de PV.
- [x] Escopo limitado ao painel lateral (nao destacado) — o card carrossel do modo destacado (`displayMode="detached"`) nao ganhou o editor inline nesta rodada, mantem so o icone de coracao.
- [x] Verificacao: `tsc -b apps/web/tsconfig.json --force` limpo, `vite build` ok.

## Fase 6 - Entrar/sair de encontro em andamento + rolar iniciativa (2026-07-08)
Pedido do usuario: tokens devem poder entrar/sair de um encontro ja em andamento; deve haver um icone de dado ao lado do campo de iniciativa que rola `1d20` com a mesma animacao 3D da toolbar e atribui o valor; edicao manual continua possivel.

- [x] `vttEncounterJoinSchema`/`vttEncounterRemoveParticipantSchema` em `contracts.ts`.
- [x] `buildEncounterParticipants` extraido de `vtt:encounter:start` (funcao compartilhada, monta participantes `creature`/`hazard` a partir de `tokenIds`/`hazardInstanceIds` numa cena) e reaproveitado pelo novo handler `vtt:encounter:join`.
- [x] `vtt:encounter:join`: adiciona tokens/hazards a um encontro ja ativo (usa `encounter.sceneId`, nao recebe `sceneId` no payload), filtra ids que ja sao participantes, reordena com `sortEncounterParticipants` preservando o `activeTurnIndex` do participante que ja estava jogando, gera entrada `SYSTEM` no log de batalha por participante ("`<nome> entrou no encontro.`").
- [x] `removeEncounterParticipants` (por `tokenId`, usada internamente quando um token e removido/ocultado da cena) generalizada para `removeEncounterParticipantsMatching` (por predicado), com `removeEncounterParticipantById` (por `participantId`, qualquer tipo) por cima. Novo handler `vtt:encounter:remove-participant` (Mestre-only) usa a versao por id.
- [x] Frontend: `addTokensToEncounter`/`addHazardInstanceToEncounterSelection` (`CampaignOverviewPage.tsx`) perdem o guard `!activeEncounter` — quando ha encontro ativo, emitem `vtt:encounter:join` direto em vez de empilhar na caixa de selecao pre-inicio. Itens do menu de contexto ("Enviar p/ Encontro") ficam desabilitados quando o token/hazard ja e participante (`isTokenInActiveEncounter`/`isHazardInActiveEncounter`), em vez de desabilitados sempre que ha encontro ativo.
- [x] Nova funcao `removeEncounterParticipant` em `CampaignOverviewPage.tsx`, emite `vtt:encounter:remove-participant`. Nova prop `onRemoveParticipant` em `EncounterTrackerPanel`, botao "Remover do encontro" (X) em cada linha de participante — painel lateral (dentro da linha de nome) e painel destacado (canto inferior direito do card).
- [x] Rolagem de iniciativa: `useVttDiceRoller.ts` ganha `executeRoll` (logica de rolagem 3D extraida de `rollDice`, compartilhada) e `rollForInitiative(participantId)` (rola `1d20` fixo, marca a rolagem com `initiativeParticipantId` no `pendingRollRef`). Em `onRollComplete`, se a rolagem pendente tiver `initiativeParticipantId`, chama `onInitiativeRolled(participantId, total)` (nova opcao do hook) e publica no chat como `INICIATIVA (D20): <valor>` em vez do formato generico — sem criar uma segunda instancia do motor 3D.
- [x] `VttDiceControls.tsx` vira `forwardRef` (`memo(forwardRef(...))`), expondo `rollForInitiative` via `useImperativeHandle` (tipo `VttDiceControlsHandle`, exportado por `dice-roller/index.ts`) e aceitando `onInitiativeRolled`.
- [x] `CampaignOverviewPage.tsx`: `diceControlsRef` (ref pro `VttDiceControls` ja renderizado na toolbar), `onInitiativeRolled={updateEncounterInitiative}` no `VttDiceControls`, nova funcao `rollInitiative(participantId)` que chama `diceControlsRef.current?.rollForInitiative(...)`, passada como `onRollInitiative` para os dois `EncounterTrackerPanel` (painel lateral e destacado).
- [x] `EncounterTrackerPanel.tsx`: icone de dado (`Dices`, lucide-react) ao lado do input de iniciativa em ambos os modos (lateral e destacado), chamando `onRollInitiative`. Campo de iniciativa continua editavel manualmente nos dois modos, sem exclusividade com a rolagem.
- [x] Pedido de 2026-07-14: novo comando `vtt:encounter:roll-all-initiatives` para rolar `1d20` de todos os participantes no servidor, sem animacao 3D, sem chat/log, reordenando por iniciativa descendente e colocando o maior resultado como turno atual.
- [x] Correcao de 2026-07-14: rolagem individual de iniciativa passa a enviar `activateHighest: true` em `vtt:encounter:update-initiative`, para que o maior resultado assuma o primeiro turno apos a reordenacao. Edicao manual preserva o turno atual.
- [x] Verificacao: `tsc -p apps/api/tsconfig.test.json --noEmit` limpo, `tsc -b apps/web/tsconfig.json --force` limpo, `npm run test:unit` 92/92, `vite build` ok.

## Fora de escopo (decisao registrada em 2026-07-08)
- Ataques de token: adiado ate existir um sistema de inventario/equipamento (armas, itens equipados, futuramente magias) na ficha do personagem e no bestiario. Ver `.ai/encounter/readme.md` secao "Relacoes com evolucoes futuras". Nenhum item de todo foi criado aqui de proposito — o desenho depende de decisoes que ainda nao foram tomadas.
