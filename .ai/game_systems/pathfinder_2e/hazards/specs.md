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

## 8. Futuro: Encontro com Hazard
Hazards devem poder iniciar um encontro manual antes de qualquer automacao profunda.

Contrato conceitual:

```ts
type HazardEncounterSeed = {
  campaignId: string
  sceneId?: string
  hazardEntryId: string
  hazardInstanceId?: string
  mode: 'manual' | 'initiative'
}
```

Regras:

* `manual`: cria painel de gerenciamento para resolver disable, efeitos e notas sem iniciativa.
* `initiative`: cria encontro com participante `hazard`, indicado para Hazards complexos.
* o encontro deve manter referencia ao catalogo, mas permitir estado local como `triggered`, `disabled` e notas.
* jogadores nao devem receber dados ocultos do Hazard ate o Mestre revelar.

Participante especial esperado:

```ts
type HazardEncounterParticipant = {
  id: string
  type: 'hazard'
  hazardEntryId: string
  hazardInstanceId?: string
  name: string
  initiative?: number
  visibility: 'gmOnly' | 'revealed'
  state: 'armed' | 'triggered' | 'disabled' | 'expired'
}
```

## 9. Futuro: Instancia em Cena
Quando Hazards puderem ser adicionados a uma cena, criar contrato proprio. Nao reaproveitar semanticamente token NPC.

Contrato conceitual esperado:

```ts
type SceneHazardInstance = {
  id: string
  sceneId: string
  system: 'PATHFINDER_2E'
  catalogEntryId?: string
  name: string
  position?: { x: number; y: number }
  area?: unknown
  visibility: 'hidden' | 'hinted' | 'revealed' | 'disabled'
  state: 'armed' | 'triggered' | 'disabled' | 'expired'
  currentHitPoints?: number
  notes?: string
}
```

Esse contrato pertence ao limite entre `campaign_scene`, `vtt` e `game_systems`, e deve ser especificado antes de qualquer implementacao.

## 10. Roadmap de Entrega
Fluxo recomendado:

1. **Toolbar de Hazards:** preparar e acessar Hazards rapidamente.
2. **Encontro Manual:** iniciar encontro a partir de Hazard, com ficha, estado e notas operacionais.
3. **Instancia em Cena:** posicionar ou vincular Hazard a area/objeto, com visibilidade e estado.
4. **Participante de Encontro:** permitir Hazard complexo em iniciativa/rotina como participante nao-criatura.
5. **Automacao Opcional:** gatilhos, prompts de salvamento/dano, rotinas automatizadas e integracoes com area/mapa.

As etapas 1 a 4 devem ser implementaveis com controle manual pelo Mestre. A etapa 5 so deve ser feita depois que os contratos de cena e encontro estiverem estaveis.

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
