# QuestHub — Escopo: Movimento Limitado durante Encontros + Padrão de MOV na Ficha PF2e

## 1. Objetivo

Durante um encontro ativo, tokens não devem se mover livremente pelo cenário. O movimento deve ser limitado pelo valor de Movimento da criatura/personagem, considerando a distância percorrida no grid da cena.

Também deve ser padronizada a apresentação do campo **MOV** nas fichas de Player e NPC, usando o mesmo padrão visual/semântico do bloco lateral dos NPCs, sem perder os campos específicos do Player.

Este escopo deve ser implementado de forma incremental, manual e agnóstica o suficiente para o VTT, mas com suporte inicial para Pathfinder 2e.

---

## 2. Contexto atual

O projeto já possui:

- Encounter Mode com participantes do tipo `creature` e `hazard`.
- Hazards separados de criaturas/NPCs.
- Estado de combate/vida sendo evoluído como estado de token/encontro.
- Fichas PF2e para NPCs e Players com campos de vida, defesas e movimento.
- Tokens posicionados em cena por coordenadas.
- Grid visual no VTT.

A nova feature deve respeitar esse desenho:

```txt
Hazard não é NPC.
NPC e Player são criaturas movimentáveis.
Movimento limitado se aplica apenas a participantes de criatura durante encontro ativo.
Hazards não recebem limite de movimento.
```

---

## 3. Problema

Hoje, mesmo durante encontro ativo, o token pode ser arrastado livremente pela cena.

Isso quebra a lógica de combate tático:

- Jogador pode mover além do deslocamento do personagem.
- NPC pode ser reposicionado sem limite de movimento.
- O VTT não diferencia exploração livre de combate em turnos.
- O valor de Movimento exibido na ficha não controla nada no mapa.

---

## 4. Decisão de produto

Quando o Encounter Mode estiver ativo:

1. Apenas o token do participante ativo deve poder se mover livremente dentro do seu limite de movimento.
2. Tokens que não estão no turno ativo não devem poder ser movidos por jogadores.
3. O Mestre pode mover qualquer token, mas deve receber indicação de distância e aviso se exceder o movimento.
4. A primeira versão deve bloquear movimento excedente para jogadores.
5. Para o Mestre, a decisão pode ser configurável:
   - modo recomendado: permitir override com aviso;
   - modo estrito opcional: bloquear também para o Mestre.

---

## 5. Regra de movimento

### 5.1. Unidade de regra

PF2e usa pés (`ft`). O QuestHub trabalha com metros.

Conversão recomendada:

```txt
5 ft = 1,5 m
25 ft = 7,5 m
30 ft = 9 m
```

Fórmula:

```ts
meters = feet * 0.3048
```

Para exibição em grid tático, usar arredondamento compatível com células:

```txt
25 ft = 7,62 m real
25 ft = 7,5 m tático, se a célula padrão for 1,5 m
```

Decisão recomendada para PF2e:

```txt
1 célula = 1,5 m = 5 ft
25 ft = 5 células = 7,5 m
30 ft = 6 células = 9 m
```

### 5.2. Unidade da cena

A cena deve ter uma configuração de escala:

```ts
type SceneGridScale = {
  unit: 'METER'
  metersPerCell: number
}
```

Valor padrão recomendado:

```txt
metersPerCell = 1.5
```

Isso mantém compatibilidade com PF2e/D&D sem forçar o usuário a pensar em pés.

---

## 6. Fonte do Movimento

### 6.1. NPCs

Para NPCs, o limite deve vir do campo **Movimento** da ficha do bestiário/NPC.

Exemplo visual atual:

```txt
MOVIMENTO
Terrestre 25 FT
```

Esse valor deve ser normalizado para:

```ts
type MovementSpeed = {
  kind: 'land' | 'fly' | 'swim' | 'climb' | 'burrow' | 'other'
  label: string
  feet: number | null
  meters: number | null
  cells: number | null
  raw: string
}
```

Exemplo:

```ts
{
  kind: 'land',
  label: 'Terrestre',
  feet: 25,
  meters: 7.5,
  cells: 5,
  raw: 'Terrestre 25 ft'
}
```

### 6.2. Players

Para Players, o campo atual **MOV.** deve ser adaptado para o mesmo padrão semântico do NPC:

```txt
MOVIMENTO
Terrestre 25 FT
```

Ou, usando metros na UI do QuestHub:

```txt
MOVIMENTO
Terrestre 7,5 m
```

A ficha do Player deve manter os campos:

- Nível;
- EXP;
- Meta;
- Vida Máxima;
- Vida Atual;
- Vida Temporária;
- Ferido;
- Morrendo;
- Condenado;
- CA;
- Bônus;
- Fortitude;
- Reflexo;
- Vontade;
- Iniciativa;
- Percepção;
- Movimento.

Mas o bloco visual deve ser padronizado para se aproximar do sidebar fixo da ficha de NPC.

---

## 7. Modelo de domínio recomendado

### 7.1. Movimento normalizado

Criar contrato agnóstico:

```ts
export type VttMovementSpeed = {
  kind: 'land' | 'fly' | 'swim' | 'climb' | 'burrow' | 'other'
  label: string
  feet: number | null
  meters: number | null
  cells: number | null
  raw: string
}
```

### 7.2. Movimento no token/participante

Adicionar no token ou participante de encontro:

```ts
export type VttEncounterCreatureParticipant = {
  type: 'creature'
  participantId: string
  tokenId: string
  characterId: string | null
  bestiaryCreatureId?: string | null
  name: string
  avatarUrl: string | null
  initiative: number | null
  movement: {
    speeds: VttMovementSpeed[]
    activeSpeedKind: 'land' | 'fly' | 'swim' | 'climb' | 'burrow' | 'other'
    maxMetersThisTurn: number | null
    usedMetersThisTurn: number
    remainingMetersThisTurn: number | null
  }
}
```

### 7.3. Estado de movimento por turno

Criar estado de movimento no Encounter, não no Character:

```ts
type EncounterTurnMovementState = {
  encounterId: string
  participantId: string
  round: number
  turnIndex: number
  usedMeters: number
  path: Array<{ x: number; y: number }>
}
```

Persistência pode ser opcional no MVP, mas o cálculo deve existir no backend para impedir bypass por client.

---

## 8. Regras durante Encounter Mode

### 8.1. Sem encontro ativo

Movimento livre continua como hoje.

```txt
Exploração livre = sem limite de movimento.
```

### 8.2. Encontro ativo

Se existe encontro ativo na campanha/cena:

```txt
Somente criatura participante deve ter limite de movimento.
Hazard não move.
Token fora do encontro não deve ser movido por jogador.
Mestre pode mover token fora do encontro com aviso/override.
```

### 8.3. Turno ativo

Jogador só pode mover:

```txt
- token próprio;
- que esteja no encontro;
- que seja o participante ativo;
- até o limite restante de movimento do turno.
```

Mestre pode mover:

```txt
- qualquer token;
- preferencialmente com aviso se exceder;
- opcionalmente bloqueado por configuração estrita.
```

---

## 9. Cálculo de distância

### 9.1. Grid quadrado

MVP recomendado:

```txt
cada célula ortogonal = 1 célula
cada célula diagonal = 1 célula
```

Motivo: simplicidade e previsibilidade visual.

Alternativa futura para PF2e:

```txt
diagonal alternada: 5-10-5-10 ft
```

Não implementar diagonal alternada no MVP, salvo decisão explícita.

### 9.2. Grid hexagonal

Cada hex atravessado conta como 1 célula.

### 9.3. Movimento livre/pixel

Mesmo que o token seja arrastado por coordenadas livres, o backend deve converter o caminho para células cruzadas, semelhante ao que já ocorre com hazard trigger por movimento.

Fluxo:

```txt
movementPath em pixels/coordenadas
→ converter pontos para células
→ deduplicar células atravessadas
→ contar células percorridas
→ células * metersPerCell = distância em metros
```

---

## 10. Backend — validação de movimento

### 10.1. Socket atual

O evento atual de movimento de token deve continuar existindo:

```txt
vtt:token:move
```

Mas, antes de persistir o movimento, deve chamar um serviço:

```ts
validateEncounterMovement(input)
```

### 10.2. Serviço novo

Criar módulo:

```txt
apps/api/src/modules/encounter_movement/
  domain/
    movement-distance.ts
    movement-speed.ts
    movement-validation.ts
    types.ts
  services/
    encounter-movement-service.ts
```

### 10.3. Resultado da validação

```ts
type EncounterMovementValidationResult =
  | {
      allowed: true
      distanceMeters: number
      usedMetersAfterMove: number
      remainingMetersAfterMove: number | null
      warning?: string
    }
  | {
      allowed: false
      reason:
        | 'ENCOUNTER_ACTIVE_NOT_PARTICIPANT_TURN'
        | 'TOKEN_NOT_IN_ENCOUNTER'
        | 'MOVEMENT_EXCEEDED'
        | 'MOVEMENT_SPEED_UNKNOWN'
        | 'TOKEN_NOT_OWNED_BY_PLAYER'
      distanceMeters?: number
      maxMeters?: number | null
      usedMeters?: number
      remainingMeters?: number | null
    }
```

### 10.4. Evento de erro

Emitir para o socket que tentou mover:

```txt
vtt:token:move:rejected
```

Payload:

```ts
{
  tokenId: string
  reason: string
  message: string
  attemptedDistanceMeters?: number
  remainingMeters?: number | null
}
```

---

## 11. Gasto de movimento por turno

### 11.1. Quando registrar gasto

Ao mover com sucesso durante encounter ativo:

```txt
usedMetersThisTurn += distanceMeters
```

### 11.2. Quando resetar

Resetar gasto quando:

```txt
- avança para o próximo turno;
- inicia novo round;
- encounter é encerrado;
- Mestre usa ação manual de resetar movimento do participante.
```

### 11.3. Desfazer movimento

MVP:

```txt
Não implementar undo automático.
```

Se o Mestre precisar corrigir:

```txt
Mestre pode reposicionar com override ou resetar movimento gasto.
```

---

## 12. UI durante encontro

### 12.1. Token ativo

Quando o token for o participante ativo:

- destacar token;
- permitir drag;
- mostrar distância restante;
- mostrar preview da rota.

Exemplo:

```txt
Movimento: 7,5 m
Usado: 3 m
Restante: 4,5 m
```

### 12.2. Token não ativo

Para jogador:

- bloquear drag;
- cursor/feedback de bloqueado;
- tooltip: `Aguarde seu turno para mover este token.`

Para Mestre:

- permitir override conforme configuração;
- mostrar aviso: `Este token não está no turno ativo.`

### 12.3. Movimento excedido

Se jogador tentar exceder:

```txt
Movimento excedido. Restante: 1,5 m.
```

O token deve voltar para a última posição válida.

---

## 13. Padronização da ficha Player/NPC

### 13.1. Objetivo visual

Padronizar o bloco lateral de ficha do Player para ficar mais próximo do bloco do NPC.

NPC atual:

```txt
Nome
Fonte
Nível | CA | PV
Defesas
Movimento
Idiomas
```

Player proposto:

```txt
Nome
Identificação rápida
Nível | EXP | Meta
Vida Máxima | Atual | Temporária
Ferido | Morrendo | Condenado
CA | Bônus
Fortitude | Reflexo | Vontade
Inic. | Percepção
Movimento
```

### 13.2. Campo Movimento do Player

Substituir campo pequeno `MOV.` por bloco:

```txt
MOVIMENTO
Terrestre 7,5 m
```

Ou se a ficha estiver em modo PF2e original:

```txt
MOVIMENTO
Terrestre 25 ft
```

### 13.3. Padrão de armazenamento

Internamente, preferir armazenar valor normalizado:

```ts
movement: {
  landFeet: 25,
  landMeters: 7.5
}
```

Mas preservar `raw` quando vier de importação ou texto livre.

---

## 14. Conversão e parsing de movimento

Criar parser para valores como:

```txt
25 ft
25 pés
7,5 m
9 m
Terrestre 25 ft
land 25 feet
fly 30 ft
voo 30 ft
swim 20 ft
natação 20 ft
```

Função:

```ts
parseMovementSpeeds(raw: string): VttMovementSpeed[]
```

Casos mínimos do MVP:

```txt
Terrestre 25 FT
25 FT
7,5 m
9 m
```

Regras:

```txt
ft -> converter usando 1 ft = 0,3048 m
m -> manter metros
cells -> meters / metersPerCell
```

Para PF2e tático, arredondar para células inteiras quando vier de ft:

```txt
25 ft -> 5 cells -> 7,5 m se metersPerCell = 1,5
```

---

## 15. Configurações recomendadas da campanha/cena

Adicionar futuramente, se ainda não existir:

```ts
type CampaignSceneGridSettings = {
  shape: 'SQUARE' | 'HEX'
  cellSizePx: number
  metersPerCell: number
  diagonalRule: 'ONE_ONE_ONE' | 'PF2E_ALTERNATING'
}
```

MVP:

```txt
metersPerCell = 1.5
shape = o grid atual da cena
movementDiagonalRule = ONE_ONE_ONE
```

---

## 16. Permissões

### 16.1. Jogador

Pode mover apenas:

```txt
- próprio token;
- em seu turno;
- se participante do encontro;
- dentro do movimento restante.
```

### 16.2. Mestre

Pode:

```txt
- mover qualquer token;
- mover fora de turno com aviso;
- exceder movimento com override, se configuração permitir;
- resetar movimento gasto do turno;
- ajustar movimento manualmente se necessário.
```

---

## 17. O que não implementar nesta etapa

Não implementar ainda:

- ação Stride/Step/Leap específica de PF2e;
- terrenos difíceis;
- terreno maior;
- voo com altitude;
- natação/escalada com custo especial;
- diagonal alternada PF2e, salvo decisão explícita;
- ataques de oportunidade/reactions automáticas;
- pathfinding automático;
- colisão com paredes;
- bloqueio por line of sight;
- auras;
- cálculo automático de alcance de ataque;
- automação de condição slowed/quickened;
- múltiplas ações PF2e por turno;
- consumo parcial por ação;
- desfazer movimento automaticamente.

---

## 18. Critérios de aceite

A entrega está correta quando:

1. movimento livre continua funcionando fora de encontro;
2. durante encontro ativo, jogador só move o token do participante ativo;
3. jogador não consegue mover token de outro participante fora do turno;
4. jogador não consegue mover além do movimento restante;
5. NPC usa movimento vindo da ficha/bestiário, ex.: `Terrestre 25 ft`;
6. Player usa movimento vindo do campo MOV/MOVIMENTO;
7. `25 ft` é convertido para `7,5 m`/`5 células` no padrão PF2e;
8. o gasto de movimento é acumulado no turno;
9. ao avançar turno, o gasto do próximo participante inicia zerado;
10. token volta para posição válida quando movimento é rejeitado;
11. Mestre consegue override ou recebe aviso, conforme configuração;
12. UI mostra movimento total/usado/restante;
13. ficha Player exibe `MOVIMENTO` no mesmo padrão visual/semântico do NPC;
14. Hazards continuam fora da regra de movimento de criaturas.

---

## 19. Dúvidas que precisam ser decididas antes da implementação

1. A escala padrão da cena será sempre `1 célula = 1,5 m`?
2. Durante encontro, o Mestre pode exceder movimento com override ou deve ser bloqueado também?
3. Diagonal no MVP conta como `1 célula` ou já devemos implementar regra PF2e alternada `5-10-5-10 ft`?
4. Jogador pode mover token aliado no turno dele ou somente o próprio token?
5. Token fora do encontro pode ser movido durante encontro ativo, ou deve bloquear tudo exceto participantes?
6. Movimento de NPC deve ser exibido em metros, em pés, ou ambos?
7. A ficha Player deve armazenar MOV como número normalizado ou manter texto livre com parser?
8. Movimento deve ser gasto por turno inteiro ou por ação futuramente? No MVP recomenda-se por turno inteiro.
9. Deve existir botão `Resetar movimento` para o Mestre no card de iniciativa?
10. Se o token for arrastado além do limite, ele deve voltar para a origem ou parar na última célula válida?

---

## 20. Prompt sugerido para Codex/Claude

```txt
Implemente o escopo de movimento limitado durante Encounter Mode descrito em `.ai/encounter/movement.md`.

Objetivo:
- Fora de encontro, tokens continuam com movimento livre.
- Durante encontro ativo, jogadores só podem mover o token do participante ativo.
- O movimento máximo deve vir do campo MOVIMENTO/MOV da ficha do Player ou NPC.
- Para PF2e, converter ft para metros usando o padrão tático: 5 ft = 1,5 m.
- Exemplo: 25 ft = 5 células = 7,5 m.
- Acumular movimento gasto durante o turno.
- Bloquear movimento excedente para jogadores.
- Mestre pode receber aviso/override conforme configuração.
- Padronizar o bloco MOVIMENTO da ficha Player para o mesmo padrão do NPC.

Restrições:
- Não implementar terreno difícil, diagonal alternada, ações PF2e, voo/altura ou pathfinding automático ainda.
- Não aplicar regra de movimento a Hazards.
- Não confiar apenas no frontend: validação deve ocorrer no backend antes de persistir movimento.
- Manter Clean Architecture: parser/cálculo/validação em domínio ou service, socket apenas orquestra.

Arquivos/documentos esperados:
- `.ai/encounter/movement.md`
- atualização de `.ai/encounter/specs.md`, se existir
- atualização de contratos backend/frontend para incluir movement no participante
- parser de movimento PF2e
- validação no `vtt:token:move`
- UI com movimento total/usado/restante
- ajuste visual do sidebar da ficha Player para MOVIMENTO no padrão do NPC
```
