# Arquitetura

## Limites principais

* `Campaign` é o mundo da campanha e a fronteira máxima de isolamento dos dados.
* `CampaignMember` representa a participação de um `User` na campanha, incluindo papel, status e personagem principal opcional.
* `CampaignActor` representa qualquer entidade existente dentro da campanha: personagem de jogador, NPC, criatura, familiar, montaria ou entidade equivalente.
* `CampaignToken` representa somente a presença visual e operacional no VTT e pode existir sem `CampaignActor` vinculado.
* `CampaignCharacterSheet` guarda a ficha mecânica de um `CampaignActor`; seu JSON é interpretado exclusivamente pelo `game_system` da campanha.
* `Inventory` é o agregado genérico de armazenamento de um `CampaignActor`; regras de itens pertencem ao `game_system`.
* `campaign_scene`, `chat`, `campaign_presence`, `campaign_session`, `campaign_diary` e `assets` são capacidades operacionais do VTT.

## Regras

* Não existem as entidades globais `Character`, `CharacterSheet` ou `CampaignCharacter`.
* `CampaignActor` nunca possui `userId`, papel de membro ou status de participação.
* Usuário, papel e status pertencem somente a `CampaignMember`.
* Nada pertencente a um ator, ficha, inventário, Token ou cena pode atravessar a fronteira da campanha.
* Criar, mover, ocultar ou remover Tokens não exige ficha, inventário ou sistema de jogo.
* O vínculo entre `CampaignToken` e `CampaignActor` é opcional e não determina a existência de nenhuma das duas entidades.
* O VTT não interpreta atributos, PV, CA, magias, itens, moedas ou efeitos específicos de sistema.
* `apps/api/src/server.ts` compõe exclusivamente o VTT; sistemas de jogo são ativados por um bootstrap externo e registradores próprios.
* Cada `game_system` é isolado dos demais e não pode importar regras de outro sistema.
* Backend valida autenticação, pertencimento à campanha e permissões; frontend não é fronteira de segurança.
