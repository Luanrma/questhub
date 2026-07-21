# Fog of War

## Visao geral

`fog_of_war` controla, de forma binaria, quais areas da cena cada Token consegue enxergar. Uma cena esta com FOG ou sem FOG e pode, opcionalmente, estar em escuridao. Quando o FOG esta ativo, a visao parte do centro do Token, possui 360 graus, respeita seu alcance e e recortada por paredes e portas fechadas. Em escuridao, essa visao revela somente as regioes alcancadas por fontes de luz ativas.

Lampadas sao marcadores posicionaveis do Mestre. Cada lampada possui somente alcance e adiciona sua area circular ao campo visivel do Token quando existe linha de visao ate a regiao iluminada. Nao existem ambiente, horario, intensidade, cor, penumbra ou niveis de iluminacao.

## Personas e casos de uso

### Mestre

* Liga ou desliga o FOG da cena.
* Liga ou desliga a escuridao da cena.
* Define o alcance de visao de cada Token.
* Configura, no proprio menu do Token, seu alcance maximo de visao e uma fonte de luz propria opcional com alcance independente.
* Cria, arrasta e remove lampadas, configurando apenas seu alcance.
* Visualiza a cena completa, translucida ou pela perspectiva de um Token.
* Apaga a exploracao da cena.

### Jogador

* Enxerga em 360 graus a partir do Token controlado.
* Explora progressivamente a cena.
* Ve areas adicionais alcancadas por lampadas quando paredes nao bloqueiam a visao.

## Regras de negocio

* O FOG e opcional e desativado por padrao.
* A escuridao e opcional, desativada por padrao e so altera a visibilidade quando o FOG esta ativo.
* A visao do Token e circular, com 360 graus e alcance default de `10m`.
* Em escuridao, a area visivel e a intersecao entre o campo de visao maximo do Token e as areas iluminadas por fontes ativas; luz nunca amplia o alcance de visao do Token.
* Em escuridao, a memoria de exploracao continua persistida, mas nao torna regioes sem iluminacao atual parcialmente visiveis.
* Paredes e portas fechadas bloqueiam visao; portas abertas nao bloqueiam.
* Janelas permitem visao.
* Lampadas possuem somente posicao, estado ligado/desligado e alcance.
* Um Token pode carregar uma fonte de luz propria; quando habilitada, sua origem acompanha o centro do Token e ilumina pelo alcance configurado.
* Lampadas nao aplicam cor, brilho, intensidade, gradiente ou halo ao mapa.
* Durante o setup, o Mestre visualiza um contorno administrativo do alcance de cada lampada.
* A exploracao pertence ao Token e continua sendo uma memoria binaria.
* Alterar configuracao ou resolucao interna nunca apaga a memoria; mascaras antigas sao reamostradas.
* Alteracoes do setup sao rascunho local ate o Mestre clicar em `Aplicar`.

## Limites

Pertencem a este modulo: visao 360, alcance, oclusao, lampadas, mascara atual e exploracao. Geometria base pertence a `campaign_scene`; movimento e identidade dos Tokens pertencem a `vtt`.

Ficam fora do escopo: cones de visao, horarios, visao noturna, niveis de luz, intensidade, cores, cena forcada, zonas manuais e protecao criptografica do mapa.
