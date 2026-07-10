# Submodulo: Pathfinder 2e (Product)

## 1. Proposito
Agrupar todas as regras, dados, validacoes e experiencias especificas de Pathfinder 2e dentro de um ruleset isolado.

Este submodulo substitui a ideia de espalhar Pathfinder 2e por campanha, VTT ou personagem.

## 2. Escopo Atual
Incluido:
* Ficha Pathfinder 2e MVP.
* Defaults de ficha.
* Validacao de ficha.
* Calculos basicos de atributos e proficiencias documentados em `game_systems/pathfinder_2e/character_sheet`.
* Catalogo de itens PF2e normalizado.
* Regras iniciais de equipamento PF2e via adapter de inventario: maos, armadura, escudo, itens worn/readied, stowed e investidura.

## 3. Escopo Futuro
* Ancestralidades.
* Herancas.
* Backgrounds.
* Classes.
* Feats.
* Spells.
* Itens.
* Acoes.
* Ataques/strikes.
* Class DC.
* Catalogos oficiais/curados.

## 4. Fronteira com VTT
Pathfinder 2e pode fornecer atalhos e metadados para o VTT, mas nao altera o modelo generico do VTT.

Exemplos permitidos:
* Atalho para rolar Atletismo.
* Label de rolagem com nome da pericia.
* Metadados opcionais no chat informando origem da rolagem.

Exemplos proibidos no VTT generico:
* Campo fixo `armorClass` em token.
* Campo fixo `ancestry` em token.
* Movimentacao codificada com regra Pathfinder diretamente no mapa.
* Slots corporais fixos de PF2e, como cabeca, cinto, aneis ou botas.

## 5. Inventario e Equipamento PF2e
Pathfinder 2e nao deve ser modelado como um conjunto antigo de slots corporais. O ruleset deve organizar equipamento por uso e acesso:

* `Held`: itens nas maos, incluindo armas, escudos, cajados, varinhas e ferramentas usadas ativamente. O personagem possui duas maos; itens de duas maos consomem ambas.
* `Worn`: itens vestidos ou preparados no corpo para acesso rapido, incluindo armadura, roupas magicas, mochila, bandoleiras, bolsos e bainhas.
* `Stowed`: itens guardados dentro de mochila ou conteiner fechado, mais lentos de acessar em combate.

Categorias equipaveis relevantes:

* Armas: ocupam uma mao (`main_hand`/`off_hand`) ou duas maos (`two_hands`), conforme `usage`.
* Armaduras: ocupam o estado exclusivo `armor`.
* Escudos: ocupam o estado exclusivo `shield` e uma mao.
* Itens magicos vestidos: usam `worn`; quando possuem trait `invested`, contam para o limite de 10 itens investidos.
* Cajados, varinhas e focos: sao `Held` e consomem mao conforme `usage`.
* Consumiveis: podem estar `worn` para acesso rapido ou ser movidos para uma mao para beber/aplicar/usar.
* Talismas, gadgets, runas e itens `affixed`: nao sao slots corporais; devem ser tratados como anexos/estado especifico do ruleset quando esse fluxo existir.

Resumo de UI esperado no QuestHub:

* armas ativas: mao principal, mao secundaria ou duas maos;
* defesa vestida: armadura e escudo;
* itens investidos: contador 0/10;
* inventario rapido: itens `worn`/readied;
* mochila/stowed: restante do inventario.
