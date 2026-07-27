# Roadmap — Conteúdo Pathfinder 2e

## Objetivo final

Alcançar progressivamente a cobertura de Bestiário, Spells e Items existente na branch `development`, sempre com original `en-US` e tradução `pt-BR`.

Baseline de reconciliação:

| Domínio | Conteúdo identificado na development |
|---|---:|
| Bestiário/NPCs | 5.492 |
| Spells | 1.802 |
| Items | 5.217 |

O baseline será confirmado pelo inventário da fonte travada. Diferenças devem ser explicadas, nunca ocultadas.

## Cobertura acumulada importada e traduzida

Contagem de entidades distintas integradas ao catálogo após a Cobertura
exaustiva 23:

| Domínio | Importados | Com overlay PT-BR | `REVIEWED` | `MACHINE_DRAFT` |
|---|---:|---:|---:|---:|
| Bestiário (criaturas e hazards) | 3.386 | 3.386 | 3 | 3.383 |
| Spells | 1.144 | 1.144 | 3 | 1.141 |
| Items | 3.979 | 3.979 | 3 | 3.976 |
| **Total** | **8.509** | **8.509** | **9** | **8.500** |

Saldo em relação ao baseline de reconciliação:

| Domínio | Ainda não importados |
|---|---:|
| Bestiário (criaturas e hazards) | 2.106 |
| Spells | 658 |
| Items | 1.238 |
| **Total** | **4.002** |

“Com overlay PT-BR” significa que os campos traduzíveis foram preenchidos em
um registro separado do original. `MACHINE_DRAFT` ainda exige revisão humana e
não deve ser interpretado como tradução editorialmente aprovada.

## Fase de fundação — não é uma rodada de conteúdo

1. Criar contratos de roadmap, importação e tradução.
2. Travar a fonte por versão, commit e checksum.
3. Auditar os geradores existentes na `development`.
4. Gerar inventário completo dos três domínios.
5. Reconciliar os totais com o baseline.
6. Gerar fila ordenada de publicações.
7. Congelar os IDs da Rodada 1.

A fundação não publica conteúdo e, por isso, não está sujeita à regra dos três domínios.

# Programa 1 — Core Remaster

Publicações-base:

- Pathfinder Player Core;
- Pathfinder Player Core 2;
- Pathfinder GM Core;
- Pathfinder Monster Core;
- Pathfinder Monster Core 2.

As publicações são agrupadas porque criaturas, magias e itens não ficam necessariamente no mesmo pack técnico.

## Rodada 1 — piloto de início de jogo

Faixa planejada:

- Bestiário: níveis −1 a 2;
- Spells: truques e rank 1;
- Items: níveis 0 e 1;
- amostra congelada: 3 / 3 / 3.

Status atual: `READY`.

Snapshot de importação:

- versão da fonte `8.3.0`;
- revisão `01114da5851f31404078d8020809b13e4000bc4b`;
- licença dos nove registros: `ORC`;
- nenhuma imagem externa é carregada em runtime;
- imagens só serão associadas quando o arquivo correspondente estiver versionado no repositório QuestHub;
- sem imagem local, o catálogo mantém o ícone genérico.

Conteúdo do piloto:

| Bestiário | Spells | Items |
|---|---|---|
| Goblin Warrior | Electric Arc | Dogslicer |
| Skeleton Guard | Force Barrage | Leather Armor |
| Wolf | Heal | Shortbow |

Todos os registros possuem original `en-US`, tradução separada `pt-BR`, origem técnica neutra e hash. As nove traduções estão como `REVIEWED`, com cobertura 3/3 nos três domínios.

## Rodada 2 — piloto de estruturas adicionais

- Bestiário: níveis 3 e 4;
- Spells: rank 2;
- Items: níveis 2 a 4;
- amostra congelada: 3 / 3 / 3.

Status atual: `REVIEWING`.

Esta rodada mantém o formato de validação com três representantes por domínio.
Ela não encerra a cobertura das faixas acima e não avança o cursor editorial.

Publicações mantidas:

- Bestiário: `Pathfinder Monster Core`;
- Spells: `Pathfinder Player Core`;
- Items: `Pathfinder Player Core`.

Conteúdo congelado:

| Bestiário | Spells | Items |
|---|---|---|
| Animated Statue | Blazing Bolt | Full Plate |
| Dryad | Dispel Magic | Healer's Toolkit (Expanded) |
| Griffon | Invisibility | Spyglass (Fine) |

Critério de representação:

- constructo, criatura com habilidades mágicas e criatura voadora;
- ataque, contramágica/utilidade e defesa/ilusão;
- armadura e equipamentos distribuídos entre os níveis 2, 3 e 4.

Os nove originais são importados separadamente dos overlays `pt-BR`. As
traduções entram como `MACHINE_DRAFT` e exigem revisão humana antes de a rodada
alcançar `READY`.

## Próximas rodadas — cobertura exaustiva

As Rodadas 1 e 2 são pilotos e não dão como concluído nenhum nível ou Rank.
A próxima seleção reinicia no menor valor ainda incompleto após descontar
somente os IDs já importados pelos pilotos.

Limites por lote:

| Domínio | Limite |
|---|---:|
| Bestiário | 400 |
| Spells | 200 |
| Items | 400 |

Os limites históricos foram `100 / 40 / 100` entre as Coberturas exaustivas 02
e 15. A ampliação para `200 / 100 / 200` começa na Cobertura exaustiva 16 sem
alterar os cursores editoriais nem as seleções já congeladas. A Cobertura
exaustiva 17 amplia novamente para `400 / 200 / 400`, preservando a precedência
entre publicações consecutivas.

Ordem obrigatória:

1. Bestiário: menor nível incompleto, depois `sourcePack + sourceId`;
2. Spells: menor Rank incompleto, depois `sourcePack + sourceId`;
3. Items: menor nível incompleto, depois `sourcePack + sourceId`;
4. se o valor atual exceder o limite, continuar no mesmo valor na rodada seguinte;
5. avançar somente quando não restar nenhuma entrada elegível no valor atual;
6. manter os três domínios em toda entrega.

O cursor começa no menor valor realmente existente na fonte travada. Truques
continuam identificados pela trait `cantrip` e pelo Rank normalizado da fonte;
eles não são perdidos por não existir um Rank numérico 0 no inventário.

### Cobertura exaustiva 01

O primeiro lote exaustivo foi congelado a partir da revisão
`01114da5851f31404078d8020809b13e4000bc4b`, descontando apenas os IDs dos
dois pilotos:

| Domínio | Quantidade | Cobertura do lote |
|---|---:|---|
| Bestiário | 50 | 16 criaturas de nível -1, 12 de nível 0 e 22 de nível 1 |
| Spells | 20 | 20 spells de Rank 1 |
| Items | 50 | 50 itens de nível 0 |

O lote não conclui Rank 1 de Spells nem nível 0 de Items. O próximo lote deve
continuar nesses mesmos valores. Os originais entram como normalizados e as
traduções PT-BR entram como `MACHINE_DRAFT`, separadas do original e pendentes
de revisão humana.

Associações exatas de assets nesta rodada:

- Bestiário: 50 caminhos para o ícone padrão local de NPC;
- Spells: 14 caminhos locais idênticos ao `img` da fonte;
- Items: 16 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

### Cobertura exaustiva 02

O segundo lote exaustivo dobra a capacidade do lote anterior:

| Domínio | Quantidade | Cobertura do lote |
|---|---:|---|
| Bestiário | 100 | 31 criaturas de nível 1, 60 de nível 2 e 9 de nível 3 |
| Spells | 40 | 40 spells de Rank 1 |
| Items | 100 | 100 itens de nível 0 |

A seleção usa a mesma revisão travada da fonte e desconta os dois pilotos e a
Cobertura exaustiva 01. Cada domínio continua do menor nível ou Rank pendente,
sem saltar registros. Os IDs são congelados antes da tradução; os originais
permanecem em `en-US`, os overlays entram em `pt-BR` como `MACHINE_DRAFT` e os
ícones são associados somente quando o caminho `img` da fonte possui arquivo
local idêntico.

Associações exatas de assets nesta rodada:

- Bestiário: 100 caminhos para o ícone padrão local de NPC;
- Spells: 21 caminhos locais idênticos ao `img` da fonte;
- Items: 45 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: nível 3, com 35 criaturas pendentes;
- Spells: Rank 1, com 20 magias pendentes;
- Items: nível 0, com 25 itens pendentes.

### Cobertura exaustiva 03

O terceiro lote exaustivo mantém os limites `100 / 40 / 100` e continua dos
cursores registrados acima. A seleção deve descontar os dois pilotos e as
Coberturas exaustivas 01 e 02 antes de ordenar e congelar os próximos IDs.

| Domínio | Quantidade | Cobertura do lote |
|---|---:|---|
| Bestiário | 100 | 35 criaturas de nível 3, 40 de nível 4 e 25 de nível 5 |
| Spells | 40 | 20 spells de Rank 1 e 20 de Rank 2 |
| Items | 65 | 25 de nível 0, 7 de nível 1, 3 de nível 2, 24 de nível 3, 1 de nível 5, 1 de nível 7, 2 de nível 9 e 2 de nível 17 |

O domínio Items possui somente 65 registros elegíveis ainda não importados em
`Pathfinder Player Core`. O lote esgota essa publicação sem duplicar IDs e sem
misturar conteúdo de outro livro apenas para preencher o limite de 100.

Associações exatas de assets nesta rodada:

- Bestiário: 100 caminhos para o ícone padrão local de NPC;
- Spells: 21 caminhos locais idênticos ao `img` da fonte;
- Items: 25 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: nível 5, com 5 criaturas pendentes;
- Spells: Rank 2, com 32 magias pendentes;
- Items: `Pathfinder Player Core` esgotado, sem item elegível pendente.

### Cobertura exaustiva 04

O quarto lote exaustivo mantém os limites `100 / 40 / 100`. Os cursores de
publicação avançam de forma independente: Bestiário continua em
`Pathfinder Monster Core`, Spells continua em `Pathfinder Player Core` e apenas
Items avança para `Pathfinder Player Core 2`, pois o primeiro Player Core foi
esgotado na cobertura anterior.

Seleção congelada a partir da mesma revisão travada da fonte:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core | 5 criaturas de nível 5, 28 de nível 6, 26 de nível 7, 28 de nível 8 e 13 de nível 9 |
| Spells | 40 | Pathfinder Player Core | 32 spells de Rank 2 e 8 de Rank 3 |
| Items | 100 | Pathfinder Player Core 2 | 16 itens de nível 0, 32 de nível 1, 11 de nível 2, 21 de nível 3, 14 de nível 4 e 6 de nível 5 |

Os IDs foram congelados antes da tradução. Todos os overlays PT-BR entram como
`MACHINE_DRAFT`, e os ícones só serão associados quando o caminho `img` da
fonte possuir correspondência local exata.

Associações exatas de assets nesta rodada:

- Bestiário: 100 caminhos para o ícone padrão local de NPC;
- Spells: 17 caminhos locais idênticos ao `img` da fonte;
- Items: 66 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: nível 9, com 10 criaturas pendentes;
- Spells: Rank 3, com 26 magias pendentes;
- Items: nível 5 de `Pathfinder Player Core 2`, com 5 itens pendentes.

### Cobertura exaustiva 05

O quinto lote exaustivo mantém os limites `100 / 40 / 100` e as publicações
correntes de cada domínio: `Pathfinder Monster Core` para Bestiário,
`Pathfinder Player Core` para Spells e `Pathfinder Player Core 2` para Items.

Seleção congelada a partir da mesma revisão travada da fonte:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core | 10 criaturas de nível 9, 21 de nível 10, 15 de nível 11, 16 de nível 12, 10 de nível 13, 11 de nível 14, 9 de nível 15 e 8 de nível 16 |
| Spells | 40 | Pathfinder Player Core | 26 spells de Rank 3 e 14 de Rank 4 |
| Items | 100 | Pathfinder Player Core 2 | 5 itens de nível 5, 14 de nível 6, 10 de nível 7, 13 de nível 8, 8 de nível 9, 13 de nível 10, 19 de nível 11 e 18 de nível 12 |

Os IDs foram congelados antes da tradução. Todos os overlays PT-BR entraram
como `MACHINE_DRAFT`.

Associações exatas de assets nesta rodada:

- Bestiário: 100 caminhos para o ícone padrão local de NPC;
- Spells: 14 caminhos locais idênticos ao `img` da fonte;
- Items: 60 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: nível 16, com 1 criatura pendente;
- Spells: Rank 4, com 19 magias pendentes;
- Items: nível 12 de `Pathfinder Player Core 2`, com 4 itens pendentes.

### Cobertura exaustiva 06

O sexto lote exaustivo preserva os limites máximos `100 / 40 / 100`, mas não
preenche artificialmente os domínios cuja publicação corrente possui menos
conteúdo elegível. `Pathfinder Monster Core` possui somente 36 criaturas
pendentes e `Pathfinder Player Core 2` possui somente 83 itens pendentes; as
duas publicações serão esgotadas nesta cobertura sem misturar o próximo livro.

Seleção congelada a partir da mesma revisão travada da fonte:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 36 | Pathfinder Monster Core | 1 criatura de nível 16, 9 de nível 17, 9 de nível 18, 6 de nível 19, 8 de nível 20, 2 de nível 21 e 1 de nível 25 |
| Spells | 40 | Pathfinder Player Core | 19 spells de Rank 4 e 21 de Rank 5 |
| Items | 83 | Pathfinder Player Core 2 | 4 itens de nível 12, 6 de nível 13, 8 de nível 14, 3 de nível 15, 15 de nível 16, 17 de nível 17, 16 de nível 18, 4 de nível 19 e 10 de nível 20 |

Os IDs foram congelados antes da tradução. Todos os overlays PT-BR entraram
como `MACHINE_DRAFT`.

Associações exatas de assets nesta rodada:

- Bestiário: 36 caminhos para o ícone padrão local de NPC;
- Spells: 19 caminhos locais idênticos ao `img` da fonte;
- Items: 48 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: `Pathfinder Monster Core` esgotado, sem criatura elegível pendente;
- Spells: Rank 5 de `Pathfinder Player Core`, com 18 magias pendentes;
- Items: `Pathfinder Player Core 2` esgotado, sem item elegível pendente.

O inventário editorial definiu `Pathfinder Monster Core 2` como a próxima
publicação de Bestiário e `Pathfinder GM Core` como a próxima publicação de
Items.

### Cobertura exaustiva 07

O sétimo lote exaustivo conclui as 18 magias restantes no Rank 5 de
`Pathfinder Player Core`. Os demais domínios avançam seus cursores de publicação
independentemente, pois seus livros anteriores foram esgotados na cobertura 06:
Bestiário inicia `Pathfinder Monster Core 2` e Items inicia
`Pathfinder GM Core`.

Seleção congelada a partir da mesma revisão travada da fonte:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core 2 | 10 criaturas de nível -1, 11 de nível 0, 62 de nível 1 e 17 de nível 2 |
| Spells | 18 | Pathfinder Player Core | 18 spells de Rank 5 |
| Items | 100 | Pathfinder GM Core | 100 itens de nível 0 |

O pack técnico de Bestiário é `pathfinder-monster-core-2`. Os IDs foram
congelados antes da tradução e todos os overlays PT-BR entraram como
`MACHINE_DRAFT`.

Associações exatas de assets nesta rodada:

- Bestiário: 100 caminhos para o ícone padrão local de NPC;
- Spells: 6 caminhos locais idênticos ao `img` da fonte;
- Items: 78 caminhos locais idênticos ao `img` da fonte;
- demais entradas: fallback genérico, sem associação por semelhança.

Após descontar todos os IDs congelados, os próximos cursores são:

- Bestiário: nível 2 de `Pathfinder Monster Core 2`, com 11 criaturas pendentes;
- Spells: Rank 6 de `Pathfinder Player Core`, com 24 magias pendentes;
- Items: nível 0 de `Pathfinder GM Core`, com 60 itens pendentes.

As 18 magias pendentes do Rank 5 foram concluídas. `Pathfinder Player Core`
ainda possui 80 magias elegíveis em Ranks superiores e, por isso, o cursor de
Spells não pode avançar para `Pathfinder Player Core 2`.

### Cobertura exaustiva 08

O oitavo lote continua `Pathfinder Player Core` em Spells e mantém as
publicações correntes dos outros domínios.

Seleção importada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core 2 | 11 criaturas de nível 2, 24 de nível 3, 31 de nível 4, 22 de nível 5 e 12 de nível 6 |
| Spells | 40 | Pathfinder Player Core | 24 spells de Rank 6 e 16 de Rank 7 |
| Items | 100 | Pathfinder GM Core | 60 itens de nível 0, 33 de nível 1 e 7 de nível 2 |

### Cobertura exaustiva 09

O nono lote importa as últimas 40 magias elegíveis de
`Pathfinder Player Core`. Somente depois desta seleção o livro pode ser
considerado esgotado para Spells.

Seleção importada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core 2 | 16 criaturas de nível 6, 26 de nível 7, 20 de nível 8, 21 de nível 9 e 17 de nível 10 |
| Spells | 40 | Pathfinder Player Core | 4 spells de Rank 7, 14 de Rank 8, 12 de Rank 9 e 10 de Rank 10 |
| Items | 100 | Pathfinder GM Core | 11 itens de nível 2, 36 de nível 3, 27 de nível 4 e 26 de nível 5 |

### Cobertura exaustiva 10

Com `Pathfinder Player Core` comprovadamente esgotado na cobertura 09, o décimo
lote inicia `Pathfinder Player Core 2` para Spells. Bestiário e Items continuam
em suas publicações correntes.

Seleção importada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder Monster Core 2 | 4 criaturas de nível 10, 18 de nível 11, 17 de nível 12, 26 de nível 13, 11 de nível 14, 18 de nível 15 e 6 de nível 16 |
| Spells | 40 | Pathfinder Player Core 2 | 21 spells de Rank 1, 13 de Rank 2 e 6 de Rank 3 |
| Items | 100 | Pathfinder GM Core | 5 itens de nível 5, 40 de nível 6, 35 de nível 7 e 20 de nível 8 |

Nas três coberturas, o pack técnico de Bestiário permanece
`pathfinder-monster-core-2`. Os IDs foram congelados antes da tradução, os
overlays PT-BR entraram como `MACHINE_DRAFT` e os ícones foram associados
somente por correspondência exata do `img`.

O documento `Sportlebore` de Monster Core 2 possui `type = "hazard"`. A decisão
anterior de excluí-lo foi substituída: hazards agora pertencem ao domínio
`BESTIARY` com contrato discriminado e sem conversão artificial em criatura.

### Cobertura exaustiva 11

O décimo primeiro lote conclui `Pathfinder Monster Core 2`, incluindo o hazard
anteriormente excluído, e usa a capacidade restante para importar os 32 hazards
de `Pathfinder GM Core`. Spells e Items continuam seus cursores independentes.

Seleção importada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 78 | Pathfinder Monster Core 2 + Pathfinder GM Core | 45 criaturas restantes de níveis 17–24, Sportlebore de nível 7 e 32 hazards de GM Core de níveis 0–23 |
| Spells | 40 | Pathfinder Player Core 2 | 5 spells de Rank 3, 11 de Rank 4, 11 de Rank 5, 5 de Rank 6, 3 de Rank 7, 4 de Rank 8 e 1 de Rank 9 |
| Items | 100 | Pathfinder GM Core | 13 itens de nível 8, 40 de nível 9 e 47 de nível 10 |

Os packs de Bestiário são, nesta ordem:

```text
pathfinder-monster-core-2
hazards
```

Após a cobertura, Monster Core 2 e os hazards Core Remaster de GM Core ficam
esgotados. Os demais hazards seguem a publicação de origem nos programas
posteriores do roadmap.

Source lock da cobertura 11:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 433f0564fc8b62d83dc7b0fbc929b1fa75c56af67f030a2f4d01366001d0ced2
importerVersion: 7
status: REVIEWING
```

### Cobertura exaustiva 12

O décimo segundo lote é a primeira transição entre programas com cursores
independentes. Bestiário esgotou o Core Remaster e avança para
`Pathfinder NPC Core`; Spells e Items permanecem no Core Remaster até esgotarem
suas publicações correntes. A rodada continua classificada como `CORE_REMASTER`,
o programa mais antigo que ainda possui conteúdo pendente.

Seleção importada e auditada na revisão travada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder NPC Core | 20 NPCs de nível -1, 17 de nível 0, 23 de nível 1, 30 de nível 2 e 10 de nível 3 |
| Spells | 4 | Pathfinder Player Core 2 | 3 spells de Rank 9 e 1 de Rank 10, esgotando a publicação |
| Items | 100 | Pathfinder GM Core | 1 item de nível 10, 30 de nível 11, 35 de nível 12, 28 de nível 13 e 6 de nível 14 |

O pack técnico de Bestiário é `pathfinder-npc-core`. Após a seleção esperada,
os próximos cursores serão:

- Bestiário: nível 3 de `Pathfinder NPC Core`, com 21 NPCs pendentes;
- Spells: `Pathfinder Player Core 2` esgotado; a próxima publicação Core com
  spell elegível é `Pathfinder GM Core`;
- Items: nível 14 de `Pathfinder GM Core`, com 27 itens pendentes.

Associações exatas de assets:

- Bestiário: 100 ícones locais;
- Spells: 1 ícone local;
- Items: 67 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 12:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: cf64c913ddaee558a59459d7eba1336aa8dab738a1d17ab8fb98402f8c3b4c8d
importerVersion: 7
status: REVIEWING
```

### Cobertura exaustiva 13

O décimo terceiro lote continua a transição sem avançar nenhum cursor
prematuramente.

Seleção importada e auditada na revisão travada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 100 | Pathfinder NPC Core | 21 NPCs restantes de nível 3, 22 de nível 4, 23 de nível 5, 29 de nível 6 e 5 de nível 7 |
| Spells | 1 | Pathfinder GM Core | único spell elegível, de Rank 8, esgotando a publicação |
| Items | 100 | Pathfinder GM Core | 27 itens restantes de nível 14, 24 de nível 15, 17 de nível 16 e 32 de nível 17 |

O pack técnico de Bestiário permanece `pathfinder-npc-core`.

Associações exatas de assets:

- Bestiário: 100 ícones locais;
- Spells: 1 ícone local;
- Items: 67 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 13:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 6e1355fbb31e3c637ef280746c2925f849a6cf8a4e982ae0956b3ffb34db1042
importerVersion: 7
status: REVIEWING
```

### Cobertura exaustiva 14

O décimo quarto lote conclui simultaneamente Bestiário e Spells de
`Pathfinder NPC Core` e Items de `Pathfinder GM Core`.

Seleção importada e auditada na revisão travada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 71 | Pathfinder NPC Core | 15 NPCs restantes de nível 7, 15 de nível 8, 8 de nível 9, 9 de nível 10, 4 de nível 11, 4 de nível 12, 5 de nível 13, 2 de nível 14, 4 de nível 15, 1 de nível 16, 2 de nível 17, 1 de nível 18 e 1 de nível 19 |
| Spells | 4 | Pathfinder NPC Core | um spell em cada Rank de 1 a 4 |
| Items | 57 | Pathfinder GM Core | 5 itens restantes de nível 17, 22 de nível 18, 15 de nível 19, 10 de nível 20, 2 de nível 23, 1 de nível 24 e 2 de nível 25 |

Associações exatas de assets:

- Bestiário: 71 ícones locais;
- Spells: nenhum ícone local;
- Items: 36 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 14:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: d70ceddc4e153547917ada8b5ea3112a7d85cdf95d8731cac8923b34792be4ef
importerVersion: 7
status: REVIEWING
```

Após a cobertura 14:

- Core Remaster fica esgotado nos três domínios;
- Bestiário e Spells de NPC Core ficam esgotados;
- Items de NPC Core passa a ser o cursor editorial mais antigo, com 11 itens
  pendentes;
- a próxima cobertura será classificada em `NPC_CORE` e acumulará as fontes
  necessárias do programa Rulebooks para completar Bestiário e Spells.

### Cobertura exaustiva 15

O décimo quinto lote conclui o cursor de Items de `Pathfinder NPC Core` e
inicia os cursores de Bestiário e Spells do primeiro Rulebook Remaster elegível,
`Pathfinder Rage of Elements`. A rodada permanece classificada em `NPC_CORE`
porque esse ainda é o programa editorial mais antigo com pendência no início
da entrega.

Seleção importada e auditada na revisão travada:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 81 | Pathfinder Rage of Elements | todas as 81 criaturas da publicação: 2 de nível 0, 10 de nível 1, 4 de nível 2, 4 de nível 3, 3 de nível 4, 7 de nível 5, 3 de nível 6, 3 de nível 7, 5 de nível 8, 4 de nível 9, 7 de nível 10, 7 de nível 11, 1 de nível 12, 9 de nível 13, 5 de nível 14, 1 de nível 17, 5 de nível 18 e 1 de nível 23 |
| Spells | 40 | Pathfinder Rage of Elements | 27 spells de Rank 1 e 13 de Rank 2 |
| Items | 11 | Pathfinder NPC Core | 2 itens de nível 1, 1 de nível 2, 2 de nível 3, 2 de nível 4, 1 de nível 6, 1 de nível 11, 1 de nível 12 e 1 de nível 18 |

O pack técnico de Bestiário é `rage-of-elements-bestiary`. O inventário
confirma:

- Bestiário de Rage of Elements esgotado após esta seleção;
- Spells de Rage of Elements permanece no Rank 2, com 81 entradas pendentes;
- Items de NPC Core esgotado após esta seleção;
- os 81 registros de Bestiário e os 121 spells elegíveis de Rage of Elements
  possuem `remaster = true`;
- a licença `OGL` preservada nesses registros não os reclassifica como Legacy,
  pois o programa `LEGACY_OGL` é reservado a conteúdo `remaster = false`.

Associações exatas de assets:

- Bestiário: 81 ícones locais;
- Spells: 15 ícones locais;
- Items: 4 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 15:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 2c6b2ca517f564ce3e3c6960d027f0218de378b9e85eb8a778557f905e7bc018
importerVersion: 7
status: REVIEWING
```

Após a cobertura 15:

- NPC Core fica esgotado nos três domínios;
- Bestiário de Rage of Elements fica esgotado e o próximo Rulebook elegível
  para esse domínio é `Pathfinder Howl of the Wild`;
- Spells permanece no Rank 2 de Rage of Elements, com 10 spells nesse Rank e
  81 entradas no total ainda pendentes;
- Items avança para Rage of Elements, cuja primeira seleção começa no nível 1;
- a próxima cobertura será classificada em `RULEBOOKS`.

### Cobertura exaustiva 16

O décimo sexto lote inaugura os limites ampliados `200 / 100 / 200`. O
inventário da fonte travada, após descontar todas as coberturas anteriores,
esgota as três publicações correntes sem misturar livros para preencher
capacidade. Com 307 registros, esta passa a ser a maior cobertura até aqui,
superando o máximo histórico de 240 registros:

| Domínio | Quantidade | Publicação | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 76 | Pathfinder Howl of the Wild | 2 criaturas de nível 0, 2 de nível 1, 5 de nível 2, 7 de nível 3, 10 de nível 4, 6 de nível 5, 4 de nível 6, 6 de nível 7, 4 de nível 8, 4 de nível 9, 2 de nível 10, 5 de nível 11, 4 de nível 12, 2 de nível 13, 1 de nível 14, 3 de nível 15, 2 de nível 16, 1 de nível 17, 2 de nível 18 e 4 de nível 22 |
| Spells | 81 | Pathfinder Rage of Elements | 10 de Rank 2, 17 de Rank 3, 20 de Rank 4, 11 de Rank 5, 10 de Rank 6, 7 de Rank 7, 4 de Rank 8, 1 de Rank 9 e 1 de Rank 10 |
| Items | 150 | Pathfinder Rage of Elements | 6 de nível 1, 3 de nível 2, 9 de nível 3, 4 de nível 4, 3 de nível 5, 7 de nível 6, 11 de nível 7, 12 de nível 8, 11 de nível 9, 8 de nível 10, 14 de nível 11, 16 de nível 12, 11 de nível 13, 10 de nível 14, 7 de nível 15, 3 de nível 16, 6 de nível 17, 6 de nível 18, 2 de nível 19 e 1 de nível 20 |

O pack técnico de Bestiário é `howl-of-the-wild-bestiary`. A rodada é
classificada em `RULEBOOKS`; os IDs foram congelados antes da tradução e todos
os overlays automáticos permanecem em `MACHINE_DRAFT`.

Associações exatas de assets:

- Bestiário: 76 ícones locais;
- Spells: 42 ícones locais;
- Items: 63 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 16:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: fdfa4416ebaf2af6a2b8864346956a8b21ade30e1ef71fddb0c5b721e293ee39
importerVersion: 7
status: REVIEWING
```

Após a cobertura 16:

- Bestiário de `Pathfinder Howl of the Wild` fica esgotado; o próximo cursor
  inicia `Pathfinder War of Immortals` no nível 4, com 16 entradas na publicação;
- Spells de `Pathfinder Rage of Elements` fica esgotado; o próximo cursor inicia
  `Pathfinder Howl of the Wild` no Rank 1, com 16 entradas na publicação;
- Items de `Pathfinder Rage of Elements` fica esgotado; o próximo cursor inicia
  `Pathfinder Howl of the Wild` no nível 0, com 113 entradas na publicação.

### Cobertura exaustiva 17

O décimo sétimo lote inaugura os limites `400 / 200 / 400` e conclui três
publicações consecutivas do programa `RULEBOOKS`, sempre preservando a
precedência editorial dentro de cada domínio:

1. `Pathfinder Howl of the Wild`, já esgotado no Bestiário;
2. `Pathfinder War of Immortals`;
3. `Pathfinder Battlecry!`.

Seleção determinística importada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 71 | Pathfinder War of Immortals + Pathfinder Battlecry! | 4 entradas de nível 4, 4 de nível 5, 13 de nível 6, 6 de nível 7, 5 de nível 8, 5 de nível 9, 5 de nível 10, 5 de nível 11, 7 de nível 12, 4 de nível 13, 3 de nível 14, 3 de nível 15, 1 de nível 16, 1 de nível 17, 1 de nível 18 e uma em cada nível 21, 23, 24 e 25 |
| Spells | 56 | Pathfinder Howl of the Wild + Pathfinder War of Immortals + Pathfinder Battlecry! | 7 de Rank 1, 10 de Rank 2, 7 de Rank 3, 7 de Rank 4, 6 de Rank 5, 7 de Rank 6, 2 de Rank 7, 5 de Rank 8, 1 de Rank 9 e 4 de Rank 10 |
| Items | 386 | Pathfinder Howl of the Wild + Pathfinder War of Immortals + Pathfinder Battlecry! | 46 de nível 0, 12 de nível 1, 14 de nível 2, 28 de nível 3, 31 de nível 4, 28 de nível 5, 16 de nível 6, 27 de nível 7, 25 de nível 8, 13 de nível 9, 23 de nível 10, 15 de nível 11, 19 de nível 12, 15 de nível 13, 10 de nível 14, 13 de nível 15, 9 de nível 16, 10 de nível 17, 9 de nível 18, 6 de nível 19, 12 de nível 20, uma em cada nível 21, 23 e 24 e 2 de nível 25 |

Os packs técnicos de Bestiário são, nesta ordem:

```text
war-of-immortals-bestiary
battlecry-bestiary
```

Com 513 registros, a cobertura supera os 307 registros da cobertura 16.

Associações exatas de assets:

- Bestiário: 71 ícones locais;
- Spells: 6 ícones locais;
- Items: 94 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 17:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 6df6b11abe7d0747fb93e0e97ae979ea0b3c0a78f3d75816069f48522bb0178a
importerVersion: 8
status: REVIEWING
```

O glossário compartilhado passa a cobrir `mythic`, `aquadynamic`, `catalyst`,
`fatal-aim-d12`, `graft`, `integrated-1d6-s-versatile-p`, `laminar`,
`repeating`, `tearing` e `whetstone`; `charau-ka` e `kaiju` são termos próprios
explicitamente preservados.

Após a cobertura 17:

- Bestiário de `Pathfinder War of Immortals` e `Pathfinder Battlecry!` fica
  esgotado;
- Spells e Items de `Pathfinder Howl of the Wild`,
  `Pathfinder War of Immortals` e `Pathfinder Battlecry!` ficam esgotados;
- o próximo grupo de Rulebooks deve ser congelado a partir do inventário
  remanescente da mesma revisão, sem avançar para `LOST_OMENS`.

### Cobertura exaustiva 18

O décimo oitavo lote cobre os Rulebooks Remaster remanescentes em ordem
editorial original entre as publicações ainda não importadas:

1. `Pathfinder Guns & Gears`;
2. `Pathfinder Dark Archive (Remastered)`;
3. `Pathfinder Treasure Vault (Remastered)`.

Como Guns & Gears não possui Bestiário ou Spells elegíveis na fonte travada,
os cursores desses domínios começam em Dark Archive. A seleção determinística é:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 26 | Pathfinder Dark Archive (Remastered) | 2 hazards de nível -1, 1 de nível 0, 2 de nível 1, 1 de nível 2, 1 de nível 3, 1 criatura de nível 4, 1 hazard de nível 5, 3 entradas de nível 6, 3 de nível 8, 1 de nível 9, 2 de nível 12, 1 criatura de nível 13, 4 entradas de nível 14, 2 hazards de nível 17 e 1 de nível 20 |
| Spells | 32 | Pathfinder Dark Archive (Remastered) + Pathfinder Treasure Vault (Remastered) | 5 de Rank 1, 2 de Rank 2, 9 de Rank 3, 4 de Rank 4, 3 de Rank 5, 3 de Rank 6, 3 de Rank 7, 2 de Rank 8 e 1 de Rank 9 |
| Items | 400 | Pathfinder Guns & Gears + Pathfinder Dark Archive (Remastered) + Pathfinder Treasure Vault (Remastered) | 135 de nível 0, 40 de nível 1, 16 de nível 2, 27 de nível 3, 18 de nível 4, 19 de nível 5, 15 de nível 6, 13 de nível 7, 12 de nível 8, 20 de nível 9, 16 de nível 10, 11 de nível 11, 12 de nível 12, 8 de nível 13, 5 de nível 14, 11 de nível 15, 5 de nível 16, 10 de nível 17, 3 de nível 18 e 2 em cada nível 19 e 20 |

O pack técnico de Bestiário é `pathfinder-dark-archive`. A seleção de Items
conclui as 308 entradas elegíveis de Guns & Gears, as 49 de Dark Archive e
importa as primeiras 43 de Treasure Vault, todas de nível 0.

O item `Fortress Plate` possui `publication.title` com um espaço inicial na
fonte. O importador 9 passa a comparar e persistir o título sem whitespace
externo, preservando o hash do documento bruto e registrando
`source-publication-title-trimmed` no manifesto quando o item cruzar o cursor.
Como ele é de nível 2, ainda não integra esta cobertura e o lote 18 não possui
avisos de normalização.

Com 458 registros, o lote permanece dentro dos limites `400 / 200 / 400`.

Associações exatas de assets:

- Bestiário: 26 ícones locais;
- Spells: 24 ícones locais;
- Items: 250 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 18:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 25dab5adf7e785ba3fc998ff58457c2f04e7c1ea20b73ca5b306b03b92523c15
importerVersion: 9
status: REVIEWING
```

O glossário compartilhado passa a cobrir as traits inéditas `adjusted`,
`adjustment`, `attached-to-crossbow-or-firearm`, `brace`, `contract`,
`deflecting-bludgeoning`, `deflecting-physical-ranged`, `deflecting-slashing`,
`double-barrel`, `fatal-aim-d10`, `foldaway`, `gadget`, `harnessed`,
`hindering`, `injection`, `inscribed`, `integrated-1d6-s`, `launching-dart`,
`shield-throw-20`, `steam`, `training` e `vehicular`.

Após a cobertura 18:

- Bestiário e Spells de `Pathfinder Dark Archive (Remastered)` ficam esgotados;
- o único Spell de `Pathfinder Treasure Vault (Remastered)` fica importado;
- Items de `Pathfinder Guns & Gears` e
  `Pathfinder Dark Archive (Remastered)` ficam esgotados;
- Items de `Pathfinder Treasure Vault (Remastered)` avança 43 registros e
  mantém 1.054 pendentes; o próximo cursor continua no nível 0, em
  `Corset Knife`.

### Cobertura exaustiva 19

O décimo nono lote prioriza criaturas conforme solicitado e aplica a transição
independente dos cursores. Bestiário e Spells já esgotaram `RULEBOOKS` e
avançam para as publicações Remaster de `LOST_OMENS`; Items permanece em
`Pathfinder Treasure Vault (Remastered)` até esgotar seu cursor de Rulebooks.
Por isso, a rodada continua classificada no programa `RULEBOOKS`, o programa
mais antigo ainda ativo.

No Bestiário, publicações sem atores elegíveis são atravessadas sem criar
placeholders. A precedência editorial efetiva é:

1. `Pathfinder Lost Omens Tian Xia World Guide`;
2. `Pathfinder Lost Omens Shining Kingdoms`;
3. `Pathfinder Lost Omens Draconic Codex`;
4. `Pathfinder Lost Omens Hellfire Dispatches`;
5. `Pathfinder Lost Omens High Seas`.

Em Spells, a fila começa na primeira publicação com magias elegíveis e segue:

1. `Pathfinder Lost Omens Divine Mysteries`;
2. `Pathfinder Lost Omens Rival Academies`;
3. `Pathfinder Lost Omens Shining Kingdoms`;
4. `Pathfinder Lost Omens Draconic Codex`;
5. `Pathfinder Lost Omens High Seas`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 291 | Tian Xia World Guide + Shining Kingdoms + Draconic Codex + Hellfire Dispatches + High Seas | 291 criaturas e nenhum hazard: 1 de nível -1, 1 de nível 0, 3 de nível 1, 4 em cada nível 2 e 3, 6 em cada nível 4 e 5, 9 de nível 6, 10 de nível 7, 14 de nível 8, 15 de nível 9, 18 de nível 10, 17 de nível 11, 11 de nível 12, 14 em cada nível 13 e 14, 13 de nível 15, 8 de nível 16, 9 de nível 17, 18 de nível 18, 16 de nível 19, 23 de nível 20, 18 em cada nível 21 e 22, 19 de nível 23 e 2 de nível 24 |
| Spells | 93 | Divine Mysteries + Rival Academies + Shining Kingdoms + Draconic Codex + High Seas | 25 de Rank 1, 19 de Rank 2, 18 de Rank 3, 8 de Rank 4, 7 de Rank 5, 2 de Rank 6, 9 de Rank 7, 3 de Rank 8 e 1 em cada Rank 9 e 10 |
| Items | 400 | Pathfinder Treasure Vault (Remastered) | 31 de nível 0, 45 de nível 1, 28 de nível 2, 67 de nível 3, 53 de nível 4, 79 de nível 5, 66 de nível 6 e 31 de nível 7 |

O pack técnico das 291 criaturas é `lost-omens-bestiary`. A seleção de Items
inclui `Fortress Plate`; o importador 9 deve remover somente o whitespace
externo de `publication.title`, preservar o hash bruto e registrar
`source-publication-title-trimmed`.

Com 784 registros, o lote permanece dentro dos limites `400 / 200 / 400`.

Associações exatas de assets:

- Bestiário: 291 ícones locais;
- Spells: 6 ícones locais;
- Items: 156 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 19:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: b8a3df669779f8de55d8f1f65d475f8f0c54a5a0af544ec07902e7d7469b03c6
importerVersion: 9
status: REVIEWING
```

O manifesto possui um único aviso de normalização:

```text
pf2e:item:equipment-srd:fortress-plate
  source-publication-title-trimmed
```

O glossário compartilhado passa a cobrir `secret`, `coda`, `entrench-melee`,
`entrench-ranged`, `grimoire`, `hefty-2`, `lozenge`, `missive`, `ponderous`,
`processed`, `recovery`, `shield-throw-30`, `spellgun` e `tattoo`; `conrasu` e
`fulu` são termos próprios explicitamente preservados.

Após a cobertura 19:

- as 291 entradas do Bestiário são criaturas; nenhum hazard foi usado para
  inflar a prioridade solicitada;
- Bestiário e Spells esgotam a fila Lost Omens Remaster disponível até
  `Pathfinder Lost Omens High Seas`;
- Items de `Pathfinder Treasure Vault (Remastered)` avança mais 400 registros
  e mantém 654 pendentes;
- o próximo cursor de Items continua no nível 7, com 23 entradas nesse nível,
  começando por `Verdant Branch`.

### Cobertura exaustiva 20

O vigésimo lote volta a ocupar o limite completo do Bestiário. Como a fila
Remaster de Lost Omens foi esgotada na cobertura 19, o cursor atravessa primeiro
as aventuras independentes Remaster elegíveis e, em seguida, inicia as
compilações de Adventure Paths. Items continua no cursor independente de
`Pathfinder Treasure Vault (Remastered)`; por isso, a rodada permanece
classificada no programa `RULEBOOKS`, o programa mais antigo ainda ativo.

O título misto `Pathfinder Beginner Box` não participa desta seleção: seus
registros combinam conteúdo Remaster e Legacy/OGL, e uma seleção apenas pelo
título anteciparia sete entradas não elegíveis. O suplemento distinto
`Pathfinder Beginner Box: Secrets of the Unlit Star`, integralmente Remaster,
permanece elegível.

A precedência editorial e técnica congelada para o Bestiário é:

1. `Pathfinder Adventures: Dark Archive Web Supplement: In Darkness (Remastered)`
   em `pathfinder-dark-archive`;
2. `Pathfinder Free RPG Day Adventure: The Great Toy Heist` em
   `one-shot-bestiary`;
3. `Pathfinder Adventure: Prey for Death` em `prey-for-death-bestiary`;
4. `Pathfinder Claws of the Tyrant` em `claws-of-the-tyrant-bestiary`;
5. `Pathfinder Adventures: Troubles in Grayce` em
   `troubles-in-grayce-bestiary`;
6. `Pathfinder Adventure: The Scourge of Sheerleaf` em `one-shot-bestiary`;
7. `Pathfinder Game Night: Dawn of the Frogs` em `standalone-adventures`;
8. `Pathfinder Beginner Box: Secrets of the Unlit Star` em
   `menace-under-otari-bestiary`;
9. `Pathfinder Adventure Path: Gatewalkers` em `gatewalkers-bestiary`;
10. `Pathfinder Season of Ghosts Hardcover Compilation` em
    `season-of-ghosts-bestiary`;
11. `Pathfinder #201: Pactbreaker` em `wardens-of-wildwood-bestiary`;
12. `Pathfinder #202: Severed at the Root` em
    `wardens-of-wildwood-bestiary`.

Em Spells, a fila elegível da mesma transição segue:

1. `Pathfinder Adventure: Prey for Death`;
2. `Pathfinder Adventure Path: Gatewalkers`;
3. `Pathfinder Season of Ghosts Hardcover Compilation`;
4. `Pathfinder #201: Pactbreaker`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | aventuras independentes Remaster + Gatewalkers + Season of Ghosts + Pactbreaker + início de Severed at the Root | 298 criaturas e 102 hazards: 6 de nível -1, 8 de nível 0, 28 de nível 1, 38 de nível 2, 52 de nível 3, 39 de nível 4, 31 de nível 5, 34 de nível 6, 35 de nível 7, 21 de nível 8, 15 de nível 9, 6 de nível 10, 11 de nível 11, 12 de nível 12, 8 de nível 13, 6 de nível 14, 5 de nível 15, 13 de nível 16, 9 em cada nível 17, 18 e 19, 4 de nível 20 e 1 de nível 22 |
| Spells | 20 | Prey for Death + Gatewalkers + Season of Ghosts + Pactbreaker | 3 em cada Rank 1 e 2, 2 de Rank 3, 8 de Rank 4 e 2 em cada Rank 5 e 6 |
| Items | 400 | Pathfinder Treasure Vault (Remastered) | 23 de nível 7, 70 de nível 8, 54 em cada nível 9 e 10, 72 de nível 11, 78 de nível 12, 37 de nível 13 e 12 de nível 14 |

O Bestiário fica distribuído por publicação em 4, 2, 40, 42, 53, 3, 8, 24,
88, 88, 31 e 17 entradas, respectivamente. Com 820 registros, o lote permanece
dentro dos limites `400 / 200 / 400`.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 3 ícones locais;
- Items: 135 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 20:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 38a3c1ff4f618e765d5d42d19e84094503711d1cd5b4ad09b585340a07f0fd27
importerVersion: 9
status: REVIEWING
```

O manifesto não possui avisos de normalização. O glossário compartilhado passa
a cobrir `chaotic`, `critical-fusion`, `good`, `herald`, `lawful`, `minion`,
`possession`, `press` e `silver`; `nindoru` e `wraithvine` são taxonomias
próprias explicitamente preservadas.

Após a cobertura 20:

- as aventuras independentes Remaster elegíveis ficam esgotadas no Bestiário;
- `Gatewalkers`, `Season of Ghosts` e `Pactbreaker` ficam esgotados no
  Bestiário, e `Severed at the Root` mantém 16 entradas pendentes; o próximo
  cursor é o hazard de nível 8 `Unwelcome Guests`;
- as quatro publicações selecionadas em Spells ficam esgotadas;
- Items de `Pathfinder Treasure Vault (Remastered)` avança mais 400 registros
  e mantém 254 pendentes: 253 Remaster e `Purloining Cloak`, marcado como
  Legacy/OGL na própria fonte;
- o próximo cursor de Items está no nível 14, com 33 entradas nesse nível,
  começando por `Pactmaster's Grace`.

### Cobertura exaustiva 21

O vigésimo primeiro lote mantém os limites `400 / 200 / 400` e usa o novo modo
editorial explícito `REMASTER_ONLY`. A rodada continua no programa `RULEBOOKS`
porque começa concluindo o cursor Remaster de
`Pathfinder Treasure Vault (Remastered)`. O item `Purloining Cloak`, apesar do
título da publicação, possui `publication.remaster = false` e licença OGL;
portanto, permanece reservado ao futuro programa `LEGACY_OGL`.

No Bestiário, o cursor conclui `Severed at the Root` e segue a numeração dos
Adventure Paths. A precedência editorial e técnica congelada é:

1. `Pathfinder #202: Severed at the Root` em
   `wardens-of-wildwood-bestiary`;
2. `Pathfinder #203: Shepherd of Decay` em
   `wardens-of-wildwood-bestiary`;
3. `Pathfinder #204: Stage Fright` em `curtain-call-bestiary`;
4. `Pathfinder #205: Singer, Stalker, Skinsaw Man` em
   `curtain-call-bestiary`;
5. `Pathfinder #206: Bring the House Down` em `curtain-call-bestiary`;
6. `Pathfinder #207: The Resurrection Flood` em
   `triumph-of-the-tusk-bestiary`;
7. `Pathfinder #208: Hoof, Cinder, and Storm` em
   `triumph-of-the-tusk-bestiary`;
8. `Pathfinder #209: Destroyer's Doom` em
   `triumph-of-the-tusk-bestiary`;
9. `Pathfinder #210: Whispers in the Dirt` em `spore-war-bestiary`;
10. `Pathfinder #211: The Secret of Deathstalk Tower` em
    `spore-war-bestiary`;
11. `Pathfinder #212: A Voice in the Blight` em `spore-war-bestiary`;
12. `Pathfinder #213: Thirst for Blood` em `pfs-season-6-bestiary`;
13. `Pathfinder #213: Thirst for Blood` em `shades-of-blood-bestiary`;
14. `Pathfinder #214: The Broken Palace` em `shades-of-blood-bestiary`;
15. `Pathfinder #215: To Blot Out the Sun` em
    `shades-of-blood-bestiary`;
16. `Pathfinder Adventure Path #215: To Blot Out the Sun` em
    `shades-of-blood-bestiary`;
17. `Pathfinder #216: The Acropolis Pyre` em `myth-speaker-bestiary`.

Os dois títulos distintos do volume 215 são preservados exatamente como
publicados na fonte. A entrada isolada de `Thirst for Blood` no pack técnico de
Pathfinder Society também preserva sua identidade original e participa na
posição editorial do mesmo volume.

Em Spells, a fila Remaster restante de Adventure Paths segue:

1. `Pathfinder #203: Shepherd of Decay`;
2. `Pathfinder #205: Singer, Stalker, Skinsaw Man`;
3. `Pathfinder #209: Destroyer's Doom`;
4. `Pathfinder #211: The Secret of Deathstalk Tower`;
5. `Pathfinder #212: A Voice in the Blight`;
6. `Pathfinder #216: The Acropolis Pyre`.

Em Items, a precedência é:

1. `Pathfinder Treasure Vault (Remastered)`;
2. `Pathfinder Lost Omens Tian Xia Character Guide`;
3. `Pathfinder Lost Omens Divine Mysteries`;
4. `Pathfinder Lost Omens Rival Academies`;
5. `Pathfinder Lost Omens Shining Kingdoms`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | volumes 202 a 216 de Adventure Paths | 315 criaturas e 85 hazards: 4 de nível -1, 7 de nível 0, 12 de nível 1, 14 de nível 2, 18 de nível 3, 17 de nível 4, 25 de nível 5, 18 de nível 6, 23 de nível 7, 24 de nível 8, 39 de nível 9, 31 de nível 10, 27 de nível 11, 22 em cada nível 12 e 13, 19 de nível 14, 16 de nível 15, 11 de nível 16, 7 de nível 17, 10 de nível 18, 12 de nível 19, 14 de nível 20, 2 de nível 21, 4 de nível 22 e 1 em cada nível 23 e 24 |
| Spells | 20 | Shepherd of Decay + Singer, Stalker, Skinsaw Man + Destroyer's Doom + Secret of Deathstalk Tower + Voice in the Blight + Acropolis Pyre | 3 de Rank 1, 1 de Rank 2, 3 de Rank 3, 2 em cada Rank 4 e 5, 3 de Rank 6 e 2 em cada Rank 7, 8 e 9 |
| Items | 400 | Treasure Vault Remaster + Tian Xia Character Guide + Divine Mysteries + Rival Academies + início de Shining Kingdoms | 12 em cada nível 0, 1, 4 e 5, 11 em cada nível 2 e 3, 7 de nível 6, 4 em cada nível 7 e 8, 5 de nível 9, 9 de nível 10, 7 de nível 11, 5 de nível 12, 4 de nível 13, 41 de nível 14, 42 de nível 15, 37 de nível 16, 46 de nível 17, 51 de nível 18, 25 de nível 19, 35 de nível 20, 2 em cada nível 21 e 23 e 1 em cada nível 22, 24, 25 e 28 |

O Bestiário fica distribuído por publicação em 16, 26, 20, 30, 24, 19, 35,
35, 21, 31, 26, 19, 28, 49, 2 e 19 entradas, agregando as duas fontes do volume
213. Spells fica distribuído em 5, 5, 4, 2, 2 e 2 entradas. Items conclui 253
registros Remaster de Treasure Vault, importa 50 de Tian Xia Character Guide,
4 de Divine Mysteries, 67 de Rival Academies e 26 de Shining Kingdoms.

Com 820 registros, o lote permanece dentro dos limites `400 / 200 / 400`.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 2 ícones locais;
- Items: 118 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 21:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 24bcdfefe2f4f900e8394e41091cd9a264589bbd7e6733e04fabbe092c12d026
importerVersion: 10
sourceMode: REMASTER_ONLY
status: REVIEWING
```

O manifesto não possui avisos de normalização.

O glossário compartilhado passa a cobrir `additive1`, `blight`, `cursebound`,
`flourish` e `unstable`; `beastkin`, `ganzi`, `ghoran`, `palinthanos`,
`poppet`, `siktempora` e `stheno` são taxonomias próprias explicitamente
preservadas.

Após a cobertura 21:

- as 400 entradas do Bestiário se dividem em 315 criaturas e 85 hazards;
- `Severed at the Root` até `To Blot Out the Sun` ficam esgotados na fila
  congelada; `The Acropolis Pyre` mantém 6 entradas pendentes, começando pelo
  hazard de nível 3 `Sapping Slumber`;
- a fila Remaster de Spells dos Adventure Paths selecionados fica esgotada;
- os 253 registros Remaster restantes de Treasure Vault ficam importados;
  `Purloining Cloak` permanece reservado ao programa `LEGACY_OGL`;
- Items avança por Tian Xia Character Guide, Divine Mysteries e Rival
  Academies, e `Shining Kingdoms` mantém 4 entradas pendentes; o próximo cursor
  é `Godrending Ammunition (Greater)`, de nível 18.

### Cobertura exaustiva 22

O vigésimo segundo lote inaugura modos editoriais independentes por domínio.
Spells esgotou comprovadamente toda a fila Remaster selecionável na cobertura
21 e avança sozinho para o início de Legacy/OGL. Bestiário e Items continuam
com `REMASTER_ONLY`. A configuração congelada é:

```text
Items: REMASTER_ONLY
Spells: LEGACY_ONLY
Bestiário: REMASTER_ONLY
```

O programa da rodada é `LOST_OMENS`, o mais antigo ainda ativo: Items conclui
Shining Kingdoms, Draconic Codex, Hellfire Dispatches e High Seas antes de
atravessar aventuras independentes e Adventure Paths. Bestiário continua os
Adventure Paths Remaster; Spells inicia os rulebooks Legacy por Core Rulebook,
Advanced Player's Guide e Secrets of Magic.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Acropolis Pyre + volumes 217–221 + Bastion of Blasphemies + Hell's Destiny + início de Hellbreakers | 289 criaturas e 111 hazards: 1 de nível -1, 3 de nível 0, 10 de nível 1, 15 de nível 2, 11 de nível 3, 17 de nível 4, 31 de nível 5, 25 de nível 6, 26 de nível 7, 27 de nível 8, 21 de nível 9, 16 de nível 10, 27 de nível 11, 16 em cada nível 12 e 13, 13 de nível 14, 18 de nível 15, 17 de nível 16, 19 de nível 17, 29 de nível 18, 10 de nível 19, 18 de nível 20, 4 de nível 21, 7 de nível 22, 2 de nível 23 e 1 de nível 25 |
| Spells | 200 | Core Rulebook + Advanced Player's Guide + início de Secrets of Magic | 32 de Rank 1, 29 de Rank 2, 27 de Rank 3, 32 em cada Rank 4 e 5, 14 de Rank 6, 15 de Rank 7, 10 de Rank 8, 6 de Rank 9 e 3 de Rank 10 |
| Items | 400 | conclusão de Lost Omens Remaster + aventuras independentes + Adventure Paths até Broken Palace | 2 de nível 0, 10 em cada nível 1 e 2, 35 de nível 3, 23 de nível 4, 24 de nível 5, 16 de nível 6, 26 de nível 7, 23 de nível 8, 22 de nível 9, 27 de nível 10, 34 de nível 11, 32 de nível 12, 20 de nível 13, 11 de nível 14, 19 de nível 15, 6 de nível 16, 13 de nível 17, 17 de nível 18, 10 de nível 19, 15 de nível 20, 4 de nível 21 e 1 de nível 22 |

O Bestiário fica distribuído em 6, 18, 38, 23, 42, 35, 83, 90 e 65
entradas. Spells importa 55 do Core Rulebook, 11 do Advanced Player's Guide e
134 de Secrets of Magic. Items conclui as quatro publicações Lost Omens
pendentes e avança, em precedência editorial explícita, até importar 5
registros de `Pathfinder #214: The Broken Palace`.

Com 1.000 registros, o lote permanece dentro dos limites `400 / 200 / 400`.
Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 74 ícones locais;
- Items: 89 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 22:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 199d06ff02e63de15ececea0723de99cb95deb3687a384d62e6bb21a2524048f
importerVersion: 12
sourceMode: REMASTER_ONLY|LEGACY_ONLY|REMASTER_ONLY
status: REVIEWING
```

O manifesto registra seis avisos de normalização: cinco blocos incompletos de
dano de arma foram omitidos, preservando as descrições, e uma perícia com
valor nulo foi descartada sem inventar modificador. O glossário compartilhado
passa a cobrir `nightmare`, `wizard` e `tea`; `gigas` é uma taxonomia própria
explicitamente preservada.

Após a cobertura 22:

- `Pathfinder Adventure Path: Hellbreakers` mantém 13 entradas pendentes; o
  próximo cursor do Bestiário é `Aurocan`, criatura de nível 8;
- `Pathfinder Secrets of Magic` mantém 11 magias Legacy pendentes; o próximo
  cursor de Spells é `Summon Deific Herald`, de Rank 8;
- `Pathfinder #214: The Broken Palace` mantém 4 itens Remaster pendentes; o
  próximo cursor de Items é `Essence Forge (Moderate)`, de nível 12.

### Cobertura exaustiva 23

O vigésimo terceiro lote executa uma reconciliação exaustiva antes de avançar
para conteúdo exclusivamente Legacy/OGL. O inventário completo da fonte
travada encontrou registros Remaster legítimos de livros já visitados em packs
técnicos diferentes dos packs principais. Esses registros preservam IDs,
publicações e licenças próprios e não podem ser descartados apenas porque o
pack principal do livro foi esgotado.

A rodada volta semanticamente ao programa `CORE_REMASTER`, o programa mais
antigo com resíduo elegível comprovado. Os modos editoriais continuam
independentes:

```text
Items: REMASTER_ONLY
Spells: LEGACY_ONLY
Bestiário: REMASTER_ONLY
```

Precedência congelada:

1. Bestiário reconcilia Player Core, Monster Core, Monster Core 2 e Guns &
   Gears nos packs técnicos onde o resíduo foi encontrado; conclui Beginner
   Box e Hellbreakers; depois avança por Pathfinder Society, dos cenários
   5-11 e 5-13 à temporada 6 completa, Quests 20–25 e o início da temporada 7;
2. Spells conclui Secrets of Magic e importa todo o saldo Legacy/OGL elegível
   do pack compartilhado, passando por Lost Omens, aventuras independentes,
   Adventure Paths e Wake the Dead;
3. Items reconcilia Monster Core, Monster Core 2 e Beginner Box; conclui os
   volumes 214–221, Bastion of Blasphemies, Hell's Destiny e Hellbreakers; por
   fim importa a entrada Remaster de Silver Bark, Golden Blades.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | resíduos Core/Rulebooks + Beginner Box + Hellbreakers + Pathfinder Society até parte do cenário 7-03 | 299 criaturas e 101 hazards: 29 de nível -1, 10 de nível 0, 47 de nível 1, 40 de nível 2, 58 de nível 3, 36 de nível 4, 40 de nível 5, 26 de nível 6, 31 de nível 7, 33 de nível 8, 20 de nível 9, 12 de nível 10, 10 de nível 11, 2 de nível 12, 1 de nível 13, 4 de nível 14 e 1 de nível 17 |
| Spells | 189 | conclusão de Secrets of Magic + todo o saldo Legacy/OGL elegível | 34 de Rank 1, 36 de Rank 2, 27 de Rank 3, 28 de Rank 4, 19 de Rank 5, 12 de Rank 6, 7 de Rank 7, 8 de Rank 8, 13 de Rank 9 e 5 de Rank 10 |
| Items | 171 | resíduos Core/Beginner Box + volumes 214–221 + três Adventure Paths + Silver Bark, Golden Blades | 3 de nível 0, 5 de nível 1, 6 de nível 2, 16 de nível 3, 8 de nível 4, 12 em cada nível 5 e 6, 19 de nível 7, 10 de nível 8, 5 de nível 9, 8 de nível 10, 7 de nível 11, 7 de nível 12, 4 de nível 13, 10 de nível 14, 7 de nível 15, 5 de nível 16, 6 de nível 17, 5 de nível 18, 2 de nível 19, 8 de nível 20, 3 de nível 21, 2 de nível 23 e 1 de nível 25 |

Spells e Items encerram abaixo dos limites máximos porque a fonte se esgota
para os respectivos modos editoriais selecionados. Nenhum registro artificial
é criado para alcançar `200 / 400`. Com 760 registros, o lote permanece dentro
dos limites `400 / 200 / 400`.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 104 ícones locais;
- Items: 15 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 23:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: a6c6c10b27559b18b6c7ff1da37036f22f638c3c33b171850d8dc42b55fd446e
importerVersion: 12
sourceMode: REMASTER_ONLY|LEGACY_ONLY|REMASTER_ONLY
status: REVIEWING
```

O manifesto registra quatro avisos
`incomplete-weapon-damage-omitted`, um para cada variante de `Atrophy Bomb`.
As descrições foram preservadas integralmente e nenhum dano mecânico
incompleto foi inventado. O glossário compartilhado passa a cobrir
`champion`, `exemplar` e `tech`; `hungerseed` é uma taxonomia própria
explicitamente preservada.

Após a cobertura 23:

- o Bestiário mantém 61 entradas Remaster pendentes; o cenário 7-03 mantém 7
  delas e o próximo cursor é `Naiad Water Guardian`, criatura de nível 5;
- o pack de magias ordinárias `spells/spells` fica integralmente esgotado. O
  saldo de 658 registros do baseline corresponde exatamente a 508 focus
  spells e 150 rituals ainda não incluídos no contrato anterior. A próxima
  expansão começa pelas 403 focus spells Remaster. A precedência editorial
  explícita começa por `Pathfinder Player Core`; portanto, o primeiro cursor
  congelado não é derivado da ordenação global bruta entre publicações;
- Items Remaster elegíveis ficam integralmente esgotados. O próximo cursor
  editorial é Legacy/OGL em `Pathfinder Core Rulebook`, começando por
  `Leaper's Elixir (Lesser)`, de nível 1.

### Cobertura exaustiva 24

O vigésimo quarto lote inaugura o diretório técnico `focus` sem alterar a
identidade lógica `spells-srd`. A rodada permanece semanticamente em
`CORE_REMASTER`: Bestiário conclui o saldo Remaster mais antigo e Spells
continua a reconciliação Core Remaster, enquanto Items avança
independentemente para Legacy/OGL.

Modos editoriais:

```text
Items: LEGACY_ONLY
Spells: REMASTER_ONLY
Bestiário: REMASTER_ONLY
Spell source pack: focus
```

Precedência congelada:

1. Bestiário conclui os 61 registros Remaster restantes da temporada 7 de
   Pathfinder Society e dos dois artigos do blog oficial presentes na fonte;
2. Spells importa todas as 146 focus spells Remaster de
   `Pathfinder Player Core` e as primeiras 54 de
   `Pathfinder Player Core 2`, respeitando Rank e identidade dentro de cada
   publicação;
3. Items importa 400 registros Legacy/OGL, concluindo `Pathfinder Core
   Rulebook`, `Pathfinder Advanced Player's Guide`, `Pathfinder Secrets of
   Magic`, `Pathfinder Gamemastery Guide`, `Pathfinder Bestiary`,
   `Pathfinder Bestiary 2`, `Pathfinder Book of the Dead`, `Pathfinder Dark
   Archive`, `Pathfinder Treasure Vault`, `Pathfinder Treasure Vault
   (Remastered)` e `Pathfinder Lost Omens World Guide`, antes de avançar
   parcialmente por `Pathfinder Lost Omens Character Guide`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 61 | Pathfinder Society temporada 7 + blogs oficiais | saldo Remaster integral: 58 entradas dos cenários 7-03 a 7-22 e 3 entradas de blog |
| Spells | 200 | Pathfinder Player Core + Pathfinder Player Core 2 | 146 focus spells de Player Core e 54 de Player Core 2 |
| Items | 400 | Core Rulebook até parte de Lost Omens Character Guide | 108 + 17 + 180 + 29 + 6 + 2 + 17 + 1 + 18 + 1 + 8 + 13 registros, pela precedência editorial congelada |

Com 661 registros, o lote permanece dentro dos limites `400 / 200 / 400`.
Bestiário encerra abaixo do máximo porque o inventário Remaster elegível se
esgota; nenhum registro artificial é criado.

O inventário de traits deste lote acrescenta `drug` ao glossário compartilhado
como `droga`; todas as demais traits estruturadas já possuem cobertura
explícita.

Resultado importado e traduzido:

- Bestiário: 37 criaturas e 24 hazards; 1 entrada de nível -1, 3 de nível 0,
  8 de nível 1, 4 de nível 2, 7 de nível 3, 6 de nível 4, 2 de nível 5, 6 de
  nível 6, 8 de nível 7, 4 de nível 8, 8 de nível 9, 2 de nível 11, 1 de nível
  13 e 1 de nível 15;
- Spells: 97 de Rank 1, 7 de Rank 2, 27 de Rank 3, 47 de Rank 4, 15 de Rank 5,
  1 de Rank 6, 2 de Rank 7, 1 de Rank 8, 1 de Rank 9 e 2 de Rank 10;
- Items: 11 de nível 0, 9 de nível 1, 15 de nível 2, 29 de nível 3, 20 de
  nível 4, 26 em cada nível 5 e 6, 32 de nível 7, 18 de nível 8, 23 de nível
  9, 33 de nível 10, 18 de nível 11, 34 de nível 12, 17 de nível 13, 9 de
  nível 14, 16 de nível 15, 8 de nível 16, 19 de nível 17, 14 de nível 18, 6
  de nível 19, 11 de nível 20, 1 de nível 22, 1 de nível 25, 2 de nível 26 e
  1 em cada nível 27 e 28.

Associações exatas de assets:

- Bestiário: 61 ícones locais;
- Spells: 107 ícones locais;
- Items: 232 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

Source lock da cobertura 24:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: cd2af90cfdbdbc6284a3d80fcf93c2a90eea27a0d94bf5a01746fd109092d017
importerVersion: 13
sourceMode: LEGACY_ONLY|REMASTER_ONLY|REMASTER_ONLY
spellSourcePack: focus
status: REVIEWING
```

Após a cobertura 24:

- o catálogo contém 9.170 registros distintos: 3.447 de Bestiário, 1.344
  Spells e 4.379 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  9.161 `MACHINE_DRAFT`;
- faltam 3.341 registros para reconciliar o baseline histórico: 2.045 de
  Bestiário, 458 Spells e 838 Items;
- o Bestiário Remaster fica integralmente esgotado. A fila Legacy/OGL começa
  por `Pathfinder Bestiary` no pack `pathfinder-bestiary`; o primeiro cursor é
  `Bloodseeker`, de nível -1;
- `Pathfinder Player Core 2` mantém 19 focus spells Remaster pendentes; o
  próximo cursor é `Wind Jump`, de Rank 5. No total, restam 203 focus spells
  Remaster, 105 focus spells Legacy/OGL e 150 rituals;
- `Pathfinder Lost Omens Character Guide` mantém 18 Items Legacy/OGL
  pendentes; o próximo cursor é `Shining Wayfinder`, de nível 4.

### Cobertura exaustiva 25

O vigésimo quinto lote continua a transição independente dos três domínios.
Bestiário e Items avançam na fila Legacy/OGL, enquanto Spells conclui quase
todo o saldo Remaster do diretório técnico `focus`. A rodada permanece
semanticamente em `CORE_REMASTER`, pois esse ainda é o programa editorial mais
antigo com um cursor pendente.

Modos editoriais:

```text
Items: LEGACY_ONLY
Spells: REMASTER_ONLY
Bestiário: LEGACY_ONLY
Spell source pack: focus
```

Precedência congelada:

1. Bestiário conclui as 160 entradas Legacy/OGL de `Pathfinder Bestiary` e as
   160 de `Pathfinder Bestiary 2`, depois importa as primeiras 80 de
   `Pathfinder Bestiary 3`;
2. Spells conclui as 19 focus spells Remaster pendentes de
   `Pathfinder Player Core 2` e segue integralmente por Rage of Elements,
   Howl of the Wild, War of Immortals, Battlecry!, Dark Archive Remastered,
   Tian Xia Character Guide, Divine Mysteries, Rival Academies, Shining
   Kingdoms, Prey for Death e o volume 202, encerrando exatamente após as 2
   focus spells do volume 215;
3. Items conclui Character Guide, Gods & Magic, Legends, Pathfinder Society
   Guide, Ancestry Guide e The Mwangi Expanse, depois importa as primeiras 239
   entradas de `Pathfinder Lost Omens The Grand Bazaar`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Pathfinder Bestiary 1–3 | 160 + 160 + 80 registros Legacy/OGL, respeitando nível e identidade dentro de cada livro |
| Spells | 200 | Player Core 2 até Pathfinder #215 | 19 + 8 + 18 + 16 + 4 + 38 + 4 + 60 + 16 + 8 + 4 + 3 + 2 focus spells Remaster |
| Items | 400 | Character Guide até parte de The Grand Bazaar | 18 + 16 + 32 + 82 + 8 + 5 + 239 registros Legacy/OGL |

O lote usa integralmente os limites `400 / 200 / 400`, totalizando 1.000
registros. Os IDs devem ser descontados contra as 24 coberturas anteriores
antes da ordenação e congelados antes da tradução.

Durante a validação do lote, a fórmula estruturada de dano de
`Purging Toxins` revelou `@item.rank` fora de campos descritivos. O importador
14 deve resolver fórmulas estruturadas com o Rank do próprio registro, e os
dois adapters de apresentação devem repetir essa proteção para conteúdos já
congelados.

Na revisão das criaturas, 125 ações incorporadas apresentaram nomes mecânicos
com `Saves vs.` ou `AC vs.`. A sanitização da tradução deve reconstruir esses
nomes a partir do original, usando `testes de resistência`, `teste de Vontade`
e `CA` conforme o caso, sem deixar `vs.`, `Will Saves` ou `salvamentos`.

Resultado importado e traduzido:

- Bestiário: 400 criaturas e nenhum hazard; 11 de nível -1, 8 de nível 0, 30
  de nível 1, 48 de nível 2, 36 de nível 3, 23 de nível 4, 33 de nível 5, 20
  de nível 6, 25 de nível 7, 20 de nível 8, 27 de nível 9, 21 de nível 10, 13
  de nível 11, 11 de nível 12, 12 de nível 13, 8 de nível 14, 11 de nível 15,
  9 de nível 16, 8 de nível 17, 9 de nível 18, 8 de nível 19, 5 de nível 20,
  2 de nível 21 e 2 de nível 23;
- Spells: 86 de Rank 1, 7 de Rank 2, 24 de Rank 3, 47 de Rank 4, 16 de Rank 5,
  13 de Rank 6, 1 de Rank 7, 2 de Rank 8, 3 de Rank 9 e 1 de Rank 10;
- Items: 80 de nível 0, 30 de nível 1, 16 de nível 2, 37 de nível 3, 16 de
  nível 4, 21 de nível 5, 23 em cada nível 6 e 7, 22 de nível 8, 31 de nível
  9, 26 de nível 10, 19 de nível 11, 18 de nível 12, 12 de nível 13, 8 de
  nível 14, 3 de nível 15, 4 em cada nível 16 e 17, 3 de nível 18, 1 de nível
  19, 2 de nível 20 e 1 de nível 21.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 55 ícones locais;
- Items: 312 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

O manifesto registra
`missing-source-level-defaulted-to-zero` para `Cartographer's Kit`, um kit sem
nível explícito na fonte. O glossário compartilhado passa a cobrir
`android`, `drow`, `golem`, `inevitable`, `kovintus`, `mortic`, `rage`,
`sea-devil`, `shabti`, `skelm`, `skulk`, `spriggan`, `attached`, `geniekin` e
`resonant`. Taxonomias sem equivalente editorial seguro permanecem
explicitamente preservadas, sem depender de fallback silencioso.

Source lock da cobertura 25:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 2dc6f556c2ac58c3f8f6ca1db1b974f5f56c610874a6d8b2f51342d2b51d4e3a
importerVersion: 14
sourceMode: LEGACY_ONLY|REMASTER_ONLY|LEGACY_ONLY
spellSourcePack: focus
status: REVIEWING
```

Após a cobertura 25:

- o catálogo contém 10.170 registros distintos: 3.847 de Bestiário, 1.544
  Spells e 4.779 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  10.161 `MACHINE_DRAFT`;
- faltam 2.341 registros para reconciliar o baseline histórico: 1.645 de
  Bestiário, 258 Spells e 438 Items;
- `Pathfinder Bestiary 3` mantém 85 criaturas Legacy/OGL pendentes; o próximo
  cursor é `Shrine Skelm`, de nível 5;
- restam somente 3 focus spells Remaster: 2 de `Pathfinder #216: The Acropolis
  Pyre`, começando por `Crown of Prophets`, e `Wish Market` de Hell's Destiny.
  Depois delas, o diretório `focus` mantém 105 entradas Legacy/OGL e o
  diretório `rituals` mantém 150 entradas;
- `Pathfinder Lost Omens The Grand Bazaar` mantém 56 Items Legacy/OGL
  pendentes; o próximo cursor é `Horned Hand Rests (Greater)`, de nível 13.

### Cobertura exaustiva 26

O vigésimo sexto lote amplia novamente os dois domínios com maior saldo e
encerra o cursor Remaster do diretório técnico `focus`. Antes da seleção, a
rodada também aplica a todas as coberturas exaustivas o contrato compartilhado
de concordância feminina imediatamente antes de `magia` e `magias`, corrigindo
formas como `o magia`, `este magia`, `um magia` e `do magia` para `a magia`,
`esta magia`, `uma magia` e `da magia`. A normalização é determinística,
idempotente e passa a valer igualmente para traduções novas e existentes.

Modos editoriais:

```text
Items: LEGACY_ONLY
Spells: REMASTER_ONLY
Bestiário: LEGACY_ONLY
Spell source pack: focus
```

Precedência congelada:

1. Bestiário reconcilia 22 entradas Legacy/OGL ainda pendentes nos packs
   técnicos `hazards` e `npc-gallery`, conclui as 85 criaturas de
   `Pathfinder Bestiary 3`, importa integralmente `Pathfinder Book of the
   Dead`, `Pathfinder Dark Archive` e o saldo de Lost Omens, então avança por
   Age of Ashes até as primeiras 17 entradas de `Pathfinder #148: Fires of
   the Haunted City`;
2. Spells importa as 2 focus spells Remaster de `Pathfinder #216: The
   Acropolis Pyre` e `Wish Market`, de `Pathfinder Adventure Path: Hell's
   Destiny`, esgotando o saldo Remaster do diretório `focus`;
3. Items conclui The Grand Bazaar e segue por Monsters of Myth, Knights of
   Lastwall, Travel Guide, Impossible Lands, Firebrands, Highhelm, Absalom e
   pelos volumes 145–159, encerrando nas primeiras 13 entradas de
   `Pathfinder #160: Assault on Hunting Lodge Seven`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Rulebooks Legacy, Lost Omens e Pathfinder #145–148 | 332 criaturas e 68 hazards, ordenados por publicação, nível e identidade |
| Spells | 3 | Pathfinder #216 e Hell's Destiny | 3 focus spells Remaster de Rank 1 |
| Items | 400 | The Grand Bazaar até parte de Pathfinder #160 | 269 registros de Lost Omens, 118 dos volumes 145–159 e 13 do volume 160 |

O lote totaliza 803 registros. Os IDs devem ser descontados contra as 25
coberturas anteriores antes da ordenação e congelados antes da tradução.

Resultado importado e traduzido:

- Bestiário: 400 entradas, sendo 332 criaturas e 68 hazards; 6 de nível -1,
  7 de nível 0, 21 de nível 1, 17 em cada nível 2 e 3, 20 de nível 4, 25 de
  nível 5, 29 de nível 6, 27 de nível 7, 31 de nível 8, 20 de nível 9, 30 de
  nível 10, 24 de nível 11, 21 em cada nível 12 e 13, 25 de nível 14, 13 de
  nível 15, 10 de nível 16, 5 de nível 17, 14 de nível 18, 4 de nível 19, 6
  em cada nível 20 e 21 e 1 de nível 24;
- Spells: 3 focus spells de Rank 1;
- Items: 53 de nível 0, 15 de nível 1, 12 de nível 2, 26 de nível 3, 20 de
  nível 4, 19 de nível 5, 7 de nível 6, 21 de nível 7, 16 de nível 8, 21 de
  nível 9, 18 de nível 10, 12 de nível 11, 13 de nível 12, 22 de nível 13,
  16 de nível 14, 20 de nível 15, 18 em cada nível 16, 17 e 18, 12 de nível
  19, 15 de nível 20, 2 de nível 22, 1 de nível 23 e 5 de nível 25.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: nenhum ícone local;
- Items: 227 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

A manutenção de concordância corrigiu 5.312 ocorrências inequívocas nas
traduções exaustivas anteriores e a auditoria final não encontrou determinante
masculino imediatamente antes de `magia` ou `magias`. O manifesto da cobertura
26 não registra warnings de normalização. O glossário compartilhado passa a
cobrir `general`, `ranger`, `climbing`, `versatile-spirit` e
`versatile-vitality`; `anadi`, `ghul`, `paaridar` e `saggorak` ficam
explicitamente preservados como taxonomias próprias.

Source lock da cobertura 26:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 2ee8880e451657eb2cb3dda10333f5c4ca6a30e731bf281366dc3ac912fa1ad6
importerVersion: 14
sourceMode: LEGACY_ONLY|REMASTER_ONLY|LEGACY_ONLY
spellSourcePack: focus
status: REVIEWING
```

Após a cobertura 26:

- o catálogo contém 10.973 registros distintos: 4.247 de Bestiário, 1.547
  Spells e 5.179 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  10.964 `MACHINE_DRAFT`;
- faltam 1.538 registros para reconciliar o baseline histórico: 1.245 de
  Bestiário, 255 Spells e 38 Items;
- `Pathfinder #148: Fires of the Haunted City` mantém 8 entradas Legacy/OGL
  pendentes; o próximo cursor é `Falrok`, de nível 14;
- o diretório `focus` não mantém focus spells Remaster pendentes. O próximo
  cursor passa às 105 focus spells Legacy/OGL; o diretório `rituals` mantém
  150 entradas;
- `Pathfinder #160: Assault on Hunting Lodge Seven` mantém 5 Items Legacy/OGL
  pendentes; o próximo cursor é `Hardened Harrow Deck`, de nível 14.

### Cobertura exaustiva 27

O vigésimo sétimo lote opera integralmente em Legacy/OGL. Bestiário continua
a fila cronológica de Adventure Paths, Spells esgota o diretório técnico
`focus` e Items conclui a fila Legacy dos volumes numerados ainda pendentes.

Modos editoriais:

```text
Items: LEGACY_ONLY
Spells: LEGACY_ONLY
Bestiário: LEGACY_ONLY
Spell source pack: focus
```

Precedência congelada:

1. Bestiário conclui as 8 entradas de `Pathfinder #148: Fires of the Haunted
   City`, importa integralmente os volumes 149–161 e encerra nas primeiras 34
   entradas de `Pathfinder #162: Ruins of the Radiant Siege`;
2. Spells importa as 105 focus spells Legacy/OGL restantes, seguindo Core
   Rulebook, Advanced Player's Guide, Secrets of Magic, Book of the Dead,
   Lost Omens e as publicações de aventura presentes no diretório `focus`;
3. Items conclui as 5 entradas de `Pathfinder #160: Assault on Hunting Lodge
   Seven` e importa integralmente todas as entradas elegíveis dos volumes
   numerados restantes até `Pathfinder #200: Seven Dooms for Sandpoint`.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Pathfinder #148–162 | 8 + 20 + 22 + 29 + 31 + 26 + 32 + 27 + 22 + 35 + 27 + 23 + 24 + 40 + 34 entradas |
| Spells | 105 | Core Rulebook até Wake the Dead #2 | saldo integral de focus spells Legacy/OGL |
| Items | 364 | Pathfinder #160–200 | saldo integral de Items Legacy/OGL dos volumes numerados ainda pendentes |

O lote totaliza 869 registros. Items encerra abaixo do limite de 400 porque a
fila editorial selecionada se esgota em 364 registros; a próxima família de
publicações não é antecipada apenas para preencher capacidade. Os IDs devem
ser descontados contra as 26 coberturas anteriores antes da ordenação e
congelados antes da tradução.

Resultado importado e traduzido:

- Bestiário: 400 entradas, sendo 325 criaturas e 75 hazards; 7 de nível -1,
  3 de nível 0, 4 de nível 1, 25 de nível 2, 17 de nível 3, 12 de nível 4,
  13 de nível 5, 14 de nível 6, 20 de nível 7, 21 de nível 8, 11 de nível 9,
  23 de nível 10, 16 de nível 11, 18 de nível 12, 16 de nível 13, 25 em cada
  nível 14, 15 e 18, 24 em cada nível 16 e 17, 21 de nível 19, 20 de nível
  20, 6 de nível 21, 7 de nível 22 e 1 em cada nível 23, 24 e 25;
- Spells: 29 de Rank 1, 8 de Rank 2, 20 de Rank 3, 11 de Rank 4, 18 de Rank
  5, 7 de Rank 6, 6 de Rank 7, 4 de Rank 9 e 2 de Rank 10;
- Items: 12 de nível 0, 20 de nível 1, 7 de nível 2, 23 de nível 3, 19 de
  nível 4, 23 de nível 5, 20 de nível 6, 8 de nível 7, 18 de nível 8, 19 de
  nível 9, 21 de nível 10, 23 de nível 11, 9 de nível 12, 5 de nível 13, 10
  em cada nível 14 e 15, 8 de nível 16, 26 de nível 17, 5 de nível 18, 2 de
  nível 19, 66 de nível 20, 1 de nível 21, 3 de nível 22, 2 de nível 23, 3
  de nível 25 e 1 de nível 26.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 50 ícones locais;
- Items: 169 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

O manifesto registra 13 avisos `incomplete-weapon-damage-omitted`: quatro
variantes de `Tallow Bomb`, quatro de `Pernicious Spore Bomb`, uma de
`Water Bomb` e quatro de `Blood Bomb`. Em todos os casos, a descrição textual
foi preservada e nenhum bloco mecânico incompleto foi inventado. A auditoria
de concordância permanece sem determinantes masculinos imediatamente antes de
`magia` ou `magias`, e nenhum overlay ficou como `NOT_STARTED`.

O glossário compartilhado passa a traduzir `consecration` como `consagração`
e `skill` como `perícia`. As taxonomias próprias `shoony` e `harrow-court`
ficam explicitamente preservadas, evitando traduções literais incorretas.

Source lock da cobertura 27:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: a65bdc88c3d857052a4c967e9482b5d6ab82a2908d8de10ddd8987c788e0e90c
importerVersion: 14
sourceMode: LEGACY_ONLY
spellSourcePack: focus
status: REVIEWING
```

Após a cobertura 27:

- o catálogo contém 11.842 registros distintos: 4.647 de Bestiário, 1.652
  Spells e 5.543 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  11.833 `MACHINE_DRAFT`;
- no baseline histórico, ainda faltam 845 registros de Bestiário e 150
  Spells; Items já excede o baseline em 326 registros. O saldo positivo dos
  dois domínios ainda incompletos é 995 registros;
- `Pathfinder #162: Ruins of the Radiant Siege` mantém 2 criaturas Legacy/OGL
  pendentes; o próximo cursor é `Olansa Terimor`, de nível 23;
- o diretório `focus` fica integralmente esgotado em Remaster e Legacy/OGL. O
  próximo cursor de Spells passa às 150 entradas do diretório `rituals`;
- a fila Legacy/OGL de Items dos volumes numerados até #200 fica esgotada. A
  próxima família é Aventuras independentes, começando pelas 7 entradas de
  `Pathfinder Adventure: The Fall of Plaguestone`; o primeiro cursor é
  `Alchemical Crossbow`, de nível 0.

A reconciliação direta com todos os registros estruturalmente elegíveis da
fonte travada identifica 15.017 entradas: 7.517 de Bestiário, 1.802 Spells e
5.698 Items. Portanto, depois da cobertura 27, o saldo real é de 3.175
registros: 2.870 de Bestiário, 150 Spells e 155 Items. Esse inventário
substitui o saldo meramente comparativo do baseline histórico para planejar as
próximas coberturas, sem alterar o baseline registrado da branch
`development`.

### Cobertura exaustiva 28

O vigésimo oitavo lote reconcilia primeiro as rituals Remaster descobertas no
diretório técnico `rituals`, enquanto Bestiário e Items continuam suas filas
Legacy/OGL. Como o seletor de modo é independente por domínio, a rodada não
usa `ANY` nem mistura rituals Remaster e Legacy/OGL.

Modos editoriais:

```text
Items: LEGACY_ONLY
Spells: REMASTER_ONLY
Bestiário: LEGACY_ONLY
Spell source pack: rituals
```

Precedência congelada para a importação:

1. Bestiário conclui as 2 entradas de `Pathfinder #162: Ruins of the Radiant
   Siege`, importa integralmente os volumes #163–173 e encerra nas primeiras
   29 entradas de `Pathfinder #174: Shadows of the Ancients`;
2. Spells importa as 103 rituals Remaster ainda pendentes, percorrendo Core
   Remaster, Rulebooks adicionais, Lost Omens e aventuras em ordem editorial;
3. Items importa as 155 entradas Legacy/OGL restantes, começando por
   `Pathfinder Adventure: The Fall of Plaguestone` e concluindo as famílias de
   aventuras independentes, compilações, conteúdo organizado, Society,
   quadrinhos e blogs ainda pendentes.

Seleção planejada a partir do inventário da fonte travada:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Pathfinder #162–174 | 2 + 27 + 44 + 32 + 55 + 53 + 30 + 26 + 26 + 25 + 21 + 30 + 29 entradas |
| Spells | 103 | Player Core até Hellbreakers | saldo integral de rituals Remaster |
| Items | 155 | Fall of Plaguestone até blogs e quadrinhos | saldo integral de Items elegíveis |

O lote planejado totaliza 658 registros. Spells e Items encerram abaixo dos
limites de 200 e 400 porque seus respectivos cursores selecionados se esgotam.
Depois desta cobertura, devem restar 2.470 entradas de Bestiário e 47 rituals
Legacy/OGL, sem Items elegíveis pendentes. Os IDs serão descontados contra os
pilotos e as 27 coberturas anteriores antes de serem congelados.

Resultado importado e traduzido:

- Bestiário: 400 entradas, sendo 362 criaturas e 38 hazards; 3 de nível -1,
  10 de nível 0, 4 de nível 1, 11 de nível 2, 15 de nível 3, 19 de nível 4,
  14 de nível 5, 24 de nível 6, 16 de nível 7, 27 em cada nível 8 e 9, 10 de
  nível 10, 22 de nível 11, 10 de nível 12, 42 de nível 13, 25 de nível 14,
  32 de nível 15, 23 de nível 16, 12 de nível 17, 25 de nível 18, 11 de nível
  19, 10 de nível 20, 3 de nível 21, 1 de nível 22, 2 de nível 23 e 1 em cada
  nível 24 e 25;
- Spells: 4 de Rank 1, 16 em cada Rank 2 e 3, 13 de Rank 4, 15 de Rank 5,
  12 de Rank 6, 8 de Rank 7, 7 de Rank 8, 8 de Rank 9 e 4 de Rank 10;
- Items: 2 de nível 0, 13 de nível 1, 9 de nível 2, 15 de nível 3, 12 de nível
  4, 25 de nível 5, 9 de nível 6, 7 de nível 7, 10 de nível 8, 9 de nível 9,
  6 de nível 10, 8 de nível 11, 4 em cada nível 12, 13 e 14, 6 de nível 15,
  5 de nível 17, 3 de nível 18 e 4 de nível 20.

Associações exatas de assets:

- Bestiário: 400 ícones locais;
- Spells: 36 ícones locais;
- Items: 78 ícones locais;
- demais entradas: fallback genérico, sem associação por semelhança.

O manifesto registra 11 avisos `incomplete-weapon-damage-omitted`: três
variantes de `Silver Orb`, quatro de `Steelscour` e quatro de `Redpitch Bomb`.
As descrições permanecem preservadas e nenhum dano estruturado incompleto foi
inventado. A auditoria não encontrou `NOT_STARTED`, “vai salvar” nem
determinantes masculinos imediatamente antes de `magia` ou `magias`.

O glossário compartilhado passa a traduzir `certain-kill` como `morte certa`
e `versatile-fire` como `versátil fogo`. As taxonomias próprias `anugobu`,
`formian`, `hantu`, `ikeshti`, `morlock` e `seugathi` ficam explicitamente
preservadas.

Source lock da cobertura 28:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: b13f309ca24d4b87cdf949bf7ee0bd19db7e77fb68425c4bec7aa33aa39eea29
importerVersion: 14
sourceMode: LEGACY_ONLY|REMASTER_ONLY|LEGACY_ONLY
spellSourcePack: rituals
status: REVIEWING
```

Após a cobertura 28:

- o catálogo contém 12.500 registros distintos: 5.047 de Bestiário, 1.755
  Spells e 5.698 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  12.491 `MACHINE_DRAFT`;
- a fonte travada mantém 2.517 registros elegíveis pendentes: 2.470 de
  Bestiário e 47 Spells, sem Items pendentes;
- `Pathfinder #174: Shadows of the Ancients` mantém 2 criaturas Legacy/OGL
  pendentes, ambas de nível 21: `Aspect of Immortality` e
  `Ironclad Annihilator Beetle`;
- as 103 rituals Remaster ficam esgotadas. O próximo cursor de Spells passa às
  47 rituals Legacy/OGL;
- Items fica integralmente reconciliado com os 5.698 registros elegíveis da
  fonte travada.

### Cobertura exaustiva 29

O vigésimo nono lote conclui as rituals Legacy/OGL e continua o Bestiário
cronológico dos Adventure Paths. Items já está integralmente reconciliado e,
por isso, é declarado em `exhaustedDomains` com zero IDs congelados. Nenhum
registro anterior será repetido para preencher artificialmente o domínio.

Modos editoriais:

```text
Items: LEGACY_ONLY — domínio esgotado
Spells: LEGACY_ONLY
Bestiário: LEGACY_ONLY
Spell source pack: rituals
exhaustedDomains: ITEM
```

Precedência congelada para a importação:

1. Bestiário conclui as 2 entradas de `Pathfinder #174: Shadows of the
   Ancients`, importa integralmente os volumes #175–186 e encerra nas
   primeiras 22 entradas de `Pathfinder #190: The Choosing`;
2. Spells importa as 47 rituals Legacy/OGL ainda pendentes, percorrendo
   Rulebooks, Lost Omens, aventuras, Adventure Paths, Society e publicações
   complementares em ordem editorial;
3. Items mantém seleção vazia após a comprovação de que os 5.698 registros
   elegíveis da fonte já estão integrados.

Resultado importado:

| Domínio | Quantidade | Publicações | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 400 | Pathfinder #174–190 | 308 criaturas e 92 hazards |
| Spells | 47 | Secrets of Magic até Wake the Dead #2 | saldo integral de rituals Legacy/OGL |
| Items | 0 | domínio integralmente esgotado | `exhaustedDomains: ITEM` |

Manifesto congelado:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 8847faa43b2f62a41df75c085b491d225f71e4de247e3c124a7d0b2de1545f55
importerVersion: 14
sourceMode: LEGACY_ONLY|LEGACY_ONLY|LEGACY_ONLY
spellSourcePack: rituals
status: REVIEWING
```

Após a cobertura 29:

- o catálogo contém 12.947 registros distintos: 5.447 de Bestiário, 1.802
  Spells e 5.698 Items; todos possuem overlay PT-BR, sendo 9 `REVIEWED` e
  12.938 `MACHINE_DRAFT`;
- as 47 rituals Legacy/OGL foram integralmente importadas, encerrando Spells
  nos 1.802 registros elegíveis da fonte travada;
- Items continua integralmente reconciliado nos 5.698 registros elegíveis;
- restam 2.070 entradas elegíveis, todas de Bestiário;
- a rodada não produziu avisos de normalização e preservou 400 ícones de
  Bestiário e 25 ícones de Spells.

### Cobertura exaustiva 30 — reconciliação terminal

Por solicitação explícita, a trigésima cobertura encerra de uma vez os 2.070
registros restantes do Bestiário. A rodada é marcada com
`terminalReconciliation = true`; Spells e Items permanecem vazios e declarados
em `exhaustedDomains`.

O inventário travado distribui o saldo entre:

- Adventure Paths #190–195, #199 e #200;
- aventuras independentes, Beginner Box, Kingmaker, blogs e Wake the Dead;
- Pathfinder Society, Bounties, Quests, Introductions, Specials e cenários
  das temporadas 1–6.

Resultado importado:

| Domínio | Quantidade | Seletor | Cobertura do lote |
|---|---:|---|---|
| Bestiário | 2.070 | `ALL_REMAINING_LEGACY_BESTIARY` | 1.607 criaturas e 463 hazards Legacy/OGL |
| Spells | 0 | domínio integralmente esgotado | `exhaustedDomains: SPELL` |
| Items | 0 | domínio integralmente esgotado | `exhaustedDomains: ITEM` |

Manifesto congelado:

```text
systemVersion: 8.3.0
sourceCommit: 01114da5851f31404078d8020809b13e4000bc4b
inputChecksum: 49ee3a1a2e9e8648f315b0653eca5f9bd9ed73835bd37f82b3aaf9b3b1831e3e
importerVersion: 14
sourceMode: LEGACY_ONLY|LEGACY_ONLY|LEGACY_ONLY
terminalBestiaryReconciliation: true
status: REVIEWING
```

Após a cobertura 30:

- o catálogo contém todos os 15.017 registros elegíveis da fonte travada:
  7.517 de Bestiário, 1.802 Spells e 5.698 Items;
- os 2.070 registros da rodada possuem overlay PT-BR `MACHINE_DRAFT`;
- todos os 2.070 registros de Bestiário preservam ícone local exato;
- a rodada não produziu avisos de normalização;
- não restam criaturas, hazards, Spells ou Items elegíveis sem importação;
- a revisão humana das traduções permanece como etapa editorial posterior.

Exemplo: se Bestiário nível 0 possuir 183 criaturas restantes, os primeiros
dois lotes continuam no nível 0. O nível 1 só pode aparecer depois que as 183
forem publicadas ou rejeitadas com justificativa.

# Programa 2 — NPC Core

O NPC Core também segue cursor exaustivo por nível, sem considerar uma faixa
concluída antes de cobrir todos os seus IDs. Cada rodada inclui Spells e Items
da mesma publicação ou diretamente necessários para completar o conjunto
editorial.

# Programa 3 — Rulebooks adicionais

A fila exata será gerada pelo inventário e congelada por data editorial da publicação.

Para cada livro:

1. selecionar Bestiário, Spells e Items pela publicação;
2. acumular com o livro seguinte do mesmo programa quando faltar um domínio;
3. dividir por nível/rank quando os limites forem excedidos;
4. concluir integralmente o grupo antes de avançar.

# Programa 4 — Lost Omens

Processamento por publicação e ordem editorial.

Nenhuma entrada de Lost Omens entra no Core Remaster por conveniência. Cada publicação permanece identificável no manifesto e no catálogo.

# Programa 5 — Aventuras independentes

Processamento por aventura, em ordem editorial. Uma aventura pode ser agrupada com a seguinte quando não possuir conteúdo nos três domínios.

# Programa 6 — Adventure Paths

Processamento por Adventure Path e por volume:

```text
Adventure Path
  → volume 1
  → volume 2
  → volume 3
  → ...
```

Para cada volume, Bestiário é localizado pelo pack da aventura e Spells/Items são localizados principalmente por `publicationTitle`.

Um volume só avança quando sua rodada ou grupo de rodadas estiver publicado em `en-US` e `pt-BR`.

# Programa 7 — Pathfinder Society

Processamento por temporada e cenário, em ordem numérica:

```text
temporada
  → cenário
  → Bestiário + Spells + Items
```

Cenários adjacentes podem ser agrupados para completar os três domínios e respeitar o tamanho mínimo útil da entrega.

# Programa 8 — Legacy/OGL

Último programa.

Regras adicionais:

- separado visual e tecnicamente do Remaster;
- `remaster = false` preservado;
- licença obrigatória;
- possíveis substituições Remaster registradas como relacionamento, sem apagar o original;
- disponibilidade futura deve ser explícita, nunca misturada silenciosamente ao Core Remaster.

# Regra de criação das rodadas concretas

Após o inventário, o planejador percorre a fila editorial e cria rodadas concretas:

1. inicia com a próxima publicação ainda não coberta;
2. calcula o menor nível ou Rank incompleto em cada domínio;
3. seleciona entradas dos três domínios sem saltar valores pendentes;
4. se faltar um domínio, acumula a próxima publicação coerente;
5. aplica os limites correntes `400 / 200 / 400`;
6. divide de forma estável permanecendo no mesmo valor enquanto houver pendências;
7. congela todos os IDs;
8. não altera uma rodada congelada; correções entram em rodada de manutenção.

# Rodadas de manutenção

Uma rodada publicada nunca recebe conteúdo silenciosamente.

Mudanças da fonte geram uma rodada de manutenção ligada à original:

- entrada nova;
- entrada alterada;
- tradução `STALE`;
- correção de normalização;
- item removido ou substituído.

A rodada de manutenção também deve conter os três domínios. Quando uma correção isolada não tiver conteúdo nos três, ela aguarda e é agrupada com outras correções do mesmo programa.

# Critério de conclusão global

O roadmap termina quando:

- todo registro Bestiário/NPC elegível da fonte estiver associado a uma rodada publicada ou rejeição documentada;
- toda Spell elegível estiver associada a uma rodada publicada ou rejeição documentada;
- todo Item elegível estiver associado a uma rodada publicada ou rejeição documentada;
- todos os originais `en-US` estiverem preservados;
- todas as traduções obrigatórias `pt-BR` estiverem revisadas;
- não houver registros órfãos, traduções `STALE` ou publicações sem classificação;
- o relatório final reconciliar a fonte travada com todas as rodadas.
