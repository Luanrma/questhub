# Modulo: Spell Casting (Specs & Contracts — camada generica)

## 1. Responsabilidade
Contratos HTTP e de socket da fatia minima de conjuracao. Os tipos PF2e citados vivem em `packages/game-system-pathfinder-2e/src/server/spell-casting/` — ver `.ai/game_systems/pathfinder_2e/spell_casting/specs.md` para o detalhe mecanico.

## 2. Endpoints

### 2.1. Opcoes de conjuracao

```txt
GET /api/characters/:characterId/cast-options
```

Permissao: dono do personagem OU Mestre ativo da campanha do personagem.

Resposta (200):
```ts
type CastOptionsResponse = {
  characterId: string
  revision: number // revision atual do spellbook (o cliente envia de volta no cast)
  entries: Array<{
    entryId: string
    entryName: string
    category: 'PREPARED' | 'SPONTANEOUS' | 'INNATE' | 'FOCUS' | 'RITUAL' | 'ITEMS'
    focusPoints?: { points: number; max: number }
    spells: Array<{
      spellId: string
      name: string
      rank: number
      isCantrip: boolean
      // Perfil de conjuracao resolvido do catalogo pelo servidor (join proprio):
      time: string | null
      rangeFeet: number | null       // null = touch/ilimitado/nao-parseavel — ver rangeKind
      rangeKind: 'feet' | 'touch' | 'unlimited' | 'unsupported' | 'none'
      area: { type: string; valueFeet: number } | null
      // Perfil de alvo individual (magias sem area) resolvido de system.target.value:
      targetProfile:
        | { kind: 'none' }               // vazio/auto-alvo — sem seletor de alvo
        | { kind: 'count'; min: number; max: number } // "1 creature", "up to 5 creatures" etc.
        | { kind: 'unsupported'; raw: string } // texto composto/trait-based — sem seletor, nunca bloqueia
      // Estado do recurso:
      resource:
        | { kind: 'prepared'; slots: Array<{ rank: number; slotIndex: number; expended: boolean }> }
        | { kind: 'spontaneous'; byRank: Array<{ rank: number; max: number; used: number }> }
        | { kind: 'focus' }
        | { kind: 'innate'; usesPerDay: number | 'at-will'; used: number }
        | { kind: 'cantrip' } // nunca consome
        | { kind: 'unavailable'; reason: string } // ex.: magia nao encontrada no catalogo
    }>
  }>
}
```

Erros: `401`; `400` personagem invalido/sem sistema; `404` personagem nao encontrado ou sistema sem suporte.

### 2.2. Conjurar

```txt
POST /api/characters/:characterId/cast
```

Payload:
```ts
type CastRequest = {
  clientCastId: string // id unico por tentativa; max 80 chars
  revision: number
  entryId: string
  spellId: string
  source:
    | { kind: 'prepared'; rank: number; slotIndex: number }
    | { kind: 'spontaneous'; rank: number }
    | { kind: 'focus' }
    | { kind: 'innate' }
    | { kind: 'cantrip' }
  caster?: {
    sceneId: string
    casterTokenId: string
  }
  placement?: {
    sceneId: string
    casterTokenId: string
    shape: SceneAreaShape
  }
  targets?: string[] // ids de token na mesma cena de `caster`; max 20
}
```

Regras: valida acesso, procura `clientCastId` em `spellbook.data.pathfinder2e.recentCasts`, e se encontrar devolve o resultado gravado sem validar `revision` nem consumir novamente. Se nao encontrar, valida que `revision` bate com o spellbook atual; para magias com area resolvida no catalogo, valida `placement` (cena da campanha, token do personagem, forma compativel e alcance quando `rangeKind === 'feet'` — usando distancia euclidiana em grid quadrado ou distancia hexagonal em passos quando a cena e hex; em grid hexagonal, apenas burst/emanation/cylinder sao aceitos, cone/linha/quadrado/cubo retornam `400` explicando a limitacao); para magias **sem area** mas com `targetProfile.kind === 'count'` resolvido do catalogo, exige `targets` (via `caster`) com a contagem dentro de `[min, max]`, cada token existente na cena e dentro do alcance quando `rangeKind === 'feet'` (mesma distancia euclidiana/hexagonal por grid); quando `caster`/`placement` aponta para uma cena com encontro ativo, exige que o personagem seja o participante ativo e tenha acoes suficientes — tempo de conjuracao vem de `system.time.value` do catalogo, formato real auditado e o **digito puro** (`"1"`/`"2"`/`"3"`, a maioria das ~1716 magias do snapshot), nao a forma por extenso (`parsePathfinder2eCastActionCost`, `.ai/game_systems/pathfinder_2e/spell_casting/specs.md` secao 4); tempos variaveis/em minutos/dias (`"1 to 3"`, `"1 minute"`) ficam `unsupported` e nao bloqueiam nem consomem acoes; valida que a fonte existe e tem recurso disponivel; aplica o consumo (transformacao pura `applyPathfinder2eCast`), anexa o recibo idempotente e grava com `revision + 1` (updateMany com `revision` esperada; 0 linhas → `409`). Reutilizar o mesmo `clientCastId` com payload diferente (incluindo `targets` diferentes) retorna `409`.

Efeitos colaterais confirmados: depois do commit bem-sucedido, se a conjuracao tiver contexto de cena (`caster` ou `placement`), o servidor cria uma `ChatMessage` persistente na campanha e emite `chat:message:created` — o texto inclui os nomes dos alvos resolvidos (`token.name` ou nome do personagem) quando `targets` foi usado; se houver encontro ativo na cena, tambem anexa uma entrada `SYSTEM` ao log de batalha (mesmo texto) e emite o snapshot de encontro atualizado. Replay do mesmo `clientCastId` nao cria novo chat/log.

Resposta (200): `{ characterId, revision, spellName, consumed: string, entryId?: string, spellId?: string, castRank?: number }` (`consumed` e um rotulo legivel: "slot preparado R3", "1 ponto de foco", "nada (truque)" etc.). Os campos opcionais sao metadados do sistema especifico usados por fluxos posteriores como resolucao/heightening; em replay, a resposta e exatamente o recibo salvo para aquele `clientCastId`.

Erros: `401`; `400` payload/fonte invalida ou recurso esgotado (`{ error }` legivel); `404`; `409` revision divergente.

### 2.3. Descanso diario e refocus

```txt
POST /api/characters/:characterId/spellbook/rest     // restaura tudo
POST /api/characters/:characterId/spellbook/refocus  // +1 ponto de foco (total)
```

Payload: `{ revision: number }`. Mesmas permissoes e concorrencia do cast. Resposta: `{ characterId, revision }`.

Semantica do refocus (regras 7.2/7.3 do doc normativo `.ai/game_systems/pathfinder_2e/spells/pathfinder-2e-regras-de-magias-questhub.md`): a atividade Refocar recupera **exatamente 1 Ponto de Foco por acionamento, no total do spellbook** — nao 1 por entrada. Como o modelo atual guarda `focusPool` por entrada (divergencia estrutural registrada no plano canonico, secao 22), o ponto e creditado na primeira entrada com `points < max`, na ordem das entradas. Corrigido em 2026-07-13: antes desta data o refocus creditava +1 em cada entrada com pool, permitindo recuperar 2+ pontos numa unica atividade de 10 minutos.

## 3. Eventos de Socket (preview efemero de area)

Cliente → servidor:
```ts
'vtt:spell-area:update' { campaignId: string; area: VttSpellAreaOverlay | null }
'vtt:spell-area:request' { campaignId: string }
```

Servidor → sala da campanha:
```ts
'vtt:spell-area:changed' { campaignId: string; area: VttSpellAreaOverlay | null }
```

```ts
type VttSpellAreaOverlay = {
  shape: SceneAreaShape        // packages/game-system-core/src/shared/scene-geometry
  color: string                // hex
  label: string                // "Fireball — Aldric"
  casterTokenId: string | null
  phase: 'PREVIEW' | 'CAST'    // CAST = flash pos-confirmacao
}
```

Regras: mesmo gate dos demais eventos VTT (socket na campanha, sessao pausada so Mestre). Estado em memoria por campanha (ultimo overlay) para snapshot; `null` limpa. Cada cliente recalcula celulas/alvos localmente via `computeCoveredCells`/`findAffectedTokens` — o payload nunca carrega lista de celulas.

## 4. Criterios de Aceitacao
* Conjurar uma magia preparada marca exatamente o slot escolhido como gasto; o mesmo POST repetido com o mesmo `clientCastId` retorna o mesmo sucesso salvo sem gastar outro slot.
* Repetir `clientCastId` com payload diferente retorna `409`.
* Magia com area conhecida sem `placement`, com token que nao pertence ao personagem, com forma incompatível ou fora de alcance retorna `400` sem consumir recurso.
* Magia de cone/linha/quadrado/cubo numa cena com grid hexagonal retorna `400` (forma nao suportada em hex); burst/emanation/cylinder funcionam normalmente na mesma cena hex.
* Em encontro ativo, magia de 1/2/3 acoes fora do turno do personagem ou sem `actionsRemaining` suficiente retorna `400` sem consumir recurso.
* Conjuracao confirmada com contexto de cena cria exatamente um anuncio persistente no chat e uma entrada de log de batalha quando houver encontro ativo; retry idempotente nao duplica esses registros.
* Conjurar espontanea incrementa `used` do rank; com `used === max` o cast retorna `400` sem escrita.
* Conjurar espontanea com slot de rank **menor** que o rank conhecido da magia no repertorio retorna `400` sem escrita (regra 5.1/5.3 do doc normativo: o slot deve ser do rank conhecido ou maior; gastar slot maior sem elevar continua permitido). `cast-options` so oferece os ranks validos em `byRank`. Corrigido em 2026-07-13: antes desta data qualquer rank configurado era aceito.
* Conjurar de foco exige `points >= 1` e decrementa 1; refocus incrementa exatamente 1 ponto no total do spellbook (secao 2.3), ate `max`.
* Inata `at-will` e truque nunca alteram o spellbook.
* Descanso restaura todos os recursos.
* Enquanto o conjurador move o cursor, todos os clientes da campanha veem a mesma area (celulas pintadas + alvos destacados + rotulo).
* Jogador sem posse do personagem (e nao-Mestre) recebe `404` em cast-options/cast.
* Magia com `targetProfile.kind === 'count'` e `min === max === 1` conjurada sem `targets` (ou com 2) retorna `400` sem consumir recurso.
* Magia com `targetProfile.kind === 'count'` conjurada com um alvo fora do alcance retorna `400` sem consumir recurso.
* Conjuracao com alvos gera um anuncio de chat citando os nomes dos alvos selecionados.
