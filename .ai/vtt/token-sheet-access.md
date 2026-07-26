# VTT - Acesso agnóstico à ficha pelo Token

## Objetivo

Permitir que o usuário abra a ficha vinculada diretamente pelo menu de contexto do Token sem fazer o VTT conhecer Pathfinder, atributos, fórmulas ou a implementação concreta do editor.

## Contrato utilizado

O VTT conhece somente:

```ts
CampaignToken.characterId: string | null
Campaign.id: string
```

O VTT não conhece:

- `systemKey` da ficha;
- schema Pathfinder;
- CA, PV, classe ou ancestralidade;
- rota concreta do editor;
- regras de leitura ou edição da ficha.

## Fluxo

```text
Token vinculado
  -> Abrir ficha
  -> /campaigns/:campaignId/characters/:characterId/sheet
  -> descriptor do sistema da campanha
  -> editor concreto registrado pelo sistema
```

A rota concreta é resolvida fora do domínio de Token por meio de `GameSystemDescriptor.characterSheetPathSegment`.

## Exibição da ação

`Abrir ficha` aparece somente quando:

1. o Token possui `characterId`;
2. o usuário é Mestre; ou
3. o usuário é o controlador atual e também proprietário do Character vinculado.

Consequências:

- Token genérico não oferece ação de ficha;
- controlar companion ou Token secundário vinculado a Character de terceiro não concede acesso;
- transferir controle do Token não transfere propriedade ou edição da ficha;
- o Mestre continua autorizado por sua função na campanha.

## Experiência de uso

A ficha abre em nova aba para preservar integralmente:

- cena ativa;
- posição e seleção dos Tokens;
- ferramentas abertas;
- combate;
- áreas em preparação;
- estado local do tabuleiro.

## Invariantes

1. O componente do Token não importa editor Pathfinder.
2. O menu do Token não consulta nem renderiza dados mecânicos.
3. A autorização final sempre é validada pelo backend da ficha.
4. `characterId` continua opcional.
5. Excluir ou desvincular a ficha remove naturalmente a ação do Token sem afetar sua existência.
6. Um novo sistema pode usar o mesmo fluxo registrando seu próprio editor.
