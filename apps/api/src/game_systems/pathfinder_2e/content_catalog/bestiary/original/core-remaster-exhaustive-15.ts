import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_15_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:wood-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "LVLf8bfqqLkM56tj",
      "slug": "wood-wisp",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6bf54943f4940131a08de937be44ba93a4797edf0f8b38fad961ef728b64f867",
    "translatableHash": "sha256:f41a3d7bc7a32655cb0e7f6be953a9cd712c5583bf99fa7523c84b24cac0fd65",
    "data": {
      "schemaVersion": 1,
      "name": "Wood Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "Like other wisps, wood wisps roam their plane and attune to other wisps, wandering with them in symphonies. Because of their willingness to bond, wood wisps appear outside their home plane more than other wood elementals, though they're still relatively rare compared to other wisps.\nWood wisps resemble coconuts trailed by thick nests of branches that cover and conceal even deeper webs of thorny vines. They are, unfortunately, both unaware of the pain these thorns can cause fleshy creatures and very physically affectionate in their eagerness to offer assistance.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 0,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 2,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "stealth": 6
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 2",
          "fire 2"
        ]
      },
      "attacks": [
        {
          "id": "zfCt8fgeHWRkMoaN",
          "name": "Thorny Vine",
          "bonus": 5,
          "damage": "1 piercing; 1d4 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "9gAaXXK7fWFvAfU8",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates itself in a small elemental explosion of leaves and pollen. This gives temporary Hit Points equal to half the wisp's current HP to all allies within 30 feet that have benefited from the wisp's resonance aura in the past hour. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed and can be restored only by a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect.",
          "traits": [
            "plant"
          ]
        },
        {
          "id": "Y9gukafwaFEAEqG0",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait. A creature in the area gains a +1 status bonus to attack and damage rolls for effects with the plant or wood trait; a creature with the elemental trait and either plant trait or wood trait gains this bonus to all attack and damage rolls. For wood wisps, this bonus also applies to nonmagical wooden weapons, such as staves and clubs.",
          "traits": [
            "aura",
            "plant",
            "wood"
          ]
        },
        {
          "id": "cM7y0IGI7NQFI9f3",
          "name": "In Concert",
          "kind": "passive",
          "description": "When a wood wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:metal-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Vtx0UBhy5aUu3UMO",
      "slug": "metal-wisp",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cb2230fbc0afceb9ff6085c834d6f9273c2e978bfadf6f433a9a06e6085de142",
    "translatableHash": "sha256:997e57fbe80d9f5442dbb276116894af457e90ac76bf482501bb12c063f3366d",
    "data": {
      "schemaVersion": 1,
      "name": "Metal Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "A metal wisp is a roiling sphere of rust particles and sharp metal fragments, all furiously orbiting a liquid metal core that resembles the skull of a mortal creature—usually a humanoid, but animal and even more fantastical skulls are not uncommon. They don't form attachments as easily as wisps from other elemental planes, which tend to view metal wisps as too morose, although they retain a certain curiosity since their return from the planar severance.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 0,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 3,
        "will": 6
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
        "athletics": 6
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "PAEwU9yb4BmxIW6g",
          "name": "Tendril",
          "bonus": 6,
          "damage": "1 bleed; 1d4 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "gNkFbMTo6HFEtK7X",
          "name": "Rust Vision",
          "kind": "passive",
          "description": "A metal wisp ignores the concealed condition from rust clouds.",
          "traits": []
        },
        {
          "id": "LtOf36B95joBGTUi",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates itself in a small elemental explosion. Allies within 30 feet that have benefited from the wisp's resonance in the last hour gain temporary Hit Points equal to half the wisp's current Hit Points. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed, and it can be restored only by a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect.",
          "traits": [
            "plant"
          ]
        },
        {
          "id": "6F6sJo2RWKuk5bi3",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait. Creatures in the area gain a +1 status bonus to attack and damage rolls made with metal weapons or effects with the metal trait; a creature with the elemental and metal traits gains this bonus to all attack and damage rolls.",
          "traits": [
            "aura",
            "metal"
          ]
        },
        {
          "id": "OTjwC82rdVc4kOXH",
          "name": "Rust Cloud",
          "kind": "passive",
          "description": "A metal wisp is constantly surrounded by a cloud of rust flakes that cause it to be Concealed from creatures more than 5 feet away from it.",
          "traits": []
        },
        {
          "id": "G1BSTHA0Ju7tb4dF",
          "name": "In Concert",
          "kind": "passive",
          "description": "When a metal wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:metal-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "5Seti8VsPjgd8f6i",
      "slug": "metal-scamp",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d7e5e5a2f8606ca492cc24664d3c9efd0f932b37c3287f5c0d25f0f355cc2b68",
    "translatableHash": "sha256:c6cee94e5bb6f55466500c549cb1345d8636db9e2cc8248c936eb9f29370c5cd",
    "data": {
      "schemaVersion": 1,
      "name": "Metal Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "The capricious and destructive metal scamps are self-appointed forces of entropy, taking great pleasure in indiscriminately wrecking everything around them, sometimes even to their own detriment. Metal scamps have a severe appearance, with pointed facial features and angular limbs, and their skin can be the color of any metal, often heavily oxidized as if by years of exposure to the elements.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 2,
        "int": -2,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "stealth": 5
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GUHQm1FNEQq5EVOu",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d6+2 slashing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "dN4ctTzwBUROdBFG",
          "name": "Fast Healing 2 (While Touching Metal)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "rzwY2cdJOfsVqX2R",
          "name": "Breathe Shrapnel",
          "kind": "action",
          "description": "The metal scamp breathes a 15-foot cone of jagged metal flakes that deals (2d4)[slashing,(1d4)[bleed]|options:area-damage] damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save).\nThe metal scamp can't Breathe Shrapnel again for [[/gmr 1d4 #Recharge Breathe Shrapnel]].",
          "traits": [
            "arcane",
            "metal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "YNLBmAdnUXyaMfMr",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "wrewXapaojBDeXyg",
              "name": "Magnetic Attraction",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:vegetable-lamb",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "7C6sSVh7jipvHKbV",
      "slug": "vegetable-lamb",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:987bf0b545d20ac00ea9be3b951a7e4f3b39bea1b94c5430cc3cdf971af97f53",
    "translatableHash": "sha256:51808b029450332a6354ca5e66f5e7f372df960a41b35fb361e74990520691a5",
    "data": {
      "schemaVersion": 1,
      "name": "Vegetable Lamb",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "Vegetable lambs are gaining popularity as the first elemental to be summoned by spellcasters in training, as they're docile until provoked and easy to control. Casters must take care, however, to not let them germinate in the Universe; they're a highly invasive species that can devour an entire forest within a decade.\nThe healing and nourishing food that grows from vegetable lambs is appealing for adventurers and sedentary magical scholars alike. The taste is similar to the plants of the same kind that grow on Golarion, but not entirely. Many have noted that there's a slight similarity to meat—a bit of umami one wouldn't find in an ordinary flower.",
      "armorClass": 14,
      "hitPoints": 28,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": -4,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "athletics": 5,
        "nature": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 3",
          "slashing 2"
        ]
      },
      "attacks": [
        {
          "id": "8yXRzLvC6wlIOXL3",
          "name": "Headbutt",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        },
        {
          "id": "EI7wF763adZJK468",
          "name": "Hoof",
          "bonus": 6,
          "damage": "1d6 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Mg5YZd02GhKleviZ",
          "name": "Nature's Bounty",
          "kind": "passive",
          "description": "Each day, a vegetable lamb grows [[/r 1d4 #Edible Flowers]] edible flowers (such as artichoke, broccoli, or dandelion) among the green cotton covering its body. These vegetables can be picked without hurting the lamb. A living creature can eat the vegetable with an Interact action to regain (1d6+4)[healing] Hit Points.",
          "traits": [
            "healing",
            "plant",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "Pzs0vIXAKc0xf9C3",
          "name": "Cottonseed Burst",
          "kind": "action",
          "description": "The vegetable lamb releases a cloud of cottony green pollen in a 10-foot burst centered on itself. All creatures caught in the burst that need to breathe, apart from the lamb, must succeed at a check (fortitude, dc:15) save or be Slowed 1 by coughing (Slowed 2 on a critical failure).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:ardande-gardener",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "7zKCt0OyooqW9UkL",
      "slug": "ardande-gardener",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:752b7cdd0404f42a3701ed492d24877636948368157b7dc77e86569278f9a3b4",
    "translatableHash": "sha256:33e46bfe67d77739e8452df9b8012616b2e3193e7078d633a40d21a02937cd89",
    "data": {
      "schemaVersion": 1,
      "name": "Ardande Gardener",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "ardande",
        "human",
        "humanoid"
      ],
      "description": "Ardandes are geniekin whose elemental birthright ties them to the Plane of Wood. Their elemental connection can take many different forms, all expressions of the different types and permutations of elemental wood. They might embody the life and vibrancy of a seedling, full of potential and ready to grow. Or, they could be strong and flexible, like the branches and roots of ancient trees, interconnected and all growing together. They could also possess power over death and decay, like decomposing logs ready to fertilize and feed the next generation.\nCommon on the Plane of Wood, uncommon in the First World, and only on the cusp of a resurgence into the Universe, the ardandes often feel misplaced in the multiverse, born into the wrong place or the wrong time. Many spend their lives searching the planes for answers about themselves and their heritage.\nArdandes are found in all major cities and civilizations on the Plane of Wood, though most live in Nodollin, the Glowing Infinity, a metropolis controlled by the powerful kizidhars. Some ardandes say life in Nodollin is filled with infantilization and belittlement from the kizidhars, the wood genies who rule the land and much of the plane. The kizidhars largely view ardandes as genies like them, but a lesser form of genie that ranks below kizidhar commoners in the same way they are lesser to the shuyookhs. Though a few ardandes rebel against this social order, the weight of culture tells them hierarchies are natural to the element of wood, and they should accept their place even if they chafe.\nMany planar ardandes moved to Shodokar when the new city was founded, hoping the influx of portals leading out of the Plane of Wood would let them visit the rest of the multiverse and learn about their lost mortal heritage. They delight in meeting visitors and showing off the beauty and wonders of their home plane. Some have even moved to the Universe, and they make invaluable mentors for the new ardandes only just discovering their elemental potential across Golarion.",
      "armorClass": 16,
      "hitPoints": 17,
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
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "athletics": 3,
        "crafting": 6,
        "diplomacy": 3,
        "nature": 7,
        "stealth": 6
      },
      "languages": [
        "common",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "w7EuUyubgdMkrfeY",
          "name": "Sickle",
          "bonus": 6,
          "damage": "1d4 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "VdVyC7QLtg20VXhs",
          "name": "Shortbow",
          "bonus": 8,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "NPm9R0Ge5z57agoB",
          "name": "Plant Empathy",
          "kind": "passive",
          "description": "The ardande gardener can use Diplomacy to [[/act make-an-impression]] and make very simple [[/act request]] of plants.",
          "traits": []
        },
        {
          "id": "U5Vf0wWzTCkI8sGK",
          "name": "Decompose",
          "kind": "action",
          "description": "Frequency once per day\nEffect Void energy seeps out of the ardande gardener, decaying everything within a 5-foot emanation and causing plants and foliage to age and decompose. Natural difficult terrain is destroyed, and creatures in the area with the plant or wood trait take 1d6 void damage (check (fortitude, dc:16, basic, options:area-effect)).",
          "traits": [
            "primal",
            "void"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "0PGPFNmDJ3X9yX0N",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "unCyoXDZLTQDjuTD",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "LqkABiONki7bJDq1",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "O1h12UiSkk9HXezn",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "G4kC2Ki3wb7Nl6od",
              "name": "Tailwind",
              "rank": 1
            },
            {
              "id": "bCG6uors1J57CMi9",
              "name": "Take Root",
              "rank": 1
            },
            {
              "id": "TSTB9DpWfKVxoFpM",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "gW5aIUM7M2EYHiRI",
              "name": "Timber",
              "rank": 1
            },
            {
              "id": "HRDwF3aEC8rC9ZZo",
              "name": "Wall of Shrubs",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:lava-otter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "D1WlR977uIedFwAr",
      "slug": "lava-otter",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6676543d3129e3482791e78534df3bc06439f736243d5bb814d825124645e0e3",
    "translatableHash": "sha256:ea286fc1854a16ac3dee0f97ea48b0cff024cf8f6114b240c4c3004c801311d8",
    "data": {
      "schemaVersion": 1,
      "name": "Lava Otter",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "These fiery otters frolic and hunt in the lava streams of the Planes of Fire. They're known to be highly territorial, instigating fights with rival otter families to compete for territory. Cautiously curious of strangers, entire packs have been known to descend upon anyone who attacks or event accidentally threatens a family member.\nThe ifrits of the Dominion of Flame conscript even more of the plane's fire elementals in preparation for new wars in the returned planes, even mobilizing ones that rarely travel near settlements.\nFamiliar Poaching\nMany greedy fire wizards wish to domesticate lava otters to act as their familiars, a sentiment loathed by most denizens of the Plane of Fire. While the otters' burning pelts serve as a deterrence for would-be poachers, numerous naari (fire geniekin) still take it upon themselves to patrol lava otter habitats to protect them from poaching.",
      "armorClass": 15,
      "hitPoints": 22,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": -4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 3"
        ]
      },
      "attacks": [
        {
          "id": "X96eMFn2HE3EgdR9",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d4+1 piercing; 1d4 fire",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "XOgsZao1mESzRXEO",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "jpn2DZ0KNmSb2ijE",
          "name": "Below the Crust",
          "kind": "passive",
          "description": "A lava otter can Sneak at its full Speed in lava.",
          "traits": []
        },
        {
          "id": "dhFYS8UEoqeoC1fW",
          "name": "Molten Form",
          "kind": "passive",
          "description": "Any creature that hits the lava otter with an unarmed Strike or otherwise touches it takes 1 fire damage. If a gallon or more of water touches the lava otter, or if it's affected by a water effect, its outer layer of lava hardens to a rocky shell, deactivating its molten form and imposing weakness 5 to bludgeoning damage. Molten form reactivates if the otter swims in lava for 1 minute.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "rXGwj4xzTMYeS4Un",
          "name": "Scattering Magma",
          "kind": "action",
          "description": "Requirements The otter is in molten form, and its previous action was a successful jaws Strike\nEffect The otter grips with its jaws and rapidly twists, flinging lava. The otter deals 1d4 fire damage to all creatures adjacent to it.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "2fRePV0HTRR0IzT1",
          "name": "Tight-Knit Family",
          "kind": "passive",
          "description": "A lava otter can share the same space as another lava otter, but no more than two lava otters can occupy the same space.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:wood-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "EjgbrWiEp37eIifZ",
      "slug": "wood-scamp",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:454669187079b39f825f11db2b3b46089e79a0ab628c5760be9e71b3fe1c3dd1",
    "translatableHash": "sha256:4fa150ddff39bf62d837e8cb2d92b7f46c37627cab4e79970b810bea8834bd85",
    "data": {
      "schemaVersion": 1,
      "name": "Wood Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "These moss colonies coalesce over a century into the rough facsimile of a large sloth, right down to mimicking the unique structure of the animal's fur that attracts additional fungi and pollinating insects. Unless summoned or attacked, they rarely leave the trees upon which they first formed.\nAt first glance, wood elementals might not seem to have the same destructive potential as their cousins from the Planes of Fire, Water, or Air, but don't be fooled. The woods can be a dangerous place.\nThough some resemble animals, the elemental beasts presented here are still plants, and their life cycles reflect it. Vegetable lambs grow on rooted stalks, from which they can't be removed until they've matured (or perhaps ripened), leaving them dependent on their immediate surroundings for food. Moss sloths are little more than lumps of green fluff for the first century of their existence, only gaining limited mobility once they can grow their defensive wooden claws.\nWild But Unwild\nMany wood elementals are created by kizidhars and other powerful creatures on the Plane of Wood and placed in rote roles. Populating nature preserves and sprawling estates, they can be unsure how to behave if released into the wild. They're essentially born domesticated and will likely act far differently than the wild creatures they mimic, even in natural environments. Their natural predators are few, putting the elementals at less risk, although they're still sometimes eaten by giant termites or captured by some as pets.\nA Brain By Any Other Name\nEven if Lady Shumunue taught the wood elementals' ancestors to mimic animals, a wood elemental's consciousness is contained not in a brain but in its root system. Entities like nursery crawlers, living groves, and carved beasts use this to their advantage. That an elemental's wooden body can be carved and crafted, apparently without lasting harm, implies that they might not feel pain so long as their roots remain undamaged.",
      "armorClass": 14,
      "hitPoints": 24,
      "speedFeet": 20,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 4,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 0,
        "int": -2,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "athletics": 5,
        "stealth": 7
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 3",
          "slashing 3"
        ]
      },
      "attacks": [
        {
          "id": "VMcDoO79nsaFBA6p",
          "name": "Claw",
          "bonus": 8,
          "damage": "1d6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "OkAkqlgDi1isALeF",
          "name": "Breathe Pollen",
          "kind": "action",
          "description": "The wood scamp breathes choking pollen in a 15-foot cone that deals 2d6 poison damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save; creatures who don't need to breathe are immune). The wood scamp can't Breathe Pollen again for [[/gmr 1d4 #Recharge Breathe Pollen]].",
          "traits": [
            "arcane",
            "plant"
          ]
        },
        {
          "id": "cDhKXGyP6SctggAU",
          "name": "Thorn Puncture",
          "kind": "passive",
          "description": "The wood scamp breaks off one of its thorn-like claws in the target's skin, dealing 1 persistent bleed damage until the thorn is removed, which requires an Interact action. This damage is cumulative with each thorn caught in a creature's skin.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "ONbbKBz8XLOfPTIO",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "h1USJU7DKsKOkbb7",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "LAmBJjwtSoQjupPe",
              "name": "Verdant Sprout",
              "rank": 1
            },
            {
              "id": "SZn8BegpLbsP2pGA",
              "name": "Oaken Resilience (Self Only)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:talos-gadgeteer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "g36FR0xlbMSvWqdS",
      "slug": "talos-gadgeteer",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6483378bc81d9205def12651156dba7ea6ae801e9c4183241fd68e8604fee374",
    "translatableHash": "sha256:3afdce046acec33aa66c4cb32a20098e79c8488849f097769e20d37db20ae602",
    "data": {
      "schemaVersion": 1,
      "name": "Talos Gadgeteer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "talos"
      ],
      "description": "The geniekin called taloses descend primarily from zuhra genies, metal elementals, and other denizens of the Plane of Metal. Many taloses mold their natural talent for metalwork into careers as tinkerers, miners, or smiths, although just as many leverage the luster of precious metals in a quest for fame and fortune.\nTaloses are among the most metropolitan of geniekin, often born in or drawn to cities of various sizes, especially those with advanced metalworking or technology trades. Metal often needs to be worked to find its form and function, which may explain why many taloses seem to enjoy living among people, if not necessarily socializing with them. They often find themselves stumbling into jobs somewhere along the production line of technology, whether it's mining the raw ore from the earth, working it into wires and gears, or constructing the devices themselves. Some taloses resent and reject the expectations that they fill such roles, but many embrace their fascination with tech, often going on to become expert inventors. Taloses are therefore far more likely than other geniekin to make use of clockwork technology in their communities.\nDespite having long inhabited Golarion, albeit in small numbers, taloses have only rarely been recognized as geniekin. The largest number of them, and also the largest number whose true nature is known, inhabit Tian Xia. The traditions of metal as an element have lived much longer there. Taloses often find themselves drawn to discussions and study of elemental metal the instant they hear of the concept. Historical records speak of renowned courtiers and diplomats with skin of flawless silver or bronze. In the Ivory Port of Goka, the smiths of the family-owned Dragon's Iron Forge craft their blades and firearms with magnetic techniques handed down from their zuhra sheikha ancestor.\nA talos gadgeteer is a clockwork tinkerer. When confronted, their preferred tactic is to lure opponents into traps using their lesser explosive mines before attempting to engage directly.",
      "armorClass": 17,
      "hitPoints": 17,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 3,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "crafting": 6,
        "society": 6,
        "thievery": 6
      },
      "languages": [
        "common",
        "talican"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 1"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lqKSZ6gn8QEioSce",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "unarmed",
            "versatile-s"
          ]
        },
        {
          "id": "Nqd2ymIORiPGtqVi",
          "name": "Light Hammer",
          "bonus": 6,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "Y9NB76Jmhadgv6Py",
          "name": "Light Hammer",
          "bonus": 8,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "ss3Eyjlyzbi89aSg",
          "name": "Reflective Defense",
          "kind": "reaction",
          "description": "Frequency once per round\nTrigger A creature within 30 feet targets the talos gadgeteer, and they can see the attacker\nRequirements The talos is in dim or bright light\nEffect The talos gadgeteer reflects light off their metallic skin and into the enemy's eyes; it must succeed at a check (reflex, dc:14, options:inflicts:dazzled) save or be Dazzled until the end of the talos's next turn.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "jGrxd3BiFIgWU2CJ",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 6,
          "saveDc": 14,
          "spells": [
            {
              "id": "rmsw6xzbn1IrkohV",
              "name": "Detect Metal",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:gluttonous-geode",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "ki7r3AMO0lROqzcK",
      "slug": "gluttonous-geode",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8dab0f7720e08eb8dc276f5c10eb12b1d17cbbb86aa020704a57185ceb275c4f",
    "translatableHash": "sha256:436fe0039a208e48f64a859003a3c43a6aececa40acec692e04b9796fe072446",
    "data": {
      "schemaVersion": 1,
      "name": "Gluttonous Geode",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "The vast ranks of earth elementals have been slow to respond to the return of the elemental lords and the Planes of Metal and Wood. These events have not broken the mountains, nor have they blown away the sands.\nEarthy Emotions\nEarth elementals talk even less than most elementals. They're ponderous, weighing decisions so slowly they can crush the energy from a discussion. Their foremost concern is whether a situation can be endured. Though a rare or resplendent treasure might entice an earth elemental, it's difficult to spur any sense of urgency in them without the presence of an immediate threat.",
      "armorClass": 15,
      "hitPoints": 25,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": -1,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": -3
      },
      "skills": {
        "stealth": 4,
        "survival": 6
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "VxqQpzp73MGvDF6J",
          "name": "Crystal Teeth",
          "bonus": 9,
          "damage": "1d4+4 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "jxMLm9AzV11AIvo4",
          "name": "Tremorsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "iiNeC7jyAcDS6aGh",
          "name": "Attach",
          "kind": "action",
          "description": "The geode Leaps up to 15 feet and makes a crystal teeth Strike. If it hits a creature larger than itself, it can attach to that creature. Doing so is like Grabbing the creature ([[/act escape dc=17]]), but the geode moves with that creature rather than holding it in place. The geode is Off-Guard while attached. If the geode is killed or pushed away while attached to a creature, that creature takes 1 persistent bleed damage. Escaping the attached geode or removing the geode in other ways doesn't cause bleed damage.",
          "traits": []
        },
        {
          "id": "JQEFb9KA6XUO7dyb",
          "name": "Gnaw",
          "kind": "action",
          "description": "Requirements The geode is attached to a creature\nEffect The geode deals (1d4+2)[bludgeoning] damage to the creature it's attached to (check (fortitude, dc:17, basic) save).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:dewdrop-jelly",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "NHWf9R3yN5Iil7Zh",
      "slug": "dewdrop-jelly",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7580ff396a6f5cff437b161ecfc2a16dbb90e6ec952fc9addcb9dabe93ad5410",
    "translatableHash": "sha256:ff7db807ace76f362dd4f04a6d87b832f4efbec24fe425ff2ab0845d41a54b21",
    "data": {
      "schemaVersion": 1,
      "name": "Dewdrop Jelly",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aquatic",
        "elemental",
        "water"
      ],
      "description": "Dewdrop jellies are small water elementals resembling jellyfish made of gelatinous bubbles. They typically travel in small schools, floating through the air or swimming through the endless seas of their home plane. When threatened, the jellies discorporate into a thin, vaporous mist, reconstituting into their bubble shape only after the danger has passed. Their clever elusiveness makes them hard to find, leading some to claim that dewdrop jellies are mythical flights of fancy told to entertain children.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 0,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 6,
        "stealth": 7
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "fire 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "0H0yzUXmfENhvrhR",
          "name": "Tentacle",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "CGF0WgpYcv3oqyne",
          "name": "Dissolve",
          "kind": "reaction",
          "description": "Trigger The dewdrop jelly takes damage from a hostile action\nEffect The dewdrop jelly dissolves into a fine mist. Until the start of the jelly's next turn, it can't be attacked or targeted and doesn't take up space. At the end of the round, the jelly re-forms in any open space within 25 feet of where it Dissolved.",
          "traits": []
        },
        {
          "id": "OciBdDe3waMUrQbc",
          "name": "Overflow",
          "kind": "action",
          "description": "The dewdrop jelly flattens its bell and shoots forward, Flying or Swimming twice in a straight line toward its target and attempting a tentacle Strike. On a success, the dewdrop attaches to the target's face, covering its mouth in the suspended water of its gelatinous body. If the target cannot breathe water, it begins to drown. The DC to [[/act escape dc=16]] is 16.",
          "traits": [
            "move"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:ferrous-butterfly",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Ub0UIqBOjouOePe8",
      "slug": "ferrous-butterfly",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d58655276f59f0561e2b80cfa9725e5dd7c47401678967498c609447abacdcfd",
    "translatableHash": "sha256:c4f6443e0b9ef16c3dbf2cffd24287eb56aff7aecafaf06cdbbf60113c247336",
    "data": {
      "schemaVersion": 1,
      "name": "Ferrous Butterfly",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 5,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
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
        "con": 3,
        "int": -4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HbXWwzIGe9qlYvrg",
          "name": "Wing",
          "bonus": 9,
          "damage": "1 bleed; 1d4+2 slashing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "rRGMTgMxN0CtANkU",
          "name": "A Thousand Cuts",
          "kind": "passive",
          "description": "A ferrous butterfly's knifelike wings cause terrible lacerations that continue to bleed. Any creature with persistent bleed damage from a ferrous butterfly's wing attack has weakness 2 to slashing damage until the bleeding is stopped.\nEffect: A Thousand Cuts",
          "traits": []
        },
        {
          "id": "RIciu5HI9XP7Ecbs",
          "name": "Swoop",
          "kind": "action",
          "description": "The ferrous butterfly Flies up to its Speed and makes a wing Strike at any point during that movement.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:despairing-pall",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "vM6zlGT02raJqPTu",
      "slug": "despairing-pall",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c478e77222880f870d3c4913722f8f7fa5f4436dfc885356c30c9543fe3ffe2b",
    "translatableHash": "sha256:dfc89ce34a864ec8c031ee619dedd6d835e4c4a54c207fa22f1ec482a52923ea",
    "data": {
      "schemaVersion": 1,
      "name": "Despairing Pall",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Despairing palls are small, dark clouds that float aimlessly through the Plane of Air, casting literal and emotional shadows wherever they go. Pranksters and mischievous elementalists often summon them to rain on a rival's parade.\nMany elementals that roam the Plane of Air embody the mercurial formlessness and chaos of tumultuous storms.\nTempestuous Spirits\nAir elementals are often flighty contrarians, often more concerned with bringing about change than with the specific changes they enact. Art and writing created by such elementals is exceptionally rare, as they usually destroy their projects once the challenge and excitement of completing them fades.\nInvisible Courtiers\nFormless and invisible elementals are the favored children of Hshurha, the air elementals' mother goddess. They receive favorable treatment in her realm, Verglas Precessional, where they serve as trusted advisors, emissaries to other planes, and members of her personal retinue, in addition to performing clandestine tasks the goddess wishes to keep hidden.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 0,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "intimidation": 6,
        "stealth": 8
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "gUfF3k7xdHOK3CC0",
          "name": "Hot Air",
          "bonus": 7,
          "damage": "",
          "traits": [
            "air"
          ]
        },
        {
          "id": "g65p6cCvHuBW0SEg",
          "name": "Lightning Bolt",
          "bonus": 7,
          "damage": "1d6 electricity",
          "traits": [
            "electricity"
          ]
        }
      ],
      "actions": [
        {
          "id": "ICvJbJJGEjWJOwtm",
          "name": "Duskflow",
          "kind": "reaction",
          "description": "Trigger The despairing pall is damaged by a melee Strike\nEffect Darkness billows out from the despairing pall, covering its attacker in inky shadow. The despairing pall immediately Steps up to 15 feet in any direction. If the despairing pall took the triggering damage due to a reaction it provoked by moving, it can then finish the movement. For one round, the triggering attacker is cloaked in darkness and perceives light as one step lower (bright light becomes dim light, for example), affecting its ability to sense creatures and objects accordingly.",
          "traits": [
            "darkness"
          ]
        },
        {
          "id": "CVGNwggZoO2PneUa",
          "name": "Downcast",
          "kind": "action",
          "description": "The despairing pall Flies up to its Speed, then rains gloom and despair in a 15-foot line straight down. Creatures in the area must succeed at a check (will, dc:16) save or take a –1 status penalty to attack rolls until the end of the despairing pall's next turn.\nEffect: Downcast",
          "traits": [
            "air",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:mercurial",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "BKHoKKSWvc7rQoyz",
      "slug": "mercurial",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:09ddb90d172009c52c2adc52887aa05f6f6659020d46aabb5f0626db8c0917f1",
    "translatableHash": "sha256:738aefcfbef788d0ef27f7839809e158eaa571bdece65429b4550d062ef25672",
    "data": {
      "schemaVersion": 1,
      "name": "Mercurial",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "Some of the most populous denizens of the Plane of Metal, mercurials are weird creatures of liquid metal known for changing their features, chemical compositions, and temperaments with equal frequency. Excitable, curious, and friendly, mercurials are quick to offer assistance to extraplanar beings, but their volatile personalities can make them unreliable allies.\nMetal elementals can manifest in a wide variety of different forms, from shapeless amalgams of different metals to humanoid and beast-like monstrosities.\nMetal Forms\nThough metal elementals are made almost entirely of metal, most are composed of layers of different metals in tiny fragments, as complex as a body of flesh or plant matter. Many of these metals are rusted or decayed from the natural, slow entropy of the Plane of Metal.\nMany Faces, Many Names\nAs immortal beings with comparatively short attention spans, mercurials invariably become bored with their current identities sooner or later and seek a change by adopting a new face and persona. To avoid confusion among friends and acquaintances, a mercurial's name typically consists not only of their current moniker, but a list of the last few names used, presented in chronological order as far back as the mercurial can remember.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "deception": 10,
        "diplomacy": 8
      },
      "languages": [
        "common",
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Kd7oLKd4WmSxKIpp",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d10+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "01c5flZ6OD4khWZn",
          "name": "Shuriken",
          "bonus": 10,
          "damage": "1d6+3 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "TQOFvvkbdgLIFkFV",
          "name": "Change Shape",
          "kind": "action",
          "description": "The mercurial takes on the appearance of any Small or Medium humanoid. This transformation allows for significant detail and can reproduce the features of a specific individual, but the mercurial retains a shiny, liquid-metal appearance that renders the transformation unsuitable as a disguise unless they're impersonating another mercurial. It doesn't change the mercurial's Speed or the attack and damage bonuses of their Strikes, but it does allow them to transform their limbs into metal tools or melee weapons, potentially changing the damage type dealt by their Strikes.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "fSIe6udFqMT1qsJF",
          "name": "Metallurgic Adaptation",
          "kind": "action",
          "description": "The mercurial transmutes their liquid metal body into cold iron, copper, gold, iron, silver, or steel. Their unarmed melee Strikes are made of that material until they use Metallurgic Adaptation again.",
          "traits": [
            "polymorph",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:moss-sloth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "d8801ruMQkpXLcWk",
      "slug": "moss-sloth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e489900ae8c9700ea575495c04ae08f34e3394b2bcd38d4d99b0a2049af7c9db",
    "translatableHash": "sha256:16442de26e50ae719d2c7582178713d2252cdd732fff01468aa54fab123004d2",
    "data": {
      "schemaVersion": 1,
      "name": "Moss Sloth",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "These moss colonies coalesce over a century into the rough facsimile of a large sloth, right down to mimicking the unique structure of the animal's fur that attracts additional fungi and pollinating insects. Unless summoned or attacked, they rarely leave the trees upon which they first formed.\nAt first glance, wood elementals might not seem to have the same destructive potential as their cousins from the Planes of Fire, Water, or Air, but don't be fooled. The woods can be a dangerous place.\nThough some resemble animals, the elemental beasts presented here are still plants, and their life cycles reflect it. Vegetable lambs grow on rooted stalks, from which they can't be removed until they've matured (or perhaps ripened), leaving them dependent on their immediate surroundings for food. Moss sloths are little more than lumps of green fluff for the first century of their existence, only gaining limited mobility once they can grow their defensive wooden claws.\nWild But Unwild\nMany wood elementals are created by kizidhars and other powerful creatures on the Plane of Wood and placed in rote roles. Populating nature preserves and sprawling estates, they can be unsure how to behave if released into the wild. They're essentially born domesticated and will likely act far differently than the wild creatures they mimic, even in natural environments. Their natural predators are few, putting the elementals at less risk, although they're still sometimes eaten by giant termites or captured by some as pets.\nA Brain By Any Other Name\nEven if Lady Shumunue taught the wood elementals' ancestors to mimic animals, a wood elemental's consciousness is contained not in a brain but in its root system. Entities like nursery crawlers, living groves, and carved beasts use this to their advantage. That an elemental's wooden body can be carved and crafted, apparently without lasting harm, implies that they might not feel pain so long as their roots remain undamaged.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 10,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 3,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 0,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "nature": 7,
        "survival": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "bludgeoning 5"
        ],
        "weaknesses": [
          "fire 4",
          "slashing 3"
        ]
      },
      "attacks": [
        {
          "id": "VMcDoO79nsaFBA6p",
          "name": "Wooden Claw",
          "bonus": 9,
          "damage": "1d8+2 bludgeoning",
          "traits": []
        },
        {
          "id": "cXKBKFMGqrD4qJkp",
          "name": "Fruit",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "ryWJXU3V2TvZrEVj",
          "name": "Regeneration 5 (Deactivated by Fire)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "BmPSmIDCWL2tXQF2",
          "name": "Insect Swarm",
          "kind": "passive",
          "description": "The first time each day that the moss sloth takes damage from a bludgeoning melee attack, a patch of moss collapses inward, releasing insects that swarm the attacking creature and deal 2d4 piercing damage (check (reflex, dc:15, basic) save).",
          "traits": []
        },
        {
          "id": "gJ6Z1cUqwW0mthLt",
          "name": "Hold Fast",
          "kind": "passive",
          "description": "A moss sloth can climb on ceilings and other inverted surfaces, though it treats such surfaces as difficult terrain.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:gennayn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Gqz1qtpdgAl13pCE",
      "slug": "gennayn",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5567e8cf9cfe77588271f5aa805d512ff6e3683aa78ba6ffad1652908e210dc0",
    "translatableHash": "sha256:61fe05cfe1f4072284995c0611d3756a4bc274d09104d691135cb73082e4e4dd",
    "data": {
      "schemaVersion": 1,
      "name": "Gennayn",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "genie"
      ],
      "description": "Gennayns are minor genies who often serve as emissaries and messengers for greater elemental beings. While many find purpose in this humble mission, their true calling and interest is in the arts.\nThey often appear as miniature, athletic humanoids with wisps of elemental energy continually dissipating from their bodies. These elemental energies often reflect their emotions and attuned element. Gennayns are also fond of ostentatious rings, amulets, and armbands.\nGennayns eagerly assist powerful beings who reward and treat them well, but they're just as quick to abandon those they consider boring, stingy, or abusive. Beings who destroy artwork or mistreat artists will earn their eternal wrath.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "arcana": 6,
        "diplomacy": 8,
        "nature": 6,
        "performance": 8,
        "society": 6,
        "stealth": 10
      },
      "languages": [
        "common",
        "muan",
        "petran",
        "pyric",
        "sussuran",
        "talican",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Aw65n0u4S5wL1veD",
          "name": "Elemental Fist",
          "bonus": 10,
          "damage": "2d6 bludgeoning",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "wYGShO3Tg6PQD3Qj",
          "name": "Inspiring Influence",
          "kind": "passive",
          "description": "A gennayn automatically succeeds with the Aid action supporting any Performance or Diplomacy skill check. Their Aid action automatically counts as a critical success while aiding in the creation of new art or a new performance.",
          "traits": []
        },
        {
          "id": "CkVJHzEWjrHkLFr9",
          "name": "Attuned Element",
          "kind": "passive",
          "description": "Upon waking each day, a gennayn attunes to one planar element. They gain the corresponding trait, a movement Speed, a cantrip, resistance, and an elemental damage type for their energy fist attack based on their attuned element:\n• air: fly 30 feet, resist electricity 5, electric arc, electricity damage;\n• earth: burrow 15 feet, resist bludgeoning 5, scatter scree, bludgeoning damage;\n• fire: fly 30 feet, resist fire 5, ignition, fire damage;\n• metal: burrow 15 feet, resist slashing 5, needle darts, slashing damage;\n• water: swim 20 feet, resist cold 5, frostbite, bludgeoning damage;\n• wood: climb 15 feet, resist piercing 5, tangle vine, piercing damage.\nThe attunement lasts until the gennayn attunes to a different element.",
          "traits": []
        },
        {
          "id": "MoWGhukIZdExEFOX",
          "name": "Change Shape",
          "kind": "action",
          "description": "The gennayn transforms into a Tiny elemental or animal. This doesn't affect the gennayn's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "MPbSZNAmmHYrByoA",
          "name": "Little Wish",
          "kind": "reaction",
          "description": "Trigger A creature the gennayn can see that's within 60 feet attempts a saving throw or skill check\nFrequency once per day\nEffect The gennayn reshapes reality in a small way to twist fate, allowing the creature to reroll the saving throw or skill check and take the better result.",
          "traits": [
            "fortune"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "s6NQpVpMrGGFUtYA",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "Yt7q1dpzCjmtpzuc",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "69i7yQWn5aGCaKUV",
              "name": "Electric Arc (Attuned Element)",
              "rank": 1
            },
            {
              "id": "MqwzMaOk6YnLRJav",
              "name": "Frostbite (Attuned Element)",
              "rank": 1
            },
            {
              "id": "clOUKBbE1Kq9mD8I",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "rr7ehVD5fYGbOsrZ",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "c6zD1cyYYdcSVWmv",
              "name": "Ignition (Attuned Element)",
              "rank": 1
            },
            {
              "id": "wAlaxgYvywEmErOx",
              "name": "Needle Darts (Attuned Element)",
              "rank": 1
            },
            {
              "id": "WbHlUVfHFJit2zM9",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "nYXOXnLzYBkd7YQ6",
              "name": "Scatter Scree (Attuned Element)",
              "rank": 1
            },
            {
              "id": "3eIDtgUMzKOBfYt9",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "9Xt5c64tZIItg7us",
              "name": "Tangle Vine (Attuned Element)",
              "rank": 1
            },
            {
              "id": "f7qjnfWY3sFWubKT",
              "name": "Invisibility (At Will; Self Only)",
              "rank": 2
            },
            {
              "id": "NSlJLV7E7c90qftq",
              "name": "Translate (At Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:olobigonde",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "xorqWffvwJFUFuON",
      "slug": "olobigonde",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fcdb7921d257fadb5bf3cec46c3166086e34a3801419e2e6c374e03e695bf247",
    "translatableHash": "sha256:ffb53ed3470a5161f5c64e6ba7f8d1d6207af7405e2036a2f333fbb66ae93931",
    "data": {
      "schemaVersion": 1,
      "name": "Olobigonde",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic",
        "elemental",
        "water"
      ],
      "description": "Though the Plane of Water is mostly liquid, it does contain its share of solid material, whether in the form of free-floating aquatic plants, hunks of coral, or even detritus from lost underwater cities. Flotsam and jetsam collect across the plane, and olobigondes are just one of the many creatures that have evolved to live among and consume this detritus. These flat, round fish are covered in a moss-like skin that makes them exceptionally difficult to spot as they hug the sides of flotsam, feeding off the waste that drifts into their wide, open mouths.\nWhile olobigondes are primarily detritivores, they've been known to lie in wait within a forest of kelp or against a mossy stone to ambush smaller creatures, such as water scamps or lone passing merfolk. The fish launch themselves from their hiding spot to take large bites out of their surprised prey, then grab the victim as it tries to flee. Despite their size and ungainly shape, olobigondes can move quickly in water, though their bursts of speed are usually short-lived. In addition to maintaining a firm hold on prey, olobigondes' mouths are filled with a unique toxin that weakens and decomposes living flesh. The hungry fish easily gulp down the resulting slurry.\nAncient olobigondes grow truly immense, and their outward appearance evolves. There seems to be no limit to their size. Their skin even separates into plates with deep channels where water can accumulate, giving them the appearance of an entire patch of detritus rather than one piece.\nAlchemists who travel the planes have discovered how readily an olobigonde's toxin can decompose flesh, and some have discovered ways to incorporate it into their creations. An olobigonde's corpse yields approximately 1 gp worth of raw materials when harvested with a successful check (crafting, dc:16) or Survival check (2 gp worth on a critical success). This material can be used only to craft alchemical bombs with the poison trait.",
      "armorClass": 17,
      "hitPoints": 38,
      "speedFeet": 5,
      "perception": {
        "modifier": 7,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 4,
        "int": -4,
        "wis": 1,
        "cha": -5
      },
      "skills": {
        "athletics": 10,
        "stealth": 9,
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
          "id": "lkC0X3GPZhYL78VY",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d8+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qcbZK2vKV0dCEysm",
          "name": "Camouflage",
          "kind": "passive",
          "description": "An olobigonde can [[/act hide]] in aquatic environments even if it doesn't have cover. However, there must be plants, debris, a seabed, or other objects for it to camouflage itself, not just open water.",
          "traits": []
        },
        {
          "id": "wSPsNR3klHTRAwTp",
          "name": "Ambush",
          "kind": "reaction",
          "description": "Trigger A target creature passes within 20 feet of the olobigonde's hiding place and has not detected the olobigonde\nEffect The olobigonde lunges out of its hiding place, Swims directly toward the triggering creature, and makes a jaws Strike against it. The target creature is Off-Guard to this attack.",
          "traits": []
        },
        {
          "id": "POU7FA1fIbHolyn4",
          "name": "Decomposing Toxin",
          "kind": "passive",
          "description": "A living creature struck by an olobigonde's jaws Strike must succeed at a check (fortitude, dc:15, options:inflicts:enfeebled,inflicts:persistent-damage) save or become Enfeebled 1 and take 1d6 persistent poison damage (or Enfeebled 2 with 2d6 persistent poison damage on a critical failure). The enfeebled condition ends when the persistent damage does. A creature currently affected by decomposing toxin doesn't need to save again.",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "T63kdKH5VE97D6gV",
          "name": "Reactive Grab",
          "kind": "reaction",
          "description": "Trigger A creature within the olobigonde's reach leaves a square during a move action it's using\nRequirements The olobigonde doesn't have a creature Grabbed\nEffect The olobigonde attempts to Grapple the triggering creature with its jaws. On a success, the target also takes 3 piercing damage (doubled on a critical success).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:nursery-crawler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "bzMyAFhSQ1mfTNx9",
      "slug": "nursery-crawler",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:151ac3411932c8d116ae000bc2329309a272f1b606d4c149279093bde6b97d4c",
    "translatableHash": "sha256:ef0bd4a05def668fdd749a639e81409393143f9dd1c99582e39570d6d06967ff",
    "data": {
      "schemaVersion": 1,
      "name": "Nursery Crawler",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "The vibrant elemental energy of the Plane of Wood imbues even the most rotten of fallen trees, empowering their remains to travel in search of the best locations for the next generation to put down roots. This mono-eyed, rotten stump launches seeds that begin to sprout the moment they're buried, whether in the ground or in a living creature's skin.\nAt first glance, wood elementals might not seem to have the same destructive potential as their cousins from the Planes of Fire, Water, or Air, but don't be fooled. The woods can be a dangerous place.\nThough some resemble animals, the elemental beasts presented here are still plants, and their life cycles reflect it. Vegetable lambs grow on rooted stalks, from which they can't be removed until they've matured (or perhaps ripened), leaving them dependent on their immediate surroundings for food. Moss sloths are little more than lumps of green fluff for the first century of their existence, only gaining limited mobility once they can grow their defensive wooden claws.\nWild But Unwild\nMany wood elementals are created by kizidhars and other powerful creatures on the Plane of Wood and placed in rote roles. Populating nature preserves and sprawling estates, they can be unsure how to behave if released into the wild. They're essentially born domesticated and will likely act far differently than the wild creatures they mimic, even in natural environments. Their natural predators are few, putting the elementals at less risk, although they're still sometimes eaten by giant termites or captured by some as pets.\nA Brain By Any Other Name\nEven if Lady Shumunue taught the wood elementals' ancestors to mimic animals, a wood elemental's consciousness is contained not in a brain but in its root system. Entities like nursery crawlers, living groves, and carved beasts use this to their advantage. That an elemental's wooden body can be carved and crafted, apparently without lasting harm, implies that they might not feel pain so long as their roots remain undamaged.",
      "armorClass": 18,
      "hitPoints": 48,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 4,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "deception": 5,
        "survival": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "PwoAYTwFf2RzdakE",
          "name": "Root",
          "bonus": 9,
          "damage": "1d8+4 bludgeoning",
          "traits": []
        },
        {
          "id": "7izpKuskd27DQuNj",
          "name": "Seed",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "A9V1ie3haU4BJT0l",
          "name": "Germinate",
          "kind": "passive",
          "description": "A creature hit by the nursery crawler's seed Strike must, on its turn, spend an Interact action to remove the seed; any seeds still implanted at the end of the creature's turn begin to sprout, dealing 1d6 persistent bleed damage and rendering the seeded creature Clumsy 1 and Off-Guard. Removing a seed after it's sprouted deals 1d4 piercing damage; removing it before it begins to sprout does no damage. Removed seeds that land in viable soil sprout immediately and grow into new saplings after 1 hour.",
          "traits": [
            "plant"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:cullitox",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "jKSirpKNicffmRpW",
      "slug": "cullitox",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ac0f442b00469abc315a0a72ef6d19caa3168be160553d1eea0f6f192974391e",
    "translatableHash": "sha256:f9ce0183446b6c877bd55473631f3c04ad8b5462ced62acf1fdb5a7021cde98b",
    "data": {
      "schemaVersion": 1,
      "name": "Cullitox",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "Cullitoxes dwell within deep caverns of the Plane of Earth, laden with crystals that glow under their own internal energy. A cullitox's hunger for gems will lead it to travel almost anywhere, even through planar tears. Occasionally, they even establish colonies on planes other than their own, should their newfound territory prove filled with crystals.\nA cullitox's scorpion-like body glitters with crystal. As light refracts between the facets, they concentrate and absorb it, energizing the cullitox and, some say, fueling the creature's magic.\nCullitoxes form small communities in locations where crystals are plentiful, working alongside one another to track down anything from a common quartz to precious rubies and sapphires. Scouting parties use their innate magic to communicate with each other via light and wordless sound, as well as to seek out more crystals. However, when precious stone resources grow scarce, cullitoxes become independent and territorial about their supply, taking crystals from wherever they can, even seizing them from other creatures.\nA cullitox's drive to gather crystals is akin to the drive to reproduce. As a cullitox gathers stones, it stores them within its body. Once the cullitox has enough stored material, the parent fuses its stores into a tiny replica of itself and extrudes the infant cullitox, sometimes referred to as a shardling, into the world. The process leaves the parent weakened for a short time, until it can gather enough crystal to repair its body and begin the process anew. Infant cullitoxes consume crystals in a similar way. They process the raw material over a few months to grow to adult size. Thereafter, a cullitox \"eats\" stone only to heal injuries.\nInternal Gems\nWhen a cullitox dies, its body breaks into fragments of crystal. Some of these pieces are valuable, but potentially more lucrative are the gems the cullitox has stored inside its body to produce offspring. It takes semiprecious and precious stones worth 500 gp to produce an infant cullitox, though most slain cullitoxes have only a fraction of this amount stored. Once the stones become a new cullitox, they transform into the crystal of the infant's body, no longer the treasured material they once were.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "scent-imprecise-60",
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 9,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": -2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 9,
        "stealth": 9
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IIxSx5bK889hMylB",
          "name": "Crystal Stinger",
          "bonus": 10,
          "damage": "1d6+5 piercing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "m5SyO5BTkUl3RXA3",
          "name": "Tail Spike",
          "bonus": 10,
          "damage": "1d6+5 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "sCB4c0FpXN7ZgEHE",
          "name": "Crystal Scent",
          "kind": "passive",
          "description": "A cullitox can sense crystals or gems within 60 feet as if using the scent ability.",
          "traits": []
        },
        {
          "id": "agAnzTLuLv3ofRDa",
          "name": "Rock Stride",
          "kind": "action",
          "description": "The cullitox phases into adjacent rock that is large enough to accommodate it. Then, the cullitox senses similar or larger rocks within 60 feet and emerges from one. The cullitox can't use this ability again for 1 minute.",
          "traits": [
            "teleportation"
          ]
        },
        {
          "id": "zdHbmBbUYAU1VVSI",
          "name": "Sink into Stone",
          "kind": "passive",
          "description": "The spikes fired from a cullitox's tail phase into stone, pinning enemies in place. Enemies standing on or adjacent to a stone surface who are struck by a critical hit on a tail spike Strike are Immobilized. The DC to [[/act escape dc=17]] is 17.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "H5n2pGb8XGROkdKD",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "NuEsnpJO7amMgQ2E",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "6ARtbz0g1ps7PGNJ",
              "name": "Figment (Chiming, Clinking, or Rattling Sounds Only)",
              "rank": 1
            },
            {
              "id": "DED7PuFFZ3eby05e",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "PjnuKxqyiRhN3ecP",
              "name": "Telekinetic Hand",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:kinzaruk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "OX25euLqeBR07Ul7",
      "slug": "kinzaruk",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:988a753aaad2bf521a82f108b57c3373c438227ea893a5144e682deab2f8ab4b",
    "translatableHash": "sha256:a290bcb51f78f4bd219755bb88ca6323e05c003e533e1a784cb33b0ec857c8c2",
    "data": {
      "schemaVersion": 1,
      "name": "Kinzaruk",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "In its natural state, the kinzaruk resembles a paper-thin, perfectly square sheet of lightweight silvery-white metal, approximately 15 feet across. It's almost never encountered this form, however, being far better known for its ability to intricately fold its body thousands of times in an instant to reconfigure itself into a varied assortment of deadly animal-like shapes.\nMetal elementals can manifest in a wide variety of different forms, from shapeless amalgams of different metals to humanoid and beast-like monstrosities.\nMetal Forms\nThough metal elementals are made almost entirely of metal, most are composed of layers of different metals in tiny fragments, as complex as a body of flesh or plant matter. Many of these metals are rusted or decayed from the natural, slow entropy of the Plane of Metal.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 10,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": -4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "stealth": 9,
        "survival": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "bSCuq4rzdlNOmZHR",
          "name": "Razor's Edge",
          "bonus": 11,
          "damage": "1d10+3 slashing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "xVx1hUc9VnobkCUj",
          "name": "Fold Form",
          "kind": "action",
          "description": "The kinzaruk swiftly unfolds and refolds its body into a new shape chosen from the options of Animal Form. This grants it the movement Speeds and Strikes of the chosen form, but none of the other benefits. Its attack bonus is unchanged, and its damage bonus is +3. The kinzaruk can return to its natural form by taking this action again, and automatically returns if it falls Unconscious.\nEffect: Fold Form",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:lomori-sprout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "XvFyRUv2BxgjKm77",
      "slug": "lomori-sprout",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7628add107eef50ee57e6095147961dff12b692dfccfa5cb0bb080d26c13e965",
    "translatableHash": "sha256:dd1163b66256f95dbbdd958b24290cf4785e3e3fc4ac2403ccd4d3854950b142",
    "data": {
      "schemaVersion": 1,
      "name": "Lomori Sprout",
      "level": 3,
      "rarity": "rare",
      "size": "tiny",
      "traits": [
        "aeon",
        "plant",
        "wood"
      ],
      "description": "Lomori sprouts are passionate gardeners who closely tend new growth on the Plane of Wood. Incredibly industrious, they lovingly guide young plants into elaborate constructions and patterns, forming tree tunnels, spiraling fields of flowers, complex hedge mazes, towering tapestries of interwoven bamboo, and other dizzying creations. Lomori sprouts meticulously collect the trimmings, seeds, and debris from the flora in their care. They plant the seeds to yield new growth and frenetically weave the rest into nests, spheres, and other simple objects. They're shy and skittish, often losing themselves in their labors, but they're always friendly to those who treat their gardens with respect.\nLomoris are aeon spirits dispatched to the elemental planes long ago to pursue the act of creation. While most of the aeons dispatched to the other elemental planes performed their duties and rejoined their aeon brethren, those on the Plane of Wood lingered, becoming trapped as the plane receded. Over the ages, they adapted and evolved into lomoris. Today, lomoris have more in common with the other denizens of the Plane of Wood than they do with their aeon ancestors.\nLomori sprouts, much like conrasus, have a central black sphere, known as a lomori's core, that functions as their primary body and consciousness. Where conrasus forge a sturdy exoskeleton, lomoris cultivate a tall mound of prairie grass surrounding their core, which easily grows to be 2–3 times the core's height. The lomori shapes the mound as it grows, creating protective layers to guard their core and forming other useful appendages. Most lomoris have six intricately detailed, crab-like legs of wood that emerge from the lower half of their core, allowing them to rapidly scuttle across the ground or climb trees.",
      "armorClass": 17,
      "hitPoints": 50,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 7,
        "crafting": 10,
        "nature": 10,
        "stealth": 11
      },
      "languages": [
        "muan",
        "rasu",
        "utopian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "fire 3",
          "void 3"
        ]
      },
      "attacks": [
        {
          "id": "SjCXTt491YdqeOtY",
          "name": "Grass Lash",
          "bonus": 9,
          "damage": "2d6 slashing",
          "traits": [
            "disarm",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "iacJofR7IQvQ1dDs",
          "name": "Scurry",
          "kind": "reaction",
          "description": "Trigger A creature the lomori sprout can observe attacks the sprout;\nEffect After the attack resolves, the lomori sprout can Stride up to their speed. This movement doesn't trigger reactions from the triggering creature.",
          "traits": []
        },
        {
          "id": "VaKgEpMtZhsqWke7",
          "name": "Greater Forest Passage",
          "kind": "passive",
          "description": "The lomori sprout ignores difficult terrain and greater difficult terrain from plants and fungi.",
          "traits": []
        },
        {
          "id": "YR4ouZCnyiBeb5hO",
          "name": "Take Root",
          "kind": "action",
          "description": "Requirements The lomori sprout is on the ground\nEffect The lomori sprout plants themself in the ground. Grasping roots erupt from the ground in a 5-foot burst within 60 feet of the lomori sprout, dealing 4d4 bludgeoning damage (check (reflex, dc:20, basic, options:area-effect,inflicts:immobilized) save) to creatures in the area; on a failed save, a creature gains the Immobilized condition until it [[/act escape dc=20]]. The roots also make the area difficult terrain for 1 minute, after which they decompose into fertile mulch; the area is no longer difficult terrain, and any creatures still immobilized by the roots automatically Escape.",
          "traits": []
        },
        {
          "id": "vPIM6rHHXuiolkCw",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:quickiron-plasm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "d0InnF6QVgDIG4j3",
      "slug": "quickiron-plasm",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2ed85d6409a4cebbe62799d94e4e5210f6b9cfcdf1c6acecb42ea9bc5e5fa1c3",
    "translatableHash": "sha256:93a58f1d3c87f1f4ed69cb498bb967534a37ae1e424eb045003e4c87739a33d8",
    "data": {
      "schemaVersion": 1,
      "name": "Quickiron Plasm",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "Looking much like an ooze, a quickiron plasm is a mass of the rust-red liquid skymetal known as djezet, prized in the Universe for its magic-enhancing properties. Quickiron plasms feed on the residual energies left behind by large expenditures of magical power, which they can detect from miles away.\nMetal elementals can manifest in a wide variety of different forms, from shapeless amalgams of different metals to humanoid and beast-like monstrosities.\nMetal Forms\nThough metal elementals are made almost entirely of metal, most are composed of layers of different metals in tiny fragments, as complex as a body of flesh or plant matter. Many of these metals are rusted or decayed from the natural, slow entropy of the Plane of Metal.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 15,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 5,
        "int": -4,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 12,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "critical-hits",
          "precision"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "u1F0pJtp3aGVjSR5",
          "name": "Pseudopod",
          "bonus": 12,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "8Yz6PtEuC16fn4ry",
          "name": "Magic Scent",
          "kind": "passive",
          "description": "The quickiron plasm can sense magical auras from up to 1 mile away as an imprecise sense.",
          "traits": []
        },
        {
          "id": "Nfg8TdUUCwXDGQPV",
          "name": "Djezet Extraction",
          "kind": "passive",
          "description": "When a quickiron plasm dies, most of the djezet making up its body becomes inert and useless. However, a skilled alchemist can sometimes extract trace amounts of the valuable skymetal from its remains. This is a 10-minute process that requires the Alchemical Crafting feat, a proficiency rank of expert or better in Crafting, and a successful check (crafting, dc:20) check. A successful attempt produces a single djezet dose that remains potent for 1 hour before breaking down into a foul-smelling goo. The item has no value if sold due to its temporary nature.",
          "traits": []
        },
        {
          "id": "jQbP3DAaDIkvFKsk",
          "name": "Biomagical Feedback",
          "kind": "passive",
          "description": "The quickiron plasm's conductive properties are dangerous to those in physical contact with it. When a creature Grabbed by a quickiron plasm Casts a Spell, that creature takes 5 force damage per rank of the spell.",
          "traits": []
        },
        {
          "id": "CAHGfrNJcJES04xD",
          "name": "Consume Magic",
          "kind": "reaction",
          "description": "Trigger The quickiron plasm succeeds at a saving throw against a spell\nEffect The quickiron plasm consumes energy from the spell, regaining 5 Hit Points per rank of the spell.",
          "traits": []
        },
        {
          "id": "YK5Qh5RzF4sOD0xt",
          "name": "Constrict",
          "kind": "action",
          "description": "2d6 bludgeoning damage, check (fortitude, dc:22, basic)",
          "traits": []
        },
        {
          "id": "Vixlw5oLmEQJjups",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:munsahir-gatecrasher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "h6oWKFSqpXHnOg5h",
      "slug": "munsahir-gatecrasher",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:77e1a2364225e2ec44267c94e80300c453656efce2ad703ef31409c131add9c0",
    "translatableHash": "sha256:254f6c44ad9384af898a05bea9507c910cfddd8b5541398e4555bceadae8df26",
    "data": {
      "schemaVersion": 1,
      "name": "Munsahir Gatecrasher",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire",
        "humanoid"
      ],
      "description": "Typically members of the nobility, gatecrashers wear advanced power armor.\nMunsahirs build militaristic, traditional societies.\nMunsahir Hierarchy\nThe three strata of munsahir society can be observed in the kilts worn by all members. Nobles, the unimpeachable rulers, wear elaborate brass kilts. In the middle of society are businesspeople and traders bedecked in bronze. Raw copper adorns those in the working class, who do most of the building and hard labor for munsahir society. Officially speaking, there is no class mobility; horrible crimes might cause a brass noble to be sent to prison but can't cause them to lose their station.",
      "armorClass": 22,
      "hitPoints": 65,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 6,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 4,
        "int": 4,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 10,
        "crafting": 12
      },
      "languages": [
        "common",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "LkNDJT5FPLvWx2HF",
          "name": "Hammer Gauntlet",
          "bonus": 12,
          "damage": "1d12+6 bludgeoning",
          "traits": [
            "free-hand",
            "shove"
          ]
        },
        {
          "id": "1uDDZwQOsH9tBUsO",
          "name": "Flame Jet",
          "bonus": 12,
          "damage": "1d6 fire; 1d6 fire",
          "traits": [
            "brutal",
            "fire"
          ]
        }
      ],
      "actions": [
        {
          "id": "NCKi4E87WbMTQF29",
          "name": "Heat of the Forge",
          "kind": "passive",
          "description": "10 feet. An munsahir's skin radiates heat like a forge's fire. A creature that starts its turn in the area must succeed at a check (fortitude, dc:19, options:area-effect,inflicts:fatigued) save or become Fatigued while it remains in the area. Creatures immune to environmental heat effects or with any fire resistance are immune.",
          "traits": [
            "aura",
            "fire"
          ]
        },
        {
          "id": "fEeaznyEsmyRdWGo",
          "name": "Self-Destruct",
          "kind": "passive",
          "description": "When the munsahir is reduced to 0 HP, their armor explodes at the start of their next turn, dealing 5d6 fire damage in a 10-foot emanation (check (reflex, dc:19, basic, options:area-effect)).",
          "traits": []
        },
        {
          "id": "zUDsQayKIEHHh3Nz",
          "name": "Blazing Rush",
          "kind": "action",
          "description": "The gatecrasher Strides up to double their Speed in a straight line. They can pass through enemy spaces and make a hammer gauntlet Strike against each creature they move through. Blazing Rush can't be used again for [[/gmr 1d4 #Recharge Blazing Rush]].",
          "traits": []
        },
        {
          "id": "3eljJtZ3IPeQd7kL",
          "name": "Burning Touch",
          "kind": "passive",
          "description": "The munsahir gatecrasher's Strikes deal an extra 1d6 fire damage (included above). When the gatecrasher successfully performs a Grapple or Shove action, they also deal 1d6 fire damage to their target.",
          "traits": [
            "fire",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:whipping-willow",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "oT99a9W6HcU0WsU2",
      "slug": "whipping-willow",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ab3779aca1b18a4d7cd80372a3e1fb040ba048a8774af431a35e66323e2843e5",
    "translatableHash": "sha256:3f6a33cde4152677429f4575b71df894009474dea7fd22640ae6c37314d035b7",
    "data": {
      "schemaVersion": 1,
      "name": "Whipping Willow",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "These tall, thin figures are too treelike to be dryads, yet too humanoid to be arboreals. Their blank faces and thin trunks bear only the slightest suggestion of humanoid features. Rather than hands, their long, branchlike arms eventually split into equally proportioned branchlike digits, which the willows use both to fight and swing through their native plane.",
      "armorClass": 20,
      "hitPoints": 75,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 8,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 12
      },
      "languages": [
        "arboreal",
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 5",
          "axe-vulnerability 5"
        ]
      },
      "attacks": [
        {
          "id": "X9GXARvlUUQBbRDI",
          "name": "Whip",
          "bonus": 11,
          "damage": "2d8+5 bludgeoning",
          "traits": [
            "finesse",
            "reach-15",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "OavZny2v1jk3MIOz",
          "name": "Grounded",
          "kind": "passive",
          "description": "When saving against an effect attempting to knock them Prone, a whipping willow achieves one degree of success better than what they rolled. Additionally, the willow doesn't fall prone on a critical failure to Trip an opponent.",
          "traits": []
        },
        {
          "id": "YOrikeXlfPPi3DGI",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d4+5)[bludgeoning], check (fortitude, dc:21, basic)",
          "traits": []
        },
        {
          "id": "KDMAI3S3OJ7qSGyS",
          "name": "Strangling Vines",
          "kind": "passive",
          "description": "When a whipping willow hits a creature with their whip Strike, they can choose to Grab and begin strangling the creature. The target is suffocating and can't speak as long as it's strangled.",
          "traits": []
        },
        {
          "id": "fjeItrluaY1TLYzo",
          "name": "Unseating Sweep",
          "kind": "action",
          "description": "The whipping willow attempts to Trip all creatures within a 15-foot cone, making a single check (athletics, traits:action:trip) check against all targets' Reflex DCs.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:comozant-wyrd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "7qRWMhYwrTHv58VG",
      "slug": "comozant-wyrd",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a5ce8d8e2cac3dcfaf987c4b9d573748ab2630db33c938816efbac98c2785e50",
    "translatableHash": "sha256:12e55944e74c4c1739141de72d7f32b80d61625ffda05c1306a2d70d9a2d213c",
    "data": {
      "schemaVersion": 1,
      "name": "Comozant Wyrd",
      "level": 5,
      "rarity": "common",
      "size": "small",
      "traits": [
        "air",
        "elemental",
        "incorporeal"
      ],
      "description": "Buzzing, crackling plasma makes up a comozant wyrd, electrically charged waves of greens, blues, and purples cascading in heatless flame. Given a mind and a semblance of a face, comozant wyrds need a surface from which they can crackle and writhe. Once secure, they seek out companionship from anyone nearby. In the Universe, they can be found in many places: lashing themselves to sailing ships, dancing across the buildings, or anchoring to the stones of a mountain range. In the vast spans of the Plane of Air, however, comozant wyrds often come to feel extremely lonely. A lucky few become pets for jaathooms living in the plane's cities, but many wait on isolated floating islands for an airship they can attach to or, more tragically, strive vainly to reach a distant shore before sputtering out.\nComozant Communication\nCreatures of emotion and instinct, comozant wyrds use simple images and concepts to convey deep and layered meanings. They're quite insightful, able to leap to solid conclusions as rapidly as they leap across solid surfaces. Most who \"converse\" with a comozant wyrd find the process enlightening, but have little desire make it a regular experience.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 15,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": -5,
        "dex": 4,
        "con": 0,
        "int": -1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "diplomacy": 11,
        "nature": 12
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "electricity",
          "paralyzed",
          "poison",
          "precision"
        ],
        "resistances": [
          "all-damage 5 except force, ghost-touch"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LBobsUSHZxDUZ0Sp",
          "name": "Lightning Lash",
          "bonus": 15,
          "damage": "2d12 electricity",
          "traits": [
            "electricity"
          ]
        }
      ],
      "actions": [
        {
          "id": "G9K0BU8nsVITkzg3",
          "name": "Plasmatic Form",
          "kind": "passive",
          "description": "Unlike other incorporeal creatures, a comozant wyrd can't move into or through solid objects. If a comozant wyrd isn't adjacent to a solid object or surface of its size or larger at the end of its turn, it loses 10 untyped damage HP. This HP loss cannot be mitigated or avoided in any way.",
          "traits": []
        },
        {
          "id": "En7JGtt0WYfuVuza",
          "name": "Illuminating Flames",
          "kind": "passive",
          "description": "30 feet. The comozant wyrd sheds bright light in the emanation and dim light for another 30 feet. Heatless flames similar to the wyrd's own surround any creature in the emanation. A visible creature can't become Concealed while in the emanation, and an Invisible creature becomes concealed rather than undetected. The wyrd can communicate empathically with any non-mindless creature affected by illuminating flames, even if they don't share a language.",
          "traits": [
            "aura",
            "electricity",
            "light",
            "primal"
          ]
        },
        {
          "id": "1YsjXUEOR2ogpqiX",
          "name": "Leap the Gap",
          "kind": "action",
          "description": "Requirements The comozant wyrd is adjacent to a solid object or surface of its size or larger\nEffect The wyrd Flies up to its Speed in a straight line, ending its movement adjacent to a different solid object or surface of its size or larger; this movement doesn't trigger reactions. The wyrd can move through other creatures during this movement, and all creatures it moves through take 2d12 electricity damage with a check (reflex, dc:22, basic) save.",
          "traits": []
        },
        {
          "id": "CzL1bEGBlo75lc8s",
          "name": "Wyrd Wisdom",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The comozant wyrd is communicating empathically with another creature through illuminating flames\nEffect The comozant wyrd's odd means of communication brings strange insight. One creature the wyrd is empathically conversing with gains the benefits of an augury spell, though only about this conversation topic, rather than any topic of the creature's choice.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:rakkatak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "m2WdV4XJ3r70mnJX",
      "slug": "rakkatak",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d27dbab7141e72b743b1fc1acd5d977c3d8914b83439dab5afb9d6cbc2094c1a",
    "translatableHash": "sha256:ef60e39c3488f7148fcfef791819ed04be476449a1ff8294cfcc3eaca755d0e6",
    "data": {
      "schemaVersion": 1,
      "name": "Rakkatak",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "Pulsating organs and tumors squirm loosely within a sac of skin, all forming the misshapen lump that is the body of a rakkatak. The predator's eyes scan the area, shimmering in the smoke like glowing dots. Wriggling insectoid legs—varying in number from one rakkatak to another—hang from its bulbous body. These limbs flail chaotically as a rakkatak fights, only calming when it's time to eat or rest.\nMost rakkataks fly alone, picking off meals in sudden swooping strikes, but they will occasionally form a flock. Despite having little faculty for communication with other creatures, rakkataks have a certain ravenous genius for hunting with kin. Typically, once one grabs prey, the others swoop in to latch on as well, ingesting their meal with leech-like mouths.\nRakkataks possess insatiable appetites to help them withstand the long periods of famine between their infrequent meals as they travel the expanses of the Plane of Fire. As a result, they easily overconsume if brought somewhere with more abundant fauna, like the Universe. A single rakkatak can hold a surprising quantity of offal, even growing in size as its body expands. It becomes more unwieldy the larger it gets, which planar biologists believe to be a survival tactic to keep a rakkatak from indulging its hunger until it quite literally bursts.\nAshen Hunting Grounds\nAvoiding the blazing chaos and ifrit rule that typify much of the Plane of Fire, rakkataks prefer ashen wastelands as their hunting grounds. They dig simple burrows just barely below the surface, called rakkatak hills. Within, they can doze and digest in peace or lay and tend their horrifying eggs.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 5,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 5,
        "int": -3,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 15
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "y67GedpPM4l09L7g",
          "name": "Mouth",
          "bonus": 15,
          "damage": "2d8+7 piercing",
          "traits": []
        },
        {
          "id": "JRw824QsxUsPx75n",
          "name": "Leg",
          "bonus": 15,
          "damage": "1d10+7 slashing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "hPZzRiHQXCiYgo2g",
          "name": "Exploding Guts",
          "kind": "passive",
          "description": "When the rakkatak is critically hit or critically fails a Fortitude save, one of its organs bursts. Roll [[/gmr 1d4]] to determine what effect this has.\n1 Trapped noxious gas rushes out. The rakkatak is pushed 10 feet away from the source of the triggering attack or effect.\n2 Pus showers those nearby. Each creature in a 5-foot emanation is Sickened 1.\n3 The damage is severe. The rakkatak takes 1d6 persistent bleed damage.\n4 Gelatinous rakkatak eggs explode forth and instantly hatch. Each creature in a 5-foot emanation takes 1d6 persistent piercing damage from the ravenous larvae.",
          "traits": []
        },
        {
          "id": "SDDRm9yPKg3NJ4SU",
          "name": "Predator's Stare",
          "kind": "action",
          "description": "The rakkatak turns its grotesque yet mesmerizing eyes upon one creature it can see within 30 feet. That creature must succeed at a check (will, dc:22) save or become Fascinated with the rakkatak. While fascinated, the creature must spend at least 1 action each round moving closer to the rakkatak as expediently as possible, and can't intentionally move away from it. The fascination ends after 1 minute or when the rakkatak uses Predator's Stare again, whichever comes first.",
          "traits": [
            "concentrate",
            "emotion",
            "mental",
            "visual"
          ]
        },
        {
          "id": "LYRBEN7zrqeXVWSQ",
          "name": "Suck Innards",
          "kind": "action",
          "description": "Requirements A Grabbed, Paralyzed, Restrained, Unconscious, or willing creature is within the rakkatak's reach\nEffect The rakkatak deals 3d6 untyped damage to the target (check (fortitude, dc:22, basic) save). If the creature takes at least 12 damage, the rakkatak regains 10 healing HP.",
          "traits": []
        },
        {
          "id": "F1ncMskvR2aUTSNT",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:ore-louse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "rmno91OxFdAJX5ap",
      "slug": "ore-louse",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7c339ed130de6af43ee5d8b3cfff51d2ad004c9544c7096ff0bf921bf02ee005",
    "translatableHash": "sha256:32eef8a5e4381ee15d24f5f0ebc08d3cdfbdd1c2d9a65e60bde890d2b9733e27",
    "data": {
      "schemaVersion": 1,
      "name": "Ore Louse",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "beast",
        "water"
      ],
      "description": "Ore lice are six-legged insectile creatures that roost either just beneath or above the water's surface. They're highly territorial toward both strangers and each other, able to detect an intruder through the ripples in the water. Due to their diet, ore lice have incredibly tough chitin that's infused with metal. Cannibalism between ore lice is common when they're unable to locate other prey.\nThough there are far more suitable environments for ore lice bordering the Plane of Air, the creatures are often found where the Plane of Earth meets the Plane of Water. This was a mystery that puzzled many—until the Plane of Metal returned between the Planes of Earth and Water. Planar researchers realized that ore lice must have hunted here before the planar schism. On the Plane of Metal, ore lice often appear in horror stories chasing down metal elementals and ferociously devouring them. Their connection to Ferrumnestra adds to their infamy.",
      "armorClass": 22,
      "hitPoints": 60,
      "speedFeet": 35,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "wavesense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 15,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": -2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "r9awh9WwnG6U1o43",
          "name": "Mandibles",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "ca0i1Yn6XFYLTSPT",
          "name": "Leg",
          "bonus": 14,
          "damage": "2d8+4 bludgeoning",
          "traits": [
            "finesse",
            "reach-10"
          ]
        },
        {
          "id": "CL9mLNm75qb378Ld",
          "name": "Oxidizing Spit",
          "bonus": 14,
          "damage": "2d8 acid",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "wvOSP5gzA31X8P7F",
          "name": "Metal Scent",
          "kind": "passive",
          "description": "An ore louse can smell metal as a precise sense.",
          "traits": []
        },
        {
          "id": "qE3WBQ7AiZtFFSWq",
          "name": "Consume Living Metal",
          "kind": "action",
          "description": "Requirements The ore louse is adjacent to a creature that died within the last hour and had the metal trait or was another ore louse\nEffect An ore louse can replenish its health by eating the remains of its kin or a once-living metal creature. The ore louse feasts upon the corpse, regaining 3d6 healing Hit Points. The ore louse can regain Hit Points from a given corpse only once.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "BC8Zzhb9pWbIBoFo",
          "name": "Metal Snack",
          "kind": "passive",
          "description": "An ore louse gains 5 temporary Hit Points each time its mandibles Strike either damages or breaks a metal item using its rust ability, or if it hits a creature that has the metal trait or is made of metal.",
          "traits": []
        },
        {
          "id": "FDehMIxDDwZIdJSP",
          "name": "Rust",
          "kind": "passive",
          "description": "An ore louse's Strikes causes metal to rapidly rust and corrode. If it succeeds at a mandibles or oxidizing spit Strike, the ore louse deals 3d6 untyped damage (or double damage on a critical hit) to a metal item the target is wearing or holding, ignoring its Hardness. If the ore louse hits an unattended metal item, the item takes this damage automatically. If a creature uses the Shield Block reaction with a metal shield against the attacks, the shield is automatically broken, but no other item is rusted on that attack.",
          "traits": []
        },
        {
          "id": "eAYNu9xwwvzgQM3Q",
          "name": "Water Stride",
          "kind": "passive",
          "description": "The ore louse can stand and move on the surface of water or other liquids without falling through. The ore louse can go underwater if it wishes, but it must Swim to do so.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:murajau",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Rv14qdCi4cTEBXJ4",
      "slug": "murajau",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04316a44147cf7ed133711062674a034f21f2b67e14ea2298cf322ae93d4cc48",
    "translatableHash": "sha256:f5e0d5f891c000a54b2def2c9a215a6975e1b41f778eaf519adf365f4a866a78",
    "data": {
      "schemaVersion": 1,
      "name": "Murajau",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "humanoid"
      ],
      "description": "Murajaus, one of many nomadic creatures of the Plane of Water, appear humanoid from the waist up but resemble a large hermit crab from the waist down, including a pair of strong pincers. Murajau communities are often multilingual, and many individuals are willing to work as translators and guides to adventurers if properly compensated. Rather than currency, murajaus prefer to deal in trinkets such as talismans, particularly those that protect travelers. For murajaus, such items signify their sincerity and unwavering desire to protect others. They trade tales among each other of treasure troves too dangerous to easily explore. Rather than keep this information solely for themselves, they're happy to share it with trustworthy people they meet in exchange for a small share.\nFaydhaans tell condescending tales of murajaus, describing their origin as royal servants who failed to fulfill a royal decree. Murajaus' own creation story, meanwhile, claims that the royal decree in question requested they travel the lands to provide shelter and hospitality to visitors, a mission they have since carried on for generations. They take great pride in treating guests well, especially in providing suitable food, drink, and gifts.\nTo murajaus, one's shell signifies homestead, status, identity, and cultural inheritance. Community elders and leaders often wear shells passed down from a long line of successors, which carry modifications and marks that denote predecessors' achievements and failures. On the occasion that their community numbers exceed the number of shells available, a hunting season might be declared. Participants who return with suitable trophies are revered for their contribution and bravery.",
      "armorClass": 25,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 14,
        "diplomacy": 11,
        "survival": 13
      },
      "languages": [
        "common",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "BpN3viq8ShdQ9qwc",
          "name": "Leg",
          "bonus": 14,
          "damage": "1d6+9 bludgeoning",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "MzGX5cWrVcSdaqQq",
          "name": "Spear",
          "bonus": 14,
          "damage": "1d6+9 piercing",
          "traits": []
        },
        {
          "id": "HeMfd0ayH1VZoy7E",
          "name": "Spear",
          "bonus": 14,
          "damage": "1d6+9 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "TER58WKxPdoI5ouM",
          "name": "Hefty Defense",
          "kind": "passive",
          "description": "A murajau's weight and legs make them incredibly difficult to trip or be moved unwillingly. They can be tripped only by creatures of their size or larger and have a +2 circumstance bonus to all defenses against being shoved or tripped. However, a murajau can Stand only as a 2-action activity.",
          "traits": []
        },
        {
          "id": "DHsSy14pC2lDWHBf",
          "name": "Retract",
          "kind": "action",
          "description": "The murajau fully retreats into their shell, gaining greater cover; the bonus to Stealth applies only if the murajau is undetected. While in their shell, the murajau can't see outside and takes a –2 circumstance penalty to auditory Perception checks. The only move actions the murajau can take are to Stand or Step. The murajau can come back out as a single action.",
          "traits": []
        },
        {
          "id": "IZqo7Z0mmfGaRoRz",
          "name": "Talisman Faithful",
          "kind": "passive",
          "description": "A murajau can affix talismans to their shell as though it were heavy armor, and they can affix up to three talismans to it at a time instead of one.",
          "traits": []
        },
        {
          "id": "lDnJlp4yeAkcbLCI",
          "name": "Swinging Spear",
          "kind": "action",
          "description": "The murajau makes a spear Strike. On a hit, the murajau twists their spear to move the target to any space adjacent to the murajau and deals an additional 2d6 bludgeoning damage as the target smashes into the murajau's thick shell.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:munsahir-trooper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Vv9ffFM1qiTdIEsy",
      "slug": "munsahir-trooper",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9a8364cffce5c62d9414d18d9e1fa7af55bdecb3e92f3f1d40b6f751c36b97c9",
    "translatableHash": "sha256:52ffcd9b298fd035662c6e5f323e7bfe521c2beaac7157e563d48294be8afbe2",
    "data": {
      "schemaVersion": 1,
      "name": "Munsahir Trooper",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire",
        "humanoid"
      ],
      "description": "Highly skilled troopers mostly come from the bronze class.\nMunsahirs build militaristic, traditional societies.\nMunsahir Hierarchy\nThe three strata of munsahir society can be observed in the kilts worn by all members. Nobles, the unimpeachable rulers, wear elaborate brass kilts. In the middle of society are businesspeople and traders bedecked in bronze. Raw copper adorns those in the working class, who do most of the building and hard labor for munsahir society. Officially speaking, there is no class mobility; horrible crimes might cause a brass noble to be sent to prison but can't cause them to lose their station.",
      "armorClass": 22,
      "hitPoints": 65,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 6,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 5,
        "int": 2,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 12,
        "crafting": 11,
        "stealth": 12
      },
      "languages": [
        "common",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "z291B6axWHfGknFv",
          "name": "Warhammer",
          "bonus": 14,
          "damage": "1d8+9 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "YJOp21IeBg6Kqkw9",
          "name": "Dueling Pistol",
          "bonus": 12,
          "damage": "1d6+6 piercing",
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
          "id": "CkNkiMIgZ0iblrMY",
          "name": "Attack of Opportunity",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "NCKi4E87WbMTQF29",
          "name": "Heat of the Forge",
          "kind": "passive",
          "description": "10 feet. An munsahir's skin radiates heat like a forge's fire. A creature that starts its turn in the area must succeed at a check (fortitude, dc:20, options:area-effect,inflicts:fatigued) save or become Fatigued while it remains in the area. Creatures immune to environmental heat effects or with any fire resistance are immune.",
          "traits": [
            "aura",
            "fire"
          ]
        },
        {
          "id": "fEeaznyEsmyRdWGo",
          "name": "Self-Destruct",
          "kind": "passive",
          "description": "When the munsahir is reduced to 0 HP, their armor explodes at the start of their next turn, dealing 5d6 fire damage in a 10-foot emanation (check (reflex, dc:19, basic, options:area-effect)).",
          "traits": []
        },
        {
          "id": "3eljJtZ3IPeQd7kL",
          "name": "Burning Touch",
          "kind": "passive",
          "description": "The munsahir gatecrasher's Strikes deal an extra 1d6 fire damage (included above). When the gatecrasher successfully performs a Grapple or Shove action, they also deal 1d6 fire damage to their target.",
          "traits": [
            "fire",
            "primal"
          ]
        },
        {
          "id": "KRdWAkRn0RNznDAG",
          "name": "Volcanic Hammer",
          "kind": "action",
          "description": "The trooper makes a warhammer Strike that deals one extra weapon die of damage and 2d6 persistent fire damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:living-grove",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "WrGYN6jtEfv7k1pV",
      "slug": "living-grove",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7010009801620e3adebe59f8a331a8d66e5f21c7a159115b98cf34cab00e2de4",
    "translatableHash": "sha256:240a264d6e5b373d14cf9830190904a55ff43f01adc62854d95fc0f4c227ebf3",
    "data": {
      "schemaVersion": 1,
      "name": "Living Grove",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "A living grove is a singular connected entity, with dozens of genetically identical trunks united within the same root system. At rest, a living grove resembles nothing so much as a small arboretum of birch and aspen trees, though oak and redwood varieties that are significantly larger and tougher exist as well.\nAt first glance, wood elementals might not seem to have the same destructive potential as their cousins from the Planes of Fire, Water, or Air, but don't be fooled. The woods can be a dangerous place.\nThough some resemble animals, the elemental beasts presented here are still plants, and their life cycles reflect it. Vegetable lambs grow on rooted stalks, from which they can't be removed until they've matured (or perhaps ripened), leaving them dependent on their immediate surroundings for food. Moss sloths are little more than lumps of green fluff for the first century of their existence, only gaining limited mobility once they can grow their defensive wooden claws.\nWild But Unwild\nMany wood elementals are created by kizidhars and other powerful creatures on the Plane of Wood and placed in rote roles. Populating nature preserves and sprawling estates, they can be unsure how to behave if released into the wild. They're essentially born domesticated and will likely act far differently than the wild creatures they mimic, even in natural environments. Their natural predators are few, putting the elementals at less risk, although they're still sometimes eaten by giant termites or captured by some as pets.\nA Brain By Any Other Name\nEven if Lady Shumunue taught the wood elementals' ancestors to mimic animals, a wood elemental's consciousness is contained not in a brain but in its root system. Entities like nursery crawlers, living groves, and carved beasts use this to their advantage. That an elemental's wooden body can be carved and crafted, apparently without lasting harm, implies that they might not feel pain so long as their roots remain undamaged.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 7,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 5,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "nature": 13,
        "stealth": 13,
        "survival": 12
      },
      "languages": [
        "arboreal",
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 7"
        ]
      },
      "attacks": [
        {
          "id": "PwoAYTwFf2RzdakE",
          "name": "Branch",
          "bonus": 15,
          "damage": "2d8+4 bludgeoning",
          "traits": []
        },
        {
          "id": "7izpKuskd27DQuNj",
          "name": "Nuts",
          "bonus": 11,
          "damage": "2d6+4 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "KFlLFiorgYBC2t2o",
          "name": "Tremorsense 30 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "VWfouijDuiF46BuT",
          "name": "Defensive Camouflage",
          "kind": "passive",
          "description": "The living grove can Hide in natural environments even if it doesn't have cover. While Hiding, its root system is safely covered in dirt, granting the grove a +3 status bonus to AC. A critical hit cracks this protective layer of earth to disperse in the wind, ending the effect.",
          "traits": []
        },
        {
          "id": "R3nQMIctYNinJLgl",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:22, options:damaging-effect,inflicts:grabbed,inflicts:slowed), 5d8 bludgeoning damage, [[/act escape dc=20]], Rupture 10\nA creature Engulfed by the living grove must also attempt a check (fortitude, dc:22, basic, options:inflicts:stunned) save as it's battered between the thin, tightly packed trunks.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 2.\nCritical Failure The creature is Stunned 4.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:rust-scarab",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "ytvGscCgKbOCn0dB",
      "slug": "rust-scarab",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b61c76fd6fe612bc2412519bb3b59500f39f20c788fbde053846541487cd3d92",
    "translatableHash": "sha256:3911f4b7436c0e8de15dbf9258d129dd4ea9636346797cf493b145a27e90f78b",
    "data": {
      "schemaVersion": 1,
      "name": "Rust Scarab",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "These elementals resemble enormous beetles, with thick outer shells composed of multiple layers of heavily pockmarked, rusted plates protecting a jagged metallic skeleton.\nMetal elementals can manifest in a wide variety of different forms, from shapeless amalgams of different metals to humanoid and beast-like monstrosities.\nMetal Forms\nThough metal elementals are made almost entirely of metal, most are composed of layers of different metals in tiny fragments, as complex as a body of flesh or plant matter. Many of these metals are rusted or decayed from the natural, slow entropy of the Plane of Metal.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 5,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 13
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "owwwoPcjI10Nb5MO",
          "name": "Claw",
          "bonus": 15,
          "damage": "2d8+6 slashing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "yBRUn33FSwzXEyeV",
          "name": "Heavy",
          "kind": "passive",
          "description": "As long as it is immobile, the elemental can't be forcibly moved or knocked Prone. If it takes a move action, it loses this immunity until the start of its next turn.",
          "traits": []
        },
        {
          "id": "C6cNEapcmnViotTG",
          "name": "Rust Vision",
          "kind": "passive",
          "description": "A rust scarab ignores the Concealed condition from rust clouds.",
          "traits": []
        },
        {
          "id": "65amdyg6Td1QCQ7H",
          "name": "Crumbling Carapace",
          "kind": "passive",
          "description": "When a rust scarab is reduced to fewer than half its maximum Hit Points or is damaged by a critical hit, its outer shell breaks into a veil of rusty metal flakes. This causes it to lose its resistance to physical damage and its heavy ability, but it gains a rust cloud aura and a 35-foot land Speed.",
          "traits": []
        },
        {
          "id": "ZHM8EdcobK7Z8fTf",
          "name": "Rust Cloud",
          "kind": "passive",
          "description": "A rust scarab whose carapace is broken is constantly surrounded by a cloud of rust flakes that cause it to be Concealed from creatures more than 5 feet away from it.",
          "traits": []
        },
        {
          "id": "GzDpY5QalDlykw0S",
          "name": "Tetanus",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:19)\nOnset 1 week\nStage 1 Clumsy 1 (1 week)\nStage 2 Clumsy 2 and can't speak (1 day)\nStage 3 Paralyzed with spasms (1 day)\nStage 4 death",
          "traits": [
            "disease"
          ]
        },
        {
          "id": "IcuO37pK9nxxGKL4",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, claw, check (reflex, dc:23, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:living-lodestone",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "CKRqlCHgvZp9YL5s",
      "slug": "living-lodestone",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:994a7bb20a415f4525af92496c1b42bd31d1cc452adf31530b291c7ebe4eecbb",
    "translatableHash": "sha256:beb6f0315f1979fa599d5537d795132fec004dfeb5d8311e9b0e65deec9c8b43",
    "data": {
      "schemaVersion": 1,
      "name": "Living Lodestone",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "This rotating sphere of dark, shiny metal floats about 5 feet off the ground, constantly surrounded by a whirling frenzy of smaller metallic objects caught up in its powerful magnetic field.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "athletics": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7HC7b3bAn0OIm1Am",
          "name": "Jolt",
          "bonus": 15,
          "damage": "2d6+8 electricity",
          "traits": []
        },
        {
          "id": "EOVspuvMPp5NCJX1",
          "name": "Hurled Metal Object",
          "bonus": 13,
          "damage": "2d10+7 bludgeoning",
          "traits": [
            "magical",
            "primal"
          ]
        }
      ],
      "actions": [
        {
          "id": "gaQkru5JOGM8uMiC",
          "name": "Electromagnetic Disruption",
          "kind": "passive",
          "description": "When living lodestone takes electricity damage, they automatically reverses polarity.",
          "traits": []
        },
        {
          "id": "mynj7eOAR1kEuedx",
          "name": "Magnetic Field",
          "kind": "passive",
          "description": "60 feet.\nA living lodestone constantly emits a powerful magnetic field that is either positively or negatively aligned. Each creature within the aura that is wielding a metallic weapon, wearing metallic armor, or made partially or entirely out of metal is subject to an effect determined by the lodestone's current polarity.\nNegative An affected creature is pushed 5 feet away from the lodestone at the start of each of its turns, and it treats each square in the aura as difficult terrain when moving closer to the lodestone. Unattended metal objects in the aura of 2 Bulk or less are pushed just outside the aura.\nPositive An affected creature is pulled 5 feet toward the lodestone at the start of each of its turns, and it treats each square in the aura as difficult terrain when moving farther from the lodestone. Unattended metal objects in the aura of 2 Bulk or less are pulled adjacent to the lodestone.",
          "traits": [
            "aura",
            "metal",
            "primal"
          ]
        },
        {
          "id": "YWlLdGQ9qulsSiVz",
          "name": "Hover",
          "kind": "passive",
          "description": "A living lodestone floats above the ground high enough to ignore all difficult terrain and greater difficult terrain on the ground.",
          "traits": []
        },
        {
          "id": "wQSqACVeoMz7ed56",
          "name": "Magnetic Disarm",
          "kind": "action",
          "description": "The living lodestone attempts to Disarm a metal weapon from a creature within its magnetic field. On a critical success, the weapon is either pushed to just outside the aura if the polarity is negative or is pulled to the lodestone and sticks to it if the polarity is positive. An item stuck to the lodestone can be wrenched free with an Interact action.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "TB0vejgDO2mb7bbp",
          "name": "Reverse Polarity",
          "kind": "action",
          "description": "The living lodestone switches the polarity of its magnetic field from positive to negative, or vice versa. Each creature affected by the lodestone's aura falls Prone unless it succeeds at a check (reflex, dc:21) save.\nThe lodestone can't Reverse Polarity again for [[/gmr 1d4 #Recharge Reverse Polarity]].",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:carved-beast",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "P3UcyuiqqYPzAwwF",
      "slug": "carved-beast",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d415f4ccbd844319f5994b0e2471ebcc419768aed09e11957fbb0a0171e236cf",
    "translatableHash": "sha256:bdc9521e9f8d855d2a0a1cee4db5a065cce4b2a173b5ba469dea0055abfe0a56",
    "data": {
      "schemaVersion": 1,
      "name": "Carved Beast",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "An untold number of stumps carved into roughly hewn animal shapes roam the Plane of Wood. The statue portion of these carved beasts is incapable of articulated movement, though the living wood at their base is fully animate. When left to their own devices, carved beasts prefer to roughly mimic the behaviors of the animals they resemble, like children playing with inarticulate toys.",
      "armorClass": 22,
      "hitPoints": 92,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 9,
        "will": 17
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "nature": 15,
        "stealth": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "O9XsdAYcKyBqYszh",
          "name": "Statue",
          "bonus": 15,
          "damage": "2d8+5 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "RCbUpcJ05m103q8l",
          "name": "Roots",
          "bonus": 17,
          "damage": "2d8+5 bludgeoning",
          "traits": [
            "finesse",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "8RmnVCdx4z84IoCI",
          "name": "Top-Heavy",
          "kind": "passive",
          "description": "While the carved beast is not Dug In, its unwieldy design leaves it vulnerable to falling over. The DC of any attempt to knock the carved beast Prone is reduced by 5, and the beast takes a –5 status penalty to any check or save it attempts to resist being knocked prone. Additionally, whenever the beast fails to Trip opponents with its roots Strike, it critically fails instead. If successfully Shoved by an opponent, the beast must succeed at a check (reflex, dc:20) save or fall prone.",
          "traits": []
        },
        {
          "id": "Eqg2SUT8CQFaYk5Q",
          "name": "Dig In",
          "kind": "action",
          "description": "The carved beast digs its roots into the ground for better protection and purchase. While Dug In, the carved beast can't Stride nor use its roots Strike; however, this also negates the effects of top-heavy, grants the beast a +2 status bonus to its AC and Fortitude saves, and increases the damage of its statue Strike by [[/r 1d8]]. The carved beast can spend an action on its turn to end the effect; alternatively, the effect ends when the carved beast is moved by force, such as via a successful Shove attack.",
          "traits": []
        },
        {
          "id": "hV0dl4qSqtuYNS07",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:kizidhar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "QkD7kUl6KvUvPAYA",
      "slug": "kizidhar",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2e291d2e6e472cbe0a110f492179232cf27ae0bffa88af45d31e40428de17997",
    "translatableHash": "sha256:effbccdf8e5a8cc9dc9187caabbb27122fb7bc03ef933fb1e6262bde5e2fa0f0",
    "data": {
      "schemaVersion": 1,
      "name": "Kizidhar",
      "level": 6,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "elemental",
        "genie",
        "plant",
        "wood"
      ],
      "description": "Kizidhars look like walking trees, averaging 10 to 12 feet tall with branches twisting to form their arms, faces, and other features. A kizidhar can reshape their body to create any wooden object.\nThe genies of the Plane of Wood, known as the kizidhars, are overbearing lords of their element. These master crafters of wood specialize in carpentry and all kinds of woodcarving, and they take a particular delight in reshaping the world in their own image—either through creating wooden statues of themselves or by manipulating and controlling the living things around them. Though they're able to carve themselves similarly, they usually regard their own forms as perfect.\nShunning the company of other genies, they prefer to avoid those equal in power and instead surround themselves with circles of sycophants and flatterers. With the pathways to the Universe open again for the first time in ages, kizidhars roam the multiverse to find mortals they can tempt into joining their palace retinues as servants, entertainers, and valuable sources of new information.",
      "armorClass": 22,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 5,
        "int": 3,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 11,
        "arcana": 11,
        "athletics": 15,
        "crafting": 15,
        "deception": 13,
        "intimidation": 15,
        "nature": 16,
        "stealth": 13
      },
      "languages": [
        "common",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "HBwgRxqN5wlt5upF",
          "name": "Staff",
          "bonus": 16,
          "damage": "2d4+10 bludgeoning",
          "traits": [
            "reach-10",
            "two-hand-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "VtfaZaFVVKoPRYie",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "amD7zbSFA6oW8ok2",
          "name": "Change Shape",
          "kind": "action",
          "description": "The kizidhar transforms into a Small or Medium wood elemental or plant creature. This doesn't affect the kizidhar's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "5lYdjvH8n4U6lOS3",
          "name": "Parting the Trees",
          "kind": "passive",
          "description": "The genie ignores difficult terrain from plants, and can share their space with larger plants, such as trees.",
          "traits": []
        },
        {
          "id": "3EiMXksw10uE68Dc",
          "name": "Sculpt Wood",
          "kind": "action",
          "description": "The kizidhar creates a wooden item out of their body that appears in their hand and remains attached. The item can be a one-handed simple weapon, shield, or object of light Bulk. A kizidhar can instead use this ability to transform an item it's already holding or to remove an object to free its hand. Any item created with Sculpt Wood crumbles to splinters if removed from the kizidhar's possession.",
          "traits": []
        },
        {
          "id": "4FBBnKlQiY5kBp5e",
          "name": "Take Root",
          "kind": "action",
          "description": "The genie thrusts their weapon into the ground. Plants sprout and grow out of the ground in a 20-foot burst centered on one corner of the kizidhar's square. All squares on the ground in that area are difficult terrain until the kizidhar uses this ability again.",
          "traits": [
            "arcane",
            "plant",
            "wood"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "M85rhfoixWoQwEyd",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "6zLYniDDQ9XWj53I",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "t0vuRZU1r84RXTEX",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "ryiuKUF6YfVfmFCd",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "zWDxUVzQ7rz9471e",
              "name": "One With Plants",
              "rank": 2
            },
            {
              "id": "JdV6J6iYZC5EMjaV",
              "name": "Nature's Pathway (At Will)",
              "rank": 5
            },
            {
              "id": "rExANoFFcTnCDaPP",
              "name": "Speak with Plants (Constant)",
              "rank": 6
            },
            {
              "id": "VfDfz8se29Vl0XxO",
              "name": "Truespeech (Constant)",
              "rank": 6
            },
            {
              "id": "i7bz3XXdOgXmQEUI",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or the Universe Only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:pine-pangolin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "6teMPgUKnYc1YIIx",
      "slug": "pine-pangolin",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad7b03d050c1d5766d84e25aca700e69d4f2e7d2c591b4a0ad9b88494c710b20",
    "translatableHash": "sha256:7c484068f04dc3aea908961f92c8d2f92f837e87556fa86816df207f9317deb9",
    "data": {
      "schemaVersion": 1,
      "name": "Pine Pangolin",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "These creatures sleep while hanging upside down by their partially curled tails and rely on their thick wooden scales to protect them from danger. One such danger the scales negate is the falling damage from deliberately rolling up and dropping onto the head of an unsuspecting opponent, which is one of their favorite combat strategies. Beneath their scales, pine pangolin bodies secrete a thick, sticky tar that serves as a secondary line of defense.",
      "armorClass": 25,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 10,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 5,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 17,
        "nature": 15,
        "survival": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "poison",
          "paralyzed",
          "sleep",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "Frbb8rjaZxITynO6",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d12+3 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "0KXkA7m63IDQ9NIz",
          "name": "Tongue",
          "bonus": 17,
          "damage": "2d8+3 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "RdcTBXUDcOhG6Cjy",
          "name": "Roll Up",
          "kind": "action",
          "description": "The pine pangolin falls Prone, closes up its scales, and rolls into a ball. While Rolled Up, the pangolin gains resistance 10 to physical damage and total immunity to falling damage from heights of 50 feet or less. The only action the pine pangolin can take is to Stand, and the effects of Roll Up end once the pangolin Stands.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "dyvB5o0Y6YxRtDwR",
          "name": "Secrete Tar",
          "kind": "action",
          "description": "The pine pangolin secretes a brown, sticky tar within a 5-foot emanation, making those squares difficult terrain for 1 minute. Each creature that enters or starts its turn in a tarred square must succeed at a check (fortitude, dc:25) save or become Immobilized until it Escapes. On a critical failure, the creature falls Prone; prone creatures take a –2 circumstance penalty to their checks to Escape the tar. The pine pangolin is immune to the effects of its own tar.",
          "traits": [
            "plant"
          ]
        },
        {
          "id": "GdKbn5sYIuXZL0R3",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:tantriog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "JR7VT7ObQRaBtUlk",
      "slug": "tantriog",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:18b844b100e69859fe8b43d1ca41ea96d4b9c25c062940afd255a7811a3d2696",
    "translatableHash": "sha256:0ce16adc5881551bcb19a498ddb099551b8790340a8d9e893d10f4ba8a36ee20",
    "data": {
      "schemaVersion": 1,
      "name": "Tantriog",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "elemental",
        "water"
      ],
      "description": "Wherever exquisite cuisine is consumed, amazing songs are performed, or epic waves crest, there wait tantriogs. With a crab's foreclaws, turtle's shell, and back flippers, tantriogs are among the more unique water elementals. They ply the Boundless Sea constantly seeking new experiences, whether the next big wave to ride, a tasty delicacy to sample, or a piece of art to collect. They crave new sensations and often seek them out at the expense of others.\nIf one possesses rare art, lost lore, or fantastic surfing or cooking skills, a tantriog can be a wonderful companion. They're charming and friendly to those they find interesting, but their interest can be highly precarious, dropped the second someone bores them. Tantriogs may even betray acquaintances if it would give them another interesting story to tell. This makes befriending one a tricky proposition, as nothing can be taken for granted.\nIt's a mystery how tantriogs came to wear their current forms. Some say that, in the earliest days of the elemental planes, tantriogs were assassins of ice and mist who committed a crime so great that they're being punished for it to this day. Others claim tantriogs assumed their shape after losing a bizarre cosmic bet. One of the more popular theories about the tantriog's current form is that in the past, they used to be able to shift shape as easily as water molds to its container. In their endless boredom, they were trying out a variety of shapes when a sudden curse (possibly cast by faydhaans) caused them to lose their ability while transforming from a turtle to a crab, leaving them stuck between the two. It's said that any who can teach a tantriog how to relearn their morphing ability could earn the elemental's undying friendship. Whatever the case, the surest way to anger a tantriog is to ask them about their appearance.\nConversely, the surest way to befriend a tantriog is with compliments about their appearance or their skills. Don't be too fawning, though. Tantriogs don't like being tricked or made to look a fool.\nIMPRESSING A TANTRIOG\nA tantriog loves seeing a new sight or impressive exhibition of skill. Anyone who wants to stay in a tantriog's good graces needs to keep the new experiences flowing. For this reason, many tantriogs have formed unlikely friendships with gnomes, whose need to seek out new experiences provides common ground.",
      "armorClass": 24,
      "hitPoints": 118,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 3,
        "int": 4,
        "wis": 1,
        "cha": 5
      },
      "skills": {
        "deception": 16,
        "diplomacy": 14,
        "performance": 14
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 8"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "9WEcZt4MA6OaR87d",
          "name": "Claw",
          "bonus": 15,
          "damage": "5d6+5 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "9KzypZPVqbpSCU1j",
          "name": "Beak",
          "bonus": 15,
          "damage": "5d4+5 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "TFPCPQRSEmGflPyJ",
          "name": "Spitball",
          "bonus": 13,
          "damage": "4d6+5 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "mLOIQvWD9akm97hY",
          "name": "Shell Defense",
          "kind": "action",
          "description": "The tantriog retracts their limbs and head into their shell and ends their turn. This increases their AC to 26, but they can't act except to reemerge, which they can do as a single action.",
          "traits": []
        },
        {
          "id": "fRYMn6GRT6c3VKuJ",
          "name": "Listless Saliva",
          "kind": "passive",
          "description": "The tantriog's essence is imbued with their endless ennui. Any creature hit by the tantriog's beak or spitball Strikes must succeed at a check (will, dc:24) save or become Stunned 1 (Stunned 2 on a critical failure).",
          "traits": [
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "zIfVgKCDN3Up9DVo",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "USGWnenm8jDEy0sc",
              "name": "Spout",
              "rank": 1
            },
            {
              "id": "DFuD7nChbzognpd3",
              "name": "Wall of Water",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:skymetal-striker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "XyU6fPkQJjS1VFTb",
      "slug": "skymetal-striker",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ed5705d8c136686e40d179359750669f974f56b2db2f83f5de6a008d7b2e0727",
    "translatableHash": "sha256:e0e06793327e7085f02fa231aebee478c8853eb5f4a80dc4d4a053540f68f83e",
    "data": {
      "schemaVersion": 1,
      "name": "Skymetal Striker",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "A skymetal striker resembles a serpent—or, more precisely, the two-headed serpent known as an amphisbaena—made of a long string of dozens of spinning, sharp- toothed circular saw blades. These blades array themselves along the creature's body like beads on an invisible cord of magnetic force. Although the blades making up the creature are typically composed of many different metals and alloys, it is best known, feared, and named for the blades of orichalcum and inubrix that form the \"heads\" at either end of its serpentine body.\nMetal elementals can manifest in a wide variety of different forms, from shapeless amalgams of different metals to humanoid and beast-like monstrosities.\nMetal Forms\nThough metal elementals are made almost entirely of metal, most are composed of layers of different metals in tiny fragments, as complex as a body of flesh or plant matter. Many of these metals are rusted or decayed from the natural, slow entropy of the Plane of Metal.\nStrange Metals\nInubrix and orichalcum are types of skymetal—a collective term used in the Universe to refer to exceedingly rare metals, most possessing magical properties, found on distant planets and fallen stars. Skymetal can be found in abundance on the Plane of Metal, however, and many metal elementals contain at least a bit of one type or another. Inubrix, colloquially called ghost iron, is prized for its ability to phase through other metals, while orichalcum's mystical properties can warp the very flow of time around it.",
      "armorClass": 26,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 17,
        "will": 13
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "stealth": 17
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "sotBSdq3PotgTLR1",
          "name": "Inubrix Fangs",
          "bonus": 17,
          "damage": "2d10+6 slashing",
          "traits": [
            "finesse",
            "reach-10"
          ]
        },
        {
          "id": "VYQmtL6zqC3bFFgf",
          "name": "Orichalcum Fangs",
          "bonus": 17,
          "damage": "2d12+6 slashing",
          "traits": [
            "finesse",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "SP0TGyxQLOgEklhm",
          "name": "Phase Blade",
          "kind": "passive",
          "description": "A skymetal striker's inubrix fangs Strike ignores damage resistance from metal armor's armor specialization effects and the circumstance bonus to AC from metal shields, and it doesn't trigger the Shield Block reaction from a metal shield.",
          "traits": []
        },
        {
          "id": "f8WgB3mBX0x9ajeh",
          "name": "Temporal Stutter",
          "kind": "passive",
          "description": "A creature not already affected by temporal stutter that takes damage from a skymetal striker's orichalcum fangs Strike must attempt a check (fortitude, dc:25) save.\nSuccess The target is Quickened until the end of its next turn.\nFailure The target is Slowed 1 until the end of its next turn.\nCritical Failure The target is Slowed 2 until the end of its next turn.",
          "traits": []
        },
        {
          "id": "EF4zNZEhzz6W8FUR",
          "name": "Two-Headed Assault",
          "kind": "action",
          "description": "The skymetal striker makes one inubrix fangs Strike and one orichalcum fangs Strike, each against a different creature. Its multiple attack penalty increases only after all the attacks are made.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:coldmire-pond",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "EXiLRXbweiiMbTNk",
      "slug": "coldmire-pond",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a0dc5e6985b63b749e97e8fae46941775c0cf7d49e2626ddfe7cbd80fccd4ac2",
    "translatableHash": "sha256:d59ab5347cb5cb9e844ecc0c408644d3a743b18759b16c09b28fc23f9b7c7eb3",
    "data": {
      "schemaVersion": 1,
      "name": "Coldmire Pond",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "aquatic",
        "elemental",
        "water"
      ],
      "description": "Coldmire ponds are often mistaken for shallow pools of water, but these sentient bodies of living water actually crawl along the ground or float through other liquids. Coldmires are dangerous ambush predators, drowning creatures that stray too close to or, even more hazardously, stand or swim inside their waters.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 19,
        "will": 13
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 5,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 18,
        "stealth": 18
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "fire 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "je5OzYLmC8x5mcKB",
          "name": "Clammy Pseudopod",
          "bonus": 20,
          "damage": "2d8+9 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Lm1qdKUMLNfbRDhP",
          "name": "Shallow Waters",
          "kind": "passive",
          "description": "The coldmire pond can occupy the same space as other creatures. Creatures who move through the coldmire pond treat it as difficult terrain. Two creatures both occupying the coldmire pond's space are flanking it, regardless of their actual positions within the coldmire pond.",
          "traits": []
        },
        {
          "id": "SlZ6VA09qqhkqQEi",
          "name": "Constrict",
          "kind": "action",
          "description": "1d6 bludgeoning damage], check (fortitude, dc:25, basic)",
          "traits": []
        },
        {
          "id": "tWCmmwcYThwymMn8",
          "name": "Drag Below",
          "kind": "action",
          "description": "Requirements The coldmire pond occupies the same space as a target it has Grabbed\nEffect The coldmire pond pulls the target below the surface. The target must succeed at a check (reflex, dc:26) save or fall Prone and begin drowning.",
          "traits": []
        },
        {
          "id": "J9J7lDkB3lwhKCIY",
          "name": "Flash Flood",
          "kind": "action",
          "description": "Water surges out of the coldmire pond in a 20-foot emanation and crashes into nearby creatures, knocking them off their feet. Creatures in the area, as well as any creatures currently sharing the coldmire pond's space, take 4d8 bludgeoning damage and are knocked Prone (check (reflex, dc:26, basic, options:area-effect) save). Creatures standing inside the coldmire pond treat their result as one step worse.",
          "traits": [
            "primal",
            "water"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:zuhra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Mw0sQmrSf9hao5mF",
      "slug": "zuhra",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f4d76b0e5b5bdb0cb308c375d613dae67c27db4cf9ba7bb2f79614d5ee75dcfb",
    "translatableHash": "sha256:798eb76be0686493dd22458e7640d06690fbfb474a2334597c1c6f5917eb170b",
    "data": {
      "schemaVersion": 1,
      "name": "Zuhra",
      "level": 8,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "elemental",
        "genie",
        "metal"
      ],
      "description": "Zuhras, the genies of the elemental Plane of Metal, are bold and imposing, fond of being the center of attention and drawing a crowd with flashy performances, displays of skill, and tales of their personal victories. Despite their large personalities, their long-term relationships tend to be cool and somewhat distant; zuhras often make alliances but rarely form friendships, and the trust required for deeper relationships is rarer still. The few mortals who've gotten to know a zuhra often describe them as bombastic but emotionally aloof.\nSince the reconnection with other planes, zuhras have sought out and formed bonds with other genies. They find their jabali cousins to be capable smithing partners, if a bit staid and dull. Zuhras rarely pay non-genie elementals any more than a passing glance, finding even the intelligent ones uninteresting to communicate with or hard to relate to.",
      "armorClass": 26,
      "hitPoints": 125,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 17
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 6,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 15,
        "crafting": 17,
        "intimidation": 17,
        "performance": 19,
        "society": 16
      },
      "languages": [
        "common",
        "talican"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "QZfgVO4z6tDpChok",
          "name": "Spiked Chain",
          "bonus": 19,
          "damage": "2d8+9 slashing",
          "traits": [
            "disarm",
            "finesse",
            "magical",
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "PA8P7jzmeRY5NyC3",
          "name": "Hand Blade",
          "bonus": 19,
          "damage": "1d4 bleed; 2d4+9 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "jWSuXzAqAXwBFz9v",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "RrpDOSh8ukqc73TP",
          "name": "Conductive Redirection",
          "kind": "reaction",
          "description": "Trigger The zuhra is hit by an attack, spell, or effect that deals electricity damage\nEffect The zuhra conducts the electricity through their body, taking damage as normal, and redirecting a bolt at one target within 30 feet that they can see. The zuhra makes a ranged attack roll with a [[/r 1d20+20 #Conductive Redirection]] modifier against the target's AC. On a hit or critical hit, the target takes electricity damage equal to the full damage of the triggering effect.",
          "traits": [
            "arcane",
            "concentrate",
            "electricity"
          ]
        },
        {
          "id": "aQkhEmcvx5x4BXZ8",
          "name": "Blinding Reflection",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The zuhra is in dim or bright light\nEffect The zuhra briefly reshapes part of their metallic body into a concave surface to reflect the surrounding light into the eyes of a creature within 30 feet. The target must attempt a check (reflex, dc:26) save. It's then temporarily immune for 1 hour.\nCritical Success The target is unaffected.\nSuccess The target is Dazzled until the start of the zuhra's next turn.\nFailure The target is Blinded until the start of the zuhra's next turn.",
          "traits": [
            "arcane",
            "light"
          ]
        },
        {
          "id": "UNnCt8rg6fJ0pEZz",
          "name": "Change Shape",
          "kind": "action",
          "description": "The zuhra transforms into a Small or Medium metal elemental or animal. This doesn't affect the zuhra's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "1UqaxpOBsf9Wmuxk",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "ZKO4VIbLn3zDLY6p",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "VOlyHTVX4hCnvpV4",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "dFmNo34uH9GMnYQX",
              "name": "Magnetic Attraction (At Will)",
              "rank": 2
            },
            {
              "id": "Y9MIcLV0ey2oTCfZ",
              "name": "Magnetic Repulsion (At Will)",
              "rank": 2
            },
            {
              "id": "jcXw4t2l11NnlVUc",
              "name": "Mercurial Stride",
              "rank": 4
            },
            {
              "id": "l13hVGphbMIl8vSe",
              "name": "Weapon Storm",
              "rank": 4
            },
            {
              "id": "slzNf7qJ7Q9FiljK",
              "name": "Clad In Metal (Can Choose Uncommon Metals)",
              "rank": 5
            },
            {
              "id": "QWAM5qVsWAFGy8T2",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "kvIGufo5tVwCxlVh",
              "name": "Interplanar Teleport (At Will) (To Astral Plane, Elemental Planes, or Universe only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:snapdrake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "NhmmvWicMmhXuKJo",
      "slug": "snapdrake",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad4f78f255db06622cd70d92ba7a6bccc870bbdae51ce5bdf776ab391528777e",
    "translatableHash": "sha256:93007c3d4539f4839ac2a57e1f82613a9b75334459cfed560d93bbc59badac49",
    "data": {
      "schemaVersion": 1,
      "name": "Snapdrake",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "Skilled kizidhar mages and gardeners handcraft these lovely creatures as much for their shuyookhs' aesthetic pleasure as for their protection. Creating a snapdrake requires first painstakingly constructing a frame of living wood in the shape of a drake before weaving thousands of colorful snapdragon flowers into intricate patterns to form its body and scales. Once complete, snapdrakes often serve kizidhars as a combination of guards, pets, and decorations for as long as they are well fed.",
      "armorClass": 26,
      "hitPoints": 144,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 11,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 3,
        "int": -2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 14,
        "performance": 16
      },
      "languages": [
        "arboreal",
        "common",
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "03YaLZZBbaQNXIgl",
          "name": "Fangs",
          "bonus": 14,
          "damage": "2d12+4 piercing",
          "traits": []
        },
        {
          "id": "u2nE2RBWdzAHKWHI",
          "name": "Tail Scythe",
          "bonus": 16,
          "damage": "2d10+6 slashing",
          "traits": [
            "deadly-d10",
            "finesse",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "oWKqHA1A1VMXlVm8",
          "name": "Alluring Scent",
          "kind": "passive",
          "description": "30 feet.\nA creature that enters the emanation must attempt a check (will, dc:25) save. On a failure, the target is Fascinated by the snapdrake and must use at least 1 action on its next turn to Stride closer to the snapdrake. On a success, the target is immune to the snapdrake's alluring scent for 1 hour.",
          "traits": [
            "aura",
            "olfactory",
            "plant",
            "primal"
          ]
        },
        {
          "id": "X8kGIbUcY8HDsZbb",
          "name": "Attack of Opportunity",
          "kind": "reaction",
          "description": "Tail scythe only",
          "traits": []
        },
        {
          "id": "7RD9b0b0ARSHZeZJ",
          "name": "Greater Forest Passage",
          "kind": "passive",
          "description": "The snapdrake ignores difficult terrain and greater difficult terrain from plants and fungi.",
          "traits": []
        },
        {
          "id": "HAmEsoCS7jucJCnL",
          "name": "Snapdrake Pollen",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25);\nMaximum Duration 8 rounds\nStage 1 1d6 poison damage plus Dazzled 1 (1 round)\nStage 2 1d6 poison damage plus dazzled 1 and Sickened 1 (2 rounds)\nStage 3 2d6 poison damage plus Confused and sickened 1 (2 rounds)",
          "traits": [
            "plant",
            "poison"
          ]
        },
        {
          "id": "dupxU1QENo5dwXMD",
          "name": "Speed Surge",
          "kind": "action",
          "description": "Frequency 3 times per day\nEffect The snapdrake moves up to twice its Speed.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "YsP0BTGgFbqhPJlq",
          "name": "Spray Pollen",
          "kind": "action",
          "description": "The snapdrake breathes a blast of pollen in a 40-foot cone. Creatures caught in the blast must succeed at a check (reflex, dc:25, basic) save or be exposed to snapdrake pollen.\nThe snapdrake can't use Spray Pollen again for [[/gmr 1d6 #Recharge Spray Pollen]].",
          "traits": [
            "arcane",
            "plant",
            "poison"
          ]
        },
        {
          "id": "33PlFFmeIlVuU3MF",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:veiled-current",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "qdVEmjf6e98KPzyK",
      "slug": "veiled-current",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3c5ee142968f0bdd3373b0570307cae5537efd17a7c82c34da21c997c3a9233c",
    "translatableHash": "sha256:85e8ce43db6272b37c6224092a848a44aaf2993a83736d7c4c27000ed27deff6",
    "data": {
      "schemaVersion": 1,
      "name": "Veiled Current",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Often considered cousins of phades, veiled currents are loose veils of wind who catch prey within their folds.\nMany elementals that roam the Plane of Air embody the mercurial formlessness and chaos of tumultuous storms.\nTempestuous Spirits\nAir elementals are often flighty contrarians, often more concerned with bringing about change than with the specific changes they enact. Art and writing created by such elementals is exceptionally rare, as they usually destroy their projects once the challenge and excitement of completing them fades.\nInvisible Courtiers\nFormless and invisible elementals are the favored children of Hshurha, the air elementals' mother goddess. They receive favorable treatment in her realm, Verglas Precessional, where they serve as trusted advisors, emissaries to other planes, and members of her personal retinue, in addition to performing clandestine tasks the goddess wishes to keep hidden.",
      "armorClass": 28,
      "hitPoints": 100,
      "speedFeet": 0,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 19,
        "will": 13
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 4,
        "int": 2,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 18,
        "athletics": 18,
        "deception": 15,
        "stealth": 18
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qFSCo3p1MlVcI00N",
          "name": "Static Fold",
          "bonus": 19,
          "damage": "2d10+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "reach-10"
          ]
        },
        {
          "id": "PY9PPpwEQDp58sjt",
          "name": "Static Scream",
          "bonus": 19,
          "damage": "2d8+4 sonic",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "qPogZDU09z1xVPny",
          "name": "Naturally Invisible",
          "kind": "passive",
          "description": "The veiled current is Invisible at all times. When they take a hostile action of any kind, the veiled current is Hidden instead of undetected as the vague outline of their humanoid form becomes faintly visible until the start of their next turn.",
          "traits": []
        },
        {
          "id": "vgox9yqL4wLDef8c",
          "name": "Envelop",
          "kind": "action",
          "description": "Requirements The veiled current begins their turn with a target of their size or smaller Grabbed\nEffect The veiled current maintains the Grab and coalesces around the creature, stretching themself into a semisolid veil that smothers the creature within. This thereafter has the same effect as if the veiled current had Engulfed the creature (DC 26, 1d8+8 bludgeoning, [[/act escape dc=26]], Rupture 17). As engulfing a creature is a hostile action, the veiled current is Hidden instead of undetected every round it has a creature engulfed.",
          "traits": []
        },
        {
          "id": "DeDS5VBuw7gFgoLs",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:harvest-regiment",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "YKEPPmyqTvVSApo8",
      "slug": "harvest-regiment",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:49df846d70f14ce08f2c86e2c2d6358b3e5608365af0c9c061e4e8c7b6220cf5",
    "translatableHash": "sha256:5c930cc6c796affa1bacf6842f12c403d30dfbdddea25f6625d7a323cebc7006",
    "data": {
      "schemaVersion": 1,
      "name": "Harvest Regiment",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "plant",
        "troop",
        "wood"
      ],
      "description": "Great fruiting trees grow in massive orderly rows in a region of the Plane of Wood called Armory Grove. Over the course of decades, a regiment tree's branches grow heavy, laden with fruits uncannily shaped like people. They're cultivated by retired warriors whose tireless work ensures that these fruits grow into a form suitable for battle. Their efforts instill tactical knowledge in these fruit warriors so they're prepared to fight as soon as they fall from the tree—which they do simultaneously, forming one battle-ready unit. Each soldier is equal in skill and similar in form, with a wooden outer shell that splits into portions as the flesh of the fruit inside ripens. A slain warrior contains seeds within its body that can slowly germinate in rich soil with enough water—or blood. Every battlefield can become a new garden.",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 3,
        "int": -1,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "athletics": 18,
        "survival": 17
      },
      "languages": [
        "fey",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "fire 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "D169IyNMvwWkytEj",
          "name": "Juice Shower",
          "kind": "passive",
          "description": "When a harvest regiment is critically hit or critically fails a save against a damaging effect, sticky fruit juices splash out. This affects all creatures in a 5-foot emanation. A splashed creature takes a –10-foot status penalty to its Speeds and everything is Concealed to it. A creature can Interact to clear off the juice.",
          "traits": []
        },
        {
          "id": "68wyGQfShfRqT1Ya",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8OOGjlq2r5ux1pNr",
          "name": "Raise Shells",
          "kind": "action",
          "description": "The troop raises fragments of their shells shaped like shields to gain a +2 circumstance bonus to AC until the start of their next turn.",
          "traits": []
        },
        {
          "id": "jOt2g9OMVZme0Mqs",
          "name": "Seed Volley",
          "kind": "action",
          "description": "The harvest regiment spits an orderly volley of hard seeds drawn from within their bodies. This volley is a 10-foot burst within 120 feet that deals 2d10 bludgeoning damage (check (reflex, dc:23, basic, options:area-effect) save). When the harvest regiment is reduced to 8 or fewer squares, this area decreases to a 5-foot burst.",
          "traits": []
        },
        {
          "id": "0uikf7fcqBI6U5xr",
          "name": "Shell Smash",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The harvest regiment engages in a coordinated melee attack against each enemy in a 5-foot emanation, with a check (reflex, dc:23, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d8+3)[bludgeoning|options:area-damage] damage\n2 (2d8+9)[bludgeoning|options:area-damage] damage\n3 (2d8+12)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "ltiErOyUItklz21B",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the harvest regiment Strides, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:nightwood-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "IBfXxdi8ja4095km",
      "slug": "nightwood-guardian",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ccb2f8d896c3109ce504c6c41a27af3160213638d7305b09efa41cf9e72030ca",
    "translatableHash": "sha256:0441d54cb0c63e99f541a3a5fbabcd55395e7ea3dddfc1944ada7454e9203f87",
    "data": {
      "schemaVersion": 1,
      "name": "Nightwood Guardian",
      "level": 9,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "giant",
        "troll",
        "wood"
      ],
      "description": "The nightwoods are parts of the Plane of Wood permanently bathed in darkness due to an absence of fluorescent plants. Here, the flora and fauna require darkness, not light, to thrive. Troll-like creatures known as nightwood guardians patrol these woods to ensure they remain in perpetual shadow. Considering themselves righteous gardens, they care little for the excuses of anyone else—intruders or residents. The guardians absolutely loathe the light, though it doesn't harm them as it does some varieties of creatures. Though wary of both light and any interloping lifeforms in their natural habitat, a nightwood guardian's fear turns easily to wrath, making the guardian a force of fury who seeks to drive out intruders.",
      "armorClass": 26,
      "hitPoints": 200,
      "speedFeet": 30,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 16,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 6,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 23,
        "intimidation": 21
      },
      "languages": [
        "fey",
        "jotun",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "kLU3lEyJqqcHrubO",
          "name": "Club",
          "bonus": 21,
          "damage": "3d8+6 bludgeoning",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "YvTvVk0J0c7B7zRw",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d12+6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "EAFYov5dCw4rFmcO",
          "name": "Fire-fueled Rage",
          "kind": "passive",
          "description": "When a nightwood guardian takes fire damage, they become enraged. The guardian gains 15 temporary Hit Points, deals 2 additional damage with melee Strikes, and has a –1 penalty to AC. They can't Raise their Shield or use actions with the concentrate trait except for Seek. This effect ends when the nightwood guardian no longer observes any fire for 1 round or when they fall Unconscious, whichever comes first.\nEffect: Rage",
          "traits": []
        },
        {
          "id": "I1RE8Exv3OsPJewN",
          "name": "Flesh of Wood",
          "kind": "passive",
          "description": "Wounds inflicted on a nightwood guardian turn their flesh to wood. When the guardian is reduced to 40 HP or fewer, their body becomes solid wood. They are stunned, have resistance 10 to all damage, and have regeneration 40 (deactivated by fire). This ends once the guardian has 100 HP or more, though they can choose to stay in this form indefinitely.",
          "traits": [
            "primal",
            "wood"
          ]
        },
        {
          "id": "KX6SGoIn4XiGyLoj",
          "name": "Light Blindness",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "FJpYnSPo2WbQUvKf",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "KmQAfMlNx21F4V8q",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "bJPqre7y9Os7F2ia",
          "name": "Shield Eyes",
          "kind": "passive",
          "description": "When a nightwood guardian has their shield raised, they protect their eyes, losing the Blinded and Dazzled conditions from light blindness and other light effects.",
          "traits": []
        },
        {
          "id": "5ekAlXpshxzOnliA",
          "name": "Nightwood Roar",
          "kind": "action",
          "description": "Frequency once per hour;\nEffect The guardian roars, snuffing out lights in a 30-foot cone. Ordinary flames and lights are extinguished, and the guardian attempts to counteract any magical light with a [[/r 1d20+21 #Counteract]] counteract modifier and a counteract rank of 5.",
          "traits": [
            "concentrate",
            "darkness",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:painted-stag",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "ikcWmhEdL5G0s9T4",
      "slug": "painted-stag",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:085d70e5b5fbd7dca900765db32a7b925428e29da56c3a7e65c320429b1fa816",
    "translatableHash": "sha256:716c21cfb9967f6c24061ed09e0b3cb6ec89a4006c3f0c63a1f13196b5bcb004",
    "data": {
      "schemaVersion": 1,
      "name": "Painted Stag",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "",
      "armorClass": 27,
      "hitPoints": 175,
      "speedFeet": 45,
      "perception": {
        "modifier": 21,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 12,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 5,
        "int": 2,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "athletics": 18,
        "intimidation": 23,
        "nature": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "29vTaeHL8r0pOrAZ",
          "name": "Antler",
          "bonus": 20,
          "damage": "2d12+7 piercing",
          "traits": []
        },
        {
          "id": "3Wt549mXk1Fn8I98",
          "name": "Hooves",
          "bonus": 20,
          "damage": "2d10+7 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "lBhRZafxOlZpxCMN",
          "name": "Regeneration 10 (Deactivated by Fire)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "93DuUwpGPYBXrzCb",
          "name": "Mauler",
          "kind": "passive",
          "description": "A painted stag gains a +5 circumstance bonus to damage rolls against creatures it has grabbed.",
          "traits": []
        },
        {
          "id": "KSf86thTKJea2Lup",
          "name": "Painted Dance",
          "kind": "action",
          "description": "The stag shakes the wooden plating along its body in a cacophonous clatter that sets its painted patterns dancing. All creatures within 60 feet of the painted stag who can see or hear it must attempt a check (will, dc:28) save; a creature Grabbed by the stag takes a –4 circumstance penalty to its save. Regardless of the result of its save, each creature is temporarily immune for 1 hour.\nCritical Success The creature is unaffected.\nSuccess The creature is Fascinated by the painted stag for 1 round.\nFailure The creature is Stunned 2 and fascinated by the painted stag for as long as it's stunned.\nCritical Failure As failure, except Stunned 4.",
          "traits": [
            "auditory",
            "mental",
            "plant",
            "primal",
            "visual"
          ]
        },
        {
          "id": "I7iUFAIbVOIs7d2N",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:nanoshard-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "nhIxIC4O6XGUZ8Ng",
      "slug": "nanoshard-swarm",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:659afd63f379a3d4328ca431f21ccac9257f3445f498b0b0ddad58797d3e3cb8",
    "translatableHash": "sha256:2fa7288be4f69b22ea64baff2e10baa18d40a611d38c7b9d9ab83b89fea5fa9f",
    "data": {
      "schemaVersion": 1,
      "name": "Nanoshard Swarm",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "metal",
        "swarm"
      ],
      "description": "This bizarre entity is actually a massive collective consisting of tens of thousands of constituent parts, each a tiny metal sphere barely the size of a pebble. Controlled by a single elemental spirit, the swarm is capable of flowing like liquid through the smallest openings before shaping itself into a powerful combatant, a solid wall, or any other form circumstances might require.",
      "armorClass": 28,
      "hitPoints": 120,
      "speedFeet": 0,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 21,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 6,
        "con": 4,
        "int": 3,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 19,
        "stealth": 21
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "swarm-mind",
          "precision"
        ],
        "resistances": [
          "bludgeoning 5",
          "electricity 10",
          "piercing 10",
          "slashing 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [
        {
          "id": "jVDBaWDk3TTVB77A",
          "name": "Tendril",
          "bonus": 19,
          "damage": "2d8+9 piercing",
          "traits": [
            "reach-60",
            "versatile-b"
          ]
        }
      ],
      "actions": [
        {
          "id": "PDJpiysE7cyGUJAi",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "XgdjHjlabCPNgzKS",
          "name": "Electromagnetic Dispersal",
          "kind": "passive",
          "description": "When a nanoshard swarm takes electricity damage, they automatically shift into swarm form.",
          "traits": []
        },
        {
          "id": "1qTDlnvEBHJmpgBw",
          "name": "Barrier Form",
          "kind": "action",
          "description": "Requirements The nanoshard swarm is in swarm form\nEffect The nanoshard swarm forms a continuous 6-inch-thick solid wall, up to 60 feet long and 10 feet high, originating from any one square in its current space. The wall can follow any path, with each 5 feet being placed on the border between squares. It doesn't need to stand vertically, so it can form a bridge or set of stairs, for example. The wall must be formed in an unbroken open space where its edges don't pass through any creatures or objects.\nA single 5-foot-by-5-foot section of the wall can be destroyed by dealing 18 points of damage to it, which also reduces the swarm's total Hit Points. A nanoshard swarm can't be knocked Prone or forcibly moved while in barrier form, nor can it voluntarily move. A nanoshard swarm in barrier form can originate tendril attacks from any square of its wall.",
          "traits": [
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "mb635ue7C5Y0RT7U",
          "name": "Battle Form",
          "kind": "action",
          "description": "Requirements The nanoshard swarm is in swarm form\nEffect The nanoshard swarm coalesces into a Huge shape that looks like a humanoid or beast and can hold items. In battle form, its Speed is 15 feet, it's Clumsy 1, and it has the following Strike.\nMelee 1 limb (reach 20 feet), Damage 4d8+9 bludgeoning",
          "traits": [
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "nC6LYHJokLTFcpHk",
          "name": "Engulf (Swarm Form)",
          "kind": "action",
          "description": "check (reflex, dc:27, options:damaging-effect,inflicts:grabbed,inflicts:slowed), (2d8+6)[bludgeoning] damage, [[/act escape dc=27]], Rupture 18",
          "traits": []
        },
        {
          "id": "VmxQQtJfIzinXz24",
          "name": "Swarm Form",
          "kind": "passive",
          "description": "The nanoshard swarm collapses into its natural form: a Huge sea of tiny metal spheres. It drops anything it's holding. While in swarm form, the nanoshard swarm's Speed is 25 feet, it can move through any area large enough for a single sphere to fit through without having to Squeeze, and it gains Engulf.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:jann-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "RObxZM2z4P6ZW3hN",
      "slug": "jann-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d5b0364c65adeec4bf455710becf21d462edd8d4d9936ff4a3d018d12d767397",
    "translatableHash": "sha256:46a379a55b78cc0a1918b46a5a9027ea69ce5547f155b5b6851e7fe0a106ec73",
    "data": {
      "schemaVersion": 1,
      "name": "Jann Shuyookh",
      "level": 9,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "air",
        "earth",
        "elemental",
        "fire",
        "genie",
        "metal",
        "water",
        "wood"
      ],
      "description": "Regarded as the progenitors of geniekind, janns hold a position of esteem above the genies tied to specific planes. They possess an inborn ability to grant wishes, which the other branches of geniekind lack and greatly envy. Nomadic jann shuyookhs rarely hold court, preferring to gather only when the need arises to perform great deeds. Lesser janns respect and venerate these leaders for their wisdom and total dedication to preserving the honor and reputation of their people. A jann shuyookh reads portents and omens when dealing with duplicitous mortals.",
      "armorClass": 27,
      "hitPoints": 155,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 17,
        "will": 18
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 4,
        "int": 3,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "acrobatics": 17,
        "arcana": 18,
        "athletics": 19,
        "crafting": 16,
        "deception": 17,
        "diplomacy": 19,
        "survival": 18
      },
      "languages": [
        "common",
        "muan",
        "petran",
        "pyric",
        "sussuran",
        "talican",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "air 10",
          "earth 10",
          "fire 10",
          "metal 10",
          "water 10",
          "wood 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EOTMPxonKrBF8s7c",
          "name": "Scimitar",
          "bonus": 20,
          "damage": "2d6+12 slashing",
          "traits": [
            "forceful",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "EP54lipl8N41LGL0",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d8+9 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "KJfqkdRYLvca9ryU",
          "name": "Composite Longbow",
          "bonus": 18,
          "damage": "2d8+9 piercing",
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
          "id": "CLXK9ezofX19e4YC",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "3LJ5loWR0ewNBTdA",
          "name": "Commanding Presence",
          "kind": "passive",
          "description": "20 feet. A creature that enters the aura must succeed at a check (will, dc:26) save or be Frightened 2 (Frightened 3 on a critical failure), and is then temporarily immune for 1 minute. A genie (with the exception of another jann) takes a –4 circumstance penalty to their save.",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "pZqtLVdHTC8R8sRI",
          "name": "Elemental Resistance",
          "kind": "passive",
          "description": "The jann shuyookh's elemental resistance applies to cold, electricity, and fire damage, as well as all damage from elemental sources (including environmental damage from the elemental planes and damage from anything with the air, earth, fire, metal, water, or wood trait).",
          "traits": []
        },
        {
          "id": "Sp1wwUYNjUeg1sgS",
          "name": "All Made One",
          "kind": "action",
          "description": "The jann shuyookh calls upon all the elements that make up their being and chooses one. They gain an additional arcane spell they can cast at will and empower their Strikes with the element, dealing an extra 1d6 damage of the listed type. These benefits last until the shuyookh uses this ability again.\n• Air: Lightning Bolt, 1d6 electricity;\n• Earth: One with Stone, 1d6 bludgeoning;\n• Fire: Fireball, 1d6 fire;\n• Metal: Noxious Metals, 1d6 electricity;\n• Water: Wall of Water, 1d6 bludgeoning;\n• Wood: Wall of Thorns, 1d6 piercing.",
          "traits": []
        },
        {
          "id": "yibXjLPFTeJxtcIx",
          "name": "Change Shape",
          "kind": "action",
          "description": "The jann transforms into a Small or Medium elemental or animal. This doesn't affect the gennayn's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "pP27oaARt0s5Xz5e",
          "name": "Wanderer's Wish",
          "kind": "action",
          "description": "Frequency three times per year\nEffect The jann instantly grants the benefits of a critical success with the wish ritual to a mortal creature. This has no cost. That creature specifies what they wish for, but the interpretation is up to the jann. A jann typically attempts to grant wishes in a way that encourages growth and exploration. A summoned jann can't use this ability.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "fekXdq8i846AFPNf",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "OrtJAYemvyDPEtSO",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "RYvffoz1WcB6Y1kk",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "32XaB2uurZp3K791",
              "name": "Invisibility",
              "rank": 4
            },
            {
              "id": "NMbkjHuvsdYoCyk6",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "yxbvKyaekQNgGx0q",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "7C7NW3UQWfOrOlTG",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or the Universe only)",
              "rank": 7
            }
          ]
        },
        {
          "id": "FFExznIJB0kNkVF3",
          "name": "All Made One Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "E03m3fE5AteUrijW",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "GPzYefMg1QJFlxJr",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "04QlE5aq6QHreFXd",
              "name": "Noxious Metals",
              "rank": 3
            },
            {
              "id": "WhmNi19hDNfbr6vN",
              "name": "One with Stone",
              "rank": 3
            },
            {
              "id": "V3ZxANcdFHWTWlFy",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "mBtxEk77wGFHDd1N",
              "name": "Wall of Water",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:crystal-strider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "5nf90vfzOVFbGEZZ",
      "slug": "crystal-strider",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc8760e91b249bf55bff54f0c01ffcb035f42a71fbe2f1cbc7453169a96ab14e",
    "translatableHash": "sha256:ff38ec1667e51962933f8ea703a00d979f41d9ef7bbcc34f1911b20c55584f2c",
    "data": {
      "schemaVersion": 1,
      "name": "Crystal Strider",
      "level": 10,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "Each long, thin leg of a crystal strider is a single enormous crystal, typically quartz or selenite. The strider uses this panoply of legs and a fluctuating physical structure to rapidly move about crystalline caverns, unimpeded by terrain.\nThe vast ranks of earth elementals have been slow to respond to the return of the elemental lords and the Planes of Metal and Wood. These events have not broken the mountains, nor have they blown away the sands.\nEarthy Emotions\nEarth elementals talk even less than most elementals. They're ponderous, weighing decisions so slowly they can crush the energy from a discussion. Their foremost concern is whether a situation can be endured. Though a rare or resplendent treasure might entice an earth elemental, it's difficult to spur any sense of urgency in them without the presence of an immediate threat.",
      "armorClass": 29,
      "hitPoints": 230,
      "speedFeet": 45,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 20
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 5,
        "int": 0,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 23,
        "nature": 20
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "sonic 10"
        ]
      },
      "attacks": [
        {
          "id": "pF2QL7JjjMH6j4tW",
          "name": "Leg",
          "bonus": 21,
          "damage": "2d10+13 bludgeoning",
          "traits": [
            "reach-15",
            "versatile-p"
          ]
        },
        {
          "id": "Sa5dNGxJyc6rWCR7",
          "name": "Crystal Dart",
          "bonus": 21,
          "damage": "2d10+13 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "PJZKntLQlOC6KR5q",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "flSGv5e9wJGuYtcM",
          "name": "Crystal Refraction",
          "kind": "passive",
          "description": "Trigger The crystal strider is targeted by a light effect\nEffect The strider redirects the triggering effect to a different creature of its choice within 30 feet or absorbs the effect harmlessly, reducing the number of rounds left to recharge Release Light by 1.",
          "traits": []
        },
        {
          "id": "V6dyyCeFmrwIonpS",
          "name": "Precise Steps",
          "kind": "passive",
          "description": "The crystal strider's many narrow legs allow it to ignore difficult terrain.",
          "traits": []
        },
        {
          "id": "cYdM7ZVGHjnB0zhG",
          "name": "Release Light",
          "kind": "action",
          "description": "The strider emits the light that continually refracts within them to cast Chromatic Ray as an innate primal spell heightened to 5th rank, with a +21 spell attack roll. The crystal strider can't Release Light again for [[/gmr 1d4 #Recharge Release Light]].",
          "traits": [
            "attack",
            "light",
            "primal"
          ]
        },
        {
          "id": "FlWyIc9ZgwfrFCQf",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, leg, check (reflex, dc:29, basic)",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "mEjFC58nnCMIwuSM",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "ULmLh3PqFkfjieya",
              "name": "Chromatic Ray (Release Light)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:asp-of-grief",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "IPKzI7XwILuDc21S",
      "slug": "asp-of-grief",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:12505f714516f0499886d2f3bd646856e949b06aef5bf2d0477ff1155ecf5db7",
    "translatableHash": "sha256:7367f1fb424f6917eef737aad8c5b567721cd29bd59cfc3c444d76d9dcd48ce2",
    "data": {
      "schemaVersion": 1,
      "name": "Asp of Grief",
      "level": 10,
      "rarity": "common",
      "size": "small",
      "traits": [
        "beast",
        "elemental",
        "metal"
      ],
      "description": "On the Plane of Metal, a soft whisper and gentle jingle often accompany the tempestuous winds, while what appear to be gold ribbons twist and writhe through the air. In actuality, these are asps of grief—intelligent, snakelike creatures drawn to strong emotions. The iron irises of their eyes allow them to see the ever-shifting magnetic fields of the Plane of Metal, which the asps can use to sail across the skies.\nAsps of grief prey on sorrow and heartache, and times of loss, mourning, and bereavement attract them. Wearing delicate iron bells to announce their arrivals at funerals, battlefields, and the traditional columbaria built for the plane's dead, asps of grief shake their heads, making their bells chime and alerting mourners to their presence. \"Will you share your sorrow with me?\" they ask, their gentle voices low and sibilant.\nIf the bereaved agrees, the asps' tongues flick out, tasting the anguish of the living, sipping on sadness and fear, and providing a temporary reprieve from suffering. Though the asps are associated with death, most denizens of the Plane of Metal see them as good omens.\nIntensely curious creatures, asps of grief crave information about magic and the multiverse. They might attach themselves to adventuring parties or ask wanderers they meet for any obscure arcane knowledge they may have come across on their journeys. In exchange, the asps of grief offer to help these travelers work through any anguish or trauma they may be carrying—or at least ease their emotional pain for a time.\nCalling The Asps\nIn the Plane of Metal, funeral rites often include placing the deceased upon tall towers surrounded by dishes of water. Chunks of sodium, a silvery-white alkali metal, dance across the surface of the water and catch fire, sending plumes of hydrogen gas into the air. As the asps of grief skate upon the magnetic fields, they can sense this announcement of death and sorrow and follow the trail back to the mourners.",
      "armorClass": 31,
      "hitPoints": 150,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 21,
        "will": 21
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 3,
        "int": 7,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "acrobatics": 21,
        "arcana": 21,
        "nature": 19,
        "survival": 21
      },
      "languages": [
        "common",
        "empyrean",
        "talican"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 10 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lAFC6asztkUt3L4D",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d12+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "CsR1uV2MBbLrpBq1",
          "name": "Magnetic Vision",
          "kind": "passive",
          "description": "An asp of grief can see magnetic fields, allowing it to detect large sources of magnetic metal (Bulk 1 or greater) as a precise sense.",
          "traits": []
        },
        {
          "id": "q3sU40uk6Pxc25iI",
          "name": "+1 Status to All Saves vs. Emotion",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "5En3GVeB81lMRDkk",
          "name": "Curtain of Calm",
          "kind": "passive",
          "description": "20 feet. The asp of grief consumes the emotions of the creatures around it. An enemy that begins its turn in the aura must attempt a check (will, dc:29) save. If it fails, the asp consumes its grief. The creature feels a lack of feelings and motivation, reducing its frightened value by 1 and becoming Stupefied 1 (or Stupefied 2 on a critical failure) for [[/gmr 1d4 #rounds]]. Regardless of the result of the saving throw, the creature is temporarily immune to curtain of calm for 1 minute. The asp becomes charged with grief (see iron grief) for 1 minute whenever a creature fails this saving throw.",
          "traits": [
            "arcane",
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "1hpT9mMYcOGYWMo4",
          "name": "Iron Grief",
          "kind": "passive",
          "description": "If the asp casts Magnetic Acceleration while charged with grief, it can either heighten the spell to 5th rank or target up to three creatures instead of one, rolling separately against each. After casting the spell, the asp is no longer charged with grief.",
          "traits": []
        },
        {
          "id": "bMKtNrEvbnkJNA9L",
          "name": "Magnetic Traveler",
          "kind": "passive",
          "description": "An asp can ride magnetic fields to travel long distances. In a location with strong magnetic fields (including the Plane of Metal and Golarion), its travel Speed is doubled if it's flying.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "wUsVoXGlUYHCBhBq",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 29,
          "spells": [
            {
              "id": "0CBdHjqooriFMj1Z",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "sbyTxzlsc1PL7ET4",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "LhBLa6L9DOV20OdD",
              "name": "Magnetic Acceleration (At Will; See Iron Grief)",
              "rank": 3
            },
            {
              "id": "hYasqtNwC6jOjujB",
              "name": "Magnetic Attraction",
              "rank": 5
            },
            {
              "id": "SOV5mdM8zirYmS3J",
              "name": "Magnetic Repulsion",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:solar-crow",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Kv6zyQC3JCEWWwvf",
      "slug": "solar-crow",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6da8213650f2d5e432389d3bbafbd40ff1d535ab9fcdd9f4681ab9a6d9ba34c6",
    "translatableHash": "sha256:7b142b1d3fda10f4d738afb144215434c803b2a2833764a5a688eb3bc5bdf8fc",
    "data": {
      "schemaVersion": 1,
      "name": "Solar Crow",
      "level": 10,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "These enormous three-legged elementals resemble crows with flaming feathers, said to shine as bright as the sun. They nest in the smoldering Forest of Mulberry Coals, living in flocks of eight to a dozen, with ten being the most common.\nThe ifrits of the Dominion of Flame conscript even more of the plane's fire elementals in preparation for new wars in the returned planes, even mobilizing ones that rarely travel near settlements.\nStory Of Infamy\nAncient tales from dragon-ruled Tian Xia tell of a flock of solar crows who wreaked havoc upon the Plane of Wood, driving an herb that could grant immortality to extinction before coming to terrorize Tian Xia itself. All but one of the crows were then shot down by a legendary archer.",
      "armorClass": 30,
      "hitPoints": 170,
      "speedFeet": 20,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 22,
        "will": 17
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 22,
        "deception": 21,
        "nature": 19
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "YtJsvJRFuaI7Cj4C",
          "name": "Beak",
          "bonus": 22,
          "damage": "2d10+8 piercing; 2d6 fire",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "SS6DwiOFrsD4oMKO",
          "name": "Talon",
          "bonus": 22,
          "damage": "2d6 fire; 1d10+8 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "tP30sUTOdT3hpQLR",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Smoke doesn't impair a solar crow's vision; they ignore the Concealed condition from smoke.",
          "traits": []
        },
        {
          "id": "DqPAoJly5Ta8cMyV",
          "name": "Glinting Wing",
          "kind": "reaction",
          "description": "Trigger A creature within 120 feet attempts to target the solar crow\nEffect The solar crow defensively repositions a wing to shine light into the attacker's eyes. The target is Dazzled for the duration of the triggering effect, granting the solar crow concealment against it.",
          "traits": [
            "light",
            "visual"
          ]
        },
        {
          "id": "d5uALvJpgHnh3H6s",
          "name": "Glow",
          "kind": "passive",
          "description": "25 feet. The solar crow casts bright light in a 25-foot emanation (and dim light for the next 25 feet).",
          "traits": [
            "aura",
            "fire",
            "light"
          ]
        },
        {
          "id": "EOdKm66pzAoMcJfs",
          "name": "Blinding Heat",
          "kind": "action",
          "description": "The solar crow expands its wings and unleashes blazing hot, blinding light in a 120-foot emanation. Each creature in the area takes 9d6 fire damage with a check (reflex, dc:29, options:area-effect,damaging-effect) save. The crow can't use Blinding Heat again for [[/gmr 1d4 #Recharge Blinding Heat]], and its glow aura is deactivated during this time.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Dazzled for 1 round.\nFailure The creature takes full damage and is Blinded for 1 round.\nCritical Failure The creature takes double damage and is blinded for 1 minute.",
          "traits": [
            "fire",
            "incapacitation",
            "light",
            "visual"
          ]
        },
        {
          "id": "eQjPFKgxy8qnzjgs",
          "name": "Burning Talons",
          "kind": "passive",
          "description": "A creature Grabbed by the solar crow takes 1d4 persistent fire damage. It can't recover from this damage while grabbed by the crow.",
          "traits": []
        },
        {
          "id": "rzCOxDOLHQP6oaiA",
          "name": "Snatch",
          "kind": "passive",
          "description": "A solar crow can Fly at half Speed while it has a creature Grabbed or Restrained in its talons, carrying that creature along with it.",
          "traits": []
        },
        {
          "id": "gD0aUvMJXvihGMxB",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:jaathoom-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "O3Rjdf00nJOHF4PE",
      "slug": "jaathoom-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:88caecaf50ac9134691bba1b6552399e4e65d3b50bba39bee683d33ed4a9f399",
    "translatableHash": "sha256:c67e2eaa86a2b73ee81f68cd855c5bf8b904ebc16ff289d25f7085f009005d15",
    "data": {
      "schemaVersion": 1,
      "name": "Jaathoom Shuyookh",
      "level": 10,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "air",
        "elemental",
        "genie"
      ],
      "description": "",
      "armorClass": 29,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 3,
        "int": 5,
        "wis": 3,
        "cha": 6
      },
      "skills": {
        "acrobatics": 21,
        "arcana": 20,
        "athletics": 19,
        "crafting": 17,
        "deception": 22,
        "diplomacy": 22,
        "society": 20,
        "stealth": 17
      },
      "languages": [
        "common",
        "sussuran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "cZHML8jmy9px0gWA",
          "name": "Jambiya",
          "bonus": 24,
          "damage": "2d4+11 piercing; 1d12 electricity",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-10",
            "versatile-s"
          ]
        },
        {
          "id": "OUZChsPQc45jyzas",
          "name": "Fist",
          "bonus": 23,
          "damage": "1d6+11 slashing; 1d12 electricity",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "HZJJBWPq0H9sWKW1",
          "name": "Jambiya",
          "bonus": 24,
          "damage": "2d4+11 piercing; 1d12 electricity",
          "traits": [
            "agile",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        },
        {
          "id": "SSPvyCHI5QWf3XAu",
          "name": "Crashing Wind",
          "bonus": 23,
          "damage": "3d8+8 bludgeoning",
          "traits": [
            "air",
            "arcane"
          ]
        }
      ],
      "actions": [
        {
          "id": "5R5atGMnCJYPb4wo",
          "name": "Cloud of Visions",
          "kind": "passive",
          "description": "120 feet. A jaathoom has telepathy 60 feet but can only show images rather than speaking.",
          "traits": [
            "arcane",
            "aura",
            "mental"
          ]
        },
        {
          "id": "00l1lN9SnCdCzRES",
          "name": "Naturally Invisible",
          "kind": "passive",
          "description": "The jaathoom is Invisible at all times. They can become visible or return to invisibility as a single action, which has the concentrate trait.",
          "traits": []
        },
        {
          "id": "NDK6BchYciYoGCxS",
          "name": "Turbulent Skies",
          "kind": "passive",
          "description": "20 feet. Swirling winds make all squares in the emanation difficult terrain for Striding and Flying creatures. Creatures with the air trait are immune. The jaathoom can activate or deactivate this aura as a single action, which has the concentrate trait.",
          "traits": [
            "air",
            "arcane",
            "aura"
          ]
        },
        {
          "id": "W7sJLtxe4QKbt59a",
          "name": "Change Shape",
          "kind": "action",
          "description": "",
          "traits": [
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "yOcgYMPapXUPjKSq",
          "name": "Hurricane Blast",
          "kind": "action",
          "description": "Frequency once per round\nEffect The jaathoom moves all creatures without the air trait in their turbulent skies aura 20 feet directly away, clockwise, or counterclockwise. A creature avoids being moved if it succeeds at a check (fortitude, dc:29) save.",
          "traits": [
            "air",
            "arcane"
          ]
        },
        {
          "id": "ITOgNvnLcMplroCg",
          "name": "Impressive Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh's visions of the subject's future inform how it interprets the wish.",
          "traits": [
            "downtime"
          ]
        },
        {
          "id": "dDHxzADSN2FkryKO",
          "name": "Ominous Dreams",
          "kind": "action",
          "description": "The jaathoom sends a prophetic dream into the mind of a sleeping creature within 60 feet. An unwilling creature can avoid the vision if it succeeds at a check (will, dc:32) save. The jaathoom chooses the dream's subject but not its exact events. The target sees a brief vision of its future related to that subject, with the effect of augury. If the result is bad or mixed, the creature is Frightened 2 and doesn't start to recover from being frightened until it wakes.",
          "traits": [
            "mental",
            "prediction"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "xVZDXMa9KUcC9QG9",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "ov6Gd4JlGZGgCXjg",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "tGjHhuKvyCf1PAVg",
              "name": "Ill Omen",
              "rank": 4
            },
            {
              "id": "Q22kYjDS4gR9Bu1y",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "rURbR6Ozj2eTgSej",
              "name": "Illusory Creature",
              "rank": 5
            },
            {
              "id": "gLJ26AJKsPUQAHTt",
              "name": "Illusory Object",
              "rank": 5
            },
            {
              "id": "859mNCKTX3ndHY69",
              "name": "Nightmare",
              "rank": 5
            },
            {
              "id": "wPrBjP6DXqzb8Mfc",
              "name": "Pressure Zone",
              "rank": 5
            },
            {
              "id": "BwZ6g4AeDeuHRN8I",
              "name": "Sleep",
              "rank": 5
            },
            {
              "id": "HaeokhcEYsIX3l25",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or Universe Only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:sootsoldiers",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "uEabVqGzN4TprwHw",
      "slug": "sootsoldiers",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:74a891cf2889e0ad5ec6445901e504a2803654ab249ad98249269b75b5f6942b",
    "translatableHash": "sha256:3680048d1a3be7e218be47f28f7847222047cf466cf126e594bb1a67c8df61c6",
    "data": {
      "schemaVersion": 1,
      "name": "Sootsoldiers",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire",
        "troop"
      ],
      "description": "Powerful deities and warlords strive for dominance over the Plane of Fire and the rest of the Inner Sphere in order to prove fire's supremacy. Armies of flaming soldiers go to war against each other on battlefields of smoke and smoldering char, all unable to bring their full power to bear. Ymeri, the vicious and victorious Queen of the Inferno, commands legions of sootsoldiers: elementals capable of battling the armies of her foes and, even when destroyed, rising from the ashes of the Eternal Furnace, scorched and triumphant.",
      "armorClass": 30,
      "hitPoints": 165,
      "speedFeet": 40,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 2,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 21,
        "nature": 18
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "cold 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "AFZiY3tuXB7jiJhx",
          "name": "Ashen Smoke",
          "kind": "passive",
          "description": "When the sootsoldiers are reduced by an HP Threshold or are reduced to 0 HP, the destroyed soldiers crumble to a cloud of ash-laden smoke in 20-foot burst centered on the sootsoldiers. All creatures within the cloud are Concealed, and all creatures outside it are concealed to those inside. The smoke lasts for 1 minute or until dispersed by a strong wind.",
          "traits": []
        },
        {
          "id": "0PugLr7o9miNLpUj",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "UP38SLo1ZdNrjUTq",
          "name": "Incinerating Grasp",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The sootsoldiers reach to constrain each enemy within 5 feet in their fiery clutches (check (reflex, dc:26, basic) save). The damage and additional effects depend on the number of actions.\n1 2d8 fire damage\n2 (3d8+7)[fire] damage plus Grabbed\n3 (4d8+7)[fire] damage plus grabbed",
          "traits": []
        },
        {
          "id": "VdtIts9Ey8isU5c7",
          "name": "Seething Flash",
          "kind": "action",
          "description": "The sootsoldiers reignite and rush across the battlefield, Forming Up and Striding twice. At the end of this movement, a wave of flame and heat pours off the sootsoldiers, dealing 4d8 fire damage to other creatures in a 10-foot emanation, with a check (reflex, dc:29, basic, options:area-effect,inflicts:prone) save. A creature that critically fails its save is also knocked Prone.",
          "traits": [
            "fire",
            "primal"
          ]
        },
        {
          "id": "2ZvvjXtNXVZUB1oz",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Sootsoldiers ignore the Concealed condition from smoke.",
          "traits": []
        },
        {
          "id": "DbF3D4q2zyV5ogVv",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the sootsoldiers Stride, they first Form Up as a free action to condense into a 20-foot-by-20- foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any of the sootsoldiers' squares enters difficult terrain, the extra movement cost applies to the whole troop.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:abysium-horror",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "YTTKgBLXSIna2KNO",
      "slug": "abysium-horror",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3e3c7abc054b41006e05eef0771992a687420731cfdad2ee3fbfaea948029daf",
    "translatableHash": "sha256:ef61815b6d9a5ed90240b3719b83cf9a84955ac34f959755e79f1d861ddf8522",
    "data": {
      "schemaVersion": 1,
      "name": "Abysium Horror",
      "level": 10,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "A monstrous spider-like creature composed of the radioactive skymetal abysium, this deadly predator contaminates anything it touches.",
      "armorClass": 29,
      "hitPoints": 215,
      "speedFeet": 30,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 17
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 5,
        "int": 3,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "athletics": 23,
        "survival": 19
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "S6oKXYfqdJ5hjtpb",
          "name": "Claw",
          "bonus": 23,
          "damage": "2d4 poison; 2d8+10 slashing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "aoCeGBRCxqnCGCqc",
          "name": "Radioactive Shrapnel",
          "bonus": 23,
          "damage": "2d4 poison; 2d8+7 piercing",
          "traits": [
            "brutal",
            "propulsive"
          ]
        }
      ],
      "actions": [
        {
          "id": "LiCGsOpImpmb5XPd",
          "name": "Green Glow",
          "kind": "passive",
          "description": "20 feet.\nAn abysium horror constantly emanates a powerful energy toxic to life. This radiation sheds dim light in the area. Any creature beginning its turn in the aura must attempt a check (fortitude, dc:27) save, becoming Sickened 1 on a failure or Sickened 2 on a critical failure. Once out of the aura, an affected creature's sickened condition automatically decreases by 1 at the beginning of each of its turns.",
          "traits": [
            "aura",
            "poison",
            "radiation"
          ]
        },
        {
          "id": "cfJq41ZCSn0BeF4R",
          "name": "Heavy",
          "kind": "passive",
          "description": "As long as it is immobile, the elemental can't be forcibly moved or knocked Prone. If it takes a move action, it loses this immunity until the start of its next turn.",
          "traits": []
        },
        {
          "id": "Av83UM2Xggu6ncAG",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, claw, check (reflex, dc:27, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:sootsoldiers-the-radiant-host",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "zBUFjuz3dR8bacee",
      "slug": "sootsoldiers-the-radiant-host",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5f507f0afc4804320824baf07daf1118a6d4e26b491cf76aff850e6cd064e0a7",
    "translatableHash": "sha256:1cbd2131ec6c249e6f6413716e1a9e3a56ce213ea33b3676ad226d685fa7314f",
    "data": {
      "schemaVersion": 1,
      "name": "Sootsoldiers (The Radiant Host)",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire",
        "troop"
      ],
      "description": "Powerful deities and warlords strive for dominance over the Plane of Fire and the rest of the Inner Sphere in order to prove fire's supremacy. Armies of flaming soldiers go to war against each other on battlefields of smoke and smoldering char, all unable to bring their full power to bear. Ymeri, the vicious and victorious Queen of the Inferno, commands legions of sootsoldiers: elementals capable of battling the armies of her foes and, even when destroyed, rising from the ashes of the Eternal Furnace, scorched and triumphant.",
      "armorClass": 30,
      "hitPoints": 165,
      "speedFeet": 40,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 2,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 21,
        "nature": 18
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "cold 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "AFZiY3tuXB7jiJhx",
          "name": "Ashen Smoke",
          "kind": "passive",
          "description": "Sootsoldiers who serve the other Lord of Fire, the Lambent King Atreia, are covered in glowing embers instead of black char.\nWhen the sootsoldiers are reduced by an HP Threshold or are reduced to 0 HP, the destroyed soldiers crumble to a cloud of ash-laden smoke in 20-foot burst centered on the sootsoldiers. Any creature in the area must attempt a check (reflex, dc:29) save. On a failure, for 1 minute that creature is Dazzled and its invisibility is negated.",
          "traits": []
        },
        {
          "id": "0PugLr7o9miNLpUj",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "UP38SLo1ZdNrjUTq",
          "name": "Incinerating Grasp",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The sootsoldiers reach to constrain each enemy within 5 feet in their fiery clutches (check (reflex, dc:26, basic) save). The damage and additional effects depend on the number of actions.\n1 2d8 fire damage\n2 (3d8+7)[fire] damage plus Grabbed\n3 (4d8+7)[fire] damage plus grabbed",
          "traits": []
        },
        {
          "id": "VdtIts9Ey8isU5c7",
          "name": "Seething Flash",
          "kind": "action",
          "description": "The sootsoldiers reignite and rush across the battlefield, Forming Up and Striding twice. At the end of this movement, a wave of flame and heat pours off the sootsoldiers, dealing 4d8 fire damage to other creatures in a 10-foot emanation, with a check (reflex, dc:29, basic, options:area-effect,inflicts:prone) save. A creature that critically fails its save is also knocked Prone.",
          "traits": [
            "fire",
            "primal"
          ]
        },
        {
          "id": "2ZvvjXtNXVZUB1oz",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Sootsoldiers ignore the Concealed condition from smoke.",
          "traits": []
        },
        {
          "id": "DbF3D4q2zyV5ogVv",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the sootsoldiers Stride, they first Form Up as a free action to condense into a 20-foot-by-20- foot area (minus any missing squares), then move up to their Speed. This works just like a Gargantuan creature moving; for instance, if any of the sootsoldiers' squares enters difficult terrain, the extra movement cost applies to the whole troop.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:blustering-gale",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "6VCNPJ3xPw4Js52V",
      "slug": "blustering-gale",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dad43b04c2558cb17ec6e3a2a14c13121852d7647913255da9b4ae1166dbf95a",
    "translatableHash": "sha256:d1007b60e2493d972327f38a0462f129159d1599e6c27f333ee9431aaef450de",
    "data": {
      "schemaVersion": 1,
      "name": "Blustering Gale",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "air",
        "elemental",
        "troop"
      ],
      "description": "Blustering gales are among the least of air elementals: spirits of the small breezes who sometimes arise in the wake of mightier creatures, like the downdraft of a swallow's wing or the sharp expulsion of a vigorous cough. Unwilling or unable to act effectively alone, they form into \"gales,\" collections of weak elementals that use their combined power to hurl insults and pummel those who defy them in a misguided attempt to rise above their humble origins.\nTogether, they force other creatures to do their bidding, then move on when they grow bored. While most gales claim their abandoned minions were useless, in truth, blustering gales lack the commanding presence and confidence to retain vassals for long.\nLackeys\nBlustering gales sometimes serve as heralds or enforcers for other creatures (including cloud dragons, jaathooms, and other powerful air elementals), bullying and intimidating others at the behest of a more influential overlord. While blustering gales often feel secure and confident in these roles, they rankle at subservience, and rarely feel content with such an arrangement for long.",
      "armorClass": 30,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 24,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 5
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 22,
        "intimidation": 22,
        "stealth": 18
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "E20sn6lgo6KZKTfS",
          "name": "Bullying Bluster",
          "kind": "passive",
          "description": "30 feet. The blustering gale constantly unleashes a tirade of insults and aggressive taunts. Each enemy who enters or starts their turn in the aura must succeed at a check (will, dc:30) save or become Stupefied 1 for as long as they remain within the aura (Stupefied 2 on a critical failure). The troop's members are collectively able to mimic a few curse words or insults in every language, allowing their Bullying Bluster to affect any creature who understands a language. A creature who succeeds at its save is temporarily immune for 1 hour. The blustering gale can activate or deactivate the aura with a free action, which has the concentrate trait.",
          "traits": [
            "auditory",
            "aura",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "PWxA5OSMAbdsHWFY",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "jedcTKga3Mhe9l2Z",
          "name": "Pummeling Winds",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The blustering gale bashes, batters, and pummels each adjacent enemy (check (reflex, dc:27, basic) save). The damage depends on the number of actions.\n1 (1d8+2)[bludgeoning] damage\n2 (2d8+12)[bludgeoning] damage\n3 (3d8+15)[bludgeoning] damage",
          "traits": []
        },
        {
          "id": "RR9QyWmKkQG5sTzA",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop Flies or Strides, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the whole troop.",
          "traits": []
        },
        {
          "id": "GXEYb7C00ZXmEiOV",
          "name": "Windstorm",
          "kind": "action",
          "description": "The blustering gale exhales as a unit, creating a powerful windstorm. This windstorm is a 10-foot burst within 100 feet that deals (3d8+10)[bludgeoning|options:area-damage] damage (check (reflex, dc:30, basic, options:area-effect,forced-movement,inflicts:prone) save). Creatures that fail their saving throw are pushed 10 feet in any direction (plus knocked Prone on a critical failure). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst and the distance pushed decreases to 5 feet.",
          "traits": [
            "air"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:oregorger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "AahAJjsv74rPfAG5",
      "slug": "oregorger",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a3306f1dbc381b8edf01fec8e203c07255783f9a051c9473bbbb507e7fdf1304",
    "translatableHash": "sha256:b72e0c30c42ceecc9271b554be103bf419f1be0a7c0be3d69bb9de86a31d1f92",
    "data": {
      "schemaVersion": 1,
      "name": "Oregorger",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "Oregorgers are hulking, four-limbed brutes with bodies of raw primal metals accreted in layers. Driven entirely by an insatiable drive to consume metal, an oregorger stops at nothing to greedily devour as much metal as it can and expel it as caustic rust.",
      "armorClass": 30,
      "hitPoints": 245,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 17,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 2,
        "con": 7,
        "int": -1,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 25
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "acid 10",
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "blNHIBg9cEnYAnx9",
          "name": "Adamantine Bite",
          "bonus": 23,
          "damage": "2d12+12 piercing",
          "traits": [
            "adamantine",
            "reach-10"
          ]
        },
        {
          "id": "5Q33V1clDTnXWIuD",
          "name": "Claw",
          "bonus": 23,
          "damage": "2d6+12 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "rDukP9s5TtLABcyy",
          "name": "Rust Vision",
          "kind": "passive",
          "description": "An oregorger ignores the concealed condition from rust clouds.",
          "traits": []
        },
        {
          "id": "3uXN6ARwNvN0NOSK",
          "name": "Caustic Rust",
          "kind": "passive",
          "description": "5 feet.\nThe oregorger continually leaks tiny fragments of partially digested rust into the air around it. Any creature that ends its turn in the aura takes 2d6 acid damage with a check (reflex, dc:27, basic) save. A creature that critically fails is also Sickened 1.",
          "traits": [
            "acid",
            "aura"
          ]
        },
        {
          "id": "509qOyqLd5OdAHZE",
          "name": "Devour Metal",
          "kind": "passive",
          "description": "Any time the oregorger scores a critical hit with an adamantine bite attack, it deals the same amount of damage to any metal armor worn by the target, automatically bypassing any Hardness lower than 10. If a creature uses the Shield Block reaction with a metal shield against an oregorger's adamantine bite, the shield is automatically broken, but no other item takes damage from that attack. Unattended metal items automatically take full damage from an oregorger's adamantine bite attack, ignoring their Hardness if it's lower than 10.",
          "traits": []
        },
        {
          "id": "cGhPeUIuvKKzGoE1",
          "name": "Searing Spew",
          "kind": "action",
          "description": "The oregorger belches forth a cloud of caustic, rusted debris from its maw, filling a cube adjacent to itself that's 10-foot cube on each side. Any creature in this area takes 6d6 acid damage|options:area-damage] damage (check (reflex, dc:30, basic, options:area-effect)). The ground under the cloud is difficult terrain for 1 hour, after which the shrapnel crumbles to dust.\nThe oregorger can't use Searing Spew again for [[/gmr 1d4 #Recharge Searing Spew]], but the ability recharges if the oregorger damages an item with devour metal.",
          "traits": [
            "acid"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:pelegox-cube",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "E3n4MNWQNPR2o3bG",
      "slug": "pelegox-cube",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2aee879bc43b2543496b2e51b896a8af9412bf0acb1d8c1acc9299f1c0ea84a8",
    "translatableHash": "sha256:147681f3ee4422f4b7a15612cee5b6b88eb45a6fc97a313ddc32ac1ba2e948f3",
    "data": {
      "schemaVersion": 1,
      "name": "Pelegox Cube",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "metal",
        "troop"
      ],
      "description": "Pelegoxes are beings of condensed magnetic energy that fashion bodies for themselves using their surroundings. Though a pelegox's true form is a spherical core, it pulls metal fragments of various shapes and sizes to form a polyhedral shell. Though pelegoxes might develop preferences for a particular form when at rest, they continue to look for new configurations to call their own, happiest when they can experiment with endless possibilities, even if it means dismantling other metallic entities.\nThese piecemeal creatures move by a combination of magnetic levitation and propulsion, and when that doesn't work, by continuously piercing the ground and shifting their weight forward, looking almost like moving caltrops. Over time, the magnetic signature of a pelegox becomes visible, etched into its body in patterns of concentric lines. These unique designs make it possible to distinguish between individual pelegoxes even when their surface has eroded.\nPelegoxes are quick to form relationships with others of their kind. They delight in combining their individual bodies into ever larger, more elaborate structures and patterns. As such, it is rare to find a pelegox on their own—they prefer to travel in a clustered form.",
      "armorClass": 31,
      "hitPoints": 210,
      "speedFeet": 0,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 21,
        "reflex": 24,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 6,
        "int": 5,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 21,
        "crafting": 20,
        "diplomacy": 21
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "N5zkmIhErwI1WxPK",
          "name": "Telepathy 30 feet",
          "kind": "passive",
          "description": "",
          "traits": [
            "aura",
            "magical",
            "mental"
          ]
        },
        {
          "id": "LeSNHvmJYD2aSApa",
          "name": "Metalsense",
          "kind": "passive",
          "description": "A pelegox cube can sense metal creatures and objects as an imprecise sense.",
          "traits": []
        },
        {
          "id": "HukF8Agt4OvKuF6f",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "tMWSXjabckPBavn9",
          "name": "Entrancing Shapes",
          "kind": "action",
          "description": "The pelegox cube rapidly shifts, creating a display of seemingly impossible geometric patterns. Creatures in a 60-foot cone take 9d6 mental damage (check (will, dc:29, basic, options:area-effect) save). A creature that fails is also Fascinated with the pelegox cube and Stupefied 1 for 1 minute.",
          "traits": [
            "mental",
            "occult",
            "visual"
          ]
        },
        {
          "id": "tUDiPYwvdOGHotaF",
          "name": "Scrambled Strike",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The pelegox cube rearranges to create jutting spikes, attacking each enemy within 10 feet (check (reflex, dc:27, basic) save). The damage depends on the number of actions.\n1 2d6 piercing damage\n2 (3d6+10)[piercing] damage\n3 (5d6+10)[piercing] damage",
          "traits": []
        },
        {
          "id": "rBBPu3L2sSvSJOCv",
          "name": "Shard Volley",
          "kind": "action",
          "description": "The pelegox cube magnetizes fragments of metal at range. This is a 10-foot burst within 30 feet that deals (2d6+10)[piercing|options:area-damage] damage (check (reflex, dc:27, basic, options:area-effect) save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst.",
          "traits": []
        },
        {
          "id": "Vmi0wnI6ZrQvUcpb",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the troop Flies, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its Speed. This works just like a Gargantuan creature moving; for instance, if any square of the troop enters difficult terrain, the extra movement cost applies to the entire troop.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:kizidhar-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "eMbeqzGyypNU1wTS",
      "slug": "kizidhar-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:45223ec342cbf6efa52d454211a00f9c44fabd9d86916aa8b2301937c0c328e6",
    "translatableHash": "sha256:620b664043a031a12ec0f991e230c6a01f8a06331260a40d8e205ed8b5653ab1",
    "data": {
      "schemaVersion": 1,
      "name": "Kizidhar Shuyookh",
      "level": 11,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "elemental",
        "genie",
        "plant",
        "wood"
      ],
      "description": "Kizidhar shuyookhs are the powerful rulers of the Glowing Infinity on the Plane of Wood. They view other genies, including other kizidhars, as subservient to their own greatness, manipulating them as though they were outsiders whenever it helps achieve their goals. Kizidhar shuyookh diplomats are sent as emissaries from the Plane of Wood to the Universe, representing the metropolis of Nodollin and Grand Sultana Eshal Muazzam Rayadii of the Glowing Infinity, Lady of All that Grows and Decays.\nThe genies of the Plane of Wood, known as the kizidhars, are overbearing lords of their element. These master crafters of wood specialize in carpentry and all kinds of woodcarving, and they take a particular delight in reshaping the world in their own image—either through creating wooden statues of themselves or by manipulating and controlling the living things around them. Though they're able to carve themselves similarly, they usually regard their own forms as perfect.\nShunning the company of other genies, they prefer to avoid those equal in power and instead surround themselves with circles of sycophants and flatterers. With the pathways to the Universe open again for the first time in ages, kizidhars roam the multiverse to find mortals they can tempt into joining their palace retinues as servants, entertainers, and valuable sources of new information.",
      "armorClass": 30,
      "hitPoints": 220,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 20
      },
      "abilities": {
        "str": 5,
        "dex": 5,
        "con": 7,
        "int": 4,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 20,
        "arcana": 19,
        "athletics": 22,
        "crafting": 23,
        "deception": 21,
        "intimidation": 21,
        "nature": 24,
        "stealth": 22
      },
      "languages": [
        "common",
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "1GGYZiXvpOl6Dp94",
          "name": "Spear",
          "bonus": 23,
          "damage": "3d6+11 piercing",
          "traits": []
        },
        {
          "id": "XG2RBMXdrMQJoHwH",
          "name": "Spear",
          "bonus": 23,
          "damage": "3d6+11 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yrf91fX8FZS3xDZ",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "CcvurqSvjk0A7g8N",
          "name": "Sprout Shield",
          "kind": "reaction",
          "description": "Trigger An enemy hits the kizidhar shuyookh with a melee Strike\nRequirements The kizidhar shuyookh doesn't have a shield raised\nEffect The shuyookh can use Sculpt Wood to create a duskwood shield if they don't already have one. The shuyookh then Raises their Shield. The circumstance bonus from the shield applies to their AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "c57n6bROk80ZltXz",
          "name": "Change Shape",
          "kind": "action",
          "description": "The kizidhar transforms into a Small or Medium wood elemental or plant creature. This doesn't affect the kizidhar's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "xrFbDi7up7Gjr0GE",
          "name": "Manipulative Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh attempts to advance their own interests along with those of any beneficiaries from the wish.",
          "traits": [
            "downtime"
          ]
        },
        {
          "id": "s18GA1p3QqjN2j21",
          "name": "Parting the Trees",
          "kind": "passive",
          "description": "The genie ignores difficult terrain from plants, and can share their space with larger plants, such as trees.",
          "traits": []
        },
        {
          "id": "zHLo58xuEgbomUgJ",
          "name": "Sculpt Wood",
          "kind": "action",
          "description": "The kizidhar creates a wooden item out of their body that appears in their hand and remains attached. The item can be a one-handed simple weapon, shield, or object of light Bulk. A kizidhar can instead use this ability to transform an item it's already holding or to remove an object to free its hand. Any item created with Sculpt Wood crumbles to splinters if removed from the kizidhar's possession.",
          "traits": []
        },
        {
          "id": "O2eH85EP1BnRI6wm",
          "name": "Seed of Ambition",
          "kind": "action",
          "description": "Frequency once per round;\nEffect The kizidhar plants a desire for greatness in the mind of a creature within 50 feet. The target must attempt a check (will, dc:30) save. On a failure, until the end of its next turn, the target can't Delay, Ready, or use reactions. Instead, it must use all its actions to Strike or cast the highest rank of spell available to it using spell slots or Focus Points, or take actions to facilitate doing so, such as drawing a weapon or moving toward an enemy. The target must focus its attacks either on the kizidhar or on the opponent it perceives to be the biggest threat. This effect ends if the kizidhar uses Seed of Ambition again.",
          "traits": [
            "auditory",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "HF1yr3c3cvE0KtLw",
          "name": "Take Root",
          "kind": "action",
          "description": "The genie thrusts their weapon into the ground. Plants sprout and grow out of the ground in a 20-foot burst centered on one corner of the kizidhar's square. All squares on the ground in that area are difficult terrain until the kizidhar uses this ability again.",
          "traits": [
            "arcane",
            "plant",
            "wood"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "WGMWv30QkFKQBEza",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "YkTXH51AHDXW55uU",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "5x0DqdzGdAXhxuIR",
              "name": "Entangling Flora (At Will)",
              "rank": 2
            },
            {
              "id": "uGQFwM5W2fU0JFgy",
              "name": "One With Plants",
              "rank": 2
            },
            {
              "id": "uOmjhjvocEUquZOs",
              "name": "Wooden Double",
              "rank": 3
            },
            {
              "id": "iyRJhkgn7X0OHkUB",
              "name": "Invisibility",
              "rank": 6
            },
            {
              "id": "a1ICrjXEcssuzKO7",
              "name": "Lignify",
              "rank": 6
            },
            {
              "id": "Dzt6xiu2sipaj0x1",
              "name": "Nature's Pathway (At Will)",
              "rank": 6
            },
            {
              "id": "bRQKkD1HaTGmhirb",
              "name": "Speak with Plants (Constant)",
              "rank": 6
            },
            {
              "id": "HQaEIIMi9yKGedQT",
              "name": "Truespeech (Constant)",
              "rank": 6
            },
            {
              "id": "e8NhubcKE9Iz6kl5",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or the Universe Only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:elemental-thicket",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "lQcfACi4RQrjIl5S",
      "slug": "elemental-thicket",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:949777214e0a3742dfe0a85b394b7962b6f726f6b17f008c3b6995640c1f7fb4",
    "translatableHash": "sha256:e364a425c504efeb3ea1d4856be01880de41242e3deefb17af687c7962ab7023",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Thicket",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "In the Universe, plant growth proceeds on a scale of days, weeks, years, and decades. Conversely, an elemental thicket grows constantly and in seconds. These writhing masses of living wood are the elemental embodiment of growth itself, swelling up when least expected to consume all in their path.",
      "armorClass": 28,
      "hitPoints": 240,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": []
      },
      "saves": {
        "fortitude": 20,
        "reflex": 13,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 6,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 15"
        ]
      },
      "attacks": [
        {
          "id": "7rJEkIl1VXcFTedq",
          "name": "Gnarled Branch",
          "bonus": 24,
          "damage": "2d12+7 bludgeoning",
          "traits": [
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "lPoSVdgFBsdSsiBN",
          "name": "Regeneration 15 (Deactivated by Fire)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "g7R7kGhJrJHS3qzH",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d12+7)[bludgeoning], check (fortitude, dc:30, basic)",
          "traits": []
        },
        {
          "id": "ogH30QUlyvXcZTO9",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:30, options:damaging-effect,inflicts:grabbed,inflicts:slowed), (8d10)[bludgeoning] damage, [[/act escape dc=27]], Rupture 20",
          "traits": []
        },
        {
          "id": "QQiFKxKI0j0hb7PX",
          "name": "Entangling Growth",
          "kind": "passive",
          "description": "30 feet.\nPlant life erupts out of any and all soil surrounding the elemental thicket, making the area greater difficult terrain out to 5 feet and difficult terrain out to 30 feet. This ability requires soil and has no effect on terrain without it, such as worked stone, solid rock, open water, etc.",
          "traits": [
            "aura",
            "plant",
            "primal"
          ]
        },
        {
          "id": "5vu1EDwV4YDm5F5U",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:avalanche-legion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "PameP0qGSvNrhGeH",
      "slug": "avalanche-legion",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8812c9e46f132997cfc650e90deef99348fd40be4fc8651ea2b352c551f4244e",
    "translatableHash": "sha256:e739281bf50baf01ea956e793bf5fd2387288bffa35d61f92ad5489df9c418f5",
    "data": {
      "schemaVersion": 1,
      "name": "Avalanche Legion",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "earth",
        "elemental",
        "troop"
      ],
      "description": "Elementals of the Plane of Earth can be fiercely territorial. Some more solitary elementals protect their lairs on their own, but occasionally others band together to defend larger regions that serve as shared turf. Notable among these alliances are avalanche legions, who patrol the perimeter of these shared territories, driving off intruders who dare to trespass upon their home ground.\nFamilial Instincts\nAlthough elementals don't reproduce like typical creatures, living landslides sometimes develop bonds with smaller or weaker earth elementals, such as earth wisps, living boulders, and sod hounds. When several of these smaller elementals are gathered in one place, living landslides who cared for the creatures often continue to watch over their wards. Avalanche legions sometimes form from these gatherings, as multiple living landslides join forces to protect the smaller elementals.",
      "armorClass": 31,
      "hitPoints": 240,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 21
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 4,
        "int": -2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 23
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "9wdDct96jeZUdbcl",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "jXUvmQ4dEzgQiXBg",
          "name": "Earthbound",
          "kind": "passive",
          "description": "When not touching solid ground, the avalanche legion is Slowed 1.",
          "traits": []
        },
        {
          "id": "Hm79knbJle7MMtLb",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "hzjHms1gdMFgSbQT",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The avalanche legion can Burrow through any earthen matter, including rock. When it does so, the legion moves at its full burrow Speed, leaving no tunnels or signs of its passing.",
          "traits": []
        },
        {
          "id": "kRzkn90J5Ky2v7Io",
          "name": "Pummeling Boulders",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The avalanche legion unleashes an onslaught of blows against each enemy in a 5-foot emanation (check (reflex, dc:28, basic, options:area-effect) save). The damage depends on the number of actions.\n1 2d8 bludgeoning damage\n2 (3d8+8)[bludgeoning|options:area-damage] damage\n3 (4d8+11)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "2yFauo5guCRGqBMo",
          "name": "Spinning Stones",
          "kind": "action",
          "description": "The avalanche legion spins in place, kicking up a barrage of stones. Each creature in a 10-foot burst within 30 feet of the troop takes (1d12+8)[bludgeoning|options:area-damage] damage (check (reflex, dc:28, basic, options:area-effect) save). When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot burst.",
          "traits": []
        },
        {
          "id": "umlBJNRh2jqhdPoK",
          "name": "Trample into the Earth",
          "kind": "action",
          "description": "The avalanche legion speeds forward, running over creatures with their stone bodies and knocking them down. As Trample; Gargantuan or smaller, 2d8 bludgeoning damage, check (reflex, dc:28, basic). A creature that critically fails its save is knocked Prone.",
          "traits": []
        },
        {
          "id": "1nWKzGImfTWoo3F7",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the avalanche legion Strides or Burrows, it first Forms Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then moves up to its respective Speed. This works just like a Gargantuan creature moving; for instance, if any square of the legion enters difficult terrain, the extra movement cost applies to all the elementals.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:veldenar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "RZ83RzvCJJHHooyk",
      "slug": "veldenar",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:75985a1d4e20446178feb9e8302f266e5ee943007cb4d12992d491c3e37ef0ba",
    "translatableHash": "sha256:d85676bd442a828519b44222a92d17b09078e4c36d014b845c3ce3e70343b69b",
    "data": {
      "schemaVersion": 1,
      "name": "Veldenar",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Some dangers lurking within the Endless Sky can doom prey before they even realize it; such are the ambush tactics of the 20-foot-tall elementals known as veldenars. Their inherent invisibility and pale, almost translucent forms make them among the most deadly creatures to call the Plane of Air home.\nVeldenars resemble amphibians from the Universe, albeit with myriad red eyes and an affinity for cold. Hunting along the edges of eternal storms, the event horizons of dead zones, and the banks of sky streams, veldenars prey on the lesser denizens of their home plane. They can often be found using their natural buoyancy to drift among the large chunks of magical ice that crossed onto the Plane of Air from its former border with the Plane of Water. There, they extend their tongues to trap unwary flying insects or adventurers who might happen to float by. Their multiple eyes keep watch for their next meal even while devouring current prey.\nThe intense cold of a veldenar's stomach rapidly incapacitates its victims, allowing the predator to focus on returning to invisibility and finding a secluded spot to digest. Victims who escape the veldenar's stomach often feel chilled to the bone for days.\nVeldenars aren't discerning about who or what they inhale. As a result, kinds of scrap can collect in their stomachs, especially inorganic material. Those hunting veldenars often wait until the elemental needs to regurgitate debris, as this is one of the few times a veldenar can be caught in a compromising position, unable to capture anything due to their clogged esophagus.\nPaired Predators\nVeldenars bond in partnership for life, which can be well over a century. Utilizing their ambush pack tactics, one veldenar will often drive potential prey into their partner's clutches. Visitors to the Plane of Air should keep in mind that if they happen to spot one veldenar, another is likely close by.",
      "armorClass": 32,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 5,
        "int": -2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 20,
        "intimidation": 20,
        "stealth": 23
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": [
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "j0CSffAVP022YUJa",
          "name": "Tongue",
          "bonus": 25,
          "damage": "2d10+10 bludgeoning; 1d10 cold",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "W5Ag8EY5ktvEz4Mc",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "UqKibrAhrSI1lIL8",
          "name": "Attack of Opportunity",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "0r4vONuOCVAgfXAn",
          "name": "Natural Invisibility",
          "kind": "passive",
          "description": "A veldenar is naturally Invisible and only becomes visible when using a hostile action. Creatures it has engulfed remain visible within it, albeit slightly blurred by the veldenar's translucent skin.",
          "traits": []
        },
        {
          "id": "xbtrNvwcYz6O4eVA",
          "name": "Viscous Breath",
          "kind": "passive",
          "description": "15 feet. The veldenar raises the viscosity of the surrounding air just by breathing it. Creatures who enter or start their turn within the emanation treat the area as difficult terrain and take a –2 status penalty to any non-magical physical attacks they attempt. This aura is suppressed whenever the veldenar has a creature engulfed.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "3mNhwXExIRqSlsI0",
          "name": "Vacuum",
          "kind": "action",
          "description": "Requirements The veldenar doesn't have a creature engulfed\nEffect The veldenar forcefully unlocks then expands its jaws to inhale the air in a 15-foot cone before it, pulling Large or smaller creatures into its cavernous maw. The veldenar Engulfs the creatures in the area (check (reflex, dc:27, options:area-effect,damaging-effect), (1d10+10)[cold|options:area-damage], [[/act escape dc=27]], Rupture 25).",
          "traits": [
            "air"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:jabali-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "1cpG2DuXPXq3DMBx",
      "slug": "jabali-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4d5edfab6cf592483f47bec4013576ea040429607c77343408be5f16dfe0dfbb",
    "translatableHash": "sha256:59339a19dbb844b2f5e47104d72191035759537c0cdb517f82cffef3a9d9cb7c",
    "data": {
      "schemaVersion": 1,
      "name": "Jabali Shuyookh",
      "level": 12,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "earth",
        "elemental",
        "genie"
      ],
      "description": "A jabali genie of great power and high social rank is called a shuyookh. Strong in body and mind, jabali shuyookhs value physical skill, fine artistry, and displays of strength. Incredibly proud, they're easily offended and quick to anger but lash out only after weighing the consequences. Shuyookhs view their desires as greater than those around them, leading them to provide aid as quickly and efficiently as possible, fulfilling the terms of bargains expediently and to the letter.\nJabali shuyookhs are industrious and have many interests, including athletic competitions, engineering, jewelry-making, masonry, metalworking, and sculpting. They enjoy games of chance and bargaining, whether in a gambling hall, arena, or marketplace. Some mix their interests by managing organizations or guilds involving such concerns. Many shuyookhs reap the wealth of the Plane of Earth for sale elsewhere and speculate on the value of such commodities.\nIndustry Titans\nThe mercantile empires of jabali shuyookhs extend across the Plane of Earth and onto other planes. Jabalis especially like to trade in regions of the Universe and across the Plane of Fire. Many customers value gemstones, metals, and other precious materials mined on the Plane of Earth. Thus, the resources of the Plane of Earth feed industry across the planes.",
      "armorClass": 33,
      "hitPoints": 210,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 22
      },
      "abilities": {
        "str": 7,
        "dex": 1,
        "con": 5,
        "int": 5,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 25,
        "crafting": 21,
        "deception": 22,
        "nature": 19,
        "society": 21
      },
      "languages": [
        "common",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Uevcpq8NDZjXveWt",
          "name": "Falchion",
          "bonus": 28,
          "damage": "2d10+14 slashing",
          "traits": [
            "forceful",
            "magical",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "wshMrOGfnCWF0sB8",
          "name": "Fist",
          "bonus": 27,
          "damage": "2d6+13 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "6vUFHR7tRkVJoL6r",
          "name": "Rock",
          "bonus": 27,
          "damage": "2d8+13 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "WHjcxQxzXN8MWkql",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "QiwhrN7LZiIxzf5U",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "YUHyFcbki4nh4nsu",
          "name": "Change Shape",
          "kind": "action",
          "description": "The jabali transforms into a Small or Medium earth elemental or land animal, typically a camel or dog. This doesn't affect the shuyookh's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "6hWBqLYUOtGNlhGQ",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The jabali can Burrow through dirt and stone at their full burrow Speed, leaving no tunnels or signs of their passing.",
          "traits": []
        },
        {
          "id": "Ll1vMPsbMLvlP00n",
          "name": "Earthen Control",
          "kind": "passive",
          "description": "When the shuyookh casts Wall of Stone, the edges can pass through creatures, which are shunted to the side of the wall opposite that edge.",
          "traits": []
        },
        {
          "id": "ejP4t8gKhXnBhKbk",
          "name": "Economical Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh fulfills the wish in the most straightforward, simple way possible.",
          "traits": [
            "downtime"
          ]
        },
        {
          "id": "bLjDue1B1wopn7W2",
          "name": "Stone Clutch",
          "kind": "passive",
          "description": "When the jabali Pushes a creature into a stone barrier, the surface grips it with fingers of stone. The target must succeed at a check (reflex, dc:30) save or become Grabbed by the surface ([[/act escape dc=36]]).",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "u3Uc9NoalPADbJdb",
          "name": "Stone Crush",
          "kind": "action",
          "description": "The jabali deals (2d6+13)[bludgeoning] damage to all creatures within 100 feet that are Grabbed by stone clutch, with a check (fortitude, dc:32, basic) save.",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "nCu6KOHanL0AVzsy",
          "name": "Push 15 feet",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "2dUsOIYDuYEDQ4ha",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "gdwNFgDHXnmcxX2h",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "zvGNRyg6Ceg4RPj4",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "fez4Wqwvi7ZxI1e7",
              "name": "Illusory Disguise",
              "rank": 5
            },
            {
              "id": "uUqXOJTtQbmrg9Nf",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "ribHc0VPr8aUyX3w",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "F5YwArRO1Pr3SzGL",
              "name": "Mountain Resilience (At Will; Self Only)",
              "rank": 6
            },
            {
              "id": "9VRp07ccEoyvz9w6",
              "name": "Petrify",
              "rank": 6
            },
            {
              "id": "v3MGeSPGoRJ3LiJC",
              "name": "Interplanar Teleport (To Astral Plane, Elemental Planes, or the Universe Only)",
              "rank": 7
            },
            {
              "id": "eDYx35S4NzRKxvzX",
              "name": "Earthquake",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:brochmaw",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "3ItvROg0JbYKUGRu",
      "slug": "brochmaw",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d12e1b44ba363f3177c169be9fcb30cb4d258a81a966eb2549a2a307f02051d8",
    "translatableHash": "sha256:7c5461d209c6b9b058ea6cfc52a721606f91336bbae32abad27b71ffe183e6d2",
    "data": {
      "schemaVersion": 1,
      "name": "Brochmaw",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "With bodies of fired clay, brochmaws look like walking cylindrical ovens split across the middle by their titular maws, which rage with the fires of culinary perfection. Behind their maw burns a powerful internal oven, where the elemental creatures roast their prey. Brochmaws are driven solely by their voracious appetites, only leaving their lairs to acquire new meals. Early attempts to force brochmaws into service resulted in their would-be captors being reduced to nothing more than ash on a plate, accompanied by a written review of how they tasted. Now, brochmaws are employed all across the Planes, lured by the sweet promise of new, fresh meat.\nThough brochmaws have no use for money, they do trade gifts for services. The only thing they have to offer is cooked meat from their own mouths, which they deem extremely valuable. Surprisingly, all who have tried brochmaw meat claim it to be a savory roasted delight. Given that brochmaws offer nothing but cooked meat and desire nothing but raw meat, trading with them is a simple if slightly dangerous affair, often coming down to the quantity and rarity of the meat offered.\nBrochmaws hate to see meat go to waste. If one discovers a carcass of any sort, they call others of their kind to join them in a festive cookout, with dancing and feasting inevitably accompanied by compliments or complaints about the quality of the food.\nPlanar Delicacies\nThough brochmaws love to devour new things, they still have favorite meals they like to keep on hand. Brochmaws love amphibian meat, though the origin of this appeal is a mystery. They will eagerly consume geniekin of all kinds because the magical blood produces a psychedelic effect. Brochmaws think celestials are as dangerous as they are delicious, requiring a precise cooking process to avoid killing the consumer. Most brochmaws are far too impatient to prepare celestial meat properly, often to disastrous results.",
      "armorClass": 32,
      "hitPoints": 259,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 20,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 8,
        "int": 3,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 28,
        "intimidation": 21,
        "survival": 24
      },
      "languages": [
        "common",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "cK0NtoQht9cRx7V7",
          "name": "Skewer",
          "bonus": 27,
          "damage": "3d10+8 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "He11zqj61lBxCCK9",
          "name": "Hot Oil",
          "bonus": 25,
          "damage": "3d6+7 fire; 3 fire; 1d8 fire",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "CufQjWaO1TCPfVqS",
          "name": "Marinade",
          "kind": "passive",
          "description": "A creature taking persistent fire damage from the brochmaw's hot oil Strike is more readily cooked, taking a –2 circumstance penalty to Fortitude saves against Roast for as long as it is taking persistent fire damage.",
          "traits": []
        },
        {
          "id": "TUkk0J6lRoFlOakC",
          "name": "Roast",
          "kind": "action",
          "description": "The brochmaw turns a skewer over their oven, cooking anything impaled on it. Creatures Grabbed by the brochmaw's skewer take 3d6 fire damage (check (fortitude, dc:32, basic) save). Creatures who have been Roasted take a –2 circumstance penalty to Fortitude saves against Serve for 1 minute.\nEffect: Roast",
          "traits": []
        },
        {
          "id": "XBGRGFJWQJGorz6V",
          "name": "Serve",
          "kind": "action",
          "description": "Requirements The brochmaw has a creature Grabbed\nEffect The brochmaw eats their hard-earned meal off one of their skewers. The brochmaw bites down on one creature it has grabbed, dealing 12d6 piercing damage (check (fortitude, dc:32, basic) save); the brochmaw regains Hit Points equal to half the damage dealt. The creature is then freed from the skewer.",
          "traits": []
        },
        {
          "id": "QYjsXL62DEW4Ntpb",
          "name": "Skewer Master",
          "kind": "passive",
          "description": "The skewers of a brochmaw are more than long enough to hold multiple creatures. A brochmaw can have up to three creatures Grabbed on its skewer, and it can still make Strikes with its skewer even if it has creatures grabbed, though it can't target creatures it has grabbed.",
          "traits": []
        },
        {
          "id": "2tvEJV0B07h63UcW",
          "name": "Improved Grab",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:saltborn-stalkers",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "7Y3DAOMaLzqmRqUh",
      "slug": "saltborn-stalkers",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f51407bfc79a9abc2c98ee3db9274816046d9de7127ae00e61e813b23f082e6b",
    "translatableHash": "sha256:11ce899849eed83224bfa6a2044b2352739550f687008cb5bba6db5c3bde5c41",
    "data": {
      "schemaVersion": 1,
      "name": "Saltborn Stalkers",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "aquatic",
        "elemental",
        "troop",
        "water"
      ],
      "description": "The briny depths of the Boundless Sea sometimes twist large groups of merfolk into swarms with vicious rows of teeth and sharp claws known as saltborn stalkers. Saltborn stalkers hunt in groups, using their drooping, tentacle-like appendages as bioluminescent lures, posing them as wisps or bubbles of planar energy to draw unsuspecting prey into clever ambushes.\nTHE RITE OF SALT AND STONE\nWhen a merfolk joins the ranks of the saltborn, they undergo a secret rite known only to other saltborn and the brine dragons of Kelizandrika. The recruits are encased in graves of salt and ice and left at the floor of the Boundless Sea to claw themselves free. Those who overcome the trial are never truly rid of the salt from their tombs, which covers the body of every saltborn stalker.",
      "armorClass": 34,
      "hitPoints": 240,
      "speedFeet": 10,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 26,
        "will": 20
      },
      "abilities": {
        "str": 6,
        "dex": 7,
        "con": 5,
        "int": 3,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "athletics": 27,
        "intimidation": 22,
        "nature": 22,
        "stealth": 26
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "LTyMIKbmbMSig1yY",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "d7qYKasn3zaQQY0L",
          "name": "Lightlure",
          "kind": "action",
          "description": "Effect The saltborn stalkers move their luminescent lures in an entrancing light show, drawing nearby creatures into their grasp. Each creature in a 100-foot emanation must attempt a check (will, dc:33) save; regardless of the result of its save, the creature is then temporarily immune to Lightlure for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature is Fascinated with the lures and must spend all its actions on its next turn to move closer to them as expediently as possible, avoiding obvious dangers along its path.\nCritical Failure As failure, but the creature is also Dazzled for [[/gmr 1d4 #rounds]].",
          "traits": [
            "concentrate",
            "incapacitation",
            "mental",
            "primal",
            "visual"
          ]
        },
        {
          "id": "jOyBIiGozL2D8Sn4",
          "name": "Saline Crust",
          "kind": "passive",
          "description": "20 feet\nRequirements The saltborn stalkers are in a body of water\nEffect Layers of the saltborn's salty skin flake off to foul the water around them. A creature that ends its turn in the aura takes 2d6 acid damage with a check (reflex, dc:30, basic) save; creatures with the amphibious or aquatic trait are immune.",
          "traits": [
            "aura",
            "water"
          ]
        },
        {
          "id": "rZhebUXWYB8LMirR",
          "name": "Salty Clutch",
          "kind": "action",
          "description": "Frequency once per round\nEffect The stalkers reach out to Grab their foes and drag them underwater. Each enemy in a 5-foot emanation must succeed at a check (reflex, dc:33) save or be Grabbed by the stalkers (or Restrained on a critical success). For the rest of the current turn, the saltborn stalkers can move toward water or in water without ending the grab, carrying any grabbed or restrained creatures along with them.",
          "traits": []
        },
        {
          "id": "ns5hNWMVg9ye169M",
          "name": "Scour the Bones",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The saltborn stalkers use their teeth and claws to vivisect each enemy within 5 feet (check (reflex, dc:30, basic) save). The damage depends on the number of actions.\n1 2d10 slashing damage\n2 (3d10+8)[slashing] damage\n3 (3d10+16)[slashing] damage",
          "traits": []
        },
        {
          "id": "IoQmxN7nugjVbMzq",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever the saltborn stalkers Stride or Swim, they first Form Up as a free action to condense into a 20-foot-by-20-foot area (minus any missing squares), then move. This works just like a Gargantuan creature moving; for instance, if any of the stalkers' squares enter difficult terrain, the extra movement cost applies to the whole troop.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:zuhra-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "a2kTygtqIuMCSLIr",
      "slug": "zuhra-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:13829d24fab4bf4d172443b96f99f7315dc8b1f6db109e9fbd98dbda310429c2",
    "translatableHash": "sha256:b81f7453605f8c91b67fae48252112e03d39b3dc0d8c45fd92b862773b5aa038",
    "data": {
      "schemaVersion": 1,
      "name": "Zuhra Shuyookh",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "genie"
      ],
      "description": "The most powerful zuhras draw followers and elemental metal with overwhelming force of personality and literal magnetism. When called upon to conduct wish rituals, they use their long isolation from the other planes as an excuse to misinterpret requests outlandishly, claiming linguistic differences.\nZuhras, the genies of the elemental Plane of Metal, are bold and imposing, fond of being the center of attention and drawing a crowd with flashy performances, displays of skill, and tales of their personal victories. Despite their large personalities, their long-term relationships tend to be cool and somewhat distant; zuhras often make alliances but rarely form friendships, and the trust required for deeper relationships is rarer still. The few mortals who've gotten to know a zuhra often describe them as bombastic but emotionally aloof.\nSince the reconnection with other planes, zuhras have sought out and formed bonds with other genies. They find their jabali cousins to be capable smithing partners, if a bit staid and dull. Zuhras rarely pay non-genie elementals any more than a passing glance, finding even the intelligent ones uninteresting to communicate with or hard to relate to.",
      "armorClass": 34,
      "hitPoints": 212,
      "speedFeet": 30,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 23,
        "will": 21
      },
      "abilities": {
        "str": 5,
        "dex": 6,
        "con": 8,
        "int": 5,
        "wis": 4,
        "cha": 7
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 24,
        "crafting": 26,
        "deception": 26,
        "intimidation": 24,
        "performance": 28,
        "society": 22
      },
      "languages": [
        "common",
        "talican"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "tucy19B5HiS6Xkcd",
          "name": "Spiked Chain",
          "bonus": 27,
          "damage": "1d12 electricity; 2d8+11 slashing",
          "traits": [
            "disarm",
            "finesse",
            "magical",
            "reach-15",
            "trip"
          ]
        },
        {
          "id": "CrCeX0pG3YXWVMaZ",
          "name": "Hand Blade",
          "bonus": 25,
          "damage": "2d4+11 slashing; 4d4 bleed",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "GCGDpEcfAqUJ61j4",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "rAKjsA5qLGEESIh5",
          "name": "Conductive Redirection",
          "kind": "reaction",
          "description": "Trigger The zuhra is hit by an attack, spell, or effect that deals electricity damage\nEffect The zuhra conducts the electricity through their body, taking damage as normal, and redirecting a bolt at one target within 30 feet that they can see. The zuhra makes a ranged attack roll with a [[/r 1d20+27 #Conductive Redirection]] modifier against the target's AC. On a hit or critical hit, the target takes electricity damage equal to the full damage of the triggering effect.",
          "traits": [
            "arcane",
            "concentrate",
            "electricity"
          ]
        },
        {
          "id": "5y0mRxzlQBq0e2xn",
          "name": "Magnetic Field",
          "kind": "passive",
          "description": "10 feet.\nAll squares in the aura are difficult terrain for creatures wearing metal armor or made of metal. Strikes with metallic weapons made by or against creatures in this aura take a –2 status penalty to the attack roll. Zuhras ignore these effects.",
          "traits": [
            "arcane",
            "aura",
            "metal"
          ]
        },
        {
          "id": "z4vQqksoMQh3omAJ",
          "name": "Change Shape",
          "kind": "action",
          "description": "The zuhra transforms into a Small or Medium metal elemental or animal. This doesn't affect the zuhra's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "xs9sPobzLJWpAXon",
          "name": "Magnetic Reposition",
          "kind": "action",
          "description": "Frequency once per round\nEffect The shuyookh targets any number of creatures affected by their magnetic field, and moves each target 10 feet in a direction the zuhra chooses. Each target can resist being moved if it succeeds at a check (fortitude, dc:32) save.",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "B3GAgBc6Uumdpb3P",
          "name": "Magnetic Storm",
          "kind": "action",
          "description": "Requirements The shuyookh's magnetic field is active\nEffect The shuyookh electromagnetically flings razor-sharp metal scraps. Each creature in a 30-foot emanation takes 8d6 slashing damage|options:area-damage] damage, with a check (fortitude, dc:32, basic, options:area-effect) save.\nThe shuyookh's magnetic field is deactivated for [[/gmr 1d4 #rounds]].",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "o9k3vrbtMfMIkgsi",
          "name": "Mercurial Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a Wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh attempts to fulfill the wish in a way that creates an unstable or impermanent benefit.",
          "traits": [
            "downtime"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "UEAruD5HcVwPqfn4",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "RKABWLkc3662FzOA",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "8G11RjCMneW0GOMA",
              "name": "Invisibility",
              "rank": 5
            },
            {
              "id": "KPzPl993y3RK8kQF",
              "name": "Magnetic Acceleration (At Will)",
              "rank": 5
            },
            {
              "id": "XCjjnuKiPXT0RF9z",
              "name": "Magnetic Attraction (At Will)",
              "rank": 5
            },
            {
              "id": "fWVXiqCwLky28m9f",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "hjnXAXcNYrjGw65T",
              "name": "Mercurial Stride",
              "rank": 6
            },
            {
              "id": "DebHwZwL5nJNkpt6",
              "name": "Wall of Metal",
              "rank": 6
            },
            {
              "id": "HDTqozc6ctQcmcUk",
              "name": "Clad In Metal (Can Choose Uncommon and Rare Metals)",
              "rank": 7
            },
            {
              "id": "W1JMMD4FmITFXloZ",
              "name": "Enthrall",
              "rank": 7
            },
            {
              "id": "2xJ6YTMRmB0QmWgH",
              "name": "Interplanar Teleport (At Will) (To Astral Plane, Elemental Planes, or Universe only)",
              "rank": 7
            },
            {
              "id": "RxjOkZ8AteNm1pgl",
              "name": "Weapon Storm",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:boiling-spring",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "EHowgLz8ohFGTGvG",
      "slug": "boiling-spring",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9dedcf005b02342c8c13c252bc7f698de90c836dbd1c5c9893c6eda1b30d12de",
    "translatableHash": "sha256:6fbc270a9e84296cd7f836953fda6886b94bba069dad2b085e4527790b382b67",
    "data": {
      "schemaVersion": 1,
      "name": "Boiling Spring",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "aquatic",
        "elemental",
        "fire",
        "water"
      ],
      "description": "Often mistaken for air elementals due to their hazy, almost-imperceptible forms, a boiling spring is a humanoid water elemental made of scalding steam and bubbling water. When summoned to the Universe, a boiling spring raises the ambient temperature around them, making the surrounding climate humid and muggy. They seem to enjoy the discomfort they cause, though some regard it as merely a fun prank while others truly revel in the misery and look for ways to cause more.",
      "armorClass": 34,
      "hitPoints": 255,
      "speedFeet": 0,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 26,
        "will": 20
      },
      "abilities": {
        "str": 7,
        "dex": 7,
        "con": 7,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 26,
        "stealth": 26
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "fire",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "UUimkffh4zxy5wdh",
          "name": "Blistering Fist",
          "bonus": 27,
          "damage": "3d8+13 fire",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "vggyhRWtCf7td2D1",
          "name": "Heat Wave",
          "bonus": 27,
          "damage": "3d12 fire",
          "traits": [
            "fire"
          ]
        }
      ],
      "actions": [
        {
          "id": "WgRAV30SN2oS2cQo",
          "name": "Steam Vision",
          "kind": "passive",
          "description": "The boiling spring ignores the Concealed condition from mist and steam.",
          "traits": []
        },
        {
          "id": "hMaMMYBxRYNPlMa9",
          "name": "Evaporate",
          "kind": "reaction",
          "description": "Trigger An effect would deal fire damage to the boiling spring, even if they would ignore the damage\nEffect The boiling spring evaporates into the air. Until the beginning of the boiling spring's next turn, they can't be attacked or targeted. They still occupy their space, and their auras still function as normal.",
          "traits": []
        },
        {
          "id": "zSTlM9Fk66DQ0PuQ",
          "name": "Sweltering Heat",
          "kind": "passive",
          "description": "25 feet. The boiling spring radiates heat, raising the air temperature around them. A creature that starts its turn in the emanation must succeed at a check (fortitude, dc:33) save or become Fatigued while it remains in the area; creatures immune to environmental heat effects or with any fire resistance are immune.",
          "traits": [
            "aura",
            "fire"
          ]
        },
        {
          "id": "GiNgPElBEzkxHc5Z",
          "name": "Freeze and Shatter",
          "kind": "passive",
          "description": "If the boiling spring is destroyed with cold damage, their body freezes over and explodes, sending out a wave of frigid air and ice shards that deal 4d6 piercing damage|options:area-damage] to creatures in a 20-foot emanation (check (reflex, dc:36, basic, options:area-effect) save).",
          "traits": []
        },
        {
          "id": "xYrzF20l1k4U6sAz",
          "name": "Scalding Breath",
          "kind": "action",
          "description": "The boiling spring breathes out a cloud of steam in a 30-foot cone that deals 14d6 fire damage to each creature in the area (check (reflex, dc:33, basic, options:area-effect) save). The boiling spring can't use Scalding Breath again for [[/gmr 1d4 #Recharge Scalding Breath]].",
          "traits": [
            "fire",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:elder-outcrop",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "GdXjhFu8Afg24fM9",
      "slug": "elder-outcrop",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5cec6052b134ec9998468058216caab2fb92bd3e9ff0fdc4b494f947dc340870",
    "translatableHash": "sha256:c6d385c3010d0b9092c1cf0ccd1559f60100db179c7ea2eff9ddd7309bf21174",
    "data": {
      "schemaVersion": 1,
      "name": "Elder Outcrop",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "An outcrop of dense stone that spends ages eroding can gain sapience and slowly awaken with the wisdom of nature. Such elemental beings are slow to action and difficult to anger, spurred only by immediate threats.\nThe vast ranks of earth elementals have been slow to respond to the return of the elemental lords and the Planes of Metal and Wood. These events have not broken the mountains, nor have they blown away the sands.\nEarthy Emotions\nEarth elementals talk even less than most elementals. They're ponderous, weighing decisions so slowly they can crush the energy from a discussion. Their foremost concern is whether a situation can be endured. Though a rare or resplendent treasure might entice an earth elemental, it's difficult to spur any sense of urgency in them without the presence of an immediate threat.\nWisdom Of Stone\nElder outcrops learn a lesson for every grain of rock eroded away, every squall and freeze that has shaped their craggy bodies. As wizened advisors and tutors, they have the respect and affection of other elementals, as well as from natural creatures. Druids of the stone order revere the wisdom of elder outcrops, always happy to receive their wide perspective, literal and philosophical.",
      "armorClass": 33,
      "hitPoints": 295,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 19,
        "will": 26
      },
      "abilities": {
        "str": 8,
        "dex": -2,
        "con": 8,
        "int": 1,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 29,
        "diplomacy": 25,
        "nature": 26,
        "survival": 26
      },
      "languages": [
        "common",
        "fey",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Ioyt2Q2gcbJPstAP",
          "name": "Column",
          "bonus": 27,
          "damage": "3d10+14 bludgeoning",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "DjVUDQMoSGXvtYui",
          "name": "Rock",
          "bonus": 27,
          "damage": "3d6+14 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "9eDhIJFe4UYv3I1p",
          "name": "Tremorsense 120 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "M2NayqVBoTKTwNWX",
          "name": "Dust Eternal",
          "kind": "passive",
          "description": "30 feet. Dust swirls about the outcrop, rendering everything within its aura (including the outcrop) Concealed. In addition, the dust at the outcrop's base creates difficult terrain on the ground within the aura. The outcrop can activate or deactivate this aura using a single action, which has the concentrate trait.",
          "traits": [
            "aura",
            "earth"
          ]
        },
        {
          "id": "8BMOIRCuzCUM97di",
          "name": "Unstoppable",
          "kind": "passive",
          "description": "The elder outcrop's slowed condition can't exceed Slowed 1, and it ignores penalties to its Speeds and the Immobilized condition.",
          "traits": []
        },
        {
          "id": "uC3V9rhBFNvb1Y0L",
          "name": "Call of Earth",
          "kind": "passive",
          "description": "A flying creature hit by the elder outcrop's rock ranged strike is affected by a 7th-rank Earthbind spell (check (fortitude, dc:33, traits:transmutation)).",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "7yTc8hGVEy3asl4K",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The elder outcrop can Burrow through any earthen matter, including rock. When it does so, the elder outcrop moves at its full burrow Speed, leaving no tunnels or signs of its passing.",
          "traits": []
        },
        {
          "id": "qziFmDwq0AL2lTYM",
          "name": "Natural Formation",
          "kind": "action",
          "description": "Until the next time it acts, the elder outcrop appears to be a natural terrain feature. It has an automatic result of 47 on Deception checks and DCs to pass as a natural outcropping of rock. The outcrop's dust eternal aura is deactivated while Natural Formation is being used.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "HGLgW2sTgGNS7Iat",
          "name": "Stone Grip",
          "kind": "action",
          "description": "Great fingers of stone arise to grasp up to two Medium or smaller creatures on the ground in the outcrop's aura. Each target must succeed at a check (reflex, dc:33) save or be Grabbed by the stone hand (or Restrained on a critical failure; [[/act escape dc=33]]). A creature grabbed or restrained by a stone hand at the end of its turn becomes Slowed 1 or increases its existing slowed condition by 1. When a creature is unable to act due to the slowed condition from this effect, the creature is permanently Petrified.",
          "traits": [
            "earth",
            "incapacitation",
            "primal"
          ]
        },
        {
          "id": "BmBLc6WbraqBchVd",
          "name": "Throw Rock",
          "kind": "action",
          "description": "",
          "traits": []
        },
        {
          "id": "mFWOVjOrY4OaaoKq",
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
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:twins-of-rowan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "TlM6ePIW2yHNOMJv",
      "slug": "twins-of-rowan",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d1359bda792118cb4712945767b74fc95e1932fe39d11e80d29ac3e62777509",
    "translatableHash": "sha256:0b68d688e3a0a35fd11dd18addb050ba41e5da48f897e8b2bc6898618a3bd67e",
    "data": {
      "schemaVersion": 1,
      "name": "Twins of Rowan",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "Twins of rowan are among the most powerful elementals on the Plane of Wood, specially crafted to patrol a wide range of wilderness and maintain the plane's carefully constructed order. Despite having two heads and torsos, each twins of rowan is a singular creature; like all wood elementals, their true consciousness is not in their heads but in the roots, and their true body is the trunk of the tree, not the extended limbs.",
      "armorClass": 34,
      "hitPoints": 273,
      "speedFeet": 35,
      "perception": {
        "modifier": 26,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 17,
        "will": 27
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 8,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 24,
        "intimidation": 26,
        "nature": 21
      },
      "languages": [
        "arboreal",
        "common",
        "fey",
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "blinded",
          "dazzled",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 15",
          "fire 15"
        ]
      },
      "attacks": [
        {
          "id": "SrXNyKZADcNO429m",
          "name": "Rapier",
          "bonus": 26,
          "damage": "4d8+5 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "reach-15"
          ]
        },
        {
          "id": "mlVofW5Wof6Uk1HD",
          "name": "Fist",
          "bonus": 25,
          "damage": "3d10+5 bludgeoning",
          "traits": [
            "agile",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "QqZNJyjTZhH4Y7xn",
          "name": "Stump",
          "bonus": 26,
          "damage": "2d10+15 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "6EoAY7Waox2aOTxF",
          "name": "Shielded Eyes",
          "kind": "passive",
          "description": "A twins of rowan's protective mask shields them from blinding and dazzling effects.",
          "traits": []
        },
        {
          "id": "e2LjiAVfVfUif95F",
          "name": "Beacon of the Rowan Guard",
          "kind": "passive",
          "description": "40 feet.\nThe lantern carried by the twins of rowan contains pure elemental life energy that resonates with and empowers all wood elementals. While within the emanation, a creature with the elemental trait and either the plant trait or wood trait gains fast healing 10 and a +2 circumstance bonus to all attack and damage rolls. The aura can be counteracted with a DC 30 check to Dispel Magic; doing so deactivates the aura for [[/gmr 1d6 #Rounds Deactivated]] rounds",
          "traits": [
            "aura",
            "plant",
            "primal",
            "wood"
          ]
        },
        {
          "id": "JnqnY6RCeQsgMGJZ",
          "name": "Follow-Up Combo",
          "kind": "action",
          "description": "The twins of rowan makes a rapier Strike, followed by two fist Strikes, all against the same target. These attacks all count toward the twins' multiple attack penalty, but the penalty doesn't increase until after the twins make their attacks.",
          "traits": []
        },
        {
          "id": "yMgymtaHqV015sgl",
          "name": "Lifespring Burst",
          "kind": "action",
          "description": "Once per day, the twins of rowan can strike the ground with their sword, releasing a 30-foot burst of life energy centered on the twins that deals 14d6 vitality damage (check (fortitude, dc:30, basic, options:area-effect) save); the twins of rowan is immune. The area affected by this burst then becomes greater difficult terrain as vibrant new plant life ruptures through it.",
          "traits": [
            "plant",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "3YBLT69Pc7pAjGMx",
          "name": "Throw Stump",
          "kind": "action",
          "description": "Can also be used to throw stumps and logs.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:living-magma",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "TPi6QRmfyM9BWSof",
      "slug": "living-magma",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc285be05627e9d9a3ff052db2cd82c9b733cfe55991e26c4dadacecf995d7e1",
    "translatableHash": "sha256:f7e2c432ae6b41c07355aa77a7cb64081be66465f4b84474b5e8ffc0377dcd07",
    "data": {
      "schemaVersion": 1,
      "name": "Living Magma",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "Living magmas can lie dormant for centuries below the earth before they awaken from their slumber in a fiery a volcanic eruption. This is especially dangerous when entire colonies of the molten elementals arise at the same time.\nThe ifrits of the Dominion of Flame conscript even more of the plane's fire elementals in preparation for new wars in the returned planes, even mobilizing ones that rarely travel near settlements.",
      "armorClass": 35,
      "hitPoints": 250,
      "speedFeet": 40,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 20,
        "will": 22
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 5,
        "int": 4,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 27,
        "intimidation": 23,
        "stealth": 22
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "aAVCTfVPm31BvOJe",
          "name": "Magma Fist",
          "bonus": 27,
          "damage": "2d4 fire; 3d6 fire; 3d8+11 bludgeoning",
          "traits": [
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "yU8ypcjhTmbohzMk",
          "name": "Molten Form",
          "kind": "passive",
          "description": "Any creature that hits the living magma with an unarmed Strike or otherwise touches it takes 10 fire damage. If a gallon or more of water touches the living magma, or if it's affected by a water effect, its outer layer of lava hardens to a rocky shell, deactivating its molten form and imposing weakness 15 to bludgeoning damage. Molten form reactivates if the living magma swims in lava for 1 minute.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "GmicDpVr0MpvPIX0",
          "name": "Trap Weapon",
          "kind": "reaction",
          "description": "Frequency once per round\nTrigger A creature hits the living magma with a melee weapon\nEffect The living magma attempts an check (athletics, defense:athletics) check against the triggering creature's Athletics DC. On a success, the living magma traps the weapon in its body and pulls it from the attacker's grasp. A creature can Interact to retrieve the weapon, but the attempt fails unless the creature succeeds at an check (athletics, against:fortitude, rollerRole:target) check against the living magma's Fortitude DC (typically 36). If the living magma uses Engulf, it also absorbs all trapped weapons, rendering them unreachable until it dies.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "fYBcihXoyNMymu8K",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:33, options:damaging-effect,inflicts:grabbed,inflicts:slowed), 2d10 bludgeoning damage] damage, [[/act escape dc=33]], Rupture 25",
          "traits": []
        },
        {
          "id": "CC0E4IHGumPooXy8",
          "name": "Launch Lava",
          "kind": "action",
          "description": "The living magma hurls an exploding glob of lava up to 120 feet. Each creature in a 10-foot burst takes 7d6 fire damage (check (reflex, dc:33, basic, options:area-effect) save).",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "QZArmMnH83VfT3JB",
          "name": "Reignite",
          "kind": "action",
          "description": "Requirements The living magma is not in molten form\nEffect The living magma returns to molten form.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "H6eLyhgpVDkY5Is2",
          "name": "Volcanic Heat",
          "kind": "passive",
          "description": "40 feet. Any creature that enters or starts its turn in the aura takes 15 fire damage (check (fortitude, dc:33, basic) save). A creature that fails its save is also Enfeebled 1 until it's no longer in the aura.",
          "traits": [
            "aura",
            "fire"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:picture-in-clouds",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "YWFBlSODRkWD60Je",
      "slug": "picture-in-clouds",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:26fd670a242f73a9e87b77ee676dee6535004c7edd18ff710296077d97139ea7",
    "translatableHash": "sha256:f7da42222c0d80a873c595c78f3da23b43e0115e305af31a7b51efedf2288c80",
    "data": {
      "schemaVersion": 1,
      "name": "Picture-in-Clouds",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The shifting shapes of clouds in the sky have captivated the imaginations of mortal children for centuries. Pictures-in-clouds represent this pure possibility of air, transforming into anything the Universe imagines them to be.\nMany elementals that roam the Plane of Air embody the mercurial formlessness and chaos of tumultuous storms.\nTempestuous Spirits\nAir elementals are often flighty contrarians, often more concerned with bringing about change than with the specific changes they enact. Art and writing created by such elementals is exceptionally rare, as they usually destroy their projects once the challenge and excitement of completing them fades.\nInvisible Courtiers\nFormless and invisible elementals are the favored children of Hshurha, the air elementals' mother goddess. They receive favorable treatment in her realm, Verglas Precessional, where they serve as trusted advisors, emissaries to other planes, and members of her personal retinue, in addition to performing clandestine tasks the goddess wishes to keep hidden.",
      "armorClass": 35,
      "hitPoints": 175,
      "speedFeet": 0,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 26,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 8,
        "con": 5,
        "int": 4,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 26,
        "stealth": 24
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "AWJ53yllhed4ZXoS",
          "name": "Gust",
          "bonus": 26,
          "damage": "3d10+10 bludgeoning",
          "traits": [
            "finesse",
            "reach-20"
          ]
        },
        {
          "id": "co9SgsX8OUmPxGGj",
          "name": "Lightning Lash",
          "bonus": 26,
          "damage": "3d12 electricity",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "z3zV7qtWvRzQf68z",
          "name": "Disperse",
          "kind": "reaction",
          "description": "Trigger The picture-in-clouds takes damage from a hostile action\nEffect The picture-in-clouds disperses. Until the end of the current turn, they can't be attacked or targeted, they don't take up space, and any auras or emanations they have are suppressed. At the end of the turn, the picture-in-clouds re-forms in any sufficient space within 150 feet of where they dispersed; any auras or emanations they have are restored as long as the duration didn't run out while the elemental was dispersed.",
          "traits": []
        },
        {
          "id": "DIIuzRQ3T88ID3n6",
          "name": "High Winds",
          "kind": "passive",
          "description": "60 feet. Air within the emanation is difficult terrain for Flying creatures that don't have the air trait.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "wjaEnVx69nysSMCQ",
          "name": "Cloudgaze",
          "kind": "action",
          "description": "The picture-in-clouds shifts into their choice of an eagle shape, elephant shape, or sword shape.",
          "traits": []
        },
        {
          "id": "mLW9XuxdkACGswz2",
          "name": "Elephant Blast",
          "kind": "action",
          "description": "Requirements The picture-in-clouds is in elephant shape\nEffect The picture-in-clouds breathes out a 30-foot cone of air from their cloudy trunk. Creatures in the area must attempt a check (fortitude, dc:30, options:area-effect,forced-movement) save to stand their ground. A creature pushed into a solid object stops moving and takes 4d10 bludgeoning damage.\nCritical Success The creature is unaffected.\nSuccess The creature is pushed 20 feet.\nFailure The creature is pushed 40 feet.\nCritical Failure The creature is pushed 40 feet and knocked Prone.",
          "traits": []
        },
        {
          "id": "WFEv5nXEjmqmEtye",
          "name": "Feather Storm",
          "kind": "action",
          "description": "Requirements The picture-in-clouds is in eagle shape\nEffect The picture-in-clouds Flies 125 feet, flapping their wings and creating a barrier along their path. This barrier has the effects of Wall of Wind (check (fortitude, dc:30)) and lasts until the end of the picture-in-clouds's next turn.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "pG0x520Uwo6BJI2S",
          "name": "Slicing Wind",
          "kind": "action",
          "description": "Requirements The picture-in-clouds is in sword shape\nEffect The picture-in-clouds spins, forming a whirlwind that deals 5d8 slashing damage in a 15-foot emanation (check (reflex, dc:30, basic, options:area-effect) save).",
          "traits": []
        },
        {
          "id": "2NEmC2ONaE3ogfMP",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The picture-in-clouds's movement doesn't trigger reactions.",
          "traits": []
        },
        {
          "id": "7FiIKCvEtmejoIwD",
          "name": "Push 15 feet",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:melomach",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "Z5qBvEJ628DGe8zS",
      "slug": "melomach",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:983bd63de3678d75592dca943d25690aaf7dd3157dffdbb60614741c6ad1660c",
    "translatableHash": "sha256:babe0f753f193f282168d455a7de9b2d985bc2b8b1f436416e2b22e5f0ab1607",
    "data": {
      "schemaVersion": 1,
      "name": "Melomach",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "Melomachs are massive, vaguely humanoid elementals composed of metal debris. They take great pride in decorating and augmenting their metallic bodies with haphazardly placed spikes, blades, humanoid or bestial skulls, and other similar adornments, the more ostentatious the better. When two melomachs meet, the resulting contests of physical might and vocal prowess can last for days, often leaving the landscape ravaged for miles in every direction.",
      "armorClass": 33,
      "hitPoints": 292,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 23
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 9,
        "int": 0,
        "wis": 2,
        "cha": 7
      },
      "skills": {
        "athletics": 30,
        "crafting": 21,
        "intimidation": 28,
        "performance": 26
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "tR21UrEgzaAGXmS7",
          "name": "Fist",
          "bonus": 26,
          "damage": "3d12+18 bludgeoning",
          "traits": [
            "agile",
            "reach-15",
            "unarmed",
            "versatile-p",
            "versatile-s"
          ]
        },
        {
          "id": "Q05BlcseDDI4mqFw",
          "name": "Lightning",
          "bonus": 21,
          "damage": "3d10+16 electricity",
          "traits": [
            "electricity",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "JejDSVHAei7hEtpP",
          "name": "Heavy",
          "kind": "passive",
          "description": "As long as it is immobile, the elemental can't be forcibly moved or knocked Prone. If it takes a move action, it loses this immunity until the start of its next turn.",
          "traits": []
        },
        {
          "id": "pCR0ZYJGKRPKMncQ",
          "name": "Lightning Punch",
          "kind": "action",
          "description": "The melomach makes a fist Strike, then makes a lightning Strike against a different creature within 120 feet of the fist Strike's target. Both Strikes count toward the melomach's multiple attack penalty, but it doesn't increase until after both attacks are made.",
          "traits": []
        },
        {
          "id": "Cuxx3k8cmiNAfwyI",
          "name": "Rhythmic Stomp",
          "kind": "action",
          "description": "Frequency once per round\nEffect The melomach's footsteps raise a clanging sound through their body to create a brief musical phrase. The melomach Strides, then generates the effect of one of the following bard composition cantrips at 7th rank: Allegro, Dirge of Doom (adds the fear trait), or Triple Time.",
          "traits": [
            "emotion",
            "mental",
            "primal"
          ]
        },
        {
          "id": "64G8CZ8e4CLIjV1E",
          "name": "Scream",
          "kind": "action",
          "description": "The melomach unleashes a guttural, ear-piercing wail. All creatures in a 120-foot cone take 7d12 sonic damage with a check (fortitude, dc:32, options:area-effect,damaging-effect,inflicts:deafened,inflicts:stunned) save.\nThe melomach can't Scream again for [[/gmr 1d4 #Recharge Scream]].\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage, is Stunned 1, and is Deafened for 1 minute.\nCritical Failure The creature takes double damage, is Stunned 3, and is deafened permanently.",
          "traits": [
            "primal",
            "sonic"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:brass-bastion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "411wAxSMPPAImVz5",
      "slug": "brass-bastion",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:92d3d026a79c564ce1999f12b6be34953e7d0e52b6ef7e8d481cbf74aa971c61",
    "translatableHash": "sha256:762c1d6de710246550754dafe5feb58bee3b82116971d024bfb92fb9abc8e9d1",
    "data": {
      "schemaVersion": 1,
      "name": "Brass Bastion",
      "level": 14,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "construct",
        "fire",
        "mindless"
      ],
      "description": "Brass bastions are formidable sentinels crafted from elemental fire and extraplanar brass. While they can be shaped into many forms, most depict muscular warriors with curving horns and stern or taunting expressions. Within each brass shell is a raging inferno—the source of its ceaseless heat.\nThough ifrits originally created brass bastions to act as servants and guards, the knowledge of how to craft them has spread throughout the Plane of Fire. They can even be found on the Plane of Earth thanks to interplanar trade. In Medina Mudii'a, brass bastions walk the streets, tend shops, and stand guard. Bespoke brass bastions are passed down as family heirlooms or gifted to business partners and allies. Scions of the wealthiest ifrit lineages never travel without a train of brass bastions clad in family livery. Destroying a rival ifrit's brass bastion is a quick way to erode their political status, though anyone caught performing such sabotage faces swift retribution.\nMost brass bastions prominently display the sigil of their owner or maker, though magical methods can also determine who crafted a specific construct. Brass bastions forged by favored artisans are a status symbol in many ifrit communities. Ifrits consider a brass bastion crafted by a non-ifrit to be inherently inferior, barely worth the cost of its materials. Brass bastions obey magical programming imprinted at the time of their creation or follow commands from their owners. Most can't speak, but a few have magical voices and can parrot simple phrases, recite poetry, or tell bedtime stories at the crafter's fancy.\nBrass Scraps\nOn the Plane of Fire, destroyed brass bastions are sold as scrap to enterprising ifrits, who reforge the remains into new brass bastions. Many ifrits pay more for the remains of a brass bastion crafted by their rivals yet react violently when offered brass bastion remains they originally created. Thus, identifying a brass bastion's original crafter is a valued skill. Few non-ifrits dare trade in brass bastion scraps, save in extralegal markets.",
      "armorClass": 36,
      "hitPoints": 205,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 22,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 0,
        "con": 7,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 30
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "fire",
          "sleep",
          "poison",
          "vitality",
          "void"
        ],
        "resistances": [
          "physical 15 except adamantine",
          "spells 15 except water"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Fn7q9IR2SFnmIdjZ",
          "name": "Falchion",
          "bonus": 28,
          "damage": "2d10+12 slashing",
          "traits": [
            "forceful",
            "magical",
            "reach-15",
            "sweep"
          ]
        },
        {
          "id": "POvbJR560T23UROn",
          "name": "Fist",
          "bonus": 26,
          "damage": "2d6+12 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "8kx8v6e2fiNjL6UR",
          "name": "Molten Demise",
          "kind": "passive",
          "description": "When a brass bastion is destroyed, its body explodes in a flurry of elemental flame and superheated brass, dealing 4d6 piercing damage|options:area-damage] to creatures in a 20-foot emanation (check (reflex, dc:34, basic, options:area-effect) save).",
          "traits": [
            "arcane",
            "fire"
          ]
        },
        {
          "id": "TV6db9rqgTwTJsAE",
          "name": "Breathe Smoke",
          "kind": "action",
          "description": "The brass bastion exhales superheated smoke and cinders in a 10-foot burst centered on a corner of its space. The smoke persists for 1 round. Any creature in the area (or that later enters the area) takes 15d6 fire damage (check (reflex, dc:34, basic, options:area-effect) save); on a critical failure, the creature catches fire, taking 2d6 persistent fire damage as well. All creatures in the smoke become Concealed, and all creatures outside the smoke become concealed to creatures within it. The brass bastion can't Breathe Smoke again for [[/gmr 1d4 #Recharge Breathe Smoke]].",
          "traits": [
            "arcane",
            "fire"
          ]
        },
        {
          "id": "VnwurG1G6XNE8Y7C",
          "name": "Heat Weapon",
          "kind": "passive",
          "description": "Metal weapons wielded by a brass bastion superheat, dealing 1d10 additional fire damage (included in its statistics).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:faydhaan-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "E7OZ0cdycOi5Cuu1",
      "slug": "faydhaan-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6ea77800b220487f240dcc7ef547b61d5b5aef2916032fe181cc8813e225caaf",
    "translatableHash": "sha256:20b2da8227e44d6a777039bbb01bf0348605eb0d2e48c41332ce7c88dfd207ec",
    "data": {
      "schemaVersion": 1,
      "name": "Faydhaan Shuyookh",
      "level": 14,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "elemental",
        "genie",
        "water"
      ],
      "description": "Faydhaan shuyookhs are powerful faydhaans venerated as leaders, diplomats, and negotiators. As representatives of faydhaan-kind, they observe strict rules of etiquette and hospitality and hold the literary and performing arts in high esteem. A faydhaan shuyookh takes delight in greeting guests, and being greeted in return, to see how many different greetings they can demonstrate. Guests who creatively engage in this customary greeting game will impress a faydhaan shuyookh and receive magnificent hospitality.",
      "armorClass": 36,
      "hitPoints": 240,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "wavesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 27,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 7,
        "con": 5,
        "int": 4,
        "wis": 5,
        "cha": 8
      },
      "skills": {
        "athletics": 27,
        "crafting": 24,
        "deception": 26,
        "diplomacy": 28,
        "nature": 25,
        "performance": 28,
        "society": 26,
        "stealth": 27
      },
      "languages": [
        "common",
        "muan",
        "petran",
        "pyric",
        "sussuran",
        "talican",
        "thalassic"
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
          "id": "97WRvpQJrGDL24Xu",
          "name": "Jambiya",
          "bonus": 28,
          "damage": "2d4+13 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-10",
            "versatile-s"
          ]
        },
        {
          "id": "uxBlr8MGkrHuUS3R",
          "name": "Fist",
          "bonus": 27,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "9e5NSMdmlvrntTKs",
          "name": "Jambiya",
          "bonus": 29,
          "damage": "2d4+13 piercing",
          "traits": [
            "agile",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "RNVKOfijgLjbbu99",
          "name": "+2 Bonus on Perception to Sense motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "vZmgRe7m07KQatZn",
          "name": "Detect Magic",
          "kind": "passive",
          "description": "You cast detect magic at regular intervals. You move at half your travel speed or slower. You have no chance of accidentally overlooking a magic aura at a travel speed up to 300 feet per minute, but must be traveling no more than 150 feet per minute to detect magic auras before the party moves into them.",
          "traits": [
            "concentrate",
            "exploration"
          ]
        },
        {
          "id": "vvuafBYQdckpocEu",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "FBzTBRTIea1DZ0f4",
          "name": "Aura of Hospitality",
          "kind": "passive",
          "description": "60 feet. The faydhaan shuyookh dissuades those around them from hostility. Willing creatures in the emanation gain a +2 status bonus to Society and Diplomacy checks. The shuyookh can suppress or resume the aura as a free action. If the shuyookh acts hostile, the aura deactivates and can't be reactivated for 1 hour. When any other creature in the aura acts hostile, it must attempt a check (will, dc:35) save. On a success, it's unaffected and doesn't need to save again for 1 hour; on a failure, its current action is disrupted, as are any other hostile actions it attempts for 1 round.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "Ya9P3f7O89dNO0sL",
          "name": "Turbulent Seas",
          "kind": "passive",
          "description": "60 feet. Water in the aura that is also in the same body of water as the faydhaan is difficult terrain for Swimming creatures. Creatures with the water trait are immune.",
          "traits": [
            "aura",
            "water"
          ]
        },
        {
          "id": "w9GQB6g7nsx4ZDGW",
          "name": "Change Shape",
          "kind": "action",
          "description": "The faydhaan transforms into a Small or Medium water elemental, aquatic animal, or humanoid. This doesn't affect the faydhaan's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "v5z7UjE9C9n5CoZ5",
          "name": "Diplomatic Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh interprets the wish to please the most people possible.",
          "traits": [
            "downtime"
          ]
        },
        {
          "id": "FN1An5GYhLvX5vcU",
          "name": "To the Hilt",
          "kind": "action",
          "description": "The faydhaan shuyookh makes a melee jambiya Strike and buries the blade deep, dealing an extra 3d6 persistent bleed damage on a hit (6d6 on a critical hit).",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "IJA2uWllA9JMgBOG",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "lxJ41mw5aaCcbjPn",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "GS8VlxjgSJhEyYFF",
              "name": "Befitting Attire (At Will)",
              "rank": 2
            },
            {
              "id": "18psUJxOEN5vuFpe",
              "name": "Create Water (At Will)",
              "rank": 2
            },
            {
              "id": "KHbLahznxYtCkYu7",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "VSv7pZBj3KXVCd24",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "iKELstj0nddgt7bj",
              "name": "Water Breathing",
              "rank": 2
            },
            {
              "id": "IZUanoSdqdLedeHI",
              "name": "Hydraulic Push (At Will)",
              "rank": 4
            },
            {
              "id": "QQ0Bqt3DvVzRiIOR",
              "name": "Invisibility",
              "rank": 4
            },
            {
              "id": "1pW5PBopzw5DAvIC",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "xevHShtm8NIKuwGM",
              "name": "Control Water (At Will)",
              "rank": 5
            },
            {
              "id": "MFfGT5Pel9aTBCZQ",
              "name": "Howling Blizzard (At Will)",
              "rank": 5
            },
            {
              "id": "095UNZq2xewoBatX",
              "name": "Mirage",
              "rank": 5
            },
            {
              "id": "dpT3ViMCqwMpw7rj",
              "name": "Truespeech (At Will)",
              "rank": 5
            },
            {
              "id": "HjgG3VSUDUKDO6Ei",
              "name": "Hydraulic Torrent",
              "rank": 7
            },
            {
              "id": "okqMZot2zB3KRt1p",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or the Universe only)",
              "rank": 7
            },
            {
              "id": "jGhkgIRyCQ4d2WLc",
              "name": "Planar Palace",
              "rank": 7
            },
            {
              "id": "BK4MW9NgpCNll1pV",
              "name": "Summon Elemental",
              "rank": 7
            },
            {
              "id": "ijA3ay3eLCraVzIw",
              "name": "Truespeech (Constant)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:lithic-locus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "kzczIOOaDfPlFc03",
      "slug": "lithic-locus",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:508f0a95ca7d472875e7dcf151eb6969d0d5e915bcdfb1197a70ba434159819e",
    "translatableHash": "sha256:83133b598a18bb5a054a994ece65bcfb5751ca33334abc039916c443a9d5ba78",
    "data": {
      "schemaVersion": 1,
      "name": "Lithic Locus",
      "level": 14,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "construct",
        "earth",
        "elemental",
        "spirit"
      ],
      "description": "Civilizations die, buried by time, but their memory may yet linger in shattered pottery, collapsed edifices, and destroyed artwork, compressed and clarified under the weight of rock and soil. Some excavated sites might still hold a sliver of consciousness in their base materials, which walks again as an avatar of an extinct people when awakened. These lithic loci represent the triumphs and folly of their society. Speaking to one is speaking to a witness of an archaic time. The lithic locus's persona expresses their culture in all dimensions, and thus the attitudes of lithic loci vary greatly. Their appearances show the aesthetics and technology of their time, suspended in a cloud of excavated earth.\nAs plentiful as archaeological sites are in the Universe, the Plane of Earth holds countless more of far older provenance. Some of its inhabitants have even found lithic loci from peoples far older than themselves, seeing directly what would remain should they dwindle out of living memory. This has led some civilizations to even plan their decline by leaving a legacy in the living rock.\nAncient Finds\nLithic loci often contain important and valuable items. None of these elemental constructs are likely to agree to be looted, but some loci bestow their antiquities upon worthy successors, proud to see their culture's creations put to effective use in the modern day. Lithic loci can also direct earnest seekers to other lost treasures, helping to restore knowledge of an extinct society.",
      "armorClass": 35,
      "hitPoints": 260,
      "speedFeet": 30,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 21,
        "will": 27
      },
      "abilities": {
        "str": 6,
        "dex": 0,
        "con": 6,
        "int": 7,
        "wis": 6,
        "cha": 2
      },
      "skills": {
        "athletics": 26,
        "society": 25
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "vitality",
          "void"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HvoA8O4vkmBjm9fk",
          "name": "Ancient Stone",
          "bonus": 28,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "earth",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "NTvAPF3uYtBEjKHO",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ho4yCTjHW2faw1wl",
          "name": "Antiques",
          "kind": "passive",
          "description": "A lithic locus contains at least one magic item. Any such antiques are durable, permanent items that were part of the locus's site and typify their culture. The locus receives the benefits of such an item as if wearing or holding it and can activate it. A lithic locus typically has an item of their level.",
          "traits": []
        },
        {
          "id": "zy2ZIYdArMMQOueU",
          "name": "Bury",
          "kind": "passive",
          "description": "Any creature hit by the locus's ancient stone Strike is partially buried in a tide of earth and rock, becoming Immobilized ([[/act escape dc=34]]).",
          "traits": []
        },
        {
          "id": "FmxW1iTgKYS6xHtw",
          "name": "Echo the Past",
          "kind": "action",
          "description": "The locus calls forth a remnant of the past civilization to impart a lesson or control the present. Using this ability again ends any previous manifestation. The locus casts one of the following occult innate spells (DC 34) for the listed purpose.\nDominate The dominated creature takes on the role of a historical figure or someone in the social hierarchy (such as high priest) from the locus's civilization.\nIllusory Scene The scene reenacts a historical event from the locus's civilization.\nInvoke Spirits The spirits are drawn from the locus's memories of people from their civilization.\nWall of Stone The locus recreates the wall of a building from their civilization, complete with decorations.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "OW7ODUDcXpY27DxU",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "8JG3eeTU2bpCGIx4",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "420BMZBjzgioYnTe",
              "name": "One with Stone",
              "rank": 3
            },
            {
              "id": "t0IvCEscPXu8IhRS",
              "name": "Illusory Scene (Echo the Past)",
              "rank": 5
            },
            {
              "id": "BNdEDE2u53cmi65B",
              "name": "Invoke Spirits (Echo the Past)",
              "rank": 5
            },
            {
              "id": "mqoyzZuBNWLVKmd6",
              "name": "Wall of Stone (Echo the Past)",
              "rank": 5
            },
            {
              "id": "ig4v4II1Z3RTN9YF",
              "name": "Dominate (Echo the Past)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:vault-keeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "m6lUcyekHwJxTLzo",
      "slug": "vault-keeper",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5ca8f3f9452a538c2001b89128d939c64630f44b9d38271515c5ad238f386388",
    "translatableHash": "sha256:3ed2219e148048addce9b3a0baca56c22c3217c080e975fd6cbb8dea7a8eb47d",
    "data": {
      "schemaVersion": 1,
      "name": "Vault Keeper",
      "level": 14,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "The vault keepers lost Sairazul's spark and have life spans of two to three millennia. They maintain and protect the xiomorns' many experiments.\nWhen Sairazul created xiomorns, they were immortal. She created 65,536, all in her own image, and all imbued with a piece of her divine spark. During her imprisonment, Ayrzul used visions of a future extinction to manipulate them into sacrificing their power to him. This sacrifice split xiomorns into two classes: 32,768 vault builders who kept Sairazul's essence and 32,768 vault keepers who would live forever no longer. For millennia, xiomorns built a vast, magical civilization across the Plane of Earth, and when there was no space left to build, they left. On each new world, xiomorns build their vaults and conduct their experiments, endlessly searching for clues to help them avoid their extinction.\nVault Seeds\nXiomorns create magical underground caverns using vault seeds, ancient magical tools bequeathed to their species by Ayrzul as a reward for their sacrifice. The vault seeds were used to create the Vaults of Orv in Golarion's Darklands, and an accident involving an out-of-control vault seed created the mysterious Emerald Spire.\nCrystal Crafters\nXiomorns have mastered the creation of numerous magic items made of crystal beyond generation stones and vault seeds. These include pillars of black stone called whisperstones that allow xiomorns to communicate telepathically across vaults, orvgates that use weblike funnels of green crystal to allow teleportation between Darklands vaults, and a vortex in Orv called the Crystal Womb that connects to a crucial stronghold on the Plane of Earth.",
      "armorClass": 36,
      "hitPoints": 200,
      "speedFeet": 35,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 28,
        "will": 22
      },
      "abilities": {
        "str": 4,
        "dex": 8,
        "con": 6,
        "int": 8,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 26,
        "arcana": 26,
        "athletics": 26,
        "crafting": 26,
        "nature": 24,
        "thievery": 24
      },
      "languages": [
        "orvian",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "radiation"
        ],
        "resistances": [
          "physical 15 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "6Z5As0Vk0ZFyn7yE",
          "name": "Claw",
          "bonus": 28,
          "damage": "3d10+10 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "6wSSM9Kc0yzOsFx8",
          "name": "Crystal Wand",
          "bonus": 28,
          "damage": "3d4+10 piercing; 4d6 poison",
          "traits": [
            "finesse",
            "magical",
            "radiation"
          ]
        },
        {
          "id": "N6CPYKKItLvvcxLC",
          "name": "Crystal Shard",
          "bonus": 28,
          "damage": "5d6+6 piercing",
          "traits": [
            "earth",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "UrE3kHdNPQpWWXvj",
          "name": "Tremorsense (Imprecise) 120 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "gBajDLrXq7pHDmg3",
          "name": "Telepathy 300 feet",
          "kind": "passive",
          "description": "",
          "traits": [
            "aura",
            "magical"
          ]
        },
        {
          "id": "tRKUVrYpL8vpibQP",
          "name": "+2 Status to Recall Knowledge About Earth",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ffFiHpJiGqW1RE6q",
          "name": "Craft Crystal Wand",
          "kind": "passive",
          "description": "Frequency twice per day\nEffect The vault keeper spends 10 minutes creating a magic wand out of radioactive green crystal, containing any 5th-rank or lower earth spell of their choice. The wand can be used by other creatures, but it crumbles to sand at the end of the day and has no monetary value.",
          "traits": [
            "exploration"
          ]
        },
        {
          "id": "xLxAr9O3KpGR6Les",
          "name": "Item Caster",
          "kind": "passive",
          "description": "The vault keeper can Cast a Spell from any item (such as a staff or wand) as though it were on their spell list.",
          "traits": []
        },
        {
          "id": "3I2wnIEzRXgtx8Zb",
          "name": "Attack of Opportunity",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "D1MoXz1bpt97hDAJ",
          "name": "Constraining Crystal",
          "kind": "passive",
          "description": "When the vault keeper deals damage with a claw Strike, glowing green crystals cluster at the site of the attack. The target must succeed at a check (fortitude, dc:31) save or become Clumsy 1 for 1 hour (or Clumsy 2 on a critical failure). If the creature is already clumsy due to constraining crystal, additional failures increase that clumsy value instead, to a maximum of Clumsy 4.",
          "traits": [
            "earth",
            "magical"
          ]
        },
        {
          "id": "jLxHgJbqySWEesMi",
          "name": "Crystal Burst",
          "kind": "action",
          "description": "An explosion of razor-sharp splinters deals 15d6 piercing damage in a 30-foot burst within 120 feet, with a check (reflex, dc:35, basic, options:area-effect) save. The vault keeper can't use Crystal Burst again for [[/gmr 1d4 #Recharge Crystal Burst]].",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "2cB0ySa762HhhhQE",
          "name": "Slashing Surge",
          "kind": "action",
          "description": "The vault keeper Strides or Climbs and makes two claw Strikes at any point during that movement. Each Strike must target a different creature. The multiple attack penalty doesn't increase until after both attacks.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "yiIvzLhqLKQBotmB",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "W2LbzU9KT53XjJAc",
              "name": "Earthbind (At Will)",
              "rank": 4
            },
            {
              "id": "Em4jd3xK4FQ0fls4",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "v8zUMxOIJPWB2LcR",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "DkfjGy5iD8Dmyjb7",
              "name": "Shatter (At Will)",
              "rank": 5
            },
            {
              "id": "tKerU8e1XU9wgzQR",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "tLZYrQvlF29bK0lM",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "rcgB2Ykf6tDxkNOt",
              "name": "Speak With Stones (At Will)",
              "rank": 6
            },
            {
              "id": "zsUOtZm1tFocVEm2",
              "name": "Petrify",
              "rank": 7
            },
            {
              "id": "CD1UTMgJKRUfoSpV",
              "name": "Summon Elemental (Earth Only)",
              "rank": 7
            },
            {
              "id": "HTs7v9QRhiIrOOCL",
              "name": "Wall of Stone",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:ifrit-shuyookh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "XL7B63sTgdDJPbVQ",
      "slug": "ifrit-shuyookh",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d034283d886d3e7ca8011cd0a9775e15fab578c7ea88090db67e9fc81a61e05e",
    "translatableHash": "sha256:2560e401f5b57f6386e188208fe18724ef4b3043584147d0a944937c4487c733",
    "data": {
      "schemaVersion": 1,
      "name": "Ifrit Shuyookh",
      "level": 14,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "elemental",
        "fire",
        "genie"
      ],
      "description": "The leaders and luminaries of ifrits come from the wise but cruel shuyookhs. These spiteful manipulators lord their might over other genies and twist mortal greed into grief. Ifrit shuyookhs guide the Dominion of Flame with their vicious whims and unwavering belief in ifrit supremacy.\nHot Gossip\nScion of the noble but disgraced Mishalq family, the ifrit information broker Qalkami Mishalq emerged from exile and returned to the Dominion of Flame following the death of Sultan Suleiman XXII. Qalkami used contacts in the Pathfinder Society to eliminate her rivals in the Cinderfury family and step into a power vacuum of her own creation, expanding her control and influence among the great nobility of Medina Mudii'a.",
      "armorClass": 36,
      "hitPoints": 300,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 27
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 5,
        "int": 3,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "arcana": 25,
        "athletics": 28,
        "crafting": 23,
        "deception": 25,
        "diplomacy": 24,
        "intimidation": 26,
        "society": 23
      },
      "languages": [
        "common",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15",
          "water 15"
        ]
      },
      "attacks": [
        {
          "id": "IyLkgspJR2ZcxSBL",
          "name": "Scimitar",
          "bonus": 31,
          "damage": "2d6+16 slashing; 4d6 fire",
          "traits": [
            "fire",
            "forceful",
            "magical",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "PRi2BSz6wZXIMsap",
          "name": "Fist",
          "bonus": 29,
          "damage": "1d4+16 bludgeoning; 4d6 fire",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "D5Lbd3VMUkvO8k8F",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "QziuCiW6YG0yD2jV",
          "name": "Exploit Regret",
          "kind": "reaction",
          "description": "Trigger A creature fails an attack against the shuyookh\nEffect The shuyookh asks the triggering creature if it wishes it had hit. If the creature indicates yes, the shuyookh takes damage as if the attack had hit and the expression of regret makes the shuyookh Quickened for [[/gmr 1d4 #Quickened Rounds]]; they can use their extra action to Fly, Stride, or Strike.",
          "traits": [
            "arcane",
            "auditory",
            "fortune",
            "linguistic"
          ]
        },
        {
          "id": "AV1SDBG8bpRtadhP",
          "name": "Heat of Blazing Wings",
          "kind": "passive",
          "description": "5 feet. 4d6 fire damage (check (reflex, dc:31, basic, options:area-effect))",
          "traits": [
            "arcane",
            "aura",
            "fire"
          ]
        },
        {
          "id": "zboHPmJ0UHd9nqct",
          "name": "Burning Grasp",
          "kind": "passive",
          "description": "When the ifrit Grabs or restrains a creature, that creature takes 4d6 fire damage, and takes 4d6 fire damage at the end of each of its turns until freed.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "p8kYDP6KG4i8v38G",
          "name": "Change Shape",
          "kind": "action",
          "description": "The shuyookh transforms into a Small or Medium fire elemental or reptile, such as a snake. This doesn't affect the shuyookh's statistics, but it could change the damage type of their Strikes.",
          "traits": [
            "arcane",
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "okz4rvTmkyXJJ5uw",
          "name": "Combat Grab",
          "kind": "action",
          "description": "Requirements The ifrit shuyookh has a hand free\nEffect The shuyookh makes a melee Strike. If the Strike hits, the target is Grabbed in the shuyookh's free hand.",
          "traits": []
        },
        {
          "id": "b0rrE9XpFDx7VSvk",
          "name": "Pedantic Wish",
          "kind": "passive",
          "description": "Frequency three times per year\nEffect The shuyookh conducts a wish ritual for the benefit of a mortal, requiring no cost or secondary casters. The shuyookh's result is a success if they succeed at a check (flat, dc:5) or a failure if not. The shuyookh subverts the wish-maker's true intentions, twisting the phrasing to maximize suffering.",
          "traits": [
            "downtime"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "KAUVTBbk7Y8gBC4e",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 27,
          "saveDc": 35,
          "spells": [
            {
              "id": "qPMVvJdy32nu8Met",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "oBEtmI30n3kSCumU",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "azaIS25OUTtxVI9s",
              "name": "Illuminate",
              "rank": 1
            },
            {
              "id": "Ckb7DtzUTX1P1lPa",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "R4zq2o98NVMcaVMB",
              "name": "Fire's Pathway",
              "rank": 5
            },
            {
              "id": "EDmn3dH2ScDK1ZV2",
              "name": "Fireball (At Will)",
              "rank": 5
            },
            {
              "id": "HvqvVSxQlmsCTaaq",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "NEZZfBdJW7SV9Fgw",
              "name": "Interplanar Teleport (At Will; To Astral Plane, Elemental Planes, or the Universe Only)",
              "rank": 7
            },
            {
              "id": "OtcYfE1EqRty7O4Z",
              "name": "Volcanic Eruption",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:capritellix",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "RFxLankyC74BEY03",
      "slug": "capritellix",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cb2a25dcd898199e3a16a0d50a367e7cca36942977b09486630586992ff3ed1e",
    "translatableHash": "sha256:9c190b7c0edcbdf996376b96b30a0f94e440c763378c31e5c4f6c9d8fce63a24",
    "data": {
      "schemaVersion": 1,
      "name": "Capritellix",
      "level": 17,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "The Plane of Metal can seem unpredictable to the point of cruelty, and capritellixes embody this perfectly. With a head formed of discs that each depict a portion of their face, a capritellix reshapes their personality with a quick whir. Despite their different faces, each capritellix has a unified identity, with one memory and one name. Each mood that cycles through the pieces of their face is a massively amplified facet of their personality, rather than a completely different individual. The differences are subtle to most observers, but a capritellix can display numerous mood combinations—typically 64 for one with four faces per disc or 125 for one with five faces per disc. No matter how much they change their face, however, capritellixes can't suppress their haughty ego or shake the ceaseless despair they feel. The conflicting priorities of each mood within a capritellix make it difficult for any of these creatures to make long-term plans or form solid relationships. What one face builds up, another undermines, cursed all the while with full knowledge of the former intentions they will never fulfill and the well-laid plans they will abandon.\nRecycled Remains\nWhen horribly damaged or weary, capritellixes travel to a communal necropolis, much like a fabled elephant graveyard. Thousands of metallic hands reach up from the landscape, clawing at the sky, and severed discs that used to make up capritellixes pile up in endless heaps. Other elementals sometimes salvage these disparate parts and assemble them into a new capritellix—a unique individual with a brand-new identity.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 0,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 29,
        "will": 30
      },
      "abilities": {
        "str": 6,
        "dex": 8,
        "con": 8,
        "int": 7,
        "wis": 5,
        "cha": 9
      },
      "skills": {
        "acrobatics": 31,
        "athletics": 29,
        "deception": 32,
        "diplomacy": 32,
        "intimidation": 32,
        "performance": 32,
        "society": 30
      },
      "languages": [
        "talican"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "electricity 10",
          "physical 10 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "gccId4z7TeQaFWmG",
          "name": "Metal Hand",
          "bonus": 33,
          "damage": "3d8+14 bludgeoning; 1d12 electricity",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "5pmP2KUYBTaoPpzt",
          "name": "Eye Beam",
          "bonus": 33,
          "damage": "4d12 electricity",
          "traits": [
            "electricity",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "bHtEkJgg0QeAQqKW",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "wWpF5Lb9DQx9kiHy",
          "name": "Shift Mood",
          "kind": "action",
          "description": "The capritellix rotates the segments of their face, changing their personality and demeanor. Until they Shift their Mood again, the capritellix gains a +4 status bonus to a certain skill and to their Will DC against that skill, as well as a specific occult innate spell they can cast at will (9th rank, DC 38).\nAngry Intimidation, Dominate\nGregarious Performance, Uncontrollable Dance\nSerene Diplomacy, Suggestion\nSly Deception, Warp Mind",
          "traits": []
        },
        {
          "id": "ZJccf3A4uQ87v6r4",
          "name": "Dual Beams",
          "kind": "action",
          "description": "The capritellix makes two eye beam Strikes against different creatures. Their multiple attack penalty doesn't increase until after both Strikes.",
          "traits": []
        },
        {
          "id": "d9vsZn5NYGLQVl0U",
          "name": "Plentiful Metals",
          "kind": "passive",
          "description": "Each of the capritellix's levitating hands is made of a different precious metal. Each time a capritellix makes a metal hand Strike, they choose whether the hand they use is adamantine, cold iron, dawnsilver, orichalcum, silver, or any other solid precious metal.",
          "traits": []
        },
        {
          "id": "hwDQ6ntzh0P3f7Cr",
          "name": "Whirling Hands",
          "kind": "passive",
          "description": "Trigger A creature starts its turn in the capritellix's melee reach\nEffect The capritellix makes a metal hand Strike against the creature.",
          "traits": []
        },
        {
          "id": "KVhktCmt6YCQxh8e",
          "name": "Push 20 feet",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:zephyr-the-west-wind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "6CYo7vuxoroSqKzr",
      "slug": "zephyr-the-west-wind",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7eaba990a500f2f3a9e75729956abb8aedf073034be3769347ee94e16c63f8ba",
    "translatableHash": "sha256:280e20bee8413cccf7507ecb16c85ba9a557d4caf44e8ca12d79ad6812fa6f0c",
    "data": {
      "schemaVersion": 1,
      "name": "Zephyr, The West Wind",
      "level": 18,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The truth of life in the Universe is that weather controls the world. The life-giving water that flows across Golarion, the maintenance of healthy forests, and the snows, thaws, and rains that help crops flourish all rely on the weather—weather that's shaped at the whims of the winds. Anemoi are powerful beings from the Plane of Air tasked by ancient gods to guard the skies and shepherd the winds of every world across the planes. They guide the winds along their natural paths, and while neither malevolent nor malicious, an anemos has little regard for how a storm might affect any creature caught in its path.\nAnemoi can take several forms and shift between them as easily as they slip between the breezes. They wear humanoid guises to walk among mortals without drawing undue attention, and they transform into great, thunderous horses made of storm clouds and rain when they need to move quickly across the skies. Their true form, however, is wind coalesced into a humanoid shape, often with curling hair and feathery wings made of soft, drifting clouds.\nOn Golarion, each of the four cardinal winds are created and directed by a quartet of cardinal anemoi. The cold north winds are guided by Boreal, bringer of winter. Austral shepherds hot winds from the south. Eural brings stormy winds from the east. Finally, the gentle winds of spring come at the call of Zephyr, from the west. These four cardinal anemoi, alongside their councils of lesser anemoi, shape and control the winds across all of Golarion. As far as anyone can tell, the cardinal anemoi don't answer to a greater authority. There are even more powerful maximal anemoi living in the Plane of Air, but they seem content to leave the Universe out of their plans.\nThough the cardinal anemoi try to keep a degree of separation from mortal affairs, lesser anemoi occasionally take a closer interest. Some monitor a single settlement or county, protecting, nourishing, or even vindictively destroying it. Each one has their own sets of interests. Many are vain or petty. Even more change attitudes just as quickly as the winds they guide. Pleasing an anemoi isn't a matter of following a set formula, but rather repeatedly changing course to give them what they desire for their mercurial current interests or perceived needs.\nThe Shape Of The Air\nAnemoi on the Plane of Air are typically genderless, while those who spend time in the Universe sometimes experiment with or develop preferences for one of the genders of the mortals they watch or live close to.",
      "armorClass": 43,
      "hitPoints": 310,
      "speedFeet": 25,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 33,
        "will": 30
      },
      "abilities": {
        "str": 4,
        "dex": 9,
        "con": 7,
        "int": 6,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 38,
        "arcana": 31,
        "nature": 33,
        "occultism": 31,
        "performance": 38,
        "religion": 31,
        "stealth": 36,
        "survival": 33
      },
      "languages": [
        "common",
        "empyrean",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "cold 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oISNtENkIkBDDP5K",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+12 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical"
          ]
        },
        {
          "id": "gavsttKwnANMUBjN",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+10 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "Sql5ahktc7mZpEJX",
          "name": "Air Blast",
          "bonus": 35,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "9PATbfiAeimbuMPR",
          "name": "Truespeech",
          "kind": "passive",
          "description": "An anemos can speak with and understand any creature that has a language.",
          "traits": []
        },
        {
          "id": "tXn7bZbv4BFuAsNy",
          "name": "Wind Orchestra",
          "kind": "passive",
          "description": "An anemos does not require instruments to perform music, instead using their winds to create and carry the sounds of any instruments they wish to duplicate. They can mimic any number of instruments simultaneously, creating and directing their own personal orchestra.",
          "traits": [
            "air",
            "auditory"
          ]
        },
        {
          "id": "mNTeBYO2HCxz1KqX",
          "name": "Regeneration 15 (Deactivated by Earthbane)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8BplhOIazKU0umX9",
          "name": "Blessed by the Winds",
          "kind": "passive",
          "description": "80 feet. The winds grow turbulent for those who would dare to fly in the same space as an anemos, but they take care to never harm or inconvenience their shepherd. Air within the emanation is difficult terrain for Flying creatures that do not have the air trait. While the aura is active, the anemos cannot be affected by environmental air or weather affects unless they choose to be.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "fPemxEuNkADnx6Ez",
          "name": "Earthbane",
          "kind": "passive",
          "description": "An anemos's regeneration is suppressed for 1 round if the anemos is affected by an earth effect, or for as long as they are in contact with the ground and 1 round thereafter. If an anemos is submerged in at least 1 inch of mud, dirt, or stone, the anemos's aura deactivates, and the anemos becomes Stunned 2 and Clumsy 2.",
          "traits": []
        },
        {
          "id": "pMA5JgUS4hca6g4z",
          "name": "Redirect Weather",
          "kind": "reaction",
          "description": "Requirements The anemos's aura is active\nTrigger A creature within the anemos's aura uses an air or electricity spell, or an air or electricity spell otherwise comes into effect within the anemos's aura\nEffect The winds and weather of the spell obey the anemos's call. The anemos makes all the choices to determine the targets, destination, or other effects of the spell, as though they were the caster.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "zpGAhdL6BnUacXYN",
          "name": "Collect Thunder",
          "kind": "passive",
          "description": "Requirements The anemos has a hand free\nEffect The anemos runs a hand through the winds that swirl around them, the sparks from their fingertips coalescing into a thunderbolt. The anemos creates a thunderbolt in their open hand. If the anemos spends an action to Collect Thunder, a bolt instead strikes their open hand, creating a booming peal that deafens all creatures within 20 feet for 1 round unless they succeed at a check (fortitude, dc:40) save; this adds the auditory trait to Collect Thunder. Any thunderbolts dissipate after 1 round.",
          "traits": [
            "electricity",
            "manipulate"
          ]
        },
        {
          "id": "qgLf93vuyzLXWz5p",
          "name": "Command the Breeze",
          "kind": "passive",
          "description": "When an anemos casts a ritual, they perform all aspects of the ritual themself, commanding their winds to complete all the ritual's components. They must fulfill any requirements for the ritual's additional casters and must attempt the checks normally performed by additional casters. In addition, anemoi can cast rituals faster than usual. If a ritual has a casting time measured in days, they can cast it in an equal number of hours.",
          "traits": []
        },
        {
          "id": "pV1nm5VwQsMuT6hf",
          "name": "Storm Strikes Twice",
          "kind": "action",
          "description": "The anemos throws a thunderbolt, then becomes a wind that carries them in an instant to the bolt's location to attack again. They make a ranged thunderbolt Strike against a creature within their first range increment, teleport to the creature's location as a gust of wind, then grasp the thrown thunderbolt and make a melee thunderbolt Strike against a creature within reach. Their multiple attack penalty doesn't increase until they've made both attacks.",
          "traits": [
            "air",
            "teleportation"
          ]
        },
        {
          "id": "VxtwN2PC0vNkazRl",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The anemos's movement doesn't trigger reactions.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FbroEh9VbYsfV74u",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "kNz5SWtGl8kwIvhq",
              "name": "Air Bubble (At Will)",
              "rank": 1
            },
            {
              "id": "pQXtZ8jidu2mmn1D",
              "name": "Airlift (At Will)",
              "rank": 4
            },
            {
              "id": "JQAFpyDc4zXnBGT3",
              "name": "Petal Storm",
              "rank": 4
            },
            {
              "id": "hfcFxS8ui6rtMCKO",
              "name": "Speak with Plants",
              "rank": 4
            },
            {
              "id": "SwmB7dHu19MXMDiR",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "oa6yZmpvif96rKnv",
              "name": "Voice on the Breeze (At Will)",
              "rank": 4
            },
            {
              "id": "9OKw8LZsZXDFnehC",
              "name": "Humanoid Form (At Will)",
              "rank": 7
            },
            {
              "id": "Q6woQ1GWaEWKV9kW",
              "name": "Field of Life",
              "rank": 8
            },
            {
              "id": "m5EXiIlHCtPbtTZu",
              "name": "Cleanse Air",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:austral-the-south-wind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "7U27iYyyGK8iGYzR",
      "slug": "austral-the-south-wind",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0cd7b281d43aecdbc987bbc871d16aa597a8cd2ea4f9169e7f9fa6a4c2fcab7c",
    "translatableHash": "sha256:01af0dd8c445187ef4e4fa86d734f78fea83757fe510889940b9322b0de5b70c",
    "data": {
      "schemaVersion": 1,
      "name": "Austral, The South Wind",
      "level": 18,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The truth of life in the Universe is that weather controls the world. The life-giving water that flows across Golarion, the maintenance of healthy forests, and the snows, thaws, and rains that help crops flourish all rely on the weather—weather that's shaped at the whims of the winds. Anemoi are powerful beings from the Plane of Air tasked by ancient gods to guard the skies and shepherd the winds of every world across the planes. They guide the winds along their natural paths, and while neither malevolent nor malicious, an anemos has little regard for how a storm might affect any creature caught in its path.\nAnemoi can take several forms and shift between them as easily as they slip between the breezes. They wear humanoid guises to walk among mortals without drawing undue attention, and they transform into great, thunderous horses made of storm clouds and rain when they need to move quickly across the skies. Their true form, however, is wind coalesced into a humanoid shape, often with curling hair and feathery wings made of soft, drifting clouds.\nOn Golarion, each of the four cardinal winds are created and directed by a quartet of cardinal anemoi. The cold north winds are guided by Boreal, bringer of winter. Austral shepherds hot winds from the south. Eural brings stormy winds from the east. Finally, the gentle winds of spring come at the call of Zephyr, from the west. These four cardinal anemoi, alongside their councils of lesser anemoi, shape and control the winds across all of Golarion. As far as anyone can tell, the cardinal anemoi don't answer to a greater authority. There are even more powerful maximal anemoi living in the Plane of Air, but they seem content to leave the Universe out of their plans.\nThough the cardinal anemoi try to keep a degree of separation from mortal affairs, lesser anemoi occasionally take a closer interest. Some monitor a single settlement or county, protecting, nourishing, or even vindictively destroying it. Each one has their own sets of interests. Many are vain or petty. Even more change attitudes just as quickly as the winds they guide. Pleasing an anemoi isn't a matter of following a set formula, but rather repeatedly changing course to give them what they desire for their mercurial current interests or perceived needs.\nThe Shape Of The Air\nAnemoi on the Plane of Air are typically genderless, while those who spend time in the Universe sometimes experiment with or develop preferences for one of the genders of the mortals they watch or live close to.",
      "armorClass": 43,
      "hitPoints": 310,
      "speedFeet": 25,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 33,
        "will": 30
      },
      "abilities": {
        "str": 4,
        "dex": 9,
        "con": 7,
        "int": 6,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 38,
        "arcana": 31,
        "nature": 33,
        "occultism": 31,
        "performance": 38,
        "religion": 31,
        "stealth": 36,
        "survival": 33
      },
      "languages": [
        "common",
        "empyrean",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "cold 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oISNtENkIkBDDP5K",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+12 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical"
          ]
        },
        {
          "id": "gavsttKwnANMUBjN",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+10 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "Sql5ahktc7mZpEJX",
          "name": "Air Blast",
          "bonus": 35,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "9PATbfiAeimbuMPR",
          "name": "Truespeech",
          "kind": "passive",
          "description": "An anemos can speak with and understand any creature that has a language.",
          "traits": []
        },
        {
          "id": "tXn7bZbv4BFuAsNy",
          "name": "Wind Orchestra",
          "kind": "passive",
          "description": "An anemos does not require instruments to perform music, instead using their winds to create and carry the sounds of any instruments they wish to duplicate. They can mimic any number of instruments simultaneously, creating and directing their own personal orchestra.",
          "traits": [
            "air",
            "auditory"
          ]
        },
        {
          "id": "mNTeBYO2HCxz1KqX",
          "name": "Regeneration 15 (Deactivated by Earthbane)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8BplhOIazKU0umX9",
          "name": "Blessed by the Winds",
          "kind": "passive",
          "description": "80 feet. The winds grow turbulent for those who would dare to fly in the same space as an anemos, but they take care to never harm or inconvenience their shepherd. Air within the emanation is difficult terrain for Flying creatures that do not have the air trait. While the aura is active, the anemos cannot be affected by environmental air or weather affects unless they choose to be.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "fPemxEuNkADnx6Ez",
          "name": "Earthbane",
          "kind": "passive",
          "description": "An anemos's regeneration is suppressed for 1 round if the anemos is affected by an earth effect, or for as long as they are in contact with the ground and 1 round thereafter. If an anemos is submerged in at least 1 inch of mud, dirt, or stone, the anemos's aura deactivates, and the anemos becomes Stunned 2 and Clumsy 2.",
          "traits": []
        },
        {
          "id": "pMA5JgUS4hca6g4z",
          "name": "Redirect Weather",
          "kind": "reaction",
          "description": "Requirements The anemos's aura is active\nTrigger A creature within the anemos's aura uses an air or electricity spell, or an air or electricity spell otherwise comes into effect within the anemos's aura\nEffect The winds and weather of the spell obey the anemos's call. The anemos makes all the choices to determine the targets, destination, or other effects of the spell, as though they were the caster.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "zpGAhdL6BnUacXYN",
          "name": "Collect Thunder",
          "kind": "passive",
          "description": "Requirements The anemos has a hand free\nEffect The anemos runs a hand through the winds that swirl around them, the sparks from their fingertips coalescing into a thunderbolt. The anemos creates a thunderbolt in their open hand. If the anemos spends an action to Collect Thunder, a bolt instead strikes their open hand, creating a booming peal that deafens all creatures within 20 feet for 1 round unless they succeed at a check (fortitude, dc:40) save; this adds the auditory trait to Collect Thunder. Any thunderbolts dissipate after 1 round.",
          "traits": [
            "electricity",
            "manipulate"
          ]
        },
        {
          "id": "qgLf93vuyzLXWz5p",
          "name": "Command the Breeze",
          "kind": "passive",
          "description": "When an anemos casts a ritual, they perform all aspects of the ritual themself, commanding their winds to complete all the ritual's components. They must fulfill any requirements for the ritual's additional casters and must attempt the checks normally performed by additional casters. In addition, anemoi can cast rituals faster than usual. If a ritual has a casting time measured in days, they can cast it in an equal number of hours.",
          "traits": []
        },
        {
          "id": "pV1nm5VwQsMuT6hf",
          "name": "Storm Strikes Twice",
          "kind": "action",
          "description": "The anemos throws a thunderbolt, then becomes a wind that carries them in an instant to the bolt's location to attack again. They make a ranged thunderbolt Strike against a creature within their first range increment, teleport to the creature's location as a gust of wind, then grasp the thrown thunderbolt and make a melee thunderbolt Strike against a creature within reach. Their multiple attack penalty doesn't increase until they've made both attacks.",
          "traits": [
            "air",
            "teleportation"
          ]
        },
        {
          "id": "VxtwN2PC0vNkazRl",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The anemos's movement doesn't trigger reactions.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FbroEh9VbYsfV74u",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "kNz5SWtGl8kwIvhq",
              "name": "Air Bubble (At Will)",
              "rank": 1
            },
            {
              "id": "pQXtZ8jidu2mmn1D",
              "name": "Airlift (At Will)",
              "rank": 4
            },
            {
              "id": "SwmB7dHu19MXMDiR",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "oa6yZmpvif96rKnv",
              "name": "Voice on the Breeze (At Will)",
              "rank": 4
            },
            {
              "id": "xBfzGLYSJWXb4BvC",
              "name": "Geyser",
              "rank": 5
            },
            {
              "id": "9OKw8LZsZXDFnehC",
              "name": "Humanoid Form (At Will)",
              "rank": 7
            },
            {
              "id": "U6fTphlBf9iX6WrE",
              "name": "Flame Vortex",
              "rank": 8
            },
            {
              "id": "m5EXiIlHCtPbtTZu",
              "name": "Cleanse Air",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:boreal-the-north-wind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "8cJlApaLdgZCxfWq",
      "slug": "boreal-the-north-wind",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc53d9dbfadcae9b661e02fbd475a12f8711ed1a3ecec71b7c85e2c840703833",
    "translatableHash": "sha256:eb7ee309aa8fa70c77c034f2d9d22eb45d9ee2025fba0cd3879b520af0f1548a",
    "data": {
      "schemaVersion": 1,
      "name": "Boreal, The North Wind",
      "level": 18,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The truth of life in the Universe is that weather controls the world. The life-giving water that flows across Golarion, the maintenance of healthy forests, and the snows, thaws, and rains that help crops flourish all rely on the weather—weather that's shaped at the whims of the winds. Anemoi are powerful beings from the Plane of Air tasked by ancient gods to guard the skies and shepherd the winds of every world across the planes. They guide the winds along their natural paths, and while neither malevolent nor malicious, an anemos has little regard for how a storm might affect any creature caught in its path.\nAnemoi can take several forms and shift between them as easily as they slip between the breezes. They wear humanoid guises to walk among mortals without drawing undue attention, and they transform into great, thunderous horses made of storm clouds and rain when they need to move quickly across the skies. Their true form, however, is wind coalesced into a humanoid shape, often with curling hair and feathery wings made of soft, drifting clouds.\nOn Golarion, each of the four cardinal winds are created and directed by a quartet of cardinal anemoi. The cold north winds are guided by Boreal, bringer of winter. Austral shepherds hot winds from the south. Eural brings stormy winds from the east. Finally, the gentle winds of spring come at the call of Zephyr, from the west. These four cardinal anemoi, alongside their councils of lesser anemoi, shape and control the winds across all of Golarion. As far as anyone can tell, the cardinal anemoi don't answer to a greater authority. There are even more powerful maximal anemoi living in the Plane of Air, but they seem content to leave the Universe out of their plans.\nThough the cardinal anemoi try to keep a degree of separation from mortal affairs, lesser anemoi occasionally take a closer interest. Some monitor a single settlement or county, protecting, nourishing, or even vindictively destroying it. Each one has their own sets of interests. Many are vain or petty. Even more change attitudes just as quickly as the winds they guide. Pleasing an anemoi isn't a matter of following a set formula, but rather repeatedly changing course to give them what they desire for their mercurial current interests or perceived needs.\nThe Shape Of The Air\nAnemoi on the Plane of Air are typically genderless, while those who spend time in the Universe sometimes experiment with or develop preferences for one of the genders of the mortals they watch or live close to.",
      "armorClass": 43,
      "hitPoints": 310,
      "speedFeet": 25,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 33,
        "will": 30
      },
      "abilities": {
        "str": 4,
        "dex": 9,
        "con": 7,
        "int": 6,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 38,
        "arcana": 31,
        "nature": 33,
        "occultism": 31,
        "performance": 38,
        "religion": 31,
        "stealth": 36,
        "survival": 33
      },
      "languages": [
        "common",
        "empyrean",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "cold 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oISNtENkIkBDDP5K",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+12 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical"
          ]
        },
        {
          "id": "gavsttKwnANMUBjN",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+10 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "Sql5ahktc7mZpEJX",
          "name": "Air Blast",
          "bonus": 35,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "9PATbfiAeimbuMPR",
          "name": "Truespeech",
          "kind": "passive",
          "description": "An anemos can speak with and understand any creature that has a language.",
          "traits": []
        },
        {
          "id": "tXn7bZbv4BFuAsNy",
          "name": "Wind Orchestra",
          "kind": "passive",
          "description": "An anemos does not require instruments to perform music, instead using their winds to create and carry the sounds of any instruments they wish to duplicate. They can mimic any number of instruments simultaneously, creating and directing their own personal orchestra.",
          "traits": [
            "air",
            "auditory"
          ]
        },
        {
          "id": "mNTeBYO2HCxz1KqX",
          "name": "Regeneration 15 (Deactivated by Earthbane)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8BplhOIazKU0umX9",
          "name": "Blessed by the Winds",
          "kind": "passive",
          "description": "80 feet. The winds grow turbulent for those who would dare to fly in the same space as an anemos, but they take care to never harm or inconvenience their shepherd. Air within the emanation is difficult terrain for Flying creatures that do not have the air trait. While the aura is active, the anemos cannot be affected by environmental air or weather affects unless they choose to be.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "fPemxEuNkADnx6Ez",
          "name": "Earthbane",
          "kind": "passive",
          "description": "An anemos's regeneration is suppressed for 1 round if the anemos is affected by an earth effect, or for as long as they are in contact with the ground and 1 round thereafter. If an anemos is submerged in at least 1 inch of mud, dirt, or stone, the anemos's aura deactivates, and the anemos becomes Stunned 2 and Clumsy 2.",
          "traits": []
        },
        {
          "id": "pMA5JgUS4hca6g4z",
          "name": "Redirect Weather",
          "kind": "reaction",
          "description": "Requirements The anemos's aura is active\nTrigger A creature within the anemos's aura uses an air or electricity spell, or an air or electricity spell otherwise comes into effect within the anemos's aura\nEffect The winds and weather of the spell obey the anemos's call. The anemos makes all the choices to determine the targets, destination, or other effects of the spell, as though they were the caster.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "zpGAhdL6BnUacXYN",
          "name": "Collect Thunder",
          "kind": "passive",
          "description": "Requirements The anemos has a hand free\nEffect The anemos runs a hand through the winds that swirl around them, the sparks from their fingertips coalescing into a thunderbolt. The anemos creates a thunderbolt in their open hand. If the anemos spends an action to Collect Thunder, a bolt instead strikes their open hand, creating a booming peal that deafens all creatures within 20 feet for 1 round unless they succeed at a check (fortitude, dc:40) save; this adds the auditory trait to Collect Thunder. Any thunderbolts dissipate after 1 round.",
          "traits": [
            "electricity",
            "manipulate"
          ]
        },
        {
          "id": "qgLf93vuyzLXWz5p",
          "name": "Command the Breeze",
          "kind": "passive",
          "description": "When an anemos casts a ritual, they perform all aspects of the ritual themself, commanding their winds to complete all the ritual's components. They must fulfill any requirements for the ritual's additional casters and must attempt the checks normally performed by additional casters. In addition, anemoi can cast rituals faster than usual. If a ritual has a casting time measured in days, they can cast it in an equal number of hours.",
          "traits": []
        },
        {
          "id": "pV1nm5VwQsMuT6hf",
          "name": "Storm Strikes Twice",
          "kind": "action",
          "description": "The anemos throws a thunderbolt, then becomes a wind that carries them in an instant to the bolt's location to attack again. They make a ranged thunderbolt Strike against a creature within their first range increment, teleport to the creature's location as a gust of wind, then grasp the thrown thunderbolt and make a melee thunderbolt Strike against a creature within reach. Their multiple attack penalty doesn't increase until they've made both attacks.",
          "traits": [
            "air",
            "teleportation"
          ]
        },
        {
          "id": "VxtwN2PC0vNkazRl",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The anemos's movement doesn't trigger reactions.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FbroEh9VbYsfV74u",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "kNz5SWtGl8kwIvhq",
              "name": "Air Bubble (At Will)",
              "rank": 1
            },
            {
              "id": "pQXtZ8jidu2mmn1D",
              "name": "Airlift (At Will)",
              "rank": 4
            },
            {
              "id": "SwmB7dHu19MXMDiR",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "oa6yZmpvif96rKnv",
              "name": "Voice on the Breeze (At Will)",
              "rank": 4
            },
            {
              "id": "pVrPcY37y93sgcOu",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "9OKw8LZsZXDFnehC",
              "name": "Humanoid Form (At Will)",
              "rank": 7
            },
            {
              "id": "dFIynhhXD5gU7n9F",
              "name": "Frigid Flurry",
              "rank": 8
            },
            {
              "id": "m5EXiIlHCtPbtTZu",
              "name": "Cleanse Air",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:eural-the-east-wind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "dLFxm5kZBRzvqf1f",
      "slug": "eural-the-east-wind",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d5fdc3c99ed17d848ab1929d7446787b75d28f68d2310d4afac556c290cda6e3",
    "translatableHash": "sha256:55138c4320892d18c97e2bdf00b47c538160d827578472c72392763eb2a6ee38",
    "data": {
      "schemaVersion": 1,
      "name": "Eural, The East Wind",
      "level": 18,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The truth of life in the Universe is that weather controls the world. The life-giving water that flows across Golarion, the maintenance of healthy forests, and the snows, thaws, and rains that help crops flourish all rely on the weather—weather that's shaped at the whims of the winds. Anemoi are powerful beings from the Plane of Air tasked by ancient gods to guard the skies and shepherd the winds of every world across the planes. They guide the winds along their natural paths, and while neither malevolent nor malicious, an anemos has little regard for how a storm might affect any creature caught in its path.\nAnemoi can take several forms and shift between them as easily as they slip between the breezes. They wear humanoid guises to walk among mortals without drawing undue attention, and they transform into great, thunderous horses made of storm clouds and rain when they need to move quickly across the skies. Their true form, however, is wind coalesced into a humanoid shape, often with curling hair and feathery wings made of soft, drifting clouds.\nOn Golarion, each of the four cardinal winds are created and directed by a quartet of cardinal anemoi. The cold north winds are guided by Boreal, bringer of winter. Austral shepherds hot winds from the south. Eural brings stormy winds from the east. Finally, the gentle winds of spring come at the call of Zephyr, from the west. These four cardinal anemoi, alongside their councils of lesser anemoi, shape and control the winds across all of Golarion. As far as anyone can tell, the cardinal anemoi don't answer to a greater authority. There are even more powerful maximal anemoi living in the Plane of Air, but they seem content to leave the Universe out of their plans.\nThough the cardinal anemoi try to keep a degree of separation from mortal affairs, lesser anemoi occasionally take a closer interest. Some monitor a single settlement or county, protecting, nourishing, or even vindictively destroying it. Each one has their own sets of interests. Many are vain or petty. Even more change attitudes just as quickly as the winds they guide. Pleasing an anemoi isn't a matter of following a set formula, but rather repeatedly changing course to give them what they desire for their mercurial current interests or perceived needs.\nThe Shape Of The Air\nAnemoi on the Plane of Air are typically genderless, while those who spend time in the Universe sometimes experiment with or develop preferences for one of the genders of the mortals they watch or live close to.",
      "armorClass": 43,
      "hitPoints": 310,
      "speedFeet": 25,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 33,
        "will": 30
      },
      "abilities": {
        "str": 4,
        "dex": 9,
        "con": 7,
        "int": 6,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 38,
        "arcana": 31,
        "nature": 33,
        "occultism": 31,
        "performance": 38,
        "religion": 31,
        "stealth": 36,
        "survival": 33
      },
      "languages": [
        "common",
        "empyrean",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "cold 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oISNtENkIkBDDP5K",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+12 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical"
          ]
        },
        {
          "id": "gavsttKwnANMUBjN",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+10 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "Sql5ahktc7mZpEJX",
          "name": "Air Blast",
          "bonus": 35,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "9PATbfiAeimbuMPR",
          "name": "Truespeech",
          "kind": "passive",
          "description": "An anemos can speak with and understand any creature that has a language.",
          "traits": []
        },
        {
          "id": "tXn7bZbv4BFuAsNy",
          "name": "Wind Orchestra",
          "kind": "passive",
          "description": "An anemos does not require instruments to perform music, instead using their winds to create and carry the sounds of any instruments they wish to duplicate. They can mimic any number of instruments simultaneously, creating and directing their own personal orchestra.",
          "traits": [
            "air",
            "auditory"
          ]
        },
        {
          "id": "mNTeBYO2HCxz1KqX",
          "name": "Regeneration 15 (Deactivated by Earthbane)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8BplhOIazKU0umX9",
          "name": "Blessed by the Winds",
          "kind": "passive",
          "description": "80 feet. The winds grow turbulent for those who would dare to fly in the same space as an anemos, but they take care to never harm or inconvenience their shepherd. Air within the emanation is difficult terrain for Flying creatures that do not have the air trait. While the aura is active, the anemos cannot be affected by environmental air or weather affects unless they choose to be.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "fPemxEuNkADnx6Ez",
          "name": "Earthbane",
          "kind": "passive",
          "description": "An anemos's regeneration is suppressed for 1 round if the anemos is affected by an earth effect, or for as long as they are in contact with the ground and 1 round thereafter. If an anemos is submerged in at least 1 inch of mud, dirt, or stone, the anemos's aura deactivates, and the anemos becomes Stunned 2 and Clumsy 2.",
          "traits": []
        },
        {
          "id": "pMA5JgUS4hca6g4z",
          "name": "Redirect Weather",
          "kind": "reaction",
          "description": "Requirements The anemos's aura is active\nTrigger A creature within the anemos's aura uses an air or electricity spell, or an air or electricity spell otherwise comes into effect within the anemos's aura\nEffect The winds and weather of the spell obey the anemos's call. The anemos makes all the choices to determine the targets, destination, or other effects of the spell, as though they were the caster.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "zpGAhdL6BnUacXYN",
          "name": "Collect Thunder",
          "kind": "passive",
          "description": "Requirements The anemos has a hand free\nEffect The anemos runs a hand through the winds that swirl around them, the sparks from their fingertips coalescing into a thunderbolt. The anemos creates a thunderbolt in their open hand. If the anemos spends an action to Collect Thunder, a bolt instead strikes their open hand, creating a booming peal that deafens all creatures within 20 feet for 1 round unless they succeed at a check (fortitude, dc:40) save; this adds the auditory trait to Collect Thunder. Any thunderbolts dissipate after 1 round.",
          "traits": [
            "electricity",
            "manipulate"
          ]
        },
        {
          "id": "qgLf93vuyzLXWz5p",
          "name": "Command the Breeze",
          "kind": "passive",
          "description": "When an anemos casts a ritual, they perform all aspects of the ritual themself, commanding their winds to complete all the ritual's components. They must fulfill any requirements for the ritual's additional casters and must attempt the checks normally performed by additional casters. In addition, anemoi can cast rituals faster than usual. If a ritual has a casting time measured in days, they can cast it in an equal number of hours.",
          "traits": []
        },
        {
          "id": "pV1nm5VwQsMuT6hf",
          "name": "Storm Strikes Twice",
          "kind": "action",
          "description": "The anemos throws a thunderbolt, then becomes a wind that carries them in an instant to the bolt's location to attack again. They make a ranged thunderbolt Strike against a creature within their first range increment, teleport to the creature's location as a gust of wind, then grasp the thrown thunderbolt and make a melee thunderbolt Strike against a creature within reach. Their multiple attack penalty doesn't increase until they've made both attacks.",
          "traits": [
            "air",
            "teleportation"
          ]
        },
        {
          "id": "VxtwN2PC0vNkazRl",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The anemos's movement doesn't trigger reactions.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FbroEh9VbYsfV74u",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "kNz5SWtGl8kwIvhq",
              "name": "Air Bubble (At Will)",
              "rank": 1
            },
            {
              "id": "pQXtZ8jidu2mmn1D",
              "name": "Airlift (At Will)",
              "rank": 4
            },
            {
              "id": "SwmB7dHu19MXMDiR",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "oa6yZmpvif96rKnv",
              "name": "Voice on the Breeze (At Will)",
              "rank": 4
            },
            {
              "id": "mwI5wN17IChwak8l",
              "name": "Pressure Zone",
              "rank": 5
            },
            {
              "id": "9OKw8LZsZXDFnehC",
              "name": "Humanoid Form (At Will)",
              "rank": 7
            },
            {
              "id": "2uHG2NajP6NU0aN1",
              "name": "Chain Lightning",
              "rank": 8
            },
            {
              "id": "m5EXiIlHCtPbtTZu",
              "name": "Cleanse Air",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:anemos",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "hGPjJjjqBc42VrFs",
      "slug": "anemos",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0c24b7d1eb244ea1d373f53f1dcbf18d874bfdf0a195359e32eae1c0ec12f120",
    "translatableHash": "sha256:9bffe7a77ed64f1700bc86b18e2306127abc761a181a4d2dd65b04e86da29d54",
    "data": {
      "schemaVersion": 1,
      "name": "Anemos",
      "level": 18,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "The truth of life in the Universe is that weather controls the world. The life-giving water that flows across Golarion, the maintenance of healthy forests, and the snows, thaws, and rains that help crops flourish all rely on the weather—weather that's shaped at the whims of the winds. Anemoi are powerful beings from the Plane of Air tasked by ancient gods to guard the skies and shepherd the winds of every world across the planes. They guide the winds along their natural paths, and while neither malevolent nor malicious, an anemos has little regard for how a storm might affect any creature caught in its path.\nAnemoi can take several forms and shift between them as easily as they slip between the breezes. They wear humanoid guises to walk among mortals without drawing undue attention, and they transform into great, thunderous horses made of storm clouds and rain when they need to move quickly across the skies. Their true form, however, is wind coalesced into a humanoid shape, often with curling hair and feathery wings made of soft, drifting clouds.\nOn Golarion, each of the four cardinal winds are created and directed by a quartet of cardinal anemoi. The cold north winds are guided by Boreal, bringer of winter. Austral shepherds hot winds from the south. Eural brings stormy winds from the east. Finally, the gentle winds of spring come at the call of Zephyr, from the west. These four cardinal anemoi, alongside their councils of lesser anemoi, shape and control the winds across all of Golarion. As far as anyone can tell, the cardinal anemoi don't answer to a greater authority. There are even more powerful maximal anemoi living in the Plane of Air, but they seem content to leave the Universe out of their plans.\nThough the cardinal anemoi try to keep a degree of separation from mortal affairs, lesser anemoi occasionally take a closer interest. Some monitor a single settlement or county, protecting, nourishing, or even vindictively destroying it. Each one has their own sets of interests. Many are vain or petty. Even more change attitudes just as quickly as the winds they guide. Pleasing an anemoi isn't a matter of following a set formula, but rather repeatedly changing course to give them what they desire for their mercurial current interests or perceived needs.\nThe Shape Of The Air\nAnemoi on the Plane of Air are typically genderless, while those who spend time in the Universe sometimes experiment with or develop preferences for one of the genders of the mortals they watch or live close to.",
      "armorClass": 43,
      "hitPoints": 310,
      "speedFeet": 25,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 33,
        "will": 30
      },
      "abilities": {
        "str": 4,
        "dex": 9,
        "con": 7,
        "int": 6,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 38,
        "arcana": 31,
        "nature": 33,
        "occultism": 31,
        "performance": 38,
        "religion": 31,
        "stealth": 36,
        "survival": 33
      },
      "languages": [
        "common",
        "empyrean",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "cold 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oISNtENkIkBDDP5K",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+12 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical"
          ]
        },
        {
          "id": "gavsttKwnANMUBjN",
          "name": "Thunderbolt",
          "bonus": 35,
          "damage": "3d8+10 electricity; 3d6 sonic",
          "traits": [
            "electricity",
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "Sql5ahktc7mZpEJX",
          "name": "Air Blast",
          "bonus": 35,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "9PATbfiAeimbuMPR",
          "name": "Truespeech",
          "kind": "passive",
          "description": "An anemos can speak with and understand any creature that has a language.",
          "traits": []
        },
        {
          "id": "tXn7bZbv4BFuAsNy",
          "name": "Wind Orchestra",
          "kind": "passive",
          "description": "An anemos does not require instruments to perform music, instead using their winds to create and carry the sounds of any instruments they wish to duplicate. They can mimic any number of instruments simultaneously, creating and directing their own personal orchestra.",
          "traits": [
            "air",
            "auditory"
          ]
        },
        {
          "id": "mNTeBYO2HCxz1KqX",
          "name": "Regeneration 15 (Deactivated by Earthbane)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8BplhOIazKU0umX9",
          "name": "Blessed by the Winds",
          "kind": "passive",
          "description": "80 feet. The winds grow turbulent for those who would dare to fly in the same space as an anemos, but they take care to never harm or inconvenience their shepherd. Air within the emanation is difficult terrain for Flying creatures that do not have the air trait. While the aura is active, the anemos cannot be affected by environmental air or weather affects unless they choose to be.",
          "traits": [
            "air",
            "aura"
          ]
        },
        {
          "id": "fPemxEuNkADnx6Ez",
          "name": "Earthbane",
          "kind": "passive",
          "description": "An anemos's regeneration is suppressed for 1 round if the anemos is affected by an earth effect, or for as long as they are in contact with the ground and 1 round thereafter. If an anemos is submerged in at least 1 inch of mud, dirt, or stone, the anemos's aura deactivates, and the anemos becomes Stunned 2 and Clumsy 2.",
          "traits": []
        },
        {
          "id": "pMA5JgUS4hca6g4z",
          "name": "Redirect Weather",
          "kind": "reaction",
          "description": "Requirements The anemos's aura is active\nTrigger A creature within the anemos's aura uses an air or electricity spell, or an air or electricity spell otherwise comes into effect within the anemos's aura\nEffect The winds and weather of the spell obey the anemos's call. The anemos makes all the choices to determine the targets, destination, or other effects of the spell, as though they were the caster.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "zpGAhdL6BnUacXYN",
          "name": "Collect Thunder",
          "kind": "passive",
          "description": "Requirements The anemos has a hand free\nEffect The anemos runs a hand through the winds that swirl around them, the sparks from their fingertips coalescing into a thunderbolt. The anemos creates a thunderbolt in their open hand. If the anemos spends an action to Collect Thunder, a bolt instead strikes their open hand, creating a booming peal that deafens all creatures within 20 feet for 1 round unless they succeed at a check (fortitude, dc:40) save; this adds the auditory trait to Collect Thunder. Any thunderbolts dissipate after 1 round.",
          "traits": [
            "electricity",
            "manipulate"
          ]
        },
        {
          "id": "qgLf93vuyzLXWz5p",
          "name": "Command the Breeze",
          "kind": "passive",
          "description": "When an anemos casts a ritual, they perform all aspects of the ritual themself, commanding their winds to complete all the ritual's components. They must fulfill any requirements for the ritual's additional casters and must attempt the checks normally performed by additional casters. In addition, anemoi can cast rituals faster than usual. If a ritual has a casting time measured in days, they can cast it in an equal number of hours.",
          "traits": []
        },
        {
          "id": "pV1nm5VwQsMuT6hf",
          "name": "Storm Strikes Twice",
          "kind": "action",
          "description": "The anemos throws a thunderbolt, then becomes a wind that carries them in an instant to the bolt's location to attack again. They make a ranged thunderbolt Strike against a creature within their first range increment, teleport to the creature's location as a gust of wind, then grasp the thrown thunderbolt and make a melee thunderbolt Strike against a creature within reach. Their multiple attack penalty doesn't increase until they've made both attacks.",
          "traits": [
            "air",
            "teleportation"
          ]
        },
        {
          "id": "VxtwN2PC0vNkazRl",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The anemos's movement doesn't trigger reactions.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "FbroEh9VbYsfV74u",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "kNz5SWtGl8kwIvhq",
              "name": "Air Bubble (At Will)",
              "rank": 1
            },
            {
              "id": "pQXtZ8jidu2mmn1D",
              "name": "Airlift (At Will)",
              "rank": 4
            },
            {
              "id": "SwmB7dHu19MXMDiR",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "oa6yZmpvif96rKnv",
              "name": "Voice on the Breeze (At Will)",
              "rank": 4
            },
            {
              "id": "9OKw8LZsZXDFnehC",
              "name": "Humanoid Form (At Will)",
              "rank": 7
            },
            {
              "id": "m5EXiIlHCtPbtTZu",
              "name": "Cleanse Air",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:rage-of-elements-bestiary:vault-builder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "rage-of-elements-bestiary",
      "sourceId": "g9hnlCy2R4uspfAI",
      "slug": "vault-builder",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:914d6206d2386be5b4ff987bcf57788d778c6c1bf533a476c9727e6c1f45699f",
    "translatableHash": "sha256:d48e26f262fae2c174cef5a62579027d5383f1612dc33fdd31fc25d272d5ec08",
    "data": {
      "schemaVersion": 1,
      "name": "Vault Builder",
      "level": 23,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "The vault keepers lost Sairazul's spark and have life spans of two to three millennia. They maintain and protect the xiomorns' many experiments.\nWhen Sairazul created xiomorns, they were immortal. She created 65,536, all in her own image, and all imbued with a piece of her divine spark. During her imprisonment, Ayrzul used visions of a future extinction to manipulate them into sacrificing their power to him. This sacrifice split xiomorns into two classes: 32,768 vault builders who kept Sairazul's essence and 32,768 vault keepers who would live forever no longer. For millennia, xiomorns built a vast, magical civilization across the Plane of Earth, and when there was no space left to build, they left. On each new world, xiomorns build their vaults and conduct their experiments, endlessly searching for clues to help them avoid their extinction.\nVault Seeds\nXiomorns create magical underground caverns using vault seeds, ancient magical tools bequeathed to their species by Ayrzul as a reward for their sacrifice. The vault seeds were used to create the Vaults of Orv in Golarion's Darklands, and an accident involving an out-of-control vault seed created the mysterious Emerald Spire.\nCrystal Crafters\nXiomorns have mastered the creation of numerous magic items made of crystal beyond generation stones and vault seeds. These include pillars of black stone called whisperstones that allow xiomorns to communicate telepathically across vaults, orvgates that use weblike funnels of green crystal to allow teleportation between Darklands vaults, and a vortex in Orv called the Crystal Womb that connects to a crucial stronghold on the Plane of Earth.",
      "armorClass": 47,
      "hitPoints": 465,
      "speedFeet": 35,
      "perception": {
        "modifier": 37,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 41,
        "will": 35
      },
      "abilities": {
        "str": 8,
        "dex": 10,
        "con": 7,
        "int": 11,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "acrobatics": 39,
        "arcana": 42,
        "athletics": 39,
        "crafting": 44,
        "nature": 37,
        "stealth": 41,
        "thievery": 39
      },
      "languages": [
        "orvian",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "radiation"
        ],
        "resistances": [
          "physical 20 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "6Z5As0Vk0ZFyn7yE",
          "name": "Claw",
          "bonus": 37,
          "damage": "5d10+12 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "6wSSM9Kc0yzOsFx8",
          "name": "Crystal Wand",
          "bonus": 37,
          "damage": "4d4+12 piercing; 4d6 poison",
          "traits": [
            "finesse",
            "magical",
            "radiation"
          ]
        },
        {
          "id": "p0tt8qs4Xe5d3Xj5",
          "name": "Crystal Staff",
          "bonus": 39,
          "damage": "4d6 poison; 4d4+12 bludgeoning",
          "traits": [
            "magical",
            "radiation",
            "two-hand-d8"
          ]
        },
        {
          "id": "N6CPYKKItLvvcxLC",
          "name": "Crystal Shard",
          "bonus": 37,
          "damage": "7d6+4 piercing",
          "traits": [
            "earth",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "UrE3kHdNPQpWWXvj",
          "name": "Tremorsense (Imprecise) 120 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "gBajDLrXq7pHDmg3",
          "name": "Telepathy 300 feet",
          "kind": "passive",
          "description": "",
          "traits": [
            "aura",
            "magical"
          ]
        },
        {
          "id": "tRKUVrYpL8vpibQP",
          "name": "+2 Status to Recall Knowledge About Earth",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ffFiHpJiGqW1RE6q",
          "name": "Craft Crystal Wand",
          "kind": "passive",
          "description": "Frequency twice per day\nEffect The vault builder spends 10 minutes creating a magic wand out of radioactive green crystal, containing any 8th-rank or lower earth spell of their choice. The wand can be used by other creatures, but it crumbles to sand at the end of the day and has no monetary value. The vault builder can expend both daily uses to instead make a +3 greater striking Major Staff of Earth.",
          "traits": [
            "exploration"
          ]
        },
        {
          "id": "xLxAr9O3KpGR6Les",
          "name": "Item Caster",
          "kind": "passive",
          "description": "The vault keeper can Cast a Spell from any item (such as a staff or wand) as though it were on their spell list.",
          "traits": []
        },
        {
          "id": "s7kMlZqWDPuD7ny5",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "WZVPazxqWEJP9dno",
          "name": "+4 Status to All Saves vs. Earth",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "3I2wnIEzRXgtx8Zb",
          "name": "Attack of Opportunity",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "D1MoXz1bpt97hDAJ",
          "name": "Constraining Crystal",
          "kind": "passive",
          "description": "When the vault builder deals damage with a claw Strike, glowing green crystals cluster at the site of the attack. The target must succeed at a check (fortitude, dc:31) save or become Clumsy 1 for 1 hour (or Clumsy 2 on a critical failure). If the creature is already clumsy due to constraining crystal, additional failures increase that clumsy value instead, to a maximum of Clumsy 4. A target that fails its save while Clumsy 4 is Petrified with an unlimited duration.",
          "traits": [
            "earth",
            "magical"
          ]
        },
        {
          "id": "jLxHgJbqySWEesMi",
          "name": "Crystal Burst",
          "kind": "action",
          "description": "An explosion of razor-sharp splinters deals 24d6 piercing damage in a 30-foot burst within 120 feet, with a check (reflex, dc:46, basic, options:area-effect) save. The vault keeper can't use Crystal Burst again for [[/gmr 1d4 #Recharge Crystal Burst]].",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "hQnlDt4YtrgYFpFP",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The vault builder can Burrow through any earthen matter, including rock. When they do so, the vault builder moves at their full burrow Speed, leaving no tunnels or signs of their passing.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "sLF5Wo8xevd3a9g5",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 42,
          "saveDc": 50,
          "spells": [
            {
              "id": "nRyjiNhZe4flSFTb",
              "name": "Ant Haul",
              "rank": 1
            },
            {
              "id": "t3s9R0PDN7dw43iR",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "Vs3ncbT3YofxBT90",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "gytBo0dJFIbZPBbq",
              "name": "Quick Sort",
              "rank": 1
            },
            {
              "id": "4zH7DllKyiLBWCWI",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "knwb63zUVQQLtnUE",
              "name": "Scatter Scree",
              "rank": 1
            },
            {
              "id": "cWiQU03Ha2yPR5eQ",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "ybRtu3MVmZJSipBb",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "1AQkInQm28a9loQJ",
              "name": "Knock",
              "rank": 2
            },
            {
              "id": "FMm1Xfic5WBWslZu",
              "name": "Magnetic Attraction",
              "rank": 2
            },
            {
              "id": "jBNMN5rM9iZtcjm5",
              "name": "Magnetic Repulsion",
              "rank": 2
            },
            {
              "id": "LO4tYfxdIAdZPG60",
              "name": "Pave Ground",
              "rank": 2
            },
            {
              "id": "GLsjGiyizXxuwkBz",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "CdMo16cr5rFfEqWk",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "FTwEUjb23CEKFMJ4",
              "name": "One with Stone",
              "rank": 3
            },
            {
              "id": "PLkChObWe27HXvTZ",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "3xR8jJHKWzt0SyZn",
              "name": "Creation",
              "rank": 4
            },
            {
              "id": "8ChJfVNsfK56dPIq",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "MHcGkpTtHbZ0dI34",
              "name": "Grasping Earth",
              "rank": 4
            },
            {
              "id": "jmWWzACi7z5w2k7r",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "H4pyb564LrUxrdHD",
              "name": "Blazing Fissure",
              "rank": 5
            },
            {
              "id": "EO7wuDTrM3c9DnoE",
              "name": "Engrave Memory",
              "rank": 5
            },
            {
              "id": "jS1pdFarueIYhVbD",
              "name": "Disintegrate",
              "rank": 6
            },
            {
              "id": "AcHuQmWPwIO3bICn",
              "name": "Petrify",
              "rank": 6
            },
            {
              "id": "jzdizubbI6Ndlovg",
              "name": "Wall of Force",
              "rank": 6
            },
            {
              "id": "ue9M67U2K9H3g7yu",
              "name": "Heaving Earth",
              "rank": 7
            },
            {
              "id": "Jlv8S4YQPFHJVGlR",
              "name": "Earthquake",
              "rank": 8
            }
          ]
        },
        {
          "id": "xMEMVbTpajmEgVQE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 42,
          "saveDc": 50,
          "spells": [
            {
              "id": "Nlo4VpXJUjeA759O",
              "name": "Earthbind (At Will)",
              "rank": 4
            },
            {
              "id": "exFAB6txA0mLKwb7",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "b18tjwnY81kAJdjs",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "fnxms4Ey7dcK5lBd",
              "name": "Petrify",
              "rank": 8
            },
            {
              "id": "4umAtvRAMXHWiARL",
              "name": "Scrying",
              "rank": 8
            },
            {
              "id": "CMbvTIyv5ZwmHPqZ",
              "name": "Shatter (At Will)",
              "rank": 8
            },
            {
              "id": "i1my1By1qiNf5oOR",
              "name": "Speak With Stones (At Will)",
              "rank": 8
            },
            {
              "id": "Glx1F6FYLNt8i3JS",
              "name": "Teleport",
              "rank": 8
            },
            {
              "id": "TMSkn9YV5Q8725q1",
              "name": "Translocate",
              "rank": 8
            },
            {
              "id": "YdYlA8WLwA1QWgw9",
              "name": "Summon Elemental (Earth Only)",
              "rank": 10
            },
            {
              "id": "04H8ZhIyhQ7sQFn5",
              "name": "Wall of Stone",
              "rank": 10
            }
          ]
        }
      ]
    }
  }
]
