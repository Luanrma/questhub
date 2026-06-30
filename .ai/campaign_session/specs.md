# Modulo: Campaign Session (Specs & Contracts)

## 1. Tipos canonicos

```ts
type CampaignConnectionState = 'OFFLINE' | 'ONLINE'
type CampaignRunState = 'PAUSED' | 'IN_PROGRESS'
```

Regras:
* `CampaignConnectionState` descreve o WebSocket da campanha.
* `CampaignRunState` descreve permissao, interacao e visibilidade dos Players dentro de uma sessao online.
* `PAUSED` e `IN_PROGRESS` so tem efeito quando `connectionState = ONLINE`.
* Quando `connectionState = OFFLINE`, o Mestre ainda pode acessar o VTT, mas Players nao podem conectar.

## 2. Snapshot de sessao

```ts
type CampaignSessionSnapshot = {
  campaignId: string
  connectionState: CampaignConnectionState
  runState: CampaignRunState | null
  startedByCharacterId: string | null
  startedByUserId: string | null
  startedAt: string | null
  updatedAt: string | null
}
```

Regras:
* Em `OFFLINE`, `runState` deve ser `null`.
* Ao iniciar sessao, `connectionState` passa para `ONLINE`.
* Ao iniciar sessao, o `runState` inicial deve ser `IN_PROGRESS`, salvo decisao futura explicita para iniciar pausada.
* `startedByCharacterId` aponta para o personagem `MASTER` que abriu a sessao.
* O MVP pode manter esse snapshot em memoria; persistencia historica de sessoes fica para evolucao futura.

## 3. Transicoes

### 3.1 Conectividade

```text
OFFLINE -> ONLINE   Iniciar Sessao
ONLINE  -> OFFLINE  Encerrar Sessao
```

### 3.2 Andamento dentro de sessao online

```text
IN_PROGRESS -> PAUSED       Pausar Sessao
PAUSED      -> IN_PROGRESS  Retomar Sessao
```

Transicoes invalidas:
* Pausar sessao offline.
* Retomar sessao offline.
* Player iniciar, encerrar, pausar ou retomar sessao.
* Tratar `PAUSED` como motivo para desconectar Players.

## 4. Significado dos botoes

### Iniciar Sessao
* Abre o WebSocket da campanha para Players.
* Define `connectionState = ONLINE`.
* Define `runState = IN_PROGRESS`.
* Permite que Players ativos se conectem ao VTT.
* Nao deve recarregar a lista de campanhas no cliente do Mestre.
* Nao deve resetar cena, grid, tokens, zoom, pan, ferramenta ativa, chat ou modais abertos do Mestre.
* Nao deve emitir snapshots para o proprio Mestre que substituam estado visual ja carregado na mesa.

### Encerrar Sessao
* Fecha a sessao realtime para Players.
* Define `connectionState = OFFLINE`.
* Define `runState = null`.
* Remove Players da sala realtime.
* Mantem o Mestre no VTT.

### Pausar Sessao
* Mantem `connectionState = ONLINE`.
* Define `runState = PAUSED`.
* Players continuam conectados, mas a mesa fica estatica para eles.
* Mestre continua com controle operacional da mesa.
* Nao deve alterar visualmente a mesa do Mestre.

### Retomar Sessao
* Mantem `connectionState = ONLINE`.
* Define `runState = IN_PROGRESS`.
* Players voltam a ter acesso normal conforme permissoes.
* Nao deve alterar visualmente a mesa do Mestre.

## 5. Permissoes por estado

| Acao | OFFLINE | ONLINE + PAUSED | ONLINE + IN_PROGRESS |
| --- | --- | --- | --- |
| Mestre abrir VTT | Sim | Sim | Sim |
| Player conectar ao VTT | Nao | Sim | Sim |
| Mestre preparar cena | Sim | Sim | Sim |
| Mestre trocar cena ativa | Sim | Sim | Sim |
| Player visualizar mesa | Nao | Sim, estatica | Sim |
| Player mover proprio token | Nao | Nao | Sim |
| Player medir | Nao | Nao | Sim |
| Player rolar dado visual | Nao | Nao | Sim |
| Mestre mover tokens | Sim | Sim | Conforme regra do VTT |
| Mestre alterar visibilidade/cena | Sim | Sim | Sim |

## 6. Eventos Socket.IO

Eventos aceitos do Mestre:
* `presence:session:start`
* `presence:session:end`
* `presence:session:pause`
* `presence:session:resume`

Payload de estado emitido pelo servidor:

```ts
type CampaignSessionStatePayload = {
  campaignId: string
  connectionState: CampaignConnectionState
  runState: CampaignRunState | null
}
```

Evento:
* `presence:session:state`

Regras:
* `presence:session:start` emite `ONLINE + IN_PROGRESS`.
* `presence:session:end` emite `OFFLINE + null` para usuarios relevantes e remove Players.
* `presence:session:pause` emite `ONLINE + PAUSED`.
* `presence:session:resume` emite `ONLINE + IN_PROGRESS`.
* Contratos legados podem manter `isOnline` e `sessionState` temporariamente, mas codigo novo deve preferir `connectionState` e `runState`.

## 7. API e apresentacao

Campanhas listadas para o usuario devem expor:

```ts
type CampaignListItemSession = {
  connectionState: CampaignConnectionState
  runState: CampaignRunState | null
  isOnline: boolean
}
```

Regras:
* `isOnline` e derivado: `connectionState === 'ONLINE'`.
* Badge `Online/Offline` deve refletir conectividade.
* Badge `Pausada/Em andamento` deve refletir andamento, somente quando online.
* Player so pode entrar quando `connectionState = ONLINE`.

## 8. Integracao com campaign_scene

Regras:
* Trocar cena ativa nao deve desligar WebSocket.
* Trocar cena ativa pode pausar a campanha se essa for a regra de produto do fluxo de cena.
* Retomar sessao nao altera `masterActiveSceneId`, `forcedSceneId` nem a cena visivel dos Players por si so.
* Cena, token e grid devem consultar `runState` para permissoes de interacao dos Players.

## 9. Criterios de aceitacao
* Mestre acessa o VTT com sessao offline.
* Player nao acessa o VTT quando `connectionState = OFFLINE`.
* `Iniciar Sessao` coloca WebSocket online e Players podem conectar.
* `Iniciar Sessao` nao causa reload, remontagem, recarregamento de campanha ou reset visual no VTT do Mestre.
* `Encerrar Sessao` coloca WebSocket offline e remove Players.
* `Pausar Sessao` mantem WebSocket online e bloqueia interacoes dos Players.
* `Pausar Sessao` nao muda visualmente a mesa do Mestre.
* `Retomar Sessao` mantem WebSocket online e libera interacoes normais dos Players.
* `Retomar Sessao` nao muda visualmente a mesa do Mestre.
* Codigo novo nao deve usar `PAUSED` como sinonimo de offline.
* Codigo novo nao deve decidir permissao de Player apenas por `isOnline` quando a regra depende de `PAUSED` versus `IN_PROGRESS`.
