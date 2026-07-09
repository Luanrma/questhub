# QuestHub — Plano de Extração do Conteúdo Core de Pathfinder 2e

## 1. Objetivo

Este arquivo define **todo o conteúdo canônico de Pathfinder 2e** que deve ser extraído da pasta `pf2e-master` para que o QuestHub tenha uma base completa para:

- consulta de compêndio;
- criação e evolução de personagens;
- ficha Pathfinder 2e funcional;
- inventário e equipamentos;
- magias e conjuração;
- efeitos, condições e automações futuras;
- encontros com NPCs, hazards e veículos;
- suporte progressivo a regras do sistema sem acoplar o core do VTT ao PF2e.

O QuestHub já extraiu:

- NPCs / criaturas;
- Hazards;
- Itens / equipamentos.

Mesmo assim, esses três grupos devem ser auditados depois, porque outros conteúdos dependem deles, principalmente efeitos, traits, ataques, proficiências, valores monetários e referências cruzadas por UUID.

---

## 2. Regra arquitetural principal

Conteúdo PF2e pertence ao módulo:

```txt
.ai/game_systems/pathfinder_2e/
packages/game-system-pathfinder-2e/
```

O core do QuestHub deve permanecer agnóstico.

Não adicionar no core campos mecânicos específicos como:

- `ancestryBoosts`;
- `classDc`;
- `spellTraditions`;
- `weaponTraits`;
- `armorCategory`;
- `featCategory`;
- `proficiencyRank`;
- `spellRank`;
- `savingThrowBasic`;
- `damageTypes`.

Quando o app genérico precisar exibir dados PF2e, adaptar para DTOs neutros como:

```ts
type GameSystemCompendiumEntry = {
  id: string
  system: 'PATHFINDER_2E'
  category: string
  name: string
  source: {
    pack: string
    sourceId: string
    publicationTitle?: string
    license?: string
    remaster?: boolean
  }
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: unknown
  }
  systemData: unknown
}
```

---

## 3. Prioridades de extração

### Prioridade 0 — Infraestrutura de normalização

Antes de extrair novos conteúdos, criar uma camada de normalização reutilizável.

Extrair e padronizar:

- `sourcePack`;
- `sourceId`;
- `foundryUuid`;
- `name`;
- `type`;
- `system.slug` quando existir;
- `system.publication` / fonte;
- `system.description.value` sanitizado;
- traits;
- rarity;
- level/rank quando existir;
- `img` quando existir;
- `flags.pf2e` quando relevante;
- `system.rules` como rules elements preservados, mas isolados.

Criar helpers:

```ts
type Pathfinder2eSourceRef = {
  sourcePack: string
  sourceId: string
  foundryUuid: string
  publicationTitle?: string
  license?: string
  remaster?: boolean
}
```

```ts
type Pathfinder2eNormalizedText = {
  plainText: string
  safeHtml?: string
  gmText?: string
}
```

Regras:

- nunca renderizar HTML bruto do Foundry com `dangerouslySetInnerHTML` sem sanitização;
- preservar UUIDs internos para resolver links depois;
- não resolver todos os UUIDs na primeira etapa se isso aumentar demais o escopo;
- armazenar `systemData` original minimamente necessário para evolução futura.

---

## 4. Conteúdo obrigatório para o Core jogável

Esta seção lista o que deve ser extraído para que o QuestHub tenha a base de jogo completa para PF2e.

---

## 4.1. Ações e atividades

### Packs/fontes

```txt
packs/actions
packs/adventure-specific-actions          # opcional, não-core
packs/action-macros                       # opcional/técnico
```

### Por que extrair

A ficha, o chat, a referência rápida e o modo de encontro precisam saber quais ações existem: `Strike`, `Stride`, `Step`, `Seek`, `Recall Knowledge`, `Treat Wounds`, `Aid`, `Escape`, etc.

### Dados mínimos

```ts
type Pathfinder2eActionEntry = {
  id: string
  name: string
  slug: string
  actionType: 'action' | 'reaction' | 'free' | 'passive'
  actionCost?: number
  traits: string[]
  category?: string
  description: Pathfinder2eNormalizedText
  requirements?: string
  trigger?: string
  frequency?: string
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Ações básicas devem aparecer para todos os personagens.
- Ações específicas concedidas por feats, classe, ancestry ou itens devem ser relacionadas via `rules`, UUID ou referência de origem.
- `adventure-specific-actions` não deve entrar no core inicial, exceto se o usuário ativar conteúdo de aventura.

---

## 4.2. Ancestralidades

### Packs/fontes

```txt
packs/ancestries
packs/ancestryfeatures
```

### Por que extrair

Sem ancestry não existe criação correta de personagem PF2e.

### Dados mínimos — Ancestry

```ts
type Pathfinder2eAncestryEntry = {
  id: string
  name: string
  slug: string
  hp: number
  size: string
  speed: number
  rarity: string
  traits: string[]
  boosts: unknown
  flaws: unknown
  languages: {
    base: string[]
    additional?: string[]
    count?: number
  }
  vision?: string
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Dados mínimos — Ancestry Features

```ts
type Pathfinder2eAncestryFeatureEntry = {
  id: string
  name: string
  slug: string
  ancestrySlug?: string
  level?: number
  traits: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- `ancestryfeatures` não é a mesma coisa que `feats`.
- Features automáticas da ancestry devem ser aplicadas na criação/evolução sem o jogador escolher como feat.
- Heritages ficam em pack separado.

---

## 4.3. Heranças

### Packs/fontes

```txt
packs/heritages
```

### Por que extrair

Heritage é uma etapa obrigatória da criação de personagem e altera senses, resistências, feats disponíveis e regras especiais.

### Dados mínimos

```ts
type Pathfinder2eHeritageEntry = {
  id: string
  name: string
  slug: string
  ancestrySlug?: string
  rarity: string
  traits: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Algumas heritages são específicas de ancestry.
- Outras podem ser versatile heritages.
- O normalizador deve identificar essa diferença por traits, regras ou metadados.

---

## 4.4. Backgrounds

### Packs/fontes

```txt
packs/backgrounds
```

### Por que extrair

Background concede boosts, skills treinadas, lore e feat de skill.

### Dados mínimos

```ts
type Pathfinder2eBackgroundEntry = {
  id: string
  name: string
  slug: string
  rarity: string
  traits: string[]
  boosts: unknown
  trainedSkills: string[]
  trainedLore?: string
  grantedFeatRefs: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Não hardcodar a lista de backgrounds.
- Backgrounds podem vir de várias fontes canônicas.
- É aceitável no primeiro passo extrair `rules` bruto e resolver efeitos depois.

---

## 4.5. Classes

### Packs/fontes

```txt
packs/classes
packs/classfeatures
```

### Por que extrair

Classe é o núcleo da progressão do personagem.

### Dados mínimos — Classe

```ts
type Pathfinder2eClassEntry = {
  id: string
  name: string
  slug: string
  keyAbility: string[]
  hpPerLevel: number
  rarity: string
  traits: string[]
  perceptionProgression?: unknown
  savingThrowProgression?: unknown
  attackProgression?: unknown
  defenseProgression?: unknown
  classDcProgression?: unknown
  spellcastingProgression?: unknown
  skillTraining?: unknown
  initialProficiencies?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Dados mínimos — Class Features

```ts
type Pathfinder2eClassFeatureEntry = {
  id: string
  name: string
  slug: string
  classSlug?: string
  level: number
  traits: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- `classfeatures` são progressão automática, não feats escolhíveis.
- Algumas classes têm subclass, doctrine, muse, racket, instinct, methodology etc.
- Não tentar modelar todas as subclasses manualmente no primeiro passo: extrair `rules` e metadados para evoluir.

---

## 4.6. Feats

### Packs/fontes

```txt
packs/feats
packs/feat-effects
```

### Por que extrair

Feats são necessários para criação, progressão, inventário, ações, automações e regras passivas.

### Dados mínimos — Feat

```ts
type Pathfinder2eFeatEntry = {
  id: string
  name: string
  slug: string
  level: number
  rarity: string
  traits: string[]
  category?:
    | 'ancestry'
    | 'class'
    | 'skill'
    | 'general'
    | 'archetype'
    | 'bonus'
    | 'pfs'
    | 'deity-boon'
    | 'other'
  prerequisites?: string
  frequency?: string
  actionType?: 'action' | 'reaction' | 'free' | 'passive'
  actionCost?: number
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Dados mínimos — Feat Effects

```ts
type Pathfinder2eFeatEffectEntry = {
  id: string
  name: string
  slug: string
  relatedFeatSlug?: string
  level?: number
  traits: string[]
  duration?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Feat pode conceder ação, bônus passivo, reação, proficiência, resistência ou efeito temporário.
- O QuestHub deve conseguir listar feats por tipo, nível, classe, ancestry, traits e pré-requisitos.
- Não bloquear o sistema se pré-requisito ainda não for interpretável; guardar texto + dados brutos.

---

## 4.7. Magias

### Packs/fontes

```txt
packs/spells
packs/spell-effects
```

### Por que extrair

Magias são necessárias para ficha, compêndio, conjuração, preparação, spellbook, ataques mágicos, DCs, efeitos e automações futuras.

### Dados mínimos — Spell

```ts
type Pathfinder2eSpellEntry = {
  id: string
  name: string
  slug: string
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  school?: string
  category?: 'spell' | 'cantrip' | 'focus' | 'ritual' | 'other'
  cast?: {
    actions?: number | 'reaction' | 'free' | 'varies'
    components?: string[]
  }
  range?: string
  area?: string
  target?: string
  defense?: {
    save?: 'fortitude' | 'reflex' | 'will'
    basic?: boolean
    attack?: boolean
  }
  duration?: string
  cost?: string
  requirements?: string
  trigger?: string
  damage?: unknown
  heightened?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Dados mínimos — Spell Effect

```ts
type Pathfinder2eSpellEffectEntry = {
  id: string
  name: string
  slug: string
  relatedSpellSlug?: string
  level?: number
  traits: string[]
  duration?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Cantrips, focus spells e rituals precisam ser diferenciados.
- Tradições: arcane, divine, occult, primal.
- `spell-effects` deve ser separado de `spells`: um é catálogo de magia, outro é efeito aplicável.
- A ficha deve conseguir montar spellbook/prepared spells sem depender de automação completa.

---

## 4.8. Equipamentos, tesouros e itens

### Packs/fontes

```txt
packs/equipment
packs/equipment-effects
```

### Status

Já existe extração inicial de itens no QuestHub, mas ela deve ser auditada.

### Por que auditar

Para inventário PF2e funcionar bem, item não pode ser apenas `name`, `type`, `rarity` e `attributes` genéricos.

### Dados mínimos

```ts
type Pathfinder2eItemEntry = {
  id: string
  name: string
  slug: string
  itemType:
    | 'weapon'
    | 'armor'
    | 'shield'
    | 'equipment'
    | 'consumable'
    | 'treasure'
    | 'backpack'
    | 'kit'
    | 'rune'
    | 'material'
    | 'other'
  level?: number
  rarity: string
  traits: string[]
  price?: {
    cp: number
    display: string
  }
  bulk?: {
    value: number
    display: string
  }
  usage?: string
  category?: string
  group?: string
  baseItem?: string
  hands?: string
  damage?: unknown
  armor?: unknown
  shield?: unknown
  consumable?: unknown
  container?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Dados mínimos — Equipment Effects

```ts
type Pathfinder2eEquipmentEffectEntry = {
  id: string
  name: string
  slug: string
  relatedItemSlug?: string
  traits: string[]
  duration?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Dinheiro deve ser normalizado em `cp` como menor unidade.
- Preço exibido pode ser reconstruído como `pp/gp/sp/cp`.
- Bulk deve ser interpretável para cálculo futuro.
- Runes, materiais preciosos, consumíveis e containers precisam preservar regras.

---

## 4.9. Condições

### Packs/fontes

```txt
packs/conditions
```

### Por que extrair

Condições são essenciais para combate, ficha, chat e automação.

### Dados mínimos

```ts
type Pathfinder2eConditionEntry = {
  id: string
  name: string
  slug: string
  group?: string
  valueType?: 'none' | 'number' | 'counter'
  persistent?: boolean
  overrides?: string[]
  alsoApplies?: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Algumas condições possuem valor: `frightened 1`, `clumsy 2`, etc.
- Algumas condições se sobrescrevem ou se reduzem no fim do turno.
- Não implementar toda automação no primeiro passo, mas extrair dados necessários.

---

## 4.10. Deuses, religiões e domínios

### Packs/fontes

```txt
packs/deities
```

### Por que extrair

Deities impactam clérigos, campeões, edicts/anathema, armas favorecidas, domínios, fontes divinas e feats relacionados.

### Dados mínimos

```ts
type Pathfinder2eDeityEntry = {
  id: string
  name: string
  slug: string
  category?: string
  alignment?: string
  sanctification?: unknown
  edicts?: string[]
  anathema?: string[]
  areasOfConcern?: string[]
  attribute?: string[]
  skill?: string[]
  favoredWeapon?: string
  domains?: string[]
  alternateDomains?: string[]
  clericSpells?: string[]
  divineFont?: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Domínios podem aparecer como strings/referências e precisam ser normalizados.
- Não confundir deity com feat, background ou spell.

---

## 4.11. Familiares

### Packs/fontes

```txt
packs/familiar-abilities
```

### Por que extrair

Familiares fazem parte do core jogável para bruxos, magos e outros personagens.

### Dados mínimos

```ts
type Pathfinder2eFamiliarAbilityEntry = {
  id: string
  name: string
  slug: string
  abilityType?: 'familiar' | 'master' | 'other'
  traits: string[]
  requirements?: string
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Pode ser implementado depois de classes/spells/feats.
- Deve ser extraído antes de criar uma ficha completa para classes com familiar.

---

## 4.12. Boons, curses e recompensas especiais

### Packs/fontes

```txt
packs/boons-and-curses
packs/pathfinder-society-boons       # opcional
```

### Por que extrair

Boons/curses são efeitos canônicos que podem alterar ficha, narrativa e campanha.

### Dados mínimos

```ts
type Pathfinder2eBoonCurseEntry = {
  id: string
  name: string
  slug: string
  kind?: 'boon' | 'curse' | 'mixed' | 'unknown'
  level?: number
  rarity: string
  traits: string[]
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Não é prioridade para MVP de ficha.
- Deve entrar no compêndio e futuramente em efeitos ativos.

---

## 4.13. Efeitos gerais e efeitos de campanha

### Packs/fontes

```txt
packs/bestiary-effects
packs/campaign-effects
packs/other-effects
packs/feat-effects
packs/equipment-effects
packs/spell-effects
```

### Por que extrair

Efeitos são a ponte entre texto de regra e automação.

### Dados mínimos

```ts
type Pathfinder2eEffectEntry = {
  id: string
  name: string
  slug: string
  effectType:
    | 'spell'
    | 'feat'
    | 'equipment'
    | 'campaign'
    | 'bestiary'
    | 'condition'
    | 'other'
  level?: number
  traits: string[]
  duration?: unknown
  badge?: unknown
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Efeito não é item carregável no inventário, embora seja `Item` no Foundry.
- Deve ser normalizado em catálogo próprio.
- Preservar `rules` para automação futura.
- Relacionar efeitos a spell/feat/equipment quando possível por slug ou UUID.

---

## 4.14. Glossários de habilidades de bestiário

### Packs/fontes

```txt
packs/bestiary-ability-glossary-srd
packs/bestiary-family-ability-glossary
```

### Por que extrair

NPCs e monstros usam habilidades padronizadas. Sem glossário, o compêndio de criaturas fica incompleto e difícil de consultar.

### Dados mínimos

```ts
type Pathfinder2eBestiaryAbilityGlossaryEntry = {
  id: string
  name: string
  slug: string
  traits: string[]
  family?: string
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Útil para modal de criatura, busca e hover de habilidades.
- Pode ser etapa pós-bestiário.

---

## 4.15. Tabelas roláveis

### Packs/fontes

```txt
packs/rollable-tables
packs/criticaldeck                 # opcional
```

### Por que extrair

Tabelas são úteis para exploração, encontros, tesouros, efeitos aleatórios e suporte de Mestre.

### Dados mínimos

```ts
type Pathfinder2eRollableTableEntry = {
  id: string
  name: string
  slug: string
  tableType?: string
  description?: Pathfinder2eNormalizedText
  formula?: string
  results: Array<{
    range?: [number, number]
    text?: string
    documentUuid?: string
    weight?: number
  }>
  source: Pathfinder2eSourceRef
}
```

### Observações

- Não precisa entrar na ficha inicialmente.
- Deve ser acessível no compêndio do Mestre.

---

## 4.16. Veículos

### Packs/fontes

```txt
packs/vehicles
```

### Por que extrair

Veículos são entidades de jogo, não itens simples. Podem ter estatísticas, tripulação, velocidade, defesas e ações.

### Dados mínimos

```ts
type Pathfinder2eVehicleEntry = {
  id: string
  name: string
  slug: string
  level?: number
  rarity: string
  traits: string[]
  size?: string
  price?: { cp: number; display: string }
  defenses?: unknown
  speed?: unknown
  crew?: unknown
  passengers?: unknown
  pilotingCheck?: string
  description: Pathfinder2eNormalizedText
  source: Pathfinder2eSourceRef
  rules?: unknown[]
}
```

### Observações

- Não tratar veículo como `Character`.
- Não tratar veículo como item comum de inventário.
- Futuramente pode virar entidade posicionável em cena.

---

## 4.17. Journals e textos de regra

### Packs/fontes

```txt
packs/journals
```

### Por que extrair

Journals podem conter textos de regras, referências e conteúdo útil para consulta dentro do QuestHub.

### Dados mínimos

```ts
type Pathfinder2eJournalEntry = {
  id: string
  name: string
  slug: string
  category?: string
  pages: Array<{
    id: string
    name: string
    type: string
    text: Pathfinder2eNormalizedText
  }>
  source: Pathfinder2eSourceRef
}
```

### Observações

- Prioridade menor que ficha, spells e feats.
- Pode alimentar busca global do compêndio.
- Atenção redobrada a licenças e conteúdo textual integral.

---

## 5. Dados estruturais que não aparecem necessariamente como packs

Além dos packs, o QuestHub precisa extrair ou definir dicionários oficiais/estáveis usados por várias entidades.

Esses dados podem vir de arquivos de configuração, traduções, constantes internas do sistema PF2e ou serem derivados dos próprios packs.

### 5.1. Traits

Extrair catálogo de traits para:

- ancestry traits;
- class traits;
- feat traits;
- spell traits;
- item traits;
- weapon traits;
- armor traits;
- creature traits;
- hazard traits;
- effect traits;
- rarity traits.

Contrato sugerido:

```ts
type Pathfinder2eTraitDefinition = {
  slug: string
  label: string
  category?: string
  description?: string
}
```

### 5.2. Skills

Lista mínima:

```txt
acrobatics
arcana
athletics
crafting
deception
diplomacy
intimidation
medicine
nature
occultism
performance
religion
society
stealth
survival
thievery
lore:*
```

### 5.3. Atributos

```txt
str
dex
con
int
wis
cha
```

### 5.4. Salvamentos

```txt
fortitude
reflex
will
```

### 5.5. Proficiência

```txt
untrained
trained
expert
master
legendary
```

Guardar também o valor numérico/rank para cálculo futuro.

### 5.6. Raridade

```txt
common
uncommon
rare
unique
```

### 5.7. Tamanhos

```txt
tiny
sm
med
lg
huge
grg
```

Normalizar labels para exibição.

### 5.8. Tipos de dano

Extrair/definir:

```txt
acid
bleed
bludgeoning
cold
electricity
fire
force
mental
piercing
poison
precision
slashing
spirit
vitality
void
sonic
```

Incluir tipos legados ou pré-remaster se aparecerem em conteúdo extraído:

```txt
good
evil
positive
negative
alignment
```

### 5.9. Resistências, fraquezas e imunidades

O normalizador deve preservar:

- tipo;
- valor;
- exceções;
- observações textuais;
- relação com traits.

### 5.10. Moedas

PF2e usa:

```txt
cp
sp
gp
pp
```

Regra QuestHub:

```txt
1 pp = 1000 cp
1 gp = 100 cp
1 sp = 10 cp
1 cp = 1 cp
```

Persistir dinheiro como inteiro em `cp`.

### 5.11. Bulk

Extrair/normalizar:

- bulk numérico;
- bulk leve (`L`);
- bulk negligenciável (`-`);
- quantidade;
- bulk total por stack.

### 5.12. Idiomas

Extrair catálogo de idiomas para ancestry, background e ficha.

Contrato sugerido:

```ts
type Pathfinder2eLanguageDefinition = {
  slug: string
  label: string
  rarity?: string
  script?: string
  speakers?: string
}
```

### 5.13. Sentidos

Extrair/normalizar:

- low-light vision;
- darkvision;
- scent;
- tremorsense;
- lifesense;
- wavesense;
- thoughtsense;
- outros sentidos especiais.

### 5.14. Tradições mágicas

```txt
arcane
divine
occult
primal
```

### 5.15. Áreas de magia/efeito

Normalizar:

- emanation;
- burst;
- cone;
- line;
- square;
- cube;
- radius;
- alvo único;
- múltiplos alvos.

---

## 6. Conteúdo já extraído, mas que deve ser revisado

## 6.1. NPCs / Criaturas

Verificar se a extração atual preserva:

- level;
- rarity;
- size;
- traits;
- perception;
- senses;
- languages;
- skills;
- ability modifiers;
- items carregados;
- AC;
- saves;
- HP;
- immunities/resistances/weaknesses;
- speeds;
- attacks;
- actions/reactions/free actions;
- spellcasting quando existir;
- descrição pública e notas privadas;
- imagens/tokens;
- source pack e publicação.

## 6.2. Hazards

Verificar se a extração atual preserva:

- level;
- rarity;
- traits;
- complexidade;
- stealth/seek;
- disable;
- AC;
- saves;
- hardness;
- HP;
- immunities/resistances/weaknesses;
- trigger;
- routine;
- reset;
- ações/reactions;
- texto sanitizado;
- source pack e publicação.

## 6.3. Itens

Verificar se a extração atual diferencia corretamente:

- weapon;
- armor;
- shield;
- consumable;
- treasure;
- equipment;
- backpack/container;
- rune;
- precious material;
- kit;
- item mágico;
- item investido;
- item apex;
- item com charges/frequency;
- item com activations/actions;
- item com regras passivas.

---

## 7. Conteúdo opcional ou não-core inicial

Estes conteúdos existem no sistema Foundry PF2e, mas não devem bloquear a primeira entrega do core jogável.

### 7.1. Bestiários de aventuras/APs

Exemplos:

```txt
packs/abomination-vaults-bestiary
packs/age-of-ashes-bestiary
packs/agents-of-edgewatch-bestiary
packs/blood-lords-bestiary
packs/curtain-call-bestiary
packs/extinction-curse-bestiary
packs/fists-of-the-ruby-phoenix-bestiary
packs/gatewalkers-bestiary
packs/kingmaker-bestiary
packs/lost-omens-bestiary
packs/outlaws-of-alkenstar-bestiary
packs/quest-for-the-frozen-flame-bestiary
packs/season-of-ghosts-bestiary
packs/sky-kings-tomb-bestiary
packs/stolen-fate-bestiary
packs/strength-of-thousands-bestiary
packs/troubles-in-otari-bestiary
```

Status recomendado:

```txt
Opcional por fonte/livro/aventura.
Não misturar com core inicial sem filtro de source.
```

### 7.2. Pregens e iconics

```txt
packs/iconics
packs/paizo-pregens
```

Uso:

- exemplos de personagens;
- criação rápida;
- testes de ficha.

Não são necessários para montar o catálogo core.

### 7.3. Macros

```txt
packs/macros
packs/action-macros
```

Uso:

- automações do Foundry;
- referência técnica.

Não copiar como comportamento direto no QuestHub. Extrair apenas se houver decisão explícita de criar um sistema de macros próprio.

### 7.4. Conteúdo específico de aventura

```txt
packs/adventure-specific-actions
packs/kingmaker-features
```

Uso:

- módulos opcionais;
- campanhas específicas.

Não deve entrar no core global por padrão.

---

## 8. Ordem recomendada de implementação

## Fase 1 — Base de compêndio e normalização

- [ ] Criar `.ai/game_systems/pathfinder_2e/core_content/readme.md`.
- [ ] Criar `.ai/game_systems/pathfinder_2e/core_content/skills.md`.
- [ ] Criar `.ai/game_systems/pathfinder_2e/core_content/specs.md`.
- [ ] Criar script base `scripts/generate-pf2e-core-content-data.cjs`.
- [ ] Criar helpers para ler packs JSON do `pf2e-master/packs/**`.
- [ ] Criar helper para sanitizar descrição HTML.
- [ ] Criar helper para resolver source/pack/publicação/licença.
- [ ] Criar tipos base de `SourceRef`, `NormalizedText`, `CompendiumEntry`.
- [ ] Gerar arquivo `data.generated.ts` separado por categoria.

## Fase 2 — Criação de personagem mínima

- [ ] Extrair `ancestries`.
- [ ] Extrair `heritages`.
- [ ] Extrair `backgrounds`.
- [ ] Extrair `classes`.
- [ ] Extrair `classfeatures`.
- [ ] Extrair `ancestryfeatures`.
- [ ] Extrair `feats`.
- [ ] Criar filtros por nível, categoria, traits e source.
- [ ] Criar DTO de opções de criação de personagem.

## Fase 3 — Magias

- [ ] Extrair `spells`.
- [ ] Separar cantrip, focus spell, spell normal e ritual.
- [ ] Extrair traditions, rank, cast, range, target, area, duration e defense.
- [ ] Extrair heightened.
- [ ] Extrair `spell-effects`.
- [ ] Criar busca/listagem de magias.
- [ ] Criar contrato para spellbook/prepared spells na ficha.

## Fase 4 — Regras auxiliares e efeitos

- [ ] Extrair `conditions`.
- [ ] Extrair `actions`.
- [ ] Extrair `feat-effects`.
- [ ] Extrair `equipment-effects`.
- [ ] Extrair `campaign-effects`.
- [ ] Extrair `bestiary-effects`.
- [ ] Extrair `other-effects`.
- [ ] Preservar `rules` para automação futura.
- [ ] Criar relacionamento por slug/UUID quando possível.

## Fase 5 — Conteúdo de suporte de ficha

- [ ] Extrair `deities`.
- [ ] Extrair `familiar-abilities`.
- [ ] Extrair `boons-and-curses`.
- [ ] Criar dicionários de traits, skills, languages, damage types, senses e proficiencies.
- [ ] Criar validadores de pré-requisito textual/dados brutos.

## Fase 6 — Entidades de mesa e Mestre

- [ ] Revisar extração de NPCs.
- [ ] Revisar extração de Hazards.
- [ ] Revisar extração de equipamentos.
- [ ] Extrair `vehicles`.
- [ ] Extrair `rollable-tables`.
- [ ] Extrair glossários de bestiário.
- [ ] Extrair journals apenas se houver tela de consulta global.

## Fase 7 — Conteúdo opcional por fonte

- [ ] Criar filtro por livro/source.
- [ ] Criar flag para conteúdo de aventura.
- [ ] Separar conteúdo core/remaster de conteúdo legado ou aventura.
- [ ] Extrair AP bestiaries apenas como módulos opcionais.
- [ ] Extrair pregens/iconics apenas como exemplos ou templates.

---

## 9. Endpoints sugeridos

Não implementar todos de uma vez. Esta é a direção de contrato.

```txt
GET /api/campaigns/:campaignId/compendium?category=ancestry
GET /api/campaigns/:campaignId/compendium?category=heritage
GET /api/campaigns/:campaignId/compendium?category=background
GET /api/campaigns/:campaignId/compendium?category=class
GET /api/campaigns/:campaignId/compendium?category=class-feature
GET /api/campaigns/:campaignId/compendium?category=feat
GET /api/campaigns/:campaignId/compendium?category=spell
GET /api/campaigns/:campaignId/compendium?category=condition
GET /api/campaigns/:campaignId/compendium?category=action
GET /api/campaigns/:campaignId/compendium?category=deity
GET /api/campaigns/:campaignId/compendium?category=effect
GET /api/campaigns/:campaignId/compendium?category=vehicle
GET /api/campaigns/:campaignId/compendium?category=table
```

Detalhe:

```txt
GET /api/campaigns/:campaignId/compendium/:entryId
```

Filtros:

```txt
?q=
?level=
?rank=
?rarity=
?trait=
?source=
?category=
?page=
?limit=
?language=pt-BR|original
```

Permissões sugeridas:

- Mestre pode acessar tudo do compêndio da campanha.
- Jogador pode acessar opções públicas de personagem, spells, itens e condições.
- Conteúdo com notas de GM ou segredo deve ser filtrado para jogador.

---

## 10. Estrutura de arquivos sugerida

```txt
packages/game-system-pathfinder-2e/src/server/core-content/
  index.ts
  adapter.ts
  models.ts
  data.generated.ts
  filters.ts
  presenters.ts
  source.ts
  text.ts

packages/game-system-pathfinder-2e/src/server/character-options/
  ancestries.ts
  heritages.ts
  backgrounds.ts
  classes.ts
  feats.ts
  models.ts

packages/game-system-pathfinder-2e/src/server/spells/
  models.ts
  presenter.ts
  filters.ts

packages/game-system-pathfinder-2e/src/server/rules-glossary/
  actions.ts
  conditions.ts
  traits.ts
  skills.ts
  damage-types.ts
  languages.ts
  models.ts
```

Se o projeto preferir menos arquivos no início, manter tudo em `core-content` e separar quando crescer.

---

## 11. Critérios de aceite

A extração só é considerada boa quando:

- [ ] Cada entrada possui `id` estável do QuestHub.
- [ ] Cada entrada preserva `sourcePack` e `sourceId`.
- [ ] Cada entrada possui `foundryUuid` quando possível.
- [ ] Cada entrada possui `category` normalizada.
- [ ] Texto está sanitizado.
- [ ] HTML bruto não é renderizado diretamente.
- [ ] Traits são arrays normalizados.
- [ ] Rarity é normalizada.
- [ ] Level/rank é número quando aplicável.
- [ ] Referências cruzadas por UUID são preservadas mesmo que ainda não resolvidas.
- [ ] Conteúdo PF2e não vaza para tipos mecânicos do core genérico.
- [ ] O build TypeScript passa.
- [ ] O script de geração é determinístico.
- [ ] A ordem dos dados gerados é estável.
- [ ] Dados gerados não dependem de runtime do Foundry.

---

## 12. O que não fazer

- Não copiar a modelagem interna do Foundry como domínio final do QuestHub.
- Não transformar todo `Item` do Foundry em item de inventário.
- Não misturar `spell-effects`, `feat-effects` e `equipment-effects` com itens compráveis.
- Não tratar vehicle como item simples.
- Não tratar hazard como NPC.
- Não tratar class feature como feat escolhível.
- Não tratar ancestry feature como ancestry feat.
- Não colocar regra PF2e em `packages/game-system-core`.
- Não criar enum fechado demais para tudo agora; PF2e cresce e muda.
- Não descartar `system.rules`; preservar para automação futura.
- Não descartar UUIDs; eles são necessários para links internos.
- Não assumir que todo conteúdo pode ser usado comercialmente sem revisar licença/fonte.

---

## 13. Resumo do que falta extrair

Como você já extraiu NPCs, Hazards e Itens, o próximo bloco obrigatório é:

```txt
1. actions
2. ancestries
3. ancestryfeatures
4. heritages
5. backgrounds
6. classes
7. classfeatures
8. feats
9. feat-effects
10. spells
11. spell-effects
12. conditions
13. deities
14. familiar-abilities
15. boons-and-curses
16. equipment-effects
17. campaign-effects
18. bestiary-effects
19. other-effects
20. bestiary-ability-glossary-srd
21. bestiary-family-ability-glossary
22. rollable-tables
23. vehicles
24. journals
25. dicionários estruturais: traits, skills, proficiencies, damage types, languages, senses, sizes, rarity, currencies, bulk
```

Prioridade prática para o QuestHub agora:

```txt
1. ancestries
2. heritages
3. backgrounds
4. classes
5. classfeatures
6. ancestryfeatures
7. feats
8. spells
9. conditions
10. actions
11. deities
12. effects
13. familiar abilities
14. rollable tables
15. vehicles
16. journals
```

