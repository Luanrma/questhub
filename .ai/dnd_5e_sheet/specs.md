# Modulo: Ficha D&D 5e (Specs & Contracts)

## 1. Responsabilidade
Validar e calcular dados especificos de ficha quando `GameSystem = DND_5E`.

## 2. Contrato Inicial
No MVP, nenhum contrato mecanico especifico sera implementado. O modulo reconhece apenas o identificador:

```json
{
  "system": "DND_5E"
}
```

## 3. Criterios de Aceitacao Futuros
* Validar campos obrigatorios de D&D 5e.
* Recalcular derivados a partir dos campos base.
* Rejeitar dados incompatíveis com o sistema.
