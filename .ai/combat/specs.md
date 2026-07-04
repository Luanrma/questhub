# Modulo: Combat (Specs & Contracts)

## 1. Fronteira do modulo
`combat` define o estado generico de um encontro ativo na mesa. Ele nao conhece regras de Pathfinder 2e, D&D 5e ou qualquer outro sistema.

Campos proibidos no contrato base:
* `armorClass`
* `hitPoints`
* `conditions`
* `savingThrow`
* `proficiencyRank`
* `actionPoints`

## 2. Modelo MVP

```ts
type VttCombatParticipant = {
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
}

type VttCombatState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}
```

Regras:
* `sceneId` identifica a cena usada para iniciar o combate.
* `participants` vem dos tokens nao ocultos da cena atual.
* `initiative` pode ser `null` ate o Mestre preencher.
* Participantes com iniciativa numerica aparecem antes de participantes sem iniciativa.
* Ordenacao padrao: iniciativa descendente, mantendo ordem anterior quando houver empate.
* `round` inicia em `1`.
* `activeTurnIndex` inicia em `0`.
* Ao avancar alem do ultimo participante, `activeTurnIndex` volta para `0` e `round` aumenta em `1`.
* Ao voltar antes do primeiro participante, `activeTurnIndex` vai para o ultimo participante e `round` diminui ate o minimo de `1`.
* Encerrar combate remove o estado vivo.
* Trocar a cena ativa remove o combate vivo quando ele pertence a uma cena diferente.

## 3. Eventos Socket.IO

Comandos do cliente:

```txt
vtt:combat:start
vtt:combat:update-initiative
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
}

type VttCombatUpdateInitiativePayload = {
  campaignId: string
  characterId: string
  initiative: number | null
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
* `start`, `update-initiative`, `next-turn`, `previous-turn` e `end` exigem Mestre ativo da sessao.
* `request` exige socket autenticado dentro da campanha.
* O servidor nunca deve aceitar `participants` enviados pelo cliente no MVP.
* O servidor monta participantes a partir dos tokens da cena informada.
* Tokens ocultos devem ser filtrados antes de criar o tracker.

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
* Mestre ve controles para iniciar, editar iniciativa, avancar, voltar e encerrar.
* Jogador ve apenas estado atual.
* O token ativo deve receber destaque visual discreto na mesa.
* Combate nao bloqueia movimento de tokens no MVP.

## 5. Criterios de aceitacao
* Mestre inicia combate com tokens nao ocultos da cena atual.
* Jogadores conectados recebem o tracker automaticamente.
* Mestre consegue alterar iniciativa manualmente.
* A lista reordena por iniciativa descendente.
* Mestre consegue avancar e voltar turnos.
* Ao passar do ultimo participante, a rodada aumenta.
* Mestre consegue encerrar combate.
* Encerrar sessao limpa combate ativo.
* Trocar de cena encerra o combate ativo do MVP.
* Nenhum campo mecanico especifico de ruleset entra no contrato base.
