# Campaign Session Skills & Tech

## 1. Stack
* Socket.IO para abrir, fechar e propagar o estado realtime da sessao.
* Fastify para rotas HTTP quando consultas de estado forem necessarias.
* Zod para validar payloads de eventos.
* React Context no frontend para expor estado de sessao ao layout da campanha e ao VTT.

## 2. Padroes
* State Machine com dois eixos:
  * conectividade: `ONLINE` ou `OFFLINE`;
  * andamento da campanha: `PAUSED` ou `IN_PROGRESS`.
* Guard Clauses para autorizacao e validacao de transicoes.
* Presenter para expor estado de forma simples ao frontend.
* Services/casos de uso para regras; socket handlers nao devem concentrar regra complexa.

## 3. Fronteiras tecnicas
* `campaign_session` nao armazena presenca individual de usuarios. Isso pertence a `campaign_presence`.
* `campaign_session` nao armazena tokens, grid ou cena. Isso pertence a `campaign_scene`.
* `campaign_session` nao contem regras de Pathfinder 2e, D&D 5e ou qualquer sistema de RPG.
* `PAUSED` nao pode ser usado como sinonimo de offline.
* `isOnline` deve representar somente conectividade realtime, nao permissao de interacao.

## 4. Integracao esperada
* Eventos `presence:session:start` e `presence:session:end` controlam conectividade `ONLINE`/`OFFLINE`.
* Eventos `presence:session:pause` e `presence:session:resume` controlam andamento `PAUSED`/`IN_PROGRESS`.
* Eventos de presenca usam conectividade para aceitar ou recusar Player.
* Eventos de VTT usam andamento para permitir ou bloquear interacoes.
* O frontend deve exibir ambos os conceitos quando necessario: websocket online/offline e campanha pausada/em andamento.
