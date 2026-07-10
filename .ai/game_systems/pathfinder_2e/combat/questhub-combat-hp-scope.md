# QuestHub — Escopo de Combate e Controle de Vida

## 1. Contexto validado na branch

Branch analisada: `feat/implementando_hazzards`.

A branch já implementou a evolução de Hazards para suportar escopo, gatilho e execução:

- `CampaignSceneHazardState` agora possui `ACTIVE`.
- `CampaignSceneHazardScope` possui `POINT`, `AREA`, `SCENE`, `TARGET`.
- `CampaignSceneHazardTriggerMode` possui `MANUAL`, `ON_TOKEN_ENTER`, `ALWAYS_ON`.
- `CampaignSceneHazardExecutionMode` possui `INSTANT`, `ONGOING`, `ENCOUNTER_PARTICIPANT`.
- `CampaignSceneHazard` agora possui `scope`, `positionX?`, `positionY?`, `area?`, `targetTokenId?`, `targetCharacterId?`, `triggerMode` e `executionMode`.
- O domínio de hazard já expõe `SceneHazardInstance` com `scope`, `position`, `state`, `triggerMode` e `executionMode`.
- Hazards `ALWAYS_ON` já nascem como `ACTIVE`.
- Hazards acionados por movimento usam `ON_TOKEN_ENTER`; se forem `INSTANT`, viram `TRIGGERED`; se forem `ONGOING` ou `ENCOUNTER_PARTICIPANT`, viram `ACTIVE`.
- O Encounter Mode já aceita participantes `creature` e `hazard`.
- Participantes `hazard` já carregam `executionMode`.

Com isso, o próximo escopo deve tratar o combate como um fluxo próprio de estado de cena/encontro, sem contaminar ficha de personagem, bestiário ou hazard catalog.

---

## 2. Problema a resolver

O QuestHub precisa permitir, durante o combate:

1. iniciar/encerrar encontro;
2. controlar ordem de iniciativa;
3. exibir participantes de combate;
4. subtrair vida de personagens e NPCs;
5. adicionar/curar vida de personagens e NPCs;
6. lidar com vida temporária;
7. persistir o estado de vida para reconexão/refresh;
8. não alterar indevidamente o catálogo do bestiário;
9. não transformar Hazard em criatura;
10. não acoplar regras específicas demais de PF2e no core genérico do VTT.

O foco deste escopo é **controle manual e persistente de HP em combate**, não automação completa de dano, resistência, fraqueza, salvamento, condição de morte ou regras específicas de sistema.

---

## 3. Decisão arquitetural principal

### 3.1. Combate não deve ser apenas UI

O combate deve ter estado próprio e contratos explícitos. Hoje o Encounter Mode já existe em memória dentro de `campaign-presence`, mas o controle de HP precisa sobreviver a refresh/reconnect e precisa ser consistente com tokens de cena.

### 3.2. Vida pertence à instância em cena

A vida atual durante o combate deve pertencer ao **token/instância de cena**, não ao catálogo e não diretamente à ficha base.

Correto:

```txt
CampaignSceneToken
  └── CampaignSceneTokenHealth
```

Evitar:

```txt
BestiaryCreature.currentHp
Character.sheet.hp sendo sobrescrito automaticamente em toda alteração
VttEncounterParticipant como única fonte de verdade
```

Motivo:

- NPCs vindos do bestiário são instâncias; dois goblins iguais precisam ter HP diferente.
- O bestiário é catálogo, não estado vivo.
- A ficha do personagem pode ser sincronizada no futuro, mas o combate precisa primeiro controlar o estado do token em cena.
- O Encounter Mode pode espelhar a vida, mas não deve ser a única fonte de verdade.

### 3.3. Encounter participant espelha o estado

O participante de encontro deve carregar uma cópia apresentável de HP para a UI, mas o estado persistente deve vir do token.

```txt
CampaignSceneTokenHealth = fonte persistente
VttEncounterCreatureParticipant.health = snapshot apresentado em tempo real
```

---

## 4. Novo bounded context recomendado

Criar documentação e módulo:

```txt
.ai/combat/readme.md
.ai/combat/specs.md
.ai/combat/skills.md
```

Código sugerido:

```txt
apps/api/src/modules/combat/
  domain/
    types.ts
    validation.ts
    presenter.ts
    health-rules.ts
  services/
    combat-health-service.ts
  repositories/
    read.ts
    write.ts
```

O `campaign-presence/socket.ts` deve continuar orquestrando Socket.IO, mas a regra de HP deve sair para `combat-health-service`.

---

## 5. Modelo de dados proposto

### 5.1. Prisma

Adicionar modelo novo em vez de poluir `CampaignSceneToken` com muitos campos opcionais.

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
  id                 String                @id @default(cuid())
  campaignId         String
  sceneId            String
  tokenId            String
  actorUserId        String?
  actorCharacterId   String?
  operation          CombatHealthOperation
  amount             Int?
  before             Json
  after              Json
  note               String?
  createdAt          DateTime              @default(now())

  @@index([campaignId, createdAt])
  @@index([sceneId, createdAt])
  @@index([tokenId, createdAt])
}
```

Também adicionar a relação no `CampaignSceneToken`:

```prisma
model CampaignSceneToken {
  // campos atuais...

  health CampaignSceneTokenHealth?
}
```

### 5.2. Por que usar tabela separada?

Porque HP é estado de combate/cena, não identidade do token.

Isso permite:

- criar log de alterações;
- resetar HP sem recriar token;
- evoluir para condições depois;
- evitar muitas colunas nulas em `CampaignSceneToken`;
- manter o domínio de combate separado do domínio de posicionamento.

---

## 6. Tipos TypeScript

### 6.1. Health DTO

```ts
export type VttCombatantHealth = {
  currentHitPoints: number
  maxHitPoints: number
  temporaryHitPoints: number
  state: 'OK' | 'DOWN'
}
```

`state` é derivado:

```txt
currentHitPoints > 0  => OK
currentHitPoints <= 0 => DOWN
```

Não implementar ainda:

```txt
DEAD
DYING
WOUNDED
UNCONSCIOUS
STABLE
```

Essas condições são específicas demais para esta etapa e devem entrar depois como condições/status.

### 6.2. Token com HP

Atualizar:

```ts
export type VttPlayerToken = {
  id: string
  source: 'character' | 'bestiary'
  characterId: string | null
  bestiaryCreatureId?: string | null
  name: string
  avatarUrl: string | null
  tokenBorderColor?: string | null
  ownerUserId: string
  ownerName: string
  role: 'PLAYER' | 'NPC'
  hidden: boolean
  position: VttTokenPosition
  health?: VttCombatantHealth | null
}
```

### 6.3. Participante de criatura no encontro

Atualizar:

```ts
export type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
  health?: VttCombatantHealth | null
}
```

Não adicionar HP em `VttEncounterHazardParticipant` nesta etapa. Hazard com HP/dureza deve ser um escopo futuro, porque envolve regras diferentes de objeto, hardness, imunidades e dano estrutural.

---

## 7. Contratos Socket.IO

Criar namespace lógico:

```txt
vtt:combat:health:adjust
vtt:combat:health:set
vtt:combat:health:changed
vtt:combat:health:request
vtt:combat:health:snapshot
```

### 7.1. Ajustar HP

```ts
const vttCombatHealthAdjustSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  operation: z.enum(['DAMAGE', 'HEAL']),
  amount: z.number().int().positive().max(9999),
  note: z.string().max(500).optional(),
})
```

### 7.2. Setar HP manualmente

```ts
const vttCombatHealthSetSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
  currentHitPoints: z.number().int().min(0).max(9999).optional(),
  maxHitPoints: z.number().int().min(1).max(9999).optional(),
  temporaryHitPoints: z.number().int().min(0).max(9999).optional(),
  note: z.string().max(500).optional(),
}).refine(
  (input) =>
    input.currentHitPoints !== undefined ||
    input.maxHitPoints !== undefined ||
    input.temporaryHitPoints !== undefined
)
```

### 7.3. Payload emitido

```ts
type VttCombatHealthChangedPayload = {
  campaignId: string
  sceneId: string
  tokenId: string
  health: VttCombatantHealth
}
```

---

## 8. Regras de cálculo de HP

### 8.1. DAMAGE

Entrada:

```txt
operation = DAMAGE
amount = X
```

Regra:

1. dano consome `temporaryHitPoints` primeiro;
2. o excedente reduz `currentHitPoints`;
3. `currentHitPoints` nunca fica menor que 0;
4. `temporaryHitPoints` nunca fica menor que 0;
5. se `currentHitPoints` chegar a 0, `state` apresentado vira `DOWN`.

Exemplo:

```txt
current = 20
temp = 5
damage = 8

temp absorve 5
current perde 3

resultado:
current = 17
temp = 0
```

### 8.2. HEAL

Entrada:

```txt
operation = HEAL
amount = X
```

Regra:

1. cura aumenta `currentHitPoints`;
2. cura não altera `temporaryHitPoints`;
3. `currentHitPoints` não passa de `maxHitPoints`;
4. se `currentHitPoints` sair de 0 para acima de 0, `state` volta para `OK`.

Exemplo:

```txt
current = 0
max = 20
heal = 7

resultado:
current = 7
state = OK
```

### 8.3. SET_CURRENT

Regra:

```txt
currentHitPoints = clamp(input, 0, maxHitPoints)
```

### 8.4. SET_MAX

Regra:

1. `maxHitPoints` precisa ser maior que 0;
2. se o novo máximo for menor que o HP atual, reduzir `currentHitPoints` para o novo máximo;
3. `temporaryHitPoints` não muda.

### 8.5. SET_TEMPORARY

Regra:

```txt
temporaryHitPoints = max(0, input)
```

Não aplicar regra automática de stack de vida temporária nesta etapa. O Mestre decide o valor final.

---

## 9. Inicialização de HP

Quando um token entra em cena ou em encontro, o sistema deve tentar descobrir HP inicial.

### 9.1. Token de personagem

Ordem sugerida:

```txt
1. CampaignSceneTokenHealth existente
2. Character.sheet, se houver adapter para o sistema
3. valor manual definido pelo Mestre
4. null
```

Não sobrescrever `Character.sheet` automaticamente nesta etapa.

### 9.2. Token de bestiário

Ordem sugerida:

```txt
1. CampaignSceneTokenHealth existente
2. bestiary entry / systemData / display stats, se houver HP normalizado
3. valor manual definido pelo Mestre
4. null
```

Não alterar catálogo.

### 9.3. Sem HP conhecido

Se `health = null`, a UI deve mostrar:

```txt
HP não definido
```

E o Mestre deve poder clicar para definir:

```txt
maxHitPoints
currentHitPoints
temporaryHitPoints
```

---

## 10. Permissões

### 10.1. Mestre

Pode:

- definir HP de qualquer token;
- aplicar dano em qualquer token;
- aplicar cura em qualquer token;
- setar HP máximo;
- setar HP temporário;
- visualizar HP exato de todos os tokens.

### 10.2. Jogador

MVP recomendado:

- pode visualizar HP exato do próprio personagem;
- pode visualizar HP dos aliados jogadores, se o produto decidir permitir;
- não pode visualizar HP exato de NPCs;
- não pode editar HP de NPCs;
- pode editar HP do próprio personagem somente se `allowPlayerHealthEdit = true`.

Para simplificar a primeira entrega, pode começar com:

```txt
Somente Mestre edita HP.
Jogadores apenas visualizam.
```

Depois evoluir para edição pelo dono do token.

---

## 11. Visibilidade de HP

Criar presenter para HP, semelhante ao presenter dos Hazards.

### 11.1. Mestre

Vê:

```txt
currentHitPoints
maxHitPoints
temporaryHitPoints
state
```

### 11.2. Jogador dono do token

Vê HP exato do próprio token.

### 11.3. Jogador vendo outro player

Produto pode escolher entre:

```txt
A) HP exato
B) barra aproximada
C) estado textual
```

Recomendação: mostrar HP exato para personagens aliados em campanha cooperativa.

### 11.4. Jogador vendo NPC

Não revelar número exato por padrão.

Usar estado derivado:

```txt
100%             => Saudável
75% a 99%        => Levemente ferido
50% a 74%        => Ferido
25% a 49%        => Muito ferido
1% a 24%         => À beira da queda
0%               => Caído
```

Payload público para NPC pode ser:

```ts
type PublicNpcHealth = {
  state: 'HEALTHY' | 'SCRATCHED' | 'INJURED' | 'BLOODIED' | 'CRITICAL' | 'DOWN'
  percentage?: number
}
```

Evitar mandar `currentHitPoints` e `maxHitPoints` exatos para jogadores.

---

## 12. Backend — fluxo de atualização

### 12.1. Ao mover token

Sem mudança direta. Movimento continua acionando Hazards como já faz.

### 12.2. Ao iniciar encontro

Fluxo atual:

```txt
vtt:encounter:start
  -> tokenIds
  -> hazardInstanceIds
  -> cria VttEncounterState em memória
```

Novo fluxo:

```txt
vtt:encounter:start
  -> buscar tokens
  -> hidratar health de cada token
  -> montar VttEncounterCreatureParticipant com health
  -> manter hazards como estão
```

### 12.3. Ao ajustar HP

Fluxo:

```txt
vtt:combat:health:adjust
  -> validar schema
  -> validar permissão
  -> buscar token e cena
  -> buscar ou inicializar CampaignSceneTokenHealth
  -> aplicar regra DAMAGE/HEAL
  -> persistir CampaignSceneTokenHealth
  -> registrar CampaignSceneTokenHealthLog
  -> atualizar token live map, se necessário
  -> atualizar participante no encounter live state, se ele existir
  -> emitir vtt:combat:health:changed
  -> emitir vtt:encounter:changed, se encounter estiver ativo
```

### 12.4. Ao setar HP manual

Fluxo semelhante, mas usando `SET_CURRENT`, `SET_MAX`, `SET_TEMPORARY`.

---

## 13. Frontend — UI mínima

### 13.1. Token no mapa

Adicionar barra de HP abaixo ou acima do token.

Mestre:

```txt
[Nome]
[HP 17/24 + 3 temp]
```

Jogador vendo NPC:

```txt
[Nome]
[barra aproximada sem números]
```

Jogador vendo próprio PC:

```txt
[Nome]
[HP 17/24]
```

### 13.2. Card de iniciativa

No card de participante criatura:

- mostrar HP;
- botão `-`;
- botão `+`;
- input rápido;
- botão para abrir editor avançado.

Sugestão de controles:

```txt
[-10] [-5] [-1] [input] [+1] [+5] [+10]
```

Ou mais simples:

```txt
[Dano] [Cura] [Editar HP]
```

### 13.3. Modal de HP

Campos:

```txt
HP atual
HP máximo
HP temporário
Nota opcional
```

Ações:

```txt
Aplicar dano
Aplicar cura
Salvar valores
Cancelar
```

---

## 14. Chat/log

Criar log persistente em `CampaignSceneTokenHealthLog`.

Chat deve ser opcional.

Recomendação:

- para Mestre: sempre registrar no log interno;
- para jogadores: não postar automaticamente todo dano/cura no chat no MVP;
- futuramente permitir toggle:

```txt
Anunciar dano/cura no chat
```

Mensagem opcional:

```txt
⚔ Goblin sofreu 7 de dano.
✦ Lian recuperou 5 PV.
```

Para NPCs ocultos ou HP privado, cuidado para não revelar informação indevida.

---

## 15. O que não implementar nesta etapa

Não implementar ainda:

- rolagem automática de ataque;
- cálculo automático de dano;
- tipo de dano;
- resistência;
- fraqueza;
- imunidade;
- dureza/hardness;
- escudo;
- redução de dano;
- condição `dying`;
- condição `wounded`;
- morte automática;
- estabilização;
- cura negativa/positive/vitality/void;
- dano em Hazard;
- HP de Hazard;
- integração profunda com ficha PF2e;
- regra específica de D&D 5e;
- múltiplas barras de recurso;
- mana, stamina ou spell slots.

Essas features devem ser módulos futuros.

---

## 16. Testes obrigatórios

### 16.1. Unit tests de regra de HP

Casos:

```txt
DAMAGE reduz HP atual.
DAMAGE consome temp HP antes do HP atual.
DAMAGE não deixa HP negativo.
HEAL não passa do máximo.
HEAL tira estado DOWN quando HP sobe acima de 0.
SET_MAX reduz current se current > max.
SET_TEMPORARY aceita 0.
```

### 16.2. Backend/service tests

Casos:

```txt
Mestre altera HP de token player.
Mestre altera HP de NPC bestiário.
Jogador não altera HP de NPC.
Jogador não altera HP de outro player.
HP persiste após nova busca da cena.
HP aparece no participante de encontro.
Alteração de HP durante encontro emite encounter changed.
```

### 16.3. Presenter tests

Casos:

```txt
Mestre recebe HP exato de todos.
Jogador recebe HP exato do próprio token.
Jogador não recebe HP exato de NPC.
Token hidden não vaza HP.
```

### 16.4. UI tests mínimos

Casos:

```txt
Card de iniciativa mostra HP.
Botão de dano reduz HP.
Botão de cura aumenta HP.
Modal permite setar HP máximo/atual/temp.
Barra atualiza sem reiniciar encontro.
```

---

## 17. Critérios de aceite

A entrega está concluída quando:

1. existe documentação em `.ai/combat`;
2. existe modelo persistente de HP por token de cena;
3. o Mestre consegue aplicar dano em qualquer token durante encontro;
4. o Mestre consegue curar qualquer token durante encontro;
5. o HP nunca fica abaixo de 0;
6. a cura nunca ultrapassa o HP máximo;
7. vida temporária é consumida antes do HP atual ao tomar dano;
8. o card de iniciativa reflete HP atualizado em tempo real;
9. o token no mapa reflete HP atualizado em tempo real;
10. refresh/reconnect mantém o HP correto;
11. bestiário não é alterado;
12. `Character.sheet` não é sobrescrito automaticamente;
13. jogadores não recebem HP exato de NPCs por padrão;
14. hazards continuam como participantes especiais sem virar criatura;
15. o código de cálculo de HP fica em módulo de domínio/testável, não espalhado dentro do socket.

---

## 18. Plano incremental para Codex/Claude

### Etapa 1 — Documentação

Criar:

```txt
.ai/combat/readme.md
.ai/combat/specs.md
.ai/combat/skills.md
```

### Etapa 2 — Prisma

Adicionar:

```txt
CampaignSceneTokenHealth
CampaignSceneTokenHealthLog
CombatHealthOperation
relação health em CampaignSceneToken
```

Rodar migration.

### Etapa 3 — Domínio

Criar:

```txt
apps/api/src/modules/combat/domain/types.ts
apps/api/src/modules/combat/domain/health-rules.ts
apps/api/src/modules/combat/domain/validation.ts
apps/api/src/modules/combat/domain/presenter.ts
```

### Etapa 4 — Repositórios

Criar:

```txt
apps/api/src/modules/combat/repositories/read.ts
apps/api/src/modules/combat/repositories/write.ts
```

### Etapa 5 — Service

Criar:

```txt
apps/api/src/modules/combat/services/combat-health-service.ts
```

Responsabilidades:

```txt
getOrInitializeTokenHealth
adjustTokenHealth
setTokenHealth
presentHealthForRole
syncEncounterParticipantHealth
```

### Etapa 6 — Socket

Adicionar handlers em `campaign-presence/socket.ts`, mas delegar regra para o service:

```txt
vtt:combat:health:adjust
vtt:combat:health:set
vtt:combat:health:request
```

### Etapa 7 — Contratos frontend/backend

Atualizar:

```txt
apps/api/src/modules/campaign-presence/contracts.ts
apps/web/src/vtt/table/domain/types.ts
```

Adicionar `health` em:

```txt
VttPlayerToken
VttEncounterCreatureParticipant
```

### Etapa 8 — UI

Implementar:

```txt
TokenHealthBar
EncounterHealthControls
CombatHealthEditorModal
```

### Etapa 9 — Testes

Adicionar testes de domínio, service, presenter e UI mínima.

---

## 19. Prompt sugerido para Codex/Claude

```txt
Implemente o escopo de combate e controle de vida descrito em `.ai/combat`.

Objetivo:
- adicionar HP persistente por token de cena;
- permitir ao Mestre aplicar dano e cura durante o encontro;
- refletir HP no token e nos cards de iniciativa;
- preservar separação entre token, personagem, bestiário e hazard;
- não implementar automação completa de regras PF2e/D&D ainda.

Regras principais:
- HP pertence ao token de cena, não ao catálogo do bestiário;
- Character.sheet não deve ser sobrescrito automaticamente;
- damage consome temporaryHitPoints antes de currentHitPoints;
- heal não ultrapassa maxHitPoints;
- currentHitPoints nunca fica abaixo de 0;
- Master vê HP exato de todos;
- jogadores não recebem HP exato de NPCs por padrão;
- hazards continuam participantes especiais sem HP nesta etapa.

Siga Clean Architecture:
- regra de HP em domain/health-rules.ts;
- persistência em repositories;
- orquestração em service;
- socket apenas valida input, checa permissão e chama service.

Atualize Prisma, contratos backend, tipos frontend e UI mínima.
Adicione testes para regras de HP, permissões e apresentação por papel.
```
