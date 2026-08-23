# Pathfinder 2e — Integração visual do catálogo

## Objetivo

Bestiário, Magias e Itens são registrados pelo Pathfinder 2e e exibidos dentro
de uma única entrada genérica `Compêndio` no VTT, por meio do contrato neutro de
catálogo definido em `apps/api/src/game_systems/catalog.ts`.

O VTT sabe apenas renderizar:

- os domínios anunciados pelo sistema;
- cards resumidos;
- traits;
- status editorial pendente;
- imagem local opcional com fallback;
- uma ficha composta por seções e campos.

A escolha dos domínios, labels, campos e toda interpretação do conteúdo pertencem
ao adapter Pathfinder 2e.

## Navegação do Compêndio

A barra lateral da campanha não possui entradas próprias para Bestiário, Magias
ou Itens. Ela possui uma única entrada pai `Compêndio`.

Ao acionar `Compêndio`, a composição compartilhada abre um submenu/flyout ao lado
da barra lateral. Esse submenu é montado exclusivamente a partir de
`descriptor.catalogDomains` do Game System da campanha; não existe enum, lista ou
mapa compartilhado contendo nomes concretos de domínio.

O Pathfinder 2e registra seus domínios em seu próprio descriptor:

```ts
catalogDomains: [
  { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário' },
  { key: 'SPELLS', slug: 'spells', label: 'Magias', capabilities: { /* ... */ } },
  { key: 'ITEMS', slug: 'items', label: 'Itens', capabilities: { /* ... */ } },
]
```

Cada item do submenu abre uma janela própria de Compêndio para aquele descriptor.
As janelas são independentes e podem permanecer abertas simultaneamente. Busca,
filtros, idioma, página e ficha selecionada permanecem associados à instância do
domínio enquanto ela estiver aberta.

Clicar novamente em um domínio já aberto não recria sua janela. A chave opaca do
domínio é movida para o topo da ordem de stacking, trazendo a janela existente à
frente e preservando seu estado. Fechar uma janela remove somente aquele domínio;
as demais continuam montadas.

As janelas do Compêndio reservam a faixa ocupada pela barra lateral em vez de
alterar globalmente o z-index da navegação. Assim, a sidebar continua acessível
para abrir ou trazer outro domínio à frente sem mudar o comportamento dos demais
modais do VTT. O submenu usa uma camada própria acima das janelas do Compêndio.
A ficha de uma entidade recebe o mesmo inset lateral e z-index relativo à janela
que a originou, mantendo acesso rápido e ordem de foco coerente.

A `key` é opaca para o Core; o `slug` é usado na rota e validado pelo backend
contra o descriptor do sistema da campanha. Quando um novo domínio for registrado
pelo Game System, ele aparece automaticamente no submenu sem alteração no Core.

Capabilities opcionais anunciam integrações neutras com ferramentas existentes.
No recorte atual, Magias anuncia o namespace de Area Effect e Itens anuncia que
pode usar o fluxo genérico de envio ao inventário de um ator. A UI não infere
essas capacidades a partir das strings `SPELLS` ou `ITEMS`.

Effects não faz parte do QH-CMP-001/QH-CMP-003. Sua inclusão como quarto domínio
do PF2e é o escopo do QH-CMP-002; quando registrado, `Efeitos` surgirá no submenu
automaticamente.

Hazards usam o mesmo domínio visual `BESTIARY`, porém a ficha respeita
`entryType = "HAZARD"`. Cards exibem tipo simples/complexo, Furtividade, CA, PV
e Dureza. A ficha separa Detecção e Desarme para manter o procedimento legível,
e organiza as seções como Detecção, Desarme, Defesas, Comportamento e Ações e
reações; seções vazias e seções exclusivas de criatura não são renderizadas.

## Cards

Cada card contém:

- nome;
- publicação;
- descrição resumida;
- estatísticas principais;
- traits traduzidas;
- status editorial somente quando houver pendência;
- imagem local opcional;
- botão `Ficha`.

`Tradução em revisão` não é uma trait. O status deve ser enviado em `editorialStatus` e renderizado com cor própria.

Uma tradução `REVIEWED` não exibe tag. O estado continua disponível para filtros e relatórios, mas `editorialStatus` deve ser `null` no card e na ficha.

## Filtro editorial

A listagem aceita o parâmetro:

```text
editorialStatus=all|review|ready
```

O filtro é aplicado no provider antes da paginação. Na interface PT-BR existem três opções:

- Todas as traduções;
- Tradução em revisão;
- Tradução revisada.

O filtro `ready` continua funcionando mesmo que os registros revisados não exibam tag visual.

O filtro não é exibido na visualização EN-US.

## Filtros fornecidos pelo game system

A interface compartilhada não declara filtros próprios de Pathfinder. Ela
renderiza os descritores neutros recebidos em `filterDefinitions` e devolve as
seleções como parâmetros repetíveis:

```text
filter=<filterId>:<value>
```

No Bestiário de Pathfinder 2e, o provider publica:

- Tipo: Todos, Criaturas ou Hazards;
- Nível: seleção única entre os níveis existentes;
- Raridade: seleção única, com label localizado;
- Traits: seleção múltipla, com labels localizados.

Selecionar várias traits exige que a entrada possua todas elas. Os filtros são
independentes do idioma e do status editorial, podem ser combinados com a busca
e são aplicados antes da paginação. Qualquer alteração de seleção retorna à
primeira página.

Cada janela de domínio mantém seu próprio estado de busca, filtros e paginação.
Trazer outra janela à frente não reinicia esse estado. O VTT e os componentes
compartilhados não contêm enums, labels, paths ou branches de capacidade baseados
nos nomes concretos dos domínios PF2e.

## Ficha

O botão `Ficha` consulta apenas a entidade selecionada.

Rota neutra:

```text
GET /api/campaigns/:campaignId/catalog/:domain/:contentId?locale=pt-BR
```

`:domain` é o `slug` registrado pelo Game System, não uma enumeração mantida pelo
VTT. A resposta usa seções genéricas. Pathfinder 2e define internamente:

- Bestiário: defesas, percepção, atributos, perícias, ataques e habilidades;
- Magias: conjuração, alcance, alvo, defesa, dano ou cura e aprimoramento;
- Itens: informações de uso, preço, volume, dano ou valores de armadura.

## Imagens

A imagem pertence ao registro original e nunca à tradução:

```ts
image: {
  path: '/api/game-systems/pathfinder-2e/icons/spells/magic-missile.webp'
}
```

O arquivo correspondente fica dentro do repositório:

```text
apps/api/src/game_systems/pathfinder_2e/icons/spells/magic-missile.webp
```

A API serve o arquivo por:

```text
GET /api/game-systems/pathfinder-2e/icons/*
```

Regras obrigatórias:

- somente caminhos iniciados por `/api/game-systems/pathfinder-2e/icons/` são aceitos;
- URLs externas, CDNs e repositórios externos são proibidos nos registros;
- a rota bloqueia path traversal e extensões não permitidas;
- imagens não são baixadas em runtime;
- sem correspondência exata no pacote local, o campo `image` deve ser omitido;
- o frontend mantém o ícone genérico quando não há imagem ou quando o arquivo local falha;
- remover todos os arquivos não pode quebrar cards, fichas, busca, filtros ou build.

### Estado da primeira rodada

Associações exatas disponíveis:

| Conteúdo | Ícone |
|---|---|
| Guerreiro Goblin | `default-icons/npc.svg` |
| Lobo | `default-icons/npc.svg` |
| Guarda Esqueleto | `default-icons/npc.svg` |
| Barragem de Força | `spells/magic-missile.webp` |
| Corta-Cão | `equipment/weapons/dogslicer.webp` |

Arco Elétrico, Curar, Arco Curto e Armadura de Couro permanecem no fallback genérico.

### Estado da segunda rodada

Associações exatas disponíveis:

| Conteúdo | Ícone |
|---|---|
| Estátua Animada | `default-icons/npc.svg` |
| Dríade | `default-icons/npc.svg` |
| Grifo | `default-icons/npc.svg` |
| Dissipar Magia | `spells/dispel-magic.webp` |
| Invisibilidade | `spells/invisibility.webp` |
| Armadura Completa | `equipment/armor/fullplate.webp` |

Raio Flamejante, Kit de Curandeiro (Expandido) e Luneta (de Precisão) usam
fallback genérico. Assets de variantes parecidas não são tratados como
correspondência exata.

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

- o menu e o shell compartilhado do Compêndio não conhecem domínios Pathfinder específicos;
- o submenu é derivado somente dos descriptors registrados pelo Game System;
- múltiplas janelas podem coexistir sem introduzir nomes concretos no Core;
- o frontend não conhece campos Pathfinder específicos;
- o VTT não calcula regras;
- o provider Pathfinder converte conteúdo do sistema para o contrato neutro;
- ações adicionais são expostas por capabilities ou flags neutras, como `canCreateToken`;
- a ficha permanece uma projeção de apresentação; aplicar regras mecânicas não é responsabilidade do Compêndio;
- não há dependência de assets externos em runtime.
