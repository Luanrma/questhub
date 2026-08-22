# QH-EFF-012 — Implementation Notes

## Materialized contract

The PF2e Active Effect catalog is generated from the frozen `foundryvtt/pf2e` revision `01114da5851f31404078d8020809b13e4000bc4b` and committed into QuestHub. Runtime does not fetch Foundry/PF2e.

Published definitions preserve structural identity (`sourcePack:sourceId`), canonical name, available canonical description, publication, group, Condition value metadata, and the canonical image path as source metadata. `iconUrl` remains a QuestHub-local concern and therefore stays `null` until a safe local asset resolver exists.

A canonical document that genuinely has no description is represented by an empty string rather than invented text or the historical `null`. Canonical Conditions in the frozen pack all retain their non-empty descriptions.

## Polarity

Polarity is versioned explicitly by `definitionKey` in `active-effect-polarity.json`. The migration preserves the editorial policy already approved by QH-EFF-005 for the currently published set. Runtime does not derive polarity from `kind`, name, description, Rule Elements, numeric signs, or AI. Generation fails when a published definition lacks an explicit manifest entry.

## Reproducibility

`scripts/generate-pf2e-active-effect-source.mjs` validates the frozen source commit, ignores pack folder metadata such as `_folders.json`, resolves only canonical Conditions plus Effect/Affliction targets already structurally published by the QuestHub source-reference indexes, and emits deterministic source data. The generated array uses an explicit element type instead of a repository-scale `as const` tuple so TypeScript does not perform unnecessary literal inference over the full catalog.

## Boundaries

All concrete semantics remain inside `apps/api/src/game_systems/pathfinder_2e/**` plus generation tooling. No Rule Elements, stacking, duration, damage, application automation, or PF2e-specific behavior is introduced into VTT Core.
