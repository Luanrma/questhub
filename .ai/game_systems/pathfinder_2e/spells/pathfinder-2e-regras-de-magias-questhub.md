# Pathfinder 2e — Regras de Magias e Requisitos para o QuestHub

> **Escopo:** Pathfinder Segunda Edição, conteúdo remasterizado e conteúdo legado explicitamente marcado.  
> **Objetivo normativo:** determinar exatamente como o adapter PF2e do QuestHub calcula acesso, quantidade de slots, magias preparadas, repertórios, ranks, recursos e permissões de conjuração. Este arquivo é uma especificação de implementação, não apenas um manual para jogadores.  
> **Versão do documento:** 2026-07-13. **Status:** normativo para implementação.

---

# Parte I — Especificação normativa de limites, acesso e progressão

> **Leitura obrigatória para agents:** os termos **DEVE**, **NÃO DEVE**, **PODE** e **DEVERIA** são normativos. Uma implementação que não cumpra um item marcado como DEVE ou NÃO DEVE está incorreta, mesmo que a interface aparente funcionar.

## A. Autoridade das regras e fonte canônica

### A.1. Fonte de verdade

O QuestHub **NÃO DEVE** manter uma cópia manual e desconectada das regras de classe. O adapter `pathfinder_2e` deve consumir dados gerados a partir do mesmo snapshot fixo do repositório `foundryvtt/pf2e` usado pelos demais módulos PF2e.

O snapshot deve ser registrado em um manifesto com:

```ts
interface Pf2eSourceManifest {
  repository: "foundryvtt/pf2e";
  commitSha: string;
  importedAt: string;
  rulesEdition: "remaster" | "legacy" | "mixed";
  packs: string[];
}
```

Regras obrigatórias:

1. O build **NÃO DEVE** depender de uma branch mutável em runtime.
2. Toda atualização do snapshot exige regeneração, diff e validação de compatibilidade.
3. O documento define os limites-base; registros canônicos definem opções e exceções concretas.
4. Conteúdo legado deve ser marcado e não pode sobrescrever silenciosamente conteúdo remasterizado.
5. Se o registro importado e uma constante local divergirem, a importação validada tem precedência.

### A.2. Ordem de precedência

Quando mais de uma regra alterar o mesmo valor, aplicar nesta ordem, da maior para a menor prioridade:

1. decisão explícita do Mestre registrada como override;
2. efeito temporário ou regra ativa que declare substituir o valor;
3. talento, característica ou item específico;
4. opção selecionada: divindade, escola, patrono, linhagem, mistério, eidolon, aparição, tese ou arquétipo;
5. progressão da entrada de conjuração;
6. progressão-base da classe;
7. regra geral do sistema.

Uma regra mais específica substitui a geral apenas no campo que ela modifica.

### A.3. Separação entre core e adapter

O core do QuestHub deve conhecer conceitos genéricos como `resourcePool`, `rank`, `uses`, `collection` e `entry`. Ele **NÃO DEVE** conhecer Mago, Fonte Divina, patronos, linhagens ou qualquer regra de Pathfinder.

Toda regra deste documento pertence ao adapter:

```text
QuestHub Core
  └── contratos genéricos
      └── Pathfinder2eAdapter
          ├── progressões
          ├── acesso a magias
          ├── preparação/repertório
          ├── recursos
          └── validação de conjuração
```

---

## B. Entidades mínimas obrigatórias

### B.1. Entrada de conjuração

Cada fonte independente deve gerar uma `SpellcastingEntry`. Slots e magias de entradas diferentes **NÃO PODEM** ser misturados.

```ts
type CastingMode =
  | "PREPARED"
  | "SPONTANEOUS"
  | "FOCUS"
  | "INNATE"
  | "RITUAL"
  | "ITEM";

type Tradition = "ARCANE" | "DIVINE" | "OCCULT" | "PRIMAL" | null;

interface SpellcastingEntry {
  id: string;
  characterId: string;
  sourceId: string;
  sourceType: "CLASS" | "ARCHETYPE" | "ANCESTRY" | "FEAT" | "ITEM" | "OTHER";
  mode: CastingMode;
  tradition: Tradition;
  ability: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA" | null;
  proficiencyRank: 0 | 1 | 2 | 3 | 4;
  progressionId: string | null;
  collectionType: "LIST" | "SPELLBOOK" | "FAMILIAR" | "REPERTOIRE" | "APPARITION" | "FIXED_GRANTS" | null;
  active: boolean;
  disabledReason?: string;
}
```

### B.2. Progressão e pools

```ts
interface SpellProgression {
  id: string;
  cantripsByCharacterLevel: Record<number, number>;
  slotsByCharacterLevel: Record<number, Record<number, number>>;
  specialPools: SpecialSpellPoolDefinition[];
}

interface SpellSlotPool {
  entryId: string;
  characterLevel: number;
  rank: number;
  poolKey: string;
  maximum: number;
  current: number;
  restrictionId?: string;
}
```

`poolKey` é obrigatório para impedir que slots visualmente iguais sejam misturados. Exemplos:

- `wizard.normal.rank3`;
- `wizard.curriculum.rank3`;
- `cleric.divine-font.rank5`;
- `magus.studious.rank4`;
- `animist.prepared.rank2`;
- `animist.apparition.rank2`.

### B.3. Coleções e concessões

```ts
interface CharacterSpellAccess {
  spellId: string;
  entryId: string;
  sourceId: string;
  accessType: "TRADITION" | "EXPLICIT_GRANT" | "LEARNED" | "REPERTOIRE" | "PREPARED" | "APPARITION";
  minimumRank?: number;
  maximumRank?: number;
  traditionOverride?: Tradition;
  expiresAt?: string;
}

interface SpellGrant {
  sourceId: string;
  spellId: string;
  grantKind: "ADD_TO_LIST" | "ADD_TO_COLLECTION" | "ADD_TO_REPERTOIRE" | "FIXED_PREPARATION" | "FOCUS" | "INNATE";
  rankRule: "BASE" | "FIXED" | "AUTO_HEIGHTEN" | "ENTRY_MAX";
  fixedRank?: number;
  traditionOverride?: Tradition;
  requiredChoiceIds?: string[];
}
```

Acesso, conhecimento, preparação e disponibilidade são estados diferentes:

```text
ter acesso ≠ conhecer
conhecer ≠ preparar
preparar ≠ possuir slot disponível
possuir slot ≠ conseguir conjurar o alvo escolhido
```

---

## C. Regras universais de cálculo

### C.1. Rank máximo

O QuestHub **NÃO DEVE** usar `ceil(level / 2)` para calcular slots de classe.

```ts
entryMaximumRank = max(
  rank where progression.slotsByCharacterLevel[level][rank] > 0
)
```

`ceil(level / 2)` é usado apenas quando a regra disser explicitamente, principalmente para:

- rank efetivo de truques;
- rank efetivo de magias de foco;
- rank máximo de ritual que pode ser executado;
- requisitos que consultem o maior rank teórico, quando a própria regra assim determinar.

Para Magus e Summoner, perder slots de ranks baixos não remove a qualificação para requisitos de ranks inferiores já alcançados.

### C.2. Total de magias preparadas

Para uma entrada preparada normal:

```ts
preparedSpellCapacity(entry, rank) =
  sum(all slot pools for entry and rank whose restriction accepts the spell)
```

A quantidade total de preparações não é o tamanho do grimório, familiar ou lista.

- Cada slot preparado recebe no máximo uma magia.
- A mesma magia pode ocupar vários slots.
- Um slot gasto continua lembrando qual magia estava preparada.
- Um slot restrito aceita apenas magias compatíveis com sua restrição.
- Truques preparados usam um limite separado e não ocupam slots.

### C.3. Total de magias espontâneas conhecidas

A quantidade conhecida é calculada por eventos de progressão e concessões, não pela simples soma atual dos slots em todas as classes.

```ts
repertoireCapacity =
  baseRepertoireGrants
  + learnedFromSlotGainEvents
  + optionSpellGrants
  + featSpellGrants
  - mandatoryLossEvents
```

O sistema deve manter `learnedRank`. Uma magia espontânea comum só pode ser conjurada no rank aprendido, salvo magia característica ou regra específica.

### C.4. Truques

```ts
cantripEffectiveRank = ceil(characterLevel / 2)
```

Truques:

- não gastam slots;
- não possuem contador diário;
- precisam estar preparados, no repertório ou concedidos pela fonte correta;
- podem ter pools separados, como truques psi ou truques de foco.

### C.5. Raridade e acesso

Ao adicionar uma magia:

- `common`: permitida se estiver na tradição/lista ou houver grant;
- `uncommon`: exige acesso explícito, aprendizado válido ou override do Mestre;
- `rare`: exige concessão explícita ou aprovação do Mestre;
- `unique`: somente a fonte específica ou override explícito.

Obter acesso apenas permite escolher ou aprender a opção; não a adiciona automaticamente ao repertório, grimório ou preparação, salvo se a fonte disser que concede a magia.

### C.6. Proficiência, ataque mágico e CD

A progressão de proficiência **NÃO DEVE** ser inferida apenas pelo tipo de conjurador. Doutrinas, arquétipos e características podem alterar os níveis de progressão. O importador deve transformar características como `Expert Spellcaster`, `Master Spellcaster` e `Legendary Spellcaster` em eventos executáveis.

```ts
interface SpellcastingProficiencyGrant {
  entrySelector: string;
  minimumCharacterLevel: number;
  proficiencyRank: 1 | 2 | 3 | 4;
  sourceId: string;
}
```

No modo padrão com nível na proficiência:

```ts
spellAttackModifier =
  characterLevel
  + proficiencyRankBonus
  + castingAbilityModifier
  + attackSpecificItemBonuses
  + attackSpecificStatusBonuses
  + attackSpecificCircumstanceBonuses
  - attackSpecificPenalties;

spellDC =
  10
  + characterLevel
  + proficiencyRankBonus
  + castingAbilityModifier
  + dcSpecificItemBonuses
  + dcSpecificStatusBonuses
  + dcSpecificCircumstanceBonuses
  - dcSpecificPenalties;
```

`proficiencyRankBonus` vale 2, 4, 6 ou 8 para treinado, especialista, mestre ou lendário. Ataque mágico e CD devem ser calculados por seletores diferentes: um bônus aplicável apenas a ataques não pode ser copiado para a CD, e vice-versa. Se a campanha usar a variante **Proficiência sem Nível**, o adapter deve delegar a fórmula ao ruleset configurado e não somar o nível.

Entradas diferentes podem usar atributos, tradições e proficiências diferentes no mesmo personagem. Uma melhoria de proficiência só afeta as entradas selecionadas pela própria característica.

---

## D. Classes que recebem slots de classe

| Classe | Modo | Tradição | Atributo | Progressão | Origem das magias |
| --- | --- | --- | --- | --- | --- |
| Animista | Duas entradas: preparada + espontânea | Divina | SAB | Tabela Animista | Aparições escolhidas diariamente |
| Bardo | Espontânea | Ocultista | CAR | Padrão 3 slots | Repertório; musa e talentos concedem exceções |
| Clérigo | Preparada | Divina | SAB | Padrão 3 slots + Fonte Divina | Lista divina + magias da divindade |
| Druida | Preparada | Primal | SAB | Padrão 3 slots | Lista primal + acessos aprendidos |
| Magus | Preparada limitada | Arcana | INT | Onda limitada | Grimório + slots estudioso restritos |
| Oráculo | Espontânea | Divina | CAR | Padrão 4 slots | Repertório + mistério/Divine Access |
| Psíquico | Espontânea limitada | Ocultista | INT ou CAR | Padrão psíquico | Repertório + mente consciente + psi cantrips |
| Feiticeiro | Espontânea | Definida pela linhagem | CAR | Padrão 4 slots | Repertório + dádivas da linhagem |
| Summoner | Espontânea limitada | Definida pelo eidolon | CAR | Onda limitada | Repertório, máximo-base de 5 magias |
| Bruxa | Preparada | Definida pelo patrono | INT | Padrão 3 slots | Magias conhecidas pelo familiar |
| Mago | Preparada | Arcana | INT | Padrão 3 slots + currículo | Grimório + escola/currículo |

### D.1. Classes sem slots-base

As seguintes classes não criam uma entrada de slots de classe por padrão:

Alquimista, Bárbaro, Campeão, Commander, Exemplar, Guerreiro, Guardian, Gunslinger, Inventor, Investigador, Kineticista, Monge, Patrulheiro, Ladino, Swashbuckler, Taumaturgo.

Elas ainda podem receber:

- magias de foco por classe ou talento;
- magias inatas;
- conjuração por arquétipo;
- ativação de itens;
- rituais.

Regras negativas importantes:

- fórmulas de Alquimista não são magias;
- impulsos de Kineticista não são magias e não usam slots;
- táticas de Commander não são magias;
- poderes de ikon do Exemplar não são automaticamente magias;
- implementos de Taumaturgo não criam slots;
- o sistema **NÃO DEVE** criar uma entrada de conjuração normal só porque a classe possui uma habilidade sobrenatural.

---

## E. Tabelas exatas de slots

As tabelas abaixo são valores-base antes de slots extras, talentos, arquétipos ou efeitos.

### E.1. Progressão completa de 3 slots

Aplicada às entradas-base de **Mago, Clérigo, Druida, Bruxa e Bardo**. Mago e Clérigo possuem pools extras descritos depois.

| Nível | Truques | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 2 | — | — | — | — | — | — | — | — | — |
| 2 | 5 | 3 | — | — | — | — | — | — | — | — | — |
| 3 | 5 | 3 | 2 | — | — | — | — | — | — | — | — |
| 4 | 5 | 3 | 3 | — | — | — | — | — | — | — | — |
| 5 | 5 | 3 | 3 | 2 | — | — | — | — | — | — | — |
| 6 | 5 | 3 | 3 | 3 | — | — | — | — | — | — | — |
| 7 | 5 | 3 | 3 | 3 | 2 | — | — | — | — | — | — |
| 8 | 5 | 3 | 3 | 3 | 3 | — | — | — | — | — | — |
| 9 | 5 | 3 | 3 | 3 | 3 | 2 | — | — | — | — | — |
| 10 | 5 | 3 | 3 | 3 | 3 | 3 | — | — | — | — | — |
| 11 | 5 | 3 | 3 | 3 | 3 | 3 | 2 | — | — | — | — |
| 12 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | — | — | — | — |
| 13 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | — | — | — |
| 14 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — | — | — |
| 15 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | — | — |
| 16 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — | — |
| 17 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 2 | — |
| 18 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — |
| 19 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 |
| 20 | 5 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 1 |

### E.2. Progressão completa de 4 slots

Aplicada às entradas-base de **Feiticeiro e Oráculo**.

| Nível | Truques | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 3 | — | — | — | — | — | — | — | — | — |
| 2 | 5 | 4 | — | — | — | — | — | — | — | — | — |
| 3 | 5 | 4 | 3 | — | — | — | — | — | — | — | — |
| 4 | 5 | 4 | 4 | — | — | — | — | — | — | — | — |
| 5 | 5 | 4 | 4 | 3 | — | — | — | — | — | — | — |
| 6 | 5 | 4 | 4 | 4 | — | — | — | — | — | — | — |
| 7 | 5 | 4 | 4 | 4 | 3 | — | — | — | — | — | — |
| 8 | 5 | 4 | 4 | 4 | 4 | — | — | — | — | — | — |
| 9 | 5 | 4 | 4 | 4 | 4 | 3 | — | — | — | — | — |
| 10 | 5 | 4 | 4 | 4 | 4 | 4 | — | — | — | — | — |
| 11 | 5 | 4 | 4 | 4 | 4 | 4 | 3 | — | — | — | — |
| 12 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | — | — | — | — |
| 13 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | — | — | — |
| 14 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | — | — | — |
| 15 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | — | — |
| 16 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | — | — |
| 17 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 3 | — |
| 18 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | — |
| 19 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 1 |
| 20 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 1 |

### E.3. Progressão do Psíquico

A coluna de truques significa 3 truques escolhidos mais 3 truques psi concedidos pela mente consciente no nível 1. Concessões posteriores da mente consciente são adicionais.

| Nível | Truques | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 + 3 psi | 1 | — | — | — | — | — | — | — | — | — |
| 2 | 3 + 3 psi | 2 | — | — | — | — | — | — | — | — | — |
| 3 | 3 + 3 psi | 2 | 1 | — | — | — | — | — | — | — | — |
| 4 | 3 + 3 psi | 2 | 2 | — | — | — | — | — | — | — | — |
| 5 | 3 + 3 psi | 2 | 2 | 1 | — | — | — | — | — | — | — |
| 6 | 3 + 3 psi | 2 | 2 | 2 | — | — | — | — | — | — | — |
| 7 | 3 + 3 psi | 2 | 2 | 2 | 1 | — | — | — | — | — | — |
| 8 | 3 + 3 psi | 2 | 2 | 2 | 2 | — | — | — | — | — | — |
| 9 | 3 + 3 psi | 2 | 2 | 2 | 2 | 1 | — | — | — | — | — |
| 10 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | — | — | — | — | — |
| 11 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 1 | — | — | — | — |
| 12 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | — | — | — | — |
| 13 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 1 | — | — | — |
| 14 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | — | — | — |
| 15 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | — | — |
| 16 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | — | — |
| 17 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | — |
| 18 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | — |
| 19 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 |
| 20 | 3 + 3 psi | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 |

### E.4. Progressão em onda de Magus e Summoner

Os slots normais abaixo são usados por ambas as classes. A última coluna existe apenas para Magus.

| Nível | Truques | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | Magus: slots estudioso |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 5 | 1 | — | — | — | — | — | — | — | — | — |
| 2 | 5 | 2 | — | — | — | — | — | — | — | — | — |
| 3 | 5 | 2 | 1 | — | — | — | — | — | — | — | — |
| 4 | 5 | 2 | 2 | — | — | — | — | — | — | — | — |
| 5 | 5 | — | 2 | 2 | — | — | — | — | — | — | — |
| 6 | 5 | — | 2 | 2 | — | — | — | — | — | — | — |
| 7 | 5 | — | — | 2 | 2 | — | — | — | — | — | 2 slots restritos de rank 2 |
| 8 | 5 | — | — | 2 | 2 | — | — | — | — | — | 2 slots restritos de rank 2 |
| 9 | 5 | — | — | — | 2 | 2 | — | — | — | — | 2 slots restritos de rank 2 |
| 10 | 5 | — | — | — | 2 | 2 | — | — | — | — | 2 slots restritos de rank 2 |
| 11 | 5 | — | — | — | — | 2 | 2 | — | — | — | 2 slots restritos de rank 3 |
| 12 | 5 | — | — | — | — | 2 | 2 | — | — | — | 2 slots restritos de rank 3 |
| 13 | 5 | — | — | — | — | — | 2 | 2 | — | — | 2 slots restritos de rank 4 |
| 14 | 5 | — | — | — | — | — | 2 | 2 | — | — | 2 slots restritos de rank 4 |
| 15 | 5 | — | — | — | — | — | — | 2 | 2 | — | 2 slots restritos de rank 4 |
| 16 | 5 | — | — | — | — | — | — | 2 | 2 | — | 2 slots restritos de rank 4 |
| 17 | 5 | — | — | — | — | — | — | — | 2 | 2 | 2 slots restritos de rank 4 |
| 18 | 5 | — | — | — | — | — | — | — | 2 | 2 | 2 slots restritos de rank 4 |
| 19 | 5 | — | — | — | — | — | — | — | 2 | 2 | 2 slots restritos de rank 4 |
| 20 | 5 | — | — | — | — | — | — | — | 2 | 2 | 2 slots restritos de rank 4 |

Regras obrigatórias:

- Ao subir para o nível 5 e outros níveis de avanço, ranks antigos podem deixar de possuir slots.
- O sistema não deve manter slots normais obsoletos.
- Magias do grimório do Magus não são removidas quando seus slots baixos desaparecem.
- O Summoner processa perdas obrigatórias de repertório quando perde o rank de slot correspondente.
- Magus não recebe slot normal de rank 10.
- Summoner não recebe slot normal de rank 10.

### E.5. Progressão do Animista

Cada célula usa `preparada+aparição`. Os dois lados são pools independentes e não intercambiáveis.

| Nível | Truques P+A | R1 P+A | R2 P+A | R3 P+A | R4 P+A | R5 P+A | R6 P+A | R7 P+A | R8 P+A | R9 P+A | R10 P+A |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2+2 | 1+1 | — | — | — | — | — | — | — | — | — |
| 2 | 2+2 | 2+1 | — | — | — | — | — | — | — | — | — |
| 3 | 2+2 | 2+1 | 1+1 | — | — | — | — | — | — | — | — |
| 4 | 2+2 | 2+1 | 2+1 | — | — | — | — | — | — | — | — |
| 5 | 2+2 | 2+1 | 2+1 | 1+1 | — | — | — | — | — | — | — |
| 6 | 2+2 | 2+1 | 2+1 | 2+1 | — | — | — | — | — | — | — |
| 7 | 2+3 | 2+1 | 2+1 | 2+1 | 1+1 | — | — | — | — | — | — |
| 8 | 2+3 | 2+1 | 2+1 | 2+1 | 2+1 | — | — | — | — | — | — |
| 9 | 2+3 | 2+1 | 2+1 | 2+1 | 2+1 | 1+1 | — | — | — | — | — |
| 10 | 2+3 | 2+2 | 2+2 | 2+2 | 2+1 | 2+1 | — | — | — | — | — |
| 11 | 2+3 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 1+1 | — | — | — | — |
| 12 | 2+3 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 2+1 | — | — | — | — |
| 13 | 2+3 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 1+1 | — | — | — |
| 14 | 2+3 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 2+1 | — | — | — |
| 15 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 1+1 | — | — |
| 16 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 2+1 | — | — |
| 17 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 1+1 | — |
| 18 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 2+1 | — |
| 19 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 0+1 |
| 20 | 2+4 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+2 | 2+1 | 0+1 |

No nível 19, `0+1` no rank 10 significa que existe somente o slot especial de aparição.

### E.6. Regra global para slots de rank 10

Slots de rank 10 são pools especiais, não uma continuação comum das progressões anteriores. O sistema deve marcar:

```ts
interface TenthRankSlotRules {
  special: true;
  cannotBeCreatedByGenericExtraSlotEffects: true;
  cannotBeUsedByCastWithoutExpendingSlotEffects: true;
  sourceFeatureId: string;
  allowedSpellIds?: string[];
}
```

Regras por classe:

- Mago, Clérigo, Druida e Bruxa: recebem 1 slot especial preparado no nível 19; talentos específicos podem conceder outro.
- Bardo, Feiticeiro e Oráculo: a característica de nível 19 adiciona 2 magias comuns de rank 10 ao repertório e concede 1 slot especial que conjura essas magias; outras concessões devem seguir seu texto.
- Psíquico: usar os grants da característica `Infinite Mind`; não tratar o slot como slot psíquico comum.
- Animista: somente a entrada de aparição recebe o slot especial de rank 10.
- Magus e Summoner: não recebem slot-base de rank 10.
- Efeitos genéricos de slot extra, Fonte Divina, currículo, Drain Bonded Item e equivalentes não podem duplicar ou substituir o consumo de rank 10, salvo texto explícito.

### E.7. Quantidade exata de magias conhecidas, preparadas e disponíveis

As tabelas de slots não bastam para limitar a ficha. O QuestHub deve calcular separadamente quatro capacidades:

```ts
interface SpellCapacitySnapshot {
  characterId: string;
  entryId: string;
  characterLevel: number;
  maximumSpellRank: number;
  cantripCapacity: number;
  slotCapacityByRank: Record<number, number>;
  preparedCapacityByRank: Record<number, number>;
  repertoireCapacityByRank: Record<number, number>;
  fixedGrantedSpellIdsByRank: Record<number, string[]>;
  restrictedSlotCapacityByRank: Record<number, RestrictedSlotPool[]>;
}
```

As quantidades devem ser obtidas nesta ordem:

1. progressão-base da classe ou do arquétipo;
2. opção de classe que define a entrada, como patrono, linhagem, divindade, eidolon, escola ou mente consciente;
3. características adquiridas automaticamente pelo nível;
4. talentos e arquétipos;
5. itens e efeitos temporários;
6. overrides explícitos do Mestre.

O sistema **NÃO DEVE** somar novamente uma concessão já incorporada à progressão-base.

#### E.7.1. Conjuradores preparados

Para uma entrada preparada comum:

```text
capacidade de preparações de um rank
= slots normais desse rank
+ slots extras irrestritos desse rank
+ slots restritos desse rank
```

Cada slot comporta exatamente uma preparação, salvo regra explícita. Portanto:

- Mago, Clérigo, Druida, Bruxa e Magus preparam uma magia por slot;
- o slot gasto continua mostrando qual magia estava preparada;
- uma mesma magia pode ocupar vários slots;
- truques preparados usam `cantripCapacity`, não slots;
- slots de currículo, Fonte Divina, slots estudioso e outros pools restritos contam como preparações adicionais, mas só aceitam magias autorizadas pelo próprio pool;
- uma magia existente no grimório, familiar ou lista de preparação não conta como preparada até ser associada a um slot ou posição de truque;
- o tamanho do grimório ou coleção conhecida não limita a quantidade total de magias armazenadas, salvo regra específica da fonte.

Validação:

```ts
preparedCount(entryId, rank, poolId) <= capacity(entryId, rank, poolId)
```

O sistema deve rejeitar:

- preparação acima da capacidade;
- magia em rank superior ao slot;
- magia ausente da coleção exigida;
- magia incompatível com um slot restrito;
- truques acima da capacidade de truques preparados.

#### E.7.2. Bardo

Capacidade-base do repertório:

- 5 truques;
- para ranks 1–9, a quantidade-base de magias conhecidas de cada rank é exatamente o valor daquele rank na tabela **E.1**;
- no rank 10, `Magnum Opus` adiciona exatamente 2 magias comuns de rank 10 ao repertório, embora conceda somente 1 slot especial;
- magias concedidas por musa, talento ou outra característica são adicionais apenas quando o texto disser que são adicionadas ao repertório.

```ts
bardBaseRepertoire[rank1to9] = standardThreeSlotProgression[level][rank];
bardBaseRepertoire[10] = hasFeature("magnum-opus") ? 2 : 0;
```

#### E.7.3. Feiticeiro

Capacidade-base do repertório:

- 5 truques no nível 1: normalmente 4 escolhidos e 1 concedido pela linhagem;
- para ranks 1–9, a quantidade-base total de magias conhecidas de cada rank é exatamente o valor daquele rank na tabela **E.2**;
- a composição dessa quantidade inclui as dádivas fixas da linhagem; elas não devem ser somadas novamente além da tabela quando substituem uma das escolhas normais;
- no rank 10, `Bloodline Paragon` adiciona exatamente 2 magias comuns de rank 10 válidas para a tradição e concede 1 slot especial;
- outras magias explicitamente adicionadas ao repertório são grants adicionais.

```ts
sorcererBaseRepertoire[rank1to9] = standardFourSlotProgression[level][rank];
sorcererBaseRepertoire[10] = hasFeature("bloodline-paragon") ? 2 : 0;
```

#### E.7.4. Oráculo

Capacidade-base do repertório:

- 5 truques;
- para ranks 1–9, a quantidade-base de magias conhecidas de cada rank é exatamente o valor daquele rank na tabela **E.2**;
- magias de mistério, `Divine Access` e outras concessões só são adicionais quando a característica disser que entram no repertório sem substituir uma escolha;
- no rank 10, `Oracular Clarity` adiciona exatamente 2 magias comuns divinas de rank 10 e concede 1 slot especial.

```ts
oracleBaseRepertoire[rank1to9] = standardFourSlotProgression[level][rank];
oracleBaseRepertoire[10] = hasFeature("oracular-clarity") ? 2 : 0;
```

#### E.7.5. Psíquico

Capacidade-base:

- 3 truques ocultistas escolhidos;
- 3 psi cantrips fixos da mente consciente no nível 1;
- para ranks 1–9, a quantidade de magias **escolhidas pelo jogador** em cada rank é exatamente o valor daquele rank na tabela **E.3**;
- as magias fixas concedidas pela mente consciente são adicionadas separadamente e não consomem essa capacidade escolhida;
- no nível 1, isso resulta em 1 magia escolhida de rank 1 mais 1 magia de rank 1 concedida pela mente consciente;
- no rank 10, `Infinite Mind` adiciona as magias e recursos definidos pela característica canônica; a implementação não deve inferir uma magia escolhida apenas porque a tabela mostra um recurso especial.

```ts
psychicChosenRepertoire[rank1to9] = psychicProgression[level][rank];
psychicEffectiveRepertoire[rank] =
  psychicChosenRepertoire[rank]
  + uniqueFixedGrantsFromConsciousMind(rank)
  + uniqueAdditionalGrants(rank);
```

#### E.7.6. Summoner

O repertório-base de magias que não são truques é limitado pelo nível, e não pelo total histórico de slots:

| Nível | Quantidade-base total de magias no repertório, excluindo truques |
| --- | --- |
| 1 | 2 |
| 2 | 3 |
| 3 | 4 |
| 4–20 | 5 |

Além disso:

- possui 5 truques-base;
- ao ganhar slots de um rank novo, adiciona as magias exigidas pela progressão;
- quando perde o rank mais baixo de slots, deve remover 2 magias do repertório no fluxo obrigatório de progressão;
- a remoção nunca deve acontecer silenciosamente: enquanto a escolha estiver pendente, a entrada fica `INVALID_PENDING_LEVEL_UP` e não pode ser salva como válida;
- grants explícitos podem elevar o total acima de 5 e devem ser marcados como `granted`, não como escolhas-base;
- a partir do nível 3, todas as magias válidas do repertório são características.

#### E.7.7. Animista

O Animista não possui um limite numérico fixo de repertório de aparição separado dos grants das aparições.

```text
repertório efetivo de aparição
= união sem duplicatas das magias concedidas pelas aparições atualmente sintonizadas
```

Quantidade de aparições sintonizadas:

- níveis 1–6: 2;
- níveis 7–14: 3;
- níveis 15–20: 4.

A entrada preparada é limitada pelos slots do lado `P` da tabela **E.5**. A entrada de aparição utiliza os slots do lado `A`. Todas as magias válidas do repertório de aparição são características.

#### E.7.8. Coleções de Mago, Bruxa e Magus

Essas classes podem conhecer mais magias do que conseguem preparar.

- Mago: grimório inicial e ganhos por nível conforme **F.1**; `Learn a Spell` pode aumentar indefinidamente a coleção, respeitando acesso e rank.
- Bruxa: coleção pertence ao familiar conforme **F.4**; novos aprendizados e grants não criam slots.
- Magus: grimório conforme **F.9**; perder slots de ranks antigos não remove magias do grimório.

Para essas coleções:

```ts
collectionSize !== preparedCapacity;
```

O agente de implementação **NÃO DEVE** criar um limite artificial de tamanho do grimório usando a quantidade de slots.

#### E.7.9. Magias concedidas e prevenção de dupla contagem

Cada magia do repertório ou coleção deve indicar como ocupa capacidade:

```ts
type CapacityConsumption =
  | "BASE_CHOICE"
  | "REPLACES_BASE_CHOICE"
  | "ADDITIONAL_GRANT"
  | "TEMPORARY_GRANT"
  | "DOES_NOT_CONSUME_CAPACITY";
```

Exemplos:

- dádiva de linhagem que forma parte da quantidade normal: `REPLACES_BASE_CHOICE`;
- magia adicional concedida por um talento: `ADDITIONAL_GRANT`;
- magia de uma aparição atualmente sintonizada: `TEMPORARY_GRANT` ou grant derivado equivalente;
- acesso a uma magia sem aprendê-la: não cria `CharacterSpellAccess` conhecido e não consome capacidade.

A contagem válida é:

```ts
usedBaseCapacity = count(BASE_CHOICE) + count(REPLACES_BASE_CHOICE);
usedBaseCapacity <= baseCapacity;
```

`ADDITIONAL_GRANT` e `TEMPORARY_GRANT` não consomem a capacidade-base, mas exigem uma fonte ativa e válida.

---

## F. Modificadores e regras específicas de cada classe

### F.1. Mago

Entrada-base:

- modo: preparada;
- tradição: arcana;
- atributo: Inteligência;
- progressão: 3 slots;
- coleção: grimório.

Limites e concessões:

1. No nível 1, prepara 5 truques e 2 magias de rank 1 em slots normais.
2. A escola normalmente concede mais 1 truque de currículo e 1 slot de currículo de cada rank normal disponível, do rank 1 ao 9. O slot especial de rank 10 não recebe slot de currículo.
3. Slot de currículo só aceita magia pertencente ao currículo válido da escola.
4. A Escola de Teoria Mágica Unificada e outras opções podem substituir a regra de currículo; o sistema deve ler o registro da escola, não inferir pelo nome.
5. Grimório inicial: 10 truques arcanos, 5 magias arcanas de rank 1 e, normalmente, 2 magias de currículo de rank 1.
6. A cada nível, adicionar 2 magias arcanas ao grimório em ranks para os quais o personagem possui slots.
7. Ao liberar novo rank, adicionar a magia de currículo prevista pela escola, salvo exceção da escola.
8. `Learn a Spell` pode aumentar o grimório sem aumentar slots.
9. Drain Bonded Item não cria slot. É uma frequência diária separada que permite repetir uma magia preparada já gasta conforme a característica.
10. O slot especial de rank 10 só existe nos níveis 19–20 e segue a característica `Archwizard's Spellcraft`; currículo e Drain Bonded Item não o duplicam nem evitam seu gasto.

Validação:

```ts
canPrepareWizardSpell =
  spellbook.contains(spellId, requestedRank)
  && slot.accepts(spellId)
  && requestedRank <= entryMaximumRank
```

### F.2. Clérigo

Entrada-base:

- preparada;
- divina;
- Sabedoria;
- progressão de 3 slots;
- coleção-base: lista divina comum + magias divinas acessadas e aprendidas.

Fonte Divina:

- níveis 1–4: 4 slots extras no maior rank disponível;
- níveis 5–14: 5 slots extras no maior rank disponível;
- níveis 15–20: 6 slots extras no maior rank normal disponível, limitado ao rank 9;
- cada slot aceita somente `Heal` ou `Harm`, conforme a Fonte Divina escolhida e modificadores explícitos;
- ao ganhar novo rank normal, o pool muda para o novo maior rank; não ficam pools de fonte em ranks antigos;
- o slot especial de rank 10 não eleva a Fonte Divina para rank 10 e não pode ser multiplicado por habilidades que concedem slots extras.

Divindade:

- adiciona magias específicas à lista do Clérigo;
- uma magia fora da lista divina é tratada como divina quando preparada por essa concessão;
- não fica automaticamente preparada;
- só pode ser preparada quando o rank estiver disponível;
- edictos, anátemas e perda de poderes devem poder desabilitar a entrada ou recursos sem apagar dados.

### F.3. Druida

- preparada, primal, Sabedoria, progressão de 3 slots;
- prepara da lista primal comum ou de outras magias primais às quais obteve acesso e aprendeu;
- possui 5 truques preparados pela tabela;
- ordens e talentos concedem magias de foco e grants, sem criar slots normais adicionais salvo texto explícito;
- violação de anátema pode desabilitar a conjuração e benefícios da ordem; não apagar preparações ou magias aprendidas.

### F.4. Bruxa

- preparada;
- tradição determinada pelo patrono;
- Inteligência;
- progressão de 3 slots;
- coleção: magias conhecidas pelo familiar.

No nível 1:

- prepara 5 truques e 2 magias de rank 1;
- familiar conhece 10 truques da tradição, 5 magias de rank 1 e as concessões da primeira lição/patrono;
- adicionar 2 magias válidas ao familiar a cada nível, além de grants.

Regras:

- morrer ou desaparecer o familiar não deve apagar a coleção;
- a substituição do familiar restaura o vínculo com a coleção conforme a regra de classe;
- hexes são magias de foco ou truques de foco e não ocupam slots normais;
- a limitação de quantidade de hexes por turno deve ser validada como restrição de ação, não como slot.

### F.5. Bardo

- espontânea, ocultista, Carisma, progressão de 3 slots;
- nível 1: 5 truques e 2 magias de rank 1 no repertório;
- sempre que a progressão conceder um novo slot, aprender uma magia do mesmo rank;
- a partir do nível 3, escolher 1 magia característica para cada rank acessível;
- composições são magias de foco ou truques de foco separados do repertório normal;
- `Magnum Opus` adiciona 2 magias comuns de rank 10 ao repertório e concede 1 slot especial; efeitos genéricos não podem duplicá-lo ou evitar seu gasto.

### F.6. Feiticeiro

- espontânea, Carisma, progressão de 4 slots;
- tradição determinada pela linhagem;
- nível 1: 5 truques e 3 magias de rank 1 no repertório;
- composição normal: 4 truques escolhidos + 1 da linhagem; 2 magias escolhidas de rank 1 + 1 dádiva da linhagem;
- cada novo slot concede uma magia do mesmo rank no repertório;
- ao alcançar um novo rank, aplicar também as dádivas da linhagem previstas;
- a partir do nível 3, 1 magia característica por rank acessível;
- magias e tradições da linhagem devem vir do registro canônico da linhagem;
- o sistema não deve manter um `switch` manual incompleto de linhagens;
- `Bloodline Paragon` adiciona 2 magias comuns de rank 10 da tradição ao repertório e concede 1 slot especial; não aceitar qualquer magia de rank 10 sem validar a característica.

### F.7. Oráculo

- espontânea, divina, Carisma, progressão de 4 slots;
- nível 1: 5 truques e 3 magias de rank 1 no repertório;
- cada novo slot adiciona uma magia do mesmo rank, salvo instrução diferente da característica;
- a partir do nível 3, 1 magia característica por rank acessível;
- mistério concede perícias, magias de revelação e outros grants próprios;
- `Divine Access` e talentos equivalentes adicionam magias explicitamente, não uma tradição inteira;
- maldição e estados do mistério não podem ser simplificados para “desativar magia” sem a regra específica;
- `Oracular Clarity` adiciona 2 magias comuns divinas de rank 10 ao repertório e concede 1 slot especial restrito a elas.

### F.8. Psíquico

- espontânea limitada, ocultista;
- atributo definido pela mente subconsciente;
- progressão psíquica de 2 slots por rank, com apenas 1 no rank recém-liberado em nível ímpar;
- nível 1: 3 truques ocultistas escolhidos, 3 psi cantrips da mente consciente, 1 magia de rank 1 escolhida e 1 magia adicional de rank 1 da mente consciente;
- cada novo slot adiciona uma magia escolhida do mesmo rank;
- a mente consciente adiciona magias extras sem adicionar slots;
- a partir do nível 3, 1 magia característica por rank;
- inicia com 2 Pontos de Foco para amps;
- `Clarity of Focus`, no nível 5, eleva o máximo normal para 3;
- Refocar pode ter recuperação especial quando os pontos foram usados apenas em amps/habilidades psíquicas; registrar a origem de cada gasto;
- psi cantrips não podem ser removidos como truques comuns, salvo retraining da fonte;
- rank 10 usa `Infinite Mind`.

### F.9. Magus

- preparada limitada, arcana, Inteligência;
- 5 truques preparados;
- usa a progressão em onda;
- grimório inicial: 8 truques arcanos e 4 magias arcanas de rank 1;
- adicionar 2 magias arcanas ao grimório a cada nível;
- perder slots baixos não remove magias do grimório;
- qualifica-se para requisitos de ranks inferiores já alcançados;
- slots estudioso são pools separados e restritos.

Slots estudioso:

- níveis 7–10: 2 slots de rank 2;
- níveis 11–12: 2 slots de rank 3;
- níveis 13–20: 2 slots de rank 4;
- lista-base: `Gecko Grip`, `Sure Strike`, `Water Breathing` e magia da Hybrid Study;
- no rank 3, adicionar `Haste` e grant da Hybrid Study;
- no rank 4, adicionar `Fly` e grant da Hybrid Study;
- a lista efetiva deve vir dos registros importados, pois estudos e conteúdo remaster/legado podem alterar nomes e concessões.

Spellstrike:

- não altera a propriedade do slot;
- a magia deve ser válida para Spellstrike;
- o slot é consumido mesmo se o alvo for inválido após a execução, conforme a resolução;
- `Double Spellstrike` deve ser modelado como estado temporário de repetição, não como slot adicional.

### F.10. Summoner

- espontânea limitada, Carisma;
- tradição determinada pelo eidolon;
- 5 truques;
- progressão em onda, sem slots estudioso;
- nível 1: 2 magias de rank 1 no repertório;
- nível 2: 3 magias;
- nível 3: 4 magias;
- nível 4 em diante: máximo-base de 5 magias, antes de grants extras;
- no nível 5 e sempre que um rank de slots for perdido, remover 2 magias do repertório dentro do fluxo obrigatório de progressão;
- ao ganhar dois slots do novo rank, adicionar as duas magias correspondentes;
- a partir do nível 3, todas as magias do repertório são tratadas como características pela regra `Unlimited Signature Spells`;
- eidolon define tradição e grants; importar opções de eidolon, sem switch manual;
- slots do Summoner e recursos do eidolon continuam pertencendo à mesma entrada apenas quando a regra explicitamente compartilhar o recurso.

### F.11. Animista

O Animista deve gerar **duas entradas**:

```text
animist.prepared     → preparada, divina, SAB
animist.apparition   → espontânea, divina, SAB
```

Regras:

- slots não são intercambiáveis;
- magias preparadas não usam slots de aparição;
- magias de aparição não usam slots preparados;
- no nível 1, preparar 2 truques e 1 magia de rank 1;
- no nível 1, possuir 2 truques de aparição e 1 slot de aparição de rank 1;
- escolher 2 aparições nas preparações diárias;
- no nível 7, escolher 3;
- no nível 15, escolher 4;
- uma delas é a aparição primária;
- somente aparições atualmente sintonizadas contribuem para o repertório;
- todas as magias do repertório de aparição são características;
- dispersar uma aparição remove temporariamente seus grants, mas não destrói o registro da opção;
- rank 10 possui apenas o slot especial de aparição, não slot preparado.

---

## G. Arquétipos de conjuração

Cada arquétipo cria uma entrada independente. Slots de classe e arquétipo **NÃO PODEM** ser somados ou usados entre si.

### G.1. Benefícios genéricos

| Benefício obtido | Nível de personagem | Slots concedidos à entrada do arquétipo |
| --- | ---: | --- |
| Dedicação | conforme o arquétipo | truques definidos pela dedicação; não assumir quantidade universal sem ler o registro |
| Basic Spellcasting Benefits | ao obter, normalmente nível 4 | 1 slot de rank 1 |
| Basic Spellcasting Benefits | nível 6 | +1 slot de rank 2 |
| Basic Spellcasting Benefits | nível 8 | +1 slot de rank 3 |
| Expert Spellcasting Benefits | ao obter, normalmente nível 12 | 1 slot de rank 4 e proficiência prevista |
| Expert Spellcasting Benefits | nível 14 | +1 slot de rank 5 |
| Expert Spellcasting Benefits | nível 16 | +1 slot de rank 6 |
| Master Spellcasting Benefits | ao obter, normalmente nível 18 | 1 slot de rank 7 e proficiência prevista |
| Master Spellcasting Benefits | nível 20 | +1 slot de rank 8 |

Para entradas espontâneas de arquétipo, aplicar magias características nos marcos previstos pela característica. Talentos de `Breadth` e equivalentes alteram slots somente conforme o texto importado.

O sistema **NÃO DEVE**:

- conceder rank 9 ou 10 pela progressão genérica de arquétipo;
- assumir que toda dedicação concede exatamente 2 truques;
- compartilhar repertório com a classe-base sem regra explícita;
- compartilhar grimório apenas por igualdade de tradição, exceto quando a regra declarar, como fontes que usam o mesmo spellbook.

---

## H. Quem pode adicionar, preparar e conjurar cada magia

### H.1. Algoritmo de acesso ao catálogo

```ts
function canSelectSpell(ctx: SelectSpellContext): ValidationResult {
  require(ctx.entry.active);
  require(ctx.spell.isSupportedByRulesEdition(ctx.character.rulesEdition));
  require(ctx.requestedRank >= ctx.spell.baseRank);
  require(ctx.requestedRank <= ctx.entry.maximumLearnableRank);

  const onTraditionList = ctx.spell.traditions.includes(ctx.entry.tradition);
  const explicitGrant = ctx.character.grants.matches(ctx.entry, ctx.spell, ctx.requestedRank);
  require(onTraditionList || explicitGrant);

  require(rarityAccessAllows(ctx.character, ctx.spell, explicitGrant));
  require(collectionRulesAllow(ctx.entry.collectionType, ctx.spell));
  require(sourceSpecificRestrictionsAllow(ctx));
  require(capacityAllows(ctx));

  return valid();
}
```

### H.2. Regras por coleção

#### Lista preparada

Clérigo, Druida e a entrada preparada do Animista podem preparar:

- magias comuns da tradição;
- magias da tradição às quais ganharam acesso e aprenderam;
- magias explicitamente adicionadas à lista por uma fonte.

#### Grimório

Mago e Magus só podem preparar uma magia que exista no grimório no rank adequado, salvo preparação fixa explicitamente concedida.

#### Familiar

Bruxa só pode preparar magias conhecidas pelo familiar. O familiar é a fonte lógica da coleção, mas a coleção deve sobreviver a estados temporários do token/familiar.

#### Repertório

Bardo, Feiticeiro, Oráculo, Psíquico e Summoner só conjuram magias registradas em seu repertório da entrada correta.

#### Aparições

Animista espontâneo só conjura magias concedidas pelas aparições atualmente sintonizadas.

### H.3. Grants de opção

O importador deve produzir grants para, no mínimo:

- magias de divindade do Clérigo;
- currículo e slots da escola de Mago;
- tradição e lições de patrono da Bruxa;
- tradição, dádivas e foco da linhagem de Feiticeiro;
- grants do mistério e Divine Access do Oráculo;
- mente consciente e subconsciente do Psíquico;
- tradição e grants do eidolon do Summoner;
- magias e vessel spell das aparições do Animista;
- Hybrid Study e slots estudioso do Magus;
- domínios, ordens, musas, talentos, ancestralidades e arquétipos.

Nenhuma dessas opções deve ser implementada como texto não executável.

---

## I. Validação de preparação

```ts
function validatePreparation(input: PrepareSpellInput): ValidationResult {
  require(input.entry.mode === "PREPARED");
  require(input.slot.currentState !== "LOCKED");
  require(input.slot.rank >= input.spell.baseRank);
  require(input.entry.canAccess(input.spell));
  require(input.entry.collection.contains(input.spell, input.preparedRank));
  require(input.slot.restriction.accepts(input.spell, input.preparedRank));
  require(input.preparedRank === input.slot.rank);
  return valid();
}
```

Regras:

- o rank efetivo de uma magia preparada é o rank do slot;
- uma versão elevada é a mesma magia preparada em slot maior;
- nenhum slot pode conter duas magias;
- a mesma magia pode ocupar vários slots;
- slots vazios são permitidos, mas não podem ser conjurados;
- confirmar preparações deve substituir o conjunto diário em uma operação atômica;
- preparações acima do limite devem ser rejeitadas no backend, não apenas bloqueadas pela interface.

---

## J. Validação de repertório e elevação espontânea

```ts
function validSpontaneousRanks(known: RepertoireSpell, entry: SpellcastingEntry): number[] {
  if (known.isSignature) {
    return entry.availableSlotRanks.filter(rank => rank >= known.spell.baseRank);
  }
  return [known.learnedRank];
}
```

Também é permitido gastar um slot de rank superior para lançar a magia no rank aprendido sem elevá-la, quando a regra geral aplicável permitir. Nesse caso:

- `slotRank` é o rank do recurso consumido;
- `castRank` permanece o rank aprendido;
- nenhum benefício de elevação é aplicado.

O modelo deve guardar ambos os valores.

```ts
interface SpontaneousCastSelection {
  spellId: string;
  learnedRank: number;
  castRank: number;
  slotRank: number;
  signatureSourceId?: string;
}
```

---

## K. Recursos que não são slots normais

### K.1. Foco

- reservatório global por personagem, mesmo com fontes diferentes, salvo regra explícita em contrário;
- máximo normal = `min(3, quantidade de magias de foco conhecidas que custam Pontos de Foco)`;
- truques de foco, composition cantrips e outros focos de custo 0 não aumentam o máximo;
- a primeira magia de foco de custo 1 cria o reservatório;
- uma classe pode estabelecer um valor inicial excepcional, como o Psíquico com 2 pontos;
- custo normalmente 1, mas o sistema deve usar o custo estruturado da magia;
- Refocar recupera 1 por 10 minutos, salvo modificação específica;
- registrar origem de cada gasto para regras como a recuperação especial do Psíquico.

### K.2. Magias inatas

Cada grant possui contador próprio ou pool explicitamente compartilhado:

```ts
interface InnateSpellGrant {
  spellId: string;
  tradition: Tradition;
  ability: string;
  castRank: number | "AUTO_HEIGHTEN";
  maximumUses: number | null;
  recharge: "DAILY_PREPARATIONS" | "HOURLY" | "ENCOUNTER" | "NEVER" | "CUSTOM";
}
```

Magia inata não consome slot de classe e não deve ser movida para repertório automaticamente.

### K.3. Rituais

- não usam slots;
- requerem conhecimento, rank permitido, perícias, tempo, custo e participantes;
- `maximumRitualRank = ceil(characterLevel / 2)`, salvo regra específica;
- conhecer ritual é independente de ser conjurador com slots.

### K.4. Itens

Varinha, pergaminho, cajado e item ativado usam recursos do item. O sistema deve validar:

- tradição/entrada compatível quando exigida;
- requisito de possuir Cast a Spell;
- rank do item;
- cargas, frequência ou consumo;
- CD do item ou do usuário;
- regras diferentes para conjurador preparado e espontâneo em cajados;
- destruição do consumível somente após confirmação.

---

## L. Preparações diárias como transação

```ts
interface DailyPreparationCommand {
  characterId: string;
  preparationCycleId: string;
  preparedSlotsByEntry: Record<string, PreparedSlotInput[]>;
  selectedApparitions?: string[];
  primaryApparitionId?: string;
  investedItemIds?: string[];
}
```

Ao confirmar, o backend deve:

1. validar que o personagem descansou e ainda não concluiu preparações naquele ciclo;
2. recalcular todas as entradas a partir de classe, nível, opções, talentos e efeitos permanentes;
3. gerar/remover pools conforme progressão sem apagar histórico;
4. validar e salvar preparações;
5. recalcular repertórios dinâmicos, especialmente aparições;
6. restaurar slots normais e especiais;
7. restaurar Pontos de Foco;
8. restaurar usos diários inatos e de itens;
9. processar efeitos que terminam nas próximas preparações;
10. registrar evento idempotente.

O comando deve falhar por inteiro se qualquer preparação exceder limites ou violar restrição.

---

## M. Validação de conjuração

```ts
function validateCast(ctx: CastContext): ValidationResult {
  require(ctx.entry.active);
  require(ctx.character.canActFor(ctx.actionCost));
  require(ctx.spellBelongsToEntry());
  require(ctx.castRankIsAllowed());
  require(ctx.resourceIsAvailable());
  require(ctx.variantIsValid());
  require(ctx.costsAreAvailable());
  require(ctx.targetsAndAreaAreValid());
  require(ctx.rangeAndLineOfEffectAreValid());
  require(ctx.sourceRestrictionsAreValid());
  return valid();
}
```

Por modo:

- preparada: exige slot contendo a magia e não gasto;
- espontânea: exige repertório, rank permitido e slot disponível;
- foco: exige magia concedida e Pontos de Foco;
- inata: exige grant e uso disponível;
- ritual: exige fluxo de ritual, nunca slot;
- item: exige item e recurso do item.

Erros devem usar códigos estáveis, por exemplo:

```text
SPELL_ENTRY_INACTIVE
SPELL_NOT_IN_COLLECTION
SPELL_NOT_IN_REPERTOIRE
SPELL_RANK_NOT_AVAILABLE
SPELL_SLOT_UNAVAILABLE
SPELL_SLOT_RESTRICTED
SPELL_REPERTOIRE_CAPACITY_EXCEEDED
SPELL_PREPARATION_CAPACITY_EXCEEDED
SPELL_RARITY_ACCESS_REQUIRED
SPELL_OPTION_GRANT_REQUIRED
SPELL_FOCUS_POINTS_INSUFFICIENT
SPELL_INNATE_USES_EXHAUSTED
SPELL_ITEM_RESOURCE_EXHAUSTED
SPELL_TARGET_INVALID
SPELL_RANGE_INVALID
SPELL_LINE_OF_EFFECT_BLOCKED
```

---

## N. Persistência de estados inválidos e migração

Uma atualização de regra pode tornar uma ficha antiga inválida. O QuestHub:

- não deve apagar magias ou slots silenciosamente;
- deve marcar o estado com `validationIssues`;
- deve impedir novas operações inválidas;
- deve oferecer migração determinística;
- deve permitir override explícito do Mestre com motivo e auditoria;
- deve manter o snapshot de regras usado quando a escolha foi feita.

```ts
interface Pf2eValidationIssue {
  code: string;
  severity: "WARNING" | "ERROR";
  entityId: string;
  ruleSourceId: string;
  messageKey: string;
  suggestedFix?: unknown;
}
```

---

## O. Requisitos de interface

### O.1. Tela de uso durante a sessão

Deve mostrar somente:

- entrada;
- rank;
- nome e ícone;
- ações;
- alcance/alvo/área;
- defesa ou ataque;
- duração relevante;
- estado do recurso;
- botão de conjurar;
- botão pequeno para abrir a ficha completa.

### O.2. Gerenciamento separado

O gerenciador deve:

1. exigir a seleção da entrada;
2. filtrar automaticamente o catálogo pelo acesso real;
3. explicar por que uma magia está bloqueada;
4. mostrar capacidade atual e máxima;
5. separar `adicionar à coleção`, `aprender`, `preparar` e `conjurar`;
6. impedir overbooking no backend;
7. exibir pools especiais separados;
8. nunca apresentar um botão gigante de salvar ocupando a área de conteúdo;
9. salvar alterações em transação curta e explícita.

---

## P. Casos de aceitação obrigatórios

### P.1. Mago nível 3

- slots normais: 3 de rank 1 e 2 de rank 2;
- currículo normal: 1 slot restrito de rank 1 e 1 de rank 2, além do truque de currículo;
- não pode preparar magia que não esteja no grimório;
- pode preparar a mesma magia em vários slots;
- magia primal comum sem tradição arcana ou grant deve ser recusada.

### P.2. Clérigo nível 5

- slots normais: 3/3/2 para ranks 1/2/3;
- Fonte Divina: 5 slots extras de rank 3;
- slots da fonte não aceitam magia arbitrária;
- magia concedida pela divindade fora da lista divina pode ser preparada como divina quando o rank estiver disponível.

### P.3. Feiticeiro nível 5

- slots: 4/4/3;
- repertório e tradição dependem da linhagem;
- magia não característica conhecida em rank 1 não pode ser elevada automaticamente para rank 3;
- magia característica pode usar ranks permitidos.

### P.4. Psíquico nível 5

- slots: 2/2/1;
- 3 truques escolhidos + psi cantrips concedidos;
- pool de foco máximo 3 após a característica do nível 5;
- amps gastam foco sem serem slots.

### P.5. Magus nível 7

- slots normais: 2 de rank 3 e 2 de rank 4;
- slots antigos de rank 1 e 2 não existem;
- 2 slots estudioso de rank 2 existem separadamente;
- slots estudioso rejeitam magia fora da whitelist;
- magias antigas continuam no grimório.

### P.6. Summoner nível 5

- slots: 2 de rank 2 e 2 de rank 3;
- repertório-base total: 5 magias;
- deve processar perda de duas magias antigas quando perde o rank 1;
- todas as magias do repertório são características desde o nível 3;
- tradição é a do eidolon.

### P.7. Animista nível 10

- cada rank 1–3: 2 slots preparados +2 slots de aparição;
- ranks 4–5: 2 preparados +1 de aparição;
- não pode usar slot preparado para magia de aparição;
- repertório muda com as aparições sintonizadas;
- possui 3 aparições sintonizadas no nível 10.

### P.8. Arquétipo

Personagem nível 8 com apenas Basic Spellcasting Benefits:

- 1 slot de rank 1;
- 1 slot de rank 2;
- 1 slot de rank 3;
- nenhum slot rank 4+;
- entrada separada da classe principal.

### P.9. Classe sem slots

Um Kineticista puro:

- não recebe entrada de slots;
- impulsos não aparecem como magias;
- pode possuir magia inata, foco concedido ou entrada de arquétipo separada.

---

## Q. Artefatos canônicos que o importador deve resolver

O gerador PF2e deve produzir um grafo resolvido a partir dos packs do snapshot. No mínimo, a geração de limites e acesso deve considerar:

- classes e características de classe;
- arquétipos e benefícios de conjuração;
- magias, rituais e efeitos de magia;
- divindades e magias concedidas;
- escolas e currículos de Mago;
- patronos e lições de Bruxa;
- linhagens de Feiticeiro;
- mistérios de Oráculo;
- mentes conscientes e subconscientes de Psíquico;
- eidolons de Summoner;
- aparições de Animista;
- Hybrid Studies de Magus;
- feats, ancestries, heritages e itens que concedam magia, acesso, slot, foco ou uso inato;
- UUIDs transitivos referenciados por `GrantItem`, regras, descrições estruturadas e efeitos.

O relatório da geração deve conter:

```ts
interface SpellRulesCompatibilityReport {
  unknownProgressions: string[];
  unresolvedSpellGrants: string[];
  unresolvedTraditionSelectors: string[];
  invalidSlotRestrictions: string[];
  orphanSourceUuids: string[];
  legacyRemasterCollisions: string[];
}
```

O CI deve falhar quando qualquer coleção acima possuir item sem allowlist e justificativa.

---

## R. Definition of Done para implementação

A implementação só está concluída quando:

- [ ] todas as classes com slots possuem tabela de nível 1–20;
- [ ] classes sem slots não recebem entrada indevida;
- [ ] opções dinâmicas determinam tradição e grants sem switch incompleto;
- [ ] slots normais, restritos, foco, inatos e itens são pools separados;
- [ ] o backend rejeita preparação, repertório e casts acima do limite;
- [ ] ranks são calculados pela progressão correta;
- [ ] magias características funcionam por rank;
- [ ] grimório, familiar, repertório e lista são coleções distintas;
- [ ] raridade e acesso são validados;
- [ ] arquétipos geram entradas independentes;
- [ ] preparações diárias são idempotentes e atômicas;
- [ ] nenhum dado inválido é apagado silenciosamente;
- [ ] testes cobrem todos os casos da seção P;
- [ ] o relatório de compatibilidade do snapshot apresenta zero progressões desconhecidas e zero grants sem referência resolvida.

---

# Parte II — Regras gerais de conjuração e resolução


## 1. Conceitos fundamentais

### 1.1. Rank da magia

Magias possuem um **rank**, normalmente de 1 a 10, que representa seu poder. O rank da magia não é o mesmo que o nível do personagem.

Em condições normais, o maior rank disponível para um conjurador completo acompanha aproximadamente metade do nível do personagem:

- níveis 1–2: rank 1;
- níveis 3–4: rank 2;
- níveis 5–6: rank 3;
- e assim por diante;
- níveis 19–20: rank 10.

A progressão pode variar conforme a classe, arquétipo ou tipo de conjuração.

### 1.2. Slot de magia

Um **slot de magia** representa a capacidade de conjurar uma magia de determinado rank. O slot não é uma magia por si só.

- Em conjuração preparada, o slot normalmente contém uma magia específica.
- Em conjuração espontânea, o slot é um recurso consumido para lançar uma magia conhecida.
- Magias de foco, magias inatas e rituais não usam slots normais de classe.

### 1.3. Entrada de conjuração

Um mesmo personagem pode possuir várias fontes independentes de magia:

- magias arcanas de Mago;
- magias divinas de um arquétipo de Clérigo;
- magias de foco;
- magias inatas de ancestralidade;
- magias concedidas ou ativadas por itens;
- rituais conhecidos.

Cada fonte deve ser tratada pelo sistema como uma **entrada de conjuração independente**, com:

- nome e origem;
- tradição;
- atributo de conjuração;
- proficiência;
- CD de magia;
- modificador de ataque mágico;
- tipo de conjuração;
- ranks disponíveis;
- slots;
- repertório, grimório ou lista disponível.

Uma magia adicionada ao personagem deve sempre pertencer a uma entrada de conjuração específica.

---

## 2. Tradições mágicas

Pathfinder 2e possui quatro tradições mágicas principais:

- **Arcana**
- **Divina**
- **Ocultista**
- **Primal**

A tradição determina principalmente quais magias normalmente podem ser aprendidas ou preparadas. Classes, talentos, divindades, patronos e outras habilidades podem criar exceções.

### Regra para o sistema

A compatibilidade não deve ser inferida apenas pela magia. O sistema deve considerar:

1. a tradição da entrada de conjuração;
2. as tradições da magia no catálogo;
3. exceções concedidas por classe, talento, divindade, patrono ou habilidade.

---

## 3. Preparações diárias

O personagem pode descansar uma vez a cada 24 horas. Esse descanso normalmente dura 8 horas. Depois dele, as preparações diárias levam aproximadamente 1 hora.

Durante as preparações diárias:

- conjuradores recuperam seus slots;
- conjuradores preparados escolhem as magias do dia;
- todos os Pontos de Foco são recuperados;
- habilidades e frequências diárias são renovadas;
- usos diários de itens mágicos são renovados;
- equipamentos podem ser organizados;
- até 10 itens mágicos vestidos podem ser investidos.

### 3.1. Restrições

- Só é possível preparar depois de descansar.
- Só é possível realizar preparações diárias uma vez por dia.
- Trocar uma magia por uma habilidade especial durante o dia não equivale a novas preparações.
- Efeitos que duram até as próximas preparações devem ser processados nesse momento.

### 3.2. Comportamento esperado no QuestHub

A ação **Realizar preparações diárias** deve:

1. restaurar todos os slots;
2. restaurar todo o reservatório de Foco;
3. restaurar usos diários de magias inatas;
4. restaurar usos diários de itens;
5. abrir o fluxo de preparação das entradas preparadas;
6. manter repertórios espontâneos sem alterações;
7. recalcular ranks, CDs e recursos;
8. processar efeitos que terminam nas próximas preparações;
9. registrar o ciclo da última preparação.

Ela não deve apagar magias conhecidas, grimórios, repertórios, magias de foco, magias inatas ou rituais.

---

## 4. Magias preparadas

Exemplos de classes preparadas:

- Clérigo;
- Druida;
- Bruxa;
- Mago;
- Magus, com progressão limitada própria.

A coleção disponível varia por classe. Ela pode vir de:

- toda uma lista de tradição;
- um grimório;
- um familiar;
- uma divindade;
- outra coleção definida pela classe.

Ser preparado não significa automaticamente conhecer todas as magias da tradição.

### 4.1. Funcionamento

Durante as preparações diárias, o jogador escolhe:

- qual magia será preparada;
- em qual slot;
- em qual rank.

Cada slot normalmente contém uma magia. Quando ela é conjurada:

- o slot é consumido;
- aquela preparação fica indisponível;
- o slot permanece gasto até ser recuperado.

Para lançar a mesma magia várias vezes, normalmente é preciso prepará-la em vários slots.

### 4.2. Exemplo

Um Mago possui três slots de rank 1 e prepara:

- Slot 1: Force Barrage;
- Slot 2: Mystic Armor;
- Slot 3: Force Barrage.

Ele pode lançar Force Barrage duas vezes e Mystic Armor uma vez.

### 4.3. Truques preparados

Truques não ocupam slots. O personagem seleciona uma quantidade de truques nas preparações e pode usá-los livremente até as próximas preparações.

### 4.4. Requisitos para a ficha

Cada slot deve guardar:

- rank;
- magia preparada;
- rank efetivo;
- estado disponível ou gasto;
- variante escolhida;
- origem;
- dados de elevação.

A interface deve permitir:

- preparar uma magia em um slot;
- repetir a mesma magia em vários slots;
- substituir preparações antes de confirmar;
- visualizar slots vazios;
- visualizar slots gastos sem apagar sua magia;
- restaurar slots nas preparações diárias.

---

## 5. Magias espontâneas

Exemplos de classes espontâneas:

- Bardo;
- Feiticeiro;
- Oráculo;
- Psíquico;
- Summoner, com progressão limitada própria.

O conjurador espontâneo possui um **repertório de magias conhecidas**.

### 5.1. Funcionamento

No momento da conjuração, o jogador escolhe:

1. uma magia do repertório;
2. um rank válido;
3. um slot disponível daquele rank.

O slot é consumido, mas a magia continua no repertório.

### 5.2. Repertório

O repertório:

- é limitado pela classe;
- não é refeito durante as preparações diárias;
- normalmente muda ao subir de nível, retreinar ou usar habilidade específica;
- registra o rank em que cada magia foi aprendida.

### 5.3. Elevação espontânea

Normalmente, o personagem precisa conhecer a magia no rank exato em que pretende elevá-la.

Exemplo:

- Fireball conhecida no rank 3 pode ser lançada como rank 3;
- ela não pode ser elevada automaticamente para rank 4;
- o personagem pode aprendê-la novamente nesse rank ou usar a regra de magia característica.

É possível gastar um slot maior para conjurar a magia no rank conhecido sem elevá-la. Nesse caso, o slot maior é gasto, mas a magia não recebe benefícios de elevação.

### 5.4. Magias características

Muitas classes espontâneas possuem magias características ou regra equivalente. Elas permitem elevar determinadas magias sem aprendê-las separadamente em cada rank.

A quantidade e a seleção dependem da classe. O sistema não deve presumir uma regra universal idêntica para todos.

### 5.5. Requisitos para a ficha

Cada magia conhecida deve guardar:

- entrada de conjuração;
- rank aprendido;
- estado de magia característica;
- ranks permitidos;
- variantes.

Os slots devem ser controlados separadamente por rank, com valor máximo e atual.

---

## 6. Truques

Truques são magias de uso livre.

### Regras

- Não consomem slots.
- Podem ser usados qualquer quantidade de vezes por dia.
- São automaticamente elevados para metade do nível do personagem, arredondada para cima.
- Conjuradores preparados selecionam seus truques durante as preparações.
- Conjuradores espontâneos os possuem no repertório.

Exemplo para um personagem de nível 5:

`ceil(5 / 2) = rank 3`

### Requisitos para a ficha

Truques devem mostrar:

- rank efetivo;
- ações;
- alcance ou área;
- ataque ou defesa;
- resumo do efeito;
- botão para abrir a ficha completa.

Não devem mostrar slots ou botão de consumo.

---

## 7. Magias de foco

Magias de foco são concedidas por características de classe, talentos, divindades, ordens, domínios e outras fontes específicas. Elas não são escolhidas livremente de uma lista comum.

### 7.1. Reservatório de Foco

O máximo normal é o menor valor entre:

- a quantidade de magias de foco conhecidas que gastam Pontos de Foco;
- 3.

Exemplos:

- 1 magia de foco: máximo 1;
- 2 magias de foco: máximo 2;
- 4 magias de foco: máximo 3.

Habilidades específicas podem modificar isso.

### 7.2. Custo e reservatório único

Normalmente, cada magia de foco custa 1 Ponto de Foco.

- Pontos de Foco não lançam magias normais.
- Slots não lançam magias de foco.
- O personagem possui um único reservatório, mesmo com fontes diferentes.
- A tradição e o atributo de cada magia continuam definidos por sua origem.

### 7.3. Recuperação

Todos os Pontos de Foco voltam durante as preparações diárias.

A atividade **Refocar**:

- dura 10 minutos;
- recupera 1 Ponto de Foco;
- exige uma atividade relacionada à fonte da magia;
- pode ser repetida até completar o reservatório.

Essa é a regra remasterizada. A antiga restrição de Refocar apenas depois de gastar um ponto desde a última vez não deve ser aplicada automaticamente.

### 7.4. Elevação

Magias de foco são automaticamente elevadas para metade do nível do personagem, arredondada para cima.

### 7.5. Truques de foco

Algumas habilidades são truques de foco. Eles:

- não gastam Pontos de Foco;
- não aumentam o máximo do reservatório;
- podem ser usados livremente;
- são elevados automaticamente.

### 7.6. Requisitos para a ficha

A ficha deve possuir um único controle global de Pontos de Foco atuais e máximos.

Cada magia deve guardar origem, tradição, atributo, CD, ataque, custo e rank efetivo.

A ação Refocar deve restaurar exatamente 1 ponto, respeitar o máximo e poder ser repetida.

---

## 8. Magias inatas

Magias inatas normalmente vêm de:

- ancestralidade;
- herança;
- talento;
- habilidade especial;
- item que declare explicitamente conceder magia inata.

### 8.1. Regras gerais

A fonte define:

- tradição;
- rank;
- frequência;
- quantidade de usos.

A frequência mais comum é uma vez por dia. Os usos são restaurados nas preparações diárias.

### 8.2. Atributo e proficiência

Como regra geral:

- Carisma é o atributo;
- o personagem se torna treinado em ataque e CD para magias inatas;
- a proficiência aumenta para especialista no nível 12.

A fonte pode substituir essas regras.

### 8.3. Independência dos slots

Magias inatas:

- não usam slots de classe;
- não podem ser lançadas usando slots normais;
- não qualificam o personagem como conjurador para requisitos que exigem slots.

A mesma magia pode existir separadamente como inata, preparada e espontânea.

### 8.4. Elevação

Truques inatos são usados livremente e elevados automaticamente.

Magias inatas normais:

- usam o rank definido pela fonte;
- não podem ser elevadas livremente;
- podem ser concedidas em rank superior ao base se a fonte determinar.

### 8.5. Itens não são sempre magias inatas

Varinhas, pergaminhos e cajados normalmente usam regras próprias de ativação. Só devem ser tratados como magia inata quando o item disser explicitamente isso.

### 8.6. Requisitos para a ficha

Cada magia inata deve controlar:

- origem;
- tradição;
- atributo;
- rank;
- frequência;
- usos atuais e máximos;
- momento de recarga.

---

## 9. Rituais

Rituais são magias complexas e demoradas, separadas da conjuração normal.

### 9.1. Quem pode realizar

Um personagem pode ser conjurador primário mesmo sem slots. Ele deve:

- conhecer o ritual;
- possuir a proficiência exigida na perícia principal;
- respeitar o limite de rank;
- realizar o teste primário.

Outros personagens podem atuar como conjuradores secundários.

### 9.2. Rank máximo

O rank não pode ser maior que metade do nível do conjurador primário, arredondada para cima.

### 9.3. Slots, tempo e custo

Rituais:

- não consomem slots;
- levam no mínimo 1 hora;
- normalmente são atividades de recesso;
- frequentemente levam dias;
- podem exigir custos materiais;
- usam testes de perícia;
- possuem resultados por grau de sucesso.

Cada dia de ritual prolongado normalmente exige 8 horas de participação.

### 9.4. Elevação

O ritual pode ser elevado até metade do nível do conjurador, arredondada para cima, quando é iniciado.

### 9.5. Requisitos para a ficha

Rituais devem ficar em área separada das magias de combate e guardar:

- ritual conhecido;
- rank base e escolhido;
- perícia principal e secundárias;
- conjuradores participantes;
- tempo;
- custo;
- alvos;
- CD;
- progresso;
- resultado.

---

## 10. Modos especiais

### 10.1. Conjuração limitada

Magus e Summoner possuem menos slots e progressão diferente. Isso não exige um novo tipo fundamental:

- Magus continua preparado;
- Summoner continua espontâneo.

A progressão de slots deve ser configurável.

### 10.2. Preparação flexível

Algumas opções transformam a preparação tradicional em um modelo híbrido: o personagem prepara uma coleção menor e depois usa os slots de forma mais flexível.

Isso deve ser representado como modificador da entrada, não como controle manual fora das regras.

### 10.3. Arquétipos

Arquétipos podem conceder tradição, atributo, proficiência, slots e entrada próprios. Recursos de uma entrada não devem ser usados automaticamente por outra.

---

## 11. Elevação de magias

Elevar significa conjurar em rank superior ao rank base.

### Conjurador preparado

O rank efetivo é definido pelo slot em que a magia foi preparada.

### Conjurador espontâneo

Normalmente precisa conhecer a magia no rank desejado, salvo magia característica ou regra específica.

### Benefícios

A magia elevada:

- passa a ter o rank do slot;
- pode aumentar dano, alvos, duração, alcance ou área;
- usa o novo rank em neutralização e dissipação.

#### Elevação por intervalo

`Elevada (+1): o dano aumenta em 2d6.`

O benefício é acumulado a cada rank acima do base.

#### Elevação em rank específico

Entradas como “Elevada no rank 4” ou “Elevada no rank 6” aplicam mudanças específicas descritas pela magia.

### Ordem de cálculo no sistema

1. identificar a entrada;
2. determinar a variante;
3. determinar o rank efetivo;
4. aplicar elevação;
5. recalcular dano, alcance, área, alvos e efeitos;
6. validar o recurso consumido.

---

## 12. Variantes e ações variáveis

Algumas magias mudam conforme:

- quantidade de ações;
- tipo de alvo;
- modo ofensivo ou defensivo;
- criatura viva ou morta-viva;
- escolha feita pelo jogador.

### Exemplo: Heal

Heal pode ter efeitos diferentes com 1, 2 ou 3 ações. Essas versões devem ser variantes da mesma magia, preservando magia base, entrada, slot, rank e escolhas.

Antes de confirmar, a interface deve permitir escolher ações, variante, rank, alvo ou área e demais opções obrigatórias.

---

## 13. Conjurando uma magia

A ficha define o tempo ou custo de ações:

- 1, 2 ou 3 ações;
- reação;
- ação livre;
- 1 minuto;
- 10 minutos;
- 1 hora ou mais.

### 13.1. Manifestações

Na maioria dos casos, conjurar:

- exige gestos;
- exige palavras;
- produz manifestações perceptíveis;
- revela que alguma magia está sendo lançada.

Magias com o traço **sutil** podem não ter manifestações óbvias. Ser incapaz de falar normalmente impede a maioria das conjurações, salvo regra específica ou adaptação do Mestre.

### 13.2. Custos e locus

Algumas magias exigem dinheiro, gemas, reagentes ou outro recurso consumível. Custos são gastos durante a conjuração.

Um locus é necessário para canalizar a magia, mas normalmente não é destruído.

### 13.3. Conjuração longa

Magias que levam minutos ou horas:

- são atividades de exploração;
- normalmente não podem ser usadas em encontro;
- impedem outras ações e reações durante a execução;
- podem ser interrompidas se um combate começar.

### 13.4. Interrupção

Quando a conjuração é interrompida:

- não produz efeito;
- as ações já foram gastas;
- o slot ou uso é perdido;
- os custos permanecem gastos.

Se a interrupção ocorrer ao Sustentar, o efeito sustentado termina.

---

## 14. Alcance, alvo, área e linha de efeito

### 14.1. Alcance

Pode ser pessoal, toque, medido ou especial. Magia de toque usa o alcance desarmado do personagem.

### 14.2. Alvo

Um alvo deve:

- estar no alcance;
- ser um tipo válido;
- normalmente ser percebido com sentido preciso;
- respeitar requisitos como criatura viva, objeto ou criatura voluntária.

O jogador pode declarar seu personagem voluntário ou involuntário mesmo fora do próprio turno.

### 14.3. Área

Áreas básicas comuns:

- explosão;
- cone;
- emanação;
- linha.

Magias específicas podem definir geometrias adicionais. Uma magia com área, mas sem alvos, normalmente afeta indiscriminadamente todas as criaturas na área.

### 14.4. Linha de efeito

Normalmente deve existir caminho desobstruído até o alvo, origem da área ou ponto de criação.

### 14.5. Requisitos para o VTT

Validar:

1. distância;
2. alcance;
3. tipo de alvo;
4. quantidade máxima;
5. voluntariedade;
6. linha de efeito;
7. geometria;
8. criaturas afetadas.

O Mestre deve poder sobrescrever validações que dependam de julgamento.

---

## 15. Duração, Sustentar e Dispensar

### 15.1. Duração

Pode ser instantânea, por turno, rodadas, minutos, horas, até preparações, ilimitada ou sustentada.

Em duração por rodadas, a contagem normalmente diminui no início do turno do conjurador.

A morte ou incapacidade do conjurador não encerra automaticamente todo efeito; a magia normalmente continua até o fim da duração, salvo regra específica.

### 15.2. Sustentar

Uma magia sustentada dura até o final do próximo turno do conjurador, a menos que ele use a ação Sustentar nesse turno. A magia pode produzir efeitos adicionais ao ser sustentada.

### 15.3. Dispensar

Algumas magias podem ser encerradas antes do fim pela ação Dispensar. Nem toda magia permite isso.

### 15.4. Requisitos para o VTT

Efeitos ativos devem guardar:

- conjurador;
- magia e rank;
- rodada de início;
- expiração;
- necessidade de Sustentar;
- última sustentação;
- possibilidade de Dispensar;
- alvos;
- condições;
- template ou área vinculada.

---

## 16. Defesas e ataques mágicos

### 16.1. CD de magia

Quando a magia exige salvaguarda, o alvo rola contra a CD do conjurador:

- Fortitude;
- Reflexos;
- Vontade.

### 16.2. Salvaguarda básica

- sucesso crítico: nenhum dano;
- sucesso: metade;
- falha: dano completo;
- falha crítica: dobro.

Isso se aplica ao dano. Efeitos adicionais seguem o texto.

### 16.3. Salvaguardas personalizadas

Muitas magias definem efeitos próprios para cada grau de sucesso. O sistema não pode presumir salvaguarda básica para toda magia.

### 16.4. Ataque mágico

Ataques mágicos:

- são comparados à CA;
- usam o modificador de ataque mágico;
- recebem bônus e penalidades gerais em ataques;
- sofrem penalidade por ataques múltiplos;
- não recebem automaticamente benefícios específicos de armas.

### 16.5. Exibição resumida

Mostrar, quando aplicável:

- `Ataque +X`;
- `Fortitude CD X`;
- `Reflexos CD X`;
- `Vontade CD X`;
- `Salvaguarda básica`;
- `Sem defesa`.

---

## 17. Dano, cura, condições e efeitos

Uma magia pode produzir dano, cura, dano persistente, bônus, penalidades, condições, movimento, teletransporte, invocação, transformação ou efeitos narrativos.

### 17.1. Componentes de dano

Cada componente deve ser preservado separadamente.

Exemplo:

- 4d6 de fogo;
- 2d6 de força;
- 1d6 persistente de fogo.

Isso permite aplicar corretamente imunidades, resistências, fraquezas, crítico, dano persistente e salvaguarda básica.

### 17.2. Condições

Registrar:

- condição e valor;
- duração;
- origem;
- grau de sucesso;
- regra de término;
- remoção;
- imunidade temporária, quando houver.

### 17.3. Efeitos duplicados

Quando a mesma criatura recebe o mesmo efeito várias vezes, normalmente apenas uma instância se aplica, usando a de maior nível ou rank, ou a mais recente em caso de igualdade.

---

## 18. Neutralização

Algumas magias e habilidades neutralizam efeitos mágicos.

O processo utiliza:

- modificador;
- CD;
- rank de neutralização;
- rank do efeito alvo;
- grau de sucesso.

Regra geral:

- sucesso crítico: até 3 ranks superior;
- sucesso: até 1 rank superior;
- falha: apenas efeito de rank inferior;
- falha crítica: não neutraliza.

Para dissipar, pelo menos uma criatura, objeto ou manifestação do efeito deve estar dentro do alcance.

### Requisitos para o sistema

Guardar efeito de origem, efeito alvo, modificador, CD, ranks, resultado do d20, grau de sucesso e resultado final.

---

## 19. Itens que conjuram magias

Itens mágicos podem permitir conjuração sem usar slots de classe.

Categorias comuns:

- pergaminhos;
- varinhas;
- cajados;
- itens investidos;
- itens com ativação;
- itens que concedem magia inata.

O sistema deve distinguir:

1. magia inata concedida;
2. magia ativada pelo item;
3. magia usando cargas;
4. consumível destruído no uso;
5. item que usa sua própria CD;
6. item que usa a CD do personagem;
7. item que exige tradição ou lista compatível.

A tela de magias pode mostrar atalhos, mas os recursos pertencem ao item.

---

## 20. Dados obrigatórios no catálogo

### Identificação

- ID estável;
- nome e descrição;
- fonte;
- raridade;
- rank base;
- tipo: normal, truque, foco ou ritual.

### Classificação

- tradições;
- traços;
- compatibilidade legada;
- requisitos especiais.

### Conjuração

- ações ou tempo;
- reação ou ação livre;
- gatilho;
- requisitos;
- custo;
- locus;
- variantes.

### Aplicação

- alcance;
- alvos;
- área e geometria;
- duração;
- sustentação;
- possibilidade de dispensar;
- defesa;
- ataque mágico.

### Resultados

- dano por tipo;
- cura;
- graus de sucesso;
- condições;
- efeitos vinculados;
- templates;
- invocações;
- neutralização;
- imunidades temporárias.

### Elevação

- rank efetivo;
- intervalos;
- mudanças em ranks específicos;
- alterações de dano, área, alvos e duração.

### Escolas mágicas legadas

Evocação, Abjuração, Conjuração, Ilusão, Necromancia e Transmutação não devem ser o principal filtro do conteúdo remasterizado.

Priorizar:

- tradição;
- traços;
- rank;
- tipo;
- ações;
- defesa;
- dano;
- área;
- duração.

Escolas legadas podem ser mantidas apenas para compatibilidade com conteúdo antigo.

---

## 21. Fluxo de gerenciamento na ficha

### 21.1. Visualização de jogo

Cada magia deve mostrar somente:

- ícone;
- nome;
- rank;
- ações;
- alcance, alvo ou área;
- ataque ou defesa;
- duração relevante;
- traços importantes;
- estado preparado, disponível ou gasto;
- botão para abrir a ficha;
- botão de conjurar.

Formulários de criação e edição não devem ficar misturados à lista de uso.

### 21.2. Gerenciamento

O botão **Gerenciar magias** deve abrir uma área separada:

1. escolher a entrada;
2. pesquisar no catálogo;
3. filtrar por tradição, rank, traços e fonte;
4. adicionar ao grimório, familiar, repertório ou lista;
5. preparar em slots, quando necessário;
6. marcar magias características, quando permitido;
7. confirmar.

### 21.3. Preparadas

O gerenciador deve separar:

- magias disponíveis;
- slots preparados.

Adicionar ao grimório não deve preparar automaticamente.

### 21.4. Espontâneas

Mostrar repertório, limite por rank, rank aprendido, magia característica e slots.

### 21.5. Foco

A aquisição deve ocorrer por classe, talento ou habilidade. O jogador não deve adicionar qualquer magia de foco sem fonte válida, salvo permissão do Mestre.

### 21.6. Inatas

Mostrar origem, frequência, rank e usos restantes.

### 21.7. Rituais

Biblioteca separada, sem slots e sem preparação diária.

---

## 22. Fluxo de conjuração no VTT

Ao clicar em **Conjurar**:

1. identificar a entrada;
2. validar pertencimento da magia;
3. selecionar variante;
4. selecionar ações;
5. selecionar rank;
6. validar slot, foco, uso, carga ou item;
7. aplicar elevação;
8. validar custo e locus;
9. selecionar alvos ou área;
10. validar alcance e linha de efeito;
11. realizar ataque, salvaguarda ou teste;
12. resolver graus de sucesso;
13. calcular dano, cura e efeitos;
14. aplicar imunidades, resistências e fraquezas;
15. criar condições e templates;
16. consumir o recurso;
17. registrar no chat e histórico.

### 22.1. Momento do consumo

O recurso deve ser consumido quando a conjuração é confirmada.

Se a magia for interrompida depois do início, o recurso e os custos permanecem gastos. Cancelar antes da confirmação não consome nada.

### 22.2. Idempotência

Cada conjuração deve possuir identificador único e não pode consumir recurso, causar dano, criar template ou aplicar efeito duas vezes.

---

## 23. Exemplos completos

### 23.1. Mago preparado

Entrada arcana, Inteligência, rank máximo 3, grimório com 14 magias e slots separados por rank.

Durante as preparações, escolhe uma magia para cada slot e seus truques. Durante a sessão, conjurar gasta o slot, mas não remove a magia do grimório.

### 23.2. Feiticeiro espontâneo

Entrada definida pela linhagem, Carisma, repertório por rank, magias características e slots por rank.

Nas preparações, recupera slots sem trocar o repertório. Durante a sessão, escolhe qualquer magia válida conhecida.

### 23.3. Magia de foco

O personagem possui duas magias de foco e reservatório máximo 2. Depois de gastar os dois pontos, pode Refocar por 10 minutos para recuperar 1 e repetir para recuperar o segundo.

### 23.4. Magia inata

Uma ancestralidade concede Darkness rank 2, tradição ocultista, uma vez por dia. Ela possui contador próprio, não usa slots e é restaurada nas preparações.

---

## 24. Correções ao exemplo inicial

### “Preparações acontecem após 8 horas + 1 hora”

Quase correto: o descanso normalmente dura 8 horas e as preparações aproximadamente 1 hora, apenas uma vez por dia e somente depois de descansar.

### “Pontos de foco possuem máximo de 3”

Incompleto: o máximo normal é o menor entre a quantidade de magias de foco que gastam pontos e 3.

### “Refocar recupera os pontos de foco”

Incompleto: cada Refocar dura 10 minutos e recupera exatamente 1 ponto, podendo ser repetido.

### “Magias inatas vêm de ancestralidade ou itens”

Parcialmente correto: podem vir dessas fontes, mas varinhas, pergaminhos e cajados normalmente não são magias inatas.

### “Magias inatas não podem ser elevadas”

Correto para magias normais, com ressalvas: truques inatos são elevados automaticamente e a fonte pode conceder a magia em rank superior.

### “Clérigos, Druidas e Magos são preparados”

Correto, mas incompleto: Bruxas também são exemplo importante e Magus usa preparação com progressão limitada.

### “Bardos e Feiticeiros são espontâneos”

Correto, mas incompleto: Oráculos, Psíquicos e Summoners também usam modelos espontâneos com particularidades.

---

## 25. Resumo operacional

| Tipo | Fonte | Recurso | Escolha ao conjurar | Recuperação |
|---|---|---|---|---|
| Preparada | Lista, grimório, familiar ou coleção | Slots preparados | Magia contida no slot | Preparações diárias |
| Espontânea | Repertório | Slots por rank | Magia válida do repertório | Preparações diárias |
| Truque | Preparado ou conhecido | Nenhum | Livre | Não precisa |
| Foco | Classe ou talento | Pontos de Foco | Magia de foco conhecida | Preparações ou Refocar |
| Inata | Ancestralidade, habilidade ou item específico | Usos próprios | Magia concedida | Frequência definida |
| Ritual | Ritual conhecido | Tempo, testes e custos | Ritual permitido | Não usa slots |
| Item | Item mágico | Carga, frequência ou consumo | Magia do item | Regra do item |

---

## 26. Fontes principais

Baseado nas regras remasterizadas do Pathfinder 2e, principalmente:

- Player Core — Rest and Daily Preparations;
- Player Core — Spell Slots;
- Player Core — Prepared Spells;
- Player Core — Spontaneous Spells;
- Player Core — Heightened Spells;
- Player Core — Cantrips;
- Player Core — Focus Spells;
- Player Core — Innate Spells;
- Player Core — Casting Spells;
- Player Core — Ranges, Areas, and Targets;
- Player Core — Durations;
- Player Core — Defenses;
- Player Core — Spell Attacks;
- Player Core — Counteracting;
- Player Core — Reading Spells;
- Player Core — Rituals.

Referência pública de regras: Archives of Nethys, Pathfinder 2nd Edition.
