# QuestHub — Refatoração de Hazards PF2e: Escopo, Gatilho e Execução

## 1. Objetivo deste documento

Este documento consolida a decisão arquitetural para evoluir o sistema de **Hazards de Pathfinder 2e** no QuestHub, a partir da branch:

```txt
https://github.com/Luanrma/questhub/tree/feat/implementando_hazzards
```

O objetivo é orientar uma refatoração com Codex, Claude Code ou outro agente de implementação, sem perder os pontos discutidos:

- Hazards não devem virar `Character`.
- Hazards não devem ser tratados como NPCs.
- Hazards podem existir como entrada de catálogo PF2e.
- Hazards podem ser instanciados em cena.
- Nem todo hazard é uma armadilha invisível posicionada no grid.
- Nem todo hazard precisa iniciar encontro.
- Traps, environmental hazards e haunts precisam ser suportados sem forçar um único modelo operacional.
- O sistema deve separar **tipo narrativo**, **escopo espacial**, **modo de gatilho** e **modo de execução**.

---

## 2. Contexto atual da branch

A branch já implementa uma base importante e correta para Hazards.

### 2.1. Catálogo PF2e

Hazards existem como entradas de Bestiário/Compêndio, com categoria própria:

```ts
type Pathfinder2eHazardType = 'trap' | 'environmental' | 'haunt' | 'unknown'

type Pathfinder2eHazardComplexity = 'simple' | 'complex'

type Pathfinder2eHazardCatalogEntry = {
  id: string
  system: 'PATHFINDER_2E'
  category: 'hazard'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  traits: string[]
  hazardType: Pathfinder2eHazardType
  complexity: Pathfinder2eHazardComplexity
  publicationTitle: string
  remaster: boolean
  license: string
  sheet: Pathfinder2eHazardSheet
}
```

A ficha de hazard suporta campos mecânicos PF2e:

```ts
type Pathfinder2eHazardSheet = {
  defenses: {
    armorClass?: number
    hardness?: number
    hitPoints?: number
    stealth?: number
    stealthDetail?: string
    fortitude?: number
    reflex?: number
    will?: number
  }
  disable?: string
  routine?: string
  reset?: string
  description?: string
  actions: Array<{
    name: string
    kind: 'action' | 'reaction' | 'free' | 'passive'
    traits: string[]
    detail?: string
  }>
}
```

### 2.2. Apresentação neutra no core

Hazards são convertidos para `GameSystemBestiaryEntry`, mantendo o core agnóstico:

```ts
type GameSystemBestiaryEntry = {
  id: string
  system: string
  category: 'hazard'
  name: string
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: GameSystemBestiarySheet
  }
  systemData: unknown
}
```

Diretriz: campos mecânicos como `stealth`, `disable`, `routine`, `hardness`, `reset`, `complexity` etc. pertencem ao pacote PF2e, não ao core genérico.

### 2.3. Toolbar de Hazards

A toolbar de Hazards já é separada da toolbar de tokens/NPCs:

```ts
type PreparedHazardToolbarSettings = {
  preparedHazardEntryIds: string[]
}
```

Endpoint atual:

```txt
GET /api/campaigns/:campaignId/hazard-candidates
```

Resposta:

```ts
type VttHazardCandidate = {
  source: 'hazard'
  hazardEntryId: string
  name: string
  level?: string
  rarity?: string
  complexity?: string
  tokenBorderColor?: string | null
}
```

Regras já corretas:

- somente Mestre adiciona/remove Hazards preparados;
- toolbar não cria token NPC;
- toolbar referencia IDs de catálogo;
- toolbar pode iniciar fluxo de instância em cena;
- não copiar `systemData` completo para configuração do usuário/campanha.

### 2.4. Instância atual em cena

Hoje existe `CampaignSceneHazard` no Prisma:

```prisma
model CampaignSceneHazard {
  id                  String                        @id @default(cuid())
  sceneId             String
  system              GameSystem
  hazardEntryId       String
  name                String
  positionX           Float
  positionY           Float
  visibility          CampaignSceneHazardVisibility @default(HIDDEN)
  state               CampaignSceneHazardState      @default(ARMED)
  notes               String?
  triggerOnTokenEnter Boolean                       @default(false)
  createdAt           DateTime                      @default(now())
  updatedAt           DateTime                      @updatedAt

  scene CampaignScene @relation(fields: [sceneId], references: [id], onDelete: Cascade)

  @@index([sceneId])
  @@index([system, hazardEntryId])
}
```

E o contrato em runtime:

```ts
type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'
type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'DISABLED' | 'EXPIRED'

type SceneHazardInstance = {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  position: { x: number; y: number }
  visibility: SceneHazardVisibility
  state: SceneHazardState
  notes: string | null
  triggerOnTokenEnter: boolean
}
```

O presenter atual já separa o que Mestre e Jogador veem:

```ts
export const hiddenHazardName = 'Perigo desconhecido'
```

Regras atuais:

- Mestre vê a instância completa.
- Jogador não recebe hazards `HIDDEN`.
- Jogador recebe hazards `HINTED` com nome mascarado como `Perigo desconhecido`.
- Jogador recebe hazards `REVEALED` com nome real.
- `notes` nunca devem ser enviadas aos jogadores.
- `triggerOnTokenEnter` nunca deve ser enviado aos jogadores.

### 2.5. Gatilho automático atual por movimento de token

Hoje existe uma automação para armadilhas posicionadas:

- O Mestre ativa `triggerOnTokenEnter`.
- Quando um token se move, o servidor recebe `movementPath`.
- O servidor calcula as células cruzadas pelo caminho.
- Se um hazard armado está na célula cruzada, ele dispara.
- O hazard muda para `state: 'TRIGGERED'`.
- O hazard muda para `visibility: 'REVEALED'`.
- O sistema publica mensagem no chat.
- Não há rolagem automática.
- Não há cálculo automático de dano.
- Não há salvamento automático.
- Não inicia encontro automaticamente.
- Não reseta automaticamente.

Fluxo atual aproximado:

```ts
async function checkTokenTriggeredHazards(campaignId: string, sceneId: string, path: VttTokenPosition[]) {
  if (!path.length) return

  const armedTriggerInstances = await findArmedTriggerHazardsInScene(sceneId)
  if (!armedTriggerInstances.length) return

  const gridSize = getCampaignSceneGridMap(campaignId).get(sceneId)?.size ?? defaultVttGridSettings.size
  const cellKey = (point: VttTokenPosition) => `${Math.floor(point.x / gridSize)}:${Math.floor(point.y / gridSize)}`
  const pathCells = new Set(path.map(cellKey))

  for (const instance of armedTriggerInstances) {
    if (!pathCells.has(cellKey(instance.position))) continue

    const result = await updateSceneHazardInstance({
      campaignId,
      hazardId: instance.id,
      state: 'TRIGGERED',
      visibility: 'REVEALED',
    })
    if (!result) continue

    await emitSceneHazardChanged(campaignId, result.sceneId, result.instance)
    await postHazardTriggerChatMessage(campaignId, instance.name)
  }
}
```

### 2.6. Encounter Mode atual

O sistema já permite encounter com participantes de criatura e hazard.

Contrato atual:

```ts
type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string
  name: string
  avatarUrl: string | null
  initiative: number | null
}

type VttEncounterHazardParticipant = {
  type: 'hazard'
  participantId: string
  hazardInstanceId: string
  hazardEntryId: string
  name: string
  initiative: number | null
  visibility: 'HIDDEN' | 'REVEALED'
  state: 'ARMED' | 'TRIGGERED' | 'DISABLED' | 'EXPIRED'
}

type VttEncounterParticipant = VttEncounterCreatureParticipant | VttEncounterHazardParticipant
```

Start encounter atual:

```ts
export const vttEncounterStartSchema = z
  .object({
    campaignId: z.string().min(1),
    sceneId: z.string().min(1),
    tokenIds: z.array(z.string().min(1)).max(100).default([]),
    hazardInstanceIds: z.array(z.string().min(1)).max(20).default([]),
  })
  .refine((input) => input.tokenIds.length + input.hazardInstanceIds.length > 0)
```

Gatilho manual em encounter:

```ts
socket.on('vtt:encounter:trigger-hazard', async (input: unknown) => {
  // Mestre aciona "Disparar" em um participante hazard.
  // Servidor muda state para TRIGGERED.
  // Servidor força visibility para REVEALED.
  // Servidor emite encounter changed.
  // Servidor publica mensagem no chat.
})
```

Regras atuais corretas:

- Hazard em encounter é `type: 'hazard'`, não `type: 'creature'`.
- Participante hazard não tem avatar.
- Participante hazard pode ter iniciativa manual.
- Participante hazard oculto tem nome mascarado para jogadores.
- Não há checagem automática de complexidade PF2e no módulo genérico de encounter.

---

## 3. Problema atual

O modelo atual cobre bem o caso:

```txt
Trap posicionada em uma célula invisível no grid
→ token passa por cima
→ hazard dispara
```

Isso é ótimo para:

- fosso oculto;
- runa no chão;
- lâmina de parede;
- armadilha em baú;
- armadilha em porta;
- placa de pressão;
- fio de disparo.

Mas esse modelo é limitado para outros tipos de hazard.

### 3.1. Environmental nem sempre é posicional

Alguns hazards ambientais são localizados:

```txt
Areia movediça
Poço ácido
Bolor venenoso
Zona de lava
Gás em uma sala específica
```

Outros são a cena inteira:

```txt
Nevasca
Calor extremo
Frio extremo
Atmosfera tóxica
Terremoto
Tempestade
Mar revolto
```

Nesses casos, exigir `positionX`/`positionY` não representa bem a ficção.

### 3.2. Haunt pode ser local, de cena ou direcionado a um personagem

Haunts podem ser:

```txt
um altar assombrado;
um quarto assombrado;
uma mansão inteira corrompida;
uma memória espiritual ativada ao olhar algo;
uma maldição que acomete um personagem;
uma possessão;
um evento narrativo disparado por interação.
```

Nem todo haunt é “pisou na célula, disparou”.

### 3.3. Disparar hazard não deve significar sempre iniciar encounter

Alguns hazards são efeitos instantâneos:

```txt
Pisou no fosso → caiu → resolveu.
Abriu o baú → veneno disparou → resolveu.
Ativou runa → explosão → resolveu.
```

Outros são recorrentes:

```txt
Lâminas giratórias agem todo turno.
Haunt manifesta efeitos a cada rodada.
Nevasca exige teste no início da rodada.
Gás causa dano ou condição por rodada.
```

Portanto:

```txt
Hazard disparar ≠ necessariamente iniciar encontro.
```

O encounter deve ser usado quando o hazard precisa de controle por turnos, rotina recorrente ou ordenação por iniciativa.

---

## 4. Decisão arquitetural proposta

Separar Hazard em quatro eixos independentes:

1. **Tipo narrativo/ruleset** — o que o hazard é no PF2e.
2. **Escopo espacial/alvo** — onde ou sobre quem ele existe.
3. **Modo de gatilho** — quando ele ativa.
4. **Modo de execução** — como ele roda depois de ativar.

Essa separação evita forçar todo hazard a ser uma armadilha invisível em uma célula e evita forçar todo hazard a iniciar encounter.

---

## 5. Eixo 1 — Tipo narrativo/ruleset

Este eixo representa a taxonomia de PF2e/produto.

```ts
type HazardType = 'trap' | 'environmental' | 'haunt' | 'unknown'
```

### 5.1. Trap

Armadilha mecânica ou mágica.

Exemplos:

```txt
fosso oculto;
runa explosiva;
setas na parede;
placa de pressão;
porta eletrificada;
baú envenenado.
```

Pode ser:

```ts
type TrapSubtype = 'mechanical' | 'magical'
```

### 5.2. Environmental

Perigo ambiental, fenômeno natural, terreno hostil ou cena perigosa.

Exemplos:

```txt
nevasca;
areia movediça;
gás tóxico;
lava;
calor extremo;
frio extremo;
terremoto;
bolor venenoso;
terreno instável.
```

### 5.3. Haunt

Manifestação espiritual, trauma local, memória assombrada ou maldição narrativa.

Exemplos:

```txt
quarto assombrado;
altar amaldiçoado;
espelho que mostra uma memória traumática;
posse espiritual;
lamento que afeta um personagem;
ritual interrompido que se manifesta novamente.
```

### 5.4. Regra importante

O tipo narrativo **não deve decidir sozinho** como o hazard funciona no VTT.

Exemplo:

```txt
Trap geralmente é POINT, mas pode ser AREA.
Environmental pode ser POINT, AREA ou SCENE.
Haunt pode ser POINT, AREA, SCENE ou TARGET.
```

---

## 6. Eixo 2 — Escopo espacial/alvo

Novo conceito necessário:

```ts
type HazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
```

Este eixo responde:

```txt
Onde ou sobre quem este hazard existe?
```

### 6.1. POINT

Hazard em um ponto/célula específica.

Casos:

```txt
fosso oculto;
runa no chão;
armadilha em porta;
baú armadilhado;
placa de pressão;
altar específico.
```

Requer posição:

```ts
position: { x: number; y: number }
```

### 6.2. AREA

Hazard em uma região da cena.

Casos:

```txt
sala cheia de gás;
areia movediça ocupando várias células;
bolor venenoso em uma área;
zona de lava;
aura assombrada em torno de um altar.
```

Pode começar simples com uma posição central e evoluir para área real depois.

Modelo futuro:

```ts
type HazardArea = {
  shape: 'CELL' | 'RADIUS' | 'RECTANGLE' | 'POLYGON'
  radiusCells?: number
  points?: Array<{ x: number; y: number }>
}
```

### 6.3. SCENE

Hazard que afeta a cena inteira.

Casos:

```txt
nevasca;
calor extremo;
frio extremo;
tempestade;
mar revolto;
mansão assombrada inteira;
atmosfera tóxica em todo o mapa.
```

Não deveria exigir posição.

Pode aparecer na UI como:

```txt
banner de cena;
card de efeito ativo;
ícone no topo da mesa;
painel lateral de hazards ativos;
marcador global para o Mestre.
```

### 6.4. TARGET

Hazard que afeta um token/personagem específico.

Casos:

```txt
haunt que acomete um jogador;
maldição temporária;
posse espiritual;
visão traumática direcionada;
armadilha mágica que marca um alvo.
```

Pode referenciar:

```ts
targetTokenId?: string | null
targetCharacterId?: string | null
```

### 6.5. Mapeamento recomendado

```txt
Hidden Pit
→ type: trap
→ scope: POINT

Explosive Rune
→ type: trap
→ scope: POINT

Poisonous Mold
→ type: environmental
→ scope: AREA ou POINT

Quicksand
→ type: environmental
→ scope: AREA

Snowfall / Nevasca
→ type: environmental
→ scope: SCENE

Haunted Altar
→ type: haunt
→ scope: POINT ou AREA

Haunted Mansion
→ type: haunt
→ scope: SCENE

Possessive Haunt
→ type: haunt
→ scope: TARGET
```

---

## 7. Eixo 3 — Modo de gatilho

Novo conceito necessário:

```ts
type HazardTriggerMode =
  | 'MANUAL'
  | 'ON_TOKEN_ENTER'
  | 'ON_TOKEN_NEAR'
  | 'ON_INTERACT'
  | 'ON_ATTACK'
  | 'ON_OBSERVE'
  | 'ON_SCENE_ENTER'
  | 'ON_ROUND_START'
  | 'ALWAYS_ON'
```

Para o MVP/refatoração inicial, implementar apenas:

```ts
type HazardTriggerMode =
  | 'MANUAL'
  | 'ON_TOKEN_ENTER'
  | 'ALWAYS_ON'
```

Os demais podem ficar documentados para evolução futura.

### 7.1. MANUAL

O Mestre decide quando disparar/ativar.

Casos:

```txt
interação narrativa;
jogador abriu um baú;
jogador olhou para um espelho;
jogador falou uma frase proibida;
jogador atacou um objeto;
Mestre quer revelar no timing certo.
```

Comportamento:

```txt
Mestre clica em "Disparar" ou "Ativar".
Sistema muda estado conforme executionMode.
Sistema pode revelar o hazard.
Sistema pode postar no chat.
```

### 7.2. ON_TOKEN_ENTER

Hazard dispara quando um token entra/cruza sua célula/área.

Este é o comportamento atual de `triggerOnTokenEnter`.

Casos:

```txt
fosso oculto;
placa de pressão;
runa no chão;
fio de disparo;
areia movediça;
zona de espinhos.
```

Regra atual a preservar:

```txt
A detecção considera o caminho do movimento, não apenas a posição final.
```

### 7.3. ALWAYS_ON

Hazard já está ativo enquanto a cena está ativa.

Casos:

```txt
nevasca;
calor extremo;
gás em todo o ambiente;
mansão assombrada;
terreno hostil permanente;
aura persistente.
```

Comportamento:

```txt
Não precisa "disparar".
Ao carregar a cena, ele já aparece como ativo para o Mestre.
Pode ou não aparecer para jogadores dependendo da visibility.
Pode ou não participar do encounter dependendo do executionMode.
```

### 7.4. Modos futuros documentados

Não implementar obrigatoriamente agora, mas deixar contrato preparado:

```txt
ON_TOKEN_NEAR
→ token chegou perto do hazard ou entrou em raio.

ON_INTERACT
→ jogador interagiu com objeto/porta/baú/altar.

ON_ATTACK
→ jogador atacou objeto/criatura/estrutura.

ON_OBSERVE
→ jogador olhou, examinou ou percebeu algo.

ON_SCENE_ENTER
→ hazard dispara quando a cena é carregada ou quando tokens entram.

ON_ROUND_START
→ hazard dispara no início de cada rodada.
```

---

## 8. Eixo 4 — Modo de execução

Novo conceito necessário:

```ts
type HazardExecutionMode =
  | 'INSTANT'
  | 'ONGOING'
  | 'ENCOUNTER_PARTICIPANT'
```

Este eixo responde:

```txt
Depois que o hazard ativa, como ele roda?
```

### 8.1. INSTANT

Hazard resolve uma vez e termina.

Casos:

```txt
fosso oculto;
runa explosiva;
dardo envenenado;
baú armadilhado;
explosão mágica;
queda de pedras única.
```

Comportamento:

```txt
Dispara.
Revela se necessário.
Posta aviso no chat.
Mestre resolve dano/salvamento manualmente.
Estado vai para TRIGGERED ou EXPIRED.
Não inicia encounter automaticamente.
```

### 8.2. ONGOING

Hazard permanece ativo, mas não necessariamente entra na iniciativa.

Casos:

```txt
nevasca;
gás tóxico;
calor extremo;
frio extremo;
haunt atmosférico;
terreno instável;
aura amaldiçoada.
```

Comportamento:

```txt
Hazard fica ACTIVE.
UI mostra como efeito ativo da cena/área/alvo.
Mestre consulta ficha e rotina.
Sistema pode postar aviso no chat.
Não exige participante no Encounter Mode.
```

### 8.3. ENCOUNTER_PARTICIPANT

Hazard entra no Encounter Mode como participante especial.

Casos:

```txt
hazard complexo com rotina;
lâminas giratórias agindo por rodada;
haunt que executa efeito no turno dele;
nevasca severa durante perseguição em rounds;
gás que age a cada rodada;
armadilha complexa que pode ser desativada durante combate.
```

Comportamento:

```txt
Hazard pode ser adicionado ao Encounter Mode.
Continua type: 'hazard'.
Não vira creature.
Não vira NPC.
Pode ter iniciativa manual.
No turno do hazard, UI mostra operations: description, disable, routine, reset.
Sistema não precisa automatizar dano/salvamento no MVP.
```

---

## 9. Novo modelo proposto

### 9.1. Contrato TypeScript ideal

```ts
type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'

type SceneHazardState =
  | 'ARMED'
  | 'TRIGGERED'
  | 'ACTIVE'
  | 'DISABLED'
  | 'EXPIRED'

type SceneHazardScope =
  | 'POINT'
  | 'AREA'
  | 'SCENE'
  | 'TARGET'

type SceneHazardTriggerMode =
  | 'MANUAL'
  | 'ON_TOKEN_ENTER'
  | 'ALWAYS_ON'

type SceneHazardExecutionMode =
  | 'INSTANT'
  | 'ONGOING'
  | 'ENCOUNTER_PARTICIPANT'

type SceneHazardArea = {
  shape: 'CELL' | 'RADIUS' | 'RECTANGLE' | 'POLYGON'
  radiusCells?: number
  points?: Array<{ x: number; y: number }>
}

type SceneHazardInstance = {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string

  scope: SceneHazardScope

  position?: { x: number; y: number } | null
  area?: SceneHazardArea | null

  targetTokenId?: string | null
  targetCharacterId?: string | null

  visibility: SceneHazardVisibility
  state: SceneHazardState

  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode

  notes: string | null
}
```

### 9.2. Modelo Prisma proposto para primeira refatoração

Implementação incremental recomendada:

```prisma
enum CampaignSceneHazardVisibility {
  HIDDEN
  HINTED
  REVEALED
}

enum CampaignSceneHazardState {
  ARMED
  TRIGGERED
  ACTIVE
  DISABLED
  EXPIRED
}

enum CampaignSceneHazardScope {
  POINT
  AREA
  SCENE
  TARGET
}

enum CampaignSceneHazardTriggerMode {
  MANUAL
  ON_TOKEN_ENTER
  ALWAYS_ON
}

enum CampaignSceneHazardExecutionMode {
  INSTANT
  ONGOING
  ENCOUNTER_PARTICIPANT
}

model CampaignSceneHazard {
  id            String @id @default(cuid())
  sceneId       String
  system        GameSystem
  hazardEntryId String
  name          String

  scope CampaignSceneHazardScope @default(POINT)

  positionX Float?
  positionY Float?

  // Futuro: area real configuravel.
  // Pode começar como Json? para evitar muitas tabelas agora.
  area Json?

  targetTokenId     String?
  targetCharacterId String?

  visibility CampaignSceneHazardVisibility @default(HIDDEN)
  state      CampaignSceneHazardState      @default(ARMED)

  triggerMode   CampaignSceneHazardTriggerMode   @default(MANUAL)
  executionMode CampaignSceneHazardExecutionMode @default(INSTANT)

  notes String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  scene CampaignScene @relation(fields: [sceneId], references: [id], onDelete: Cascade)

  @@index([sceneId])
  @@index([system, hazardEntryId])
  @@index([scope])
  @@index([triggerMode])
  @@index([executionMode])
  @@index([state])
}
```

### 9.3. Compatibilidade com modelo atual

Campo atual:

```prisma
triggerOnTokenEnter Boolean @default(false)
```

Deve ser migrado para:

```prisma
triggerMode CampaignSceneHazardTriggerMode @default(MANUAL)
```

Migração lógica:

```txt
triggerOnTokenEnter = true  → triggerMode = ON_TOKEN_ENTER
triggerOnTokenEnter = false → triggerMode = MANUAL
```

Campos atuais:

```prisma
positionX Float
positionY Float
```

Devem se tornar opcionais:

```prisma
positionX Float?
positionY Float?
```

Regra de validação:

```txt
scope POINT ou AREA  → position obrigatória no input, pelo menos por enquanto.
scope SCENE          → position deve ser null/opcional.
scope TARGET         → targetTokenId ou targetCharacterId deve existir futuramente.
```

---

## 10. Estados do Hazard

Estado atual:

```ts
type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'DISABLED' | 'EXPIRED'
```

Proposta:

```ts
type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
```

### 10.1. ARMED

Hazard está preparado para disparar.

Usado principalmente por:

```txt
MANUAL
ON_TOKEN_ENTER
```

### 10.2. TRIGGERED

Hazard disparou.

Bom para hazards instantâneos que já aconteceram, mas ainda estão registrados.

### 10.3. ACTIVE

Novo estado necessário.

Usado para hazards contínuos:

```txt
ALWAYS_ON + ONGOING
MANUAL + ONGOING
ON_TOKEN_ENTER + ONGOING
```

Exemplos:

```txt
nevasca ativa;
gás tóxico ativo;
haunt manifestado;
aura amaldiçoada ativa.
```

### 10.4. DISABLED

Hazard foi neutralizado/desativado/exorcizado/contornado.

### 10.5. EXPIRED

Hazard perdeu efeito, terminou sua duração ou não é mais relevante.

---

## 11. Regras de negócio propostas

### 11.1. Hazard não é NPC

Manter regra atual:

```txt
Hazard não cria Character.
Hazard não vira NPC.
Hazard não usa token NPC.
Hazard não entra em preparedBestiaryCreatureIds.
Hazard usa toolbar própria.
Hazard usa instância própria de cena.
```

### 11.2. Hazard de catálogo vs Hazard de cena

Separar:

```txt
HazardCatalogEntry
→ dado estático/importado/normalizado do ruleset.

SceneHazardInstance
→ ocorrência daquele hazard em uma cena/campanha.
```

A instância referencia o catálogo por `hazardEntryId`.

Não copiar o `systemData` inteiro para a instância.

### 11.3. Tipo não determina execução automaticamente

Não fazer:

```txt
if hazardType === 'trap' then scope = POINT, trigger = ON_TOKEN_ENTER, execution = INSTANT
```

Pode haver defaults sugeridos, mas o Mestre deve poder ajustar.

Defaults recomendados:

```txt
trap
→ scope: POINT
→ triggerMode: ON_TOKEN_ENTER ou MANUAL
→ executionMode: INSTANT

trap complexa
→ scope: POINT ou AREA
→ triggerMode: ON_TOKEN_ENTER ou MANUAL
→ executionMode: ENCOUNTER_PARTICIPANT

environmental
→ scope: AREA ou SCENE
→ triggerMode: ALWAYS_ON ou MANUAL
→ executionMode: ONGOING

haunt
→ scope: POINT, AREA, SCENE ou TARGET
→ triggerMode: MANUAL
→ executionMode: ONGOING ou ENCOUNTER_PARTICIPANT
```

### 11.4. Disparo não inicia encounter automaticamente

Regra fundamental:

```txt
Hazard trigger ≠ encounter start.
```

Fluxo correto:

```txt
Hazard ativa/dispara
→ sistema olha executionMode
→ INSTANT: resolve aviso/estado/chat
→ ONGOING: marca ACTIVE e mostra como efeito ativo
→ ENCOUNTER_PARTICIPANT: permite/enfileira/adiciona ao encounter conforme comando do Mestre
```

No MVP, mesmo `ENCOUNTER_PARTICIPANT` não precisa iniciar encounter sozinho. Pode apenas exibir ação clara para o Mestre:

```txt
"Enviar para Encontro"
```

### 11.5. Automação deve ser opcional e incremental

Não implementar uma engine completa de PF2e agora.

Fora do MVP:

```txt
rolagem automática de Perception/Seek;
rolagem automática de salvamento;
cálculo automático de dano;
aplicação automática de condições;
rotina totalmente automatizada;
área complexa com polígonos editáveis;
reset automático;
IA decidindo targets.
```

MVP deve permanecer Mestre-controlado.

---

## 12. Comportamento por combinação

### 12.1. Trap simples posicionada

```txt
type: trap
scope: POINT
triggerMode: ON_TOKEN_ENTER
executionMode: INSTANT
state inicial: ARMED
visibility inicial: HIDDEN
```

Fluxo:

```txt
Token cruza célula.
Sistema encontra hazard ARMED + ON_TOKEN_ENTER.
Sistema muda state para TRIGGERED.
Sistema muda visibility para REVEALED.
Sistema posta mensagem no chat.
Mestre resolve efeito manualmente.
Não inicia encounter.
```

### 12.2. Trap mágica por interação

```txt
type: trap
scope: POINT
triggerMode: MANUAL
executionMode: INSTANT
state inicial: ARMED
visibility inicial: HIDDEN
```

Fluxo:

```txt
Jogador interage com porta/baú/runa.
Mestre clica "Disparar".
Sistema revela hazard.
Sistema posta mensagem.
Mestre resolve efeito.
```

### 12.3. Trap complexa

```txt
type: trap
scope: AREA
triggerMode: ON_TOKEN_ENTER ou MANUAL
executionMode: ENCOUNTER_PARTICIPANT
state inicial: ARMED
visibility inicial: HIDDEN
```

Fluxo:

```txt
Hazard ativa.
Mestre pode enviar para Encounter Mode.
Hazard entra como participant type: 'hazard'.
No turno do hazard, UI mostra routine/disable/reset.
Mestre resolve manualmente.
```

### 12.4. Environmental localizado

```txt
type: environmental
scope: AREA
triggerMode: ON_TOKEN_ENTER ou ALWAYS_ON
executionMode: ONGOING
state inicial: ARMED ou ACTIVE
visibility: HINTED ou REVEALED
```

Exemplo:

```txt
Gás tóxico em uma sala.
```

Fluxo:

```txt
Se ALWAYS_ON, já começa ACTIVE.
Se ON_TOKEN_ENTER, ativa quando token entra.
UI mostra área/efeito ativo.
Mestre resolve testes/dano manualmente.
Encounter é opcional.
```

### 12.5. Environmental global de cena

```txt
type: environmental
scope: SCENE
triggerMode: ALWAYS_ON
executionMode: ONGOING
state inicial: ACTIVE
visibility: REVEALED ou HINTED
position: null
```

Exemplo:

```txt
Nevasca.
```

Fluxo:

```txt
Ao carregar a cena, hazard já está ativo.
Não precisa pisar em célula.
Não precisa marcador posicional.
UI mostra hazard ativo da cena.
Mestre pode abrir ficha.
Mestre pode, opcionalmente, enviar para encounter se quiser controlar por rodadas.
```

### 12.6. Haunt localizado

```txt
type: haunt
scope: POINT ou AREA
triggerMode: MANUAL, ON_TOKEN_ENTER ou futuro ON_OBSERVE
executionMode: ONGOING ou ENCOUNTER_PARTICIPANT
```

Exemplo:

```txt
Altar assombrado.
```

Fluxo:

```txt
Jogador chega perto/interage/observa.
Mestre ativa manualmente no MVP.
Hazard revela ou fica HINTED.
Se for complexo, pode entrar no encounter.
```

### 12.7. Haunt direcionado a personagem

```txt
type: haunt
scope: TARGET
triggerMode: MANUAL
executionMode: ONGOING
state inicial: ACTIVE após ativação
```

Exemplo:

```txt
Um espírito acomete um player específico.
```

Fluxo:

```txt
Mestre escolhe alvo.
Sistema registra targetTokenId/targetCharacterId.
UI mostra efeito para Mestre.
Jogador pode ver ou não conforme visibility.
Não exige posição.
Não exige encounter, mas pode ser usado em encounter se necessário.
```

---

## 13. Mudanças necessárias no backend

### 13.1. Prisma

Adicionar enums:

```prisma
enum CampaignSceneHazardScope {
  POINT
  AREA
  SCENE
  TARGET
}

enum CampaignSceneHazardTriggerMode {
  MANUAL
  ON_TOKEN_ENTER
  ALWAYS_ON
}

enum CampaignSceneHazardExecutionMode {
  INSTANT
  ONGOING
  ENCOUNTER_PARTICIPANT
}
```

Atualizar enum de state:

```prisma
enum CampaignSceneHazardState {
  ARMED
  TRIGGERED
  ACTIVE
  DISABLED
  EXPIRED
}
```

Atualizar model:

```prisma
model CampaignSceneHazard {
  id            String @id @default(cuid())
  sceneId       String
  system        GameSystem
  hazardEntryId String
  name          String

  scope CampaignSceneHazardScope @default(POINT)

  positionX Float?
  positionY Float?

  area Json?

  targetTokenId     String?
  targetCharacterId String?

  visibility CampaignSceneHazardVisibility @default(HIDDEN)
  state      CampaignSceneHazardState      @default(ARMED)

  triggerMode   CampaignSceneHazardTriggerMode   @default(MANUAL)
  executionMode CampaignSceneHazardExecutionMode @default(INSTANT)

  notes String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  scene CampaignScene @relation(fields: [sceneId], references: [id], onDelete: Cascade)

  @@index([sceneId])
  @@index([system, hazardEntryId])
  @@index([scope])
  @@index([triggerMode])
  @@index([executionMode])
  @@index([state])
}
```

### 13.2. Migração de dados

Se houver dados existentes:

```sql
-- pseudo-migração lógica
UPDATE "CampaignSceneHazard"
SET "triggerMode" = CASE
  WHEN "triggerOnTokenEnter" = true THEN 'ON_TOKEN_ENTER'
  ELSE 'MANUAL'
END;
```

Depois remover `triggerOnTokenEnter` quando frontend/backend não dependerem mais dele.

### 13.3. Domain types

Atualizar:

```ts
export type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'
export type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
export type SceneHazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
export type SceneHazardTriggerMode = 'MANUAL' | 'ON_TOKEN_ENTER' | 'ALWAYS_ON'
export type SceneHazardExecutionMode = 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'

export type SceneHazardArea = {
  shape: 'CELL' | 'RADIUS' | 'RECTANGLE' | 'POLYGON'
  radiusCells?: number
  points?: Array<{ x: number; y: number }>
}

export type SceneHazardInstance = {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  area: SceneHazardArea | null
  targetTokenId: string | null
  targetCharacterId: string | null
  visibility: SceneHazardVisibility
  state: SceneHazardState
  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode
  notes: string | null
}
```

### 13.4. Public presenter

Jogadores não devem receber:

```txt
notes;
triggerMode se for informação secreta;
executionMode se revelar intenção secreta;
target interno se não for revelado;
hazards HIDDEN;
nome real de hazards HINTED.
```

Modelo público sugerido:

```ts
type PublicSceneHazardInstance = {
  id: string
  sceneId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  area: SceneHazardArea | null
  visibility: 'HINTED' | 'REVEALED'
  state: SceneHazardState
}
```

Regra:

```ts
if (role === 'MASTER') return fullInstance
if (instance.visibility === 'HIDDEN') return null
return publicInstanceWithMaskedNameWhenHinted
```

### 13.5. Validation schemas

Atualizar `placeSceneHazardSchema`.

Sugestão:

```ts
const sceneHazardScopeSchema = z.enum(['POINT', 'AREA', 'SCENE', 'TARGET'])
const sceneHazardTriggerModeSchema = z.enum(['MANUAL', 'ON_TOKEN_ENTER', 'ALWAYS_ON'])
const sceneHazardExecutionModeSchema = z.enum(['INSTANT', 'ONGOING', 'ENCOUNTER_PARTICIPANT'])

export const placeSceneHazardSchema = z.object({
  campaignId: z.string().min(1),
  sceneId: z.string().min(1),
  hazardEntryId: z.string().min(1),
  scope: sceneHazardScopeSchema.default('POINT'),
  position: vttTokenPositionSchema.nullable().optional(),
  triggerMode: sceneHazardTriggerModeSchema.default('MANUAL'),
  executionMode: sceneHazardExecutionModeSchema.default('INSTANT'),
}).superRefine((input, ctx) => {
  if ((input.scope === 'POINT' || input.scope === 'AREA') && !input.position) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'POINT/AREA hazards require position.',
      path: ['position'],
    })
  }
})
```

Atualizar `updateSceneHazardSchema` para aceitar:

```txt
scope;
position nullable;
area;
targetTokenId;
targetCharacterId;
triggerMode;
executionMode;
state ACTIVE.
```

### 13.6. Service layer

Atualizar `placeSceneHazard` para receber os novos campos.

Regras:

```txt
Validar scene/campaign.
Validar hazardEntryId no catálogo.
Garantir entry.category === 'hazard'.
Aplicar defaults com base no hazardType/complexity, se input não trouxer.
Criar instância com scope/triggerMode/executionMode.
```

Pseudo:

```ts
function getDefaultSceneHazardConfig(entry: GameSystemBestiaryEntry) {
  const systemData = entry.systemData as unknown

  // Regra defensiva: não depender demais do systemData se não estiver tipado.
  // Pode usar display/tags/complexity quando disponível.

  return {
    scope: 'POINT',
    triggerMode: 'MANUAL',
    executionMode: 'INSTANT',
  } as const
}
```

Melhor futuro:

```txt
PF2e adapter fornece defaults recomendados:
trap simple       → POINT + ON_TOKEN_ENTER + INSTANT
trap complex      → AREA/POINT + MANUAL/ON_TOKEN_ENTER + ENCOUNTER_PARTICIPANT
environmental     → AREA/SCENE + ALWAYS_ON + ONGOING
haunt             → MANUAL + ONGOING/ENCOUNTER_PARTICIPANT
```

### 13.7. Repositórios read/write

Atualizar mappers para:

```txt
positionX/positionY nullable;
scope;
area;
targetTokenId;
targetCharacterId;
triggerMode;
executionMode;
state ACTIVE.
```

Substituir queries de `findArmedTriggerSceneHazards` para usar:

```txt
state = ARMED
triggerMode = ON_TOKEN_ENTER
scope IN (POINT, AREA)
```

Não usar mais:

```txt
triggerOnTokenEnter = true
```

---

## 14. Mudanças necessárias no Socket.IO

### 14.1. Eventos existentes a preservar

```txt
vtt:hazard:place
vtt:hazard:update
vtt:hazard:remove
vtt:hazards:request
vtt:hazard:changed
vtt:hazard:removed
vtt:hazards:snapshot
```

### 14.2. Atualizar `vtt:hazard:place`

Hoje cria sempre hazard posicionado.

Novo comportamento:

```txt
POINT/AREA → exige position.
SCENE → não exige position.
TARGET → futuramente exige target.
```

### 14.3. Atualizar `vtt:hazard:update`

Aceitar:

```txt
scope;
position;
area;
targetTokenId;
targetCharacterId;
visibility;
state;
notes;
triggerMode;
executionMode.
```

### 14.4. Atualizar checagem de trigger por movimento

Atual:

```txt
findArmedTriggerHazardsInScene(sceneId)
```

Novo:

```txt
findArmedTokenEnterHazardsInScene(sceneId)
```

Critérios:

```txt
state = ARMED
triggerMode = ON_TOKEN_ENTER
scope = POINT ou AREA
```

Para MVP:

```txt
POINT → comparar célula da position.
AREA → se area ainda não foi implementada, tratar como CELL/position ou ignorar até area existir.
SCENE → nunca entra nessa checagem.
TARGET → nunca entra nessa checagem.
```

Quando dispara:

```ts
const nextState = instance.executionMode === 'ONGOING' || instance.executionMode === 'ENCOUNTER_PARTICIPANT'
  ? 'ACTIVE'
  : 'TRIGGERED'
```

Regra:

```txt
INSTANT → TRIGGERED
ONGOING → ACTIVE
ENCOUNTER_PARTICIPANT → ACTIVE ou TRIGGERED?
```

Recomendação:

```txt
ENCOUNTER_PARTICIPANT → ACTIVE
```

Porque o hazard está manifestado/ativo e ainda pode agir.

### 14.5. Atualizar mensagem no chat

Mensagem atual:

```txt
⚠ {hazardName} foi disparado!
```

Melhorar conforme execução:

```txt
INSTANT:
⚠ {hazardName} foi disparado!

ONGOING:
⚠ {hazardName} está ativo!

ENCOUNTER_PARTICIPANT:
⚠ {hazardName} entrou em atividade!
```

Manter simples se preferir:

```txt
⚠ {hazardName} foi ativado!
```

### 14.6. Não iniciar encounter automaticamente

Mesmo quando `executionMode = ENCOUNTER_PARTICIPANT`, o trigger automático não deve iniciar encounter sozinho no MVP.

Comportamento recomendado:

```txt
Hazard ativa.
Chat avisa.
Hazard fica visível/ACTIVE.
UI do Mestre mostra ação "Enviar para Encontro".
Mestre decide se envia.
```

---

## 15. Mudanças necessárias no Encounter Mode

### 15.1. Preservar participant hazard

Manter:

```ts
type VttEncounterHazardParticipant = {
  type: 'hazard'
  participantId: string
  hazardInstanceId: string
  hazardEntryId: string
  name: string
  initiative: number | null
  visibility: 'HIDDEN' | 'REVEALED'
  state: 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
}
```

Adicionar `ACTIVE` ao state.

### 15.2. Regra para adicionar hazard ao encounter

Hoje qualquer instância pode entrar.

Manter no módulo genérico, mas no frontend/produto sugerir:

```txt
Mostrar "Enviar para Encontro" principalmente quando executionMode = ENCOUNTER_PARTICIPANT.
Permitir manualmente mesmo para outros, se o Mestre quiser.
```

Não bloquear por complexity no módulo genérico.

### 15.3. No turno do hazard

Manter comportamento atual:

```txt
Mostrar operations: description, disable, routine, reset.
Não executar dano automaticamente.
Não rolar salvamento automaticamente.
Não aplicar condição automaticamente.
```

### 15.4. Gatilho manual dentro do encounter

Atualizar para considerar executionMode:

```txt
INSTANT → state TRIGGERED
ONGOING → state ACTIVE
ENCOUNTER_PARTICIPANT → state ACTIVE
```

Ou manter botão separado:

```txt
"Disparar" para INSTANT.
"Ativar" para ONGOING/ENCOUNTER_PARTICIPANT.
```

---

## 16. Mudanças necessárias no frontend

### 16.1. Tipos de domínio

Atualizar `apps/web/src/vtt/table/domain/types.ts`:

```ts
export type SceneHazardVisibility = 'HIDDEN' | 'HINTED' | 'REVEALED'
export type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'
export type SceneHazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
export type SceneHazardTriggerMode = 'MANUAL' | 'ON_TOKEN_ENTER' | 'ALWAYS_ON'
export type SceneHazardExecutionMode = 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'

export type VttSceneHazard = {
  id: string
  sceneId: string
  hazardEntryId?: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  area?: SceneHazardArea | null
  targetTokenId?: string | null
  targetCharacterId?: string | null
  visibility: SceneHazardVisibility
  state: SceneHazardState
  triggerMode?: SceneHazardTriggerMode
  executionMode?: SceneHazardExecutionMode
  notes?: string | null
}
```

### 16.2. UI de criação/posicionamento

Hoje o Mestre arrasta hazard para a mesa.

Novo comportamento recomendado:

#### Drag normal para o mapa

Default:

```txt
scope: POINT
position: drop position
triggerMode: MANUAL ou ON_TOKEN_ENTER
executionMode: INSTANT
```

#### Criar hazard de cena/global

Precisa de uma ação separada:

```txt
"Adicionar como efeito da cena"
```

Cria:

```txt
scope: SCENE
position: null
triggerMode: ALWAYS_ON
executionMode: ONGOING
state: ACTIVE
```

### 16.3. UI para escopo

No menu/contexto do hazard, permitir alterar:

```txt
Escopo:
- Ponto
- Área
- Cena inteira
- Alvo/personagem (futuro)
```

Para MVP:

```txt
POINT e SCENE são prioridade.
AREA pode funcionar como POINT até área real existir.
TARGET pode ficar oculto/desabilitado ou marcado como futuro.
```

### 16.4. UI para trigger

Substituir checkbox atual:

```txt
[ ] Disparar ao pisar
```

Por select:

```txt
Gatilho:
- Manual
- Ao token entrar/pisar
- Sempre ativo na cena
```

Mapeamento:

```txt
Manual                → MANUAL
Ao token entrar/pisar → ON_TOKEN_ENTER
Sempre ativo na cena  → ALWAYS_ON
```

### 16.5. UI para executionMode

Adicionar select:

```txt
Execução:
- Instantâneo
- Contínuo
- Participa do encontro
```

Mapeamento:

```txt
Instantâneo           → INSTANT
Contínuo              → ONGOING
Participa do encontro → ENCOUNTER_PARTICIPANT
```

### 16.6. UI de hazards globais da cena

Criar uma área para listar hazards com `scope: SCENE`.

Opções de UI:

```txt
painel lateral "Perigos da Cena";
banner no topo da mesa;
seção na toolbar de Hazards;
ícone de alerta próximo ao nome da cena;
card compacto abaixo do Encounter Mode.
```

MVP recomendado:

```txt
Painel "Hazards ativos da cena" para o Mestre.
```

Cada card deve mostrar:

```txt
nome;
tipo/nível/complexidade quando disponível;
visibility;
state;
triggerMode;
executionMode;
botão abrir ficha;
botão ativar/disparar;
botão enviar para encounter;
botão editar notas;
botão remover.
```

### 16.7. Hazard marker no mapa

Para hazards `POINT` e `AREA`, manter marcador no mapa.

Para hazards `SCENE`, não renderizar marcador posicional no mapa.

Para hazards `TARGET`, futuramente renderizar vínculo no token/alvo.

### 16.8. Visibilidade para jogadores

Manter regras:

```txt
HIDDEN → jogador não recebe/não vê.
HINTED → jogador vê marcador genérico: Perigo desconhecido.
REVEALED → jogador vê nome real.
```

Para `SCENE`:

```txt
HIDDEN → jogador não vê efeito de cena.
HINTED → jogador vê aviso genérico: Ambiente perigoso / Perigo desconhecido.
REVEALED → jogador vê nome real: Nevasca, Gás Tóxico etc.
```

---

## 17. Defaults recomendados pelo produto

Ao preparar/adicionar hazard, sugerir defaults baseados em tipo/complexidade.

### 17.1. Trap simple

```txt
scope: POINT
triggerMode: ON_TOKEN_ENTER
executionMode: INSTANT
state: ARMED
visibility: HIDDEN
```

### 17.2. Trap complex

```txt
scope: POINT ou AREA
triggerMode: ON_TOKEN_ENTER ou MANUAL
executionMode: ENCOUNTER_PARTICIPANT
state: ARMED
visibility: HIDDEN
```

### 17.3. Environmental simple/localizado

```txt
scope: AREA ou POINT
triggerMode: ON_TOKEN_ENTER ou MANUAL
executionMode: INSTANT ou ONGOING
state: ARMED
visibility: HINTED ou REVEALED
```

### 17.4. Environmental global

```txt
scope: SCENE
triggerMode: ALWAYS_ON
executionMode: ONGOING
state: ACTIVE
visibility: HINTED ou REVEALED
```

### 17.5. Haunt localizado

```txt
scope: POINT ou AREA
triggerMode: MANUAL
executionMode: ONGOING ou ENCOUNTER_PARTICIPANT
state: ARMED
visibility: HIDDEN ou HINTED
```

### 17.6. Haunt de cena

```txt
scope: SCENE
triggerMode: MANUAL ou ALWAYS_ON
executionMode: ONGOING ou ENCOUNTER_PARTICIPANT
state: ARMED ou ACTIVE
visibility: HIDDEN ou HINTED
```

### 17.7. Haunt em alvo

```txt
scope: TARGET
triggerMode: MANUAL
executionMode: ONGOING
state: ACTIVE após ativar
visibility: HIDDEN, HINTED ou REVEALED
```

Pode ficar para fase futura.

---

## 18. Plano incremental de implementação

### Fase 1 — Refatoração segura do modelo

Objetivo: trocar booleano por trigger mode e adicionar escopo/execução sem implementar todas as features.

Tarefas:

```txt
1. Adicionar enums Prisma:
   - CampaignSceneHazardScope
   - CampaignSceneHazardTriggerMode
   - CampaignSceneHazardExecutionMode

2. Adicionar ACTIVE em CampaignSceneHazardState.

3. Atualizar CampaignSceneHazard:
   - scope default POINT
   - triggerMode default MANUAL
   - executionMode default INSTANT
   - positionX/positionY nullable
   - area Json? opcional
   - targetTokenId String? opcional
   - targetCharacterId String? opcional

4. Migrar triggerOnTokenEnter:
   true  → ON_TOKEN_ENTER
   false → MANUAL

5. Atualizar domain types backend/frontend.

6. Atualizar mappers/repositories.

7. Manter comportamento atual funcionando para POINT + ON_TOKEN_ENTER + INSTANT.
```

### Fase 2 — Ajustar socket e serviços

Tarefas:

```txt
1. Atualizar schemas de place/update.
2. Atualizar placeSceneHazard para aceitar scope/triggerMode/executionMode.
3. Atualizar updateSceneHazardInstance.
4. Atualizar findArmedTriggerHazardsInScene para usar triggerMode ON_TOKEN_ENTER.
5. Atualizar checkTokenTriggeredHazards.
6. Adicionar lógica de estado:
   INSTANT → TRIGGERED
   ONGOING → ACTIVE
   ENCOUNTER_PARTICIPANT → ACTIVE
7. Manter chat message.
8. Não iniciar encounter automaticamente.
```

### Fase 3 — Frontend mínimo

Tarefas:

```txt
1. Atualizar tipos do VTT.
2. Substituir checkbox "Disparar ao pisar" por select de trigger.
3. Adicionar select de executionMode.
4. Adicionar select de scope.
5. Manter marcador no mapa para POINT/AREA.
6. Não renderizar marcador posicional para SCENE.
7. Criar lista/painel simples de hazards de cena.
```

### Fase 4 — UX de environmental/haunt

Tarefas:

```txt
1. Adicionar ação "Adicionar como efeito da cena".
2. Para scope SCENE, criar state ACTIVE por padrão quando triggerMode ALWAYS_ON.
3. Exibir hazards SCENE como cards de efeito ativo.
4. Permitir abrir ficha pelo card.
5. Permitir ativar/desativar/revelar.
6. Permitir enviar para encounter quando executionMode ENCOUNTER_PARTICIPANT.
```

### Fase 5 — Área e alvo futuro

Não obrigatório agora.

Tarefas futuras:

```txt
1. Editor visual de área.
2. Raio em células.
3. Retângulo/polígono.
4. Trigger por proximidade.
5. Trigger por interação.
6. Trigger por observação.
7. Target hazard em token/personagem.
8. Aplicar ícone/efeito no token alvo.
```

---

## 19. Critérios de aceite

### 19.1. Arquitetura

- [ ] Hazard continua não criando `Character`.
- [ ] Hazard continua não virando NPC.
- [ ] Hazard continua não usando token NPC.
- [ ] Hazard continua usando toolbar própria.
- [ ] Hazard de catálogo continua separado de instância de cena.
- [ ] Core continua agnóstico de campos mecânicos PF2e.

### 19.2. Modelo

- [ ] `CampaignSceneHazard` possui `scope`.
- [ ] `CampaignSceneHazard` possui `triggerMode`.
- [ ] `CampaignSceneHazard` possui `executionMode`.
- [ ] `CampaignSceneHazardState` possui `ACTIVE`.
- [ ] `positionX` e `positionY` aceitam `null` para hazards de cena.
- [ ] `triggerOnTokenEnter` foi removido ou ficou apenas em migração temporária.

### 19.3. Compatibilidade

- [ ] Hazards existentes com `triggerOnTokenEnter = true` continuam disparando ao token pisar.
- [ ] Hazards existentes sem trigger continuam manuais.
- [ ] Traps posicionadas continuam funcionando como antes.
- [ ] O movimento do token continua considerando o caminho completo, não só posição final.

### 19.4. Gatilho

- [ ] `MANUAL` não dispara automaticamente.
- [ ] `ON_TOKEN_ENTER` dispara quando token cruza célula/área.
- [ ] `ALWAYS_ON` não depende de posição nem movimento.
- [ ] Trigger automático não inicia encounter sozinho.

### 19.5. Execução

- [ ] `INSTANT` muda hazard para `TRIGGERED`.
- [ ] `ONGOING` muda hazard para `ACTIVE`.
- [ ] `ENCOUNTER_PARTICIPANT` pode ser enviado ao Encounter Mode.
- [ ] Encounter Mode continua aceitando participante `type: 'hazard'`.
- [ ] Hazard em encounter continua não sendo criatura.

### 19.6. Visibilidade

- [ ] Mestre vê hazards completos.
- [ ] Jogador não recebe hazards `HIDDEN`.
- [ ] Jogador vê hazards `HINTED` com nome genérico.
- [ ] Jogador vê hazards `REVEALED` com nome real.
- [ ] Jogador nunca recebe `notes`.
- [ ] Jogador não recebe informações secretas de trigger se isso revelar metagame.

### 19.7. Environmental / Scene

- [ ] É possível criar hazard `scope: SCENE` sem posição.
- [ ] Hazard de cena pode ser `ALWAYS_ON`.
- [ ] Hazard de cena pode ficar `ACTIVE`.
- [ ] Hazard de cena aparece em UI própria, não como marcador obrigatório no mapa.

### 19.8. Haunt

- [ ] Haunt pode ser modelado como POINT, AREA ou SCENE.
- [ ] Haunt não é obrigado a usar `ON_TOKEN_ENTER`.
- [ ] Haunt pode ser ativado manualmente.
- [ ] Haunt complexo pode participar de encounter como hazard.

---

## 20. Testes recomendados

### 20.1. Backend unit tests

Criar testes para:

```txt
placeSceneHazard com POINT exige position.
placeSceneHazard com SCENE aceita position null.
placeSceneHazard rejeita entry que não seja category hazard.
updateSceneHazardInstance atualiza triggerMode.
updateSceneHazardInstance atualiza executionMode.
updateSceneHazardInstance aceita state ACTIVE.
presenter não envia HIDDEN para jogador.
presenter mascara HINTED para jogador.
presenter não envia notes para jogador.
```

### 20.2. Socket tests ou integração

Criar testes para:

```txt
ON_TOKEN_ENTER + ARMED dispara ao cruzar célula.
ON_TOKEN_ENTER ignora hazard DISABLED.
ON_TOKEN_ENTER ignora hazard TRIGGERED.
ON_TOKEN_ENTER ignora hazard SCENE.
MANUAL não dispara ao mover token.
ALWAYS_ON não dispara por movimento.
INSTANT vira TRIGGERED.
ONGOING vira ACTIVE.
ENCOUNTER_PARTICIPANT vira ACTIVE.
```

### 20.3. Frontend tests

Criar testes para:

```txt
Hazard POINT renderiza marker.
Hazard AREA renderiza marker/área simples.
Hazard SCENE não renderiza marker.
Hazard SCENE aparece em painel de hazards da cena.
Menu mostra triggerMode.
Menu mostra executionMode.
Menu mostra scope.
Jogador vê HINTED como Perigo desconhecido.
```

---

## 21. Não objetivos desta refatoração

Não implementar agora:

```txt
rolagem automática de Seek/Perception;
rolagem automática de saving throw;
cálculo automático de dano;
aplicação automática de condições;
automação completa de rotina PF2e;
editor visual completo de área/polígono;
trigger por olhar/interagir/atacar;
trigger por proximidade;
target hazard completo;
reset automático;
engine genérica de colisão complexa;
line of sight;
integração com iluminação.
```

Esses pontos devem ser considerados evolução futura.

---

## 22. Resumo da decisão

O modelo correto para QuestHub deve ser:

```txt
HazardCatalogEntry
→ entrada estática PF2e no Bestiário/Compêndio.

SceneHazardInstance
→ ocorrência do hazard em uma cena.

SceneHazardInstance possui:
→ tipo vindo do catálogo PF2e;
→ scope: POINT | AREA | SCENE | TARGET;
→ triggerMode: MANUAL | ON_TOKEN_ENTER | ALWAYS_ON;
→ executionMode: INSTANT | ONGOING | ENCOUNTER_PARTICIPANT;
→ state: ARMED | TRIGGERED | ACTIVE | DISABLED | EXPIRED;
→ visibility: HIDDEN | HINTED | REVEALED.
```

A regra mental final é:

```txt
Tipo diz o que o hazard é.
Escopo diz onde/sobre quem ele existe.
Gatilho diz quando ele ativa.
Execução diz como ele roda depois de ativar.
```

E a regra mais importante:

```txt
Hazard ativar/disparar não significa automaticamente iniciar encounter.
```

Encounter é apenas uma das formas de execução, usada principalmente para hazards complexos, recorrentes ou relevantes por turno.

---

## 23. Prompt sugerido para Codex/Claude

Use este prompt para orientar a implementação:

```txt
Você está trabalhando no QuestHub, branch feat/implementando_hazzards.

Refatore o sistema de Hazards PF2e conforme o documento questhub-hazards-refactor.md.

Objetivo principal:
Separar SceneHazardInstance em quatro eixos: tipo narrativo do catálogo, scope, triggerMode e executionMode.

Preserve:
- Hazard não vira Character.
- Hazard não vira NPC.
- Hazard não usa token NPC.
- Hazard continua com toolbar própria.
- Hazard continua podendo ser instância de cena.
- Hazard continua podendo ser participant type: 'hazard' no Encounter Mode.
- Jogadores não recebem notes nem hazards HIDDEN.
- HINTED continua mascarando nome como Perigo desconhecido.

Implemente incrementalmente:
1. Prisma enums e campos novos.
2. Migração de triggerOnTokenEnter para triggerMode.
3. Domain types backend/frontend.
4. Repositories/mappers.
5. Validation schemas.
6. Socket handlers.
7. Frontend types e UI mínima.
8. Painel simples para hazards scope SCENE.
9. Manter comportamento atual de trap pisável funcionando.
10. Não iniciar encounter automaticamente ao disparar hazard.

Não implemente ainda:
- dano automático;
- salvamento automático;
- Seek/Perception automático;
- área poligonal completa;
- trigger por interação/olhar/ataque;
- target hazard completo;
- reset automático.

Critérios de sucesso:
- Traps POINT + ON_TOKEN_ENTER + INSTANT funcionam como antes.
- Environmental SCENE + ALWAYS_ON + ONGOING pode existir sem posição.
- Haunt pode ser MANUAL + ONGOING ou ENCOUNTER_PARTICIPANT.
- Encounter continua suportando hazard como participante especial não criatura.
```
