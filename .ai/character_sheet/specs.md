# Modulo: Ficha de Personagem (Specs & Contracts)

## 1. Responsabilidade
Definir contratos comuns para ficha mecanica de um `Character` existente.

Este modulo nao cria `Character` e nao cria `CampaignCharacter`. Ele persiste dados mecanicos em `Character.sheet` e define/valida `Character.system` conforme o sistema da ficha.

## 2. Sistemas

```prisma
enum GameSystem {
  DND_5E
  PATHFINDER_2E
}
```

`GameSystem` e compartilhado entre campanha, personagem e ficha.

## 3. Contrato Comum de Persistencia

```json
{
  "system": "DND_5E",
  "version": 1,
  "data": {
    "identity": {
      "race": "Human",
      "class": "Ranger",
      "background": "Outlander",
      "level": 3
    }
  }
}
```

Regras:
* `system` e obrigatorio ao criar ficha.
* `Character.system` deve ser atualizado para o mesmo valor de `system`.
* `Character.sheet` armazena o JSON validado pelo contrato comum e, no futuro, pelo modulo especifico do sistema.
* Se `Character.sheet` existir, `Character.system` nao deve ser `null`.

## 4. Compatibilidade com Campanha
* `Campaign.system` e obrigatorio.
* `Character.system` pode ser `null` quando nao ha ficha.
* Personagem sem ficha pode herdar `Campaign.system` ao entrar na campanha.
* Personagem com ficha so pode entrar em campanha com o mesmo `GameSystem`.
* Personagem com ficha incompativel deve bloquear a entrada ate o usuario escolher apagar ficha ou duplicar personagem sem ficha.

## 5. Modulos Especificos
* `dnd_5e_sheet`: regras especificas futuras de D&D 5e.
* `pathfinder_2e_sheet`: regras especificas futuras de Pathfinder 2e.

O modulo `character_sheet` define o ciclo de vida e o contrato comum; os modulos especificos validam campos, limites, calculos e derivacoes.

## 6. Criterios de Aceitacao
* A ficha nao pode ser salva para personagem inexistente.
* A ficha nao pode ser salva sem `system`.
* O backend deve validar o contrato comum antes de persistir.
* Ao salvar ficha, `Character.system` e `Character.sheet` devem permanecer coerentes.
* Alteracoes em campos base devem recalcular derivados no frontend quando as regras especificas existirem.
* O backend deve validar novamente os dados recebidos antes de persistir.

## 7. Decisoes Pendentes
* Campos mecanicos reais de D&D 5e.
* Campos mecanicos reais de Pathfinder 2e.
* Forma de distribuicao de atributos por sistema.
* Se derivados serao persistidos ou calculados sob demanda.
