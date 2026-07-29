# Pathfinder 2e - Ficha de personagem - Ferramentas e restricoes

## Stack

- TypeScript;
- Zod para dados persistidos;
- Game System Runtime para migracao, validacao e derivacao;
- Fastify para autenticacao e rotas HTTP;
- Prisma somente na camada externa de persistencia;
- Node Test para schemas, migracao e formulas;
- React apenas para estado e apresentacao.

## Localizacao

```text
apps/api/src/game_systems/pathfinder_2e/character-sheet/
  adapter.ts
  defaults.ts
  derivation.ts
  mechanical-catalog.ts
  routes.ts
  schema.ts
```

## Restricoes

- nao importar modulos de campanha, Token, cena, grid, combate, Area Effect ou inventario;
- nao executar formulas em componentes React;
- nao confiar em totais enviados pelo cliente;
- nao persistir valores derivados como fonte da verdade;
- validar todo payload antes da persistencia;
- manter derivacao pura, sincrona e deterministica;
- usar o mesmo adaptador no GET, na previa e no PUT;
- migrar explicitamente qualquer schema anterior;
- nao inferir bonus ocultos de totais manuais antigos;
- nao aplicar automaticamente efeitos de heranca, background ou divindade sem dados mecanicos estruturados;
- nao considerar armadura equipada antes da integracao com inventario.

## Catalogos mecanicos

A ficha possui um catalogo compacto e local contendo somente:

- PV base por ancestralidade;
- PV por nivel de cada classe.

O catalogo nao faz download em runtime e deve permanecer coerente com os nomes
dos selects. Relacoes de Heranca e concessoes mecanicas ficam no modulo
`character_options`; valores persistidos continuam usando o original `en-US`.

## Backend autoritativo

O frontend envia somente `data`. O backend devolve:

```text
data
-derived
-warnings
```

`derived` nunca e aceito como entrada de salvamento.

## Previa reativa

O frontend usa debounce antes de chamar:

```text
POST /api/characters/:characterId/pathfinder-2e-sheet/derive
```

A rota valida ownership e executa o mesmo Runtime usado no salvamento.

## Testes

- default V2 valida;
- proficiencia nao treinada nao recebe nivel;
- proficiencias treinada, especialista, mestre e lendaria recebem nivel;
- Human + Fighter calcula PV corretamente;
- Constituicao afeta PV e Fortitude;
- Destreza afeta CA, Reflexos e pericias relacionadas;
- migracao V1 preserva dados fundamentais;
- selects rejeitam nomes fora dos catalogos.
