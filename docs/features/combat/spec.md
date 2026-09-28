# Módulo: Encounter

Card: `QH-ENC-002`

## 1. Fronteira

`Encounter` organiza um acontecimento dentro da sessão de campanha. Ele não é
um motor de combate e não interpreta regras de Pathfinder 2e ou de qualquer
outro Game System. Os nomes técnicos legados `VttCombat*` e
`vtt:combat:*` permanecem temporariamente por compatibilidade.

O contrato base não contém CA, pontos de vida, dano, testes, condições,
proficiência, ações, recursos, alcance ou forma de magia. Não existe Action
Tray associado ao Encounter.

## 2. Estado vivo

```ts
type VttCombatState = {
  encounterId: string
  campaignId: string
  startedSceneId: string | null
  name: string
  privateNotes: string // somente na projeção do Mestre
  turnsActive: boolean
  round: number
  turnCount: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttCombatParticipant[]
}
```

Regras:

* uma campanha possui no máximo um Encounter ativo na sessão;
* o Mestre pode iniciar sem cena e sem participantes;
* `name` possui de 1 a 120 caracteres e `privateNotes` até 20.000;
* participantes são opcionais e referenciam tokens, não fichas ou regras;
* o Encounter inicia em modo livre (`turnsActive = false`);
* ativar turnos exige ao menos um participante;
* desativar turnos preserva ordem, iniciativas, rodada, contagem e posição;
* reativar turnos retoma o estado preservado;
* remover o último participante mantém o Encounter aberto, desativa turnos e
  reinicia a ordem vazia;
* trocar de cena preserva o Encounter e não move nem revela tokens;
* encerrar sessão ou substituir o Encounter fecha o registro persistente;
* encerramento manual exige confirmação explícita na interface.

Quando turnos estão ativos, a iniciativa é um total manual ordenado de forma
decrescente. O servidor ainda gera o valor inicial `1d20` ao adicionar um token
e aceita ajustes inteiros entre `-1000` e `1000`, mantendo o total entre
`-10000` e `10000`. Isso é um auxílio de organização, não aplicação de regra.

## 3. Realtime

Comandos do Mestre:

```txt
vtt:combat:start
vtt:combat:update
vtt:combat:set-turns
vtt:combat:add-participants
vtt:combat:remove-participants
vtt:combat:adjust-initiative
vtt:combat:next-turn
vtt:combat:previous-turn
vtt:combat:end
```

Consulta autenticada da campanha:

```txt
vtt:combat:request
```

Fato emitido pelo servidor:

```txt
vtt:combat:changed
```

`start` recebe `campaignId`, `name`, `privateNotes`, `sceneId?` e até 100
`tokenIds`. `add-participants` recebe a cena explícita de onde os tokens serão
obtidos. O servidor resolve identidades e rejeita tokens ocultos ou externos à
cena/campanha.

O snapshot é projetado por papel. O Mestre recebe `privateNotes`; o campo é
omitido por completo para jogadores e nunca é incluído no Game Log.

## 4. Interface

Sem Encounter ativo, a aba permite informar nome, notas privadas e preparar
tokens opcionais. Com Encounter ativo, a mesma aba mostra:

* nome e modo atual;
* edição explícita de nome e notas para o Mestre;
* lista de participantes com inclusão pelo menu do token e remoção manual;
* ativação/desativação de turnos;
* encerramento com confirmação.

O carrossel, iniciativa, rodada e destaque do token aparecem somente com turnos
ativos. Em modo livre, jogadores continuam movimentando seus tokens controlados
pelas regras normais da sessão. O painel não mostra ficha, ações, ataques,
magias, saves, dano ou cálculo mecânico.

## 5. Segurança

* toda mutação exige Mestre da sessão ativa;
* leitura exige membro autenticado na campanha;
* o servidor valida cena e tokens dentro do mesmo `campaignId`;
* notas privadas são filtradas antes de cada emissão por socket;
* o cliente não escolhe `encounterId`, iniciativa inicial ou identidade de
  participante.

## 6. Critérios de aceitação

* iniciar sem tokens cria Encounter em modo livre;
* adicionar e remover participantes não encerra o Encounter automaticamente;
* remover o último participante desativa turnos e mantém nome/notas;
* trocar de cena preserva o Encounter;
* ativar turnos sem participante é recusado;
* desativar e reativar preserva a posição da ordem;
* restrição de movimento por participante ativo existe apenas com turnos ativos;
* jogador recebe nome, modo e participantes, mas nunca notas privadas;
* painel ativo não contém Action Tray nem automação de Game System;
* encerramento manual pede confirmação e preserva o histórico.
