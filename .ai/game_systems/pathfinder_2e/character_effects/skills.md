# Submodulo: Pathfinder 2e Character Active Effects (Skills & Tech)

## 1. Stack Tecnologica
* TypeScript + Zod para o schema do envelope generico (`packages/game-system-core/src/server/character-effects`) e do bloco especifico PF2e (`packages/game-system-pathfinder-2e/src/server/character-effects`).
* Prisma (`CharacterActiveEffects`) para persistencia, mesma tabela-por-recurso ja usada por `CharacterSpellbook`.
* Fastify + Zod para os endpoints HTTP em `apps/api/src/modules/character_effects`.
* Reaproveita o Rule Engine ja existente (`packages/game-system-pathfinder-2e/src/shared/rule-engine`) — nenhuma logica de predicate/stacking nova e escrita aqui, apenas chamada.

## 2. Padroes Aplicados
* **Envelope generico + adapter por sistema**, identico ao par `CharacterSpellbookEnvelope`/`CharacterSpellbookSystemAdapter` ja usado por `.ai/game_systems/pathfinder_2e/character_spells/`: `GameSystemAdapter` (`apps/api/src/modules/game_systems/ports.ts`) ganha `characterActiveEffects?: CharacterActiveEffectsSystemAdapter<unknown>`, e o registry (`apps/api/src/modules/game_systems/registry.ts`) ganha `getCharacterActiveEffectsAdapter`/`buildDefaultCharacterActiveEffectsEnvelope`/`validateCharacterActiveEffectsEnvelope`/`safeValidateCharacterActiveEffectsEnvelope`.
* **Tabela dedicada, uma linha por personagem** (`characterId @unique`), igual a `CharacterSpellbook` — nao um campo dentro de `Character.sheet`.
* **Concorrencia otimista por `revision`**, identica ao spellbook: cliente envia a revision esperada, servidor rejeita com `409` em divergencia.
* **Acesso identico ao spellbook**: leitura/escrita permitidas ao dono do personagem OU ao Mestre ativo da campanha a que o personagem pertence. Nao ha distincao de leitura vs escrita (ao contrario da AC, que separa GET de fatos de equipamento de PATCH de escudo) — aqui e um unico recurso de leitura/escrita completo, mesmo padrao do spellbook.
* **Rule Elements brutos, validados apenas por formato.** `rules: Pathfinder2eRuleElementSource[]` usa o mesmo formato do catalogo de magias (`{ key: string, ... }`, campos extras livres). O schema Zod exige `key` nao-vazio e aceita qualquer campo adicional (`.catchall(z.unknown())`) — nao valida semanticamente se o Rule Element "faz sentido" (isso e responsabilidade do resolver do Rule Engine em tempo de leitura, nao do schema em tempo de escrita).
* **UI restrita a um caso de uso, contrato aberto.** O formulario da ficha so grava efeitos de um `FlatModifier`, com um seletor de "Alvo" limitado aos 5 selectors reais ja consumidos (`'ac'`, `'fortitude'`, `'reflex'`, `'will'`, `'saving-throw'`). Isso e uma decisao de escopo da UI (secao 3), nao do contrato — a API aceita qualquer `rules[]` valido, para nao ter que ser reaberta quando um proximo consumidor (ex.: Spell DC) for decidido.

## 3. Restricoes Tecnicas
* O endpoint de leitura e escrita aceitam tanto o dono do personagem quanto o Mestre ativo da campanha a que o personagem pertence — mesma regra de `GET/PUT /api/characters/:characterId/spellbook`.
* O endpoint de escrita valida o envelope inteiro (`system`, `version`, `data[dataKey]`) contra o schema Zod do adapter antes de persistir.
* `calculateArmorClass` (`.ai/game_systems/pathfinder_2e/armor_class/`) e `calculateSavingThrow` (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 6.1) ganham os mesmos dois parametros opcionais (`ruleElements?: Pathfinder2eRuleElementSource[]`, `rollOptions?: RollOptions`) — quando omitidos, o comportamento e identico ao existente antes desta integracao (nenhuma chamada existente quebra). Quando `ruleElements` e passado, o calculo roda `resolveFlatModifiers` + filtro pelo(s) proprio(s) selector(es) (CA: `selector === 'ac'`; cada salvamento: `selector === <nome> || selector === 'saving-throw'`) + `applyStackingRules`, e soma o `total` resultante ao valor base. Callers dinamicos ou testes que nao tem efeitos ativos passam `[]` (equivalente a nao passar nada).
* A UI do formulario de adicionar efeito so oferece os 4 tipos reais de modifier do PF2e (`circumstance`, `status`, `item`, `untyped`) e um campo de valor inteiro (aceita negativo, para penalidades). Nao ha campo de predicate na UI (efeito sempre incondicional quando adicionado manualmente) — Rule Elements com predicate so chegam ao personagem por uma via futura (ex.: import automatico de spell effect), nao pelo formulario atual.
* Nao ha nenhuma rota de "aplicar efeito de uma magia especifica automaticamente" — a unica escrita e o cliente montando o payload completo (efeito a mais, ou efeito a menos) e chamando o mesmo PUT, igual ao spellbook.

## 4. Decisoes de Performance
* Um unico registro `CharacterActiveEffects` por personagem (`characterId @unique`), leitura/escrita O(1) por indice.
* `data` e um unico blob JSON — sem joins adicionais.
* A resolucao de Rule Elements para os calculos de CA/salvamentos acontece em memoria, no frontend, a partir dos dados ja carregados pelo hook — nao ha round-trip extra ao servidor so para recalcular apos adicionar/remover um efeito local (mesmo padrao ja usado pelo AC com fatos de equipamento).

## 5. Limitacoes Conhecidas
* Sem validacao cruzada de que um Rule Element referencia algo que existe (ex.: nao valida se um `selector` e um valor conhecido do sistema) — o schema so garante formato (`key: string`).
* Sem UI para editar/gravar Rule Elements alem de um `FlatModifier` de CA/salvamento — contrato aberto, UI fechada (ver secao 2).
* Sem consumidor de nenhuma outra estatistica alem de CA e salvamentos nesta entrega (Spell DC, velocidade, pericias, Percepcao continuam sem ligacao ao Rule Engine).
* Sem predicate na UI de criacao manual — todo efeito criado pelo formulario e sempre incondicional.
* Sem expiracao/duracao — efeitos ficam ativos ate serem removidos manualmente.
