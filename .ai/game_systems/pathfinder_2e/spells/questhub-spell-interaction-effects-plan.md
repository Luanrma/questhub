# QuestHub — Plano Canônico de Spells PF2e Totalmente Funcionais

> **Branch alvo:** `development`  
> **Ruleset de referência (dados):** `foundryvtt/pf2e`, branch `v14-dev`  
> **Snapshot auditado:** `aaa1b342a899d8f753a60a00ad5e2f88409e2e47`  
> **Regras de conjuração (normativo):** [`pathfinder-2e-regras-de-magias-questhub.md`](./pathfinder-2e-regras-de-magias-questhub.md) — **consulta obrigatória** antes de implementar qualquer fase deste plano; ver secao 4.0.  
> **Status:** plano obrigatório para paridade funcional com o PF2e do Foundry. Progresso atual: fases 1–3 concluídas, fases 4–8 parciais (conjuração pelo token com área visual + resolução de dano com salvamento básico para PC e NPC, ver secao 23), fase 9 não iniciada — ver secao 21 para o detalhe por fase e secao 22 para as próximas etapas propostas (mantido atualizado por regra explícita, secao 20.1).

---

## 1. Objetivo

Implementar no QuestHub um sistema de magias Pathfinder 2e funcional de ponta a ponta:

- magias e rituais importados sem perda mecânica;
- aba **Magias** na ficha de personagens e NPCs;
- conjuração preparada, preparada flexível, espontânea, inata, de foco, ritual e por item;
- slots, preparações, usos, pontos de foco, signature spells, recharge e refocus;
- variantes/overlays e diferentes quantidades de ações;
- spell attack, Spell DC, salvamentos, defesa passiva, MAP e counteract;
- dano, cura, heightening, dano persistente, imunidades, fraquezas e resistências;
- conditions, spell-effects, buffs, debuffs, Rule Elements e estatísticas derivadas;
- alvos próprios, únicos, múltiplos, pontos, objetos, caminhos e áreas;
- `burst`, `cone`, `cube`, `cylinder`, `emanation`, `line`, `ring` e `square`;
- interação com tokens, footprint, elevação, encontro, ações, movimento e HP;
- duração, sustain, expiração, auras e áreas persistentes;
- scrolls, wands, staves e embedded spells integrados ao inventário;
- chat, histórico, idempotência, permissões e sincronização em tempo real.

O objetivo não é apenas preparar terreno. Ao final, toda capacidade estruturada e executável existente no snapshot fixado do Foundry deve possuir equivalente no QuestHub.

---

## 2. Definição de “tudo funcional”

Para cada spell/ritual importado, o QuestHub deve conseguir:

1. carregar todos os campos mecânicos relevantes;
2. resolver entrada, rank, variante e escolhas;
3. validar e consumir o recurso correto;
4. calcular alcance, alvos e área;
5. executar ataque, save, counteract, dano ou cura;
6. resolver referências a effects, conditions e outros documentos;
7. aplicar e remover consequências mecânicas;
8. controlar duração, sustain e expiração;
9. pedir decisões tipadas quando a própria regra exigir escolha humana;
10. registrar e sincronizar toda a resolução.

Não são aceitos como entrega final:

- fallback genérico “resolver manualmente” para dados estruturados;
- macros ou UUIDs apagados da descrição;
- overlays ignorados;
- Rule Elements desconhecidos no grafo das spells;
- área conhecida sem renderer e validador;
- fórmula válida não suportada;
- effect reduzido a badge visual sem impacto mecânico.

---

## 3. Correção da análise anterior

O plano anterior tinha boa separação arquitetural, mas era insuficiente porque:

- aceitava `MANUAL` como fallback permanente;
- não importava `system.damage` integralmente;
- não modelava `system.overlays`;
- não importava `spell-effects`, conditions e dependências por UUID;
- não exigia Rule Engine;
- não cobria `cube`, `cylinder`, `ring` e `square`;
- não cobria defesa passiva, counteract e item casting;
- deixava buffs mecânicos e stacking para uma fase opcional.

Todos esses pontos passam a ser obrigatórios.

---

## 4. Fonte de verdade e importação

## 4.0. Documento normativo de regras — consulta obrigatória

Este plano possui **duas fontes de verdade complementares**, com papéis distintos:

1. **Snapshot do Foundry** (`foundryvtt/pf2e`, secoes 4.1–4.4): fonte dos **dados mecânicos** — definições de spells, effects, conditions, fórmulas, Rule Elements. É a régua de paridade estrutural (secao 15).
2. **[`pathfinder-2e-regras-de-magias-questhub.md`](./pathfinder-2e-regras-de-magias-questhub.md)**: fonte das **regras de conjuração e do comportamento esperado**. Desde a revisão de 2026-07-13, o documento tem duas partes: **Parte I** (especificação normativa com DEVE/NÃO DEVE — entidades mínimas, tabelas exatas de slots por classe E.1–E.5, fórmulas de CD/ataque C.6, coleções e capacidades E.7, foco/inatas/rituais/itens K, preparações diárias como transação L, validação de conjuração M com códigos de erro estáveis, casos de aceitação P) e **Parte II** (regras gerais de conjuração e resolução, seções 1–26 — citações antigas "secao N de lá" referem-se à Parte II).

Regras de uso:

- **Toda implementação de qualquer fase deste plano deve ser validada contra o documento de regras antes de ser considerada entregue.** Ele define o comportamento correto (ex.: Refocar recupera exatamente 1 ponto e é repetível — secao 7.3 de lá; elevação espontânea exige conhecer a magia no rank — secao 5.3 de lá; salvaguarda básica não pode ser presumida para toda magia — secao 16.3 de lá).
- Ao especificar contratos em `.ai/` ou escrever código, **citar a secao do documento de regras** que fundamenta a mecânica, da mesma forma que já se cita este plano.
- **Divergência entre os dados do snapshot e o documento de regras deve ser sinalizada, nunca resolvida silenciosamente** — o documento de regras vence para comportamento/fluxo (é a régua de produto do QuestHub); o snapshot vence para valores de dados de spells individuais.
- Se durante a implementação o documento de regras se mostrar incompleto ou impreciso para um caso concreto, atualizá-lo (ele já possui a secao 24, "Correções ao exemplo inicial", como precedente) — não contorná-lo.

## 4.1. Snapshot fixo

```ts
type Pathfinder2eSourceManifest = {
  repository: 'foundryvtt/pf2e'
  commitSha: string
  importedAt: string
  packs: Array<{ path: string; fileCount: number; checksum: string }>
}
```

O build não deve depender de uma branch mutável. Atualizar o SHA exige regeneração, diff e nova validação de paridade.

## 4.2. Grafo transitivo

A importação não pode ler apenas `packs/pf2e/spells`. Deve seguir referências e incluir:

- spell-effects;
- conditions;
- afflictions;
- actions/effects/items referenciados;
- dependências encadeadas por `GrantItem`, `EphemeralEffect`, `Aura` e UUIDs.

O compilador deve detectar referência ausente, ciclo, tipo incompatível e Rule Element desconhecido.

## 4.3. Importação lossless

O modelo PF2e deve preservar:

```ts
type Pathfinder2eSpellDefinition = {
  id: string
  source: Pathfinder2eSourceReference
  name: string
  rank: number
  rarity: string
  traits: string[]
  traditions: string[]
  time: Pathfinder2eCastTime
  cost: string
  requirements: string
  range: Pathfinder2eRange
  target: Pathfinder2eTargetSource
  area: Pathfinder2eAreaSource | null
  duration: Pathfinder2eDurationSource
  defense: Pathfinder2eSpellDefense | null
  damage: Record<string, Pathfinder2eSpellDamageComponent>
  heightening: Pathfinder2eSpellHeightening | null
  overlays: Pathfinder2eSpellOverlay[]
  counteraction: boolean
  ritual: Pathfinder2eRitualData | null
  rules: Pathfinder2eRuleElementSource[]
  description: Pathfinder2eRichTextDocument
  dependencyIds: string[]
}
```

Não usar texto sanitizado como fonte mecânica e não truncar a descrição original.

## 4.4. Diretivas inline

Compilar, em vez de apagar:

```ts
type Pathfinder2eRichTextNode =
  | { kind: 'TEXT'; value: string }
  | { kind: 'UUID'; uuid: string; label?: string }
  | { kind: 'CHECK'; statistic: string; dc?: string }
  | { kind: 'DAMAGE'; formula: string; damageType?: string }
  | { kind: 'TEMPLATE'; shape: string; distance?: number }
  | { kind: 'LOCALIZE'; key: string }
  | { kind: 'ACTION_GLYPH'; actions: number }
```

---

## 5. Arquitetura obrigatória

### Catálogo PF2e

```text
packages/game-system-pathfinder-2e/src/server/spells/
packages/game-system-pathfinder-2e/src/server/effects/
packages/game-system-pathfinder-2e/src/server/conditions/
```

Importa, valida, resolve dependências e compila definições.

### Character Spells

```text
.ai/game_systems/pathfinder_2e/character_spells/
apps/api/src/modules/character_spells/
packages/game-system-pathfinder-2e/src/server/character-spells/
```

Gerencia spellbook, entries, preparação e recursos. Não persistir spellbook dentro de `Character.sheet`.

### Spell Casting

```text
.ai/spell_casting/
.ai/game_systems/pathfinder_2e/spell_casting/
apps/api/src/modules/spell_casting/
```

Gerencia intenção, escolha, validação, consumo, resolução, log e eventos.

### Scene Geometry

```text
.ai/scene_geometry/
packages/game-system-core/src/shared/scene-geometry/
```

Gerencia coordenadas, footprint, elevação, distância, formas, interseção, caminhos e regiões. Permanece agnóstico de PF2e.

### PF2e Rule Engine

```text
.ai/game_systems/pathfinder_2e/rule_engine/
packages/game-system-pathfinder-2e/src/shared/rule-engine/
```

Gerencia roll options, selectors, predicates, modifiers, stacking, IWR, degrees of success, Rule Elements e dados derivados.

### Campaign Effects

```text
.ai/campaign_effects/
apps/api/src/modules/campaign_effects/
```

Persiste efeitos e áreas. `systemData` é interpretado pelo package PF2e.

---

## 6. Spellcasting Entries e spellbook

```ts
type Pathfinder2eSpellcastingCategory =
  | 'PREPARED'
  | 'SPONTANEOUS'
  | 'INNATE'
  | 'FOCUS'
  | 'ITEMS'
  | 'RITUAL'
```

O modelo deve suportar:

- prepared: spell por slot e `expended`;
- flexible prepared: coleção preparada + contador por rank;
- spontaneous: repertório + slots por rank;
- signature: heightening virtual nos ranks permitidos;
- innate: usos por spell e at-will;
- focus: custo em pontos e refocus;
- cantrip/focus: auto-heightening;
- items: entrada efêmera com predicate;
- ritual: coleção separada sem slot comum;
- ranks 0–10;
- recharge diário;
- spells de personagem e NPC.

Persistência recomendada:

```prisma
model CharacterSpellbook {
  id          String     @id @default(cuid())
  characterId String     @unique
  system      GameSystem
  version     Int        @default(1)
  revision    Int        @default(1)
  data        Json
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}
```

Usar optimistic concurrency por `revision`.

---

## 7. Variantes, overlays e heightening

Ordem obrigatória:

```text
definição base
→ overlay/variante escolhida
→ patches fixed de heightening
→ scaling interval
→ documento efetivo
→ targeting e plano de execução
```

Teste obrigatório: **Heal**.

- 1 ação: touch;
- 2 ações contra vivo: cura ampliada;
- 2 ações contra undead: vitality damage + save;
- 3 ações: emanation;
- scaling por rank.

O compilador deve preservar múltiplos componentes de dano, `kinds`, `applyMod`, tipo, categoria e materiais.

---

## 8. Aba Magias

Adicionar página no renderer PF2e:

```ts
pages: [
  { title: 'Atributos', Icon: Dumbbell },
  { title: 'Proficiências', Icon: BadgeCheck },
  { title: 'Magias', Icon: WandSparkles },
]
```

Antes disso, decompor `Pathfinder2eSheetForm.tsx` em páginas, hooks, domínio e infraestrutura.

A aba deve suportar:

- múltiplas entries;
- Spell DC, attack e counteract;
- slots/preparações;
- flexible prepared;
- repertório/signature;
- focus pool;
- innate uses;
- variantes/rank;
- abrir ficha;
- conjurar;
- recharge/refocus;
- rituais;
- PCs e NPCs.

O Livro de Magias adiciona uma referência à ficha; não copia o catálogo integral.

---

## 9. Rule Engine PF2e

Implementar:

- roll options e domains;
- selectors;
- predicates;
- resolvables;
- modifiers;
- stacking de item/status/circumstance/untyped;
- degree-of-success adjustments;
- damage alterations;
- immunities, weaknesses e resistances;
- dados derivados de AC, saves, skills, spell DC, speeds, senses e ações.

Implementar todos os Rule Elements usados pelo fechamento transitivo das spells/effects do snapshot. Entre as famílias auditadas:

```text
ActiveEffectLike, AdjustDegreeOfSuccess, AdjustModifier, Aura,
BaseSpeed, BattleForm, ChoiceSet, DamageAlteration, DamageDice,
EphemeralEffect, FastHealing, FlatModifier, GrantItem, Immunity,
ItemAlteration, LoseHitPoints, Resistance, RollOption, RollTwice,
Sense, SpecialResource, SpecialStatistic, SubstituteRoll, TempHP,
TokenEffectIcon, TokenImage, TokenLight, Weakness
```

Gate:

```text
unknownRuleElementsInSpellDependencyGraph === 0
```

Exemplo obrigatório: **Haste → Spell Effect: Haste → GrantItem → Quickened**.

---

## 10. Geometry e targeting

Todas as oito formas auditadas:

```ts
type SceneEffectShape =
  | { kind: 'BURST'; center: ScenePoint; radius: number }
  | { kind: 'CONE'; origin: ScenePoint; direction: number; length: number; angle: 90 }
  | { kind: 'CUBE'; origin: ScenePoint; size: number }
  | { kind: 'CYLINDER'; center: ScenePoint; radius: number; height?: number }
  | { kind: 'EMANATION'; tokenId: string; radius: number }
  | { kind: 'LINE'; origin: ScenePoint; direction: number; length: number; width: number }
  | { kind: 'RING'; center: ScenePoint; radius: number; thickness: number }
  | { kind: 'SQUARE'; origin: ScenePoint; size: number }
```

Suportar:

- grid square e hex;
- footprint maior que 1×1;
- elevação/altura;
- preview e snap;
- rotação;
- interseção;
- persistência da região;
- mesma validação no cliente e servidor;
- alvos self, single, multiple, point, path e object;
- line of effect e cover quando o módulo de paredes existir.

A distância mecânica PF2e deve vir de uma `GameSystemDistancePolicy`. `metersPerCell` não decide a regra.

---

## 11. Fluxo e transação de conjuração

Pontos de entrada do fluxo (ambos obrigatórios — ver secao 23, item 2):

- aba Magias da ficha (secao 8);
- menu de contexto do token na cena (botão direito → "Lançar magia"), para tokens controlados pelo jogador ou pelo Mestre.

```ts
type SpellCastState =
  | 'CHOOSING_ENTRY'
  | 'CHOOSING_VARIANT'
  | 'CHOOSING_RANK'
  | 'CHOOSING_OPTIONS'
  | 'SELECTING_TARGETS'
  | 'PLACING_AREA'
  | 'CONFIRMING'
  | 'COMMITTING'
  | 'ROLLING'
  | 'APPLYING'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'FAILED'
```

Servidor deve revalidar:

- ator/token/controle;
- cena/turno/action economy;
- entry/spell/variant/rank;
- slot/foco/use/item;
- quantidade e elegibilidade dos alvos;
- range/geometry/line of effect;
- revisão do spellbook.

Usar `clientCastId` único. Retry deve retornar o resultado anterior e nunca consumir recurso duas vezes.

---

## 12. Resolução

### Spell attack

- statistic da entry;
- defesa passiva;
- MAP;
- degree of success;
- modifiers/effects.

### Saves

- Spell DC;
- Fortitude/Reflex/Will;
- quatro graus;
- basic save: 0, metade, total, dobro;
- resolução independente por alvo.

### Damage/healing

- múltiplos componentes;
- fórmulas seguras;
- cast rank/heightening;
- damage/healing híbrido;
- tipos, categorias, materiais;
- critical/basic save;
- IWR;
- persistent damage;
- aplicação final via módulo `combat`.

### Counteract

- statistic própria;
- DC/rank;
- limite por grau de sucesso;
- remoção/suspensão do efeito.

### Decisão narrativa

Quando a regra exigir julgamento humano, criar workflow tipado com texto, opções, alvos, resultado e log. Não usar um fallback genérico.

---

## 13. Effects, conditions e action economy

`CampaignEffectInstance` deve suportar:

- origin/caster/target;
- duration e expiry;
- sustained;
- encounter/unlimited/real time;
- turn-start, turn-end e round-end;
- badges e reevaluation;
- aura;
- token icon/light/image;
- Rule Elements;
- GrantItem;
- cleanup encadeado;
- região persistente.

O encounter precisa modelar:

```ts
type Pathfinder2eTurnEconomy = {
  actions: number
  reactionAvailable: boolean
  quickenedActions: Array<{
    sourceEffectId: string
    allowedActions: string[]
  }>
}
```

Validar 1/2/3 ações, reactions, free actions, quickened, slowed, stunned, sustain e tempos maiores que um turno.

---

## 14. Item casting e rituais

### Item casting

Integrar com inventário:

- scroll;
- wand;
- staff;
- embedded spell;
- charges/uses;
- predicate;
- consumo/destruição;
- origem registrada.

### Rituais

- primary/secondary casters;
- quantidade mínima;
- primary/secondary checks;
- tempo/custo;
- graus de resultado;
- aplicação e log;
- sem slot comum.

---

## 15. Gate de compatibilidade

Gerar relatório em CI:

```ts
type Pathfinder2eSpellCompatibilityReport = {
  sourceCommitSha: string
  totalSpells: number
  totalRituals: number
  spellsWithExecutableProfile: number
  unknownFields: unknown[]
  unknownAreaShapes: unknown[]
  unknownRuleElements: unknown[]
  unresolvedReferences: unknown[]
  invalidFormulas: unknown[]
  invalidPredicates: unknown[]
  compilationFailures: unknown[]
}
```

Release gate:

```text
unknownFields.length === 0
unknownAreaShapes.length === 0
unknownRuleElements.length === 0
unresolvedReferences.length === 0
invalidFormulas.length === 0
invalidPredicates.length === 0
compilationFailures.length === 0
spellsWithExecutableProfile === totalSpells + totalRituals
```

Não usar `@ts-nocheck` como solução final para os dados gerados.

---

## 16. Golden fixtures obrigatórias

- **Fireball:** burst, basic Reflex, damage e interval heightening;
- **Heal:** overlays 1/2/3 ações, healing/damage e emanation;
- **Haste:** fixed heightening, linked effect, GrantItem e Quickened;
- spell attack;
- passive defense;
- counteract;
- todas as oito áreas;
- focus spell/cantrip;
- innate at-will/limited;
- prepared/flexible;
- spontaneous signature;
- scroll/wand/staff;
- ritual;
- sustained area;
- persistent damage;
- aura;
- summon;
- forced movement;
- ChoiceSet;
- condition valued.

Também testar square/hex, footprint, elevação, hidden tokens, idempotência, rollback e revision conflict.

---

## 17. Fases de execução

1. **Baseline:** fixar SHA, manifest e ADRs.
2. **Importador lossless:** schemas, damage, defense, heightening, overlays e rich-text AST.
3. **Dependency graph:** effects, conditions, afflictions, UUID resolver e checksums.
4. **Character Spells:** spellbook, entries, slots, preparação e aba Magias.
5. **Rule Engine:** predicates, selectors, stacking, Rule Elements e derived stats.
6. **Geometry:** oito formas, square/hex, footprint, elevação e regiões.
7. **Casting transaction:** capability, choices, consumo, action economy, log e socket.
8. **Resolution:** attacks, saves, damage/healing, IWR e counteract.
9. **Effects completos:** conditions, duration, sustain, aura e cleanup.
10. **Parity closure:** zerar o relatório e validar o catálogo completo.

Nenhuma fase pode ocultar incompatibilidades para permitir que a seguinte avance.

---

## 18. Definition of Done

A feature só está concluída quando todos os itens abaixo estiverem ✅. Estados: ✅ concluído, 🟡 em andamento/parcial, ❌ não iniciado (ver secao 20.1 — nunca deixar um item 🟡 marcado como se fosse binário).

- ✅ 100% das spells e rituais do snapshot compilam (1.716/1.716, 0 `compilationFailures` — ver `.ai/game_systems/pathfinder_2e/spells/specs.md`);
- ✅ 100% das dependências alcançáveis resolvem (0 `unresolvedReferences` no fechamento estrutural GrantItem/EphemeralEffect/Aura + links de effect na descrição — escopo de "alcançável" documentado em `spells/skills.md` secao 6, nao cobre toda citação em prosa);
- 🟡 overlays e heightening funcionam (dados preservados losslessly na importação; nenhuma execução/interpretação ainda — ninguém consome isso);
- 🟡 todos os modos de conjuração funcionam (consumo real implementado para prepared/spontaneous/focus/innate/cantrip via `.ai/spell_casting/`, com descanso/refocus; espontâneo valida rank mínimo do repertório e refocus recupera exatamente 1 ponto total — regras 5.3/7.3 do doc normativo, corrigidas na auditoria de 2026-07-13; sem flexible prepared explicito, sem signature validado, sem item casting/ritual);
- 🟡 aba Magias funciona para PC e NPC (existe para PC — leitura/edição via `.ai/game_systems/pathfinder_2e/character_spells/`, com busca no catálogo para magias conhecidas/rituais; slots preparados ainda texto livre; não testada para NPC);
- 🟡 attacks, saves, damage/healing e counteract funcionam (fatia mínima da fase `Resolution` entregue: dano com salvamento básico contra alvos selecionados individualmente, PC e NPC como conjurador e alvo — ver secao 21 fase 8; sem spell attack, salvamento não-básico, dano composto, cura, counteract, heightening no dano);
- 🟡 todas as oito áreas funcionam em square e hex (as 8 formas implementadas e testadas em grid **square**; em grid **hex**, 4 das 8 (burst/emanation/cylinder/ring) — cone/linha/quadrado/cubo bloqueados com mensagem honesta em vez de aproximação, ver `.ai/scene_geometry/specs.md` secao 7);
- 🟡 effects/conditions alteram estatísticas reais (CA e os três salvamentos já somam `FlatModifier` de efeitos ativos via `.ai/game_systems/pathfinder_2e/character_effects/`; Spell DC, perícias, Percepção, velocidade e criação automática de efeito por conjuração ainda não existem);
- 🟡 Rule Elements usados possuem implementação (21 de 30 famílias auditadas — ver `.ai/game_systems/pathfinder_2e/rule_engine/`; faltam `BattleForm`, `Aura`, `ChoiceSet`, `DamageDice`, `DamageAlteration`, `Strike`, `AdjustStrike`, `ItemAlteration`, `AdjustModifier`);
- 🟡 duração, sustain, auras e action economy funcionam (action economy simples de conjuracao 1/2/3 acoes ja debita `actionsRemaining` do Encounter Mode; faltam reactions, free actions, quickened/slowed/stunned, sustain, duracao, auras e cleanup);
- ❌ item casting e rituais funcionam (nao iniciado — fase `Item Casting`; rituais so existem como referência no spellbook, sem fluxo de execução);
- ✅ retry não duplica consumo ou efeito (`clientCastId` obrigatório no `POST /api/characters/:id/cast`, recibo salvo em `spellbook.data.pathfinder2e.recentCasts`, replay devolve o resultado anterior; `revision` otimista continua protegendo casts novos concorrentes);
- 🟡 informações secretas não vazam (fluxos de conjuração/resolução agora existem; mitigação atual: cada cliente calcula alvos de área só sobre os tokens que enxerga, HP de NPC é apresentado por papel via `presentHealthForCombatant`; auditoria dedicada de vazamento — rolagens, DCs de NPC, tokens ocultos — ainda não feita);
- ✅ relatório possui zero incompatibilidades **no escopo do importador** (`unresolvedReferences: []`, `compilationFailures: []`; `unknownRuleElementKeys` tem 11 entradas — famílias reais fora da lista audita da secao 9, reportadas e não escondidas, ver `spells/specs.md` secao 1.4);
- ✅ core permanece agnóstico de PF2e (mantido em toda a implementação: `packages/game-system-core` nunca ganhou campo mecânico específico de PF2e).

---

## 19. Primeira entrega recomendada

Começar por:

```text
Baseline + importador lossless + dependency graph
```

Resultado obrigatório:

- snapshot fixado;
- dados sem perda;
- overlays;
- rich-text AST;
- spell-effects/conditions resolvidos;
- compatibility report;
- fixtures Fireball, Heal e Haste.

Depois implementar:

```text
Character Spells + Rule Engine
```

Somente então iniciar geometry, casting e resolução.

---

## 20. Regra para o agent executor

Antes de iniciar qualquer rodada de trabalho deste plano, **ler as secoes relevantes de [`pathfinder-2e-regras-de-magias-questhub.md`](./pathfinder-2e-regras-de-magias-questhub.md)** (secao 4.0) para a mecânica que será tocada — é ela que define o comportamento correto que a implementação deve reproduzir.

Quando uma spell for complexa:

1. localizar a regra correspondente no documento normativo de regras (secao 4.0) e as secoes de "Requisitos para a ficha/VTT" aplicáveis;
2. localizar documento e overlays;
3. seguir referências;
4. carregar effects/conditions;
5. localizar Rule Elements e código equivalente no Foundry;
6. extrair o comportamento para contratos próprios;
7. implementar sem depender do runtime Foundry;
8. criar golden test validando o comportamento descrito no documento de regras;
9. atualizar o relatório.

O agent não pode encerrar a implementação usando “complexa demais” ou “resolver manualmente” quando os dados/código do snapshot descrevem a execução.

## 20.1. Regra de Manutenção deste Documento

Este documento não é estático: ele é reescrito ao longo da implementação para continuar servindo como fonte de verdade. Ao final de toda rodada de trabalho que toque qualquer fase deste plano (implementação, decisão de escopo, ou mesmo uma investigação que revele que algo já descrito aqui está errado), o agent deve, nesta ordem:

1. **Atualizar o texto conforme necessário.** Se uma decisão tomada durante a implementação diverge do que este documento descrevia (nomes de contrato, escopo de uma fase, formato de dado), corrigir o texto original — não deixar a seção 1–17 desatualizada só porque as seções de status (21+) contam a história real. Divergência não documentada aqui é a mesma falha que a seção 2 já proíbe ("fallback genérico" por omissão).
2. **Marcar o que já foi concluído, o que está em andamento e o que falta fazer.** Usar os três estados (✅ concluído, 🟡 em andamento/parcial, ❌ não iniciado) — nunca só "feito"/"não feito" quando a realidade é parcial (ex.: uma fase com dados prontos mas sem consumidor real é 🟡, não ✅). Isso vale tanto para a tabela da seção 21 quanto para os itens do Definition of Done (seção 18).
3. **Atualizar a seção 22 (Próximas Etapas Propostas).** Remover itens concluídos, adicionar itens novos descobertos durante a implementação (ex.: uma dependência ou decisão de produto que só ficou visível ao construir a fase anterior), e reordenar por prioridade quando fizer sentido.
4. **Verificar aderência ao documento normativo de regras** ([`pathfinder-2e-regras-de-magias-questhub.md`](./pathfinder-2e-regras-de-magias-questhub.md), secao 4.0): a rodada não introduziu comportamento que contradiga uma regra lá descrita? Se a rodada revelou lacuna ou imprecisão no próprio documento de regras, atualizá-lo na mesma rodada.

Esta regra existe para que qualquer pessoa (ou agent) que abra este documento depois — mesmo sem o contexto da conversa em que uma fase foi implementada — saiba exatamente o que existe, o que é parcial e por quê, e o que vem a seguir, sem precisar arqueologia em `git log` ou nos módulos `.ai/` individuais.

---

## 21. Status de Implementação (atualizado incrementalmente)

Esta seção é mantida em sincronia com o progresso real, seguindo a regra da secao 20.1 — atualizar a cada rodada concluída, nunca deixar desatualizada.

| # | Fase | Status | Onde |
|---|---|---|---|
| 1 | Baseline | ✅ Concluída | `.ai/game_systems/pathfinder_2e/spells/specs.md` secao 1.4 (`Pathfinder2eSourceManifest`) |
| 2 | Importador lossless | ✅ Concluída | `spells/specs.md` secao 1.2 (`Pathfinder2eSpellDefinition`, rich-text AST) |
| 3 | Dependency graph | ✅ Concluída (escopo estrutural documentado) | `spells/specs.md` secao 1.3 |
| 4 | Character Spells | 🟡 Dados + UI + busca no catálogo (magias conhecidas/rituais) concluídos; slots preparados ainda com texto livre, sem validação para NPC | `.ai/game_systems/pathfinder_2e/character_spells/` |
| 5 | Rule Engine | 🟡 Substrato + 21 famílias de Rule Element resolvidas; consumidores conectados: CA e os três salvamentos (Fortitude/Reflexo/Vontade) somam `FlatModifier` de efeitos ativos, `.ai/game_systems/pathfinder_2e/character_effects/` — Spell DC, perícias, Percepção e velocidades ainda sem ligação | `.ai/game_systems/pathfinder_2e/rule_engine/`, `.ai/game_systems/pathfinder_2e/character_effects/` |
| 6 | Geometry | 🟡 Módulo agnóstico criado (`packages/game-system-core/src/shared/scene-geometry`): 8 formas → células cobertas + tokens afetados em grid quadrado; grid **hexagonal** com cobertura parcial (burst/emanation/cylinder/ring, distância em passos hexagonais) — cone/linha/quadrado/cubo continuam bloqueados em hex. Preview/pintura de células/destaque de alvos funcionando no VTT para os dois grids, com revalidação server-side de forma/alcance. Pendente: cone/linha/quadrado/cubo em hex, footprint >1x1, elevação, line of effect, regiões persistentes | `.ai/scene_geometry/` |
| 7 | Casting transaction | 🟡 Fatia mínima: botão direito no token → painel de conjuração → posicionar área OU selecionar token(s) alvo (preview compartilhado via socket) → consumo real do recurso (prepared/spontaneous/focus/innate/cantrip) com concorrência otimista, replay idempotente por `clientCastId`, revalidação server-side de cena/token/forma/alcance/alvos, action economy simples (1/2/3 acoes no Encounter Mode) e chat/log de conjuração citando os alvos; descanso diário + refocus. Seleção de alvo cobre ~86% das magias com texto de alvo parseável. Pendente: alvo composto/trait-based e action economy avançada | `.ai/spell_casting/`, `.ai/game_systems/pathfinder_2e/spell_casting/` |
| 8 | Resolution | 🟡 Fatia mínima (rodada de 2026-07-13): dano com salvamento básico (`defense.save.basic === true`, componente único de dano, ~185 magias reais) contra alvos selecionados individualmente (Fase 7) — Spell DC calculado no servidor (fórmula para personagem, `npcSpellDC` fixo para NPC), rolagem de d20 e de dano autoritativa (`.ai/dice/`), grau de sucesso PF2e completo (nat 20/1), dano aplicado automaticamente ao HP real via `.ai/combat/` (exceção documentada ao guard Mestre-only). **Alvos e conjuradores NPC implementados na mesma rodada** (secao 22 item 11, `.ai/game_systems/pathfinder_2e/npc_spellcasting/`) — não é mais uma extensão futura; **dano em alvo NPC só passou a ser aplicado de verdade na auditoria de 2026-07-13** (guard residual na porta de HP, secao 22 item 12). Pendente: ataque de magia (sem salvamento), salvamento não-básico, dano composto, cura, heightening no dano (secao 22 item 14), resolução para alvos de área (personagem ou NPC) | `.ai/game_systems/pathfinder_2e/resolution/`, `.ai/dice/`, `.ai/game_systems/pathfinder_2e/npc_spellcasting/` |
| 9 | Effects completos | ❌ Não iniciada | — |
| 10 | Parity closure | 🟡 Só no nível do importador (Fase 1–3); a closure completa do plano depende das fases 5–9 | — |

Famílias de Rule Element resolvidas (Fase 5, parcial): `FlatModifier`, `GrantItem`, `RollOption`, `Immunity`, `Weakness`, `Resistance`, `TempHP`, `Sense`, `ActorTraits`, `BaseSpeed`, `Note`, `ActiveEffectLike`, `AdjustDegreeOfSuccess`, `RollTwice`, `TokenLight`, `TokenMark`, `DexterityModifierCap`, `Striking`, `WeaponPotency`, `FastHealing`, `CriticalSpecialization`, `MartialProficiency`, `EphemeralEffect`.

Famílias de Rule Element pendentes: `BattleForm`, `Aura`, `ChoiceSet`, `DamageDice`, `DamageAlteration`, `Strike`, `AdjustStrike`, `ItemAlteration`, `AdjustModifier` — todas exigem contexto de dano/rolagem real ou UI de escolha do jogador que ainda não existe em nenhuma camada do QuestHub.

## 22. Próximas Etapas Propostas

Sem ordem obrigatória entre si (ao contrário das fases 1–10, que têm dependência sequencial); a escolha de qual seguir é uma decisão de produto, não técnica:

1. ~~Conectar o Rule Engine a um consumidor real.~~ **Concluído** (rodada de 2026-07-13): `.ai/game_systems/pathfinder_2e/character_effects/` guarda efeitos ativos por personagem e o cálculo de CA (`.ai/game_systems/pathfinder_2e/armor_class/`) soma os `FlatModifier` desses efeitos via `resolveFlatModifiers`/`applyStackingRules`. Escopo deliberadamente mínimo: só `FlatModifier` de `selector: 'ac'`, efeitos criados manualmente pelo dono/Mestre (sem duração, sem criação automática por conjuração). Ver `character_effects/readme.md` para o contrato completo.
2. ~~Estender o consumidor do Rule Engine para outras estatísticas.~~ **Parcialmente concluído** (rodada de 2026-07-13): salvamentos (Fortitude/Reflexo/Vontade) agora somam `FlatModifier` de efeitos ativos, mesmo padrão do CA (`selector` específico do salvamento OU `'saving-throw'`, selector real do PF2e para "todos os salvamentos", auditado em `pf2e-master/packs`). Descoberta lateral corrigida na mesma rodada: os salvamentos **não tinham nenhuma fórmula automática** antes disso (só um número digitado, sem rank editável na UI) — divergência do contrato já registrado em `character_sheet/specs.md` secao 6, documentada e corrigida em `character_sheet/specs.md` secao 6.1. Spell DC ganhou formula real nesta rodada (`calculateSpellDC`, secao 22 item 7/Resolution) — mas so e usada internamente pela rota de resolucao, a ficha (aba Magias) ainda nao mostra Spell DC nenhum. Restam perícias, Percepção e velocidade — cada uma é uma decisão de produto própria (qual selector, qual tela mostra o breakdown) a confirmar com o usuário antes de implementar. Percepção tem a mesma lacuna que os salvamentos tinham (sem fórmula automática); perícias já são calculadas mas ainda não somam Rule Engine.
3. **Completar as famílias de Rule Element restantes** (`BattleForm`, `Aura`, `ChoiceSet`, `DamageDice`, `DamageAlteration`, `Strike`, `AdjustStrike`, `ItemAlteration`, `AdjustModifier`) — cada uma exige infraestrutura própria (pipeline de dano, UI de escolha do jogador, modelo de strike/arma) que ainda não existe; não são mais um resolver isolado como as 21 já feitas.
4. ~~Scene Geometry (fatia square + hex parcial).~~ **Parcialmente concluído** (rodadas de 2026-07-13): módulo agnóstico criado (`packages/game-system-core/src/shared/scene-geometry`, docs em `.ai/scene_geometry/`) com as 8 formas → células cobertas + tokens afetados em grid quadrado, testado; consumido pelo overlay visual do VTT (`SpellAreaOverlay.tsx`: células pintadas, alvos destacados, anel de alcance) e revalidado no servidor (`spell_casting/routes.ts`). Estendido para grid **hexagonal**: burst/emanation/cylinder/ring cobertos via distância hexagonal em passos inteiros (`computeCoveredHexCells`/`hexDistanceInCells`, convenção odd-r idêntica à já usada pelo VTT para tokens/régua), com placement, overlay e revalidação server-side funcionando nos dois grids. Decisão de produto confirmada: cone/linha/quadrado/cubo **não** têm convenção hexagonal implementada — nenhum VTT de referência resolve essas 4 formas da mesma forma sobre hex, bloqueados com mensagem em vez de aproximação. **Pendente**: cone/linha/quadrado/cubo em hex, footprint >1x1, elevação, line of effect, regiões persistentes.
5. ~~Busca real no catálogo na aba Magias.~~ **Concluído** (rodada de 2026-07-13) para magias conhecidas e rituais: novo endpoint `GET /api/campaigns/:campaignId/spells/search` (`.ai/game_systems/pathfinder_2e/spells/specs.md` secao 4.1), aberto a qualquer membro ativo da campanha (não só o Mestre), devolvendo só `id`/`name`/`category`/`rank`/`tags` — o catálogo completo (descrição, dano, salvamento) continua Mestre-apenas. UI: `SpellSearchPicker` (`packages/game-system-pathfinder-2e/src/web/character-sheet/spells/components/SpellSearchPicker.tsx`). Não cobre a edição inline de slots preparados (`PreparedSlotsList`), que continua com texto livre — limitação separada, ver `character_spells/skills.md` secao 5.
6. ~~Casting Transaction (fatia mínima + seleção de alvo).~~ **Parcialmente concluído** (rodadas de 2026-07-13): botão direito no token → "Lançar magia" → painel com magias do spellbook e estado do recurso → magias com área entram em modo de posicionamento (preview efêmero compartilhado via `vtt:spell-area:*`, células pintadas, alvos destacados, anel de alcance); magias **sem área** cujo texto de alvo do catálogo parseia como contagem simples (`parsePathfinder2eSpellTargetCount` — "1 creature", "up to N", "N or M", ~86% das magias com texto de alvo) entram em modo de seleção de alvo (clicar token(s) na cena, HUD com confirmar/cancelar, anel roxo nos selecionados) → confirmação consome o recurso real (`POST /api/characters/:id/cast`, transformação pura `applyPathfinder2eCast` com `revision` otimista e `clientCastId` idempotente) → servidor revalida cena/token/forma/alcance (área) ou contagem/existência/alcance de cada alvo (seleção de alvo) → se houver encontro ativo, tempos PF2e simples (1/2/3 acoes) debitam `actionsRemaining` do participante ativo → chat/log de conjuração registra o fato confirmado, citando os nomes dos alvos quando houver → flash de conjuração para toda a mesa. Descanso diário e refocus implementados. Docs: `.ai/spell_casting/` + `.ai/game_systems/pathfinder_2e/spell_casting/`. **Bug real corrigido nesta rodada**: `castContext` no handler de cast tinha duas formas inconsistentes (uma crua, outra envelopada em `{ok,context}`) dependendo do caminho — encontrado via `tsc --noEmit` manual, já que **nenhum script do projeto typecheca `apps/api/src/modules/**`** (lacuna de tooling registrada, não corrigida ainda — decisão pendente com o usuário). **Pendente para a Fase 7 completa**: alvo composto/trait-based ("willing", "1 ally and 1 enemy"), flexible prepared e signature spells no consumo, action economy avançada (reactions/free actions/quickened/slowed/stunned/sustain). Decisão em aberto: conjuração criar efeitos ativos automaticamente em `character_effects` (ex.: Shield) — precisa confirmação do usuário.
7. ~~Resolution~~ **Fatia mínima concluída** (rodada de 2026-07-13, escolha explícita do usuário via pergunta de escopo: "só alvos que são personagens de jogador"): `POST /api/characters/:characterId/spells/:spellId/resolve` (dentro de `spell_casting/routes.ts`, reuso deliberado da resolução de cena/token já privada nesse arquivo) resolve dano com salvamento básico contra alvos player-character selecionados individualmente na Fase 7 — novo módulo `.ai/dice/` (formula `NdM`/`NdM+K`/flat, rolagem autoritativa com `node:crypto`), Spell DC calculado pela primeira vez no servidor (`calculateSpellDC`, mesmo padrão aditivo de Rule Engine do CA/salvamentos, selector real `spell-dc`), grau de sucesso PF2e completo com nat 20/nat 1 (`calculatePathfinder2eDegreeOfSuccess`), dano aplicado automaticamente ao HP real via nova porta `applyResolvedCombatHealth` em `campaign-presence` (exceção documentada ao guard Mestre-only de `.ai/combat/specs.md` secao 6.4 — resultado computado pelo servidor, não editado pelo jogador). Prova de cast real via `clientCastId` no ledger `recentCasts` (impede resolver sem ter conjurado). Ver `.ai/game_systems/pathfinder_2e/resolution/` para o contrato completo e a lista auditada do que fica de fora. **Pendente**: ataque de magia sem salvamento (126 magias reais), salvamento não-básico (138), dano composto (37), cura (28), resolução para alvos de área (só cobre seleção individual nesta fatia), idempotência de rede (sem ledger de `clientResolveId`), **Effects completos** (duração, sustain, auras, cleanup — fase separada, não iniciada). Alvos/conjuradores NPC **saíram da lista de pendências sem solução** e ganharam design especificado (secao 22, item 11) — a afirmação original de que "não há salvamento modelado para NPC" estava errada (o catálogo já tem `saves.fortitude/reflex/will` fixos); a lacuna real era só a ausência de um livro de magias por NPC.
8. **Item Casting** (scrolls/wands/staves) — depende da transação de conjuração (agora existente na forma mínima) e da integração já existente do inventário.
9. ~~Derivar spellcasting entries da classe do personagem.~~ **Concluído na forma de sugestão** (rodada de 2026-07-13): `spellcasting-suggestion.ts` (tabela auditada das 11 classes conjuradoras do compêndio) + `SuggestedEntryCard` na aba Magias — spellbook vazio + classe conjuradora selecionada → card oferece criar a entrada com tradição/categoria/atributo corretos e slots pela progressão da classe (tabelas E.1–E.3 do doc normativo; **progressões de feiticeiro/oráculo/psíquico corrigidas no 2º loop de auditoria**, item 16); tradição/atributo que dependem de escolha real (feiticeiro/bruxa/invocador/psíquico) viram dropdown obrigatório. **Pendente**: magias inatas de ancestralidade/herança via feats (depende do modelo de feats, inexistente); flexible prepared; progressão própria de magus/summoner/animist (entram sem tabela de slots, E.4/E.5).
10. **[Novo] Cobrir `apps/api/src/modules/**` por typecheck.** Descoberto ao investigar um bug real em `spell_casting/routes.ts` (secao 21, item 7): nenhum script do projeto (`test:unit`, `dev:api`) typecheca as rotas Fastify — `test:unit` só cobre `packages/**` + `unit.test.ts` via `apps/api/tsconfig.test.json`, e `dev:api` usa `tsx` (transpila sem checar tipos). Isso deixou passar um erro de tipo genuíno sem detecção. Não corrigido nesta rodada (fora do escopo de "seleção de alvo") — decisão de produto/infra a confirmar com o usuário: criar um script `typecheck:api` dedicado, ou estender o `include` de `tsconfig.test.json`.
11. ~~NPCs como conjuradores e como alvos.~~ **Concluído** (rodada de 2026-07-13). Pedido explícito do usuário: "as spells afetem tokens de NPCs" + "criaturas devem poder 'castar' spells e o Mestre deixar pré-pronto esses monstros":
   * **Alvo NPC** (`.ai/game_systems/pathfinder_2e/resolution/specs.md` secao 7.1): o catálogo de bestiário já guardava salvamentos fixos (`Pathfinder2eBestiarySheet.saves.fortitude/reflex/will`, estilo statblock impresso) — ligado ao endpoint de resolução via `loadNpcTargetSaveInput`, sem fórmula nova. ~~`applyResolvedCombatHealth` (módulo `combat`) já era agnóstico de `source`, não precisou mudar.~~ **Correção (auditoria de 2026-07-13, item 12 abaixo):** essa afirmação estava errada — a porta ainda carregava um guard `source !== 'character'` da fatia PC-only, e como as rotas de resolução engolem falha da porta com `continue`, dano em alvo NPC era calculado e reportado mas **nunca aplicado ao HP**. Guard removido; ver `.ai/combat/specs.md` secao 6.4.
   * **NPC conjurador, customizável pelo Mestre e reutilizável entre cenas** (`.ai/game_systems/pathfinder_2e/bestiary/specs.md` secao 8 + `.ai/game_systems/pathfinder_2e/npc_spellcasting/`): nova entidade por campanha `CampaignNpcDefinition` (migration `20260713194318_add_campaign_npc_definition`), mesmo padrão já usado para itens custom do Mestre (`CampaignItemDefinition` — nunca muta o catálogo original, clona/customiza por campanha, dedup por chave única). Escolha explícita do usuário entre 3 opções apresentadas: **definição reutilizável**, com a ressalva de que a ficha original do catálogo nunca é alterada. O spellbook de NPC reaproveita o mesmo tipo `Pathfinder2eCharacterSpellbookData` e as mesmas funções puras de consumo/cast-options já testadas para personagem — só a Spell DC muda de fórmula para valor fixo por entrada (`npcSpellDC`).
   * Permissão: conjurar por um NPC é sempre Mestre-only (`getMasterCampaignAccess`, não existe "dono" de NPC).
   * UI: botão "Customizar" nos cards de NPC do bestiário → editor de spellbook (`NpcSpellbookEditorModal`, só entradas `INNATE` nesta rodada) → NPC customizado aparece automaticamente na barra de tokens preparados (sem precisar "preparar") → menu de contexto do token ganha "Lançar magia (NPC)" (`NpcSpellCastPanel`) → seleção de alvo na cena reaproveita a mesma UI já usada para personagem (qualquer tipo de token já era selecionável, não precisou mudar).
   * Decisão de engenharia registrada: as funções de resolução de cena/geometria do conjurador NPC foram **duplicadas em paralelo** (`spell_casting/npc-routes.ts`) em vez de generalizar as funções já testadas do fluxo de personagem — risco maior que duplicação dado que `apps/api/src/modules/**` não tem cobertura de typecheck nem teste automatizado (item 10 abaixo). `resolveSpellResolutionScene` (usada só pelo endpoint de resolução, não pelo de cast) foi generalizada de verdade, por ter um único call site.
   * Fora de escopo mesmo após esta rodada (herdado das limitações já registradas de Resolution): ataque de magia sem salvamento, salvamento não-básico, dano composto, cura, efeitos ativos de NPC (`ruleElements` sempre vazio), action economy de NPC em encontro, posicionamento de área para conjurador NPC, categorias de spellbook além de `INNATE` na UI (backend já suporta).
   * `npm run test:unit` (516 testes) e `npm run build:web` passam limpos após toda a implementação.

12. ~~Auditoria de conformidade contra o documento normativo de regras.~~ **Concluída** (rodada de 2026-07-13, pedido explícito do usuário logo após o doc normativo virar referência obrigatória — secao 4.0). Quatro bugs reais encontrados e corrigidos, todos com teste:
   * **Dano em alvo NPC nunca era aplicado ao HP**: `applyResolvedCombatHealth` (`campaign-presence/socket.ts`) mantinha o guard `source !== 'character'` da fatia PC-only, e as rotas de resolução engolem falha da porta com `continue` silencioso — a rodada NPC documentou a porta como "já agnóstica" sem verificar. Guard removido (`.ai/combat/specs.md` secao 6.4 corrigida; o pipeline `CombatantIdentity`/`adjustHealth`/inicialização de HP de bestiário sempre foi agnóstico).
   * **Espontâneo sem validação de rank mínimo** (regra 5.1/5.3 do doc normativo): `applyPathfinder2eCast` aceitava gastar slot de rank menor que o rank conhecido da magia (Blur R2 com slot R1). Corrigido em `consume.ts` (validação autoritativa) + `cast-options.ts` (`byRank` só oferece ranks válidos). Gastar slot maior sem elevar continua permitido, como manda a regra.
   * **Refocar recuperava +1 ponto por entrada** (regras 7.2/7.3: reservatório único, exatamente 1 ponto por atividade de 10 min): personagem com duas entradas FOCUS recuperava 2 pontos por Refocar. Corrigido: +1 total, creditado na primeira entrada com déficit.
   * **Inata sem definição no catálogo virava truque grátis**: `collectEntrySpells` dava `rank: 0` a inatas e o fallback de `isCantrip` (`rank === 0`) as classificava como truque quando `findSpell` retornava null — consumo zero. Corrigido: inata carrega `rank: null` e nunca cai no fallback de truque.
   * Divergências **registradas sem correção de código** (decisões de produto/modelo, itens 13–15 abaixo).
13. **[Novo] Reservatório de Foco único por personagem.** O modelo atual guarda `focusPool` por entrada de conjuração; as regras 7.1/7.2 (Parte II) e K.1 (Parte I, normativa) exigem um reservatório único (máximo **derivado** = min(magias de foco que gastam ponto, 3); a primeira magia de foco de custo 1 cria o reservatório; exceções como o Psíquico iniciando com 2 pontos vêm da classe; registrar a origem de cada gasto para a recuperação especial do Psíquico). O fix do Refocar (item 12) elimina a recuperação duplicada, mas conjurar de entradas diferentes ainda debita pools independentes (efetivamente mais pontos que o permitido). Corrigir exige migrar o shape do spellbook (`focusPool` global + máximo derivado) e as UIs de ficha/painel — decisão de escopo a confirmar com o usuário.
14. **[Novo] Heightening na resolução de dano.** 🟡 **Parcialmente concluído em 2026-07-13:** a resolução de dano com salvamento básico agora usa `castRank` salvo no recibo de `recentCasts` para aplicar heightening de dano **por intervalo** parseável em magias de um único componente (`heightening.interval.damage`) antes de rolar o dano. Casts novos gravam `entryId`, `spellId` e `castRank`; casts antigos sem metadado continuam pela fórmula base por compatibilidade. Pendente: separar corretamente `castRank` vs `slotRank` para magias espontâneas características, rank fixo de inatas não-cantrip, heightening fixo por rank específico (`heightening.fixed.levels[*]`), heightening que altere área/alcance/alvos/duração/efeitos, dano composto e variantes/overlays.
15. **[Novo] Restrições de preparações diárias não aplicadas.** Regra 3.1 (Parte II): descanso só uma vez por 24h — o endpoint `/spellbook/rest` pode ser acionado sem limite; regra 3.2 item 9: registrar o ciclo da última preparação — o spellbook não guarda `lastRestAt`. A seção L (Parte I) vai além: preparações diárias como **transação atômica e idempotente** (`preparationCycleId`, revalidação de capacidades, falha total se qualquer preparação exceder limite). Provavelmente aceitável adiar como decisão de mesa (Mestre controla o ritmo), mas precisa ser decisão explícita do usuário, não omissão.
16. ~~Segundo loop de auditoria (Parte I do doc normativo).~~ **Concluído** (rodada de 2026-07-13, logo após o usuário reescrever o doc de regras com a Parte I normativa). Verificado contra o que já existe:
   * **Bug corrigido — progressões de slots sugeridos** (`spellcasting-suggestion.ts`): Feiticeiro e Oráculo usavam a progressão de 3 slots quando as tabelas E.2/D exigem a de **4 slots** (destrava com 3, teto 4); o Psíquico destravava rank novo com 2 slots e 5 truques quando E.3 exige **1 slot no nível ímpar, teto 2, e 3 truques escolhidos** (os 3 psi cantrips são grants fixos à parte, E.7.5). Perfis renomeados para `three`/`four`/`psychic`, testes cobrindo cada tabela.
   * **Conforme, sem mudança**: `calculateSpellDC` bate com C.6 (10 + nível + bônus de proficiência 2/4/6/8 + atributo, selector `spell-dc` separado de ataque); progressão E.1 para Mago/Clérigo/Druida/Bruxa/Bardo já estava certa; validação espontânea do item 12 é compatível com J (gastar slot maior sem elevar continua permitido); D.1 respeitada (classes sem slots não têm perfil de sugestão).
   * **Divergência estrutural sinalizada (regra A.1)**: a tabela de classes de `spellcasting-suggestion.ts` é cópia manual auditada, não gerada do snapshot — registrada no próprio arquivo e no spec; a solução real é o item 17.
17. **[Novo] Gerar progressões, grants e entradas a partir do snapshot** (Parte I, seções A.1, B, E, F, Q): substituir a tabela manual de classes por dados compilados do `foundryvtt/pf2e` (progressões `slotsByCharacterLevel`, pools restritos com `poolKey` — currículo de Mago, Fonte Divina, slots estudioso do Magus —, grants de divindade/linhagem/patrono/mistério/eidolon/aparição, benefícios de arquétipo G.1) com o relatório `SpellRulesCompatibilityReport` gateando o CI. É o maior item aberto da Parte I; pré-requisito para os casos de aceitação P.1–P.9.
18. **[Novo] Validação de acesso, capacidade e códigos de erro estáveis** (Parte I, seções C.5, E.7, H, I, M): hoje qualquer magia do catálogo pode ser adicionada a qualquer entrada sem validar tradição, raridade (`uncommon`/`rare` exigem acesso, C.5), capacidade de repertório/preparação (E.7) ou coleção (H.2); os erros HTTP são strings legíveis em português, não códigos estáveis (M). Depende parcialmente do item 17 (capacidades vêm das progressões).
19. **[Novo] Magias características (signature) e `castRank` vs `slotRank`** (Parte I, seção J): `signatureSpellIds` existe no modelo desde a Fase 4 mas nenhuma função o consome — magia característica deveria poder ser conjurada em qualquer rank de slot ≥ rank base; o modelo de cast também não distingue `castRank` (rank efetivo) de `slotRank` (recurso consumido), distinção que J exige guardar. Ganha relevância junto com heightening (item 14), que é quem dá efeito mecânico ao rank efetivo.

Antes de iniciar qualquer uma destas, seguir o fluxo padrão do projeto (AGENTS.md secao 4): auditar `.ai/<modulo>/` existente, **ler as secoes aplicáveis do documento normativo de regras** ([`pathfinder-2e-regras-de-magias-questhub.md`](./pathfinder-2e-regras-de-magias-questhub.md), secao 4.0), criar/atualizar specs antes do código, e confirmar escopo com o usuário quando o tamanho ou risco justificar — como já vem sendo feito a cada rodada desta implementação.

## 23. Resultado Final Esperado pelo Usuário (registrado em 2026-07-13)

O usuário definiu explicitamente o que espera ver funcionando ao final da execução deste plano. Estas expectativas são a régua de aceitação de produto — nenhuma fase está "pronta de verdade" para o usuário até que a experiência abaixo exista de ponta a ponta:

1. 🟡 **Tokens de players preparam magias conforme as opções do personagem.** A classe dirige o spellbook (tradição, preparada vs espontânea, slots, Spell DC); ancestralidade/herança podem conceder magias inatas via feats; background não concede magias (regra do sistema, confirmada). Entregue como **sugestão automática** (secao 22, item 9): classe conjuradora + spellbook vazio → card cria a entrada correta com um clique. Pendente: inatas por feats de ancestralidade.
2. 🟡 **Conjurar pelo token, com botão direito.** Entregue na forma mínima (secao 22, item 6): menu de contexto → "Lançar magia" → painel → consumo real do recurso até o descanso/refocus devolver; em encontro ativo, magias PF2e de 1/2/3 acoes debitam `actionsRemaining` do participante ativo; conjurações confirmadas aparecem no chat e no log de batalha (citando os alvos, quando houver) quando há encontro ativo. Magias sem área com contagem de alvo parseável (~86% das que têm texto de alvo) exigem clicar o(s) token(s) alvo antes de confirmar. Para magias de dano com salvamento básico (secao 22, item 7/Resolution) contra alvos player-character, a conjuração agora também rola o salvamento de cada alvo e aplica o dano real ao HP automaticamente, sem passo manual do Mestre. Pendente: magias de alvo composto/trait-based, action economy avançada, resolução para alvos NPC/de área.
3. 🟡 **Controle visual de alcance e área de efeito** — entregue em grid quadrado (todas as formas) e em grid hexagonal (burst/emanation/cylinder/ring): preview da forma seguindo o cursor, anel de alcance azul/vermelho, snap de burst em interseções (quadrado) ou no centro do hexágono mais próximo (hex). Pendente: cone/linha/quadrado/cubo em hex, rotação fina de cone/linha com snap.
4. 🟡 **Alvos dentro da área destacados visualmente** — entregue nos dois grids: tokens com centro na célula/hexágono coberto ganham anel na cor da magia + contagem de alvos no rótulo. Pendente: footprint >1x1, hidden tokens (mestre vê, jogador não deveria contar — hoje cada cliente calcula sobre os tokens que enxerga, o que já limita vazamento).
5. 🟡 **Células do grid pintadas com cor específica** — entregue nos dois grids (retângulos SVG em quadrado, polígonos hexagonais em hex, mesma cor da magia, todos os clientes da campanha veem o mesmo preview). Pendente: cone/linha/quadrado/cubo em hex.
6. 🟡 **[Novo, pedido em 2026-07-13] NPCs conjuram magias e podem ser afetados por elas.** Entregue na mesma rodada (secao 22, item 11): Mestre pré-configura um monstro do bestiário com livro de magias próprio (`CampaignNpcDefinition`, reutilizável entre cenas, catálogo original nunca alterado) e o token desse NPC ganha um botão de conjurar igual ao de personagem, Mestre-only; magias de qualquer conjurador (jogador ou NPC) já podem ter NPC como alvo válido de resolução, usando o salvamento fixo já existente no catálogo. Pendente: editor de spellbook de NPC só cobre entradas `INNATE` na UI, sem posicionamento de área para conjurador NPC.

Itens 3–5 nasceram juntos no renderer de área (`SpellAreaOverlay.tsx` + `.ai/scene_geometry/`), como critérios de aceitação. A variante hex fechou 4 das 8 formas (rodada de 2026-07-13, decisão de escopo confirmada com o usuário); cone/linha/quadrado/cubo em hex seguem como pendência explícita, sem convenção definida.
