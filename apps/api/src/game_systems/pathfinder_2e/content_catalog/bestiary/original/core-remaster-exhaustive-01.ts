import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_01_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:viper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "1uVwkGlqYzyWaDMy",
      "slug": "viper",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2e1554ac77e6aef6d334ae48ab3c9b470b07567e4206e1396dbec9de4b32f59f",
    "translatableHash": "sha256:2093f198265f1cbfc42093e033ef80db0d4ff99e927c2521de4d6ecfe0278623",
    "data": {
      "schemaVersion": 1,
      "name": "Viper",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal"
      ],
      "description": "Each member of this family of venomous snakes has long, hinged fangs that inject potent venom into their prey. Different vipers inject different types of venom, which might result in paralysis, extreme pain and swelling, blood clotting, or even the sudden stopping of the victim's heart.\nSnakes come in an array of forms, from jungle-dwelling constrictors that wrap around their prey to venomous vipers with deadly bites. Regardless, all snakes consume their prey whole by unhinging their jaws and using powerful muscles to move the food down their throats and into their stomachs.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": -3,
        "dex": 4,
        "con": 0,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 1,
        "stealth": 5,
        "survival": 3
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "iHa81hIBKMF5eXxi",
          "name": "Fangs",
          "bonus": 6,
          "damage": "1d8-3 piercing",
          "traits": [
            "agile",
            "finesse",
            "reach-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "YIHoSZN2nTp139Dg",
          "name": "Slink",
          "kind": "reaction",
          "description": "Trigger A creature ends its movement adjacent to the viper or within the viper's space.\nEffect The viper Strides, Climbs, or Swims up to 10 feet (or up to the relevant Speed, if that Speed is less than 10 feet). It must end its movement in a location that isn't within 5 feet of a foe. This movement doesn't trigger reactions."
        },
        {
          "id": "TnaXi3v3iBDjotwd",
          "name": "Viper Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 4 rounds\nStage 1 1d8[poison] (1 round)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kobold-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BIZfjoz8DZt75EDn",
      "slug": "kobold-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e8bb62a727f23a39ca5e7498f7a02039f610aaee2ca9e5fb09e9920b6b50ddd6",
    "translatableHash": "sha256:cdcd9b61d08d39c3817f6837aacf8a1bf57b8fe2e506976b1a010e656c849fd3",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Warrior",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "The typical kobold trains in tunnel fighting, learning to use simple weapons that are effective in narrow spaces. Kobolds are capable of landing sneaky strikes against unsuspecting foes, but are just as quick to scamper off to safety when they don't outnumber their enemies by at least two to one.\nKobolds are small reptilian humanoids. They lurk in dark spaces, usually tunnels and mines beneath the earth, in either warrens of their own design or complexes discovered and colonized after the original builders have moved on. Though kobolds are far more pragmatic than courageous, they use every inch of their cunning to even the playing field between themselves and other, stronger creatures. They attack from the darkness and at range, and kobold artificers and engineers master the art of simple but effective traps, which they use to protect their lairs. Kobolds are skilled at working together by necessity, and they often set up ambushes or hit-and-run assaults that allow them to do the most damage possible without being harmed in return.\nKobolds are diligent and hardworking creatures. While some kobolds live in communal collectives that maintain neutral relations with the creatures around them, they can be easily swayed into serving malevolent powers or megalomaniacal leaders. This is in part due to kobolds' innate pragmatism, as they would rather concede to servitude than risk being killed, but it is also in part due to a reverence for the power they generally lack. Notably, kobold eggs left in the proximity of magical creatures or places tend to absorb similar traits from the exposure. The resulting physical changes mark the appearance of each tribe, but a few lucky kobolds are also born with magical power that reflects their tribe's patron.",
      "armorClass": 16,
      "hitPoints": 7,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": -1,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "crafting": 2,
        "stealth": 5
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
          "id": "yDIuApGqKF4695Oq",
          "name": "Spear",
          "bonus": 3,
          "damage": "1d6+1 piercing",
          "traits": []
        },
        {
          "id": "DyABhSgZNJ3ICo85",
          "name": "Spear",
          "bonus": 5,
          "damage": "1d6+1 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "ZlxZ2pDpBDTkPZ6M",
          "name": "Sling",
          "bonus": 5,
          "damage": "1d4 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "dF7ibA1On3Nvjxqk",
          "name": "Scamper",
          "kind": "action",
          "description": "Requirements The kobold warrior is adjacent to at least one enemy\nEffect The kobold warrior Strides up to their Speed plus 5 feet and gains a +2 circumstance bonus to AC against reactions triggered by this movement. They must end this movement in a space that's not adjacent to any enemy."
        },
        {
          "id": "D0BJOT03V2FE7mKT",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The kobold warrior deals an extra 1d4 precision damage to off-guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:flash-beetle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "E2XL2egIA3QaSDBM",
      "slug": "flash-beetle",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:86fbd22ce74405204b1446fefd15e64b93f990840b7630421717e9775b2ee54f",
    "translatableHash": "sha256:a6bab75e3ac8eb7f8253bec79a4c941282b79951b3f6b83cca32107b04160320",
    "data": {
      "schemaVersion": 1,
      "name": "Flash Beetle",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "These 3-foot-long insects boast a pair of glowing organs on the back of the abdomen that give off bright light and that continue to glow for days, even after the creature's death. Flash beetles are commonly herded and harvested by miners and spelunkers, as their glow is considered safer than torches and less expensive than lamps. Denizens of the Darklands often domesticate and train these insects, using them as pets, livestock, or caging them to use as organic sources of light in areas frequented by visitors unaccustomed to the darkness.\nNot all beetles are harmless creatures that can be easily crushed underfoot. Oversized and ravenous giant beetles can be found throughout the temperate and tropical regions of the world. They are often benign creatures, though when threatened or roused, giant beetles are quite dangerous. Their powerful mandibles and tough exoskeletons make for a challenging combatant.",
      "armorClass": 16,
      "hitPoints": 6,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "bhI0M1dnsLjItat7",
          "name": "Mandibles",
          "bonus": 8,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "JjOstNeMHauECGcr",
          "name": "Luminescent Aura",
          "kind": "passive",
          "description": "10 feet.\nThe flash beetle's bioluminescent organs fill the area with bright light."
        },
        {
          "id": "qbw4q1VE5jAxSzTj",
          "name": "Light Flash",
          "kind": "action",
          "description": "The flash beetle creates a brilliant flash of light. All creatures in its luminescent aura must succeed at a check (fortitude, dc:17, options:area-effect,inflicts:dazzled) save or be Dazzled for 1 minute.\nThe flash beetle's glow then goes out, disabling its aura for 24 hours, during which time it cannot use Light Flash."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:halfling-street-watcher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "FWLTPQZzrVsokXHb",
      "slug": "halfling-street-watcher",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:14535f83db68cb11d441ec83d457cccf8a7db54eb7f9b3309e0332acb190f73e",
    "translatableHash": "sha256:6c3bc83592291ef56a197cd9c0098aec6163f004af7b490876ef7b373d894180",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Street Watcher",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "halfling",
        "humanoid"
      ],
      "description": "Halflings' keen sight makes them excellent street watchers. Though the job rarely calls for fighting, most street watchers cover themselves head to ankle in whatever armor and weapons they manage to get their hands on.\nDespite their small stature, a halfling can prove to be a mighty foe if you find yourself on the wrong side of their frying pan.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 4,
        "diplomacy": 3,
        "stealth": 5,
        "thievery": 5
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
          "id": "eyP2TGdraHScDfUz",
          "name": "Frying Pan",
          "bonus": 9,
          "damage": "1d4-1 bludgeoning",
          "traits": [
            "fatal-d8"
          ]
        },
        {
          "id": "dcCsxBF2dneohVGS",
          "name": "Halfling Sling Staff",
          "bonus": 7,
          "damage": "1d10-1 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "48CFcDY5R0rTxFmv",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of it.\nWhenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-rat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "iIJPJcDT8wlJ8z5M",
      "slug": "giant-rat",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:aa9cc319293195f87c7c59732915f7820ccb0ac617fa52f0c04d252a1a6c817c",
    "translatableHash": "sha256:5a4788b943b372810c1629afe570267c5bafd92257185c79603952e5d917e01c",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Rat",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "Giant rats are enormous versions of the common vermin. They are typically found in abundant numbers, but since they cannot fit in the nooks where mundane rats typically hide, they are much easier to locate and exterminate. They mostly live in sewers where they can scavenge from the streets above, but some families of giant rats live in more remote locations, such as dank caves, forests or hills. Rats are incredibly adept survivors and can be found nearly anywhere in the world, though they tend to favor temperate or warm climates as opposed to cold regions.\nAlthough its bite alone is not lethal except to the very young or very old, the giant rat carries the putrid plague common to rodents around the world—a pestilence more than capable of ravaging rural communities.\nRats are a ubiquitous menace, scurrying through the sewers and on the streets of nearly every settlement in the world. Though a regular rat darting underfoot might startle or even frighten the average passerby, giant rats and rat swarms are far more dangerous.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": -3
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 2,
        "stealth": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "yLnwKltbJHYpn8qC",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Mjlek9OZ25Tga7Cg",
          "name": "Putrid Plague",
          "kind": "passive",
          "description": "The Sickened and Unconscious conditions from putrid plague don't improve on their own until the disease is cured.\nSaving Throw check (fortitude, dc:14)\nStage 1 carrier with no ill effect ([[/gmr 1d4 #hours]]{1d4 hours})\nStage 2 Sickened 1 (1 day)\nStage 3 Sickened 1 and Slowed 1 (1 day)\nStage 4 Unconscious (1 day)\nStage 5 dead"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:crawling-hand",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KH1GkazaI59zftst",
      "slug": "crawling-hand",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a6915d1025e82a73c00fd72bd971fe9518927dd9e1c4df56ed9254bebc4132d3",
    "translatableHash": "sha256:852d56562a503f2ff13d41532e38cf4594be881f3a2cd0baa26ce0f389098c2d",
    "data": {
      "schemaVersion": 1,
      "name": "Crawling Hand",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "A crawling hand formed from the appendage of a Medium creature is quick and agile, skittering in the shadows until it can strike its prey.\nTypically, crawling hands form when severed appendages are endowed with a crude sentience by necromantic energies that turn them into tireless killers. Yet, crawling hands can also arise spontaneously, usually when a creature loses an appendage in a place rife with necromantic energy or with a connection to the Void.",
      "armorClass": 12,
      "hitPoints": 8,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "lifesense-30",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 5,
        "will": 2
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": -4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "stealth": 6,
        "survival": 2
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "visual",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HvL4pznzaaZwsFkA",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "kN2uT5XwOWMjkzA5",
          "name": "Tremorsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "twuwqjXSZmaqi54S",
          "name": "Lifesense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "rCFV63sVu1lfxToK",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gOjlMNwWXWNHohGo",
          "name": "Mark Quarry",
          "kind": "passive",
          "description": "A crawling hand can be assigned a quarry by anointing the hand with a drop of the intended quarry's blood. If the hand ever has no quarry, it automatically gains the next creature it damages as its quarry. The hand gains a +1 circumstance bonus to Perception checks when it Seeks its quarry, to Survival checks when it Tracks its quarry, and damage rolls when it Strikes its quarry."
        },
        {
          "id": "iThujq9Fhag6Jad2",
          "name": "Throat Grab",
          "kind": "action",
          "description": "This ability functions as Grab, but the crawling hand grips the throat of a Medium or smaller creature. A creature Grabbed or Restrained this way has difficulty speaking and must spend an extra action to perform any action that requires speaking, including casting spells."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:guard-dog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KHTYbQgR5hnFZdGL",
      "slug": "guard-dog",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3f7f12ecd8c7681111bba9d31b8bc3ae1729256a4f0978fe79229c3e417c46ee",
    "translatableHash": "sha256:b6472943aa56e9942eaf9ad11e7e1df716287c630de1ed9c658a491ef8a0f960",
    "data": {
      "schemaVersion": 1,
      "name": "Guard Dog",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "The typical guard dog is loyal and beloved by many communities. Often adored as pets, they excel as protectors and trackers, and can be fearless when defending a beloved master or family member. The statistics presented below work well for numerous breeds of dog ranging from 20 to 50 pounds in weight. Wild dogs can also use these statistics, but their untamed nature makes them far more unpredictable. Feral canines are perhaps even more dangerous, for unlike their wild cousins, feral dogs often lack the instinctual fear of humanity that stops wild creatures from interacting with people.\nDogs are trusted and loyal companions that serve as guardians, tracking animals, and pets. Their ability to detect prey or predators via scent and their predilection to accompany humanoids makes them ideal pets for most adventurers. There are hundreds of breeds of dogs in the world—from tiny lapdogs who shower their masters in affection to brawny hounds that stand nearly 4 feet high at the shoulder—and they can be found in nearly any place where people reside. Larger breeds might even be used as mounts for smaller adventurers, and some cultures use dogs as beasts of burden capable of pulling sleds loaded with supplies across the icy tundra. Regardless, many adventurers find value in having a dog.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 4,
        "stealth": 5,
        "survival": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "iUAQwRninJ973LoN",
          "name": "Jaws",
          "bonus": 6,
          "damage": "1d4+1 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "GWK22q1k4VFPbsKf",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The dog's Strikes deal 1d4 extra damage to creatures within the reach of at least two of the dog's allies."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mitflit",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kkAllKGsVCZVGFpf",
      "slug": "mitflit",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:687af1deac95d658df6ff73a24059e12ca39fe15e1afab561e0414ec6ef904a5",
    "translatableHash": "sha256:875c314477a99ad0023025793cd6970e59e989b65b10ae7e77d2429643ad7646",
    "data": {
      "schemaVersion": 1,
      "name": "Mitflit",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fey",
        "gremlin"
      ],
      "description": "Mitflits are self-loathing and pitiful cowards, easily bullied into servitude by other creatures or even slightly more powerful mitflit leaders. They tame insects, spiders, and other small vermin to serve as faithful allies. Mitflits have lost most of their ancestral magic, leaving them to feel incomplete and full of doubt and insecurity. Mitflits find companionship in the other base creatures of the world, and forge strong bonds of friendship with vermin, the only other beings that seem willing to accept them. A social structure, even one in which they are bullied, partially fills the hole within most mitflits' personalities, and they rarely rebel or last out unless their rage hits a breaking point.\nGremlins are cruel fey tricksters and saboteurs who have fully acclimated to life in the Universe, finding distinct niches for their inventive destructiveness. Nearly all gremlins delight in ruining or breaking things, whether it's something physical like a device or vehicle or something intangible such as an alliance or relationship. A gremlin's greatest joy is watching the collapse of complex creations, preferably after the slightest, carefully targeted nudge from the gremlin. Gremlins tend to denigrate, bully, or even slaughter their lesser kin, particularly mitflits, whom stronger gremlins derisively call \"baggies.\"",
      "armorClass": 14,
      "hitPoints": 10,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 0,
        "int": -1,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 5,
        "diplomacy": 1,
        "nature": 3,
        "stealth": 5,
        "thievery": 5
      },
      "languages": [
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 2"
        ]
      },
      "attacks": [
        {
          "id": "LRT2YJWR1S18u4vp",
          "name": "Shortsword",
          "bonus": 8,
          "damage": "1d6-1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "Fa3Nn9PdJzbO1Fwg",
          "name": "Dart",
          "bonus": 8,
          "damage": "1d4-1 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "3TfIMe12rJpDf9LZ",
          "name": "Self-Loathing",
          "kind": "passive",
          "description": "A mitflit's self-loathing makes it easy to influence. It takes a -4 penalty to its Will DC against checks to Coerce, Demoralize, Make an Impression, and Request."
        },
        {
          "id": "CiirPvlIj0ZtuHce",
          "name": "Vengeful Anger",
          "kind": "passive",
          "description": "As long as it isn't Frightened, a mitflit gains a +2 status bonus to damage rolls against a creature that has previously damaged or tormented it."
        }
      ],
      "spellcasting": [
        {
          "id": "RUcX4XrsDpkjIiPy",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "YF4cBR40UgOUcgln",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "0suXqXfWAtizJ87F",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "QLpCft5YSm98kbx4",
              "name": "Speak with Animals (Arthropods Only, At Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sprite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "lUBkzsSqMfQBczU1",
      "slug": "sprite",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:09a9e3d585c7ff5d4ea8a667200d00a499c775c4c677de9db3a1dd7c53c3c5d1",
    "translatableHash": "sha256:832316403d38d77db76346b60cb96f1335ee7cb93b237de2d0ed0a06d2f1ea55",
    "data": {
      "schemaVersion": 1,
      "name": "Sprite",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "sprite"
      ],
      "description": "Common sprites, sometimes called firefly sprites, are primeval guardians that latch onto a person, place, or object and defend it for their own inscrutable reasons. Their dispositions vary from kind to spiteful, but all sprites have a capricious streak. Being only about 9 inches tall, they are wary of animals that might hunt them, particularly house cats, and prefer flight to a fight. On the other hand, sprites are incredibly curious about all forms of magic and heedlessly gather around ley line nexuses or other places of power.\nElusive, flighty, and ebullient, sprites are what many villagers first imagine when they hear the terms \"fey\" or \"fairy.\" While their dispositions vary, all sprites share a connection to magic and a diminutive size. This family of fey shares its name with its slightest and most populous member, the common sprite.",
      "armorClass": 15,
      "hitPoints": 7,
      "speedFeet": 10,
      "perception": {
        "modifier": 4,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": -3,
        "dex": 4,
        "con": 0,
        "int": -2,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 6
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 3"
        ]
      },
      "attacks": [
        {
          "id": "yC4YZ8E2MfUoLnzI",
          "name": "Rapier",
          "bonus": 8,
          "damage": "1d6-3 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "fire",
            "magical"
          ]
        },
        {
          "id": "q9WAG2gpmBXA8cfi",
          "name": "Luminous Spark",
          "bonus": 8,
          "damage": "1d4 fire",
          "traits": [
            "fire",
            "light"
          ]
        }
      ],
      "actions": [
        {
          "id": "h7p7zhkW6OBX6N85",
          "name": "Luminous Fire",
          "kind": "passive",
          "description": "A sprite naturally sheds light like a torch. The sprite can extinguish, rekindle, or change the color of this light by using an action with the concentrate trait. While this light is extinguished, the sprite's Strikes don't deal fire damage, and they can't use their luminous spark Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "ja5ZUKm30pmuCb0m",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "h0nL2zTlwtUshjBI",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "0ooLzVbvF8Kd1DYh",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "nKUPiYrK9AhvuUim",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "GXfKwukfGeNf6ICJ",
              "name": "Light",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-centipede",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "NRBgcu0LkXXp8mtp",
      "slug": "giant-centipede",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:69d1c621504f203640d46e1bec7c3453ccf28f33d96f98e0470dcfce590c5652",
    "translatableHash": "sha256:f8d7934672b72f7ac790154fd05ddb566a3c2ece14eee30c03e5368e6ea9d402",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Centipede",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Most giant centipedes (known as sewer centipedes when found in cities) nest in small groups but hunt alone when they seek out food. Attempts to domesticate giant centipedes for use as guardians or pets generally end poorly, but some communities of goblins, kobolds, and mitflits have developed effective methods of utilizing these vermin as guardians. Other groups roast and eat centipedes, often with pungent peppers as a savory delicacy, although care must be taken in preparing the meal to avoid tainting the flesh with the creature's venom.\nHunters and scavengers that live amid dung and detritus, centipedes are a relatively common and often reviled threat faced by adventurers. Scurrying about with surprising speed on the scores of legs attached to their long, segmented bodies, centipedes strike with poisoned mandibles to slow and torment their prey with a vicious toxin before they settle down to feed in slow and disgusting leisure.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 6,
        "will": 2
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 1,
        "int": -5,
        "wis": 1,
        "cha": -4
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 2,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "1U37Lsr3NMgzLqLM",
          "name": "Mandibles",
          "bonus": 6,
          "damage": "1d4-1 piercing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "PIjZTZsbQlriq5X3",
          "name": "Giant Centipede Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:14)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d4[poison] damage and Off-Guard (1 round)\nStage 3 1d4[poison] damage, Clumsy 1, and Fatigued (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tooth-fairy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "q95mjOkL678a1Wnt",
      "slug": "tooth-fairy",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b371d01a4226bee2c526e609e97a43dbf2e4e8751927d3fc965c2db9fa4fcc17",
    "translatableHash": "sha256:9618b3da6e66c70f793115a95b17c128b42f9352ff6a277bd50ed59c9c98b63d",
    "data": {
      "schemaVersion": 1,
      "name": "Tooth Fairy",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey"
      ],
      "description": "Lone fairies usually need several minutes of elbow grease and a sleeping or restrained subject to extract a tooth.\nTooth fairies spawn when a child's tooth (or, less commonly, an entire child) is buried in terrain rife with fey energies. Hatching from the buried teeth like larvae from an egg, tooth fairies build crude pliers from whatever they can find, then go hunting for more teeth—regardless of the owners' willingness.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 10,
      "perception": {
        "modifier": 6,
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
        "con": 0,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "stealth": 5,
        "thievery": 6
      },
      "languages": [
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 2"
        ]
      },
      "attacks": [
        {
          "id": "PKh7s5uQyxm0yPQg",
          "name": "Pliers",
          "bonus": 7,
          "damage": "1d6 bludgeoning",
          "traits": [
            "disarm",
            "finesse",
            "reach-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "04WUnuVaMwggkQxr",
          "name": "Plaque Burst",
          "kind": "passive",
          "description": "When killed, a tooth fairy bursts into sticky, foul-smelling white dust. Each creature in a @Template[emanation|distance:5] must succeed at a check (fortitude, dc:16) save or become Sickened 1 (Sickened 2 on a critical failure)."
        },
        {
          "id": "2kSrspDPmUktGvBB",
          "name": "Tooth Tug",
          "kind": "action",
          "description": "Requirements The tooth fairy's last action was a successful pliers Strike against a creature with teeth\nEffect The tooth fairy attempts a check (thievery, defense:fortitude) check against the creature's Fortitude DC, dealing 2[bleed] damage on any result but a critical failure. On a critical success, it also pulls out one of the target's teeth.\nIf the creature loses a tooth, it takes a –1 status penalty to Charisma-based skill checks and must succeed at a check (flat, dc:5) to Cast a Spell unless that spell has the subtle trait. These effects last for 1 day, or until the stolen tooth is returned and the target regains at least 1 Hit Point.\nEffect: Tooth Tug"
        }
      ],
      "spellcasting": [
        {
          "id": "4ZK6UkKCERwU9jVd",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 5,
          "saveDc": 13,
          "spells": [
            {
              "id": "PJd67jQT66Irv4J6",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "PiqpWuj18qEfsTgi",
              "name": "Telekinetic Hand",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sprigjack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "TElwkEGZy1zgwoVg",
      "slug": "sprigjack",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:71ade6c86787382a785296c7eceef838872e673e5482f595a435f2a9c547514d",
    "translatableHash": "sha256:2511cae3e3148b0a68b9e4cf2039ab674c1acdf12d97ddfb488bdd0736e12c35",
    "data": {
      "schemaVersion": 1,
      "name": "Sprigjack",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "plant",
        "wood"
      ],
      "description": "Weaker twigjacks are often found in cultivated forests and even gardens. They seek to drive away interlopers, growing as their environment runs wild.\nMaladjusted forest denizens, twigjacks form from the cruel and prankish combination of fey and the very woods in which they reside. A twigjack's body is made up of prickly brambles woven with vines. Shaggy, mossy growth, not unlike hair, tops a twigjack's head. Its mouth is just a canyon of splintered and broken sticks bisecting its face. Leaves and sprigs of new growth randomly sprout from the creature's body. Many dense forests on Golarion have at least a handful of twigjacks living in the undergrowth.\nWhile truculent and violent, twigjacks care deeply for what they consider to be their forests. These creatures harass outsiders who delve deep into their wooded domains, forcing back even the most determined explorers, foresters, and travelers, especially when those intruders cut roads through the forest. However, they are not terribly territorial when it comes to other forest creatures. When sylvan creatures, especially fey, rally against an outside threat, twigjacks in the area eagerly arrive to fight, even if they were not invited.",
      "armorClass": 15,
      "hitPoints": 10,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
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
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "nature": 3,
        "stealth": 5
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "axe-vulnerability 2",
          "fire 2"
        ]
      },
      "attacks": [
        {
          "id": "XXxch1hk01oNf6j8",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "unarmed"
          ]
        },
        {
          "id": "fInlXUMDv48oaIve",
          "name": "Splinter",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Bqkq78fvjoIJT0RU",
          "name": "Bramble Jump",
          "kind": "action",
          "description": "Requirements The twigjack is in undergrowth\nEffect The twigjack scrambles into the undergrowth and instantly teleports to a square of undergrowth within 60 feet. This movement doesn't trigger reactions."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:compsognathus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "uzH85ifDz5GU525p",
      "slug": "compsognathus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9ca90d101f3439d92f2b2e605f5250ed2036f9f804ac2de1d9bb5abc41f5c54b",
    "translatableHash": "sha256:5aa9580647d464d7b491a075b4987fd3e8342e755d9804129e10527f8633e012",
    "data": {
      "schemaVersion": 1,
      "name": "Compsognathus",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "The compsognathus is a small bipedal dinosaur that moves in swift, darting motions. Its bite injects a venom that causes numbness and weakness, a trait the animal uses to bring down larger prey, although it prefers to scavenge or snatch insects and other smaller creatures for its meals.\nThe compsognathus is curious to a fault, often getting itself into trouble. It measures 3 feet long from head to tail and weighs 15 pounds—small enough to serve as a house pet or familiar for a spellcaster. In cases where magical links aren't involved, however, those keeping the creature would be well-advised to treat it with the same caution one might extend to a pet viper or other poisonous reptile, as they're partly tame at best.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Pq25te8zoxBzUMRN",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "BIjOxLctW7PgHsOt",
          "name": "Compsognathus Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 4 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 1d8[poison] damage and Enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:eagle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WBPEvEqIGvxeQKlp",
      "slug": "eagle",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:44e12992afd6bddc8cac70ae0c36cda62b361405d3f0e5f855cab6aaad8d01e0",
    "translatableHash": "sha256:2ae0b599403fc887e791911a068dc21baefcaed2f4b54dd10e9e2cdf5ad5836e",
    "data": {
      "schemaVersion": 1,
      "name": "Eagle",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "These large birds of prey swoop down from incredible heights to snatch fish and small mammals in their powerful talons. Eagles nest atop high trees or steep cliffs that provide a commanding view of the surrounding area.\nFew avian creatures can match the beauty and grace of the eagle.",
      "armorClass": 15,
      "hitPoints": 6,
      "speedFeet": 10,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 6,
        "will": 2
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LiSV4xTOMgWGk32H",
          "name": "Beak",
          "bonus": 6,
          "damage": "1d6 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "gpQkk5cFJ03uvxyX",
          "name": "Talon",
          "bonus": 6,
          "damage": "1d4 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "63iXwIDFMddnz4kz",
          "name": "Eagle Dive",
          "kind": "action",
          "description": "The eagle Flies up to double its fly Speed in a straight line, descending at least 10 feet, and then makes a talon Strike."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zombie-shambler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Xo4IGzw28hivgMmM",
      "slug": "zombie-shambler",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f2460d4365a6b82ef35cfe7468806aeeea201260b05df36979501b766cddb4fa",
    "translatableHash": "sha256:440610407d1317a9460c7cf1786529a5f5729816e64b5f8f17cf3f195cc096ed",
    "data": {
      "schemaVersion": 1,
      "name": "Zombie Shambler",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "A zombie shambler is a slow-moving horror dangerous in larger groups.\nA zombie's only desire is to consume the living. Unthinking and ever-shambling harbingers of death, zombies stop only when they're destroyed.",
      "armorClass": 12,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 0,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 0,
        "will": 2
      },
      "abilities": {
        "str": 3,
        "dex": -2,
        "con": 2,
        "int": -5,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 7
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
        "resistances": [],
        "weaknesses": [
          "vitality 5",
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "wOkHQN8ELSDh7T1f",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "v90WRjELLiKF57vr",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d8+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "eulyI60JHNUYs39w",
          "name": "Slow",
          "kind": "passive",
          "description": "A zombie is permanently Slowed 1 and can't use reactions."
        },
        {
          "id": "q1OobVjFqRsc58KI",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Qknp3UNQSMjNTUmL",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:animated-broom",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ybkelAOtSIA06fnj",
      "slug": "animated-broom",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fe736b61a402d9c58bf2515c86b3eab54b29d5fafc48eecac142e385ccc39503",
    "translatableHash": "sha256:696ffe39a7aff51cc90a32143c3277b831b414620921888a74289534ffd3d11b",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Broom",
      "level": -1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Animated brooms perform menial tasks of cleaning and upkeep, but they can step in to defend a room from intrusion if needed. These simple animated objects can be found with greater frequency than more complicated and costly objects.\nGranted a semblance of life through the use of rituals or other strange magic, animated objects take many forms and serve a variety of uses. A few examples of typical animated objects are listed below. Many of these creatures serve as guardians, surprising unsuspecting adventurers when they suddenly attack. Others serve as idle distractions for the exceptionally rich, simple servants created to handle odd jobs, and the like.",
      "armorClass": 15,
      "hitPoints": 6,
      "speedFeet": 15,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 0,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "0XydXCehPsY2yGto",
          "name": "Bristles",
          "bonus": 6,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "3SNH7v25J8TbPWvC",
          "name": "Construct Armor (Hardness 2)",
          "kind": "passive",
          "description": "Like normal objects, an animated broom has Hardness. This Hardness reduces any damage it takes by an amount equal to the Hardness. Once an animated broom is reduced to less than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks and reducing its Armor Class to 13."
        },
        {
          "id": "zXDFVZKb5GlrVnod",
          "name": "Dust",
          "kind": "passive",
          "description": "A creature hit by an animated broom's bristles must succeed at a check (fortitude, dc:15) save or spend its next action coughing. Even if hit by multiple dust attacks, the creature has to spend only 1 action coughing to clear the dust out.\nA creature that doesn't breathe is immune to this effect."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:homunculus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9wNjq9BirBoxyJVH",
      "slug": "homunculus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:55a95470762c0cad90958429381843aec50c4aaa1cb38a9118acf8b08667de1e",
    "translatableHash": "sha256:094257ae56002e6016476c2772712b3b5a32c132e2fe71e81da74d77e132eec7",
    "data": {
      "schemaVersion": 1,
      "name": "Homunculus",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct"
      ],
      "description": "A homunculus is a tiny servitor construct created by a crafter to serve as a spy, scout, messenger, or assistant. When a crafter first begins to study the art of creating constructs, they often craft a homunculus first, since the creation process is simple and inexpensive due to a magical shortcut: the use of the creator's own blood. This forges a link between the homunculus and its master, causing the homunculus to gain a spark of the creator's intellect, as well as the same moral values and some of the creator's basic personality traits. Homunculi left to their own devices never stray far from their masters.\nIn most cases, a homunculus doesn't survive the death of its master for long. Deprived of its creator, a homunculus loses focus and grows increasingly selfdestructive, and some even end up battering themselves to annihilation. Rarely, a homunculus with a slain master survives the trauma with its mind intact, often seeing itself as its deceased creator's child or successor and attempting to further its creator's legacy as best it can. In such cases, and if the homunculus was in close proximity to its master upon that creature's death, a portion of the dead master's soul \"infects\" the surviving homunculus as they pass on to the afterlife.\nThis doesn't result in a truly soulbound homunculus, since only a fragment of the soul is left behind, but this is still enough to grant the homunculus a greater personality, free will of its own, and perhaps most importantly, the ability to speak. Over time, a few of these \"awakened\" homunculi even go so far as to become convinced that they are the reincarnation of their prior masters, although their actual personalities never quite reach the depth and complexity of a truly living creature. They are, at best, caricatures of the master, and at worst, they become awful, bitter-minded parodies of life itself. Still, a free-willed homunculus might pursue studies in its creator's class, becoming a unique creature with the abilities of that class if time and fortune permit.\nHomunculi are created from a mixture of clay, ash, mandrake root, spring water, and a pint of the creator's own blood. It is possible for a separate donor to provide the blood, but the process is more difficult.",
      "armorClass": 17,
      "hitPoints": 17,
      "speedFeet": 15,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
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
        "int": 0,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 5,
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
          "id": "ICjSF2djJxtdnASi",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": [
            "finesse",
            "magical",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "WLKYWXEiwmc9uCr5",
          "name": "Master Link",
          "kind": "passive",
          "description": "A homunculus can't speak, but it is telepathically linked to its creator. It can share information back and forth, including its master's knowledge and everything the homunculus hears. The range of this link is 1,500 feet. The homunculus typically has a similar attitude to its creator and is utterly faithful.\nIf the homunculus is destroyed, the master takes 2d10[mental] damage. If the master is slain, the homunculus becomes mindless, claims its current location as its lair, and instinctively attacks anyone who comes near."
        },
        {
          "id": "WhTbPOtlxlYvCpJ6",
          "name": "Homunculus Poison",
          "kind": "passive",
          "description": "A homunculus has one dose of poison in a reservoir in its head. It can refill this poison from its reserves with an Interact action\nSaving Throw check (fortitude, dc:15)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] and Enfeebled 1 (1 round)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pugwampi",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "aeOzCBpwnUVcpqxI",
      "slug": "pugwampi",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0372fb190333176221d14423b4668b26567dc1f3a7f2c24f3846849d17a0ad9c",
    "translatableHash": "sha256:7e38c0f8a7174bada62e679589e06a9f0e0112f7c188951d6e87b9f3740bed94",
    "data": {
      "schemaVersion": 1,
      "name": "Pugwampi",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "gremlin"
      ],
      "description": "Mean, dog-faced, and craven, pugwampis take disproportionate enjoyment from the accidents and missteps of other creatures—something that happens often due to the supernatural aura of ill fortune these gremlins project. They enjoy preparing pranks involving spikes, excrement, pits full of spiders, and similar twisted torments. Pugwampis are somewhat deaf and thus often yell loudly to each other when not hiding. Many pugwampis worship kholos as gods and aspire to be more like them. Kholos, on the other hand, hate pugwampis because of their sycophantic fawning.\nGremlins are cruel fey tricksters and saboteurs who have fully acclimated to life in the Universe, finding distinct niches for their inventive destructiveness. Nearly all gremlins delight in ruining or breaking things, whether it's something physical like a device or vehicle or something intangible such as an alliance or relationship. A gremlin's greatest joy is watching the collapse of complex creations, preferably after the slightest, carefully targeted nudge from the gremlin. Gremlins tend to denigrate, bully, or even slaughter their lesser kin, particularly mitflits, whom stronger gremlins derisively call \"baggies.\"",
      "armorClass": 14,
      "hitPoints": 17,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": -3,
        "dex": 3,
        "con": 0,
        "int": 0,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "crafting": 2,
        "deception": 2,
        "nature": 4,
        "stealth": 5,
        "thievery": 5
      },
      "languages": [
        "kholo",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 2"
        ]
      },
      "attacks": [
        {
          "id": "kFgfAbXaJbI8otfZ",
          "name": "Shortsword",
          "bonus": 8,
          "damage": "1d6-3 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "a4I77q6CzdLCZCG6",
          "name": "Shortbow",
          "bonus": 8,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "hA7EUlUx4wXuw2fG",
          "name": "-2 Penalty on Perception to Hear things",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AGjtcz0cAWzBXlEx",
          "name": "Unluck Aura",
          "kind": "passive",
          "description": "20 feet.\nWhen a creature that isn't an animal, gremlin, or kholo enters the aura, it might become unlucky. It attempts a check (will, dc:16) save; it must roll twice and take the worse result. On a success, the creature is temporarily immune to pugwampi unluck auras for 24 hours. On a failure, the creature must roll twice and take the worse result on all checks as long as it's within the aura.\nEffect: Unluck Aura"
        }
      ],
      "spellcasting": [
        {
          "id": "xoD1yB3vzy3xf2iD",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "zGBmSf0t3tcO55Ey",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "35CTre21nZQseuFC",
              "name": "Speak with Animals (At Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:riding-pony",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "F3ungAqpGjFotwUK",
      "slug": "riding-pony",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e1656575632128bab9350738db7977ee3bc11824dba87ce8049072229c3e411f",
    "translatableHash": "sha256:e86d2668e10234a4d09e01c23e45842fb503b2ae9ce734400cf39c2bb24f0236",
    "data": {
      "schemaVersion": 1,
      "name": "Riding Pony",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Horses serve as mounts and beasts of burden in many societies. They are loyal and typically gentle creatures, and they are invaluable to those looking to travel long distances. Smaller folk, like gnomes and halflings, often utilize ponies as mounts, while horses are the favored steeds for humans and other Medium humanoids. Most horses that the average humanoid encounters are domesticated, though large herds can be found in the wild.",
      "armorClass": 14,
      "hitPoints": 16,
      "speedFeet": 35,
      "perception": {
        "modifier": 4,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 4,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 4,
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HNM58d8JH28lGstw",
          "name": "Hoof",
          "bonus": 5,
          "damage": "1d4+3 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "HuxqXHbNPMVfb98R",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:15)"
        },
        {
          "id": "CyJqBVfPXX4Fp283",
          "name": "Gallop",
          "kind": "action",
          "description": "The riding pony Strides twice. It has a +10-foot circumstance bonus to its Speed during these Strides."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ort",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kohQQtOfhwxbzWZB",
      "slug": "ort",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ee0c2ed7006a84a6b04cf07751ae0c9d69e9653dfdfc265c7636e20c1952fe18",
    "translatableHash": "sha256:c91b1f2ab9c7188f12317ad2b3d18520b968b8b66d6f54e14facfcda589ef1b2",
    "data": {
      "schemaVersion": 1,
      "name": "Ort",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "mindless",
        "unholy"
      ],
      "description": "These shapeless masses of quivering flesh are the least of devilkind. Pathetic creatures from Hell's first layer, orts roam alongside damned and suffering souls. Nessaris can combine the essence of a mob of orts to concentrate their collective wickedness within a single form, granting it an infernal sentience and transforming it into a more powerful devil (see the nessari's Shape Devils ability).\nMasters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks.\nEvery devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly orts perform subservient labor to more powerful and specialized devils, such as infantry and contract devils, while the greatest nessaris command entire infernal armies.\nAsmodeus stands at the apex of the structure he created, but the layers below him are marked by a constant jockeying for position. Most diabolic plans ultimately serve to improve the schemer's place in the hierarchy.",
      "armorClass": 13,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 0,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 2
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -3
      },
      "skills": {
        "athletics": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 3 except silver",
          "poison 5"
        ],
        "weaknesses": [
          "holy 3"
        ]
      },
      "attacks": [
        {
          "id": "mkbavR53jwVXw293",
          "name": "Claw",
          "bonus": 8,
          "damage": "1d4+2 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "XAY63LFVYjJCN65F",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Wsl0Qe07OtlNGmr0",
          "name": "Subservience",
          "kind": "passive",
          "description": "Orts have little drive of their own, but other devils can take command of them. A non-ort devil can issue a command to all orts within 60 feet of it with a single action, which has the auditory and concentrate traits. The devil picks one of the following orders orts can understand, and the orts follow that order. The command and its effects end once the commander is out of the ort's sight, when a new command is issued by the same or another devil, or when the ort dies.\n• Kill The ort attacks one target the commander singles out and gains a +1 circumstance bonus to attack rolls against the target.\n• Defend The ort circles the commander and attacks any creature that comes near. It gains a +1 circumstance bonus to AC and saves.\n• Fetch The ort gains a +10–foot circumstance bonus to its Speed and attempts to get an object or person the commander singles out. It attacks anyone and anything that gets in the way.\n• Work The ort performs drudge work dictated by the commander."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:spider-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "NcYbJS5PWBGdNDqh",
      "slug": "spider-swarm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8e401cbe128e12956d44fd7843fb9e516fd9af30e08dbe98ef87ec414bd90ab0",
    "translatableHash": "sha256:a5795242e39cb28778e7392e31bcbc6fddf8a3bf67bc31d7ee8a4f1505673f5d",
    "data": {
      "schemaVersion": 1,
      "name": "Spider Swarm",
      "level": 0,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "An abundance of food, the sudden hatching of a clutch of eggs, or magical influence can cause smaller spiders to gather in terrifying, deadly masses.\nFew everyday vermin inspire as much dread as the infamous spider.",
      "armorClass": 15,
      "hitPoints": 12,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 2
      },
      "abilities": {
        "str": -2,
        "dex": 3,
        "con": 0,
        "int": -5,
        "wis": 0,
        "cha": -4
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 2,
        "stealth": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 2",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "bmmCoxENGAgHtWP1",
          "name": "Web Sense",
          "kind": "passive",
          "description": "The spider swarm has imprecise tremorsense to detect the vibrations of creatures touching its web."
        },
        {
          "id": "bLrblJlMOfhn39My",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NIgj8uAlgosxMdVf",
          "name": "Spider Swarm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:14)\nMaximum Duration 4 rounds\nStage 1 1[poison] and Enfeebled 1 (1 round)\nStage 2 1d4[poison] and enfeebled 1 (1 round)"
        },
        {
          "id": "bEsmMOS1PqhLHHbh",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the spider swarm's space takes 1d4[piercing|options:area-damage] damage with a check (reflex, dc:14, basic, options:area-effect) save.\nA creature that fails its save is exposed to spider swarm venom."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-homunculus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qDTbixJDMopR0ixh",
      "slug": "soulbound-homunculus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3eb4bb4370bdc825a618d978e6ebe73f0b04e62f95ab8d102d1e2bbba6d4f1c1",
    "translatableHash": "sha256:617a7d2c13570c6856e7d80ef06564ec6816732c917c7f175156c7759eb6bd97",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Homunculus",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Most homunculi use a dose of their creator's blood as their spark of life, but it's possible to use a technique similar to that used in the crafting of a soulbound doll to give a homunculus a personality and the semblance of life. These homunculi gain the soulbound trait, lose immunity to spirit, can speak, and do not have a special link to a creator, yet the process tends to warp the soul used so that, more often than not, what rises in the new homunculus body is a parody of its prior life. As such, soulbound homunculi are generally created by cruel spellcasters as a method of humiliating and tormenting vanquished enemies.\nA homunculus is a tiny servitor construct created by a crafter to serve as a spy, scout, messenger, or assistant. When a crafter first begins to study the art of creating constructs, they often craft a homunculus first, since the creation process is simple and inexpensive due to a magical shortcut: the use of the creator's own blood. This forges a link between the homunculus and its master, causing the homunculus to gain a spark of the creator's intellect, as well as the same moral values and some of the creator's basic personality traits. Homunculi left to their own devices never stray far from their masters.\nIn most cases, a homunculus doesn't survive the death of its master for long. Deprived of its creator, a homunculus loses focus and grows increasingly selfdestructive, and some even end up battering themselves to annihilation. Rarely, a homunculus with a slain master survives the trauma with its mind intact, often seeing itself as its deceased creator's child or successor and attempting to further its creator's legacy as best it can. In such cases, and if the homunculus was in close proximity to its master upon that creature's death, a portion of the dead master's soul \"infects\" the surviving homunculus as they pass on to the afterlife.\nThis doesn't result in a truly soulbound homunculus, since only a fragment of the soul is left behind, but this is still enough to grant the homunculus a greater personality, free will of its own, and perhaps most importantly, the ability to speak. Over time, a few of these \"awakened\" homunculi even go so far as to become convinced that they are the reincarnation of their prior masters, although their actual personalities never quite reach the depth and complexity of a truly living creature. They are, at best, caricatures of the master, and at worst, they become awful, bitter-minded parodies of life itself. Still, a free-willed homunculus might pursue studies in its creator's class, becoming a unique creature with the abilities of that class if time and fortune permit.\nHomunculi are created from a mixture of clay, ash, mandrake root, spring water, and a pint of the creator's own blood. It is possible for a separate donor to provide the blood, but the process is more difficult.",
      "armorClass": 17,
      "hitPoints": 17,
      "speedFeet": 15,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
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
        "int": 0,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 5,
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
          "id": "ICjSF2djJxtdnASi",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": [
            "finesse",
            "magical",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "WhTbPOtlxlYvCpJ6",
          "name": "Homunculus Poison",
          "kind": "passive",
          "description": "A homunculus has one dose of poison in a reservoir in its head. It can refill this poison from its reserves with an Interact action\nSaving Throw check (fortitude, dc:15)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] and Enfeebled 1 (1 round)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:grindylow",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "sC4B1pjGrKFXhjOQ",
      "slug": "grindylow",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04e36465c3ee2e9bf6dfcedc3f029da49dd7e591411cca71e28cf02ee1806656",
    "translatableHash": "sha256:ba4ddc45fb8969676729d772899f2b295c99a71c4c6c5747f1d6d619015a3611",
    "data": {
      "schemaVersion": 1,
      "name": "Grindylow",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "amphibious"
      ],
      "description": "The top half of a grindylow vaguely resembles a goblin, but from the waist down, their bodies split into a tangle of suckered, wriggling tentacles. Grindylows mostly dwell in shallow waters, fresh and briny, including lakes, rivers, coastal regions, and coral reefs. They generally organize into groups called schools, which can range from a few individuals to a few hundred. Smaller schools are sometimes taken over by a powerful aquatic creature, though such alliances only last until the school faces a major setback, at which point the surviving grindylows scatter and form smaller schools of their own.\nGrindylows aren't territorial, but they are pragmatic. While they rarely build permanent structures, they will adopt a good hunting ground for generations until driven away by predators. They often lair in mobile shelters, such as a sargasso of seaweed or hull of an abandoned ship. They are skilled scavengers and hunters who eat anything they can sink their teeth into.\nGrindylows respect the power of larger sea predators but have a special hatred for squids (or anything that resembles a squid). Sailors plying grindylow-infested waters often paint the images of squids on the bottoms of their hulls in hopes of warding off potentials raids. While this can keep smaller schools at bay, it can also backfire, potentially inciting larger groups to gather for a coordinated attack; this becomes especially likely if the ship's route is predictable. Their hatred of squids does not extend to other tentacled creatures; grindylows consider octopuses to be the epitome of grace and power.",
      "armorClass": 15,
      "hitPoints": 14,
      "speedFeet": 10,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "stealth": 7,
        "survival": 5
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OBn7syfr2t30QJaa",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "Pb3h2ToW8cyiBXN7",
          "name": "Tentacle",
          "bonus": 7,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "trip",
            "unarmed"
          ]
        },
        {
          "id": "vb0fFWLf39zgAI4N",
          "name": "Spear",
          "bonus": 5,
          "damage": "1d6+1 piercing",
          "traits": []
        },
        {
          "id": "9Xg9EXT1XEoi38zM",
          "name": "Spear",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "fgRUYEh9qlHICNB4",
          "name": "Reactive Strike (Special)",
          "kind": "reaction",
          "description": "A grindylow gains 1 extra reaction at the start of each of their turns that they can use only to make a Reactive Strike with a tentacle. They can't use more than one Reactive Strike triggered by the same action or choice."
        },
        {
          "id": "T7L2FMHmpDoURw0s",
          "name": "Clinging Suckers",
          "kind": "passive",
          "description": "When a grindylow successfully Grabs a creature larger than themself, they attach to that creature. The Grabbed creature is not Immobilized, but if it moves, the grindylow moves with it.\nIf the creature is Medium or smaller, it takes a –5-foot status penalty to its Speeds while the grindylow is attached. The grindylow is Off-Guard while attached to a creature."
        },
        {
          "id": "ftJSskhqjZaMBNyZ",
          "name": "Jet",
          "kind": "action",
          "description": "The grindylow moves up to 60 feet in a straight line through the water without triggering reactions."
        },
        {
          "id": "4PmFH52nJw8E0Xwl",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:leaf-leshy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "v1UK3IwCB8wCbL3L",
      "slug": "leaf-leshy",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:97ff08fd074de2968569fa6c48e964ce09738c25ec9c6a593c39670be3ba75a7",
    "translatableHash": "sha256:cf6ad3730d0ffd4b1958cd55d728143196bb8e5e17b1641ac9cf04b5568bd82d",
    "data": {
      "schemaVersion": 1,
      "name": "Leaf Leshy",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "leshy",
        "plant"
      ],
      "description": "Leaf leshies are diminutive protectors of forests clad in armor and hats made of fruit, flowers, or leaves. They enjoy mock battles but act cautiously in real ones.\nLeshies are intelligent plant creatures who guard areas of primeval wilderness or earthly power. Originally created by powerful fey, they manifest when a skilled practitioner of primal magic—typically a druid—combines a nature spirit with a body carefully grown and crafted from local vegetation. The rites and materials required to create a leshy vary depending on the type of leshy. They are typically given life in an area of great natural significance, such as an arboreal's grove, a druidic circle, a fairy ring, or a great natural wonder.",
      "armorClass": 18,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 6,
        "will": 4
      },
      "abilities": {
        "str": -1,
        "dex": 2,
        "con": 2,
        "int": -2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 4,
        "nature": 4,
        "stealth": 4
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "fire 2"
        ]
      },
      "attacks": [
        {
          "id": "i7CeNawHh8IVMpSe",
          "name": "Longspear",
          "bonus": 3,
          "damage": "1d8-1 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "zu0tOUwHfZJlaGQq",
          "name": "Seedpod",
          "bonus": 6,
          "damage": "1d6 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "LwSZOVK4yOCD5o71",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "J8d6vqQrqGXi53bU",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When a leaf leshy dies, a burst of primal energy explodes from their body, restoring 1d4[healing]{1d4 Hit Points} to each plant creature in a @Template[emanation|distance:30]. This area is filled with tree saplings, becoming difficult terrain.\nIf the terrain is not a viable environment for these trees, they wither after 24 hours."
        },
        {
          "id": "LqM7JU0cOL7itoch",
          "name": "Change Shape",
          "kind": "action",
          "description": "The leaf leshy transforms into a Small tree. This ability otherwise uses the effects of One with Plants."
        },
        {
          "id": "WPtFVQLHQ2T2WxY7",
          "name": "Deafening Blow",
          "kind": "passive",
          "description": "When a leaf leshy hits with their seedpod Strike, the pod explodes loudly. The target must attempt a check (fortitude, dc:16) save.\nCritical Success The target is unaffected and temporarily immune for 24 hours.\nSuccess The target is unaffected.\nFailure The target is Deafened for 1 round.\nCritical Failure The target is deafened for 1 minute."
        },
        {
          "id": "4vfOgL2x3vJgpsBu",
          "name": "Glide",
          "kind": "action",
          "description": "The leshy glides gently through the air, moving 5 feet toward the ground and up to 25 feet forward. As long as the leshy spends at least 1 action gliding each round, they remain in the air at the end of each turn. For the purpose of determining damage from falls, a leaf leshy always treats falls as if they were 20 feet shorter."
        }
      ],
      "spellcasting": [
        {
          "id": "VRZR3SXqGz9bOL7Z",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 6,
          "saveDc": 14,
          "spells": [
            {
              "id": "pbHBQYKc7knijhoj",
              "name": "Speak with Plants (Constant, Trees Only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:orc-scrapper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YReM6QbqwUz3UTP7",
      "slug": "orc-scrapper",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:daa4b5285c89aaa763e8cb3802e8cb1aae1b9b7c6857add86a033a72fcd1a085",
    "translatableHash": "sha256:e90c25de2605a68cf273d38e2aec78c89eebb4ed1671859ce304cb90364e46f1",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Scrapper",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "Acting as the most common orc combat unit, orc scrappers are ferocious fighters who rely on unrelenting strength, rather than combat experience, to prove their mettle and attempt to rise in the hold's standing.\nMany orcs are forged in the fires of violence and conflict, often from the moment they're born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance, taming a powerful beast, or slaying a fearsome monster.\nTall and powerful, with long arms and thickly muscled legs, many orcs top 7 feet in height. Their heavy limbs and broad, almost bow-legged stances combine with a tendency to slouch forward to create an almost contradictory set of circumstances where an orc can tower over other humanoids while simultaneously staring them in the eye. These features, alongside a tendency to scar easily, can make them seem quite intimidating.\nThe half-orc dromaars, most commonly born of unions between orcs and humans, are often tested even more harshly than their full orc kin, but those who endure these tests can rise to positions of authority. \"An orc can have what an orc can hold\" is a saying that not only applies to an individual's ability to secure their own destiny and position, but is also likely the root of orcs referring to their communities as holds.",
      "armorClass": 14,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 4,
        "will": 2
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
        "athletics": 5,
        "intimidation": 2
      },
      "languages": [
        "orcish",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "DmNGJHLmXcMGdmUS",
          "name": "Orc Knuckle Dagger",
          "bonus": 7,
          "damage": "1d6+3 piercing",
          "traits": [
            "agile",
            "disarm"
          ]
        },
        {
          "id": "8jwjSmQRQW8Nk5NY",
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
          "id": "TS7iVUZNmP0Szdfh",
          "name": "Javelin",
          "bonus": 4,
          "damage": "1d6+3 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "CellesdPVQW5Dk8g",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hryngar-sharpshooter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Ytp0kRaG8iexmPfN",
      "slug": "hryngar-sharpshooter",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:80bc33ca711a0157006757eb571e58bc9610edf6cf78f14a206ef1e87c000daa",
    "translatableHash": "sha256:ca7fbc08bfc2ff4bc3c5a21c9ea9e1057031e04041be0355fefbc2faf4462cab",
    "data": {
      "schemaVersion": 1,
      "name": "Hryngar Sharpshooter",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "duergar",
        "dwarf",
        "humanoid"
      ],
      "description": "Hryngar sharpshooters serve both as ranged support for caravans and as snipers posted on guard towers overlooking quarries and other areas where workers toil away the hours. Hryngar sharpshooters also specialize in nonlethal methods of ranged combat—tactics they are often called upon to use when tracking down derelict debtors or those attempting to flee from their contractual obligations.\nDeep beneath the surface, the dour dwarves known as hryngars stubbornly toil, claiming the ancestral subterranean homelands of other dwarves as their own. Long ago, hryngar leaders refused to venture to the surface along with their \"cousins,\" forsaking the Quest for Sky. An exiled dwarven deity named Droskar offered hryngars salvation from the horrors that beset them in the Darklands, offering them power, cunning, and knowledge in exchange for their unending servitude. Many hryngar believe that by working harder than their brethren, they can build a society far greater than anything under the sun, claiming unending riches from the planet's metallic veins in days of relentless toil.\nThrough Droskar's blessings and their own fearsome work ethic, hryngar kingdoms now rule a significant portion of the upper Darklands region of NarVoth, and it's common to see hryngar caravans moving through the tunnels, drawn by teams of immense beetles. Hryngar leadership typically consists of powerful divine servants of Droskar, along with fearsomely implacable warriors whose martial prowess, backed by innate occult magic, ensures they can overcome any direct threat to hryngar rule. Almost every aspect of hryngar society is controlled by a strict hierarchy of leadership, with taskmasters directing subordinates across all walks of life.",
      "armorClass": 15,
      "hitPoints": 18,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 3,
        "stealth": 5
      },
      "languages": [
        "common",
        "dwarven",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "C5O7yPqYGSLmmeA2",
          "name": "Light Mace",
          "bonus": 5,
          "damage": "1d4+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove"
          ]
        },
        {
          "id": "jwtPWph6mWdPZhf5",
          "name": "Crossbow",
          "bonus": 7,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "atH4c29XMbIXGwpG",
          "name": "+2 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "D7nCoDXcwdCyO16R",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gooqrR0z9rN4mnlN",
          "name": "Bola Bolt",
          "kind": "passive",
          "description": "This shot deals no damage, but on a hit, the target must succeed at a check (reflex, dc:16) save or be knocked Prone and Immobilized until it is freed with a successful DC 15 check to [[/act escape dc=15]]. This check can be attempted either by the target or a creature adjacent to the target."
        }
      ],
      "spellcasting": [
        {
          "id": "4RfTIZfhWkxNhBsn",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 4,
          "saveDc": 12,
          "spells": [
            {
              "id": "qOOuTdGheHn94viP",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "T9qJXhTP3B00IyZq",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "1pmP1kCDKVpMuCgt",
              "name": "Paranoia",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bottlenose-dolphin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YZ4G7eRQ49dTVtjb",
      "slug": "bottlenose-dolphin",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:02499cb776e5bc0524f2018f18f64b29361a0ef7006340989ba7ea9d0ee274ec",
    "translatableHash": "sha256:330fa1af948aee481d35b6e6427e6d1e0ac150eddfc7fc96438e3012243cad85",
    "data": {
      "schemaVersion": 1,
      "name": "Bottlenose Dolphin",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "The bottlenose dolphin is the most common and widespread species of dolphin. They are social predators who hunt shallow seas and rivers in large family groups called pods. Sailors are fond of bottlenose dolphins and frequently tell of how they've saved drowning mariners or protected crew from sharks with blows from their powerful snouts.\nDolphins encompass a wide range of aquatic mammals, all of which are social, intelligent, and widespread throughout the world's oceans.",
      "armorClass": 15,
      "hitPoints": 16,
      "speedFeet": 0,
      "perception": {
        "modifier": 7,
        "senses": [
          "echolocation-120",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "cpSC9RcShIFK28EU",
          "name": "Snout",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        },
        {
          "id": "5lPaA6GKal2YHAjj",
          "name": "Jaws",
          "bonus": 6,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "TBp1tYUPtYoOEonO",
          "name": "Aquatic Echolocation 120 feet",
          "kind": "passive",
          "description": "A bottlenose dolphin can use its hearing as a precise sense at the listed range, but only underwater."
        },
        {
          "id": "khgGPSxgTQcgev3o",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A bottlenose dolphin can hold its breath for 2 hours."
        },
        {
          "id": "jN9qLXiQfaOBlFfC",
          "name": "Ramming Speed",
          "kind": "action",
          "description": "The bottlenose dolphin Swims twice and then makes a snout Strike. As long as it moved at least 20 feet, it gains a +1 circumstance bonus to its attack roll.\nA Large or smaller creature hit by this attack must succeed at a check (fortitude, dc:16) save or be Slowed 1 for 1 round."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:azarketi-crab-catcher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ZXiFjrQbhvboEZTL",
      "slug": "azarketi-crab-catcher",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4b22447e32649c01aa95fe894cacebf61ac1fcf09313fcb2bd9a0fe44ae4a82d",
    "translatableHash": "sha256:79fc6949fa6cd7d2814f0b8eb9c8f1f1704008750b3b76c345b629e63a2fac05",
    "data": {
      "schemaVersion": 1,
      "name": "Azarketi Crab Catcher",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "azarketi",
        "humanoid"
      ],
      "description": "The average azarketi citizen in Absalom makes a living fishing or catching crabs.\nAzarketis, also known as gillmen, can be found all over Golarion, with a particularly high concentration around Absalom and the Inner Sea. Descendants of the ancient Azlanti, the azarketis survived the cataclysm of Earthfall by fleeing into the ocean, where they were warped into amphibious forms by the alghollthu.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 4,
        "diplomacy": 3,
        "nature": 3,
        "stealth": 5,
        "survival": 5
      },
      "languages": [
        "common",
        "alghollthu"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XPkFqEt9yXqD4hu8",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "dhHjpKT52ATI3VEJ",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "kcbRLFttvvktolJn",
          "name": "Hydration",
          "kind": "passive",
          "description": "Azarketi must regularly submerge themselves in water to rehydrate their water-acclimated skin. After the first 24 hours outside of water, they gain a –1 status penalty to Fortitude saves as their skin cracks and their gills become painful. After 48 hours, they begin to suffocate until returned to water."
        },
        {
          "id": "tMYrLjnqdp2h4CWk",
          "name": "Swim Away",
          "kind": "reaction",
          "description": "Requirements The azarketi crab catcher is swimming\nTrigger The azarketi crab catcher is targeted with an attack and can see the attacker\nEffect The azarketi crab catcher gains a +2 circumstance bonus to AC against the triggering attack. After the attack, they Swim 5 feet."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:vampire-bat-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2mg30nJR6P3HJDSd",
      "slug": "vampire-bat-swarm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3af66b428f8373ab41c023e6474ab11155ad4b9e519380620367f826beaca84a",
    "translatableHash": "sha256:6d45793a96b75335ead0a1239832ad5826a83aae6b59c309fe5b55c3971b43c8",
    "data": {
      "schemaVersion": 1,
      "name": "Vampire Bat Swarm",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "Although the typical vampire bat has a wingspan of 7 inches and doesn't pose a significant threat to larger prey alone (and indeed, these blood-drinkers can feed without their sleeping victims ever noticing), some unusually aggressive species of these bats hunt in deadly swarms. A churning cloud of vampire bats is much more dangerous than the sum of its individual parts and is capable of inflicting an overwhelming number of bleeding wounds in a frighteningly short span of time.\nA wide range of bats dwell throughout the world. Most of these nocturnal animals are harmless insectivores, but deadly breeds of vampire bats and oversized bats the size of horses pose much more significant threats to adventurers.",
      "armorClass": 15,
      "hitPoints": 11,
      "speedFeet": 5,
      "perception": {
        "modifier": 10,
        "senses": [
          "echolocation-20",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": -4,
        "wis": 3,
        "cha": -3
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 6",
          "piercing 6",
          "slashing 3"
        ],
        "weaknesses": [
          "area-damage 3",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "7P4VEdy4KccmQ5Gp",
          "name": "Echolocation (Precise) 20 feet",
          "kind": "passive",
          "description": "A bat swarm can use its hearing as a precise sense at the listed range."
        },
        {
          "id": "bjF022r2jEalWdPs",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ydBVkEJ8CwcPFkPB",
          "name": "Blood Feast",
          "kind": "action",
          "description": "Each enemy in the bat swarm's space takes 1d4[piercing] damage (check (reflex, dc:16, basic) save). Creatures that fail this save also take 1[bleed] damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:earth-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "4n0nhynklrs2iHUJ",
      "slug": "earth-scamp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c7f540f1b415a7ae2e5effc618557346b41b591e1a7aeae17f0d6b07da717346",
    "translatableHash": "sha256:07088ad665060e0f202dd166a288c0dd7b42df6e73d833ee8fbb9ccc34051444",
    "data": {
      "schemaVersion": 1,
      "name": "Earth Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "An earth scamp's rocky exterior could camouflage it well among loose rocks if not for the scamp's large eyes and bat-like wings. Earth scamps can fly, but the act of flight is uncomfortable and unnerving to them—they rarely leave the ground if they can help it. In fact, most earth scamps would rather never visit the surface at all, staying nestled deeply within the rocks they resemble.\nElemental scamps are bat-like critters marked by elemental powers. Scamps are dispatched from the Elemental Planes by more powerful residents or called to the Universe by neophyte summoners. All scamps have a hint of magical power due to a lingering connection to their home plane, which they largely use to pull simple pranks.\nScamps rapidly form a pecking order of cleverness. Humanoids often confuse scamps when meeting such creatures for the first time. These confused scamps usually resort to an escalating series of pranks and mischief, seeing what they can get away with to establish their place in the hierarchy.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 3
      },
      "abilities": {
        "str": 3,
        "dex": -1,
        "con": 2,
        "int": -2,
        "wis": 0,
        "cha": -1
      },
      "skills": {
        "athletics": 6,
        "stealth": 2
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
          "id": "OrI9Mq1ImY5Uinbz",
          "name": "Body",
          "bonus": 8,
          "damage": "1d6+3 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "hCcyCtd5aTMbjL4e",
          "name": "Tremorsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "M5ot2USTlZ5x6XCd",
          "name": "Fast Healing 2 (While Underground)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "WbHqriBplta0UJw3",
          "name": "Scree Breath",
          "kind": "action",
          "description": "The earth scamp breathes rocks in a @Template[cone|distance:15] that deals 2d6[bludgeoning|options:area-damage] damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save).\nThe earth scamp can't use Scree Breath again for [[/gmr 1d4 #Recharge Scree Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "IpN6j0fyA38I7HVW",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "JzpFk3rs0hCHYr7G",
              "name": "Enlarge (Self Only)",
              "rank": 2
            },
            {
              "id": "xJBTWx6wKEaZLLJf",
              "name": "One with Stone",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:nosoi",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5KstOkXabrOlZaKR",
      "slug": "nosoi",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ba505b00898a39a19bcb3e929fcb8f3d5198be36a9f2687d9f6876093775ba17",
    "translatableHash": "sha256:a111dae930623d3ade9885f40708af89d2e43a80be7aa026307cc33976a19850",
    "data": {
      "schemaVersion": 1,
      "name": "Nosoi",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "monitor",
        "psychopomp"
      ],
      "description": "A nosoi resembles a whippoorwill, sparrow, or other small bird wearing a heavy leather plague doctor's mask. They are the clerks, messengers, and scribes of the Boneyard, witnessing judgments, directing souls, and generally performing the administrative grunt work that keeps the Boneyard functioning. Most nosois are particularly chatty and eager to discuss how important they consider their individual assignments to be.\nPsychopomps are guardians and shepherds of the dead in the Boneyard, the vast plane of graves where mortal souls are judged and sent on to their eternal rewards or damnations. Psychopomps ensure that the dead come to terms with their transition from mortality and are properly sorted into the appropriate afterlife. They also protect souls from being preyed upon by supernatural predators. Nearly all psychopomps wear masks, especially when they're likely to be interacting with mortals, although the types of masks they wear are as varied as the psychopomps themselves. The courts of the Boneyard preside in Requian, a somber yet melodic language spoken slowly with various tonal shifts.\nMany psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 15,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 6,
        "performance": 6,
        "religion": 6,
        "society": 2,
        "stealth": 6
      },
      "languages": [
        "chthonian",
        "diabolic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease"
        ],
        "resistances": [
          "void 3",
          "poison 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GE9sBpIRZwKGL1HJ",
          "name": "Beak",
          "bonus": 6,
          "damage": "1d4-1 piercing",
          "traits": [
            "finesse",
            "magical",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "NXmjfJq99Q2rTjVD",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "C2pJTs2tt6oHDcFW",
          "name": "Change Shape",
          "kind": "action",
          "description": "The nosoi takes the appearance of a raven or songbird. This doesn't change its Speed or its attack and damage modifiers with its Strikes."
        },
        {
          "id": "kcYtaqPWsMiKHYty",
          "name": "Haunting Melody",
          "kind": "action",
          "description": "The nosoi croons an entrancing song. Each living or undead creature within a @Template[emanation|distance:60] must attempt a check (will, dc:18) save. The effect lasts until the end of the nosoi's next turn, but the nosoi can Sustain it. A creature that succeeds at its save is temporarily immune for 24 hours. Despite being a mental effect, this ability affects mindless undead.\nPsychopomps are immune to this ability.\nFailure The creature is Fascinated with the nosoi.\nCritical Failure The creature is fascinated with the nosoi and must spend each of its actions on its turn to move closer to the nosoi as expediently as possible while avoiding obvious dangers. If a fascinated creature is adjacent to the nosoi, it stays still and doesn't act. If the creature is attacked, the fascination ends."
        },
        {
          "id": "1UAh4ooLm8sQPmeN",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "A nosoi's Strikes have the benefit of a Ghost Touch property rune and deal an additional 1d6[void] damage to living creatures or 1d6[vitality] damage to undead."
        }
      ],
      "spellcasting": [
        {
          "id": "endjF5MDlvADZc05",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "2DoHstphu88832r3",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "PJwcLpPgHhcbcsl0",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "R6ultwJJ6cumUq9P",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "luhGRRUrEgeCD0Wo",
              "name": "Talking Corpse",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:xulgath-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5vBG8a8dnJfmVd3Y",
      "slug": "xulgath-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:120bbc0fde96b4182c0eac6818caea41c3e36b38a5ad7379b42836ca58fbe798",
    "translatableHash": "sha256:aca3786e4c54ddeacc9b3c259684d9bfe1bce22955e8294a3f88e2609086298d",
    "data": {
      "schemaVersion": 1,
      "name": "Xulgath Warrior",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "xulgath"
      ],
      "description": "Xulgath warriors strike with fury and eager cruelty, always ready for the next fight. The taking of prizes from battle—including weapons and items stolen from defeated foes along with grislier trophies harvested from fallen victims' flesh—is a popular pursuit among these vicious reptiles, and those whose armor and scales are most adorned are awarded the greatest respect (and perhaps fear) from their kin.\nReptilian humanoids who live in the uppermost reaches of the Darklands, xulgaths (known as troglodytes to many surface-dwelling folk) often attack intruders in their territory on sight. They live in simple familial communities called clutches, battling rival groups and other aggressive Darklands inhabitants in order to survive. They occasionally raid surface settlements, usually at the behest of cruel, bloodthirsty leaders who are often themselves in the thrall of more powerful creatures like nagas or demons. A typical xulgath has dull gray, dark gray, or ashen scales, with a long tail and bony protrusions that run the length of their spine. A typical xulgath is 5 feet tall and weighs 150 pounds.\nAlthough today the xulgaths are brutal and scattered, they were one of the first intelligent humanoids to rise in the primeval world, once ruling over a mighty empire that stretched throughout the Darklands. Today, all that remains of this era are ruins of massive stone ziggurats and crumbling cities found within some of the larger caverns. Some groups of xulgaths continue to live among these ruins, venerating their ancestors' accomplishments, while others consider these areas taboo and leave them to become infested with Darklands vermin. Sages don't agree on why the ancient xulgath civilization fell. Some suspect it was the result of losing several wars waged against serpentfolk, while others suggest that the corruptive influence of demon worship rotted their culture from within.\nCertainly, many xulgath settlements continue to worship demons to this day, paying homage and offering live sacrifices to demons or other terrible creatures from the Outer Rifts. Occasionally, a xulgath mystic can call forth and bind a lesser demon to help serve the group, but one who delves too deep into occultism might summon a more powerful fiend that either tears the xulgaths to pieces or seizes control of the settlement.",
      "armorClass": 14,
      "hitPoints": 21,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
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
        "stealth": 5
      },
      "languages": [
        "draconic",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "puh52kwYDM4gZi1Z",
          "name": "Club",
          "bonus": 9,
          "damage": "1d6+4 bludgeoning",
          "traits": []
        },
        {
          "id": "b2WLYPv43nso3X3U",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "C77jgOGQyRA9OepX",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d4+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "a2vmCuPpbC3JaPX5",
          "name": "Club",
          "bonus": 7,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "MfBsuZaAMldux4Xb",
          "name": "Javelin",
          "bonus": 7,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "zlyDIItWyUk1W7UC",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:16, options:area-effect,inflicts:sickened,inflicts:slowed)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:umbral-gnome-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "63gNd2JNUDcAjYzo",
      "slug": "umbral-gnome-scout",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cb9b16beed4a0fa259a955d624c12566a8d2fee59dece2f7d33d32dbcead739c",
    "translatableHash": "sha256:3f90418e5d5f543809e26358f46c4e8975c4d0e468b0b9c9f80d5682d30e13a0",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Gnome Scout",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "Umbral gnome scouts patrol the tunnels that lead into their settlements.\nGnomes are known for being creative and curious. They stand at around 3 feet tall, and their vivid personalities match their naturally vivid hair and eye color. Gnomes possess a natural connection to their ancestral home, the First World. They crave adventure and new experiences to fight off an ancestry-wide affliction known as the Bleaching. Gnomes who fail to dream and innovate begin to slowly lose their color and fall into a deep depression.\nA notable subgroup of gnomes called umbral gnomes typically have gray or brown skin with a stony texture, and thin, pale hair or bald pates. Umbral gnomes are most numerous in the Darklands, where they go by the name drathnelar. Umbral gnomes often attribute these physical changes to the gnome deity regarded as the first of their kind, Nivi Rhombodazzle. Nivi was a surface gnome who traveled deep into the Darklands and was ultimately rewarded with demigodhood when she exchanged a particular gemstone with the dwarven deity, Torag. Nivi is immune to the Bleaching, and umbral gnomes are often immune or resistant to it as well.",
      "armorClass": 17,
      "hitPoints": 18,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 7,
        "nature": 5,
        "stealth": 7,
        "survival": 5
      },
      "languages": [
        "gnomish",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "WLWmgPx0MfGb1F5z",
          "name": "Light Pick",
          "bonus": 7,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "fatal-d8"
          ]
        },
        {
          "id": "2vwlAmF93myITMjw",
          "name": "Sling",
          "bonus": 9,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "mGL7tbh4lfdWIVfJ",
          "name": "Hidden Movement",
          "kind": "passive",
          "description": "If the umbral gnome scout starts its turn Undetected or Hidden to a creature, that creature is Off-Guard against the umbral gnome scout's attacks until the end of the turn."
        }
      ],
      "spellcasting": [
        {
          "id": "zGWjXyKd5cavgSYJ",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 6,
          "saveDc": 14,
          "spells": [
            {
              "id": "IEDAb8vleQQ6PinE",
              "name": "Illusory Disguise",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:rat-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6wPW2dvpt86Ou6bL",
      "slug": "rat-swarm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3ea529e759cf66511c0f48959eb35a592293dbed32d2b3474344c3d00e9cf26a",
    "translatableHash": "sha256:cba7b860dff6a4a4d159e2cb85e865ef1e1740ffaab659f714874e5967d47ec2",
    "data": {
      "schemaVersion": 1,
      "name": "Rat Swarm",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "A swarm of rats can cause total chaos within a household or business. Contracting putrid plague is all the easier when dozens of these agitated or hungry vermin gather to bite victims en masse, making rat-hunting a viable career in many parts of the world as desperate townspeople seek relief from the disease's spread.\nRats are a ubiquitous menace, scurrying through the sewers and on the streets of nearly every settlement in the world. Though a regular rat darting underfoot might startle or even frighten the average passerby, giant rats and rat swarms are far more dangerous.",
      "armorClass": 14,
      "hitPoints": 14,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
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
        "int": -4,
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
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "physical 6 except bludgeoning"
        ],
        "weaknesses": [
          "area-damage 3",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "3wWPzjr3ra62ks2k",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "DiGgJNOY5Na3eYp8",
          "name": "Putrid Plague",
          "kind": "passive",
          "description": "The Sickened and Unconscious conditions from putrid plague don't improve on their own until the disease is cured.\nSaving Throw check (fortitude, dc:14)\nStage 1 carrier with no ill effect ([[/gmr 1d4 #hours]]{1d4 hours})\nStage 2 Sickened 1 (1 day)\nStage 3 Sickened 1 and Slowed 1 (1 day)\nStage 4 Unconscious (1 day)\nStage 5 dead"
        },
        {
          "id": "LTwSnVSVWZeWrLAC",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d6[piercing|options:area-damage] damage and must attempt a check (reflex, dc:17, basic, options:area-effect) save. A creature that fails its save is exposed to putrid plague."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:cacodaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9Bl1ua3uLqodv47s",
      "slug": "cacodaemon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1e3f2c22758ff586fb1ff86fc6cad92de29beb9c7afa2b64fd51ad76898dc8b7",
    "translatableHash": "sha256:21c8d3173d34c0d68de898dadad44826fd89745c3bf1baa314f2e2cb2dcb491d",
    "data": {
      "schemaVersion": 1,
      "name": "Cacodaemon",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "These twisted embodiments of violence and spite are spawned from eddies of angry and warped souls amid Abaddon's mists. Cacodaemons constantly hunger for mortal souls and yearn to create suffering. As gnashing spheres of teeth, fins, and spines, they are the weakest of daemonkind, an amalgam of various petty forms of death without the strength that comes from focusing on a single cause of demise.\nDenizens of the bleak and terrible plane of Abaddon, daemons are shaped by and devoted to the destruction of life in all its forms. They seek the death of every mortal being by the most painful and horrible means possible, in service to the Apocalypse Riders. Each kind of daemon represents a different way to die, and their powers are nearly always aimed at spreading that particular form of death. Through the use of these powers, they seek to drag all existence down into a pit of hopelessness and despair, and to commit all souls to oblivion.\nWhile mortals who summon daemons usually seek to use the creatures' destructive and corrupting powers for their own ends, daemons always look for ways to spread fear, doubt, and despair wherever they go. Often, daemons disguise their plots as the workings of other fiends, knowing that such confusion compounds mortals' fear and keeps those mortals from bringing the most effective weapons. As a result, learned mortals sometimes refer to daemons as \"riders\" after their leaders or \"soul mongers\" after their largest industry.\nWhile many fiends seek to tempt mortals into lives of nihilistic evil to increase their own numbers and power on their native planes, daemons are further driven by a supernatural hunger for mortal souls and use a variety of methods—not least of which is the cacodaemons' soul gems—to entrap them. On Abaddon and in other forbidding places across the multiverse, souls are simultaneously a delicacy, a trade good, and a source of magical power, and the daemons are among the greatest gluttons, merchants, and abusers of this spiritual \"resource.\"",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 5,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "deception": 5,
        "religion": 6,
        "stealth": 8
      },
      "languages": [
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 3"
        ]
      },
      "attacks": [
        {
          "id": "aeJceILHyteCIR57",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8 piercing",
          "traits": [
            "agile",
            "disease",
            "finesse",
            "magical",
            "reach-0",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "M1Iy4WjF2HRmGv0e",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "mI36i6vMRMQo5xUR",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "1N7APEdVVZHtrMup",
          "name": "Cacodaemonia",
          "kind": "passive",
          "description": "The cacodaemon can telepathically communicate with the afflicted creature at any distance on the same plane.\nSaving Throw check (fortitude, dc:17)\nStage 1 carrier (1 day)\nStage 2 Stupefied 1 (1 day)\nStage 3 Stupefied 2 (1 day)"
        },
        {
          "id": "6OspJylC319MBk17",
          "name": "Change Shape",
          "kind": "action",
          "description": "• Lizard\n• Speed 20 feet\n• Melee jaws +8 (agile, finesse), Damage 1d8+1 piercing\n• Octopus\n• Size Small\n• Speed 20 feet, swim 30 feet\n• Skills Athletics +6\n• Melee tentacle +8 (finesse), Damage 1d8+1 bludgeoning plus Grab\n• Melee beak +8 (agile, finesse), Damage 1d6 piercing plus 2 poison\n• Scorpion\n• Size Small\n• Speed 30 feet\n• Skills Athletics +6\n• Melee pincer +8 (agile, finesse), Damage 1d6+1 bludgeoning plus Grab\n• Melee stinger +8 (agile, finesse), Damage 1d6+1 piercing plus 1d4 poison"
        },
        {
          "id": "glwIs2UR3O1wG0tc",
          "name": "Soul Lock",
          "kind": "action",
          "description": "Frequency once per day\nEffect The cacodaemon ingests the soul of a sentient creature within 30 feet that died within the last minute. When they do, the cacodaemon grows a fist-sized soul gem (Hardness 2, HP 8) in their gut and can regurgitate it at any time as an Interact action. Destroying the gem frees the soul within but doesn't return the deceased creature to life. If a caster attempts to return to life a creature whose soul is trapped within a soul gem, they fail unless they succeed at a check (religion, dc:30) check. A success causes the soul gem to shatter so the creature is returned to life as normal for the spell.\nA fiend can Interact to ingest a soul gem it is holding, condemning the soul to the fiend's home plane. The fiend gains fast healing 5 for 1 minute.\nEffect: Soul Lock (Healing)"
        }
      ],
      "spellcasting": [
        {
          "id": "kkOWzP3DmckLh5vC",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "L225wlWMZnWKniMQ",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "5DRYdDyPAM6YjcUl",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "IeYHBdNAWLIqzRuF",
              "name": "Invisibility (At Will) (Self Only)",
              "rank": 2
            },
            {
              "id": "VHi954UQx6AH0a5N",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sewer-ooze",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9InGpxq5xbbHaL9f",
      "slug": "sewer-ooze",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b65092723cc1dd759d086f34ac12dfaf99f655eb56c962106a6e4596c75582a0",
    "translatableHash": "sha256:d288e8ba067de4256a28cf98a52c57454fcaf783a7fc741d5d38c0d975ce6b0f",
    "data": {
      "schemaVersion": 1,
      "name": "Sewer Ooze",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "ooze"
      ],
      "description": "These amorphous masses of sewage and other detritus make their way through filthy culverts beneath cities large and small.\nSlimes, molds, and other oozes can be found in dank dungeons and shadowed forests. While not necessarily evil, some grow to enormous sizes and have insatiable appetites.",
      "armorClass": 8,
      "hitPoints": 40,
      "speedFeet": 10,
      "perception": {
        "modifier": 3,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 1,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": -5,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "stealth": 1
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "critical-hits",
          "precision",
          "unconscious",
          "visual",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "YXsM6AcguDWAwVIt",
          "name": "Pseudopod",
          "bonus": 9,
          "damage": "1d6+1 bludgeoning; 1d4 acid",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VwrlDdZczBGO5Ps4",
          "name": "Motion Sense 60 feet",
          "kind": "passive",
          "description": "A sewer ooze can sense nearby motion through vibration and air movement."
        },
        {
          "id": "mdqK7RuSjtezVyS8",
          "name": "Filth Wave",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The sewer ooze unleashes a wave of filth, covering all creatures in a @Template[emanation|distance:20]. Each creature in the area must succeed at a check (reflex, dc:17, options:area-effect,damaging-effect) save or take 1d4[acid|options:area-damage] damage and take a –10-foot penalty to its Speeds for 1 minute (on a critical failure, the creature also falls Prone).\nA creature can spend an Interact action to clean someone off, decreasing the Speed penalty by 5 feet with each action.\nEffect: Filth Wave"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:cassisian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9qERA2jk7Yv74Hqq",
      "slug": "cassisian",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:531b81bd7ae54be2602bc42cc0ad897baf8d396b40fa7471b572ffd400bd41ef",
    "translatableHash": "sha256:f57c758b1628bc33f085a2170ef4bc6d7f78e906785c3e5fe87ff7127b62aaea",
    "data": {
      "schemaVersion": 1,
      "name": "Cassisian",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "angel",
        "celestial",
        "holy"
      ],
      "description": "The weakest of angels, cassisians usually serve as lackey messengers for more powerful angels or as spiritual guides for mortals. Despite their limited intellect, cassisians have a knack for precise recollection, particularly with scripture. Most cassisians are formed from the souls of trustworthy mortals, but some arise from fragments of greater angels destroyed in service to the celestial realms.\nThe celestial hosts of angels are messengers and warriors, divided into choirs based on their abilities and purviews. Angels were one of the first creations of the gods, and many still assist their righteous creators throughout the cosmos. Most angels in modern times are not direct creations of the divine, however, instead consisting of ascended mortal souls drawn from the celestial planes.\nThe majority of unaffiliated angels live in Nirvana, the plane of virtue and enlightenment. Angels who are affiliated with deities dwell in those deities' domains or other areas where that god holds influence. Regardless of residence or service, angels remain benevolent messengers possessed with magical auras to aid their allies.",
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
        "fortitude": 7,
        "reflex": 6,
        "will": 4
      },
      "abilities": {
        "str": -1,
        "dex": 1,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "diplomacy": 6,
        "religion": 6,
        "stealth": 6
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 3",
          "fire 3"
        ],
        "weaknesses": [
          "unholy 3"
        ]
      },
      "attacks": [
        {
          "id": "Twvyl7AMsgVTko6u",
          "name": "Headbutt",
          "bonus": 6,
          "damage": "1d6-1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "holy",
            "magical",
            "reach-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "wi6kRX7y3GEzA2GC",
          "name": "+1 Status to All Saves vs. Unholy Creatures",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nADuGHZ6VM9Kpi47",
          "name": "+1 Status to AC vs. Unholy Creatures",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "botvN8o1GKlyczJu",
          "name": "Transfer Protection",
          "kind": "passive",
          "description": "A creature can wear a willing cassisian as a helmet. While it does, the cassisian can't act, but the cassisian extends their +1 status bonus to AC and saves against unholy creatures to their wearer. At any time, the cassisian can detach themself from their wearer as a single action.\nEffect: Transfer Protection"
        },
        {
          "id": "E0mO28h15c34tr9P",
          "name": "Change Shape",
          "kind": "action",
          "description": "A cassisian can take the appearance of a dove, a winged humanoid, a dog, or a fish. Normally, this doesn't change their Speed or the attack and damage bonuses for their Strikes, but it might change the damage type Strikes deal (typically to bludgeoning). Any further changes for specific forms are noted below.\n• Dog\n• Size Small;\n• Scent (Imprecise) 30 feet,\n• Speed 40 feet;\n• Skills Athletics [[/r 1d20+6]]{+6};\n• Melee 1 jaws +7, Damage 1d6+2 piercing plus Knockdown\n• Fish\n• Speed Swim 30 feet"
        },
        {
          "id": "nlXD4kgKurvpC2DF",
          "name": "Eye Beams",
          "kind": "action",
          "description": "The cassisian releases beams of heat or cold from their eyes, dealing 2d6 2d6[cold|options:area-damage]{cold} or 2d6[fire|options:area-damage]{fire} damage (check (reflex, dc:17, basic, options:area-effect) save) to all creatures in a @Template[line|distance:15]. They can't use Eye Beams again for [[/gmr 1d4 #Recharge Eye Beams]]{1d4 rounds}."
        },
        {
          "id": "jXbtX8mGANK1K6FL",
          "name": "Repository of Lore",
          "kind": "passive",
          "description": "While the cassisian isn't particularly intelligent, they have perfect memory and can remember everything they see or hear. This allows them to attempt Lore checks on any topic, provided (at the GM's discretion) they've encountered the topic in question before. The cassisian's limited intellect often prevents them from acting upon their knowledge, making them a better resource than agent in using information."
        },
        {
          "id": "2t2OOi36nCLRa4xe",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "HXUHMpQeRheVq9OM",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "KALo6JgDuS3Lk9dD",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "unkfiXyybviUdoaV",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "ivwjVWe8eLy1x9a5",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "QvAZDsBRoADi7f2d",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:gnome-bard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9XccneFB5DmMHig0",
      "slug": "gnome-bard",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0cd80995f77db715f566e62639c85ee531cd4b41d96939ce3fe9298d006b45bb",
    "translatableHash": "sha256:66248c52a2572520e225b3a7073956c852c5c41b1effad4afebf9e115dda9b7e",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Bard",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "Being a bard allows a gnome a wonderful excuse to constantly travel and see new places while simultaneously creating wonderful things. Occasionally, these bards have a reputation for inappropriate or socially critical performances.\nGnomes are known for being creative and curious. They stand at around 3 feet tall, and their vivid personalities match their naturally vivid hair and eye color. Gnomes possess a natural connection to their ancestral home, the First World. They crave adventure and new experiences to fight off an ancestry-wide affliction known as the Bleaching. Gnomes who fail to dream and innovate begin to slowly lose their color and fall into a deep depression.\nA notable subgroup of gnomes called umbral gnomes typically have gray or brown skin with a stony texture, and thin, pale hair or bald pates. Umbral gnomes are most numerous in the Darklands, where they go by the name drathnelar. Umbral gnomes often attribute these physical changes to the gnome deity regarded as the first of their kind, Nivi Rhombodazzle. Nivi was a surface gnome who traveled deep into the Darklands and was ultimately rewarded with demigodhood when she exchanged a particular gemstone with the dwarven deity, Torag. Nivi is immune to the Bleaching, and umbral gnomes are often immune or resistant to it as well.",
      "armorClass": 16,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 5,
        "deception": 7,
        "diplomacy": 5,
        "intimidation": 7,
        "performance": 7,
        "stealth": 5
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
      "attacks": [],
      "actions": [
        {
          "id": "GfHdH66gQw6A7IbC",
          "name": "Gnomish Shift",
          "kind": "reaction",
          "description": "Trigger The gnome bard would take damage\nEffect The gnome bard gains resistance 2 to the triggering damage and teleports to an adjacent space."
        },
        {
          "id": "lpn1X46g2bCqCbd3",
          "name": "Do a Jig!",
          "kind": "action",
          "description": "The gnome bard plays a ditty that inspires dance. One creature within 30 feet must make a check (will, dc:19) saving throw.\nSuccess The target is unaffected.\nFailure The target must waste 1 action on its next turn dancing.\nCritical Failure The target must waste 2 actions on its next turn dancing."
        }
      ],
      "spellcasting": [
        {
          "id": "63bWc2t3gBmtcims",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "Ia4ZiEmapTC1k3h2",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "EnLLRrlK79a2HEjX",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "bDa0wmFwVwYPeppy",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "qxdjSNg2Cw8qfxwV",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "zNVW2IDcN84QYXaD",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "vutamcxkndsleckZ",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "bEyUqMDP5VhiteBn",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "32213q42WcbzD8LZ",
              "name": "Summon Instrument",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hunting-spider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "A4VgQIHsqJKssQOM",
      "slug": "hunting-spider",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b2fc1706d5df78b4f0fdbbc93954e61ce61fe7ecc22a5d05f8e4cbcc533fd5c",
    "translatableHash": "sha256:816d256b3b9df11cf90ff76d6ec8bdaa3bb8a68db4cd02b69e31e13101c8b949",
    "data": {
      "schemaVersion": 1,
      "name": "Hunting Spider",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Hunting spiders are the most common type of giant spider, though not the largest.\nFew everyday vermin inspire as much dread as the infamous spider.",
      "armorClass": 17,
      "hitPoints": 16,
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
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": -5,
        "wis": 2,
        "cha": -4
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 5,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IUA7ZWVTepsameDv",
          "name": "Fangs",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "ir8tXGoz964QTWmv",
          "name": "Web",
          "bonus": 7,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "DbfLZXVZVTQMJoyI",
          "name": "Web Sense",
          "kind": "passive",
          "description": "The hunting spider has imprecise tremorsense to detect the vibrations of creatures touching its web."
        },
        {
          "id": "4lmj5hd20I5GvQJz",
          "name": "Spring Upon Prey",
          "kind": "reaction",
          "description": "Requirements Initiative has not yet been rolled.\nTrigger A creature touches the hunting spider's web while the spider is on it.\nEffect The hunting spider automatically notices the creature and Strides, Climbs, or Descends on a Web before it rolls initiative."
        },
        {
          "id": "tHBnPDgoj9trVlBk",
          "name": "Descend on a Web",
          "kind": "action",
          "description": "The hunting spider moves straight down up to 40 feet, suspended by a web line. It can hang from the web or drop off. The distance it Descends on a Web doesn't count for falling damage.\nA creature that successfully Strikes the web (AC 20, Hardness 3, 5 HP) severs it, causing the spider to fall."
        },
        {
          "id": "egV0y60X9Okkmuoc",
          "name": "Hunting Spider Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Off-Guard (1 round)\nStage 2 1d6[poison] damage, Clumsy 1, and off-guard (1 round)\nStage 3 1d6[poison] damage, Clumsy 2, and off-guard (1 round)"
        },
        {
          "id": "Qy7s2ZDFTvr7xR1m",
          "name": "Web Trap",
          "kind": "passive",
          "description": "A creature hit by the hunting spider's web Strike is Immobilized and stuck to the nearest surface until it [[/act escape dc=17]]{Escapes}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:plague-zombie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "aWiTcxAySoYjUP6T",
      "slug": "plague-zombie",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:48ecfedd914e2550f3b03f2996d996ba41b70ab2030fb9390ea4d4bc4997143c",
    "translatableHash": "sha256:91e9dd4c2d86a178996acbad880cf891c3a85e3e1a13072a96ac123a72e635ba",
    "data": {
      "schemaVersion": 1,
      "name": "Plague Zombie",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "Plague zombies are infested with horrible contagions.\nA zombie's only desire is to consume the living. Unthinking and ever-shambling harbingers of death, zombies stop only when they're destroyed.",
      "armorClass": 13,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 3,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": -2,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 9
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
        "resistances": [],
        "weaknesses": [
          "vitality 10",
          "slashing 10"
        ]
      },
      "attacks": [
        {
          "id": "tvnn3d6VCprLkoQ2",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d8+4 bludgeoning",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "MuiyXm8KyQF57NaW",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d12+4 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "a2pZeef5wn9y5xAA",
          "name": "Slow",
          "kind": "passive",
          "description": "A zombie is permanently Slowed 1 and can't use reactions."
        },
        {
          "id": "Jcl5rz38QkHYDfHx",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "RhGXKyPEo0bWS5D1",
          "name": "Zombie Rot",
          "kind": "passive",
          "description": "An infected creature can't heal damage it takes from zombie rot until it has been cured of the disease.\nSaving Throw check (fortitude, dc:18)\nStage 1 carrier with no ill effect (1 day)\nStage 2 1d6[void] damage (1 day)\nStage 3 1d6[void] damage (1 day)\nStage 4 1d6[void] damage (1 day)\nStage 5 dead, rising as a plague zombie immediately"
        },
        {
          "id": "MRMj6jc7E8e5c7UF",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:war-pony",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BMpBXSq8T20WdUDl",
      "slug": "war-pony",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2b58d9bd02744b4acfc98625aac15ddd4db4ce2165ff482aedde2314a9ad9e82",
    "translatableHash": "sha256:a074df595d41eb03b92725f2457fb4c9e47ec7dfca792019743eb315ce3379b6",
    "data": {
      "schemaVersion": 1,
      "name": "War Pony",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Horses serve as mounts and beasts of burden in many societies. They are loyal and typically gentle creatures, and they are invaluable to those looking to travel long distances. Smaller folk, like gnomes and halflings, often utilize ponies as mounts, while horses are the favored steeds for humans and other Medium humanoids. Most horses that the average humanoid encounters are domesticated, though large herds can be found in the wild.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 35,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "zKwj4CDPZ698YJci",
          "name": "Hoof",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "ogjALspcg7GVz79c",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:16)"
        },
        {
          "id": "b8kddR2Im2nSOnDM",
          "name": "Gallop",
          "kind": "action",
          "description": "The war pony Strides twice. It has a +10-foot circumstance bonus to its Speed during these Strides."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hippocampus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CHVMOXznjUDcb3XP",
      "slug": "hippocampus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf74d67595135c7f9b0b89f0f30a55e4d66730eb9ca5d6302f9ca599068dd620",
    "translatableHash": "sha256:e78a5c661b3dacaf5b32e3df867db6acfea2cc6a47fc78d73b4b4bd6ac8dc839",
    "data": {
      "schemaVersion": 1,
      "name": "Hippocampus",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Hippocampi serve as steeds for aquatic humanoids or roam wild in the sea.\nThe strange beasts known as hippocampi resemble terrestrial horses from head to midbody, but on their legs, they have splayed fins instead of hooves, and in place of horses' hindquarters, they have powerful tails resembling those of fish. Hippocampi have colorful scales ranging from pearly white to seaweed green, and brilliant ribbed dorsal fins as manes. In the wild oceans, most types of hippocampi tend to congregate in the shallows near the beds of seaweed and kelp forests that provide them with food and shelter from predators. They form huge schools to provide safety in numbers, like landbound horses form herds.\nHippocampi are highly prized by undersea societies and surface dwellers alike, as they are as easy to train as horses and serve many of the same functions, be that as beasts of burden, war-trained mounts, transportation, or as pets. Though hippocampi are able to wear barding, it hampers them considerably, so most handlers outfit them with the lightest options available. More often, they are trained to pull specially designed underwater chariots or sleds. Hippocampi don't like to leave the water, as they are clumsy on land, can't bear riders while flopping about on the ground, and can't breathe air for long.\nNumerous variant species of hippocampi exist, although most of them differ from the common hippocampus only in coloration. Heartier species, such as polar hippocampi, dwell exclusively in arctic waters and are best presented as hippocampi with elite adjustments.",
      "armorClass": 15,
      "hitPoints": 24,
      "speedFeet": 5,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 4,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": -4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 4,
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7mVYoMlm7knbjqzo",
          "name": "Tail",
          "bonus": 7,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "KJVejaONCwwGt9ka",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:17)"
        },
        {
          "id": "LYeMRFsmLZRCk3uE",
          "name": "Sudden Retreat",
          "kind": "action",
          "description": "The hippocampus makes a tail Strike, then Swims with a +10-foot circumstance bonus to its swim Speed. It gains a +2 circumstance bonus to AC against reactions triggered by this movement."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:voidworm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ciLdEf6sld8h2a2j",
      "slug": "voidworm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8b8e26a72ada98fab2f81647fb7aca11d630b117ed699ee821d51c765b0f5714",
    "translatableHash": "sha256:8f63bbc2b6eaf97c1927a280e43d76f954a4dcd67b1031e1006f7c33e2cb7185",
    "data": {
      "schemaVersion": 1,
      "name": "Voidworm",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "monitor",
        "protean"
      ],
      "description": "Other proteans don't consider the flying, iridescent beings known as voidworms to be part of a protean caste at all, but instead merely a shameful side effect of the Maelstrom's constantly churning energy. To call a voidworm a protean in the presence of a more powerful protean is a sure a way to instigate combat.\nVoidworms themselves have little interest in whether anyone sees them as proteans. They maintain a thriving ecology in the Maelstrom, frolicking in schools of up to 20 and playing in the chaos of constantly shifting realities. Elsewhere (such as in the Universe), voidworms are mesmerized by the principle of object permanence; many latch onto specific features of a region (such as a hillside or pond) and flit through the air around it for months or even years as they wait for the object of their curiosity to change. Minor changes—such as a tree's change of color in the fall, a corpse's slow decay, or periodic venting of steam from a geyser—all fascinate voidworms. A voidworm is about 2 feet long and weighs 2 pounds.\nGuardians of disorder and natives of the primal plane of chaos known as the Maelstrom, proteans consider it their calling to spread bedlam and hasten entropic ends. The most powerful proteans are demigods known collectively as the protean lords, although they are mysterious entities whose cults in the Universe tend to be obscure and secretive.\nProteans divide themselves into a loose caste system and possess a dizzying variety of powers. Most proteans have a serpentine body with the head of a primeval beast. Scholars have long been intrigued by this fact—that scions of dissolution and disorder would share so many features—pointing out that there is some semblance of order even in the purest chaos. Others note that the serpentine form is one of the most primeval shapes, perhaps suggesting that in a reality at the dawn of time, such shapes were all that could exist. The proteans themselves have little to say on the matter, which, perhaps ironically, only adds to the confusion and lack of consensus surrounding their kind. After all, if even chaos cannot be trusted to be chaotic, would that not be the purest form of entropy?",
      "armorClass": 17,
      "hitPoints": 16,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": -1,
        "dex": 4,
        "con": 0,
        "int": -1,
        "wis": -1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "deception": 6,
        "religion": 4,
        "stealth": 7
      },
      "languages": [
        "chthonian",
        "protean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "precision 3",
          "protean-anatomy 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ibaCsks8puTwETeL",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d8+1 piercing",
          "traits": [
            "finesse",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "dupLF5DYOhmcq8LG",
          "name": "Tail",
          "bonus": 9,
          "damage": "1d4 + 1 slashing",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "tGAFUCC4Emx6CfMD",
          "name": "Entropy Sense (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A voidworm can anticipate the most likely presence of a creature through a supernatural insight into chaotic probabilities and chance. This grants them the ability to sense creatures within the listed range. Veil of Privacy prevents a creature from being detected via entropy sense automatically (without a counteract check)."
        },
        {
          "id": "6i8TGhbPoCodXsn0",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5U4QH2sM8ipWEAcR",
          "name": "Fast Healing 1",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "GsuMeqU77NP6vTqI",
          "name": "Protean Anatomy 5",
          "kind": "passive",
          "description": "A voidworm's vital organs shift and change shape and position constantly. Immediately after the voidworm takes acid, electricity, or sonic damage, they gains the listed amount of resistance to that damage type. This lasts for 1 hour or until the next time the voidworm takes damage of one of the other types (in which case its resistance changes to match that type), whichever comes first.\nThe voidworm is immune to polymorph effects unless it is a willing target. If Blinded or Deafened, the voidworm automatically recovers at the end of its next turn as new sensory organs grow to replace the compromised ones.\nEffect: Protean Anatomy"
        },
        {
          "id": "IGHgjWHfJlqh674F",
          "name": "Change Shape",
          "kind": "action",
          "description": "The voidworm takes on the appearance of a Tiny animal. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal."
        },
        {
          "id": "cL0kuYeKKUFMb9w0",
          "name": "Confounding Lash",
          "kind": "passive",
          "description": "A creature hit by the voidworm's tail Strike is Stupefied 1 for 1 round (Stupefied 2 on a critical hit). A successful check (will, dc:16) save negates this effect and grants temporary immunity to confounding lash for 1 minute."
        }
      ],
      "spellcasting": [
        {
          "id": "eczygEywMNK3dNd7",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "dkgb4C61bryITVZP",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "UJ1kbq3H1fAhY9wX",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "QOVC2hI62wqn32IB",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "vmmLfmexmmBOGX2L",
              "name": "Blur (Self only)",
              "rank": 2
            },
            {
              "id": "l5DC8kfTCzPgnGML",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "NSqJU8vCycZbEbQi",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "r6Pc6lb79rLAcgmu",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:riding-horse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CLf9k9A9ApTAkZeL",
      "slug": "riding-horse",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cd4889cbc11d6f2ee68deb01d918e65d7a4106f0d96b79b2ad0477f76cf686a5",
    "translatableHash": "sha256:bba09426fde0ad184d41f96222030084a44e7e854e549bd1f014a455ab1d7904",
    "data": {
      "schemaVersion": 1,
      "name": "Riding Horse",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Horses serve as mounts and beasts of burden in many societies. They are loyal and typically gentle creatures, and they are invaluable to those looking to travel long distances. Smaller folk, like gnomes and halflings, often utilize ponies as mounts, while horses are the favored steeds for humans and other Medium humanoids. Most horses that the average humanoid encounters are domesticated, though large herds can be found in the wild.",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 40,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "3GFUGIkhpZDZer4p",
          "name": "Hoof",
          "bonus": 7,
          "damage": "1d6+4 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Mf7Y2TxYr2e5o2Ht",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:16)"
        },
        {
          "id": "I1o6uYgy06gzdYSk",
          "name": "Gallop",
          "kind": "action",
          "description": "The riding horse Strides twice. It has a +10-foot circumstance bonus to its Speed during these Strides."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:naiad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Cqi8jadYpUTajIC6",
      "slug": "naiad",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6df6eebcff3a198970042065956faeb2b555e059291be787171f76a49fc3d443",
    "translatableHash": "sha256:4589b88ed6a85ad0cf65f1453cfb3a33d91657c12fc160f78490dd309997ae3e",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "fey",
        "nymph",
        "water"
      ],
      "description": "Naiads protect streams, ponds, springs, and other natural bodies of fresh water. While most naiads lead solitary lives close to their chosen home, sometimes they congregate in coven-like groups where river tributaries meet, performing great magic and blessing the waters of the land. Because naiads' bonds to their bodies of water permit more flexibility, they are the nymphs most likely to interact with humanoids—and even visit their settlements on occasion. Unlike other nymphs, naiads occasionally become adventurers, especially when dark forces seek to despoil nature or otherwise threaten the land, joining forces with others to prevent the corruption of the natural world.\nNymphs are a family of fey that take the form of beautiful humanoids with elven features and have a deep association with the natural world. The most common of their kind are the dryads, which are spirits that embody great trees, but many other kinds of nymphs exist, including naiads, who watch over bodies of water. All nymphs are guardians of some element of nature, typically a specific tree or pond, or even-in the case of nymph queens-whole forests or massive bodies of water",
      "armorClass": 14,
      "hitPoints": 20,
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
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 3,
        "diplomacy": 7,
        "nature": 6,
        "stealth": 6,
        "survival": 4
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
          "id": "WIHK77N13bnY09Iq",
          "name": "Aqueous Fist",
          "bonus": 8,
          "damage": "1d8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "water"
          ]
        },
        {
          "id": "mwp4IZXtO7uw523C",
          "name": "Water Orb",
          "bonus": 8,
          "damage": "1d6 bludgeoning",
          "traits": [
            "magical",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "rL7A4RH2uX8GGbWM",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals."
        },
        {
          "id": "WGKxmcUB8pYq06Qv",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "XQKbqAKqILs3dbvQ",
          "name": "Water Dependent",
          "kind": "passive",
          "description": "A naiad is bonded to a spring, pond, or similar-sized water feature. If she is more than 300 feet away from it for 24 hours or more, she gains the weak adjustments until she returns. She can perform a 24-hour ritual to bond herself to a new body of water."
        },
        {
          "id": "qd9QFtwsgr9c7yLU",
          "name": "Water Healing",
          "kind": "passive",
          "description": "For every 10 minutes a naiad spends soaking in her bonded body of water, she regains 7[healing]{7 Hit Points}."
        }
      ],
      "spellcasting": [
        {
          "id": "uv0UDH4jDwetNZol",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "ApF8uAx5FK1nKQ4M",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "0br4qMZgu9KOMtNp",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "i3Fpsz6r2TG0qeA2",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "EzMf1ygDaQq42MG6",
              "name": "Tidal Surge (At Will)",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:riding-dog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ECe2DkOgSSqXHBqv",
      "slug": "riding-dog",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0d85147693cf5a37c298b2d04b6dc1b8591a14fcf74a9b8fd006790f8752981a",
    "translatableHash": "sha256:d94dadfd5ec51fd8505e21e9982cf24517b2c5fc0f4e41a9052aafb3fb9c38f2",
    "data": {
      "schemaVersion": 1,
      "name": "Riding Dog",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Riding dogs types include larger dogs, such as mastiffs, wolfhounds, and huskies, and are bred often by halflings and gnomes to serve as mounts. Riding dogs are as loyal and devoted to their masters as guard dogs and ferocious in battle, regardless of whether they bear a rider or not. As with guard dogs, these large hounds can be wild or feral in nature, and in such cases might rival wolf packs in the danger they pose to inhabitants of rural areas.\nDogs are trusted and loyal companions that serve as guardians, tracking animals, and pets. Their ability to detect prey or predators via scent and their predilection to accompany humanoids makes them ideal pets for most adventurers. There are hundreds of breeds of dogs in the world—from tiny lapdogs who shower their masters in affection to brawny hounds that stand nearly 4 feet high at the shoulder—and they can be found in nearly any place where people reside. Larger breeds might even be used as mounts for smaller adventurers, and some cultures use dogs as beasts of burden capable of pulling sleds loaded with supplies across the icy tundra. Regardless, many adventurers find value in having a dog.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 35,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 7,
        "survival": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ZP2IXAQnslTJ2Yfq",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ERaLBCCkqUJWJVvG",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:17)"
        },
        {
          "id": "FhLr7TEb7n9FRT5I",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The dog's Strikes deal 1d4 extra damage to creatures within the reach of at least two of the dog's allies."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:gourd-leshy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "f9fjSDdcBKkEPoIi",
      "slug": "gourd-leshy",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:318caae3300100b8a2ebaa51a2ee031095abd0efd4cbf9f53e36e72300880fa8",
    "translatableHash": "sha256:040ac7edaa98c0d774fae47f8a49ad45a4d59c3bf75642f29ac1695083e8a471",
    "data": {
      "schemaVersion": 1,
      "name": "Gourd Leshy",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "leshy",
        "plant"
      ],
      "description": "Gourd leshies are guardians of fields, gardens, and farms. Many villages benefit from the protection of a gourd leshy, even if they are unaware of it.\nLeshies are intelligent plant creatures who guard areas of primeval wilderness or earthly power. Originally created by powerful fey, they manifest when a skilled practitioner of primal magic—typically a druid—combines a nature spirit with a body carefully grown and crafted from local vegetation. The rites and materials required to create a leshy vary depending on the type of leshy. They are typically given life in an area of great natural significance, such as an arboreal's grove, a druidic circle, a fairy ring, or a great natural wonder.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "nature": 5,
        "stealth": 7
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
          "id": "B5U0kqS1gFhaSpqc",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "eg7TTGELwmYoMNM7",
          "name": "Seed",
          "bonus": 9,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "NfSCCIAzcvdGsuLs",
          "name": "Keepsake",
          "kind": "passive",
          "description": "The leshy can store an item of light Bulk or less in their head, concealing it as Veil of Privacy. If stored for 24 hours, the item benefits from Mending."
        },
        {
          "id": "328EWnC2S9cdnh0i",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Eizm8JTXmxGFPtFL",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When a gourd leshy dies, a burst of primal energy explodes from their body, restoring 1d8[healing]{1d8 Hit Points} to each plant creature in a @Template[emanation|distance:30]. This area is filled with gourds, becoming difficult terrain.\nIf the terrain is not a viable environment for these gourds, they wither after 24 hours."
        },
        {
          "id": "sCLiSoe59ubmpiPk",
          "name": "Change Shape",
          "kind": "action",
          "description": "The gourd leshy transforms into a Small gourd-bearing plant. This ability otherwise uses the effects of One with Plants."
        },
        {
          "id": "20xbqCZ1qrIT5Yqx",
          "name": "Ensnare",
          "kind": "passive",
          "description": "When the gourd leshy damages a creature with a fist or seed Strike, vines lash out from the leshy (or seed) and wrap around the target's limbs.\nThe target must attempt a check (reflex, dc:17) save. On a failure, the target takes a –10-foot status penalty to its Speed for 1 round; on a critical failure, the target is Immobilized for 1 round and the penalty to Speed lasts for 1 minute.\nEffect: Ensnare"
        }
      ],
      "spellcasting": [
        {
          "id": "xl5RfS1yyVh85doM",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "RLOdsEE3xvbMUA0S",
              "name": "Speak with Plants (Constant, Gourds Only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:water-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Fn5ZKPwiaXm242Np",
      "slug": "water-scamp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:38037fd61c97bad51504efaa89bcc5043c5388fe717844f240706ff2bc5104ce",
    "translatableHash": "sha256:cf20ff0d22410b80cfaa38078befe5e122c493d4fa7a2717e2d574146e57d4cf",
    "data": {
      "schemaVersion": 1,
      "name": "Water Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "amphibious",
        "elemental",
        "water"
      ],
      "description": "Water scamps are marked apart from other scamps by sleek fur that traps a layer of water next to their skin. Although they can fly like their kin and conjure enough water to never dry out, water scamps leave the water only when they must. Although air-breathing scholars consider these scamps quiet and rather skittish, underwater civilizations find their exuberance and playfulness can be overwhelming.\nElemental scamps are bat-like critters marked by elemental powers. Scamps are dispatched from the Elemental Planes by more powerful residents or called to the Universe by neophyte summoners. All scamps have a hint of magical power due to a lingering connection to their home plane, which they largely use to pull simple pranks.\nScamps rapidly form a pecking order of cleverness. Humanoids often confuse scamps when meeting such creatures for the first time. These confused scamps usually resort to an escalating series of pranks and mischief, seeing what they can get away with to establish their place in the hierarchy.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 3,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": -2,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 6,
        "stealth": 6
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
          "acid 3",
          "fire 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2YqxV8nDTjfw1cgi",
          "name": "Claw",
          "bonus": 8,
          "damage": "1d6+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9BIugRh6rF2pCU6U",
          "name": "Fast Healing 2 (While Underwater)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "YggaLtfjaqLwr2Qd",
          "name": "Acid Breath",
          "kind": "action",
          "description": "The water scamp breathes acid in a @Template[cone|distance:15] that deals 2d6[acid|options:area-damage] damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save).\nThe water scamp can't use Acid Breath again for [[/gmr 1d4 #Recharge Acid Breath]]{1d4 rounds}."
        },
        {
          "id": "MgYNmBiC9vvffD1M",
          "name": "Drench",
          "kind": "action",
          "description": "The water scamp shakes out a seemingly endless supply of water from its fur to put out all fires in a @Template[emanation|distance:5]. The scamp extinguishes all non-magical fires automatically and attempts to counteract magical fires ([[/r 1d20+7 #Counteract]]{+7} counteract modifier)."
        }
      ],
      "spellcasting": [
        {
          "id": "M9wTB7jYRpM2YI26",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "WCCgcHoFrSG18GDb",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "tiGeQ5w8vm3kfRnH",
              "name": "Acid Grip",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:electric-eel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "gCmfPEfqS60BiuVP",
      "slug": "electric-eel",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:61cdfb55e37a931803c9e4d6b070acfc57a126e547e9ef6792af763d90fc284c",
    "translatableHash": "sha256:21ff1fa0e7ded48f030456502d78f3042ac73e3bfa272814ea0fa01b94a2bb41",
    "data": {
      "schemaVersion": 1,
      "name": "Electric Eel",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Usually found in freshwater rivers and lakes, an electric eel is not particularly aggressive, but its ability to stun predators and prey alike can be dangerous to larger creatures searching for their next meal. Electric eels are more closely related to catfish than to other eels.\nAlthough these long, narrow fish share similarities in appearance, eels are a diverse group of creatures.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 5,
      "perception": {
        "modifier": 4,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 2,
        "int": -5,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "athletics": 6,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 7"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hhL0DgwVWFclIPih",
          "name": "Jaws",
          "bonus": 6,
          "damage": "1d6+3 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "I9gdtsVJjPZVXvSq",
          "name": "Tail",
          "bonus": 6,
          "damage": "1d4+1 bludgeoning; 1d4 electricity",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "KQARbveR4b7ZZ6yz",
          "name": "Stunning Shock",
          "kind": "passive",
          "description": "A creature critically hit by the electric eel's tail must attempt a check (fortitude, dc:17) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 2.\nCritical Failure The creature is Stunned 3."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dwarf-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "IjFlp5eVVTEg902W",
      "slug": "dwarf-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:816fecec0eaad626dcdbd66dfecb000829c594455929d07a2c62f65207f83745",
    "translatableHash": "sha256:81ea9bf2d39a5e95a6bb1642baca3e09b8dc6b579c76c5083d757bc046773516",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf Warrior",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "Between their finely crafted equipment and natural bravery, a dwarf warrior can hold their ground against mighty foes. If respected, these warriors can become life-long allies; if slighted, they can become a thorn in one's side for the remainder of one's life.\nA dwarf's strength comes from their stoic determination, quality equipment, and their ability to hold grudges for centuries.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 3,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 1,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 7,
        "crafting": 5,
        "diplomacy": 3
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
          "id": "zWE7FM4rSCz0VuDa",
          "name": "Warhammer",
          "bonus": 8,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "3AB6UvPGNsOjx0cs",
          "name": "Clan Dagger",
          "bonus": 8,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "parry",
            "versatile-b"
          ]
        }
      ],
      "actions": [
        {
          "id": "lVlVBDbI1hREH2cQ",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "jb9E7ZFU9kKOnFns",
          "name": "Dwarven Doughtiness",
          "kind": "passive",
          "description": "A dwarf is often calm and collected in the face of imminent danger. At the end of this dwarf's turn, reduce their frightened condition by 2 instead of 1."
        },
        {
          "id": "cpqUwml8DxSmjuyw",
          "name": "Shielded Charge",
          "kind": "action",
          "description": "The dwarf warrior Raises a Shield and Strides twice."
        }
      ],
      "spellcasting": []
    }
  }
]
