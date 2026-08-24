# Modulo: Combat / Encounter Mode (Specs & Contracts)

## 1. Fronteira do modulo
`combat` define o estado generico de um encontro ativo na mesa. Em produto e UI, o modo deve ser chamado de Encounter Mode / Encontro, nao Combate. Os nomes `VttCombat*` e eventos `vtt:combat:*` podem permanecer temporariamente como compatibilidade tecnica legada ate uma migracao coordenada de contratos.

Campos proibidos no contrato base:
* `armorClass`
* `hitPoints`
* `conditions`
* `savingThrow`
* `proficiencyRank`
* `actionPoints`
* `characterSheetId`
* `bestiaryCreatureId`
* `ruleset`
* `system`

## 2. Modelo MVP

```ts
type VttCombatParticipant = {
  tokenId: string
  name: string
  avatarUrl: string | null
  initiative: number
}

type VttCombatState = {
  encounterId: string
  campaignId: string
  sceneId: string
  round: number
  turnCount: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}
```

Regras:
* `encounterId` identifica o registro persistente que agrupa o Game Log do encontro; o tracker e as regras operacionais continuam no estado vivo.
* `sceneId` identifica a cena usada para iniciar o combate.
* `participants` inicia com os tokens selecionados explicitamente pelo Mestre na caixa de Encounter Mode e pode ser alterado durante o encontro.
* Participantes referenciam tokens de cena; nao exigem `CampaignActor`, ficha, bestiario ou sistema de jogo.
* `initiative` inicia com um `1d20` gerado pelo servidor e preserva somente o total atual.
* Ajustes manuais inteiros entre `-1000` e `1000` sao somados ao total atual, que deve permanecer entre `-10000` e `10000`.
* Token adicionado durante encontro ativo recebe seu proprio `1d20` e entra imediatamente na ordenacao.
* Remover participante atualiza a lista imediatamente; remover o ultimo participante encerra o encontro.
* Ordenacao padrao: iniciativa descendente, mantendo ordem anterior quando houver empate.
* `round` inicia em `1`.
* `turnCount` inicia em `1`, representa o turno atual na linha do tempo do encontro e aumenta em `1` a cada comando `next-turn`.
* `activeTurnIndex` inicia em `0`.
* Ao avancar alem do ultimo participante, `activeTurnIndex` volta para `0`, `round` aumenta em `1` e `turnCount` continua crescente.
* `previous-turn` reduz `turnCount` e volta o participante ativo, sem permitir valores abaixo de `1`; no primeiro turno do encontro, o comando nao altera o estado.
* Encerrar encontro grava o evento final, fecha o registro persistente e remove o estado vivo, sem excluir o histórico.
* Trocar a cena ativa fecha o registro persistente e remove o combate vivo quando ele pertence a uma cena diferente.

## 3. Eventos Socket.IO

Comandos do cliente:

```txt
vtt:combat:start
vtt:combat:add-participants
vtt:combat:remove-participants
vtt:combat:adjust-initiative
vtt:combat:next-turn
vtt:combat:previous-turn
vtt:combat:end
vtt:combat:request
```

Fato emitido pelo servidor:

```txt
vtt:combat:changed
```

Payloads:

```ts
type VttCombatStartPayload = {
  campaignId: string
  sceneId: string
  tokenIds: string[]
}

type VttCombatParticipantsPayload = {
  campaignId: string
  tokenIds: string[]
}

type VttCombatAdjustInitiativePayload = {
  campaignId: string
  tokenId: string
  initiativeAdjustment: number
}

type VttCombatCommandPayload = {
  campaignId: string
}

type VttCombatChangedPayload = {
  campaignId: string
  combat: VttCombatState | null
}
```

Regras de permissao:
* `start`, `add-participants`, `remove-participants`, `adjust-initiative`, `next-turn`, `previous-turn` e `end` exigem Mestre ativo da sessao.
* `request` exige socket autenticado dentro da campanha.
* O servidor nunca deve aceitar objetos `participants` enviados pelo cliente no MVP.
* O servidor aceita somente `tokenIds` como intencao de selecao e monta participantes a partir dos tokens da cena informada.
* A rolagem d20 e executada no servidor; o cliente nao envia o resultado inicial nem o total de iniciativa.
* `tokenIds` deve conter de 1 a 100 ids unicos.
* Tokens ocultos, inexistentes ou fora da cena informada devem ser filtrados/recusados antes de criar o tracker.
* Tokens genericos sem `actorId` sao participantes validos.
* `add-participants` ignora Tokens que ja participam e valida os novos Tokens contra `combat.sceneId`.
* O encontro ativo continua limitado a 100 participantes no total.
* `remove-participants` ignora ids ausentes e encerra o encontro quando nao restar participante.

## 4. UI/UX
* Antes do início, a caixa de preparação permanece na aba de Encontro do painel lateral direito.
* Durante um encontro ativo, a ordem de turnos deixa o painel lateral e aparece automaticamente como cards suspensos na região central do header da mesa.
* O carrossel não possui moldura ou fundo de modal, aparece rebaixado sobre o tabuleiro, pode sobrepor verticalmente a transição entre header e tabuleiro e não desmonta o VTT. O topo do maior card deve preservar folga visual em relação ao topo da viewport, sem ser cortado pela borda do browser.
* O header da mesa usa altura compacta durante a navegação no VTT para preservar área útil do tabuleiro.
* Participantes são cards com a imagem do Token como elemento dominante e dimensões suficientes para leitura confortável.
* O participante ativo permanece no centro, recebe dimensão, contraste e brilho maiores e é identificado como `Agindo agora`.
* Ao avançar ou voltar turno, os mesmos cards mudam de posição com transição e ordem circular, formando um carrossel sem barra de rolagem.
* O carrossel renderiza no máximo dez participantes por vez, incluindo o ativo. Participantes adicionais aparecem sob demanda quando a ordem circular avança ou volta.
* O limite visível é adaptativo: o cálculo reserva a largura dos cards, das setas e das margens laterais; em viewport menor, menos de dez cards são exibidos para não sobrepor identidade da campanha, controles de sessão, sidebar ou toolbar.
* A opacidade diminui com curva progressiva conforme a distância ao card central: os vizinhos imediatos recebem fade sutil e a perda de destaque acelera gradualmente em direção às extremidades esquerda e direita.
* Cards fora da capacidade visual ficam ocultos; cards visíveis nunca são cortados por um viewport do carrossel.
* Os controles de voltar e avançar ficam imediatamente antes do primeiro e depois do último card visível.
* O controle de encerrar permanece visível apenas para o Mestre e ocupa o header da sidebar de Encontro, ao lado do contador de rodada e turno.
* A iniciativa permanece ajustável pelo Mestre em cada card visível.
* Ao iniciar ou receber um encontro ativo, a aba de Encontro da sidebar compartilhada é aberta.
* A sidebar expandida usa largura de até `440px`, limitada pela viewport, durante toda a mesa para acomodar com folga conteúdo de Encontro, chat, participantes, sessão e cenas.
* A aba de Encontro renderiza o retrato do Token ativo, acesso agnóstico à ficha vinculada e seus cards de ações, substituindo o estado informativo vazio.
* O retrato do Token ativo possui área vertical ampliada e usa contenção proporcional, sem recortar a imagem para preencher o quadro.
* O header da aba de Encontro contém o contador de rodada e turno e, para o Mestre, o controle de encerrar.
* O painel consulta a projeção neutra `TokenPresentation.actions`, respeita a visibilidade já filtrada pelo backend e renderiza somente ações cujo `contexts` contenha `ENCOUNTER`.
* O VTT não interpreta `group`, `label`, `id` ou `interaction` para decidir se uma ação pertence ao encontro.
* Títulos de grupos e detalhes usam no mínimo `12px`; nomes de ações usam no mínimo `14px` e podem quebrar linha quando necessário.
* Cards de ação ampliam ícone, padding e espaçamento para manter leitura confortável na sidebar mais larga.
* O estado vazio diferencia ausência de ficha/capacidade, ausência de ações e falha transitória.
* Trocar o turno cancela a leitura anterior e consulta somente o novo Token ativo.
* O painel mostra rodada, contagem de turnos, participante ativo, lista de participantes e iniciativa total.
* Quando nao ha encontro ativo, o painel mostra uma caixa de Encounter Mode acima do botao de inicio.
* Mestre usa `Shift` + clique em tokens visiveis da cena atual para pre-selecionar participantes.
* Tokens pre-selecionados devem exibir quatro setas vermelhas, uma acima, uma abaixo, uma a esquerda e uma a direita, apontando para o token com pequena margem visual.
* Clique simples fora dos tokens deve limpar toda a pre-selecao local de Encounter Mode.
* `Shift` + arraste em um token pre-selecionado deve arrastar o grupo pre-selecionado para a caixa de Encounter Mode sem mover nenhum token no grid.
* Se o drop do grupo pre-selecionado nao ocorrer dentro da caixa de Encounter Mode, nada deve ser alterado.
* O menu contextual do Mestre em um token deve oferecer acao para enviar o token selecionado, ou todo o grupo pre-selecionado quando houver mais tokens, para a caixa de Encounter Mode.
* Enviar tokens que ja estao na caixa de Encounter Mode nao deve duplicar participantes nem alterar os itens existentes.
* A selecao da caixa de Encounter Mode e estado local e efemero do Mestre, escopado a cena atual; tokens removidos ou que deixem de estar visiveis devem sair da selecao.
* A acao contextual `Enviar para o encontro` deve existir apenas para o Mestre, deve ficar indisponivel para token oculto e deve abrir a aba de Encounter Mode ao concluir.
* Durante encontro ativo, o menu contextual oferece `Enviar para o encontro` para Token ausente e `Remover do encontro` para participante atual.
* Cada card ativo do tracker oferece ao Mestre uma acao de remocao do participante.
* O comando `vtt:combat:start` deve usar exclusivamente os `tokenIds` presentes na caixa de Encounter Mode, nunca todos os tokens visiveis da cena por inferencia.
* A caixa exibe os tokens selecionados e permite remover participantes antes de iniciar.
* O botao de inicio deve usar o texto `Iniciar Encontro`.
* Mestre ve controles para iniciar, ajustar iniciativa, adicionar/remover participantes, avancar, voltar e encerrar.
* Jogador ve apenas estado atual.
* O token ativo deve receber destaque visual discreto na mesa.
* Encounter Mode bloqueia arraste direto de Token para PLAYER.
* PLAYER movimenta somente o Token do turno ativo que estiver sob seu controle, por meio do trajeto medido iniciado com `Ctrl` + botao esquerdo e confirmado com `Espaco`.
* O Mestre continua podendo movimentar diretamente ou por trajeto qualquer Token da cena.

## 5. Criterios de aceitacao
* Mestre inicia encontro somente com tokens enviados para a caixa de Encounter Mode.
* Mestre consegue enviar um token visivel para a caixa pelo menu de contexto aberto com o botao direito.
* Jogador nao visualiza a acao contextual de envio para o encontro.
* Repetir o envio contextual do mesmo token nao cria duplicatas na caixa.
* Tokens visiveis da cena que nao foram enviados para a caixa ficam fora do encontro.
* Jogadores conectados recebem o tracker automaticamente.
* Cada Token recebe uma rolagem instantanea de `1d20` ao iniciar o encontro.
* Mestre consegue somar um ajuste manual ao total; o card nao exibe label `d20` nem preserva o resultado inicial separadamente.
* Mestre consegue adicionar Token visivel durante encontro ativo; o novo participante recebe iniciativa e a lista reordena.
* Mestre consegue remover participante pelo menu contextual ou pelo card durante encontro ativo.
* A lista reordena por iniciativa descendente.
* Mestre consegue avancar e voltar turnos.
* O tracker exibe uma contagem de turnos iniciada em `1`, incrementada ao avancar e decrementada ao voltar, respeitando o minimo `1`.
* Ao passar do ultimo participante, a rodada aumenta.
* Mestre consegue encerrar encontro.
* Durante encontro, tentativa de arraste direto feita por PLAYER nao altera estado local nem e aceita pelo servidor.
* Durante encontro, movimento medido de PLAYER so e aceito para o participante do turno ativo sob seu controle.
* O trajeto confirmado e animado pela mesma timeline para todos os clientes conectados.
* Encerrar sessao limpa encontro ativo.
* Trocar de cena encerra o encontro ativo do MVP.
* Nenhum campo mecanico especifico de ruleset entra no contrato base.
* O carrossel ativo aparece automaticamente suspenso no centro do header e substitui a antiga lista de turnos da sidebar.
* A sidebar ativa exibe o retrato e os cards de ações do participante atual.
* Nome e detalhe de cada ação permanecem legíveis sem depender do atributo `title`.
* O retrato exibe a imagem completa com `object-contain` dentro de uma área mínima de `256px` de altura em viewport desktop.
* A sidebar não exibe ações marcadas apenas como `REFERENCE`; se nenhuma ação `ENCOUNTER` existir, preserva o retrato, o acesso à ficha quando autorizado e um estado vazio.
* Ações adicionais só entram na sidebar quando o provider do sistema as marca explicitamente com `contexts: ['ENCOUNTER']`.
* O botão `Abrir ficha` usa somente `campaignId`, `tokenId` e o resolvedor genérico, podendo ficar ausente quando não houver ficha autorizada.
* O card central sempre corresponde a `participants[activeTurnIndex]`, inclusive ao circular entre o último e o primeiro.
* O painel de ações não contém branches para Pathfinder, perícias, magias, ataques, saves ou atributos.
* Um Token genérico sem provider ou ficha continua participando do encontro e exibe estado vazio no painel de ações.
* Encounter Mode nao e dependencia para testar token, grid, cena, movimento ou paredes do VTT core.
