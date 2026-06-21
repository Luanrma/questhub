# Modulo: Ficha de Personagem (Specs & Contracts)

## 1. Responsabilidade
Este modulo define contratos, validacoes e regras para a ficha mecanica de um personagem ja existente.

O modulo nao cria registros de `Character`. Ele recebe um `characterId` valido e persiste dados mecanicos associados a esse personagem.

## 2. Contrato Inicial de Persistencia

```json
{
  "version": 1,
  "identity": {
    "race": "Human",
    "class": "Ranger",
    "background": "Outlander",
    "level": 3
  },
  "attributes": {
    "strength": 16,
    "dexterity": 14,
    "constitution": 15,
    "intelligence": 10,
    "wisdom": 12,
    "charisma": 11
  }
}
```

## 3. Value Objects Planejados
* `AttributeScore`: encapsula um numero inteiro dentro dos limites do sistema escolhido.
* `HitPoints`: encapsula HP atual e HP maximo, impedindo valores invalidos.

## 4. Criterios de Aceitacao Futuros
* A ficha nao pode ser salva se violar as regras mecanicas da campanha.
* Alteracoes em campos base devem recalcular derivados no frontend antes do salvamento.
* O backend deve validar novamente os dados recebidos antes de persistir.

## 5. Decisoes Pendentes
* Sistema de RPG inicial.
* Forma de distribuicao de atributos.
* Campos mecanicos do MVP.
* Se derivados serao persistidos ou calculados sob demanda.
