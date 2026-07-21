# Fog of War: especificacoes e contratos

## 1. Contratos canonicos

```ts
type SceneFogConfig = {
  enabled: boolean
  darkness: boolean
  playerFog: {
    unexploredOpacity: 1
    exploredOpacity: 0.5
    softEdge: true
  }
  masterFog: {
    defaultMode: 'TRANSLUCENT'
    translucentOpacity: 0.25
  }
}

type TokenVisionConfig = {
  rangeMeters: number
}

type FogLightSourceConfig = {
  id: string
  enabled: boolean
  rangeMeters: number
  permission: { allowedControllerMemberIds: string[] }
}

type FogFixedLightSource = FogLightSourceConfig & {
  position: { x: number; y: number }
}
```

Defaults: FOG desativado, escuridao desativada, visao `10m`, lampada nova com `8m` e ligada.

Campos legados `ambientPreset`, `ambientIntensityPercent`, `forcedShareMode`, `thresholds`, `nightVision`, `intensityPercent` e `animation` nao fazem parte do contrato normalizado.

## 2. Visibilidade

* A origem e o centro do Token.
* A visao base e circular, omnidirecional e possui 360 graus.
* Os angulos usados pelo poligono devem pertencer ao mesmo intervalo `[0, 2π)`; vertices de paredes nunca podem inverter ou cruzar a ordem angular.
* O alcance em pixels e `rangeMeters / metersPerCell * grid.size`.
* A visao base e recortada por paredes, portas nao totalmente abertas e objetos bloqueadores.
* Janelas nao bloqueiam visao.
* O Token observador permanece visivel dentro do proprio footprint.
* Sem Token observado, jogadores recebem cobertura total; o Mestre em previa recebe FOG translucido para conseguir selecionar um Token.
* Com `darkness = true`, a mascara atual e `visaoDoToken AND fontesDeLuzAtivas`; nenhuma area sem luz e revelada, nem mesmo o footprint do observador.
* Em escuridao, areas exploradas fora da mascara atual usam opacidade `1`; a memoria continua registrada e volta a usar `exploredOpacity` quando a escuridao for desativada.
* `darkness` nao produz efeito visual enquanto `enabled = false`, mas seu valor configurado permanece persistido.

## 3. Lampadas

* Lampada possui somente alcance mecanico; nao existe intensidade ou queda gradual.
* A propagacao e circular e recortada por paredes/portas que bloqueiam luz.
* Sem escuridao, a area de lampada e adicionada a visibilidade somente onde tambem existe linha de visao do Token.
* Com escuridao, fontes de luz apenas habilitam visibilidade dentro do alcance maximo e da linha de visao do Token.
* Lampadas podem ampliar a visao alem do alcance base ate, no maximo, `rangeMeters` adicionais.
* Lampadas sobrepostas sao unidas por OR; nao existe soma.
* Marcadores sao administrativos e visiveis apenas para o Mestre no setup.
* A fonte propria de um Token usa `FogLightSourceConfig`, tem origem dinamica no centro do Token e participa da mesma uniao binaria das lampadas fixas.
* Mover um Token com fonte propria ativa move a iluminacao sem request adicional; a posicao continua pertencendo ao posicionamento do Token.
* Cada marcador exibe no setup um contorno tracejado correspondente ao alcance real sobre o mapa.
* Criar, arrastar, editar alcance e remover atualizam somente o rascunho ate `Aplicar`.

## 4. Exploracao

```ts
type FogExplorationSnapshot = {
  campaignId: string
  sceneId: string
  tokenId: string
  revision: number
  width: number
  height: number
  mask: Uint8Array
}
```

* A mascara usa um bit por amostra.
* Exploracao e monotona na mesma revisao e usa OR binario.
* Movimento rejeitado nao contamina a memoria confirmada.
* Troca de cena, pausa e encerramento executam checkpoint.
* Reset incrementa a revisao e invalida snapshots antigos.
* Diferenca de largura/altura entre snapshot e renderer executa reamostragem conservadora; nao cria mascara vazia.

## 5. Setup e persistencia

* O painel de FOG possui: FOG ativo, escuridao, visao administrativa, lampadas, alcance do Token e reset de exploracao.
* O menu contextual `Configuracoes` do Token permite ao Mestre editar `visionConfig.rangeMeters`, habilitar/desabilitar `lightConfig.enabled` e editar `lightConfig.rangeMeters`.
* A aplicacao dessas configuracoes usa, respectivamente, `PATCH /vision` e `PATCH /light`; falha em uma das operacoes deve ser exibida no proprio menu.
* Nenhum input ou arraste executa HTTP/WebSocket.
* `Aplicar` persiste cena, lampadas e alcance do Token.
* `Reverter` restaura a configuracao confirmada.
* A persistencia existente em JSON permanece; nao ha alteracao estrutural de banco.

Endpoints mantidos:

```http
PATCH  /api/campaigns/:campaignId/scenes/:sceneId/fog
PATCH  /api/campaigns/:campaignId/tokens/:tokenId/vision
PATCH  /api/campaigns/:campaignId/tokens/:tokenId/light
GET    /api/campaigns/:campaignId/scenes/:sceneId/fog/exploration/:tokenId
DELETE /api/campaigns/:campaignId/scenes/:sceneId/fog/exploration/:tokenId
DELETE /api/campaigns/:campaignId/scenes/:sceneId/fog/exploration
```

## 6. Criterios de aceitacao

* Ativar FOG exige apenas `enabled = true`.
* Desativar FOG revela a cena sem alterar exploracao.
* Marcar `Escuridao` faz o Token enxergar somente pontos simultaneamente iluminados e dentro de seu campo de visao maximo.
* Sem fonte de luz ativa, a escuridao produz mascara atual vazia.
* Uma area previamente explorada permanece totalmente coberta quando nao esta iluminada no frame atual de escuridao.
* Uma fonte propria habilitada ilumina a partir do centro atual do Token e acompanha seu movimento.
* Desabilitar a fonte propria remove imediatamente sua contribuicao da mascara de luz.
* Visao alcança igualmente norte, sul, leste e oeste.
* O mesmo resultado circular permanece quando existem segmentos acima e abaixo do Token.
* Paredes e portas fechadas bloqueiam; portas abertas e janelas permitem visao.
* Uma lampada dentro da linha de visao amplia a mascara pelo alcance configurado.
* Alterar alcance muda o efeito sem intensidade intermediaria.
* Mover um Token comum nao recalcula a mascara fixa de lampadas.
* A mascara interativa nao excede `192px`, ou `128px` em cena densa.
* Configuracao legada e normalizada sem ambiente, intensidade, niveis, cena forcada ou visao noturna.
* Aplicar configuracao de FOG nao apaga nem substitui a exploracao existente.
