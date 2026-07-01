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
* Scene-owned Table State: cena persistida e a fonte da verdade de mapa, grid e tokens.
* Layout-mounted VTT: trocar cena ou abrir modal de cena nao deve desmontar a mesa.
* Master Active Scene: o Mestre possui uma cena ativa propria para administrar a mesa.
* Token-derived Player Scene: jogador ve a cena do proprio token quando nao existe cena forcada.
* Forced Scene View: o Mestre pode mostrar uma cena para todos ate desativar manualmente.
* Pause-on-scene-switch: toda troca de cena pelo Mestre pausa automaticamente a sessao.
* Session Live State: grid, tokens e cena ativa podem ser alterados em memoria/cache durante a sessao online, com propagacao por Socket.IO.
* Lifecycle Persistence: o estado vivo da mesa e gravado no banco em pontos de ciclo de vida controlados, como iniciar e encerrar sessao.
* Asset-backed Backgrounds: imagem de cena deve referenciar `assetId`, mantendo `backgroundUrl` como copia renovavel para renderizacao.
* Client Image Cache: clientes tentam carregar imagem por `backgroundCacheKey` antes de requisitar URL nova.
* Generic VTT Boundary: contratos de cena nao carregam regra mecanica de ruleset.
* DDD Backend Boundary: rotas chamam services/casos de uso, e todo acesso ao banco passa por repositories do modulo.

## Restricoes
* Nao voltar a tratar cena como simples troca de background.
* Nao tratar o estado em memoria como fonte definitiva apos encerramento da sessao; ele deve ser persistido no ciclo de vida da sessao.
* Nao usar `squareMeters` como escala canonica nova; grid quadrado deve usar `metersPerCell`.
* Nao aplicar escala metrificada ao grid hexagonal.
* Nao permitir que jogador edite grid, cena ou distribuicao de tokens.
* Nao revelar cena diferente da cena do token do jogador quando nao houver `forcedSceneId`.
* Nao implementar diarios dentro deste modulo; diarios pertencem a `campaign_diary`.
* Nao apagar `Asset` automaticamente ao deletar cena sem seguir as regras do modulo `assets`.
* Nao usar URL assinada como unica referencia persistida da imagem.
* Nao ignorar cache do client quando `backgroundCacheKey` ainda for valido.
