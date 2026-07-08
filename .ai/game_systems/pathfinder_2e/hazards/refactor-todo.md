# Hazards PF2e — Todo da Refatoracao (4 eixos)

Referencia: `.ai/game_systems/pathfinder_2e/hazards/questhub-hazards-refactor.md`.

Regras de execucao (pedidas pelo usuario):
- Cada Fase abaixo e uma entrega fechada que nao pode deixar o QuestHub quebrado (build/typecheck/testes passando ao final da fase).
- Item concluido -> `[x]`. Item parcialmente feito -> `[~]` com nota do que falta. Item nao iniciado -> `[ ]`.
- Ao terminar uma Fase inteira, parar e perguntar ao usuario se continua para a proxima.
- Ao retomar o trabalho, primeiro checar o estado real dos itens (o que ja esta implementado) antes de seguir.

Estado geral: **Fase C concluida.** Aguardando decisao do usuario para iniciar a Fase D.

---

## Fase A — Trocar `triggerOnTokenEnter` (boolean) pelos 3 eixos (`scope`, `triggerMode`, `executionMode`)
Objetivo: modelar corretamente sem mudar nenhum comportamento visivel — trap `POINT + ON_TOKEN_ENTER + INSTANT` deve continuar funcionando exatamente como antes (dispara ao token passar por cima, revela, avisa no chat).

Escopo do doc: secoes 9, 13, 14 (parcial), 16.1, 16.4, 17.1/17.2, 18 (Fase 1+2+parte da 3).

### Prisma / banco
- [x] Migration 1 (aditiva): enums `CampaignSceneHazardScope`, `CampaignSceneHazardTriggerMode`, `CampaignSceneHazardExecutionMode`; `ACTIVE` adicionado a `CampaignSceneHazardState`; colunas `scope`/`triggerMode`/`executionMode` com defaults; `positionX`/`positionY` nullable; `area Json?`, `targetTokenId`/`targetCharacterId` `String?` adicionados (migration `20260707204541_campaign_scene_hazard_scope_trigger_execution`).
- [x] Backfill de dados via `prisma db execute` (`triggerOnTokenEnter = true -> ON_TOKEN_ENTER`, `false -> MANUAL`), verificado antes de derrubar a coluna antiga.
- [x] Migration 2: coluna `triggerOnTokenEnter` removida (migration `20260707224045_campaign_scene_hazard_drop_trigger_on_token_enter`). Prisma Client regenerado.

### Backend — domain/repositories/services
- [x] `domain/types.ts` atualizado com os 3 eixos + `ACTIVE`; `position` nullable; `PublicSceneHazardInstance` ganhou `scope`/`position`, sem `triggerMode`/`executionMode` (seguem Mestre-only).
- [x] `domain/validation.ts`: `placeSceneHazardSchema` com `scope`/`triggerMode`/`executionMode` (defaults) + `superRefine` exigindo `position` para POINT/AREA; `updateSceneHazardSchema` aceita os 3 eixos e `state` com ACTIVE.
- [x] `repositories/read.ts`/`write.ts`: mappers com position nullable; `findArmedTriggerSceneHazards` renomeada para `findArmedTokenEnterHazardsInScene`, filtrando por `triggerMode: 'ON_TOKEN_ENTER'` + `scope IN (POINT, AREA)`.
- [x] `services/hazard-instance-service.ts`: `placeSceneHazard`/`updateSceneHazardInstance` repassam os 3 campos novos.

### Backend — socket.ts
- [x] `vtt:hazard:place`/`vtt:hazard:update`: usando os schemas atualizados (`scope`, `triggerMode`, `executionMode`, `position` nullable).
- [x] `checkTokenTriggeredHazards`: usa `findArmedTokenEnterHazards`; transicao de estado por `executionMode` (`INSTANT -> TRIGGERED`, demais -> `ACTIVE`), mantendo `visibility -> REVEALED` e mensagem no chat.
- [~] `vtt:encounter:trigger-hazard`: **adiado para a Fase C** de proposito — so o tipo (`VttEncounterHazardParticipant.state`) foi ampliado para aceitar `ACTIVE`; a logica do handler continua sempre mandando para `TRIGGERED`, sem olhar `executionMode` do participante ainda.

### Frontend
- [x] `apps/web/.../domain/types.ts`: `SceneHazardScope`/`TriggerMode`/`ExecutionMode`, `SceneHazardState` com `ACTIVE`, `VttSceneHazard.position` nullable, `VttEncounterHazardParticipant.state` com `ACTIVE`.
- [x] `CampaignOverviewPage.tsx`: toggle "Disparar ao pisar" agora le/escreve `triggerMode` (`MANUAL` <-> `ON_TOKEN_ENTER`); `scope`/`ALWAYS_ON`/`SCENE` continuam ocultos da UI (Fase B). `HazardMarker` so e renderizado para instancias com `position` (guarda de tipo + preparo para `scope: SCENE` sem marcador).
- [x] `EncounterTrackerPanel.tsx`: `hazardParticipantStateLabels` ganhou `ACTIVE: 'Ativo'`.

### Docs e verificacao
- [x] `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secoes 9 e 12) reescritas com o novo contrato de 4 eixos.
- [x] `tsc -b apps/web/tsconfig.json --force`, `tsc -p apps/api/tsconfig.test.json --noEmit`, `npm run test:unit` (60/60), `vite build` — todos limpos apos a Fase A.

---

## Fase B — `scope: SCENE` (hazard sem posicao, efeito de cena inteira)
Escopo do doc: secoes 6.3, 16.2 ("Adicionar como efeito da cena"), 16.6, 16.7, 16.8, Fase 4 do doc.

- [x] Acao "Adicionar como efeito da cena" na toolbar de Hazards: icone de nuvem (`Cloud`) no card do Hazard preparado, ao lado de "Iniciar encontro (manual)"; emite `vtt:hazard:place` com `scope: 'SCENE'`, sem `position`, `triggerMode: 'ALWAYS_ON'`, `executionMode: 'ONGOING'`. Servidor (`placeSceneHazard`) seta `state: 'ACTIVE'` automaticamente quando `triggerMode === 'ALWAYS_ON'`.
- [x] `HazardMarker`/render do grid: ja nao desenhava marcador para hazards sem `position` desde a Fase A (guarda de tipo em `CampaignOverviewPage.tsx`); confirmado que instancias `scope: SCENE` (sem posicao) nao aparecem no grid.
- [x] Painel novo "Hazards ativos da cena" (Mestre-only): novo componente `SceneHazardsPanel.tsx`, nova aba no painel lateral direito (icone de nuvem, ao lado de "Cenas"), lista hazards `scope: SCENE` da cena ativa com nome, visibility, state, acoes (abrir ficha, ciclar visibilidade, ciclar estado, notas, remover, enviar p/ encontro). Reaproveita `cycleHazardVisibility`/`cycleHazardState`/`removeHazardInstance`/`addHazardInstanceToEncounterSelection` ja existentes; nova funcao `updateSceneHazardNotes` para notas fora do menu de contexto.
- [x] Regra de visibilidade para Jogador em hazards `SCENE` (`HINTED` -> `"Ambiente perigoso"`, distinto do `"Perigo desconhecido"` usado por `POINT`/`AREA`): novo `hiddenSceneHazardName` em `domain/types.ts`, aplicado em `presentSceneHazardForRole` conforme `instance.scope`.
- [x] Docs: `.ai/game_systems/pathfinder_2e/hazards/specs.md` (secoes 9, 12 e nova secao para scope SCENE) e `readme.md` atualizados.
- [x] Verificacao completa: `tsc -b` (web) limpo, `tsc --noEmit` (api) limpo, `npm run test:unit` 60/60, `vite build` ok.

---

## Fase C — `executionMode` afeta o Encounter Mode
Escopo do doc: secoes 14.5, 14.6, 15.1-15.4.

- [x] Mensagem de chat varia por `executionMode` (`hazardTriggerChatMessage` em `socket.ts`): `INSTANT` -> "foi disparado!", `ONGOING` -> "esta ativo!", `ENCOUNTER_PARTICIPANT` -> "entrou em atividade!". Usada tanto pelo gatilho automatico por movimento quanto pelo gatilho manual dentro do encontro.
- [x] Botao "Enviar p/ Encontro" com destaque visual (fundo/borda vermelha) quando `hazard.executionMode === 'ENCOUNTER_PARTICIPANT'`, tanto no menu de contexto do `HazardMarker` quanto no `SceneHazardsPanel`; continua habilitado manualmente para os outros modos (nao bloqueia por `executionMode`, so prioriza visualmente).
- [x] `vtt:encounter:trigger-hazard`: `VttEncounterHazardParticipant` ganhou o campo `executionMode` (copiado da instancia ao iniciar o encontro); o handler agora decide `TRIGGERED` (INSTANT) vs `ACTIVE` (ONGOING/ENCOUNTER_PARTICIPANT), e o guard de "ja dparado" cobre os dois estados terminais. Botao "Disparar"/"Ativar" no `EncounterTrackerPanel` fica oculto quando o participante ja esta `TRIGGERED` ou `ACTIVE`, com titulo do botao ajustado ("Disparar hazard" vs "Ativar hazard").
- [x] Docs (`specs.md`) e verificacao completa: `tsc -b` (web) limpo, `tsc --noEmit` (api) limpo, `npm run test:unit` 60/60, `vite build` ok.

### Correcao pos-auditoria (criterio 19.8 do doc original)
Ao reler o doc antes de avancar pra Fase D, achei uma lacuna real nos criterios de aceite das Fases A-C: a secao 19.8 exige que "Haunt possa ser modelado como POINT, AREA ou SCENE", e a secao 16.3 diz explicitamente que "AREA pode funcionar como POINT ate area real existir" — ou seja, `scope: 'AREA'` deveria ja ser selecionavel (em forma degradada, um ponto so) nas Fases A-C, com o editor de raio/poligono de verdade ficando pra Fase D. Isso nao tinha sido feito; so existiam os fluxos POINT (arrastar) e SCENE (botao de nuvem).

- [x] Novo botao "Escopo: Ponto/Area" no menu de contexto do `HazardMarker` (`cycleHazardScope`), alternando `POINT <-> AREA` via `vtt:hazard:update` (o backend ja suportava `scope` no patch desde a Fase A, so faltava UI). `hazardScopeLabels` novo; cabecalho do menu agora mostra Escopo - Visibilidade - Estado.
- [x] Verificacao completa: `tsc -b` (web) limpo, `tsc --noEmit` (api) limpo, `npm run test:unit` 60/60, `vite build` ok.

---

## Fase D — Editor real de `AREA` (raio/poligono) e escopo `TARGET` (fora do escopo desta rodada)
Nao implementar agora — fica registrado como backlog futuro (doc secoes 6.2, 6.4, 21). So retomar apos Fases A-C estarem estaveis e usadas em mesa. Observacao: `scope: 'AREA'` ja e selecionavel hoje (forma degradada, identica a POINT); o que falta e exclusivamente o editor visual de raio/poligono (`SceneHazardArea`) e o escopo `TARGET` (hazard ligado a um token/personagem especifico).
