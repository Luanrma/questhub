# Fichas exclusivas e independentes da campanha

## Status

Decisão arquitetural canônica para a branch `feat/game-system-runtime`.

## Regra principal

Uma ficha mecânica é um agregado próprio da campanha.

- somente o Mestre cria fichas;
- a ficha é criada dentro de uma campanha específica;
- a campanha determina o sistema de jogo;
- criar uma ficha não exige Player, NPC, Token, ator ou qualquer outro registro;
- a ficha nasce sem usuário atribuído e sem Token vinculado;
- o Mestre pode criar quantas fichas quiser;
- atribuições são opcionais, posteriores e reversíveis;
- várias fichas podem ser atribuídas ao mesmo usuário;
- um Token pode possuir no máximo uma ficha vinculada;
- excluir ou desvincular um Token não exclui a ficha;
- remover a atribuição de usuário não exclui a ficha.

Portanto:

```text
Ficha != Player
Ficha != NPC
Ficha != Token
Ficha != identidade de participação
```

## Identidade de participação não é ficha

O sistema mantém identidades técnicas mínimas para presença, chat e permissões da campanha.

Essas identidades:

- são criadas durante a criação ou entrada na campanha;
- não possuem dados mecânicos do sistema;
- não são necessárias para criar uma ficha;
- não aparecem no gerenciador de fichas;
- não determinam quantas fichas um usuário pode receber.

## Modelo autoritativo

```text
Campaign
  └── CampaignCharacterSheet[]
        ├── assignedUserId?  (opcional)
        ├── tokenId?         (opcional e único)
        ├── systemKey
        ├── schemaVersion
        └── data
```

A ficha pertence diretamente à campanha. Nenhum `CampaignCharacterRole` é criado para representar uma ficha sem atribuição.

O antigo `CharacterSheet` vinculado obrigatoriamente a `Character` permanece apenas como estrutura legada durante a transição e não é usado pelo novo fluxo.

## Fonte do sistema

A única fonte autoritativa para escolher o provider e o renderer é:

```text
Campaign.gameSystem
```

Fluxo de abertura:

```text
sheetId
   -> campanha atual
   -> Campaign.gameSystem
   -> registro de renderers
   -> renderer do sistema
```

O VTT não contém verificações como:

```ts
if (campaign.gameSystem === 'PATHFINDER_2E')
```

## Criação

Endpoint genérico:

```text
POST /api/campaigns/:campaignId/character-sheets
```

Entrada:

```ts
{
  name: string
  avatarUrl?: string | null
  bio?: string | null
}
```

O payload não aceita:

- `role`;
- `assignedUserId`;
- `tokenId`;
- `gameSystem`;
- tipo de ficha concreto.

O Runtime seleciona o provider registrado para `Campaign.gameSystem`, solicita os dados padrão e cria `CampaignCharacterSheet` diretamente.

## Atribuições posteriores

Endpoint genérico:

```text
PATCH /api/campaigns/:campaignId/character-sheets/:sheetId/assignments
```

Entrada parcial:

```ts
{
  assignedUserId?: string | null
  tokenId?: string | null
}
```

Regras:

- somente o Mestre ativo altera atribuições;
- `assignedUserId` deve identificar um Mestre ou Player ativo da campanha;
- o mesmo usuário pode receber várias fichas;
- `null` remove a atribuição;
- `tokenId` deve pertencer à campanha;
- o mesmo Token não pode estar vinculado a duas fichas;
- `null` remove o vínculo com o Token;
- usuário e Token são vínculos independentes.

Uma ficha usada como NPC não precisa possuir um tipo `NPC`. Ela pode permanecer sem usuário e, quando necessário, ser vinculada a um Token.

## Abertura pelo Token

O VTT entrega apenas `campaignId` e `tokenId` a um resolvedor genérico:

```text
GET /api/campaigns/:campaignId/tokens/:tokenId/character-sheet
```

O resolvedor retorna `sheetId` e título quando houver vínculo e acesso. O VTT não conhece o sistema ou o formato da ficha.

## Abertura dentro da mesa

Abrir uma ficha nunca navega para `/characters`, nunca abre outra aba e nunca desmonta `CampaignLayout`.

A mesa possui um workspace genérico com:

- arraste pelo cabeçalho;
- redimensionamento;
- múltiplas fichas simultâneas;
- foco por `z-index`;
- paginação definida pelo renderer do sistema;
- minimização para uma barra de acesso rápido;
- restauração sem recarregar a sessão;
- fechamento independente da sessão.

## Fronteiras

### VTT Core

Conhece somente:

- `tokenId`;
- comando genérico para resolver e abrir ficha;
- permissões operacionais do Token.

Não conhece:

- Pathfinder;
- páginas da ficha;
- fórmulas;
- endpoints específicos do sistema;
- classes, ancestralidades, CA ou PV.

### Workspace de fichas

Conhece:

- campanha atual;
- `sheetId`;
- chave genérica do sistema;
- janelas, posição, tamanho, foco e minimização;
- registro de renderers.

Não interpreta dados mecânicos.

### Renderer do sistema

Conhece:

- páginas da ficha;
- campos e componentes específicos;
- endpoints específicos do adaptador;
- cálculos e warnings devolvidos pelo Runtime.

## Critérios de aceite

1. o Mestre cria uma ficha informando apenas o nome;
2. a criação funciona com zero Players e zero Tokens na campanha;
3. criar uma ficha não cria `Character`, `CampaignCharacter` ou papel `NPC`;
4. o Mestre pode criar múltiplas fichas sem atribuição;
5. a ficha permanece acessível ao Mestre sem usuário ou Token;
6. uma atribuição de usuário pode ser adicionada, trocada ou removida depois;
7. várias fichas podem ser atribuídas ao mesmo usuário;
8. um vínculo com Token pode ser adicionado, trocado ou removido depois;
9. excluir o Token preserva a ficha;
10. abrir pelo Token usa um resolvedor genérico;
11. o sistema da ficha vem exclusivamente da campanha;
12. o VTT não importa nenhum renderer específico.
