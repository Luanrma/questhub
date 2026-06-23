# Modulo: Campaign Presence (Specs & Contracts)

## 1. Eventos
* `presence:enter`: cliente informa `campaignId` e `characterId`.
* `presence:update`: servidor informa entrada/saida de personagem.
* `campaign:status`: servidor informa alteracao de online/offline da campanha.
* `campaign:kicked`: jogador e removido quando o mestre sai.

## 2. Integracao com VTT
* `CampaignLayout` emite `presence:enter` apos resolver o personagem atual.
* A mesa usa `campaign.isOnline` como estado visual.
* Paineis do VTT podem consumir `presence:update` para badges online/offline.

## 3. Criterios de Aceitacao
* Mestre ativo marca campanha online.
* Jogador e bloqueado se a campanha estiver offline.
* Saida do mestre notifica jogadores.
* Presenca nao deve criar ou remover vinculos de campanha.
