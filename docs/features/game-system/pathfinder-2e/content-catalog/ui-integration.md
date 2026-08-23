# Pathfinder 2e — Integração visual do catálogo

## Objetivo

Bestiário, Magias, Itens e Efeitos são registrados pelo Pathfinder 2e e exibidos
dentro de uma única entrada genérica `Compêndio` no VTT, por meio do contrato
neutro de catálogo definido em `apps/api/src/game_systems/catalog.ts`.

O VTT sabe apenas renderizar:

- os domínios anunciados pelo sistema;
- cards resumidos;
- traits;
- status editorial pendente;
- imagem local opcional com fallback;
- uma ficha composta por seções e campos;
- uma dica visual opcional de ícone publicada pelo descriptor do domínio.

A escolha dos domínios, labels, campos, ícones de apresentação e toda interpretação
do conteúdo pertencem ao adapter Pathfinder 2e.

## Navegação do Compêndio

A barra lateral da campanha não possui entradas próprias para Bestiário, Magias,
Itens ou Efeitos. Ela possui uma única entrada pai `Compêndio`.

Ao acionar `Compêndio`, a composição compartilhada abre um submenu/flyout ao lado
da barra lateral. Esse submenu é montado exclusivamente a partir de
`descriptor.catalogDomains` do Game System da campanha; não existe enum, lista ou
mapa compartilhado contendo nomes concretos de domínio.

O Pathfinder 2e registra seus domínios em seu próprio descriptor:

```ts
catalogDomains: [
  { key: 'BESTIARY', slug: 'bestiary', label: 'Bestiário', icon: 'swords' },
  {
    key: 'SPELLS',
    slug: 'spells',
    label: 'Magias',
    icon: 'sparkles',
    capabilities: { /* ... */ },
  },
  {
    key: 'ITEMS',
    slug: 'items',
    label: 'Itens',
    icon: 'backpack',
    capabilities: { /* ... */ },
  },
  { key: 'EFFECTS', slug: 'effects', label: 'Efeitos', icon: 'activity' },
]
```

`icon` é somente uma dica neutra de apresentação. O Core não deduz ícone a partir
de `BESTIARY`, `SPELLS`, `ITEMS` ou `EFFECTS`, e continua usando `BookOpen` como
fallback quando um Game System não publica essa dica.

Cada item do submenu abre uma janela própria de Compêndio para aquele descriptor.
As janelas são independentes e podem permanecer abertas simultaneamente. Busca,
filtros, idioma, página e ficha selecionada permanecem associados à instância do
domínio enquanto ela estiver aberta.

Clicar novamente em um domínio já aberto não recria sua janela: restaura a
instância se estiver minimizada e a traz para frente, preservando seu estado.
Fechar uma janela remove somente aquele domínio; as demais continuam montadas.
O submenu não exibe texto, ponto, badge ou qualquer outra sinalização de que uma
janela daquele domínio já está aberta. Cada entrada segue o mesmo padrão visual
do menu lateral pai, incluindo espaçamento, tipografia e fundo, mas pode usar o
ícone de apresentação publicado pelo descriptor.

### Padrão de janela

As janelas do Compêndio seguem o mesmo comportamento de janela usado pelo VTT:

- podem ser arrastadas pelo cabeçalho;
- podem ser redimensionadas pelas bordas e cantos;
- podem ser minimizadas sem perder seu estado;
- uma janela minimizada aparece como atalho de restauração;
- clicar ou reabrir um domínio traz a janela correspondente à frente;
- não existe backdrop preto cobrindo a mesa ao redor da janela.

A ausência de backdrop é intencional: o Compêndio é uma ferramenta de consulta
simultânea à mesa, e não um modal bloqueante. O conteúdo da cena continua visível
e utilizável fora da área ocupada pelas janelas.

A ficha detalhada de uma entidade também não adiciona escurecimento ou blur sobre
a mesa ao ser aberta. O próprio painel da ficha continua com seu fundo e sombra,
mas a área externa permanece visualmente livre.

As janelas preservam a área ocupada pela navegação da campanha. No layout desktop,
a posição e o redimensionamento respeitam a faixa lateral da sidebar; no layout
compacto, respeitam a faixa inferior da navegação. O submenu usa camada própria
acima das janelas para continuar acessível. A ficha de uma entidade recebe os
mesmos insets da janela que a originou.

A `key` é opaca para o Core; o `slug` é usado na rota e validado pelo backend
contra o descriptor do sistema da campanha. Quando um novo domínio for registrado
pelo Game System, ele aparece automaticamente no submenu sem alteração no Core.

Capabilities opcionais anunciam integrações neutras com ferramentas existentes.
No recorte atual, Magias anuncia o namespace de Area Effect e Itens anuncia que
pode usar o fluxo genérico de envio ao inventário de um ator. A UI não infere
essas capacidades a partir das strings `SPELLS` ou `ITEMS`.

## Efeitos PF2e

`Efeitos` é uma projeção de leitura do catálogo canônico de Active Effects já
utilizado pelo Pathfinder 2e. O domínio não cria uma segunda fonte de verdade.
A implementação reutiliza `ActiveEffectDefinition`, a resolução por
`definitionKey` e a localização já existentes.

O domínio reúne as definições canônicas disponíveis dos tipos:

- Conditions;
- Effects;
- Afflictions.

A listagem aceita busca, paginação, filtro por tipo, filtro por polaridade e o
mesmo filtro editorial PT-BR do Compêndio. O detalhe continua sendo resolvido
exclusivamente pela `definitionKey` estável; nomes não funcionam como identidade
alternativa.

A `definitionKey` é identidade técnica e não precisa ser exposta ao usuário na
ficha visual. Também não são exibidos na ficha de Efeito o campo redundante
`Tipo` nem os metadados internos de origem (`Pacote`, `Source ID`, `Slug` e o bloco
`Fonte`). A publicação pode continuar aparecendo no rodapé como crédito/contexto
editorial. Polaridade, grupo e os dados específicos de condição permanecem
visíveis quando aplicáveis.

Abrir uma definição de Efeito é somente consulta. O Compêndio não cria nem aplica
`CampaignActorEffect`, não executa stacking, duração, Rule Elements, saves, dano
ou qualquer outra automação mecânica. Aplicação e apresentação de efeitos em um
ator continuam sendo fluxos separados.

Hazards usam o mesmo domínio visual `BESTIARY`, porém a ficha respeita
`entryType = "HAZARD"`. Cards exibem tipo simples/complexo, Furtividade, CA, PV
e Dureza. A ficha separa Detecção e Desarme para manter o procedimento legível,
e organiza as seções como Detecção, Desarme, Defesas, Comportamento e Ações e
reações; seções vazias e seções exclusivas de criatura não são renderizadas.

## Cards

Cada card contém:

- nome;
- publicação, quando aplicável;
- descrição resumida;
- estatísticas principais;
- traits ou classificadores de apresentação;
- status editorial somente quando houver pendência;
- imagem local opcional;
- botão `Ficha`.

`Tradução em revisão` não é uma trait. O status deve ser enviado em
`editorialStatus` e renderizado com cor própria.

Uma tradução revisada não exibe tag. O estado continua disponível para filtros e
relatórios, mas `editorialStatus` deve ser `null` no card e na ficha.

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

Para Efeitos, uma definição PT-BR é considerada revisada para essa projeção
somente quando nome e descrição são resolvidos em `pt-BR`; qualquer fallback de
um desses campos para `en-US` permanece em revisão.

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

No domínio Efeitos, o provider publica:

- Tipo: Condição, Efeito ou Aflição;
- Polaridade: Benéfico, Prejudicial ou Neutro.

Os filtros são independentes do shell compartilhado, podem ser combinados com a
busca e com o status editorial e são aplicados antes da paginação. Qualquer
alteração de seleção retorna à primeira página.

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
- Itens: informações de uso, preço, volume, dano ou valores de armadura;
- Efeitos: descrição, polaridade, grupo e dados de condição quando aplicáveis; a
  identidade estável e os metadados canônicos continuam internos ao provider.

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

As definições canônicas de Active Effects atualmente mantêm o caminho de imagem
do source como metadado, mas continuam usando o fallback visual até existir um
resolver local seguro para esses assets.

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
- ícones do submenu são dicas neutras publicadas pelo descriptor e possuem fallback genérico;
- o submenu não sinaliza quais domínios já possuem janela aberta e mantém o padrão visual do menu lateral pai;
- múltiplas janelas podem coexistir, ser redimensionadas e minimizadas sem introduzir nomes concretos no Core;
- a mesa não é escurecida por backdrop enquanto uma janela do Compêndio ou uma ficha detalhada está aberta;
- o frontend não conhece campos Pathfinder específicos;
- o VTT não calcula regras;
- o provider Pathfinder converte conteúdo do sistema para o contrato neutro;
- Efeitos reutiliza a fonte canônica de Active Effects e não duplica definições;
- consultar Efeitos não aplica efeitos a atores;
- metadados técnicos necessários para resolução permanecem internos quando não agregam valor à ficha visual;
- ações adicionais são expostas por capabilities ou flags neutras, como `canCreateToken`;
- a ficha permanece uma projeção de apresentação; aplicar regras mecânicas não é responsabilidade do Compêndio;
- não há dependência de assets externos em runtime.
