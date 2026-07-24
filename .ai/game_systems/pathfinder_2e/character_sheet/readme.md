# Pathfinder 2e - Fase da ficha de personagem

## Objetivo

Esta branch implementa somente a primeira fase da ficha de personagem Pathfinder 2e.

A entrega permite abrir, preencher manualmente, salvar e recarregar a ficha de um `Character` existente.

## Fronteira arquitetural

Pathfinder 2e e um `game_system`, nao um modulo do VTT. Seu backend reside em:

```text
apps/api/src/game_systems/pathfinder_2e/
```

Regras Pathfinder nunca devem ser colocadas em `apps/api/src/modules` nem
importadas por modulos internos do VTT. A ficha e registrada pelo registrador
interno de Pathfinder 2e; `server.ts` nao conhece o sistema nem essa capacidade.

## Escopo aprovado

- todos os campos exibidos na ficha sao editaveis manualmente;
- nenhuma selecao altera outro campo;
- nenhum valor e calculado automaticamente;
- ancestralidade, heranca, background, classe e divindade sao selects;
- os selects exibem somente nomes;
- cada catalogo fica em seu proprio arquivo;
- a ficha e persistida separadamente da identidade generica `Character`;
- o frontend permite testar o fluxo completo.

## Catalogos estaticos

```text
options/ancestries.ts   48 nomes
options/heritages.ts    311 nomes
options/backgrounds.ts  459 nomes
options/classes.ts      25 nomes
options/deities.ts      480 nomes
```

Os quatro primeiros arquivos foram extraidos uma unica vez dos dados ja existentes na branch `development`.

A branch `development` nao possuia catalogo de divindades. `deities.ts` foi extraido uma unica vez do repositorio oficial `foundryvtt/pf2e`, no commit fixo `5069fb7a421a5ba1789652764447cced91ffb0e2`.

O produto final nao possui comando de importacao, download em runtime ou dependencia das branches/fontes usadas para montar essas listas.

## Fora do escopo

- tamanho de personagem ou Token;
- automacao de atributos;
- calculo de PV;
- calculo de CA;
- calculo de pericias, salvamentos, percepcao ou iniciativa;
- compatibilidade automatica entre ancestralidade e heranca;
- spells, inventario, talentos, efeitos ou combate;
- migracao de bestiario, items, spells ou hazards.

## Reinicio do banco

A migracao desta fase executa:

```sql
DROP TABLE IF EXISTS "CharacterSheet";
```

Isso remove a tabela e os dados de ficha criados pela implementacao descartada antes de criar o novo armazenamento.
