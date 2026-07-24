# Pathfinder 2e - Ficha de personagem - Ferramentas e restricoes

## Stack

- TypeScript;
- Zod para o schema da ficha manual;
- Fastify para as rotas HTTP;
- Prisma por meio da infraestrutura compartilhada existente;
- Node Test para validacao dos schemas e defaults.

## Localizacao

O backend da ficha fica em:

```text
apps/api/src/game_systems/pathfinder_2e/character-sheet/
```

Ele nao pertence a `apps/api/src/modules`, que e reservado ao VTT.

## Restricoes

- nao importar modulos de campanha, Token, cena, grid, combate ou inventario;
- nao introduzir calculos automaticos nesta fase;
- manter catalogos estaticos, independentes e sem download em runtime;
- validar todo payload antes da persistencia;
- usar apenas identidade generica do personagem na integracao existente;
- nao adicionar regras Pathfinder aos modulos genericos do VTT.
- expor o registrador da ficha apenas ao registrador interno de Pathfinder 2e;
- nao registrar esta rota diretamente em `server.ts`, `main.ts` ou no agregador
  global de sistemas.

## Testes

- defaults devem validar no schema;
- campos manuais devem permanecer editaveis;
- selecoes devem aceitar apenas vazio ou nomes dos catalogos;
- a fronteira arquitetural global deve permanecer valida.
