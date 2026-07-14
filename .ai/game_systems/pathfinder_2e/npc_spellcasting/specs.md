# Submodulo: Pathfinder 2e NPC Spellcasting (Specs & Contracts)

**Status: ✅ implementado em 2026-07-13.**

## 1. Spellbook de NPC

```ts
// mesmo tipo de packages/game-system-pathfinder-2e/src/server/character-spells/models.ts,
// sem nenhuma mudanca de shape
Pathfinder2eCharacterSpellbookData // { entries, rituals, recentCasts? }
```

Armazenado em `CampaignNpcDefinition.spellbook` (`Json?`, `.ai/game_systems/pathfinder_2e/bestiary/specs.md` secao 8) como `{ pathfinder2e: Pathfinder2eCharacterSpellbookData }` (mesmo envelope de `CharacterSpellbook.data`). `spellbook = null` ou dado invalido → `parseNpcSpellbook` (`apps/api/src/modules/npc_definitions/routes.ts`) cai para `DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK` (spellbook vazio), nunca lanca.

## 2. Spell DC fixo por entrada

`Pathfinder2eSpellcastingEntry` ganhou um campo opcional, aditivo (`packages/game-system-pathfinder-2e/src/server/character-spells/models.ts`, espelhado em `.../web/character-sheet/spells/types.ts`):

```ts
export const pathfinder2eSpellcastingEntrySchema = z
  .object({
    // campos existentes...
    npcSpellDC: z.number().int().min(1).max(60).optional(), // presente so em entradas de NPC
  })
  .strict()
```

Regra de leitura na rota de resolucao de NPC: `entry.npcSpellDC` e sempre usado diretamente como Spell DC — a rota retorna 400 (`"Esta entrada de conjuracao nao tem um Spell DC configurado"`) se a entrada nao tiver esse campo. Entradas de personagem nunca preenchem `npcSpellDC` — o campo so existe para o caminho de NPC, mantendo um unico tipo de entrada para os dois casos.

## 3. CRUD de `CampaignNpcDefinition` (`apps/api/src/modules/npc_definitions/routes.ts`)

```ts
GET    /api/campaigns/:campaignId/npc-definitions
POST   /api/campaigns/:campaignId/npc-definitions        // body: { bestiaryCreatureId, name }
PATCH  /api/campaigns/:campaignId/npc-definitions/:definitionId  // body: { name }
DELETE /api/campaigns/:campaignId/npc-definitions/:definitionId  // 409 se houver CampaignSceneToken referenciando
PUT    /api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook  // body: Pathfinder2eCharacterSpellbookData bruto
```

Todas exigem `getMasterCampaignAccess(campaignId, userId)` (Mestre ativo da campanha). `POST` usa `prisma.campaignNpcDefinition.upsert` pela chave `[campaignId, source, sourcePack, bestiaryCreatureId, name]` — criar com o mesmo nome/criatura reaproveita a definicao existente (`update: {}`, no-op), nunca duplica.

## 4. Endpoints de Conjuracao de NPC (`apps/api/src/modules/spell_casting/npc-routes.ts`)

```ts
GET  /api/campaigns/:campaignId/npc-definitions/:definitionId/cast-options
POST /api/campaigns/:campaignId/npc-definitions/:definitionId/cast
POST /api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook/rest
POST /api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook/refocus
POST /api/campaigns/:campaignId/npc-definitions/:definitionId/spells/:spellId/resolve
```

Espelham os equivalentes de personagem (`.ai/spell_casting/specs.md`), com as diferencas:
1. Endereçamento por `campaignNpcDefinitionId` em vez de `characterId`; permissao Mestre-only (`getMasterCampaignAccess`), nunca dono-ou-Mestre.
2. `POST .../cast` **nao** exige `revision` (spellbook de NPC nao tem controle de concorrencia) nem gera entrada em `recentCasts` (sem ledger de idempotencia para NPC — ver `skills.md` secao 3). Corpo: `{clientCastId, entryId, spellId, source, caster?, placement?, targets?}` — `placement` so e aceito se a magia nao tiver area (rejeitado com erro legivel, ver secao 5).
3. `POST .../spells/:spellId/resolve` **nao** exige prova de cast previo (`clientCastId` no ledger) — corpo simplificado `{entryId, sceneId, casterTokenId, targetTokenIds}`. Usa `entry.npcSpellDC` como Spell DC (secao 2), nunca `calculateSpellDC`.
4. Anuncio de conjuracao/resolucao vai so para o log de batalha (`appendSystemLogToActiveEncounter`), nunca para o chat de campanha.
5. Sem debito de action economy de encontro (`consumeEncounterActionsForCharacter` nao e chamado).

## 5. Resolucao de cena para conjurador NPC (sem area)

`resolveNpcCastSceneContext`/`validateNpcCastPlacement`/`resolveNpcNonAreaCastContext` (`npc-routes.ts`) sao a contraparte NPC de `resolveCastSceneContext`/`validateCastPlacement`/`resolveNonAreaCastContext` (`spell_casting/routes.ts`), reimplementadas em paralelo (nao generalizadas dentro das funcoes de personagem — decisao de risco documentada em `skills.md` secao 2). `validateNpcCastPlacement` retorna erro `"Esta magia nao possui area para posicionar"` sempre que `placement` e enviado — conjuracao de NPC com area nunca e aceita nesta rodada, mesmo que a magia tenha area (o Mestre so pode conjurar magias sem area por um NPC).

## 6. Resolucao (dano/salvamento) envolvendo NPC — extensao de `.ai/game_systems/pathfinder_2e/resolution/`

`resolveSpellResolutionScene` (`spell_casting/routes.ts`, generalizada — unico call site, ver `skills.md` secao 2) aceita:

```ts
type CasterIdentity =
  | { kind: 'character'; characterId: string }
  | { kind: 'npc'; campaignId: string; definitionId: string }

type ResolvedTargetToken =
  | { id: string; source: 'CHARACTER'; characterId: string; name: string }
  | { id: string; source: 'BESTIARY'; bestiaryCreatureId: string; name: string }
```

* **NPC como conjurador**: a rota de resolucao de NPC le `entry.npcSpellDC` (secao 2) em vez de montar `calculateSpellDC` a partir de ficha+efeitos ativos.
* **NPC como alvo** (em qualquer das duas rotas de resolucao, personagem ou NPC conjurando): `loadNpcTargetSaveInput(bestiaryCreatureId, statistic)` le o salvamento fixo do catalogo (`Pathfinder2eBestiarySheet.saves`) via `findPathfinder2eBestiaryCreature` (novo export de `packages/game-system-pathfinder-2e/src/server/bestiary/index.ts`) e o usa como `attributeModifier` de `calculateSavingThrow` com `level: 0, rank: 0, ruleElements: []`.
* **Aplicacao de HP**: `applyResolvedCombatHealth` (`.ai/combat/specs.md` secao 6.4) aceita alvo de personagem ou bestiario. **Correcao registrada em 2026-07-13 (rodada de auditoria):** a versao anterior deste paragrafo dizia que a porta "nao mudou — ja era agnostica de `source`", mas na verdade ela ainda carregava um guard `source !== 'character'` da fatia PC-only, que rejeitava silenciosamente alvos de bestiario (os endpoints de resolucao engolem falha da porta com `continue`) — dano em NPC era calculado e reportado, mas nunca aplicado ao HP. O guard foi removido nessa rodada. A validacao de "alvo deve ser `source: 'character'`" tambem foi removida de `resolveSpellResolutionScene`; qualquer token com `characterId` ou `bestiaryCreatureId` valido e aceito.

## 7. UI (Frontend)

* `apps/web/src/features/bestiary/components/NpcSpellbookEditorModal.tsx` — editor compacto, so entradas `INNATE` (nome + Spell DC fixo + magias com "a vontade"/"N por dia" via `SpellSearchPicker` reaproveitado). Botao "Customizar" nos cards de NPC do bestiario (`CampaignBestiaryPage.tsx`) cria a definicao (nome padrao = nome da criatura) e abre o editor.
* Secao "NPCs customizados" na pagina de bestiario lista as definicoes da campanha com acoes de editar magias e excluir.
* `packages/game-system-pathfinder-2e/src/web/npc-spellcasting/components/NpcSpellCastPanel.tsx` — painel de conjuracao para NPC, aberto pelo menu de contexto do token ("Lancar magia (NPC)", so quando `token.campaignNpcDefinitionId` existe). Mesma estrutura visual do `SpellCastPanel` de personagem, sem suporte a posicionamento de area.
* `CampaignOverviewPage.tsx` ganhou um segundo conjunto de estado/funcoes paralelo ao de personagem (`npcSpellCastTarget`, `npcSpellTargetSelection`, `beginNpcSpellTargetSelection`, `toggleNpcSpellTarget`, `confirmNpcSpellTargetSelection`) — duplicado deliberadamente em vez de generalizar o estado existente, mesma razao de risco de `skills.md` secao 2. `PlayerToken` recebe as props de selecao de alvo mescladas (`spellTargetSelection ?? npcSpellTargetSelection`) — um token pode ser selecionado como alvo de conjuracao de personagem OU de NPC, nunca as duas ao mesmo tempo (mutuamente exclusivo pela UI).
* Selecao de alvo (clicar token na cena) ja funcionava para qualquer tipo de token (`PlayerToken` nao distinguia `source` para essa feature) — NPC como alvo nao exigiu nenhuma mudanca de UI, so a extensao do backend (secao 6).
* `GET /api/campaigns/:campaignId/token-candidates` (`apps/api/src/modules/campaigns/routes.ts`) inclui `CampaignNpcDefinition` da campanha como candidatos arrastaveis (`source: 'bestiary'`, `campaignNpcDefinitionId` presente) — aparecem automaticamente na barra de tokens preparados, sem precisar "preparar" como o catalogo bruto.

## 8. Criterios de Aceitacao
1. `Pathfinder2eCharacterSpellbookData` nao introduziu nenhum tipo novo — `applyPathfinder2eCast`/`buildPathfinder2eCastOptions`/etc. funcionam sem alteracao contra um spellbook de NPC. ✅ (516 testes automatizados continuam passando sem alteracao nesses arquivos).
2. `npcSpellDC` e opcional e aditivo — entradas de personagem existentes continuam validas sem esse campo. ✅
3. Conjurar por um NPC exige Mestre ativo; personagem-dono nunca e uma opcao valida. ✅ (`getMasterCampaignAccess`).
4. Resolucao contra alvo NPC usa o salvamento fixo do catalogo, nunca uma formula de nivel/proficiencia inventada para monstro. ✅
5. O catalogo de bestiario (`pf2e-master/packs`) nunca e escrito por nenhum fluxo deste submodulo. ✅
6. `npm run test:unit` (516 testes) e `npm run build:web` passam limpos apos toda a implementacao. ✅
