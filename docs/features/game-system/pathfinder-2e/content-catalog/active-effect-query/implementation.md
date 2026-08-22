# QH-EFF-013 — Implementation Notes

## Escopo materializado

QH-EFF-013 reutiliza diretamente as `Pathfinder2eActiveEffectDefinition` materializadas e revisadas por QH-EFF-012. Não existe segundo catálogo, cópia de definição ou nova fonte externa.

A camada `active-effect-query.ts` transforma a definição canônica em um contrato de leitura adequado para UI e futuras composições, preservando `definitionKey`, `kind`, source metadata, descrição, polaridade, grupo, valor de Condition e schema version.

## Consulta

São expostas duas operações somente leitura dentro do registrar existente do Content Catalog PF2e:

```text
GET /api/game-systems/pathfinder-2e/content/active-effects
GET /api/game-systems/pathfinder-2e/content/active-effects/:definitionKey
```

O detalhe chama `getPathfinder2eActiveEffectDefinition` por chave exata. Não existe fallback por nome, slug, tradução ou busca fuzzy.

A listagem suporta `kind`, `q`, `offset` e `limit`. `q` é somente uma ferramenta de descoberta por substring normalizada sobre nome exibido, nome original, `definitionKey` e slug. O limite público máximo é 100.

### Cobertura de Afflictions no source atual

O inventário canônico congelado pelo QH-EFF-012 contém, neste momento, **zero definições publicadas de `kind = affliction`** sob a cobertura estrutural vigente. QH-EFF-013 suporta o filtro e o contrato de Affliction, mas uma consulta `kind=affliction` retorna lista vazia enquanto o catálogo canônico não publicar uma definição desse kind.

Isso é intencional: o endpoint espelha exatamente o catálogo canônico e não inventa registros apenas para preencher um domínio vazio. Os testes comparam a resposta ao inventário real, de forma que futuras Afflictions publicadas passem a aparecer automaticamente sem alterar o contrato.

## Localização

`active-effect-localization.ts` define o ponto de extensão pt-BR por `definitionKey` e resolve fallback por campo.

No momento da implementação do 013 não havia overlay específico de Active Effect versionado no repositório. Por isso o card **não fabrica traduções**: `pt-BR` cai para o original `en-US` até que uma tradução revisada seja adicionada ao overlay.

A resposta preserva essa informação explicitamente:

```text
localization.requestedLocale
localization.nameLocale
localization.descriptionLocale
```

O resolver foi desenhado e testado para usar um overlay exato quando ele existir, sem alterar IDs ou a definição original.

## Ícone

QH-EFF-012 preserva `source.imagePath` canônico apenas como metadata e mantém `iconUrl = null` enquanto não houver asset local seguro. QH-EFF-013 não introduz dependência externa; a view expõe `usesIconFallback = true` quando `iconUrl` é nulo.

## Testes de regressão

Os testes cobrem:

- Frightened por `definitionKey` exata, com descrição, polaridade e `conditionValue`;
- fallback pt-BR → en-US por campo;
- aplicação de um overlay pt-BR sintético por chave exata, sem alterar o catálogo de produção;
- busca/listagem de Effects;
- paridade da listagem de Afflictions com o inventário canônico, inclusive quando esse inventário é vazio;
- busca por `definitionKey` e recusa de resolução de detalhe por nome;
- paginação determinística e clamp interno de 100 itens;
- presença de somente rotas GET para esse contrato;
- manutenção da fronteira Game System/VTT.

## Relação com os próximos cards

QH-EFF-014 pode consumir a definição consultável para enriquecer a apresentação/aplicação de `CampaignActorEffect` sem duplicar metadata.

QH-EFF-015 poderá usar mappings de Spell/Item/Bestiary para navegar de uma ocorrência até este endpoint pela `definitionKey` e abrir o modal de detalhe. Outcome, valueHint e stageHint continuam contexto da ocorrência, não identidade da definição.

## Limites mantidos

Nenhuma alteração deste card:

- cria ou remove `CampaignActorEffect`;
- executa Rule Elements;
- calcula saves, ataques, dano, duração ou stacking;
- move semântica concreta PF2e para VTT Core;
- consulta Foundry/PF2e em runtime.
