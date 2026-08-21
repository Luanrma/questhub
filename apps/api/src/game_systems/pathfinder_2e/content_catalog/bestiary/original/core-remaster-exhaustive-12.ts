import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_12_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:urchin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "a36bfgbqp1lt2bik",
      "slug": "urchin",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ed33e18135049ab32ca918178206f31b8be33e463873f277f56e2c91361da79c",
    "translatableHash": "sha256:8fbffa5758bcb11e70ce7415e2785cce173ea45b70549952b33c093e605b2f92",
    "data": {
      "schemaVersion": 1,
      "name": "Urchin",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Although their escapades might be notorious, few urchins are thrill-seekers. For some urchins, when begging alone is not enough to fill their bellies, theft becomes a viable survival tactic. Many underworld powers also use urchins as spies and messengers, while training them to become future pickpockets, burglars, and foot soldiers.\nUnfortunately, every society has people living on its fringes. While good communities work to grant aid and respite to their downtrodden, sometimes-due to economic downturn, famine, or war-the ranks of the less fortunate exceed the community's capacity to support them. In heartless neutral and evil societies, poverty is seen as an inevitability that can never be truly eradicated, or even worse, as a tool to be manipulated for political gain.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 5,
        "deception": 4,
        "society": 3,
        "stealth": 5,
        "survival": 3,
        "thievery": 7
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
          "id": "3CtPYZLeE2j7fIME",
          "name": "Shiv",
          "bonus": 5,
          "damage": "1d4-1 piercing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "IAFE4UVaYTfZgp3J",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4-1 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "2pNLHufgvxymiXGj",
          "name": "Rock",
          "bonus": 5,
          "damage": "1d4-1 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "WGBYwG2C4eElCrPd",
          "name": "Collaborative Thievery",
          "kind": "passive",
          "description": "The urchin gains a +1 circumstance bonus to Steal or Palm an Object while within 10 feet of an ally who has the pickpocket ability.",
          "traits": []
        },
        {
          "id": "lC7KFntiTwd1FRo7",
          "name": "Pickpocket",
          "kind": "passive",
          "description": "For an urchin, the DC to [[/act steal]] or [[/act palm-an-object]] isn't increased by 5 for an item that's closely guarded. They can Steal objects that would be extremely noticeable or time-consuming to remove (like worn shoes, armor, or actively wielded objects).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "ZMcT1sMmOY8rwe3w",
          "name": "Shiv",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 47,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Steal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Steal",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Steal",
          "sourceId": "RDXXE7wMrSPCLv5k",
          "name": "Steal",
          "type": "action"
        },
        "owner": {
          "sourceId": "WGBYwG2C4eElCrPd",
          "name": "Collaborative Thievery",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 96,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Palm an Object",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Palm an Object",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Palm an Object",
          "sourceId": "ijZ0DDFpMkWqaShd",
          "name": "Palm an Object",
          "type": "action"
        },
        "owner": {
          "sourceId": "WGBYwG2C4eElCrPd",
          "name": "Collaborative Thievery",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:commoner",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "APn9B54hhRtr0oCQ",
      "slug": "commoner",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bfec8ee99af645f1059b72679f1c7cb12d30e62f3007acd2477d70cc0318178d",
    "translatableHash": "sha256:c45aaf3e152f31dccf042aaa2325fa5131c7fc816aac41af0dfedb254be3e3e9",
    "data": {
      "schemaVersion": 1,
      "name": "Commoner",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Many commoners live hard lives of toil as they work to keep their families fed and housed in relative comfort.\nSociety is built upon the backs of laborers.",
      "armorClass": 13,
      "hitPoints": 10,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 3
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "society": 2
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
          "id": "o8GJ3AVTDFtS1dFG",
          "name": "Sickle",
          "bonus": 5,
          "damage": "1d4+2 slashing",
          "traits": [
            "agile",
            "trip"
          ]
        },
        {
          "id": "Q9h6X4WFBsWo4KlV",
          "name": "Rock",
          "bonus": 3,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "n3jCGW9WDHnhi4Ky",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "T3ZpHsIT64RGyhT0",
          "name": "Power of the Mob",
          "kind": "passive",
          "description": "When three or more commoners are adjacent to each other, each commoner gets a +1 circumstance bonus to Athletics checks to [[/act shove]], attack rolls, and damage rolls.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ynnBwzkzsR6B73iO",
          "sourceId": "ynnBwzkzsR6B73iO",
          "name": "Sickle",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "UZlHtMydIq06OfJW",
          "name": "Sickle",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:beggar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "d47PtIdozWwSOtur",
      "slug": "beggar",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2814eb5e013da239abc1d797cf19989aff88be1b8c80916491f632ac4c995dec",
    "translatableHash": "sha256:e9fc200d04497d7aeaaa24c7509712e5153b07f15924bf30370ffcfdd485f3e5",
    "data": {
      "schemaVersion": 1,
      "name": "Beggar",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Wherever there is poverty, there are beggars. Beggars are truly the downtrodden of society-folks who have been cast out into the streets due to a variety of setbacks or the weight of circumstance. Some beggars work for underworld organizations as lookouts, spies, or even hired muscle on the cheap-sometimes by choice, but often not.\nUnfortunately, every society has people living on its fringes. While good communities work to grant aid and respite to their downtrodden, sometimes-due to economic downturn, famine, or war-the ranks of the less fortunate exceed the community's capacity to support them. In heartless neutral and evil societies, poverty is seen as an inevitability that can never be truly eradicated, or even worse, as a tool to be manipulated for political gain.",
      "armorClass": 14,
      "hitPoints": 10,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 3,
        "deception": 3,
        "diplomacy": 3,
        "stealth": 5
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
          "id": "Ew9YdRtlJy7JUSHa",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "vprpkjJKcOBq6m7X",
          "name": "Rock",
          "bonus": 5,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "L2NMWuwie5fk4t5D",
          "name": "Beat a Retreat",
          "kind": "action",
          "description": "The beggar Strides three times and gains a +2 circumstance bonus to AC during those actions.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:obsessive-researcher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "DPSvIsPlVrlx7Q8V",
      "slug": "obsessive-researcher",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:40749500b8efcaf9db9babe6eb533ff4aa5da56e5ddcbaf49e1f4202ce105f09",
    "translatableHash": "sha256:77491057c350dba7b2251dede920bd44c0469c5a9d33b783f180b7d9a0fbabc6",
    "data": {
      "schemaVersion": 1,
      "name": "Obsessive Researcher",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Academia rewards specialization, and so the universities and athenaeums of the Inner Sea are full to the brim of sunlight-deprived scholars who are the world experts in such obscure topics such as the migratory habits of bogwids or the folklore of pre-Choral Brevoy.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 14,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 2,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 2,
        "int": 5,
        "wis": 0,
        "cha": -1
      },
      "skills": {
        "stealth": 5
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
          "id": "jHXLev5IQ5cwiOb4",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "yIEO3zhECDeoar3d",
          "name": "Pen",
          "bonus": 4,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "nonlethal"
          ]
        }
      ],
      "actions": [
        {
          "id": "qLiaBfaRDMjWhOg9",
          "name": "Monomania",
          "kind": "passive",
          "description": "Each obsessive researcher is preoccupied with a hyper-specialized, niche body of knowledge (their Narrow Lore) in which they are the acknowledged world authority. The catch is that when such an expert goes wrong, they go badly wrong—if an obsessive researcher gets a success on a Narrow Lore roll, they get a critical success instead. But if they roll a failure, then they get a critical failure instead.",
          "traits": []
        },
        {
          "id": "dOdZhNEI72ExiOvY",
          "name": "World-Class Authority",
          "kind": "passive",
          "description": "In their narrow field of interest, the obsessive researcher is a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "eV272gzjPHmqW46i",
          "name": "Idée Fixe",
          "kind": "passive",
          "description": "Nothing gets between the obsessive researcher and their subject. If the obsessive researcher is targeted by a spell or ability with a Will save that would prompt them to give up, ignore, or divert course from the subject of their Narrow Lore (for example, using a Suggestion to get a specialist in Jistkan artificing to give up a construct part), then the obsessive researcher can use their Narrow Lore skill in place of their Will save.",
          "traits": []
        },
        {
          "id": "MmlQuNf8g01gtJip",
          "name": "Furious Harangue",
          "kind": "action",
          "description": "The researcher starts hectoring an enemy within 30 feet, upbraiding them for daring to interrupt such valuable research. The target must attempt a check (will, dc:15, options:inflicts:frightened,inflicts:fleeing) save. On a failure, they are Frightened 2 (Frightened 3 and Fleeing for 1 round on a critical failure). Regardless of the result of its save, the target is temporarily immune for 1 hour.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "jrWZVrY9nj0041t2",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 267,
        "uuid": "Compendium.pf2e.spells-srd.Item.Suggestion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Suggestion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Suggestion",
          "sourceId": "qwlh6aDgi86U3Q7H",
          "name": "Suggestion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "eV272gzjPHmqW46i",
          "name": "Idée Fixe",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 243,
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
          "sourceId": "MmlQuNf8g01gtJip",
          "name": "Furious Harangue",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 312,
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
          "sourceId": "MmlQuNf8g01gtJip",
          "name": "Furious Harangue",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 384,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "MmlQuNf8g01gtJip",
          "name": "Furious Harangue",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:teacher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "EuDz8wgZY3nxyBTr",
      "slug": "teacher",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fc12cb349d970954a9e00f43ecbe5fce8231620c99c10dd34f41ee6e6fbfc87b",
    "translatableHash": "sha256:fbb3e5f76183780ed50c3e6f41c36e7cdddb45bc491eca68148da5c0384c89d4",
    "data": {
      "schemaVersion": 1,
      "name": "Teacher",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The passing of knowledge and traditions from generation to generation is a time-honored occupation. Teachers exist to strengthen their populations with literacy, history, and advanced sciences, but most of all with inspiration. Most teachers provide general knowledge so their students are well-rounded, but some are experts or even masters of a single discipline.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 12,
      "hitPoints": 5,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 1,
        "reflex": 2,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 0,
        "con": -1,
        "int": 4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "diplomacy": 5,
        "intimidation": 5
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
          "id": "hpPQrfATIi4fXq3L",
          "name": "Cane",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "LFlxp5EVniSGklRN",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wCVNn96k1C1OYJlV",
          "name": "Academic Specialist",
          "kind": "passive",
          "description": "For academic encounters, a teacher is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "bqpvez0u4Rw93KXo",
          "name": "Font of Knowledge",
          "kind": "passive",
          "description": "The teacher can attempt to Recall Knowledge on any general subject with a +10 modifier.",
          "traits": []
        },
        {
          "id": "Azm5VrtnHNvlTD1i",
          "name": "Inspirational Presence",
          "kind": "passive",
          "description": "50 feet. Any of the teacher's students in the aura gains a +1 circumstance bonus to Recall Knowledge.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "I6H2KqzFAWfPj0ZV",
          "name": "Cane (Functions as Staff)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "w4Hd6nunVVqw3GWj",
          "sourceId": "w4Hd6nunVVqw3GWj",
          "name": "Basic Crafter's Book",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Rb6YoSdQpTTq789g",
          "name": "Textbook",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "XvsrVQwBMhbgcPT6",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 30,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "bqpvez0u4Rw93KXo",
          "name": "Font of Knowledge",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "Azm5VrtnHNvlTD1i",
          "name": "Inspirational Presence",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:librarian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GkatOjGPdFT9z0od",
      "slug": "librarian",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a04633e40326c9ba2402e44a06ea2a71f380648c52e0b65920c26e80332cbebb",
    "translatableHash": "sha256:400d5b6e2d246798747b28a7b40333c8b81a7f425c1dfb06d1073eb508c6518f",
    "data": {
      "schemaVersion": 1,
      "name": "Librarian",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Keepers of knowledge, librarians document discoveries, events, and laws. The best librarians record events twice: once for public record and again to record how events truly unfolded.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 13,
      "hitPoints": 6,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 3,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 3,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "arcana": 9,
        "nature": 8,
        "religion": 8
      },
      "languages": [
        "common",
        "draconic",
        "elven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jhzTyAeLv0K1sK7c",
          "name": "Book",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "nonlethal"
          ]
        },
        {
          "id": "3Hp4zP3MQ5RzRFcu",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "HpLKljvtfXk5Em41",
          "name": "Book",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "nonlethal",
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "Ye6jF7F3YdRigibJ",
          "name": "Methodical Research",
          "kind": "passive",
          "description": "When Searching through stacks of books, a librarian can find the answer to almost any question. This allows the librarian to use Library Lore in place of other lore skills, given enough time. The GM determines the DC of the check and the amount of time it takes (typically, a librarian can attempt three or four checks during 1 day of downtime).",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "tuvVY1uW8ahHioV2",
          "name": "Research Specialist",
          "kind": "passive",
          "description": "A librarian is a 3rd-level challenge for encounters involving research.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "J5UiwdGnojEKiStM",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ok7oPrUe2HFC8xmd",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "G5WuYX1ghrZcJ1J1",
          "sourceId": "G5WuYX1ghrZcJ1J1",
          "name": "Illustrated book",
          "type": "treasure"
        },
        "owner": {
          "sourceId": "WX6t4WA9u2KejxIO",
          "name": "Book",
          "type": "treasure"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 8,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
        "label": "Searching",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Search",
          "sourceId": "TiNDYUGlMmxzxBYU",
          "name": "Search",
          "type": "action"
        },
        "owner": {
          "sourceId": "Ye6jF7F3YdRigibJ",
          "name": "Methodical Research",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:physician",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GXmIABEvzmySOHRH",
      "slug": "physician",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7944f10442fad1e56e21b5058236e350c109981d39559e5c57895b0bf4cc567e",
    "translatableHash": "sha256:ae41b2578db85d6669f6632ac8f88fcca1600de95f5e6e37523929bcf0ba60d2",
    "data": {
      "schemaVersion": 1,
      "name": "Physician",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The art of medicine is a blend of the intellectual and the practical, concerned with how diseases work and how to prevent them. The physician can be found consulting well-thumbed tomes while meticulously examining patients to better understand their condition, before determining the most effective treatment.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 13,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 3,
        "will": 8
      },
      "abilities": {
        "str": -1,
        "dex": 1,
        "con": 1,
        "int": 4,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "diplomacy": 6,
        "medicine": 12,
        "society": 5
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
          "id": "DV9NQLrI4FouRCpe",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4-1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "oAhc8baMBkq1f865",
          "name": "Medical Textbook",
          "bonus": 5,
          "damage": "1d4-1 bludgeoning",
          "traits": [
            "nonlethal",
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "Ii2lTXB3bATG8qu5",
          "name": "+2 Bonus on Perception to Notice Ailments",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "qOhRxpDdOg4c6aNs",
          "name": "Bedside Manner",
          "kind": "passive",
          "description": "A physician has a +4 circumstance bonus to Diplomacy checks to [[/act make-an-impression options=bedside-manner]] on or make a [[/act request options=bedside-manner]] of a diseased, poisoned, or wounded creature.",
          "traits": []
        },
        {
          "id": "9xXxlNwXM90sw8zk",
          "name": "Doctor's Hand",
          "kind": "passive",
          "description": "When the physician rolls a critical failure on a check to Treat Disease, Treat Poison, or Treat Wounds, they get a failure instead.",
          "traits": []
        },
        {
          "id": "7dXGGEgb4iUrzH3c",
          "name": "Medical Specialist",
          "kind": "passive",
          "description": "For medical matters, the physician is a 4th-level challenge.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "zGfkkDs5NKknCLRw",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "zGfkkDs5NKknCLRw",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "zGfkkDs5NKknCLRw",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "zGfkkDs5NKknCLRw",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "zGfkkDs5NKknCLRw",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hDLbR56Id2OtU318",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hDLbR56Id2OtU318",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hDLbR56Id2OtU318",
          "sourceId": "hDLbR56Id2OtU318",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "UvYsCkLfY3VxKPWR",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 345,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Elixir of Life",
          "sourceId": "lPRuIRbu0rHBkoKY",
          "name": "Effect: Elixir of Life",
          "type": "effect"
        },
        "owner": {
          "sourceId": "UvYsCkLfY3VxKPWR",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "G5WuYX1ghrZcJ1J1",
          "sourceId": "G5WuYX1ghrZcJ1J1",
          "name": "Illustrated book",
          "type": "treasure"
        },
        "owner": {
          "sourceId": "BIreghuAVYAZ0WoG",
          "name": "Medical Textbook",
          "type": "treasure"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 61,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "9xXxlNwXM90sw8zk",
          "name": "Doctor's Hand",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 116,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "9xXxlNwXM90sw8zk",
          "name": "Doctor's Hand",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 173,
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
          "sourceId": "9xXxlNwXM90sw8zk",
          "name": "Doctor's Hand",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:apothecary",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "h4gPulyY9uzkAbyo",
      "slug": "apothecary",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f5e75970e2d8d83a83bbe84027eafec08dbe162c3658355897f3d76fc526ab10",
    "translatableHash": "sha256:0243039c472d00ce4e22bdc31966f728bae4779001c8f0ce918cba3f193e5d4b",
    "data": {
      "schemaVersion": 1,
      "name": "Apothecary",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The apothecary skillfully combines materials into unguents and medicines using crushed herbs, curative minerals, and potent extracts.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 3,
        "will": 5
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 1,
        "int": 3,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "crafting": 5,
        "medicine": 10,
        "nature": 8
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oc2k5FQjYXACg6rP",
          "name": "Stone Pestle",
          "bonus": 4,
          "damage": "1d6 bludgeoning",
          "traits": []
        },
        {
          "id": "LbKXY3iqGS2l93BZ",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "D91SDgzufetsXtHT",
          "name": "Acid Flask",
          "bonus": 5,
          "damage": "1 acid; 1d6 acid; 1 acid",
          "traits": [
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "zNtJDSruQtC6hlYE",
          "name": "Medical Specialist",
          "kind": "passive",
          "description": "For encounters involving making medicine or alchemical contests, the apothecary is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "r19Dz88pBsPS4lU2",
          "name": "Medical Wisdom",
          "kind": "passive",
          "description": "The apothecary can identify the effect of any alchemical composition or medical ingredient using only their senses. This typically takes 1 minute.",
          "traits": []
        },
        {
          "id": "Yzt7iAgbGNFAn1NW",
          "name": "+1 Circumstance Bonus on Saves vs. Poisons",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.M1k5QQc1qQLxzyCK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.M1k5QQc1qQLxzyCK",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "M1k5QQc1qQLxzyCK",
          "sourceId": "M1k5QQc1qQLxzyCK",
          "name": "Acid Flask (Lesser)",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "tVAzg3UKldmyachB",
          "name": "Acid Flask (Lesser)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "Yh3y4ZVuQtNitkrQ",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "2B42tVGi3YO1t4rU",
          "name": "Leather Apron (Functions as Padded Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Pt3aKCU8XphLZtst",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "Pt3aKCU8XphLZtst",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "Pt3aKCU8XphLZtst",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "Pt3aKCU8XphLZtst",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "Pt3aKCU8XphLZtst",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.LmIpYZ1lS2UDGXvU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.LmIpYZ1lS2UDGXvU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "LmIpYZ1lS2UDGXvU",
          "sourceId": "LmIpYZ1lS2UDGXvU",
          "name": "Mortar of Hidden Meaning",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "WKPSQhPteRbqC14q",
          "name": "Mortar and Pestle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hDLbR56Id2OtU318",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hDLbR56Id2OtU318",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hDLbR56Id2OtU318",
          "sourceId": "hDLbR56Id2OtU318",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "uqf8ooby8JyaoZUQ",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 345,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Elixir of Life",
          "sourceId": "lPRuIRbu0rHBkoKY",
          "name": "Effect: Elixir of Life",
          "type": "effect"
        },
        "owner": {
          "sourceId": "uqf8ooby8JyaoZUQ",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:barrister",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "HbYwSi428oXESdNh",
      "slug": "barrister",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dce61931c8a61e5f94b863d098b58715e0a5130616d624a3602604e16c36517a",
    "translatableHash": "sha256:bb721d0a2095d07a05c71e3afc6a2950cea686fb92b19bed6a564d407723669d",
    "data": {
      "schemaVersion": 1,
      "name": "Barrister",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Barristers may serve as criminal prosecutors or legal advocates, defending the rights of those accused of crimes or named as defendants in civil cases.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 13,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 3,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 1,
        "int": 3,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "deception": 10,
        "diplomacy": 12,
        "performance": 10,
        "society": 9
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
          "id": "a6VT956imq0UeyhM",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "yEZ44jBbnhupHGkC",
          "name": "Legal Specialist",
          "kind": "passive",
          "description": "In a court case or other legal proceeding, the barrister is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "cz2QOg6QSmJNA3YL",
          "name": "Sway the Judge and Jury",
          "kind": "passive",
          "description": "A barrister gains a +2 circumstance bonus to Diplomacy checks to [[/act make-an-impression]] or [[/act request]] something of the deciding members within a courtroom.\nIf the barrister successfully check (performance, dc:20) against a DC of 20 during the 20 minutes prior to the check, they increase the circumstance bonus to +4.",
          "traits": []
        },
        {
          "id": "pvLUpob2OzcBpXiY",
          "name": "Cite Precedent",
          "kind": "action",
          "description": "The barrister uses existing case law to undermine their opposition. If they succeed at a check (legal-lore, dc:20) check, they impose a -2 circumstance penalty on the next Diplomacy check an opponent attempts in a legal argument.\nAny further attempts to Cite Precedent fail until a new topic with different precedents is being argued.\nEffect: Cite Precedent",
          "traits": [
            "auditory",
            "linguistic"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "Ao7VlJhCpiWg1j18",
          "name": "Court Garb (Functions as Fine Clothing)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hywANJCzT7hMgWna",
          "sourceId": "hywANJCzT7hMgWna",
          "name": "Scholarly Journal",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "h15HeWZxI5S8VAFk",
          "name": "Law Book (Functions as Scholarly Journal)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "5LBJiAB7NABdIDC2",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 363,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Cite Precedent",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Cite Precedent",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Cite Precedent",
          "sourceId": "KdV8UtN8Af5oCerj",
          "name": "Effect: Cite Precedent",
          "type": "effect"
        },
        "owner": {
          "sourceId": "pvLUpob2OzcBpXiY",
          "name": "Cite Precedent",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:servant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mgEMfxh0VUbBepc2",
      "slug": "servant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:859b7d2f63aaae6f9d81e7232b2ae569a177e8e9fd0e726badc73bafc93d24d5",
    "translatableHash": "sha256:6532199805858f61b87e5df15438693b21366bb631c9fa003b5973ab71edc6c2",
    "data": {
      "schemaVersion": 1,
      "name": "Servant",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A servant might be a maid or butler, keeping a home in working order, or a server in an establishment like an inn, taking orders and serving customers.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 5,
        "diplomacy": 4,
        "society": 2
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
          "id": "pCZpELfahQYNki30",
          "name": "Cutlery",
          "bonus": 6,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "FuOqFNDYZSFUVtPi",
          "name": "Cutlery",
          "bonus": 6,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-15",
            "versatile-s"
          ]
        },
        {
          "id": "OdTAU2EupMUPjOYS",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wxpvY7YmCPTSk3p9",
          "name": "Protective Platter",
          "kind": "passive",
          "description": "The servant can raise their serving platter using the Raise a Shield action. The platter has the same statistics as a Buckler but requires a hand to hold.\nRaise a Shield",
          "traits": []
        },
        {
          "id": "P78JgcniEWTPCVeP",
          "name": "Quick Catch",
          "kind": "reaction",
          "description": "Trigger An object the servant could hold in one hand is dropped within the servant's reach\nRequirements The servant has at least one hand free\nEffect The servant catches the dropped object before it hits the floor or leaves their reach.",
          "traits": []
        },
        {
          "id": "gxFXmcgFoYJWBIeO",
          "name": "Raise a Shield",
          "kind": "action",
          "description": "Requirements You are wielding a shield.\nYou position your shield to protect yourself. When you have Raised a Shield, you gain its listed circumstance bonus to AC. Your shield remains raised until the start of your next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "zjDw8ZydUFsB7sEl",
          "name": "Cutlery",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.1k3AsSW7lpU0kEpY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.1k3AsSW7lpU0kEpY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "1k3AsSW7lpU0kEpY",
          "sourceId": "1k3AsSW7lpU0kEpY",
          "name": "Buckler",
          "type": "shield"
        },
        "owner": {
          "sourceId": "MO84pY6jx8r53gTb",
          "name": "Serving Platter",
          "type": "shield"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ilbLQNy6TbBPW7sQ",
          "sourceId": "ilbLQNy6TbBPW7sQ",
          "name": "Clothing (Ordinary)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "S6XXdREi3Cb7Xh3V",
          "name": "Servant's Uniform",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 121,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Buckler",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Buckler",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Buckler",
          "sourceId": "1k3AsSW7lpU0kEpY",
          "name": "Buckler",
          "type": "shield"
        },
        "owner": {
          "sourceId": "wxpvY7YmCPTSk3p9",
          "name": "Protective Platter",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 212,
        "uuid": "Compendium.pf2e.action-macros.Macro.Raise a Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.action-macros.Macro.Raise a Shield",
          "package": "pf2e",
          "sourcePack": "action-macros",
          "documentType": "Macro",
          "compendiumKey": "Raise a Shield",
          "sourceId": "4hfQEMiEOBbqelAh",
          "name": "Raise a Shield",
          "type": "script"
        },
        "owner": {
          "sourceId": "wxpvY7YmCPTSk3p9",
          "name": "Protective Platter",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.actionspf2e.Item.xjGwis0uaC2305pm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.xjGwis0uaC2305pm",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "xjGwis0uaC2305pm",
          "sourceId": "xjGwis0uaC2305pm",
          "name": "Raise a Shield",
          "type": "action"
        },
        "owner": {
          "sourceId": "gxFXmcgFoYJWBIeO",
          "name": "Raise a Shield",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:adept",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "PBb2WprHhEIQE9jN",
      "slug": "adept",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:610d93c5ef0c96833ff703a813173018095356e8255fbff19452fc8ef49c88dc",
    "translatableHash": "sha256:1709ce437b3d43bff71612484d86d6fb8320cc2630fdd264bf2996e6709c36be",
    "data": {
      "schemaVersion": 1,
      "name": "Adept",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Adepts have unlocked only the most minor of occult mysteries. A few are chosen by accomplished practitioners for further training.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 4,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 3,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "arcana": 5,
        "diplomacy": 3,
        "occultism": 5,
        "society": 5
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
          "id": "AuocSDVewXxiFzuz",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "iQWAwtvFxRVGqW0G",
          "name": "Journal",
          "bonus": 6,
          "damage": "1d6 bludgeoning",
          "traits": [
            "nonlethal",
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "TztjddoEZphVsSDa",
          "name": "Focused Thinker",
          "kind": "action",
          "description": "The adept concentrates to muster knowledge and wisdom. While focusing, they gain a +2 status bonus to checks to Recall Knowledge, but take a –2 penalty to Perception. They can Dismiss this focused state.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "CRo6e5ADHqXxRyBr",
          "name": "Occult Spells Known",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "LuHQ75P1jwm3BaAi",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "M14ABTj5m642lp8x",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "9NvPUbEtdiWxxCM4",
              "name": "Telekinetic Hand",
              "rank": 1
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
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LuHQ75P1jwm3BaAi",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "LuHQ75P1jwm3BaAi",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 115,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "TztjddoEZphVsSDa",
          "name": "Focused Thinker",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "M14ABTj5m642lp8x",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "M14ABTj5m642lp8x",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "pwzdSlJgYqN7bs2w",
          "sourceId": "pwzdSlJgYqN7bs2w",
          "name": "Telekinetic Hand",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9NvPUbEtdiWxxCM4",
          "name": "Telekinetic Hand",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hywANJCzT7hMgWna",
          "sourceId": "hywANJCzT7hMgWna",
          "name": "Scholarly Journal",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ipz89wB16JTSERLW",
          "name": "Journal",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ilbLQNy6TbBPW7sQ",
          "sourceId": "ilbLQNy6TbBPW7sQ",
          "name": "Clothing (Ordinary)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "4zzNfH7d9409n3cP",
          "name": "Robes",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "eCNZsLEhK3HhZ3Ql",
          "name": "Writing Set",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:merchant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "qCKNT6U8O0su578A",
      "slug": "merchant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:27ca8b0fa4c3b1a11f84b96b46af4d155e2f4b0850d8b7aff867fb2ae83abfcf",
    "translatableHash": "sha256:8c353cef999f624b1ee1e88932127a436e885ee8f68db911606d9ebd8247f0f8",
    "data": {
      "schemaVersion": 1,
      "name": "Merchant",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Small settlements can typically support one or two generalist merchants, and larger cities house multiple specialists—experts in one type of product. Merchants range from vendors hustling in the public square to wealthy tycoons running entire commercial organizations. A merchant might have an additional Lore skill about a specific category of item (such as jewelry or magic weapons), with a skill modifier equal to their Mercantile Lore.\nExpertise is forged through years of effort and often tedious work. Artisans are masters of their craft, able to create works both practical and beautiful.",
      "armorClass": 13,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 1,
        "reflex": 2,
        "will": 10
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": -1,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "deception": 10,
        "diplomacy": 12,
        "performance": 8,
        "society": 8
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
          "id": "P3HCHCil1R8QALJv",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "qbO04lsWdcNAfIMM",
          "name": "Club",
          "bonus": 4,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        },
        {
          "id": "l0GUb81GL7jVWIdo",
          "name": "Club",
          "bonus": 4,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "tDia9PqZk9lPblrF",
          "name": "Appraising Eye",
          "kind": "passive",
          "description": "The merchant can use Mercantile Lore to Recall Knowledge about items, including determining their value. They can also attempt to Identify Magic using Mercantile Lore and can do so without first knowing whether the item is magical.",
          "traits": []
        },
        {
          "id": "Pe7yUse4ccPZPy7Z",
          "name": "Sales Specialist",
          "kind": "passive",
          "description": "For encounters involving negotiation or mercantile skill, a merchant is a 4th-level challenge.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "c58wczIzH2gzeXQL",
          "sourceId": "c58wczIzH2gzeXQL",
          "name": "Club",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "fIMjGs4I2C62EHkG",
          "name": "Club",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "JhChbxQQ86XkkbMk",
          "name": "Padded Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 43,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "tDia9PqZk9lPblrF",
          "name": "Appraising Eye",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 173,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Identify Magic",
          "sourceId": "eReSHVEPCsdkSL4G",
          "name": "Identify Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "tDia9PqZk9lPblrF",
          "name": "Appraising Eye",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:apprentice",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "STds4rxF5ESFLLML",
      "slug": "apprentice",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:25a50cdad44459fb92893f65a3c8c8b3638ddc013eeb583510a39b756bc763b3",
    "translatableHash": "sha256:5449312d31f51808bdf0b93f1a09dc6f67c157d691bd4644411f95a08c94045a",
    "data": {
      "schemaVersion": 1,
      "name": "Apprentice",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Ambitious apprentices can be found in all cities. These individuals are generally younger and seek the approval of their masters as they learn their craft. Many yearn to exemplify the artistry behind their craft, one day becoming masters themselves. Depicted below is an apprentice cartographer.\nExpertise is forged through years of effort and often tedious work. Artisans are masters of their craft, able to create works both practical and beautiful.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 2,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 6,
        "will": 2
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 1,
        "int": 3,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 3,
        "crafting": 5
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
          "id": "fGw7sipW1eI40byQ",
          "name": "Dagger",
          "bonus": 4,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "CY3VwzlwEsLmLp7q",
          "name": "Dagger",
          "bonus": 4,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "TsXTVrF9ixENKx7j",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "m9he0rG2ytGNLtE9",
          "name": "Apprentice's Ambition",
          "kind": "passive",
          "description": "Frequency once per day\nRequirements A direct superior is supervising the apprentice\nEffect The apprentice gains a +2 circumstance bonus to attack rolls, damage rolls, saving throws, and skill checks until the end of their next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "UOFhIzZTDCx2LYku",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "ZraokHXxg7pBRXud",
          "name": "Rugged Clothes with Tool Belt",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "fkamxWeRKPJNjp7C",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UhcRWtnjU2WLSClx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UhcRWtnjU2WLSClx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UhcRWtnjU2WLSClx",
          "sourceId": "UhcRWtnjU2WLSClx",
          "name": "Survey Map",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Mz1hKhGITzmi33Pu",
          "name": "Assorted Maps",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:harrow-reader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "taNAx8xPuOJ3EmxC",
      "slug": "harrow-reader",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b258ccbaf94be0b808be7ab634a0fee2e24fc77229d35c5522501c5c16d2560a",
    "translatableHash": "sha256:e4a2edab878e951406847e868eb272c8bea1a099127724a016748a10ddae0fe8",
    "data": {
      "schemaVersion": 1,
      "name": "Harrow Reader",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A harrow deck is a set of 54 cards with symbolic illustrations that serves as a sacred divining tool. Feared by the superstitious and avoided by those who know better than to tempt fate, many harrow readers live and work in traveling communities, often moving from town to town as opportunities arise.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 6,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 1,
        "int": 2,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "diplomacy": 10,
        "occultism": 5,
        "performance": 5,
        "society": 5
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
          "id": "hYh1jMda40LahOdv",
          "name": "Sickle",
          "bonus": 6,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "6fMwkkz7H65uzqKm",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Gw2X2LY27hZkNR03",
          "name": "Cold Reading Specialist",
          "kind": "passive",
          "description": "For encounters involving fortune-telling, the harrow reader is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "3i4w75rSKQiwZzwD",
          "name": "Fated Doom",
          "kind": "passive",
          "description": "Though harrow readers try to avoid combat, no throw of the cards can avoid fate, so a harrow reader learns how best to survive. In the harrow reader's first encounter each day, they gain a +1 status bonus to their initiative roll, attack rolls, and AC.",
          "traits": []
        },
        {
          "id": "OY73CGnCsiXU29Oz",
          "name": "Read the Harrow",
          "kind": "passive",
          "description": "The harrow reader can conduct a reading over the course of 10 minutes to duplicate the effects of the Augury spell. The harrow reader can conduct up to five readings per day, but the flat check DC increases by 2. This is cumulative, to a maximum of DC 14 for the fifth.",
          "traits": [
            "exploration",
            "occult",
            "prediction"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ynnBwzkzsR6B73iO",
          "sourceId": "ynnBwzkzsR6B73iO",
          "name": "Sickle",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "n9rJXw2aS8iyMFMx",
          "name": "Sickle",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.C1j0Zs26TPVjplbs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.C1j0Zs26TPVjplbs",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "C1j0Zs26TPVjplbs",
          "sourceId": "C1j0Zs26TPVjplbs",
          "name": "Harrow Deck (Simple)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "6yYpHdgmK8DUSuP8",
          "name": "Harrow Deck (Simple)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 105,
        "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Augury",
          "sourceId": "41TZEjhO6D1nWw2X",
          "name": "Augury",
          "type": "spell"
        },
        "owner": {
          "sourceId": "OY73CGnCsiXU29Oz",
          "name": "Read the Harrow",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gnome-philomath",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "UmzCDlvwqNbF9qwH",
      "slug": "gnome-philomath",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:38eadce7bb836b2520ec511a7f38b35be79b2c94623ec30dd05c3e9ab2e00155",
    "translatableHash": "sha256:a041721225f6a5389df156bd48daba98d5ddc6d72ff604ae65ea2de6030b15c7",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Philomath",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "The innate gnomish inclination to revel in new experiences leads gnome philomaths to delve as deeply as they can into the multitudes of knowledge contained within a library. These shrewd observers have encyclopedic memories and tend to surround themselves with piles of documents and trinkets pertaining to whatever subject currently holds their attention. As their interests branch from one topic to the next, a gnome philomath files away their discoveries to be referenced again another day.\nBecause their ancestors came from the First World, gnomes are intrinsically linked to the realm of the fey and crave the mystical and unpredictable. They seek to create daring works of art, voyage to new places, and have experiences they've never had before. Otherwise, they could fall victim to the terrible gnomish illness known as the Bleaching, which not only drains them of their color but of their spirits as well.",
      "armorClass": 12,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 5,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 3,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 3,
        "crafting": 1,
        "society": 4,
        "thievery": 3
      },
      "languages": [
        "common",
        "fey",
        "gnomish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "c5AlRxwbrxMt4msk",
          "name": "Staff",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "5uDCrbaroj3SDKm5",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9UwuzYyhFQk4OBKa",
          "name": "Helpful Hoard",
          "kind": "passive",
          "description": "Gnome philomaths can quickly find almost any document in their vast collection. They gain a +8 circumstance bonus to skill checks involving local records and histories.",
          "traits": []
        },
        {
          "id": "zyUKrdkPZXmYYPFt",
          "name": "Local Records Specialist",
          "kind": "passive",
          "description": "For encounters involving local records and histories, the gnome philomath is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "vUmKN1vl61ZzzSJC",
          "name": "Mind if I Borrow That?",
          "kind": "action",
          "description": "The gnome philomath designates a single item within their sight as an item of interest to their studies. They then gain a +2 circumstance bonus to [[/act disarm options=mind-if-i-borrow-that]] or [[/act steal options=mind-if-i-borrow-that]] that item. They can only designate one item at a time in this way. If they use Mind if I Borrow That? to designate a new item of interest, they lose the bonus with the previous item.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "DNYaUSyD9Nn285ys",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 13,
          "spells": [
            {
              "id": "xP28RuJmQNV0uy62",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "16liZ1XyQ2E5vJBe",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "cze78RJvDhWFbD5l",
              "name": "Prestidigitation",
              "rank": 1
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
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "xP28RuJmQNV0uy62",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "xP28RuJmQNV0uy62",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
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
          "sourceId": "16liZ1XyQ2E5vJBe",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
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
          "sourceId": "16liZ1XyQ2E5vJBe",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Qw3fnUlaUbnn7ipC",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "cze78RJvDhWFbD5l",
          "name": "Prestidigitation",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "seN7YJd78Z1u7iwd",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "lqpUsf3eKHykeQ0Q",
          "name": "Writing Set",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:court-historian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "UWBT8xEvGfHaAj0U",
      "slug": "court-historian",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e067bfe4a3630324f1dd155665f18104b4acd96e6e656b90fa3dae5ef9815573",
    "translatableHash": "sha256:af605c273b1ad3a15f40b8ee262297f9e7d71df352becbe2b24a3379fc805895",
    "data": {
      "schemaVersion": 1,
      "name": "Court Historian",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Amid the political machinations of the court stand the court historians, observing and recording events for future generations. Their loyalty is to the preservation of history, and they will defy even royalty in the name of truth.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 13,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": -1,
        "int": 5,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "society": 9
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
          "id": "DdSQHHcgjOXJ1eG8",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "0tuLBGiaWLDuXT3D",
          "name": "Inkwell",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "8IohuRxIt43B6j3B",
          "name": "Historical Specialist",
          "kind": "passive",
          "description": "In matters regarding history or court records, the court historian is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "F2PQUiFfdMdgHZgN",
          "name": "Records Don't Lie",
          "kind": "passive",
          "description": "The court historian has a Perception DC of 25 against Deception checks asserting false current or historical events.",
          "traits": []
        },
        {
          "id": "CJKAoBjH9Svql2g0",
          "name": "Distracting Diatribe",
          "kind": "action",
          "description": "The court historian monotonously recites facts to distract a creature within 30 feet that can hear them. The target is Off-Guard for 1 round.",
          "traits": [
            "auditory",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3yLu12TCwN8utY0u",
          "sourceId": "3yLu12TCwN8utY0u",
          "name": "Writing Set (Extra Ink and Paper)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "x2nM7iPN2c3GgyIJ",
          "name": "Inkwell",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "BP0oBn6irWPEWE0i",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
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
          "sourceId": "M0PXMAoNJRt6H7aH",
          "name": "Clothing (Fine)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3yLu12TCwN8utY0u",
          "sourceId": "3yLu12TCwN8utY0u",
          "name": "Writing Set (Extra Ink and Paper)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "awwwU2Y2qGnE8TIz",
          "name": "Court Record",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 122,
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
          "sourceId": "CJKAoBjH9Svql2g0",
          "name": "Distracting Diatribe",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:judge",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "vfFB2za4zaQnXYIa",
      "slug": "judge",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7360b5bf2519212fee3ed24129ce57d73651fbce171ed6c47deeca8716cf3d50",
    "translatableHash": "sha256:6ee8e1a5fc60768c298925e098bfadf98d4ae15f7a35763f9e86bf1bac7fab9c",
    "data": {
      "schemaVersion": 1,
      "name": "Judge",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Properly exercised, the duties of a judge include strict adherence to the law regardless of station, with minimal sentimentality. Yet for every unbiased justice, there's one who is zealously confident in their own agenda.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 13,
      "hitPoints": 5,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 1,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": -1,
        "con": 1,
        "int": 3,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "deception": 8,
        "diplomacy": 12,
        "intimidation": 12,
        "society": 14
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
          "id": "uUISfTBeVRNhnN9u",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "xmVRClnmjpcTZlbx",
          "name": "Gavel",
          "bonus": 4,
          "damage": "1d6 bludgeoning",
          "traits": []
        },
        {
          "id": "Y2JYkqqr5OlGooUa",
          "name": "Gavel",
          "bonus": 3,
          "damage": "1d4 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "BpD2byfrbMItSgfy",
          "name": "+7 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8sKYzAJzGo9HTaC9",
          "name": "Group Impression",
          "kind": "passive",
          "description": "When the judge Makes an Impression, they can compare their Diplomacy check result to the Will DCs of up to four targets instead of one.",
          "traits": []
        },
        {
          "id": "HbPG05leJ9JyznH4",
          "name": "Legal Specialist",
          "kind": "passive",
          "description": "In a legal proceeding, the judge is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "beeNB83HJgG5Fjky",
          "name": "Remember, You're Under Oath",
          "kind": "action",
          "description": "The judge reminds a creature of the oath they swore to the court. The judge makes an check (intimidation, defense:will) check against the target's Will DC. On a success, the target takes a –2 status penalty to Deception checks to Lie for 10 minutes (or a –4 status penalty on a critical success). Regardless of the result, the target is temporarily immune to this ability for 24 hours.\nEffect: Remember, You're Under Oath",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "fear",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "c58wczIzH2gzeXQL",
          "sourceId": "c58wczIzH2gzeXQL",
          "name": "Club",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "wMDyGqhpm3QlQH0u",
          "name": "Gavel (Functions as a Club)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "o8WBtfQQ8hDZ7qe7",
          "name": "Judge's Robes",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "G5WuYX1ghrZcJ1J1",
          "sourceId": "G5WuYX1ghrZcJ1J1",
          "name": "Illustrated book",
          "type": "treasure"
        },
        "owner": {
          "sourceId": "1caXZSSxHAApzo4g",
          "name": "Law and Rhetoric Book",
          "type": "treasure"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 18,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
        "label": "Makes an Impression",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Make an Impression",
          "sourceId": "OX4fy22hQgUHDr0q",
          "name": "Make an Impression",
          "type": "action"
        },
        "owner": {
          "sourceId": "8sKYzAJzGo9HTaC9",
          "name": "Group Impression",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 232,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Lie",
          "sourceId": "ewwCglB7XOPLUz72",
          "name": "Lie",
          "type": "action"
        },
        "owner": {
          "sourceId": "beeNB83HJgG5Fjky",
          "name": "Remember, You're Under Oath",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 435,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Remember, You're Under Oath",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Remember, You're Under Oath",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Remember, You're Under Oath",
          "sourceId": "ESvcHy4CQbYLaZVu",
          "name": "Effect: Remember, You're Under Oath",
          "type": "effect"
        },
        "owner": {
          "sourceId": "beeNB83HJgG5Fjky",
          "name": "Remember, You're Under Oath",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:root-leshy-groundskeeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "vRMKs6dHHWzQ1k62",
      "slug": "root-leshy-groundskeeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ed2984fc508ed9734fed65dffd89be7c0a5bef1686c08413b4df7f796166605d",
    "translatableHash": "sha256:5b987d72c1f97ca75226367e72fd13e7daff02708bdd57c947adbbc60c9f9bcb",
    "data": {
      "schemaVersion": 1,
      "name": "Root Leshy Groundskeeper",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "leshy",
        "plant"
      ],
      "description": "Hardy root leshies have the strength and stamina to dig furrows for planting seeds over long hours. Though they're humble even among leshies, they can be extremely stubborn even against powerful adversaries.\nNature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.",
      "armorClass": 14,
      "hitPoints": 9,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 2,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 0,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "nature": 5,
        "stealth": 4,
        "survival": 5
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "apwfed9QZEjRPjEu",
          "name": "Shovel",
          "bonus": 5,
          "damage": "1d6+3 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "MFYqsM31qdaZOvht",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "UaWa5q5xxtsbTNcZ",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When the root leshy groundskeeper dies, a burst of primal energy explodes from their body, restoring 1d4 healing Hit Points to each plant creature in a 30-foot type:emanation. This area immediately fills with roots and vines, becoming difficult terrain. If the terrain is not a viable environment for these plants, they wither after 24 hours.",
          "traits": [
            "healing",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "CB6rpe5geo854f0K",
          "name": "Change Shape",
          "kind": "action",
          "description": "The root leshy groundskeeper transforms into a Small root vegetable. This ability otherwise uses the effects of One with Plants.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "SvRzg0tGLBfvJyPC",
          "name": "Root in Place",
          "kind": "action",
          "description": "The root leshy groundskeeper roots themself into the ground, reducing their Speed to 0 and granting them a +1 circumstance bonus to AC and 2 temporary Hit Points until the start of their next turn.",
          "traits": [
            "manipulate",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "IGFAbv1cT9huip3N",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 13,
          "spells": [
            {
              "id": "Bi6eFteBhPK6RRh8",
              "name": "Speak with Plants (root vegetables only)",
              "rank": 3
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
        "uuid": "Compendium.pf2e.spells-srd.Item.qvwIwJ9QBihy8R0t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.qvwIwJ9QBihy8R0t",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "qvwIwJ9QBihy8R0t",
          "sourceId": "qvwIwJ9QBihy8R0t",
          "name": "Speak with Plants",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Bi6eFteBhPK6RRh8",
          "name": "Speak with Plants (root vegetables only)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "6I4YJAQUbTAqbpsI",
          "sourceId": "6I4YJAQUbTAqbpsI",
          "name": "Pick",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Mah1F6zcgOO7R7VI",
          "name": "Shovel (Functions as Pick)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "eQM5hQ1W3d1uen97",
          "sourceId": "eQM5hQ1W3d1uen97",
          "name": "Change Shape",
          "type": "action"
        },
        "owner": {
          "sourceId": "CB6rpe5geo854f0K",
          "name": "Change Shape",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 115,
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
          "sourceId": "CB6rpe5geo854f0K",
          "name": "Change Shape",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tax-collector",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Xxnho8AZopSuhgHP",
      "slug": "tax-collector",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:460e9020622b68f70b0f857511b6730bc62dcf3f349b589466557d36652b7d83",
    "translatableHash": "sha256:a597a6ce7290b165cfb346fdb4583fb66c9e78f21adea35f6b4effed85d2c79e",
    "data": {
      "schemaVersion": 1,
      "name": "Tax Collector",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Ledgers and marks, positive and negative flows, and levies and allotments are a tax collector's daily bread. Where coin is gained, from whom it's collected, and to whom it's disbursed are their concerns—not who can afford the taxes.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 14,
      "hitPoints": 6,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 3,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 3,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "deception": 8,
        "diplomacy": 8,
        "intimidation": 8,
        "society": 9,
        "thievery": 6
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
          "id": "NUzbNVXkKMop7XIE",
          "name": "Dagger",
          "bonus": 5,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "sthYVbmH4op0ElvT",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "QW9oExZljGxszfI0",
          "name": "Crossbow",
          "bonus": 5,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZK9jIYRjGMRwFdMC",
          "name": "DC 19 Against Stealing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "OhTHPtpvCHZm2OAt",
          "name": "Financial Specialist",
          "kind": "passive",
          "description": "When dealing with matters of taxes and finance, the tax collector is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "h1SgfPkIaJazPwYz",
          "name": "Glittering Distraction",
          "kind": "action",
          "description": "The tax collector Strides. At any point during this movement, they can Interact to hurl coins. If there are Commoners about, this typically causes a scene. Crowds are usually difficult terrain and have other effects.",
          "traits": [
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "mbJo5sGYh4t49tDc",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "bHMGvlgB1Wvk2DmA",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 111,
        "uuid": "Compendium.pf2e.pathfinder-npc-core.Actor.Commoner",
        "label": "Commoners",
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-npc-core.Actor.Commoner",
          "package": "pf2e",
          "sourcePack": "pathfinder-npc-core",
          "documentType": "Actor",
          "compendiumKey": "Commoner",
          "sourceId": "APn9B54hhRtr0oCQ",
          "name": "Commoner",
          "type": "npc"
        },
        "owner": {
          "sourceId": "h1SgfPkIaJazPwYz",
          "name": "Glittering Distraction",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "d9YzVk4EwCCLSYPa",
          "name": "Padded Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.o0ccn5HQAudGgNdU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.o0ccn5HQAudGgNdU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "o0ccn5HQAudGgNdU",
          "sourceId": "o0ccn5HQAudGgNdU",
          "name": "Merchant's Scale",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "vCkdtYsY0aBLxEqp",
          "name": "Merchant's Scale",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3yLu12TCwN8utY0u",
          "sourceId": "3yLu12TCwN8utY0u",
          "name": "Writing Set (Extra Ink and Paper)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "YVRMs40wzsiQC7Si",
          "name": "Collection of Expired Documents with Intact Seals",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "2mmV7Ve6QuL1O9nj",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:pilgrim-of-irori",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "zUTlzjTKLyOc8bRM",
      "slug": "pilgrim-of-irori",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5e7c04c912b6ad970f7edc7fee1bb6b38d9157b1215ad533b65908da76d69663",
    "translatableHash": "sha256:0166e466f51569afbadc4bfee11acf58782fb0bc7ad891a1faba976c226a9482",
    "data": {
      "schemaVersion": 1,
      "name": "Pilgrim of Irori",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Pilgrims traverse the lands spurred on by some holy reason, be it to visit a sacred place or follow a prophetic vision.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 14,
      "hitPoints": 9,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 4,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 0,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 5,
        "religion": 5,
        "society": 4,
        "survival": 5
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
          "id": "JBHywsBKixp6A0VT",
          "name": "Staff",
          "bonus": 5,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "WEzTT885iSc7xGiI",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "nfGLDYnWjF9dxUbC",
          "name": "Rock",
          "bonus": 4,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "DgCsAlvUfVyETg6K",
          "name": "Ambulatory Oration",
          "kind": "passive",
          "description": "Creatures that engage in conversation with the pilgrim gain a +1 circumstance bonus to all Recall Knowledge checks and Gather Information checks for 4 hours related to any topics discussed with the pilgrim.",
          "traits": []
        },
        {
          "id": "c9RyMIISUEbGlI0s",
          "name": "Path of the Faithful",
          "kind": "passive",
          "description": "The pilgrim can use their Religion modifier instead of their Diplomacy modifier to [[/act gather-information skill=religion]] or [[/act make-an-impression skill=religion]] as long as the pilgrim includes their religious teachings.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "QCBZKzLaKkHVJpqc",
          "name": "Walking Stick (Functions as a Staff)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dDIPA1WE9ESF67EB",
          "sourceId": "dDIPA1WE9ESF67EB",
          "name": "Explorer's Clothing",
          "type": "armor"
        },
        "owner": {
          "sourceId": "KklnPd3xq1E7U7TW",
          "name": "Explorer's Clothing",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "plplsXJsqrdqNQVI",
          "sourceId": "plplsXJsqrdqNQVI",
          "name": "Religious Symbol (Wooden)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "G5wm0CyZa3HaG66d",
          "name": "Religious Symbol of Irori",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 94,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "DgCsAlvUfVyETg6K",
          "name": "Ambulatory Oration",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 162,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Gather Information",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Gather Information",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Gather Information",
          "sourceId": "plBGdZhqq5JBl1D8",
          "name": "Gather Information",
          "type": "action"
        },
        "owner": {
          "sourceId": "DgCsAlvUfVyETg6K",
          "name": "Ambulatory Oration",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bone-scavenger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "8IVbWVMYUhBE4Yyc",
      "slug": "bone-scavenger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1f0940c98fe5c08ffc693930ef170c5915b2417e867d9e6141ac341fab380408",
    "translatableHash": "sha256:95d938caffc0e6e59b3c15637cc158d4fa6c7267aed66cc8bf1f689b06770945",
    "data": {
      "schemaVersion": 1,
      "name": "Bone Scavenger",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kholo"
      ],
      "description": "Kholos have a strong connection to their ancestors, often using their bones as art and weapons to further honor them. Bone scavengers are sent to the fields after a battle to collect the bones of their fellow allies. They often eschew the pack hunting techniques of other kholos, spreading out among their foes when encountered in groups.\nThese pragmatic hunters have earned a very poor reputation for their brutality in battle and worship of demons. While many kholos live up to the terrible stories of their ferocity and cannibalism, others are scavengers and trappers just trying to get by. Many of their cultural traditions are misunderstood by other ancestries, and some kholos play into the fear provoked in those who believe the twisted tales about their people. Kholos are often criticized for their lack of honor in battle, but a kholo understands honor doesn't bring you back home alive, nor does honor put food on the table. Ambushes, feints, and deceptions that lead to fewer kholo deaths and a quicker victory are simply the logical thing to do.",
      "armorClass": 16,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 2,
        "deception": 4,
        "stealth": 6,
        "survival": 4
      },
      "languages": [
        "common",
        "kholo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "nlOxeIF3Gk4VfXOn",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "txTtbFycogYKRvZ5",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "UDW8CxEDEzWD8flw",
          "name": "Jaws",
          "bonus": 5,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "PXsNHwsu7FSaoXTp",
          "name": "Bone Armor",
          "kind": "reaction",
          "description": "Trigger The bone scavenger takes bludgeoning damage\nEffect The bone scavenger angles their makeshift armor to absorb some of the blow, causing shards of bone to splinter outward. All adjacent creatures take 2d4 piercing damage (check (reflex, dc:16, basic, options:area-effect) save).",
          "traits": []
        },
        {
          "id": "OtnUBBBUXOYTXoxi",
          "name": "Rugged Travel",
          "kind": "passive",
          "description": "A kholo ignores the first square of difficult terrain they move into each time they Step or Stride.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "tdpHGnPlmLYZnUN4",
          "name": "Dagger",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:aiuvarin-translator",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "9p0WMNDYyeW5sqGX",
      "slug": "aiuvarin-translator",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:41c2198cbc8dd58b7efbbcbe046d727bad1e8450d3c159f5a424852d5f3d2d71",
    "translatableHash": "sha256:36eda286390ce6b06b1b733549d4ec7320643268fd8c3fad1532326b85a480c1",
    "data": {
      "schemaVersion": 1,
      "name": "Aiuvarin Translator",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aiuvarin",
        "elf",
        "human"
      ],
      "description": "Many societies recognize aiuvarins' skills as adept translators.\nElves' long lives give them centuries to delve into studies, artistry, or exploration.",
      "armorClass": 14,
      "hitPoints": 12,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 6,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 3,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "arcana": 7,
        "diplomacy": 8,
        "occultism": 7,
        "performance": 6,
        "religion": 5,
        "society": 7
      },
      "languages": [
        "common",
        "elven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "eEOSS0et5gPrMhhq",
          "name": "Staff",
          "bonus": 4,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "yzt7fr8yIw8A1Yup",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "DM5H1C1R3wMXTfwf",
          "name": "Quill Pen",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "krQjVsxF5AVWOUJw",
          "name": "Linguistic Mastery",
          "kind": "passive",
          "description": "The translator gains a +5 circumstance bonus to skill checks involving translating or deciphering languages. If the translator rolls a critical failure on a check to Decipher Writing, they get a failure instead.",
          "traits": []
        },
        {
          "id": "IGQzcBlrmvFh5jcQ",
          "name": "Translation Specialist",
          "kind": "passive",
          "description": "For encounters involving translating or deciphering languages, the translator is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "ECwe41hssbbju74B",
          "name": "Crosstalk",
          "kind": "reaction",
          "description": "Trigger A creature within 20 feet of the translator would be targeted by or in the area of an ability with the linguistic trait\nEffect The translator attempts a check (performance, against:will, options:crosstalk) check with a +5 circumstance bonus against the Will DC of the creature. On a success, the creature is unaffected by the linguistic effect, and the translator can choose to make the creature Confused until the end of the creature's next turn.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Tt4Qw64fwrxhr5gT",
          "sourceId": "Tt4Qw64fwrxhr5gT",
          "name": "Dart",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "1QKex9sfMkClZm7g",
          "name": "Quill Pen (Functions as a Dart)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "TQ7YZtuKPrjwMkgZ",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "AIEJqOcTTE7gtdbE",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "w4Hd6nunVVqw3GWj",
          "sourceId": "w4Hd6nunVVqw3GWj",
          "name": "Basic Crafter's Book",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "yV7fm3dLDuK3xMCd",
          "name": "Book of Translations",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 169,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Decipher Writing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Decipher Writing",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Decipher Writing",
          "sourceId": "d9gbpiQjChYDYA2L",
          "name": "Decipher Writing",
          "type": "action"
        },
        "owner": {
          "sourceId": "krQjVsxF5AVWOUJw",
          "name": "Linguistic Mastery",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 451,
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
          "sourceId": "ECwe41hssbbju74B",
          "name": "Crosstalk",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:envoy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "9wdaQ6ZuBAZx9Vjk",
      "slug": "envoy",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a889844367dc5b149af317890d0270090831ac9691ff569c87dc5866c21c1420",
    "translatableHash": "sha256:23054fb075ee601faa10aa3171aa95249a1f931e0831a3e9e99bd0153c231eab",
    "data": {
      "schemaVersion": 1,
      "name": "Envoy",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Envoys are guests of a given court, representing the interests of another court or organization. Some envoys stay in one place so long they're practically considered locals, though those with whom they parley are swiftly reminded where their loyalty lies.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 13,
      "hitPoints": 12,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 3,
        "will": 11
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "deception": 13,
        "diplomacy": 15,
        "intimidation": 7,
        "society": 15
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
          "id": "Fw7uUAqAdQb4dQRD",
          "name": "Dagger",
          "bonus": 5,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "2bp5rXTdCuHpanx2",
          "name": "Dagger",
          "bonus": 5,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "yUMaQnat6oU8tLTd",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "379jj0HoHNpaVQhM",
          "name": "+6 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eecWk3JnhmkEFuAP",
          "name": "Diplomatic Specialist",
          "kind": "passive",
          "description": "When dealing with matters of statecraft and negotiation, the envoy is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "H6CdBVCMjMzOG9R3",
          "name": "Diplomatic Immunity",
          "kind": "action",
          "description": "The envoy invokes their diplomatic status. Until the end of the envoy's next turn, any creature that attempts to attack them must succeed at a check (will, dc:15) save or have their attack disrupted. The attacker gains weakness 2 to all damage from the envoy's allies while Diplomatic Immunity lasts, whether their attack was disrupted or not.\nEffect: Diplomatic Immunity",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "vfMxMVHaYQQ23y3A",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "69nufdhQyVAN6M8M",
          "name": "Clothing (Fine)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 358,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Diplomatic Immunity",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Diplomatic Immunity",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Diplomatic Immunity",
          "sourceId": "reA6nqZH7Rj5OJ0E",
          "name": "Effect: Diplomatic Immunity",
          "type": "effect"
        },
        "owner": {
          "sourceId": "H6CdBVCMjMzOG9R3",
          "name": "Diplomatic Immunity",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:drover",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "aq5spzk2UZrI0ZwK",
      "slug": "drover",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:eadcfbb3a46f620446ad256bad165572018813e8a1341aee2bd5d0c54e0c0228",
    "translatableHash": "sha256:24d561116cc80d7b8e4e07be8cd2fe6f45833991aaea2cc377a15247b14eab47",
    "data": {
      "schemaVersion": 1,
      "name": "Drover",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Drovers specialize in moving herds of livestock over large distances.\nSociety is built upon the backs of laborers.",
      "armorClass": 15,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "nature": 5,
        "survival": 5
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
          "id": "KMvukUdsnTKyBQZB",
          "name": "Whip",
          "bonus": 7,
          "damage": "1d4+3 slashing",
          "traits": [
            "disarm",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "ltxJ0DU6gpfUejzD",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "A6MtnMCxXwrOw2NR",
          "name": "Sling",
          "bonus": 6,
          "damage": "1d6+1 piercing",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "laHxBLb0WL18Aryb",
          "name": "Whistling",
          "kind": "passive",
          "description": "Drovers can whistle instead of speaking when communicating simple messages (such as \"go left,\" \"split the herd,\" and \"danger ahead\") to other drovers or when using the [[/act command-an-animal]] action on their herding dogs.",
          "traits": []
        },
        {
          "id": "X7MiwGQZ8H6HZrvQ",
          "name": "Hogtie",
          "kind": "action",
          "description": "Requirements A creature is Grabbed or Restrained by the drover's lasso\nEffect The drover can pull the grabbed creature up to 20 feet. Then, if the creature is within reach, the drover hogties it, attempting to [[/act grapple]] it again. On a success, the creature is restrained with the lasso, and the drover doesn't need to maintain the grapple. The hogtie lasts until the creature Escapes or the lasso is Forced Open. The drover can Interact to free a hogtied creature within reach.",
          "traits": []
        },
        {
          "id": "KZA9FGpOR8xg53mX",
          "name": "Lasso",
          "kind": "action",
          "description": "The drover uses their lasso to [[/act grapple]] a Large or smaller creature up to 20 feet away. They can continue to Grapple to keep their hold on the target so long as the target remains within 20 feet and they continue to hold the end of the lasso. In addition to the Grabbed creature being able to Escape, a successful DC 16 Athletics check to [[/act force-open dc=16]] can remove the lasso entirely.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "4shprzLkCXQAmYVY",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "f1gwoTkf3Nn0v3PN",
          "sourceId": "f1gwoTkf3Nn0v3PN",
          "name": "Whip",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "U3iKfaS1GsDgdUYB",
          "name": "Whip",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 47,
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
          "sourceId": "X7MiwGQZ8H6HZrvQ",
          "name": "Hogtie",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 101,
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
          "sourceId": "X7MiwGQZ8H6HZrvQ",
          "name": "Hogtie",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 518,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": "Escapes",
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
          "sourceId": "X7MiwGQZ8H6HZrvQ",
          "name": "Hogtie",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 590,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Force Open",
        "label": "Forced Open",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Force Open",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Force Open",
          "sourceId": "SjmKHgI7a5Z9JzBx",
          "name": "Force Open",
          "type": "action"
        },
        "owner": {
          "sourceId": "X7MiwGQZ8H6HZrvQ",
          "name": "Hogtie",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 273,
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
          "sourceId": "KZA9FGpOR8xg53mX",
          "name": "Lasso",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 347,
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
          "sourceId": "KZA9FGpOR8xg53mX",
          "name": "Lasso",
          "type": "action"
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
          "sourceId": "2FjBvet1L9Pyfj3X",
          "name": "Overalls (Function as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.TmH7coBHz9pjoDvP",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.TmH7coBHz9pjoDvP",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "TmH7coBHz9pjoDvP",
          "sourceId": "TmH7coBHz9pjoDvP",
          "name": "Lawbringer's Lasso",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "W5p3D9avs5zdebWx",
          "name": "Lasso",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "USHK6XQRwmq17xKh",
          "sourceId": "USHK6XQRwmq17xKh",
          "name": "Signal Whistle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "3Ko2aBWL5wIqcKt8",
          "name": "Signal Whistle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "qcxEYjK2JFiai7JW",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:toady",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BbFb0HC3vMBGP5WN",
      "slug": "toady",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f052709f17672ee529d6f765e6b787f655f0e29586086aead3f272830873ef5f",
    "translatableHash": "sha256:480e9c431a8623662263fa0e92914212d888f2ced2886173016eeb8041a83c98",
    "data": {
      "schemaVersion": 1,
      "name": "Toady",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These minions perform the thankless tasks that keep their master's vile machine running. Whether out of loyalty or fear, a toady serves their boss faithfully.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 14,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 4,
        "deception": 2,
        "stealth": 6,
        "thievery": 4
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "mental 2"
        ]
      },
      "attacks": [
        {
          "id": "uzK5FiWQVbfnyF3z",
          "name": "Sap",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "LtNyDt3k62y0OtVV",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "8KFNO8NxM7NLScxG",
          "name": "+6 Bonus on Perception to Eavesdrop",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "5wvmvk8TKAO4VVU6",
          "name": "Master Sends Their Regards",
          "kind": "passive",
          "description": "A toady can deliver a message from their boss to Demoralize using their boss's Intimidation modifier instead of their own.",
          "traits": []
        },
        {
          "id": "E0C08vSpFr1q5zb4",
          "name": "Human Shield",
          "kind": "reaction",
          "description": "Trigger The toady's boss takes damage from an attack, and the toady is adjacent to them\nEffect The toady takes the damage instead, along with any secondary effects of attack. This damage can't be reduced in any way.",
          "traits": []
        },
        {
          "id": "UL26wLiEC5bMFJ9j",
          "name": "Scurry",
          "kind": "action",
          "description": "The toady Strides, then can [[/act hide]]. They can attempt to Hide from creatures without cover or being Concealed, but at a –2 circumstance penalty.",
          "traits": []
        },
        {
          "id": "R6tTnGeB0AtI33Ow",
          "name": "Throw Cargo",
          "kind": "action",
          "description": "A toady carries a heavy load of supplies at their boss's behest. They hurl a heavy item they're carrying, which explodes on impact to deal 1d10 bludgeoning damage to all creatures in a 5-foot type:burst with a check (reflex, dc:14, basic, options:area-effect) save.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "TLQErnOpM9Luy7rL",
          "sourceId": "TLQErnOpM9Luy7rL",
          "name": "Sap",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "PyVWMUoP763fotYi",
          "name": "Sap",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 52,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Demoralize",
          "sourceId": "2u915NdUyQan6uKF",
          "name": "Demoralize",
          "type": "action"
        },
        "owner": {
          "sourceId": "5wvmvk8TKAO4VVU6",
          "name": "Master Sends Their Regards",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 109,
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
          "sourceId": "UL26wLiEC5bMFJ9j",
          "name": "Scurry",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:farmer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "bZRZahVaMyzTbJ4u",
      "slug": "farmer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e1ba140c8acb7a114a099b9acb9732f266cb6149f92c7a8fec38904459ae9d04",
    "translatableHash": "sha256:9905fe95e7b75b8a8aacb6916211d4d3dd99163680aeee56dae97f9bcb9b2d5f",
    "data": {
      "schemaVersion": 1,
      "name": "Farmer",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Workers of the fields, vineyards, and orchards of the world, farmers are known for their rugged endurance and skill with plants and animals.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "nature": 4,
        "survival": 4
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
          "id": "0yKbSsTBHJzUb4J9",
          "name": "Pitchfork",
          "bonus": 6,
          "damage": "1d6+3 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "7bwgpaZGG2Bs6DSx",
          "name": "Apple",
          "bonus": 5,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "thrown-20"
          ]
        },
        {
          "id": "QaVrIgpzzsuUZJdZ",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "hc2576PgevK5i1qc",
          "name": "Pitch Bale",
          "kind": "action",
          "description": "Requirements The farmer's last action was a successful pitchfork Strike\nEffect The farmer moves the creature they hit with their pitchfork up to 5 feet, and the target falls Prone. The target can attempt a check (reflex, dc:13) save to avoid falling prone and avoids being moved altogether on a critical success.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FJrsDoaIXksVjld9",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FJrsDoaIXksVjld9",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FJrsDoaIXksVjld9",
          "sourceId": "FJrsDoaIXksVjld9",
          "name": "Trident",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "weCX0QLmEtlkJj6e",
          "name": "Pitchfork",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "ne1Z6ZLtivnoyMKG",
          "name": "Work Clothes (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "L9ZV076913otGtiB",
          "sourceId": "L9ZV076913otGtiB",
          "name": "Rations",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "Ja5JnCCeUp0qanDJ",
          "name": "Apple",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 223,
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
          "sourceId": "hc2576PgevK5i1qc",
          "name": "Pitch Bale",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:miner",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GKDMvepxkEsUnN5d",
      "slug": "miner",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b8d1dec396903ac696516f7183e62f78144c5379e5f1a7d1d6202338f7f5cc7d",
    "translatableHash": "sha256:985ef3782906529f88d63917954d5383f0d470e6110f34f9e96eec978cc6484d",
    "data": {
      "schemaVersion": 1,
      "name": "Miner",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Miners explore deep underground in search of minerals and rare ores, taking numerous precautions to keep themselves safe.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 3,
        "athletics": 6,
        "survival": 4
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
          "id": "Uee48lu9JRn91tRp",
          "name": "Pick",
          "bonus": 6,
          "damage": "1d6+2 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "2hsljPa0oVA3Q5O9",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "cjVbggOxvEzXmIQm",
          "name": "Piton Pin",
          "kind": "action",
          "description": "Requirements The miner has their hammer in hand\nEffect The miner Interacts to draw a piton, then hammers it into a creature to pin them in place, attempting an check (athletics, against:reflex) check against the target's Reflex DC. On a hit, the target is Immobilized until it removes the piton with a successful check (athletics, dc:10) check made as an Interact action.",
          "traits": [
            "attack"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "6I4YJAQUbTAqbpsI",
          "sourceId": "6I4YJAQUbTAqbpsI",
          "name": "Pick",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "rypNl1OrKiYMYWae",
          "name": "Pick",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "ilIEY861r4bkrSfL",
          "name": "Miner's Harness (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ML0GR2cIEdMn2hoD",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ML0GR2cIEdMn2hoD",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ML0GR2cIEdMn2hoD",
          "sourceId": "ML0GR2cIEdMn2hoD",
          "name": "Hammer",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "tBYkTkEo1ju4J6rd",
          "name": "Hammer",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dIRZ0LL7G31fJNYz",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dIRZ0LL7G31fJNYz",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dIRZ0LL7G31fJNYz",
          "sourceId": "dIRZ0LL7G31fJNYz",
          "name": "Lantern (Hooded)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Kab4YfD7iyemYsdz",
          "name": "Lantern (Hooded)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.oX39xqMLVB8kNrY0",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.oX39xqMLVB8kNrY0",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "oX39xqMLVB8kNrY0",
          "sourceId": "oX39xqMLVB8kNrY0",
          "name": "Piton",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Bjzyn5IlVXWapBSM",
          "name": "Piton",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "fyYnQf1NAx9fWFaS",
          "sourceId": "fyYnQf1NAx9fWFaS",
          "name": "Rope",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "R4TT8C9TxtN5LrAO",
          "name": "Rope",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 304,
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
          "sourceId": "cjVbggOxvEzXmIQm",
          "name": "Piton Pin",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mayor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "HKQofrjurRdgEq3p",
      "slug": "mayor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:323c7b66cf4748875df61510e0de57bf586bc2a89eb2abaf7d785343bb8dd454",
    "translatableHash": "sha256:308ce44b59b9324ffc138dec7b81e6e3b4ea8f5613a5afe69cc98acf2454dedd",
    "data": {
      "schemaVersion": 1,
      "name": "Mayor",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The mayor is the political leader of a settlement. While not always an elected position, it usually involves devoting time to both civic and ceremonial functions and knowing the needs of their settlement.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 14,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "deception": 15,
        "diplomacy": 15,
        "intimidation": 15,
        "society": 13
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
          "id": "eaN505i71aQXyGx3",
          "name": "Decorative Sword of Station",
          "bonus": 6,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "JBo6esFpyescsSAv",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "6gqODoPRf0ej8B1j",
          "name": "Political Specialist",
          "kind": "passive",
          "description": "For encounters involving seeking political favors, the mayor is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "1fY0H6iFefsW7lFM",
          "name": "Pulse of the Electorate",
          "kind": "passive",
          "description": "The mayor can quickly find things out, and 1 hour after anyone in their settlement becomes aware of an event or activity, the mayor becomes aware of it, so long as they have had time to hobnob with their constituents.",
          "traits": []
        },
        {
          "id": "Efz23afHxxjHSo7k",
          "name": "But Will It Lose Me Votes",
          "kind": "reaction",
          "description": "Frequency once per hour\nTrigger A creature succeeds (but doesn't critically succeed) at a Diplomacy check to make a Request of the mayor\nEffect The triggering creature (or one of its allies) must attempt the check again within the next hour, this time against the mayor's Society DC. Society or a relevant Lore skill may be used for this check instead of Diplomacy.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "7tKkkF8eZ4iCLJtp",
          "sourceId": "7tKkkF8eZ4iCLJtp",
          "name": "Shortsword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "8INPvnD1yeA8nwdU",
          "name": "Decorative Sword of Station (Functions as Shortsword)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 160,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Request",
          "sourceId": "DCb62iCBrJXy0Ik6",
          "name": "Request",
          "type": "action"
        },
        "owner": {
          "sourceId": "Efz23afHxxjHSo7k",
          "name": "But Will It Lose Me Votes",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:political-upstart",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "HVUlGw83Hf4YmW0p",
      "slug": "political-upstart",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f59813de0dfc6d8124268c11d04c8c12bfd214513d5ca5184bd40c732f3aa0fb",
    "translatableHash": "sha256:1f459becb857ec12bb67603710f758af89e04087291a8bff39eba16ebe4a975b",
    "data": {
      "schemaVersion": 1,
      "name": "Political Upstart",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Fiery and heady, a political upstart actively pushes against the status quo.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 14,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "deception": 8,
        "diplomacy": 10,
        "performance": 10,
        "society": 11
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
          "id": "vCqeIrsa1U04DqCG",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "fSGHmJDEmjwEl5YO",
          "name": "Rhetoric Specialist",
          "kind": "passive",
          "description": "For social encounters involving debate and legal logic, the political upstart is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "m4RVLYNjrEFe5txe",
          "name": "+3 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "wCoFNEnJtvR9H0ie",
          "name": "Fascinating Speech",
          "kind": "action",
          "description": "The political upstart begins a rousing speech which they can Sustain up to 1 minute. Any creature within 30 feet that can hear the speech, must attempt a check (will, dc:17) save.\nSuccess The creature is unaffected.\nFailure The creature is Fascinated with the upstart for 1 round.\nCritical Failure The creature is fascinated with the upstart as long as the speech lasts.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "Pc6es0QVJaQWs9wP",
          "name": "Fiery Rhetoric",
          "kind": "action",
          "description": "The upstart rattles off talking points at an enemy within 30 feet. The target takes a –2 status penalty to Perception and Will saves for 1 minute.\nEffect: Fiery Rhetoric",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "HofgtfkeAfrcaVlL",
          "name": "Retort",
          "kind": "reaction",
          "description": "A creature fails a Charisma-based skill check against the political upstart\nEffect The political upstart targets the creature with Fiery Rhetoric.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "kOlJQR3DDX9saWFv",
          "name": "Long Coat (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3yLu12TCwN8utY0u",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3yLu12TCwN8utY0u",
          "sourceId": "3yLu12TCwN8utY0u",
          "name": "Writing Set (Extra Ink and Paper)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "3mR6yoCbkNyfRwlg",
          "name": "Political Pamphlets",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "fOwYosLEHoMYqU5D",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 290,
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
          "sourceId": "wCoFNEnJtvR9H0ie",
          "name": "Fascinating Speech",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 157,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Fiery Rhetoric",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Fiery Rhetoric",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Fiery Rhetoric",
          "sourceId": "Sekb8YSa36xlqcgk",
          "name": "Effect: Fiery Rhetoric",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Pc6es0QVJaQWs9wP",
          "name": "Fiery Rhetoric",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:prime-minister",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "KV9WeA9fq5HuCxxx",
      "slug": "prime-minister",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a60f1a1fe4ef40120c1a4a9263b90ddddf20230ac0d2c5f1e1024ee271390a5d",
    "translatableHash": "sha256:f36908f5c94fd2a797ae495ef00fcb1d408b7220f159f149c02acd37c0220fb2",
    "data": {
      "schemaVersion": 1,
      "name": "Prime Minister",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The prime minister is the leader of a nation's bureaucracy. They are experienced politicians in charge of the laws and regulations of their territory, answering only to a monarch, if there is one. Often, though, a vote of \"No Confidence\" or similar legal procedure exists for removing the prime minister.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 14,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 19
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 3,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "deception": 22,
        "diplomacy": 22,
        "intimidation": 19,
        "society": 22
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
          "id": "aqoHpCIN905KCbjq",
          "name": "Rapier",
          "bonus": 5,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "6KOnM7UJoPpDH8dL",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qQQzSCPDd9iaGs2E",
          "name": "+10 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "O5KV6mRr9XKpYXUz",
          "name": "Political Specialist",
          "kind": "passive",
          "description": "For encounters involving politics, the prime minister is a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "sX4LRgYXhFYL2Pm6",
          "name": "Unshakable Confidence",
          "kind": "passive",
          "description": "All attempts to Coerce the prime minister have a result one degree worse.",
          "traits": []
        },
        {
          "id": "7lzzEhMHL5PyrF1Q",
          "name": "Cutting Counterpoint",
          "kind": "reaction",
          "description": "Trigger The prime minister hears a creature attempt a Deception, Diplomacy, or an Intimidation check against any creature other than the prime minister\nEffect The prime minister interrupts with a witty barb, cutting the credibility of the creature's argument. The prime minister attempts their own check of the same type. If the result is higher than that of the triggering check, the triggering check is considered a failure regardless of its roll.\nIn extended negotiations, like a Victory Point challenge, the prime minister can't use this ability again until every creature in the discussion has had an opportunity to attempt a check (even if they decide not to make one).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "tH5GirEy7YB3ZgCk",
          "sourceId": "tH5GirEy7YB3ZgCk",
          "name": "Rapier",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "PtlZGagOMl1uMtQJ",
          "name": "Rapier",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 19,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Coerce",
          "sourceId": "tHCqgwjtQtzNqVvd",
          "name": "Coerce",
          "type": "action"
        },
        "owner": {
          "sourceId": "sX4LRgYXhFYL2Pm6",
          "name": "Unshakable Confidence",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:fisher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "LbSA6uGVafcosT0X",
      "slug": "fisher",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6297a8686c95043dc6852b40d7bb98cbcbd3c154718fdc288b467e2ef3b8a7bc",
    "translatableHash": "sha256:8e79d3422c0b4d1a5e4b0e9ede0a19937ce7c721c9674c4401f6c6366d747926",
    "data": {
      "schemaVersion": 1,
      "name": "Fisher",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "More than just hobbyists, fishers catch fish and other seafood with the intention of selling most of or all of their catch.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 6,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "nature": 4,
        "survival": 4
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
          "id": "R0gVjXEwG1d4NEsN",
          "name": "Spear",
          "bonus": 7,
          "damage": "1d6+3 piercing",
          "traits": []
        },
        {
          "id": "Hqn25fr6DAzYKyQL",
          "name": "Spear",
          "bonus": 6,
          "damage": "1d6+3 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "gKoSB1CdfTbYBa9o",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "XxE8B5jfSvDTS7Sa",
          "name": "Fishing Line",
          "bonus": 6,
          "damage": "1 bleed; 1 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "C4oejzlwD5v6aRbi",
          "name": "+2 Bonus on Perception to Spot Fish",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "1XmYQ3VFWPVdhgLd",
          "name": "Fishhooked",
          "kind": "passive",
          "description": "While it has persistent bleed damage from the fisher's fishing line Strike, a creature has a fishhook embedded in it. The creature can't move farther away from the fisher (though it can move laterally). The fisher can reel the creature in as a single action with the attack and manipulate trait, attempting an check (athletics, against:fortitude) check against the creature's Fortitude DC. On a success, the creature takes 2d4 slashing damage and is pulled 10 feet closer to the fisher (double the damage and distance on a critical success).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.tOhoGvmCMw4JpWcS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.tOhoGvmCMw4JpWcS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "tOhoGvmCMw4JpWcS",
          "sourceId": "tOhoGvmCMw4JpWcS",
          "name": "Spear",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "UAqlkqpAbfhYKNe6",
          "name": "Spear",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3tOyV4VZEZhwnAMO",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3tOyV4VZEZhwnAMO",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3tOyV4VZEZhwnAMO",
          "sourceId": "3tOyV4VZEZhwnAMO",
          "name": "Fishing Tackle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "kSrgYLcsPjLgmhlc",
          "name": "Fishing Tackle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "T8EopYZLT137CsdW",
          "sourceId": "T8EopYZLT137CsdW",
          "name": "Net",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "9F0rGdyCaDseTLZ0",
          "name": "Net",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 110,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Grapple",
          "sourceId": "PMbdMWc2QroouFGD",
          "name": "Grapple",
          "type": "action"
        },
        "owner": {
          "sourceId": "9F0rGdyCaDseTLZ0",
          "name": "Net",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "fyYnQf1NAx9fWFaS",
          "sourceId": "fyYnQf1NAx9fWFaS",
          "name": "Rope",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "HrwPHl7Y5HNWAPK6",
          "name": "Rope",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:puppet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "r75kLP8MgLx46ZTO",
      "slug": "puppet",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:810605892ba2c4b55626880ce8f8ee9814339996fc6b8636e1818359ecc7082f",
    "translatableHash": "sha256:ba46823430ed5965e2a58fe526c3aa5a152c518a83ba0fa19d881d04f12f8eec",
    "data": {
      "schemaVersion": 1,
      "name": "Puppet",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [],
      "description": "On the surface, puppeteers are simply providers of entertainment to the masses. With their little puppets and simple stories, their pantomimes are fun for the whole family. However, some puppeteers have a secret. They can animate their puppets with magic, sending them out to cause all manner of mischief in the dead of night. Puppeteers of this ilk tend to travel by themselves, though they might be found as part of a traveling group if they become lonely. They may serve as an innocent front for more illicit dealings or as lackeys to a larger group of thieves and ne'er do wells.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 23,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 0,
        "senses": []
      },
      "saves": {
        "fortitude": 0,
        "reflex": 0,
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
      "attacks": [],
      "actions": [
        {
          "id": "h3QkxJga72xuJhl7",
          "name": "Puppet Type",
          "kind": "passive",
          "description": "• Smart Puppet The smart puppet is covered in runes that give it occult power. It makes a ranged Strike against a creature within 30 feet at a +15 attack modifier. A successful Strike deals 2d6 mental damage.\n• Strong Puppet The strong puppet wields a tiny sword and shield. It makes a melee Strike against a creature whose space it shares at a +15 attack modifier. A successful Strike deals 2d8 slashing damage. In addition, the strong puppet gains a +1 circumstance bonus to AC for 1 round.\n• Swift Puppet The swift puppet wields two tiny daggers. It makes a melee Strike against a creature whose space it shares at a +15 attack modifier. A successful Strike deals 2d4 piercing damage. If the swift puppet hits a creature that was hit by another puppet this round, its Strike deals an additional 1d4 precision damage.\n• Fiend Puppet The puppet makes a ranged Strike against a creature within 30 feet for 1d10 spirit damage, plus 1d4 spirit damage if the target is holy.\n• Poisoner Puppet The puppet makes a melee Strike with a tiny syringe of poison against a creature whose space it shares, dealing 1d4 piercing damage plus 1d6 persistent poison damage.\n• Undead Puppet The puppet makes a melee Strike against a creature whose space it shares, dealing 2d8 void damage and making the target Frightened 1 (or Frightened 2 on a critical hit).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 1446,
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
          "sourceId": "h3QkxJga72xuJhl7",
          "name": "Puppet Type",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 1518,
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
          "sourceId": "h3QkxJga72xuJhl7",
          "name": "Puppet Type",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dwarf-smith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "rY3uqGq5QyvNOU91",
      "slug": "dwarf-smith",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2e76dd68393404fa1e2636cd848860b1114b3d18801b1665e3d484214b904bc3",
    "translatableHash": "sha256:a52423a253d4c577c4ea392159505e24bfde46fe91f166062e61df2d84198485",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf Smith",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "Many dwarves become smiths as their attention to detail, lifestyles that keep them close to useful materials such as iron, and a pride in their work all come together to become a brilliant skill set for working with armaments. Though dwarves are capable of smithing most any kind of item, most focus on armaments as a way of creating objects to defend their fellow dwarves.\nFrom the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.",
      "armorClass": 14,
      "hitPoints": 12,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 3,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "athletics": 6,
        "crafting": 12,
        "society": 6
      },
      "languages": [
        "common",
        "dwarven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 1"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LmYnArn9UBqT2XK6",
          "name": "Clan Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "parry",
            "versatile-b"
          ]
        },
        {
          "id": "lXUhXugLQkYnWJZI",
          "name": "Light Hammer",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "UO3iFvf2kglC8TB4",
          "name": "Light Hammer",
          "bonus": 4,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "syv1edVQgcArdgPf",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "fbLllas1hjP1nyuh",
          "name": "Blacksmithing Specialist",
          "kind": "passive",
          "description": "For encounters involving blacksmithing, the dwarf smith is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "iAzNhDbeiTKgQYWM",
          "name": "Temper Armament",
          "kind": "passive",
          "description": "The smith spends 1 day tempering a single suit of metallic armor, metallic shield, or metallic weapon. Tempering armor or a shield increases its Hardness by 1. Tempering a weapon grants the weapon a +1 circumstance bonus to damage rolls. Regardless of the item, the tempering remains for 3 days, after which item is temporarily immune to further tempering for 1 week as the technique would otherwise damage it.\nEffect: Temper Armament",
          "traits": [
            "downtime"
          ]
        },
        {
          "id": "R4CbdUx0ebnZ3Ew6",
          "name": "Crack the Shell",
          "kind": "action",
          "description": "The dwarf smith makes a Strike to break a creature's defenses. If the Strike hits and the creature is wearing armor with Hardness 9 or lower, the armor is Broken. This Strike doesn't further damage armor that's already broken.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.kJJvKm80KwWXPukV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.kJJvKm80KwWXPukV",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "kJJvKm80KwWXPukV",
          "sourceId": "kJJvKm80KwWXPukV",
          "name": "Clan Dagger",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "qnoD4KQbDEy3XOTo",
          "name": "Clan Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "uGmwdPPyafJLQcL5",
          "name": "Light Hammer",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 158,
        "uuid": "Compendium.pf2e.conditionitems.Item.Broken",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Broken",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Broken",
          "sourceId": "6dNUvdb1dhToNDj3",
          "name": "Broken",
          "type": "condition"
        },
        "owner": {
          "sourceId": "R4CbdUx0ebnZ3Ew6",
          "name": "Crack the Shell",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "kqxtA9799qydsJaQ",
          "name": "Leather Apron (Functions as Padded Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "RQyNI9euCa4iIgz8",
          "name": "Artisan's Toolkit (blacksmithing)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 421,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Temper Armament",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Temper Armament",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Temper Armament",
          "sourceId": "ERBJL8rBEURa05N8",
          "name": "Effect: Temper Armament",
          "type": "effect"
        },
        "owner": {
          "sourceId": "iAzNhDbeiTKgQYWM",
          "name": "Temper Armament",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:penitent-of-calistria",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "uTGGtpKUotQep27v",
      "slug": "penitent-of-calistria",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0343fa93b32301fb00a4df5952ae3a65f040b46e5ae4a564eacc6acbf995e7b1",
    "translatableHash": "sha256:1a3cd2c0bf8a335818dbe6c6d7f1486f5ad67aaa9d9855f2b89e7fb2676fa1f4",
    "data": {
      "schemaVersion": 1,
      "name": "Penitent of Calistria",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Atonement is seen as an ultimate act of supplication for those who have wronged their faith. Repentance takes several forms—acts of service, a pilgrimage, flagellation, or divine quests.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 15,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 5,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 6,
        "deception": 5,
        "intimidation": 3,
        "religion": 4
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
          "id": "mRm4pp1jOLiFsv2f",
          "name": "Whip",
          "bonus": 6,
          "damage": "1d4+2 slashing",
          "traits": [
            "disarm",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "eSb7q6xRTICLmlx8",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "lkLn9RkIMnlJMB0W",
          "name": "Dagger",
          "bonus": 5,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "YYbxGAEUY95REpQF",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "jbuLsvWF1rCKUZ9s",
          "name": "Agonizing Drive",
          "kind": "passive",
          "description": "The penitent ignores the penalty to attack rolls from being Frightened and gains a status bonus to damage rolls equal to their frightened value.",
          "traits": []
        },
        {
          "id": "mcaFQLCGYQ4uikPg",
          "name": "Repentant Defiance",
          "kind": "action",
          "description": "The penitent Strikes, then increases their own Frightened value by 2 and deals 3 slashing damage to themselves, bypassing resistance. The penitent then gains resistance 3 to physical damage until the start of their next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "CoHDk1SkUNJubpif",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "f1gwoTkf3Nn0v3PN",
          "sourceId": "f1gwoTkf3Nn0v3PN",
          "name": "Whip",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "SlvQypCLjAVMqHb3",
          "name": "Whip",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dDIPA1WE9ESF67EB",
          "sourceId": "dDIPA1WE9ESF67EB",
          "name": "Explorer's Clothing",
          "type": "armor"
        },
        "owner": {
          "sourceId": "TvjKZbbovXlKSZ7F",
          "name": "Explorer's Clothing",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "plplsXJsqrdqNQVI",
          "sourceId": "plplsXJsqrdqNQVI",
          "name": "Religious Symbol (Wooden)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "7njqJ8mTQftkSr3a",
          "name": "Religious Symbol of Calistria",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 63,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
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
          "sourceId": "jbuLsvWF1rCKUZ9s",
          "name": "Agonizing Drive",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 50,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
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
          "sourceId": "mcaFQLCGYQ4uikPg",
          "name": "Repentant Defiance",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:conspiracist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "W3uePAytelIvWOuV",
      "slug": "conspiracist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:daa62898a650f311d9a937013802830846a9d8fb263983ec8cce747fc786c05f",
    "translatableHash": "sha256:6f7e763c2f5427531078bb2309f3babf60d37f6d5b6a505f8c5955fdf3d67876",
    "data": {
      "schemaVersion": 1,
      "name": "Conspiracist",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Conspiracists misinform and falsify facts to further their own causes. Though they pose little physical threat, conspiracists can have more powerful allies, such as a deluded mob that respond to the conspiracist's signal.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 14,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 6,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 3,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "deception": 10,
        "occultism": -1,
        "performance": 10,
        "society": 11
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
          "id": "SRBH1v5xzBOWFPNd",
          "name": "Fist",
          "bonus": 4,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "reetfW3NkzlM0yGk",
          "name": "Compulsive Liar",
          "kind": "passive",
          "description": "The conspiracist can use Deception instead of Diplomacy to [[/act make-an-impression skill=deception]] or [[/act request skill=deception]]. Any creature attempting a Perception check to Sense Motive against the conspiracist gets a result one degree of success worse than they rolled.",
          "traits": []
        },
        {
          "id": "PxRO8P1nIf344mAM",
          "name": "Social Specialist",
          "kind": "passive",
          "description": "For encounters involving deception and social manipulation, the conspiracist is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "142q4GGA0xylO4FI",
          "name": "Evoke Pity",
          "kind": "reaction",
          "description": "Trigger An enemy reduces the conspiracist to below half their maximum HP\nEffect The conspiracist begs their assailants to \"see reason\" and let them live. The conspiracist attempts a single check (performance, against:will) check against the Will DCs of all enemies in a 30-foot type:emanation. Any creature the attempt succeeds against takes a –2 circumstance penalty to damaging attacks without the nonlethal trait they make against the conspiracist for 10 minutes",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "RCqEh1xLDDDY1jAQ",
          "name": "Sow Doubt",
          "kind": "action",
          "description": "The conspiracist argues that their enemies have been hoodwinked into attacking them by nefarious powers. The conspiracist attempts a single check (deception, against:will, options:inflicts:stupefied,inflicts:controlled) check against the Will DCs of all enemies that can hear them.\nCritical Success The enemy fully believes the conspiracist, becoming Stupefied 2 for 1 minute. If the creature was already stupefied 2, they become Controlled by the conspiracist until the end of the encounter.\nSuccess The enemy has trouble disbelieving the conspiracist's logic, becoming Stupefied 1 for 1 minute. If they're already stupefied 1, they become stupefied 2.\nFailure The enemy is unconvinced, but a seed of doubt remains.\nCritical Failure The enemy sees through the conspiracist's act, becoming immune to Sow Doubt for 24 hours.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "USHK6XQRwmq17xKh",
          "sourceId": "USHK6XQRwmq17xKh",
          "name": "Signal Whistle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "nupFl7BjnjaSpDox",
          "name": "Signal Whistle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "HjXteU9qdhZoHUTW",
          "name": "Writing Set",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 189,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Motive",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Motive",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sense Motive",
          "sourceId": "1xRFPTFtWtGJ9ELw",
          "name": "Sense Motive",
          "type": "action"
        },
        "owner": {
          "sourceId": "reetfW3NkzlM0yGk",
          "name": "Compulsive Liar",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 381,
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
          "sourceId": "RCqEh1xLDDDY1jAQ",
          "name": "Sow Doubt",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 514,
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
          "sourceId": "RCqEh1xLDDDY1jAQ",
          "name": "Sow Doubt",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 722,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
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
          "sourceId": "RCqEh1xLDDDY1jAQ",
          "name": "Sow Doubt",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dockhand",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Wv4jaiD6X8negvH2",
      "slug": "dockhand",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3af741acd0235e8adb14e06bd9f1e2b2c59577fa2e0ea068ed56f73d2d53ebd5",
    "translatableHash": "sha256:12aefb03abf26e2c3cbfd8ecc030fe341f10eecaa0df6ebae2b9b5c77c757d8d",
    "data": {
      "schemaVersion": 1,
      "name": "Dockhand",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Working to load and unload cargo from ships, dockhands are considered unruly, but many stay focused and work hard until the job is done.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 3
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 3,
        "athletics": 7,
        "intimidation": 4
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
          "id": "CN4GwNgOryN6LNFo",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "NQR9pSqVCQqJO0b7",
          "name": "Bottle",
          "bonus": 5,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "thrown-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "ma0kNlN1eN2YPKXO",
          "name": "Heft Crate",
          "kind": "action",
          "description": "Requirements The dockhand is adjacent to a crate\nEffect The dockhand picks up a crate and heaves it up to 15 feet. Upon landing, the crate breaks open in a 5-foot type:burst. Each creature in the area takes 2d6 bludgeoning damage with a check (reflex, dc:13, basic, options:area-effect) save, and the area is difficult terrain until cleared.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "FmriI9fZfj3I2QS1",
          "name": "Swig",
          "kind": "action",
          "description": "The dockhand Interacts to either draw a bottle of Alcohol or pick up a nearby unattended bottle of alcohol, then drinks the whole thing. For 1 minute, the dockhand gains a +2 item bonus to melee damage rolls and saving throws against fear but is Off-Guard.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "WFP4NLE0aiemGMh3",
          "name": "Work Clothes (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UMAXLDpI6YLSfYX1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UMAXLDpI6YLSfYX1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UMAXLDpI6YLSfYX1",
          "sourceId": "UMAXLDpI6YLSfYX1",
          "name": "Alcohol",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 727,
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 878,
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 950,
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1061,
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1125,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 2",
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1317,
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
          "sourceId": "z1TGYF24OzHmgdjp",
          "name": "Whiskey",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 53,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Alcohol",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Alcohol",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Alcohol",
          "sourceId": "UMAXLDpI6YLSfYX1",
          "name": "Alcohol",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "FmriI9fZfj3I2QS1",
          "name": "Swig",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 291,
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
          "sourceId": "FmriI9fZfj3I2QS1",
          "name": "Swig",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:torchbearer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "xjJV1G5FBeLV4KPQ",
      "slug": "torchbearer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1885d4b5001ffbeb4c47f6ab0b840c61f0b73e30fddcdf991a1f73c3c1c5e03d",
    "translatableHash": "sha256:76cebcb7f558f4652706bee895b0e175c5a6fd6846f4c2368f2df3ef1162b287",
    "data": {
      "schemaVersion": 1,
      "name": "Torchbearer",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Torchbearers carry light sources for seasoned explorers.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 4,
        "stealth": 5,
        "survival": 3
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
          "id": "JLeDsdQFNsR2XCIX",
          "name": "Torch",
          "bonus": 5,
          "damage": "1d6+2 bludgeoning; 1 fire",
          "traits": []
        },
        {
          "id": "2vLMacPfQ0CLL0eF",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "uaNAzJXNmVUtbSOY",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "KiUvGbWVcQ7gcuHJ",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "ghFGvItVlZL7x9SC",
          "name": "Hand Crossbow",
          "bonus": 6,
          "damage": "1d6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Pa0KJtbEU8gMH1Qh",
          "name": "Torch Combatant",
          "kind": "passive",
          "description": "A torchbearer is adept at attacking with torches and deals 1 persistent fire damage when they critically hit with a Torch.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "LjB3I376CdFQwPRa",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "XyA6PKV46aNlLXOd",
          "sourceId": "XyA6PKV46aNlLXOd",
          "name": "Hand Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "vcs6FncsApxTXBHw",
          "name": "Hand Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 119,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Torch",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Torch",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Torch",
          "sourceId": "8Jdw4yAzWYylGePS",
          "name": "Torch",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Pa0KJtbEU8gMH1Qh",
          "name": "Torch Combatant",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.9UJbMaglf35GVzaZ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.9UJbMaglf35GVzaZ",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "9UJbMaglf35GVzaZ",
          "sourceId": "9UJbMaglf35GVzaZ",
          "name": "Climbing Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "O7yqJdip29iQtFn3",
          "name": "Climbing Kit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "8Jdw4yAzWYylGePS",
          "sourceId": "8Jdw4yAzWYylGePS",
          "name": "Torch",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "eSlxNPdaVsQ6hYqS",
          "name": "Torch",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ylUdMTsfOQGJ3MN3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ylUdMTsfOQGJ3MN3",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ylUdMTsfOQGJ3MN3",
          "sourceId": "ylUdMTsfOQGJ3MN3",
          "name": "Matchstick",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "zB7zVZxVnOiDDTAW",
          "name": "Matchstick",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "Y7gbcD9izEXsrXBL",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gravedigger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "0t2jNg5tpwWbCYx4",
      "slug": "gravedigger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:71a157a9429f25eb1e5266134245f6e3d9c40051a849388a99c85744680e5985",
    "translatableHash": "sha256:4a5857531b0a553b461ae53ebd383715679c4e65355e6b6ce3108f4cd4a0a14b",
    "data": {
      "schemaVersion": 1,
      "name": "Gravedigger",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "An often-overlooked group of laborers, gravediggers have a reputation for being as quiet and grim as their workplace. They're usually strong and tough from their long hours of backbreaking labor, and they tend to have a unique perspective on life and death.\nSociety is built upon the backs of laborers.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "religion": 5,
        "stealth": 4
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "void 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "C9BvM6sI4AN0SssQ",
          "name": "Shovel",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": []
        },
        {
          "id": "GPuyJgPMttZv9rs8",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ammC8wH7C165yxrp",
          "name": "Light in the Dark",
          "kind": "action",
          "description": "Requirements The gravedigger is holding a bull's-eye lantern in one hand and their religious symbol in the other, and the lantern contains oil\nEffect The gravedigger recites a brief chant to ignite their lantern with vital energy. Each undead creature in a 15-foot type:line takes 3d6 vitality damage with a check (fortitude, dc:14, basic, options:area-effect) save. This action uses all remaining oil in the bull's-eye lantern.",
          "traits": [
            "concentrate",
            "divine",
            "manipulate",
            "vitality"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "iCIavuhoO4Uam2Vj",
          "name": "Shovel",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "vDou2pKWxCBzmvqr",
          "name": "Gravedigger's Garb (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QrNvP9SgnK9DrerA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QrNvP9SgnK9DrerA",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QrNvP9SgnK9DrerA",
          "sourceId": "QrNvP9SgnK9DrerA",
          "name": "Lantern (Bull's Eye)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "rVqK4fRAl8zS1tY8",
          "name": "Lantern (Bull's Eye)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.plplsXJsqrdqNQVI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "plplsXJsqrdqNQVI",
          "sourceId": "plplsXJsqrdqNQVI",
          "name": "Religious Symbol (Wooden)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "4mQUcJRfogdhtD4e",
          "name": "Religious Symbol (Wooden) of Pharasma",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Du05UxCyCM0ZWH8z",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Du05UxCyCM0ZWH8z",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Du05UxCyCM0ZWH8z",
          "sourceId": "Du05UxCyCM0ZWH8z",
          "name": "Oil (1 pint)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "Dsv6gk01qHhDFfUp",
          "name": "Oil (1 pint)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 62,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Lantern (Bull's Eye)",
        "label": "bull's-eye lantern",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Lantern (Bull's Eye)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Lantern (Bull's Eye)",
          "sourceId": "QrNvP9SgnK9DrerA",
          "name": "Lantern (Bull's Eye)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ammC8wH7C165yxrp",
          "name": "Light in the Dark",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 223,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Oil (1 pint)",
        "label": "oil",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Oil (1 pint)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Oil (1 pint)",
          "sourceId": "Du05UxCyCM0ZWH8z",
          "name": "Oil (1 pint)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "ammC8wH7C165yxrp",
          "name": "Light in the Dark",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bodyguard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3jkmJgV4zwygUqLy",
      "slug": "bodyguard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e0a5995fecbd6f6d59e7cdc4e4df011cb79d7aa198edce68659d50e591578088",
    "translatableHash": "sha256:331a853314faf2537d0b33f33251be4e6e0b430b595bd3c802294b80a36afd8c",
    "data": {
      "schemaVersion": 1,
      "name": "Bodyguard",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Hired to protect someone famous or powerful, bodyguards use intimidation, quick wits, and martial skill to keep their charges safe. Such mercenaries might be auxiliaries to a noble's personal guards, but with special directives to safeguard their patrons.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 16,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "intimidation": 6,
        "society": 2
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
          "id": "QuZMwn4M3dqUM4Zv",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "9zdcsGmhK8XNk4Dl",
          "name": "Greatclub",
          "bonus": 7,
          "damage": "1d10+4 bludgeoning",
          "traits": [
            "backswing",
            "shove"
          ]
        },
        {
          "id": "xcD83u5zAM0PgFqf",
          "name": "Sap",
          "bonus": 7,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "JNGzuAzjmHIE1RTz",
          "name": "Sling",
          "bonus": 5,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "1MkRQqE6U0WNXi2D",
          "name": "Bodyguard's Reprisal",
          "kind": "reaction",
          "description": "Trigger A creature attacks the subject of bodyguard's defense\nEffect The bodyguard makes a Strike against the triggering creature.",
          "traits": []
        },
        {
          "id": "LtLpVRWe7Qsb7Y8A",
          "name": "Bodyguard's Defense",
          "kind": "action",
          "description": "The bodyguard grants an adjacent ally a +2 circumstance bonus to AC. This lasts until the start of the bodyguard's next turn or until the ally is no longer adjacent, whichever comes first.\nEffect: Bodyguard's Defense",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.kdGqnqbrwPzQfTsm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.kdGqnqbrwPzQfTsm",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "kdGqnqbrwPzQfTsm",
          "sourceId": "kdGqnqbrwPzQfTsm",
          "name": "Greatclub",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "EWL6M1asElblCx0x",
          "name": "Greatclub",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "TLQErnOpM9Luy7rL",
          "sourceId": "TLQErnOpM9Luy7rL",
          "name": "Sap",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "GCq6O2DHy5NeJ35N",
          "name": "Sap",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "tVVtWrinWiNGhT1B",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "HoMfrK6CCusQ93ep",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 199,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Bodyguard's Defense",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Bodyguard's Defense",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bodyguard's Defense",
          "sourceId": "IfUod2VxNmZMGGPq",
          "name": "Effect: Bodyguard's Defense",
          "type": "effect"
        },
        "owner": {
          "sourceId": "LtLpVRWe7Qsb7Y8A",
          "name": "Bodyguard's Defense",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:local-herbalist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3m8fkhbaUubLeckt",
      "slug": "local-herbalist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:668a2be76569eaa15e064a15b897273e10bc8b34fdcb5dea00755c110110c6ad",
    "translatableHash": "sha256:d9ad3e6d8be0fcd5cd8b768bdc0135b397755ed49176fa9b89054eba8fc011b3",
    "data": {
      "schemaVersion": 1,
      "name": "Local Herbalist",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Local herbalists use their understanding of the natural world to heal and restore balance. Most join a secret lodge that teaches these ancient arts.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 13,
      "hitPoints": 24,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 0,
        "con": 1,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "crafting": 6,
        "diplomacy": 4,
        "nature": 7,
        "survival": 7
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
          "id": "qO0RYh2SGAN4xp3N",
          "name": "Staff",
          "bonus": 5,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "h1XHTb5q3a6J1D81",
          "name": "Fist",
          "bonus": 5,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Qm4xkx5fQOkUH1XS",
          "name": "Fungal Spores",
          "bonus": 7,
          "damage": "1d4 poison; 1d4 poison",
          "traits": [
            "fungus",
            "poison"
          ]
        }
      ],
      "actions": [
        {
          "id": "qsM56DgJzGj32GeV",
          "name": "Herbalism Specialist",
          "kind": "passive",
          "description": "For encounters involving collecting herbs or making medicine from them, the local herbalist is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "izSaCIw4v1IAkBWC",
          "name": "Natural Medicine",
          "kind": "passive",
          "description": "The herbalist can use Nature instead of Medicine to Treat Wounds or Administer First Aid, and gains a +3 circumstance bonus to the check if they're in the wilderness with access to fresh herbal ingredients.",
          "traits": []
        },
        {
          "id": "LRgxvPy1oxQ9T5tz",
          "name": "Saving Touch",
          "kind": "reaction",
          "description": "Frequency once per 10 minutes\nTrigger An ally close enough for the herbalist to reach with a Stride is reduced to 0 Hit Points\nEffect The herbalist Strides until adjacent to the ally and Administers First Aid to that ally.",
          "traits": []
        },
        {
          "id": "FsPGffsbBkLFFt7B",
          "name": "Prompt Poultice",
          "kind": "action",
          "description": "Frequency once per day\nEffect The local herbalist quickly mixes together a potent healing salve with the most precious ingredients from their medicine bag. They create a temporary lesser elixir of life. This elixir remains potent for 1 round before becoming sour and useless.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "W2OH0N8lRkDyBZx6",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Yf7maiRDmmHAyF82",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Yf7maiRDmmHAyF82",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Yf7maiRDmmHAyF82",
          "sourceId": "Yf7maiRDmmHAyF82",
          "name": "Cookware",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "8YMHUOAUiqhBEHAU",
          "name": "Cooking Pot",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Om2pp8mnsEHdwCUT",
          "name": "Medicine Bag (Functions as a Healer's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "Om2pp8mnsEHdwCUT",
          "name": "Medicine Bag (Functions as a Healer's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "Om2pp8mnsEHdwCUT",
          "name": "Medicine Bag (Functions as a Healer's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "Om2pp8mnsEHdwCUT",
          "name": "Medicine Bag (Functions as a Healer's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "Om2pp8mnsEHdwCUT",
          "name": "Medicine Bag (Functions as a Healer's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 55,
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
          "sourceId": "izSaCIw4v1IAkBWC",
          "name": "Natural Medicine",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 111,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "izSaCIw4v1IAkBWC",
          "name": "Natural Medicine",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 260,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": "Administers First Aid",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "LRgxvPy1oxQ9T5tz",
          "name": "Saving Touch",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 229,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Lesser)",
        "label": "lesser elixir of life",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Elixir of Life (Lesser)",
          "sourceId": "TZUskLT7yvP7N2co",
          "name": "Elixir of Life (Lesser)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "FsPGffsbBkLFFt7B",
          "name": "Prompt Poultice",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:orc-agriculturist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "8WFse73d3kgTPbje",
      "slug": "orc-agriculturist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c104fcd4eeee1b983c6a8dff23339a7f5cf90a05e4a61b14d1c746e1e4ba4182",
    "translatableHash": "sha256:06500d44a36bd09c04e1dedcec2e80da6b028e8e4c60e3f5aa41591077614427",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Agriculturist",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "In the severe lands orcs occupy, there are no lush fields blooming with crops. An orc farmer must be tough and just as adept at foraging as planting and harvesting.\nOrcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.",
      "armorClass": 14,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "crafting": 3,
        "nature": 11,
        "survival": 7
      },
      "languages": [
        "common",
        "orcish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "H9gvfUbqF0rmp8Nz",
          "name": "Pitchfork",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": [
            "reach"
          ]
        },
        {
          "id": "yQodrvsJSkJfObHj",
          "name": "Sickle",
          "bonus": 7,
          "damage": "1d4+2 slashing",
          "traits": [
            "agile",
            "trip"
          ]
        },
        {
          "id": "Dxcpz5DwWU3Uh1M2",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "FbLDUdET4lgjhMd6",
          "name": "Blowgun",
          "bonus": 9,
          "damage": "1 piercing",
          "traits": [
            "agile",
            "nonlethal",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "oHZLCMoDL2q8OV1e",
          "name": "Farming Specialist",
          "kind": "passive",
          "description": "For encounters involving farming, harvesting, or identifying plants, the agriculturalist is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "p2TbIBj60drx1rKi",
          "name": "Herbal Poison",
          "kind": "action",
          "description": "The agriculturalist quickly turns some of their supplies of poisonous herbs into an herbal poison, then applies it to a melee weapon or piece of ammunition in their possession. The next successful attack with a weapon poisoned this way deals an additional 1d6 poison damage. The applied poison fades after its damage is applied to an attack or 1 minute passes, whichever happens first.",
          "traits": [
            "manipulate",
            "poison"
          ]
        },
        {
          "id": "vlo0mhj3o1G7l9yG",
          "name": "Poison Detector",
          "kind": "action",
          "description": "The orc agriculturalist attempts a check (farming-lore) or check (nature) check to determine whether an object is poison or has been poisoned. The DC is the poison's DC (if any), or the standard DC of the poison's level. On a critical success, they also learn the number and types of poison involved.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FPwsiGqMCNPLHmjX",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FPwsiGqMCNPLHmjX",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FPwsiGqMCNPLHmjX",
          "sourceId": "FPwsiGqMCNPLHmjX",
          "name": "Blowgun",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "QklAvtKLsMNKs992",
          "name": "Blowgun",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.aXuJh4i8HqSu6NYV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.aXuJh4i8HqSu6NYV",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "aXuJh4i8HqSu6NYV",
          "sourceId": "aXuJh4i8HqSu6NYV",
          "name": "Longspear",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "K0J4hKU7to5kIAPr",
          "name": "Pitchfork (as longspear)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ynnBwzkzsR6B73iO",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ynnBwzkzsR6B73iO",
          "sourceId": "ynnBwzkzsR6B73iO",
          "name": "Sickle",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "BxVn3vwxcR1M9Acz",
          "name": "Sickle",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.sqhr1crb184s3Vnd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.sqhr1crb184s3Vnd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "sqhr1crb184s3Vnd",
          "sourceId": "sqhr1crb184s3Vnd",
          "name": "Blowgun Darts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "lLlBo3v2UFwVE0Ou",
          "name": "Blowgun Darts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:kholo-pragmatist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "AhyWwDKH1gIVSfys",
      "slug": "kholo-pragmatist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d48194d4f30297730d72bf340aab50748d9fa0fe046552a39d54132b9ab86c36",
    "translatableHash": "sha256:5e3a38e3ea65a29157be47d5755f1039b25826340446fe3f55fdbc0110404f3f",
    "data": {
      "schemaVersion": 1,
      "name": "Kholo Pragmatist",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "kholo"
      ],
      "description": "Due to their aggressive lifestyle, kholo warriors rarely live to an old age. When a kholo pragmatist enters a fight, they would prefer to see another battle, so they use any possible advantage they can get to survive. They keep foes at a distance with their longspears have developed techniques to better block attacks with the weapon. If the tide of battle turns against them, kholo pragmatists will run or surrender if it's the most practical option.\nThese pragmatic hunters have earned a very poor reputation for their brutality in battle and worship of demons. While many kholos live up to the terrible stories of their ferocity and cannibalism, others are scavengers and trappers just trying to get by. Many of their cultural traditions are misunderstood by other ancestries, and some kholos play into the fear provoked in those who believe the twisted tales about their people. Kholos are often criticized for their lack of honor in battle, but a kholo understands honor doesn't bring you back home alive, nor does honor put food on the table. Ambushes, feints, and deceptions that lead to fewer kholo deaths and a quicker victory are simply the logical thing to do.",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 6,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 6,
        "society": 4,
        "stealth": 7,
        "survival": 7
      },
      "languages": [
        "common",
        "kholo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OidwtIKEA9CQp5qR",
          "name": "Longspear",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": [
            "reach"
          ]
        },
        {
          "id": "cKyMWSqfaFglsvxI",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "9KlHaK9Xtm0UwOaF",
          "name": "Sling",
          "bonus": 7,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "TeEPVcpMm15ZuYrq",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "A kholo pragmatist deals 1d4 extra damage to any creature that's within reach of at least two of the kholo pragmatist's allies.",
          "traits": []
        },
        {
          "id": "7eqTm6GocnwjhgM9",
          "name": "Pragmatic Aid",
          "kind": "action",
          "description": "Requirements The kholo pragmatist is adjacent to a foe\nEffect The kholo pragmatist sets up an advantageous avenue of attack for an ally within 10 feet of the same foe and then Steps away from that foe. The foe is Off-Guard to the kholo pragmatist's ally's next attack.",
          "traits": [
            "concentrate",
            "visual"
          ]
        },
        {
          "id": "1KxMd0puKyVM5TeO",
          "name": "Rugged Travel",
          "kind": "passive",
          "description": "A kholo ignores the first square of difficult terrain they move into each time they Step or Stride.",
          "traits": []
        },
        {
          "id": "AjkV6AIqqbmqYeXW",
          "name": "Spear Parry",
          "kind": "action",
          "description": "Requirements The kholo pragmatist is wielding a longspear\nEffect The kholo pragmatist positions their spear defensively, gaining a +1 circumstance bonus to AC until the start of their next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.aXuJh4i8HqSu6NYV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.aXuJh4i8HqSu6NYV",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "aXuJh4i8HqSu6NYV",
          "sourceId": "aXuJh4i8HqSu6NYV",
          "name": "Longspear",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "08yN8ckHhtJZ2Mjb",
          "name": "Longspear",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "62OvLZ3xjrKyBh3K",
          "name": "Sling",
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
          "sourceId": "iuebExoyd3uhqG6U",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "vg4QqQTqtuwprVJJ",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 262,
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
          "sourceId": "7eqTm6GocnwjhgM9",
          "name": "Pragmatic Aid",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Aktz95gNNzfAiTzk",
      "slug": "guard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:da485c27d233616fb5a83ceee113a0b8072757b1d510d088d39f16f3bbb5c359",
    "translatableHash": "sha256:1738f0f34d64743c0ab9826a587604ed36f4502e9879815e7ef53820c354904c",
    "data": {
      "schemaVersion": 1,
      "name": "Guard",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Guards are rank-and-file members of a town watch or city guard, trained to look for trouble, take down criminals, and follow orders.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 7,
        "intimidation": 5
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
          "id": "i6RGiBt0UOTBg3go",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "UWagoDkGXzULZ0i4",
          "name": "Sap",
          "bonus": 7,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "G5iBcxxzOecJApLi",
          "name": "Crossbow",
          "bonus": 6,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "hHccWzh003xSa6dA",
          "name": "+1 Bonus on Perception to Find concealed objects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "B5Ugi5jmtwo9cynf",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "lP5zMAGrvkhhfig2",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "hhHz8e6TMo9bnJpk",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
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
          "sourceId": "B5Ugi5jmtwo9cynf",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "TLQErnOpM9Luy7rL",
          "sourceId": "TLQErnOpM9Luy7rL",
          "name": "Sap",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "tWgRQucN54SKcyMB",
          "name": "Sap",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "YMQr577asquZIP65",
          "sourceId": "YMQr577asquZIP65",
          "name": "Scale Mail",
          "type": "armor"
        },
        "owner": {
          "sourceId": "aipXS8PeOEpODGak",
          "name": "Scale Mail",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "USHK6XQRwmq17xKh",
          "sourceId": "USHK6XQRwmq17xKh",
          "name": "Signal Whistle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "iUFcnZK0pV8uKCS7",
          "name": "Signal Whistle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "IHyqTYfxD95yGZQe",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:innkeeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BYpxg06tP5hI6CzQ",
      "slug": "innkeeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:94ee612fac5c200f9343fd431c0806e838863bf3d26e623e63c9b3b46892b6c5",
    "translatableHash": "sha256:fef3316cbb51b5890ddf1b008919adeab0a791504abb474dcede73f349baf944",
    "data": {
      "schemaVersion": 1,
      "name": "Innkeeper",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The sight of an inn is a welcome one to any weary traveler. Innkeepers can often be found cleaning the common room, overseeing the evening meal, or settling in new lodgers. Innkeepers keep an eye on their neighbors' doings and are often excellent sources of information.\nSociety is built upon the backs of laborers.",
      "armorClass": 14,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 3,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "deception": 6,
        "diplomacy": 6,
        "society": 7
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
          "id": "FMXvHmfCarIbLAk5",
          "name": "Broom",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "TEKRQ6lf1xZxEPIz",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "JUbm5Xf0IURQGSTX",
          "name": "Pewter Mug",
          "bonus": 5,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "dTwii5UOFOwMyY0C",
          "name": "Font of Gossip",
          "kind": "passive",
          "description": "The innkeeper's business gives them insight into the neighborhood's happenings. A person can Gather Information from an innkeeper in 30 minutes rather than canvassing an entire neighborhood. Each person can learn gossip from an innkeeper only once per day, and only if the innkeeper is friendly or helpful to that individual. Whatever information the innkeeper knows about a given topic doesn't change if someone else asks the innkeeper about that topic, unless the innkeeper has since learned more.",
          "traits": []
        },
        {
          "id": "w7tyWggDRt5i7kGc",
          "name": "Innkeeper's Advice",
          "kind": "action",
          "description": "Frequency once per day\nEffect The innkeeper gives some pertinent advice to a single creature other than themself. For 24 hours, when that creature fails a skill check or saving throw, they can recall this advice and reroll the check, using the second result instead. Once that creature uses this ability, its effect ends. A creature that receives the Innkeeper's Advice is temporarily immune to the ability for 1 month.",
          "traits": [
            "auditory",
            "fortune",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "2uSSFi0lqFoWgzYI",
          "name": "Home Base Brawler",
          "kind": "passive",
          "description": "The innkeeper knows how to settle fights that break out. When the innkeeper is fighting in their establishment, their Strikes gain a +1 circumstance bonus to the attack roll, deal an additional 1d4 damage, and gain the nonlethal trait if they don't already have it. The innkeeper can choose not to gain this benefit.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "9bruXwALVDFhxs9a",
          "name": "Broom (Functions as a Staff)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "pV1Zg9nyy2H7ISQ6",
          "name": "Innkeeper's Apron (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.w4Hd6nunVVqw3GWj",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "w4Hd6nunVVqw3GWj",
          "sourceId": "w4Hd6nunVVqw3GWj",
          "name": "Basic Crafter's Book",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "p6fuDAVu9s3zeg9e",
          "name": "Ledger",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.wRSS5vP8ltrThsoC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.wRSS5vP8ltrThsoC",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "wRSS5vP8ltrThsoC",
          "sourceId": "wRSS5vP8ltrThsoC",
          "name": "Mug",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "rnYYlP0qRPcQx4vh",
          "name": "Pewter Mug",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 96,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Gather Information",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Gather Information",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Gather Information",
          "sourceId": "plBGdZhqq5JBl1D8",
          "name": "Gather Information",
          "type": "action"
        },
        "owner": {
          "sourceId": "dTwii5UOFOwMyY0C",
          "name": "Font of Gossip",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:goblin-chef",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "DsyCuAx23QkztXNF",
      "slug": "goblin-chef",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0ea115da8426c3a579a4940213f48b609d33d008dfe549f33b66d77ef3ed49af",
    "translatableHash": "sha256:213601410267686dca7ad828d3a5c4016d1b635fabdf9ce99eba19f6407a3ace",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Chef",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "Goblins eat almost anything. Though they'll survive on raw or little-cooked meat, some prefer searing or frying their food first—or better yet, pickling it! A goblin chef can make anything edible (at least to a goblin).\nGoblins can be found across Golarion, sometimes threatening taller humanoids (whom they refer to as \"longshanks\") and sometimes redeeming harmful history by working alongside others.",
      "armorClass": 16,
      "hitPoints": 24,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "nature": 7,
        "society": 4,
        "stealth": 6,
        "survival": 7
      },
      "languages": [
        "common",
        "goblin"
      ],
      "defenses": {
        "immunities": [
          "sickened"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "uqBO9mtcMMM4g3xJ",
          "name": "Cleaver",
          "bonus": 7,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "backstabber",
            "finesse"
          ]
        },
        {
          "id": "GKPB4Zh8uOFac3Cs",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "X6QRqKiWVmhCE1Tt",
          "name": "Good Enough to Eat",
          "kind": "passive",
          "description": "The goblin chef can turn otherwise inedible items into meals for others. They can provide food for any number of creatures without using the Subsist downtime activity as long as garbage is readily available. A non-goblin who eats the goblin chef's food must attempt a check (fortitude, dc:14) save. On a failure, they suffer an upset stomach for 1 day; if they attempt to willingly ingest anything else during that period, they must first succeed at a check (flat, dc:4) or the action is disrupted.",
          "traits": []
        },
        {
          "id": "weCUq0wQDAct42h2",
          "name": "Kitchen Specialist",
          "kind": "passive",
          "description": "For encounters involving cooking, a goblin chef is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "bKTuFuL2mc8vM1qy",
          "name": "+2 circumstance bonus against ingested poisons",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "WdBkwKns7GTDpJSj",
          "name": "Eat a Pickle",
          "kind": "action",
          "description": "Effect The goblin chef draws a pickle and eats it or feeds it to an adjacent ally. The chef or ally gains 4 temporary Hit Points and ignores any penalties from emotion effects or fatigue for 1 round.\nEffect: Eat a Pickle",
          "traits": []
        }
      ],
      "spellcasting": []
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
          "sourceId": "ji8X7Iz4cPvUmEx6",
          "name": "Cleaver (Functions as Dogslicer)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "24nv7Mz0lel6HY8t",
          "name": "Leather Apron (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 144,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Subsist",
          "sourceId": "49y9Ec4bDii8pcD3",
          "name": "Subsist",
          "type": "action"
        },
        "owner": {
          "sourceId": "X6QRqKiWVmhCE1Tt",
          "name": "Good Enough to Eat",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 227,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Eat a Pickle",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Eat a Pickle",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Eat a Pickle",
          "sourceId": "EBtQyoX3wTwlDMwP",
          "name": "Effect: Eat a Pickle",
          "type": "effect"
        },
        "owner": {
          "sourceId": "WdBkwKns7GTDpJSj",
          "name": "Eat a Pickle",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:acolyte-of-iomedae",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "dwzAEnCBpDWnZBWr",
      "slug": "acolyte-of-iomedae",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0125b4e7a2911d653bf6a4e77150418d0c9fc2f2266189d838350dcae4e693ac",
    "translatableHash": "sha256:5f327b56c7309ca361a6160c976bd3d912418c661856d14a8b1bf3c885f9f14d",
    "data": {
      "schemaVersion": 1,
      "name": "Acolyte of Iomedae",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Underling clerics are still learning the tenets of their faith and answering to a superior priest. Their days are spent in devotion and learning, sequestered in temples.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 2,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": -1,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "diplomacy": 5,
        "intimidation": 5,
        "religion": 7,
        "society": 4
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
          "id": "Zl4mneBlITbDXaeM",
          "name": "Longsword",
          "bonus": 6,
          "damage": "1d8+1 slashing",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "YuxvNu0y7eu4ZMSV",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "zxMMkT6hacnrnlB8",
          "name": "Crossbow",
          "bonus": 7,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [],
      "spellcasting": [
        {
          "id": "vlWFKheS1M1xZCVa",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "rhxU2jOymPlJj9Uu",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "iwE3xaqhIOpvAsRO",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "zuhqAncbj8qKNJsi",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "PIIS7z00Ws2aEWyq",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "gnpyp8aLraSwivxk",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "9zIEfpscJ0OYriAg",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "CfgGHIruOFGJ898J",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "1LOFSTEI51HzT9kt",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        },
        {
          "id": "OB0ql4K6yuuYBGHs",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "HSmHz3itGJ1JrO3Z",
              "name": "Weapon Surge",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.W37iBXLsY2trJ1rS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.W37iBXLsY2trJ1rS",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "W37iBXLsY2trJ1rS",
          "sourceId": "W37iBXLsY2trJ1rS",
          "name": "Weapon Surge",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HSmHz3itGJ1JrO3Z",
          "name": "Weapon Surge",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 563,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Weapon Surge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Weapon Surge",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Weapon Surge",
          "sourceId": "qlz0sJIvqc0FdUdr",
          "name": "Spell Effect: Weapon Surge",
          "type": "effect"
        },
        "owner": {
          "sourceId": "HSmHz3itGJ1JrO3Z",
          "name": "Weapon Surge",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "9ikyU4sALHdZrYmq",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.LJdbVTOZog39EEbi",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.LJdbVTOZog39EEbi",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "LJdbVTOZog39EEbi",
          "sourceId": "LJdbVTOZog39EEbi",
          "name": "Longsword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "4p5sUcC3Huh0JHJT",
          "name": "Longsword",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "upzjwQ96cZG0Xlmx",
          "sourceId": "upzjwQ96cZG0Xlmx",
          "name": "Religious Symbol (Silver)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "LHeQMbvctFr6zgak",
          "name": "Religious Symbol of Iomedae",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.z1okOYtNVnpBNj9F",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.z1okOYtNVnpBNj9F",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "z1okOYtNVnpBNj9F",
          "sourceId": "z1okOYtNVnpBNj9F",
          "name": "Religious Text",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "hFRqeNwbsHdgeqjs",
          "name": "Religious Text of Iomedae",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "cQbacF21qNpNXgpl",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rhxU2jOymPlJj9Uu",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "rhxU2jOymPlJj9Uu",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
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
          "sourceId": "iwE3xaqhIOpvAsRO",
          "name": "Heal",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "zuhqAncbj8qKNJsi",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
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
          "sourceId": "zuhqAncbj8qKNJsi",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "OhD2Z6rIGGD5ocZA",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "PIIS7z00Ws2aEWyq",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Identify Magic",
          "sourceId": "eReSHVEPCsdkSL4G",
          "name": "Identify Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "PIIS7z00Ws2aEWyq",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.8xRzLhwGL7Dgy3EZ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.8xRzLhwGL7Dgy3EZ",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "8xRzLhwGL7Dgy3EZ",
          "sourceId": "8xRzLhwGL7Dgy3EZ",
          "name": "Sanctuary",
          "type": "spell"
        },
        "owner": {
          "sourceId": "gnpyp8aLraSwivxk",
          "name": "Sanctuary",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "TVKNbcgTee19PXZR",
          "sourceId": "TVKNbcgTee19PXZR",
          "name": "Shield",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9zIEfpscJ0OYriAg",
          "name": "Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 255,
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
          "sourceId": "9zIEfpscJ0OYriAg",
          "name": "Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 585,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Shield",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Shield",
          "sourceId": "Jemq5UknGdMO7b73",
          "name": "Spell Effect: Shield",
          "type": "effect"
        },
        "owner": {
          "sourceId": "9zIEfpscJ0OYriAg",
          "name": "Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 655,
        "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Shield Immunity",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Shield Immunity",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Shield Immunity",
          "sourceId": "QF6RDlCoTvkVHRo4",
          "name": "Effect: Shield Immunity",
          "type": "effect"
        },
        "owner": {
          "sourceId": "9zIEfpscJ0OYriAg",
          "name": "Shield",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Gb7SeieEvd0pL2Eh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Gb7SeieEvd0pL2Eh",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Gb7SeieEvd0pL2Eh",
          "sourceId": "Gb7SeieEvd0pL2Eh",
          "name": "Sure Strike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CfgGHIruOFGJ898J",
          "name": "Sure Strike",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 224,
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
          "sourceId": "CfgGHIruOFGJ898J",
          "name": "Sure Strike",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 280,
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
          "sourceId": "CfgGHIruOFGJ898J",
          "name": "Sure Strike",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 410,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sure Strike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sure Strike",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Sure Strike",
          "sourceId": "fpGDAz2v5PG0zUSl",
          "name": "Spell Effect: Sure Strike",
          "type": "effect"
        },
        "owner": {
          "sourceId": "CfgGHIruOFGJ898J",
          "name": "Sure Strike",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.mAMEt4FFbdqoRnkN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.mAMEt4FFbdqoRnkN",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "mAMEt4FFbdqoRnkN",
          "sourceId": "mAMEt4FFbdqoRnkN",
          "name": "Void Warp",
          "type": "spell"
        },
        "owner": {
          "sourceId": "1LOFSTEI51HzT9kt",
          "name": "Void Warp",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 150,
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
          "sourceId": "1LOFSTEI51HzT9kt",
          "name": "Void Warp",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tunnel-viper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ETSHIHmTP0Yajsci",
      "slug": "tunnel-viper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b78b0b157c179491428d73956d07fd9b68b0906f65d8a80a095863e9e4084e55",
    "translatableHash": "sha256:42425c000d366948a2a9ba071cf93e0fc55531e853dbc6ed666befece9d1b89e",
    "data": {
      "schemaVersion": 1,
      "name": "Tunnel Viper",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "ratfolk"
      ],
      "description": "There is no better way for a ysoki to distinguish themself than to defend the warren, with many proving themselves by venturing out and challenging monsters they come across. Those who return triumphant from such tests find themselves among the ranks of ysoki warriors, able to wear their accomplishments as a badge of pride. They often venture out again once established and experienced to attain more notoriety as warriors.\nYsoki (or, as outsiders call them, ratfolk) in their warrens have a society that is both stern and democratic, caring and ever vigilant. And at the top is a handful of intimidating and protective figures who make sure the swarm remains safe.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 6,
        "nature": 5,
        "stealth": 8,
        "survival": 5,
        "thievery": 6
      },
      "languages": [
        "common",
        "sakvroth",
        "ysoki"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "uAAfNuqQj37EkoHk",
          "name": "Ranseur",
          "bonus": 8,
          "damage": "1d10+3 piercing",
          "traits": [
            "disarm",
            "reach-10"
          ]
        },
        {
          "id": "HQAWtjxWnxmHh33w",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "WGpiVc7q1gkvpQpC",
          "name": "Arbalest",
          "bonus": 8,
          "damage": "1d10 piercing",
          "traits": [
            "backstabber",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "r83TcSVOHUaoEcHS",
          "name": "Running Reload",
          "kind": "action",
          "description": "The tunnel viper Strides, Steps, or Sneaks, then Interacts to reload.",
          "traits": []
        },
        {
          "id": "dh1wrrS8IDB3wt2b",
          "name": "Swarming",
          "kind": "passive",
          "description": "A tunnel viper can end their movement in the same square as an ally that also has this ability. Only two such creatures can share the same space.",
          "traits": []
        },
        {
          "id": "dUAjBwuzmS34nTm4",
          "name": "Tunnel Fighter",
          "kind": "passive",
          "description": "The tunnel viper deals an additional 1d6 precision damage to creatures that are Squeezing or in difficult terrain due to narrow spaces.",
          "traits": []
        },
        {
          "id": "JJL9QMJyWaCgfhwk",
          "name": "Tunnel Travel",
          "kind": "passive",
          "description": "Narrow spaces aren't difficult terrain for the tunnel viper, and the viper can Squeeze at 5 feet per round (or 10 feet on a critical success).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.K3qNqWRvBhnlwE3Q",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.K3qNqWRvBhnlwE3Q",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "K3qNqWRvBhnlwE3Q",
          "sourceId": "K3qNqWRvBhnlwE3Q",
          "name": "Arbalest",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "dqqbR17toZz4FvYy",
          "name": "Arbalest",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UfurZQK6H6SgOjqe",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UfurZQK6H6SgOjqe",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UfurZQK6H6SgOjqe",
          "sourceId": "UfurZQK6H6SgOjqe",
          "name": "Ranseur",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "OYqOjMUlEjxnKnBs",
          "name": "Ranseur",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 83,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
        "label": "Squeezing",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Squeeze",
          "sourceId": "kMcV8e5EZUxa6evt",
          "name": "Squeeze",
          "type": "action"
        },
        "owner": {
          "sourceId": "dUAjBwuzmS34nTm4",
          "name": "Tunnel Fighter",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 82,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Squeeze",
          "sourceId": "kMcV8e5EZUxa6evt",
          "name": "Squeeze",
          "type": "action"
        },
        "owner": {
          "sourceId": "JJL9QMJyWaCgfhwk",
          "name": "Tunnel Travel",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "YMQr577asquZIP65",
          "sourceId": "YMQr577asquZIP65",
          "name": "Scale Mail",
          "type": "armor"
        },
        "owner": {
          "sourceId": "hqen1vAAgwmJt0O9",
          "name": "Scale Mail",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.7fSnvJ2xoSfa6JXD",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "7fSnvJ2xoSfa6JXD",
          "sourceId": "7fSnvJ2xoSfa6JXD",
          "name": "Caltrops",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "hG85vpKkLLLeCKMR",
          "name": "Caltrops",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 797,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Caltrops",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Caltrops",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Caltrops",
          "sourceId": "5DaEI4I7cVdOD507",
          "name": "Effect: Caltrops",
          "type": "effect"
        },
        "owner": {
          "sourceId": "hG85vpKkLLLeCKMR",
          "name": "Caltrops",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "CJUYgnnlFganiMpF",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 39,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
        "label": "Sneaks",
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
          "sourceId": "r83TcSVOHUaoEcHS",
          "name": "Running Reload",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:cultist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GbPDSJeXjHc1VRN2",
      "slug": "cultist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:67db7656a1a01e6d334a5cb5629b103084c30d8b052fb4a60dc6861545572f17",
    "translatableHash": "sha256:36e6c4a5eddbc2c521746ac01cf88d62423fa45c462b016283af960311b200ae",
    "data": {
      "schemaVersion": 1,
      "name": "Cultist",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Cultists have passed an initiation ritual to a secret sect or organization; now, they devote themselves to achieving their most perfect spiritual form.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": -1,
        "cha": 0
      },
      "skills": {
        "deception": 3,
        "intimidation": 3,
        "occultism": 4,
        "society": 4,
        "stealth": 6
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
          "id": "yEcvRwueCdGqs9GC",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "nN82jRXcz7hgkXiE",
          "name": "Dagger",
          "bonus": 6,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "xmodHCDbIrXMNj5A",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "cHWzyBoiaRRRBq99",
          "name": "Will +2 vs. Higher Ranking Members of the Cult",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "zMkrKhyfRWFrFfuv",
          "name": "Fanatical Frenzy",
          "kind": "action",
          "description": "Requirements The cultist has taken damage and is neither Fatigued nor already in a frenzy\nEffect The cultist flies into a frenzy that lasts 1 minute. While frenzied, the cultist gains a +1 status bonus to attack rolls and a +2 status bonus to damage rolls, and they take a –2 penalty to AC. The cultist can't voluntarily stop their frenzy. After their frenzy, the cultist is fatigued.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "7Hepy2bK3kQbRIov",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "ImjzyAwR4eEDXf0q",
          "name": "Cultist Garb (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hywANJCzT7hMgWna",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hywANJCzT7hMgWna",
          "sourceId": "hywANJCzT7hMgWna",
          "name": "Scholarly Journal",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "x1RYn5tSkrcRR0rh",
          "name": "Occult Text",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kquBnQ0kObZztnBc",
          "sourceId": "kquBnQ0kObZztnBc",
          "name": "+1 Status to All Saves vs. Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "cHWzyBoiaRRRBq99",
          "name": "Will +2 vs. Higher Ranking Members of the Cult",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 77,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zMkrKhyfRWFrFfuv",
          "name": "Fanatical Frenzy",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gunsmith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GuYToKMrt5mxxZW6",
      "slug": "gunsmith",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a51852d7a3dea6293120a5c6bec5b7f0cd9fd2ea37ea4f40c153e4c5016bce5f",
    "translatableHash": "sha256:a2a2b443737dc2397edd309dd756fa635e1a672560f59644b9b96328012147a8",
    "data": {
      "schemaVersion": 1,
      "name": "Gunsmith",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Even though every gunslinger learns the basics of maintaining and repairing firearms as a part of their training, few would question the expertise of a master gunsmith regarding the weapons by which they live and die. Although professional gunsmiths are rarely found outside of settlements where firearms are common, such as Alkenstar or Dongun Hold, true masters of this specialized craft tend to quickly build reputations for themselves that extend well beyond the borders of whatever region they call home.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 16,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 4,
        "crafting": 13,
        "society": 5
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
          "id": "Q9RYUErWjcFDBeM7",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "2aiKUon3GulChkhX",
          "name": "Dueling Pistol",
          "bonus": 8,
          "damage": "1d6+2 piercing",
          "traits": [
            "concealable",
            "concussive",
            "fatal-d10",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "xKMNEXdiJBXV8NP5",
          "name": "Firearm Specialist",
          "kind": "passive",
          "description": "For encounters involving the crafting or maintenance of firearms, the gunsmith is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "tnkspwVp6AUsxKbC",
          "name": "Misfires",
          "kind": "passive",
          "description": "Firearms that are improperly maintained or subjected to unusual strain can misfire. If a creature attempts to fire a firearm that was fired the previous day or earlier and hasn't been cleaned since, it rolls a check (flat, dc:5, showDC:all) before making its attack roll. If it fails this misfire check, the weapon misfires and jams. The attack is an automatic critical failure, and a creature must use an Interact action to clear the jam before the weapon can be reloaded and fired again. Once a creature has spent at least an hour cleaning a weapon, no one needs to roll for a misfire for that weapon until the next day unless an effect says otherwise.",
          "traits": []
        },
        {
          "id": "5MRVOagY9yIAN93U",
          "name": "Crafty Reload",
          "kind": "passive",
          "description": "The gunsmith can Interact to reload a firearm without a free hand if they have a firearm in each hand. In addition, each time the gunsmith reloads a firearm, they can attempt a check (crafting) check against the hard DC for the firearm's level (check (crafting, dc:17, showDC:all) for a dueling pistol). On a success, they gain a +1 circumstance bonus on the next attack roll they make with that firearm before the start of their next turn.",
          "traits": []
        },
        {
          "id": "W3jGxbNNZU3alzxe",
          "name": "Firearm Sabotage",
          "kind": "action",
          "description": "Requirements The gunsmith is wielding or holding a one-handed firearm and has a free hand\nEffect The gunsmith deftly makes a minor modification to a firearm that can be detected with a check (perception, against:crafting, rollerRole:target) check opposed by the gunsmith's Crafting DC. If the sabotage is not reversed with a successful Crafting check against the gunsmith's Crafting DC, the firearm automatically misfires the next time it is used (the flat check is an automatic failure; see the Misfires sidebar).",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ogv5nwwrc3sU8DnP",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ogv5nwwrc3sU8DnP",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ogv5nwwrc3sU8DnP",
          "sourceId": "ogv5nwwrc3sU8DnP",
          "name": "Dueling Pistol",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "DhRHSdAsRPpFV146",
          "name": "Dueling Pistol",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "7TJbDxCqAvPZNNSp",
          "name": "Artisan's Toolkit (Gunsmithing)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FKPuzveKRNJhA1mi",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FKPuzveKRNJhA1mi",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FKPuzveKRNJhA1mi",
          "sourceId": "FKPuzveKRNJhA1mi",
          "name": "Rounds (Dueling Pistol)",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "SIeapbvFx2krETEn",
          "name": "Rounds (Dueling Pistol)",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 497,
        "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Alchemical Crafting",
          "sourceId": "is3Oz9wt11lNq62K",
          "name": "Alchemical Crafting",
          "type": "feat"
        },
        "owner": {
          "sourceId": "SIeapbvFx2krETEn",
          "name": "Rounds (Dueling Pistol)",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:rigger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "hBSGQAonirqUAHCP",
      "slug": "rigger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bd090c033a84a44a7a0af106c01bb8101f6459bfe2a5ac9c3104a42e4676f42b",
    "translatableHash": "sha256:089553f5b231fe086094047053c9b5075d572514b44d1179979b2a2de7e8d450",
    "data": {
      "schemaVersion": 1,
      "name": "Rigger",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A knack for knots and no fear of heights are the prime qualifications of these high-flying rope wranglers and lookouts.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 7
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
          "id": "JVuhWGA9AXWasDvB",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "FLHJHN9DQ2lvRy9A",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "6eWqIosvt938zvuQ",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "YjVrG3qZDlrZl7bw",
          "name": "Death from Above",
          "kind": "passive",
          "description": "The rigger deals an additional 1d4 precision damage to any creature at a lower elevation than themself.",
          "traits": []
        },
        {
          "id": "rYfeRZs60dE8UT5j",
          "name": "Practiced Climber",
          "kind": "passive",
          "description": "The rigger requires only one hand free to Climb and is not Off-Guard when Climbing.",
          "traits": []
        },
        {
          "id": "NB8rrYFoNfUs3S6Z",
          "name": "Rope Tension Spring",
          "kind": "action",
          "description": "Requirements The rigger is adjacent to a vertical rope on board a ship and is wielding a dagger\nEffect The rigger loops the rope around one arm and severs the rope with their dagger. Counterweight and tension pull the rigger 20 feet straight up.",
          "traits": [
            "manipulate",
            "move"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "BR3RAmPGKOMYsl51",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "fyYnQf1NAx9fWFaS",
          "sourceId": "fyYnQf1NAx9fWFaS",
          "name": "Rope",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "f32enY9fekriecgW",
          "name": "Rope",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 62,
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
          "sourceId": "rYfeRZs60dE8UT5j",
          "name": "Practiced Climber",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:druid-initiate",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "J0JoIeg82JCQj3Fm",
      "slug": "druid-initiate",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:da59fbdf4e14a22ec685d9e4d57c5e6cc3234ba3d236faa7645a9929843f74e6",
    "translatableHash": "sha256:105bcb09605db6263cbe68630f1c016162f21bd880735acdb4e66e3227823d88",
    "data": {
      "schemaVersion": 1,
      "name": "Druid Initiate",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A neophyte druid learns basic techniques and spellcasting soon after being initiated into their druidic order. The druid initiate has already learned much from their mentors—elders among the order—but hasn't had a chance to develop their own identity.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 15,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 4,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "diplomacy": 3,
        "medicine": 7,
        "nature": 7,
        "stealth": 4,
        "survival": 7
      },
      "languages": [
        "common",
        "wildsong"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LNsfzJy8SnqPPIxk",
          "name": "Staff",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "EIzZYTvfiATvqZva",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "rrWvsuzF87chu25C",
          "name": "Sling",
          "bonus": 6,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "uDh7N3sxYKJqYT14",
          "name": "Plant Empathy",
          "kind": "passive",
          "description": "The druid initiate can ask questions of, receive answers from, and use the Diplomacy skill with plants and fungus.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "9RsB2IrxHU1xP4MG",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 0,
          "saveDc": 17,
          "spells": [
            {
              "id": "yul7rQCzwiMnEesL",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "KJvvvMp8qZMmjZGF",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "FWnz2DzB8HSWC5Bo",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "q7DVdAc4Io6I844X",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "nzXx3OmiA2uiV0Qr",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "fOvudgpPKFjOPDhf",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "CQyK9QXqquRAW2mG",
              "name": "Thunderstrike",
              "rank": 1
            }
          ]
        },
        {
          "id": "kbljoEgww15jnADV",
          "name": "Druid Order Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 0,
          "saveDc": 17,
          "spells": [
            {
              "id": "5WkJ8BFZBo1EpnXq",
              "name": "Cornucopia",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "gnoR6md7OusZvonB",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "II8wL4kIHCKTvqzV",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
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
          "sourceId": "T4M7Ms4brCOHHkuz",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "FFdOQg3gbGtpsvg4",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "FFdOQg3gbGtpsvg4",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "FFdOQg3gbGtpsvg4",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "FFdOQg3gbGtpsvg4",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "FFdOQg3gbGtpsvg4",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QbOlqr4lSkeOEfty",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QbOlqr4lSkeOEfty",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QbOlqr4lSkeOEfty",
          "sourceId": "QbOlqr4lSkeOEfty",
          "name": "Primal Symbol",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "KpVDwOfb7pisGvYE",
          "name": "Primal Symbol",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "BGEuCDStK9zuRwiT",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.vQuwLqtFFYt0K15N",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.vQuwLqtFFYt0K15N",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "vQuwLqtFFYt0K15N",
          "sourceId": "vQuwLqtFFYt0K15N",
          "name": "Cornucopia",
          "type": "spell"
        },
        "owner": {
          "sourceId": "5WkJ8BFZBo1EpnXq",
          "name": "Cornucopia",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "yul7rQCzwiMnEesL",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "yul7rQCzwiMnEesL",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "KJvvvMp8qZMmjZGF",
          "name": "Heal",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "6DfLZBl8wKIV03Iq",
          "sourceId": "6DfLZBl8wKIV03Iq",
          "name": "Ignition",
          "type": "spell"
        },
        "owner": {
          "sourceId": "FWnz2DzB8HSWC5Bo",
          "name": "Ignition",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.tXa5vOu5giBNCjdR",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.tXa5vOu5giBNCjdR",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "tXa5vOu5giBNCjdR",
          "sourceId": "tXa5vOu5giBNCjdR",
          "name": "Know the Way",
          "type": "spell"
        },
        "owner": {
          "sourceId": "q7DVdAc4Io6I844X",
          "name": "Know the Way",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
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
          "sourceId": "nzXx3OmiA2uiV0Qr",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
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
          "sourceId": "nzXx3OmiA2uiV0Qr",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
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
          "sourceId": "fOvudgpPKFjOPDhf",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
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
          "sourceId": "fOvudgpPKFjOPDhf",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
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
          "sourceId": "fOvudgpPKFjOPDhf",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
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
          "sourceId": "fOvudgpPKFjOPDhf",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.zDJS8E66UI0himqV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.zDJS8E66UI0himqV",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "zDJS8E66UI0himqV",
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CQyK9QXqquRAW2mG",
          "name": "Thunderstrike",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 279,
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
          "sourceId": "CQyK9QXqquRAW2mG",
          "name": "Thunderstrike",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:forager",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "JWhmMRoFHl2tmDS9",
      "slug": "forager",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16d647e8ef408fd32a43dde29793c80d943caee71054b5918fe36a2d7a222185",
    "translatableHash": "sha256:cac77ffef23dbcc34e1e62e101644750ea2d7dec18b2f0b9bccff56cf72195d6",
    "data": {
      "schemaVersion": 1,
      "name": "Forager",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Foragers know the areas they live and work in like no other. They can tell you exactly where to find a rare medicinal fern, when to harvest it, and how to use it; just don't expect them to be up-to-date on the latest town gossip. They spend as much time in the wilderness as they can, filling their baskets with a variety of useful plants.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "medicine": 6,
        "nature": 10,
        "stealth": 3,
        "survival": 10
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
          "id": "yFZfTUt5v2qwdU1q",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "jmntXQsN3khnAHYr",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "4ZHqL02rxNOjKb8G",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "xkEFRbh4pOkeRyLw",
          "name": "Fruit or Vegetable",
          "bonus": 7,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "Koqr0uHZhlZmR5Dx",
          "name": "+4 to Notice Flora and Fauna",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "c1mFMiLxJNswSZe0",
          "name": "Expert Subsistence",
          "kind": "passive",
          "description": "While using Survival to [[/act subsist statistic=survival]], if the forager rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and four additional creatures, and on a critical success, they can take care of twice as many creatures as on a success.",
          "traits": []
        },
        {
          "id": "kDcLgVbxSo8kLjUZ",
          "name": "Natural Specialist",
          "kind": "passive",
          "description": "For encounters involving Nature or Survival, the forager is a 3rd-level challenge.",
          "traits": []
        },
        {
          "id": "wsoMN2cCMonkNzge",
          "name": "Local Poison",
          "kind": "action",
          "description": "The forager coats their dagger in a diluted, locally sourced poison. Until the end of their turn, Strikes with their dagger deal an additional 2 persistent poison damage.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "PExmCzCE4i3zGwDY",
          "name": "Dagger",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mechanic",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Koz2GhqliCU5sIJl",
      "slug": "mechanic",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:283cf14b0efb2a11256fca6982453e3f5f35452cfe1652e9dcec23f3c26f54cc",
    "translatableHash": "sha256:1ba530df40b40adbc72a332cf0ceb809f6d053f4e6f8cddd4b5157de18408df8",
    "data": {
      "schemaVersion": 1,
      "name": "Mechanic",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "No one knows how to get the most out of their equipment better than a mechanic. A mechanic can repair just about any mechanical device you put in front of them with aplomb. However, they can also push the device to achieve more than you ever could have hoped for, provided you do not mind a small explosion every now and again. Don't get distracted by their impressive work, or you might be blindsided by a fast-swinging wrench.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 14,
      "hitPoints": 22,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 1,
        "int": 3,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "crafting": 16,
        "thievery": 6
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
          "id": "nwb2BoK0d95nq40y",
          "name": "Heavy Wrench",
          "bonus": 7,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "0vVEiwK17dpFzgYu",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "37c6XNLv4HiO2gMq",
          "name": "Arbalest",
          "bonus": 8,
          "damage": "1d10 piercing",
          "traits": [
            "backstabber",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Us26kvXKvDuvM3gQ",
          "name": "Mechanical Repair",
          "kind": "passive",
          "description": "The mechanic is trained in Crafting, but a master in Crafting for mechanical devices, siege weapons, and vehicles. They can Repair in 1 minute instead of 10 minutes, or in 3 actions for a mechanical device, siege weapon, or vehicle.",
          "traits": []
        },
        {
          "id": "hFCLeErWBZW9j1Ox",
          "name": "Mechanical Specialist",
          "kind": "passive",
          "description": "For encounters involving mechanical repair, the mechanic is an 8th-level challenge.",
          "traits": []
        },
        {
          "id": "VUavvarLcywk8Q3w",
          "name": "Risky Upgrade",
          "kind": "action",
          "description": "The mechanic pushes a mechanical device, siege weapon, or vehicle pasts its regular limits with a temporary upgrade chosen from the list below. An item can have only one risky upgrade at a time. If an item has an upgrade at the start of the mechanic's turn, the mechanic must attempt a check (flat, dc:5). (These flat checks continue even if the mechanic is dead or otherwise can't take turns.) On a failure, the item explodes, dealing damage equal to the item's level to all adjacent creatures and ending the upgrade.\n• Overheat Weapons If the item would deal damage, it deals an additional 1d6 fire damage. This increases to 2d6 if the item is 8th level or higher.\n• Pressured Plating The item gains a +3 status bonus to its Hardness and gains temporary Hit Points equal to double its level that last for 10 minutes.\n• Propelled Boost If the item has a Speed, the item gains a +15-foot status bonus to Speed.",
          "traits": [
            "concentrate",
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.K3qNqWRvBhnlwE3Q",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.K3qNqWRvBhnlwE3Q",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "K3qNqWRvBhnlwE3Q",
          "sourceId": "K3qNqWRvBhnlwE3Q",
          "name": "Arbalest",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "n7CmjkKMPyHKzrtX",
          "name": "Arbalest",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.9iDqOLNFKxiTcFKE",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.9iDqOLNFKxiTcFKE",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "9iDqOLNFKxiTcFKE",
          "sourceId": "9iDqOLNFKxiTcFKE",
          "name": "Mace",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "EHiqnDjQXWBrf1mO",
          "name": "Heavy Wrench (Functions as a Mace)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.vLGDUFrg4yGzpTQX",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.vLGDUFrg4yGzpTQX",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "vLGDUFrg4yGzpTQX",
          "sourceId": "vLGDUFrg4yGzpTQX",
          "name": "Repair Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "rjtcoUxOr7SrcIiy",
          "name": "Repair Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "M8hyZeCNuTDRdZdm",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:abbot-of-abadar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "oAKCSQ9z2bLTO9sr",
      "slug": "abbot-of-abadar",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf3e39720ea1024dd345fe62ac653f1ce927fc7de1472264165f690cc90a408b",
    "translatableHash": "sha256:20acf5d08690121ad9adc085cd7d3d261037decb9e1c0f48ee167fafe9972504",
    "data": {
      "schemaVersion": 1,
      "name": "Abbot of Abadar",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Abbots are often the heads of religious institutions less focused on spellcasting, such as orphanages, religious schools, or charities.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 14,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 4,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": -2,
        "int": 2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "deception": 6,
        "diplomacy": 8,
        "religion": 21,
        "society": 7
      },
      "languages": [
        "common",
        "empyrean",
        "utopian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "YS9jVkfYN5LbkJiC",
          "name": "Griffon Cane",
          "bonus": 6,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "zcqjDb78UZ7mmaG3",
          "name": "Fist",
          "bonus": 6,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "w6s4FoI4lqBRww84",
          "name": "Crossbow",
          "bonus": 6,
          "damage": "1d8+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "fR0kJmkQQ5bfcm8D",
          "name": "Religious Specialist",
          "kind": "passive",
          "description": "For encounters involving religious debates or conflicts of doctrine, the abbot is a 9th-level challenge.",
          "traits": []
        },
        {
          "id": "rXBBwXME5oMIAc24",
          "name": "True Faith",
          "kind": "passive",
          "description": "The abbot uses lessons from scripture to foil others trying to deceive them. They can use their Religion modifier to [[/act sense-motive skill=religion]] instead of Perception, and their Religion DC instead of their Perception DC against attempts to Lie to them.",
          "traits": []
        },
        {
          "id": "7C5XmGhBV3HXbug9",
          "name": "Divine Protection",
          "kind": "action",
          "description": "Frequency once per day\nEffect The abbot beseeches their deity to protect someone in their charge, attempting a check (religion, dc:25) check. If it succeeds, a divine Sanctuary spell affects one of the abbot's allies within 60 feet. The Will DC is 17.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "I4lDIA8ba2TnxW4D",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "i8T4igNA9npQP3pv",
          "name": "Griffon Cane (Functions as a Staff)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "upzjwQ96cZG0Xlmx",
          "sourceId": "upzjwQ96cZG0Xlmx",
          "name": "Religious Symbol (Silver)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "iNbmGDctA5YSsh5W",
          "name": "Religious Symbol of Abadar",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "E9emwnqa1otk3g3e",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 253,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Lie",
          "sourceId": "ewwCglB7XOPLUz72",
          "name": "Lie",
          "type": "action"
        },
        "owner": {
          "sourceId": "rXBBwXME5oMIAc24",
          "name": "True Faith",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 215,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sanctuary",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sanctuary",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sanctuary",
          "sourceId": "8xRzLhwGL7Dgy3EZ",
          "name": "Sanctuary",
          "type": "spell"
        },
        "owner": {
          "sourceId": "7C5XmGhBV3HXbug9",
          "name": "Divine Protection",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:prisoner",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "oIHp4amcx8ecZRwM",
      "slug": "prisoner",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a87b60d237eb050692f17c2ea609ea4bff5a0237517f4be79c3d8883c320ee46",
    "translatableHash": "sha256:236a43f324d279804a8a06f18fa38c8667362284ab449b54c8914b72294831e6",
    "data": {
      "schemaVersion": 1,
      "name": "Prisoner",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Most who end up in a jail, dungeon, or prison are just biding their time until their imprisonment ends, trying to find ways to make it through interminable days of boredom and deprivation. Some, however, may use their time on the inside to strengthen their criminal connections. Using force and intimidation to gain status among other prisoners, they create makeshift weapons to take down their enemies and give them an edge if escape becomes possible. Even for prisoners who don't become involved in the world of prison politics, learning to stand up for themselves and projecting an air of toughness can become essential for survival in a place where people have little left to lose.\nUnfortunately, every society has people living on its fringes. While good communities work to grant aid and respite to their downtrodden, sometimes-due to economic downturn, famine, or war-the ranks of the less fortunate exceed the community's capacity to support them. In heartless neutral and evil societies, poverty is seen as an inevitability that can never be truly eradicated, or even worse, as a tool to be manipulated for political gain.",
      "armorClass": 16,
      "hitPoints": 17,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 6,
        "intimidation": 3,
        "stealth": 7,
        "thievery": 7
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
          "id": "C7PdppuFM1J5AfZc",
          "name": "Shiv",
          "bonus": 7,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "xI5EGbyi2XbV0z6e",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HnDaKsWEBEBi5eJX",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The prisoner does an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "wiKF84BoxIlLdggN",
          "name": "Surprise Attack",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to the prisoner.",
          "traits": []
        },
        {
          "id": "qfzrHQkkZcEFrhFT",
          "name": "You're Next",
          "kind": "reaction",
          "description": "Trigger The prisoner reduces a creature to 0 hit points.\nEffect The prisoner attempts an Intimidation check with a +2 circumstance bonus to [[/act demoralize options=youre-next]] a single creature it can see and that can see them.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "0hxn526bxpU9psxJ",
          "name": "Shiv",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "HnDaKsWEBEBi5eJX",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 54,
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
          "sourceId": "HnDaKsWEBEBi5eJX",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 70,
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
          "sourceId": "wiKF84BoxIlLdggN",
          "name": "Surprise Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/system/rules/0/uuid",
        "sourceIndex": 0,
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
          "sourceId": "wiKF84BoxIlLdggN",
          "name": "Surprise Attack",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dancer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "r7nprCpuqhEulxjD",
      "slug": "dancer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5d712a8798003291048ffe285ddb41ff37f8d78d39e37a1703bfb2dc62508cee",
    "translatableHash": "sha256:982aa2862fa2955d34bdd02447ef33ad8d0ccd4a96db8f38d7cd33b955a1cfc7",
    "data": {
      "schemaVersion": 1,
      "name": "Dancer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Dance can be used to tell stories, share emotions, provide entertainment, and display a performer's athletic ability.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 8,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7,
        "diplomacy": 6,
        "performance": 13,
        "stealth": 6
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
          "id": "dCBZN8wCmO7ipEHO",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "aAgpROGXTToyiZfx",
          "name": "Foot",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "R5pKOSIyZ8tVn26G",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "HaP1YXjzOuFTaEQy",
          "name": "Dance Specialist",
          "kind": "passive",
          "description": "For encounters involving contests of dancing, the dancer is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "kotwyraYf9vVKqEY",
          "name": "Fascinating Dance",
          "kind": "action",
          "description": "Frequency once per round\nEffect The dancer Strides up to their Speed. Once during this movement, when the dancer is adjacent to a creature, the dancer can attempt to mesmerize that creature, who attempts a check (will, dc:17, options:inflicts:fascinated) save. On a failure, that creature is Fascinated with the dancer until the end of its next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "6f2BYZjHROeKmuNl",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "uBrl3zYakAsOXqbM",
          "name": "Jewelry and Clothes",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 339,
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
          "sourceId": "kotwyraYf9vVKqEY",
          "name": "Fascinating Dance",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:grave-robber",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "sYcMzx8RcgaIxyLu",
      "slug": "grave-robber",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e833630a80c087c39b9838db0fa2e121edff2aed81d365b29980fafa8b03c26a",
    "translatableHash": "sha256:14bc41f29385b044888c83da6fa1f755dc055b6344471f5a4a95a31181ab9848",
    "data": {
      "schemaVersion": 1,
      "name": "Grave Robber",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "holy",
        "human",
        "humanoid"
      ],
      "description": "Many cultures have a tradition of burying their dead with a selection of the deceased's most precious possessions. Such valuables can be easy pickings for those with no respect for—or fear of—the dead.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 2,
        "int": 3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "crafting": 6,
        "deception": 2,
        "intimidation": 2,
        "society": 6,
        "stealth": 5
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
          "id": "TBsidL8UR1sHqz7N",
          "name": "Shovel",
          "bonus": 6,
          "damage": "1d6+1 bludgeoning",
          "traits": []
        },
        {
          "id": "otvKtL4jZwXhAPCm",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "SgtjGpk98Nh2nJBT",
          "name": "Embalming Flask",
          "bonus": 7,
          "damage": "1 acid; 1d4 acid",
          "traits": [
            "alchemical",
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "sYkKuB3z4lzIeR9O",
          "name": "Alchemical Embalming",
          "kind": "passive",
          "description": "The grave robber carries alchemical vials of specially prepared embalming fluid meant to hinder pursuit by anyone who interrupts their grave-robbing. A creature hit by a grave robber's embalming flask takes a –10-foot penalty to all its Speeds for 1 round. On a critical hit from an embalming flask, the target is also Clumsy 1 for 1 minute.\nEffect: Alchemical Embalming",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "6HFhSXAXGd9TV4GQ",
          "name": "Shovel",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.z9T4c1hXwOotsMCp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.z9T4c1hXwOotsMCp",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "z9T4c1hXwOotsMCp",
          "sourceId": "z9T4c1hXwOotsMCp",
          "name": "Holy Water",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "BVc7ObkPjpCGI4jQ",
          "name": "Holy Water",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 322,
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
          "sourceId": "sYkKuB3z4lzIeR9O",
          "name": "Alchemical Embalming",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 403,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Alchemical Embalming",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Alchemical Embalming",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Alchemical Embalming",
          "sourceId": "HVGl2hSrfqHE4OZ2",
          "name": "Effect: Alchemical Embalming",
          "type": "effect"
        },
        "owner": {
          "sourceId": "sYkKuB3z4lzIeR9O",
          "name": "Alchemical Embalming",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:combat-engineer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "szslWxJGvht4aM3j",
      "slug": "combat-engineer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8ac1554385d5176f5878e07d971b618a1baef5a38528c27bb331874ba0bb767e",
    "translatableHash": "sha256:961aad87fa57e872470f15ea2e57ceb2822c47654fe92fe8dd5e32834aa2a6e7",
    "data": {
      "schemaVersion": 1,
      "name": "Combat Engineer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Be it a bridge to get a battalion across a river, watchtowers to pierce the fog of war, or fortifications to secure territory, armies have always needed those who can build. The combat engineer is a soldier specializing in these sorts of constructions.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 5,
        "will": 7
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 8,
        "crafting": 13
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
          "id": "lr7uLmyBcnKtOmV6",
          "name": "Entrenching Tool",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "jLU8WcFwh0AZp3ZF",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "khqPUEBn56Z38tlw",
          "name": "Heavy Crossbow",
          "bonus": 7,
          "damage": "1d10 piercing",
          "traits": [
            "reload-2"
          ]
        }
      ],
      "actions": [
        {
          "id": "WXobLcqaScyPRT0G",
          "name": "Logistics Specialist",
          "kind": "passive",
          "description": "In situations involving battlefield engineering or logistics, the combat engineer is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "6BwdBhe1pPRRxFrF",
          "name": "Fortify",
          "kind": "passive",
          "description": "The combat engineer digs trenches and constructs earthen barricades at a rate of one 5-foot cube per hour. A combat engineer can instead direct the work of four allied Small or larger creatures to quadruple this rate.",
          "traits": [
            "concentrate",
            "exploration",
            "manipulate"
          ]
        },
        {
          "id": "NczFHVe7cMLgCS3g",
          "name": "Improvised Barricade",
          "kind": "action",
          "description": "Requirements The combat engineer has at least 5 Bulk of loose items or material within reach\nEffect The combat engineer slaps together a 5-foot high barrier in an adjacent square. The barrier is an object with 10 Hit Points, 5 Hardness, AC 10, and it provides standard cover. After 1 minute, the barrier collapses under its own weight.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.6I4YJAQUbTAqbpsI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "6I4YJAQUbTAqbpsI",
          "sourceId": "6I4YJAQUbTAqbpsI",
          "name": "Pick",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "ssLSXvHylRFe4UOR",
          "name": "Entrenching Tool (Functions as a Pick)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.giO4LwIKGzJZoaxa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.giO4LwIKGzJZoaxa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "giO4LwIKGzJZoaxa",
          "sourceId": "giO4LwIKGzJZoaxa",
          "name": "Heavy Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "kM4pgDc8y98gnRhP",
          "name": "Heavy Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "Mf5CSAukiUxFQS5U",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "F0zE5ZJAoL1ehbFA",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tripkee-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "XfK0MATlH2WDNhAA",
      "slug": "tripkee-scout",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:99a8eebaa600da3866e4eef02eedbdc92e79d77ce40afeb8d9d4dcc9340b6453",
    "translatableHash": "sha256:b1cf0a3144ce7c8974a3ab350ed7a7c0bb0a66e271e177f71085c096417b6c7b",
    "data": {
      "schemaVersion": 1,
      "name": "Tripkee Scout",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "tripkee"
      ],
      "description": "Tripkee scouts are the first line of defense for their hidden treetop villages. They are often scattered throughout the forests in small groups to keep an eye out for anything new or dangerous that could pose a threat.\nTraditionally making their homes in the treetops of tropical jungles and forests, these frog-like humanoids are often seen as resourceful and cautious, preferring to live and hunt hidden in the branches of tall trees.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "nature": 6,
        "stealth": 7,
        "survival": 6
      },
      "languages": [
        "tripkee",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "uWQEoEtw0H2vDjiP",
          "name": "Dart",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "AAIfRUXvoDpK5QH1",
          "name": "Hand Adze",
          "bonus": 9,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "sweep"
          ]
        },
        {
          "id": "x89TKagHKbXu6WGd",
          "name": "Hand Adze",
          "bonus": 9,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "XB6h2OGVuCZwVcW8",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "olV47KDLib3JNLTG",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The scout ignores difficult terrain caused by plants, such as bushes, vines, and undergrowth.",
          "traits": []
        },
        {
          "id": "ZrAQkE7N4BH2nY8v",
          "name": "Hurl Net",
          "kind": "action",
          "description": "Requirements The scout is wielding a net in two hands\nEffect The scout makes a ranged Strike (with a check (hurl-net, against:ac) modifier) against a Medium or smaller creature within 20 feet. On a hit, the target is Off-Guard and takes a –10-foot circumstance penalty to its Speeds. On a critical hit, the creature is Restrained instead. The DC to [[/act escape dc=16]] the net is 16. A creature adjacent to the target can Interact with the net to remove it.\nEffect: Hurl Net",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Tt4Qw64fwrxhr5gT",
          "sourceId": "Tt4Qw64fwrxhr5gT",
          "name": "Dart",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "aIK07v9hQtV3e5O0",
          "name": "Dart",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MccX4AlmqYDjAN2J",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MccX4AlmqYDjAN2J",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MccX4AlmqYDjAN2J",
          "sourceId": "MccX4AlmqYDjAN2J",
          "name": "Hand Adze",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "AVXdmkbQSrKIZEoe",
          "name": "Hand Adze",
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
          "sourceId": "7QFXXVYpYHgBUSeM",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "T8EopYZLT137CsdW",
          "sourceId": "T8EopYZLT137CsdW",
          "name": "Net",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Hj9b9HY2zg0zOtnk",
          "name": "Net",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 110,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Grapple",
          "sourceId": "PMbdMWc2QroouFGD",
          "name": "Grapple",
          "type": "action"
        },
        "owner": {
          "sourceId": "Hj9b9HY2zg0zOtnk",
          "name": "Net",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 269,
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
          "sourceId": "ZrAQkE7N4BH2nY8v",
          "name": "Hurl Net",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 414,
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
          "sourceId": "ZrAQkE7N4BH2nY8v",
          "name": "Hurl Net",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 605,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hurl Net",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hurl Net",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Hurl Net",
          "sourceId": "q2D1QBalqBQfKzTc",
          "name": "Effect: Hurl Net",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ZrAQkE7N4BH2nY8v",
          "name": "Hurl Net",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:messenger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "z1tLeckmpJuStmlx",
      "slug": "messenger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52f4dfb996114dd5efcafbcad4b3c6e8d07114d169d924569f8aab264385903a",
    "translatableHash": "sha256:6b2bc533fd89312dc6747921fe3ab904dd553b2ef48cfa127b449c8109a0321c",
    "data": {
      "schemaVersion": 1,
      "name": "Messenger",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "When a message, mail, or package needs to be delivered, messengers make deliveries—typically from large towns and cities or to other towns and cities.\nSociety is built upon the backs of laborers.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 5,
        "diplomacy": 6,
        "society": 7,
        "survival": 4
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
          "id": "nuB9xPJTFjqsZfy2",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "Zc7ILTK8qwjEwjr4",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "QkIdiYmsAPL4jFWO",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "uESCChEAVuD0I5ZD",
          "name": "Sling",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "WtsSGtnPgnNQ9zPz",
          "name": "Don't Shoot the Messenger",
          "kind": "passive",
          "description": "Messengers get a +2 circumstance bonus to check (diplomacy, options:dont-shoot-the-messenger) checks to convince another creature not to blame them for any news they deliver.",
          "traits": []
        },
        {
          "id": "5aPn6LRI90ZQew8G",
          "name": "Express Messenger",
          "kind": "passive",
          "description": "Allies traveling with the messenger gain a +5-foot circumstance bonus to travel Speed, to a maximum of the messenger's travel Speed. If they use the Hustle activity, they can Hustle for a minimum of 1 hour instead of the usual amount.",
          "traits": []
        },
        {
          "id": "No7D9FTwDJVHqhho",
          "name": "Road Runner",
          "kind": "passive",
          "description": "Messengers can use Society in place of Survival to [[/act sense-direction skill=society]] when they're on a road.",
          "traits": []
        },
        {
          "id": "axUYB41Gy8pqpyOC",
          "name": "Special Delivery",
          "kind": "action",
          "description": "The messenger Interacts to take an item of light Bulk or less held by a willing ally within reach, Strides, then delivers the item to a willing ally in reach at their new location.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "FUcW9tT727Wu5DPe",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Oe19uNcLqy86SJUP",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "b4XGTxOQ3xAu3jdN",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 152,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Hustle",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Hustle",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Hustle",
          "sourceId": "JuqmIAnkL9hVGai8",
          "name": "Hustle",
          "type": "action"
        },
        "owner": {
          "sourceId": "5aPn6LRI90ZQew8G",
          "name": "Express Messenger",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:pirate",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "55Hb1FTqRGtoGuJt",
      "slug": "pirate",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cb18b852d81719dce4e03bd2184015d995238f1d6b0af7e25e5569a278a96553",
    "translatableHash": "sha256:ffdfaaf0da9d7d67dabc496b2421ac42083360821f1e6d6da595129ad1c4eccf",
    "data": {
      "schemaVersion": 1,
      "name": "Pirate",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These scourges are a threat to anyone who spends time away from land.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 17,
      "hitPoints": 32,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "deception": 6,
        "intimidation": 6
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
          "id": "CmUq3q1BL7VoIvyM",
          "name": "Cutlass",
          "bonus": 10,
          "damage": "1d6+5 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        },
        {
          "id": "Cmu4PgaVIciVRKDC",
          "name": "Dagger",
          "bonus": 11,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "AtMtAwu4qZIQZq8E",
          "name": "Dagger",
          "bonus": 11,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "sqhOZyxg3OPiv7f9",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "86ELyZJGF5f8M7ew",
          "name": "Bravery",
          "kind": "passive",
          "description": "When the pirate rolls a success on a Will save against a fear effect, they get a critical success instead. In addition, any time they gain the Frightened condition, reduce its value by 1.",
          "traits": []
        },
        {
          "id": "Yxn3DgPf75gNQx90",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "WrTvPVOo3UOYpMWC",
          "name": "Boarding Action",
          "kind": "action",
          "description": "The pirate swings on a rope or Strides, moving up to double their Speed. If the pirate boarded or disembarked a boat during this movement, they can make a melee Strike at the end of their movement that deals one extra damage die on a hit.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "MW2HziWk52XbjMte",
          "name": "Cutlass (Functions as a Scimitar)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "m1wLRwK4NCvFzdlr",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "7wm1t4vqw5gNlkfm",
          "name": "Padded Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 146,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
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
          "sourceId": "86ELyZJGF5f8M7ew",
          "name": "Bravery",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
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
          "sourceId": "Yxn3DgPf75gNQx90",
          "name": "Reactive Strike",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:acrobat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "5KojtpJA0T5xoum4",
      "slug": "acrobat",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6dfb71557e0904bdf2e94d8d739f54d641dd2336be806bcde7b616d2161dd5fb",
    "translatableHash": "sha256:07651f45f374139cbc4729a639a10111cacc0645380d78f112681da2c74277ea",
    "data": {
      "schemaVersion": 1,
      "name": "Acrobat",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Acrobats perform feats of agility, balance, and strength.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 8,
        "deception": 5,
        "performance": 9,
        "stealth": 8
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
          "id": "XxRBSksVZSF2n79w",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "4VbQq13CfCCwqfYt",
          "name": "Foot",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "lKG5nFZzi5NYvRU3",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "BMOGfqX1pJGdQtc4",
          "name": "Acrobatic Specialist",
          "kind": "passive",
          "description": "For encounters involving contests of acrobatics and similar activities, the acrobat is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "F0Yrpyr0NczIzhGY",
          "name": "Steady Balance",
          "kind": "passive",
          "description": "When the acrobat rolls a success on an Acrobatics check, they get a critical success instead.\nThey aren't Off-Guard when attempting to Balance and can attempt an Acrobatics check instead of a Reflex save to Grab an Edge.",
          "traits": []
        },
        {
          "id": "GICVztYSUDv0IIkz",
          "name": "Cat Fall",
          "kind": "passive",
          "description": "The acrobat treats all falls as 25 feet shorter.",
          "traits": []
        },
        {
          "id": "80iH1mCHZeW5rWYE",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The acrobat is targeted with a melee or ranged attack by an attacker they can see\nEffect The acrobat gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "jbBEFIXHqLEFkuxj",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The acrobat deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "hoNnL8BsPzPuGERZ",
          "name": "Swinging Strike",
          "kind": "action",
          "description": "The acrobat swings on a rope or trapeze, moving up to double their Speed. At any point during the swing, they can make a melee Strike.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "joHay3nYO77B5Fs9",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.9UJbMaglf35GVzaZ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.9UJbMaglf35GVzaZ",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "9UJbMaglf35GVzaZ",
          "sourceId": "9UJbMaglf35GVzaZ",
          "name": "Climbing Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "vRJZ6YlIS3iK4Mmv",
          "name": "Climbing Kit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "jbBEFIXHqLEFkuxj",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 54,
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
          "sourceId": "jbBEFIXHqLEFkuxj",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "fyYnQf1NAx9fWFaS",
          "sourceId": "fyYnQf1NAx9fWFaS",
          "name": "Rope",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "emh48rBpCvPx0C0m",
          "name": "Rope",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 116,
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
          "sourceId": "F0Yrpyr0NczIzhGY",
          "name": "Steady Balance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 188,
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
          "sourceId": "F0Yrpyr0NczIzhGY",
          "name": "Steady Balance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 300,
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
          "sourceId": "F0Yrpyr0NczIzhGY",
          "name": "Steady Balance",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:poacher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "6CRUvM2p9csP735v",
      "slug": "poacher",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0cad777f69cf74cc5d5ef769e64c847340b75e345a138e32748eec680c541f5a",
    "translatableHash": "sha256:7f3083e8ab12daa02b6a5013b99b691af6d308aebc02e7477303a788e05c59ba",
    "data": {
      "schemaVersion": 1,
      "name": "Poacher",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Rules against hunting may insulate the private reserves of nobles or guard the viability of animal populations in shared forests during specific seasons. Poachers violate those laws—sometimes out of greed, sometimes out of desperation, and sometimes for sport.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "crafting": 4,
        "deception": 4,
        "nature": 7,
        "stealth": 8,
        "survival": 7
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
          "id": "yM3snMjrKoj8gXaq",
          "name": "Light Mace",
          "bonus": 11,
          "damage": "1d4+4 bludgeoning",
          "traits": []
        },
        {
          "id": "q99WGiQ0UEhR3hAp",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "8fAOSxgE0FgWpvsE",
          "name": "Composite Shortbow",
          "bonus": 11,
          "damage": "1d6+3 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "3J9zF5LrBXqEj7Um",
          "name": "Expert Subsistence",
          "kind": "passive",
          "description": "While using Survival to [[/act subsist statistic=survival]], if the poacher rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and four additional creatures, and on a critical success, they can take care of twice as many creatures as on a success.",
          "traits": []
        },
        {
          "id": "SjfWr7t0YSZQdt8c",
          "name": "Snare Crafting",
          "kind": "passive",
          "description": "The poacher knows how to craft the following snares:\n• Alarm Snare\n• Hampering Snare\n• Marking Snare\n• Signaling Snare\nThe poacher can create up to four snares each day without paying for the materials, using 3 Interact actions to deploy a snare. The snare becomes inert after 24 hours.",
          "traits": []
        },
        {
          "id": "rTeH6wIQdfQpy5CH",
          "name": "On the Hunt",
          "kind": "action",
          "description": "The poacher designates one creature they're observing or tracking as their prey. The poacher gains a +2 circumstance bonus to Perception checks to [[/act seek]] the prey and to Survival checks to [[/act track]] the prey. The first time the poacher hits the designated prey in a round, they deal an additional 1d4 precision damage. These effects last until the poacher uses On the Hunt again.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.e4NwsnPnpQKbDZ9F",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.e4NwsnPnpQKbDZ9F",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "e4NwsnPnpQKbDZ9F",
          "sourceId": "e4NwsnPnpQKbDZ9F",
          "name": "Composite Shortbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Pacx6RYqrt0OOrIe",
          "name": "Composite Shortbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.x1TOpwH755Ami5bC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.x1TOpwH755Ami5bC",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "x1TOpwH755Ami5bC",
          "sourceId": "x1TOpwH755Ami5bC",
          "name": "Light Mace",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "JMQ4wgzf4ZoD8kp3",
          "name": "Light Mace",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "mf7WGLlP4PNbRBBP",
          "name": "Padded Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "tdkEeVljtJ9yAjzl",
          "name": "Snare Toolkit (Functions as Artisan's Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "cCVAfiFajy9hPhAC",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 67,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Alarm Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Alarm Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Alarm Snare",
          "sourceId": "AFX1V0Go9DqPWBlN",
          "name": "Alarm Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "SjfWr7t0YSZQdt8c",
          "name": "Snare Crafting",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 129,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Hampering Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Hampering Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Hampering Snare",
          "sourceId": "Km4lSOsyrip5q6iD",
          "name": "Hampering Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "SjfWr7t0YSZQdt8c",
          "name": "Snare Crafting",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 195,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Marking Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Marking Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Marking Snare",
          "sourceId": "oplQpQSTyTvHDDtq",
          "name": "Marking Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "SjfWr7t0YSZQdt8c",
          "name": "Snare Crafting",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 259,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Signaling Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Signaling Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Signaling Snare",
          "sourceId": "XcD8p1o71tPohZWT",
          "name": "Signaling Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "SjfWr7t0YSZQdt8c",
          "name": "Snare Crafting",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:infantry-soldier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "8ZkfzgUmN06j4jIu",
      "slug": "infantry-soldier",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b7a7e30895e762bc0cf37e2984e0c2b8c881d37fd981e0db34c11c09a2d7282c",
    "translatableHash": "sha256:5053ae70089a5f3ad96d9b84906f1fbcee09b8599dbc6b0a6f961b608d7e8806",
    "data": {
      "schemaVersion": 1,
      "name": "Infantry Soldier",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Though low on the military hierarchy, infantry are still highly disciplined warriors, challenging for any ordinary person to face in combat.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 18,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 10,
        "intimidation": 7
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
          "id": "WHitVgKt7gmUjjtV",
          "name": "Shortsword",
          "bonus": 10,
          "damage": "1d6+6 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "JWToYKLrBrxyqIee",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "DqrzxTMw3ai7vzLf",
          "name": "Crossbow",
          "bonus": 6,
          "damage": "1d8+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "WXmakPDUb0Mye3m0",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "kKps836N0VA9ld3S",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "sjsIaUVNGvNNXmPa",
          "name": "Guardian Shield",
          "kind": "action",
          "description": "The infantry soldier Raises their Shield, but grants the benefit to an adjacent ally and can Shield Block for that ally. Guardian Shield ends early if at any point the ally is no longer adjacent.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Hhu2PjOqwyGDP0pz",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "7tKkkF8eZ4iCLJtp",
          "sourceId": "7tKkkF8eZ4iCLJtp",
          "name": "Shortsword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "3cJg9vZ2XrVsfSd0",
          "name": "Shortsword",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ezVp13Uw8cWW08Da",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ezVp13Uw8cWW08Da",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ezVp13Uw8cWW08Da",
          "sourceId": "ezVp13Uw8cWW08Da",
          "name": "Wooden Shield",
          "type": "shield"
        },
        "owner": {
          "sourceId": "24SVCFRiw2TzBXhL",
          "name": "Wooden Shield",
          "type": "shield"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Kf4eJEXnFPuAsseP",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Kf4eJEXnFPuAsseP",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Kf4eJEXnFPuAsseP",
          "sourceId": "Kf4eJEXnFPuAsseP",
          "name": "Chain Mail",
          "type": "armor"
        },
        "owner": {
          "sourceId": "I7yHo3x5S4k253kQ",
          "name": "Chain Mail",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "dDPa6XmGhvlcxvNz",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
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
          "sourceId": "WXmakPDUb0Mye3m0",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.m4HQ2o5aPxjXf2kY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.m4HQ2o5aPxjXf2kY",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "m4HQ2o5aPxjXf2kY",
          "sourceId": "m4HQ2o5aPxjXf2kY",
          "name": "Shield Block",
          "type": "action"
        },
        "owner": {
          "sourceId": "kKps836N0VA9ld3S",
          "name": "Shield Block",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:courtesan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "B9NoqcAASkg2Gjz3",
      "slug": "courtesan",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2b7f2d5386918c8b73f9845b8a91a9addfb8425024eae89b48b0ed7e320e36dd",
    "translatableHash": "sha256:bf7f876ebcef49bf2ac5ccf929b45732ee75e2ccc7edcc34797a6648b2591ccc",
    "data": {
      "schemaVersion": 1,
      "name": "Courtesan",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Courtesans are high-class entertainers and professional companions, paid in favors and privileges for the honor of their company. These trendsetting socialites levy their clout to consort with those above their station, maneuvering connections to build exclusive clientele and climb the social ladder. A courtesan's discretion and mobility among the different ranks of society make their friendship well worth the price.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 17,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 11
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "deception": 12,
        "diplomacy": 12,
        "performance": 13,
        "society": 10
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
          "id": "VKr5cSnf4EZpKNfy",
          "name": "Sword Cane",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": [
            "agile",
            "concealable",
            "finesse"
          ]
        },
        {
          "id": "vUlbtT5u9HNcVd7F",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "mAQx5dcnb9mAUQZZ",
          "name": "+4 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "0GwhKgou0z1mcsMS",
          "name": "Group Impression",
          "kind": "passive",
          "description": "When the courtesan Makes an Impression, they can compare their Diplomacy check result to the Will DCs of up to four targets instead of one.",
          "traits": []
        },
        {
          "id": "k7O4s2zAui0k5kCO",
          "name": "Social Specialist",
          "kind": "passive",
          "description": "When entertaining or socializing, the courtesan is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "NNThYHL1VGa0LmYY",
          "name": "Beguiling Presence",
          "kind": "passive",
          "description": "10 feet.\nCreatures in the area that can observe the courtesan take a –2 status penalty on their Will DC against the courtesan's attempts to make a [[/act request]] of them.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "Mr0ZRyRyKsJWxEp8",
          "name": "Cutting Remarks",
          "kind": "action",
          "description": "The courtesan levies insults or backhanded compliments, attempting to [[/act demoralize skill=performance]] a creature using their Performance modifier instead of Intimidation.",
          "traits": []
        },
        {
          "id": "sDfYRm7EzyjZxKhr",
          "name": "Words of Encouragement",
          "kind": "action",
          "description": "The courtesan praises the performance of one ally who can hear them. The targeted ally ignores any circumstance and status penalties they have until the start of the courtesan's next turn. The target then becomes temporarily immune to this ability for 10 minutes.\nEffect: Words of Encouragement",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.VitLIpdIAmKlGb7i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.VitLIpdIAmKlGb7i",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "VitLIpdIAmKlGb7i",
          "sourceId": "VitLIpdIAmKlGb7i",
          "name": "Sword Cane",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "cs5Mt6nyq7ec0Coj",
          "name": "Sword Cane",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MPv5Yx4w7scZGj2Y",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "UNMisLBQd7GXZQJn",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 274,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Words of Encouragement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Words of Encouragement",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Words of Encouragement",
          "sourceId": "GPcmgpyTtPoXu5N1",
          "name": "Effect: Words of Encouragement",
          "type": "effect"
        },
        "owner": {
          "sourceId": "sDfYRm7EzyjZxKhr",
          "name": "Words of Encouragement",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
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
          "sourceId": "HPTYsRvU9Gb9SwAK",
          "name": "Clothing (Fine)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 22,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
        "label": "Makes an Impression",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Make an Impression",
          "sourceId": "OX4fy22hQgUHDr0q",
          "name": "Make an Impression",
          "type": "action"
        },
        "owner": {
          "sourceId": "0GwhKgou0z1mcsMS",
          "name": "Group Impression",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:coven-aspirant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "f6NqtcB94r3S7LCn",
      "slug": "coven-aspirant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fcd4649c7772aa066f95c920cf680400c71e2c98a81df65d35fe655a9283f189",
    "translatableHash": "sha256:4198dabea5ca1ea16ba80b9e29dae9633e5d2f1d0bfd822d358b008e088a3ea8",
    "data": {
      "schemaVersion": 1,
      "name": "Coven Aspirant",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Only the foolish would bring themselves to the attention of hags, but some aspirants strive to join a hag coven out of a desire for power or companionship.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 15,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 1,
        "int": 4,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "deception": 7,
        "intimidation": 5,
        "medicine": 5,
        "occultism": 8,
        "stealth": 7,
        "survival": 5
      },
      "languages": [
        "common",
        "fey",
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "rjrADYSPUSK26Qn3",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "5zkEaeZ21ukoxcyg",
          "name": "Dart",
          "bonus": 7,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "MMCYKd69dsTEEPkN",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "CUd7yJTScP3CfZ6K",
          "name": "Shared Confidence",
          "kind": "passive",
          "description": "When a coven aspirant is within 30-foot emanation of at least two allies, they and their allies gain a +1 status bonus to Will saves.\nEffect: Shared Confidence",
          "traits": []
        },
        {
          "id": "QlkPRh3XNHPzuE3A",
          "name": "Forge Pact",
          "kind": "action",
          "description": "The coven aspirant forms a temporary coven with two or more willing creatures within 30 feet, all of whom must be able to cast spells.\nMembers of the temporary coven can cast Charm, Entangling Flora, and Illusory Disguise as 2nd-rank occult innate spells at will, using DC 17 or their spellcasting DC, whichever is higher.\nThe coven is dissolved after 3 rounds or when all but one member is dead, whichever comes first. A creature can be a member of only one temporary coven at a time and can join a temporary coven no more than once per 24 hours.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental",
            "occult"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "GheHph9mssuH3bxq",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "XHZi9XxOG34Howpl",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "YAFs5Pt3P6XyfPkV",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "VirHAiZwWloWl6l4",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "r0E3FBqokfOkeKHg",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "dnp3CdMwS2qeFi0e",
              "name": "Ill Omen",
              "rank": 1
            },
            {
              "id": "HIZPxXmikUpkq4fL",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "bYy4UUZOu6ex0y6B",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "RIHFg8lTeCaqQGx3",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        },
        {
          "id": "M8eR05NDpox0eSDq",
          "name": "Witch Hex Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "rRUtd92QpcHMXULq",
              "name": "Needle of Vengeance",
              "rank": 1
            },
            {
              "id": "fACg3WlnRfXIUh6Z",
              "name": "Shroud of Night",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.cE7PRAX8Up7fmYef",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.cE7PRAX8Up7fmYef",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "cE7PRAX8Up7fmYef",
          "sourceId": "cE7PRAX8Up7fmYef",
          "name": "Shroud of Night",
          "type": "spell"
        },
        "owner": {
          "sourceId": "fACg3WlnRfXIUh6Z",
          "name": "Shroud of Night",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 426,
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
          "sourceId": "fACg3WlnRfXIUh6Z",
          "name": "Shroud of Night",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.mAMEt4FFbdqoRnkN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.mAMEt4FFbdqoRnkN",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "mAMEt4FFbdqoRnkN",
          "sourceId": "mAMEt4FFbdqoRnkN",
          "name": "Void Warp",
          "type": "spell"
        },
        "owner": {
          "sourceId": "RIHFg8lTeCaqQGx3",
          "name": "Void Warp",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 150,
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
          "sourceId": "RIHFg8lTeCaqQGx3",
          "name": "Void Warp",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
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
          "sourceId": "06eBnCT1mpwL5KVO",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Tt4Qw64fwrxhr5gT",
          "sourceId": "Tt4Qw64fwrxhr5gT",
          "name": "Dart",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "CI7lzYFlBUB9ho0E",
          "name": "Dart",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/18/system/description/value",
        "sourceIndex": 168,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Shared Confidence",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Shared Confidence",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Shared Confidence",
          "sourceId": "uKJRRrlReO0CceVc",
          "name": "Effect: Shared Confidence",
          "type": "effect"
        },
        "owner": {
          "sourceId": "CUd7yJTScP3CfZ6K",
          "name": "Shared Confidence",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/19/system/description/value",
        "sourceIndex": 185,
        "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Charm",
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QlkPRh3XNHPzuE3A",
          "name": "Forge Pact",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/19/system/description/value",
        "sourceIndex": 231,
        "uuid": "Compendium.pf2e.spells-srd.Item.Entangling Flora",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Entangling Flora",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Entangling Flora",
          "sourceId": "J6vNvrUT3b1hx2iA",
          "name": "Entangling Flora",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QlkPRh3XNHPzuE3A",
          "name": "Forge Pact",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/19/system/description/value",
        "sourceIndex": 292,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Disguise",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QlkPRh3XNHPzuE3A",
          "name": "Forge Pact",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XHZi9XxOG34Howpl",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "XHZi9XxOG34Howpl",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4koZzrnMXhhosn0D",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4koZzrnMXhhosn0D",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4koZzrnMXhhosn0D",
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        },
        "owner": {
          "sourceId": "YAFs5Pt3P6XyfPkV",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 182,
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
          "sourceId": "YAFs5Pt3P6XyfPkV",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 297,
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
          "sourceId": "YAFs5Pt3P6XyfPkV",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 421,
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
          "sourceId": "YAFs5Pt3P6XyfPkV",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 493,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YAFs5Pt3P6XyfPkV",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "VirHAiZwWloWl6l4",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "VirHAiZwWloWl6l4",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "VirHAiZwWloWl6l4",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.k34hDOfIIMAxNL4a",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.k34hDOfIIMAxNL4a",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "k34hDOfIIMAxNL4a",
          "sourceId": "k34hDOfIIMAxNL4a",
          "name": "Grim Tendrils",
          "type": "spell"
        },
        "owner": {
          "sourceId": "r0E3FBqokfOkeKHg",
          "name": "Grim Tendrils",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.6ZIKB0151LUR19Rw",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "6ZIKB0151LUR19Rw",
          "sourceId": "6ZIKB0151LUR19Rw",
          "name": "Ill Omen",
          "type": "spell"
        },
        "owner": {
          "sourceId": "dnp3CdMwS2qeFi0e",
          "name": "Ill Omen",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 513,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ill Omen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ill Omen",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Ill Omen",
          "sourceId": "AmsVO5Q6078mEvNt",
          "name": "Spell Effect: Ill Omen",
          "type": "effect"
        },
        "owner": {
          "sourceId": "dnp3CdMwS2qeFi0e",
          "name": "Ill Omen",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
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
          "sourceId": "HIZPxXmikUpkq4fL",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
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
          "sourceId": "HIZPxXmikUpkq4fL",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.aEitTTb9PnOyidRf",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.aEitTTb9PnOyidRf",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "aEitTTb9PnOyidRf",
          "sourceId": "aEitTTb9PnOyidRf",
          "name": "Needle of Vengeance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rRUtd92QpcHMXULq",
          "name": "Needle of Vengeance",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Qw3fnUlaUbnn7ipC",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bYy4UUZOu6ex0y6B",
          "name": "Prestidigitation",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bandit",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "FBq4bqtKUBpJUCMU",
      "slug": "bandit",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:951ab02cb7cd9de54bbe668f2c6e70fb98d629f6c3ab921a0aff3f713ea13d26",
    "translatableHash": "sha256:a0ca42bea2fd206ecbb5b11c6fd157f2b7ecf6061c1aa07831c3a25940873922",
    "data": {
      "schemaVersion": 1,
      "name": "Bandit",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Bandits waylay travelers and plunder their valuables before disappearing back to their wilderness hideouts. Many bandits seek only to steal and release their victims alive, though a few prefer to leave no witnesses.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 6,
        "deception": 5,
        "intimidation": 6,
        "stealth": 8,
        "survival": 6,
        "thievery": 8
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
          "id": "HCyqbOwAesUJxAac",
          "name": "Machete",
          "bonus": 9,
          "damage": "1d6+5 slashing",
          "traits": [
            "deadly-d8",
            "sweep"
          ]
        },
        {
          "id": "WOzz2GaTFiLGMKlV",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "8qgPSrq5yQ1u9viJ",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "R0wrxXewuUSa6TI5",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "WFByucZQz0Q9slLk",
          "name": "Sling",
          "bonus": 9,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "IEibCXh97z4dVqH9",
          "name": "Bandit's Ambush",
          "kind": "passive",
          "description": "When the bandit rolls initiative using Deception or Stealth, they can attempt to [[/act demoralize]] one creature as a free action.",
          "traits": []
        },
        {
          "id": "VKwW4ylsv5KU7Nhr",
          "name": "Dread Striker",
          "kind": "passive",
          "description": "Frightened creatures are Off-Guard to the bandit.",
          "traits": []
        },
        {
          "id": "y9nL7kklEoVqLV06",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The bandit ignores any difficult terrain caused by plants, such as bushes, vines, and undergrowth.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "2JOmjVrX6zMi3jhW",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.O7IZBvVoe7W2XnBa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.O7IZBvVoe7W2XnBa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "O7IZBvVoe7W2XnBa",
          "sourceId": "O7IZBvVoe7W2XnBa",
          "name": "Machete",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "UIXlx0aROWfhPtws",
          "name": "Machete",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 3,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
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
          "sourceId": "VKwW4ylsv5KU7Nhr",
          "name": "Dread Striker",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 71,
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
          "sourceId": "VKwW4ylsv5KU7Nhr",
          "name": "Dread Striker",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/system/rules/0/uuid",
        "sourceIndex": 0,
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
          "sourceId": "VKwW4ylsv5KU7Nhr",
          "name": "Dread Striker",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
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
          "sourceId": "s67Nnro2zsvUm1Io",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "IXm05NQf7mWBHpuu",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "qJnEVm26X5Flc05Y",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:halfling-head-chef",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fDUocyyYWJU1grxV",
      "slug": "halfling-head-chef",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1598d01c99ce365384a8cef17791c48f1393ec91db2a43816f8faae59dc4cb74",
    "translatableHash": "sha256:b15f42ee946959b1a880118b14d9d83c3a15d8a5204bda544fa1799d9d82255e",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Head Chef",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "halfling",
        "humanoid"
      ],
      "description": "Renowned for their culinary expertise, halfling head chefs navigate the complex world of high cuisine with flavorful creations and fiery tempers.\nHalflings thrive on simple pleasures—having a pint at the pub or warming their feet by the hearth.",
      "armorClass": 17,
      "hitPoints": 36,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "intimidation": 7,
        "society": 6
      },
      "languages": [
        "common",
        "halfling"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "B0PGsDJlg6I4orYz",
          "name": "Filcher's Fork",
          "bonus": 9,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6"
          ]
        },
        {
          "id": "Vex3iD34K6VGk0qH",
          "name": "Filcher's Fork",
          "bonus": 9,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6",
            "thrown-20"
          ]
        },
        {
          "id": "bWeYad3JPh5khIsv",
          "name": "Hot Frying Pan",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning; 1d4 fire",
          "traits": [
            "fatal-d8"
          ]
        },
        {
          "id": "VDE2RU74I7RKtdCV",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Q5Nn1TqQrvtrxABX",
          "name": "+15 to Smell and Taste",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "mQVxcuOMHDYi8EBb",
          "name": "Culinary Specialist",
          "kind": "passive",
          "description": "For encounters involving cooking and taste, the head chef is a 7th-level challenge.",
          "traits": []
        },
        {
          "id": "sXFGN98pGRn0UcNY",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of them. Whenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one.",
          "traits": []
        },
        {
          "id": "Q9CnAyy8lWL7Tl4K",
          "name": "Dash of Spice",
          "kind": "reaction",
          "description": "Trigger The head chef is targeted with a melee attack by an adjacent attacker they can see\nEffect The head chef uses Spice Mix against the attacker.",
          "traits": []
        },
        {
          "id": "expbuuRqjktRYCHs",
          "name": "Angry Rant",
          "kind": "action",
          "description": "Frequency once per round\nEffect The chef shouts a flurry of insults and criticisms at either an ally or enemy within 30 feet with the following effects:\nAlly The chef's assistant is shaken by the barrage of criticism but is determined to work faster and harder. The target becomes Quickened for 1 round but is also Frightened 1. They can use the extra action to Interact, Step, or Stride, or as part of an action or activity to prepare, cook, or serve food.\nEnemy The target must succeed a check (will, dc:18) save or take 1d6 mental damage and become frightened 1 (or 2d6 mental damage and Frightened 2 on a critical failure).",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "GGYH8NGCqXyBBMY0",
          "name": "Spice Mix",
          "kind": "action",
          "description": "The head chef throws a mixture of irritating spices into an adjacent creature's eyes, causing the creature to be Dazzled until it Interacts to clear its vision.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.CVTgOpNuRE7hsnc1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.CVTgOpNuRE7hsnc1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "CVTgOpNuRE7hsnc1",
          "sourceId": "CVTgOpNuRE7hsnc1",
          "name": "Filcher's Fork",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "kabCBbI8KIHmYu94",
          "name": "Filcher's Fork",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ssDxSpQTYORoeCFA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ssDxSpQTYORoeCFA",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ssDxSpQTYORoeCFA",
          "sourceId": "ssDxSpQTYORoeCFA",
          "name": "Frying Pan",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "gAd7i8re269vZXee",
          "name": "Frying Pan",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 136,
        "uuid": "Compendium.pf2e.feats-srd.Item.Halfling Weapon Familiarity",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Halfling Weapon Familiarity",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Halfling Weapon Familiarity",
          "sourceId": "2ebcYbg68pCZfAFQ",
          "name": "Halfling Weapon Familiarity",
          "type": "feat"
        },
        "owner": {
          "sourceId": "gAd7i8re269vZXee",
          "name": "Frying Pan",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 61,
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
          "sourceId": "sXFGN98pGRn0UcNY",
          "name": "Keen Eyes",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 121,
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
          "sourceId": "sXFGN98pGRn0UcNY",
          "name": "Keen Eyes",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 174,
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
          "sourceId": "sXFGN98pGRn0UcNY",
          "name": "Keen Eyes",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 311,
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
          "sourceId": "sXFGN98pGRn0UcNY",
          "name": "Keen Eyes",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 354,
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
          "sourceId": "expbuuRqjktRYCHs",
          "name": "Angry Rant",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 431,
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
          "sourceId": "expbuuRqjktRYCHs",
          "name": "Angry Rant",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 805,
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
          "sourceId": "expbuuRqjktRYCHs",
          "name": "Angry Rant",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 116,
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
          "sourceId": "GGYH8NGCqXyBBMY0",
          "name": "Spice Mix",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:archer-sentry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fpwpA2JmpbwREa5a",
      "slug": "archer-sentry",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:08662cef70145234d159a103e48300d14280174b021aee2289e97368959b4cf4",
    "translatableHash": "sha256:547e0f96bfe94637e7cb8242f2abc036f396391a0898a335ead494f1da313a1f",
    "data": {
      "schemaVersion": 1,
      "name": "Archer Sentry",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Archer sentries slightly outrank rank-and-file guards, taking positions on walls, garrisons, and other important locations where they can stay out of the fray and pick off criminals or assailants.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 6,
        "intimidation": 4
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
          "id": "pcW9etyXWo6vgBDy",
          "name": "Shortsword",
          "bonus": 10,
          "damage": "1d6+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "dhxbWDJc6Y48haD6",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "YTWYrskTTtVm4yze",
          "name": "Composite Longbow",
          "bonus": 10,
          "damage": "1d8+3 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "5as8LbntWBRwhdy8",
          "name": "Sentry's Aim",
          "kind": "action",
          "description": "The archer sentry aims carefully and fires. They make a ranged weapon Strike with a +1 circumstance bonus.\nThe Strike ignores the Concealed condition, lesser cover, and standard cover, and reduces greater cover to standard cover.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dUC8Fsa6FZtVikS3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dUC8Fsa6FZtVikS3",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dUC8Fsa6FZtVikS3",
          "sourceId": "dUC8Fsa6FZtVikS3",
          "name": "Composite Longbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "uMg3D2IACjtjrSaV",
          "name": "Composite Longbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "7tKkkF8eZ4iCLJtp",
          "sourceId": "7tKkkF8eZ4iCLJtp",
          "name": "Shortsword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "4ciPdJiHVOrZ64Sp",
          "name": "Shortsword",
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
          "sourceId": "YYn2c9KUIeyBoCd1",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "USHK6XQRwmq17xKh",
          "sourceId": "USHK6XQRwmq17xKh",
          "name": "Signal Whistle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "skalsEenUIAU2c88",
          "name": "Signal Whistle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "qjVmvpUWvSOAgLa1",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 140,
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
          "sourceId": "5as8LbntWBRwhdy8",
          "name": "Sentry's Aim",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 211,
        "uuid": "Compendium.pf2e.other-effects.Item.Effect: Cover",
        "label": "cover",
        "target": {
          "uuid": "Compendium.pf2e.other-effects.Item.Effect: Cover",
          "package": "pf2e",
          "sourcePack": "other-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Cover",
          "sourceId": "I9lfZUiCwMiGogVi",
          "name": "Effect: Cover",
          "type": "effect"
        },
        "owner": {
          "sourceId": "5as8LbntWBRwhdy8",
          "name": "Sentry's Aim",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tripkee-camoufleur",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "FYB0XBshilW7Bszx",
      "slug": "tripkee-camoufleur",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c81fd1d3613b2b5721ae469f1fd216d780dec3a46a08c287c7f752907a5f9eb0",
    "translatableHash": "sha256:c951aaeae108d80eaf9aa665bced31740f1a4d3e3bbb285561f22b2424644b1b",
    "data": {
      "schemaVersion": 1,
      "name": "Tripkee Camoufleur",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "tripkee"
      ],
      "description": "Camoufleurs, masters of natural camouflage, not only disguise their village scouts and warriors before they embark, but also create and maintain the village-wide concealment needed to keep their community hidden and safe. Just as others rely on engineers to build walls, tripkees rely on camoufleurs to protect their homes.\nTraditionally making their homes in the treetops of tropical jungles and forests, these frog-like humanoids are often seen as resourceful and cautious, preferring to live and hunt hidden in the branches of tall trees.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 5,
        "crafting": 7,
        "nature": 7,
        "stealth": 11,
        "survival": 7
      },
      "languages": [
        "common",
        "tripkee"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XLLAIyqTZISmcYaE",
          "name": "Dart",
          "bonus": 10,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "yj7fDnKqFom7tlIm",
          "name": "Hand Adze",
          "bonus": 10,
          "damage": "1d4+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "sweep"
          ]
        },
        {
          "id": "w0fYWCiphDJUQ2fV",
          "name": "Hand Adze",
          "bonus": 10,
          "damage": "1d4+3 slashing",
          "traits": [
            "agile",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "M9eaZFh0jVe7L3AZ",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qYnYOCGzCEzpeQ6o",
          "name": "Camouflage Specialist",
          "kind": "passive",
          "description": "For encounters involving avoiding detection or hiding an object or creature, the camoufleur is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "ouPZx6pI3tVOTE4n",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The camoufleur ignores difficult terrain caused by plants, such as bushes, vines, and undergrowth.",
          "traits": []
        },
        {
          "id": "BIen3779hpIY37tp",
          "name": "Natural Disguise",
          "kind": "passive",
          "description": "The camoufleur can use their Disguise Kit to disguise a creature or object as natural flora. A creature gains a +2 item bonus to Stealth checks while in a natural environment until its next daily preparations or until its disguise is ruined, whichever comes first. An object in a natural environment can be found only by actively searching (using the Search activity while exploring or the Seek action in an encounter) and uses the camoufleur's Stealth DC.\nEffect: Natural Disguise",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Tt4Qw64fwrxhr5gT",
          "sourceId": "Tt4Qw64fwrxhr5gT",
          "name": "Dart",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "kVgXptr7Jhvq7iJ7",
          "name": "Dart",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MccX4AlmqYDjAN2J",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MccX4AlmqYDjAN2J",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MccX4AlmqYDjAN2J",
          "sourceId": "MccX4AlmqYDjAN2J",
          "name": "Hand Adze",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "5c5gGJwHXMPJVmrD",
          "name": "Hand Adze",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 32,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Disguise Kit",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Disguise Kit",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Disguise Kit",
          "sourceId": "Jvp0x2Sc82WVpExT",
          "name": "Disguise Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "BIen3779hpIY37tp",
          "name": "Natural Disguise",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 396,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Search",
          "sourceId": "TiNDYUGlMmxzxBYU",
          "name": "Search",
          "type": "action"
        },
        "owner": {
          "sourceId": "BIen3779hpIY37tp",
          "name": "Natural Disguise",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 475,
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
          "sourceId": "BIen3779hpIY37tp",
          "name": "Natural Disguise",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 589,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Natural Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Natural Disguise",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Natural Disguise",
          "sourceId": "ppYqbg4erAFt8C9W",
          "name": "Effect: Natural Disguise",
          "type": "effect"
        },
        "owner": {
          "sourceId": "BIen3779hpIY37tp",
          "name": "Natural Disguise",
          "type": "action"
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
          "sourceId": "Bk8Qovp95ISnL3iF",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Jvp0x2Sc82WVpExT",
          "sourceId": "Jvp0x2Sc82WVpExT",
          "name": "Disguise Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "v6bsDoHJFskP6ZFb",
          "name": "Disguise Kit",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:vermin-catcher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "kt2U47rXxnfOxvqw",
      "slug": "vermin-catcher",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8c3f94a4f58bc4c9b50c9ece1558985f5437b3053490b6d7e197e2a46895f9b0",
    "translatableHash": "sha256:d9a38a061b0773b3415525c7d5634a7f82686a31515971a8b45af9d865d0361f",
    "data": {
      "schemaVersion": 1,
      "name": "Vermin Catcher",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Paid exterminators keep streets and sewers clear of pests like rats, snakes, weasels, and insects—even giant rats.\nSociety is built upon the backs of laborers.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 4,
        "int": 1,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 9,
        "nature": 6,
        "stealth": 8,
        "survival": 6
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
          "id": "M8lQbJL0lu6Ssuxk",
          "name": "Club",
          "bonus": 9,
          "damage": "1d6+5 bludgeoning",
          "traits": []
        },
        {
          "id": "FKz4ibHfp2fkA0lZ",
          "name": "Club",
          "bonus": 8,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "6DwQ68mNSxhhIsUi",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "V2mzk8mw3ErUIJoO",
          "name": "Giant Rat Trap",
          "kind": "action",
          "description": "The vermin catcher places a rat trap in an adjacent space. Any Small or Medium creature that moves into the space with the trap triggers it and must attempt a check (reflex, dc:18, basic) save. On a failure, the creature takes 1d4 persistent bleed damage (2d4 persistent bleed damage on a critical failure) and is Immobilized and Off-Guard for 1 round.",
          "traits": []
        },
        {
          "id": "1i5yeMGU4rx0faWY",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The vermin catcher deals an additional 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "c58wczIzH2gzeXQL",
          "sourceId": "c58wczIzH2gzeXQL",
          "name": "Club",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "WuKv33Dx1iOi6Lrs",
          "name": "Club",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "ukJZM3z8BtYq3QcB",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.T8EopYZLT137CsdW",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "T8EopYZLT137CsdW",
          "sourceId": "T8EopYZLT137CsdW",
          "name": "Net",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "wVJbl1Y9BFwnkO8l",
          "name": "Rat Trap",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.OIirLySQDLZgT15S",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.OIirLySQDLZgT15S",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "OIirLySQDLZgT15S",
          "sourceId": "OIirLySQDLZgT15S",
          "name": "Arsenic",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "zX042VJM6KLP9b1m",
          "name": "Arsenic",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 424,
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
          "sourceId": "zX042VJM6KLP9b1m",
          "name": "Arsenic",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 563,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 2",
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
          "sourceId": "zX042VJM6KLP9b1m",
          "name": "Arsenic",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 702,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 3",
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
          "sourceId": "zX042VJM6KLP9b1m",
          "name": "Arsenic",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 306,
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
          "sourceId": "V2mzk8mw3ErUIJoO",
          "name": "Giant Rat Trap",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 365,
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
          "sourceId": "V2mzk8mw3ErUIJoO",
          "name": "Giant Rat Trap",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "1i5yeMGU4rx0faWY",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 66,
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
          "sourceId": "1i5yeMGU4rx0faWY",
          "name": "Sneak Attack",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bleachling-survivor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "KVJYvqx9xEXuG4cP",
      "slug": "bleachling-survivor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0c84ae681fa179846fcbcfe508aa7d6fe9e6b81772da35673702052094fdcf1a",
    "translatableHash": "sha256:bf2c652dbdc5c6b7613b8d9f68c3d04150531a8ade0791607ac557923e610166",
    "data": {
      "schemaVersion": 1,
      "name": "Bleachling Survivor",
      "level": 2,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "It is almost unheard of for gnomes to survive the horrendous sickness known as the Bleaching, but those few who do are permanently altered. Having lived through the worst disease known to their kind, bleachling survivors often emerge jaded and reckless, traveling to seek out mind-bending experiences and heady thrills that will awaken something in them again. Though their experiences may toughen them, they are not unfriendly. Most try to help others they meet during their travels who might not be as unshakable.\nBecause their ancestors came from the First World, gnomes are intrinsically linked to the realm of the fey and crave the mystical and unpredictable. They seek to create daring works of art, voyage to new places, and have experiences they've never had before. Otherwise, they could fall victim to the terrible gnomish illness known as the Bleaching, which not only drains them of their color but of their spirits as well.",
      "armorClass": 17,
      "hitPoints": 34,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 12
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": 3,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "intimidation": 7,
        "medicine": 8,
        "occultism": 7,
        "survival": 8
      },
      "languages": [
        "common",
        "fey",
        "gnomish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GCYr24SZSgbK7LLO",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "YHSkEFp45pEkyU2t",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "hqhtiTXwjlM0kPDD",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "xsfp3V7SVUclcQYw",
          "name": "Longbow",
          "bonus": 9,
          "damage": "1d8 piercing",
          "traits": [
            "deadly-d10",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "9bhlXJgKPxkxk6so",
          "name": "Unflappable",
          "kind": "passive",
          "description": "When the bleachling survivor rolls a critical failure on a check with the emotion trait, they get a failure instead.",
          "traits": []
        },
        {
          "id": "DBPiq10fIve8qUaC",
          "name": "Flinch Back",
          "kind": "reaction",
          "description": "Trigger An enemy moves into an adjacent space\nEffect The bleachling survivor Steps up to 10 feet. They must end this movement in a space that is not adjacent to an enemy.",
          "traits": []
        },
        {
          "id": "BR43SNDAHQ389Oc3",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The bleachling survivor deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "MdmBZkbLFETuKjFu",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MVAWttmT0QDa7LsV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MVAWttmT0QDa7LsV",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MVAWttmT0QDa7LsV",
          "sourceId": "MVAWttmT0QDa7LsV",
          "name": "Longbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "slz6QwsgwrQCLfTS",
          "name": "Longbow",
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
          "sourceId": "oD1n0WnV6bDyeSyr",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "BR43SNDAHQ389Oc3",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 66,
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
          "sourceId": "BR43SNDAHQ389Oc3",
          "name": "Sneak Attack",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:construction-worker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lhhdqML98o90gXqO",
      "slug": "construction-worker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7104ee2e291d6c4ebb533d0a8ce90213c0a4931702a5f0ecb190f96d357a3c4f",
    "translatableHash": "sha256:6fc51eea904e62ecaf165e28776c7c813909ee32dff1a1b6789c14b86ad749db",
    "data": {
      "schemaVersion": 1,
      "name": "Construction Worker",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A brilliant architect can contemplate wondrous structural marvels, but someone must pick up a hammer and make these dreams real. Construction workers are the backbone of any city's infrastructure.\nSociety is built upon the backs of laborers.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 3,
        "int": 2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 10,
        "crafting": 13,
        "society": 6
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
          "id": "jYqIt5dTAFJNuc2S",
          "name": "Maul",
          "bonus": 10,
          "damage": "1d12+4 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "Jkyo6tR22Ck5DSHS",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "SoP41Bu81IyTzp4I",
          "name": "Brick",
          "bonus": 6,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "1eFq66on7kJhLTcu",
          "name": "By Design",
          "kind": "passive",
          "description": "The construction worker spends 1 minute inspecting the layout of a room and attempts a check (architecture-lore, dc:22) check. On a success, they learn the size and layout of all adjacent rooms on the same floor (or all rooms on the floor on a critical success). They can inspect each room only once per day.",
          "traits": [
            "exploration"
          ]
        },
        {
          "id": "xNSVHebdflAgBYHs",
          "name": "Specialty Contractor",
          "kind": "passive",
          "description": "For encounters involving architecture or construction, the construction worker is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "HDZhHhX0c1my1UXP",
          "name": "Demolishing Swing",
          "kind": "action",
          "description": "The construction worker makes a maul Strike against a creature. If it hits, the creature is pushed 10 feet. If the target is wearing metal armor, its armor also takes the damage, which bypasses 5 of the armor's Hardness.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.mlrmkpOlwpnGkw4I",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.mlrmkpOlwpnGkw4I",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "mlrmkpOlwpnGkw4I",
          "sourceId": "mlrmkpOlwpnGkw4I",
          "name": "Maul",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "OBJ6XxnlP1EEDxPW",
          "name": "Sledgehammer (Functions as a Maul)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "reAZmKLVrNRsUQQ8",
          "name": "Safety Gear (Functions as Leather Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "sihwXQKdtAgTJpIQ",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "xShIDyydOMkGvGNb",
          "sourceId": "xShIDyydOMkGvGNb",
          "name": "Chalk",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "FlgipGGlM83OLVCt",
          "name": "Chalk",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:prophet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mbuHsZrLEieLEES0",
      "slug": "prophet",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6d09391fac899073678e44041fa60b7b00095c042e2a000cf2f480d42e197f2f",
    "translatableHash": "sha256:e86a4c58f27dd9a5fe9d5463b2400a8ca125c434ef57c454f96f30778bd6e144",
    "data": {
      "schemaVersion": 1,
      "name": "Prophet",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The gods occasionally send messages in dreams to individuals who wander the lands. Some prophets have not received true divine missives but have misinterpreted normal dreams.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 17,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 0,
        "int": 1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "diplomacy": 8,
        "performance": 8,
        "religion": 7,
        "survival": 7
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
          "id": "MePUvMSpXtRD7gNJ",
          "name": "Flail",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "disarm",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "IWfm1LwDDnDCkgUi",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "y5n9AfgPzGvGtS69",
          "name": "Rock",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [],
      "spellcasting": [
        {
          "id": "8l8fkQuORmfdmuFO",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "CYbr7Sv2iSZ0w69O",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "kHeFP7sqlPO1V4aP",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "O7W7r4NCUt6V6KKS",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "v9qO06fV8MLLJ0s5",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "jXK3YlW8vcRtnvl0",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "tgIsO9NS1YzGyZzO",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "r0ismnSPNoWnUWNq",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "NkhGjQIUi5bhaGGc",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "4CvQeu7RHEz1Z9oj",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "jwqEPvO9nqCh9RSx",
              "name": "Sanctuary",
              "rank": 1
            }
          ]
        },
        {
          "id": "1Z1VM6NR01OCRpFf",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MY7o5eqkVeQrbFxK",
              "name": "Read Fate",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "OhD2Z6rIGGD5ocZA",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "4CvQeu7RHEz1Z9oj",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Identify Magic",
          "sourceId": "eReSHVEPCsdkSL4G",
          "name": "Identify Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "4CvQeu7RHEz1Z9oj",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Vvxgn7saUPW2bJhb",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Vvxgn7saUPW2bJhb",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Vvxgn7saUPW2bJhb",
          "sourceId": "Vvxgn7saUPW2bJhb",
          "name": "Read Fate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "MY7o5eqkVeQrbFxK",
          "name": "Read Fate",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.8xRzLhwGL7Dgy3EZ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.8xRzLhwGL7Dgy3EZ",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "8xRzLhwGL7Dgy3EZ",
          "sourceId": "8xRzLhwGL7Dgy3EZ",
          "name": "Sanctuary",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jwqEPvO9nqCh9RSx",
          "name": "Sanctuary",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.t5FbyZtRL4qV0V7k",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.t5FbyZtRL4qV0V7k",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "t5FbyZtRL4qV0V7k",
          "sourceId": "t5FbyZtRL4qV0V7k",
          "name": "Flail",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "YI42V4pUcfFEaS8V",
          "name": "Flail",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.z1okOYtNVnpBNj9F",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.z1okOYtNVnpBNj9F",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "z1okOYtNVnpBNj9F",
          "sourceId": "z1okOYtNVnpBNj9F",
          "name": "Religious Text",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "nwfcLkf39CUdTMCe",
          "name": "Manifesto (Functions as a Religious Text)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/16/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ilbLQNy6TbBPW7sQ",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ilbLQNy6TbBPW7sQ",
          "sourceId": "ilbLQNy6TbBPW7sQ",
          "name": "Clothing (Ordinary)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "csVpBw7aFwkZ7W2a",
          "name": "Robes",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.XSujb7EsSwKl19Uu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.XSujb7EsSwKl19Uu",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "XSujb7EsSwKl19Uu",
          "sourceId": "XSujb7EsSwKl19Uu",
          "name": "Bless",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CYbr7Sv2iSZ0w69O",
          "name": "Bless",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 283,
        "uuid": "Compendium.pf2e.spells-srd.Item.Bane",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Bane",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Bane",
          "sourceId": "7ZinJNzxq0XF0oMx",
          "name": "Bane",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CYbr7Sv2iSZ0w69O",
          "name": "Bless",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 335,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bless",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bless",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bless",
          "sourceId": "Gqy7K6FnbLtwGpud",
          "name": "Spell Effect: Bless",
          "type": "effect"
        },
        "owner": {
          "sourceId": "CYbr7Sv2iSZ0w69O",
          "name": "Bless",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kHeFP7sqlPO1V4aP",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "kHeFP7sqlPO1V4aP",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "O7W7r4NCUt6V6KKS",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "O7W7r4NCUt6V6KKS",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.J7Y7tl0bbdz7TcCc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.J7Y7tl0bbdz7TcCc",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "J7Y7tl0bbdz7TcCc",
          "sourceId": "J7Y7tl0bbdz7TcCc",
          "name": "Enfeeble",
          "type": "spell"
        },
        "owner": {
          "sourceId": "v9qO06fV8MLLJ0s5",
          "name": "Enfeeble",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 187,
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
          "sourceId": "v9qO06fV8MLLJ0s5",
          "name": "Enfeeble",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 334,
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
          "sourceId": "v9qO06fV8MLLJ0s5",
          "name": "Enfeeble",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 469,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 3",
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
          "sourceId": "v9qO06fV8MLLJ0s5",
          "name": "Enfeeble",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
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
          "sourceId": "jXK3YlW8vcRtnvl0",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
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
          "sourceId": "jXK3YlW8vcRtnvl0",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
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
          "sourceId": "jXK3YlW8vcRtnvl0",
          "name": "Guidance",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
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
          "sourceId": "tgIsO9NS1YzGyZzO",
          "name": "Heal",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.tXa5vOu5giBNCjdR",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.tXa5vOu5giBNCjdR",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "tXa5vOu5giBNCjdR",
          "sourceId": "tXa5vOu5giBNCjdR",
          "name": "Know the Way",
          "type": "spell"
        },
        "owner": {
          "sourceId": "r0ismnSPNoWnUWNq",
          "name": "Know the Way",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
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
          "sourceId": "NkhGjQIUi5bhaGGc",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
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
          "sourceId": "NkhGjQIUi5bhaGGc",
          "name": "Light",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:ruffian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "MNb1Hjd2gKimnfvV",
      "slug": "ruffian",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:43629ac730706bffcdaf0625deac9e13f31f9d82afd27cc538f69c62d751a7e9",
    "translatableHash": "sha256:72399dcfbaefc38fbaef38a193ac76d6012197ad460c16facad8378ce5dbc4f4",
    "data": {
      "schemaVersion": 1,
      "name": "Ruffian",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Ruffians often work as bodyguards and enforcers for powerful criminals, using their strength to bully others into submission.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "intimidation": 6,
        "stealth": 6
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
          "id": "nFYahNWZUkU0gnJ9",
          "name": "Club",
          "bonus": 9,
          "damage": "1d6+5 bludgeoning",
          "traits": []
        },
        {
          "id": "sCsRpD25k35SJXKJ",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "6sHclJAOjSOIHd1o",
          "name": "Club",
          "bonus": 8,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "WFByucZQz0Q9slLk",
          "name": "Sling",
          "bonus": 8,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "kJFSnvY1LCq24wAM",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "1gLrx7OTMtRPbK9N",
          "name": "Brutal Beating",
          "kind": "passive",
          "description": "The ruffian's brutality shakes foes' confidence.\nWhen the ruffian deals damage on a critical hit, the target is Frightened 1, and the ruffian can push the target up to 10 feet.",
          "traits": []
        },
        {
          "id": "qy60SQR1jiyW4CXc",
          "name": "Combat Grab",
          "kind": "action",
          "description": "Requirements The ruffian has one hand free\nEffect The ruffian makes a melee Strike while keeping one hand free. If this Strike hits, the ruffian Grabs the target using their free hand. The creature remains Grabbed until the end of the ruffian's next turn or until it Escapes, whichever comes first.",
          "traits": []
        },
        {
          "id": "VQPPHF2M9xHf5XD3",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The ruffian deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "c58wczIzH2gzeXQL",
          "sourceId": "c58wczIzH2gzeXQL",
          "name": "Club",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Q5SFRwPF55cicZ7k",
          "name": "Club",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.UCH4myuFnokGv0vF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "UCH4myuFnokGv0vF",
          "sourceId": "UCH4myuFnokGv0vF",
          "name": "Sling",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "JvZxJP0lRCsfWDyI",
          "name": "Sling",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 255,
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
          "sourceId": "qy60SQR1jiyW4CXc",
          "name": "Combat Grab",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 359,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": "Escapes",
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
          "sourceId": "qy60SQR1jiyW4CXc",
          "name": "Combat Grab",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "VQPPHF2M9xHf5XD3",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 54,
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
          "sourceId": "VQPPHF2M9xHf5XD3",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "Y0Qo7VtwsV35iBtE",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MKSeXwUm56c15MZa",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MKSeXwUm56c15MZa",
          "sourceId": "MKSeXwUm56c15MZa",
          "name": "Sling Bullets",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "56cyk7mzdI82QDva",
          "name": "Sling Bullets",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
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
          "sourceId": "kJFSnvY1LCq24wAM",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 122,
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
          "sourceId": "1gLrx7OTMtRPbK9N",
          "name": "Brutal Beating",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:kobold-trapper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "nDVrJFeatah7dtvy",
      "slug": "kobold-trapper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:abe5fc1b9362e590d1b92288d56a13f859289ca61f5ce7fc1ce7b4d3148a0418",
    "translatableHash": "sha256:bb4701d8eae81a4dfc7abc59d25ef4fbe8896845faa80205682b89d110aedf68",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Trapper",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "Kobolds are skillful artisans, always inventing new traps and snares to defend their territory and ambush enemies. Kobold trappers enjoy showing off their crafting prowess on the battlefield.\nKobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.",
      "armorClass": 18,
      "hitPoints": 32,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 3,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "crafting": 8,
        "stealth": 7,
        "survival": 7
      },
      "languages": [
        "common",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "S8huaodqxTDiHuHB",
          "name": "Light Hammer",
          "bonus": 7,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "YvZiRiYD4dASkM7k",
          "name": "Light Hammer",
          "bonus": 9,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "35NEqrBUSiOqGeis",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "XXVbLrwhTTf09A2C",
          "name": "Crossbow",
          "bonus": 9,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ynDXbpcd9knevm4H",
          "name": "+2 to Seek for Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8WG4O0u4doC3cN4f",
          "name": "Booby-Trapped",
          "kind": "passive",
          "description": "A kobold trapper protects items in their backpack with a booby trap. This booby trap requires a successful check (perception, dc:18) check to notice, and two successful check (thievery, dc:15) checks to disable.\nAccessing the backpack without disabling the trap destroys its contents, and splinters explode in a 10-foot type:burst centered on the backpack, dealing 3d6 piercing damage (check (reflex, dc:15, basic, options:area-effect) save).",
          "traits": []
        },
        {
          "id": "Y9FN1CneGrmbNatQ",
          "name": "+1 Circumstance to All Defenses vs. Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eJpLRA3j8QNnWM3M",
          "name": "Construct Trap",
          "kind": "action",
          "description": "The kobold trapper creates a rudimentary trap on a surface in an adjacent square. The trap activates the next time a creature moves adjacent to it. The creature takes 2d6 2d6 bludgeoning damage, 2d6 piercing damage, or 2d6 slashing damage (determined by the trapper when the trap is constructed) with a check (reflex, dc:18, basic) save. On a failure, the creature also takes a –5 status penalty to all Speeds for 1 minute. The trap is destroyed when activated or after 8 hours, whichever comes first. A trapper typically carries enough raw materials to make six traps each day.\nEffect: Construct Trap",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "jNTPc1vKA5JxZPAu",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "P19lPnsRQ8yitSAo",
          "name": "Light Hammer",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 636,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Construct Trap",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Construct Trap",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Construct Trap",
          "sourceId": "lhgGLGL8phfu0bOL",
          "name": "Effect: Construct Trap",
          "type": "effect"
        },
        "owner": {
          "sourceId": "eJpLRA3j8QNnWM3M",
          "name": "Construct Trap",
          "type": "action"
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
          "sourceId": "7iHEtxSkBzvn04Ll",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "qCEOZ6109Yo34tRx",
          "sourceId": "qCEOZ6109Yo34tRx",
          "name": "Formula Book (Blank)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "tsWnpzSaabbX77Q0",
          "name": "Formula Book (Containing formulas for three 1st- or 2nd-level snares)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "2ZgcUOQuH9hlAUwD",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.3lgwjrFEsQVKzhh7",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.3lgwjrFEsQVKzhh7",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "3lgwjrFEsQVKzhh7",
          "sourceId": "3lgwjrFEsQVKzhh7",
          "name": "Backpack",
          "type": "backpack"
        },
        "owner": {
          "sourceId": "MayOLxeOwT6kADSl",
          "name": "Backpack",
          "type": "backpack"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:blasphemer-of-zon-kuthon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "nh5QBC79HYRCSmLV",
      "slug": "blasphemer-of-zon-kuthon",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ef33906b6e2f3d2b252a7ba54a80dccbfdc094d46deb2e4c2a658296ef15d365",
    "translatableHash": "sha256:9171f51e271f8e3e1f5548199beb50ae1a90203b7e50cf07934a857d794fa0d0",
    "data": {
      "schemaVersion": 1,
      "name": "Blasphemer of Zon-Kuthon",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Blasphemers spread messages contrary to the tenets of their faith, often out of the belief that the gods are specifically targeting them to spread this message. In some cultures, such as Nidal, this is a heretical crime and can send a blasphemer on the run from the law.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "deception": 9,
        "intimidation": 7,
        "performance": 7,
        "religion": 6,
        "society": 7
      },
      "languages": [
        "common",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ijjrNBZLr2vExSWx",
          "name": "Spiked Chain",
          "bonus": 9,
          "damage": "1d8+5 slashing",
          "traits": [
            "disarm",
            "trip"
          ]
        },
        {
          "id": "oHhdPe8R5GtDTni8",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "I9fDws8Ch2bbwe4s",
          "name": "Hand Crossbow",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "x4GvBAM36BdQtCwZ",
          "name": "Twisted Faith",
          "kind": "passive",
          "description": "When attempting a Religion skill check, the blasphemer can roll check (deception) instead, so long as they have an intelligent creature around as a witness. If the creature is a follower of the blasphemer's faith, the blasphemer receives a +2 circumstance bonus to the check.",
          "traits": []
        },
        {
          "id": "Lx0mXTZ6Vv5rAJGs",
          "name": "False Blessing",
          "kind": "action",
          "description": "The blasphemer attempts a check (religion, dc:15) check to attempt to cast the 1st-rank spell their deity grants to clerics (Phantom Pain for Zon-Kuthon). The spell must take 1, 2, or 3 actions to Cast. The blasphemer can use twisted faith to roll check (deception, dc:15) instead if they have a witness, as normal.\nCritical Success The blasphemer successfully Casts the Spell, then is Stunned with a value equal to the number of actions the spell takes – 1.\nSuccess As critical success, plus the blasphemer takes 1d6 mental damage.\nFailure The blasphemer fails to Cast the Spell and takes 1d6 mental damage.\nCritical Failure The blasphemer fails to Cast the Spell, takes 2d6 mental damage, and is Stunned 1.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "XyA6PKV46aNlLXOd",
          "sourceId": "XyA6PKV46aNlLXOd",
          "name": "Hand Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "bx49bG11jRkRNzKV",
          "name": "Hand Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zi9ovfoRp2fMhfpO",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zi9ovfoRp2fMhfpO",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zi9ovfoRp2fMhfpO",
          "sourceId": "zi9ovfoRp2fMhfpO",
          "name": "Spiked Chain",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "SAIKB5yrYyD3RMfP",
          "name": "Spiked Chain",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.upzjwQ96cZG0Xlmx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "upzjwQ96cZG0Xlmx",
          "sourceId": "upzjwQ96cZG0Xlmx",
          "name": "Religious Symbol (Silver)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "uVSC3SzLfL0GaQiF",
          "name": "Religious Symbol of Zon-Kuthon",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "lp4ebxFYxKfv2kHN",
          "name": "Bolts",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 127,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantom Pain",
          "sourceId": "R8bqnYiThB6MYTxD",
          "name": "Phantom Pain",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Lx0mXTZ6Vv5rAJGs",
          "name": "False Blessing",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 455,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": null,
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
          "sourceId": "Lx0mXTZ6Vv5rAJGs",
          "name": "False Blessing",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 912,
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
          "sourceId": "Lx0mXTZ6Vv5rAJGs",
          "name": "False Blessing",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:navigator",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "nnrvoNBUzKyKQLu4",
      "slug": "navigator",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9ceddc8dbdc93733f6ba2da0a460b4482699acb07cb2db186c706c698c870037",
    "translatableHash": "sha256:6317163268097617eba4c606427c55cca4ac3c5917edbfdf9467ca02dbbf8363",
    "data": {
      "schemaVersion": 1,
      "name": "Navigator",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A navigator uses celestial bodies and shipping lanes to determine routes.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "nature": 11,
        "society": 8,
        "survival": 9
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
          "id": "TvnwhUBwaljk26uo",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "zYZvGGQfgJZyoNMQ",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "zRWCfQrFMwaTk5cr",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qIRZdfRLhqBnYMWt",
          "name": "Chart a Course",
          "kind": "passive",
          "description": "By spending 10 minutes of work and succeeding at a check (sailing-lore, dc:22) check, the navigator plots an optimal course.\nThe severity of environmental conditions other than temperature are reduced by one step for 24 hours (two steps on a critical success). This changes moderate damage to minor damage, winds that create greater difficult terrain cause only difficult terrain, and so on.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "Wo4zHTWVY48Iqrg0",
          "name": "Sailing Specialist",
          "kind": "passive",
          "description": "For encounters involving navigation or sailing, the navigator is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "Hw1KYT6hIaAHcXkI",
          "name": "Navigator's Edge",
          "kind": "passive",
          "description": "The navigator's Strikes deal an additional 1d6 damage when on a ship.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
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
          "sourceId": "YDDqngDxiWGbURtB",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ngAGFuWcw280emz8",
          "name": "Writing Set",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:surgeon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "oaqt9bociCp9e3Yr",
      "slug": "surgeon",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b96c00348a3cb77c83d960e8c7becd428122eae1d15fece33fbd39a15711ee0",
    "translatableHash": "sha256:99eb6cb80fe896c4932fa20f155e2bc325b16f58bb4c46aab6cb93f9ece863fd",
    "data": {
      "schemaVersion": 1,
      "name": "Surgeon",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The surgeon specializes in the physical alteration of the body to prevent the spread of disease, removing necrotic and decaying flesh to help the whole to survive. Few healers know the science of anatomy and physiology better.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "crafting": 10,
        "diplomacy": 8,
        "medicine": 16
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
          "id": "JbPgkPBw6I7dZFcQ",
          "name": "Scalpel",
          "bonus": 11,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "YgMj9CaUadOgAwPl",
          "name": "Scalpel",
          "bonus": 11,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "t22rkX3CF3ShDefU",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "nRepGZZJ5FG8H7op",
          "name": "Bonesaw",
          "bonus": 9,
          "damage": "1d8+1 slashing",
          "traits": [
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "F7IHKiavOdLoatuo",
          "name": "Doctor's Hand",
          "kind": "passive",
          "description": "When the surgeon rolls a critical failure on a check to Treat Disease, Treat Poison, or Treat Wounds, they get a failure instead.",
          "traits": []
        },
        {
          "id": "2genJeVNIZxZ9BUv",
          "name": "Medical Specialist",
          "kind": "passive",
          "description": "In medical matters, a surgeon is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "Q95qJwP5SCa0IlGu",
          "name": "Medical Malpractice",
          "kind": "action",
          "description": "The surgeon attempts a check (medicine, against:fortitude) check against the Fortitude DC of one living creature they can see within 60 feet.\nOn a success, the surgeon's melee Strikes deal an extra 1d6 precision damage against that creature (2d6 on a critical success) until 1 minute passes or the surgeon critically hits that creature, whichever comes first.\nUsing this action again ends any previous one. A surgeon can target an individual creature no more than once per day with this ability.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.nOFcCidD5AwVZWTv",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.nOFcCidD5AwVZWTv",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "nOFcCidD5AwVZWTv",
          "sourceId": "nOFcCidD5AwVZWTv",
          "name": "War Razor",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Z6BNfng94z1xdzn3",
          "name": "Scalpel",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.NIsxR5zXtVa3PuyU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.NIsxR5zXtVa3PuyU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "NIsxR5zXtVa3PuyU",
          "sourceId": "NIsxR5zXtVa3PuyU",
          "name": "Temple Sword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "CjYVPKaqWE3kLeLO",
          "name": "Bonesaw (Functions as a Temple Sword)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "s5e6CueENejAHsP7",
          "name": "Healer's Tools",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 59,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "F7IHKiavOdLoatuo",
          "name": "Doctor's Hand",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 114,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "F7IHKiavOdLoatuo",
          "name": "Doctor's Hand",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 171,
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
          "sourceId": "F7IHKiavOdLoatuo",
          "name": "Doctor's Hand",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:arms-dealer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "OB4x3FBwjJBfOsi3",
      "slug": "arms-dealer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e0f248efb7156f43880445ec0819197d3f7164bde05f7efe40bba0103ea08254",
    "translatableHash": "sha256:e2f4ff864cb2c59f8406aea254bfd0ea1f4d3655cf54d0671e91dbba9c416d0d",
    "data": {
      "schemaVersion": 1,
      "name": "Arms Dealer",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A seedy arms dealer has access to all kinds of deadly weapons and can quickly provide them to clients in need… for the right price, of course.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 17,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "crafting": 7,
        "deception": 7,
        "diplomacy": 7,
        "intimidation": 9,
        "society": 9
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
          "id": "3pOvOZlwLvNrkRsA",
          "name": "Sword Cane",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "agile",
            "concealable",
            "finesse"
          ]
        },
        {
          "id": "Qk2fRV51QpL46e6s",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "zpmEjQlY8UmEFcCC",
          "name": "Flintlock Musket",
          "bonus": 11,
          "damage": "1d6+3 piercing",
          "traits": [
            "concussive",
            "fatal-d10",
            "reload-1"
          ]
        },
        {
          "id": "YONjwgPuYBTSxQnp",
          "name": "Hand Cannon",
          "bonus": 11,
          "damage": "1d6+3 piercing",
          "traits": [
            "modular",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "0iQ2TWPn2ZDivEmG",
          "name": "Arms Dealing Specialist",
          "kind": "passive",
          "description": "For encounters involving the purchase of weapons, the arms dealer is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "gFnCdfngReE4akJ9",
          "name": "Take Stock",
          "kind": "action",
          "description": "The arms dealer advises an ally on how to properly use a firearm. The arms dealer chooses an ally within 30 feet wielding a firearm. That ally can use a reaction to Interact to reload their firearm.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "cUQGFovFJIVtVx2l",
          "name": "You Call That a Gun?",
          "kind": "passive",
          "description": "The arms dealer seems unaffected by your attempts to threaten them. The arms dealer gains a +2 circumstance bonus to their Will DC against Intimidation checks while they're holding a firearm.",
          "traits": []
        },
        {
          "id": "tQ9J0sihhYEniOu0",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.hqMtsTwmOShdAdQW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.hqMtsTwmOShdAdQW",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "hqMtsTwmOShdAdQW",
          "sourceId": "hqMtsTwmOShdAdQW",
          "name": "Flintlock Musket",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "H0Ef1jKguM5plBqj",
          "name": "Flintlock Musket",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.4LJEpZ2HkCu9BvHI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.4LJEpZ2HkCu9BvHI",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "4LJEpZ2HkCu9BvHI",
          "sourceId": "4LJEpZ2HkCu9BvHI",
          "name": "Hand Cannon",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "sAAMVJT0VlTapveW",
          "name": "Hand Cannon",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.VitLIpdIAmKlGb7i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.VitLIpdIAmKlGb7i",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "VitLIpdIAmKlGb7i",
          "sourceId": "VitLIpdIAmKlGb7i",
          "name": "Sword Cane",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "1C37ceei7bQB0Urw",
          "name": "Sword Cane",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Fy63rwYVBq0hXh0T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Fy63rwYVBq0hXh0T",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Fy63rwYVBq0hXh0T",
          "sourceId": "Fy63rwYVBq0hXh0T",
          "name": "Rounds (Flintlock Musket)",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "QyV1mmpeFyILuAXh",
          "name": "Rounds (Flintlock Musket)",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 497,
        "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Alchemical Crafting",
          "sourceId": "is3Oz9wt11lNq62K",
          "name": "Alchemical Crafting",
          "type": "feat"
        },
        "owner": {
          "sourceId": "QyV1mmpeFyILuAXh",
          "name": "Rounds (Flintlock Musket)",
          "type": "ammo"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.CmWkSgFyb6HB9KVK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.CmWkSgFyb6HB9KVK",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "CmWkSgFyb6HB9KVK",
          "sourceId": "CmWkSgFyb6HB9KVK",
          "name": "Rounds (Hand Cannon)",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "QYBfDWzOoUTTgnAZ",
          "name": "Rounds (Hand Cannon)",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 497,
        "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Alchemical Crafting",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Alchemical Crafting",
          "sourceId": "is3Oz9wt11lNq62K",
          "name": "Alchemical Crafting",
          "type": "feat"
        },
        "owner": {
          "sourceId": "QYBfDWzOoUTTgnAZ",
          "name": "Rounds (Hand Cannon)",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:saboteur",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "qQzry7keeMVUzfpt",
      "slug": "saboteur",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:38dad2937d14325a1b0dfc6fb5fa25d44c1838a6494d02365686f560c73c6e09",
    "translatableHash": "sha256:800220432b2cb0926ff528eb8a9b5bf57d47665aa402627024795547a34d2628",
    "data": {
      "schemaVersion": 1,
      "name": "Saboteur",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Saboteurs excel at infiltration, using it to perform destructive acts.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 17,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 5,
        "crafting": 6,
        "deception": 7,
        "diplomacy": 5,
        "intimidation": 5,
        "society": 6,
        "stealth": 9,
        "survival": 6,
        "thievery": 9
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
          "id": "xuyjTEDoDAmb5acN",
          "name": "Sap",
          "bonus": 7,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "uXA8SDbNRrkOAR8F",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "wfNSTwrVHkHF5YLS",
          "name": "Hand Crossbow",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "lpMiICSGm7J1NIMh",
          "name": "Snare Crafting",
          "kind": "passive",
          "description": "The saboteur can Craft snares and has the supplies to make up to two Caltrop Snares and up to two Hampering Snares.",
          "traits": []
        },
        {
          "id": "KRLpKVZ3AZwkE4cj",
          "name": "Perception +10 to Find Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "nhdJ9mXQ9NXj6n7V",
          "name": "Reflex +11 and AC 19 vs. Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ayPb7Lg7AFYqIfzk",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The saboteur deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "XyA6PKV46aNlLXOd",
          "sourceId": "XyA6PKV46aNlLXOd",
          "name": "Hand Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "3tjip0HhguL5l2lw",
          "name": "Hand Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.TLQErnOpM9Luy7rL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "TLQErnOpM9Luy7rL",
          "sourceId": "TLQErnOpM9Luy7rL",
          "name": "Sap",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "IGUOzNrIaqQKPR2j",
          "name": "Sap",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 72,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Caltrop Snare",
        "label": "Caltrop Snares",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Caltrop Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Caltrop Snare",
          "sourceId": "kF761P3ibBIFmLm9",
          "name": "Caltrop Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "lpMiICSGm7J1NIMh",
          "name": "Snare Crafting",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 158,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Hampering Snare",
        "label": "Hampering Snares",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Hampering Snare",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Hampering Snare",
          "sourceId": "Km4lSOsyrip5q6iD",
          "name": "Hampering Snare",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "lpMiICSGm7J1NIMh",
          "name": "Snare Crafting",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kquBnQ0kObZztnBc",
          "sourceId": "kquBnQ0kObZztnBc",
          "name": "+1 Status to All Saves vs. Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "KRLpKVZ3AZwkE4cj",
          "name": "Perception +10 to Find Traps",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kquBnQ0kObZztnBc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kquBnQ0kObZztnBc",
          "sourceId": "kquBnQ0kObZztnBc",
          "name": "+1 Status to All Saves vs. Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "nhdJ9mXQ9NXj6n7V",
          "name": "Reflex +11 and AC 19 vs. Traps",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "ayPb7Lg7AFYqIfzk",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 55,
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
          "sourceId": "ayPb7Lg7AFYqIfzk",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "Z6z3h133tKnYqEUK",
          "name": "Artisan's Toolkit (Snare Toolkit)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.44F1mfJei4GY8f2X",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.44F1mfJei4GY8f2X",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "44F1mfJei4GY8f2X",
          "sourceId": "44F1mfJei4GY8f2X",
          "name": "Crowbar",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "GBPV3t1mFOQxBRvx",
          "name": "Crowbar",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Jvp0x2Sc82WVpExT",
          "sourceId": "Jvp0x2Sc82WVpExT",
          "name": "Disguise Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "XWTyVeCBat1GH2lY",
          "name": "Disguise Kit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zvLyCVD8g2PdHJAc",
          "sourceId": "zvLyCVD8g2PdHJAc",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "gBGRJzlGtflyITo1",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 34,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
        "label": "Pick Locks",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Pick a Lock",
          "sourceId": "2EE4aF4SZpYf0R6H",
          "name": "Pick a Lock",
          "type": "action"
        },
        "owner": {
          "sourceId": "gBGRJzlGtflyITo1",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 101,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
        "label": "Disable Devices",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disable a Device",
          "sourceId": "cYdz2grcOcRt4jk6",
          "name": "Disable a Device",
          "type": "action"
        },
        "owner": {
          "sourceId": "gBGRJzlGtflyITo1",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 311,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
        "label": "Replacement Picks",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Thieves' Toolkit (Replacement Picks)",
          "sourceId": "Sw7MBLASN3xK4Y44",
          "name": "Thieves' Toolkit (Replacement Picks)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "gBGRJzlGtflyITo1",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "5eC0Qdxdqm5k5Mlt",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:street-musician",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "srsib4P14wAYv4pS",
      "slug": "street-musician",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5e37fc8cdcc1c6aeb7358fbf0ec705ca7d8997e437b37cbc6260582741e5afe3",
    "translatableHash": "sha256:9e6077943486928ce3959fbd9b4f0bf041e2b91405e83eb332525c8d8f251342",
    "data": {
      "schemaVersion": 1,
      "name": "Street Musician",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Many musicians make their living off stage by playing at markets, fairs, or crossroads. While their fame may not be as widespread as theatrical performers, they are nonetheless staples of many communities.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 17,
      "hitPoints": 32,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 8,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "athletics": 6,
        "crafting": 5,
        "deception": 8,
        "diplomacy": 8,
        "performance": 8,
        "society": 6
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
          "id": "ta0mTsTxPqsWzEfA",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "943tc1ovhQbV4sc4",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "lmoWwE8kKafo5PXF",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VMKC1y1oeUVsuSsU",
          "name": "Distracting Drone",
          "kind": "action",
          "description": "Requirements The street musician is playing their instrument\nEffect The street musician attempts a check (type:performance, against:will, options:inflicts:fascinated,inflicts:off-guard) check compared to the Will DC of an observer within 30 feet. On a success, the target is Fascinated by the street musician and Off-Guard for 1 round.",
          "traits": []
        },
        {
          "id": "OcLH5ZzoXOVbRkZq",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The street musician deals an additional 1d4 precision damage to Off-Guard creatures. This increases to 1d6 against creatures off-guard due to the street musician's Feint or distracting drone.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "dl7wx8TtUFFVkYPb",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "Jn1DL0w3W0NjSjdc",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "Tl0gC7OV9n3nwlcu",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "myEGendav1pGzq3H",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "I04IveSFh0tKUkmL",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "MgvRKHOcC917j60e",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "9Zl7yBfkAmWaC08x",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "aS6m2GZo7WjVtBPk",
              "name": "Ventriloquism",
              "rank": 1
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
          "sourceId": "Jn1DL0w3W0NjSjdc",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
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
          "sourceId": "Jn1DL0w3W0NjSjdc",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
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
          "sourceId": "Jn1DL0w3W0NjSjdc",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 322,
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
          "sourceId": "VMKC1y1oeUVsuSsU",
          "name": "Distracting Drone",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 403,
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
          "sourceId": "VMKC1y1oeUVsuSsU",
          "name": "Distracting Drone",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "OcLH5ZzoXOVbRkZq",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 67,
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
          "sourceId": "OcLH5ZzoXOVbRkZq",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 210,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Feint",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Feint",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Feint",
          "sourceId": "QNAVeNKtHA0EUw4X",
          "name": "Feint",
          "type": "action"
        },
        "owner": {
          "sourceId": "OcLH5ZzoXOVbRkZq",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Tl0gC7OV9n3nwlcu",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "Tl0gC7OV9n3nwlcu",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "myEGendav1pGzq3H",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "myEGendav1pGzq3H",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "myEGendav1pGzq3H",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gKKqvLohtrSJj3BM",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gKKqvLohtrSJj3BM",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gKKqvLohtrSJj3BM",
          "sourceId": "gKKqvLohtrSJj3BM",
          "name": "Force Barrage",
          "type": "spell"
        },
        "owner": {
          "sourceId": "I04IveSFh0tKUkmL",
          "name": "Force Barrage",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
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
          "sourceId": "MgvRKHOcC917j60e",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
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
          "sourceId": "MgvRKHOcC917j60e",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yvs1zN5Pai5U4CJX",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yvs1zN5Pai5U4CJX",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yvs1zN5Pai5U4CJX",
          "sourceId": "yvs1zN5Pai5U4CJX",
          "name": "Summon Instrument",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9Zl7yBfkAmWaC08x",
          "name": "Summon Instrument",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 21,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Handheld)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Handheld)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Musical Instrument (Handheld)",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "9Zl7yBfkAmWaC08x",
          "name": "Summon Instrument",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 381,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Virtuoso handheld)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Virtuoso handheld)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Musical Instrument (Virtuoso handheld)",
          "sourceId": "3ld14dsn2RLu9owg",
          "name": "Musical Instrument (Virtuoso handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "9Zl7yBfkAmWaC08x",
          "name": "Summon Instrument",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yV7Ouzaoe7DHLESI",
          "sourceId": "yV7Ouzaoe7DHLESI",
          "name": "Ventriloquism",
          "type": "spell"
        },
        "owner": {
          "sourceId": "aS6m2GZo7WjVtBPk",
          "name": "Ventriloquism",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
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
          "sourceId": "488DqWNFizKhC9uH",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MPv5Yx4w7scZGj2Y",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "vlcPMVVkHlFOL3au",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:loan-shark",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "SYrcABPch6qa61Tp",
      "slug": "loan-shark",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b2101e6b2d593c6bf29cad5fcd83b4613d796ab8ee7d0c06e8e7401d1a5632a",
    "translatableHash": "sha256:73b978e1a8d127143a7a51ac5bc7e12d636526350323b55ff3839c457b14452c",
    "data": {
      "schemaVersion": 1,
      "name": "Loan Shark",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Loan sharks lend money to those in need but charge high interest. If there's ever an issue with repayment, they'll send their gang to ensure clients pay in full.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 6,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 0,
        "con": 1,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "athletics": 9,
        "deception": 8,
        "diplomacy": 8,
        "intimidation": 8,
        "society": 15
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
          "id": "QHTjAvY9mbg8A0XX",
          "name": "Dragon-Headed Cane",
          "bonus": 10,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "DD83LMY5UCjUnyWb",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "W83ONh5xSCyi26No",
          "name": "Business Savvy",
          "kind": "passive",
          "description": "When making monetary deals, the loan shark gets a +8 circumstance bonus to Deception checks, Diplomacy checks, and their Perception DC.",
          "traits": []
        },
        {
          "id": "BZZhLIhxJfdHMYct",
          "name": "Loan Specialist",
          "kind": "passive",
          "description": "For encounters involving monetary deals, the loan shark is a 7th-level challenge.",
          "traits": []
        },
        {
          "id": "tfK72gDLl1pjUfru",
          "name": "Never off the Hook",
          "kind": "passive",
          "description": "60 feet.\nCreatures in the aura who owe the loan shark money take a –3 circumstance penalty to their Will DC against the loan shark's attempts to [[/act demoralize]] or [[/act coerce]] them and can't reduce their Frightened value below 1 while in the aura.\nEffect: Owe Money",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "qfr40H0AoV22bvUd",
          "name": "Interest is Due!",
          "kind": "action",
          "description": "Frequency once per round\nEffect The loan shark commands an ally within 30 feet to attack a creature who owes the loan shark money. The ally can use a reaction to Strike the debtor, dealing an additional 1d6 mental damage.\nEffect: Interest is Due!",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Bxt5euIfciVt0Bnw",
          "name": "Dragon-Headed Cane (Functions as a Staff)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.r0ifJfoz8aqf0mwk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.r0ifJfoz8aqf0mwk",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "r0ifJfoz8aqf0mwk",
          "sourceId": "r0ifJfoz8aqf0mwk",
          "name": "Breastplate",
          "type": "armor"
        },
        "owner": {
          "sourceId": "iMlU1XykkXSp0ScX",
          "name": "Breastplate",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 98,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Half Plate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Half Plate",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Half Plate",
          "sourceId": "pRoikbRo5HFW6YUB",
          "name": "Half Plate",
          "type": "armor"
        },
        "owner": {
          "sourceId": "iMlU1XykkXSp0ScX",
          "name": "Breastplate",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
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
          "sourceId": "tfK72gDLl1pjUfru",
          "name": "Never off the Hook",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 316,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Owe Money",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Owe Money",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Owe Money",
          "sourceId": "pZ0Vr0Pe3LHe4ptx",
          "name": "Effect: Owe Money",
          "type": "effect"
        },
        "owner": {
          "sourceId": "tfK72gDLl1pjUfru",
          "name": "Never off the Hook",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Interest is Due!",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Interest is Due!",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Interest is Due!",
          "sourceId": "T13bc44lsaOUjJa9",
          "name": "Effect: Interest is Due!",
          "type": "effect"
        },
        "owner": {
          "sourceId": "qfr40H0AoV22bvUd",
          "name": "Interest is Due!",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:forlorn-artist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "t5H1GbGqLLCU79cd",
      "slug": "forlorn-artist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b8fddbfe04eb2fb7efc3e90d517d322f32affe29eb26aebd2bb1b1060eec44de",
    "translatableHash": "sha256:dac5aecb2b025b68431ea2e8e5a268f1c27038dd9fc249df4f63308106515f68",
    "data": {
      "schemaVersion": 1,
      "name": "Forlorn Artist",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elf",
        "humanoid"
      ],
      "description": "Forlorn elves, who spend their lives among shorter-lived peoples, often grow morose from constant loss. Some channel this melancholy into their art.\nElves' long lives give them centuries to delve into studies, artistry, or exploration.",
      "armorClass": 18,
      "hitPoints": 26,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 9,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": -1,
        "int": 4,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "crafting": 11,
        "diplomacy": 9,
        "society": 8
      },
      "languages": [
        "common",
        "elven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ZVNk5nXBXdb4L7sz",
          "name": "Rapier",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "0I8yKYDqikEFsG7k",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "GA8PO1XizYt1JtCd",
          "name": "+2 Bonus on Perception to Notice Unusual Artwork",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "cV4Kub9vZA8CqaqH",
          "name": "Art Specialist",
          "kind": "passive",
          "description": "For encounters involving crafting or evaluating art, the forlorn artist is a 4th-level challenge.",
          "traits": []
        },
        {
          "id": "X1QKFjmFc0xbIPEe",
          "name": "+1 Circumstance vs. emotion effects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "935o5SaVUaLp8sje",
          "name": "Flick Ink",
          "kind": "reaction",
          "description": "Trigger The artist is targeted with a melee or ranged Strike by a creature within 15 feet\nEffect The artist flings ink in the attacker's eyes. The attacker must succeed at a check (reflex, dc:18, options:inflicts:blinded) save or be Blinded. This takes effect before the attacker targets the artist. The blindness lasts until the end of the target's next turn, but the creature can Interact to rub its eyes to attempt a new save to end the condition.",
          "traits": []
        },
        {
          "id": "wbKoBbfaKQvWmYiS",
          "name": "Cry of Ages",
          "kind": "action",
          "description": "The artist channels their loneliness into a wordless wail that forces others to contemplate their mortality. Each enemy in a 30-foot type:emanation must succeed at a check (will, dc:17) save or be Frightened 1. A creature that critically fails is also Stupefied 1 for 1 minute. Each creature is then temporarily immune for 1 minute.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "iMy1xNOkLUSZlpmZ",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "rKI1emSbo7uRhIYl",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "WqINQpUzCNJRWxAt",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "0QoV5gUrsHCFilCX",
              "name": "Sigil",
              "rank": 1
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
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rKI1emSbo7uRhIYl",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "rKI1emSbo7uRhIYl",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "rKI1emSbo7uRhIYl",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 280,
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
          "sourceId": "935o5SaVUaLp8sje",
          "name": "Flick Ink",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 214,
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
          "sourceId": "wbKoBbfaKQvWmYiS",
          "name": "Cry of Ages",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 324,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
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
          "sourceId": "wbKoBbfaKQvWmYiS",
          "name": "Cry of Ages",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Qw3fnUlaUbnn7ipC",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WqINQpUzCNJRWxAt",
          "name": "Prestidigitation",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "AUctDF2fqPZN2w4W",
          "sourceId": "AUctDF2fqPZN2w4W",
          "name": "Sigil",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0QoV5gUrsHCFilCX",
          "name": "Sigil",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "tH5GirEy7YB3ZgCk",
          "sourceId": "tH5GirEy7YB3ZgCk",
          "name": "Rapier",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "sz8efrrYbKakfN7C",
          "name": "Rapier",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
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
          "sourceId": "anISOBzNecFDcCfT",
          "name": "Leather Armor",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gnome-daredevil",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "TXu9W2jQezwQNT5k",
      "slug": "gnome-daredevil",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ef35d3acc3dc30d1973a8cc58841a68d49a01bfb900edbd9c499a66fb4d30901",
    "translatableHash": "sha256:cd63a9dfe759aa4c7963c670f7cac111bc9d2b16717d1369be9d7af7986e1885",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Daredevil",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "These nimble warriors capitalize on their slight stature and dexterous movements to evade and overtake their foes on the battlefield. Their unmatched skill with the gnome flickmace allows a daredevil to strike from a short distance and twirl away unscathed, sometimes hitting hard enough to topple their foes.\nBecause their ancestors came from the First World, gnomes are intrinsically linked to the realm of the fey and crave the mystical and unpredictable. They seek to create daring works of art, voyage to new places, and have experiences they've never had before. Otherwise, they could fall victim to the terrible gnomish illness known as the Bleaching, which not only drains them of their color but of their spirits as well.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 12,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 7,
        "performance": 8,
        "thievery": 7
      },
      "languages": [
        "common",
        "gnomish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "cQ5RzVVEfl9EidP4",
          "name": "Gnome Flickmace",
          "bonus": 11,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "reach",
            "sweep"
          ]
        },
        {
          "id": "Jk5e6pbOK3bjKfyz",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "99tgWQzLgBZy4vkl",
          "name": "Composite Shortbow",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "yJxF5iyQB1PTyjh7",
          "name": "Daredevil Strike",
          "kind": "action",
          "description": "Frequency once per round\nEffect The gnome daredevil Strides up to their Speed, makes a melee Strike, then Steps.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.e4NwsnPnpQKbDZ9F",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.e4NwsnPnpQKbDZ9F",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "e4NwsnPnpQKbDZ9F",
          "sourceId": "e4NwsnPnpQKbDZ9F",
          "name": "Composite Shortbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "vWTPLW8PSkrVSutE",
          "name": "Composite Shortbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.oSQET5hKn9q4xlrl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.oSQET5hKn9q4xlrl",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "oSQET5hKn9q4xlrl",
          "sourceId": "oSQET5hKn9q4xlrl",
          "name": "Gnome Flickmace",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "5A80vMir2vu7Jsa1",
          "name": "Gnome Flickmace",
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
          "sourceId": "Tooxe3WgMxLJtcRi",
          "name": "Arrows",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:natural-scientist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "V6UV4BeMRUUwGL0g",
      "slug": "natural-scientist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ce7e8647d86e206c7d82d1deab9bdf87656568a86de3fe5548395d28fcc288ff",
    "translatableHash": "sha256:a0447bdcde796062e3f0b8365af32d7dfabbcc70b04335ab5301b98d9712545b",
    "data": {
      "schemaVersion": 1,
      "name": "Natural Scientist",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "If there's a mystery of nature that requires firsthand evidence to solve, natural scientists collect that data. They spend months documenting and observing events and creatures in the natural world before returning to their academies, labs, and royal studies.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 16,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 5,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "diplomacy": 5,
        "nature": 8,
        "stealth": 5,
        "survival": 8
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
          "id": "uYTSctRREWh8PryK",
          "name": "Staff",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "jBgZFYd3SvvHv1KH",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "wkO4fO3TUfSOlS1L",
          "name": "Rock",
          "bonus": 7,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "pMx5SDJGEVNxou0W",
          "name": "Never Lost",
          "kind": "passive",
          "description": "The natural scientist can always tell true north and gains a +4 circumstance bonus to Survival checks to [[/act sense-direction]]. They don't take a –2 item penalty to the check if they don't have a compass.",
          "traits": []
        },
        {
          "id": "EM9WrQDpMNyR0Orl",
          "name": "Trained Observer",
          "kind": "passive",
          "description": "The natural scientist is accustomed to blending into their surroundings and taking notes, giving them a +2 circumstance bonus to [[/act gather-information]].",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "3oq7spYRhzszPxuH",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dDIPA1WE9ESF67EB",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dDIPA1WE9ESF67EB",
          "sourceId": "dDIPA1WE9ESF67EB",
          "name": "Explorer's Clothing",
          "type": "armor"
        },
        "owner": {
          "sourceId": "TKfNKhOnkYjDSODF",
          "name": "Explorer's Clothing",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.QJb8S927Yj81EgHH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "QJb8S927Yj81EgHH",
          "sourceId": "QJb8S927Yj81EgHH",
          "name": "Writing Set",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "JII2eqW37dFuTdkG",
          "name": "Writing Set",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:driver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "XnfZwf1g4rfan1gY",
      "slug": "driver",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:63028d48a5a01188c7236a968feb2fb6f179c28a564462d8b43ba161d1d9a12b",
    "translatableHash": "sha256:56221f40bd677f2936062f261fb921b254d3bacd69262175efe1372e87af0835",
    "data": {
      "schemaVersion": 1,
      "name": "Driver",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "With daring and charm, a driver is a professional operator of mechanical vehicles. Their skill and recklessness give them a reputation that puts even the quickest horse riders to shame. A driver's vehicle becomes an extension of themselves, allowing the driver to perform near-impossible feats of maneuverability. Drivers have other tricks up their sleeve, as their charm is undeniable. When needed, they can talk, lie, or frighten their way out of a bumpy situation in and out of a vehicle.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 18,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 7,
        "deception": 7,
        "intimidation": 7,
        "stealth": 8
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
          "id": "gIHBvsCEvtiepUib",
          "name": "Crowbar",
          "bonus": 7,
          "damage": "1d6+3 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "YhR8IO57dhN08R3V",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "YZ4XM8gDyl1912HS",
          "name": "Hand Crossbow",
          "bonus": 10,
          "damage": "1d6+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "8rw20PYuXAFXG0jj",
          "name": "Driving Specialist",
          "kind": "passive",
          "description": "For encounters involving driving, the driver is an 8th-level challenge.",
          "traits": []
        },
        {
          "id": "XEKSlbtSWvjRWvzi",
          "name": "Express Driver",
          "kind": "passive",
          "description": "A driver can attempt a check (driving-lore) check to increase a vehicle's travel Speed when calculating the value for a day. The DC is determined by the GM but is typically based on the vehicle's piloting DC or the difficulty of traversing the environment, whichever is harder. On a success, increase the vehicle's travel Speed by half.",
          "traits": []
        },
        {
          "id": "7Ru0AVY5PhTUBFed",
          "name": "Skilled Driver",
          "kind": "passive",
          "description": "The driver gains a +10 circumstance bonus to any skill check involved in driving a vehicle, and is considered a master in the skill for such checks. This bonus also applies to any initiative roll while the driver is piloting a vehicle.",
          "traits": []
        },
        {
          "id": "iGEnHhvX5zg1Tocx",
          "name": "+6 Status to All Defenses While Driving",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "GhMdQXRxXKeM7lzy",
          "name": "Vehicle Block",
          "kind": "reaction",
          "description": "Requirements The driver is driving a vehicle\nTrigger The driver would take damage from an attack or from a damaging effect that requires a Reflex save\nEffect With swift steering, the driver puts the bulk of the vehicle in between themself and the problem, causing the vehicle to take the damage instead of the driver.",
          "traits": []
        },
        {
          "id": "dJlALdFes4OIpoMj",
          "name": "Sideswipe",
          "kind": "reaction",
          "description": "Requirements The driver is taking a Drive action with a vehicle and moves the vehicle adjacent to a creature\nEffect All creatures adjacent to the vehicle take the vehicle's collision damage with a check (reflex, basic) save against the vehicle's collision DC. The vehicle continues to move normally after the Sideswipe.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "XyA6PKV46aNlLXOd",
          "sourceId": "XyA6PKV46aNlLXOd",
          "name": "Hand Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "9XR13rQ5ETSGrgk8",
          "name": "Hand Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "ZQEhHN0VkbrIs7KE",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.44F1mfJei4GY8f2X",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.44F1mfJei4GY8f2X",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "44F1mfJei4GY8f2X",
          "sourceId": "44F1mfJei4GY8f2X",
          "name": "Crowbar",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "BkpssBYiy0vXq7Ad",
          "name": "Crowbar",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "7HACm5VK9ypr2Uwd",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:drunkard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "xxH95k9qf6lLit4W",
      "slug": "drunkard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0292069a79e256dfabf1b24e91f684e40b99a056699938b0257db638f114b8b8",
    "translatableHash": "sha256:9e981c1d46e717e92612bdb2ae8c71dc9ed6d11ce32a2ca792689bea83e918af",
    "data": {
      "schemaVersion": 1,
      "name": "Drunkard",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Every tavern has one-that person who drinks a little too much and starts a fight. While many drunkards are relatively harmless, a few have a hair trigger, and when they're set off come, no one-even the drunkard themself-can tell you what started the row.\nCountless adventures begin in a tavern or a pub. Maybe it's because such places attract the risk-prone, or maybe it's because everyone needs a little liquid courage before they decide to take on a group of rampaging ogres.",
      "armorClass": 17,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 4,
        "int": -1,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "athletics": 7,
        "intimidation": 8
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
          "id": "Bre79vI4roX7eGSB",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "VtGXx6gZ4Ezl8Mcp",
          "name": "Pewter Mug",
          "bonus": 8,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "UzdMoqfj4XsqRriz",
          "name": "Drunken Flailing",
          "kind": "action",
          "description": "Requirements The drunkard is raging\nEffect The drunkard attempts two fist Strikes, each against a different creature.",
          "traits": []
        },
        {
          "id": "gHkZ5EkRCbXagaxl",
          "name": "Drunken Rage",
          "kind": "action",
          "description": "Requirements The drunkard is drunk, and isn't Fatigued or raging\nEffect The drunkard flies into a drunken rage. They gain 6 temporary Hit Points that last until the drunken rage ends. While raging, they deal 4 additional damage with melee attacks and take a –1 penalty to AC. The drunkard can't use concentrate actions except Seek. The rage lasts for 1 minute, until the drunkard falls Unconscious, or until the drunkard sobers up. The drunkard can't voluntarily stop raging. Once the rage ends, the drunkard can't gain temporary HP from this action for 1 minute.",
          "traits": [
            "concentrate",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "RKa2PsbkATet8Zb9",
          "name": "Drunkard's Outfit (Functions as Padded Armor)",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.wRSS5vP8ltrThsoC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.wRSS5vP8ltrThsoC",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "wRSS5vP8ltrThsoC",
          "sourceId": "wRSS5vP8ltrThsoC",
          "name": "Mug",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "DNrmjXUT1oMnmx43",
          "name": "Pewter Mug",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 66,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gHkZ5EkRCbXagaxl",
          "name": "Drunken Rage",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 418,
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
          "sourceId": "gHkZ5EkRCbXagaxl",
          "name": "Drunken Rage",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 518,
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
          "sourceId": "gHkZ5EkRCbXagaxl",
          "name": "Drunken Rage",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:astronomer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Y0MSOv0l5ePhP3Co",
      "slug": "astronomer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8c810a2e506cf9d2852b7e43f560a45913a5245893903b553da72e4ffb746e05",
    "translatableHash": "sha256:ba957f579b9a77bf80d897df52e033128bd80d1361ba9dd3011f515f1e0edede",
    "data": {
      "schemaVersion": 1,
      "name": "Astronomer",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Different cultures have created stories about the hows and whys of the universe, if things exist beyond the stars, and if the gods manipulate the heavenly bodies. But astronomers aren't interested in folktales—they desire truth.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 15,
      "hitPoints": 23,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 2,
        "int": 4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "arcana": 8,
        "occultism": 8
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
          "id": "Vz4DYAJUl9kelFni",
          "name": "Staff",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "HSovA0NSIx8h4E3W",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "rxhsNPSPQ1q9Zs6z",
          "name": "Living Sextant",
          "kind": "passive",
          "description": "If the astronomer is able to see the night sky, they can [[/act sense-direction skill=astronomy-lore]] using Astronomy Lore.",
          "traits": []
        },
        {
          "id": "igVLowndFt66q36p",
          "name": "Reject Myth",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet Casts a Spell or uses an ability with the fortune or misfortune trait\nEffect The astronomer's rejection of such fantasy becomes manifest. The astronomer attempts to counteract the triggering effect with a counteract modifier of [[/r 1d20+9 #Counteract]] and a counteract rank of 1.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "OTCwjYQZzd5T0upd",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "dU3LgILZHrxZHWQu",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "7QIC1bWWcM97BOyZ",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "4EiLNlkHEdkQDS46",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "GGolDAUWdToCZ6cR",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "qDEMtM3DOBnbPrl5",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "ezwyg4BqcGBeWFYw",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "KiV4f96WciwxTxoY",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "Pi9Whk8mGy47hDWG",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "KYmTdc8dY85mdjXG",
              "name": "Telekinetic Projectile",
              "rank": 1
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
        "uuid": "Compendium.pf2e.spells-srd.Item.4WAib3GichxLjp5p",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4WAib3GichxLjp5p",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4WAib3GichxLjp5p",
          "sourceId": "4WAib3GichxLjp5p",
          "name": "Alarm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "dU3LgILZHrxZHWQu",
          "name": "Alarm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FVjTuBCIefAgloUU",
          "sourceId": "FVjTuBCIefAgloUU",
          "name": "Staff",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "uO6HMPltzVLTtvsm",
          "name": "Staff",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FOWF5f0tCaApv9RE",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FOWF5f0tCaApv9RE",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FOWF5f0tCaApv9RE",
          "sourceId": "FOWF5f0tCaApv9RE",
          "name": "Spellbook (Blank)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "EozEU2EXtYF3roQx",
          "name": "Spellbook",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gpzpAAAJ1Lza2JVl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gpzpAAAJ1Lza2JVl",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "7QIC1bWWcM97BOyZ",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Invisibility Potion",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility Potion",
          "sourceId": "bikFUFRLwfdvX2x2",
          "name": "Invisibility Potion",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "7QIC1bWWcM97BOyZ",
          "name": "Detect Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.TTwOKGqmZeKSyNMH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.TTwOKGqmZeKSyNMH",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "TTwOKGqmZeKSyNMH",
          "sourceId": "TTwOKGqmZeKSyNMH",
          "name": "Gentle Landing",
          "type": "spell"
        },
        "owner": {
          "sourceId": "4EiLNlkHEdkQDS46",
          "name": "Gentle Landing",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.xqmHD8JIjak15lRk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.xqmHD8JIjak15lRk",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "xqmHD8JIjak15lRk",
          "sourceId": "xqmHD8JIjak15lRk",
          "name": "Phantasmal Minion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GGolDAUWdToCZ6cR",
          "name": "Phantasmal Minion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 16,
        "uuid": "Compendium.pf2e.pathfinder-bestiary.Actor.Phantasmal Minion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-bestiary.Actor.Phantasmal Minion",
          "package": "pf2e",
          "sourcePack": "pathfinder-bestiary",
          "documentType": "Actor",
          "compendiumKey": "Phantasmal Minion",
          "sourceId": "j7NNPfZwD19BwSEZ",
          "name": "Phantasmal Minion",
          "type": "npc"
        },
        "owner": {
          "sourceId": "GGolDAUWdToCZ6cR",
          "name": "Phantasmal Minion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 160,
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
          "sourceId": "GGolDAUWdToCZ6cR",
          "name": "Phantasmal Minion",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "OhD2Z6rIGGD5ocZA",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qDEMtM3DOBnbPrl5",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Identify Magic",
          "sourceId": "eReSHVEPCsdkSL4G",
          "name": "Identify Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "qDEMtM3DOBnbPrl5",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.AUctDF2fqPZN2w4W",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "AUctDF2fqPZN2w4W",
          "sourceId": "AUctDF2fqPZN2w4W",
          "name": "Sigil",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ezwyg4BqcGBeWFYw",
          "name": "Sigil",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.o4lRVTwSxnOOn5vl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.o4lRVTwSxnOOn5vl",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "o4lRVTwSxnOOn5vl",
          "sourceId": "o4lRVTwSxnOOn5vl",
          "name": "Sleep",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KiV4f96WciwxTxoY",
          "name": "Sleep",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 89,
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
          "sourceId": "KiV4f96WciwxTxoY",
          "name": "Sleep",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 173,
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
          "sourceId": "KiV4f96WciwxTxoY",
          "name": "Sleep",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "pwzdSlJgYqN7bs2w",
          "sourceId": "pwzdSlJgYqN7bs2w",
          "name": "Telekinetic Hand",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Pi9Whk8mGy47hDWG",
          "name": "Telekinetic Hand",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.60sgbuMWN0268dB7",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.60sgbuMWN0268dB7",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "60sgbuMWN0268dB7",
          "sourceId": "60sgbuMWN0268dB7",
          "name": "Telekinetic Projectile",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KYmTdc8dY85mdjXG",
          "name": "Telekinetic Projectile",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:juggler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "zeu7M3M3wYt9O3M5",
      "slug": "juggler",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7538c9812c8458a6a328086d7382b7bc87af757bba1696d71445f2fb430dcf33",
    "translatableHash": "sha256:da0711ca6c8395cb705dab50b680ea756f6965403770a52e39115ecc5153dea3",
    "data": {
      "schemaVersion": 1,
      "name": "Juggler",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Jugglers are physical performers who master the art of manipulating props. Usually, this involves throwing multiple objects up in a flowing pattern, but some use ricocheting items, spinning items, or other objects to keep them aloft.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "performance": 11
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
          "id": "6227QANYphGGDy7Q",
          "name": "Dart",
          "bonus": 10,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "jNI7CIgS6mQAUEli",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Ys0IAvFt0XTVhz7g",
          "name": "Torch",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning; 1 fire",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "P3bLKNysBqFuq8Ro",
          "name": "Juggling Club",
          "bonus": 9,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "z8tuZg8djuABKn5H",
          "name": "Juggling Club",
          "bonus": 10,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "f4Y8iYvF0bqwVdWN",
          "name": "Juggling Specialist",
          "kind": "passive",
          "description": "For encounters involving juggling and other circus acts, the juggler is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "cCwejLZc4B8akh8l",
          "name": "Return Throw",
          "kind": "reaction",
          "description": "Trigger A physical ranged attack with a throwing weapon critically fails to hit the juggler\nEffect The juggler snatches the weapon from the air and immediately makes a ranged Strike against the attacker using that weapon.",
          "traits": []
        },
        {
          "id": "6DCBFxqTA6NPJRzi",
          "name": "Juggle",
          "kind": "action",
          "description": "The juggler begins juggling up to three items of light or negligible Bulk. They can choose items in their hands or Interact to draw items on their person or pick up unattended items in reach. While juggling, they can Interact to add up to two items to their juggle, though they must drop an item for each one they add. The juggler is wielding all items they juggle, but the only actions they can take that require their hands are Return Throw, Juggling Bounce, Strike using a juggled weapon, Interact to add items to their juggle, or Dismiss to stop juggling.\nWhen the juggler Dismisses Juggle, they can choose to continue to wield, drop, or stow each juggled item, though they can't wield more items than they have hands. If at any point the juggler isn't wielding any items or becomes Restrained or Unconscious, the juggle ends and the juggler drops all the items.",
          "traits": [
            "concentrate",
            "manipulate"
          ]
        },
        {
          "id": "a6NYStpQRrBO2h1H",
          "name": "Juggling Bounce",
          "kind": "action",
          "description": "The juggler Strikes with a thrown weapon they're juggling. If the Strike hits, the weapon bounces to a different creature in the weapon's first range increment. The juggler repeats the Strike, which uses the same multiple attack penalty and doesn't increase their multiple attack penalty.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Tt4Qw64fwrxhr5gT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Tt4Qw64fwrxhr5gT",
          "sourceId": "Tt4Qw64fwrxhr5gT",
          "name": "Dart",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "6kyt4rFntWRECwNV",
          "name": "Dart",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "gSellUVmDLShUpsS",
          "name": "Juggling Club (Functions as a Light Hammer)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 797,
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
          "sourceId": "6DCBFxqTA6NPJRzi",
          "name": "Juggle",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 854,
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
          "sourceId": "6DCBFxqTA6NPJRzi",
          "name": "Juggle",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "8Jdw4yAzWYylGePS",
          "sourceId": "8Jdw4yAzWYylGePS",
          "name": "Torch",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "W3ZIIUS0vFJwPI5q",
          "name": "Torch",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:smith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "0So6avVuyVG7YOfs",
      "slug": "smith",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:475cea78ec967d7abba0d04445e73c68aa957662d46fce1034d2f0cc9c4cf29d",
    "translatableHash": "sha256:92ffe22cf160b9d2548a9b437b70d7cb8b30dbb5ab5aab75cacc8845f649de88",
    "data": {
      "schemaVersion": 1,
      "name": "Smith",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Most smaller communities have at least one smithy where locals and travelers can have horses shod or equipment repaired. Larger settlements and cities often have a variety of smiths, many specializing in blacksmithing, weapon smithing, armor smithing, or even smelting coins in a mint.\nExpertise is forged through years of effort and often tedious work. Artisans are masters of their craft, able to create works both practical and beautiful.",
      "armorClass": 17,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 3,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 8,
        "crafting": 15,
        "diplomacy": 5,
        "society": 8
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
          "id": "u3RFdo6uA3yPenzC",
          "name": "Light Hammer",
          "bonus": 10,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "wLxqjBiRMADtMrlV",
          "name": "Light Hammer",
          "bonus": 8,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "By0PqPmCya8kRIiN",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "akyWHNnv3f19dRcO",
          "name": "Smithing Specialist",
          "kind": "passive",
          "description": "For encounters involving smithing or other crafting tasks, the smith is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "CUkJIaXcAVXlBYoH",
          "name": "Smith's Fury",
          "kind": "passive",
          "description": "The smith deals an additional 1d6 damage when they hit with a weapon they created.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FibwLZ12EIEwLGhw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FibwLZ12EIEwLGhw",
          "sourceId": "FibwLZ12EIEwLGhw",
          "name": "Light Hammer",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Rm6J4HPXVTN3FAQC",
          "name": "Light Hammer",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "Xja3Z5ROmRPkUeeO",
          "name": "Leather Apron",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "gT3ZrawjU8wmp8zo",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:martial-student",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "13mJkhzJX1jt5aPF",
      "slug": "martial-student",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5559b5171054d2a256cd43584dda17c1b54ac6c2516975d6f1793ce1c9ebd515",
    "translatableHash": "sha256:6823f89dfe99b043a325402d9b49b58bfebef2fc99305733fd4492ed0fa15d0f",
    "data": {
      "schemaVersion": 1,
      "name": "Martial Student",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Every warrior must begin somewhere.\nMartial artists strive to master the art of hand-to-hand fighting.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 35,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 10
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
          "id": "JHCTJekhRGBdqeOj",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "kdAp5jXP7wcfgQyX",
          "name": "Fancy Footwork",
          "kind": "action",
          "description": "The martial student Steps and Strides in any order.",
          "traits": []
        },
        {
          "id": "PjqwihmMf7cPnPtH",
          "name": "Flurry of Blows",
          "kind": "action",
          "description": "Frequency once per round\nEffect The martial student makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses.",
          "traits": []
        },
        {
          "id": "nrV7U6vtd1tSnRpu",
          "name": "Powerful Fists",
          "kind": "passive",
          "description": "The martial student's fist Strikes don't take penalties when making lethal attacks.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:jailer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "4okKASZDvBWTSu1U",
      "slug": "jailer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e7492de87e543b6109d95ee67bc1cf04eb9e977896561bc52147c4bd45b4a8cb",
    "translatableHash": "sha256:590a1325922d78f42a3995ca65004e386b5449a3703bdcc429d036eeddb728e3",
    "data": {
      "schemaVersion": 1,
      "name": "Jailer",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A jailer's primary responsibility is to keep prisoners from escaping. Jailers must often use force, or the threat of force, to keep their charges in line, as even the most carefully crafted cells, manacles, or chains can fail with time and persistence when the prisoners have the will to attempt an escape.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 11,
        "diplomacy": 5,
        "intimidation": 7
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
          "id": "phnggMzXOyEB9A1S",
          "name": "Club",
          "bonus": 11,
          "damage": "1d6+8 bludgeoning",
          "traits": []
        },
        {
          "id": "KhEHpoNP1iXOpths",
          "name": "Club",
          "bonus": 10,
          "damage": "1d6+8 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "PBUJW6lepgnXuJko",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "qw0aIOiOvQLo7bUz",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "T44bgASepvXaRDpz",
          "name": "+1 Bonus on Perception to Find Concealed Objects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "v9LPjScJUDeYOtCr",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "CKzyNTs3y8kKsSFY",
          "name": "Efficient Capture",
          "kind": "action",
          "description": "Requirements The jailer has manacles in hand and is adjacent to a creature\nEffect The jailer attempts to bind the creature's wrists or ankles with the manacles. If the jailer succeeds at an attack roll with a check (efficient-capture, against:ac) modifier against the target's AC, they apply the manacles.",
          "traits": [
            "attack",
            "manipulate"
          ]
        },
        {
          "id": "Gf4bCH3UInm7pjOu",
          "name": "Intimidating Strike",
          "kind": "action",
          "description": "The jailer makes a melee Strike. If it hits and deals damage, the target is Frightened 1, or Frightened 2 on a critical hit.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "X7QR8UnnfPH6vOWK",
          "name": "Subdue Prisoners",
          "kind": "passive",
          "description": "The jailer doesn't take the normal penalty for making a nonlethal attack when attacking with their club.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.c58wczIzH2gzeXQL",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "c58wczIzH2gzeXQL",
          "sourceId": "c58wczIzH2gzeXQL",
          "name": "Club",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "AUOFm6hfY7Qxb2jk",
          "name": "Club",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.62nnVQvGhoVLLl2K",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "62nnVQvGhoVLLl2K",
          "sourceId": "62nnVQvGhoVLLl2K",
          "name": "Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "bc7gZyObO7fAqov1",
          "name": "Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
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
          "sourceId": "v9LPjScJUDeYOtCr",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 79,
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
          "sourceId": "Gf4bCH3UInm7pjOu",
          "name": "Intimidating Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 151,
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
          "sourceId": "Gf4bCH3UInm7pjOu",
          "name": "Intimidating Strike",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "9StwfBmipoVGUI8u",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ckGYDocGEaelHfXF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ckGYDocGEaelHfXF",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ckGYDocGEaelHfXF",
          "sourceId": "ckGYDocGEaelHfXF",
          "name": "Manacles (Simple)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ZdBH7lO0jXycsk9L",
          "name": "Manacles (Simple)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.USHK6XQRwmq17xKh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "USHK6XQRwmq17xKh",
          "sourceId": "USHK6XQRwmq17xKh",
          "name": "Signal Whistle",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "d5ucf01p3tdwqj4M",
          "name": "Signal Whistle",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "XKwspfwpq1KxRoi4",
          "name": "Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:troubadour",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "55t4OPNXDx6fAeZd",
      "slug": "troubadour",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ada6abb03162e370372adf4376c0e0d7c1d367eb87cebe20619166d10bd2dfe6",
    "translatableHash": "sha256:d16e3072c82347d641fe3461f221113c5133647af8586adb4042ddc81bd14fe3",
    "data": {
      "schemaVersion": 1,
      "name": "Troubadour",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Troubadours keep alive the traditional songs of their culture and write original works to commemorate major events.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "deception": 9,
        "diplomacy": 9,
        "occultism": 7,
        "performance": 13,
        "society": 7,
        "stealth": 8
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
          "id": "yAk7aiu08rTizR5c",
          "name": "Rapier",
          "bonus": 11,
          "damage": "1d6+4 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "2ZVFUU7YZvt6dUnL",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "p0JGAWaRJxrH24fB",
          "name": "Bardic Lore",
          "kind": "passive",
          "description": "The troubadour can Recall Knowledge on any subject with a +7 modifier.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "owBd74YHegCqxDhR",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "VGA1iSyrcPKgHrP0",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "22eKZhlx9ut3L5Me",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "XQxfGZfu7Xl9jLCh",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Eh5zAhyl6LzIVQv1",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "zjWAeu9EUAZJp12n",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "sfzfmWwrA5XINACJ",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "aU7lNsU1fcBsiXd0",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "QyrlPqBnTGqaCbv8",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "4BCOzVI0KSryWDf8",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "vkONGARlJOm4NqMI",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "BgTxXOH98Wffuvj1",
              "name": "Embed Message",
              "rank": 2
            }
          ]
        },
        {
          "id": "DipxFEdiddYHWirp",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "hSvxlM1f57E4FC8w",
              "name": "Counter Performance",
              "rank": 1
            },
            {
              "id": "aA8mm16AXqcWrGsF",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "kpCgWBqB6OslFYxu",
              "name": "Lingering Composition",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.irTdhxTixU9u9YUm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.irTdhxTixU9u9YUm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "irTdhxTixU9u9YUm",
          "sourceId": "irTdhxTixU9u9YUm",
          "name": "Lingering Composition",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kpCgWBqB6OslFYxu",
          "name": "Lingering Composition",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
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
          "sourceId": "zjWAeu9EUAZJp12n",
          "name": "Message",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Qw3fnUlaUbnn7ipC",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "sfzfmWwrA5XINACJ",
          "name": "Prestidigitation",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.OhD2Z6rIGGD5ocZA",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "OhD2Z6rIGGD5ocZA",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "aU7lNsU1fcBsiXd0",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Identify Magic",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Identify Magic",
          "sourceId": "eReSHVEPCsdkSL4G",
          "name": "Identify Magic",
          "type": "action"
        },
        "owner": {
          "sourceId": "aU7lNsU1fcBsiXd0",
          "name": "Read Aura",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.szIyEsvihc5e1w8n",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.szIyEsvihc5e1w8n",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "szIyEsvihc5e1w8n",
          "sourceId": "szIyEsvihc5e1w8n",
          "name": "Soothe",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QyrlPqBnTGqaCbv8",
          "name": "Soothe",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 231,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Soothe",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Soothe",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Soothe",
          "sourceId": "nkk4O5fyzrC0057i",
          "name": "Spell Effect: Soothe",
          "type": "effect"
        },
        "owner": {
          "sourceId": "QyrlPqBnTGqaCbv8",
          "name": "Soothe",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yV7Ouzaoe7DHLESI",
          "sourceId": "yV7Ouzaoe7DHLESI",
          "name": "Ventriloquism",
          "type": "spell"
        },
        "owner": {
          "sourceId": "4BCOzVI0KSryWDf8",
          "name": "Ventriloquism",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/16/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.tH5GirEy7YB3ZgCk",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "tH5GirEy7YB3ZgCk",
          "sourceId": "tH5GirEy7YB3ZgCk",
          "name": "Rapier",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "X78dD9clLZtyOSAd",
          "name": "Rapier",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/17/_stats/compendiumSource",
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
          "sourceId": "9Ymyl8Jtzs0HVxpt",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/18/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MPv5Yx4w7scZGj2Y",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "wJwF7vhkxxkiLdKt",
          "name": "Lute (Handheld Musical Instrument)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/19/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.G5WuYX1ghrZcJ1J1",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "G5WuYX1ghrZcJ1J1",
          "sourceId": "G5WuYX1ghrZcJ1J1",
          "name": "Illustrated book",
          "type": "treasure"
        },
        "owner": {
          "sourceId": "DJcssfmvEXxJU37q",
          "name": "Poetry Book",
          "type": "treasure"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.b515AZlB0sridKSq",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.b515AZlB0sridKSq",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "b515AZlB0sridKSq",
          "sourceId": "b515AZlB0sridKSq",
          "name": "Calm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vkONGARlJOm4NqMI",
          "name": "Calm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 650,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Calm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Calm",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Calm",
          "sourceId": "Qr5rgoZvI4KmFY0N",
          "name": "Spell Effect: Calm",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vkONGARlJOm4NqMI",
          "name": "Calm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/22/system/description/value",
        "sourceIndex": 22,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "p0JGAWaRJxrH24fB",
          "name": "Bardic Lore",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.eIQ86FOXK34HiNLs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.eIQ86FOXK34HiNLs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "eIQ86FOXK34HiNLs",
          "sourceId": "eIQ86FOXK34HiNLs",
          "name": "Embed Message",
          "type": "spell"
        },
        "owner": {
          "sourceId": "BgTxXOH98Wffuvj1",
          "name": "Embed Message",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
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
          "sourceId": "VGA1iSyrcPKgHrP0",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
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
          "sourceId": "VGA1iSyrcPKgHrP0",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
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
          "sourceId": "VGA1iSyrcPKgHrP0",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WILXkjU5Yq3yw10r",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WILXkjU5Yq3yw10r",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WILXkjU5Yq3yw10r",
          "sourceId": "WILXkjU5Yq3yw10r",
          "name": "Counter Performance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "hSvxlM1f57E4FC8w",
          "name": "Counter Performance",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.IAjvwqgiDr3qGYxY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.IAjvwqgiDr3qGYxY",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "IAjvwqgiDr3qGYxY",
          "sourceId": "IAjvwqgiDr3qGYxY",
          "name": "Courageous Anthem",
          "type": "spell"
        },
        "owner": {
          "sourceId": "aA8mm16AXqcWrGsF",
          "name": "Courageous Anthem",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 202,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Courageous Anthem",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Courageous Anthem",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Courageous Anthem",
          "sourceId": "beReeFroAx24hj83",
          "name": "Spell Effect: Courageous Anthem",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aA8mm16AXqcWrGsF",
          "name": "Courageous Anthem",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "22eKZhlx9ut3L5Me",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "22eKZhlx9ut3L5Me",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XQxfGZfu7Xl9jLCh",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "XQxfGZfu7Xl9jLCh",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "XQxfGZfu7Xl9jLCh",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.i35dpZFI7jZcRoBo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.i35dpZFI7jZcRoBo",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "i35dpZFI7jZcRoBo",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Eh5zAhyl6LzIVQv1",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 649,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "Eh5zAhyl6LzIVQv1",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 1800,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Illusory Disguise",
          "sourceId": "3Ktyd5F9lOPo4myk",
          "name": "Spell Effect: Illusory Disguise",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Eh5zAhyl6LzIVQv1",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tonic-merchant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "7qpH6PeW97Bjrxox",
      "slug": "tonic-merchant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f6fce34ef60dcbee2d9d6802cf23cd7b91ecfb5b58b2ca1b3e807aeef79085de",
    "translatableHash": "sha256:7894aa63e41ebeb742223fd30b1d9c8da9d88310ecabed9304038a837ba98e81",
    "data": {
      "schemaVersion": 1,
      "name": "Tonic Merchant",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "This alchemist sells healing potables, but might offer their services without a fee to those truly in need.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 17,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "crafting": 11,
        "diplomacy": 9,
        "medicine": 10,
        "society": 9
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
          "id": "cN2lSRoK6TR2kk7n",
          "name": "Acid Flask (Moderate)",
          "bonus": 10,
          "damage": "2d6 acid; 2 acid",
          "traits": [
            "splash",
            "thrown-30"
          ]
        },
        {
          "id": "f58uB4ARTIjS5kCc",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "idqLNj6r87rVasgv",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "R63mkwaYhLEfcnvf",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "kind": "action",
          "description": "The tonic merchant quickly crafts a Antidote (Lesser), Antiplague (Lesser), or Elixir of Life (Minor) and lobs it at a willing or Unconscious ally within 30 feet. The elixir affects the ally as though they imbibed it.\nThe tonic merchant can use the rarest materials in their toolkit to improve the item to a Antidote (Moderate), Antiplague (Moderate), or Elixir of Life (Lesser). Afterward, they must spend 10 minutes gathering new ingredients before they can do so again.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.SgtqZxt26BdjUmEB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.SgtqZxt26BdjUmEB",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "SgtqZxt26BdjUmEB",
          "sourceId": "SgtqZxt26BdjUmEB",
          "name": "Acid Flask (Moderate)",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "Jc5N0riyRQ0xbabE",
          "name": "Acid Flask (Moderate)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "FS9eQaeuOQg8tEUH",
          "name": "Dagger",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.4ftXXUCBHcf4b0MH",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "4ftXXUCBHcf4b0MH",
          "sourceId": "4ftXXUCBHcf4b0MH",
          "name": "Alchemist's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "djtlFopP6aRUWkxo",
          "name": "Alchemist's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.qCEOZ6109Yo34tRx",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "qCEOZ6109Yo34tRx",
          "sourceId": "qCEOZ6109Yo34tRx",
          "name": "Formula Book (Blank)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "wK00jrioaCVulJHQ",
          "name": "Formula Book",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "s1vB3HdXjMigYAnY",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "4WuyiRKbnxUnB1pj",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 87,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "4WuyiRKbnxUnB1pj",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 149,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "4WuyiRKbnxUnB1pj",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "4WuyiRKbnxUnB1pj",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "4WuyiRKbnxUnB1pj",
          "name": "Healer's Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 39,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Antidote (Lesser)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Antidote (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Antidote (Lesser)",
          "sourceId": "ktjFOp3U0wQD9t0Z",
          "name": "Antidote (Lesser)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 100,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Antiplague (Lesser)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Antiplague (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Antiplague (Lesser)",
          "sourceId": "UqinuuCWePTYGhVO",
          "name": "Antiplague (Lesser)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 166,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Minor)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Minor)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Elixir of Life (Minor)",
          "sourceId": "hDLbR56Id2OtU318",
          "name": "Elixir of Life (Minor)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 259,
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
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 487,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Antidote (Moderate)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Antidote (Moderate)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Antidote (Moderate)",
          "sourceId": "AJ1dC7EtTIfBey0M",
          "name": "Antidote (Moderate)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 550,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Antiplague (Moderate)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Antiplague (Moderate)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Antiplague (Moderate)",
          "sourceId": "biRbqKo2C97XLfQ0",
          "name": "Antiplague (Moderate)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 618,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Lesser)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Elixir of Life (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Elixir of Life (Lesser)",
          "sourceId": "TZUskLT7yvP7N2co",
          "name": "Elixir of Life (Lesser)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QsjbLeDKamnD8lfk",
          "name": "Healing Bomb",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:traveling-actor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "A8jeXP2XNUSsdXhs",
      "slug": "traveling-actor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3f56a433ab3566b19c2f214e27ea47003eb737bc37181c53b7fa02b7a780af95",
    "translatableHash": "sha256:aadf48ea6e03750087eb357171afc9205b1f2395527a1743b75c15ea28678da4",
    "data": {
      "schemaVersion": 1,
      "name": "Traveling Actor",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The life of a traveling actor is, contrary to belief, not one of glamor but effort. To be on the road going from town to town wearing a thousand faces invites little reward, save the adoration of the crowd. Even so, this is where they thrive. Actors typically travel in troupes, composed not only of other actors but also of stagehands, drivers, and assorted hangers-on. All of them fall under the thumb of a singular director, acting as both parent and manager to all within the troupe.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 18,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7,
        "deception": 10,
        "performance": 10,
        "society": 9
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
          "id": "ZPHJ8WL6kepBQ40K",
          "name": "Wooden Sword",
          "bonus": 12,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove"
          ]
        },
        {
          "id": "k4NbO19e7XHHGiYN",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "GVqy4k0d3E89Jaok",
          "name": "Dramatic Death",
          "kind": "reaction",
          "description": "Trigger The traveling actor takes any damage\nEffect The traveling actor falls Prone and dramatically announces their death. They appear to have died. Anyone who is suspicious of this \"death\" can Seek to attempt a secret check (perception, against:performance, rollerRole:target, traits:secret) check against the traveling actor's Performance DC. On a success, they see through the ruse.",
          "traits": []
        },
        {
          "id": "O0QloD5rVQ3q3Ij3",
          "name": "Versatile Performance",
          "kind": "passive",
          "description": "The traveling actor can use Performance instead of Diplomacy to [[/act make-an-impression statistic=performance]] and instead of Intimidation to [[/act demoralize statistic=performance]].",
          "traits": []
        },
        {
          "id": "rnHh5tgPOQAnpPh8",
          "name": "Overacted Strike",
          "kind": "action",
          "description": "The traveling actor puts all their expertise into an attack that strikes fear in those who witness it. The traveling actor Strikes. On a success, the traveling actor chooses another creature within 30 feet who can see the attack, who becomes Frightened 1 (or Frightened 2 on a critical success).",
          "traits": [
            "emotion",
            "fear",
            "mental",
            "visual"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.x1TOpwH755Ami5bC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.x1TOpwH755Ami5bC",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "x1TOpwH755Ami5bC",
          "sourceId": "x1TOpwH755Ami5bC",
          "name": "Light Mace",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "V6aErisOZPa0i947",
          "name": "Wooden Sword (Functions as a Light Mace)",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zBYEU9E7034ENCmh",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zBYEU9E7034ENCmh",
          "sourceId": "zBYEU9E7034ENCmh",
          "name": "Padded Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "EHiTnonsbXDV55Ry",
          "name": "Padded Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 127,
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
          "sourceId": "GVqy4k0d3E89Jaok",
          "name": "Dramatic Death",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 287,
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
          "sourceId": "GVqy4k0d3E89Jaok",
          "name": "Dramatic Death",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 245,
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
          "sourceId": "rnHh5tgPOQAnpPh8",
          "name": "Overacted Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 317,
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
          "sourceId": "rnHh5tgPOQAnpPh8",
          "name": "Overacted Strike",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:charlatan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BcJ36KvuUysWW3BD",
      "slug": "charlatan",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d352f655f52f2ff08c47f99670889a79f83520f278ca9c2547ef312a0e380982",
    "translatableHash": "sha256:ab6b720cd32c9f6c47b24bc1536cb503f0013306fabdfc33154714484e05e5ea",
    "data": {
      "schemaVersion": 1,
      "name": "Charlatan",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Charlatans use pretense and misdirection to swindle money and other valuables from the credulous and confused.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "deception": 11,
        "diplomacy": 9,
        "occultism": 7,
        "performance": 11,
        "society": 7,
        "stealth": 8,
        "thievery": 8
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
          "id": "ShvU5c3eNvpu7NSs",
          "name": "Shortsword",
          "bonus": 10,
          "damage": "1d6+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "P2ky9f2YijdmoVk9",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "SS65XiO7escuhKa2",
          "name": "Whip",
          "bonus": 10,
          "damage": "1d4+2 slashing",
          "traits": [
            "disarm",
            "finesse",
            "nonlethal",
            "reach",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "t8D9jbYaoXXUxjCe",
          "name": "Versatile Performance",
          "kind": "passive",
          "description": "The charlatan can use their Performance skill to [[/act make-an-impression skill=performance]], to [[/act demoralize skill=performance]], and they can use an acting Performance to [[/act impersonate skill=performance]].",
          "traits": []
        },
        {
          "id": "zmdPdUEf9SjhHnTL",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The charlatan deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "ECBmark63yV59X2C",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "rgiEMmZ0nx3gTGWz",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "HJpzL6bM2peFX77E",
              "name": "Disguise Magic",
              "rank": 1
            },
            {
              "id": "HJ8yBfuRNd2s7sXs",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "YvKjq64khXsbGGbL",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "BEUeimaP7hmU2a3f",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "UMvRMaqgYAB0MbZH",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "gAhjdEKqYs1OWGa8",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "JUExnq4GQ8EvmYgE",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "uPMWk4NHonra5BLv",
              "name": "Charm",
              "rank": 2
            },
            {
              "id": "vRT7NvVK7HPPa7IE",
              "name": "Invisibility",
              "rank": 2
            }
          ]
        },
        {
          "id": "7JKronzMIeoVdmyI",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "LEZt6wJHL6G2VDsH",
              "name": "Counter Performance",
              "rank": 1
            },
            {
              "id": "kQPkXpdGxGtaJByB",
              "name": "Courageous Anthem",
              "rank": 1
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
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
          "sourceId": "BEUeimaP7hmU2a3f",
          "name": "Message",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Qw3fnUlaUbnn7ipC",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Qw3fnUlaUbnn7ipC",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "UMvRMaqgYAB0MbZH",
          "name": "Prestidigitation",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.pwzdSlJgYqN7bs2w",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "pwzdSlJgYqN7bs2w",
          "sourceId": "pwzdSlJgYqN7bs2w",
          "name": "Telekinetic Hand",
          "type": "spell"
        },
        "owner": {
          "sourceId": "gAhjdEKqYs1OWGa8",
          "name": "Telekinetic Hand",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yV7Ouzaoe7DHLESI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yV7Ouzaoe7DHLESI",
          "sourceId": "yV7Ouzaoe7DHLESI",
          "name": "Ventriloquism",
          "type": "spell"
        },
        "owner": {
          "sourceId": "JUExnq4GQ8EvmYgE",
          "name": "Ventriloquism",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.7tKkkF8eZ4iCLJtp",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "7tKkkF8eZ4iCLJtp",
          "sourceId": "7tKkkF8eZ4iCLJtp",
          "name": "Shortsword",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "qsfDoyUE4pcmDvP5",
          "name": "Shortsword",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.f1gwoTkf3Nn0v3PN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "f1gwoTkf3Nn0v3PN",
          "sourceId": "f1gwoTkf3Nn0v3PN",
          "name": "Whip",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "cdSZnfWWFQABvsY1",
          "name": "Whip",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/16/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Jvp0x2Sc82WVpExT",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Jvp0x2Sc82WVpExT",
          "sourceId": "Jvp0x2Sc82WVpExT",
          "name": "Disguise Kit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "zWRDHQgDgcflfXCf",
          "name": "Disguise Kit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/17/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.MPv5Yx4w7scZGj2Y",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "MPv5Yx4w7scZGj2Y",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "uA4DNYAmIuhSQAgl",
          "name": "Lute",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/18/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zvLyCVD8g2PdHJAc",
          "sourceId": "zvLyCVD8g2PdHJAc",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "e5Cvg8Nht7iWTPUz",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/18/system/description/value",
        "sourceIndex": 34,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
        "label": "Pick Locks",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Pick a Lock",
          "sourceId": "2EE4aF4SZpYf0R6H",
          "name": "Pick a Lock",
          "type": "action"
        },
        "owner": {
          "sourceId": "e5Cvg8Nht7iWTPUz",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/18/system/description/value",
        "sourceIndex": 101,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
        "label": "Disable Devices",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disable a Device",
          "sourceId": "cYdz2grcOcRt4jk6",
          "name": "Disable a Device",
          "type": "action"
        },
        "owner": {
          "sourceId": "e5Cvg8Nht7iWTPUz",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/18/system/description/value",
        "sourceIndex": 311,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
        "label": "Replacement Picks",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Thieves' Toolkit (Replacement Picks)",
          "sourceId": "Sw7MBLASN3xK4Y44",
          "name": "Thieves' Toolkit (Replacement Picks)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "e5Cvg8Nht7iWTPUz",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "XXqE1eY3w3z6xJCB",
          "sourceId": "XXqE1eY3w3z6xJCB",
          "name": "Invisibility",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vRT7NvVK7HPPa7IE",
          "name": "Invisibility",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
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
          "sourceId": "vRT7NvVK7HPPa7IE",
          "name": "Invisibility",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 124,
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
          "sourceId": "vRT7NvVK7HPPa7IE",
          "name": "Invisibility",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 259,
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
          "sourceId": "vRT7NvVK7HPPa7IE",
          "name": "Invisibility",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/23/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "zmdPdUEf9SjhHnTL",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/23/system/description/value",
        "sourceIndex": 56,
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
          "sourceId": "zmdPdUEf9SjhHnTL",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
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
          "sourceId": "uPMWk4NHonra5BLv",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
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
          "sourceId": "uPMWk4NHonra5BLv",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
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
          "sourceId": "uPMWk4NHonra5BLv",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WILXkjU5Yq3yw10r",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WILXkjU5Yq3yw10r",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WILXkjU5Yq3yw10r",
          "sourceId": "WILXkjU5Yq3yw10r",
          "name": "Counter Performance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LEZt6wJHL6G2VDsH",
          "name": "Counter Performance",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.IAjvwqgiDr3qGYxY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.IAjvwqgiDr3qGYxY",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "IAjvwqgiDr3qGYxY",
          "sourceId": "IAjvwqgiDr3qGYxY",
          "name": "Courageous Anthem",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kQPkXpdGxGtaJByB",
          "name": "Courageous Anthem",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 202,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Courageous Anthem",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Courageous Anthem",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Courageous Anthem",
          "sourceId": "beReeFroAx24hj83",
          "name": "Spell Effect: Courageous Anthem",
          "type": "effect"
        },
        "owner": {
          "sourceId": "kQPkXpdGxGtaJByB",
          "name": "Courageous Anthem",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rgiEMmZ0nx3gTGWz",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "rgiEMmZ0nx3gTGWz",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.PRrZ7anETWPm90YY",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.PRrZ7anETWPm90YY",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "PRrZ7anETWPm90YY",
          "sourceId": "PRrZ7anETWPm90YY",
          "name": "Disguise Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HJpzL6bM2peFX77E",
          "name": "Disguise Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 289,
        "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Detect Magic",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HJpzL6bM2peFX77E",
          "name": "Disguise Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 344,
        "uuid": "Compendium.pf2e.spells-srd.Item.Read Aura",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Read Aura",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Read Aura",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HJpzL6bM2peFX77E",
          "name": "Disguise Magic",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HJ8yBfuRNd2s7sXs",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "HJ8yBfuRNd2s7sXs",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "HJ8yBfuRNd2s7sXs",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.i35dpZFI7jZcRoBo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.i35dpZFI7jZcRoBo",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "i35dpZFI7jZcRoBo",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "YvKjq64khXsbGGbL",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 649,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "YvKjq64khXsbGGbL",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 1800,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Illusory Disguise",
          "sourceId": "3Ktyd5F9lOPo4myk",
          "name": "Spell Effect: Illusory Disguise",
          "type": "effect"
        },
        "owner": {
          "sourceId": "YvKjq64khXsbGGbL",
          "name": "Illusory Disguise",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:leaping-thief",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BfuYoV5mQVc0DrzO",
      "slug": "leaping-thief",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9bf03349ae1ac9b606015165b41f087e38c92325e747a093c0d1775642703e38",
    "translatableHash": "sha256:12437057e65cfa89bc596a9f749ec415ec9efc4281f9544b270d076b4d2aa1c6",
    "data": {
      "schemaVersion": 1,
      "name": "Leaping Thief",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "catfolk",
        "humanoid"
      ],
      "description": "Some catfolk take advantage of their natural agility to steal from those too slow to catch them. They usually target notorious misers and others who obviously have money to spare—sometimes to help the needy, sometimes for simple profit.\nCatfolk can be found traveling almost anywhere, and they are quick to settle down for a chat when they encounter fellow travelers. Some trade stories, act as guides, or operate at the fringes of polite society.",
      "armorClass": 20,
      "hitPoints": 38,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 7,
        "deception": 10,
        "society": 9,
        "stealth": 11,
        "thievery": 9
      },
      "languages": [
        "amurrun",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "QSowC2PPiDao2pnL",
          "name": "Claw Blade",
          "bonus": 11,
          "damage": "1d4+6 slashing",
          "traits": [
            "agile",
            "deadly-d8",
            "disarm",
            "finesse",
            "versatile-p"
          ]
        },
        {
          "id": "aNcGCSypV72IjAvr",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d4+6 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HaCumRnJZVkFp3En",
          "name": "Coiled Leap",
          "kind": "action",
          "description": "The leaping thief Leaps up to 10 feet vertically or 30 feet horizontally.",
          "traits": []
        },
        {
          "id": "igJreVFyLsgW15xw",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The leaping thief deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "zXbCkpa08kEfp40w",
          "name": "Stealthy Pad",
          "kind": "action",
          "description": "Frequency once per round\nEffect The leaping thief Steps, then [[/act hide]] or [[/act sneak]], ignoring difficult terrain for this movement.",
          "traits": []
        },
        {
          "id": "MaNOI4qe9oqUzhpp",
          "name": "Unexpected Angle",
          "kind": "passive",
          "description": "When the leaping thief successfully [[/act tumble-through]] a foe's space or Leaps to a position higher than a foe, the foe is Off-Guard against the next attack the leaping thief makes before the end of their turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.fvvfZxfGV9i3urkd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.fvvfZxfGV9i3urkd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "fvvfZxfGV9i3urkd",
          "sourceId": "fvvfZxfGV9i3urkd",
          "name": "Claw Blade",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "4Ay4sWnNgz37kV2D",
          "name": "Claw Blade",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "V7Z6AdZ5yHZaFIuH",
          "name": "Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.zvLyCVD8g2PdHJAc",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "zvLyCVD8g2PdHJAc",
          "sourceId": "zvLyCVD8g2PdHJAc",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "l2rkPcaaCYc9VBZh",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 34,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
        "label": "Pick Locks",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Pick a Lock",
          "sourceId": "2EE4aF4SZpYf0R6H",
          "name": "Pick a Lock",
          "type": "action"
        },
        "owner": {
          "sourceId": "l2rkPcaaCYc9VBZh",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 101,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
        "label": "Disable Devices",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disable a Device",
          "sourceId": "cYdz2grcOcRt4jk6",
          "name": "Disable a Device",
          "type": "action"
        },
        "owner": {
          "sourceId": "l2rkPcaaCYc9VBZh",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 311,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
        "label": "Replacement Picks",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit (Replacement Picks)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Thieves' Toolkit (Replacement Picks)",
          "sourceId": "Sw7MBLASN3xK4Y44",
          "name": "Thieves' Toolkit (Replacement Picks)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "l2rkPcaaCYc9VBZh",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 21,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaps",
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
          "sourceId": "HaCumRnJZVkFp3En",
          "name": "Coiled Leap",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "igJreVFyLsgW15xw",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 60,
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
          "sourceId": "igJreVFyLsgW15xw",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 97,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaps",
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
          "sourceId": "MaNOI4qe9oqUzhpp",
          "name": "Unexpected Angle",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 193,
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
          "sourceId": "MaNOI4qe9oqUzhpp",
          "name": "Unexpected Angle",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:toymaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BqRb7ESpqPEQ4rVr",
      "slug": "toymaker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:646b60a6a69d4b0418a52d7c2320fa2eb1fdcc8bd2f5e560b8e1bb993086c6b2",
    "translatableHash": "sha256:946d6e9c996399c0f14446cc85d2da9b69081f2aa9242aa8a06a626a7c9530fd",
    "data": {
      "schemaVersion": 1,
      "name": "Toymaker",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The whimsy of a toymaker is only matched by their ruthlessness when cornered. Most of their creations are designed solely for the enjoyment of others. However, every toymaker knows—whether through failed designs or intentional creations—how to turn their toys into dangerous weapons. They are often hesitant to use toys in such ways, and more often than not, they will attempt to solve problems with diplomacy first. Some toymakers have fully turned to the profession of making deadly toys. They often have dangerous patrons or nefarious intentions. Some use dangerous toys as a means of vigilantism, while others use them as a means to sneak weapons into guarded areas.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 3,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "crafting": 10,
        "diplomacy": 9,
        "performance": 9,
        "society": 8
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
          "id": "F5cbjjDNgPJhr4HV",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "4iut63bhywUQzJZc",
          "name": "Hand Crossbow",
          "bonus": 12,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "nonlethal",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "eaPWck0YMQv41NGj",
          "name": "Punchout Bolts",
          "kind": "passive",
          "description": "The toymaker's crossbow bolts are specially constructed with heavy, sap-like heads instead of piercing tips. Strikes with these bolts deal bludgeoning damage instead of piercing and have the nonlethal trait.\nIn addition, a creature hit by one must succeed a check (fortitude, dc:20, options:forced-movement) saving throw or be pushed 10 feet back (or 20 feet on a critical failure).",
          "traits": []
        },
        {
          "id": "aDXHrskG3ZwyBg6q",
          "name": "Scatter Blocks",
          "kind": "action",
          "description": "The toymaker throws out a handful of toy building blocks of various sizes 20 feet away in a 5-foot type:burst. The area becomes difficult terrain and hazardous terrain. A creature that moves on the ground through the area takes 1 piercing damage for every square of that area it moves into.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "C0kPBmJmXuQOu7wN",
          "name": "Wind-Up Soldier",
          "kind": "action",
          "description": "The toymaker releases a wind-up soldier that Strides 15 feet in a straight line. Whenever the soldier moves adjacent to a creature or a creature moves into a space adjacent to the soldier, the creature takes 2d8 slashing damage with a check (reflex, dc:20, basic) save as the soldier wildly slashes its sword. A creature can take damage from the wind-up soldier only once per round. At the start of each of the toymaker's turns, the solder Strides 15 feet further along the same path. The soldier falls apart after it moves three times.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.XyA6PKV46aNlLXOd",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "XyA6PKV46aNlLXOd",
          "sourceId": "XyA6PKV46aNlLXOd",
          "name": "Hand Crossbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "5XBksvIYvFJRL2T1",
          "name": "Hand Crossbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.y34yjumCFakrbtdw",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "y34yjumCFakrbtdw",
          "sourceId": "y34yjumCFakrbtdw",
          "name": "Artisan's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "v4kT2fu1TtVhqX86",
          "name": "Artisan's Toolkit (Toymaking)",
          "type": "equipment"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.AITVZmakiu3RgfKo",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "AITVZmakiu3RgfKo",
          "sourceId": "AITVZmakiu3RgfKo",
          "name": "Bolts",
          "type": "ammo"
        },
        "owner": {
          "sourceId": "dJXy2jjHfC0Osz58",
          "name": "Punchout Bolts",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tracker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "CFBDZzfWCANLJcpF",
      "slug": "tracker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:213353b746f260b8e41467d123e02343897b34706a22141c306e385d9654a3c0",
    "translatableHash": "sha256:72be6fc5809b25ad97792e254754ba24e18d15ee09b73f221a5da0e2940f64a3",
    "data": {
      "schemaVersion": 1,
      "name": "Tracker",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "An untrained eye might spot a sign or two of a wild creature's passing, but only a skilled tracker can identify several such signs and discern their relationship to each other, connecting one to the next until they form a trail of prints, scat, fur, feathers, and blood that leads to the quarry's lair.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 19,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "nature": 11,
        "stealth": 9,
        "survival": 13
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
          "id": "XSZ78fE3Z7yKpqi5",
          "name": "Dagger",
          "bonus": 11,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "BlvtRAWKdSgprAlh",
          "name": "Dagger",
          "bonus": 11,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "VvvklV8AZNh0WBJb",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "PqeleLSAo4wtVlzd",
          "name": "Composite Longbow",
          "bonus": 11,
          "damage": "1d8+5 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "cm9trrNHFwRyFicr",
          "name": "Expert Subsistence",
          "kind": "passive",
          "description": "While using Survival to [[/act subsist statistic=survival]], if the tracker rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and 8 additional creatures, and on a critical success, they can take care of twice as many creatures as on a success.",
          "traits": []
        },
        {
          "id": "tWDvrIy7tMRedOAa",
          "name": "Master Tracker",
          "kind": "passive",
          "description": "The tracker can Track while moving at full speed.",
          "traits": []
        },
        {
          "id": "y8eExcPkGMuRGljn",
          "name": "On the Hunt",
          "kind": "action",
          "description": "The tracker designates one creature they're observing or tracking as their prey.\nThe tracker gains a +2 circumstance bonus to Perception checks to [[/act seek]] the prey and to Survival checks to [[/act track]] the prey.\nThe first time the tracker hits the designated prey in a round, they deal an additional 1d4 precision damage. These effects last until the tracker uses On the Hunt again.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.dUC8Fsa6FZtVikS3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.dUC8Fsa6FZtVikS3",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "dUC8Fsa6FZtVikS3",
          "sourceId": "dUC8Fsa6FZtVikS3",
          "name": "Composite Longbow",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "7y1oE9OK3tVtd5g1",
          "name": "Composite Longbow",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
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
          "sourceId": "LRhtPUXj2lVfyweU",
          "name": "Dagger",
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
          "sourceId": "2ENV7Bisa9MkaLEV",
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
          "sourceId": "FjgX6TRZC6VZOEli",
          "name": "Arrows",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 19,
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
          "sourceId": "tWDvrIy7tMRedOAa",
          "name": "Master Tracker",
          "type": "action"
        }
      }
    ]
  }
]
