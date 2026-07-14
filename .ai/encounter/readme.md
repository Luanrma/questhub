# Modulo: Encounter Mode

## O que e por que
`encounter` modela o Encounter Mode generico sobre a mesa VTT. Ele permite que o Mestre inicie um encontro a partir de tokens escolhidos explicitamente na cena atual, defina iniciativa manualmente e avance turnos sem desmontar a mesa.

O objetivo do MVP e dar estrutura operacional de rodadas e turnos para encontros, hazards e outros eventos situacionais, sem implementar regras mecanicas de sistemas como Pathfinder 2e ou D&D 5e.

## Personas e casos de uso
* Mestre seleciona tokens da cena atual para participar do encontro.
* Mestre inicia um encontro simples com os tokens selecionados.
* Mestre ajusta iniciativas manualmente.
* Mestre avanca ou volta o turno.
* Mestre encerra o encontro.
* Jogadores visualizam a ordem de turno e o participante ativo.
* Mestre e Jogadores acompanham o log de batalha (dano, cura e rolagens de dado) enquanto o encontro esta ativo.
* Mestre adiciona um token ou instancia de Hazard a um encontro ja em andamento.
* Mestre remove um participante de um encontro ativo sem remover o token da cena.
* Mestre rola iniciativa de um participante com um clique, em vez de digitar o valor manualmente.

## Regras de produto
* Encounter Mode acontece sobre a cena atual e nao substitui o VTT.
* O MVP nao persiste encontro no banco.
* O estado de encontro vive em memoria durante a sessao online.
* Encerrar a sessao limpa o encontro ativo.
* Trocar a cena ativa do Mestre limpa o encontro ativo no MVP.
* Apenas o Mestre pode escolher participantes, iniciar, editar iniciativa, avancar turno, voltar turno ou encerrar encontro.
* Jogadores podem apenas visualizar o tracker.
* Tokens ocultos nao podem ser adicionados ao encontro publico para evitar revelar informacao privada.
* Tokens da cena nao entram automaticamente no encontro; o Mestre deve pre-seleciona-los com `Shift` e envia-los para a caixa de Encounter Mode antes de iniciar (ou enviar diretamente, se o encontro ja estiver em andamento — ver regra de entrada abaixo).
* Um token ou instancia de Hazard pode entrar num encontro ja em andamento (`join`) e pode ser removido de um encontro ativo sem afetar a cena (`remove-participant`); nenhuma das duas acoes reinicia rodada, turno ou log.
* Iniciativa pode ser preenchida manualmente ou rolada (`1d20`) por um icone de dado ao lado do campo; a rolagem nao substitui a edicao manual, que continua sempre disponivel.
* A pre-selecao para encontro nao move tokens no grid e nao altera a cena.
* Iniciativa e preenchida pelo Mestre, manualmente ou rolando `1d20` pelo icone de dado; nao ha calculo automatico de modificador.
* Regras como modificadores de iniciativa, desempate, surpresa, reacoes, quickened/slowed/stunned, PV e condicoes pertencem a `game_systems` ou a futuras evolucoes. O contador generico de acoes (`actionsRemaining`) ja e usado por movimento e pela fatia minima de `spell_casting`.
* O encontro mantem um log de batalha efemero (dano, cura, rolagem de dado e eventos de sistema como disparo de Hazard) enquanto estiver ativo; o log e limpo junto com o encontro ao encerrar, sem persistencia em banco.
* O log de batalha respeita a mesma mascara de visibilidade de PV usada no tracker: Jogador nunca ve o numero exato de dano/cura aplicado a um NPC.

## Relacoes com outros modulos
* `vtt`: renderiza o painel de Encounter Mode, a caixa de participantes e destaca o token ativo na mesa.
* `campaign_scene`: fornece os tokens da cena atual.
* `campaign_presence`: fornece sessao online, autenticacao de socket, papel do usuario e estado vivo.
* `game_systems`: futuro responsavel por formulas, modificadores e regras mecanicas.
* `chat`: ocupa area secundaria recolhivel no painel direito; rolagens de dado feitas com um encontro ativo na cena do personagem tambem alimentam o log de batalha do encontro, alem da mensagem normal do chat.
* `combat`: alimenta o log de batalha com eventos de dano/cura aplicados a tokens da cena enquanto o encontro esta ativo (`.ai/combat/specs.md` secao 8).

## Fora de escopo no MVP
* Persistencia de encontros.
* Criacao de encontro offline.
* Rolagem automatica de iniciativa.
* Calculo de modificadores por ruleset.
* PV, CA, condicoes, efeitos ou action economy avancada.
* Tokens ocultos em iniciativa publica.
* Encontro com participantes que nao estejam como tokens na cena atual.
* Persistencia do log de batalha (o log e apagado ao encerrar o encontro).
* Ataques de token (ver "Relacoes com evolucoes futuras").

## Relacoes com evolucoes futuras
* `combat` (`.ai/combat/`): adiciona vida (PV) persistente por token/ficha, com o participante `creature` carregando um snapshot de `health`.
* `encounter_movement` (`.ai/encounter_movement/`): adiciona limite de movimento por turno, usando o `activeTurnIndex` deste modulo para travar quem pode mover o token durante um encontro ativo.
* `spell_casting` (`.ai/spell_casting/`): debita `actionsRemaining` de magias PF2e com tempo simples (1/2/3 acoes) quando conjuradas pelo token ativo.
* Ataques de token: decisao registrada com o usuario em 2026-07-08 de adiar a implementacao. Um ataque precisa de dados de arma/equipamento que a ficha ainda nao tem (nao existe bloco de armas, itens equipados ou magias em `Pathfinder2eSheet` hoje — ver `.ai/game_systems/pathfinder_2e/character_sheet/specs.md`). O usuario mantem um todo list proprio para inventario/equipamento e, futuramente, magias; nenhum contrato de ataque deve ser desenhado neste modulo antes desse pre-requisito existir.
