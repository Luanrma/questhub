# Campaign Actor — Diretrizes técnicas

* Nunca adicionar `userId`, papel de campanha ou status ao `CampaignActor`.
* Consultar permissões por `CampaignMember`.
* Validar `campaignId` em todos os vínculos entre ator, membro, Token, ficha e inventário.
* Criar `Inventory` na mesma transação da criação do ator somente quando a
  extensão materializada oferecer a capacidade de inventário.
* Manter vínculos opcionais e reversíveis.
* Não interpretar JSON de ficha ou inventário no VTT Core.
* Não recriar modelos globais de personagem para facilitar um fluxo de interface.
* Materializações de criatura do catálogo criam ator, ficha resumida e Token sem
  inventário; cada duplicação cria um novo ator e nunca reutiliza o vínculo
  exclusivo de Token.
