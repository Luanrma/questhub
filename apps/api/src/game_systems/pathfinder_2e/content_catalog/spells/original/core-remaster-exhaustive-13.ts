import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_13_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:hidden-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "C2w3YfBKjIRS07DP",
      "slug": "hidden-mind",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mind-blank.webp"
    },
    "sourceHash": "sha256:0146a8e025a9060df23513dbab7530a4fd2d76e8c45a77dc34f7a9dcf3e26af0",
    "translatableHash": "sha256:6054e4f219765434c32f1f68483056307ccf6b0c274bb91b9e2b88d94053b32d",
    "data": {
      "schemaVersion": 1,
      "name": "Hidden Mind",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Powerful wards hide a creature from magic that would spy on it or affect its mind. The target gains a +4 status bonus to saves against mental effects. Hidden mind attempts to counteract any detection, revelation, and scrying effects as if its spell rank were 1 higher than its actual rank. On a success, the effect functions normally except that it detects nothing about the target and its possessions. For instance, detect magic would still detect other magic in the area, but not any magic on the target.\nSpell Effect: Hidden Mind",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 535,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Hidden Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Hidden Mind",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Hidden Mind",
          "sourceId": "DBaMtFHRPEg1JeLs",
          "name": "Spell Effect: Hidden Mind",
          "type": "effect"
        },
        "owner": {
          "sourceId": "C2w3YfBKjIRS07DP",
          "name": "Hidden Mind",
          "type": "spell"
        }
      }
    ]
  }
]
