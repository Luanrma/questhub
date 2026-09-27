# ADR-0008 — Encounter com turnos opcionais

Status: **ACCEPTED**
Data: 2026-09-19
Card: `QH-ENC-002` — https://trello.com/c/gaM4vjK9
Supersedes: nenhum; estende o lifecycle de Combat, Scene e Game Log.

## Contexto

O Encounter vigente depende de participantes, ativa turnos imediatamente,
restringe movimento enquanto existe, termina ao remover o último Token e termina
na troca de cena. Isso impede representar puzzle, exploração e eventos manuais e
acopla a identidade histórica à ordem de turnos.

O produto adotou **Campaign Management First**: o QuestHub organiza a mesa e não
executa regras de Game System.

## Decisão

Separar a identidade do Encounter da ordem opcional de turnos.

- Existe no máximo um Encounter corrente por Campaign durante a sessão.
- `CampaignEncounter` mantém identidade persistente, nome, notas privadas e o
  agrupamento histórico do Game Log.
- Participantes e ordem permanecem estado operacional vivo da sessão.
- O Encounter pode iniciar sem participantes e começa com turnos desativados.
- Ativar turnos exige participante; desativar preserva ordem e posição.
- Remover o último participante limpa a ordem e mantém o Encounter aberto.
- Trocar de cena preserva identidade, participantes e ordem sem mover Tokens.
- Encerramento explícito, encerramento da sessão ou substituição encerram o
  registro persistente. Não há retomada operacional entre sessões neste recorte.

## Privacidade e segurança

Notas pertencem ao Mestre. Elas só integram persistência e projeção destinada a
MASTER; não são enviadas a Player nem registradas no Game Log compartilhado.

Toda operação valida membership, papel e pertencimento dos IDs à mesma Campaign
no backend. O frontend não é fronteira de segurança.

## Fronteira VTT / Game System

Encounter, participantes, turnos, iniciativa genérica e projeção autorizada
pertencem ao Core. O Encounter não interpreta armas, magias, dano, salvamentos,
alcance, áreas, recursos ou Effects. Não existe Action Tray neste agregado.

## Contratos e compatibilidade

Os nomes legados `VttCombat*` e `vtt:combat:*` podem permanecer temporariamente
para evitar uma migração nominal fora do escopo. Seus payloads passam a expressar
o lifecycle de Encounter definido nesta decisão.

O estado distingue `turnsActive`. Consumidores de movimento, medição e UI só
aplicam comportamento de turno quando esse valor é verdadeiro. A projeção
realtime é filtrada por destinatário.

## Persistência

`CampaignEncounter` recebe nome e notas privadas. A cena inicial continua como
snapshot opcional e não define ownership do Encounter. Histórico existente é
preservado; a migration fornece nome compatível aos registros anteriores.

## Consequências

### Positivas

- Encounter representa atividades híbridas sem Tokens artificiais;
- turnos podem ser usados apenas quando ajudam a mesa;
- mudança de cena não fragmenta o histórico;
- regras permanecem sob responsabilidade humana/Game System.

### Custos

- snapshots realtime precisam variar por papel;
- contratos e consumidores devem distinguir Encounter livre de turnos ativos;
- persistência recebe campos privados e exige testes contra vazamento.

## Enforcement

- testes de lifecycle livre/turnos/último participante/troca de cena;
- testes de autorização e Campaign isolation;
- teste de projeção que prove ausência de notas para Player;
- testes de movimento/medição condicionados a `turnsActive`;
- `npm run check:architecture` e builds aplicáveis.
