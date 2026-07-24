# Game Systems - Especificacao de fronteira

## 1. Contrato de localizacao

Todo backend especifico de um sistema de RPG reside em:

```text
apps/api/src/game_systems/<system>/
```

O caminho abaixo e invalido:

```text
apps/api/src/modules/game_systems/
```

## 2. Contrato de dependencia

Sao proibidos:

```text
apps/api/src/game_systems/** -> apps/api/src/modules/**
apps/api/src/modules/**      -> apps/api/src/game_systems/**
```

`apps/api/src/server.ts` e parte do VTT e nao pode importar nenhum arquivo sob
`apps/api/src/game_systems`.

`apps/api/src/main.ts` e o bootstrap executavel e pode importar somente a entrada
agregada de `game_systems`, sem conhecer Pathfinder, fichas, bestiarios, itens,
spells ou qualquer outro recurso concreto.

Cada sistema e uma fronteira adicional. Codigo sob
`apps/api/src/game_systems/<system>/**` nao pode importar outro diretorio irmao
`<other-system>`.

Dependencias transversais devem ser neutras em relacao a regras de jogo. Ports e
adapters explicitos devem ser introduzidos quando uma integracao exigir troca de
dados entre capacidades genericas e um sistema.

## 3. Contrato de responsabilidade

Pertencem a `game_systems`:

- schemas e validacoes mecanicas;
- catalogos, opcoes e defaults de um sistema;
- calculos, automacoes e invariantes definidos pelo sistema;
- casos de uso e entradas exclusivas daquele sistema.

Pertencem aos modulos do VTT:

- mesa, campanha, cena, canvas e token genericos;
- comunicacao, presenca e sincronizacao genericas;
- autenticacao e autorizacao;
- armazenamento e transporte sem regras mecanicas.

## 4. Integracao HTTP

O fluxo de composicao HTTP e:

```text
main.ts
  -> createVttServer()                         // somente VTT
  -> registerGameSystems(app)                  // entrada agregada
       -> registerPathfinder2e(app)             // limite do sistema
            -> registradores internos do PF2e  // ficha, bestiario, itens, spells...
```

Adicionar uma capacidade a Pathfinder altera somente seu registrador interno.
Adicionar outro sistema altera o agregador de sistemas, mas nao `server.ts` nem
o registrador de Pathfinder.

A coexistencia no mesmo processo HTTP nao torna um sistema modulo do VTT.

## 5. Catalogo suportado

O VTT pode conhecer apenas descritores neutros dos sistemas suportados, limitados
a nome/chave. Esse catalogo nao expoe handlers, schemas, regras, tipos mecanicos
ou capacidades internas e nao e necessario para montar o servidor base.

## 6. Criterios de aceitacao

1. `apps/api/src/modules/game_systems` nao existe.
2. o Pathfinder 2e esta em `apps/api/src/game_systems/pathfinder_2e`.
3. build e testes resolvem os novos caminhos.
4. nenhum arquivo de regra cruza diretamente a fronteira entre `modules` e
   `game_systems`.
5. `apps/api/src/server.ts` nao importa `game_systems` nem cita um sistema
   concreto.
6. `apps/api/src/main.ts` conhece somente o registrador agregado.
7. cada sistema registra internamente suas capacidades e nao importa outro
   sistema.
8. um teste arquitetural falha se qualquer uma dessas fronteiras for violada.

## 7. Persistencia

Esta mudanca nao altera schema, migration, tabela, coluna, indice ou dados.
