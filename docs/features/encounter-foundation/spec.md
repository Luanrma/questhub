# Encounter Foundation — gerenciamento manual da campanha

Status: **READY**

Card: `QH-ENC-002` — https://trello.com/c/gaM4vjK9
Domínio: VTT Core / condução da mesa
UX review required: **YES**
Direção confirmada pelo usuário: **Campaign Management First**.

## Objetivo

Permitir que o Mestre acompanhe uma situação da campanha — combate, puzzle,
exploração ou evento — sem transformar o Encounter em executor de regras.

O QuestHub mantém contexto, participantes e uma ordem opcional. A mesa decide e
executa ataques, magias, dano, salvamentos, recursos, efeitos e house rules.

## Escopo

- um Encounter corrente por Campaign durante a sessão;
- nome e notas privadas do Mestre;
- início sem participantes;
- participantes opcionais representados por Tokens;
- iniciativa, rodadas e turnos ativáveis/desativáveis pelo Mestre;
- continuidade ao trocar de cena, sem mover Tokens nem revelar cenas;
- encerramento explícito;
- histórico mecânico no Campaign Game Log.

## Fora de escopo

- Action Tray ou painel de ações do participante;
- interpretar armas, magias, alcance, área, alvos ou regras do Game System;
- calcular ataque, dano, salvamento, Degree of Success ou MAP;
- consumir slots, Focus, ações, munição ou outros recursos;
- aplicar Effects automaticamente;
- motor de clima, puzzle ou evento ambiental;
- múltiplos Encounters simultâneos;
- retomada do estado operacional entre sessões.

## Modelo conceitual

`CampaignEncounter` mantém a identidade persistente e o agrupamento do Game Log.
O estado operacional permanece vivo durante a sessão.

```ts
type VttEncounterState = {
  encounterId: string
  campaignId: string
  startedSceneId: string | null
  name: string
  privateNotes?: string // somente projeção MASTER
  turnsActive: boolean
  round: number
  turnCount: number
  activeTurnIndex: number
  status: 'ACTIVE'
  participants: VttEncounterParticipant[]
}
```

O nome possui de 1 a 120 caracteres. Notas aceitam até 20.000 caracteres. O
servidor persiste ambos; `privateNotes` nunca integra snapshot/evento de Player
nem entrada compartilhada do Game Log.

## Lifecycle

1. Mestre inicia com nome, notas e zero ou mais Tokens visíveis da cena atual.
2. O Encounter começa em modo livre (`turnsActive = false`).
3. Participantes podem ser adicionados/removidos manualmente durante a sessão.
4. Ativar turnos exige ao menos um participante.
5. Desativar turnos preserva ordem, iniciativas, rodada e posição corrente.
6. Reativar retoma a posição preservada.
7. Remover o último participante desativa turnos, limpa a ordem e mantém o
   Encounter aberto; uma nova ordem começa na rodada 1.
8. Trocar de cena preserva o Encounter e não teleporta Tokens.
9. Encerrar Encounter exige confirmação e preserva o histórico.
10. Encerrar a sessão ou substituir explicitamente o Encounter encerra sua
    identidade persistente.

## Participantes e cenas

- participante referencia `CampaignToken`; Actor e ficha continuam opcionais;
- Token adicionado deve pertencer à mesma Campaign e à cena indicada no comando;
- Tokens ocultos não podem ser adicionados;
- participantes fora da cena visível permanecem na lista, mas não habilitam
  operações espaciais nessa cena;
- trocar de cena não altera participantes;
- excluir ou ocultar um Token remove sua participação, sem encerrar o Encounter.

## Turnos e movimento

- iniciativa continua sendo um total manualmente ajustável, sem regra de sistema;
- o carrossel aparece somente quando `turnsActive = true`;
- em modo livre, o movimento autorizado segue o comportamento normal da mesa;
- com turnos ativos, preserva-se o comportamento atual: Player usa movimento
  medido apenas com o Token ativo que controla; Mestre continua livre;
- ausência de turnos nunca restringe movimento, medição ou seleção por ordem.

## Permissões e projeções

- iniciar, editar, adicionar/remover participantes, ativar/desativar turnos,
  ajustar iniciativa, avançar/voltar e encerrar exigem Mestre ativo da sessão;
- membro ativo da Campaign pode solicitar a projeção autorizada;
- Player recebe nome, modo, participantes e ordem quando ativa;
- Player nunca recebe notas privadas, nem como campo vazio ou metadata indireta;
- backend valida membership, papel e pertencimento de todos os IDs à Campaign.

## UX

### Sem Encounter

O painel mostra nome, notas privadas, caixa opcional de Tokens e `Iniciar
Encontro`. A ausência de Tokens não desabilita o início.

### Encounter livre

O painel mostra nome, notas, participantes e `Ativar turnos`. Sem participantes,
o controle fica indisponível e explica `Adicione um participante para ativar
turnos`. O mapa mantém fluxo livre.

### Turnos ativos

O carrossel existente mostra a ordem. O painel continua sendo de gerenciamento:
nome, notas, participantes, `Desativar turnos` e `Encerrar encontro`. Não mostra
ações, armas, magias ou resolução mecânica.

### Estados e feedback

- loading, vazio, envio, sucesso, erro e encerramento remoto são distintos;
- comandos em envio não podem ser duplicados;
- erro de salvamento preserva nome/notas locais e oferece nova tentativa;
- `Desativar turnos` e `Encerrar encontro` são ações diferentes;
- encerramento pede confirmação;
- controles possuem rótulos acessíveis, foco visível, uso por teclado e layout
  sem rolagem horizontal obrigatória;
- em largura reduzida, ações permanecem acessíveis e campos empilham.

## Contratos realtime

Os eventos legados `vtt:combat:*` podem permanecer durante este recorte para
compatibilidade, mas transportam o novo estado genérico.

Comandos adicionados/alterados:

```txt
vtt:combat:start            // nome, notas, sceneId/tokenIds opcionais
vtt:combat:update           // nome e notas privadas
vtt:combat:set-turns        // turnsActive boolean
vtt:combat:add-participants // sceneId + tokenIds
vtt:combat:remove-participants
vtt:combat:end
vtt:combat:request
```

Comandos existentes de iniciativa e navegação só produzem efeito quando os
turnos estão ativos. `vtt:combat:changed` é projetado por destinatário: MASTER
recebe notas privadas; PLAYER não recebe esse campo.

## Critérios de aceite

1. Mestre inicia um Encounter sem Token.
2. O Encounter inicia em modo livre e não mostra carrossel de turnos.
3. Mestre adiciona/remove participantes; remover o último não encerra.
4. Ativar turnos sem participantes é impedido com feedback claro.
5. Desativar/reativar preserva ordem, iniciativas, rodada e posição.
6. Trocar de cena preserva Encounter, participantes e histórico sem mover Tokens.
7. Modo livre não restringe movimento por turno; modo ativo preserva a restrição
   existente do Player ao Token ativo controlado.
8. Mestre edita nome/notas; falha preserva o conteúdo local.
9. Player nunca recebe notas privadas por snapshot, realtime ou Game Log.
10. Encerrar exige confirmação e preserva o histórico persistido.
11. Painel ativo não apresenta Action Tray, armas, magias ou automação mecânica.
12. Reconnect recupera a projeção autorizada do estado vivo sem duplicar evento.
13. IDs de outra Campaign e comandos sem papel MASTER são rejeitados no backend.
14. Loading, vazio, envio, erro e encerramento remoto são distinguíveis.
15. Fluxo principal funciona por teclado e sem rolagem horizontal obrigatória.

## Dependências e enforcement

- ADR-0002, ADR-0004, ADR-0005, ADR-0007 e ADR-0008;
- `docs/features/combat/spec.md`;
- `docs/features/campaign-game-log/spec.md`;
- testes de domínio, contratos, projeção privada, isolamento e UI;
- `npm run check:architecture`, testes e builds aplicáveis.
