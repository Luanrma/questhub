# Pathfinder 2e — Integração visual do catálogo

## Objetivo

Bestiário, Magias e Itens são exibidos dentro do VTT por meio do contrato neutro de catálogo definido em `apps/api/src/game_systems/catalog.ts`.

O VTT sabe apenas renderizar:

- cards resumidos;
- traits;
- status editorial;
- imagem opcional com fallback;
- uma ficha composta por seções e campos.

A escolha dos campos e toda interpretação do conteúdo pertencem ao adapter Pathfinder 2e.

## Cards

Cada card contém:

- nome;
- publicação;
- descrição resumida;
- estatísticas principais;
- traits traduzidas;
- status editorial separado;
- imagem opcional;
- botão `Ficha`.

`Tradução em revisão` não é uma trait. O status deve ser enviado em `editorialStatus` e renderizado com cor própria.

## Filtro editorial

A listagem aceita o parâmetro:

```text
editorialStatus=all|review|ready
```

O filtro é aplicado no provider antes da paginação. Na interface PT-BR existem três opções:

- Todas as traduções;
- Tradução em revisão;
- Tradução revisada.

O filtro não é exibido na visualização EN-US.

## Ficha

O botão `Ficha` consulta apenas a entidade selecionada.

Rota neutra:

```text
GET /api/campaigns/:campaignId/catalog/:domain/:contentId?locale=pt-BR
```

A resposta usa seções genéricas. Pathfinder 2e define internamente:

- Bestiário: defesas, percepção, atributos, perícias, ataques e habilidades;
- Magias: conjuração, alcance, alvo, defesa, dano ou cura e aprimoramento;
- Itens: informações de uso, preço, volume, dano ou valores de armadura.

## Imagens

A imagem pertence ao registro original e não à tradução:

```ts
image: {
  upstreamPath: 'systems/pf2e/icons/spells/magic-missile.webp',
  displayUrl: '/game-systems/pathfinder-2e/spells/force-barrage.webp', // opcional
}
```

- `upstreamPath` preserva exatamente o campo `img` do Foundry.
- `displayUrl` permite usar facilmente um arquivo local, CDN ou asset próprio do QuestHub.
- quando `displayUrl` não existe e o caminho começa com `systems/pf2e/`, o provider monta uma URL do repositório oficial fixada no commit de origem;
- caminhos começando apenas com `icons/` pertencem aos assets do Foundry Core e não estão armazenados no repositório do sistema PF2e;
- se nenhuma URL pública puder ser resolvida, o frontend mantém o ícone genérico.
- falhas de carregamento também retornam automaticamente ao ícone genérico.

### Imagens da primeira rodada

| Conteúdo | Caminho oficial no Foundry | Resultado no QuestHub |
|---|---|---|
| Goblin Warrior | `systems/pf2e/icons/default-icons/npc.svg` | ícone oficial padrão |
| Wolf | `systems/pf2e/icons/default-icons/npc.svg` | ícone oficial padrão |
| Skeleton Guard | `systems/pf2e/icons/default-icons/npc.svg` | ícone oficial padrão |
| Electric Arc | `icons/magic/lightning/bolt-strike-forked-blue.webp` | fallback genérico |
| Force Barrage | `systems/pf2e/icons/spells/magic-missile.webp` | imagem oficial |
| Heal | `icons/magic/life/cross-worn-green.webp` | fallback genérico |
| Dogslicer | `systems/pf2e/icons/equipment/weapons/dogslicer.webp` | imagem oficial |
| Shortbow | `icons/weapons/bows/shortbow-leather.webp` | fallback genérico |
| Leather Armor | `icons/equipment/chest/breastplate-banded-simple-leather-brown.webp` | fallback genérico |

### Termos preservados

`Rank` é terminologia oficial do sistema e não deve ser traduzido. Cards e fichas de magia usam sempre:

```text
Rank 1
Rank 2
Rank 3
```

O idioma selecionado não altera esse rótulo.

### Moedas preservadas

As abreviações monetárias do Pathfinder não são traduzidas. Cards e fichas usam sempre:

```text
GP
SP
CP
```

Não devem ser exibidas adaptações como `PO`, `PP` ou `PC`.

### Distâncias em PT-BR

A visualização em `pt-BR` preserva a medida original em pés e acrescenta a conversão para metros.

Padrão de exibição:

```text
120 pés (36 metros)
25 pés (7,5 metros)
```

A conversão segue a escala usada pelo Pathfinder:

```text
5 pés = 1,5 metro
```

Essa regra se aplica aos campos de distância, incluindo alcance, área, distâncias mencionadas em alvos e deslocamento.

## Glossário central

Termos compartilhados não devem ser traduzidos em cada registro.

Fonte única:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/translations/pt-BR/glossary.ts
```

O glossário mantém mapas separados para:

- traits;
- raridades;
- tradições mágicas;
- tipos de dano;
- tipos de efeito;
- perícias;
- termos mecânicos reutilizados.

Toda tradução potencialmente ambígua deve receber contexto explícito:

```text
domínio: BESTIARY | SPELLS | ITEMS
categoria: trait | rarity | tradition | damage-type | effect-kind | skill | general
```

Isso permite que o mesmo identificador original tenha traduções diferentes conforme seu significado em uma criatura, magia ou item.

Novas traduções compartilhadas devem ser adicionadas ao glossário. Overlays individuais armazenam somente textos específicos daquela entidade, como nome, descrição, ataques e habilidades próprias.

## Fronteira

- o frontend não conhece campos Pathfinder específicos;
- o VTT não calcula regras;
- o provider Pathfinder converte conteúdo do sistema para o contrato neutro;
- a ficha é somente visualização nesta etapa;
- não há criação de tokens, aplicação de dano, conjuração ou equipamento automático.
