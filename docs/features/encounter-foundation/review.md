# Gates de refinamento — QH-ENC-002

Data: 2026-09-19
Card: https://trello.com/c/gaM4vjK9
Evidência de UX: requisito aprovado, código atual, contratos e componentes
existentes. Aparência renderizada permanece para QA da implementação.

## BA

```text
BA: READY
Spec: docs/features/encounter-foundation/spec.md
UX review required: YES
Architecture review required: YES
Open product questions: 0
```

O recorte aplica `Campaign Management First`: Encounter organiza contexto,
participantes e turnos opcionais. Action Tray e interpretação de regras foram
removidas. Permissões, estados, contratos, erros e critérios são verificáveis.

## UX Review

Aplicado o método advisory Impeccable em modo Operate. Journeys revisadas:
Mestre e Player.

| Finding | Tratamento verificável |
| --- | --- |
| O painel de ações transforma Encounter em executor mecânico | Remover `EncounterActionPanel` do fluxo ativo; painel gerencia somente o encontro. |
| Iniciar exige Tokens, embora puzzle/evento possa não ter participantes | Nome habilita início; caixa de Tokens é opcional. |
| Turnos e encerramento parecem o mesmo lifecycle | Controles e copy distintos: `Ativar/Desativar turnos` e `Encerrar encontro`. |
| Notas privadas podem vazar em broadcast compartilhado | Projeção realtime por papel; Player não recebe o campo. |
| Falha de comando pode perder contexto digitado | Estado local preservado, feedback próximo à ação e retry explícito. |
| Carrossel compete com o mapa quando não é necessário | Renderizar somente com turnos ativos. |

```text
UX REVIEW: APPROVED
Applicability: REQUIRED
Journeys reviewed: BOTH
Visual consistency: PASS documental; reutiliza a gramática existente
Tabletop flow: PASS
Accessibility/responsiveness: PASS nos critérios; validação renderizada em QA
Acceptance criteria added or refined: 2, 4, 8, 9, 11, 14 e 15
Open UX questions: 0
```

## Architecture Review

```text
ARCHITECTURE: APPROVED
ADRs: ADR-0002, ADR-0004, ADR-0005, ADR-0007, ADR-0008
Required enforcement: Campaign isolation; autorização backend; projeção privada
por destinatário; contratos/testes realtime; architecture check; migration.
Architecture debt introduced: NO
```

`CampaignEncounter` permanece a identidade persistente do histórico; ordem e
participantes continuam estado operacional da sessão. A separação entre
identidade e turnos opcionais está aceita no ADR-0008. Nenhuma regra de Game
System entra no Core.

## Development

```text
DEVELOPMENT: COMPLETED
Branch: feat/qh-enc-002-manual-encounter-management
Database migration: 20260919120000_add_encounter_management
```

Implementado: criação vazia em modo livre; nome e notas privadas persistentes;
projeção realtime por papel; participantes multi-cena; turnos opcionais;
preservação na troca de cena; painel exclusivamente gerencial; confirmação de
encerramento; remoção do Action Tray do fluxo de Encounter.

## Code Review

```text
CODE REVIEW: APPROVED
Blocking findings: 0
Campaign isolation: PASS
Authorization on backend: PASS
Private note projection: PASS
Game System boundary: PASS
```

A revisão corrigiu dois pontos antes da aprovação: movimento livre do Player
ainda era bloqueado por qualquer Encounter, e a mudança de modo era aplicada em
memória antes do Game Log persistir. Ambos agora dependem de `turnsActive` e
mantêm persistência antes do broadcast.

## Documentation Audit

```text
DOCUMENTATION AUDIT: PASS
Canonical spec: docs/features/encounter-foundation/spec.md
Operational contract: docs/features/combat/spec.md
Game Log contract: docs/features/campaign-game-log/spec.md
ADR: docs/architecture/adr/ADR-0008-encounter-optional-turns.md (ACCEPTED)
Obsolete document removed: combat-mvp-ux.md
```

## QA

```text
QA: APPROVED
Architecture check: PASS
API build: PASS (NODE_OPTIONS=--max-old-space-size=4096)
Web production build: PASS
Changed web files lint: PASS
Focused tests: 30 PASS
Full API suite: 367/368 PASS on first run; sole migration-list assertion fixed
and rerun PASS in the focused 30-test set
Visual capture: BLOCKED by unavailable browser binary/download timeout
```

Cobertura inclui início sem Token, remoção do último participante, turnos
opcionais, privacidade das notas, limites dos contratos, histórico de migrações
e renderização SSR dos estados de Mestre e Player. A captura visual interativa
fica explícita para Human Approval; nenhuma alegação visual depende de screenshot
não produzida.
