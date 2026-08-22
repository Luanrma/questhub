# QH-EFF-012 — Implementation Notes

## Materialized contract

The PF2e Active Effect catalog is generated from the frozen `foundryvtt/pf2e` revision `01114da5851f31404078d8020809b13e4000bc4b` and committed into QuestHub. Runtime does not fetch Foundry/PF2e.

Published definitions preserve structural identity (`sourcePack:sourceId`), canonical name, available canonical description, publication, group, Condition value metadata, and the canonical image path as source metadata. `iconUrl` remains a QuestHub-local concern and therefore stays `null` until a safe local asset resolver exists.

A canonical document that genuinely has no description is represented by an empty string rather than invented text or the historical `null`. Canonical Conditions in the frozen pack all retain their non-empty descriptions.

## Polarity

Every published definition still has an explicit versioned baseline decision in `active-effect-polarity.json`; generation fails if a published target is missing from that manifest.

Following Human Validation on 2026-08-22, the historical blanket policy `effect → NEUTRAL` was rejected as insufficient. The approved product rule is individual editorial classification: semantically unequivocal advantages are `BENEFICIAL`, unequivocal disadvantages are `HARMFUL`, and `NEUTRAL` is retained only for mixed/contextual/ambiguous definitions.

Reviewed exact-key decisions live in `active-effect-polarity-editorial.ts`. The catalog applies that versioned exact-key overlay after materialization and validates that every editorial target exists and is an `effect`. No decision is inferred from `kind`, name, description, Rule Elements, numeric signs, or AI at runtime.

Examples protected by regression tests:

- `Effect: Oceanic Armor` → `BENEFICIAL`;
- `Effect: Swarming Bites` → `HARMFUL`;
- `Effect: Darivan's Bloodline Magic` → `NEUTRAL` because the same definition can grant a bonus to Darivan or impose a penalty on another target.

The final runtime catalog therefore contains all three effect polarities and cannot regress to an all-`NEUTRAL` result unnoticed.

## Reproducibility

`scripts/generate-pf2e-active-effect-source.mjs` validates the frozen source commit, ignores pack folder metadata such as `_folders.json`, resolves only canonical Conditions plus Effect/Affliction targets already structurally published by the QuestHub source-reference indexes, and emits deterministic source data. The generated array uses an explicit element type instead of a repository-scale `as const` tuple so TypeScript does not perform unnecessary literal inference over the full catalog.

The generated canonical source and the versioned exact-key editorial overlay are both repository inputs. Runtime performs only key lookup; it does not perform semantic classification.

## Presentation boundary

Human Validation also reported stale UI after application, raw HTML markup such as `<p>` in descriptions, and insufficient detail in the expanded card. Those findings are tracked in **QH-EFF-014** because the QH-EFF-012 spec assigns end-to-end application/presentation to QH-EFF-013/014. They are intentionally not implemented in this card.

## Boundaries

All concrete semantics remain inside `apps/api/src/game_systems/pathfinder_2e/**` plus generation tooling. No Rule Elements, stacking, duration, damage, application automation, or PF2e-specific behavior is introduced into VTT Core.