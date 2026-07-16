# Pathfinder 2e — Catálogo de Magias — Decisões Técnicas

## Camadas

1. `scripts/generate-pf2e-spell-data.cjs`: adapter de importação externo.
2. `server/spells/models.ts`: modelo canônico do QuestHub.
3. `data.generated.ts`: snapshot canônico versionado.
4. `server/spells/index.ts`: índice e adapter de apresentação.

Somente a primeira camada conhece o formato do Foundry.

## Restrições

* Código runtime não importa tipos ou arquivos do Foundry.
* O gerador não copia objetos desconhecidos com `Record<string, unknown>`.
* Texto rico é convertido para texto seguro; macros externas são removidas ou reduzidas ao label visível.
* Campos estruturados usam uniões discriminadas e unidades explícitas.
* `@ts-nocheck` é permitido apenas no snapshot gerado, nunca no domínio ou casos de uso.
* O manifesto registra versão, checksum, quantidade importada e rejeições, mas não integra o modelo de magia.

## Validação

O teste de importação deve falhar se uma entrada gerada contiver `system`, `rules`, `overlays`, `dependencyIds`, macros UUID ou referências a packs.
