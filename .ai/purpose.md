# QuestHub

QuestHub e um VTT independente de regras para campanhas de RPG de mesa.

O nucleo cobre campanhas, participantes, cenas, tokens genericos, assets, chat, dados, diario, sessao e presenca. Ele nao cria nem persiste fichas, bestiarios, inventarios, economia, PV, magias, hazards mecanicos ou regras de ruleset.

`CampaignActor` e uma identidade narrativa e operacional opcional para controle de jogador. `Campaign` organiza a mesa sem exigir um sistema. Tokens podem existir sem `CampaignActor`, ficha, bestiario ou sistema de jogo, para permitir preparo e testes do VTT puro. Integracoes mecanicas futuras devem ser opcionais e externas ao contrato base.
