# QuestHub — Pathfinder 2e
## Implementação do cálculo de Vida Máxima na Character Sheet

> **Superseded.** Esta proposta inicial referenciava caminhos que não existem no repositório
> (`apps/api/.../hit-points.ts`, `packages/game-systems/...`). O contrato canônico e atualizado
> vive em `.ai/game_systems/pathfinder_2e/hit_points/` (readme.md, skills.md, specs.md), que
> adapta esta proposta à estrutura real do projeto (pacote `packages/game-system-pathfinder-2e`,
> precedente de Armor Class dinâmico). Consulte aquele módulo antes de implementar qualquer coisa
> a partir deste documento.

## 1. Objetivo

Implementar no módulo `pathfinder_2e` do QuestHub o cálculo automático da vida máxima do personagem.

Hoje a ficha inicia com:

```json
{
  "hitPoints": {
    "maximum": 0,
    "current": 0,
    "temporary": 0,
    "wounded": 0,
    "dying": 0,
    "doomed": 0
  }
}
```

Isso deve ser substituído por uma regra de domínio que derive a vida máxima a partir de:

- vida base da ancestralidade;
- vida por nível da classe;
- nível do personagem;
- modificador de Constituição;
- bônus permanentes;
- ajuste manual.

---

## 2. Regra de cálculo

A fórmula da vida base será:

```text
vidaBase =
  hpDaAncestralidade
  + nível × (hpDaClassePorNível + modificadorDeConstituição)
```

A vida máxima final será:

```text
vidaMáxima =
  vidaBase
  + bônusPermanentes
  + ajusteManual
```

O modificador de Constituição será:

```ts
const constitutionModifier = Math.floor((constitution - 10) / 2)
```

A vida máxima nunca poderá ser menor que `1`.

```ts
maximum = Math.max(1, calculatedMaximum)
```

---

## 3. Exemplo

Personagem:

```text
Ancestralidade: 8 HP
Classe: 8 HP por nível
Nível: 3
Constituição: 14
Modificador de Constituição: +2
```

Cálculo:

```text
8 + 3 × (8 + 2)
8 + 30
38 HP máximos
```

---

## 4. Decisão de domínio

A vida máxima deve ser tratada como um valor derivado.

O usuário poderá editar diretamente apenas:

- vida atual;
- vida temporária;
- Ferido;
- Morrendo;
- Condenado;
- ajuste manual de vida máxima.

O usuário não deve editar diretamente o valor calculado de vida máxima.

A UI deve apresentar a composição do cálculo quando possível.

Exemplo:

```text
Ancestralidade:      8
Classe:             24
Constituição:        6
Bônus permanentes:   0
Ajuste manual:       0
-----------------------
Vida máxima:        38
```

---

## 5. Dados necessários no catálogo

### 5.1 Ancestralidade

Adicionar ou garantir o campo:

```ts
type Pathfinder2eAncestryData = {
  hitPoints: number
}
```

Exemplo:

```json
{
  "id": "human",
  "name": "Human",
  "hitPoints": 8
}
```

### 5.2 Classe

Adicionar ou garantir o campo:

```ts
type Pathfinder2eClassData = {
  hitPointsPerLevel: number
}
```

Exemplo:

```json
{
  "id": "alchemist",
  "name": "Alchemist",
  "hitPointsPerLevel": 8
}
```

---

## 6. Contrato recomendado da ficha

Atualizar o contrato de `hitPoints`.

```ts
type Pathfinder2eHitPoints = {
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  manualAdjustment: number
}
```

A vida máxima não deve depender exclusivamente de um valor persistido manualmente.

O sistema deve gerar um breakdown calculado:

```ts
type Pathfinder2eHitPointsCalculation = {
  ancestry: number
  classPerLevel: number
  classTotal: number
  constitutionModifier: number
  constitutionTotal: number
  permanentBonuses: number
  manualAdjustment: number
  maximum: number
}
```

---

## 7. Função de domínio

Criar uma função pura no módulo Pathfinder 2e.

Sugestão de arquivo:

```text
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/hit-points.ts
```

Implementação:

```ts
export type CalculateMaximumHitPointsInput = {
  level: number
  ancestryHitPoints: number
  classHitPointsPerLevel: number
  constitutionScore: number
  permanentBonuses?: number
  manualAdjustment?: number
}

export type MaximumHitPointsBreakdown = {
  ancestry: number
  classPerLevel: number
  classTotal: number
  constitutionModifier: number
  constitutionTotal: number
  permanentBonuses: number
  manualAdjustment: number
  maximum: number
}

export function calculateMaximumHitPoints(
  input: CalculateMaximumHitPointsInput,
): MaximumHitPointsBreakdown {
  const level = Math.max(1, Math.trunc(input.level))
  const ancestryHitPoints = Math.max(
    0,
    Math.trunc(input.ancestryHitPoints),
  )
  const classHitPointsPerLevel = Math.max(
    0,
    Math.trunc(input.classHitPointsPerLevel),
  )
  const constitutionScore = Math.trunc(input.constitutionScore)
  const permanentBonuses = Math.trunc(input.permanentBonuses ?? 0)
  const manualAdjustment = Math.trunc(input.manualAdjustment ?? 0)

  const constitutionModifier = Math.floor(
    (constitutionScore - 10) / 2,
  )

  const classTotal = level * classHitPointsPerLevel
  const constitutionTotal = level * constitutionModifier

  const calculatedMaximum =
    ancestryHitPoints +
    classTotal +
    constitutionTotal +
    permanentBonuses +
    manualAdjustment

  return {
    ancestry: ancestryHitPoints,
    classPerLevel: classHitPointsPerLevel,
    classTotal,
    constitutionModifier,
    constitutionTotal,
    permanentBonuses,
    manualAdjustment,
    maximum: Math.max(1, calculatedMaximum),
  }
}
```

---

## 8. Inicialização da vida atual

Quando a ficha for criada ou finalizada pela primeira vez:

```text
current = maximum
```

Essa inicialização deve acontecer apenas quando a vida ainda não tiver sido estabelecida.

Sugestão:

```ts
function initializeCurrentHitPoints(
  current: number,
  previousMaximum: number,
  calculatedMaximum: number,
): number {
  const isUninitialized =
    current === 0 &&
    previousMaximum === 0

  if (isUninitialized) {
    return calculatedMaximum
  }

  return Math.min(current, calculatedMaximum)
}
```

Importante:

- recalcular `maximum` não deve curar automaticamente o personagem;
- reduzir `maximum` deve limitar `current` ao novo máximo;
- aumentar `maximum` não deve, por padrão, preencher toda a vida.

---

## 9. Subida de nível

Ao subir de nível, o sistema deve aumentar a vida atual apenas pela diferença positiva da vida máxima.

```ts
export function applyMaximumHitPointsIncrease(
  current: number,
  previousMaximum: number,
  newMaximum: number,
): number {
  const delta = Math.max(0, newMaximum - previousMaximum)

  return Math.min(
    current + delta,
    newMaximum,
  )
}
```

Exemplo:

```text
Antes:
current = 12
maximum = 30

Depois da subida:
newMaximum = 40
delta = 10

Resultado:
current = 22
maximum = 40
```

Isso preserva o dano anterior do personagem.

---

## 10. Quando recalcular

A vida máxima deve ser recalculada quando houver alteração em:

- ancestralidade;
- classe;
- nível;
- Constituição;
- bônus permanentes;
- ajuste manual;
- opções que concedam HP adicional.

---

## 11. Backend

### 11.1 Arquivos esperados

Revisar e atualizar:

```text
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/models.ts
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/schema.ts
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/default-sheet.ts
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/default-sheet.json
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/adapter.ts
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/constants.ts
```

Criar:

```text
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/hit-points.ts
apps/api/src/modules/game_systems/pathfinder_2e/character_sheet/hit-points.test.ts
```

### 11.2 Validação

Adicionar validações:

```text
hitPoints.current >= 0
hitPoints.temporary >= 0
hitPoints.wounded >= 0
hitPoints.dying >= 0
hitPoints.doomed >= 0
hitPoints.manualAdjustment deve ser inteiro
```

`manualAdjustment` poderá ser positivo ou negativo.

---

## 12. Frontend

Revisar:

```text
apps/web/src/game-systems/pathfinder-2e/character-sheet/types.ts
apps/web/src/game-systems/pathfinder-2e/character-sheet/Pathfinder2eSheetForm.tsx
apps/web/src/game-systems/pathfinder-2e/character-sheet/pathfinder_2e_sheet.json
```

Criar uma função equivalente no frontend, ou preferencialmente compartilhar a função de domínio em um pacote comum.

Sugestão:

```text
packages/game-systems/pathfinder-2e/hit-points.ts
```

Evitar manter duas implementações diferentes da mesma fórmula.

---

## 13. Comportamento da UI

Na área de vida, exibir:

```text
Vida máxima
Vida atual
Vida temporária
```

A vida máxima deverá ser somente leitura.

Adicionar uma ação ou tooltip para mostrar o breakdown:

```text
8 da ancestralidade
24 da classe
6 da Constituição
0 de bônus permanentes
0 de ajuste manual
```

Adicionar campo separado:

```text
Ajuste manual de vida máxima
```

Esse campo deve aceitar valores positivos e negativos.

---

## 14. Compatibilidade com fichas antigas

Fichas antigas podem possuir:

```json
{
  "maximum": 0,
  "current": 0
}
```

Ao carregar uma ficha antiga:

1. calcular a vida máxima;
2. se `maximum === 0` e `current === 0`, inicializar ambos com o valor calculado;
3. se `current > 0`, preservar `current`;
4. limitar `current` ao novo `maximum`;
5. iniciar `manualAdjustment` com `0`.

Não usar o valor antigo de `maximum` como ajuste manual automático.

---

## 15. Atualização da documentação

Atualizar:

```text
.ai/game_systems/pathfinder_2e/character_sheet/specs.md
.ai/game_systems/pathfinder_2e/character_sheet/readme.md
```

Adicionar:

- fórmula da vida;
- fontes dos valores;
- comportamento de inicialização;
- comportamento na subida de nível;
- regra de compatibilidade;
- regra de ajuste manual;
- exemplos.

---

## 16. Testes obrigatórios

### 16.1 Nível 1

```ts
expect(
  calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionScore: 14,
  }).maximum,
).toBe(18)
```

### 16.2 Nível 3

```ts
expect(
  calculateMaximumHitPoints({
    level: 3,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionScore: 14,
  }).maximum,
).toBe(38)
```

### 16.3 Constituição negativa

```ts
expect(
  calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 6,
    classHitPointsPerLevel: 6,
    constitutionScore: 8,
  }).maximum,
).toBe(11)
```

### 16.4 Ajuste manual

```ts
expect(
  calculateMaximumHitPoints({
    level: 1,
    ancestryHitPoints: 8,
    classHitPointsPerLevel: 8,
    constitutionScore: 14,
    manualAdjustment: 2,
  }).maximum,
).toBe(20)
```

### 16.5 Mínimo de 1 HP

```ts
expect(
  calculateMaximumHitPoints({
    level: 20,
    ancestryHitPoints: 0,
    classHitPointsPerLevel: 0,
    constitutionScore: 1,
    manualAdjustment: -100,
  }).maximum,
).toBe(1)
```

### 16.6 Inicialização

```ts
expect(
  initializeCurrentHitPoints(0, 0, 18),
).toBe(18)
```

### 16.7 Não curar ao recalcular

```ts
expect(
  initializeCurrentHitPoints(8, 18, 20),
).toBe(8)
```

### 16.8 Limitar ao novo máximo

```ts
expect(
  initializeCurrentHitPoints(25, 30, 20),
).toBe(20)
```

### 16.9 Subida de nível

```ts
expect(
  applyMaximumHitPointsIncrease(12, 30, 40),
).toBe(22)
```

---

## 17. Critérios de aceite

A tarefa estará concluída quando:

- [ ] A vida máxima não iniciar mais em zero após classe e ancestralidade serem selecionadas.
- [ ] A ancestralidade fornecer `hitPoints`.
- [ ] A classe fornecer `hitPointsPerLevel`.
- [ ] O modificador de Constituição participar da fórmula.
- [ ] O nível multiplicar HP da classe e modificador de Constituição.
- [ ] A vida máxima for recalculada automaticamente.
- [ ] A vida máxima for somente leitura na interface.
- [ ] A vida atual iniciar igual à máxima apenas na primeira inicialização.
- [ ] Recalcular a máxima não curar automaticamente o personagem.
- [ ] Subir de nível adicionar somente o delta positivo à vida atual.
- [ ] A vida atual nunca ficar acima da máxima.
- [ ] A vida máxima nunca ficar abaixo de 1.
- [ ] O ajuste manual existir separadamente.
- [ ] Fichas antigas continuarem carregando.
- [ ] Testes unitários cobrirem a fórmula e as transições.
- [ ] A documentação do módulo for atualizada.

---

## 18. Restrições

- Não colocar a fórmula diretamente no componente React.
- Não duplicar a fórmula em múltiplos locais.
- Não usar `maximum` persistido como única fonte da verdade.
- Não curar o personagem a cada edição da ficha.
- Não apagar os campos de Ferido, Morrendo, Condenado ou vida temporária.
- Não calcular HP usando o valor bruto de Constituição; usar o modificador.
- Não permitir vida máxima menor que `1`.

---

## 19. Resultado esperado

Após selecionar:

```text
Ancestralidade: Athamaru — 8 HP
Classe: Alchemist — 8 HP por nível
Nível: 3
Constituição: 14
```

A ficha deverá apresentar:

```text
Vida máxima: 38
Vida atual: 38
Vida temporária: 0
Ferido: 0
Morrendo: 0
Condenado: 0
```

Depois da inicialização, alterações futuras devem preservar corretamente o estado operacional da vida atual.
