# Submodulo: Ficha Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato especifico de Pathfinder 2e para fichas com `system = PATHFINDER_2E`.

O modulo `character_sheet` valida o envelope comum. Este submodulo valida o bloco `data.pathfinder2e`.

## 2. Envelope

```json
{
  "system": "PATHFINDER_2E",
  "version": 1,
  "data": {
    "pathfinder2e": {}
  }
}
```

Regras:
* `system` deve ser `PATHFINDER_2E`.
* `version` deve ser `1`.
* O bloco `data.pathfinder2e` e obrigatorio.
* Todos os campos persistidos dentro de `pathfinder2e` usam nomes em ingles.
* Labels de UI devem ser traduzidos para portugues na camada de apresentacao.

## 3. Contrato Do Bloco `pathfinder2e`

```ts
type Pathfinder2eSheet = {
  identity: Pathfinder2eIdentity
  attributes: Pathfinder2eAttributes
  hitPoints: Pathfinder2eHitPoints
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: Pathfinder2eSavingThrows
  notes: string
}

type Pathfinder2eIdentity = {
  level: number
  ancestry: string
  heritage: string
  background: string
  className: string
}

type Pathfinder2eAttributes = {
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
}

type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
}

type Pathfinder2eProficiencyRank = 0 | 2 | 4 | 6 | 8

type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
}

type Pathfinder2eSavingThrows = {
  fortitude: Pathfinder2eProficiencyValue
  reflex: Pathfinder2eProficiencyValue
  will: Pathfinder2eProficiencyValue
}
```

## 4. Default Sheet

```json
{
  "identity": {
    "level": 1,
    "ancestry": "",
    "heritage": "",
    "background": "",
    "className": ""
  },
  "attributes": {
    "strength": 10,
    "dexterity": 10,
    "constitution": 10,
    "intelligence": 10,
    "wisdom": 10,
    "charisma": 10
  },
  "hitPoints": {
    "maximum": 0,
    "current": 0,
    "temporary": 0,
    "wounded": 0,
    "dying": 0,
    "doomed": 0
  },
  "armorClass": 10,
  "initiative": 0,
  "perception": {
    "rank": 0,
    "value": 0
  },
  "savingThrows": {
    "fortitude": {
      "rank": 0,
      "value": 0
    },
    "reflex": {
      "rank": 0,
      "value": 0
    },
    "will": {
      "rank": 0,
      "value": 0
    }
  },
  "notes": ""
}
```

## 5. Validacoes
* Todos os campos numericos devem ser inteiros.
* `identity.level` deve ser maior ou igual a `1`.
* Atributos devem ser maiores ou iguais a `1`.
* `hitPoints.maximum` deve ser maior ou igual a `0`.
* `hitPoints.current` deve ser maior ou igual a `0`.
* `hitPoints.temporary` deve ser maior ou igual a `0`.
* `hitPoints.wounded` deve ser maior ou igual a `0`.
* `hitPoints.dying` deve ser maior ou igual a `0`.
* `hitPoints.doomed` deve ser maior ou igual a `0`.
* `armorClass` deve ser maior ou igual a `0`.
* `initiative` pode ser qualquer inteiro.
* `perception.value` pode ser qualquer inteiro.
* Saving throw `value` pode ser qualquer inteiro.
* Ranks de proficiencia so podem ser `0`, `2`, `4`, `6` ou `8`.
* Campos textuais podem ser vazios no MVP.

## 6. Proficiencia
Ranks canonicos:

```ts
const PROFICIENCY_RANKS = {
  UNTRAINED: 0,
  TRAINED: 2,
  EXPERT: 4,
  MASTER: 6,
  LEGENDARY: 8,
} as const
```

Labels sugeridos para UI em portugues:
* `0`: Nao treinado
* `2`: Treinado
* `4`: Especialista
* `6`: Mestre
* `8`: Lendario

## 7. Criterios De Aceitacao
* Nova ficha Pathfinder 2e deve nascer com o default documentado.
* Ficha Pathfinder 2e deve ser persistida em `data.pathfinder2e`.
* Ficha deve poder ser salva com textos vazios.
* Backend deve rejeitar numeros decimais.
* Backend deve rejeitar ranks fora da lista canonica.
* Backend nao deve calcular valores derivados neste MVP.
* Frontend deve exibir labels em portugues e persistir chaves em ingles.
* Frontend deve distribuir a ficha em paginas: identidade/bio, atributos/HP e proficiencias/notas.
* Frontend deve usar identidade visual de ficha impressa em papel envelhecido, com linhas de preenchimento, caixas de secao e atributos em blocos destacados.
