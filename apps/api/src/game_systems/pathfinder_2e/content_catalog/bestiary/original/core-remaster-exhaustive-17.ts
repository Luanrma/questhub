import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_17_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:mythic-griffon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "z9AJIIWfoZqmXHdJ",
      "slug": "mythic-griffon",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8bc740e47d288f0095bb6b4d7bbcb571085d3711fd525ac07a1222e698c597d9",
    "translatableHash": "sha256:bb11c43b518272ba8b626e6b17a654c1b4cfe9f0c3e52c729b03c39b8f137b15",
    "data": {
      "schemaVersion": 1,
      "name": "Mythic Griffon",
      "level": 4,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "animal",
        "mythic"
      ],
      "description": "Griffons are regal beasts revered as symbols of freedom and strength in many cultures. They are physically striking, with the hindquarters of a lion and the head, wings, and forelimbs of a great bird of prey—typically an eagle, but some instead bear the features of a hawk, falcon, or even an osprey or vulture. In rare cases, the griffon's hindquarters may resemble those of a different great cat, such as a leopard or tiger. The variations seem to conform to the griffon's environment—for instance, especially rare griffons of northern Avistan have the hindquarters of a Grungir lynx and the upper body of a snowy owl.\nWild griffons rely on their powerful wings to hold them aloft and their keen eyesight to spy out prey. The speed with which they plunge toward the ground and snatch up victims is astonishing. They often tear apart a kill's flesh with razor-sharp beaks but not before alighting to secluded location where they can enjoy their meal without interruption. Griffons hunting to feed their chicks are more cautious, tearing apart prey rather than risking bringing a living creature back to their nests.\nSkilled animal trainers long ago learned how to raise griffons as mounts for military forces or powerful individuals. Such mounts are known for their strength, bravery, and unfailing loyalty. They are among the smartest of animals, and many griffon variants are considered intelligent beasts instead; it's thought that a griffon chooses its rider as much as a rider chooses the griffon. The process of training a griffon to accept and carry a rider in flight is a long and expensive ordeal. Griffon trainers charge rich sums for their services, and a ruler who can boast of owning a stable of griffons is the subject of great respect and envy.",
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
        "acrobatics": 15,
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
          "id": "oN5KE37Rg66tMPMp",
          "name": "Beak",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": [
            "deadly-d10",
            "unarmed"
          ]
        },
        {
          "id": "hTNAzHRu1qlREBai",
          "name": "Talon",
          "bonus": 14,
          "damage": "2d6+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "r9cb3wi4i5kmkIVZ",
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
          "id": "KW0x3Cl4mTqJiDHP",
          "name": "Deadly Striker",
          "kind": "passive",
          "description": "A mythic striker deals an additional 1d6 precision damage on its next Strike whenever it uses an action to Stride 10 or more feet (or to Burrow, Climb, or Fly 10 or more feet).",
          "traits": []
        },
        {
          "id": "GCyLSeOtTMt3wLur",
          "name": "Flying Strafe",
          "kind": "action",
          "description": "The griffon Flies up to its fly Speed and makes two talon Strikes at any point during that movement. Each Strike must target a different creature. The attacks take the normal multiple attack penalty.",
          "traits": []
        },
        {
          "id": "1dlt86M0ny3isB6u",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The Mythic Griffon has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "dbNX6N5owjlagLLT",
          "name": "Mythic Skill",
          "kind": "passive",
          "description": "Cost 1 Mythic Point\nEffect The Mythic Griffon attempts its next Acrobatics skill check with a +4 bonus and is considered to have mythic proficiency for that check.",
          "traits": []
        },
        {
          "id": "OAt8guQQNXMQRYHW",
          "name": "Pounce",
          "kind": "action",
          "description": "The griffon Strides and makes a talon Strike at the end of that movement. If the griffon began this action Hidden, it remains hidden until after the attack.",
          "traits": []
        },
        {
          "id": "zbeji4Adkt0WFV5B",
          "name": "Regal Shriek",
          "kind": "action",
          "description": "The griffon unleashes a shriek that transitions into a terrifying roar. Each creature in a 60-foot emanation must attempt a check (will, dc:20) save. Regardless of the result, creatures are temporarily immune to all griffons' Regal Shrieks for 10 minutes.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2. Animals are Slowed 1 for as long as they're frightened.\nCritical Failure The creature is Frightened 3. Animals are Paralyzed as long as they're frightened.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "k2pu69kyQbd0J164",
          "name": "Unimpeded",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Mythic Griffon automatically ends one effect that would give it a circumstance penalty to Speed. When it attempts to Escape an effect that has it Immobilized, Grabbed, or Restrained, it automatically succeeds.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:primal-chaos-aura",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "F6qOsvcKb95dgCyA",
      "slug": "primal-chaos-aura",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:411f3826f4423199fe9e36004c712394681645d7c2d637564a47a22e963c9571",
    "translatableHash": "sha256:e76dc45b65611c341e983a9e669572d27aeb92a9aabeec952615c68f465c16ad",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Primal Chaos Aura",
      "level": 5,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "kaiju",
        "magical",
        "mythic",
        "primal"
      ],
      "description": "Primal magic becomes unpredictable near areas where Agyra lairs, sometimes to hazardous effect.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 1,
        "details": "or check (perception, dc:26, traits:action:seek) to feel a tingle in the air and smell a rich, chlorophyll-green fragrance with no discernible source"
      },
      "disable": "check (nature, dc:22, name:Draw Off Excess Power) to negate the aura's effect for 1 round by temporarily drawing off the excess power and channeling it back into surrounding terrain, check (nature, dc:26, name:Disperse Lingering Magic) (expert) to completely disperse the lingering magic",
      "isComplex": true,
      "routine": "(2 actions) On its initiative, the hazard gathers primal energy from the surroundings as its first action. Roll 1d6 to determine the type of energy gathered. The hazard uses its second action to replicate the associated spell (2nd rank, DC 23, spell attack modifier 1d20+15). The spell's target or targets are chosen randomly from creatures in the area. Any spell cast by this hazard is primal. 1 air (Gust of Wind); 2 electricity (Thunderstrike); 3 fire (Blazing Bolt); 4 poison (Spider Sting); 5 sonic (Shatter); 6 water (Hydraulic Push)",
      "reset": "The hazard deactivates and immediately resets if it has no targets for 1 round; it also resets if Agyra slumbers for 1 week within 100 feet.",
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
          "id": "mvL1ARPDkTinsFt4",
          "name": "Wild Surge",
          "kind": "reaction",
          "description": "Trigger A character casts a primal spell within the hazard's area\nEffect Each living creature in the area gains 2d4 temporary Hit Points that last for 1 minute as life energy wells up around them, and the hazard rolls initiative.",
          "traits": [
            "primal",
            "vitality"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:sublime-breath",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "Om9ruhbwPNISjwDr",
      "slug": "sublime-breath",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c07112fd914b7383513da3db1ef296fb726db4c123f0157745630743748de1a5",
    "translatableHash": "sha256:35faa8210772d958ae7d34ebfb914a8bcfd0cf44525041421c0f4c20dba7e99f",
    "data": {
      "schemaVersion": 1,
      "name": "Sublime Breath",
      "level": 6,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "fey",
        "mythic"
      ],
      "description": "Bringers of Inspiration\nA sublime breath seeks to perfect their craft, or, when they see the seed of potential in a worthy mortal, to inspire them to new heights.",
      "armorClass": 24,
      "hitPoints": 111,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 4,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 12,
        "crafting": 26,
        "deception": 18,
        "diplomacy": 16,
        "nature": 15,
        "performance": 26
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
          "id": "FjjfoDyvJckiUgUc",
          "name": "Soft Touch",
          "bonus": 16,
          "damage": "1d6 spirit; 1d6 mental; 2d4+8 bludgeoning",
          "traits": [
            "mental",
            "spirit"
          ]
        },
        {
          "id": "TdUL9zuWhYsufaej",
          "name": "Feigned Strike",
          "bonus": 16,
          "damage": "2d6 spirit; 2d6 mental",
          "traits": [
            "mental",
            "spirit"
          ]
        }
      ],
      "actions": [
        {
          "id": "84g0thmX6mrQpAXG",
          "name": "Artistic Specialist",
          "kind": "passive",
          "description": "In a recital, competition, or other measure of artistic skill, a sublime breath is a 12th-level challenge.",
          "traits": []
        },
        {
          "id": "hu3kOuRFiO3bdRJ9",
          "name": "Immaculate Instrument",
          "kind": "passive",
          "description": "A sublime breath carries a single tool, prop, or instrument related to its chosen craft, such as a mask, sash, or paintbrush. As long as they possess their immaculate instrument, they treat any critical failures on Crafting or Performance checks as failures.",
          "traits": []
        },
        {
          "id": "lYIyujwTKgXxTxUJ",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The sublime breath removes any one condition currently affecting them.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "2ddCLPBzSEpGoTd7",
          "name": "Thought Slips Away",
          "kind": "passive",
          "description": "The sublime breath's ephemeral lightness makes them impossible to grasp. They use their Performance modifier to Escape, Tumble Through, High Jump, or Long Jump. When they Leap, High Jump, or Long Jump, the movement does not provoke reactions.",
          "traits": []
        },
        {
          "id": "2M0ZAFZ1m0Dr915i",
          "name": "+2 Status to All Saves vs. Emotion",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Uk0LHniv3eiGclv0",
          "name": "Mythic Resilience",
          "kind": "passive",
          "description": "The sublime breath treats their Will saving throws as one step better than it actually is (so a critical failure is a failure, a failure is a success, and a success is a critical success).",
          "traits": []
        },
        {
          "id": "yFXkvfPLgI8DlZBf",
          "name": "Artistic Creation",
          "kind": "action",
          "description": "Frequency once per round\nEffect The sublime breath's art is so real that it takes shape in the hearts of those who witness it. The sublime breath crafts, acts, recites a tale or song, or otherwise uses their art to create a work of art in a 10-foot type:burst within 60 feet. The creation is perceptible and tangible to creatures that don't disbelieve it and it affects them accordingly; for instance a ladder could be climbed, and a campfire would provide heat and even be able to cook food for an affected creature. A hazardous creation deals 4d6 untyped damage to creatures that enter or begin their turn in the area (check (will, dc:24, basic, options:area-effect) save), of a type matching the creation, usually a physical damage type or a common energy type such as fire, acid, or cold. The creation lasts until the end of the sublime breath's next turn, though the sublime breath can Sustain it to prolong the effect for up to 1 minute. The sublime breath can Sustain any number of Artistic Creations with a single action.",
          "traits": [
            "illusion",
            "mental"
          ]
        },
        {
          "id": "4UMxc8XNiQn8RVbN",
          "name": "Artistic Destruction",
          "kind": "action",
          "description": "Requirements The sublime breath has either used Artistic Creation this turn or Sustained an Artistic Creation this turn\nEffect The sublime breath destroys their creations to make way for new growth. All of their currently sustained Artistic Creations detonate, dealing 8d6 untyped damage to all enemy creatures either within a creation or within a 10-foot type:burst of it (check (will, dc:24, basic, options:area-effect) save). The damage type matches the creation. Creatures in multiple overlapping bursts take damage only once, of the type of their choice. The sublime breath then cannot use Artistic Creation for 1d4 turns.",
          "traits": [
            "illusion",
            "mental"
          ]
        },
        {
          "id": "Swybg7dNQJYA96rO",
          "name": "Change Shape",
          "kind": "action",
          "description": "The sublime breath can take on the appearance of any Medium or Large humanoid creature. This doesn't change their Speed or their attack and damage bonuses with their Strikes, but might change the damage type their Strikes deal.\nThe sublime breath instinctively takes on the appearance an observer finds most inspiring. The first time they become observed, they use Change Shape as a free action, even if they were unaware they were being observed, they take on a specific appearance reflecting the Hidden desires, hopes, artistic inclinations, or similar deep-seated emotions of a single observer. As long as the sublime breath can be observed by this creature and maintains this shape, the observer gains a +1 circumstance bonus to Crafting and Performance checks and takes a –1 circumstance penalty to Will saves against the sublime breath or to any check or DC that would attempt to capture or restrain them, such as attempts to Grapple or the DC of a Paralyze spell.",
          "traits": [
            "concentrate",
            "divine",
            "polymorph"
          ]
        },
        {
          "id": "7WPZ3eJbHVEV27Sn",
          "name": "Hours Go By",
          "kind": "action",
          "description": "A sublime breath's presence can allow artists and artisans to work almost effortlessly in a state of perfect flow. The sublime breath encourages a single creature within 60 feet, who becomes Quickened. They can spend the extra action only to Sustain a spell or other ability.",
          "traits": [
            "emotion",
            "mental"
          ]
        },
        {
          "id": "avU85lB672Yh7KMs",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:mythic-ogre-boss",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "F9HHYowsSs0CLMX0",
      "slug": "mythic-ogre-boss",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:791be537279aa4f66a377347828a9376e2175125f268eafe7ea5e57efa90ed10",
    "translatableHash": "sha256:1007d7c7540829cd217d0f7e6eb27f7a4ad69654c8b813151b2f47a1967b607e",
    "data": {
      "schemaVersion": 1,
      "name": "Mythic Ogre Boss",
      "level": 7,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "For ogres, the biggest, strongest, and most violent among them are the ones who claim the right to lead. When such a creature gains mythic power, its cruelty is likely to be matched only by its immense durability. Mythic ogre bosses are capable of felling even mighty and enormous prey like gigantic dinosaurs with their ogre hooks, using preposterously unbelievable strength to drag them down and rend them asunder. If a group of mythic ogre bosses were to band together, they could prove a terrifying threat, conquering villages or even a small city with relative ease. Fortunately, their philosophies of violence and strength over all else means that whenever such beings come into contact, they are far more likely to immediately war with each other to prove who is the strongest.",
      "armorClass": 25,
      "hitPoints": 130,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 12,
        "will": 15
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
        "intimidation": 16,
        "stealth": 11
      },
      "languages": [
        "common",
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "mythic 7"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "K8rZwgv45XvIe8vL",
          "name": "Ogre Hook",
          "bonus": 19,
          "damage": "1d10+11 piercing",
          "traits": [
            "deadly-d10",
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "BXuDhj7X68wG6zma",
          "name": "Javelin",
          "bonus": 12,
          "damage": "1d6+11 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "KsRzjvgnKEGVQcLO",
          "name": "Titanic Might",
          "kind": "passive",
          "description": "A mythic brute ignores size limitations when performing actions like Grapple or Trip.",
          "traits": []
        },
        {
          "id": "1D0MSMPriNOZ6DFm",
          "name": "Mythic Ferocity",
          "kind": "reaction",
          "description": "Cost 1 Mythic Point\nTrigger The monster is reduced to 0 HP\nEffect The monster avoids being knocked out and remains at half its maximum HP, but its wounded value increases by 1. When it is Wounded 3, it can no longer use this ability.",
          "traits": []
        },
        {
          "id": "DqDajSBQROiv8iPO",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "KxNiF9bYl6kA6FRd",
          "name": "Bellowing Command",
          "kind": "action",
          "description": "The ogre boss issues a command to hasten their fellows. Each ogre ally who hears and understands this command becomes Quickened until the end of that ally's next turn but can use the extra action only to Step or Stride.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "wagCR4sbZvJmqbwR",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "QLpCq8dGVOW9sDKZ",
          "name": "Mythic Skill",
          "kind": "passive",
          "description": "Cost 1 Mythic Point\nEffect The Mythic Ogre Boss attempts its next Athletics skill check with a +4 bonus and is considered to have mythic proficiency for that check. This applies to one skill when this ability is gained and a second skill if the creature is 12th level or higher.",
          "traits": []
        },
        {
          "id": "cg8c4dIdBFiff9le",
          "name": "Sweeping Hook",
          "kind": "reaction",
          "description": "Trigger The ogre boss successfully Trips a creature using an ogre hook\nEffect The ogre boss makes an ogre hook Strike against the creature they tripped.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:wind-surge",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "uNDf0X5AVMrcwNQY",
      "slug": "wind-surge",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:9f9f4f0962651191739376e61db0496aaf87f01f417d339e4f79edb64c54464c",
    "translatableHash": "sha256:75fb81e65bee5c12d5a06b83dbf341a615b4df7181e3ac08bd0830a38b27bff7",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Wind Surge",
      "level": 7,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "kaiju",
        "mythic",
        "primal"
      ],
      "description": "Hurricane-force winds rip through the area as Agyra flies past.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 17,
        "details": "(expert) to note stirrings in the wind"
      },
      "disable": "check (athletics, dc:27, name:Crouch and Contort) (expert) or check (acrobatics, dc:27, name:Crouch and Contort) (expert) to crouch and contort out of the wind's way (disables the hazard for only yourself), check (survival, dc:30, name:Point Out a Safe Space) to point out a safe space from the winds for up to 3 creatures.",
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
          "id": "En76ig0d6noawf3J",
          "name": "Hurricane Flyby",
          "kind": "reaction",
          "description": "Trigger Agyra flies overhead for at least 120 feet in a straight line\nEffect Supernaturally powerful winds batter the area in a line that is 120-foot line. Each creature in the line must attempt a check (reflex, dc:29) save. Moving above ground against the direction of the line is greater difficult terrain for 1 minute.\nCritical Success The creature is pushed 10 feet along the line.\nSuccess The creature takes 5d6 bludgeoning damage and is pushed 15 along the line.\nFailure The creatures takes 10d6 bludgeoning damage, is pushed 30 feet along the line, and is knocked Prone.\nCritical Failure The creature takes 20d6 bludgeoning damage, is pushed 45 feet along the line, is knocked prone, and is Stunned 1 for 1 round.\nIf the line overlaps a body of water, the winds cause massive waves that deal 6d6 bludgeoning damage to creatures in the water or within 15 feet of the waterline (check (reflex, dc:29, basic) save). On a critical failure, a creature is also swept 30 feet away from the waterline and 15 feet beneath the water's surface.",
          "traits": [
            "air"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:lightnings-dance",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "Fs2SIKBTUOFuyAVS",
      "slug": "lightnings-dance",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:c18107ab385820bf8b71e149bddf988d277894d1aded032a245e8d67cc1723eb",
    "translatableHash": "sha256:493cb5537946178cbe174c8e125f9cdff2b084b9144931f2ecc34c931b20a261",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Lightning's Dance",
      "level": 11,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "kaiju",
        "mythic",
        "primal"
      ],
      "description": "Electricity suffuses an area where Agyra has used her lightning breath multiple times.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 10,
        "details": "(expert) or check (perception, dc:33) (master) to notice sparks dancing around normally non-conductive surfaces"
      },
      "disable": "check (crafting, dc:35, name:Fashion Makeshift Lightning Rod) (master) to fashion a makeshift lightning rod, check (nature, dc:33, name:Dissipate Electrical Charge) (expert) to dissipate the electrical charge harmlessly into the air.",
      "isComplex": true,
      "routine": "(2 actions) Bolts of lightning flash out. The hazard makes two lightning bolt Strikes at two different creatures within 120 feet of the hazard's center. If only one creature is in range, the hazard makes only one Strike.",
      "reset": "The hazard deactivates and immediately resets if has no targets for 1 round; it also resets if Agyra uses her lightning breath multiple times in a single combat in the area.",
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
          "id": "q9e86796VNlfO0AO",
          "name": "Static Shock",
          "kind": "reaction",
          "description": "Trigger A creature approaches within 10 feet of the hazard's center\nEffect Electricity wells up from the ground and nearby material. Each creature in the hazard's area must attempt a check (fortitude, dc:33) save, and the hazard then rolls initiative. A character wearing metal armor or wielding a metal shield or weapon of at least 1 Bulk treats the result of their saving throw as one step worse.\nCritical Success The creature is unaffected.\nSuccess The creature is Clumsy 1 for 1 round.\nFailure The creature is Clumsy 2 for 2 rounds.\nCritical Failure The creature is clumsy 2 for 4 rounds and Stunned 1 for 1 round.",
          "traits": [
            "electricity"
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:immortal-trickster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "H2RSvVckwPdFCAYY",
      "slug": "immortal-trickster",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0fdb328d9948d95fbd2688424cd271ceedaf3b15e8e85884b3ab699bd3164143",
    "translatableHash": "sha256:2367ab047b341bd9bb2237d9123dd6e05741ec397c61a903454dca308fa5587b",
    "data": {
      "schemaVersion": 1,
      "name": "Immortal Trickster",
      "level": 11,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "beast",
        "humanoid",
        "mythic",
        "spirit"
      ],
      "description": "The Immortal Trickster\nThe Immortal Trickster is an immortal spirit guide who always returns to life no matter how he's killed. After his death, he often recorporates in the same area, though if his body is destroyed in its entirety, he sometimes awakens in an entirely different continent.",
      "armorClass": 31,
      "hitPoints": 198,
      "speedFeet": 30,
      "perception": {
        "modifier": 24,
        "senses": []
      },
      "saves": {
        "fortitude": 21,
        "reflex": 26,
        "will": 23
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 4,
        "int": 3,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "deception": 26,
        "diplomacy": 23,
        "nature": 21,
        "society": 21,
        "stealth": 23,
        "thievery": 26
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed"
        ],
        "resistances": [
          "mythic 11"
        ],
        "weaknesses": []
      },
      "attacks": [],
      "actions": [
        {
          "id": "PeFjJ2NEjzAyuFwe",
          "name": "Recklessly Overconfident",
          "kind": "passive",
          "description": "The Immortal Trickster knows he is immortal and takes risks that cause his failures to be particularly spectacular. Whenever the Immortal Trickster would fail at a Deception, Stealth, or Thievery check, he critically fails instead.",
          "traits": []
        },
        {
          "id": "IPjoHWXPFbuGzWb5",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The creature ends one condition affecting it.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "1lLrbiH0yjRU8K6F",
          "name": "Trickster's Network",
          "kind": "passive",
          "description": "The Immortal Trickster can extend his senses through any coyote, fox, or raven in the Universe, making it his sensory animal. He cannot maintain his attention through more than three sensory animals at one time. He can speak through his sensory animals, but only in a single short phrase per animal of no more than two words. He has little control over his sensory animals' actions, though they usually act in a way that is consistent with his desires unless they have a specific reason not to. When extending his senses through a sensory animal, he can use that animal to determine line of effect for any of his spells or abilities.",
          "traits": []
        },
        {
          "id": "waKXoyG5D33mRgJf",
          "name": "Immortal Tricks",
          "kind": "passive",
          "description": "When the Immortal Trickster is reduced to 0 Hit Points, he returns to life at full health and with all his powers and Mythic Points recharged after 24 hours. He usually, but not always, returns at the site of his death, though he can appear anywhere on the same world where there are coyotes, foxes, or ravens.",
          "traits": []
        },
        {
          "id": "5bTyrXZMdes7IQjW",
          "name": "Mythic Resistance",
          "kind": "passive",
          "description": "The Immortal Trickster has resistance 11 to all damage from attacks and spells from non-mythic creatures.",
          "traits": []
        },
        {
          "id": "PAcGRRR6FuPF8d0W",
          "name": "Bond with Mortals",
          "kind": "action",
          "description": "Frequency once per day\nEffect The Immortal Trickster forms a bond with a mortal creature. While the bond exists, the mortals bonded to the Immortal Trickster increase their current and maximum Hit Points by 10 and gain a +2 status bonus to their attack and damage rolls, as well as to skill checks they make using Deception, Stealth, or Thievery. The Immortal Trickster can communicate telepathically with any of his bonded mortals as long as both beings are on the same plane. Each week that they are bonded to the Trickster, the bonded mortals increase their doomed value by 1; their doomed value cannot be increased above 3 by this ability and their doomed value cannot decrease while they remain bonded to the Trickster. The Immortal Trickster can be bonded with up to six mortals at a time, and they can take this action again to end the bond or to form a new bond. The bond also ends if the mortal dies. Whenever one of his bonded mortals dies, the Immortal Trickster becomes Drained 1 or increases the value of his drained condition by 1, and the Trickster gains a +2 status bonus on the next attack roll or skill check he attempts.",
          "traits": [
            "mental",
            "primal"
          ]
        },
        {
          "id": "5gKrafzz4AlrGGlD",
          "name": "Change Shape",
          "kind": "action",
          "description": "The Immortal Trickster takes on the appearance of a coyote, fox, or raven. In areas where another Tiny or Small animal is known for wiliness and trickery, the Immortal Trickster can assume that animal's shape instead. While transformed, the Immortal Trickster loses his innate spells, attacks, and special actions, but doesn't otherwise change his statistics and can still speak. In fox or coyote form, the Immortal Trickster's size changes to Tiny (for a fox) or Small (for a coyote), his Speed increases to 35 feet, and he gains a bite (+23 to hit for 2d6+4 piercing damage). In raven form, he is Tiny, gains a fly Speed of 25 feet, and gains a beak (agile, +23 to-hit for 2d4+4 piercing damage).",
          "traits": [
            "concentrate",
            "polymorph"
          ]
        },
        {
          "id": "9yG1XDG6DQawPlpo",
          "name": "Confounding Theft",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Immortal Trickster makes a Thievery check against the Perception DC of one creature he can see within 60 feet. On a success, the Trickster gains possession of any one item he chooses of up to 2 Bulk that the target is currently holding, wearing, wielding, or has stowed on their person. This must be a single item and does not include full sets of clothing like worn armor or garments.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "veMhzsuzWzb3G4Ay",
          "name": "Cunning Escape",
          "kind": "action",
          "description": "Frequency once per day\nEffect The Immortal Trickster trades places with one of his sensory animals (see trickster's network, above). The animal appears in the square the Trickster is currently occupying and the Trickster teleports to the animal's original location with all of his possessions. If a creature has witnessed the Trickster's Change Shape, they must succeed at a check (perception, dc:38) check to Sense Motive or be fooled into thinking that the Trickster has simply changed shape into an animal instead of teleported.",
          "traits": [
            "concentrate",
            "teleportation"
          ]
        },
        {
          "id": "BYfZZZ4t5LkfvkKI",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "qoxAd9f2alFsuEKd",
          "name": "Mythic Skill",
          "kind": "passive",
          "description": "Cost 1 Mythic Point\nEffect The Immortal Trickster can spend a Mythic Point whenever he makes a check using Deception or Thievery to make the check at mythic proficiency.",
          "traits": []
        },
        {
          "id": "4aNFUfifqGJV2XWK",
          "name": "Pull",
          "kind": "action",
          "description": "",
          "traits": []
        },
        {
          "id": "CUPUSYeMCdxHQvDS",
          "name": "Recharge Spell",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Immortal Trickster gains an additional casting of any of his innate primal spells that he has already cast.",
          "traits": []
        },
        {
          "id": "LH4KEUD3H4VjzPPp",
          "name": "Push",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "2awaJXyo3OZitXfi",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 31,
          "spells": [
            {
              "id": "APHCWiQasbu5BSU6",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "tBsaswgNVc72kLVB",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "nUKcZydse3DgUbab",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "q73QzKe7lKBwrqBV",
              "name": "Creation",
              "rank": 4
            },
            {
              "id": "ZML7FcsTGvJxQqAv",
              "name": "Magic Passage",
              "rank": 5
            },
            {
              "id": "9aGpT4UqPcKiBiPl",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "AyeJNiOsVEGVfFMf",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "S7hnLElhTgIc0Ouc",
              "name": "Cursed Metamorphosis",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:mythic-gogiteth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "AQw3uql8ovK4NPPi",
      "slug": "mythic-gogiteth",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7da51b892eaa422f9160f4f9a69d32b90e2b2b5acefa94f227e609bd195dd3dc",
    "translatableHash": "sha256:87b95f1b76d297b85eb304d3ad05743b5a7823fd69b9d07405a298deef0d490e",
    "data": {
      "schemaVersion": 1,
      "name": "Mythic Gogiteth",
      "level": 12,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "aberration",
        "mythic"
      ],
      "description": "Gogiteths are horrific nightmares with grasping, spiderlike legs; vicious, gnashing teeth; and far too many eyes. Of all the creatures on Golarion for whom the acquisition of mythic power might prove a nightmare for others, the gogiteth is arguably one of the most terrible.\nNormally, a gogiteth's victims at least have the possible salvation of hearing the horrible crackling and popping of its joints as it clambers towards them through the dark, an opportunity to flee the slavering nightmare seeking them. Mythic ambusher gogiteths are unnaturally silent, however. The first sound a creature might hear when being hunted by such a monstrosity is the sharp wheeze of their own fleeting breath as the gogiteth's jaws snap shut around them, or the tearing of their flesh and clothing as one of its legs pierces them through.\nThough little is known about the origins of gogiteths, mythic gogiteths generally acquire mythic power in the same way that other creatures do. Golarion has no shortage of vile deities who might take cruel delight in bestowing a sliver of mythic power upon a creature as frightful and terrible as a gogiteth. Their traditional hive homes in the Darklands make it unlikely that they would be affected by the Godsrain, but it is not impossible that droplets of Gorum's spilled blood could seep through cracks and make their way down into the thirsty jaws of one of these nightmarish monstrosities.",
      "armorClass": 31,
      "hitPoints": 250,
      "speedFeet": 40,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 22,
        "will": 20
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 24,
        "stealth": 28,
        "survival": 17
      },
      "languages": [
        "sakvroth"
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
          "id": "YEfhznRCKL956Fzx",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+12 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Bj9AvzdEeKXM1Lpy",
          "name": "Leg",
          "bonus": 26,
          "damage": "3d6+12 piercing",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "DU6qEQAoJyHOTOaM",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The creature ends one condition affecting it.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "7EDZA6PRAkgmOYfB",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "U9YqCD8jxDiah3Yi",
          "name": "Hazard Immunity",
          "kind": "passive",
          "description": "A mythic ambusher never triggers the reactions of hazards in its own lair and is immune to the negative consequences of damaging area effects created by hazards in its lair.",
          "traits": []
        },
        {
          "id": "EUEkEW5Pn57YJJ4e",
          "name": "Mythic Resilience (Reflex and Will)",
          "kind": "passive",
          "description": "The creature treats its saving throws with the associated save as one degree of success better than it rolled. This is not cumulative with other effects that change their degree of success, like the incapacitation trait (except for rolling a natural 1 or 20). Each time the monster gains mythic resilience, choose one save. The ability should apply to the creature's highest saves first.",
          "traits": []
        },
        {
          "id": "Qj4erun9wbqBExS0",
          "name": "Skittering Reposition",
          "kind": "reaction",
          "description": "Trigger A creature that starts its move outside the gogiteth's reach moves into its reach.\nEffect The gogiteth moves 10 feet. This does not trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "drMUmP8Z6LhZyhRI",
          "name": "Carry Off Prey",
          "kind": "passive",
          "description": "The gogiteth can move at its full Speed while it has a creature Grabbed in its jaws, bringing the grabbed creature along.",
          "traits": []
        },
        {
          "id": "yHE4jDWkyfO5E7mM",
          "name": "Constrict",
          "kind": "action",
          "description": "3d6+12 bludgeoning damage, check (fortitude, dc:32, basic)",
          "traits": []
        },
        {
          "id": "19mriXy1nbmE5fBN",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "nfVMAEAuNWL4LEII",
          "name": "Mythic Skill",
          "kind": "passive",
          "description": "Cost 1 Mythic Point\nEffect The Mythic Gogiteth attempts its next Athletics or Stealth skill check with a +4 bonus and is considered to have mythic proficiency for that check.",
          "traits": []
        },
        {
          "id": "fRkzUI9I50wuPJvX",
          "name": "Skittering Assault",
          "kind": "action",
          "description": "The gogiteth Strides three times. Once per Stride, it can attempt a leg Strike against a creature in its reach at any point during the Stride; it must make each attack against a different creature, but it doesn't apply its multiple attack penalty until after making all its Strikes. If any of the Strikes result in a critical failure, Skittering Assault ends.",
          "traits": []
        },
        {
          "id": "zK2aR7Xwx6ctIIxv",
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
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:trump-of-the-oliphaunt",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "RAYQwQxm2nEmfYRD",
      "slug": "trump-of-the-oliphaunt",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:7ceeadbb9a57e54ba2b9617dde18f50a65a76e1ee01267443ed5bb1a98ec9262",
    "translatableHash": "sha256:0ffa5c228f9d7f0f0fdc68775b6392e05791f682051fe818a28b47bdbe1d5081",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Trump of the Oliphaunt",
      "level": 12,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "environmental",
        "mythic"
      ],
      "description": "An overwhelming trumpeting sound vibrates and suffuses the area, causing everything to slow.",
      "armorClass": 0,
      "hitPoints": 0,
      "hardness": 0,
      "stealth": {
        "modifier": 15,
        "details": "(master) to notice the tension of a low vibration forming in the area from the imminent release of the Oliphaunt's trumpet"
      },
      "disable": "check (arcana, dc:38, name:Shore Up the Area) (expert), check (maelstrom-lore, dc:38, name:Shore Up the Area) (expert), check (occultism, dc:38, name:Shore Up the Area) (master), check (religion, dc:38, name:Shore Up the Area) (master) to recognize and shore up the area against the localized planar instability causing a connection to the Oliphaunt of Jandelay. Four successes are needed to strengthen the area enough against the instability to end the hazard.",
      "isComplex": true,
      "routine": "(1 action) Each creature in the area must attempt a check (fortitude, dc:36) save. A creature with the slowed condition from this hazard takes a –2 circumstance penalty on further saves against this effect.\nCritical Success The creature is unaffected.\nSuccess The creature takes 2d6+6 sonic damage and is Deafened for 1 round.\nFailure The creature takes 4d6+13 sonic damage and is Slowed 1 for 2 rounds.\nCritical Failure The creature takes 8d6+26 sonic damage and is Slowed 2 for 2 rounds.",
      "reset": "The area becomes unstable again after 24 hours.",
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
          "id": "13cgAF6tdEDdUGZg",
          "name": "Bone-Shattering Rhythms",
          "kind": "reaction",
          "description": "Trigger Three or more characters enter the area of planar instability\nEffect Pent-up magical energy from another world begins to release in waves of overwhelming sound. The hazard rolls initiative.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:mythic-lich",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "Roj3l7HjnV0kFq9a",
      "slug": "mythic-lich",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:12592e9b1986c89d8fc7924c0eec88efa6dd54e7ac9360ca70e9335f59e1a0c0",
    "translatableHash": "sha256:c01eacff78e0804f3a23ae5b26347663447ed5505d164c773336d3b3efaeecb7",
    "data": {
      "schemaVersion": 1,
      "name": "Mythic Lich",
      "level": 12,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "mythic",
        "undead",
        "unholy"
      ],
      "description": "A mythic lich could be a lich who came into contact with a source of mythic power after their transformation—or one whose transformation was designed to instill mythic power in them. Such rituals might entail using a mythic artifact as a soul cage, slaying a mythic creature, or luring a mythic being into striking the killing blow against the spellcaster. Among adherents of the Whispering Way, it is commonly believed that the Whispering Tyrant tricked the god Aroden into killing him as a mortal so he could siphon some of Aroden's power into creating his soul cage and allowing him to become a mythic lich.",
      "armorClass": 31,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 21,
        "will": 23
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 6,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "arcana": 28,
        "crafting": 24,
        "deception": 17,
        "diplomacy": 19,
        "religion": 22,
        "stealth": 20
      },
      "languages": [
        "aklo",
        "chthonian",
        "common",
        "diabolic",
        "draconic",
        "elven",
        "necril",
        "sakvroth"
      ],
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
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "M05pu8jIHs0qEKzP",
          "name": "Hand",
          "bonus": 24,
          "damage": "4d8 void",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "Bih7st41Mudf9FWL",
          "name": "Recharge Spell",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nThe mythic lich regains one spell.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "CR60g6GASw833r3h",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The mythic lich ends one condition affecting it.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "gakDYFEsPKyFUdIg",
          "name": "+1 Status to All Saves vs. Vitality",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "gSG1OZxFHX2zLrNP",
          "name": "Counterspell",
          "kind": "reaction",
          "description": "Trigger A creature casts a spell the lich has prepared.\nEffect The lich expends a prepared spell to counter the triggering creature's casting of that same spell. The lich loses its spell slot as if it had cast the triggering spell. The lich then attempts to counteract the triggering spell.",
          "traits": []
        },
        {
          "id": "lTAUfkDQ3VVnBakO",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:29, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "IZ5AuHJeZd0VSgCk",
          "name": "Mythic Resilience (Reflex and Will)",
          "kind": "passive",
          "description": "The creature treats its saving throws with the associated save as one degree of success better than it rolled. This is not cumulative with other effects that change their degree of success, like the incapacitation trait (except for rolling a natural 1 or 20). Each time the monster gains mythic resilience, choose one save. The ability should apply to the creature's highest saves first.",
          "traits": []
        },
        {
          "id": "CjdoOLjRkqyfp25v",
          "name": "Rejuvenation",
          "kind": "passive",
          "description": "When a lich is destroyed, its soul immediately transfers to their Lich Soul Cage. A lich can be permanently destroyed only if their soul cage is found and destroyed.",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "Jxw7RvEERHGRzycq",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "m6CbK52GoU471gez",
          "name": "Drain Soul Cage",
          "kind": "passive",
          "description": "6th rank\nFrequency once per day\nEffect The lich taps into their Soul Cage's power to cast any arcane spell up to the highest rank the lich can cast, even if the spell being cast is not one of the lich's prepared spells. The lich's soul cage doesn't need to be present for the lich to use this ability.",
          "traits": []
        },
        {
          "id": "42HIcLjgX7XYgssy",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "IBX7Tix58PNMLskp",
          "name": "Siphon Life",
          "kind": "passive",
          "description": "A lich's form draws forth life from those who come into contact with it. When the lich damages a living creature with an unarmed attack, the lich gains 5 temporary Hit Points and the creature must succeed at a check (fortitude, dc:34) save or become Drained 1.\nIf the lich is Grabbed or Restrained at the start of its turn, each creature grabbing or restraining it must succeed at a Fortitude save or become drained 1. If the lich siphons a creature's life again, the drained value increase by 1, to a maximum of Drained 4.",
          "traits": []
        },
        {
          "id": "5TLoRDxeWBDh6a6e",
          "name": "Steady Spellcasting",
          "kind": "passive",
          "description": "If a reaction would disrupt the lich's spellcasting action, the lich attempts a check (flat, dc:15) check. On a success, the action isn't disrupted.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "6Upo1ddHWd1c49bj",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 26,
          "saveDc": 36,
          "spells": [
            {
              "id": "pTWqCr3XoIkdIXk7",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "iklIdZyaqwo86CRJ",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "gsMzXD9GS59MdkUL",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "tCwrbBCDni9sq7yJ",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "6FQRzsyRELOcXBJY",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "eGTaoIJkxsjpenJZ",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "TR1vsJNQZWYLsmzi",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "mkaZUdZffYZx9Obm",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "Z6lzhMO9ITKK4W5D",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "UYlQmnzZCMYTffT5",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "7bl7gwt2WJjpd8RZ",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "6Njhp5hR1XusvlXV",
              "name": "False Vitality",
              "rank": 2
            },
            {
              "id": "3RjCZkafjI2KuLHP",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "aGasuhst6xonf93v",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "pvHkx0pL3HTpZOeN",
              "name": "Blindness",
              "rank": 3
            },
            {
              "id": "w8zo0rYZH95wpNmD",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "X5SncnKHN5kmq4ZO",
              "name": "Vampiric Feast",
              "rank": 3
            },
            {
              "id": "lyPyO2pGbCy34F3K",
              "name": "Fire Shield",
              "rank": 4
            },
            {
              "id": "SUjB62d0yVimppV5",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "16SGdNdJjRakoOI8",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "yKldI8WOGdYfuu6n",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "fakKeqC0hatb5JGJ",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "ovsXdmKCyMFRpVyI",
              "name": "Wall of Ice",
              "rank": 5
            },
            {
              "id": "oVfJcvPQF6T03acJ",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "pTsOm7Hc5u8RBC8f",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "MsxJUnHeJ2sGOpLq",
              "name": "Vampiric Exsanguination",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:boneburst",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "HAe6Z2Zr4XWklhgx",
      "slug": "boneburst",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/hazard.svg"
    },
    "sourceHash": "sha256:92746398ba10cbe391710cc5c2d33590f0b5652a8734f1b7c480b5a183959fdd",
    "translatableHash": "sha256:a241a978166dfc5240d53b2e1c67d61fc36fa8de3830d8826c99633944da0004",
    "data": {
      "schemaVersion": 1,
      "entryType": "HAZARD",
      "name": "Boneburst",
      "level": 14,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "magical",
        "unholy"
      ],
      "description": "A low howl rises from the ground, gathering strength as scraps of ancient armor, bone fragments, and clumps of earth rise into the air. Crimson vapor holds the faceless shape together, never coalescing into an identifiable form, but merely writhing through ever-changing images of torment and destruction.",
      "armorClass": 33,
      "hitPoints": 90,
      "hardness": 20,
      "stealth": {
        "modifier": 28,
        "details": "(master) to notice that clouds of debris are coalescing into swirling, faceless shapes held together by rust-red fog and spectral, dripping clots of gore"
      },
      "disable": "check (occultism, dc:38, name:Negate Psychic Resonances) (master) to temporarily negate the psychic resonances around each fragment, causing the agglomeration to fall apart, or check (religion, dc:33, name:Interrupt Unholy Power) (expert) to temporarily interrupt Verex-That-Was's unholy power with divine energy from another source. If a boneburst takes 40 points of damage from a single source and it isn't destroyed, it is rendered dormant for 1 round.",
      "isComplex": true,
      "routine": "(2 actions) An awakened boneburst occupies a 20-foot square; it is reduced to a 10-foot square when it reaches its BT. It can occupy the same space as other creatures, but not other bonebursts. On its initiative, the boneburst Flies up to 30 feet toward the nearest living creature as its first action. As its second action, the boneburst then coalesces around any living creature within its space, invisible shards of bone tearing at their flesh. Each living creature in its space takes 2d10+18 slashing damage (check (reflex, dc:35, basic, options:area-effect) save). If no living creatures are within its space, the boneburst can use its second action to Fly up to 30 feet.",
      "reset": "If the boneburst spends 5 consecutive rounds without coalescing around a living creature, it falls dormant, sinking back into the earth. After it falls dormant or is disabled, the boneburst gathers energy over the course of the next hour, after which it can be triggered again.",
      "saves": {
        "fortitude": 30,
        "reflex": 28,
        "will": 0
      },
      "defenses": {
        "immunities": [
          "critical-hits",
          "object-immunities",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "actions": [
        {
          "id": "6mJensA5MorOvpQq",
          "name": "Gathering Mist",
          "kind": "reaction",
          "description": "Trigger A living creature approaches within 50 feet of a dormant boneburst\nEffect The boneburst awakens, roiling up from the ground, and rolls initiative.",
          "traits": []
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:weaver-of-webs",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "otEC0HMg4whUaLAD",
      "slug": "weaver-of-webs",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:07ea928ef3d7ab04d8265965ea4990419e9eec2af12ef1b0ff625e66d36e567f",
    "translatableHash": "sha256:fdd9d0362676c36d216d5fdd3130a28bf0a7dc663b0b613a5deac4e32fc1ecbd",
    "data": {
      "schemaVersion": 1,
      "name": "Weaver of Webs",
      "level": 15,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "beast",
        "mythic"
      ],
      "description": "Herald of the Web\nOnce a servitor of an ancient god of secrets, the Weaver of Webs now seeks to attain her own godhood.",
      "armorClass": 36,
      "hitPoints": 335,
      "speedFeet": 60,
      "perception": {
        "modifier": 32,
        "senses": [
          "greater-darkvision",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 29
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 6,
        "int": 8,
        "wis": 6,
        "cha": 6
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 30,
        "crafting": 21,
        "deception": 30,
        "diplomacy": 27,
        "intimidation": 30,
        "nature": 25,
        "occultism": 27,
        "religion": 27,
        "society": 27,
        "stealth": 30
      },
      "languages": [
        "aklo",
        "chthonian",
        "common",
        "diabolic",
        "draconic",
        "dwarven",
        "empyrean",
        "jotun",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "mental",
          "poison"
        ],
        "resistances": [
          "cold 10",
          "void 10",
          "mythic 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "STNb3MjelKgZTBpI",
          "name": "Fangs",
          "bonus": 28,
          "damage": "2d8+16 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "NHPSXIzu0nsTH2vx",
          "name": "Tarsal Claw",
          "bonus": 28,
          "damage": "2d6+16 slashing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "Q5GbqZP2ibD42L0D",
          "name": "Web",
          "bonus": 24,
          "damage": "4d4+10 bludgeoning",
          "traits": [
            "magical",
            "nonlethal"
          ]
        }
      ],
      "actions": [
        {
          "id": "N5IBiBCtlhoTJOHN",
          "name": "Countless Eyes",
          "kind": "passive",
          "description": "The Weaver of Webs can see through the eyes of any spider, living or dead, in one of her many lairs. When the Weaver casts her Scrying spell and targets a spider in her lair, the spell is not expended, and the spider automatically critically fails its saving throw.",
          "traits": [
            "scrying"
          ]
        },
        {
          "id": "hfIbvWNd8c7ecysW",
          "name": "Greater Web Sense",
          "kind": "passive",
          "description": "The Weaver of Webs' tremorsense also extends to any of her webs, regardless of distance or area, and her tremorsense is a precise sense against any creature in contact with one of her webs.",
          "traits": []
        },
        {
          "id": "HAGvQq4k3RPk5G6r",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Weaver removes any one condition currently affecting her.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "5GhO6Eq1XWEL0ARL",
          "name": "Webbed Conveyance",
          "kind": "passive",
          "description": "Requirements The Weaver is within 15 feet of a creature Paralyzed in her nightmare cocoon\nEffect The Weaver grabs the paralyzed target, webs them to her back or one of her legs, and then Strides. As long as the creature is Immobilized by the Weaver's nightmare cocoon, it shares the Weaver's space and moves with her. The DC to Escape DC 36 the nightmare cocoon increases to 36.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "vr1193FbzgbslN1N",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "HBsI0TF2SoQZJFjt",
          "name": "Regeneration (Deactivated by Bright Light)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "SD2UsS1GCg4rmAB6",
          "name": "Adopted Brood",
          "kind": "reaction",
          "description": "Trigger A creature deals precision damage to the Weaver\nEffect A spray of smaller spiders pours out of the open wound. These spiders deal 3d6 piercing damage to a single creature within 15 feet of the Weaver and expose that creature to Weaver venom before skittering away.",
          "traits": []
        },
        {
          "id": "skUYH1Y6jeD5HfrJ",
          "name": "Mythic Resistance",
          "kind": "passive",
          "description": "The Weaver of Webs has resistance 15 to all attacks made with non-mythic weapons and unarmed attacks made by nonmythic creatures.",
          "traits": []
        },
        {
          "id": "yFGi8rZPWBQ9mQjm",
          "name": "Spilled Secrets",
          "kind": "passive",
          "description": "Any creature that speaks within this aura must succeed at a check (will, dc:34) save or divulge some kind of secret instead of whatever speech they intended. Linguistic spells and effects gain the concentrate trait if they didn't have it already and are wasted if the creature fails this save.\nOn a critical failure, the character betrays a secret they least want to reveal to the Weaver or those present.",
          "traits": [
            "aura",
            "mental"
          ]
        },
        {
          "id": "xl1O0kUfXulOZvwB",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "CGWcm4Diiu9f0nbA",
          "name": "Nightmare Cocoon",
          "kind": "passive",
          "description": "A creature struck by the Weaver's web Strike must succeed at a check (reflex, dc:34) save or become Immobilized (Escape DC 34). If the Weaver spends 1 Mythic Point as a free action when a creature fails this save, the creature is also Paralyzed, experiencing terrible nightmares of their deepest-held anxieties. The Weaver can view these dreams using a Sustain action, which imparts a –2 circumstance penalty to any Will saves the target attempts against the Weaver's spells until the beginning of the Weaver's next turn. At the end of a paralyzed victim's turn, they can attempt a check (will, dc:34) save to end the paralyzed condition (though they are still immobilized until they Escape).",
          "traits": [
            "incapacitation",
            "mental"
          ]
        },
        {
          "id": "z2YzZb7zeh41VhJV",
          "name": "Weaver Venom",
          "kind": "passive",
          "description": "Saving Throw DC 34\nMaximum Duration 6 rounds\nStage 1 2d10 poison (1 round)\nStage 2 2d10 poison and Slowed 1 (2 rounds)\nStage 3 3d10 poison and Slowed 2 (1 round)\nStage 4 4d10 poison (1 round) and the target permanently forgets the Weaver exists, including any previous mention of her.",
          "traits": [
            "poison"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "8pxSqW6YKyuxiast",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "d1ZlOGJL7pgLfOGW",
              "name": "See the Unseen (At Will)",
              "rank": 2
            },
            {
              "id": "MoK4IBw6uDavkYqV",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "5oICydocB531k5zd",
              "name": "Fear",
              "rank": 3
            },
            {
              "id": "hmGqR8AJwe6UjBxV",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "c08klhvgrTPTW9cc",
              "name": "Darkness (At Will)",
              "rank": 4
            },
            {
              "id": "2CP9lFRH4r5UoAuO",
              "name": "Invisibility",
              "rank": 4
            },
            {
              "id": "hFAnqJmbu5TYBPzZ",
              "name": "Nightmare",
              "rank": 4
            },
            {
              "id": "L6oDBq64zPWEiccc",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "wLzd9XFcTcqRGTC0",
              "name": "Web (At Will)",
              "rank": 4
            },
            {
              "id": "soDiXhDIA0zlITE2",
              "name": "Sending (At Will)",
              "rank": 5
            },
            {
              "id": "QUVcdIK26IJf1XCG",
              "name": "Phantasmal Calamity",
              "rank": 6
            },
            {
              "id": "YMMELp8Hh554wrVl",
              "name": "Repulsion",
              "rank": 6
            },
            {
              "id": "KcixjkfvuounuQ9x",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "WsBRjw4ifi5CdKa4",
              "name": "Teleport",
              "rank": 6
            },
            {
              "id": "14pec7I3cmf2GYJ8",
              "name": "Retrocognition",
              "rank": 7
            },
            {
              "id": "ZCy7TiQIm5cIlzfx",
              "name": "Truespeech (Constant)",
              "rank": 7
            },
            {
              "id": "eE2s9G38umoL6Tho",
              "name": "Warp Mind",
              "rank": 7
            },
            {
              "id": "yWnCxChLoXwWeDAi",
              "name": "Dream Council",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:vulot",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "FpM4xd45aBf7wsqH",
      "slug": "vulot",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6122c67862edc9b2d4d9fda9830667fbb8f7f54c742b46c7c1999ebaff5f02e8",
    "translatableHash": "sha256:aea0f6c5939a63e48adad965b693211b9024ba24254d1c61a00e5f20af4bddd8",
    "data": {
      "schemaVersion": 1,
      "name": "Vulot",
      "level": 21,
      "rarity": "unique",
      "size": "large",
      "traits": [
        "demon",
        "fiend",
        "mythic",
        "unholy"
      ],
      "description": "The All or None\nVulot is nascent demon lord of lies, loss of identity, and suffocation. If one of their forms is ever destroyed, they are able to reincorporate as one of their many stolen identities a day later.",
      "armorClass": 46,
      "hitPoints": 425,
      "speedFeet": 30,
      "perception": {
        "modifier": 38,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 35,
        "will": 38
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 4,
        "int": 7,
        "wis": 7,
        "cha": 10
      },
      "skills": {
        "deception": 43,
        "diplomacy": 40,
        "society": 40,
        "thievery": 40
      },
      "languages": [
        "chthonian",
        "common",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "mental"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10",
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "yMaQCaf9JtO8gDwp",
          "name": "Claw",
          "bonus": 37,
          "damage": "4d8+14 slashing; 2d6 bleed",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "9B2azhtpVgbbXIsL",
          "name": "Thought Spike",
          "bonus": 37,
          "damage": "4d6+14 mental",
          "traits": [
            "magical",
            "mental",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "Gy0EDiZwlGfdqcoC",
          "name": "Absolute Surety",
          "kind": "passive",
          "description": "Vulot is dependent on deception and charm to achieve their goals. If Vulot fails to deceive someone, for example failing the Deception check associated with a mislead spell to convince an observer that an action came from the duplicate, Vulot takes 4d6 mental damage. This damage ignores Vulot's usual immunity.",
          "traits": []
        },
        {
          "id": "SGBSRGfkh4r5hJXG",
          "name": "Many Eyes in Many Places",
          "kind": "passive",
          "description": "Vulot can extend their senses through any cultist wearing one of their stolen identities as long as the cultist is in the Universe or the Outer Rifts. Vulot can't maintain their attention through more than three cultists at one time. Vulot can't speak through these cultists.",
          "traits": []
        },
        {
          "id": "8ynYZMajyCmXhUbq",
          "name": "Recharge Spell",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nVulot gains an additional use of any of their innate spells.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "bbDbjcell2ftzAxQ",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect Vulot removes any one condition currently affecting them.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "U7vpjsB2h847KYxV",
          "name": "Another Face",
          "kind": "passive",
          "description": "When Vulot is reduced to 0 Hit Points, they regenerate themself from a stolen identity of their choice in 24 hours. If Vulot has no stolen identities remaining or is otherwise unable to reach them, they are killed permanently.",
          "traits": []
        },
        {
          "id": "yVuwDzx4JtpqtgpW",
          "name": "Mythic Immunity",
          "kind": "passive",
          "description": "Vulot is immune to harmful spells cast by non-mythic creatures, Strikes made with non-mythic weapons, and unarmed Strikes from non-mythic characters.",
          "traits": []
        },
        {
          "id": "5kiH1CaCLLvktz7W",
          "name": "Perfect Mimicry",
          "kind": "reaction",
          "description": "Trigger A spell is cast within 60 feet of Vulot\nEffect Vulot copies the spell and may cast it once by spending a Mythic Point within the next 24 hours. Vulot can't hold more than two copied spells at one time.",
          "traits": [
            "magical",
            "visual"
          ]
        },
        {
          "id": "4F0nGmA73RdEI2BG",
          "name": "Suffocated by a Thousand Breaths",
          "kind": "passive",
          "description": "30 feet. Vulot's breath-stealing influence radiates out from their body, causing victims to feel like they are being smothered. Any creature that starts its turn within the aura must attempt a check (fortitude, dc:41, options:area-effect,inflicts:off-guard,inflicts:fatigued) save.\nCritical Success The creature is unaffected.\nSuccess The creature becomes short of breath and is Off-Guard until the beginning of its next turn.\nFailure The creature finds it very difficult to catch its breath. It can't speak or use auditory actions until the beginning of its next turn; this prevents it from casting spells that don't have the subtle trait.\nCritical Failure All the air immediately leaves the creature's lungs and it begins to suffocate. When it succeeds at the saving throw to regain consciousness at the end of its turn, it becomes Fatigued until it gets a full night's rest.",
          "traits": [
            "aura",
            "incapacitation"
          ]
        },
        {
          "id": "0ulWyGnt53Yk7jRb",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "IUHOr0saRc0Nd6rq",
          "name": "Steal Face",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect Vulot makes a claw Strike. On a hit, Vulot attempts a check (deception, against:will) check against the target's Will DC to steal that creature's face; on a critical hit, Vulot treats the result of their Deception check as one degree of success higher. On a success, Vulot steals the target's face for 1d4 (1 minute on a critical success); a creature whose face has been stolen isn't considered an ally by any creature.",
          "traits": []
        },
        {
          "id": "SlteE5Bcul2iqCIo",
          "name": "Steal Thoughts",
          "kind": "passive",
          "description": "Vulot's mental attacks can confuse and disorient. A creature struck by Vulot's thought spike must attempt a check (will, dc:44, options:inflicts:stupefied,inflicts:confused) save. A creature stupefied by this effect is Off-Guard to Vulot's Steal Face ability.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Stupefied 1 for 1 round.\nFailure The creature becomes stupefied 1 for 1 minute. If it's already stupefied, its stupefied value increases by 1 instead (to a maximum of stupefied 4).\nCritical Failure As failure, plus the creature is Confused for 1 minute.",
          "traits": [
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "GY9bSpltM0UvevGk",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 44,
          "spells": [
            {
              "id": "bpp2By5P4QhL7sW8",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "ftMPev87T0J7ZG5k",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "csTROw9NaZJzVDL5",
              "name": "Translocate (At Will)",
              "rank": 5
            },
            {
              "id": "h6tjPRTQZUu9uieb",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "0vdyO0h19IyVvYBK",
              "name": "Repulsion",
              "rank": 6
            },
            {
              "id": "kczBFCZducsXMWl4",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "GpFaCkF0sJ1mrPQ4",
              "name": "Divine Decree",
              "rank": 7
            },
            {
              "id": "ddvo3EfjZ9cMGd8Y",
              "name": "Overwhelming Presence",
              "rank": 9
            },
            {
              "id": "6Ov85L8a4Yk4hqBp",
              "name": "Dominate",
              "rank": 10
            },
            {
              "id": "gqmH09BCarxTpdwn",
              "name": "Manifestation",
              "rank": 10
            },
            {
              "id": "iW2BjX11BwcL7okM",
              "name": "Shadow Blast",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:agyra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "yQIro3136G7EUgLQ",
      "slug": "agyra",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e13ebd04233a75cf2712e0649495862f5953d858d774a103d7b8e3e5494eeb62",
    "translatableHash": "sha256:c49b5f1a53758eb2d3544050ffe745bbb5b986b51f16fc92ff3fa7d3cb6f9217",
    "data": {
      "schemaVersion": 1,
      "name": "Agyra",
      "level": 23,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "beast",
        "kaiju",
        "mythic"
      ],
      "description": "The Forever Storm\nAgyra is a massive kaiju who protects Spinescar Island and its inhabitants.",
      "armorClass": 49,
      "hitPoints": 475,
      "speedFeet": 40,
      "perception": {
        "modifier": 38,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 37,
        "reflex": 40,
        "will": 34
      },
      "abilities": {
        "str": 10,
        "dex": 11,
        "con": 9,
        "int": -2,
        "wis": 6,
        "cha": 6
      },
      "skills": {
        "acrobatics": 43,
        "athletics": 41
      },
      "languages": [
        "tien"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "drained",
          "electricity",
          "fear-effects",
          "paralyzed"
        ],
        "resistances": [
          "acid 20",
          "fire 20",
          "sonic 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Y7AJ4eWSGKUcPBbp",
          "name": "Talon",
          "bonus": 40,
          "damage": "4d10+14 slashing; 2d8 electricity",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "O7Y8m2HEl1XatWW8",
          "name": "Jaws",
          "bonus": 40,
          "damage": "3d12+14 piercing; 2d8 electricity",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "des3C0uRIBkg98Gt",
          "name": "Tail",
          "bonus": 40,
          "damage": "4d8+14 bludgeoning; 2d6 bleed",
          "traits": [
            "deadly-d10",
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "3yVevLb8KUTnEyOi",
          "name": "Spike",
          "bonus": 42,
          "damage": "7d6+10 piercing",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "do4wjbcTNPYd9aN3",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect Agyra removes any one condition currently affecting her.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "Yr4xs4UuKzBLJ4Fg",
          "name": "Stormsight",
          "kind": "passive",
          "description": "Wind, precipitation, and clouds don't impair Agyra's vision; she ignores the Concealed condition from storms, mist, precipitation, and the like.",
          "traits": []
        },
        {
          "id": "0Dkm3fkoph5mYGDZ",
          "name": "Regeneration",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "nqaKv0W54jagF4tQ",
          "name": "Electrified Rebirth",
          "kind": "passive",
          "description": "Frequency once per year\nEffect When Agyra dies, her corpse crackles and sparks with electrical energy. Any creature that touches Agyra's body within 1 hour of her death takes 11d6 electricity damage (check (reflex, dc:43, basic) save). After being dead for 1 minute, Agyra is immediately resurrected in the same place, at full health, with all abilities fully restored. She normally takes advantage of this rebirth to flee to safety, using Thunderous Departure to retreat. If Agyra has already died and been reborn in the same year, she remains permanently dead upon being slain a second time.",
          "traits": [
            "electricity",
            "primal"
          ]
        },
        {
          "id": "Umcrow6uqGwmnu8G",
          "name": "Mythic Immunity",
          "kind": "passive",
          "description": "Strikes\nThe creature is immune to either harmful spells cast by non-mythic creatures, or Strikes made with non-mythic weapons and unarmed Strikes from non-mythic characters. Only the most powerful creatures (typically level 25) should be immune to both.",
          "traits": []
        },
        {
          "id": "tyORXsrZpDl68qjz",
          "name": "Mythic Resilience",
          "kind": "passive",
          "description": "Agyra treats her saving throws with Fortitude and Reflex saves as one step better than they actually are (so a critical failure is a failure, a failure is a success, and a success is a critical success). Whenever a character rolls a critical hit against Agyra, they must reroll the attack roll and take the new result.",
          "traits": []
        },
        {
          "id": "e7l4EXmShMIlfCfe",
          "name": "Blinding Flash",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect By spreading her wings while she stands upon the ground, Agyra can create a blinding flash of light that targets all creatures within 100 feet. Affected creatures must succeed at a check (fortitude, dc:43) check.\nCritical Success The target is unaffected.\nSuccess The target is Dazzled and Stupefied 1 for 1d4.\nFailure The target is Blinded and Stupefied 2 for 1 minute.\nCritical Failure The target is blinded and stupefied 2 for 10 minutes.",
          "traits": [
            "light",
            "manipulate",
            "primal",
            "visual"
          ]
        },
        {
          "id": "lyPuKy6Ut0SMcXFS",
          "name": "Conjure Hurricane",
          "kind": "action",
          "description": "Frequency once per day\nCost 1 Mythic Point\nEffect Agyra generates a hurricane that spreads across a 4-mile radius and lasts 24 hours, with a 500-foot calm eye of the storm at its center. Agyra is at the center of this hurricane when it is formed, but it moves normally (according to surrounding weather conditions and the GM's discretion) afterward.",
          "traits": [
            "air",
            "manipulate",
            "primal"
          ]
        },
        {
          "id": "oOuC0cWK8o9RXqgS",
          "name": "Lightning Breath",
          "kind": "action",
          "description": "Agyra exhales a line of electricity from each of her two heads. Each line is 120-foot line, and the two lines may be pointed in different directions. A creature in a line takes 22d6 electricity damage (check (reflex, dc:44, basic, options:area-effect) save). On a failed save, the target is also Slowed 1 for 1d4. A creature can be affected only once by a line, even if they are in an overlapping area. A character slain by Agyra's Lightning Breath remains electrified for 2d4 after death. A creature touching such a corpse takes 3d6 electricity damage (no save). Agyra can't use Lightning Breath for 1d4.",
          "traits": [
            "electricity",
            "primal"
          ]
        },
        {
          "id": "KPiyOSSZLYzEbtPS",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "uWPXm4AmK6MPKcvJ",
          "name": "Recharge Ability",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect Agyra gains an additional use of lightning breath.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "UwjIkW4TqzeSFhpR",
          "name": "Stormflight",
          "kind": "passive",
          "description": "Agyra can move in strong winds with ease. She doesn't treat wind as difficult terrain or need to Maneuver in Flight in high winds.",
          "traits": []
        },
        {
          "id": "I5ft0MrsCOlxysfk",
          "name": "Thunderous Departure",
          "kind": "passive",
          "description": "Frequency once per day\nEffect Agyra Flies in a straight line at incredible speed, moving at least 120 feet but up to 1 mile. This movement doesn't provoke reactions. Her departure leaves behind a thunderous sonic boom, creating a 100-foot type:burst centered on her point of departure. All creatures in the area take 15d10 sonic damage (check (fortitude, dc:46, basic, options:area-effect) save). A creature who fails is also knocked Prone, and a creature who critically fails is knocked prone and Deafened permanently.",
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
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:verex-that-was",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "qPFA9IM6QjnSuagx",
      "slug": "verex-that-was",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fdb52088d6c62ae1a4e669c66002458be990350e0806148675b30e2a07e81319",
    "translatableHash": "sha256:a8b74ec4b5042ebed0b5e02e2e0f53f30f40ed1658c77ecce2e4c3323a75fddc",
    "data": {
      "schemaVersion": 1,
      "name": "Verex-That-Was",
      "level": 24,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "mythic"
      ],
      "description": "A Bloody Spawn of Rovagug\nOnce an orc god, Verex-That-Was has been reshaped into a towering creature of mangled flesh and bone.",
      "armorClass": 51,
      "hitPoints": 550,
      "speedFeet": 50,
      "perception": {
        "modifier": 42,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 42,
        "reflex": 38,
        "will": 36
      },
      "abilities": {
        "str": 12,
        "dex": 9,
        "con": 11,
        "int": 7,
        "wis": 7,
        "cha": 4
      },
      "skills": {
        "athletics": 45,
        "intimidation": 45
      },
      "languages": [
        "aklo",
        "common",
        "orcish"
      ],
      "defenses": {
        "immunities": [
          "acid",
          "death-effects",
          "disease",
          "mental",
          "poison"
        ],
        "resistances": [
          "cold 25",
          "fire 25",
          "physical 20 except holy"
        ],
        "weaknesses": [
          "holy 20"
        ]
      },
      "attacks": [
        {
          "id": "rh3d7LdJAYjTZRYM",
          "name": "Claw",
          "bonus": 44,
          "damage": "5d10+22 slashing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "o0CSk2eMpM5SUUaF",
          "name": "Jaws",
          "bonus": 44,
          "damage": "4d12+22 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "90VlEvjgRHXiJg8o",
          "name": "Tail",
          "bonus": 44,
          "damage": "3d8+22 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-20",
            "unholy"
          ]
        },
        {
          "id": "qASNHKaPm9S4XmC7",
          "name": "Teeth",
          "bonus": 42,
          "damage": "5d6+16 piercing",
          "traits": [
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "GXv0fK0nlpiW9eRS",
          "name": "Regeneration (Deactivated by Sloughstone Weapons)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "dGKajIVY53lSwxaH",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "150 feet. check (will, dc:45, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "RGQybNAvFA3SDkjw",
          "name": "Mythic Immunity",
          "kind": "passive",
          "description": "Verex-That-Was is immune to harmful spells cast by non-mythic creatures, Strikes made with non-mythic weapons, and unarmed Strikes from non-mythic characters.",
          "traits": []
        },
        {
          "id": "9gKIQtI8kPnOv99m",
          "name": "Mythic Resilience",
          "kind": "passive",
          "description": "Verex-That-Was treats his saving throws with the associated save as one step better than they actually are (so a critical failure is a failure, a failure is a success, and a success is a critical success).",
          "traits": []
        },
        {
          "id": "1odL3qIXeArH9g8O",
          "name": "Undying Myth",
          "kind": "passive",
          "description": "Cost all the creature's Mythic Points\nTrigger Verex-That-Was would die and has at least 1 Mythic Point\nEffect Verex remains standing and conscious, and (floor(effect value/2))[healing].",
          "traits": []
        },
        {
          "id": "OuHFKcjzJlzQTflP",
          "name": "Battlefield Eruption",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect Verex-That-Was burrows into the ground, reemerging anywhere on the same plane where either he or his worshippers have previously killed at least 10 sapient creatures in battle. A fountain of gore and shattered bone erupts from the ground when Verex arrives, dealing 16d10 piercing damage in a 30-foot type:emanation (check (reflex, dc:48, basic, options:area-effect) save).",
          "traits": [
            "mythic",
            "teleportation"
          ]
        },
        {
          "id": "KteLz40XOMcgbe5f",
          "name": "Bloodboils",
          "kind": "passive",
          "description": "Wounds caused by direct contact with Verex-That-Was erupt into painful, blood-filled boils. A creature struck by Verex-That-Was's jaws or tail must succeed at a check (fortitude, dc:45) or gain weakness 10 to physical damage for 1 day as the boils explode messily each time the creature sustains another wound. The bloodboils can be counteracted with a 3rd-rank (or higher) Cleanse Affliction spell, but the disease also ends if the victim receives magical healing that brings them to their Hit Point maximum.",
          "traits": [
            "disease"
          ]
        },
        {
          "id": "W1UAHesyMDdlZ47C",
          "name": "Leap into the Fray",
          "kind": "action",
          "description": "Verex-That-Was Leaps up to 20 feet horizontally and up to 10 feet vertically and then makes one claw Strike, one jaws Strike, and one tail Strike in any order. If Verex-That-Was spends 1 Mythic Point as part of this action, he doubles the distances he can Leap and each creature he lands adjacent to is Off-Guard until the end of his turn.",
          "traits": []
        },
        {
          "id": "rYtWPeJTtunerGgw",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "4zHTrRFZ0GF5Urb5",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, 4d10+10 bludgeoning damage, Rupture 50",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "GXO9oeuX2PBBdqNd",
          "name": "Symphony of Pain",
          "kind": "reaction",
          "description": "Trigger A creature within Verex-That-Was's frightful presence damages Verex-That-Was\nEffect Verex unleashes an echo of psychic pain throughout his vicinity, inflicting mental damage equal to half of the damage he sustained on all creatures, friend or foe, within 150 feet (check (fortitude, dc:45, basic) save).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:war-of-immortals-bestiary:oliphaunt-of-jandelay",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "war-of-immortals-bestiary",
      "sourceId": "fH8t5uKyFA4UuZqp",
      "slug": "oliphaunt-of-jandelay",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:93f7f7c4efe6409eccf062d6221a359d0969552c7c5fa5d55cdba9c7c6b9b555",
    "translatableHash": "sha256:2ca509f9af976dbf18b300af00ef2cfa2c2700b131aebeb8cf2323ad8a16d360",
    "data": {
      "schemaVersion": 1,
      "name": "Oliphaunt of Jandelay",
      "level": 25,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "monitor",
        "mythic"
      ],
      "description": "Harbinger of Annihilation\nThe Oliphaunt of Jandelay is drawn to worlds that are hurtling toward imminent annihilation.",
      "armorClass": 48,
      "hitPoints": 680,
      "speedFeet": 60,
      "perception": {
        "modifier": 39,
        "senses": [
          "scent-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 48,
        "reflex": 37,
        "will": 39
      },
      "abilities": {
        "str": 12,
        "dex": 5,
        "con": 10,
        "int": -1,
        "wis": 7,
        "cha": 7
      },
      "skills": {
        "athletics": 50
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "clumsy",
          "cold",
          "disease",
          "drained",
          "enfeebled",
          "mental",
          "paralyzed",
          "persistent-damage",
          "petrified",
          "poison",
          "polymorph",
          "prone",
          "slowed",
          "stunned",
          "stupefied"
        ],
        "resistances": [
          "acid 20",
          "fire 20",
          "physical 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4Jhl2RR490RdwQHK",
          "name": "Tusk",
          "bonus": 45,
          "damage": "4d10+22 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "IHp0ijMt8U8oZOcY",
          "name": "Foot",
          "bonus": 45,
          "damage": "4d6+22 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "J2tE5i0AEs8vrir6",
          "name": "Trunk",
          "bonus": 45,
          "damage": "2d12+22 bludgeoning",
          "traits": [
            "magical",
            "reach-30"
          ]
        },
        {
          "id": "2dPopGUG3ZmSG1cd",
          "name": "Debris Toss",
          "bonus": 43,
          "damage": "4d8+16 bludgeoning",
          "traits": [
            "deadly-2d8",
            "propulsive"
          ]
        }
      ],
      "actions": [
        {
          "id": "B3zBOwUNfu3bLg2P",
          "name": "Remove a Condition",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Oliphaunt of Jandelay removes any one condition currently affecting it.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "vtpTwsmfwcfLp9Eg",
          "name": "Regeneration",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "4vuIn0FH90IAXJZF",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "300 feet. check (will, dc:46, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "qmkJupy64foC4o23",
          "name": "Legendary Vigor",
          "kind": "passive",
          "description": "The Oliphaunt of Jandelay is immune to penalties to its Speeds, and it ignores difficult terrain and greater difficult terrain.",
          "traits": []
        },
        {
          "id": "09zr2mkHYoa2dlrA",
          "name": "Mythic Immunity",
          "kind": "passive",
          "description": "The Oliphaunt of Jandelay is immune to harmful spells cast by non-mythic creatures, Strikes made with non-mythic weapons, and unarmed Strikes from nonmythic characters.",
          "traits": []
        },
        {
          "id": "N0tzcyXMdu07ek1R",
          "name": "Mythic Resilience",
          "kind": "passive",
          "description": "The Oliphaunt treats its saving throws with the associated save as one step better than they actually are (so a critical failure is a failure, a failure is a success, and a success is a critical success). The first time each round that a character rolls a critical hit against the Oliphaunt, they must reroll the attack roll and take the new result.",
          "traits": []
        },
        {
          "id": "vAuHHRu15yY5K4k9",
          "name": "Reactive",
          "kind": "passive",
          "description": "The Oliphaunt of Jandelay gains 3 reactions each round. It can still use only one reaction per trigger.",
          "traits": []
        },
        {
          "id": "kBfKLrEg8pYRwhjs",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "bhysfIDJlRE46p1X",
          "name": "Undying Myth",
          "kind": "passive",
          "description": "Cost all the creature's Mythic Points\nTrigger The creature would die and has at least 1 Mythic Point\nEffect When the Oliphaunt of Jandelay would die, as long as it has at least 1 Mythic Point, it immediately expends all remaining Mythic Points it has, remains standing and conscious, and recovers (floor(effect value/2))[healing].",
          "traits": []
        },
        {
          "id": "0iTTc5eoCUpSjskp",
          "name": "Brutal Drag",
          "kind": "passive",
          "description": "When the Oliphaunt takes a Stride action, any creature Grabbed by the Oliphaunt of Jandelay's tusk is moved along with it to a location within 20 feet of the Oliphaunt's ending location. They remain grabbed and the GM determines which square they end up in.",
          "traits": []
        },
        {
          "id": "vvltSOFKWwSN9pbb",
          "name": "Destructive Frenzy",
          "kind": "action",
          "description": "The Oliphaunt of Jandelay makes two tusk Strikes, two foot Strikes, and one trunk Strike in any order.",
          "traits": []
        },
        {
          "id": "SZPK1jhXDeTIsaJD",
          "name": "Devastating Launch",
          "kind": "action",
          "description": "Cost 1 Mythic Point\nEffect The Oliphaunt of Jandelay buries its tusks into the ground in a 15-foot type:burst centered within 20 feet of it, collecting everything in that area, including any creature currently Grabbed by its tusk attack, and flinging it all up to 120 feet away. Everything lands in a 30-foot type:burst, dealing 12d6 bludgeoning damage to each creature in the area (check (reflex, dc:51, basic, options:area-effect) save). This damage also applies to any creatures, vehicles, or objects the Oliphaunt flung as well. A creature in the area being flung that succeeds or critically succeeds on their Reflex save remains in the square they started in. Anything launched by the Oliphaunt lands in a square in the burst as determined by the GM.",
          "traits": []
        },
        {
          "id": "MGlsEYwduFGAn3fE",
          "name": "Mythic Power",
          "kind": "passive",
          "description": "The creature has a pool of 3 Mythic Points, and can spend those Mythic Points for any of the actions it has.",
          "traits": []
        },
        {
          "id": "lccIEtDFEyprHwTS",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:46, basic)\nWhen the Oliphaunt of Jandelay Tramples, it can Stride up to triple its Speed, and any creature that fails or critically fails the Reflex save is knocked Prone.",
          "traits": []
        },
        {
          "id": "Kvj9gEu0opp2KIbx",
          "name": "Trumpeting Blast",
          "kind": "action",
          "description": "The Oliphaunt of Jandelay emits a cacophonous blast from its trunk in a 120-foot type:cone. Each creature in the area must attempt a check (fortitude, dc:49, options:area-effect,damaging-effect,inflicts:deafened,inflicts:slowed) save. If the Oliphaunt spends 1 Mythic Point as part of the activity, the DC becomes 51 and the damage dice are increased to d12s. The Oliphaunt of Jandelay can't use Trumpeting Blast again for 1d4.\nCritical Success The creature is unaffected.\nSuccess The creature takes 7d10 sonic damage and is Deafened for 1 round.\nFailure The creature takes 14d10 sonic damage, is Slowed 1 for 2 rounds, and is deafened for 2 rounds.\nCritical Failure The creature takes 28d10 sonic damage, is Slowed 2 for 2 rounds, and is deafened for 4 rounds.",
          "traits": [
            "sonic"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "9mPx48jtEKu1Jfo9",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 46,
          "spells": [
            {
              "id": "0OAlJLpmih9rnp4h",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "XoNVlNhbZOQkaSvG",
              "name": "Cataclysm",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:mitflit-vermin-cavalry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "4Bvb7rVBB5gg7a2N",
      "slug": "mitflit-vermin-cavalry",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:572294fad776a0a54945adf63f6b9de049a89f3ebfbd0cd0ca69a54581962027",
    "translatableHash": "sha256:ea2d2eca1c488566a62bd50b9c0d957ab1b22afc92fb59fb6804300dd09f2995",
    "data": {
      "schemaVersion": 1,
      "name": "Mitflit Vermin Cavalry",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "fey",
        "gremlin",
        "troop"
      ],
      "description": "Though mitflits are known as cowardly gremlins, they can be urged into an aggressive fervor by the right leader. Mounted on giant ticks, centipedes, and other verminous arthropods, these mitflits overcome their self-loathing to take the fight to their enemies.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 15,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 1,
        "int": -1,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 10,
        "diplomacy": 8,
        "nature": 10,
        "stealth": 12
      },
      "languages": [
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5",
          "cold-iron 4"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 60 (4 segments), Thresholds 40 (3 segments), 20 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "pdDjyRubh4JykjK1",
          "name": "Crawling Stabs",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The mitflits thrust with their shortswords, coordinated with bites from their giant vermin mounts. All enemies in a 5-foot type:emanation must attempt a check (reflex, dc:18, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 piercing damage\n2 2d6+4 piercing damage\n3 2d6+8 piercing damage",
          "traits": []
        },
        {
          "id": "P6s1HQwegXyFaIih",
          "name": "Leaping Charge",
          "kind": "action",
          "description": "The mitflit vermin cavalry Leaps up to 30 feet. If it moves at least 15 feet, the cavalry deals 2d6+4 piercing damage (check (reflex, dc:18, basic, options:area-effect) save) to each enemy within a 5-foot type:emanation at the end of its movement.",
          "traits": []
        },
        {
          "id": "AYEfCOwUzittbzFm",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids may not work on the mitflit vermin cavalry, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "9w4raGfyxBVkVKDT",
          "name": "Vengeful Wrath",
          "kind": "passive",
          "description": "As long as it's not Frightened, the mitflit vermin cavalry gains a +2 status bonus to the DC of its Crawling Stabs ability against creatures that have previously damaged or tormented it.",
          "traits": [
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "7pP404ymmi04XcEy",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 18,
          "spells": [
            {
              "id": "RSR3qgsi4LnnkUcl",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "Ebt3RUZXpFsEqP8G",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "wMKjrPGI7Ghogw8W",
              "name": "Speak with Animals (Arthropods only; at Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:goblin-rabble",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "IWVQdIhXQTmfaQqB",
      "slug": "goblin-rabble",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5fa49e5047d6e66134bc854533d995a26fb0cf32b3a2fe6424dae6ceebd4df9d",
    "translatableHash": "sha256:467cdddc0d821cb11af669d45dfc4296d707ea0826cf5087e57982202cf3ec86",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Rabble",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "goblin",
        "humanoid",
        "troop"
      ],
      "description": "Goblins lack the organization and discipline of their hobgoblin cousins but often more than make up for it with guile. Some goblin tribes like to terrorize trade routes under the cover of dusk. Focused on stripping valuables and escaping rather than finishing a fight, these groups of goblins excel at speed and identifying things of value to strip from their bewildered prey, using hit-and-run tactics since they tend to be outmatched more often than not.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 10,
        "stealth": 12,
        "thievery": 12
      },
      "languages": [
        "common",
        "goblin"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 4",
          "splash-damage 4"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 60 (4 segments); Thresholds 40 (3 segments), 20 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eRRRtU4JqLtCwvrs",
          "name": "Dogpile",
          "kind": "action",
          "description": "1 to 3\nThe goblin rabble engage in as coordinated an attack as they can with their dogslicers, attacking each enemy in a 5-foot type:emanation (check (reflex, dc:18, basic, options:area-effect,inflicts:prone) save). The damage depends on the number of actions. A creature who critically fails their save is also knocked Prone.\n1 1d6 slashing damage\n2 2d6+4 slashing damage\n3 2d6+7 slashing damage",
          "traits": []
        },
        {
          "id": "7XYw0EuPpuxTe0VW",
          "name": "Hobble Pursuit",
          "kind": "action",
          "description": "The goblin rabble hamstring and hobble as many enemies as possible. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:18) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –5-foot circumstance penalty to their Speeds.\nFailure The creature takes a –10-foot circumstance penalty to their Speeds and is Slowed 1.\nCritical Failure The creature takes a –15-foot circumstance penalty to their Speeds and is slowed 1.\nEffect: Hobble Pursuit",
          "traits": []
        },
        {
          "id": "8fqpfYBxFIhGzamm",
          "name": "Rush and Steal",
          "kind": "action",
          "description": "Quickly moving in with grasping hands, the goblin rabble take what they can. The goblin rabble Strides up to twice their Speed. During this movement, the goblins Interact to pick up an unattended object no larger than 2 Bulk or attempt to Steal an item from a creature they are adjacent to; the goblins can pick up or Steal as many objects as they have remaining segments in any combination.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:kobold-trap-squad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "X5UZZ6b6sq5JVJN9",
      "slug": "kobold-trap-squad",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e77f9560de0a32a77d79486c29f386b407e785887410b85759d3be12454bd068",
    "translatableHash": "sha256:99ce47309972b5c9ff3a1de8c4d624eaa8dc7d2be2496037ed6dac0ebb4c4d83",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Trap Squad",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "humanoid",
        "kobold",
        "troop"
      ],
      "description": "Kobold trap squads generally protect their warrens, but these groups sometimes range outside of their lairs at the behest of a powerful patron. Their goals are usually to scout a given location, but they can be tasked with procuring an item or resource for the good of the warren.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 0,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "crafting": 10,
        "survival": 10
      },
      "languages": [
        "common",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 60 (4 segments); Thresholds 40 (3 segments), 20 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "wXMVIRjPi2YzTdR0",
          "name": "Group Scamper",
          "kind": "action",
          "description": "Frequency once per round\nEffect The kobolds Stride up to their Speed plus 5 feet and gain a +2 circumstance bonus to AC against reactions triggered by this movement. If they end this movement with at least 1 segment adjacent to any enemy, the squad is Off-Guard until the beginning of its next turn.",
          "traits": []
        },
        {
          "id": "z3HQYCUmAo0o9v2u",
          "name": "Hasty Traps",
          "kind": "action",
          "description": "The kobolds hastily prepare a handful of rudimentary traps in their vicinity until the beginning of their next turn. The next creature who moves adjacent to the trap squad triggers a trap and must attempt a check (reflex, dc:18) save. On a failure, the creature takes 1d4 persistent bleed damage 2d4 persistent bleed damage on a critical failure). A creature taking persistent bleed damage from Hasty Traps takes a –5-foot enhancement penalty to its Speed. This occurs to as many creatures as the kobold trap squad has segments when it performed the action, but a single creature can trigger only one trap per turn.\nEffect: Hasty Traps",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "saCHZrL12xRzQ6S0",
          "name": "Sling Barrage",
          "kind": "action",
          "description": "The kobolds draw their slings, then launch a ranged barrage of stones. This barrage is a 10-foot type:burst within 50 feet that deals 3d4 bludgeoning damage with a check (reflex, dc:18, basic, options:area-effect) save. When the squad is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "iana8aSR0WrAjjvs",
          "name": "Spear Jabs",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The kobold trap squad engages in a coordinated melee attack against all enemies in a 5-foot type:emanation, with a check (reflex, dc:18, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 piercing damage\n2 2d6+4 piercing damage\n3 2d6+7 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:clockwork-runner-pack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "BYh3tkAX9SgGFuXD",
      "slug": "clockwork-runner-pack",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6d9d3ca0dbbfede23b8181976a6d205ba4d0bdbdc52402fcffcdd1f7027b44ca",
    "translatableHash": "sha256:42d102bf87a9d392fea206bf438f26c7f19c9847ab294e8ae51c9b1c9cc130f8",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Runner Pack",
      "level": 5,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "clockwork",
        "construct",
        "mindless",
        "troop"
      ],
      "description": "Clockwork runners are units build for speed. Mimicking large cats, they sacrifice sturdiness for agility. Runners provide excellent battlefield control by speedily traversing diverse terrain types, able to cut off enemy units and provide covering fire for allies with their built-in crossbows. As clockworks, they do need to be rewound, making them less ideal for longer deployments.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 15,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 0,
        "int": -5,
        "wis": 5,
        "cha": -5
      },
      "skills": {
        "athletics": 12,
        "stealth": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "electricity 5",
          "splash-damage 5",
          "orichalcum 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "IWRYdtXAJ49GqLfB",
          "name": "Wind-Up",
          "kind": "passive",
          "description": "48 hours, Disable Device DC 19, standby\nFor a clockwork to act, it must be wound with a unique key by another creature. This takes 1 minute. Once wound, it remains operational for the listed amount of time, usually 24 hours, after which time it becomes unaware of its surroundings and can't act until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most clockwork keepers wind all their clockworks at a set time, typically 8 a.m.\nA clockwork that lists standby in its wind-up entry can enter standby mode as a 3-action activity. Its operational time doesn't decrease in standby, but it can sense its surroundings (with a -2 penalty to Perception). It can't act, with one exception: when it perceives a creature, it can exit standby as a reaction (rolling initiative if appropriate).\nA creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, the clockwork loses 1 hour of operational time. This can be done even if the clockwork is in standby mode.",
          "traits": []
        },
        {
          "id": "TVIfnwEhfPGYPEck",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 75 (4 segments); Thresholds 50 (3 segments), 25 (2 segments)",
          "traits": []
        },
        {
          "id": "Sdo7CXc8emhHVj93",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Hh1zN6n8JRhOzsdT",
          "name": "Fire Crossbows",
          "kind": "action",
          "description": "The clockwork runners reload the crossbows built onto their backs, then launch a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 120 feet that deals 2d8 piercing damage (check (reflex, dc:19, basic, options:area-effect) save). When the clockwork runners are reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "lQ7JmilKyrxwRdga",
          "name": "Scratch and Bite",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The clockwork runners engage in a pack attack against each enemy in a 5-foot type:emanation, with a check (reflex, dc:19, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8 untyped damage\n2 2d8+3 untyped damage\n3 2d8+7 untyped damage",
          "traits": []
        },
        {
          "id": "gBzSzuaHS6SO6ebY",
          "name": "War Pounce",
          "kind": "action",
          "description": "Frequency once per round\nEffect The clockwork runner pack Strides, ignoring difficult terrain (but not greater difficult terrain). At the end of this movement, each enemy in a 5-foot type:emanation takes 1d8 untyped damage (check (reflex, dc:19, basic, options:area-effect) save).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:orc-raiding-party",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "pC7oMxW93OArImq9",
      "slug": "orc-raiding-party",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7da38a5c2c2b34c71ec44d1f2e92d86719eea88e3201e2ab566950249c03e144",
    "translatableHash": "sha256:b7fd36fb594b13dcc0775350cca5612bfa13df13b4f9b9e5480848a2ca7a1ff1",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Raiding Party",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "humanoid",
        "orc",
        "troop"
      ],
      "description": "Orc raiding parties are feared units whose unrelenting attacks and sheer ferocity make them capable, if not subtle, soldiers. Orc raiders take the duty of carrying their hold's banner into combat with deadly seriousness and will gladly risk grievous injuries to keep their hold's standard flying high.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 13,
        "intimidation": 12
      },
      "languages": [
        "common",
        "orcish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "Mqkq79UBprlR4QUI",
          "name": "Ferocious Fall",
          "kind": "reaction",
          "description": "The orc raiding party is about to lose a segment due to passing a Hit Point threshold\nEffect The dying orc raiders lash out as they fall. Each enemy in a 5-foot type:emanation takes 1d6+2 piercing damage (check (reflex, dc:19, basic, options:area-effect) save); this occurs before the raiding party loses a segment.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 75 (4 segments); Thresholds 50 (3 segments), 25 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "JmphMuXffisMi4gh",
          "name": "Break Through",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nEffect The orc raiders exploit a gap in enemy lines. The orc raiding party Strides twice; it can pass through spaces of Medium or smaller creatures but can't end its movement in them. All enemies whose spaces the orc raiding party passed through or were adjacent to at any point during their movement take 1d6+2 piercing damage (check (reflex, dc:19, basic, options:area-effect,forced-movement) save). A creature who critically fails this save is also pushed 5 feet away from the orc raiding party. Break Through damages each creature only once.",
          "traits": []
        },
        {
          "id": "RfgBo9ONJcGFGDAH",
          "name": "Iron Rain",
          "kind": "action",
          "description": "The orc raiders launch a multitude of javelins at foes in a deadly volley. This volley is a 10-foot type:burst within 30 feet that deals 3d6 piercing damage with a check (reflex, dc:19, basic, options:area-effect) save. When the orc raiding party is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "pn0H1cy7HVHZUeAM",
          "name": "Rip Them Up",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The orc raiders batter all enemies in a 5-foot type:emanation with coordinated knuckle dagger strikes (check (reflex, dc:19, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d6+2 piercing damage\n2 2d6+5 piercing damage\n3 3d6+7 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:apprentice-magician-clique",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "tKPZ1iDZukJDvzAK",
      "slug": "apprentice-magician-clique",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3564312a3fd0d998636c9f70136db69c5d01649e851ce3c482d3d8fdca3a3a6a",
    "translatableHash": "sha256:41d56dc4e364e2801647eed5b562b983f682a3a684fe3747ebddd114f7b01a98",
    "data": {
      "schemaVersion": 1,
      "name": "Apprentice Magician Clique",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Students at academies that teach magic sometimes form fast friendships. When not studying or blowing off steam together, these cliques might be called to defend their place of learning from outside attack.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 5,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "arcana": 13,
        "deception": 10,
        "diplomacy": 10,
        "thievery": 12
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 4",
          "splash-damage 4"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 75 (4 segments); Thresholds 50 (3 segments), 25 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "298SOrPtZWcvtOhq",
          "name": "Barrage of Force",
          "kind": "action",
          "description": "The apprentice magicians launch shards of pure magic at all creatures in a 10-foot type:burst within 120 feet. This barrage deals 5d4 force damage (check (reflex, dc:19, basic, options:area-effect) save). When the clique is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "arcane",
            "force"
          ]
        },
        {
          "id": "zr4cOSOQ86KFbjyD",
          "name": "Clique Spellcasting",
          "kind": "passive",
          "description": "When the apprentice magician clique Casts a Spell, its members pool their arcane power into the spell. A creature who critically fails their save against the spell or whom the clique hits with a critical spell attack is also Stupefied 1 for 1 minute.",
          "traits": []
        },
        {
          "id": "bbuOUmrCvWVMuNcJ",
          "name": "Sparking Wands",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The apprentice magicians wave wands that shoot out minor bolts of electricity at short range. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:19, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 1d8 electricity damage\n2 2d8+3 electricity damage\n3 2d8+7 electricity damage",
          "traits": [
            "arcane",
            "electricity"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "DCvynQYdxN4T9sWV",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 15,
          "saveDc": 22,
          "spells": [
            {
              "id": "lo0mNr37CfU6Wx9D",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "GxGEwNo6iMn4Sc21",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "lHNdErR4yWHUnEBm",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "zLQMXW7Knjw3f9Un",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "SlPgDPw0Uj58yFHI",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "levP5tKv2DlD39fS",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "ktXcD2NwHQmABRIb",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "kpu85wnEcUllTssD",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "eX7dQukkJ9zVHJ5p",
              "name": "Blazing Bolt",
              "rank": 2
            },
            {
              "id": "dA10vJ3hgHMGhM1J",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "udJdaMnjhTEaMYkG",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "Oty06NGGTJNLXqGB",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "ptDqwwfL2ZTZSGCl",
              "name": "Wall of Wind",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:boggard-scouting-party",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "5JQ5nf7LZt05EYiF",
      "slug": "boggard-scouting-party",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:251f813ee23c974e58e59b0b95e1f5fe1359d0ba3a241cf717719f9751d63440",
    "translatableHash": "sha256:f6166527ee9088c6de7b2d9f695c366d399d084b75bf4d67c79be6945278a019",
    "data": {
      "schemaVersion": 1,
      "name": "Boggard Scouting Party",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "boggard",
        "humanoid",
        "troop"
      ],
      "description": "Boggard scouting parties run ahead of other boggard troops to get the lay of the land. They sometimes engage if they think they can quickly vanquish an enemy force.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 15,
        "stealth": 13
      },
      "languages": [
        "boggard",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "6n1YNpA9sckKPpwJ",
          "name": "Chorus of Croaks",
          "kind": "action",
          "description": "The boggard scouting party unleashes a chorus of terrifying croaks. Any non-boggard within 30 feet becomes Frightened 1 unless they succeed at a check (will, dc:21, options:area-effect,inflicts:frightened) save; those who critically succeed are temporarily immune for 1 minute.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "qaBL38g5CJeGHGUZ",
          "name": "Coordinated Tongue Pull",
          "kind": "action",
          "description": "Frequency once per round\nEffect Several boggards use their tongues to grapple an enemy within 10 feet to pull them closer. The target must attempt a check (reflex, dc:21) save. On a failure, they are Grabbed and pulled 5 feet closer to the scouting party. A creature grabbed in this way isn't Immobilized, but it can't move more than 10 feet from the scouting party. A creature can sever one of the tongues with a Strike against AC 21 that deals at least 5 slashing damage. This doesn't damage the scouting party.",
          "traits": []
        },
        {
          "id": "HbU9kLWy2ILILzTj",
          "name": "Morningstar Massacre",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The boggards execute coordinated melee attacks against each enemy in a 5-foot type:emanation, with a check (reflex, dc:21, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 1d6 untyped damage\n2 2d6+7 untyped damage\n3 2d6+11 untyped damage",
          "traits": []
        },
        {
          "id": "qt8qxclrefUDCgL5",
          "name": "Sling Barrage",
          "kind": "action",
          "description": "The dreadknot draws and loads slings to launch a coordinated barrage. This barrage is a 10-foot type:burst within 50 feet that deals 3d6 bludgeoning damage (check (reflex, dc:21, basic, options:area-effect) save). When the scouting party is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "VBT6H5puqPRiwRvD",
          "name": "Swamp Passage",
          "kind": "passive",
          "description": "A boggard scouting party ignores difficult terrain caused by swamp terrain features.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-whirlwind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "8qmpOMgtd8gdC94B",
      "slug": "scamp-whirlwind",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9d58d637adaf8c988ceb91b6aefbd849d595cccd139d1a0803054788308440fe",
    "translatableHash": "sha256:93f36cc3df827c44caabf714318ae7022d1176b0a2e2963ba8f38f743fd1c020",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Whirlwind",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "air",
        "elemental",
        "troop"
      ],
      "description": "In general, all elemental scamps are a bit mischievous, and equally as likely to gather in masses to wreak (often accidental) havoc.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
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
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "a1S8MIzlSbM14TJF",
          "name": "Fog Vision",
          "kind": "passive",
          "description": "The scamp whirlwind ignores the Concealed condition from fog.",
          "traits": []
        },
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (In Open Air)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Sirocco Breath",
          "kind": "action",
          "description": "The scamp whirlwind breathes in a 15-foot type:cone that deals 3d6 slashing damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect,forced-movement) save). Creatures that fail the save also get pushed back by 10 feet. The scamp whirlwind can't use Sirocco Breath again for 1d4.",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Sonic Slams",
          "kind": "action",
          "description": "1 to 3\nThe scamp whirlwind attacks with a flurry of tiny slams. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 bludgeoning damage\n2 2d6+2 bludgeoning damage\n3 2d6+4 bludgeoning damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "ixYN6jGukhPzuY3A",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "tQdGOjGMXzEbb9Ca",
              "name": "Gust of Wind",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-flood",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "dT4s7xHwlgYPGF1A",
      "slug": "scamp-flood",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dd88ca0c35bfc79208d8189ef672c316bf2a36600463442e64f739d78bf62757",
    "translatableHash": "sha256:029b3430594355001ab7484daea03106c8d067aa3b22f530e0bc06fac718e876",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Flood",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "troop",
        "water"
      ],
      "description": "In general, all elemental scamps are a bit mischievous, and equally as likely to gather in masses to wreak (often accidental) havoc.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
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
          "acid 8",
          "fire 8"
        ],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8",
          "fire 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (While Underwater)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Acid Breath",
          "kind": "action",
          "description": "The scamp flood breathes acid in a 15-foot type:cone that deals 3d6 acid damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect) save). The scamp flood can't use Acid Breath again for 1d4.",
          "traits": [
            "acid",
            "arcane"
          ]
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Drenching Claws",
          "kind": "action",
          "description": "1 to 3\nThe scamp flood attacks with a flurry of tiny claws. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 slashing damage\n2 2d6+2 slashing damage\n3 2d6+4 slashing damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "KUZzVHq7TTxfam5T",
              "name": "Acid Grip",
              "rank": 2
            },
            {
              "id": "wVkUYzUoPf03gKOt",
              "name": "Create Water",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:qadiran-camel-corps",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "egHaHp1lqQBZdKdR",
      "slug": "qadiran-camel-corps",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:13e0cef05a5c07604eb93ba33709a239d8e7a5a53aacb64c49384c867159a3d4",
    "translatableHash": "sha256:58ebc078e96029d0359a0e3ad628a73aa7f8827c5e5630faebe691dc0e5dc012",
    "data": {
      "schemaVersion": 1,
      "name": "Qadiran Camel Corps",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Navigating the deserts of Golarion requires trained individuals and often specialized mounts to keep them safe. The Qadiran camel corps are one such example of those who embark on long patrols, hunt down brigands, and dispatch any natural threats that might trouble travelers.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 35,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "diplomacy": 11,
        "nature": 13,
        "survival": 13
      },
      "languages": [
        "common",
        "kelish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "fGsx0orXroWf8pSk",
          "name": "Desert-Adapted Troop",
          "kind": "passive",
          "description": "A camel corps is well-adapted to heat and deserts. They treat environmental heat as if it was one step less severe, and if the camel mounts have eaten and drank their fill, the corps can Subsist for 1 week without needing to attempt Survival checks.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "xlepCkCSUhU4WWnG",
          "name": "Dust Storm",
          "kind": "action",
          "description": "Requirements The camel corps is in a desert or similar region\nEffect The camel corps Steps, whipping up sand into a short-lived storm that obscures the surrounding region. Until the end of their next turn, the camel corps is Concealed from all creatures more than 15 feet away, and all creatures more than 15 feet away are concealed to the camel corps.",
          "traits": []
        },
        {
          "id": "eSlfmldt1Fmpwx8f",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids may not work on the valkyrie tempest, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "R5lNnsguizwqTZFA",
          "name": "Reflective Arrows",
          "kind": "action",
          "description": "Adjusting to the angle of the sun, the camel riders draw their shortbows, then launch a ranged attack in the form of an arcing volley. This volley is a 10-foot type:burst within 60 feet that deals 3d6 piercing damage (check (reflex, dc:21, basic, options:area-effect) save). In areas of bright light, such as outside during the day, the targets take a –1 circumstance penalty to the save. When the camel corps is reduced to 2 segments, this area decreases to a 5-foot type:burst.\nEffect: Reflective Arrows (Penalty)",
          "traits": []
        },
        {
          "id": "Pcfzy3NAiFVVZefL",
          "name": "Scimitar Assault",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The camel corps engages in a coordinated melee attack against each enemy in a 5-foot type:emanation (check (reflex, dc:21, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d6+1 slashing damage\n2 2d6+7 slashing damage\n3 2d6+11 slashing damage",
          "traits": []
        },
        {
          "id": "DcjFGhKHKRAVTcD0",
          "name": "Trailblazing Stride",
          "kind": "passive",
          "description": "While moving on land, the Qadiran camel corps ignores the effects of non-magical difficult terrain.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-shrapnel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "GUDm1E3RASr6HacV",
      "slug": "scamp-shrapnel",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c62c2520e6bec987ce6b69d0250a39002fb5883f18711225c2b4eff297672624",
    "translatableHash": "sha256:f2980b91e038f8cccdf74ff30de67a42476ddeb201c7a56b2407669c8b573490",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Shrapnel",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "metal",
        "troop"
      ],
      "description": "In general, all elemental scamps are a bit mischievous, and equally as likely to gather in masses to wreak (often accidental) havoc.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
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
          "electricity 8"
        ],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (While Touching Metal)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Metallic Claws",
          "kind": "action",
          "description": "1 to 3\nThe scamp shrapnel attacks with a flurry of tiny claws. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 slashing damage\n2 2d6+2 slashing damage\n3 2d6+4 slashing damage",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Shrapnel Breath",
          "kind": "action",
          "description": "The scamp shrapnel breathes shrapnel in a 15-foot type:cone that deals 3d6 slashing damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect) save). Creatures that fail the save also take 1d6 persistent bleed damage.The scamp shrapnel can't use Shrapnel Breath again for 1d4.",
          "traits": [
            "arcane",
            "metal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "AJ5Mx0lh6Z09H9BX",
              "name": "Leaden Steps",
              "rank": 1
            },
            {
              "id": "FjPEvarjMiSTRvR2",
              "name": "Live Wire",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-tangle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "H3n8i6sZuvUh1nJh",
      "slug": "scamp-tangle",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9afa4c5111971390fadbae9c80636b5cdb213b81c7d24e365a33eb8dd726dc25",
    "translatableHash": "sha256:d8b10b9783711487923c19f33275d927ee1cc2736e47826415d0e07fee01dc07",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Tangle",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "troop",
        "wood"
      ],
      "description": "In general, all elemental scamps are a bit mischievous, and equally as likely to gather in masses to wreak (often accidental) havoc.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
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
          "area-damage 8",
          "splash-damage 8",
          "fire 8",
          "slashing 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (While Touching Plants or Trees)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Pollen Breath",
          "kind": "action",
          "description": "The scamp tangle breathes pollen in a 15-foot type:cone that deals 3d6 poison damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect) save). The scamp tangle can't use Pollen Breath again for 1d4.",
          "traits": [
            "arcane",
            "wood"
          ]
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Thorny Claws",
          "kind": "action",
          "description": "1 to 3\nThe scamp tangle attacks with a flurry of tiny claws. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 piercing damage\n2 2d6+2 piercing damage\n3 2d6+4 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "D9GIrDxecSDH8Mhg",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "HywkANqW7LZMN3L3",
              "name": "Oaken Resilience (Self Only)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-inferno",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "iHAHQbGNUNUH51Zs",
      "slug": "scamp-inferno",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0178b1e068f5b5ac8d56a5f277061e05268ce9f49fe1ff6aa5176f02febf243b",
    "translatableHash": "sha256:9beaccbb1dd0f66a5b9526bc6cd3de914de538a70323b83a80ad8cb2135213fc",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Inferno",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "elemental",
        "fire",
        "troop"
      ],
      "description": "Fire scamps are playful and excitable pranksters from the Plane of Fire that have little concept of moderation. When they gather into flocks, unintentional arson is the inevitable result.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8",
          "cold 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "85dKljdX45c9ccls",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "The scamp inferno ignores the Concealed condition from smoke.",
          "traits": []
        },
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (While Touching Fire)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Burning Bites",
          "kind": "action",
          "description": "1 to 3\nThe scamp inferno attacks with a flurry of tiny teeth and flickering flames. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 piercing damage\n2 2d6+2 piercing damage\n3 2d6+4 piercing damage",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Flame Breath",
          "kind": "action",
          "description": "The scamp inferno breathes flames in a 15-foot type:cone that deals 3d6 fire damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect) save). Creatures that fail the save also take 1d6 persistent fire damage. The scamp inferno can't use Flame Breath again for 1d4.",
          "traits": [
            "arcane",
            "fire"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "VS6PmI0MgSQYJthS",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "B8oZY787B8djutep",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "C9O5E5GrbfFkRBJU",
              "name": "Fireball",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:wolf-pack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "imbJcEAt1tVfQ3CO",
      "slug": "wolf-pack",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ece568663d6da5aa117bc526b7823ec561139184e3373a69c3627a49d03d006c",
    "translatableHash": "sha256:602fa6b98c3b74e8498d6f069b4bc02d5973f3a68725c0edc4a0a389e1e7cea7",
    "data": {
      "schemaVersion": 1,
      "name": "Wolf Pack",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "troop"
      ],
      "description": "Though wolf packs can be a menace to farming communities that rely on livestock, they prefer not to go after humanoids or other dangerous foes. However, hungry packs don't have the luxury of being cautious.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 35,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 15,
        "stealth": 13,
        "survival": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "5RB8yjisQKiw1Gd4",
          "name": "Harry Prey",
          "kind": "action",
          "description": "The wolf pack focuses all their efforts on biting a single adjacent foe, who takes 4d6+8 piercing damage (check (reflex, dc:21, basic) save). If the creature fails this saving throw, the wolf pack can immediately attempt an Athletics check to Trip the creature.",
          "traits": []
        },
        {
          "id": "Z7tomDndmcLrDf68",
          "name": "Pack Hunt",
          "kind": "action",
          "description": "1 to 3\nThe wolves work together to fell their opponents. Each enemy within a 5-foot type:emanation attempts a check (reflex, dc:21, basic, options:area-effect) save. A creature who is Prone is Clumsy 2 for this attack. The damage depends on the number of actions.\n1 1d6+1 piercing damage\n2 2d6+7 piercing damage\n3 2d6+11 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:scamp-avalanche",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "p1cVQgdWgs1PhbE3",
      "slug": "scamp-avalanche",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:30f838b554fe98ca295502ec1705019dc1abc2da39b308eb0ad827431d34dceb",
    "translatableHash": "sha256:5018295352e83015052cdb3e82e85c071be97acf02e435cf9a14ea53e921ac13",
    "data": {
      "schemaVersion": 1,
      "name": "Scamp Avalanche",
      "level": 6,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "earth",
        "elemental",
        "troop"
      ],
      "description": "In general, all elemental scamps are a bit mischievous, and equally as likely to gather in masses to wreak (often accidental) havoc.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "deception": 13
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
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "BSejpvFZwpYmOdR1",
          "name": "Fast Healing (While Underground)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "f2MKhz42yWBSTE9X",
          "name": "Scree Breath",
          "kind": "action",
          "description": "The scamp avalanche breathes rocks in a 15-foot type:cone that deals 3d6 bludgeoning damage to each creature within the area (check (reflex, dc:21, basic, options:area-effect) save). The scamp avalanche can't use Scree Breath again for 1d4.",
          "traits": [
            "arcane",
            "earth"
          ]
        },
        {
          "id": "DTzsPQI9SG94AmvU",
          "name": "Stone Slams",
          "kind": "action",
          "description": "1 to 3\nThe scamp avalanche attacks with a flurry of tiny slams. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 bludgeoning damage\n2 2d6+2 bludgeoning damage\n3 2d6+4 bludgeoning damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "WrxapyE8cDDT7Hca",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 21,
          "spells": [
            {
              "id": "QiffeMVkOLNdkv8t",
              "name": "Scatter Scree",
              "rank": 1
            },
            {
              "id": "fS4PdhRCUOhCff2Z",
              "name": "One with Stone",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:skeleton-mob",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "qjCFbg7IB5NDbMOW",
      "slug": "skeleton-mob",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6daa8a23e328045f3c5f4e43128614b42182d57ed00a7fe5b14b8894415417ca",
    "translatableHash": "sha256:311cc68581e41336a98d659aca2155d7dc25ccc7b1a7d0e140d44cbe0bcffafc",
    "data": {
      "schemaVersion": 1,
      "name": "Skeleton Mob",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "mindless",
        "skeleton",
        "troop",
        "undead",
        "unholy"
      ],
      "description": "To the morbid, a battlefield is no more than a garden of corpses. Sometimes, either through the magic of a necromancer or through an unfortunate pooling of void energy, these bodies rise up as broken and battered skeletons. While some of these skeletons are far from whole, they can still pose a significant threat.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 1,
        "int": -5,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 13
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
        "resistances": [
          "cold 7",
          "electricity 7",
          "fire 7",
          "physical 7",
          "slashing 7"
        ],
        "weaknesses": [
          "area-damage 7",
          "splash-damage 7"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 240 (4 segments); Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8Xb1QZ1eahDJoqrT",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "dsHzY2PK1f58ohEV",
          "name": "Ossuary Storm",
          "kind": "action",
          "description": "The skeleton mob hurls skulls and fragments of bone in a 10-foot type:burst within 30 feet. This attack deals 3d6 piercing damage (check (reflex, dc:21, basic, options:area-effect) save). When the skeleton mob is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "lNAVyJ6NEXycS9N0",
          "name": "Rattling Bones",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The skeletons engage using their claws and broken bones to attack each enemy in a 5-foot type:emanation, with a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d4+1 piercing damage\n2 2d4+7 piercing damage\n3 3d4+10 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:dromaar-company",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "R1Ukw41ygDmnAmJk",
      "slug": "dromaar-company",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:06e479f8d76a379084dbbf06f0839c596028edb941f96b8bf45a7d8a320b1408",
    "translatableHash": "sha256:13e3f2b3a13d5a44ced87f39a6afd7047ae99280636e55345a288c6f9a316ccd",
    "data": {
      "schemaVersion": 1,
      "name": "Dromaar Company",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "dromaar",
        "human",
        "humanoid",
        "orc",
        "troop"
      ],
      "description": "Numerous dromaar mercenary companies operate in and around Belkzen, providing their strength at arms to any hold that requests their services. These disciplined warriors march confidently into battle, bringing their axes to bear against all who stand in their way.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 15,
        "intimidation": 11,
        "survival": 11
      },
      "languages": [
        "common",
        "orcish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 90 (4 segments); Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "F5cE0oiwDbRk3FEt",
          "name": "Bola Hurl",
          "kind": "action",
          "description": "The dromaars draw bolas and toss them in a 15-foot type:cone. Each creature in this area takes 3d6 bludgeoning damage (check (reflex, dc:21, basic, options:area-effect) save). A creature who fails this saving throw is also knocked Prone.",
          "traits": []
        },
        {
          "id": "Gz4kr7igRxi0oSRP",
          "name": "Charge the Fallen",
          "kind": "action",
          "description": "The dromaar company Strides up to twice, sweeping with their axes. They deal 2d8+5 slashing damage (check (reflex, dc:21, basic, options:area-effect) save) to each enemy in a 5-foot type:emanation at the end of their movement. This damage increases by 5 if the target is Prone.",
          "traits": []
        },
        {
          "id": "2uCRBNiFCqdHF7yr",
          "name": "Disciplined Strikes",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The dromaars coordinate melee attacks with their axes against all enemies in a 5-foot type:emanation (check (reflex, dc:21, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d8 slashing damage\n2 2d8+5 slashing damage\n3 2d8+10 slashing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:xulgath-army",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "XZcLHaZP7yt2XU8Q",
      "slug": "xulgath-army",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3887afe5273e802fcb348d7fb4b54a072db76f5a9c9b30fecbfd14df717c427c",
    "translatableHash": "sha256:dbbea64906c34be9fa2e021b94e4e1c64b65ddc43db38673c0fe91045fd05edc",
    "data": {
      "schemaVersion": 1,
      "name": "Xulgath Army",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "humanoid",
        "troop",
        "xulgath"
      ],
      "description": "Though most xulgath settlements can be found in the Darklands, these reptilian humanoids sometimes venture to the surface with ill intent. When gathered into an army, xulgaths tear through innocent communities in the name of whatever leader they serve.",
      "armorClass": 23,
      "hitPoints": 99,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 15,
        "stealth": 13
      },
      "languages": [
        "draconic",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "IGYttiN6rsth3QGj",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:24, options:area-effect,inflicts:sickened,inflicts:slowed)",
          "traits": [
            "aura",
            "olfactory"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Sc1M1Q5SwLYfoRIw",
          "name": "Club Offensive",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The xulgaths make coordinated melee attacks against each enemy in 5-foot type:emanation, with a check (reflex, dc:21, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 1d6+1 bludgeoning damage\n2 2d6+7 bludgeoning damage\n3 2d6+12 bludgeoning damage",
          "traits": []
        },
        {
          "id": "dFtKZ94VZwUVZGqM",
          "name": "Javelin Barrage",
          "kind": "action",
          "description": "he xulgaths draw javelins and launch a coordinated barrage at range. This barrage is a 10-foot type:burst within 30 feet that deals 3d6 piercing damage (check (reflex, dc:21, basic, options:area-effect) save). When the xulgath army is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "pXqf864qlns57H38",
          "name": "Rend Flesh",
          "kind": "action",
          "description": "The xulgaths concentrate their attacks on a single adjacent enemy, clawing and biting with abandon. That creature takes 3d4+5 slashing damage (check (reflex, dc:21, basic) save). On a failed save, the creature also takes 1d4 persistent bleed damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:ratfolk-shank-squad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "2TE622Pc0ExYZ5dS",
      "slug": "ratfolk-shank-squad",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16fccd84fed222cd16f5e9f24d2e550672c23ae3e23ac5a21bbcc1096e933ef7",
    "translatableHash": "sha256:24d4054d4c4110350c7ab7c7f999563765040ef74cfc8c6c4f3487e1e297ad62",
    "data": {
      "schemaVersion": 1,
      "name": "Ratfolk Shank Squad",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "humanoid",
        "ratfolk",
        "troop"
      ],
      "description": "",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 18,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 6,
        "con": 2,
        "int": 4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "deception": 15,
        "stealth": 17,
        "thievery": 17
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 120 (4 segments); Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "4PScM2COzIjHjq0W",
          "name": "Dirty Tricks",
          "kind": "action",
          "description": "The ratfolk feint and trip up their foes in a 5-foot type:emanation, attempting a single check (thievery, against:reflex) check and comparing the result to each target's Reflex DC. On a success, the target is Clumsy 1 (Clumsy 2 on a critical success) until they take an Interact action to remove the condition.",
          "traits": []
        },
        {
          "id": "PFRTcxVCSgkl4Vru",
          "name": "Poisoned Bolts",
          "kind": "action",
          "description": "The shank squad draws hand crossbows to fire poisoned bolts in a volley. This volley is a 10-foot type:burst within 60 feet that deals 2d6 piercing damage with a check (reflex, dc:22, basic, options:area-effect) save. When the shank squad is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "XmcGqmrImLqgyZm4",
          "name": "Shank 'Em",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The shank squad makes a coordinated attack with shivs and daggers against each enemy in a 5-foot type:emanation, with a check (reflex, dc:22, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 slashing damage\n2 2d6+3 slashing damage\n3 2d6+6 slashing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:gnome-cannon-corps",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "C3WZzBOvaQ5LrlZ9",
      "slug": "gnome-cannon-corps",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fe9a67f44d69df2b63a97030169a05e08fd06a5b27d44623442c7e7907ddf689",
    "translatableHash": "sha256:6f68dfda66390fc980aa612495a559f2e21c5982a3416c867bba29ed4b2ea08f",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Cannon Corps",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "gnome",
        "humanoid",
        "troop"
      ],
      "description": "Inventive gnomes blend engineering and fey magic to create wondrous cannons, whose colorful blasts dazzle foes while creating areas of warped terrain. Only the cleverest generals understand how to use cannon corps to great advantage in unconventional warfare.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 6,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 13,
        "arcana": 17,
        "crafting": 15
      },
      "languages": [
        "common",
        "fey",
        "gnomish"
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 120 (4 segments); Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "CEKjsBaoB9qScWqZ",
          "name": "Arcane Explosion",
          "kind": "action",
          "description": "Aiming the gnome cannons toward the enemy, loading them, and firing them requires the troop's full attention. The cannons fire a 15-foot type:burst of bright magic within 200 feet that deals 2d12+2 force damage (check (reflex, dc:22, basic, options:area-effect,light,visual) save). A creature that fails their save is also Dazzled for 1 round; this is a light and visual effect. The area of the explosion seems to twist and ripple for 1 minute afterward. A creature that attempts to move through the space must succeed at a check (will, dc:22) save or treat the area as difficult terrain; this is an illusion and visual effect.",
          "traits": [
            "arcane",
            "force"
          ]
        },
        {
          "id": "PVMF2htb8MLPe6yb",
          "name": "Cannon Vent",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The gnome engineers vent the cannons' energy in a blast that hits all creatures in a 5-foot type:emanation (check (reflex, dc:22, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d6+2 fire damage\n2 2d6+8 fire damage\n3 3d6+10 fire damage",
          "traits": []
        },
        {
          "id": "yKejA13gzals79JS",
          "name": "Direct Hit",
          "kind": "action",
          "description": "The gnomes fire a more mundane round from one of their cannons at a single target within 60 feet, who takes 3d10+6 bludgeoning damage (check (reflex, dc:22, basic, options:forced-movement) save). On a failed save, the creature is also pushed 5 feet away from the troop.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:deinonychus-pack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "NnnOp57rszKD3lBn",
      "slug": "deinonychus-pack",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:70bddf86f98e3a6da0f88eb150bcd7cd77f86922ba41eb67dba97aecc0c0256b",
    "translatableHash": "sha256:6ec8c714e3a7f43c33ccc554b4c51f31eac20f6baea3f0002dbd06e34ce82ebe",
    "data": {
      "schemaVersion": 1,
      "name": "Deinonychus Pack",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur",
        "troop"
      ],
      "description": "Deinonychuses are widely known and feared both for the razor-sharp claws with which they savagely disembowel their prey and for their unmatched mastery of pack tactics, which enables determined deinonychus packs to consistently bring down prey much larger than themselves. Some iruxi and xulgath communities train these dinosaurs to act as battlefield skirmishers, weakening their enemies with hit-and-run tactics before closing in for the kill.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 6,
        "int": -4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 17,
        "stealth": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 6",
          "splash-damage 6"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 120 (4 segments); Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "zd0ZnYdWNyaLP8Au",
          "name": "Jaws and Claws",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The pack makes a melee attack against each enemy in a 5-foot type:emanation (check (reflex, dc:22, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d6 piercing damage damage\n2 2d6+4 piercing damage damage\n3 3d6+6 piercing damage damage",
          "traits": []
        },
        {
          "id": "6PukXd6ei7NiNQfG",
          "name": "Predator's Advantage",
          "kind": "passive",
          "description": "Bleeding creatures take a –2 circumstance penalty to Reflex saves against a deinonychus pack's Jaws and Claws.\nEffect: Predator's Advantage",
          "traits": []
        },
        {
          "id": "Ly6erR1zh1HAnKJ5",
          "name": "Surround Prey",
          "kind": "action",
          "description": "Requirements The deinonychus pack has at least 3 segments\nEffect The pack Strides, positioning its segments so that at least two of them are adjacent to the same creature, and lashes out with its talons. That creature must succeed at a check (reflex, dc:22) save or take 2d4 persistent bleed damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:giant-ant-army",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "pY9fEPDxG925iivp",
      "slug": "giant-ant-army",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b5705d6f16842296b043dd9364a7e2e6691cdf5a1dd7df36300e5436e741e3e1",
    "translatableHash": "sha256:4aad458baf67190809d0c81be0c00014b6a8933f60734eff3f0487912d4ad6df",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Ant Army",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "troop"
      ],
      "description": "Like their tiny counterparts, colonies of giant ants often form vast armies that launch regular campaigns into the lands surrounding their nests to forage for food and expand their territory. Though their primary targets are usually rival colonies, a giant ant army that happens upon a humanoid settlement will not hesitate to overrun and strip it of resources to bring back to their queen, taking a particular interest in the settlement's former inhabitants.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 40,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 6,
        "int": -4,
        "wis": 2,
        "cha": -4
      },
      "skills": {
        "athletics": 17,
        "survival": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 7",
          "splash-damage 7"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 120 (4 segments); Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "0GB6weL7oSMiYNhj",
          "name": "Giant Ant Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:24)\nMaximum Duration 6 rounds\nStage 1 2d8 poison damage and Enfeebled 1 (1 round)\nStage 2 3d6 poison damage and Enfeebled 2 (1 round)\nStage 3 2d10 poison damage and Enfeebled 3 (1 round)",
          "traits": []
        },
        {
          "id": "yA8PCCPpx4NOi1T8",
          "name": "Grasping Mandibles",
          "kind": "action",
          "description": "Requirements The giant ant army's last action was a Mandible Frenzy that at least one creature failed their save against or the giant ant army has at least one creature Grabbed or Restrained\nEffect If used after Grasping Mandibles, the giant ant army can attempt an Athletics check to Grapple, comparing the result to the Fortitude DC of each creature who failed its saving throw, up to as many creatures as the giant ant army has remaining segments. The giant any army can instead use Grasping Mandibles to choose one creature it's grabbing or restraining to automatically extend that condition to the end of the army's next turn.",
          "traits": []
        },
        {
          "id": "AUF1bsMkqxZPLcoF",
          "name": "Haul Away",
          "kind": "action",
          "description": "Requirements The giant ant army has at least one creature Restrained\nEffect The army Strides up to its Speed, carrying any restrained creatures with it. If the creature is Gargantuan, the giant ant army is Encumbered.",
          "traits": []
        },
        {
          "id": "sc3x5FE9ukgewtV4",
          "name": "Mandible Frenzy",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The army makes a savage bite attack against each enemy in a 5-foot type:emanation (check (reflex, dc:22, basic, options:area-effect) save). The damage dealt depends on the number of actions.\n1 1d8 slashing damage plus Grasping Mandibles\n2 2d8+6 slashing damage plus Grasping Mandibles\n3 2d8+11 slashing damage",
          "traits": []
        },
        {
          "id": "7p3yhWfqW3H1Z7e3",
          "name": "Overwhelm",
          "kind": "action",
          "description": "The giant ant army swarms over a Large or larger creature that it has Grabbed, pinning the creature in place and causing it to become Restrained until the start of the giant ant army's next turn or until it Escapes. A creature that begins its turn restrained by the army is repeatedly stung by the clinging ants, automatically taking 2d6 piercing damage and suffering the effects of giant ant venom.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:charau-ka-shrieker-crew",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "9wgj9Jiej236yjBW",
      "slug": "charau-ka-shrieker-crew",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e8964499a74478d310c24ee25b12fb01b8a247a31a186ebb6baeb7d4c2a8b5a4",
    "translatableHash": "sha256:37cee737cf8eddef876472db7e0f80dc8dc4459ff983940fa17b211283533542",
    "data": {
      "schemaVersion": 1,
      "name": "Charau-ka Shrieker Crew",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "charau-ka",
        "humanoid",
        "troop"
      ],
      "description": "Charau-ka are small humanoid apes who live in tropical jungles, especially within the Mwangi Expanse. Shrieker crews patrol the canopies close to charau-ka settlements, keeping predators at bay. Sometimes, a group of charau-ka will devote themselves to the demon lord Angazhan and become a bloodthirsty hunting party.",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 19,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 18,
        "intimidation": 16,
        "stealth": 14
      },
      "languages": [
        "draconic",
        "mwangi"
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 135 (4 segments); Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "PFzoUN8ccxYZxbWd",
          "name": "Frenzied Hatchets",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The charau-ka engage in a coordinated melee attack against each enemy in a 5-foot type:emanation (check (reflex, dc:23, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d6+2 slashing damage\n2 2d6+10 slashing damage\n3 3d6+13 slashing damage",
          "traits": []
        },
        {
          "id": "jg2h9ZuElYd5GVNb",
          "name": "Shrieking Charge",
          "kind": "action",
          "description": "With raucous shrieks, the shrieker crew charges forward. The troop Strides twice. If they move at least 10 feet, the crew deals 3d6+13 slashing damage (check (reflex, dc:23, basic, options:area-effect) save) to each enemy in a 5-foot type:emanation at the end of the crew's movement. Each target who fails this save is also Deafened for 1 round.",
          "traits": [
            "auditory"
          ]
        },
        {
          "id": "uYsOWXvUohnIoJuN",
          "name": "Storm of Daggers",
          "kind": "action",
          "description": "The charau-ka hurl daggers as a ranged attack in the form of a barrage. This barrage is a 10-foot type:burst within 30 feet that deals 5d4 piercing damage (check (reflex, dc:23, basic, options:area-effect) save). The range increases by 15 feet if the charau-ka are above their targets. When the shrieker crew is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:animated-army",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "HIwXNbXV2sfSiYf4",
      "slug": "animated-army",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:47886c3729b98810291ff068600dc066e837a1e4c1a3a9ab27defadfee3db8c1",
    "translatableHash": "sha256:7702b29c2a1fed1825aa8abfe4f7b22ef17b6d70550b08bd7b8e09c3e76cd609",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Army",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "construct",
        "mindless",
        "troop"
      ],
      "description": "Animated statues usually appear in pairs or alone, hiding in plain sight among the other decor. Occasionally, a creator will fashion dozens of animated statues to serve as a nigh-unstoppable fighting force that doesn't complain or tire.",
      "armorClass": 27,
      "hitPoints": 120,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 6,
        "dex": 0,
        "con": 6,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 18
      },
      "languages": [],
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
          "id": "Cd6eDbFtKZ0Y74bp",
          "name": "Construct Armor",
          "kind": "passive",
          "description": "Like normal objects, the animated statues of the animated army have Hardness. This Hardness reduces any damage the animated army takes by an amount equal to the Hardness. Once an animated army is reduced to less than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks, removing the Hardness and reducing its Armor Class to 23.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 120 (4 segments); Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "CwU8AcG0B5BhuCVr",
          "name": "Battering Fists",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The animated army makes a melee attack against each enemy in a 5-foot type:emanation (check (reflex, dc:23, basic, options:area-effect) save). The damage dealt depends on the number of actions.\n1 1d8+2 bludgeoning damage\n2 2d8+8 bludgeoning damage\n3 3d8+10 bludgeoning damage",
          "traits": [
            "magical"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:halfling-lucky-draw",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "K6PtvumX6CbtYaQg",
      "slug": "halfling-lucky-draw",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a06b039ffd0c7458ecdcfde716d5e40c4b294bd5e00abaee24a34857433ef6ea",
    "translatableHash": "sha256:538552344f088084c9de5d36ab6dc0c689eb1f6dad7d96620748388a83e0fa53",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Lucky Draw",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "halfling",
        "humanoid",
        "troop"
      ],
      "description": "",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 16,
        "will": 19
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 3,
        "wis": 1,
        "cha": 6
      },
      "skills": {
        "deception": 18,
        "diplomacy": 16,
        "occultism": 16,
        "performance": 18,
        "stealth": 16
      },
      "languages": [
        "common",
        "halfling"
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 135 (4 segments); Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "q3zI9N0p1dOqMF4D",
          "name": "Bad Deal",
          "kind": "action",
          "description": "The halflings mock and taunt their enemies with quick Harrow readings that predict doom. The troop chooses a number of creatures equal to the number of its remaining segments within 60 feet. Each target must attempt a check (will, dc:23) save. On a failure, the target must roll their next attack roll, saving throw, or skill check twice and use the worse result.\nEffect: Bad Deal",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental",
            "misfortune",
            "occult"
          ]
        },
        {
          "id": "ntqLuao5Yr7uqE8V",
          "name": "False Cuts",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The halflings feint with their cards and then lash out with their daggers in a coordinated melee attack against enemies in a 5-foot type:emanation, with a check (reflex, dc:23, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d4 piercing damage precision damage\n2 2d4+7 piercing damage precision damage\n3 3d4+10 piercing damage precision damage",
          "traits": []
        },
        {
          "id": "i2KxZTYPEzdd6zHZ",
          "name": "Troop Harrowing",
          "kind": "passive",
          "description": "When the halfling lucky draw Casts a Spell that targets a single creature, some of the constituent members can perform a focused Harrow reading on the target as part of Casting the Spell. The lucky draw attempts an check (occultism, against:will) skill check against the target's Will DC. On a success, the target takes a –1 status penalty to their saving throw or AC against the spell (–2 on a critical success). If the lucky draw critically fails this check, their reading portends bad news for the halflings and they become Frightened 2.\nEffect: Troop Harrowing",
          "traits": [
            "mental",
            "occult"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "4qqvF8lalSCiy0MX",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 20,
          "saveDc": 23,
          "spells": [
            {
              "id": "gG4toJrWtfEMxX4N",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "mgTiZcNTjUi8lCn4",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "ocWchF1qJIx548Hh",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "k9nKqT6XNzTVYPZp",
              "name": "Force Barrage",
              "rank": 3
            },
            {
              "id": "ng4LFnO6FRGa5zfd",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "hD5dzuHKsVRtf2HJ",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "rj2Wxm5ryivmAwsq",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "0n6kXvHvGmUn1FDK",
              "name": "Force Barrage",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:hell-hound-pack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "V5CA1bTBMJikCCP6",
      "slug": "hell-hound-pack",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bf2269163d63a3f9341a027660114fd30c6493e333421894453d3a468df57164",
    "translatableHash": "sha256:117e33b25d7734685958445fcf5356f13553200d8cff349504812976b1727161",
    "data": {
      "schemaVersion": 1,
      "name": "Hell Hound Pack",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "beast",
        "fiend",
        "fire",
        "troop",
        "unholy"
      ],
      "description": "Frequently deployed on the battlefield alongside vordine legions, hell hound packs distract and weaken enemy forces to provide their masters with a tactical advantage. While not intelligent enough to employ advanced maneuvers, well-trained hell hounds are adept at using their flaming breath to control the battlefield by separating enemy units from their allies or forcing them into less favorable positions, leaving them easy prey for other fiendish troops.",
      "armorClass": 26,
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
        "fortitude": 16,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": -2,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 16,
        "survival": 16
      },
      "languages": [
        "diabolic"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8",
          "cold 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "gOwqkgU2f7IIIUcd",
          "name": "Hellish Revenge",
          "kind": "reaction",
          "description": "Trigger The hell hound pack is critically hit by a Strike or spell attack\nEffect The hell hound pack's Hellfire Breath recharges. They can immediately use it as part of this reaction.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 135 (4 segments); Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "dvQkVHhgqq97vdBL",
          "name": "Hellfire Breath",
          "kind": "action",
          "description": "The hell hounds in the pack combine their efforts to bathe the battlefield in hellish flame, dealing 2d10 fire damage to all creatures in two 15-foot type:cones (check (reflex, dc:25, basic, options:area-effect) save) that can't overlap. The hell hound pack can't use Hellfire Breath again for 1d4. If the pack would take fire damage or be targeted by a fire effect, its Hellfire Breath recharges.",
          "traits": [
            "divine",
            "fire",
            "unholy"
          ]
        },
        {
          "id": "jOde80XOr56srQBs",
          "name": "Infernal Mauling",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The pack tears into each enemy in a 5-foot type:emanation with their flaming jaws (check (reflex, dc:23, basic, options:area-effect) save). The damage dealt depends on the number of actions.\n1 1d4 piercing damage\n2 1d8+7 piercing damage\n3 2d8+7 piercing damage",
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
    "contentId": "pf2e:bestiary:battlecry-bestiary:fleshwarp-amalgam",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "xEWRFIUNr52EmwVM",
      "slug": "fleshwarp-amalgam",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:45054898a3ae02060291fb06d50f610853587ef0a4e0ab56b75d73edda8b3d94",
    "translatableHash": "sha256:68c8fcfd75651188adade369e4e8aef7dafd01be90d64a39e2f59b2871d2a590",
    "data": {
      "schemaVersion": 1,
      "name": "Fleshwarp Amalgam",
      "level": 8,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "mindless",
        "troop"
      ],
      "description": "",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 5,
        "int": -5,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 18,
        "intimidation": 16
      },
      "languages": [
        "common",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "acid"
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
          "id": "Ra4zH2Y2fsG6xxMp",
          "name": "Brutal Retaliation",
          "kind": "reaction",
          "description": "Trigger The fleshwarp amalgam loses a segment due to passing a Hit Point threshold\nEffect The fleshwarp amalgam lashes out in retaliation. Each enemy in a 5-foot type:emanation takes 2d10+6 untyped damage (check (reflex, dc:23, basic, options:area-effect,forced-movement)). A creature who fails the save is also pushed 5 feet away from the amalgam.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 135 (4 segments); Thresholds 90 (3 segments), 45 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "AhZyxStzEuZNYrN6",
          "name": "Acid Spray",
          "kind": "action",
          "description": "The fleshwarp amalgam sprays acid from their various orifices, combining the streams into a powerful spray. This acid spray is a 10-foot type:burst that deals 3d8 acid damage (check (reflex, dc:23, basic) save) within 60 feet. A creature who critically fails their saving throw takes 1d8 persistent acid damage. When the troop is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "acid"
          ]
        },
        {
          "id": "mwaDMdReJdQ1woD5",
          "name": "Frenzy of Tentacles and Claws",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The fleshwarps make wild melee attacks against each enemy in a 5-foot type:emanation (check (reflex, dc:23, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d10 untyped damage\n2 2d10+6 untyped damage\n3 2d10+11 untyped damage",
          "traits": []
        },
        {
          "id": "wLxpfofh7JpuGaBx",
          "name": "Many-Limbed Stride",
          "kind": "passive",
          "description": "While moving on land, the fleshwarp amalgam ignores the effects of non-magical difficult terrain.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:gargoyle-wing",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "6Nk6zk1seqFRQvl1",
      "slug": "gargoyle-wing",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:071ac4d2e04f3f9fa48a285a4fc9d86e930158503d4a2a71818fe43709a26c79",
    "translatableHash": "sha256:ab3d152d7bf098fb24ec5915521a70389b06d0e3cb3cd0aad010052f37943080",
    "data": {
      "schemaVersion": 1,
      "name": "Gargoyle Wing",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "beast",
        "earth",
        "troop"
      ],
      "description": "Normally solitary beasts that lurk in abandoned temples and other structures that afford them a place to hide among appropriately monstrous statuary, gargoyles occasionally band together to hunt challenging prey or simply to take communal pleasure in slaughtering the defenseless. Called wings, these groupings are usually short-lived, though that matters little to those who fall victim to their predations in the meantime.",
      "armorClass": 28,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 17,
        "will": 17
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 18
      },
      "languages": [
        "common",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [
          "physical 10 except adamantine"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "scPsVJgp3B51KjMF",
          "name": "Death From Above",
          "kind": "reaction",
          "description": "Trigger The gargoyle wing is Flying, and a creature moves into an adjacent square below it\nEffect The gargoyle wing swoops down with their talons. The triggering creature takes 2d8+9 slashing damage (check (reflex, dc:28, basic) save).",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 150 (4 segments); Thresholds 100 (3 segments), 50 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "grfypKAmBW7H9dWz",
          "name": "Catch and Release",
          "kind": "action",
          "description": "The gargoyle wing attempts an Athletics checks to Grapple, comparing the result to the Fortitude DC of a number of Large or smaller creatures in a 5-foot type:emanation equal to the gargoyle wing's remaining number of segments, then Flies up to 40 feet, bringing any successfully Grabbed or Restrained creatures along, and Releases them.",
          "traits": []
        },
        {
          "id": "FRbuLqAKh0PNhfBK",
          "name": "Raking Swoop",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The gargoyle wing rips and tears with their stony talons at each enemy in a 5-foot type:emanation (check (reflex, dc:28, basic, options:area-effect) save). The damage dealt depends on the number of actions.\n1 1d8+2 slashing damage\n2 2d8+9 slashing damage\n3 3d8+11 slashing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:sinswarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "DZiYwwjNKlAlyNU2",
      "slug": "sinswarm",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5055e5bf2cbf4dd1c33b5cedce2496d282c77961cb557dd1dc334635bb7c67e2",
    "translatableHash": "sha256:a62e3dcad21ad9c83d3cb929a29ffd17a56d9331e98edb9633b34d059509dd86",
    "data": {
      "schemaVersion": 1,
      "name": "Sinswarm",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "troop"
      ],
      "description": "Sinspawn, monstrosities of twisted humanoid flesh, were created ages ago by the runelord Alaznist to serve as shock troops. Hateful even toward their own kind, sinspawn usually band together only in small, isolated cults, although powerful beings are occasionally able to coerce greater numbers of these slavering horrors to join forces as uniquely bloodthirsty and destructive mobs.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 30,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 18,
        "athletics": 20,
        "survival": 17
      },
      "languages": [
        "aklo",
        "thassilonian"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "suWuvk3b1IGpa6uN",
          "name": "Sin Scent",
          "kind": "passive",
          "description": "A sinswarm can smell creatures reflecting any one of the seven primary sins as the scent ability. The GM determines which creatures are appropriately sinful.",
          "traits": []
        },
        {
          "id": "mWL8Pftmb3ar9Dng",
          "name": "Reactive Attack",
          "kind": "reaction",
          "description": "Trigger A creature within a 5-foot type:emanation of the sinswarm uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using\nEffect The sinswarm lashes out at the triggering creature, dealing 2d8+9 piercing damage (check (reflex, dc:25, basic, options:area-effect) save). If the creature critically fails the save and the trigger was a manipulate action, that action is disrupted.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 150 (4 segments); Thresholds 100 (3 segments), 50 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Zis6FOzrRs7UUXMY",
          "name": "Sinful Assault",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The sinswarm makes a coordinated attack against each enemy in a 5-foot type:emanation, with a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+2 piercing damage\n2 2d8+9 piercing damage plus sinful bite\n3 3d8+11 piercing damage plus sinful bite",
          "traits": []
        },
        {
          "id": "89StrKD1wh351i0K",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature bitten by a sinspawn must attempt a check (will, dc:28) save as it is assailed by sinful thoughts. The sinswarm can't inflict the same sin effect on multiple targets in the same round until it has inflicted all seven sins at least once.\nCritical Success The creature is unaffected.\nSuccess The creature is Sickened 1.\nFailure The creature is Sickened 2.\nCritical Failure The creature is sickened 2 and takes one of the following additional effects, chosen by the GM:\n• Enfeebled 2 for 1 minute (envy)\n• Drained 1 (gluttony)\n• Clumsy 2 for 1 minute (greed)\n• Stupefied 2 for 1 minute (lust)\n• Clumsy 1 and Enfeebled 1 for 1 minute (pride)\n• –10-foot status penalty to all Speeds for 1 minute (sloth) Effect: Sinful Bite\n• drained 1 and enfeebled 1 for 1 minute (wrath)",
          "traits": [
            "arcane",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:wight-battalion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "qSlw0pWIgYnRr58I",
      "slug": "wight-battalion",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:020de729a8407d16c06d27ad74981936a7abbbb5eb7db146a6ab9f803116731b",
    "translatableHash": "sha256:9ac6334836b441400dfc3f927dcc85b8ce2bcd401da25f4c1e1f7a8296fe7c6f",
    "data": {
      "schemaVersion": 1,
      "name": "Wight Battalion",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "troop",
        "undead",
        "unholy",
        "wight"
      ],
      "description": "Wights are malevolent undead, bent on desecrating the holy and determined to cause suffering to all living creatures. A lone wight is dangerous enough, but when compelled to act together, they are a force to be reckoned with. A wight battalion has the potential to curse entire armies, increasing their numbers until they become an unholy tide.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 20,
        "intimidation": 18,
        "stealth": 18
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 7",
          "splash-damage 7"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "lctO2P0MLVpB9WYB",
          "name": "Final Grudge",
          "kind": "reaction",
          "description": "Trigger The wight battalion is about to lose a segment due to Hit Point damage\nEffect The wights strike out as they fall. Each enemy in a 5-foot type:emanation takes 2d4 piercing damage (check (reflex, dc:25, basic, options:area-effect) save). This occurs before the battalion loses a segment.",
          "traits": []
        },
        {
          "id": "i2hz3lKfdVEcYptB",
          "name": "Fueled by Spite",
          "kind": "passive",
          "description": "Each time a creature loses Hit Points due to the wight battalion's corrupting spite curse, the battalion gains 6 temporary Hit Points that last for 1 round.\nEffect: Fueled by Spite",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 150 (4 segments); Thresholds 100 (3 segments), 50 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "uYiopDw2hIKeycLa",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Ze7HYEJOg83Kkcje",
          "name": "Corrupting Spite",
          "kind": "passive",
          "description": "The wight battalion's attacks inflict a curse that makes a creature grow weak and spiteful. A living humanoid that dies while under this curse rises as a Wight after 1d4, controlled by the wight battalion that inflicted the curse. This new wight can't inflict corrupting spite and is Clumsy 2. If the creating wight battalion dies or after roughly a month of existence, the new wight becomes autonomous and becomes a normal wight\nSaving Throw check (fortitude, dc:25)\nStage 1 Drained 1 (1 round)\nStage 2 Drained 2 and doesn't treat any creatures as allies (1 round)\nStage 3 As stage 2, except Drained 3 (1 round)\nStage 4 As stage 2, except Drained 4 (1 round).",
          "traits": [
            "curse",
            "divine",
            "void"
          ]
        },
        {
          "id": "JZsyW5yBoBlflI3F",
          "name": "Hateful Daggers",
          "kind": "action",
          "description": "1 to 3\nThe wights coordinate melee attacks with the daggers they were buried with. Each enemy within a 5-foot type:emanation attempts a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions. On a failed save, the creature is also exposed to corrupting spite.\n1 2d4 piercing damage\n2 4d4+8 piercing damage\n3 4d4+14 piercing damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:hobgoblin-veteran-regiment",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "Td5jgGuZvNBVQngE",
      "slug": "hobgoblin-veteran-regiment",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c149335484dc2c9be350daf83218aea39b57cc9364abed87ba6921bf943f909f",
    "translatableHash": "sha256:77923caf0d77e2f7ac998c54ac52b88685f830bfaffa692ec1dcea7e445ec108",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin Veteran Regiment",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "hobgoblin",
        "humanoid",
        "troop"
      ],
      "description": "There are few sights as intimidating as a regiment of well-armed hobgoblin soldiers advancing across a battlefield. Exceptionally capable of defending themselves and tenacious to a fault, such hobgoblins are used as a precision tool, exploiting the enemy's weakest point and tearing it wide open to collapse entire defensive lines.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 15,
        "will": 19
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 20,
        "intimidation": 18
      },
      "languages": [
        "common",
        "goblin"
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
          "id": "Tt4mUW9Ms8d5hw9m",
          "name": "Hobgoblin Phalanx",
          "kind": "action",
          "description": "Many of the hobgoblins raise their shields to protect their allies. The regiment gains a +2 circumstance bonus to AC until the start of their next turn.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 150 (4 segments); Thresholds 100 (3 segments), 50 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NYRyHo1jTrJN4bQS",
          "name": "Watchful",
          "kind": "passive",
          "description": "The hobgoblin regiment is trained to guard from all sides with shields at the ready. The hobgoblin regiment can't be made Off-Guard by flanking creatures of the troop's level or lower.",
          "traits": []
        },
        {
          "id": "O2lSwgbjBHqj1RP2",
          "name": "Disciplined Strikes",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The hobgoblins engage in a coordinated melee attack against each enemy in a 5-foot type:emanation, with a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+2 slashing damage\n2 2d8+9 slashing damage\n3 3d8+11 slashing damage",
          "traits": []
        },
        {
          "id": "4GrQnnekkVGJNJRk",
          "name": "Overrun",
          "kind": "action",
          "description": "The hobgoblin veteran regiment marches inexorably forward, crushing enemies in their path. The regiment Strides up to double its Speed and can move through the spaces of Large or smaller creatures, dealing 2d8+9 slashing damage (check (reflex, dc:25, basic) save) to each creature whose space it enters. The regiment can attempt to Overrun the same creature only once in a single use of Overrun. When the regiment is reduced to 2 segments, the damage decreases to 1d8+2 slashing damage.",
          "traits": []
        },
        {
          "id": "unbuSuEJCHdIxDeZ",
          "name": "Shortbow Volley",
          "kind": "action",
          "description": "The hobgoblins draw their shortbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 60 feet that deals 4d6 piercing damage with a check (reflex, dc:25, basic, options:area-effect) save. When the regiment is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:arboreal-copse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "yHSlSwhlmgTZYNWs",
      "slug": "arboreal-copse",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9742570f79f7329114c1ec6c5407e8ba1828f366890fa024f51d2a7b6b6966ef",
    "translatableHash": "sha256:353e31c5c9f2f791e6fab3e28da3734b322c7fcea3ad12a93fcf8de58cfe7e2b",
    "data": {
      "schemaVersion": 1,
      "name": "Arboreal Copse",
      "level": 9,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "plant",
        "troop",
        "wood"
      ],
      "description": "Though arboreal wardens typically remain within the boundaries of the forests they protect, they occasionally gather into copses to seek information about potential threats to report back to arboreal regents. Arboreals are typically slow to act, but copses must sometimes make quick judgment calls when faced with imminent dangers.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 16,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 5,
        "int": 2,
        "wis": 5,
        "cha": 1
      },
      "skills": {
        "athletics": 20,
        "stealth": 16
      },
      "languages": [
        "arboreal",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 8",
          "piercing 8"
        ],
        "weaknesses": [
          "area-damage 10",
          "axe-vulnerability 8",
          "fire 12",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "uvjlEBAqOy2l2myB",
          "name": "Reactive Attack",
          "kind": "reaction",
          "description": "Trigger An enemy within 5 feet of the arboreal copse uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using\nEffect The arboreals swing their stone swords. The triggering enemy takes 2d8+9 bludgeoning damage (check (reflex, dc:25, basic) save). If the creature critically fails their saving throw and the trigger was a manipulate action, the troop disrupts that action.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 150 (4 segments); Thresholds 100 (3 segments), 50 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "rcGFpY9bZDxpvUJ2",
          "name": "Raise Shields",
          "kind": "action",
          "description": "The arboreal wardens of the copse raise their shields in tandem, gaining a +2 circumstance bonus to AC and Reflex saves.",
          "traits": []
        },
        {
          "id": "BVopnCZzSNujoI5t",
          "name": "Shoving Shield Wall",
          "kind": "action",
          "description": "The arboreal copse Strides. All enemies whose square the copse begins in or passes through during their movement take 5d6 bludgeoning damage (check (fortitude, dc:25, basic, options:area-effect,forced-movement)). On a failed saving throw, the arboreal copse carries the creature along on their shields, moving them in the same distance and direction for the rest of their Stride.",
          "traits": []
        },
        {
          "id": "AwWx7DridTlHkpo8",
          "name": "Sword Bash",
          "kind": "action",
          "description": "1 to 3\nThe arboreal copse uses their blunt stone longswords to pummel its foes. Each enemy in a 10-foot type:emanation must attempt a check (reflex, dc:25, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+1 bludgeoning damage\n2 2d8+9 bludgeoning damage\n3 3d8+10 bludgeoning damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:boggard-dreadknot",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "1erSkftJQkpxYziy",
      "slug": "boggard-dreadknot",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a3620480ce1e3e753c1cf25c990509420513bd9651f5a0b7fc3cd8a9f348c452",
    "translatableHash": "sha256:338b176bed3ade3eeefcf53e43086f5b61dadd888e898c71b1df2bca7094fdf6",
    "data": {
      "schemaVersion": 1,
      "name": "Boggard Dreadknot",
      "level": 10,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "animal",
        "boggard",
        "humanoid",
        "troop"
      ],
      "description": "The boggard cavalry wields clubs as they ride giant frogs into battle, often ranging out of their swamp homelands to strike fear into the hearts of their enemies.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 5,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 22
      },
      "languages": [
        "boggard",
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "YIQIuTTrnRTLS3kt",
          "name": "Batrachian Blitz",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The boggard dreadknot pummels each enemy in a 5-foot type:emanation with their clubs, with a check (reflex, dc:26, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 2d6 bludgeoning damage\n2 3d6+10 bludgeoning damage\n3 4d6+13 bludgeoning damage",
          "traits": []
        },
        {
          "id": "oJPw0n4DdxpkVNlK",
          "name": "Chorus of Croaks",
          "kind": "action",
          "description": "The boggard dreadknot unleashes a chorus of terrifying croaks. Any non-boggard within 30 feet becomes Frightened 1 unless they succeed at a check (will, dc:26, options:area-effect,inflicts:frightened) save; those who critically succeed are temporarily immune for 1 minute.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "P7BbgkbC8XZ9bU1X",
          "name": "Javelin Barrage",
          "kind": "action",
          "description": "The dreadknot draws javelins and launches a coordinated barrage. This barrage is a 10-foot type:burst within 30 feet that deals 4d6 piercing damage (check (reflex, dc:26, basic, options:area-effect) save). When the dreadknot is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "3B62IJtohsC40PBN",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids may not work on the boggard dreadknot, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "x9EwNYVrQ0Hm6zKF",
          "name": "Swamp Passage",
          "kind": "passive",
          "description": "A boggard dreadknot ignores difficult terrain caused by swamp terrain features.",
          "traits": []
        },
        {
          "id": "FLM2nudormV08hBs",
          "name": "Tongue Lashing",
          "kind": "action",
          "description": "The dreadknot's giant frogs lash out at each enemy in a 15-foot type:emanation with their tongues, requiring them to succeed at a check (reflex, dc:26) save or become Grabbed. A creature grabbed in this way isn't Immobilized, but it can't move more than 15 feet from the dreadknot. A creature can sever one of the tongues with a Strike against AC 25 that deals at least 15 slashing damage. This doesn't deal damage to the dreadknot.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:dwarf-longshot-squad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "6miTTZwtCs2ouJbv",
      "slug": "dwarf-longshot-squad",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6316c980758de8fa9177db91dd8acccc232066930e09d55c84adfff0fc17e08a",
    "translatableHash": "sha256:3074284ccb62cd563a0eea11b13629d8d4d0478e49b925546e5fcd979dc66f7a",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf Longshot Squad",
      "level": 10,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "dwarf",
        "humanoid",
        "troop"
      ],
      "description": "While many dwarves train to master hammers and shields, others seek to become masters of ranged weapons, usually sturdy and dwarven-built crossbows. Dwarven armies employ longshot squads as the first line of defense, especially outside of cramped tunnels and subterranean caverns.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 20,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 22,
        "will": 16
      },
      "abilities": {
        "str": 1,
        "dex": 7,
        "con": 5,
        "int": 3,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 19,
        "crafting": 22
      },
      "languages": [
        "common",
        "dwarven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 12",
          "splash-damage 12"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "EONX1OgwRhf35gSm",
          "name": "Bolts from the Blue",
          "kind": "action",
          "description": "The dwarven longshots reload their crossbows, then launch a ranged attack in the form of a volley. This volley is a 15-foot type:burst within 120 feet that deals 6d6 piercing damage with a check (reflex, dc:26, basic, options:area-effect) saving throw. When the dwarven longshot squad is reduced to 2 segments, this area decreases to a 10-foot type:burst.",
          "traits": []
        },
        {
          "id": "cE3nGCXUZ43jjTq2",
          "name": "Brandish Bayonets!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect Using blades attached to their crossbows, the dwarven longshots engages in a coordinated melee attack against enemies in a 5-foot type:emanation, with a check (reflex, dc:26, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+2 piercing damage\n2 2d8+11 piercing damage\n3 3d8+13 piercing damage",
          "traits": []
        },
        {
          "id": "se3I5XIArIcKZkGt",
          "name": "Hampering Fusillade",
          "kind": "action",
          "description": "The dwarven longshots fire dozens of bolts in quick succession to slow down advancing enemies. Each creature in a 30-foot type:burst within 120 feet must attempt a check (fortitude, dc:26) saving throw. On a failure, a creature takes a –10-foot circumstance penalty to its Speed for 1 minute. Spending an Interact action to remove the bolts ends this penalty.\nEffect: Hampering Fusillade",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:redcap-brigade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "7w3C4nT9N2JFG5wd",
      "slug": "redcap-brigade",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7c6eee012cf0634554de8a075391216ababa64146869c7f92a3f1d8a0232e99b",
    "translatableHash": "sha256:596b1c38489283f53ccfeee5591ee1e12ffb2aa3d0af0c38767c28a41e2c709e",
    "data": {
      "schemaVersion": 1,
      "name": "Redcap Brigade",
      "level": 10,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "fey",
        "troop"
      ],
      "description": "Redcaps are sadistic fey known for their merciless bloodlust. When they gather into troops, they goad each other to greater heights of violence.",
      "armorClass": 29,
      "hitPoints": 165,
      "speedFeet": 50,
      "perception": {
        "modifier": 19,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 22,
        "will": 17
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 22,
        "intimidation": 22,
        "nature": 17
      },
      "languages": [
        "common",
        "fey"
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
          "id": "P2zaiLJlRnK4SsHC",
          "name": "Fast Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "KydKNZNQcPHQ3kkf",
          "name": "Divine Revulsion",
          "kind": "passive",
          "description": "If a redcap brigade sees a creature brandish a religious symbol of a deity (which requires an Interact action by that creature) or cast a divine spell while wearing a religious symbol, the troop must attempt a check (will, dc:26) save. They then become temporarily immune to all brandished religious symbols for 10 minutes.\nCritical Success The troop is unaffected.\nSuccess The troop is Frightened 1.\nFailure The troop is Frightened 2.\nCritical Failure The troop is Frightened 3.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 165 (4 segments); Thresholds 110 (3 segments), 55 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "wPjzApQ4hGBMlw0E",
          "name": "Blood Soak",
          "kind": "passive",
          "description": "Trigger The redcap brigade loses its first segment, causes another troop to lose its first segment, or is otherwise exposed to copious amounts of blood\nEffect The redcap brigade gains a status bonus to damage rolls for 1 minute. The bonus is +2 if they spend one action on Bloody Reaping, +6 if they spend two actions, or +8 if they spend 3 actions. They gain a +4 status bonus to damage rolls with Bowl Over and Stomp.",
          "traits": []
        },
        {
          "id": "r5WgyRN7xTAUNicy",
          "name": "Bloody Reaping",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The redcaps in the brigade wildly swing their halberds and sickles at each enemy in a 10-foot type:emanation, with a check (reflex, dc:26, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d10+2 slashing damage\n2 2d10+9 slashing damage\n3 3d10+10 slashing damage",
          "traits": []
        },
        {
          "id": "v9h1oFMfGfVN2Qee",
          "name": "Bowl Over and Stomp",
          "kind": "action",
          "description": "The redcap brigade Strides; they can pass through spaces of Medium or smaller creatures, but can't end their movement in them. All enemies whose spaces the redcap brigade passed through take 4d8 bludgeoning damage and must attempt a check (fortitude, dc:26, options:area-effect,inflicts:prone) save. Bowl Over and Stomp damages each creature only once.\nCritical Success The creature takes no damage.\nSuccess The creature takes half damage. If it is Prone, it also takes 1d6 persistent bleed damage.\nFailure The creature takes full damage, is knocked prone, and takes 2d6 persistent bleed damage.\nCritical Failure The creature takes double damage, is knocked prone, and takes 2d6 persistent bleed damage.",
          "traits": []
        },
        {
          "id": "I03lQeMuxhRMsRtc",
          "name": "Deadly Swipes",
          "kind": "reaction",
          "description": "Trigger The redcap brigade drops a creature to 0 Hit Points with Bloody Reaping\nEffect The redcap brigade performs an additional one-action Bloody Reaping, ignoring the once per round frequency limitation. This does not deal damage to the triggering creature.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:vordine-legion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "rdS6HBEtST3WKnSA",
      "slug": "vordine-legion",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9e6a48e513898857260b9b0479498f4e4507c78480a6cf9d98bd1b884cb21fdb",
    "translatableHash": "sha256:01197fe0824808f17bb82d257057b47878c1d8c568b7fc44e700092c457474eb",
    "data": {
      "schemaVersion": 1,
      "name": "Vordine Legion",
      "level": 10,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "devil",
        "fiend",
        "troop",
        "unholy"
      ],
      "description": "Vordines are the foot soldiers of Hell, dispatched in vast armies from the iron city of Dis to guard Hell's uppermost layers and crush the enemies of the archdevils who rule there. Indefatigable and pitiless, a legion of vordines strikes with a ruthless precision that commands fear and envy throughout the multiverse in equal measure. Although they usually serve at the command of more powerful devils, such as the tyrannical nessari, every legion also observes a unique internal hierarchy that enables another vordine to assume command at a moment's notice should it become necessary.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 19,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 5,
        "con": 7,
        "int": 2,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 24,
        "intimidation": 22,
        "religion": 19
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
          "physical 10 except silver",
          "poison 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10",
          "holy 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "Kbi0DowLDZQFMkMJ",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "tRuKD4xUouitV2n4",
          "name": "Reactive Attack",
          "kind": "reaction",
          "description": "Trigger A creature within the vordine legion's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using\nEffect The creature takes 2d8+11 piercing damage (check (reflex, dc:26, basic, options:area-effect) save); this damage has the magical and unholy traits. If the creature critically fails its saving throw and the trigger was a manipulate action, the legion disrupts that action.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "yzekhn0KtjihD2E8",
          "name": "Burning March",
          "kind": "action",
          "description": "The vordine legion Strides, leaving an orderly pattern of burning hoofprints in each square they enter. The hoofprints continue to burn for 1 minute. Any creature on the ground that begins its turn in, or enters a square with, burning hoofprints takes 2d8 fire damage.",
          "traits": [
            "divine",
            "fire",
            "unholy"
          ]
        },
        {
          "id": "1xgyAsJKi4uaGNXT",
          "name": "Impaling Barrage",
          "kind": "action",
          "description": "The vordine legion releases a hail of tridents. This hail is a 10-foot type:burst within 40 feet that deals 4d8 piercing damage (check (reflex, dc:26, basic, options:area-effect,inflicts:clumsy) save). Creatures that fail the saving throw are Clumsy 1 until the start of the vordine legion's next turn (Clumsy 2 on a critical failure). When the vordines are reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "jWsj5fbvx0llQW2b",
          "name": "Tines of Dis",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The vordines of the legion make coordinated melee attacks with their tridents. Each enemy within a 5-foot type:emanation must attempt a check (reflex, dc:26, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+2 piercing damage\n2 2d8+11 piercing damage\n3 3d8+14 piercing damage",
          "traits": [
            "magical",
            "unholy"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "l0lxQRbgZFNsftfk",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 26,
          "spells": [
            {
              "id": "M63XpP8Q3UqQkTrQ",
              "name": "Translocate (At Will)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:dwarf-longshot-squad-guns",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "zy9mm8SibtzghVUP",
      "slug": "dwarf-longshot-squad-guns",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:95564d1f79f27737fe6f9d025bb12aab7ed62ac67e7ba49f72479b9b911edf91",
    "translatableHash": "sha256:5d265b1d4fe5be6dcf0a62e60048dccd865b78f538a7260b2af596a0a823296e",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf Longshot Squad (Guns)",
      "level": 10,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "dwarf",
        "humanoid",
        "troop"
      ],
      "description": "While many dwarves train to master hammers and shields, others seek to become masters of ranged weapons, usually sturdy and dwarven-built crossbows. Dwarven armies employ longshot squads as the first line of defense, especially outside of cramped tunnels and subterranean caverns.\nLongshot with Guns\nDwarves from Dongun Hold and similar places have access to firearms, and you might choose to reflect this by giving the dwarf longshot squad rifles. Adjust the stat block to have the uncommon trait and replace mentions of \"crossbows\" to \"rifles\" and \"bolts\" to \"bullets.\" In addition, give the Bolts from the Blue action the concussive trait, meaning that it deals bludgeoning or piercing damage, whichever would be more detrimental to each target (you may also want to refer to it as \"Bullets from the Blue\"). Finally, replace Hampering Fusillade with the following ability.\nBullet Smog 2 The dwarven longshots fire their rifles in rapid succession to create a cloud of smoke within 120 feet. This cloud is a 20-foot type:burst and lasts for 1 minute or until it is dispersed by a strong wind, whichever comes first. All creatures within the cloud become Concealed, and all creatures outside the cloud become concealed to creatures within it.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 20,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 22,
        "will": 16
      },
      "abilities": {
        "str": 1,
        "dex": 7,
        "con": 5,
        "int": 3,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 19,
        "crafting": 22
      },
      "languages": [
        "common",
        "dwarven"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 12",
          "splash-damage 12"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 120 (3 segments), 60 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "cE3nGCXUZ43jjTq2",
          "name": "Brandish Bayonets!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect Using blades attached to their rifles, the dwarven longshots engages in a coordinated melee attack against enemies in a 5-foot type:emanation, with a check (reflex, dc:26, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+2 piercing damage\n2 2d8+11 piercing damage\n3 3d8+13 piercing damage",
          "traits": []
        },
        {
          "id": "vTdnKvhxzs5uAmUE",
          "name": "Bullet Smog",
          "kind": "action",
          "description": "The dwarven longshots fire their rifles in rapid succession to create a cloud of smoke within 120 feet. This cloud is a 20-foot type:burst and lasts for 1 minute or until it is dispersed by a strong wind, whichever comes first. All creatures within the cloud become Concealed, and all creatures outside the cloud become concealed to creatures within it.",
          "traits": []
        },
        {
          "id": "EONX1OgwRhf35gSm",
          "name": "Bullets from the Blue",
          "kind": "action",
          "description": "The dwarven longshots reload their rifles, then launch a ranged attack in the form of a volley. This volley is a 15-foot type:burst within 120 feet that deals 6d6 untyped damage with a check (reflex, dc:26, basic, options:area-effect) saving throw. When the dwarven longshot squad is reduced to 2 segments, this area decreases to a 10-foot type:burst.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:viking-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "8GzKWLw4LjZUoozH",
      "slug": "viking-guard",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dc4db38f7a486bf7cfa851ba3d59cbb1b1db84b4072f24ddffe49841d007c7fc",
    "translatableHash": "sha256:e9777a949133b76da5050b9e19c5f36d68de84744358b4a2162e27efa7b0e73f",
    "data": {
      "schemaVersion": 1,
      "name": "Viking Guard",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Battle-tested Ulfen barbarians, hunters, and warriors gather into an elite fighting unit who specialize in offering protection to their leaders in battle as well as protecting those who can afford their services. Traveling far and wide, single troops or entire companies can easily find work based on their reputations, from serving as bodyguards in small private armies to taking on specialized jobs.",
      "armorClass": 30,
      "hitPoints": 195,
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
        "dex": 3,
        "con": 5,
        "int": 1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 23,
        "intimidation": 21
      },
      "languages": [
        "common",
        "skald"
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
          "id": "VqEamdyLNKS5oVeS",
          "name": "+2 Status to All Saves vs. Fear",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "nip3rJMlKAmiJXIk",
          "name": "Sacrifice",
          "kind": "reaction",
          "description": "Requirements The viking guard has a charge, and that creature is adjacent to the viking guard\nTrigger The viking guard's charge takes Hit Point damage\nEffect The viking guard's charge takes half damage, and the viking guard takes the remainder of the damage.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 195 (4 segments); Thresholds 130 (3 segments), 65 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "2yhFRocgioO4honN",
          "name": "Berserker Strikes",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect Battle axes in hand, the viking guard engages in a coordinated melee attack against enemies in a 5-foot type:emanation, with a check (reflex, dc:27, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8+3 slashing damage\n2 2d8+12 slashing damage\n3 3d8+15 slashing damage",
          "traits": []
        },
        {
          "id": "dmX23IiV8D4OzC5m",
          "name": "Guard Charge",
          "kind": "action",
          "description": "The viking guard designates an ally it can see to be its charge. The charge gains a +2 circumstance bonus to their AC, Reflex saves, and saves against fear when they are adjacent to the viking guard. Further, this allows the viking guard to use its Sacrifice and Shield Wall actions. A viking guard can have only one charge at a time, and if it designates a new charge, the old one loses all benefits. If the viking guard's charge is reduced to 0 Hit Points, the viking guard must succeed at a check (will, dc:30) save or become Frightened 2; this is an emotion, fear, and mental effect.\nEffect: Guard Charge",
          "traits": []
        },
        {
          "id": "kQKdy0Cda3omnspU",
          "name": "Shield Wall",
          "kind": "passive",
          "description": "Requirements The viking guard has a charge, and that creature is adjacent to the viking guard\nEffect Raising shields, the viking guard Strides up to twice its Speed as it protects its charge. The viking guard gains a +2 circumstance bonus to its AC against reactions triggered by this movement. The viking guard's charge can Stride the same distance as a reaction, moving with the troop to maintain the bonuses from Guard Charge during this movement.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:clockwork-infantry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "DFKYnBWjZ1i9Lssz",
      "slug": "clockwork-infantry",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:da1e71ba3383883e683d93dbfd56c2bb3981eac616b02fec02296171400abf74",
    "translatableHash": "sha256:431ab8be5feb4abd42f47f45400a1306114875400a94b1729ff50b9b883a1ac5",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Infantry",
      "level": 11,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "clockwork",
        "construct",
        "mindless",
        "troop"
      ],
      "description": "With each unit being 500 pounds of metal and magic, a clockwork infantry is a force to be reckoned with on the battlefield. Needing no food, shelter, or rest and feeling no pain, clockwork infantry can advance where living units have great trouble. With no morale that can be broken or minds that can be beguiled, they patrol without stopping and show no mercy. The only drawback is the need to wind them more often than simpler clockwork mechanics.",
      "armorClass": 30,
      "hitPoints": 195,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
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
        "dex": 3,
        "con": 5,
        "int": -5,
        "wis": 5,
        "cha": -5
      },
      "skills": {
        "athletics": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 5 except adamantine, orichalcum"
        ],
        "weaknesses": [
          "area-damage 10",
          "electricity 10",
          "splash-damage 10",
          "orichalcum 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "WsoRfLNjWzAs0wwC",
          "name": "Wind-Up",
          "kind": "passive",
          "description": "24 hours, Disable Device DC 27, standby\nFor a clockwork to act, it must be wound with a unique key by another creature. This takes 1 minute. Once wound, it remains operational for the listed amount of time, usually 24 hours, after which time it becomes unaware of its surroundings and can't act until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most clockwork keepers wind all their clockworks at a set time, typically 8 a.m.\nA clockwork that lists standby in its wind-up entry can enter standby mode as a 3-action activity. Its operational time doesn't decrease in standby, but it can sense its surroundings (with a -2 penalty to Perception). It can't act, with one exception: when it perceives a creature, it can exit standby as a reaction (rolling initiative if appropriate).\nA creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, the clockwork loses 1 hour of operational time. This can be done even if the clockwork is in standby mode.",
          "traits": []
        },
        {
          "id": "na8p3W8S14jn8Qiz",
          "name": "Reactive Sweep",
          "kind": "reaction",
          "description": "Trigger An enemy within a 10-foot type:emanation uses a manipulate action or a move action, makes a ranged attack, or leaves a square in the area during a move action it's using\nEffect The clockwork infantry lashes out with their halberds. The triggering enemy takes 2d10+10 untyped damage (check (reflex, dc:27, basic, options:area-effect) save). If the enemy critically fails this saving throw and the trigger was a manipulate action, the damage disrupts that action.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 195 (4 segments); Thresholds 130 (3 segments), 65 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "bcpOku7PiXdT4H8M",
          "name": "Halberd Sweep",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The clockwork infantry engages in a coordinated melee attack against each enemy in a 10-foot type:emanation, with a check (reflex, dc:27, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d10+2 untyped damage\n2 2d10+10 untyped damage\n3 3d10+12 untyped damage",
          "traits": []
        },
        {
          "id": "HSCg5KpZvlnFPxrU",
          "name": "Raise Defenses",
          "kind": "action",
          "description": "Frequency once per round\nEffect The clockwork soldiers of the infantry extend external plates on mechanical actuators to defend the troop or an adjacent creature. The creature gains a +2 circumstance bonus to AC until the start of the infantry's next turn, or until it is no longer adjacent to the infantry, whichever comes first.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:zecui-horde",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "ZV0sTglav4pah5iu",
      "slug": "zecui-horde",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:966e35cc172e81ffb564e485dbfa848e1c3678ad36db4f8be86fa0ba463ccf15",
    "translatableHash": "sha256:cf50d24860ff0b16c8c1856f222eca7a12d8e443b99b54aa3012ac98a61722f5",
    "data": {
      "schemaVersion": 1,
      "name": "Zecui Horde",
      "level": 11,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "troop"
      ],
      "description": "A surprise raid by a swarm of the insectile zecui can easily wipe out an entire village overnight. When they don't devour their victims immediately, zecuis typically implant them with their own larvae and bury them in sprawling mass graves, where the developing zecui horde can lie dormant for years before suddenly erupting to the surface to wreak havoc on nearby settlements.",
      "armorClass": 30,
      "hitPoints": 195,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 24,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 3,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 21,
        "stealth": 23
      },
      "languages": [
        "aklo"
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 195 (4 segments); Thresholds 130 (3 segments), 65 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "S8vzntd61NvQwoFv",
          "name": "Harden Chitin",
          "kind": "action",
          "description": "The zecuis fuse their chitin into black metallic shells. The horde gains resistance 10 to all damage (except mental and spirit) until they next take a move action.",
          "traits": []
        },
        {
          "id": "6qGgXdGTtS0unUby",
          "name": "Mandible Frenzy",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The horde makes a vicious bite attack against each enemy in a 5-foot type:emanation (check (reflex, dc:27, basic, options:area-effect) save). The damage dealt depends on the number of actions.\n1 1d8+2 piercing damage\n2 2d8+12 piercing damage\n3 3d8+15 piercing damage",
          "traits": []
        },
        {
          "id": "PKUSYo3GgYBtftNN",
          "name": "Mucus Deluge",
          "kind": "action",
          "description": "The horde spits a volley of larva-infested mucus as a 10-foot type:burst within 30 feet. Each creature in the area must succeed at a check (reflex, dc:27, options:area-effect,inflicts:immobilized) save or be stuck to the nearest surface, Immobilized until they Escape DC 30. Any creature so immobilized is exposed to zecui larvae at the end of each of its turns. When the zecui horde is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "Guwo78TyBNSprkQI",
          "name": "Subterranean Ambush",
          "kind": "action",
          "description": "Requirements The zecui horde has burrowed into an ambush position just beneath a surface of dirt, sand, or a similar loose material\nEffect The horde bursts from the ground and moves up to its Speed. The horde deals 1d8+2 piercing damage (check (reflex, dc:29, basic, options:area-effect) save) to each enemy in a 5-foot type:emanation at the end of this movement.",
          "traits": []
        },
        {
          "id": "d2LtVhBSBPnv1oh3",
          "name": "Zecui Larvae",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:30)\nStage 1 visible lumps as the larvae move but no ill effect (1 day)\nStage 2 Drained 1 (1 day)\nStage 3 Drained 2 (1 day)\nStage 4 Drained 3 and controlled by the zecui larva (1 day)\nStage 5 the creature dies and an adult Zecui can emerge from the corpse as an Interact action.",
          "traits": [
            "disease"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:protean-tumult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "byWkcSBvfm4n7I3m",
      "slug": "protean-tumult",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3d8655021d47123b43054b450e4a8029e4f2e9a50fb5de22ebe53f2a2a6b98d0",
    "translatableHash": "sha256:f7013fbf9d53bc2a6f757039e213356fee232e63d445ca8ab8857c9ea7f57c61",
    "data": {
      "schemaVersion": 1,
      "name": "Protean Tumult",
      "level": 12,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "monitor",
        "protean",
        "troop"
      ],
      "description": "Due to the inherently chaotic nature of proteans, many would assume they are incapable of cooperation. However, they are cunning enough to be able to unite in the face of danger or at the behest of more powerful beings, sometimes acting as a group called a protean tumult. Such an association is comprising of dozens of proteans of different shapes and sizes, many of whom continually alter their forms from moment to moment.",
      "armorClass": 32,
      "hitPoints": 210,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 25,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 22,
        "intimidation": 22,
        "survival": 20
      },
      "languages": [
        "chthonian",
        "protean",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "precision 8",
          "protean-anatomy 12"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "R96622IFQ9P9kEle",
          "name": "Entropy Sense",
          "kind": "passive",
          "description": "A protean tumult can anticipate the most likely presence of a creature through a supernatural insight into chaotic probabilities and chance. This grants it the ability to sense creatures within the listed range. Veil of Privacy prevents a creature from being detected via entropy sense automatically (without a counteract check).",
          "traits": [
            "divine",
            "prediction"
          ]
        },
        {
          "id": "scu5Bs8DD8FihPK7",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NsbD0XXJd9rWTG6K",
          "name": "Fast Healing 8",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "e8XD5kcvG2Bx7SOy",
          "name": "Protean Anatomy 12",
          "kind": "passive",
          "description": "A protean's vital organs shift and change shape and position constantly. Immediately after the protean takes acid, electricity, or sonic damage, it gains the listed amount of resistance to that damage type. This lasts for 1 hour or until the next time the protean takes damage of one of the other types (in which case its resistance changes to match that type), whichever comes first. The protean is immune to polymorph effects unless it is a willing target. If Blinded or Deafened, the protean automatically recovers at the end of its next turn as new sensory organs grow to replace the compromised ones.\nEffect: Protean Anatomy",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 210 (4 segments); Thresholds 140 (3 segments), 70 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "xySnVB7sWVdq7l75",
          "name": "Chaos Flux",
          "kind": "passive",
          "description": "A protean tumult is less organized and more vicious than most troops. It can move into other creatures' spaces, and other creatures can move into its spaces. Its spaces are difficult terrain to non-protean creatures. A creature that willingly moves into a protean tumult's space takes 1d12+1 untyped damage (check (reflex, dc:29, basic, options:area-effect) save); a creature takes this damage only once per round.",
          "traits": []
        },
        {
          "id": "JSA3xmys0kWwH0A1",
          "name": "Chaos Strike",
          "kind": "passive",
          "description": "Frequency once per round\nEffect The protean tumult chooses adamantine, cold iron, or silver; the damage dealt by its Claws, Jaws, and Tails is treated as that material for 1 minute or until it uses Chaos Strike again.",
          "traits": [
            "divine",
            "morph"
          ]
        },
        {
          "id": "sCHb6Krue4UHWMqU",
          "name": "Claws, Jaws, and Tails",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The tumult viciously attacks each enemy within a 5-foot type:emanation (check (reflex, dc:29, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d12+1 untyped damage\n2 2d12+10 untyped damage\n3 3d12+11 untyped damage",
          "traits": []
        },
        {
          "id": "JegdZ0GZYtjq4SH8",
          "name": "Stupefying Swipe",
          "kind": "action",
          "description": "The protean tumult makes their way across the battlefield. It Strides. At the end of this movement, they lash out at the enemy with tentacles and other blunt body parts, dealing 2d12+10 bludgeoning damage in a 5-foot type:emanation (check (reflex, dc:29, basic, options:area-effect,inflicts:stupefied) save). A creature who fails this save is also Stupefied 2 for 2 rounds (Stupefied 3 on a critical failure).",
          "traits": [
            "divine",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "uked2dWkFKJWgnPM",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 29,
          "spells": [
            {
              "id": "HtObAvlkwMg0OWFb",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:angelic-chorus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "p8sGnipPHZuoyg9F",
      "slug": "angelic-chorus",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7c34ea6e0b4ca7549d90450ef560b55c3bd3a060bc7fbff9243215408bf9f655",
    "translatableHash": "sha256:3c8f602bf727c8b4f5ee4ca9b6e1e8e400d2cfa3c984152fe8368b60b18fe8d9",
    "data": {
      "schemaVersion": 1,
      "name": "Angelic Chorus",
      "level": 12,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "angel",
        "celestial",
        "holy",
        "troop"
      ],
      "description": "While choral angels are content to sing their hymns in Nirvana, they must sometimes take to the mortal realm to provide needed succor for those engaged in righteous battle against the wicked. An angelic chorus often acts as support for armies who have gained the favor of the celestial realms.",
      "armorClass": 32,
      "hitPoints": 210,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 22,
        "will": 25
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 3,
        "int": 3,
        "wis": 4,
        "cha": 7
      },
      "skills": {
        "acrobatics": 22,
        "diplomacy": 25,
        "performance": 27,
        "religion": 24
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "sonic 15"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10",
          "unholy 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "y5xhdwCG5XD2cmSs",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8IfYx77BNUsXURJH",
          "name": "Harmonizing Aura",
          "kind": "passive",
          "description": "20 feet.\nAllies in the aura gain a +2 status bonus to sonic damage rolls and a +1 status bonus to AC and all saves against effects with the auditory or sonic trait. Enemies in the aura take a –2 status penalty to sonic damage rolls and a –1 status penalty to AC and all saves against auditory and sonic effects.",
          "traits": [
            "aura",
            "divine",
            "sonic"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 210 (4 segments); Thresholds 140 (3 segments), 70 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "7GGKYj0XvXO8RIX5",
          "name": "Admonishing Hymn",
          "kind": "action",
          "description": "The angelic choir raises their voices in song, singing a note that vibrates the very fabric of being. This takes the form of a 15-foot type:burst within 90 feet that deals 6d6 sonic damage (check (fortitude, dc:29, basic, options:area-effect,inflicts:deafened) save). A creature who critically fails the save is Deafened for 1 minute. When the angelic chorus is reduced to 2 segments, this area decreases to a 10-foot type:burst.",
          "traits": [
            "divine",
            "holy",
            "sonic"
          ]
        },
        {
          "id": "ARm9JqD3DFsJH9sb",
          "name": "Harmonized Spellcasting",
          "kind": "passive",
          "description": "When the angelic chorus Casts a Spell, their constituent members combine their efforts into casting a more powerful version of the spell than any one member could achieve alone. When Casting a Spell that deals sonic damage, that spell gains a status bonus to damage equal to its rank.",
          "traits": []
        },
        {
          "id": "IGvKRatzTPUtOGBv",
          "name": "Righteous Clamor",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect With sonorous shouts, the angelic chorus lashes out with their fists in a coordinated melee attack against each enemy in a 5-foot type:emanation (check (reflex, dc:29, basic, options:area-effect) save). The damage depends on the number of actions\n1 1d8 bludgeoning damage\n2 2d8+7 bludgeoning damage\n3 3d8+10 bludgeoning damage",
          "traits": [
            "holy",
            "magical"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "dCtFEADokzHjsZyj",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 19,
          "spells": [
            {
              "id": "VjfVGiZQxWZ0VMON",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "ZJUnOKXU4oP5oSDp",
              "name": "Uplifting Overture",
              "rank": 1
            },
            {
              "id": "wlV1HBrhcnLbwGcZ",
              "name": "Counter Performance (At Will)",
              "rank": 3
            },
            {
              "id": "VcDH5zYjToPwZXjy",
              "name": "Cleanse Affliction (At Will)",
              "rank": 4
            },
            {
              "id": "jrz2AkVEYb2ACdZq",
              "name": "Clear Mind (At Will)",
              "rank": 4
            },
            {
              "id": "QHJ2juirPx0zC8gZ",
              "name": "Noise Blast (At Will)",
              "rank": 4
            },
            {
              "id": "2XIprPGTFUjmrZBz",
              "name": "Breath of Life",
              "rank": 5
            },
            {
              "id": "RgKJC94jMVSCAYO3",
              "name": "Heal",
              "rank": 5
            },
            {
              "id": "yMY8bMgWYCc9hqwe",
              "name": "Noise Blast",
              "rank": 5
            },
            {
              "id": "XsVIz4B9oOr6LR1y",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "aohBsfNddXkejdUx",
              "name": "Clear Mind",
              "rank": 6
            },
            {
              "id": "nmsnYgxRRwmBpoFQ",
              "name": "Heal",
              "rank": 6
            },
            {
              "id": "8rnmowip8X4QhwcB",
              "name": "Noise Blast",
              "rank": 6
            },
            {
              "id": "zhZUVjMZiCAlY4Dd",
              "name": "Zealous Conviction",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:archer-regiment",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "pC4qg7AarAty1K7K",
      "slug": "archer-regiment",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:27f3339f669d52fbf3e77cffe3b96fff282f5f31cbf12ba79295d4f7dbb9010d",
    "translatableHash": "sha256:0675a7c945b4466e987e60bdcd1e98caa148c319c986c82805fe295373431685",
    "data": {
      "schemaVersion": 1,
      "name": "Archer Regiment",
      "level": 12,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Archer regiments are capable of filling the sky with arrows at great distances, making them vital to any war leader who wishes to weaken the enemy before they get close to allied units or encampments.",
      "armorClass": 32,
      "hitPoints": 210,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 25,
        "will": 22
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 3,
        "int": 1,
        "wis": 5,
        "cha": 1
      },
      "skills": {
        "acrobatics": 25,
        "stealth": 22,
        "survival": 22
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 210;Thresholds 140 (3 segments), 70 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8AcivAl6LMDAhval",
          "name": "Dagger Defense",
          "kind": "action",
          "description": "1 to 3\nThe archer regiment draws daggers to attack close-range enemies. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:29, basic, options:area-effect) save. The damage depends on the number of actions. The archer regiment gains a +1 circumstance bonus to AC until the beginning of their next turn.\n1 2d4+2 piercing damage\n2 4d4+12 piercing damage\n3 4d4+15 piercing damage",
          "traits": []
        },
        {
          "id": "VulwEYPqDylG33H9",
          "name": "Drilled in Formations",
          "kind": "action",
          "description": "Frequency once per round\nEffect The archer regiment uses Change Formation. An archer regiment unit typically knows the loose and marching column formations.",
          "traits": []
        },
        {
          "id": "R51FceAqG8YYfUtl",
          "name": "Rain of Arrows",
          "kind": "action",
          "description": "The archer regiment fires their longbows in a coordinated volley. This volley is either a 15-foot type:burst within 200 feet that deals 4d8 piercing damage or a 10-foot type:burst within 100 feet that deals 6d8 piercing damage. Either effect has a check (reflex, dc:29, basic, options:area-effect) save. When the archer regiment is reduced to 2 segments, both areas are reduced by 5 feet.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:druid-circle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "V2vFgzymDp2wKRwh",
      "slug": "druid-circle",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0898ce49e6e40b768fc6648f5cff841ac283ba8f5af957dbb5b4a5e104ef5af9",
    "translatableHash": "sha256:607c6086c1d4ba4c3d70f6908c6a7e127c1c125cd59c6459765ec86ffdd2e036",
    "data": {
      "schemaVersion": 1,
      "name": "Druid Circle",
      "level": 12,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "In their role as protectors of the wild and unspoiled areas of the world, powerful druids might gather together to stand against a particularly heinous threat.",
      "armorClass": 32,
      "hitPoints": 210,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 22,
        "will": 25
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 7,
        "cha": 4
      },
      "skills": {
        "diplomacy": 20,
        "medicine": 25,
        "nature": 25,
        "survival": 25
      },
      "languages": [
        "common",
        "wildsong"
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
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 210 (4 segments); Thresholds 140 (3 segments), 70 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eVKtrWe3AVnZoOrz",
          "name": "Call Down the Storm",
          "kind": "action",
          "description": "The druids summon wind and lightning against all creatures in a 10-foot type:burst within 80 feet. This storm deals 3d10 electricity damage (check (reflex, dc:29, basic, options:area-effect,forced-movement) save). A creature who fails the save is also pushed 5 feet away from the druid circle. When the druid circle is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "air",
            "electricity",
            "primal"
          ]
        },
        {
          "id": "ahqeqWaBaTmYKLAQ",
          "name": "Sickle and Staff",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The druids strike out in a coordinated melee attack against all enemies in a 5-foot type:emanation with a check (reflex, dc:29, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 2d6 untyped damage\n2 4d6+9 untyped damage\n3 5d6+13 untyped damage",
          "traits": []
        },
        {
          "id": "GiP41mP0LnZ0XTGl",
          "name": "Troop Spellcasting",
          "kind": "passive",
          "description": "When the druid circle Casts a Spell, its constituent members combine their efforts into casting a more powerful version of the spell than any one member could achieve alone. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "xTS9tSQ3q4fKFHD8",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 26,
          "saveDc": 32,
          "spells": [
            {
              "id": "IbvNTM1t8DqZL0at",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "M1gkmWfcgtMT4jwy",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "6XFddrS3YFdjbrIq",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "xUXS62tOxs7BQ7gb",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "tNKnrCHTGKpH3XCf",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "hx7v3uNAJryugtmr",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "Jxq24laNLHxStNe1",
              "name": "Speak with Plants",
              "rank": 3
            },
            {
              "id": "i5zNobz0RYAYTVku",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "VkgYw0E0cnYwAK75",
              "name": "Control Water",
              "rank": 5
            },
            {
              "id": "Z3Xtw8Go4rrhtPt4",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "S2zO0XYDYEADD8cR",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "CyMZDIlhAXYBlkWN",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "2PUSmiQYlXZJZFz8",
              "name": "Tangling Creepers",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:drake-flight",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "2CfSF5X4YlLPNKgh",
      "slug": "drake-flight",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4a6d34d380f6953324dd9e63d4582a7625865a4a734a4504cc80515376120caa",
    "translatableHash": "sha256:e558de1d98632bb9bd9e01495de38ef9fe18f498cc8184d5e51d65ed92bff6b9",
    "data": {
      "schemaVersion": 1,
      "name": "Drake Flight",
      "level": 13,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "dragon",
        "troop"
      ],
      "description": "Though drakes from different biomes rarely interact with one another due to geographical distance, a powerful creature, ancient artifact, or natural catastrophe could bring together multiple types of drakes into a single terrifying, living catastrophe. Such a flight can be a terror to behold on the battlefield.",
      "armorClass": 33,
      "hitPoints": 240,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 4,
        "int": -2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 30,
        "intimidation": 24,
        "survival": 24
      },
      "languages": [
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "sleep"
        ],
        "resistances": [
          "acid 5",
          "cold 5",
          "fire 5",
          "poison 5"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 240 (4 segments), Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "WWmwctWaT06hNzMR",
          "name": "Draconic Onslaught",
          "kind": "action",
          "description": "1 to 3\nThe drakes frenzy, lashing out with fangs and tails. Each enemy in a 10-foot type:emanation attempts a check (reflex, dc:30, basic, options:area-effect) save. The damage depends on the number of actions.\n1 2d8 untyped damage\n2 3d8+10 untyped damage\n3 4d8+14 untyped damage",
          "traits": []
        },
        {
          "id": "FUmBqO0V8PxJ39YL",
          "name": "Drake Breath",
          "kind": "action",
          "description": "Certain drakes within the flight bring their breath weapon (or similar ability) to bear, exhaling energy that explodes in a 15-foot type:burst within 120 feet. This explosion deals 5d6 untyped damage (acid, cold, fire, or poison damage); the ability gains the corresponding trait. The drake flight can't choose the same damage type until it uses this ability with a different damage type. When the drakes are reduced to 2 segments, this area decreases to a 10-foot type:burst.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "hL2HetxBFbq6nqu3",
          "name": "Speed Surge",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The drake flight Strides or Flies twice.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:vanth-guardian-flock",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "3om22P58nZSuqNrv",
      "slug": "vanth-guardian-flock",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bea6a646e10898be1cb573a15ae665043a67230adbd17ef8746380e60a26e66f",
    "translatableHash": "sha256:f351de219438a719969569ab1206094083176cc7f57648f26fa57721cdfd5e12",
    "data": {
      "schemaVersion": 1,
      "name": "Vanth Guardian Flock",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "monitor",
        "psychopomp",
        "troop"
      ],
      "description": "Vanth psychopomps are eternal guardians of the cycle of life and death. When souls are threatened by fiends or other malevolent forces, they gather together to cut the threat down.",
      "armorClass": 33,
      "hitPoints": 240,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": [
          "lifesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 21,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 3,
        "int": 3,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 27,
        "intimidation": 24,
        "occultism": 22,
        "religion": 22,
        "stealth": 27
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
          "poison 15",
          "void 15"
        ],
        "weaknesses": [
          "area-damage 12",
          "splash-damage 12"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "OOJxypjWRzmy0t0N",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "20 feet. check (will, dc:30, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "MsKH9CcQ2FUFYARf",
          "name": "Reactive Relocation",
          "kind": "reaction",
          "description": "Trigger A creature hits the guardian flock with an attack roll\nEffect After the attack roll is resolved, the troop pools dimensional magic to rapidly change their position. They cast 4th-rank Translocate, except their range is limited to 40 feet.",
          "traits": [
            "teleportation"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 240 (4 segments); Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "H19kpPq2dPnbnx8y",
          "name": "Guardians' Curse",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The guardian flock bestows a curse upon all enemies in a 5-foot type:emanation by touching them with their scythes. Each affected creature must attempt a check (will, dc:33, options:area-effect) save.\nCritical Success The target is unaffected and is temporarily immune to Guardians' Curse for 24 hours.\nSuccess The target feels a momentary shudder of doom and is Stupefied 1 for 1 minute by the distracting sensation.\nFailure The target becomes morose and glum as it accepts its own inevitable fate. For 1 hour, the target is Stupefied 2. Each time the target gains the dying condition, the stupefied condition value increases by 1, to a maximum value of Stupefied 4.\nCritical Failure As failure, but the effect is permanent.",
          "traits": [
            "curse",
            "divine",
            "misfortune"
          ]
        },
        {
          "id": "Czd11iaEfPW4tn8T",
          "name": "Harvest the Wicked",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The vanths swing their scythes in a coordinated melee attack. Each enemy in a 5-foot type:emanation must attempt a check (reflex, dc:30, basic, options:area-effect) save. The damage depends on the number of actions. The slashing damage is treated as adamantine, cold iron, and silver.\n1 1d10+1 slashing damage\n2 2d10+3 slashing damage\n3 2d10+7 slashing damage",
          "traits": []
        },
        {
          "id": "5KyfdWPCoXhy15Im",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "The physical damage dealt by the guardian flock's Harvest the Wicked ability is treated as coming from a weapon with a ghost touch property rune. In addition, the vanths deal the listed damage as void damage to living creatures or vitality damage to undead.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "CJy8JnjC7LvqXXae",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 33,
          "spells": [
            {
              "id": "zogdZRuPM1r7fHpQ",
              "name": "Invisibility (at will, self only)",
              "rank": 2
            },
            {
              "id": "Toww76p5AYPnmv50",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "tRDAcMVxN9VOwfp6",
              "name": "Locate",
              "rank": 5
            },
            {
              "id": "Vi9PviYUgB74yaR1",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "LGPq7Ht0t1YLYyhh",
              "name": "Holy Light",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:first-class-infantry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "7IqiSn10q9ctmzys",
      "slug": "first-class-infantry",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f864f1c6779e29cde4a671f58ba1e7608de3cd8ac1c2468d27f19e5a4b5b22d8",
    "translatableHash": "sha256:6d76eec72766aadf85d9d8e54efdbe693f17535104a580ba5d9377f904944ff2",
    "data": {
      "schemaVersion": 1,
      "name": "First-Class Infantry",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Soldiers who participate in multiple campaigns of war gain the experience necessary to become their military's finest fighting forces. First-class infantry troops are deployed on battlefields where winning the day is of the utmost importance.",
      "armorClass": 33,
      "hitPoints": 240,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": []
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 5,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 27
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 12",
          "splash-damage 12"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "SPbz9zTjxVJ1NfTI",
          "name": "No Retreat",
          "kind": "passive",
          "description": "These soldiers have been extensively trained to hold their ground no matter the situation. If any effect would force the first-class infantry to move, reduce the distance by 10 feet. Any time they would be affected by the Fleeing condition, the first-class infantry is instead Slowed 2 for the same duration.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 240 (4 segments); Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "bDE87FD5U7tvqvaA",
          "name": "Bolt Salvo",
          "kind": "action",
          "description": "The first-class infantry draws, loads, and shoots a salvo from their crossbows. The salvo is a 10-foot type:burst within 120 feet that deals 4d8 piercing damage (check (reflex, dc:30, basic, options:area-effect) save). When the first-class infantry is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "B4GNybKzTfM43wAU",
          "name": "Clash of Steel",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The first-class infantry attacks each enemy in a 5-foot type:emanation, with a check (reflex, dc:29, basic, options:area-effect) save. The damage depends on the number of actions.\n1 2d6+1 slashing damage\n2 4d6+10 slashing damage\n3 4d6+18 slashing damage",
          "traits": []
        },
        {
          "id": "IVKVwDUUSE2SgKLv",
          "name": "Drilled in Formations",
          "kind": "action",
          "description": "Frequency once per round\nEffect The first-class infantry uses Change Formation. An first-class infantry unit typically knows the marching column and wedge formations.",
          "traits": []
        },
        {
          "id": "vklePDp4ChdoOuoW",
          "name": "First-class Charge",
          "kind": "action",
          "description": "The first-class infantry rushes forward with a hunger for battle. They Stride up to twice their Speed. At the end of their movement, each enemy within a 5-foot type:emanation takes 2d6+5 slashing damage, with a check (reflex, dc:30, basic, options:area-effect) save.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:xulgath-dinosaur-cavalry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "MvWzD22qi92ZF6q0",
      "slug": "xulgath-dinosaur-cavalry",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:64d6fde1c1ae0ae7e3802e657a419f7244cb8cbd050e426e93ce382a2b15c6c0",
    "translatableHash": "sha256:23f801c60638ca098157c2fd07a618d3a257a2003a5d4bc836b1f5643c88feaf",
    "data": {
      "schemaVersion": 1,
      "name": "Xulgath Dinosaur Cavalry",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur",
        "humanoid",
        "troop",
        "xulgath"
      ],
      "description": "Xulgaths have been breeding and training dinosaurs for millennia, and the bonds between them are as familiar and strong as that between any other humanoid and their domesticated companion of choice. While most of the creatures are used primarily as beasts of burden, elite xulgath soldiers known as roughriders train the most vicious and aggressive dinosaurs from numerous species to serve as vicious and terrifying mounts, capable of punching through defensive lines and smashing fortifications to splinters as easily as they scatter enemy soldiers.",
      "armorClass": 33,
      "hitPoints": 240,
      "speedFeet": 30,
      "perception": {
        "modifier": 23,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 20,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": 2,
        "con": 5,
        "int": -1,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 27,
        "intimidation": 24
      },
      "languages": [
        "draconic",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "sh7iK8xqS8cHsays",
          "name": "Javelin Barrage",
          "kind": "action",
          "description": "The xulgaths draw javelins and launch a coordinated barrage at range. This barrage is a 10-foot type:burst within 30 feet that deals 4d8 piercing damage (check (reflex, dc:30, basic, options:area-effect) save). When the cavalry is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "9jcmqB6dSzdXSCNa",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:33, options:area-effect,inflicts:sickened,inflicts:slowed)",
          "traits": [
            "aura",
            "olfactory"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 240 (4 segments); Thresholds 160 (3 segments), 80 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "EyzM8IsGsCsC2eQu",
          "name": "Mounted Troop",
          "kind": "passive",
          "description": "Effects that target only animals or only humanoids may not work on the valkyrie tempest, subject to the GM's discretion.",
          "traits": []
        },
        {
          "id": "OA4p28bD8vELnas7",
          "name": "Spears, Teeth, and Horns",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The cavalry makes a coordinated melee attack against each enemy in 10-foot type:emanation, with a check (reflex, dc:30, basic, options:area-effect) save. The damage dealt depends on the number of actions.\n1 2d6+2 piercing damage\n2 4d6+10 piercing damage\n3 5d6+15 piercing damage",
          "traits": []
        },
        {
          "id": "tFEpets9UJimpctg",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, 2d6+2 bludgeoning damage, check (reflex, dc:30, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:monk-cadre",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "bBCYy91DecP2Y8Ax",
      "slug": "monk-cadre",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7b721ce0f2cdf94330334ade526b269e2837d4ada146fe500e8ab8bf0b55e799",
    "translatableHash": "sha256:bda337f164e919d93e043f8f21b7e10386eca651f0fc71e93385c04f128c4739",
    "data": {
      "schemaVersion": 1,
      "name": "Monk Cadre",
      "level": 14,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Many martial artists train to defend themselves and their allies against unwanted aggression, but sometimes the circumstances dictate that even the most peaceful monks must go to war. A cadre of studied monks is capable of dishing out great damage with punches and kicks, as well as focusing their qi into ranged blasts.",
      "armorClass": 35,
      "hitPoints": 270,
      "speedFeet": 35,
      "perception": {
        "modifier": 28,
        "senses": []
      },
      "saves": {
        "fortitude": 28,
        "reflex": 26,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 28,
        "athletics": 28,
        "stealth": 25
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 270 (4 segments); Thresholds 180 (3 segments), 90 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "NWj26RnbvE05Pn1n",
          "name": "Coordinated Maneuvers",
          "kind": "action",
          "description": "The monk cadre is practiced at putting their foes off-balance. The monks choose Disarm, Grapple, Reposition, or Reposition and attempt an Athletics check to perform that action, comparing the result to the appropriate DC (Fortitude for Grapple and Reposition, Reflex for Disarm and Trip) of each enemy within a 5-foot type:emanation. This can result in a different degree of success for each target.",
          "traits": []
        },
        {
          "id": "2KuVzTYLKCWJAiw3",
          "name": "Pummeling Punches",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The monks perform well-timed coordinated melee attacks against all enemies in a 5-foot type:emanation, with a check (reflex, dc:31, basic, options:area-effect) save. The damage depends on the number of actions.\n1 2d8 bludgeoning damage\n2 4d8+8 bludgeoning damage\n3 4d8+16 bludgeoning damage",
          "traits": []
        },
        {
          "id": "Kne0fCu271kBT4tl",
          "name": "Qi Blast",
          "kind": "action",
          "description": "The monks channel their qi into an explosion of energy that affects all creatures in a 10-foot type:burst within 60 feet. This explosion deals 6d6 force damage with a check (reflex, dc:31, basic, options:area-effect) save. When the monk cadre is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "force",
            "occult"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:leukodaemon-plague",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "jibQ9pSTYlWKkJ7z",
      "slug": "leukodaemon-plague",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:910df2426181430aef83a658e96ce9ce0816e853b1372d5682fac02c3589423d",
    "translatableHash": "sha256:f24fe5850622c7c3b2cc6e46ad3e6df3c0bfbe72396fca342e7b8a98aec21f2d",
    "data": {
      "schemaVersion": 1,
      "name": "Leukodaemon Plague",
      "level": 14,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "daemon",
        "fiend",
        "troop",
        "unholy"
      ],
      "description": "Daemons are shaped by, and devoted to, the destruction of life in all its forms. Leukodaemons serve the Apocalypse Rider of Pestilence, spreading disease across the Universe with their very touch. A small army of leukodaemons has the potential to wipe out a small country—or more—if left unchecked.",
      "armorClass": 35,
      "hitPoints": 255,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 25,
        "will": 28
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 1,
        "int": 3,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "acrobatics": 25,
        "intimidation": 25,
        "medicine": 28,
        "religion": 28,
        "stealth": 25,
        "survival": 23
      },
      "languages": [
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15",
          "holy 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "XqqRGyvjZZYyQtDp",
          "name": "Plaguesense",
          "kind": "passive",
          "description": "A leukodaemon plague senses any creature with a disease, and knows the type and current stage of all diseases carried by any creature within range.",
          "traits": []
        },
        {
          "id": "7hZjrMBROsN3W5TY",
          "name": "Infectious Aura",
          "kind": "passive",
          "description": "30 feet. Leukodaemons radiate infection. All creatures within 30 feet of a leukodaemon plague take a –2 status penalty to saves against disease. If a creature within range contracts or progresses a disease, all adjacent creatures are exposed to the same disease, at the same DC.",
          "traits": [
            "aura",
            "disease"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 255 (4 segments); Thresholds 170 (3 segments), 85 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "8PW6b8iI5mex49kK",
          "name": "Daemonic Pestilence",
          "kind": "passive",
          "description": "The leukodaemon plague can telepathically communicate with the afflicted creature at any distance on the same plane\nSaving Throw check (fortitude, dc:34)\nStage 1 carrier (1 day)\nStage 2 Drained 1 (1 day)\nStage 3 Drained 2 (1 day)\nStage 4 drained 2 (1 day)\nStage 5 Drained 3 (1 week)\nStage 6 dead",
          "traits": [
            "disease"
          ]
        },
        {
          "id": "PLYfuYiAgz5PdpwR",
          "name": "Infected Jaws and Claws",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The leukodaemons unleash an onslaught of blows against each enemy in a 10-foot type:emanation (check (reflex, dc:31, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d10+3 untyped damage plus daemonic pestilence\n2 3d10+9 untyped damage plus daemonic pestilence\n3 4d10+12 untyped damage plus daemonic pestilence",
          "traits": []
        },
        {
          "id": "ZsLTGrtulHpBQjCi",
          "name": "Pestilent Wheeze",
          "kind": "action",
          "description": "The leukodaemons exhale a 30-foot type:cone of disease-ridden black flies that deal 5d8 piercing damage (check (reflex, dc:31, basic, options:area-effect,inflicts:sickened) save). A creature that fails the save also becomes Sickened 1 (or Sickened 2 on a critical failure). When the leukodaemon plague is reduced to 2 segments, this area decreases to a 20-foot type:cone.",
          "traits": [
            "divine",
            "unholy"
          ]
        },
        {
          "id": "YDQqHGqRddR5xBdx",
          "name": "Quicken Pestilence",
          "kind": "action",
          "description": "The leukodaemons coax a disease into full bloom. They choose a target within their infectious aura that's currently affected by a disease. That creature must attempt a Fortitude save against the disease as if the interval for the disease's current stage had passed.",
          "traits": [
            "divine",
            "manipulate"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "SzYIoj5wcQBexgXD",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 34,
          "spells": [
            {
              "id": "U7icCy3Etmr7HSkf",
              "name": "Translocate (At Will)",
              "rank": 5
            },
            {
              "id": "ujjVfE7B5MsS3Uhq",
              "name": "Dispel Magic",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:ofalth-stampede",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "AHV0FTrbuPljLndw",
      "slug": "ofalth-stampede",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:03046e4accfa382ea9284dcddb79a5f48ed13cbe1d892601c2b6f3c9c5b27e9f",
    "translatableHash": "sha256:2ec47d39e1c43d90886b663e6bf456e791eeb591a67ef11a39aff3bd55939dba",
    "data": {
      "schemaVersion": 1,
      "name": "Ofalth Stampede",
      "level": 15,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "troop"
      ],
      "description": "If a large city's waste management system spirals out of control, ofalths can grow and propagate unchecked. These reeking creatures haul tons of trash on their backs and carry a particularly virulent disease.",
      "armorClass": 36,
      "hitPoints": 270,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 24,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 32,
        "stealth": 28
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "ySPMm8H8VrhgWl05",
          "name": "Refuse Pile",
          "kind": "passive",
          "description": "When an ofalth stampede is not in danger, they can spend 1 minute settling into a 20-foot pile that looks like a heap of garbage. Until the next time they take an action, the troop gains a +2 circumstance bonus to AC. A creature that enters the area of the garbage heap or interacts with it must attempt a save against the ofalth stampede's stench.",
          "traits": []
        },
        {
          "id": "73muWjjVsYKWfZTx",
          "name": "Filth Wallow",
          "kind": "passive",
          "description": "A trash stampede gains fast healing 10 when in an area with a high concentration of debris or excrement, such as a refuse heap or sewer.",
          "traits": []
        },
        {
          "id": "vRCR0xqnAJCUuI1f",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:33, options:area-effect,inflicts:sickened,inflicts:slowed)",
          "traits": [
            "aura",
            "olfactory"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 270 (4 segments), filth wallow; Thresholds 180 (3 segments), 90 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "0fy4J6XGUdXEiXGs",
          "name": "Offal Rain",
          "kind": "action",
          "description": "The ofalth stampede hurls a tremendous amount of rotting trash, which rains down in a 10-foot type:burst within 60 feet. All creatures in the area take 4d10 bludgeoning damage (check (reflex, dc:33, basic, options:area-effect) save). Creatures that fail the saving throw are also exposed to wretched weeps. When the troop is reduced to 2 segments, the area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "2Fba598q7sUIgo12",
          "name": "Putrid Pummeling",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The ofalths pummel all enemies in a 10-foot type:emanation, with a check (reflex, dc:33, basic, options:area-effect) save. The damage depends on the number of actions. Creatures that fail the saving throw are exposed to wretched weeps.\n1 1d12+3 bludgeoning damage\n2 3d12+7 bludgeoning damage\n3 4d12+10 bludgeoning damage",
          "traits": []
        },
        {
          "id": "i19oaOH6AZhDcAZ9",
          "name": "Wretched Weeps",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:36)\nStage 1 carrier with no ill effect (1 day)\nStage 2 2d4 persistent bleed damage every hour and Enfeebled 1 (1 day)\nStage 3 2d6 persistent bleed damage every hour and Enfeebled 2 (1 day)",
          "traits": [
            "disease"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:dezullon-thicket",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "mKQXrEpheSCjgJt8",
      "slug": "dezullon-thicket",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d38a1b4394718f54474c066655ecbc380e522238be605fd0178fc8f5d8aaf947",
    "translatableHash": "sha256:ad4636dace7016ab4ae11678998ba950fe26655537f2eaaa1c14c229cacbc16c",
    "data": {
      "schemaVersion": 1,
      "name": "Dezullon Thicket",
      "level": 15,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "plant",
        "troop"
      ],
      "description": "",
      "armorClass": 36,
      "hitPoints": 270,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 28,
        "will": 23
      },
      "abilities": {
        "str": 6,
        "dex": 8,
        "con": 4,
        "int": -4,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 29,
        "athletics": 27,
        "stealth": 29
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "acid 20"
        ],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "mfOWNNPO2steQArM",
          "name": "Regeneration",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "3b4Rr0cjQ5WiCa61",
          "name": "Regrowth",
          "kind": "passive",
          "description": "When the dezullon thicket's regeneration raises its Hit Points above a listed threshold after losing a segment for dropping below it, the thicket immediately regains that lost segment.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 180 (3 segments), 90 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "yhqrLAWULs5GIiU6",
          "name": "Acid Rain",
          "kind": "action",
          "description": "The dezullon thicket discharges a cascade of acidic digestive juices as a ranged attack, dealing 6d6 acid damage in a 10-foot type:burst within 30 feet (check (reflex, dc:33, basic, options:area-effect) save) and exposing any creature struck to amnesia venom. When the thicket is reduced to 2 segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "SGypy396AZEVRfyW",
          "name": "Amnesia Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:33)\nMaximum Duration 6 rounds\nStage 1 Clumsy 1 (1 round)\nStage 2 Clumsy 2 (1 round)\nStage 3 Confused, Off-Guard, and Clumsy 3 (1 round)\nStage 4 as Stage 3 and permanently forget the last hour (1 round)",
          "traits": [
            "mental",
            "poison"
          ]
        },
        {
          "id": "0anYM9XZHBhEmdG6",
          "name": "Constrict",
          "kind": "action",
          "description": "1d10+6 bludgeoning damage, check (fortitude, dc:36, basic)",
          "traits": []
        },
        {
          "id": "rY4LPbBX9V5R7RBL",
          "name": "Root",
          "kind": "action",
          "description": "Until the next time it acts, the dezullon thicket appears to be a field of normal pitcher plants. It has an automatic result of 49 (53 in forests or swamps) on Deception checks and DCs to pass as a grove of non-creature plants.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "mOnwSjsUfHcFCFUo",
          "name": "Thrashing Vines",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The thicket makes a melee attack against each enemy within a 5-foot type:emanation (check (reflex, dc:33, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d8+3 bludgeoning damage\n2 2d8+11 bludgeoning damage and Mass Improved Grab\n3 3d8+12 bludgeoning damage and Mass Improved Grab",
          "traits": []
        },
        {
          "id": "JV6iuMnEa7XG1CdS",
          "name": "Mass Improved Grab",
          "kind": "passive",
          "description": "Trigger A creature fails or critically fails their Reflex save against the dezullon thicket's Thrashing Vines\nEffect The dezullon thicket attempts an Athletics check to Grapple the triggering creature. A dezullon thicket can Grapple as many creatures as it has remaining segments, though it needs to spend an action to extend the duration on subsequent rounds. These attempts neither apply nor count toward the creature's multiple attack penalty.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:archon-bastion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "JhyjcHNsKBATE127",
      "slug": "archon-bastion",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4d9926f04ea2870891e3984565cfcad09f1078c081f899f23e1d58a0940dcad5",
    "translatableHash": "sha256:3abb11d825df004125b66dc08d5b6206591bb1bd1e328741d2cf1b2cdecc3ce3",
    "data": {
      "schemaVersion": 1,
      "name": "Archon Bastion",
      "level": 16,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "archon",
        "celestial",
        "holy",
        "troop"
      ],
      "description": "Rekheps, also known as shield archons, stand against any fiendish onslaughts on Heaven, but occasionally travel to the mortal Universe to protect the weak. Large formations of rekheps are a sight to behold as they lock their shield forms in place to face the wicked.",
      "armorClass": 37,
      "hitPoints": 300,
      "speedFeet": 30,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 25,
        "will": 28
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 9,
        "int": 3,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "athletics": 32,
        "diplomacy": 28,
        "intimidation": 28,
        "religion": 28,
        "survival": 26
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15",
          "unholy 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "XCgZ0fnkEpLwnd8m",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "HxFuQk0JpWsvbABp",
          "name": "Archon's Aegis",
          "kind": "reaction",
          "description": "Trigger An enemy damages an ally of the archon bastion and both are within 15 feet of the archon bastion\nEffect The ally gains resistance 20 to all damage against the triggering damage and the enemy takes 1d8+4 piercing damage (check (reflex, dc:34, basic) save).\nEffect: Archon's Aegis",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 300 (4 segments); Thresholds 200 (3 segments), 100 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "vaIAtDX85EGJM624",
          "name": "Fearless Switch",
          "kind": "action",
          "description": "The archon bastion Strides so that at least one of its segments occupies the same space of a Large or smaller willing ally. That willing ally is then teleported to any open space it can fit into that is adjacent to any of the archon bastion's segments, using teleportation magic innate to the troop's individual shield archons. The archon bastion can move up to three allies in this fashion.",
          "traits": [
            "teleportation"
          ]
        },
        {
          "id": "AurAKcqtjnEcr4Yi",
          "name": "Living Shields",
          "kind": "action",
          "description": "The archon bastion grants each ally within a 5-foot type:emanation a +2 circumstance bonus to AC until that ally is no longer within the area or until the start of the archon bastion's next turn, whichever comes first. If the archon bastion uses Archon's Aegis against an attack against one of the shielded allies, the archon bastion gains the resistance and takes the damage rather than the ally.\nEffect: Living Shields",
          "traits": []
        },
        {
          "id": "544dEwQrlWt2mwzj",
          "name": "Smiting Lances",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The archon bastion engages in a uniform melee attack against each enemy in 10-foot type:emanation (check (reflex, dc:34, basic, options:area-effect) save). The damage depends on the number of actions. An unholy creature that fails its save against this effect takes an additional 2d6 spirit damage (or 1d6 spirit damage for the one-action version).\n1 1d8+4 piercing damage\n2 3d8+14 piercing damage\n3 4d8+19 piercing damage",
          "traits": [
            "divine",
            "holy"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "3UI2T7KKObYytZq7",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "5rZAVQC1jDLlqiay",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "reDWhEBPZQd2gM8r",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "a7C7MhGQujKgP9D4",
              "name": "Share Life (At Will)",
              "rank": 2
            },
            {
              "id": "OM5irOXG26HDu8xz",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:omox-slime-pool",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "JLIdUna25mDtAdLM",
      "slug": "omox-slime-pool",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dfaa4e992a6fd4c419a3452abb0baca0932fdcc3e52d6dffd27bb2b54d134a97",
    "translatableHash": "sha256:ac87059dd9c622a09737cb5ada65fa57e26ddbcb95192f6fa511dcf0e59ef69b",
    "data": {
      "schemaVersion": 1,
      "name": "Omox Slime Pool",
      "level": 17,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "demon",
        "fiend",
        "ooze",
        "troop",
        "unholy"
      ],
      "description": "Omoxes are the embodiment of pollution and filth. While they have no true anatomy, they tend to take on mocking humanoid forms—though this distinction is difficult to spot when omoxes gather in large groups as part of an attacking force. Such a group often looks like a single roiling mass of slime with multiple torsos jutting up in a military formation.",
      "armorClass": 39,
      "hitPoints": 315,
      "speedFeet": 40,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 29,
        "will": 26
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 9,
        "int": 2,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 33,
        "religion": 28,
        "stealth": 36
      },
      "languages": [
        "chthonian",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "acid",
          "critical-hits",
          "disease",
          "poison",
          "precision"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15",
          "cold-iron 15",
          "holy 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "2T2SRX4O8jOjVEoq",
          "name": "Clean Vulnerability",
          "kind": "passive",
          "description": "Omoxes embody filth, and they find the concept of cleanliness abhorrent. An omox slime pool subjected to an effect that cleans them takes 4d6 mental damage. They also take this damage the first time each round a creature damaged by an omox slime pool spends actions cleaning off the resultant filth.",
          "traits": []
        },
        {
          "id": "VSqhtjxZrTOQZHr9",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "08CBRW38eKM0dQTw",
          "name": "Absorb Weapon",
          "kind": "reaction",
          "description": "Trigger A creature hits the omox slime pool with a melee weapon\nEffect The omoxes attempt to Disarm the creature. On a critical success, the weapon becomes subsumed within the body of an omox rather than falling to the ground. Retrieving the weapon requires a successful DC 45 Athletics check to Disarm DC 45.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 315 (4 segments); Thresholds 210 (3 segments), 105 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "2yNNYUWDIamcdzjI",
          "name": "Slime Barrage",
          "kind": "action",
          "description": "The omoxes hurl balls of heavy slime in a 10-foot type:burst within 30 feet. All creatures in the area take 4d6 bludgeoning damage (check (reflex, dc:35, basic, options:area-effect) save). A creature that fails the save is mired in the slime, taking a –10-foot circumstance penalty to its Speeds for 1 minute or until it Escape DC 38; on a critical failure, the creature is also Clumsy 1 for the same duration. When the slime pool is reduced to 2 segments, the area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "R5Bjje08NjUYnNrh",
          "name": "Smothering Grasp",
          "kind": "action",
          "description": "Requirements The omox slime pool has a creature Grabbed or Restrained\nEffect Omox slime flows onto the creature, completely covering it. The creature must then succeed at a check (fortitude, dc:38) save or it becomes Blinded and must hold its breath or begin suffocating. These effects last as long as the omoxes have the creature grabbed or restrained.\nEffect: Remaining Air",
          "traits": []
        },
        {
          "id": "crLlCiuQimNTxmEK",
          "name": "Waves of Sludge",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The omoxes attack all enemies in a 5-foot type:emanation with slimy tendrils (check (reflex, dc:35, basic, options:area-effect) save). A creature that critically fails this saving throw is also Grabbed by the slime pool. The damage depends on the number of actions.\n1 1d6+3 bludgeoning damage\n2 3d6+12 bludgeoning damage\n3 4d6+14 bludgeoning damage",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "G4uXUXDGiYdeJaop",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 38,
          "spells": [
            {
              "id": "N3L0Ti3CBNTKSBjB",
              "name": "Control Water",
              "rank": 5
            },
            {
              "id": "kWp5sjsUYrgD8QI3",
              "name": "Create Water (At Will)",
              "rank": 5
            },
            {
              "id": "wcOp1JEOw5iKg8Zj",
              "name": "Translocate (At Will)",
              "rank": 5
            },
            {
              "id": "UqrTREcNiw4Ij7Gg",
              "name": "Toxic Cloud",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:battlecry-bestiary:lich-legion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "battlecry-bestiary",
      "sourceId": "wJYqPXEhWy5kBZ7D",
      "slug": "lich-legion",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:30ff7f6ed45443fbc0636845214373cabd3c1cf6f83752c7091c96f4bb8c907c",
    "translatableHash": "sha256:70f10b8b1d636377f97ff0c70b353c6ed4320dae737b9f080a64a41cfe27a156",
    "data": {
      "schemaVersion": 1,
      "name": "Lich Legion",
      "level": 18,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "troop",
        "undead",
        "unholy"
      ],
      "description": "",
      "armorClass": 41,
      "hitPoints": 330,
      "speedFeet": 25,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 30,
        "will": 33
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 0,
        "int": 9,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "arcana": 38,
        "deception": 35,
        "diplomacy": 35,
        "religion": 31,
        "stealth": 29
      },
      "languages": [
        "aklo",
        "common",
        "chthonian",
        "diabolic",
        "draconic",
        "elven",
        "necril",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "poison",
          "unconscious"
        ],
        "resistances": [
          "cold 15"
        ],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "UBrdqChrDYg2Dn5k",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:37, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "PAVLwZnLqEhiWI7u",
          "name": "Mass Rejuvenation",
          "kind": "passive",
          "description": "This functions similarly to a lich's rejuvenation ability, though with all the liches of a legion returning as a troop thanks to a collective Soul Cage, which is a level 18 item that has Hardness 15 and 54 Hit Points.",
          "traits": []
        },
        {
          "id": "qXZ45E5MWpjGvtE7",
          "name": "Troop Counterspell",
          "kind": "reaction",
          "description": "Trigger A creature within the legion's sight casts a spell the legion has prepared\nEffect The lich legion expends a prepared spell to counter the triggering creature's casting of that same spell. The lich legion loses the spell slot as if they had cast the triggering spell. The lich legion then attempts to counteract the triggering spell with a +2 status bonus to the counteract check.",
          "traits": []
        },
        {
          "id": "icFtpyk3vKrnSxKV",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 330 (4 segments); Thresholds 220 (3 segments), 110 (2 segments)",
          "traits": []
        },
        {
          "id": "i5jWmQ8e6h6E4QoP",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "cQdcZ0mSiuB0iPKa",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "zNngRDMNalyBs1dp",
          "name": "Siphoning Grip",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The lich legion touches all enemies within a 5-foot type:emanation to drain their life (check (reflex, dc:37, basic, options:area-effect) save). The damage depends on the number of actions. For each action the lich legion uses, the legion gains 10 temporary Hit Points that last 1 minute.\n1 2d8 void damage\n2 4d8+11 void damage\n3 6d8+13 void damage",
          "traits": []
        },
        {
          "id": "A4OVN3F7XvIf893o",
          "name": "Steady Troop Spellcasting",
          "kind": "passive",
          "description": "When the lich legion Casts a Spell, their constituent members combine their efforts into casting a more powerful version of the spell than any one member could achieve alone. When Casting a Spell that has an area of a burst, cone, or line and doesn't have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.\nIf a reaction would disrupt the lich legion's spellcasting action, the lich legion attempts a check (flat, dc:12). On a success, the action isn't disrupted.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "SYxweNo6CVrAMsos",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 35,
          "saveDc": 40,
          "spells": [
            {
              "id": "vJsxjYaA0Ig1Kfna",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "shwkY7g8Kri6uAdk",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "BxeFEObYrKfV4Gy0",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "LTyxJDr4CGqC7L0s",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "0ytWychjsKdSACWQ",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "dmXB523GksoGpFsX",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "PwSxxX1UigMv3f8l",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "dzy492yQ6r2pH6je",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "TBrGEVjIFPztAadp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "XnOqORcNzaZvj1CU",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "EMscNTRWWlUqdiil",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "PW1xRQ9HkR4KIL4V",
              "name": "False Vitality",
              "rank": 2
            },
            {
              "id": "kXsyknWVTZRoIA0O",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "K6gV6zaVUARbFCbw",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "cJUZLEEXlTptuPyc",
              "name": "Blindness",
              "rank": 3
            },
            {
              "id": "YvZFTxVvlalh35r2",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "CGjkIOhhOu8G8mbv",
              "name": "Vampiric Feast",
              "rank": 3
            },
            {
              "id": "9O8MsRQ8taxaT7VO",
              "name": "Fire Shield",
              "rank": 4
            },
            {
              "id": "iOrJsY4Rl1x54PYI",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "4orRgy7ZLMzw4oEj",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "JnfH7vqMri0TlAuN",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "Go5ZrtC62lCGTO9s",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "B3UqDFVIVjEMypF2",
              "name": "Wall of Ice",
              "rank": 5
            },
            {
              "id": "Nf4tcN9UEScjovUX",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "RTlK9kqOrSgq8POz",
              "name": "Never Mind",
              "rank": 6
            },
            {
              "id": "QkHjxRKMgZU96ID3",
              "name": "Vampiric Exsanguination",
              "rank": 6
            },
            {
              "id": "jeOR8GsgMXLmi8Ug",
              "name": "Eclipse Burst",
              "rank": 7
            },
            {
              "id": "2HKCQNuc9lbN3W0w",
              "name": "Warp Mind",
              "rank": 7
            },
            {
              "id": "fQW2pDjlg2oRTU5h",
              "name": "Arctic Rift",
              "rank": 8
            },
            {
              "id": "AMxDYGT7SncDRn7U",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "Iibt2IHb3HH9rzLP",
              "name": "Earthquake",
              "rank": 8
            },
            {
              "id": "5QzvHP1x3aCYhYQ6",
              "name": "Falling Stars",
              "rank": 9
            },
            {
              "id": "bSLXFmlHzNUS3Pbg",
              "name": "Massacre",
              "rank": 9
            },
            {
              "id": "LkCFsnskb1955bmw",
              "name": "Phantasmagoria",
              "rank": 9
            }
          ]
        }
      ]
    }
  }
]
