# VTT: Contratos

* Mestre ativo pode criar e editar cenas e tokens.
* Jogador ativo acessa a mesa enquanto o mestre esta online.
* Token armazena posicao, tamanho, visibilidade, rotacao, camada, nome visual e imagem/cor opcional.
* Criar um Token generico deve ser uma acao imediata de um clique, persistindo `Novo Token` sem imagem e sem abrir formulario intermediario.
* Depois da criacao, o Mestre ou controlador com permissao de personalizacao pode editar o nome e escolher uma imagem do catalogo gerado recursivamente a partir de `apps/web/public/tokens/`; o cliente persiste a escolha como URL publica relativa sob `/tokens/`.
* O contrato HTTP de criacao e atualizacao de Token aceita tanto URLs absolutas validas quanto assets locais sob `/tokens/`, rejeitando caminhos relativos externos a esse prefixo e segmentos de traversal.
* Criar um Token generico persiste `avatarUrl = null`; a biblioteca de imagens default nunca e persistida no banco.
* Ao escolher uma imagem, `CampaignToken.avatarUrl` persiste somente a referencia: path publico local, URL externa ou, quando integrado ao storage, a referencia canonica resolvida pelo modulo `assets`; conteudo binario, catalogo e URL assinada temporaria nao pertencem ao Token.
* Se uma referencia local persistida deixar de existir, a UI deve exibir o fallback com a inicial do Token e o seletor nao deve listar o arquivo removido.
* Token sem imagem deve possuir `color` valida e renderizar uma letra entre `A` e `Z` derivada deterministicamente de `token.id`; esse estado nunca pode ser transparente.
* Token com imagem usa `color = null` por padrao e preserva transparencia do arquivo, sem preenchimento artificial.
* Token com imagem pode receber `color` opcional para renderizar um fundo circular atras da arte; a imagem usa ajuste de conteudo sem recorte do PNG transparente.
* Token com imagem e `color = null` nao renderiza anel, borda ou fundo circular default; indicadores transitorios de selecao, combate ou efeito continuam permitidos quando ativos.
* Ao vincular uma nova imagem sem enviar cor explicitamente, o backend normaliza `color = null`. Ao remover a imagem sem enviar cor valida, o backend aplica a cor default segura.
* A letra fallback nao cria coluna, campo de API ou persistencia adicional no banco.
* A ultima cor escolhida e preferencia local do cliente e serve de default para novos Tokens e edicoes sem imagem; cada Token persiste sua propria cor efetiva para sincronizacao.
* Associacao com identidade/personagem e opcional; Token genérico sem `actorId` é válido.
* Cena armazena mapa, grid, configuracao visual, paredes, portas, janelas e configuracao opcional de FOG.
* O Mestre pode selecionar e visualizar qualquer cena preparada enquanto a sessao estiver offline; a cena ativa escolhida deve ser persistida e restaurada sem exigir entrada em room de sessao.
* Campanha pode existir sem nenhuma cena preparada; o VTT nao cria nem exige uma `Cena 1` automaticamente.
* Deletar a ultima cena preparada deixa a campanha sem cena ativa/preparada, sem recriar draft automatico e sem disparar recarregamento em loop.
* Paredes, portas e janelas usam coordenadas da cena, persistem com ela e sincronizam por websocket.
* Paredes e portas fechadas bloqueiam movimento de jogadores; portas abertas nao bloqueiam.
* A visibilidade visual de um segmento para jogadores e independente de sua colisao.
* Marcacoes de parede, porta e janela somente sao renderizadas para Players quando `playerVisible = true`; ocultar a marcacao nunca desativa sua colisao.
* A toolbar nao exibe ferramenta de regua; medicao de deslocamento e iniciada exclusivamente a partir de um Token controlavel.
* A troca do formato do grid entre quadrado e hexagonal aplica e persiste o novo formato no primeiro clique.
* A configuracao de grid deve distinguir `size`, tamanho visual da celula em pixels, de `metersPerCell`, distancia fisica representada por cada quadrado ou hexagono.
* A escala fisica deve ser ajustada em metros por um slider discreto exibido junto ao controle de tamanho visual, para ambos os formatos, atualizando o `metersPerCell` canonico.
* Os valores permitidos de `metersPerCell` sao: `0,5m`; de `1m` a `10m` em passos de `1m`; de `20m` a `100m` em passos de `10m`; e de `200m` a `1000m` em passos de `100m`.
* Valores legados ou externos fora da lista permitida devem ser normalizados para a opcao mais proxima; em caso de empate, prevalece o menor valor.
* A UI nao deve exibir campos numericos separados de metros e pes. Deve manter a equivalencia informativa `1 celula = Xm = Yft` e quantos pixels no mapa representam essa distancia, seguindo a mesma conversao de `Effect Area`; nenhum valor em pes e persistido separadamente.
* `Ctrl+arraste` com a ferramenta Parede ativa cria um retangulo composto por quatro segmentos; o arraste comum cria um unico segmento.
* Portas sao inseridas sobre segmentos de parede quando houver intersecao/proximidade valida e podem ser abertas, trancadas, obstruidas ou encostadas pelo menu contextual.
* Abrir uma porta limpa automaticamente os estados trancada, obstruida e encostada.
* Camera por campanha e persistida separadamente.
* Nenhum payload base contem campos mecanicos, ruleset, ficha, bestiario, inventario, economia, PV, CA, magia, condicao ou efeito ativo.
* `apps/api/src/server.ts` nao conhece sistemas concretos nem registra rotas de
  ficha, bestiario, item, spell ou qualquer capacidade de `game_systems`.
* Se o VTT precisar listar sistemas suportados, o contrato compartilhado se
  limita a descritores neutros de nome/chave, sem schemas, handlers ou regras.
* O menu esquerdo abre mais de um painel flutuante sem navegar para fora nem desmontar a mesa.
* Cada painel flutuante pode receber foco, ser movido, redimensionado, minimizado e fechado de forma independente.
* `Escape` fecha o menu esquerdo quando ele estiver aberto e limpa a selecao/ferramenta ativa da mesa quando o foco nao estiver em campo editavel.
* Segurar `Alt` ativa navegacao temporaria do mapa; soltar `Alt` restaura a ferramenta anterior.
* `Ctrl+Z` ou `Cmd+Z` desfaz a ultima criacao de parede enquanto a ferramenta de paredes estiver ativa.
* `Ctrl` + botao esquerdo em um Token controlavel inicia medicao de deslocamento a partir da posicao atual do Token, em grid quadrado ou hexagonal.
* O `Ctrl` e exigido somente no clique inicial sobre o Token. Depois que o modo de movimentacao estiver ativo, cada clique simples no grid fixa imediatamente a proxima secao, formando os pontos `A`, `B`, `C` e seguintes.
* Nao e necessario manter `Ctrl`, segurar o botao esquerdo ou arrastar o mouse para demarcar o trajeto.
* Clicar em uma interseccao ja fixada preserva esse ponto e remove todas as interseccoes seguintes.
* Antes de inserir um ponto, o cliente valida o segmento entre o ultimo ponto fixado e o ponto clicado. Se o segmento cruzar uma parede ou porta fechada, o novo ponto nao e criado.
* Durante o arraste direto de um Token controlado por Player, o cliente valida cada deslocamento contra paredes, portas fechadas e janelas fechadas antes do preview e da emissao; o backend repete a validacao autoritativa.
* `Espaco` confirma o trajeto e envia um unico comando autoritativo; o servidor valida controle, cena, Encounter Mode, turno ativo e colisao de cada segmento antes de publicar o movimento.
* O fato de movimento contem o trajeto aceito, `startedAt` e `durationMs`. Todos os clientes interpolam o Token pela mesma timeline; frames intermediarios nao sao enviados pelo WebSocket.
* A duracao segue curva adaptativa definida pelo servidor: `clamp(450 + 180 * distanciaEmCelulas^0.86, 550, 6000)` milissegundos. O ritmo base e deliberadamente mais lento, enquanto trajetos longos ainda ganham velocidade para nao se tornarem cansativos.
* A linha tracejada permanece visivel durante toda a timeline e e removida somente quando o Token alcanca o ponto final.
* Ao concluir a timeline, a posicao final confirmada passa a ser o estado vivo e persistivel do Token.
* Fora de um encontro ativo, o arraste direto continua permitido para Mestre e PLAYER controlador. Durante um encontro, PLAYER nao pode mover Token por arraste direto.
* Durante um encontro, PLAYER pode confirmar movimento medido somente para o Token do turno ativo, desde que tambem seja seu controlador. O Mestre preserva movimentacao direta e medida de qualquer Token controlavel por ele.

### Contratos WebSocket de movimento medido

```ts
type VttTokenMovePathCommand = {
  campaignId: string
  sceneId: string
  tokenId: string
  path: Array<{ x: number; y: number }> // 2..100 pontos
}

type VttTokenMovementStartedEvent = VttTokenMovePathCommand & {
  startedAt: number
  durationMs: number
}
```

* Comando do cliente: `vtt:token:move-path`, com ACK padrao de sucesso ou erro.
* Comando do cliente: `vtt:token:move`, com ACK padrao; rejeicao restaura posicao e exploracao provisoria no cliente.
* Fato do servidor: `vtt:token:movement-started` para os sockets que visualizam a cena.
* Erros previstos: `INVALID_PAYLOAD`, `FORBIDDEN`, `TOKEN_NOT_FOUND`, `TOKEN_MOVING`, `NOT_ACTIVE_TURN` e `INVALID_MOVE`.
* O primeiro ponto deve coincidir com a posicao autoritativa atual e o trajeto deve possuir ao menos um segmento efetivo.
* O servidor nao aceita novo movimento do mesmo Token enquanto a timeline anterior estiver ativa.
* A toolbar pode ser recolhida para um unico botao e, ao recolher, limpa ferramentas e overlays transitorios.
* A sidebar direita abre recolhida e usa abas para combate, participantes, sessao, cenas e chat.
* A aba de cenas e exclusiva do Mestre e e a entrada principal para selecionar e preparar cenas.

## Fog of War

* O FOG fica desativado por padrao e e configurado por cena.
* A visao do jogador e relativa a um unico Token selecionado, com fallback para o Token do ator principal.
* Sem ator principal posicionado na cena exibida, o jogador ve a cena coberta quando o FOG deve ser preservado.
* A memoria de exploracao pertence ao Token e nao e compartilhada automaticamente.
* O Mestre configura visao, iluminacao, bloqueadores e capacidades noturnas.
* Ao forcar uma cena para todos, o Mestre escolhe entre preservar o FOG ou revelar temporariamente o mapa inteiro.
* O renderer e os contratos completos de visao, luz, exploracao, persistencia e realtime pertencem a [`fog_of_war`](../fog_of_war/specs.md).

## Tokens agnósticos e controle

* `CampaignToken` é uma entidade visual independente e pode existir sem ator vinculado.
* `CampaignActor` é uma entidade da campanha e não possui `userId`, papel ou status de membro.
* `CampaignMember` concentra participação, papel, status e ator principal opcional.
* O vínculo `CampaignToken.actorId` é opcional e exclusivo nos dois sentidos.
* Token, ator, membro controlador e cena devem pertencer à mesma campanha.
* Excluir um ator preserva o Token; excluir um Token preserva ator, ficha e inventário.
* `MAIN`, `SECONDARY` e `MASTER_ONLY` são classificações derivadas.
* O controle do Token pertence a `CampaignMember` e não concede automaticamente edição da ficha.
* O Mestre pode criar Tokens sem ator, vinculá-los depois e transferir seu controle.
* Posicionamento continua separado de `CampaignToken` por `CampaignTokenPlacement`.
* Regras completas estão em `.ai/vtt/token-architecture.md`.
