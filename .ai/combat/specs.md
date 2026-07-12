# Modulo: Combat — Contratos

## 1. Responsabilidade
Definir o contrato de HP persistente de combate: modelo de dados, calculo, eventos Socket.IO, permissoes e apresentacao por papel. Ver `readme.md` para o problema/regras de negocio (inclui a decisao de duas fontes de verdade) e `skills.md` para stack/restricoes tecnicas.

**Duas fontes de verdade, uma unica API de leitura/escrita:** para token de NPC/bestiario, o valor vivo esta em `CampaignSceneTokenHealth` (secao 2). Para token de personagem de jogador, o valor vivo esta na ficha (`Character.sheet`, secao 2.1). O restante do contrato (tipos, eventos, calculo, permissoes) e identico para os dois casos — quem decide onde ler/escrever e o `combat-health-service`, olhando `token.source`.

## 2. Modelo de Dados (Prisma) — vida de NPC/bestiario

```prisma
enum CombatHealthOperation {
  DAMAGE
  HEAL
  SET_CURRENT
  SET_MAX
  SET_TEMPORARY
  CLEAR_TEMPORARY
}

model CampaignSceneTokenHealth {
  id                 String   @id @default(cuid())
  tokenId            String   @unique
  currentHitPoints   Int
  maxHitPoints       Int
  temporaryHitPoints Int      @default(0)
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt

  token CampaignSceneToken @relation(fields: [tokenId], references: [id], onDelete: Cascade)

  @@index([tokenId])
}

model CampaignSceneTokenHealthLog {
  id               String                @id @default(cuid())
  campaignId       String
  sceneId          String
  tokenId          String
  actorUserId      String?
  actorCharacterId String?
  operation        CombatHealthOperation
  amount           Int?
  before           Json
  after            Json
  note             String?
  createdAt        DateTime              @default(now())

  @@index([campaignId, createdAt])
  @@index([sceneId, createdAt])
  @@index([tokenId, createdAt])
}
```

`CampaignSceneToken` ganha a relacao `health CampaignSceneTokenHealth?` (1:1, opcional — token pode nao ter HP definido ainda).

`CampaignSceneTokenHealth` **so e criado/lido para tokens `source: 'bestiary'`**. Para tokens `source: 'character'`, este modelo nunca e usado — ver secao 2.1. E apagado em cascata quando o token e removido da cena (`onDelete: Cascade`, correto: a criatura deixou de existir). `CampaignSceneTokenHealthLog` nao tem FK fisica para o token (log deve sobreviver mesmo que o token seja removido depois) e e usado para os dois tipos de token, como trilha de auditoria unificada.

## 2.1. Vida de personagem de jogador — adapter de ficha (sem tabela nova)

Nao existe tabela nova para vida de jogador. O valor vivo mora dentro do envelope de ficha ja existente (`Character.sheet`, tipo `Prisma.Json`), no bloco especifico do sistema. Para PF2e isso e `data.pathfinder2e.hitPoints`, ja existente em `Pathfinder2eHitPoints` (`packages/game-system-pathfinder-2e/src/server/character-sheet/models.ts`):

```ts
export type Pathfinder2eHitPoints = {
  maximum: number
  current: number
  temporary: number
  wounded: number   // fora de escopo nesta etapa
  dying: number      // fora de escopo nesta etapa
  doomed: number      // fora de escopo nesta etapa
}
```

O modulo `combat` nao importa esse tipo nem esses nomes de campo diretamente. Em vez disso, o contrato `CharacterSheetSystemAdapter<TSheet>` (`packages/game-system-core/src/server/character-sheet/models.ts`) ganha um campo opcional novo:

```ts
export type CharacterSheetHealthAccessor<TSheet> = {
  read: (sheet: TSheet) => { current: number; max: number; temporary: number }
  write: (sheet: TSheet, next: { current: number; max: number; temporary: number }) => TSheet
}

export type CharacterSheetSystemAdapter<TSheet> = {
  system: string
  dataKey: string
  version: number
  defaultSheet: TSheet
  schema: z.ZodType<TSheet>
  health?: CharacterSheetHealthAccessor<TSheet>
}
```

`pathfinder2eSheetAdapter` (`packages/game-system-pathfinder-2e/src/server/character-sheet/adapter.ts`) implementa `health`, mapeando `current -> current`, `max -> maximum`, `temporary -> temporary`, preservando `wounded`/`dying`/`doomed` intactos no `write`.

Fluxo de leitura/escrita no backend (`combat` module, `repositories/character-health.ts` ou equivalente):
1. buscar `Character` por `characterId` (`select: { id, system, sheet }`);
2. resolver o adapter via `getCharacterSheetAdapter(character.system)` (reaproveita `apps/api/src/modules/game_systems/registry.ts`, nao duplica);
3. ler o envelope (`sheet.data[adapter.dataKey]`), chamar `adapter.health.read(...)`;
4. aplicar a regra pura (`health-rules.ts`, identica para os dois casos);
5. chamar `adapter.health.write(...)`, remontar o envelope trocando so `data[adapter.dataKey]`, persistir com `prisma.character.update({ where: { id }, data: { sheet: envelope } })`.

Esse caminho e diferente da rota HTTP `PUT /api/characters/:characterId/sheet` (que exige ser o dono do personagem e substitui a ficha inteira) — o socket de combate precisa permitir o Mestre alterar a vida de qualquer personagem da campanha, entao acessa `prisma.character` diretamente dentro do repository do modulo `combat`, sem passar pela rota HTTP.

## 3. Tipos TypeScript

```ts
export type VttCombatantHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
  state: 'OK' | 'DOWN'
}

export type PublicNpcHealth = {
  state: 'HEALTHY' | 'SCRATCHED' | 'INJURED' | 'BLOODIED' | 'CRITICAL' | 'DOWN'
  percentage?: number
}
```

`state` de `VttCombatantHealth` e sempre derivado: `currentHitPoints > 0 -> 'OK'`, senao `'DOWN'`. Nunca e persistido separadamente.

Faixas de `PublicNpcHealth.state` (percentual = `currentHitPoints / maxHitPoints`):

```txt
100%        -> HEALTHY   (Saudavel)
75% a 99%   -> SCRATCHED (Levemente ferido)
50% a 74%   -> INJURED   (Ferido)
25% a 49%   -> BLOODIED  (Muito ferido)
1% a 24%    -> CRITICAL  (A beira da queda)
0%          -> DOWN      (Caido)
```

**Decisao tecnica (Fase C):** `VttPlayerToken` **nao** ganha campo `health`. O pipeline de sincronizacao de token hoje (`vtt:tokens:snapshot`, `vtt:token:changed`, `listSceneTokens`) envia o mesmo payload para todos os sockets da campanha sem mascarar por papel (o `hidden` de token, por exemplo, ja e um filtro so de UI, nao de servidor) — colocar `health` exato ali vazaria HP de NPC para jogadores. Em vez disso, `VttEncounterCreatureParticipant` ganha `health` (secao abaixo) e o Mapa/HP fora de encontro e sincronizado por um canal dedicado e mascarado (`vtt:combat:health:changed`, secao 4), nao pelo snapshot generico de tokens. O cliente mantem seu proprio mapa `tokenId -> health` alimentado por esse canal.

`VttEncounterCreatureParticipant` ganha dois campos:

```ts
export type VttEncounterCreatureParticipant = {
  // campos atuais...
  source: 'character' | 'bestiary'
  health?: VttCombatantHealth | null
}
```

`source` e necessario para `presentEncounterForRole` saber se deve mascarar (`bestiary`) ou mostrar exato (`character`) — token com `hidden: true` nunca entra em encontro hoje (`vtt:encounter:start` ja filtra `!token.hidden`), entao nao ha caso de HP de token oculto vazando por aqui.

`health: null` significa "HP nao definido" (nunca houve `CampaignSceneTokenHealth`/ficha com adapter de vida). `health: undefined`/campo ausente so deve acontecer se o presenter decidir omitir por falta de visibilidade (nunca para o proprio dono nem para o Mestre).

`VttEncounterHazardParticipant` **nao** ganha `health` nesta etapa (ver `readme.md` secao 6).

## 4. Contratos Socket.IO

Eventos novos, seguindo o padrao ja usado em `vtt:hazard:*` (fire-and-forget: payload invalido ou sem permissao -> handler retorna sem emitir nada, sem lancar erro nem fechar o socket):

```txt
vtt:combat:health:adjust   (cliente -> servidor, Mestre aplica dano/cura)
vtt:combat:health:set      (cliente -> servidor, Mestre seta valores manuais)
vtt:combat:health:request  (cliente -> servidor, solicita snapshot do HP de um token)
vtt:combat:health:changed  (servidor -> sala da campanha, HP de um token mudou)
```

### 4.1. `vtt:combat:health:adjust`

```ts
const vttCombatHealthAdjustSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  operation: z.enum(['DAMAGE', 'HEAL']),
  amount: z.number().int().positive().max(9999),
  note: z.string().max(500).optional(),
})
```

### 4.2. `vtt:combat:health:set`

```ts
const vttCombatHealthSetSchema = z
  .object({
    campaignId: z.string().min(1),
    tokenId: z.string().min(1),
    currentHitPoints: z.number().int().min(0).max(9999).optional(),
    maxHitPoints: z.number().int().min(1).max(9999).optional(),
    temporaryHitPoints: z.number().int().min(0).max(9999).optional(),
    note: z.string().max(500).optional(),
  })
  .refine(
    (input) =>
      input.currentHitPoints !== undefined ||
      input.maxHitPoints !== undefined ||
      input.temporaryHitPoints !== undefined,
  )
```

### 4.3. `vtt:combat:health:request`

```ts
const vttCombatHealthRequestSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
})
```

### 4.4. Payload emitido — `vtt:combat:health:changed`

```ts
type VttCombatHealthChangedPayload = {
  campaignId: string
  sceneId: string
  tokenId: string
  health: VttCombatantHealth | PublicNpcHealth
}
```

O payload real por socket depende do papel de quem recebe (ver secao 6). Segue o mesmo padrao de `emitSceneHazardChanged`: iterar os sockets da sala `campaign:<campaignId>`, calcular a cena visivel de cada um, e so emitir para quem esta vendo a cena do token — cada socket recebe a forma de `health` compativel com seu papel/posse.

`vtt:encounter:changed` (evento ja existente) deve ser reemitido logo em seguida quando o `tokenId` alterado corresponder a um `VttEncounterCreatureParticipant` do encontro ativo da campanha, para manter o card de iniciativa sincronizado sem duplicar a fonte de verdade.

### 4.5. Sincronizacao Com A Ficha (`character_sheet`)

`PUT /api/characters/:id/sheet` (modulo `game_systems`) persiste `hitPoints` diretamente no `Character.sheet` via Prisma e **nao** passa pelo modulo `combat` nem emite nenhum evento de socket — decisao existente, nao alterada por esta secao. Isso significa que salvar a ficha (por exemplo, apos a vida maxima recalcular automaticamente — ver `.ai/game_systems/pathfinder_2e/hit_points/specs.md`) nao empurra `vtt:combat:health:changed` para ninguem.

`combatHealthByTokenId` no frontend (`apps/web/src/vtt/table/CampaignOverviewPage.tsx`) so e populado por resposta a `vtt:combat:health:request` ou por `vtt:combat:health:changed`, e o efeito de auto-request e gated pelo proprio resultado (nao repete pedido para um token que ja tem valor, mesmo que esse valor tenha ficado desatualizado). Para o caso especifico de abrir a ficha de um personagem a partir de um token no VTT (`characterTokenSheet`), o `onSaved` do `CharacterSheetModal` reemite `vtt:combat:health:request` para o `tokenId` correspondente assim que a ficha e salva — mesmo padrao ja usado por `openCombatHealthEditor` para forcar um snapshot fresco. Isso mantem a barra de vida do token sincronizada com a ficha sem exigir um evento novo de servidor.

Nao ha sincronizacao equivalente para a ficha aberta fora do contexto de um token (`CampaignLayout`'s `mySheetOpen`) nem para tokens de outros jogadores que nao estejam com a ficha aberta no momento do save — nesses casos a barra de vida so atualiza no proximo evento real de combate (`adjust`/`set`) ou ao recarregar a pagina. Corrigir isso de forma geral exigiria um evento de servidor disparado pelo proprio `PUT` da ficha (fora de escopo desta correcao pontual).

## 5. Regras de Calculo (`domain/health-rules.ts`, funcoes puras)

Entrada/saida sempre em termos de `{ currentHitPoints, maxHitPoints, temporaryHitPoints }`.

### 5.1. DAMAGE
1. o dano consome `temporaryHitPoints` primeiro;
2. o excedente reduz `currentHitPoints`;
3. `currentHitPoints` nunca fica menor que 0;
4. `temporaryHitPoints` nunca fica menor que 0.

Exemplo: `current=20, temp=5, damage=8` -> `temp` absorve 5, `current` perde 3 -> `current=17, temp=0`.

### 5.2. HEAL
1. a cura aumenta `currentHitPoints`;
2. a cura nao altera `temporaryHitPoints`;
3. `currentHitPoints` nao passa de `maxHitPoints`.

### 5.3. SET_CURRENT
`currentHitPoints = clamp(input, 0, maxHitPoints)`.

### 5.4. SET_MAX
1. `maxHitPoints` precisa ser maior que 0;
2. se o novo maximo for menor que o HP atual, `currentHitPoints` e reduzido para o novo maximo;
3. `temporaryHitPoints` nao muda.

### 5.5. SET_TEMPORARY
`temporaryHitPoints = max(0, input)`. Sem stacking automatico — o Mestre decide o valor final.

## 6. Permissoes e Visibilidade

### 6.1. Mestre
Pode aplicar `DAMAGE`, `HEAL`, `SET_CURRENT`, `SET_MAX`, `SET_TEMPORARY` em qualquer token. Ve `VttCombatantHealth` exato de todos os tokens (proprios, de outros jogadores e NPCs).

### 6.2. Jogador (MVP desta etapa)
* So visualiza, nao edita HP de ninguem (nem do proprio token) — `allowPlayerHealthEdit` fica para uma iteracao futura.
* Ve `VttCombatantHealth` exato do proprio token (`token.ownerUserId === user.id`).
* Ve `VttCombatantHealth` exato de tokens de outros jogadores (aliados, campanha cooperativa).
* Ve `PublicNpcHealth` (faixa, sem numero exato) para tokens `source: 'bestiary'` / `role: 'NPC'`.
* Token com `hidden: true` nao emite HP nenhum para jogadores (mesma regra que ja esconde o token inteiro).

### 6.3. Handlers de escrita
`vtt:combat:health:adjust` e `vtt:combat:health:set` exigem `canControlCampaignAsMaster(campaignId, socket.id, user.id)` — mesmo guard ja usado em `vtt:hazard:place`/`vtt:hazard:update`.

## 7. Inicializacao de HP

### 7.1. Token de NPC/bestiario (Implementado)
Quando um `CampaignSceneTokenHealth` ainda nao existe para o token, `getOrInitializeHealth` busca automaticamente o HP do bloco de estatisticas da entrada de bestiario:
1. Resolve o sistema da campanha (`prisma.campaign.findUnique`) e busca a entrada via `findBestiaryEntry(system, bestiaryCreatureId)` (`apps/api/src/modules/combat/repositories/bestiary-health.ts`, funcao `getCatalogHealth`).
2. So aplica para entradas `category === 'npc'` (Hazards ficam de fora, ver `readme.md` secao 6). Le o valor pelo `display.stats` neutro (`stats.find(s => s.key === 'hitPoints')`, campo "PV" na ficha), nao pelo `systemData` especifico do sistema — segue o mesmo principio de fronteira Core/Game-System usado no adapter de ficha (secao 2.1).
3. Se encontrado, `currentHitPoints = maxHitPoints = PV do bestiario`, `temporaryHitPoints = 0` — e esse valor e **persistido** em `CampaignSceneTokenHealth` na primeira leitura (o token passa a ter HP "de verdade" a partir dai, nao so um calculo transiente).
4. Se a entrada nao for encontrada, nao for `npc`, ou nao tiver PV valido (> 0), cai de volta para `null` ("HP nao definido"), e o Mestre define manualmente pelo editor.
5. Esse fallback tambem roda dentro de `adjustHealth`/`setHealth` (nao so na leitura) — aplicar dano/cura direto num NPC que nunca teve HP tocado cria o registro com o PV do bestiario como base antes de aplicar a operacao, em vez de falhar silenciosamente.

### 7.2. Token de personagem de jogador
1. HP e sempre lido da ficha (`adapter.health.read`) — se o adapter do sistema nao expuser `health` (sistema sem suporte ainda), `health` e `null` e a UI mostra "HP nao definido".
2. Se a ficha ja tem `hitPoints` preenchido (fluxo normal, ficha criada com `buildDefaultCharacterSheetEnvelope`), o HP inicial ja existe sem nenhuma acao do Mestre.
3. Editar HP de jogador pelo combate escreve de volta na ficha (`adapter.health.write`), preservando os demais campos.

## 8. Chat / Log
Toda chamada a `adjustTokenHealth`/`setTokenHealth` grava uma linha em `CampaignSceneTokenHealthLog` (auditoria interna do Mestre, numeros exatos, sobrevive ao fim do encontro, nao exposta a jogadores). Essa tabela continua sendo a trilha de auditoria — o que muda nesta etapa e um segundo destino, voltado a jogadores.

**Decisao (2026-07-08):** enquanto o token alterado pertence a cena de um encontro ativo (`.ai/encounter/specs.md` secao 2), o handler de `vtt:combat:health:adjust` (dano/cura rapidos, os botoes "Aplicar dano"/"Aplicar cura" do `CombatHealthEditorModal`) tambem publica uma entrada `DAMAGE`/`HEAL` no log efemero do encontro (`VttEncounterState.log`, `.ai/encounter/specs.md` secao 2.1), visivel a Mestre e Jogadores no painel de Log de Batalha. `vtt:combat:health:set` (edicao direta dos campos PV atual/maximo/temporario) nao gera entrada de log — e uma correcao de valor, nao uma acao de dano/cura narrada. Essa entrada:
* usa `presentEncounterForRole`/`derivePublicNpcHealth` para mascarar `amount`/`resultingHealth` de participantes `source: 'bestiary'` para quem nao e Mestre — a mesma regra da secao 6.2 deste documento, nao uma regra nova;
* nao substitui o registro em `CampaignSceneTokenHealthLog` (que continua a fonte de auditoria exata, so acessivel ao Mestre);
* nao e postagem no chat de campanha (`ChatMessage`) — o log de batalha e um canal proprio do encontro, efemero, que desaparece quando o encontro termina.

Postagem automatica no `ChatMessage` da campanha continua **fora de escopo** (fica como toggle futuro "Anunciar dano/cura no chat" — diferente do log de batalha, que e sempre ativo enquanto o encontro estiver rodando).

## 9. Fora de Escopo Nesta Etapa
Ver `readme.md` secao 6. Resumo: tipos de dano, resistencia/fraqueza/imunidade, dureza/hardness, condicoes (`dying`/`wounded`/morte/estabilizacao — campos ja existem na ficha PF2e mas nao sao tocados), HP de Hazard, edicao de HP pelo jogador, mana/stamina/spell slots.

## 10. Criterios de Aceitacao
1. `CampaignSceneTokenHealth` e `CampaignSceneTokenHealthLog` existem e migram sem quebrar dados existentes; `CharacterSheetSystemAdapter.health` existe e `pathfinder2eSheetAdapter` o implementa.
2. Mestre aplica dano/cura em qualquer token (jogador ou NPC) durante o encontro e o valor persiste na fonte correta (ficha ou `CampaignSceneTokenHealth`).
3. `currentHitPoints` nunca fica abaixo de 0; cura nunca ultrapassa `maxHitPoints`.
4. Vida temporaria e consumida antes do HP atual ao tomar dano.
5. Card de iniciativa e token no mapa refletem o HP atualizado em tempo real.
6. Refresh/reconexao mantem o HP correto (fonte de verdade e o banco — ficha ou tabela de NPC —, nao a memoria).
7. Bestiario (catalogo) nao e alterado. Vida de jogador altera a ficha (`Character.sheet.hitPoints`) de forma proposital e documentada, tocando somente o bloco de HP, nunca os demais campos da ficha.
8. Jogadores nao recebem HP exato de NPCs por padrao.
9. Hazards continuam participantes especiais sem HP nesta etapa.
10. Regra de calculo de HP fica em `domain/health-rules.ts`, testavel isoladamente, sem logica espalhada no socket, e sem nenhum nome de campo especifico de sistema (`hitPoints`, `maximum`) fora do adapter PF2e.
11. Vida de jogador sobrevive a remocao/recriacao do token no mapa (fonte e a ficha, nao o token). Vida de NPC e removida junto com o token (fonte e a instancia).

## 11. UI (Frontend)

Componentes reais (`apps/web/src/vtt/table/components/`):

* **`HealthBar.tsx`** — componente puro, sem conhecimento de socket. Recebe `VttCombatantHealth | PublicNpcHealth | null`. Detecta a forma via `isExactCombatantHealth` (`'currentHitPoints' in health`) e renderiza numeros exatos (`current/max +temp`) ou uma barra por faixa com rotulo textual (`Saudavel`...`Caido`), sem numero. Usado tanto no token do mapa quanto no card de participante do encontro — a decisao de qual forma mostrar ja veio mascarada do backend (secao 6), o componente nunca decide isso.
* **Token no mapa (`BoardOverlays.tsx`, `PlayerToken`)** — nova prop `health`; `HealthBar` (tamanho `sm`) desenhada logo abaixo do token quando o valor esta disponivel. `CampaignOverviewPage.tsx` mantem `combatHealthByTokenId: Record<string, VttCombatantHealth | PublicNpcHealth>`, atualizado por `vtt:combat:health:changed` e por um merge automatico com o HP dos participantes do encontro ativo (`onEncounterChanged`). HP de cada token da cena ativa e solicitado uma unica vez via `vtt:combat:health:request` (dedupe por `useRef<Set<string>>`, sem polling/loop).
* **`EncounterTrackerPanel.tsx`** — card de participante `creature` (sidebar e destacado) mostra `HealthBar` inline no lugar do subtitulo de status, mais um icone de coracao "Editar HP" (Mestre-only) que abre o editor. Nao ha botoes de dano/cura soltos no card (a coluna e estreita demais); essas acoes ficam dentro do modal.
* **`CombatHealthEditorModal.tsx`** — campos HP atual/maximo/temporario (prefiltrados com o HP conhecido do combatente), campo de nota, campo de quantidade + botoes "Aplicar dano"/"Aplicar cura" (`vtt:combat:health:adjust`), fechar. Acessivel pelo icone de coracao no `EncounterTrackerPanel` e por um novo item "Editar HP" no menu de contexto do token no mapa (Mestre-only). **Sem botao "Salvar valores"** (feedback do usuario: nao faz sentido exigir um clique extra so pra persistir um numero que o Mestre acabou de digitar) — cada campo (atual/maximo/temporario) salva sozinho no `onBlur` (`vtt:combat:health:set`, um campo por vez, so quando o valor realmente mudou desde o ultimo commit), igual ao padrao ja usado nas notas do `SceneHazardsPanel`. Os campos resincronizam continuamente a partir do `health` recebido (nao so na primeira abertura), para refletir mudancas externas (ex.: Mestre editou vida maxima na ficha) sem exigir fechar e reabrir o modal.
* **Ficha PF2e (`Pathfinder2eSheetForm.tsx`)** — `hitPoints.current`/`hitPoints.temporary` sao somente leitura na ficha (Player e Mestre); `CombatHealthEditorModal` e o unico lugar que aplica dano/cura/ajuste manual desses dois campos. Decisao completa e a limitacao aceita (personagem sem token/sessao ativa nao tem UI para ajustar a propria vida atual) em `.ai/game_systems/pathfinder_2e/hit_points/specs.md` secao 6.1.

Lacuna conhecida: nao ha testes de UI (o repositorio nao tem infraestrutura de teste de componente React configurada — `test:unit` cobre somente `apps/api`).
