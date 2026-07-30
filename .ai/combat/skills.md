# Modulo: Combat / Encounter Mode (Skills & Tech)

## Stack
* React para painel de Encounter Mode no VTT.
* Socket.IO para sincronizacao realtime do tracker.
* TypeScript com contratos explicitos.
* Zod no backend para validar payloads externos.
* Estado em memoria no modulo `campaign_presence` durante o MVP.

## Padroes
* Table-mounted Encounter: o tracker aparece sobre a mesa persistente, sem rota dedicada e sem desmontar o VTT.
* Master-owned Encounter Control: apenas o Mestre controla o estado do encontro.
* Explicit Participant Selection: participantes iniciais vem da caixa de Encounter Mode; durante encontro ativo, o Mestre adiciona ou remove Tokens explicitamente pelo menu contextual ou tracker.
* Realtime Encounter Broadcast: mudancas de encontro sao emitidas para a room da campanha.
* Server-rolled Initiative: o servidor gera um `1d20` instantaneo por participante e preserva somente o total, que pode receber ajustes manuais do Mestre.
* Live Participant Management: o Mestre pode adicionar e remover participantes durante o encontro sem reiniciar o tracker.
* Ruleset Boundary: formulas e automacoes mecanicas ficam fora do contrato base.
* Ephemeral Encounter State: encontro ativo e estado de sessao, descartado ao encerrar a campanha online.
* Token-only Participants: participantes referenciam tokens, nao fichas, criaturas de bestiario ou entidades mecanicas.
* Active-turn Carousel: o estado realtime continua linear; somente a projeção visual reorganiza no máximo dez participantes ao redor do turno ativo, em cards suspensos, com fade progressivo não linear nas extremidades e sem viewport que os recorte.
* Safe Carousel Geometry: a janela visível deve considerar largura dos cards, assimetria do limite par, setas e margens laterais; quando não houver espaço, reduz a quantidade de cards antes de permitir sobreposição com outros controles do VTT.
* Edge-bound Navigation: as setas de turno são posicionadas a partir dos offsets realmente visíveis, permanecendo próximas ao primeiro e ao último card renderizados.
* Generic Action Projection: a aba de Encontro consome somente `TokenPresentation.actions` que incluam o contexto neutro `ENCOUNTER`, sem interpretar labels, grupos ou sistemas concretos.
* Generic Sheet Access: o botão de ficha usa `resolveTokenCharacterSheet` e o evento compartilhado do workspace; o componente não conhece renderer, schema ou rota de game system.
* Readable Action Hierarchy: grupos, nomes e detalhes de ações usam escala tipográfica legível e cards com espaço para quebra de linha, sem depender de tooltip para compreender o conteúdo principal.

## Restricoes
* Nao adicionar campos especificos de sistema ao participante de encontro.
* O cliente nao envia o resultado inicial do d20; somente ajustes inteiros entre `-1000` e `1000`.
* O total de iniciativa deve permanecer entre `-10000` e `10000`.
* Adicao e remocao durante encontro devem preservar o Token ativo quando ele continuar participante.
* Nao persistir encontro no banco neste MVP.
* Nao permitir que jogadores alterem ordem, iniciativa ou turno.
* Nao incluir tokens ocultos no tracker publico.
* O backend bloqueia movimento de PLAYER fora do turno e rejeita arraste direto durante o encontro; o Mestre preserva controle operacional completo.
* O movimento medido do turno usa o contrato autoritativo do modulo `vtt` e e transmitido como timeline, nao como sequencia de frames.
* Nao mover tokens no grid durante o arraste de pre-selecao para Encounter Mode.
* Nao criar tela ou rota separada para combate.
* Nao acoplar o tracker a qualquer modulo de ruleset, ficha, bestiario, inventario ou economia.
* Nao exigir `actorId` para participante; token generico deve poder entrar no Encounter Mode.
* Nao nomear grupos mecânicos como perícias, magias, ataques ou saves no código do VTT; títulos e detalhes vêm do provider.
* Nao filtrar ações por `group`, `label`, prefixo de `id` ou qualquer vocabulário de ruleset; somente o contexto neutro publicado no contrato pode controlar sua presença no Encounter.
* Nao executar uma ação apenas porque ela foi apresentada. Execução futura exige um comando neutro, autorização e avaliação pelo game system.
* Não reduzir labels ou detalhes de ações abaixo de `12px`; o painel deve priorizar leitura sobre densidade.

## Cuidados de seguranca
* Todo evento de comando deve validar autenticacao e campanha atual do socket.
* Apenas Mestre ativo da sessao pode emitir comandos aceitos.
* Payloads devem ser validados com Zod.
* Estado emitido para jogadores nao deve revelar tokens ocultos.

## Limitacoes conhecidas
* Sem persistencia, recarregar servidor ou encerrar sessao perde o encontro ativo.
* Sem integracao com ruleset, o Mestre ainda precisa informar manualmente qualquer ajuste de iniciativa.
* Sem controle de turno mecanico, o sistema informa o turno mas nao impede acoes fora dele.
