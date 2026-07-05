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

## Regras de produto
* Encounter Mode acontece sobre a cena atual e nao substitui o VTT.
* O MVP nao persiste encontro no banco.
* O estado de encontro vive em memoria durante a sessao online.
* Encerrar a sessao limpa o encontro ativo.
* Trocar a cena ativa do Mestre limpa o encontro ativo no MVP.
* Apenas o Mestre pode escolher participantes, iniciar, editar iniciativa, avancar turno, voltar turno ou encerrar encontro.
* Jogadores podem apenas visualizar o tracker.
* Tokens ocultos nao podem ser adicionados ao encontro publico para evitar revelar informacao privada.
* Tokens da cena nao entram automaticamente no encontro; o Mestre deve pre-seleciona-los com `Shift` e envia-los para a caixa de Encounter Mode antes de iniciar.
* A pre-selecao para encontro nao move tokens no grid e nao altera a cena.
* Iniciativa e manual no MVP.
* Regras como modificadores de iniciativa, desempate, surpresa, acoes, reacoes, PV e condicoes pertencem a `game_systems` ou a futuras evolucoes.

## Relacoes com outros modulos
* `vtt`: renderiza o painel de Encounter Mode, a caixa de participantes e destaca o token ativo na mesa.
* `campaign_scene`: fornece os tokens da cena atual.
* `campaign_presence`: fornece sessao online, autenticacao de socket, papel do usuario e estado vivo.
* `game_systems`: futuro responsavel por formulas, modificadores e regras mecanicas.
* `chat`: ocupa area secundaria recolhivel no painel direito e pode futuramente publicar mensagens de inicio/fim de encontro ou rolagens de iniciativa.

## Fora de escopo no MVP
* Persistencia de encontros.
* Criacao de encontro offline.
* Rolagem automatica de iniciativa.
* Calculo de modificadores por ruleset.
* PV, CA, condicoes, efeitos, acoes ou economia de turno.
* Tokens ocultos em iniciativa publica.
* Encontro com participantes que nao estejam como tokens na cena atual.
