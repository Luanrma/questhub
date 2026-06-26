# Modulo: Chat em Tempo Real

## 1. Proposito
Fornecer comunicacao textual em tempo real dentro de uma campanha ativa.

O chat fica visivel no painel lateral da mesa e permite que mestre e jogadores ativos conversem durante a sessao sem sair do VTT.

## 2. Personas
* Mestre: acompanha mensagens da mesa e envia avisos durante a sessao.
* Jogador: envia mensagens usando o personagem ativo na campanha.

## 3. Escopo Inicial
Incluido:
* Chat por campanha.
* Mensagens persistidas no banco.
* Carregamento das mensagens mais recentes ao abrir a mesa.
* Envio realtime por Socket.IO.
* Exibicao no painel lateral direito da mesa.
* Autorizacao baseada em `CampaignCharacter` ativo.
* Rolagem rapida de dados pelo controle "Dados" da mesa.

Fora de escopo:
* Mensagens privadas.
* Anexos.
* Markdown rico.
* Moderacao, apagar ou editar mensagens.
* Indicador de digitacao.

## 4. Regras de Produto
* Apenas participantes com `CampaignCharacter.status = ACTIVE` podem ler e enviar mensagens.
* NPC nao envia mensagem no MVP.
* O nome exibido vem do `Character.name` vinculado.
* A mensagem pertence a uma campanha e a um personagem.
* Mensagem vazia nao pode ser enviada.
* Mensagem tem limite de 500 caracteres.
* O historico inicial exibe as ultimas 50 mensagens.
* Mensagens novas aparecem imediatamente para usuarios conectados na sala da campanha.
* Jogadores so entram na sala realtime quando a sessao esta online; mestre entra ao iniciar a sessao.
* O controle "Dados" exibe as opcoes `D4`, `D6`, `D8`, `D10`, `D12` e `D20`.
* O dado selecionado aparece em um botao proprio ao lado esquerdo do menu "Dados".
* O dado selecionado inicia como `D20`.
* Ao clicar no botao do dado selecionado, o cliente calcula um valor entre 1 e o numero de faces.
* A rolagem e publicada no chat como mensagem comum do personagem ativo.
* A rolagem tambem dispara uma animacao 3D local sobre a mesa VTT.

## 5. Relacao com Outros Modulos
* `campaigns`: define campanha e participacao por `CampaignCharacter`.
* `campaign-presence`: compartilha a sala realtime `campaign:{campaignId}`.
* `characters`: fornece personagem ativo e nome publico.
* `vtt`: consome o chat como parte da experiencia de mesa.
