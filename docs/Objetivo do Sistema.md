# Objetivo do Sistema

QuestHub é um Virtual Tabletop para organizar e executar campanhas de RPG online com suporte a múltiplos Game Systems, sem acoplar o VTT Core às regras de um ruleset concreto.

## Capacidades centrais

- cadastro, login e sessão de usuário;
- criação e participação em Campaigns;
- escolha obrigatória de um Game System na criação da Campaign;
- CampaignMembers com papéis e status de participação;
- CampaignActors como entidades existentes dentro do mundo;
- cenas, mapas, grid, Tokens e estado visual da mesa;
- chat, rolagens, presença e controle de sessão em tempo real;
- diário, assets e configurações de usuário por Campaign;
- persistência agnóstica de ficha e inventário associada a Actors;
- integração com engines de Game System por contratos agnósticos.

## Limite do produto

O VTT Core pode armazenar dados mecânicos de maneira genérica/opaca quando isso for necessário para persistir o estado de uma Campaign, mas não interpreta as regras desses dados.

Conceitos como atributos, classes, ancestralidades/heranças, magias, condições, fórmulas de dano, defesa, equipamentos, moedas e progressão pertencem ao Game System correspondente.

## Modelo de mundo

- `Campaign` é a fronteira máxima de isolamento dos dados de jogo.
- `CampaignMember` representa a participação de um User.
- `CampaignActor` representa uma entidade do mundo.
- `CampaignToken` representa a presença visual/operacional no VTT e pode existir sem Actor vinculado.
- `CampaignCharacterSheet` e `Inventory` pertencem a um Actor da Campaign.

Não existe um `Character` global cujo estado mutável de campanha seja compartilhado entre mundos.

## Game Systems

Toda Campaign seleciona um Game System na criação.

A identificação do sistema é usada para selecionar a engine apropriada, mas o VTT não passa a conhecer ou interpretar as regras concretas desse sistema.

O QuestHub deve poder adicionar novos Game Systems sem reescrever o VTT Core.

## Referências canônicas

- `docs/PROJECT_CONSTITUTION.md`
- `docs/ARCHITECTURE.md`
- `docs/architecture/adr/`
- `docs/governance/SOURCE_OF_TRUTH.md`
