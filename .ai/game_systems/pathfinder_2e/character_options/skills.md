# Pathfinder 2e — Opções de personagem — Ferramentas e restrições

## Stack e localização

- TypeScript estrito;
- Zod na validação da ficha;
- catálogos estáticos versionados no backend PF2e;
- React somente para apresentação, seleção e orquestração;
- configurações pessoais por campanha no módulo
  `campaign_user_settings`.

Código principal:

```text
apps/api/src/game_systems/pathfinder_2e/character-sheet/options/
apps/api/src/game_systems/pathfinder_2e/character-sheet/mechanical-catalog.ts
apps/web/src/features/pathfinder-2e/character-sheet/
```

## Restrições

- não traduzir valores persistidos, slugs, chaves ou relações mecânicas;
- não inferir Herança versátil apenas pelo nome;
- dados gerados devem registrar a fonte e permanecer determinísticos;
- não buscar conteúdo ou tradução em runtime;
- não executar regras PF2e em componentes React;
- não sobrescrever ranks manuais ao aplicar concessões de Classe/Background;
- não inventar efeito mecânico para Herança ou Divindade sem contrato
  estruturado;
- não criar tabela de catálogo enquanto arquivos estáticos forem suficientes.

## Fonte compacta

As relações de Herança e os dados mecânicos compactos foram reconciliados com
os catálogos gerados da branch `origin/development`, revisão:

```text
5ae9c03a58f29c7f03b4420b30f4d8a75c5818c5
```

O runtime usa apenas os arquivos versionados no QuestHub e não depende dessa
branch.

## Tradução

Cada opção exposta à UI possui:

```ts
type Pathfinder2eCharacterOption = {
  value: string
  labels: {
    'en-US': string
    'pt-BR'?: string
  }
  translationStatus: {
    'pt-BR': 'REVIEWED' | 'MACHINE_DRAFT' | 'NOT_STARTED'
  }
}
```

O frontend resolve o label pelo locale e usa `labels['en-US']` quando o
overlay solicitado estiver ausente.

