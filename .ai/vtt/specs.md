# Modulo: VTT (Specs & Contracts)

## 0. Fronteira Generica
O VTT define contratos genericos de mesa. Nenhum contrato base deste modulo deve exigir conhecimento de Pathfinder 2e, D&D 5e ou qualquer outro sistema.

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
* Em mobile/viewport baixo, os icones da barra compacta devem permanecer visiveis.
* Player ve `Minha ficha` e nao ve `Personagens`.
* Clicar em `Minha ficha` abre `CharacterSheetModal`.
* Clicar em `Trocar campanha` pede confirmacao.
* Em viewport pequeno, a navegacao vira barra inferior compacta.
* O contrato base de token nao contem campos mecanicos de Pathfinder 2e ou D&D 5e.
* O contrato base de rolagem aceita expressao generica, como `1d20+7`, e metadados opcionais de ruleset.
* Player ve um menu `Token` na sidebar da campanha.
* Clicar em `Token` cria ou recentraliza o proprio token no centro da area de grid.
* O token usa `MyCampaignCharacter.avatarUrl` quando existir.
* Sem avatar, o token exibe a inicial do nome do personagem.
* O token deve ser redondo e arrastavel por pointer events.
* O token nao pode sair da area de grid visivel.
* Tokens nunca podem sobrepor ferramentas, toolbar, zoom, paineis flutuantes ou controles do VTT.
* A camada de tokens deve ficar acima do grid/mapa e abaixo da camada de UI.
* A camada de UI nao deve bloquear pointer events da mesa fora dos controles visiveis.
* A posicao do token deve ser calculada em coordenadas logicas do grid, nao como percentual da tela.
* Ao aumentar ou diminuir o tamanho do grid, o token permanece no mesmo ponto logico do quadrado ou hexagono.
* O diametro visual do token acompanha `VttGridSettings.size`.
* A posicao do token nao e persistida no banco neste MVP.
* A posicao do token e sincronizada em tempo real com Mestre e Players online enquanto a sessao esta ativa.
* Usuarios que entram depois recebem o snapshot atual de tokens da sessao.
* A ferramenta `Medir` deve poder ser ativada pela toolbar do VTT.
* No grid quadrado, pressionar no ponto A, arrastar e soltar no ponto B deve mostrar a distancia em metros.
* No grid quadrado, `VttGridSettings.size` representa apenas o lado visual da celula em pixels.
* No grid quadrado, `VttGridSettings.squareMeters` representa a area em metros quadrados de uma celula.
* No grid quadrado, `VttGridSettings.squareMeasurementColor` representa a cor do tracejado da regua.
* No grid quadrado, `VttGridSettings.squareMeters` deve aceitar apenas os valores permitidos pela escala: 1 a 10 de 1 em 1, depois de 5 em 5 ate 100, depois de 10 em 10 ate 1000, depois de 1000 em 1000 ate 10000.
* No grid quadrado, a distancia em metros deve ser `(distanciaEmPixels / VttGridSettings.size) * sqrt(VttGridSettings.squareMeters)`.
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

## 5. Configuracao Visual do Grid

Tipo local usado pelo VTT:

```ts
type VttGridShape = 'square' | 'hex'

type VttGridSettings = {
  visible: boolean
  shape: VttGridShape
  size: number
  squareMeters: number
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
* Quando o formato for quadrado, o modal deve exibir controle para configurar a area do quadrado em metros quadrados.
* O controle de area do quadrado deve seguir o mesmo padrao visual dos controles de tamanho e espessura, exibindo o valor selecionado.
* Quando o formato for quadrado, o modal deve exibir controle para configurar a cor do tracejado da regua.
* Quando o formato for hexagonal, o modal deve exibir controle para configurar a cor de preenchimento dos hexagonos pintados.
* A espessura das linhas deve respeitar minimo de `1px` e maximo de `4px`.
* A cor das linhas deve ser configuravel por input de cor.
* O fundo padrao da mesa deve manter a paleta atual sem o grid estatico antigo.
* A configuracao pertence ao layout persistente da campanha no frontend.
* A configuracao deve ser preservada no cliente do mestre ao iniciar ou encerrar sessao.
* A configuracao deve ser sincronizada via Socket.IO com jogadores na sala da campanha.
* O backend deve aceitar alteracoes de grid apenas de socket autenticado como mestre ativo da campanha.
* Jogadores recebem `vtt:grid:changed`, mas nao podem emitir alteracoes aceitas pelo servidor.
* A configuracao nao deve ser persistida no banco neste MVP.
* O modal deve permitir fechar sem desmontar a mesa.

Eventos Socket.IO:

```ts
type VttGridChangedPayload = {
  campaignId: string
  settings: VttGridSettings
}
```

* `vtt:grid:update`: emitido pelo mestre para atualizar a configuracao da campanha.
* `vtt:grid:changed`: emitido pelo servidor para a sala da campanha e para jogador ao entrar.

## 6. Token Realtime do Player

Tipo usado pelo VTT:

```ts
type VttPlayerToken = {
  id: string
  characterId: string
  name: string
  avatarUrl: string | null
  position: {
    x: number
    y: number
  }
}

type VttPlayerTokenChangedPayload = {
  campaignId: string
  token: VttPlayerToken
}

type VttPlayerTokensSnapshotPayload = {
  campaignId: string
  tokens: VttPlayerToken[]
}
```

Regras:
* `position.x` e `position.y` representam o centro do token em unidades logicas do grid.
* Para renderizar, `pixelCenter = position * VttGridSettings.size`.
* O tamanho visual do token e `VttGridSettings.size`, preservando proporcao ao alterar o grid.
* Ao criar/recentralizar, o token fica no centro da area de grid, arredondado para o centro logico mais proximo.
* Para grid quadrado, o snap usa centros `n + 0.5`.
* Para grid hexagonal, o snap usa os centros reais dos hexagonos renderizados, incluindo deslocamento horizontal alternado por linha.
* Um clique no menu `Token` deve ser processado uma unica vez; mudancas posteriores de grid ou viewport nao podem recentralizar o token automaticamente.
* A posicao logica do token nao deve ser rebaixada para o limite visivel quando a janela ou o tamanho do grid muda.
* O limite visual deve ser aplicado apenas durante o drag, nunca durante a renderizacao passiva.
* O drag deve prender o centro do token entre metade de uma celula e o limite visual da area de grid.
* Apenas `PLAYER` ativo ve o menu `Token` no sidebar neste MVP.
* O menu `Token` nao navega e nao abre modal; ele emite atualizacao realtime para a mesa.
* Apenas o dono do personagem pode criar ou mover o proprio token.
* O backend aceita atualizacoes de token apenas de socket autenticado, dentro da sala da campanha e com sessao ativa.
* Ao receber atualizacao valida, o backend armazena o token em memoria e emite para `campaign:{campaignId}`.
* Ao entrar em uma sessao ativa, o cliente recebe `vtt:tokens:snapshot`.
* Ao desconectar um Player, o backend remove seu token da memoria da sessao e emite `vtt:token:removed`.
* Ao encerrar a sessao, tokens da campanha sao descartados.

Eventos Socket.IO:

* `vtt:token:update`: emitido pelo Player para criar/recentralizar/mover o proprio token.
* `vtt:token:changed`: emitido pelo servidor para toda a sala quando um token muda.
* `vtt:tokens:snapshot`: emitido pelo servidor ao usuario entrar na sala da campanha.
* `vtt:tokens:request`: emitido pelo cliente para pedir novamente o snapshot atual da sessao.
* `vtt:token:removed`: emitido pelo servidor quando o token deixa de existir na sessao.

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

Tipo local usado pelo VTT:

```ts
type VttDiceRollAnimation = {
  id: number
  sides: 4 | 6 | 8 | 10 | 12 | 20
  value: number
  characterId: string
  characterName: string
  rolledAt: number
}

type VttDiceRollVisualState = 'idle' | 'rolling' | 'settled' | 'fading'
```

Regras:
* `id` muda a cada rolagem para reiniciar a animacao.
* `sides` define a geometria aproximada do dado 3D.
* `value` e o mesmo valor enviado para o chat.
* A animacao deve ser renderizada em overlay absoluto sobre a area do grid.
* A animacao deve sumir automaticamente apos terminar.
* A camada visual e efemera e nao deve ser persistida no banco.
* A camada visual deve ser sincronizada em tempo real para todos os usuarios dentro da sessao ativa da campanha.
* A camada R3F deve permanecer montada enquanto a mesa estiver montada; cada rolagem apenas troca o comando ativo da animacao.
* O estado da rolagem visual deve ficar isolado dentro do overlay de dados para nao re-renderizar `CampaignLayout`.
* A camada 3D deve usar componentes declarativos gerados via `gltfjsx` a partir dos arquivos GLB existentes em `/models`.
* A camada 3D deve usar `pointer-events: none` e nunca impedir interacoes com ferramentas, tokens, medicoes, chat ou paineis.
* O grid deve ser tratado como a superficie 2D da mesa para o dado; a animacao nao pode terminar apoiada em quina ou em repouso visual instavel.
* A rolagem visual deve ser uma animacao controlada e estavel, sem simulacao fisica real no MVP.
* O backend/socket define o resultado autoritativo; o frontend deve animar ate o quaternion calibrado correspondente a `value`.
* O mapa de faces nao pode usar fallback matematico proporcional ao numero de lados, como rotacionar apenas em Y por `(face / sides) * 2pi`; cada face deve usar quaternion ortogonal/calibrado para o GLB correspondente.
* Durante `rolling`, a posicao inicial do dado deve ficar no extremo direito do plano da camera/mesa, com `X` positivo e `Z` inicial pseudoaleatorio.
* Durante `rolling`, a velocidade horizontal inicial deve apontar para a esquerda, com componente `Z` pseudoaleatoria para gerar diagonais organicas.
* O controlador deve aplicar atrito horizontal por frame para reduzir gradualmente `vx` e `vz`, evitando movimento linear infinito.
* Se o dado atingir o limite esquerdo durante `rolling`, o controlador deve inverter `vx` com perda de energia, como `vx *= -0.5`, e prender a posicao no limite.
* O eixo Y representa altura/quique; o controlador deve aplicar gravidade, colisao com a superficie visual do grid e restituicao reduzida para 2 a 3 quiques perceptiveis.
* Enquanto houver velocidade horizontal relevante, a rotacao incremental deve ser proporcional a distancia percorrida no plano XZ e usar eixo perpendicular ao vetor de movimento.
* O quaternion calibrado da face sorteada deve representar a face voltada para `+Y`, paralela a superficie do grid, nao apenas a face frontal para a camera.
* A orientacao visual deve ser composta como `targetQuaternion * residualRotation`, onde `targetQuaternion` e a face autoritativa e `residualRotation` representa a energia rotacional restante.
* A rolagem deve aplicar velocidade angular caotica e rotacao por atrito no `residualRotation`; esse offset deve se desgastar por atrito ate identidade conforme o dado perde energia.
* Quando velocidade horizontal e energia vertical estiverem baixas, o controlador deve apenas acelerar o desgaste do `residualRotation` ate identidade, sem puxar abruptamente o dado por um slerp global de fim.
* Ao fim de `rolling`, translacao e quique devem parar completamente e o dado deve cravar no quaternion calibrado antes de entrar em `settled`.
* O controlador visual deve aceitar multiplas rolagens ativas simultaneas.
* Cada dado ativo deve controlar localmente sua maquina de estados (`idle`, `rolling`, `settled`, `fading`) via refs e `useFrame`, sem disparar renders React por frame.
* Quando um dado termina `fading`, ele deve notificar o controlador principal para ser removido da lista de rolagens ativas.
* A rolagem visual nao deve exibir etiqueta/tooltip redundante abaixo do dado nem numero 3D descolado do modelo; o resultado compartilhado deve vir da face calibrada do modelo e da mensagem do chat.
* A rota `/dev/dice-calibration` deve existir apenas em `import.meta.env.DEV` e oferecer controles de camera/orbita e copia de quaternion para calibracao das faces.

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

* `vtt:dice:roll`: emitido por usuario ativo na sessao para publicar uma ou mais rolagens visuais efemeras.
* `vtt:dice:rolled`: emitido pelo servidor para `campaign:{campaignId}` quando a rolagem for valida.
* O servidor deve aceitar apenas rolagens de sockets autenticados, dentro da sala da campanha e com sessao ativa.
* `value` deve estar entre `1` e `sides`.
* O payload de saida deve sempre preencher `rolls`; `roll` pode existir apenas para compatibilidade com consumidores antigos.
