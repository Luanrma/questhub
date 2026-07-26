# VTT - Acesso agnóstico à ficha pelo Token

## Objetivo

Permitir que o usuário abra uma ficha opcionalmente vinculada ao Token sem fazer o VTT conhecer Pathfinder, atributos, fórmulas ou a implementação concreta do editor.

## Contrato utilizado

O VTT conhece somente:

```ts
Campaign.id: string
CampaignToken.id: string
```

O VTT não conhece nem armazena diretamente:

- `systemKey` da ficha;
- schema Pathfinder;
- CA, PV, classe ou ancestralidade;
- rota concreta do editor;
- regras de leitura ou edição da ficha.

## Fluxo

```text
Token
  -> resolvedor genérico por campaignId + tokenId
  -> sheetId + title, quando houver vínculo e acesso
  -> workspace genérico
  -> renderer registrado para Campaign.gameSystem
```

Endpoint de resolução:

```text
GET /api/campaigns/:campaignId/tokens/:tokenId/character-sheet
```

A ficha é vinculada ao Token pelo gerenciador de fichas. O Token não gerencia esse vínculo e não precisa possuir `Character` ou `NPC` associado.

## Exibição da ação

`Abrir ficha` aparece quando o resolvedor encontra uma ficha vinculada e autoriza o usuário.

O backend permite acesso quando:

1. o usuário é Mestre ativo; ou
2. o usuário controla o Token; ou
3. a ficha está atribuída ao usuário.

A ausência de ficha retorna `404` e o menu simplesmente não exibe a ação.

## Experiência de uso

A ficha abre no workspace da própria mesa, sem navegação e sem nova aba. O workspace preserva:

- cena ativa;
- posição e seleção dos Tokens;
- ferramentas abertas;
- combate;
- áreas em preparação;
- estado local do tabuleiro.

A janela pode ser arrastada, redimensionada, paginada, minimizada, restaurada e fechada.

## Invariantes

1. O componente do Token não importa editor Pathfinder.
2. O menu do Token não consulta nem renderiza dados mecânicos.
3. A autorização final sempre é validada pelo backend.
4. A ficha pode existir sem Token.
5. O Token pode existir sem ficha.
6. Excluir ou desvincular o Token preserva a ficha.
7. Um novo sistema usa o mesmo fluxo registrando seu próprio renderer.
