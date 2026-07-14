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
type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
}

type VttEncounterHazardParticipant = {
  type: 'hazard'
  participantId: string
  hazardInstanceId: string
  hazardEntryId: string
  name: string
  initiative: number | null
  visibility: 'HIDDEN' | 'REVEALED'
  state: 'ARMED' | 'TRIGGERED' | 'DISABLED' | 'EXPIRED'
}

type VttEncounterParticipant = VttEncounterCreatureParticipant | VttEncounterHazardParticipant

type VttEncounterState = {
  campaignId: string
  sceneId: string
  round: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
  log: VttEncounterLogEntry[]
}
```

Regras:
* `sceneId` identifica a cena usada para iniciar o encontro.
* `participants` vem dos tokens selecionados explicitamente pelo Mestre na caixa de Encounter Mode e/ou de instancias de Hazard ja posicionadas na cena (`.ai/game_systems/pathfinder_2e/hazards/specs.md`) enviadas pelo menu de contexto do marcador de Hazard.
* `participantId` e a chave de identidade generica usada por ordenacao, avanco/retrocesso de turno e `update-initiative`, independente do tipo de participante.
* Participante `type: 'hazard'` referencia o catalogo (`hazardEntryId`) e a instancia de cena (`hazardInstanceId`), mas mantem `visibility`/`state` como estado local do encontro, desacoplado de edicoes feitas na instancia de cena depois do inicio.
* Participante `type: 'hazard'` com `visibility: 'HIDDEN'` nunca revela seu nome real a Jogadores; o servidor substitui por um rotulo generico ao emitir o estado do encontro.
* `initiative` pode ser `null` ate o Mestre preencher.
* Participantes com iniciativa numerica aparecem antes de participantes sem iniciativa.
* Ordenacao padrao: iniciativa descendente, mantendo ordem anterior quando houver empate.
* `round` inicia em `1`.
* `activeTurnIndex` inicia em `0`.
* Ao avancar alem do ultimo participante, `activeTurnIndex` volta para `0` e `round` aumenta em `1`.
* Ao voltar antes do primeiro participante, `activeTurnIndex` vai para o ultimo participante e `round` diminui ate o minimo de `1`.
* Encerrar encontro remove o estado vivo.
* Trocar a cena ativa remove o encontro vivo quando ele pertence a uma cena diferente.
* `actionsRemaining` e o contador generico de acoes do participante criatura no turno. Movimento ja consome esse contador via `encounter_movement`; `spell_casting` tambem pode debitar 1/2/3 acoes quando uma magia PF2e com tempo simples e conjurada pelo token ativo.
* `actionsRemaining` volta a 3 quando o turno chega no participante (`next-turn`/`previous-turn`/reset manual), junto com `metersUsedThisAction`.

## 2.1. Log de Batalha

O encontro carrega um log efemero de eventos relevantes de combate, visivel para Mestre e Jogadores enquanto o encontro estiver ativo. O log nao e uma feature isolada: e um campo a mais do `VttEncounterState`, distribuido pelo mesmo canal (`vtt:encounter:changed`) e mascarado pela mesma funcao de apresentacao por papel (`presentEncounterForRole`) ja usada para os participantes.

```ts
type VttEncounterLogEntryBase = {
  id: string
  createdAt: string // ISO 8601
}

type VttEncounterHealthLogEntry = VttEncounterLogEntryBase & {
  type: 'DAMAGE' | 'HEAL'
  actorName: string
  targetParticipantId: string | null
  targetName: string
  amount: number | null
  resultingHealth: VttCombatantHealth | PublicNpcHealth | null
}

type VttEncounterDiceRollLogEntry = VttEncounterLogEntryBase & {
  type: 'DICE_ROLL'
  actorName: string
  notation: string
  total: number
}

type VttEncounterSystemLogEntry = VttEncounterLogEntryBase & {
  type: 'SYSTEM'
  message: string
}

type VttEncounterLogEntry =
  | VttEncounterHealthLogEntry
  | VttEncounterDiceRollLogEntry
  | VttEncounterSystemLogEntry
```

Regras:
* `log` comeca vazio (`[]`) quando o encontro e iniciado (`vtt:encounter:start`).
* `log` e limitado a 50 entradas; ao ultrapassar o limite, a entrada mais antiga e descartada (FIFO).
* `log` e removido junto com o encontro ao encerrar (`vtt:encounter:end`), trocar de cena ou encerrar a sessao — sem persistencia em banco, seguindo a mesma filosofia efemera do restante do modulo (secao 2).
* Entradas `DAMAGE`/`HEAL` sao geradas pelo modulo `combat` (`.ai/combat/specs.md` secao 8) sempre que `vtt:combat:health:adjust` (dano/cura rapidos) altera um token que pertence a cena do encontro ativo, mesmo que o token nao seja um participante rastreado (`targetParticipantId: null` nesse caso). `vtt:combat:health:set` (edicao direta de PV atual/maximo/temporario) **nao** gera entrada de log — e uma edicao de campo, nao uma acao narrativa de dano/cura.
* Em `DAMAGE`/`HEAL`, quando `targetParticipantId` aponta para um participante `source: 'bestiary'` e o papel de quem le e diferente de Mestre, `amount` e apresentado como `null` e `resultingHealth` vem no formato `PublicNpcHealth` (faixa percentual), reaproveitando `derivePublicNpcHealth` — a mesma mascara ja aplicada ao campo `health` do participante (secao 3 de `.ai/combat/specs.md`). Mestre e o dono do personagem sempre veem `amount`/`resultingHealth` exatos.
* Entradas `DICE_ROLL` sao geradas pelo modulo `chat` (`.ai/chat/specs.md` secao "Rolagem rapida") quando quem rola tem personagem ativo numa cena com encontro em andamento; nao ha mascaramento, o valor rolado e publico para todos os participantes do encontro, igual ao chat.
* Entradas `SYSTEM` cobrem eventos textuais ja existentes que hoje só viram mensagem de chat, como o disparo de Hazard (`.ai/encounter/todo.md` Fase 4) — o log de batalha passa a receber a mesma mensagem, sem substituir a publicacao no chat da campanha.
* O log de batalha nao e uma trilha de auditoria; para auditoria interna do Mestre (numeros exatos, sobrevive ao fim do encontro), a fonte de verdade continua sendo `CampaignSceneTokenHealthLog` (`.ai/combat/specs.md` secao 2).

## 3. Eventos Socket.IO

Comandos do cliente:

```txt
vtt:encounter:start
vtt:encounter:join
vtt:encounter:remove-participant
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
  hazardInstanceIds: string[]
}

type VttEncounterJoinPayload = {
  campaignId: string
  tokenIds: string[]
  hazardInstanceIds: string[]
}

type VttEncounterRemoveParticipantPayload = {
  campaignId: string
  participantId: string
}

type VttEncounterUpdateInitiativePayload = {
  campaignId: string
  participantId: string
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
* `start`, `join`, `remove-participant`, `update-initiative`, `next-turn`, `previous-turn` e `end` exigem Mestre ativo da sessao.
* `request` exige socket autenticado dentro da campanha.
* O servidor nunca deve aceitar objetos `participants` enviados pelo cliente no MVP.
* O servidor aceita somente `tokenIds`/`hazardInstanceIds` como intencao de selecao e monta participantes a partir dos tokens e instancias de Hazard da cena informada.
* `tokenIds` deve conter ate 100 ids unicos e `hazardInstanceIds` ate 20 ids unicos; ao menos uma das duas listas precisa ter itens.
* Tokens ocultos, inexistentes ou fora da cena informada devem ser filtrados/recusados antes de criar o tracker.
* Instancias de Hazard fora da cena informada sao ignoradas; instancias com visibilidade `HIDDEN` na cena podem entrar no encontro (o encontro e o unico lugar onde um Hazard "gmOnly" participa da iniciativa sem ser revelado).

### 3.1. Entrar/sair de um encontro em andamento
* `join` adiciona tokens/instancias de Hazard a um encontro **ja ativo**, sem reiniciar rodada/turno/log. Usa a mesma cena do encontro (`encounter.sceneId`), nao recebe `sceneId` no payload.
* `join` ignora silenciosamente qualquer `tokenId`/`hazardInstanceId` que ja seja participante do encontro (idempotente — reenviar a mesma selecao nao duplica).
* Novo participante entra com `initiative: null` (vai para o fim da ordem ate o Mestre rolar/definir manualmente) e o `activeTurnIndex` e recalculado para continuar apontando para o mesmo participante que estava ativo antes da entrada.
* Cada participante que entra gera uma entrada `SYSTEM` no log de batalha (`"<nome> entrou no encontro."`, secao 2.1).
* `join` sem encontro ativo para a campanha nao faz nada (o cliente deve usar `start` nesse caso).
* `remove-participant` remove um participante (`creature` ou `hazard`) do encontro ativo pelo `participantId`, sem afetar o token/instancia na cena (o token continua no mapa, so deixa de fazer parte do tracker). Diferente de remover/ocultar um token da cena (que ja teria esse efeito colateral hoje).
* Remover o ultimo participante encerra o encontro (mesmo comportamento ja existente quando um token e removido/ocultado da cena).
* Remover o participante ativo no momento avanca a logica de turno para o proximo participante valido (`activeTurnIndex` recalculado, sem pular ou repetir rodada).

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
* A acao "Enviar p/ Encontro" (menu de contexto de token e de instancia de Hazard) funciona tanto antes de iniciar (adiciona a caixa de selecao) quanto com um encontro ja ativo (`join`, entra direto no encontro em andamento, sem passar pela caixa de selecao). O item fica desabilitado quando o token/instancia ja e participante do encontro ativo.
* A caixa exibe os tokens selecionados e permite remover participantes antes de iniciar.
* O botao de inicio deve usar o texto `Iniciar Encontro`.
* Mestre ve controles para iniciar, editar iniciativa, avancar, voltar e encerrar.
* Cada linha de participante (painel lateral e destacado) tem um botao "Remover do encontro" (Mestre-only), que tira o participante do tracker sem remover o token da cena (`remove-participant`).
* Jogador ve apenas estado atual.
* O token ativo deve receber destaque visual discreto na mesa.
* Encounter Mode nao bloqueia movimento de tokens no MVP.
* Ao lado do campo de iniciativa de cada participante (painel lateral e destacado), um icone de dado permite ao Mestre rolar `1d20` e atribuir o resultado automaticamente aquele participante. A rolagem reaproveita o mesmo motor 3D (`dice-box`) e o mesmo container ja usado pelo controle de dados da toolbar (`VttDiceControls`/`useVttDiceRoller`, exposto via ref imperativo `rollForInitiative`), nao uma segunda instancia. A rolagem tambem publica no chat da campanha (`INICIATIVA (D20): <valor>`) e, se houver encontro ativo na cena, aparece como entrada `DICE_ROLL` no Log de Batalha (secao 2.1), igual a qualquer outra rolagem.
* O campo de iniciativa continua editavel manualmente a qualquer momento, mesmo depois de uma rolagem — rolar e digitar sao dois jeitos de preencher o mesmo campo, sem exclusividade entre eles.
* A linha do participante ativo (`type: 'creature'`) na lista de participantes do tracker (painel lateral, nao destacado) ja tem destaque visual proprio (borda/fundo vermelho) por ser o turno atual; quando o Mestre esta olhando essa linha, ela ganha uma segunda faixa abaixo com edicao rapida de PV: um campo de quantidade e dois botoes ("Causar dano"/"Curar"), que chamam `vtt:combat:health:adjust` diretamente pelo `tokenId` do participante. Nao existe um card separado de "turno atual" — a sinalizacao de turno e a edicao rapida de PV vivem na mesma linha, para nao duplicar informacao.
* O icone de coracao (abre `CombatHealthEditorModal`) continua disponivel em qualquer participante `creature` (ativo ou nao), para ajustar PV maximo/temporario ou quando o participante nao esta no turno atual. A edicao rapida inline e um atalho para o caso mais comum (dano/cura no proprio turno), nao substitui o modal.
* Abaixo da lista de participantes, um painel de Log de Batalha (`BattleLogPanel`) ocupa todo o espaco restante da aba "Encounter Mode" no painel lateral direito — a mesma area que antes ficava vazia entre o card de encontro e o rodape do painel. O container da aba "encounter" vira um flex column direto (sem wrapper `h-full` aninhado) para que o Log de Batalha realmente cresca (`flex-1`) e preencha a area, em vez de encolher ao tamanho do conteudo.
* O Log de Batalha e visivel para Mestre e Jogadores, sem controles de edicao (somente leitura).
* O Log de Batalha renderiza as entradas de `encounter.log` em ordem cronologica, com rolagem automatica para a entrada mais recente ao chegar uma nova.
* Cada tipo de entrada tem um estilo visual distinto: dano (tom vermelho), cura (tom verde), rolagem de dado (tom neutro/dourado) e evento de sistema (tom mutado).
* Quando nao ha encontro ativo, o Log de Batalha nao e exibido (a aba volta a mostrar somente a caixa de selecao/inicio, como hoje).

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
* Mestre consegue enviar uma instancia de Hazard ja posicionada na cena para o encontro, junto ou separado de tokens.
* Participante de Hazard com visibilidade `HIDDEN` nunca revela seu nome real a Jogadores no tracker.
* Dano e cura aplicados durante um encontro ativo geram uma entrada no Log de Batalha, visivel para Mestre e Jogadores.
* Jogador nunca ve o valor exato de dano/cura aplicado a um NPC no Log de Batalha, apenas a faixa percentual resultante.
* Rolagens de dado feitas com um encontro ativo na cena do personagem aparecem no Log de Batalha, alem da mensagem normal do chat.
* Encerrar o encontro limpa o Log de Batalha junto com o restante do estado vivo.
* Mestre consegue adicionar um novo token ou instancia de Hazard a um encontro ja em andamento, sem reiniciar rodada/turno/log.
* Novo participante entra com iniciativa em branco e nao interrompe o turno de quem ja estava jogando.
* Mestre consegue remover um participante de um encontro ativo sem remover o token da cena.
* Remover o ultimo participante de um encontro ativo o encerra.
* Mestre consegue rolar `1d20` pelo icone de dado ao lado do campo de iniciativa e o valor e atribuido automaticamente ao participante.
* O campo de iniciativa continua editavel manualmente a qualquer momento, com ou sem rolagem previa.
