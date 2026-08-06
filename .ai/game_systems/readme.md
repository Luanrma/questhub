# Game Systems

## Visao geral

`game_systems` concentra regras, catalogos, schemas e comportamentos pertencentes a
um sistema de RPG especifico, como Pathfinder 2e.

Esse contexto e independente do VTT. O VTT fornece capacidades genericas de mesa
virtual; um `game_system` fornece regras mecanicas de um jogo.

## Problema resolvido

Evitar que regras de sistemas de RPG sejam tratadas como modulos internos do VTT
ou se espalhem pelos contextos genericos da aplicacao.

## Fronteira de responsabilidade

No backend, todo codigo especifico de sistemas de RPG deve ficar sob:

```text
apps/api/src/game_systems/
```

`apps/api/src/modules/` e reservado aos modulos do produto VTT.

`apps/api/src/server.ts` pertence exclusivamente ao VTT e nao conhece
registradores, rotas, recursos ou implementacoes de nenhum sistema de jogo.

A composicao executavel acontece em `apps/api/src/main.ts`. Esse bootstrap chama
o registrador agregado de `game_systems`. O agregador delega as entradas neutras
ao registrador `registry` e as capacidades mecanicas ao registrador de cada
sistema. Cada sistema mantem internamente suas fichas, bestiarios, itens, spells
e demais capacidades.

## Regras de negocio

- regras mecanicas devem pertencer ao `game_system` que as define;
- cada sistema deve ser autocontido e nao pode importar outro sistema;
- um sistema nao pode alterar regras internas do VTT;
- o VTT nao pode implementar ou duplicar regras de um sistema;
- o VTT pode, no maximo, consumir uma lista neutra de nomes/chaves dos sistemas
  suportados, sem conhecer seus recursos ou registradores;
- capacidades compartilhadas devem ser expostas por contratos neutros;
- integracoes devem transportar dados sem incorporar mecanicas especificas no VTT.
- regras de autorizacao de atores e inventario, quando reutilizadas por mais de
  uma capacidade, pertencem a uma dependencia neutra compartilhada e nao a um
  sistema de jogo concreto;
- uma criatura do catalogo pode ser materializada como ator, ficha simplificada e
  Token da campanha pelo registry neutro, desde que o provider do sistema declare
  explicitamente a entrada como tokenizavel;
- a ficha simplificada preserva um snapshot de apresentacao do catalogo e nao
  transforma o Token generico em proprietario de regras mecanicas;
- a ficha simplificada de NPC omite a descricao editorial e o inventario, mas
  preserva em payload opaco do sistema o estado necessario para suas projecoes;
- duplicar um Token materializado cria outro ator, outra ficha simplificada e
  outro Token, sem compartilhar estado mutavel entre as copias.

## Personas e casos de uso

- jogadores usam fichas e opcoes do sistema escolhido;
- mestres usam as capacidades genericas do VTT sem acoplamento a um sistema;
- desenvolvedores adicionam sistemas sem modificar regras internas do VTT.

## Valor entregue

- fronteira arquitetural visivel no filesystem;
- menor risco de acoplamento entre VTT e sistemas;
- evolucao e teste independentes de cada sistema de RPG.

## Fora do contexto

- campanhas, cenas, canvas, tokens, fog of war e presenca;
- chat, trade e gerenciamento generico de personagens;
- autenticacao, transporte HTTP/WebSocket e persistencia compartilhada;
- qualquer regra que seja propria do VTT e independente de um sistema de RPG.

O posicionamento do Token criado, sua toolbar, drag-and-drop, cena e sincronizacao
continuam fora deste contexto. O `game_system` apenas materializa a origem
mecanica e publica o resultado por contratos de composicao neutros.
