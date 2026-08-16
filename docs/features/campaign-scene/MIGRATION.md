# Campaign Scene — Nota de migração documental

Status: **CURRENT**

O contrato principal foi preservado em `docs/features/campaign-scene/spec.md` porque contém regras atuais de cena, grid, geometria, persistência e realtime.

## Mapeamento atual

Referências históricas embutidas no `spec.md` devem ser resolvidas assim:

- arquitetura de Token -> `docs/features/vtt/token-architecture.md`;
- Fog of War -> `docs/features/fog-of-war/spec.md`;
- arquitetura consolidada -> `docs/ARCHITECTURE.md`;
- separação Member/Actor -> ADR-0003;
- independência Token/Actor -> ADR-0004.

O cabeçalho do contrato também registra aliases de transição envolvendo `Character`, `CampaignCharacter` e `characterId`. Esses nomes não redefinem o modelo atual. O modelo vigente usa `CampaignMember`, `CampaignActor`, `CampaignToken` e `actorId` conforme Constitution, ADRs e Architecture.

Não recrie diretórios antigos para satisfazer links históricos do documento migrado.
