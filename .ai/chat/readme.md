# Chat em tempo real

O chat pertence à campanha. Cada mensagem registra `campaignId`, `userId`, conteúdo e data; `actorId` é opcional apenas para futuras mensagens emitidas a partir de um contexto explícito de Token.

## Regras

* Leitura e escrita exigem `CampaignMember` ativo.
* O chat geral identifica o autor pelo `CampaignMember`.
* O Mestre é exibido como Mestre e o jogador por sua conta.
* Não existe seletor de ator ativo ou “falando como” no chat geral.
* O chat não interpreta ficha, inventário ou sistema de jogo.
