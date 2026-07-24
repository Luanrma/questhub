# Game Systems - Ferramentas e restricoes tecnicas

## Stack

- TypeScript com tipagem estrita;
- Zod para validar dados externos e schemas mecanicos;
- Fastify apenas na camada de entrada HTTP;
- Node Test para testes unitarios e de fronteira.

## Estrutura obrigatoria

```text
apps/api/src/
  game_systems/
    <system>/
      ...
  modules/
    ...modulos exclusivos do VTT...
```

`game_systems` nunca deve ser criado dentro de `modules`.

## Restricoes de dependencia

- codigo em `apps/api/src/game_systems` nao importa codigo de
  `apps/api/src/modules`;
- codigo em `apps/api/src/modules` nao importa regras de
  `apps/api/src/game_systems`;
- `apps/api/src/server.ts` monta exclusivamente o VTT e nao importa
  `game_systems`;
- `apps/api/src/main.ts` e o bootstrap executavel autorizado a unir o servidor
  do VTT ao registrador agregado de sistemas;
- `apps/api/src/game_systems/register.ts` agrega somente registradores de alto
  nivel, nunca rotas individuais de ficha, bestiario, item ou spell;
- cada `apps/api/src/game_systems/<system>/register.ts` registra internamente as
  capacidades daquele sistema;
- um sistema em `apps/api/src/game_systems/<system>` nao importa arquivos de
  outro sistema irmao;
- infraestrutura transversal pode ser consumida por contratos neutros em `db`,
  `http`, `auth`, `config` ou `lib`;
- uma integracao que exija comportamento dos dois contextos deve usar um port ou
  adapter explicito, sem imports diretos entre as regras.

## Padroes

- schemas, defaults e calculos mecanicos permanecem dentro do sistema;
- handlers de entrada apenas validam, autorizam e delegam;
- dados genericos do VTT nao recebem campos ou invariantes de um sistema;
- novos sistemas usam uma subpasta propria e nao importam regras de outro sistema.

## Qualidade

- testes unitarios cobrem schemas e regras puras;
- teste arquitetural impede o retorno de `game_systems` para `modules`, imports
  cruzados entre VTT e sistemas, conhecimento de sistemas em `server.ts` e
  dependencias entre sistemas irmaos;
- toda integracao nova deve declarar seu contrato em `specs.md`.

## Seguranca e performance

- nenhum payload externo e confiavel sem validacao;
- autenticacao e autorizacao continuam obrigatorias nas entradas;
- catalogos estaticos nao fazem download em runtime;
- regras de alta frequencia nao devem ser acopladas aos eventos internos do VTT.
