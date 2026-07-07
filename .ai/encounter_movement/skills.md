# Modulo: Encounter Movement (Skills & Tech)

## 1. Stack Tecnologica
* Backend: `apps/api/src/modules/encounter_movement/{domain,repositories}` (Fastify/Socket.IO ja existentes, sem infra nova).
* Enforcement no gateway existente `campaign-presence/socket.ts`, handler `vtt:token:move` — igual ao padrao ja usado por `combat` e `hazard-instances` (o socket so orquestra, a regra pura fica em `domain/`).
* Frontend: ajustes em `apps/web/src/vtt/table/components/BoardOverlays.tsx` (`PlayerToken`, gate de `canDrag` + previsao local) e `CampaignOverviewPage.tsx` (estado/handlers), reaproveitando `apps/web/src/vtt/table/domain/boardMath.ts` para conversao pixel↔grid ja existente. Novo arquivo puro `apps/web/src/vtt/table/domain/movementPrediction.ts` espelha `cellDistance`/`cellsToMeters`/`validateMovement` do backend (ver secao 2, item "previsao no cliente").

## 2. Padroes Aplicados
* **Domain purity:** `domain/movement-distance.ts` e `domain/movement-validation.ts` sao funcoes puras (sem Prisma, sem socket, sem DOM) — recebem posicoes em pixels + tamanho de celula + metersPerCell, devolvem distancia em metros e resultado de validacao.
* **Adapter de sistema para velocidade de personagem:** mesmo mecanismo do `combat` (`CharacterSheetSystemAdapter.health`) — o `CharacterSheetSystemAdapter<TSheet>` ganha um accessor `movement?: { read(sheet: TSheet): { meters: number } }`, implementado por `pathfinder2eSheetAdapter` lendo `sheet.general.movementMeters`. O modulo `encounter_movement` nunca importa `Pathfinder2eSheet` nem sabe o nome do campo.
* **Leitura de catalogo (NPC):** reaproveita `findBestiaryEntry` (facade de `game_systems/bestiary/registry.ts`), lendo `entry.display.stats.find(s => s.key === 'speed')` — mesmo padrao usado por `combat/repositories/bestiary-health.ts` para HP. So funciona para `category === 'npc'`.
* **Estado de movimento por turno:** vive dentro do proprio `VttEncounterCreatureParticipant` (em memoria, no `CampaignPresenceState` do `campaign-presence`), nao em tabela nova — segue a politica ja documentada em `.ai/encounter/readme.md` ("O MVP nao persiste encontro no banco").
* **Enforcement server-side, nunca so no cliente:** a distancia autorizada e sempre calculada no backend a partir da ultima posicao persistida do token, nunca confiando no `movementPath` enviado pelo cliente como fonte de verdade de distancia total (o cliente pode enviar isso so pra preview/animacao/gatilho de hazard, como ja acontece hoje).
* **Previsao no cliente (defesa em profundidade pra UX, nao pra seguranca):** o frontend roda uma copia pura das mesmas funcoes de calculo pra clampar a posicao *visualmente* durante o arraste, antes mesmo do round-trip pro servidor. Isso e so otimizacao de resposta — o servidor sempre reprocessa e pode divergir (ex.: outro evento mudou o orcamento entretanto), e quando diverge, o proximo `vtt:token:changed` corrige a posicao renderizada. Ver bug historico na secao 5.
* **Acao consumida so no fim do gesto:** `vtt:token:move` (disparado a cada tique) nunca decrementa `actionsRemaining` sozinho — so `commitMovementAction`, chamado pelo handler de `vtt:combat:movement:commit`, faz isso. Isso separa "quanto posso andar agora" (recalculado a cada tique) de "gastei uma acao" (decidido uma vez, no fim do gesto).

## 3. Restricoes Tecnicas
* Nao introduzir nenhuma tabela Prisma nova nesta etapa (estado de movimento e efemero, por sessao).
* Nao mudar a unidade exibida na ficha de bestiario PF2e (continua "ft" na tela) — a conversao pra metros e so para o calculo do limite de movimento, nunca reescreve o texto de exibicao do catalogo.
* Nao adicionar `Pathfinder2eGeneral`/`Pathfinder2eHitPoints`-like nomes de campo dentro de `apps/api/src/modules/encounter_movement` — so dentro do adapter do pacote do sistema.
* Nao usar `any`; validar payload novo com Zod antes de calcular.
* Handler `vtt:token:move` continua fire-and-forget (sem ACK), igual ao restante do arquivo `socket.ts` hoje — nao introduzir um padrao de ACK isolado so pra este evento.

## 4. Decisoes de Performance
* `vtt:token:move` e disparado a cada movimento de ponteiro durante o arraste (alta frequencia). O calculo de distancia usa apenas dados ja em memoria (posicao atual do token no live map, `metersPerCell`/`size` do grid da cena, estado do participante no encontro) — nenhuma query ao banco por tick.
* O clamp de posicao (quando excede o restante do orcamento) e feito no mesmo tick, sem round-trip adicional — o cliente recebe a posicao ja corrigida de volta via `vtt:token:changed`, igual a qualquer outro movimento confirmado pelo servidor.

## 5. Limitacoes Conhecidas
* Diagonal conta como 1 celula (regra "1-1-1"), nao a alternancia PF2e 5-10-5-10 ft.
* Cada acao de movimento e "tudo ou nada dentro do teto da velocidade" — nao modela Step/Leap, terreno dificil, nem custo diferenciado por tipo de deslocamento.
* Sem terreno dificil, sem colisao com paredes, sem line of sight.
* O sistema so sabe contar acoes gastas em **movimento**. Nao ha rastreamento de ataque/magia/outras acoes — cabe ao jogador/Mestre saber que so tem 3 acoes no total e se auto-regular pra nao "gastar" as 3 so andando se quiser fazer outra coisa.
* **Bug historico corrigido:** a primeira versao (Revisao 1) so validava no servidor, e o cliente movia o token otimisticamente sem esperar confirmacao — o token parecia se mover livre durante o arraste e so "corrigia" (as vezes voltando quase ao ponto inicial) quando o gesto terminava. Corrigido com a previsao no cliente (secao 2).
