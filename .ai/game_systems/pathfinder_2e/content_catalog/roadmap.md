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
exaustiva 15:

| Domínio | Importados | Com overlay PT-BR | `REVIEWED` | `MACHINE_DRAFT` |
|---|---:|---:|---:|---:|
| Bestiário (criaturas e hazards) | 1.322 | 1.322 | 3 | 1.319 |
| Spells | 453 | 453 | 3 | 450 |
| Items | 1.272 | 1.272 | 3 | 1.269 |
| **Total** | **3.047** | **3.047** | **9** | **3.038** |

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
| Bestiário | 100 |
| Spells | 40 |
| Items | 100 |

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
5. aplica os limites 100 / 40 / 100;
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
