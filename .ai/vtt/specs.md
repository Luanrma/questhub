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
* A posicao do token deve ser calculada em coordenadas logicas do grid, nao como percentual da tela.
* Ao aumentar ou diminuir o tamanho do grid, o token permanece no mesmo ponto logico do quadrado ou hexagono.
* O diametro visual do token acompanha `VttGridSettings.size`.
* A posicao do token nao e persistida no banco neste MVP.
* A posicao do token e sincronizada em tempo real com Mestre e Players online enquanto a sessao esta ativa.
* Usuarios que entram depois recebem o snapshot atual de tokens da sessao.

## 5. Configuracao Visual do Grid

Tipo local usado pelo VTT:

```ts
type VttGridShape = 'square' | 'hex'

type VttGridSettings = {
  visible: boolean
  shape: VttGridShape
  size: number
  lineWidth: number
  color: string
}
```

Regras:
* O botao `Grid` da barra de ferramentas abre um modal de configuracao apenas para `MASTER`.
* Para `PLAYER`, o botao/menu de configuracao do grid nao deve aparecer.
* O grid pode ser quadrado ou hexagonal.
* O tamanho da celula deve respeitar minimo de `24px` e maximo de `96px`.
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
