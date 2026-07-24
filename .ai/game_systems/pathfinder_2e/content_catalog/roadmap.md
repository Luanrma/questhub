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
- Pathfinder Monster Core.

As publicações são agrupadas porque criaturas, magias e itens não ficam necessariamente no mesmo pack técnico.

## Rodada 1 — início de jogo

Faixa planejada:

- Bestiário: níveis −1 a 2;
- Spells: truques e rank 1;
- Items: níveis 0 e 1;
- limites máximos: 20 / 30 / 40.

### Piloto congelado para validação

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

## Rodada 2 — níveis baixos

- Bestiário: níveis 3 e 4;
- Spells: rank 2;
- Items: níveis 2 a 4;
- limites: 20 / 30 / 40.

## Rodada 3 — níveis intermediários I

- Bestiário: níveis 5 a 8;
- Spells: ranks 3 e 4;
- Items: níveis 5 a 8;
- limites: 20 / 30 / 40 por sub-rodada gerada.

## Rodada 4 — níveis intermediários II

- Bestiário: níveis 9 a 12;
- Spells: ranks 5 e 6;
- Items: níveis 9 a 12;
- limites: 20 / 30 / 40 por sub-rodada gerada.

## Rodada 5 — níveis altos I

- Bestiário: níveis 13 a 16;
- Spells: ranks 7 e 8;
- Items: níveis 13 a 16;
- limites: 20 / 30 / 40 por sub-rodada gerada.

## Rodada 6 — níveis altos II

- Bestiário: níveis 17+;
- Spells: ranks 9 e 10;
- Items: níveis 17+;
- limites: 20 / 30 / 40 por sub-rodada gerada.

Quando uma faixa ultrapassar os limites, ela será dividida deterministicamente por publicação, nível/rank e ID de origem. Toda sub-rodada continuará contendo os três domínios.

# Programa 2 — NPC Core

1. níveis −1 a 4;
2. níveis 5 a 10;
3. níveis 11+.

Cada rodada inclui as Spells e Items da mesma publicação ou diretamente necessários para completar o conjunto editorial. Se uma faixa não possuir os três domínios, ela será combinada com a faixa adjacente antes de ser congelada.

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
2. seleciona entradas dos três domínios;
3. se faltar um domínio, acumula a próxima publicação coerente;
4. quando os três domínios existirem, aplica os limites;
5. divide de forma estável quando necessário;
6. congela todos os IDs;
7. não altera uma rodada congelada; correções entram em rodada de manutenção.

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
