# Pathfinder 2e - Especificacao da ficha automatizada V2

## 0. Localizacao e dependencia

```text
apps/api/src/game_systems/runtime/
apps/api/src/game_systems/pathfinder_2e/character-sheet/
apps/web/src/features/pathfinder-2e/character-sheet/
```

O Runtime nao conhece Pathfinder. O adaptador Pathfinder conhece somente contratos do Runtime e seus proprios dados. Nenhum dos dois importa implementacoes do VTT.

## 1. Persistencia

O model generico permanece:

```prisma
model CharacterSheet {
  id            String
  characterId   String @unique
  systemKey     String
  schemaVersion Int
  data          Json
}
```

`Character` continua contendo somente identidade generica. A coluna `data` armazena somente a ficha fundamental V2.

## 2. Schema persistido V2

### Identidade

```text
nivel
ancestralidade
heranca
background
classe
divindade
```

Valor vazio e permitido. Valores preenchidos devem existir nos catalogos locais.

### Progressao

```text
EXP atual
EXP para o proximo nivel
movimento em metros
```

### Modificadores de atributo

```text
Forca
Destreza
Constituicao
Inteligencia
Sabedoria
Carisma
```

Os campos armazenam modificadores.

### Vida e sobrevivencia

Persistidos:

```text
Vida atual
Vida temporaria
Ferido
Morrendo
Condenado
Bonus de PV
```

`Vida maxima` e derivada.

### Defesa e iniciativa

Persistidos:

```text
Bonus de CA
Bonus de iniciativa
Grau e bonus de Percepcao
Graus de armadura
```

`CA` e `Iniciativa` sao derivadas.

### Saves e pericias

Cada entrada persiste:

```ts
{ rank: 0 | 2 | 4 | 6 | 8; bonus: number }
```

O total nao e persistido.

## 3. Formulas

### Proficiencia

```text
rank 0: 0
rank 2: nivel + 2
rank 4: nivel + 4
rank 6: nivel + 6
rank 8: nivel + 8
```

### PV maximo

```text
PV = PV ancestral
   + nivel x (PV da classe + Constituicao)
   + bonus de PV
```

O resultado minimo e zero.

### CA nesta fase

```text
CA = 10
   + Destreza
   + proficiencia sem armadura
   + bonus de CA
```

Equipamentos nao participam do calculo.

### Estatisticas

```text
Total = atributo + proficiencia + bonus
```

Mapeamento de atributo:

- Percepcao e Vontade: Sabedoria;
- Fortitude: Constituicao;
- Reflexos: Destreza;
- Acrobacia, Furtividade e Ladroagem: Destreza;
- Arcanismo, Manufatura, Ocultismo e Sociedade: Inteligencia;
- Atletismo: Forca;
- Enganacao, Diplomacia, Intimidacao e Performance: Carisma;
- Medicina, Natureza, Religiao e Sobrevivencia: Sabedoria.

### Iniciativa

```text
Iniciativa = Percepcao total + bonus de iniciativa
```

## 4. Resultado derivado

```ts
type Pathfinder2eDerivedCharacterSheet = {
  mechanics: {
    ancestryHitPoints: number
    classHitPointsPerLevel: number
  }
  hitPoints: { maximum: number }
  armorClass: {
    value: number
    dexterityModifier: number
    proficiencyBonus: number
    bonus: number
    armorCategory: 'unarmored'
  }
  initiative: {
    value: number
    source: 'perception'
    sourceValue: number
    bonus: number
  }
  perception: DerivedStatistic
  savingThrows: Record<string, DerivedStatistic>
  skills: Record<string, DerivedStatistic>
}
```

## 5. API

```text
GET  /api/game-systems/pathfinder-2e/character-sheet/options
GET  /api/characters/:characterId/pathfinder-2e-sheet
POST /api/characters/:characterId/pathfinder-2e-sheet/derive
PUT  /api/characters/:characterId/pathfinder-2e-sheet
```

### GET

Retorna personagem e envelope completo da ficha:

```text
systemKey
schemaVersion
data
derived
warnings
persisted
updatedAt
```

Se a ficha armazenada for V1, ela e migrada em memoria antes da resposta. A persistencia V2 ocorre no proximo PUT.

### POST derive

- exige autenticacao e ownership;
- recebe `{ data }`;
- nao persiste;
- retorna `data`, `derived` e `warnings`;
- rejeita valores derivados no payload porque o schema e estrito.

### PUT

- exige autenticacao e ownership;
- executa migracao, validacao e derivacao;
- persiste somente `data` normalizado;
- grava `schemaVersion: 2`;
- retorna o envelope recalculado.

## 6. Migracao V1

Preservar:

- identidade;
- progressao e movimento;
- atributos;
- PV atual, temporario, estados e bonus;
- graus de proficiencia;
- graus de armadura;
- anotacoes.

Descartar como totais antigos:

- PV maximo;
- CA;
- iniciativa;
- `value` de Percepcao, saves e pericias.

Os novos bonus desses totais iniciam em zero.

## 7. Frontend

- totais derivados sao somente leitura;
- grau e bonus permanecem editaveis;
- alteracoes disparam previa com debounce de 180 ms;
- warnings sao exibidos sem impedir edicao;
- salvar usa o resultado autoritativo devolvido pelo backend;
- a tela informa explicitamente que CA ainda usa defesa sem armadura.

## 8. Criterios de aceite

1. mudar nivel recalcula todas as proficiencias treinadas ou superiores;
2. mudar Constituicao recalcula PV e Fortitude;
3. mudar Destreza recalcula CA, Reflexos e pericias de Destreza;
4. selecionar ancestralidade altera a parcela ancestral de PV;
5. selecionar classe altera os PV por nivel;
6. rank zero nao adiciona nivel;
7. o cliente nao consegue salvar um total derivado;
8. ficha V1 abre sem perder identidade ou estado atual;
9. nenhum codigo de Token, Canvas, grid, campanha, inventario ou Area Effect e importado.
