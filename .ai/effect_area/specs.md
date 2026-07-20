# Modulo: Templates de Area - Specs e contratos

## 1. Fronteira e contratos envolvidos

O bounded context `effect_area` e proprietario de `CampaignAreaTemplate` e `SceneAreaEffect`. `campaign_scene` fornece somente o contexto visual necessario: identificador da cena, escala, grid, paredes e tokens.

Camadas afetadas: banco, API HTTP, dominio geometrico frontend, estado React, toolbar e overlays do VTT, testes e documentacao.

## 2. Tipos canonicos

```ts
type AreaShape = 'CIRCLE' | 'CONE' | 'LINE' | 'ORTHOGONAL' | 'RING' | 'POLYGON' | 'TARGET'
type AreaVolumeShape = 'NONE' | 'SPHERE' | 'CYLINDER' | 'CUBE' | 'CUSTOM'
type MeasurementMode = 'WORLD_UNIT' | 'GRID_CELLS'
type AreaOriginMode = 'SOURCE_TOKEN' | 'TARGET_TOKEN' | 'FREE_POINT' | 'GRID_CELL' | 'GRID_INTERSECTION'
type AreaPlacementMode = 'POINT' | 'DIRECTIONAL' | 'ATTACHED' | 'DRAWN'
type AreaPropagationMode = 'BLOCKED_BY_WALLS' | 'SPREAD_AROUND_WALLS' | 'IGNORE_WALLS'
type AreaPersistenceMode = 'PREVIEW_ONLY' | 'INSTANT' | 'PERSISTENT'
type AreaMovementMode = 'STATIC' | 'FOLLOW_SOURCE' | 'MANUAL'
type CellInclusionRule = 'ANY_OVERLAP' | 'CENTER_INSIDE' | 'HALF_OR_MORE' | 'FULLY_INSIDE'
type TokenIntersectionRule = CellInclusionRule | 'COVERED_CELLS' | 'MANUAL'
type AreaVisibility = 'MASTER_ONLY' | 'ALL_PLAYERS' | 'SELECTED_PLAYERS'
type AreaVisualEffect = 'DEFAULT' | 'FIRE' | 'ELECTRIC' | 'HEALING' | 'EARTH' | 'VINES' | 'LEAVES'
```

`CampaignAreaTemplate` segue o contrato detalhado em `questhub-area-templates-spec.md`, com `dimensions`, `duration`, `style`, `style.visualEffect` e `affectedTokenRing` embutidos. Datas sao strings ISO na API. Templates antigos sem `visualEffect` sao normalizados como `DEFAULT`.

Para `shape = TARGET`, `dimensions.targetCount` e obrigatorio, inteiro entre 1 e 100. O template usa `originMode = TARGET_TOKEN`, `placementMode = POINT`, `tokenIntersectionRule = MANUAL`, `persistenceMode = INSTANT` e nao produz poligono, celulas cobertas ou `SceneAreaEffect`.

`SceneAreaEffect` contem `campaignId`, `sceneId`, ids opcionais de template/source/target, origem, rotacao, escala, snapshot completo, estado e datas.

## 3. Persistencia Prisma

### CampaignAreaTemplate

* PK `id`; FK `campaignId` com cascade; `createdByUserId` sem FK para preservar autoria textual.
* Campos organizacionais escalares; `tags`, `dimensions`, `duration` e `style` em JSON.
* Indices por `(campaignId, name)` e `createdByUserId`.

### SceneAreaEffect

* PK `id`; FK `campaignId` e `sceneId` com cascade.
* `templateId` opcional com `onDelete: SetNull`.
* `configurationSnapshot` em JSON independente.
* Indice por `(campaignId, sceneId, state)`.

Migracao: aditiva, sem reescrita de dados existentes.

## 4. API HTTP

Todos os endpoints usam cookie de sessao existente.

* `GET /api/campaigns/:campaignId/area-templates` - membro ativo; lista da campanha.
* `POST /api/campaigns/:campaignId/area-templates` - Mestre; cria; `201`.
* `PATCH /api/campaigns/:campaignId/area-templates/:templateId` - Mestre; atualiza somente na campanha.
* `POST /api/campaigns/:campaignId/area-templates/:templateId/duplicate` - Mestre; copia com novo id e o proximo nome disponivel no formato `<nome-base> CopiaN`.
* `DELETE /api/campaigns/:campaignId/area-templates/:templateId` - Mestre; remove template e preserva snapshots.
* `GET /api/campaigns/:campaignId/scenes/:sceneId/area-effects` - membro que pode ver a cena; filtra `MASTER_ONLY` para jogadores.
* `POST /api/campaigns/:campaignId/scenes/:sceneId/area-effects` - Mestre; cria a partir do template atual e snapshot do servidor; `201`.
* `PATCH /api/campaigns/:campaignId/scenes/:sceneId/area-effects/:effectId` - Mestre; altera apenas origem, rotacao e escala da instancia, preservando o snapshot e o template.
* `DELETE /api/campaigns/:campaignId/scenes/:sceneId/area-effects/:effectId` - Mestre; remove somente na campanha/cena.

Eventos confirmados usam a room `campaign:<campaignId>`:

* `area-effect:created` - emitido depois da persistencia para instancias `ALL_PLAYERS`;
* `area-effect:updated` - emitido depois da edicao confirmada de uma instancia `ALL_PLAYERS`;
* `area-effect:removed` - emitido depois da exclusao confirmada.

Previews nao produzem evento de rede.

Erros: `400` payload invalido, `403` acesso/permissao, `404` recurso fora do escopo ou inexistente, `409` conflito de integridade.

## 5. Validacao

* Nome: 1 a 60 caracteres; descricao ate 1000; categoria ate 80; no maximo 20 tags de 40 caracteres.
* Ao duplicar, sufixos antigos `(copia)` e sufixos numericos `CopiaN` sao removidos para obter o nome-base. O servidor consulta os nomes da campanha e gera `Copia1`, `Copia2` e assim por diante, sem colisoes e respeitando o limite de 60 caracteres.
* Cores em hexadecimal; opacidade entre 0 e 1; bordas/aneis dentro de limites visuais seguros.
* `style.visualEffect` aceita `DEFAULT`, `FIRE`, `ELECTRIC`, `HEALING`, `EARTH`, `VINES` ou `LEAVES`; quando ausente em dados legados, assume `DEFAULT`.
* `tokenIntersectionRule = COVERED_CELLS` afeta um token quando qualquer parte de seu espaco logico ocupa uma celula presente em `coveredCells`; a linha de efeito por paredes continua obrigatoria quando configurada.
* Dimensoes finitas e positivas, com combinacoes obrigatorias por forma. A toolbar grava `measurementUnit = m`; a conversao para pes e somente visual.
* Cone exige comprimento e angulo entre 1 e 359 graus; linha exige comprimento e largura; circulo e ortogonal exigem raio.
* Target exige `targetCount` inteiro entre 1 e 100; dimensoes geometricas nao participam da selecao.
* Rotacao e um numero inteiro em graus; escala interna entre 0.1 e 10; origem finita.
* O servidor ignora `campaignId`, autoria e timestamps fornecidos pelo cliente.

## 6. Geometria e projecao

Ordem: converter medida para pixels da cena, construir poligono/curva, aplicar origem e rotacao, bloquear linha de efeito quando configurado, classificar celulas, intersectar tokens e renderizar.

* Circulo: distancia ao centro menor que raio para interior positivo.
* Cone: setor circular definido pela origem, comprimento e angulo.
* Linha: retangulo orientado, centrado no eixo origem-direcao.
* Ortogonal: losango continuo centrado na origem. Com inclusao por celulas, as celulas quadradas ou hexagonais candidatas sao classificadas por `ANY_OVERLAP`, `CENTER_INSIDE`, `HALF_OR_MORE` ou `FULLY_INSIDE` usando seus poligonos reais.
* Grid quadrado: celula e quadrado de lado `grid.size`.
* Grid hexagonal: celula e hexagono real conforme orientacao atual do VTT.
* Sem grid visivel: forma continua permanece e `coveredCells` fica vazio.
* Tokens sao circulos visuais com diametro `grid.size * token.size` e centro calculado pelo contrato atual de posicionamento.
* Intersecao positiva exclui tangencia pura.

## 7. Fluxo de UI

1. Mestre abre `Templates de Area` na toolbar.
2. A biblioteca abre em painel compacto: busca curta, templates em linhas unicas e acoes inline para usar/editar/duplicar/excluir. Somente o editor pode expandir a largura para acomodar o formulario.
3. O primeiro `Usar` recolhe a biblioteca, mantem a toolbar inalterada e prende ao ponteiro um marcador com o mesmo icone da ferramenta na toolbar.
4. Nenhum painel, modal ou faixa de instrucao deve substituir a biblioteca durante o posicionamento; somente o icone acompanha o mouse.
5. Antes do primeiro clique somente o marcador acompanha o mouse; a geometria ainda nao e considerada confirmada.
6. Clique fixa a origem. Para forma direcional, o movimento atualiza a direcao e um segundo clique fixa a orientacao.
7. Depois de fixar a geometria, a preview permanece imovel e mostra celulas, origem, direcao, quantidade de tokens e aneis.
8. Somente nesse estado aparece, ao lado do marcador de origem no mapa, um popover minimo com `Usar` e `Cancelar`. Ele acompanha pan/zoom e nao volta para a posicao da biblioteca. O segundo `Usar` resolve ou persiste a area.
9. `Cancelar` ou `Escape` abandona o posicionamento e reabre a biblioteca sem persistir.
10. `PREVIEW_ONLY` e `INSTANT` encerram sem criar `SceneAreaEffect`; `PERSISTENT` chama a API.
11. Instancias persistentes sao renderizadas conforme visibilidade e podem ser removidas pelo Mestre.
12. O posicionamento nao bloqueia a navegacao do mapa: `Alt` + arraste inicia pan temporario e a ferramenta `Mover` pode ser selecionada durante uma preview pronta sem descartar sua geometria ou o popover de confirmacao.
13. Enquanto o mapa e deslocado, origem, geometria e popover acompanham a transformacao do board; o gesto de pan nunca fixa, confirma ou reposiciona a area.
14. O editor oferece `Padrao`, `Fogo`, `Eletrico`, `Cura`, `Terra`, `Videiras` e `Plantas` como efeito visual. A escolha participa do template e de seu snapshot, portanto instancias existentes nao mudam quando o template e editado depois.
15. O editor apresenta todas as dimensoes em metros. Raio, comprimento e largura sao convertidos pela configuracao `metersPerCell` da cena; tamanho de celula em pixels e somente detalhe interno e nao aparece como unidade de jogo.
16. `Inclusao das celulas` define quais celulas a geometria considera afetadas. Quando o modo de atingir tokens pelas celulas esta ativo, um token que ocupa qualquer uma dessas celulas tambem e atingido. A regra nao altera raio, comprimento ou largura da area.
17. Ao editar um template legado com `measurementMode = GRID_CELLS`, o frontend multiplica suas dimensoes lineares por `metersPerCell`, altera o modo para `WORLD_UNIT` e preserva a geometria observada antes de salvar. Novos templates usam `WORLD_UNIT` e `measurementUnit = m`.
18. O checkbox `Atingir tokens pelas celulas destacadas` alterna `tokenIntersectionRule` entre `COVERED_CELLS` e `ANY_OVERLAP`. Templates novos iniciam marcados; templates antigos preservam o valor salvo. As celulas individuais sao pintadas somente em `COVERED_CELLS`; no modo geometrico, apenas a forma continua e exibida para nao sugerir que as celulas participam da regra.
19. `Inclusao das celulas` so aparece quando `Atingir tokens pelas celulas destacadas` esta marcado. Em vez de um select, exibe opcoes verticais com explicacao: qualquer parte, centro, metade ou mais, ou celula inteira. Desmarcado, o bloco desaparece porque nao participa da regra de tokens nem da pintura individual.
20. O painel nunca permite overflow horizontal. Conteudo, formularios e listas usam largura limitada ao painel e somente rolagem vertical.
21. O painel pode ser destacado como janela flutuante do sistema: cabecalho arrastavel, bordas redimensionaveis e acao para pregar novamente. Destacar ou pregar preserva busca, formulario e alteracoes ainda nao salvas.
22. Linhas da biblioteca nunca ultrapassam a largura do painel: o nome possui area limitada com elipse e titulo completo, enquanto `Usar` e as demais acoes permanecem integralmente visiveis.
23. A janela destacada permanece montada e aberta ao selecionar `Usar`, inclusive durante o posicionamento e a confirmacao da area. Ela nao oferece auto-retracao ou minimizar.
24. O modo destacado possui largura maxima de 520px e altura maxima de 640px, ainda limitadas pelo viewport. Sua altura e autocontida: cresce conforme o conteudo ate o limite, nao reserva espaco vazio e usa somente rolagem vertical quando o conteudo excede a altura disponivel.
25. O editor oferece `Target` entre as formas. Ao seleciona-lo, mostra `Quantidade maxima de alvos`, oculta dimensoes, escala, paredes, inclusao de celulas e efeito visual, e normaliza o template para selecao manual instantanea.
26. Ao usar um template `TARGET`, clicar em um token alterna sua selecao sem iniciar arraste. Tokens selecionados recebem o anel configurado pelo template; tokens adicionais nao podem ser escolhidos depois de atingir `targetCount`.
27. O marcador roxo de magia usado pelas demais formas acompanha o ponteiro e exibe `<selecionados>/<targetCount>` em um badge no proprio icone. Uma faixa compacta oferece `Cancelar` e habilita `Usar` depois do primeiro alvo, mesmo antes de atingir o maximo. Confirmar encerra o modo e informa os alvos selecionados, sem persistencia ou realtime.
28. Em `TARGET`, o marcador fica centralizado no ponteiro. O hit-test seleciona o token quando a distancia entre o ponteiro e o centro do token for menor ou igual a `raio do token + raio do marcador`, permitindo intersecao parcial.
29. `Enter` equivale a `Usar` quando existe ao menos um alvo. A confirmacao dispara uma emanacao local forte nos alvos por aproximadamente 900ms e encerra a selecao; sem alvos, `Enter` nao produz efeito.
30. Toda forma geometrica confirmada tambem dispara a mesma emanacao nos `touchedTokenIds` resultantes de sua geometria, regras de celulas e bloqueio por paredes. O feedback ocorre somente depois de uma persistencia bem-sucedida quando o template for persistente.
31. No editor, `Persistencia`, `Paredes` e `Visibilidade` ocupam uma unica linha de tres colunas. Persistencia oferece `INSTANT` como `Instantanea` e `PERSISTENT` como `Permanente`; `PREVIEW_ONLY` permanece legivel no contrato para compatibilidade, mas nao pode ser escolhido na toolbar. Visibilidade exibe `MASTER_ONLY` como `Mestre` e `ALL_PLAYERS` como `Todos`.
32. `Forma`, `Unidade` e as dimensoes usam uma unica linha. Forma possui a menor coluna. Em `CONE`, `Comprimento` e `Abertura`; em `LINE`, `Comprimento` e `Largura` permanecem lado a lado. O rotulo da dimensao nao repete a unidade, pois ela esta explicita no select. O checkbox de celulas e o conjunto de inclusao usam a largura completa, e as quatro regras sao apresentadas em grade 2x2. O campo `Descricao` nao aparece no editor compacto, embora continue aceito pela API.
33. `Unidade` nao e um select: exibe `Metros (m)` e, abaixo, o equivalente do valor principal em pes usando `1 ft = 0.3048 m`. Essa informacao nao altera formulario, payload, geometria ou configuracao do grid.
34. `Ortogonal` usa posicionamento por ponto/celula e distancia em metros. A forma aplica o efeito visual por uma mascara SVG formada pelas celulas classificadas. O checkbox `Usar celulas do grid para atingir tokens` permanece disponivel: marcado exibe as mesmas quatro regras de inclusao dos outros formatos e usa ocupacao das celulas quadradas ou hexagonais resultantes; desmarcado usa intersecao com o losango continuo. Ao confirmar, todos os `touchedTokenIds` recebem a emanacao visual comum.

## 7.2 Efeitos visuais

* `DEFAULT` preserva preenchimento, borda e celulas atuais.
* `FIRE` renderiza uma camada SVG animada recortada pelo mesmo poligono geometrico, inclusive em circulo, cone e linha.
* `ELECTRIC` renderiza arcos e pulsos azulados; `HEALING`, brilho verde com simbolos ascendentes; `EARTH`, placas e rachaduras com vibracao; `VINES`, ramos organicos com folhas; `LEAVES`, uma rajada de folhas cuja orientacao acompanha a rotacao da area.
* O efeito e estritamente visual: nao altera propagacao, inclusao de celulas, intersecao de tokens, permissao ou persistencia.
* Celulas cobertas, linha de direcao, origem e aneis continuam legiveis sobre o efeito.
* Com `prefers-reduced-motion: reduce`, os efeitos permanecem visiveis, mas estaticos.

## 7.1 Edicao de instancia na cena

* Instancias persistentes exibem um handle no ponto de origem.
* Clique com o botao direito no handle abre um menu pequeno junto ao ponteiro.
* Pressionar o botao esquerdo e arrastar o handle reposiciona a origem diretamente no mapa.
* Durante o drag, geometria, celulas e tokens tocados sao recalculados localmente; somente o drop de uma instancia persistente produz um unico `PATCH`.
* Em formas `DIRECTIONAL`, clicar e soltar o handle sem ultrapassar o limiar de drag reinicia o posicionamento completo: o proximo clique define a origem e o clique seguinte fixa novamente a rotacao. Arrastar continua sendo o atalho para mover somente a origem e preservar o angulo.
* O menu permite alterar rotacao e escala, iniciar reposicionamento ou remover a instancia.
* O formulario de edicao apresenta rotacao inteira e a dimensao primaria em metros: `Raio` para circulo/anel e `Comprimento` para cone/linha. O valor em metros e convertido internamente para `scale` relativo ao snapshot, sem expor esse multiplicador ao usuario.
* `scale` altera somente a dimensao primaria da forma. Em `LINE`, multiplica `length` e preserva `width`; em `CONE`, multiplica `length` e preserva larguras explicitas; em `CIRCLE`/`RING`, multiplica os raios. Essa semantica evita deformar a espessura ao editar comprimento.

### Migracao de `RECTANGLE`

* Templates com `shape = RECTANGLE` passam para `LINE` sem alterar `dimensions`, rotacao ou estilo.
* Snapshots JSON de instancias persistentes recebem a mesma conversao.
* A migracao e somente de dados; nenhuma coluna ou indice e alterado.
* Cada alteracao valida dos inputs atualiza imediatamente um draft local da area, incluindo geometria, celulas e tokens. `Salvar` persiste o draft em um unico `PATCH`; fechar o menu restaura implicitamente a instancia confirmada, pois o draft nao altera o estado persistido.
* Reposicionar reutiliza o fluxo de preview e `Usar`/`Cancelar`, mas executa `PATCH` em vez de criar nova instancia.
* Editar uma instancia nao altera o `CampaignAreaTemplate` nem outras instancias criadas a partir dele.
* O menu abre com margem em relacao ao ponteiro/handle e permanece limitado ao viewport. Para `CIRCLE` e `RING`, o input de rotacao e omitido e a dimensao primaria ocupa toda a largura; formas cuja orientacao altera a geometria continuam exibindo rotacao e dimensao lado a lado.

O editor deve enviar somente `AreaTemplateInput`. Campos de leitura da entidade (`id`, `campaignId`, `createdByUserId`, `createdAt`, `updatedAt`) nunca entram no payload de `POST` ou `PATCH`.

## 8. Paredes

`VttWallSegment` ganha `blocksEffects: boolean`. Segmentos antigos normalizam para `true` quando `kind === 'wall'` ou quando a porta nao esta aberta. O editor permite alterar esse campo sem modificar `playerVisible` ou as regras de movimento.

`BLOCKED_BY_WALLS` remove amostras/celulas sem linha de efeito. Para `LINE`, o comprimento visual e truncado uniformemente no primeiro segmento bloqueador que cruza seu eixo longitudinal; a largura permanece constante e a geometria continua retangular, inclusive quando a origem esta proxima da parede. Um segmento que toca somente a lateral da faixa nao reduz o alcance longitudinal. `stopAtFirstObstacle` permanece no snapshot por compatibilidade com o contrato generico. `IGNORE_WALLS` nao consulta paredes.

## 9. Criterios de aceite cobertos pelo MVP

* Isolamento e autorizacao no servidor para CRUD e persistencia.
* Biblioteca por campanha e toolbar para Mestre.
* Preview cancelavel, formas direcionais e escala da cena.
* Celulas quadradas e hexagonais classificadas sem grid oculto.
* Deteccao e anel em tokens de tamanhos variados.
* Bloqueio/ignore de paredes com propriedade separada.
* Snapshot persistente independente do template.
* Areas temporarias nao escrevem no banco.
