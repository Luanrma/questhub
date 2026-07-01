# Modulo: VTT (Specs & Contracts)

## 0. Fronteira Generica
O VTT define contratos genericos de mesa. Nenhum contrato base deste modulo deve exigir conhecimento de Pathfinder 2e, D&D 5e ou qualquer outro sistema.

Nota de transicao:
* `campaign_scene` e o modulo canonico para estado persistido de cena, grid e tokens.
* `campaign_diary` e o modulo canonico para diarios livres da campanha.
* Regras antigas deste documento que descrevem cena apenas como asset/background, grid apenas local/realtime, tokens apenas em memoria ou `squareMeters` como escala canonica foram superadas por `.ai/campaign_scene/spec.md`.
* O VTT continua responsavel por renderizar mesa, ferramentas, medicao, dado visual e interacao, consumindo snapshots persistidos de `campaign_scene`.

Exemplos de entidades genericas permitidas:
* `Scene`
* `Map`
* `Layer`
* `Token`
* `ChatMessage`
* `DiceRoll`
* `Measurement`
* `Asset`

Exemplos de campos proibidos em contratos base do VTT:
* `armorClass`
* `ancestry`
* `className`
* `spellDc`
* `savingThrow`
* `proficiencyRank`

## 1. Navegacao
* `/campaign/:campaignId/overview` representa a mesa.
* A mesa e renderizada pelo `CampaignLayout`, nao por uma rota filha exclusiva.
* Rotas internas como `/sessions`, `/players`, `/characters`, `/journal` e `/settings` sao estado de modal e renderizam por cima da mesa em painel flutuante.
* O painel flutuante pode ser fechado navegando de volta para `/campaign/:campaignId/overview`.
* Clicar nos menus internos da sidebar nao pode causar reload de documento nem desmontar/remontar o VTT.

## 2. Sidebar
* Em telas grandes, a sidebar deve ser sobreposta e nao deve reservar largura no layout.
* Recolher ou expandir a sidebar nao deve redimensionar o VTT.
* O canvas VTT deve ocupar a tela ate a margem esquerda `0`.
* Em telas grandes, a altura da sidebar deve ser `auto`, limitada ao conteudo dos menus.
* Quando recolhida, a sidebar esquerda deve contrair para cima e exibir somente um controle compacto no header escuro.
* O controle recolhido da sidebar esquerda deve usar uma seta para baixo roxa bem visivel.
* A sidebar esquerda recolhida nao deve exibir lista vertical de icones reduzidos.
* As ferramentas principais do VTT devem ter recuo suficiente para nao ficarem cobertas pela sidebar recolhida.
* Em telas pequenas, deve virar barra inferior compacta sobreposta.
* Deve confirmar antes de navegar para `/campaigns`.
* Para `MASTER`, exibe `Personagens`.
* Para `PLAYER`, substitui `Personagens` por `Minha ficha`.
* `Minha ficha` nao navega; abre o modal arrastavel da ficha do personagem atual.

## 3. Dados Necessarios
`CampaignLayout` deve consultar:

```http
GET /api/campaigns/:campaignId/my-character
```

Resposta minima usada pelo VTT:

```ts
type MyCampaignCharacter = {
  id: string
  name: string
  avatarUrl: string | null
  role: 'MASTER' | 'PLAYER'
  status: 'ACTIVE' | 'PENDING'
}
```

## 4. Criterios de Aceitacao
* A mesa continua visivel quando o usuario abre jogadores, configuracoes, personagens ou diario.
* A mesa permanece montada ao alternar entre menus internos da sidebar.
* Todos os menus internos da campanha, exceto `Mesa` e `Trocar campanha`, abrem como modal/overlay.
* Em desktop, a mesa ocupa a largura total da viewport desde a margem esquerda.
* Em desktop, expandir ou recolher a sidebar nao altera a largura da mesa.
* Em desktop, a sidebar nao ocupa 100% da altura quando ha poucos menus.
* Ao recolher a sidebar esquerda, resta apenas a seta roxa para baixo; clicar nela abre diretamente a versao expandida.
* Em mobile/viewport baixo, os icones da barra compacta devem permanecer visiveis.
* Player ve `Minha ficha` e nao ve `Personagens`.
* Clicar em `Minha ficha` abre `CharacterSheetModal`.
* Clicar em `Trocar campanha` pede confirmacao.
* Em viewport pequeno, a navegacao vira barra inferior compacta.
* O contrato base de token nao contem campos mecanicos de Pathfinder 2e ou D&D 5e.
* O contrato base de rolagem aceita expressao generica, como `1d20+7`, e metadados opcionais de ruleset.
* Player nao ve menu `Token` e nao pode criar/recentralizar o proprio token.
* Player nao ve o rodape de preparacao de cena.
* Mestre ve o rodape de preparacao de cena na mesa.
* Clicar em `Preparar cena` abre modal sobre a mesa.
* Ao abrir o modal, a interface busca todas as cenas ja upadas para o `userId` autenticado na `campaignId` atual.
* Cenas ja upadas aparecem como cards salvos com preview via URL assinada.
* O modal exibe cards sequenciais nomeados `Cena1`, `Cena2` etc.
* Um card vazio exibe icone de `+` centralizado e permite selecionar uma imagem.
* Ao selecionar imagem para `Cena1`, o card exibe preview da imagem e surge um novo card vazio `Cena2` ao lado.
* Ao selecionar imagem para `Cena2`, surge `Cena3`, e assim sucessivamente.
* O modal valida formato de imagem permitido e tamanho maximo antes de aceitar preview.
* O rodape do modal exibe acao `Salvar`.
* Clicar em `Salvar` envia as imagens selecionadas para `/api/assets?campaignId=:campaignId`.
* O upload persistido cria registro em `Asset` e vinculo `CampaignAsset`.
* O path no Firebase deve ser identificavel por `userId`, `campaignId` e nome do arquivo.
* Se o mesmo arquivo ja foi salvo para o mesmo usuario e campanha, clicar em `Salvar` nao deve reenviar a imagem ao Firebase.
* Arquivos com mesmo nome de uma cena ja carregada ou ja selecionada nao podem ser selecionados; a interface deve alertar o Mestre.
* Se nenhuma cena possuir imagem nova pendente, o botao `Salvar` deve ficar bloqueado.
* Ao concluir envio bem sucedido, o modal deve informar que o arquivo foi enviado com sucesso.
* Ao salvar multiplos arquivos, o modal deve listar os nomes dos arquivos que nao foram enviados por ja existirem como asset da campanha.
* Cada card de cena salva exibe um botao `Deletar` abaixo do card.
* Cada card de cena ainda nao enviada exibe um botao azul `Remover` abaixo do card.
* Clicar em `Deletar` remove a cena do modal.
* Clicar em `Deletar` para cena salva pede confirmacao antes de apagar.
* Quando a cena ja possui `assetId`, clicar em `Deletar` tambem chama delecao do `Asset`, removendo o registro do banco, o vinculo `CampaignAsset` e o arquivo no Firebase.
* A selecao/preview das cenas cria ou atualiza `CampaignScene`; imagem continua usando `Asset`, mas a entidade persistida da cena pertence a `campaign_scene`.
* Miniaturas das cenas preparadas aparecem no rodape do Mestre.
* Clicar em uma miniatura seleciona a cena ativa e renderiza a imagem abaixo do grid do board.
* A imagem da cena nao deve ser deformada para ocupar o limite padrao do board; o board deve passar a usar as dimensoes naturais da imagem, respeitando o zoom visual local.
* A cena selecionada pelo Mestre define `masterActiveSceneId`; Players veem `forcedSceneId` quando existir, ou a cena onde o proprio token esta.
* Trocar cena pelo Mestre pausa automaticamente a sessao; retomar sessao nao revela automaticamente a nova cena aos Players.
* O rodape de cenas deve ter controle para recolher/expandir.
* Quando recolhido, o rodape de cenas deve reduzir para um pequeno icone visualmente reconhecivel de cena/filme no quinto inferior do painel lateral direito, abaixo do chat.
* O painel lateral direito expandido deve reservar aproximadamente o ultimo quinto da altura para o icone recolhido de cenas quando o Mestre estiver com cenas recolhidas.
* Quando expandido, o rodape de cenas deve exibir o controle de recolher no lado direito do cabecalho.
* O resumo de cenas preparadas do rodape recolhido deve aparecer como alias/tooltip ao repousar o ponteiro sobre o icone.
* A acao `Preparar cena` permanece acessivel no rodape expandido.
* O painel lateral de jogadores, sessao e chat deve ter controle para recolher/expandir.
* No estado expandido, o painel lateral deve priorizar o chat e nao deve exibir cards redundantes de resumo de jogadores ou sessao.
* Quando recolhido, o painel lateral deve reduzir a largura ocupada na tela e exibir somente controles/resumos essenciais.
* Em viewports menores, o painel lateral recolhido deve ficar sobreposto na direita da mesa como uma rail estreita, sem criar uma faixa horizontal abaixo do board.
* Recolher o painel lateral nao deve desmontar a mesa nem perder mensagens carregadas do chat ao expandir novamente.
* Mestre ve uma ferramenta `Tokens` que abre modal com personagens `PLAYER` e `NPC` ativos da campanha.
* O token so existe no board depois que o Mestre arrasta um personagem do modal de tokens e solta no grid.
* Ao concluir o drop do Mestre, o Player dono do personagem passa a poder mover o proprio token quando a sessao esta ativa.
* O token seja ele qualquer, pode ser movido pelo mestre quando a sessao esta pausada.
* O token usa `MyCampaignCharacter.avatarUrl` quando existir.
* Sem avatar, o token exibe a inicial do nome do personagem.
* O token deve ser redondo e arrastavel por pointer events.
* O token nao pode sair da area de grid visivel.
* Tokens nunca podem sobrepor ferramentas, toolbar, zoom, paineis flutuantes ou controles do VTT.
* A camada de tokens deve ficar acima do grid/mapa e abaixo da camada de UI.
* A camada de UI nao deve bloquear pointer events da mesa fora dos controles visiveis.
* O board jogavel deve ter limite finito e nao pode se comportar como superficie infinita.
* No MVP, o limite visual padrao do board e de 50 colunas por 34 linhas de grid.
* A mesa nao deve exibir barras de rolagem horizontais ou verticais para navegar o board.
* Quando o board for maior que o viewport, a navegacao deve acontecer pela ferramenta `Mover` ou pelo arraste em area vazia do board com o botao esquerdo pressionado.
* Setas do teclado nao devem mover o board nem tokens neste MVP; navegacao por teclado e feature futura.
* Ao arrastar uma area vazia com a ferramenta `Mover`, o cursor deve indicar mao aberta/mao agarrando.
* O deslocamento visual do board deve ser limitado para nunca ultrapassar as bordas finais do board.
* Grid, tokens, drop e medicao devem ficar restritos ao retangulo finito do board.
* A posicao do token deve ser calculada em coordenadas logicas do grid, nao como percentual da tela.
* Ao aumentar ou diminuir o tamanho do grid, o token permanece no mesmo ponto logico do quadrado ou hexagono.
* O diametro visual do token acompanha `VttGridSettings.size`.
* O zoom visual da mesa deve variar de 50% a 150%, com padrao inicial de 100%.
* Clicar no botao de diminuir zoom reduz o zoom sem passar de 50%.
* Clicar no botao de aumentar zoom aumenta o zoom sem passar de 150%.
* O valor percentual do zoom deve ser exibido entre os botoes de diminuir e aumentar.
* O zoom deve escalar grid, tokens e medicao visualmente sem alterar coordenadas logicas, posicoes realtime ou configuracao persistida de grid.
* O zoom minimo efetivo deve subir acima de 50% quando necessario para impedir que area vazia alem da borda do board apareca na viewport.
* A posicao do token e persistida por cena em `CampaignSceneToken`.
* A posicao do token e sincronizada em tempo real com Mestre e Players online que visualizam a cena afetada.
* Usuarios que entram depois recebem o snapshot de cena definido por `campaign_scene`.
* O Mestre pode pausar ou retomar a sessao sem encerra-la.
* Em sessao pausada, chat continua funcionando e demais interacoes VTT em tempo real ficam bloqueadas para os Players.
* Em sessao pausada, Players nao podem mover tokens.
* Em sessao pausada, Mestre pode mover todos os tokens.
* Em sessao ativa, o Mestre nao pode mover token de Player por drag, para evitar conflito de input;
* Apenas o Mestre ve o menu contextual de token por botao direito.
* O menu contextual do Mestre deve exibir o nome do dono do token.
* `Remover` tira o token do board e devolve o personagem para a lista de tokens disponiveis no modal.
* Ao receber `vtt:token:removed` para o proprio personagem, o Player deve limpar a cena atual, remover tokens locais e perder a capacidade de mover ate o Mestre reposicionar o token ou forcar uma cena.
* `Invisibilidade` alterna opacidade reduzida para Mestre e oculta o token para Players.
* A acao `Destruir` nao faz parte deste MVP.
* A ferramenta `Medir` deve poder ser ativada pela toolbar do VTT.
* No grid quadrado, pressionar no ponto A, arrastar e soltar no ponto B deve mostrar a distancia em metros.
* No grid quadrado, `VttGridSettings.size` representa apenas o lado visual da celula em pixels.
* No grid quadrado, `VttGridSettings.metersPerCell` representa quantos metros lineares cada lado da celula representa.
* No grid quadrado, `VttGridSettings.squareMeasurementColor` representa a cor do tracejado da regua.
* No grid quadrado, `VttGridSettings.metersPerCell` deve aceitar valores positivos em metros lineares, com controles de UI adequados ao VTT.
* No grid quadrado, a distancia em metros deve ser `(distanciaEmPixels / VttGridSettings.size) * VttGridSettings.metersPerCell`.
* No grid hexagonal, pressionar e arrastar deve registrar a rota pelos centros de hexagonos atravessados.
* No grid hexagonal, a rota deve pintar o hexagono por completo, sem linha conectando os pontos.
* No grid hexagonal, `VttGridSettings.hexMeasurementColor` representa a cor usada para pintar a rota.
* No grid hexagonal, se o usuario voltar para um hexagono anterior da propria rota, os hexagonos posteriores devem ser removidos da medicao.
* No grid hexagonal, o resultado exibido deve ser a quantidade de passos entre hexagonos, nao uma area em metros quadrados.
* A medicao deve usar coordenadas relativas a area de grid, nao coordenadas globais da viewport.
* A camada de medicao deve ficar acima de tokens e abaixo de ferramentas, paineis e controles do VTT.
* Medicoes nao sao persistidas no banco neste MVP.
* A medicao ativa da sessao deve ser sincronizada em tempo real com Mestre e Players online.
* Usuarios que entram depois recebem o snapshot atual da medicao da sessao.
* Ao executar uma rolagem rapida, um dado 3D deve aparecer sobre a mesa VTT, girar por um curto periodo e exibir o resultado rolado.
* A animacao 3D de dado e local ao cliente que rolou; a mensagem persistida no chat continua sendo a fonte compartilhada para os demais usuarios.
* A camada 3D nao pode capturar pointer events nem impedir interacao com grid, tokens, medicoes ou botoes.
* A ferramenta de dados deve ser implementada como componente do VTT, nao como estado interno de `CampaignLayout`.
* `CampaignLayout` pode fornecer `campaignId`, personagem atual, socket e estado da sessao para ferramentas VTT, mas nao deve conhecer detalhes de engine de dados, bibliotecas 3D ou formatos visuais de rolagem.

## 5. Configuracao Visual do Grid

Tipo local usado pelo VTT:

```ts
type VttGridShape = 'square' | 'hex'

type VttGridSettings = {
  visible: boolean
  shape: VttGridShape
  size: number
  metersPerCell: number
  squareMeasurementColor: string
  hexMeasurementColor: string
  lineWidth: number
  color: string
}
```

Regras:
* O botao `Grid` da barra de ferramentas abre um modal de configuracao apenas para `MASTER`.
* Para `PLAYER`, o botao/menu de configuracao do grid nao deve aparecer.
* O grid pode ser quadrado ou hexagonal.
* O tamanho da celula deve respeitar minimo de `24px` e maximo de `96px`.
* Quando o formato for quadrado, o modal deve exibir controle para configurar quantos metros lineares cada lado da celula representa.
* O controle de metros por celula deve seguir o mesmo padrao visual dos controles de tamanho e espessura, exibindo o valor selecionado.
* Quando o formato for quadrado, o modal deve exibir controle para configurar a cor do tracejado da regua.
* Quando o formato for hexagonal, o modal deve exibir controle para configurar a cor de preenchimento dos hexagonos pintados.
* A espessura das linhas deve respeitar minimo de `1px` e maximo de `4px`.
* A cor das linhas deve ser configuravel por input de cor.
* O fundo padrao da mesa deve manter a paleta atual sem o grid estatico antigo.
* A configuracao pertence a cena persistida em `campaign_scene`, nao ao layout global da campanha.
* A configuracao deve ser carregada do snapshot da cena atual.
* A configuracao deve ser sincronizada via Socket.IO com usuarios autorizados a visualizar a cena.
* O backend deve aceitar alteracoes de grid apenas de socket autenticado como mestre ativo da campanha.
* Jogadores recebem `campaign-scene:grid:changed`, mas nao podem emitir alteracoes aceitas pelo servidor.
* Durante a sessao online, a configuracao deve ser mantida em memoria/cache e transmitida via Socket.IO sem persistir a cada evento.
* A configuracao deve ser persistida no banco por cena ao iniciar e ao encerrar sessao.
* O modal deve permitir fechar sem desmontar a mesa.
* O controle de zoom fica na UI da mesa, separado da configuracao de grid.
* O zoom e local ao cliente e nao deve ser emitido por Socket.IO.
* O zoom deve aplicar escala visual sobre `VttGridSettings.size` para renderizacao, mantendo o valor configurado original.

Eventos Socket.IO legados:

```ts
type VttGridChangedPayload = {
  campaignId: string
  sceneId: string
  settings: VttGridSettings
}
```

* `vtt:grid:update`: legado do modelo de grid por campanha; o novo fluxo deve usar `campaign-scene:grid:update`.
* `vtt:grid:changed`: legado do modelo de grid por campanha; o novo fluxo deve usar `campaign-scene:grid:changed`.
* Enquanto os eventos legados existirem, payloads de grid devem carregar `sceneId` e o servidor deve emitir apenas para sockets cuja cena visivel seja a cena alterada.

## 6. Tokens Centralizados Realtime

Tipo usado pelo VTT:

```ts
type VttTableToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: {
    x: number
    y: number
  }
}

type VttTableTokenChangedPayload = {
  campaignId: string
  sceneId: string
  token: VttTableToken
}

type VttTableTokensSnapshotPayload = {
  campaignId: string
  sceneId: string | null
  tokens: VttTableToken[]
  sessionState: 'ACTIVE' | 'PAUSED'
}
```

Regras:
* `MASTER` e `GM` sao sinonimos no texto de produto; no dominio, schema Prisma e payloads o valor canonico continua sendo `MASTER`.
* `position.x` e `position.y` representam o centro do token em unidades logicas do grid.
* Para renderizar, `pixelCenter = position * VttGridSettings.size`.
* O tamanho visual do token e `VttGridSettings.size`, preservando proporcao ao alterar o grid.
* Ao posicionar via drop, o token fica no centro logico mais proximo do ponto solto no grid.
* Para grid quadrado, o snap usa centros `n + 0.5`.
* Para grid hexagonal, o snap usa os centros reais dos hexagonos renderizados, incluindo deslocamento horizontal alternado por linha.
* A posicao logica do token nao deve ser rebaixada para o limite visivel quando a janela ou o tamanho do grid muda.
* O limite visual deve ser aplicado apenas durante o drag, nunca durante a renderizacao passiva.
* O drag deve prender o centro do token entre metade de uma celula e o limite visual da area de grid.
* Apenas `MASTER` ativo ve a ferramenta `Tokens` neste MVP.
* O backend aceita criacao, remocao e alteracao de invisibilidade apenas de socket autenticado como `MASTER`, dentro da sala da campanha enquanto a campanha estiver online, inclusive em sessao `PAUSED`.
* O backend aceita movimento apenas quando `sessionActive && isPlayer && isOwner` ou `!sessionActive && isMaster`.
* `sessionActive` significa campanha online e estado de sessao `ACTIVE`, nunca `PAUSED`.
* O Mestre nao pode posicionar dois tokens `PLAYER` diferentes do mesmo `ownerUserId` na mesma campanha.
* Se o usuario dono estiver conectado na sessao com um personagem `PLAYER`, o Mestre so pode posicionar o token desse personagem conectado.
* O menu de tokens nao deve listar outro candidato `PLAYER` do mesmo `ownerUserId` quando ja existir um token `PLAYER` desse usuario posicionado em qualquer cena.
* Apenas o dono do personagem pode mover o proprio token apos ele existir no board.
* Ao receber atualizacao valida durante a sessao online, o backend atualiza o estado vivo em memoria/cache e emite para sockets autorizados a visualizar a cena.
* Durante a sessao online, movimento e visibilidade de tokens devem consultar primeiro o estado vivo; se o token nao existir mais no estado vivo, a acao deve ser recusada mesmo que ainda exista registro persistido aguardando o encerramento da sessao.
* O backend persiste tokens em `campaign_scene` ao iniciar e ao encerrar sessao.
* Ao entrar em uma sessao ativa, o cliente recebe `campaign-scene:snapshot`.
* Ao desconectar um Player, o token permanece no board enquanto a sessao continuar.
* Ao encerrar a sessao, tokens persistidos permanecem vinculados as suas cenas.

Eventos Socket.IO:

* `presence:session:pause`: emitido pelo Mestre para pausar a sessao.
* `presence:session:resume`: emitido pelo Mestre para retomar a sessao.
* `presence:session:state`: emitido pelo servidor para informar `ACTIVE` ou `PAUSED`.
* `vtt:token:place`: legado do modelo em memoria; novo fluxo deve usar eventos `campaign-scene:*`.
* `vtt:token:move`: legado do modelo em memoria; novo fluxo deve usar `campaign-scene:token:move`.
* `vtt:token:remove`: legado do modelo em memoria; novo fluxo deve usar eventos `campaign-scene:*`.
* `vtt:token:visibility`: legado do modelo em memoria; novo fluxo deve usar eventos `campaign-scene:*`.
* `vtt:token:changed`: legado do modelo em memoria; novo fluxo deve usar `campaign-scene:token:moved` ou `campaign-scene:token:scene-changed`.
* `vtt:tokens:snapshot`: legado do modelo em memoria; novo fluxo deve usar `campaign-scene:snapshot`.
* `vtt:tokens:request`: legado do modelo em memoria; novo fluxo deve usar snapshot de cena.
* `vtt:token:removed`: legado do modelo em memoria; novo fluxo deve usar eventos `campaign-scene:*`.
* Enquanto os eventos legados existirem, payloads de token devem carregar `sceneId` e o servidor deve emitir alteracoes apenas para sockets cuja cena visivel seja a cena do token.

## 7. Medicao Realtime

Tipo usado pelo VTT:

```ts
type VttMeasurementPoint = {
  x: number
  y: number
}

type VttMeasurement =
  | {
      shape: 'square'
      start: VttMeasurementPoint
      end: VttMeasurementPoint
      color: string
    }
  | {
      shape: 'hex'
      points: VttMeasurementPoint[]
      color: string
    }
```

Regras:
* Pontos de medicao usam coordenadas logicas do grid, nao pixels de tela.
* Para grid quadrado, `start` e `end` representam pontos logicos livres da regua.
* Para grid hexagonal, `points` representa centros logicos dos hexagonos pintados.
* Para grid hexagonal, a pintura deve preencher cada hexagono completo usando `color`.
* A medicao ativa e unica por campanha neste MVP.
* A medicao ativa fica em memoria no servidor enquanto a sessao estiver ativa.
* Ao encerrar sessao, a medicao ativa e descartada.

Eventos Socket.IO:

* `vtt:measurement:update`: emitido pelo cliente para atualizar ou limpar a medicao ativa.
* `vtt:measurement:changed`: emitido pelo servidor para toda a sala quando a medicao muda.
* `vtt:measurement:snapshot`: emitido pelo servidor ao usuario entrar na sala da campanha ou pedir snapshot.
* `vtt:measurement:request`: emitido pelo cliente para pedir novamente a medicao atual da sessao.

## 8. Rolagem Visual 3D

Tipo local usado pela interface de dados do VTT:

```ts
type VttDiceRollRequest = {
  sides: 4 | 6 | 8 | 10 | 12 | 20
  value: number
}
```

Regras:
* `sides` define o dado 3D suportado pela interface generica.
* `value` e o mesmo valor enviado para o chat.
* A animacao deve ser renderizada por `@3d-dice/dice-box` dentro da interface propria de dados do VTT.
* A animacao deve sumir automaticamente apos terminar.
* A camada visual e efemera e nao deve ser persistida no banco.
* A camada visual deve ser local ao cliente que rolou; o resultado compartilhado deve ser publicado no chat da campanha.
* O estado da rolagem visual deve ficar isolado dentro da interface de dados para nao re-renderizar `CampaignLayout`.
* A integracao com `@3d-dice/dice-box` deve ficar encapsulada em `vtt/dice-roller` e publicar o mesmo contrato generico `VttDiceRollBatchPayload`.
* O uso inicial de `@3d-dice/dice-box` renderiza em modal proprio para garantir inicializacao de canvas/assets, sem substituir o contrato generico de rolagem nem introduzir dependencia de ruleset.
* A evolucao desejada e permitir que a mesma interface propria de dados renderize sobre a area do grid/board sem desmontar ou bloquear a mesa.
* A interface de dados deve ser aberta por um icone de dado dentro da toolbar do grid, nao no header global da campanha.
* Clicar novamente no icone ativo da toolbar deve fechar a ferramenta aberta, incluindo dados, medicao e configuracao de grid.
* A interface deve aceitar comando textual como `1d20-5d6-3d10` e campos de quantidade por dado D4, D6, D8, D10, D12 e D20.
* A interface deve permitir configurar a cor dos dados por input de cor, aplicando o hexadecimal em `themeColor` da `@3d-dice/dice-box`.
* A cor dos dados e uma configuracao visual local por campanha e deve ser preservada no cliente.
* Se qualquer campo de quantidade por dado receber valor maior que zero, o comando textual deve ser limpo e ignorado.
* O limite visual padrao e de 20 dados acumulados na mesa local.
* Se a rolagem nova exceder o limite de 20 dados acumulados, a rolagem deve ser bloqueada e o painel deve exibir aviso em vermelho.
* Dados visuais acumulados devem permanecer na mesa ate o usuario clicar em `Limpar Dados`.
* Fechar a ferramenta de dados deve ocultar apenas o painel de controle; dados visuais acumulados devem continuar visiveis na mesa.
* Encerrar a sessao deve limpar os dados visuais acumulados do cliente do Mestre.
* O Mestre ativo da campanha pode rolar dados mesmo quando a sessao ainda nao foi iniciada.
* Players so podem rolar dados enquanto a campanha estiver online.
* A camada visual de dados nao deve exibir resumo flutuante redundante no grid; o resumo compartilhado pertence ao chat.
* A mensagem de chat para rolagens compostas deve detalhar os valores por grupo e o total, como `ROLOU 2D20-3D6 | D20: 10, 18 | D6: 1, 1, 5 | TOTAL: 35`.
* A camada 3D deve usar `pointer-events: none` e nunca impedir interacoes com ferramentas, tokens, medicoes, chat ou paineis.
* Assets da `dice-box` devem ficar sob `apps/web/public/assets/dice-box`, servidos pelo app principal.
* Nao deve existir `package.json`, `package-lock.json`, `node_modules` ou mini app demo dentro de `apps/web/public/3d_dices`.
* A rolagem visual nao deve exibir etiqueta/tooltip redundante abaixo do dado; o resultado compartilhado deve vir da animacao da `dice-box` e da mensagem do chat.

Eventos Socket.IO:

```ts
type VttDiceRollPayload = {
  campaignId: string
  sides: 4 | 6 | 8 | 10 | 12 | 20
  value: number
}

type VttDiceRollBatchPayload = {
  campaignId: string
  rolls: Array<{
    sides: 4 | 6 | 8 | 10 | 12 | 20
    value: number
  }>
}

type VttDiceRolledPayload = {
  campaignId: string
  roll?: VttDiceRollAnimation
  rolls: VttDiceRollAnimation[]
}
```

* `vtt:dice:roll`: legado do modelo visual sincronizado; nao deve ser usado pelo fluxo local de dados no grid.
* `vtt:dice:rolled`: legado do modelo visual sincronizado; nao deve ser consumido pelo fluxo local de dados no grid.
* O servidor deve aceitar apenas rolagens de sockets autenticados, dentro da sala da campanha e com sessao ativa.
* `value` deve estar entre `1` e `sides`.
* O payload de saida deve sempre preencher `rolls`; `roll` pode existir apenas para compatibilidade com consumidores antigos.
