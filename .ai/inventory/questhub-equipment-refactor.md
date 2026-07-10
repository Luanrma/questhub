# RFC --- Refatoração do Sistema de Equipamentos (Equipment)

**Status:** Aprovada para implementacao\
**Módulo:** Inventory\
**Idioma:** PT-BR

------------------------------------------------------------------------

# 1. Objetivo

Refatorar completamente o sistema de equipamentos do QuestHub para que o
módulo **Inventory** seja totalmente agnóstico ao sistema de RPG.

Nenhuma regra de Pathfinder 2e, D&D 5e ou qualquer outro sistema poderá
existir dentro do módulo Inventory.

Toda regra específica deverá existir exclusivamente dentro do pacote do
sistema correspondente, por exemplo:

    packages/
        game-system-pathfinder-2e/

O Inventory deve conhecer apenas conceitos genéricos de equipamento.

------------------------------------------------------------------------

# 2. Problema Atual

Hoje o equipamento é baseado em "slots" (main_hand, off_hand, armor,
shield...).

Esses slots representam regras de Pathfinder, contaminando um módulo que
deveria ser reutilizável.

Isso impede evolução para outros sistemas.

Exemplos de problemas:

-   permite estados inválidos;
-   regras codificadas em nomes de slots;
-   Inventory conhece Pathfinder;
-   necessidade de alterar Inventory ao adicionar um novo sistema.

------------------------------------------------------------------------

# 3. Objetivos da Refatoração

## O módulo Inventory DEVE

-   controlar persistência;
-   controlar ciclo de equipar/desequipar;
-   emitir eventos;
-   manter ledger;
-   executar validações transacionais;
-   solicitar validações ao Game System Adapter.

## O módulo Inventory NÃO DEVE conhecer

-   mãos;
-   escudos;
-   armaduras;
-   body slots;
-   itens investidos;
-   armas de duas mãos;
-   tipos de arma;
-   regras de Pathfinder;
-   regras de D&D;
-   qualquer conceito específico de um RPG.

------------------------------------------------------------------------

# 4. Responsabilidade do Game System

Cada sistema deverá implementar seu próprio contrato.

Exemplo:

    packages/
        game-system-pathfinder-2e/
        game-system-dnd5e/
        game-system-tormenta20/

Cada pacote decide:

-   quais opções de equipamento existem;
-   quais recursos são consumidos;
-   capacidade máxima do personagem;
-   incompatibilidades;
-   regras especiais;
-   mensagens de erro.

O Inventory nunca deverá possuir condicionais do tipo:

    if (system == PATHFINDER)

------------------------------------------------------------------------

# 5. Novo Modelo Conceitual

Substituir "slot" por conceitos genéricos.

Exemplos:

-   EquipmentState
-   EquipmentOption
-   EquipmentResourceUsage
-   EquipmentCapacity
-   EquipmentValidationResult

O significado destes objetos será definido pelo contrato do adapter.

------------------------------------------------------------------------

# 6. Fluxo Esperado

1.  Frontend solicita equipar.
2.  Inventory identifica o sistema da campanha.
3.  Obtém o GameSystemAdapter.
4.  Solicita ao adapter as opções válidas.
5.  Solicita ao adapter a validação.
6.  Inventory persiste a operação.
7.  Inventory grava ledger.
8.  Inventory publica evento.

Toda decisão de regra pertence ao adapter.

------------------------------------------------------------------------

# 7. Alterações Necessárias

## Domínio

-   Revisar modelo Equipment.
-   Eliminar dependência de slot exclusivo.
-   Introduzir conceitos genéricos.

## Adapter

Expandir o contrato do InventorySystemAdapter para suportar:

-   opções de equipamento;
-   validação;
-   cálculo de capacidade;
-   recursos consumidos.

## Persistência

Revisar tabela EquippedItem.

Avaliar remoção de:

-   slot
-   exclusiveSlotKey

caso deixem de representar o domínio.

## Pathfinder

Mover TODAS as regras específicas para:

    packages/game-system-pathfinder-2e

Incluindo:

-   mãos;
-   armaduras;
-   escudos;
-   itens investidos;
-   demais restrições.

------------------------------------------------------------------------

# 8. Plano de Execução

Antes de alterar código:

-   mapear fluxo atual;
-   identificar pontos de acoplamento;
-   produzir proposta técnica;
-   validar proposta;
-   somente então implementar.

------------------------------------------------------------------------

# 9. Critérios de Aceite

A refatoração será considerada concluída quando:

-   Inventory não possuir nenhuma regra específica de Pathfinder.
-   Todo comportamento específico estiver no package do sistema.
-   Um novo sistema possa ser adicionado implementando apenas seu
    adapter.
-   Nenhuma alteração no Inventory seja necessária para suportar um novo
    RPG.
-   Todas as validações ocorram no backend.
-   As validações finais ocorram dentro de transações.
-   Testes unitários e de integração cubram os novos contratos.

------------------------------------------------------------------------

# 10. Observações

Esta refatoração é arquitetural.

O objetivo não é apenas corrigir bugs de equipamento, mas estabelecer
uma base escalável para que o QuestHub suporte múltiplos sistemas de RPG
mantendo o núcleo totalmente agnóstico.
