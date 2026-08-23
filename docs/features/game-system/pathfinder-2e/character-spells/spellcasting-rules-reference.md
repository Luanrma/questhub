# Pathfinder 2e — Spellcasting: referência de regras e capacidades

**Status:** REFERENCE / NÃO NORMATIVA PARA A MESA  
**Baseline de revisão:** 2026-08-23  
**Escopo:** Pathfinder 2e Remaster; spellcasting, progressões por classe/fonte, disponibilidade, recursos e Heightening.  
**Importante:** este documento registra como as regras oficiais funcionam para orientar produto, dados e automações opcionais. Ele **não transforma o QuestHub em árbitro obrigatório das regras** e não substitui decisões da mesa.

## 1. Princípio de produto

QuestHub é uma ferramenta de VTT. O objetivo principal é garantir que uma mesa consiga representar e operar o jogo sem sentir falta de ferramentas, inclusive quando usa house rules, variantes, conteúdo próprio ou interpretações diferentes.

Consequências:

1. regras oficiais podem ser exibidas como referência, sugestão, preset ou validação opcional;
2. o Mestre deve poder sobrescrever limites e estados mecânicos quando a campanha permitir;
3. integridade técnica, segurança, permissões e isolamento entre campanhas continuam sendo invariantes rígidas;
4. legalidade de regra de jogo não deve ser tratada como integridade técnica;
5. automação rígida só deve ser introduzida quando o benefício for claro e houver escape/override coerente;
6. dados oficiais e regras de classe devem ser modelados de forma que possam orientar a UI sem obrigar a mesa a segui-los.

Uma futura configuração de campanha pode distinguir, por exemplo:

```ts
type RulesAssistanceMode =
  | 'FREEFORM'   // ferramentas sem bloqueio de legalidade
  | 'ADVISORY'   // sugere/avisa, mas permite override
  | 'ENFORCED'   // reservado para automações futuras explicitamente opt-in
```

`FREEFORM` e `ADVISORY` são os modos prioritários de produto. `ENFORCED` não é objetivo imediato.

## 2. Fontes de referência

Para entender a regra oficial e manter provenance:

1. publicação Paizo Remaster vigente da regra/classe;
2. errata/FAQ oficial Paizo;
3. publicação Paizo mais específica quando sobrescreve uma regra geral;
4. Archives of Nethys como índice/referência navegável do conteúdo vigente e identificação de livro/página;
5. dados internos do QuestHub, sempre ligados a uma revisão conhecida.

Não usar implementações de VTTs de terceiros como referência de regra ou como fonte de design/código.

Quando dados mecânicos forem materializados no QuestHub, registrar provenance suficiente para auditoria:

```ts
type RuleReferenceSource = {
  publisher: 'Paizo'
  sourceBook: string
  sourcePage?: number
  sourceRevision?: string
  reviewedAt: string
}
```

### Baseline consultada nesta revisão

- Player Core — regras gerais de Spells e classes presentes no livro;
- Player Core 2 — classes e regras adicionais;
- War of Immortals — Animist;
- Dark Archive + errata de compatibilidade Remaster — Psychic;
- Impossible Magic — Magus, Necromancer e Summoner;
- Divine Mysteries — opções que alteram spellcasting de classes, quando aplicáveis;
- FAQ/Errata Paizo vigente em 2026-08-23.

A baseline deve ser revisada quando houver nova errata ou nova publicação que substitua conteúdo anterior.

## 3. Conceitos que não devem ser confundidos

Mesmo em modo livre, a UI precisa distinguir conceitos para oferecer ferramentas úteis.

### 3.1 Spell Definition

A definição da Spell contém seus dados próprios:

```ts
type SpellDefinition = {
  contentId: string
  baseRank: number
  traits: string[]
  traditions: string[]
  specificHeightening: 'NONE' | 'INTERVAL' | 'FIXED'
  ruleReference?: RuleReferenceSource
}
```

`baseRank` descreve a Spell; mover um card na UI ou conjurá-la em outro Rank não deve destruir esse dado.

### 3.2 Spellcasting Source

É a origem pela qual o Actor usa magia: classe, archetype, ancestry/heritage, feat, item, innate ability, focus source, ritual ou fonte personalizada.

Uma fonte pode carregar metadata sugerida:

- prepared, spontaneous, innate, focus, ritual ou custom;
- tradição;
- atributo de spellcasting;
- progressão de proficiência;
- collections/repertoires/spellbooks;
- pools de recursos;
- regras de Heightening/availability associadas.

Esses dados podem orientar a UI sem necessariamente bloquear a mesa.

### 3.3 Spell Availability

Responde se uma Spell está disponível por determinada fonte, Rank e recurso.

Para o QuestHub, disponibilidade deve poder ter estados como:

```ts
type SpellAvailability =
  | { state: 'AVAILABLE'; reason?: string }
  | { state: 'WARNING'; reason: string; overrideAllowed: true }
  | { state: 'UNAVAILABLE_BY_REFERENCE'; reason: string; overrideAllowed: true }
  | { state: 'UNKNOWN'; reason: string }
```

`UNAVAILABLE_BY_REFERENCE` significa “as regras de referência sugerem que não”, e não “o software deve proibir”.

### 3.4 Cast Context

Representa o uso atual da Spell:

```ts
type SpellCastContext = {
  spellDefinitionId: string
  spellcastingSourceId?: string
  baseRank: number
  resourcePoolId?: string
  resourceRank?: number
  effectiveRank: number
  rulesDisposition?: 'REFERENCE_VALID' | 'REFERENCE_WARNING' | 'OVERRIDDEN' | 'FREEFORM'
}
```

`resourceRank` e `effectiveRank` são separados porque não são semanticamente idênticos em todos os casos.

## 4. Heightening — regra de referência

### 4.1 Benefício específico da Spell

Uma Spell pode ter:

- `NONE`: sem cláusula própria de Heightening;
- `INTERVAL`: benefício em incrementos `+N`;
- `FIXED`: alterações em Ranks específicos.

A ausência de benefício específico não significa automaticamente que a Spell não possa ser usada em Rank superior por uma fonte que permita isso.

### 4.2 Cantrips e Focus Spells

Na regra de referência, normalmente auto-heighten para metade do nível do personagem, arredondado para cima. A interface deve ser capaz de mostrar esse Rank calculado e também permitir override em modo livre/advisory.

### 4.3 Prepared spellcasting

A regra de referência permite preparar Spells em slots de Rank compatível/maior conforme a fonte. Para produto, o importante é suportar:

- preparação por Rank;
- slots independentes;
- mover/selecionar a Spell para outro Rank;
- preview de Heightening;
- override manual quando a mesa decidir diferente.

### 4.4 Spontaneous spellcasting

Repertoire, Rank conhecido, Signature Spell e outras features podem alterar quais Ranks são válidos pela regra oficial. Também é possível haver diferença entre recurso gasto e Rank efetivo.

A UI não deve colapsar isso em um único número.

### 4.5 Innate, Focus e Ritual

São fontes diferentes e precisam de ferramentas próprias. Não presumir que todas usam slots normais.

## 5. Progressões e tabelas por classe/fonte

As classes com spellcasting não compartilham uma única tabela universal. A progressão oficial pode determinar:

- Ranks alcançados por nível;
- número de slots/recursos por Rank;
- quantidade de cantrips ou conteúdo conhecido/preparado;
- acesso a 10th-rank ou equivalente;
- pools adicionais;
- progressão de Spell Attack / Spell DC;
- tradição e atributo de spellcasting;
- regras de subclass/doctrine/bloodline/patron/eidolon etc.

Esses dados devem ser tratados como **profiles/presets de referência**, não como constraints inevitáveis.

### 5.1 Perfis recorrentes úteis para modelagem

Para reduzir duplicação de dados, pode existir uma classificação interna de formato, desde que a tabela/materialização por classe continue sendo a fonte de referência:

- `FULL_3`: progressões com cerca de 3 slots-base por Rank em estado maduro;
- `FULL_4_SPONTANEOUS`: progressões spontaneous com cerca de 4 slots-base por Rank;
- `FULL_2`: progressões com cerca de 2 slots-base por Rank;
- `CUSTOM_MULTI_POOL`: múltiplos pools independentes.

Esses nomes são abstrações do QuestHub e **não são termos oficiais do PF2e**.

### 5.2 Classes/fonte que exigem atenção especial

A documentação de implementação futura deve consultar a tabela vigente da classe em sua publicação/errata. Casos conhecidos que impedem uma modelagem única:

- **Cleric:** doctrine pode alterar progressão de proficiência; Divine Font é pool separado/restrito;
- **Wizard:** Arcane School/curriculum pode criar conteúdo e recursos adicionais com restrições próprias;
- **Animist:** prepared spellcasting e apparition spellcasting coexistem como pools distintos;
- **Psychic:** escolhas internas podem afetar atributo e conteúdo disponível; Focus/amps não são slots comuns;
- **Sorcerer:** Bloodline participa da tradição e do conteúdo concedido;
- **Witch:** Patron e familiar participam da origem/conteúdo de Spells;
- **Summoner:** Eidolon participa da tradição; repertoire e focus/link spells são conceitos separados;
- **Oracle:** Mystery adiciona conteúdo e interações próprias;
- **Magus:** atributo-chave de classe e atributo de spellcasting não devem ser presumidos como a mesma coisa;
- **Necromancer:** possui progressão e recursos próprios na publicação vigente.

Não implementar esses itens por memória ou por generalização do comportamento de outra classe.

## 6. Spell Attack e Spell DC

A regra oficial de referência deriva essas estatísticas de atributo de spellcasting, proficiência e modificadores aplicáveis.

Para o QuestHub, a implicação principal é:

- não derivar automaticamente spellcasting attribute apenas de `class.keyAbility`;
- permitir que a fonte de spellcasting declare/derive o atributo;
- permitir override manual;
- apresentar a conta ao usuário quando o valor for derivado;
- permitir valor customizado em campanhas/atores configurados para isso.

A progressão de proficiência também pode variar por classe e opções internas. Modelar como dados da fonte/profile, não como uma constante global.

## 7. Resource Pools

Não reduzir o sistema a `slots[rank] = quantidade`.

Um Actor pode precisar representar, simultaneamente:

```text
Spellcasting Source
├── normal spell slots
├── restricted class pool
├── curriculum/school pool
├── apparition/special pool
├── focus points
├── innate uses
├── item charges
└── custom table resource
```

Cada pool precisa poder declarar:

```ts
type SpellResourcePool = {
  id: string
  label: string
  kind: string
  ranks?: Record<number, { max: number; current: number }>
  restrictions?: string[]
  source?: RuleReferenceSource
  editableByTable: boolean
}
```

Mesmo quando existe uma quantidade sugerida pelas regras oficiais, o Mestre deve poder ajustá-la em modo livre/advisory.

## 8. Ferramentas que o VTT deve oferecer antes de automação rígida

Priorizar capacidade operacional:

1. adicionar/remover Spells livremente da ficha;
2. visualizar definição, Rank base e Heightening da Spell;
3. organizar Spells por Rank e por fonte;
4. criar/editar fontes de spellcasting;
5. representar prepared, repertoire, spellbook e collections sem bloquear conteúdo custom;
6. criar/editar pools de slots/recursos por Rank;
7. marcar recursos gastos/restaurados manualmente;
8. mover/selecionar Spells entre Ranks para preview/cast context;
9. mostrar sugestões oficiais e avisos sem impedir override;
10. suportar Cantrip/Focus/Innate/Ritual como fontes diferentes;
11. permitir tradição e atributo customizados;
12. permitir Spell Attack/DC derivados ou manuais;
13. ligar Spell a Area Effect quando aplicável;
14. selecionar targets manualmente;
15. rolar ataque, save, dano e cura com ferramentas genéricas/manual-first;
16. aplicar/remove Effects manualmente;
17. registrar notas e overrides da mesa;
18. funcionar mesmo quando o sistema não consegue determinar legalidade oficial.

A ausência de automação nunca deve impedir o usuário de representar a ação manualmente.

## 9. Política de validação futura

Separar três categorias:

### 9.1 HARD — invariantes técnicas

Podem bloquear:

- campanha/Actor inexistente;
- falta de permissão;
- dado corrompido ou schema incompatível;
- recurso pertencente a outra campanha;
- referências inválidas que quebrariam persistência.

### 9.2 ADVISORY — regras de jogo

Devem preferencialmente avisar:

- Rank que não bate com progressão oficial;
- Spell fora da tradição/repertoire/preparation esperada;
- slot insuficiente;
- Heightening não usual pela referência;
- atributo/proficiência divergente da classe;
- uso de pool restrito com conteúdo diferente.

O Mestre pode confirmar/override quando a campanha permitir.

### 9.3 FREEFORM

Nenhuma validação de legalidade é exigida. O QuestHub fornece somente ferramentas e persistência.

## 10. Implicações para P2A / P2B

### P2A — seguro agora

Pode evoluir a representação da **Spell Definition** e preservar Heightening estruturado como metadata/referência. Isso melhora consulta e preview sem exigir qualquer enforcement.

### P2B — reduzir escopo imediato

Não construir agora um “resolver definitivo de legalidade PF2e”. Em vez disso, priorizar:

- `Cast Context` editável;
- `effectiveRank` selecionável;
- preview estruturado de Heightening;
- resource pool opcional;
- avisos de referência quando houver dados suficientes;
- override/freeform sempre disponível.

Progressões completas de classes, repertoires e preparation engines podem ser implementadas incrementalmente quando houver necessidade real de produto.

## 11. Perguntas que permanecem abertas

- qual será o default de campanha: `FREEFORM` ou `ADVISORY`;
- granularidade do override: campanha, Actor, fonte, Spell ou ação;
- como registrar visualmente que uma ação divergiu da regra de referência sem poluir a UI;
- quais resource pools merecem implementação dedicada e quais podem usar uma ferramenta genérica;
- quanto das tabelas por classe vale materializar agora versus somente quando a classe precisar de automação;
- como tratar conteúdo custom/homebrew sem criar caminhos paralelos difíceis de manter.

## 12. Direção atual

Até decisão posterior, a prioridade é **tool completeness > rules enforcement**.

A regra oficial existe para:

- oferecer bons defaults;
- explicar/previewar efeitos como Heightening;
- permitir automação opcional futura;
- reduzir erros quando o usuário deseja jogar próximo ao RAW.

Ela não existe para impedir uma mesa de jogar de outra forma.