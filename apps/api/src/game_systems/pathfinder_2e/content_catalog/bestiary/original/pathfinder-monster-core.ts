import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

const DEFAULT_NPC_ICON = '/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg'

export const PATHFINDER_MONSTER_CORE_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:goblin-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1",
    "translatableHash": "git-blob:d242458d376fb3f258e8a9c20cc7e2f500c298a1",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "fLLKuOXwPq1Iq0U4",
      "slug": "goblin-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Warrior",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "Frontline goblin fighters prefer to battle in large groups and overwhelm enemies through numbers and mobility.",
      "armorClass": 16,
      "hitPoints": 6,
      "speedFeet": 25,
      "perception": {
        "modifier": 2,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": -1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 2,
        "nature": 1,
        "stealth": 5
      },
      "languages": [
        "goblin",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "CnmgzGmi2Avq67QA",
          "name": "Dogslicer",
          "bonus": 7,
          "damage": "1d6 slashing",
          "traits": [
            "agile",
            "backstabber",
            "finesse"
          ]
        },
        {
          "id": "4EXgRMqNIRLXxB1c",
          "name": "Shortbow",
          "bonus": 7,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "czwGWW73rkPW7vBg",
          "name": "Goblin Scuttle",
          "kind": "reaction",
          "description": "When a goblin ally ends a move action adjacent to the warrior, the warrior Steps."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.olwngGXM3hpgoLEP",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.olwngGXM3hpgoLEP",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "olwngGXM3hpgoLEP",
          "sourceId": "olwngGXM3hpgoLEP",
          "name": "Dogslicer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "mMD4kftdZOuc9fDs",
          "name": "Dogslicer",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hIgqLgH3YcLZBeoT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hIgqLgH3YcLZBeoT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hIgqLgH3YcLZBeoT",
          "sourceId": "hIgqLgH3YcLZBeoT",
          "name": "Shortbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "IJpCpIMcnl9ZLZlp",
          "name": "Shortbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.4tIVTg9wj56RrveA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.4tIVTg9wj56RrveA",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "4tIVTg9wj56RrveA",
          "sourceId": "4tIVTg9wj56RrveA",
          "name": "Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "WCcXHATq4Dp0GePS",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.w2ENw2VMPcsbif8g",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.w2ENw2VMPcsbif8g",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "w2ENw2VMPcsbif8g",
          "sourceId": "w2ENw2VMPcsbif8g",
          "name": "Arrows",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "b5rXje1IafNc5Ey6",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 142,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Step",
        "label": "Steps",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Step",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Step",
          "sourceId": "UHpkTuCtyaPqiCAB",
          "name": "Step",
          "type": "action"
        },
        "owner": {
          "sourceId": "czwGWW73rkPW7vBg",
          "name": "Goblin Scuttle",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:wolf",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "git-blob:d93e78ff6feddaf9c7114e900bc13c718bc924c9",
    "translatableHash": "git-blob:d93e78ff6feddaf9c7114e900bc13c718bc924c9",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BN5Lb6IsQ9Wyu3rL",
      "slug": "wolf",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Wolf",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Wolves hunt in packs, surround vulnerable prey, and gain an advantage when allies are close to the same target.",
      "armorClass": 15,
      "hitPoints": 24,
      "speedFeet": 35,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 6,
        "stealth": 7,
        "survival": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "NX0owCPUZbsVJ4az",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed",
            "knockdown"
          ]
        }
      ],
      "actions": [
        {
          "id": "GhRRqxvK6T21zheo",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The wolf's Strikes deal 1d4 extra damage to creatures within reach of at least two of the wolf's allies."
        },
        {
          "id": "dB4Pr3yiNKH32fE8",
          "name": "Knockdown",
          "kind": "action",
          "description": "Standard bestiary Knockdown action."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.BCLvAx4Pz4MLa2pu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.BCLvAx4Pz4MLa2pu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "BCLvAx4Pz4MLa2pu",
          "sourceId": "BCLvAx4Pz4MLa2pu",
          "name": "Knockdown",
          "type": "action"
        },
        "owner": {
          "sourceId": "dB4Pr3yiNKH32fE8",
          "name": "Knockdown",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skeleton-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "git-blob:fb28b14a418faa3e0db57c8a3bc534ba4643dd97",
    "translatableHash": "git-blob:fb28b14a418faa3e0db57c8a3bc534ba4643dd97",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "trchDxbDR2TiPMxT",
      "slug": "skeleton-guard",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Skeleton Guard",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Skeleton guards are among the most common animated undead and are usually created to protect a location.",
      "armorClass": 16,
      "hitPoints": 4,
      "speedFeet": 25,
      "perception": {
        "modifier": 2,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 8,
        "will": 2
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 0,
        "int": -5,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 3
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "cold 5",
          "electricity 5",
          "fire 5",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jL9PDQ27Dz6UAMOH",
          "name": "Scimitar",
          "bonus": 6,
          "damage": "1d6+2 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        },
        {
          "id": "EzSKWtWM2tSTtZwA",
          "name": "Claw",
          "bonus": 6,
          "damage": "1d4+2 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "7ODNVUAaNraSivsT",
          "name": "Shortbow",
          "bonus": 6,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "m25t326n1Ovt0t5U",
          "name": "Void Healing",
          "kind": "passive",
          "description": "The creature is healed by void effects and harmed by vitality effects."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hIgqLgH3YcLZBeoT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hIgqLgH3YcLZBeoT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hIgqLgH3YcLZBeoT",
          "sourceId": "hIgqLgH3YcLZBeoT",
          "name": "Shortbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "hTTposL17d8Wx1Gf",
          "name": "Shortbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.grmaV4GdoGD7sKbn",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.grmaV4GdoGD7sKbn",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "grmaV4GdoGD7sKbn",
          "sourceId": "grmaV4GdoGD7sKbn",
          "name": "Scimitar",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "lvEBxcOGsiz69ynp",
          "name": "Scimitar",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.w2ENw2VMPcsbif8g",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.w2ENw2VMPcsbif8g",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "w2ENw2VMPcsbif8g",
          "sourceId": "w2ENw2VMPcsbif8g",
          "name": "Arrows",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "C1Qh67YEkuH7r5lt",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.TTCw5NusiSSkJU1x",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.TTCw5NusiSSkJU1x",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "TTCw5NusiSSkJU1x",
          "sourceId": "TTCw5NusiSSkJU1x",
          "name": "Void Healing",
          "type": "action"
        },
        "owner": {
          "sourceId": "m25t326n1Ovt0t5U",
          "name": "Void Healing",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:animated-statue",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "sha256:b0b3e195176530cd99987a9dc1383b438009a9378374fee85b31ac8972422452",
    "translatableHash": "sha256:33ec37da557fa2e863d8770ddc4f1a369137f74c4a07602437efb29ceba6a4e3",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yQ2mosomuAPiLMkU",
      "slug": "animated-statue",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Animated Statue",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Animated statues guard crypts, shrines, and civic buildings, often hiding among ordinary statues until an intruder draws their attention.",
      "armorClass": 19,
      "hitPoints": 35,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": -2,
        "con": 5,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "animated-statue-fist",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d8+6 bludgeoning",
          "traits": [
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "animated-statue-construct-armor",
          "name": "Construct Armor (Hardness 6)",
          "kind": "passive",
          "description": "Hardness reduces damage by 6. Once the statue has fewer than half its Hit Points, or after it takes damage from a critical hit, its construct armor breaks and its Armor Class is reduced to 15."
        },
        {
          "id": "animated-statue-grab",
          "name": "Grab",
          "kind": "action",
          "description": "The animated statue Grabs a creature after a successful Strike."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
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
          "sourceId": "gx4QtoqFUMcJKh9b",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dryad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "sha256:1d68b72d115242dd5584ec31ed34170fb3a1c2417ebdd877a63a2a2d2481acce",
    "translatableHash": "sha256:a30a14f39d6218287e7215743ae0112098b7197a2718d987ec17ea8ffe51dc50",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "4MoqBCDQA6FR1sPw",
      "slug": "dryad",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Dryad",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fey",
        "nymph",
        "plant",
        "wood"
      ],
      "description": "Dryads are fey guardians of trees and wooded places. They favor persuasion and enchantment but defend their sacred groves when peaceful warnings fail.",
      "armorClass": 17,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 5,
        "crafting": 7,
        "diplomacy": 9,
        "nature": 13,
        "stealth": 9,
        "survival": 12
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "dryad-branch",
          "name": "Branch",
          "bonus": 12,
          "damage": "1d12+2 bludgeoning",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "dryad-nature-empathy",
          "name": "Nature Empathy",
          "kind": "passive",
          "description": "The dryad can ask questions of, receive answers from, and use Diplomacy with animals and plants."
        },
        {
          "id": "dryad-constant-spells",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "The dryad benefits from the constant spells listed in its source stat block."
        },
        {
          "id": "dryad-tree-dependent",
          "name": "Tree Dependent",
          "kind": "passive",
          "description": "The dryad is bonded to a great tree. Remaining more than 300 feet from it for 24 hours weakens the dryad until it returns."
        },
        {
          "id": "dryad-tree-meld",
          "name": "Tree Meld",
          "kind": "action",
          "description": "The dryad merges with its bonded tree and can enter an extradimensional living space inside it with up to two adjacent willing creatures."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.F1qxaqsEItmBura2",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.F1qxaqsEItmBura2",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "F1qxaqsEItmBura2",
          "sourceId": "F1qxaqsEItmBura2",
          "name": "Nature's Pathway",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Tlmne2vkQDHJv4Qp",
          "name": "Nature's Pathway",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 5,
        "uuid": "Compendium.pf2e.spells-srd.Item.One with Plants",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.One with Plants",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "One with Plants",
          "sourceId": "dileJ0Yxqg76LMvu",
          "name": "One with Plants",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nu6HxTKMW550KwDx",
          "name": "Tree Meld",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.qwlh6aDgi86U3Q7H",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.qwlh6aDgi86U3Q7H",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "qwlh6aDgi86U3Q7H",
          "sourceId": "qwlh6aDgi86U3Q7H",
          "name": "Suggestion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qFF8iedWpoFhMaq1",
          "name": "Suggestion",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
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
          "sourceId": "JHRAqx6n3V8JdAaD",
          "name": "Entangling Flora (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
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
          "sourceId": "JHRAqx6n3V8JdAaD",
          "name": "Entangling Flora (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
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
          "sourceId": "JHRAqx6n3V8JdAaD",
          "name": "Entangling Flora (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
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
          "sourceId": "JHRAqx6n3V8JdAaD",
          "name": "Entangling Flora (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "P01NEHCnXAuWXAeD",
          "name": "One with Plants (At Will, See Tree Meld)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.vLA0q0WOK2YPuJs6",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.vLA0q0WOK2YPuJs6",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "vLA0q0WOK2YPuJs6",
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "OiaIK5zJpC3JgJri",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 916,
        "uuid": "Compendium.pf2e.conditionitems.Item.Friendly",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Friendly",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Friendly",
          "sourceId": "v66R7FdOf11l94im",
          "name": "Friendly",
          "type": "condition"
        },
        "owner": {
          "sourceId": "OiaIK5zJpC3JgJri",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 1011,
        "uuid": "Compendium.pf2e.conditionitems.Item.Helpful",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Helpful",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Helpful",
          "sourceId": "v44P3WUcU1j0115l",
          "name": "Helpful",
          "type": "condition"
        },
        "owner": {
          "sourceId": "OiaIK5zJpC3JgJri",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
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
          "sourceId": "Htp5vEiKqaHNeA87",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
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
          "sourceId": "Htp5vEiKqaHNeA87",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
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
          "sourceId": "Htp5vEiKqaHNeA87",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
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
          "sourceId": "Htp5vEiKqaHNeA87",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kakyXBG5WA8c6Zfd",
          "sourceId": "kakyXBG5WA8c6Zfd",
          "name": "Constant Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "1xLTVMSCCIoZiFMc",
          "name": "Constant Spells",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:griffon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "sourceHash": "sha256:72ea29e4af04a1ea9236547ab0c14cdd5a55b06ffc633117e8786976a671dc8b",
    "translatableHash": "sha256:2f27cf00052ef524de50638935eb210fc70a81cc65be96a53fd78ab6416782f1",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "gWgMg7cARqOe82O6",
      "slug": "griffon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "data": {
      "schemaVersion": 1,
      "name": "Griffon",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Griffons are regal beasts with a great cat’s hindquarters and the head, wings, and forelimbs of a bird of prey. Many cultures revere them as symbols of freedom and strength.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 13,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 12,
        "intimidation": 10,
        "stealth": 11,
        "survival": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "griffon-beak",
          "name": "Beak",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": [
            "deadly-d10",
            "unarmed"
          ]
        },
        {
          "id": "griffon-talon",
          "name": "Talon",
          "bonus": 14,
          "damage": "2d6+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "griffon-wing",
          "name": "Wing",
          "bonus": 14,
          "damage": "2d6+4 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "griffon-flying-strafe",
          "name": "Flying Strafe",
          "kind": "action",
          "description": "The griffon Flies up to its fly Speed and makes two talon Strikes during that movement, each against a different creature."
        },
        {
          "id": "griffon-pounce",
          "name": "Pounce",
          "kind": "action",
          "description": "The griffon Strides and makes a talon Strike at the end of that movement."
        },
        {
          "id": "griffon-regal-shriek",
          "name": "Regal Shriek",
          "kind": "action",
          "description": "The griffon unleashes a terrifying shriek. Creatures in a 60-foot emanation attempt a Will save and can become frightened."
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 110,
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
          "sourceId": "OAt8guQQNXMQRYHW",
          "name": "Pounce",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 397,
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
          "sourceId": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 514,
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
          "sourceId": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 595,
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
          "sourceId": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 747,
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
          "sourceId": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 828,
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
          "sourceId": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "type": "action"
        }
      }
    ]
  }
]
