# Modulo: Encounter Mode (Specs & Contracts)

## 1. Fronteira do modulo
`encounter` define o estado generico de um encontro ativo na mesa. Em produto, UI e contratos atuais, o modo deve ser chamado de Encounter Mode / Encontro. Como o MVP ainda e prototipo sem usuarios externos, os eventos antigos do prototipo foram substituidos por `vtt:encounter:*`.

Campos proibidos no contrato base:
* `armorClass`
* `hitPoints`
* `conditions`
* `savingThrow`
* `proficiencyRank`
* `actionPoints`

## 2. Modelo MVP

```ts
type VttEncounterParticipant = {
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
}

type VttEncounterState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
}
```

Regras:
* `sceneId` identifica a cena usada para iniciar o encontro.
* `participants` vem apenas dos tokens selecionados explicitamente pelo Mestre na caixa de Encounter Mode.
* `initiative` pode ser `null` ate o Mestre preencher.
* Participantes com iniciativa numerica aparecem antes de participantes sem iniciativa.
* Ordenacao padrao: iniciativa descendente, mantendo ordem anterior quando houver empate.
* `round` inicia em `1`.
* `activeTurnIndex` inicia em `0`.
* Ao avancar alem do ultimo participante, `activeTurnIndex` volta para `0` e `round` aumenta em `1`.
* Ao voltar antes do primeiro participante, `activeTurnIndex` vai para o ultimo participante e `round` diminui ate o minimo de `1`.
* Encerrar encontro remove o estado vivo.
* Trocar a cena ativa remove o encontro vivo quando ele pertence a uma cena diferente.

## 3. Eventos Socket.IO

Comandos do cliente:

```txt
vtt:encounter:start
vtt:encounter:update-initiative
vtt:encounter:next-turn
vtt:encounter:previous-turn
vtt:encounter:end
vtt:encounter:request
```

Fato emitido pelo servidor:

```txt
vtt:encounter:changed
```

Payloads:

```ts
type VttEncounterStartPayload = {
  campaignId: string
  sceneId: string
  tokenIds: string[]
}

type VttEncounterUpdateInitiativePayload = {
  campaignId: string
  characterId: string
  initiative: number | null
}

type VttEncounterCommandPayload = {
  campaignId: string
}

type VttEncounterChangedPayload = {
  campaignId: string
  encounter: VttEncounterState | null
}
```

Regras de permissao:
* `start`, `update-initiative`, `next-turn`, `previous-turn` e `end` exigem Mestre ativo da sessao.
* `request` exige socket autenticado dentro da campanha.
* O servidor nunca deve aceitar objetos `participants` enviados pelo cliente no MVP.
* O servidor aceita somente `tokenIds` como intencao de selecao e monta participantes a partir dos tokens da cena informada.
* `tokenIds` deve conter de 1 a 100 ids unicos.
* Tokens ocultos, inexistentes ou fora da cena informada devem ser filtrados/recusados antes de criar o tracker.

## 4. UI/UX
* O tracker aparece no painel lateral direito do VTT.
* O tracker pode ser destacado pelo usuario para um painel flutuante horizontal no topo da mesa, mantendo os mesmos contratos e permissoes.
* O painel destacado deve sobrepor a faixa superior da mesa sem desmontar o VTT.
* O painel destacado deve exibir os participantes como cards de ordem de turno centralizados, com destaque mais forte e dimensao maior para o participante ativo.
* No painel destacado, o participante ativo deve permanecer centralizado; ao avancar ou voltar turno, a lista se comporta como um carrossel circular.
* O painel destacado nao deve exibir barra de rolagem horizontal nem cards cortados pela metade.
* O painel destacado deve permitir redimensionamento por qualquer borda, respeitando dimensoes minimas para os controles.
* O painel destacado deve oferecer acao para pregar o tracker novamente no painel lateral direito.
* O painel mostra rodada, participante ativo, lista de participantes e iniciativa.
* Quando nao ha encontro ativo, o painel mostra uma caixa de Encounter Mode acima do botao de inicio.
* Mestre usa `Shift` + clique em tokens visiveis da cena atual para pre-selecionar participantes.
* Tokens pre-selecionados devem exibir quatro setas vermelhas, uma acima, uma abaixo, uma a esquerda e uma a direita, apontando para o token com pequena margem visual.
* Clique simples fora dos tokens deve limpar toda a pre-selecao local de Encounter Mode.
* `Shift` + arraste em um token pre-selecionado deve arrastar o grupo pre-selecionado para a caixa de Encounter Mode sem mover nenhum token no grid.
* Se o drop do grupo pre-selecionado nao ocorrer dentro da caixa de Encounter Mode, nada deve ser alterado.
* O menu contextual do Mestre em um token deve oferecer acao para enviar o token selecionado, ou todo o grupo pre-selecionado quando houver mais tokens, para a caixa de Encounter Mode.
* Enviar tokens que ja estao na caixa de Encounter Mode nao deve duplicar participantes nem alterar os itens existentes.
* A caixa exibe os tokens selecionados e permite remover participantes antes de iniciar.
* O botao de inicio deve usar o texto `Iniciar Encontro`.
* Mestre ve controles para iniciar, editar iniciativa, avancar, voltar e encerrar.
* Jogador ve apenas estado atual.
* O token ativo deve receber destaque visual discreto na mesa.
* Encounter Mode nao bloqueia movimento de tokens no MVP.

## 5. Criterios de aceitacao
* Mestre inicia encontro somente com tokens enviados para a caixa de Encounter Mode.
* Tokens visiveis da cena que nao foram enviados para a caixa ficam fora do encontro.
* Jogadores conectados recebem o tracker automaticamente.
* Mestre consegue alterar iniciativa manualmente.
* A lista reordena por iniciativa descendente.
* Mestre consegue avancar e voltar turnos.
* Ao passar do ultimo participante, a rodada aumenta.
* Mestre consegue encerrar encontro.
* Encerrar sessao limpa encontro ativo.
* Trocar de cena encerra o encontro ativo do MVP.
* Nenhum campo mecanico especifico de ruleset entra no contrato base.
