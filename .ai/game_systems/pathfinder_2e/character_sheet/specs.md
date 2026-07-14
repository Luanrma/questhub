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
* Este envelope e o contrato legado V1. A evolucao V2 e documentada na secao 7 e no modulo `.ai/game_systems/pathfinder_2e/character_options`.

## 3. Contrato Do Bloco `pathfinder2e`

```ts
type Pathfinder2eSheet = {
  general: Pathfinder2eGeneral
  identity: Pathfinder2eIdentity
  attributes: Pathfinder2eAttributes
  hitPoints: Pathfinder2eHitPoints
  armorClass: Pathfinder2eArmorClassManual
  armorProficiencies: Pathfinder2eArmorProficiencies
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

// A partir da evolucao de vida maxima calculada (ver
// .ai/game_systems/pathfinder_2e/hit_points/specs.md secao 4), `maximum` e
// recalculado automaticamente pelo frontend e `manualAdjustment` participa da
// formula. Mudanca aditiva: nao ha nova versao de envelope.
type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number
  dying: number
  doomed: number
  manualAdjustment: number
}

type Pathfinder2eProficiencyRank = 0 | 2 | 4 | 6 | 8

type Pathfinder2eProficiencyValue = {
  rank: Pathfinder2eProficiencyRank
  value: number
}

type Pathfinder2eArmorCategory = 'unarmored' | 'light' | 'medium' | 'heavy'

type Pathfinder2eArmorProficiencies = {
  unarmored: Pathfinder2eProficiencyRank
  light: Pathfinder2eProficiencyRank
  medium: Pathfinder2eProficiencyRank
  heavy: Pathfinder2eProficiencyRank
}

// Total de AC nao e persistido aqui. Formula, breakdown e fatos de
// equipamento em .ai/game_systems/pathfinder_2e/armor_class/specs.md.
type Pathfinder2eArmorClassManual = {
  manualAdjustment: number
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
    "doomed": 0,
    "manualAdjustment": 0
  },
  "armorClass": {
    "manualAdjustment": 0
  },
  "armorProficiencies": {
    "unarmored": 2,
    "light": 0,
    "medium": 0,
    "heavy": 0
  },
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
* `hitPoints.manualAdjustment` pode ser qualquer inteiro (bonus ou penalidade de circunstancia/status a vida maxima); ausente em fichas antigas assume `0`.
* `armorClass.manualAdjustment` pode ser qualquer inteiro (bonus ou penalidade de circunstancia/status).
* `armorProficiencies.unarmored`/`light`/`medium`/`heavy` seguem a mesma lista de ranks de proficiencia validos.
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
* Atributos chave dos salvamentos:
  * Fortitude: `constitution`.
  * Reflexo: `dexterity`.
  * Vontade: `wisdom`.

### 6.1. Correcao de Divergencia — Salvamentos Nao Eram Calculados (corrigido em 2026-07-13)

Ate esta correcao, `savingThrows.fortitude/reflex/will.value` **nao seguia** a regra da secao 6 apesar de o contrato dizer que deveria: nao havia formula (`calculateSkills` so cobria pericias) nem seletor de rank na UI (`Pathfinder2eSheetForm.tsx` so exibia o `.value` bruto, sempre o default `0`, sem nenhum input editavel). Corrigido para seguir exatamente o mesmo padrao ja usado por pericias: uma funcao pura (`calculateSavingThrow`, `packages/game-system-pathfinder-2e/src/shared/saving-throws.ts`) calcula `bonusDeProficiencia(nivel, rank) + modificadorDoAtributoChave`, e a secao "Proficiências" da ficha (`Pathfinder2eSheetForm.tsx`, pagina 1) ganhou um seletor de rank por salvamento, no mesmo componente visual ja usado por proficiencias de armadura (`armorProficiencyInput`).

Diferenca deliberada em relacao a pericias: o `.value` persistido no envelope da ficha **nao inclui** o bonus do Rule Engine (efeitos ativos, `.ai/game_systems/pathfinder_2e/character_effects/`) — só a base (`proficiencia + atributo`), a mesma razao pela qual o total de CA nunca e persistido (`.ai/game_systems/pathfinder_2e/armor_class/specs.md` secao 2): o bonus do Rule Engine depende de estado externo (efeitos ativos) que muda independente da ficha ser salva, entao persisti-lo junto arriscaria ficar desatualizado. O total exibido na ficha (resumo rapido e secao Proficiências) sempre soma o bonus do Rule Engine em tempo de renderizacao, nunca a partir do `.value` persistido.

## 7. Evolucao V2 Com Catalogo De Opcoes
A ficha PF2e V2 integra o modulo `character_options` e substitui os campos de texto livre como fonte canonica de Classe, Ancestralidade, Heranca e Background.

Envelope alvo:

```json
{
  "system": "PATHFINDER_2E",
  "version": 2,
  "data": {
    "pathfinder2e": {
      "identity": {},
      "buildChoices": {}
    }
  }
}
```

Selecao oficial:

```ts
type Pathfinder2eCatalogSelection = {
  source: 'catalog'
  id: string
  sourcePack: string
  sourceId: string
  slug: string
  name: string
}
```

Selecao customizada:

```ts
type Pathfinder2eCustomSelection = {
  source: 'custom'
  name: string
}
```

Identidade V2:

```ts
type Pathfinder2eIdentityV2 = {
  level: number
  ancestry: Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection | null
  heritage: Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection | null
  background: Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection | null
  class: Pathfinder2eCatalogSelection | Pathfinder2eCustomSelection | null
}
```

Regras:

* novas escritas V2 nao usam `className`;
* campos vazios sao representados por `null`;
* texto antigo sem match unico vira `source: 'custom'`;
* Heranca catalogada deve ser validada contra Ancestralidade catalogada;
* Heranca versatil permanece valida ao trocar Ancestralidade;
* Heranca incompativel nao deve permanecer silenciosamente;
* `buildChoices` armazena escolhas do usuario separadas da selecao;
* efeitos derivados nao devem ser acumulados, e sim recalculados a partir de catalogo, selecoes, escolhas e nivel.
* Player dono da ficha pode salvar Classe, Ancestralidade, Heranca e Background somente quando a identidade anterior ainda nao estava completa; essa primeira escrita deve enviar os quatro campos completos.
* Depois que Classe, Ancestralidade, Heranca e Background estiverem completos, Player dono da ficha nao pode alterar esses quatro campos em novas escritas.
* Mestre ativo de uma campanha onde o personagem esta vinculado pode criar ou alterar Classe, Ancestralidade, Heranca e Background da ficha do Player.
* Correcao de 2026-07-14: no `PUT /api/characters/:characterId/sheet`, a autorizacao de escrita e a flag `isMaster` da politica PF2e devem consultar membros ativos da campanha vinculada ao personagem, nao apenas o `CampaignCharacter` do proprio personagem. Caso contrario, um Mestre autorizado passa pelo filtro de leitura/escrita, mas a politica de identidade recebe `isMaster = false` e rejeita a escrita com a mensagem "Apenas o dono do personagem ou o Mestre pode salvar esta ficha".

Compatibilidade:

* backend deve aceitar V1 e V2 durante a transicao;
* edicoes de V1 devem executar migracao antes de persistir;
* V1 nao deve ser apagada sem preservar texto original em selecoes customizadas ou issues de migracao.

## 7.1 Evolucao V3 — Armor Class Dinamico

**Decisao registrada:** a partir da versao `3` do envelope, Armor Class deixa de ser um numero digitado a mao. Contrato completo, formula, fatos de equipamento e reatividade em `.ai/game_systems/pathfinder_2e/armor_class/`; esta secao documenta apenas o impacto no envelope/schema da ficha.

Mudancas de contrato:
* `armorClass: number` -> `armorClass: Pathfinder2eArmorClassManual` (so o ajuste manual de circunstancia/status, ver secao 3);
* campo novo `armorProficiencies: Pathfinder2eArmorProficiencies` (proficiencia por categoria de armadura);
* o total de AC nunca e persistido; e sempre derivado combinando `armorClass.manualAdjustment` + `armorProficiencies` (deste bloco) com fatos de equipamento resolvidos pelo modulo `inventory`.

Migracao:
* fichas `version 1` e `version 2` com `armorClass: number` migram para `version 3` na proxima escrita (`PUT /api/characters/:id/sheet`), descartando o numero antigo e aplicando os defaults da secao 4;
* a migracao e encadeada: V1 -> V2 (identidade estruturada, ja existente) -> V3 (Armor Class dinamico, esta secao);
* nao ha perda de dado relevante a preservar — o numero antigo era so um valor digitado, sem breakdown.

Compatibilidade:
* o backend deve continuar aceitando o formato antigo (`armorClass: number`) na leitura/validacao de entrada durante a janela de transicao, migrando antes de persistir;
* novas escritas nunca gravam `armorClass: number`.

## 7.2 Evolucao — Vida Maxima Calculada

**Decisao registrada:** `hitPoints.maximum` deixa de ser um numero digitado a mao. Contrato completo, formula e regras de reconciliacao de `current` em `.ai/game_systems/pathfinder_2e/hit_points/`; esta secao documenta apenas o impacto no envelope/schema da ficha.

Mudancas de contrato:
* campo novo `hitPoints.manualAdjustment: number` (ajuste manual de circunstancia/status a vida maxima, mesmo espirito de `armorClass.manualAdjustment`);
* `hitPoints.maximum` continua sendo um numero persistido comum — ao contrario de Armor Class, nao passa a ser "sempre derivado em leitura", pois precisa coexistir com `hitPoints.current` (dano acumulado) de forma consistente entre escritas;
* `hitPoints.maximum` e recalculado automaticamente pelo frontend (nao pelo backend) sempre que nivel, Constituicao, ancestralidade, classe ou `manualAdjustment` mudarem, seguindo o mesmo padrao ja usado para `skills`/`savingThrows` (secao 6.1: frontend calcula, backend so valida o snapshot). `perception` ainda nao segue esse padrao — continua um numero digitado a mao, sem formula nem seletor de rank na UI; correcao pendente, nao coberta por esta secao.

Migracao:
* mudanca aditiva — `maximum`/`current`/`temporary`/`wounded`/`dying`/`doomed` nao mudam de forma; **nao ha novo valor de `PATHFINDER_2E_SHEET_VERSION`** nem migracao dedicada, ao contrario da evolucao de Armor Class (que trocou `armorClass: number` por objeto);
* fichas sem `hitPoints.manualAdjustment` validam com o valor assumindo `0` (`schema.ts`, `.default(0)`).

Compatibilidade:
* o backend continua aceitando e validando fichas sem `manualAdjustment`;
* novas escritas sempre gravam `manualAdjustment` (default `0` quando o formulario nao o alterar).

## 8. Criterios De Aceitacao
* Nova ficha Pathfinder 2e deve nascer com o default documentado.
* Ficha Pathfinder 2e deve ser persistida em `data.pathfinder2e`.
* Ficha deve poder ser salva com textos vazios.
* Backend deve rejeitar numeros decimais.
* Backend deve rejeitar ranks fora da lista canonica.
* Backend nao deve calcular valores derivados neste MVP para pericias/saves/percepcao/vida maxima; ele apenas valida e persiste o snapshot calculado pelo frontend. Armor Class e excecao: nenhum total e persistido (nem pelo frontend, nem pelo backend); o backend so valida `armorProficiencies` e `armorClass.manualAdjustment`, e o total e sempre derivado em tempo de leitura — ver `.ai/game_systems/pathfinder_2e/armor_class/specs.md`. Vida maxima segue o padrao de pericias/saves (snapshot persistido, recalculado pelo frontend) — ver `.ai/game_systems/pathfinder_2e/hit_points/specs.md`.
* Frontend deve exibir labels em portugues e persistir chaves em ingles.
* Frontend deve distribuir a ficha em abas de icones, sem botoes `Anterior` e `Proxima`.
* A lista de paginas, labels e icones da ficha Pathfinder 2e deve ser declarada dentro de `apps/web/src/game-systems/pathfinder-2e/character-sheet`.
* O modal generico de ficha pode renderizar abas recebidas do ruleset, mas nao deve codificar titulos ou icones especificos de Pathfinder 2e.
* O CSS de layout interno, resumo lateral, campos, atributos, proficiencias e responsividade da ficha Pathfinder 2e deve ser importado pelo componente Pathfinder 2e e escopado pela classe raiz `pathfinder-sheet`.
* A primeira aba deve conter, nesta ordem: Identificacao e Atributos.
* Armor Class e Initiative pertencem ao bloco visual de hit points/status, nao a aba de proficiencias.
* A primeira aba nao deve exibir `metadata.bio`.
* A segunda aba deve ser uma pagina inteira de proficiencias de pericia.
* Cada proficiencia deve exibir, na mesma linha visual: icone de ajuda, total calculado destacado em linha sublinhada, nome da pericia em destaque e seletor de rank visualmente apresentado como TAG.
* A TAG de rank deve ter tamanho padronizado, texto branco, texto completo visivel, fonte adaptada ao tamanho, sem seta nativa de select box e sem sublinhado preto.
* Cores das TAGs: Nao treinado em cinza medio, Treinado em azul marinho, Especialista em amarelo, Mestre em roxo e Lendario em laranja.
* As opcoes abertas do rank devem usar fundo neutro em cinza claro e texto escuro, sem herdar a cor da TAG selecionada.
* A aba de proficiencias deve conter as pericias oficiais presentes no MVP (Acrobacia, Arcanismo, Atletismo, Artesanato, Diplomacia, Enganacao, Furtividade, Intimidacao, Medicina, Natureza, Ocultismo, Performance, Prestidigitacao, Religiao, Sociedade e Sobrevivencia) e, em secao propria, as quatro proficiencias de armadura (Desarmado, Leve, Media, Pesada) usadas pelo calculo de Armor Class — ver `.ai/game_systems/pathfinder_2e/armor_class/`.
* A descricao de cada pericia deve ficar oculta por padrao e aparecer apenas em tooltip ao passar o mouse sobre o icone de interrogacao da linha.
* "Intuicao" nao deve criar uma chave nova em `skills`; deve ser documentada como decisao de produto porque Pathfinder 2e divide esse conceito entre Sociedade, Ocultismo, Lore ou testes especificos de Percepcao.
* Frontend deve usar identidade visual de ficha impressa em papel envelhecido, com linhas de preenchimento, caixas de secao e atributos em blocos destacados.
* Frontend deve exibir um painel fixo lateral a esquerda em fichas Pathfinder 2e com nome do personagem, nivel, experiencia, vida, condicoes de vida, classe de armadura, fortitude, reflexo, vontade, iniciativa, percepcao e deslocamento.
* Na primeira aba, o painel fixo lateral deve se parecer com um cartao de personagem: retrato circular ornamental, nome em destaque, nivel/classe/experiencia, defesa, vida, condicoes, testes de resistencia e movimento. Ancestralidade e Background nao devem aparecer neste painel.
* Classe, ancestralidade, heranca e background devem aparecer no conteudo principal a direita, acima de Atributos, em uma secao chamada Identificacao.
* A secao Identificacao deve exibir Classe, Ancestralidade, Heranca e Background em cards de duas colunas quando houver largura suficiente. Cada card deve exibir apenas o nome selecionado no estado de leitura; campos de busca/autocomplete e resultados de catalogo devem aparecer somente durante a edicao do card.
* Para Player, os cards de Identificacao devem ficar bloqueados quando a ficha ja existir fora do setup inicial. Para Mestre, os cards permanecem editaveis.
* A secao Escolhas de criacao deve exibir os grupos Classe, Ancestralidade e Background como paineis compactos lado a lado, com controles internos de boosts/falhas/atributo chave. Atributos sugeridos deve ficar em uma faixa inferior com os seis valores e acao de aplicar atributos.
* A secao Vida do painel fixo deve exibir Maxima, Atual e Temporaria com fonte maior e maior destaque visual que os campos de texto comuns.
* Hit points/status nao devem aparecer duplicados no conteudo principal da ficha quando ja estiverem fixados no painel lateral.
* A ficha Pathfinder 2e nao deve exibir o texto `QuestHub` no cabecalho da ficha nem no painel fixo.
* O painel fixo lateral deve editar os campos persistidos quando o campo existir no contrato da ficha e apenas exibir o nome do personagem recebido do modal.
* Em telas estreitas, o painel fixo lateral deve empilhar acima do conteudo da aba sem sobrepor texto ou controles.
* `apps/web/src/game-systems/pathfinder-2e/character-sheet/pathfinder_2e_sheet.json` deve representar exatamente o envelope salvo em `Character.sheet` depois da migracao tecnica.
* O campo `Mov.` deve ocupar sua propria linha no painel fixo, abaixo de `Inic.`/`Percepcao`, com um titulo de secao `Movimento` acima (mesmo padrao visual de `sheet-quick-section-title` ja usado para `Vida`) — nao deve mais ficar espremido na mesma linha de `Inic.`/`Percepcao`. Motivo: aproximar do padrao do painel fixo de NPC (`Pathfinder2eBestiarySheetView`), que exibe Movimento como secao propria, e preparar o campo pra ser lido pelo modulo `encounter_movement` (ver `.ai/encounter_movement/`).
* A linha de `Fortitude`/`Reflexo`/`Vontade` deve ganhar um titulo de secao `Defesas` acima, no mesmo padrao visual, espelhando a secao `Defesas` do painel fixo de NPC.
* Nenhuma mudanca de contrato de dados: `general.movementMeters` continua sendo o unico campo armazenado para deslocamento do Player (nao introduzir `kind`/`label`/`feet`/`cells` como no NPC — o Player so tem uma velocidade, digitada diretamente em metros).
