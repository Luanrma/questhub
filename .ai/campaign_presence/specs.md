# Modulo: Campaign Presence (Specs & Contracts)

## 1. Eventos
* `presence:session:start`: mestre informa `campaignId` e `characterId`; servidor valida papel `MASTER`, marca campanha online e coloca o mestre na sala.
* `presence:session:end`: mestre informa `campaignId`; servidor valida que ele controla a sessao online, marca campanha offline e remove jogadores.
* `presence:enter`: jogador informa `campaignId` e `characterId`; servidor valida acesso e so aceita se a campanha estiver online.
* `presence:update`: servidor informa entrada/saida de personagem.
* `campaign:status`: servidor informa alteracao de online/offline da campanha.
* `campaign:kicked`: jogador e removido quando o mestre encerra a sessao.

## 2. Integracao com VTT
* `CampaignLayout` resolve o personagem atual ao abrir a campanha.
* Para mestre, o botao superior mostra `Iniciar Sessao` quando offline e `Encerrar Sessao` quando online.
* Para jogador, `CampaignLayout` emite `presence:enter` ao abrir uma campanha online.
* O jogador so e registrado como presente quando abre uma campanha online com `CampaignCharacter` `ACTIVE` e role `PLAYER`.
* Um usuario so pode registrar presenca com um unico personagem `PLAYER` ativo por campanha.
* Se dados legados tiverem mais de um `PLAYER ACTIVE` para o mesmo usuario e campanha, a conexao realtime deve usar explicitamente o personagem escolhido no card da campanha e nao trocar silenciosamente para outro.
* A mesa usa `campaign.isOnline` como estado visual.
* Paineis do VTT podem consumir `presence:update` para badges online/offline.
* O gateway de campanha pode compor handlers de presenca e handlers VTT legados na mesma conexao Socket.IO, mas a regra de presenca deve permanecer isolada dos contratos de cena/grid/token.
* Enquanto eventos `vtt:*` legados existirem, o handler de presenca continua responsavel apenas por autenticar a entrada na sala, emitir estado de sessao e preparar snapshots iniciais delegados ao fluxo VTT/cena.

## 3. Criterios de Aceitacao
* Mestre abrir a tela da campanha nao torna a campanha online.
* Clicar em `Iniciar Sessao` torna a campanha online e inicia a conexao em tempo real da mesa.
* Clicar em `Encerrar Sessao` pede confirmacao.
* Clicar em `Trocar campanha` com sessao online tambem pede confirmacao e executa o mesmo encerramento da sessao.
* Confirmacao positiva em `Encerrar Sessao` encerra a sessao, marca a campanha offline, desconecta a presenca dos jogadores e mantem o mestre na campanha.
* Confirmacao positiva em `Trocar campanha` encerra a sessao, marca a campanha offline, desconecta a presenca dos jogadores e envia o mestre para a lista de campanhas.
* O botao `Encerrar Sessao` deve usar destaque visual vermelho.
* Jogadores presentes sao direcionados para a tela inicial e recebem popup informando que o mestre encerrou a sessao.
* Jogador e bloqueado se a campanha estiver offline.
* Presenca nao deve criar ou remover vinculos de campanha.
