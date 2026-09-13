# Encounter Foundation — proposta de MVP

Status: **DRAFT**

Card: `QH-ENC-001` — https://trello.com/c/tw4LllTF
Domínio: VTT Core / condução da mesa
UX review required: **YES**
Base consultada: `d21f7c34e71fc366a321869e8fbf818a75ad5ca4` (PR #86 merged).

Recorte inicial confirmado pelo usuário em 2026-09-13, incluindo integração com
armas equipadas e magias da ficha. Os contratos seguem em refinamento; esta
proposta não substitui o comportamento vigente nem declara gates concluídos.

## Objetivo e orientação humana

Permitir que o Mestre acompanhe uma situação que envolva puzzle, combate,
incêndio, tempestade ou uma combinação deles, usando poucas ferramentas manuais.

Orientação humana: **priorizar MVP e liberdade de condução, evitando grandes
complexidades**. A proposta anterior foi reduzida com esse critério.

Próximo foco solicitado: **combate utilizável pelo Player**, com ataques de arma
ou magia, modificadores manuais e UX coerente. O fluxo está detalhado em
[Combate MVP — UX](combat-mvp-ux.md), sem condicionar essa entrega a um motor
completo de encontros, progressão ou conjuração.

Decisão inicial mantida: o encontro pertence à Campaign e continua quando o
Mestre troca de cena. Essa continuidade ainda não existe no produto atual.

## Proposta mínima

| Capacidade | Uso na mesa |
| --- | --- |
| Nome e notas do Mestre | Dar contexto e registrar objetivo, pistas, soluções e progresso manual. |
| Participantes opcionais | Incluir Tokens quando úteis; um puzzle ou tempestade pode existir sem eles. |
| Turnos opcionais | Mestre ativa a ordem existente quando precisar e desativa quando quiser voltar ao fluxo livre. |
| Histórico do encontro | Preservar os eventos mecânicos já suportados pelo Game Log. |
| Encerramento explícito | Mestre encerra o encontro; sair dos turnos, retirar o último participante ou trocar de cena não o encerra. |

O mesmo encontro pode incluir puzzle, inimigos e incêndio. Não precisa de um tipo
obrigatório nem de um workflow específico para cada situação. A proposta usa um
encontro corrente por Campaign, conforme o recorte atual, sem introduzir vários
encontros simultâneos.

No primeiro recorte, progresso cabe nas notas: por exemplo, `Runas 2/4` e
`Incêndio 1/3`. Contadores visuais podem reutilizar o trabalho de Resource
Trackers quando disponível; não bloqueiam esta fundação nem exigem um segundo
sistema de trackers.

## Exemplo de condução

Encontro: **Escapar do templo em chamas**.

1. Mestre começa sem turnos e registra o puzzle da porta nas notas.
2. O incêndio começa; ele anota a situação e conduz suas consequências.
3. Guardiões aparecem; ele adiciona os Tokens e ativa a ordem de turnos.
4. Os guardiões são vencidos; ele desativa os turnos e continua o puzzle/resgate.
5. O grupo muda de mapa; o encontro e seu histórico continuam.
6. Quando considerar a situação concluída, o Mestre encerra o encontro.

O incêndio não precisa virar NPC, Token ou entidade nova para este fluxo. Seu
estado e suas consequências são conduzidos pela mesa; o VTT não os simula.

## Direção de UX

- Um painel de Encontro com nome, notas, participantes e controle de turnos.
- Sem turnos, a interface não mostra iniciativa, rodada ou participante atual.
- Com turnos, aproveitar o carrossel já existente e os controles do Mestre.
- Ação de sair dos turnos deve ser distinta de encerrar o encontro.
- O Player vê apenas o contexto autorizado; notas do Mestre são privadas.
- Sem turnos, aplicar movimento normal autorizado. Com turnos, manter o
  comportamento de movimento atual neste primeiro recorte; o Mestre conserva
  seus controles e pode voltar ao fluxo livre. Ações de personagem não exigem
  que ele seja o participante do turno atual.
- Ações do ator devem continuar acessíveis fora de encontros. A posição de uma
  futura Action Tray será tratada em seu próprio recorte, sem ampliar este painel.
- Reutilizar a linguagem visual, componentes, foco e teclado do VTT. Evitar
  navegação adicional e rolagem horizontal obrigatória.

## Limites deste recorte

Não inclui motor de clima/incêndio, fases ambientais, gatilhos, avanço automático
de contadores, consequências mecânicas, encontros aninhados, múltiplas linhas do
tempo, novo ciclo de preparação/pausa ou rodadas coletivas. O Mestre pode
representar essas situações por notas e condução manual.

Preparação persistente de vários encontros, gestão de eventos ambientais fora
do encontro e retomada entre sessões são evoluções posteriores. Neste MVP, a
continuidade proposta cobre mudanças de cena durante a sessão; encerrar a sessão
mantém o encerramento vigente do encontro e preserva o histórico.

## Diferenças em relação ao produto atual

Hoje o encontro exige Tokens, inicia iniciativa/rodadas automaticamente,
restringe movimento dos Players por turno e termina ao trocar de cena ou remover
o último participante. Essas mudanças precisam ser explícitas nos contratos.

Fontes consultadas: [Combat](../combat/spec.md),
[Game Log](../campaign-game-log/spec.md), [Scene](../campaign-scene/spec.md),
`apps/api/src/modules/campaign-presence/domain/encounter.ts` e
`apps/api/src/modules/campaign-presence/socket.ts`.

Notas privadas não podem ser publicadas no Game Log compartilhado. A continuidade
do encontro não transfere Tokens nem revela a nova cena aos Players. Regras de
sessão e de visão seguem os contratos próprios.

## Critérios candidatos de aceite

1. Mestre inicia um encontro livre sem participantes.
2. Ativar/desativar turnos preserva nome, notas e histórico do mesmo encontro.
3. Remover o último participante deixa o encontro aberto, sem turno ativo.
4. Trocar de cena preserva o encontro sem movimentar Tokens automaticamente.
5. Nome/participantes são apresentados conforme autorização; notas permanecem
   privadas também no backend, realtime e histórico.
6. Um encontro livre não restringe movimento por um turno inexistente; a ordem
   atual não impede acessar ataques e magias autorizados do próprio personagem.
7. Encerrar manualmente ou terminar a sessão preserva o histórico existente.

## Próximo refinamento

O recorte e o fluxo manual integrado receberam confirmação para iniciar.
O contrato de ativação/retomada da ordem está proposto no ADR abaixo. Um desenho
de interação não representa implementação nem aceite automático de arquitetura.

Proposta estrutural: [ADR-0008](../../architecture/adr/ADR-0008-encounter-optional-turns.md),
respeitando ADR-0002, ADR-0004, ADR-0005 e ADR-0007. Revisão de UX e pontos de
handoff: [revisão do recorte](review.md). A entrega de QH-ENC-001 permanece
documental, por PR; desenvolvimento segue nos cards próprios após os gates.
