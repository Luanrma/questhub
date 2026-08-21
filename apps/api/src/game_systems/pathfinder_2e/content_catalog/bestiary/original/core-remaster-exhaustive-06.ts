import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_06_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:rune-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YRyTBciVtCnO7J0Z",
      "slug": "rune-giant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9b51109f7830072e1611efd5f4277b965331a516f8d0fc3684275b3b9c1f89b7",
    "translatableHash": "sha256:7656c3f8ee2b77e1deab1532d260b1a3c319c55318559a136ac74b3b5f77b4dc",
    "data": {
      "schemaVersion": 1,
      "name": "Rune Giant",
      "level": 16,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "giant",
        "humanoid",
        "unholy"
      ],
      "description": "Rune giants are tyrants among their own kind, given power to command and magically control other giants. They once served even more powerful masters—potent wizards known as runelords—and in so doing, commanded entire armies of giants in service to the runelords' empires.\nIn the eons since these empires collapsed, rune giants have persisted, though to the outside world they're little more than fabled horrors. Rune giants usually dwell in the most remote and rugged of towering mountain ranges, but they can also be found in immense ruins atop lost islands, glacial valleys, or even more remote or magical regions.\nDozens of runes decorate rune giants' striking charcoal flesh. They are towering creatures, averaging at 40 feet in height and weighing 25,000 pounds.\nGiants are massive humanoid creatures who live in remote regions throughout the world. They vary widely but are united in their hunger, requiring sustenance of their own element along with the feasts one would expect from such a massive humanoid. Although a simple matter for some giants, more esoteric types find this need a harsh reality. While a massive fistful of ice or snow alongside their meal will satisfy a frost giant, shadow giants hunger for the coagulated shadows of the Netherworld.",
      "armorClass": 38,
      "hitPoints": 330,
      "speedFeet": 45,
      "perception": {
        "modifier": 28,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 33,
        "reflex": 26,
        "will": 28
      },
      "abilities": {
        "str": 9,
        "dex": 2,
        "con": 7,
        "int": 2,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "arcana": 28,
        "athletics": 32,
        "crafting": 28,
        "intimidation": 28,
        "society": 27
      },
      "languages": [
        "common",
        "jotun",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "yfHpnY9G1GCp6VVb",
          "name": "Greatsword",
          "bonus": 33,
          "damage": "3d12+17 slashing",
          "traits": [
            "magical",
            "reach-20",
            "versatile-p"
          ]
        },
        {
          "id": "pVCudVc1B7mQVjP2",
          "name": "Longspear",
          "bonus": 32,
          "damage": "2d8+17 piercing",
          "traits": [
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "h2IphaAIOQxjJB7Y",
          "name": "Fist",
          "bonus": 31,
          "damage": "3d8+17 bludgeoning",
          "traits": [
            "agile",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "fxy74wWSDj5riJSB",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "GL9yPOZHTcwW41gZ",
          "name": "Reactive Strike (Special)",
          "kind": "reaction",
          "description": "The rune giant gains an additional reaction at the beginning of each of their turns that they can use only for a Reactive Strike."
        },
        {
          "id": "uwBAscSuJG489hpI",
          "name": "Command Giants",
          "kind": "passive",
          "description": "When a rune giant casts a mental spell against another giant, the DC is 39, rather than 35"
        },
        {
          "id": "Cu6pedSvnaK0fqOF",
          "name": "Demand",
          "kind": "passive",
          "description": "When a rune giant casts their innate Sending spell, they can also cast Suggestion on the target."
        },
        {
          "id": "7CjSawx6weIPrIFL",
          "name": "Flashing Runes",
          "kind": "passive",
          "description": "Trigger The rune giant uses an arcane ability or casts an arcane spell\nEffect The runes on the giant's body flash with magical energy. Each creature within a @Template[emanation|distance:10] must attempt a check (fortitude, dc:35) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is Blinded for 1 round."
        },
        {
          "id": "JBksJycZVWAJ0ESS",
          "name": "Invoke Rune",
          "kind": "action",
          "description": "The rune giant invokes one of the runes on their body, causing the rune to spray forth a @Template[cone|distance:30] of sparks that deals 6d12[electricity|options:area-damage] damage to all creatures in the cone (check (reflex, dc:37, basic, options:area-effect) save).\nThe giant can't use Invoke Rune again for [[/gmr 1d4 #Recharge Invoke Rune]]{1d4 rounds}.\nA glowing copy of the invoked rune appears on a single weapon the giant holds, granting the weapon one effect listed below of the giant's choice. The effect on the weapon lasts for 1 minute. If the giant places a new rune on a weapon, any previously placed rune immediately vanishes, ending its effect.\n• Rune of Destruction The weapon gains the deadly trait with three weapon damage dice of the same die size as for the base weapon, and a creature hit with the weapon is Drained 1 unless it succeeds at a check (fortitude, dc:35) save.\n• Rune of Flames The weapon deals an additional 3d6[fire] damage on all attacks.\n• Rune of Smiting When the weapon hits, the giant can Push the target back 10 feet, or 20 feet on a critical hit.\n• Rune of Space During the rune giant's turn, the weapon's reach is increased to 60 feet."
        },
        {
          "id": "yUMh1Oa8g3zZ6utm",
          "name": "Wide Swing",
          "kind": "action",
          "description": "The rune giant makes a single greatsword Strike and compares the attack roll result to the ACs of up to two foes within their reach. This counts as two attacks for the giant's multiple attack penalty."
        }
      ],
      "spellcasting": [
        {
          "id": "dvenwngmH8FFaPNZ",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 27,
          "saveDc": 35,
          "spells": [
            {
              "id": "xeRH37MTBNYg5VvM",
              "name": "Charm (At Will)",
              "rank": 4
            },
            {
              "id": "jTCynZS3NcEx1n1y",
              "name": "Suggestion (At Will)",
              "rank": 4
            },
            {
              "id": "Bo0iHrI89wUjaaMr",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "Zn45kXPOSnKBMwJ8",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "9lOmSLJKqMDHJURU",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "QEtmxa7gWeEQIrTf",
              "name": "Fly (Constant)",
              "rank": 7
            },
            {
              "id": "SceKBtcG4lUT4V25",
              "name": "Charm",
              "rank": 8
            },
            {
              "id": "TEbZ6NkNjsi7WbvZ",
              "name": "Suggestion",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6uiRT0sNk6TMQ309",
      "slug": "horned-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d088d8911f1645e055587b716226a1ef547784a61b1e67f8f396402c3d3d9da9",
    "translatableHash": "sha256:06312aaa57d9db2e06c14607138a95b903792ec38cc5bfd9a15e10ef55408027",
    "data": {
      "schemaVersion": 1,
      "name": "Horned Dragon (Ancient, Spellcaster)",
      "level": 17,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 41,
      "hitPoints": 315,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 29,
        "will": 32
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 6,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 32,
        "athletics": 30,
        "deception": 27,
        "diplomacy": 31,
        "intimidation": 31,
        "nature": 28,
        "occultism": 34,
        "society": 31,
        "stealth": 29
      },
      "languages": [
        "common",
        "draconic",
        "elven",
        "fey",
        "chthonian",
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "s6adAtDXbmqHceWK",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d12+15 piercing; 4d4 poison",
          "traits": [
            "magical",
            "poison",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "zLSUNYt5ukMkU9zC",
          "name": "Claw",
          "bonus": 33,
          "damage": "3d10+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "BWkGmIVrerzvJg6A",
          "name": "Tail",
          "bonus": 31,
          "damage": "3d10+13 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "zgg5I2ssn7V4bFRq",
          "name": "Horn",
          "bonus": 31,
          "damage": "2d10+13 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "lseWqsEmPmayLsqf",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The dragon can [[/act hide]] in natural environments even if they don't have cover."
        },
        {
          "id": "DH9dqEVVGTZe7G9s",
          "name": "+1 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "HJiQ5csE8Zk6bsoQ",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:37, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "2y5PjoJxmfA6wGl8",
          "name": "Miasma",
          "kind": "passive",
          "description": "20 feet.\nAfter the dragon uses their Poison Breath, a cloud of poison gas continues to emanate from their body for 1 round. Any creature that ends its turn in the miasma takes 4d6[poison|options:area-damage] damage (check (fortitude, dc:37, basic, options:area-effect) save).\nAny creature in the miasma is Concealed and treats other creatures as concealed. The dragon can see through this concealment."
        },
        {
          "id": "ItyDWQiPz0eJ2hOb",
          "name": "Twisting Tail",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the dragon's tail uses a move action or leaves a square during a move action it's using\nEffect The dragon makes a tail Strike at the creature with a –2 penalty. If the Strike hits, the dragon disrupts the creature's action."
        },
        {
          "id": "1FbPUVt1mVdHjwrB",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The horned dragon ignores any difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don't impede their progress."
        },
        {
          "id": "3Fn7wuVzeuI4kT5H",
          "name": "Impaling Charge",
          "kind": "action",
          "description": "Requirements The dragon doesn't have a creature impaled on their horn\nEffect The dragon attempts to gore a foe. They Stride, then attempt a horn Strike. On a hit, the target becomes impaled on the dragon's horn. The creature is Grabbed while on the horn (and can attempt to Escape as normal). The dragon doesn't need to use additional actions to keep the impaled creature grabbed. If the dragon moves, they bring the grabbed creature along with them."
        },
        {
          "id": "VPryni3E3RGw5MdV",
          "name": "Poison Breath",
          "kind": "action",
          "description": "The dragon breathes a toxic cloud that deals 18d6[poison|options:area-damage] damage in a @Template[cone|distance:60] (check (fortitude, dc:37, basic, options:area-effect) save).\nThey can't use Poison Breath again for [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rounds}."
        },
        {
          "id": "O3Pp2Vb15TQKafR0",
          "name": "Trackless Journey",
          "kind": "passive",
          "description": "The horned dragon always gains the benefits of Cover Tracks in natural surroundings, even while moving at full speed."
        }
      ],
      "spellcasting": [
        {
          "id": "1yTD4w4sLVXeUsEt",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 33,
          "saveDc": 39,
          "spells": [
            {
              "id": "JbFB5voUqMv5Dzob",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "74i4623LAEczxjMA",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "ONGlxMyfQwcPhiXx",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "CjtMFUkyFVuxXESc",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "ANUOo49n5spg7gOH",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "CzcQeFfxiZHmHrwc",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "hniEmuvcnupj6bVc",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "EHtcNjlZC8srnPNv",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "5uE9HyhVa2541gUH",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "7PS9u8RXNruDw5au",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "d5ePTQ8ynM4YMDUC",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "p75xUIcS0jv5wZKu",
              "name": "Sound Body",
              "rank": 2
            },
            {
              "id": "tBM472djKIeVdb0S",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "ucTZJ03Sh9XGZqVt",
              "name": "Veil of Privacy",
              "rank": 3
            },
            {
              "id": "Fl8yBPHJi5IMHlTU",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "fln2LAE7ycI661Tc",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "dEXogGZijYSsqZD3",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "CAcx1HmgA4PQxd5b",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "8t0IxQFBoZ3oB7U2",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "xxbCgPhFvoZbxSk1",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "fBnffzHbeakOetxu",
              "name": "Tangling Creepers",
              "rank": 6
            },
            {
              "id": "8LsvNDLmPxhM2nKc",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "WwQ91gw8EuqpUo0D",
              "name": "Execute",
              "rank": 7
            },
            {
              "id": "22XqEOdEIFjkXFes",
              "name": "Mask of Terror",
              "rank": 7
            },
            {
              "id": "EqMfE5jnHrbLiVSt",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "1WEhL4ZmV2HMfYgL",
              "name": "Punishing Winds",
              "rank": 8
            }
          ]
        },
        {
          "id": "m9dIszotbO8vukOI",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 31,
          "saveDc": 39,
          "spells": [
            {
              "id": "lgDxJmtHFjvOF0sM",
              "name": "Entangling Flora (At Will)",
              "rank": 2
            },
            {
              "id": "fZbXpVIUqe3JYgab",
              "name": "Charm (At Will)",
              "rank": 4
            },
            {
              "id": "B7a0hx6Z6c3B3OrK",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "CT08HmGXwoMgCqla",
              "name": "Dominate",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "7ikLoTK1gQJ08YDR",
      "slug": "conspirator-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:33e27aa863387e0bbb317d348db2019d03f1c419f7f0222413adab6bfd6b9ae5",
    "translatableHash": "sha256:1bb52d10b53958629ee7488400e0022602a19a79562a11c5e7abec77cdcc8028",
    "data": {
      "schemaVersion": 1,
      "name": "Conspirator Dragon (Ancient)",
      "level": 17,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Hidden among the shadows and upper echelons of society are the conspirator dragons. These dragons are schemers, always looking to manipulate and control others, either for personal gain or simply for the thrill of watching their machinations play out. Conspirator dragons see themselves above others and typically speak with infantilizing tones and words. However, as most conspirator dragons meet others while in disguise, they do their best to maintain their disguise.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 40,
      "hitPoints": 345,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 28,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 5,
        "con": 6,
        "int": 6,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 30,
        "deception": 35,
        "diplomacy": 33,
        "intimidation": 33,
        "occultism": 31,
        "performance": 35,
        "society": 31,
        "stealth": 30
      },
      "languages": [
        "common",
        "draconic",
        "shadowtongue",
        "sussuran",
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "QWLB0M0TCS4KHd4W",
          "name": "Jaws",
          "bonus": 32,
          "damage": "3d8+17 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "aHZHZh4OikvB5foL",
          "name": "Claw",
          "bonus": 32,
          "damage": "3d6+17 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "WYzVKov6bCQKHrul",
          "name": "Tail",
          "bonus": 30,
          "damage": "2d10+17 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "ece3eTIYzV4ZCJsH",
          "name": "Mental Blast",
          "bonus": 31,
          "damage": "6d6+6 mental",
          "traits": [
            "mental"
          ]
        }
      ],
      "actions": [
        {
          "id": "UqzJSLnhM806Vpw7",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Ef4Gp3twf8DfarI2",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "EHlHjhHk7jncKixn",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "OpdWoyPywj7o3f4N",
          "name": "Retract Body",
          "kind": "reaction",
          "description": "Trigger The dragon is hit or critically hit by an attack made by a creature the dragon can see\nEffect The dragon retracts the targeted body part or twists away to avoid the attack, gaining a +2 circumstance bonus to AC against the triggering attack."
        },
        {
          "id": "mVB17TASKITmaKOR",
          "name": "Conjure Disguise",
          "kind": "passive",
          "description": "Frequency once per day\nEffect The dragon conjures a perfect flesh-suit replica of a humanoid they've seen of their size or smaller and compresses themself into it, along with generating appropriate clothing for the humanoid. This process takes 1 minute to complete, during which the dragon is Off-Guard. If the dragon stops or is interrupted in this process, the suit is destroyed. Once the process is complete, the dragon can remain in this disguise indefinitely.\nThe transformation has the effects of Change Shape, except that the disguise is not actively magical in nature and doesn't register as magical to detect magic and similar effects. The dragon loses Retract Body while transformed.\nIf the dragon is critically hit while wearing the disguise, the suit is destroyed and immediately explodes. This has the effects of Detonate Disguise, except that creatures use the outcome one degree of success better than they rolled on their save."
        },
        {
          "id": "kK41S41L533fMggZ",
          "name": "Detonate Disguise",
          "kind": "action",
          "description": "Requirements The dragon is wearing their conjured disguise\nEffect The dragon erupts from the disguise, destroying it. The explosive revelation deals 18d6[bludgeoning|options:area-damage] damage to creatures in a @Template[emanation|distance:5] with a check (reflex, dc:39, basic, options:area-effect) save. A creature that fails its save is Dazzled for 1 round as it becomes covered in scraps from the disguise.\nAny creature sharing a space with the dragon after they erupt is pushed into the nearest empty space."
        },
        {
          "id": "IUwmirxfv4K0PcJf",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "HwgYIjME0WVAR2y8",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "When the dragon scores a critical hit with a Strike, they recharge Smoke Breath."
        },
        {
          "id": "uyo6N99p8gLhdfCs",
          "name": "Rushed Transformation",
          "kind": "action",
          "description": "Frequency once per hour\nEffect Using the aid of magic and an exhausting amount of effort, the dragon quickly reshapes their body into the form of a generic humanoid figure. This has the effects of Humanoid Form except that it lasts only 1 minute, and the dragon doesn't gain the +4 status bonus to Deception as the transformation makes use of the dragon's body to crudely mimic a humanoid form. The dragon can Dismiss the effect.\nWhenever the effect ends, the dragon leaves behind scraps of magically conjured flesh, which could give away the dragon's presence."
        },
        {
          "id": "ab0Z4gMjfbVX1DVf",
          "name": "Smoke Breath",
          "kind": "action",
          "description": "The dragon unleashes a noxious cloud of smoke that deals 16d6[poison|options:area-damage] damage in a @Template[cone|distance:60] (check (fortitude, dc:39, basic, options:area-effect) save). The smoke remains for 1 minute. This has the effects of Mist, except it fills the cone's area.\nThe dragon can't use Smoke Breath again for [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rounds}."
        },
        {
          "id": "lhnqwfK5RkPmG7XJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 3d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "vMzkI80zGmPn011P",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 33,
          "saveDc": 41,
          "spells": [
            {
              "id": "PVV9ShzfXdXEEjmV",
              "name": "Charm (At Will)",
              "rank": 4
            },
            {
              "id": "1b9uIaKeGGrSaf0G",
              "name": "Rewrite Memory (At Will)",
              "rank": 4
            },
            {
              "id": "suHkOwe5abK5hPib",
              "name": "Dominate",
              "rank": 9
            },
            {
              "id": "FW2HOOgL7gGvDDVV",
              "name": "Mind Probe",
              "rank": 9
            },
            {
              "id": "WuqqgROOGcJWKepq",
              "name": "Mind Reading (At Will)",
              "rank": 9
            },
            {
              "id": "kJfHKnZbhbgRt7Yx",
              "name": "Rewrite Memory",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "C5o3vQKGHhGEsAuV",
      "slug": "conspirator-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0017026e7e7b8acb37fbd73d7b71b222f6bb700f19d4d4f652295f53cb316026",
    "translatableHash": "sha256:f31342ad3c68ef3766bdd6825b9acdbeb142cf6ac2d5967c5988e62f97fb99c7",
    "data": {
      "schemaVersion": 1,
      "name": "Conspirator Dragon (Ancient, Spellcaster)",
      "level": 17,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Hidden among the shadows and upper echelons of society are the conspirator dragons. These dragons are schemers, always looking to manipulate and control others, either for personal gain or simply for the thrill of watching their machinations play out. Conspirator dragons see themselves above others and typically speak with infantilizing tones and words. However, as most conspirator dragons meet others while in disguise, they do their best to maintain their disguise.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 40,
      "hitPoints": 345,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 28,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 5,
        "con": 6,
        "int": 6,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 30,
        "deception": 35,
        "diplomacy": 33,
        "intimidation": 33,
        "occultism": 31,
        "performance": 35,
        "society": 31,
        "stealth": 30
      },
      "languages": [
        "common",
        "draconic",
        "shadowtongue",
        "sussuran",
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "QWLB0M0TCS4KHd4W",
          "name": "Jaws",
          "bonus": 32,
          "damage": "3d8+17 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "aHZHZh4OikvB5foL",
          "name": "Claw",
          "bonus": 32,
          "damage": "3d6+17 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "WYzVKov6bCQKHrul",
          "name": "Tail",
          "bonus": 30,
          "damage": "2d10+17 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "ece3eTIYzV4ZCJsH",
          "name": "Mental Blast",
          "bonus": 31,
          "damage": "6d6+6 mental",
          "traits": [
            "mental"
          ]
        }
      ],
      "actions": [
        {
          "id": "UqzJSLnhM806Vpw7",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Uph3sLzjynIfrD4G",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "EHlHjhHk7jncKixn",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "OpdWoyPywj7o3f4N",
          "name": "Retract Body",
          "kind": "reaction",
          "description": "Trigger The dragon is hit or critically hit by an attack made by a creature the dragon can see\nEffect The dragon retracts the targeted body part or twists away to avoid the attack, gaining a +2 circumstance bonus to AC against the triggering attack."
        },
        {
          "id": "mVB17TASKITmaKOR",
          "name": "Conjure Disguise",
          "kind": "passive",
          "description": "Frequency once per day\nEffect The dragon conjures a perfect flesh-suit replica of a humanoid they've seen of their size or smaller and compresses themself into it, along with generating appropriate clothing for the humanoid. This process takes 1 minute to complete, during which the dragon is Off-Guard. If the dragon stops or is interrupted in this process, the suit is destroyed. Once the process is complete, the dragon can remain in this disguise indefinitely.\nThe transformation has the effects of Change Shape, except that the disguise is not actively magical in nature and doesn't register as magical to detect magic and similar effects. The dragon loses Retract Body while transformed.\nIf the dragon is critically hit while wearing the disguise, the suit is destroyed and immediately explodes. This has the effects of Detonate Disguise, except that creatures use the outcome one degree of success better than they rolled on their save."
        },
        {
          "id": "kK41S41L533fMggZ",
          "name": "Detonate Disguise",
          "kind": "action",
          "description": "Requirements The dragon is wearing their conjured disguise\nEffect The dragon erupts from the disguise, destroying it. The explosive revelation deals 18d6[bludgeoning|options:area-damage] damage to creatures in a @Template[emanation|distance:5] with a check (reflex, dc:39, basic, options:area-effect) save. A creature that fails its save is Dazzled for 1 round as it becomes covered in scraps from the disguise.\nAny creature sharing a space with the dragon after they erupt is pushed into the nearest empty space."
        },
        {
          "id": "uyo6N99p8gLhdfCs",
          "name": "Rushed Transformation",
          "kind": "action",
          "description": "Frequency once per hour\nEffect Using the aid of magic and an exhausting amount of effort, the dragon quickly reshapes their body into the form of a generic humanoid figure. This has the effects of Humanoid Form except that it lasts only 1 minute, and the dragon doesn't gain the +4 status bonus to Deception as the transformation makes use of the dragon's body to crudely mimic a humanoid form. The dragon can Dismiss the effect.\nWhenever the effect ends, the dragon leaves behind scraps of magically conjured flesh, which could give away the dragon's presence."
        },
        {
          "id": "ab0Z4gMjfbVX1DVf",
          "name": "Smoke Breath",
          "kind": "action",
          "description": "The dragon unleashes a noxious cloud of smoke that deals 16d6[poison|options:area-damage] damage in a @Template[cone|distance:60] (check (fortitude, dc:39, basic, options:area-effect) save). The smoke remains for 1 minute. This has the effects of Mist, except it fills the cone's area.\nThe dragon can't use Smoke Breath again for [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rounds}."
        },
        {
          "id": "lhnqwfK5RkPmG7XJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 3d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "yQV23AhbKuy6NxBB",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 31,
          "saveDc": 39,
          "spells": [
            {
              "id": "4e905o66s16KYT9z",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "vaUIaXQGf7t6RCsM",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "1J2bDPpf4FZsKYRp",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "o09mHvYWqbK3LU9p",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "6HR0izstA2nhWq1z",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "WbCkX2z92hsy08ca",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "48AU2ogP6C31qmPl",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "hE2qhMA2jeGJcnIm",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "DcADSDyRiJUz9XaY",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "Ka7xLLQ7KcJZ2MxP",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "uEVHkz70uGksaNtx",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "YfpP4sGmG2WjEu1h",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "qky70BQDrRjnOzwk",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "DJlqhJCYPh6Wq1Kt",
              "name": "Veil of Privacy",
              "rank": 3
            },
            {
              "id": "QlOosHfrrLHtWYe0",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "y80wLZEprMJdPGcg",
              "name": "Honeyed Words",
              "rank": 4
            },
            {
              "id": "2BavdNcuTrCEv9gX",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "F2TPa03aFhvjMa9E",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "Au66YaMrC7C2GosK",
              "name": "Synaptic Pulse",
              "rank": 5
            },
            {
              "id": "WzjtobUGSfX7xchY",
              "name": "Truespeech",
              "rank": 5
            },
            {
              "id": "zjZOHNmCfzNJLAl1",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "eZOGqDtHyeCzgRBc",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "76wzXoyiOroZZrsl",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "uXwiKDr5wKLsq4Yi",
              "name": "Duplicate Foe",
              "rank": 7
            },
            {
              "id": "NUKhuzChqWROPI7M",
              "name": "Project Image",
              "rank": 7
            },
            {
              "id": "pDrzc0aTIjE9frAq",
              "name": "Warp Mind",
              "rank": 7
            },
            {
              "id": "6GHycah3Hs6fA1U9",
              "name": "Hidden Mind",
              "rank": 8
            },
            {
              "id": "ZozIWI00jK5IRcmV",
              "name": "Unrelenting Observation",
              "rank": 8
            }
          ]
        },
        {
          "id": "vMzkI80zGmPn011P",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 33,
          "saveDc": 41,
          "spells": [
            {
              "id": "PVV9ShzfXdXEEjmV",
              "name": "Charm (At Will)",
              "rank": 4
            },
            {
              "id": "1b9uIaKeGGrSaf0G",
              "name": "Rewrite Memory (At Will)",
              "rank": 4
            },
            {
              "id": "suHkOwe5abK5hPib",
              "name": "Dominate",
              "rank": 9
            },
            {
              "id": "FW2HOOgL7gGvDDVV",
              "name": "Mind Probe",
              "rank": 9
            },
            {
              "id": "WuqqgROOGcJWKepq",
              "name": "Mind Reading (At Will)",
              "rank": 9
            },
            {
              "id": "kJfHKnZbhbgRt7Yx",
              "name": "Rewrite Memory",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "DZoKH4IXR4zeNxoa",
      "slug": "horned-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fbc39296db358d043411900d7ebc7c0de1007d3b0ec95f276d90a41539b129ef",
    "translatableHash": "sha256:754a7a9aa871764133bbb4b1cccfd64a3eaf93fb35fc919766487bd1b079d094",
    "data": {
      "schemaVersion": 1,
      "name": "Horned Dragon (Ancient)",
      "level": 17,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 41,
      "hitPoints": 315,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 29,
        "will": 32
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 6,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 32,
        "athletics": 30,
        "deception": 27,
        "diplomacy": 31,
        "intimidation": 31,
        "nature": 28,
        "occultism": 34,
        "society": 31,
        "stealth": 29
      },
      "languages": [
        "common",
        "draconic",
        "elven",
        "fey",
        "chthonian",
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "s6adAtDXbmqHceWK",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d12+15 piercing; 4d4 poison",
          "traits": [
            "magical",
            "poison",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "zLSUNYt5ukMkU9zC",
          "name": "Claw",
          "bonus": 33,
          "damage": "3d10+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "BWkGmIVrerzvJg6A",
          "name": "Tail",
          "bonus": 31,
          "damage": "3d10+13 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "zgg5I2ssn7V4bFRq",
          "name": "Horn",
          "bonus": 31,
          "damage": "2d10+13 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "lseWqsEmPmayLsqf",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The dragon can [[/act hide]] in natural environments even if they don't have cover."
        },
        {
          "id": "DH9dqEVVGTZe7G9s",
          "name": "+1 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "HJiQ5csE8Zk6bsoQ",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:37, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "2y5PjoJxmfA6wGl8",
          "name": "Miasma",
          "kind": "passive",
          "description": "20 feet.\nAfter the dragon uses their Poison Breath, a cloud of poison gas continues to emanate from their body for 1 round. Any creature that ends its turn in the miasma takes 4d6[poison|options:area-damage] damage (check (fortitude, dc:37, basic, options:area-effect) save).\nAny creature in the miasma is Concealed and treats other creatures as concealed. The dragon can see through this concealment."
        },
        {
          "id": "ItyDWQiPz0eJ2hOb",
          "name": "Twisting Tail",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the dragon's tail uses a move action or leaves a square during a move action it's using\nEffect The dragon makes a tail Strike at the creature with a –2 penalty. If the Strike hits, the dragon disrupts the creature's action."
        },
        {
          "id": "Iv8LMCTGw5NLD5aD",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one horn Strike in any order."
        },
        {
          "id": "XhU4mCNUkX4dqLS7",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Poison Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "1FbPUVt1mVdHjwrB",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The horned dragon ignores any difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don't impede their progress."
        },
        {
          "id": "3Fn7wuVzeuI4kT5H",
          "name": "Impaling Charge",
          "kind": "action",
          "description": "Requirements The dragon doesn't have a creature impaled on their horn\nEffect The dragon attempts to gore a foe. They Stride, then attempt a horn Strike. On a hit, the target becomes impaled on the dragon's horn. The creature is Grabbed while on the horn (and can attempt to Escape as normal). The dragon doesn't need to use additional actions to keep the impaled creature grabbed. If the dragon moves, they bring the grabbed creature along with them."
        },
        {
          "id": "VPryni3E3RGw5MdV",
          "name": "Poison Breath",
          "kind": "action",
          "description": "The dragon breathes a toxic cloud that deals 18d6[poison|options:area-damage] damage in a @Template[cone|distance:60] (check (fortitude, dc:37, basic, options:area-effect) save).\nThey can't use Poison Breath again for [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rounds}."
        },
        {
          "id": "O3Pp2Vb15TQKafR0",
          "name": "Trackless Journey",
          "kind": "passive",
          "description": "The horned dragon always gains the benefits of Cover Tracks in natural surroundings, even while moving at full speed."
        }
      ],
      "spellcasting": [
        {
          "id": "m9dIszotbO8vukOI",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 31,
          "saveDc": 39,
          "spells": [
            {
              "id": "lgDxJmtHFjvOF0sM",
              "name": "Entangling Flora (At Will)",
              "rank": 2
            },
            {
              "id": "fZbXpVIUqe3JYgab",
              "name": "Charm (At Will)",
              "rank": 4
            },
            {
              "id": "B7a0hx6Z6c3B3OrK",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "CT08HmGXwoMgCqla",
              "name": "Dominate",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bandersnatch",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "fgZx6VJkVZ26GFyI",
      "slug": "bandersnatch",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c3b192d01671cd4f0528c2cc5ecd514c1a95817d1db6c40a9752dd66b1b19bbe",
    "translatableHash": "sha256:f421966a4517cebff328ddda4f4725933ec616a9c86a45bdb82ea44a14d33f0c",
    "data": {
      "schemaVersion": 1,
      "name": "Bandersnatch",
      "level": 17,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "beast",
        "tane"
      ],
      "description": "Bandersnatches are great six-legged cats with wicked quills running down the length of their bodies down to the tips of their mighty tails. As with other legendary creatures from the First World, such as the jabberwock, bandersnatches belong to the infamous group of creatures known collectively as the \"Tane.\" These terrifying hunters take great delight in taking down other deadly or intelligent predators by perfectly adapting to any environment they find themselves in. A bandersnatch stalks their quarry before lashing out with speed and ferocity. Those who survive a bandersnatch attack will confirm that while the cats' fangs and claws are deadly, their eyes are their greatest weapon of all. A bandersnatch's eyes are constantly shifting in color, intensity, and design, causing those they gaze upon to fall into a confused panic.",
      "armorClass": 41,
      "hitPoints": 335,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-120"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 30,
        "will": 27
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 6,
        "int": -4,
        "wis": 6,
        "cha": 6
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 33,
        "intimidation": 32,
        "stealth": 32,
        "survival": 28
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "confused"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4WaSsGcstf79Y44R",
          "name": "Jaws",
          "bonus": 34,
          "damage": "3d12+19 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "PhsmxJZ4aqEowjOn",
          "name": "Claws",
          "bonus": 34,
          "damage": "3d8+19 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "QDw6f81ZeMuIueQP",
          "name": "Tail",
          "bonus": 34,
          "damage": "3d4+19 piercing",
          "traits": [
            "fatal-d8",
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "YaqUxn6Ybbvxv3gB",
          "name": "Quill",
          "bonus": 30,
          "damage": "3d4+19 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "HYnUw0h1bJQMkzBc",
          "name": "Planar Acclimation",
          "kind": "passive",
          "description": "The bandersnatch treats the plane it is on as its home plane."
        },
        {
          "id": "pPppryZClUfw47fK",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "HtScT1S9mxNqMylg",
          "name": "Fast Healing 15",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "hhOHcOSPkhLdvric",
          "name": "Confusing Gaze",
          "kind": "passive",
          "description": "20 feet.\nWhen a creature ends its turn in the aura, it must succeed at a check (will, dc:35, options:area-effect,inflicts:confused) save or become Confused for 1 round."
        },
        {
          "id": "6qAaC77CfOknbaMv",
          "name": "Quick Recovery",
          "kind": "passive",
          "description": "The bandersnatch recovers with frightening speed. At the end of its turn, it reduces the value of one debilitating condition it suffers (with the exception of Dying) by 1. If it's Blinded, Dazzled, Deafened, Fatigued, Fleeing, or Petrified, it can instead succeed at a check (flat, dc:16) to end one of these conditions of its choice; it can't use quick recovery on other conditions that lack values."
        },
        {
          "id": "6f3aVVLykcFzdJrr",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "kfdzBPs02IvVMabf",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The bandersnatch fixes its gaze at a creature it can see within 20 feet. The target must immediately attempt a Will save against the bandersnatch's Confusing Gaze. After attempting the save, the creature is temporarily immune to a bandersnatch's Confusing Gaze until the start of the bandersnatch's next turn."
        },
        {
          "id": "IW0bpDD32dNAHnum",
          "name": "Frumious Charge",
          "kind": "action",
          "description": "The bandersnatch Strides, ignoring difficult terrain, then makes two claw Strikes at the end of its movement."
        },
        {
          "id": "3Ygn2F1yeN3UTO2S",
          "name": "Pain",
          "kind": "passive",
          "description": "A bandersnatch's quills create exceptionally painful wounds. The wounded creature must succeed at a check (fortitude, dc:38, options:inflicts:drained) save to resist becoming Drained 1 (Drained 2 on a critical failure) by this pain. Further bandersnatch Strikes that cause pain increase the amount of drain by 1 for each failed save to a maximum of drained 4."
        },
        {
          "id": "WhCqHDOg0A8FK3IF",
          "name": "Relentless Tracker",
          "kind": "passive",
          "description": "The bandersnatch can Track while moving at its full speed."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ice-linnorm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Np5Z7RMQzvSNnH0h",
      "slug": "ice-linnorm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:792f21207e75a06fc00597fc3fc235e193b61fe19aeafe32a71e48f836b16145",
    "translatableHash": "sha256:7a1572031bb4f202ee9b9390a6c081c61d32fcf062b9fc2ebe0b32e5a6265d85",
    "data": {
      "schemaVersion": 1,
      "name": "Ice Linnorm",
      "level": 17,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "cold",
        "dragon"
      ],
      "description": "The ice linnorm dwells amid glacial crevasses, atop wind-blasted mountain peaks, or within glittering caverns carved from the hearts of the mightiest of icebergs.\nImmense, primeval dragons of the northern reaches of the world, linnorms hate those they deem to be lesser creatures and seek to inflict as much suffering as possible upon their unfortunate victims. While these serpentine monstrosities might not be the powerful winged dragons most imagine, they nonetheless possess incredible strength and deadly powers that often rival authentic dragon brutality.",
      "armorClass": 41,
      "hitPoints": 330,
      "speedFeet": 35,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision",
          "scent-imprecise-60",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 28,
        "will": 27
      },
      "abilities": {
        "str": 9,
        "dex": 5,
        "con": 7,
        "int": -3,
        "wis": 6,
        "cha": 7
      },
      "skills": {
        "acrobatics": 28,
        "athletics": 32
      },
      "languages": [
        "aklo",
        "draconic",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "cold",
          "curse",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "13YXYsRSLVocnnzA",
          "name": "Jaws",
          "bonus": 34,
          "damage": "3d12+17 piercing",
          "traits": [
            "magical",
            "reach-25",
            "unarmed"
          ]
        },
        {
          "id": "j2n6AMiW1Ve4yYnf",
          "name": "Claw",
          "bonus": 34,
          "damage": "3d8+17 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "ySnTknzJunTGUgYX",
          "name": "Tail",
          "bonus": 34,
          "damage": "3d6+17 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-25"
          ]
        }
      ],
      "actions": [
        {
          "id": "cGPPwZfpkBdll6m3",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "yA3EfugwTMvPqKVg",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "B8eTnDbhYn9WARrP",
          "name": "Regeneration 10 (Deactivated by Cold Iron)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "88O2MErrb1dOjHJh",
          "name": "Curse of Frost",
          "kind": "passive",
          "description": "When a creature slays the ice linnorm, it must succeed at a check (will, dc:40) save or gain weakness to cold 15 with an unlimited duration.\nEffect: Curse of Frost"
        },
        {
          "id": "GrUmNFWsGcEdaXm3",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MNTsZcEEgZLgHBMp",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d6+18)[bludgeoning], check (fortitude, dc:38, basic)"
        },
        {
          "id": "TfUyAj18NAaa1ZGV",
          "name": "Ice Linnorm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:38)\nMaximum Duration 10 rounds\nStage 1 5d6[cold] damage and Drained 1 (1 round);\nStage 2 7d6[cold] damage and Drained 2 (1 round)"
        },
        {
          "id": "4uy8ctqHkWgUS4KY",
          "name": "Icemire Breath",
          "kind": "action",
          "description": "The ice linnorm spews out a blast of freezing, viscous ooze in a @Template[cone|distance:60] that deals 15d6[cold|options:area-damage] damage to creatures within the area (check (reflex, dc:38, basic, options:area-effect) save).\nThe freezing ooze clings to those struck and hardens into thick sheets of ice. A creature that fails the saving throw is Immobilized by the ice until it succeeds at a check to [[/act escape dc=34]] or it or an ally [[/act force-open dc=34]]{Forces Open} the ice (DC 34 for either case). At the start of its turn, a creature still immobilized by the ice takes 4d6[cold] damage. Another creature can free a frozen target by dealing a total of 20 fire damage to the frozen target. Left unattended, the ice crumbles away in 1 minute on its own.\nCreatures with the fire trait can't be frozen in place by Icemire Breath. Flying creatures fall if frozen, and swimming creatures that are frozen rise toward the surface of the water at a speed of 60 feet per round.\nThe linnorm can't use Icemire Breath again for [[/gmr 1d4 #Recharge Icemire Breath]]{1d4 rounds}."
        },
        {
          "id": "Vy7eGgsZwEtFCJod",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "gYnpwjAaRfAevtAE",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 30,
          "saveDc": 38,
          "spells": [
            {
              "id": "RgFmd7UFsdE5qwLk",
              "name": "Truesight (Constant)",
              "rank": 7
            },
            {
              "id": "HBXRcdXGAmxhP7u3",
              "name": "Unfettered Movement (Constant)",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:island-oni",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "VGPtiSeeT7CYgWrv",
      "slug": "island-oni",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04c83d6a5b1eb2eb80ce4585949c337ddeec1714718861117ca1956f6d73498c",
    "translatableHash": "sha256:851f906e1186757d34e0d52537fa05a9e81989e5b20d1ef285cda2ec76d51fa1",
    "data": {
      "schemaVersion": 1,
      "name": "Island Oni",
      "level": 17,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "giant",
        "humanoid",
        "oni",
        "water"
      ],
      "description": "Island oni are those powerful enough to claim small coastal islands, often creating makeshift armies of lesser oni who pillage surrounding lands and waters. Island oni hoard this material wealth, garbing themselves in luxurious clothing and adorning their monstrous faces with all manner of jewelry.\nIsland oni typically scavenge sunken shipwrecks for weapons, armor, and treasure. This can also bring them into contact with undead sailors, which island oni have been known to press into service.\nOni are large, brutal creatures originating in Tian Xia who resemble humanoids with brightly colored skin, tusks, and horns. Though commonly mistaken for fiends, the first oni were originally kami, tutelary nature spirits. These kami suffered a terrible trauma, losing their sacred wards to dramatic disasters or the callousness of others, and as a result transformed into the violent creatures they are today. While some believe that oni can be spiritually placated through proper ritual worship that transforms them back into kami, many of these would-be saviors fall to oni's notorious brute strength, flesh-rending teeth, and command of storms.\nOni possess the ability to disguise themselves as other humanoids. They are rarely creative in their disguises, often choosing a specific appearance similar to their oni form and sticking with it. This simplicity catches many by surprise, however, as people assume oni are limited to a single alternate form, which is by no means the case.",
      "armorClass": 38,
      "hitPoints": 390,
      "speedFeet": 40,
      "perception": {
        "modifier": 32,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 28,
        "will": 34
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 6,
        "int": 2,
        "wis": 9,
        "cha": 6
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 33,
        "deception": 32,
        "intimidation": 32,
        "nature": 29
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": [
          "spirit 20"
        ]
      },
      "attacks": [
        {
          "id": "00kCy3dtoRU8EnP9",
          "name": "Longspear",
          "bonus": 35,
          "damage": "3d8+10 piercing; 2d6 electricity",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "DryXaAfUqz1HN8lZ",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d6+10 piercing; 2d6 electricity",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "8qNsivFnCww0jFZo",
          "name": "Thunderbolt",
          "bonus": 30,
          "damage": "3d12+12 electricity",
          "traits": [
            "electricity",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "mTsKSxGS9jWZPCar",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "IQ7VqIL6X2jYVFJw",
          "name": "Mist Vision",
          "kind": "passive",
          "description": "The island oni ignores the Concealed condition from fog and mist."
        },
        {
          "id": "RMCsutKfNLtikzWK",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "weR36ps3liBMdBu8",
          "name": "+1 Status to All Saves vs. Water",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Qk9uAi6gzL2mlrno",
          "name": "Bean Panic",
          "kind": "passive",
          "description": "Oni are curiously afraid of beans, especially as the seasons begin to change. If a creature Interacts to throw a handful of beans at the oni, the oni becomes Frightened 2. While frightened this way, their weakness to spirit damage is increased by 5. The oni then becomes immune to bean panic for 24 hours."
        },
        {
          "id": "uCFpzX8rzkx2BjyC",
          "name": "Lost Oni Island",
          "kind": "passive",
          "description": "An island oni can claim an island of up to 1-mile radius in a process that takes 1 week, during which the oni must defeat any who come to challenge its claim. If successful, the oni can freely control the weather on its island and in a 1-mile radius from the shore, with the effect of a successful Control Weather ritual.\nThis altered weather surrounds the island in thick fog, seaborne mirages, or other phenomena that increase the DC of checks to locate and navigate to the island (Such as Sailing Lore or Survival) to 40, though the oni can allow allies to pass freely. If the oni dies or leaves the island, the weather returns to normal immediately."
        },
        {
          "id": "zYJRHl6hbvBe1zVk",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "H97yITJBuctoMctx",
          "name": "Change Shape",
          "kind": "action",
          "description": "The island oni can take on the appearance of any Medium or Large humanoid creature. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "EmbWNidhhft8HXB7",
          "name": "Conductive Downpour",
          "kind": "action",
          "description": "The island oni fires a bolt of lightning into the air, which immediately roils with dark clouds. Rain falls in a @Template[emanation|distance:60]{60-foot radius emanation}, centered on the oni, for 1 minute, filling the air and pooling on the ground.\nCreatures in the aura gain weakness 10 to electricity, and the entire area is greater difficult terrain for Flying creatures, and difficult terrain for creatures on the ground or Climbing, unless they also have a swim Speed.\nEffect: Conductive Downpour"
        },
        {
          "id": "Y2EMKk7GwfhPvWS0",
          "name": "Electrifying Pierce",
          "kind": "action",
          "description": "Requirements The island oni's last action was a successful longspear Strike against a Medium or smaller target\nEffect The island oni drives the spear through the target and calls lightning to strike the spear. The target takes 6d6[electricity] damage with a check (fortitude, dc:37, basic) save. On a failure, the creature is also impaled on the spear. It's Grabbed, and if the oni moves, they bring the grabbed creature along with them.\nThe island oni doesn't need to use additional actions to keep the creature grabbed; the creature remains grabbed as long as it's impaled. The grabbed creature can attempt to Escape as normal. The island oni can only have one creature impaled this way at a time."
        },
        {
          "id": "TFFWvw8pxkUHYXm4",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, (3d8+10)[bludgeoning], Rupture 30"
        },
        {
          "id": "AzI191A2HnKNQL2z",
          "name": "Tripping Tide",
          "kind": "action",
          "description": "The island oni sweeps their spear in a full circle, releasing waves of seawater. All creatures in a @Template[emanation|distance:20] must succeed a check (reflex, dc:37) saving throw or fall Prone."
        },
        {
          "id": "6nTCovyYhG00o6m8",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "3KyuJoHTxD577UTr",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "fJpBA59NWP7mj89s",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "YIqJExB59uzjU9bX",
              "name": "Water Walk (Constant)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:banshee",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "XKOQ3ll9TGNso0uB",
      "slug": "banshee",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b17567ca7bcf1ab7df87a64395eaddb98dc271eadf4fc522251e2ebaedd82bba",
    "translatableHash": "sha256:1868b6ed7c9e3b9304d52fdfc6370fe638b2d321b4a54c3bea88771643654a58",
    "data": {
      "schemaVersion": 1,
      "name": "Banshee",
      "level": 17,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "incorporeal",
        "spirit",
        "undead",
        "unholy"
      ],
      "description": "Banshees are the furious, tormented souls of those bound to the world by a betrayal that defined the final hours of their lives. Some banshees arise from those who were slain by trusted friends and allies, or whose loved ones betrayed them on their deathbeds. Others spawn from those whose treacherous deeds shortly before their deaths left a stain upon their souls. Regardless of their origin, banshees despise the living. This hatred of life is all too often a horrific inversion of their personalities in life. Some speculate that the more kind-hearted the person (and the more wrenching the betrayal), the crueler the banshee.\nBanshees rarely stray far from where they perished and typically haunt thick forests and canopied swamps where little light graces the ground. Many banshees are elves and can be found in the elven nation of Kyonin, specifically in Tanglebriar, the sinister domain of the demon Treerazer. Similarly, a large number of banshees can be found lurking in the frozen wastes in northern Avistan, created from a cruel and widespread betrayal that is centuries old.",
      "armorClass": 39,
      "hitPoints": 250,
      "speedFeet": 60,
      "perception": {
        "modifier": 32,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 29,
        "will": 32
      },
      "abilities": {
        "str": -5,
        "dex": 6,
        "con": 2,
        "int": 0,
        "wis": 7,
        "cha": 7
      },
      "skills": {
        "acrobatics": 31,
        "intimidation": 32,
        "occultism": 25
      },
      "languages": [
        "common",
        "elven"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "paralyzed",
          "poison",
          "precision",
          "unconscious"
        ],
        "resistances": [
          "all-damage 12 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "n9emNHUVKTSFk58a",
          "name": "Hand",
          "bonus": 32,
          "damage": "4d10+14 void",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "cXH3rtQJHLu0xATa",
          "name": "Hears Heartbeats",
          "kind": "passive",
          "description": "The banshee can hear heartbeats within 60 feet of it as an imprecise sense."
        },
        {
          "id": "gqEF4zsvNcNJ7MVP",
          "name": "Sunlight Powerlessness",
          "kind": "passive",
          "description": "A banshee in sunlight is Clumsy 2 and Stunned 2."
        },
        {
          "id": "Tph2HlfD7An1YiKs",
          "name": "Spectral Ripple",
          "kind": "passive",
          "description": "When a banshee Strides at least 10 feet, they're Concealed until the start of their next turn."
        },
        {
          "id": "pGFt8iou5QIqqqnJ",
          "name": "Terrifying Touch",
          "kind": "passive",
          "description": "A creature damaged by the banshee's touch that isn't already frightened must attempt a check (will, dc:38) save (check (will, dc:43) if the attack was a critical hit). If the creature fails its save, it's Frightened 2; on a critical failure, the creature also cowers with fear and is Stunned 4. If the creature is protected against fear by a spell or magic item, the banshee's touch first attempts to counteract the protection effect, with the effect of a 9th-rank Dispel Magic spell."
        },
        {
          "id": "i86nIQHO0OYhOwn1",
          "name": "Vengeful Spite",
          "kind": "reaction",
          "description": "Trigger A foe critically hits the banshee, or the banshee critically fails their save against a foe's damaging effect\nEffect The banshee lashes back at their tormentor, dealing (4d10+14)[mental] damage with a check (will, dc:38, basic) save and applying the effects of terrifying touch based on the results of the same Will save."
        },
        {
          "id": "XF5b5q7FRowlzTG5",
          "name": "Wail",
          "kind": "action",
          "description": "The banshee unleashes a soul-chilling Wails of the Damned (check (fortitude, dc:38, traits:void, options:damaging-effect,item:type:spell), 8d10[void]). This Wail overcomes silence and similar effects of 5th rank or lower. The banshee can instead use Wail as a three-action activity to overcome such effects of up to 8th rank.\nThe banshee's Wail resonates for 1 round, and any creature that comes within the area during that time must attempt a save against the effect. A creature can't be affected more than once by the same Wail. The banshee can't Wail again for [[/gmr 1d4 #Recharge Wail]] rounds."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:keketar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "z1TEwL0plpK4l2uf",
      "slug": "keketar",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:429dab25aa2b2f530431559d3a8ef07ddbc9eeec62e8ee3790be5706e37f190e",
    "translatableHash": "sha256:04c4aa2e0362dcef3ce3044b7b1ad06512ffe564ad63d9f865cd5fcef9ec537a",
    "data": {
      "schemaVersion": 1,
      "name": "Keketar",
      "level": 17,
      "rarity": "common",
      "size": "large",
      "traits": [
        "monitor",
        "protean"
      ],
      "description": "The ruling caste of the proteans, keketars orchestrate attacks against the bastions of law and adjudicate protean disputes confidently and capriciously. A keketar resembles a shimmering, serpentine creature with spines, claws, and a dragon-like head. A keketar's actual appearance is in constant flux, but they generally stay about 18 feet long with a weight of around 1,500 pounds. While their physical forms can vary, two things remain constant: first, a keketar's eyes are always a piercing shade of amber or violet. Second, the keketar's mark of office—a crown of shifting symbols that hovers above their head—never changes. A keketar cannot remove their crown but can suppress it, although most are loath to do so and consider such an act one of cowardice or shame.\nKeketars fill a role in protean society of a sort of priesthood, operating as intermediaries between the other proteans and the Speakers of the Depths. All other proteans defer to keketars, treating them in a way similar to how citizens of a mortal city would treat respected nobles; even more powerful proteans defer to the will of the keketars. As with many religions, dogma and theology are prone to interpretation and change, and among the proteans, the situation is even more pronounced. Whatever the nature and desires of the Speakers of the Depths may be, individual keketars often come to dramatically different conclusions as to their will and intent. To the proteans, however, this inherent dissonance is a strength rather than a weakness.\nGuardians of disorder and natives of the primal plane of chaos known as the Maelstrom, proteans consider it their calling to spread bedlam and hasten entropic ends. The most powerful proteans are demigods known collectively as the protean lords, although they are mysterious entities whose cults in the Universe tend to be obscure and secretive.\nProteans divide themselves into a loose caste system and possess a dizzying variety of powers. Most proteans have a serpentine body with the head of a primeval beast. Scholars have long been intrigued by this fact—that scions of dissolution and disorder would share so many features—pointing out that there is some semblance of order even in the purest chaos. Others note that the serpentine form is one of the most primeval shapes, perhaps suggesting that in a reality at the dawn of time, such shapes were all that could exist. The proteans themselves have little to say on the matter, which, perhaps ironically, only adds to the confusion and lack of consensus surrounding their kind. After all, if even chaos cannot be trusted to be chaotic, would that not be the purest form of entropy?",
      "armorClass": 40,
      "hitPoints": 260,
      "speedFeet": 40,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 28,
        "will": 34
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 7,
        "int": 5,
        "wis": 7,
        "cha": 7
      },
      "skills": {
        "acrobatics": 26,
        "athletics": 33,
        "deception": 32,
        "diplomacy": 34,
        "intimidation": 34,
        "religion": 30,
        "stealth": 30
      },
      "languages": [
        "chthonian",
        "empyrean",
        "protean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "precision 10",
          "protean-anatomy 25"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jt4PpVxiITWfM8ox",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d12+16 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "ETwwR7V1iIbvqCuB",
          "name": "Claw",
          "bonus": 33,
          "damage": "2d12+16 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "gUMIzpDGWwaygeXn",
          "name": "Tail",
          "bonus": 33,
          "damage": "2d12+16 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "Mb8JbA884rcKgMkO",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "X5DctZ32pPLyBZnM",
          "name": "Entropy Sense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "A keketar can anticipate the most likely presence of a creature through a supernatural insight into chaotic probabilities and chance. This grants them the ability to sense creatures within the listed range. Veil of Privacy prevents a creature from being detected via entropy sense automatically (without a counteract check)."
        },
        {
          "id": "ZKFDBSkBr0B38G7d",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9UvuMlLHVEKID1Jq",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "PeH9Tlr3y5ABJu0g",
          "name": "Fast Healing 10",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "hZqtsipwFmuBYwC2",
          "name": "Protean Anatomy 25",
          "kind": "passive",
          "description": "A keketar's vital organs shift and change shape and position constantly. Immediately after the keketar takes acid, electricity, or sonic damage, they gain the listed amount of resistance to that damage type. This lasts for 1 hour or until the next time the protean takes damage of one of the other types (in which case their resistance changes to match that type), whichever comes first.\nThe keketar is immune to polymorph effects unless they're a willing target. If Blinded or Deafened, the keketar automatically recovers at the end of their next turn as new sensory organs grow to replace the compromised ones.\nEffect: Protean Anatomy"
        },
        {
          "id": "2UNkHFc41bmtixGg",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "0rf640gBxRc7gfuM",
          "name": "Spatial Riptide",
          "kind": "passive",
          "description": "30 feet.\nA creature using a teleportation ability within the aura or arriving in it via teleportation must succeed at a check (fortitude, dc:38) save or wink out of existence for [[/gmr 1d4 #rounds]]{1d4 rounds} before completing the teleport. The creature can't act, sense anything, or be targeted. On a successful save, the creature completes the teleport normally but is Stunned 1.\nKeketars are immune to this effect."
        },
        {
          "id": "AniyCnlqZmw3IO9L",
          "name": "Change Shape",
          "kind": "action",
          "description": "The keketar can take the appearance of any Huge or smaller creature. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal."
        },
        {
          "id": "aWJTgaTUKotr2LWA",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d10+15)[bludgeoning], check (fortitude, dc:42, basic)"
        },
        {
          "id": "KCUHGmNla57hO2ZK",
          "name": "Reshape Reality",
          "kind": "passive",
          "description": "When the keketar casts Mirage, it infuses the illusion with quasi-real substance. Creatures that do not disbelieve the illusion treat structures and terrain created through the spell as though they were real, ascending illusory stairs, becoming trapped by illusory quicksand, and so on."
        },
        {
          "id": "BudK3JDDVjbWqw8G",
          "name": "Warpwave Strike",
          "kind": "passive",
          "description": "A creature struck by a keketar's jaws or claw Strike must succeed at a check (fortitude, dc:36) save or be subject to a Warpwave."
        },
        {
          "id": "QblhIHkvSph67WTI",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "iz8CpHkcAiNnZfvZ",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 42,
          "spells": [
            {
              "id": "i9YzZMqmXmStM7Z1",
              "name": "Confusion (At Will)",
              "rank": 4
            },
            {
              "id": "l1UZUREbjmCUBYbF",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "zRZZeZva3ClH9YM3",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "k0gn3GfnDaghAyzJ",
              "name": "Creation (At Will)",
              "rank": 5
            },
            {
              "id": "hhi1VyP0vfAqylda",
              "name": "Mirage (See Reshape Reality)",
              "rank": 5
            },
            {
              "id": "Z5mSwII4yNBVa0Sq",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "PueIXntgodLGRS6d",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "JxgWGY0WPlgYpARq",
              "name": "Teleport (At Will, Self Only)",
              "rank": 6
            },
            {
              "id": "boMVDT4jAgsJbnVj",
              "name": "Disintegrate",
              "rank": 7
            },
            {
              "id": "A0xEQtg8fWGsufnj",
              "name": "Dispel Magic (At Will)",
              "rank": 7
            },
            {
              "id": "8vTXTctF0UmpRqUZ",
              "name": "Shatter (At Will)",
              "rank": 7
            },
            {
              "id": "frQbmD2ucvo2IHxB",
              "name": "Warp Mind",
              "rank": 7
            },
            {
              "id": "qG1HirXZcVj1Z3Z6",
              "name": "Confusion",
              "rank": 8
            },
            {
              "id": "eaLSYD66AQtItL2A",
              "name": "Cursed Metamorphosis",
              "rank": 8
            },
            {
              "id": "g2uv0emYBqIHpx2p",
              "name": "Divine Wrath",
              "rank": 9
            },
            {
              "id": "7LlrBXCerWd653zp",
              "name": "Unfathomable Song",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kraken",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bgKwwvO0uDGD7XsG",
      "slug": "kraken",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4df325d34ab04adc5d20d674cfdd6d15c9baa425f4c08dd7a51e12e32a5c7b28",
    "translatableHash": "sha256:e79693fbbc49c6b7be78f0c430896e29b4e01d096a96c5e6f81a94206da30278",
    "data": {
      "schemaVersion": 1,
      "name": "Kraken",
      "level": 18,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "aquatic",
        "beast"
      ],
      "description": "A kraken is an enormous, squid-like leviathan with a cruel intelligence. It hunts ships, whales, and heroes alike. The hatred and envy krakens hold for alghollthus, their rivals, has led many krakens to make their lairs in sunken cities, where they can sift through ancient lore and uncover long-lost arcane secrets.",
      "armorClass": 42,
      "hitPoints": 360,
      "speedFeet": 10,
      "perception": {
        "modifier": 34,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 35,
        "reflex": 28,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 9,
        "int": 5,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "athletics": 38,
        "intimidation": 32,
        "nature": 35,
        "stealth": 33
      },
      "languages": [
        "common",
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "emotion"
        ],
        "resistances": [
          "cold 10",
          "poison 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "FX1GZJoTSgtAlICB",
          "name": "Arm",
          "bonus": 37,
          "damage": "4d10+17 bludgeoning",
          "traits": [
            "magical",
            "reach-40"
          ]
        },
        {
          "id": "D0Bef8hMS0mQSDNY",
          "name": "Tentacle",
          "bonus": 37,
          "damage": "3d10+17 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-60",
            "unarmed"
          ]
        },
        {
          "id": "XLiAwm5JWDoSNIPF",
          "name": "Beak",
          "bonus": 37,
          "damage": "3d10+17 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ri68Bk0TcV1k9lqS",
          "name": "Altered Weather",
          "kind": "passive",
          "description": "A kraken reshapes the weather within 2 miles of it, with the effect of the Control Weather ritual centered on the kraken and based on its emotional state, at the GM's discretion. If the kraken dies, the weather returns to normal immediately."
        },
        {
          "id": "DtiXNG3ROuAaBhN3",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d10+17)[bludgeoning], check (fortitude, dc:40, basic). On a failed save, a creature that is holding its breath loses [[/gmr 1d4 #Lost rounds of air from Constrict]]{1d4 rounds} worth of air."
        },
        {
          "id": "95k2q11INtOhFqCd",
          "name": "Double Attack",
          "kind": "action",
          "description": "The kraken makes two Strikes with two different arms or tentacles, each limb targeting a different creature. Double Attack counts as two attacks toward the kraken's multiple attack penalty, but the penalty doesn't increase until after both attacks are made.\nIf the kraken subsequently uses the Grab action, it Grabs any number of creatures it hit with Double Attack."
        },
        {
          "id": "heW1rCJfQ2KMmuqd",
          "name": "Ink Cloud",
          "kind": "action",
          "description": "The kraken releases a cloud of black, venomous ink in an @Template[emanation|distance:80]. This cloud has no effect outside water.\nCreatures inside the ink cloud are exposed to kraken ink poison and are Undetected while inside the cloud.\nThe kraken can't use Ink Cloud again for [[/br 2d6 #Recharge Ink Cloud]]{2d6 rounds}, and the cloud dissipates after 1 minute."
        },
        {
          "id": "I3pFXc7fvS41popk",
          "name": "Jet",
          "kind": "action",
          "description": "The kraken moves through the water up to 280 feet in a straight line without triggering reactions."
        },
        {
          "id": "EkSi5KM6hOWO5WxD",
          "name": "Kraken Ink",
          "kind": "passive",
          "description": "Krakens are immune to this poison\nSaving Throw check (fortitude, dc:39);\nMaximum Duration 10 rounds\nStage 1 4d6[poison] damage and Sickened 1 (1 round)\nStage 2 5d6[poison] damage and Sickened 2 (1 round)"
        },
        {
          "id": "5UO7IHt7Yn75Z9rL",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "RCcD66otbEEUJwke",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "wA4oCOqAmbsIN7Qi",
              "name": "Resist Energy",
              "rank": 7
            },
            {
              "id": "j2B0o9HQDgwRl8QD",
              "name": "Punishing Winds",
              "rank": 8
            },
            {
              "id": "bTOywO9RTYBgmCfo",
              "name": "Dominate (Animals Only)",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mirage-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "heMHnYShW7TCJCJb",
      "slug": "mirage-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e3d54bf9f6ced589dfab9bf4803bc805f39f2efe32545a8ac9dc5070ffe2956a",
    "translatableHash": "sha256:235c0f62a5830a97f7565023ec8b98e0f0ce7abc4d4421a342340b3b1f06f9b9",
    "data": {
      "schemaVersion": 1,
      "name": "Mirage Dragon (Ancient, Spellcaster)",
      "level": 18,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Mirage dragons are masters of illusion magic and use their powers to deceive others and further their own agendas. In addition to their magical prowess, mirage dragons possess a number of additional features to help them on hunts or mislead attackers, such as their camouflaging scales and a hallucinatory breath that can confound multiple foes at once. Mirage dragons are vain and egotistical figures. They ultimately care more about themselves than others.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 41,
      "hitPoints": 345,
      "speedFeet": 60,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 29,
        "will": 33
      },
      "abilities": {
        "str": 7,
        "dex": 7,
        "con": 6,
        "int": 6,
        "wis": 7,
        "cha": 9
      },
      "skills": {
        "acrobatics": 33,
        "arcana": 32,
        "athletics": 34,
        "crafting": 32,
        "deception": 37,
        "diplomacy": 35,
        "performance": 35,
        "stealth": 35,
        "thievery": 33
      },
      "languages": [
        "common",
        "draconic",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "fascinated",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EP5MaU6sQliS5DTZ",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d10+15 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "87YSOEdnlPfUeHN2",
          "name": "Claws",
          "bonus": 33,
          "damage": "3d6+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "Yhg16IWJyaM5UijW",
          "name": "Tail",
          "bonus": 31,
          "damage": "3d8+15 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "N3VyfMfoQe5DSb63",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The dragon can [[/act hide]] in natural environments even if they don't have cover."
        },
        {
          "id": "rLaISXF1UEzlgNVu",
          "name": "Illusion Sense",
          "kind": "passive",
          "description": "When the dragon moves within 30 feet of an illusion that can be disbelieved, they automatically attempt a secret check to disbelieve, even if they didn't spend an action to Interact."
        },
        {
          "id": "o4iFaQcPDYy49SAA",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "PjUGlZciMNB5ad4R",
          "name": "Scintillating Defense",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect The dragon flashes their iridescent scales at the triggering creature to throw off the attack. The dragon gains Concealment against the triggering attack."
        },
        {
          "id": "9XSp9GMrL4MBcCPF",
          "name": "Captivating Display",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nEffect The dragon opens the fins on their head, creating a radiant display of enthralling colors. Each creature in a @Template[emanation|distance:30] must succeed at a check (will, dc:41, options:area-effect,inflicts:dazzled,inflicts:slowed) save or be Dazzled and Slowed 1 (or Slowed 2 on a critical failure) for 1 round. Regardless of the result, a creature is then temporarily immune to Captivating Display for 1 minute."
        },
        {
          "id": "cuSg2YxJeOWsi3XS",
          "name": "Hallucinatory Breath",
          "kind": "action",
          "description": "The dragon breathes a cloud that assaults the senses and deals 17d6[mental|options:area-damage] damage in a @Template[cone|distance:50] (check (will, dc:41, options:area-effect) save). A creature that fails its save is also Confused for 1 round (1 minute on a critical failure) and is then temporarily immune to being confused by Hallucinatory Breath for 1 hour.\nThe dragon can't use Hallucinatory Breath again for [[/gmr 1d4 #Recharge Hallucinatory Breath]]{1d4 rounds}."
        },
        {
          "id": "YGFIBzztMdCKAOGu",
          "name": "Lunging Bite",
          "kind": "action",
          "description": "The dragon lunges their head forward, making a jaws Strike with an extended reach of 25 feet."
        },
        {
          "id": "5Ta2GgqbQiT1PrJW",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 3d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "QnRechWWGPliClC6",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 35,
          "saveDc": 43,
          "spells": [
            {
              "id": "spnhpw2nuDEuSLTO",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "QzQFoBVWjClcIGiW",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "r51Jnz3XUdMbPlcx",
              "name": "Disguise Magic",
              "rank": 1
            },
            {
              "id": "zeH4ZGz5g4DHAKT8",
              "name": "Item Facade",
              "rank": 1
            },
            {
              "id": "uEZuQd19ewCkCqzF",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IKazxMD7BfGrc7Ze",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "wM6EgaAzdP4xPrlb",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "b1Q8D9PBlWhpICOt",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "XjguzNwh08Ub2MxO",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "Vcu55mxzGXsxJsXh",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "EIZQpIlpr9WEl2Yb",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "P0JW0RKhC35tDNI3",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "v8nh05PdP746ykgW",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "rTcH1VMX8x3jqZYs",
              "name": "Hypnotize",
              "rank": 3
            },
            {
              "id": "WY4zCdyFF95oDYNs",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "Dh2EC1PkXXsAZams",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "kYELM80ydB43dnKq",
              "name": "Vision of Death",
              "rank": 4
            },
            {
              "id": "nHxssrYktnTMaG1B",
              "name": "False Vision",
              "rank": 5
            },
            {
              "id": "2xT06VS3aMgpbwyI",
              "name": "Hallucination",
              "rank": 5
            },
            {
              "id": "qW4ODb0fIl5c2Z0M",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "EfRZCoDdijv09GWi",
              "name": "Telekinetic Haul",
              "rank": 5
            },
            {
              "id": "Lgrjin5HWpV8RBAu",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "3sYuWM3OGHdlsbrk",
              "name": "Phantasmal Calamity",
              "rank": 6
            },
            {
              "id": "mnGBorL7salqDwCE",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "7VDaKsGPRfahM1Ef",
              "name": "Contingency",
              "rank": 7
            },
            {
              "id": "qpcDTkvSOUCitI25",
              "name": "Mask of Terror",
              "rank": 7
            },
            {
              "id": "GQm7yrPEvguZAMS8",
              "name": "Project Image",
              "rank": 7
            },
            {
              "id": "kxDt7QOKpjfXRVZA",
              "name": "Disappearance",
              "rank": 8
            },
            {
              "id": "kXTCWZ7ROAGYBh2V",
              "name": "Hidden Mind",
              "rank": 8
            }
          ]
        },
        {
          "id": "NzgVuRgGbWE2SrTH",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 35,
          "saveDc": 43,
          "spells": [
            {
              "id": "XAClejVzvQ6gaog3",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "p3WN3lOSUGzin4Q1",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "cKGQeFiBAqMWWCN1",
              "name": "Invisibility (At Will)",
              "rank": 4
            },
            {
              "id": "gEZdho1SCqhDvajU",
              "name": "Illusory Creature",
              "rank": 8
            },
            {
              "id": "vH3TQfdep5LoEkrk",
              "name": "Illusory Object (At Will)",
              "rank": 8
            },
            {
              "id": "kNrGHpBqCkbxuQ7O",
              "name": "Illusory Scene (At Will)",
              "rank": 8
            },
            {
              "id": "RYOFS8QFhNhg60w0",
              "name": "Mirage",
              "rank": 8
            },
            {
              "id": "CIc82lCAl8cQEyC9",
              "name": "Vibrant Pattern",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:magma-worm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "jh3XmHoFtcGYkdJm",
      "slug": "magma-worm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6e52b0d71cb27c3e8ffc45e8a141906fe2937105f671a72fdb9d7fa65e53480f",
    "translatableHash": "sha256:93b5abfca4080c21e4d569524000005855045b96911b85d3df65e6566cf5a895",
    "data": {
      "schemaVersion": 1,
      "name": "Magma Worm",
      "level": 18,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "beast",
        "fire"
      ],
      "description": "Among the most dangerous of their kind are the fiery magma worms. In addition to being even larger than benthic worms, the magma worm has a penchant for burrowing through volcanic regions that, over the generations, have infused it with a supernatural link to the Elemental Plane of Fire. The fiery heart of an active volcano is an attractive lair for a magma worm, as are the sprawling fields of molten rock found in the deepest reaches of the Darklands. Legends of ancient dwarven societies and colonists of the Elemental Planes populating moats of lava with magma worms likely have some basis in truth, although the methods used to keep these \"moat worms\" contained—and prevented from chewing their way through fortress foundations—must have been significant.\nMagma worms sometimes frequent areas on the surface where volcanism creates hot springs or other geothermal features, but even then they prefer to spend most of their time burrowing through the ground in their never-ending search for sustenance. Surface lands claimed by magma worms are notable for the mound-shaped burrows these creatures leave behind as they dig.\nCave worms are gigantic scavengers that bore through the depths of the world, eating whatever material they find. Named for their distinctive habitats, these worms are ravenous and display overwhelming destructive capabilities. Cave worms of different types and abilities lurk in the more remote corners of the world—tales speak of arctic worms that dwell within immense glaciers or icebergs and grave worms that burrow through the boneyards of long-forgotten ruins, to name a few.",
      "armorClass": 40,
      "hitPoints": 410,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 25,
        "will": 27
      },
      "abilities": {
        "str": 10,
        "dex": -1,
        "con": 9,
        "int": -3,
        "wis": -1,
        "cha": -1
      },
      "skills": {
        "athletics": 38
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "HGrl3b1F23RjZkR7",
          "name": "Jaws",
          "bonus": 36,
          "damage": "3d10+18 piercing; 2d6 fire",
          "traits": [
            "deadly-3d10",
            "fire",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "0fQVIqLvgnfSP4JM",
          "name": "Stinger",
          "bonus": 36,
          "damage": "2d12+18 piercing; 2d6 fire",
          "traits": [
            "agile",
            "fire",
            "poison",
            "reach-20"
          ]
        },
        {
          "id": "yOxa8PKiBE6PbRBA",
          "name": "Body",
          "bonus": 34,
          "damage": "2d10+16 bludgeoning; 2d6 fire",
          "traits": [
            "fire",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "IyKWWIgBkLnO2AXB",
          "name": "Tremorsense (Imprecise) 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "FsFg8KtMHYPQyyIC",
          "name": "Fire Healing",
          "kind": "passive",
          "description": "As long as a magma worm is in contact with a fire or body of magma at least as large as itself, it gains fast healing 20. When struck by a magical fire effect from anything other than itself, a magma worm regains Hit Points equal to half the fire damage the effect would otherwise deal."
        },
        {
          "id": "tphsLfLbrYV16pth",
          "name": "Inexorable",
          "kind": "passive",
          "description": "The magma worm recovers from the Paralyzed, Slowed, and Stunned conditions at the end of its turn. It's also immune to penalties to its Speeds and the Immobilized condition, and it ignores difficult terrain and greater difficult terrain."
        },
        {
          "id": "Y5momV4CWpuw5vhk",
          "name": "Slough Skin",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The magma worm would be affected by a condition or adverse effect (such as Cursed Metamorphosis)\nEffect The magma worm negates the triggering condition or effect by sloughing an outer layer of its skin. Effects from artifacts, deities, or a similarly powerful source can't be avoided in this way."
        },
        {
          "id": "fifv91vxtwlIpzXx",
          "name": "Fast Swallow",
          "kind": "reaction",
          "description": "Trigger The worm Grabs a creature\nEffect The worm uses Swallow Whole."
        },
        {
          "id": "hdZW9dGdp8kUzUjv",
          "name": "Fire Breath",
          "kind": "action",
          "description": "The magma worm breathes a blast of flame in a @Template[cone|distance:60] that deals 18d6[fire|options:area-damage] damage to all creatures in the area (check (reflex, dc:41, basic, options:area-effect) save).\nIt can't use Fire Breath again for [[/gmr 1d4 #Recharge Fire Breath]]{1d4 rounds}."
        },
        {
          "id": "t1G2FbWy88tYUk7w",
          "name": "Magma Worm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:41)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Drained 1 (1 round)\nStage 2 2d6[poison] damage and drained 1 (1 round)\nStage 3 2d6[poison] damage and Drained 2 (1 round)."
        },
        {
          "id": "NBXY2jJ5QKUZlI60",
          "name": "Rock Tunneler",
          "kind": "passive",
          "description": "A magma worm can burrow through solid stone at a Speed of 20 feet. It can leave a tunnel if it desires, and it usually does."
        },
        {
          "id": "8VCoSCtEbUqhtmnI",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, (3d10+10)[bludgeoning,2d6[fire]], Rupture 36"
        },
        {
          "id": "D1ZUrE1107HIW39r",
          "name": "Thrash",
          "kind": "action",
          "description": "The worm makes a Strike once against each creature in its reach. It can Strike up to once with its jaws, up to once with its stinger, and any number of times with its body. Each attack counts toward the worm's multiple attack penalty, but the multiple attack penalty doesn't increase until after it makes all the attacks."
        },
        {
          "id": "oCe57tAkaWpqe976",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:adamantine-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KdUMMd6ol83JpP62",
      "slug": "adamantine-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cd1ecf5c9c22f65d89eef1229a6918a92f864ab26d9f93e6037e169b3ec6d056",
    "translatableHash": "sha256:0e8d124e91c34e3ca0d862a46a69c916e2462c82756de7d15db58cb180d824bd",
    "data": {
      "schemaVersion": 1,
      "name": "Adamantine Dragon (Ancient)",
      "level": 18,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "dragon",
        "primal"
      ],
      "description": "The powerful adamantine dragons are one of several dragons known as skymetal dragons. The innate magic that flows through these dragons causes them to draw particular metals to their bodies like magnets or, in some cases, naturally grow these skymetals on their bodies. Adamantine dragons begin their lives with tough scales that are naturally replaced with thicker and even tougher adamantine plating as they grow older. Adamantine dragons are typically steadfast and loyal. Once they commit to a certain purpose, changing their minds is nigh impossible.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 41,
      "hitPoints": 300,
      "speedFeet": 40,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 26,
        "will": 29
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 8,
        "int": 4,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 28,
        "athletics": 36,
        "intimidation": 32,
        "nature": 29,
        "survival": 31
      },
      "languages": [
        "common",
        "draconic",
        "fey",
        "petran",
        "sakvroth",
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "petrified",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2p6i5BA3VT0Awpw6",
          "name": "Jaws",
          "bonus": 36,
          "damage": "3d12+18 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "s64qcOc82MfOM1BV",
          "name": "Claw",
          "bonus": 36,
          "damage": "3d8+18 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "T1zx1v2pNRTAUXUg",
          "name": "Tail",
          "bonus": 34,
          "damage": "3d10+18 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "xYDMD5k7o0XYnpVq",
          "name": "Rock",
          "bonus": 34,
          "damage": "3d8+18 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "iXclwbR0Bu7kLFdn",
          "name": "Tremorsense (Imprecise) 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LUwtdpWWfHRKXjmJ",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eiF3caXCeUyEeCyp",
          "name": "Abandon Armor",
          "kind": "passive",
          "description": "Once the adamantine dragon is reduced to fewer than half their Hit Points, their resistance is reduced by 10 and they gain a +10 circumstance bonus to their Speeds."
        },
        {
          "id": "2Fy5iLD2TzN5Y4ks",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:37, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "Bd6m642VMIE5yoVM",
          "name": "Resilient Form",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a weapon or unarmed attack;\nEffect The dragon's tough scales ward off deadly attacks. The dragon attempts a check (flat, dc:17). On a success, the triggering attack becomes a normal hit."
        },
        {
          "id": "Nsq37LYvx8Gc8M1O",
          "name": "Adamantine Body",
          "kind": "passive",
          "description": "The dragon's unarmed melee Strikes are adamantine."
        },
        {
          "id": "S1Ztj3jcXHNboSRl",
          "name": "Avalanche Breath",
          "kind": "action",
          "description": "The dragon belches a mass of boulders that deals 15d8[bludgeoning|options:area-damage] damage in a @Template[cone|distance:40] (check (reflex, dc:40, basic, options:area-effect) save).\nThey can't use Avalanche Breath again for [[/gmr 1d4 #Recharge Avalanche Breath]]{1d4 rounds}."
        },
        {
          "id": "oIGArcTy5v4hSbt2",
          "name": "Burrowing Pounce",
          "kind": "action",
          "description": "Requirements The dragon is burrowed\nEffect The dragon Burrows, then Leaps out of the ground, landing at a point within 25 feet. The dragon makes a melee Strike against a creature within reach when they land. If the Strike is a critical hit, the target is knocked Prone."
        },
        {
          "id": "HCxDD7AHLDXLnBaG",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "EkcaWZenNTH0adjS",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Avalanche Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "kqrMTY4rXUkU8TAS",
          "name": "Fast Swallow",
          "kind": "reaction",
          "description": "Trigger The dragon Grabs a creature\nEffect The dragon uses Swallow Whole."
        },
        {
          "id": "GxvACJ69DbxdcfgE",
          "name": "Rock Tunneler",
          "kind": "passive",
          "description": "The dragon can burrow through solid stone at a Speed of 20 feet. They can leave a tunnel if they desire, and they usually don't."
        },
        {
          "id": "uFP1Yw0V53Uii1mE",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (3d12+14)[bludgeoning], Rupture 35"
        },
        {
          "id": "2iyCQPtD05LBG8Gz",
          "name": "Throw Rock",
          "kind": "action",
          "description": ""
        },
        {
          "id": "gdjy3xyy8xjmihqH",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "U7XnR0V6Ep934osJ",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:aolaz",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KdW5UeZSqeTZZlo5",
      "slug": "aolaz",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f4ee2075719facfb43c047f896d6992c4dc84873662cd4df422cb570f58a0a87",
    "translatableHash": "sha256:0c2164ee4ac8f119e9b372bd4c0ffca3949a9467d3a04a325bd99bbd0d5135de",
    "data": {
      "schemaVersion": 1,
      "name": "Aolaz",
      "level": 18,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "construct"
      ],
      "description": "Aolazes are great beasts carved from stone and metal and magically imbued with the essence of life. The exact means of their creation is a long-lost secret, and they are so rare that scholars have little opportunity to study active specimens. The best-known aolazes are museum pieces or battlefield relics destroyed or deactivated centuries ago, though fragmented records suggest that many more were made and might remain, yet to be unearthed.\nMost aolazes are built in the shape of great land-bound beasts, such as elephants, rhinoceroses, or dinosaurs. Regardless of the specific creature an aolaz has been constructed to resemble, it is not bound to walk the earth like its inspirations are—it's imbued with the magical ability to pursue across water and even through the air. Few can escape an aolaz's wrath once it is earned.",
      "armorClass": 42,
      "hitPoints": 255,
      "speedFeet": 50,
      "perception": {
        "modifier": 33,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 35,
        "reflex": 27,
        "will": 31
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 8,
        "int": -4,
        "wis": 6,
        "cha": 3
      },
      "skills": {
        "athletics": 35
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "sonic"
        ],
        "resistances": [
          "physical 15 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "0Y47YuHl29LzryME",
          "name": "Trunk",
          "bonus": 35,
          "damage": "5d10+17 bludgeoning",
          "traits": [
            "magical",
            "reach-20",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "YMLwRoRwaGIKGsjv",
          "name": "Foot",
          "bonus": 33,
          "damage": "5d8+15 bludgeoning",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "bEnEcBaXcq0xrckT",
          "name": "Flawless Hearing",
          "kind": "passive",
          "description": "An aolaz has an incredible sense of hearing. It can hear any sound made within 1,000 feet as though it were only 5 feet away from the source of the sound, and any sound within 1 mile as though it were only 30 feet away from the source of the sound. An aolaz's hearing is a precise sense."
        },
        {
          "id": "yKM6d3CSPA4ymKUk",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QleXAKxC6oYMhWIK",
          "name": "Roll",
          "kind": "action",
          "description": "The aolaz tucks its head down and rolls up into an armored sphere. While Rolling, an aolaz has AC 44, Fort +37, Ref +29, Will +33, and Speed 100 feet, but it can't use its trunk Strikes or its Ultrasonic Blast. It can make foot Strikes while rolling, but only as part of a Trample. The aolaz can use this action again to unroll and resume its standing form."
        },
        {
          "id": "KmdxRqIdBe3pc6XL",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:40, basic)"
        },
        {
          "id": "IZ5Q9oQE8jylYahf",
          "name": "Ultrasonic Blast",
          "kind": "action",
          "description": "The aolaz releases a tremendous blast of sonic energy from its trunk in a @Template[line|distance:150], dealing 12d10[sonic|options:area-damage] damage. The frequency of this sound is such that it is completely imperceptible to humanoids, but the damage it wreaks is all too evident. Each creature in the area must attempt a check (fortitude, dc:40, options:area-effect,damaging-effect,inflicts:stunned) save.\nThe aolaz can't use Ultrasonic Blast again for [[/gmr 1d4 #Recharge Ultrasonic Blast]]{1d4 rounds}.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Stunned 1.\nFailure The creature takes full damage and is Stunned 2.\nCritical Failure The creature takes double damage and is Stunned 3."
        },
        {
          "id": "mHMefxDyPXjW4mKt",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "pE48e3bWFRDs19oA",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 30,
          "saveDc": 40,
          "spells": [
            {
              "id": "sr3zEIpVnOEylZ3R",
              "name": "Fly (Constant)",
              "rank": 9
            },
            {
              "id": "v3MNBWrVRN9SQv9V",
              "name": "Water Walk (Constant)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:thulgant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mEjCLVRt7iDiNZL6",
      "slug": "thulgant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2fc8f24a3d790d4cc4aa7d01fd8481662f8b4bba7010965c0bc741fce185e4e2",
    "translatableHash": "sha256:205118521a07a9d12fce16e2c8df808e8fc8198bb19c088c322cf56fb9d1af2d",
    "data": {
      "schemaVersion": 1,
      "name": "Thulgant",
      "level": 18,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "fiend",
        "qlippoth",
        "unholy"
      ],
      "description": "Thulgants are powerful and intelligent qlippoths created from the cannibalistic feeding frenzies of augnagars. Although they spend most of their time hunting and battling demons for control of the Outer Rifts, thulgants amuse themselves with a variety of diversions, such as maintaining galleries of petrified mortals or building massive, hive-like lairs filled with enslaved minions. Each thulgant is a horrific tangle of limbs, with spiderlike legs, writhing tentacles emerging from the top of its head, and three scorpion-like stingers.\nLong before the creatures known as demons came to be the dominant force in the Outer Rifts, qlippoth ruled the innumerable cracks of the Outer Sphere. These inimical creatures are a form of primordial and alien evil that predates mortal life, and most immortal life as well. Since the rise of mortal sin and the associated expansion of demonic life through the Outer Rifts, qlippoth have been driven to their deepest reaches, and they seethe with rancor at the loss of their realms. Yet, rather than directly oppose demons, qlippoth instead turn to the source—mortal sin—and wage an endless war to eradicate all creatures capable of sinful acts so that the demonic tide might be turned back. To ensure they do not bolster their foe's ranks, they enact horrific transformations on their targets, converting their victims into beings incapable of discerning right from wrong; this renders them unable to be judged by Pharasma's courts and thus incapable of becoming fiends. Most mortals consider the ministrations of a qlippoth to be far worse than any fate awaiting them in the afterlife.",
      "armorClass": 42,
      "hitPoints": 305,
      "speedFeet": 30,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 28,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 6,
        "int": 5,
        "wis": 6,
        "cha": 9
      },
      "skills": {
        "acrobatics": 32,
        "athletics": 35,
        "occultism": 33,
        "stealth": 32
      },
      "languages": [
        "chthonian"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "fear-effects"
        ],
        "resistances": [
          "mental 15",
          "physical 15 except cold-iron"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ErIhDSVTBd7aGHeC",
          "name": "Stinger",
          "bonus": 35,
          "damage": "3d12+17 piercing; 4d6 mental",
          "traits": [
            "reach-10",
            "unholy"
          ]
        },
        {
          "id": "0q3s792vZI0wANuc",
          "name": "Tentacle",
          "bonus": 35,
          "damage": "3d8+17 bludgeoning; 3d6 acid",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "P4BV5OJUyj3rfr1E",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qWb7LRbSfICoEdcJ",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ZpwdhSclQeUAlEM1",
          "name": "Fast Healing 10",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0dNqhk5KI3nAaTlu",
          "name": "Demon Hunter",
          "kind": "action",
          "description": "The thulgant causes a demon within 30 feet to suffer the effect of its sinful vulnerability."
        },
        {
          "id": "2R71xX6zTcFcPntf",
          "name": "Greater Constrict",
          "kind": "action",
          "description": "(2d6+17)[bludgeoning,1d6[acid]], check (fortitude, dc:40, basic, options:inflicts:unconscious)"
        },
        {
          "id": "34NmTbXjw24GQVju",
          "name": "Mind-Rending Sting",
          "kind": "action",
          "description": "Requirements The thulgant hits the same enemy with two consecutive sting Strikes in the same round\nEffect The thulgant deals (3d12+17)[mental] damage to the enemy. If the enemy is affected by thulgant venom, that poison gains the virulent trait."
        },
        {
          "id": "uY2J1JrUYcVbFp2j",
          "name": "Stunning Display",
          "kind": "action",
          "description": "The thulgant rises up on its twitching limbs and presents its numerous tentacles and stingers in a horrifying display of awfulness. Creatures in a @Template[emanation|distance:30] must attempt a check (will, dc:40) save, after which they are temporarily immune to further Stunning Displays for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 4.\nCritical Failure The creature is Stunned 8."
        },
        {
          "id": "p1rxtsKx33vjytn0",
          "name": "Thulgant Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:40)\nMaximum Duration 6 rounds\nStage 1 3d6[poison] damage and the victim gains one of the following at random: Clumsy 1, Enfeebled 1, or Stupefied 1 (1 round)\nStage 2 6d6[poison] damage and the victim gains two of the following at random: Clumsy 2, Enfeebled 2, or Stupefied 2 (1 round)\nStage 3 9d6[poison] damage and the victim gains all three of the following: Clumsy 3, Enfeebled 3, and Stupefied 3 (1 round)"
        },
        {
          "id": "1BrHXN7JmOnmyeOk",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "fEKfgiJvpDVUGTI9",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "6cN8U29BNrbPFOy6",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "xCwBjT53m5eJT9Ma",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "CSFQGvW25ao0hwUf",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "V8L7mMCh2rV29Sdv",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "YG7PnzMpsTUPdchv",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "dAjoWu1fhgkCd2Pu",
              "name": "Dispel Magic",
              "rank": 8
            },
            {
              "id": "T5AJFOtirxYv9Qou",
              "name": "Divine Decree",
              "rank": 8
            },
            {
              "id": "rh3r8h8vvPD97SCU",
              "name": "Phantom Pain",
              "rank": 8
            },
            {
              "id": "zhfVZunlOYTfhDwI",
              "name": "Quandary",
              "rank": 8
            },
            {
              "id": "PbY0sCT3wSlXACbJ",
              "name": "Petrify",
              "rank": 9
            },
            {
              "id": "Mq8wWC82SXOqMo2o",
              "name": "Phantasmal Calamity",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:adamantine-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ptaN3MY80GiE6PHW",
      "slug": "adamantine-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d0ea40bb99fa0248ce84e6642c2737f7252abdaca6e9a3a59c2be7f074e125bc",
    "translatableHash": "sha256:e34d54689653194586d5cc992bc9b175f54e84f28ba72d3b03d215eabb9e0d77",
    "data": {
      "schemaVersion": 1,
      "name": "Adamantine Dragon (Ancient, Spellcaster)",
      "level": 18,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "dragon",
        "primal"
      ],
      "description": "The powerful adamantine dragons are one of several dragons known as skymetal dragons. The innate magic that flows through these dragons causes them to draw particular metals to their bodies like magnets or, in some cases, naturally grow these skymetals on their bodies. Adamantine dragons begin their lives with tough scales that are naturally replaced with thicker and even tougher adamantine plating as they grow older. Adamantine dragons are typically steadfast and loyal. Once they commit to a certain purpose, changing their minds is nigh impossible.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 41,
      "hitPoints": 300,
      "speedFeet": 40,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 26,
        "will": 29
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 8,
        "int": 4,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 28,
        "athletics": 36,
        "intimidation": 32,
        "nature": 29,
        "survival": 31
      },
      "languages": [
        "common",
        "draconic",
        "fey",
        "petran",
        "sakvroth",
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "petrified",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2p6i5BA3VT0Awpw6",
          "name": "Jaws",
          "bonus": 36,
          "damage": "3d12+18 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "s64qcOc82MfOM1BV",
          "name": "Claw",
          "bonus": 36,
          "damage": "3d8+18 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "T1zx1v2pNRTAUXUg",
          "name": "Tail",
          "bonus": 34,
          "damage": "3d10+18 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "xYDMD5k7o0XYnpVq",
          "name": "Rock",
          "bonus": 34,
          "damage": "3d8+18 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "iXclwbR0Bu7kLFdn",
          "name": "Tremorsense (Imprecise) 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LUwtdpWWfHRKXjmJ",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eiF3caXCeUyEeCyp",
          "name": "Abandon Armor",
          "kind": "passive",
          "description": "Once the adamantine dragon is reduced to fewer than half their Hit Points, their resistance is reduced by 10 and they gain a +10 circumstance bonus to their Speeds."
        },
        {
          "id": "2Fy5iLD2TzN5Y4ks",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:37, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "Bd6m642VMIE5yoVM",
          "name": "Resilient Form",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a weapon or unarmed attack;\nEffect The dragon's tough scales ward off deadly attacks. The dragon attempts a check (flat, dc:17). On a success, the triggering attack becomes a normal hit."
        },
        {
          "id": "Nsq37LYvx8Gc8M1O",
          "name": "Adamantine Body",
          "kind": "passive",
          "description": "The dragon's unarmed melee Strikes are adamantine."
        },
        {
          "id": "S1Ztj3jcXHNboSRl",
          "name": "Avalanche Breath",
          "kind": "action",
          "description": "The dragon belches a mass of boulders that deals 15d8[bludgeoning|options:area-damage] damage in a @Template[cone|distance:40] (check (reflex, dc:40, basic, options:area-effect) save).\nThey can't use Avalanche Breath again for [[/gmr 1d4 #Recharge Avalanche Breath]]{1d4 rounds}."
        },
        {
          "id": "oIGArcTy5v4hSbt2",
          "name": "Burrowing Pounce",
          "kind": "action",
          "description": "Requirements The dragon is burrowed\nEffect The dragon Burrows, then Leaps out of the ground, landing at a point within 25 feet. The dragon makes a melee Strike against a creature within reach when they land. If the Strike is a critical hit, the target is knocked Prone."
        },
        {
          "id": "kqrMTY4rXUkU8TAS",
          "name": "Fast Swallow",
          "kind": "reaction",
          "description": "Trigger The dragon Grabs a creature\nEffect The dragon uses Swallow Whole."
        },
        {
          "id": "GxvACJ69DbxdcfgE",
          "name": "Rock Tunneler",
          "kind": "passive",
          "description": "The dragon can burrow through solid stone at a Speed of 20 feet. They can leave a tunnel if they desire, and they usually don't."
        },
        {
          "id": "uFP1Yw0V53Uii1mE",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (3d12+14)[bludgeoning], Rupture 35"
        },
        {
          "id": "2iyCQPtD05LBG8Gz",
          "name": "Throw Rock",
          "kind": "action",
          "description": ""
        },
        {
          "id": "gdjy3xyy8xjmihqH",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "U7XnR0V6Ep934osJ",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "gswbQEU3diJm7Yu5",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 36,
          "saveDc": 41,
          "spells": [
            {
              "id": "A8BK5OAJHPBRZAkN",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "GNhG5zlj0EsIwhni",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "CWAKqhlgHRYEh958",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "d2hcLwHsovHgchWl",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "ZmKyyRBcGNqzY6IS",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "mW25a7XTLye2hRPx",
              "name": "Tailwind",
              "rank": 1
            },
            {
              "id": "Tcm4EnwX5i7j3eBZ",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "6tW77WoJksUwCy9C",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "HnuxbvreaMKhZJTS",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "C6WkJ5pZVvLDLMLd",
              "name": "Shatter",
              "rank": 2
            },
            {
              "id": "4YYxcZ1e4a2UsZvO",
              "name": "Water Walk",
              "rank": 2
            },
            {
              "id": "1esJiPQoevHt2HaQ",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "zuTRdaa7TwaV3P72",
              "name": "One with Stone",
              "rank": 3
            },
            {
              "id": "FCCxg3UUOpwSIbIj",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "pqV6RXsXJPq9LtG7",
              "name": "Shape Stone",
              "rank": 4
            },
            {
              "id": "nFnNvTT6iT4i0E2t",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "hl2QcDkZ6kYyikGm",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "BFVMVNTV0FVpxP2S",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "kYKimUK2xmOCpAUc",
              "name": "Magic Passage",
              "rank": 5
            },
            {
              "id": "cvEIfQzVcjAOL5nq",
              "name": "Speak with Stones",
              "rank": 5
            },
            {
              "id": "wut87DYZ59aa8Rsz",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "1WViAR0tF2GyRObl",
              "name": "Petrify",
              "rank": 6
            },
            {
              "id": "XkZx96II2hZUkFb3",
              "name": "Tangling Creepers",
              "rank": 6
            },
            {
              "id": "EdPpNUNiWY34BcT7",
              "name": "Mask of Terror",
              "rank": 7
            },
            {
              "id": "rNTkccSA9ys64T0u",
              "name": "Regenerate",
              "rank": 7
            },
            {
              "id": "VGZ71hVFTpgJSG9u",
              "name": "Volcanic Eruption",
              "rank": 7
            },
            {
              "id": "vIhwGrwu6jQ8ZAoH",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "TqZCpzRSI8evDmI0",
              "name": "Earthquake",
              "rank": 8
            },
            {
              "id": "V0DttLELbwFtbaxG",
              "name": "Moment of Renewal",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mirage-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "uc61UL57ywxLy0q0",
      "slug": "mirage-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:568809ade0e2b06b02a28af623cdd618d3e044b44788b87cd383a8251b5edcd8",
    "translatableHash": "sha256:d557898c93227969b2a3b6268f2b44b0834657a0b5b6281adcd1059061ff127b",
    "data": {
      "schemaVersion": 1,
      "name": "Mirage Dragon (Ancient)",
      "level": 18,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Mirage dragons are masters of illusion magic and use their powers to deceive others and further their own agendas. In addition to their magical prowess, mirage dragons possess a number of additional features to help them on hunts or mislead attackers, such as their camouflaging scales and a hallucinatory breath that can confound multiple foes at once. Mirage dragons are vain and egotistical figures. They ultimately care more about themselves than others.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 41,
      "hitPoints": 345,
      "speedFeet": 60,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 29,
        "will": 33
      },
      "abilities": {
        "str": 7,
        "dex": 7,
        "con": 6,
        "int": 6,
        "wis": 7,
        "cha": 9
      },
      "skills": {
        "acrobatics": 33,
        "arcana": 32,
        "athletics": 34,
        "crafting": 32,
        "deception": 37,
        "diplomacy": 35,
        "performance": 35,
        "stealth": 35,
        "thievery": 33
      },
      "languages": [
        "common",
        "draconic",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "fascinated",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EP5MaU6sQliS5DTZ",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d10+15 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "87YSOEdnlPfUeHN2",
          "name": "Claws",
          "bonus": 33,
          "damage": "3d6+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "Yhg16IWJyaM5UijW",
          "name": "Tail",
          "bonus": 31,
          "damage": "3d8+15 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "N3VyfMfoQe5DSb63",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The dragon can [[/act hide]] in natural environments even if they don't have cover."
        },
        {
          "id": "rLaISXF1UEzlgNVu",
          "name": "Illusion Sense",
          "kind": "passive",
          "description": "When the dragon moves within 30 feet of an illusion that can be disbelieved, they automatically attempt a secret check to disbelieve, even if they didn't spend an action to Interact."
        },
        {
          "id": "o4iFaQcPDYy49SAA",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "PjUGlZciMNB5ad4R",
          "name": "Scintillating Defense",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect The dragon flashes their iridescent scales at the triggering creature to throw off the attack. The dragon gains Concealment against the triggering attack."
        },
        {
          "id": "9XSp9GMrL4MBcCPF",
          "name": "Captivating Display",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nEffect The dragon opens the fins on their head, creating a radiant display of enthralling colors. Each creature in a @Template[emanation|distance:30] must succeed at a check (will, dc:41, options:area-effect,inflicts:dazzled,inflicts:slowed) save or be Dazzled and Slowed 1 (or Slowed 2 on a critical failure) for 1 round. Regardless of the result, a creature is then temporarily immune to Captivating Display for 1 minute."
        },
        {
          "id": "WMdK1rdUjXn9ZjQJ",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "jgWjQm6QarRsD1eE",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Hallucinatory Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "cuSg2YxJeOWsi3XS",
          "name": "Hallucinatory Breath",
          "kind": "action",
          "description": "The dragon breathes a cloud that assaults the senses and deals 17d6[mental|options:area-damage] damage in a @Template[cone|distance:50] (check (will, dc:41, options:area-effect) save). A creature that fails its save is also Confused for 1 round (1 minute on a critical failure) and is then temporarily immune to being confused by Hallucinatory Breath for 1 hour.\nThe dragon can't use Hallucinatory Breath again for [[/gmr 1d4 #Recharge Hallucinatory Breath]]{1d4 rounds}."
        },
        {
          "id": "YGFIBzztMdCKAOGu",
          "name": "Lunging Bite",
          "kind": "action",
          "description": "The dragon lunges their head forward, making a jaws Strike with an extended reach of 25 feet."
        },
        {
          "id": "5Ta2GgqbQiT1PrJW",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 3d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "NzgVuRgGbWE2SrTH",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 35,
          "saveDc": 43,
          "spells": [
            {
              "id": "XAClejVzvQ6gaog3",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "p3WN3lOSUGzin4Q1",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "cKGQeFiBAqMWWCN1",
              "name": "Invisibility (At Will)",
              "rank": 4
            },
            {
              "id": "gEZdho1SCqhDvajU",
              "name": "Illusory Creature",
              "rank": 8
            },
            {
              "id": "vH3TQfdep5LoEkrk",
              "name": "Illusory Object (At Will)",
              "rank": 8
            },
            {
              "id": "kNrGHpBqCkbxuQ7O",
              "name": "Illusory Scene (At Will)",
              "rank": 8
            },
            {
              "id": "RYOFS8QFhNhg60w0",
              "name": "Mirage",
              "rank": 8
            },
            {
              "id": "CIc82lCAl8cQEyC9",
              "name": "Vibrant Pattern",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skulltaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "zkl6planCbeCuAdS",
      "slug": "skulltaker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7fb96f77021e3123bbccbf6d1ed45f2ed0f32a72b63a3ec1302739e151287a1d",
    "translatableHash": "sha256:a1d2c0df42680dcccd83a19b4ef5f5200f41d045db7be9f6ead0dd70be5756dd",
    "data": {
      "schemaVersion": 1,
      "name": "Skulltaker",
      "level": 18,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Swirling down from misty peaks and through howling mountain passes like an evil wind, the vortex of bones known as a skulltaker is a terrible manifestation of the delirium and agony experienced by doomed climbers and lost trailblazers just before they met their end. In some places, a skulltaker is also known as a saxra.",
      "armorClass": 42,
      "hitPoints": 300,
      "speedFeet": 30,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 33,
        "will": 35
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 6,
        "int": 2,
        "wis": 8,
        "cha": 7
      },
      "skills": {
        "acrobatics": 34,
        "intimidation": 35,
        "religion": 30,
        "stealth": 32
      },
      "languages": [
        "necril"
      ],
      "defenses": {
        "immunities": [
          "cold",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "piercing 15",
          "slashing 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "64dsDb6VCwVbCOBD",
          "name": "Jaws",
          "bonus": 35,
          "damage": "3d10+14 piercing; 3d6 void",
          "traits": [
            "deadly-2d12",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "RBSzDryfenHBXU42",
          "name": "Claw",
          "bonus": 35,
          "damage": "3d6+14 slashing; 3d6 void",
          "traits": [
            "agile",
            "deadly-2d12",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "ztyTHwNIKhCgnOc2",
          "name": "Bone Javelin",
          "bonus": 33,
          "damage": "3d8+6 piercing; 3d6 void",
          "traits": [
            "magical",
            "thrown-100"
          ]
        }
      ],
      "actions": [
        {
          "id": "jj8vv07lGAp4FELU",
          "name": "Skeletal Lore",
          "kind": "passive",
          "description": "A skulltaker taps into the memories of the creatures whose bones make up its body. This gives it the Skeletal Lore skill, which it can use to Recall Knowledge of any kind. In addition, it can speak and understand all the languages known by the creatures whose bones make up its body (typically including Common and the regional language of the skulltaker's home region).\nThe skulltaker can use Skeletal Lore as the primary skill check for the Collective Memories ritual, and it can cast collective memories without secondary casters."
        },
        {
          "id": "SHBduQHQxTGNFYyK",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AMOJU0wX8r6flwf4",
          "name": "+1 Status to All Saves vs. Vitality",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "i9LmbR4DKZeW0lRN",
          "name": "Shard Storm",
          "kind": "passive",
          "description": "10 feet.\nA cloud of bone shards surrounds the skulltaker. When a creature moves into the emanation or begins its turn there, shard storm deals 4d6[slashing,4d6[void]]{4d6 slashing damage and 4d6 void damage} to the creature, with a check (reflex, dc:40, basic) save.\nIf the creature has resistance or immunity to void damage, or an effect that protects it against death effects, or an effect that protects it against the doomed or drained condition, the creature must first succeed at a check (will, dc:40) save or have all such benefits suppressed for 1 minute."
        },
        {
          "id": "3w2NERtypkviX5vW",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "o6Y376tDDVyc2Cf8",
          "name": "Bonetaker",
          "kind": "passive",
          "description": "Whenever a creature dies within 60 feet of a skulltaker, the skulltaker draws a portion of the creature's bones into its shard storm.\nThe creature must succeed at a check (will, dc:40) save or rise as a Skeletal Champion in [[/gmr 1d4 #rounds]]{1d4 rounds}. These skeletal champions are controlled by the skulltaker."
        },
        {
          "id": "1QVkgQh59Pmq5fP3",
          "name": "Splintered Ground",
          "kind": "action",
          "description": "The skulltaker causes splintered bones to erupt from all solid surfaces in a @Template[emanation|distance:100], except for surfaces of worked stone. A creature moving through the bones takes 10[piercing,10[void]|options:area-damage]{10 piercing damage and 10 void damage} for every 5 feet of movement.\nThe first time each round a creature takes piercing damage from these splintered bones, it must succeed at a check (reflex, dc:40, options:area-effect,damaging-effect) save or take a –10-foot circumstance penalty to all Speeds for 10 minutes, or a –15-foot circumstance penalty for 24 hours on a critical failure.\nThe bones remain in place until the skulltaker uses this action again or the bones are manually removed, which takes 10 minutes for each 5-foot square.\nEffect: Splintered Ground\nEffect: Splintered Ground (Critical Failure)"
        },
        {
          "id": "JOlynEzl2UrSa16n",
          "name": "Vitality Drain",
          "kind": "passive",
          "description": "When a skulltaker hits with a melee Strike, the target must succeed at a check (fortitude, dc:40) save or become Drained 2 and Doomed 1."
        }
      ],
      "spellcasting": [
        {
          "id": "Msmv4qRjU8FEJbcm",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "QOOaLzFKDR6OoihF",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "5dbOdsbMa8fLeuqB",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "XDK7kcLKDyqIkUFV",
              "name": "Execute",
              "rank": 8
            },
            {
              "id": "cKNOnxqVcqPfMhvu",
              "name": "Punishing Winds",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:terotricus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "3IPLvfez8DzwwNqm",
      "slug": "terotricus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:11b3fbca1959fa80c937797853f1952d41aa44a04ce1dfe0d2461d5a2b641088",
    "translatableHash": "sha256:2f269ba0f3118e842683235dce12d013ff6f601b3726340ea126e775cb35f064",
    "data": {
      "schemaVersion": 1,
      "name": "Terotricus",
      "level": 19,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "fungus",
        "unholy"
      ],
      "description": "The legendary terotricus is a massive slime mold that hails from the Outer Rifts. Its collective consciousness encapsulates entire regions, spreading as far as its ever-growing cloud of spores will take it. Once it has seeped into the Universe from the Rifts, a terotricus's agenda is to feed on all living creatures, infecting them with its spores, and its presence can spell doom for any in its way.\nTerotricuses move by rapidly expanding and contracting their slimy \"bodies,\" which are capable of burrowing through soil, gliding across water, and scrabbling up steep slopes. These behemoths of rot don't need to travel to see their plans come to fruition, though; their spores easily latch onto demons and other denizens of the Outer Rifts, who in turn bring this blight to the Universe when the fiends are summoned.\nWhen a terotricus infects a creature with its spores, web-like fungal growths start appearing on the victim's skin until they cover the entire body, at which point the victim's mind is also subdued and bent to the terotricus's will. The terotricus's favored victims include animals, elves, and fey, though it is happy to infect any creature it can catch. Cults of Treerazer occasionally attempt to make contact with a terotricus, but such acts almost always simply result in a new sect of spore-blighted servants.",
      "armorClass": 42,
      "hitPoints": 370,
      "speedFeet": 35,
      "perception": {
        "modifier": 31,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 34,
        "reflex": 28,
        "will": 33
      },
      "abilities": {
        "str": 10,
        "dex": 5,
        "con": 9,
        "int": -1,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "athletics": 37,
        "deception": 32,
        "intimidation": 35,
        "nature": 31,
        "survival": 31
      },
      "languages": [
        "chthonian",
        "elven",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "controlled",
          "disease",
          "paralyzed",
          "sleep"
        ],
        "resistances": [
          "fire 15"
        ],
        "weaknesses": [
          "cold 15",
          "cold-iron 15",
          "holy 15",
          "slashing 10"
        ]
      },
      "attacks": [
        {
          "id": "4Iw8N4ANO4rwmrYg",
          "name": "Tentacle",
          "bonus": 37,
          "damage": "4d10+18 bludgeoning; 2d6 spirit",
          "traits": [
            "magical",
            "reach-20",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "8jF0NZz94zAMhCHA",
          "name": "Spores",
          "bonus": 37,
          "damage": "4d8+8 poison; 2d6 spirit",
          "traits": [
            "brutal",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "TkDV0wPhRzYy8sii",
          "name": "Tremorsense (Imprecise) 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qSJwECMRJYL4xDUN",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "xpcbUoWx3vMpIFDi",
          "name": "Regeneration 25 (Deactivated by Cold)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9YuL1pu4ZHOAaxcZ",
          "name": "Spore Cloud",
          "kind": "passive",
          "description": "30 feet.\nA creature entering the aura or starting its turn there is exposed to spore blight."
        },
        {
          "id": "4fyqV0qYe1BZBmnT",
          "name": "Infest Environs",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The terotricus is in a swamp or forested area\nEffect The terotricus drains nutrients from nearby trees and undergrowth while simultaneously infesting them with fungal growth. All non-magical plant life (though not plant creatures) within a @Template[emanation|distance:60] withers and sprouts foul mold and slimy mushrooms, removing any cover and concealment provided by trees and undergrowth. In addition, the terotricus regains 200[healing,vitality]{200 Hit Points} (this is a healing vitality effect)."
        },
        {
          "id": "fvSVZqV8GEHEzMVu",
          "name": "Spore Blight",
          "kind": "passive",
          "description": "Plants and fungi are immune.\nSaving Throw check (fortitude, dc:40)\nStage 1 Enfeebled 2 (1 day)\nStage 2 Enfeebled 4 and Slowed 1 (1 day)\nStage 3 Controlled by the terotricus (as Dominate; [[/br 5d8 #Duration Controlled]]{5d8 days})\nStage 4 dead"
        },
        {
          "id": "1Vdy1h0xvUBMB9Mg",
          "name": "Sticky Spores",
          "kind": "passive",
          "description": "A creature hit by a terotricus's spores takes a –10-foot status penalty to all its Speeds for 1 minute. If the Strike was a critical hit, the creature is also Immobilized until it [[/act escape dc=40]]{Escapes}.\nEffect: Sticky Spores"
        },
        {
          "id": "ZfDN0qrqMsIVdq7W",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pyVnqo4FLO0RWxrX",
          "name": "Improved Push 20 feet",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:guthallath",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BPznJcLvfkpfeQ2q",
      "slug": "guthallath",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf5a86935a096273d08c6528afd5934b8665b0246052fa5afb68bce21de6dff5",
    "translatableHash": "sha256:992f0d716d1c5912a855f7459827481d8f76058b8a4958dd19e45a9de166201a",
    "data": {
      "schemaVersion": 1,
      "name": "Guthallath",
      "level": 19,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "construct"
      ],
      "description": "A guthallath is an enormous construct created long ago, probably as a war machine, by a long-forgotten empire. Nearly 100 feet tall, this massive stone statue typically resembles a stalwart warrior wearing only a loincloth and skullcap. Few have seen the entire body of a guthallath, though; most of the time, the relic is buried up to its neck, covered in moss, and stranded in a forgotten place. Yet every so often, one of these harbingers of destruction reactivates in response to some unknown stimulus or rallying call, and when this happens, woe to any who stand in its way.\nWhile a guthallath's ancient enemies are likely gone, it's still an engine of pure destruction, designed to rampage for weeks, even months. It's not intelligent enough to enjoy or regret its acts and cannot be reasoned with—it's also unaffected by most magic and unpredictable in how it selects its targets (and the creatures it spares).",
      "armorClass": 43,
      "hitPoints": 325,
      "speedFeet": 40,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 38,
        "reflex": 32,
        "will": 30
      },
      "abilities": {
        "str": 10,
        "dex": 2,
        "con": 8,
        "int": -4,
        "wis": 0,
        "cha": -1
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 40
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 15 except adamantine",
          "spells 15 except cold, earth, water"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5Yp3kZDHE8gZhhLe",
          "name": "Fist",
          "bonus": 38,
          "damage": "4d12+18 bludgeoning",
          "traits": [
            "deadly-3d12",
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "ZrnTtQzYoMMf79j0",
          "name": "Foot",
          "bonus": 38,
          "damage": "4d8+18 bludgeoning",
          "traits": [
            "deadly-3d12",
            "magical",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "yPMc4avP8IHjveQY",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VVvneLCIn09BPxX7",
          "name": "Erosion Aura",
          "kind": "passive",
          "description": "120 feet.\nThe guthallath erodes away the physical integrity of all around it. Creatures and objects in the emanation other than the guthallath have their Hardness and resistances reduced by 10.\nAt the start of their turn, a creature in the erosion aura's area takes 6d6[bludgeoning] damage with a check (fortitude, dc:39, basic) save."
        },
        {
          "id": "nCvEdtYwtDcpBscl",
          "name": "Immunity to Magic",
          "kind": "passive",
          "description": "The guthallath is immune to spells of 6th rank or lower and activations of magic items of 13th level or lower."
        },
        {
          "id": "D0q0aNWo1X51cNe4",
          "name": "Annihilation Beams",
          "kind": "action",
          "description": "A guthallath releases two beams of destruction from its eyes. Each beam is a @Template[line|distance:120]. Everything in either line takes 13d10[untyped|options:area-damage] damage with a check (fortitude, dc:41, basic, options:area-effect) save.\nA creature reduced to 0 HP is reduced to a fine powder as the Disintegrate spell. There is no additional effect on creatures in any area where the beams overlap.\nThe guthallath can't use this ability again for [[/gmr 1d4 #Recharge Annihilation Beams]]{1d4 rounds}."
        },
        {
          "id": "tDvcon2bK9xEGh90",
          "name": "Deadly Throw",
          "kind": "action",
          "description": "Requirements The guthallath has a creature Grabbed or Restrained\nEffect The guthallath throws the creature into the air, 100 feet high and 50 feet away. If the flung creature lands on another creature, the creature it lands on takes the same amount of bludgeoning damage.\nThe creature being landed on can attempt a check (reflex, dc:41, basic) save."
        },
        {
          "id": "v8RLawIxRUNc3rnR",
          "name": "Powerful Blows",
          "kind": "passive",
          "description": "If a guthallath hits with an attack and rolls a natural 19 on the d20 roll, the attack is a critical hit. This has no effect if the 19 would be a failure."
        },
        {
          "id": "pSI2QoLhvn9RpREJ",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:45, basic)"
        },
        {
          "id": "ByItiXXLE0ZzOvm8",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qa0M1ZbNy1NNa2x3",
          "name": "Improved Knockdown",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Uzinvon7QqcS48NH",
          "name": "Improved Push 20 feet",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "Z5lrTod89eL9ROFq",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "zHxfOvUJuKUsqaR4",
              "name": "Haste (Constant)",
              "rank": 3
            },
            {
              "id": "WxXnLt5HTzEPK07R",
              "name": "Truesight (Constant)",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fortune-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "dbElCgziDp8ysxqR",
      "slug": "fortune-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b32322ddaaafe89aa12af3d5af3f67cd0d26eb77b7a82b6af453a924d61ba468",
    "translatableHash": "sha256:1ce982a6952d347a384e2ec2b97e789fbb45dc5a8b9af8aa2b2d0af313ab6859",
    "data": {
      "schemaVersion": 1,
      "name": "Fortune Dragon (Ancient)",
      "level": 19,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Fortune dragons have the innate ability to draw upon the raw magical energies that surround them. They constantly use these magical energies to empower their magical abilities and even their bodies, as the energy can heal wounds. A fortune dragon has a typical build for an arcane dragon, but their bodies sport a striking feature: their treasure. The dragon's nature of drawing upon magic causes coins, gems, and, most notably, magical items to cling to their body like iron drawn to magnets. A dragon constantly pulls magical energies from the items attached to their body and makes use of these energies to cast spells. The magical energies that flow through a fortune dragon constantly flow through the dragon's items as well, and in many cases, the items melt from the heat produced in this process. Fortune dragons are seekers of novel experiences. This desire for originality leads fortune dragons to approach visitors of other ancestries with curiosity, though this initial interest quickly wanes if a visitor lacks exciting qualities.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 43,
      "hitPoints": 300,
      "speedFeet": 80,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 34,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 9,
        "con": 8,
        "int": 10,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "acrobatics": 36,
        "arcana": 37,
        "athletics": 34,
        "crafting": 37,
        "diplomacy": 32,
        "thievery": 36
      },
      "languages": [
        "common",
        "draconic",
        "dwarven",
        "petran"
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
          "bonus": 34,
          "damage": "4d10+15 piercing; 1d6 force",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "ZtXhjfJCNa4QpidO",
          "name": "Claw",
          "bonus": 34,
          "damage": "1d6 force; 4d6+15 piercing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "l85X7HFMtvq5VzZO",
          "name": "Tail",
          "bonus": 32,
          "damage": "1d6 force; 4d10+15 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        }
      ],
      "actions": [
        {
          "id": "RvtzkMW1PTqja0gM",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "TeMGPTAgB6CQgUrI",
          "name": "Aura of Disruption",
          "kind": "passive",
          "description": "120 feet.\nThe dragon radiates disruptive energies that allow them to feed on magic. When a spell is counteracted or disrupted within the aura, the dragon regains one expended spontaneous spell slot and gains 35 temporary Hit Points that last for 1 minute."
        },
        {
          "id": "fLPSxVkoQyjEcOhg",
          "name": "Capture Spell",
          "kind": "reaction",
          "description": "Trigger The dragon succeeds or critically succeeds on a saving throw against a spell\nEffect The dragon attempts to capture a portion of the spell's magic to feed themself. They attempt to counteract the spell (counteract rank 10, counteract modifier [[/r 1d20+37 #Counteract]]{+37}). If successful, the dragon is unaffected by the spell and regains one expended spontaneous spell slot; other subjects are affected by the spell normally."
        },
        {
          "id": "Fd9jpCrOyon1zkTb",
          "name": "Disruptive Breath",
          "kind": "action",
          "description": "The dragon unleashes a spray of magic-disrupting energies that deals 18d6[force|options:area-damage] damage in a @Template[cone|distance:60] (check (reflex, dc:45, basic, options:area-effect) save). Creatures that fail become Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute.\nThe dragon can't use Disruptive Breath again for [[/gmr 1d4 #Recharge Disruptive Breath]]{1d4 rounds}."
        },
        {
          "id": "wlFjZPNirGsmZHEX",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "xZbyHDzzCDYB7MD6",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "Whenever they score a critical hit with a Strike, the dragon chooses to either recharge Disruptive Breath or regain one expended spontaneous spell slot."
        },
        {
          "id": "i9VTUX1hC7QRu6cr",
          "name": "Drain Hoard",
          "kind": "action",
          "description": "Requirements The dragon is within 60 feet of their hoard\nFrequency once per day\nEffect The dragon draws power out of the magic items in their hoard, regaining all their expended spontaneous spell slots."
        },
        {
          "id": "HrKiO0jPCr68aaT0",
          "name": "Share the Wealth",
          "kind": "action",
          "description": "Requirements The dragon's body is covered in riches (this is typically the case when the dragon is first encountered)\nEffect The dragon shakes their body aggressively, sending coins and other riches flying in every direction, dealing 18d10[bludgeoning|options:area-damage] damage with a check (reflex, dc:40, basic, options:area-effect) save to all creatures in a @Template[emanation|distance:50]. The dragon's body is then no longer covered in riches."
        },
        {
          "id": "ZSBangxptZQWQrmm",
          "name": "Treasure Dive",
          "kind": "action",
          "description": "Requirements The dragon's body isn't covered in riches and the dragon is adjacent to their hoard\nEffect The dragon Strides or Burrows through their hoard using their land Speed. They coat themself in coins, magic items, and other treasures. This contact with magical items revitalizes the dragon, causing them to regain one expended spontaneous spell slot.\nThe dragon can move through other creatures while moving in this way. Creatures in the dragon's path, or above it if the dragon Burrows, must succeed at a check (reflex, dc:38) save or be pushed 10 feet (or pushed 20 feet and knocked Prone on a critical failure)."
        }
      ],
      "spellcasting": [
        {
          "id": "2ZLsaPJA5gu2RAy4",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 37,
          "saveDc": 45,
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
              "id": "aTL5hdhAXeigottA",
              "name": "Chain Lightning",
              "rank": 10
            },
            {
              "id": "sNVPlrGHgUKc5ABj",
              "name": "Fireball",
              "rank": 10
            },
            {
              "id": "HCZoZXU257qlMRFY",
              "name": "Force Barrage",
              "rank": 10
            },
            {
              "id": "pMF6IAk67Qnd2DiA",
              "name": "Implosion",
              "rank": 10
            },
            {
              "id": "9LNy0844UeJLnWQe",
              "name": "Quandary",
              "rank": 10
            },
            {
              "id": "eOFpmxHj4Kqtf0ig",
              "name": "Slither",
              "rank": 10
            },
            {
              "id": "AJ1yLigCUPDfpXUg",
              "name": "Unfettered Movement",
              "rank": 10
            },
            {
              "id": "FaVnIgs11nKc3n6Z",
              "name": "Warp Mind",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fortune-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "GdqPoQ2WWnuzEzbu",
      "slug": "fortune-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:303b0b8485dab64c9db9c5732adc5bff3305794b2104fbb4c79c9516d0ab44fd",
    "translatableHash": "sha256:9cb4bcf49c2b2cc3aa986494304e01b020e988d9921b2384901072da33fd1226",
    "data": {
      "schemaVersion": 1,
      "name": "Fortune Dragon (Ancient, Spellcaster)",
      "level": 19,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Fortune dragons have the innate ability to draw upon the raw magical energies that surround them. They constantly use these magical energies to empower their magical abilities and even their bodies, as the energy can heal wounds. A fortune dragon has a typical build for an arcane dragon, but their bodies sport a striking feature: their treasure. The dragon's nature of drawing upon magic causes coins, gems, and, most notably, magical items to cling to their body like iron drawn to magnets. A dragon constantly pulls magical energies from the items attached to their body and makes use of these energies to cast spells. The magical energies that flow through a fortune dragon constantly flow through the dragon's items as well, and in many cases, the items melt from the heat produced in this process. Fortune dragons are seekers of novel experiences. This desire for originality leads fortune dragons to approach visitors of other ancestries with curiosity, though this initial interest quickly wanes if a visitor lacks exciting qualities.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 43,
      "hitPoints": 300,
      "speedFeet": 80,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 34,
        "will": 32
      },
      "abilities": {
        "str": 9,
        "dex": 9,
        "con": 8,
        "int": 10,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "acrobatics": 36,
        "arcana": 37,
        "athletics": 34,
        "crafting": 37,
        "diplomacy": 32,
        "thievery": 36
      },
      "languages": [
        "common",
        "draconic",
        "dwarven",
        "petran"
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
          "bonus": 34,
          "damage": "4d10+15 piercing; 1d6 force",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "ZtXhjfJCNa4QpidO",
          "name": "Claw",
          "bonus": 34,
          "damage": "1d6 force; 4d6+15 piercing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "l85X7HFMtvq5VzZO",
          "name": "Tail",
          "bonus": 32,
          "damage": "1d6 force; 4d10+15 bludgeoning",
          "traits": [
            "magical",
            "reach-25"
          ]
        }
      ],
      "actions": [
        {
          "id": "RvtzkMW1PTqja0gM",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "TeMGPTAgB6CQgUrI",
          "name": "Aura of Disruption",
          "kind": "passive",
          "description": "120 feet.\nThe dragon radiates disruptive energies that allow them to feed on magic. When a spell is counteracted or disrupted within the aura, the dragon regains one expended spontaneous spell slot and gains 35 temporary Hit Points that last for 1 minute."
        },
        {
          "id": "fLPSxVkoQyjEcOhg",
          "name": "Capture Spell",
          "kind": "reaction",
          "description": "Trigger The dragon succeeds or critically succeeds on a saving throw against a spell\nEffect The dragon attempts to capture a portion of the spell's magic to feed themself. They attempt to counteract the spell (counteract rank 10, counteract modifier [[/r 1d20+37 #Counteract]]{+37}). If successful, the dragon is unaffected by the spell and regains one expended spontaneous spell slot; other subjects are affected by the spell normally."
        },
        {
          "id": "Fd9jpCrOyon1zkTb",
          "name": "Disruptive Breath",
          "kind": "action",
          "description": "The dragon unleashes a spray of magic-disrupting energies that deals 18d6[force|options:area-damage] damage in a @Template[cone|distance:60] (check (reflex, dc:45, basic, options:area-effect) save). Creatures that fail become Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute.\nThe dragon can't use Disruptive Breath again for [[/gmr 1d4 #Recharge Disruptive Breath]]{1d4 rounds}."
        },
        {
          "id": "i9VTUX1hC7QRu6cr",
          "name": "Drain Hoard",
          "kind": "action",
          "description": "Requirements The dragon is within 60 feet of their hoard\nFrequency once per day\nEffect The dragon draws power out of the magic items in their hoard, regaining all their expended spontaneous spell slots."
        },
        {
          "id": "HrKiO0jPCr68aaT0",
          "name": "Share the Wealth",
          "kind": "action",
          "description": "Requirements The dragon's body is covered in riches (this is typically the case when the dragon is first encountered)\nEffect The dragon shakes their body aggressively, sending coins and other riches flying in every direction, dealing 18d10[bludgeoning|options:area-damage] damage with a check (reflex, dc:40, basic, options:area-effect) save to all creatures in a @Template[emanation|distance:50]. The dragon's body is then no longer covered in riches."
        },
        {
          "id": "ZSBangxptZQWQrmm",
          "name": "Treasure Dive",
          "kind": "action",
          "description": "Requirements The dragon's body isn't covered in riches and the dragon is adjacent to their hoard\nEffect The dragon Strides or Burrows through their hoard using their land Speed. They coat themself in coins, magic items, and other treasures. This contact with magical items revitalizes the dragon, causing them to regain one expended spontaneous spell slot.\nThe dragon can move through other creatures while moving in this way. Creatures in the dragon's path, or above it if the dragon Burrows, must succeed at a check (reflex, dc:38) save or be pushed 10 feet (or pushed 20 feet and knocked Prone on a critical failure)."
        }
      ],
      "spellcasting": [
        {
          "id": "c1T9AjXCB62QXoKD",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 37,
          "saveDc": 45,
          "spells": [
            {
              "id": "eaKxlPHmkoyS11u9",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "PRK15EMFzmYXLZde",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "NwqfWJwFiIKTWvNT",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "CvPF0deCNVOB7kRt",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "sU0CMvbdSeeimAlv",
              "name": "Item Facade",
              "rank": 1
            },
            {
              "id": "y5USshqecayj8xIA",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "v36ISsyb0rr1mUuM",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "guhZpDnkDFMWIspo",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "S2Eiku7LsTuN8J72",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "DTkJoeTiWM9X3T8f",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "SCTfOlUVQSQau9x6",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "QMGObw6isWOPuZpY",
              "name": "Web",
              "rank": 2
            },
            {
              "id": "3URPMTZM5tPvjbxv",
              "name": "Aqueous Orb",
              "rank": 3
            },
            {
              "id": "iV33dyAyMoBjfMVg",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "9ND0AERYCB0umgJl",
              "name": "Flicker",
              "rank": 4
            },
            {
              "id": "Fdzi5Q5kdJqZzPlk",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "aAcwMFXBfVYeBDD8",
              "name": "Vision of Death",
              "rank": 4
            },
            {
              "id": "hvtsjvq5XEbWddWS",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "rzXRDrJThxBUzDKP",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "kmUH5LU9o8NzRzvY",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "kNW4d5PNstVp4jnN",
              "name": "Cursed Metamorphosis",
              "rank": 6
            },
            {
              "id": "zjN0hN8GHMcFvJg0",
              "name": "Teleport",
              "rank": 6
            },
            {
              "id": "26QgQCyScQA4LRLc",
              "name": "Wall of Force",
              "rank": 6
            },
            {
              "id": "V6zTRd1lLFfrPHI4",
              "name": "Contingency",
              "rank": 7
            },
            {
              "id": "XZ6VY8F1QW26n46o",
              "name": "Energy Aegis",
              "rank": 7
            },
            {
              "id": "G1X9AfsL4UtyzEwi",
              "name": "Planar Palace",
              "rank": 7
            },
            {
              "id": "hx0md6aEYPPT3cwZ",
              "name": "Arctic Rift",
              "rank": 8
            },
            {
              "id": "GImOKEZ5v2t3s9Mc",
              "name": "Disappearance",
              "rank": 8
            },
            {
              "id": "83NfsYVKFB0DOJ6o",
              "name": "Uncontrollable Dance",
              "rank": 8
            },
            {
              "id": "LwAfTHYFDKHdxgac",
              "name": "Detonate Magic",
              "rank": 9
            },
            {
              "id": "unL5HOLh5HN5UQzu",
              "name": "Falling Stars",
              "rank": 9
            },
            {
              "id": "DUOpHBukKkmQKU5K",
              "name": "Phantasmagoria",
              "rank": 9
            }
          ]
        },
        {
          "id": "2ZLsaPJA5gu2RAy4",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 37,
          "saveDc": 45,
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
              "id": "aTL5hdhAXeigottA",
              "name": "Chain Lightning",
              "rank": 10
            },
            {
              "id": "sNVPlrGHgUKc5ABj",
              "name": "Fireball",
              "rank": 10
            },
            {
              "id": "HCZoZXU257qlMRFY",
              "name": "Force Barrage",
              "rank": 10
            },
            {
              "id": "pMF6IAk67Qnd2DiA",
              "name": "Implosion",
              "rank": 10
            },
            {
              "id": "9LNy0844UeJLnWQe",
              "name": "Quandary",
              "rank": 10
            },
            {
              "id": "eOFpmxHj4Kqtf0ig",
              "name": "Slither",
              "rank": 10
            },
            {
              "id": "AJ1yLigCUPDfpXUg",
              "name": "Unfettered Movement",
              "rank": 10
            },
            {
              "id": "FaVnIgs11nKc3n6Z",
              "name": "Warp Mind",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:empyreal-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mRtBMD6vmFEdlgzA",
      "slug": "empyreal-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:108a80f27ff434051c29acfe4a955495396003ce1c816e452b87a3704b0633ff",
    "translatableHash": "sha256:f9286a66f94c7e311510b265767656bf2511d88cc63e2330ded0fee33fea3476",
    "data": {
      "schemaVersion": 1,
      "name": "Empyreal Dragon (Ancient)",
      "level": 19,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "divine",
        "dragon",
        "holy"
      ],
      "description": "The three major celestial planes—Heaven, Nirvana, and Elysium—each have their own respective dragons. Empyreal dragons have a direct connection to Heaven. Using the blessings of Heaven, empyreal dragons protect others and intercede against wickedness. Empyreal dragons are wise, considerate, and compassionate. When speaking with others, empyreal dragons are patient and understanding.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 43,
      "hitPoints": 350,
      "speedFeet": 80,
      "perception": {
        "modifier": 35,
        "senses": [
          "darkvision",
          "lifesense-imprecise-30",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 31,
        "will": 35
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 31,
        "athletics": 35,
        "diplomacy": 31,
        "intimidation": 31,
        "medicine": 35,
        "religion": 32,
        "society": 30
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
        "draconic",
        "empyrean",
        "fey",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "fear-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "unholy 15"
        ]
      },
      "attacks": [
        {
          "id": "PLkCVfc8da1kpFaM",
          "name": "Jaws",
          "bonus": 35,
          "damage": "1d8 spirit; 4d10+16 piercing",
          "traits": [
            "holy",
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "7Q0vXXKMcdqYWR0t",
          "name": "Claws",
          "bonus": 35,
          "damage": "4d8+16 slashing; 1d8 spirit",
          "traits": [
            "agile",
            "holy",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "Dwo2UQS3Y2cbaR0u",
          "name": "Tail",
          "bonus": 33,
          "damage": "1d8 spirit; 4d10+16 bludgeoning",
          "traits": [
            "holy",
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "thc8iQSsjt0P5UbH",
          "name": "Wing",
          "bonus": 26,
          "damage": "1d8 spirit; 3d10+16 slashing",
          "traits": [
            "agile",
            "holy",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "arPvj1DbTMkdSiTB",
          "name": "Lifesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dWRnyH4wHlRK0NV9",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y6w2lBq7sglsX4fS",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LLQTiCQhR3zcH4eU",
          "name": "Divine Deflection",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect Divine power intercedes, preventing some of the damage. The dragon gains resistance 10 to all damage against the triggering attack."
        },
        {
          "id": "S375NGCdok3X6iek",
          "name": "Inspiring Presence",
          "kind": "passive",
          "description": "60 feet.\nThe mere sight of an empyreal dragon motivates other creatures. Creatures within the aura gain a +1 status bonus to saving throws and skill checks. The empyreal dragon can't gain the benefit of their own aura or other actions that use the aura, and they can choose to exclude any creatures from any benefit of the aura or action that uses the aura."
        },
        {
          "id": "vUZ5gWFlcQncu9SL",
          "name": "Direct Halo",
          "kind": "action",
          "description": "The dragon tosses their halo to a square within 90 feet. While the halo is deployed in this way, the dragon loses their inspiring presence aura, and the aura instead emanates from the halo with the same emanation radius. The dragon can Sustain to recall the halo from any distance. The halo is made of pure light—it doesn't occupy space and can't be targeted or destroyed in any way."
        },
        {
          "id": "1UjhkCYjIvtSrb71",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one wing Strike in any order."
        },
        {
          "id": "RnEmahwVd4Kt5m6l",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Spirit Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "OjT0pleNnNeCjfub",
          "name": "Halo Pulse",
          "kind": "action",
          "description": "The dragon chooses one effect to impose on creatures in their inspiring presence aura.\nThe dragon can't use Halo Pulse again for [[/gmr 1d4 #Recharge Halo Pulse]]{1d4 rounds}.\n• Repulsion Each creature must succeed at a check (fortitude, dc:41) save or be pushed until it's no longer in the aura.\n• Restoration (healing, vitality) Each creature recovers 9d8[healing]{9d8 Hit Points}.\n• Restriction (incapacitation, mental) Creatures must succeed at a check (will, dc:41) save or be Slowed 1 (Slowed 2 on a critical failure) while they remain within the aura. Regardless of the result, a creature is then temporarily immune to restriction for 1 minute."
        },
        {
          "id": "kvqqiXW7WeNRoofl",
          "name": "Spirit Breath",
          "kind": "action",
          "description": "The dragon unleashes a blast of holy fire that deals 16d8[spirit|options:area-damage] damage in a @Template[cone|distance:50] (check (reflex, dc:41, basic, options:area-effect) save).\nThe dragon can't use Spirit Breath again for [[/gmr 1d4 #Recharge Spirit Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "BsBGEo42aDLylS80",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 33,
          "saveDc": 41,
          "spells": [
            {
              "id": "dZPExCkBhDp7SQj4",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "hFAMAgaBzuoDkhzV",
              "name": "Holy Light (At Will)",
              "rank": 7
            },
            {
              "id": "8NuQrNNDVUquVrY5",
              "name": "Interplanar Teleport (At Will, Self Only)",
              "rank": 7
            },
            {
              "id": "DNFsu8UpAUYxjHO5",
              "name": "Heal",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:empyreal-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "osscRiyHUXzfv0yz",
      "slug": "empyreal-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9b3e09a8d1213b49beca080eaff9cd51a09715052097e0ffcd53d8724600dfe8",
    "translatableHash": "sha256:c15371f963d3d2b74e177ba9f2c4c69e229712d19289854bffb0d5a1eec4573f",
    "data": {
      "schemaVersion": 1,
      "name": "Empyreal Dragon (Ancient, Spellcaster)",
      "level": 19,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "divine",
        "dragon",
        "holy"
      ],
      "description": "The three major celestial planes—Heaven, Nirvana, and Elysium—each have their own respective dragons. Empyreal dragons have a direct connection to Heaven. Using the blessings of Heaven, empyreal dragons protect others and intercede against wickedness. Empyreal dragons are wise, considerate, and compassionate. When speaking with others, empyreal dragons are patient and understanding.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 43,
      "hitPoints": 350,
      "speedFeet": 80,
      "perception": {
        "modifier": 35,
        "senses": [
          "darkvision",
          "lifesense-imprecise-30",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 31,
        "will": 35
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 31,
        "athletics": 35,
        "diplomacy": 31,
        "intimidation": 31,
        "medicine": 35,
        "religion": 32,
        "society": 30
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
        "draconic",
        "empyrean",
        "fey",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "fear-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "unholy 15"
        ]
      },
      "attacks": [
        {
          "id": "PLkCVfc8da1kpFaM",
          "name": "Jaws",
          "bonus": 35,
          "damage": "1d8 spirit; 4d10+16 piercing",
          "traits": [
            "holy",
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "7Q0vXXKMcdqYWR0t",
          "name": "Claws",
          "bonus": 35,
          "damage": "4d8+16 slashing; 1d8 spirit",
          "traits": [
            "agile",
            "holy",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "Dwo2UQS3Y2cbaR0u",
          "name": "Tail",
          "bonus": 33,
          "damage": "1d8 spirit; 4d10+16 bludgeoning",
          "traits": [
            "holy",
            "magical",
            "reach-25"
          ]
        },
        {
          "id": "thc8iQSsjt0P5UbH",
          "name": "Wing",
          "bonus": 26,
          "damage": "1d8 spirit; 3d10+16 slashing",
          "traits": [
            "agile",
            "holy",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "arPvj1DbTMkdSiTB",
          "name": "Lifesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dWRnyH4wHlRK0NV9",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y6w2lBq7sglsX4fS",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LLQTiCQhR3zcH4eU",
          "name": "Divine Deflection",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect Divine power intercedes, preventing some of the damage. The dragon gains resistance 10 to all damage against the triggering attack."
        },
        {
          "id": "S375NGCdok3X6iek",
          "name": "Inspiring Presence",
          "kind": "passive",
          "description": "60 feet.\nThe mere sight of an empyreal dragon motivates other creatures. Creatures within the aura gain a +1 status bonus to saving throws and skill checks. The empyreal dragon can't gain the benefit of their own aura or other actions that use the aura, and they can choose to exclude any creatures from any benefit of the aura or action that uses the aura."
        },
        {
          "id": "vUZ5gWFlcQncu9SL",
          "name": "Direct Halo",
          "kind": "action",
          "description": "The dragon tosses their halo to a square within 90 feet. While the halo is deployed in this way, the dragon loses their inspiring presence aura, and the aura instead emanates from the halo with the same emanation radius. The dragon can Sustain to recall the halo from any distance. The halo is made of pure light—it doesn't occupy space and can't be targeted or destroyed in any way."
        },
        {
          "id": "OjT0pleNnNeCjfub",
          "name": "Halo Pulse",
          "kind": "action",
          "description": "The dragon chooses one effect to impose on creatures in their inspiring presence aura.\nThe dragon can't use Halo Pulse again for [[/gmr 1d4 #Recharge Halo Pulse]]{1d4 rounds}.\n• Repulsion Each creature must succeed at a check (fortitude, dc:41) save or be pushed until it's no longer in the aura.\n• Restoration (healing, vitality) Each creature recovers 9d8[healing]{9d8 Hit Points}.\n• Restriction (incapacitation, mental) Creatures must succeed at a check (will, dc:41) save or be Slowed 1 (Slowed 2 on a critical failure) while they remain within the aura. Regardless of the result, a creature is then temporarily immune to restriction for 1 minute."
        },
        {
          "id": "kvqqiXW7WeNRoofl",
          "name": "Spirit Breath",
          "kind": "action",
          "description": "The dragon unleashes a blast of holy fire that deals 16d8[spirit|options:area-damage] damage in a @Template[cone|distance:50] (check (reflex, dc:41, basic, options:area-effect) save).\nThe dragon can't use Spirit Breath again for [[/gmr 1d4 #Recharge Spirit Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "MHJXN6jsqlO4l4bI",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 35,
          "saveDc": 41,
          "spells": [
            {
              "id": "D0gVHBgBfkxpcai7",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "2lzNhIoJe9999lBj",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "K1n2XdiRWY2Bg81v",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "7v3SbGWxWjP9PaJc",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "V5rpuab1ZpKaCQxw",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "uITCr1yKC7TIC4Zw",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "El9BYg4iJIfXJtgZ",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "9M3wxqHyIdPHopcO",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "7Su93rL1rOqLQM98",
              "name": "Clear Mind",
              "rank": 2
            },
            {
              "id": "k3QOI590Y9OM3knN",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "s3saQJAPgU513ypB",
              "name": "Everlight",
              "rank": 2
            },
            {
              "id": "0y8ivca1u8vZPSPJ",
              "name": "Share Life",
              "rank": 2
            },
            {
              "id": "ngVjZXFX4tXfLqaC",
              "name": "Sound Body",
              "rank": 2
            },
            {
              "id": "9p5fHitDHqRur7ZC",
              "name": "Bind Undead",
              "rank": 3
            },
            {
              "id": "22TRhbpFPLmvOjkA",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "2NXRhyoMucb1auTF",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "EArmgAkPxegCkR3S",
              "name": "Vital Beacon",
              "rank": 4
            },
            {
              "id": "O9yQg6KV0Q1KHUN9",
              "name": "Breath of Life",
              "rank": 5
            },
            {
              "id": "Cxq6EVHhJdxpeaaq",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "Bd8O8TfhpKgunH5y",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "lgrRyGEFE7BRYyQg",
              "name": "Spirit Blast",
              "rank": 6
            },
            {
              "id": "trzfmjBiyMRmnFUQ",
              "name": "Divine Decree",
              "rank": 7
            },
            {
              "id": "wk6FzPfUuo3xK85b",
              "name": "Energy Aegis",
              "rank": 7
            },
            {
              "id": "vTls3jDegERUYVBY",
              "name": "Planar Seal",
              "rank": 7
            },
            {
              "id": "0UnD8n8XDMy33NHP",
              "name": "Regenerate",
              "rank": 7
            },
            {
              "id": "belJyX4lpgkgkPdO",
              "name": "Sunburst",
              "rank": 7
            },
            {
              "id": "UIgWh4D3jJYUqpE9",
              "name": "Divine Inspiration",
              "rank": 8
            },
            {
              "id": "BHCMWNc7YzuEcD91",
              "name": "Moment of Renewal",
              "rank": 8
            },
            {
              "id": "z92zjXTCWzgoq6IB",
              "name": "Overwhelming Presence",
              "rank": 9
            }
          ]
        },
        {
          "id": "BsBGEo42aDLylS80",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 33,
          "saveDc": 41,
          "spells": [
            {
              "id": "dZPExCkBhDp7SQj4",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "hFAMAgaBzuoDkhzV",
              "name": "Holy Light (At Will)",
              "rank": 7
            },
            {
              "id": "8NuQrNNDVUquVrY5",
              "name": "Interplanar Teleport (At Will, Self Only)",
              "rank": 7
            },
            {
              "id": "DNFsu8UpAUYxjHO5",
              "name": "Heal",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:yamaraj",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "00uNOPsU5VognIcB",
      "slug": "yamaraj",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c6576776ae4300c9bd98d4f89a6cf607514e1c074e5f18f7416bf8f19334853d",
    "translatableHash": "sha256:782d026239db9dae9b44a750dd65c353ed78adb8a8f7758734669d8c9d11d321",
    "data": {
      "schemaVersion": 1,
      "name": "Yamaraj",
      "level": 20,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "monitor",
        "psychopomp"
      ],
      "description": "The greatest judges among the psychopomps are yamarajes, whose wisdom is legendary and whose edicts are unappealable except to ushers or Pharasma herself. A yamaraj resembles an immense dragon with dark, feathery scales and an emotionless, dispassionate gaze behind a feathered mask. When not serving as the senior magistrates, lords, and generals of the Boneyard, yamarajes pursue highly individualistic hobbies, such as gardening or literature.\nPsychopomps are guardians and shepherds of the dead in the Boneyard, the vast plane of graves where mortal souls are judged and sent on to their eternal rewards or damnations. Psychopomps ensure that the dead come to terms with their transition from mortality and are properly sorted into the appropriate afterlife. They also protect souls from being preyed upon by supernatural predators. Nearly all psychopomps wear masks, especially when they're likely to be interacting with mortals, although the types of masks they wear are as varied as the psychopomps themselves. The courts of the Boneyard preside in Requian, a somber yet melodic language spoken slowly with various tonal shifts.\nMany psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.",
      "armorClass": 45,
      "hitPoints": 375,
      "speedFeet": 35,
      "perception": {
        "modifier": 37,
        "senses": [
          "darkvision",
          "lifesense-240",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 33,
        "reflex": 31,
        "will": 35
      },
      "abilities": {
        "str": 10,
        "dex": 7,
        "con": 7,
        "int": 10,
        "wis": 7,
        "cha": 6
      },
      "skills": {
        "acrobatics": 33,
        "athletics": 38,
        "deception": 34,
        "diplomacy": 34,
        "intimidation": 36,
        "occultism": 38,
        "religion": 38,
        "society": 38
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
          "disease",
          "electricity"
        ],
        "resistances": [
          "void 20",
          "poison 20"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2J8nRu7ryhdxrn6Q",
          "name": "Jaws",
          "bonus": 38,
          "damage": "4d8+18 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "vOhew2ogdaZmv4TY",
          "name": "Claw",
          "bonus": 38,
          "damage": "4d4+18 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "4PAeJHUBsggCTLYw",
          "name": "Tail",
          "bonus": 38,
          "damage": "4d10+18 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "GZeUcgFbUA7B68BW",
          "name": "Telepathy 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0UKsJtM3fEth21iR",
          "name": "Lifesense 240 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QB6MLb6aO9rvCPbS",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9qk6mNAYWoeUyyd8",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qfAGiyqMgrNFUoSw",
          "name": "Fast Healing 20",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0s0zoTqBFyl1ZTjC",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:39, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "1ENGsx3BESdgdHnk",
          "name": "Lightning Drinker",
          "kind": "passive",
          "description": "Whenever a yamaraj would take electricity damage if not for its immunity, its fast healing increases to 40 on its next turn.\nDuring that turn, if it uses Beetle Breath, the beetles deal 2d12[electricity]{2d12 additional electricity damage}."
        },
        {
          "id": "VKysBYdqHBzZ3aOg",
          "name": "Beetle Breath",
          "kind": "action",
          "description": "The yamaraj breathes a blast of beetles in a @Template[cone|distance:50] that deals 14d8[slashing,4d8[persistent,slashing]|options:area-damage]{14d8 slashing damage and 4d8 persistent slashing damage} to creatures in the area with a check (reflex, dc:42, options:area-effect,damaging-effect) save.\nIt can't use Beetle Breath again for [[/gmr 1d4 #Recharge Beetle Breath]]{1d4 rounds}.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Sickened 1.\nFailure The creature takes full damage and is Sickened 2.\nCritical Failure The creature takes double damage and is Sickened 3."
        },
        {
          "id": "nEZNMODnNpwrnUPC",
          "name": "Final Judgment",
          "kind": "passive",
          "description": "A yamaraj's Manifestation spells are used only to pronounce judgment, typically either to restore a dead or destroyed creature to life, bind a creature to the Boneyard, or banish a creature from the Boneyard."
        },
        {
          "id": "LMv9Jl8QyuoKhMpw",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "A yamaraj's Strikes affect incorporeal creatures with the effects of a Ghost Touch property rune and deal 3d6[void] damage to living creatures and 3d6[vitality] damage to undead."
        },
        {
          "id": "WleXuHzXfn7II29b",
          "name": "Yamaraj Venom",
          "kind": "passive",
          "description": "While a creature is clumsy from this poison, it is Doomed with the same value;\nSaving Throw check (fortitude, dc:42)\nMaximum Duration 10 rounds\nStage 1 3d8[poison] damage and Clumsy 1 (1 round)\nStage 2 5d8[poison] damage and Clumsy 2 (1 round)\nStage 3 7d8[poison] damage and Clumsy 3 (1 round)"
        },
        {
          "id": "s4eMY3meCcZpGDrL",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "FhV61jMMGaGgOnmc",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 36,
          "saveDc": 44,
          "spells": [
            {
              "id": "Spjq31pxaogHGJyr",
              "name": "Mind Probe (At will)",
              "rank": 5
            },
            {
              "id": "i3OPnBlqnTj1BNFQ",
              "name": "Translocate (At will)",
              "rank": 5
            },
            {
              "id": "N21nhQea6LBlzdUE",
              "name": "Chain Lightning",
              "rank": 8
            },
            {
              "id": "OuOkdbFCbzXkr4uF",
              "name": "Dispel Magic",
              "rank": 8
            },
            {
              "id": "EzR8P4VadQxtDKZh",
              "name": "Wall of Force",
              "rank": 8
            },
            {
              "id": "szpTTglSRPxKxqrf",
              "name": "Harm",
              "rank": 9
            },
            {
              "id": "IOSpy1IjKCTuzppo",
              "name": "Heal",
              "rank": 9
            },
            {
              "id": "KoiqbGetyRjJtQSY",
              "name": "Seize Soul",
              "rank": 9
            },
            {
              "id": "p2QWDEQDpsCG0AQ2",
              "name": "Spirit Blast",
              "rank": 9
            },
            {
              "id": "xj7T4CUAaXOaBCCj",
              "name": "Wails of the Damned",
              "rank": 9
            },
            {
              "id": "kFY2qLfymd9D70To",
              "name": "Manifestation",
              "rank": 10
            },
            {
              "id": "RiSiIOgt4pS0zcPS",
              "name": "Revival",
              "rank": 10
            },
            {
              "id": "9qyTnY9xZaDpBznS",
              "name": "Truesight (Constant)",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:norn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "8w0LwQHkip8nzFo0",
      "slug": "norn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f7da05bd278a3f90029f44e9c1ee1aaabf0bdc9e3ba9453033e98778fa7b07d7",
    "translatableHash": "sha256:d06b96965c471ce5f1e73752def2c6f62bddc2a5c0936e29de0f9ef19fcd269a",
    "data": {
      "schemaVersion": 1,
      "name": "Norn",
      "level": 20,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "fey"
      ],
      "description": "Ancient beyond imagining, norns are powerful fey women who hold in their hands the physical manifestation of fate and destiny in the form of golden thread. They watch over all life, intervening with reluctance when called upon—or with a vengeance when the strands of fate are twisted and abused by lesser beings. They cut imposing figures, standing 14 feet tall and weighing 800 pounds.\nNorns' relationship with the Eldest of the First World is complex. Many among norns serve Magdh the Three, the triune Eldest who some norns believe to be the first norn triumvirate bound together into one entity, as Magdh has three bodies: a Maiden, a Mother, and a Matriarch. Magdh claims to be watching the threads of fate for some ominous prophesied cataclysm, and in addition to assisting in her divinations, Magdh expects the norns who serve her to follow her cryptic commands to help nudge the future away from the brink. However, norns are powerful beings in their own right, themselves capable of granting divine power, and many balk at serving the enigmatic demigod. These norns find the other Eldest even more alien and challenging to interact with, for they believe that while the Eldest wield great power, even these powerful beings should not be granted leave to meddle with fate as much as they desire.\nWhile even the weakest of the Eldest could destroy an unaffiliated norn with ease, they tend to obey the proclamations and judgments of norns when they are spoken. These norns, for their part, use their perceived neutrality judiciously. They know better than to issue too many demands to the Eldest, lest the capricious demigods grow frustrated. And so the balance of power remains tenuous between unaffiliated norns and the Eldest, as it has for eons. Norns know that it's merely a matter of time before the Eldest lose their respect for this tradition and start acting entirely as they please, despite norns' best efforts to rein in their most disruptive actions.\nFollowers of Fate\nIn the mortal Universe, some mortals worship norns as deities, while others, especially witches and bards, admire them as patrons or muses. Those who uphold norns as deities are known as Followers of Fate. Norns neither discourage this veneration nor go out of their way to support such worship. Clerics who venerate norns might worship a specific norn or norn triumvirate, or all norns as a whole, but they gain the same benefits regardless of their choice. The religious symbol of Followers of Fate is a pair of shears cutting a golden thread, and their areas of concern are destiny, fate, and the aging process.",
      "armorClass": 46,
      "hitPoints": 375,
      "speedFeet": 35,
      "perception": {
        "modifier": 41,
        "senses": [
          "greater-darkvision",
          "lifesense-120",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 34,
        "reflex": 30,
        "will": 38
      },
      "abilities": {
        "str": 7,
        "dex": 6,
        "con": 6,
        "int": 6,
        "wis": 10,
        "cha": 7
      },
      "skills": {
        "crafting": 36,
        "deception": 35,
        "intimidation": 37,
        "medicine": 38,
        "occultism": 34,
        "performance": 31,
        "religion": 34
      },
      "languages": [
        "common",
        "fey",
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "off-guard",
          "void"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 20"
        ]
      },
      "attacks": [
        {
          "id": "giVESjdTpw33NygU",
          "name": "Norn Shears",
          "bonus": 38,
          "damage": "4d4+15 slashing; 6d6 void",
          "traits": [
            "deadly-2d8",
            "magical",
            "reach-10",
            "versatile-p"
          ]
        },
        {
          "id": "6oTpSA3IXew7MulO",
          "name": "Hand Of Fate",
          "bonus": 38,
          "damage": "4d10+15 void",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "avWzQnKIoQnTzxDr",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "OLwbn1vkUwxatzY5",
          "name": "Lifesense 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eQAeRO9fMIqYp05Q",
          "name": "Sense Fate",
          "kind": "passive",
          "description": "A norn automatically rolls a 20 when she rolls initiative."
        },
        {
          "id": "rkxRbGfC97VpayNy",
          "name": "Triumvirate",
          "kind": "passive",
          "description": "This functions as the Coven ability, except only norns can join a triumvirate, and it functions only as long as exactly three norns are part of the triumvirate. A triumvirate grants the following spells: Cataclysm, Foresight, Manifestation(once per day), Pinpoint, and Revival."
        },
        {
          "id": "K5BMaVGszyeB9sm8",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "guUOsE03Ck5JEoBu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3LE8g6DKV4fZYrQq",
          "name": "Regeneration 20 (Deactivated by Cold Iron)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "D0L9Y3ZIku07uMOk",
          "name": "Fated",
          "kind": "passive",
          "description": "When a creature is subject to a fortune effect from a norn and a misfortune effect from any source other than a norn (or vice versa), the norn's effect automatically counteracts the other effect and then takes place normally, rather than the two effects canceling each other out. If both the fortune and misfortune effect are from a norn, then the two cancel each other out as normal. At the GM's discretion, powerful entities related to fate or luck, like Desna, Magdh, or Pharasma, can't have their effects negated by this ability."
        },
        {
          "id": "TNAO4qk6h9SrlrOP",
          "name": "Sever Fate",
          "kind": "passive",
          "description": "When a norn deals void damage with a Strike, she regains 10[healing]{10 Hit Points}. The target must succeed at a check (fortitude, dc:39) save or become Drained 1 (Drained 2 on a critical failure).\nFurther void damage dealt by the norn increases the drained condition value by 1 on a failed save (or by 2 on a critical failure), to a maximum of Drained 4."
        },
        {
          "id": "EPXehWRhcO5caYov",
          "name": "Shift Fate",
          "kind": "reaction",
          "description": "Trigger A creature within 120 feet attempts a saving throw\nEffect The creature rolls the saving throw twice, and then the norn decides which result applies. If the norn chooses the lower roll, this is a misfortune effect; if she chooses the higher roll, it's a fortune effect; if they're the same, she decides which trait to apply."
        },
        {
          "id": "P92CxO5qbGv9LPbu",
          "name": "Snip Thread",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The norn produces a golden thread linked to the fate of a creature within 100 feet of her, then snips it short with her shears. The target takes 100[void] damage (check (fortitude, dc:42, basic) save). If the target is reduced to 0 Hit Points from this damage, the thread is completely severed and the creature dies immediately.\nA creature slain by Snip Thread can't be restored to life except by a Wish ritual or similarly powerful magic; or by divine intervention. Regardless of the outcome of their saving throw, a creature targeted by Snip Thread then becomes temporarily immune for 24 hours.\nThe norn can't use Snip Thread again for [[/gmr 1d4 #Recharge Snip Thread]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "uGwzUQno6xI8LuEU",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 34,
          "saveDc": 42,
          "spells": [
            {
              "id": "8yB7bnmUbCUMLm8V",
              "name": "Detect Magic (Constant)",
              "rank": 1
            },
            {
              "id": "8Cyh5kgEm1sJGjci",
              "name": "Dispel Magic",
              "rank": 7
            },
            {
              "id": "MffmA8n8KSdxy46d",
              "name": "Read Omens",
              "rank": 7
            },
            {
              "id": "tu0Zgl6Ep47ewufM",
              "name": "Spellwrack",
              "rank": 7
            },
            {
              "id": "wBvX6w6QASgeRd0w",
              "name": "Migration",
              "rank": 8
            },
            {
              "id": "mqpHtxd7grIvcKXj",
              "name": "Quandary",
              "rank": 8
            },
            {
              "id": "Zbh1aD6SkPkZB1jH",
              "name": "Execute",
              "rank": 9
            },
            {
              "id": "ykm3PUIuMkRUG4JF",
              "name": "Phantasmagoria",
              "rank": 9
            },
            {
              "id": "XRFXDIEpOdtX06EH",
              "name": "Retrocognition",
              "rank": 9
            },
            {
              "id": "6QdOZiSxD8oa7zc0",
              "name": "Freeze Time",
              "rank": 10
            },
            {
              "id": "ZW4n08Sqqo86nLCM",
              "name": "Hidden Mind (Constant)",
              "rank": 10
            },
            {
              "id": "naZaipxgMGhdPCYa",
              "name": "Truesight (Constant)",
              "rank": 10
            },
            {
              "id": "gARMVLw91Mt9I16C",
              "name": "Truespeech (Constant)",
              "rank": 10
            }
          ]
        },
        {
          "id": "cLCMWdwhY0w3KeZN",
          "name": "Triumvirate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 34,
          "saveDc": 42,
          "spells": [
            {
              "id": "INpdI3kieMgE9xaY",
              "name": "Augury",
              "rank": 5
            },
            {
              "id": "dqOPay67f79vRpqd",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "zYaGkvMqKoqNk93N",
              "name": "Clairaudience",
              "rank": 5
            },
            {
              "id": "oGi6NnVkk6qE4RNn",
              "name": "Clairvoyance",
              "rank": 5
            },
            {
              "id": "HcYjMI285WD5XQl6",
              "name": "Dream Message",
              "rank": 5
            },
            {
              "id": "Qfj8PDDqDYKyPGQE",
              "name": "Illusory Disguise",
              "rank": 5
            },
            {
              "id": "phyfMb2xBnMAzkvn",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "wI6nHk4BhJlggg8V",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "sSQqw25fqNA1aZQc",
              "name": "Talking Corpse",
              "rank": 5
            },
            {
              "id": "XWWSkHUBM2RWIWNb",
              "name": "Cursed Metamorphosis",
              "rank": 8
            },
            {
              "id": "s3xky2174Vuhd6Vz",
              "name": "Pinpoint",
              "rank": 8
            },
            {
              "id": "10VvTpISG24koyVB",
              "name": "Foresight",
              "rank": 9
            },
            {
              "id": "LOIueQPLAZR48Foa",
              "name": "Cataclysm",
              "rank": 10
            },
            {
              "id": "URYaFPLkQcPg76zY",
              "name": "Manifestation",
              "rank": 10
            },
            {
              "id": "tR3bAd4LjSstJdm8",
              "name": "Revival",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:nessari",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BlTEvlCUKPOfBYMR",
      "slug": "nessari",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:075f3a6d8a8b24b498ad99cc78b204b56a9d47fa87355239e98dd54ef20a2d91",
    "translatableHash": "sha256:3a00734e3da53d72ecb3e2cf748f8c76ea254eb7aa9e307e975d40e8d079d67c",
    "data": {
      "schemaVersion": 1,
      "name": "Nessari",
      "level": 20,
      "rarity": "common",
      "size": "large",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "When an army of devils invades to bathe a region in bloodshed and hellfire, it is likely that one of the nessaris masterminded the incursion. Cunning, powerful, and ruthless, nessaris often serve the archdevils directly. They rule infernal duchies, subjugate mortal worlds, and usurp infernal rivals using unparalleled despotism and calculated ferocity. To realize their tyrannical machinations, nessaris claim mortal souls that they corrupt into ort servants, which can then be shaped and transformed through infernal manipulation into the terrifying devils that form Hell's formidable legions. They often select the most wicked and vicious orts for their armies, drawing upon these lesser devils' depravity during powerful magical ceremonies to create hideous and terrifying abominations that can cow and eviscerate the nessari's enemies.\nEach nessari is crafted deep within the nightmarish bowels of Nessus, the ninth layer of Hell, to serve the whims of archdevils and infernal dukes. Those nessaris that don't leave Nessus to command infernal legions in the upper layers of Hell often form the courts of Hell's elite, gathering cronies and sects that shape Hell's political landscape through subterfuge and manipulation. But many nessaris see themselves as living embodiments of hellfire, the all-encompassing wrath of Hell, and thus prefer to dwell in realms consumed by fire. In Avernus, Dis, Malebolge, Nessus, and Phlegethon, nessaris build vast citadels of brimstone wreathed in flame to lord over.\nRather than being above the constant power struggles of the diabolic ranks, nessaris are in the thick of it. Even apocalyptic schemes to conquer or despoil mortal worlds usually begin from a desire to claw a single rank up the immortal hierarchy of Hell. For this reason, the best, yet also most dangerous, ally against a nessari is the nessari next to them.\nNessaris tower over other devils, standing at least 16 feet tall, weighing over 1,000 pounds, and brandishing wingspans in excess of 20 feet.\nInfernal Dukes\nElite members of Hell's political infrastructure and leadership hierarchy, the dukes of Hell are chosen from among the most tyrannical, oppressive, and conniving devils. While not all infernal dukes are nessaris, a nessari's natural disposition toward conquest and oppression often makes them an ideal candidate for this position. To create an infernal duke, adjust the nessari to be between 21st and 25th level. Because of their physical prowess, manipulative nature, and powerful spellcasting abilities, infernal dukes make excellent villains for long-running campaigns.\nMasters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks.\nEvery devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly orts perform subservient labor to more powerful and specialized devils, such as infantry and contract devils, while the greatest nessaris command entire infernal armies.\nAsmodeus stands at the apex of the structure he created, but the layers below him are marked by a constant jockeying for position. Most diabolic plans ultimately serve to improve the schemer's place in the hierarchy.",
      "armorClass": 46,
      "hitPoints": 335,
      "speedFeet": 35,
      "perception": {
        "modifier": 37,
        "senses": [
          "greater-darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 37,
        "reflex": 32,
        "will": 35
      },
      "abilities": {
        "str": 9,
        "dex": 8,
        "con": 9,
        "int": 8,
        "wis": 9,
        "cha": 8
      },
      "skills": {
        "acrobatics": 34,
        "arcana": 32,
        "athletics": 33,
        "deception": 39,
        "diplomacy": 34,
        "intimidation": 39,
        "religion": 37,
        "society": 36,
        "stealth": 34
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 15 except silver",
          "poison 15"
        ],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "mh9LAEOA50HTVL1T",
          "name": "Jaws",
          "bonus": 40,
          "damage": "4d10+17 piercing",
          "traits": [
            "magical",
            "poison",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "HvKkuW09C9ugdKrX",
          "name": "Claw",
          "bonus": 38,
          "damage": "4d6+17 slashing; 2d6 spirit",
          "traits": [
            "agile",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "J3HCGhXaQnSxfglZ",
          "name": "Tail",
          "bonus": 36,
          "damage": "4d10+17 bludgeoning",
          "traits": [
            "magical",
            "reach-10",
            "unholy"
          ]
        },
        {
          "id": "NUuZmLjmz4NPx29q",
          "name": "Wing",
          "bonus": 36,
          "damage": "4d6+17 slashing",
          "traits": [
            "magical",
            "reach-15",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "KLX51VJomJOpNAgE",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "yk9pyF9iVrRoe307",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "D5HDqkSWA0AZ7YAh",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "uDEIHmI6TZbQLzHX",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tzsc7ldZ2eR2z0XM",
          "name": "Regeneration 30 (Deactivated by Holy)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tKTCH6a5g78miSHu",
          "name": "Commander's Aura",
          "kind": "passive",
          "description": "100 feet.\nCommanded or allied unholy creatures in the aura of lower level than the nessari gain a +1 circumstance bonus to attack rolls, damage rolls, AC, saves, and skill checks.\nEffect: Commander's Aura"
        },
        {
          "id": "W6dNim4KEjBzAlMj",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "20 feet. check (will, dc:42, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "Vuf9BuaOfWRDE1dg",
          "name": "Reactive Strike (Special)",
          "kind": "reaction",
          "description": "The nessari can make a Reactive Strike when a creature within reach uses a concentrate action, in addition to the usual trigger. The devil can disrupt triggering concentrate actions, and they disrupt actions on any hit, not only a critical hit."
        },
        {
          "id": "lgo6Chb44AWipQBi",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d10+17)[bludgeoning], check (fortitude, dc:43, basic)"
        },
        {
          "id": "I2ll4xGsFEeBgdRL",
          "name": "Fast Swoop",
          "kind": "action",
          "description": "The nessari Flies and makes a wing Strike at any point during its movement."
        },
        {
          "id": "5CiCYm71I6kB4UPC",
          "name": "Masterful Quickened Casting",
          "kind": "passive",
          "description": "Frequency once per round\nEffect If the nessari's next action is to cast an 8th-rank or lower innate spell, reduce the number of actions to cast it by 1 (minimum 1 action)."
        },
        {
          "id": "6THNxAaI4CZSj0oW",
          "name": "Nessari Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:43)\nMaximum Duration 10 rounds\nStage 1 6d6[poison] damage and Drained 1 (1 round)\nStage 2 7d6[poison] damage and Drained 2 (1 round)\nStage 3 8d6[poison] damage and Drained 3 (1 round)"
        },
        {
          "id": "YpgcfJpD1jMhcu1X",
          "name": "Shape Devils",
          "kind": "passive",
          "description": "The nessari reshapes a large number of orts within a 600-foot emanation into more powerful devils to swell Hell's legions. The nessari must have available the number of orts listed on the table below.\nDevil Level | Number of Orts |\n4 or below | 4 |\n5-6 | 8 |\n7-8 | 16 |\n9-10 | 32 |\n11-12 | 64 |\n13-14 | 128 |\n15-16 | 256 |\n17-18 | 512 |\n19-20 | 1.024 |\nThe nessari can shape 100 orts per day, to a maximum of 1,100 orts in 11 days. Devils created in this way are in thrall to the nessari and follow its orders, with the exception of created nessaris or other devils of similar power, which are always independent. As a result, few nessaris choose to create peers. At the end of the Shape Devils activity, the nessari attempts an incredibly hard check (religion) check of the desired devil's level, with results as follows.\nCritical Success The nessari shapes two devils from the massed orts instead of one.\nSuccess The nessari shapes a devil of the desired type and level.\nFailure The devil shaped from the orts is 2 levels lower than the intended devil.\nCritical Failure The nessari fails to shape any devils and draws the ire of an archdevil for its waste of resources."
        },
        {
          "id": "uT4KswZKvsTixIVs",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "IsRnnfl27oJF1UGY",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 34,
          "saveDc": 42,
          "spells": [
            {
              "id": "h4xUhqjIMpZJD3gs",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "2E9tmCVInGm6evcP",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "ZSNdsMrtDj0biKjg",
              "name": "Dispel Magic (At Will)",
              "rank": 8
            },
            {
              "id": "fLRkrvxgSaPQJvJb",
              "name": "Divine Decree (At Will)",
              "rank": 8
            },
            {
              "id": "CMnDUZ4PLSAkVFTy",
              "name": "Fireball (At Will)",
              "rank": 8
            },
            {
              "id": "mVVuQxeU612W5yeh",
              "name": "Scrying",
              "rank": 8
            },
            {
              "id": "BFXx4LFb1xSl92xx",
              "name": "Truesight (Constant)",
              "rank": 8
            },
            {
              "id": "j6zLd6qi8lJefGFJ",
              "name": "Wall of Fire (At Will)",
              "rank": 8
            },
            {
              "id": "coAz3ihocOuPEwR1",
              "name": "Seize Soul (At Will)",
              "rank": 9
            },
            {
              "id": "5Da61QI56W0gDXHL",
              "name": "Falling Stars",
              "rank": 10
            },
            {
              "id": "TY5NM4GqJ1QYCO55",
              "name": "Manifestation",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pleroma",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "HLM55InRGOAUkqoH",
      "slug": "pleroma",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ba6598e98c55a912723ce9454063b54ff3b5ee063ca3ad8fd9cac1014348843a",
    "translatableHash": "sha256:a8c260169f3bc70a348a05abdcc41f8039bfb1c5935d8d55e8e749c6ba6a2d95",
    "data": {
      "schemaVersion": 1,
      "name": "Pleroma",
      "level": 20,
      "rarity": "common",
      "size": "large",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "Among the most powerful of all the true aeons, pleromas are the ultimate manifestation of the duality of creation and destruction. Their physical manifestation is a constant state of flux between these two extremes; their forms are draped in a hooded, shifting cloak of night black where galaxies and other celestial objects flit in and out of existence at every moment, as if depicting the constant life, death, and rebirth of a miniature, self-contained universe.\nPleromas see the multiverse as both eternal and cyclical, doomed and malleable, ending only if these cycles ever become unbalanced. They believe the current Convergence is necessary to obtain this essential balance, and act to ensure that the grand design of the Monad is carried out to the smallest detail.\nAeons have always been the caretakers of reality and defenders of the natural order of balance. Each type of aeon takes on some form of duality in its manifestation and works either to shape the multiverse within the aspects of this duality in some way, or to correct imbalances to the perfect order of existence. Aeons' machinations can raise a nation, raze it, or restore it from ruin. Their reasons are their own, and they rarely share their motivations with others—through their strange envisioning mode of communication, they simply create the results they insist are necessary to maintain the balance of the multiverse.\nAs a result of recent shifts in reality, aeons have begun to reassert a presence in the perfect planar city of Axis. To aeons, this is merely the latest in a recurring cycle, albeit one that mortals have not yet borne witness to. Aeons have a name for this cyclic return, in which they welcome their industrious axiomite brethren back to their fold: the Convergence. At the onset of the Convergence, a council of pleroma aeons appeared in the Eternal City of Axis, where they revealed that axiomites were wayward aeons, split off long ago to pursue the act of creation. With the latest cycle of change, it was time for axiomites—and their mortal creations and kin—to rejoin the aeon cause. While most axiomites fell in line, realizing perhaps on a fundamental level of reality that what the aeons said was the truth, some refused to heed the call and waited for the wrath of the aeons. That wrath has yet to come. The dual-natured aeons have responded to those who have declined in confusing ways. With some they treat and even bargain, while a handful of others they have destroyed, and a few have been exterminated by the axiomites. But most of these quiet insurgents they leave alone, allowing these axiomites to continue to create in peace. How—or if—this Convergence will end is as little understood as aeons themselves.",
      "armorClass": 45,
      "hitPoints": 335,
      "speedFeet": 0,
      "perception": {
        "modifier": 37,
        "senses": [
          "darkvision",
          "lifesense-imprecise-120",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 31,
        "will": 37
      },
      "abilities": {
        "str": 6,
        "dex": 7,
        "con": 6,
        "int": 8,
        "wis": 9,
        "cha": 6
      },
      "skills": {
        "acrobatics": 33,
        "arcana": 38,
        "deception": 34,
        "diplomacy": 34,
        "occultism": 38,
        "religion": 39,
        "stealth": 35
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "vitality",
          "void"
        ],
        "resistances": [],
        "weaknesses": [
          "spirit 20"
        ]
      },
      "attacks": [
        {
          "id": "zySTGNLYlP6ZsU1E",
          "name": "Touch of Creation",
          "bonus": 36,
          "damage": "5d8+16 vitality",
          "traits": [
            "agile",
            "magical",
            "vitality"
          ]
        },
        {
          "id": "YUTApeXyU0NxK6eo",
          "name": "Touch of Destruction",
          "bonus": 36,
          "damage": "5d8+16 void",
          "traits": [
            "agile",
            "magical",
            "void"
          ]
        }
      ],
      "actions": [
        {
          "id": "99Cd71z8VqlNcRlF",
          "name": "Envisioning",
          "kind": "passive",
          "description": "100 feet\nA pleroma can communicate mentally with any creatures in the aura using wordless psychic projections. They don't need to share a language, though the aeon's meaning to non-aeons can be vague and is often mysterious. An aeon can use this ability to communicate flawlessly with any other aeon on the same plane as itself."
        },
        {
          "id": "W7QEmXoDcc9c87sk",
          "name": "Lifesense 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9kBKtuPpfmaD9ryP",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "2byLKfdbwYaWk0dH",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3M67E95wIHzmtnck",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "4lmUV3jKmzitWpqc",
          "name": "Regeneration 20 (Deactivated by Spirit)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "n8BVjvUXXVJkp5pA",
          "name": "Reality Twist",
          "kind": "reaction",
          "description": "Trigger The pleroma critically fails a saving throw\nEffect The critical failure becomes a normal failure."
        },
        {
          "id": "U2tR8Q1CtVF8rXKj",
          "name": "Generate Sphere",
          "kind": "action",
          "description": "The pleroma manifests a 2-foot-diameter sphere of energy—either a white sphere of creation that hovers above their left hand or a black sphere of oblivion above their right. This action has the vitality trait for a sphere of creation or the void trait for a sphere of oblivion. A sphere vanishes after 1 minute, when it is more than 300 feet from the pleroma, or when the pleroma Generates a Sphere of that type again. A sphere of oblivion winks out of existence when it vanishes, but a sphere of creation explodes in blinding light—each creature in a @Template[emanation|distance:30] must succeed at a check (fortitude, dc:43) save or be permanently Blinded. This is a light effect."
        },
        {
          "id": "HkdKeka0PlRbo6fe",
          "name": "Propel Sphere",
          "kind": "action",
          "description": "Requirements The pleroma has a sphere of creation or sphere of oblivion active\nEffect The pleroma makes one of its spheres fly 10 feet in any direction, ignoring difficult terrain and greater difficult terrain. A sphere of creation creates new matter in its path, which the pleroma can have manifest as normal terrain, difficult terrain, greater difficult terrain, or a cube of solid mater (such as clay, wood, or stone). A sphere of oblivion destroys unattended objects it touches, though larger objects are destroyed at a rate of one 10-foot cube per round of contact. The sphere can enter the space of a creature; when it does, the creature takes 20d6 damage with a check (fortitude, dc:43) save.\nThis is an incapacitation effect.\nSuccess The creature takes no damage and is pushed out of the sphere to the nearest open space of the GM's choice.\nFailure The creature takes full damage; this is 20d6[vitality]{vitality} damage for a sphere of creation or 20d6[void]{void} damage for a sphere of oblivion, but it can damage any type of creature regardless of its normal immunities. The creature is then pushed out of the sphere as on a success. A creature reduced to 0 HP is slain instead of being pushed out, either merged with new matter for a sphere of creation or completely destroyed for a void of oblivion; the creature can be restored only via a Wish ritual or similarly powerful effect. This is a death effect.\nCritical Failure As failure, but the creature takes double damage."
        }
      ],
      "spellcasting": [
        {
          "id": "dzWvSinCbMaYI4A9",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 39,
          "saveDc": 47,
          "spells": [
            {
              "id": "0kO0Wih3bgTar602",
              "name": "Create Water (At Will)",
              "rank": 1
            },
            {
              "id": "qtvcqkQX5JiEKopv",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "5f147I1RaUAn8ntc",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "0NAnUBf5aNLZuTmY",
              "name": "Shape Wood (At Will)",
              "rank": 2
            },
            {
              "id": "Pm2TidU4DVECCKki",
              "name": "Hypercognition (At Will)",
              "rank": 3
            },
            {
              "id": "1SbAsNj7buR1Ob6N",
              "name": "Create Food (At Will)",
              "rank": 4
            },
            {
              "id": "oii6iYCEMBr2f8E4",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "623mvPE6zCtezQBB",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "mV2TcbImArncYN8J",
              "name": "Creation (At Will)",
              "rank": 5
            },
            {
              "id": "OsCl8TNW7TXzhPbv",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "b58s8ffCdqyjwc5W",
              "name": "Retrocognition",
              "rank": 7
            },
            {
              "id": "NYw2ijQmvPFPlExy",
              "name": "Disintegrate",
              "rank": 8
            },
            {
              "id": "tDQB5z1MMFLyxoeD",
              "name": "Truesight (Constant)",
              "rank": 8
            },
            {
              "id": "fwtXpWk9VhAMNnE2",
              "name": "Unrelenting Observation",
              "rank": 8
            },
            {
              "id": "BePclCVQ5iCFOgrR",
              "name": "Banishment",
              "rank": 9
            },
            {
              "id": "qr4KqgQyNhexcLVK",
              "name": "Blessed Boundary",
              "rank": 9
            },
            {
              "id": "hAWO0aN8ZN8fGZhV",
              "name": "Detonate Magic",
              "rank": 9
            },
            {
              "id": "NjuMYAUEGA115mKm",
              "name": "Overwhelming Presence",
              "rank": 9
            },
            {
              "id": "nVMTboErTev3VFtY",
              "name": "Manifestation",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:vrolikai",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "iy5XBb2u4BOVxjtz",
      "slug": "vrolikai",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:be9adc93c7938bb45b43a88a5e86a6237b7f65ff5964d24336b15dd4e0ccc6b7",
    "translatableHash": "sha256:a8f7ef6f819f839a83bbabf08234bd002d8dad02501d32ed2cfa80a1793a7abd",
    "data": {
      "schemaVersion": 1,
      "name": "Vrolikai",
      "level": 20,
      "rarity": "common",
      "size": "large",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Powerful vrolikais command the untamed armies of demonkind, uniting them behind their one unifying desire for death and destruction. Unlike other demons, the dreaded vrolikai doesn't form directly from a single soul—they instead manifest when a demon devours so many damned souls that their own individual desires are lost in the sinful cacophony. A vrolikai who survives this process gains great power and can claim a region of the Outer Rifts as their own domain.\nVrolikais' enthusiastic embrace of the multitude of sins makes them uniquely suited to lead and unite demons, such that even demon lords often must rely on vrolikais to command their forces. The chaotic and conflicting motivations of demonkind leave little room to find common ground, but the vrolikai can expound upon the beauty of every kind of sin while marching demon armies to battle.\nWhen a sinful mortal soul is judged and sent on to the Outer Rifts, it can become a deadly fiend—a demon. Demons are living incarnations of sin—be they classic sins like wrath or gluttony, or more \"specialized\" depravities like an obsession with torture or the act of treason or treachery. Once formed, a demon's driving goals are twofold—the amassing of personal power, and the corruption of mortal souls to cause them to become tainted by sin. In this way demons ensure a never-ending supply of new demons to bolster their ever-growing ranks in the Outer Rifts.\nDemons are selfish and self-absorbed creatures, and most firmly believe that mortals only play at being more virtuous than fiends. They enjoy tempting mortals into damnation to both indulge their egos and swell their armies. Like many other fiends, one of the great rewards of this manipulation is fulfilling their hunger for souls. In their eyes, the primary use for these souls is to spawn new demons, who can serve as soldiers, slaves, pawns, or even currency for their more powerful masters.",
      "armorClass": 45,
      "hitPoints": 440,
      "speedFeet": 35,
      "perception": {
        "modifier": 34,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 35,
        "reflex": 33,
        "will": 34
      },
      "abilities": {
        "str": 10,
        "dex": 7,
        "con": 9,
        "int": 6,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "acrobatics": 37,
        "arcana": 33,
        "athletics": 36,
        "deception": 36,
        "intimidation": 38,
        "religion": 34,
        "stealth": 34,
        "survival": 34
      },
      "languages": [
        "chthonian",
        "draconic",
        "empyrean",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15",
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "5tiASMinDzyHUAEv",
          "name": "Jaws",
          "bonus": 38,
          "damage": "4d12+18 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "uLuSAexGwbZSdlkF",
          "name": "Black Flame Knife",
          "bonus": 40,
          "damage": "3d4+18 piercing; 2d6 void",
          "traits": [
            "agile",
            "magical",
            "unholy"
          ]
        },
        {
          "id": "PFAC6dSt4RN7aRDz",
          "name": "Stinger",
          "bonus": 38,
          "damage": "4d8+18 piercing",
          "traits": [
            "magical",
            "reach-15",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "7rYYffte0B1eDFDt",
          "name": "Telepathy 100 Feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "c1COFBWgk0baYBNq",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "mmU40z6zMLqnvDyN",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "28xyMG8bDPJrcRsP",
          "name": "Death-Stealing Gaze",
          "kind": "passive",
          "description": "30 feet. When a non-demon ends its turn in the aura, it must attempt a check (fortitude, dc:38) save. If it fails, it becomes Drained 1.\nA creature that dies while it has drain from a vrolikai's gaze rises as a ghoul the next midnight. The GM determines what kind of ghoul."
        },
        {
          "id": "FQZGypLzxjxM8v3a",
          "name": "Black Flame Knives",
          "kind": "action",
          "description": "The vrolikai manifests a dagger-shaped blade of what looks like crystallized black flame in each of their four hands. These weapons function as +2 greater striking daggers that deal an additional 2d6 void damage. They fade away into nothingness 1 minute after a vrolikai no longer carries them."
        },
        {
          "id": "Nl0sqXtr54YzMawN",
          "name": "Consume Death",
          "kind": "action",
          "description": "The vrolikai focuses their deathstealing gaze upon a single target they can see within 30 feet. The target must immediately attempt a Fortitude save against death-stealing gaze.\nSuccess The creature is unaffected.\nFailure The creature is affected by death-stealing gaze and becomes Drained 1. If the creature was already drained 1 by the death-stealing gaze before attempting the save, a failed save increases the value of the drained condition by 1, to a maximum of Drained 4. The vrolikai gains 10 temporary Hit Points, and the drained creature is temporarily immune until the start of the vrolikai's next turn.\nCritical Failure As failure, but the creature increases the amount of drain by 2."
        },
        {
          "id": "ej0lyLnZuPKMNMnI",
          "name": "Focused Flames",
          "kind": "action",
          "description": "The vrolikai attacks a single target with all of their black flame knives. The demon makes a black flame knife Strike with the following additional effects. This counts toward the vrolikai's multiple attack penalty as a number of attacks equal to the number of back flame knives the vrolikai used.\nCritical Success The target takes an additional 2d6 void damage for each knife beyond the first (typically 6d6 extra damage) and takes 4d6 persistent void damage.\nSuccess The target takes an additional 2d6 void damage for each knife beyond the first.\nFailure The vrolikai deals the damage their black flame knife Strike normally deals on a hit."
        },
        {
          "id": "JS74Gdm0nVhPpG4k",
          "name": "Mindwarping",
          "kind": "passive",
          "description": "The sting of a vrolikai is mind-warping. A creature struck must attempt a check (will, dc:44) save.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Stupefied 1 for 1 minute.\nFailure The creature becomes stupefied 1. If it's already stupefied, its stupefied value increases by 1 instead (to a maximum of Stupefied 4).\nCritical Failure As failure, plus the creature is Confused for 1 minute."
        }
      ],
      "spellcasting": [
        {
          "id": "yinuvv1DAaHpt2dq",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 36,
          "saveDc": 44,
          "spells": [
            {
              "id": "LFMYOAZVijC6GmzA",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "zmGi1QNStSaYC6ai",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "3NHClQSDi7To4Gye",
              "name": "Regenerate",
              "rank": 7
            },
            {
              "id": "LwxQLt4FtqEqPMff",
              "name": "Execute",
              "rank": 10
            },
            {
              "id": "D8ZnN3huVkGhtjgw",
              "name": "Massacre",
              "rank": 10
            },
            {
              "id": "VXHcUTkP6nPksRoj",
              "name": "Paralyze",
              "rank": 10
            },
            {
              "id": "spZBwgRe4opgwHuv",
              "name": "Vampiric Exsanguination",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tarn-linnorm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "k0HUy6WdbZUNfG8X",
      "slug": "tarn-linnorm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c01494c4aad31378a93268d2b3d550ff718e2d5e9b9fd096db5308aa0f1f4631",
    "translatableHash": "sha256:6d204ece5911cee962d8f62a570565ccea7950e41adc3663c9cfac52af9ea847",
    "data": {
      "schemaVersion": 1,
      "name": "Tarn Linnorm",
      "level": 20,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "acid",
        "amphibious",
        "dragon"
      ],
      "description": "Although more powerful linnorms exist, the multi-headed tarn linnorm can wreak an awe-inspiring amount of devastation.\nImmense, primeval dragons of the northern reaches of the world, linnorms hate those they deem to be lesser creatures and seek to inflict as much suffering as possible upon their unfortunate victims. While these serpentine monstrosities might not be the powerful winged dragons most imagine, they nonetheless possess incredible strength and deadly powers that often rival more notorious dragons' brutality.",
      "armorClass": 46,
      "hitPoints": 400,
      "speedFeet": 35,
      "perception": {
        "modifier": 35,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 32,
        "will": 31
      },
      "abilities": {
        "str": 10,
        "dex": 6,
        "con": 8,
        "int": -1,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 32,
        "athletics": 38,
        "stealth": 34
      },
      "languages": [
        "aklo",
        "draconic",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "acid",
          "curse",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15"
        ]
      },
      "attacks": [
        {
          "id": "npD19zlFQ72xXHfo",
          "name": "Jaws",
          "bonus": 38,
          "damage": "4d12+18 piercing",
          "traits": [
            "magical",
            "reach-30",
            "unarmed"
          ]
        },
        {
          "id": "CQRb2PNLd84eBkAH",
          "name": "Claw",
          "bonus": 38,
          "damage": "4d8+18 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-30",
            "unarmed"
          ]
        },
        {
          "id": "ySh7mxtzIvc9onNT",
          "name": "Tail",
          "bonus": 38,
          "damage": "4d6+18 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "lQO6RbVplN7WWnna",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SfTYucTXJbISe6Da",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5lNem5v3czqg4yta",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "MrSMiZ1i5groiYX1",
          "name": "Regeneration 15 (Deactivated by Cold Iron)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "YoKSGUjwXmt7kxnq",
          "name": "Curse of Death",
          "kind": "passive",
          "description": "When a creature slays the tarn linnorm, it must succeed at a check (will, dc:46) save or it can no longer recover Hit Points via any means, such as healing spells, the Medicine skill, or natural healing from rest. This has an unlimited duration."
        },
        {
          "id": "otfDOnqRfKoRXWJC",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "RNVvCjM6WpoASTKg",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d6+18)[bludgeoning], check (fortitude, dc:44, basic)"
        },
        {
          "id": "8MiIAzmA9gWbpF5s",
          "name": "Corrosive Breath",
          "kind": "action",
          "description": "The tarn linnorm can expel either a @Template[line|distance:120] or a @Template[cone|distance:60] of acid, dealing 20d6[acid|options:area-damage] damage to creatures within the area (check (reflex, dc:44, basic, options:area-effect) save).\nThe linnorm can't use Corrosive Breath or Double Breath again for [[/gmr 1d4 #Recharge Corrosive Breath or Double Breath]]{1d4 rounds}.\nThe acid creates toxic fumes. At the beginning of the linnorm's next turn, those who failed the breath weapon's Reflex save must succeed at a check (fortitude, dc:42) or gain Sickened 4 from the poisonous fumes."
        },
        {
          "id": "TbFZxJr8aSgbgTZ6",
          "name": "Double Bite",
          "kind": "action",
          "description": "The tarn linnorm Strides and then makes a jaws Strike with each of their heads, each against a different target. Both attacks count toward the tarn linnorm's multiple attack penalty, but the multiple attack penalty doesn't increase until after the tarn linnorm makes all of these attacks."
        },
        {
          "id": "DWRBHDiwImN0PCp9",
          "name": "Double Breath",
          "kind": "action",
          "description": "The tarn linnorm uses Corrosive Breath twice. A creature attempts only one save and can take damage only once.\nThe linnorm can't use Corrosive Breath or Double Breath again for [[/br 2d4 #Recharge Corrosive Breath or Double Breath]]{2d4 rounds}."
        },
        {
          "id": "Bcm7iwcliF6ChhW7",
          "name": "Tarn Linnorm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:44)\nMaximum Duration 10 rounds\nStage 1 7d6[acid] damage and Drained 1 (1 round)\nStage 2 11d6[acid] damage and Drained 2 (1 round)"
        },
        {
          "id": "yKfR5JdxSC3YITNP",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "cIlup2qYJhZmAmRn",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 34,
          "saveDc": 42,
          "spells": [
            {
              "id": "EuaT5qjP1u5HzIZa",
              "name": "Truesight (Constant)",
              "rank": 8
            },
            {
              "id": "ZNAHsWeRdyO9ciJP",
              "name": "Unfettered Movement (Constant)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:diabolic-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mz7ZO0g4begL6EGH",
      "slug": "diabolic-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0b812a07f442c0e6ec2c557a60e1182905a440cb1309146176043ab8c27a7723",
    "translatableHash": "sha256:5cac1157c4a6903ac7a974f03561df36cac6298b4d02ec1a44d002f88a47a711",
    "data": {
      "schemaVersion": 1,
      "name": "Diabolic Dragon (Ancient)",
      "level": 20,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "divine",
        "dragon",
        "unholy"
      ],
      "description": "Hell, according to some theologians, is a living entity in and of itself. Diabolic dragons, these scholars argue, are just extensions of the plane, living creatures that break off from Hell to enact its will. Whether this is true or whether diabolical dragons are simply the reborn souls of dragons sent to Hell, the fact remains that these dragons are powerful, cunning, and tyrannical. Every diabolic dragon's goal is to further Hell's will, though how this happens can vary. Regardless of their goals, these dragons always approach newcomers with an unsettling calmness.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 44,
      "hitPoints": 390,
      "speedFeet": 70,
      "perception": {
        "modifier": 33,
        "senses": [
          "greater-darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 32,
        "will": 32
      },
      "abilities": {
        "str": 10,
        "dex": 5,
        "con": 8,
        "int": 5,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 33,
        "athletics": 38,
        "deception": 34,
        "diplomacy": 36,
        "intimidation": 34,
        "religion": 35,
        "society": 33,
        "thievery": 33
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean",
        "necril",
        "pyric",
        "aklo",
        "chthonian"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "T5Di6QONcI9inDFW",
          "name": "Jaws",
          "bonus": 38,
          "damage": "2d6 fire; 4d12+18 piercing",
          "traits": [
            "fire",
            "magical",
            "reach-20",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "swoyAmzvxZ40OwP5",
          "name": "Claws",
          "bonus": 38,
          "damage": "2d6 fire; 4d8+18 piercing",
          "traits": [
            "agile",
            "fire",
            "magical",
            "reach-15",
            "unholy"
          ]
        },
        {
          "id": "i6lsvMDzNoy5XhNg",
          "name": "Tail",
          "bonus": 36,
          "damage": "4d8+18 bludgeoning; 2d6 fire",
          "traits": [
            "fire",
            "magical",
            "reach-25",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "18RBgSWlCuh22J1R",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Smoke doesn't impair the dragon's vision; they ignore the Concealed condition from smoke."
        },
        {
          "id": "lzZO20Is7AdGnMVP",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LrwjsBPW23HP1jKy",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:40, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "yDArgwXwN85q97A7",
          "name": "Hell's Sting",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a melee attack\nEffect The dragon channels the rancor of Hell back through the body of their foe, overwhelming it with an infernal assault on the mind. The triggering creature takes 10d6[mental] damage with a check (will, dc:42, basic) save. Holy creatures use an outcome one degree of success worse than they roll on their saving throw."
        },
        {
          "id": "9Z9CTBimYbnQHZTU",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "sC6FZ4PWGfB7jJ5I",
          "name": "Diabolic Fire",
          "kind": "passive",
          "description": "Any fire damage that a diabolic dragon deals, including fire damage from spells, is imbued with the unholy power of Hell to scorch the spirit as well. A creature takes spirit damage instead of fire damage if that would be more detrimental to the creature (as determined by the GM). A diabolic dragon is immune to the diabolic fire of other diabolic dragons, the fire from divine immolation, and similar effects."
        },
        {
          "id": "Biez8RunTRAB4NCV",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "YqTwVDGKNZYnwpNe",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Hellfire Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "2SfnAmO0wAMNDsit",
          "name": "Hellfire Breath",
          "kind": "action",
          "description": "The dragon unleashes a blast of infernal fire that deals 21d6[fire|options:area-damage] damage in a @Template[cone|distance:60] (check (reflex, dc:42, basic, options:area-effect) save).\nThe dragon can't use Hellfire Breath again for [[/gmr 1d4 #Recharge Hellfire Breath]]{1d4 rounds}."
        },
        {
          "id": "GLvwhJcnT0YW1PUg",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "94q35docA6iq3SHD",
          "name": "Improved Knockdown",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "9sTwfMhjiQ2a0xYi",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "5zMUvoyVHuEj9Hzq",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "sipjbNPvRlyczMGb",
              "name": "Interplanar Teleport (At Will, Self Only)",
              "rank": 7
            },
            {
              "id": "3yLw77x5Y9vy9Hbn",
              "name": "Summon Fiend (Phistophilus Only, At Will)",
              "rank": 8
            },
            {
              "id": "0TYvXrz7QnBaoS2X",
              "name": "Divine Immolation (At Will)",
              "rank": 9
            },
            {
              "id": "KbgjBsmnhnehl0ma",
              "name": "Falling Stars (Fire Only)",
              "rank": 9
            },
            {
              "id": "LJ9KicbI160R5h15",
              "name": "Wall of Fire (At Will)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:diabolic-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ylhweChE6bNwf7Q2",
      "slug": "diabolic-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0c845a3882688df4ffed9a4a2e4b11b2afdd5802a7d9a21710b32f827479b70c",
    "translatableHash": "sha256:9d9af3a4bb84efcf07b39c7f72cf108e3994d4030aa0f307eb1cc89cd3588887",
    "data": {
      "schemaVersion": 1,
      "name": "Diabolic Dragon (Ancient, Spellcaster)",
      "level": 20,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "divine",
        "dragon",
        "unholy"
      ],
      "description": "Hell, according to some theologians, is a living entity in and of itself. Diabolic dragons, these scholars argue, are just extensions of the plane, living creatures that break off from Hell to enact its will. Whether this is true or whether diabolical dragons are simply the reborn souls of dragons sent to Hell, the fact remains that these dragons are powerful, cunning, and tyrannical. Every diabolic dragon's goal is to further Hell's will, though how this happens can vary. Regardless of their goals, these dragons always approach newcomers with an unsettling calmness.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 44,
      "hitPoints": 390,
      "speedFeet": 70,
      "perception": {
        "modifier": 33,
        "senses": [
          "greater-darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 32,
        "will": 32
      },
      "abilities": {
        "str": 10,
        "dex": 5,
        "con": 8,
        "int": 5,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 33,
        "athletics": 38,
        "deception": 34,
        "diplomacy": 36,
        "intimidation": 34,
        "religion": 35,
        "society": 33,
        "thievery": 33
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean",
        "necril",
        "pyric",
        "aklo",
        "chthonian"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "T5Di6QONcI9inDFW",
          "name": "Jaws",
          "bonus": 38,
          "damage": "2d6 fire; 4d12+18 piercing",
          "traits": [
            "fire",
            "magical",
            "reach-20",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "swoyAmzvxZ40OwP5",
          "name": "Claws",
          "bonus": 38,
          "damage": "2d6 fire; 4d8+18 piercing",
          "traits": [
            "agile",
            "fire",
            "magical",
            "reach-15",
            "unholy"
          ]
        },
        {
          "id": "i6lsvMDzNoy5XhNg",
          "name": "Tail",
          "bonus": 36,
          "damage": "4d8+18 bludgeoning; 2d6 fire",
          "traits": [
            "fire",
            "magical",
            "reach-25",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "18RBgSWlCuh22J1R",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Smoke doesn't impair the dragon's vision; they ignore the Concealed condition from smoke."
        },
        {
          "id": "lzZO20Is7AdGnMVP",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LrwjsBPW23HP1jKy",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:40, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "yDArgwXwN85q97A7",
          "name": "Hell's Sting",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a melee attack\nEffect The dragon channels the rancor of Hell back through the body of their foe, overwhelming it with an infernal assault on the mind. The triggering creature takes 10d6[mental] damage with a check (will, dc:42, basic) save. Holy creatures use an outcome one degree of success worse than they roll on their saving throw."
        },
        {
          "id": "9Z9CTBimYbnQHZTU",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "sC6FZ4PWGfB7jJ5I",
          "name": "Diabolic Fire",
          "kind": "passive",
          "description": "Any fire damage that a diabolic dragon deals, including fire damage from spells, is imbued with the unholy power of Hell to scorch the spirit as well. A creature takes spirit damage instead of fire damage if that would be more detrimental to the creature (as determined by the GM). A diabolic dragon is immune to the diabolic fire of other diabolic dragons, the fire from divine immolation, and similar effects."
        },
        {
          "id": "2SfnAmO0wAMNDsit",
          "name": "Hellfire Breath",
          "kind": "action",
          "description": "The dragon unleashes a blast of infernal fire that deals 21d6[fire|options:area-damage] damage in a @Template[cone|distance:60] (check (reflex, dc:42, basic, options:area-effect) save).\nThe dragon can't use Hellfire Breath again for [[/gmr 1d4 #Recharge Hellfire Breath]]{1d4 rounds}."
        },
        {
          "id": "GLvwhJcnT0YW1PUg",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "94q35docA6iq3SHD",
          "name": "Improved Knockdown",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "97zxNeHM8e5yOody",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 38,
          "saveDc": 42,
          "spells": [
            {
              "id": "VlmMdelvlQFXtudR",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "kv6Yrq15Fm4ugwX6",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "ZbZJsG5OcFZoLBm2",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "PAcPyOLNK1K7cUKl",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "o2YJlsUAEkXgIhMJ",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "DZSD8iHUbaJ8Jn6D",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "k5CEBfx17EvZ8Cfv",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "rCPgQBi7S9nH6S0R",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "vm7vKebUXgk6ZUfz",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "CbFkmFry4HgCHB49",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "l5zX9bqz8N2VqPFS",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "OpB98ZHnl1nddYYm",
              "name": "Blindness",
              "rank": 3
            },
            {
              "id": "bWD2QNwo9OBqC36z",
              "name": "Chilling Darkness",
              "rank": 3
            },
            {
              "id": "4UCd2JrUw4onsLkO",
              "name": "Dispelling Globe",
              "rank": 4
            },
            {
              "id": "q43VCsPVxjV6vND7",
              "name": "Divine Wrath",
              "rank": 4
            },
            {
              "id": "3wHW8HDlhY9pFfCC",
              "name": "Planar Tether",
              "rank": 4
            },
            {
              "id": "jC8yOMaEMjLDB3NS",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "NmSFxY67HtFQhLch",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "F17hcf1lmns4m4vm",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "D5unlRAwEBe7mfFH",
              "name": "Truespeech",
              "rank": 5
            },
            {
              "id": "W31MAsqXWkFFQ9FE",
              "name": "Blessed Boundary",
              "rank": 6
            },
            {
              "id": "NG6So9uCiij3TpKS",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "o75LHM91SeHXnfcJ",
              "name": "Eclipse Burst",
              "rank": 7
            },
            {
              "id": "gGdtNS8PROns0SnM",
              "name": "Execute",
              "rank": 7
            },
            {
              "id": "Az1vR6iVReMhN0OX",
              "name": "Planar Seal",
              "rank": 7
            },
            {
              "id": "Mq7MQc8Kpzn3fYXf",
              "name": "Canticle of Everlasting Grief",
              "rank": 8
            },
            {
              "id": "11NrhJMffaaAqHXg",
              "name": "Pinpoint",
              "rank": 8
            },
            {
              "id": "1FLKh7VfX0PXR00N",
              "name": "Massacre",
              "rank": 9
            },
            {
              "id": "0N98D0weAGOZhRmR",
              "name": "Wails of the Damned",
              "rank": 9
            }
          ]
        },
        {
          "id": "9sTwfMhjiQ2a0xYi",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "5zMUvoyVHuEj9Hzq",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "sipjbNPvRlyczMGb",
              "name": "Interplanar Teleport (At Will, Self Only)",
              "rank": 7
            },
            {
              "id": "3yLw77x5Y9vy9Hbn",
              "name": "Summon Fiend (Phistophilus Only, At Will)",
              "rank": 8
            },
            {
              "id": "0TYvXrz7QnBaoS2X",
              "name": "Divine Immolation (At Will)",
              "rank": 9
            },
            {
              "id": "KbgjBsmnhnehl0ma",
              "name": "Falling Stars (Fire Only)",
              "rank": 9
            },
            {
              "id": "LJ9KicbI160R5h15",
              "name": "Wall of Fire (At Will)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tor-linnorm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "0H54u83vZ1w3xHcD",
      "slug": "tor-linnorm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9ce8e0f156dd971b53b480139f9a63a0cc03bc066d9e135c53c6f9152fd7f310",
    "translatableHash": "sha256:854b2f9091f4087145b31f5a882915650bc0427d14b0f3dc7aa3f00e76eb5c6f",
    "data": {
      "schemaVersion": 1,
      "name": "Tor Linnorm",
      "level": 21,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "dragon",
        "fire"
      ],
      "description": "Tor linnorms dwell in the tallest volcanic mountains, either within naturally formed caverns or molten craters. A tor linnorm's temper can be as hot and destructive as the magma the creature resembles.\nImmense, primeval dragons of the northern reaches of the world, linnorms hate those they deem to be lesser creatures and seek to inflict as much suffering as possible upon their unfortunate victims. While these serpentine monstrosities might not be the powerful winged dragons most imagine, they nonetheless possess incredible strength and deadly powers that often rival more notorious dragons' brutality.",
      "armorClass": 47,
      "hitPoints": 440,
      "speedFeet": 35,
      "perception": {
        "modifier": 37,
        "senses": [
          "darkvision",
          "scent-imprecise-60",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 38,
        "reflex": 35,
        "will": 33
      },
      "abilities": {
        "str": 11,
        "dex": 8,
        "con": 9,
        "int": -1,
        "wis": 8,
        "cha": 9
      },
      "skills": {
        "acrobatics": 35,
        "athletics": 40,
        "stealth": 37
      },
      "languages": [
        "aklo",
        "draconic",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "curse",
          "fire",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15"
        ]
      },
      "attacks": [
        {
          "id": "3TZWlkMSDjauBP7y",
          "name": "Jaws",
          "bonus": 40,
          "damage": "4d12+19 piercing",
          "traits": [
            "magical",
            "reach-30",
            "unarmed"
          ]
        },
        {
          "id": "jb3f12sfPd9nzwVN",
          "name": "Claw",
          "bonus": 40,
          "damage": "4d8+19 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-30",
            "unarmed"
          ]
        },
        {
          "id": "xkve6W8Rg8tqIPX0",
          "name": "Tail",
          "bonus": 40,
          "damage": "4d6+19 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "JGlsPzMEmEwis19F",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zxbJYDbwhz45mMSX",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nHYtHMopSyGQg3WT",
          "name": "Regeneration 20 (Deactivated by Cold Iron)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zLUOcpj85OOnwvRh",
          "name": "Curse of Boiling Blood",
          "kind": "passive",
          "description": "When a creature slays the linnorm, it must succeed at a check (will, dc:48) save or gain weakness to fire 20 and Slowed 1 from the agonizing pain it now endures at all times, with an unlimited duration.\nAs long as a character continues to suffer this curse, its slowed condition can never be reduced below slowed 1.\nEffect: Curse of Boiling Blood"
        },
        {
          "id": "mgb2nO0WkJsnZogZ",
          "name": "Lava Affinity",
          "kind": "passive",
          "description": "A tor linnorm can breathe and swim freely while submerged in lava and magma."
        },
        {
          "id": "Bk27VjwfpviLpWbA",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "KzNMNX33tOGWTxJY",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d6+21)[bludgeoning], check (fortitude, dc:46, basic)"
        },
        {
          "id": "JvFUFSxHH2EThNAC",
          "name": "Pyroclastic Breath",
          "kind": "action",
          "description": "The tor linnorm expels a @Template[cone|distance:60] of flame and ash dealing 20d6[fire|options:area-damage] damage to creatures within the area (check (reflex, dc:46, basic, options:area-effect) save).\nThe linnorm can't use Pyroclastic Breath again for [[/gmr 1d4 #Recharge Pyroclastic Breath]]{1d4 rounds}.\nAt the start of the tor linnorm's next turn, the area of the Pyroclastic Breath is covered in thick, scorching smoke that burns both the lungs and eyes, dealing an additional 10d6[fire|options:area-damage] damage to all creatures in the area (check (reflex, dc:46, basic, options:area-effect) save). A creature that spends an entire round in the smoke with open eyes must succeed at a check (fortitude, dc:44) save or be Blinded for 1 minute.\nThe smoke dissipates after 1 minute; in strong winds, the smoke dissipates in 5 rounds, and in more powerful winds, it may clear even more quickly."
        },
        {
          "id": "CMfpQM5btdzVWxB5",
          "name": "Slashing Claws",
          "kind": "action",
          "description": "The tor linnorm makes four Strikes with their claws, each against a different target. These attacks count toward the tor linnorm's multiple attack penalty, but the multiple attack penalty doesn't increase until after the tor linnorm makes all their attacks."
        },
        {
          "id": "oeOZCitfRoZXCLfy",
          "name": "Tor Linnorm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:44);\nMaximum Duration 10 rounds\nStage 1 8d6[fire] damage and Drained 1 (1 round)\nStage 2 12d6[fire] damage and Drained 2 (1 round)"
        },
        {
          "id": "5pZXZ7pLE1RdGKX5",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "zQRbKmxdzecknTDu",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 36,
          "saveDc": 44,
          "spells": [
            {
              "id": "g4YpY2bku4a31XWO",
              "name": "Truesight (Constant)",
              "rank": 8
            },
            {
              "id": "YPkNYxysmFk49ni2",
              "name": "Unfettered Movement (Constant)",
              "rank": 9
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:grim-reaper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kKFfigxrJ2vbJazp",
      "slug": "grim-reaper",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f27f346d22d2c2669fcbedb8db8632243dc8a87a1f10fc0e5467bb8c45e0c398",
    "translatableHash": "sha256:8ffe0309026e0bb0fba53b3954070d8a5dfdfddd60033c3528f7a8ffeee2fca5",
    "data": {
      "schemaVersion": 1,
      "name": "Grim Reaper",
      "level": 21,
      "rarity": "unique",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "The Grim Reaper is the unflinching personification of death. Silent as the grave and as inevitable as time itself, this legendary being hunts down and finishes creatures that have evaded death for far too long. Sometimes the Grim Reaper comes without warning, while at others it comes to finish the work that other creatures could not. The Grim Reaper serves no god, fiend, or aeon. It is both despised and feared by psychopomps and celestials, but few-if any-dare to stand in its way. Like some eternal plague, it kills those who try to cure the multiverse of its presence. It stands alone and holds only its own council, and the pleading and reasoning of mortals and immortals alike fall on deaf ears once the Grim Reaper closes on its quarry. Its own reasoning is silent to mortal ears and inscrutable to the mortal mind, but no matter the reason, the result is unyielding and final.\nWhile some legends hold that the Grim Reaper appears before everyone as they die, the truth is quite a bit more disturbing. Such vigils in fact lie within the providence of the psychopomps, a race of immortals charged with the protection and guidance of mortal souls through the afterlife. The Grim Reaper has little interest in protecting souls or guiding them. It is instead compelled by sinister agendas arising within the nighted realm of Abaddon, where the Horsemen of the Apocalypse rule. Indeed there are many similarities in shape and form between the Grim Reaper and Charon, the Horseman of Death, but no recorded instance exists of these two powerful entities working together. Instead, the Grim Reaper serves as something of a manifestation of Abaddon itself, and in this regard is believed by some to be an incarnation of the mysterious First Horseman. When the Grim Reaper comes to a world, it does so not as an angel of mercy, but as a relentless harvester of life. Those who fall to the Grim Reaper were not destined to die as much as they were selected, hunted, and murdered.\nPerhaps the most frightening legends surrounding the Grim Reaper concern its nature as a singular entity, for some believe that more than one grim reaper exists in the Great Beyond. These whispers tell of a cabal of at least nine of these creatures that stalk reality, culling the living as inexplicable servants of true entropy. According to the teaching of some death cults, the final goal of the Grim Reaper is to end the entire cycle of life and death and serve as a silent lord of an empty universe.",
      "armorClass": 47,
      "hitPoints": 320,
      "speedFeet": 50,
      "perception": {
        "modifier": 41,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 37,
        "reflex": 41,
        "will": 38
      },
      "abilities": {
        "str": 8,
        "dex": 10,
        "con": 8,
        "int": 5,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 43,
        "athletics": 38,
        "deception": 40,
        "intimidation": 43,
        "religion": 39,
        "society": 36,
        "stealth": 43
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
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "all-damage 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qqpgMalbjoAykhjP",
          "name": "Keen Scythe",
          "bonus": 40,
          "damage": "4d10+23 slashing",
          "traits": [
            "agile",
            "deadly-3d10",
            "magical",
            "reach-10",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "xDzg2v4rQ9wNAK3b",
          "name": "Death's Grace",
          "kind": "passive",
          "description": "The Grim Reaper can choose whether or not it counts as undead for effects that affect undead differently. Even if it does not count as undead, the Grim Reaper still never counts as a living creature."
        },
        {
          "id": "SWo4EQT4exBUG1zV",
          "name": "Status Sight",
          "kind": "passive",
          "description": "The Grim Reaper automatically knows the Hit Points, conditions, afflictions, and emotions of all creatures it can see."
        },
        {
          "id": "doHZQiWCurTpCiMw",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dWgrFKYnx0FM8zl3",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6aClhFTvO5NOf1iA",
          "name": "Aura of Misfortune",
          "kind": "passive",
          "description": "20 feet.\nLiving creatures in the aura must roll twice on all d20 rolls and use the lower result.\nEffect: Aura of Misfortune"
        },
        {
          "id": "ei3nQVCq6MHIPrMy",
          "name": "Lurking Death",
          "kind": "reaction",
          "description": "Trigger A creature within 100 feet makes a ranged attack or uses an action that has the concentrate, manipulate, or move trait\nEffect The Grim Reaper teleports to a square adjacent to the triggering creature and makes a melee Strike against it. If the Strike hits, the Grim Reaper disrupts the triggering action."
        },
        {
          "id": "YMwe0HIrPrtpRdsx",
          "name": "Void Healing",
          "kind": "passive",
          "description": "The Grim Reaper can choose whether or not it takes vitality damage."
        },
        {
          "id": "TzBbRiqiSDZj6VdK",
          "name": "Death Strike",
          "kind": "passive",
          "description": "A creature critically hit by any of the grim reaper's attacks or that critically fails against any of its spells must succeed at a check (fortitude, dc:47) save or die."
        },
        {
          "id": "W3a4Bkc73B2bUZDE",
          "name": "Energy Drain",
          "kind": "passive",
          "description": "When the Grim Reaper hits and deals damage with its scythe, it regains 20[healing] Hit Points, and the target must succeed at a check (fortitude, dc:43) save or become Doomed 1. If the target is already doomed, the doomed value increases by 1 (to a maximum of Doomed 3)."
        },
        {
          "id": "Zp7ozjV5uBLnBo41",
          "name": "Final Death",
          "kind": "passive",
          "description": "A creature killed by the Grim Reaper can't be brought back to life by any means short of divine intervention."
        },
        {
          "id": "0qVGuAvlfZ7EplZ5",
          "name": "Infuse Weapon",
          "kind": "passive",
          "description": "Any scythe gains the agile trait, can't be disarmed, and becomes a +3 major striking keen scythe while the Grim Reaper wields it.\nIf the Grim Reaper Strikes a creature with a weakness to any specific type of damage, the scythe's damage counts as that type of damage, in addition to slashing."
        }
      ],
      "spellcasting": [
        {
          "id": "aRbpPF0TFfUG64dX",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 37,
          "saveDc": 47,
          "spells": [
            {
              "id": "fx5g45f1vX9UtDKI",
              "name": "See the Unseen (Constant)",
              "rank": 2
            },
            {
              "id": "9xvF2KBmoTPgqFeW",
              "name": "Haste (Constant)",
              "rank": 3
            },
            {
              "id": "drbxOhoSGY2fBfCd",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "tMr1LDGa9W1tx27e",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "4sLNRqssXF0vJIu2",
              "name": "Execute",
              "rank": 10
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:treerazer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "P8pNcpNeXQcj6lBB",
      "slug": "treerazer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:73cc75808c0b5bcfad0e75452b863a6341385033781dd0937c0a697585608c4a",
    "translatableHash": "sha256:c5c1dbf186537463ff9189bedac55e9b1ee42d89006ec4eb37970e950c574a21",
    "data": {
      "schemaVersion": 1,
      "name": "Treerazer",
      "level": 25,
      "rarity": "unique",
      "size": "huge",
      "traits": [
        "amphibious",
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Treerazer, the self-styled Lord of the Blasted Tarn, is a powerful demon on the cusp of ascending to the true power of one of the rulers of the Abyss itself-a demon lord. For now, even as a nascent demon lord, Treerazer is a dangerous foe.\nTreerazer rarely leaves his swampy realm of Tanglebriar-a large thicket of tainted foliage and rotting detritus just south of Kyonin's Fierani Forest-but can be encountered anywhere within that toxic mire, often accompanied by a small legion of demons, corrupted fey, and other deadly allies. Certain occult rituals have the power to call him forth from Tanglebriar, granting him the opportunity to directly work his evils beyond the realm to which he has been exiled. Some believe that no eldritch force contains Treerazer and that, were he willing, he could travel Golarion with impunity, spreading the twisted blessings of his touch and the corruption of his presence, yet the Lord of the Blasted Tarn is as cunning and canny as he is deadly, and prefers to work his evils on the world from the safety of his nightmare realm.",
      "armorClass": 54,
      "hitPoints": 550,
      "speedFeet": 60,
      "perception": {
        "modifier": 46,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 42,
        "reflex": 40,
        "will": 43
      },
      "abilities": {
        "str": 12,
        "dex": 9,
        "con": 11,
        "int": 7,
        "wis": 8,
        "cha": 8
      },
      "skills": {
        "acrobatics": 40,
        "arcana": 38,
        "athletics": 45,
        "intimidation": 46,
        "nature": 49,
        "occultism": 38,
        "religion": 45,
        "stealth": 40
      },
      "languages": [
        "chthonian",
        "common",
        "elven",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "mental",
          "poison"
        ],
        "resistances": [
          "acid 20",
          "cold 15",
          "fire 15",
          "physical 20 except cold-iron"
        ],
        "weaknesses": [
          "holy 20"
        ]
      },
      "attacks": [
        {
          "id": "sBRqXEDoaHJdg0SF",
          "name": "Blackaxe",
          "bonus": 47,
          "damage": "5d12+18 slashing; 1d6 acid",
          "traits": [
            "acid",
            "magical",
            "reach-15",
            "sweep",
            "unholy"
          ]
        },
        {
          "id": "g2irWtwE4YUnllGP",
          "name": "Jaws",
          "bonus": 45,
          "damage": "5d10+20 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "UoKQ5xYxwkzldwhR",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9NSBH5zk6mEIcPjF",
          "name": "+2 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "t3USaq2CKWLoaP9A",
          "name": "Regeneration 50 (Deactivated by Holy)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "spBsMqVOA8rbhE2e",
          "name": "Aura of Corruption",
          "kind": "passive",
          "description": "120 feet.\nPlants near Treerazer twist, deform, and transform into thorny or fungoid parodies of their natural shapes. A living creature in this area must succeed at a check (fortitude, dc:47) save each round or become partially transformed into plantlike matter. Those who fail this saving throw are treated as if they were plants for the purposes of any effect that particularly harms or inconveniences plant creatures more than other creatures, but do not gain any benefits of being plant creatures.\nThis effect lasts as long as the creature remains within the area of corruption and for 1 minute thereafter.\nEffect: Aura of Corruption"
        },
        {
          "id": "7TG8awCuym8R9OVb",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "NWBV7oqS64HKJSkz",
          "name": "Blackaxe - Owner's Authority",
          "kind": "action",
          "description": "Requirements Treerazer isn't wielding Blackaxe.\nEffect Treerazer sense the world around Blackaxe as though you were in its location and can use any of your innate spells through the link as if it were the source of the spell. If another creature is wielding Blackaxe, it must succeed at a check (will, dc:50) save or be Slowed 2 until it relinquishes the weapon."
        },
        {
          "id": "c09zz4QRa6hJSZ6q",
          "name": "Blackaxe - Owner's Reclamation",
          "kind": "passive",
          "description": "Requirements Treerazer isn't wielding Blackaxe.\nEffect Blackaxe appears in Treerazer's hands, teleporting instantly from its prior location."
        },
        {
          "id": "uyDcXzwKNRuKIzY5",
          "name": "Blackaxe - Rejuvenating Deforestation",
          "kind": "action",
          "description": "Frequency once per minute.\nEffect Make a Strike against a living tree with Blackaxe. If it hits, the tree withers to ash and you heal 250[healing]{250 Hit Points} and gain the benefit of a 6th-rank Sound Body spell."
        },
        {
          "id": "871udt0tIPBiUS63",
          "name": "Defoliation",
          "kind": "action",
          "description": "Treerazer exudes a pulse of sickly green light in a 30-foot-radius emanation. All plants in the area (including creatures under the effect of his aura of corruption) blacken and wither.\nNon-creature plants immediately wither and die. Plant and fungus creatures take 20d8[void] damage with a check (fortitude, dc:49, basic) save. A creature that fails its save is Doomed 1 for 1 minute and Sickened 3.\nTreerazer can choose to exclude any number of plants or fungi in the area from this effect, and generally does so to preserve twisted and corrupted plants or fungi, or plant and fungus creatures that are allied to his cause.\nTreerazer can't use Defoliation for [[/gmr 1d4 #Recharge Defoliation]]{1d4 rounds}."
        },
        {
          "id": "veNUDgghA30FdVNB",
          "name": "Dispelling Strike",
          "kind": "passive",
          "description": "Frequency once per round\nTrigger Treerazer hits a creature, object, or spell effect with a weapon Strike or subjects one to Defoliation;\nEffect Treerazer casts his innate Dispel Magic, targeting the creature he hit with his Strike or one spell affecting that creature."
        },
        {
          "id": "xkIBsOSynEo9Ii6k",
          "name": "Staggering Strike",
          "kind": "passive",
          "description": "When Treerazer scores a critical hit with a melee attack, the target is Stunned 2."
        }
      ],
      "spellcasting": [
        {
          "id": "4VHRW4Y0OmyqAHpQ",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 43,
          "saveDc": 49,
          "spells": [
            {
              "id": "uPbUXSGeCm9kiaPK",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "AamTxVMJbcV54qFO",
              "name": "Telekinetic Maneuver (At Will)",
              "rank": 2
            },
            {
              "id": "nKm5RmEZ0Bc394rZ",
              "name": "Earthbind (At Will)",
              "rank": 3
            },
            {
              "id": "rg9GusKAsOFsznvm",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "lLvbub8jA8CLDQvx",
              "name": "Tangling Creepers (At Will)",
              "rank": 6
            },
            {
              "id": "8zLDu6mjVhJQ7NI1",
              "name": "Truesight (Constant)",
              "rank": 8
            },
            {
              "id": "fwfhUSpq3brEqBbM",
              "name": "Dispel Magic (At Will)",
              "rank": 9
            },
            {
              "id": "dRv6ZpfB26BpuzRK",
              "name": "Desiccate",
              "rank": 10
            },
            {
              "id": "EGmapWbHWyErL5iU",
              "name": "Freeze Time",
              "rank": 10
            },
            {
              "id": "42qAfCY4hVzAueTL",
              "name": "Wall of Thorns",
              "rank": 10
            }
          ]
        }
      ]
    }
  }
]
