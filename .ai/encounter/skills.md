# Modulo: Encounter Mode (Skills & Tech)

## Stack
* React para painel de Encounter Mode no VTT.
* Socket.IO para sincronizacao realtime do tracker.
* TypeScript com contratos explicitos.
* Zod no backend para validar payloads externos.
* Estado em memoria no modulo `campaign_presence` durante o MVP.

## Padroes
* Table-mounted Encounter: o tracker aparece sobre a mesa persistente, sem rota dedicada e sem desmontar o VTT.
* Master-owned Encounter Control: apenas o Mestre controla o estado do encontro.
* Explicit Participant Selection: participantes entram no encontro somente quando o Mestre pre-seleciona tokens com `Shift` e os envia para a caixa de Encounter Mode.
* Realtime Encounter Broadcast: mudancas de encontro sao emitidas para a room da campanha.
* Manual Initiative MVP: iniciativa e editada manualmente pelo Mestre.
* Ruleset Boundary: formulas e automacoes mecanicas ficam fora do contrato base.
* Ephemeral Encounter State: encontro ativo e estado de sessao, descartado ao encerrar a campanha online.

## Restricoes
* Nao adicionar campos especificos de sistema ao participante de encontro.
* Nao persistir encontro no banco neste MVP.
* Nao permitir que jogadores alterem ordem, iniciativa ou turno.
* Nao incluir tokens ocultos no tracker publico.
* Movimento e Spell Casting podem consultar/debitar o contador generico `actionsRemaining`; regras especificas de sistema continuam fora do contrato base.
* Nao mover tokens no grid durante o arraste de pre-selecao para Encounter Mode.
* Nao criar tela ou rota separada para encontro.
* Nao acoplar o tracker a `game_systems/pathfinder_2e` ou `game_systems/dnd_5e`.

## Cuidados de seguranca
* Todo evento de comando deve validar autenticacao e campanha atual do socket.
* Apenas Mestre ativo da sessao pode emitir comandos aceitos.
* Payloads devem ser validados com Zod.
* Estado emitido para jogadores nao deve revelar tokens ocultos.

## Limitacoes conhecidas
* Sem persistencia, recarregar servidor ou encerrar sessao perde o encontro ativo.
* Sem rolagem automatica, o Mestre precisa digitar iniciativas.
* O controle mecanico atual cobre movimento e a fatia minima de conjuracao (1/2/3 acoes). Reacoes, free actions, quickened/slowed/stunned e sustain ainda nao existem.
