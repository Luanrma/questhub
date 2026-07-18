# Templates de Area

## Visao geral

`effect_area` permite que o Mestre crie modelos geometricos reutilizaveis por campanha e os posicione nas cenas do VTT. O modulo calcula a geometria em coordenadas da cena, projeta a forma sobre o grid, identifica tokens tocados e pode manter uma instancia persistente na cena.

O motor e agnostico de sistema: ele informa alcance geometrico, celulas cobertas e tokens tocados, mas nao aplica dano, testes, condicoes ou imunidades.

## Problema resolvido

O Mestre precisa representar rapidamente explosoes, cones, linhas, auras e outras regioes sem redesenhar configuracoes recorrentes. Templates reduzem trabalho repetitivo e snapshots preservam o comportamento de uma area mesmo quando o template original muda ou e excluido.

## Personas e casos de uso

* Mestre cria, pesquisa, edita, duplica e exclui templates pertencentes a campanha, escolhendo entre o visual geometrico padrao e efeitos imersivos suportados.
* Mestre seleciona um template na toolbar e posiciona uma previa por ponto/direcao, projeta uma distancia ortogonal pelo grid ou seleciona diretamente um ou mais tokens quando a forma e `TARGET`.
* Mestre ve celulas cobertas e tokens geometricamente tocados em tempo real.
* Mestre confirma uma area temporaria ou persiste uma instancia na cena.
* Mestre remove instancias persistentes.
* Jogador visualiza instancias permitidas, sem poder cria-las ou altera-las.

## Regras de negocio

* Templates e instancias pertencem sempre a uma campanha.
* Instancias pertencem tambem a uma cena e guardam snapshot completo da configuracao usada.
* Apenas Mestre pode criar, alterar, duplicar, excluir ou posicionar areas.
* Previa e estado local do cliente e nunca e persistida antes da confirmacao.
* Dimensoes criadas ou editadas pela interface sao expressas em metros (`m`) e convertidas pela escala `metersPerCell`; pes (`ft`) aparecem somente como equivalencia visual, sem alterar dados, geometria ou grid.
* Contato apenas por borda, sem area positiva de sobreposicao, nao toca token.
* O anel significa somente intersecao geometrica.
* Quando o template usa inclusao por celulas, o anel indica que ao menos uma celula ocupada pelo token pertence ao conjunto de celulas afetadas, em vez de intersecao com a curva continua.
* Excluir ou alterar template nao altera instancias existentes.
* Excluir instancia nao altera template.
* Paredes declaram `blocksEffects` separadamente de visibilidade e movimento.
* Nomes de templates sao compactos e limitados a 60 caracteres. Duplicacoes recebem um sufixo numerico estavel (`Copia1`, `Copia2`, ...), sem acumular textos de copia.
* Quando destacada, a biblioteca permanece aberta durante o posicionamento para servir como acesso rapido do Mestre.
* O editor compacta persistencia, paredes e visibilidade em uma unica linha. Na toolbar, persistencia oferece somente `Instantanea` e `Permanente`, e visibilidade usa os rotulos curtos `Mestre` e `Todos`.
* Forma, `Unidade` e dimensoes compartilham a mesma linha. `Unidade` e informativa: mostra metros e a conversao do valor principal para pes. Forma usa a menor coluna; cone e linha mantem tambem abertura/largura nessa linha.
* `TARGET` nao representa geometria: define uma selecao manual de ate `targetCount` tokens distintos e exige ao menos um alvo para confirmacao.
* Selecoes `TARGET` sao instantaneas e locais; nao criam uma instancia persistente na cena.
* Durante a selecao `TARGET`, o marcador de magia acompanha o ponteiro e exibe `selecionados/maximo`; a acao pode ser confirmada antes de atingir o maximo, desde que exista ao menos um alvo.
* O centro visual do marcador coincide com o ponteiro. Um token pode ser selecionado quando sua area visual intersecta o marcador, sem exigir clique exato em seu centro.
* Confirmar por `Enter` ou `Usar` aplica uma emanacao visual forte e temporaria em todos os tokens atingidos, tanto em `TARGET` quanto nas formas geometricas.
* O menu de instancia persistente abre deslocado do handle para nao encobri-lo. Circulos e aneis editam somente o raio/escala, pois rotacao nao altera sua geometria.
* A escala editavel da instancia atua somente sobre sua dimensao primaria: raio em circulo/anel e comprimento em formas direcionais. Larguras configuradas no snapshot permanecem invariantes.
* `RECTANGLE` foi removido por ser geometricamente redundante com `LINE`. Dados legados sao migrados para `LINE`, preservando dimensoes, rotacao e comportamento.
* `ORTHOGONAL` usa um losango continuo como geometria de referencia. Quando o modo por celulas esta ativo, projeta e classifica as celulas reais do grid quadrado ou hexagonal conforme a regra de inclusao escolhida; os tokens que ocupam essas celulas recebem o mesmo feedback visual das demais formas.

## Limites

Pertencem ao modulo: configuracao generica, selecao manual de alvos, geometria 2D, projecao quadrada/hexagonal, bloqueio direto por paredes, visualizacao, efeitos visuais recortados pela geometria, intersecao de tokens e persistencia de instancias geometricas.

Nao pertencem ao modulo: regras de magia, ataques, dano, salvamentos, condicoes, imunidades, turnos de combate, fichas, bestiario e inventario. Propagacao que contorna paredes, poligonos editaveis, elevacao efetiva, texturas externas e selecao manual de atingidos ficam para evolucoes posteriores.

## Relacoes

* `campaign_scene` fornece cena, escala, grid, paredes e tokens.
* `campaign_presence` fornece a room da campanha para sincronizar criacao/remocao de instancias confirmadas; a previa continua local.
* `assets` podera fornecer icones e texturas em evolucoes posteriores.
