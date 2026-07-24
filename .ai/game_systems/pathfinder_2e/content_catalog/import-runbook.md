# Runbook — Rodadas de importação do catálogo Pathfinder 2e

## Como chamar este runbook

Use uma instrução explícita como:

```text
Siga .ai/game_systems/pathfinder_2e/content_catalog/import-runbook.md para
executar a próxima cobertura exaustiva do catálogo PF2e.
```

Quem executar a instrução deve seguir este arquivo integralmente. Não é
permitido pular a auditoria documental, a tradução, a associação exata de
ícones, a integração ao catálogo ou a validação final.

## Escopo

Este runbook pertence ao bounded context:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/
```

Ele cobre somente:

- inventário e seleção determinística;
- importação e normalização;
- overlays de tradução `pt-BR`;
- associação opcional de ícones locais;
- manifests e cobertura editorial;
- integração ao provider neutro;
- documentação e testes.

Não cobre banco de dados, WebSocket, canvas, combate, automação de regras,
tokens ou alterações no frontend genérico.

## 1. Arquivos de leitura obrigatória

Antes de modificar código, ler integralmente e nesta ordem:

1. `.ai/game_systems/pathfinder_2e/content_catalog/readme.md`;
2. `.ai/game_systems/pathfinder_2e/content_catalog/skills.md`;
3. `.ai/game_systems/pathfinder_2e/content_catalog/specs.md`;
4. `.ai/game_systems/pathfinder_2e/content_catalog/roadmap.md`;
5. `.ai/game_systems/pathfinder_2e/content_catalog/assets.md`;
6. `.ai/game_systems/pathfinder_2e/content_catalog/ui-integration.md`;
7. este `import-runbook.md`.

Depois, auditar os contratos e integrações:

1. `content_catalog/models.ts`;
2. `content_catalog/records.ts`;
3. `content_catalog/content-entry.ts`;
4. `content_catalog/roadmap.ts`;
5. `content_catalog/progress.ts`;
6. `content_catalog/provider.ts`;
7. `content_catalog/catalog-provider.ts`;
8. `content_catalog/contextual-provider.ts`;
9. `content_catalog/bestiary/types.ts`;
10. `content_catalog/spells/types.ts`;
11. `content_catalog/items/types.ts`;
12. `content_catalog/translations/pt-BR/glossary.ts`;
13. os manifests e arquivos `*-ids.ts` das coberturas anteriores;
14. os `index.ts` de Bestiário, Spells, Items e `deliveries`;
15. `content-organization.test.ts`, `roadmap.test.ts`, `provider.test.ts`,
    `contextual-provider.test.ts` e `catalog-provider.test.ts`;
16. `scripts/import-pf2e-core-exhaustive.mjs`;
17. `scripts/translate-pf2e-core-exhaustive.mjs`.

## 2. Pré-condições

Confirmar antes da seleção:

- branch de trabalho correta;
- árvore de trabalho existente preservada;
- checkout da fonte disponível em `.tmp/pf2e-source`;
- commit da fonte igual ao source lock registrado no roadmap;
- número da próxima cobertura ainda não utilizado;
- limites atuais registrados em `skills.md`, `specs.md` e `roadmap.md`;
- ausência de mudança de banco;
- publicação corrente de cada domínio confirmada no `roadmap.md`;
- comprovação de esgotamento antes de avançar a publicação de um domínio;
- avanço independente: mudar a publicação de um domínio não altera as demais.

Verificação do commit:

```powershell
git -C .tmp/pf2e-source rev-parse HEAD
```

## 3. Atualizar o design antes do código

Antes de executar o importador:

1. registrar no `roadmap.md` a cobertura planejada;
2. atualizar `skills.md` ou `specs.md` somente se limites ou contratos mudarem;
3. não alterar artificialmente documentos sem mudança de conteúdo;
4. registrar qualquer decisão nova de normalização, tradução ou assets.

## 4. Seleção e importação

Usar sempre o importador parametrizado:

```powershell
node scripts/import-pf2e-core-exhaustive.mjs `
  .tmp/pf2e-source <NN> <BESTIARY_LIMIT> <SPELL_LIMIT> <ITEM_LIMIT> `
  "<ITEM_PUBLICATION>" "<SPELL_PUBLICATION>" "<BESTIARY_PUBLICATION>" `
  "<BESTIARY_SOURCE_PACK>"
```

Exemplo para a rodada `04`, na qual somente Items avança para Player Core 2:

```powershell
node scripts/import-pf2e-core-exhaustive.mjs .tmp/pf2e-source 04 100 40 100 `
  "Pathfinder Player Core 2" "Pathfinder Player Core" "Pathfinder Monster Core"
```

Exemplo para a rodada `07`, que conclui o Rank 5 de Player Core enquanto
Bestiário e Items avançam independentemente:

```powershell
node scripts/import-pf2e-core-exhaustive.mjs .tmp/pf2e-source 07 100 18 100 `
  "Pathfinder GM Core" "Pathfinder Player Core" "Pathfinder Monster Core 2" `
  "pathfinder-monster-core-2"
```

Os argumentos de publicação são opcionais apenas para compatibilidade com
rodadas antigas; os padrões continuam sendo Player Core para Items e Spells e
Monster Core para Bestiário. Em uma nova rodada, informar os três explicitamente
evita avanço silencioso de fonte.

O argumento do pack técnico de Bestiário é opcional somente para manter
compatibilidade com as rodadas anteriores e usa `pathfinder-monster-core` como
padrão. Toda nova publicação de Bestiário deve informar esse argumento
explicitamente.

Quando a rodada consumir mais de uma publicação/pack de Bestiário, separar os
valores posicionais por `|`, preservando a mesma ordem:

```powershell
node scripts/import-pf2e-core-exhaustive.mjs .tmp/pf2e-source 11 100 40 100 `
  "Pathfinder GM Core" "Pathfinder Player Core 2" `
  "Pathfinder Monster Core 2|Pathfinder GM Core" `
  "pathfinder-monster-core-2|hazards"
```

Exemplo para a rodada de transição `12`, na qual somente o cursor de Bestiário
já avançou para o programa NPC Core:

```powershell
node scripts/import-pf2e-core-exhaustive.mjs .tmp/pf2e-source 12 100 4 100 `
  "Pathfinder GM Core" "Pathfinder Player Core 2" `
  "Pathfinder NPC Core" "pathfinder-npc-core"
```

O importador deve:

- descontar os IDs dos pilotos e de todas as coberturas anteriores;
- ordenar Bestiário e Items por nível e identidade da fonte;
- ordenar Spells por Rank e identidade da fonte;
- nunca saltar conteúdo pendente de valor inferior;
- congelar exatamente os IDs selecionados;
- preservar source lock, hashes, publicação, licença e Remaster;
- registrar no relatório as três publicações selecionadas;
- gerar os originais `en-US` separados das traduções;
- preservar conjuração incorporada de criaturas;
- preservar o discriminador e os campos próprios de hazards;
- registrar avisos de normalização;
- não sobrescrever um overlay de tradução já existente.

Auditar o relatório do comando:

- quantidades dos três domínios;
- distribuição por nível ou Rank;
- checksum;
- quantidade de ícones exatos;
- avisos de normalização.

## 5. Tradução

Executar:

```powershell
node scripts/translate-pf2e-core-exhaustive.mjs <NN>
```

Exemplo:

```powershell
node scripts/translate-pf2e-core-exhaustive.mjs 03
```

Regras:

- preencher nomes, descrições e campos textuais específicos de cada domínio;
- em hazards, traduzir detecção, desarme, rotina, reset e ações por ID;
- manter original e tradução fisicamente separados;
- usar `MACHINE_DRAFT` para tradução automática;
- nunca marcar tradução automática como `REVIEWED`;
- preservar `Rank`, `GP`, `SP` e `CP`;
- apresentar distâncias em pés e metros no PT-BR;
- usar o glossário central para termos mecânicos estruturados;
- endereçar ataques, ações e conjuração por ID, não por posição;
- não considerar texto inglês copiado como tradução.

## 6. Ícones

O único vínculo permitido é:

```text
systems/pf2e/icons/<caminho>
  -> /api/game-systems/pathfinder-2e/icons/<mesmo-caminho>
```

Associar somente se o mesmo arquivo existir em:

```text
apps/api/src/game_systems/pathfinder_2e/icons/
```

É proibido:

- procurar por nome ou slug;
- escolher imagem visualmente parecida;
- usar URL externa;
- baixar imagem em runtime;
- tornar a entidade dependente do arquivo.

Sem correspondência exata, omitir `image` e manter o fallback genérico.

## 7. Integração da cobertura

Criar ou atualizar:

1. originais e traduções dos três domínios;
2. `deliveries/core-remaster-exhaustive-<NN>-ids.ts`;
3. `deliveries/<programa>-exhaustive-<NN>.ts`;
4. `bestiary/index.ts`;
5. `spells/index.ts`;
6. `items/index.ts`;
7. `deliveries/index.ts`;
8. `roadmap.ts`;
9. testes afetados pela nova paginação e pelos novos totais.

Até a cobertura 14, os manifests usam o prefixo histórico
`core-remaster-exhaustive`. A partir da cobertura 15, o nome do manifest deve
representar o programa mais antigo ainda ativo na rodada, como
`npc-core-exhaustive-15.ts` ou `rulebooks-exhaustive-16.ts`. Os arquivos
gerados pelo importador mantêm temporariamente o slug histórico
`core-remaster-exhaustive-<NN>` por compatibilidade de deduplicação; o
`roundId`, o campo `program` do roadmap e o manifest são as fontes semânticas
do programa editorial.

O manifest deve registrar:

- ID e ordem da rodada;
- `REVIEWING` enquanto houver `MACHINE_DRAFT`;
- versão e commit da fonte;
- checksum;
- versão do importador;
- data da importação;
- imports `NORMALIZED`;
- cobertura importada, normalizada e traduzida;
- `reviewed = 0` para o novo lote automático.

## 8. Atualizar o roadmap

Após a integração, atualizar `roadmap.md` com:

- quantidades da rodada;
- distribuição por nível ou Rank;
- quantidade de ícones exatos por domínio;
- próximo cursor e pendências no valor atual;
- totais cumulativos distintos já importados;
- totais com overlay `pt-BR`;
- separação entre `REVIEWED` e `MACHINE_DRAFT`.

Não contar um fallback inglês como tradução. Uma entrada só entra na coluna
“com overlay PT-BR” quando possui overlay preenchido e status diferente de
`NOT_STARTED`.

## 9. Testes obrigatórios

Cobrir pelo menos:

- quantidades exatas da rodada;
- ausência de duplicatas com todas as rodadas anteriores;
- ordem exaustiva por nível ou Rank;
- source lock e checksum;
- original `en-US` separado do overlay `pt-BR`;
- `MACHINE_DRAFT` em todas as novas traduções;
- preenchimento de nome e descrição;
- contagem e caminhos de ícones locais exatos;
- ausência de provider e URLs externas;
- fallback sem imagem;
- integração ao catálogo e às fichas;
- totais e paginação atualizados;
- status editorial em revisão.

Executar:

```powershell
npm.cmd run test:unit
npm.cmd run build:web
git diff --check
```

## 10. Critério de conclusão

A rodada só está concluída quando:

- os três domínios atingem os limites solicitados ou a fonte se esgota;
- nenhum conteúdo anterior é duplicado;
- os originais estão normalizados;
- todos os novos overlays PT-BR estão preenchidos;
- os ícones exatos disponíveis estão associados;
- os demais registros mantêm fallback;
- manifests, índices, roadmap e contagem cumulativa estão atualizados;
- testes e build passam;
- nenhuma mudança de banco ou acoplamento ao VTT genérico foi introduzida.
