# Modulo: Campaign Scene (Specs & Contracts)

## 1. Fronteira do Modulo
`campaign_scene` define a cena persistida de uma campanha. Uma cena nao e apenas uma imagem de fundo: ela e o snapshot persistido de mapa, grid, tokens e regras de exibicao usadas pelo VTT.

O modulo deve permanecer generico. Nenhum contrato de cena ou token pode carregar regras mecanicas especificas de Pathfinder 2e, D&D 5e ou outro sistema.

Diarios nao fazem parte deste modulo. Mesmo que um Mestre nomeie um diario como `Cena 1`, esse diario continua sendo um documento livre da campanha e pertence ao bounded context `campaign_diary`.

## 2. Decisoes Canonicas
* A partir deste modulo, cena persistida substitui as regras antigas do MVP em que grid e tokens nao eram persistidos.
* Nao ha obrigacao de preservar dados antigos de desenvolvimento; migracoes podem assumir que nao existe informacao importante a manter.
* O VTT continua renderizando a mesa, mas o estado persistido de mapa, grid e tokens pertence a `campaign_scene`.
* Trocar de cena pelo Mestre pausa automaticamente a sessao, e a nova cena inicia em estado pausado.
* Jogadores nao recebem automaticamente a nova cena quando o Mestre retoma a sessao; por padrao, cada jogador ve a cena onde seu token esta.
* O Mestre pode forcar uma cena para todos os jogadores, independente de onde estejam seus tokens ou de ainda nao terem token posicionado.
* O modo "mostrar para todos" dura ate o Mestre desativar manualmente; depois cada jogador volta a ver a cena do proprio token.
* O Mestre possui uma cena ativa propria, usada como foco da mesa dele. A cena ativa do Mestre nao obriga a visao dos jogadores enquanto "mostrar para todos" estiver desligado.
* O Mestre pode preparar cenas antes de iniciar a campanha tanto pelo modal `Preparar cena` quanto diretamente na mesa VTT, mesmo com a campanha offline.
* Nao existe um "editor de cena" explicito como area separada; a preparacao acontece nos fluxos existentes da mesa, do modal de preparacao e dos modais auxiliares.
* Criar uma cena nao exige imagem de background.
* O botao `+` em `Preparar cena` cria uma nova cena vazia imediatamente.
* Vincular, trocar ou remover imagem de background e acao separada da criacao da cena.
* Cenas vazias continuam selecionaveis e podem receber grid, tokens e estado de sessao.
* Cenas vazias devem renderizar uma superficie neutra no VTT, sem bloquear ferramentas de grid, medicao ou tokens.
* A modelagem deve permanecer compativel com um futuro fluxo `Construir cena`, onde elementos de construcao como paredes, chao, portas, janelas, escadas, buracos e colisao serao adicionados sem depender de imagem.

## 2.1 Nomes Canonicos
Models Prisma esperados:
* `CampaignScene`
* `CampaignSceneToken`
* `CampaignSceneViewState`

Tipos frontend/backend esperados:
* `CampaignScene`
* `CampaignSceneGrid`
* `CampaignSceneToken`
* `CampaignSceneViewState`

Eventos Socket.IO novos usam prefixo `campaign-scene:*`.

Eventos Socket.IO legados que devem ser substituidos no fluxo novo:
* `vtt:grid:update`
* `vtt:grid:changed`
* `vtt:token:place`
* `vtt:token:move`
* `vtt:token:remove`
* `vtt:token:visibility`
* `vtt:token:changed`
* `vtt:tokens:snapshot`
* `vtt:tokens:request`
* `vtt:token:removed`

## 2.2 Mapa Tecnico Atual
Arquivos atuais que serao impactados:
* `apps/api/src/modules/campaign-presence/socket.ts`: ainda registra eventos `vtt:*` legados de grid, cena, tokens, medicao e dados, mas contratos/schemas, nomes de rooms, mappers e estado vivo ja foram extraidos para arquivos dedicados.
* `apps/api/src/modules/campaign-presence/handlers/presence-handlers.ts`: registra eventos `presence:*` e `disconnect`, mantendo sessao/presenca separados dos handlers VTT legados.
* `apps/api/src/modules/campaign-presence/live-state.ts`: encapsula o estado em memoria usado pelo MVP enquanto nao houver adapter compartilhado.
* `apps/api/src/modules/campaign-presence/contracts.ts`: define contratos e schemas dos eventos legados ainda consumidos pelo VTT.
* `apps/api/src/modules/assets/routes.ts`: ja fornece upload/listagem/delecao de assets de campanha; sera usado para imagem de cena.
* `apps/api/src/modules/assets/service.ts`: fonte para renovar URLs e metadados de imagem.
* `apps/web/src/vtt/grid.ts`: hoje define `VttGridSettings` com `squareMeters`; deve migrar para `metersPerCell`.
* `apps/web/src/layouts/CampaignLayout.tsx`: hoje mantem estado de grid global e escuta `vtt:grid:changed`; deve consumir snapshot de cena.
* `apps/web/src/contexts/SessionContext.tsx`: hoje emite `vtt:grid:update`; deve expor eventos/acoes de `campaign-scene`.
* `apps/web/src/pages/campaign/CampaignOverviewPage.tsx`: concentra modal `Preparar cena`, renderizacao de grid, tokens, medicao, rodape de cenas e eventos `vtt:token/*`; sera o principal ponto de decomposicao.
* `apps/web/src/vtt/dice-roller/*`: nao deve ser alterado pela persistencia de cena, exceto para manter a mesa montada.

Pontos de migracao conhecidos:
* `squareMeters` e `sqrt(squareMeters)` devem virar `metersPerCell`.
* Tokens em `campaign-presence` hoje sao descartados ao encerrar sessao; no novo fluxo permanecem persistidos por cena.
* A cena atual hoje e tratada como imagem/asset no frontend; no novo fluxo e `CampaignScene`.
* O snapshot de entrada deve ser por usuario, nao broadcast unico para toda a campanha.
* Qualquer implementacao atual de diario dentro de `campaign_scene` deve ser movida para `campaign_diary`.

## 3. Modelo de Dados

### 3.1 CampaignScene

```ts
type CampaignScene = {
  id: string
  campaignId: string
  name: string
  order: number
  assetId: string | null
  backgroundUrl: string | null
  backgroundCacheKey: string | null
  grid: CampaignSceneGrid
  tokens: CampaignSceneToken[]
  createdAt: string
  updatedAt: string
}
```

Regras:
* `assetId` e a referencia persistida para a imagem da cena.
* `assetId`, `backgroundUrl` e `backgroundCacheKey` sao opcionais.
* `backgroundUrl` e persistido para renderizacao rapida, mas deve ser tratado como derivado/renovavel quando expirar ou falhar.
* `backgroundCacheKey` identifica a imagem no cache do cliente.
* Se `assetId` existir, a API deve conseguir renovar `backgroundUrl` a partir do modulo `assets`.
* Se apenas `backgroundUrl` existir, a cena ainda pode renderizar, mas deve buscar vinculacao a `Asset` quando possivel.
* Quando `assetId` muda, `backgroundCacheKey` deve mudar.
* `order` controla a exibicao sequencial das cenas no rodape e nos cards.
* Cenas sem imagem sao permitidas para preparo, selecao, grid, tokens e visualizacao.
* Criar cena sem imagem deve persistir `assetId`, `backgroundUrl` e `backgroundCacheKey` como `null`.
* Vincular imagem a cena deve acontecer por `PATCH`, informando `assetId`, `backgroundUrl` e `backgroundCacheKey`.
* Remover imagem de cena deve acontecer por `PATCH`, informando `assetId: null`, `backgroundUrl: null` e `backgroundCacheKey: null`.

### 3.2 CampaignSceneGrid

```ts
type CampaignSceneGrid =
  | {
      visible: boolean
      shape: 'square'
      size: number
      metersPerCell: number
      squareMeasurementColor: string
      lineWidth: number
      color: string
    }
  | {
      visible: boolean
      shape: 'hex'
      size: number
      hexMeasurementColor: string
      lineWidth: number
      color: string
    }
```

Regras:
* A configuracao de grid e persistida por cena.
* `size` representa o tamanho visual da celula em pixels antes do zoom local.
* `size` deve respeitar minimo de `24px` e maximo de `96px`.
* `lineWidth` deve respeitar minimo de `1px` e maximo de `4px`.
* No grid quadrado, `metersPerCell` representa quantos metros lineares cada lado da celula representa.
* A regra antiga baseada em area (`squareMeters` e `sqrt(squareMeters)`) deve ser substituida por `metersPerCell`.
* No grid quadrado, a distancia em metros deve ser `(distanciaEmPixels / size) * metersPerCell`.
* No grid hexagonal, a medicao continua contando passos entre hexagonos e nao usa escala em metros.
* Alterar grid de uma cena nao altera grid de outras cenas.
* Alterar tamanho, formato, cor ou escala do grid nao remove tokens.
* Alterar grid nao deve exibir aviso informando que tokens serao removidos.
* Zoom continua sendo local ao cliente e nao deve ser persistido na cena.

### 3.3 CampaignSceneToken

```ts
type CampaignSceneToken = {
  id: string
  sceneId: string
  characterId: string
  name: string
  avatarUrl: string | null
  ownerUserId: string | null
  ownerName: string | null
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: {
    x: number
    y: number
  }
  createdAt: string
  updatedAt: string
}
```

Regras:
* `position.x` e `position.y` representam o centro do token em unidades logicas do grid da propria cena.
* Para renderizar, `pixelCenter = position * scene.grid.size`, com zoom aplicado apenas visualmente.
* Ao alterar o tamanho do grid, o token permanece no mesmo ponto logico da cena.
* Apenas o dono do personagem pode mover o proprio token durante sessao `ACTIVE`.
* O Mestre pode mover qualquer token quando a sessao esta `PAUSED`.
* O Mestre nao move token de Player por drag durante sessao `ACTIVE`, para evitar conflito de input.
* O Mestre pode posicionar tokens antes de iniciar a campanha.
* Tokens pertencem a uma cena por vez. Mover um token entre cenas altera seu `sceneId`.
* O menu contextual do Mestre no token deve oferecer `Mover para cena...`.
* Ao escolher destino em `Mover para cena...`, o token sai da cena atual e passa para a cena destino.
* O Mestre tambem possui, na sidebar lateral direita, um menu que abre um modal de distribuicao de tokens por cena.
* O modal de distribuicao mostra cada cena como card e representa personagens por seus icones.
* O Mestre pode arrastar tokens de um card de cena para outro dentro do modal; isso move os tokens para as respectivas cenas.
* Tokens invisiveis ficam ocultos para jogadores e visiveis com opacidade reduzida para o Mestre.
* O Mestre pode remover um token individualmente pelo menu contextual.
* O Mestre pode remover todos os tokens da cena atual pela listagem/painel da ferramenta de tokens.
* O Mestre pode remover todos os tokens da campanha pela listagem/painel da ferramenta de tokens.
* Remocao em lote e sempre acao explicita do Mestre, nunca consequencia automatica de edicao de grid.

## 4. Visao de Cena por Usuario

```ts
type CampaignSceneViewState = {
  campaignId: string
  masterActiveSceneId: string | null
  forcedSceneId: string | null
  sessionState: 'ACTIVE' | 'PAUSED'
}
```

Regras:
* `masterActiveSceneId` define a cena que o Mestre esta visualizando.
* `forcedSceneId` define a cena mostrada para todos enquanto o modo "mostrar para todos" estiver ativo.
* Se `forcedSceneId` existir, jogadores veem essa cena mesmo sem token ou com token em outra cena.
* Se `forcedSceneId` nao existir, cada jogador ve a cena onde o token do seu personagem esta.
* Se o jogador nao tiver token posicionado e nao houver `forcedSceneId`, ele deve ver uma tela preta/neutra aguardando posicionamento ou cena compartilhada.
* Quando o Mestre remove o token de um jogador durante a sessao, se nao houver `forcedSceneId`, esse jogador deve perder imediatamente a visao da cena e voltar para tela preta/neutra ate o token ser reposicionado.
* Remover token de um jogador nunca deve redirecionar esse jogador para `masterActiveSceneId` ou para a primeira cena da campanha.
* Trocar `masterActiveSceneId` pelo Mestre pausa automaticamente a sessao.
* Retomar sessao nao muda a cena visivel dos jogadores por si so; a visao continua seguindo `forcedSceneId` ou cena do token.

## 5. Persistencia

Regras:
* Ao carregar a campanha offline, o Mestre recebe o ultimo snapshot persistido de cenas, grid e tokens.
* Durante uma sessao online, alteracoes de grid e tokens ficam em estado vivo da sessao, mantido em memoria/cache e transmitido por websocket.
* Alteracoes de grid e tokens durante a sessao online nao devem disparar escrita no banco a cada evento, para evitar loops de snapshot e inconsistencias visuais.
* Ao iniciar sessao, o servidor deve persistir o estado atual preparado pelo Mestre antes de colocar a campanha online.
* Ao encerrar sessao, o servidor deve persistir o ultimo estado vivo da mesa para que a proxima sessao comece como a anterior terminou.
* Eventos que podem persistir estado fora da sessao online:
  * preparo de cena com campanha offline;
  * iniciar sessao;
  * encerrar sessao;
  * fechamento do modal `Preparar cena`, quando houver alteracoes pendentes.
* O frontend pode atualizar estado de forma otimista, mas a fonte da verdade persistida deve ser atualizada pelos eventos acima.
* Ao entrar na campanha, o cliente deve receber snapshot da cena que deve visualizar e metadados suficientes para cachear imagens.

## 6. Cache de Imagem no Cliente

Regras:
* Imagens de cena devem ser armazenadas em cache nos clients.
* O cliente deve tentar renderizar a imagem a partir do cache usando `backgroundCacheKey`.
* A imagem so deve ser requisitada novamente quando nao existir no cache, quando o cache estiver invalido ou quando a URL assinada expirar/falhar.
* A API deve retornar metadados suficientes para o cliente decidir se o cache ainda e valido.
* Quando `assetId` muda, `backgroundCacheKey` deve mudar.
* A camada de cache nao deve alterar a regra de autorizacao: somente usuarios autorizados a ver a cena podem obter ou renovar a imagem.

## 7. API HTTP

Endpoints esperados:

```http
GET /api/campaigns/:campaignId/scenes
GET /api/campaigns/:campaignId/scenes/visible
GET /api/campaigns/:campaignId/scenes/:sceneId
POST /api/campaigns/:campaignId/scenes
PATCH /api/campaigns/:campaignId/scenes/:sceneId
DELETE /api/campaigns/:campaignId/scenes/:sceneId
```

Regras:
* Todas as rotas exigem usuario autenticado.
* Criar, editar e deletar cenas exige `CampaignCharacter` ativo com role `MASTER`.
* Jogadores podem consultar apenas a cena que devem visualizar.
* Deletar cena com tokens exige confirmacao ou realocacao previa dos tokens.
* Deletar cena com `assetId` nao deve apagar automaticamente o `Asset` sem seguir as regras do modulo `assets`.
* Rotas devem delegar fluxo para services/casos de uso.
* Acesso a Prisma deve acontecer apenas por repositories do modulo.
* `POST /api/campaigns/:campaignId/scenes` deve aceitar payload sem `assetId`, `backgroundUrl` e `backgroundCacheKey`.
* `PATCH /api/campaigns/:campaignId/scenes/:sceneId` deve aceitar vinculacao e remocao de imagem sem recriar a cena.

Payload minimo de criacao:

```json
{
  "name": "Cena1",
  "order": 1
}
```

Payload para vincular imagem:

```json
{
  "assetId": "asset_123",
  "backgroundUrl": "https://...",
  "backgroundCacheKey": "storage/path/image.webp"
}
```

## 8. Eventos Socket.IO

```ts
type CampaignSceneChangedPayload = {
  campaignId: string
  sceneId: string
  reason: 'MASTER_SWITCH' | 'FORCED_SCENE' | 'TOKEN_SCENE_CHANGED' | 'SCENE_UPDATED'
}

type CampaignSceneTokenMovedPayload = {
  campaignId: string
  sceneId: string
  token: CampaignSceneToken
}

type CampaignSceneTokenSceneChangedPayload = {
  campaignId: string
  tokenId: string
  fromSceneId: string
  toSceneId: string
}

type CampaignSceneTokensRemovedPayload = {
  campaignId: string
  sceneId: string | null
  scope: 'CURRENT_SCENE' | 'GLOBAL'
}
```

Eventos:
* `campaign-scene:snapshot`: servidor envia a cena que o socket deve visualizar.
* `campaign-scene:switch`: Mestre troca sua cena ativa; servidor pausa a sessao e persiste o estado.
* `campaign-scene:force`: Mestre ativa ou troca a cena forcada para todos.
* `campaign-scene:unforce`: Mestre desativa a cena forcada para todos.
* `campaign-scene:changed`: servidor informa que a cena visivel de um socket mudou.
* `campaign-scene:token:move`: jogador dono em `ACTIVE` ou Mestre em `PAUSED` move token dentro da cena atual.
* `campaign-scene:token:moved`: servidor confirma e transmite movimento valido para sockets que visualizam a cena.
* `campaign-scene:token:move-scene`: Mestre move token para outra cena.
* `campaign-scene:token:scene-changed`: servidor informa mudanca de cena do token e atualiza os sockets afetados.
* `campaign-scene:grid:update`: Mestre altera grid da cena.
* `campaign-scene:grid:changed`: servidor transmite grid atualizado para sockets que visualizam a cena.

Regras:
* Eventos de cena devem validar autenticacao, `campaignId` e role operacional via `CampaignCharacter`.
* Jogadores nao podem emitir alteracoes de grid ou distribuicao de cena.
* Jogadores recebem apenas eventos da cena que devem visualizar.
* Movimento, remocao e invisibilidade de token devem ser emitidos apenas para sockets cuja cena visivel seja a cena atual do token.
* Remocao de token de `PLAYER` tambem deve ser emitida ao socket dono daquele token, mesmo que a remocao faca a cena visivel do dono deixar de existir.
* Trocar a cena ativa do Mestre nao deve emitir evento de alteracao de grid para a cena anterior; a troca apenas carrega o grid da cena escolhida no cliente do Mestre.
* Mestre pode receber eventos de todas as cenas conforme necessario para administrar a campanha.

## 9. UI/UX

Regras:
* O rodape de cenas continua visivel apenas para Mestre.
* `Preparar cena` continua sendo a entrada para criar e organizar cenas com cards.
* Ao selecionar uma cena no rodape, o Mestre muda `masterActiveSceneId`, a sessao pausa automaticamente e a mesa dele renderiza o snapshot daquela cena.
* A mesa deve limpar o canvas atual e reinicializar fundo, grid, tokens e medicoes visuais a partir da cena escolhida.
* A troca de cena nao deve desmontar `CampaignLayout`.
* A sidebar lateral direita deve ter um menu de gerenciamento/distribuicao de cenas.
* O modal de distribuicao deve exibir cenas como cards e tokens/personagens como icones arrastaveis entre cards.
* O menu contextual de token do Mestre deve incluir `Mover para cena...`.

## 10. Criterios de Aceitacao
* Cenas persistem imagem, grid e tokens de forma independente.
* Alterar grid em uma cena nao altera outra cena.
* Alterar `metersPerCell` muda a medicao em metros do grid quadrado daquela cena.
* Tokens mantem posicao logica ao alterar tamanho visual do grid.
* Mestre consegue preparar cenas com tokens posicionados antes de iniciar sessao.
* Mestre consegue preparar cenas diretamente na mesa com campanha offline.
* Mestre consegue preparar cenas pelo modal `Preparar cena`.
* Trocar cena pelo Mestre pausa automaticamente a sessao.
* Retomar sessao nao revela automaticamente a nova cena para todos.
* Player ve a cena onde seu token esta quando nao ha cena forcada.
* Player sem token nao ve cena privada automaticamente quando nao ha cena forcada.
* Mestre consegue forcar uma cena para todos os Players.
* Desativar "mostrar para todos" devolve cada Player para a cena do proprio token.
* Mestre consegue mover token entre cenas pelo menu contextual `Mover para cena...`.
* Mestre consegue mover tokens entre cards de cena no modal da sidebar direita.
* Jogador move apenas o proprio token em sessao `ACTIVE`.
* Mestre move qualquer token em sessao `PAUSED`.
* Mestre nao move token de Player por drag em sessao `ACTIVE`.
* Diarios nao ficam vinculados a cenas e nao sao implementados neste modulo.
* Imagens de cena sao lidas do cache do cliente quando disponiveis.
* Imagem de cena so e requisitada novamente quando ausente, invalida ou expirada no cache.
