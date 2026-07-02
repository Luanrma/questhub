# Modulo: Combat (Skills & Tech)

## Stack
* React para painel de combate no VTT.
* Socket.IO para sincronizacao realtime do tracker.
* TypeScript com contratos explicitos.
* Zod no backend para validar payloads externos.
* Estado em memoria no modulo `campaign_presence` durante o MVP.

## Padroes
* Table-mounted Combat: o tracker aparece sobre a mesa persistente, sem rota dedicada e sem desmontar o VTT.
* Master-owned Combat Control: apenas o Mestre controla o estado do combate.
* Realtime Combat Broadcast: mudancas de combate sao emitidas para a room da campanha.
* Manual Initiative MVP: iniciativa e editada manualmente pelo Mestre.
* Ruleset Boundary: formulas e automacoes mecanicas ficam fora do contrato base.
* Ephemeral Encounter State: combate ativo e estado de sessao, descartado ao encerrar a campanha online.

## Restricoes
* Nao adicionar campos especificos de sistema ao participante de combate.
* Nao persistir combate no banco neste MVP.
* Nao permitir que jogadores alterem ordem, iniciativa ou turno.
* Nao incluir tokens ocultos automaticamente no tracker publico.
* Nao bloquear movimento de token por turno no MVP.
* Nao criar tela ou rota separada para combate.
* Nao acoplar o tracker a `game_systems/pathfinder_2e` ou `game_systems/dnd_5e`.

## Cuidados de seguranca
* Todo evento de comando deve validar autenticacao e campanha atual do socket.
* Apenas Mestre ativo da sessao pode emitir comandos aceitos.
* Payloads devem ser validados com Zod.
* Estado emitido para jogadores nao deve revelar tokens ocultos.

## Limitacoes conhecidas
* Sem persistencia, recarregar servidor ou encerrar sessao perde o combate ativo.
* Sem rolagem automatica, o Mestre precisa digitar iniciativas.
* Sem controle de turno mecanico, o sistema informa o turno mas nao impede acoes fora dele.
