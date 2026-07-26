# Fichas exclusivas da campanha

## Status

Decisão arquitetural canônica para a branch `feat/game-system-runtime`.

## Regra principal

Uma ficha mecânica não existe fora de uma campanha.

- somente o Mestre cria fichas;
- a ficha é criada dentro de uma campanha específica;
- a campanha determina o sistema de jogo;
- o cliente não escolhe o tipo de ficha durante a criação;
- o Mestre pode criar uma ficha para si, para um Player ativo ou como NPC;
- uma ficha atribuída a um Player permanece pertencendo ao mundo da campanha;
- trocar o Player atribuído não transforma a ficha em conteúdo global;
- sair da campanha não move nem exporta a ficha para uma biblioteca pessoal.

## Identidade de participação não é ficha

O sistema pode manter uma identidade técnica mínima para representar um usuário dentro da campanha e sustentar presença, chat e permissões antes de existir uma ficha mecânica.

Essa identidade:

- é criada durante a criação ou entrada na campanha;
- não possui dados mecânicos do sistema;
- não aparece no gerenciador como uma ficha não salva;
- não permite ao jogador escolher sistema, classe, ancestralidade ou outros dados;
- só recebe `CharacterSheet` quando o Mestre cria a ficha.

Portanto:

```text
Participação na campanha != Ficha mecânica
```

## Fonte do sistema

A única fonte autoritativa é:

```text
Campaign.gameSystem
```

`Character.gameSystem`, enquanto ainda existir por compatibilidade de banco, não é usado para escolher o renderer e deve sempre ser sincronizado com a campanha.

Fluxo de abertura:

```text
Token.characterId
      -> solicitação genérica de abertura
      -> campanha atual
      -> Campaign.gameSystem
      -> registro de renderers
      -> renderer da ficha do sistema
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

Entrada genérica:

```ts
{
  name: string
  role: 'MASTER' | 'PLAYER' | 'NPC'
  assignedUserId?: string
  avatarUrl?: string | null
  bio?: string | null
}
```

O Runtime seleciona o provider registrado para `Campaign.gameSystem`. O provider fornece os dados padrão e a versão do schema; a rota genérica persiste a identidade, o vínculo com a campanha e a ficha em uma transação.

## Abertura dentro da mesa

Abrir uma ficha nunca navega para `/characters`, nunca abre outra aba e nunca desmonta `CampaignLayout`.

A mesa possui um workspace genérico de janelas de ficha com:

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

- `characterId` opcional no Token;
- comando genérico `open character sheet`;
- permissões operacionais do Token.

Não conhece:

- Pathfinder;
- páginas da ficha;
- fórmulas;
- endpoints específicos;
- classes, ancestralidades, CA ou PV.

### Workspace de fichas

Conhece:

- campanha atual;
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

## Fluxos removidos

- criação global em `/characters/new`;
- seleção de personagem global ao criar campanha;
- seleção ou criação de personagem ao entrar por convite;
- redirecionamento da mesa para uma página externa de ficha;
- escolha do sistema pelo formulário de personagem.

## Critérios de aceite

1. somente Mestre ativo cria uma ficha;
2. toda ficha está vinculada a exatamente uma campanha;
3. o sistema da ficha vem exclusivamente da campanha;
4. jogadores entram na campanha sem criar ficha;
5. identidades sem `CharacterSheet` não aparecem como fichas;
6. abrir ficha pelo Token mantém a mesma sessão e a mesma rota;
7. abrir ficha pelo painel mantém a mesma sessão e a mesma rota;
8. a janela pode ser movida, redimensionada, paginada, minimizada, restaurada e fechada;
9. o VTT não importa nenhum renderer específico;
10. remover o renderer Pathfinder não impede o VTT de compilar e operar Tokens.