# Campaign Scene Skills & Tech

## Stack Tecnologica
* React e React Router para manter a mesa montada no `CampaignLayout`.
* Socket.IO para snapshots e eventos realtime de cena, grid, tokens e pausa.
* Fastify para rotas HTTP do modulo.
* Prisma e PostgreSQL para persistencia de cenas, tokens, grid e estado de visualizacao por campanha.
* Zod para validar payloads HTTP e Socket.IO.
* Firebase Storage via modulo `assets` para imagens de cena.
* Cache do navegador para armazenar imagens de cena no client.

## Padroes
* Campaign-owned Token Identity: a campanha e a fonte da verdade da identidade e do controle do Token.
* Scene-owned Token Placement: a cena guarda apenas a presenca visual atual do Token.
* Layout-mounted VTT: trocar cena ou abrir modal de cena nao deve desmontar a mesa.
* Master Active Scene: o Mestre possui uma cena ativa propria para administrar a mesa.
* Token-derived Player Scene: jogador ve a cena do proprio token quando nao existe cena forcada.
* Forced Scene View: o Mestre pode mostrar uma cena para todos ate desativar manualmente.
* Pause-on-scene-switch: troca de cena pelo Mestre pausa automaticamente a sessao quando ela esta online.
* Session Live State: grid, tokens e cena ativa podem ser alterados em memoria/cache durante a sessao online, com propagacao por Socket.IO.
* Token Delta Broadcast: drop, criacao, movimento, remocao e invisibilidade de tokens durante sessao online devem emitir deltas leves para sockets autorizados, sem reenviar snapshot completo da cena.
* Stable Scene Frame: background, dimensoes do board, grid, zoom e pan nao devem ser recalculados por mudancas exclusivas da camada de tokens.
* Independent Wall Coordinates: paredes usam pixels da cena antes do zoom; nunca unidades logicas do grid.
* Lifecycle Persistence: o estado vivo da mesa e gravado no banco em pontos de ciclo de vida controlados, como autosave eventual, iniciar e encerrar sessao.
* Optional Scene Background: cena e um container de mesa mesmo sem `assetId`; imagem e um recurso opcional vinculado depois.
* Scene Wall Editing: segmentos, retangulos e portas sao editados como estado visual generico da cena e preservados no mesmo snapshot.
* Door-to-Wall Snap: a criacao de porta usa tolerancia visual convertida para pixels absolutos da cena e projeta as duas extremidades sobre um unico segmento de parede.
* Asset-backed Backgrounds: quando houver imagem de cena, ela deve referenciar `assetId`, mantendo `backgroundUrl` como copia renovavel para renderizacao.
* Client Image Cache: clientes tentam carregar imagem por `backgroundCacheKey` antes de requisitar URL nova.
* Generic VTT Boundary: contratos de cena nao carregam regra mecanica de ruleset.
* Generic Token Model: Token da campanha e entidade visual/operacional independente; `Character` e apenas uma associacao opcional e exclusiva.
* DDD Backend Boundary: rotas chamam services/casos de uso, e todo acesso ao banco passa por repositories do modulo.

## Restricoes
* Nao voltar a tratar cena como simples troca de background.
* Nao tratar o estado em memoria como fonte definitiva apos encerramento da sessao; ele deve ser persistido no ciclo de vida da sessao.
* Nao executar insert/update de token no Prisma no caminho quente de drop, movimento ou visibilidade durante sessao online.
* Nao emitir snapshot completo de cena como resposta normal a drop ou movimento de token durante sessao online.
* Nao usar `LoadingScreen` global para esconder deformacao causada por drop, movimento, remocao ou invisibilidade de token.
* Nao usar `squareMeters` como escala canonica nova; grid quadrado deve usar `metersPerCell`.
* Nao aplicar escala metrificada ao grid hexagonal.
* Nao multiplicar coordenadas persistidas de paredes por `grid.size` nem somar o deslocamento fino do grid.
* Nao persistir porta isolada, ligada a paredes diferentes ou sobreposta a um trecho de parede que continue bloqueando movimento.
* Nao permitir que jogador edite grid, cena ou distribuicao de tokens.
* Nao revelar cena diferente da cena do token do jogador quando nao houver `forcedSceneId`.
* Nao exigir `characterId`, ficha, bestiario, inventario, combate ou ruleset para criar token de teste.
* Nao adicionar campos mecanicos como PV, CA, spell slots, item state, source pack ou creature id ao contrato base de token.
* Nao apagar Token ao excluir cena ou Character.
* Nao apagar Character ao excluir Token.
* Nao permitir transferencia direta entre cenas; remover o posicionamento atual e criar outro sao duas acoes explicitas.
* Nao implementar diarios dentro deste modulo; diarios pertencem a `campaign_diary`.
* Nao apagar `Asset` automaticamente ao deletar cena sem seguir as regras do modulo `assets`.
* Nao exigir upload de imagem para criar, selecionar ou preparar cena.
* Nao usar URL assinada como unica referencia persistida da imagem.
* Nao ignorar cache do client quando `backgroundCacheKey` ainda for valido.
