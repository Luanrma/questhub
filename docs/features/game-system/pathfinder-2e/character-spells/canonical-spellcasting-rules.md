# Pathfinder 2e — Referência Canônica de Spellcasting

**Status:** RULE REFERENCE / CANÔNICA PARA O QUESTHUB  
**Baseline de revisão:** 2026-08-23  
**Escopo:** Pathfinder 2e Remaster, regras de conjuração, progressões de classe, disponibilidade de spells, Heightening e estatísticas de spellcasting.  
**Não é uma Feature Spec:** este documento registra a regra do jogo e as invariantes que futuras implementações devem respeitar. Specs/ADRs descrevem como o QuestHub implementa essas regras.

## 1. Objetivo

Esta referência existe para impedir que a implementação de Spells seja guiada por suposições locais, textos de UI ou regras lembradas parcialmente.

Qualquer feature futura envolvendo Spells deve conseguir responder, a partir de dados canônicos:

1. qual é a definição da Spell e seu `baseRank`;
2. de onde o Actor obteve capacidade de conjurá-la;
3. qual tradição e atributo de spellcasting se aplicam;
4. qual é a proficiência de Spell Attack / Spell DC naquele nível;
5. quais recursos de conjuração existem naquele nível (slots, Focus Points, fontes especiais etc.);
6. quais Spells estão conhecidas, preparadas ou disponíveis nessa fonte;
7. qual Rank de recurso está sendo gasto;
8. qual é o `effectiveRank` da conjuração;
9. quais regras específicas de Heightening se aplicam;
10. quais features de classe/subclasse alteram qualquer item acima.

## 2. Hierarquia de fontes

Ao existir conflito, usar esta ordem:

1. **Publicação Paizo Remaster vigente** da regra/classe.
2. **Errata/FAQ oficial Paizo** aplicável à publicação.
3. Publicação Paizo mais específica que sobrescreve uma regra geral (`specific overrides general`).
4. **Archives of Nethys** como referência navegável do texto vigente e identificação de livro/página.
5. **PF2e/Foundry** como fonte estruturada útil para importação, nunca como autoridade superior à regra publicada/errata.
6. Dados materializados no QuestHub, sempre vinculados a uma revisão/source snapshot conhecido.

Toda futura materialização mecânica deve registrar, quando possível:

```ts
type CanonicalRuleSource = {
  sourceBook: string
  sourcePage?: number
  sourceRevision?: string
  sourceSnapshot?: string
  reviewedAt: string
}
```

### Baseline de livros consultados nesta revisão

- Player Core — Bard, Cleric, Druid, Witch, Wizard e regras gerais de Spells.
- Player Core 2 — Oracle e Sorcerer.
- War of Immortals — Animist.
- Dark Archives (Remastered) — Psychic.
- Impossible Magic — Magus, Necromancer e Summoner. Publicação lançada em 2026-07-30; para Magus/Summoner esta revisão não deve usar a antiga tabela de Secrets of Magic como baseline vigente.
- Divine Mysteries — regras específicas como Battle Creed/Battle Harbinger quando aplicáveis.

## 3. Separação conceitual obrigatória

### 3.1 Spell Definition

É a definição canônica da Spell e não pertence ao personagem.

Contém, entre outros dados:

```ts
type SpellDefinition = {
  contentId: string
  baseRank: number
  traits: string[]
  traditions: string[]
  specificHeightening: None | Interval | Fixed
  source: CanonicalRuleSource
}
```

`baseRank` nunca deve ser alterado porque alguém conjurou a Spell em Rank maior.

### 3.2 Spellcasting Source

É a origem que permite a um Actor conjurar Spells. Classe é apenas uma possível origem.

Exemplos: class spellcasting, archetype, ancestry/heritage, feat, item, innate ability, focus spell source, ritual.

Uma fonte precisa poder declarar:

- `castingMode`: PREPARED | SPONTANEOUS | INNATE | FOCUS | RITUAL | SPECIAL;
- tradição fixa ou resolver de tradição;
- atributo fixo ou resolver de atributo;
- progressão de proficiência;
- um ou mais resource pools;
- mecanismo de seleção de Spells (spellbook, repertoire, familiar, dirge, apparition etc.);
- regras de Signature Spell ou equivalentes;
- modificadores/overlays provenientes de subclass, doctrine, school, bloodline, eidolon, patron, feats etc.

### 3.3 Spell Availability

É uma resposta contextual, não um atributo da Spell.

Exemplos:

- Wizard: a Spell precisa estar no spellbook e ser preparada em um slot.
- Bard/Sorcerer/Oracle/Psychic/Summoner: a Spell precisa estar no repertoire no Rank apropriado, salvo regras de Signature Spell ou outra exceção.
- Witch: a fonte de Spells é o familiar e a preparação diária.
- Animist: slots preparados e slots de apparition são pools separados e não intercambiáveis.

Portanto, `characterHasSpell = true` é insuficiente para decidir se uma conjuração é legal.

### 3.4 Cast Context

A execução deve distinguir:

```ts
type SpellCastContext = {
  spellDefinitionId: string
  spellcastingSourceId: string
  baseRank: number
  resourcePoolId?: string
  resourceRank?: number
  effectiveRank: number
  availabilityReason: string
}
```

`resourceRank` (por exemplo Rank do slot gasto) e `effectiveRank` não são semanticamente a mesma coisa em todos os modos de conjuração.

## 4. Poder mágico: atributo, proficiência e DC

Spell Attack e Spell DC dependem da **fonte de spellcasting**, não apenas da classe nem do Rank da Spell.

Forma geral:

```text
Spell Attack = d20 + atributo de spellcasting + bônus de proficiência + outros modificadores
Spell DC     = 10  + atributo de spellcasting + bônus de proficiência + outros modificadores
```

Bônus de proficiência:

```text
Untrained = 0
Trained   = level + 2
Expert    = level + 4
Master    = level + 6
Legendary = level + 8
```

### Invariante crítica

**Key Attribute da classe não é sinônimo de Spellcasting Attribute.**

Exemplos atuais:

- Magus: Key Attribute = STR ou DEX; Spell Attack/DC usam **INT**.
- Psychic: INT ou CHA é determinado pelo **Subconscious Mind**.
- Witch: INT, mas a tradição é determinada pelo **Patron**.
- Sorcerer: CHA, tradição determinada pela **Bloodline**.
- Summoner: CHA, tradição determinada pelo **Eidolon**.

O QuestHub nunca deve calcular Spell Attack/DC usando apenas `class.keyAbility`.

## 5. Slots, Spells conhecidas/preparadas e Rank máximo

As tabelas de classe são dados mecânicos. Elas determinam, por nível, pelo menos:

- maior Rank de Spell disponível;
- quantidade de slots por Rank;
- quantidade de cantrips-base quando aplicável;
- acesso especial ao 10th Rank;
- em spontaneous casters, crescimento correlacionado do repertoire;
- em algumas classes, pools extras ou restritos.

Não deve existir uma fórmula universal `slotsByLevel` aplicada a todas as classes.

### 5.1 Perfis recorrentes observados

Os perfis abaixo são normalizações para arquitetura, não substituem a tabela canônica da classe.

**FULL_3** — Bard; Cleric/Druid/Witch/Wizard como slots-base.
- Novo Rank normalmente entra com 2 slots no nível em que é desbloqueado e chega a 3 no nível seguinte.
- Ranks anteriores permanecem com 3 slots.
- 10th-rank é concedido por feature especial, normalmente fora da progressão comum.

**FULL_4_SPONTANEOUS** — Oracle e Sorcerer.
- Novo Rank normalmente entra com 3 slots e chega a 4 no nível seguinte.
- Ranks anteriores permanecem com 4 slots.
- 10th-rank é concedido por feature especial.

**FULL_2** — Psychic, Necromancer e, na revisão atual de Impossible Magic, Magus e Summoner para Ranks 1–9.
- Novo Rank normalmente entra com 1 slot e chega a 2 no nível seguinte.
- Classes desse grupo não são mecanicamente idênticas: Psychic/Necromancer têm suas próprias features de 10th-rank; Magus/Summoner atuais encerram sua tabela-base no 9th-rank.

**CUSTOM_MULTI_POOL** — Animist.
- Possui simultaneamente spellcasting preparado do Animist e spellcasting espontâneo de Apparition.
- A tabela expressa as quantidades separadamente.
- Os pools não são intercambiáveis.

Perfis são apenas uma compressão de leitura. A implementação final deve materializar a progressão por classe/fonte a partir da tabela canônica revisada.

## 6. Matriz atual das classes com spellcasting por slots

| Classe | Fonte vigente | Modo | Tradição | Atributo de spellcasting | Perfil-base / observação |
|---|---|---|---|---|---|
| Animist | War of Immortals p.10 | Prepared + Spontaneous | Divine | WIS | CUSTOM_MULTI_POOL; prepared Animist + apparition repertoire/slots independentes |
| Bard | Player Core p.94 | Spontaneous | Occult | CHA | FULL_3; Signature Spells; Composition Spells usam Focus |
| Cleric | Player Core p.108 | Prepared | Divine | WIS | FULL_3 + Divine Font; doctrine altera progressão de proficiência |
| Druid | Player Core p.122 | Prepared | Primal | WIS | FULL_3; Order/Focus Spells são fonte adicional |
| Magus | Impossible Magic p.9 | Prepared | Arcane | INT | FULL_2 para Ranks 1–9; Key Attribute STR/DEX não é o atributo mágico; proficiência mais lenta |
| Necromancer | Impossible Magic p.27 | Prepared | Occult | INT | FULL_2 + Dirge + Grave/Focus Spells; 10th-rank por Epitaph |
| Oracle | Player Core 2 p.128 | Spontaneous | Divine | CHA | FULL_4_SPONTANEOUS; Signature Spells; Mystery adiciona regras/spells |
| Psychic | Dark Archives (Remastered) p.9 | Spontaneous | Occult | INT ou CHA via Subconscious Mind | FULL_2; Conscious Mind adiciona repertoire/psi cantrips; 10th-rank por Infinite Mind |
| Sorcerer | Player Core 2 p.144 | Spontaneous | via Bloodline | CHA | FULL_4_SPONTANEOUS; Bloodline adiciona spells/cantrip e define tradição |
| Summoner | Impossible Magic p.63 | Spontaneous | via Eidolon | CHA | FULL_2 para Ranks 1–9; repertoire; proficiência mais lenta |
| Witch | Player Core p.178 | Prepared | via Patron | INT | FULL_3; familiar é repositório de Spells; Patron adiciona spells/hexes |
| Wizard | Player Core p.192 | Prepared | Arcane | INT | FULL_3 base + slots/cantrip de currículo conforme Arcane School |

Classes com apenas Focus Spells, innate magic, impulses ou outras capacidades mágicas **não devem ser automaticamente tratadas como slot-based spellcasters**. Essas fontes precisam entrar no mesmo modelo de `SpellcastingSource`, mas com seus próprios recursos.

## 7. Progressão de proficiência de Spell Attack / Spell DC

Proficiência é independente da quantidade de slots.

### 7.1 Track comum de full caster

Várias classes usam:

```text
Level 1  -> Trained
Level 7  -> Expert
Level 15 -> Master
Level 19 -> Legendary
```

Exemplos atuais: Bard, Druid, Witch, Wizard, Animist, Psychic, Necromancer, Oracle e Sorcerer, salvo feature específica que sobrescreva a progressão.

### 7.2 Magus e Summoner — Impossible Magic

A progressão atual é mais lenta:

```text
Level 1  -> Trained
Level 9  -> Expert
Level 17 -> Master
```

Não presumir Legendary Spellcaster no level 19 para essas classes na revisão atual.

### 7.3 Cleric: Doctrine é parte da resolução

Não existe uma única progressão de proficiência de Cleric:

- **Cloistered Cleric:** Expert 7, Master 15, Legendary 19.
- **Warpriest:** Expert 11, Master 19.
- **Battle Creed/Battle Harbinger:** possui ajustes próprios e não pode herdar cegamente o track do Cleric-base.

Logo, `class = Cleric` não é suficiente para resolver Spell Attack/DC.

## 8. Modificadores canônicos que alteram as tabelas ou a disponibilidade

### 8.1 Cleric — Divine Font

Além dos slots-base, o Cleric recebe um pool restrito no **maior Rank de slot de Cleric**:

- 4 slots adicionais inicialmente;
- 5 a partir do level 5;
- 6 a partir do level 15;
- normalmente restritos a `heal` ou `harm` conforme deity/font.

Esses slots devem ser um `resourcePool` distinto, com restrição de conteúdo. Não devem ser apenas somados ao número genérico de slots do Rank.

### 8.2 Wizard — Arcane School / Curriculum

Além dos slots-base, a Arcane School pode fornecer:

- um curriculum cantrip adicional;
- um curriculum spell slot adicional de cada Rank que o Wizard pode conjurar;
- restrição da Spell preparada nesse slot ao currículo da escola;
- exceções de escola, como Unified Magical Theory, precisam ser source-driven.

É outro `resourcePool`/overlay, não uma alteração destrutiva da tabela FULL_3.

### 8.3 Animist — dois pools reais

O Animist possui:

- slots preparados de Animist;
- slots espontâneos de Apparition;
- repertoire de Apparition baseado nas apparitions attuned;
- Apparition spells são Signature Spells;
- um pool não pode conjurar Spells do outro.

Este é o principal caso que proíbe modelar `slots[rank] = number` como única estrutura do personagem.

### 8.4 Psychic — Subconscious e Conscious Mind

- Subconscious Mind define INT ou CHA para Spell Attack/DC.
- Conscious Mind adiciona Spells ao repertoire e psi cantrips.
- Psi cantrips são adicionais aos cantrips-base da tabela.
- Amps usam Focus Points e não devem ser confundidos com slots.

### 8.5 Sorcerer — Bloodline

- Bloodline define tradição.
- Adiciona gifted spells/cantrip ao repertoire.
- Spells adicionadas ao repertoire não criam automaticamente slots adicionais.
- `Sorcerous Potency` altera resultado de determinadas Spells e pertence à futura Action Resolution, não à contagem de slots.

### 8.6 Witch — Patron/Familiar

- Patron define tradição e adiciona conteúdo.
- Familiar é o repositório das Spells conhecidas pelo Witch.
- Prepared slots e conteúdo conhecido são conceitos separados.
- Hex cantrips/focus spells são adicionais à seleção de cantrips preparada.

### 8.7 Summoner — Eidolon

- Eidolon determina a tradição de spellcasting.
- Spell slots e repertoire são entidades separadas mesmo que cresçam em ritmo correlacionado.
- Link Spells usam Focus Points e não slots.

### 8.8 Oracle — Mystery

- Base é spontaneous divine.
- Mystery adiciona spells/focus/cursebound interactions.
- Esses grants não devem ser inferidos a partir da tabela-base de slots.

### 8.9 Druid/Bard/Magus/Necromancer

- Druidic Order, Composition Spells, Conflux Spells e Grave Spells introduzem capacidades/focus resources fora dos slots-base.
- O modelo precisa aceitar múltiplas fontes simultâneas sem convertê-las artificialmente em spell slots.

## 9. Battle Creed/Battle Harbinger: exemplo de override forte

Divine Mysteries fornece um caso que deve guiar a arquitetura de overrides:

- restringe a progressão normal de spell slots do Cleric;
- mantém no máximo dois slots do maior Rank e dois do Rank imediatamente inferior quando aplicável;
- substitui Divine Font por Battle Font, com conteúdo restrito próprio;
- altera a progressão de proficiências.

Conclusão arquitetural: **não hardcodar `classId -> table` como resultado final**. Resolver:

```text
base class spellcasting profile
+ doctrine/subclass/archetype overlay
+ class features by level
+ feats/other explicit overrides
= effective spellcasting profile do Actor
```

Sempre aplicar a regra mais específica sobre a geral.

## 10. Prepared vs Spontaneous

### Prepared

- A fonte define quais Spells podem ser preparadas.
- Cada preparação ocupa um slot específico.
- Preparar uma Spell de Rank inferior em slot superior aumenta seu `effectiveRank` para o Rank do slot quando a regra da fonte permite.
- Spellbook/familiar/dirge e slot preparado são conceitos diferentes.

### Spontaneous

- O Actor possui um repertoire.
- Slots e repertoire são separados.
- Para Heightening, a Spell normalmente precisa existir no repertoire no Rank desejado, salvo Signature Spell ou outra regra específica.
- Uma feature que adiciona uma Spell ao repertoire não implica automaticamente slot adicional.

## 11. Cantrips e Focus Spells

Cantrips e Focus Spells normalmente são automaticamente heightened para metade do level do Actor, arredondado para cima.

```text
autoRank = ceil(characterLevel / 2)
```

Eles não devem usar o fluxo visual de arrastar entre spell slots como se fossem prepared/spontaneous slots comuns.

Focus Spells:

- gastam Focus Points quando a Spell exige;
- não gastam spell slots;
- Focus Pool é um recurso distinto, limitado pelas regras vigentes e features específicas.

## 12. Heightening: regra separada de disponibilidade

Uma Spell Definition deve registrar somente os **benefícios específicos** de Heightening:

```ts
type SpecificHeightening =
  | { type: 'NONE' }
  | { type: 'INTERVAL'; interval: number; changes: unknown }
  | { type: 'FIXED'; ranks: Record<number, unknown> }
```

Isso não responde sozinho se o Actor pode lançar a Spell no Rank X.

A resolução precisa combinar:

```text
Spell Definition
+ Spellcasting Source
+ Effective Spellcasting Profile do Actor
+ Spell Availability / Preparation / Repertoire
+ Resource Pool disponível
= opções legais de Cast Context
```

Somente depois o sistema calcula os benefícios específicos de Heightening para o `effectiveRank` escolhido/resolvido.

## 13. Modelo recomendado para dados futuros

```ts
type SpellcastingProgression = {
  id: string
  ownerKind: 'CLASS' | 'ARCHETYPE' | 'OTHER'
  ownerKey: string
  castingMode: 'PREPARED' | 'SPONTANEOUS' | 'SPECIAL'
  tradition: FixedTradition | ResolvedTradition
  castingAttribute: FixedAttribute | ResolvedAttribute
  proficiency: Array<{ level: number; rank: ProficiencyRank }>
  resourcePools: SpellResourcePoolDefinition[]
  spellCollection: SpellCollectionDefinition
  source: CanonicalRuleSource
}

type SpellResourcePoolDefinition = {
  id: string
  kind: 'SPELL_SLOT' | 'FOCUS' | 'SPECIAL'
  progression?: Array<{
    characterLevel: number
    ranks: Record<number, number>
  }>
  restrictions?: RuleRestriction[]
}
```

A estrutura final pode mudar durante BA/Architecture Review; as separações semânticas acima não devem ser removidas sem nova análise canônica.

## 14. Invariantes para P2A/P2B e desenvolvimentos posteriores

1. Nunca inferir slot count a partir apenas do maior Rank conhecido.
2. Nunca inferir Spellcasting Attribute apenas do Key Attribute da classe.
3. Nunca inferir tradição apenas do nome da classe quando patron/bloodline/eidolon/subclass a define.
4. Nunca misturar pools distintos porque possuem o mesmo Rank.
5. Nunca transformar Spell grant em slot grant ou vice-versa.
6. Nunca usar texto localizado de descrição como regra de runtime.
7. Nunca persistir uma cópia da Spell por `effectiveRank`.
8. Resolver overrides por especificidade e manter provenance/source.
9. Tabelas de classe devem ser dados versionados e auditáveis, não `if/else` espalhado pelo runtime.
10. Mudança de publicação/errata exige nova revisão da materialização.
11. P2A pode estruturar Heightening da Spell sem implementar Spellcasting Availability.
12. P2B só deve oferecer Rank/drag/drop quando a fonte necessária para provar a legalidade estiver representada; ausência de dados deve resultar em `UNKNOWN/NOT_RESOLVED`, não permissão presumida.
13. Action Resolution futura recebe um Cast Context já validado; não deve redescobrir a tabela da classe.

## 15. Itens que ainda exigem inventário canônico antes de automação completa

Esta referência estabelece a arquitetura e as regras-base, mas os seguintes modificadores devem ser catalogados antes de declarar Spellcasting Availability completo:

- todos os archetypes que concedem spellcasting e seus Basic/Expert/Master Spellcasting Benefits;
- feats que acrescentam/removem slots, mudam repertoire ou concedem Signature Spell;
- dedications e multiclass spellcasting;
- ancestry/heritage/innate spell sources;
- deity-granted spells e outras expansões de spell list;
- staves, wands, scrolls e itens que fornecem Cast a Spell;
- regras de remaster/errata posteriores ao baseline de 2026-08-23;
- subclasses/overlays adicionais que substituem a progressão-base.

Esses itens não bloqueiam documentar e materializar a progressão de classe, mas bloqueiam qualquer afirmação de que o QuestHub já conhece **todas** as formas legais de conjurar uma Spell.

## 16. Referências consultadas

### Paizo

- Pathfinder Impossible Magic — https://store.paizo.com/pathfinder-impossible-magic/
- Pathfinder FAQ / Errata — https://paizo.com/pathfinder/faq
- Pathfinder Remaster FAQ — https://paizo.com/pathfinder/remaster/faq

### Archives of Nethys — classes vigentes

- Animist — https://2e.aonprd.com/Classes.aspx?ID=64
- Bard — https://2e.aonprd.com/Classes.aspx?ID=32
- Cleric — https://2e.aonprd.com/Classes.aspx?ID=33
- Cleric Doctrines — https://2e.aonprd.com/Doctrines.aspx
- Druid — https://2e.aonprd.com/Classes.aspx?ID=34
- Magus — https://2e.aonprd.com/Classes.aspx?ID=74
- Necromancer — https://2e.aonprd.com/Classes.aspx?ID=75
- Oracle — https://2e.aonprd.com/Classes.aspx?ID=61
- Psychic — https://2e.aonprd.com/Classes.aspx?ID=68
- Sorcerer — https://2e.aonprd.com/Classes.aspx?ID=62
- Summoner — https://2e.aonprd.com/Classes.aspx?ID=77
- Witch — https://2e.aonprd.com/Classes.aspx?ID=38
- Wizard — https://2e.aonprd.com/Classes.aspx?ID=39

### Regras gerais

- Player Core, Chapter 7: Spells.
- Player Core, Chapter 8: checks, DCs e proficiency bonus.

## 17. Política de manutenção

Este documento deve ser revisado quando ocorrer qualquer um dos eventos abaixo:

- nova publicação/remaster de classe coberta;
- errata que altere slot progression, repertoire, Heightening, spell proficiency ou atributo/tradição;
- inclusão de uma nova origem de spellcasting no QuestHub;
- implementação de Spellcasting Availability;
- divergência detectada entre dado materializado e publicação vigente.

A revisão deve atualizar o baseline, registrar a fonte alterada e gerar testes de regressão para a regra modificada.