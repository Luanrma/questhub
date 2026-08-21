import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_15_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:slashing-gust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1Yoipc5jNcMehtEW",
      "slug": "slashing-gust",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:fc88eb697983811174f4058a06c0345ad7bca796cbbc64d8c41b17ec13f755cf",
    "translatableHash": "sha256:d9411a9fc6e344b927dddf20089c563544e3e59177a3922a4b89af66cb41a1c3",
    "data": {
      "schemaVersion": 1,
      "name": "Slashing Gust",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "attack",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You slash your hand through the air, channeling miniature ripples of air from each finger to slice your enemy. If you have two hands free, you can target two creatures with this spell; otherwise, you target one.\nMake a spell attack roll against each target's AC. This deals 2d4 slashing damage. On a critical success, a target also takes 1d4 persistent bleed damage. If you're attacking two creatures, this counts as two attacks for your multiple attack penalty, but the penalty doesn't increase until after both attacks.\nCritical Success The target takes double damage and 1d4 persistent bleed damage.\nSuccess The target takes full damage.\nHeightened 1 The damage increases by 1d4, and the persistent damage on a critical hit increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 or 2 creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d4",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4, and the persistent damage on a critical hit increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shielded-arm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4k99nOJudmeNnBTF",
      "slug": "shielded-arm",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shielded-arm.webp"
    },
    "sourceHash": "sha256:10312779266b3cdd52cf6f727e88fa4ed215f00280082621a468dcc7261a64e9",
    "translatableHash": "sha256:5897417dbfe240014e798d832fc589b0221a230d620c9737c7cecd36efe5260c",
    "data": {
      "schemaVersion": 1,
      "name": "Shielded Arm",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Reinforcing veins of ore run through the target's arm, letting it ward off blows with its bare skin. It can use the Raise a Shield action to instead raise its arm, gaining a +2 circumstance bonus to AC. It can Shield Block with its Raised arm as well; when it does, the target reduces the damage as if it had a shield with Hardness 4 and 15 Hit Points. This shield doesn't have a Broken Threshold, and the spell ends if the shield's Hit Points are expended.\nThis spell doesn't modify the target's unarmed attacks and can't be used to make a shield bash Strike. Casting or coming under the effects of this spell also counts as using a metallic item with regards to anathema.\nHeightened 2 The Hardness increases by 4, and the Hit Points increase by 15.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute or until expended",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The Hardness increases by 4, and the Hit Points increase by 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:timber",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9I8mp7RkjeXbkYfx",
      "slug": "timber",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/timber.webp"
    },
    "sourceHash": "sha256:1951da319fd00db1ac2807e9290958df320365aab3cb223757242f2b0bcb01d3",
    "translatableHash": "sha256:96bba05bb5414e71a54e4a012fdee1c022677c5268636ba915de4a6785cdc141",
    "data": {
      "schemaVersion": 1,
      "name": "Timber",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a small dead tree in your space that falls over on anyone in its path, then immediately decomposes. Any creature in the area takes 2d4 bludgeoning damage, with a basic Reflex saving throw. A creature that critically fails its save is knocked for a loop, making it Dazzled until the end of its next turn.\nHeightened 1 The initial damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9I8mp7RkjeXbkYfx",
          "name": "Timber",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:flourishing-flora",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "b6AQvzs8EotmlK56",
      "slug": "flourishing-flora",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:2e8c5639fdaeb47ed012dfcbc2d3a2aae8ab1d954fec5f9e36208379366d2689",
    "translatableHash": "sha256:455d59758e7935d7ac1ac23a5886d29588921d3ffb2dc3fad4f30efdd2b41001",
    "data": {
      "schemaVersion": 1,
      "name": "Flourishing Flora",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Plants rapidly grow up from the ground. All creatures in the target area take 2d4 damage. The type of damage depends on the type of plant you choose to grow. On a critical failure, targets experience additional effects, also depending on what you choose to grow. The type of plant and its effects are chosen when you Cast the Spell.\n• Cacti Piercing damage, and 1 persistent bleed damage on a critical failure.\n• Flowers Poison damage, and Dazzled for 2 rounds on a critical failure.\n• Fruits Bludgeoning damage, and Clumsy 1 for 2 rounds on a critical failure.\n• Roots Bludgeoning damage, and the affected creatures fall Prone on a critical failure.\nHeightened 1 The damage increases by 1d4, and the persistent bleed damage from cacti increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d4, and the persistent bleed damage from cacti increases by 1."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 506,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "b6AQvzs8EotmlK56",
          "name": "Flourishing Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 650,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "b6AQvzs8EotmlK56",
          "name": "Flourishing Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 830,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "b6AQvzs8EotmlK56",
          "name": "Flourishing Flora",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:root-reading",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BX5UIAUarWG43Fg2",
      "slug": "root-reading",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:e8a1164b7d17868db689efbfc80bd8ada608562f999daebf8dd0c6065b7ff8f5",
    "translatableHash": "sha256:7025d191397ba4f87a4744d3be91bf9ad17d78bbc373bf5bbd4b9ff9c7ca6fb8",
    "data": {
      "schemaVersion": 1,
      "name": "Root Reading",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You gain general insights into the immediate vicinity by sending your sense through the root systems of trees and bushes. If there are any unnoticed Medium or larger creatures in the area, you learn of their presence and they're undetected to you. You can immediately attempt to Seek an undetected creature, and you gain a +1 status bonus to this attempt and any of your other attempts to Seek Hidden or undetected creatures until the end of your next turn. You also learn if any such creatures passed through this area in the last hour, although you get only the vaguest sense of direction from the spell. If you begin to Track a creature detected in this way, you gain a +1 status bonus to the initial check.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 282,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "BX5UIAUarWG43Fg2",
          "name": "Root Reading",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 437,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "BX5UIAUarWG43Fg2",
          "name": "Root Reading",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 709,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Track",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Track",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Track",
          "sourceId": "EA5vuSgJfiHH7plD",
          "name": "Track",
          "type": "action"
        },
        "owner": {
          "sourceId": "BX5UIAUarWG43Fg2",
          "name": "Root Reading",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:deep-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "C2DwamKrW6QHoDQg",
      "slug": "deep-breath",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/deep-breath.webp"
    },
    "sourceHash": "sha256:ea88392f5c4938d737b935e52ea0637af9dc918b1eb7c692a5427905f358fa37",
    "translatableHash": "sha256:0617adc0bf265b85c1fedfa244b61abf1093b8dae5d44e4ee5f16bb9daf35598",
    "data": {
      "schemaVersion": 1,
      "name": "Deep Breath",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "cantrip",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You take an incredibly deep breath and can hold it for the spell's duration. You don't lose breath when hit, but you do lose all the air you inhaled if you speak (including to Cast a Spell). This spell doesn't create air; if you don't have air to breathe when you cast it, you get no benefit.\nHeightened (2nd) The duration increases to 1 hour, and you lose only 10 minutes of breath if you speak.\nHeightened (4th) The duration increases to 8 hours, and you lose only 10 minutes of breath if you speak.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 1 hour, and you lose only 10 minutes of breath if you speak.\nHeightened (4th) The duration increases to 8 hours, and you lose only 10 minutes of breath if you speak."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glass-shield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cgfl9Qr46bKaA59e",
      "slug": "glass-shield",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/electrified-crystal-ward.webp"
    },
    "sourceHash": "sha256:00070d55d7c5b1fd416dfa89043c9f21b8d7b50504b945e6aa1a6f1d0d0f3bdd",
    "translatableHash": "sha256:7f13a38bed5f7d2f0059fd776960aaea44e6268d0d59ddf05099d1f00254d568",
    "data": {
      "schemaVersion": 1,
      "name": "Glass Shield",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "earth"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You summon a layer of clear glass to keep you from harm. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn't require a hand to use. You can Shield Block with the glass shield. It has Hardness 2. You can use the spell's reaction to reduce damage from any spell or magical effect, even if it doesn't deal physical damage. When you Shield Block, the shield explodes in a shower of glass. If creature that broke it is within 5 feet, the shards deal 1d4 piercing damage to that creature with a basic Reflex save. After you use Shield Block, the spell ends and you can't cast it again for 10 minutes.\nSpell Effect: Glass Shield\nHeightened (3rd) The shield has Hardness 4, and the damage increases to 3d4.\nHeightened (5th) The shield has Hardness 7, and the damage increases to 4d4.\nHeightened (7th) The shield has Hardness 10, and the damage increases to 5d4.\nHeightened (9th) The shield has Hardness 12, and the damage increases to 6d4.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (3rd) The shield has Hardness 4, and the damage increases to 3d4.\nHeightened (5th) The shield has Hardness 7, and the damage increases to 4d4.\nHeightened (7th) The shield has Hardness 10, and the damage increases to 5d4.\nHeightened (9th) The shield has Hardness 12, and the damage increases to 6d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 85,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Raise a Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Raise a Shield",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Raise a Shield",
          "sourceId": "xjGwis0uaC2305pm",
          "name": "Raise a Shield",
          "type": "action"
        },
        "owner": {
          "sourceId": "cgfl9Qr46bKaA59e",
          "name": "Glass Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 270,
        "uuid": "Compendium.pf2e.feats-srd.Item.Shield Block",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Shield Block",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Shield Block",
          "sourceId": "jM72TjJ965jocBV8",
          "name": "Shield Block",
          "type": "feat"
        },
        "owner": {
          "sourceId": "cgfl9Qr46bKaA59e",
          "name": "Glass Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 770,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Glass Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Glass Shield",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Glass Shield",
          "sourceId": "oDDS6D2KTjpbA491",
          "name": "Spell Effect: Glass Shield",
          "type": "effect"
        },
        "owner": {
          "sourceId": "cgfl9Qr46bKaA59e",
          "name": "Glass Shield",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:instant-pottery",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ET2BYfeNaHqfZIWs",
      "slug": "instant-pottery",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:0b7ffe6970b1bf1c0bcd85db69c6bfa7323a14e4220c874537839ef0f2a4c9e9",
    "translatableHash": "sha256:60ea4b54b2fde4a9524df550691f1ba576186e8743c0f42a268e75058e266f03",
    "data": {
      "schemaVersion": 1,
      "name": "Instant Pottery",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You pull earthen material out of the environment, then shape it into one or more earthenware objects that, in combination, can be up to light Bulk. Alternatively, you can cast this spell on objects previously created with this spell, extending their duration. No object can have intricate artistry or complex moving parts, can fulfill a cost or the like, or is made of anything more than clay or earth. Each object is obviously the product of temporary magic and thus can't be sold or passed off as a valuable item.\nHeightened (2nd) You can create objects of up to 1 Bulk. They last 8 hours.\nHeightened (3rd) You can create objects of up to 2 Bulk. They last 24 hours.",
      "castingTime": "1 minute",
      "range": "10 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can create objects of up to 1 Bulk. They last 8 hours.\nHeightened (3rd) You can create objects of up to 2 Bulk. They last 24 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:weaken-earth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eyKkLp8V55ydA64J",
      "slug": "weaken-earth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:2676774f784def8deda8ac45632a2e0bd70d187e095cd5c932da9821feb4e9fb",
    "translatableHash": "sha256:831247d36fd56c503dd9212aa7aa4f13ceb1d1c998aa45a99399a337034f816f",
    "data": {
      "schemaVersion": 1,
      "name": "Weaken Earth",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You weaken the bonds that hold earth and stone together. If your target has Hardness, you can affect one contiguous object, up to a 5-foot cube, or one creature, decreasing the Hardness by 5, to a minimum of 0. If the target lacks Hardness, it gains weakness 3 to physical damage. A target with a Fortitude modifier can attempt a Fortitude saving throw, negating the effect on a success.\nSpell Effect: Weaken Earth\nHeightened 2 Hardness decreases by 5, the size of a contiguous object increases by one 5-foot cube, and the weakness increases by 3.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature, unattended object, or hazard or structure made of stone or earth",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 2 Hardness decreases by 5, the size of a contiguous object increases by one 5-foot cube, and the weakness increases by 3."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 398,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Weaken Earth",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Weaken Earth",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Weaken Earth",
          "sourceId": "uD13zIE22foqmFgt",
          "name": "Spell Effect: Weaken Earth",
          "type": "effect"
        },
        "owner": {
          "sourceId": "eyKkLp8V55ydA64J",
          "name": "Weaken Earth",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dehydrate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f9m9DayyGy3meqUX",
      "slug": "dehydrate",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:bceaaa12d7e1d14740c009b70b6760edde19eb73f5da408773094e324b8aa782",
    "translatableHash": "sha256:33d274d5268cc5ec07edc760cff57948ac58f08bc771993128c1d47794e3092f",
    "data": {
      "schemaVersion": 1,
      "name": "Dehydrate",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You stir the inner fire of all things within the area, driving out moisture. All creatures in the area take 1d6 persistent fire damage with a basic Fortitude save; creatures with the water or plant traits get a result one degree of success worse than they rolled. The spell ends for a creature when its persistent damage ends.\nA creature affected by dehydrate attempts an additional Fortitude save at the end of each of its turns, before rolling to recover from the persistent damage. It can forgo this additional save if it consumed water or a similar hydrating liquid within the last round (drinking typically requires a single action).\nSuccess The creature takes no additional effect.\nFailure The creature is Enfeebled 1 until the end of its next turn.\nCritical Failure The creature is Enfeebled 2 until the end of its next turn.\nHeightened 2 The range increases by 10 feet, the burst increases by 5 feet, and the persistent fire damage increases by 3d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The range increases by 10 feet, the burst increases by 5 feet, and the persistent fire damage increases by 3d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 786,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "f9m9DayyGy3meqUX",
          "name": "Dehydrate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 941,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "f9m9DayyGy3meqUX",
          "name": "Dehydrate",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-counter",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fHawnhOHwzr4Mwr7",
      "slug": "elemental-counter",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-counter.webp"
    },
    "sourceHash": "sha256:782b88eaeaf059063e20820a05b40651a4813213885aa95bd0be2f30d67080e2",
    "translatableHash": "sha256:42b0cf017013c1c755d956626346bc116419dd43d8667f00b43b6ff6dce0cc97",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Counter",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger You or a creature within 60 feet rolls a saving throw against a spell with the earth, fire, metal, plant, water, or wood trait, or are targeted by a spell attack with such a trait.\nRequirements You have a spell slot from which you could Cast a Spell of the triggering spell's countering element; see text.\nEach element in the elemental cycle counters another, and you can use your elemental spells to protect against elements they counter. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell, using the rank of the spell you lost for the counteract rank. You can lose a plant or wood spell to counter earth, an earth spell to counter water, a water spell to counter fire, a fire spell to counter metal, or a metal spell to counter plant or wood.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:conductive-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fkUCvynklBGb4LaI",
      "slug": "conductive-weapon",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:c006de15bab8a423172be16a8e36b3e0b21efdd04f0e6f980202b053551f1b1b",
    "translatableHash": "sha256:422779c0da186b9648c9088b6b75d62b5dac31482d23813e0714ba6c026bd133",
    "data": {
      "schemaVersion": 1,
      "name": "Conductive Weapon",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You channel powerful electric current through the metal of a weapon, zapping anyone the item hits. The target becomes a +1 shock weapon. If any target of an attack with the weapon is wearing metal armor or is primarily made of metal, the electricity damage die from the shock rune is 1d12.\nSpell Effect: Conductive Weapon",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 metal weapon that is unattended or is wielded by you or a willing ally",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 318,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Conductive Weapon",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Conductive Weapon",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Conductive Weapon",
          "sourceId": "WdXLgPashH5in5eB",
          "name": "Spell Effect: Conductive Weapon",
          "type": "effect"
        },
        "owner": {
          "sourceId": "fkUCvynklBGb4LaI",
          "name": "Conductive Weapon",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:eat-fire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FWuLUKIbkJZjBiuA",
      "slug": "eat-fire",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/eat-fire.webp"
    },
    "sourceHash": "sha256:e91417b948c26946b5ce6f4847a488e0f1a43c2badc3dfe2ebf4b4467ed5e6ab",
    "translatableHash": "sha256:f6f0ae4fd342e8672af005e30aa76c7467eb6ad6cb2563a07f0d2b826f3de6e3",
    "data": {
      "schemaVersion": 1,
      "name": "Eat Fire",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Trigger You would take fire damage.\nYou consume and ingest fire, making it less harmful to you. You gain resistance 5 to fire damage until the end of the current turn. During the remaining duration of the spell, you can use the Belch Smoke action. The spell ends if you fall Unconscious, inhale, or exhale (this includes speaking).\nSpell Effect: Eat Fire\nBelch Smoke 1 You exhale what remains of the smoke, ending the spell and creating a smoke cloud in a 5-foot burst within 20 feet. All creatures within the smoke cloud are Concealed, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dispersed by a strong wind.\nHeightened 3 The resistance increases by 5.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The resistance increases by 5."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "FWuLUKIbkJZjBiuA",
          "name": "Eat Fire",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 416,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Eat Fire",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Eat Fire",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Eat Fire",
          "sourceId": "BGv44XBGtD4zOJBd",
          "name": "Spell Effect: Eat Fire",
          "type": "effect"
        },
        "owner": {
          "sourceId": "FWuLUKIbkJZjBiuA",
          "name": "Eat Fire",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 725,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "FWuLUKIbkJZjBiuA",
          "name": "Eat Fire",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:interposing-earth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HokKyQl5g655xx9U",
      "slug": "interposing-earth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/interposing-earth.webp"
    },
    "sourceHash": "sha256:d69bbe0acf21b7d647a21ab4bcc0bd638a29d5f5fa39b2425624859a8c23cf52",
    "translatableHash": "sha256:ae2103fd2e2c49b671837da764cc1335a42db6696ae6c18d1fc1f36c3b0d83d0",
    "data": {
      "schemaVersion": 1,
      "name": "Interposing Earth",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger You are the target of a Strike or would attempt a Reflex save against a damaging area effect.\nYou raise a flimsy barrier of earth to shield you from harm. This barrier is 1 inch thick, 5 feet long, 5 feet high, and must be placed on the border between two squares. This barrier appears between you and the source of the triggering effect and grants you standard cover against the triggering effect. If you would be damaged by the triggering effect despite this barrier, the barrier is destroyed, and the damage dealt to you is reduced by 2. The barrier remains in place for 3 rounds (or until destroyed). It has AC 5, 2 Hardness, and 5 Hit Points.\nHeightened (4th) The damage reduced increases to 8, the barrier's hardness increases to 8, and the barrier's Hit Points increases to 20.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The damage reduced increases to 8, the barrier's hardness increases to 8, and the barrier's Hit Points increases to 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:weave-wood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "idcBYnj4DUHL0IJt",
      "slug": "weave-wood",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:37eb51d57a41449706c16f1892f531a55b95a21b1a969414b4580147aed07cb0",
    "translatableHash": "sha256:e8e2deb7e617b8d51433530d685cb7dce03eb89a3184b554175cc5e6907e5fba",
    "data": {
      "schemaVersion": 1,
      "name": "Weave Wood",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "With a touch, you cause the target to break into fibrous strands that then weave themselves into a woven mundane object of the same Bulk or less, such as a basket, hat, shield, or mat. You can create up to 4 objects with one casting of this spell, providing their total Bulk doesn't exceed the Bulk of your target. The objects have Hardness 2 and 8 Hit Points.\nHeightened 1 Increase the maximum Bulk that you can target by 1 and the maximum number of objects you can create by 2.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 piece of unprocessed wood, reeds, or plant fiber of 1 Bulk or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the maximum Bulk that you can target by 1 and the maximum number of objects you can create by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wooden-fists",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IHjiWCouSacC5b3g",
      "slug": "wooden-fists",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:a9e352081c0dc2ccbb463dfd67c96e0e44655bc06a0fa7d7ae7bf013201d6a2d",
    "translatableHash": "sha256:93d03e837715c3c4ff089aa6c6efef6f36b08536bcf14aa4f7932a3ba47e7e38",
    "data": {
      "schemaVersion": 1,
      "name": "Wooden Fists",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Your arms and hands swell with new growth, transforming into tree trunks twice as big as their current size. Your fists deal 1d6 bludgeoning damage, lose the nonlethal trait, and have reach.\nHeightened (3rd) Your fists gain the magical trait and become a striking weapon, increasing the damage your fists deal to 2d6 bludgeoning.\nHeightened (7th) Your fists gain the magical trait and become a greater striking weapon, increasing the damage your fists deal to 3d6 bludgeoning. The duration is 10 minutes.\nHeightened (9th) Your fists gain the magical trait and become a major striking weapon, increasing the damage your fists deal to 4d6 bludgeoning. The duration is 1 hour.\nSpell Effect: Wooden Fists",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) Your fists gain the magical trait and become a striking weapon, increasing the damage your fists deal to 2d6 bludgeoning.\nHeightened (7th) Your fists gain the magical trait and become a greater striking weapon, increasing the damage your fists deal to 3d6 bludgeoning. The duration is 10 minutes.\nHeightened (9th) Your fists gain the magical trait and become a major striking weapon, increasing the damage your fists deal to 4d6 bludgeoning. The duration is 1 hour.\nSpell Effect: Wooden Fists"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 790,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wooden Fists",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wooden Fists",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Wooden Fists",
          "sourceId": "z2PYQCsDDoBZUwR5",
          "name": "Spell Effect: Wooden Fists",
          "type": "effect"
        },
        "owner": {
          "sourceId": "IHjiWCouSacC5b3g",
          "name": "Wooden Fists",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:buoyant-bubbles",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ILoXUDP84ru1hYLg",
      "slug": "buoyant-bubbles",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:6decaf318d71f12565522bafc25c59e8849491ef15383fb6c3c504b8a5a3c089",
    "translatableHash": "sha256:b3c7d8ced2294bdc8b8f187cf02f11f2fa21d953f3416c5633bbefed0a1bfe10",
    "data": {
      "schemaVersion": 1,
      "name": "Buoyant Bubbles",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a thin layer of foamy bubbles that adhere to the target, causing it to float in water and similar liquids. The target doesn't sink, even if it hasn't succeeded at a Swim check this round; an already-sinking target resurfaces with the bubbles' help over the course of 1 round. If on a plane where the water or liquid has a surface, the bubbles also prevent the target from diving beneath that surface unless it succeeds at a Fortitude save against your spell DC.\nHeightened (4th) You can target up to 5 creatures.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:needle-darts",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iYRDFxeVpJ5KIjmr",
      "slug": "needle-darts",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:e9b94e4856122e8a37e2150742d291dd74fc381d1cf94d77cd8317b737bd1a6d",
    "translatableHash": "sha256:af3bbad8181eea6af23482842d051f871b9db65919de43d8bb1ced886c20ac31",
    "data": {
      "schemaVersion": 1,
      "name": "Needle Darts",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You shape three needles out of a piece of metal in your possession and send them flying in a tight group toward one target. Make a spell attack roll against your target's AC. The needles deal 3d4 piercing damage and might cause bleeding.\nThe needles impart any special properties of the metal that forms them; for instance, cold iron needles deal additional damage to creatures with weakness to cold iron. All the needles are made of the same metal, and the metal returns to you after the attack.\nCritical Success The target takes double damage and 1 persistent bleed damage.\nSuccess The target takes full damage.\nHeightened 1 You send one additional needle, increasing the regular damage by 1d4 and increasing the persistent bleed damage on a critical hit by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 You send one additional needle, increasing the regular damage by 1d4 and increasing the persistent bleed damage on a critical hit by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:draw-moisture",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lXsFKdaOz9t9w11U",
      "slug": "draw-moisture",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/draw-moisture.webp"
    },
    "sourceHash": "sha256:da284a8c728c2c13ce30cad8f31e2a5eadfc4143c77d7738e61dc892d2443ca3",
    "translatableHash": "sha256:2f4cc90d2f0b3332db0b2c68b2a8d527061720c33d86d3f92e844badc4e37bd6",
    "data": {
      "schemaVersion": 1,
      "name": "Draw Moisture",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You draw water out of an object, possibly to clean up spills or quickly dry a soaked book or shirt. You draw up to a pint of water from the object; this dries objects of less than 1 Bulk. The water collects in a globule floating in your hand, which you can direct into a nearby container as part of Casting the Spell; otherwise, it splashes to the ground. Repeated applications of draw moisture can be used to dry larger objects, although doing so might take significant time. You can use this spell in especially humid environments to condense drinkable water from the air, though typically, you can't draw more than a few cups before depleting the ambient moisture.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-shrubs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MMIPT6jfwHfLPkm5",
      "slug": "wall-of-shrubs",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wall-of-shrubs.webp"
    },
    "sourceHash": "sha256:84ad728f18af111afcd14bc9c60e3fa2abef0bf3e99fb0f610ed6d825659b0bd",
    "translatableHash": "sha256:5d9854f4eb76f4b5eb932ee017972c975aa8db03d0df7bb33504d590bc6bb2ff",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Shrubs",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call forth a line of bushes native to the region to spring from the ground. The wall of shrubs stands in a line 60 feet long, is less than 5 feet tall, and is a foot thick, providing lesser cover.\nHeightened (3rd) The shrubs are 10 feet tall and 5 feet thick, provide standard cover, are difficult terrain, and have a Climb DC of 15. The duration increases to 10 minutes.\nHeightened (5th) As 3rd rank, but the shrubs provide greater cover and the duration is 1 hour. You can choose to form a ring of shrubs with a diameter of up to 30 feet instead of a line.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The shrubs are 10 feet tall and 5 feet thick, provide standard cover, are difficult terrain, and have a Climb DC of 15. The duration increases to 10 minutes.\nHeightened (5th) As 3rd rank, but the shrubs provide greater cover and the duration is 1 hour. You can choose to form a ring of shrubs with a diameter of up to 30 feet instead of a line."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:illuminate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qCkxBOLMCCXEjBWo",
      "slug": "illuminate",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:ffd2920d95c7d39d9191bf165f27dea123d573e9797bcca9ccdc4e13112487e3",
    "translatableHash": "sha256:e5fdd8363fe50668a7efc344e37f750dd5c98435ad75c70850d6bff6ecf42ba8",
    "data": {
      "schemaVersion": 1,
      "name": "Illuminate",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You light all non-magical light sources in the area that use fire to provide their light—such as candles, lamps, and sconces. You can choose to make the emanation smaller than its maximum, to any distance of your choice. If a light source is attended by an unwilling creature, that creature can attempt a Reflex save to snuff the light out before it becomes noticeable.\nHeightened 1 The maximum area increases by 10 feet.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The maximum area increases by 10 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tremor-signs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uMADQaASgYNsSDDM",
      "slug": "tremor-signs",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tremor-signs.webp"
    },
    "sourceHash": "sha256:70b55a3a9bc258d4b568051d8a68c01679c22def1f350ea163910f22cfb7ec83",
    "translatableHash": "sha256:207ecbeb50d681c9eda4b3b53409c8d0d584954ca0b6dea61f678e38c6dbd5f6",
    "data": {
      "schemaVersion": 1,
      "name": "Tremor Signs",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "earth",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You send a series of tremors, no longer than a short sentence of speech, toward your target. If the target is within range and connected to the same body of earth as you, the vibrations reach the target through the ground. You need neither line of sight nor line of effect, so a target on another floor of a building is a valid target.\nThe target can give a brief, vibrational response as a reaction, or as a free action on their next turn, but they must be within range to do so. If they respond, their response is delivered to you through tremors you feel, as with the original message. The tremors impart a clear meaning only if you and the target know that meaning, such as three tremors for a specific warning, two for another. Neither of you can impart a nuanced or new meaning using this spell.\nA creature that has tremorsense can feel the vibrations from this spell if the creature is within range of the vibrations at any point during their journey to any target.\nHeightened (4th) The spell can target up to 5 creatures.",
      "castingTime": "1 action",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vJZ83ehQiM906lea",
      "slug": "detect-metal",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:a59811e91816921a73144fffc731c4211010567773ec1d97e7073239965356a3",
    "translatableHash": "sha256:00d9b269b0f524f0ea7761c8482b344d8de7c161224c7da53dd1a9f62b38d8d2",
    "data": {
      "schemaVersion": 1,
      "name": "Detect Metal",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "detection",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You attune yourself to magnetic fields, becoming aware of the presence or absence of metallic objects, veins, and deposits within the area. You can choose to ignore metal you're fully aware of, such as the gear you and your allies wear and carry.\nYou detect metal hidden by illusions (such as Invisibility) only if the illusion has a lower rank than your detect metal spell. Against deceptive illusions, detect metal always notices an absence of metal when a non-metallic object is disguised as metallic. However, if the deception involves disguising one metallic object as another, such as pretending a copper coin is made of gold, detect metal registers only the presence of metal, not its type, even if the rank of your detect metal spell exceeds that of the illusion effect.\nHeightened (3rd) You can discern all types of metal you detected. Your spell can overcome deceptive illusory spells hiding one metal as another if the magic effect's rank is lower than that of your detect metal spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can discern all types of metal you detected. Your spell can overcome deceptive illusory spells hiding one metal as another if the magic effect's rank is lower than that of your detect metal spell."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 303,
        "uuid": "Compendium.pf2e.spells-srd.Item.Invisibility",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Invisibility",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility",
          "sourceId": "XXqE1eY3w3z6xJCB",
          "name": "Invisibility",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vJZ83ehQiM906lea",
          "name": "Detect Metal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:take-root",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WUNZizIe6rnVHGcr",
      "slug": "take-root",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:b7fd739fd726f967f27bdaaec378e0a305e38593a591dcab6bf73ba4d493e3ab",
    "translatableHash": "sha256:275c948ba8b9ef2cca78eb32dbbdb1d53af56e0aab29388f79029203b9104d17",
    "data": {
      "schemaVersion": 1,
      "name": "Take Root",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Roots sprout from the flesh of the target and coil across the floor or around objects, reinforcing their stance or grip. The targeted creature gains a +1 circumstance bonus to their Fortitude DC against attempts to Shove them and a +1 circumstance bonus to their Reflex DC against attempts to Disarm or Trip them. This bonus also applies to saving throws against spells or effects that would attempt to remove a held item from their grasp.\nSpell Effect: Take Root",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 218,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Shove",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Shove",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Shove",
          "sourceId": "7blmbDrQFNfdT731",
          "name": "Shove",
          "type": "action"
        },
        "owner": {
          "sourceId": "WUNZizIe6rnVHGcr",
          "name": "Take Root",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 336,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disarm",
          "sourceId": "Dt6B1slsBy8ipJu9",
          "name": "Disarm",
          "type": "action"
        },
        "owner": {
          "sourceId": "WUNZizIe6rnVHGcr",
          "name": "Take Root",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 386,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Trip",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Trip",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Trip",
          "sourceId": "ge56Lu1xXVFYUnLP",
          "name": "Trip",
          "type": "action"
        },
        "owner": {
          "sourceId": "WUNZizIe6rnVHGcr",
          "name": "Take Root",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 570,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Take Root",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Take Root",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Take Root",
          "sourceId": "ZGzhNFB3SM8owk85",
          "name": "Spell Effect: Take Root",
          "type": "effect"
        },
        "owner": {
          "sourceId": "WUNZizIe6rnVHGcr",
          "name": "Take Root",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fold-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yD819yTgbBFcCh5M",
      "slug": "fold-metal",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fold-metal.webp"
    },
    "sourceHash": "sha256:b3183eb5aae805e41fccfd290780d4110b7f4ed593688336c62a55a84f806304",
    "translatableHash": "sha256:82f3860cb9c280373648c4198fc52191cee22a7c447115955fb842df9dd5e386",
    "data": {
      "schemaVersion": 1,
      "name": "Fold Metal",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You bend the target object into a smooth metallic ball no larger than an egg. The target reverts to its original shape only when you Dismiss the spell, the duration expires, or if the ball touches water or fire, whichever comes first.\nCreatures that see the reshaped object can attempt a Perception check against your spell DC to notice the ball might not actually be what it seems. If the object is magical, it retains its magical auras but can't be worn, affixed, or Activated.\nHeightened (3rd) The spell duration becomes 1 hour.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 unattended metallic object up to 5 Bulk",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell duration becomes 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rousing-splash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zhDIiQlJmrd4UDNC",
      "slug": "rousing-splash",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/create-water.webp"
    },
    "sourceHash": "sha256:31bee18208922d6835fbf18fd94d1fcae91f88d1f0078140363eeeed430d831a",
    "translatableHash": "sha256:87411c301bc4678ec44e279ae8b74a7616ba99e2ee8145608b36d83d6a0ae6b8",
    "data": {
      "schemaVersion": 1,
      "name": "Rousing Splash",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You cause a splash of cold water to descend on an ally's head, granting some temporary vigor. The target gains 1d4 temporary Hit Points, which last for 1 minute. The target is then temporarily immune to the temporary Hit Points from rousing splash for 10 minutes. The target can also attempt an immediate flat check to recover from a single source of persistent acid or fire damage, with the DC reduction from appropriate assistance.\nHeightened 1 The amount of temporary Hit Points granted increases by 1d4.\nSpell Effect: Rousing Splash",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The amount of temporary Hit Points granted increases by 1d4.\nSpell Effect: Rousing Splash"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 561,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rousing Splash",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rousing Splash",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Rousing Splash",
          "sourceId": "IYvzqymG4xOhqFir",
          "name": "Spell Effect: Rousing Splash",
          "type": "effect"
        },
        "owner": {
          "sourceId": "zhDIiQlJmrd4UDNC",
          "name": "Rousing Splash",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:signal-skyrocket",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZrRhweQ7KQ0wKN3m",
      "slug": "signal-skyrocket",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/signal-skyrocket.webp"
    },
    "sourceHash": "sha256:82e1b9409ac9e9aeaa48f5920a719ef5f6f732b124434c3758cc10990eb0e4da",
    "translatableHash": "sha256:7d974864cc50476fb2df26847df98f658b8802f91ab495cb5353bf386a4901cb",
    "data": {
      "schemaVersion": 1,
      "name": "Signal Skyrocket",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "With a pinch of metallic powder and gunpowder, you call forth blistering red energy that shoots straight upward into the air and explodes, unleashing a crackling boom. Over time, you might even customize your own pattern and color for the skyrocket as you refine the spell.\nYou can't change the direction or distance of the rocket-it must go straight up, continuing up to the maximum range if possible. If the rocket explodes at its maximum height, the bright light can be seen up to 10 miles away, and the sound of the explosion can be heard up to 1 mile away under clear weather conditions.\nIf the rocket explodes in an enclosed space smaller than the full size of the burst, each creature in the area takes 1d10 sonic damage depending on the result of its Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Dazzled for 1 round.\nCritical Failure The creature takes double damage and is Blinded for 1 round.\nHeightened 1 The sonic damage increases by 1d10.",
      "castingTime": "3 actions",
      "range": "1,000 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "1d10",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The sonic damage increases by 1d10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 999,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZrRhweQ7KQ0wKN3m",
          "name": "Signal Skyrocket",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1144,
        "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Blinded",
          "sourceId": "XgEqL1kFApUbl5Z2",
          "name": "Blinded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZrRhweQ7KQ0wKN3m",
          "name": "Signal Skyrocket",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:magnetic-repulsion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "24U1b9K4Lj94cgaj",
      "slug": "magnetic-repulsion",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:8e090ff09cad785439ace232ecb37552fb884ec2053f2a281febf414c3e9b2f5",
    "translatableHash": "sha256:c450a396c665a5dc90d4823abe7a7a079fafab847dc20584a62a7ad6207be23e",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Repulsion",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You adjust your magnetic polarity, causing metal objects to jump and shudder away from you. Attacks made with metal objects against you take a -1 status penalty, and the squares adjacent to you are difficult terrain for creatures wearing metal armor. For creatures made entirely of metal, the penalty to their attack rolls is -2 and the squares adjacent to you are greater difficult terrain.\nWhile this spell is active, you require an additional Interact action before using a metal object (including to Strike with a metal weapon), and if you're wearing metal armor, you're Slowed 1.\nHeightened 3 The status penalty to attack rolls increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The status penalty to attack rolls increases by 1."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 585,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "24U1b9K4Lj94cgaj",
          "name": "Magnetic Repulsion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:clad-in-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7dBxguCNWCoPYxIi",
      "slug": "clad-in-metal",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:6175170d8795781e8ef3e0bb3139bbf55e85b554c2c97e86c33df228e9631f85",
    "translatableHash": "sha256:63c38f047c54072611e08e9faa9749c62a4c45fd0cfa166e2809e529d4b97e5d",
    "data": {
      "schemaVersion": 1,
      "name": "Clad In Metal",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You briefly swap the outer surface of the metal in an object with a suitable amount of a common precious metal from the Plane of Metal. You can instead choose an uncommon or rare metal if you have access to it or the GM has given you access to it.\nThe object functions as an item of that metal, provided the item would be 2nd level or lower. For example, you could make a dagger into a cold iron or silver dagger (2nd-level items) but couldn't make full plate into cold iron armor or silver armor (5th-level items). This imparts any special properties of the precious metal—a weapon clad in cold iron activates weaknesses to cold iron, for example—and suppresses any special properties of the original metal of which the item was made.\nThe spell neither changes the structural integrity of the item nor damages it. The object can pass a cursory inspection, but the magical effect is obvious to anyone who studies the item closely, so it doesn't alter the Price of the item if you attempt to sell it.\nHeightened 1 The maximum level of the precious metal increases by 2.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 metal object of 5 Bulk or less that's unattended or attended by a willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The maximum level of the precious metal increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magnetic-attraction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7dKtMehJ6YrXwJLR",
      "slug": "magnetic-attraction",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:e130a8e8af80b13da68e80a7f71ecb878ca3f40b1cb18cb87ce849e1b2c9578e",
    "translatableHash": "sha256:3d9d1a2adcceec3508ee76709cdbe7a8e5ed14b5cdad6efcf24d1b473b99fc09",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Attraction",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You adjust your magnetic polarity, plucking daggers from hands and coins from belts. The targeted objects fly to your location, letting you catch them easily in your hands, or dropping to the ground at your position, at your discretion. Unattended objects fly to you automatically. If you target secured objects or those in another creature's possession (such as sheathed weapons), you must attempt to Disarm the creature of the metal objects, making a spell attack roll instead of an Athletics check to do so.\nInstead of drawing the objects to yourself, you can polarize a single metal object within range, designating it as a lodestone and causing the metal objects to fly to it instead. The lodestone must be at least three times the total Bulk of the targeted metal objects. Objects will stick to the lodestone for 1 minute, though they can be wrenched away with an Interact action.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 10 metal objects with a total Bulk of 1 or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:splinter-volley",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Bc6QqTmFV4q7G7L0",
      "slug": "splinter-volley",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:576982c68f0a1bcc99ba8f615ab7ebcd6519a7431d4287f41d8b5f3ccc870e70",
    "translatableHash": "sha256:d95f92fe98cfdaa3976c1be590bf87f37d8b6ce9151d520d93bd6497975e6c5c",
    "data": {
      "schemaVersion": 1,
      "name": "Splinter Volley",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You launch a volley of splinters at your foes. Make a spell attack roll against a single creature. On a hit, the splinters deal 4d6 piercing damage. The splinters deal double damage on a critical hit and 1 persistent bleed damage. You can spend a third action while casting this spell to fire splinters at two different targets instead of one. These attacks each increase your multiple attack penalty, but you don't increase your multiple attack penalty until after you make both spell attack rolls for splinter volley.\nHeightened 2 Increase the damage dealt to each target by 4d6 and the persistent bleed damage by 1.",
      "castingTime": "2 or 3",
      "range": "60 feet",
      "target": "1 or 2 creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "4d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Increase the damage dealt to each target by 4d6 and the persistent bleed damage by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:burrow-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bgX4Zfhavahu8lyN",
      "slug": "burrow-ward",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/burrow-ward.webp"
    },
    "sourceHash": "sha256:68dc40066d2cb8041b240f4e621bf7f89c31963eb99cf39e8eb887146e6bb1d2",
    "translatableHash": "sha256:ba9fff9b69d305f0baf4af7d66dad2a6f14672e888fb11d7ad405e4a7028eeaf",
    "data": {
      "schemaVersion": 1,
      "name": "Burrow Ward",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You solidify the earth around you, hindering burrowing creatures. Creatures that can't burrow through stone can't burrow through the area. Such creatures already underground within the area must succeed at a Fortitude save or be ejected from the area toward the surface. Those who succeed are forced out of the area but can remain underground. Creatures that can burrow through stone treat the area as difficult terrain.\nHeightened (5th) You create a 30-foot emanation.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (5th) You create a 30-foot emanation."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gentle-breeze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "C0D2eqzTAhiKm4j9",
      "slug": "gentle-breeze",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:315223e56161e001c4326222de86ce480850eb0f6dfdf422dfb548fc7cb02140",
    "translatableHash": "sha256:e2192c53cdd51376d3ac1d00e9886bd1573d8aec47fa58d5e1feea04a684298a",
    "data": {
      "schemaVersion": 1,
      "name": "Gentle Breeze",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "A light, soothing breeze flows through the area, making it easier to rest and recover. Medicine checks attempted to benefit living creatures in the area get a +2 status bonus. Any living creature in the area also gets a +2 status bonus to saving throws against afflictions and, if it remains within the area for the full duration, regains 10 Hit Points. In addition, the cool breeze reduces the temperature effects of heat by one step for any creature in the area.\nSpell Effect: Gentle Breeze\nHeightened 2 The healing increases by 10 Hit Points.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "40 burst",
      "duration": "10 Minutes",
      "defense": null,
      "damage": [
        {
          "formula": "10",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 2 The healing increases by 10 Hit Points."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 475,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Gentle Breeze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Gentle Breeze",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Gentle Breeze",
          "sourceId": "A9T9NIummN3ShJwz",
          "name": "Spell Effect: Gentle Breeze",
          "type": "effect"
        },
        "owner": {
          "sourceId": "C0D2eqzTAhiKm4j9",
          "name": "Gentle Breeze",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:voice-on-the-breeze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "d18m4AAaxJQqUEh2",
      "slug": "voice-on-the-breeze",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:7b73e07302a647e4e0e4caa35b85091844c33d2cedc10a5777304a63ae1b01fc",
    "translatableHash": "sha256:422cd8abaea2fad9c73e55ffa60c4e985511a62ae4cc469722b78ff2cc23c07f",
    "data": {
      "schemaVersion": 1,
      "name": "Voice on the Breeze",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You whisper a secret message or sound into the wind, which carries it to a designated spot. The message travels to a specific 10-foot burst within range that's familiar to you, provided there's a path for the wind to follow between you and the area. The gentle breeze goes all but unnoticed until it reaches its destination, where it delivers its whisper-quiet message. The message is delivered regardless of who or what is present to hear it, even if no one receives it at all. Once the message is delivered, the spell ends.\nYour message can contain no more than 25 words, 1 round's worth of other sounds, or a simple rustling in the air at the target location. It moves at a speed of your choosing between 1 mile per hour and 1 mile per 10 minutes; when it arrives, the wind swirls around the area and whispers the full message. A voice on the breeze can't activate magical effects triggered by voices.\nHeightened (4th) The range increases to 1,000 miles, and the message can contain up to 100 words.",
      "castingTime": "2 actions",
      "range": "10 miles",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The range increases to 1,000 miles, and the message can contain up to 100 words."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tremorsense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EAYViUegegttJF1u",
      "slug": "tremorsense",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:c800b733de86eabb305d5b7c8add5de61ffd0162878748c3291428a13c0397ed",
    "translatableHash": "sha256:66bd4225e18c132654490ac82d0c96f252099ac9bca2a888d9ab1807230b153b",
    "data": {
      "schemaVersion": 1,
      "name": "Tremorsense",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You become aware of vibrations in the ground around you. You gain tremorsense as an imprecise sense with a range of 30 feet. As normal for tremorsense, you can detect a creature only if it's on the same surface as you and only if the subject is moving along (or burrowing through) the surface.\nSpell Effect: Tremorsense\nHeightened (3rd) The spell's duration is 1 hour.\nHeightened (5th) The spell's duration is 8 hours.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell's duration is 1 hour.\nHeightened (5th) The spell's duration is 8 hours."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 304,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tremorsense",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tremorsense",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tremorsense",
          "sourceId": "7cYUiOONB2lZfSaA",
          "name": "Spell Effect: Tremorsense",
          "type": "effect"
        },
        "owner": {
          "sourceId": "EAYViUegegttJF1u",
          "name": "Tremorsense",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:brine-dragon-bile",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eidmNlfl2DUVIclc",
      "slug": "brine-dragon-bile",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:0e3ccf94cfcfa581f785350a2cf33a5bb3f52a9885b959f16d3977931a4bf845",
    "translatableHash": "sha256:f3d1113aad7b163a53a89fbf3a24c8238210f9cadcf9263a5619ce81e4d55e7a",
    "data": {
      "schemaVersion": 1,
      "name": "Brine Dragon Bile",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "acid",
        "attack",
        "concentrate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger A creature within range takes damage from a slashing or piercing attack, or one that inflicts persistent bleed damage.\nYou spit a glob of caustic saltwater that stings the wounds of the creature. Make a ranged spell attack against the triggering creature's AC. On a hit, salt scours its open wound, dealing 2d6 persistent acid damage.\nHeightened 2 The persistent damage increases by 2d6.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the creature that took damage",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The persistent damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cleanse-air",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ElpqHitq4FqwLURV",
      "slug": "cleanse-air",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:9d9a5a00a3ba75fb16a74333123ebbd060900513e2da045c76411e1a0c3cfc82",
    "translatableHash": "sha256:ede2e2f466cd6fb25342bcd37d7150eb009bc97c03e67b4f611c2771db8c05af",
    "data": {
      "schemaVersion": 1,
      "name": "Cleanse Air",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You purify the air in the area, making it clean and breathable. The spell immediately removes inhaled poisons, pollution, and similar contaminants from the air. For the remaining duration, the spell prevents any further contamination from altering air in the area, including keeping toxic air bordering the area from coming inside. (This doesn't prevent contaminants from coming in after the spell ends.) This spell doesn't create air, so casting it underwater wouldn't create breathable air, nor would it affect any toxins within air suspended in the water\nHeightened (3rd) The area increases to 60 feet.\nHeightened (4th) The area increases to 120 feet.\nHeightened (6th) The area increases to 500 feet.\nHeightened (9th) The area increases to 1 mile.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The area increases to 60 feet.\nHeightened (4th) The area increases to 120 feet.\nHeightened (6th) The area increases to 500 feet.\nHeightened (9th) The area increases to 1 mile."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rubble-step",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FFBYPZEmAQoll09t",
      "slug": "rubble-step",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:871a9e1f008ccf5d6e5db7f33dd4d6dde066ed3cc957b0218f8503038cd0afa4",
    "translatableHash": "sha256:1b4c2765e6cef416067035a54dea7783f394799a2032e9adfcec3eb9e0841a6e",
    "data": {
      "schemaVersion": 1,
      "name": "Rubble Step",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "The target leaves behind a trail of shifting rubble that typically consists of stones, but you could choose another earthen material, such as loose sand or soil. For 2 rounds, when the target willingly moves out of a space, and if the target is in contact with the ground, the ground in that space becomes difficult terrain. The difficult terrain remains for the spell's duration.\nHeightened (4th) The target leaves difficult terrain behind for 1 minute instead of two rounds, and the spell's duration is 10 minutes.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The target leaves difficult terrain behind for 1 minute instead of two rounds, and the spell's duration is 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:propulsive-breeze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jlOAXuIOM3YxZKmn",
      "slug": "propulsive-breeze",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:5b0d4d0280b0f8d94cb70b1e66b1cba8dc81bceb204a0afff6a24124b125361f",
    "translatableHash": "sha256:d78bfa64ad23a447aeae36797800bf87c58d141e9efed64cba2c3d1d1010d803",
    "data": {
      "schemaVersion": 1,
      "name": "Propulsive Breeze",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "air",
        "manipulate",
        "move"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger An ally in range Strides or Leaps.\nYou create a current of wind at your ally's back, propelling their movement. When your ally's Stride or Leap ends, the current propels them an additional 15 feet in the same direction as the last 5 feet of their Stride or Leap.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 181,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "jlOAXuIOM3YxZKmn",
          "name": "Propulsive Breeze",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:helpful-wood-spirits",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kcYCWMd1NVCJ5Zbu",
      "slug": "helpful-wood-spirits",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/helpful-wood-spirits.webp"
    },
    "sourceHash": "sha256:49402cb2a73b2acdecee1e07feee58867cfaf4cad14c2b6534786b37b842d7a5",
    "translatableHash": "sha256:beb75f6f30fef46a5189330e63765430a3ee7a264c95de21b1f9468ee1dfe41c",
    "data": {
      "schemaVersion": 1,
      "name": "Helpful Wood Spirits",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Upon casting this spell, a cluster of little wood spirits tumbles into the area. They perform a simple task each round. These spirits are a magical echo of the true spirits that live on the Plane of Wood and can't be attacked, damaged, or otherwise interfered with. These spirits often look like kodama but can appear in any of the countless varieties of wood spirits that inhabit the Plane of Wood.\nChoose the kind of aid your wood spirits supply from the list below when you Cast the Spell. The first time each round you Sustain the spell, you can move the area occupied by the apparitions up to 10 feet and you can choose the kind of aid they provide this round.\n• Chores The wood spirits perform a minor manual task of your choice, such as cleaning, opening a door, picking up an unattended object, or carrying an object from one location to another. The spirits can't pick up or carry an object of greater than 2 Bulk.\n• Distract The wood spirits distract your foes, clambering all over their feet and bodies and being a nuisance. Creatures in the area are Off-Guard unless they succeed at a Reflex save.\n• Obstacle The wood spirits fill the area as a chaotic, bouncing mass. The area they occupy is difficult terrain.\n• Search The wood spirits Seek in the area they occupy, using your Perception check as their own. You learn anything they do from Seeking in this way.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1124,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kcYCWMd1NVCJ5Zbu",
          "name": "Helpful Wood Spirits",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1403,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "kcYCWMd1NVCJ5Zbu",
          "name": "Helpful Wood Spirits",
          "type": "spell"
        }
      }
    ]
  }
]
