# ADR-0005 — VTT Core não interpreta regras de Game System

Status: **Accepted**  
Data: 2026-08-15

## Contexto

O QuestHub precisa suportar múltiplos sistemas de RPG sem transformar o VTT em uma implementação específica de Pathfinder, D&D ou outro ruleset.

Ao mesmo tempo, Game Systems precisam utilizar capacidades visuais e operacionais do VTT para oferecer automações.

## Decisão

O VTT Core oferece primitivas, contratos e capacidades genéricas. Engines de Game System interpretam regras mecânicas e convertem seu estado para contratos agnósticos consumidos pelo VTT.

A dependência conceitual é:

`VTT capabilities/contracts <- Composition Root -> Game System engine`

O VTT não importa implementações concretas de Game Systems e uma engine concreta não importa módulos internos do VTT.

## VTT Core pode conhecer

- Campaign e membership;
- Actor como entidade genérica do mundo;
- Token, cena, grid, paredes e posicionamento;
- recursos/barras/indicadores genéricos;
- seleção de alvos;
- áreas, animações e overlays genéricos;
- rolagens solicitadas por contrato;
- permissões, ownership e visibilidade;
- Inventory e Character Sheet como contêineres/persistência agnóstica quando os dados mecânicos permanecem opacos ao Core;
- eventos genéricos de atualização/invalidação.

## VTT Core não pode interpretar

- atributos concretos;
- PV/HP como regra específica;
- CA/AC;
- classes, ancestries/heranças, feats ou progressão;
- spell slots ou regras de magia;
- fórmulas de dano ou defesa;
- moedas e conversões específicas de ruleset;
- condições específicas como dying/wounded/doomed;
- estrutura interna de uma ficha concreta.

## Game System pode conhecer

- schema mecânico do próprio ruleset;
- validação e cálculos de regras;
- catálogo de itens, spells, criaturas e conteúdo;
- conversão de estado mecânico em projeções/contratos genéricos;
- comandos mecânicos e seus resultados.

## Game System não deve conhecer

- React/JSX ou componentes internos do VTT;
- Canvas/PixiJS/DOM como implementação concreta de UI;
- Socket.IO ou outro transporte concreto;
- módulos internos do VTT;
- implementações de outro Game System.

## Composition Root

O Composition Root é responsável por selecionar e registrar a engine correspondente ao `Campaign.gameSystem`, sem espalhar condicionais de regras pelo VTT.

## Enforcement

Esta decisão deve ser protegida por:

1. revisão arquitetural;
2. checks determinísticos de imports/identificadores;
3. testes de contrato;
4. CI;
5. Architecture Guardian como camada complementar.

IA não substitui enforcement determinístico.
