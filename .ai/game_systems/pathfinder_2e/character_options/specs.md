# Pathfinder 2e — Opções de personagem — Contratos

## 1. Catálogo localizado

Endpoint autenticado:

```http
GET /api/game-systems/pathfinder-2e/character-sheet/options
```

Resposta:

```ts
type Pathfinder2eCharacterSheetOptions = {
  ancestries: Pathfinder2eCharacterOption[]
  heritages: Pathfinder2eHeritageOption[]
  backgrounds: Pathfinder2eCharacterOption[]
  classes: Pathfinder2eCharacterOption[]
  deities: Pathfinder2eCharacterOption[]
}

type Pathfinder2eHeritageOption = Pathfinder2eCharacterOption & {
  compatibility: {
    ancestry: string | null
    versatile: boolean
  }
}
```

`value` e `labels['en-US']` preservam o nome canônico atual. A ausência de
`labels['pt-BR']` significa fallback para o original e deve vir acompanhada de
`NOT_STARTED`. O status é metadado editorial e não deve aparecer no label da
opção: o fallback exibe somente `labels['en-US']`, sem sufixo ou badge.

## 2. Preferência pessoal

Namespace de `CampaignUserSettings`:

```ts
type Pathfinder2eDisplaySettings = {
  contentLocale: 'pt-BR' | 'en-US'
}

type CampaignUserSettings = {
  pathfinder2e: Pathfinder2eDisplaySettings
}
```

Default:

```json
{
  "pathfinder2e": {
    "contentLocale": "pt-BR"
  }
}
```

Mestre e Jogador ativos podem alterar somente a própria preferência por
`PATCH /api/campaigns/:campaignId/my-settings`.

## 3. Compatibilidade

```ts
isCompatibleHeritage(ancestry, heritage) =
  heritage.versatile ||
  heritage.compatibility.ancestry === ancestry
```

Regras:

- sem Ancestralidade selecionada, nenhuma Herança fica disponível;
- Herança versátil usa `ancestry = null`;
- trocar Ancestralidade limpa uma Herança incompatível no frontend;
- o backend rejeita payload que tente persistir a combinação incompatível;
- Classe não participa dessa relação.

## 4. Efeitos mecânicos

O rank efetivo é:

```text
max(rank manual, rank concedido pela Classe, rank concedido pelo Background)
```

Conversão do catálogo de origem:

```text
0 -> não treinado (0)
1 -> treinado (2)
2 -> especialista (4)
3 -> mestre (6)
4 -> lendário (8)
```

O resultado derivado informa rank manual, rank concedido, rank efetivo e
fontes da concessão. A ficha persiste somente o rank manual.

Deslocamento:

```text
se movimento manual > 0: usar movimento manual
senão: usar speedFeet da Ancestralidade × 0,3
```

## 5. Warnings

- Ancestralidade ausente;
- Classe ausente;
- Herança incompatível, como defesa adicional para dados legados;
- Divindade ausente para Cleric ou Champion;
- PV atual acima do máximo;
- tradução ausente não bloqueia edição e usa fallback `en-US`.

## 6. Critérios de aceitação

1. locale `pt-BR` mostra overlay quando disponível sem alterar o value salvo;
2. locale `en-US` sempre mostra o original;
3. tradução ausente em `pt-BR` mostra somente o nome original, sem marcador;
4. Herança específica aparece apenas para sua Ancestralidade;
5. Herança versátil aparece para qualquer Ancestralidade;
6. trocar Ancestralidade limpa Herança incompatível;
7. backend rejeita combinação incompatível;
8. Classe aplica pisos de Percepção, saves, skills e armadura;
9. Background aplica treinamento às perícias fixas;
10. rank manual maior que o concedido é preservado;
11. Cleric e Champion sem Divindade geram warning;
12. nenhuma alteração de schema Prisma é necessária.
13. toda Herança selecionável possui `labels['pt-BR']`, mesmo quando o nome
    próprio permanece igual ao original.
