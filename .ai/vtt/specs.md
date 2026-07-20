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
* Associacao com identidade/personagem e opcional; token generico sem `characterId` e valido.
* Cena armazena mapa, grid, configuracao visual, paredes e portas.
* O Mestre pode selecionar e visualizar qualquer cena preparada enquanto a sessao estiver offline; a cena ativa escolhida deve ser persistida e restaurada sem exigir entrada em room de sessao.
* Campanha pode existir sem nenhuma cena preparada; o VTT nao cria nem exige uma `Cena 1` automaticamente.
* Deletar a ultima cena preparada deixa a campanha sem cena ativa/preparada, sem recriar draft automatico e sem disparar recarregamento em loop.
* Paredes e portas usam coordenadas da cena, persistem com ela e sincronizam por websocket.
* Paredes e portas fechadas bloqueiam movimento de jogadores; portas abertas nao bloqueiam.
* A visibilidade visual de um segmento para jogadores e independente de sua colisao.
* A toolbar nao exibe ferramenta de regua; medicao de deslocamento e iniciada exclusivamente a partir de um Token controlavel.
* A troca do formato do grid entre quadrado e hexagonal aplica e persiste o novo formato no primeiro clique.
* `Ctrl+arraste` com a ferramenta Parede ativa cria um retangulo composto por quatro segmentos; o arraste comum cria um unico segmento.
* Portas sao inseridas sobre segmentos de parede quando houver intersecao/proximidade valida e podem ser abertas, trancadas, obstruidas ou encostadas pelo menu contextual.
* Abrir uma porta limpa automaticamente os estados trancada, obstruida e encostada.
* Camera por campanha e persistida separadamente.
* Nenhum payload base contem campos mecanicos, ruleset, ficha, bestiario, inventario, economia, PV, CA, magia, condicao ou efeito ativo.
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
* Fato do servidor: `vtt:token:movement-started` para os sockets que visualizam a cena.
* Erros previstos: `INVALID_PAYLOAD`, `FORBIDDEN`, `TOKEN_NOT_FOUND`, `TOKEN_MOVING`, `NOT_ACTIVE_TURN` e `INVALID_MOVE`.
* O primeiro ponto deve coincidir com a posicao autoritativa atual e o trajeto deve possuir ao menos um segmento efetivo.
* O servidor nao aceita novo movimento do mesmo Token enquanto a timeline anterior estiver ativa.
* A toolbar pode ser recolhida para um unico botao e, ao recolher, limpa ferramentas e overlays transitorios.
* A sidebar direita abre recolhida e usa abas para combate, participantes, sessao, cenas e chat.
* A aba de cenas e exclusiva do Mestre e e a entrada principal para selecionar e preparar cenas.

## Tokens agnósticos e controle

* A campanha é o limite de isolamento do mundo: Tokens, posicionamentos, cenas, controles e vínculos não podem referenciar recursos de outra campanha.
* `CampaignMember` representa o `User` dentro de uma campanha e é único por `campaignId` e `userId`.
* `CampaignToken.controllerMemberId` aponta opcionalmente para o único jogador controlador dentro da mesma campanha.
* Um `Character` pode ser criado pelo `User` antes de entrar em uma campanha; depois de vinculado por `CampaignCharacter`, participa de exatamente uma campanha e não pode ser reutilizado em outra.
* Um Token só pode ser vinculado a um `Character` participante da mesma campanha.

A especificação detalhada está em [token-architecture.md](./token-architecture.md).

* `CampaignToken` é uma entidade da campanha e pode existir sem `characterId` e sem posicionamento.
* `CampaignToken` guarda nome, imagem, cor, tamanho, vínculo com `Character`, controlador e permissão adicional de personalização.
* `CampaignTokenPlacement` representa a presença do Token em uma cena e possui `tokenId`, `sceneId`, `positionX`, `positionY`, rotação, camada e visibilidade.
* Cada `CampaignToken` possui no máximo um `CampaignTokenPlacement`; `tokenId` deve ser único no posicionamento.
* Remover o Token da cena exclui somente o posicionamento; colocar o Token no grid cria um novo posicionamento com coordenadas escolhidas pelo Mestre.
* Ao arrastar um Token sem posicionamento do painel para o grid da cena ativa, o navegador deve aceitar a operacao de movimento e o cliente deve emitir `vtt:token:place` com o centro normalizado na celula de destino.
* Um novo posicionamento começa com rotação `0`, camada padrão de Tokens e visibilidade ativada.
* Não existe transferência direta entre cenas: o Mestre remove o posicionamento atual e depois cria outro por meio do painel de Tokens.
* Tokens sem posicionamento permanecem disponíveis no painel da toolbar.
* Remover um Token da cena atual deve atualizar imediatamente o estado local e recoloca-lo na toolbox, antes da confirmacao propagada pelo servidor.
* A acao em massa `Cena` remove somente os posicionamentos da cena atual e preserva todos os Tokens.
* A acao em massa `Todos` remove os posicionamentos de todas as cenas e preserva todos os Tokens da campanha; ela nunca executa exclusao de `CampaignToken`.
* A exclusao de um Token acontece somente pelo icone de lixeira no proprio card da toolbox ou pela acao `Excluir Token` em `Configuracoes` no menu contextual da cena.
* Excluir uma cena remove seus posicionamentos, mas preserva os Tokens da campanha.
* Alterar a cena ativa ou visualizada não move Tokens automaticamente.
* O painel ordena primeiro os Main Characters, depois os Tokens secundários controlados por jogadores e, por último, os Tokens exclusivos do Mestre.
* O vínculo opcional entre Token e `Character` é exclusivo nos dois sentidos: um Token referencia no máximo um `Character`, e um `Character` não pode estar vinculado a mais de um Token.
* Para o VTT Core, `Character` é somente uma identidade; o módulo não acessa nem valida ficha, `GameSystem`, Package, bestiário ou ruleset.
* O Mestre controla todos os Tokens da campanha.
* O clique com o botao direito em um Token controlavel abre um menu contextual de primeiro nivel com a opcao `Configuracoes`; ao aciona-la, um submenu exibe somente as configuracoes e acoes autorizadas para o usuario atual.
* Um jogador pode controlar vários Tokens, mas cada Token possui no máximo um jogador controlador além do Mestre.
* O controle pertence ao `CampaignMember` do jogador, não ao `User` global nem ao `Character`; é persistido entre sessões e permanece quando o posicionamento muda.
* Um Token sem `characterId` também pode possuir um jogador controlador persistente.
* Vincular ou desvincular um `Character` não remove automaticamente o controlador existente.
* Conceder o controle a outro jogador substitui o controlador anterior.
* O controle-base permite selecionar, movimentar, rotacionar, medir deslocamento e usar interações operacionais permitidas no tabuleiro.
* O controle-base não permite alterar nome, imagem, tamanho, camada, visibilidade, vínculo, controlador, cena ou excluir o Token.
* Duplo clique com o botao esquerdo seleciona um Token controlavel e exibe seus controles de transformacao. Clique fora do Token ou `Escape` limpa a selecao.
* O duplo clique continua disponivel depois de interagir com a toolbar ou paineis laterais. Quando necessario, ele encerra a ferramenta transitoria atual, ativa `Selecionar` e entao seleciona o Token. A selecao manual de alvos `TARGET` permanece exclusiva enquanto estiver ativa.
* A selecao do Mestre exibe quatro handles diagonais proximos ao Token para redimensionamento proporcional e um handle superior afastado, ligado por uma haste tracejada, para rotacao. O tamanho varia em passos de `0.25`, entre `0.25x` e `20x`, preservando o centro do Token.
* A selecao do jogador controlador exibe o handle de rotacao, mas nao os handles de tamanho, pois o controle-base nao autoriza alterar `CampaignToken.size`.
* Arrastar um handle produz preview local continuo e confirma apenas um update ao soltar. Rotacao usa o evento autoritativo existente `vtt:token:rotate`; tamanho usa a atualizacao HTTP de metadados do Token, restrita ao Mestre.
* Ao cruzar o eixo angular inicial, o preview de rotacao deve continuar pelo menor delta entre eventos consecutivos, sem animar uma volta de 360 graus. O handle de rotacao permanece sobre o topo visual do Token durante todo o gesto.
* O Mestre pode conceder ao jogador controlador uma única permissão adicional de personalização, que autoriza conjuntamente a alteração de nome e imagem.
* O jogador controlador não pode remover o Token de uma cena nem posicioná-lo em outra.
* Quando o jogador controlador deixa a campanha, `controllerMemberId` é removido automaticamente; o Token permanece sob autoridade do Mestre.
* O Main Character é o único `CampaignCharacter` ativo com `role = PLAYER` para aquele jogador na campanha.
* `SECONDARY` não é um `CampaignCharacterRole`: qualquer Token controlado por um jogador, exceto o Token de seu Main Character, é classificado de forma derivada como Token secundário desse jogador.
* Um Token secundário pode existir com ou sem `characterId`; transferir ou revogar seu controlador atualiza a classificação sem persistência duplicada.
* O jogador do Main Character recebe automaticamente o controle do Token vinculado; o Mestre pode transferir esse controle sem alterar a propriedade do `Character`.
* Controlar um Token não concede automaticamente permissão para editar o `Character` nem dados mantidos por módulos externos.
* Somente o Mestre pode criar, remover ou substituir o vínculo entre Token e `Character`.
* Excluir o `Character` vinculado preserva o Token, o posicionamento, a aparência e o controlador, removendo somente o vínculo.
* Excluir o `CampaignToken` remove seu posicionamento e seu vínculo, mas nunca exclui o `Character` associado.
