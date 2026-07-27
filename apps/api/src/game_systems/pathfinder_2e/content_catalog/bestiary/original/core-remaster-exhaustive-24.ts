import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_24_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:naiad-water-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "UEz33lWdku8n0Mhr",
      "slug": "naiad-water-guardian",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:898bda42d322b01e523c3388d939b1d106f8af7dce970d54c4a2a363a0e4e15b",
    "translatableHash": "sha256:dfdcc3faa044130647f0568cc166ddb8c4fb7cc26b14c5ca6e8655452266bd62",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad Water Guardian",
      "level": 5,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [],
      "description": "Believing the ends justify the means, the unsanctioned sheriff is unafraid to use others for their own gain, through bribes, manipulation, or force.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 22,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 13,
        "deception": 11,
        "diplomacy": 11,
        "intimidation": 13,
        "society": 13
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 3"
        ],
        "weaknesses": [
          "cold-iron 3"
        ]
      },
      "attacks": [
        {
          "id": "6U8PkkS2LIhiy5C1",
          "name": "Aqueous Fist",
          "bonus": 15,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unarmed",
            "water"
          ]
        },
        {
          "id": "eIUanT7fEcq1jBAo",
          "name": "Aqueous Spear",
          "bonus": 15,
          "damage": "1d6+7 piercing",
          "traits": [
            "magical",
            "water"
          ]
        },
        {
          "id": "9HmFx6yfyclmglMz",
          "name": "Water Orb",
          "bonus": 13,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "20d8PebGz6J8zRAT",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "FXvKIkf5JQCPKyrs",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "CYx6PDHf6ppok3ro",
          "name": "At My Command",
          "kind": "action",
          "description": "Requirements The naiad water guardian's last action this turn was a successful Strike against a creature within 30 feet\nEffect The naiad yells a command at the creature they hit The target must succeed at a check (will, dc:22) save or spend the first action on its next turn doing as commanded (or all its actions on its next turn on a critical failure) The naiad can command a creature to approach them, release what its holding, or drop Prone Regardless of the result of its save, the creature is temporarily immune for 10 minutes.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:naiad-commander",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "IZEACOQ6B09yLtTa",
      "slug": "naiad-commander",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1756c1459ca2ad34024f610e0a4571f73cb59ce2c2349d27d03c9cae7be661f7",
    "translatableHash": "sha256:bb1d64c076c499d19635a95237588d29c63c54939592dc65d7cf3c4c81838ceb",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad Commander",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "The captain is the ultimate authority on a vessel, responsible for the livelihood and well-being of everyone on the ship.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 12,
        "diplomacy": 11,
        "intimidation": 13,
        "survival": 10
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 3"
        ],
        "weaknesses": [
          "cold-iron 3"
        ]
      },
      "attacks": [
        {
          "id": "ASoYSZQLeYx2zpGR",
          "name": "Aqueous Rapier",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "magical",
            "water"
          ]
        },
        {
          "id": "GPPuGjbwDW5uV6ct",
          "name": "Aqueous Main-Gauche",
          "bonus": 16,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "disarm",
            "magical",
            "parry",
            "versatile-s",
            "water"
          ]
        },
        {
          "id": "1y3QPbqipmQ8JnMe",
          "name": "Aqueous Fist",
          "bonus": 16,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "eqKIODGOehxhMYJ0",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals",
          "traits": []
        },
        {
          "id": "FMRFRcuXn2QHFX2v",
          "name": "Bravery",
          "kind": "passive",
          "description": "When the naiad commander rolls a success on a Will save against a fear effect, they get a critical success instead In addition, anytime they gain the Frightened condition, reduce its value by 1.",
          "traits": []
        },
        {
          "id": "5iTqDt4fDSnYuJIg",
          "name": "Dual Disarm",
          "kind": "action",
          "description": "The naiad commander makes two Strikes, one with their rapier and one with their main-gauche (in either order) If both Strikes hit, the naiad commander can attempt to Disarm the target Their multiple attack penalty increases only after all the attacks are made.",
          "traits": []
        },
        {
          "id": "OjePIuXOLgAEb4RG",
          "name": "No Quarter!",
          "kind": "action",
          "description": "The naiad commander orders their allies to fight without mercy All allied creatures of equal or lower level within 20 feet of the commander gain a +1 status bonus to attack rolls and damage rolls until the end of the naiad commander's next turn.\nEffect: No Quarter!",
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
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:naiad-raider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "zqTfhL6DJ2mNCvuG",
      "slug": "naiad-raider",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3a75b547be4ebcdc7c28b3c8e382590a133d25e91751b0126b0f2a0ca1a75529",
    "translatableHash": "sha256:4d4773270deaa1458978d03764375b3b6c434734c1f44a60852fb21a943648da",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad Raider",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "Criminal organizations are always happy to loan out money at exorbitant rates, and their legbreakers are always happy to collect.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 23,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 16,
        "intimidation": 15,
        "stealth": 15,
        "thievery": 13
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 3"
        ],
        "weaknesses": [
          "cold-iron 3"
        ]
      },
      "attacks": [
        {
          "id": "dXznel7vuVPWhsQn",
          "name": "Aqueous Maul",
          "bonus": 17,
          "damage": "1d10+10 bludgeoning",
          "traits": [
            "magical",
            "shove",
            "water"
          ]
        },
        {
          "id": "WMD2iZZH3jNfGTgC",
          "name": "Aqueous Fist",
          "bonus": 16,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "NxCV08g4DxVZ7Xkd",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "LwcNJ4icWzju8j94",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "TAqfKW4mSmkiBuzO",
          "name": "Break Legs!",
          "kind": "action",
          "description": "The naiad raider makes a maul Strike against an adjacent creature If it hits, the creature is knocked Prone and becomes Clumsy 1 for 1 minute As long as this clumsy condition lasts, the creature also takes a –5-foot penalty to its Speeds and has weakness 5 to the naiad raider's Strikes.\nEffect: Break Legs!",
          "traits": []
        },
        {
          "id": "u3p3LeRECuD5PFwU",
          "name": "Rushing Strike",
          "kind": "action",
          "description": "The naiad raider Strides twice If they end their movement within melee reach of an enemy, they can make a melee Strike against that enemy.",
          "traits": []
        },
        {
          "id": "0gE6l2oSZZRPjEyT",
          "name": "Stampeding Shove",
          "kind": "action",
          "description": "The naiad raider Shove a creature, gaining a +2 circumstance bonus to their Athletics check if the target is Prone. If the Shove succeeds, the target takes 2d10 bludgeoning damage (double damage on a critical success).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:naiad-water-defender",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "Boi0rYXIXLQ2gee5",
      "slug": "naiad-water-defender",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0d705f39a2c2ebd09e7069b5f344103aed1f6644f78469983ac7951f9c9ae2fc",
    "translatableHash": "sha256:8817d41ca18d09e5b0cf0523fcb380fe55b9f9eb3afc834a651165825108e417",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad Water Defender",
      "level": 7,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "Gang leaders direct cutthroats, killers, thieves, and toughs. The gang leader often appears alongside a bandit gang or other criminals.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 17,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": 2,
        "wis": -1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 17,
        "deception": 15,
        "intimidation": 17,
        "society": 11,
        "stealth": 17,
        "thievery": 15
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "06QUpYDzeWLuHjVF",
          "name": "Aqueous Shortsword",
          "bonus": 18,
          "damage": "1d6+10 piercing",
          "traits": [
            "agile",
            "magical",
            "versatile-s",
            "water"
          ]
        },
        {
          "id": "9xpaU4kcENt6pjtN",
          "name": "Aqueous Fist",
          "bonus": 17,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unarmed",
            "water"
          ]
        },
        {
          "id": "hfbXoZFO4q2A4GmU",
          "name": "Water Orb",
          "bonus": 17,
          "damage": "1d6+8 bludgeoning",
          "traits": [
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "Uqr6Lka2wLdjHCCz",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals",
          "traits": []
        },
        {
          "id": "kSd8rIlnXiVczYg0",
          "name": "Deny Advantage",
          "kind": "passive",
          "description": "The naiad water defender isn't Off-Guard to creatures of 7th level or lower that are Hidden, Undetected, flanking, or using Surprise Attack.",
          "traits": []
        },
        {
          "id": "Ht7knXtXeyTkKi2n",
          "name": "Evasive Reflexes",
          "kind": "passive",
          "description": "When the naiad water defender rolls a success on a Reflex save, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "fp3XmyB0pcpjCBex",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The naiad water defender is targeted with an attack by an attacker they can see\nEffect The naiad water defender gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "qNEPB3RKC3SlV4YE",
          "name": "Surprise Attacker",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted are Off-Guard to the naiad water defender.",
          "traits": []
        },
        {
          "id": "wXgvnztT7r9jO7Px",
          "name": "Brutal Rally",
          "kind": "reaction",
          "description": "Trigger The naiad water defender rolls a critical hit against a creature\nEffect All allies that can see the naiad water defender gain a +1 circumstance bonus to attack rolls until the start of the naiad water defender's next turn.\nEffect: Brutal Rally",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "dlhm2yJ4EUGym0CG",
          "name": "Gang Up",
          "kind": "passive",
          "description": "Any enemy is Off-Guard against the naiad water defender's melee attacks due to flanking as long as the enemy is within melee reach of both the naiad water defender and one of the naiad water defender's allies.",
          "traits": []
        },
        {
          "id": "PDidp7qMSw5qRoXU",
          "name": "Quick Draw",
          "kind": "action",
          "description": "The naiad water defender Interacts to draw a weapon, then Strikes with that weapon",
          "traits": []
        },
        {
          "id": "j1wf4dSXkGypJjRs",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The naiad water defender deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:frenzied-sea-life",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "T45kzuGRl8ajMo9q",
      "slug": "frenzied-sea-life",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:c624ef7ae1221f877ba7b19fae12d0eb046bf9542e665122baf385de2fb372bd",
    "translatableHash": "sha256:a85b230e5b28fad78dfa7ceb43a378b94b75b6b5d656b3a271613c377c853337",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Frenzied Sea Life",
      "level": 7,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "environmental"
      ],
      "description": "A swarm of aggressive cuttlefish, octopuses, devil rays, and countless other species of sea life bite and bludgeon Timonithaea's enemies.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 30,
        "details": "(trained)"
      },
      "disable": "check (thievery, dc:27) (trained) to remove the crown from the altar while avoiding being bitten by the swarming sea life, or Dispel Magic (4th rank; counteract DC 27) to disable the crown's enchantment, breaking Timonithaea's control over the sea creatures.",
      "isComplex": true,
      "routine": "(one action) The sea creatures attack, dealing 1d10+4 bludgeoning damage] damage to each creature hostile to Timonithaea within the temple (check (reflex, dc:25, basic) save).",
      "reset": "",
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
          "id": "4p7frSBHGFFLs1ae",
          "name": "Aquatic Onslaught",
          "kind": "reaction",
          "description": "Trigger The PCs enter the main temple chamber\nEffect The chamber fills with sea creatures, then rolls initiative.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:timonithaea",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "UG5iXBqsLxRifjSW",
      "slug": "timonithaea",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:47093d1073d12f5e3cab27500353dac8085157d6cfbb6d4bb6de7af55df9a4b4",
    "translatableHash": "sha256:23d452c50b19594fdc636f1feb5870d85ba72574989f5af08ba51a3ddcc63994",
    "data": {
      "schemaVersion": 1,
      "name": "Timonithaea",
      "level": 7,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "Naiad queens rule over pristine wildernesses centered around untouched lakes, massive rivers, or other collective bodies of fresh water. Bards' songs and artists' paintings of these powerful nymphs tend to depict naiad queens in their slightly more humanoid forms, which they don when they make the rare journey into civilized lands to garner allies, gather news, or gauge threats.\nMost naiad queens treat those who respect their domains with kindness, but they're fierce—and quick to eliminate foes. Their blinding beauty and breadth of offensive spells make naiad queens fierce opponents if forced into a fight.\nNymphs are a family of fey that take the form of beautiful humanoids with elven features and have a deep association with the natural world. The most common of their kind are the dryads, which are spirits that embody great trees, but many other kinds of nymphs exist, including naiads, who watch over bodies of water. All nymphs are guardians of some element of nature, typically a specific tree or pond, or even-in the case of nymph queens-whole forests or massive bodies of water\nNymph Queens\nNymph queens are powerful nymphs who rule over entire regions of untouched wilderness, not just single trees or ponds. Every variety of nymph can have a queen. Naiad queens are among the most prominent, and more often interact with nearby mortals. Thus, some scholars refer to naiad queens as simply \"nymphs.\"",
      "armorClass": 26,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 18,
        "will": 17
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 4,
        "int": 3,
        "wis": 4,
        "cha": 7
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 9,
        "diplomacy": 20,
        "medicine": 15,
        "nature": 15,
        "performance": 20,
        "stealth": 14,
        "survival": 15
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 12"
        ],
        "weaknesses": [
          "cold-iron 12"
        ]
      },
      "attacks": [
        {
          "id": "xxUW9YkqVCI57nCo",
          "name": "Aqueous Fist",
          "bonus": 18,
          "damage": "2d8+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "water"
          ]
        },
        {
          "id": "TahJmDRewYTMmLsm",
          "name": "Water Orb",
          "bonus": 18,
          "damage": "4d6 bludgeoning",
          "traits": [
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "nS51JCooM2dV2JTC",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "Gm902B0XQR5W4eLu",
          "name": "Tied to the Land",
          "kind": "passive",
          "description": "Timonithaea is tied to a body of water or area with a great deal of water features.\nA nymph queen is intrinsically tied to a specific region. As long as the queen is healthy, the environment is exceptionally resilient, allowing the nymph queen to automatically attempt to counteract any spell that would harm the environment (such as the Blight ritual), using her spell DC with a counteract rank equal to the highest-rank druid spell she can cast.\nWhen the nymph queen becomes physically or psychologically unhealthy, however, her warded region eventually becomes twisted or unhealthy as well. In that case, restoring the nymph queen swiftly heals the entire region.",
          "traits": []
        },
        {
          "id": "YJMvSGcOCT86q7GC",
          "name": "Timonithaea's Calling",
          "kind": "passive",
          "description": "Timonithaea channels magical energy into the Enoménos crown to telepathically communicate with creatures who are beneath the water within 20 miles of Naós tou Neroú.",
          "traits": []
        },
        {
          "id": "xqRgagTvArv2abwD",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Y44FxT7CY4R6SkdW",
          "name": "Nymph's Beauty",
          "kind": "passive",
          "description": "30 feet. check (will, dc:23, options:area-effect,inflicts:stunned) save.\nA creature that fails its save is Stunned 1 and becomes stunned 1 each time it starts its turn within the aura for the next 24 hours, even if it can't see Timonithaea.",
          "traits": [
            "aura",
            "emotion",
            "mental",
            "primal",
            "visual"
          ]
        },
        {
          "id": "z1Wnid4gCPgKMoV8",
          "name": "Water Healing",
          "kind": "passive",
          "description": "For every 10 minutes a naiad spends soaking in any body of water in her domain, she regains 30 healing.",
          "traits": [
            "healing",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "yQ0WKMlep02TPvLi",
          "name": "Change Shape",
          "kind": "action",
          "description": "Nymph queens can transform between their original form, which looks much like a typical nymph of their kind, and any Small or Medium humanoid form, typically choosing a more humanoid-looking version of their natural form.",
          "traits": [
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "P658sPuiyqAqTdkz",
          "name": "Focus Beauty",
          "kind": "action",
          "description": "If a target already affected by nymph's beauty fails its save, the image of the queen sears into the creature's mind, effectively blinding the creature until its vision is restored with sound body or a similar effect.\nThe naiad queen can Dismiss the effect.\nThe nymph queen focuses her beauty upon a target, who must attempt a save against her nymph's beauty aura (check (will, dc:23) save). If the creature fails and was already affected by the aura, it takes a greater effect described in the nymph queen's entry.\nA nymph queen can Focus Beauty on a given creature only once per turn.",
          "traits": [
            "emotion",
            "mental",
            "primal",
            "visual"
          ]
        },
        {
          "id": "lQKrggSbzpvqq4YB",
          "name": "Inspiration",
          "kind": "action",
          "description": "The nymph queen inspires a single intelligent creature by giving that creature a token of her favor, typically a lock of her hair, though it can be some other significant object as well. As long as the creature carries her token and remains in good standing with her, the creature gains a +1 status bonus to all Crafting checks, Performance checks, and Will saves.\nIf the nymph grants her token to a bard, and she's the bard's muse, the queen chooses one additional benefit granted by her token: a +1 status bonus to all Lore checks, a +2 status bonus to Performance checks when determining the effects of compositions, a +4 status bonus to untrained skill checks, or a +2 status bonus to Will saves against fey.\nEffect: Nymph Queen's Inspiration",
          "traits": [
            "emotion",
            "mental",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "EhdD8hFrqyISTFtx",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 18,
          "saveDc": 28,
          "spells": [
            {
              "id": "l3ONYuCavd12lvrr",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "NIUtiy75GbTPaUlB",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "DL6s3bHOig0efa8q",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "UJdTNNkBAkKL8cb8",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "9n6M42ZkIgsmreIB",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "sWXvc1br4kamX6mt",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "fYjljG26WAtP4FBy",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "AzdFtTsj7aN4X55d",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "7XfNkVvFBcoUN1Jv",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Y42w44Dsi0ecuzGU",
              "name": "Summon Animal",
              "rank": 1
            },
            {
              "id": "YiFG8bxDntR4v7nk",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "8eOsaEWVmshDsqGC",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "0LI7TsEg0mU9QBd1",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "KMfCOi5aGdBkzL5p",
              "name": "Aqueous Orb",
              "rank": 3
            },
            {
              "id": "hsbJvOvw0iW8KC2Q",
              "name": "Earthbind",
              "rank": 3
            }
          ]
        },
        {
          "id": "pCZn7Y6OrzZU4XgW",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "JpGaXFxRfMtRVeWe",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "VqIDKCwbYa5QHWC1",
              "name": "Create Water",
              "rank": 4
            },
            {
              "id": "wosRKNwlCOlpTwVR",
              "name": "Hydraulic Push",
              "rank": 4
            },
            {
              "id": "HL3wrCKvsFKv7jaX",
              "name": "Tidal Surge (At Will)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:timonithaea-7-9",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "Idl8zxFPu9dyRA5h",
      "slug": "timonithaea-7-9",
      "publicationTitle": "Pathfinder Society Scenario #7-03: A Foot in the Door",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:54ee6dd89cf55077b0103037c2cf539a556d296183b6e5f2bb1a6c3951cd4480",
    "translatableHash": "sha256:e97719c0ab8c8ded932a1025d45118d335d15c778e9d6efb0b9bf6e38481e4f9",
    "data": {
      "schemaVersion": 1,
      "name": "Timonithaea (7-9)",
      "level": 9,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "Naiad queens rule over pristine wildernesses centered around untouched lakes, massive rivers, or other collective bodies of fresh water. Bards' songs and artists' paintings of these powerful nymphs tend to depict naiad queens in their slightly more humanoid forms, which they don when they make the rare journey into civilized lands to garner allies, gather news, or gauge threats.\nMost naiad queens treat those who respect their domains with kindness, but they're fierce—and quick to eliminate foes. Their blinding beauty and breadth of offensive spells make naiad queens fierce opponents if forced into a fight.\nNymphs are a family of fey that take the form of beautiful humanoids with elven features and have a deep association with the natural world. The most common of their kind are the dryads, which are spirits that embody great trees, but many other kinds of nymphs exist, including naiads, who watch over bodies of water. All nymphs are guardians of some element of nature, typically a specific tree or pond, or even-in the case of nymph queens-whole forests or massive bodies of water\nNymph Queens\nNymph queens are powerful nymphs who rule over entire regions of untouched wilderness, not just single trees or ponds. Every variety of nymph can have a queen. Naiad queens are among the most prominent, and more often interact with nearby mortals. Thus, some scholars refer to naiad queens as simply \"nymphs.\"",
      "armorClass": 29,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 21,
        "will": 20
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 4,
        "int": 3,
        "wis": 4,
        "cha": 7
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 12,
        "diplomacy": 23,
        "medicine": 18,
        "nature": 18,
        "performance": 23,
        "stealth": 17,
        "survival": 18
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 12"
        ],
        "weaknesses": [
          "cold-iron 12"
        ]
      },
      "attacks": [
        {
          "id": "xxUW9YkqVCI57nCo",
          "name": "Aqueous Fist",
          "bonus": 21,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "water"
          ]
        },
        {
          "id": "TahJmDRewYTMmLsm",
          "name": "Water Orb",
          "bonus": 21,
          "damage": "5d6 bludgeoning",
          "traits": [
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "nS51JCooM2dV2JTC",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "Gm902B0XQR5W4eLu",
          "name": "Tied to the Land",
          "kind": "passive",
          "description": "Timonithaea is tied to a body of water or area with a great deal of water features.\nA nymph queen is intrinsically tied to a specific region. As long as the queen is healthy, the environment is exceptionally resilient, allowing the nymph queen to automatically attempt to counteract any spell that would harm the environment (such as the Blight ritual), using her spell DC with a counteract rank equal to the highest-rank druid spell she can cast.\nWhen the nymph queen becomes physically or psychologically unhealthy, however, her warded region eventually becomes twisted or unhealthy as well. In that case, restoring the nymph queen swiftly heals the entire region.",
          "traits": []
        },
        {
          "id": "YJMvSGcOCT86q7GC",
          "name": "Timonithaea's Calling",
          "kind": "passive",
          "description": "Timonithaea channels magical energy into the Enoménos crown to telepathically communicate with creatures who are beneath the water within 20 miles of Naós tou Neroú.",
          "traits": []
        },
        {
          "id": "xqRgagTvArv2abwD",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Y44FxT7CY4R6SkdW",
          "name": "Nymph's Beauty",
          "kind": "passive",
          "description": "30 feet. check (will, dc:26, options:area-effect,inflicts:stunned) save.\nA creature that fails its save is Stunned 1 and becomes stunned 1 each time it starts its turn within the aura for the next 24 hours, even if it can't see Timonithaea.",
          "traits": [
            "aura",
            "emotion",
            "mental",
            "primal",
            "visual"
          ]
        },
        {
          "id": "z1Wnid4gCPgKMoV8",
          "name": "Water Healing",
          "kind": "passive",
          "description": "For every 10 minutes a naiad spends soaking in any body of water in her domain, she regains 30 healing.",
          "traits": [
            "healing",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "yQ0WKMlep02TPvLi",
          "name": "Change Shape",
          "kind": "action",
          "description": "Nymph queens can transform between their original form, which looks much like a typical nymph of their kind, and any Small or Medium humanoid form, typically choosing a more humanoid-looking version of their natural form.",
          "traits": [
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "P658sPuiyqAqTdkz",
          "name": "Focus Beauty",
          "kind": "action",
          "description": "If a target already affected by nymph's beauty fails its save, the image of the queen sears into the creature's mind, effectively blinding the creature until its vision is restored with sound body or a similar effect.\nThe naiad queen can Dismiss the effect.\nThe nymph queen focuses her beauty upon a target, who must attempt a save against her nymph's beauty aura (check (will, dc:26) save). If the creature fails and was already affected by the aura, it takes a greater effect described in the nymph queen's entry.\nA nymph queen can Focus Beauty on a given creature only once per turn.",
          "traits": [
            "emotion",
            "mental",
            "primal",
            "visual"
          ]
        },
        {
          "id": "lQKrggSbzpvqq4YB",
          "name": "Inspiration",
          "kind": "action",
          "description": "The nymph queen inspires a single intelligent creature by giving that creature a token of her favor, typically a lock of her hair, though it can be some other significant object as well. As long as the creature carries her token and remains in good standing with her, the creature gains a +1 status bonus to all Crafting checks, Performance checks, and Will saves.\nIf the nymph grants her token to a bard, and she's the bard's muse, the queen chooses one additional benefit granted by her token: a +1 status bonus to all Lore checks, a +2 status bonus to Performance checks when determining the effects of compositions, a +4 status bonus to untrained skill checks, or a +2 status bonus to Will saves against fey.\nEffect: Nymph Queen's Inspiration",
          "traits": [
            "emotion",
            "mental",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "EhdD8hFrqyISTFtx",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 21,
          "saveDc": 31,
          "spells": [
            {
              "id": "l3ONYuCavd12lvrr",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "NIUtiy75GbTPaUlB",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "DL6s3bHOig0efa8q",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "UJdTNNkBAkKL8cb8",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "9n6M42ZkIgsmreIB",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "sWXvc1br4kamX6mt",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "fYjljG26WAtP4FBy",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "AzdFtTsj7aN4X55d",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "7XfNkVvFBcoUN1Jv",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Y42w44Dsi0ecuzGU",
              "name": "Summon Animal",
              "rank": 1
            },
            {
              "id": "YiFG8bxDntR4v7nk",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "8eOsaEWVmshDsqGC",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "0LI7TsEg0mU9QBd1",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "KMfCOi5aGdBkzL5p",
              "name": "Aqueous Orb",
              "rank": 3
            },
            {
              "id": "hsbJvOvw0iW8KC2Q",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "hL5bNB4uhZrOcVWN",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "oBOgO4AYHKFB8MMT",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "QR3EGTv0d5clkGrl",
              "name": "Mariner's Curse",
              "rank": 5
            }
          ]
        },
        {
          "id": "pCZn7Y6OrzZU4XgW",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 31,
          "spells": [
            {
              "id": "HL3wrCKvsFKv7jaX",
              "name": "Tidal Surge (At Will)",
              "rank": 4
            },
            {
              "id": "JpGaXFxRfMtRVeWe",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "VqIDKCwbYa5QHWC1",
              "name": "Create Water",
              "rank": 5
            },
            {
              "id": "wosRKNwlCOlpTwVR",
              "name": "Hydraulic Push",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:unruly-crowd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "b1xe6qPYygPr7MH5",
      "slug": "unruly-crowd",
      "publicationTitle": "Pathfinder Society Scenario #7-04: Sulfuric Negotiations",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:3d44b88b8589b82f60e37d156bc8caf64040439f2e4bc44c8b77697f0c45352c",
    "translatableHash": "sha256:1eb8ff7ccab1c87f89ab753066098b6e8e6e5eaf9f7c218bb4f0d0f5d1748605",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Unruly Crowd",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "environmental"
      ],
      "description": "Concerned citizens shout slogans about the dangers of dealing with Cheliax and throw bricks at Chelaxian sympathizers.",
      "armorClass": 19,
      "hitPoints": 44,
      "hardness": 0,
      "stealth": {
        "modifier": 5,
        "details": "(trained) Actors automatically detect this hazard when they open the door to the Grand Hall."
      },
      "disable": "Succeed at two of the following checks in any combination: check (athletics, dc:20) (trained) to confiscate dangerous debris, check (diplomacy, dc:20) (trained) to calm the crowd, check (intimidation, dc:18) (untrained) to scare the crowd away, check (will, dc:22) (trained) to maintain a brave and confident demeanor; an effect such as Calm that can target an area counts as one automatic success.",
      "isComplex": true,
      "routine": "(three actions) The unruly crowd uses an action to chant a Catchy Slogan if it is not already benefiting from the effect It uses Shake Confidence once per turn and uses its remaining actions for cobblestone Strikes.",
      "reset": "",
      "saves": {
        "fortitude": 12,
        "reflex": 12,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "i373FF1aDiawcdbR",
          "name": "There They Are!",
          "kind": "reaction",
          "description": "Trigger A creature opens the door to the Grand Hall\nEffect The unruly crowd rolls Initiative.",
          "traits": []
        },
        {
          "id": "ewXmZRDcTa19hzd0",
          "name": "Catchy Slogan",
          "kind": "action",
          "description": "All the hazards in a 30-foot type:emanation gain a +1 status bonus to attack rolls and damage rolls for 1 round.\nEffect: Catchy Slogan",
          "traits": [
            "auditory",
            "emotion",
            "linguistic"
          ]
        },
        {
          "id": "JEjJmbaqLOsaBEiD",
          "name": "Shake Confidence",
          "kind": "action",
          "description": "The unruly crowd targets a creature within 30 feet The creature must attempt a check (will, dc:20) save\nCritical Success The creature is unaffected and immune to Shake Confidence for 24 hours\nSuccess The creature becomes Frightened 1\nFailure The creature becomes Frightened 2\nCritical Failure The creature becomes frightened 2 and Stupefied 1.",
          "traits": [
            "auditory",
            "emotion"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:rowdy-crowd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "EsbnHIdsavLd2qJc",
      "slug": "rowdy-crowd",
      "publicationTitle": "Pathfinder Society Scenario #7-04: Sulfuric Negotiations",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:a338a834a1e64b218458fc7ea0a710f1ca941455fd9769d4b3be34143d94a86a",
    "translatableHash": "sha256:2d47098cd181183e4522d1e7ccdc7c00a960d98fc70e54a467a66115ab00c20f",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Rowdy Crowd",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "environmental"
      ],
      "description": "Concerned citizens shout slogans about the dangers of dealing with Cheliax and throw bricks at Chelaxian sympathizers.",
      "armorClass": 21,
      "hitPoints": 48,
      "hardness": 0,
      "stealth": {
        "modifier": 7,
        "details": "(trained) Actors automatically detect this hazard when they open the door to the Grand Hall."
      },
      "disable": "Succeed at two of the following checks in any combination: check (athletics, dc:22) (trained) to confiscate dangerous debris, check (diplomacy, dc:22) (trained) to calm the crowd, check (intimidation, dc:20) (untrained) to scare the crowd away, check (will, dc:24) (trained) to maintain a brave and confident demeanor; an effect such as Calm that can target an area counts as one automatic success.",
      "isComplex": true,
      "routine": "(three actions) The unruly crowd uses an action to chant a Catchy Slogan if it is not already benefiting from the effect It uses Shake Confidence once per turn and uses its remaining actions for cobblestone Strikes.",
      "reset": "",
      "saves": {
        "fortitude": 14,
        "reflex": 14,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "i373FF1aDiawcdbR",
          "name": "There They Are!",
          "kind": "reaction",
          "description": "Trigger A creature opens the door to the Grand Hall\nEffect The unruly crowd rolls Initiative.",
          "traits": []
        },
        {
          "id": "ewXmZRDcTa19hzd0",
          "name": "Catchy Slogan",
          "kind": "action",
          "description": "All the hazards in a 30-foot type:emanation gain a +1 status bonus to attack rolls and damage rolls for 1 round.\nEffect: Catchy Slogan",
          "traits": [
            "auditory",
            "emotion",
            "linguistic"
          ]
        },
        {
          "id": "JEjJmbaqLOsaBEiD",
          "name": "Shake Confidence",
          "kind": "action",
          "description": "The unruly crowd targets a creature within 30 feet The creature must attempt a check (will, dc:22) save\nCritical Success The creature is unaffected and immune to Shake Confidence for 24 hours\nSuccess The creature becomes Frightened 1\nFailure The creature becomes Frightened 2\nCritical Failure The creature becomes frightened 2 and Stupefied 1.",
          "traits": [
            "auditory",
            "emotion"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:diabolic-messenger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "mTuhmeDPgTeTDyUF",
      "slug": "diabolic-messenger",
      "publicationTitle": "Pathfinder Society Scenario #7-04: Sulfuric Negotiations",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:42f8043f9faf13379a7a8f82b5181773bc16f1f3c7c3940a88d0d0757f84ea4c",
    "translatableHash": "sha256:414375e42833c10dbf1691c35da62c696b652ea7b0d9590f77530ff9a1763a9d",
    "data": {
      "schemaVersion": 1,
      "name": "Diabolic Messenger",
      "level": 4,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 12,
        "deception": 14,
        "diplomacy": 12,
        "intimidation": 12,
        "society": 12,
        "stealth": 14,
        "thievery": 12
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
          "id": "muLphOSrpPPuXK2Z",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "pJ2DVxfBRi9Wrmt6",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+5 piercing",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "mqZwhkKFZ6GJ6kFj",
          "name": "Rapier",
          "bonus": 15,
          "damage": "2d6+5 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "gnEv2IWvvAm4hy9t",
          "name": "Fist",
          "bonus": 14,
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
          "id": "Omm2X9U53sWtJwUK",
          "name": "Hidden Blade",
          "kind": "action",
          "description": "Frequency once per round\nEffect The diabolic messenger draws a weapon and then Strikes with it The target of the Strike is Off-Guard against the attack.",
          "traits": []
        },
        {
          "id": "RwOdkAEAFzEFKY17",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The diabolic messenger deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:violent-crowd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "20N1KWw4cmy0Etoh",
      "slug": "violent-crowd",
      "publicationTitle": "Pathfinder Society Scenario #7-04: Sulfuric Negotiations",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:772bad83b4e42652f0130cfd6ec4fb4fe17e3d1a76946e4bf00deb82fd7e1515",
    "translatableHash": "sha256:6ce0ef2ffeb1b4edf347878cf7e79e0fccf90d981f1a0b83b03cdab5372f77a5",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Violent Crowd",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "environmental"
      ],
      "description": "Concerned citizens shout slogans about the dangers of dealing with Cheliax and throw bricks at Chelaxian sympathizers.",
      "armorClass": 24,
      "hitPoints": 56,
      "hardness": 0,
      "stealth": {
        "modifier": 12,
        "details": "(trained) Actors automatically detect this hazard when they open the door to the Grand Hall."
      },
      "disable": "Succeed at two of the following checks in any combination: check (athletics, dc:25) (trained) to confiscate dangerous debris, check (diplomacy, dc:25) (trained) to calm the crowd, check (intimidation, dc:23) (untrained) to scare the crowd away, check (will, dc:28) (trained) to maintain a brave and confident demeanor; an effect such as Calm that can target an area counts as one automatic success.",
      "isComplex": true,
      "routine": "(three actions) The unruly crowd uses an action to chant a Catchy Slogan if it is not already benefiting from the effect It uses Shake Confidence once per turn and uses its remaining actions for cobblestone Strikes.",
      "reset": "",
      "saves": {
        "fortitude": 17,
        "reflex": 17,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "i373FF1aDiawcdbR",
          "name": "There They Are!",
          "kind": "reaction",
          "description": "Trigger A creature opens the door to the Grand Hall\nEffect The unruly crowd rolls Initiative.",
          "traits": []
        },
        {
          "id": "ewXmZRDcTa19hzd0",
          "name": "Catchy Slogan",
          "kind": "action",
          "description": "All the hazards in a 30-foot type:emanation gain a +1 status bonus to attack rolls and damage rolls for 1 round.\nEffect: Catchy Slogan",
          "traits": [
            "auditory",
            "emotion",
            "linguistic"
          ]
        },
        {
          "id": "JEjJmbaqLOsaBEiD",
          "name": "Shake Confidence",
          "kind": "action",
          "description": "The unruly crowd targets a creature within 30 feet The creature must attempt a check (will, dc:25) save\nCritical Success The creature is unaffected and immune to Shake Confidence for 24 hours\nSuccess The creature becomes Frightened 1\nFailure The creature becomes Frightened 2\nCritical Failure The creature becomes frightened 2 and Stupefied 1.",
          "traits": [
            "auditory",
            "emotion"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:murderous-crowd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "73rwK4mN1FJbcoTG",
      "slug": "murderous-crowd",
      "publicationTitle": "Pathfinder Society Scenario #7-04: Sulfuric Negotiations",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:8780c2ad1600578d4836b2cb99d5f53bba92022a1340383c04dbb14f6fe23e2d",
    "translatableHash": "sha256:5a9b9d2423bb13677c39a68c7715126b16924fe5f00f3d8e96f7bd426af1e736",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Murderous Crowd",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "environmental"
      ],
      "description": "Concerned citizens shout slogans about the dangers of dealing with Cheliax and throw bricks at Chelaxian sympathizers.",
      "armorClass": 26,
      "hitPoints": 60,
      "hardness": 0,
      "stealth": {
        "modifier": 12,
        "details": "(trained) Actors automatically detect this hazard when they open the door to the Grand Hall."
      },
      "disable": "Succeed at two of the following checks in any combination: check (athletics, dc:27) (trained) to confiscate dangerous debris, check (diplomacy, dc:27) (trained) to calm the crowd, check (intimidation, dc:25) (untrained) to scare the crowd away, check (will, dc:30) (trained) to maintain a brave and confident demeanor; an effect such as Calm that can target an area counts as one automatic success.",
      "isComplex": true,
      "routine": "(three actions) The unruly crowd uses an action to chant a Catchy Slogan if it is not already benefiting from the effect It uses Shake Confidence once per turn and uses its remaining actions for cobblestone Strikes.",
      "reset": "",
      "saves": {
        "fortitude": 19,
        "reflex": 19,
        "will": 0
      },
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "i373FF1aDiawcdbR",
          "name": "There They Are!",
          "kind": "reaction",
          "description": "Trigger A creature opens the door to the Grand Hall\nEffect The unruly crowd rolls Initiative.",
          "traits": []
        },
        {
          "id": "ewXmZRDcTa19hzd0",
          "name": "Catchy Slogan",
          "kind": "action",
          "description": "All the hazards in a 30-foot type:emanation gain a +1 status bonus to attack rolls and damage rolls for 1 round.\nEffect: Catchy Slogan",
          "traits": [
            "auditory",
            "emotion",
            "linguistic"
          ]
        },
        {
          "id": "JEjJmbaqLOsaBEiD",
          "name": "Shake Confidence",
          "kind": "action",
          "description": "The unruly crowd targets a creature within 30 feet The creature must attempt a check (will, dc:27) save\nCritical Success The creature is unaffected and immune to Shake Confidence for 24 hours\nSuccess The creature becomes Frightened 1\nFailure The creature becomes Frightened 2\nCritical Failure The creature becomes frightened 2 and Stupefied 1.",
          "traits": [
            "auditory",
            "emotion"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:thoroughbred-nightmare",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "HRGx74hvyLwpAzYx",
      "slug": "thoroughbred-nightmare",
      "publicationTitle": "Pathfinder Society Scenario #7-05: Battle of the Thorns",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:28e8ef3ecf04d4bf5101a90715be396e98b2e2646ac8f67f3012b6fbbaf60eaa",
    "translatableHash": "sha256:2aa478607ff1a0e1ce2933c3289f1fb39165cbbc2b46604a2fb9bad14aedbf9f",
    "data": {
      "schemaVersion": 1,
      "name": "Thoroughbred Nightmare",
      "level": 9,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast",
        "fiend",
        "unholy"
      ],
      "description": "Nightmares are flaming equine harbingers of death.",
      "armorClass": 28,
      "hitPoints": 160,
      "speedFeet": 50,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 4,
        "int": 1,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 21,
        "intimidation": 18,
        "survival": 17
      },
      "languages": [
        "chthonian",
        "daemonic",
        "diabolic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 13"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hvrW7fEOtezPrmRv",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d10+13 piercing",
          "traits": [
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "NHSqYE5ZeWiln3Vx",
          "name": "Hoof",
          "bonus": 21,
          "damage": "1d8+13 bludgeoning; 1d8 fire",
          "traits": [
            "agile",
            "fire",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "nbWXPfh7WyVCERN9",
          "name": "Smoke",
          "kind": "passive",
          "description": "15 feet. The nightmare continually exhales black smoke Creatures within the aura are Concealed to those outside it, and creatures outside the aura are concealed to creatures within it. Nightmares and their riders can see through this smoke. A creature that begins its turn in the area must succeed at a check (fortitude, dc:25, options:area-effect,inflicts:sickened, traits:inhaled,poison) save or be Sickened 2. It's then temporarily immune to being sickened by the smoke for 1 minute. This is an inhaled poison, and the nightmare and its rider are immune to it.",
          "traits": [
            "aura"
          ]
        },
        {
          "id": "Huqh2NJEkx1xBpoO",
          "name": "Flaming Gallop",
          "kind": "action",
          "description": "The nightmare Strides or Flies up to triple its Speed. Its hooves burst with intense flame, dealing 5d6 fire damage with a check (reflex, dc:28, basic) save to each creature other than the nightmare's rider that the nightmare moves adjacent to during its gallop. Each creature can be affected only once during a single use of Flaming Gallop.",
          "traits": [
            "divine",
            "fire",
            "unholy"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "jW0BtgVKN8XQhLKs",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "aFTYkeNI6jd2TfGi",
              "name": "Interplanar Teleport (Self and Rider Only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:kizrech",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "W2puJUeo61CLMMxQ",
      "slug": "kizrech",
      "publicationTitle": "Pathfinder Society Scenario #7-05: Battle of the Thorns",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:27e69f3c6bd528bcd3dcf063aea8545dc2697205dcbcec4bf07ce1b7be87cfb4",
    "translatableHash": "sha256:3f6727063779f7e678ed2e586158552015a194a7826d25becb0f64fcb7012130",
    "data": {
      "schemaVersion": 1,
      "name": "Kizrech",
      "level": 9,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "",
      "armorClass": 28,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 19,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 5,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 21,
        "intimidation": 19,
        "religion": 18
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "cold 5",
          "physical 10 except silver",
          "poison 10"
        ],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "nNOdXm0WI7BDz31x",
          "name": "Returning Unholy Trident",
          "bonus": 21,
          "damage": "2d8+12 piercing",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "Xk3dgpxZ0YER08J8",
          "name": "Returning Unholy Trident",
          "bonus": 19,
          "damage": "2d8+12 piercing",
          "traits": [
            "magical",
            "thrown-60",
            "unholy"
          ]
        },
        {
          "id": "TVLTSMr5ZBcGgKjJ",
          "name": "Hoof",
          "bonus": 21,
          "damage": "1d8+9 bludgeoning; 1d8 fire",
          "traits": [
            "agile",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "LNMvDz05IiBL47EM",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eFSn04VHXskAZuk0",
          "name": "Infernal Command",
          "kind": "reaction",
          "description": "Trigger An enemy within 30 feet of Kizrech damages them or their mount\nEffect Kizrech commands their enemy to kneel before them. The triggering enemy must choose to either drop Prone as a free action or take 3d6 mental damage.",
          "traits": []
        },
        {
          "id": "km7leU6HupTrnw62",
          "name": "Mounted Force",
          "kind": "passive",
          "description": "While mounted on a fend, Kizrech's trident gains the jousting 1d8 and thrown 60 feet traits, and Kizrech and their mount each increase their level by 1 when resolving incapacitation efects.",
          "traits": []
        },
        {
          "id": "A6MAt5wI9QNtMV0B",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "co2oaEEUO9ejhVbc",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "Kizrech may use this reaction to prevent their mount from taking damage instead of themself, following the normal rules for Shield Block.",
          "traits": []
        },
        {
          "id": "coNa4wAvlNgz8Q2l",
          "name": "Burning Hoofprints",
          "kind": "action",
          "description": "Kizrech Strides, trailing hoofprints in each square they exit. The hoofprints burn for 1 minute. A creature on the ground that enters a square with burning hoofprints or begins its turn in one takes 1d6 fire damage. Kizrech can use this ability while mounted, afecting up to 30 feet of contiguous hoofprints from their mount's Stride; this trail is 10 feet wide for a Large mount, or 15 feet wide for a Huge mount.",
          "traits": [
            "divine",
            "fire",
            "unholy"
          ]
        },
        {
          "id": "FPs9Bi34nso7qlCA",
          "name": "Trident of Dis",
          "kind": "action",
          "description": "Kizrech makes a trident Strike, increasing their reach to 10 feet for that Strike. If there is an unholy ally between Kizrech and their target, or if Kizrech is mounted on an unholy creature, that creature's energy causes the Strike to deal an additional 1d8 spirit damage.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "dZF46p1pFpGeRCMJ",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "WLvdIhprj7cd1ha4",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "BvdfIvDQwWd4EOFO",
              "name": "Translocate",
              "rank": 5
            }
          ]
        },
        {
          "id": "WHcrbPPmC96tjl0w",
          "name": "Divine Focus Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 20,
          "saveDc": 25,
          "spells": [
            {
              "id": "L7z0810ey8nlSwJL",
              "name": "Touch of the Void",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:kizrech-11-12",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "xyT4zCZjAbnAgDLV",
      "slug": "kizrech-11-12",
      "publicationTitle": "Pathfinder Society Scenario #7-05: Battle of the Thorns",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:183ecc7339aa594face5a03cf1ff0b817075b9ec8d5b398f2a2b1b747d2f7177",
    "translatableHash": "sha256:7cb915860c7b2adf8b76725866c3f840210518388e41c755b05b99117e5b5128",
    "data": {
      "schemaVersion": 1,
      "name": "Kizrech (11-12)",
      "level": 11,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "",
      "armorClass": 31,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 22,
        "will": 19
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 5,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 24,
        "intimidation": 22,
        "religion": 21
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "cold 5",
          "physical 12 except silver",
          "poison 12"
        ],
        "weaknesses": [
          "holy 12"
        ]
      },
      "attacks": [
        {
          "id": "nNOdXm0WI7BDz31x",
          "name": "Returning Unholy Trident",
          "bonus": 24,
          "damage": "2d8+15 piercing",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "Xk3dgpxZ0YER08J8",
          "name": "Returning Unholy Trident",
          "bonus": 22,
          "damage": "2d8+15 piercing",
          "traits": [
            "magical",
            "thrown-60",
            "unholy"
          ]
        },
        {
          "id": "TVLTSMr5ZBcGgKjJ",
          "name": "Hoof",
          "bonus": 24,
          "damage": "1d8+12 bludgeoning; 1d8 fire",
          "traits": [
            "agile",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "LNMvDz05IiBL47EM",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eFSn04VHXskAZuk0",
          "name": "Infernal Command",
          "kind": "reaction",
          "description": "Trigger An enemy within 30 feet of Kizrech damages them or their mount\nEffect Kizrech commands their enemy to kneel before them. The triggering enemy must choose to either drop Prone as a free action or take 3d6 mental damage.",
          "traits": []
        },
        {
          "id": "km7leU6HupTrnw62",
          "name": "Mounted Force",
          "kind": "passive",
          "description": "While mounted on a fend, Kizrech's trident gains the jousting 1d8 and thrown 60 feet traits, and Kizrech and their mount each increase their level by 1 when resolving incapacitation efects.",
          "traits": []
        },
        {
          "id": "A6MAt5wI9QNtMV0B",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "co2oaEEUO9ejhVbc",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "Kizrech may use this reaction to prevent their mount from taking damage instead of themself, following the normal rules for Shield Block.",
          "traits": []
        },
        {
          "id": "coNa4wAvlNgz8Q2l",
          "name": "Burning Hoofprints",
          "kind": "action",
          "description": "Kizrech Strides, trailing hoofprints in each square they exit. The hoofprints burn for 1 minute. A creature on the ground that enters a square with burning hoofprints or begins its turn in one takes 1d8 fire damage. Kizrech can use this ability while mounted, afecting up to 30 feet of contiguous hoofprints from their mount's Stride; this trail is 10 feet wide for a Large mount, or 15 feet wide for a Huge mount.",
          "traits": [
            "divine",
            "fire",
            "unholy"
          ]
        },
        {
          "id": "FPs9Bi34nso7qlCA",
          "name": "Trident of Dis",
          "kind": "action",
          "description": "Kizrech makes a trident Strike, increasing their reach to 10 feet for that Strike. If there is an unholy ally between Kizrech and their target, or if Kizrech is mounted on an unholy creature, that creature's energy causes the Strike to deal an additional 1d8 spirit damage.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "dZF46p1pFpGeRCMJ",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "WLvdIhprj7cd1ha4",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "BvdfIvDQwWd4EOFO",
              "name": "Translocate",
              "rank": 5
            }
          ]
        },
        {
          "id": "jMgnwHMPjY4M0KeC",
          "name": "Divine Focus Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 22,
          "saveDc": 27,
          "spells": [
            {
              "id": "z6F0gzh1tDFHQ7TW",
              "name": "Touch of the Void",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:heavily-damaged-jaws-of-hell",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "7AuIb3HthP8BuPxh",
      "slug": "heavily-damaged-jaws-of-hell",
      "publicationTitle": "Pathfinder Society Scenario #7-06: Brastlewark at War Part 1: The Gnome Defection",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:5cbaf8b5593efab0989f9470de516bad77be00d306c2afa8c290557f962892fb",
    "translatableHash": "sha256:783609157392cd0c038b1e4385401627f9319448f90fc006b6b34ac6608ef296",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Heavily Damaged Jaws of Hell",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "magical",
        "mechanical"
      ],
      "description": "The machine is a cylindrical device ringed in blades with a devilish eye at its center. Gnome inventors created the mechanical device, which taps into the planes of earth and fre to create powerful blasts to damage fortress walls or decimate ranks of enemies. Unfortunately, the many miles of forest have not been kind and it's malfunctioning. The damaged jaws planar connections have weakened to a mere trickle and, when activated, it lashes out in an uncontrolled frenzy. The blades encircling it begin lashing out.",
      "armorClass": 16,
      "hitPoints": 20,
      "hardness": 4,
      "stealth": {
        "modifier": 5,
        "details": ""
      },
      "disable": "check (arcana, dc:15), check (crafting, dc:15), check (nature, dc:15), or check (thievery, dc:15) (trained) twice, to sever the connection to the planes of fre and earth. check (crafting, dc:13) or check (thievery, dc:13) (trained) once, to remove the pintle connecting the limber to the horses. A creature must be adjacent to the jaws to make either check.",
      "isComplex": true,
      "routine": "(three actions) On its turn each round, the horses spend one action to move 30 feet, dragging the limber carrying the jaws behind them in a randomly chosen direction. The horses will not move through other creatures. Players on the limber when it moves must attempt a check (acrobatics, dc:15) check when it moves or fall of. Removing the pintle will end the random movement. The jaws use 2 actions to Spit Fire or make melee strikes against an adjacent creature.",
      "reset": "The planar connection shuts down after 1 minute. The horses will tire and stop running after 1 minute.",
      "saves": {
        "fortitude": 13,
        "reflex": 5,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "LCjhpLS1is67Har2",
          "name": "Jaws Statistics",
          "kind": "passive",
          "description": "Jaws Hardness 8\nJaws HP 30 (BT 15)",
          "traits": []
        },
        {
          "id": "qZI2dGYb3P3DpTBd",
          "name": "Blades of Vengeance",
          "kind": "reaction",
          "description": "Trigger A Small or larger creature, moves within 10 feet of the jaws.\nEffect One of the blades lashes out, making one Strike against the creature.",
          "traits": []
        },
        {
          "id": "uHMxDJnJaeG4qqvF",
          "name": "Spit Fire",
          "kind": "action",
          "description": "The jaws launch a magma ball (range 60 feet, 10-foot burst), randomly, at the largest group of creatures, not including itself, it can catch in the blast dealing 2d4 bludgeoning damage damage. Each creature caught in the blast must attempt a check (reflex, dc:15, options:damaging-effect,area-effect) save. The jaws cannot Spit Fire again for 1d4+1 rounds.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is knocked Prone.\nCritical Failure The creature takes double damage, 1 persistent fire damage, and is knocked prone.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:damaged-jaws-of-hell",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "NvfppCDPYw54WXSb",
      "slug": "damaged-jaws-of-hell",
      "publicationTitle": "Pathfinder Society Scenario #7-06: Brastlewark at War Part 1: The Gnome Defection",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:8175890c92f1d2bb9755384e8a5042f46a5f368475472358bc42111ba59d0d3c",
    "translatableHash": "sha256:2e6741afa1a9f11558a22a0a451c4078763fd0ed2d68a50a788b48b919ba0fca",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Damaged Jaws of Hell",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "magical",
        "mechanical"
      ],
      "description": "The machine is a cylindrical device ringed in blades with a devilish eye at its center. Gnome inventors created the mechanical device, which taps into the planes of earth and fre to create powerful blasts to damage fortress walls or decimate ranks of enemies. Unfortunately, the many miles of forest have not been kind and it's malfunctioning. The damaged jaws planar connections have weakened to a mere trickle and, when activated, it lashes out in an uncontrolled frenzy. The blades encircling it begin lashing out.",
      "armorClass": 19,
      "hitPoints": 32,
      "hardness": 8,
      "stealth": {
        "modifier": 7,
        "details": ""
      },
      "disable": "check (arcana, dc:18), check (crafting, dc:18), check (nature, dc:18), or check (thievery, dc:18) (trained) twice, to sever the connection to the planes of fre and earth. check (crafting, dc:16) or check (thievery, dc:16) (trained) once, to remove the pintle connecting the limber to the horses. A creature must be adjacent to the jaws to make either check.",
      "isComplex": true,
      "routine": "(three actions) On its turn each round, the horses spend one action to move 30 feet, dragging the limber carrying the jaws behind them in a randomly chosen direction. The horses will not move through other creatures. Players on the limber when it moves must attempt a check (acrobatics, dc:18) check when it moves or fall of. Removing the pintle will end the random movement. The jaws use 2 actions to Spit Fire or make melee strikes against an adjacent creature.",
      "reset": "The planar connection shuts down after 1 minute. The horses will tire and stop running after 1 minute.",
      "saves": {
        "fortitude": 16,
        "reflex": 8,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "LCjhpLS1is67Har2",
          "name": "Jaws Statistics",
          "kind": "passive",
          "description": "Jaws Hardness 15\nJaws HP 60 (BT 30)",
          "traits": []
        },
        {
          "id": "qZI2dGYb3P3DpTBd",
          "name": "Blades of Vengeance",
          "kind": "reaction",
          "description": "Trigger A Small or larger creature, moves within 10 feet of the jaws.\nEffect One of the blades lashes out, making one Strike against the creature.",
          "traits": []
        },
        {
          "id": "uHMxDJnJaeG4qqvF",
          "name": "Spit Fire",
          "kind": "action",
          "description": "The jaws launch a magma ball (range 60 feet, 10-foot burst), randomly, at the largest group of creatures, not including itself, it can catch in the blast dealing 3d4 bludgeoning damage damage. Each creature caught in the blast must attempt a check (reflex, dc:18, options:damaging-effect,area-effect) save. The jaws cannot Spit Fire again for 1d4+1 rounds.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is knocked Prone.\nCritical Failure The creature takes double damage, 1 persistent fire damage, and is knocked prone.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:lesser-marsh-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "djUdn9CVNR8ZfZye",
      "slug": "lesser-marsh-giant",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d07dc83042383e998843c9c1cb0ad42d3f3321f27171d4744d36abd4583cabb",
    "translatableHash": "sha256:fbaef3f78a50a133a4c40a55ade7efe44abfa7a30600e23d8f57ede749e90f9e",
    "data": {
      "schemaVersion": 1,
      "name": "Lesser Marsh Giant",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "giant",
        "humanoid",
        "water"
      ],
      "description": "Dwellers of brackish coastal salt marshes and fetid bogs and swamps, marsh giants appear hideous to most airbreathers, with fishlike mouths, slimy graygreen skin, and dark, beady eyes. They prefer to eat the flesh of those they slay in battle, including other marsh giants, and guzzle stagnant water from cauldrons or directly from their swampy homes.\nMarsh giant clans are insular, with each clan dedicating itself to zealous worship of a sea-dwelling deity, demon lord, or stranger entity. Whatever forces call to the marsh giants sometimes ensnare boggards and ogres as well, gathering in grim worship. Rather than favor these humanoid hangerson, marsh giants lavish attention on favored pets: krooths, giant octopuses, or primeval creatures like dinosaurs and the crocodilian deinosuchuses.\nBarely topping 11 feet tall and 1,000 pounds, marsh giants are small for giants but make up for their stature with their zealotry.\nGiants are massive humanoid creatures who live in remote regions throughout the world. They vary widely but are united in their hunger, requiring sustenance of their own element along with the feasts one would expect from such a massive humanoid. Although a simple matter for some giants, more esoteric types find this need a harsh reality. While a massive fistful of ice or snow alongside their meal will satisfy a frost giant, shadow giants hunger for the coagulated shadows of the Netherworld.",
      "armorClass": 24,
      "hitPoints": 105,
      "speedFeet": 35,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 11,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 15,
        "intimidation": 12,
        "nature": 12,
        "religion": 14
      },
      "languages": [
        "aklo",
        "common",
        "jotun",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UPUXBFdc12OlpoBV",
          "name": "Gaff",
          "bonus": 17,
          "damage": "2d6+10 bludgeoning",
          "traits": [
            "magical",
            "reach-10",
            "trip",
            "versatile-p"
          ]
        },
        {
          "id": "EF6jFpXwBUM3i2gf",
          "name": "Fist",
          "bonus": 17,
          "damage": "2d6+10 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "huY2kc7XivnkykqV",
          "name": "Spit",
          "bonus": 17,
          "damage": "4d6 bludgeoning",
          "traits": [
            "primal",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "vVucSfThIT1iEEjO",
          "name": "Drowning Hook",
          "kind": "action",
          "description": "Requirements A creature is Prone within the marsh giant's reach\nEffect The marsh giant uses its gaff to push the creature down as water bubbles up below it. The target becomes submerged in water until they are no longer prone and must hold their breath if they cannot breathe water. They take 2d10 bludgeoning damage (check (fortitude, dc:21, basic) save) and lose 3 rounds worth of air if they fail the save.",
          "traits": [
            "primal",
            "water"
          ]
        },
        {
          "id": "eoLK3mAvvXiMTLnH",
          "name": "Twist the Hook",
          "kind": "action",
          "description": "The marsh giant makes a melee Strike with its gaff. If it hits, it twists and yanks the gaff to knock the target Prone and create an awful wound, dealing 2d4 persistent bleed damage to the creature.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "SOapd5GiFsybvQAC",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "Yde51S9ffNgHJlgB",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "M9OmJbde6QeKYhrF",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "j34Fi56CTrZXtEGG",
              "name": "Mariner's Curse",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:demonologist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "61BHReqSkicuE8Dz",
      "slug": "demonologist",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8b44bd1e25ed30b8f970b0c29128053d2530693bf517ac661dfad77d0f38dedb",
    "translatableHash": "sha256:dbd4e740ba92808b424c2fff9042b5e2884c40c3631252008fc55d8467b9e460",
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
          "description": "The demonologist can cast a 5th-rank Summon Fiend arcane spell to summon a Nucol. To do so, they must sacrifice two 4th-rank prepared spells and voluntarily take 4d12 mental damage that can't be reduced or prevented. If the demonologist is unable to Sustain the Spell, including if they're knocked out or killed, the spell continues, but the GM rolls a check (flat, dc:10) each round, ending the spell on a failure.",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:dragons-ward",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "XSY1p9wtrpoTA1JT",
      "slug": "dragons-ward",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:33dd0d4079989511567a42170e77f0b62c0a0a79ecdd0368529894c0b1fcd739",
    "translatableHash": "sha256:374bf7c8732fb51864ed6a31eebb47b015d2f484c76520e8bfb43794535476ae",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Dragon's Ward",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 15,
        "details": "(expert)"
      },
      "disable": "check (thievery, dc:27) (master) to painstakingly remove the rune without triggering the magic, or Dispel Magic (4th rank; counteract DC 25) to counteract the rune.",
      "isComplex": false,
      "routine": "",
      "reset": "",
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
          "id": "Q3tYNLNsh36qBUyL",
          "name": "Curse the Intruders",
          "kind": "reaction",
          "description": "Trigger A creature passes the threshold\nEffect Each living creature within 30 feet must succeed at a check (will, dc:23) save or be subjected to the dragon's curse A cursed creature takes a –2 status penalty to Fortitude saves, and any natural or magical healing it receives is halved The curse remains until removed by Cleanse Affliction or similar magic\nEffect: Curse the Intruders",
          "traits": [
            "curse",
            "divine"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:marshy-snapdrake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "1sswwOStdEzuYFj5",
      "slug": "marshy-snapdrake",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a79e2823d6fb18c19701df77d1fee48236376c29780fd29087e4c2f6c6599f6e",
    "translatableHash": "sha256:4bf4883f10c8baeb0e73dee89c913e89edf20776c6d7412f80229a6e64649147",
    "data": {
      "schemaVersion": 1,
      "name": "Marshy Snapdrake",
      "level": 8,
      "rarity": "uncommon",
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
        "performance": 16,
        "stealth": 14
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
          "description": "30 feet. A creature that enters the emanation must attempt a check (will, dc:25) save. On a failure, the target is Fascinated by the snapdrake and must use at least 1 action on its next turn to Stride closer to the snapdrake. On a success, the target is immune to the snapdrake's alluring scent for 1 hour.",
          "traits": [
            "aura",
            "olfactory",
            "plant",
            "primal"
          ]
        },
        {
          "id": "ynOVEJzoDLnic7tI",
          "name": "Reactive Strike (Tail Scythe Only)",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "7RD9b0b0ARSHZeZJ",
          "name": "Greater Marsh Passage",
          "kind": "passive",
          "description": "The marshy snapdrake ignores difficult terrain and greater difficult terrain from marshy ground and fungi",
          "traits": []
        },
        {
          "id": "HAmEsoCS7jucJCnL",
          "name": "Marshy Snapdrake Pollen",
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
          "description": "Frequency 3 times per day\nEffect The marshy snapdrake Strides or Flies up to twice its Speed",
          "traits": [
            "move"
          ]
        },
        {
          "id": "YsP0BTGgFbqhPJlq",
          "name": "Spray Pollen",
          "kind": "action",
          "description": "The marshy snapdrake breathes a blast of pollen in a 40-foot type:cone Creatures caught in the blast must succeed at a check (reflex, dc:25, options:area-effect) save or be exposed to marshy snapdrake pollen The marshy snapdrake can't use Spray Pollen again for 1d6 rounds.",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:distracted-zaluraak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "mmv8aD2JO1fsGVRJ",
      "slug": "distracted-zaluraak",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a59f7cd2f2646e9d591e9a2a45a7ec6111c95207412a20c8cc1c655bbf2077c",
    "translatableHash": "sha256:0f5c4265bc6d71ef593473cd41cd45f8c5bbfdc1994f7f5c8b0beaefac3b4e75",
    "data": {
      "schemaVersion": 1,
      "name": "Distracted Zaluraak",
      "level": 8,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Fortune dragons have the innate ability to draw upon the raw magical energies that surround them. They constantly use these magical energies to empower their magical abilities and even their bodies, as the energy can heal wounds. A fortune dragon has a typical build for an arcane dragon, but their bodies sport a striking feature: their treasure. The dragon's nature of drawing upon magic causes coins, gems, and, most notably, magical items to cling to their body like iron drawn to magnets. A dragon constantly pulls magical energies from the items attached to their body and makes use of these energies to cast spells. The magical energies that flow through a fortune dragon constantly flow through the dragon's items as well, and in many cases, the items melt from the heat produced in this process. Fortune dragons are seekers of novel experiences. This desire for originality leads fortune dragons to approach visitors of other ancestries with curiosity, though this initial interest quickly wanes if a visitor lacks exciting qualities.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 40,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 18,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 3,
        "int": 5,
        "wis": 3,
        "cha": 15
      },
      "skills": {
        "acrobatics": 17,
        "arcana": 18,
        "athletics": 17,
        "crafting": 18,
        "diplomacy": 16,
        "thievery": 17
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "drained",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "V3RdFn1rzRknyFZk",
          "name": "Jaws",
          "bonus": 18,
          "damage": "2d8+9 piercing; 1d6 force",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "ZtXhjfJCNa4QpidO",
          "name": "Claw",
          "bonus": 18,
          "damage": "2d6+9 piercing; 1d6 force",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "l85X7HFMtvq5VzZO",
          "name": "Tail",
          "bonus": 16,
          "damage": "1d6 fire; 2d8+9 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "RvtzkMW1PTqja0gM",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "fLPSxVkoQyjEcOhg",
          "name": "Capture Spell",
          "kind": "reaction",
          "description": "Trigger The dragon succeeds or critically succeeds on a saving throw against a spell\nEffect The dragon attempts to capture a portion of the spell's magic to feed themself. They attempt to counteract the spell (counteract rank 5, counteract modifier 1d20+20). If successful, the dragon is unaffected by the spell and regains one expended spontaneous spell slot; other subjects are affected by the spell normally.",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "Fd9jpCrOyon1zkTb",
          "name": "Disruptive Breath",
          "kind": "action",
          "description": "The dragon unleashes a spray of magic-disrupting energies that deals 7d6 force damage in a 30-foot cone (check (reflex, dc:27, basic, options:area-effect) save). Creatures that fail become Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute.\nThe dragon can't use Disruptive Breath again for 1d4.",
          "traits": [
            "arcane",
            "force"
          ]
        },
        {
          "id": "wlFjZPNirGsmZHEX",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order.",
          "traits": []
        },
        {
          "id": "xZbyHDzzCDYB7MD6",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "Whenever they score a critical hit with a Strike, the dragon chooses to either recharge Disruptive Breath or regain one expended spontaneous spell slot.",
          "traits": []
        },
        {
          "id": "HrKiO0jPCr68aaT0",
          "name": "Share the Wealth",
          "kind": "action",
          "description": "Requirements The dragon's body is covered in riches (this is typically the case when the dragon is first encountered)\nEffect The dragon shakes their body aggressively, sending coins and other riches flying in every direction, dealing 7d6 bludgeoning damage with a check (reflex, dc:26, basic, options:area-effect) save to all creatures in a 30-foot emanation. The dragon's body is then no longer covered in riches.",
          "traits": []
        },
        {
          "id": "ZSBangxptZQWQrmm",
          "name": "Treasure Dive",
          "kind": "action",
          "description": "Requirements The dragon's body isn't covered in riches and the dragon is adjacent to their hoard\nEffect The dragon Strides or Burrows through their hoard using their land Speed. They coat themself in coins, magic items, and other treasures. This contact with magical items revitalizes the dragon, causing them to regain one expended spontaneous spell slot.\nThe dragon can move through other creatures while moving in this way. Creatures in the dragon's path, or above it if the dragon Burrows, must succeed at a check (reflex, dc:24) save or be pushed 10 feet (or pushed 20 feet and knocked Prone on a critical failure).",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "2ZLsaPJA5gu2RAy4",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "EUdeG6pV7AvsMvbp",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "tkQzWdHkAQOzFXJ0",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "sNVPlrGHgUKc5ABj",
              "name": "Fireball",
              "rank": 4
            },
            {
              "id": "HCZoZXU257qlMRFY",
              "name": "Force Barrage",
              "rank": 4
            },
            {
              "id": "imCi608NG5YiQGuW",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "AJ1yLigCUPDfpXUg",
              "name": "Unfettered Movement",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:ogre-hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "4e3nTysxN8Yz27ZH",
      "slug": "ogre-hunter",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:32176ca5d58c86501e924d08601b88ebb7a4590a11403c54d9adc2ca763c2704",
    "translatableHash": "sha256:d4ec75eacd46dde58027f77877ce1631917cf4091a371b7c43a08ed06268ef1d",
    "data": {
      "schemaVersion": 1,
      "name": "Ogre Hunter",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "",
      "armorClass": 28,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 20,
        "intimidation": 20,
        "stealth": 15
      },
      "languages": [
        "common",
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ItDTIowVA9KO4zNG",
          "name": "Ogre Hook",
          "bonus": 22,
          "damage": "1d10+14 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "trip"
          ]
        },
        {
          "id": "A5BpjLkqVn4BSXTc",
          "name": "Trident",
          "bonus": 15,
          "damage": "1d8+14 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "Re8QGjayIcTb9XDe",
          "name": "Always Ready for a Scufe",
          "kind": "reaction",
          "description": "Trigger A creature gets in melee range of the ogre hunter\nEffect The ogre hunter draws a melee weapon.",
          "traits": []
        },
        {
          "id": "pwFv2tGKdCtjLxjZ",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "JDeq2RIvsQCT4hQm",
          "name": "Hunting Throw",
          "kind": "action",
          "description": "The ogre hunter makes a ranged strike with their trident within 60 feet without ranged penalties. If the strike hits, it has enough force to knock the target Prone. If the strike was a critical success, the target is also Immobilized by the trident.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:greater-demonologist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "wFQyPlsanAsARNJf",
      "slug": "greater-demonologist",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b94193fbcdb1479a8eeadc58bafec39b7534b6aac81ca14147213dff5124990f",
    "translatableHash": "sha256:65cc669c03a14608c57b5e3a2bbedd459ed681d80973d9bd74e931c825ffa924",
    "data": {
      "schemaVersion": 1,
      "name": "Greater Demonologist",
      "level": 9,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Demonologists can pull a creature from the Outer Rifts and bend it to their will... for a time.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 25,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 15,
        "will": 18
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
        "arcana": 19,
        "diplomacy": 14,
        "religion": 18
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
          "bonus": 20,
          "damage": "1d8+12 piercing",
          "traits": [
            "magical",
            "reach"
          ]
        },
        {
          "id": "8Xoqtmerpdbx1Rgu",
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
          "attackModifier": 20,
          "saveDc": 28,
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:greater-dragons-ward",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "WNqtBA2lhQcVaE4D",
      "slug": "greater-dragons-ward",
      "publicationTitle": "Pathfinder Society Scenario #7-07: Draconic Folly",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:02b170c14c8517b561f23e99dd124317efa5f0187245bdad73fbb326b8e3231d",
    "translatableHash": "sha256:90fccac39abc9c9813d80bf37c64cedb34bf03f1a7165945264e9fb09ee374c7",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Greater Dragon's Ward",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 18,
        "details": "(expert)"
      },
      "disable": "check (thievery, dc:30) (master) to painstakingly remove the rune without triggering the magic, or Dispel Magic (4th rank; counteract DC 28) to counteract the rune.",
      "isComplex": false,
      "routine": "",
      "reset": "",
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
          "id": "Q3tYNLNsh36qBUyL",
          "name": "Curse the Intruders",
          "kind": "reaction",
          "description": "Trigger A creature passes the threshold\nEffect Each living creature within 30 feet must succeed at a check (will, dc:26) save or be subjected to the dragon's curse A cursed creature takes a –2 status penalty to Fortitude saves, and any natural or magical healing it receives is halved The curse remains until removed by Cleanse Affliction or similar magic\nEffect: Curse the Intruders",
          "traits": [
            "curse",
            "divine"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:hunted-by-chains",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "YOoLTw1foHA5g9Ng",
      "slug": "hunted-by-chains",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:59220d4c1104105bd917690e1daf85ad80778ccd70a759f16d660e57e5de3128",
    "translatableHash": "sha256:99c311c2c48852daffddfc6db4ca877cd5da5f04ef3398a3270074f9070ae449",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Hunted by Chains",
      "level": -1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "Shadowy chains reach out to ensnare creatures trapped in the mindscape.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 11,
        "details": "(trained)"
      },
      "disable": "check (acrobatics, dc:17) to avoid the chains, or check (arcana, dc:17), check (occultism, dc:17), or check (religion, dc:17) to ritually disrupt the haunting. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled and the Scaling the Chain haunt triggers.",
      "isComplex": true,
      "routine": "(two actions) Spectral chains snake out to wrap around three different random creatures trapped in the haunt, who must each succeed at a check (reflex, dc:16) save or have the Restrained condition until it Escape DC 16. Each round that a creature starts its turn Grabbed, it takes 2d4 force damage. Spectral scars form on any creature knocked Unconscious by this haunt.",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "DZs5p7js1GEsHi69",
          "name": "Chains of Undeath",
          "kind": "reaction",
          "description": "Trigger Talhindir's Autumn is disabled\nEffect A spectral image of Duty's Soulshackle appears in a display nook, snaking out chains of dark energy toward each creature. Each living creature in the haunt must attempt a check (will, dc:16) save or be Frightened 1 The haunt then rolls initiative.",
          "traits": [
            "mental"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:scaling-the-chain",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "3gBUZhK7Dc2WuuRF",
      "slug": "scaling-the-chain",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:93179378d99358763e6a47b8bb95a74da187903ae201e3c971957386065226c7",
    "translatableHash": "sha256:bbab5cc4883aa1939a4aa08bd0a91efcfbf9ab7aad6d04c71f9f348fafec378e",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Scaling the Chain",
      "level": 0,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "The PCs appear on a gigantic wall of hooked chains dangling in a gray swirling mist. The chains radiate life-chilling energy Cries of innocence and condemnation echo through the mist in Elven. A plane of light 10 feet above eddies and swirls as it dully reflects the PCs below, but the reflections warp and alter the PCs to have sallow complexions like the undead.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 14,
        "details": "(trained)"
      },
      "disable": "A PC that has ascended to the plane of light (check (athletics, dc:13) check to Climb; on a critical failure, the PC falls 10 feet before being seized by a chain) can attempt a check (thievery, dc:18) check to disrupt the plane or a check (arcana, dc:18), check (occultism, dc:18) or check (religion, dc:18) check to ritually disrupt the haunting. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled and the PCs all return to area B3.",
      "isComplex": true,
      "routine": "(three actions) The chains rattle and sigh ominously around two different random creatures trapped in the haunt, dealing 1d6+2 void damage (check (will, dc:16, basic) save).",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "OnXHTmF4xdwx2axb",
          "name": "The Pain of Devotion",
          "kind": "reaction",
          "description": "Trigger Hunted by Chains is disabled\nEffect The chains rattle ominously, dealing 1d6+2 void damage to all creatures in the haunt (check (will, dc:16, basic) save). The haunt then rolls initiative.",
          "traits": [
            "unholy"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:withered-leaf-of-talhindir",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "ckZ7eHNCFNP6ddiO",
      "slug": "withered-leaf-of-talhindir",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cd85d714556d0588d7986a7f3149c9afe69ede0e75cdd074f720bd001d0f52d0",
    "translatableHash": "sha256:83978099c4c5ca000a88fa0f994d992de6114a3f74b16bad1248058e11806bfc",
    "data": {
      "schemaVersion": 1,
      "name": "Withered Leaf of Talhindir",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 15,
      "hitPoints": 9,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": -5,
        "dex": 2,
        "con": -2,
        "int": -2,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 5,
        "stealth": 8
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
          "all-damage 2 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "M0O8rEQtmGSkUrVI",
          "name": "Withered Touch",
          "bonus": 9,
          "damage": "1d4+1 void",
          "traits": [
            "finesse",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wAnVScy4XBMbtkLm",
          "name": "Light Vulnerability",
          "kind": "passive",
          "description": "Attacks against the Leaf of Talhindir are treated as magical if made by a creature who is in magical light or with an object that is in magical light (such as from the Light spell).",
          "traits": []
        },
        {
          "id": "qtjjmBc0D5XleSqw",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "6aRy2QDkaxrKWSn2",
          "name": "Slink in Shadows",
          "kind": "passive",
          "description": "The Leaf of Talhindir can Hide or end its Sneak in a creature's or object's shadow.",
          "traits": []
        },
        {
          "id": "WsuruTWS3hKjcRAs",
          "name": "Weight of Darkness",
          "kind": "action",
          "description": "Requirements The Leaf of Talhindir made a successful Strike against a living creature with its withered touch on its previous action\nEffect The Leaf of Talhindir chains the soul of the creature. They must attempt a check (will, dc:15, options:inflicts:enfeebled) save. On a failure, the creature is Enfeebled 1. This is cumulative with other enfeebled conditions from other Leaves of Talhindir or shadows, to a maximum of Enfeebled 4. The enfeebled value from Weight of Darkness decreases by 1 every minute.",
          "traits": [
            "divine"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:talhindirs-autumn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "L9IH9MTc1lxty0DC",
      "slug": "talhindirs-autumn",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:71e409808f3315ae7f31595da9602bb89b745d6765d0de280714451662c35dd9",
    "translatableHash": "sha256:9f1dfdd498be68a8178e039c7e6e05fb1a9cd336da10b1db5eb29fa888b57e47",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Talhindir's Autumn",
      "level": 0,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "All lights in the room snap on, just as Lyari remembers the day of her death. A susurrus of accusations and a guilty verdict fill the air. Ghostly elven warriors disappear and reappear in a disorienting and implacable advance.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 12,
        "details": "(trained); check (occultism, dc:13) or check (religion, dc:13) to notice odd whispers."
      },
      "disable": "check (athletics, dc:18) to stand against the force of the verdict, or check (arcana, dc:18), check (occultism, dc:18), or check (religion, dc:18) to ritually disrupt the haunting. Each success reduces the haunt's actions by one When the haunt has no more actions, it is disabled and the Hunted by Chains haunt triggers.",
      "isComplex": true,
      "routine": "(two actions) The haunt makes vengeful judgment Strikes against three different random creatures trapped in this haunt. A spectral pool of blood forms beneath any creature knocked Unconscious by this haunt.",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "IXxD7yCqmDTGKr4z",
          "name": "Accusations",
          "kind": "reaction",
          "description": "Trigger The PCs all enter the room\nEffect Accusations of crimes against the crown are whispered throughout the room in Elven. Each living creature in the room must attempt a check (will, dc:16) save or be Frightened 1. The haunt then rolls initiative.",
          "traits": [
            "auditory",
            "mental"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:partially-decomposed-rat-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "msI6SowkplLrJ6O1",
      "slug": "partially-decomposed-rat-swarm",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5bd3e498c9098596c2961633a0460b07708d55f510a722bd133c045f530cbe1e",
    "translatableHash": "sha256:29944d3a6166b257a6dd97ff773d720b1ff52ec9d486c52fd8d161a485b211dd",
    "data": {
      "schemaVersion": 1,
      "name": "Partially Decomposed Rat Swarm",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mindless",
        "swarm",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 14,
      "hitPoints": 14,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": -2,
        "dex": 3,
        "con": 1,
        "int": -5,
        "wis": 1,
        "cha": -3
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 4,
        "stealth": 6
      },
      "languages": [],
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
          "physical 6 except bludgeoning"
        ],
        "weaknesses": [
          "area-damage 3",
          "vitality 5",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "wnyeoxJq6nJPx1Re",
          "name": "Slow",
          "kind": "passive",
          "description": "A partially decomposed rat swarm is permanently Slowed 1 and can't use reactions.",
          "traits": []
        },
        {
          "id": "qdYjcExtbkx2HCQg",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Xq6hkgKiPBNei8df",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d6 piercing damage and must attempt a check (reflex, dc:17, basic) save. A creature that fails its save is exposed to zombie plague.",
          "traits": []
        },
        {
          "id": "BsKuf0AAqQmzH3he",
          "name": "Zombie Plague",
          "kind": "passive",
          "description": "The sickened and Unconscious conditions from zombie plague can't end or be reduced until the disease is cured.\nSaving Throw check (fortitude, dc:14)\nStage 1 carrier with no ill effect (1d4 hours),\nStage 2 Sickened 1 (1 day),\nStage 3 sickened 1 and Slowed 1 (1 day),\nStage 4 unconscious (1 day),\nStage 5 dead",
          "traits": [
            "disease",
            "divine",
            "void"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:dutys-soulshackle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "Pi7qE0UFNiVBJlwR",
      "slug": "dutys-soulshackle",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:6793ad72f0a724084576752a15618c2e202923c4dadcf06cc46bbee7ac3b4075",
    "translatableHash": "sha256:0f593d478c248f66fb34d61adfb6c079b70b75228a82777eb6b5e30ef961d0e7",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Duty's Soulshackle",
      "level": 1,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "haunt",
        "void"
      ],
      "description": "A length of humanoid spine is held into a staff by the hooked chain embedded in and entwined around it. Additional spectral chains of pure shadowstuff hold it aloft and sinuously surround it.",
      "armorClass": 13,
      "hitPoints": 30,
      "hardness": 6,
      "stealth": {
        "modifier": 17,
        "details": "(expert); noticing the staff has a DC of 0."
      },
      "disable": "check (arcana, dc:20), check (occultism, dc:20), or check (religion, dc:20) (trained) to disrupt the spectral energies channeled by the intelligent item. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled.",
      "isComplex": true,
      "routine": "(three actions) On its initiative, Duty's Soulshackle first uses Call to Serve if it's able to and spends any remaining actions making velstrac chains Strikes against its enemies.",
      "reset": "",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "nkoTyUCfCvVnSYUq",
          "name": "Chained by Duty",
          "kind": "reaction",
          "description": "Trigger Lyari proposes how to free herself from Duty's Soulshackle.\nEffect Duty's Soulshackle quivers in rage before unleashing more spectral chains. The haunt then rolls initiative.",
          "traits": []
        },
        {
          "id": "PMq6dV0yzrSd6xx3",
          "name": "Call to Serve",
          "kind": "action",
          "description": "Duty's Soulshackle creates a Withered Leaf of Talhindir within 10 feet of itself. It then cannot use this action for 1d6.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:talhindirs-grief",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "rYvk68DT7JbSHf01",
      "slug": "talhindirs-grief",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:9ca37d34999ce4381d08a66523a7700f86f6a7d1add277d50e20637d18c3af1a",
    "translatableHash": "sha256:7afe6fe94178d613289ffb6e010413dad16109996ba6452cc4a99f735e23b761",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Talhindir's Grief",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "Gentle crying rises to become overwhelming wails. The fungal carvings begin to weep blood that pools around the pillars",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 4,
        "details": "(expert)"
      },
      "disable": "check (performance, dc:17) (trained) to overpower the frightening cries with a greater sound or check (occultism, dc:15) or check (religion, dc:15) (trained) to ritually disrupt the haunting.",
      "isComplex": false,
      "routine": "",
      "reset": "If the haunt is not dispersed, it resets after 1 day.",
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
          "id": "Zc4aoZHHPsmz8zUP",
          "name": "The Falling Tears",
          "kind": "reaction",
          "description": "Trigger A creature moves within 10 feet of the carving of Viore Ciobanu\nEffect The fungus statues weep blood, and their cries deal 2d6+5 mental damage to living creatures within the room (check (will, dc:17, basic, options:inflicts:frightened) save). On a failed save, creatures are also Frightened 1 (or Frightened 2 on a critical failure)",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental",
            "occult"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:lyari-zinfeld",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "SnoWbBMVQdoAKJA9",
      "slug": "lyari-zinfeld",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1020bc150758fb29af68204e6a72224c6a9e92c55c4429ee782e9fa7ede56a03",
    "translatableHash": "sha256:3526ce722fa57a6af19a98d63b26aa8edb5c971eff214fa3f3681989b2f47c82",
    "data": {
      "schemaVersion": 1,
      "name": "Lyari Zinfeld",
      "level": 1,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "ghoul",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 14,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "nature": 10,
        "occultism": 11,
        "religion": 10
      },
      "languages": [
        "common",
        "chthonian",
        "draconic",
        "elven",
        "fey",
        "necril",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OyBM0lFUQ8cJ66g8",
          "name": "Duty's Soulshackle",
          "bonus": 9,
          "damage": "1d6 bludgeoning; 1 void",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "aVh5EzRlTBz0XCWW",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d8+1 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "ObvfT7H6CJFgUwak",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d6+1 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "ijL1KOz9fwNu0dRj",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "IVyafoUtJ07Mw5lo",
          "name": "Consume Flesh",
          "kind": "action",
          "description": "Requirements Lyari is adjacent to the corpse of a creature that died within the last hour\nEffect Lyari devours a chunk of the corpse and regains 1d6 healing Hit Points. She can regain Hit Points from any given corpse only once.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "dKVpzI2Gex2xr8no",
          "name": "Nihilistic Truthsayer",
          "kind": "action",
          "description": "Lyari's solitary time in the depths and unique perspective on existence makes her shockingly accepting of terrible universal truths that others don't want to hear. She calmly lays into an enemy within 30 feet, reminding them of existential frailty, presumed insecurities, and inevitable failures in a logical and level manner. The target must attempt a check (will, dc:16) save. On a failure, they are Frightened 2 (Frightened 3 and Fleeing for 1 round on a critical failure). Regardless of the result of its save, the target is temporarily immune for 1 hour.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "1FwfoQZutgMZuZ7A",
          "name": "Swift Leap",
          "kind": "action",
          "description": "Lyari jumps up to half her Speed. This movement doesn't trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "8TPmCaPZA4UVvbUU",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:hunted-by-dutys-bonds",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "VbQMn1mSY5fUY6YC",
      "slug": "hunted-by-dutys-bonds",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:7d5a3a62db8a92314c3f7b936189cb3aa03ee7e95204b6191aa9a3f2955313f8",
    "translatableHash": "sha256:191277c600532b4a6fb291dd1eeb5853907785678b4e154ba9cedb5e04dbca1b",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Hunted by Duty's Bonds",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "Shadowy chains reach out to ensnare creatures trapped in the mindscape.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 13,
        "details": "(trained)"
      },
      "disable": "check (acrobatics, dc:18) to avoid the chains, or check (arcana, dc:18), check (occultism, dc:18), or check (religion, dc:18) to ritually disrupt the haunting. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled and the Scaling the Chain haunt triggers.",
      "isComplex": true,
      "routine": "(two actions) Spectral chains snake out to wrap around three different random creatures trapped in the haunt, who must each succeed at a check (reflex, dc:17) save or have the Restrained condition until it Escape DC 17. Each round that a creature starts its turn Grabbed, it takes 2d4+1 force damage. Spectral scars form on any creature knocked Unconscious by this haunt.",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "DZs5p7js1GEsHi69",
          "name": "Chains of Undeath",
          "kind": "reaction",
          "description": "Trigger Talhindir's Autumn is disabled\nEffect A spectral image of Duty's Soulshackle appears in a display nook, snaking out chains of dark energy toward each creature. Each living creature in the haunt must attempt a check (will, dc:16) save or be Frightened 1 The haunt then rolls initiative.",
          "traits": [
            "mental"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:ascending-the-chain",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "dgVD3FkQRbUbJNN2",
      "slug": "ascending-the-chain",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:aa7d72d09fee1a951dc3ceded7098a47f3675ff3db78a4c50d141da0c3e34350",
    "translatableHash": "sha256:7486793fef35db083d541e7143e47ba9a4563126a1ebcf84eb7c500099c7decf",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Ascending the Chain",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "The PCs appear on a gigantic wall of hooked chains dangling in a gray swirling mist. The chains radiate life-chilling energy Cries of innocence and condemnation echo through the mist in Elven. A plane of light 10 feet above eddies and swirls as it dully reflects the PCs below, but the reflections warp and alter the PCs to have sallow complexions like the undead.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 16,
        "details": "(trained)"
      },
      "disable": "A PC that has ascended to the plane of light (check (athletics, dc:15) check to Climb; on a critical failure, the PC falls 10 feet before being seized by a chain) can attempt a check (thievery, dc:20) check to disrupt the plane or a check (arcana, dc:20), check (occultism, dc:20) or check (religion, dc:20) check to ritually disrupt the haunting. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled and the PCs all return to area B3.",
      "isComplex": true,
      "routine": "(three actions) The chains rattle and sigh ominously around two different random creatures trapped in the haunt, dealing 2d6+2 void damage (check (will, dc:18, basic) save).",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "OnXHTmF4xdwx2axb",
          "name": "The Pain of Devotion",
          "kind": "reaction",
          "description": "Trigger Hunted by Chains is disabled\nEffect The chains rattle ominously, dealing 2d6+2 void damage to all creatures in the haunt (check (will, dc:18, basic) save). The haunt then rolls initiative.",
          "traits": [
            "unholy"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:shriveled-leaf-of-talhindir",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "gCD8rOahd9F9ZSJO",
      "slug": "shriveled-leaf-of-talhindir",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c4f5fde815f169f77cbdd3a4cd0ea565b6a05269906446de02bece5655777b47",
    "translatableHash": "sha256:13f584764c8760287d699abb32410c493cc162cd1fec09516b5f116b2514aee7",
    "data": {
      "schemaVersion": 1,
      "name": "Shriveled Leaf of Talhindir",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 17,
      "hitPoints": 19,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": -4,
        "dex": 3,
        "con": -1,
        "int": -1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "stealth": 10
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
          "all-damage 3 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "M0O8rEQtmGSkUrVI",
          "name": "Withered Touch",
          "bonus": 12,
          "damage": "1d6+3 void",
          "traits": [
            "finesse",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wAnVScy4XBMbtkLm",
          "name": "Light Vulnerability",
          "kind": "passive",
          "description": "Attacks against the Leaf of Talhindir are treated as magical if made by a creature who is in magical light or with an object that is in magical light (such as from the Light spell).",
          "traits": []
        },
        {
          "id": "qtjjmBc0D5XleSqw",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "6aRy2QDkaxrKWSn2",
          "name": "Slink in Shadows",
          "kind": "passive",
          "description": "The Leaf of Talhindir can Hide or end its Sneak in a creature's or object's shadow.",
          "traits": []
        },
        {
          "id": "WsuruTWS3hKjcRAs",
          "name": "Weight of Darkness",
          "kind": "action",
          "description": "Requirements The Leaf of Talhindir made a successful Strike against a living creature with its withered touch on its previous action\nEffect The Leaf of Talhindir chains the soul of the creature. They must attempt a check (will, dc:17, options:inflicts:enfeebled) save. On a failure, the creature is Enfeebled 1. This is cumulative with other enfeebled conditions from other Leaves of Talhindir or shadows, to a maximum of Enfeebled 4. The enfeebled value from Weight of Darkness decreases by 1 every minute.",
          "traits": [
            "divine"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:talhindirs-fall",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "VQbocHpHJzxg91tq",
      "slug": "talhindirs-fall",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:0af92235d4936704d96153a2fdd19863df3782db610f60d81fca19713f1f91d3",
    "translatableHash": "sha256:c5a6c68703f8bd450941bfaf0f3d0411ddfc073214330d46181a6cc4a797b9dc",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Talhindir's Fall",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "All lights in the room snap on, just as Lyari remembers the day of her death. A susurrus of accusations and a guilty verdict fill the air. Ghostly elven warriors disappear and reappear in a disorienting and implacable advance.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 14,
        "details": "(trained); check (occultism, dc:15) or check (religion, dc:15) to notice odd whispers."
      },
      "disable": "check (athletics, dc:20) to stand against the force of the verdict, or check (arcana, dc:20), check (occultism, dc:20), or check (religion, dc:20) to ritually disrupt the haunting. Each success reduces the haunt's actions by one When the haunt has no more actions, it is disabled and the Hunted by Chains haunt triggers.",
      "isComplex": true,
      "routine": "(two actions) The haunt makes vengeful judgment Strikes against three different random creatures trapped in this haunt. A spectral pool of blood forms beneath any creature knocked Unconscious by this haunt.",
      "reset": "The haunt resets the next time the Soulshackle traps creatures in the library.",
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
          "id": "IXxD7yCqmDTGKr4z",
          "name": "Accusations",
          "kind": "reaction",
          "description": "Trigger The PCs all enter the room\nEffect Accusations of crimes against the crown are whispered throughout the room in Elven. Each living creature in the room must attempt a check (will, dc:18) save or be Frightened 1. The haunt then rolls initiative.",
          "traits": [
            "auditory",
            "mental"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:dutys-soulshackle-3-4",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "3yXwNq9gRbZGjNTk",
      "slug": "dutys-soulshackle-3-4",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:e673560671f7c4ec2850cc374be75b90b7d0fd50ae78e9c92412819cb5b69f94",
    "translatableHash": "sha256:50800cac1f7c55d109c932f4ae65359d44d3d27ffb0570ffadebfe28327b5a73",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Duty's Soulshackle (3-4)",
      "level": 3,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "haunt",
        "void"
      ],
      "description": "A length of humanoid spine is held into a staff by the hooked chain embedded in and entwined around it. Additional spectral chains of pure shadowstuff hold it aloft and sinuously surround it.",
      "armorClass": 13,
      "hitPoints": 30,
      "hardness": 6,
      "stealth": {
        "modifier": 20,
        "details": "(expert); noticing the staff has a DC of 0."
      },
      "disable": "check (arcana, dc:23), check (occultism, dc:23), or check (religion, dc:23) (trained) to disrupt the spectral energies channeled by the intelligent item. Each success reduces the haunt's actions by one. When the haunt has no more actions, it is disabled.",
      "isComplex": true,
      "routine": "(three actions) On its initiative, Duty's Soulshackle first uses Call to Serve if it's able to and spends any remaining actions making velstrac chains Strikes against its enemies.",
      "reset": "",
      "saves": {
        "fortitude": 0,
        "reflex": 0,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "nkoTyUCfCvVnSYUq",
          "name": "Chained by Duty",
          "kind": "reaction",
          "description": "Trigger Lyari proposes how to free herself from Duty's Soulshackle.\nEffect Duty's Soulshackle quivers in rage before unleashing more spectral chains. The haunt then rolls initiative.",
          "traits": []
        },
        {
          "id": "PMq6dV0yzrSd6xx3",
          "name": "Call to Serve",
          "kind": "action",
          "description": "Duty's Soulshackle creates a Shriveled Leaf of Talhindir within 10 feet of itself. It then cannot use this action for 1d6.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:talhindirs-despair",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "4MTR8vYxWCtDnNgB",
      "slug": "talhindirs-despair",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:6920683b8aa565fa413696b5416a8f2e9467e32c88ad1a9bc9ff21caae734b42",
    "translatableHash": "sha256:6e0d7b28b83dca242bf6abc9e10a4d3a81577d1ea1a1082b68ca39ca3f1e0e27",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Talhindir's Despair",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "Gentle crying rises to become overwhelming wails. The fungal carvings begin to weep blood that pools around the pillars",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 7,
        "details": "(expert)"
      },
      "disable": "check (performance, dc:20) (trained) to overpower the frightening cries with a greater sound or check (occultism, dc:18) or check (religion, dc:18) (trained) to ritually disrupt the haunting.",
      "isComplex": false,
      "routine": "",
      "reset": "If the haunt is not dispersed, it resets after 1 day.",
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
          "id": "Zc4aoZHHPsmz8zUP",
          "name": "The Falling Tears",
          "kind": "reaction",
          "description": "Trigger A creature moves within 10 feet of the carving of Viore Ciobanu\nEffect Blood begins to rain from the ceiling. The cries from the statues deal 2d10+13 mental damage to living creatures within the room (check (will, dc:20, basic, options:inflicts:frightened) save). On a failed save, creatures are also Frightened 1 (or Frightened 2 and Fleeing for 1 minute on a critical failure).",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental",
            "occult"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:recently-slain-rat-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "oRrGoFgmkWRWtScs",
      "slug": "recently-slain-rat-swarm",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bce80bbfc79fbbbb0fb3a052136a38f464cc3a6867304f58917c19e36c262a63",
    "translatableHash": "sha256:1f1206dc0d9b58e1f2dfae405362dd736fc80825c94783efb59231791e030d0c",
    "data": {
      "schemaVersion": 1,
      "name": "Recently Slain Rat Swarm",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mindless",
        "swarm",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 17,
      "hitPoints": 31,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 3,
        "con": 1,
        "int": -5,
        "wis": 1,
        "cha": -3
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 7,
        "stealth": 9
      },
      "languages": [],
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
          "physical 6 except bludgeoning"
        ],
        "weaknesses": [
          "area-damage 3",
          "vitality 5",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "wnyeoxJq6nJPx1Re",
          "name": "Slow",
          "kind": "passive",
          "description": "A partially decomposed rat swarm is permanently Slowed 1 and can't use reactions.",
          "traits": []
        },
        {
          "id": "qdYjcExtbkx2HCQg",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Xq6hkgKiPBNei8df",
          "name": "Frenzied Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d6 piercing damage and must attempt a check (reflex, dc:20, basic) save. A creature that fails its save is exposed to zombie plague.",
          "traits": []
        },
        {
          "id": "BsKuf0AAqQmzH3he",
          "name": "Zombie Plague",
          "kind": "passive",
          "description": "The sickened and Unconscious conditions from zombie plague can't end or be reduced until the disease is cured.\nSaving Throw check (fortitude, dc:17)\nStage 1 carrier with no ill effect (1d4 hours),\nStage 2 Sickened 1 (1 day),\nStage 3 sickened 1 and Slowed 1 (1 day),\nStage 4 unconscious (1 day),\nStage 5 dead",
          "traits": [
            "disease",
            "divine",
            "void"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:lyari-zinfeld-3-4",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "vngxFO3AQdnBivra",
      "slug": "lyari-zinfeld-3-4",
      "publicationTitle": "Pathfinder Society Scenario #7-08: The Haunted Corridor",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:78ab7f9d4a33142efee05e16b4d44114e77e59c0c709f4ecaec007ec114fda2d",
    "translatableHash": "sha256:cfda13e8d4ec26b745be5a502f3e5355d0d71a7dbc6277a4ef7c7f0219354bbc",
    "data": {
      "schemaVersion": 1,
      "name": "Lyari Zinfeld (3-4)",
      "level": 3,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "ghoul",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 17,
      "hitPoints": 37,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 11
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "nature": 13,
        "occultism": 14,
        "religion": 13
      },
      "languages": [
        "common",
        "chthonian",
        "draconic",
        "elven",
        "fey",
        "necril",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OyBM0lFUQ8cJ66g8",
          "name": "Duty's Soulshackle",
          "bonus": 14,
          "damage": "1d6+5 bludgeoning; 1d6 void",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "aVh5EzRlTBz0XCWW",
          "name": "Jaws",
          "bonus": 12,
          "damage": "2d8+4 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "ObvfT7H6CJFgUwak",
          "name": "Claw",
          "bonus": 12,
          "damage": "2d6+2 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "ijL1KOz9fwNu0dRj",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "IVyafoUtJ07Mw5lo",
          "name": "Consume Flesh",
          "kind": "action",
          "description": "Requirements Lyari is adjacent to the corpse of a creature that died within the last hour\nEffect Lyari devours a chunk of the corpse and regains 1d6 healing Hit Points. She can regain Hit Points from any given corpse only once.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "dKVpzI2Gex2xr8no",
          "name": "Nihilistic Truthsayer",
          "kind": "action",
          "description": "Lyari's solitary time in the depths and unique perspective on existence makes her shockingly accepting of terrible universal truths that others don't want to hear. She calmly lays into an enemy within 30 feet, reminding them of existential frailty, presumed insecurities, and inevitable failures in a logical and level manner. The target must attempt a check (will, dc:19) save. On a failure, they are Frightened 2 (Frightened 3 and Fleeing for 1 round on a critical failure). Regardless of the result of its save, the target is temporarily immune for 1 hour.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "1FwfoQZutgMZuZ7A",
          "name": "Swift Leap",
          "kind": "action",
          "description": "Lyari jumps up to half her Speed. This movement doesn't trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "8TPmCaPZA4UVvbUU",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:undead-hellknight",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "j0iZU9FnWCtVP9nl",
      "slug": "undead-hellknight",
      "publicationTitle": "Pathfinder Society Scenario #7-09: The Chitterwood Walks, Part 1: Scrambling the Tribes",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9f8d45fe034724cd96e703901028d7df2faca2561f3270bcd40904c1d0a5ff3a",
    "translatableHash": "sha256:1a2364c07bc18ac51e84348325ab1b5fb30bc32a012d94953f24ed779b92ba9d",
    "data": {
      "schemaVersion": 1,
      "name": "Undead Hellknight",
      "level": 4,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 20,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 12,
        "deception": 8,
        "intimidation": 10,
        "religion": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "IRm6i1GMKxWub37L",
          "name": "Morningstar",
          "bonus": 13,
          "damage": "2d6+4 bludgeoning",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "hUM0weUCNAO3w0hE",
          "name": "Spear",
          "bonus": 12,
          "damage": "1d6+4 piercing",
          "traits": []
        },
        {
          "id": "Ey0n0sGrh6IbhXQ5",
          "name": "Spear",
          "bonus": 12,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "GYDWypkIdfOOmTOL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "auiyDQ3bjvUlAvnb",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "SS9faTVf8zDWuOC8",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "VAjIOFfXsEkMxTAZ",
          "name": "Damned Restoration",
          "kind": "action",
          "description": "Frequency once per hour\nEffect An undead target within reach regains 2d6 healing Hit Points and gains a +2 status bonus to damage rolls for 1 round.\nEffect: Damned Restoration",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:torn-trio",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "nBkr40GmiqL2EQOx",
      "slug": "torn-trio",
      "publicationTitle": "Pathfinder Society Scenario #7-10: Shattered Blades",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2f2a2e6d9eef030d1c7f79b9e54a7f1ae6f0f3db8c505ff17bf74ee48ea6e053",
    "translatableHash": "sha256:ec850518dbcabbaf52cf3c84e8155de0ac1960e98e8d4e18f7fa426d3128f298",
    "data": {
      "schemaVersion": 1,
      "name": "Torn Trio",
      "level": 13,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead"
      ],
      "description": "",
      "armorClass": 35,
      "hitPoints": 200,
      "speedFeet": 10,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 26,
        "will": 23
      },
      "abilities": {
        "str": 5,
        "dex": 8,
        "con": 2,
        "int": -2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 27
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "FAyA7DAYT3DbBGga",
          "name": "Limb",
          "bonus": 25,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "XlSPUiZ7swOb3uMB",
          "name": "Bound Limbs",
          "kind": "passive",
          "description": "A torn trio ordinarily has three severed limbs tethered to a central point by near-incorporeal ropes. A limb is essentially cut away from the central point and rendered nonfunctional each time the torn quartet loses 60 Hit Points (so at 120 Hit Points, the torn quartet has two functional limbs, at 60 Hit Points, it has one functional limb). Each functioning limb can Grapple separate creatures within reach, or multiple functioning limbs can Grapple the same creature; for each additional limb used to Grapple a creature, the Escape DC increases by 2.",
          "traits": []
        },
        {
          "id": "7zBy716qoQu0GqBE",
          "name": "Reactive Strike (See Split Reactions)",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "uJDdqEktyz3QrEXu",
          "name": "Replacement Parts",
          "kind": "passive",
          "description": "A torn trio can spend 1 minute tearing apart the corpse of a humanoid creature that was killed within the last hour to regain 60 Hit Points and restore one of its nonfunctioning limbs. A torn trio can't have more than three limbs.",
          "traits": []
        },
        {
          "id": "hAOi8fSz7gYtKE2Z",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "G0TqPWbj2hoTfeWJ",
          "name": "Flurry of Limbs",
          "kind": "action",
          "description": "The torn trio makes a number of limb Strikes up to its number of functioning limbs, each against a different target. These attacks count toward the torn trio's multiple attack penalty, but the multiple attack penalty doesn't increase until after the torn trio makes all its attacks.",
          "traits": []
        },
        {
          "id": "YjtZAfYKCsCb88yD",
          "name": "Split Reactions",
          "kind": "passive",
          "description": "A torn trio has a number of reactions per round equal to its number of still-functioning limbs, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the torn trio must use a different limb for each Reactive Strike it makes. Whenever one of the torn trio's limbs is rendered nonfunctional, the torn trio loses one of its reactions.",
          "traits": []
        },
        {
          "id": "hFgGN1jjJQY5dlJm",
          "name": "Tear Asunder",
          "kind": "action",
          "description": "Requirements The torn trio has a creature Grabbed or Restrained by at least two limbs\nEffect The creature takes 5d6+2 slashing damage for each limb currently grabbing or restraining it (maximum 15d6), with a check (fortitude, dc:30, basic) save. On a critical failure, the creature also loses a random body part, and one of the torn trio's limbs is now no longer grabbing or restraining it.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:the-scourge-of-woodsedge",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "WQAvsiKjcjbIEgf6",
      "slug": "the-scourge-of-woodsedge",
      "publicationTitle": "Pathfinder Society Scenario #7-10: Shattered Blades",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d02c3041fd878ed4eaffbba51144f8efff69d035eb0131cb489842a68e675f68",
    "translatableHash": "sha256:679b2563b573f86589e6e0338843970c78627bbb41ee02877c60099ba6e188e9",
    "data": {
      "schemaVersion": 1,
      "name": "The Scourge of Woodsedge",
      "level": 15,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "undead"
      ],
      "description": "",
      "armorClass": 34,
      "hitPoints": 345,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "lifesense-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 26,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 8,
        "int": -2,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "athletics": 30,
        "deception": 27,
        "intimidation": 27,
        "stealth": 25,
        "survival": 21
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "dazzled",
          "death-effects",
          "disease",
          "doomed",
          "emotion",
          "fatigued",
          "fear-effects",
          "healing",
          "nonlethal-attacks",
          "poison",
          "sickened",
          "unconscious"
        ],
        "resistances": [
          "physical 10"
        ],
        "weaknesses": [
          "mental 10",
          "vitality 15"
        ]
      },
      "attacks": [
        {
          "id": "of5l6dDBzPYlNwTq",
          "name": "Blade",
          "bonus": 28,
          "damage": "2d8 void; 4d10+14 slashing",
          "traits": []
        },
        {
          "id": "DY2xnW20SodXTF1I",
          "name": "Throwing Blade",
          "bonus": 25,
          "damage": "3d10+14 slashing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "VxDkoOnhJQrp2lBr",
          "name": "Lifesense",
          "kind": "passive",
          "description": "The Scourge senses the vital essence of living creatures within range.",
          "traits": [
            "occult"
          ]
        },
        {
          "id": "dZcNG2pzhZMzFOhd",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "check (will, dc:36, options:area-effect,inflicts:frightened)\nNote: A radius for this aura was not provided by Paizo",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "e7fLQ2VN2Wm2QleD",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "ISrOBF4Pu0FhHEw3",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "utkwrTyuxi8OLPCV",
          "name": "Bladed Levitation",
          "kind": "passive",
          "description": "The Scourge has a fly speed of 30 feet, but must end its turn within no more than 5 feet off the ground, otherwise it falls and takes damage as normal",
          "traits": []
        },
        {
          "id": "00iNFuUnCQuVy22z",
          "name": "Final Execution",
          "kind": "action",
          "description": "The scourge targets a Paralyzed creature with a blade melee Strike. A successful hit is automatically a critical hit and the target creature must succeed at a check (fortitude, dc:36) or become Doomed 1. If the target is already doomed, they instead increased their doomed value by 1.",
          "traits": []
        },
        {
          "id": "UFdJTh4UUcMeXA26",
          "name": "Life Sap",
          "kind": "passive",
          "description": "A creature damaged by the Scourge's blade Strikes must succeed at a check (fortitude, dc:36) save or become Drained 1; if the target is already drained, they instead increased their drained value by 1, to a maximum of Drained 3. On a critical failure, the target is also Paralyzed until the end of the Scourge's next turn.",
          "traits": []
        },
        {
          "id": "B3tpwN7dZEoStsev",
          "name": "To Shreds",
          "kind": "action",
          "description": "The Scourge explodes into a whirling tornado of metal and blades, at the cost of briefly leaving its warshard core vulnerable. All creatures within a 20-foot type:emanation must succeed at a check (reflex, dc:33) save or take 10d10 slashing damage damage. The Scourge can't use To Shreds for 1d4.\nIf the Scourge is targeted by a Reactive Strike as a result of using this action, it takes a –2 circumstance penalty to its AC; if the Reactive Strike disrupts this action, this penalty remains until the start of the Scourge's next turn.\nEffect: To Shreds (AC Penalty)",
          "traits": [
            "manipulate",
            "void"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:gloom-bulwark",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "ILno59HeyBptm3ez",
      "slug": "gloom-bulwark",
      "publicationTitle": "Pathfinder Society Scenario #7-11: The Darkness Within",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d4356343ecf45b91da7614a15babc36ec3a048f14e0648b244ecd4bf8fd887f",
    "translatableHash": "sha256:b923f281a8fbe9c5575faf93058fa466a53f4f0623f41b9c5eeef6ef72091dfc",
    "data": {
      "schemaVersion": 1,
      "name": "Gloom Bulwark",
      "level": 6,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "plant",
        "shadow",
        "wood"
      ],
      "description": "",
      "armorClass": 21,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 6,
        "int": -5,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 15,
        "stealth": 11
      },
      "languages": [
        "arboreal"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 5",
          "piercing 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ea4JQyE1F2ttKQQS",
          "name": "Branch",
          "bonus": 16,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "BgfMzqhdpIC9xBQd",
          "name": "Shadow Fruit",
          "bonus": 16,
          "damage": "2d6+8 poison",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Yvxn95ARr9Baz2CC",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "oRFzQoDC5t4X9M4j",
          "name": "Thicken",
          "kind": "reaction",
          "description": "Trigger The bulwark is targeted with a melee or ranged attack by an attacker it can see\nEffect The bulwark gains resistance 10 against the triggering attack, but takes a –10-foot status penalty to all its Speeds until the end of its next turn.",
          "traits": []
        },
        {
          "id": "xuB4k73Z8rKaFG6w",
          "name": "Constrict",
          "kind": "action",
          "description": "2d8+3 bludgeoning damage, check (fortitude, dc:23, basic)",
          "traits": []
        },
        {
          "id": "iYf3uLDlQAFqWnpS",
          "name": "Stench",
          "kind": "passive",
          "description": "The creature must attempt a check (fortitude, dc:24, options:area-effect,inflicts:sickened,inflicts:enfeebled) save. On a failure, the creature is Sickened 1, and on a critical failure, the creature is also Enfeebled 1 for as long as it is sickened. A creature that succeeds at its save is temporarily immune to this ability for 1 minute.",
          "traits": [
            "olfactory"
          ]
        },
        {
          "id": "O0NSt1FAuVA1ufFe",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:heart-of-gloom",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "SXxWMcVgAsN0gK2u",
      "slug": "heart-of-gloom",
      "publicationTitle": "Pathfinder Society Scenario #7-11: The Darkness Within",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:56a30a4b8749dfd39a9449acab8f41aa4650b8cfc7ce1f3c35e88014573f577b",
    "translatableHash": "sha256:2fe367c1556db87178cbf028972a76ef71d709cc46bade5b964bea8c19b2217d",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Heart of Gloom",
      "level": 6,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "magical",
        "shadow",
        "trap",
        "unholy"
      ],
      "description": "Within this mockery of a tree is a large, beating growth pushing grotesque branches through jagged planar fssures.",
      "armorClass": 24,
      "hitPoints": 56,
      "hardness": 14,
      "stealth": {
        "modifier": 16,
        "details": "(expert) to detect the fraying planes around it; noticing the Heart has a DC of 0"
      },
      "disable": "check (arcana, dc:25) or check (occultism, dc:25) to close of a planar breach, check (athletics, dc:21) to snap one of the branches, or 4th-rank Planar Tether to seal of a breach. For each branch snapped or breach sealed, remove one action from the Heart's routine. Once the Heart reaches 0 actions in its routine, it is disabled.",
      "isComplex": true,
      "routine": "(3 actions) The Heart spends all of its actions making thorny vine Strikes against different creatures. The Heart doesn't take a multiple attack penalty.",
      "reset": "The trap deactivates and resets after 1 minute.",
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "ZWOZTzoMhLXgEuG5",
          "name": "Crushing Horror",
          "kind": "reaction",
          "description": "Trigger The Heart breaks its planar bonds\nEffect Each creature in the area must attempt a check (will, dc:22) save. The Heart then rolls initiative.\nSuccess The creature shrugs of the infuence of the Heart.\nFailure The creature takes 3d8 mental damage and is Frightened 1.\nCritical Failure The creature takes 6d8 mental damage and is Frightened 2. The creature can't reduce its frightened value below 1 for 1 minute.",
          "traits": []
        },
        {
          "id": "l9RIfnleIIXm43C5",
          "name": "Anguish",
          "kind": "passive",
          "description": "The vine squeezes and overwhelms the creature with fear. The target takes 4d4 mental damage with a check (will, dc:24, basic) save. On a critical failure, the creature is also Frightened 1 and can't reduce its frightened value below 1 for 1 minute.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:adma-heavenstriker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "SELkdgFucYgJI3tF",
      "slug": "adma-heavenstriker",
      "publicationTitle": "Pathfinder Society Scenario #7-11: The Darkness Within",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ddb08bb51a0550980417ce80f92837925cda4e37a0a0c4942c104f834169a71b",
    "translatableHash": "sha256:d0b83593de74a9790a6f4ec9ee7c50f82f8fe835e515cdbd1fdc6b052a28a627",
    "data": {
      "schemaVersion": 1,
      "name": "Adma Heavenstriker",
      "level": 8,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "humanoid",
        "vishkanya"
      ],
      "description": "",
      "armorClass": 27,
      "hitPoints": 130,
      "speedFeet": 30,
      "perception": {
        "modifier": 19,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 19,
        "will": 13
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 18,
        "deception": 14,
        "diplomacy": 12,
        "intimidation": 12,
        "stealth": 19,
        "thievery": 18
      },
      "languages": [
        "common",
        "shadowtongue",
        "vishkanyan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 8"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "MZEe3f3fYuIGE6xi",
          "name": "Rapier",
          "bonus": 19,
          "damage": "2d6+7 piercing",
          "traits": [
            "deadly-2d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "XwnUYTin5i5Z5AiK",
          "name": "Sample 73",
          "bonus": 19,
          "damage": "1 acid; 1d6 acid; 3d6 poison",
          "traits": [
            "magical",
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "M23HjFDcHQKXjyZY",
          "name": "Close Quarters",
          "kind": "passive",
          "description": "Adma isn't Off-Guard to creatures of 8th-level or lower that are flanking her.",
          "traits": []
        },
        {
          "id": "EBFwA5Tfy3v5HLnd",
          "name": "Venom Spit",
          "kind": "reaction",
          "description": "Trigger Adma is targeted with a Strike by a creature within 30 feet\nEffect Adma spits venom into the attacker's eyes. The attacker takes 2d6 poison damage (check (reflex, dc:23, basic) save). On a failure, the creature is Off-Guard until the end of the target's next turn.",
          "traits": []
        },
        {
          "id": "R3NRezzL0Ni5uvga",
          "name": "Extend Potency",
          "kind": "action",
          "description": "Requirements Adma has envenomed her weapon\nEffect Adma spits on the blade, revitalizing the venom. The venom remains potent until the end of Adma's next turn.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "IK2kI8AIMPBklE1V",
          "name": "Quick Envenom",
          "kind": "action",
          "description": "Adma Interacts to draw her rapier, then applies a venom to it. The venom remains potent until the end of Adma's next turn, or until Adma hits a target or critically fails an attack roll.",
          "traits": []
        },
        {
          "id": "n5prVmMJc4Fo2BeJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "Adma deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "C8zybAKtn1J2YbDA",
          "name": "Surprise Attack",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to Adma.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:undead-hellknight-armiger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "jTxS0VhfRoXcPPMm",
      "slug": "undead-hellknight-armiger",
      "publicationTitle": "Pathfinder Society Scenario #7-12: The Chitterwood Walks, Part 2: The Battle of Logas",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bcca637b95380b0a439c769e9f3ce783c88902234933f7f954945cf1076108e5",
    "translatableHash": "sha256:3853dbed28b2c32fe5ac330287f9b74efc0e605bb2c7002f2cd2e7e5f4764a51",
    "data": {
      "schemaVersion": 1,
      "name": "Undead Hellknight Armiger",
      "level": 3,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 20,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 3,
        "int": -1,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 11,
        "intimidation": 9
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "jOKun7Q5XNMrOhGf",
          "name": "War Flail",
          "bonus": 12,
          "damage": "1d8+5 bludgeoning",
          "traits": [
            "disarm",
            "sweep",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "YqyljsL6wezdVC5V",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "fkPnDYPtyCnwMQ77",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "kTnZdBieP30fuWdk",
          "name": "Drain Vitality",
          "kind": "action",
          "description": "Requirements The undead Hellknight's previous action was a successful Grab.\nEffect The undead Hellknight deals 1d8 void damage to the target and gains temporary Hit Points equal to the damage dealt for 1 hour.",
          "traits": []
        },
        {
          "id": "gROjkMEOBGEbDc5h",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:hellknight-armiger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "fdr7uCxIjCTEBnqs",
      "slug": "hellknight-armiger",
      "publicationTitle": "Pathfinder Society Scenario #7-12: The Chitterwood Walks, Part 2: The Battle of Logas",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:00a294b0e5f9af925348cfc8c96614605dc6370ecd4fbfff2ae7099fbb2806b2",
    "translatableHash": "sha256:496a2b2a9f0455acf632e20496e440e10b3e92c92f636a51cc07bc39342206ef",
    "data": {
      "schemaVersion": 1,
      "name": "Hellknight Armiger",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "",
      "armorClass": 22,
      "hitPoints": 75,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 12,
        "intimidation": 10,
        "religion": 10,
        "society": 7
      },
      "languages": [
        "common",
        "dwarven"
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
          "id": "ttkiwONkYUn5piHI",
          "name": "War Flail",
          "bonus": 13,
          "damage": "1d10+6 bludgeoning",
          "traits": [
            "disarm",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "UZZJYmev69dOUgKu",
          "name": "Composite Longbow",
          "bonus": 10,
          "damage": "1d8+6 piercing",
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
          "id": "geD4pfraSGQRXXvE",
          "name": "+1 Status to All Saves vs. Fear",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "7T97DtLE0W60dzuK",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "ltVH2KG0tgPtTPFb",
          "name": "Toppling Strike",
          "kind": "passive",
          "description": "When the Hellknight armiger scores a critical hit, their target is knocked Prone.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:undead-hellknight-7-12",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "MqHvumFPh1rQkBgY",
      "slug": "undead-hellknight-7-12",
      "publicationTitle": "Pathfinder Society Scenario #7-12: The Chitterwood Walks, Part 2: The Battle of Logas",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8d68947b4b82d0ae7434e2ce06c2674539bde01ee556dd5a3090c31d8c33f7fa",
    "translatableHash": "sha256:11ed6c621a83c236bb1ebbe026074521f436449a0af0afb15ebdb7bc74e70bb5",
    "data": {
      "schemaVersion": 1,
      "name": "Undead Hellknight (7-12)",
      "level": 5,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 11,
        "intimidation": 13
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "jOKun7Q5XNMrOhGf",
          "name": "War Flail",
          "bonus": 14,
          "damage": "2d8+6 bludgeoning",
          "traits": [
            "disarm",
            "sweep",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "YqyljsL6wezdVC5V",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "fkPnDYPtyCnwMQ77",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "kTnZdBieP30fuWdk",
          "name": "Drain Vitality",
          "kind": "action",
          "description": "Requirements The undead Hellknight's previous action was a successful Grab.\nEffect The undead Hellknight deals 3d8 void damage to the target and gains temporary Hit Points equal to the damage dealt for 1 hour.",
          "traits": []
        },
        {
          "id": "gROjkMEOBGEbDc5h",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:undead-hellknight-maralictor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "DQLXeha5TehcbX2n",
      "slug": "undead-hellknight-maralictor",
      "publicationTitle": "Pathfinder Society Scenario #7-12: The Chitterwood Walks, Part 2: The Battle of Logas",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9815c12a9e8c0c9ee6e26618a0cfa04a2447ca3bf11ba942dc84ba2efa5c0077",
    "translatableHash": "sha256:5dc7f8654c3423f966d640473c8be2cfcb8dbccaaf81e2f56e65008021b6703e",
    "data": {
      "schemaVersion": 1,
      "name": "Undead Hellknight Maralictor",
      "level": 7,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 25,
      "hitPoints": 110,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 5,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 13,
        "intimidation": 16
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "GqOUJodO1ya57rrD",
          "name": "Warhammer",
          "bonus": 16,
          "damage": "1d4 void; 2d8+7 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "8KuU9zxhEHRZA6fu",
          "name": "War Flail",
          "bonus": 16,
          "damage": "1d4 void; 2d8+7 bludgeoning",
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
          "id": "YqyljsL6wezdVC5V",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "fkPnDYPtyCnwMQ77",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NzoDPTZDECjJtchZ",
          "name": "Hammer and Flail",
          "kind": "action",
          "description": "The undead Hellknight maralictor makes a war flail and a warhammer Strike against the same target. If both Strikes hit, the damage counts as one source for overcoming resistances, Additionally, the target takes an additional 2d6 void damage and the maralictor gains temporary Hit Points equal to this void damage for 1 hour.",
          "traits": []
        },
        {
          "id": "MXzfYJLmYpmfXFqI",
          "name": "Void Energy Burst",
          "kind": "action",
          "description": "Requirements The undead Hellknight maralictor has temporary Hit Points\nEffect Undead energy erupts from the maralictor. All living creatures within a 20-foot type:emanation take void damage equal to twice the maralictor's temporary Hit Points; the maralictor then loses all temporary Hit Points.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:animated-fang",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "f1aSwn3oGVxxilP8",
      "slug": "animated-fang",
      "publicationTitle": "Pathfinder Society Scenario #7-13: Ancient Beyond Imagining",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:058d93d64351a574e6ebcf8f311c5592cf1f50314cdee77e5e126984c4949f7a",
    "translatableHash": "sha256:9c3284f8e48907132e3610bb6f3b37a8c723159c2065f64c01fa045905d387e4",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Animated Fang",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "haunt"
      ],
      "description": "The fang on the altar leaps up to stab at insufficiently zealous creatures.",
      "armorClass": 28,
      "hitPoints": 20,
      "hardness": 18,
      "stealth": {
        "modifier": 30,
        "details": "(expert) to notice the residual animating magic in the fang"
      },
      "disable": "The haunt is disabled once there aren't any creatures in the room that haven't sufficiently proclaimed their zeal (as described above).",
      "isComplex": true,
      "routine": "(two-actions) The fang leaps around the room, flying up to 20 feet and making a fang Strike against a random creature in the room.",
      "reset": "If the fang is not destroyed, it returns to the altar and the haunt resets immediately.",
      "saves": {
        "fortitude": 22,
        "reflex": 22,
        "will": 20
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "KoOQqC100eOq5B19",
          "name": "Leaping Fang",
          "kind": "reaction",
          "description": "Trigger A creature interacts with the items in this room without first proclaiming their zeal\nEffect The haunt makes a fang Strike against the triggering creature, then rolls initiative.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:howling-terror",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "clCZt9Kcl6Zn94ZG",
      "slug": "howling-terror",
      "publicationTitle": "Pathfinder Society Scenario 7-14: Brastlewark at War, Part 2: The Gnome Liberation",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:932eb8ea99f267450ba2f1b9d0155b6454a18f8429b86f52bce4f85e6fce45f3",
    "translatableHash": "sha256:ce05003e1bf88b0a6c10e198b0085d5c03b7a64d5086004a7db5ad384b555fb1",
    "data": {
      "schemaVersion": 1,
      "name": "Howling Terror",
      "level": 4,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "elemental",
        "fiend",
        "fire",
        "metal",
        "unholy"
      ],
      "description": "",
      "armorClass": 20,
      "hitPoints": 48,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 12,
        "intimidation": 10,
        "stealth": 10,
        "survival": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 5 except adamantine"
        ],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "pHAQBTTQtbtiFqCF",
          "name": "Jaws",
          "bonus": 14,
          "damage": "1d6 fire; 1d6+5 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "kn1DDSpp6IdCSGgU",
          "name": "Claw",
          "bonus": 14,
          "damage": "1d4+5 slashing; 1d4 fire",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "07hC5x7yFHBM3DMI",
          "name": "Burning Iron Shot",
          "bonus": 13,
          "damage": "1d6 fire; 1d6+5 bludgeoning",
          "traits": [
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "uPPYB9uXdqlgjRUq",
          "name": "Hellfire Strikes",
          "kind": "passive",
          "description": "A creature critically hit by a howling terror's Strike takes 1d6 persistent fire damage.",
          "traits": []
        },
        {
          "id": "8EEYAdbq3m8kWwPP",
          "name": "Metallically Infused",
          "kind": "passive",
          "description": "The howling terror is a horrible conglomeration of a metal elemental and an animal infused with diabolic power. Its Strikes and Molten Metal Rain count as whichever metal is most advantageous for the howling terror",
          "traits": []
        },
        {
          "id": "9D0BLr8DbnzoJ8QQ",
          "name": "Molten Metal Rain",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The howling terror launches a torrent of molten metal in a 10-foot type:burst within 100 feet. The burst deals 3d6 bludgeoning damage and 2d6 fire damage with a Basic check (reflex, dc:21) save. Creatures that enter the area or start their turn there take 1 fire damage until the metal cools after 5 rounds.",
          "traits": [
            "magical",
            "unholy"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:falling-decorations",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "7FoYfhOX8ISHYvNT",
      "slug": "falling-decorations",
      "publicationTitle": "Pathfinder Society Scenario #7-15: Within Antiquated Halls",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:8402dee650fa5fd1c4a378e60d4f480763b11d6d4f599e2ed203909876c1d13e",
    "translatableHash": "sha256:cb1244425466ac718a2e538ba561c921f7aa7174fe7f7108e63788c2ae5ce90b",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Falling Decorations",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mechanical",
        "trap"
      ],
      "description": "Large metal moons and spears break apart and fall when a creature moves beneath them.",
      "armorClass": 28,
      "hitPoints": 68,
      "hardness": 17,
      "stealth": {
        "modifier": 16,
        "details": "(expert) to notice the incipient collapse; noticing the decorations has a DC of 0."
      },
      "disable": "check (thievery, dc:28) (expert) or check (crafting, dc:28) (expert) to prevent the decorations from falling.",
      "isComplex": false,
      "routine": "",
      "reset": "",
      "saves": {
        "fortitude": 21,
        "reflex": 15,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "YuVWZWwH6MyLljab",
          "name": "The Sky is Falling",
          "kind": "reaction",
          "description": "Trigger A creature walks through the space under the hanging decorations\nEffect The little bit of disturbance is all the cracked decorations need to come dislodged. They fall, their sharp metal edges dealing 6d10+15 piercing damage (check (reflex, dc:28, basic) save) to those underneath them.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:warp-pillar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "zMKqpHwEYiMk3dX8",
      "slug": "warp-pillar",
      "publicationTitle": "Pathfinder Society Scenario #7-16: A Star's Journey",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:8541876eb869866103666b9d2f291d587b635249e62cc8f14b99ab9e82667786",
    "translatableHash": "sha256:6dabbb98901a5457859921e0c950b50790646318fda3f5ba460377b984e51e10",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Warp Pillar",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "A time-disrupting field shimmers around a 9-foot-tall pillar of obsidian and bronze that magically slides across the room.",
      "armorClass": 18,
      "hitPoints": 32,
      "hardness": 8,
      "stealth": {
        "modifier": 8,
        "details": "(trained); check (perception, dc:18) to realize the pillars can move, noticing the pillar has a DC of 0."
      },
      "disable": "check (arcana, dc:18), check (crafting, dc:18), check (occultism, dc:18), or check (thievery, dc:18); three successes deactivates a pillar, as does destroying it.",
      "isComplex": true,
      "routine": "(two actions) The pillar Steps or Strides to get as close to as many targets as possible, then makes a time drain Strike against each creature within its reach.",
      "reset": "If the pillar isn't destroyed, it resets 1 minute after making no time drain attacks.",
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "Lg2b43SOS7b24tQO",
          "name": "Time Shift",
          "kind": "reaction",
          "description": "Trigger A creature attacks the pillar or approaches within 5 feet of it, or the other warp pillar activates\nEffect The trap casts Slow (check (fortitude, dc:18, traits:magical, options:item:type:spell)) on a random creature within 30 feet, then rolls initiative.",
          "traits": []
        },
        {
          "id": "SfaQaAxozvqmVBfq",
          "name": "Speed 30 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:eye-of-choral",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "6KDLEO0y33QX4lTb",
      "slug": "eye-of-choral",
      "publicationTitle": "Pathfinder Society Scenario #7-19: The Lost Legacy",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:15243b1563fdbd02a362c84aba86161eb4aa1acaa2e240e2a6c0e698cb9a464f",
    "translatableHash": "sha256:a76d7ab288f3145bb0a8798e844db9a954dc83da01704d3360d74d486e261c7a",
    "data": {
      "schemaVersion": 1,
      "name": "Eye of Choral",
      "level": 7,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "construct",
        "dragon",
        "fire",
        "incorporeal",
        "primal",
        "shadow"
      ],
      "description": "",
      "armorClass": 24,
      "hitPoints": 115,
      "speedFeet": 40,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 4,
        "int": 4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 17,
        "deception": 17,
        "diplomacy": 15,
        "intimidation": 17,
        "nature": 14,
        "society": 15
      },
      "languages": [
        "common",
        "draconic",
        "hallit",
        "skald",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "precision"
        ],
        "resistances": [
          "all-damage 5 except cold, force, ghost-touch, spirit"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ko5ovolIUKEaFGpZ",
          "name": "Jaws",
          "bonus": 18,
          "damage": "1d6 fire; 2d10+5 piercing",
          "traits": [
            "fire",
            "illusion",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "MX3MbtBrJGrll85M",
          "name": "Horn",
          "bonus": 16,
          "damage": "2d10+7 piercing",
          "traits": [
            "illusion",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "uapzDuFEVwVdXhFa",
          "name": "Claw",
          "bonus": 18,
          "damage": "2d8+5 slashing",
          "traits": [
            "agile",
            "illusion",
            "magical"
          ]
        },
        {
          "id": "5PpCVFYAxNAO22Wm",
          "name": "Tail",
          "bonus": 16,
          "damage": "2d10+5 bludgeoning",
          "traits": [
            "illusion",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "m8iXNRJSXtOP5aOQ",
          "name": "Wing",
          "bonus": 16,
          "damage": "2d6+7 slashing",
          "traits": [
            "agile",
            "illusion",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "hfA70zaWuZGyWOuC",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:23, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "II51rmEX3NRS3rAe",
          "name": "Key Sense",
          "kind": "passive",
          "description": "The Eye of Choral was created alongside several magical keys. It can sense the presence of these keys anywhere in Rahasia Rinca, communicate telepathically with anyone bearing a key within the complex, and always knows whether a creature possesses such a key.",
          "traits": [
            "detection"
          ]
        },
        {
          "id": "LBxPiVEwr6YcuylX",
          "name": "Reactive Strike (Jaws Only)",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "wWFynturzRrVqvWi",
          "name": "Shadow Construct",
          "kind": "passive",
          "description": "The Eye of Choral is only semi-real. The first time each round a PC is hit by one of the Eye's Strikes, the creature makes a check (will, dc:23) save to realize the creature's attacks aren't wholly real. The result applies to the damage of that Strike and lasts until the start of the creature's next turn.\nCritical Success The creature gains resistance to damage from the Eye's Strikes equal to its level.\nSuccess The creature gains resistance to damage from the Eye's Strikes equal to half its level.\nFailure The creature is affected by the Eye's Strikes as normal.",
          "traits": [
            "illusion"
          ]
        },
        {
          "id": "QFNmogI6zwgHkHxc",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The Eye makes two claw Strikes and one wing Strike in any order",
          "traits": []
        },
        {
          "id": "lmT8KIC1FafklMOD",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The Eye recharges their Pyre Breath whenever they score a critical hit with a Strike.",
          "traits": []
        },
        {
          "id": "nmHUJbIOyJCbVWIh",
          "name": "Pyre Breath",
          "kind": "action",
          "description": "The Eye breathes a blast of flame that deals 7d6 fire damage in a 40-foot type:cone (check (reflex, dc:23, basic, options:area-effect) save). Creatures that critically fail their save catch fire, taking 1d6 persistent fire damage. The area then fills with black smoke for 1 minute. This has the effects of mist, except it fills the cone's area. The Eye can't use Pyre Breath again for 1d4.",
          "traits": [
            "fire",
            "primal"
          ]
        },
        {
          "id": "qmgLZswwX5TMFlx9",
          "name": "Stoke the Flames",
          "kind": "action",
          "description": "The Eye intensifies nearby fires. Every foe within 60 feet that is taking persistent fire damage takes 2d6 fire damage.",
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
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:fiendish-hospitality",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "dj5BdvEr3zt2XCJ8",
      "slug": "fiendish-hospitality",
      "publicationTitle": "Pathfinder Society Scenario #7-20: The Strings of Hell",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:ddbfa1492bce0888706f69897bb817b3844add701d7bce482718645ab61c6c87",
    "translatableHash": "sha256:2992c16c17feda66b263f8363b96c029b9ded5c6a7799baed6103f1f0d6ffd5c",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Fiendish Hospitality",
      "level": 1,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "magical",
        "trap"
      ],
      "description": "A haunting voice from the statue of a woman in servant's garb calls out to those in sight, welcoming them to stay. The statue then changes to the image of a gylou devil.",
      "armorClass": 16,
      "hitPoints": 24,
      "hardness": 5,
      "stealth": {
        "modifier": 7,
        "details": "(trained)"
      },
      "disable": "check (religion, dc:14) (trained) to disrupt the unholy energy projecting from the statue, check (athletics, dc:17) to knock the statue off balance Three total successes using either skill disables the hazard.",
      "isComplex": true,
      "routine": "(two actions) For its first action, the statue uses handmaiden's command. With its second action, it makes a stony tentacle Strike at the closest target within range; if there are no targets, the trap instead uses handmaiden's command again.",
      "reset": "The statue returns to its human visage once no creatures are in the courtyard and it resets after 1d4+1 rounds. Until it resets, a creature can destroy the statue with a check (athletics, dc:16) check, permanently disabling the hazard.",
      "saves": {
        "fortitude": 10,
        "reflex": 4,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "tKJccmRPwKztcY9i",
          "name": "Ordered Escort",
          "kind": "reaction",
          "description": "Trigger A non-devil triggers or disables the slamming door hazard\nEffect The statue takes on the visage of a handmaiden devil as a wave of unholy energy washes over the courtyard. Each creature in the courtyard must succeed at a check (will, dc:17, options:area-effect,inflicts:slowed) save or be Slowed 1 for as long as it remains in the courtyard. The trap then rolls initiative.",
          "traits": [
            "divine",
            "mental",
            "unholy"
          ]
        },
        {
          "id": "EeQXWpYeKCuoKeTA",
          "name": "Handmaiden's Command",
          "kind": "action",
          "description": "The statue emits a supernaturally compelling command. Each creature in the courtyard must make a check (will, dc:17, options:area-effect,forced-movement) save, with results below.\nSuccess The creature is unaffected.\nFailure The creature is pulled 5 feet toward the statue.\nCritical Failure The creature is pulled 5 feet toward the statue and must spend the first action on its next turn making a Step toward the statue.",
          "traits": [
            "auditory",
            "divine",
            "mental",
            "unholy"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pfs-season-7-bestiary:marcoss-marauders",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pfs-season-7-bestiary",
      "sourceId": "61Q3uMgF7S2ko6z2",
      "slug": "marcoss-marauders",
      "publicationTitle": "Pathfinder Society Scenario #7-22: The Handmaiden's Gaze",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2db796cd56691df881da68621eb3eb3fe1aef5a08d98dacdb4fac91651dcf3ea",
    "translatableHash": "sha256:834dd3268c9754d5c9d6a79ee73d1496bb677672b3d16cb5cadbcdc485ed51d0",
    "data": {
      "schemaVersion": 1,
      "name": "Marcos's Marauders",
      "level": 11,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "",
      "armorClass": 30,
      "hitPoints": 210,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": []
      },
      "saves": {
        "fortitude": 24,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "arcana": 18,
        "athletics": 23,
        "medicine": 21,
        "occultism": 18,
        "religion": 18
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [],
      "actions": [
        {
          "id": "DILzSeSLSsxjmUVL",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "0l6g2DlzoesKjKvr",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NpCGoXYEcwycOSHf",
          "name": "Prepared for Hell",
          "kind": "passive",
          "description": "The Marauders have come prepared to fight devils and the damage from Short Salvo and Slashing Blades is silver. The damage from Punitive Attack is also silver, if the troop possesses that ability.",
          "traits": []
        },
        {
          "id": "GnsMYRIpAJsHjad1",
          "name": "Short Salvo",
          "kind": "action",
          "description": "The Marauders draw and fire a barrage of arrows from their shortbows. The salvo is a 10-foot type:burst within 60 feet that deals 4d8 piercing damage (check (reflex, dc:27, basic, options:area-effect) save). When the Marauders are reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "ChnIswKDlley9ctU",
          "name": "Slashing Blades",
          "kind": "action",
          "description": "Frequency once per round\nEffect The Marauders attack each enemy in a 5-foot type:emanation with their swords, with a check (reflex, dc:27, basic, options:area-effect) save. The damage depends on the number of actions.\n1 2d6+3 slashing damage\n2 4d6+7 slashing damage\n3 5d6+10 slashing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:blog-bestiary:dust-bunny-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "blog-bestiary",
      "sourceId": "bupIhMxa1zvWI91a",
      "slug": "dust-bunny-swarm",
      "publicationTitle": "Paizo Blog: Foolish Housekeeping and Other Articles",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fce6cc66489ede80621265b6e37e6504927abb70683fa79286dc8b79b1c7a8d7",
    "translatableHash": "sha256:3eda4beaf6d448183fe1c28663974eb97b393c6df1eb2546643aa2f5930f430c",
    "data": {
      "schemaVersion": 1,
      "name": "Dust Bunny Swarm",
      "level": 1,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "construct",
        "swarm"
      ],
      "description": "Dust bunnies in particular are prone to swarming. This can occur when a large number are left alone for a long period of time and are then disturbed by adventurers or a returning wizard. Other times, a singular dust bunny familiar grows in such numbers (and they will rapidly reproduce!) that a wizard cannot hope to keep them all placated with food and attention. In this situation, they will unionize in rebellion against their master.\nIt is paramount that you do not allow a dust bunny to multiply, for once a swarm has formed, they are nigh impossible to get rid of. While relatively easy to disperse and unlikely to kill anyone, they will re-form within the week unless the area is immaculately cleaned.",
      "armorClass": 13,
      "hitPoints": 16,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 7,
        "int": -4,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "arcana": 3,
        "athletics": 3,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 6 except bludgeoning"
        ],
        "weaknesses": [
          "area-damage 4",
          "splash-damage 4"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "F4YsaMzZsgKzc6Xi",
          "name": "Cloud of Allergens",
          "kind": "reaction",
          "description": "Trigger The swarm rolls initiative\nEffect The dust bunnies stir, kicking up a cloud in a 15-foot type:burst centered on the swarm that lasts for 1 minute. Creatures who enter or start their turn in this cloud must attempt a check (fortitude, dc:16) save or take a –1 circumstance penalty to skill checks that have the concentration trait and all Perception checks as their sensory organs become impaired.\nEffect: Cloud of Allergens",
          "traits": []
        },
        {
          "id": "wwIOz9e1Fphh2cf5",
          "name": "Dust to Dust",
          "kind": "passive",
          "description": "When a dust bunny swarm is destroyed, it re-forms after 2d4 in the area in which it was destroyed unless the location has been significantly cleaned of all dust and debris.",
          "traits": []
        },
        {
          "id": "j2nCivZK4wIqZeYv",
          "name": "Pummeling Dust",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d6 bludgeoning damage with a check (reflex, dc:16, basic) save. A creature that fails its save cannot use reactions for 1 round as they sneeze uncontrollably.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:blog-bestiary:rt5rrmn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "blog-bestiary",
      "sourceId": "FdsQgecBdj4h5qca",
      "slug": "rt5rrmn",
      "publicationTitle": "Paizo Blog: Foolish Housekeeping and Other Articles",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c7116ff3c3eb0ccaf7b15c7a3bb966c3a678ee09af18cae593fc8b306c7b67c9",
    "translatableHash": "sha256:fca5d67a63e150b751cd25f621f3b6d6db1e79d86405d25ef3081f5e848d2947",
    "data": {
      "schemaVersion": 1,
      "name": "Rt5rrmn",
      "level": 8,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal",
        "fey"
      ],
      "description": "The rt5rrmn is a catlike creature that loves to purr at those they encounter, convincing others to pamper them instead of fight. It would rather be friends than enemies, but if spooked it will viciously attack whoever is in its sights. If they aren't able to make friends, the rt5rrmn will quickly grow defensive, and leap to attack.",
      "armorClass": 36,
      "hitPoints": 172,
      "speedFeet": 35,
      "perception": {
        "modifier": 20,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 35,
        "will": 22
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 1,
        "wis": 1,
        "cha": 6
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 20,
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
          "id": "TlIYVxeBYcRJdfrn",
          "name": "b9000",
          "bonus": 18,
          "damage": "3d8+12 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "YuLLGwfp6AR3yMfK",
          "name": "g7ujik",
          "bonus": 18,
          "damage": "3d6+12 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "4MVd3IEx1LY2YkgL",
          "name": "But I'm Adorable",
          "kind": "reaction",
          "description": "Trigger An enemy targets the rt5rrmn with a melee attack\nEffect The rt5rrmn erkijs, the vibrating sound convincing the enemy to stop hurting it. The target must attempt a check (will, dc:26) save.\nCritical Success The target is unaffected, ignoring the seduction of the erkij.\nSuccess The target is Fascinated by the rt5rrmn's erkij until the end of the rt5rrmn's next turn.\nFailure As success, and the target is Slowed 1 as it focuses on the rt5rrmn's erkij.\nCritical Failure As failure, but the target is Slowed 2.",
          "traits": []
        },
        {
          "id": "Z8SBdBZiXU8bmpS7",
          "name": "Extra Reverberation",
          "kind": "passive",
          "description": "If the rt5rrmn is targeted with an ability that restores Hit Points, it gains an additional use of But I'm Adorable that lasts until the end of its next turn.",
          "traits": []
        },
        {
          "id": "9H9hYf9LGWIukjEw",
          "name": "Rt5rrmn Yyumn",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:24)\nMaximum Duration 1 week\nStage 1 Sickened 1 (1 hour)\nStage 2 sickened 1 and the creature can't reduce its sickened value below 1 (1 day)\nStage 3 Sickened 2 and the creature can't reduce its sickened value below 1 (1 day)",
          "traits": [
            "disease"
          ]
        },
        {
          "id": "pmZw64m62ArdHicK",
          "name": "Yidsfh",
          "kind": "action",
          "description": "The rt5rrmn Strides and then makes two g7ujik Strikes at a single target. Both count toward its multiple attack penalty, but the penalty increases only after both attacks are made. The rt5rrmn must be able to move at least half its Speed to yidsfh.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:blog-bestiary:wordsmith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "blog-bestiary",
      "sourceId": "zvxYdvU6TAxoFMRu",
      "slug": "wordsmith",
      "publicationTitle": "Paizo Blog: It's Foolish To Go Alone",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c77d7af231d3ea1f090d0788bd88a12b3f970a760bfbbe5f9d2674a12bc34200",
    "translatableHash": "sha256:a2af6158b24eac72f85699e4b3cae4de647a0be1895474701043459e79627b65",
    "data": {
      "schemaVersion": 1,
      "name": "Wordsmith",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "With every strike of a wordsmith's hammer, a new onomatopoeia is formed. They swiftly grab the word as it flies off the anvil before nailing it to the pages of our favorite comics. POW! WHAM! SPLAT! The hammer crafts each and every sound. The humble wordsmith is often overlooked by their artisan peers, whose pictures are the primary focus of readers. However, many don't realize that while pictures can be sent to the printing press, sounds are not captured so easily on the page and must be hammered into place by a skilled wordsmith.\nWhile most wordsmiths are content to forge their words out of sight of the public, they are fierce defenders of their work and are quick to fight anyone who belittles it. They know the pen is mightier than the sword, but the hammer is mightiest of all, and they use it mercilessly to SMASH! through their foes.\nThough many wordsmiths are dwarves, they come from all kinds of backgrounds, each bringing their own unique sounds and noises from their culture. Tengu wordsmiths particularly favor onomatopoeias similar to bird calls like caw for crows or okalee for red-winged blackbirds. Meanwhile, leshy wordsmiths favor sounds inaudible to most non-plant creatures, such as the tr-tr-tr that reflects the sound of a plant growing.",
      "armorClass": 19,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 8,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 6,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 10,
        "crafting": 14,
        "occultism": 10
      },
      "languages": [
        "common",
        "dwarven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "sonic 7"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2bVVykPpFwdVQqAE",
          "name": "Hammer",
          "bonus": 14,
          "damage": "1d6 sonic; 2d6+4 bludgeoning",
          "traits": [
            "forceful",
            "occult",
            "sonic"
          ]
        },
        {
          "id": "ybJy9jc4WlHbHZeG",
          "name": "TWANG!",
          "bonus": 13,
          "damage": "2d4+4 sonic",
          "traits": [
            "occult",
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "Hy1zWWkAdsbBOtJz",
          "name": "Word Warp",
          "kind": "reaction",
          "description": "Trigger The wordsmith is the target of a linguistic effect\nEffect The wordsmith twists the words and attempts to counter their foe's utterances with their hammer (counteract 1d20+16, 3rd rank).",
          "traits": [
            "auditory",
            "occult"
          ]
        },
        {
          "id": "B74C5L1wE6GrSUcY",
          "name": "Forge Onomatopoeia",
          "kind": "passive",
          "description": "The wordsmith slams their hammer against a creature, creating a visual onomatopoeia like CRACK! or SMASH! that flies off at the site of impact. The target of the strike must attempt a check (will, dc:24) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature is stupefied 1 for 1 minute.\nCritical Failure The creature is Stupefied 2 and gains weakness 1 to sonic damage for 1 minute.",
          "traits": [
            "occult",
            "visual"
          ]
        },
        {
          "id": "cjxJCNra3kJme6vO",
          "name": "Mightier than the Sword",
          "kind": "passive",
          "description": "Any hammer gains the forceful trait, can't be disarmed, and becomes a +1 striking hammer while the Wordsmith wields it.",
          "traits": [
            "occult"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "KcqnH8fUeATGwlOA",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 24,
          "spells": [
            {
              "id": "SMrxEqJI5KT5MMtO",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "QHw9BRzNnCN6OWpX",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "nsmTe5l3SniMy5hM",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "2uSeXvIbklTvlMPK",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "IgoXslLVAtWKyOlt",
              "name": "Ventriloquism (At Will)",
              "rank": 2
            },
            {
              "id": "GxovVAVCobWcf89g",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  }
]
