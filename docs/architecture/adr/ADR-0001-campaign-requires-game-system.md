# ADR-0001 — Campaign exige um Game System

Status: **Accepted**  
Data: 2026-08-15

## Contexto

O QuestHub é um VTT capaz de suportar múltiplos sistemas de RPG. A documentação histórica afirmava que uma campanha poderia nascer sem qualquer propriedade relacionada a sistema de regras, enquanto a implementação atual exige `Campaign.gameSystem` e o fluxo de criação exige a escolha de um sistema.

Era necessário definir se o Game System faz parte da identidade/configuração da Campaign ou se deveria ser associado posteriormente ou externamente.

## Decisão

Toda `Campaign` deve possuir obrigatoriamente um Game System desde sua criação.

O usuário que cria a campanha seleciona o Game System disponível para aquele mundo.

A Campaign pode persistir uma identificação do Game System para permitir que o Composition Root selecione a engine correta.

Essa identificação **não autoriza o VTT Core a interpretar regras do sistema**.

## Regras decorrentes

- uma Campaign não existe em estado persistido sem Game System;
- o Game System é escolhido na criação da Campaign;
- trocar o Game System de uma Campaign existente não é permitido implicitamente e exige decisão/fluxo específico futuro;
- o VTT pode transportar/expor uma chave de identificação do sistema quando necessário para composição;
- lógica como atributos, moedas, classes, magias, dano, CA, condições e demais regras pertence à engine concreta;
- código de renderização e módulos genéricos do VTT não devem possuir branches de regra como `if (gameSystem === 'PATHFINDER_2E')` para interpretar comportamento mecânico;
- engines concretas são selecionadas por contratos/registradores no Composition Root.

## Consequências

### Positivas

- a engine correta pode ser determinada de forma inequívoca durante toda a vida da Campaign;
- dados mecânicos da Campaign permanecem vinculados a um único ruleset;
- reduz ambiguidade em Character Sheets, Inventory entries e automações;
- simplifica composição de serviços e UI específicas do sistema sem ensinar regras ao VTT.

### Restrições

- o fluxo de criação deve exigir um Game System válido;
- novos sistemas precisam ser registrados antes de poderem criar Campaigns;
- documentação que afirme que Campaign não possui Game System está obsoleta.

## Evidência de implementação atual

O schema Prisma contém `Campaign.gameSystem` obrigatório e o endpoint `POST /api/campaigns` exige atualmente `PATHFINDER_2E`.

## Não decidido por este ADR

- formato definitivo da chave (`enum`, string extensível, registry etc.);
- instalação/ativação dinâmica de novos Game Systems;
- migração de uma Campaign entre Game Systems;
- catálogo/distribuição de Game Systems.
