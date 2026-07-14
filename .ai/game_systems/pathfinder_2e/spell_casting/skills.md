# Submodulo: Pathfinder 2e Spell Casting (Skills & Tech)

## 1. Stack
* Funcoes puras TypeScript em `packages/game-system-pathfinder-2e/src/server/spell-casting/` (consumo, cast-options) e `src/shared/spell-area.ts` (unidades/formas — shared porque o web tambem converte para o preview).
* Sem dependencia de Prisma/Fastify/React nessas funcoes — a rota generica (`apps/api/src/modules/spell_casting/routes.ts`) e quem toca banco.

## 2. Padroes
* **Transformacao pura de consumo**: `applyPathfinder2eCast(spellbook, request)` retorna `{ok: true, spellbook: novo, consumed: rotulo}` ou `{ok: false, error: codigo legivel}` — nunca muta, nunca lanca; testada com todos os ramos de recurso.
* **Join servidor-side**: `buildPathfinder2eCastOptions(spellbook, findSpell)` recebe um resolvedor de catalogo injetado (o modulo de rotas passa `findCampaignSpell`-like) — a funcao pura nao conhece o registry.
* **Unidades auditadas**: conversoes e formatos de alcance/area/alvo verificados contra `pf2e-master/packs/spells` (7 tipos de area reais; formatos de range reais; 346 valores distintos de `target.value` classificados) — ver testes em `spell-area.test.ts`/`spell-target.test.ts`.
* **Parser de alvo conservador**: `parsePathfinder2eSpellTargetCount(raw)` reconhece padroes limpos ("N creature(s)", "up to N", "N or M", "one/two/three") e cai em `unsupported` para qualquer coisa fora disso — incluindo um caso real descoberto durante a auditoria (`"1 ally and 1 enemy"`) que o padrao generico de "numero no inicio" teria interpretado errado como contagem 1; corrigido com uma checagem explicita de clausula composta (`" and "`) antes do padrao generico.

## 3. Restricoes
* `applyPathfinder2eCast` nao valida se `spellId` existe no catalogo (o spellbook e a autoridade da posse); o perfil `unavailable` em cast-options sinaliza magia sem correspondencia no catalogo, mas conjurar ainda e permitido (consome o recurso; sem area/alcance).
* Sugestao de spellbook por classe (`spellcasting-suggestion.ts`): tabela estatica auditada das 11 classes conjuradoras do compendio; tradicao/atributo que dependem de escolha real (feiticeiro/bruxa/invocador/psiquico) ficam `null` e a UI obriga a escolha — nunca default silencioso.
* Selecao de alvo nao distingue "creature other than you" — o proprio conjurador pode ser selecionado como alvo mesmo em magias cujo texto real exclui essa possibilidade (poucos casos, nao filtrados).

## 4. Limitacoes Conhecidas
* Sem heightening no consumo espontaneo alem do rank do slot escolhido (signature spells nao sao validadas).
* Conjuracao de RITUAL/ITEMS bloqueada com erro legivel.
* `parsePathfinder2eCastActionCost` so interpreta 1/2/3 acoes, reaction e free action; tempos variaveis/minutos/horas/dias (rituais, algumas magias de ranks altos) ficam `unsupported` e nao debitam nem bloqueiam por action economy.
* `parsePathfinder2eSpellTargetCount` cobre ~86% das magias com texto de alvo (leading count/"up to"/"N or M"/palavras 1-3); traits ("willing", "ally", "enemy") e quantificadores abertos ("any number of", "N or more") ficam `unsupported`.
