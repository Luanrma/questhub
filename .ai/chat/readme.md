# Chat em tempo real

O chat pertence à campanha. Cada mensagem registra `campaignId`, `actorId`, `userId`, conteúdo e data.

## Regras

* Leitura e escrita exigem `CampaignMember` ativo.
* O usuário envia mensagens pelo seu ator principal ativo.
* O nome exibido vem de `CampaignActor.name`.
* O papel exibido vem de `CampaignMember.role` quando o ator é principal.
* O chat não interpreta ficha, inventário ou sistema de jogo.
