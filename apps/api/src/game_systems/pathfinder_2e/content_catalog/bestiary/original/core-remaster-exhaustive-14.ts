import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_14_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:therapeutic-healer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fh7fcZjLGqih2m9J",
      "slug": "therapeutic-healer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:26745a173925adc11aaf6a24b7d120ce9a7f40e0f02e60b7d2186a5f32688e22",
    "translatableHash": "sha256:dc95c5a452ce00d898d317c398c586dc07cf055d0cfb40d16acae07e23dbc95c",
    "data": {
      "schemaVersion": 1,
      "name": "Therapeutic Healer",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Some healers feel great empathy for their charges and take great pains to help shoulder their allies' burdens both in and out of combat.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 18
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 0,
        "int": 3,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "diplomacy": 17,
        "medicine": 17,
        "occultism": 16,
        "performance": 15,
        "society": 14
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "aGSIESqOdICIFGCe",
          "name": "Staff",
          "bonus": 13,
          "damage": "1d8+6 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "FN0WDvN7P8ExnzoG",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "KmugQKOw1RJ66Y7e",
          "name": "Doctor's Hand",
          "kind": "passive",
          "description": "When the therapeutic healer rolls a critical failure on a check to Treat Disease, Treat Poison, or Treat Wounds, they get a failure instead.",
          "traits": []
        },
        {
          "id": "mx8IoBuHgZJsJsT8",
          "name": "Emotionally Invested",
          "kind": "passive",
          "description": "When the therapeutic healer casts a spell with the healing trait on a creature other than themself, the healer regains HP equal to the spell's rank.",
          "traits": [
            "emotion",
            "healing",
            "mental"
          ]
        },
        {
          "id": "CKsVO2AgeMszAsso",
          "name": "Therapeutic Care",
          "kind": "passive",
          "description": "When Treating Wounds, the therapeutic healer can treat up to four targets. If they succeed at a DC 20 check to Treat Wounds, they can also reduce the value of one Clumsy, Enfeebled, or Stupefied condition affecting a single patient by 1. They can reduce a Drained or Doomed condition instead if they succeed at a DC 30 check. This can't reduce permanent doomed conditions.",
          "traits": []
        },
        {
          "id": "xK9sA42ZbJ0MGbmH",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "bfK9IpYFF2kJ8nSs",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "v5A36dzrUMNtEQDm",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "NgRcA6ckooG5rRif",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "xlHcvGHFcTbz7VYo",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "MawChlIZpwlvEnOS",
              "name": "Protection",
              "rank": 1
            },
            {
              "id": "mc9o6NweUIS2ZooM",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "MCbOCKmvwHwfMlnQ",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "KxgAHn8HVrc5mRrD",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "lPMffBasBkbXoDBZ",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "HerxznQw26nfww4V",
              "name": "Soothe",
              "rank": 2
            },
            {
              "id": "oQCBrFlk3C2NZzVR",
              "name": "Status",
              "rank": 2
            },
            {
              "id": "ZCZQU9UdJRa44KHT",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "wo8YYpEaYaTm7heU",
              "name": "Clear Mind",
              "rank": 3
            },
            {
              "id": "r4aYouyQWAskk84P",
              "name": "Soothe",
              "rank": 3
            },
            {
              "id": "fWURk7Xgu4ZF3Naf",
              "name": "Veil of Privacy",
              "rank": 3
            },
            {
              "id": "12fToTVQ04nIPqKf",
              "name": "Cleanse Affliction",
              "rank": 4
            },
            {
              "id": "3WWGCoykOrIYQHGS",
              "name": "Clear Mind",
              "rank": 4
            },
            {
              "id": "TrCtnQKbL1ARIsz3",
              "name": "Soothe",
              "rank": 4
            }
          ]
        },
        {
          "id": "eRaSvTA6nOKRKzoo",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "iT1P4vPjAWNlW95h",
              "name": "Hymn of Healing",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:knight",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fSwCwS75z9FeUazU",
      "slug": "knight",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:53f130ed4862045dc566812e68c5a6603cd069b37b4c15d0a7dc345b66b92a76",
    "translatableHash": "sha256:31a5beee356a6358425f50a8afea60fba69f3ded07e8b8b7b8050b2439122c9c",
    "data": {
      "schemaVersion": 1,
      "name": "Knight",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Elite fighters from the lowest ranks of nobility, knights are proud champions of their court. Unlike other nobles, knights must earn their title through loyalty and strength-of-arms rather than inheritance. Ideals such as chivalry, honor, and virtue are associated with knights but not all meet such romantic standards.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 25,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 17,
        "diplomacy": 12,
        "intimidation": 16,
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
          "id": "SKNDXRZ1DxdqkB6f",
          "name": "Bastard Sword",
          "bonus": 18,
          "damage": "1d8+10 slashing",
          "traits": [
            "magical",
            "two-hand-d12"
          ]
        },
        {
          "id": "F3TJboHLy3ikjM6h",
          "name": "Spear",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": []
        },
        {
          "id": "zXa1iigVguv3suOU",
          "name": "Spear",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "pRakcYNscn2dQrwK",
          "name": "Gauntlet",
          "bonus": 17,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "free-hand"
          ]
        }
      ],
      "actions": [
        {
          "id": "Y67YU8V11bFFtli8",
          "name": "Knight's Courage",
          "kind": "passive",
          "description": "Any time the knight gains the Frightened condition, they reduce its value by 1.",
          "traits": []
        },
        {
          "id": "3ZgU8XvYaZRZH4i7",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "gc3OmkkBpyHVGxuy",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "The knight can Shield Block for an adjacent ally, preventing that ally from taking damage instead of themself.",
          "traits": []
        },
        {
          "id": "WnZTbTfPmPG0tsIK",
          "name": "Intimidating Strike",
          "kind": "action",
          "description": "The knight makes a melee Strike. If it hits and deals damage, the target is Frightened 1, or Frightened 2 on a critical hit.",
          "traits": [
            "emotion",
            "fear",
            "fighter",
            "mental"
          ]
        },
        {
          "id": "gN00FmqqeZRuYiPj",
          "name": "Rearming Advance",
          "kind": "action",
          "description": "The knight Strides or Steps. During this movement, they can Interact to swap from wielding their bastard sword in two hands to wielding it in one hand and wielding their shield in the other, or vice versa. This Interact action doesn't trigger reactions that can be triggered by manipulate actions.",
          "traits": []
        },
        {
          "id": "hEjZDL8dtoHGhvtc",
          "name": "Warding Shift",
          "kind": "action",
          "description": "Requirements The knight is adjacent to a willing ally\nEffect The knight moves an adjacent willing ally 5 feet in any direction and can Step into the space the ally vacated.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dedicated-druid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "FTqAUF89sIKC0qPm",
      "slug": "dedicated-druid",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0a9f677879da2bdaa17c15767fca5ec56983e3beb3482437750f8355a87f87ce",
    "translatableHash": "sha256:df9e0d43ce0301c9105b15dc30ab9a1f34dad6d0354b6785474a820499e07a26",
    "data": {
      "schemaVersion": 1,
      "name": "Dedicated Druid",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Individuals who dedicate their life to the protection and preservation of the natural world often become druids. These devoted practitioners of primal magic might work alone or in a circle of like-minded individuals, all of whom have primal powers more terrifying than the last.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "lifesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 1,
        "int": 1,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "diplomacy": 14,
        "intimidation": 12,
        "nature": 17,
        "religion": 15,
        "stealth": 13,
        "survival": 17
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
          "id": "j4f3c9Tsl3O1bG0I",
          "name": "Spear",
          "bonus": 16,
          "damage": "1d6+8 piercing",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "EJllqPmC005h71gv",
          "name": "Spear",
          "bonus": 14,
          "damage": "1d6+8 piercing",
          "traits": [
            "magical",
            "thrown-20"
          ]
        },
        {
          "id": "Y2OhvzN8XXsy1XEW",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "BfsIZD02EQsQH8rj",
          "name": "Plant Empathy",
          "kind": "passive",
          "description": "The dedicated druid can ask questions of, receive answers from, and use the Diplomacy skill with plants and fungus.",
          "traits": []
        },
        {
          "id": "bFAHvgfHZB11u1Gj",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "pHYcg0F8wUYXzyME",
          "name": "Nature's Patient Healing",
          "kind": "action",
          "description": "Requirements The dedicated druid is in a natural environment\nEffect The dedicated druid camouflages themself to blend in with the surrounding area, sprouting leaves or covering themself with scree. They gain Concealment until the end of their next turn, they can [[/act hide options=natures-patient-healing]] with a +4 circumstance bonus, and they recover 4d8 healing Hit Points. If the druid moves or otherwise leaves their space, these benefits end.",
          "traits": [
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "Eu0sE0DKPQvaRN5z",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "VyECUxJOgIIkg4kF",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "BAi7pBcIO5xS3oO6",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "ChFF3roQ6QJ1usI6",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "uCGYimgqYU9G0wcS",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "9PhJjvc9c0ZXPHCI",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "PZDU4v3VykiBjjZQ",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "nhiR8xQpmiKwyiCt",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "w4c2b4l1f45XQxW4",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "gsyLo7jQawf7CJ39",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "ZZQubGBtOssWbOOb",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "EfUuwPvaGGrbv6AX",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "jGuWeEG5ze9TmKmb",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "937umuOHjN3sssB8",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "ABGaCzkHvpapjW1h",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "Da4IBCWS1UA6vlVP",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "nntNQTzHPj1aj3YN",
              "name": "Fly",
              "rank": 4
            }
          ]
        },
        {
          "id": "G2dwiRhV1xmYNdBQ",
          "name": "Druid Order Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 0,
          "saveDc": 25,
          "spells": [
            {
              "id": "3thJMxKyx9Wtg0M8",
              "name": "Cornucopia",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:master-of-disguise",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "G2AJ9Ya7QG7ebNPO",
      "slug": "master-of-disguise",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:39c37b0c5a47f1831b8d0053e367f9aac02184d462aea7f47f313d8a051672b6",
    "translatableHash": "sha256:0f319a372e5f9ac767c2583d8860cd418a92f54c966a4efbfc52e90902be79bc",
    "data": {
      "schemaVersion": 1,
      "name": "Master of Disguise",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A master of disguise uses costuming, makeup, and minor illusions to deceive. Some conceal their identity for years, infiltrating organizations under deep cover.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 25,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 16
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "deception": 18,
        "diplomacy": 16,
        "performance": 16,
        "society": 17,
        "stealth": 17,
        "thievery": 15
      },
      "languages": [
        "common",
        "dwarven",
        "elven",
        "gnomish",
        "halfling"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "zm12FTBDaV5BBBIf",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "G3ir7whx4cpcZQ7K",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "lBdMHw8S6kK4VEQ0",
          "name": "Fist",
          "bonus": 16,
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
          "id": "3YP2QfDe7seNO3mW",
          "name": "+4 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NCdG3G7qFnNeSend",
          "name": "Deep Cover",
          "kind": "passive",
          "description": "At most times, a master of disguise has infiltrated a specific organization, gaining a +2 circumstance bonus to [[/act gather-information]], [[/act impersonate]], [[/act lie]], or [[/act request]] when dealing with its members.",
          "traits": []
        },
        {
          "id": "58TSLLvaZvy32x0g",
          "name": "Disguise Specialist",
          "kind": "passive",
          "description": "For social encounters involving impersonation, the master of disguise is a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "WPPeDB4GRopbnpzu",
          "name": "Double Take",
          "kind": "passive",
          "description": "If the master of disguise and the creature they're Impersonating are in each others' presence, the genuine creature must Lie if they're vouching for their own identity, and are treated as though they were Impersonating themself if someone Seeks in an attempt to pierce their disguise. The genuine creature can use their Deception modifier, Diplomacy modifier, or a +15 modifier, whichever is highest.",
          "traits": []
        },
        {
          "id": "442ka05ivDCRYfaP",
          "name": "Impeccable Disguise",
          "kind": "action",
          "description": "The master of disguise creates a disguise and Impersonates. They gain a +5 status bonus to Deception checks to [[/act impersonate]] or to tell a [[/act lie]] that helps them maintain their disguise. When a spell or magical effect tries to read their mind, detect whether they're lying, or reveal their identity, they can attempt a check (deception) check against the spell or effect's DC. If they succeed, the effect reveals information appropriate to their cover identity or nothing (the GM determines which).",
          "traits": []
        },
        {
          "id": "LXX5QheNXLqfUDVF",
          "name": "Shocking Reveal",
          "kind": "action",
          "description": "The master of disguise removes their disguise with a dramatic gesture. Any creatures that previously failed to see through the disguise is Off-Guard to the master of disguise until the end of the turn.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "NKTsWLcwjJg7cI4U",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The master of disguise deals an additional 3d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:demonologist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "hR9n5d0tfyOkeZFb",
      "slug": "demonologist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:181c1924244f1ec691f63a87f2588d6fe2bd9a26ea09da3c85bf006c483fd9d4",
    "translatableHash": "sha256:391413abdbe6ab9790fe768db3c8130f5110e0824e63abe7cf7c9bdd17b7a21f",
    "data": {
      "schemaVersion": 1,
      "name": "Demonologist",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Demonologists can pull a creature from the Outer Rifts and bend it to their will... for a time.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 22,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 4,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "arcana": 16,
        "diplomacy": 11,
        "religion": 15
      },
      "languages": [
        "chthonian",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "cah7DtpiMX62b2rT",
          "name": "Longspear",
          "bonus": 17,
          "damage": "1d8+9 piercing",
          "traits": [
            "magical",
            "reach"
          ]
        },
        {
          "id": "8Xoqtmerpdbx1Rgu",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VJxxeLCAgKz1s9HI",
          "name": "Demonic Temptation",
          "kind": "passive",
          "description": "Demonic study has garnered the attention of at least one demon who is actively trying to possess the demonologist. When the demonologist publicly espouses the benefits of demonic power (whether they believe it a good thing or not), they gain a +1 status bonus to skill checks, AC, and saves for 1 day. These bonuses don't apply against demons. At the end of the day, the demonologist must attempt a check (will, dc:20) save, becoming possessed for 1 day on a failure (or permanently on a critical failure).",
          "traits": [
            "divine",
            "mental"
          ]
        },
        {
          "id": "naPxWIBQxbkOgD8M",
          "name": "Breach the Outer Rifts",
          "kind": "passive",
          "description": "Requirements The demonologist's last action was to cast a non-cantrip spell\nEffect The demonologist siphons energy drawn from the Outer Rifts into their weapon. Until the end of the turn, the weapon deals an extra 2d6 damage.\nRoll 1d20 to determine the type:\n• 1–7 acid\n• 8–9 cold\n• 10–11 electricity\n• 12–18 fire\n• 19–20 void.",
          "traits": []
        },
        {
          "id": "xS8f6u8VDcBepVGM",
          "name": "Demon Summoning",
          "kind": "passive",
          "description": "The demonologist can cast a 5th-rank Summon Fiend arcane spell to summon a demon. To do so, they must sacrifice two 4th-rank prepared spells and voluntarily take 4d12 mental damage that can't be reduced or prevented. If the demonologist is unable to Sustain the Spell, including if they're knocked out or killed, the spell continues, but the GM rolls a check (flat, dc:10) each round, ending the spell on a failure.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "rcJ4W5TkvDrGFTF2",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "ZJ1mmBhvQ13eIzyA",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "URn1wMuJoRCcNuNL",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "V0KER9CC8ycoMeqb",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "1P8oJuO8bFdxVtzV",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "gcaJUmXzlqkVLkeU",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "PgNlNjhdU3d7Sdyz",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "XcuPb7SNC597YAWQ",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "I8sIuSzKYa2hsURS",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "gy41CKzvHlbhDCPR",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "beFFC7HSXV6dFHTe",
              "name": "Acid Grip",
              "rank": 2
            },
            {
              "id": "js9TOs5y1lonFoKZ",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "g82rm1SAoomn7Gyp",
              "name": "Environmental Endurance",
              "rank": 2
            },
            {
              "id": "67ikYHgjhaUG1Z7C",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "zhaenlfDsaNjpTUZ",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "0C7SQ8e1ChTZR1ri",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "KRT33bZl4uGcVHl6",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "XN4JCtBNmeC0mnJX",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "XcQBrW31HJZ3PwHD",
              "name": "Dispelling Globe",
              "rank": 4
            },
            {
              "id": "tVCjQZw9BZ33YLek",
              "name": "Wall of Fire",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:heavy-cavalry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Iax22298eQbIhIQK",
      "slug": "heavy-cavalry",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:24731b34218ab15cb0c14dd731c1efb212e6f34e057a5795282a3e1b9cfdedfd",
    "translatableHash": "sha256:19273d9c8962fb9600c0d23cb55369d71b02ccea9b34c669c74e342f91f8df7c",
    "data": {
      "schemaVersion": 1,
      "name": "Heavy Cavalry",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "human",
        "humanoid",
        "troop"
      ],
      "description": "A charging band of knights, mounted upon heavy warhorses and clad in steel plate, is a sight to be feared on the battlefield. The weight of their armor, however, makes them ill-suited to extended overland maneuvers. Squads of squires are needed to tend to horses, repair armor, and otherwise support the heavy cavalry group between battles. Despite these limitations, their ability to crash through enemy lines makes them an invaluable tool for professional armies.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 25,
      "hitPoints": 105,
      "speedFeet": 40,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 14
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 17,
        "intimidation": 15,
        "nature": 12
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "zv2XXCRsUyyFRVAQ",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids might not work on the cavalry brigade, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "yxfsW0rnJGjT9VoE",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 70 (3 segments), 35 (2 segments)",
          "traits": []
        },
        {
          "id": "ZoTNlqZNoHDWAX17",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "TQUoJLbYF9uz3bG8",
          "name": "Join the Fray",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The heavy cavalry swing flails at each enemy in a 5-foot type:emanation, with a check (reflex, dc:22, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d6+3)[bludgeoning|options:area-damage] damage\n2 (2d6+7)[bludgeoning|options:area-damage] damage\n3 (3d6+10)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "9ttQcVwRTUR44b34",
          "name": "Thunder of Hooves",
          "kind": "action",
          "description": "Frequency once per round\nEffect The heavy cavalry Strides. At the end of their movement, the cavalry can either attempt an Athletics check to [[/act trip]] each adjacent enemy or an Intimidation check to [[/act demoralize]] each enemy within 30 feet. Roll only once and compare the result to each enemy's Reflex DC (for Trip) or Will DC (for Demoralize).",
          "traits": []
        },
        {
          "id": "apSv4DCaKeLf8RBp",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, (2d8+7)[bludgeoning], check (reflex, dc:22, basic); creatures that fail the save are also knocked Prone",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:fleshwarper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "kbZstaIc8R4Ce9A3",
      "slug": "fleshwarper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7b56b519d5b57c5db636c364431d4560c3973f5abbf9579db3c3b4b41219c065",
    "translatableHash": "sha256:fcfd3a449adec28d18e7266e7b980902f898928d05f9d1d8b4d4ec560f369078",
    "data": {
      "schemaVersion": 1,
      "name": "Fleshwarper",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Cruel scientists called fleshwarpers create horrors from the flesh of others. Many desire to push science forward, but others need only grotesque glee.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 15,
        "will": 15
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": 4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "crafting": 17,
        "medicine": 16,
        "occultism": 15,
        "stealth": 15
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
          "id": "Rf0PzfY9tHYW4dqd",
          "name": "Scalpel",
          "bonus": 18,
          "damage": "1d4+9 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "6cpZvxDWELNdR2Ld",
          "name": "Scalpel",
          "bonus": 18,
          "damage": "1d4+9 piercing",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "Y14HEJSc8oMbFGSy",
          "name": "Fist",
          "bonus": 17,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "meBD7EcAX9MxkYdQ",
          "name": "Fleshwarping Concoction",
          "bonus": 17,
          "damage": "4d6 poison",
          "traits": [
            "alchemical",
            "poison"
          ]
        }
      ],
      "actions": [
        {
          "id": "GApt2iz68EEP5A7N",
          "name": "Conduct the Experiment",
          "kind": "action",
          "description": "The fleshwarper assesses vulnerabilities in a creature's anatomy. They attempt a check (medicine, against:fortitude) check against the Fortitude DC of one living creature they can see within 60 feet. On a success, the fleshwarper's melee Strikes deal an extra 2d8 precision damage against that creature for 1 minute or until the fleshwarper critically hits that creature, whichever comes first.\nUsing this action again designates a new target and ends the effect for any previous target. A fleshwarper can target an individual no more than once per day with this ability.\nEffect: Conduct the Experiment",
          "traits": []
        },
        {
          "id": "knd0HCT4uTGSx8wm",
          "name": "Flesh Mutation",
          "kind": "passive",
          "description": "A creature made of flesh that's hit by a fleshwarping concoction Strike is subject to a random fleshwarping mutation determined by rolling 1d4 and consulting the list below. The creature attempts a check (fortitude, dc:25) save at the end of each of its turns, ending the mutation on a success. A creature that becomes mutated is thereafter temporarily immune to flesh mutation for 1 day.\n1 Spongy Flesh The creature has weakness 5 to physical damage.\n2 Caustic Blood The creature takes 2d4 persistent acid damage that can't be removed normally, but ends when the mutation does.\n3 Sprouting Eyes The creature is Dazzled, but also immune to flanking.\n4 Mutated Mind The creature is Confused. It can still recover as noted in the condition, but if it does it remains Off-Guard until the mutation ends.\nEffect: Flesh Mutation",
          "traits": [
            "alchemical",
            "morph"
          ]
        },
        {
          "id": "V0CjsWwxhKynsJi3",
          "name": "Restore My Masterpiece",
          "kind": "action",
          "description": "Requirements The fleshwarper is holding or wearing a healer's toolkit\nEffect The fleshwarper stitches the wounds of an adjacent, willing aberration or creature they modified using fleshwarping. The creature regains 20 healing HP and is then temporarily immune for 1 day.",
          "traits": [
            "healing",
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:experienced-hound",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "KOgFliu3yM3avhv5",
      "slug": "experienced-hound",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:34709bfa886982639a035929ef1b92522a17b6e0089ca9cd89e4ce88dec1eb1c",
    "translatableHash": "sha256:f3c594dde1f5824835fc508dd48a7d45833b1493e532a97b704b8fd1c6de2c1f",
    "data": {
      "schemaVersion": 1,
      "name": "Experienced Hound",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "An experienced hound has been on dozens of hunts. They are often raised from pups to catch the scents of certain animals and deliver their bodies unharmed when taken down by their owners. An experienced hound could accompany a hunter or other NPC who specializes in tracking down prey.",
      "armorClass": 24,
      "hitPoints": 115,
      "speedFeet": 35,
      "perception": {
        "modifier": 16,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 5,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 17,
        "stealth": 15,
        "survival": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "yljDtIs1gNcR5iuy",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d6+9 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "6XZBim4EIiK3GEK8",
          "name": "Humane Bite",
          "kind": "passive",
          "description": "The experienced hound doesn't take a penalty to make a nonlethal attack with its jaws.",
          "traits": []
        },
        {
          "id": "DZtHKaIb4XUcIqmt",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The hound's Strikes deal 2d6 extra damage to creatures within the reach of at least two of the hound's allies.",
          "traits": []
        },
        {
          "id": "KV78as6iotEZ95PU",
          "name": "Drag",
          "kind": "action",
          "description": "Requirements The experienced hound is adjacent to a Prone creature\nEffect The experienced hound attempts an Athletics check to [[/act grapple]] the prone creature. The experienced hound can then Step away from the target; if the target is Grabbed by the hound, it is moved into the hound's previous square and remains grabbed.",
          "traits": []
        },
        {
          "id": "CWn0KxMKc5751aPX",
          "name": "Knockdown",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:cult-leader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "MKwLXGzr48qU0hZR",
      "slug": "cult-leader",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e86553bfcc8fd733372d93a988c67cbc8e697a32114e74fa84726d935e44396d",
    "translatableHash": "sha256:cd9e20e92ad1e8380ec5977fb107fd955c32daf2ef90b74546f06eb953c5fbd9",
    "data": {
      "schemaVersion": 1,
      "name": "Cult Leader",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A career of mystical accomplishments combined with a lifetime of subterfuge and intimidation has elevated this occultist to a powerful position.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "arcana": 13,
        "deception": 16,
        "diplomacy": 14,
        "intimidation": 16,
        "occultism": 17,
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
          "id": "6YTro1WAs87ij0k8",
          "name": "Shortsword",
          "bonus": 16,
          "damage": "1d6+6 piercing; 2d8 void",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "xnY8jJSCNYEMSEph",
          "name": "Fist",
          "bonus": 15,
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
          "id": "tCqd5uhyOKVs0yco",
          "name": "Protect the Master!",
          "kind": "reaction",
          "description": "Trigger The cult leader is targeted with an attack, and a lower-ranking cultist is adjacent to them\nEffect The cult leader orders their cultist to leap in front of the attack. The cultist and cult leader swap places, and the cultist becomes the target of the attack. If the cultist has Fanatical Frenzy or a similar ability, they can activate it as a reaction if they take damage from the triggering attack.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental",
            "move"
          ]
        },
        {
          "id": "H8PMiZFsy2MQfLN2",
          "name": "Gather Converts",
          "kind": "action",
          "description": "With a short emotional phrase, the cult leader tries to sway the public to do their bidding. The cult leader tries to convince up to four bystanders in a crowd to cause a commotion, turn against a person or group, leave the area, protect the cult leader, or calm down. The cult leader attempts a single check (deception, against:perception) check against the highest Perception DC among the targets.\nCritical Success The targets believe the lie and act as directed for 1 minute. Additionally, one bystander remains by the cult leader's side, influenced enough to join the cult. All other targets become wise to the cult leader after 1 minute, at which point their attitude toward the leader worsens by one step.\nSuccess As a critical success, but no bystander joins the cult permanently.\nCritical Failure The crowd is unmoved and unamused, and their attitude toward the cult leader worsens by one step.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "sDz2pTgrdn7OJC6y",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "xs71vxEAdkb43WRn",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "wK2iZjhHynWPEfkz",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "haPvwMMP0sLRdY1b",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "l34M0e9imWDDKZmk",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "RNEnP1paV6GuwxlR",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "lYBAMLDLK3eOo6OO",
              "name": "Lock",
              "rank": 1
            },
            {
              "id": "3GWEZoBUbuCVbyYB",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "QSVYX3aazgWE3DMo",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "3E0ewbO9BfQitZGL",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "OZCardLPy2J4016X",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "gnqCZEMkykq1ukbI",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "jjDjecr6CngMky6N",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "XXwisx4KUBD70nnM",
              "name": "Stupefy",
              "rank": 2
            },
            {
              "id": "Bq8QoVRWT0wWWNwI",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "e8fVkcWzv7IG923R",
              "name": "Grim Tendrils",
              "rank": 3
            },
            {
              "id": "wUWPHksApjbqZQrm",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "9KO9gWUlJNRSt2HA",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "ywjNMTGbUV3PYl76",
              "name": "Honeyed Words",
              "rank": 4
            },
            {
              "id": "WJSOatDvCqcvR2E5",
              "name": "Outcast's Curse",
              "rank": 4
            },
            {
              "id": "9PQM2UeVKJ7cbAjg",
              "name": "Suggestion",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:departmental-chair",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "MxcprNbX7hcpAU8p",
      "slug": "departmental-chair",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8568e135fe28a58ca295b4e188ff656011c04a3d2dbd5fb9ccfa4430917e8f83",
    "translatableHash": "sha256:6cec4d7b7320db07adf0c06a2553818be7307498dea6f08a397be20ff8ad227c",
    "data": {
      "schemaVersion": 1,
      "name": "Departmental Chair",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "All the departmental chair really wants is a chance to quietly do their research. Instead, they've been roped into dealing with every emergency—political, supernatural, or emotional—in the university. They are not thrilled about this.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 24,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 14,
        "will": 18
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": 5,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "arcana": 22,
        "diplomacy": 15,
        "occultism": 22,
        "society": 17
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
          "id": "i8DbwHASfhpeIv5f",
          "name": "Staff",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "w9DPMxuMCVsaR1jq",
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
          "id": "TXJdl9jnx1zHWjmV",
          "name": "Veteran Researcher",
          "kind": "passive",
          "description": "On the rare occasions the departmental chair still deals with their research, they are a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "4FE8RUZjkZ3hPKKk",
          "name": "Paper Pusher",
          "kind": "action",
          "description": "The departmental chair has spent so much time dealing with bureaucracy recently that papers and forms have worked their way into the chair's spellcasting. If the departmental chair's next action is to Cast a Spell that deals energy damage, the spell conjures a burst of sharp-edged paper instead. Change the damage type to slashing, and the spell deals an additional 1d6 persistent bleed damage.",
          "traits": [
            "arcane",
            "concentrate",
            "spellshape"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "huxKDm6Jf0HpwwUg",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "KMqC2qqUAEzsics8",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "Bx8KQ9inFA5WxCNz",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "R0fDXgqNXFIG9h2T",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "zws51GE0zojHe35l",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "ooXEPLhFzCKI86rU",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "JmRhIXiUgqDwVBMa",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "348ldGXxaTEVN2Tl",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "Waf3ShkECtTTKkq3",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "AzKroVKilYDxf3Pc",
              "name": "Wall of Fire",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gunwitch",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ow76NqtsZUhZMf9f",
      "slug": "gunwitch",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2c78d71b936272167457099c3de8e43e576979a9d7d26c73f62456c89c72fa28",
    "translatableHash": "sha256:46d353718c8fe6b00f59d9db4ca166313a50138163cb17ff63ee3ddc99a4fd24",
    "data": {
      "schemaVersion": 1,
      "name": "Gunwitch",
      "level": 7,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "As wielders of both occult power and firearms, gunwitches pride themselves in using both unconventional weapons and obscure magic. To change their patron (Spinner of Threads), swap out Nudge Fate and Sure Strike.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 15
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 4,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "crafting": 15,
        "intimidation": 15,
        "occultism": 17
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
          "id": "md4SEoFEbsW7ZNMZ",
          "name": "Musket Staff",
          "bonus": 15,
          "damage": "1d4+6 bludgeoning; 1d6 force",
          "traits": [
            "finesse",
            "magical",
            "two-hand-d6"
          ]
        },
        {
          "id": "bmk4lwn3XpOj4PeB",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "C9ZsCn6QkBtekUHd",
          "name": "Musket Staff",
          "bonus": 18,
          "damage": "1d6+6 piercing; 1d6 force",
          "traits": [
            "concussive",
            "fatal-d10",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "nbGYZczLrjoPrNxy",
          "name": "Firearm Familiar",
          "kind": "passive",
          "description": "The gunwitch's firearm acts as their familiar but remains a mindless item with no actions. The master abilities it grants are included in the stat block.",
          "traits": []
        },
        {
          "id": "ZU5kwu08GSIgB4Q1",
          "name": "Acrobatic Dodge",
          "kind": "reaction",
          "description": "Trigger An attacker the gunwitch can observe targets them with an attack\nEffect The gunwitch gains a +2 circumstance bonus to AC against the triggering attack, and after the attack the gunwitch Leaps.",
          "traits": []
        },
        {
          "id": "7McDPEFv5lCLd6gs",
          "name": "Betwitched Shot",
          "kind": "action",
          "description": "Requirements The gunwitch is wielding their firearm familiar and has a hex bullet loaded in it (see Hex Bullet)\nEffect The gunwitch Casts a Spell that takes 1 or 2 actions to cast into their bullet, then Strikes with their firearm familiar, shooting the magic bullet. This counts as two attacks for the gunwitch's multiple attack penalty. On a hit, the target is also affected by the spell, though the target gets any normal defenses allowed by the spell.\nIf the spell is targeted, it targets the creature that was hit and no one else. If the spell is an area, the target must be in the area. A burst is centered on a corner of the target's square if the target is Medium or smaller or the corner of a square closest to the creature's center if it's Large or larger. A cone or line emits from a square of the gunwitch's choice adjacent to the target.",
          "traits": []
        },
        {
          "id": "U3D8UB50MVdn9owB",
          "name": "Bullet Storm",
          "kind": "action",
          "description": "Requirements The gunwitch is wielding their firearm familiar and has a hex bullet loaded into it (see Hex Bullet)\nEffect The gunwitch unleashes a flurry of projectiles. Each creature in a 60-foot type:emanation takes 8d6 piercing damage with a check (reflex, dc:25, basic, options:area-effect) save.",
          "traits": [
            "concentrate",
            "occult"
          ]
        },
        {
          "id": "qUQ5fdfxmcMcuAX9",
          "name": "Hex Bullet",
          "kind": "action",
          "description": "Frequency once per round\nEffect The gunwitch conjures a magical hex bullet in their firearm. It can be used as a normal bullet or for the Bewitched Shot and Bullet Storm abilities. The bullet vanishes if not fired by the end of the turn.",
          "traits": [
            "concentrate",
            "occult"
          ]
        },
        {
          "id": "BCK488BYbofd6C0V",
          "name": "Recall Firearm",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The gunwitch's firearm familiar is within 1 mile\nEffect The gunwitch summons their firearm into their hand or hands.",
          "traits": [
            "concentrate",
            "occult",
            "teleportation"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "AHqZqmHmbdICrVZD",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "zvaEUHM6cBHzBEtb",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "xauKusNY0UUGnYnX",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "e6XVJgFTeTXbxfrW",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "7BMJfUVD2ZLMPU2c",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "x15m4P3bETaObrSH",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "QN6RGV9n6OoidXag",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "UVS2ug1lkk2Fx8r7",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "g1GZcNkTKXN8Cxee",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "kRs7TUXTtBtzqxgA",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "1wYlZTCZpBluZIu5",
              "name": "Telekinetic Maneuver",
              "rank": 2
            },
            {
              "id": "8yNL8luFmdfjvtF1",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "yMUkNWJpprHdUOC2",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "16AEMDgALxCUzPaU",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "kSMDy8bLpMPFJYIW",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "QpBFmT8fnD0I9ncG",
              "name": "Flicker",
              "rank": 4
            }
          ]
        },
        {
          "id": "Ty6gHYSX9V8oLSSj",
          "name": "Witch Hex Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "hobyJXvkxektZT6A",
              "name": "Needle of Vengeance",
              "rank": 1
            },
            {
              "id": "EvkO4qwEVU6O4aJH",
              "name": "Nudge Fate",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:champion-of-shelyn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "RSwVjNvidoFL7SaJ",
      "slug": "champion-of-shelyn",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1d32d0ef71f6856df3d1028f7ac24e69ec39a803900527a13b01fea1fa3cf369",
    "translatableHash": "sha256:09e6437f23787a3cacee479f51ae36dab0da2f9268efbd945f8256c897dc03a9",
    "data": {
      "schemaVersion": 1,
      "name": "Champion of Shelyn",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "holy",
        "human",
        "humanoid"
      ],
      "description": "Champions are bastions of their deities' virtues and are living beacons for their causes. Those who walk these paths must adhere to the tenets of their patron deity or risk losing their abilities altogether. The champion depicted here follows the example of Shelyn, embodying the spirit of inspiring beauty and fighting for the cause of peace.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 25,
      "hitPoints": 120,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 17,
        "diplomacy": 16,
        "performance": 14,
        "religion": 15,
        "society": 12
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
          "id": "jd5FhNKWsDnj5iHW",
          "name": "Glaive",
          "bonus": 18,
          "damage": "1d8+10 slashing; 1d6 vitality",
          "traits": [
            "deadly-d8",
            "forceful",
            "magical",
            "reach"
          ]
        },
        {
          "id": "BRc49AO4c5fWK9ud",
          "name": "Fist",
          "bonus": 17,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "jKFRZ83SiWXuuMYP",
          "name": "Crossbow",
          "bonus": 14,
          "damage": "1d8+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "zY5hQb6NWtzvkcL4",
          "name": "Champion's Aura",
          "kind": "passive",
          "description": "15 feet.\nAny follower of Shelyn in the aura knows the champion is a champion of Shelyn. At the end of the champion's turn, each ally in the aura reduces its Frightened value by 1. The aura can be suppressed or resumed with a single action, which has the concentrate trait, and ends if the champion falls Unconscious.",
          "traits": [
            "aura",
            "divine"
          ]
        },
        {
          "id": "Yx4MgJWpZzUsU4IG",
          "name": "Champion's Courage",
          "kind": "passive",
          "description": "When the champion becomes Frightened, they reduce the condition value by 1 (to a minimum of 0).",
          "traits": []
        },
        {
          "id": "dRd0M7P3MVBvrJhb",
          "name": "Liberating Step",
          "kind": "reaction",
          "description": "Trigger An enemy damages, grabs, or restrains the champion's ally, and both are in the champion's aura\nEffect The champion frees an ally from restraint. If the trigger was an ally taking damage, the ally gains resistance 10 to all damage against the triggering damage.\nEffect: Liberating Step\nThe ally can attempt to break free of effects grabbing, Restraining, Immobilizing, or Paralyzing them. They either attempt a new save against one such effect that allows a save or attempt to Escape from one effect as a free action. Whether or not it needed to escape, the ally can then Step as a free action if it's able to move.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "e9KYlRN3U7f2qytl",
          "name": "Blessed Weapon",
          "kind": "passive",
          "description": "If a champion's glaive Strike is a critical hit, the weapon deals an additional 1d6 persistent vitality damage, and they can force the target to move 5 feet in a direction of their choice.",
          "traits": []
        },
        {
          "id": "vWJOLM8BI73ppqof",
          "name": "Smite",
          "kind": "action",
          "description": "The champion chooses one enemy they can see. Their Strikes against that enemy gain a +4 status bonus to damage, or +8 if the target is unholy.\nThis benefit lasts until the start of the champion's next turn, but if the target takes a hostile action against the champion or one of their allies, the duration is extended until the end of the target's next turn (this can be extended indefinitely if the target keeps taking hostile actions on subsequent rounds).",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "LrsRFnEBYFDzYu56",
          "name": "Champion Devotion Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "nN0lgOFte6ZtbjrG",
              "name": "Lay on Hands",
              "rank": 1
            },
            {
              "id": "hSZCH4Z8TY9wRW3N",
              "name": "Protector's Sacrifice",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bandit-gang",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "sEbc0YrpxVZ9kn1W",
      "slug": "bandit-gang",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d9197f45c5625085f49ab29f7aaf892cdf3a7449e1b6da0faed7702728a8b298",
    "translatableHash": "sha256:3be7c13e31b3d7c642adcedc258a04b4fe729cc03127807d9f2e98ee4c2adf07",
    "data": {
      "schemaVersion": 1,
      "name": "Bandit Gang",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Cutthroat crews of criminals form gangs to take out larger scores and intimidate their victims. Bandit gangs are often accompanied by a Gang Leader.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 16,
        "will": 13
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 16,
        "deception": 14,
        "intimidation": 16,
        "stealth": 17,
        "survival": 11,
        "thievery": 16
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "AoJIKuZvXaMkEfMA",
          "name": "Lie in Wait",
          "kind": "passive",
          "description": "The troop can spend 10 minutes preparing the ground before combat to gain a +2 circumstance bonus to their initiative roll.",
          "traits": [
            "exploration"
          ]
        },
        {
          "id": "Q4vdhKajjsRObWoT",
          "name": "Sudden Ambush",
          "kind": "passive",
          "description": "When the troop rolls initiative using Deception or Stealth, they can use Stand and Deliver! as a free action.",
          "traits": []
        },
        {
          "id": "L9qydPbyPjP1eC2j",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "DfON8v909jMLsLaL",
          "name": "Chop 'em Down!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The bandits make a coordinated attack with their axes against each enemy in a 5-foot emanation with a check (reflex, dc:22, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d6+3)[slashing|options:area-damage] damage\n2 (2d6+9)[slashing|options:area-damage] damage\n3 (3d6+9)[slashing|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "tksvobKNKfovQxnZ",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The bandit gang ignores any difficult terrain caused by plants, such as bushes, vines, and undergrowth.",
          "traits": []
        },
        {
          "id": "GaNuN6hXeQKNOEPh",
          "name": "Launch Slings!",
          "kind": "action",
          "description": "The bandits draw or reload their slings, then launch a volley of sling bullets. This is a 10-foot burst within 50 feet that deals (2d6+4)[bludgeoning|options:area-damage] damage with a check (reflex, dc:22, basic, options:area-effect) save. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst.",
          "traits": []
        },
        {
          "id": "jt6S0u8qw2Td8g3n",
          "name": "Stand and Deliver!",
          "kind": "action",
          "description": "The troop attempts to [[/act demoralize]] up to 4 creatures.",
          "traits": []
        },
        {
          "id": "ShNuWVLigReArh8g",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:kholo-outrider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "w7mf2yC3rE3CjGD5",
      "slug": "kholo-outrider",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3fef584841b8300a197c892c24d5aeb7ca6f23b6fd9357630161bce2dc73a6ef",
    "translatableHash": "sha256:7d55f345b6377feced80611dfb125729daee8315f08617d7e5ee331ae1f50171",
    "data": {
      "schemaVersion": 1,
      "name": "Kholo Outrider",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "kholo"
      ],
      "description": "Many kholo packs are semi-nomadic, staying in one place until they're pushed out by others, or the local resources begin to grow sparse. Before moving the pack elsewhere, the leaders send out a single kholo to blaze a trail and ensure a safe route to their next destination. These outriders are masters of the wilderness and fight better when they're alone.\nThese pragmatic hunters have earned a very poor reputation for their brutality in battle and worship of demons. While many kholos live up to the terrible stories of their ferocity and cannibalism, others are scavengers and trappers just trying to get by. Many of their cultural traditions are misunderstood by other ancestries, and some kholos play into the fear provoked in those who believe the twisted tales about their people. Kholos are often criticized for their lack of honor in battle, but a kholo understands honor doesn't bring you back home alive, nor does honor put food on the table. Ambushes, feints, and deceptions that lead to fewer kholo deaths and a quicker victory are simply the logical thing to do.",
      "armorClass": 25,
      "hitPoints": 120,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 18,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 18,
        "intimidation": 13,
        "stealth": 15,
        "survival": 18
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
          "id": "eMjtVKu9SX2DSvFo",
          "name": "Hatchet",
          "bonus": 19,
          "damage": "1d6+7 slashing",
          "traits": [
            "agile",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "x27AbPyEfYletiq3",
          "name": "Hatchet",
          "bonus": 17,
          "damage": "1d6+7 slashing",
          "traits": [
            "agile",
            "magical",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "ZmONHlMbN1ElU695",
          "name": "Jaws",
          "bonus": 18,
          "damage": "1d6+7 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "xeu6jDZSER1eCTxi",
          "name": "Composite Shortbow",
          "bonus": 17,
          "damage": "1d6+5 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "WWAmdEhQYQENBx4H",
          "name": "Bloody Flurry",
          "kind": "action",
          "description": "The kholo outrider Strikes, Steps, then Strikes again. If the kholo outrider hits the same enemy with both Strikes, that enemy takes an additional 1d6 persistent bleed damage.",
          "traits": []
        },
        {
          "id": "rNttKEft3jghRgFk",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "dzKLA5iY2hWRfc7y",
          "name": "Rugged Travel",
          "kind": "passive",
          "description": "A kholo ignores the first square of difficult terrain they move into each time they Step or Stride.",
          "traits": []
        },
        {
          "id": "1oJPt7dlboFG0TjE",
          "name": "Solo Hunter",
          "kind": "passive",
          "description": "A kholo outrider deals 1d6 extra damage while adjacent to at least 2 enemies and no allies.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "XqIKuHK4R6yFOKbs",
      "slug": "hunter",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a6bbce51b42168671391ba596c7d1ba5803760bc1edc78f0a3d1e9263ac86855",
    "translatableHash": "sha256:b664cf74ad9a912c42528003911503ffd92fd7ff251e31754a12ab15a28e1c97",
    "data": {
      "schemaVersion": 1,
      "name": "Hunter",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "As is reflected in the many depictions of the elk-headed Erastil, god of the hunt, the hunter is very much a creature of the forest, known by the forest and familiar with every aspect of it. After all, the final determination of who is the hunter and who is prey often depends on who can make an ally of the terrain.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 25,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "medicine": 15,
        "nature": 17,
        "stealth": 17,
        "survival": 17
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
          "id": "dYlvFC5F1daX6NF8",
          "name": "Shortsword",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "MxhrFgqmcB6uMEez",
          "name": "Fist",
          "bonus": 17,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "0ZMXbn86hOwSVqWe",
          "name": "Dagger",
          "bonus": 17,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "KbYGZddUNQGhrhEf",
          "name": "Composite Longbow",
          "bonus": 18,
          "damage": "1d8+8 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "tCB0OhxiJDPlXfQi",
          "name": "Expert Subsistence",
          "kind": "passive",
          "description": "While using Survival to [[/act subsist statistic=survival]], if the hunter rolls any result worse than a success, they get a success. On a success, they can provide subsistence living for themselves and 16 additional creatures, and on a critical success, they can take care of twice as many creatures as on a success.",
          "traits": []
        },
        {
          "id": "xeEI4dqDE4PmxOeA",
          "name": "Forest Walker",
          "kind": "passive",
          "description": "The hunter ignores the effects of difficult terrain in a forest environment.",
          "traits": []
        },
        {
          "id": "ws6ZIDinw21XxfKw",
          "name": "On the Hunt",
          "kind": "action",
          "description": "The hunter designates one creature they're observing or tracking as their prey.\nThe hunter gains a +2 circumstance bonus to Perception checks to [[/act seek]] the prey and to Survival checks to [[/act track]] the prey.\nThe first time the hunter hits the designated prey in a round, they deal an additional 1d8 precision damage. These effects last until the hunter uses On the Hunt again.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hellknight-cavalry-brigade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "02AGznZTv5jjcnOg",
      "slug": "hellknight-cavalry-brigade",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d57bb10aa47ecc9d3906aeb518e373344a566c43a3e8cb9b5a53d9387668ee04",
    "translatableHash": "sha256:d65c718213da22b80d7d6e6e6672a8ada7bfca20059967b83ad4ddccb230de4d",
    "data": {
      "schemaVersion": 1,
      "name": "Hellknight Cavalry Brigade",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "human",
        "humanoid",
        "troop"
      ],
      "description": "A Hellknight cavalry brigade consists of several Hellknights and a single field-maralictor, all wearing the distinctive armor of their order and wielding lances. The maralictor speaks for the brigade, questioning travelers the brigade encounters and barking orders. A Hellknight brigade is typically based at a keep or other fortification controlling an area measured by a day's ride in every direction—about 25 miles. Farther-ranging missions are possible but require substantial logistical support.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 40,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 7,
        "dex": 1,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 18,
        "intimidation": 17,
        "religion": 12,
        "society": 12
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "mental 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "BXqBLK3Og6X709BA",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids might not work on the Hellknight cavalry brigade, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "OIN5i0I05S7LhjZj",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "iFIgoidhd52BmiLu",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "tAmUn1fmHBzAZrMX",
          "name": "Arrow Volley",
          "kind": "action",
          "description": "The Hellknights draw or reload their longbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 100 feet that deals 3d8 piercing damage (check (reflex, dc:23, basic, options:area-effect) save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "89ujLImiUz00Zomc",
          "name": "Lance Charge",
          "kind": "action",
          "description": "The brigade Strides twice with a +10-foot circumstance bonus to its Speed. If it moves at least 10 feet, the brigade deals (3d8+14)[piercing|options:area-damage] damage with a check (reflex, dc:26, basic, options:area-effect) save to each enemy in a 10-foot type:emanation at the end of its movement.",
          "traits": []
        },
        {
          "id": "iKR8M3h9wCtVtDTe",
          "name": "Stab from the Saddle",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The brigade engages in a coordinated lance attack against each enemy in a 10-foot type:emanation with a check (reflex, dc:23, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d6+3)[piercing|options:area-damage] damage\n2 (2d6+10)[piercing|options:area-damage] damage\n3 (3d6+14)[piercing|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "cuBDxCCJtk4iMr0A",
          "name": "Trailblazing Stride",
          "kind": "passive",
          "description": "While moving on land, the Hellknight cavalry brigade ignores difficult terrain.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dynamo",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3edjm6pFh3JhZHah",
      "slug": "dynamo",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0e9c540f05eb3d06aaff7f3c899560d43ba4f53bcec6639ef2429e9b491651c1",
    "translatableHash": "sha256:b17527e8dcc977a44b9fe88e8ddbb2c0eaccbe4ea69be63dd6d3fa3c6756901e",
    "data": {
      "schemaVersion": 1,
      "name": "Dynamo",
      "level": 8,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The intricate clockwork prostheses known as sterling dynamos have become increasingly common in recent years, particularly in havens of technological progress like Dongun Hold and the city of Absalom, but a few specialized engineers have elevated their dedication to research and development of such devices to an entirely new level. These individuals seek to achieve bodily perfection through augmentation, replacing their own limbs with advanced and sometimes untested prototypes that grant them a wide variety of abilities.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 26,
      "hitPoints": 145,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 2,
        "int": 3,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 18,
        "crafting": 17,
        "medicine": 16,
        "thievery": 17
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
          "id": "wovFCCDRVmqjVIbB",
          "name": "Modular Prosthesis",
          "bonus": 20,
          "damage": "2d8+12 bludgeoning",
          "traits": []
        },
        {
          "id": "nB3gtFHiAuMdnri5",
          "name": "Dragon Mouth Pistol",
          "bonus": 18,
          "damage": "1d6+6 piercing",
          "traits": [
            "concussive",
            "reload-1",
            "scatter-5"
          ]
        }
      ],
      "actions": [
        {
          "id": "Darn0zksX9FFxbDl",
          "name": "Extend Arms",
          "kind": "action",
          "description": "The dynamo extends their collapsible steel arms, giving them both a reach of 20 feet with all melee attacks. However, the dynamo becomes Enfeebled 1 and can't use the Interact action. The dynamo can Dismiss this ability.",
          "traits": []
        },
        {
          "id": "yRh6ryCGYjkLOTFB",
          "name": "Extend Legs",
          "kind": "action",
          "description": "The dynamo rises into the air on 10-foot-tall telescoping steel legs. While their legs are extended, the dynamo gains a +10-foot status bonus to land Speed and ignores any cover granted by barriers less than 10 feet tall. However, the dynamo becomes Clumsy 1 and can't use the Climb, Leap, Swim, or Tumble Through actions. The dynamo can Dismiss this ability.",
          "traits": []
        },
        {
          "id": "DPgKg2UHjzcSElwg",
          "name": "Modular Prostheses",
          "kind": "action",
          "description": "The dynamo configures one or both of their mechanical prosthetic hands into a specific configuration. Each configuration deals a specific damage type and has its own weapon traits: fist (bludgeoning; free-hand), gaff hook (piercing; grapple), impact driver (bludgeoning; shove), or spinning blade (slashing; trip). The dynamo can alternatively transform a hand into a steel shield with Hardness 8, HP 72, and BT 36. A broken prosthesis can't be reconfigured until repaired.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:arrester-squadron",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "7AQj3Tbx5O2mlwgS",
      "slug": "arrester-squadron",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e85fbbb904f97ad3b670735433c77d3a31441adb7a9e0f547d024f9bfaa41c65",
    "translatableHash": "sha256:42c681cbade3bafce098ad31768a01d8363f9565b7e77e731de7a2c834e4cf8e",
    "data": {
      "schemaVersion": 1,
      "name": "Arrester Squadron",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "These guards have been extensively trained to perform complex maneuvers together. They are sent to capture accused criminals believed to be especially dangerous (whether due to their own abilities or due to their allies).\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 13,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 18,
        "intimidation": 16
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "MYXjuBlUEN482YKO",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "pP4FTehdKKYyRete",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "VZEJGLwJ8BXKUdrY",
          "name": "Coordinated Step",
          "kind": "action",
          "description": "The arrester squadron Steps twice.",
          "traits": []
        },
        {
          "id": "bRiKeKsEQaZtQcG0",
          "name": "Fire Longbows!",
          "kind": "action",
          "description": "The arrester squadron fire a coordinated volley with their longbows against each enemy in a 10-foot type:burst within 150 feet that deals 3d8 piercing damage with a check (reflex, dc:23, basic, options:area-effect) save. When the arresters are reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "7plqqmq49cE7a6PQ",
          "name": "Seize Them!",
          "kind": "action",
          "description": "1 to 3\nThe arresters attack with saps and tackle foes. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:23, basic, options:area-effect,inflicts:grabbed,inflicts:restrained) save. The damage and additional effects depend on the number of actions. The DC to Escape any of the following conditions is 26 ([[/act escape dc=26]]).\n1 (1d6+3)[bludgeoning|options:area-damage] damage (plus Grabbed for 1 round on a critical failure)\n2 (3d6+6)[bludgeoning|options:area-damage] damage (plus grabbed for 1 round on a failure or Restrained for 1 round on a critical failure)\n3 (4d6+9)[bludgeoning|options:area-damage] damage (plus grabbed for 1 round on a failure or restrained for 1 round on a critical failure)",
          "traits": [
            "nonlethal"
          ]
        },
        {
          "id": "0UCymBNVsiBKsKbM",
          "name": "Sweep the Area",
          "kind": "action",
          "description": "The arresters Seek in a 40-foot type:burst or 80-foot type:cone and Point Out up to four targets.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gendarme",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "bzRxQ0Z317yeCUE5",
      "slug": "gendarme",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:592afdaee771587f97003b38a2f4c6078c24aa74e781c6489294fe9678b85bd2",
    "translatableHash": "sha256:02ebaa4a517c849fb800a9ca18d46f167109853df0ea3850da2be277a5b48974",
    "data": {
      "schemaVersion": 1,
      "name": "Gendarme",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Powerful governments retain gendarmes to guard important magistrates, enforce laws protecting national security, reinstate order amid unrest, and capture unusually dangerous criminals. They're also sent to deal with important cases in rural areas without substantial guards of their own.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 26,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 18,
        "intimidation": 16
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
          "id": "IM4yNjjHVa57kAq8",
          "name": "Flail",
          "bonus": 19,
          "damage": "2d6+10 bludgeoning",
          "traits": [
            "disarm",
            "magical",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "uPcM5WGon8ZRDx9w",
          "name": "Gauntlet",
          "bonus": 19,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "free-hand",
            "magical"
          ]
        },
        {
          "id": "ot8zU8u190DZSPoN",
          "name": "Composite Longbow",
          "bonus": 16,
          "damage": "1d8+8 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "jCd90kV3C9iAbsbt",
          "name": "Nerves of Steel",
          "kind": "passive",
          "description": "When the gendarme succeeds against a fear effect, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "oSBA5fqk8GbSrpml",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "The gendarme can [[/act disarm]] instead of Striking.",
          "traits": []
        },
        {
          "id": "FBHyEq1E9NTZfF0t",
          "name": "Shoot Down",
          "kind": "action",
          "description": "The gendarme carefully makes a ranged Strike. If the Strike deals damage, the target must succeed at a check (reflex, dc:26, options:inflicts:prone) saving throw or fall Prone.",
          "traits": []
        },
        {
          "id": "DkUqfGI2MSXGtBn4",
          "name": "Stop in the Name of the Law!",
          "kind": "action",
          "description": "The gendarme Strides twice and then [[/act demoralize]]. On a success, the target is Slowed with a value equal to its Frightened value until it is no longer frightened.",
          "traits": [
            "incapacitation",
            "linguistic"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:guildmaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fadWrz7SnifBx4yz",
      "slug": "guildmaster",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:375406ab9113dafcad0ede5fa4551038f936ca477fc1b6c3043847c531d8c6b4",
    "translatableHash": "sha256:e29d0b7c56bc9fabeeb5ba5ec557c4007a8a42875ff6c83ca5a1f7c0062ce9f2",
    "data": {
      "schemaVersion": 1,
      "name": "Guildmaster",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "In cities, artisans working in a common trade often form guilds to set standards of quality, establish common prices, engage in collective bargaining with business owners, and lobby local governments for favorable laws. The guildmaster—often a master artisan in their own right—also acts as an administrator and politician, advocating for artisans in their trade.\nExpertise is forged through years of effort and often tedious work. Artisans are masters of their craft, able to create works both practical and beautiful.",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 13,
        "crafting": 25,
        "diplomacy": 24,
        "intimidation": 22,
        "society": 21
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
          "id": "vZlRJzB7o08xfLuI",
          "name": "Light Hammer",
          "bonus": 16,
          "damage": "2d6+5 bludgeoning",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "3CHnQSHfFAroFmAn",
          "name": "Light Hammer",
          "bonus": 14,
          "damage": "2d6+5 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "thrown-20"
          ]
        },
        {
          "id": "J5FixRIfCOBKKsk3",
          "name": "Fist",
          "bonus": 16,
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
          "id": "oCtz8yhPSdjymz3m",
          "name": "Craft Specialist",
          "kind": "passive",
          "description": "For encounters involving matters of crafting or architecture, the guildmaster is a 12th-level challenge.",
          "traits": []
        },
        {
          "id": "ZuDGBQWUf1cSV69U",
          "name": "Call to Action",
          "kind": "action",
          "description": "The guildmaster gives a speech to inspire themself and all guild-member allies within 60 feet, granting them a +1 status bonus to attack and damage rolls until the start of the guildmaster's next turn.\nEffect: Call to Action",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "F9lM0H0vX25rlQiB",
          "name": "Sworn Duty",
          "kind": "passive",
          "description": "While within the guild or presiding over guild business, the guildmaster gains a +2 circumstance bonus to weapon attack rolls and deals an additional 2d6 damage on a successful weapon attack.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:drill-sergeant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "g4SvRClK7ftg3kSD",
      "slug": "drill-sergeant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:621dda15359f39d2b6cdbd5534e507f82f66ceab8b79d35928ac89e5c92b99ed",
    "translatableHash": "sha256:786e9e748570f24b89b4f5ffbca4dba4ce3ca00b84082ceb204391e69418ba18",
    "data": {
      "schemaVersion": 1,
      "name": "Drill Sergeant",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Maintaining discipline is of the utmost importance when conducting a military campaign. Often elevated from veteran soldiers, drill sergeants are responsible for training common troops, ensuring they can follow orders and fight well in the thick of battle. Though drill sergeants can be brash and hard-nosed, harsh discipline is often crucial to maintaining order and keeping soldiers alive.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 25,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 15,
        "will": 20
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "athletics": 18,
        "intimidation": 20
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
          "id": "OfihpWgHBDl0tp8i",
          "name": "Javelin",
          "bonus": 19,
          "damage": "1d6+12 piercing",
          "traits": [
            "thrown-30"
          ]
        },
        {
          "id": "avro0iH9FHTAshLs",
          "name": "Longsword",
          "bonus": 21,
          "damage": "2d8+12 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "AEmFG1y5Gc3OC7B2",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+12 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "L5dzCYCRW8i6aAzb",
          "name": "Commanding Aura",
          "kind": "passive",
          "description": "60 feet. An ally that starts its turn in the aura gains 8 temporary Hit Points. These last until the start of the creature's next turn.\nEffect: Commanding Aura",
          "traits": [
            "aura",
            "emotion",
            "mental",
            "visual"
          ]
        },
        {
          "id": "epq2AaNmZNyKdwBA",
          "name": "You Don't Have My Permission to Die!",
          "kind": "reaction",
          "description": "Trigger An allied creature within 30 feet would be reduced to 0 Hit Points\nEffect With a stern rebuke, the drill sergeant berates the target for their failure. The creature avoids being knocked out and remains at 1 HP. The creature is then temporarily immune for 24 hours.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "TsIMe0two808SLOk",
          "name": "Chastising Enforcement",
          "kind": "action",
          "description": "The drill sergeant exhorts a faltering comrade with a stern word and attempts an check (intimidation, against:will) check against the Will DC of one ally within 30 feet. On a success, the target's Frightened condition is reduced by 2 and the drill sergeant can attempt to counteract one mental effect that ally is suffering from with a [[/r 1d20+18 #Counteract]] counteract modifier. On a critical success, the drill sergeant also reduces the frightened condition of each other ally in a 10-foot type:emanation around the target by 1.",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "ikCCX8LvQEbJMvmB",
          "name": "Keep Up With Me!",
          "kind": "action",
          "description": "Requirements The drill sergeant's last action was a Strike that hit\nEffect The drill sergeant shouts that one ally within 30 feet can't keep up with them. That ally gains a +3 status bonus to their attack roll on the next Strike they make before the start of the drill sergeant's next turn. If the ally is a troop, this bonus instead applies to the DC of their next offensive activity (such as Join the Fray for heavy cavalry).\nEffect: Keep Up With Me!",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:woolly-wrangler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "gIjhrY21iwTApvXT",
      "slug": "woolly-wrangler",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6c2f16a3340035a9037ccfd6bbf33d0655f22a421bf1f336c3c94e96e24c49e3",
    "translatableHash": "sha256:f80c4e14498fdb79d4f2724acbf88c312de5e40ba47a70ff88d75d6930ba28cf",
    "data": {
      "schemaVersion": 1,
      "name": "Woolly Wrangler",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "When a giant, dangerous animal is found, there's always someone who tries to pet it. A woolly wrangler is usually accompanied by an Elephant or Mammoth. They can Command this Animal without needing to succeed at a Nature check.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 26,
      "hitPoints": 125,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 12,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 14,
        "intimidation": 14,
        "nature": 16,
        "survival": 18
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "6R5L7kBUFF0hPPaQ",
          "name": "Greatclub",
          "bonus": 20,
          "damage": "2d10+12 bludgeoning",
          "traits": [
            "backswing",
            "magical",
            "shove"
          ]
        },
        {
          "id": "dq1hCIXjeM4Qj6Kt",
          "name": "Whip",
          "bonus": 19,
          "damage": "1d4+12 slashing",
          "traits": [
            "disarm",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "qrSkC50y9zHQjPBU",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+12 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "nKjVhiWJnNTzy9Gp",
          "name": "In Balance",
          "kind": "passive",
          "description": "Whenever the woolly wrangler rolls a success on a Recall Knowledge check using Nature or Mountain Lore, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "YFxSnlxJWHAHLFca",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "trr1GhW2XMguC7EO",
          "name": "Uneven Footing",
          "kind": "passive",
          "description": "10 feet.\nWhile the woolly wrangler is mounted on a Huge or Gargantuan creature, the ground near the mount shakes and buckles. Squares in the aura are difficult terrain for Medium or smaller creatures.",
          "traits": [
            "aura"
          ]
        },
        {
          "id": "VYlGYH1DaqRMBFXi",
          "name": "Wrangling Whip",
          "kind": "action",
          "description": "The woolly wrangler makes a whip Strike. On a hit, the woolly wrangler can either knock the target Prone or pull it up to 5 feet. If the creature ends this movement adjacent to the wrangler's mount, the mount can make a melee unarmed Strike against the creature as a free action.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:wealthy-vigilante",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "iexsv5iflfbqj8po",
      "slug": "wealthy-vigilante",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fda2681f557aa5fc4d3da9576e8549c93cc98cdc84a07f0dc56913fa36e2e3e6",
    "translatableHash": "sha256:3c679f5cf4f69bae756ee254dda5d8be9e1c27d00bbd7f2e50fd37da427ea82e",
    "data": {
      "schemaVersion": 1,
      "name": "Wealthy Vigilante",
      "level": 8,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "By night, this member of the nobility dons a false identity to mete out violent, extralegal justice on petty criminals and the downtrodden. They're possessed of unwavering self-righteousness and the best equipment money can buy.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 27,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 1,
        "int": 3,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 16,
        "deception": 17,
        "intimidation": 17,
        "society": 16,
        "stealth": 17
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
          "id": "Gc7lLmDqKsVIX1ut",
          "name": "Longsword",
          "bonus": 19,
          "damage": "2d8+10 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "WxLUNJADNoMDDX6c",
          "name": "Fist",
          "bonus": 18,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "ZFANEZg3XJrVbUFi",
          "name": "Flintlock Musket",
          "bonus": 17,
          "damage": "2d6+6 piercing",
          "traits": [
            "concussive",
            "fatal-d10",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "RYtKlXnoz3joPvhd",
          "name": "Custom Gear",
          "kind": "passive",
          "description": "The wealthy vigilante's support team has spent years tailoring and tuning the vigilante's equipment. Anyone but the vigilante attempting to use the items takes the same drawbacks they would if they were shoddy items. These peculiarities make the items have no value if sold.",
          "traits": []
        },
        {
          "id": "HYIin6LPP3Btpjq2",
          "name": "Talisman Prepper",
          "kind": "passive",
          "description": "The vigilante goes on patrol with six talismans of 6th level or lower. The typical set includes a Fear Gem and Emerald Grasshopper affixed, with a Dragon Turtle Scale, Effervescent Ampoule, Feather Step Stone, and Iron Cube in storage.",
          "traits": []
        },
        {
          "id": "pJXBzkWAK6tOptHH",
          "name": "Quick Replace",
          "kind": "reaction",
          "description": "Trigger The wealthy vigilante Activates one of their affixed talismans\nRequirements The wealthy vigilante has a hand free\nEffect As soon as one of their talismans burns out, the wealthy vigilante pulls another from their crimefighting pouches and deftly Affixes it to replace the used talisman.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "0wPOLuDj3dkml5yT",
          "name": "Calculated Strike",
          "kind": "action",
          "description": "The wealthy vigilante makes a melee Strike. If the Strike hits, the vigilante can then [[/act shove]] the target. This Shove uses the same multiple attack penalty as the Strike and doesn't count toward the vigilante's multiple attack penalty, but the vigilante must Stride after the pushed creature. If the Strike misses, the vigilante can Step up to three times, each of which must take it further from the target. The vigilante can [[/act hide]] if, after the Steps, they have cover or concealment from the target.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:woodland-scouts",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "IYEVUYP6fXJCleTQ",
      "slug": "woodland-scouts",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:75f1981ffc99e5e5059984b979a7ae49f4af942201655ad459763ca1c8d72838",
    "translatableHash": "sha256:70c59d9a8cebce95bb32a16627b90a92b279b73ec4bced5bf01038693db981e9",
    "data": {
      "schemaVersion": 1,
      "name": "Woodland Scouts",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "elf",
        "humanoid",
        "troop"
      ],
      "description": "Elves of the forest or jungle take advantage of the terrain, operating in units that seemingly appear from the trees themselves.\nElves' long lives give them centuries to delve into studies, artistry, or exploration.",
      "armorClass": 27,
      "hitPoints": 120,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 18,
        "will": 16
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 0,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 15,
        "medicine": 14,
        "nature": 16,
        "stealth": 18,
        "survival": 16
      },
      "languages": [
        "common",
        "elven",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "ieCmzrV6RLs2mUGk",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "xGzKrnFPOrb03MKA",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "pn1APRDP4F6A14Lg",
          "name": "Among the Trees",
          "kind": "action",
          "description": "Requirements Every square the woodland scouts occupy is in forest terrain\nEffect The woodland scouts disperse among the trees. They Take Cover and then use that cover to [[/act hide]], attempting a Stealth check.",
          "traits": []
        },
        {
          "id": "Yo9WugJ7aGbjQgxb",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "Woodland scouts ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.",
          "traits": []
        },
        {
          "id": "cwnXsW9qJWhtOoS5",
          "name": "Longbow Barrage",
          "kind": "action",
          "description": "The scouts draw or reload their longbows, then send forth a flurry of arrows. This barrage is a 10-foot type:burst within 100 feet that deals 3d8 piercing damage with a check (reflex, dc:24, basic, options:area-effect) save. If the scouts are Hidden or undetected, this deals an additional 2d6 precision damage. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "db6ey2Hs2tBrUrq9",
          "name": "Stealthy Formation",
          "kind": "passive",
          "description": "If the scouts become Hidden or Undetected, they remain so until they take a hostile action.",
          "traits": []
        },
        {
          "id": "jonX9f4s8mMLfL5C",
          "name": "Thicket of Blades",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The scouts engage in a coordinated melee attack against each enemy in a 5-foot type:emanation, with a check (reflex, dc:24, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d8+3)[slashing|options:area-damage] damage\n2 (2d8+6)[slashing|options:area-damage] damage\n3 (3d8+9)[slashing|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:assassin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "jOASgCgSyk3enLfP",
      "slug": "assassin",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7c2377e765412751bfddf78979cd4d7d1ba1cce4a8befd287516c1b3eb495979",
    "translatableHash": "sha256:5516fc076bdf4e73908115f0489bcef3581f80c9704321200afb11a0f56ea3b7",
    "data": {
      "schemaVersion": 1,
      "name": "Assassin",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Assassins commit murder, either for pay or due to their belief in a cause, such as a religion or a political movement. Many are members of assassins' guilds: organizations that accept contracts to kill in return for money, favors, or both.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 26,
      "hitPoints": 130,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 19,
        "will": 14
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 13,
        "deception": 12,
        "diplomacy": 10,
        "intimidation": 10,
        "medicine": 14,
        "society": 12,
        "stealth": 19,
        "thievery": 15
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
          "id": "EtuysfUGpQnBFAaU",
          "name": "Rapier",
          "bonus": 20,
          "damage": "1d6+9 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "M74b4dJuPBfmmGbp",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "YMK6yeIqUwKCrXpF",
          "name": "Composite Shortbow",
          "bonus": 20,
          "damage": "2d6+7 piercing",
          "traits": [
            "deadly-2d10",
            "magical",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "2w1WQr635JVnsORb",
          "name": "Swift Sneak",
          "kind": "passive",
          "description": "The assassin can move their full speed when Sneaking.",
          "traits": []
        },
        {
          "id": "zeH3OrBLioIRoYb5",
          "name": "Deny Advantage",
          "kind": "passive",
          "description": "The assassin isn't Off-Guard to creatures of 8th level or lower that are Hidden, Undetected, flanking or using Surprise Attack.",
          "traits": []
        },
        {
          "id": "xhZKk4oQRgs08i0T",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The assassin is targeted with a melee or ranged attack by an attacker they can see.\nEffect The assassin gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "cYpzRpaINHeW2XxC",
          "name": "Assassin's Poison",
          "kind": "action",
          "description": "Requirements The assassin is wielding a piercing or slashing weapon and has a free hand\nEffect The assassin applies a poison to the weapon. That poison's DC is increased to 24 if it was lower.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "kzNiR7bLBxL4aWfR",
          "name": "Quick Draw",
          "kind": "action",
          "description": "The assassin Interacts to draw a weapon, then Strikes with that weapon.",
          "traits": []
        },
        {
          "id": "ld6AdRlIeDnctV9m",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The assassin deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "t5skSqnTS4aKuuan",
          "name": "Surprise Attack",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to the assassin.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:lucky-courser",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "NKSglx8RnXfuhb3m",
      "slug": "lucky-courser",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6a7c630c2a1585a8c9b27d588b23d79d65d4bb20824b6cadceedd0fc82f45715",
    "translatableHash": "sha256:6c0b8a8e53fdbdf2c5fac440e617aa1f58456612904548ce3df705ee539b6c55",
    "data": {
      "schemaVersion": 1,
      "name": "Lucky Courser",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "catfolk",
        "humanoid"
      ],
      "description": "Masterful catfolk hunters travel the far corners of the world, stalking terrible the monsters who dwell there in hopes of someday putting an end to their predations. They eagerly cooperate with other adventurers to defeat demons, aberrations, and malevolent beasts and fey.\nCatfolk can be found traveling almost anywhere, and they are quick to settle down for a chat when they encounter fellow travelers. Some trade stories, act as guides, or operate at the fringes of polite society.",
      "armorClass": 27,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 18,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 14,
        "deception": 14,
        "nature": 16,
        "stealth": 18,
        "survival": 16
      },
      "languages": [
        "amurrun",
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
          "id": "RE3Yy2XY0X8tmqXu",
          "name": "Whip",
          "bonus": 20,
          "damage": "1d4+12 slashing",
          "traits": [
            "disarm",
            "finesse",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "8oVx0vpNUlvbIJBa",
          "name": "Claw",
          "bonus": 19,
          "damage": "1d4+12 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "JZkwNgZakXnzdlbs",
          "name": "Arbalest",
          "bonus": 20,
          "damage": "2d10+6 piercing",
          "traits": [
            "backstabber",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Qr90npz8qRxMrxj4",
          "name": "Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "qaxdJ1SeLve3oTwc",
          "name": "Warning Ears",
          "kind": "passive",
          "description": "Trigger The lucky courser rolls initiative using Perception or Survival\nEffect Their expressive ears twitch in alarm, granting allies within 10 feet a +2 circumstance bonus to initiative rolls.",
          "traits": [
            "visual"
          ]
        },
        {
          "id": "seoK2OJkXRAnVE9R",
          "name": "Guide to Fortune",
          "kind": "reaction",
          "description": "Frequency once per hour\nTrigger The lucky courser or an ally within 10 feet fails a Reflex save, Acrobatics check, or Athletics check\nEffect The triggering creature rerolls the save or check and uses the better result.",
          "traits": [
            "fortune"
          ]
        },
        {
          "id": "iYfkTPHFzh4dyPWH",
          "name": "Elusive Hunter",
          "kind": "passive",
          "description": "The lucky courser can [[/act hide]] and [[/act sneak]] in any natural terrain and in lesser cover from allies.",
          "traits": []
        },
        {
          "id": "uYtkBu8ChulI53u8",
          "name": "Feline Skirmish",
          "kind": "action",
          "description": "Frequency once per round\nEffect The lucky courser can Interact to reload their arbalest, Step, and Strike, taking the actions in any order. The Step ignores difficult terrain.",
          "traits": []
        },
        {
          "id": "PUbu5ZJgSB92fU23",
          "name": "Head Shot",
          "kind": "action",
          "description": "The lucky courser [[/act create-a-diversion]] and then Strikes. The target is Dazzled until the end of the lucky courser's next turn on a successful Strike (or Blinded on a critical hit).",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:skin-shifter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "OF4s2rErk7xHgZU1",
      "slug": "skin-shifter",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d68036de60158640bddf6804b59b3dc8a3704d2305ee66a15c7b81f7a0f7c156",
    "translatableHash": "sha256:d341f4ba37033609e759683bd51d5896f779c6ab1895f59a15c05e2d5b786126",
    "data": {
      "schemaVersion": 1,
      "name": "Skin Shifter",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Skin shifters are defenders of nature, blessed by the spirits of the wild with the ability to shape shift into powerful animal forms. Prowling as beasts or charging across the field, they protect the balance of nature and punish those who would upset it.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 25,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 14,
        "diplomacy": 13,
        "intimidation": 11,
        "nature": 18,
        "stealth": 12,
        "survival": 18
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
          "id": "u7iqM7resgUqIeOV",
          "name": "Spiked Gauntlet",
          "bonus": 18,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "free-hand"
          ]
        },
        {
          "id": "BInYYQ2LMlU2W6pv",
          "name": "Longbow",
          "bonus": 17,
          "damage": "2d8+6 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "TdUNc8KZZyIhdF7G",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The skin shifter can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "3Hm6leMnzYN43EE9",
          "name": "Gift of the Wild Spirits",
          "kind": "action",
          "description": "Frequency once per round\nEffect The skin shifter casts their choice of a 4th-rank Aerial Form, Animal Form, Dinosaur Form, or Pest Form spell. They must transform into an animal of a kind they've seen within the last 24 hours. They can't gain temporary HP again from a spell cast with Gift of the Wild Spirits for 10 minutes. Their Strikes for forms other than pest form have reach 10 feet, a +20 attack modifier, and a +13 damage bonus (or a +9 damage bonus for aerial form). Most other changes to their statistics are listed above.\nWhile polymorphed, the skin shifter can still use Gift of the Wild Spirits, though they're still prevented from casting other spells as normal.",
          "traits": [
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "KMOHUKYmHJwInKE9",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "c3V25kysfD9mH4iW",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "pS0nrEgCoRHpxgUO",
              "name": "Know the Way",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mage-killer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "P8Rd7OxbsyH9GmNM",
      "slug": "mage-killer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:897b63b217c1355f45ef8aa9eb11c717afc42ae3b42db4d6327ffcc33039cd13",
    "translatableHash": "sha256:18b99d5e3aec0c75874c8f4fd3f492511124d07646faf2ad85ffc12d1945f273",
    "data": {
      "schemaVersion": 1,
      "name": "Mage Killer",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Whenever high command needs an enemy spellcaster taken off the board in the midst of battle, they send in a mage killer.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 25,
      "hitPoints": 145,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 17,
        "arcana": 13,
        "athletics": 16,
        "stealth": 18
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
          "id": "m084t1jlpLj6vcHQ",
          "name": "Dagger",
          "bonus": 19,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "drJgIvcP1L08zcbR",
          "name": "Dagger",
          "bonus": 19,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "BTXbWWx0MtQeyMyX",
          "name": "Rapier",
          "bonus": 20,
          "damage": "2d6+10 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "gXvuZbjNoqKdJb8m",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+10 bludgeoning",
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
          "id": "bUJXKW2vBb65avUR",
          "name": "Spell Dodge",
          "kind": "reaction",
          "description": "Trigger The mage killer is targeted by a spell\nEffect The mage killer gains a +2 circumstance bonus to AC and saving throws against the triggering spell.",
          "traits": []
        },
        {
          "id": "oxbzD6yvYaTTyXYx",
          "name": "Spell Interception",
          "kind": "reaction",
          "description": "Trigger A creature within 10 feet of the mage killer Casts a Spell\nEffect The mage killer makes a melee Strike or thrown dagger Strike against the triggering creature. If it hits, the spell is disrupted.",
          "traits": []
        },
        {
          "id": "ucOr5uz1E0WM2Tut",
          "name": "Magical Static",
          "kind": "passive",
          "description": "The mage killer's Strikes deal an additional 1d8 mental damage to a creature that has Cast (or attempted to Cast) a Spell within the last round, and on a critical hit, the creature is Stupefied 1 for 1 minute.",
          "traits": [
            "arcane",
            "mental"
          ]
        },
        {
          "id": "jBgDRRCU9YrfN2Je",
          "name": "Shift Energy Runes",
          "kind": "action",
          "description": "Frequency once per hour\nEffect The mage killer alters the magical countermeasures in the runes on their armor. They change their resistance to the energy type of their choice (acid, cold, electricity, fire, force, sonic, vitality, or void).",
          "traits": [
            "arcane",
            "concentrate"
          ]
        },
        {
          "id": "MkQEqJb8sm1sgYR8",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "The mage killer Strides twice. If they end their movement within melee reach of at least one enemy, they can make a melee Strike against it.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hobgoblin-vanguard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "PoH1pKba7YEqgWVn",
      "slug": "hobgoblin-vanguard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5aeee0adc30bd25f57253217f51a8f3d32f9fb00b641834c2566d27a708cd153",
    "translatableHash": "sha256:4fd5849cfeaeaa0f4b75c897110d974fef5937e3aeaa6d9d003add8ccb066df1",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin Vanguard",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "hobgoblin",
        "humanoid"
      ],
      "description": "Though there are times for precision and discipline, every hobgoblin general also understands the value of demoralizing the enemy with a show of overwhelming force. No military unit is better suited to this purpose than the vanguard, a heavily armed and armored elite unit that inspires their fellow soldiers to action while breaking the enemy's lines and morale with terrifying explosive weapons.\nHobgoblins are respected across Golarion for their unmatched expertise in the art of war. The recent foundation of the hobgoblin nation of Oprak and its unprecedented acts of diplomacy, including non-aggression pacts with the neighboring nations of Nidal and Nirmathas, has given some hope that a lasting peace might finally be established; however, there remains no shortage of unaffiliated hobgoblin raiders and pillagers.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": 2,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 18,
        "crafting": 17,
        "intimidation": 16,
        "survival": 16
      },
      "languages": [
        "common",
        "goblin"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "3aB39FmGFD8GlbJA",
          "name": "Maul",
          "bonus": 19,
          "damage": "2d12+8 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "waGNTouGiOBtyXfw",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "9sUepNIq7LdQmilY",
          "name": "Alchemical Grenade",
          "bonus": 16,
          "damage": "2 acid; 2d8 acid; 2 acid",
          "traits": [
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "TFAhhwlmb0O93MES",
          "name": "Shock and Awe",
          "kind": "reaction",
          "description": "Trigger The hobgoblin vanguard critically hits a creature with an alchemical grenade Strike\nEffect The hobgoblin vanguard attempts to [[/act demoralize]] the creature with a mere look. If the target creature was reduced to 0 Hit Points by the triggering Strike, the hobgoblin vanguard can instead attempt to Demoralize all opponents within 30 feet, rolling once and comparing the result to each target's Will DC.",
          "traits": [
            "emotion",
            "mental",
            "visual"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dwarf-general",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "T5WxYghxUxqHgyl4",
      "slug": "dwarf-general",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a70269a2622f40bf155da52eddf182384d5ebeecfea17f4d61ff3e67291c5a7b",
    "translatableHash": "sha256:6b98c12b8c0e5af0d646af50aaa375e86d77d6195574c21ed0e6fbb725a740af",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf General",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "Dwarven generals embody pride in knowledge and tactical acumen, using their understanding of warfare and battlefield strategy to coordinate their subordinates into optimal locations. They also remain ready to enter combat at a moment's notice and bring a fight to an enemy themselves.\nFrom the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.",
      "armorClass": 26,
      "hitPoints": 150,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 14,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 19,
        "diplomacy": 12,
        "intimidation": 14,
        "medicine": 15,
        "society": 13,
        "survival": 15
      },
      "languages": [
        "common",
        "dwarven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "WiVGVrg8maQe9pjQ",
          "name": "Clan Dagger",
          "bonus": 19,
          "damage": "1d4+11 piercing",
          "traits": [
            "agile",
            "parry",
            "versatile-b"
          ]
        },
        {
          "id": "usAqrvK8ZOP1AEjq",
          "name": "Warhammer",
          "bonus": 20,
          "damage": "2d8+11 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "SZKSVvQNvd2K5PWY",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "cpDa0DroDYx50mLQ",
          "name": "Arbalest",
          "bonus": 15,
          "damage": "1d10+6 piercing",
          "traits": [
            "backstabber",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "tyHN21m8brzlaBDW",
          "name": "Opening Orders",
          "kind": "passive",
          "description": "Trigger The dwarf general rolls initiative and can see at least one enemy\nEffect The general unleashes a command to ready for combat. Each ally within 120 feet that can hear the general can either Raise a Shield or Step as a free action when it rolls initiative.",
          "traits": [
            "auditory",
            "linguistic"
          ]
        },
        {
          "id": "mP2NhyurYaSpd1GF",
          "name": "Dwarven Doughtiness",
          "kind": "passive",
          "description": "Dwarves are often calm and collected in the face of imminent danger. At the end of the general's turn, reduce its Frightened condition by 2 instead of 1.",
          "traits": []
        },
        {
          "id": "ixDUVMlBC9ZjEzk0",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "The dwarf general gains an additional reaction at the beginning of each of their turns that they can use only for a Reactive Strike.",
          "traits": []
        },
        {
          "id": "IPjV2dsKFcGzJgjF",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "hzXSoyS2KLam4Fjx",
          "name": "Advancing Orders",
          "kind": "action",
          "description": "The dwarf general issues a command to push forward on the battlefield. Each ally who hears and understands this command becomes Quickened until the end of its next turn but can use the extra action only to Step or Stride.",
          "traits": [
            "auditory",
            "linguistic"
          ]
        },
        {
          "id": "t8LguHGukLYPbAeq",
          "name": "Hammer Critical Specialization",
          "kind": "passive",
          "description": "When the general critically hits with a hammer, the target of the critical hit is knocked Prone unless it succeeds at a check (fortitude, dc:26, options:inflicts:prone) save.",
          "traits": []
        },
        {
          "id": "UJyAqc1BVn1UEDgb",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "Frequency once per round\nEffect The dwarf general Strides twice. If they end their movement within melee reach of at least one enemy, they can make a melee Strike against that enemy.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:traveling-priest-of-desna",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "8LPVBXx8oIdXiNYQ",
      "slug": "traveling-priest-of-desna",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a36a6e8dfb3bc7a2720c7e5a2574980ac5b2062c6d5b5a42d71d8adeecd6fed5",
    "translatableHash": "sha256:1014d180282c814bcce0a4e5867a48f60dd0ec22af5e136ffe5fb8a25404821e",
    "data": {
      "schemaVersion": 1,
      "name": "Traveling Priest of Desna",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Deities and their religions are only as strong as the belief of their faithful. Traveling priests spread word to all corners of Golarion, building the numbers devoted to their denomination through their journeys. No matter where they may be headed or found, a traveling priest is likely to be healing someone with a spell, delivering a message, or simply trying to ensure their faith is spread.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 27,
      "hitPoints": 140,
      "speedFeet": 30,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 19,
        "will": 19
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "diplomacy": 17,
        "religion": 21,
        "society": 16,
        "survival": 19
      },
      "languages": [
        "common",
        "elven",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ibx8xhXEmfox2gCq",
          "name": "Starknife",
          "bonus": 20,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "ii91xbxG1TGO7Fvp",
          "name": "Starknife",
          "bonus": 20,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        },
        {
          "id": "WocMqx8l40ROrNqT",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+8 bludgeoning",
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
          "id": "Wv12g7WLBxUzhH4D",
          "name": "Path of the Faithful",
          "kind": "passive",
          "description": "The pilgrim can evangelize their religious teachings to use their Religion modifier instead of Diplomacy to [[/act gather-information skill=religion]] or [[/act make-an-impression skill=religion]].",
          "traits": []
        },
        {
          "id": "NwYXRTRz4u3c8CRl",
          "name": "Traveler's Lesson",
          "kind": "passive",
          "description": "Creatures that engage in conversation with the traveling priest gain a +2 circumstance bonus to all Recall Knowledge checks and Gather Information checks for 4 hours related to any topics discussed with the traveling priest.",
          "traits": []
        },
        {
          "id": "sbODhq6ru4G0BMKx",
          "name": "Messenger's Amnesty",
          "kind": "passive",
          "description": "A traveling priest with a message to deliver is continually protected by a DC 25 Sanctuary spell. If the traveling priest breaks the sanctuary, the effect returns if the traveling priest ceases hostility for 10 minutes.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "kaQx4K3e8zNsbEu3",
          "name": "Blessing of Travel",
          "kind": "passive",
          "description": "If the traveling priest takes an action with the move trait, their Strikes deal an extra 2d8 spirit damage until the end of their turn.",
          "traits": []
        },
        {
          "id": "bUHgJ0FaXbtGl6H4",
          "name": "Zealous Rush",
          "kind": "reaction",
          "description": "Trigger The traveling priest casts a spell that takes 1 or more actions and affects only them\nEffect The traveling priest Strides up to 10 feet, or up to their full Speed if the triggering spell took 2 actions or more to cast.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "pcZBfywrMTOuNtg9",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "1PpI9DhhDqetlJ0C",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "DsgGo7ulP8ehG0UM",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "ATAVSQBmlxuotTqV",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "MBMj1x2aJ52AyKWq",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "I5mGhPMEpZySbxOU",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "lXv5koImVaHz1umm",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "7tq5Xa0kECyww2p3",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IZ5Pc4RCBA4tKukf",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "ojTbTUgZ69HYSwsJ",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "gyY4DPjWeRNkBEvn",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "SZVlSN6xxZtiwQhg",
              "name": "Create Food",
              "rank": 2
            },
            {
              "id": "R2JMlRbYyY2XN7zi",
              "name": "Environmental Endurance",
              "rank": 2
            },
            {
              "id": "NonUitM8vjnEwPa7",
              "name": "Silence",
              "rank": 2
            },
            {
              "id": "W5kvNT6seRN2x20K",
              "name": "Spiritual Armament",
              "rank": 2
            },
            {
              "id": "POzaYhFjuvyejRYZ",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "OS8PTcri7yaTKpzo",
              "name": "Holy Light",
              "rank": 3
            },
            {
              "id": "LOSkktEutzDD33xs",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "yP6IRqrmWxlOYTDx",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "f36vg6FvRNmu5qWL",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "Np4U9Xb7aiximKd7",
              "name": "Sending",
              "rank": 5
            }
          ]
        },
        {
          "id": "nFd6xRb37GIPw9o4",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "FTnk1KksxQWiAYlX",
              "name": "Agile Feet",
              "rank": 1
            },
            {
              "id": "NI0UntC7q3S6YkNa",
              "name": "Traveler's Transit",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:iruxi-masked-mummer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "cNXg1uiwM9Dafdko",
      "slug": "iruxi-masked-mummer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e3903dc5cb766f580031da17c58de209c771cd00ce64181f7651071ac0f6f122",
    "translatableHash": "sha256:5109c8feed5689991efc3f29e018bc491a8e062b1ad5a26ddbab7eb9fd8b28aa",
    "data": {
      "schemaVersion": 1,
      "name": "Iruxi Masked Mummer",
      "level": 9,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "lizardfolk"
      ],
      "description": "Iruxi masked mummers bring lizardfolk myths to life, donning elaborate costumes and bone masks to enact stories featuring their ancestors, the gods, legendary dragons and dinosaurs, and nature spirits of all kinds.\nThe most talented mummers claim their ritual dances invite these spirits inside them, suffusing their bodies with starlight and lending them primal power uniquely tied to the luminaries their masks represent. This magic can be seen even by those without magical ability, as they can see glowing motes shaped like distant stars seeming to float under the skin of the mummer.\nLizardfolk culture has flowered in recent years. With that revival has come a new generation of iruxis (as they call themselves) more willing to engage with the wider world, bringing with them their society's reverence for the past, facility with nature, and willingness to defend itself.",
      "armorClass": 27,
      "hitPoints": 155,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 19,
        "will": 18
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 0,
        "int": 1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 17,
        "intimidation": 19,
        "nature": 18,
        "performance": 20,
        "society": 16,
        "survival": 18
      },
      "languages": [
        "common",
        "draconic",
        "iruxi",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Xu5rnjnvcAF3FuEo",
          "name": "Tail",
          "bonus": 20,
          "damage": "2d6+8 bludgeoning",
          "traits": [
            "finesse",
            "sweep",
            "unarmed"
          ]
        },
        {
          "id": "sD8nNesP62YzR687",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d4+8 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed",
            "versatile-p"
          ]
        },
        {
          "id": "2hmdZNVQ5AHU6tqm",
          "name": "Spectral Roar",
          "bonus": 19,
          "damage": "3d10 sonic",
          "traits": [
            "primal",
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "JEEpnPA6ApcxWimd",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "An iruxi masked mummer can hold their breath for 20 minutes.",
          "traits": []
        },
        {
          "id": "oIXWkbczFkJ8KZlj",
          "name": "Don Mask",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nEffect The mummer dons a ceremonial skull mask, calling an ancestral spirit to come to their aid. The spirit answers with a spell the mummer can cast as a primal innate spell (5th rank, DC 27) as part of the Don Mask activity. The mummer also gains a primal boon that lasts for 1 minute. After the minute is over or the mask is removed, the spell and boon end if either is still active, and the mummer is Fatigued. The most common legendary spirits the masks can invoke are:\n• Fiery Akkarok (tyrannosaurus mask)\n• Spell Blazing Bolt (3-action version)\n• Boon The mummer's melee Strikes deal an additional 2d6 fire damage.\n• Hazi Zephyr-Borne (griffon or iruxi mask)\n• Spell Wall of Wind\n• Boon The mummer gains a fly Speed of 20 feet.\n• King of Storms (roc or horned dragon mask)\n• Spell Howling Blizzard\n• Boon The mummer gains the Reactive Strike reaction that can be used only with their tail.\n• Nessek, the Wave Dancer (mosasaur mask)\n• Spell Slither\n• Boon The mummer's claw Strikes deal an additional 2d4 persistent bleed damage.\n• Zalok, Who was Called to Black Harbor (naga or spinosaurus mask)\n• Spell Hydraulic Torrent\n• Boon The mummer gains a +10-foot status bonus to their land Speed and swim Speed.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "yejcLHz02aGTNOKx",
          "name": "Starry Presence",
          "kind": "action",
          "description": "30 feet. With a quick dance, the iruxi masked mummer surrounds themself with a starlight image resembling a figure from legend. The image lasts until the start of the mummer's next turn. An enemy that enters or starts its turn in the aura must succeed at a check (will, dc:25, options:area-effect,inflicts:dazzled) save or become Dazzled until the start of its next turn.",
          "traits": [
            "aura",
            "illusion",
            "light",
            "mental",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:expedition-leader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Dd7E7pMKxPhrXaa8",
      "slug": "expedition-leader",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:92eefa809345a6005ab3b9bdeb24663b0f4e6031c970eb9101de045ddd2c1dad",
    "translatableHash": "sha256:e5396c62e97903560f9f348d5248f3d3b3925f4a4aba7c49ed2ab58907e8c82c",
    "data": {
      "schemaVersion": 1,
      "name": "Expedition Leader",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Full-scale expeditions require a central leader. Expedition leaders tend to have level heads in dangerous situations and can make decisions quickly when time is of the essence.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 27,
      "hitPoints": 160,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": []
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": 2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 20,
        "diplomacy": 18,
        "nature": 19,
        "survival": 18
      },
      "languages": [
        "common",
        "erutaki",
        "skald",
        "tien",
        "varki"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ufaXTorJdbtlwFI1",
          "name": "Machete",
          "bonus": 21,
          "damage": "2d6+10 slashing",
          "traits": [
            "deadly-d8",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "NSsjhVxEakY7PNkw",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "2pzSpJSWSGWKoalu",
          "name": "Shortbow",
          "bonus": 19,
          "damage": "1d6+6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "WS6gFVAY5T9qAD33",
          "name": "Familiarity with the Land",
          "kind": "passive",
          "description": "The expedition leader isn't affected by severe weather and ignores difficult terrain.",
          "traits": []
        },
        {
          "id": "ZhTgMkNq3Stgaez2",
          "name": "Memories of Expeditions Past",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The expedition leader fails a Survival check\nEffect The expedition leader rethinks their choices based on prior experience. The degree of success increases by one step, from critical failure to failure or from failure to success.",
          "traits": []
        },
        {
          "id": "mE6owjPlPMSQ9lZf",
          "name": "On Guard",
          "kind": "passive",
          "description": "When the expedition leader Scouts, they grant their party a +2 circumstance bonus to their initiative rolls.\nEffect: On Guard",
          "traits": []
        },
        {
          "id": "gwI6ZHIOqLD4ozr5",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "6kcRi4tBqCrV8PPg",
          "name": "Quick Draw",
          "kind": "action",
          "description": "The expedition leader Interacts to take out their machete or shortbow, then Strikes with the weapon.",
          "traits": []
        },
        {
          "id": "PzJckzc3QtZrS8wv",
          "name": "Think Fast!",
          "kind": "action",
          "description": "Requirements The expedition leader has a hand free\nEffect The expedition leader scoops up a handful of rubble and throws it. Each creature in a 15-foot type:cone must succeed at a check (reflex, dc:27, options:area-effect,inflicts:dazzled,inflicts:off-guard) save or be Dazzled and Off-Guard until the start of the expedition leader's next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:high-priest-of-pharasma",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "deQ6Vg46CS6GTu7J",
      "slug": "high-priest-of-pharasma",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:581ed732cadd975e05a6bc6d5b5db86f698188df120dd7e61e2d60e7979f9ae7",
    "translatableHash": "sha256:d72076ffa349dde0bba26b9303dc3d31f31229baf30bc32f89c1009368f0c9e6",
    "data": {
      "schemaVersion": 1,
      "name": "High Priest of Pharasma",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "High priests are the leaders of larger churches and similar religious establishments, watching over the lower-ranking clergy and ensuring the surrounding community is taken care of. This can be a highly political position, as the leader of the faith in an area has a powerful influence over everyday citizens.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 26,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 21
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": -1,
        "int": 3,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "diplomacy": 25,
        "intimidation": 17,
        "medicine": 18,
        "performance": 17,
        "religion": 26
      },
      "languages": [
        "common",
        "requian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "DaLY8qVjJ5QiTKLJ",
          "name": "Dagger",
          "bonus": 18,
          "damage": "2d4+7 piercing; 1d10 spirit",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "XzSCMiod5QCMPemL",
          "name": "Dagger",
          "bonus": 17,
          "damage": "2d4+7 piercing; 1d10 spirit",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "Uok5lw8F59mfSNU1",
          "name": "Fist",
          "bonus": 17,
          "damage": "1d4+7 bludgeoning; 1d10 spirit",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "FFtRDe635maJ6nGk",
          "name": "Hand Crossbow",
          "bonus": 17,
          "damage": "1d6+7 piercing; 1d10 spirit",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "HFPIgJxAdemd6ItG",
          "name": "Religious Specialist",
          "kind": "passive",
          "description": "For encounters involving religious debates, church politics, and conflicts of doctrine, the high priest is a 13th-level challenge.",
          "traits": []
        },
        {
          "id": "3jw1aDaBLwRZmLPY",
          "name": "Steward of the Faithful",
          "kind": "passive",
          "description": "30 feet.\nEach ally in the aura who worships Pharasma gains resistance 5 to void and a +1 status bonus to Will saves, Diplomacy checks, and Medicine checks.",
          "traits": [
            "aura",
            "divine",
            "vitality"
          ]
        },
        {
          "id": "qyfnISUNMYriKGNK",
          "name": "Unshakable Faith",
          "kind": "passive",
          "description": "During a religious debate, clash of church politics, or similar conflict, the high priest gains a +4 circumstance bonus to Perception check to Sense Motive and to their Perception DC against attempt to Lie to them.",
          "traits": []
        },
        {
          "id": "6SS8rVfwSj7Oy7WY",
          "name": "Healing Hands",
          "kind": "passive",
          "description": "When the high priest casts Heal, they roll d10s instead of d8s.",
          "traits": []
        },
        {
          "id": "gPPQ8LBSdpJuL575",
          "name": "Restorative Channel",
          "kind": "passive",
          "description": "The high priest can sacrifice one prepared Heal spell to instead cast Cleanse Affliction, Clear Mind, Sound Body, or Sure Footing at the same spell rank.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "3lmMOkUuWRYkYOfO",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "DGRfo6jK83h7aTtk",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "xVd2m1t3oAITJZUZ",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "YUUhXiUM27mrvz6R",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "yWFrXX3JJOcQV3n8",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "6vPJuDpi6RGJpvaY",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "cfas5QxFYdTrGlQl",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "1h2DVgmYozEq9SiU",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "DVzHMs5gVOhsWmML",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "SHqrtoA6HgrYh2IZ",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "85N3dLHO4zkcNqkP",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "PBI5zgYBeKdTkHdC",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "0LfFnqCJZqyCCJrG",
              "name": "Darkvision",
              "rank": 2
            },
            {
              "id": "INXd1isWRGi3ZTzD",
              "name": "Status",
              "rank": 2
            },
            {
              "id": "dO6cVC6gHtVfwAq0",
              "name": "Ghostly Weapon",
              "rank": 3
            },
            {
              "id": "GKth6knANtMEy7Na",
              "name": "Heroism",
              "rank": 3
            },
            {
              "id": "G4xVKE4fMQyYDXgb",
              "name": "Holy Light",
              "rank": 3
            },
            {
              "id": "ClpbOIHRr3zk0Xzr",
              "name": "Vision of Death",
              "rank": 4
            },
            {
              "id": "i0glFK8iYijYOBu6",
              "name": "Vital Beacon",
              "rank": 4
            },
            {
              "id": "8NG8ro5zzMyWEI7d",
              "name": "Breath of Life",
              "rank": 5
            }
          ]
        },
        {
          "id": "JCFQaCMK8sKMFgL2",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "jao6JcplrOzy205i",
              "name": "Death's Call",
              "rank": 1
            },
            {
              "id": "awxjpXz2vZMn7OmV",
              "name": "Eradicate Undeath",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mirror-seer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "JfAyvn0mKWptD9xr",
      "slug": "mirror-seer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:82a9f715e618bd90b8050c447286a5fc55ada2836fd5d40d38b7ee008a5ce630",
    "translatableHash": "sha256:f6d37254ef142f1c9de61fccdd167a18379ef96ece63f4e09b0884a065d86302",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror Seer",
      "level": 9,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Seeking to be the most powerful and perfect creature in their domain, a mirror seer forges a deal with a nefarious entity for more power. Through a magic mirror called a malefic mirror, they communicate with this entity and spy on the events that unfold in their realm.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 27,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 20
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": -1,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "deception": 21,
        "diplomacy": 17,
        "occultism": 19,
        "performance": 17,
        "society": 17,
        "stealth": 17
      },
      "languages": [
        "common",
        "diabolic",
        "fey",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "tvReCZGfWGtz32jE",
          "name": "Dagger",
          "bonus": 19,
          "damage": "1d4+8 piercing",
          "traits": [
            "agile",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "MlMAJmVw0HWNZjzi",
          "name": "Dagger",
          "bonus": 19,
          "damage": "1d4+8 piercing",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "sHZPIIVpCcI1uSMK",
          "name": "Staff",
          "bonus": 19,
          "damage": "2d4+8 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "0jyNp7aMHOgmHm17",
          "name": "Fist",
          "bonus": 18,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "32USGBWaWVkYmnb4",
          "name": "Looking Glass Magic",
          "kind": "passive",
          "description": "The mirror seer accesses power from their wicked benefactor through two mirrors: one full-sized Malefic Mirror in their sanctum and an enchanted hand mirror they can carry on their person.\n• Malefic Mirror The mirror seer must visit the malefic mirror once per day to retain their spellcasting abilities, and they can activate the mirror for special Scrying and Illusory Disguise spells as noted in the mirror's stat block.\n• Enchanted Hand Mirror Without their enchanted hand mirror on their person, the mirror seer takes a –2 circumstance penalty to spell attack rolls and DCs and can't cast their 7th-rank spells. If it's not attended by the mirror seer, the hand mirror has AC 10, Hardness 0, and 1 HP.",
          "traits": []
        },
        {
          "id": "at2ERxmYpEhmzXxL",
          "name": "Rightfully Mine",
          "kind": "reaction",
          "description": "Trigger The mirror seer observes a creature making a Strike, casting a spell of 4th rank or lower, or using a special action (the triggering action must take 2 actions or fewer)\nEffect The mirror seer expends a 4th-rank spell slot (or higher) to duplicate the triggering action. This mimicked action occurs immediately after the triggering action, using the triggering creature's statistics unless the mirror seer's are higher. The creature the mirror seer mimicked is then temporarily immune to this ability for 10 minutes.",
          "traits": []
        },
        {
          "id": "hkMVYwUs86ro24qA",
          "name": "A Fairer Face",
          "kind": "action",
          "description": "The mirror seer chooses a creature within 100 feet that can see its own reflection in a mirror. The creature must succeed at a check (will, dc:29, options:inflicts:fascinated) save or become Fascinated by their reflection for 1 minute. The creature can attempt a new save to end the effect at the end of each of its turns.",
          "traits": [
            "concentrate",
            "emotion",
            "mental",
            "occult"
          ]
        },
        {
          "id": "CPAf0t8RHrhhckSd",
          "name": "Hall of Mirrors",
          "kind": "action",
          "description": "Frequency once per day\nEffect The mirror seer causes all surfaces in a 30-foot type:burst within 100 feet to become reflective for 1 minute. Every creature in the area or that later enters the area must succeed at a check (will, dc:27, options:area-effect,inflicts:confused) save or become Confused by the reflections and refractions. The confusion ends if the creature leaves the area, and the creature can attempt a new save to end the effect at the end of each of its turns. When the effect ends for a creature, that creature becomes temporarily immune for 10 minutes.",
          "traits": [
            "concentrate",
            "illusion",
            "manipulate",
            "occult"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "cGpgqQ5shnmCZwEZ",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "KbFNT9WGM8J5xr5K",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "oBGbxHlFva93wsxO",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "Qs8WvPgB0UEjacIO",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "EaSN7pYMsnSAYpkU",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Js3K2UNsW7SWT4uv",
              "name": "Item Facade",
              "rank": 1
            },
            {
              "id": "xOgLXc92Vhdx3oqN",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "GvkwjZyaQOKL56EJ",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "52J3CnLmq3UelqP8",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "Q1JVjeMyLw54E3cw",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "ogAYLDpV7Qk3S4aA",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "XP3Ki4w1bz6Q0iVs",
              "name": "Status",
              "rank": 2
            },
            {
              "id": "Nz55CUBRpvbugDqz",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "1YA1vzUzPCF9zu1q",
              "name": "Hypnotize",
              "rank": 3
            },
            {
              "id": "yaElwzuQqHU1A1Fz",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "ZtgEzomASA3ZU4Gm",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "gJtVOzTHTXs5Q5YP",
              "name": "Detect Scrying",
              "rank": 4
            },
            {
              "id": "c2apTnHPnUEt7MdT",
              "name": "Peaceful Bubble",
              "rank": 4
            },
            {
              "id": "t8yHdaEwhwfbRfCn",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "z0LcGsZAArzvH3GQ",
              "name": "Shadow Blast",
              "rank": 5
            },
            {
              "id": "ABsI2IlgKEMU9kob",
              "name": "Illusory Disguise (Self Only)",
              "rank": 7
            },
            {
              "id": "9BB5aH5XblTgcBlR",
              "name": "Scrying",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mercenary-band",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "nN1fOQT8FDgbmQdx",
      "slug": "mercenary-band",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cc8a24c3ef3453dd6b16fdccde76165ccac314b41f073f5d4e00fa18495d8e92",
    "translatableHash": "sha256:3a5c9774b717a2e576ef0ccdd5230496820403eb6a052a020ef2234ae2dcceee",
    "data": {
      "schemaVersion": 1,
      "name": "Mercenary Band",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Some bands of experienced soldiers have storied reputations, their rolls filled with legendary warriors. Others are whispered of for their cruel deeds and opportunistic betrayals.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 26,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 19,
        "intimidation": 18,
        "society": 14,
        "survival": 15,
        "thievery": 19
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "aNvmPH9a41vU2FYf",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "axbQAwviDvOnX8yc",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "MsrrFoKurdqAnnPb",
          "name": "Let 'em Have It!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The mercenary band engages in a coordinated attack with its wide array of melee weapons against each enemy in a 5-foot type:emanation with a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d8+2)[bludgeoning|options:area-damage], (1d8+2)[piercing|options:area-damage], or (1d8+2)[slashing|options:area-damage]\n2 (3d8+4)[bludgeoning|options:area-damage], (3d8+4)[piercing|options:area-damage], or (3d8+4)[slashing|options:area-damage]\n3 (4d8+6)[bludgeoning|options:area-damage], (4d8+6)[piercing|options:area-damage], or (4d8+6)[slashing|options:area-damage]",
          "traits": []
        },
        {
          "id": "8BepGIHpY5yY5uZf",
          "name": "Ready... Fire!",
          "kind": "action",
          "description": "The mercenary band draws or reloads their bows, crossbows, and slings, then launches a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 120 feet that deals (2d8+4)[piercing|options:area-damage] or (2d8+4)[bludgeoning|options:area-damage] damage with a check (reflex, dc:25, basic, options:area-effect) save. When the mercenary band is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "J5IIQDWJiT0KX2ed",
          "name": "Spoils of War",
          "kind": "action",
          "description": "Requirements The band's last action was Let 'em Have It and at least one creature failed its save\nEffect The mercenary band attempts to [[/act steal]] one object from each enemy that failed its save, even if the enemy is in combat or on guard.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:accuser-agent",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "u1coIGvOeO8XZjKu",
      "slug": "accuser-agent",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:168350dbbf1bf7f02ff091028bcc347473358a40ae3b892acef8beb3d4034c8b",
    "translatableHash": "sha256:394cddb8f8924390b205ad217635143857ff88bef1db5104382461aefb8320a9",
    "data": {
      "schemaVersion": 1,
      "name": "Accuser Agent",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Accuser agents might be high court advocates, official spymasters, or innocuous adjutants delivering important messages to magistrates, generals, officers, or mercenaries. They have ample latitude in matters of government security, though they sometimes have little oversight. When their findings demand an official response, accuser agents present cases before national tribunals or in royal courts.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 28,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 19,
        "will": 19
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 3,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "deception": 20,
        "diplomacy": 18,
        "intimidation": 18,
        "society": 18,
        "stealth": 17,
        "thievery": 19
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
          "id": "BKpUsI3mLhP4a5Gb",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "sHl7niNLzijcQUTA",
          "name": "Dagger",
          "bonus": 20,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "nJIG2utSOOfFVcnI",
          "name": "Dagger",
          "bonus": 20,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "finesse",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        },
        {
          "id": "bQcDt11DEzCJhAgu",
          "name": "Sword Cane",
          "bonus": 20,
          "damage": "2d8+8 piercing",
          "traits": [
            "agile",
            "concealable",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "VYqmsfhYCU6ak1bm",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "t9t9UyZUzYGkBBPE",
          "name": "Insightful",
          "kind": "passive",
          "description": "When the accuser agent succeeds at a Perception check, they critically succeed instead.",
          "traits": []
        },
        {
          "id": "ZSCvVtnwBBsaHEPX",
          "name": "Objection!",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet takes an action with the linguistic trait\nEffect The triggering creature must succeed a check (will, dc:28) saving throw or their action is disrupted.",
          "traits": [
            "auditory",
            "linguistic"
          ]
        },
        {
          "id": "pEleFpfQhh9d9z1I",
          "name": "Debilitating Sneak Attack",
          "kind": "passive",
          "description": "The accuser agent's Strikes deal an extra 3d6 precision damage to Off-Guard creatures. A target who takes this additional precision damage also either becomes Enfeebled 1 or takes a –10-foot status penalty to its Speeds until the end of the agent's next turn.\nEffect: Debilitating Sneak Attack",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:humanitarian-hermit",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "XmWD4T7LcpvNkq6b",
      "slug": "humanitarian-hermit",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:18c9291b714b7f90d2d95d4d310e96c78e5206b7c3abdffabf70085234118275",
    "translatableHash": "sha256:312fa1e80caf0f1b6e5f01d46e28b1bdff9ef36550e3917758ac27c79242d595",
    "data": {
      "schemaVersion": 1,
      "name": "Humanitarian Hermit",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Some druids look after those forgotten by society and thrive at the borders of civilization.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 26,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 16,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 1,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "athletics": 19,
        "diplomacy": 14,
        "medicine": 21,
        "nature": 19,
        "society": 14,
        "survival": 17
      },
      "languages": [
        "common",
        "fey",
        "wildsong"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "zheq0c6hA3QzYDfx",
          "name": "Staff",
          "bonus": 20,
          "damage": "2d4+10 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "RKv0y5IR7ZFsCvBH",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "gYuKjrBO6DA0OJiW",
          "name": "Plant Empathy",
          "kind": "passive",
          "description": "The humanitarian hermit can ask questions of, receive answers from, and use the Diplomacy skill with plants and fungus.",
          "traits": []
        },
        {
          "id": "r8lrGkBUsGoxK92U",
          "name": "Cleansing Earth",
          "kind": "action",
          "description": "Frequency once per hour\nEffect The humanitarian blesses the land and their allies. In a 30-foot type:emanation, plants grow and become difficult terrain. Additionally, all allies in the emanation gain 20 temporary Hit Points and can ignore the difficult terrain. These effects last for 1 minute.\nEffect: Cleansing Earth",
          "traits": [
            "plant",
            "primal"
          ]
        },
        {
          "id": "XApTdhFCYSr7LDCY",
          "name": "Primal Staff",
          "kind": "passive",
          "description": "A staff wielded by the humanitarian hermit gains the parry, reach, and trip traits, and Strikes with it deal an additional 2d8 vitality damage.",
          "traits": []
        },
        {
          "id": "8lpXJrdCbqoYayie",
          "name": "Steady Spellcasting",
          "kind": "passive",
          "description": "If a reaction would disrupt the humanitarian hermit's spellcasting action, the hermit attempts a check (flat, dc:15). On a success, the action isn't disrupted.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "gZi9G7ketHrnJuPL",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "YyC093cJ0L5nAD60",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "64A6p9ms12BG8NDN",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "9ErbAC0QO1lFwfnv",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "JhIAOE3WA1Q08fkC",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "u4A7SPZz7Nzn7kyC",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "sVoUAhs1xtPw5XUm",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "DuFWLRvrYnaorVQF",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "pXz3RWfEQoI5pydl",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "JePy1EkUFfRUBeWU",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "kOM5Ijyx5HvOC0Zh",
              "name": "Cleanse Affliction",
              "rank": 2
            },
            {
              "id": "eHLujW1w7L8fo2ph",
              "name": "Create Food",
              "rank": 2
            },
            {
              "id": "pdUJBjOXFtBrFpIw",
              "name": "Environmental Endurance",
              "rank": 2
            },
            {
              "id": "kLQvD5knLWZ2Qlwk",
              "name": "Peaceful Rest",
              "rank": 2
            },
            {
              "id": "6EyqvJfJa3OZ7TIZ",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "6viviYeMnBiq7vvM",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "rDErKKgENdSOsdNm",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "hV2SWaSMhYqezSOQ",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "ivyx4y9Gl9ZXMHvq",
              "name": "Vital Beacon",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mage-knight",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "0cj7cQhgNnLxbUmR",
      "slug": "mage-knight",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2b8d85eada2a608c1033fea68e284c596023c23cf2c9cb52c01c35b39dd2bdea",
    "translatableHash": "sha256:a17df2833d0354f059a621ce855df430ba7a998d940093d174ee8bad7d22d16a",
    "data": {
      "schemaVersion": 1,
      "name": "Mage Knight",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Though many spellcasters prefer to defend themselves with magic, some recognize that there's no substitute for a suit of steel. Mage knights defy the stereotype that spellcasters are frail, delicate, and passive and instead choose to hold their own in close-quarter combat.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 29,
      "hitPoints": 140,
      "speedFeet": 20,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 13,
        "will": 21
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 2,
        "int": 4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "arcana": 22,
        "athletics": 21
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
          "id": "v5WEvp5i8HyU572x",
          "name": "Fist",
          "bonus": 21,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "tO4zElFJRYGbTmbY",
          "name": "Mace",
          "bonus": 22,
          "damage": "2d6+11 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        }
      ],
      "actions": [
        {
          "id": "5QycBrEi0tfFUCvK",
          "name": "Reflex +16 Against Damaging Effects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "wmNaIfVGh5fJU56O",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "ygH5iJPyrt0O1lEP",
          "name": "Bespell Strikes",
          "kind": "passive",
          "description": "Frequency once per turn\nRequirements The mage knight's most recent action was to cast a non-cantrip spell\nEffect The mage knight siphons spell energy into one weapon they're wielding, or into one of their unarmed attacks. Until the end of the turn, the weapon or unarmed attack deals an extra 2d6 force damage and gains the arcane trait if it didn't have it already. If the spell dealt a different type of damage, the Strike deals this type of damage instead",
          "traits": []
        },
        {
          "id": "YTNwwfDQJx9hSWsb",
          "name": "Drain Bonded Item",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The mage knight hasn't acted yet on this turn\nEffect The mage knight expends the power stored in their bonded item (typically their shield). This gives them the ability to cast one prepared spell they prepared today and already cast, without spending a slot.",
          "traits": [
            "arcane"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "EZPbSs6MIocHuwu5",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "EbF9Ko931GCHJoNo",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "oP2pjJF2pFmdYgJS",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "ON1NM8RMCrrkZa6L",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "nCddqo1HPTJSMt2H",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "tqYuINrgW7fzqRbL",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "BGcxQPHFMjpVebF5",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "yQeK1YGNnwkbZ4Ga",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "2xFYFiJqNviEq9Nu",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "X5eivJ2G4HKpV7Mb",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "4QtjcbvBAEFq9VfE",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "i4nvRl4RIupg9MLk",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "3mfGGh5ney2uD2IL",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "w8Dw6VXm4vcpUbZ6",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "aHv2CGlhG9WjjKdw",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "gk2nHjFcfn8rph74",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "pvBJdgPdaTEL7DHA",
              "name": "Vampiric Feast",
              "rank": 3
            },
            {
              "id": "aSshaIVjCCwRy8gH",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "7hLmlTTzL9gQQ8WK",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "FIlu3bLB3nP9cIPI",
              "name": "Weapon Storm",
              "rank": 4
            },
            {
              "id": "VECXmgGNfSAlfWBF",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "kxeXUrqMZ359db5q",
              "name": "Toxic Cloud",
              "rank": 5
            }
          ]
        },
        {
          "id": "ilpE8aUeM9CRBcbh",
          "name": "Wizard Focus Spells",
          "tradition": "arcane",
          "category": "focus",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "sBbIjYoUniZtuzph",
              "name": "Force Bolt",
              "rank": 1
            },
            {
              "id": "ox8TmKm9FP0m3jFH",
              "name": "Energy Absorption",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:watchmage-squadron",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "4gz263pSwpuyZQ6O",
      "slug": "watchmage-squadron",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b85f53b4790a9f6f5071877f4f98fe4486eae45137c1fed797caddc5febf32a",
    "translatableHash": "sha256:9837623d7c05c3cb42bdadb871ac1b278124779f3852437e5c3d9e45f937b727",
    "data": {
      "schemaVersion": 1,
      "name": "Watchmage Squadron",
      "level": 10,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Governments often organize and deploy squadrons of watchmages in places where dangerous magic is expected. Members combine their spellcasting to cast at a higher level than they could alone.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 30,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 22,
        "reflex": 16,
        "will": 19
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": 5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "arcana": 21,
        "athletics": 19,
        "intimidation": 20,
        "society": 19
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "xBmhWZhC7pG8wFAO",
          "name": "Invisibility Scan",
          "kind": "passive",
          "description": "Invisibility can't make anything Undetected or Unnoticed to the watchmage squadron.",
          "traits": []
        },
        {
          "id": "Lb4jak9FpVJDA7SQ",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "wdXe3ci8XwWMQBE9",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "x1DFRhp6qASjyl42",
          "name": "Bash Heads",
          "kind": "action",
          "description": "The watchmages lash out against all enemies in a 5-foot type:emanation with their fists, dealing (4d4+4)[bludgeoning|options:area-damage] damage with a check (reflex, dc:29, basic, options:area-effect) save.",
          "traits": [
            "nonlethal"
          ]
        },
        {
          "id": "kq0HhnkVCZAPSlRb",
          "name": "Fire Shortbows!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The watchmages fire a volley against each enemy in a 10-foot type:burst within 150 feet, with a check (reflex, dc:26, basic, options:area-effect) save. The damage depends on the number of actions. When the squadron is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.\n1 (1d6+3)[piercing,1d6 force damage|options:area-damage] damage\n2 (3d6+6)[piercing,1d6 force damage|options:area-damage] damage\n3 (4d6+6)[piercing,1d6 force damage|options:area-damage] damage",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "LLbhMo87QsyrDt3v",
          "name": "Troop Spellcasting",
          "kind": "passive",
          "description": "When the watchmage squadron Casts a Spell, the individual members combine their efforts into casting a more powerful version than any one member could achieve alone. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "MPr9zCLewHIZ91xP",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "9LY3lQFpctn85c6K",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "5qOo7gjW8TqcTZUF",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "QBVSaWECMzkyUnUb",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "lOlh8833emQgday8",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "c4DXw9pwgsNaaY1W",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "mRj0QKw96BH7E9qO",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "uF3Bdem5JHNGJmAn",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "XLuTInh7JgbzWXHU",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "m5re35FVpaG6Z0YZ",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "1i8fuycZRh75JXeX",
              "name": "Slither",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:infernal-registrar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "4iIpjKl1KThYRTgK",
      "slug": "infernal-registrar",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2964ba857286b657a37c0513e1ac90d64efb8d9f506efa223a5400b5b646ebbe",
    "translatableHash": "sha256:79e808a125734facf50a8e1bf10ce8f6a19e6cb8f4e738c419c956b6963f0981",
    "data": {
      "schemaVersion": 1,
      "name": "Infernal Registrar",
      "level": 10,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "The infernal registrar is a mortal representative of Hell's bureaucracy. They can access copies of all infernal contracts signed by a denizen of their world and can navigate the machinations of Hell's many devils. They can grant special access—for a price.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 27,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 16,
        "will": 33
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 5,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "deception": 22,
        "diplomacy": 33,
        "religion": 30,
        "society": 33
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EpewCZdCy41wPsm1",
          "name": "Staff of Office",
          "bonus": 19,
          "damage": "2d4+8 bludgeoning; 1d6 fire",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "oEkSsSVmgszHEwAw",
          "name": "Fist",
          "bonus": 18,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "IXlVRslfRZm87uS1",
          "name": "+14 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "2viuwWD0nooQXG1T",
          "name": "Contract Specialist",
          "kind": "passive",
          "description": "For encounters involving matters of contracts and dealings with Hell, the infernal registrar is an 18th-level challenge.",
          "traits": []
        },
        {
          "id": "aLx0kam6eK59AqGj",
          "name": "Death is a Promotion",
          "kind": "passive",
          "description": "The infernal registrar does not fear death, as they have a signed infernal contract for immediate promotion to a mid-ranked devil upon their soul's arrival in Hell. They're immune to all Intimidation checks to Coerce involving threats of death.",
          "traits": []
        },
        {
          "id": "J3qyg1YxHyK4eyq7",
          "name": "Friends in Low Places",
          "kind": "passive",
          "description": "Though devils do not respect most mortals, they respect the office of infernal registrar. No creature with the devil trait of 18th level or lower will knowingly and willingly attack an infernal registrar.",
          "traits": []
        },
        {
          "id": "1L5lEKER1bUFpi8t",
          "name": "Technically Correct",
          "kind": "passive",
          "description": "The infernal registrar uses their Legal Lore modifier on all Deception checks to [[/act lie statistic=legal-lore]].",
          "traits": []
        },
        {
          "id": "hMogOB62TfK2FASF",
          "name": "+2 Circumstance to All Saves vs. Fear",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ahipj1K6rqVOLTlv",
          "name": "A Favor for a Favor",
          "kind": "action",
          "description": "The infernal registrar has the authority to make limited infernal contracts with other mortals. They summon a contract with the legal language they desire. Detecting Hidden clauses in the contract requires a successful check (society, dc:43) or a check (legal-lore, dc:38) check. Once signed, the contract vanishes into the infernal filing system in Hell. The infernal registrar cannot grant any boons beyond their own personal power (usually limited to information, advice, or access to elements of the infernal bureaucracy).",
          "traits": [
            "concentrate",
            "divine"
          ]
        },
        {
          "id": "CHqQHA8YIr6uIaZe",
          "name": "Request Document",
          "kind": "action",
          "description": "The infernal registrar makes a request to summon a copy of any infernal contract a specific creature has signed. They must know enough information to specifically identify the individual who signed. The infernal registrar attempts a check (legal-lore) check with a DC equal to a hard DC of the level of the creature in question. The infernal registrar will never promise a successful use of this ability in the agreements they make. Each agreement is typically for one attempt. Any copy summoned is simply a copy, has no impact on the original contract if destroyed or altered, and will vanish if taken more than 20 feet from the infernal registrar.\nCritical Success A copy of the contract appears before the infernal registrar after 10 minutes.\nSuccess A copy of the contract appears before the infernal registrar after 1 hour.\nFailure The attempt fails, but the infernal registrar can try again after 24 hours.\nCritical Failure The attempt fails, and the infernal registrar can't try again for the named creature for 1 year.",
          "traits": [
            "concentrate",
            "divine"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "JP0OuGjnMiR3LCWH",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "h4LemG7pqYz7GXRH",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "gzoLqrQW83pkipWz",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "SncTuW6aAZj94WJZ",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "eAvZGH8nqA8zDxjP",
              "name": "Translate (At Will)",
              "rank": 2
            },
            {
              "id": "u6X3q6xu9DdJznaC",
              "name": "Chilling Darkness",
              "rank": 3
            },
            {
              "id": "MZIMAoNF5w3yMSpE",
              "name": "Fear",
              "rank": 3
            },
            {
              "id": "di63BMZZtBaKlQ0R",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "mNYqujQNq47qQAjT",
              "name": "Detect Scrying",
              "rank": 4
            },
            {
              "id": "1MfNuANj8N2gbqcG",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "Y5eDdGg3UYxGBb81",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "VA5keWnnIbno9RTR",
              "name": "Divine Immolation",
              "rank": 5
            },
            {
              "id": "IHVt2Yj2NO6IXn2o",
              "name": "Locate",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:orc-veteran-master",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "A4XWtiK4iStEDAUu",
      "slug": "orc-veteran-master",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:de57ede9f234ff185f34caa54154c9705e129d2603d28232a7e2fc889d4de1d9",
    "translatableHash": "sha256:422cc2c668d328a8873c8b97e99a13457ab3372715a29a2870a9ac85085687bd",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Veteran Master",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "While the sword and shield are reliable and proven in battle, the veteran master is the weapon. They have been hardened by decades of fighting, but they still manage to find peace within themselves to gain a physical advantage.\nOrcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.",
      "armorClass": 30,
      "hitPoints": 175,
      "speedFeet": 30,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 20,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 23,
        "diplomacy": 15,
        "intimidation": 20,
        "stealth": 20
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
          "id": "wvwVdXprqAb5EFLp",
          "name": "Bo Staff",
          "bonus": 24,
          "damage": "2d8+13 bludgeoning",
          "traits": [
            "magical",
            "parry",
            "reach",
            "trip"
          ]
        },
        {
          "id": "NNmj6PPPsVfIwgnD",
          "name": "Fist",
          "bonus": 24,
          "damage": "2d4+13 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "t3e2UqCZ3MRHhPca",
          "name": "Composite Longbow",
          "bonus": 23,
          "damage": "2d8+10 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "kMAdTKEsjBnOHGm1",
          "name": "Fly Through Battle",
          "kind": "passive",
          "description": "The veteran master gains an additional reaction each round that can be used only to make a Reactive Pursuit.",
          "traits": []
        },
        {
          "id": "8cU5kxCHCQAuTplM",
          "name": "Reactive Pursuit",
          "kind": "reaction",
          "description": "Trigger An enemy within reach attempts to move away\nEffect The veteran master Strides up to their Speed, following the enemy and keeping it in reach throughout its movement until it stops moving or the master has moved their full Speed.",
          "traits": []
        },
        {
          "id": "bV4zj3c1cCoLusxT",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "MesGxAKnB4mdVXQH",
          "name": "Reshape the Battle",
          "kind": "action",
          "description": "The veteran master attempts a bo staff Strike. If it hits a creature of the master's size or smaller, the master can automatically Reposition it to any space within the bo staff's reach.",
          "traits": []
        },
        {
          "id": "IqELgE0Z4oWcrFK1",
          "name": "Staff Swipe",
          "kind": "action",
          "description": "The veteran master extends their reach to smash multiple creatures with their bo. They attempt a bo staff Strike against each enemy in a 15-foot type:cone. This counts as two attacks toward their multiple attack penalty, but the penalty doesn't increase until after all the attacks.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:god-caller",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ADbAoVOiHrRFYtkW",
      "slug": "god-caller",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:69975a3bca9baafa67f44614d9bce3d7f4e72689eca622fd584c155a07473585",
    "translatableHash": "sha256:6cc52298560c624a75f583108fabb2fc2ee2a9749a25a4ebdc6116e044dd9902",
    "data": {
      "schemaVersion": 1,
      "name": "God Caller",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The summoners called god callers have a magical link to eidolons, revered as gods by the people of Sarkoris. Though this NPC is based on Sarkorian god callers, they can be adapted to different types of summoners by changing out the eidolon for another creature and making thematic tweaks to skills and spells.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.\nGod Callers and the Divine\nSome spirits called by god callers of Sarkoris are divine beings capable of granting spells. Consider granting a god caller NPC a cleric focus spell appropriate to one of the god's domains if they worship such a deity (using the same DC and spell attack as their primal spells). For instance, the Stag Mother of the Forest of Stones might grant the savor the sting domain spell from the pain domain.",
      "armorClass": 29,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 16,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "athletics": 20,
        "intimidation": 21,
        "nature": 19,
        "religion": 15,
        "survival": 15
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
          "id": "bUTThaJDSwhoxdaJ",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "QBapMlOoyxdf2nyA",
          "name": "War Flail",
          "bonus": 21,
          "damage": "2d10+10 bludgeoning",
          "traits": [
            "disarm",
            "magical",
            "sweep",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "Mi5kfa0MzUNwFYBU",
          "name": "Bonded Eidolon",
          "kind": "passive",
          "description": "The god caller fights alongside a mystical ally called an eidolon, most likely the Beast Eidolon. The eidolon has the standard number of actions, uses its normal stat block, and counts toward the encounter's XP budget normally. The eidolon must remain within 100 feet of the god caller, or its physical form will dissolve. The god caller can make their eidolon take form or disappear with the Manifest Eidolon action.",
          "traits": []
        },
        {
          "id": "lmpIvRCadR0ik5pZ",
          "name": "Beseech the Spirits",
          "kind": "action",
          "description": "Frequency once per day\nEffect The god caller reaches out to local entities for enhanced perception and perspective. The god caller gains lifesense 60 feet and all-around vision for 10 minutes. The god caller can't use this ability again until after propitiating the spirits during their next daily preparation.",
          "traits": [
            "concentrate",
            "primal"
          ]
        },
        {
          "id": "Niodt9WjPEtLxqqk",
          "name": "Manifest Eidolon",
          "kind": "action",
          "description": "The god caller causes their eidolon to manifest in a space adjacent to them if it's unmanifested, or to unmanifest and disappear from physical reality if it was already manifested.",
          "traits": [
            "concentrate",
            "manipulate",
            "primal",
            "teleportation"
          ]
        },
        {
          "id": "SE2swXmR6NhKfzwj",
          "name": "Tandem Trick",
          "kind": "passive",
          "description": "Frequency once per round\nEffect The god caller uses a team tactic with their eidolon, chosen from the following list, with the listed number of actions and traits.\n• Enlarge 2 (concentrate, manipulate) The god caller casts Enlarge on their eidolon even if the eidolon is beyond range or line of effect. The god caller doesn't need to expend a spell slot, and can choose 2nd or 4th rank.\n• Tandem Strike 2 The god caller makes a Strike and their eidolon can Strike as a reaction. Both attacks count toward the god caller's multiple attack penalty, but the penalty doesn't increase until both attacks have been made.\n• Transfer 1 The god caller transfers 50 HP from themself to their eidolon or vice versa. If the creature losing HP has 50 HP or fewer, this effect transfers as many HP as possible without reducing that creature below 1 HP.\n• Transpose 1 (concentrate, manipulate, teleportation) The god caller and their eidolon teleport to swap places.",
          "traits": [
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "7j7XcStbMURpUbMC",
          "name": "Primal Spontaneous Spells",
          "tradition": "primal",
          "category": "spontaneous",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "tTZn978yP4cyi46P",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "LbRCxlT6mQq1P0id",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "9Sc4zmD6KZqEKQ7Q",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "ox3azFN9oIbCKntL",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "TDD1axlLKIuWvvRW",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "CbQGm7emsE40EYwg",
              "name": "Wall of Fire",
              "rank": 4
            },
            {
              "id": "LidxBOGHqMdsQZeG",
              "name": "Weapon Storm",
              "rank": 4
            },
            {
              "id": "jObwA25J9Lxs82IP",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "2uGFXq7JLGPpp7Mc",
              "name": "Impaling Spike",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:warmonger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "KJ4faFTpKHVhAqFR",
      "slug": "warmonger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:434744cb60794014d88488df5c2b43bf9ea3af2838957198502a7211eb2bd701",
    "translatableHash": "sha256:655b1c36013e8fb78d8705e9fa45ee718164994aa0737403c16ab77edcd644ab",
    "data": {
      "schemaVersion": 1,
      "name": "Warmonger",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Warmongers believe the base state of life is violence. They stay in peak physical condition with constant training and keep their supplies ready for marching to war.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 29,
      "hitPoints": 200,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 21,
        "reflex": 20,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 5,
        "int": 1,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 24,
        "intimidation": 20,
        "stealth": 19,
        "survival": 14
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
          "id": "JkXremjnxvTwRm2Y",
          "name": "Battle Axe",
          "bonus": 23,
          "damage": "2d8+12 slashing",
          "traits": [
            "magical",
            "sweep"
          ]
        },
        {
          "id": "k4QgCzSabz0qcXWf",
          "name": "Fist",
          "bonus": 22,
          "damage": "1d4+12 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "9GHKy6eRq1Bgq1Dq",
          "name": "Composite Longbow",
          "bonus": 21,
          "damage": "1d8+9 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "EquchyQOSzMmr0YX",
          "name": "War Ready",
          "kind": "passive",
          "description": "The warmonger can always roll Warfare Lore for initiative.",
          "traits": []
        },
        {
          "id": "k4XybdKxQyLja2A4",
          "name": "Pain Training",
          "kind": "passive",
          "description": "The warmonger treats the value of any Drained, Dying, Enfeebled, Sickened, and Wounded conditions affecting them as 1 lower. The warmonger still has the condition and must remove it normally.",
          "traits": []
        },
        {
          "id": "QsGeKrkiSK8C11XO",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "MeBdzrbLiBNsKGFP",
          "name": "Patch and Set",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The warmonger has a hand free\nEffect The warmonger grits their teeth and ties off a wound or sets a bone or joint. They regain 20 healing Hit Points.",
          "traits": [
            "healing",
            "manipulate"
          ]
        },
        {
          "id": "IdqR8gAWKJ0Jevp4",
          "name": "Power Through",
          "kind": "action",
          "description": "Requirements The warmonger is wielding two melee weapons and isn't Fatigued\nEffect The warmonger attempts up to three melee Strikes against different creatures. These count toward the warmonger's multiple attack penalty normally, but the penalty doesn't increase until after all the attacks. The warmonger overexerts themself with the attacks, becoming fatigued. The warmonger can attempt a check (fortitude, dc:30) save to recover from this fatigued condition at the start of each of their turns.",
          "traits": []
        },
        {
          "id": "KNrYEY4UP6EdYPBy",
          "name": "Sight Prey",
          "kind": "action",
          "description": "The warmonger singles out one enemy to bring down with ranged attacks until the end of the current turn. The warmonger's ranged Strikes against that creature gain a +1 circumstance bonus to the attack roll and deal an extra 3d6 precision damage. Each time the warmonger hits that creature with a ranged Strike, the creature takes a –10-foot penalty to its Speeds for 1 minute and falls 20 feet if it's flying.\nEffect: Sight Prey (Speed Penalty)",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "DczifYM6oEvgGgrD",
          "name": "War Cry",
          "kind": "reaction",
          "description": "Frequency once per hour\nTrigger The warmonger critically hits or knocks out an enemy\nEffect The warmonger screams a battle cry. Each ally in a 30-foot type:emanation that hears it deals an additional 1d6 damage with its Strikes for 1 round.\nEffect: War Cry",
          "traits": [
            "auditory",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:exiled-revolutionary",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "oTKuWWYyWyfy599O",
      "slug": "exiled-revolutionary",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5c2b9dbd44d89fd34be81068ab0dc78d5f2a218829046d71c070fa2f1544ae2c",
    "translatableHash": "sha256:985cd8086873b558ef4bc1140574015a4e48a3e4ad0bf785771dfe77bca55239",
    "data": {
      "schemaVersion": 1,
      "name": "Exiled Revolutionary",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Forces hire an exiled revolutionary because they were once part of the enemy. A lost scion, noble who spoke against tyranny, or wrongly persecuted politician possesses an intimate knowledge of their foe's tactics, logistics, and territory.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 28,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 17,
        "reflex": 20,
        "will": 17
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 0,
        "int": 3,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 18,
        "athletics": 15,
        "deception": 19,
        "diplomacy": 19,
        "intimidation": 17,
        "society": 20,
        "stealth": 20,
        "thievery": 18
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
          "id": "sacoFJhifKysQrro",
          "name": "Longsword",
          "bonus": 21,
          "damage": "2d8+10 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "0eZj3LkmkZfBjdXM",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "RptXt58Xhb0l4Edx",
          "name": "Composite Longbow",
          "bonus": 21,
          "damage": "1d8+8 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "baE5TfLTN71MdB62",
          "name": "+3 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "WDyhYHha6vZnGf1n",
          "name": "Former Courtier",
          "kind": "passive",
          "description": "An exiled revolutionary remembers well their former realm. In their home realm, be it a manor, castle, or capital city, the exiled revolutionary gains a +4 circumstance bonus to Perception checks and Will saves, and to Deception, Diplomacy, Intimidation, and Stealth checks, and is a 12th-level challenge in the arena of noble politics.",
          "traits": []
        },
        {
          "id": "TaOiwUitrOTjGIFH",
          "name": "Follow Me",
          "kind": "passive",
          "description": "20 feet. This aura is active only while in the exiled revolutionary's home realm, as they share knowledge to avoid guard patrols and get past checkpoints. Any ally in the aura gets a +2 circumstance bonus to Deception and Stealth checks.",
          "traits": [
            "aura",
            "visual"
          ]
        },
        {
          "id": "D0c2NXGg7VrIYawc",
          "name": "It's... You!",
          "kind": "passive",
          "description": "When the exiled revolutionary sees or hears someone who was part of their downfall in person, they break cover and attack their betrayer immediately, even if their actions would doom them and their allies. The revolutionary must succeed at a check (will, dc:35) save or be Fascinated by their betrayer and unable to cease targeting them exclusively until the betrayer is defeated.\nAn ally can convince the revolutionary to forgo their vengeance with a DC 30 Diplomacy check to make a [[/act request dc=30]]. This lasts for 1 minute, but talking the revolutionary down after that time requires more thorough engagement.",
          "traits": [
            "emotion",
            "mental"
          ]
        },
        {
          "id": "Ty1qmPyCRphWxFXy",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "SPEIYLYOtYmyek57",
          "name": "Darting Feint",
          "kind": "action",
          "description": "The exiled revolutionary Feints, Steps, and Strikes in any order.",
          "traits": []
        },
        {
          "id": "EhgvO7Syfiep8jC2",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The exiled revolutionary deals an additional 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:beast-eidolon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "xMDUgVCByn9VA0zC",
      "slug": "beast-eidolon",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:006038d71d5666a800c963aa5e2d16dd71ef75225c2a7c39b25a468bf319a788",
    "translatableHash": "sha256:9bc47118787d7c76d0f2dd297e9eda2699968b5767158a45a64666cbdfa6fb69",
    "data": {
      "schemaVersion": 1,
      "name": "Beast Eidolon",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast",
        "eidolon"
      ],
      "description": "This creature is intended to be used as the eidolon accompanying a Sarkorian god caller, but it can be used or adapted into any aggressive beast eidolon for a summoner.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 18,
        "will": 19
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -1,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 21,
        "intimidation": 22,
        "nature": 15
      },
      "languages": [
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "KWTF7oYWfght4wob",
          "name": "Horn",
          "bonus": 22,
          "damage": "2d8+11 piercing; 1d6 bleed",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "0tbpiJqyIMvczbjU",
          "name": "Hoof",
          "bonus": 22,
          "damage": "2d6+11 bludgeoning",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "3gUfUhxIO8QBuRVh",
          "name": "Furious Charge",
          "kind": "action",
          "description": "The eidolon Strides twice and then makes a Strike. As long as it moved at least 20 feet, it gains a +2 circumstance bonus to the attack roll.",
          "traits": []
        },
        {
          "id": "H2HkvSvxAPG03G9a",
          "name": "Primal Roar",
          "kind": "action",
          "description": "The eidolon attempts to Demoralize each enemy within 30 feet; these Demoralize attempts don't take any penalty for not sharing a language.",
          "traits": [
            "auditory"
          ]
        },
        {
          "id": "oWrH0q6NzcxktctY",
          "name": "Rend",
          "kind": "action",
          "description": "Claw",
          "traits": []
        },
        {
          "id": "2RXB3a94mH1mRWqg",
          "name": "Scent of Blood",
          "kind": "action",
          "description": "Requirements A creature within the eidolon's scent range is taking bleed damage\nEffect The eidolon flies into a frenzy, gaining 10 temporary HP for 1 minute and a +4 status bonus to damage rolls with its unarmed attacks, but becomes Off-Guard. It can't voluntarily end the frenzy or start another frenzy while in the frenzy. The frenzy lasts for 1 minute, after which the eidolon is Fatigued for 1 minute.",
          "traits": []
        },
        {
          "id": "G9axJGehalxDWo2y",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:court-jester",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "xvZvI0oFFOTaBO6L",
      "slug": "court-jester",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:809f9faee838209b19c5a8bd51b40123c493cb89218cf2fca426d2a1d9f4e0ed",
    "translatableHash": "sha256:f8e74d13cef50b49ef1df5d6611e681bdde3821b1222f7801a235783599a0cbf",
    "data": {
      "schemaVersion": 1,
      "name": "Court Jester",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Though court jesters are often put-upon as the targets of easy mockery and idle amusements, do not mistake their self-deprecation for weakness. Beneath, the jester hides malice, a sharp tongue, and even sharper knives. They can often be found entertaining the nobles of court or preparing their next japes. During the indiscreet hours of the night, they may be found in the company of servants and spymasters.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 29,
      "hitPoints": 170,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 19,
        "will": 22
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 1,
        "cha": 5
      },
      "skills": {
        "acrobatics": 22,
        "deception": 19,
        "diplomacy": 19,
        "performance": 22,
        "society": 19,
        "stealth": 19
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "CNavF2XxjAz7yDPE",
          "name": "Dagger",
          "bonus": 22,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "Xw40qHXzILJlyrVL",
          "name": "Dagger",
          "bonus": 22,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "HloTdHxZG5TbObFy",
          "name": "Fist",
          "bonus": 21,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "CGBQVNxptG5LnjTe",
          "name": "Pointed Joke",
          "kind": "passive",
          "description": "The court jester can use Performance instead of Intimidation to [[/act demoralize statistic=performance]].",
          "traits": []
        },
        {
          "id": "2EbagWaQehCMBKx5",
          "name": "No Peeking!",
          "kind": "action",
          "description": "The jester blows chalk or face powder in an adjacent enemy's face. The target must make a check (fortitude, dc:29, options:inflicts:blinded,inflicts:dazzled,inflicts:off-guard) saving throw.\nCritical Success The target is unaffected.\nSuccess The target is Dazzled for 1 round.\nFailure target is dazzled and Off-Guard for 1 round.\nCritical Failure The target is Blinded for 1 round.",
          "traits": []
        },
        {
          "id": "rUD7kZKPtLrnivTt",
          "name": "Poisoned Blade",
          "kind": "passive",
          "description": "The jester coats their dagger in poison. These daggers inflict an additional 4d4 persistent poison damage. The poison expires 1 hour after leaving the jester's possession.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:maestro",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1wk2fBlDuHLRYfJW",
      "slug": "maestro",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:06c8e47cef67b98fc6db80718e11a8e3250ba546aa37e6f2541dd1f07f179c6a",
    "translatableHash": "sha256:99a2ae789163f17997762c0e02bc50f2af1a0abacc2597dabe27f68708a7ea14",
    "data": {
      "schemaVersion": 1,
      "name": "Maestro",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A maestro is a performer who has achieved true excellence. These virtuosos can inspire those around them to greater heights or strike fear in their enemies' hearts.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 30,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 24,
        "will": 21
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 21,
        "deception": 23,
        "diplomacy": 23,
        "intimidation": 23,
        "occultism": 19,
        "performance": 30,
        "society": 21
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
          "id": "vdKItbZrAIX5Mak0",
          "name": "Rapier",
          "bonus": 24,
          "damage": "2d6+10 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "2WtH2UBuqytTBXMU",
          "name": "Fist",
          "bonus": 23,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "nQXmOqBKeFhVrzrX",
          "name": "Composite Shortbow",
          "bonus": 24,
          "damage": "2d6+9 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "FVaLpxF68hSIofmb",
          "name": "Bardic Lore",
          "kind": "passive",
          "description": "The maestro can Recall Knowledge on any subject with a +19 modifier.",
          "traits": []
        },
        {
          "id": "AOiC4NX8gLurruvc",
          "name": "Performing Specialist",
          "kind": "passive",
          "description": "For encounters involving acting, music, or storytelling, the maestro is a 15th-level challenge.",
          "traits": []
        },
        {
          "id": "AFx73nJt4rUTGBQN",
          "name": "+1 circumstance bonus to saves vs. auditory, illusion, linguistic, sonic, or visual",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ockbOy7yj5lslqd9",
          "name": "Resolve",
          "kind": "passive",
          "description": "When the maestro rolls a success on a Will save, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "rM22PCRrjGIy1eru",
          "name": "Resonating Weaponry",
          "kind": "passive",
          "description": "The maestro funnels musical energy from their compositions into attacks, dealing additional 1d6 sonic damage with their weapon Strikes on any turn they cast a composition spell.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "yreokfP5FubEtZI2",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "JPfnxKLS4GMd2cA3",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "OFogs3XOayEab7V3",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "yh0bpZghS7DAhZtC",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "WyiQUx69bW5QIWlm",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "mD9ooUj53bnmENwc",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "rLB4R0K5fCFvfQdU",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "cnZ7jzJ2EM5jUDRk",
              "name": "Shatter",
              "rank": 4
            },
            {
              "id": "ji0uMfB73GCFdIer",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "cqNI3OgnmAI0d2wm",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "tEVvXBIR0e9Fbns4",
              "name": "Truespeech",
              "rank": 5
            },
            {
              "id": "7JiydyhkDAWI1RyL",
              "name": "Wave of Despair",
              "rank": 5
            },
            {
              "id": "RUaZK8XHEtt6SrNX",
              "name": "Spirit Blast",
              "rank": 6
            },
            {
              "id": "4ZKVT0h9rUAilWvi",
              "name": "Vibrant Pattern",
              "rank": 6
            }
          ]
        },
        {
          "id": "Fq2Oh8hqTb1F5bAK",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "mqjYAMkMeKTZuWGJ",
              "name": "Counter Performance",
              "rank": 1
            },
            {
              "id": "738ZEXUX9BoBg50s",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "A6DrIwLIqbgErh1F",
              "name": "Dirge of Doom",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:spirit-binder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "6OtvMTyXhxUdZI44",
      "slug": "spirit-binder",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fdcffbc98d580f183a7f66f65db56a90ae685ee5828cb2955cc261ed0de5b2b8",
    "translatableHash": "sha256:ea379116557fc2d6630e7af4f4856f6d42feafefc2e1a175d78f1a94e6d39200",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Binder",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Ghosts and other spirits swirl around the spirit binder, creating a constant aura of flickering faces and forms.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 28,
      "hitPoints": 175,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": [
          "spiritsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 19,
        "will": 24
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 3,
        "int": 5,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "diplomacy": 21,
        "intimidation": 21,
        "occultism": 22
      },
      "languages": [
        "common",
        "necril",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4QUMxCm1MjvwLnDc",
          "name": "Ghost Claw",
          "bonus": 19,
          "damage": "2d10+6 slashing; 2d6 spirit",
          "traits": [
            "finesse",
            "magical",
            "spirit",
            "unarmed"
          ]
        },
        {
          "id": "0RQOtU3OwzXUaTDI",
          "name": "Spirit Pitch",
          "bonus": 19,
          "damage": "2d6 spirit; 3d6 spirit",
          "traits": [
            "magical",
            "spirit"
          ]
        }
      ],
      "actions": [
        {
          "id": "UvMfLdnfZ6D40AeP",
          "name": "Spiritsense",
          "kind": "passive",
          "description": "The spirit binder can sense the spirits of creatures, including living creatures, most non-mindless undead, and haunts within the listed range. Since spiritsense detects spiritual essence, not physical bodies, it can detect spirits projected by spells (such as Project Image) or possessing otherwise soulless objects. It can't detect soulless bodies, constructs, or objects, and like most senses, it doesn't penetrate through solid objects.",
          "traits": [
            "detection",
            "occult"
          ]
        },
        {
          "id": "z5olN7HRzmJ4jkkq",
          "name": "Haunting Spirits",
          "kind": "passive",
          "description": "30 feet. The spirits bound by a spirit binder swirl around, lashing out at their foes. An enemy that enters or starts its turn in the aura must succeed at a check (will, dc:27, options:area-effect,damaging-effect,inflicts:frightened) save or take 3d6 spirit damage and be Frightened 1 (double damage and Frightened 2 on a critical failure).",
          "traits": [
            "aura",
            "occult",
            "spirit"
          ]
        },
        {
          "id": "cMvlyjML7Y5cTbAa",
          "name": "Spirit Scrying",
          "kind": "passive",
          "description": "The spirit binder's scrying spells can target or detect spirits on other planes as though the spirits were in the Universe.",
          "traits": []
        },
        {
          "id": "K5sw8eofFy7IPhdx",
          "name": "Succumb to the Void",
          "kind": "action",
          "description": "The spirit binder taps into the more nefarious spirits of the Void, becoming something morbid and cruel. For [[/gmr 1d4 #rounds]], their resistance, aura of spirits, Strikes, and spirit spells change their damage type from spirit damage to void damage and replace their spirit trait with the void trait.",
          "traits": [
            "concentrate",
            "occult",
            "void"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "etMlP3xhcroV0otF",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 23,
          "saveDc": 31,
          "spells": [
            {
              "id": "sRhCpvLEXtPrWwzZ",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "bbdUT06PKcpVD0ob",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "JcC7cfdJHoNKShFP",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "bEqU2bf3gze5SdxT",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "aefBhdlTOLiK9Ixw",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "fcI40YDElLGcw90b",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "CBmdaGbKykwQTRPg",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "dXO9N0GgT6XowJmx",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "Z2dvrlv3vojUam2W",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "8ajJhVb9KiwMzdUs",
              "name": "Ghostly Carrier",
              "rank": 2
            },
            {
              "id": "6Ziewp6Jye03uieS",
              "name": "Peaceful Rest",
              "rank": 2
            },
            {
              "id": "C4oEQy4UFuuv2Ic8",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "oPSgwDZPBpv6CNXw",
              "name": "Ghostly Weapon",
              "rank": 3
            },
            {
              "id": "UgGKsFbZthGRFmEN",
              "name": "Levitate",
              "rank": 3
            },
            {
              "id": "OCO4GMsogMkwFrZM",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "FbLfPjAbqpN8Hesn",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "iQ7CmlwuMx9B6TvY",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "clvd1AmTj7Z7ZCci",
              "name": "Invoke Spirits",
              "rank": 5
            },
            {
              "id": "g6Xd1PhM026PCQg1",
              "name": "Spiritual Guardian",
              "rank": 5
            },
            {
              "id": "C3QDs23zUrDo4o3u",
              "name": "Wave of Despair",
              "rank": 5
            },
            {
              "id": "mmEZO2tLYFdWVwmr",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "vGWXAjD0wQhcTtPl",
              "name": "Spirit Blast",
              "rank": 6
            },
            {
              "id": "7pRPFjQfHLfuNKpA",
              "name": "Interplanar Teleport (to or from the Ethereal Plane only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:rancorous-priesthood",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "uFQsIRC0zz3sNNIW",
      "slug": "rancorous-priesthood",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:30d97a6d4b5b8978998660b13cf048b6b741bd77cc8a802b0e1cbe85603c1b6b",
    "translatableHash": "sha256:9a409f19dc7ae1a8f113ceb4b9ccb000128cc27b0278b859a2a0d02f6f883037",
    "data": {
      "schemaVersion": 1,
      "name": "Rancorous Priesthood",
      "level": 11,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop",
        "unholy"
      ],
      "description": "Followers of Rovagug must usually conceal their devotion to the Rough Beast, hiding in remote cave complexes or abandoned ruins, but they emerge when they sense weakness, gathering together into a destructive, homicidal mob to hunt down priests of rival deities or slaughter entire towns.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 31,
      "hitPoints": 195,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 17,
        "will": 22
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 6,
        "int": 2,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 22,
        "intimidation": 21,
        "religion": 22
      },
      "languages": [
        "chthonian",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "NmGeqt2BxwfGod5Z",
          "name": "Form Up",
          "kind": "action",
          "description": "",
          "traits": []
        },
        {
          "id": "AsbIVQDcJZfJhU4N",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 130 (3 segments), 65 (2 segments)",
          "traits": []
        },
        {
          "id": "wWvqRgRb0u1JwCr6",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "7cb3300PlOTebHcM",
          "name": "Troop Spellcasting",
          "kind": "passive",
          "description": "When the rancorous priesthood Casts a Spell, their constituent members combine their efforts into casting a more powerful version of the spell than any one member could achieve alone. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
          "traits": []
        },
        {
          "id": "ty02a1CedQJfgYkL",
          "name": "Wild Swing",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The members of the mob wildly swing their weapons in a chaotic attack at each enemy in a 5-foot type:emanation with a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d12+2)[slashing|options:area-damage] damage\n2 (2d12+9)[slashing|options:area-damage] damage\n3 (3d12+9)[slashing|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FEmYP0SV4WLWDH9k",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "LhTYB3DNriDmgcNC",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "D3tG8e8evIjd4yse",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "NpOj7aoix2IjO5cA",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "VobKaxSpwL7twR2S",
              "name": "Divine Immolation",
              "rank": 5
            },
            {
              "id": "2WMAVBgtp8jO3JhH",
              "name": "Noise Blast",
              "rank": 5
            },
            {
              "id": "stvraKOWYjSMwfan",
              "name": "Shadow Blast",
              "rank": 5
            }
          ]
        },
        {
          "id": "n55myku7edcGz0AV",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "ErW7gGoSo8X1ErsS",
              "name": "Cry of Destruction",
              "rank": 1
            },
            {
              "id": "IAabAbmQvzfa9k9D",
              "name": "Destructive Aura",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:high-roller",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "VYO4XEO6mHw8bfS4",
      "slug": "high-roller",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:335754d287eb87e406bf80eea3bf862da297dd35d36d405ce033ad848fa6f63e",
    "translatableHash": "sha256:17208731c575299a9b7c6f6f128c4bdbf06400c3e63633bbcfec298e8e9e816d",
    "data": {
      "schemaVersion": 1,
      "name": "High Roller",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Those with a particular mastery over luck can make a living through games of chance as professional gamblers.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 30,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 17,
        "reflex": 24,
        "will": 22
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "deception": 24,
        "intimidation": 22,
        "society": 21,
        "thievery": 22
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
          "id": "BjnfZePFbK0XJY7N",
          "name": "Rapier",
          "bonus": 23,
          "damage": "2d6+11 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "jEJr8fgTTOL4T2j5",
          "name": "Fist",
          "bonus": 22,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "WREJuCmtfdVK2Ol4",
          "name": "Card",
          "bonus": 23,
          "damage": "2d4+11 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "ZwYHBlRyXuuIr5D9",
          "name": "Card",
          "bonus": 23,
          "damage": "2d4+11 slashing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "SSpv0YzxRDFGa7q5",
          "name": "Gaming Arsenal",
          "kind": "passive",
          "description": "The high roller treats all game tools—such as cards (used in the stat block's Strike entries), dice, coins, and gambling tokens—as melee weapons with a d4 damage die and the agile, finesse and thrown 20 feet traits. The high roller gets a +1 item bonus to attack rolls with them and deals two damage dice. The damage type depends on the item and is determined by the GM.",
          "traits": []
        },
        {
          "id": "0JGyZaLfHkTcMLjM",
          "name": "+4 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "dTt5gdnU4P28VxWX",
          "name": "Tip the Scales",
          "kind": "reaction",
          "description": "Trigger A creature the high roller is observing critically fails a check\nEffect The high roller picks up on luck that others dropped. They roll twice on their next d20 roll before the end of their next turn and take the better result.",
          "traits": [
            "divine",
            "fortune"
          ]
        },
        {
          "id": "a5DYCFFpjb7dteYJ",
          "name": "Lucky Momentum",
          "kind": "action",
          "description": "Requirements The high roller's last action was a critical success\nEffect The high roller either Strides twice or attempts a Strike that deals an additional 4d6 precision damage and deals half damage on a failure (but not a critical failure).",
          "traits": []
        },
        {
          "id": "5mZHOHvumjTVWjwh",
          "name": "Royal Flush Flurry",
          "kind": "action",
          "description": "Frequency once per hour\nRequirements The high roller has at least 16 cards in one hand\nEffect The high roller unleashes the cards in a 30-foot type:cone, dealing 16d4 slashing damage to all creatures in the area with a check (reflex, dc:30, basic, options:area-effect) save. This ability expends the full deck of cards held.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:peerless-duelist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "J6qH183OPXKfZ8qS",
      "slug": "peerless-duelist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a0aa0aca44e40d98c3a99f5acec6d573a7f20623abe07ffc43b6dd9f42131cf",
    "translatableHash": "sha256:e2107d2f1c86433c94ced01de5cc00adbc795dd86e27630e9917c44bc5bf829d",
    "data": {
      "schemaVersion": 1,
      "name": "Peerless Duelist",
      "level": 12,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Rumors circulate in the saloons that an undefeated master duelist roams the roads, waiting for their next contest.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 33,
      "hitPoints": 200,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 25,
        "will": 21
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 23,
        "crafting": 22,
        "deception": 24,
        "intimidation": 26
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
          "id": "79qCmMSMbk6P1Lq9",
          "name": "Fist",
          "bonus": 25,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "6eoQ0NkJrVJgNkWO",
          "name": "Dueling Pistol",
          "bonus": 26,
          "damage": "2d6+13 piercing",
          "traits": [
            "concealable",
            "concussive",
            "fatal-d10",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Y3whhsv9vyPbI3wo",
          "name": "I See You",
          "kind": "passive",
          "description": "The peerless duelist's Perception checks and firearm Strikes ignore lesser cover and the Concealed condition.",
          "traits": []
        },
        {
          "id": "XMpS7xoeORwkV0Wd",
          "name": "+3 to Initiative with Perception",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "lffwpqk8XZqiT4aO",
          "name": "Shoot First",
          "kind": "reaction",
          "description": "Trigger An attacker the duelist can see targets them with a Strike or spell\nRequirements The duelist is holding a loaded firearm\nEffect The duelist makes a firearm Strike against the triggering creature. On a critical hit, they disrupt the triggering action.",
          "traits": []
        },
        {
          "id": "rtaOZVpxv81GaK98",
          "name": "Threatening Aura",
          "kind": "passive",
          "description": "60 feet. check (will, dc:30, options:area-effect,inflicts:stunned). The duelist's presence makes foes hesitate. Any enemy that enters or starts its turn in the aura must succeed at the Will save or be Stunned 1. Regardless of the result of its save, the creature is temporarily immune for 1 day.",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "CRVCGzpdOmyM2hzt",
          "name": "Ace Shooter",
          "kind": "passive",
          "description": "The peerless duelist deals an extra die of damage on any firearm Strike they attempt. This extra damage is already included in their dueling pistol Strike.",
          "traits": []
        },
        {
          "id": "Rl8v4NwJmlJ0iUvx",
          "name": "Disarming Shot",
          "kind": "action",
          "description": "The duelist fires a dueling pistol to attempt a Disarm an enemy at range with the bullet. The duelist attempts an attack roll with the dueling pistol instead of an Athletics check, taking any penalty appropriate for the firearm's range increment. The duelist doesn't have to meet the requirements of the Disarm action.\nInstead of Disarming, the duelist can use Disarming Shot to attempt an Escape action for the benefit of themself or an ally within range.",
          "traits": []
        },
        {
          "id": "8ixfYm3wRRShh4HO",
          "name": "Double Reload",
          "kind": "action",
          "description": "Requirements The peerless duelist has an empty dueling pistol in each hand\nEffect The peerless duelist Interacts to reload both dueling pistols.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:crime-kingpin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mu8X8nr1HvSfdARc",
      "slug": "crime-kingpin",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bcf0300780a9f78f7380c87ea3cc4412be3e66e86e07563d5fe8fe6370c7ca14",
    "translatableHash": "sha256:eeae8f236fdbfa65612260d2e5ccb48a0283402ee075f757cece03f55654c90f",
    "data": {
      "schemaVersion": 1,
      "name": "Crime Kingpin",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Kingpins build empires from the shadows, ruling their territory ruthlessly and keeping their business private. Most forge connections with the rich and powerful, doing dirty work for politicians and minor nobles in return for influence and favors that can be called in at any time.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 32,
      "hitPoints": 250,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 23,
        "will": 22
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 6
      },
      "skills": {
        "athletics": 25,
        "deception": 24,
        "diplomacy": 22,
        "intimidation": 28,
        "society": 24,
        "stealth": 23,
        "thievery": 24
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
          "id": "wODq7zHnG6qb3vre",
          "name": "Rapier",
          "bonus": 26,
          "damage": "2d6+11 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "OJjD0E4rYTpVokYi",
          "name": "Fist",
          "bonus": 26,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "BiKlDMUpVoRPTCX9",
          "name": "Hand Crossbow",
          "bonus": 26,
          "damage": "2d6+8 piercing",
          "traits": [
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "tsBWKOjb24YDTIq0",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "IhLf7F9sRTvihN0g",
          "name": "Deny Advantage",
          "kind": "passive",
          "description": "The crime kingpin isn't Off-Guard to creatures of 12th level or lower that are Hidden, Undetected, flanking, or using Surprise Attack.",
          "traits": []
        },
        {
          "id": "K3VO3ewirpN4AXzB",
          "name": "Kingpin's Presence",
          "kind": "passive",
          "description": "30 feet.\nAllies in the aura gain a +2 status bonus to saving throws against mental effects.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "rHSL2kBRVi1SeW6F",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "MaYof9lSk9WcCAK3",
          "name": "You'll Pay for That",
          "kind": "reaction",
          "description": "Trigger An enemy damages the kingpin\nEffect The kingpin issues a vendetta against the enemy. Each of the kingpin's allies who hears the command gains a +5 status bonus to their next damage roll against that enemy.\nEffect: You'll Pay for That",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "1k68ayfmeXOyucsU",
          "name": "Fencing Brawl",
          "kind": "action",
          "description": "The kingpin attempts a rapier Strike followed by a [[/act disarm]] or [[/act grapple]] attempt against the same enemy. These count as one attack for the kingpin's multiple attack penalty, and the penalty doesn't increase until after both attacks.",
          "traits": []
        },
        {
          "id": "RNDNl6HBPuL8wgMp",
          "name": "Kick Away",
          "kind": "reaction",
          "description": "Trigger The kingpin knocks an item out of a creature's grasp using Disarm\nEffect The kingpin kicks the weapon up to 20 feet in any direction. If the kingpin kicks the weapon into an ally's square, that ally can catch the weapon as a free action, Releasing anything else they're holding if necessary.",
          "traits": []
        },
        {
          "id": "DzvlOC7wwlihRXZo",
          "name": "Kingpin's Command",
          "kind": "action",
          "description": "The crime kingpin shouts a command to an ally of their choice. That ally can spend a reaction to Stride and Strike. The ally becomes immune to Kingpin's Command for 24 hours.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "HNFH1h7GO96nkFJL",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The crime kingpin deals an additional 3d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:deific-champion-of-iomedae",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "NZOqqzi4ThvJfpm8",
      "slug": "deific-champion-of-iomedae",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:53d8e06d2fe4b957b6c2fdde8aa23f1c69c47ea265d4f05561c7b81345fbc8d2",
    "translatableHash": "sha256:d6be613415c17ff9bbc5932b83e65a868804f99ebe672239be819c5a7bee9149",
    "data": {
      "schemaVersion": 1,
      "name": "Deific Champion of Iomedae",
      "level": 12,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "holy",
        "human",
        "humanoid"
      ],
      "description": "The deific champion is the paragon of champions, representing the truest form of devotion and dedication to a deity.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 33,
      "hitPoints": 220,
      "speedFeet": 20,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 19,
        "will": 22
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 25,
        "diplomacy": 22,
        "intimidation": 26,
        "religion": 23
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "xTsD2dkttoFCJQum",
          "name": "Longsword",
          "bonus": 26,
          "damage": "2d8+13 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "GmXn5uf6Ce5Affe3",
          "name": "Fist",
          "bonus": 25,
          "damage": "1d4+13 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "d5qzJAalGbOrtDQa",
          "name": "Crossbow",
          "bonus": 23,
          "damage": "2d8+5 piercing",
          "traits": [
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "raqxmRxswaqs6DAA",
          "name": "Blessed Shield",
          "kind": "passive",
          "description": "In the deific champion's hands, a shield gains the moderate reinforcing rune, giving it Hardness 8, 84 HP, and BT 42.",
          "traits": []
        },
        {
          "id": "en9fScCzZTAo4OaI",
          "name": "Deific Reactions",
          "kind": "passive",
          "description": "At the start of each of their turns, the deific champion gains an additional reaction they can only use to make a Reactive Strike or to Shield Block.",
          "traits": []
        },
        {
          "id": "ixoazJ1epK2jCK7H",
          "name": "Champion's Aura",
          "kind": "passive",
          "description": "15 feet.\nAny follower of Iomedae in the aura knows the champion is a champion of Iomedae. At the end of the champion's turn, each ally in the aura reduces its Frightened value by 1. The aura can be suppressed or resumed with a single action, which has the concentrate trait, and ends if the champion falls Unconscious.",
          "traits": [
            "aura",
            "divine"
          ]
        },
        {
          "id": "AvhDj66mr2YhqJwo",
          "name": "Champion's Courage",
          "kind": "passive",
          "description": "When the champion becomes Frightened, they reduce the condition value by 1 (to a minimum of 0).",
          "traits": []
        },
        {
          "id": "D3y75ASOT2d7kylq",
          "name": "Exalted Retributive Strike",
          "kind": "reaction",
          "description": "Trigger An enemy damages the deific champion's ally, and both are in the deific champion's aura\nEffect The ally gains resistance 14 to all damage against the triggering damage. If the enemy is within reach, the deific champion makes a melee Strike against it. Each ally in the champion's aura can spend a reaction to Strike the target with a –5 penalty.\nEffect: Exalted Retributive Strike",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "M5OGAZJ6RQFPjnry",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "YHVXDt2xyo3oxk9t",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "xB8qYlHLdFIjDXDe",
          "name": "Will Not Fall",
          "kind": "passive",
          "description": "Trigger The deific champion's Hit Points are reduced to 0 for the first time that day\nEffect The champion presses on, refusing to fail their god. They remain standing with 25 Hit Points.",
          "traits": []
        },
        {
          "id": "Qah8iLjN3hok7tMx",
          "name": "Will Not Falter",
          "kind": "action",
          "description": "Effect The deific champion declares their devotion to their deity and their cause. They Stride, then make a melee Strike. If the Strike hits an enemy, all allies within their champion's aura gain a +2 status bonus to attack rolls and saving throws against fear until the start of the deific champion's next turn.\nEffect: Will Not Falter",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "89LVXnKBiV7MWjOC",
          "name": "Divine Focus Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "nT1r8eQHCFLeLIjg",
              "name": "Lay on Hands",
              "rank": 1
            },
            {
              "id": "loaCjigfjEKm6BKk",
              "name": "Champion's Sacrifice",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:black-belt",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "YnUDViAV0M2FMG3M",
      "slug": "black-belt",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c91e2bb5923807586d7fff058d033fb841e3f4f87e0f09adc4f0e5f9de080232",
    "translatableHash": "sha256:ed325afaad2629593da61852b9fa19b14de2c76eb5436416373f6bd33b78f636",
    "data": {
      "schemaVersion": 1,
      "name": "Black Belt",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Many martial arts schools use colored belts to differentiate skill levels. Above all is the black belt, an advanced practitioner who can counter any attack.\nMartial artists strive to master the art of hand-to-hand fighting.",
      "armorClass": 32,
      "hitPoints": 220,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 23,
        "will": 20
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 25,
        "stealth": 20
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
          "id": "Omu8jfg1ZYl6AReA",
          "name": "Bo Staff",
          "bonus": 25,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "magical",
            "parry",
            "reach",
            "trip"
          ]
        },
        {
          "id": "v2SPwV17jWgfcN8M",
          "name": "Fist",
          "bonus": 25,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "JdNDpyPZkZaFedEK",
          "name": "Blocking Counterattack",
          "kind": "reaction",
          "description": "Trigger A creature within the black belt's reach targets them with a melee attack\nEffect The black belt blocks, gaining a +2 circumstance bonus to their AC against the triggering attack. If the attack misses, the black belt retaliates with a Strike. This Strike doesn't count toward the black belt's multiple attack penalty, and the multiple attack penalty doesn't apply to this Strike.",
          "traits": []
        },
        {
          "id": "Cgi6w2XRHGi6dEsV",
          "name": "Flurry of Blows",
          "kind": "action",
          "description": "Frequency once per round\nEffect The black belt makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses.\nThe black belt can substitute any number of the attacks with bo staff Strikes or attempts to [[/act grapple]], [[/act reposition]], [[/act shove]], or [[/act trip]].",
          "traits": []
        },
        {
          "id": "oWhjvWrXmDrkBEbU",
          "name": "Powerful Fists",
          "kind": "passive",
          "description": "The black belt's fist Strikes don't take penalties when making lethal attacks, and fist Strikes are treated as cold iron and silver.",
          "traits": []
        },
        {
          "id": "Y5AtO9GHxIR4ZMYe",
          "name": "Rapid Barrage",
          "kind": "action",
          "description": "The black belt pummels their fists in a fast onslaught. They make three fist Strikes against one target. If more than one Strike hits, combine damage for the purpose of resistances and weaknesses. Regardless of whether any Strikes hit, the target must succeed at a check (fortitude, dc:32) save or be Clumsy 1 until the end of their next turn and Stunned 1 (Clumsy 2 and Stunned 2 on a critical failure).",
          "traits": [
            "incapacitation"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "1AmZDKEmlr6DEFSl",
          "name": "Monk Focus Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 23,
          "saveDc": 32,
          "spells": [
            {
              "id": "uqd5Vpwe4t0OsEu0",
              "name": "Inner Upheaval",
              "rank": 1
            },
            {
              "id": "dr0yDjPkFZNVvx6q",
              "name": "Qi Rush",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:elven-court-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1K6Zl3EGIRZvC3TO",
      "slug": "elven-court-guard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9fca1706f5e0d576d2c2b30a20663384c608449400681723c8cb64d83492fa33",
    "translatableHash": "sha256:65dbd24661d25ba3385c8ca8b5ceb5b97130d4483cb4abc82b9a25ca17ecd867",
    "data": {
      "schemaVersion": 1,
      "name": "Elven Court Guard",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elf",
        "humanoid"
      ],
      "description": "In the tangled web of lineages, rivalries, and shifting alliances that is an elven noble court, aristocratic families employ bodyguards loyal to them alone.\nElves' long lives give them centuries to delve into studies, artistry, or exploration.",
      "armorClass": 35,
      "hitPoints": 225,
      "speedFeet": 30,
      "perception": {
        "modifier": 24,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 27,
        "will": 23
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 2,
        "int": 2,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 26,
        "athletics": 23,
        "intimidation": 24,
        "society": 19
      },
      "languages": [
        "common",
        "elven",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5NAfECd1xFh2S5Ot",
          "name": "Elven Curve Blade",
          "bonus": 27,
          "damage": "2d8+12 slashing",
          "traits": [
            "finesse",
            "forceful",
            "magical"
          ]
        },
        {
          "id": "EYPBNoi7827X8rjS",
          "name": "Fist",
          "bonus": 26,
          "damage": "1d4+12 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "18D815fwKglqhif3",
          "name": "Composite Longbow",
          "bonus": 27,
          "damage": "2d8+10 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "AaOOjjv7qWyZjSRx",
          "name": "Vigilance",
          "kind": "passive",
          "description": "A court guard gains a +1 circumstance bonus on Perception checks to [[/act sense-motive]] and [[/act seek]] creatures, and if they succeed, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "HD8ng5ztntdkkxge",
          "name": "+1 Status vs. mental effects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "JTsMp47be8v9pxuS",
          "name": "Interposition",
          "kind": "reaction",
          "description": "Trigger An ally within 15 feet of the guard would take damage\nEffect The guard Strides. This movement does not trigger reactions, and the guard must end the Stride in a space adjacent to the ally. The guard then switches places with the ally, taking all damage and associated effects instead of the ally.",
          "traits": []
        },
        {
          "id": "tISUVqfI40SDSKA2",
          "name": "Avenge the Fallen",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The guard is within 30 feet of the creature they were guarding, and that creature is either Dying or died since the guard's last turn\nEffect The guard Strikes the creature that damaged their ally. They roll the attack roll twice and use the higher result.",
          "traits": [
            "fortune"
          ]
        },
        {
          "id": "T304HvLr34r0XFww",
          "name": "Dancing Blade",
          "kind": "action",
          "description": "The guard makes a Strike against a creature, then Strides. This Stride doesn't trigger reactions. If the guard ends this Stride in a different space adjacent to the same creature, they make another Strike against it. If both Strikes succeed, the creature is Off-Guard until the start of the guard's next turn. Each attack counts toward the guard's multiple attack penalty, but the penalty doesn't increase until they've made both attacks.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tree-singer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "atFtrrjwkTiFm6hJ",
      "slug": "tree-singer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:903d39c55787f84a1fdc01cbeeb34184b04180f2fc796cae30820909873a0246",
    "translatableHash": "sha256:7a91026e85f123aa0ab801baa35fdfd40755a826fc1cb068c9d05c732331106e",
    "data": {
      "schemaVersion": 1,
      "name": "Tree Singer",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Singers can speak the words of creation in song, a forgotten art from the First World. Their melodies turn grass into blades and make trees stir. Through their music, plants rise to defend and seek vengeance for nature. Taught by woodland spirits or fey agents of the First World, they master the magic of primal song.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 32,
      "hitPoints": 220,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 21,
        "will": 25
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 23,
        "diplomacy": 25,
        "intimidation": 23,
        "nature": 26,
        "performance": 27,
        "survival": 22
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
          "id": "bIwfs9B9tAZ47dB3",
          "name": "Longspear",
          "bonus": 24,
          "damage": "2d8+10 piercing; 2d10 sonic",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "8eT7cbXBZrGkiSxB",
          "name": "Fist",
          "bonus": 23,
          "damage": "1d4+10 bludgeoning; 2d10 sonic",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "JJVCKg5RWGiDTNkl",
          "name": "Composite Longbow",
          "bonus": 23,
          "damage": "2d8+8 piercing; 1d10 sonic",
          "traits": [
            "deadly-d10",
            "magical",
            "propulsive",
            "reload-0",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "lhrQmHXGnYHvX41r",
          "name": "Plant Empathy",
          "kind": "passive",
          "description": "The tree singer can ask questions of, receive answers from, and use the Diplomacy skill with plants and fungus.",
          "traits": []
        },
        {
          "id": "5VgC0m1f9FhDC7Dx",
          "name": "Bloodthirsty Plants",
          "kind": "reaction",
          "description": "Trigger An enemy in the tree singer's Verdant Aria aura (see below) attacks one of the tree singer's allies\nEffect Vines and branches to lash out at the attacker, dealing 3d6 piercing damage.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "D2VEUOoAS813GyWr",
          "name": "Verdant Aria",
          "kind": "action",
          "description": "The tree singer raises their voice in a haunting melody, creating an aura in a 30-foot emanation. Plants in the aura seem to come to life, swaying and rustling in response to the music. The tree singer's allies in the aura gain a +2 status bonus to AC and saving throws as the foliage around them shields and defends them from harm.\nThe aura lasts until the end of the tree singer's next turn but can be Sustained. It can be Sustained even if the tree singer is polymorphed. The effect ends early if the tree singer stops singing.",
          "traits": [
            "auditory",
            "aura",
            "concentrate",
            "linguistic",
            "plant",
            "primal",
            "wood"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "y4cEf02xRHzMd7mW",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "c0q73KaZC4dzfrhB",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "EYGtsCMmsapgRWcG",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "GGlB3uEI06bRPHqf",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "GYWrRKzJ8Ylt3Eim",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "igOe3CacYVkwA2Vk",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "jkqZlYQO7Lf4AWoB",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "l80EyOjcbi1O7DqL",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "3qFD2fASqfQEZyIm",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "G10XGnnDc1dWBbbq",
              "name": "Oaken Resilience",
              "rank": 2
            },
            {
              "id": "Rapbzjw6SdgKHxga",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "Wkneu9BqAioMMpJW",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "aMulAxyRRTo7ZnaQ",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "tG1voc8Q1mlhSC7a",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "YBWLWwd1cL9hlqxX",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "WpwZBrbXyaZb3PYl",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "mr9D2KFSXOYqBT6B",
              "name": "Elemental Form (Wood Only)",
              "rank": 5
            },
            {
              "id": "w8c6oL6adXfGmE7m",
              "name": "Nature's Pathway",
              "rank": 5
            },
            {
              "id": "8MnjxWHhp2i5E7y1",
              "name": "Plant Form",
              "rank": 5
            },
            {
              "id": "IecKmRH5vpBXRxrL",
              "name": "Tangling Creepers",
              "rank": 6
            },
            {
              "id": "nyBhK1bPp4ICRht1",
              "name": "Tree of Seasons",
              "rank": 6
            },
            {
              "id": "DX6bJAf9MZOAXOVA",
              "name": "Regenerate",
              "rank": 7
            }
          ]
        },
        {
          "id": "22ABeYPMmIl5iVCi",
          "name": "Druid Order Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "dIOoHrjCJbLltc4Y",
              "name": "Cornucopia",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:globetrotting-scholar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "gJBsgTZnZnImelP2",
      "slug": "globetrotting-scholar",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3731f61f82cc579b96732a349c68662e3256fbd113db158af5e22e3d68921991",
    "translatableHash": "sha256:fecbc5c8139cab7039498c87e236ee4548d1b25fecef3ef3a554692d51e8aab4",
    "data": {
      "schemaVersion": 1,
      "name": "Globetrotting Scholar",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "It takes a particular kind of personality to leave the creature comforts of academia in order to explore trap-ridden ancient tombs or observe man-eating monstrosities in their native habitats. The sort of personality that finds joy in the life cycle of parasitic wasps or recounts grisly Ghol-Gani sacrificial rites with a decidedly gruesome relish. Academia would not survive without such globetrotting scholars, but to their more sedate colleagues, they do tend to come off as an odd bunch.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 33,
      "hitPoints": 235,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 26,
        "will": 20
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": 3,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 24,
        "athletics": 27,
        "crafting": 22,
        "nature": 27,
        "stealth": 24,
        "survival": 27
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
          "id": "80RB4Xo6G5gXmYYh",
          "name": "Frost Dagger",
          "bonus": 25,
          "damage": "2d4+11 piercing; 1d6 cold",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "sHgCfWygEqVXjhJ6",
          "name": "Fist",
          "bonus": 24,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "fMvY5CyYsIZ8qzap",
          "name": "Flintlock Pistol",
          "bonus": 27,
          "damage": "2d4+8 piercing; 1d6 electricity",
          "traits": [
            "concussive",
            "fatal-d8",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "gPCVs0CaoNk7Gcne",
          "name": "Following Spell",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The globetrotting scholar's last action was a successful Strike\nEffect The globetrotting scholar immediately casts Gouging Claw, Ignition, or Tangle Vine at the target of the Strike.",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "edM39Zg5GPyFAlWB",
          "name": "Magnificent…!",
          "kind": "action",
          "description": "The globetrotting scholar enthusiastically describes certain features of whatever dread horror they are currently facing, pointing out the weaknesses of a creature within 30 feet. The globetrotting scholar and all allies that can hear or see them gain a +1 status bonus to attack and damage rolls against that creature until the beginning of the globetrotting scholar's next turn. The scholar deals an extra 3d6 precision damage with their weapon and unarmed Strikes that hit that creature during the same duration.\nEffect: Magnificent…!",
          "traits": [
            "auditory",
            "linguistic",
            "visual"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "yzoPcmP5INwXvTBL",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "uZqoFBsy73Hn25cK",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "wLuokNBYcQlcHtyr",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "v3Si53gtt4tAHzAk",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "v8DTOwrJQCNaK8lT",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "bZNkyx7uYNMHhHpM",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "PfEATPQTGW7mtyev",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "MwhoDah5RtuuK8Nb",
              "name": "Thunderstrike",
              "rank": 1
            },
            {
              "id": "gE8pt1KlM0TPwsyK",
              "name": "Disintegrate",
              "rank": 6
            },
            {
              "id": "XAbFJlwMXBLPueaj",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "zgCTadcYg6Nk9noC",
              "name": "Project Image",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hero-hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "qsS9EAPMfav5mmzK",
      "slug": "hero-hunter",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04ec0c52d106595d9c9fa69cbd26bbbb01ba305903a4a099f5bf8516e3dea4f6",
    "translatableHash": "sha256:f0aa6ccbc4962a898853112f4693c888377e61e7a015651df121ffaa98f90678",
    "data": {
      "schemaVersion": 1,
      "name": "Hero Hunter",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Some hunters grow bored of simple beasts and monsters. For them, a battle-tested warrior is the finest prey.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 33,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": []
      },
      "saves": {
        "fortitude": 22,
        "reflex": 25,
        "will": 21
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 3,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 26,
        "crafting": 24,
        "deception": 19,
        "nature": 21,
        "stealth": 27,
        "survival": 25
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
          "id": "OxhqTPZiGcmAl9tS",
          "name": "Greataxe",
          "bonus": 27,
          "damage": "2d12+13 slashing",
          "traits": [
            "magical",
            "sweep"
          ]
        },
        {
          "id": "pgnPfHWixj9WNEqX",
          "name": "Fist",
          "bonus": 26,
          "damage": "1d4+13 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "9zYSPDErRpkI5yhR",
          "name": "Hand Crossbow",
          "bonus": 26,
          "damage": "2d6+8 piercing",
          "traits": [
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ITGU0HjcVWJDtXYk",
          "name": "Prepared Trapper",
          "kind": "passive",
          "description": "A hero hunter carries the materials to Craft two Alarm Snares, two Grasping Snares, one Snagging Hook Snare, and one Stunning Snare. The hero hunter replenishes any used supplies each time they make their daily preparations.",
          "traits": []
        },
        {
          "id": "ezv8OjHHct0qzog2",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The hero hunter is targeted with a melee or ranged attack by an attacker they can see\nEffect The hero hunter gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "reOPvYYhBU4q0vP3",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "bMXbZXdH5Fh7k4jX",
          "name": "Deadly Snares",
          "kind": "action",
          "description": "The hero hunter Crafts a snare that would normally take 1 minute or less to Craft. The Stealth DC to locate the snare and DC to disable it with Thievery are equal to the hero hunter's Crafting DC if it's higher than the snare's DC.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "ipvH91SSeasZXlNH",
          "name": "Felling Shot",
          "kind": "action",
          "description": "The hero hunter makes a ranged Strike. If it hits and deals damage to a flying target, the target falls up to 120 feet but takes no damage from the fall. The creature can't Fly, Leap, levitate or otherwise leave the ground until the end of the hero hunter's next turn.",
          "traits": []
        },
        {
          "id": "XztcVUSuRZBMTcYy",
          "name": "Hunter's Precision",
          "kind": "action",
          "description": "The hero hunter knows how to hunt and kill any game. While in this stance, all the hero hunter's Strikes deal an additional 2d8 precision damage, and the range increment for their ranged weapon Strikes is 20 feet longer than normal. If the hunter gets a critical hit with a weapon Strike, the target also takes 2d6 persistent bleed damage.",
          "traits": [
            "stance"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:juggernaut",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "RT4du8iTXLoCgBnm",
      "slug": "juggernaut",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16593f51c00c2ed2ea28134d7821a861e96a6939875003076d15003746e4829e",
    "translatableHash": "sha256:919d2de8d3d409e58b8b2d3e1e656261c121f6a393c39a7df383c56ddd821fb2",
    "data": {
      "schemaVersion": 1,
      "name": "Juggernaut",
      "level": 13,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The heavy suit of mechanical metal armor a juggernaut wears is custom-built and highly complex and specialized to its wearer. Other creatures can't make use of the armor unless they have similar skill and customize it thoroughly.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 33,
      "hitPoints": 250,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 19,
        "will": 21
      },
      "abilities": {
        "str": 8,
        "dex": 3,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 27,
        "crafting": 26,
        "intimidation": 26
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
          "id": "je0CzQdPmOide7z9",
          "name": "Integrated Weapon",
          "bonus": 27,
          "damage": "3d8+12 untyped",
          "traits": []
        },
        {
          "id": "wdKi5VZFwtnhqLzf",
          "name": "Plated Fist",
          "bonus": 27,
          "damage": "3d4+14 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "UZiC0hbYaPytP9Ds",
          "name": "Integrated Weapon",
          "kind": "passive",
          "description": "A juggernaut's armor includes one integrated melee weapon, such as a diamond-tipped rotary saw blade, massive pneumatic drill, or heavy spiked gauntlet. The specifics don't change the damage dealt by its Strikes, but determines whether it deals bludgeoning, piercing, or slashing damage. A juggernaut with tools and a workshop can spend 2 hours to swap their armor's integrated weapon.",
          "traits": []
        },
        {
          "id": "8qFdBx31AnozeOIo",
          "name": "Power Source",
          "kind": "passive",
          "description": "Juggernaut armor requires a power source built into the armor—such as a steam boiler, Stasian coil, or alchemical reservoir. This determines a damage type—cold, electricity, fire, or poison—for certain abilities.",
          "traits": []
        },
        {
          "id": "dwAUiDRwxVeb32EQ",
          "name": "Galvanized Plating",
          "kind": "passive",
          "description": "The juggernaut has resistance 10 to the damage type of the armor's power source.",
          "traits": []
        },
        {
          "id": "40i1dSafzK9Okkiy",
          "name": "Self-Destruct",
          "kind": "reaction",
          "description": "Trigger The juggernaut is reduced to 0 Hit Points\nEffect The juggernaut collapses and their armor emits a steady ticking sound. At the beginning of what would have been the juggernaut's next turn, the armor's power source explodes, destroying it completely and dealing 10d6 effect value damage in a 30-foot type:emanation with a check (reflex, dc:33, basic, options:area-effect) save. The explosion deals the damage type of the armor's power source. An adjacent creature can cancel the self-destruct sequence by succeeding at a DC 33 Thievery check to [[/act disable-device dc=33]].",
          "traits": []
        },
        {
          "id": "8vRQFNB6ZuJQuPsr",
          "name": "Energy Projector",
          "kind": "action",
          "description": "A juggernaut carries a powerful cannon-like projectile weapon that requires two hands to wield and deals 14d6 effect value damage to all creatures in its area with a DC 31 basic save; the damage type, area, and save are based on the armor's power source, as listed below. Once activated, Energy Projector can't be used again for [[/gmr 1d4 #Recharge Energy Projector]].\n• Cold 30-foot type:cone of cold (check (reflex, basic, dc:31, options:area-effect, traits:cold))\n• Electricity 60-foot type:line of electricity (check (reflex, basic, dc:31, options:area-effect, traits:electricity))\n• Fire 30-foot type:cone of fire (check (reflex, basic, dc:31, options:area-effect, traits:fire))\n• Poison 30-foot type:cone of poison gas (check (fortitude, basic, dc:31, options:area-effect, traits:poison))",
          "traits": [
            "alchemical"
          ]
        },
        {
          "id": "YQs9nKDc0BMAA6m1",
          "name": "Jump Jets",
          "kind": "action",
          "description": "The juggernaut gains a Fly speed of 15 feet until the end of their current turn. If the juggernaut isn't on solid ground when they lose their fly Speed, they fall. After the effect ends, the juggernaut can't use Jump Jets again for 1 round.",
          "traits": [
            "alchemical"
          ]
        },
        {
          "id": "uzqaluUrz4rDIwR6",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, plated fist, check (reflex, dc:33, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:curse-monger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lqlrpoxzBoBH6Hw8",
      "slug": "curse-monger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3a79b0a265fd89d9e4a4b2cf53718ad039d14d0b2dc402636ff58f70655846e5",
    "translatableHash": "sha256:317f482f7dbfa831b7004f8c3143f85b5943c1cf62d843d689d77c5ba51a44fc",
    "data": {
      "schemaVersion": 1,
      "name": "Curse Monger",
      "level": 14,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Oracles who have been consumed by their visions and the divine gifts bestowed upon them turn to more sinister paths, becoming curse mongers. Seeking to rid themselves of the shadows that haunt them, curse mongers lash out and attempt to bind others to their fate.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 35,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 25,
        "will": 26
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 3,
        "int": 8,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "arcana": 25,
        "deception": 25,
        "intimidation": 23,
        "occultism": 29,
        "stealth": 24
      },
      "languages": [
        "aklo",
        "chthonian",
        "common",
        "daemonic",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "xEYuBzelGgo2j3pL",
          "name": "Sickle",
          "bonus": 25,
          "damage": "1d6 bleed; 2d4+13 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "trip"
          ]
        },
        {
          "id": "6nLttawf3pT9Fftg",
          "name": "Fist",
          "bonus": 24,
          "damage": "1d4+13 bludgeoning",
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
          "id": "200EAKoQUarAGH6x",
          "name": "Incurable Curse",
          "kind": "passive",
          "description": "The curse monger is permanently Clumsy 1, Drained 1, Enfeebled 1, or Stupefied 1 by a curse that can't be removed from them in any way. The GM chooses the condition and decides whether the curse is arcane, divine, occult, or primal.",
          "traits": [
            "curse"
          ]
        },
        {
          "id": "htR4le3t4fiRyPEw",
          "name": "–2 To All Saves vs. Curses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "4u8iXfXC13rONcRj",
          "name": "Cursed Aura",
          "kind": "passive",
          "description": "30 feet. The very earth and air around the curse monger are poisoned by the curses that burden their soul. Any creature who enters or starts their turn in the aura must succeed at a check (will, dc:31, options:inflicts:doomed) save or be Doomed 1 (or Doomed 2 on a critical failure). Regardless of the result of its save, the creature is then temporarily immune for 1 hour.",
          "traits": [
            "aura",
            "curse",
            "occult"
          ]
        },
        {
          "id": "TxfvDT9dqOAuWcTv",
          "name": "Share Burden",
          "kind": "action",
          "description": "The curse monger shares their awful burden with one creature they can see within 120 feet. The target must succeed at a check (will, dc:37) save or be afflicted with the same condition as the curse monger's incurable curse for 24 hours. On a critical failure, the curse's value is 2. The curse lasts for 24 hours but can be removed (unlike the incurable curse), and ends if the curse monger dies. This action has the same tradition trait as incurable curse.",
          "traits": [
            "concentrate",
            "curse"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "H81xAJlUu1I82Q1i",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "tkOuTIJcjBMSS316",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "UDlx9YoqcTJYm31A",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "5q3adJ9UZG57ycuJ",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "FZ0RXF4VKND2s1Ym",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "5wVbvQaxIQFHrJqD",
              "name": "Ill Omen",
              "rank": 1
            },
            {
              "id": "E6klrznIaKklSaHS",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "phl0lwxka19QZLnt",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "Yw5nSeFEMGyrzNuJ",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "FkQzRmmYR6kUP2hm",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "XgF9cTWSd7Rp0pNw",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "WNY63fbJEQZkBbrH",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "WDeVvfGCmyzT1dOt",
              "name": "Hypercognition",
              "rank": 3
            },
            {
              "id": "ACN7TGOb8M8eVeBD",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "le9DQF3CI3sHKCzJ",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "BzfsmVccFZ4tgFAX",
              "name": "Blood Vendetta",
              "rank": 4
            },
            {
              "id": "LDnmB7wtT2FNr9uA",
              "name": "Outcast's Curse",
              "rank": 4
            },
            {
              "id": "yfYaMfiaqDipJPqw",
              "name": "Vision of Death",
              "rank": 4
            },
            {
              "id": "Y6v8N2TUvYiRFaeU",
              "name": "False Vision",
              "rank": 5
            },
            {
              "id": "PG4yWn6M8iWtAUZx",
              "name": "Mariner's Curse",
              "rank": 5
            },
            {
              "id": "19mhke2c7DByA7Iy",
              "name": "Wave of Despair",
              "rank": 5
            },
            {
              "id": "K4fq75UxM7W3SC4N",
              "name": "Never Mind",
              "rank": 6
            },
            {
              "id": "Dhf0E5HSpQtqDGRK",
              "name": "Phantasmal Calamity",
              "rank": 6
            },
            {
              "id": "lFuTAzSgF3JOgRUp",
              "name": "Spellwrack",
              "rank": 6
            },
            {
              "id": "hTwfOhicLgTPZMAN",
              "name": "Cursed Metamorphosis",
              "rank": 7
            },
            {
              "id": "yIXeD8iCVzR1Yxax",
              "name": "Dominate",
              "rank": 7
            },
            {
              "id": "NqKaBRHYjPbY4rxS",
              "name": "Possession",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:siegebreaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "yU434Ugr11tvU7TS",
      "slug": "siegebreaker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:44841a5279cd8761c230308c5598aa7726f2b9ce2d5dbfaac07d8f33deb45c74",
    "translatableHash": "sha256:1226033b7c8b9a42121c7278d4c0e4aaedfdd1b87dc89ff6f5913fe509c3f5ea",
    "data": {
      "schemaVersion": 1,
      "name": "Siegebreaker",
      "level": 14,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "When a well-constructed or magically warded fortification repels every assault, a siegebreaker is called in. These masters of alchemical destruction find that the bigger and more protected the wall, the more satisfying it is to break it.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 34,
      "hitPoints": 300,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": []
      },
      "saves": {
        "fortitude": 25,
        "reflex": 28,
        "will": 23
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 4,
        "int": 5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 23,
        "crafting": 27,
        "stealth": 25,
        "thievery": 23
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
          "id": "RYJD0HLwd3IUMOqs",
          "name": "Light Mace",
          "bonus": 27,
          "damage": "2d4+18 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "shove"
          ]
        },
        {
          "id": "TOdQi8FNBz14Ih4P",
          "name": "Fist",
          "bonus": 25,
          "damage": "1d4+18 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "fPOMGsWvoWVlHUTg",
          "name": "Alchemical Grenade",
          "bonus": 27,
          "damage": "3d6 untyped; 10 untyped; 10 untyped",
          "traits": [
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "rRrhMpXglshRWUxw",
          "name": "Alchemical Grenades",
          "kind": "passive",
          "description": "A siegebreaker carries 15 alchemical grenades that deal either acid, cold, or fire damage plus 10 persistent damage and 10 splash damage of the same type (typically five of each damage type). They replenish these grenades each day.",
          "traits": []
        },
        {
          "id": "SI9QhHDLxpLn2b3x",
          "name": "Explosive Compounds",
          "kind": "passive",
          "description": "When an attacker scores a critical hit against the siegebreaker, one of the siegebreaker's alchemical grenades bursts. The GM determines the grenade randomly. The siegebreaker takes damage from the grenade as though they were hit by the grenade (applying their resistance normally), and any creature in a 10-foot type:emanation takes the splash damage.",
          "traits": []
        },
        {
          "id": "ethJo6r2eUWz3ayn",
          "name": "Resistance 10 to Alchemical Items",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "VIv5BO5e8vFaoawz",
          "name": "Expanded Splash",
          "kind": "passive",
          "description": "The siegebreaker's grenades deal splash damage in a 10-foot emanation.",
          "traits": []
        },
        {
          "id": "FN3IMvwwDXsLxBSe",
          "name": "Quick Grenadier",
          "kind": "action",
          "description": "The siegebreaker Interacts to draw a grenade, then Strikes with it.",
          "traits": []
        },
        {
          "id": "Bi5rajlTE3v50VDg",
          "name": "The Wall Must Fall",
          "kind": "passive",
          "description": "Requirements The siegebreaker is at the base of a fortified wall\nEffect The siegebreaker has studied for years to gain exact knowledge of how to combine the alchemical ingredients in their grenades to exponentially multiply their power, creating a terrifying siege-ender bomb that can break open a city wall. The siegebreaker spends 10 minutes combining the ingredients from 9 different alchemical grenades of their choice. The siegebreaker then sets a fuse timer up to 1 minute long. When time's up, the bomb explodes in a concentrated 20-foot type:burst, dealing 20d6 acid damage, 20d6 cold damage, or 20d6 fire damage that ignores up to 10 Hardness of structures. Any creature in the area can reduce the damage they take with a check (reflex, dc:37, basic, options:area-effect) save.",
          "traits": [
            "exploration"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:peerless-healer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "02hCP1sCfUXXjW5B",
      "slug": "peerless-healer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:270011eeac4016122dd66b6b7ec4fd2aaa71728a59faf3d6c2e7ad17a6050613",
    "translatableHash": "sha256:6d44f00351eb8dc79dff9a880da0df66c526fe1eee8425240438db92b4a3cdb1",
    "data": {
      "schemaVersion": 1,
      "name": "Peerless Healer",
      "level": 15,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Peerless healers are legendary, blending divine and natural medicine. Often pillars in their respective communities, they see to the health of the populace.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 35,
      "hitPoints": 200,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": []
      },
      "saves": {
        "fortitude": 26,
        "reflex": 24,
        "will": 27
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "diplomacy": 26,
        "medicine": 33,
        "nature": 27,
        "religion": 25,
        "society": 23
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "MmSpUEaiUQK0G92h",
          "name": "Fist",
          "bonus": 24,
          "damage": "1d4+9 bludgeoning; 4d8 vitality",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "SeUl9DhDs6NLH7lt",
          "name": "Staff",
          "bonus": 25,
          "damage": "2d4+9 bludgeoning; 4d8 vitality",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "lkrvzd7ky4JVJPRQ",
          "name": "Doctor's Hand",
          "kind": "passive",
          "description": "When the peerless healer rolls a critical failure on a check to Treat Disease, Treat Poison, or Treat Wounds, they get a failure instead.",
          "traits": []
        },
        {
          "id": "pPd7Ra9KB28EqOPx",
          "name": "Healing Echo",
          "kind": "passive",
          "description": "Trigger The peerless healer restores Hit Points to an ally using Heal\nEffect One willing creature within 30 feet who didn't benefit from the triggering spell regains Hit Points equal to half the healing granted. The peerless healer can't use Healing Echo again for [[/gmr 1d4 #Recharge Healing Echo]].",
          "traits": [
            "manipulate",
            "vitality"
          ]
        },
        {
          "id": "XrR1DIwISeYj4TFV",
          "name": "Medical Specialist",
          "kind": "passive",
          "description": "The peerless healer is a 17th-level challenge for contests of medicine.",
          "traits": []
        },
        {
          "id": "HmwOSlHx8f9pqHwa",
          "name": "+2 Status vs. Poison and Disease",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "nDMiwe2QDX7JBSYX",
          "name": "Community Healer",
          "kind": "passive",
          "description": "When Treating Disease or Treating Wounds, the humanitarian healer can treat up to eight targets. In addition, each time the peerless healer successfully Treats Wounds, they can also either reduce the value of one Clumsy, Enfeebled, Drained, or Stupefied condition affecting a single patient by 2 or cast a 7th-rank Clear Mind, Sound Body, or Sure Footing spell on one patient without expending a spell slot.",
          "traits": []
        },
        {
          "id": "7os9NqqOuwo6EtBJ",
          "name": "Healing Hands",
          "kind": "passive",
          "description": "When the peerless healer casts Heal, they roll d10s instead of d8s.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "Z2m3pHFZlVbXHBNf",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "gSdHdhmFDdD0iew6",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "qIKlTrQm6bfq6np6",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "oJFyUo6J2gj4zZTl",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "AkP4ZWXnJskuf0Eq",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "9jod7dNN96XwoRDW",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "At03kToC2Q1otigh",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "Ly2yTqdkOiUxnP0N",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "dKEvNmGFBFx5JKQ2",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "P0b72p3IWnywPTUI",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "QaC9A1ZrWNziWXmG",
              "name": "Everlight",
              "rank": 2
            },
            {
              "id": "hMDYHwka1PX3We3N",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "cZqAtpIox14S4L0K",
              "name": "Share Life",
              "rank": 2
            },
            {
              "id": "PDMi7hHTMnnTqw1e",
              "name": "Water Breathing",
              "rank": 2
            },
            {
              "id": "0X3IUR5ythpHoyfE",
              "name": "Heroism",
              "rank": 3
            },
            {
              "id": "HGSZSSj11jP49K4M",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "06ex8pogz2zc53VE",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "cc0KRDdsXCGOcHXV",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "sc5bMt7zcV32DG10",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "f2zLyUn5c2VUKcMV",
              "name": "Resist Energy",
              "rank": 4
            },
            {
              "id": "F5Yhh0OX42kLYNbQ",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "APl8glv0KYrAcY4y",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "eEKnJC2MdMheTJE2",
              "name": "Creation",
              "rank": 5
            },
            {
              "id": "Nkl8GNUtUhUhbBjs",
              "name": "Locate",
              "rank": 5
            },
            {
              "id": "LViRKdrrM2EnVyU7",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "YAlrF8gI2KMmVFC3",
              "name": "Truespeech",
              "rank": 5
            },
            {
              "id": "mmNVyG36kruZpegN",
              "name": "Clear Mind",
              "rank": 6
            },
            {
              "id": "RqAjBDcFFG2xq8YE",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "bk0XLzcBPa0HTflF",
              "name": "Sound Body",
              "rank": 6
            },
            {
              "id": "DupYoBFx4q51VJID",
              "name": "Sure Footing",
              "rank": 6
            },
            {
              "id": "VwfV8hKRcixopNIy",
              "name": "Breath of Life",
              "rank": 7
            },
            {
              "id": "HcKfdgRXAdHvcTEp",
              "name": "Heal",
              "rank": 7
            },
            {
              "id": "phcsSIxtYFxAqbxZ",
              "name": "Regenerate",
              "rank": 7
            },
            {
              "id": "aPLZaGpJ2uxEjdHw",
              "name": "Vital Beacon",
              "rank": 7
            },
            {
              "id": "YnNu1tpsE9FBKasi",
              "name": "Cleanse Affliction",
              "rank": 8
            },
            {
              "id": "4YCK28TAwcA682wj",
              "name": "Heal",
              "rank": 8
            },
            {
              "id": "HMZiezPqbM91DMzs",
              "name": "Moment of Renewal",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:flamboyant-thief",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "dkUu1Ua71kWcZBMd",
      "slug": "flamboyant-thief",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dcf9aa017c1395956f204192508f09f37b06cc54492d5961b7b7b1df73111ccd",
    "translatableHash": "sha256:09e3df1cafcd96ecf9adb9f16711f253e37a95c363d190da3b5aedf1ada52ada",
    "data": {
      "schemaVersion": 1,
      "name": "Flamboyant Thief",
      "level": 15,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "There's no honor among thieves, but if there were points for style, these thieves would have 10s across the board. Some would say flamboyant thieves value showcasing their skills rather than successfully stealing an item, but what better way to show that you're the best than with an audience?\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 37,
      "hitPoints": 225,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": []
      },
      "saves": {
        "fortitude": 23,
        "reflex": 30,
        "will": 26
      },
      "abilities": {
        "str": 5,
        "dex": 6,
        "con": 1,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 29,
        "athletics": 26,
        "deception": 28,
        "intimidation": 26,
        "performance": 28,
        "society": 24,
        "stealth": 31,
        "thievery": 31
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
          "id": "bSy0mziCB8C0Ha54",
          "name": "Dagger",
          "bonus": 29,
          "damage": "2d4+11 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "CJ5XNh7I8Zc9mCGd",
          "name": "Dagger",
          "bonus": 29,
          "damage": "2d4+11 piercing",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "8XGqAJbGOsULu2Dn",
          "name": "Fist",
          "bonus": 27,
          "damage": "1d4+11 bludgeoning",
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
          "id": "hCwfJTcBjN8WoLif",
          "name": "Flamboyant Performance",
          "kind": "passive",
          "description": "A flamboyant thief's attempts to Steal don't automatically fail even if a creature is in combat or on guard. While being observed, the thief gains a +2 circumstance bonus to Deception checks to Create a Diversion or [[/act feint]] and to Thievery checks to [[/act palm-an-object]] or [[/act steal]]. However, they are compelled to leave a tangible sign of their presence, such as a calling card or symbol—often in place of a stolen item.",
          "traits": []
        },
        {
          "id": "y8OcBYjxfpIyrzVu",
          "name": "Vanishing Act",
          "kind": "passive",
          "description": "The flamboyant thief can [[/act hide]] and [[/act sneak]] even without having cover or being Concealed.",
          "traits": []
        },
        {
          "id": "G3GWsBGc2YCHf7oJ",
          "name": "Dramatic Entrance",
          "kind": "passive",
          "description": "Trigger The flamboyant thief rolls initiative\nEffect The flamboyant thief draws all eyes to them. They attempt a check (performance, defense:will) check, comparing the result against the Will DC of any number of creatures within 120 feet. Each creature the thief succeeds against is Fascinated with the thief until the end of the thief's next turn.",
          "traits": [
            "emotion",
            "mental",
            "visual"
          ]
        },
        {
          "id": "KuGIBA2MsSUgCODF",
          "name": "I Say When I'm Here",
          "kind": "passive",
          "description": "When any detection, revelation, or scrying magic would reveal the flamboyant thief, the thief becomes aware of it and can attempt to counteract the magic with a counteract rank of 8th level and using their Stealth as their counteract modifier.",
          "traits": []
        },
        {
          "id": "2QybfIWuFFyqMTcf",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The flamboyant thief is targeted with a melee or ranged attack by an attacker it can see.\nEffect The flamboyant thief gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "KjWzrAticX5PTqya",
          "name": "Dancing Dagger",
          "kind": "action",
          "description": "The flamboyant thief can Step, attempt a melee dagger Strike, and attempt a ranged dagger Strike, taking the actions in any order. Both Strikes count toward the thief's multiple attack penalty, but it doesn't increase until after both attacks.",
          "traits": []
        },
        {
          "id": "HL4OnnB0LnV2IciP",
          "name": "Dramatic Exit",
          "kind": "action",
          "description": "The flamboyant thief throws down their smoke ball, then [[/act hide]], then [[/act sneak]] up to three times with a +2 circumstance bonus to their Stealth checks.",
          "traits": []
        },
        {
          "id": "U0Gh274bqBZw2hvV",
          "name": "Spectacular Attack",
          "kind": "passive",
          "description": "All the flamboyant thief's Strikes deal an additional 3d6 precision damage or 6d6 if the target is Fascinated with the thief. After the thief Strikes a creature, that creature becomes fascinated with the thief until the end of the thief's next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:grand-inquisitor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "FHVUrSWouQtE208v",
      "slug": "grand-inquisitor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8ff484e510afac1f8bcccf069457a3e05259bcd5cb6a49105422f94c456224aa",
    "translatableHash": "sha256:ae9f40fe696ba2f6a2398c2f8c047b9afbce84c6bc58cea63527280ac7c2494b",
    "data": {
      "schemaVersion": 1,
      "name": "Grand Inquisitor",
      "level": 15,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A grand inquisitor leads powerful governmental forces. They're often champions of oppressive empires or overzealous intelligence networks.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 38,
      "hitPoints": 215,
      "speedFeet": 25,
      "perception": {
        "modifier": 28,
        "senses": []
      },
      "saves": {
        "fortitude": 26,
        "reflex": 20,
        "will": 28
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 2,
        "int": 3,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 25,
        "deception": 27,
        "diplomacy": 30,
        "intimidation": 30,
        "society": 28
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
          "id": "Svux2MIqIWHwrc6U",
          "name": "Scimitar",
          "bonus": 30,
          "damage": "2d6+15 slashing",
          "traits": [
            "forceful",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "Fzu3qBFuiFYsG1oR",
          "name": "Starknife",
          "bonus": 30,
          "damage": "2d4+15 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "BN4r1jbMyua4hEhj",
          "name": "Starknife",
          "bonus": 27,
          "damage": "2d4+15 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        },
        {
          "id": "P55LeUT1YfsMBYt2",
          "name": "Fist",
          "bonus": 30,
          "damage": "1d4+15 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "c1bS4tIX6I420ZJa",
          "name": "+3 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "yohUHoQXW0yqjdfO",
          "name": "+3 to Reflex vs. Damaging Effects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "XCtSFEtXV3O6LDnP",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "If the grand inquisitor's attack hits and this reaction was triggered by a Frightened creature, the triggering action is disrupted.",
          "traits": []
        },
        {
          "id": "ZqVEoQAOjtSOpwyP",
          "name": "Searching Gaze",
          "kind": "passive",
          "description": "30 feet. When an opponent ends its turn in the aura, it must attempt a check (will, dc:36, options:inflicts:frightened) save or it becomes Frightened 1 (Frightened 2 on a critical failure), and the grand inquisitor learns its surface thoughts (and underlying motive on a critical failure).",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental",
            "visual"
          ]
        },
        {
          "id": "bGozAhC9KxWlduTh",
          "name": "Symbol of Loyalty",
          "kind": "passive",
          "description": "60 feet. Allies in the aura who are 14th level and lower and are loyal to the grand inquisitor's cause get a +3 status bonus to Will saves.",
          "traits": [
            "aura",
            "emotion",
            "mental",
            "visual"
          ]
        },
        {
          "id": "KEFqC97T2DofBpen",
          "name": "Condemn",
          "kind": "action",
          "description": "The grand inquisitor [[/act demoralize]]. On a success, the target is Stunned with a value equal to its Frightened condition.",
          "traits": [
            "incapacitation",
            "linguistic"
          ]
        },
        {
          "id": "78gWMcfr2uEc8zqO",
          "name": "I Am the Law!",
          "kind": "action",
          "description": "The grand inquisitor vows to bring down all the fury of a nation down upon their foes. Up to three lower-level allies within 60-foot emanation of the grand inquisitor can use their reaction to Grapple, Strike, or Trip with a +2 status bonus.\nEffect: I Am the Law!",
          "traits": [
            "auditory",
            "linguistic"
          ]
        },
        {
          "id": "dooNq9cd2HLn1zKR",
          "name": "Twisting Fear",
          "kind": "passive",
          "description": "The grand inquisitor's Strikes deal an extra 3d6 precision damage to Frightened creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:deific-vessel-of-urgathoa",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "L9GYpgZrtvRcjsrS",
      "slug": "deific-vessel-of-urgathoa",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e144ef0a985040ef254fd048e5855f133596d816a7904c50cd7fa1f4e17c202e",
    "translatableHash": "sha256:f9644ec61064609b31f70962961b5fca155f2d1789f34725f7b4467e76f2d7d9",
    "data": {
      "schemaVersion": 1,
      "name": "Deific Vessel of Urgathoa",
      "level": 15,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "divine",
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "Through direct intervention in the mortal world, a deity creates a deific vessel to do their will, whether from a willing servant or through possession, a contract, or a curse. A candle to the flame of their progenitor, a divine vessel burns fast and quickly extinguishes.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 35,
      "hitPoints": 300,
      "speedFeet": 25,
      "perception": {
        "modifier": 27,
        "senses": [
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 24,
        "will": 26
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 6,
        "int": 2,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "athletics": 26,
        "deception": 27,
        "intimidation": 29,
        "religion": 31
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "unconscious"
        ],
        "resistances": [
          "void 15"
        ],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "RSysDksj4goqWAS0",
          "name": "Decaying Frost Scythe",
          "bonus": 28,
          "damage": "3d10+11 slashing",
          "traits": [
            "deadly-d10",
            "magical",
            "trip",
            "unholy"
          ]
        },
        {
          "id": "S98ts41Z5hbab5wF",
          "name": "Decaying Frost Fist",
          "bonus": 28,
          "damage": "3d4+11 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "D6c1dAJPVPCqasW6",
          "name": "Grave Pulse",
          "bonus": 27,
          "damage": "3d6 cold; 2d8 void",
          "traits": [
            "cold",
            "unholy",
            "void"
          ]
        }
      ],
      "actions": [
        {
          "id": "ersYW9GoqQBCo3Y9",
          "name": "Mark of Fate",
          "kind": "passive",
          "description": "A creature that slays the deific vessel must succeed at a check (will, dc:35) save or be visibly marked as anathema to Urgathoa. It gains weakness 10 to unholy and takes a –2 circumstance penalty to Charisma-based skill checks against followers of Urgathoa. Creatures attempting to Gather Information about or Track the marked creature gain a +2 circumstance bonus to their checks.\nThe mark can't be hidden and can be removed only by participating in an atone ritual led by a worshipper of Urgathoa who is 12th level or higher.\nEffect: Mark of Fate",
          "traits": [
            "curse",
            "divine"
          ]
        },
        {
          "id": "BtWL2jwtSXGzNE4t",
          "name": "Limited Lifespan",
          "kind": "passive",
          "description": "The deific vessel takes 25 untyped damage at the end of its turn if it Cast a Spell, used Borrow Time, or made a Strike that turn. This damage ignores resistance.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "hNH13IdYBvGGYvmU",
          "name": "Shattered Vessel",
          "kind": "passive",
          "description": "When the deific vessel dies, the divine power barely contained within their form explodes outward, dealing 6d8 spirit damage to each creature in a 30-foot type:emanation with a check (reflex, dc:33, basic, options:area-effect) save.",
          "traits": [
            "divine",
            "unholy"
          ]
        },
        {
          "id": "Yd7AfIigOJ1wFY1W",
          "name": "Void Tendrils",
          "kind": "passive",
          "description": "30 feet.\nWhen a creature in the aura would be healed by a vitality effect, the healing is reduced by 15 and the deific vessel regains 15 healing Hit Points.",
          "traits": [
            "aura",
            "divine",
            "void"
          ]
        },
        {
          "id": "6ZsxIxGeLF5aLgdy",
          "name": "Borrow Time",
          "kind": "action",
          "description": "The vessel chooses two different creatures in their void tendrils aura. Each one must be either undead or the vessel themself. One target loses 25 untyped damage HP and the other regains that many HP. If a target is unwilling, it can negate the transfer with a successful check (fortitude, dc:39) save.",
          "traits": [
            "divine",
            "void"
          ]
        },
        {
          "id": "M5xuaa8XeJZWeK9g",
          "name": "Grave Chill",
          "kind": "passive",
          "description": "The vessel's unarmed attacks and scythe gain the +2 Decaying Frost greater striking runes when used by the vessel, and their Strikes gain the death trait.",
          "traits": [
            "divine"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "UGVQv2u7BCPKeC42",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 31,
          "saveDc": 39,
          "spells": [
            {
              "id": "NVcNBChtZ8E7hpyU",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "UXFGilcP4YXuQtq7",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "6l9VbHUq1WgE3h50",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "CV3h43zRnFJGzLpU",
              "name": "Harm (At Will)",
              "rank": 4
            },
            {
              "id": "wihFAOmGqPHLWNRF",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "RjxIcC1o5SmAfHe4",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "sogylcgAwypiy1Ky",
              "name": "Vampiric Exsanguination",
              "rank": 6
            },
            {
              "id": "iNNz7jDzQkkPWRiO",
              "name": "Zealous Conviction",
              "rank": 6
            },
            {
              "id": "CZ5dVzDO2XNgYtnJ",
              "name": "Divine Decree",
              "rank": 7
            },
            {
              "id": "onD2LFKo6FvVcM6L",
              "name": "Eclipse Burst",
              "rank": 7
            },
            {
              "id": "rgVmGCsultSZpc2X",
              "name": "Execute",
              "rank": 7
            },
            {
              "id": "sfxdfxBEhkD80hD9",
              "name": "Dominate",
              "rank": 8
            },
            {
              "id": "zWa55qtwf0s47Y7G",
              "name": "Harm",
              "rank": 8
            },
            {
              "id": "Q9bqgJJzpUbW6RKb",
              "name": "Mask of Terror",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:world-ender",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Vp2PPBttJl1h8iZe",
      "slug": "world-ender",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b1a216272b42bc11fb1db51f6e087d12ea009b42d84df8813cb9f5d5f2ecab6b",
    "translatableHash": "sha256:0b26b9b66a7497b02e4daf0382b7dc4236dbad670e3e8eb821e52059c04e833e",
    "data": {
      "schemaVersion": 1,
      "name": "World Ender",
      "level": 16,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Unlike most villains, world enders are unburdened by nuance. Their ultimate goal is simple, if lofty: destroy the world and everyone in it.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 36,
      "hitPoints": 275,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": []
      },
      "saves": {
        "fortitude": 30,
        "reflex": 26,
        "will": 28
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 7,
        "int": 7,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "intimidation": 28,
        "nature": 27,
        "religion": 25,
        "society": 27
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "KAVUTJjHkNidNaIT",
          "name": "Fist",
          "bonus": 27,
          "damage": "1d4+10 bludgeoning; 3d6 fire",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "HQZxDpGeReBYsBfD",
          "name": "Staff of Fire",
          "bonus": 28,
          "damage": "2d4+10 bludgeoning; 3d6 fire",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "YfdVhkUI8Z9iF1cf",
          "name": "Unyielding Purpose",
          "kind": "reaction",
          "description": "Trigger The world ender would be reduced to 0 HP\nRequirements The world ender has a Volcanic Eruption spell remaining\nEffect The world ender refuses to let their destructive dream go unrealized, stabilizing at 1 HP just long enough to cast volcanic eruption, centered on themself. They die, immolated in the eruption.",
          "traits": []
        },
        {
          "id": "HTpjIjMPo2FjgyON",
          "name": "Monologue",
          "kind": "passive",
          "description": "Frequency once per round\nEffect Throughout combat, the world ender ceaselessly expounds upon the righteous reasons for their destructive aims and the futility of their enemies' efforts to stop them. They gain a +1 status bonus to Will saves and a +2 status bonus to damage rolls with their spells. Each time they take this action again, the bonuses increase by 1 and 2, respectively. The monologue ends (and the bonuses are lost) if the world ender becomes unable to act or speak, or if they end their turn without having taken this action.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "IdHAPQO7RpUsOTfF",
          "name": "Overwhelming Energy",
          "kind": "action",
          "description": "If the next action the world ender uses is to Cast a Spell, the spell ignores 20 resistance to energy damage. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell. A creature's immunities are unaffected.",
          "traits": [
            "spellshape"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "niwzzTioW24zOrfR",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 33,
          "saveDc": 41,
          "spells": [
            {
              "id": "oC1O9NjDU8rsmqGW",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "2UcCQVo0LkkB3e3K",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "yE58kzMUOltfiC8u",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "7x7xiaXV57iJuJUQ",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "BsWX1MIVAUmJW925",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "FhEFdhaHYTOr77Na",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "0KrLKp7kkUZuhevp",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "coOueS6WkRQ3y6WE",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "HSBLcRb1ocZwphOS",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "W8LSU908jkgNAF9c",
              "name": "Blazing Bolt",
              "rank": 2
            },
            {
              "id": "txEohPIVLe9LyYuF",
              "name": "Darkvision",
              "rank": 2
            },
            {
              "id": "JT1XPRJ57wE3RCsR",
              "name": "Enlarge",
              "rank": 2
            },
            {
              "id": "HzmvOcCf8IO1BHSc",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "OqhYA8J054iEJkIt",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "6wTrC5q3WJiGzJMo",
              "name": "Water Walk",
              "rank": 2
            },
            {
              "id": "MbYD8KG43se3FBaE",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "fuD2twZvrigB2FIK",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "FZEqc17TNwetlNSm",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "OKaH63oJsfie8LBL",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "T5svQmTVUoiAmODY",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "M5ilB86145Em8vNv",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "R5Gw91faXTGxTMzc",
              "name": "Wall of Fire",
              "rank": 4
            },
            {
              "id": "D0jvBbYRZWJQBmkD",
              "name": "Magic Passage",
              "rank": 5
            },
            {
              "id": "aLqNwBC9SMkSP6Hn",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "D0SlmbITskLJlc8U",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "dIQscZrYLYPzVmbL",
              "name": "Fiery Body",
              "rank": 7
            },
            {
              "id": "ooBzYKQZyDKZ1Fz4",
              "name": "Sunburst",
              "rank": 7
            },
            {
              "id": "Uu0qLkclsSjf8PS9",
              "name": "Volcanic Eruption",
              "rank": 7
            },
            {
              "id": "j59EIbK6WhVcHgda",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "18B1OFJZXypvnFtm",
              "name": "Punishing Winds",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:grandmaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "iOAX2QVvgaBdGc0B",
      "slug": "grandmaster",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d863a385e829b214fb846b309e51798b6d0de6a193018669eac127ddf8254389",
    "translatableHash": "sha256:9c8cf76da432816f82841c7b7a5814d11488bf1890dd74d492c8bab826337ed6",
    "data": {
      "schemaVersion": 1,
      "name": "Grandmaster",
      "level": 17,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Beyond the black belt, there is the grandmaster. If a battle breaks out, this incredible warrior possesses unparalleled qi adeptness and punches that can kill.\nMartial artists strive to master the art of hand-to-hand fighting.",
      "armorClass": 40,
      "hitPoints": 310,
      "speedFeet": 50,
      "perception": {
        "modifier": 35,
        "senses": [
          "lifesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 32,
        "will": 27
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": 1,
        "wis": 5,
        "cha": 1
      },
      "skills": {
        "acrobatics": 33,
        "athletics": 33,
        "diplomacy": 25,
        "intimidation": 25,
        "medicine": 25,
        "stealth": 25
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
          "id": "nFZ5iicSh9R6lC4r",
          "name": "Temple Sword",
          "bonus": 33,
          "damage": "3d8+14 slashing",
          "traits": [
            "magical",
            "trip"
          ]
        },
        {
          "id": "0Fd5PXefTlI9tTR7",
          "name": "Fist",
          "bonus": 33,
          "damage": "3d6+14 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "WZMQp8WvoCaV5Fqs",
          "name": "Shuriken",
          "bonus": 31,
          "damage": "3d4+14 piercing",
          "traits": [
            "magical",
            "reload-0",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "qOYHhLTMridyJoy3",
          "name": "Disrupt Qi",
          "kind": "action",
          "description": "The grandmaster attempts an unarmed Strike against a living creature. On a hit, the creature takes 3d6 persistent void damage and is Enfeebled 2 until the persistent damage ends.",
          "traits": [
            "void"
          ]
        },
        {
          "id": "DJFmV5evM4JqcBe8",
          "name": "Flurry of Blows",
          "kind": "action",
          "description": "Frequency once per round\nEffect The grandmaster makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses.\nThe grandmaster can substitute any number of the attacks with temple sword Strikes or attempts to [[/act grapple]], [[/act reposition]], [[/act shove]], or [[/act trip]].",
          "traits": []
        },
        {
          "id": "qkT4nVoSdcKb838L",
          "name": "Forbidden Palm",
          "kind": "action",
          "description": "Requirements The grandmaster has at least 1 Focus Point\nEffect The grandmaster casts Touch of Death (spending 1 Focus Point as normal). Any time the target attempts a Fortitude save against this touch of death, the grandmaster takes 40 damage and is permanently Enfeebled 1. If the target gets a critical success, it's Stunned 1; if it gets a success or failure the stunned condition it gains is increased by 1, and any damage it takes is increased by 40.",
          "traits": []
        },
        {
          "id": "UpywR6mdWHYmYNSa",
          "name": "One-Millimeter Punch",
          "kind": "action",
          "description": "2 or 3\nThe grandmaster makes a single, carefully controlled unarmed Strike that deals 2 additional dice of damage, or 4 additional dice if the grandmaster spent 3 actions. If this damages the target, the grandmaster can choose to make the target attempt a check (fortitude, dc:38) save.\nCritical Success The target is unaffected.\nSuccess The target is pushed back 5 feet.\nFailure The target is pushed back 10 feet.\nCritical Failure The target is pushed back 10 feet for each action the grandmaster spent on One-Millimeter Punch.",
          "traits": []
        },
        {
          "id": "V4vCBm7Vs6OANCRu",
          "name": "Powerful Fists",
          "kind": "passive",
          "description": "The grandmaster's fist Strikes don't take penalties when making lethal attacks, and fist Strikes are treated as adamantine, cold iron and silver.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "g09JNowhgbOgv51x",
          "name": "Monk Focus Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 34,
          "saveDc": 38,
          "spells": [
            {
              "id": "6i8RHvvzDuZ1ZoQv",
              "name": "Harmonize Self",
              "rank": 2
            },
            {
              "id": "yBQTFIzxwpZFdgoE",
              "name": "Qi Blast",
              "rank": 3
            },
            {
              "id": "cGLNV3aXcutkPtLs",
              "name": "Wind Jump",
              "rank": 5
            },
            {
              "id": "EyJ80XKsRtpQDgZD",
              "name": "Touch of Death",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:eldritch-emeritus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "SlabO2qbzHYS3kA6",
      "slug": "eldritch-emeritus",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:57cfd4a85cfe00287301bb5b36426eafc2512ef22b1831af59e85b92b2fa19a0",
    "translatableHash": "sha256:38d3ad0d0de5724faa0eea8fc51a38bb41a0241eeb435b6868e0bbbb9bd5cd02",
    "data": {
      "schemaVersion": 1,
      "name": "Eldritch Emeritus",
      "level": 17,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "To outsiders, the eldritch emeritus looks something like a joke—a befuddled old scholar, their mind so stuffed with obscure theorems and abstract metaphysics that concerns about mere daily reality fade away. Those who know them, however, know that the eldritch emeritus wrote more treatises of spells than most wizards have had hot dinners, and if sufficiently annoyed, is entirely capable of providing a brief, thorough, and fatal demonstration.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 25,
      "perception": {
        "modifier": 32,
        "senses": []
      },
      "saves": {
        "fortitude": 27,
        "reflex": 27,
        "will": 32
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 4,
        "int": 8,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "arcana": 36,
        "intimidation": 30,
        "nature": 33,
        "occultism": 33,
        "religion": 33
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "f2oSLGdPWtt29vqi",
          "name": "Fist",
          "bonus": 30,
          "damage": "1d4+14 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "ueoaPagiV2zhMq7h",
          "name": "Staff",
          "bonus": 31,
          "damage": "3d4+14 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "TQeCzrpY9XhfwJHU",
          "name": "Arcane Beam",
          "bonus": 31,
          "damage": "6d6+10 fire",
          "traits": [
            "arcane",
            "fire",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "YxYafEvifH6RFumX",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "fBxV4p1qSabmBC4c",
          "name": "Counterspell",
          "kind": "reaction",
          "description": "Trigger A creature casts a spell the eldritch emeritus has prepared.\nEffect The emeritus expends a prepared spell to counter the triggering creature's casting of that same spell. The emeritus loses their spell slot as if they had cast the triggering spell. The emeritus then attempts to counteract the triggering spell.",
          "traits": []
        },
        {
          "id": "PI9aHlpQqd8iKdjA",
          "name": "Third Contingent Sequencer",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger A creature attacks or uses a spell or ability that would affect the eldritch emeritus\nEffect A masterpiece of complex spellwork instantly takes shape, casting Fire Shield, Mislead, and Mountain Resilience on the eldritch emeritus, each as an 8th-rank arcane spell.",
          "traits": []
        },
        {
          "id": "fXYdE4H2dFgwfhBi",
          "name": "Didactic Arcanism",
          "kind": "action",
          "description": "1 to 3\nRequirements The eldritch emeritus has seen a creature Cast a Spell of 7th rank or lower during the previous round, that spell takes between one and three actions to cast, and that spell is on the arcane spell list\nEffect The eldritch emeritus mastered that spell 30 years ago, and is happy to show how a real master does it. The emeritus Casts the same Spell but heightened to 8th rank. Didactic Arcanism uses the same number of actions as the original spell took to cast.",
          "traits": [
            "arcane",
            "magical"
          ]
        },
        {
          "id": "YnLObWaGlgd2Jikj",
          "name": "Steady Spellcasting",
          "kind": "passive",
          "description": "If a reaction would disrupt the eldritch emeritus's spellcasting action, the eldritch emeritus attempts a check (flat, dc:15). On a success, the action isn't disrupted",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "2s5KHffX4qTWyddu",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 30,
          "saveDc": 38,
          "spells": [
            {
              "id": "IaBbc8nFODNXPMYv",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "syKTNAH4tecyytj3",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "XJuhOzXOEVw4YSdi",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "OEKQYhWL2QzuGImN",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "XP1tHzHs96CAcLpV",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "HgUijUJtyHvrE6bZ",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "QxWwGUMaSgZGMfND",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "w4On9kxsfspE2HMB",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "GibXlwvk1vCvPILj",
              "name": "Gecko Grip",
              "rank": 2
            },
            {
              "id": "oFvBfDu7491JjKFs",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "9myNtblBzTeEeQHb",
              "name": "Water Walk",
              "rank": 2
            },
            {
              "id": "tSYzj60Vqx3i3dwl",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "3iPTkk9CQsPElQ3I",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "sjOnuNnQ5Eah2ZrY",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "1hnyKowEGN0M332L",
              "name": "Creation",
              "rank": 4
            },
            {
              "id": "OXdax642KXsDaKjD",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "2y6SLeCo6I9AYIHY",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "EkmFKkP4mJbmYG1a",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "XWSLxJltQLuejr2J",
              "name": "Slither",
              "rank": 5
            },
            {
              "id": "wNmcfF1so3jvRlnL",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "tmDcSUpG5ZCsUSy6",
              "name": "Disintegrate",
              "rank": 6
            },
            {
              "id": "3kFjBrFFLNgx73SC",
              "name": "Teleport",
              "rank": 6
            },
            {
              "id": "ybB4L4V99Dnr57C8",
              "name": "Wall of Force",
              "rank": 6
            },
            {
              "id": "Lo2DPYR2SoThib5R",
              "name": "Energy Aegis (Constant)",
              "rank": 7
            },
            {
              "id": "uyBTtet7rjYOvKWw",
              "name": "Project Image",
              "rank": 7
            },
            {
              "id": "zd3mZYO4fau9fU0h",
              "name": "Earthquake",
              "rank": 8
            },
            {
              "id": "p1fMrvRDL9fpw3nZ",
              "name": "Quandary",
              "rank": 8
            },
            {
              "id": "cafz73reJeQDXq0h",
              "name": "Detonate Magic",
              "rank": 9
            },
            {
              "id": "dbUtvIV3nXoZfRIJ",
              "name": "Falling Stars",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:enchanting-ritualist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ZlA2Cp5e62nE16gD",
      "slug": "enchanting-ritualist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ecb1935c3d8445fbfe88aff964ccdb97cac13304ccb2737cee8ba40d92178138",
    "translatableHash": "sha256:1daab755d012e434c1b6184164ff9408356ce96eb892a2e82567e9d81a1116df",
    "data": {
      "schemaVersion": 1,
      "name": "Enchanting Ritualist",
      "level": 18,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Possessing great stores of knowledge on mental magic and rituals, enchanting ritualists can also be solitary and capricious, tricking and transforming their visitors. The GM can change the selection of rituals this NPC knows freely, choosing any rituals of 9th rank or lower.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 40,
      "hitPoints": 320,
      "speedFeet": 25,
      "perception": {
        "modifier": 31,
        "senses": []
      },
      "saves": {
        "fortitude": 27,
        "reflex": 28,
        "will": 33
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": 6,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "arcana": 34,
        "deception": 35,
        "diplomacy": 31,
        "nature": 34,
        "occultism": 36,
        "religion": 34
      },
      "languages": [
        "common",
        "diabolic",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "mental 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "84UN5XiapxWYFGgM",
          "name": "Club",
          "bonus": 30,
          "damage": "3d6+12 bludgeoning; 2d6 mental",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "Hl8KPP24fFHWwDM5",
          "name": "Club",
          "bonus": 28,
          "damage": "3d6+12 bludgeoning; 2d6 mental",
          "traits": [
            "magical",
            "thrown-10"
          ]
        },
        {
          "id": "N4yRsS5H0pYHvp42",
          "name": "Fist",
          "bonus": 28,
          "damage": "1d4+12 bludgeoning; 2d6 mental",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "KHQqt7JX2J9bhy4E",
          "name": "Enchanting Wisps",
          "bonus": 30,
          "damage": "9d6 mental",
          "traits": [
            "magical",
            "mental"
          ]
        }
      ],
      "actions": [
        {
          "id": "Wppw8k8RCqzIQbCA",
          "name": "+2 Circumstance to Skill Checks for Rituals",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "7fskfALHJVMBtTdx",
          "name": "Aura of Contentment",
          "kind": "passive",
          "description": "30 feet. A creature that enters or starts its turn in the aura must succeed at a check (will, dc:38) save or lose the desire to do anything except rest and relax. Hostile actions taken against creatures affected by the aura end the effect. If a creature in the aura succeeds on their Will save or is the subject of a hostile action, it's temporarily immune to the aura of contentment for 24 hours. The enchanting ritualist can exempt creatures from the aura's effects.",
          "traits": [
            "aura",
            "emotion",
            "incapacitation",
            "mental",
            "occult"
          ]
        },
        {
          "id": "McEglbw10Vv8fl9M",
          "name": "Fool's Feast",
          "kind": "passive",
          "description": "Recipients of the ritualist's generosity pay dearly if the ritualist decides to turn against them. The ritualist gets a +4 circumstance bonus to attack rolls against any creature that has willingly participated in or benefited from one of their spells or rituals conducted in the last 12 hours. A creature that didn't help conduct a ritual still qualifies if it benefited in other ways, such as drinking a serving of Fortifying Brew.\nWhen the enchanting ritualist damages such a creature with a Strike, the target is affected by a 9th-rank Cursed Metamorphosis spell (DC 42). If the Strike was a critical hit, the creature gets a degree of success one worse than it rolled. Once a creature succeeds at a save against this spell, it is temporarily immune for 24 hours.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "voUeoN7SEBJBFWg0",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 34,
          "saveDc": 42,
          "spells": [
            {
              "id": "VIyRAFcKmPomCO8r",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "s9PibY2fusidxJM1",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "5cz8IWEkya1aRnnl",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "xX5bM617K3Xd7nTl",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "5p3usOpVdQn1Ns8o",
              "name": "Ill Omen",
              "rank": 1
            },
            {
              "id": "RI3lcM9iOw1H1v6C",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "TDG55kOqkiGfYut4",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "JnkASqWA34A5kN9W",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "RhWv5lo8xMmrZsab",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "dNe7Rsvq8iI2veSh",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "LxQKoKicz3bMbmuA",
              "name": "Darkvision",
              "rank": 2
            },
            {
              "id": "2HVXe3EHgFVIpn4v",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "CYnQEJriHcdvIUAC",
              "name": "Status",
              "rank": 2
            },
            {
              "id": "nxHMbLJEEnCayAuL",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "eMAVRV6S7maFNDV8",
              "name": "Hypnotize",
              "rank": 3
            },
            {
              "id": "rSX8jge5zfP9FWOx",
              "name": "Illusory Disguise",
              "rank": 3
            },
            {
              "id": "EuaMOtMfINgk3zVQ",
              "name": "Levitate",
              "rank": 3
            },
            {
              "id": "JdcFJRotPXH84jm9",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "Cu3ACcl6CIKpo2hk",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "Byiyw6wMfuW0F5qE",
              "name": "Honeyed Words",
              "rank": 4
            },
            {
              "id": "rWzy2LTaDGabnF4W",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "gwjqetfiJHOu7yvx",
              "name": "Dreaming Potential",
              "rank": 5
            },
            {
              "id": "SrSKxmQ5CqwUsUt2",
              "name": "Hallucination",
              "rank": 5
            },
            {
              "id": "dyKYFtDkfZ4yfmKU",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "4PmriViKBd9Ywd2l",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "zEPhpMgTU5ddQjdU",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "qCv4pJOFFMPT2Vrb",
              "name": "Repulsion",
              "rank": 6
            },
            {
              "id": "hVoBYFvkQNdOukmQ",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "uq3BFTbQyPixPhmV",
              "name": "Zealous Conviction",
              "rank": 6
            },
            {
              "id": "xUfYApndJduQGoz6",
              "name": "Mask of Terror",
              "rank": 7
            },
            {
              "id": "lhnYgT07mshYePtz",
              "name": "Project Image",
              "rank": 7
            },
            {
              "id": "vjyTYTPLGC3LPINM",
              "name": "Truespeech",
              "rank": 7
            },
            {
              "id": "3ALbjTnytUfICdSe",
              "name": "Wave of Despair",
              "rank": 7
            },
            {
              "id": "o2b8tfXd4tM7dqE7",
              "name": "Canticle of Everlasting Grief",
              "rank": 8
            },
            {
              "id": "KcCWSiizlX8CGLM1",
              "name": "Quandary",
              "rank": 8
            },
            {
              "id": "y6swKRdO2M9XL1pD",
              "name": "Spirit Song",
              "rank": 8
            },
            {
              "id": "J0cS89eEV2kVXsUi",
              "name": "Uncontrollable Dance",
              "rank": 8
            },
            {
              "id": "Q63d3l5C8Pg3fDjq",
              "name": "Foresight",
              "rank": 9
            },
            {
              "id": "pULuPGVzEnJrlrEd",
              "name": "Overwhelming Presence",
              "rank": 9
            },
            {
              "id": "PPHdGPO2oslqskGp",
              "name": "Synesthesia",
              "rank": 9
            },
            {
              "id": "x6a5hnxBQRkFmEMh",
              "name": "Telepathic Demand",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tempest-incarnate",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "rxBaSTbWJflJPfz5",
      "slug": "tempest-incarnate",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:46b990d6c3b43e1c1de80ad33c325c5cf54f2dd4767c0a6989589e30267111d5",
    "translatableHash": "sha256:75d1598cc2c5d5a0ee8bade3799411cc5086d1ecb8dec360ef4842c57df4b238",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest Incarnate",
      "level": 19,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "When a sorcerer's blood calls to storm and sky, they can become a frightening force to behold. When that power matures, they become living conduits of the tempest.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 40,
      "hitPoints": 360,
      "speedFeet": 25,
      "perception": {
        "modifier": 29,
        "senses": []
      },
      "saves": {
        "fortitude": 30,
        "reflex": 34,
        "will": 31
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 3,
        "int": 1,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 35,
        "intimidation": 37,
        "nature": 34,
        "stealth": 35,
        "survival": 31
      },
      "languages": [
        "common",
        "sussuran",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 15",
          "electricity 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hwUNWppXP3Fi3VvH",
          "name": "Fist",
          "bonus": 32,
          "damage": "3d4+8 bludgeoning; 3d12 electricity",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "71n7sbHjS4pBTgne",
          "name": "Wind Rider",
          "kind": "passive",
          "description": "A tempest incarnate ignores penalties and difficult terrain from strong winds. When flying, they don't need to Fly each round to avoid falling.",
          "traits": []
        },
        {
          "id": "0lg7kGLlTsVwWOmm",
          "name": "Earthbound Vulnerability",
          "kind": "passive",
          "description": "A tempest incarnate who is hit by or fails a saving throw against an effect that prevents them from flying (such as Earthbind or Felling Strike) takes 20 mental damage in addition to the usual effects.",
          "traits": []
        },
        {
          "id": "FQgyTPeSS1DpQsYQ",
          "name": "Hurricane Cloak",
          "kind": "passive",
          "description": "10 feet. A creature that enters the area must succeed at a check (athletics, dc:38) check (if on the ground) or Acrobatics check to [[/act maneuver-in-flight dc=38]] (if flying) or end its movement. A creature that critically fails is also knocked back 5 feet and falls Prone. Creatures making ranged projectile and thrown attacks that pass through the area must succeed on a check (flat, dc:5) or the attack fails. Massive projectiles, such as thrown boulders, are not affected. A tempest incarnate can activate or deactivate this ability with a single action that has the concentrate trait.",
          "traits": [
            "air",
            "aura",
            "primal"
          ]
        },
        {
          "id": "atpJ2mtaJeJ9UzZC",
          "name": "Intimidating Storm",
          "kind": "passive",
          "description": "A creature that fails a saving throw against a Cataclysm or Wrathful Storm spell cast by the tempest incarnate becomes Frightened 2 (or Frightened 3 on a critical failure). A creature can only be frightened once by each casting of wrathful storm.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "4JRDvfNjP0gOVJf5",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The tempest incarnate's movement doesn't trigger reactions.",
          "traits": []
        },
        {
          "id": "UV0ws0vPFW9jMQ3e",
          "name": "Push 10 Feet",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "R6ecvaaGseIKhuak",
          "name": "Primal Spontaneous Spells",
          "tradition": "primal",
          "category": "spontaneous",
          "attackModifier": 37,
          "saveDc": 44,
          "spells": [
            {
              "id": "a6EJeU1iSrfrW51T",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "kXKRufVJhKnIrV7K",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "RJeTf5U1E4XmaQVO",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "uXUnKMU1pHLSiud0",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "SbFe1iAL45YEOZQc",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "T1GsaUYrJQ9ciJM8",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "jU5uP4Aux6t38MaF",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "A4fkATjgOHTlrC60",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "F4sSzPkDrCxDkeOw",
              "name": "Water Breathing",
              "rank": 2
            },
            {
              "id": "Kaz6ed7oPEsp03Dc",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "45OqlCflEbRXczrY",
              "name": "Wall of Wind",
              "rank": 3
            },
            {
              "id": "cBEbNakN1WlpcSkC",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "OMwmcuYEHCVgaQuE",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "p8AS0YnihMAr3FHH",
              "name": "Control Water",
              "rank": 5
            },
            {
              "id": "mVXu3k6mjBgwGgED",
              "name": "Environmental Endurance",
              "rank": 5
            },
            {
              "id": "w6fVN1TFIXCck0E1",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "ykHPUC4BafBsTI6y",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "E02kn41ksgKm1sIX",
              "name": "Fly",
              "rank": 7
            },
            {
              "id": "CIXx2TFcsvpADAe2",
              "name": "Unfettered Pack",
              "rank": 7
            },
            {
              "id": "4ny6ho3cb89KIbJj",
              "name": "Arctic Rift",
              "rank": 8
            },
            {
              "id": "t26GtfUSoxNAPng0",
              "name": "Chain Lightning",
              "rank": 8
            },
            {
              "id": "NaPWqteJBUrbv73Q",
              "name": "Detonate Magic (Items That Grant Flight Only)",
              "rank": 9
            },
            {
              "id": "mhLHVYO5GDqg9MyJ",
              "name": "Wrathful Storm",
              "rank": 9
            },
            {
              "id": "xMyNWVcAESW6oajT",
              "name": "Cataclysm",
              "rank": 10
            }
          ]
        }
      ]
    }
  }
]
