# Modulo: Campaign Session

## 1. O que e
`campaign_session` define o estado de uma campanha quando o Mestre esta usando o VTT e decide abrir ou fechar a conexao realtime para Players.

Este modulo separa dois conceitos:

* Estado do WebSocket da sessao: se a mesa esta `ONLINE` ou `OFFLINE`.
* Estado da campanha dentro de uma sessao online: se esta `PAUSED` ou `IN_PROGRESS`.

## 2. Por que existe
O botao `Iniciar Sessao` nao significa "comecar a aventura" em termos narrativos ou mecanicos. Ele significa abrir a sessao realtime: o WebSocket fica online e Players autorizados podem se conectar.

O botao `Encerrar Sessao` fecha essa conexao realtime. O Mestre pode continuar acessando o VTT, preparando cenas e organizando a mesa, mas Players nao conseguem conectar enquanto a sessao estiver offline.

Os botoes `Pausar Sessao` e `Retomar Sessao` so existem quando a sessao esta online. Eles controlam permissao, interacao e visibilidade dos Players dentro da sessao aberta.

## 3. Personas
* Mestre: acessa o VTT mesmo com a sessao offline, inicia/encerra WebSocket e controla pausa/andamento.
* Player: so acessa a mesa quando a sessao esta online.
* Sistema: valida conexao, permissao e visibilidade conforme os dois estados.

## 4. Estados do WebSocket
* `OFFLINE`: Mestre pode acessar o VTT, mas o WebSocket da campanha esta fechado para Players.
* `ONLINE`: WebSocket da campanha esta aberto e preparado para Players se conectarem.

## 5. Estados da campanha dentro de sessao online
* `PAUSED`: sessao online, Players conectados veem estado estatico e nao podem interagir com a mesa.
* `IN_PROGRESS`: sessao online, Players conectados tem acesso normal conforme suas permissoes.

## 6. Regras de negocio
* Apenas `CampaignCharacter` com `role = MASTER` e `status = ACTIVE` pode iniciar ou encerrar a sessao WebSocket.
* Apenas `CampaignCharacter` com `role = MASTER` e `status = ACTIVE` pode pausar ou retomar a campanha dentro de uma sessao online.
* `PAUSED` nunca significa WebSocket offline.
* `IN_PROGRESS` so existe quando a sessao esta online.
* Para o Mestre, nao deve existir alteracao visual da mesa entre `OFFLINE`, `ONLINE + PAUSED` e `ONLINE + IN_PROGRESS`.
* Iniciar sessao nao deve recarregar, remontar, recentralizar ou limpar a mesa do Mestre.
* Pausar ou retomar sessao nao deve alterar visualmente a mesa do Mestre; muda apenas permissoes e visibilidade dos Players.
* Quando a sessao esta offline, Players nao podem conectar ao VTT.
* Quando a sessao esta online e pausada, Players podem permanecer conectados, mas a mesa fica estatica para eles.
* Encerrar sessao desconecta Players e coloca a campanha fora de acesso realtime para Players.
* Encerrar sessao nao remove personagens, cenas persistidas, tokens persistidos, diarios ou mensagens de chat.

## 7. Relacao com outros modulos
* `campaign_presence` consome o estado online/offline para aceitar ou recusar conexao realtime de Players.
* `campaign_scene` consome pausa/andamento para decidir visibilidade, troca de cena e permissao de movimento.
* `vtt` consome ambos os estados para habilitar ou bloquear ferramentas.
* `chat` deve seguir a decisao de produto definida para sessao pausada: por padrao, pode continuar disponivel se o Player estiver conectado, salvo regra futura em contrario.
