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
  nivel no formato `./<boundary>/register`, incluindo o registro neutro e os
  sistemas; nunca importa arquivos de rotas diretamente;
- `apps/api/src/game_systems/registry/register.ts` concentra o registro das
  entradas HTTP neutras do contexto, sem incorporar mecanicas de um sistema;
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
- providers de catalogo declaram se uma entrada pode originar Token; o registry
  nao infere tipos de criatura por campos mecanicos.
- a materializacao de criatura usa `CampaignActor`, `CampaignCharacterSheet` e
  `CampaignToken` existentes na mesma transacao e nao cria `Inventory`, sem
  adicionar regra de sistema aos modelos do VTT.
- o frontend de `game-systems` publica atualizacoes da biblioteca e capacidades
  de Token por eventos compartilhados em `apps/web/src/lib`; componentes sob
  `apps/web/src/vtt` consomem apenas esses contratos neutros.
- fichas simplificadas persistem um envelope versionado de apresentacao do
  catalogo e sao somente leitura neste recorte.
- dados mecanicos necessarios a projecoes de Token ficam em payload opaco
  produzido e interpretado pelo mesmo game system; o VTT recebe somente
  `TokenPresentation.resources`.

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
- criar ou duplicar Token de catalogo exige Mestre ativo e campanha compativel;
  o `contentId` sempre e resolvido pelo provider registrado para o sistema da
  campanha.
