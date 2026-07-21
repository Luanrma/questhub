# Fog of War: Skills e restricoes tecnicas

## Stack e fronteiras

* React integra UI e ciclo de vida.
* TypeScript puro calcula geometria e mascaras binarias.
* Canvas 2D converte bitsets reduzidos em mascaras visuais.
* HTTP persiste configuracao somente em `Aplicar`.
* Socket.IO distribui apenas fatos confirmados e checkpoints de exploracao.

O servidor nao calcula frames ou mascaras. `CampaignOverviewPage.tsx` apenas integra o modulo; geometria e renderizacao ficam em `fog-of-war/domain`, `hooks` e `infrastructure`.

## Pipeline simplificado

1. `FogFixedLightMask` rasteriza a uniao binaria das lampadas fixas e e cacheada.
2. `ComputedFogMask` rasteriza a visao 360 do Token.
3. Sem escuridao, a mascara final une a visao base com as regioes de lampada que tambem possuem linha de visao a partir do Token.
4. Com escuridao, a mascara final intersecta a visao base com a uniao binaria das fontes de luz; o alcance maximo do Token nunca e ampliado.
5. A exploracao une a mascara final por OR binario.

Invalidacoes:

* mover um Token comum invalida somente `ComputedFogMask`;
* mover um Token com fonte de luz propria ativa invalida tambem a mascara cacheada de fontes de luz;
* mover/criar/remover lampada ou alterar seu alcance invalida `FogFixedLightMask`;
* alterar paredes, portas ou objetos bloqueadores invalida ambas;
* inputs do painel atualizam somente o rascunho local.

## Performance

* A mascara usa no maximo `192px` no maior eixo e `128px` em cenas densas.
* A posicao atual do Token alimenta imediatamente a mascara; o caminho binario deve permanecer dentro do budget sem atraso artificial.
* Poligonos sao preenchidos por varredura de linhas, nunca por `pointInPolygon` por pixel/fonte.
* Angulos de raios sao normalizados para `[0, 2π)` e deduplicados antes de formar o poligono, inclusive quando paredes adicionam vertices com angulo negativo.
* Lampadas sao unidas como bits; nao existe buffer de intensidade nem queda gradual.
* Nao recalcular lampadas fixas ao mover Token comum.
* Nao executar request durante arraste ou microalteracoes do setup.
* Nao usar `setState` por frame no renderer.

## Seguranca e validacao

* Somente Mestre configura FOG, alcance de Tokens, lampadas e bloqueadores.
* Alcance de visao e fonte de luz propria sao editados pelo Mestre no menu contextual de configuracoes do Token e persistidos pelos endpoints dedicados do modulo.
* Payloads externos sao normalizados no backend.
* Configuracoes legadas com ambiente, intensidade, niveis ou cena forcada sao aceitas como entrada, mas esses campos sao descartados; `darkness` e preservado como booleano.
* Nenhuma mudanca de banco e necessaria: configuracoes continuam em JSON.

## Testes obrigatorios

* FOG ligado/desligado.
* Escuridao ligada/desligada e intersecao estrita entre visao e luz.
* Visao circular nos quatro pontos cardeais.
* Parede e porta fechada bloqueiam; porta aberta nao bloqueia.
* Lampada amplia a visibilidade e respeita paredes.
* Movimento de Token comum reutiliza a mascara de lampadas.
* Exploracao preserva uniao, revisao e reset.
* Exploracao e reamostrada quando dimensoes internas mudam, sem reset implicito.
* Budget para atualizacoes consecutivas de movimento.
