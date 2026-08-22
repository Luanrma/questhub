# QH-EFF-015 — Implementação das referências clicáveis PF2e

## Componentes

### API — referências estruturais

`active-effect-references.ts` normaliza os três mappings existentes em uma projeção comum somente leitura.

A projeção não reclassifica a referência e não recalcula potencialidade. Ela preserva:

- `definitionKey`;
- `kind`;
- `potential` e `evidence`;
- `outcome`;
- `valueHint`;
- `stageHint` quando existente;
- `origin` do Bestiary quando existente;
- coordenadas de source.

A definição usada para apresentação é resolvida pelo contrato canônico de Active Effects. `exactLabels` contém somente formas exatas derivadas da label estrutural e da definição já identificada; esses valores não participam da resolução de identidade.

### API — descrição canônica apresentável

`active-effect-description.ts` converte a descrição publicada em uma projeção segura para UI:

- remove blocos executáveis `script`/`style`;
- converte parágrafos e demais tags de bloco em `descriptionBlocks`, preservando a separação editorial entre parágrafos;
- preserva quebras internas de listas sem expor markup;
- remove tags HTML remanescentes;
- decodifica entidades HTML;
- transforma referências `@Compendium[...]` e `@UUID[...]` em seus labels;
- transforma `@Check[...]` em texto legível, inclusive `teste simples CD N` em `pt-BR`;
- reutiliza `resolvePathfinder2eInlineText` para macros já suportadas pelo catálogo;
- produz `description` e `descriptionBlocks`.

A Web não interpreta HTML e não usa `dangerouslySetInnerHTML` para Active Effects.

### API — localização `pt-BR`

`active-effect-pt-br.ts` contém um overlay de localização revisado, resolvido por **source pack + nome canônico exato**. Não existe resolução fuzzy.

A fonte externa versionada usada como base para os campos importados é:

```text
repository: mclemente/fvtt-ptbr-pf2e-translation
commit: 3bbc31593155fe5a01171c6e4eb6539c1db46f49
license: ORC License
```

A resolução permanece field-by-field. Quando apenas o nome está traduzido, por exemplo, a descrição continua em `en-US`; `localization.nameLocale` e `localization.descriptionLocale` registram essa diferença. A UI avisa sobre fallback parcial.

O exemplo `Effect: Swarming Bites`, usado durante a revisão humana, possui overlay editorial explícito para demonstrar o fluxo `pt-BR`; sua identidade continua sendo a definição canônica, não o texto traduzido.

### Rota de conteúdo

`content_catalog/routes.ts` publica:

```text
GET /api/game-systems/pathfinder-2e/content/active-effect-references/:contentId?locale=pt-BR
```

A rota exige autenticação e não possui equivalente mutável.

### Composition Root — definição para uma Campaign

`composition/game-system-active-effects/routes.ts` publica:

```text
GET /api/campaigns/:campaignId/game-system-effects/definitions/:definitionKey?locale=pt-BR|en-US
```

Essa rota é o seam usado pelo VTT para consultar uma definição já vinculada a uma instância de Actor Effect. Ela:

1. valida autenticação e acesso à Campaign;
2. verifica qual Game System está ativo;
3. resolve internamente o catálogo daquele sistema;
4. devolve uma projeção genérica de apresentação.

Para PF2e, a projeção contém nome, blocos de descrição já formatados, ícone, polaridade, tags, fonte e metadata de localização. O consumidor no VTT não precisa conhecer `condition`, source pack ou qualquer outra semântica PF2e.

O teste de contrato da Composition Root fixa que essa rota é `GET`, usa acesso de membro e não contém criação de Actor Effect, publicação de invalidação, target `actorId` ou mutation verb.

### Web — referências de conteúdo

`CatalogEntitySheetModal.tsx` carrega referências apenas quando a ficha pertence a `PATHFINDER_2E`.

`PathfinderActiveEffectReferences.tsx` possui duas apresentações:

- `PathfinderReferenceText`: faz apenas correspondência literal de labels pertencentes a mappings já resolvidos e transforma a ocorrência encontrada em botão;
- `PathfinderActiveEffectReferenceList`: lista as ocorrências estruturais do conteúdo, inclusive referências que não podem ser materializadas inline com segurança.

`PathfinderActiveEffectDefinitionModal.tsx` consulta a definição exata por `definitionKey`, converte metadata PF2e em props genéricas e delega a moldura para `ActiveEffectDefinitionModal`.

O contexto da ocorrência continua em bloco separado da definição. Não existe botão de aplicação nesse modal.

### Web — componente único de detalhe

`vtt/actor-effects/ActiveEffectDefinitionModal.tsx` é o único shell visual usado para detalhe de uma definição no fluxo deste card.

Ele é agnóstico ao Game System. Recebe por props:

- título e label de cabeçalho;
- ícone;
- polaridade;
- tags já resolvidas;
- `descriptionBlocks`;
- fonte;
- metadata de localização;
- conteúdo contextual opcional.

O mesmo componente é usado por:

- `PathfinderActiveEffectDefinitionModal`, ao abrir uma referência de conteúdo PF2e;
- `CampaignActiveEffectDefinitionModal`, ao abrir um efeito a partir do Token.

Isso substitui o antigo modal escuro local de `TokenPresentationOverlay.tsx`; portanto não há mais duas UIs concorrentes para a mesma definição canônica.

### Web — Token

`TokenPresentationOverlay.tsx` continua recebendo somente `ActorEffectView` genérico. Ao selecionar um efeito, delega o detalhe para `CampaignActiveEffectDefinitionModal`.

`CampaignActiveEffectDefinitionModal.tsx`:

- se houver `campaignId` + `definitionKey`, consulta a Composition Root;
- inicia em `pt-BR` e permite alternar para `en-US`;
- renderiza a resposta no mesmo `ActiveEffectDefinitionModal`;
- se não houver definição canônica, usa os campos persistidos da instância como fallback;
- normaliza defensivamente descrições antigas;
- não importa nenhum módulo PF2e;
- não executa mutações.

Assim, o VTT conhece apenas a capacidade genérica “consultar apresentação de uma definição do Game System”.

## Regra de matching da UI

O matching textual é uma etapa exclusivamente visual e só roda depois que o backend já entregou um mapping estrutural.

Para referências explicitamente rotuladas:

1. são considerados apenas `exactLabels` daquela ocorrência;
2. procura-se igualdade literal dentro do texto exibido;
3. em empate na mesma posição, a label mais longa vence;
4. cada ocorrência do mapping é usada no máximo uma vez por bloco textual;
5. referências sem label explícita não são transformadas inline e permanecem acessíveis na lista estrutural.

Isso impede que um texto como `Frightened` crie uma referência quando não existe mapping para o conteúdo.

## Agonizing Despair

O teste de contrato valida as três ocorrências de Frightened:

| Ocorrência | definitionKey | outcome | valueHint |
| --- | --- | --- | ---: |
| Frightened 1 | `conditionitems:TBSHQspnbcqxsmjL` | `SUCCESS` | 1 |
| Frightened 2 | `conditionitems:TBSHQspnbcqxsmjL` | `FAILURE` | 2 |
| Frightened 3 | `conditionitems:TBSHQspnbcqxsmjL` | `CRITICAL_FAILURE` | 3 |

Também há cobertura para Item, Bestiary Action e conteúdo inexistente.

A query canônica cobre ainda:

- Frightened em `pt-BR` como `Assustado` quando o overlay possui tradução completa;
- remoção de `<p>` da descrição;
- remoção/conversão de macros suportadas;
- fallback de localização explícito quando um campo não possui tradução.

`active-effect-description.test.ts` cobre diretamente a regressão observada em Human Approval: múltiplos `<p>` viram blocos separados, `@Check[...]`/`@Compendium[...]` não vazam para a UI e markup executável é descartado.

## Não execução

A navegação de conteúdo e o detalhe aberto pelo Token são somente leitura.

`potential=true` significa apenas que o mapping anterior identificou uma ocorrência potencialmente aplicável. A navegação continua consultiva.

O endpoint de detalhe da Composition Root não chama `createActorEffect`, não publica invalidation e não executa nenhuma regra.

## Fronteira VTT / Game System

Os arquivos em `apps/web/src/vtt/actor-effects/**` e `TokenPresentationOverlay.tsx` não contêm termos concretos de Pathfinder e não importam módulos PF2e.

Semântica PF2e permanece em:

- `apps/api/src/game_systems/pathfinder_2e/**`;
- `apps/web/src/game-systems/**`;
- dispatch da `apps/api/src/composition/**`.

O componente compartilhado é apenas um renderer de apresentação, não uma engine de regra.

## QA esperado

Executar os gates do repositório:

```text
npm run check:architecture
npm run check:documentation-governance
npm run test:unit
npm run test:agents
npm run build:agents
npm run build:web
```

Além dos gates automatizados, validar:

- Spell Agonizing Despair;
- Item com Condition valorada, como Abysium Chunk;
- Bestiary Action/Hazard com referência estrutural;
- abertura e fechamento do modal de definição;
- mesmo card visual ao abrir uma definição por referência e pelo Token;
- seleção `pt-BR` / `en-US`;
- ausência de `<p>`, `@Check[...]` e referências Foundry cruas suportadas no texto final;
- preservação visual de parágrafos separados;
- aviso de fallback quando a tradução de um campo estiver ausente;
- fallback seguro para Actor Effect manual/sem `definitionKey`;
- ausência de qualquer alteração em Active Effects do ator após consultar o detalhe.
