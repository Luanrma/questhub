# Pathfinder 2e - Ficha de personagem automatizada V2

## Objetivo

Esta fase transforma a ficha manual Pathfinder 2e em uma ficha com valores derivados pelo `Game System Runtime`.

O jogador continua informando escolhas, modificadores de atributo, graus de proficiencia, bonus e estados mutaveis. O sistema calcula os totais mecanicos sem inserir regras Pathfinder no VTT.

## Fronteira arquitetural

O backend Pathfinder permanece em:

```text
apps/api/src/game_systems/pathfinder_2e/
```

O adaptador de ficha usa os contratos genericos de:

```text
apps/api/src/game_systems/runtime/
```

Regras Pathfinder nunca devem ser colocadas em `apps/api/src/modules`, componentes React, Token, Canvas, grid ou Area Effect.

## Escopo implementado

- ficha persistida com `schemaVersion: 2`;
- migracao explicita da ficha manual V1;
- nivel de 1 a 20;
- selecao de ancestralidade, heranca, background, classe e divindade;
- modificadores de Forca, Destreza, Constituicao, Inteligencia, Sabedoria e Carisma;
- calculo de PV maximo;
- calculo de CA sem armadura;
- calculo de iniciativa padrao por Percepcao;
- calculo de Percepcao;
- calculo de Fortitude, Reflexos e Vontade;
- calculo das 16 pericias da ficha;
- bonus de proficiencia considerando o nivel;
- endpoint de previa sem persistencia;
- exibicao de totais somente leitura no frontend;
- warnings quando classe ou ancestralidade nao foram selecionadas ou a vida atual excede o maximo.

## Efeitos das escolhas nesta fase

### Ancestralidade

Fornece os PV ancestrais usados no calculo de vida maxima.

### Classe

Fornece os PV recebidos por nivel.

### Heranca, background e divindade

Sao persistidos como identidade mecanica, mas ainda nao adicionam modificadores automaticos. Isso evita inventar regras antes da implementacao de Rule Elements e escolhas internas.

### Classe e proficiencias

A classe ainda nao seleciona automaticamente os graus iniciais de Percepcao, saves, pericias ou armaduras. Os graus continuam editaveis e seus totais sao calculados corretamente pelo nivel.

## Dados fundamentais e derivados

Persistidos:

- identidade;
- modificadores de atributo;
- graus de proficiencia;
- bonus manuais;
- PV atual e temporario;
- Ferido, Morrendo e Condenado;
- movimento, experiencia e anotacoes.

Derivados:

- PV maximo;
- CA;
- iniciativa;
- Percepcao;
- saves;
- pericias;
- parcelas mecanicas de classe, ancestralidade e proficiencia.

## Fora do escopo

- itens equipados e slots;
- bonus, limite de Destreza e penalidades de armadura;
- armas, ataques e dano;
- talentos, condicoes e efeitos temporarios;
- boosts automaticos de ancestralidade, background e classe;
- progressao automatica de proficiencias de cada classe;
- spells e consumo de recursos;
- integracao da ficha com Area Effect;
- bestiario, hazards e iniciativa por outra pericia.
