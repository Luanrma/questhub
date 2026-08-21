import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_18_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:mirror-door",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "9rQvZZQbn1IUfr77",
      "slug": "mirror-door",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:5176c12fa1720585d447e7c309dbe90d946e58feef195c14b721221f2a29398e",
    "translatableHash": "sha256:daff8191e530bfe78f648201977d8f2ce4a920130011507060fe869bb764b9c0",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Mirror Door",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap",
        "visual"
      ],
      "description": "The reflection of a wall shows a phantom door where none exists. This door can only be manipulated while viewed through the mirror's reflection.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 5,
        "details": ""
      },
      "disable": "check (thievery, dc:18, name:Open the Door, traits:action:disable-a-device) to open the door while viewing the reflection",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets when the door is shut.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "dXHZxCKOYXB0IsAL",
          "name": "Appear",
          "kind": "reaction",
          "description": "Trigger A creature views the wall through a mirror's reflection\nEffect A door appears in the mirror's reflection of the wall. The triggering creature can open and manipulate this door only as long as they view it through the mirror and only by succeeding at a check (thievery, dc:18, name:Disable the Trap, traits:action:disable-a-device) check to disable the trap.",
          "traits": [
            "arcane",
            "illusion"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shuffling-hall",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "NGV18Lovi4HsjJOc",
      "slug": "shuffling-hall",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:deab9f7d7e78693c3eb13e17486ee544ceeee6fbad0c2055c6bb97b64a18c58b",
    "translatableHash": "sha256:40021224fb911fe03bd19760e445ae04b3c6e47fc2bb2c8176cd90c6d3dd0b34",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Shuffling Hall",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mechanical",
        "trap"
      ],
      "description": "Four pressure plates along this mirrored hall rotate vertically when stepped on, sending a creature on the pressure plate tipping into an adjacent featureless room while simultaneously replacing the pressure plate and walls in the hall. Each pressure plate dumps creatures into a different room.",
      "armorClass": 18,
      "hitPoints": 12,
      "hardness": 4,
      "stealth": {
        "modifier": 5,
        "details": ""
      },
      "disable": "check (thievery, dc:12, name:Deactivate a Plate, traits:action:disable-a-device) to deactivate one pressure plate",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 2,
        "reflex": 5,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "mLNLTTi0YhxCWKWq",
          "name": "Flip",
          "kind": "reaction",
          "description": "Trigger A creature steps on a pressure plate\nEffect The floor and adjoining wall rotate up and over on a central axle, tipping the triggering creature into an adjacent featureless room and simultaneously replacing the pressure plate and wall with another set on the same axle. The triggering creature is pushed into an adjoining room, takes 1d8 bludgeoning damage, and lands Prone. A creature who succeeds at a check (reflex, dc:19, traits:damaging-effect) save takes no damage and rolls out of the way of the trap, returning to the space they were in before stepping on the pressure plate.",
          "traits": []
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 436,
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
          "sourceId": "mLNLTTi0YhxCWKWq",
          "name": "Flip",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:confounding-portal",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "cZwTVO2KF85Ak4o6",
      "slug": "confounding-portal",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:f795991a6b688521d221d7a1bf175b169dd9bae5bad4aad5cb1c7b4ab3884c24",
    "translatableHash": "sha256:137adaab759bbf2bf110e962b8d116e3d1cb160c905c80cb2927495269c81076",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Confounding Portal",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "illusion",
        "magical",
        "mental",
        "trap"
      ],
      "description": "Tiny runes carved around a doorframe or on a hall's walls surreptitiously confound creatures into circling the room or hallway they attempted to exit or pass through.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 6,
        "details": ""
      },
      "disable": "check (thievery, dc:17, name:Scratch Out Runes, traits:action:disable-a-device) to scratch out the runes, or check (arcana, dc:16, name:Destroy the Runes) to destroy the runes",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "K7zv6GnWMFnvcN2z",
          "name": "Confounding Misdirection",
          "kind": "reaction",
          "description": "Trigger A creature passes through the rune-carved doorway or hallway\nEffect The creature is Confused by the illusions and directed back into the room they attempted to exit through another doorway or back to the hallway's beginning. This feels no different to the triggering creature than walking through the doorway or hallway, and onlookers are similarly befuddled. A creature who succeeds at a check (will, dc:19) save resists this illusion and exits the room or proceeds down the hall without being misdirected.",
          "traits": [
            "arcane",
            "illusion",
            "mental"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 143,
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
          "sourceId": "K7zv6GnWMFnvcN2z",
          "name": "Confounding Misdirection",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:reflected-desires",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "71Dv5WjrNOzy1Jtr",
      "slug": "reflected-desires",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:3977b5fd3e95a2fa558be715b4de196ad305a1fa3cffc5980f525d0b1359e716",
    "translatableHash": "sha256:922a7644143985670c28638955aa232f1cf7607c871fa84185af11079866404d",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Reflected Desires",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "mental",
        "trap",
        "visual"
      ],
      "description": "This mirror reflects the viewer's deepest desires.",
      "armorClass": 13,
      "hitPoints": 24,
      "hardness": 6,
      "stealth": {
        "modifier": 7,
        "details": "(0 to notice the mirror)"
      },
      "disable": "check (thievery, dc:18, name:Shroud the Mirror, traits:action:disable-a-device) (trained) to shroud the mirror without looking at it, or check (occultism, dc:17, name:Erect Mental Barriers) (trained) to erect mental barriers",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 10,
        "reflex": 4,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "1MnFDLD3UqAsLnmn",
          "name": "Tempt",
          "kind": "reaction",
          "description": "Trigger A creature looks into the mirror\nEffect The triggering creature sees themselves enjoying their deepest desires in the mirror's reflection, becoming Fascinated (check (will, dc:20, options:inflicts:fascinated) negates). This fascination ends automatically when the mirror is broken or covered up.",
          "traits": [
            "mental",
            "occult",
            "visual"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 205,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fascinated",
          "sourceId": "AdPVz7rbaVSRxHFg",
          "name": "Fascinated",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1MnFDLD3UqAsLnmn",
          "name": "Tempt",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:disorienting-illusions",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "RHjdD47Lr9JrXWes",
      "slug": "disorienting-illusions",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:40d8dc746ee18a42c4054e1203f5f73464401976881c88e556970429d4b13961",
    "translatableHash": "sha256:171eebd306a8a0f6436466facac5268d3965dce07b67c6f656d0e710ad33d6e2",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Disorienting Illusions",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "illusion",
        "magical",
        "trap",
        "visual"
      ],
      "description": "Illusions cloaking this chamber cause its walls and all its contents to appear tilted, irregular, and in motion.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 10,
        "details": ""
      },
      "disable": "check (crafting, dc:17, name:Calculate the Room's Dimensions) (trained) to calculate the room's dimensions despite the illusions, or Dispel Magic (1st rank; counteract DC 17) to counteract the illusions",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 minute.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "ZJEa0ERwBrbsozjF",
          "name": "Disorient",
          "kind": "reaction",
          "description": "Trigger A creature enters the room\nEffect Illusions cause the appearance of the room and the objects inside it to constantly warp, shift, bend, and distort for 1 minute. Each creature in the room while it's distorting must attempt a check (perception, dc:17) check.\nCritical Success The creature disbelieves the illusions and is unaffected.\nSuccess The creature disbelieves the illusions but still sees them. It treats the room as difficult terrain.\nFailure The creature is fooled by the illusions. It treats the room as difficult terrain and becomes Sickened 1. As long as it remains in the room, it can't reduce its sickened value below 1.\nCritical Failure As failure, but each time the creature Archive attempts a move action, it must succeed at a check (flat, dc:5) or they lose the action, and on a critical failure, it also falls Prone.",
          "traits": [
            "arcane",
            "illusion",
            "mental",
            "visual"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 680,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZJEa0ERwBrbsozjF",
          "name": "Disorient",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 1041,
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
          "sourceId": "ZJEa0ERwBrbsozjF",
          "name": "Disorient",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 134,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "RHjdD47Lr9JrXWes",
          "name": "Disorienting Illusions",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shrinking-hall",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "dbbWRZqE509Ac4bH",
      "slug": "shrinking-hall",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:b6b437259471b6ad2e821bd2d630c28d01b5a6b7e68a9d939ed0790a5386896b",
    "translatableHash": "sha256:384368c30f598bcc7e111a70fa91c557f749b5c861324f2dc915215c9a30a1b9",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Shrinking Hall",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mechanical",
        "trap"
      ],
      "description": "This hallway is designed to shrink as creatures traverse it, making access to the door at the hall's end impossible.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 8,
        "details": ""
      },
      "disable": "check (thievery, dc:21, name:Jam the Scales, traits:action:disable-a-device) (trained) to jam the scales built into the floor",
      "isComplex": false,
      "routine": "",
      "reset": "After 10 minutes without weight being placed on this hall's floor, this trap resets, returning the hall to its original size.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "jGLOByWSFpkvum9N",
          "name": "Shrink",
          "kind": "reaction",
          "description": "Trigger 100 pounds of weight or more is placed on the hallway's floor\nEffect The hall's last 40 feet of walls angle inward, causing the hall to shrink and contract down, reaching 6 inches in height and width at the hall's far end and completely blocking access to the hall's exit door for anything but a Tiny creature Squeezing.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:false-floor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "IyE7jYfltfPSYzNy",
      "slug": "false-floor",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:d0fad607d4c493a32d05062449076e9f0019f269d65a1753590ad7e314f70584",
    "translatableHash": "sha256:534ac64a52e5e0f2e1c074e013c4f40b79712ab90870ba4ce99d4b2449eda004",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "False Floor",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "illusion",
        "magical",
        "trap"
      ],
      "description": "The floor in this chamber is an illusion, which conceals a 40-foot drop to the true floor below. Additionally, the area beneath the floor is magically silenced-no sound is audible within nor does sound leave this space.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 13,
        "details": "(trained; or 0 if the illusory floor is dispelled)"
      },
      "disable": "Succeeding on a check (perception, dc:21) check against the Stealth DC of 21 (including the check to find the trap) disbelieves the illusory floor, or Dispel Magic (2nd rank; counteract DC 18) to dispel the illusory floor; dispel magic (2nd rank; counteract DC 20) to dispel the magical silence",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "0bSHLXIeRbwxpKtv",
          "name": "Drop",
          "kind": "reaction",
          "description": "Trigger A creature walks onto the illusory floor\nEffect The triggering creature falls through the illusory floor and takes falling damage (typically 20 bludgeoning damage). That creature can use the Grab an Edge reaction to avoid falling. The DC to Climb DC 20 the walls or Grab An Edge DC 20 is 20.",
          "traits": []
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Grab an Edge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Grab an Edge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Grab an Edge",
          "sourceId": "3yoajuKjwHZ9ApUY",
          "name": "Grab an Edge",
          "type": "action"
        },
        "owner": {
          "sourceId": "0bSHLXIeRbwxpKtv",
          "name": "Drop",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 153,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "IyE7jYfltfPSYzNy",
          "name": "False Floor",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:quartz-spawned-shadow",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "q9R4hKHeErDOaFJu",
      "slug": "quartz-spawned-shadow",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f425cb0463c8ae796764f9949c090e37e2383fd606d9a0be8322fc82d49f8379",
    "translatableHash": "sha256:a7bd33da22a4832bcabf3d65ca275756549737b29013c31ddfe9ea6d36365fe6",
    "data": {
      "schemaVersion": 1,
      "name": "Quartz-Spawned Shadow",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "undead",
        "unholy"
      ],
      "description": "The mysterious undead known as shadows lurk in dark places and feed on those who stray too far from the light. Those who parley with shadows, typically by keeping them at bay with a glowing weapon, may learn great secrets, for they are ideal spies.",
      "armorClass": 20,
      "hitPoints": 40,
      "speedFeet": 0,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": -5,
        "dex": 4,
        "con": 0,
        "int": -2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 10,
        "stealth": 14
      },
      "languages": [
        "necril"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "precision",
          "unconscious"
        ],
        "resistances": [
          "all-damage 5 except force, ghost-touch, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "x47iDfIE9albveGl",
          "name": "Shadow Hand",
          "bonus": 15,
          "damage": "2d6+3 void",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "ACHlnYzXVxizzqPw",
          "name": "Light Vulnerability",
          "kind": "passive",
          "description": "An object shedding magical light (such as from the Light spell) is treated as magical when used to attack the shadow.",
          "traits": []
        },
        {
          "id": "LkqCkG3YFw362zdS",
          "name": "Crystal Siphon",
          "kind": "action",
          "description": "Requirements The shadow and the target are both within 40 feet of the crystal that spawned the shadow, and the crystal isn't covered or obstructed\nEffect Shadows in the shape of tendrils curl around the target, drawing out a portion of the target's vitality and siphoning it into the crystal. The target takes 4d6 void damage (check (fortitude, dc:21, basic)). On a failure, they are also Enfeebled 1. This enfeebled condition is cumulative with other enfeebled conditions from quartz-spawned shadows, to a maximum of enfeebled 4. If Crystal Siphon increases the creature's enfeebled value to 3 or more, the target's shadow is pulled entirely into the shadow's crystal.\nWhile the target's shadow is trapped, they feel an Invisible tether linking them to the crystal, and they become Slowed 1 whenever they are more than 40 feet away from it. The enfeebled condition from Crystal Siphon can't be reduced until the crystal is broken; if the crystal is broken, the effect immediately ends.",
          "traits": [
            "death",
            "divine",
            "void"
          ]
        },
        {
          "id": "0QWVJ7Of8cQNKp0N",
          "name": "Slink in Shadows",
          "kind": "passive",
          "description": "The shadow can Hide or end its Sneak in a creature's or object's shadow.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 54,
        "uuid": "Compendium.pf2e.spells-srd.Item.Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Light",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Light",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ACHlnYzXVxizzqPw",
          "name": "Light Vulnerability",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 448,
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
          "sourceId": "LkqCkG3YFw362zdS",
          "name": "Crystal Siphon",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 841,
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
          "sourceId": "LkqCkG3YFw362zdS",
          "name": "Crystal Siphon",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 946,
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
          "sourceId": "LkqCkG3YFw362zdS",
          "name": "Crystal Siphon",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 18,
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
          "sourceId": "0QWVJ7Of8cQNKp0N",
          "name": "Slink in Shadows",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 74,
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
          "sourceId": "0QWVJ7Of8cQNKp0N",
          "name": "Slink in Shadows",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:entrapping-chair",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "3RL07afKtflSq5Ff",
      "slug": "entrapping-chair",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:c466df1f79d0fef3ff61bf08b1b687fcc1fd3560134c89a3134406924353ad15",
    "translatableHash": "sha256:0862c597abd3bc1e641300915d90eb04a09118c5780fd6891a923607f86840ab",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Entrapping Chair",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mechanical",
        "trap"
      ],
      "description": "A chair on concealed tracks surges forward, knocking a creature into the chair's seat and trapping them in place with clamping armrests.",
      "armorClass": 22,
      "hitPoints": 54,
      "hardness": 14,
      "stealth": {
        "modifier": 16,
        "details": "(0 to notice the chair)"
      },
      "disable": "check (thievery, dc:23, name:Disrupt the Tracks, traits:action:disable-a-device) (expert) to disrupt the tracks",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets automatically over 2 rounds if the chair is unoccupied.",
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "V4xSx1Z7pl5RTlY8",
          "name": "Take a Seat!",
          "kind": "reaction",
          "description": "Trigger A creature steps on the track\nEffect The chair rockets forward along the track and slams into the triggering creature, dealing (3d8 + 15 bludgeoning damage. A creature who succeeds at a check (reflex, dc:22, traits:damaging-effect) save takes no damage and moves out of the chair's path into a random adjacent square not containing the track. A creature who fails this saving throw is knocked into the chair's seat and captured by the armrests, becoming Grabbed (Restrained on a critical failure; Escape DC 26).",
          "traits": []
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 520,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "V4xSx1Z7pl5RTlY8",
          "name": "Take a Seat!",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 572,
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
          "sourceId": "V4xSx1Z7pl5RTlY8",
          "name": "Take a Seat!",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:false-step-floor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "6EELzUwaHp1oMfCO",
      "slug": "false-step-floor",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:04c6bb8614458b75f8e6b63527ba01f9b2f075eb1f7b48060940542c0290433d",
    "translatableHash": "sha256:8368913a4d52e572d0dda5b10d41e2714e00173471530d13426b3df1513106f9",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "False Step Floor",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "teleportation",
        "trap"
      ],
      "description": "Each time a creature enters the room, it slips through the floor, tumbles through an interdimensional void, and falls back into the room through the ceiling, landing on the floor.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 15,
        "details": ""
      },
      "disable": "check (thievery, dc:28, name:Disrupt the Magical Energy, traits:action:disable-a-device) (trained) to disrupt the magical energy, or check (arcana, dc:27, name:Realign the Magic) or check (occultism, dc:27, name:Realign the Magic) (trained) to realign the magical energy",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "WYeWa4hUK5Lu9dLb",
          "name": "False Step",
          "kind": "reaction",
          "description": "Trigger A creature enters the room and steps onto the floor\nEffect The creature slips through the floor; it tumbles through an interdimensional void before falling back into the room through the ceiling and landing on the floor. The triggering creature takes 40 bludgeoning damage from the fall. That creature can try to Grab An Edge DC 24 to avoid falling.",
          "traits": [
            "arcane",
            "teleportation"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:reflection",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "ICdVjs6JEs0YAefl",
      "slug": "reflection",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:48adf0f3e259bbaa6559f0600fd8998e6c40f892ef4b2ca2f206b98380cc4e5d",
    "translatableHash": "sha256:4994955c90887c13a916022bf3d94ceaef7a3d2f887e763307a3baff09af5a35",
    "data": {
      "schemaVersion": 1,
      "name": "Reflection",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [],
      "description": "",
      "armorClass": 24,
      "hitPoints": 30,
      "speedFeet": 50,
      "perception": {
        "modifier": 0,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 0
      },
      "abilities": {
        "str": 0,
        "dex": 0,
        "con": 0,
        "int": 0,
        "wis": 0,
        "cha": 0
      },
      "skills": {},
      "languages": [],
      "defenses": {
        "immunities": [
          "object-immunities"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "TpYNcJKE1v9ktu1H",
          "name": "Reflected Weapon",
          "bonus": 17,
          "damage": "2d6+8 bludgeoning",
          "traits": [
            "versatile-p",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "qTHgALlk6FGnqd7W",
          "name": "Reflection Routine",
          "kind": "passive",
          "description": "Each reflection has 2 actions which it uses to Step, Stride, or Strike (in any combination). Reflections can act on the same turn they're created.",
          "traits": [
            "magical",
            "trap"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:clone-mirrors",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "Ldw3d0TYwtMywbM0",
      "slug": "clone-mirrors",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:b9a619c439ed3dd7c989d22ed914e36cdbb4d7ec3e5635bbe01c05c44e5f0d2a",
    "translatableHash": "sha256:2e8ba8e525884b53a5188f8dc6e0d317381784169dd2bff3682947b8d1fee2fd",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Clone Mirrors",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "Two opposing mirrors spawn endless illusory duplicates of creatures in the hall.",
      "armorClass": 21,
      "hitPoints": 54,
      "hardness": 13,
      "stealth": {
        "modifier": 11,
        "details": ""
      },
      "disable": "check (thievery, dc:28, name:Reposition Mirror, traits:action:disable-a-device) (expert) to reposition each mirror, or Dispel Magic (3rd rank; counteract DC 25) to counteract each mirror",
      "isComplex": true,
      "routine": "(2 actions) This trap loses 1 action for each mirror disabled. Each mirror uses 1 action to Spawn a Reflection of a creature reflected in the mirror. The hazard can have a maximum of four reflections spawned at once.",
      "reset": "The trap resets after 1 day.",
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "M6pVTXxAJ26CuNx5",
          "name": "Spawn Reflection",
          "kind": "reaction",
          "description": "Trigger A creature is reflected in the mirror\nEffect The mirror creates a Reflection of the triggering creature, which Steps out of the mirror and into the hall. The trap then rolls initiative.",
          "traits": [
            "illusion"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 125,
        "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Reflection",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Reflection",
          "package": "pf2e",
          "sourcePack": "pathfinder-dark-archive",
          "documentType": "Actor",
          "compendiumKey": "Reflection",
          "sourceId": "ICdVjs6JEs0YAefl",
          "name": "Reflection",
          "type": "npc"
        },
        "owner": {
          "sourceId": "M6pVTXxAJ26CuNx5",
          "name": "Spawn Reflection",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 119,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ldw3d0TYwtMywbM0",
          "name": "Clone Mirrors",
          "type": "hazard"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/routine",
        "sourceIndex": 103,
        "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Reflection",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Reflection",
          "package": "pf2e",
          "sourcePack": "pathfinder-dark-archive",
          "documentType": "Actor",
          "compendiumKey": "Reflection",
          "sourceId": "ICdVjs6JEs0YAefl",
          "name": "Reflection",
          "type": "npc"
        },
        "owner": {
          "sourceId": "Ldw3d0TYwtMywbM0",
          "name": "Clone Mirrors",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:verdures-moonflower",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "q9q6ag5sSEEefgUs",
      "slug": "verdures-moonflower",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d819e01af0460fd63cc42fa727cfc62d23d5711422e9dcb333ecda9135c17ba7",
    "translatableHash": "sha256:db54ee169574fce0ff9a72b8dce11c376a4811e7a26cfa9179240d0fb401cb69",
    "data": {
      "schemaVersion": 1,
      "name": "Verdure's Moonflower",
      "level": 8,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "plant"
      ],
      "description": "These enormous plants have thick, knotted trunks festooned with fanged blossoms. A gaping mouth sits at the top of the trunk, capable of swallowing most creatures smaller than the moonflower whole. Moonflowers can move slowly on their powerful roots or use them to attack, but usually they dig them deeply into the surrounding ground and remain stationary to await prey.\nThough moonflowers can't speak in the conventional sense, they communicate telepathically with other moonflowers. Explorers who encounter a single moonflower can thus be assured that any other moonflowers in the vicinity will be prepared for them. Those who manage to intercept a moonflower's telepathic communications are assaulted by visions of dreadful, primeval jungles ruled over by titanic plant life. Whether this is some vision of the past or a dream of the future shared by all moonflowers is unknown.\nMoonflowers are alien life-forms from a long-dead planet, but their proliferation throughout the galaxy has been ensured through the machinations of the Dominion of the Black, a sinister, alien organization from the dark places between the stars.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 10,
        "will": 16
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 4,
        "int": -2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 19,
        "stealth": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [
          "physical 10 except slashing"
        ],
        "weaknesses": [
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "SDF2zWv6zGkmcQH9",
          "name": "Bite",
          "bonus": 20,
          "damage": "2d10+10 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "MvwGFLtsnf8ZFqhG",
          "name": "Root",
          "bonus": 20,
          "damage": "2d8+10 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "7pxsxbazh1PpK8A4",
          "name": "Fast Healing 10",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "6Psn5RSYm8UGDpwM",
          "name": "Pod Prison",
          "kind": "passive",
          "description": "Requirements A creature is swallowed by the moonflower\nEffect The moonflower wraps the swallowed creature in a cocoon and extrudes it into an adjacent square. The creature continues to be Swallowed Whole and takes half damage from any damage dealt to the cocoon. Once the cocoon is Ruptured, it deflates and decays.",
          "traits": []
        },
        {
          "id": "Uoxf8sSuS6pG7QQF",
          "name": "Pod Spawn",
          "kind": "passive",
          "description": "If a Small or larger creature dies within a pod prison, the pod transforms into an adult moonflower with full Hit Points after 1d4 of growth. The dead creature's equipment remains inside the new moonflower and can be retrieved if the moonflower is slain.",
          "traits": []
        },
        {
          "id": "uOpDNZG0ysnNMkxM",
          "name": "Spray Blossoms",
          "kind": "action",
          "description": "The moonflower expels mind-warping petals in a 30-foot type:cone. Creatures in the area take 4d6 mental damage and 4d6 poison damage (check (will, dc:26, basic) save). A creature that fails is Stupefied 2 for 1 minute, and Confused for 1 round if it got a critical failure. The moonflower can't Spray Blossoms again for 1d4.",
          "traits": [
            "mental",
            "plant",
            "poison"
          ]
        },
        {
          "id": "kjaeBRLTBCSOl9cS",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, 2d10+10 bludgeoning damage], Rupture 21",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "0D7DkzCzV4iv9Q0r",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.fJSNOw4zHGbIm4bZ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.fJSNOw4zHGbIm4bZ",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "fJSNOw4zHGbIm4bZ",
          "sourceId": "fJSNOw4zHGbIm4bZ",
          "name": "Fast Healing",
          "type": "action"
        },
        "owner": {
          "sourceId": "7pxsxbazh1PpK8A4",
          "name": "Fast Healing 10",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 269,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "uOpDNZG0ysnNMkxM",
          "name": "Spray Blossoms",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 353,
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
          "sourceId": "uOpDNZG0ysnNMkxM",
          "name": "Spray Blossoms",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "kjaeBRLTBCSOl9cS",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "0D7DkzCzV4iv9Q0r",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:constricting-hall",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "tGhJpdNRItMZTpG7",
      "slug": "constricting-hall",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:77c9308d8c6165975b6fe921fe41e2e4cddf9cf4bc40721b3ccfa06e7b10297f",
    "translatableHash": "sha256:261511471632faff605524ec9773162faef5e23f2321b9349761c53c533106e6",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Constricting Hall",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "A hall's four walls become fluid and elastic when a creature reaches the hall's midpoint.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 21,
        "details": ""
      },
      "disable": "check (thievery, dc:28, name:Stabilize Wall, traits:action:disable-a-device) (trained) to stabilize each wall, or Dispel Magic (4th rank; counteract DC 26) to counteract each wall",
      "isComplex": true,
      "routine": "(4 actions) This trap loses 1 action each round for each wall that has been disabled. Each wall uses 1 action to slam back and forth rapidly, pummeling one creature in the hall with a wall Strike. On a hit, the target is additionally knocked Prone. The walls distribute the attacks as evenly as possible among creatures in the hall, and the Strikes don't apply the trap's multiple attack penalty.",
      "reset": "The trap resets after 1 hour.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "Q0howoIf0TfR9YuR",
          "name": "Lose Form",
          "kind": "reaction",
          "description": "Trigger A creature reaches the hall's midpoint\nEffect The hall's walls lose their rigidity, becoming fluid and elastic. The hall becomes difficult terrain, and each creature in the hall is knocked Prone unless they succeed at a check (reflex, dc:26) save. The trap then rolls initiative.",
          "traits": [
            "occult"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 248,
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
          "sourceId": "Q0howoIf0TfR9YuR",
          "name": "Lose Form",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 114,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "tGhJpdNRItMZTpG7",
          "name": "Constricting Hall",
          "type": "hazard"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/routine",
        "sourceIndex": 245,
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
          "sourceId": "tGhJpdNRItMZTpG7",
          "name": "Constricting Hall",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:mother-mitera",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "WiFzLguamOR69IcD",
      "slug": "mother-mitera",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52e1d1dcd25385e0471acd0d283453f75cce2b1d7f83f0053e4e05066fc941fa",
    "translatableHash": "sha256:8aff9b3680deed511657f0ba1e97e7f24cd0b1a87c3f7936e5625633fdb05b74",
    "data": {
      "schemaVersion": 1,
      "name": "Mother Mitera",
      "level": 8,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "human"
      ],
      "description": "",
      "armorClass": 25,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 18
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "deception": 20,
        "diplomacy": 18,
        "nature": 18,
        "religion": 18,
        "society": 16
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IWLtNJgGKZE4sql1",
          "name": "Dagger",
          "bonus": 18,
          "damage": "2d4+7 piercing; 1d6 mental; 1d6 bleed",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "wOS1PPw34UfnTuPS",
          "name": "Dagger",
          "bonus": 18,
          "damage": "2d4+7 piercing; 1d6 mental; 1d6 bleed",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "GTidGY6vXi9cj9yz",
          "name": "Crystal Vitality Link",
          "kind": "passive",
          "description": "The power of the island links Mitera's vitality to her followers. As long as any of the three quartz formations are intact, whenever Mitera takes damage, any of her followers within 10 miles lose the same amount of HP.",
          "traits": []
        },
        {
          "id": "5n8EB4Rkx3GH7H9F",
          "name": "Ascension is Near",
          "kind": "action",
          "description": "Frequency once per ascension ritual\nEffect Mitera activates the moonflower link with her followers. Any followers within 30-foot emanation who failed their saving throw against the moonflower tea become Sickened 1. Anyone who critically failed and did not receive an antidote explodes (this is about half of Mitera's congregation if the PCs didn't successfully administer the antidote). If anyone's body explodes, Mitera gains 30 temporary HP and is Quickened for 3 rounds; she can use this additional action each round only for Strike and Stride actions.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "incapacitation",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "nvyRpGOfcTh5qgcI",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "BZ6ImkvcN7tkndVv",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "1w9Nr80CFnCiCwmU",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "LOSt89VL0JGiWlCa",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "swcdboevab9SEqlS",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "XkKmROR7CCzvyCFi",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "G95EfCljHVJJi6w5",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "hKvDpjrSwg1EwNKf",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "mgH92DEZacVAaFkD",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "5hsi0VsOtAEtsdeO",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "7RuVy6QQbUz2IEqz",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "p6bLwZ2urt9t45S2",
              "name": "Tempest Cloak",
              "rank": 3
            },
            {
              "id": "zK7vXxc2zDaAlGVA",
              "name": "Grasping Earth",
              "rank": 4
            },
            {
              "id": "QNKUEg6uwAsEwmwh",
              "name": "Life-Draining Roots",
              "rank": 4
            },
            {
              "id": "27gvcHsNqsw223ci",
              "name": "Unfettered Movement",
              "rank": 4
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wpgt5TYcTHLDei6J",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wpgt5TYcTHLDei6J",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wpgt5TYcTHLDei6J",
          "sourceId": "Wpgt5TYcTHLDei6J",
          "name": "Grasping Earth",
          "type": "spell"
        },
        "owner": {
          "sourceId": "zK7vXxc2zDaAlGVA",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 296,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zK7vXxc2zDaAlGVA",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 418,
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
          "sourceId": "zK7vXxc2zDaAlGVA",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 551,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "zK7vXxc2zDaAlGVA",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.izcxFQFwf3woCnFs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.izcxFQFwf3woCnFs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "izcxFQFwf3woCnFs",
          "sourceId": "izcxFQFwf3woCnFs",
          "name": "Guidance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "1w9Nr80CFnCiCwmU",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 386,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Guidance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Guidance",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Guidance",
          "sourceId": "3qHKBDF7lrHw8jFK",
          "name": "Spell Effect: Guidance",
          "type": "effect"
        },
        "owner": {
          "sourceId": "1w9Nr80CFnCiCwmU",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 458,
        "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Guidance Immunity",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Guidance Immunity",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Guidance Immunity",
          "sourceId": "3LyOkV25p7wA181H",
          "name": "Effect: Guidance Immunity",
          "type": "effect"
        },
        "owner": {
          "sourceId": "1w9Nr80CFnCiCwmU",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "rfZpqmj0AIIdkVIs",
          "sourceId": "rfZpqmj0AIIdkVIs",
          "name": "Heal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LOSt89VL0JGiWlCa",
          "name": "Heal",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WBmvzNDfpwka3qT4",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "swcdboevab9SEqlS",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Light",
          "sourceId": "cVVZXNbV0nElVOPZ",
          "name": "Spell Effect: Light",
          "type": "effect"
        },
        "owner": {
          "sourceId": "swcdboevab9SEqlS",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.vLzFcIaSXs7YTIqJ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.vLzFcIaSXs7YTIqJ",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "vLzFcIaSXs7YTIqJ",
          "sourceId": "vLzFcIaSXs7YTIqJ",
          "name": "Message",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XkKmROR7CCzvyCFi",
          "name": "Message",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "uZK2BYzPnxUBnDjr",
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        },
        "owner": {
          "sourceId": "G95EfCljHVJJi6w5",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 146,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangle Vine",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangle Vine",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tangle Vine",
          "sourceId": "TwtUIEyenrtAbeiX",
          "name": "Spell Effect: Tangle Vine",
          "type": "effect"
        },
        "owner": {
          "sourceId": "G95EfCljHVJJi6w5",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 283,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "G95EfCljHVJJi6w5",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 435,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "G95EfCljHVJJi6w5",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.rQWaJhI5Bko5x14Z",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.rQWaJhI5Bko5x14Z",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "rQWaJhI5Bko5x14Z",
          "sourceId": "rQWaJhI5Bko5x14Z",
          "name": "Dagger",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Dj3szMxIZ2hwkpbQ",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/16/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.jJZbdMHMdh8UL2j8",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.jJZbdMHMdh8UL2j8",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "jJZbdMHMdh8UL2j8",
          "sourceId": "jJZbdMHMdh8UL2j8",
          "name": "Clothing (Fine)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "cOno50AugBRsfxaZ",
          "name": "Ceremonial Robes",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/17/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.BlqDXtRZcevCYRNz",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.BlqDXtRZcevCYRNz",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "BlqDXtRZcevCYRNz",
          "sourceId": "BlqDXtRZcevCYRNz",
          "name": "Jeweled dawnsilver crown",
          "type": "treasure"
        },
        "owner": {
          "sourceId": "SzPTvuxOEAOJsUZN",
          "name": "Crystal Flower Crown",
          "type": "treasure"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.FHfrCABOmGVaEpPx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.FHfrCABOmGVaEpPx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "FHfrCABOmGVaEpPx",
          "sourceId": "FHfrCABOmGVaEpPx",
          "name": "Life-Draining Roots",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QNKUEg6uwAsEwmwh",
          "name": "Life-Draining Roots",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/21/system/description/value",
        "sourceIndex": 276,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "5n8EB4Rkx3GH7H9F",
          "name": "Ascension is Near",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/21/system/description/value",
        "sourceIndex": 576,
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
          "sourceId": "5n8EB4Rkx3GH7H9F",
          "name": "Ascension is Near",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.aqRYNoSvxsVfqglH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.aqRYNoSvxsVfqglH",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "aqRYNoSvxsVfqglH",
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        },
        "owner": {
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 207,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 334,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 389,
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
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 573,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Unfettered Movement",
          "sourceId": "CdAyAiMGESvgNQtz",
          "name": "Spell Effect: Unfettered Movement",
          "type": "effect"
        },
        "owner": {
          "sourceId": "27gvcHsNqsw223ci",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.9AAkVUCwF6WVNNY2",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.9AAkVUCwF6WVNNY2",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "9AAkVUCwF6WVNNY2",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "7RuVy6QQbUz2IEqz",
          "name": "Lightning Bolt",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.70BjbNRVc4OTLAgN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.70BjbNRVc4OTLAgN",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "70BjbNRVc4OTLAgN",
          "sourceId": "70BjbNRVc4OTLAgN",
          "name": "Tempest Cloak",
          "type": "spell"
        },
        "owner": {
          "sourceId": "p6bLwZ2urt9t45S2",
          "name": "Tempest Cloak",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tempest Cloak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tempest Cloak",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tempest Cloak",
          "sourceId": "8y6Ap9xIsnseYYvk",
          "name": "Spell Effect: Tempest Cloak",
          "type": "effect"
        },
        "owner": {
          "sourceId": "p6bLwZ2urt9t45S2",
          "name": "Tempest Cloak",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.J6vNvrUT3b1hx2iA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.J6vNvrUT3b1hx2iA",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "J6vNvrUT3b1hx2iA",
          "sourceId": "J6vNvrUT3b1hx2iA",
          "name": "Entangling Flora",
          "type": "spell"
        },
        "owner": {
          "sourceId": "hKvDpjrSwg1EwNKf",
          "name": "Entangling Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 336,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "hKvDpjrSwg1EwNKf",
          "name": "Entangling Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 429,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "hKvDpjrSwg1EwNKf",
          "name": "Entangling Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 508,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Entangling Flora",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Entangling Flora",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Entangling Flora",
          "sourceId": "rjM25qfw5BKj9h97",
          "name": "Spell Effect: Entangling Flora",
          "type": "effect"
        },
        "owner": {
          "sourceId": "hKvDpjrSwg1EwNKf",
          "name": "Entangling Flora",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.dileJ0Yxqg76LMvu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.dileJ0Yxqg76LMvu",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "dileJ0Yxqg76LMvu",
          "sourceId": "dileJ0Yxqg76LMvu",
          "name": "One with Plants",
          "type": "spell"
        },
        "owner": {
          "sourceId": "mgH92DEZacVAaFkD",
          "name": "One with Plants",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0qaqksrGGDj74HXE",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0qaqksrGGDj74HXE",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0qaqksrGGDj74HXE",
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "5hsi0VsOtAEtsdeO",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 194,
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
          "sourceId": "5hsi0VsOtAEtsdeO",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 266,
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
          "sourceId": "5hsi0VsOtAEtsdeO",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 331,
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
          "sourceId": "5hsi0VsOtAEtsdeO",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.IxhGEKl63R4QBvkj",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.IxhGEKl63R4QBvkj",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "IxhGEKl63R4QBvkj",
          "sourceId": "IxhGEKl63R4QBvkj",
          "name": "Frostbite",
          "type": "spell"
        },
        "owner": {
          "sourceId": "BZ6ImkvcN7tkndVv",
          "name": "Frostbite",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 249,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Frostbite",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Frostbite",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Frostbite",
          "sourceId": "DdqWMj7cuf4S1bgr",
          "name": "Spell Effect: Frostbite",
          "type": "effect"
        },
        "owner": {
          "sourceId": "BZ6ImkvcN7tkndVv",
          "name": "Frostbite",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:exhaling-portal",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "P2fNCqJsR0gazMzM",
      "slug": "exhaling-portal",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:360a61565fb30c26d73e5cc82530efca248a2d09a31f2439a7ab9d4b7f3a7151",
    "translatableHash": "sha256:b8155988ecc0fbf72fb5e331fe237738581d7f070522a95b5d749948f15197ab",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Exhaling Portal",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "Magic runes carved into a doorframe connect a door to the Plane of Air when opened, blowing creatures down the connecting hall.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 23,
        "details": ""
      },
      "disable": "check (thievery, dc:30, name:Scratch Out Runes, traits:action:disable-a-device) (expert) twice to scratch out the runes, or Dispel Magic (5th rank; counteract DC 30) to counteract the planar runes; check (athletics, dc:32, name:Shut the Door) to shut the door if it's open (using Athletics only stops the trap, it doesn't fully disable it)",
      "isComplex": true,
      "routine": "(1 action) The trap uses 1 action to blow powerful winds down the hall. Each creature in the hall must attempt a check (fortitude, dc:32) save with the same results as Gust. If this forced movement would cause a creature to collide with a solid object or fall downstairs or out a window, that creature takes an additional (2d10 + 11 bludgeoning damage (or 20 bludgeoning damage due to a fall).",
      "reset": "The trap resets when the door is shut.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "0l35fQJcnzJb7vMi",
          "name": "Gust",
          "kind": "reaction",
          "description": "Trigger A creature opens the door\nEffect The hall is buffeted by powerful winds for as long as the door remains open. A creature must succeed at a check (athletics, dc:32) check to move toward the door. A creature who fails at this check is pushed back 5 feet and falls Prone.\nAdditionally, the triggering creature is blasted by a powerful gust of wind and must attempt a check (fortitude, dc:32) save. The trap then rolls initiative.\nCritical Success The creature is unaffected.\nSuccess The creature is pushed back 5 feet.\nFailure The creature is pushed back 10 feet.\nCritical Failure The creature is pushed back 10 feet and knocked Prone.",
          "traits": [
            "air"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 320,
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
          "sourceId": "0l35fQJcnzJb7vMi",
          "name": "Gust",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 836,
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
          "sourceId": "0l35fQJcnzJb7vMi",
          "name": "Gust",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 124,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "P2fNCqJsR0gazMzM",
          "name": "Exhaling Portal",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:call-of-the-void",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "0AdtolhMWrPlzVZY",
      "slug": "call-of-the-void",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:2decfd8fa62dd01b99d7e61bad73f02859ded13b9bc4101a18d544f614304e1c",
    "translatableHash": "sha256:26e1b9dffc776c19b7b84d7f5137ac9056818b6e5dd7da0de62c732a235251a0",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Call of the Void",
      "level": 12,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "environmental",
        "magical"
      ],
      "description": "A supernatural compulsion to leap into the unknown exerts itself on anyone who approaches the ledge.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 15,
        "details": "(expert) to notice a slight tugging feeling"
      },
      "disable": "check (occultism, dc:34, name:Expel Magical Compulsion) or check (arcana, dc:36, name:Expel Magical Compulsion) to expel the magical compulsion from the current island and from any of the red ropes directly attached to it, darkening the rope in color. The Echo also automatically disables the hazard from any island he's standing on, and any of the red ropes directly attached to it, when he Reconstitutes from Thought on that island.",
      "isComplex": true,
      "routine": "(1 action) The call targets all creatures adjacent to a ledge or on one of the red ropes and tugs at their minds. A creature who has already fallen this round is immune.",
      "reset": "The call of the void persists as long as the Echo exists, though it doesn't activate until the Echo has rolled initiative. The hazard resets each day.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "eA8cwxuJWpDq8jgk",
          "name": "Leap into the Unknown",
          "kind": "reaction",
          "description": "Trigger A creature enters a square adjacent to the ledge of an island or steps onto one of the red ropes\nEffect The call of the void tugs at the mind of intruders, compelling them to leap off the ledge. The creature must succeed at a check (will, dc:34) save or check (acrobatics, dc:32, traits:action:balance) check to Balance or else drop off the ledge. If the creature falls off, it drops 100 feet, loops through the closed space of the mindscape, and lands in the square it fell from, taking falling damage as normal (usually 50 bludgeoning damage). The call of the void then rolls initiative.",
          "traits": [
            "mental"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 368,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Balance",
          "sourceId": "M76ycLAqHoAgbcej",
          "name": "Balance",
          "type": "action"
        },
        "owner": {
          "sourceId": "eA8cwxuJWpDq8jgk",
          "name": "Leap into the Unknown",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:thalassophobia-pool",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "Z9iID4f6DoEuVrLo",
      "slug": "thalassophobia-pool",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:f3c307e357aca2c0f2e93021d5a60ab37c00c0d965854cf51f81e6cdc20044d5",
    "translatableHash": "sha256:a3f6b895520612c883c270eedab4cd7776d1c35676c877451b0b2256438d0f18",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Thalassophobia Pool",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "The pool sucks in creatures that fall into it, making them sink into its endless depths.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 15,
        "details": "(trained)"
      },
      "disable": "check (diplomacy, dc:32, name:Calm the Pool) (master) to quell the fear and calm the pool or check (intimidation, dc:35, name:Scare the Pool) to give the pool something worse to fear; three successes required.",
      "isComplex": true,
      "routine": "(3 actions) Water from the chalice increases the depth of the water by 10 feet for each action. Each time this happens, creatures in the pool are pushed 10 feet down and take 1d6 bludgeoning damage. As the pool has no bottom, creatures in it can fall down indefinitely; they must Swim up to avoid drowning, but the water is especially choppy, so the Athletics DC is check (athletics, dc:25, traits:action:swim). The pool never overflows. Each successful check to Disable reduces the pool's actions by 1, and once the pool is completely Disabled, the water becomes still and the Athletics DC to Swim becomes check (athletics, dc:10, traits:action:swim).",
      "reset": "The trap resets once there are no moving creatures in it.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "GReYolkvohIlgdbM",
          "name": "Downpour",
          "kind": "reaction",
          "description": "Trigger A creature falls into the pool\nEffect More water pours forth from the chalice. Creatures in the pool become Clumsy 1, and they can't decrease their clumsy condition so long as they remain in the pool. The trap then rolls initiative.",
          "traits": []
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 167,
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
          "sourceId": "GReYolkvohIlgdbM",
          "name": "Downpour",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/routine",
        "sourceIndex": 293,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Swim",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Swim",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Swim",
          "sourceId": "c8TGiZ48ygoSPofx",
          "name": "Swim",
          "type": "action"
        },
        "owner": {
          "sourceId": "Z9iID4f6DoEuVrLo",
          "name": "Thalassophobia Pool",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:amalgamite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "3Oz62UCZeqwG6BzE",
      "slug": "amalgamite",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e7b3d169472f2a5fd88c5bc73edd507d78ce227e9e9af1032dd70c2b0c4ad0b0",
    "translatableHash": "sha256:c325fd22ce4388a9a1865d4bf164bef3b8d71db546a5870934a0499bea8f7a19",
    "data": {
      "schemaVersion": 1,
      "name": "Amalgamite",
      "level": 13,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Teleportation magic can prove a difficult undertaking, even for experienced spellcasters. It requires precise calculation and timing, knowledge of the intended destination, and meticulous control over surging conjuration magics. A mistake in even the most minute element of such a spell can lead to disastrous results for those involved. When a particularly powerful spellcaster makes an error of this kind, either through arrogance or simple misjudgment, they might transform into an amalgamite.\nA mass of flesh and misaligned limbs, an amalgamite is the warped body of a former spellcaster, sometimes joined with another version of itself to incorporate additional limbs or other irregularities. They're still alive, but they have become aberrants mentally and physically, with only the vaguest memories of their previous existence, which makes them a dangerous and bewildering foe. Their weird, warped anatomy constantly shifts and regrows, allowing the creatures to shrug off physical blows save those that pierce through its flesh and into its core being.\nThe magical residue of an amalgamite's creation radiates from it, seeping into and destabilizing any living beings that get too close. Infected creatures then further spread the amalgamite's aura among larger groups of allies and foes alike. The amalgamite uses this power to manipulate and confuse their enemies, whom they can teleport into traps, force into confrontations with other enemies, or draw close into striking range with their own odd appendages.",
      "armorClass": 33,
      "hitPoints": 220,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 22,
        "will": 26
      },
      "abilities": {
        "str": 5,
        "dex": 6,
        "con": 4,
        "int": 8,
        "wis": 6,
        "cha": -1
      },
      "skills": {
        "arcana": 27,
        "athletics": 22,
        "occultism": 27
      },
      "languages": [
        "aklo",
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "mental"
        ],
        "resistances": [
          "bludgeoning 10",
          "slashing 10"
        ],
        "weaknesses": [
          "piercing 10"
        ]
      },
      "attacks": [
        {
          "id": "REbcJzGp6sT7jOuZ",
          "name": "Limb",
          "bonus": 24,
          "damage": "3d10+11 bludgeoning",
          "traits": []
        },
        {
          "id": "6Jhrih75LDb7Tovl",
          "name": "Warping Ray",
          "bonus": 27,
          "damage": "3d8+8 force",
          "traits": [
            "deadly-2d8",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "rU17t3NM7TJ3u03o",
          "name": "Regeneration 10 (Deactivated by Piercing)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "rGx3BT8mbRKRUpA2",
          "name": "Destabilizing Field",
          "kind": "passive",
          "description": "40 feet. A creature that begins its turn within the area feels its body begin to stretch and must succeed at a check (fortitude, dc:33) save or become destabilized. A destabilized creature emits a 10-foot destabilizing field aura and becomes Sickened 1. The destabilization ends when the creature is no longer sickened. A creature that succeeds at its saving throw against the aura is temporarily immune to all destabilizing fields for 1 minute.",
          "traits": [
            "aura",
            "occult"
          ]
        },
        {
          "id": "bpvnWZi8sukcfy9H",
          "name": "Displace",
          "kind": "reaction",
          "description": "Trigger The amalgamite is hit by a Strike\nEffect The amalgamite Relocates or Transposes themself with another creature. If the amalgamite successfully changes location, they and any Transposed creature take half damage from the triggering Strike.",
          "traits": []
        },
        {
          "id": "4oz5vNIBQ0PmHw6p",
          "name": "Relocate",
          "kind": "action",
          "description": "The amalgamite teleports into an unoccupied space they can see within 50 feet.",
          "traits": [
            "concentrate",
            "occult",
            "teleportation"
          ]
        },
        {
          "id": "XBz2toYQ5LlpBAkp",
          "name": "Transpose",
          "kind": "action",
          "description": "The amalgamite teleports up to two destabilized creatures within 50 feet that they can see. They can either move a single creature to an unoccupied space or swap the positions of two creatures of the same size. If the amalgamite swaps two creatures, they can choose their self as one target. An unwilling creature can attempt a check (will, dc:33) save. If either target succeeds at this saving throw, both are unaffected.",
          "traits": [
            "concentrate",
            "occult",
            "teleportation"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "NCoWkgKyY8nUdbrO",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "I8ARxfDqb1nGXEGH",
              "name": "Flicker",
              "rank": 4
            },
            {
              "id": "W2u0YOs2X63gtblX",
              "name": "Warp Mind",
              "rank": 7
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.8kJbiBEjMWG4VUjs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.8kJbiBEjMWG4VUjs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "8kJbiBEjMWG4VUjs",
          "sourceId": "8kJbiBEjMWG4VUjs",
          "name": "Warp Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "W2u0YOs2X63gtblX",
          "name": "Warp Mind",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 244,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "W2u0YOs2X63gtblX",
          "name": "Warp Mind",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 369,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wish",
          "sourceId": "6dDtGIUerazSHIOu",
          "name": "Wish",
          "type": "spell"
        },
        "owner": {
          "sourceId": "W2u0YOs2X63gtblX",
          "name": "Warp Mind",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 672,
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
          "sourceId": "W2u0YOs2X63gtblX",
          "name": "Warp Mind",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.zR67Rt3UMHKC5evy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.zR67Rt3UMHKC5evy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "zR67Rt3UMHKC5evy",
          "sourceId": "zR67Rt3UMHKC5evy",
          "name": "Flicker",
          "type": "spell"
        },
        "owner": {
          "sourceId": "I8ARxfDqb1nGXEGH",
          "name": "Flicker",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 289,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flicker",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flicker",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Flicker",
          "sourceId": "ZlsuhS9J0S3PuvCO",
          "name": "Spell Effect: Flicker",
          "type": "effect"
        },
        "owner": {
          "sourceId": "I8ARxfDqb1nGXEGH",
          "name": "Flicker",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 244,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "rGx3BT8mbRKRUpA2",
          "name": "Destabilizing Field",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:darkside-mirror",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "6gSbmVKbdUSIluMR",
      "slug": "darkside-mirror",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:88fce90798a74e1cddbf8c2ae1397300faac1233e634b307e49373bd934f12d4",
    "translatableHash": "sha256:5c9c77031fcfacd828328beb4063d3a89e72bfd60a50cab1b0941395c861f493",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Darkside Mirror",
      "level": 14,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "mechanical",
        "trap"
      ],
      "description": "A magic mirror replaces characters with malicious mirror duplicates from another dimension.",
      "armorClass": 34,
      "hitPoints": 4,
      "hardness": 1,
      "stealth": {
        "modifier": 24,
        "details": "(master) to notice it isn't a regular mirror"
      },
      "disable": "check (thievery, dc:34) (legendary) to retrieve a creature from the other dimension within 10 minutes of the switch (possible only if their mirror duplicate is dead), check (thievery, dc:39) (master) to permanently disable the mirror once all mirror duplicates are dead, or Dispel Magic (7th rank; counteract DC 32) to counteract the mirror for 1 minute and prevent additional replacements during that time.",
      "isComplex": true,
      "routine": "(1 action) The mirror absorbs another reflected creature and replaces it with a mirror duplicate. A mirror duplicate attacks on their own initiative, using the same statistics as the original creature, but they hate all other non-duplicate creatures. A mirror duplicate can spend 3 actions in contact with the mirror to return to their original dimension and release the duplicated creature.",
      "reset": "The mirror is always ready to absorb creatures into the other dimension. Ten minutes after a creature is sucked into the mirror, if an ally doesn't rescue the creature, it reaches the other dimension. In the mirror dimension, it counts as a mirror duplicate. These dimensions are alternate realities, not planes, so even spells like Interplanar Teleport can't reach them.",
      "saves": {
        "fortitude": 25,
        "reflex": 20,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "JEXj6WkaqB0iscnL",
          "name": "Reflection of Malice",
          "kind": "reaction",
          "description": "Trigger A creature is reflected in the mirror\nEffect The mirror absorbs the creature, replacing it with a malicious mirror duplicate (check (reflex, dc:34) to avoid being absorbed into the mirror), and rolls initiative.",
          "traits": [
            "arcane",
            "teleportation"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 275,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "6gSbmVKbdUSIluMR",
          "name": "Darkside Mirror",
          "type": "hazard"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/reset",
        "sourceIndex": 336,
        "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Interplanar Teleport",
          "sourceId": "5bTt2CvYHPvaR7QQ",
          "name": "Interplanar Teleport",
          "type": "spell"
        },
        "owner": {
          "sourceId": "6gSbmVKbdUSIluMR",
          "name": "Darkside Mirror",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:the-morrowkin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "8Lo4sys48l7YaK5J",
      "slug": "the-morrowkin",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:686b60b3eb111138c97fa8eeea5f08a653b13837d6cf0b6a3c5492ae7244c792",
    "translatableHash": "sha256:4ae4b42c7e61f6f46585705ef7cdde2c63c2c3ba1372305ee167dc72c2e36324",
    "data": {
      "schemaVersion": 1,
      "name": "The Morrowkin",
      "level": 14,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "aberration",
        "time"
      ],
      "description": "",
      "armorClass": 34,
      "hitPoints": 320,
      "speedFeet": 35,
      "perception": {
        "modifier": 24,
        "senses": []
      },
      "saves": {
        "fortitude": 28,
        "reflex": 25,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 7,
        "con": 7,
        "int": 5,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "athletics": 26,
        "deception": 24,
        "intimidation": 28,
        "occultism": 25,
        "stealth": 25
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "41MourwRyz9uDnd8",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d8 + 14 slashing",
          "traits": [
            "agile",
            "finesse",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "C5zKC61h7GcivnD5",
          "name": "Disgusted by Food",
          "kind": "passive",
          "description": "The morrowkin eats dreams and potential, not food. A creature that spends an action to brandish food at the morrowkin automatically makes the creature Sickened 1 (or increases its sickened value by 1, to a maximum of sickened 6), decreasing the morrowkin's AC, attack rolls, saves, skills, and ability DCs accordingly, as normal for the sickened condition. The morrowkin can't retch to reduce its sickened condition.",
          "traits": []
        },
        {
          "id": "GufPL7fXAz1R4tFA",
          "name": "Endless",
          "kind": "passive",
          "description": "If reduced to 0 Hit Points or incapacitated for more than a few rounds, the morrowkin vanishes. In 1 minute, it reappears refreshed completely as if the previous battle never happened, with full HP, with all effects on it cleared, and with its Swallow Future ability ready to use again.",
          "traits": []
        },
        {
          "id": "Vcb2fzxMkjOhWNPz",
          "name": "Drain Potential",
          "kind": "passive",
          "description": "The morrowkin tries to drain the motivation from its target, who must attempt a check (fortitude, dc:31) save. If the target fails, it is Doomed 1 (Doomed 2 on a critical failure) and must roll twice and use the worse result on all checks for 1 minute. Creatures wearing a hope talisman are unaffected.",
          "traits": [
            "misfortune",
            "void"
          ]
        },
        {
          "id": "sxD01nPswudJsjzS",
          "name": "Swallow Future",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The morrowkin inhales and draws forth the future deeds of all creatures around it. All creatures within a 30-foot type:emanation of the morrowkin take 6d8+18 mental damage depending on their check (will, dc:39) save. Creatures wearing hope talismans can choose to let their hope talisman break in order to ignore the effect after seeing the result of their Will save.\nCritical Success The creature takes no damage.\nSuccess The creature takes half damage and is Doomed 1.\nFailure The creature takes full damage and is Doomed 2.\nCritical Failure The creature takes double damage and becomes Doomed 4 (likely causing it to die immediately).",
          "traits": [
            "mental",
            "void"
          ]
        },
        {
          "id": "pAa1q5ts9oP6qdky",
          "name": "Tomorrow's Fury",
          "kind": "action",
          "description": "The morrowkin makes claw attacks against any number of targets within reach. The claw attacks count against the morrowkin's multiple attack penalty, but don't apply the penalty until after all attacks have been made.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 154,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "C5zKC61h7GcivnD5",
          "name": "Disgusted by Food",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 140,
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
          "sourceId": "Vcb2fzxMkjOhWNPz",
          "name": "Drain Potential",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 201,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
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
          "sourceId": "Vcb2fzxMkjOhWNPz",
          "name": "Drain Potential",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 642,
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
          "sourceId": "sxD01nPswudJsjzS",
          "name": "Swallow Future",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 773,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
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
          "sourceId": "sxD01nPswudJsjzS",
          "name": "Swallow Future",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 920,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 4",
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
          "sourceId": "sxD01nPswudJsjzS",
          "name": "Swallow Future",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:distortion-mirror",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "mu0khG3glMMREcnD",
      "slug": "distortion-mirror",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:eb9c446624c1e3432f10433e2610605fa625b3c9004c51e4e76cef68d1656906",
    "translatableHash": "sha256:08a5de53f651d9c438dda19a2d4d83cdf1e0bb943a49cdfad2290e71f88ce93b",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Distortion Mirror",
      "level": 14,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "Fun-house mirrors distort a viewer's reflection, painfully reshaping their body to match what appears in the reflected images.",
      "armorClass": 33,
      "hitPoints": 90,
      "hardness": 24,
      "stealth": {
        "modifier": 28,
        "details": "0 to notice the mirror"
      },
      "disable": "check (thievery, dc:38, name:Deface the Mirror, traits:action:disable-a-device) (master) to deface the mirror's pane, or Dispel Magic (7th rank; counteract DC 36) to dispel the mirror or counteract the transformation",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 day.",
      "saves": {
        "fortitude": 28,
        "reflex": 22,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "rKdbdgqCvS4u8s4L",
          "name": "Painful Transformation",
          "kind": "reaction",
          "description": "Trigger A creature is reflected in the mirror\nEffect The triggering creature's body is painfully squished, stretched, and distorted to match their reflection. The creature takes (6d10 + 30 force damage and must attempt a check (fortitude, dc:39, traits:damaging-effect) save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and is Clumsy 1 and Enfeebled 1 for 1 round.\nFailure The target takes full damage and is Clumsy 2 and Enfeebled 2 for 4 rounds.\nCritical Failure The target takes double damage and is clumsy 2 and enfeebled 2 for 1 minute. As long as the creature is clumsy or enfeebled, it additionally takes a –10-foot status penalty to its Speeds.\nWhen the effects of this trap end, the triggering creature's transformation ends, and its body reverts to its natural form.",
          "traits": [
            "attack"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 474,
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
          "sourceId": "rKdbdgqCvS4u8s4L",
          "name": "Painful Transformation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 538,
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
          "sourceId": "rKdbdgqCvS4u8s4L",
          "name": "Painful Transformation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 685,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
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
          "sourceId": "rKdbdgqCvS4u8s4L",
          "name": "Painful Transformation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 749,
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
          "sourceId": "rKdbdgqCvS4u8s4L",
          "name": "Painful Transformation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 121,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "mu0khG3glMMREcnD",
          "name": "Distortion Mirror",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:k-h-w-s-echo",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "wmKvVsfc6Hg1Bj8I",
      "slug": "k-h-w-s-echo",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a0e2bff1ec702bac93fa51a44d4a9b2d26b9a3e83e157bc8f26495ba69581a1f",
    "translatableHash": "sha256:64991a0a7ec43b1043d1287e766915f82b074fa9b9d15167a3bc5718ed4c1d62",
    "data": {
      "schemaVersion": 1,
      "name": "K. H. W.'s Echo",
      "level": 14,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "",
      "armorClass": 36,
      "hitPoints": 280,
      "speedFeet": 25,
      "perception": {
        "modifier": 30,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 24,
        "will": 28
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 4,
        "int": 5,
        "wis": 5,
        "cha": 8
      },
      "skills": {
        "acrobatics": 28,
        "arcana": 25,
        "athletics": 25,
        "nature": 25,
        "occultism": 25,
        "religion": 25
      },
      "languages": [
        "common",
        "tien"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "6LPHouUKdhwChveQ",
          "name": "Rope Dart",
          "bonus": 29,
          "damage": "4d4 + 13 piercing; 2d6 mental",
          "traits": [
            "disarm",
            "finesse",
            "magical",
            "sweep",
            "tethered",
            "trip"
          ]
        },
        {
          "id": "hwQM6l4pirYi7vuV",
          "name": "Rope Dart",
          "bonus": 29,
          "damage": "4d4 + 13 piercing; 2d6 mental",
          "traits": [
            "disarm",
            "finesse",
            "magical",
            "sweep",
            "tethered",
            "thrown-80",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "g86YWdXagoWqk0OQ",
          "name": "Destabilized Form",
          "kind": "passive",
          "description": "When the Echo has fewer than 140 Hit Points, his form destabilizes, large chunks disintegrating from his face, limbs, and torso. White moths constantly stream from the missing spaces, creating a 10-foot emanation that deals 6d6 mental damage with a check (will, dc:34, basic, options:area-effect).\nAs long as the aura persists, he can dissolve into moths and re-form at another location within 15 feet as a free action at the beginning of each of his turns; this has the occult and teleportation traits.",
          "traits": []
        },
        {
          "id": "p8vS3GT8MXVMDs8P",
          "name": "Reactive Strike (Special)",
          "kind": "reaction",
          "description": "The Echo has reach 15 for the purpose of determining when Reactive Strike triggers and when making Reactive Strikes.",
          "traits": []
        },
        {
          "id": "9AePbujsZky8xUjK",
          "name": "Astral Spindel Implement",
          "kind": "passive",
          "description": "The Echo carries a drop spindle that constantly spins red astral thread, which is both his thaumaturgic implement and weapon. If his rope dart is lost or broken, he can re-form it with an Interact action. If he critically succeeds at a rope dart Strike, overwhelming thoughts and figments flow down the thread into the target's mind. The target becomes Confused for 1 round.",
          "traits": []
        },
        {
          "id": "PSN0OsnaXCyM9qu3",
          "name": "Astral Thread Control",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The Echo's previous action was a successful thrown rope dart Strike\nEffect The Echo flicks his wrist and makes a follow-up thrown rope dart Strike at a different target within 30 feet of the first target, using the same multiple attack penalty as his previous Strike. Regardless of whether his attack hits, he then retrieves the weapon.",
          "traits": []
        },
        {
          "id": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "kind": "passive",
          "description": "Frequency once per day\nTrigger The Echo's turn begins and he's stunned, slowed, Confused, Controlled, Immobilized, Grabbed, Paralyzed, Restrained, or otherwise can't act\nEffect The Echo has set up numerous contingencies in the event he's compromised. Talismans on his body shatter, counteracting the triggering effect. The Echo can use this free action even if he can't act.",
          "traits": []
        },
        {
          "id": "crjSzGgHUw6zPIVX",
          "name": "Reconstitute from Thought",
          "kind": "action",
          "description": "Requirements The Echo is standing on one of the eight large islands of the map, and the island hasn't darkened\nEffect The Echo throws his rope dart into the island and uses it to absorb mental essence from the mindscape, repairing himself. He regains 45 healing Hit Points and the island turns a desaturated gray for 1 day, preventing future absorption and disabling the Call of the Void hazard on that island.",
          "traits": [
            "healing"
          ]
        },
        {
          "id": "vt810lsvoNHLaCNF",
          "name": "Spindle's Web",
          "kind": "action",
          "description": "The Echo's spindle revolves faster and faster until it's a blur, lashing red threads in every direction. The threads deal 7d6 slashing damage to all creatures in a 30-foot emanation, with a check (reflex, dc:34, basic, options:area-effect). If a creature fails its save, the threads awaken the mindscape anchor within it, affecting it differently based on which anchor that creature used to gain access to the center of the mindscape. (If there is a PC who didn't absorb a mindscape anchor, for instance because there are more than four PCs in the party, then use the anchor of the PC closest to them.)\nThe Echo then can't use Spindle's Web for 1d4.\n• Lantern The lantern outlines the creature with searing Revealing Light that deals 2d6 persistent fire damage.\n• Mirror The mirror reflects the creature to another location, teleporting them to a clear space within 25 feet of their current location.\n• Chalice The chalice drains life force, granting the Echo temporary HP equal to half the damage dealt.\n• Tome The tome floods the creature's mind with information; the target is Slowed 1 for 1 round.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "p8vS3GT8MXVMDs8P",
          "name": "Reactive Strike (Special)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 374,
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
          "sourceId": "9AePbujsZky8xUjK",
          "name": "Astral Spindel Implement",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/rules/0/text",
        "sourceIndex": 148,
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
          "sourceId": "9AePbujsZky8xUjK",
          "name": "Astral Spindel Implement",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 124,
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
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 177,
        "uuid": "Compendium.pf2e.conditionitems.Item.Controlled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Controlled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Controlled",
          "sourceId": "9qGBRpbX9NEwtAAr",
          "name": "Controlled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 232,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 288,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 340,
        "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Paralyzed",
          "sourceId": "6uEgoh53GbXuHpTF",
          "name": "Paralyzed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 394,
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
          "sourceId": "gjGhslPt9ZQSI0yX",
          "name": "Contingency Oathday-Nine-Rova",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 430,
        "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Call of the Void",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-dark-archive.Actor.Call of the Void",
          "package": "pf2e",
          "sourcePack": "pathfinder-dark-archive",
          "documentType": "Actor",
          "compendiumKey": "Call of the Void",
          "sourceId": "0AdtolhMWrPlzVZY",
          "name": "Call of the Void",
          "type": "hazard"
        },
        "owner": {
          "sourceId": "crjSzGgHUw6zPIVX",
          "name": "Reconstitute from Thought",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 878,
        "uuid": "Compendium.pf2e.spells-srd.Item.Revealing Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Revealing Light",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Revealing Light",
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vt810lsvoNHLaCNF",
          "name": "Spindle's Web",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 1369,
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
          "sourceId": "vt810lsvoNHLaCNF",
          "name": "Spindle's Web",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:sigil-of-deepest-fears",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "92rwV7OmBQyY4ZV4",
      "slug": "sigil-of-deepest-fears",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:56ee78e9099bd47f058897961d3f71c6966fe2b2ad55fb5fa68ed1cc1b136fcc",
    "translatableHash": "sha256:bd7001c63f4df2c3645ed6891843365121ba678002f144c542c1743c85493762",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Sigil of Deepest Fears",
      "level": 17,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "An arcane sigil forces creatures to confront their greatest fear.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 33,
        "details": "(master)"
      },
      "disable": "check (thievery, dc:43, name:Drain the Sigil's Power, traits:action:disable-a-device) (master) to drain the sigil's power harmlessly, or Dispel Magic (9th rank; counteract DC 42) to counteract the sigil",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 day.",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "mF3Y5psHWHrkB81u",
          "name": "Face Your Fear",
          "kind": "reaction",
          "description": "Trigger A creature moves within 10 feet of the sigil\nEffect All creatures within 120 feet of the sigil are affected by a Phantasmagoria spell (check (will, dc:40, options:area-effect,damaging-effect) save).",
          "traits": [
            "arcane",
            "death",
            "emotion",
            "fear",
            "illusion",
            "mental"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 170,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmagoria",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmagoria",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantasmagoria",
          "sourceId": "MJx7DmjsWYzDZ3a4",
          "name": "Phantasmagoria",
          "type": "spell"
        },
        "owner": {
          "sourceId": "mF3Y5psHWHrkB81u",
          "name": "Face Your Fear",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/disable",
        "sourceIndex": 137,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "92rwV7OmBQyY4ZV4",
          "name": "Sigil of Deepest Fears",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:shrouded-assailant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "wjWedZ12f3t8ixE1",
      "slug": "shrouded-assailant",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:5e7fc0394e7e4608783d10ff99f5344967aa3bb226b2417c213633b7602227b1",
    "translatableHash": "sha256:6030065c0175cdc6998a2e120d4148b096464b73c24c6a75e04997234b31f77f",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Shrouded Assailant",
      "level": 17,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "haunt"
      ],
      "description": "A spirit steps out of a covered mirror, pulling off and becoming shrouded in the cloth, which reveals the mirror. The shrouded figure attacks the living until the cloth is yanked off, which banishes the formless spirit.",
      "armorClass": 40,
      "hitPoints": 230,
      "hardness": 0,
      "stealth": {
        "modifier": 33,
        "details": ""
      },
      "disable": "check (thievery, dc:43, name:Steal the Cloth, traits:action:disable-a-device) (master) to steal the cloth before the spirit manifests, or check (athletics, dc:47, name:Pull the Cloth Off) to pull the cloth off the spirit after it manifests",
      "isComplex": true,
      "routine": "(3 actions) The spirit uses 3 actions to Step, fly 60 feet, or Strike, in any order. On a successful Strike the spirit's target is Frightened 1, and on a critical success, the target is Frightened 2.",
      "reset": "The haunt is reset when the mirror is covered again.",
      "saves": {
        "fortitude": 26,
        "reflex": 32,
        "will": 35
      },
      "defenses": {
        "immunities": [],
        "resistances": [
          "all-damage 20 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "ljtEKeEjWZpLfCLL",
          "name": "Don Shroud",
          "kind": "reaction",
          "description": "Trigger A creature enters the area\nEffect The spirit steps out of the mirror, wearing the cloth as a shroud and revealing the mirror. The triggering creature is Frightened 3 unless they succeed at a check (will, dc:38) save. The haunt then rolls initiative.",
          "traits": [
            "occult"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 212,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ljtEKeEjWZpLfCLL",
          "name": "Don Shroud",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/routine",
        "sourceIndex": 134,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wjWedZ12f3t8ixE1",
          "name": "Shrouded Assailant",
          "type": "hazard"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/routine",
        "sourceIndex": 244,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wjWedZ12f3t8ixE1",
          "name": "Shrouded Assailant",
          "type": "hazard"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-dark-archive:spirit-window",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-dark-archive",
      "sourceId": "eX1vJnbUagKPdSbU",
      "slug": "spirit-window",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:c44f8ef7cbe7bf62d66b255476edfe450b0afead66d3a38e64ae74255c762dfd",
    "translatableHash": "sha256:29b5634ef30560a34a51bb5283c8595e112aa4cef9a72e9c1bf21e01f012ca95",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Spirit Window",
      "level": 20,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "haunt"
      ],
      "description": "Spirits trapped inside a haunted window harm those who touch the window.",
      "armorClass": 45,
      "hitPoints": 132,
      "hardness": 35,
      "stealth": {
        "modifier": 41,
        "details": ""
      },
      "disable": "check (occultism, dc:48, name:Free the Spirits) (legendary) to free the spirits from the mirror, or check (religion, dc:48, name:Banish the Spirits) (legendary) to banish the spirits",
      "isComplex": false,
      "routine": "",
      "reset": "The trap resets after 1 round.",
      "saves": {
        "fortitude": 36,
        "reflex": 30,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "2WfGqYcBTEQfIJje",
          "name": "Siphon Soul",
          "kind": "reaction",
          "description": "Trigger A creature touches the window\nEffect The triggering creature takes 8d10+44 void damage with a check (will, dc:42, basic) save as the window attempts to steal their soul. If this damage would kill the target, the target's soul is trapped inside the window with the effects of Seize Soul.",
          "traits": [
            "occult",
            "void"
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 342,
        "uuid": "Compendium.pf2e.spells-srd.Item.Seize Soul",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Seize Soul",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Seize Soul",
          "sourceId": "GYmXvS9NJ7QwfWGg",
          "name": "Seize Soul",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2WfGqYcBTEQfIJje",
          "name": "Siphon Soul",
          "type": "action"
        }
      }
    ]
  }
]
