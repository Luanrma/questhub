# VTT: Contratos

* Mestre ativo pode criar e editar cenas e tokens.
* Jogador ativo acessa a mesa enquanto o mestre esta online.
* Token armazena posicao, tamanho, visibilidade, rotacao, camada, nome visual e imagem/cor opcional.
* Associacao com identidade/personagem e opcional; token generico sem `characterId` e valido.
* Cena armazena mapa, grid, configuracao visual, paredes e portas.
* Paredes e portas usam coordenadas da cena, persistem com ela e sincronizam por websocket.
* Paredes e portas fechadas bloqueiam movimento de jogadores; portas abertas nao bloqueiam.
* A visibilidade visual de um segmento para jogadores e independente de sua colisao.
* Camera por campanha e persistida separadamente.
* Nenhum payload base contem campos mecanicos, ruleset, ficha, bestiario, inventario, economia, PV, CA, magia, condicao ou efeito ativo.
