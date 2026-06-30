# Submodulo: Ficha Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato especifico de Pathfinder 2e para fichas com `system = PATHFINDER_2E`.

O modulo `game_systems` valida o envelope comum. Este submodulo valida o bloco `data.pathfinder2e`.

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
  general: Pathfinder2eGeneral
  identity: Pathfinder2eIdentity
  attributes: Pathfinder2eAttributes
  hitPoints: Pathfinder2eHitPoints
  armorClass: number
  initiative: number
  perception: Pathfinder2eProficiencyValue
  savingThrows: Pathfinder2eSavingThrows
  skills: Pathfinder2eSkills
  notes: string
}

type Pathfinder2eGeneral = {
  experience: {
    current: number
    nextLevel: number
  }
  movementMeters: number
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

type Pathfinder2eSkills = {
  acrobatics: Pathfinder2eProficiencyValue
  arcana: Pathfinder2eProficiencyValue
  athletics: Pathfinder2eProficiencyValue
  crafting: Pathfinder2eProficiencyValue
  deception: Pathfinder2eProficiencyValue
  diplomacy: Pathfinder2eProficiencyValue
  intimidation: Pathfinder2eProficiencyValue
  medicine: Pathfinder2eProficiencyValue
  nature: Pathfinder2eProficiencyValue
  occultism: Pathfinder2eProficiencyValue
  performance: Pathfinder2eProficiencyValue
  religion: Pathfinder2eProficiencyValue
  society: Pathfinder2eProficiencyValue
  stealth: Pathfinder2eProficiencyValue
  survival: Pathfinder2eProficiencyValue
  thievery: Pathfinder2eProficiencyValue
}
```

## 4. Default Sheet

```json
{
  "general": {
    "experience": {
      "current": 0,
      "nextLevel": 0
    },
    "movementMeters": 0
  },
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
  "skills": {
    "acrobatics": {
      "rank": 0,
      "value": 0
    },
    "arcana": {
      "rank": 0,
      "value": 0
    },
    "athletics": {
      "rank": 0,
      "value": 0
    },
    "crafting": {
      "rank": 0,
      "value": 0
    },
    "deception": {
      "rank": 0,
      "value": 0
    },
    "diplomacy": {
      "rank": 0,
      "value": 0
    },
    "intimidation": {
      "rank": 0,
      "value": 0
    },
    "medicine": {
      "rank": 0,
      "value": 0
    },
    "nature": {
      "rank": 0,
      "value": 0
    },
    "occultism": {
      "rank": 0,
      "value": 0
    },
    "performance": {
      "rank": 0,
      "value": 0
    },
    "religion": {
      "rank": 0,
      "value": 0
    },
    "society": {
      "rank": 0,
      "value": 0
    },
    "stealth": {
      "rank": 0,
      "value": 0
    },
    "survival": {
      "rank": 0,
      "value": 0
    },
    "thievery": {
      "rank": 0,
      "value": 0
    }
  },
  "notes": ""
}
```

## 5. Validacoes
* Todos os campos numericos devem ser inteiros, exceto `general.movementMeters`, que aceita decimal.
* `general.experience.current` deve ser maior ou igual a `0`.
* `general.experience.nextLevel` deve ser maior ou igual a `0`.
* `general.movementMeters` deve ser um numero maior ou igual a `0`.
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
* Skill `value` pode ser qualquer inteiro.
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

Formula de calculo:

```text
bonusTotal = bonusDeProficiencia + modificadorDoAtributoChave + outrosBonusOuPenalidades
```

Regras:
* Destreinado usa bonus de proficiencia `0` e nao soma nivel.
* Treinado usa bonus de proficiencia `nivel + 2`.
* Especialista usa bonus de proficiencia `nivel + 4`.
* Mestre usa bonus de proficiencia `nivel + 6`.
* Lendario usa bonus de proficiencia `nivel + 8`.
* No MVP, outros bonus ou penalidades ainda nao possuem campo proprio no contrato e sao tratados como `0`.
* `Pathfinder2eProficiencyValue.value` deve ser recalculado pelo frontend quando level, rank ou atributo chave mudarem.
* Atributos chave das pericias do MVP:
  * Acrobacia: `dexterity`.
  * Arcanismo: `intelligence`.
  * Atletismo: `strength`.
  * Artesanato/Manufatura: `intelligence`.
  * Diplomacia: `charisma`.
  * Enganacao: `charisma`.
  * Furtividade: `dexterity`.
  * Intimidacao: `charisma`.
  * Medicina: `wisdom`.
  * Natureza: `wisdom`.
  * Ocultismo: `intelligence`.
  * Performance: `charisma`.
  * Prestidigitacao/Ladroagem: `dexterity`.
  * Religiao: `wisdom`.
  * Sociedade: `intelligence`.
  * Sobrevivencia: `wisdom`.

## 7. Criterios De Aceitacao
* Nova ficha Pathfinder 2e deve nascer com o default documentado.
* Ficha Pathfinder 2e deve ser persistida em `data.pathfinder2e`.
* Ficha deve poder ser salva com textos vazios.
* Backend deve rejeitar numeros decimais.
* Backend deve rejeitar ranks fora da lista canonica.
* Backend nao deve calcular valores derivados neste MVP; ele apenas valida e persiste o snapshot calculado pelo frontend.
* Frontend deve exibir labels em portugues e persistir chaves em ingles.
* Frontend deve distribuir a ficha em abas de icones, sem botoes `Anterior` e `Proxima`.
* A primeira aba deve conter, nesta ordem: Identificacao e Atributos.
* Armor Class e Initiative pertencem ao bloco visual de hit points/status, nao a aba de proficiencias.
* A primeira aba nao deve exibir `metadata.bio`.
* A segunda aba deve ser uma pagina inteira de proficiencias de pericia.
* Cada proficiencia deve exibir, na mesma linha visual: icone de ajuda, total calculado destacado em linha sublinhada, nome da pericia em destaque e seletor de rank visualmente apresentado como TAG.
* A TAG de rank deve ter tamanho padronizado, texto branco, texto completo visivel, fonte adaptada ao tamanho, sem seta nativa de select box e sem sublinhado preto.
* Cores das TAGs: Nao treinado em cinza medio, Treinado em azul marinho, Especialista em amarelo, Mestre em roxo e Lendario em laranja.
* As opcoes abertas do rank devem usar fundo neutro em cinza claro e texto escuro, sem herdar a cor da TAG selecionada.
* A aba de proficiencias deve conter somente as pericias oficiais presentes no MVP: Acrobacia, Arcanismo, Atletismo, Artesanato, Diplomacia, Enganacao, Furtividade, Intimidacao, Medicina, Natureza, Ocultismo, Performance, Prestidigitacao, Religiao, Sociedade e Sobrevivencia.
* A descricao de cada pericia deve ficar oculta por padrao e aparecer apenas em tooltip ao passar o mouse sobre o icone de interrogacao da linha.
* "Intuicao" nao deve criar uma chave nova em `skills`; deve ser documentada como decisao de produto porque Pathfinder 2e divide esse conceito entre Sociedade, Ocultismo, Lore ou testes especificos de Percepcao.
* Frontend deve usar identidade visual de ficha impressa em papel envelhecido, com linhas de preenchimento, caixas de secao e atributos em blocos destacados.
* Frontend deve exibir um painel fixo lateral a esquerda em fichas Pathfinder 2e com nome do personagem, nivel, experiencia, vida, condicoes de vida, classe de armadura, fortitude, reflexo, vontade, iniciativa, percepcao e deslocamento.
* Classe, ancestralidade, heranca e background devem aparecer no conteudo principal a direita, acima de Atributos, em uma secao chamada Identificacao.
* A secao Vida do painel fixo deve exibir Maxima, Atual e Temporaria com fonte maior e maior destaque visual que os campos de texto comuns.
* Hit points/status nao devem aparecer duplicados no conteudo principal da ficha quando ja estiverem fixados no painel lateral.
* A ficha Pathfinder 2e nao deve exibir o texto `QuestHub` no cabecalho da ficha nem no painel fixo.
* O painel fixo lateral deve editar os campos persistidos quando o campo existir no contrato da ficha e apenas exibir o nome do personagem recebido do modal.
* Em telas estreitas, o painel fixo lateral deve empilhar acima do conteudo da aba sem sobrepor texto ou controles.
* `apps/web/src/game-systems/pathfinder-2e/character-sheet/pathfinder_2e_sheet.json` deve representar exatamente o envelope salvo em `Character.sheet` depois da migracao tecnica.
