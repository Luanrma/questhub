# Modulo: Ficha Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Validar e calcular dados especificos de ficha quando `GameSystem = PATHFINDER_2E`.

## 2. Contrato Inicial
No MVP, nenhum contrato mecanico especifico sera implementado. O modulo reconhece apenas o identificador:

```json
{
  "system": "PATHFINDER_2E"
}
```

## 3. Criterios de Aceitacao Futuros
* Validar campos obrigatorios de Pathfinder 2e.
* Recalcular derivados a partir dos campos base.
* Rejeitar dados incompativeis com o sistema.
