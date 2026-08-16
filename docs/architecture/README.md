# QuestHub Architecture Decisions

Este diretório mantém decisões arquiteturais históricas do QuestHub.

## Regra

ADRs com status `Accepted` são autoritativos para a decisão que registram.

Um ADR aceito não deve ser editado para apagar ou reescrever a decisão histórica. Quando uma decisão mudar, crie um novo ADR com `Supersedes: ADR-XXXX`.

## ADRs atuais

- `ADR-0001-campaign-requires-game-system.md` — toda Campaign exige um Game System.
- `ADR-0002-campaign-is-the-data-boundary.md` — Campaign é a fronteira máxima de isolamento dos dados de jogo.
- `ADR-0003-member-actor-separation.md` — CampaignMember e CampaignActor são conceitos distintos.
- `ADR-0004-token-actor-independence.md` — CampaignToken pode existir independentemente de CampaignActor.
- `ADR-0005-vtt-game-system-boundary.md` — VTT Core não interpreta regras de Game System.

## Hierarquia

Consulte também:

1. `docs/PROJECT_CONSTITUTION.md`
2. `docs/governance/SOURCE_OF_TRUTH.md`
3. `docs/ARCHITECTURE.md`

ADRs detalham decisões; `ARCHITECTURE.md` consolida o estado vigente.
