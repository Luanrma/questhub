# Objetivo do Sistema

## 1. Proposito
QuestHub existe para organizar campanhas de RPG online, conectando usuarios, personagens e campanhas em uma experiencia de VTT modular.

O produto prioriza a relacao personagem-campanha: usuarios possuem personagens, personagens entram em campanhas, e papeis operacionais como mestre, jogador e NPC pertencem ao vinculo `CampaignCharacter`.

## 2. Atores
* Usuario autenticado: acessa a home, gerencia campanhas e personagens.
* Jogador: cria personagens, entra em campanhas por convite e participa quando o mestre esta online.
* Mestre: cria campanhas, define sistema, escolhe/cria personagem mestre, controla politica de entrada e aprova/recusa jogadores.

## 3. Fluxos Principais
* Cadastro/login: cria sessao autenticada e direciona para `/home`.
* Navegacao inicial: usuario escolhe entre campanhas e personagens.
* Personagens: usuario cria, lista e edita identidade basica de personagens.
* Criacao de campanha: usuario define dados da campanha e vincula um personagem `MASTER`.
* Entrada em campanha: jogador usa invite code e cria ou usa personagem compativel conforme suporte da interface/API.
* Presenca: campanha fica online quando o mestre entra; jogadores sao bloqueados quando o mestre esta offline.
* Gestao de jogadores: mestre aprova ou recusa solicitacoes pendentes de campanhas privadas.

## 4. Sistemas de Jogo
O MVP reconhece:
* `DND_5E`
* `PATHFINDER_2E`

No estado atual, esses sistemas funcionam como identificadores de compatibilidade. Regras mecanicas completas pertencem aos modulos `dnd_5e_sheet` e `pathfinder_2e_sheet`.

## 5. Visao de Produto
O QuestHub deve crescer como uma plataforma modular:
* identidade e acesso primeiro;
* campanhas e personagens como nucleo operacional;
* ficha mecanica validada por sistema;
* presenca realtime e recursos de mesa;
* inventario, trade, sessoes, diario e canvas como contextos separados.

Cada novo contexto precisa de documentacao propria em `.ai/` para manter o desenvolvimento guiado por especificacao.
