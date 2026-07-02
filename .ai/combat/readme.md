# Modulo: Combat

## O que e por que
`combat` modela um rastreador simples de encontro sobre a mesa VTT. Ele permite que o Mestre inicie um combate a partir dos tokens visiveis da cena atual, defina iniciativa manualmente e avance turnos sem desmontar a mesa.

O objetivo do MVP e dar estrutura operacional de rodadas e turnos, sem implementar regras mecanicas de sistemas como Pathfinder 2e ou D&D 5e.

## Personas e casos de uso
* Mestre inicia um combate simples com os tokens nao ocultos da cena atual.
* Mestre ajusta iniciativas manualmente.
* Mestre avanca ou volta o turno.
* Mestre encerra o combate.
* Jogadores visualizam a ordem de turno e o participante ativo.

## Regras de produto
* Combate acontece sobre a cena atual e nao substitui o VTT.
* O MVP nao persiste combate no banco.
* O estado de combate vive em memoria durante a sessao online.
* Encerrar a sessao limpa o combate ativo.
* Trocar a cena ativa do Mestre limpa o combate ativo no MVP.
* Apenas o Mestre pode iniciar, editar iniciativa, avancar turno, voltar turno ou encerrar combate.
* Jogadores podem apenas visualizar o tracker.
* Tokens ocultos nao entram automaticamente no combate para evitar revelar informacao privada.
* Iniciativa e manual no MVP.
* Regras como modificadores de iniciativa, desempate, surpresa, acoes, reacoes, PV e condicoes pertencem a `game_systems` ou a futuras evolucoes.

## Relacoes com outros modulos
* `vtt`: renderiza o painel de combate e destaca o token ativo na mesa.
* `campaign_scene`: fornece os tokens da cena atual.
* `campaign_presence`: fornece sessao online, autenticacao de socket, papel do usuario e estado vivo.
* `game_systems`: futuro responsavel por formulas, modificadores e regras mecanicas.
* `chat`: futuro responsavel por publicar mensagens de inicio/fim de combate ou rolagens de iniciativa, se necessario.

## Fora de escopo no MVP
* Persistencia de encontros.
* Criacao de encontro offline.
* Rolagem automatica de iniciativa.
* Calculo de modificadores por ruleset.
* PV, CA, condicoes, efeitos, acoes ou economia de turno.
* Tokens ocultos em iniciativa publica.
* Combate com participantes que nao estejam como tokens na cena atual.
