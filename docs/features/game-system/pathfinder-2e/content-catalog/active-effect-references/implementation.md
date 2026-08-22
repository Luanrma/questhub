# QH-EFF-015 — Implementação das referências clicáveis PF2e

## Componentes

### API

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

A definição usada para apresentação é resolvida pelo contrato canônico de QH-EFF-013. `exactLabels` contém somente formas exatas derivadas da label estrutural e da definição já identificada; esses valores não participam da resolução de identidade.

### Rota

`routes.ts` publica:

```text
GET /api/game-systems/pathfinder-2e/content/active-effect-references/:contentId?locale=pt-BR
```

A rota exige autenticação e não possui equivalente mutável.

### Web

`CatalogEntitySheetModal.tsx` carrega referências apenas quando a ficha pertence a `PATHFINDER_2E`.

`PathfinderActiveEffectReferences.tsx` possui duas apresentações:

- `PathfinderReferenceText`: faz apenas correspondência literal de labels pertencentes a mappings já resolvidos e transforma a ocorrência encontrada em botão;
- `PathfinderActiveEffectReferenceList`: lista as ocorrências estruturais do conteúdo, inclusive referências que não podem ser materializadas inline com segurança.

`PathfinderActiveEffectDefinitionModal.tsx` consulta a rota exata de definição do QH-EFF-013 por `definitionKey`. O contexto da ocorrência é apresentado em bloco separado da descrição canônica.

Não existe botão de aplicação nesse modal.

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

## Não execução

A feature não chama endpoints de aplicação de Game System Effects, não cria Actor Effect e não possui side effect de gameplay.

`potential=true` significa apenas que o mapping anterior identificou uma ocorrência potencialmente aplicável. A navegação de QH-EFF-015 continua consultiva.

## QA esperado

Executar os gates do repositório:

```text
npm run check:architecture
npm run test:unit
npm run test:agents
npm run build:agents
npm run build:web
```

Além dos gates automatizados, validar manualmente:

- Spell Agonizing Despair;
- Item com Condition valorada, como Abysium Chunk;
- Bestiary Action/Hazard com referência estrutural;
- abertura e fechamento do modal de definição;
- ausência de qualquer alteração em Active Effects do ator após clicar em uma referência.
