# Submodulo: Pathfinder 2e Hazards (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato especifico de Hazards PF2e, as regras de apresentacao no Bestiario e as diretrizes para futuras melhorias como criacao assistida e instancia em cena.

## 2. Contrato Interno PF2e
O core deve continuar agnostico. O package PF2e pode manter estrutura mecanica propria em `systemData`.

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

## 3. Apresentacao Neutra
Hazards devem ser convertidos para `GameSystemBestiaryEntry`:

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

Secoes recomendadas para `display.sheet`:

* `defenses`: CA, dureza, PV, stealth, salvamentos;
* `operations`: descricao, disable, rotina e reset;
* `actions`: reacoes, acoes, free actions e passivas do Hazard;
* `design`: apenas para Hazards customizados, com notas de criacao e intencao do Mestre.

## 4. Regras de Design para Criacao
Ao criar ou validar um Hazard customizado, o assistente deve orientar o Mestre por estas decisoes:

* **Conceito:** objetivo, pista visual, papel na cena e relacao com a historia.
* **Tipo:** trap, environmental ou haunt.
* **Nivel:** preferencialmente ate nivel do grupo + 3.
* **Complexidade:** simple para efeito unico; complex para rotina repetida.
* **Triangulo de Poder:** distribuir dificuldade entre deteccao/Seek, desativacao/Disable e DC/efeito principal.
* **Pericias alternativas:** permitir opcoes ficcionalmente coerentes, como Lore, Athletics, Survival, Arcana, Religion ou Occultism.
* **Dano e defesas:** usar referencias oficiais de nivel; Hazards complexos devem causar dano menor que Hazards simples equivalentes.
* **Formato:** ficha final deve seguir a ordem e clareza dos livros PF2e.

Fluxo guiado esperado para criacao assistida:

```ts
type Pathfinder2eHazardCreationStep =
  | 'concept'
  | 'type'
  | 'level'
  | 'complexity'
  | 'powerTriangle'
  | 'alternateSkills'
  | 'tableReferences'
  | 'statBlock'
```

```ts
type Pathfinder2eHazardDesignDraft = {
  concept: {
    narrativePurpose: string
    protectedThing?: string
    sceneRole?: string
    initialClue?: string
  }
  type: {
    hazardType: Pathfinder2eHazardType
    trapSubtype?: 'mechanical' | 'magical'
  }
  level: {
    hazardLevel: number
    partyLevel?: number
    riskWarning?: 'none' | 'abovePartyPlusThree'
  }
  complexity: Pathfinder2eHazardComplexity
  powerTriangle: {
    seekDifficulty: 'low' | 'moderate' | 'high' | 'extreme'
    disableDifficulty: 'low' | 'moderate' | 'high' | 'extreme'
    effectDifficulty: 'low' | 'moderate' | 'high' | 'extreme'
  }
  alternateSkills: Array<{
    skill: string
    fiction: string
    dcAdjustment?: 'easier' | 'standard' | 'harder'
  }>
  tableReferences: {
    dcSource?: string
    damageSource?: string
    defenseSource?: string
    simpleDamageAppliedToComplexRoutine?: boolean
  }
  statBlockNotes: {
    trigger?: string
    disable?: string
    routine?: string
    reset?: string
    description?: string
  }
}
```

Validacoes esperadas:

* `riskWarning` deve ser `abovePartyPlusThree` quando `hazardLevel > partyLevel + 3`.
* `simpleDamageAppliedToComplexRoutine` deve produzir alerta bloqueante ou confirmacao explicita do Mestre.
* `trapSubtype` so deve ser usado quando `hazardType = 'trap'`.
* `routine` deve existir para Hazards complexos customizados.
* Hazards simples nao devem exigir participante de iniciativa por padrao.
* Haunts devem sugerir Religion, Occultism, dano de vitalidade ou resolucao narrativa quando coerente.
* Environmental hazards devem sugerir navegacao, sobrevivencia, mitigacao ou fuga em vez de ataque convencional como primeira resposta.

## 5. Triangulo de Poder
O editor futuro deve evitar que todos os eixos sejam extremos ao mesmo tempo.

Eixos:

* `seekDifficulty`: dificuldade de perceber ou investigar o Hazard;
* `disableDifficulty`: dificuldade de neutralizar, contornar ou exorcizar;
* `effectDifficulty`: DC, ataque, dano ou severidade do efeito.

Diretriz:

* se Seek for extremo, Disable ou efeito deve ser moderado/baixo;
* se efeito for extremo, pistas e contra-jogo devem ser claros;
* se Disable for extremo, deve haver rota alternativa de mitigacao, fuga ou custo narrativo;
* Hazards narrativos podem ter baixo dano e alta importancia de pista.
* uma distribuicao recomendada para Hazards dinamicos e escolher um eixo extremo, um alto e um baixo/moderado.
* todos os eixos extremos ao mesmo tempo devem ser tratados como perigo excepcional e exigir confirmacao explicita no editor.

## 6. Contrato HTTP Atual
Hazards sao expostos pelo endpoint existente:

```txt
GET /api/campaigns/:campaignId/bestiary?category=hazard
GET /api/campaigns/:campaignId/bestiary/:entryId
```

Regras:

* apenas Mestre ativo pode listar ou abrir detalhe;
* `category=hazard` retorna apenas Hazards;
* `category=all` pode misturar NPCs e Hazards;
* detalhe retorna a entrada localizada por id;
* idioma segue o contrato geral do Bestiario.

## 7. Toolbar de Hazards
A toolbar de Hazards deve ser separada da toolbar de tokens preparados.

Contrato de configuracao do Mestre:

```ts
type PreparedHazardToolbarSettings = {
  preparedHazardEntryIds: string[]
}
```

Endpoint de candidatos da toolbar:

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

Regras:

* somente Mestre pode adicionar/remover Hazards preparados;
* a toolbar deve exibir nome, nivel, raridade, complexidade e atalhos para ficha/iniciar encontro;
* a toolbar nao deve criar token NPC;
* a toolbar pode iniciar um fluxo de instancia em cena quando essa capacidade existir;
* dados persistidos em configuracoes de usuario/campanha devem referenciar ids de catalogo, nao copiar o `systemData` completo.

## 8. Encontro com Hazard (Implementado)
Hazards iniciam encontro em dois modos, ambos entregues.

* `manual`: painel efemero (`HazardEncounterPanel`, Mestre-only) com secoes da ficha e notas, sem iniciativa. Acessivel apenas pelo card da toolbar; a ficha de Hazard (`BestiaryCreatureSheetModal`) so exibe consulta, sem atalho de encontro.
* `initiative`: instancia de Hazard ja posicionada na cena (`.ai/game_systems/pathfinder_2e/hazards/specs.md` secao 9) pode ser enviada ao Encounter Mode via menu de contexto do `HazardMarker` ("Enviar p/ Encontro"), virando um participante `type: 'hazard'` no `VttEncounterState.participants`.

Participante especial implementado (`apps/api/src/modules/campaign-presence/contracts.ts` e `apps/web/src/vtt/table/domain/types.ts`):

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
  executionMode: 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'
}
```

Regras implementadas:
* `VttEncounterParticipant` e uma uniao discriminada entre esse tipo e o participante de criatura (`type: 'creature'`); `participantId` e a chave generica usada por ordenacao, avanco de turno e `vtt:encounter:update-initiative`.
* O encontro mantem referencia ao catalogo (`hazardEntryId`/`hazardInstanceId`), mas `visibility`, `state` e `executionMode` do participante sao copiados da instancia no momento em que o participante e criado e viram estado local, independente de edicoes feitas na instancia de cena depois disso.
* Jogadores nunca recebem o nome real de um participante de Hazard com `visibility: 'HIDDEN'`; o servidor substitui por um rotulo generico (`presentEncounterForRole`, mesmo texto usado para instancias `HINTED` em cena) antes de emitir `vtt:encounter:changed`.
* Nao ha checagem de `complexity` (simple/complex) do catalogo PF2e para permitir o envio ao encontro; isso e responsabilidade de uma camada de produto/PF2e futura, nao do modulo generico `encounter`.
* O gatilho manual dentro do encontro (`vtt:encounter:trigger-hazard`) considera `executionMode` do participante: `INSTANT` muda `state` para `TRIGGERED`; `ONGOING`/`ENCOUNTER_PARTICIPANT` mudam para `ACTIVE`. O botao "Disparar"/"Ativar" no `EncounterTrackerPanel` desaparece quando o participante ja esta `TRIGGERED` ou `ACTIVE`.
* A mensagem publicada no chat varia com `executionMode` (`INSTANT`: "foi disparado!"; `ONGOING`: "esta ativo!"; `ENCOUNTER_PARTICIPANT`: "entrou em atividade!"), tanto no gatilho manual quanto no automatico por movimento (secao 12).
* O botao "Enviar p/ Encontro" (menu de contexto do `HazardMarker` e `SceneHazardsPanel`) ganha destaque visual quando a instancia tem `executionMode: 'ENCOUNTER_PARTICIPANT'`, mas continua disponivel manualmente para os outros modos — nao ha bloqueio por `executionMode` no modulo generico.

## 9. Instancia em Cena (Implementado)
Hazards podem ser adicionados a uma cena como instancia propria, persistida em `CampaignSceneHazard` (modulo `apps/api/src/modules/campaign_scene/hazard-instances/`). Nao reaproveita semanticamente token NPC.

Contrato implementado (refatorado em 4 eixos — ver `.ai/game_systems/pathfinder_2e/hazards/questhub-hazards-refactor.md` e `refactor-todo.md` Fase A):

```ts
type SceneHazardScope = 'POINT' | 'AREA' | 'SCENE' | 'TARGET'
type SceneHazardTriggerMode = 'MANUAL' | 'ON_TOKEN_ENTER' | 'ALWAYS_ON'
type SceneHazardExecutionMode = 'INSTANT' | 'ONGOING' | 'ENCOUNTER_PARTICIPANT'
type SceneHazardState = 'ARMED' | 'TRIGGERED' | 'ACTIVE' | 'DISABLED' | 'EXPIRED'

type SceneHazardInstance = {
  id: string
  sceneId: string
  hazardEntryId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  visibility: 'HIDDEN' | 'HINTED' | 'REVEALED'
  state: SceneHazardState
  triggerMode: SceneHazardTriggerMode
  executionMode: SceneHazardExecutionMode
  notes: string | null
}

type PublicSceneHazardInstance = {
  id: string
  sceneId: string
  name: string
  scope: SceneHazardScope
  position: { x: number; y: number } | null
  visibility: 'HINTED' | 'REVEALED'
  state: SceneHazardState
}
```

Regras:
* `notes` e sempre exclusivo do Mestre; nunca e enviado a Jogadores.
* `triggerMode` e `executionMode` sao sempre exclusivos do Mestre; nunca sao enviados a Jogadores (`PublicSceneHazardInstance` nao os inclui).
* Instancias com `visibility: 'HIDDEN'` nunca sao enviadas a Jogadores.
* Instancias com `visibility: 'HINTED'` sao enviadas a Jogadores com `name` substituido por um rotulo generico ("Perigo desconhecido"), preservando posicao e estado.
* `position` e `null` apenas para `scope: 'SCENE'`; `scope: 'POINT'` e `'AREA'` exigem position no `place`. O Mestre posiciona a instancia arrastando um Hazard preparado da toolbar para a mesa; a posicao inicial define `position`.
* Criacao pela UI hoje: `scope: 'POINT'` (arrastar da toolbar para o mapa) ou `scope: 'SCENE'` (botao de nuvem "Adicionar como efeito da cena", secao 13). `scope: 'AREA'` nao tem fluxo de criacao proprio, mas pode ser obtido convertendo um `POINT` ja posicionado pelo botao "Escopo" no menu de contexto do `HazardMarker` — funciona identico a `POINT` (um unico ponto) ate o editor visual de raio/poligono existir (Fase D do `refactor-todo.md`). `scope: 'TARGET'` existe no contrato mas nao tem fluxo de criacao nem uso (Fase D).
* `triggerMode: 'ON_TOKEN_ENTER'` e o unico gatilho automatico implementado hoje (dispara ao token cruzar a celula, ver secao 12), disponivel para `scope: 'POINT'` e `'AREA'`. `ALWAYS_ON` e usado para `scope: 'SCENE'` (secao 13).
* `executionMode` decide o resultado do disparo (`TRIGGERED` para `INSTANT`, `ACTIVE` para `ONGOING`/`ENCOUNTER_PARTICIPANT`) tanto no gatilho automatico quanto no manual dentro do Encounter Mode (secao 8).
* Area real (poligono/raio) e PV atual (`currentHitPoints`) ainda nao existem no contrato; ficam para iteracao futura (Fase D).

Eventos Socket.IO (namespace `vtt:hazard:*`, registrados em `campaign-presence/socket.ts`):

```txt
vtt:hazard:place      -- Mestre cria instancia a partir de um hazardEntryId + sceneId + position
vtt:hazard:update     -- Mestre atualiza position/visibility/state/notes
vtt:hazard:remove     -- Mestre remove a instancia
vtt:hazards:request   -- Socket solicita snapshot das instancias da cena visivel
vtt:hazard:changed    -- fato: instancia criada/atualizada, filtrada por papel do socket
vtt:hazard:removed    -- fato: instancia removida (ou deixou de ser visivel para o papel)
vtt:hazards:snapshot  -- fato: lista completa das instancias da cena visivel, filtrada por papel
```

Regras de permissao:
* `place`, `update` e `remove` exigem o Mestre em controle da campanha (mesmo criterio de `vtt:token:place`, funciona tambem em preparo offline).
* `request`/snapshot funcionam online (socket na room da campanha) ou offline para o Mestre ativo, como `vtt:scene:request`.
* O snapshot da cena visivel (`emitVisibleTableSnapshot`) ja inclui as instancias de Hazard da cena, entao trocar de cena atualiza os marcadores automaticamente.

Limitacoes conhecidas do MVP:
* Area de efeito e PV atual nao sao modelados.

## 10. Roadmap de Entrega
Fluxo recomendado:

1. **Toolbar de Hazards:** preparar e acessar Hazards rapidamente.
2. **Encontro Manual:** iniciar encontro a partir de Hazard, com ficha, estado e notas operacionais.
3. **Instancia em Cena:** posicionar ou vincular Hazard a area/objeto, com visibilidade e estado.
4. **Participante de Encontro:** permitir Hazard complexo em iniciativa/rotina como participante nao-criatura.
5. **Automacao Opcional (iniciada):** gatilho manual de disparo (`vtt:encounter:trigger-hazard`), lembrete de rotina no turno do Hazard e gatilho automatico por movimento de token (secao 12), todos implementados. Prompts de salvamento/dano, rotina automatizada sem intervencao do Mestre e integracoes com area/mapa (raio, forma de efeito) continuam pendentes.

As etapas 1 a 4 devem ser implementaveis com controle manual pelo Mestre. A etapa 5 so deve ser feita depois que os contratos de cena e encontro estiverem estaveis.

Gatilho manual implementado (etapa 5): o Mestre aciona "Disparar" em um participante `type: 'hazard'` ativo no Encounter Mode; o servidor muda `state` para `TRIGGERED`, forca `visibility: 'REVEALED'` (o disparo deixa de ser segredo) e publica uma mensagem no chat da campanha atribuida ao personagem do Mestre (reaproveita `ChatMessage`, sem criar conceito de mensagem de sistema). Nao ha rolagem de dados nem calculo de dano automatico.

Lembrete de rotina implementado (etapa 5): quando o participante ativo do turno e um Hazard, o painel lateral do Encounter Mode mostra ao Mestre a secao `operations` (disable/rotina/reset/descricao) da ficha de catalogo, sem executar nenhuma acao sozinho.

Gatilho automatico por movimento de token implementado (etapa 5): ver secao 12 para o contrato e fluxo completo.

## 11. Criterios de Aceitacao
* Hazards aparecem no Bestiario via filtro proprio.
* Hazards nao aparecem como criaturas nem como tokens NPC preparados.
* Hazards podem ser preparados em toolbar propria sem poluir `preparedBestiaryCreatureIds`.
* Ficha de Hazard exibe defesas, disable, rotina/reset e acoes quando disponiveis.
* Encontro iniciado por Hazard consegue operar em modo manual antes de qualquer automacao.
* Hazard complexo pode ser modelado como participante especial de encontro sem virar NPC.
* O core permanece sem campos mecanicos de PF2e.
* Criacao futura deve orientar nivel, complexidade, triangulo de poder e pericias alternativas.
* Instancia futura em cena deve ter contrato proprio e nao poluir o catalogo.

## 12. Gatilho por Movimento de Token (Implementado)
Objetivo: permitir que o Mestre marque uma instancia de Hazard ja posicionada na cena (secao 9) como armadilha automatica — quando um token passa por cima da celula onde ela esta, o Hazard dispara sozinho, sem o Mestre precisar clicar em nada.

Decisoes de design ja fechadas:
* O disparo automatico **nao** inicia nem mexe no Encounter Mode. Ele muda `state` da instancia para `TRIGGERED` (quando `executionMode: 'INSTANT'`) ou `ACTIVE` (quando `executionMode: 'ONGOING'` ou `'ENCOUNTER_PARTICIPANT'`), forca `visibility: 'REVEALED'` e publica aviso no chat da campanha. Levar a instancia para a iniciativa continua sendo decisao manual do Mestre (arrastar -> "Enviar p/ Encontro").
* A deteccao considera o caminho completo do arraste do token (`movementPath`), nao so a posicao final onde ele parou — um token que passa por cima da celula da armadilha em qualquer ponto do trajeto dispara, mesmo que nao pare ali.
* Qualquer token pode disparar a armadilha, seja de Jogador ou NPC/monstro movido pelo Mestre.
* O gatilho automatico so considera instancias com `state: 'ARMED'`, `triggerMode: 'ON_TOKEN_ENTER'` e `scope` em `POINT`/`AREA`; depois de disparado nao volta a disparar ate o Mestre resetar o estado manualmente pelo menu de contexto do marcador.

Contrato: campo `triggerMode` de `SceneHazardInstance` (secao 9), generico, vive no modulo `campaign_scene/hazard-instances`, nao em `game_systems`. Valores `MANUAL | ON_TOKEN_ENTER | ALWAYS_ON` (default `MANUAL`); o toggle "Disparar ao pisar" no menu de contexto do `HazardMarker` alterna entre `MANUAL` e `ON_TOKEN_ENTER`. `ALWAYS_ON` existe no contrato mas ainda nao tem efeito ate `scope: 'SCENE'` ganhar UI (Fase B do `refactor-todo.md`).

Area de deteccao: como area/forma de efeito ainda nao existe (limitacao ja registrada na secao 9), a deteccao usa a propria celula do grid onde a instancia esta posicionada, sem raio configuravel nesta primeira versao. Area customizavel fica para uma iteracao futura, quando o conceito de `area` for modelado.

Fluxo implementado:
1. Mestre liga "Disparar ao pisar" no menu de contexto do `HazardMarker` (item ao lado de Visibilidade/Estado/Notas), que muda `triggerMode` para `ON_TOKEN_ENTER`.
2. Quando um token se move (`vtt:token:move`, com `movementPath` do arraste ou posicao unica), o servidor, apos persistir a nova posicao, calcula quais celulas do grid o caminho cruzou e verifica se alguma instancia de Hazard da mesma cena tem `triggerMode: 'ON_TOKEN_ENTER'`, `state: 'ARMED'`, `scope` em `POINT`/`AREA` e esta posicionada em uma dessas celulas.
3. Se encontrar, dispara automaticamente (`TRIGGERED` ou `ACTIVE` conforme `executionMode`), independente de quem moveu o token (Jogador movendo o proprio token tambem pode disparar).
4. Perception/Seek DC e qualquer regra de deteccao previa continuam fora de escopo do modulo generico — isso e regra mecanica de PF2e. Se o Hazard estava `HIDDEN` para o Jogador, ele so percebe o disparo pelo efeito (mensagem de chat, mudanca do marcador), sem bypass de furtividade nem rolagem automatica.

Fora de escopo desta primeira versao:
* Area/forma de efeito (raio, poligono) — depende da limitacao ja registrada na secao 9.
* Rolagem automatica de Perception/Seek antes do disparo.
* Multiplos tokens cruzando a mesma celula na mesma atualizacao — resolvido best-effort (dispara uma vez).
* Reset automatico de `state` apos um tempo — reset continua manual.

## 13. Hazard de Cena Inteira (`scope: 'SCENE'`, Implementado)
Objetivo: representar Hazards que nao fazem sentido como uma marca fisica num ponto do mapa (nevasca, gas toxico, mansao assombrada) — o Mestre adiciona o Hazard como um efeito ativo da cena, sem posicionar nada no grid.

Como criar: no card do Hazard preparado na toolbar, o botao de nuvem ("Adicionar como efeito da cena") cria a instancia direto, sem exigir arrastar para o mapa. Contrato enviado ao `vtt:hazard:place`: `scope: 'SCENE'`, sem `position`, `triggerMode: 'ALWAYS_ON'`, `executionMode: 'ONGOING'`. O servidor (`placeSceneHazard`) inicializa `state: 'ACTIVE'` automaticamente sempre que `triggerMode === 'ALWAYS_ON'` (o efeito ja nasce ativo, sem precisar de um "disparo").

Onde aparece: hazards `scope: 'SCENE'` nunca ganham marcador no grid (`HazardMarker` so renderiza para instancias com `position`). Em vez disso, ficam numa aba propria do painel lateral direito ("Hazards da Cena", Mestre-only, `SceneHazardsPanel.tsx`), listados com nome, visibilidade, estado e acoes (abrir ficha, ciclar visibilidade, ciclar estado, editar notas, remover, enviar p/ Encontro).

Visibilidade para Jogadores: segue as mesmas regras de `HIDDEN`/`HINTED`/`REVEALED` da secao 9, mas o rotulo generico usado em `HINTED` e diferente do de hazards posicionados — `"Ambiente perigoso"` (`hiddenSceneHazardName`) em vez de `"Perigo desconhecido"` (`hiddenHazardName`), pois nao faz sentido dizer que ha um "perigo" pontual quando o efeito e a cena inteira.

Fora de escopo desta primeira versao:
* Criacao continua sendo so `POINT` (drag) ou `SCENE` (botao de nuvem); `AREA` so e alcancavel convertendo um `POINT` ja criado (menu de contexto, secao 9). `TARGET` existe no contrato mas nao tem fluxo de criacao nem uso (fica para Fase D do `refactor-todo.md`).
* `executionMode` de um hazard `SCENE` ainda nao influencia o Encounter Mode alem de permitir "Enviar p/ Encontro" manualmente (Fase C do `refactor-todo.md`).
