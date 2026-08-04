# Equipamentos — Pathfinder 2e

## Objetivo

Permitir que itens pertencentes ao inventário de um ator sejam segurados, vestidos ou guardados, aplicando regras específicas do Pathfinder 2e sem introduzir conhecimento desse sistema no VTT Core.

## Fronteira arquitetural

### Inventário genérico

O inventário agnóstico é responsável somente por:

- persistir a instância do item;
- preservar os dados originais do catálogo em `InventoryEntry.data`;
- persistir estado operacional neutro em `InventoryEntry.state`;
- manter quantidade e posição visual;
- aplicar uma política de empilhamento fornecida pelo Game System;
- renderizar uma chave genérica de ícone fornecida pelo Game System.

O inventário genérico não conhece mãos, armaduras, slots corporais, proficiências ou Classe de Armadura.

### Módulo Pathfinder 2e

O módulo `pathfinder_2e/equipment` é responsável por:

- interpretar a propriedade `usage` dos itens Pathfinder;
- determinar se um item pode ser segurado ou vestido;
- controlar a ocupação das duas mãos do personagem;
- detectar conflitos entre itens vestidos;
- substituir equipamentos conflitantes de forma atômica;
- produzir avisos de proficiência sem impedir o uso do item;
- fornecer a armadura equipada para a derivação da ficha;
- montar o modelo visual do menu de equipamentos.

## Estado operacional

O estado da instância é separado da definição do catálogo:

```json
{
  "equipment": {
    "systemKey": "PATHFINDER_2E",
    "carryMode": "HELD"
  }
}
```

Valores aceitos:

- `STOWED`: guardado na mochila;
- `HELD`: segurado e fora da mochila;
- `WORN`: vestido e fora da mochila.

Uma entrada com estado operacional representa uma única unidade. O banco aplica a regra `state IS NULL OR quantity = 1`.

## Mochila e equipamento

`InventoryEntry` continua sendo a única instância persistida do item. Equipar não duplica, transfere ou remove o item do inventário do ator.

A posição diferencia onde ele aparece:

- `slotIndex >= 0`: posição visual ocupada na mochila;
- `slotIndex < 0`: posição interna reservada para um item em uso.

Ao equipar ou segurar:

1. o item recebe `HELD` ou `WORN`;
2. ele recebe uma posição interna negativa;
3. deixa de consumir um slot visual da mochila.

Ao guardar:

1. o item recebe `STOWED`;
2. retorna ao primeiro slot não negativo disponível;
3. reaparece na grade da mochila.

A mudança de estado e posição acontece na mesma transação. A migration `20260803235000_move_equipped_items_outside_backpack` corrige os equipamentos criados antes dessa regra.

## Interpretação de uso

### Itens segurados

- `held-in-one-*`: ocupa uma mão;
- `held-in-two-*`: ocupa duas mãos;
- `held-in-one-plus-*`: ocupa duas mãos neste primeiro recorte.

O personagem possui duas mãos por padrão. Uma arma de duas mãos exige que os demais itens segurados sejam guardados.

### Itens vestidos

- `worn-armor`: grupo exclusivo `armor`;
- `worn-<grupo>`: exclusivo com outros itens do mesmo grupo;
- `worn`: não cria exclusividade artificial.

Não existe uma lista fixa de slots corporais no VTT Core. O grupo é derivado do `usage` definido pelo Pathfinder.

## Política de empilhamento

Equipamentos utilizáveis precisam permanecer como instâncias individuais:

- armas não empilham;
- armaduras não empilham;
- escudos não empilham;
- itens `held-*` ou `worn-*` não empilham;
- recipientes e kits não empilham.

Itens naturalmente quantitativos podem empilhar quando seus dados forem idênticos:

- munições;
- consumíveis;
- tesouros;
- equipamentos que não sejam segurados ou vestidos.

## Ícones do inventário

A política Pathfinder fornece um `iconKey` genérico baseado em `itemType`.

O frontend associa essa chave a ícones visuais para:

- arma;
- armadura;
- escudo;
- consumível;
- munição;
- tesouro;
- recipiente;
- kit;
- equipamento geral.

O ícone de caixa é usado somente quando não há imagem nem categoria de ícone reconhecida.

## Fichas dos itens

Entradas vinculadas ao catálogo preservam `catalogContentId`.

A mesma ficha de catálogo pode ser aberta por:

- clique no item da mochila;
- ação `Ficha` em um equipamento disponível;
- ação `Ficha` em um equipamento em uso.

Não existe uma segunda implementação de ficha para equipamentos.

## Classe de Armadura

A única automação mecânica deste recorte é a Classe de Armadura.

Ao vestir uma armadura, a ficha utiliza:

```text
CA = 10
   + modificador de Destreza limitado pelo Dex Cap
   + proficiência da categoria da armadura
   + bônus de item da armadura
   + ajustes manuais
```

A CA continua sendo derivada em tempo de leitura. O valor calculado não é persistido.

A resposta derivada informa:

- categoria da armadura;
- nome da fonte;
- Destreza bruta e aplicada;
- limite de Destreza;
- bônus de proficiência;
- bônus de item;
- ajustes manuais;
- valor final.

## Escudos

Escudos ocupam uma mão, mas não aumentam automaticamente a CA. O bônus de `Raise a Shield` fica fora deste recorte porque depende de uma ação e de duração em combate.

## Proficiência

Falta de proficiência gera aviso, não bloqueio. O personagem pode vestir a armadura, mas a derivação usa a proficiência efetiva da categoria correspondente.

## Acesso pela ficha

Fichas completas do Pathfinder possuem a aba `Inventário`.

A aba resolve o `actorId` da própria ficha e abre o mesmo inventário usado pelo Token e pelo gerenciador da campanha. O acesso não depende de a ficha estar vinculada a um Token.

- Mestre pode gerenciar quantidades e remover entradas;
- jogador atribuído ao ator pode consultar, reorganizar o uso e equipar itens;
- o jogador não recebe permissão estrutural para alterar quantidades.

## API

### Consultar equipamentos

```http
GET /api/campaigns/:campaignId/actors/:actorId/equipment/pathfinder-2e
```

### Alterar estado

```http
PATCH /api/campaigns/:campaignId/actors/:actorId/inventory/entries/:entryId/equipment/pathfinder-2e
```

Corpo:

```json
{
  "carryMode": "WORN",
  "resolveConflicts": true
}
```

Quando existem conflitos e `resolveConflicts` é falso, a API responde `409` e lista as entradas que precisam ser guardadas.

## Interface

O painel visual apresenta:

- CA atual e sua composição;
- armadura equipada;
- mãos ocupadas;
- itens em uso;
- itens equipáveis disponíveis na mochila;
- acesso à ficha de cada item catalogado;
- avisos de proficiência e dados ausentes;
- confirmação antes de substituir itens conflitantes.

A integração com o inventário acontece pela ponte `apps/web/src/game-systems/equipment-renderers.tsx`, preservando o modal genérico como host de renderizadores de Game System.

## Fora do escopo inicial

- `Invest an Item` e limite de itens investidos;
- requisitos de Força e penalidades de armadura;
- penalidade de velocidade;
- runas e melhorias de armadura;
- anatomias com quantidade variável de mãos;
- mão principal e mão secundária;
- ações de sacar, guardar e trocar durante combate;
- bônus temporário de escudo;
- dano e ataques de armas.
