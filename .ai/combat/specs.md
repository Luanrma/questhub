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
* Encerrar encontro remove o estado vivo.
* Trocar a cena ativa remove o combate vivo quando ele pertence a uma cena diferente.

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
* O tracker aparece no painel lateral direito do VTT.
* O tracker pode ser destacado pelo usuario para um painel flutuante horizontal no topo da mesa, mantendo os mesmos contratos e permissoes.
* O painel destacado deve sobrepor a faixa superior da mesa sem desmontar o VTT.
* O painel destacado deve exibir os participantes como cards de ordem de turno centralizados, com destaque mais forte e dimensao maior para o participante ativo.
* No painel destacado, o participante ativo deve permanecer centralizado; ao avancar ou voltar turno, a lista se comporta como um carrossel circular.
* O painel destacado nao deve exibir barra de rolagem horizontal nem cards cortados pela metade.
* O painel destacado deve permitir redimensionamento por qualquer borda, respeitando dimensoes minimas para os controles.
* O painel destacado deve oferecer acao para pregar o tracker novamente no painel lateral direito.
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
* Encounter Mode nao e dependencia para testar token, grid, cena, movimento ou paredes do VTT core.
