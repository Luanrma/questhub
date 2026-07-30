# Modulo: Combat / Encounter Mode

## O que e por que
`combat` modela o Encounter Mode generico e opcional sobre a mesa VTT. Ele permite que o Mestre inicie um encontro a partir de tokens escolhidos explicitamente na cena atual, altere participantes durante o encontro, use iniciativa instantanea ajustavel e avance turnos sem desmontar a mesa.

O objetivo do MVP e dar uma ordenacao operacional de turnos para qualquer situacao de mesa, sem implementar regras mecanicas de sistemas. Este modulo nao e pre-requisito para criar, testar ou mover tokens no VTT core.

## Personas e casos de uso
* Mestre seleciona tokens da cena atual para participar do encontro.
* Mestre inicia um encontro simples com os tokens selecionados.
* Mestre adiciona ou remove Tokens enquanto o encontro esta ativo.
* Mestre informa ajustes manuais que sao somados ao total atual de iniciativa.
* Mestre avanca ou volta o turno.
* Mestre encerra o encontro.
* Jogadores visualizam a ordem de turno em cards suspensos sobre a mesa, com o participante ativo centralizado, folga segura em relação ao topo da viewport e os participantes mais distantes desaparecendo em uma progressão suave.
* Mestre e controlador do Token ativo visualizam, na aba de Encontro da sidebar, o retrato e somente as ações que o game system marcou para o contexto de encontro.
* Usuários autorizados acessam a ficha vinculada ao Token ativo pelo resolvedor agnóstico já oferecido pelo VTT.

## Regras de produto
* Encounter Mode acontece sobre a cena atual e nao substitui o VTT.
* O MVP nao persiste encontro no banco.
* O estado de encontro vive em memoria durante a sessao online.
* Encerrar a sessao limpa o encontro ativo.
* Trocar a cena ativa do Mestre limpa o encontro ativo no MVP.
* Apenas o Mestre pode escolher participantes, iniciar, editar iniciativa, avancar turno, voltar turno ou encerrar encontro.
* Jogadores podem apenas visualizar e, no proprio turno, mover por trajeto medido o Token ativo que controlam.
* Tokens ocultos nao podem ser adicionados ao encontro publico para evitar revelar informacao privada.
* Tokens da cena nao entram automaticamente no encontro; o Mestre deve pre-seleciona-los com `Shift` e envia-los para a caixa de Encounter Mode antes de iniciar.
* A pre-selecao para encontro nao move tokens no grid e nao altera a cena.
* Ao iniciar o encontro, o servidor rola instantaneamente `1d20` para cada Token participante.
* Token adicionado durante o encontro tambem recebe uma rolagem instantanea de `1d20`.
* O tracker preserva somente o total atual de iniciativa; o valor isolado do d20 nao precisa permanecer depois de um ajuste.
* O Mestre pode informar um ajuste manual, positivo ou negativo, que e somado ao total atual.
* O tracker exibe rodada e contagem total de turnos decorridos no encontro.
* Durante um encontro ativo, o PLAYER nao pode arrastar Tokens diretamente. Seu unico movimento e o trajeto iniciado no Token ativo com `Ctrl` + botao esquerdo e confirmado com `Espaco`.
* Regras como calculo automatico de modificadores por ruleset, desempate mecanico, surpresa, acoes, reacoes, PV e condicoes pertencem a extensoes opcionais, nunca ao contrato base do VTT.
* O Encounter pode renderizar apresentações genéricas de ações publicadas pelo game system, mas não interpreta seus grupos, detalhes ou interações.

## Relacoes com outros modulos
* `vtt`: renderiza a caixa de preparação, o carrossel suspenso no header, o painel genérico de ações na sidebar e destaca o token ativo na mesa.
* `campaign_scene`: fornece os tokens da cena atual.
* `campaign_presence`: fornece sessao online, autenticacao de socket, papel do usuario e estado vivo.
* `chat`: ocupa area secundaria recolhivel no painel direito e pode futuramente publicar mensagens de inicio/fim de encontro ou rolagens de iniciativa.
* Extensoes de ruleset: podem futuramente sugerir formulas ou automacoes, sem serem dependencia deste modulo.

## Fora de escopo no MVP
* Persistencia de encontros.
* Criacao de encontro offline.
* Animacao visual da rolagem de iniciativa.
* Calculo automatico de bonus ou modificadores por ruleset.
* PV, CA, condicoes, efeitos ou economia de turno definidos pelo Encounter.
* Execução mecânica de ações publicadas pelo game system.
* Tokens ocultos em iniciativa publica.
* Encontro com participantes que nao estejam como tokens na cena atual.
