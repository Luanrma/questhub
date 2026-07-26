# Game System Runtime - Especificação V1

## 1. Arquitetura

```text
HTTP / WebSocket / VTT
        |
        v
Game System Runtime
        |
        v
Game System Adapter
```

O chamador entrega dados desconhecidos ao Runtime junto de um adaptador. O Runtime solicita migração, validação e derivação ao adaptador e devolve um envelope padronizado.

## 2. Contrato de ficha

```ts
export interface CharacterSheetRuntimeAdapter<TData, TDerived> {
  readonly systemKey: string
  readonly schemaVersion: number
  createDefault(): TData
  migrate(input: unknown): unknown
  parse(input: unknown): TData
  derive(data: TData): CharacterSheetDerivation<TDerived>
}

export type CharacterSheetDerivation<TDerived> = {
  derived: TDerived
  warnings: readonly string[]
}
```

Envelope do Runtime:

```ts
export type CharacterSheetRuntimeResult<TData, TDerived> = {
  systemKey: string
  schemaVersion: number
  data: TData
  derived: TDerived
  warnings: readonly string[]
}
```

## 3. Fluxo

1. receber `unknown`;
2. executar `adapter.migrate`;
3. executar `adapter.parse`;
4. executar `adapter.derive`;
5. devolver dados normalizados, derivados e warnings;
6. somente a camada externa decide persistir os dados normalizados.

Uma prévia usa exatamente o mesmo fluxo de um salvamento, sem acessar o banco.

## 4. Persistência

Persistir:

- escolhas do personagem;
- modificadores de atributo;
- graus de proficiência;
- bônus manuais ainda não cobertos por outras fontes;
- PV atual, PV temporário e estados de sobrevivência;
- anotações.

Não persistir como fonte da verdade:

- PV máximo;
- CA total;
- iniciativa total;
- total de percepção;
- total de saves;
- total de perícias;
- bônus de proficiência calculado.

## 5. Pathfinder 2e - ficha V2

### 5.1 Dados fundamentais

```ts
schemaVersion: 2
identity: {
  level: number
  ancestry: string
  heritage: string
  background: string
  class: string
  deity: string
}
attributes: {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}
hitPoints: {
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  bonus: number
}
armorClass: { bonus: number }
initiative: { bonus: number }
perception: { rank: 0 | 2 | 4 | 6 | 8; bonus: number }
savingThrows: Record<string, { rank; bonus }>
skills: Record<string, { rank; bonus }>
armorProficiencies: {
  unarmored: rank
  light: rank
  medium: rank
  heavy: rank
}
```

Os atributos representam modificadores, não os antigos valores de atributo.

### 5.2 Proficiência

```text
Não treinado: 0
Treinado: nível + 2
Especialista: nível + 4
Mestre: nível + 6
Lendário: nível + 8
```

### 5.3 Pontos de Vida

Neste recorte:

```text
PV máximo = PV da ancestralidade
          + nível × (PV da classe por nível + modificador de Constituição)
          + bônus manual
```

Se ancestralidade ou classe não estiverem selecionadas, sua parcela é zero e um warning é retornado.

Herança, background e divindade ainda não adicionam modificadores automáticos.

### 5.4 Classe de Armadura

Enquanto equipamentos não estiverem integrados, a ficha usa defesa sem armadura:

```text
CA = 10
   + modificador de Destreza
   + bônus de proficiência em defesa sem armadura
   + bônus manual
```

Armaduras leve, média e pesada permanecem registradas, mas não participam da CA até existir uma instância equipada.

### 5.5 Percepção, saves e perícias

```text
Total = modificador do atributo
      + bônus de proficiência
      + bônus manual
```

Mapeamento:

- Percepção: Sabedoria;
- Fortitude: Constituição;
- Reflexos: Destreza;
- Vontade: Sabedoria;
- Acrobacia, Furtividade e Ladroagem: Destreza;
- Arcanismo, Manufatura, Ocultismo e Sociedade: Inteligência;
- Atletismo: Força;
- Enganação, Diplomacia, Intimidação e Performance: Carisma;
- Medicina, Natureza, Religião e Sobrevivência: Sabedoria.

### 5.6 Iniciativa

A iniciativa padrão desta fase usa Percepção:

```text
Iniciativa = total de Percepção + bônus manual de iniciativa
```

A escolha de outra perícia para iniciativa será adicionada em uma fase posterior.

## 6. Migração V1 -> V2

- `hitPoints.maximum` deixa de ser persistido;
- `armorClass` antigo é descartado como total manual e inicia com bônus zero;
- `initiative` antigo é descartado como total manual e inicia com bônus zero;
- `ProficiencyValue.value` é migrado para `bonus: 0`, pois o total antigo não permite separar atributo, nível e bônus;
- PV atual e demais estados são preservados;
- identidade, atributos, graus e anotações são preservados.

A migração não tenta inferir bônus a partir de totais antigos para não criar dados falsos.

## 7. API Pathfinder inicial

```text
GET  /api/characters/:characterId/pathfinder-2e-sheet
POST /api/characters/:characterId/pathfinder-2e-sheet/derive
PUT  /api/characters/:characterId/pathfinder-2e-sheet
```

`GET` e `PUT` retornam `data`, `derived` e `warnings`. `POST /derive` calcula uma prévia sem persistir.

## 8. Critérios de aceitação

1. alterar nível recalcula todo valor com proficiência;
2. selecionar Human e Fighter calcula as parcelas base de PV correspondentes;
3. alterar Constituição recalcula PV máximo e Fortitude;
4. alterar Destreza recalcula CA, Reflexos e perícias relacionadas;
5. grau não treinado nunca adiciona o nível;
6. CA usa somente defesa sem armadura nesta fase;
7. valores derivados não são aceitos no payload persistido;
8. dados V1 existentes abrem por migração;
9. nenhum arquivo do Runtime ou do adaptador importa Token, Canvas, campanha ou Area Effect.
