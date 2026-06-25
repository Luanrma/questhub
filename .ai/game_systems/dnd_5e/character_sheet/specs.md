# Submodulo: Ficha D&D 5e (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato futuro para validar e calcular dados especificos quando `GameSystem = DND_5E`.

Este submodulo e o contrato autoritativo para futuras capacidades de ficha D&D 5e.

## 2. Entrada
O submodulo recebe uma ficha ja validada pelo envelope comum de `game_systems`.

```json
{
  "system": "DND_5E",
  "version": 1,
  "data": {}
}
```

## 3. Extensoes Futuras
Campos candidatos exclusivos de D&D 5e:
* `proficiencyBonus`
* `armorClass`
* `savingThrows`
* `skills`
* `spellcasting`
* `equipment`
* `features`

## 4. Criterios de Aceitacao Futuros
* Validar campos obrigatorios de D&D 5e.
* Recalcular derivados a partir dos campos base comuns e especificos.
* Rejeitar dados incompativeis com D&D 5e.
* Nao redeclarar contratos comuns sem justificativa documentada.
