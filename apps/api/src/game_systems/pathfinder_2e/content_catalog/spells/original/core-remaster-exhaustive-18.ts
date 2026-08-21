import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_18_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:phase-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5gophZ4AOKW4VW27",
      "slug": "phase-bolt",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phase-bolt.webp"
    },
    "sourceHash": "sha256:2e5bacccdeb410f0ddfe0d4cc7e7b22686406ccf65c6f3d7d5a18f7881d9c9bf",
    "translatableHash": "sha256:787224ab8e19385c8fa8b02b38a42b7da7305c39109fb6eeb63dc7c1d4f29ac7",
    "data": {
      "schemaVersion": 1,
      "name": "Phase Bolt",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You point your finger and project a bolt of magical energy that stutters in and out of phase until it reaches the target. Make a ranged spell attack roll against your target's AC; if the target has any circumstance bonuses to AC (such as from a shield or cover), reduce that bonus by 2 for this attack. On a success, you deal 3d4 piercing damage.\nCritical Success The target takes double damage.\nSuccess The target takes full damage.\nHeightened 1 The bolt's damage increases by 1d4.",
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
      "heightening": "Heightened 1 The bolt's damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:time-sense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BvNbDwFYaidKJG9j",
      "slug": "time-sense",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/time-sense.webp"
    },
    "sourceHash": "sha256:897af3c4601f8bf38538e58b51346a2d2295aea51160b4bcb7db92a1ab857aa3",
    "translatableHash": "sha256:dd552c4708ea1aa298664d5d789638ba659903efec85f5993aab602c3db22f1c",
    "data": {
      "schemaVersion": 1,
      "name": "Time Sense",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "When you Cast the Spell, you gain a perfect sense of time. You can learn exactly what time it is, down to the second. You can instead choose to gain a perfect sense of the calendar if you have knowledge in that area—if you're trained in Nature, you can learn exactly how long it is until sunrise and how many days until the next solstice. If you're trained in Astronomy Lore, you can learn precisely when any known predictable astronomical conjunction will begin and end, and so on.\nYou can gain a +1 status bonus to one attack roll, Perception check, saving throw, or skill check you take on the same turn you cast time sense that requires extremely precise timing. If you choose to gain this bonus, you can't gain it again for 1 hour.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:kinetic-ram",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sPHcuLIKj9SDaDAD",
      "slug": "kinetic-ram",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/telekinetic-ram.webp"
    },
    "sourceHash": "sha256:fad779e384dcbf19bf9c17555375008cf73578203b7dd6c0d839ce8a0a1d0618",
    "translatableHash": "sha256:20a3168364bc6ebeac6d24c3190683e37642876c4c4b7ec0c9514b3df7a81dc5",
    "data": {
      "schemaVersion": 1,
      "name": "Kinetic Ram",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Gathering kinetic energy, you either focus it in a straight line or disperse it as an encircling ripple. Any creature targeted by this spell must succeed at a Fortitude saving throw or be pushed 10 feet away from you (or 20 feet on a critical failure).\nThe spell's area or range and how many creatures it affects is based on how many actions you spend when Casting the Spell.\n1 The spell targets one creature within 15 feet.\n2 The spell targets one creature within 30 feet. The distance the target is pushed if it fails is doubled, and on a critical failure, the target is also knocked Prone and takes 1d6 bludgeoning damage.\n3 The spell targets all creatures in a 5-foot emanation.",
      "castingTime": "1 to 3 actions",
      "range": "varies",
      "target": "1 or more creatures",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 683,
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
          "sourceId": "sPHcuLIKj9SDaDAD",
          "name": "Kinetic Ram",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:warp-step",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sX2g6WFSQPNW9jzx",
      "slug": "warp-step",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/warp-step.webp"
    },
    "sourceHash": "sha256:3dcfd6a5fb77500c38b56f615000223f77a938b31661fcb8b56dacc713b57165",
    "translatableHash": "sha256:c228671f7e0e6bde8ae9fbbdc0209955f0ede1b5f1f8034b4e0434c2281aa118",
    "data": {
      "schemaVersion": 1,
      "name": "Warp Step",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "When you walk, the earth warps beneath your feet—your steps extend, distance contracts, and everything is just a little bit closer. You gain a +5-foot status bonus to your Speed until the end of your turn. You then Stride twice. You can use warp step to Burrow, Climb, Fly, or Swim instead of Stride if you have the corresponding movement type.\nSpell Effect: Warp Step",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
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
        "sourceIndex": 355,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Warp Step",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Warp Step",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Warp Step",
          "sourceId": "9Tl9jGUKoj0wS73d",
          "name": "Spell Effect: Warp Step",
          "type": "effect"
        },
        "owner": {
          "sourceId": "sX2g6WFSQPNW9jzx",
          "name": "Warp Step",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:empty-pack",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CQWTyDxiVSW4uRn7",
      "slug": "empty-pack",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9d0587982d6839319d31d1eba8f01d46e99684cc7e42791216bdf43bba3bf69e",
    "translatableHash": "sha256:3905e5a3cd09a15513880f9d93e96010d7c584a2c20badb8805fd7a455d71340",
    "data": {
      "schemaVersion": 1,
      "name": "Empty Pack",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You render every item inside the container you touch Invisible, although the container itself remains visible. The items within are Undetected to all creatures, though a creature can attempt to find an item by reaching into the bag, making an item hidden to them instead if they succeed. Additionally, the spell doesn't prevent the items from making protrusions in the bag, adding weight, making noise when jostling around, and so on. However, the spell prevents anything within the container from falling out if it's upended. Any object removed from the container becomes visible and remains visible even if returned to the container.\nHeightened (4th) The duration is until the next time you make your daily preparations.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 container of 2 Bulk or less",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration is until the next time you make your daily preparations."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 56,
        "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Invisible",
          "sourceId": "zJxUflt9np0q4yML",
          "name": "Invisible",
          "type": "condition"
        },
        "owner": {
          "sourceId": "CQWTyDxiVSW4uRn7",
          "name": "Empty Pack",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 178,
        "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Undetected",
          "sourceId": "VRSef5y1LmL2Hkjf",
          "name": "Undetected",
          "type": "condition"
        },
        "owner": {
          "sourceId": "CQWTyDxiVSW4uRn7",
          "name": "Empty Pack",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:loose-times-arrow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mLAYvbafVKfBgEhz",
      "slug": "loose-times-arrow",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/loose-times-arrow.webp"
    },
    "sourceHash": "sha256:a685a14212d2a7f30d341d0036da3b8dcee83da2018fdfcdd37565a2309bb825",
    "translatableHash": "sha256:4e6e613373496778df12430ad61021e3aa9959bef087a7402a0cf34e93b32ad8",
    "data": {
      "schemaVersion": 1,
      "name": "Loose Time's Arrow",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You pluck the time stream like a bow—pull one string back, release, and watch a creature fly. All affected targets are Quickened. They can use the extra action only to Step or Stride.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 6 creatures",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 122,
        "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Quickened",
          "sourceId": "nlCjDvLMf2EkV2dl",
          "name": "Quickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "mLAYvbafVKfBgEhz",
          "name": "Loose Time's Arrow",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:time-pocket",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0Rl3W7kiq9xVZRcr",
      "slug": "time-pocket",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/time-pocket.webp"
    },
    "sourceHash": "sha256:5c672dfc191026cbb883f4dcd359173c834ac4448a33abf59ad6c294e8fe6e2a",
    "translatableHash": "sha256:886d64de02d7167eafacd8ec96a883871da048be604581a95d65c12b153744e5",
    "data": {
      "schemaVersion": 1,
      "name": "Time Pocket",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You fling the target item forward in time and link it to the future of the creature holding it. The item disappears. When the spell ends, the item reappears with the creature that was holding it when you Cast the Spell. If the creature has enough hands free to hold the item, it appears in their hands. Otherwise, it falls to the ground in the creature's space.\nYou can Dismiss the spell, and it automatically ends if you're reduced to 0 Hit Points or cast time pocket again.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "one item of 1 Bulk or less that a willing creature is holding",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:temporal-twin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1bXLp8cyIKFjZtVx",
      "slug": "temporal-twin",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/temporal-twin.webp"
    },
    "sourceHash": "sha256:01c49ace08cdb3ec201e8a641a84c2f7a7d82c0e178fbeadbac49f1bad7f6aa1",
    "translatableHash": "sha256:5f804c9610fccce54adcceb5c6323460995f2b4faf0593c62b271c33635b4872",
    "data": {
      "schemaVersion": 1,
      "name": "Temporal Twin",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You pull a fleeting duplicate of your ally from the recent past. The duplicate appears in an unoccupied space of your choice within 30 feet of you and repeats a basic single action the target took since the end of your last turn, such as making a Strike or Interacting to pull a lever. Because the other basic single actions don't produce much of a result on their own, this is typically used for Strike and Interact, though occasionally it could be useful to have a temporal twin Stride through a potentially dangerous area to expose a hazard. Immediately after you cast this spell, the target ally spends a reaction to create the duplicate, makes any decisions, and rolls for the repeated action, such as choosing a target for a Strike and making the attack roll. If the ally doesn't have a reaction to spend, temporal twin fails. Use the duplicate's location for determining flanking, cover, and the like. Using this spell requires remembering what your ally did, and if you don't remember the details, the GM might not allow you to cast temporal twin.\nThis action can't be used for anything but a basic single action, nor can it use limited resources. The action can have a different target than the original action but must be very similar in form. For example, if the original action were to Interact to pull a lever, the time duplicate could pull a different lever but couldn't turn a doorknob or pick up an item from a table. Being pulled through time to create a twin destabilizes the target's timeline. Once an ally has been the target of temporal twin, they're temporarily immune for 1 day.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "one willing ally",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:focusing-hum",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "28kgh0JzBO6pt38C",
      "slug": "focusing-hum",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/focusing-hum.webp"
    },
    "sourceHash": "sha256:844bbde908ba2053f75f2203ad7478a0c4eb522fe7c5bdaa7d6792abd60f49dd",
    "translatableHash": "sha256:ec0f043010c12d48c686c35932792d508f63a351e2b2910bdaf3b5462307f953",
    "data": {
      "schemaVersion": 1,
      "name": "Focusing Hum",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You infuse the air around you with a sustained hum that allows creatures within it to resist distractions. The DC of any flat check to Cast a Spell while stupefied for creatures within the area is 2 lower. Confused creatures in the area don't attack anyone, including themselves, and instead lose the ability to speak coherently. You take a -2 penalty to Stealth checks to Hide and Sneak.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 209,
        "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Confused",
          "sourceId": "yblD8fOR1J8rDwEQ",
          "name": "Confused",
          "type": "condition"
        },
        "owner": {
          "sourceId": "28kgh0JzBO6pt38C",
          "name": "Focusing Hum",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 419,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Hide",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Hide",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Hide",
          "sourceId": "XMcnh4cSI32tljXa",
          "name": "Hide",
          "type": "action"
        },
        "owner": {
          "sourceId": "28kgh0JzBO6pt38C",
          "name": "Focusing Hum",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 468,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sneak",
          "sourceId": "VMozDqMMuK5kpoX4",
          "name": "Sneak",
          "type": "action"
        },
        "owner": {
          "sourceId": "28kgh0JzBO6pt38C",
          "name": "Focusing Hum",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:behold-the-weave",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3mQkAjexj6hhAnkR",
      "slug": "behold-the-weave",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/behold-the-weave.webp"
    },
    "sourceHash": "sha256:e9c1f201cfb42db3844f4dd2a9ea252f57c94f96a16560b8ff7df51bc1f16cfb",
    "translatableHash": "sha256:50d8a252e0e740c27734a845df3715b06c4697a8d018cfb3e23508b2caf11987",
    "data": {
      "schemaVersion": 1,
      "name": "Behold the Weave",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You behold the many timelines that weave around a creature, and in so doing, you make one more likely to occur. The target must attempt a Will save.\nCritical Success You can make neither heads nor tails of the target's timeline, and the target is unaffected.\nSuccess The target must commit to a single action that it will take at some point during its next turn: \"Stride toward Valeros,\" \"Cast shield,\" \"Strike Amiri with your jaws.\" That action is now locked in, and the creature must attempt it, even if the situation has changed—if the creature stated that it would Strike at Amiri with its jaws, it must try to do so. If the creature is entirely unable to fulfill the action it committed to—for instance, if it had only 1 action left and Amiri was out of the range of its jaws Strike—it loses the last action of its turn as it reels in a temporal paradox. The creature can choose to lock in a 2- or 3-action activity if it prefers to do so, but if it does, it loses all the associated actions if it can't perform the activity on its turn. If the situation changes oddly (perhaps the creature is forcibly teleported away and has no idea which direction is \"toward Valeros\" any longer), the GM determines what happens.\nFailure As success, but the creature must commit at least two of its actions for the next turn—\"I will Stride toward Valeros and then Strike with my claws.\" All of these actions are similarly locked in and can't be changed, but the creature can take them in any order.\nCritical Failure As failure, but the creature must commit all of its actions for the next turn.\nHeightened (7th) Instead of affecting a single target, the spell affects all enemies within a 30-foot emanation.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) Instead of affecting a single target, the spell affects all enemies within a 30-foot emanation."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rally-point",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "98gJvb8Xtn8OLIY7",
      "slug": "rally-point",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rally-point.webp"
    },
    "sourceHash": "sha256:2fe21526dbdcaab6481e9c397fea465e7a10c15a8aa260bb1dc593861b9d99c1",
    "translatableHash": "sha256:7c1dac3a63807544a33d17e5cd904099016aca2e64c6eba4448980abe185199f",
    "data": {
      "schemaVersion": 1,
      "name": "Rally Point",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You mark the area touched as a rally point. During the spell's duration, you can take a single action, which has the concentrate trait, to teleport to the rally point along with items you are wearing or holding. This teleportation fails if the area is occupied, if the rally point is more than 120 feet away, or if you try to bring along any other creature, even if it's in an extradimensional container. Once you teleport to the rally point, the spell's duration ends.\nHeightened (7th) You can designate up to four other creatures within 30 feet, in addition to yourself. Each of these creatures can teleport to the rally point once during the spell's duration by taking a single action, which has the concentrate trait. The spell's duration no longer ends once you teleport to the rally point, though you still can't teleport to the rally point again.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "",
      "area": "5 square",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You can designate up to four other creatures within 30 feet, in addition to yourself. Each of these creatures can teleport to the rally point once during the spell's duration by taking a single action, which has the concentrate trait. The spell's duration no longer ends once you teleport to the rally point, though you still can't teleport to the rally point again."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-spy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aq76wpgsVEENDyau",
      "slug": "shadow-spy",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:94699a88b48dd859ffd77e5a55c18f86e70f85915221cd06ea6a8c22fc5bbd71",
    "translatableHash": "sha256:d64ed6ecce9f84b4327eaeee3c843068aaaf4bc8f77b5011a462f36e612f430d",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Spy",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You mix blood, soil, and shadow together to form a half-real homunculus in the shape of a crow, sparrow, or other bird. You then command the bird to fly to a location within range and observe all around it. The bird has the statistics of a Homunculus, save that it has all of your senses and shares your Perception modifier. Once the spell's duration elapses or upon a trigger you set (which must be fairly simple—\"at dusk\" or \"when the judge leaves\"), the bird flies to your location. If you wring its neck and drink its blood, you learn all that it saw since its creation.",
      "castingTime": "1 minute",
      "range": "120 feet",
      "target": "",
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
        "sourceIndex": 243,
        "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Homunculus",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Homunculus",
          "package": "pf2e",
          "sourcePack": "pathfinder-monster-core",
          "documentType": "Actor",
          "compendiumKey": "Homunculus",
          "sourceId": "9wNjq9BirBoxyJVH",
          "name": "Homunculus",
          "type": "npc"
        },
        "owner": {
          "sourceId": "aq76wpgsVEENDyau",
          "name": "Shadow Spy",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bracing-tendrils",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NeoRkU7C4BIz8fUM",
      "slug": "bracing-tendrils",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8570083e5379cec9fdd79366b47193d024a85e993ae6806b2c864430a460e956",
    "translatableHash": "sha256:1fbf53b1b601d2c90ef507486282a0c863ee8f758cbdcbdc88e0cfc4507b07c5",
    "data": {
      "schemaVersion": 1,
      "name": "Bracing Tendrils",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Visible tendrils of force anchor your body to the ground, preventing unwanted movement. Whenever you're on the ground and a creature or effect attempts to forcibly move you from your space, you can use your spell DC in place of your Fortitude DC as the DC of the check to move you. If a creature wouldn't normally need a check to move you, it must succeed at an appropriate check (usually an Athletics check for physical movement) against your spell DC or you are unmoved; if an effect wouldn't normally need a check to move you, it must counteract bracing tendrils or you are unmoved. When a creature fails to move you in this way, you can choose to have the tendrils lash back and push them 5 feet away from you.\nWhile the tendrils anchor you in place when you come to a stop, they uproot easily to cooperate with your own voluntary movement, so you can still move freely while under the effect of the spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sea-of-thought",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tSosbMsftXcRaQgT",
      "slug": "sea-of-thought",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d999d3f06cf4e00e69a80343a782cb4695c58c0f1ddb51a2584ca33be1accbfd",
    "translatableHash": "sha256:7b4233bbaec0bf6489b0fcc7dd028fc481b99600cc68c85ae2462b504ae2097f",
    "data": {
      "schemaVersion": 1,
      "name": "Sea of Thought",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cover the area in a sloshing torrent of semi-solidified thought, roughly ankle high. The area becomes difficult terrain, similarly to a shallow bog. Each round that a creature starts its turn in the area, it must attempt a Fortitude save against the shifting waves of thought. On a failure, it takes a –10-foot circumstance penalty to its Speeds until it leaves the area, and on a critical failure, it is also knocked Prone.\nHeightened 1 The radius of the spell's area increases by 5 feet.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 1 The radius of the spell's area increases by 5 feet."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 425,
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
          "sourceId": "tSosbMsftXcRaQgT",
          "name": "Sea of Thought",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:moths-supper",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xabHqik5SoyDc5Db",
      "slug": "moths-supper",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/moths-supper.webp"
    },
    "sourceHash": "sha256:6be2d427c98ac1751a0d1d428e47fc6302aac9ad336d8993a41092f79c3b244d",
    "translatableHash": "sha256:a010fbecc674b6cc2fd7875ed6831ac631a9e2835f1b4b43b385d8dabe12e5a0",
    "data": {
      "schemaVersion": 1,
      "name": "Moth's Supper",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You sigh, and your breath transforms into delicate, black-winged butterflies and huge death's-head hawkmoths. They flutter about you briefly, and then range forth in search of sustenance—fresh-spilled blood, by preference, but rotting corpses, flowering plants, or even left-behind food will do in a pinch. They then return, perching on your hair or shoulders and whispering their secrets into your ears. This has three effects.\n• You heal 2d4 Hit Points every 10 minutes.\n• The first time during the duration when someone successfully Treats your Wounds, you regain an additional 4d4 Hit Points.\n• You gain an imprecise sense out to 30 feet that senses only freshly spilled blood and rotten flesh.\nHeightened 1 The amount of Hit Points healed every 10 minutes increases by 1d4 and the amount of Hit Points regained from the first Treat Wounds increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [
        {
          "formula": "2d4",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The amount of Hit Points healed every 10 minutes increases by 1d4 and the amount of Hit Points regained from the first Treat Wounds increases by 2d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 893,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Wounds",
          "sourceId": "1kGNdIIhuglAjIp9",
          "name": "Treat Wounds",
          "type": "action"
        },
        "owner": {
          "sourceId": "xabHqik5SoyDc5Db",
          "name": "Moth's Supper",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:false-nature",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5z1700cfG8Ybm0e6",
      "slug": "false-nature",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/false-nature.webp"
    },
    "sourceHash": "sha256:ca6b85c37a6bbb0d1c51c4398ff3688cf719d2318df5e6adf5795b07e59fd9de",
    "translatableHash": "sha256:d8fcb83fdd574dd6fd9794812901435db9db6abd3f5f1904b799796f663470b8",
    "data": {
      "schemaVersion": 1,
      "name": "False Nature",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an illusion that makes an object seem to be something entirely different. When you Cast this Spell, speak aloud a declarative statement that the target is a different, nonspecific object. Your statement can't presuppose any other facts. For instance, you could claim an object is \"a stone\" or \"an antidote,\" but not \"the Starstone\" or \"the antidote to the lethal poison you already drank.\" Creatures who previously observed the target receive an immediate Will save to disbelieve, but on a failure, the illusion temporarily rewrites their memory that the object was something different. A creature who failed their Will save, or didn't already see the item's original form, must Interact with the illusion as normal to receive a Perception check against the spell DC to disbelieve. When the spell ends, targets remember the object's true nature, even if they never disbelieved the spell.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "one unattended item or one item you're holding",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:morass-of-ages",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D6BcAoWFxHYTKwVZ",
      "slug": "morass-of-ages",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/morass-of-ages.webp"
    },
    "sourceHash": "sha256:647fdc752dbb967995c562054baabe1c15fd169b0e5e4ce744a7dd42e27282b1",
    "translatableHash": "sha256:cdbfaa727fef528f3b1668a2127bbdfe69a3abdfe73a0d7f865da47ef608de77",
    "data": {
      "schemaVersion": 1,
      "name": "Morass of Ages",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You surround yourself in temporal eddies that draw out time for those around you, making every step feel like an eternity endured. A creature in the emanation, or that later enters the emanation, must attempt a Fortitude save. The creature attempts this save only once and uses the same effect for the duration of the spell. Each time you Sustain the Spell, you can choose to increase the emanation's radius by 5 feet, to a maximum of 60 feet.\nCritical Success The creature is unaffected.\nSuccess Squares in the area are difficult terrain for the creature.\nFailure Squares in the area are difficult terrain for the creature, and the creature is Slowed 1 when it starts its turn in the area.\nCritical Failure As failure, plus the creature also becomes Restrained. The creature can attempt to Escape against your spell DC to remove the restrained condition.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 725,
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
          "sourceId": "D6BcAoWFxHYTKwVZ",
          "name": "Morass of Ages",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 906,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "D6BcAoWFxHYTKwVZ",
          "name": "Morass of Ages",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:implement-of-destruction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sUvTGELaggrBSgGm",
      "slug": "implement-of-destruction",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/implement-of-destruction.webp"
    },
    "sourceHash": "sha256:767959eafa971eb652cb8425c1e292287c606e8419a66530039106c9d19800e2",
    "translatableHash": "sha256:65c9600d763e0e28b8b932f479f3894572d43732a3d917b2226f876a6e20138f",
    "data": {
      "schemaVersion": 1,
      "name": "Implement of Destruction",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You solemnly declare that the target weapon will bring death to a foe, implanting an irrational fear of the weapon into the target enemy's mind. This link echoes at the forefront of the enemy's mind, forming a looming sense of omnipresent dread. The effect is based on the target enemy's Will save.\nCritical Success The target enemy is unaffected.\nSuccess The target weapon deals an additional 2d6 mental damage the first time it hits the target enemy before the end of the spell's duration.\nFailure The target weapon deals an additional 2d6 persistent mental damage to the target enemy. If the enemy is critically hit by the weapon, the enemy is Doomed 1 for as long as it takes this persistent mental damage.\nCritical Failure The target weapon deals an additional 4d6 persistent mental damage to the target enemy. If the enemy is critically hit by the weapon, the enemy is doomed 1.\nHeightened 2 Increase the mental damage by 1d6 on a success, and increase the persistent mental damage by 1d6 on a failure or by 2d6 on a critical failure.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 enemy, and 1 weapon that is either unattended or wielded by you or a willing ally",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 Increase the mental damage by 1d6 on a success, and increase the persistent mental damage by 1d6 on a failure or by 2d6 on a critical failure."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 747,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "sUvTGELaggrBSgGm",
          "name": "Implement of Destruction",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:soft-landing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TLmkJ8ga8s057HBp",
      "slug": "soft-landing",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soft-landing.webp"
    },
    "sourceHash": "sha256:5cb0d0ba39718d63b5b6b23f72065bc843648b43f828c7e2199ed79849f72e5a",
    "translatableHash": "sha256:e3080b01600cc6e4113e5adaa700d063bd28b86d4bcdb3d153d5fbba66ef275f",
    "data": {
      "schemaVersion": 1,
      "name": "Soft Landing",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You create a magical field that buoys any creature or object falling into the area, providing a harmless landing from any height. As you generally fall 1,500 feet per round, you can cast this spell while you are falling to ensure a safe landing, provided you can see your landing point and it's within range.",
      "castingTime": "2 actions",
      "range": "1 mile",
      "target": "",
      "area": "60 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stagnate-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3E1p58MNQMO4GAxt",
      "slug": "stagnate-time",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/stagnate-time.webp"
    },
    "sourceHash": "sha256:1067b5f06bcd5485ab5ce78fb859dc4a4c780fa7aec11fe934dc58d7c14d81f0",
    "translatableHash": "sha256:be9f4a40de5156dfe2b452624d9d10bc68de6c59def8389025a3d810c36b0b41",
    "data": {
      "schemaVersion": 1,
      "name": "Stagnate Time",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You examine the time stream in a particular area, then proceed to stick a few metaphorical pins into it, thickening and slowing down the flow of time until it rumbles along like a river of molasses. Any creature that begins its turn in the area must attempt a Will save.\nSuccess The creature is unaffected.\nFailure The creature is Slowed 1 this turn.\nCritical Failure The creature is Slowed 2 this turn.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 387,
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
          "sourceId": "3E1p58MNQMO4GAxt",
          "name": "Stagnate Time",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 515,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 2",
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
          "sourceId": "3E1p58MNQMO4GAxt",
          "name": "Stagnate Time",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:etheric-shards",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gasOL6a0WhOhUsgL",
      "slug": "etheric-shards",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/etheric-shards.webp"
    },
    "sourceHash": "sha256:e8454e8e5a7c546a9b8a3db351bf50309a4dc8bc8f31ea45c42cbbe840a25f47",
    "translatableHash": "sha256:b79b5e42b403aa2cf903aae36dc96e2ab858d0f16df72a6a55fe5a5c42310153",
    "data": {
      "schemaVersion": 1,
      "name": "Etheric Shards",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You reach out and sow glittering splinters of force throughout the area, otherworldly caltrops of will and ectoplasm. The area is difficult terrain, even to flying or incorporeal creatures. Any creature that moves through the area takes 1d4 piercing damage per square traversed, with a basic Reflex save made at the end of each move action they take through the area.\nHeightened 2 The spell's area increases by 5 feet, and the piercing damage increases by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The spell's area increases by 5 feet, and the piercing damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:quicken-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lETZeqBPoj2htGVk",
      "slug": "quicken-time",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/quicken-time.webp"
    },
    "sourceHash": "sha256:8156007ff8480eab3ce7fb039b740044c4fa2a9e7ae95484100969b4b1ab819b",
    "translatableHash": "sha256:efb9d7ee91cc37042166bad4d6b320abf2bbb102345fdd1cd612d016f3a2b0ef",
    "data": {
      "schemaVersion": 1,
      "name": "Quicken Time",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You speed up the time stream in an area, stretching and pulling it until time flows swift and wild. Any creature that begins its turn in the area is Quickened until the end of its turn and can use the extra action only to Stride or Strike. Unfortunately, speeding up time is much more difficult than slowing it down, and the effect is uneven and jittery, making accuracy between times painfully difficult; creatures inside the area are Concealed to those outside it, and vice versa.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 152,
        "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Quickened",
          "sourceId": "nlCjDvLMf2EkV2dl",
          "name": "Quickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "lETZeqBPoj2htGVk",
          "name": "Quicken Time",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 482,
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
          "sourceId": "lETZeqBPoj2htGVk",
          "name": "Quicken Time",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:suspended-retribution",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k0qJfSZH5xUEggwU",
      "slug": "suspended-retribution",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/suspended-retribution.webp"
    },
    "sourceHash": "sha256:5ccc40ad28b55f937532756bcafed25fe91b0651870a9f193ab5d47fe8374375",
    "translatableHash": "sha256:cb96c9feaf836d12e2e8885f16a3d1fdea1f59d39344fe51f5208a10e60a1f85",
    "data": {
      "schemaVersion": 1,
      "name": "Suspended Retribution",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "All life dances one step from the precipice, one heartbeat from disaster. You open your eyes wide and see doom waiting in the wings, then invite it to step forward. A spectral omen of disaster appears above the target's head—traditionally, this is a downward-pointing sword, but some spellcasters report seeing a hangman's noose or a grinning skull instead. When you Cast this Spell, pick one of the following triggers.\n• The target moves more than its Speed in a single round.\n• The target makes more than one Strike in a single round.\n• The target Casts a Spell.\n• The target uses a specific skill you name.\n• The target uses a specific ability you name.\nThe target uses a specific ability you name. If the target takes the triggering action, the portent of doom activates—the sword strikes down, the noose loops around the target's neck, the skull bares its fangs—and the target takes 70 mental damage with a basic Reflex save. The target instinctively knows which action will trigger the omen and can ward off the omen by spending a total of 3 actions, which have the concentrate trait, to pray, make signs against doom, or similar apotropaic actions. These actions need not be consecutive. After the creature spends the actions, the spell ends.\nHeightened 1 The damage increases by 10.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "70",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:poltergeists-fury",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uhEjKSFdEhXzszh6",
      "slug": "poltergeists-fury",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/poltergeists-fury.webp"
    },
    "sourceHash": "sha256:5ab336f2cd4c235eb88fb6373032a051db0a1608d4a04a7d55ee0a014b775d0f",
    "translatableHash": "sha256:3740782ffdbfc2b8557993b7bcb938537c70852e7f40e225dad0f1c63b3accde",
    "data": {
      "schemaVersion": 1,
      "name": "Poltergeist's Fury",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Your fury spills over in a telekinetic storm of terrifying proportions. Any loose, unattended objects of 1 Bulk or less within range are picked up and begin to orbit you at breathtaking speeds. All creatures in the area take 6d4 piercing damage with a basic Reflex save. Each time you Sustain the spell, you can increase the radius of the storm by 10 feet, to a maximum of 100 feet. The storm moves with you and provides you with lesser cover, though you can't use this cover to hide or sneak. Allies within the storm who roll a success on their Reflex save against your poltergeist's fury get a critical success instead, as you attempt to avoid hitting them.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:awaken-entropy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZMvplR106Jxl7B15",
      "slug": "awaken-entropy",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/awaken-entropy.webp"
    },
    "sourceHash": "sha256:b50ae3a1a9b22bb6cab4ec5342d05dacddca47749559541d4aad54fd4b6fa19f",
    "translatableHash": "sha256:7369fc2873045deabc0894449d4ebf9cb27a471d15c47983e37f5220d4e9c566",
    "data": {
      "schemaVersion": 1,
      "name": "Awaken Entropy",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "All things age, all things die, and at the end of days, even the universe will grow quiet and still. You awaken the cosmic principle of entropy, accelerating time in an area—flesh falters, plants shrivel, and even stone begins to crumble. Any creature that enters or begins its turn in the area takes 8d6 void damage with a basic Fortitude save, or 8d6 force damage if the creature normally doesn't take void damage, such as if the creature is a construct or undead. Even beings such as fiends with unlimited lifespans can be worn away by entropy.\nThe first time you Sustain the Spell on each subsequent turn, the entropic zone grows stronger in addition to having its duration increased. The radius of the burst increases by 10 feet (to a maximum of 40 feet), and the size of the damage dice increases by one step (from d6 to 8d8 void damage, then to 8d10 void damage, and finally to 8d12 void damage).\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "8d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:time-beacon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "G56DJkxlUjFv0C4Z",
      "slug": "time-beacon",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:80feabd1ea3861578f9291107b63d50b03148086d1ae92c794f5c192567fb58b",
    "translatableHash": "sha256:6c1a412c00c23a37dd96fc7cdc30ed7f41fb18617fc84c091e511284ae5ceb4d",
    "data": {
      "schemaVersion": 1,
      "name": "Time Beacon",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a beacon in time to return to it if things go wrong. You can cast time beacon only on your turn. Keep careful track of everything that happens this turn after you cast time beacon. At the end of your turn, you can choose to rewind time back to just after you cast time beacon, removing all effects of your turn since then. Curses, traps, and other harmful effects that happen during your turn might prevent you from returning to the beacon if they're powerful enough. If you were affected by any harmful effects during your turn after casting time beacon, in order to return to your beacon, time beacon attempts a counteract check against each such effect. If it fails at any of these checks, you can't return. After returning to the time beacon, the spell ends.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:momentary-recovery",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ggtZTxeyEnDYbt6f",
      "slug": "momentary-recovery",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/momentary-recovery.webp"
    },
    "sourceHash": "sha256:25047cc66a7fffe0a744491a522da7c37587124156d75bdcd7b6a67c49842a97",
    "translatableHash": "sha256:159e0f6bc78dfadbd968939f66505c862062a47aaf295d2efab6e28a4ab5f4ff",
    "data": {
      "schemaVersion": 1,
      "name": "Momentary Recovery",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You instantly teleport yourself and any items you're wearing or holding from your current space to a clear space within range that you can see. If this teleportation would bring another creature with you—even if you're carrying it in an extradimensional container—the spell is lost. After you vanish but before you arrive, you can take up to 2 actions (or the number of actions you spent to cast momentary recovery, if it was fewer than 2 actions). You can't target any other creatures or objects with anything during these actions and any effect with a duration that you create during these actions ends immediately when you arrive. After you arrive, you are Slowed 1 until the end of your next turn.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
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
        "sourceIndex": 672,
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
          "sourceId": "ggtZTxeyEnDYbt6f",
          "name": "Momentary Recovery",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-bombardment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uc4I1diSSX6XYzb3",
      "slug": "telekinetic-bombardment",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2ab66bb83142209bbbfb9d27cd375c505f3f670d4b7968cd1fc0081030fb1460",
    "translatableHash": "sha256:47b6546905e3d72f5d6b7350fe944c468e71dabb3adf97ff8e0e7ffcfa17d078",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Bombardment",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You grasp a piece of the landscape—such as a tree, carriage, or piece of masonry—and lob it in your foe's direction. Your missile crashes down in either a 10-foot type:burst (for most missiles) or a 30-foot type:line (for something long and tall, like a tree or a ship's mast), dealing 14d6 bludgeoning damage and turning its area into difficult terrain as it breaks into rubble. All creatures in the area must attempt a Reflex save. If the area is a line, it doesn't have to start from your square but can instead start anywhere in range, as long as the entire area remains within range.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is knocked Prone.\nCritical Failure The creature takes double damage, is knocked prone, and is Stunned 1.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "14d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 868,
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
          "sourceId": "uc4I1diSSX6XYzb3",
          "name": "Telekinetic Bombardment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1018,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "uc4I1diSSX6XYzb3",
          "name": "Telekinetic Bombardment",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-irii",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4ONjK2hoMBmuAAyk",
      "slug": "summon-irii",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-irii.webp"
    },
    "sourceHash": "sha256:1a52cdcfb5d5bd7e69b2cf19c712c7621b1c6dd6ba8c1f54e931100a97cbe4eb",
    "translatableHash": "sha256:5e719b21b9aad4180b1a2ca276952525d0d119fdd0364f1d6b83f28977eeb7d3",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Irii",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cast your spell, whisper your words of power, and find that an irii is already here—indeed, they've always been here, and always were, and always will be. The temporal being occupies the space of a Medium creature and has a Speed of 60 feet and a fly Speed of 60 feet. When you Cast this Spell, choose whether it summons a fate irii or a fortune irii.\n• Fate The fate stands before you with its stained-glass wings and animal-headed gaze, floating eyes circling about it.\n• Arrive (fortune, prediction) Decree the Immutability of Time While within 30 feet of the fate, you and your allies who roll below 10 on a d20 for an attack roll, Perception check, saving throw, or skill check get a 10 instead.\n• Depart (misfortune, prediction) Observe the Inevitability of Destiny Each enemy within a 30-foot type:emanation must attempt a check (will, options:area-effect, traits:misfortune,prediction) save. If a creature fails its save, until the end of its next turn, any time it rolls above 10 on a d20 for an attack roll, Perception check, saving throw, or skill check, it gets a 10 instead.\n• Fortune The fortune stands before you with its golden horns and moth-scale wings, a sly smirk on its elfin face.\n• Arrive (fortune, prediction) Decree the Chaos of Infinity While within 30 feet of the fortune, you and your allies roll twice and take the higher roll on all damage rolls, Perception checks, and saving throws.\n• Depart (misfortune, prediction) Sunder Eternity's Authority Each enemy within a 30-foot type:emanation must attempt a check (will, options:area-effect, traits:misfortune,prediction) save. A creature that fails its save must roll twice and take the lower result on all damage rolls, Perception checks, and saving throws until the end of its next turn.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:falling-sky",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vm9O7ne48NM72yrJ",
      "slug": "falling-sky",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/falling-sky.webp"
    },
    "sourceHash": "sha256:79f65ddc17021c65bc5db779d37f6571d5f1ad51ce9d2fdab2c7d7517008ac4e",
    "translatableHash": "sha256:bbc14baa188384b3258f5a5e744b7c316482f31123ffddf2ff021cfd78dac917",
    "data": {
      "schemaVersion": 1,
      "name": "Falling Sky",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Area 60-foot tall, 30-foot radius cylinder\nExtraordinary telekinetic pressure smashes down through the area, battering creatures within it to the ground. All flying creatures in the area descend to the bottom of the spell's area, taking twice as much bludgeoning damage as if they had fallen the distance moved, to a maximum of 60 falling damage if they fall 60 feet. They take this falling damage even if the spell's area is entirely in the air and they don't hit the ground, as they concuss against the bottom of the spell's area at great speed. Creatures on the ground and within the spell's area, including flying creatures forced to the ground, must attempt Fortitude saves.\nCritical Success The creature is unaffected, and if it was flying, it isn't knocked Prone even though it took falling damage.\nSuccess The creature is knocked prone.\nFailure The creature is knocked prone and Stunned 2.\nCritical Failure The creature is knocked prone and stunned for 1 round.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 cylinder",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 825,
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
          "sourceId": "vm9O7ne48NM72yrJ",
          "name": "Falling Sky",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1039,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "vm9O7ne48NM72yrJ",
          "name": "Falling Sky",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bilocation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HHCgEEkeeShVQf8d",
      "slug": "bilocation",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6240e0ecc31f581e6beb38d6c1bc366ab61cef0f3f0407ec9cacd3c0bde3bf4a",
    "translatableHash": "sha256:5b7b26383950b66b6e3ad34fc8ff077f51db997b595e69708392be0cdeb3dbc9",
    "data": {
      "schemaVersion": 1,
      "name": "Bilocation",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You exist in two places at once. When you Cast the Spell, another copy of yourself appears in an adjacent square. During bilocation's duration, whenever you act, you can choose which of your selves does so, and whenever one of you uses a move action, you can both move. Your two selves share Hit Points, and any condition or effect on one affects both. If both of your selves are in the area of the same effect, or targeted by the same multitarget effect, you are only affected once. Even if you are reduced to 0 Hit Points or killed, both selves remain until the duration expires. Your link continues at any distance, even across planar boundaries. You can Dismiss the Spell, and if you do so, you choose which of the selves vanishes and which becomes you, allowing you to extricate one of your selves from a dangerous situation.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frosts-touch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WFSazGLCUuPsBv1p",
      "slug": "frosts-touch",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a87cd072fb687721d59c0a46d8b3738319ed49d9d31da2ce77a43a7a2140f0d3",
    "translatableHash": "sha256:e1ee0d52cb275d4ac07c766efa7a14fc7873965dcf8e3477399eb84a92311b70",
    "data": {
      "schemaVersion": 1,
      "name": "Frost's Touch",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cantrip",
        "cold",
        "concentrate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "Your gelid shard drinks down nearby heat in a futile attempt to sate itself and achieve a level of frigid cold unheard of in the Universe. This allows you to cool a drink, make a hot pot safe to handle, or other, similar minor effects. Once cooled, the object's temperature is subject to its environment as usual. You can also solidify ambient moisture into a solid object; this temporary object is of negligible Bulk, made of non-magical ice. The object looks crude and artificial and is extremely fragile—it can't be used as a tool, weapon, or locus or cost for a spell. Once created, it melts as normal for ice for the ambient conditions.\nHeightened (3rd) You can create simple objects of ice with up to 1 Bulk and of a level not exceeding 1. Such objects must be rigid. You can only have one such object created at a time; if you create another, the previous object melts instantly.\nHeightened (5th) Items you create can be up to 4 Bulk and 4th level.\nHeightened (7th) Items you create can be up to 8 Bulk and 8th level.\nHeightened (9th) Items you create can be up to 20 Bulk and 12th level.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can create simple objects of ice with up to 1 Bulk and of a level not exceeding 1. Such objects must be rigid. You can only have one such object created at a time; if you create another, the previous object melts instantly.\nHeightened (5th) Items you create can be up to 4 Bulk and 4th level.\nHeightened (7th) Items you create can be up to 8 Bulk and 8th level.\nHeightened (9th) Items you create can be up to 20 Bulk and 12th level."
    }
  }
]
