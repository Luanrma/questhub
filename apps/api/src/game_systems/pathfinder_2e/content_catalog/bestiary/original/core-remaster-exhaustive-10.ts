import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_10_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "VVgAb1gaCZaKFRDj",
      "slug": "rune-dragon-young",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4fdb3564fe97490789989642c908db652430912c0391e5ed5f735a97c0419cbb",
    "translatableHash": "sha256:685b131136b3974828476cedaf7fadc39ce21f5cc3e4260520d7f858923c1a59",
    "data": {
      "schemaVersion": 1,
      "name": "Rune Dragon (Young)",
      "level": 10,
      "rarity": "common",
      "size": "large",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Rune dragons have an innate insight on the power of runes. Most rune dragons keep a variety of runes etched on their scales, which their bodies can magically empower. They typically don't cast spells themselves, instead relying on their ability to create runes on the fly to produce desired effects. A rune dragon often refers to their hoard as their library, as it's full of important historical texts, plays, speeches, textbooks, and spellbooks written by people of different cultures in a variety of languages. While they can often speak a language with the aid of magic, they much prefer to learn languages in the context of their speakers so they can grasp the nuances hidden within the syntax and the magic within their symbols.",
      "armorClass": 30,
      "hitPoints": 175,
      "speedFeet": 60,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "magicsense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 17,
        "will": 21
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 5,
        "int": 6,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 19,
        "arcana": 23,
        "athletics": 21,
        "crafting": 21,
        "diplomacy": 18,
        "performance": 20,
        "society": 19,
        "survival": 19
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "nMoAKfyDDAoQfjPJ",
          "name": "Claw",
          "bonus": 22,
          "damage": "2d6+10 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "vWI3q4eiStz5qqHx",
          "name": "Jaws",
          "bonus": 22,
          "damage": "2d6+10 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "8A5XIY3Hlr1wxzJm",
          "name": "Tail",
          "bonus": 20,
          "damage": "2d10+10 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "RlvDOe4pR33tuNVr",
          "name": "Magic Sense",
          "kind": "passive",
          "description": "The rune dragon is aware of any active magical abilities and effects within the listed range. When the dragon Seeks, it gains the benefits of a 4th-rank detect magic spell within the listed range (in addition to the normal benefits of Seeking)."
        },
        {
          "id": "qwuKOZdikMj02pRU",
          "name": "Runic Scales",
          "kind": "passive",
          "description": "The rune dragon's scales function as runestones. The rune dragon can't use the effects or abilities of the runes etched on its scales, but they can transfer these runes to appropriate objects. Transferring a rune to or from an item in this way requires 1 minute, during which the dragon is Off-Guard. The process is automatic and doesn't require a check, but if the dragon stops or is interrupted in this process, the rune is destroyed. A rune dragon can have any number of runes etched on its scales, though they typically have only a handful of runes etched on their scales at a time."
        },
        {
          "id": "5Nrc64gApPzUy279",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "L8w8yFgsSTRZPPKw",
          "name": "Retributive Rune",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet damages the rune dragon\nEffect With a burst of runic magic, the rune dragon uses their detonating rune ability on the triggering creature and immediately causes the rune to detonate if it didn't automatically do so."
        },
        {
          "id": "Rj2vwCAvhtc4VbOw",
          "name": "Detonating Rune",
          "kind": "passive",
          "description": "The rune dragon's Strikes and abilities can leave a detonating rune on their targets. If a creature would receive a detonating rune while they already have one, instead of adding another rune, their current detonating rune activates, dealing 4d6[untyped] damage to the target and expending the rune. The detonating rune's damage type matches the dragon's current Shifting Rune. A creature can use an Interact action to remove the rune. Detonating runes fade after 1 minute if not detonated."
        },
        {
          "id": "eHozVgrHl2EW2OBo",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "IiyJK3dEYHm1gnNg",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Runic Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "i7kuaOQCvKjQ623q",
          "name": "Runic Breath",
          "kind": "action",
          "description": "The dragon launches hundreds of exploding runes that detonate upon impact, dealing 9d6[untyped|options:area-damage] damage in a @Template[type:cone|distance:30] (check (reflex, dc:29, basic, options:area-effect) save). The damage type of this ability is determined by Shifting Rune. Creatures who fail the save are also affected by detonating rune. The dragon can't use Runic Breath again for [[/gmr 1d4 #Recharge Runic Breath]]{1d4 rounds}."
        },
        {
          "id": "aXvfwxeI9u0AxsD4",
          "name": "Shifting Runes",
          "kind": "action",
          "description": "The rune dragon chooses between acid, cold, electricity, fire, or sonic damage. The runes etched upon the dragon shift, forming runes of that energy on its scales. The dragon gains immunity to that damage type, and their detonating runes and Runic Breath deal that damage type. Anyone trained in Arcana can immediately recognize the energy type of the etched rune without a check."
        },
        {
          "id": "wdaIPUpxH6gu2jCd",
          "name": "Push 10 feet",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:adlet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Zaixy2G1NHnaYhEo",
      "slug": "adlet",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:976584c504756293a7c67f419ac7871f8146ddf302d59e7104f8f018c8dcd3e1",
    "translatableHash": "sha256:f89b322dd0e7c045529c5cf7114f485aaf813c94b9aeabe334a7deac4a9c6dda",
    "data": {
      "schemaVersion": 1,
      "name": "Adlet",
      "level": 10,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "cold",
        "humanoid"
      ],
      "description": "Adlets dwell in the farthest, harshest reaches of the Crown of the World, with a few journeying beyond to similarly frigid regions in other continents. At frst glance, these isolated people look much like their Erutaki human cousins; they typically have straight, black hair and compact, powerful builds. However, adlets tend move with more grace their human kin. Up close, their strangeness reveals itself, as each has a furry face and sports a maw full of wolfike teeth. Their legs and tails resemble those of dogs.\nAdlets' legends say that long ago, a mighty hunter lost his way far from home and came upon a house of whalebone and ice. A woman dressed in white fox furs greeted him, fed him, and tended to his frostbite. In time, they married and had 10 children, fve of whom bore the legs and tails of foxes. These children stayed with their mother, while the other fve—born with the legs and tails of wolves—traveled with their father back to the human lands and became the frst adlets.\nMost adlets aren't inherently evil, but their culture is warlike, xenophobic, and noticeably lacking in humility. They see themselves as the natural rulers of the arctic wastes and view everyone else as squatters at best and invaders at worst. A typical adlet is stronger and faster than any mundane human, with the ability to walk naked in a blizzard and call up ice-cold mists. Given that, it's little wonder that adlets have developed something of a superiority complex. Still, while adlet raids are a common problem for travelers in the Crown of the World, a handful of wily and intrepid merchants have forged peaceful relations with certain adlet communities along more common routes.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 40,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 22,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 6,
        "con": 4,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 21,
        "stealth": 20,
        "survival": 18
      },
      "languages": [
        "adlet",
        "common"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "jhi0sreme2yjolfI",
          "name": "Spear",
          "bonus": 20,
          "damage": "2d6+9 piercing",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "uC8vf4vEv2zFOWgo",
          "name": "Jaws",
          "bonus": 19,
          "damage": "2d8+9 slashing; 1d6 cold",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "wVY7ijG6fY0kdgBv",
          "name": "Spear",
          "bonus": 21,
          "damage": "2d6+9 piercing",
          "traits": [
            "magical",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "UQmOfNcYdQJoHq8o",
          "name": "Avenging Bite",
          "kind": "reaction",
          "description": "Trigger A creature within reach of an adlet's jaws Strike attacks one of the adlet's allies.\nEffect The adlet makes a jaws Strike against the triggering creature."
        },
        {
          "id": "DAwhqp01jQeK2AM2",
          "name": "Wolfstorm",
          "kind": "passive",
          "description": "60 feet. A clammy, frigid mist billows forth ahead of the adlet. Creatures within the mist become Concealed, and creatures outside the mist become concealed to creatures within it. An adlet can see through the aura without penalty."
        },
        {
          "id": "NsmFyn1MUaCrkX52",
          "name": "Frozen Weapons",
          "kind": "passive",
          "description": "Weapons wielded by an adlet gain the effect of the Frost property rune."
        },
        {
          "id": "vPFPkp810JifvYk3",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "An adlet's Strikes deal an additional 2d6 damage to creatures that are within the reach of at least two of the adlet's allies."
        },
        {
          "id": "pgVVTGf6DwqRarDp",
          "name": "Wolfrime",
          "kind": "action",
          "description": "An adlet's mist turns biting cold and coalesces into a thick rime of frost that deals 6d6[cold] damage to creatures inside the adlet's wolfstorm aura (check (fortitude, dc:26, basic)), and the aura is deactivated until the start of the adlet's next turn."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:water-orm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ZdQfNuQQjytFzuyd",
      "slug": "water-orm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0bb6a914599f71a2a5dd4a091a4ea5399524dee2c4195c9e1ddabb0605ace22d",
    "translatableHash": "sha256:ea17a99a6224b6d77bc47b65c2f67fbd4a5014bf0a9d8ee5774b8bcee8a7ecb9",
    "data": {
      "schemaVersion": 1,
      "name": "Water Orm",
      "level": 10,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "aquatic",
        "beast",
        "water"
      ],
      "description": "These legendary creatures lurking in remote lakes always seem to find their way into the tavern tales of lakeside communities. To some travelers, every lake of respectable size seems to be surrounded by towns full of fishers claiming to have spotted a water orm. These elusive creatures inhabit lakes mainly in cool and gloomy regions. Some claim that water orms are an offshoot of sea serpents and linnorms, but no credible link between these creatures has been found.\nWater orms have many features that sea serpents don't, such as the ability to understand the rudiments of language. Their natural inclination to avoid contact and remain hidden often remains at odds with their equally compelling curiosity about those they might spy upon the shores of their lakes. Water orm sightings usually occur when they can't help but to rise up to the surface to take a peek at someone (or something) particularly unusual on the beach or floating on the water's surface.\nThese creatures are extremely long lived and can go for decades, or even centuries, with very little to eat. This allows water orms to subsist in lakes without surfacing for many years, even in bodies of fresh water without ample food sources. Water orms might lie in a silty lake bed for years, their elusiveness only contributing to their mythical reputation. When a pet or child goes missing near a lake, rumors might hold that the local water orm is responsible, leading to folktales that caution residents against venturing out alone near the water.\nWhile most water orms are described as serpentine or long-necked reptiles, others look similar to bizarrely elongated seals or whales, impossibly large sea horses, or long-necked creatures with paddles resembling those of elasmosauruses.",
      "armorClass": 30,
      "hitPoints": 170,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
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
        "str": 8,
        "dex": 5,
        "con": 5,
        "int": -3,
        "wis": 5,
        "cha": 0
      },
      "skills": {
        "athletics": 19,
        "stealth": 23
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 10",
          "fire 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ThxPmnrVtmNhwvZC",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d10+11 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "g5mgwMKnHhK1J2KJ",
          "name": "Tail",
          "bonus": 24,
          "damage": "2d6+11 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "1DHVqLzll7CSy0lk",
          "name": "Slow Metabolism",
          "kind": "passive",
          "description": "A water orm can go for 10 years without feeding. Beyond this limit, the water orm's hunger causes it to become Slowed 1 but doesn't otherwise impact its lifespan. A water orm that's slowed as a result of starvation can remove this condition by using Swallow Whole to gulp down a meal."
        },
        {
          "id": "XDk7h1qohUJ5ciHb",
          "name": "Undetectable",
          "kind": "passive",
          "description": "A water orm automatically tries to counteract any detection, revelation, or scrying ability attempted against it, using its Stealth modifier for the counteract check."
        },
        {
          "id": "LJRJNDe5UkkH77yh",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (2d8+8)[bludgeoning] damage, Rupture 22"
        },
        {
          "id": "ixP8S16Fob4NTRit",
          "name": "Water Travel",
          "kind": "action",
          "description": "A water orm can dissolve into water, appearing only as a long, dark, serpentine stretch of liquid. While in this form, a water orm's swim Speed increases to 600 feet, it automatically succeeds at Athletics checks to Swim, and it gains a +4 circumstance bonus to Stealth checks in water. A water orm can remain in this form for 8 hours, but it can't enter salt water when using this ability. A water orm can return to its normal form by Dismissing this action."
        },
        {
          "id": "7IAQQwEmCY5d3iRO",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:icewyrm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "zEystWZ5lvDsnTqF",
      "slug": "icewyrm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f8296bdca97838b98ae56844f7ac844ebbecc280f7a7cfe75859f37407919e10",
    "translatableHash": "sha256:c13e0c82920d7f3f5e53039e9d13d217c8c7f4a45265c24e30805ee4c0bd895f",
    "data": {
      "schemaVersion": 1,
      "name": "Icewyrm",
      "level": 10,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "cold",
        "elemental",
        "water"
      ],
      "description": "Resembling wingless, serpentine dragons formed of jagged ice and shot through with veins of nearly frozen water, these elementals dwell within icebergs and enjoy striking out at passing ships or creatures. They're especially common in frigid stretches of ocean in the Plane of Water, where icebergs cluster together into enormous islands of ice.\nWater elementals that become infused with cold or mist have increased mobility in regions outside of bodies of water.",
      "armorClass": 30,
      "hitPoints": 185,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 21,
        "will": 17
      },
      "abilities": {
        "str": 7,
        "dex": 7,
        "con": 5,
        "int": -1,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "athletics": 21
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "cold",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "F4KhMZF8q2FrD0C9",
          "name": "Jaws",
          "bonus": 23,
          "damage": "2d12+13 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "ZyGUPCguMG5TFxsJ",
          "name": "Tail",
          "bonus": 23,
          "damage": "2d6+13 slashing; 1d6 cold",
          "traits": [
            "agile",
            "reach-15"
          ]
        },
        {
          "id": "W4pUHMSmLzdO1gCq",
          "name": "Ice Shard",
          "bonus": 23,
          "damage": "1d6+13 piercing; 1d6 cold",
          "traits": [
            "cold"
          ]
        }
      ],
      "actions": [
        {
          "id": "dX6FcyWbQOQCk2oe",
          "name": "Explosion",
          "kind": "passive",
          "description": "When the icewyrm dies, it explodes, dealing 8d6[cold|options:area-damage] damage to each creature in a @Template[type:emanation|distance:10] (check (reflex, dc:27, basic, options:area-effect) save)."
        },
        {
          "id": "MDEbv4aN0989Tv7d",
          "name": "Breathe Ice Shards",
          "kind": "action",
          "description": "The icewyrm breathes a @Template[type:line|distance:60] of freezing shards of razor-sharp ice, dealing 3d12[cold,3d12[piercing]|options:area-damage] damage to every creature in the line (check (reflex, dc:29, basic, options:area-effect) save). The icewyrm can't use Breathe Ice Shards again for [[/gmr 1d4 #Recharge Breathe Ice Shards]]{1d4 rounds}."
        },
        {
          "id": "pS4qXZ47uGUH7efn",
          "name": "Ice Burrow",
          "kind": "passive",
          "description": "The Icewyrm can Burrow through ice or snow with a Speed of 20 feet. It moves at its full burrow Speed, leaving no tunnels or signs of its passing."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "0CCsMvCrYxTCMYrh",
      "slug": "whisper-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:daa256af51006d761039e1560c9caa9724d205b3c5ef1cd913b59d1ab841e4a4",
    "translatableHash": "sha256:9675be19266a119d478cceac395cd01e8ec5da5d1fac909945261a47239fbd4e",
    "data": {
      "schemaVersion": 1,
      "name": "Whisper Dragon (Adult)",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Whisper dragons are keen collectors of rumors and secrets who spend centuries honing their information networks and relationships. They generally do so not out of an intent to hold the information over others or to use for their own machinations, but simply because the process of learning and gathering information is fulfilling. Their hoards are sparse compared to those of other dragons, as they hold their true treasures—secrets—in their minds.",
      "armorClass": 31,
      "hitPoints": 190,
      "speedFeet": 50,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 24
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 7,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 19,
        "deception": 18,
        "diplomacy": 20,
        "intimidation": 18,
        "occultism": 21,
        "society": 23,
        "stealth": 19
      },
      "languages": [
        "common",
        "draconic",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wvf12gsmaiIEZNk8",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d12+11 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "vfwwJaezS2MAmsRg",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d10+11 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "cdWBM7kdsVKs9q9W",
          "name": "Tail",
          "bonus": 22,
          "damage": "2d10+11 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "gV2dYZt1HHQFQVza",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zkcQGrvQXeO0d4YV",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eyJ8okEtlxlLWhjy",
          "name": "Information Network",
          "kind": "passive",
          "description": "The dragon can attempt a Society check to Recall Knowledge in place of a check to Gather Information, recalling intelligence from prior informants."
        },
        {
          "id": "vSiPTgWIPTPTQIaI",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VnvkdDxkW7wfBMjT",
          "name": "Diplomatic Solution",
          "kind": "passive",
          "description": "Trigger The dragon rolls initiative\nEffect The dragon targets all enemies it can see within @Template[emanation|distance:60]{60 feet} with Calm heightened to a rank equal to half the dragon's level rounded up (check (will, dc:28) save). The dragon doesn't need to Sustain this effect, but if the dragon takes any hostile action against those affected, it breaks the effect for all creatures."
        },
        {
          "id": "XZUptOpkSx0PYtkI",
          "name": "Distracting Whisper",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect A mysterious voice whispers something disconcerting in the triggering creature's ear, inflicting a –2 circumstance penalty to the triggering attack.\nEffect: Distracting Whisper"
        },
        {
          "id": "WdFNthO0BdxIqruL",
          "name": "Cogitation Breath",
          "kind": "action",
          "description": "The dragon unleashes a befuddling miasma, dealing 10d6[mental|options:area-damage] damage in a @Template[type:cone|distance:40] (check (will, dc:30, basic, options:area-effect,inflicts:stupefied) save). A creature that fails its save is Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute. The dragon can't use Cogitation Breath again for [[/gmr 1d4 #Recharge Cogitation Breath]]{1d4 rounds}."
        },
        {
          "id": "foIbgbTavh92IEGM",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "gnFWINeBp8o39lnC",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Cogitation Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "EZmRWrf1EQnbLdow",
          "name": "Steal Knowledge",
          "kind": "action",
          "description": "The dragon plucks a fragment of knowledge from the mind of a creature within 60 feet, choosing a skill to affect. The creature must attempt a check (will, dc:28) save.\nSuccess The creature is unaffected.\nFailure For the next minute, the creature takes a –1 status penalty to checks using that skill, and the dragon gets a +1 status bonus to using that skill.\nCritical Failure As failure, but the penalty is –2 and the bonus is +2."
        },
        {
          "id": "dWk0sE2yMPmzHdY2",
          "name": "Unveil Secret",
          "kind": "action",
          "description": "The dragon delves into the mind of a creature within 60 feet to scour for secrets, learning something the creature would find embarrassing or shameful unless they succeed a check (will, dc:30) save. The target becomes Frightened 1 and can't reduce their frightened condition for 1 minute or until the dragon reveals the secret. As a reaction when the affected creature attempts a check, the dragon can reveal their secret to discomfit them, requiring them to roll twice and take the lower result; this is a misfortune effect."
        }
      ],
      "spellcasting": [
        {
          "id": "hQpLecGIr5JQkFUk",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 30,
          "spells": [
            {
              "id": "HKxrPd7BmHbJHUzU",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "WRO85FOUCRQYw8f6",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "iBK9DfO7gl7b2LHG",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "bFBjTjzbnNzg2hlz",
              "name": "Clairaudience (At Will)",
              "rank": 3
            },
            {
              "id": "gTsBfiveHO30gIiq",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "oSegsy2nlB1nIiYd",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "uN0n5eW8uwlWZT33",
              "name": "Clairvoyance (At Will)",
              "rank": 4
            },
            {
              "id": "1vcENX05gySjee84",
              "name": "Mind Probe",
              "rank": 5
            },
            {
              "id": "3gTrRmpHmJp3nAXr",
              "name": "Charm",
              "rank": 6
            },
            {
              "id": "isUZZ0SGjSZpuk1r",
              "name": "Suggestion",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:garadasura",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "0pdv7wgjpnDsVIV1",
      "slug": "garadasura",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f132229316887c6bd9972ce28c024e5b41a94be5d542ae1d7308ef211206fe33",
    "translatableHash": "sha256:522b430f5e932cc02bcbcdd7db965073a1d14fd90f889464788178a43818f85a",
    "data": {
      "schemaVersion": 1,
      "name": "Garadasura",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "asura",
        "spirit"
      ],
      "description": "Garadasuras are massive ophidian spirits who hold to duties of guardianship and butchery. Many are former naga who have given up on their role of stewards of reality and instead turned their efforts to reversing the act of creation. Garadasuras often continue the duties they had as naga but can also turn destructive, rampaging with the force of an entire poisonous legion.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 40,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 19
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 6,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 23,
        "intimidation": 21,
        "performance": 21,
        "religion": 21,
        "stealth": 23
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [
          "curse",
          "disease",
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "72nPC9ya8Pja98ic",
          "name": "Scimitar",
          "bonus": 24,
          "damage": "2d6 poison; 1d6 spirit; 2d6+9 slashing",
          "traits": [
            "forceful",
            "magical",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "7NukLdAJAEhxLP3u",
          "name": "Fangs",
          "bonus": 24,
          "damage": "1d6 spirit; 2d6+9 piercing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "RpgHrdF21zrT7e1R",
          "name": "Tail",
          "bonus": 24,
          "damage": "2d6+9 bludgeoning; 1d6 spirit",
          "traits": [
            "agile",
            "reach-15"
          ]
        },
        {
          "id": "Rx5l9fGIcaUzFT05",
          "name": "Venom Spit",
          "bonus": 28,
          "damage": "2d6+6 poison",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "MhHHG3A7thGtrMjQ",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0CXSgC7Ffh11AmdZ",
          "name": "Fast Healing 5",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6gYxcRdszco3xrhm",
          "name": "Encircling Aura",
          "kind": "passive",
          "description": "50 feet. A garadasura exudes a 50-foot aura whenever it remains motionless for at least 1 round. If the garadasura has the holy trait, all allied creatures within the area gain a +1 status bonus to AC and saving throws. If the garadasura has the unholy trait, all unallied creatures that enter this area must succeed at a check (will, dc:30, options:area-effect,forced-movement) save or spend their next action to move toward the garadasura's location. If the garadasura moves, the efect ends for all currently affected creatures."
        },
        {
          "id": "X1AhOOLp0GOitePh",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "tHm3wgkFyDMMjxiF",
          "name": "Butchering Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:30)\nMaximum Duration 6 rounds\nStage 1 3d6[poison] damage and Slowed 1 (1 round)\nStage 2 4d6[poison] damage and Slowed 2 (1 round)\nStage 3 6d6[poison] damage and Paralyzed for 1 hour"
        },
        {
          "id": "dehYiGG3Z2YxC2wA",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d6+7)[bludgeoning], check (fortitude, dc:30, basic)"
        },
        {
          "id": "4DkqUzS2RotwTsdR",
          "name": "Glorious Visage",
          "kind": "action",
          "description": "The asura sanctifies themselves as either holy or unholy, gaining the trait corresponding to their choice and losing the opposing trait; their strikes, spells, and abilities also gain the trait corresponding to their choice. The asura also gains weakness 10 to the opposing sanctification and loses any weakness to its chosen sanctification. The choice is permanent until the asura uses this ability to change their sanctification."
        },
        {
          "id": "rTL7mF7ksWTlVNw9",
          "name": "Slither",
          "kind": "action",
          "description": "The garadasura Strides or Swims up to half its Speed, pulling any creatures it has Grabbed with it."
        },
        {
          "id": "1SrblqAtXEROaDuv",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (2d10+9)[bludgeoning], Rupture 30"
        },
        {
          "id": "uMXKFqIG3ZKjHoNO",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spiral-centurion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "5Gw0j1Qbh1uXUhkj",
      "slug": "spiral-centurion",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:26f41bfab4f9fa83219f70f923c7d213e7206b6d2175941713af2d3bb33785a6",
    "translatableHash": "sha256:d86bdee4a2aded8af3bae165c3d0493620b0117305b0f7a18f9beb7ff2287310",
    "data": {
      "schemaVersion": 1,
      "name": "Spiral Centurion",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "These mechanical constructs were created to serve as guardians in an ancient and bygone era, although exactly who made them and the secrets of their construction have long since been lost to history. From the waist up, they resemble humanoids made of metal, but from the waist down, their bodies take the form of spinning metal tops ringed with blades that excel at cutting down nearby foes. Most spiral centurions can be directed to stand down with a password, but often these command phrases have been lost to the mists of time. In rare cases, a spiral centurion can also wield manufactured weapons or a shield in addition to its built-in weapons, giving it access to additional actions besides those listed below.\nMost spiral centurions are hundreds or even thousands of years old, only staying functional because of the powerful magic used in their creation. Still, millennia of neglect have caused many spiral centurions to develop small glitches or malfunctions.",
      "armorClass": 31,
      "hitPoints": 170,
      "speedFeet": 40,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 25,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 6,
        "con": 5,
        "int": -5,
        "wis": 2,
        "cha": -5
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qAykd9NBCQzObEjm",
          "name": "Blade",
          "bonus": 23,
          "damage": "2d12+12 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "8SO4HlejQGDEY7MZ",
          "name": "Top-Heavy",
          "kind": "passive",
          "description": "A spiral centurion's top-like design makes it susceptible to effects that would cause it to fall Prone. The DC of any attempt to knock the spiral centurion prone is reduced by 5. If the spiral centurion attempts a check or saving throw to resist being knocked prone, it takes a –5 status penalty. A spiral centurion that has been knocked prone can't use any actions other than to attempt to Stand, but it must succeed at a check (acrobatics, dc:30) check to do so."
        },
        {
          "id": "4gwjWKeZ1qsrbvjD",
          "name": "Hurl Blade",
          "kind": "action",
          "description": "The spiral centurion hurls one of its blades with an angled spin to ensure a swooping flight path. The blade deals 6d6[slashing|options:area-damage] damage to each creature in a @Template[type:line|distance:40] (check (reflex, dc:30, basic) save).\nAt the start of the spiral centurion's next turn, the blade swoops around and returns along the same flight path, again dealing 6d6[slashing|options:area-damage] damage (check (reflex, dc:30, basic) save) to each creature along the same line."
        },
        {
          "id": "w4QXU6YbX6hTA0ov",
          "name": "Rev Up",
          "kind": "action",
          "description": "Requirements The spiral centurion hasn't acted yet this turn\nEffect The spiral centurion Strides up to its Speed. It then gains a +2 circumstance bonus to attack and damage rolls until the end of its turn."
        },
        {
          "id": "KAw4HNUZzVDNAT0n",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, blade, check (reflex, dc:30, basic)"
        },
        {
          "id": "1uZRuK9pqKEMWCtB",
          "name": "Whirling Death",
          "kind": "action",
          "description": "The spiral centurion spins furiously in place, its blades extended to slice through nearby creatures. It makes up to five melee blade Strikes. No single creature can be targeted by more than one blade Strike during one use of this ability. These attacks count toward the spiral centurion's multiple attack penalty, but the multiple attack penalty doesn't increase until after all the attacks are made."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:brainchild",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "6WgGNVcmuwNlGDJP",
      "slug": "brainchild",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0660ed08aa7019c8d21fef79935438e5ee2167c9c8e0f230897f1c5729cbc850",
    "translatableHash": "sha256:474b047936c66965af3592c1fb7c8d82c89eadf34d98b204825a471eb70ee143",
    "data": {
      "schemaVersion": 1,
      "name": "Brainchild",
      "level": 11,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "illusion",
        "mental"
      ],
      "description": "A rumor can become so vivid and persistent that it comes to life, creating a brainchild—a living illusion that hatches from an intense belief in a remorseless and implacable killer. Often, these rumors are borne from victims of a Vision of Death spell. A brainchild's capabilities grow when they pursue a believer but deflate against skeptics, making them only as dangerous as one believes them to be. A simple drive to stalk, terrify, and kill propels a brainchild, but the creature might also exhibit other behaviors ascribed to them through gossip.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 22,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 4,
        "int": 2,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "deception": 22,
        "intimidation": 24,
        "performance": 22,
        "society": 21,
        "stealth": 20
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "doomed",
          "scrying"
        ],
        "resistances": [],
        "weaknesses": [
          "mental 10"
        ]
      },
      "attacks": [
        {
          "id": "YKo3Am15Wz2kJyKI",
          "name": "Illusory Weapon",
          "bonus": 24,
          "damage": "4d6+10 mental",
          "traits": [
            "illusion",
            "mental",
            "occult"
          ]
        },
        {
          "id": "JA8W1EoSKmMH74zg",
          "name": "Illusory Weapon",
          "bonus": 24,
          "damage": "4d6+6 mental",
          "traits": [
            "illusion",
            "mental",
            "occult"
          ]
        }
      ],
      "actions": [
        {
          "id": "YzA4FebdyXfdfD73",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6u4WiGSgJcSBMIVQ",
          "name": "Universal Language",
          "kind": "passive",
          "description": "Anything spoken by the brainchild is perceived by the listener in its native language."
        },
        {
          "id": "X8q0VOcCAdQbazmw",
          "name": "Urban Legend",
          "kind": "passive",
          "description": "A brainchild is sustained only by the reputation that precedes them. Mindless creatures are immune to a brainchild and can't perceive them.\nThe brainchild's size, features, and items, as well as the appearance of their attacks, match what the foes perceiving them expect. If foes expect to see different things, the brainchild chooses which to manifest. If any creature that can perceive the brainchild believes the brainchild has one of the abilities below, the brainchild has that ability.\nA creature can Seek or Sense Motive (against the brainchild's Deception DC) to attempt to disbelieve an individual ability. If at any point no creature perceiving the brainchild believes in the ability, the brainchild loses that ability immediately. If foes expect different particulars, such as one believing the brainchild is immune to fire and another believing they're immune to divinations, the brainchild chooses one to have.\n• Tremorsense (imprecise) 100 feet\n• Immunity to one damage type, magic school, or condition\n• Weakness 10 to one damage type other than mental\n• Resistance 10 to physical damage, with an exception for either cold iron or silver\n• Frightful Presence (aura, emotion, fear, mental) 100 feet, DC 28\n• [[/r 1d6]]{1d6} Extra Damage on Strikes, of a type one foe believes in\n• Additional Spells Phantom Pain and Shadow Blast at 6th rank"
        },
        {
          "id": "ia7nfgIs3ERJytZy",
          "name": "Persistence of Memory",
          "kind": "passive",
          "description": "When a brainchild is destroyed, it returns if anyone still fully believes it exists, re-forming within 100 feet of any believer after [[/br 2d4 #Persistance of Memory]]{2d4 days}."
        }
      ],
      "spellcasting": [
        {
          "id": "gLEu7XWn7pQSVc6w",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "seP0NGUChpUSv1ig",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "8UUNPxok53FTJal7",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "QWZACQakIZ1xcWb4",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "qaLXs7SGQuSpy8Dv",
              "name": "Vision of Death (image resembles the brainchild)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vigilia",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "9FaVwxdsH5w0e114",
      "slug": "vigilia",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:567c01dc197067e9792959abc2309f0cbc179f2fed39b46702db2324ad1bca07",
    "translatableHash": "sha256:e723665a23b8644218257a71a9b6891566a76eecf84bdddf0cfedc12d3df04d7",
    "data": {
      "schemaVersion": 1,
      "name": "Vigilia",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "Axis's construct guardians are built in great numbers by axiomites and regularly patrol the streets of that rigidly structured metropolis. Beyond the city, a vigilia can be summoned by mortals to guard a specifc location or enforce a leader's edicts.\nAlthough generally humanoid in form, their bodies are a loose mesh of brass strips around a crystalline core like the arbiters they're based on. Each vigilia's core is formed around a different fragment of legal text from Axis's vast libraries. This bylaw or subsection, although not necessarily important to others, forms the mystical and emotional driving force behind these sentinels.\nLeft to their own devices, vigilias typically enforce local laws to the best of their understanding, falling back on the labyrinthine ordinances of Axis to fll in any gaps. Although vigilias are uncomfortable making judgment calls, they're capable of doing so. That said, this discomfort frequently causes them to seek refuge in areas with the most complex and complete laws.",
      "armorClass": 30,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 18,
        "will": 20
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 5,
        "int": 2,
        "wis": 5,
        "cha": -1
      },
      "skills": {
        "athletics": 20
      },
      "languages": [
        "common",
        "diabolic",
        "empyrean",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "emotion",
          "fear-effects"
        ],
        "resistances": [
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "CKDAHGZLeaxzfQbz",
          "name": "Fist",
          "bonus": 24,
          "damage": "2d10+10 bludgeoning; 1d10 electricity",
          "traits": [
            "magical",
            "nonlethal"
          ]
        }
      ],
      "actions": [
        {
          "id": "vEYdUpBww370sGIX",
          "name": "Electrical Purge",
          "kind": "action",
          "description": "The vigilia releases lightning from their body in a @Template[type:emanation|distance:30] dealing 4d10[electricity|options:area-damage] damage (check (reflex, dc:30, basic) save) to all creatures that aren't aeons or constructs. The vigilia is then Slowed 1 for 1 round."
        },
        {
          "id": "j1ejW1HNjLpzBrmh",
          "name": "Lightning Chain",
          "kind": "action",
          "description": "The vigilia wraps momentary chains of electrical energy around a creature within 60 feet, dealing 2d10[electricity] damage (check (reflex, dc:30, basic) save). A creature that fails its save is also pulled 10 feet toward the vigilia (20 feet on a critical failure)."
        },
        {
          "id": "mab3JZW2e16yWiEC",
          "name": "Take Prisoner",
          "kind": "action",
          "description": "The vigilia Interacts to pick up a Medium or smaller Unconscious creature within its reach, then Strides."
        }
      ],
      "spellcasting": [
        {
          "id": "TfxIcQi8QBXUd1Hr",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 30,
          "spells": [
            {
              "id": "N9a5ZuH17pRQZZvK",
              "name": "See the Unseen(Constant)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spinosaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "cbcNwxJAur5r7sr5",
      "slug": "spinosaurus",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b94a114e38c18e34443788c2f79ed37bf43d2dd7004a363d86adad81890eb7bf",
    "translatableHash": "sha256:3840cb3860808da7cfc3c7738cf68745f606608dbb404a1ea899f0e64c794737",
    "data": {
      "schemaVersion": 1,
      "name": "Spinosaurus",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "The spinosaurus is more than just one of the largest carnivorous dinosaurs—it's also one of the most unusual in appearance, with a large, sail-like fin running along its spine. Often quite colorful, this sail allows the spinosaurus to attract mates, aids in swimming, and makes it appear to be even larger than it actually is. A swimming spinosaurus can also use the sail as part of a unique means of staggering prey by slapping the water with it to make a crushing wave. A spinosaurus can measure up to 60 feet in length and weigh 25,000 pounds.\nThe spinosaurus is equally at home in water as it is on land, and its long, toothy maw is well-adapted for catching swimming prey. Attempts by giants to capture spinosauruses to serve as guardians typically go poorly, for these headstrong dinosaurs do not domesticate well. Their surly attitudes and striking appearances make them better suited for blood sports, and they're popular prizes for those who run arenas specializing in battles that pit gladiators against hungry animals or beasts. These productions are truly feasts of gore for the eyes and command audiences from hundreds of miles around. Of course, an angry dinosaur forced to fight for the amusement of others won't discriminate between potential meals on the battleground and those seated in the surrounding stands, making the seats closest to the edge of the arena possibly part of the show as well.\nThe spinosaurus's appearance and strength make it attractive to more than just giants and blood sport organizers. Spellcasters who mutate and transform animals into magical guardians have long been intrigued by the spinosaurus's potential. Due to the creature's reputation for violence, these spellcasters face great danger while charming one to bring home. Yet for those intrigued by the creature's hypothetical abilities, such risk is worth it. More so than any other dinosaur, spinosauruses have been subjected to fleshwarping procedures, crossbreeding with monsters, and other magical techniques at the hands of reclusive spellcasters experimenting to enhance the creatures' viability as effective guardians.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 40,
      "perception": {
        "modifier": 21,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": -4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "mmb4NGB4HueXi8Ty",
          "name": "Bite",
          "bonus": 23,
          "damage": "2d12+14 piercing",
          "traits": [
            "deadly-d12",
            "reach-20"
          ]
        },
        {
          "id": "fysusPtWaa25MvUW",
          "name": "Claw",
          "bonus": 23,
          "damage": "2d8+14 slashing",
          "traits": [
            "agile",
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "oQcnbbUjvuJ6yIaK",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A spinosaurus can hold its breath for 2 hours."
        },
        {
          "id": "BYqZd7dW5USVQMnx",
          "name": "Rip and Tear",
          "kind": "action",
          "description": "Requirements The spinosaurus has a creature Grabbed or Restrained in its jaws\nEffect The spinosaurus reaches up and slashes with its claws at the creature it has grabbed, dealing 4d8[slashing] damage (check (reflex, dc:30, basic) save). A creature who fails this save also takes 1d6[persistent,bleed] damage."
        },
        {
          "id": "t0On0v7gyVoScNyY",
          "name": "Staggering Sail",
          "kind": "action",
          "description": "Requirements The spinosaurus is swimming on the surface of water\nEffect With a powerful lunge to the side, the spinosaurus uses its sail to slap the surface of the water, creating a crushing wave of water that deals 6d6[bludgeoning|options:area-damage] damage in a @Template[cone|distance:30]. Each creature in the water in the area must attempt a check (reflex, dc:30, options:area-effect,damaging-effect,inflicts:slowed,inflicts:stunned) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Slowed 1 until the end of its next turn.\nCritical Failure The creature takes double damage and is Stunned 3."
        },
        {
          "id": "sW9lqWGbyXr7xeXh",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, 2d12[bludgeoning] damage, Rupture 19"
        },
        {
          "id": "C59c2YpUbKfcGuPp",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skeleton-infantry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dwPrJjsIA0AEk3vl",
      "slug": "skeleton-infantry",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5641c5c2526dd462acfd2d67304be48b130c7d46f5dfd375151590dd76635658",
    "translatableHash": "sha256:2b21b243c4765c3fe08bf5cf57a046f8830dff25434da1a6316119f2fabf73d3",
    "data": {
      "schemaVersion": 1,
      "name": "Skeleton Infantry",
      "level": 11,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "mindless",
        "skeleton",
        "troop",
        "undead",
        "unholy"
      ],
      "description": "This troop of skeletons was once a cohort of highly disciplined spear-and-shield infantry from an ancient empire.\nAlmost any creature that had bones in life and leaves them behind in death can become a shambling, undead skeleton-humanoids, beasts, aberrations, fey, and more.",
      "armorClass": 31,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 19
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "mental",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [
          "cold 5",
          "electricity 5",
          "fire 5",
          "piercing 10",
          "slashing 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "AHL4n7RnueMnqqXS",
          "name": "Form a Phalanx",
          "kind": "action",
          "description": "Many of the skeletons raise their shields to protect others. The infantry gain a +2 circumstance bonus to AC until the start of their next turn."
        },
        {
          "id": "Q7bhdveHuNg7fLZs",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "HP 180 (4 segments); Thresholds 120 (3 segments), 60 (2 segments);"
        },
        {
          "id": "Bw2zDEye8SPrcS3G",
          "name": "Troop Movement",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "L4eZWrxPCscqkfv1",
          "name": "Hurl Javelins!",
          "kind": "action",
          "description": "The troop's members throw a volley of javelins. Each creature in a @Template[type:burst|distance:10] within 30 feet of the troop takes (2d6+10)[piercing|options:area-damage] damage (check (reflex, dc:27, basic, options:area-effect) save). When the troop is reduced to 2 segments, this area decreases to a @Template[type:burst|distance:5]."
        },
        {
          "id": "2lp8axHkLWnfErrb",
          "name": "Lower Spears!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The skeletons engage in a coordinated longspear attack against each enemy within @Template[emanation|distance:10]{10 feet} (check (reflex, dc:27, basic, options:area-effect) save). The damage depends on the number of actions.\n1 2d8[piercing|options:area-damage] damage\n2 (3d8+7)[piercing|options:area-damage] damage\n3 (4d8+7)[piercing|options:area-damage] damage"
        },
        {
          "id": "n7LgURaW8hihxzYn",
          "name": "Phalanx Charge",
          "kind": "action",
          "description": "Requirements The infantry is in a phalanx\nEffect The skeletons lower their longspears and charge. The troop Strides in a straight line until they're adjacent to an enemy then use Lower Spears!, dealing (3d8+7)[piercing] damage. Any creature that fails its save is also knocked Prone."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ash-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dZEC0cMT0CvCOrl2",
      "slug": "ash-giant",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad273ed9755afd4827c22f12580994bd67f078f6dda7b3eb98af902ccb715da8",
    "translatableHash": "sha256:da09e0a5a3761a879aa360643af1334ce3d6d378ec15ebc0433b70f729cb5f36",
    "data": {
      "schemaVersion": 1,
      "name": "Ash Giant",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "Rugged and covered in pustules and sores from wandering harsh wastelands, ash giants dwell in the unwelcoming wilderness. Their lives are difficult, hardening them into utterly vicious, capricious, and cruel creatures. Their sadistic sense of humor and love for pranks makes them hated by almost all humanoids they encounter. Despite being crass and rough, ash giants are survivors above all, and they use their ingenuity to craft weapons, traps, harnesses for mounts, and tools. If the aim is cruelty, brutality, or a prank, an ash giant will find a way to craft the tools they need. Piggy clods are a favorite construction—contraptions of scrap iron and other metals rigged into a ball that explodes on impact.\nSpread across the world, giants are as diverse as the isolated places they inhabit. A giant makes a big impression on the local environment, especially on smaller and weaker creatures.",
      "armorClass": 30,
      "hitPoints": 240,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 18,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 6,
        "int": -1,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "athletics": 24,
        "crafting": 16,
        "diplomacy": 16,
        "intimidation": 21,
        "survival": 21
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
          "id": "PW9v8f6Hfu1ElFfp",
          "name": "War Flail",
          "bonus": 24,
          "damage": "2d10+13 bludgeoning",
          "traits": [
            "disarm",
            "magical",
            "reach-10",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "7MKDLcP6s5TCT7Os",
          "name": "Fist",
          "bonus": 24,
          "damage": "2d4+13 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "hHSP3HRNZQX1ww36",
          "name": "Piggy Clod",
          "bonus": 24,
          "damage": "2d8+7 slashing; 5 slashing",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "DcQ27Bip61jNm15p",
          "name": "Vermin Empathy",
          "kind": "passive",
          "description": "The ash giant can ask questions of, receive answers from, and use the Diplomacy skill with insects, arachnids, and similar creatures."
        },
        {
          "id": "WdWVS7B9f7eqMitv",
          "name": "+2 Status to All Saves vs. Disease",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5nUXyWhPLXUerMiA",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "F41YRBN6amA5eY2O",
          "name": "Tumor Pop",
          "kind": "passive",
          "description": "When the ash giant takes piercing damage while they have a swollen tumor, the tumor explodes automatically, with the effect of Blastboil."
        },
        {
          "id": "lIIwlGQD3NdnsK5t",
          "name": "Blastboil",
          "kind": "action",
          "description": "The ash giant pops one of the massive, swollen pustules on their body. Each creature in a @Template[type:cone|distance:15] takes 5d8[poison|options:area-damage] damage with a check (reflex, dc:29, basic, options:area-effect,inflicts:sickened) save. A creature that fails its save is also Sickened 1 (or Sickened 2 on a critical failure). This ability and tumor pop can't be used again until another tumor swells to a suitable size in [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        {
          "id": "ycGzzDkl7WG1FIsA",
          "name": "Gore Grinder",
          "kind": "action",
          "description": "Requirements The ash giant's last action was a successful war flail Strike\nEffect The ash giant wraps the chain of the flail around the target and grinds its flesh. The creature takes 2d10[slashing,2d8[persistent,bleed]]{2d8 slashing damage and 2d8 persistent bleed damage} with a check (fortitude, dc:30, basic) save."
        },
        {
          "id": "hYa3M7gNghfbyoPE",
          "name": "Tangle-Topple",
          "kind": "action",
          "description": "The ash giant makes a piggy clod Strike. If it hits, the target is tangled in ragged scrap. It's Immobilized, can't leave the ground, and falls to the ground if it's flying. This ends if the creature [[/act escape]]{Escapes} or the metal is [[/act force-open dc=28]]{Forced Open}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:meladaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "faZ3sXbvs51DFvrM",
      "slug": "meladaemon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:24bfa371cd0cedf83ca43c52487242b378a0aa5f63cadb6048774d769eb8986c",
    "translatableHash": "sha256:8a51045afe7408c646520b5e82044645c129a611804002eeec925ec33c4ee65d",
    "data": {
      "schemaVersion": 1,
      "name": "Meladaemon",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "Meladaemons personify death by starvation and thirst, and revel in spreading the same despair that brought about their mortal demise. When they aren't blighting fields, massacring livestock, or tainting water supplies, they experiment on prisoners to study how long creatures can go without sustenance and the deleterious effects that result from such deprivation. Fiercely loyal to Trelmarixian, Horseman of Famine, they serve no other beings. They work alongside other daemons if Trelmarixian wills it, but are notoriously traitorous.",
      "armorClass": 31,
      "hitPoints": 225,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "lifesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 20,
        "will": 19
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 3,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 21,
        "deception": 23,
        "intimidation": 23,
        "religion": 20,
        "stealth": 23,
        "survival": 19
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "jpeqjLFSGfQaHqwb",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d12+16 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unholy"
          ]
        },
        {
          "id": "zHWFkxssQtSSZH42",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d8+16 slashing",
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
          "id": "HRJpFIoBwbJ1rwnG",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dTZURdZLg8n5enSz",
          "name": "Lifesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "c3PzbXMSnqoOehvP",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "BmhdDSnmoRYLlefv",
          "name": "Consumptive Aura",
          "kind": "passive",
          "description": "20 feet. A meladaemon emanates an aura of intense hunger. Each round a creature begins its turn in the aura, it must attempt a check (fortitude, dc:27, options:area-effect,damaging-effect,inflicts:fatigued) save. On a failure, the creature takes 1d6[void|options:area-damage] damage (2d6[void|options:area-damage] damage on a critical failure) and becomes Fatigued. This fatigue ends as soon as the creature eats any food."
        },
        {
          "id": "rx9aGcoGrLLVPzhV",
          "name": "Withering Opportunity",
          "kind": "reaction",
          "description": "Trigger The meladaemon is attacked by an adjacent creature and the attack misses\nEffect The meladaemon swipes at the triggering creature, which must immediately attempt a save against the meladaemon's withering touch."
        },
        {
          "id": "S8XYYEnqxZeY5C7K",
          "name": "Daemonic Famine",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:29)\nStage 1 carrier with no ill effect (1 day)\nStage 2 Enfeebled 1 (1 day)\nStage 3 Enfeebled 2 (1 day)\nStage 4 as stage 3\nStage 5 Enfeebled 3 (1 week)\nStage 6 dead"
        },
        {
          "id": "ERMHc3Xc7e0s0qGD",
          "name": "Withering Touch",
          "kind": "passive",
          "description": "When the meladaemon hits with a claw Strike or a creature begins its turn Grabbed by the meladaemon, the creature must attempt a check (fortitude, dc:30, options:damaging-effect,inflicts:fatigued) save. On a failure, the creature takes 1d6[void] damage and becomes Fatigued. This fatigue ends when the creature drinks."
        },
        {
          "id": "d4npRCLSCUhI7iww",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "OACmutVuYdHoFbvw",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 31,
          "spells": [
            {
              "id": "ARgSXbi7YTyqxDpw",
              "name": "Translocate (At will)",
              "rank": 4
            },
            {
              "id": "pSQCf3m3lML6XaSp",
              "name": "Fear",
              "rank": 5
            },
            {
              "id": "8lQzvlhmZk1A0Cgw",
              "name": "Force Barrage (At will)",
              "rank": 5
            },
            {
              "id": "n9tpbLZJuCML2aEm",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "eWYkBia919BmhUz4",
              "name": "Phantom Pain",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:larabay",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "hfrQX3e691B8sgTR",
      "slug": "larabay",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:464f4ae773c327757aa8b0e803cb632893e55cc3b8c9d5e839d7c5a51ca296f2",
    "translatableHash": "sha256:59e49a51cb3b78046e8197d673a4f128bbdb5a50af54ce695a06b1955dd1937a",
    "data": {
      "schemaVersion": 1,
      "name": "Larabay",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fey"
      ],
      "description": "Larabays are bright-eyed, humanoid-looking fey with colorful wings and needlelike teeth who generally reside along warm coastal regions and islands. Like other fey, they enjoy lavish pranks and fantastical illusions that create chicanery and confusion. A larabay's desire for a joke can sometimes reach dire extremes, such as employing illusions to lure ships into rocks and travelers off cliffs. While some have fortuitously become heroes by playing pranks on tyrants or cruel people, this is almost entirely coincidental, as larabays do not often consider the morals or goals of their targets; they simply enjoy the fruits of their chaos.",
      "armorClass": 30,
      "hitPoints": 175,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 24,
        "will": 21
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 3,
        "int": 4,
        "wis": 4,
        "cha": 7
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 17,
        "deception": 24,
        "diplomacy": 22,
        "nature": 19,
        "performance": 22,
        "thievery": 23
      },
      "languages": [
        "common",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "9fcLhRTwbEpswhYp",
          "name": "Rapier",
          "bonus": 23,
          "damage": "2d6+12 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "NqTNTK0tl3QCKa5B",
          "name": "Befuddling Gaze",
          "bonus": 22,
          "damage": "2d8+10 mental",
          "traits": [
            "magical",
            "mental",
            "visual"
          ]
        }
      ],
      "actions": [
        {
          "id": "jhjJPtEMq18J1owa",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "wnOoVALDen1uuvTp",
          "name": "Befuddling Visions",
          "kind": "passive",
          "description": "The larabay's gaze creates disorientation and confusion. A creature hit by befuddling gaze must attempt a Will save.\nCritical Success The target is unaffected and temporarily immune to befuddling visions for 1 minute.\nSuccess The target is unaffected.\nFailure The target becomes clumsy and Dazzled for 1 round.\nCritical Failure The target becomes Confused for 1 round, and clumsy and dazzled for 1 round afterward."
        },
        {
          "id": "sKAr2cQ7HlVEltcZ",
          "name": "Change Shape",
          "kind": "action",
          "description": "The larabay can take on the appearance of a specific Medium or Small humanoid. This removes their fly Speed but doesn't change the attack and damage modifiers with their Strikes."
        },
        {
          "id": "c1QNAgPGujN03z8P",
          "name": "Mischief",
          "kind": "action",
          "description": "Requirements The larabay's last action was a successful rapier Strike\nEffect The larabay attempts to Disarm the creature they hit. They gain a +4 status bonus to the Athletics check. This attempt neither applies nor counts toward the larabay's multiple attack penalty."
        },
        {
          "id": "HEcM1oG1748cqEWv",
          "name": "Rainbow Flight",
          "kind": "action",
          "description": "The larabay Flies up to its fly Speed, creating a stunning rainbow in its wake. This movement doesn't provoke reactions. Any creature adjacent to the larabay at any point during this movement must attempt a check (will, dc:30) saving throw to resist staring at the magnificent rainbow. The larabay cannot use Rainbow Flight again for [[/gmr 1d4 #Recharge Rainbow Flight]]{1d4 rounds}.\nCritical Success The target is unaffected.\nSuccess The target is Dazzled for 1 round.\nFailure The target is dazzled for 1 round and Slowed 1.\nCritical Failure The target is dazzled for 1 minute and Slowed 2."
        }
      ],
      "spellcasting": [
        {
          "id": "lKFIRb9TB714ct1E",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "l5vM1p9S8ja4fZNL",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "bvI0yXCKaBXmkD2a",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "q9MUr76VZmGi6UuC",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "avldvJFRLhlY8XIe",
              "name": "Illusory Object",
              "rank": 5
            },
            {
              "id": "9BRyjkDyMGlEDV3W",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "P9GRl8QRA7fsEGS0",
              "name": "Cursed Metamorphosis",
              "rank": 6
            },
            {
              "id": "lakyG785Lie8cdpA",
              "name": "Hallucination",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:argorth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "JMegWvgrPVElJYDW",
      "slug": "argorth",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:634ee49294a4e986902f07ec47a03804cf4472b9959200b47cf1699d7eeaf860",
    "translatableHash": "sha256:4e318e5bef07153391f317bb645591d73c4cf1b413415cf7eced05af334cf457",
    "data": {
      "schemaVersion": 1,
      "name": "Argorth",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "aberration",
        "mindless"
      ],
      "description": "An argorth is a huge, worm-like creature with three massive spiked mandibles surrounding its gnashing maw. It moves atop a series of hook-shaped bones protruding from its underbelly, supplemented by an occasional push with the back half of its 30-foot length. The mindless, eyeless argorth knows nothing but rage and destruction, making it more like a natural disaster than any known beast of the natural world.\nArgorths are the incomprehensible spawn of dibrasgorths. They slough off fully formed from the parent creature's mass of tentacles, though scholars and sages don't know exactly when or why this process occurs. The study of such aberrations is hindered by their incredibly violent nature; not many can escape the fury of an argorth, let alone a molting dibrasgorth. Once birthed, an argorth immediately engages in the wanton destruction of everything around it. Though it has no eyes, both its ability to instinctively sense creatures with pumping blood as well as the thousands of tiny coarse hairs covering its body allowing it to \"smell\" the air around it ensure that nothing escapes its rampage.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "bloodsense-120",
          "scent-imprecise-60"
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
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "acid 10",
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7KqASSnXr8Bhi09L",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d10+13 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "AvuXA8VjNMqsc97A",
          "name": "Tail",
          "bonus": 24,
          "damage": "2d8+13 bludgeoning",
          "traits": [
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "D2bAufXs98uxltKn",
          "name": "Bloodsense",
          "kind": "passive",
          "description": "The argorth can detect any creature that has a heartbeat, such as most humanoids, or any creature that's consumed blood within 1 week, such as a vampire."
        },
        {
          "id": "LwhL0DrelXDydXZi",
          "name": "Death Slam",
          "kind": "reaction",
          "description": "Trigger The argorth is reduced to 0 Hit Points\nEffect Before it's knocked out, the argorth makes a tail Strike against a random creature within reach."
        },
        {
          "id": "bdFAgVbAcmSp7PxU",
          "name": "Constrict",
          "kind": "action",
          "description": "The argorth can only Constrict creatures Grabbed by its tail.\n(2d8+7)[bludgeoning], check (fortitude, dc:27, basic)"
        },
        {
          "id": "nR8duCVvBdxwPkZG",
          "name": "Ground Pound",
          "kind": "action",
          "description": "The argorth rears up its massive bulk and slams it downward with incredible force. Each creature in a @Template[type:emanation|distance:10] takes 5d8[bludgeoning|options:area-damage] damage (check (reflex, dc:27, basic, options:area-effect,inflicts:prone) save). A creature who critically fails this save is also knocked Prone."
        },
        {
          "id": "ADEKj7WtXpaMTJsI",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (2d8+7)[bludgeoning], Rupture 24"
        },
        {
          "id": "xfLLF3SeG0v8yQNe",
          "name": "Unnatural Shriek",
          "kind": "action",
          "description": "The argorth emits a terrible howl not of the mortal world. Each non-aberration creature within 120 feet must attempt a check (will, dc:30, options:area-effect,inflicts:frightened) save. Regardless of the result, a creature is temporarily immune to the argorth's Unnatural Shriek for 24 hours.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is stupefed 1 for 1 minute and Frightened 2.\nCritical Failure The creature is stupefed 2 for 1 minute and Frightened 3."
        },
        {
          "id": "QzamKAeEQgw5VvBA",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:atrixyl",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "KxVSaTjRAUwTWeDX",
      "slug": "atrixyl",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:303b2a7ed627fd3a20ce554336a03bf036d288a79c037fe9c8b359e2f29713fe",
    "translatableHash": "sha256:3bb1323a386a0c7780e5cfadb80960071182e7c75becab1b3922a36b280b6187",
    "data": {
      "schemaVersion": 1,
      "name": "Atrixyl",
      "level": 11,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Very rarely, when sinspawn (Monster Core 310) sacrifce sentient beings to runewells, instead of sinspawn, an altogether different sort of aberration is created. Atrixyls are insectile humanoid warriors, whose powers are similar to yet stronger than ordinary sinspawn, and who are dedicated to destroying runewells and similar feshwarping artifacts. Some atrixyls seek to destroy runewells due to an imprinting of pain and suffering that occurs during their creation, seeking to prevent future suffering from runewells. Others seek to break a runewell and tap into its magical energies to gain personal power. This relentless mission has earned them the epithet \"runebreakers,\" and brings them into confict with the sinspawn whose existences depend upon these runewells.\nAtrixyls traverse Golarion's ruined wastelands in search of both ancient runewells and more contemporary feshwarping facilities.",
      "armorClass": 31,
      "hitPoints": 190,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
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
        "con": 4,
        "int": 3,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 22,
        "arcana": 20,
        "athletics": 22,
        "deception": 18,
        "diplomacy": 18,
        "intimidation": 20,
        "occultism": 20,
        "stealth": 22,
        "survival": 16
      },
      "languages": [
        "aklo",
        "common",
        "draconic",
        "elven",
        "sakvroth",
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
          "acid 10"
        ]
      },
      "attacks": [
        {
          "id": "RQNShsaROepiPbtE",
          "name": "Fist",
          "bonus": 23,
          "damage": "2d12+10 bludgeoning",
          "traits": [
            "agile",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "YMARO505FZmjZpWY",
          "name": "True Sin Scent",
          "kind": "passive",
          "description": "An atrixyl can smell creatures that refect or generally revel in any of the seven sins as defned by the ancient empire of Thassilon (envy, gluttony, greed, lust, pride, sloth, and wrath) within 60 feet as a precise sense and can also distinguish between diferent sins and creatures. These typically include sinspawn and certain demons, though the GM ultimately determines which creatures are appropriately sinful."
        },
        {
          "id": "5juOtu2EkXmkejEA",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "d37h3mTK9ciNE4N1",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "SBzvpsaXBalZcAkX",
          "name": "Spell Break",
          "kind": "reaction",
          "description": "Trigger The atrixyl critically succeeds on a saving throw\nEffect The atrixyl shatters the portion of magic that would afect them and uses it to empower themself. The atrixyl gains temporary Hit Points equal to twice the triggering spell's rank and a +4 status bonus to damage rolls for 1 round."
        },
        {
          "id": "MXDN7yyB77gPSzPT",
          "name": "Absorb Sin",
          "kind": "passive",
          "description": "Trigger The atrixyl reduces a creature it can smell with its true sin scent to 0 Hit Points\nEffect The atrixyl regains 6d6[healing] Hit Points."
        },
        {
          "id": "GfR5Qqu6MOwUlJTK",
          "name": "Change Shape",
          "kind": "action",
          "description": "The atrixyl takes on the appearance of any Medium humanoid. This doesn't change the atrixyl's Speed or their attack and damage modifers with their Strikes but might change the damage type their Strikes deal."
        },
        {
          "id": "8k74w7FN74QZbTNm",
          "name": "Insectile Agility",
          "kind": "passive",
          "description": "When the atrixyl Leaps, High Jumps, or Long Jumps, they can increase horizontal and vertical distances traveled by up to 10 feet. They also treat falls as 50 feet shorter."
        },
        {
          "id": "WPvhK2T7FUSP1nqf",
          "name": "Resonating Kick",
          "kind": "action",
          "description": "The atrixyl makes a fist Strike. If the target is an aberration or is capable of casting spells from the arcane tradition, this attack deals an additional 2d12 force damage."
        },
        {
          "id": "2bnofAiYGaisRrPN",
          "name": "Roundhouse Smash",
          "kind": "action",
          "description": "The atrixyl makes a fist Strike and compares the attack roll result to the AC of up to two foes, each of whom must be within the atrixyl's melee reach and adjacent to each other. Roll damage only once and apply it to each creature hit. This counts as two attacks for the atrixyl's multiple attack penalty."
        },
        {
          "id": "cpBYMwffWhKVMu41",
          "name": "Improved Push",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:unrisen",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "n40ubwOuMGF7HHZ6",
      "slug": "unrisen",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5ecdee75c3adc7f7d16b9185976e421590cc6099d3096231516393440f1cabca",
    "translatableHash": "sha256:a40cb210dc693f815b1c82dd48ec98546d38e4027cefb0b92ab7c829f37e3edb",
    "data": {
      "schemaVersion": 1,
      "name": "Unrisen",
      "level": 11,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "An unrisen is a mangled conglomeration of splintered bones, decaying organs, and rotting flesh, created when a ritual such as resurrect goes catastrophically wrong. Immense care must be taken, for if such a ritual fails utterly, an unrisen can be the result—as many a ritualist has learned to their horror.\nUnrisen are barely intelligent, aware only of the agony constantly inflicted by their flawed creation and their resentment for the living. They tend to attack the casters involved in the botched ritual first before lashing out at everyone else around them. Though an unrisen's twisted form is unrecognizable as the intended target of the resurrection, its wordless howls are often disturbingly similar to the deceased's voice. If an unrisen is destroyed before it can rise again, it's reduced to a handful of metallic blue-green salts referred to as essential salts.",
      "armorClass": 28,
      "hitPoints": 220,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "lifesense-30"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 17,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": -2,
        "wis": 6,
        "cha": 3
      },
      "skills": {
        "athletics": 24,
        "stealth": 19
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
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "kF2ixmWSOxaKrnfA",
          "name": "Jaws",
          "bonus": 24,
          "damage": "3d8+13 piercing",
          "traits": [
            "deadly-d10",
            "magical"
          ]
        },
        {
          "id": "bMI6hrjVEXpgS37k",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d8+13 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZGbXzbuBf6OgU9Kz",
          "name": "Lifesense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "EKs1EmIvTAkaGDae",
          "name": "Meant to Live",
          "kind": "passive",
          "description": "Whenever an unrisen would take damage from vitality energy, it instead heals half that number of Hit Points."
        },
        {
          "id": "w7XvLv7sjGNlB7qE",
          "name": "Resurrection Vulnerability",
          "kind": "passive",
          "description": "A creature with a prepared or spontaneous spell that can restore the dead to life (such as Breath of Life or Raise Dead) can expend an appropriate spell slot as a 2-action activity to destroy an unrisen within 30 feet. The attempt fails if the unrisen succeeds at a Will save against the creature's spell DC."
        },
        {
          "id": "hoHZ8oLoT2n6BKAo",
          "name": "Rise Again",
          "kind": "passive",
          "description": "If the unrisen is reduced to 0 Hit Points by means other than fire damage, disintegration, or its resurrection vulnerability, it returns to unlife at the start of its next turn. It has 100 Hit Points and is Prone in the space in which it was destroyed. The unrisen can't be returned by this ability again for 1 hour."
        },
        {
          "id": "62EYR1JeDqw2DzmO",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "k7Sj3Od8RCFh7XNG",
          "name": "Agonized Howl",
          "kind": "action",
          "description": "The unrisen howls in pain at its cursed existence. Creatures within a @Template[type:emanation|distance:30] take 9d8[mental|options:area-damage] damage with a check (will, dc:30, basic) save. The unrisen can't use Agonized Howl again for [[/gmr 1d4 #Recharge Agonized Howl]]{1d4 rounds}."
        },
        {
          "id": "HEeo8Cny4nmBNF1e",
          "name": "Awful Approach",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nEffect The unrisen reshapes its grotesque form to move swiftly. It Strides twice. Any living creature that can see the unrisen during this movement must succeed at a check (fortitude, dc:28) save or be Sickened 1 (or Sickened 2 on a critical failure); this is a mental and visual effect."
        },
        {
          "id": "LHoHnZupawH74oRD",
          "name": "Death Grip",
          "kind": "action",
          "description": "Requirements The unrisen has a living creature Grabbed or Restrained\nEffect The unrisen attempts to destroy its victim's life force so it shares in the unrisen's fate. The creature must succeed at a check (fortitude, dc:30) save or become Doomed 1. While the curse lasts, the creature regains only half as many HP from effects with both the healing and vitality traits; if it dies, any attempt to raise it from the dead causes it to return as an unrisen. The curse ends automatically if the creature's doomed value is reduced to 0."
        },
        {
          "id": "wF4nBODngIaQgwK2",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hippopotamus-topiary",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ogW5nGL2kXGqVwzm",
      "slug": "hippopotamus-topiary",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:594480368c140365269649ae7feb63734ea82824dca379e95fe8db423183f61a",
    "translatableHash": "sha256:cd8695db64044322a6cf5a1db06e0721e9dd607e7f26094406c93fd4918ca6bb",
    "data": {
      "schemaVersion": 1,
      "name": "Hippopotamus Topiary",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "plant"
      ],
      "description": "One of the rarest types of living topiaries is the hippopotamus. These large shrubs are formed from souls with larger-than-life personalities. While less agile and perceptive than smaller topiaries, they're much more aggressive and territorial. As such, they tend to live solitary lives around swamps and marshes, giving them plenty of water and vegetation to roam around in.\nTopiaries are an extremely common sight across Golarion, especially within the gleaming and well-manicured lawns of nobility. Living topiaries develop from the death of a lone soul in an overgrown area of deep primal magic, with the soul exploding into the plants around it and causing them to grow together into the form of an animal, often influenced by the personality of the dying person. Once fully formed, the living topiary lacks their original memories; however, they're filled with the desire to protect the area they were formed in, driving off invaders and those who would do harm to the flora and fauna.",
      "armorClass": 30,
      "hitPoints": 220,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 4,
        "int": -2,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "athletics": 23,
        "nature": 21,
        "stealth": 23
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "G3eo5ka1oJoKGxdi",
          "name": "Jaws",
          "bonus": 22,
          "damage": "2d10+15 piercing",
          "traits": []
        },
        {
          "id": "ef3hRZ21gP7xw1Lt",
          "name": "Hoof",
          "bonus": 22,
          "damage": "2d8+15 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "aRFymlyycYyjRUSU",
          "name": "Branchlocation",
          "kind": "passive",
          "description": "The hippopotamus topiary can tap its branches together and use its hearing as a precise sense at the listed range."
        },
        {
          "id": "OyJesxcN3psuwsUw",
          "name": "Absorb Water",
          "kind": "passive",
          "description": "When in water or exposed to a water effect, the hippopotamus loses its weakness to fire until the start of its next turn."
        },
        {
          "id": "lo1Mlm6FvPPWSnpf",
          "name": "Jaw Crush",
          "kind": "action",
          "description": "Requirements The hippopotamus topiary has a creature Grabbed\nEffect It forcefully bites down on whatever is in its mouth, dealing 6d8[piercing] damage with a check (reflex, dc:27, basic) save. On a critical failure, creatures take 1d8[persistent,bleed] damage."
        },
        {
          "id": "flZJn7Bl2LsAHTB2",
          "name": "Pruning",
          "kind": "action",
          "description": "The hippopotamus topiary twists and contorts its shape, shedding branches and leaves as needed to change into a topiary of a Medium or smaller animal. Until the next time it acts, the topiary has an automatic result of 43 for Deception checks and DCs to appear as a mundane topiary."
        },
        {
          "id": "b2lkrCb0lvBuiUxm",
          "name": "Swamp Fever",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26)\nOnset 1 day\nStage 1 Sickened 1 (1 day)\nStage 2 Sickened 2 (1 day)\nStage 3 sickened 2 and 1d8[persistent,bleed] damage (1 day)\nStage 4 sickened 2, Drained 1, and 2d8[persistent,bleed] damage (1 day)\nStage 5 dead"
        },
        {
          "id": "NICp45nCAaGFefhe",
          "name": "Walk Through Plants",
          "kind": "passive",
          "description": "The hippopotamus topiary ignores difficult terrain caused by dense vegetation."
        },
        {
          "id": "lHaWSRI3B4oitO8Y",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Qgc1WsHuup0b4Dey",
      "slug": "whisper-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7fca360aeeb98e13c7e3332835ff2a0ec37b6d6edeaec5ad3833239feecd578a",
    "translatableHash": "sha256:e7292acaf5b62ae6f14e8b737a9b7395ef704e9a1f0170658eac1f5a4898cce1",
    "data": {
      "schemaVersion": 1,
      "name": "Whisper Dragon (Adult, Spellcaster)",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Whisper dragons are keen collectors of rumors and secrets who spend centuries honing their information networks and relationships. They generally do so not out of an intent to hold the information over others or to use for their own machinations, but simply because the process of learning and gathering information is fulfilling. Their hoards are sparse compared to those of other dragons, as they hold their true treasures—secrets—in their minds.",
      "armorClass": 31,
      "hitPoints": 190,
      "speedFeet": 50,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 24
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 7,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 19,
        "deception": 18,
        "diplomacy": 20,
        "intimidation": 18,
        "occultism": 21,
        "society": 23,
        "stealth": 19
      },
      "languages": [
        "common",
        "draconic",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wvf12gsmaiIEZNk8",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d12+11 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "vfwwJaezS2MAmsRg",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d10+11 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "cdWBM7kdsVKs9q9W",
          "name": "Tail",
          "bonus": 22,
          "damage": "2d10+11 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "wzVfR4k7Fz2wqrWh",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zkcQGrvQXeO0d4YV",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eyJ8okEtlxlLWhjy",
          "name": "Information Network",
          "kind": "passive",
          "description": "The dragon can attempt a Society check to Recall Knowledge in place of a check to Gather Information, recalling intelligence from prior informants."
        },
        {
          "id": "vSiPTgWIPTPTQIaI",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VnvkdDxkW7wfBMjT",
          "name": "Diplomatic Solution",
          "kind": "passive",
          "description": "Trigger The dragon rolls initiative\nEffect The dragon targets all enemies it can see within @Template[emanation|distance:60]{60 feet} with Calm heightened to a rank equal to half the dragon's level rounded up (check (will, dc:28) save). The dragon doesn't need to Sustain this effect, but if the dragon takes any hostile action against those affected, it breaks the effect for all creatures."
        },
        {
          "id": "XZUptOpkSx0PYtkI",
          "name": "Distracting Whisper",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect A mysterious voice whispers something disconcerting in the triggering creature's ear, inflicting a –2 circumstance penalty to the triggering attack."
        },
        {
          "id": "WdFNthO0BdxIqruL",
          "name": "Cogitation Breath",
          "kind": "action",
          "description": "The dragon unleashes a befuddling miasma, dealing 10d6[mental|options:area-damage] damage in a @Template[type:cone|distance:40] (check (will, dc:30, basic, options:area-effect,inflicts:stupefied) save). A creature that fails its save is Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute. The dragon can't use Cogitation Breath again for [[/gmr 1d4 #Recharge Cogitation Breath]]{1d4 rounds}."
        },
        {
          "id": "EZmRWrf1EQnbLdow",
          "name": "Steal Knowledge",
          "kind": "action",
          "description": "The dragon plucks a fragment of knowledge from the mind of a creature within 60 feet, choosing a skill to affect. The creature must attempt a check (will, dc:28) save.\nSuccess The creature is unaffected.\nFailure For the next minute, the creature takes a –1 status penalty to checks using that skill, and the dragon gets a +1 status bonus to using that skill.\nCritical Failure As failure, but the penalty is –2 and the bonus is +2."
        },
        {
          "id": "dWk0sE2yMPmzHdY2",
          "name": "Unveil Secret",
          "kind": "action",
          "description": "The dragon delves into the mind of a creature within 60 feet to scour for secrets, learning something the creature would find embarrassing or shameful unless they succeed a check (will, dc:30) save. The target becomes Frightened 1 and can't reduce their frightened condition for 1 minute or until the dragon reveals the secret. As a reaction when the affected creature attempts a check, the dragon can reveal their secret to discomfit them, requiring them to roll twice and take the lower result; this is a misfortune effect."
        }
      ],
      "spellcasting": [
        {
          "id": "cRcIL2SXgdemjq4p",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "oGxN8Dptzr9qHsee",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "O88kR5J5SE3DST5O",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "PRAM9jvMAKa68okG",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "uisHs6IeQnrIWNsQ",
              "name": "Disguise Magic",
              "rank": 1
            },
            {
              "id": "4Ot2vYWzmA3lnkbT",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "cv6TM8d2MVxDKoxP",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "ytfJdvX4cXWlusMU",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "agKADALez9cbUYML",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "Y99tw7IkPX5NpOHR",
              "name": "Clear Mind",
              "rank": 2
            },
            {
              "id": "xinTbmaOHepnxb0G",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "OFvSS0hmtTpAmVNo",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "7CfPUs5wTKkyivI9",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "QXpvAcJPi47LPfv5",
              "name": "Hypercognition",
              "rank": 3
            },
            {
              "id": "3hfm7HDMQW3tWHXn",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "hxn7aBYboqdZTH3z",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "xTKfznWFdJqZoz9l",
              "name": "Detect Scrying",
              "rank": 4
            },
            {
              "id": "wkDHW4ofDUQB7Tfs",
              "name": "Rewrite Memory",
              "rank": 4
            },
            {
              "id": "LGyGFsYCV5U2dqKw",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "UVQzVd09ULPvZGZu",
              "name": "Synaptic Pulse",
              "rank": 5
            }
          ]
        },
        {
          "id": "hQpLecGIr5JQkFUk",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 30,
          "spells": [
            {
              "id": "HKxrPd7BmHbJHUzU",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "WRO85FOUCRQYw8f6",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "iBK9DfO7gl7b2LHG",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "bFBjTjzbnNzg2hlz",
              "name": "Clairaudience (At Will)",
              "rank": 3
            },
            {
              "id": "gTsBfiveHO30gIiq",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "oSegsy2nlB1nIiYd",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "uN0n5eW8uwlWZT33",
              "name": "Clairvoyance (At Will)",
              "rank": 4
            },
            {
              "id": "1vcENX05gySjee84",
              "name": "Mind Probe",
              "rank": 5
            },
            {
              "id": "3gTrRmpHmJp3nAXr",
              "name": "Charm",
              "rank": 6
            },
            {
              "id": "isUZZ0SGjSZpuk1r",
              "name": "Suggestion",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-young-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "SCIrzTfzJ9tCSLqL",
      "slug": "requiem-dragon-young-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:054e59c97eb078d675d2fb03f17b185b298c3821eee06e151c18a89d196fb92f",
    "translatableHash": "sha256:cf9775328b443e7bcde17175ecd4114b0cc2fa2f047ac709d0bdde2268349fd4",
    "data": {
      "schemaVersion": 1,
      "name": "Requiem Dragon (Young, Spellcaster)",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Requiem dragons are stewards of the River of Souls and the process through which souls reach their final destination in the afterlife. The safe journey of a soul is of utmost importance to a requiem dragon, and some will follow individual souls from their first entry into the river through to their judgment in the Boneyard and eventually to their ultimate resting place. Most requiem dragons tie themselves to specific planes and shepherd any souls bound to that plane, leading to dragons linked to places like Heaven or Hell, though these dragons never swear true allegiance to these planes. Requiem dragons fill their lairs along the River of Souls—patchworks of somber architecture rescued from other planes—with invaluable records and mementos of great accomplishments.",
      "armorClass": 30,
      "hitPoints": 190,
      "speedFeet": 40,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision",
          "lifesense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 24
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 23,
        "diplomacy": 21,
        "medicine": 26,
        "religion": 23
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "draconic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "knzrD5SFrlVeyHhp",
          "name": "Horn",
          "bonus": 24,
          "damage": "2d10+10 piercing; 1d8 spirit",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "wyJW030tjlMqlOFy",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d8+10 slashing; 1d8 spirit",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "MfU1Is4nFaLYi4YN",
          "name": "Tail",
          "bonus": 22,
          "damage": "2d8+10 bludgeoning; 1d8 spirit",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "qd9Km8K4PdsnWLbX",
          "name": "Soul Journey",
          "kind": "passive",
          "description": "The dragon spends 1 hour traveling through planar channels to reach the River of Souls, and then reaches any point along the river. This has the effects of Interplanar Teleport, except that the dragon can arrive precisely where they like on any major plane."
        },
        {
          "id": "cyDi0Va1gzTRN2G4",
          "name": "Status Sight",
          "kind": "passive",
          "description": "The requiem dragon automatically knows the Hit Points of all creatures they can see."
        },
        {
          "id": "d0JuploAY8CGVIFJ",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "So4yBcmRWdbLG8JN",
          "name": "Soul Anchor",
          "kind": "reaction",
          "description": "A creature within 60 feet would drop to 0 Hit Points\nEffect The dragon anchors the triggering creature's soul to its body. The creature remains at 1 Hit Point, becomes Doomed 2, and gains fast healing equal to the dragon's level for 1 minute. The creature becomes temporarily immune to further Soul Anchor usages for 24 hours.\nEffect: Soul Anchor"
        },
        {
          "id": "3kVLpqskZEeFu5Jc",
          "name": "Withhold Death",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect The dragon resists the loosening of its own soul, preventing some of the damage. The dragon gains resistance 10 to all damage against the triggering attack."
        },
        {
          "id": "O3ebBljtcItTfmVr",
          "name": "Dooming Breath",
          "kind": "action",
          "description": "Energy from Creation's Forge erupts from the dragon's mouth, dealing 9d8[spirit|options:area-damage] damage in a @Template[type:line|distance:60] (check (reflex, dc:30, basic, options:area-effect) save). Undead creatures who fail the save must also succeed at a check (will, dc:30, options:area-effect,inflicts:doomed) save or become Doomed 1. If the target is already doomed, the doomed value increases by 1 (to a maximum of Doomed 4). The dragon can't use Dooming Breath again for [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rounds}."
        },
        {
          "id": "XmfhMGtLldAoQi0R",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "fpjdfWubC2WyLhEd",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "rpJKhtNvYIRTOmmp",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "JKmKgIj0iBXKpN71",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "TtqS7Au0EmcIsn6b",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "bTZZNnq91PUBCVxt",
              "name": "Protection",
              "rank": 1
            },
            {
              "id": "G4aXseCIPuKdoKrq",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "BajUh2rL9u3mNv5K",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "ApurIolcB4VrTM3m",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "ACrUKEeNAabGlIqw",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "ytB2F1Jr9tdzxtFs",
              "name": "Thoughtful Gift",
              "rank": 1
            },
            {
              "id": "EGTFLACKTnbNRPaw",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "2rHlT3ISeI05Jxap",
              "name": "Share Life",
              "rank": 2
            },
            {
              "id": "zPUiYtaYNhMoGraw",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "kL10PKTPGK6Sd7ZY",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "dX9w451e4lWAnCHS",
              "name": "Ghostly Tragedy",
              "rank": 4
            },
            {
              "id": "2Sxd0JBEKJIeBngO",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "DlYz4fFyMplRopkM",
              "name": "Vital Beacon",
              "rank": 4
            }
          ]
        },
        {
          "id": "G4dVxcO1EbpdB0xz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 27,
          "spells": [
            {
              "id": "ofkR72Hv3Oee1zyU",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "3XiAKSCJlDJwf8no",
              "name": "Heal",
              "rank": 4
            },
            {
              "id": "Fu2fOQrUhkn6hBVN",
              "name": "Heal",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:raelis",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "U93WglNpPjOYk23q",
      "slug": "raelis",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2bd17598c6a529fe10dc4798b4c3ea4790f1b3de8f749bec187eb97cc0c00362",
    "translatableHash": "sha256:6759fef4eb34bb2e8023a3524619f3fe87a286f5a5dda868fc9e9e1c3604a26e",
    "data": {
      "schemaVersion": 1,
      "name": "Raelis",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "azata",
        "celestial",
        "holy"
      ],
      "description": "Formed from the souls of storytellers, these boisterous azatas roam the planes, seeking out ever more impressive stories to collect. They attempt to spread joy by sharing these tales and righting wrongs they encounter. Their constant search for tales brings raelises to the mortal Universe more often than other azatas.\nA raelis is generally knowledgeable about trails and directions, as their journeys take them to a variety of different locales. Raelises prefer to avoid taking the same journey twice and will go out of their way to avoid doing so. After millennia of constant journeys, a raelis becomes a living atlas, something they take great pride in.\nRaelises adore brawling and wrestling, and often travel in mortal guises so as not to unduly infuence the events they chronicle. Their ability to travel discreetly among settlements make raelises excellent spies and discreet agents for gods with similar interests.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 40,
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
        "str": 6,
        "dex": 6,
        "con": 5,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 21,
        "arcana": 19,
        "athletics": 19,
        "deception": 20,
        "occultism": 19,
        "performance": 22,
        "religion": 20,
        "society": 21,
        "stealth": 19
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10",
          "unholy 10"
        ]
      },
      "attacks": [
        {
          "id": "xO2VFEErrcyQWzUX",
          "name": "Fist",
          "bonus": 23,
          "damage": "2d6+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "holy",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "bdkr2er4ml6RNYiQ",
          "name": "Change Shape",
          "kind": "action",
          "description": "The raelis can take on the appearance of any Small or Medium humanoid, or any Medium or smaller animal. This doesn't change their Speed or their attack and damage bonuses with their Strikes, but might change the damage type their Strikes deal."
        },
        {
          "id": "O8ght906VxYT0XnI",
          "name": "Recount Epic",
          "kind": "action",
          "description": "The raelis recounts a tale to inspire their allies to heroic feats. For the next minute, all allied creatures who heard the epic gain a +1 circumstance bonus to Acrobatics, Athletics, and Performance checks.\nEffect: Recount Epic"
        },
        {
          "id": "TTBI8puLr7uK7ucG",
          "name": "Siphon Scroll",
          "kind": "action",
          "description": "The raelis Casts a Spell from a scroll within 60 feet that they've read with Word Caller; this scroll must be divine. If this spell has the holy or vitality trait, they Cast it as one spell rank higher. This expends the scroll as normal."
        },
        {
          "id": "1CbLB8lE9SpQxMZ1",
          "name": "Word Caller",
          "kind": "action",
          "description": "The raelis senses the presence of words around them within 60 feet, reading up to 100 pages of nonmagical writing or automatically succeeding at a Recall Knowledge to identify 1 magical scroll."
        },
        {
          "id": "nbLFbPVHbIJ9JWRc",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "EFyPoVsxgdwgH653",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "RSNDfAzThcPo1caI",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "oUnBKiFx8E1Vyr42",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "1hJlyTdwsQGIEonz",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "O4qqKe1e7Y12mQ3T",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Kq4fKk40egO6L1LU",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "8vYFhQJ1v5o1VNgh",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "gESjokNo2O3a7Kzw",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "lIgoCVc809iseGz9",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "b5ZI04Kwz28sCV3B",
              "name": "Heroism",
              "rank": 3
            },
            {
              "id": "T5SU2MYVWtmL5qnr",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "3eLXusK8JQvyGTcR",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "8nTFNZzg2bsqFF8A",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "qbcKOvzXWTYe0pH9",
              "name": "Veil of Privacy (Constant)",
              "rank": 4
            },
            {
              "id": "xQogfvJkMIwYD9Jt",
              "name": "Outcast's Curse",
              "rank": 5
            },
            {
              "id": "0kbOD1Z95S56mx64",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "RjNh1NKb9t8FAFEt",
              "name": "Vibrant Pattern",
              "rank": 6
            },
            {
              "id": "DqZNI8xK2NJA9AQx",
              "name": "Zealous Conviction",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "z0X1HFrLzAUMxtMT",
      "slug": "requiem-dragon-young",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c6f8b3ec6cc38d3ef50ceb80360a2aa71a0e87592a1f27da3d6af9bd05755f0b",
    "translatableHash": "sha256:f2b02d0907b409c36d9db3e4c13ab0fea347eedd84f884e531e0a37eeb0fbb3d",
    "data": {
      "schemaVersion": 1,
      "name": "Requiem Dragon (Young)",
      "level": 11,
      "rarity": "common",
      "size": "large",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Requiem dragons are stewards of the River of Souls and the process through which souls reach their final destination in the afterlife. The safe journey of a soul is of utmost importance to a requiem dragon, and some will follow individual souls from their first entry into the river through to their judgment in the Boneyard and eventually to their ultimate resting place. Most requiem dragons tie themselves to specific planes and shepherd any souls bound to that plane, leading to dragons linked to places like Heaven or Hell, though these dragons never swear true allegiance to these planes. Requiem dragons fill their lairs along the River of Souls—patchworks of somber architecture rescued from other planes—with invaluable records and mementos of great accomplishments.",
      "armorClass": 30,
      "hitPoints": 190,
      "speedFeet": 40,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision",
          "lifesense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 24
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 23,
        "diplomacy": 21,
        "medicine": 26,
        "religion": 23
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "draconic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "knzrD5SFrlVeyHhp",
          "name": "Horn",
          "bonus": 24,
          "damage": "2d10+10 piercing; 1d8 spirit",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "wyJW030tjlMqlOFy",
          "name": "Claw",
          "bonus": 24,
          "damage": "2d8+10 slashing; 1d8 spirit",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "MfU1Is4nFaLYi4YN",
          "name": "Tail",
          "bonus": 22,
          "damage": "2d8+10 bludgeoning; 1d8 spirit",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "qd9Km8K4PdsnWLbX",
          "name": "Soul Journey",
          "kind": "passive",
          "description": "The dragon spends 1 hour traveling through planar channels to reach the River of Souls, and then reaches any point along the river. This has the effects of Interplanar Teleport, except that the dragon can arrive precisely where they like on any major plane."
        },
        {
          "id": "cyDi0Va1gzTRN2G4",
          "name": "Status Sight",
          "kind": "passive",
          "description": "The requiem dragon automatically knows the Hit Points of all creatures they can see."
        },
        {
          "id": "d0JuploAY8CGVIFJ",
          "name": "+2 Status to All Saves vs. Divine",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "So4yBcmRWdbLG8JN",
          "name": "Soul Anchor",
          "kind": "reaction",
          "description": "A creature within 60 feet would drop to 0 Hit Points\nEffect The dragon anchors the triggering creature's soul to its body. The creature remains at 1 Hit Point, becomes Doomed 2, and gains fast healing equal to the dragon's level for 1 minute. The creature becomes temporarily immune to further Soul Anchor usages for 24 hours.\nEffect: Soul Anchor"
        },
        {
          "id": "3kVLpqskZEeFu5Jc",
          "name": "Withhold Death",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect The dragon resists the loosening of its own soul, preventing some of the damage. The dragon gains resistance 10 to all damage against the triggering attack."
        },
        {
          "id": "O3ebBljtcItTfmVr",
          "name": "Dooming Breath",
          "kind": "action",
          "description": "Energy from Creation's Forge erupts from the dragon's mouth, dealing 9d8[spirit|options:area-damage] damage in a @Template[type:line|distance:60] (check (reflex, dc:30, basic, options:area-effect) save). Undead creatures who fail the save must also succeed at a check (will, dc:30, options:area-effect,inflicts:doomed) save or become Doomed 1. If the target is already doomed, the doomed value increases by 1 (to a maximum of Doomed 4). The dragon can't use Dooming Breath again for [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rounds}."
        },
        {
          "id": "OPtrKq8gnuusiAqH",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw strikes and one tail strike in any order."
        },
        {
          "id": "WS1ygMI5ueVbLBHQ",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Dooming Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "vmF6pw78GCCfMWfS",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "G4dVxcO1EbpdB0xz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 27,
          "spells": [
            {
              "id": "ofkR72Hv3Oee1zyU",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "3XiAKSCJlDJwf8no",
              "name": "Heal",
              "rank": 4
            },
            {
              "id": "Fu2fOQrUhkn6hBVN",
              "name": "Heal",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:interlocutor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "2qAd4TmEu5wexX7U",
      "slug": "interlocutor",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7123bf5696a7bb8b61187d592a9debe861198d38244bdd5a2070b71ca7090bfe",
    "translatableHash": "sha256:4cec874790b58f6d27cfea9f8bad090f2ba21d39f4ff094f0f2c2902c3aa88fc",
    "data": {
      "schemaVersion": 1,
      "name": "Interlocutor",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "fiend",
        "unholy",
        "velstrac"
      ],
      "description": "Interlocutors are the most talented surgeon-sculptors of the velstracs, carving away flesh and replacing it with new body parts of muscle, sinew, and metal. Each interlocutor structures their individual appearance carefully, but all are towering, multi-limbed amalgamations of the strongest limbs, densest bones, and sharpest metals they can find. They continually search for new material to graft to their forms, and their slain foes are rarely found intact, as little is more valuable to interlocutors than a powerful opponent's legs, eyes, or even brain. Due to their unique properties, deposits of skymetals sometimes draw interlocutors to the mortal Universe. Interlocutors average 9 feet in height and weigh approximately 800 pounds.\nThe shadow-dwelling fiends known as velstracs all share a horrifying preoccupation with the search for ultimate sensation through self-mutilation. Velstracs transcend their stoic detachment only when inflicting pain and terror upon their victims, practicing new forms of torture, or turning their agonizing practices back on themselves. They consider themselves enlightened beings, transcending such limitations as morality or mortal taboos, but their victims know them as emotionless tormentors who inflict sadistic suffering. These fiends claim to seek perfection in thought, form, and action, although they don't recognize any refinement that doesn't require the painful excision of the flesh or spirit.\nVelstracs manifest from the souls of the most extreme masochistic or sadistic mortals who are judged and sent on to the Netherworld. They take on forms that suit their vile predilections, ranging from the low-ranking augurs to the maestros of suffering and mutilation, the eremites. The process of transformation warps the soul step by step, with other velstracs conveying their new members through untold chambers of pain among the dark reaches of the Netherworld.",
      "armorClass": 33,
      "hitPoints": 215,
      "speedFeet": 40,
      "perception": {
        "modifier": 24,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 21,
        "will": 26
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 5,
        "int": 2,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "athletics": 25,
        "crafting": 22,
        "intimidation": 25,
        "medicine": 26,
        "religion": 22,
        "stealth": 19
      },
      "languages": [
        "common",
        "diabolic",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 15",
          "silver 15"
        ]
      },
      "attacks": [
        {
          "id": "fGPymMGpO4rOUSJt",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d10+13 bludgeoning; 2d6 bleed",
          "traits": [
            "deadly-2d10",
            "magical",
            "reach-10",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "8CaNXEFOVDCT5P9x",
          "name": "Painsight",
          "kind": "passive",
          "description": "A velstrac automatically knows whether a creature it sees has any of the Doomed, Dying, and Wounded conditions as well as the value of those conditions."
        },
        {
          "id": "6uTX0UPYfsHi0eUs",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "YJlp2iyShGnQpO13",
          "name": "Regeneration 20 (Deactivated by Holy or Silver)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "rjQfFFzYDPW7gti5",
          "name": "Glimpse of Stolen Flesh",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it sees pieces of its own body amid the interlocutor's form. The creature must succeed at a check (will, dc:29, options:area-effect,inflicts:stunned) save or become Stunned 1."
        },
        {
          "id": "f8Hse5ctgkUmEUqc",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MW1iGpocWyHZDBvP",
          "name": "Shadow Siphon",
          "kind": "reaction",
          "description": "Trigger The interlocutor would take damage from a spell or magical effect\nEffect The interlocutor takes half the triggering damage instead."
        },
        {
          "id": "PrwUXoaZ6KDeiZiG",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The interlocutor stares at a creature they can see within 30 feet. The creature must immediately attempt a Will save against glimpse of stolen flesh. In addition, if the creature was already stunned, on a failed save, it feels its internal organs twist and writhe, and is Clumsy 2 for 1 minute. After attempting this save, the creature is then temporarily immune to Focus Gaze until the start of the interlocutor's next turn."
        },
        {
          "id": "yH2u0x3ICS7IV150",
          "name": "Surgical Rend",
          "kind": "action",
          "description": "This functions as the Rend ability, dealing claw Strike damage. In addition, if the target is a living creature with organs and muscle, the interlocutor opens a precise wound. Until the creature is restored to its maximum Hit Points, thus closing the wound, Strikes against the creature deal an additional 1d6 precision damage."
        }
      ],
      "spellcasting": [
        {
          "id": "0gHdU7ZbZBc4fdCu",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "RQ4vUB4GCLOV4ILu",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "xOd7nQyRYkybv69O",
              "name": "Heal",
              "rank": 4
            },
            {
              "id": "LoFBY77U05O4sOn8",
              "name": "Sound Body",
              "rank": 4
            },
            {
              "id": "ST0N4xw26ietq4e2",
              "name": "Breath of Life",
              "rank": 5
            },
            {
              "id": "qY0Myi7JJ7s9XiyN",
              "name": "Interplanar Teleport (self only, to the Netherworld or the Universe only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "3xe8mgv0NlHknfPj",
      "slug": "coral-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:54e41e75b953c81c5817b873437152042a8bb68e111dc7e89033c1ace9e81490",
    "translatableHash": "sha256:e738ba8dc51656a076d70a01442135ed4d0d454bb9e32f3d9d346ce0b47b1c12",
    "data": {
      "schemaVersion": 1,
      "name": "Coral Dragon (Adult, Spellcaster)",
      "level": 12,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "Coral dragons are the primal guardians of the vast living coral reefs found in oceans across Golarion. Even by draconic standards, coral dragons stand out for their arrogance and vanity, boasting inordinate pride in the vibrant hues of their own coral-encrusted scales and the dazzling splendor of the reefs they protect. Coral dragons like to decorate their reefs, which they view as lairs, with objects of beauty, dotted with the occasional bit of valuables like coins. Those who seek the favor of a coral dragon often find the creature easily swayed by flattery, particularly when paired with shiny or brightly colored gifts that complement the scintillating beauty of the dragon and their underwater domain.",
      "armorClass": 32,
      "hitPoints": 215,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision",
          "wavesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 20,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 5,
        "int": 3,
        "wis": 5,
        "cha": 7
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 22,
        "diplomacy": 26,
        "intimidation": 26,
        "nature": 21,
        "society": 18,
        "stealth": 22,
        "survival": 23
      },
      "languages": [
        "common",
        "draconic",
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "dazzled",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OPzELGn6ZKAMLLQ6",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+13 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "dnY6CWQb134wKiOt",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d6+13 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "OY0h3cpcfWVhHPf4",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "xSIQkJM4fmJ1yy23",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dhF6fJi6O0G9ZKmt",
          "name": "Biomineralize",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by a melee weapon without reach or an unarmed attack that deals slashing or piercing damage\nEffect A gout of blood spurts from the dragon's wound and instantaneously calcifies into a jagged branch of sharpened coral. The coral branch impales the triggering creature, dealing 7d6[piercing] damage (check (reflex, dc:32, basic) save). The triggering creature also takes 1d4[persistent,bleed] damage on a critical failure. Regardless of the outcome, the coral then crumbles to dust."
        },
        {
          "id": "OWtobT819Yt0FTNY",
          "name": "Kaleidoscopic Display",
          "kind": "passive",
          "description": "90 feet. The coral formations covering the dragon's body glow and shimmer with vivid colors, overwhelming the senses and forcing any creature entering or beginning their turn in the aura to attempt a check (fortitude, dc:30, options:area-effect,inflicts:dazzled,inflicts:blinded) save. Regardless of the outcome, the creature is temporarily immune to the dragon's kaleidoscopic display for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is Blinded for 1 round.\nCritical Failure The creature is blinded for 1 round and dazzled for 1 minute."
        },
        {
          "id": "P4udhPlUFL1dXZ9A",
          "name": "Reef Bond",
          "kind": "passive",
          "description": "Every coral dragon is mystically bound to a single living coral reef. If the dragon moves more than 3 miles from their reef, they become Sickened 1 and unable to recover, with the sickened value increasing by 1 every 6 hours unless they succeed at a check (fortitude, dc:34) save. After 24 hours, the dragon becomes Drained 1; its drained value increases by 1 every 24 hours.\nIf the dragon's reef suffers significant damage, they immediately become aware of the location where the reef was harmed but not the source or nature of the damage. Should the reef ever be completely destroyed, the dragon is immediately slain."
        },
        {
          "id": "27lO5hJcHjPjslLT",
          "name": "Hydraulic Breath",
          "kind": "action",
          "description": "The dragon exhales a pressurized jet of water that deals 13d6[bludgeoning|options:area-damage] damage in an @Template[type:line|distance:100] (check (reflex, dc:32, basic, options:area-effect,forced-movement,inflicts:prone) save). Creatures that critically fail their Reflex save against the Hydraulic Breath are pushed back 10 feet and knocked Prone. The dragon can't use Hydraulic Breath again for [[/gmr 1d4 #Recharge Hydraulic Breath]]{1d4 rounds}."
        },
        {
          "id": "DrGbBNaXvcBQvYSR",
          "name": "Reef Meld",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The coral dragon is in physical contact with their bound reef\nEffect The dragon physically merges with the reef and vanishes, along with up to four willing creatures, into an extradimensional space where it can neither affect nor be affected by the outside world. The effect lasts indefinitely or until the dragon Dismisses it. Once merged, the dragon can spend 1 minute traveling to and emerging from any point on its reef up to 5 mile away."
        },
        {
          "id": "koec9QvnSf7vj2qI",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "W2m2P4SmozPmYDkZ",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "MjBddG7oJ1OEUSOX",
              "name": "Air Bubble",
              "rank": 1
            },
            {
              "id": "orJekilBmWUtFhHj",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "YgI9apYvqPMdANgg",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "0y5ICJbB2Ozmdks2",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "gzQLLQiLjLgXXWFH",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "5tKRmLH15ugKkpux",
              "name": "Spout",
              "rank": 1
            },
            {
              "id": "mDPY81XDQbICRTnW",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "zNchat4MmYeEFUGk",
              "name": "Tailwind",
              "rank": 1
            },
            {
              "id": "EMruWDoHZLVEI1Dh",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "j53qDZZTUzymGHMs",
              "name": "Water Breathing",
              "rank": 2
            },
            {
              "id": "QRiBt2hbx1d1JYA1",
              "name": "Water Walk",
              "rank": 2
            },
            {
              "id": "kjs6INu8fRficPxr",
              "name": "Aqueous Orb",
              "rank": 3
            },
            {
              "id": "AHxHHl181eVmcfBz",
              "name": "Crashing Wave",
              "rank": 3
            },
            {
              "id": "a0e7rN9rNqsw1AUs",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "JXY081udEpFa9nVR",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "88MElNYmZMb7Mv6e",
              "name": "Mirage",
              "rank": 4
            },
            {
              "id": "2jDZEC1VyEmmEnYi",
              "name": "Vapor Form",
              "rank": 4
            },
            {
              "id": "62FBbSdwtJ0SWAJt",
              "name": "Chameleon Coat",
              "rank": 5
            },
            {
              "id": "Ag22VFyFImHAWa7B",
              "name": "Control Water",
              "rank": 5
            },
            {
              "id": "Dn1uw1GM7qSvamCm",
              "name": "Mariner's Curse",
              "rank": 5
            },
            {
              "id": "2S862DaG0P1H1v3F",
              "name": "Petrify",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:betobeto-san",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "440q9qZ4A7fDNQJQ",
      "slug": "betobeto-san",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9389349b8267b48f6b3a681a2b9f563b0619c5314a1ceeae6aef9bd62058c3f5",
    "translatableHash": "sha256:294dfb78b45eed01a2e218e853f03632a318ed34349a4a0b628877ed93434969",
    "data": {
      "schemaVersion": 1,
      "name": "Betobeto-San",
      "level": 12,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "incorporeal",
        "shadow",
        "spirit"
      ],
      "description": "A betobeto-san wanders the highways and byways of the Material Plane, searching for unwilling traveling companions to sustain the spirit's appetite for fear. Though this shadow spirit is invisible in darkness or shade, in light they appear as a formless, shadowy mass with two sandaled feet. These sandals are made of wood or bone that cause the creature's footsteps to make the distinct \"beto beto\" sound from which they receive their name. A wide, toothy mouth smiles in the middle of their otherwise featureless mass, and they can manifest long, clawed limbs.\nBetobeto-san trail behind nighttime travelers, compelled to follow until the creatures verbally offer to let the betobeto-san pass. This compulsion isn't usually malicious by nature and occurs more from a betobeto-san's misguided desire for company and courtesy; unfortunately, they lack of understanding how this behavior can frighten others. Betobeto-san don't attack those they follow, but they often end up in combat because their unwelcome behavior causes those they follow to attack first.",
      "armorClass": 33,
      "hitPoints": 170,
      "speedFeet": 40,
      "perception": {
        "modifier": 22,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 25,
        "will": 22
      },
      "abilities": {
        "str": 4,
        "dex": 7,
        "con": 5,
        "int": 4,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "deception": 23,
        "intimidation": 23,
        "stealth": 27
      },
      "languages": [
        "common",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "poison",
          "precision"
        ],
        "resistances": [
          "all-damage 10 except force, ghost-touch, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "yF5x6s4ZYEZtto6J",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d12+10 void",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "0eBQQnVqxlDicgcI",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "8FgEIFUzEgLTHjHc",
          "name": "Fearsense (Precise) 60 feet",
          "kind": "passive",
          "description": "The betobeto-san is aware of all Frightened creatures within the listed range."
        },
        {
          "id": "jEfZwLub2SXZ9ApN",
          "name": "Ominous Footsteps",
          "kind": "passive",
          "description": "60 feet. The betobeto-san's footsteps seem to draw ever closer, yet the source remains difficult to pinpoint. Each creature that starts its turn within 60 feet of the betobeto-san must attempt a check (will, dc:29) save.\nCritical Success The creature is unaffected and is temporarily immune for 1 minute.\nSuccess The creature becomes Frightened 1.\nFailure The creature becomes Frightened 2.\nCritical Failure The creature becomes Frightened 4."
        },
        {
          "id": "uDYAOTcNICSCyK3S",
          "name": "Shadow Invisibility",
          "kind": "passive",
          "description": "The betobeto-san is Invisible unless within an area of bright light."
        },
        {
          "id": "cp5UE666Pg5Pz1gR",
          "name": "Shadow Step",
          "kind": "reaction",
          "description": "Trigger A bright light source reveals the betobeto-san.\nRequirements The betobeto-san isn't already within an area of bright light.\nEffect The betobeto-san Steps briefly into the Shadow Plane and then back again, appearing up to 30 feet away from where they began."
        },
        {
          "id": "iPdoOjHPIU1Zhkvd",
          "name": "Stepping Decoy",
          "kind": "action",
          "description": "The betobeto-san Steps. They then create two illusory decoys of sound within @Template[emanation|distance:15]{15 feet} of them that mimic the sounds of their ominous footsteps.\nThese decoys act independently on the betobeto-san's initiative with 2 actions apiece. They can only Sneak or Stride, and they have a Speed of 35 feet. Use the betobeto-san's Stealth DC (typically 37) against attempts to Seek or disbelieve a decoy.\nEach decoy lasts for 1 minute. Any existing decoys vanish if the betobeto-san uses this ability again."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:coral-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "5upnh1nfYmbEjAGK",
      "slug": "coral-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf26f396d6299b557a889e8513774676c198931f095519600ebb3940fbf24621",
    "translatableHash": "sha256:9707fd24676c5eda9d53cdf59bd420131934a500f7cc4fce419396401590330e",
    "data": {
      "schemaVersion": 1,
      "name": "Coral Dragon (Adult)",
      "level": 12,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "Coral dragons are the primal guardians of the vast living coral reefs found in oceans across Golarion. Even by draconic standards, coral dragons stand out for their arrogance and vanity, boasting inordinate pride in the vibrant hues of their own coral-encrusted scales and the dazzling splendor of the reefs they protect. Coral dragons like to decorate their reefs, which they view as lairs, with objects of beauty, dotted with the occasional bit of valuables like coins. Those who seek the favor of a coral dragon often find the creature easily swayed by flattery, particularly when paired with shiny or brightly colored gifts that complement the scintillating beauty of the dragon and their underwater domain.",
      "armorClass": 32,
      "hitPoints": 215,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision",
          "wavesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 20,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 5,
        "int": 3,
        "wis": 5,
        "cha": 7
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 22,
        "diplomacy": 26,
        "intimidation": 26,
        "nature": 21,
        "society": 18,
        "stealth": 22,
        "survival": 23
      },
      "languages": [
        "common",
        "draconic",
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "dazzled",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OPzELGn6ZKAMLLQ6",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+13 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "dnY6CWQb134wKiOt",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d6+13 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "OY0h3cpcfWVhHPf4",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "14GpPXpVr9pIJT3O",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dhF6fJi6O0G9ZKmt",
          "name": "Biomineralize",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by a melee weapon without reach or an unarmed attack that deals slashing or piercing damage\nEffect A gout of blood spurts from the dragon's wound and instantaneously calcifies into a jagged branch of sharpened coral. The coral branch impales the triggering creature, dealing 7d6[piercing] damage (check (reflex, dc:32, basic) save). The triggering creature also takes 1d4[persistent,bleed] damage on a critical failure. Regardless of the outcome, the coral then crumbles to dust."
        },
        {
          "id": "Vwzh2ZT18smQFh7V",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "OWtobT819Yt0FTNY",
          "name": "Kaleidoscopic Display",
          "kind": "passive",
          "description": "90 feet. The coral formations covering the dragon's body glow and shimmer with vivid colors, overwhelming the senses and forcing any creature entering or beginning their turn in the aura to attempt a check (fortitude, dc:30, options:area-effect,inflicts:dazzled,inflicts:blinded) save. Regardless of the outcome, the creature is temporarily immune to the dragon's kaleidoscopic display for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is Blinded for 1 round.\nCritical Failure The creature is blinded for 1 round and dazzled for 1 minute."
        },
        {
          "id": "P4udhPlUFL1dXZ9A",
          "name": "Reef Bond",
          "kind": "passive",
          "description": "Every coral dragon is mystically bound to a single living coral reef. If the dragon moves more than 3 miles from their reef, they become Sickened 1 and unable to recover, with the sickened value increasing by 1 every 6 hours unless they succeed at a check (fortitude, dc:34) save. After 24 hours, the dragon becomes Drained 1; its drained value increases by 1 every 24 hours.\nIf the dragon's reef suffers significant damage, they immediately become aware of the location where the reef was harmed but not the source or nature of the damage. Should the reef ever be completely destroyed, the dragon is immediately slain."
        },
        {
          "id": "hqcT43pkMnsO31x0",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Hydraulic Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "27lO5hJcHjPjslLT",
          "name": "Hydraulic Breath",
          "kind": "action",
          "description": "The dragon exhales a pressurized jet of water that deals 13d6[bludgeoning|options:area-damage] damage in an @Template[type:line|distance:100] (check (reflex, dc:32, basic, options:area-effect,forced-movement,inflicts:prone) save). Creatures that critically fail their Reflex save against the Hydraulic Breath are pushed back 10 feet and knocked Prone. The dragon can't use Hydraulic Breath again for [[/gmr 1d4 #Recharge Hydraulic Breath]]{1d4 rounds}."
        },
        {
          "id": "DrGbBNaXvcBQvYSR",
          "name": "Reef Meld",
          "kind": "action",
          "description": "Frequency once per day\nRequirements The coral dragon is in physical contact with their bound reef\nEffect The dragon physically merges with the reef and vanishes, along with up to four willing creatures, into an extradimensional space where it can neither affect nor be affected by the outside world. The effect lasts indefinitely or until the dragon Dismisses it. Once merged, the dragon can spend 1 minute traveling to and emerging from any point on its reef up to 5 mile away."
        },
        {
          "id": "pC3lWBo6lqUsZ0ON",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ferrugon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "CgDdoQ0pa0LI45NB",
      "slug": "ferrugon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8f0fb914c2157286c3ba00827e17a4e8ae75b52b249616fa1a8c84536bd92f5b",
    "translatableHash": "sha256:7145dcd364259f9b3d494665b7311b2fb2bd41601e31b7c8ab474e5b73c72e4a",
    "data": {
      "schemaVersion": 1,
      "name": "Ferrugon",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "These ram-headed devils have wings and flesh made of rusted metal. They're forged from the souls of damned mortals who made others suffer through their creative work. They like to tempt those of the same ilk, driving auteurs and stage directors to cruelty in the pursuit of greatness. Ferrugons also enjoy pushing artists to extremes in order to break them. They dip the bodies of mortals they've driven to despair into molten metal to make horrifically malformed statues, which they then add to their lairs.\nRust devils prefer temptation to fighting and only enter combat if protecting something dear to them.",
      "armorClass": 33,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 21
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 4,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "athletics": 25,
        "crafting": 22,
        "deception": 21,
        "intimidation": 23,
        "religion": 22,
        "stealth": 23,
        "thievery": 25
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean",
        "talican"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 10 except silver"
        ],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "McbC0BrBzm6jXv1G",
          "name": "Horn",
          "bonus": 25,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "cold-iron",
            "magical",
            "shove",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "7X6pzCuwIvpSEnHY",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d4+16 slashing",
          "traits": [
            "agile",
            "cold-iron",
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "oNzYEEHyAi8ThGDL",
          "name": "Iron Feather",
          "bonus": 23,
          "damage": "3d4 + 13 piercing",
          "traits": [
            "cold-iron",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "C3zEAOjymoGJcHJ8",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kfaQck7yWPgM2fTX",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "TddtdjaipJEYqpwC",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "TTwj9RU4LXllk71q",
          "name": "Metallic",
          "kind": "passive",
          "description": "A ferrugon is a metallic creature and thus affected by effects such as the circumstance penalty inflicted by Thunderstrike."
        },
        {
          "id": "7vO5tpXGCIZWw4dU",
          "name": "Vainglorious Whispers",
          "kind": "reaction",
          "description": "Trigger A non-devil creature within 30 feet of the ferrugon succeeds (but doesn't critically succeed) at an attack roll, skill check, or saving throw\nEffect The ferrugon whispers subversive messages to the triggering creature, causing it to become overly confident in its abilities, while in fact it becomes less accomplished overall. The target must attempt a check (will, dc:32) save. On a failure, the target gains a +2 status bonus to saving throws against fear effects but also takes a –2 penalty to all attack rolls and skill checks for 1 hour. During this time, the victim can't benefit from Aid reactions, use healing effects on themselves, or use Take Cover or Raise a Shield actions, as these actions seem unnecessary to the creature at this time. Similar defensive actions might not be available to the victim as well, at the GM's discretion. The target is then temporarily immune to Vainglorious Whispers for 24 hours.\nEffect: Vainglorious Whispers"
        },
        {
          "id": "m5jrurRSdWLjkAPv",
          "name": "Ferrugon Tetanus",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:32)\nOnset [[/gmr 1d4 #Days]]{1d4 days}\nStage 1 Clumsy 1 (1 week)\nStage 2 Clumsy 2 and can't speak (1 day)\nStage 3 Paralyzed (1 day)\nStage 4 death"
        },
        {
          "id": "CS1UMHIWSSdKkDlD",
          "name": "Sunder Objects",
          "kind": "passive",
          "description": "When a ferrugon damages an item or structure, they deal an additional 2d8 damage to that item or structure."
        }
      ],
      "spellcasting": [
        {
          "id": "WoADfIU4m6m8ohSf",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "PBvTHDM3nc8F8LUG",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "aUCR74haC1bXJSX3",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "NECiD0M7x3RJLkbj",
              "name": "Creation",
              "rank": 5
            },
            {
              "id": "AhM1JXCImAX6Zu9M",
              "name": "Shatter",
              "rank": 5
            },
            {
              "id": "dGcGPtLJd8zonlZk",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "ZB3iW8avU46qIME6",
              "name": "Wall of Stone (wall is made of rusty iron, not stone)",
              "rank": 5
            },
            {
              "id": "vzzcrnjqJ9EC3WeH",
              "name": "Petrify (target is transformed into rusty iron, not stone)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "eTPzH6vTomEZy2UA",
      "slug": "resurrection-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:10bb93cf510003e5fb5183481ded09e5caa0c9e7714baaebbe37de3e0a114c94",
    "translatableHash": "sha256:388d50986f859a0c5cce575969e4d18b5b5a90bd85ad6ca1e6386b3f7f2aa538",
    "data": {
      "schemaVersion": 1,
      "name": "Resurrection Dragon (Adult, Spellcaster)",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Resurrection dragons teeter between life and death. They have a mastery of vital energies, allowing them to restore life to the dead, and a mastery of void energies, to bestow death on others. They make use of their abilities to play with the lives of mortals, calling on spirits to aid them or reviving creatures they find important or interesting. The lair of a resurrection dragon is generally a barren place. While they still hoard wealth like other dragons, they do little to decorate their lairs and treasures are generally kept in dark niches, as if the dragon has little care for their possessions. Resurrection dragons tend to take tokens from those they resurrect or plan to resurrect, however, and these are kept particularly safe.",
      "armorClass": 32,
      "hitPoints": 230,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 20,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 20,
        "arcana": 22,
        "athletics": 25,
        "diplomacy": 23,
        "medicine": 25,
        "religion": 25,
        "stealth": 22
      },
      "languages": [
        "common",
        "draconic",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [
          "spirit 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "I4Fc31lnhp82weCJ",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+11 piercing; 1d6 void",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "nPF8Cb7ZRAMjmXSt",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+11 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "MgM7NXJsmS3NTvsO",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d10+11 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "NMPK6lhp2OOB6OWm",
          "name": "Reawaken!",
          "kind": "reaction",
          "description": "Trigger A living creature the resurrection dragon can see dies\nEffect The resurrection dragon uses divine and vital energy to retether the soul to its dead body. The willing creature is returned to life stabilized at 0 HP. A creature can be resurrected by this ability only once."
        },
        {
          "id": "hpxkGqOrHF4syPRM",
          "name": "Risen Commander",
          "kind": "passive",
          "description": "A resurrection dragon has a strong connection with its minions and can Sustain Summon Undead or Invoke Spirits as a free action once per turn."
        },
        {
          "id": "SHGSNKhRLCJ5x8DV",
          "name": "Siphon Life",
          "kind": "reaction",
          "description": "Trigger A creature within 60 feet uses a healing effect that restores Hit Points\nEffect The resurrection dragon redirects vital energies away from the effect, minimizing its impact. The triggering effect results in the minimum amount on any dice rolls to restore Hit Points, and any flat values for restoring Hit Points (such as the additional Hit Points for a two-action Heal spell) are cut in half. The dragon then gains 2d8 temporary Hit Points that last for 1 round."
        },
        {
          "id": "AVeCp0hrGkLxjYtI",
          "name": "Arise!",
          "kind": "passive",
          "description": "The resurrection dragon uses their mastery over life energy to cast their own soul into the Boneyard and pull a willing creature's soul back to its body in a process that takes 1 hour. This has the effects of Raise Dead, except the maximum level of the target is 8th and the soul is tethered to the dragon's. Only one creature can be tethered to the dragon's soul at a time. If the creature and the dragon are no longer on the same plane or the dragon dies, the raised creature dies and can't be raised with Arise! again. The dragon can Dismiss the connection at any time. Doing so doesn't prevent the dragon from raising the creature with Arise! again.\nWhile raised in this way, the creature is still a valid target for raise dead, Resurrect, and similar effects. Returning the creature to life in this way fully restores the creature, severing the connection to the dragon and allowing the dragon to establish a connection with a different creature."
        },
        {
          "id": "xocggVl34iamkAuY",
          "name": "Soul Siphoning Breath",
          "kind": "action",
          "description": "The dragon unleashes a torrent of divine energy, dealing 11d6[void|options:area-damage] damage in a @Template[type:cone|distance:40] (check (fortitude, dc:32, basic, options:area-effect) save) that draws the life force from creatures within. The dragon gains fast healing 10 until their Soul Siphoning Breath recharges. The resurrection dragon can't use Soul Siphoning Breath again for [[/gmr 1d4 #Recharge Soul Siphoning Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "0GqIPUbBxIxuBMWb",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "KajTFfrkNkDW6vlx",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "MViW4VoxPEhiAHcR",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "A7PoM8dMhH9DUd7e",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "sr5EfYXB4H5B3ZAp",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "LO9XUNifkn80jB56",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "ubBQqsaxFVPpQUaF",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "ozGnnelWR5O7aVAZ",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "SY2CTBSWAwGpE7g0",
              "name": "Infuse Vitality",
              "rank": 1
            },
            {
              "id": "jHf899WM252Tj9LH",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "lamVW0wYBScRG6eZ",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "anSbCqdW6ATaJO7u",
              "name": "Summon Undead",
              "rank": 1
            },
            {
              "id": "ctYhi2hs0ikjDyMx",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "lZS5WHoAeldQZsj9",
              "name": "Final Sacrifice",
              "rank": 2
            },
            {
              "id": "OjgaFR4DGP0niAl7",
              "name": "Share Life",
              "rank": 2
            },
            {
              "id": "rFxoSt4WwXkN771q",
              "name": "Spirit Sense",
              "rank": 2
            },
            {
              "id": "BXry4FFFzVX1Tnlm",
              "name": "Sudden Blight",
              "rank": 2
            },
            {
              "id": "TN9v4JzNJHjVUHhj",
              "name": "Vampiric Feast",
              "rank": 3
            },
            {
              "id": "EVeHhs0f2JXipgbG",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "CMBwJvPyicto0jec",
              "name": "Invoke Spirits",
              "rank": 5
            }
          ]
        },
        {
          "id": "tKsTs82dmSyNYScu",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 32,
          "spells": [
            {
              "id": "2Lrt0rRtAiZirise",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "vhK6W5pvcMuMjGNX",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Vt5ntcKYFooB3r4j",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "CArRWyh5UaMCs8iE",
              "name": "Talking Corpse (At Will)",
              "rank": 4
            },
            {
              "id": "71yzJ4lQ9yU6JrLV",
              "name": "Invoke Spirits",
              "rank": 5
            },
            {
              "id": "bAIgvb81XSjPjIzy",
              "name": "Harm",
              "rank": 6
            },
            {
              "id": "Lm7766u7DwCbb0mT",
              "name": "Raise Dead",
              "rank": 6
            },
            {
              "id": "t2AUpf72SQPiiIxc",
              "name": "Summon Undead (At Will)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:calikang",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "FP2JGgFA3NmnXf1o",
      "slug": "calikang",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ee7be577cbf94a74cb8b0d83fdf29d03810c8af0e4d2c3e3c5988be127fceab7",
    "translatableHash": "sha256:f00411adf6cea194d96d191d044a56e27e89d6f95325a0d548cd4029fe288286",
    "data": {
      "schemaVersion": 1,
      "name": "Calikang",
      "level": 12,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "humanoid"
      ],
      "description": "Calikangs are giant, blue-skinned, six-armed guardians of ancient tombs and treasuries. They each feel a deep, inherent drive to protect and guard, making them highly sought after as wardens and bodyguards. Because most serve as solitary guardians, few calikang societies exist.\nCalikangs' unique physiologies enable them to absorb and manipulate electrical magic as well as other energies. They can live for 200 years-though they can further extend their lives via suspended animation. For this reason, many are chosen to guard tombs or other sealed sites where living guardians would perish and constructs would deteriorate.",
      "armorClass": 31,
      "hitPoints": 235,
      "speedFeet": 35,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 22,
        "will": 20
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": -2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "athletics": 25,
        "intimidation": 24
      },
      "languages": [
        "common",
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IH1oaRD65ApAyt5k",
          "name": "Longsword",
          "bonus": 28,
          "damage": "2d8+15 slashing",
          "traits": [
            "magical",
            "reach-10",
            "versatile-p"
          ]
        },
        {
          "id": "xIt4uW4tEMRY5Y7p",
          "name": "Fist",
          "bonus": 25,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "yVpUeHZRYHGkXayx",
          "name": "Suspended Animation",
          "kind": "passive",
          "description": "By concentrating for 5 minutes, the calikang can enter a state of suspended animation, freezing in place and becoming motionless but remaining aware of their surroundings.\nWhile in this state, the calikang gains a +4 status bonus to Fortitude saves; doesn't age; and is immune to disease, inhaled toxins, poison, starvation, and thirst.\nThe calikang can exit suspended animation as a free action. If they exit this state to attack, the calikang gains a +2 circumstance bonus to their initiative roll."
        },
        {
          "id": "vdpzi8I0mzpB3lHw",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6d6cIadAucEYZpne",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "4k6Uvj17HBcW7ylM",
          "name": "Energy Conversion",
          "kind": "passive",
          "description": "Whenever the calikang is hit by an electricity spell's attack roll or rolls a successful save against a spell that deals electricity damage, they absorb the energy.\nThis heals the calikang for an amount of HP equal to quadruple the spell's rank and recharges their Breath Weapon. A calikang can't absorb their own spells this way."
        },
        {
          "id": "JmeFujNsZiXeU7qA",
          "name": "Energy Breath",
          "kind": "action",
          "description": "Frequency once per day.\nEffect The calikang breathes a blast of energy that deals 13d6[@item.flags.system.rulesSelections.breathWeapon|options:area-damage] damage to creatures in a @Template[line|distance:60] (check (reflex, dc:28, basic, options:area-effect) save). The calikang can choose the damage type each time: acid, cold, electricity, fire, or sonic.\nIncrease the die size to d8 if the calikang chooses electricity."
        },
        {
          "id": "zFuVmNNi7HexpunZ",
          "name": "Sixfold Flurry",
          "kind": "action",
          "description": "The calikang makes up to two longsword Strikes and up to four fist Strikes. Each Strike must be against a different target.\nThese attacks count toward the calikang's multiple attack penalty, which doesn't increase until after all the attacks are complete.\nFor 1 round, the calikang gains a circumstance bonus to their AC equal to the number of Strikes they choose not to take, to a maximum of +4 for taking only two Strikes.\nEffect: Sixfold Flurry"
        }
      ],
      "spellcasting": [
        {
          "id": "d3CPZluPoEOBmUDr",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "XX6N64aoSGL9jWS6",
              "name": "Runic Weapon (At Will)",
              "rank": 1
            },
            {
              "id": "OEMLkECo3INN8s3u",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "2etpUEez5sWOqlMb",
              "name": "Truesight (Constant)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:xiuh-coatl",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "gVgVKlSqg0crOQSl",
      "slug": "xiuh-coatl",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:913b95c087277ec1c1f99a5a3d0a15e6f4a158e612e27e0c331859e8bf50f12b",
    "translatableHash": "sha256:f727a7dbe24bdcfc6e2180a8d63850eede62c969dca790d1b7fae5f6c3bc52d4",
    "data": {
      "schemaVersion": 1,
      "name": "Xiuh Coatl",
      "level": 12,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "beast",
        "couatl",
        "holy"
      ],
      "description": "Fiercer than other coatls, xiuh coatls (pronounced \"shoo\") are dedicated to seeking out malevolent creatures and offering a final opportunity at redemption.\nCoatls are serpentine celestials who tirelessly help mortals reach their greatest potential all across the planes. Some serve benevolent deities as intermediaries, while others serve the cause of good as they see fit.",
      "armorClass": 33,
      "hitPoints": 220,
      "speedFeet": 20,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "thoughtsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 19,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 4,
        "int": 5,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 21,
        "arcana": 23,
        "diplomacy": 26,
        "intimidation": 26,
        "nature": 23,
        "occultism": 23,
        "society": 21,
        "stealth": 21,
        "survival": 21
      },
      "languages": [
        "common",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "electricity",
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 8"
        ]
      },
      "attacks": [
        {
          "id": "XpzY4UQrwOlgO4km",
          "name": "Jaws",
          "bonus": 25,
          "damage": "2d10+10 piercing; 2d8 fire",
          "traits": [
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "6m61dIKarBky0Oue",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "JjTVprpY8GeQPnTT",
          "name": "Thoughtsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "OC5iW5RWtphm9Mby",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zLh5jRcxUaafQvod",
          "name": "Greater Constrict",
          "kind": "action",
          "description": "(1d10+10)[bludgeoning,1d8[electricity]], check (fortitude, dc:32, basic, options:inflicts:unconscious)"
        },
        {
          "id": "oUqggV8Z8uzpYdNA",
          "name": "Instrument of Retribution",
          "kind": "action",
          "description": "The xiuh coatl transforms into any simple or martial weapon. The weapon is always a +2 greater striking flaming shock weapon and can be of any size, chosen by the xiuh coatl when they transform. In weapon form, the xiuh coatl gains Hardness equal to that of the weapon into which they transform, and they retain their Hit Points, saving throws, senses, telepathy, and traits while in weapon form. The xiuh coatl can Sustain to revert to their normal form."
        },
        {
          "id": "zzRvWHp5hTbs93tu",
          "name": "Volcanic Lightning Breath",
          "kind": "action",
          "description": "The xiuh coatl breathes a gout of flame and lightning in an @Template[type:line|distance:80] that deals 5d8[electricity,5d8[fire]|options:area-damage]{5d8 electricity damage and 5d8 fire damage} (check (reflex, dc:32, basic, options:area-effect) save). The xiuh coatl can't use Volcanic Lightning Breath again for [[/gmr 1d4 #Recharge Volcanic Lightning Breath]]{1d4 rounds}."
        },
        {
          "id": "VzzWLmieSojZVoLh",
          "name": "Wrap in Coils",
          "kind": "action",
          "description": "Requirements The xiuh coatl has a Medium or smaller creature Grabbed or Restrained in their jaws\nEffect The mix coatl moves the creature into their coils, freeing their jaws to make attacks, and then uses Constrict against the creature. The mix coatl can hold as many creatures in their coils as will fit in their space."
        },
        {
          "id": "4923v7qhGbPOnzkA",
          "name": "Xiuh Coatl Venom",
          "kind": "passive",
          "description": "To unholy creatures, this is a curse instead of a poison and deals spirit damage instead of poison damage\nSaving Throw check (fortitude, dc:32)\nMaximum Duration 6 rounds\nStage 1 2d8[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d10[poison] damage, enfeebled 1, and –5-foot status penalty to all Speeds (1 round)\nStage 3 3d8[poison] damage, Enfeebled 2, and –10-foot status penalty to all Speeds (1 round)\nAgainst unholy\nSaving Throw check (fortitude, dc:32, traits:curse,holy, overrideTraits)\nMaximum Duration 6 rounds\nStage 1 2d8[spirit] damage and Enfeebled 1 (1 round)\nStage 2 2d10[spirit] damage, enfeebled 1, and –5-foot status penalty to all Speeds (1 round)\nStage 3 3d8[spirit] damage, Enfeebled 2, and –10-foot status penalty to all Speeds (1 round)"
        },
        {
          "id": "bx3k62vDUZ96bIL8",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "0UJ4qjLZlnk7jUKa",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "SdUumWRff3zjYA3m",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "gO4GZF5pdqFmrS2y",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Y41jk6dBJ3SCQ2Wn",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "hT2p1z5OCnav7stY",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "iKvlDGKAD9PRJ3b6",
              "name": "Invisibility (self only, at will)",
              "rank": 2
            },
            {
              "id": "et7gsaCprV080n1F",
              "name": "Clairaudience",
              "rank": 4
            },
            {
              "id": "lYQofSi6f7CcHD9L",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "gSVa6IkUl39MpuBv",
              "name": "Dream Message",
              "rank": 4
            },
            {
              "id": "9v1vdLlQazt9dACj",
              "name": "Fear",
              "rank": 4
            },
            {
              "id": "CTstCKPxFjSYorC2",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "qbqcujUaZEcx2n1a",
              "name": "See the Unseen",
              "rank": 5
            },
            {
              "id": "UgD6imWgQ1wF0rVW",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "XxnjTok2pwVQqzpb",
              "name": "Wave of Despair",
              "rank": 5
            },
            {
              "id": "3ffLaGmoYNPPrNty",
              "name": "Dispel Magic",
              "rank": 6
            },
            {
              "id": "1gKx27aYi8eOoL6h",
              "name": "Illusory Scene",
              "rank": 6
            },
            {
              "id": "QiXbvUx6uB5tBtwl",
              "name": "Mind Reading (At Will)",
              "rank": 6
            },
            {
              "id": "f7TTpIm7QLVXgjZO",
              "name": "Mindlink",
              "rank": 6
            },
            {
              "id": "AYnuaMPLRzj8HQQn",
              "name": "Phantom Pain",
              "rank": 6
            },
            {
              "id": "X9epmLObWzSNgsaM",
              "name": "Ring of Truth",
              "rank": 6
            },
            {
              "id": "XomVPsbXtCErsmOC",
              "name": "Interplanar Teleport",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grisantian-lion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "K8oGb2B4KCgXGN9W",
      "slug": "grisantian-lion",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a94f05aad04a88ac5f2b338ec9acc4cd2dccbddb3620fb4babd3a9ccac0bf201",
    "translatableHash": "sha256:1a655bddbeb1c2c5cc244402ee54b1707ba7bb833fc27b0c95d13676133cff18",
    "data": {
      "schemaVersion": 1,
      "name": "Grisantian Lion",
      "level": 12,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast",
        "primal"
      ],
      "description": "The appearance of the mighty grogrisant is a once-in-a-generation event, but the descendants of those legendary beasts are well known along the World's Edge Mountains and throughout Taldor. These primal predators don't travel in a pride as mundane lions do. Instead, they avoid others of their kind, even to mate, and seek out ordinary lions once a year for this purpose. A grisantian lioness who bears cubs only tends her offspring long enough for them to become self-sufficient—which takes but a few months, thanks to their kind's incredibly rapid growth and development.\nA full-grown grisantian lion is as large as an elephant and exceedingly aggressive, hunting anything it comes across. While ordinary lions rely on stealth and pack tactics to secure a meal, the grisantian lion is too big to hide amid tall grass. Instead, it has adapted to the mountains, where it chooses a large, hard-to-reach cave as its home, often killing any creature unfortunate enough to already inhabit the place. A grisantian lion can track for miles and is a canny hunter, hiding along rocky cliffs and outcroppings as it stalks prey.\nAlthough they're wild creatures that can never be tamed, grisantian lions understand Taldane and occasionally agree to help those who defend nature. However, such alliances are temporary and unreliable at best.",
      "armorClass": 32,
      "hitPoints": 215,
      "speedFeet": 35,
      "perception": {
        "modifier": 25,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 22,
        "will": 19
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 7,
        "int": -3,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 25,
        "intimidation": 25,
        "stealth": 22,
        "survival": 22
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "disease"
        ],
        "resistances": [
          "fire 10",
          "physical 10 except bludgeoning"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "bdjkq6x6bzqxv8rz",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+14 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "2pn8en2vb5v309tj",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+12 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "i0MTO7779XmgdHqP",
          "name": "Blinding Mane",
          "kind": "action",
          "description": "Frequency once per day\nEffect Drawing upon the power of their grogrisant ancestor, the grisantian lion focuses and causes their mane to glow with bright light. All creatures within 20 feet must attempt a check (fortitude, dc:29) save.\nCritical Success The target is unaffected.\nSuccess The target is Blinded until its next turn begins.\nFailure The target is blinded for 1 minute.\nCritical Failure The target is blinded permanently."
        },
        {
          "id": "dy0499e45s9un5ct",
          "name": "Dual Pounce",
          "kind": "action",
          "description": "The grisantian lion Strides and makes two claw Strikes against the same creature at the end of that movement. Each attack counts against the grisantian lion's multiple attack penalty, but the penalty doesn't increase until after the grisantian lion makes both attacks. If both attacks hit, combine their damage for the purpose of resistances and weaknesses."
        },
        {
          "id": "SbsDaImCI4BsHZJm",
          "name": "Rend",
          "kind": "action",
          "description": "claw.\nIf the grisantian lion Rends after a successful Dual Pounce, combine the Rend's damage with that from the Dual Pounce for the purpose of resistances and weaknesses."
        },
        {
          "id": "x4qyyzn65gfw5lxo",
          "name": "Vicious Rend",
          "kind": "reaction",
          "description": "Trigger The grisantian lion uses Rend\nEffect The target's armor takes damage equal to the damage from Rend. The target can attempt a check (reflex, dc:29, basic) save to reduce this damage."
        },
        {
          "id": "ffbObMy3QNME9DgZ",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:girtablilu-seer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "KerIcyz9XOTkZUdF",
      "slug": "girtablilu-seer",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:91f0e6c487722f5f9d1335d2b97f30b6441c82586a9f1fa5080b4fff117f36a6",
    "translatableHash": "sha256:4fc47d8107ac4789dba671de921d3a16dba750a9abe2841acf8d45461977fa1e",
    "data": {
      "schemaVersion": 1,
      "name": "Girtablilu Seer",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "girtablilu",
        "humanoid"
      ],
      "description": "The highest position of authority in a girtablilu community is the group's religious leader. This sacred duty requires years of study, meditation, and dedication to awaken a mystical font of divine magic within the girtablilu. These seers ensure that every action taken by the community falls in line with even the most obscure dogma of their tradition, and they don't hesitate to turn their fury on members of their own community who violate their mandates.\nGirtablilus are desert-dwelling guardians with the upper bodies of muscular humanoids and the lower bodies of massive scorpions. They are most often found defending ancient temples and religious artifacts with zealous fervor. Some believe they were created by a long-dead god millennia ago to act as guardians, but girtablilus consider the subject of their origin taboo and refuse to address the theory.\nBecause girtablilus accept a wide range of religions and belief systems, some outsiders believe they also worship their own ancient pantheon. In truth, girtablilus exclusively revere and protect sites dedicated to deities considered lost to civilization. In this way, they act as preservers of holy practices that have otherwise been forgotten beneath the desert's shifting sands.\nThough girtablilus are used to explorers seeking entrance to the sites they defend, they might welcome those who earnestly wish to learn or offer reverence. Some even proudly share their beliefs with others, eager for the opportunity to preach to someone new. They show no mercy, however, to those who attempt to desecrate the sites and objects of their worship, or to those who would violate the tenets of their faith.\nGirtablilus are skilled fighters who keep trained giant scorpions as pets, and they remain unmatched when it comes to fighting in the desert. They require relatively little food or water, and they rely on their stamina to outlast their enemies. When necessary, they can stalk their quarry for days or even weeks, coordinating with their pets to drive their prey in circles. Once exhausted, few foes can stand up to a girtablilu's physical prowess—or to their deadly venom.",
      "armorClass": 33,
      "hitPoints": 210,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 19,
        "will": 25
      },
      "abilities": {
        "str": 6,
        "dex": 5,
        "con": 6,
        "int": 3,
        "wis": 7,
        "cha": 3
      },
      "skills": {
        "athletics": 25,
        "intimidation": 23,
        "religion": 25,
        "survival": 23
      },
      "languages": [
        "common",
        "girtablilu"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hwPFfLY2WEiEx7HG",
          "name": "Pincer",
          "bonus": 24,
          "damage": "3d8 + 12 bludgeoning",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "6LAvrVOm3u6NsFBX",
          "name": "Stinger",
          "bonus": 24,
          "damage": "3d6 + 12 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "fjb2phihzP3AYXVQ",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "q6IiqtiPOejOEMhP",
          "name": "Divine Aegis",
          "kind": "reaction",
          "description": "Trigger The girtablilu seer attempts a saving throw against a magical effect but hasn't rolled yet\nEffect The seer summons divine energy to protect themself at the cost of their other magical defenses. Until the start of their next turn, they gain a +1 circumstance bonus to saving throws against non-divine magical effects and a –1 circumstance penalty to saves against divine effects."
        },
        {
          "id": "YSYL4KNUxQSbIspZ",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d8+6)[bludgeoning], check (fortitude, dc:30, basic)"
        },
        {
          "id": "reHPHVKdLSc8dk0Z",
          "name": "Desert Passage",
          "kind": "passive",
          "description": "A girtablilu ignores natural difficult terrain in the desert."
        },
        {
          "id": "33gLL2I6GxaQOjzn",
          "name": "Girtablilu Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:30)\nMaximum Duration 6 rounds\nStage 1 2d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 3d6[poison] damage and enfeebled 1 (1 round)\nStage 3 3d6[poison] damage and Enfeebled 2 (1 round)"
        },
        {
          "id": "DmCWtqxbwFUBkavN",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "lOLwMJZNPvWNAX0t",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "nkAELJCLv2bztqsd",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "SEhUOq9zDvFfd7Fu",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "CWEeTirAZiVoIcY9",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "YWImRhH0YQciBCLt",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "OOKPveG6BIQAhsOT",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "jC3PbRUTmGn3ROL7",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "FMO2ItUj7M0Fw6Tw",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "rGjrzBNt5m5LfzVl",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "PDBOAxmvSkfLNGxn",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "4UyvDbquyx5dL9Gc",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "YC2qlEUf8TP0LiSI",
              "name": "Create Food",
              "rank": 2
            },
            {
              "id": "AXHwvwOzVizmRBbr",
              "name": "Anointed Ground",
              "rank": 3
            },
            {
              "id": "jvA6YB6u7Ylg3uyf",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "nrCEg067wvbrbdvj",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "QQnVM06gcjEJesK3",
              "name": "Cleanse Affliction",
              "rank": 4
            },
            {
              "id": "zBKSvT2u4rgQEXqU",
              "name": "Outcast's Curse",
              "rank": 4
            },
            {
              "id": "EeOaT0Y0gmSeLtEn",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "k9BT9IyitC0dNIdd",
              "name": "Cleanse Affliction",
              "rank": 5
            },
            {
              "id": "YPFDuTSiG1zlypO7",
              "name": "Divine Wrath",
              "rank": 5
            },
            {
              "id": "hAwKsy7Yhjwuutej",
              "name": "Harm",
              "rank": 5
            },
            {
              "id": "5h1zmseplyaoF9sO",
              "name": "Blessed Boundary",
              "rank": 6
            },
            {
              "id": "5liFrvx53U5sOlXF",
              "name": "Heal",
              "rank": 6
            },
            {
              "id": "F1LDIN0mFQPD4FBf",
              "name": "Spirit Blast",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:worm-prophet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "KTLPENmqBoOpdkAt",
      "slug": "worm-prophet",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a9f05c6ea5d36620d4a946861b4e13374bf5eb0bce2a3b9c774275f985753d89",
    "translatableHash": "sha256:ba9d5be67abc6f2f3c993574062a6a6e7b64f4560fb4e0f58afb8445bd49bbb7",
    "data": {
      "schemaVersion": 1,
      "name": "Worm Prophet",
      "level": 12,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration",
        "swarm",
        "unholy"
      ],
      "description": "Even though they believe they'll dwell with their deity in the afterlife, when nearing death, some priests desperately call out to any gods willing to listen. The worms that consume such an ex-priest's flesh absorb these prayers, transforming into a worm prophet, a pious swarm strider that might worship hundreds of gods without calling any one its patron, perhaps collecting dozens of religious symbols or haphazardly tearing pages out of various religious texts and binding them into a contradictory new scripture. These creatures often lose whatever edicts and anathema bound them in life and instead hungrily seek to convert others to their hodgepodge faith—or \"indoctrinate\" victims by consuming those who won't join willingly. Worm prophets don't typically have reservations with entering their swarm form whenever they see fit.\nAll living creatures eventually become worm food. Yet if a creature perishes while gripped by overwhelming emotion or unfinished business, its flesh can become infused with those obsessions or a simple refusal to perish, infecting whatever detritivores feast on the body. As they feast, the invertebrates awaken to a type of collective intelligence, including some of the dead creature's memories and motivations. Once the body is stripped bare, the vermin swarm together and intertwine to recreate the dead creature's form out of thousands of wriggling bodies. These reborn are known as swarm striders.\nThough many swarm striders are accidental creations, a few rare mortals purposefully transform themselves into swarm striders through powerful rituals. Most often, this process involves specially preparing a grave with ample scavengers and enchanting the site with occult magic to anchor their soul until it can live within the swarm. Through transformation, these intentional swarm striders seek out the power to slip past any defense or claim the virtual immortality of an ever-regenerating horde, as a swarm strider can reconstitute their form from even a single worm. However, the transformation inevitably scars the creature—often causing emotional detachment, the disintegration of old taboos, and a dissociated sense of self now that one mind has become a thousand. In their transformed state, even the best-intentioned swarm strider might embrace villainy and lose any semblance of their former selves over the span of many years.",
      "armorClass": 32,
      "hitPoints": 160,
      "speedFeet": 25,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 20,
        "will": 25
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": 3,
        "wis": 7,
        "cha": 6
      },
      "skills": {
        "acrobatics": 20,
        "diplomacy": 22,
        "intimidation": 24,
        "performance": 22,
        "religion": 25,
        "stealth": 22
      },
      "languages": [
        "aklo",
        "chthonian",
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind",
          "unconscious"
        ],
        "resistances": [
          "physical 10",
          "poison 10",
          "spirit 10"
        ],
        "weaknesses": [
          "area-damage 10",
          "splash-damage 10"
        ]
      },
      "attacks": [
        {
          "id": "5xIpndmX3Z6R8fT7",
          "name": "Warhammer",
          "bonus": 24,
          "damage": "2d8+11 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "xsYK4JxP1q6zXm9c",
          "name": "Fist",
          "bonus": 24,
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
          "id": "hb1zq2TbsLvednSs",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eBZJh8VtevnrI3AU",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5jSWTpXUjMgbM2mH",
          "name": "Discorporate",
          "kind": "passive",
          "description": "When the swarm strider is reduced to 0 HP, their constituent creatures collapse, scattering on the ground under their space and each adjacent square. If even one of the creatures gets away, the swarm strider can eventually re-form over 1d10 days (potentially longer in areas where there are few invertebrates). The scattered invertebrates must be destroyed within 1 round to destroy the swarm strider permanently. The invertebrates have a collective pool of 40 HP, and the same AC, saves, immunities, resistances, and weaknesses as the swarm strider. The invertebrates can't take actions but they escape automatically once the round elapses. At the GM's discretion, clever means of trapping or eliminating the creatures might be sufficient to destroy the swarm strider."
        },
        {
          "id": "w8F8nbp4IWZUSgyW",
          "name": "A Thousand Mouths In Prayer",
          "kind": "action",
          "description": "The worm prophet's constituent creatures whisper countless paeans to their gods. The worm prophet attempts to counteract (counteract modifier [[/gmr 1d20+24 #Counteract]]{+24}, counteract rank 6) an effect on a creature within 30 feet that's imposing one of the following conditions: Blinded, Clumsy, Dazzled, Deafened, Enfeebled, Frightened, persistent damage, Sickened, Slowed, or Stupefied. Once the worm prophet successfully counteracts an effect in this way, it can't do so again for [[/gmr 1d4 #Recharge A Thousand Mouths In Prayer]]{1d4 rounds}."
        },
        {
          "id": "4FSeHozk0lfay7Lq",
          "name": "Clinging Remnants",
          "kind": "passive",
          "description": "A swarm strider's melee Strikes and ranged Strikes made against targets within their weapon's first range increment deposit biting vermin on the target, dealing 3d4[persistent,piercing] damage."
        },
        {
          "id": "SOnKi5vgCGb1MNFn",
          "name": "Draw Bugs",
          "kind": "action",
          "description": "The swarm strider draws more arthropods from the environment around them to reconstitute some of their damaged body. They regain 15 HP. At the GM's discretion, the swarm strider doesn't recover HP in areas where there aren't enough arthropods to call to themselves."
        },
        {
          "id": "O2JgYhLmU4N79VHZ",
          "name": "Squirming Embrace",
          "kind": "action",
          "description": "The swarm strider Strides. If they end their movement sharing a space with a creature, they deal 4d6[piercing] damage to the creature, with a check (reflex, dc:32, basic). The swarm strider can Burrow, Climb, Fly, or Swim instead of Striding if they have the corresponding movement type."
        },
        {
          "id": "aACTV1ltuDAs7DXj",
          "name": "Swarm Shape",
          "kind": "action",
          "description": "The swarm strider collapses into a shapeless swarm of their constituent creatures. They drops all items in their possession. In this form, the swarm strider can't use attack actions and can't cast spells, but they can move through areas small enough for their constituent creatures to fit without having to Squeeze. They can use the same action to coalesce from their swarm shape back into their normal form."
        }
      ],
      "spellcasting": [
        {
          "id": "hbuLj9sXjuEAzucw",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "lcOkW3uvHWrysBS4",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "Dxq6lFfU1sLSMdao",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "MdR5QNZhoPaYUx5Q",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "MMA0PIjGkg96eTtu",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "WU6SfON9BZtzffBv",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "JOCztctIUNB9wUqn",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "fcHP0COWUJ4X9XDK",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "eWuJ7eB3vDp5F5Zj",
              "name": "Crisis of Faith",
              "rank": 3
            },
            {
              "id": "7DbufueOS8hvCLyD",
              "name": "Divine Wrath",
              "rank": 4
            },
            {
              "id": "gkMLhYsQovVC2SgG",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "YNBX2c5GMgCGo93c",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "0mRBAuB3dDri3qCa",
              "name": "Spiritual Guardian",
              "rank": 5
            },
            {
              "id": "96n7kXnlOcHtSr1C",
              "name": "Blessed Boundary",
              "rank": 6
            },
            {
              "id": "hEP5nECWPzseJUHh",
              "name": "Vampiric Exsanguination",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:valkyrie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "PC6i1eCbQgWBvi7U",
      "slug": "valkyrie",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2dc3ee947eab79b5060b04536ceb2c2fe3eb5144508d3854ea0092a076d44bf9",
    "translatableHash": "sha256:d17e2a33562bd0e75b4b01640f19cd7c0908649fff73ead1b070bd4a4ff93abf",
    "data": {
      "schemaVersion": 1,
      "name": "Valkyrie",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aesir",
        "monitor"
      ],
      "description": "The song of the valkyries plays wherever steel rings against steel. Choosers of the slain and so-called angels of battle, valkyries are humanoid individuals of impressive physical stature who seek the most epic battles and legendary conficts so they can lay claim to the souls of the world's greatest warriors. The valkyries transform these souls into the implacable immortals known as einherjar.\nValkyries most often serve gods of battle and war, though one might pledge their service to any deity they consider worthy. Gorum was particularly well known for having valkyrie and einherjar servants. Besmara also has valkyrie servitors, and many stories of \"ghost ships\" actually reference accounts of encounters with ships crewed by einherjar devoted to the Pirate Queen.",
      "armorClass": 33,
      "hitPoints": 215,
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
        "will": 23
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 5,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 25,
        "diplomacy": 23,
        "intimidation": 23,
        "religion": 22
      },
      "languages": [
        "common",
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OWa41XZ0GByISijn",
          "name": "Spear",
          "bonus": 28,
          "damage": "2d6+15 piercing; 1d12 electricity",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "EzVhFWQhs6axH99B",
          "name": "Spear",
          "bonus": 26,
          "damage": "2d6+15 piercing; 1d12 electricity",
          "traits": [
            "magical",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "wPsE3OnHZcFptWrh",
          "name": "Claimer of the Slain",
          "kind": "passive",
          "description": "Valkyries can detect the souls of those recently slain in combat. A valkyrie spends 10 minutes praying over the body of a creature who has been dead for no more than 12 hours; if that creature is worthy of becoming an Einherji, the valkyrie transforms that creature into an einherji."
        },
        {
          "id": "t9cow1t47Ns4t0H0",
          "name": "Ravenspeaker",
          "kind": "passive",
          "description": "Valkyries use ravens as servants and spies. They can speak with ravens, and they can have up to three raven servitors who follow their commands. Valkyries can constantly observe whatever their commanded ravens sense."
        },
        {
          "id": "b8889HDEEpdiqYFf",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "W0DoijaFJM8QcTWL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "Trigger A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike."
        },
        {
          "id": "19AKAkXuEUEtoqkr",
          "name": "Recall the Fallen",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger An allied creature within 60 feet who isn't a construct or undead is reduced to 0 Hit Points and their Dying value is 2 or less\nEffect The valkyrie restores 5d10[healing] Hit Points to the target."
        },
        {
          "id": "Hl6TVTFqmE0SOKoE",
          "name": "Storm of Battle",
          "kind": "action",
          "description": "The valkyrie hurls her spear into the air, creating a massive storm in a @Template[burst|distance:100]. Spears of lightning rain down upon enemies in the area, dealing 4d12[electricity|options:area-damage] damage (check (reflex, dc:32, basic, options:area-effect) save)."
        }
      ],
      "spellcasting": [
        {
          "id": "CR2hQQQ9hlXe7miP",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "pBTKYygZGTdwD8cu",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "ehgaBfb1f2q5tCvy",
              "name": "Heroism",
              "rank": 3
            },
            {
              "id": "JK1K3KoJ0C1rdO1m",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "cwUhMAFps7HlNpjJ",
              "name": "Status",
              "rank": 4
            },
            {
              "id": "0bLepJRkzpudfQkz",
              "name": "Infuse Vitality",
              "rank": 5
            },
            {
              "id": "eASrswNFoxu5Mo35",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "9A3YnB5w5Tb8VpXK",
              "name": "Heal",
              "rank": 6
            },
            {
              "id": "vUY6VV2NoK3leHKO",
              "name": "Heroism",
              "rank": 6
            },
            {
              "id": "pahqS8TU0kTPmWyL",
              "name": "Interplanar Teleport (self and mount only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:catoblepas",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "RA2dkQJANNFjgdSt",
      "slug": "catoblepas",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ee2da8487ba0e62ffab2f2768b508eac08f25a46365db21158495b68982f1a71",
    "translatableHash": "sha256:041c29763f18fd1af824f43519a39251c94b56a41c45febb67cfaceb1552a431",
    "data": {
      "schemaVersion": 1,
      "name": "Catoblepas",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "The catoblepas is an aggressive beast at the best of times. Though it prefers swamps, the catoblepas has been know to forage in plains and forests for short periods, leaving behind hunting grounds tainted by its foul breath and noxious waste that other predators and prey alike avoid for days or even weeks thereafter. The catoblepas bullies those creatures it believes are a match for it, and eats everything weaker.\nA catoblepas is 15 feet long and weighs 2,200 pounds.",
      "armorClass": 33,
      "hitPoints": 215,
      "speedFeet": 35,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 20,
        "will": 22
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 6,
        "int": -2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 25,
        "intimidation": 20,
        "stealth": 22,
        "survival": 20
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "poison",
          "olfactory"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "61EkmT4Ba451hMDC",
          "name": "Jaws",
          "bonus": 25,
          "damage": "3d10+13 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "76jTiA45mzSvkuz1",
          "name": "Antler",
          "bonus": 25,
          "damage": "3d12+13 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "B2rF8mguredueRbP",
          "name": "Hoof",
          "bonus": 23,
          "damage": "3d10+11 bludgeoning",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "x8pzzu8VRuRa5sdg",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. A creature entering the aura or starting its turn in the aura must succeed at a check (fortitude, dc:30, options:area-effect,inflicts:sickened,inflicts:slowed) save or become Sickened 1 (plus Slowed 1 for as long as it's sickened on a critical failure).\nWhile within the aura, affected creatures take a -2 circumstance penalty to saves against disease and to recover from the sickened condition. A creature that succeeds at its save is temporarily immune for 1 minute.\nEffect: Stench"
        },
        {
          "id": "XucZtbvC1QhYV0HW",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "VDW4W2k1N88INhBp",
          "name": "Poison Breath",
          "kind": "action",
          "description": "The catoblepas breathes a @Template[cone|distance:60] of horrid fumes, dealing 13d6[poison|options:area-damage] damage (check (fortitude, dc:32, basic, options:area-effect) save). The area of this cone is reduced to @Template[cone|distance:30]{30 feet} underwater. Targets that fail their saving throw also become Sickened 1 (Sickened 2 on a critical failure).\nThe catoblepas can't use its Poison Breath again for [[/gmr 1d4 #Recharge Breath Weapon]]{1d4 rounds}."
        },
        {
          "id": "lPlAVVeLD4qqvZ8q",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, hoof, check (reflex, dc:32, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rusalka",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "tHXV7mD747K60656",
      "slug": "rusalka",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fc61daa6bfd76d2a6ec62570c49bebfcead2c451409a1f2ffc3cdc99ddefd7ec",
    "translatableHash": "sha256:80864abbe63b5a2eaa9904860d391c115e0a5684923778dfb74e9defcd1e2816",
    "data": {
      "schemaVersion": 1,
      "name": "Rusalka",
      "level": 12,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aquatic",
        "fey",
        "water"
      ],
      "description": "These androgynous, river-dwelling fey delight in manipulating the emotions of those unfortunate enough to fall into their grasp, using humiliation to break victims' wills. Rusalkas enjoy keeping their broken toys nearby, both for continuing entertainment and to aid in their defense, as their captives' misery often drives them to become obsessively loyal to these fey. If a person ever escapes a rusalka's clutches, the rusalka will likely seek them out and shame them for \"abandoning\" their home, all in the hopes their victim regresses into a distressed mental state and returns to captivity.",
      "armorClass": 33,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 22,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 25,
        "will": 21
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 3,
        "int": 1,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 24,
        "deception": 25,
        "diplomacy": 21,
        "nature": 21,
        "performance": 23,
        "stealth": 25
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 10"
        ],
        "weaknesses": [
          "cold-iron 15"
        ]
      },
      "attacks": [
        {
          "id": "645l5baWgTH6yDhk",
          "name": "Tresses",
          "bonus": 24,
          "damage": "3d8+10 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "THBsyQQ1TPn4QRXx",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "hY0jrgvbD7p17qQK",
          "name": "Blurred Form",
          "kind": "passive",
          "description": "A rusalka is Concealed while underwater."
        },
        {
          "id": "I8j4nDu4JKTgvEbF",
          "name": "Beckoning Call",
          "kind": "action",
          "description": "The rusalka cries out a compelling invitation. Each non-fey creature within a @Template[type:emanation|distance:300] must attempt a check (will, dc:29, options:area-effect,inflicts:fascinated) save. The effect lasts for 1 round, but if the rusalka uses Beckoning Call again on subsequent rounds, the duration extends by 1 round for all affected creatures. Once a creature succeeds at any save against Beckoning Call, that creature is temporarily immune for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature is Fascinated and must spend each of its actions to move closer to the rusalka, avoiding obvious dangers. If a beckoned creature is adjacent to the rusalka, it stays still and doesn't act. If attacked by the rusalka, the creature is freed from captivation at the end of the rusalka's turn.\nCritical Failure As failure, but if attacked by the rusalka, the creature can attempt a new save only at the start of its next turn, rather than being freed at the end of the rusalka's turn."
        },
        {
          "id": "7difuXHglJeOajmt",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d8+10)[bludgeoning], check (fortitude, dc:32, basic)"
        },
        {
          "id": "NpOi3QLviESjzouR",
          "name": "Entangling Tresses",
          "kind": "passive",
          "description": "A rusalka can have up to eight creatures grabbed within their tresses at a time."
        },
        {
          "id": "jtXmmFgx5PW2WGoi",
          "name": "Flowing Hair",
          "kind": "action",
          "description": "The rusalka attempts an check (athletics, against:fortitude, options:forced-movement) check against the Fortitude DC of each creature they have Grabbed or Restrained by their tresses. The rusalka moves each creature they succeed against up to 10 feet and each creature they critically succeed against up to 20 feet. This movement must all be within reach of its tresses."
        },
        {
          "id": "uw1pWcCZmbGdd2S3",
          "name": "Shameful Touch",
          "kind": "action",
          "description": "The rusalka touches a creature within 5 feet using their hand, stirring up memories of regret and shame. The target must attempt a check (will, dc:35, options:inflicts:sickened,inflicts:stunned) save.\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1.\nFailure The creature is sickened 1 and Stunned 1.\nCritical Failure The creature is sickened 1, stunned 1, and it must use its first action on its next turn to Strike itself, automatically hitting."
        },
        {
          "id": "qB08JgkOjJGoAAYD",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "opwojONA0epjQmQi",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 27,
          "saveDc": 35,
          "spells": [
            {
              "id": "qGxtuGKOVRySglug",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "WdWB65jenJ7HRKQY",
              "name": "Mist (At Will)",
              "rank": 2
            },
            {
              "id": "ZHUgXbdGnIvdJGaA",
              "name": "Charm (At Will)",
              "rank": 5
            },
            {
              "id": "gj8a4jEmXZnHpkMp",
              "name": "Control Water (At Will)",
              "rank": 5
            },
            {
              "id": "6fcA60juNU839MBS",
              "name": "Water Walk (Constant)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:resurrection-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "v4GX8cUuuA7IyFpl",
      "slug": "resurrection-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2c907b50dc2944c2214bece3f2b95ac40fbfa7f5e00d6c9276644c3b6f04aef5",
    "translatableHash": "sha256:dc3c4415a7087f07ff4b9a897d53ee3b3944043fc0c7a847f7906b18c232534d",
    "data": {
      "schemaVersion": 1,
      "name": "Resurrection Dragon (Adult)",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Resurrection dragons teeter between life and death. They have a mastery of vital energies, allowing them to restore life to the dead, and a mastery of void energies, to bestow death on others. They make use of their abilities to play with the lives of mortals, calling on spirits to aid them or reviving creatures they find important or interesting. The lair of a resurrection dragon is generally a barren place. While they still hoard wealth like other dragons, they do little to decorate their lairs and treasures are generally kept in dark niches, as if the dragon has little care for their possessions. Resurrection dragons tend to take tokens from those they resurrect or plan to resurrect, however, and these are kept particularly safe.",
      "armorClass": 32,
      "hitPoints": 230,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 20,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": 4,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 20,
        "arcana": 22,
        "athletics": 25,
        "diplomacy": 23,
        "medicine": 25,
        "religion": 25,
        "stealth": 22
      },
      "languages": [
        "common",
        "draconic",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [
          "spirit 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "I4Fc31lnhp82weCJ",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d10+11 piercing; 1d6 void",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "nPF8Cb7ZRAMjmXSt",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+11 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "MgM7NXJsmS3NTvsO",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d10+11 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "NMPK6lhp2OOB6OWm",
          "name": "Reawaken!",
          "kind": "reaction",
          "description": "Trigger A living creature the resurrection dragon can see dies\nEffect The resurrection dragon uses divine and vital energy to retether the soul to its dead body. The willing creature is returned to life stabilized at 0 HP. A creature can be resurrected by this ability only once."
        },
        {
          "id": "hpxkGqOrHF4syPRM",
          "name": "Risen Commander",
          "kind": "passive",
          "description": "A resurrection dragon has a strong connection with its minions and can Sustain Summon Undead or Invoke Spirits as a free action once per turn."
        },
        {
          "id": "SHGSNKhRLCJ5x8DV",
          "name": "Siphon Life",
          "kind": "reaction",
          "description": "Trigger A creature within 60 feet uses a healing effect that restores Hit Points\nEffect The resurrection dragon redirects vital energies away from the effect, minimizing its impact. The triggering effect results in the minimum amount on any dice rolls to restore Hit Points, and any flat values for restoring Hit Points (such as the additional Hit Points for a two-action Heal spell) are cut in half. The dragon then gains 2d8 temporary Hit Points that last for 1 round."
        },
        {
          "id": "AVeCp0hrGkLxjYtI",
          "name": "Arise!",
          "kind": "passive",
          "description": "The resurrection dragon uses their mastery over life energy to cast their own soul into the Boneyard and pull a willing creature's soul back to its body in a process that takes 1 hour. This has the effects of Raise Dead, except the maximum level of the target is 8th and the soul is tethered to the dragon's. Only one creature can be tethered to the dragon's soul at a time. If the creature and the dragon are no longer on the same plane or the dragon dies, the raised creature dies and can't be raised with Arise! again. The dragon can Dismiss the connection at any time. Doing so doesn't prevent the dragon from raising the creature with Arise! again.\nWhile raised in this way, the creature is still a valid target for raise dead, Resurrect, and similar effects. Returning the creature to life in this way fully restores the creature, severing the connection to the dragon and allowing the dragon to establish a connection with a different creature."
        },
        {
          "id": "Zhqu3PdvrWKykPMZ",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw strikes and one tail strike in any order."
        },
        {
          "id": "WIa9oPm47kC5weT9",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Soul Siphoning Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "xocggVl34iamkAuY",
          "name": "Soul Siphoning Breath",
          "kind": "action",
          "description": "The dragon unleashes a torrent of divine energy, dealing 11d6[void|options:area-damage] damage in a @Template[type:cone|distance:40] (check (fortitude, dc:32, basic, options:area-effect) save) that draws the life force from creatures within. The dragon gains fast healing 10 until their Soul Siphoning Breath recharges. The resurrection dragon can't use Soul Siphoning Breath again for [[/gmr 1d4 #Recharge Soul Siphoning Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "tKsTs82dmSyNYScu",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 32,
          "spells": [
            {
              "id": "2Lrt0rRtAiZirise",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "vhK6W5pvcMuMjGNX",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Vt5ntcKYFooB3r4j",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "CArRWyh5UaMCs8iE",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "71yzJ4lQ9yU6JrLV",
              "name": "Invoke Spirits",
              "rank": 5
            },
            {
              "id": "bAIgvb81XSjPjIzy",
              "name": "Harm",
              "rank": 6
            },
            {
              "id": "Lm7766u7DwCbb0mT",
              "name": "Raise Dead",
              "rank": 6
            },
            {
              "id": "t2AUpf72SQPiiIxc",
              "name": "Summon Undead (At Will)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tomb-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XbaIHmvgqjLChTKq",
      "slug": "tomb-giant",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:429f7b6beff692a91aa4db45534157b4ef3dbfa041a3941610b285841e8b6d28",
    "translatableHash": "sha256:29d940850394c2fc52abfa6fe16882c7aeee635462a40a5598060483e73b94b7",
    "data": {
      "schemaVersion": 1,
      "name": "Tomb Giant",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "Masters of mausoleums and keepers of crypts, the dread creatures called tomb giants are anathema to all living beings, but especially so to other types of giants. Long ago, so the legends say, tomb giants sold their souls in exchange for unfathomable power over the undead. Tomb giants construct massive gothic settlements in haunted valleys and on forsaken hillsides, far enough away from the societies of smaller people that they remain relatively undisturbed, but close enough that they can raid the graveyards of nearby villages with impunity. Elder tomb giants enjoy the thrill of subduing, slaying, and reanimating their fellow giants. A tomb giant views its mortal life as only one part of its existence. After death, most tomb giants are reanimated as undead, who then continue to practice their necromantic arts.\nSpread across the world, giants are as diverse as the isolated places they inhabit. A giant makes a big impression on the local environment, especially on smaller and weaker creatures.",
      "armorClass": 32,
      "hitPoints": 255,
      "speedFeet": 30,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "lifesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 19,
        "will": 25
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 6,
        "int": 3,
        "wis": 7,
        "cha": 4
      },
      "skills": {
        "athletics": 25,
        "medicine": 25,
        "occultism": 23,
        "religion": 25,
        "stealth": 21
      },
      "languages": [
        "common",
        "jotun",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "g6Euvv1yMRdzztNy",
          "name": "Scythe",
          "bonus": 27,
          "damage": "2d10+13 slashing",
          "traits": [
            "deadly-d10",
            "magical",
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "sX9QoWtPnvTxNCRn",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d6+13 slashing",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "tRlQRgVMAJNHGCwY",
          "name": "Rock",
          "bonus": 24,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "0bvk5XC5pgg7aduO",
          "name": "Lifesense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LPkdxFZZqxuSkb35",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "4zBHeI8ktOSWiaN1",
          "name": "Dooming Touch",
          "kind": "passive",
          "description": "The tomb giant's claws carry the accursed power of their foul gods. A creature hit by the tomb giant's claw Strike becomes Doomed 1."
        },
        {
          "id": "wchhA2K9Ow4ppaJD",
          "name": "Font of Death",
          "kind": "action",
          "description": "The tomb giant turns the spiritual tide on a creature that has just died, temporarily transforming it into a volatile vessel powered by the Void. The tomb giant touches a creature that died within the past 24 hours, infusing its flesh and bone with void energy. Once during the next hour, the tomb giant can spend a single action (from any distance) to release this void from the corpse in an explosion that deals 10d8[void|options:area-damage] damage in a @Template[type:burst|distance:15] (check (fortitude, dc:32, basic) save); if not released before the end of the hour, the energy dissipates harmlessly. The tomb giant can't use Font of Death while a previous corpse remains infused."
        }
      ],
      "spellcasting": [
        {
          "id": "nv3QelLpz45iQ6qY",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 32,
          "spells": [
            {
              "id": "0XKH2RB0RTWe3H26",
              "name": "Bind Undead",
              "rank": 5
            },
            {
              "id": "maqyhq7WU8Ju4Blo",
              "name": "Harm",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:arboreal-archive",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "zs7dPbTetShR8T3D",
      "slug": "arboreal-archive",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c628447a1bab6a36f26b91d60a2e56af51f68cc1b942de13741d50ba74d7ee02",
    "translatableHash": "sha256:8eb6297833a361ad1559ec859141071032bcc66119eae7fb85a09282e9aafd6f",
    "data": {
      "schemaVersion": 1,
      "name": "Arboreal Archive",
      "level": 12,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "plant",
        "wood"
      ],
      "description": "Arboreal archives are solitary beings typically found in the remote wilderness. These ancient monoliths hold the memories of their vast territories, keeping mental records of the passing seasons of the world around them. Their knowledge of humanoid affairs varies, as they find quickly shifting political situations difficult to comprehend, but through fungal networks, reports from arboreal wardens, and other woodland chatter, arboreal archives learn of each storm, drought, or logging threat encountered throughout their long years. They primarily observe and record rather than interfere, but they willingly offer wisdom to those who respectfully seek them out. Arboreal regents call upon archives for advice in times of strife, conferring on the best course of action to protect their realms.\nIt is rare for there to be more than one arboreal archive in a given region. When an archive senses they're nearing the end of their lengthy lifespan, a grove of regents gathers to nominate the wisest among them to become the next archive. After four seasons' deliberation, all arboreals in the area congregate to witness the succession ritual, during which the elder arboreal archive transfers their collected wisdom to the elected replacement before retiring.\nArboreals are tree-like ancient guardians of forests, nurturing new growth and maintaining a balanced ecosystem as if the vast wilderness were their garden. Arboreals are thoughtful and deliberate - until something threatens their realms and invites their wrath.",
      "armorClass": 33,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "low-light-vision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 17,
        "will": 27
      },
      "abilities": {
        "str": 7,
        "dex": -1,
        "con": 5,
        "int": 4,
        "wis": 7,
        "cha": 4
      },
      "skills": {
        "athletics": 23,
        "diplomacy": 22,
        "nature": 25,
        "stealth": 19
      },
      "languages": [
        "arboreal",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 10",
          "piercing 10"
        ],
        "weaknesses": [
          "axe-vulnerability 10",
          "fire 15"
        ]
      },
      "attacks": [
        {
          "id": "QyBhco1VMbstqt4y",
          "name": "Branch",
          "bonus": 25,
          "damage": "3d10+10 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "P6lMDdeaBGEoO8lA",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "BI9PPwdfEfP8sJv5",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "CChXCrOyQxz6h0X9",
          "name": "Abeyance Rift",
          "kind": "passive",
          "description": "If an arboreal archive dies unexpectedly before passing on their knowledge in a succession ritual, the amassed lore within their roots and boughs explodes out in a shock wave that deals 8d10[mental|options:area-damage,inflicts:prone] damage to creatures within @Template[emanation|distance:30]{30 feet} (check (will, dc:32, basic, options:area-effect) save) before dissipating; those who fail also fall Prone."
        },
        {
          "id": "g4OWJGRw7uHmBmrk",
          "name": "Axe Vulnerability",
          "kind": "passive",
          "description": "An arboreal archive takes 10 additional damage from axes."
        },
        {
          "id": "ndQeCjr03ZZsI5o1",
          "name": "Memory Maelstrom",
          "kind": "action",
          "description": "The arboreal archive tries to overwhelm foes with a surge of information it has absorbed over its long life. This surge deals 5d6[mental|options:area-damage] damage to each enemy within @Template[emanation|distance:40]{40 feet}, who must attempt a check (will, dc:32, options:area-effect,damaging-effect,inflicts:stunned,inflicts:confused) save.\nCritical Success The creature maintains its composure, takes no damage, and is temporarily immune to Memory Maelstrom for 1 minute.\nSuccess The creature is Stunned 1 and takes half damage.\nFailure The creature takes full damage and is Stunned 3.\nCritical Failure The creature takes double damage, is Confused for [[/gmr 2d4 #Confusion Duration]]{2d4 rounds}, and is stunned 3."
        },
        {
          "id": "6POqdcS7GEiqCyF1",
          "name": "Improved Knockdown",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "EFidHtj7QBgjYsOb",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 32,
          "spells": [
            {
              "id": "oDu6TBJj3ZqEHwTo",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "1VZg8BVuvg7BFe9c",
              "name": "Earthbind (At Will)",
              "rank": 3
            },
            {
              "id": "SUB1OncT9SQ2DofD",
              "name": "Speak with Plants (Constant)",
              "rank": 4
            },
            {
              "id": "OpXEq1RYtDfa75DT",
              "name": "Tangling Creepers",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ayngavhaul",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "0Hng8SRW8VZVmZ67",
      "slug": "ayngavhaul",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:eeb2fb080b9422b895fa6b405f977fdd7b663fe274130127939b06a270a88dc6",
    "translatableHash": "sha256:97a74e1693dd433c7d12a15fd1861044edcc6b0df877fe0a43813dd07943230f",
    "data": {
      "schemaVersion": 1,
      "name": "Ayngavhaul",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "Where a bright mind seeking knowledge becomes corrupted by eloquent lies and twisted truths, an ayngavhaul is sure to lurk. Often donned in the holy vestments of other faiths in a twisted mockery of their principles, these wily, well-read devils delight in using their knowledge to twist religious texts and teachings into the dangerous principles those same texts warn against. While many ayngavhauls develop advanced knowledge of unique specializations, there are many whose depth of knowledge of a single religion rivals that of even the most wizened priests.\nAny information an ayngavhaul has read or learned is added to a massive living tome unique to the ayngavhaul. The information contained sorts itself based on the topic and point its owner is making.\nWhile these devils spend most of their time in the libraries of Hell, they are most often summoned in desperate bids by students seeking lost or forbidden knowledge, and such knowledge comes with a cost. These devils use truths and loose interpretations of texts to lend credence to their heretical viewpoints. When these once-bright intellectuals are corrupted into blasphemous priests, tyrants, and despots spreading the twisted words of an ayngavhaul, that devil gains influence and renown within the scholarly circles of Hell.",
      "armorClass": 34,
      "hitPoints": 240,
      "speedFeet": 15,
      "perception": {
        "modifier": 26,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 20,
        "will": 26
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 5,
        "int": 8,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "arcana": 27,
        "deception": 26,
        "diplomacy": 24,
        "religion": 24
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
          "physical 10 except silver"
        ],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "khS4sF2nZEiplOBG",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d8+8 slashing",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "H69iZ2VZCBui1iYb",
          "name": "Searing Words",
          "bonus": 27,
          "damage": "1d6 fire; 3d10+8 mental",
          "traits": [
            "auditory",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "NVuPFVDfD0Cn6gYx",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "46dLIVM7cpDD53uS",
          "name": "Personal Library",
          "kind": "passive",
          "description": "Any tomes an ayngavhaul is reading or referencing for their current work can be stored in the devil's personal library, a floating collecting of tomes revolving around the devil that can be used offensively or defensively. Retrieving or returning a tome requires an Interact action."
        },
        {
          "id": "jUAtoBpUZQvKebon",
          "name": "Spellblock Tome",
          "kind": "reaction",
          "description": "Trigger The ayngavhaul is targeted by a spell\nEffect The ayngavhaul flings a tome from its personal library at the spell. The devil must attempt a check (flat, dc:5). On a success, the tome fully absorbs the effects of the spell and burns up into a harmless pile of ash. Regardless of the result, the devil can't use this ability again for [[/gmr 1d4 #Recharge Spellblock Tome]]{1d4 rounds}."
        },
        {
          "id": "rNubcNzojHn1anXP",
          "name": "Herald Heresy",
          "kind": "action",
          "description": "The ayngavhaul imparts blasphemous thoughts into the minds of all non-devil creatures within a @Template[type:burst|distance:20] up to 60 feet away. An affected creature takes 2d10[mental|options:area-damage] damage plus 2d10[spirit|options:area-damage] damage and must attempt a check (will, dc:33, options:area-effect,damaging-effect,inflicts:slowed) save. Affected creatures gain a cumulative +1 circumstance bonus (up to a total of +4) to saves against all future attempts to Herald Heresy for 1 minute, as they become inured to the blasphemies.\nCritical Success The creature is unaffected and becomes temporarily immune for 1 hour.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and becomes Slowed 1.\nCritical Failure The creature takes double damage and becomes Slowed 2."
        },
        {
          "id": "Igt88kb16Bk6ajJg",
          "name": "Poison Minds",
          "kind": "passive",
          "description": "Creatures hit by the ayngavhaul's searing words must succeed at a check (will, dc:33, options:inflicts:stupefied) saving throw or become Stupefied 1 for 1 round (or Stupefied 2 on a critical failure). If the target is trained in Religion, they take a –2 circumstance penalty to their save."
        }
      ],
      "spellcasting": [
        {
          "id": "BrAxE5R5RRLv9VPC",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "VoNpRrgQkxtBG9Hb",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "3Strt5jh3OfiXX0A",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "vQ4TRDTCbr8zPfkL",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "2q6kMRhN1zifQ2DY",
              "name": "Phase Bolt",
              "rank": 1
            },
            {
              "id": "01vRCXGO8YRsGvt8",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "5ivEfatoVQV4EB8r",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "FWSnQZlCeAZfDnQ2",
              "name": "Mind Probe",
              "rank": 5
            },
            {
              "id": "yjSCFzjBD0cyCf4Y",
              "name": "Subconscious Suggestion",
              "rank": 5
            },
            {
              "id": "p3LMNtNQtHslJz5w",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "YVi6kmxtc2fYIkgS",
              "name": "Never Mind",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:owb-prophet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "4NXlXj2looUjPJY1",
      "slug": "owb-prophet",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:09bc9eb0abb086dcd76a380569fcc97550d29d27bdee214f823ca361b058edf7",
    "translatableHash": "sha256:22d9699842ffb742a35bf619fd7046e0535478a0dd886ea9127ce0e92204a341",
    "data": {
      "schemaVersion": 1,
      "name": "Owb Prophet",
      "level": 13,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "shadow",
        "unholy"
      ],
      "description": "An owb who comes into contact and is chosen by one of the Forsaken gains a fragment of that demigod's power and forges a permanent connection with it. This act transforms the owb into a larger, more powerful creature and imbues it with the power of divine transference, allowing the owb to gain followers and grant spells to them. These are owb prophets.\nOwb prophets may have some portion of the Forsaken's power, but they use their authority to gain more sway over calignis and other worshippers.\nThese ancient denizens of the Netherworld appear as grayish humanoid torsos covered in translucent funereal veils of shadow. Silent and mysterious, they float about, absent of legs to hold them aloft. Never speaking a word aloud, they instead reach into the minds of nearby creatures to whisper curses, threats, and strange bits of forlorn augury.\nThese haunting creatures are revered by calignis as proxies of the Forsaken—a strange array of ancestor-like demigods whom many calignis worship. Some even believe owbs are the Forsaken manifested, and that they are able to subtly manipulate creatures on the Netherworld without leaving behind any indication.\nA multitude of owbs visit and even remain to advise caligni communities, as varied in personality as the Forsaken. All owbs share a hatred of light and color, except for the flickering glow of the burning cold magic they can hurl as a weapon. Owbs who live among calignis tend to prohibit the use of light and color, using their curse of darkness to quench violators if necessary. The only other similarity across all owbs is their entrenched desire to manipulate their charges through mind-reading and deception, though such manipulation can be either subtle or overt.",
      "armorClass": 34,
      "hitPoints": 225,
      "speedFeet": 5,
      "perception": {
        "modifier": 24,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 23,
        "will": 24
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 8,
        "int": 4,
        "wis": 5,
        "cha": 7
      },
      "skills": {
        "acrobatics": 25,
        "deception": 26,
        "diplomacy": 24,
        "occultism": 23,
        "religion": 25,
        "stealth": 25
      },
      "languages": [
        "aklo",
        "caligni",
        "common",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qEjTHqZLDRx2o0dJ",
          "name": "Claw",
          "bonus": 27,
          "damage": "2d8+11 slashing; 2d8 cold",
          "traits": [
            "agile",
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "WUrrk4eny3GFngud",
          "name": "Burning Cold",
          "bonus": 25,
          "damage": "4d8 cold; 2d8 cold",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "LhA2xtluaWsZrc1T",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "HV2jfujsvqwbfTpO",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "EtHDwrRNzkfZ50vn",
          "name": "Forsaken Patron",
          "kind": "passive",
          "description": "Each owb prophet serves as a conduit to one of the shadowy demigods known as the Forsaken. Forsaken patrons are detailed below, and each grants the owb prophet additional abilities.\nEach owb prophet gains its power through a connection with a Forsaken patron. The patron grants the owb additional spells and has its own religious symbol and favored weapons. Each entry notes any ability or occult innate spell the Forsaken grants to its prophets, plus its favored weapon.\nEnkaar, the Malformed Prisoner This mutilated horror is the Forsaken patron of fetters, lethargy, and physical corruption.\n• Spell Phantom Pain (4th, at will);\n• Favored Weapon spiked chain\nEyes That Watch This strange trio of feline eyes is the Forsaken patron of inferiority, cats, and strangers.\n• Ability Lifesense 120 feet\n• Favored Weapon dagger\nGrasping Iovett A beautiful form of indescribable variety, Iovett is the Forsaken patron of accidents, parasites, and reckless lust.\n• Spell Charm (4th, at will);\n• Favored Weapon shortsword\nHusk This androgynous creature is the Forsaken patron of emptiness, loneliness, and narcissism.\n• Spell Silence (4th, at will);\n• Favored Weapon shortsword\nLady Razor This stern magistrate forbids showing kindness or mercy to family members. Lady Razor is the Forsaken patron of family strife, suspicion, and vengeance.\n• Spell Weapon Storm (4th, at will);\n• Favored Weapon dagger\nReshmit of the Heavy Voice Taking the form of a massive shadow, Reshmit is the Forsaken patron of broken things, forgetting, and unexpected violence.\n• Spell Rewrite Memory (4th, at will);\n• Favored Weapon morningstar\nThalaphyrr Martyr-Minder The Forsaken patron of failed heroics, imprisonment, and squandered time.\n• Spell Slow (4th, at will);\n• Favored Weapon spear"
        },
        {
          "id": "NYACujLILqXuexgZ",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9om3JGlrd1NB7cuF",
          "name": "Burning Cold Fusillade",
          "kind": "action",
          "description": "The owb prophet makes three burning cold Strikes."
        },
        {
          "id": "F1BUx1q2oTY8sFpj",
          "name": "Clutching Cold",
          "kind": "passive",
          "description": "A creature hit by the prophet's burning cold Strike becomes Immobilized in a cluster of binding ice crystals ([[/act escape dc=31]])."
        },
        {
          "id": "Mnk4wTPNqIwrijFP",
          "name": "Curse of Darkness",
          "kind": "action",
          "description": "The owb inflicts a curse on one creature taking persistent cold damage from their burning cold Strike, stealing the victim's vibrancy. The creature must attempt a check (fortitude, dc:32) save.\nOn a failure, the creature gains Light Blindness and its coloration turns to washed out shades of gray, along with all equipment it carries, wields, or wears. These effects have an unlimited duration. Regardless of the result of its save, the creature is temporarily immune for 1 minute.\nIf the owb uses this ability on a caligni, the curse can't be removed short of a Wish ritual or similar powerful magic."
        },
        {
          "id": "It88LMNyaOfw3HMG",
          "name": "Shadow's Swiftness",
          "kind": "passive",
          "description": "An owb prophet can Cast Umbral Journey as a 3-action activity instead of 1 minute. If they do so, they target only themself."
        }
      ],
      "spellcasting": [
        {
          "id": "z4qEtojSEODC5ski",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "pwwd6teuMKdiXWFe",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "VVcnlQGrybaQhFfN",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "RFoMFxSnyUuCfboy",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "Jgtup9yJSEh2qrNd",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "ykEqwrLeamxD1ZQp",
              "name": "Mind Reading (At Will)",
              "rank": 3
            },
            {
              "id": "GhBe8pLkwKzgHOHc",
              "name": "Invisibility",
              "rank": 4
            },
            {
              "id": "mJpqT8aBxvEYyKUZ",
              "name": "Umbral Journey (See Shadow's Swiftness)",
              "rank": 5
            },
            {
              "id": "uOGwMNAvVXThM92Y",
              "name": "Darkness (At Will)",
              "rank": 6
            },
            {
              "id": "8hDPykGa0YpeVqrN",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "KMq72khzfvaSVvWF",
              "name": "Interplanar Teleport (To or From the Netherworld Only)",
              "rank": 7
            },
            {
              "id": "hR3HDUN1MbgpcHzz",
              "name": "Shadow Blast",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:terra-carver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "8pqeRFVTVc66iIVn",
      "slug": "terra-carver",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7d6156121aa355c6f7942e553cd12857e26ffdbafae269931ac085830f255205",
    "translatableHash": "sha256:09be8c45ca3c9d2bc66ed1e4e9e39c064a57d9cc709c5290f0325be7e7e347fa",
    "data": {
      "schemaVersion": 1,
      "name": "Terra Carver",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "Even other earth elementals and creatures of stone fear the formidable terra carver. Their four arms end with sharpened stone tools that can cleave through the toughest rocks—and anything that wanders into their territory. Despite having powerful forms, their bulky upper bodies appear comically large compared to their stout legs. They lumber slowly through their territory and spend most of their time cutting stone deep in the bedrock to create elaborate networks of tunnels.\nThey prefer isolation, and when two terra carvers meet, it typically ends with one hewing the other. Instead of taking their enemy's territory, a terra carver collapses the tunnels, continuing elsewhere with their own designs.\nVoiceless Miners\nTerra carvers are talented miners, and their tunnels are some of the longest lasting on any plane. However, the reason for these tunnels is unknown. Scholars have theorized that their tunnels function as a form of written language for the otherwise voiceless elementals. Unfortunately, attempts to map abandoned tunnels often end where another terra carver collapsed an encroaching tunnel, and mapping active tunnels often results in the cartographer never making it back.",
      "armorClass": 33,
      "hitPoints": 265,
      "speedFeet": 20,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 19,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": -1,
        "con": 6,
        "int": 4,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "athletics": 27,
        "intimidation": 22
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
          "id": "a0CTLPs8n3OTwNDn",
          "name": "Stone Tool",
          "bonus": 26,
          "damage": "3d10+16 piercing",
          "traits": [
            "reach-15",
            "versatile-b",
            "versatile-s"
          ]
        },
        {
          "id": "pYzN1UIbf3N5Nh7i",
          "name": "Rock",
          "bonus": 24,
          "damage": "3d8+12 bludgeoning",
          "traits": [
            "propulsive"
          ]
        }
      ],
      "actions": [
        {
          "id": "apKikGkEGO39Ed3y",
          "name": "Earthbound",
          "kind": "passive",
          "description": "When not touching solid ground, the terra carver is Slowed 1 and can't use reactions."
        },
        {
          "id": "7YaDGla1YTt4zyhX",
          "name": "Crashing Fall",
          "kind": "passive",
          "description": "Due to their size, a terra carver falls a lot harder than most creatures. When a terra carver is knocked Prone or takes falling damage, they take an additional 15[bludgeoning] damage in addition to any other effect."
        },
        {
          "id": "Qu8H1OuUAHCWxm9R",
          "name": "Territorial Retaliation",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet uses a move action or leaves a square during a move action (move actions using only a fly Speed don't trigger this reaction)\nEffect The terra carver attempts an Athletics check to Trip the triggering creature. Regardless of the result, the space of the triggering creature and all spaces on the ground adjacent to that creature become difficult terrain for 1 round."
        },
        {
          "id": "KCIuH1WmenHj4daF",
          "name": "Carve Projectile",
          "kind": "action",
          "description": "The terra carver carves a deadly projectile from nearby materials and makes a rock ranged Strike that gains the deadly d10 trait. On a successful hit, the target also falls Prone."
        },
        {
          "id": "EwECv4uI8kHNBhAL",
          "name": "Hew Stone",
          "kind": "passive",
          "description": "Melee attacks the terra carver makes with their stone tool ignore physical resistance and Hardness."
        },
        {
          "id": "GYovfvbpnSfaL1VZ",
          "name": "Stone Tunnels",
          "kind": "passive",
          "description": "A terra carver can burrow through solid stone. When they do, they leave a tunnel."
        },
        {
          "id": "xWPHElQhkTrM9Z81",
          "name": "Wedge",
          "kind": "action",
          "description": "The terra carver attempts a stone tool Strike while wedging the blow further with another tool. If it hits, the target takes an additional 3d10 damage of the same type as the Strike and is Enfeebled 2 for 1 hour or until the creature is fully healed. This counts as two attacks for the terra carver's multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tide-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "9u9DrehHJk66ix5B",
      "slug": "tide-giant",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:72bd9fbc4835d1d73e073a6feb7a56837dcb186518e23fa6a748d3c505533275",
    "translatableHash": "sha256:7a6f15ece0f18d1ce3cc401e03519943bf0e242cb939306cb656b02152992349",
    "data": {
      "schemaVersion": 1,
      "name": "Tide Giant",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "giant",
        "humanoid",
        "water"
      ],
      "description": "On secluded beaches where the waves lap across pristine, untouched sands, tide giants dwell in solitude at the shore. They aim to live in quiet serenity, appreciating the beauty that surrounds them. Tide giants thrive on lounging on the sand, living slow while taking in the sights, sounds, and smells of the shore, all while enjoying bowls of juice and rum. Many live by the philosophy that their precious and sacred connection to the magic of the sea is deepened by enjoying the water, such as by watching the sun reflect off the waves cresting the shore. Interruptions, trespassers, and other surprises upset tide giants' calm massively, turning their placid attitude into an enraged hurricane.\nSpread across the world, giants are as diverse as the isolated places they inhabit. A giant makes a big impression on the local environment, especially on smaller and weaker creatures.",
      "armorClass": 33,
      "hitPoints": 250,
      "speedFeet": 30,
      "perception": {
        "modifier": 21,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 25,
        "will": 21
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 6,
        "int": 0,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 27,
        "nature": 21,
        "survival": 23
      },
      "languages": [
        "common",
        "jotun"
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
          "id": "oYwuz7GEajeCeCfj",
          "name": "Trident",
          "bonus": 28,
          "damage": "2d8+14 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "1NsXcraJplQ8ILzA",
          "name": "Trident",
          "bonus": 26,
          "damage": "2d8+14 piercing",
          "traits": [
            "magical",
            "thrown-20"
          ]
        },
        {
          "id": "AHqoazSOn7S9waGE",
          "name": "Fist",
          "bonus": 27,
          "damage": "2d4+14 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "7rK5cDb3Rc9NrpQf",
          "name": "Cloak of High Tide",
          "kind": "passive",
          "description": "10 feet.\nElemental water magic ebbs and flows into a tide giant. At the start of each of the giant's turns in combat, their cloak of high tide automatically activates if it's inactive or ends if it's already active. Any creature other than a tide giant that enters or starts its turn in the aura while it's active regains 5[healing,vitality|shortLabel] HP; this is a healing vitality effect, and a creature can benefit from it only once per round. When active, the cloak appears as a magical, flowing cloak of seafoam that billows from the tidal giant's shoulders and the back of their limbs. The cloak is inactive when the tide giant isn't in combat."
        },
        {
          "id": "2f0ewcliBVqHIBBZ",
          "name": "Blood Tide",
          "kind": "action",
          "description": "The tide giant Swims, or Swims twice if their cloak of high tide is active. Holding out their trident, they slash those they pass, dealing 2d8[piercing,2d6[bleed]] damage (check (reflex, dc:24, basic) save) to each enemy the giant moves within 10 feet of during their movement. Each creature can be affected only once during a single use of Blood Tide."
        },
        {
          "id": "6GYPjwrrx9YCtARE",
          "name": "Tine and Tide",
          "kind": "action",
          "description": "A wave blasts from the giant's trident in a @Template[type:cone|distance:15] or a @Template[type:burst|distance:5] within 100 feet. If the giant's cloak of high tide is active, this is a @Template[type:cone|distance:30] or a @Template[type:burst|distance:10]. Each creature in the area takes 9d8[bludgeoning|options:area-damage] damage with a check (reflex, dc:33, basic, options:area-effect) save."
        }
      ],
      "spellcasting": [
        {
          "id": "khBTGpwrXCQtCYto",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "WYj2OtYeJPWbGMgk",
              "name": "Control Water",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "aX8XLPYr0wNlDX4h",
      "slug": "despair-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cfa32a616f9ba13178b7b14955257fbfae7e9febfe8f4562fe4ce3e5132f58be",
    "translatableHash": "sha256:d9d6c0e22093877769d62ca3a3a16e41f5c6657dbf3dce85985811dafde678dd",
    "data": {
      "schemaVersion": 1,
      "name": "Despair Dragon (Adult)",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Fear is one of the most powerful emotions, and despair dragons are masters of channeling those feelings of terror and hopelessness for their own benefit. As with other occult dragons, despair dragons are driven by an innate compulsion, in their case, the desire to strike terror in others. Despair dragons tend to settle near settlements, so they have a source of fear to draw from. The most common items in despair dragon hoards are scrolls, tomes, and relics that serve as research material. Through these, despair dragons learn of local folklore, urban legends, and more to better haunt their targets.",
      "armorClass": 33,
      "hitPoints": 220,
      "speedFeet": 50,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 23,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 3,
        "int": 4,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 27,
        "deception": 26,
        "diplomacy": 26,
        "intimidation": 28,
        "occultism": 23,
        "society": 23,
        "stealth": 25
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "fear-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "mq904JVyNxtmFV4X",
          "name": "Jaws",
          "bonus": 25,
          "damage": "3d10+16 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "SYPLTHqAQmYgxKer",
          "name": "Claws",
          "bonus": 25,
          "damage": "3d8+16 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "17WZ0S8ST7vMcthy",
          "name": "Tail",
          "bonus": 23,
          "damage": "3d6+14 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "LMer7c5dd0MG76nJ",
          "name": "Telepathy 90 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LQtS71i0MUK191tk",
          "name": "Fearsense",
          "kind": "passive",
          "description": "The dragon senses all creatures with the frightened condition at the listed range."
        },
        {
          "id": "0urWxnGpb1Pz0gP8",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ogo4m8E85pSwAqbt",
          "name": "Consume Fear",
          "kind": "reaction",
          "description": "Trigger A creature within 60 feet loses the frightened condition\nEffect The dragon feasts upon the fear that leaves the triggering creature's body, gaining 5d8 temporary Hit Points that last for 1 minute."
        },
        {
          "id": "gEfh2JBGmxpYDpno",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:33, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "jguPXubA9RRMJmGr",
          "name": "Unbidden Thoughts",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a weapon or unarmed attack\nEffect The attacker's mind fills with visions of their worst fears that overwhelm their senses, and they must choose one of the following results: either the triggering attack becomes a normal success, or the critical hit is unaffected but the triggering creature becomes Frightened 2."
        },
        {
          "id": "tFsdlv6jCbltJ3u3",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "JzeDzMLmHSZ7TFVn",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Shrieking Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "XaV9EbmhjP3b8nYt",
          "name": "Shrieking Breath",
          "kind": "action",
          "description": "The dragon lets out a cacophonous sound made of every scream the dragon has drawn from a terrified enemy, dealing 12d6[sonic|options:area-damage] damage in a @Template[type:cone|distance:40] (check (will, dc:33, basic, options:area-effect) save). Creatures who fail their Will save must spend the first action of their next turn doing nothing but screaming. The dragon can't use Shrieking Breath again for [[/gmr 1d4 #Recharge Shrieking Breath]]{1d4 rounds}."
        },
        {
          "id": "IgQebS6T9lTVTa9g",
          "name": "Tongue Decoy",
          "kind": "passive",
          "description": "The despair dragon inflates several bladders at the end of its tongue to create the basic form of a creature. This process takes 1 minute to complete, during which the dragon is Off-Guard. If the dragon stops or is interrupted in this process, the bladders deflate, and the dragon must start over. Once the process is complete, the dragon can maintain the inflated bladders indefinitely, and can Dismiss to deflate the bladders and retract its tongue instantly.\nThe inflated tongue takes the basic form of an animal or humanoid and can be inflated to be either Small or Medium. The form resembles the general silhouette of a creature, though closer inspection and success at a check (perception, dc:30) check can determine the true nature of the tongue. While inflated, the dragon can send its voice through the decoy, though keeping its tongue inflated makes it difficult to speak, causing the dragon to take a –4 circumstance penalty to any checks related to speaking, such as Deception checks to Lie.\nThe dragon's tongue can extend up to 90 feet from the dragon's body and it can fully extend its tongue as part of the process to inflate the bladders. The dragon can move the inflated part of its tongue up to 15 feet at a time with an action, which has the concentrate, manipulate, and move traits. While extended, the inflated end of the tongue occupies space as a creature of the appropriate size, but the rest of the tongue doesn't impede or block movement in any way. The dragon's scent functions through cilia at the end of the tongue, but otherwise the dragon has no means of knowing what's near its tongue.\nAttacking the tongue is the same as attacking the dragon, except that the tongue is always Off-Guard. If the tongue takes any damage, it immediately deflates and remains out. The dragon remains off-guard as long as its tongue is out, but the dragon can retract its tongue with two consecutive Interact actions. If the tongue takes damage, the dragon can't use its tongue decoy again for 1 day."
        }
      ],
      "spellcasting": [
        {
          "id": "2WgNRvMvvtQdUMc5",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "BREqjedSaVUlCdCL",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "W27gXnK1HHLVBUYt",
              "name": "Fear (At Will)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:carnivorous-blob",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "d8ePlvZTcfKCa6Fm",
      "slug": "carnivorous-blob",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1b44ba37d512200c5db88eaac7f3dae09b7ca178fdc49f213f21c6be415cef1a",
    "translatableHash": "sha256:b3623a0f27a291bbfa4357849b9d2855fafb70a8e1ac5c88a6a1eeea0993f112",
    "data": {
      "schemaVersion": 1,
      "name": "Carnivorous Blob",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "mindless",
        "ooze"
      ],
      "description": "Carnivorous blobs are the ravenous spawn of shattered worlds far beyond the stars, born across the galaxy in inert form until they fall like meteorites onto unsuspecting worlds. These massive beings can lie dormant for years in desolate caverns or barren wastelands. When a carnivorous blob perceives living creatures nearby, it lurches to gelatinous life, seeking out and consuming every creature it can catch until it is destroyed or until it has been unable to locate food for 24 hours, at which point it returns to hibernation. Often, keeping food away from a carnivorous blob is the safest way to defeat it. The blob's ability to split into smaller oozes that might stay hidden after a fight means it can be hard to fully eradicate these mindless predators.",
      "armorClass": 20,
      "hitPoints": 300,
      "speedFeet": 20,
      "perception": {
        "modifier": 23,
        "senses": [
          "motion-sense-240"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 14,
        "will": 19
      },
      "abilities": {
        "str": 8,
        "dex": -3,
        "con": 6,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 27
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "critical-hits",
          "piercing",
          "precision",
          "slashing",
          "sonic",
          "unconscious",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "N9O6ClFh2arDGR4l",
          "name": "Pseudopod",
          "bonus": 25,
          "damage": "2d12+12 bludgeoning; 2d6 acid",
          "traits": [
            "reach-30",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "UTaJ0rJXzssLeINs",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A carnivorous blob can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "ByGE43xowJglhHxP",
          "name": "Retaliating Strike",
          "kind": "reaction",
          "description": "Trigger The carnivorous blob takes damage from any source\nEffect The blob makes a pseudopod Strike against an adjacent target. If an adjacent creature dealt the triggering damage, that creature is the target of this Retaliating Strike."
        },
        {
          "id": "kryZwH2P5QUcvtyI",
          "name": "Split",
          "kind": "passive",
          "description": "When a carniverous blob that has 10 or more HP is hit by an attack that would deal piercing or slashing damage, it splits into two identical oozes, each with half the original's HP. One ooze is in the same space as the original, and the other is in an adjacent, unoccupied space. If no adjacent space is unoccupied, it automatically pushes creatures and objects out of the way to fill a space (the GM decides if an object or creature is too big or heavy to push)."
        },
        {
          "id": "xNfSi1bsS4hwfcXU",
          "name": "Carnivorous Blob Acid",
          "kind": "passive",
          "description": "A carnivorous blob's acid damages only flesh-not bone, stone, wood, or other materials- but is nonetheless devastating. Whenever a creature takes damage from this acid, it must succeed at a check (fortitude, dc:33, options:inflicts:drained) save or become Drained 1 (Drained 2 on a critical failure). On each subsequent failure, the drained condition value increases by 1 (or by 2 on a critical failure), to a maximum of drained 4."
        },
        {
          "id": "hPXSQxaDWNJRZg36",
          "name": "Constrict",
          "kind": "action",
          "description": "2d12[bludgeoning,2d6[acid]]{2d12 bludgeoning plus 2d6 acid}, check (fortitude, dc:33, basic)"
        },
        {
          "id": "i8KkA2JGZTsQSxta",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:33, options:damaging-effect,inflicts:grabbed,inflicts:slowed), 4d10[acid] damage, [[/act escape dc=33]], Rupture 20"
        },
        {
          "id": "3lzTOsFXXMpAEBPJ",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:urglid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ehDqHMxSAAqGONSc",
      "slug": "urglid",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5ad0fa5abaaa81b95d2851fea890c17b6606d9d8a065cc467b1bf9b0ca59994c",
    "translatableHash": "sha256:c057098a279024e611877fb58fa0148bc95b376ff7fb7a224de7f2ad15130dfd",
    "data": {
      "schemaVersion": 1,
      "name": "Urglid",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "The hulking monstrosities known as urglids form from the souls of murderous undertakers, sadists who buried their victims alive, and intentionally neglectful grave keepers who gave up their watch over the dead. They seek to perpetuate their mortal sins as demons and use their fiendish powers to subject mortals to the terrors of vivisepulture. Other urglids find grave sites repulsive and will often destroy headstones and other grave markers. Without such markers, these graves are often lost and forgotten, a detail that pleases an urglid. Standing over 12 feet tall and weighing over 3,000 pounds, the demon has a head that seems sunken into their torso, and a gaping, toothy mouth that opens at the top of their chest.",
      "armorClass": 31,
      "hitPoints": 290,
      "speedFeet": 30,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 20,
        "will": 20
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 8,
        "int": 4,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 27,
        "crafting": 24,
        "deception": 22,
        "intimidation": 27,
        "religion": 24,
        "society": 22,
        "stealth": 27
      },
      "languages": [
        "chthonian",
        "common",
        "draconic",
        "empyrean",
        "necril"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10",
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "ydykhCatB0hphtVK",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d10+16 slashing",
          "traits": [
            "agile",
            "deadly-2d10",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "f9txeM87LU3BpOyq",
          "name": "Leg",
          "bonus": 25,
          "damage": "3d12+21 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-15",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "d2MUxTvu28FOtSWa",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "bjFehLxI7NkYcA0f",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5Juk1XbFenchTkEV",
          "name": "Consecration Vulnerability",
          "kind": "passive",
          "description": "Dedicated to the desecration of graves, an urglid takes (3d6+6)[mental] damage each round they're within the area of an effect with the consecration trait. In addition, the demon's weakness to holy increases to 30 for 1 round the first time they take damage from Holy Water each turn.\nEffect: Consecration Vulnerability"
        },
        {
          "id": "FtCRLG4tGhwO4MCV",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ybRRLWDLtsP4WDa2",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "debIobAdwTNhKkux",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The urglid can Burrow through any earthen matter, including rock. When they do so, the urglid moves at their full burrow Speed, leaving no tunnels or signs of its passing unless they choose to do so."
        },
        {
          "id": "6TFb64fByugUXj9s",
          "name": "Gravechoke",
          "kind": "action",
          "description": "The urglid emits a putrid pulse that targets all living creatures within a @Template[emanation|distance:30]. Creatures in this area that fail a check (fortitude, dc:30) save become Sickened 1 (Sickened 2 on a critical failure)."
        },
        {
          "id": "WDFdvCXmXpXv57rO",
          "name": "Ravenous Earthunholy",
          "kind": "action",
          "description": "With a single, devious thought, the urglid causes a mound of grave soil to well up at a creature's feet. That creature must succeed at a check (reflex, dc:30) save or become Restrained ([[/act escape dc=30]]). The restrained creature then begins sinking below the ground into a spontaneously formed grave. A creature restrained by this ability for 3 rounds is buried 6 feet deep in the ground and begins suffocating within 1 minute. A buried creature must be dug up to be freed (see Burial on page 96 of GM Core). A creature that is slain by Ravenous Earth rises as a Ghoul the next midnight."
        }
      ],
      "spellcasting": [
        {
          "id": "D3hVCC34jyaRE49l",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "eJvnm2F0rgg9b9ph",
              "name": "Earthbind (At Will)",
              "rank": 3
            },
            {
              "id": "9whNKbBSkdTgebc5",
              "name": "Magic Passage (At Will)",
              "rank": 5
            },
            {
              "id": "TwjPOrLBdLGOMKIc",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "cvWs4iv6YT2XjiNA",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "FsJ0oDTShRaEyUG1",
              "name": "Earthquake",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vanyver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "eLoVtQhKwPBUDSRr",
      "slug": "vanyver",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:83f1b7a2a5c78f5f4b14b3f1182ca8ff29b2401bda18ccb67bd461846311541f",
    "translatableHash": "sha256:5423bb2253a7c94a0952736816bf7b12222a32c221f51fa91300369e9e49ee80",
    "data": {
      "schemaVersion": 1,
      "name": "Vanyver",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "darvakka",
        "shadow",
        "undead",
        "unholy"
      ],
      "description": "Vanyvers are large, humanoid bats shaped from void and shadowstuff, their red eyes glowing like tiny stars in an otherwise lightless night. Though powerful, they're the least of the darvakkas, and the most likely to submit to a master, either another of their kind or a mortal with a reputation for being especially murderous and destructive. Vanyvers agree to follow their masters as a temporary means of maximizing the death and destruction they can enact but will quickly turn on any master they feel falters in this goal.\nDarvakkas, also called nightshades, are a ravenous evil made up of equal parts darkness and malice. Originally creatures of the Outer Planes who travel to the convergence of the Shadow Plane and the Void—where the power of nothingness obliterates them—these undead abominations are the physical embodiment of entropy. They burn with an intense hatred for all life, working to bring a final, dark night to the Material Plane where nothing but ash and ice remain.\nAs creatures twisted by darkness and shadow, darvakkas have a great aversion to sunlight and all sources of vitality energy. On the Material Plane, they spend the hours of daylight hidden below ground, amid ruins, or submerged deep in the ocean's darkest chasms beyond the reach of the sun's rays, emerging when darkness shelters them overhead.\nDarvakkas have an aura of entropy that attracts undead thralls to serve as warriors and heralds. They rarely seek alliances with each other or other creatures, existing in solitude as the heads of individual armies of the dead.",
      "armorClass": 34,
      "hitPoints": 275,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": [
          "greater-darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 23,
        "will": 22
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 4,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "acrobatics": 23,
        "arcana": 23,
        "athletics": 27,
        "religion": 24,
        "stealth": 25
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
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
          "cold 10"
        ],
        "weaknesses": [
          "holy 10",
          "silver 10"
        ]
      },
      "attacks": [
        {
          "id": "2xqc5getycsdpc49",
          "name": "Talon",
          "bonus": 27,
          "damage": "3d10+11 bludgeoning; 1d10 cold",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "a380z0ervv71womf",
          "name": "Wing",
          "bonus": 27,
          "damage": "3d6+11 bludgeoning; 1d10 cold",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "sWtjwSeVA2Yi9URn",
          "name": "Jaws",
          "bonus": 27,
          "damage": "3d10+11 piercing; 1d10 cold",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qmkVNjGJoAddHkl7",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ifsi8iYNheUHJYSo",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QRR9beKx0noS0RfN",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "vc4ulmssbysj8wam",
          "name": "Catching Bite",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the vanyver's jaws makes a melee Strike against the vanyver with a weapon\nEffect The vanyver chooses to be hit. If the attack would've missed, it hits. The vanyver catches the weapon in their jaws and uses Drain Magic on it without fulfilling Drain Magic's requirements."
        },
        {
          "id": "3spjg2szu482ix18",
          "name": "Drain Magic",
          "kind": "action",
          "description": "Requirements The vanyver's last action was a successful jaws Strike against a creature, object, or spell effect\nEffect The vanyver casts an innate Dispel Magic on the same target; if the target was a creature, the vanyver can target a spell affecting the creature instead. If a spell effect or item is successfully counteracted, the vanyver gains temporary Hit Points equal to double the counteract rank of the effect that was counteracted."
        },
        {
          "id": "htqhazfmsy64d5iz",
          "name": "Entropy's Shadow",
          "kind": "passive",
          "description": "40 feet. Vanyvers leak entropy and corruption from their very being. A living creature entering or starting its turn in the aura takes 3d6[void] damage with a check (fortitude, dc:30, basic). If it fails, it's also Enfeebled 1 for 1 minute and pulled 10 feet toward the vanyver."
        },
        {
          "id": "13h23z1r0zoaru7r",
          "name": "Snatch",
          "kind": "passive",
          "description": "The vanyver can Fly at half Speed while they have a creature Grabbed or Restrained in either or both of their talons, carrying that creature along with them."
        },
        {
          "id": "n2cq3t3kbwnbsjkm",
          "name": "Sunlight Powerlessness",
          "kind": "passive",
          "description": "A vanyver caught in sunlight is Stunned 2 and Clumsy 2."
        },
        {
          "id": "41Dv5UzszJFoJotn",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dc6VyUkQp6pOJtSn",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d10+5)[piercing] check (fortitude, dc:33, basic)"
        },
        {
          "id": "qBPI08yRG8BKlEC1",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "cPUJUW23ZXZ9W7Wr",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "1gVQ7V9qkxGlZCKy",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "NSzq3NXjwXzZZIYq",
              "name": "Darkness",
              "rank": 4
            },
            {
              "id": "qhr9ivxeQ9UdOjvA",
              "name": "See the Unseen",
              "rank": 4
            },
            {
              "id": "vamz8Jb2yzFSh4rA",
              "name": "Dispel Magic (At Will)",
              "rank": 6
            },
            {
              "id": "ggDvQbmIXqcLKz4V",
              "name": "Harm",
              "rank": 6
            },
            {
              "id": "qU8ergQ43LOW1kIH",
              "name": "Interplanar Teleport (to the Universe, Void, or Netherworld only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:irlgaunt",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "FuvlS0DHfooobGiN",
      "slug": "irlgaunt",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2014f1b7e69c8e22a23c01d1cfdc0851e1abe095c3e8b6e04bb5ff1502e24745",
    "translatableHash": "sha256:cef1e65691f20bc5bba53563926cbffb2b16430479a6e99fadb2f758013e04db",
    "data": {
      "schemaVersion": 1,
      "name": "Irlgaunt",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "aberration",
        "earth"
      ],
      "description": "Irlgaunts resemble titanic spiders or crabs, but with cephalopod-like tendrils erupting from the tips of their chitin-armored legs. Their jagged gray shells allow them to blend into the rocky walls of the high mountain passes and deep ravines that serve as their hunting grounds. Despite their size, they move with incredible speed, bounding across chasms and skittering up sheer mountain cliffs in moments. Though they're formidable in melee, irlgaunts have an even more powerful ranged attack. These creatures pelt their opponents with forcefully regurgitated gastroliths—melon-sized clusters of rocks enveloped in coagulated digestive enzymes strong enough to break down flesh and bone. Gastroliths are fragile and explode on contact, spraying the area with shards of rock and caustic acid.\nWhile one might easily mistake an irlgaunt for a simple, brutish beast, they have a keen intelligence and employ devious hunting strategies. They set traps for travelers and are fond of using gems and magical items taken from previous victims as bait. They've been known to start rockslides or otherwise block passages to reroute explorers into their clutches. They also use their gastroliths to direct the movements of their prey, forcing victims into dead ends at the edge of chasms or cliffs.\nFor the most part, irlgaunts live solitary lives, likely because finding enough food to sustain more than one tends to be difficult. However, they still maintain a sense of extended, regional community, actively gathering when organizing for war or to discuss other issues that affect their species or shared territories. They have been known to occasionally ally with giants, but these truces tend to be nebulous.",
      "armorClass": 34,
      "hitPoints": 265,
      "speedFeet": 30,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 25,
        "will": 24
      },
      "abilities": {
        "str": 7,
        "dex": 8,
        "con": 5,
        "int": 4,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 26,
        "deception": 23,
        "stealth": 27,
        "survival": 22
      },
      "languages": [
        "aklo",
        "common",
        "jotun",
        "petran"
      ],
      "defenses": {
        "immunities": [
          "acid"
        ],
        "resistances": [],
        "weaknesses": [
          "bludgeoning 10"
        ]
      },
      "attacks": [
        {
          "id": "e4Q7KYO6d12Miaek",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d8+13 piercing; 2d6 acid",
          "traits": []
        },
        {
          "id": "p5ENp9EGCrcMiIPm",
          "name": "Legs",
          "bonus": 26,
          "damage": "3d10+13 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "o1xa1JS76GD0jxDM",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "iev8zZf1pmJl4hx1",
          "name": "Regurgitate Gastrolith",
          "kind": "action",
          "description": "The irlgaunt violently regurgitates a melon-sized clot of brittle stone supernaturally infused with digestive enzymes. The stone and acid explode on impact within a range of 30 feet, dealing 7d6[piercing|options:area-damage] damage and 7d6[acid|options:area-damage] damage to creatures in a @Template[type:burst|distance:20] (check (reflex, dc:33, basic) save). The irlgaunt can't Regurgitate Gastroliths for [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        {
          "id": "UoNHneDDCOsDRksN",
          "name": "Stone Step",
          "kind": "passive",
          "description": "The irlgaunt ignores difficult terrain composed of rocks and stone."
        }
      ],
      "spellcasting": [
        {
          "id": "Ox0yUmHK2vfFGMjC",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 23,
          "saveDc": 31,
          "spells": [
            {
              "id": "U1k65Z4Uelp3PjuW",
              "name": "One with Stone (At Will)",
              "rank": 4
            },
            {
              "id": "EzvItTtYhQyULjXm",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "OuOuyiREjmShMrpc",
              "name": "Speak with Stones",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:assault-alloy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "gCbqUxncPyprgyN5",
      "slug": "assault-alloy",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f9d9aba7b96a3a5b204f730757f7cf34feafc7ca9ce3035635d6289947985d3b",
    "translatableHash": "sha256:86c2de4f2b94d7c7869cb8042f610ca1f4e32c578e16d70c911ac600108f23ab",
    "data": {
      "schemaVersion": 1,
      "name": "Assault Alloy",
      "level": 13,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "metal"
      ],
      "description": "",
      "armorClass": 31,
      "hitPoints": 240,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
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
        "str": 4,
        "dex": 7,
        "con": 5,
        "int": 8,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "arcana": 27,
        "athletics": 23,
        "crafting": 23,
        "stealth": 22,
        "thievery": 24
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
          "electricity 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "x51RIXpWZLYro5D2",
          "name": "Claw",
          "bonus": 27,
          "damage": "3d10+11 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "6r0mscsCkczC8Yul",
          "name": "Metal Needle",
          "bonus": 27,
          "damage": "3d8+11 piercing",
          "traits": [
            "agile",
            "arcane",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "db6kv6fQgdI01JGC",
          "name": "Instinctive Alloy",
          "kind": "reaction",
          "description": "Trigger The assault alloy is hit by an attack with a metal weapon or metal spell or effect\nEffect The physical damage from the triggering weapon, spell, or effect instead restores the assault alloy's Hit Points as they seamlessly incorporate some of the metal used into their body. If already at full Hit Points, the assault alloy gains temporary Hit Points that last for 1 round instead. If a metal weapon triggers this, the weapon's die size decreases by one step to a minimum die size of d4 for 1 minute, and that weapon can't trigger Instinctive Alloy again during this time."
        },
        {
          "id": "PIITtwVrcl0ElC9k",
          "name": "Metal Manipulation",
          "kind": "passive",
          "description": "30 feet. An assault alloy has control over all unattended metal within the emanation and can use any of this metal as the origin point for their metal needle ranged Strikes."
        },
        {
          "id": "B0icoSRf5FQSa64W",
          "name": "Idle Transmutation",
          "kind": "passive",
          "description": "An assault alloy has full alchemical control over the properties of their metal. Each time they make a metal needle Strike or Cast a Spell with the metal trait, they choose whether the metal they use is adamantine, cold iron, dawnsilver, or any other solid precious metal."
        },
        {
          "id": "UJ9XgOqsBhBpJ4RE",
          "name": "Metal Blink",
          "kind": "action",
          "description": "Requirements The assault alloy is adjacent to metal of at least 1 bulk\nEffect An assault alloy can liquefy the metals of their body and travel up to their Speed through spaces with contiguous metal, even if it's not uniformly connected (as in a scrap heap or a pile of treasure). This movement doesn't trigger reactions."
        }
      ],
      "spellcasting": [
        {
          "id": "2vbzR5HOCbkHxxpz",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "m7ishr4R4NsoLV7c",
              "name": "Detect Metal",
              "rank": 1
            },
            {
              "id": "SLKqPM42yhJarIc1",
              "name": "Rust Cloud",
              "rank": 4
            },
            {
              "id": "XkLxcaO4sfhlreyM",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "NLxO68bDz0vUwFB4",
              "name": "Wall of Metal",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "IpceyxBj5kTkmQWx",
      "slug": "phase-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fa5173f3209162dedd36de281e53996948f2bea61c8da276a50100998d65d910",
    "translatableHash": "sha256:be69508035539cb5c6d6d5352ac61da45813516b9373c65a0e0b8b8098be96cf",
    "data": {
      "schemaVersion": 1,
      "name": "Phase Dragon (Adult)",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "No place can contain a phase dragon or even hold their interest for long; their innate arcane connection ties them to teleportation and repositioning magic. Explorers and scholars, phase dragons move about at will, discovering new locales and the arcane secrets of teleportation. They frequently establish multiple lairs in far-flung places they repeatedly visit. Beyond the typical wealth found in lairs, phase dragons tend to keep items of sentimental value from their travels, such as a particularly rare flower from the region or a piece by a local artist.",
      "armorClass": 33,
      "hitPoints": 180,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 25,
        "will": 24
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 3,
        "int": 8,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "acrobatics": 26,
        "arcana": 27,
        "athletics": 24,
        "diplomacy": 25,
        "nature": 23,
        "occultism": 25,
        "religion": 23
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "immobilized",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hwVTHE65N85DrHL2",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d12+12 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "KudDtuUSae43oIRA",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "ukNVJkk1tnyP3Vs7",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "JF2Uc2JjaJccnY8l",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y2kAReDuNOZUARtX",
          "name": "Shoo!",
          "kind": "reaction",
          "description": "Trigger An enemy within 15 feet damages the dragon\nEffect The dragon teleports the creature up to 25 feet away. The destination must be on the ground and in a space with no hazards."
        },
        {
          "id": "XxJKecC13F9ZMVC0",
          "name": "Unerring Location",
          "kind": "passive",
          "description": "The dragon automatically attempts to counteract any teleportation effect that targets them (counteract rank 7th, counteract modifier [[/r 1d20+25 #Counteract]]{+25}). The dragon can choose to be affected normally instead. Other creatures targeted by the same effect remain affected normally."
        },
        {
          "id": "z6zrzAGUnQzvtxt2",
          "name": "Dislocating Breath",
          "kind": "action",
          "description": "The dragon exhales a swirl of energy that pulls creatures apart, dealing 12d6[force|options:area-damage] damage in a @Template[type:cone|distance:40] (check (reflex, dc:33, basic, options:area-effect) save). The dragon can teleport any creature that fails its save, teleporting that creature up to 40 feet (or twice as far on a critical failure) in any direction. The destination must be on the ground and in a space with no hazards. The dragon can't use Dislocating Breath again for [[/gmr 1d4 #Recharge Dislocating Breath]]{1d4 rounds}."
        },
        {
          "id": "O6kyu3EStwpikOKy",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "VlzllOaXXNnvU4jJ",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "Whenever they score a critical hit with a Strike, the dragon chooses to either recharge Dislocating Breath or regain an expended teleportation spell."
        },
        {
          "id": "DR5DVel5zxSC5osK",
          "name": "Phase Jump",
          "kind": "action",
          "description": "Frequency once per round\nEffect The dragon teleports up to 75 feet. If they are airborne, they maintain their momentum, and do not fall at the end of their turn, even if they didn't use an action to Fly."
        },
        {
          "id": "rkJfQhBUvxq3Xw1y",
          "name": "Portal Strike",
          "kind": "action",
          "description": "The dragon momentarily opens a small portal and makes a claw Strike against a creature within 75 feet. The target is Off-Guard to the Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "qH04eSMfzZOzMeXE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "QbcvybUu3KKlRX29",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "2iRhf5JAH4ahbNbQ",
              "name": "Know the Way (Constant)",
              "rank": 1
            },
            {
              "id": "PV8VRLRdLIgjW4cc",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "o2p2js0hQnXgWrbQ",
              "name": "Flicker",
              "rank": 4
            },
            {
              "id": "BD2nNYaIt8DdSnwL",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "KYFpPg8ROHgzuv8f",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "KotFZYRmB3SQKd98",
              "name": "Teleport",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:anguished-flame",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Iy3DchRS4K7yEBDT",
      "slug": "anguished-flame",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1244fc08f5db743e8257c9ccbbc45df3e5f068bad0f7ab31d74e80c2cca033fc",
    "translatableHash": "sha256:9b78a46de6e4063e74a3d1302a0339008ba9de674a9f26cc7f78cf90dd95c212",
    "data": {
      "schemaVersion": 1,
      "name": "Anguished Flame",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "fire",
        "light"
      ],
      "description": "Ancient tales tell that the elemental lord Atreia created his six-winged children to steward mortal prayers into the realms of the divine. These elementals work hand-in-hand with celestial and fendish deifc servants to accept sacrifces and offerings, but they also bless contrite mortals with absolution and purifcation, helping them to change the fate that awaits them after death.",
      "armorClass": 33,
      "hitPoints": 260,
      "speedFeet": 30,
      "perception": {
        "modifier": 28,
        "senses": []
      },
      "saves": {
        "fortitude": 22,
        "reflex": 24,
        "will": 25
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 5,
        "int": 4,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "athletics": 24,
        "crafting": 27,
        "diplomacy": 27,
        "medicine": 27,
        "nature": 23,
        "religion": 23
      },
      "languages": [
        "empyrean",
        "pyric"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "G0Vhs4q89QSuyxAs",
          "name": "Flaming Wing",
          "bonus": 25,
          "damage": "3d10+11 fire",
          "traits": [
            "agile",
            "fire"
          ]
        },
        {
          "id": "zrnhZeyAkFUZcSFe",
          "name": "Shining Ray",
          "bonus": 27,
          "damage": "3d6 spirit; 3d6+6 fire",
          "traits": [
            "fire",
            "light"
          ]
        }
      ],
      "actions": [
        {
          "id": "mv7XrhU1ziFvGiaz",
          "name": "Eternal Luminosity",
          "kind": "passive",
          "description": "An anguished fame naturally sheds brilliant light like a torch. When other creatures target the anguished fame, they ignore the Concealed condition from darkness, fog, mist, and smoke."
        },
        {
          "id": "ksHyIX7ogO8kZt9I",
          "name": "Purifying Flame",
          "kind": "passive",
          "description": "An anguished fame can Treat Wounds without a healer's toolkit, instead healing the wounded with the gentle light of their touch."
        },
        {
          "id": "5uV0FvOozf4uAu0Q",
          "name": "Solar Flare",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it takes 2d6[fire|options:area-damage] damage (check (fortitude, dc:33, basic, options:area-effect,inflicts:dazzled) save). On a failed save, it also becomes Dazzled until the end of its next turn. The anguished fame can activate or deactivate this aura by using a single action with the concentrate trait."
        },
        {
          "id": "4khpMKWQq1dbbREx",
          "name": "Vulnerable to Blasphemy",
          "kind": "passive",
          "description": "If a creature the anguished fame can see and hear spends 1 action with the linguistic trait blaspheming against the gods, the anguished fame becomes Sickened 1 until they Collect a Prayer from that creature."
        },
        {
          "id": "UGRi6jtanncjgKZK",
          "name": "Collect Prayer",
          "kind": "action",
          "description": "The anguished fame compels a creature they can see within 60 feet, who must attempt a check (will, dc:30, options:inflicts:slowed) save.\nCritical Success The creature is unaffected.\nSuccess The creature immediately uses its reaction to pray.\nFailure The creature prays. It is Slowed 1 and can't use reactions for 1 minute.\nCritical Failure As failure, but the creature is Slowed 2."
        },
        {
          "id": "ox7EmblfgWHOwVfj",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "Requirements The anguished fame's solar fare aura is active\nEffect The anguished fame fixes their fery eyes on a creature they can see within 30 feet. The target must immediately attempt a Fortitude save against the anguished fame's solar fare. If the creature was already Dazzled by solar fare before attempting its save, a failed save causes it to become Blinded until the end of its next turn."
        }
      ],
      "spellcasting": [
        {
          "id": "d6pXCVaD48RKSiFH",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 22,
          "saveDc": 30,
          "spells": [
            {
              "id": "N7dANot0BNbu3Q6K",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "JEYYOjBrIbN5riXk",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "wh57OTEOGjH8GO86",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "ZxWVe7BHu6VdOFvU",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "6ld5WlvTJXvDIF1j",
              "name": "Fireball",
              "rank": 7
            },
            {
              "id": "dpDhjcw3f18YqW24",
              "name": "Interplanar Teleport",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:animated-trebuchet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jaKVhw83CPKpW9UJ",
      "slug": "animated-trebuchet",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5fc4eb96b5f3afbfb93208932ed33e06391833e4666627a063f62a4ee3d14cb5",
    "translatableHash": "sha256:5b0b1f83d454ee8ef39f823263536e31b29fdb9af8ce7d96faa1c6de826a4749",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Trebuchet",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Large armies sometimes pay exorbitant fees to animate their siege weapons.\nMany animated objects have useful functions but become dangers when uncontrolled.",
      "armorClass": 36,
      "hitPoints": 200,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 19,
        "will": 17
      },
      "abilities": {
        "str": 9,
        "dex": 2,
        "con": 8,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 24
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "zc0tBM6QCWY3pRQR",
          "name": "Arm",
          "bonus": 27,
          "damage": "3d12+11 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "5JjMeb6t3MgQy8HQ",
          "name": "Rock",
          "bonus": 27,
          "damage": "3d10+11 bludgeoning",
          "traits": [
            "brutal",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "O9KVtNjS6f57XAHS",
          "name": "Construct Armor (Hardness 14)",
          "kind": "passive",
          "description": "Like normal objects, an animated trebuchet has Hardness. This Hardness reduces any damage the trebuchet takes by an amount equal to the Hardness. Once an animated trebuchet is reduced to fewer than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks, removing the Hardness and reducing its Armor Class to 32."
        },
        {
          "id": "M68tcWaPYgJDf7pp",
          "name": "Launch",
          "kind": "action",
          "description": "Requirements The animated trebuchet has a creature Grabbed in its arm.\nEffect The animated trebuchet attempts an check (athletics, against:fortitude) check against the grabbed creature's Fortitude DC.\nOn a success, it fires the creature up to 40 feet in height and up to 120 feet away. The creature takes 4d12[bludgeoning] damage plus the appropriate falling damage. If the flung creature lands on another creature, the creature it lands on takes the same amount of bludgeoning damage (check (reflex, dc:33, basic) save).\nOn a successful Launch, the animated trebuchet must Interact to reposition its arm into the proper position before it can Launch again."
        },
        {
          "id": "iq5hF08qzTQTeTBD",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, arm, check (reflex, dc:33, basic)"
        },
        {
          "id": "2eGZyPN3h4NLfOt9",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:phase-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "KMU6KpI33zcE6pfE",
      "slug": "phase-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:67b95e5f05840973e0df4efa5faffd00f5684cde8b07858fa291fbc475a65a2f",
    "translatableHash": "sha256:ba84985a76bd635ded4a8403794bb0cb875c38352ca8e308fa779fd01e3eb40c",
    "data": {
      "schemaVersion": 1,
      "name": "Phase Dragon (Adult, Spellcaster)",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "No place can contain a phase dragon or even hold their interest for long; their innate arcane connection ties them to teleportation and repositioning magic. Explorers and scholars, phase dragons move about at will, discovering new locales and the arcane secrets of teleportation. They frequently establish multiple lairs in far-flung places they repeatedly visit. Beyond the typical wealth found in lairs, phase dragons tend to keep items of sentimental value from their travels, such as a particularly rare flower from the region or a piece by a local artist.",
      "armorClass": 33,
      "hitPoints": 180,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 25,
        "will": 24
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 3,
        "int": 8,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "acrobatics": 26,
        "arcana": 27,
        "athletics": 24,
        "diplomacy": 25,
        "nature": 23,
        "occultism": 25,
        "religion": 23
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "immobilized",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hwVTHE65N85DrHL2",
          "name": "Jaws",
          "bonus": 26,
          "damage": "3d12+12 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "KudDtuUSae43oIRA",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "ukNVJkk1tnyP3Vs7",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "JF2Uc2JjaJccnY8l",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y2kAReDuNOZUARtX",
          "name": "Shoo!",
          "kind": "reaction",
          "description": "Trigger An enemy within 15 feet damages the dragon\nEffect The dragon teleports the creature up to 25 feet away. The destination must be on the ground and in a space with no hazards."
        },
        {
          "id": "XxJKecC13F9ZMVC0",
          "name": "Unerring Location",
          "kind": "passive",
          "description": "The dragon automatically attempts to counteract any teleportation effect that targets them (counteract rank 7th, counteract modifier [[/r 1d20+25 #Counteract]]{+25}). The dragon can choose to be affected normally instead. Other creatures targeted by the same effect remain affected normally."
        },
        {
          "id": "z6zrzAGUnQzvtxt2",
          "name": "Dislocating Breath",
          "kind": "action",
          "description": "The dragon exhales a swirl of energy that pulls creatures apart, dealing 12d6[force|options:area-damage] damage in a @Template[type:cone|distance:40] (check (reflex, dc:33, basic, options:area-effect) save). The dragon can teleport any creature that fails its save, teleporting that creature up to 40 feet (or twice as far on a critical failure) in any direction. The destination must be on the ground and in a space with no hazards. The dragon can't use Dislocating Breath again for [[/gmr 1d4 #Recharge Dislocating Breath]]{1d4 rounds}."
        },
        {
          "id": "DR5DVel5zxSC5osK",
          "name": "Phase Jump",
          "kind": "action",
          "description": "Frequency once per round\nEffect The dragon teleports up to 75 feet. If they are airborne, they maintain their momentum, and do not fall at the end of their turn, even if they didn't use an action to Fly."
        },
        {
          "id": "rkJfQhBUvxq3Xw1y",
          "name": "Portal Strike",
          "kind": "action",
          "description": "The dragon momentarily opens a small portal and makes a claw Strike against a creature within 75 feet. The target is Off-Guard to the Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "zs8F4fATLIzqtu8O",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "C6JeilJpxIl2mgZr",
              "name": "Ant Haul",
              "rank": 1
            },
            {
              "id": "ydJjbvAodnLdQJ0L",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "kkP9yce8k1YYiL6k",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "oyV2MAJJsSXf6OTc",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "WlHZhF4n4UEb6vx8",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "hvcbzQm2IN8jnOSI",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "4CNBXNmUfeWTawzY",
              "name": "Tailwind",
              "rank": 1
            },
            {
              "id": "DB66dnNV18eKwpfv",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "USVNvE3GWgzC49eG",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "fIei8yiwPgXbbvB8",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "LUjIzizabp1KMEJJ",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "AHxMDGrUoh9bMjXv",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "ZZghjZHgNwd1zYXQ",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "UfMVjUnmhvjBrgIP",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "MYFwOd7oVoxBsmsG",
              "name": "Liminal Doorway",
              "rank": 4
            },
            {
              "id": "DxEqADdH4fMb9EMi",
              "name": "Mirage",
              "rank": 4
            },
            {
              "id": "8uFgLXwwZmt0u94U",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "9Z1bw6pM5pGWuNmP",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "JG6Xu8Ejun3RS4Eh",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "FleVVhva5e6zZn71",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "zu5rpEGwkRrCF9CX",
              "name": "Wall of Force",
              "rank": 6
            }
          ]
        },
        {
          "id": "qH04eSMfzZOzMeXE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "QbcvybUu3KKlRX29",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "2iRhf5JAH4ahbNbQ",
              "name": "Know the Way (Constant)",
              "rank": 1
            },
            {
              "id": "PV8VRLRdLIgjW4cc",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "o2p2js0hQnXgWrbQ",
              "name": "Flicker",
              "rank": 4
            },
            {
              "id": "BD2nNYaIt8DdSnwL",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "KYFpPg8ROHgzuv8f",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "KotFZYRmB3SQKd98",
              "name": "Teleport",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ambush-copse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "mUZShqYE6yFl90P3",
      "slug": "ambush-copse",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e3644938ef509399a78f02eaa4ca376c813697a9c5bd3c1bec562008453cc7b0",
    "translatableHash": "sha256:b24bb9100da5f875d138f26dffb92beed9ebd5b53a248cd7a997d62677e36921",
    "data": {
      "schemaVersion": 1,
      "name": "Ambush Copse",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "elemental",
        "plant",
        "wood"
      ],
      "description": "Sawed and axe-hewn timber grind together as an ambush copse moves, smashing through the forest. Cuts and burns mar the bark of this gigantic, angry mass of whirling, deadly logs.\nThe forest never forgets. It remembers the hatchets, the rasping saws, and the smoke of crackling wood fres. It remembers the carts taking ancient trees away to cut, shape, and burn. Fey meddling or errant elemental magic draw such memories out alongside the rage and sorrow of the forest to form an ambush copse.\nAn ambush copse exacts its ire on villages along the woodcutter's path or waits for intruders to step into its forest domain. While an ambush copse might be mistaken for a wounded arboreal, it can cease movement to appear as an overgrown pile of logs or a partially collapsed hovel. There, it waits for retribution.",
      "armorClass": 33,
      "hitPoints": 300,
      "speedFeet": 30,
      "perception": {
        "modifier": 20,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 22,
        "will": 22
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "athletics": 27,
        "intimidation": 20,
        "stealth": 23
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 10",
          "piercing 10"
        ],
        "weaknesses": [
          "fire 15",
          "axe-vulnerability 10"
        ]
      },
      "attacks": [
        {
          "id": "4MGXBJvkblTSzD9X",
          "name": "Log",
          "bonus": 27,
          "damage": "3d12+14 bludgeoning",
          "traits": [
            "backswing",
            "forceful",
            "reach-20",
            "sweep"
          ]
        },
        {
          "id": "ZtbiiCks3mQ4Vg10",
          "name": "Caber",
          "bonus": 25,
          "damage": "3d12+6 bludgeoning",
          "traits": [
            "thrown-40"
          ]
        }
      ],
      "actions": [
        {
          "id": "2dYkExtLUiw4WxTj",
          "name": "Berserk",
          "kind": "passive",
          "description": "An ambush copse that sees fire or axes has a chance of going berserk. At the start of its turn, if it is aware of an axe or a fre the size of a lit torch or larger, the ambush copse must succeed at a check (flat, dc:5) or go berserk. A berserk ambush copse can't use concentrate actions and wildly attacks the nearest living creature, or the nearest object if no creatures are nearby."
        },
        {
          "id": "TiddtDGDZWocMVuQ",
          "name": "Blinding Branches",
          "kind": "reaction",
          "description": "Trigger A creature within 20 feet of the ambush copse leaves a square during a move action it's using\nRequirements The triggering creature is in forest terrain\nEffect The ambush copse's elemental energy animates nearby tree branches to swat at the creature's face. The triggering creature must succeed at a check (reflex, dc:30, options:inflicts:blinded) save or become Blinded for 1 round."
        },
        {
          "id": "jY4bB5qJ2QSq7ekR",
          "name": "Felling Ambush",
          "kind": "reaction",
          "description": "Trigger A creature moves within 10 feet of the ambush copse\nRequirements The ambush copse is disguised as trees or logs\nEffect The ambush copse makes a log Strike against the triggering creature. If the attack hits, the creature must attempt a check (reflex, dc:30, options:inflicts:prone) save or be knocked Prone."
        },
        {
          "id": "X4J4FMrFJnBreP9n",
          "name": "Feign Copse",
          "kind": "action",
          "description": "Until the next time it acts, the ambush copse appears to be a harmless patch of trees or logs. It has an automatic result of 43 (45 in forests) on Deception checks and DCs to pass as trees or logs."
        },
        {
          "id": "dk8LBysVTpSraOEe",
          "name": "Pounding Smash",
          "kind": "passive",
          "description": "Regardless of whether the Strike hits or misses, the ambush copse's melee Strikes create a 5-foot-square of difficult terrain in the target's space."
        },
        {
          "id": "yKRDi3vhJIPeRI5c",
          "name": "Pulverizing Barrage",
          "kind": "action",
          "description": "The ambush copse makes three log Strikes, each at a –2 penalty, all targeting the same creature. The ambush copse's multiple attack penalty doesn't increase until after it has made all three attacks. The ambush copse gains the Clumsy 2 condition until the beginning of its next turn."
        },
        {
          "id": "UEPtYAmvE8nJXW5W",
          "name": "Sunder Objects",
          "kind": "passive",
          "description": "When an ambush copse damages an item or structure, it deals an additional 15[untyped] damage to that item or structure."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:destiny-tempest",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "NMQwjsdBYJEYvtgu",
      "slug": "destiny-tempest",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c61833fa0fc2c6fbb2ba6936a4185badcd6c8ba3c916550f05f98eb97b1a4c74",
    "translatableHash": "sha256:c99f5c8a7940b705dd48e1e7ab8166c44cb99b66e1789edc0398c44679055f14",
    "data": {
      "schemaVersion": 1,
      "name": "Destiny Tempest",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Before the Jaathoom Empire, the Plane of Air was ruled by destiny tempests from their Reverient Empire of Lost Nights. When the jaathoom armies crushed the Reverient Empire, they trapped the defeated destiny tempests in bronze spheres scattered across the Plane of Air, prisons of time and everlasting nightmare.",
      "armorClass": 34,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 24,
        "will": 26
      },
      "abilities": {
        "str": 4,
        "dex": 8,
        "con": 6,
        "int": 8,
        "wis": 7,
        "cha": 7
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 21,
        "deception": 26,
        "stealth": 27
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
          "force 10",
          "spirit 10"
        ]
      },
      "attacks": [
        {
          "id": "36UNyB8xNL8nBCS1",
          "name": "Slithering Whisper",
          "bonus": 25,
          "damage": "2d8+10 bludgeoning; 1d8 mental",
          "traits": [
            "air",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "HbIL6UsZ9u9F9mN0",
          "name": "Umbral Breath",
          "bonus": 25,
          "damage": "4d10 void",
          "traits": [
            "air",
            "void"
          ]
        }
      ],
      "actions": [
        {
          "id": "nfbmtKjeyQ9r6a8r",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "w11ojLvrMfijR7cb",
          "name": "Center of Destiny",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet benefits from a fortune effect\nEffect Shadows surround and steal away the destiny tempest, who reappears in an open space adjacent to the triggering creature."
        },
        {
          "id": "xCXOYLGLyAQUYCOL",
          "name": "Ebbing Cloud",
          "kind": "passive",
          "description": "15 feet. Destiny tempests surround themselves with thoughts of averted fates, creating a thick metaphysical soup that cloys the mind and clouds ambition. Creatures in the area moving toward the destiny tempest treat the area as difficult terrain."
        },
        {
          "id": "WbQTS5RW9EBLjgso",
          "name": "No Breath",
          "kind": "passive",
          "description": "Destiny tempests do not need to breathe."
        },
        {
          "id": "i30nMpydBcjOLNsW",
          "name": "Unspeakable Insights",
          "kind": "passive",
          "description": "Touching a destiny tempest's mind even briefly grants a powerful and painful awareness of uncharted pasts, presents, and futures, too impossibly vast for mortal minds to conceptualize or contain. Whenever a creature targets the destiny tempest with a magical mental effect, it must attempt a check (will, dc:33) save.\nCritical Success The creature is unaffected and becomes immune to unspeakable insights for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature takes 3d6[mental] damage.\nCritical Failure The creature takes 6d6[mental] damage and becomes Confused for 1 round."
        },
        {
          "id": "9vQ8kxdh4UHbizus",
          "name": "Divergent Potential",
          "kind": "action",
          "description": "The destiny tempest chooses two creatures it can see within 60 feet and rolls two slithering whisper Strikes, one against each creature. After seeing the outcomes of the two Strikes, the destiny tempest chooses one of the two targets to pursue, Flies up to 60 feet to reach the chosen target, and uses the result of the chosen Strike; the other Strike is lost. If the destiny tempest is prevented from reaching its chosen target, the attack is prevented and the chosen Strike is lost."
        },
        {
          "id": "KotM1IkupVfRHwmk",
          "name": "Sound Without Voice",
          "kind": "passive",
          "description": "A creature damaged by the destiny tempest's slithering whisper Strike must succeed at a check (will, dc:33, basic) save or become Frightened 2."
        },
        {
          "id": "LDc080lsPGldoCXS",
          "name": "Swiftness",
          "kind": "passive",
          "description": "A destiny tempest's movement doesn't trigger reactions."
        }
      ],
      "spellcasting": [
        {
          "id": "4u5nfqm7dFCCzSbh",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "8HfjsJ2hFd5dCHPv",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "b7qbCxiiRS8oaDpx",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "oIZNdhwp7k1YWbSD",
              "name": "Darkness",
              "rank": 4
            },
            {
              "id": "INFY8ZFuTqnXNkpB",
              "name": "Subconscious Suggestion",
              "rank": 5
            },
            {
              "id": "RwH5LIrab0JesJ5a",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "7e9NJralXEfEC2yj",
              "name": "Never Mind",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:iceberg-clam",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "o5B1pNYv2hglQa6v",
      "slug": "iceberg-clam",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:17c9d1b2087b1f479bc21bc99718e31b1d7dc95813ec410326bfa9221d40826e",
    "translatableHash": "sha256:960689156508c0e5e9b13464ce3bf243b7d48f20ff81786e67c8ae4db810a3ec",
    "data": {
      "schemaVersion": 1,
      "name": "Iceberg Clam",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "aquatic",
        "elemental",
        "water"
      ],
      "description": "Though technically neither an iceberg nor clam, the devastating elemental known as an iceberg clam has earned its appropriate name from its natural camouflage and feeding tendencies. This spherical ambush predator exhibits full thermal control over the water that surrounds and comprises its mutable form, luring tired swimmers and adrift vessels with the promise of reprieve before enveloping and boiling them alive.\nUnless it has eaten recently enough to still be digesting its meal, a melted iceberg clam is nearly imperceptible in a large body of water. Since it's not expending energy to maintain its frozen exterior, it can wait weeks or even months before feeding again, riding ocean currents until some unlucky creature or vessel next enters its body—and never leaves.",
      "armorClass": 31,
      "hitPoints": 240,
      "speedFeet": 5,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision",
          "wavesense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 20
      },
      "abilities": {
        "str": 6,
        "dex": 5,
        "con": 8,
        "int": -2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 27,
        "nature": 23,
        "stealth": 30,
        "survival": 25
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
          "cold 10",
          "fire 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "cUZwEM1YM1sLVyz4",
          "name": "Freezing Wave",
          "bonus": 27,
          "damage": "1d12 cold; 3d12+10 bludgeoning",
          "traits": [
            "cold",
            "reach-15",
            "water"
          ]
        },
        {
          "id": "Xiqc9wbf2Gew6PSQ",
          "name": "Icicle",
          "bonus": 26,
          "damage": "1d12 cold; 3d12+4 piercing",
          "traits": [
            "cold",
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "N7e0dMB58jwUi8Kf",
          "name": "Watery Body",
          "kind": "passive",
          "description": "The iceberg clam can occupy the same space as other creatures and is considered difficult terrain to other creatures."
        },
        {
          "id": "VY6BsIHa1buoOPxd",
          "name": "Ambush Freeze",
          "kind": "reaction",
          "description": "Requirements The iceberg clam does not have a frozen shell\nTrigger An enemy enters or attempts to leave the clam's space\nEffect The iceberg clam uses Frozen Shell."
        },
        {
          "id": "Slk0UNb8i8Lrp5gg",
          "name": "Boil",
          "kind": "action",
          "description": "Frequency once per round\nEffect All creatures in the iceberg clam's space take 4d10[persistent,fire] damage (check (fortitude, dc:33, basic) save) and if the iceberg clam has a frozen shell, the shell takes 20[fire] damage that bypasses Hardness. A creature can't recover from this persistent fire damage while in the iceberg clam's space."
        },
        {
          "id": "k9C2Y7x0fyhiqrl2",
          "name": "Frozen Shell",
          "kind": "action",
          "description": "The iceberg clam covers itself with a frozen shell. All creatures in the iceberg clam's space can't leave those squares for as long as the frozen shell is in place. The shell has AC 10, Hardness 10, and 60 Hit Points, and it's immune to critical hits and precision damage. If the iceberg clam moves, all creatures trapped within its shell move with the clam. While an iceberg clam has a frozen shell, any attacks originating from outside the iceberg clam's space must target the shell. The iceberg clam can Dismiss its shell. If the iceberg clam does so or the shell is reduced to 0 Hit Points, the iceberg clam can't use Ambush Freeze or Frozen Shell again for [[/gmr 1d4 #Recharge Ambush Freeze or Frozen Shell]]{1d4 rounds}."
        },
        {
          "id": "N881BiYIIgymRJks",
          "name": "Heated Jet",
          "kind": "action",
          "description": "Requirements The iceberg clam does not have a frozen shell\nEffect The iceberg clam surges along a jet of superheated water, moving up to 60 feet in a straight line and dealing 4d10[fire] damage to creatures along its path (check (reflex, dc:33, basic) save)."
        }
      ],
      "spellcasting": [
        {
          "id": "3TAYe8EjK2YLZVF0",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 30,
          "spells": [
            {
              "id": "nHwdk3iTdHu6JRw2",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "7euwQhwoy0xWuXSW",
              "name": "Crashing Wave",
              "rank": 5
            },
            {
              "id": "4VexDy5i51qQAEx4",
              "name": "Wall of Ice",
              "rank": 5
            },
            {
              "id": "FwWVfWQA9mPjP8GP",
              "name": "Ice Storm",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:venator",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "QkjZNv3kb7BErPHR",
      "slug": "venator",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d972ffe12555759e7de4551a298a49bc0efedebd28be207e482a79a6401f0d67",
    "translatableHash": "sha256:78fca2e0020c9373d9ce6915ea40737d0c35a5641d5430261ab1ef69814cbd2d",
    "data": {
      "schemaVersion": 1,
      "name": "Venator",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "Unlike most aeons, venators spend much of their time in the mortal Universe. Axiomites build these fgures of brass and gears to hunt their enemies. Although capable combatants on their own, venators frequently act as trackers for other aeons, leading a group of vigilias to secure a criminal or guiding a bythos to its targets.\nEach venator is forged with its targets already assigned, a scrap of axiomite formula integrated in the gears that whir beneath their armor. The targets are narrowly defned by the formula and are usually a single named target, a family, or a small group that directly participated in an event.\nA venator's targets rarely threaten the balance of reality overtly; instead, they're often privy to certain secrets or new magical theories.\nAs a result, even the venator rarely knows why it has been assigned a given target. Recently forged venators are incredibly thorough in their work, methodically destroying the body of their target and any nearby objects (like notes, books, or even graffti) that might contain secrets.\nSuccessful venators are left without targets and are abandoned to their own devices. They're generally eager to fnd a new purpose, even if it's a temporary one from a mortal summoning. Many eventually extend their original missions, choosing new targets similar to their previous ones or, in some cases, continuing to chase the souls of their original targets.",
      "armorClass": 33,
      "hitPoints": 230,
      "speedFeet": 25,
      "perception": {
        "modifier": 24,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 25,
        "will": 24
      },
      "abilities": {
        "str": 6,
        "dex": 8,
        "con": 4,
        "int": 4,
        "wis": 5,
        "cha": -2
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 23,
        "athletics": 23,
        "stealth": 27,
        "survival": 24
      },
      "languages": [
        "common",
        "diabolic",
        "empyrean",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "fear-effects",
          "emotion"
        ],
        "resistances": [],
        "weaknesses": [
          "electricity 15"
        ]
      },
      "attacks": [
        {
          "id": "t8D2aBsbHT1u23P4",
          "name": "Crossbow",
          "bonus": 27,
          "damage": "2d8+12 piercing; 1d10 electricity",
          "traits": [
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "4lA02OrXN6rXv3yh",
          "name": "Locate Target",
          "kind": "passive",
          "description": "A venator is assigned an individual target or small group of targets when they are created. The venator can sense the direction of their nearest target while on the same plane as it. If there are none, they can sense the plane where most of their targets can be found."
        },
        {
          "id": "48Utg7g1e0YKZA1R",
          "name": "Discharging Bolt",
          "kind": "passive",
          "description": "When the venator damages a creature with their crossbow, the bolt embeds in the target, dealing 2d6[persistent,electricity] damage. The creature can remove the bolt and end the persistent damage with an Interact action but takes 1d6[electricity] damage as part of removing the bolt."
        },
        {
          "id": "7WwNWH2C1Ll2Q3vZ",
          "name": "Mark Target",
          "kind": "action",
          "description": "The venator releases a ball of light at a target within 60 feet, lighting it up with a magical aura that's constantly visible to the venator. The target can avoid becoming marked with a successful check (reflex, dc:30) save. While marked, the target finds it difficult to deal with the venator and their allies. The target takes a –1 status penalty to all attacks against the venator and other aeons, as well as to saving throws against efects from the venator and other aeons. The venator can Sustain this efect to designate up to 5 other creatures as trusted allies, causing the target to take the same penalties against these allies. The venator can Dismiss the mark. Otherwise, it fades away naturally after 1 day.\nEffect: Venator's Mark"
        },
        {
          "id": "6lGBPYTZUWLJZzDA",
          "name": "Overloaded Arc",
          "kind": "action",
          "description": "The venator releases lightning from their body in a @Template[type:line|distance:120], dealing 4d10[electricity|options:area-damage] damage (check (reflex, dc:33, basic) save). The lightning also arcs, damaging any creature embedded with a venator's bolt within 120 feet even if it isn't in the line. The venator is then Slowed 1 for 1 round."
        }
      ],
      "spellcasting": [
        {
          "id": "WeVN78AND7LYWRWO",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "W4JSYtsbqzJMExnT",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "ZY0w7OCT16dFJ6dF",
              "name": "Revealing Light (At Will)",
              "rank": 2
            },
            {
              "id": "sD8wzUySvFdVEDcA",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "xsKe2btiFYbN4dh0",
              "name": "Interplanar Teleport (to plane indicated by locate target only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:viper-vine",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "rEjKVZqLfEC5jdVV",
      "slug": "viper-vine",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a92ef789c6eae9a95f8b4234678e84c23e8ad55e2a14b8478ff40ea6976747e9",
    "translatableHash": "sha256:00cc17044045f6b466474ba8058516a3b079fea3336850b4e70919e9b33164f9",
    "data": {
      "schemaVersion": 1,
      "name": "Viper Vine",
      "level": 13,
      "rarity": "common",
      "size": "large",
      "traits": [
        "plant"
      ],
      "description": "A voracious, flesh-eating carnivore, the viper vine has a single enormous blossom arising from a thick, leafy tangle of snakelike vines. When the plant senses the approach of suitable prey through its sensitive, shallow-buried root system, it rises up like an agitated snake and unfurls its brightly colored bloom, an act that releases a cloud of mind-numbing pollen.\nSince viper vines gain nourishment by consuming creatures rather than through photosynthesis and absorbing nutrients from the soil, they have developed rudimentary locomotion and can drag themselves along the ground with tentacle-like roots. They even have a form of rudimentary sentience, allowing them to both discern differences in prey and make limited tactical decisions, while also avoiding creatures that are particularly large or dangerous looking.\nThe area around viper vine hunting grounds is often strewn with the partially devoured remains of victims. It's not unusual to find the rotting corpses of wild animals, ill-fated adventurers, and even giants in the plant's immediate vicinity, along with a scattering of incidental treasure left behind on the corpses. A viper vine rarely returns to the carcass of a creature it killed earlier, preferring to hunt fresh meat.",
      "armorClass": 33,
      "hitPoints": 270,
      "speedFeet": 20,
      "perception": {
        "modifier": 22,
        "senses": [
          "low-light-vision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 24,
        "will": 22
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 7,
        "int": -4,
        "wis": 5,
        "cha": -3
      },
      "skills": {
        "athletics": 27,
        "stealth": 24
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dMisi67DlFeeZZGG",
          "name": "Jaws",
          "bonus": 27,
          "damage": "3d6+11 piercing; 3d6 poison",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "BI9mKPgv9ilkdvUO",
          "name": "Vine",
          "bonus": 25,
          "damage": "3d10+11 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "82GBip2J0tcUmOQh",
          "name": "Tremorsense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6OlSYo00X1yt0HPu",
          "name": "Cold Vulnerability",
          "kind": "passive",
          "description": "When exposed to a cold effect, the viper vine is overwhelmed by lethargy, becoming Slowed 1 for [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        {
          "id": "mlxDBk3SvOubNTSz",
          "name": "Captivating Pollen",
          "kind": "action",
          "description": "The viper vine releases a @Template[type:emanation|distance:60] of Invisible pollen that stays in the air for 5 rounds unless dispersed by a moderate or stronger wind. Each creature that enters or starts its turn in the area must succeed at a check (will, dc:33) save or be captivated. The viper vine can't use Captivating Pollen for [[/gmr 1d4 #rounds]]{1d4 rounds}.\nCritical Success The creature is unaffected and is temporarily immune to Captivating Pollen for 24 hours.\nSuccess The creature is Sickened 1.\nFailure The creature is Fascinated, and it must spend each of its actions to move closer to the viper vine as expediently as possible while avoiding obvious dangers. If a captivated creature is adjacent to the viper vine, it stays still and doesn't act. It ceases to be fascinated if it's no longer in the pollen aura at the end of its turn.\nCritical Failure As failure, plus the creature is Stupefied 2 for 24 hours."
        },
        {
          "id": "r4hJAd9scHgaZzWU",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d8+8)[bludgeoning] damage, check (fortitude, dc:33, basic)"
        },
        {
          "id": "BSzr4rphHmmWUDrG",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:despair-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "rTpTB8NQbTxI2fPf",
      "slug": "despair-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5465058fabbf5d90d2df12a410967c7cd04d9d9f281f9d79adee1152ca59b583",
    "translatableHash": "sha256:f752be43908f1374b95fb130265c8fa4a56126c673a26823455e73bf43b4838a",
    "data": {
      "schemaVersion": 1,
      "name": "Despair Dragon (Adult, Spellcaster)",
      "level": 13,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Fear is one of the most powerful emotions, and despair dragons are masters of channeling those feelings of terror and hopelessness for their own benefit. As with other occult dragons, despair dragons are driven by an innate compulsion, in their case, the desire to strike terror in others. Despair dragons tend to settle near settlements, so they have a source of fear to draw from. The most common items in despair dragon hoards are scrolls, tomes, and relics that serve as research material. Through these, despair dragons learn of local folklore, urban legends, and more to better haunt their targets.",
      "armorClass": 33,
      "hitPoints": 220,
      "speedFeet": 50,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 23,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 3,
        "int": 4,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 27,
        "deception": 26,
        "diplomacy": 26,
        "intimidation": 28,
        "occultism": 23,
        "society": 23,
        "stealth": 25
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "fear-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "mq904JVyNxtmFV4X",
          "name": "Jaws",
          "bonus": 25,
          "damage": "3d10+16 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "SYPLTHqAQmYgxKer",
          "name": "Claws",
          "bonus": 25,
          "damage": "3d8+16 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "17WZ0S8ST7vMcthy",
          "name": "Tail",
          "bonus": 23,
          "damage": "3d6+14 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "u0z149bXd3Qr3sGR",
          "name": "Telepathy 90 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LQtS71i0MUK191tk",
          "name": "Fearsense",
          "kind": "passive",
          "description": "The dragon senses all creatures with the frightened condition at the listed range."
        },
        {
          "id": "0urWxnGpb1Pz0gP8",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ogo4m8E85pSwAqbt",
          "name": "Consume Fear",
          "kind": "reaction",
          "description": "Trigger A creature within 60 feet loses the frightened condition\nEffect The dragon feasts upon the fear that leaves the triggering creature's body, gaining 5d8 temporary Hit Points that last for 1 minute."
        },
        {
          "id": "gEfh2JBGmxpYDpno",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:33, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "jguPXubA9RRMJmGr",
          "name": "Unbidden Thoughts",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a weapon or unarmed attack\nEffect The attacker's mind fills with visions of their worst fears that overwhelm their senses, and they must choose one of the following results: either the triggering attack becomes a normal success, or the critical hit is unaffected but the triggering creature becomes Frightened 2."
        },
        {
          "id": "XaV9EbmhjP3b8nYt",
          "name": "Shrieking Breath",
          "kind": "action",
          "description": "The dragon lets out a cacophonous sound made of every scream the dragon has drawn from a terrified enemy, dealing 12d6[sonic|options:area-damage] damage in a @Template[type:cone|distance:40] (check (will, dc:33, basic, options:area-effect) save). Creatures who fail their Will save must spend the first action of their next turn doing nothing but screaming. The dragon can't use Shrieking Breath again for [[/gmr 1d4 #Recharge Shrieking Breath]]{1d4 rounds}."
        },
        {
          "id": "IgQebS6T9lTVTa9g",
          "name": "Tongue Decoy",
          "kind": "passive",
          "description": "The despair dragon inflates several bladders at the end of its tongue to create the basic form of a creature. This process takes 1 minute to complete, during which the dragon is Off-Guard. If the dragon stops or is interrupted in this process, the bladders deflate, and the dragon must start over. Once the process is complete, the dragon can maintain the inflated bladders indefinitely, and can Dismiss to deflate the bladders and retract its tongue instantly.\nThe inflated tongue takes the basic form of an animal or humanoid and can be inflated to be either Small or Medium. The form resembles the general silhouette of a creature, though closer inspection and success at a check (perception, dc:30) check can determine the true nature of the tongue. While inflated, the dragon can send its voice through the decoy, though keeping its tongue inflated makes it difficult to speak, causing the dragon to take a –4 circumstance penalty to any checks related to speaking, such as Deception checks to Lie.\nThe dragon's tongue can extend up to 90 feet from the dragon's body and it can fully extend its tongue as part of the process to inflate the bladders. The dragon can move the inflated part of its tongue up to 15 feet at a time with an action, which has the concentrate, manipulate, and move traits. While extended, the inflated end of the tongue occupies space as a creature of the appropriate size, but the rest of the tongue doesn't impede or block movement in any way. The dragon's scent functions through cilia at the end of the tongue, but otherwise the dragon has no means of knowing what's near its tongue.\nAttacking the tongue is the same as attacking the dragon, except that the tongue is always Off-Guard. If the tongue takes any damage, it immediately deflates and remains out. The dragon remains off-guard as long as its tongue is out, but the dragon can retract its tongue with two consecutive Interact actions. If the tongue takes damage, the dragon can't use its tongue decoy again for 1 day."
        }
      ],
      "spellcasting": [
        {
          "id": "LfsJktPWqZDu90OD",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "0JhEHH4NzGfeHjCq",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "R7EfsHhhz56UUyQX",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "4k1aL0ZZZR1BqKrR",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "LT9DGBfiDhfZhHUF",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "QqIWHMWdlEmmVDw0",
              "name": "Ill Omen",
              "rank": 1
            },
            {
              "id": "LDPwE8ngyiyny8ei",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "TaadLhwLjwafQ3Hn",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "5K1mrVl9GPxO9uQ8",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "1HvJZV4Rum19HFLj",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "4Nk4tM4UmY9qjMFt",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "AyXNv8hpdSmrL9Ns",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "zFpZGatoPeLqgZvQ",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "yBpXoXBgjnOZHxV3",
              "name": "Stupefy",
              "rank": 2
            },
            {
              "id": "UldhgAYSDHNN5h60",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "07S2PE07wqKAjOMi",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "Mq749yJKAQgUlp8Y",
              "name": "Detect Scrying",
              "rank": 4
            },
            {
              "id": "jNiAb8NMMWGZhMhw",
              "name": "Nightmare",
              "rank": 4
            },
            {
              "id": "p0y2FMM1TqcXb1hk",
              "name": "Strange Geometry",
              "rank": 5
            },
            {
              "id": "6KBfu5ZZDtF8MjCO",
              "name": "Synaptic Pulse",
              "rank": 5
            },
            {
              "id": "QN5MnDiBr4MQk87T",
              "name": "Wave of Despair",
              "rank": 5
            },
            {
              "id": "yWWFMObeiF19kfKG",
              "name": "Mislead",
              "rank": 6
            },
            {
              "id": "Maf6LXbkBFHo0ibf",
              "name": "Phantasmal Calamity",
              "rank": 6
            }
          ]
        },
        {
          "id": "2WgNRvMvvtQdUMc5",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "BREqjedSaVUlCdCL",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "W27gXnK1HHLVBUYt",
              "name": "Fear (At Will)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:exscinder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "T4qVNgJRyk1NRfQg",
      "slug": "exscinder",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1e99015b7846da2d6e1011066ebee1220f74946bd5def6c24f34bd578c11fcad",
    "translatableHash": "sha256:a1a32fe8f49dcd2c9bcbd74625402550de587beb24f92124c8d67a27ae2efedf",
    "data": {
      "schemaVersion": 1,
      "name": "Exscinder",
      "level": 13,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "archon",
        "celestial",
        "holy"
      ],
      "description": "Mortals require protection from forbidden knowledge and heretical texts. Anywhere across the planes, an exscinder might arrive to claim, confscate, and destroy the dangerous thoughts within. Considering themselves avatars of the virtue of temperance, exscinders repeat the lesson that the cautious tongue refuses to speak wicked words. Though they pass on these words, it's rare for them to take much note of ordinary mortals. The danger is not necessarily the person who learns, but the evil knowledge itself. It's the weed that grows beyond the words on the page and must be torn out by its roots.",
      "armorClass": 33,
      "hitPoints": 240,
      "speedFeet": 30,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 21,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 6,
        "int": 5,
        "wis": 8,
        "cha": 7
      },
      "skills": {
        "arcana": 24,
        "intimidation": 26,
        "occultism": 24,
        "religion": 27,
        "society": 26
      },
      "languages": [
        "aklo",
        "chthonian",
        "diabolic",
        "draconic",
        "empyrean",
        "necril",
        "sakvroth",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "fear-effects"
        ],
        "resistances": [
          "fire 10"
        ],
        "weaknesses": [
          "unholy 10"
        ]
      },
      "attacks": [
        {
          "id": "oTDObTUQGMyORKkA",
          "name": "Binding Chains",
          "bonus": 27,
          "damage": "2d6 fire; 3d8+11 bludgeoning",
          "traits": [
            "disarm",
            "finesse",
            "holy",
            "magical",
            "trip"
          ]
        },
        {
          "id": "2EcjEJCahhfaYMiX",
          "name": "Blazing Sigil",
          "bonus": 25,
          "damage": "5d6 fire; 3d6 spirit",
          "traits": [
            "fire",
            "holy",
            "magical",
            "spirit"
          ]
        }
      ],
      "actions": [
        {
          "id": "utf3V9ckbApc1ehe",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "32r9BgcIWpl6JF1Y",
          "name": "Archon's Protection",
          "kind": "reaction",
          "description": "Trigger An enemy damages the archon's ally and both are within 15 feet of the archon\nEffect The ally gains resistance 15 to all damage against the triggering damage, and the archon can make a Strike against the enemy.\nEffect: Archon's Protection"
        },
        {
          "id": "PKy3gN7Ymc49GOVH",
          "name": "Censorious Lash",
          "kind": "passive",
          "description": "When the exscinder hits a creature with a binding chains Strike, that creature must attempt a check (will, dc:30) save. On a failure, it's controlled by the exscinder for its frst action on its next turn (or controlled for its entire next turn on a critical failure)."
        },
        {
          "id": "2X0MBFrlYN9mhOg4",
          "name": "Change Size",
          "kind": "action",
          "description": "The exscinder changes size to their choice of Huge, Large, Medium, or Small."
        },
        {
          "id": "uSrLj12M9nzjE5tG",
          "name": "Temper thy Words",
          "kind": "action",
          "description": "The exscinder chooses one written text within 120 feet. They don't need to be able to observe the text, but they can't target one that's deliberately Concealed. The exscinder censors the text, modifying it to their wishes. The text can't be referenced, making it useless for functions like Casting a Spell from a scroll, preparing spells from a spellbook, or consulting a scholarly journal. If the text is attended, the creature possessing it can attempt a check (will, dc:33) save; an unattended text automatically gets a critical failure."
        }
      ],
      "spellcasting": [
        {
          "id": "fUPryJAs22PaaUKc",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "HX0LH1qY8VCxtorP",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "dsWNlfQcaOq9B5j8",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "lMrebBl0sxvh3qsg",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "qfZzm4z3hVRpljta",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "unwZp6AOzyCpeSVj",
              "name": "Heal (At Will)",
              "rank": 4
            },
            {
              "id": "Iar5lwSgPwAP4jWx",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "QqvTMVk8FD3HGzoK",
              "name": "Divine Immolation",
              "rank": 7
            },
            {
              "id": "espZPwP7i6u944Lv",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "UWYpe3mMSFQ5jQRb",
              "name": "Rewrite Memory (At Will)",
              "rank": 7
            },
            {
              "id": "5sgMz5M77oRYDnYM",
              "name": "Ring of Truth",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:millindemalion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "TmvTgG1M8nzC5Q0K",
      "slug": "millindemalion",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:82e00159ede23cac4663f9fdcce586227c2c5d5b029253fc393c196bd6c2ef6e",
    "translatableHash": "sha256:e8b9a66a17032b5063ba6bb09c8b87ff3d925f68279f1fbb1160901d43f35677",
    "data": {
      "schemaVersion": 1,
      "name": "Millindemalion",
      "level": 13,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fey"
      ],
      "description": "Millindemalion are cruel fey tricksters capable of causing mayhem with their magical, mind-altering hats. Many folk tales from around the world speak of industrious fey who help struggling crafters-cobblers, milliners, tailors, and so on-during the night, creating quality wares in secret for no payment greater than a crumb of bread or a saucer of cream. These stories hold a grain of truth, as gracious fey do occasionally journey from the First World to aid a humble artisan on a whim, for bribes of food, or sometimes even as part of a concerted effort to spread beauty throughout the world. However, when an artisan becomes too reliant on this help, their friendly fey helper might become warped and twisted with resentment and neglect. Eventually, they could transform into a cruel prankster who delights in punishing mortals who dare task a fey with such mundane work. The millindemalion is the result of a kindly, hat-making fey undergoing such a transformation. Some scholars believe this erratic behavior is caused by the preponderance of quicksilver used in most millinery.",
      "armorClass": 33,
      "hitPoints": 275,
      "speedFeet": 30,
      "perception": {
        "modifier": 23,
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
        "dex": 8,
        "con": 1,
        "int": 7,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "crafting": 28,
        "occultism": 24,
        "society": 24,
        "stealth": 27
      },
      "languages": [
        "aklo",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "J9DbeNCFrbq08rQy",
          "name": "Felt Shears",
          "bonus": 27,
          "damage": "2d4+14 piercing; 1d6 mental",
          "traits": [
            "deadly-d8",
            "finesse",
            "magical",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "9mRCoULFDFjQtK4x",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "The millindemalion can use Hat Toss against the triggering creature instead of making a Strike, making a melee attack roll with a check (millindemalion-hat-toss, against:ac){+27} modifier to do so."
        },
        {
          "id": "zY6HRNQ28oqHNnmV",
          "name": "Unsettling Mind",
          "kind": "passive",
          "description": "Attempting to touch the frenetic mind of a millindemalion is a dangerous task. When the millindemalion succeeds at a saving throw against a mental effect, the creature originating that effect takes 4d6[mental] damage."
        },
        {
          "id": "3MP8S4relPgvIRf2",
          "name": "Hat Toss",
          "kind": "action",
          "description": "The millindemalion quickly crafts a mind-altering hat in combat and tosses it onto a target with a flick of their wrist. The millindemalion chooses one of the effects below and makes a ranged attack roll with a check (millindemalion-hat-toss, against:ac){+27} modifier and a range increment of 20 feet.\nOn a hit, the target must succeed at a check (will, dc:33) saving throw or experience the listed effect for [[/gmr 1d4+1 #Duration Hat Toss]]{1d4+1 rounds}. If the millindemalion critically succeeds at the ranged Strike, the target takes a -4 circumstance penalty on the save.\nA target can only wear one millindemalion hat at a time; a new hat replaces any previous hat. The hat can't be removed before the condition ends, but when the condition ends (or on a successful save), the hat falls to pieces.\n• Befuddling Bowler The hat clouds the target's mind; the target becomes Stupefied 2.\n• Bewitching Beret The target is infatuated with their new hat and its creator, becoming Fascinated by the millindemalion and the beret.\n• Dazzling Deerstalker The target can barely see with the hat falling down over its eyes and gains the Dazzled condition.\n• Fettering Fedora The target feels a heavy weight pressing down on them from the hat and takes a -10-foot circumstance penalty to their Speeds.\n• Tiring Tricorne The target grows sleepy and becomes Slowed 1.\nEffect: Fettering Fedora"
        },
        {
          "id": "sIbPX7HRtLZsZC7R",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A millindemalion deals an extra 4d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:jorogumo",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "u45PPktoMp5L2vf3",
      "slug": "jorogumo",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f30cb5ecfbc83bbab4c5b9dc73fd94e2c59d5b347eb22aa2cf9dd5a0f0b1fb22",
    "translatableHash": "sha256:7c6cda55549aa62e318e40282f8cce27a2f3f4ed9a15f4e51b0787649d1b407e",
    "data": {
      "schemaVersion": 1,
      "name": "Jorogumo",
      "level": 13,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid"
      ],
      "description": "Appearing as beautiful, well-dressed humans, jorogumo lurk in the high mountains and prey on travelers, often through words and charm. These cruel creatures can fully change into a giant spider or sprout spider legs from their backs, and they often keep giant spiders as pets. Jorogumo usually eat their prey, but some humanoids meet an even more gruesome fate as living incubators for jorogumo eggs.\nWhen they encounter a tengu, jorogumo fly into a rage and attempt to murder them as quickly as possible, for they insist that tengu can see through their trickery with a mere glance and are immune to their venom, but it isn't clear to outsiders if this is the whole story behind their single-minded hatred. Though most jorogumo are solitary creatures, some worship Norgorber and serve as valuable allies to thieves' guilds following that god's guise as the Gray Master.",
      "armorClass": 33,
      "hitPoints": 270,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 23,
        "will": 26
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 5,
        "int": 3,
        "wis": 5,
        "cha": 7
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 23,
        "crafting": 22,
        "deception": 28,
        "diplomacy": 26,
        "performance": 24,
        "stealth": 23,
        "survival": 24
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 15"
        ],
        "weaknesses": [
          "peachwood 10"
        ]
      },
      "attacks": [
        {
          "id": "laZB42oqhLObETCQ",
          "name": "Jaws",
          "bonus": 27,
          "damage": "3d12+14 piercing",
          "traits": []
        },
        {
          "id": "UbutL0MawQSFhBXL",
          "name": "Claw",
          "bonus": 27,
          "damage": "3d8+14 slashing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "QKOKwEbR6WoMLOnW",
          "name": "Web",
          "bonus": 23,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "CRPa2NYULPm7t9la",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "CEfQRRIfgYRMra6o",
          "name": "Darting Legs",
          "kind": "reaction",
          "description": "Requirements The jorogumo has their spider legs extended or has Changed Shape\nTrigger The jorogumo is targeted with an attack\nEffect The jorogumo raises a leg, gaining a +2 circumstance bonus to AC against the triggering attack."
        },
        {
          "id": "xAQ3og5Z7n9iwnIs",
          "name": "Change Shape",
          "kind": "action",
          "description": "The jorogumo takes on the appearance of any Small or Medium spider. This doesn't change their Speed or Strikes."
        },
        {
          "id": "jBlN3AcFIGu2v2jI",
          "name": "Jorogumo Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:32)\nMaximum Duration 4 hours\nStage 1 3d6[poison] damage and Stupefied 1 (1 round)\nStage 2 3d6[poison] damage and Stupefied 2 (1 round)\nStage 3 4d6[poison] damage and stupefied 2 (1 round)\nStage 4 Paralyzed for [[/gmr 1d4 #hours]]{1d4 hours}"
        },
        {
          "id": "jcppWoDI4Dl4BBUG",
          "name": "Spider Legs",
          "kind": "action",
          "description": "Requirements The jorogumo is in humanoid form\nEffect Eight large spider legs sprout from the jorogumo's back, granting a 40-foot climb Speed and allowing them to use the Darting Legs reaction."
        },
        {
          "id": "R8lkZEw0yLsgMcJt",
          "name": "Web Trap",
          "kind": "passive",
          "description": "A creature hit by the jorogumo's web attack is Immobilized and stuck to the nearest surface, preventing the creature from moving. The DC to Escape or Force Open the web trap is 32."
        }
      ],
      "spellcasting": [
        {
          "id": "AMSGg9QhrLNY87yV",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "nrFBzWgzO2zkggIT",
              "name": "Charm (At Will)",
              "rank": 1
            },
            {
              "id": "tDnGHBENORXCE6b3",
              "name": "Speak with Animals (Constant)",
              "rank": 2
            },
            {
              "id": "b6cuLHfZlcYXxAcP",
              "name": "Mind Reading (At Will)",
              "rank": 3
            },
            {
              "id": "r5hwww48T7DchilH",
              "name": "Outcast's Curse",
              "rank": 4
            },
            {
              "id": "tH1kFOJ5IcrLyTad",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "vtP3BQRkTKStkABB",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "rB2QwSHTXGe7l9rE",
              "name": "Summon Animal (Spiders Only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skeletal-titan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XvauwoJvFf4VdWiA",
      "slug": "skeletal-titan",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7a6e00db5c55abd86fb6dc37c9fe27f0fefbdd0700aa67bb1541576ffb7a28e7",
    "translatableHash": "sha256:1edd7ec1ec852ba08df81103a434e5af89f50b252ae6d6d19f1bd7f94591c214",
    "data": {
      "schemaVersion": 1,
      "name": "Skeletal Titan",
      "level": 13,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Only the powerful and foolish would raise the bones of a mighty titan or similarly gargantuan creature as a skeleton. Skilled practitioners see this as a waste of a powerful body and instead imbue them with magic that allows them to fly. The wise know it's nearly impossible to control such a colossus and that it's just as likely to crush its creator underneath its mighty foot as it is to smite their foes.\nAmong the ranks of the dead, none are so numerous, nor so varied, as the skeleton. While most are almost entirely made from bone, some maintain a few scraps of flesh to aid them in movement, such as wing membranes.",
      "armorClass": 33,
      "hitPoints": 210,
      "speedFeet": 40,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 24,
        "will": 21
      },
      "abilities": {
        "str": 9,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 28
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
          "cold 10",
          "electricity 10",
          "fire 10",
          "piercing 15",
          "slashing 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4pt21hdckfee43y3",
          "name": "Mountain Sword",
          "bonus": 26,
          "damage": "3d12+13 bludgeoning",
          "traits": [
            "reach-20"
          ]
        },
        {
          "id": "qo8ae1c96drn6owz",
          "name": "Claw",
          "bonus": 26,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "agile",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "55sqmv4kf6twrsh0",
          "name": "Foot",
          "bonus": 26,
          "damage": "3d8+13 bludgeoning",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "15qn60fnmbbmi7qd",
          "name": "Bone",
          "bonus": 24,
          "damage": "2d10+13 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "WthNDt9DjtNzlPes",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tskaoz4x2uhz0ss3",
          "name": "Bone Debris",
          "kind": "passive",
          "description": "The bones a skeletal titan throws are large enough to clutter the battlefield. When the skeletal titan hits a creature with a bone attack, the projectile becomes difficult terrain in the square the creature occupies (or, if the creature occupies more than one square, one square it occupies of the titan's choice). If the titan misses with a bone attack, instead a random square adjacent to the creature becomes difficult terrain."
        },
        {
          "id": "7hy3wqu9oefod2vm",
          "name": "Mountain Slam",
          "kind": "action",
          "description": "The skeletal titan slams its mountain sword into the ground. The shock wave reverberates, dealing (3d12+13)[bludgeoning|options:area-damage] damage to all creatures in a @Template[type:line|distance:20] (check (reflex, dc:33, basic) save). A creature that fails its save is also knocked Prone."
        },
        {
          "id": "wRVqT1QO1O1ru1SY",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:33, basic)"
        }
      ],
      "spellcasting": [
        {
          "id": "kPpdhRglPpemLa6O",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 31,
          "spells": [
            {
              "id": "onnK4xdGi4K7zKl5",
              "name": "Fly (Constant)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:thanadaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "YMiDUjk65e52z1mU",
      "slug": "thanadaemon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f7b20d1373d0879b7fe9c214322f47dad7286417857817b22dc8e13b35fc266e",
    "translatableHash": "sha256:a0cd12b7ea6192b78e91ee5cdca704d73da432276919002faa0905d5f5b8fd7d",
    "data": {
      "schemaVersion": 1,
      "name": "Thanadaemon",
      "level": 13,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "Also known as the deacons of death, thanadaemons represent death via old age. They are among the most patient daemons, and prefer to bide their time to enact far-reaching, decades-long plans rather than fight (though they are still deadly foes). Like the Horseman of Death, they ply the waters of the River Styx in search of wayward souls. Rarely are thanadaemons seen without a trademark oar (which they wield as a bo staff), a tool they use to navigate the river's muck-ridden channels and turbulent rapids.\nDaemons form from the most despicable souls and personify forms of death.",
      "armorClass": 34,
      "hitPoints": 270,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 23,
        "will": 26
      },
      "abilities": {
        "str": 6,
        "dex": 6,
        "con": 4,
        "int": 3,
        "wis": 5,
        "cha": 7
      },
      "skills": {
        "arcana": 22,
        "deception": 26,
        "intimidation": 26,
        "religion": 22
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "PwSEiS1mqX6rqjJa",
          "name": "Bo Staff",
          "bonus": 28,
          "damage": "2d8+16 bludgeoning; 1d6 void",
          "traits": [
            "magical",
            "parry",
            "reach-10",
            "trip",
            "unholy"
          ]
        },
        {
          "id": "KYPHjX89IxHU4Sz3",
          "name": "Claw",
          "bonus": 27,
          "damage": "3d6+17 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "gEBtnmvk3gdF5Dfx",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "iRZgPtkf6Lw3MzYm",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "FOqdcu8TMcTRnPHq",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5fPhzfjVfDH0Ssgz",
          "name": "Terrifying Gaze",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it must attempt a check (will, dc:30) save. If the creature fails, it becomes Frightened 2. The creature is then temporarily immune to terrifying gaze (but not Focus Gaze) for 24 hours."
        },
        {
          "id": "yHiEUWvnlHVJLlCA",
          "name": "Draining Strike",
          "kind": "passive",
          "description": "When a thanadaemon damages a living creature with a melee Strike, the creature must succeed at a check (fortitude, dc:33) save or become Drained 1. Further damage dealt by the thanadaemon increases the drained condition value by 1 on a failed save, to a maximum of Drained 4."
        },
        {
          "id": "e7rgKN11dqX1fsSq",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The thanadaemon glares at a single creature they can see within 30 feet. If the target wasn't already Frightened, they must immediately attempt a check (will, dc:33) save against the thanadaemon's terrifying gaze. If the target was already frightened, they must attempt a check (will, dc:33) save or become Fleeing for [[/gmr 1d4 #rounds]]{1d4 rounds}; this second effect has the incapacitation trait. After attempting its save, the creature is temporarily immune to this ability until the start of the thanadaemon's next turn."
        },
        {
          "id": "mKh47XLxTvXG71TF",
          "name": "Soul Crush",
          "kind": "action",
          "description": "Requirements The thanadaemon has a soul gem\nEffect The thanadaemon crushes the soul gem in one hand and gains fast healing 15 for 1 minute.\nEffect: Soul Crush (Healing)"
        }
      ],
      "spellcasting": [
        {
          "id": "6mCb1o0EW6yQ0NfB",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 24,
          "saveDc": 34,
          "spells": [
            {
              "id": "xlG6gARk9pKLtlNB",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "ulesj8P6Pt5Nf0jA",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "nHY42Kt9urOKdgSx",
              "name": "Slow",
              "rank": 6
            },
            {
              "id": "ObVrTFAbOtoIPhZv",
              "name": "Vampiric Exsanguination",
              "rank": 6
            },
            {
              "id": "HJAngcZN6WxfyR3t",
              "name": "Execute",
              "rank": 7
            },
            {
              "id": "TLpSdUiwPUr9Urkt",
              "name": "Interplanar Teleport (at will; self plus skiff and passengers only; Astral, Ethereal, and unholy planes only)",
              "rank": 7
            },
            {
              "id": "WuszSR2b6vac9hKo",
              "name": "Teleport",
              "rank": 7
            },
            {
              "id": "9oB4eGKG67srf4Lu",
              "name": "Truesight (Constant)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dibrasgorth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ZCoLuOCfhO3DAeSv",
      "slug": "dibrasgorth",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a2fdf1947c51049abd42c3dac350c82c987cf0b968bbbacc0904c8385beff47a",
    "translatableHash": "sha256:b7b3c34b5596b25d307579ad5bcadba13bf10beaae3074bfbcb224919896b7d3",
    "data": {
      "schemaVersion": 1,
      "name": "Dibrasgorth",
      "level": 13,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "aberration",
        "amphibious"
      ],
      "description": "Dibrasgorths, sometimes called Mothers of Oblivion, are monstrous creatures of chaos who dwell in lightless spaces, often near the bottom of deep lakes and oceans both above and underground. They may look like hideous monsters with heads like a plesiosaur atop masses of tentacles, each tipped with a baleful red eye, but dibrasgorths have a twisted sense of cunning, likely due to their ability to see into and affect planes other than the one where they stand. Though they are quite powerful (with some the favored servants of Lamashtu), dibrasgorths prefer to keep their existence a secret from the mortals of the world above.",
      "armorClass": 33,
      "hitPoints": 250,
      "speedFeet": 20,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 20,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": 1,
        "con": 4,
        "int": 5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 18,
        "arcana": 20,
        "athletics": 25,
        "nature": 17,
        "occultism": 20,
        "religion": 17,
        "stealth": 20,
        "survival": 19
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "polymorph",
          "petrified"
        ],
        "resistances": [
          "acid 15",
          "cold 15",
          "mental 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wWWgb6HHBPxM0xaM",
          "name": "Jaws",
          "bonus": 27,
          "damage": "3d10+16 piercing",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "ypiI3yV1r7NpukQ8",
          "name": "Tentacle",
          "bonus": 27,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "2qh6rayNqt3ObfMh",
          "name": "Planar Sight",
          "kind": "passive",
          "description": "The eyes at the end of their tentacles allow a dibrasgorth to see into planes coterminous with the one it is currently on at the listed range. For instance, if they're in the Universe, they can see into the Ethereal Plane and the Netherworld."
        },
        {
          "id": "RJSM8slC0SUuQxV0",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ucRMCOnM19HZo1qu",
          "name": "Warped Space",
          "kind": "passive",
          "description": "100 feet. The dibrasgorth's presence distorts the fabric of space. Any other creature who uses a teleportation effect or spell within the aura must attempt a check (fortitude, dc:33, options:area-effect,inflicts:sickened) save or become Sickened 2."
        },
        {
          "id": "5XYz1z3IOHbCaNtG",
          "name": "Breath of Phantasms",
          "kind": "action",
          "description": "The dibrasgorth exhales a @Template[type:cone|distance:60] of noxious gas. Each creature in the area takes 7d6[poison|options:area-damage] damage (check (fortitude, dc:30, basic, options:area-effect,inflicts:confused) save). On a failure, the creature is also Confused for 1 round (or 2 rounds on a critical failure)."
        },
        {
          "id": "2beE8eZvPLfVCbSN",
          "name": "Drag Through Dimensions",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The dibrasgorth has a creature Grabbed or Restrained with a tentacle\nEffect The dibrasgorth's tentacle whips through coterminous planes as it smashes the creature it is holding against the ground and other natural features in each plane before returning to this plane. The creature takes 5d8[bludgeoning] damage (check (reflex, dc:30, basic, options:inflicts:stupefied,inflicts:sickened) save). A creature who fails the save is also Stupefied 1 for 1 round and Sickened 1 by the rapid planar travel."
        },
        {
          "id": "pefMP0GYkD8nfE0s",
          "name": "Draining Bite",
          "kind": "passive",
          "description": "A dibrasgorth feeds on the spirits of its victims. A creature that is damaged by the dibrasgorth's jaws Strike must attempt a check (fortitude, dc:30, options:inflicts:drained) save or become Drained 1 (Drained 2 on a critical failure). In addition, the dibrasgorth gains 10 temporary Hit Points that last for 1 minute if the creature fails or critically fails the save.\nEffect: Draining Bite"
        },
        {
          "id": "7e7jE25UpfFbfW12",
          "name": "Transdimensional Tentacles",
          "kind": "passive",
          "description": "The dibrasgorth can worm its tentacles through nearby planes to attack. While in the Universe, its tentacle Strikes ignore all cover from objects unless those objects exist on both the Universe and either the Netherworld or the Ethereal Plane, or the objects have the extradimensional trait."
        },
        {
          "id": "n2dq5FenaKQiYinW",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "dXb2V3Z10BExRSYC",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "9MOrAgLybsmugyGZ",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "Sy1hRgbPzsuvix5H",
              "name": "Nightmare",
              "rank": 4
            },
            {
              "id": "b1rQwK8hZXIlPcUg",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "k59UF7s8M1XkKEQQ",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "fhPnd6iOSODFmTJY",
              "name": "See the Unseen (Constant)",
              "rank": 5
            },
            {
              "id": "LMFIgVScxpfLci1v",
              "name": "Synaptic Pulse",
              "rank": 5
            },
            {
              "id": "qonIsnRcGcoo5mq9",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "4p00EUbkfVr6GoON",
              "name": "Repulsion",
              "rank": 6
            },
            {
              "id": "A3XGHW7ngjADEu4l",
              "name": "Interplanar Teleport",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "BV71Dm2SSAObPp0W",
      "slug": "rune-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4dd83d6d779b329d082ba60b7496f61ab2f00d095eeb46b7d1773e620fc3b2a1",
    "translatableHash": "sha256:2b4fcfcbc37464f12179891eb3d70c7c04dc92def5edac822cb39b642b7dd3b1",
    "data": {
      "schemaVersion": 1,
      "name": "Rune Dragon (Adult)",
      "level": 14,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Rune dragons have an innate insight on the power of runes. Most rune dragons keep a variety of runes etched on their scales, which their bodies can magically empower. They typically don't cast spells themselves, instead relying on their ability to create runes on the fly to produce desired effects. A rune dragon often refers to their hoard as their library, as it's full of important historical texts, plays, speeches, textbooks, and spellbooks written by people of different cultures in a variety of languages. While they can often speak a language with the aid of magic, they much prefer to learn languages in the context of their speakers so they can grasp the nuances hidden within the syntax and the magic within their symbols.",
      "armorClass": 36,
      "hitPoints": 255,
      "speedFeet": 70,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision",
          "magicsense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 23,
        "will": 27
      },
      "abilities": {
        "str": 6,
        "dex": 6,
        "con": 7,
        "int": 8,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 29,
        "athletics": 27,
        "crafting": 27,
        "diplomacy": 25,
        "performance": 27,
        "society": 25,
        "survival": 25
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "nMoAKfyDDAoQfjPJ",
          "name": "Claw",
          "bonus": 28,
          "damage": "3d6+14 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "vWI3q4eiStz5qqHx",
          "name": "Jaws",
          "bonus": 28,
          "damage": "3d8+14 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "8A5XIY3Hlr1wxzJm",
          "name": "Tail",
          "bonus": 26,
          "damage": "3d10+14 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "RlvDOe4pR33tuNVr",
          "name": "Magic Sense",
          "kind": "passive",
          "description": "The rune dragon is aware of any active magical abilities and effects within the listed range. When the dragon Seeks, it gains the benefits of a 4th-rank detect magic spell within the listed range (in addition to the normal benefits of Seeking)."
        },
        {
          "id": "qwuKOZdikMj02pRU",
          "name": "Runic Scales",
          "kind": "passive",
          "description": "The rune dragon's scales function as runestones. The rune dragon can't use the effects or abilities of the runes etched on its scales, but they can transfer these runes to appropriate objects. Transferring a rune to or from an item in this way requires 1 minute, during which the dragon is Off-Guard. The process is automatic and doesn't require a check, but if the dragon stops or is interrupted in this process, the rune is destroyed. A rune dragon can have any number of runes etched on its scales, though they typically have only a handful of runes etched on their scales at a time."
        },
        {
          "id": "5Nrc64gApPzUy279",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SI4dLQQdhQ6nWs5J",
          "name": "Canceling Rune",
          "kind": "reaction",
          "description": "Trigger The dragon is the target of a spell that requires a saving throw\nEffect The dragon attempts to unmake the spell's foundational runes. They attempt to counteract the spell (counteract rank 7th, counteract modifier [[/r 1d20+26 #Counteract]]{+26}). If successful, the dragon is unaffected by the spell; other subjects are affected by the spell normally. The dragon can't use Canceling Rune again for [[/gmr 1d4 #Recharge Canceling Rune]]{1d4 rounds}."
        },
        {
          "id": "L8w8yFgsSTRZPPKw",
          "name": "Retributive Rune",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet damages the rune dragon\nEffect With a burst of runic magic, the rune dragon uses their detonating rune ability on the triggering creature and immediately causes the rune to detonate if it didn't automatically do so."
        },
        {
          "id": "Rj2vwCAvhtc4VbOw",
          "name": "Detonating Rune",
          "kind": "passive",
          "description": "The rune dragon's Strikes and abilities can leave a detonating rune on their targets. If a creature would receive a detonating rune while they already have one, instead of adding another rune, their current detonating rune activates, dealing 5d6[untyped] damage to the target and expending the rune. The detonating rune's damage type matches the dragon's current Shifting Rune. A creature can use an Interact action to remove the rune. Detonating runes fade after 1 minute if not detonated."
        },
        {
          "id": "eHozVgrHl2EW2OBo",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "IiyJK3dEYHm1gnNg",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Runic Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "DYsAQWK06hC13mD4",
          "name": "Entangling Rune",
          "kind": "action",
          "description": "The rune dragon creates a large trapping rune in a @Template[type:burst|distance:10] within 60 feet. A creature other than the dragon that enters a trapped area or ends their turn in the trapped area activates the rune, causing it to entangle them. That creature must succeed at a check (reflex, dc:34) save or become Immobilized for 1 minute or until it Escapes. The rune can trap only a single creature at a time. The rune vanishes either when a creature succeeds against the rune, when a creature successfully Escapes the rune, or after 1 minute. A creature adjacent to the rune can use an Interact action to remove the rune."
        },
        {
          "id": "i7kuaOQCvKjQ623q",
          "name": "Runic Breath",
          "kind": "action",
          "description": "The dragon launches hundreds of exploding runes that detonate upon impact, dealing 12d6[untyped|options:area-damage] damage in a @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). The damage type of this ability is determined by Shifting Rune. Creatures who fail the save are also affected by detonating rune. The dragon can't use Runic Breath again for [[/gmr 1d4 #Recharge Runic Breath]]{1d4 rounds}."
        },
        {
          "id": "aXvfwxeI9u0AxsD4",
          "name": "Shifting Runes",
          "kind": "action",
          "description": "The rune dragon chooses between acid, cold, electricity, fire, or sonic damage. The runes etched upon the dragon shift, forming runes of that energy on its scales. The dragon gains immunity to that damage type, and their detonating runes and Runic Breath deal that damage type. Anyone trained in Arcana can immediately recognize the energy type of the etched rune without a check."
        },
        {
          "id": "B3ruyvS6l8vioWPg",
          "name": "Improved Push 10 feet",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rune-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "cYC9lQAUkGrUkn36",
      "slug": "rune-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b1638853b05b4337c16515834365efe94fd64eede0ac0b5a93dd76118a06784c",
    "translatableHash": "sha256:7e0b1e0a09c34e5e8a7c1cf65971a8f856295754fdee9cef7f4d6d9c20d7d84b",
    "data": {
      "schemaVersion": 1,
      "name": "Rune Dragon (Adult, Spellcaster)",
      "level": 14,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Rune dragons have an innate insight on the power of runes. Most rune dragons keep a variety of runes etched on their scales, which their bodies can magically empower. They typically don't cast spells themselves, instead relying on their ability to create runes on the fly to produce desired effects. A rune dragon often refers to their hoard as their library, as it's full of important historical texts, plays, speeches, textbooks, and spellbooks written by people of different cultures in a variety of languages. While they can often speak a language with the aid of magic, they much prefer to learn languages in the context of their speakers so they can grasp the nuances hidden within the syntax and the magic within their symbols.",
      "armorClass": 36,
      "hitPoints": 255,
      "speedFeet": 70,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision",
          "magicsense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 23,
        "will": 27
      },
      "abilities": {
        "str": 6,
        "dex": 6,
        "con": 7,
        "int": 8,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 29,
        "athletics": 27,
        "crafting": 27,
        "diplomacy": 25,
        "performance": 27,
        "society": 25,
        "survival": 25
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "nMoAKfyDDAoQfjPJ",
          "name": "Claw",
          "bonus": 28,
          "damage": "3d6+14 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "vWI3q4eiStz5qqHx",
          "name": "Jaws",
          "bonus": 28,
          "damage": "3d8+14 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "8A5XIY3Hlr1wxzJm",
          "name": "Tail",
          "bonus": 26,
          "damage": "3d10+14 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "RlvDOe4pR33tuNVr",
          "name": "Magic Sense",
          "kind": "passive",
          "description": "The rune dragon is aware of any active magical abilities and effects within the listed range. When the dragon Seeks, it gains the benefits of a 4th-rank detect magic spell within the listed range (in addition to the normal benefits of Seeking)."
        },
        {
          "id": "qwuKOZdikMj02pRU",
          "name": "Runic Scales",
          "kind": "passive",
          "description": "The rune dragon's scales function as runestones. The rune dragon can't use the effects or abilities of the runes etched on its scales, but they can transfer these runes to appropriate objects. Transferring a rune to or from an item in this way requires 1 minute, during which the dragon is Off-Guard. The process is automatic and doesn't require a check, but if the dragon stops or is interrupted in this process, the rune is destroyed. A rune dragon can have any number of runes etched on its scales, though they typically have only a handful of runes etched on their scales at a time."
        },
        {
          "id": "5Nrc64gApPzUy279",
          "name": "+2 Status to All Saves vs. Arcane",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SI4dLQQdhQ6nWs5J",
          "name": "Canceling Rune",
          "kind": "reaction",
          "description": "Trigger The dragon is the target of a spell that requires a saving throw\nEffect The dragon attempts to unmake the spell's foundational runes. They attempt to counteract the spell (counteract rank 7th, counteract modifier [[/r 1d20+26 #Counteract]]{+26}). If successful, the dragon is unaffected by the spell; other subjects are affected by the spell normally. The dragon can't use Canceling Rune again for [[/gmr 1d4 #Recharge Canceling Rune]]{1d4 rounds}."
        },
        {
          "id": "L8w8yFgsSTRZPPKw",
          "name": "Retributive Rune",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet damages the rune dragon\nEffect With a burst of runic magic, the rune dragon uses their detonating rune ability on the triggering creature and immediately causes the rune to detonate if it didn't automatically do so."
        },
        {
          "id": "Rj2vwCAvhtc4VbOw",
          "name": "Detonating Rune",
          "kind": "passive",
          "description": "The rune dragon's Strikes and abilities can leave a detonating rune on their targets. If a creature would receive a detonating rune while they already have one, instead of adding another rune, their current detonating rune activates, dealing 5d6[untyped] damage to the target and expending the rune. The detonating rune's damage type matches the dragon's current Shifting Rune. A creature can use an Interact action to remove the rune. Detonating runes fade after 1 minute if not detonated."
        },
        {
          "id": "DYsAQWK06hC13mD4",
          "name": "Entangling Rune",
          "kind": "action",
          "description": "The rune dragon creates a large trapping rune in a @Template[type:burst|distance:10] within 60 feet. A creature other than the dragon that enters a trapped area or ends their turn in the trapped area activates the rune, causing it to entangle them. That creature must succeed at a check (reflex, dc:34) save or become Immobilized for 1 minute or until it Escapes. The rune can trap only a single creature at a time. The rune vanishes either when a creature succeeds against the rune, when a creature successfully Escapes the rune, or after 1 minute. A creature adjacent to the rune can use an Interact action to remove the rune."
        },
        {
          "id": "i7kuaOQCvKjQ623q",
          "name": "Runic Breath",
          "kind": "action",
          "description": "The dragon launches hundreds of exploding runes that detonate upon impact, dealing 12d6[untyped|options:area-damage] damage in a @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). The damage type of this ability is determined by Shifting Rune. Creatures who fail the save are also affected by detonating rune. The dragon can't use Runic Breath again for [[/gmr 1d4 #Recharge Runic Breath]]{1d4 rounds}."
        },
        {
          "id": "aXvfwxeI9u0AxsD4",
          "name": "Shifting Runes",
          "kind": "action",
          "description": "The rune dragon chooses between acid, cold, electricity, fire, or sonic damage. The runes etched upon the dragon shift, forming runes of that energy on its scales. The dragon gains immunity to that damage type, and their detonating runes and Runic Breath deal that damage type. Anyone trained in Arcana can immediately recognize the energy type of the etched rune without a check."
        },
        {
          "id": "B3ruyvS6l8vioWPg",
          "name": "Improved Push 10 feet",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "nEyhWzDPgazwMsA7",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "6V0YjvR0dQDedoUH",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "1AIMjaJEuOY6dpGd",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "1YJJutu8IkZVw1s6",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "54j75KYBClp8c9iE",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "3p0oHMsmZGSKc2Tb",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "yrHGy1lB0AwO2mA3",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "myzzlJQfRiNYxPCD",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "O9yDmIXbdQXbbGN4",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "lfbmnQ4WgPBNOp4k",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "r6Mb7KCSSugAioi1",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "eCzurVg4BDjtDGnG",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "DF25BOxvTUvURcOw",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "OiykRQTKvyhzjRlD",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "6TnwtPiQfcBjFwdt",
              "name": "Gravity Well",
              "rank": 3
            },
            {
              "id": "nSvr1M5jODicR5RW",
              "name": "Veil of Privacy",
              "rank": 3
            },
            {
              "id": "M3gDzozoz65dxKG3",
              "name": "Wall of Fire",
              "rank": 4
            },
            {
              "id": "I3VYQf6KRTq03GjP",
              "name": "Howling Blizzard",
              "rank": 5
            },
            {
              "id": "ijFc3zAbPPFzLO4a",
              "name": "Imaginary Lockbox",
              "rank": 5
            },
            {
              "id": "nBihXzDO5d93TvYh",
              "name": "Truespeech",
              "rank": 5
            },
            {
              "id": "a773jSBk5DbxQqxs",
              "name": "Chain Lightning",
              "rank": 6
            },
            {
              "id": "A4jKElUl7lYkJTEU",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "NPh3SL1S9c0IX8XG",
              "name": "Wall of Force",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:deep-one-elder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dZwcLmENWYSneook",
      "slug": "deep-one-elder",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52ddd892b8ae0b940849410ed867eff4727a2d9c7e9749d7b3cc223422385986",
    "translatableHash": "sha256:08054c8dff6e4299d7dfd3812410a0242355ef92ba180eeb8def5b1a3569a421",
    "data": {
      "schemaVersion": 1,
      "name": "Deep One Elder",
      "level": 14,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "humanoid",
        "unholy"
      ],
      "description": "Given enough time, deep one elders can swell to dizzying heights.\nLumbering, amphibious, and deathless humanoids known as deep ones inhabit coastal areas and deep ocean trenches all across Golarion. Though most simply wish to be left alone, others work tirelessly to grow their ranks.",
      "armorClass": 36,
      "hitPoints": 260,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "wavesense-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 22,
        "will": 26
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 8,
        "int": 6,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 31,
        "intimidation": 24,
        "religion": 27,
        "survival": 25
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [
          "acid 10",
          "piercing 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Ua6j8fuuYgXoFaTn",
          "name": "Foot",
          "bonus": 29,
          "damage": "3d12+15 bludgeoning",
          "traits": [
            "magical",
            "reach-20",
            "unholy"
          ]
        },
        {
          "id": "RVOHvJxz5QoxtVBZ",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d10+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-20",
            "sweep",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "lmdKMHrlULmNo7w5",
          "name": "Pressurized",
          "kind": "passive",
          "description": "A deep one is immune to damage and other negative effects from changes in water pressure."
        },
        {
          "id": "1SYNnzqOXJOfOHIT",
          "name": "Endless",
          "kind": "passive",
          "description": "A deep one doesn't age and is immune to spells and other effects that inflict magical aging. Unless killed, a deep one lives forever."
        },
        {
          "id": "i5MwYk1OaoGuW2Ti",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "60 feet. check (will, dc:31, options:area-effect,inflicts:frightened,inflicts:slowed).\nA creature that fails its save is also Slowed 1 (Slowed 2 on a critical failure)."
        },
        {
          "id": "arO5c9zJtlg4KtxD",
          "name": "Mental Mirror",
          "kind": "passive",
          "description": "Mental effects that fail against a deep one elder are reflected back onto the source, as Spell Riposte."
        },
        {
          "id": "51NoqzOBQqQbqnnf",
          "name": "Devastation",
          "kind": "passive",
          "description": "A deep one elder's claw Strikes ignore the first 10 Hardness of an object. Additionally, on a critical hit, the target must succeed at a check (fortitude, dc:34) save or be Stunned 2."
        },
        {
          "id": "3mlouvFpFrvtLqJ1",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:31, basic)\nThe deep one can Swim up to double its swim Speed instead of Striding."
        },
        {
          "id": "Ipe1qvzDL43R929K",
          "name": "Watery Void",
          "kind": "action",
          "description": "The deep one elder makes an endless void of water appear in a @Template[type:burst|distance:20] within 60 feet, dragging creatures down into its whirlpool. If cast underwater, the watery void fills a 60-foot-tall cylinder with a 20-foot radius. Creatures in the area when the void appears and creatures that end their turn in the area take 3d8[bludgeoning|options:area-damage] damage and 3d8[void|options:area-damage] damage and must attempt a check (reflex, dc:31) save. The void remains until the end of the deep one elder's next turn. The deep one elder can Sustain the void to extend the duration by 1 round, up to a total of 4 rounds, and can move the void up to 15 feet. Once the effect ends, the elder can't use Watery Void again for [[/gmr 1d4 #Recharge Watery Void]]{1d4 rounds}.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and a –5-foot circumstance penalty to their Speeds while in the void.\nFailure The creature takes full damage and a –10-foot circumstance penalty to their Speeds while in the void.\nCritical Success The creature takes double damage, is knocked Prone, and takes a –10-foot circumstance penalty to their Speeds while in the void."
        },
        {
          "id": "13AbcXHDRAQnf6nJ",
          "name": "Improved Knockdown",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ozthoom",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "EG8jLZfIfTwA0b5g",
      "slug": "ozthoom",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1efd8d8553fe667ed8645e09624f22d86fe91b77aea409adfa9c1a913bf33779",
    "translatableHash": "sha256:e856d2a69784e402fac2bf40b239ad8a869bd7ebfe5d3a55149e30e0c30b0764",
    "data": {
      "schemaVersion": 1,
      "name": "Ozthoom",
      "level": 14,
      "rarity": "common",
      "size": "large",
      "traits": [
        "fey"
      ],
      "description": "Ozthooms are shadowy killers who serve powerful fey creatures or even the Eldest—the demigods of the First World. Amid the courts of the Eldest or other powerful fey rulers, these sinister assassins lurk overhead as they await the call to action—implied threats akin to deadly weapons hung as decor in a royal hall. Ozthooms never speak aloud; when they feel the need to communicate at all, they do so in a telepathic whisper directly into their victim's mind. While an ozthoom's body is a strange, fleshy material, their deadly claws and cruel hooked wings are made from razor-sharp cold iron, a quality that makes them highly feared among other fey. A typical ozthoom is 10 feet tall and has an 8-foot wingspan, but it weighs less than 80 pounds.\nWhile most ozthooms serve powerful masters, a few of these murderous fey have been left to their own devices and serve none but their own capricious whims. In some cases, their master has been slain, while in others, the ozthoom has been released from service for any number of reasons. An ozthoom left to indulge their cruel desires unrestrained is often the most dangerous ozthoom of them all.",
      "armorClass": 35,
      "hitPoints": 280,
      "speedFeet": 0,
      "perception": {
        "modifier": 25,
        "senses": [
          "lifesense-120",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 28,
        "will": 24
      },
      "abilities": {
        "str": 7,
        "dex": 8,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 28,
        "deception": 25,
        "intimidation": 27,
        "nature": 22,
        "stealth": 28
      },
      "languages": [
        "aklo",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "IvFL4oT7wjrxQZqw",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d6+15 slashing",
          "traits": [
            "agile",
            "cold-iron",
            "unarmed"
          ]
        },
        {
          "id": "JdsDXPVL1v4JEQt5",
          "name": "Wing",
          "bonus": 29,
          "damage": "2d6+15 piercing; 2d6 bleed",
          "traits": [
            "cold-iron",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "EhHfFoSDrZtc8YUe",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "V8J7D9aK5N4MpaBI",
          "name": "Lifesense 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Q0VRtsqm6etoZxCa",
          "name": "Shadow Doubles",
          "kind": "action",
          "description": "1 to 3\nFrequency once per day\nEffect For each action spent to use this ability, the ozthoom creates one shadowy duplicate anywhere within 60 feet of themself. Shadow doubles have the same statistics as an ozthoom, but they have the summoned trait, 85 Hit Points, can't use Shadow Doubles or innate spells, and have an attack bonus of +25 for their Strikes. A shadow double that attempts a saving throw against a light effect can't get a result better than failure. Each double remains for 1 round, until it's reduced to 0 Hit Points, or until it moves further than 120 feet from the ozthoom, whichever comes first. Each round thereafter, the ozthoom can Sustain the effect to extend the duration of surviving duplicates by 1 round, to a maximum duration of 1 minute. The ozthoom can see through the eyes of all the shadow doubles at once. A character who Seeks can identify an ozthoom as real or a shadow double with a successful check (perception, dc:39) check."
        },
        {
          "id": "Bpm9xvzcp3dBpCvp",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A ozthoom's Strikes deal an additional 2d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": [
        {
          "id": "HvJ0Gsma4O9mDQsI",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "JpIRWxUhzaLmUrJD",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "O5Ij8d1mSUkqQ6gY",
              "name": "Silence",
              "rank": 2
            },
            {
              "id": "8BOoRnbMvYRNGJeJ",
              "name": "Darkness (At Will)",
              "rank": 5
            },
            {
              "id": "SbZNwgpcBSVg8d88",
              "name": "Planar Tether",
              "rank": 5
            },
            {
              "id": "PV3rQarbdD0AnANG",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "0NxbX8zzTkvb5t0p",
              "name": "Eclipse Burst",
              "rank": 7
            },
            {
              "id": "DDIcAlh0TkbZiH7f",
              "name": "Teleport",
              "rank": 7
            },
            {
              "id": "73BfMFPp30HJBLnW",
              "name": "Pinpoint",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:graveknight-warmaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "EH61wr2iEKooAzgQ",
      "slug": "graveknight-warmaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a3279d0aec5fa8af952b3ff74365fe1fbdbe5f92df1be6928984ad094af3e03",
    "translatableHash": "sha256:4c69b581090d5ae451327ba9ab5aa6efd8b3cf7338a308a4b4c6b740d9c05530",
    "data": {
      "schemaVersion": 1,
      "name": "Graveknight Warmaster",
      "level": 14,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Exemplars of undying violence, graveknight warmasters are devastating forces on the battlefield, able to spur allies to ever greater levels of violence.\nWhen a fearsome combatant falls in battle, the warrior's vengeful spirit can sometimes fuse with their armor, creating a graveknight.",
      "armorClass": 37,
      "hitPoints": 255,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 24,
        "will": 24
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 5,
        "int": 3,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "athletics": 28,
        "deception": 26,
        "intimidation": 28,
        "religion": 24,
        "society": 25
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
          "electricity",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "K0KuUYc812IQs2oq",
          "name": "War Flail",
          "bonus": 29,
          "damage": "3d10+14 bludgeoning",
          "traits": [
            "disarm",
            "electricity",
            "magical",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "pCNByflDUBdJvCMx",
          "name": "Fist",
          "bonus": 29,
          "damage": "3d6+14 bludgeoning",
          "traits": [
            "agile",
            "electricity",
            "magical"
          ]
        },
        {
          "id": "Im7BRSw3eD7Sor93",
          "name": "Heavy Crossbow",
          "bonus": 25,
          "damage": "3d10+6 piercing",
          "traits": [
            "electricity",
            "magical",
            "reload-2"
          ]
        }
      ],
      "actions": [
        {
          "id": "pceHLuFhCPvyyluM",
          "name": "Hungry Armor",
          "kind": "passive",
          "description": "A creature that Strikes a graveknight warmaster with a melee weapon must succeed at a check (reflex, dc:31) save or be disarmed of that weapon. If the creature critically fails, the weapon ends up in the graveknight's space. A creature that hits a graveknight warmaster with an unarmed attack must succeed at a check (reflex, dc:31) save or become Grabbed by the graveknight until the end of its next turn, when it Escapes, or when the graveknight moves, whichever comes first."
        },
        {
          "id": "2534QJr1XwyuJh3b",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "hBKKh0aXKDQ7s4LO",
          "name": "Rejuvenation",
          "kind": "passive",
          "description": "When a graveknight is destroyed, its armor rebuilds its body over the course of [[/gmr 1d10 #days]]{1d10 days}-or more quickly if the armor is worn by a living host. If the body is destroyed before then, the process restarts.\nA graveknight can only be permanently destroyed by obliterating its armor (such as with Disintegrate), transporting it to the Forge of Creation, or throwing it into the heart of a volcano."
        },
        {
          "id": "b4ybXyF4hs8hpEyW",
          "name": "Sacrilegious Aura",
          "kind": "passive",
          "description": "30 feet. When a creature in the aura uses a vitality spell or ability, the graveknight automatically attempts to counteract it, with a [[/r 1d20+23 #Counteract]]{+23 counteract modifier}."
        },
        {
          "id": "8bGiACtxTUu2ieCP",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0X6EFCetuVxcbAhd",
          "name": "Devastating Blast",
          "kind": "action",
          "description": "The graveknight unleashes a @Template[cone|distance:30] of energy. Creatures in the area take 8d12[electricity|options:area-damage] damage (check (reflex, dc:34, basic, options:area-effect) save).\nThe graveknight can use this ability once every [[/gmr 1d4 #Recharge Devastating Blast]]{1d4 rounds}."
        },
        {
          "id": "su6h0RMy6XM7g663",
          "name": "Exemplar of Violence",
          "kind": "action",
          "description": "Frequency once per round\nEffect The graveknight attempts a Strike as their armor flashes with sinister power that spurs allies to violence. After the Strike, allies who can see the graveknight can use a reaction to Step or Stride, but they must end this movement in a space adjacent to an enemy. One ally of the graveknight's choice can instead use a reaction to Strike."
        },
        {
          "id": "RaCHriqntJh3F0HE",
          "name": "Graveknight's Curse",
          "kind": "passive",
          "description": "This curse affects anyone who wears a graveknight's armor for at least 1 hour\nSaving Throw check (will, dc:39)\nOnset 1 hour\nStage 1 Doomed 1 and can't remove armor (1 day)\nStage 2 Doomed 2, –10-foot status penalty to Speeds, and can't remove armor (1 day)\nStage 3 dies and transforms into the armor's graveknight.\nEffect: Graveknight's Curse"
        },
        {
          "id": "mFicegxnkpUgVnEQ",
          "name": "Phantom Mount",
          "kind": "action",
          "description": "7th rank; the steed has AC 34, Fort +23, Ref +20, Will +20, and 85 Hit Points\nThe graveknight summons a supernatural mount, as Marvelous Mount heightened to a rank equal to half the graveknight's level.\nUnlike marvelous mount, the steed's AC and saving throw bonuses are all 4 lower than the graveknight's, and the steed has one-third the graveknight's Hit Points (rounded down).\nIf the steed is destroyed, the graveknight must wait 1 hour before using this ability again."
        },
        {
          "id": "rH4SoGqzcBhzlX5w",
          "name": "Ruinous Weapons",
          "kind": "passive",
          "description": "Any weapon or unarmed attack the graveknight uses gains the effects of the +1 greater striking and Greater Shock weapon runes."
        },
        {
          "id": "OvHCcDCBJf1wplxo",
          "name": "Weapon Master",
          "kind": "passive",
          "description": "The graveknight has access to the critical specialization effects of any weapons it wields."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jHD1bsWWmcUa2e7H",
      "slug": "cinder-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1b76d82af783d8b26d615c87c73b91498f3dd969ee650760ebd891cd03aa8898",
    "translatableHash": "sha256:2b3853d423eb9c4f1b81c99f329d790ba976dcb6958c07997c91c045ee9f13c8",
    "data": {
      "schemaVersion": 1,
      "name": "Cinder Dragon (Adult, Spellcaster)",
      "level": 14,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "dragon",
        "fire",
        "primal"
      ],
      "description": "Among the largest and fiercest dragons, cinder dragons are typically volatile, demanding respect—even deference—from lesser creatures. Cinder dragons' appearance evokes their flame, often in scales with mixed patterns of red, orange, and yellow. Many cinder dragons dwell in active volcanoes and similarly fiery locales. Cinder dragons prefer treasures that can withstand the heat of their bodies and lairs, with gemstones, gold, and silver common among their hoards.",
      "armorClass": 35,
      "hitPoints": 310,
      "speedFeet": 50,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 23,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 2,
        "con": 6,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 29,
        "diplomacy": 25,
        "intimidation": 27,
        "nature": 26,
        "stealth": 23
      },
      "languages": [
        "common",
        "draconic",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "IrTg9nWwV4OiOQW8",
          "name": "Jaws",
          "bonus": 29,
          "damage": "1d8 fire; 3d12+12 piercing",
          "traits": [
            "fire",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "yOmS98L3WqFRPhXZ",
          "name": "Horn",
          "bonus": 27,
          "damage": "3d12+16 piercing",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "ZGe2glGQxF2jA1C2",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d10+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "nSwGIvjZwxGfs5ON",
          "name": "Tail",
          "bonus": 27,
          "damage": "3d12+12 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "Usl81LEUxCtzXkzk",
          "name": "Wing",
          "bonus": 27,
          "damage": "3d8+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "9SJBTraIuJdXV6FB",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Smoke doesn't impair a cinder dragon's vision; they ignore the Concealed condition from smoke."
        },
        {
          "id": "T5A6q7Af8YZ9uCkW",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zNzGiGscx8mWgPNk",
          "name": "Boiling Blood",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a melee attack\nEffect The dragon's superheated blood spills onto the attacker. The target takes 8d6[fire] damage (check (reflex, dc:34, basic) save)."
        },
        {
          "id": "doEsjKt3NJoLAD51",
          "name": "Dragon Heat",
          "kind": "passive",
          "description": "5 feet. 3d6[fire|options:area-damage] damage (check (reflex, dc:30, basic, options:area-effect) save)"
        },
        {
          "id": "FvCzcBVRvmZ11mTe",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:32, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "QWxMF0tTh2JjNiIy",
          "name": "Reactive Strike (Jaws only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "NEGCX9pCG8gyZcjL",
          "name": "Pyre Breath",
          "kind": "action",
          "description": "The dragon breathes a blast of flame that deals 13d6[fire|options:area-damage] damage in a @Template[type:cone|distance:50] (check (reflex, dc:34, basic, options:area-effect) save). Creatures that critically fail their save catch fire, taking 2d6[persistent,fire] damage. The area then fills with black smoke for 1 minute. This has the effects of mist, except it fills the cone's area. The dragon can't use Pyre Breath again for [[/gmr 1d4 #Recharge Pyre Breath]]{1d4 rounds}."
        },
        {
          "id": "jmrC9phVteComdYb",
          "name": "Stoke the Flames",
          "kind": "action",
          "description": "The dragon intensifies nearby fires. Every foe within 60 feet that is taking persistent fire damage takes 4d6[fire] damage."
        }
      ],
      "spellcasting": [
        {
          "id": "4OnA40hMc7JonCfm",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "EaeWsm5Xx5yjwU0g",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "rzk0O4YOx5yG7PQJ",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "aOSMn3CNLhZvEffG",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "N54bk5qmZPjMT88i",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "3m83mMKEnDepiBqL",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "54JX06Cv9CnFUmjg",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "P0lYFrt8l4GjXXHV",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "FtdXwaKUWlnfULhq",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "mBQPeeL3efrZEEBs",
              "name": "Blazing Bolt",
              "rank": 2
            },
            {
              "id": "lop2plv1CXD66cEb",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "4dCYtZlLJN4UMtew",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "3ftYKVgRRzmXsaWr",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "jdpIoOqR07oxPcGu",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "1oqwk0EDWzSkUW4U",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "iLAFSrYR3Svsv64k",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "HrL1NFl17tIJ84X1",
              "name": "Fire Shield",
              "rank": 4
            },
            {
              "id": "jFdkNZTuKTzsTZ1B",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "eiG0dj4MbjTC72DU",
              "name": "Wall of Fire",
              "rank": 4
            },
            {
              "id": "qf40q60NjSIbKM7Q",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "jpZzRBWzLtsOPzJp",
              "name": "Cursed Metamorphosis",
              "rank": 6
            },
            {
              "id": "3uV46qqtji7sJkQ5",
              "name": "Truesight",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:doprillu",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "LwpPOXWeDY2KkL9l",
      "slug": "doprillu",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3cca07ac3e15fb57cb051f5b5859499b7eeb4e477bf0a1716ee0c961e6750fc4",
    "translatableHash": "sha256:65e2d1032e2e98d0ccf184280fb867d808974e1b501f61e878f99018bd8133e3",
    "data": {
      "schemaVersion": 1,
      "name": "Doprillu",
      "level": 14,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "The aberrations known as doprillus are hulks with banded muscles who wear ornate masks at all times that fill their wearers with magical strength and fighting spirit. Doprillus love to battle, especially by grappling, and are eager to start brawls. On neutral ground, a doprillu offers to duel the strongest-looking opponent, but when a doprillu's home turf is invaded, no rules apply to the confrontation. As befits the superheated blood that fuels them, doprillus make their homes in warm locations: hot jungles, sunny deserts, and underground caverns near sulfur vents.",
      "armorClass": 36,
      "hitPoints": 260,
      "speedFeet": 40,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision",
          "see-invisibility"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 28,
        "will": 24
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 7,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 26,
        "athletics": 30,
        "intimidation": 22,
        "stealth": 24
      },
      "languages": [
        "aklo",
        "common",
        "sakvroth"
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
          "id": "H7is94BX3CDB78hl",
          "name": "Fist",
          "bonus": 30,
          "damage": "3d8+16 bludgeoning; 2d6 fire",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "6FQU9AiPzlr4Znu6",
          "name": "Body Strike",
          "bonus": 30,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "1lSOq5grKxoZhTWw",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "38cGo2E7vYZ2PNb5",
          "name": "+2 Status Bonus to Saves vs. Fear",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AJ6r1HXEEIIyvlnh",
          "name": "Regeneration 20 (Deactivated by Cold)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "lWr6fzaJ1ya4uUVM",
          "name": "Deflect Arrow",
          "kind": "reaction",
          "description": "Trigger The doprillu is the target of a physical ranged attack\nRequirements The doprillu is aware of the attack, isn't Off-Guard against it, and has a hand free\nEffect The doprillu gains a +4 circumstance bonus to its AC against the triggering attack."
        },
        {
          "id": "gkiQGmXDkxDHGY7j",
          "name": "Mask of Power",
          "kind": "passive",
          "description": "A doprillu's unique wooden mask is the source of its power.\nA doprillu deprived of its mask loses its regeneration and its immunity to Enfeebled and Slowed, and it immediately becomes Enfeebled 1. The Enfeebled value increases by 1 at the start of each of the doprillu's turns, to a maximum of Enfeebled 4. If the mask is put back on, the doprillu immediately regains its abilities and loses the Enfeebled condition.\nA creature can pull off the mask with a successful Athletics check to [[/act force-open dc=34]]."
        },
        {
          "id": "BIIDNJTjlW3lJ1b2",
          "name": "Volcanic Veins",
          "kind": "passive",
          "description": "Fiery magma runs through the doprillu's veins. A creature that starts its turn Grabbed by the doprillu takes 7d6[fire] damage."
        },
        {
          "id": "XHAPOvUbe2eKOW7E",
          "name": "Whirlwind Throw",
          "kind": "action",
          "description": "Requirements The doprillu has a creature Grabbed\nEffect The doprillu whirls the grabbed creature about, making a Body Strike against each creature in reach. After that Strike, the doprillu can hurl the grabbed creature up to 50 feet as a ranged Strike. This Strike has the same attack modifier and damage as Body Strike, but has the thrown 20 feet weapon trait."
        },
        {
          "id": "ztFSGslDa3U5UhaP",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "Z487oTtboxJKexiF",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 28,
          "spells": [
            {
              "id": "5u6wc1mpLV2mconA",
              "name": "See the Unseen (Constant)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ravener-husk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "OK7Gl2rBDDBvICvh",
      "slug": "ravener-husk",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e632f497b2090ce17936028a496fe14c9e3be9e06075cf8c88c401e2e26833fa",
    "translatableHash": "sha256:041b377fb65af0c603f3d6939a045bf1fc2f44ecc373524a8305728103310c8c",
    "data": {
      "schemaVersion": 1,
      "name": "Ravener Husk",
      "level": 14,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "dragon",
        "undead",
        "unholy"
      ],
      "description": "Raveners require a steady diet of souls, and a ravener that's unable to feed for too long eventually cannibalizes their own soul. Should a ravener's soul ward ever be reduced to 0 Hit Points by hunger while the ravener has more than 1 Hit Point (see Soul Ward) they lose all traces of their former identity (losing most of its unique traits, including the one matching its former tradition) and descend into a feral, nearly mindless state. Even if a ravener husk later consumes soul energy, the transformation can be reversed only via Ravenous Repast.\nThough their lifespans can measure in millennia, all dragons must eventually perish. While many do so on the blades or under the spells of dragonslayers, some manage to outlast their enemies and must, in time, face the truth that awaits all living creatures at the end of their natural life span. As with many other creatures, some dragons respond to such looming reminders of their own mortality poorly, and the particularly prideful or wrathful of their kind often lash out in anger when confronted by this grim truth. Peace and acceptance are found by some dragons, but the most stubborn of their ilk (and invariably the most wicked) can pursue a different answer to the problem. These dragons seek out sinister rites that can transform them into undead creatures known as raveners.\nA ravener's flesh is stripped away as part of the transformation, leaving only bones. What they lose in flesh, however, the dragon gains in soul-rending power, as their spiritual energy forms a protective barrier around their body, keeping it intact and allowing flight with now-skeletal wings. This existence isn't as easy to maintain as other forms of undeath, however, and the ravener must feed regularly on living souls to power their profane metabolism. Their hunger is much greater than that of a living dragon, so raveners are forced to relocate regularly, traveling to fresh hunting grounds each time they strip their current home of prey.",
      "armorClass": 35,
      "hitPoints": 325,
      "speedFeet": 25,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 22,
        "will": 26
      },
      "abilities": {
        "str": 8,
        "dex": 0,
        "con": 6,
        "int": -5,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 28
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "slQdTIDvNb3mYmFw",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d4+16 slashing; 2d6 void",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "36mJMSBwP3zW90kW",
          "name": "Jaws",
          "bonus": 29,
          "damage": "3d8+16 piercing; 2d6 void",
          "traits": [
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "4Py4SYUJRaIMdE82",
          "name": "Soulsense 60 Feet",
          "kind": "passive",
          "description": "A ravener senses the spiritual essence of living and undead creatures within the listed range. Creatures whose material bodies are one unit with their souls, like celestials and fiends, appear brighter to this sense."
        },
        {
          "id": "kjHM3QE53i7n2ugL",
          "name": "Boneshatter",
          "kind": "reaction",
          "description": "Trigger The ravener husk takes any amount of bludgeoning damage\nEffect The ravener's brittle bones shatter, spraying bone shards everywhere. Every creature within a @Template[type:emanation|distance:10] of the ravener husk takes 7d6[piercing|options:area-damage] damage (check (reflex, dc:31, basic, options:area-effect) save)."
        },
        {
          "id": "IDZbfadO7y3spY2a",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:31, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "5VrUpJgTaaZOWZ2g",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LPztrtzNJXdQVZfW",
          "name": "Ravenous Repast",
          "kind": "action",
          "description": "Frequency once per day\nEffect The ravener husk makes a jaws Strike against a deceased creature that has been dead no longer than 1 minute, was holy, and was at least level 15 in life. The ravener attempts a check (flat, dc:5); if successful, they transform back into a ravener with 1 Hit Point in their soul ward."
        },
        {
          "id": "ORWYWlftRX4LQoyt",
          "name": "Void Breath",
          "kind": "action",
          "description": "The ravener husk breathes a torrent of void energy that deals 16d6[void|options:area-damage] damage in a @Template[type:cone|distance:40] (check (reflex, dc:34, basic, options:area-effect) save). They can't use Void Breath again for [[/gmr 1d4 #Recharge Void Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cinder-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "plgIbSqjCRc7JFFF",
      "slug": "cinder-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a176476adf0986399fd9c285d578c7756f1e056a7295f7ae6c2584c4cf82d40b",
    "translatableHash": "sha256:38748149bb70994e8f95cf6f472c0c55029fd4b754492dce679694514e5d873e",
    "data": {
      "schemaVersion": 1,
      "name": "Cinder Dragon (Adult)",
      "level": 14,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "dragon",
        "fire",
        "primal"
      ],
      "description": "Among the largest and fiercest dragons, cinder dragons are typically volatile, demanding respect—even deference—from lesser creatures. Cinder dragons' appearance evokes their flame, often in scales with mixed patterns of red, orange, and yellow. Many cinder dragons dwell in active volcanoes and similarly fiery locales. Cinder dragons prefer treasures that can withstand the heat of their bodies and lairs, with gemstones, gold, and silver common among their hoards.",
      "armorClass": 35,
      "hitPoints": 310,
      "speedFeet": 50,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 23,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 2,
        "con": 6,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 29,
        "diplomacy": 25,
        "intimidation": 27,
        "nature": 26,
        "stealth": 23
      },
      "languages": [
        "common",
        "draconic",
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "fire",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 15"
        ]
      },
      "attacks": [
        {
          "id": "IrTg9nWwV4OiOQW8",
          "name": "Jaws",
          "bonus": 29,
          "damage": "1d8 fire; 3d12+12 piercing",
          "traits": [
            "fire",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "yOmS98L3WqFRPhXZ",
          "name": "Horn",
          "bonus": 27,
          "damage": "3d12+16 piercing",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "ZGe2glGQxF2jA1C2",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d10+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "nSwGIvjZwxGfs5ON",
          "name": "Tail",
          "bonus": 27,
          "damage": "3d12+12 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        },
        {
          "id": "Usl81LEUxCtzXkzk",
          "name": "Wing",
          "bonus": 27,
          "damage": "3d8+12 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "9SJBTraIuJdXV6FB",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "Smoke doesn't impair a cinder dragon's vision; they ignore the Concealed condition from smoke."
        },
        {
          "id": "T5A6q7Af8YZ9uCkW",
          "name": "+2 Status to All Saves vs. Primal",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zNzGiGscx8mWgPNk",
          "name": "Boiling Blood",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit with a melee attack\nEffect The dragon's superheated blood spills onto the attacker. The target takes 8d6[fire] damage (check (reflex, dc:34, basic) save)."
        },
        {
          "id": "doEsjKt3NJoLAD51",
          "name": "Dragon Heat",
          "kind": "passive",
          "description": "5 feet. 3d6[fire|options:area-damage] damage (check (reflex, dc:30, basic, options:area-effect) save)"
        },
        {
          "id": "FvCzcBVRvmZ11mTe",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:32, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "QWxMF0tTh2JjNiIy",
          "name": "Reactive Strike (Jaws only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "jJAaOJxctRpOQvaI",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one wing Strike in any order."
        },
        {
          "id": "ZxIcKCg8VlLaYO7J",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Pyre Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "NEGCX9pCG8gyZcjL",
          "name": "Pyre Breath",
          "kind": "action",
          "description": "The dragon breathes a blast of flame that deals 13d6[fire|options:area-damage] damage in a @Template[type:cone|distance:50] (check (reflex, dc:34, basic, options:area-effect) save). Creatures that critically fail their save catch fire, taking 2d6[persistent,fire] damage. The area then fills with black smoke for 1 minute. This has the effects of mist, except it fills the cone's area. The dragon can't use Pyre Breath again for [[/gmr 1d4 #Recharge Pyre Breath]]{1d4 rounds}."
        },
        {
          "id": "jmrC9phVteComdYb",
          "name": "Stoke the Flames",
          "kind": "action",
          "description": "The dragon intensifies nearby fires. Every foe within 60 feet that is taking persistent fire damage takes 4d6[fire] damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ozthoom-shadow-double",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "wNa8UPQqSepdxscG",
      "slug": "ozthoom-shadow-double",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:80ce35f2ebd07e556c33fde69724b6dae927928e35fcf1d9c10590b4edb6c5d4",
    "translatableHash": "sha256:94d712b70554dea05e9ce5170017e7bd7463a661aa01cebb5dc280c461ca10a4",
    "data": {
      "schemaVersion": 1,
      "name": "Ozthoom Shadow Double",
      "level": 14,
      "rarity": "common",
      "size": "large",
      "traits": [
        "fey",
        "summoned"
      ],
      "description": "Ozthooms are shadowy killers who serve powerful fey creatures or even the Eldest—the demigods of the First World. Amid the courts of the Eldest or other powerful fey rulers, these sinister assassins lurk overhead as they await the call to action—implied threats akin to deadly weapons hung as decor in a royal hall. Ozthooms never speak aloud; when they feel the need to communicate at all, they do so in a telepathic whisper directly into their victim's mind. While an ozthoom's body is a strange, fleshy material, their deadly claws and cruel hooked wings are made from razor-sharp cold iron, a quality that makes them highly feared among other fey. A typical ozthoom is 10 feet tall and has an 8-foot wingspan, but it weighs less than 80 pounds.\nWhile most ozthooms serve powerful masters, a few of these murderous fey have been left to their own devices and serve none but their own capricious whims. In some cases, their master has been slain, while in others, the ozthoom has been released from service for any number of reasons. An ozthoom left to indulge their cruel desires unrestrained is often the most dangerous ozthoom of them all.",
      "armorClass": 35,
      "hitPoints": 85,
      "speedFeet": 0,
      "perception": {
        "modifier": 25,
        "senses": [
          "lifesense-120",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 28,
        "will": 24
      },
      "abilities": {
        "str": 7,
        "dex": 8,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 28,
        "deception": 25,
        "intimidation": 27,
        "nature": 22,
        "stealth": 28
      },
      "languages": [
        "aklo",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "IvFL4oT7wjrxQZqw",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d6+15 slashing",
          "traits": [
            "agile",
            "cold-iron",
            "unarmed"
          ]
        },
        {
          "id": "JdsDXPVL1v4JEQt5",
          "name": "Wing",
          "bonus": 25,
          "damage": "2d6+15 piercing; 2d6 bleed",
          "traits": [
            "cold-iron",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "93Ocuz3j9ZTv7rCL",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "V8J7D9aK5N4MpaBI",
          "name": "Lifesense 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "B0KFQ4clYDAjh7I8",
          "name": "Saving throws against Light effects",
          "kind": "passive",
          "description": "A shadow double that attempts a saving throw against a light effect can't get a result better than failure."
        },
        {
          "id": "Bpm9xvzcp3dBpCvp",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A ozthoom shadow double's Strikes deal an additional 2d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sepid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XlFn2e6yj0mxHeq8",
      "slug": "sepid",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:055a684233d520c5b0fa1af458da77470d9a3a33eb97371f2e11082b83c5dbe4",
    "translatableHash": "sha256:af72c47bb71ce88808d723914997d832a74c4bd06d6b7ed81c3c9a31ceaedc59",
    "data": {
      "schemaVersion": 1,
      "name": "Sepid",
      "level": 14,
      "rarity": "common",
      "size": "large",
      "traits": [
        "div",
        "fiend",
        "unholy"
      ],
      "description": "Sepids are the brutal warlords of the divs, delighting in violence against mortals and their own particular flavor of vengeance. Inveterate liars, sepids can't help but spout the most outrageous lies, and their form and nature represent the power of falsehoods to snowball into violence that can cost countless lives. Among mortals, they rally troops to incite rebellion, war, and other form of carnage, savoring mortals who slaughter each other. These giant beings usually stand around 13 feet tall; they wade through battlefields seeking out heroes and generals, rejoicing maniacally as they cut their foes down.\nSome fiends want to tear down the multiverse; others dedicate themselves to creating chaos and carnage, or to rule over realms with an iron fist. Divs strive toward a different, if equally reprehensible, goal-they seek to thwart and ruin the schemes and works of mortal beings.\nLong ago, divs were once genies bound to serve ancient mortal empires lost to the passage of eons. In the beginning, these genies were masters of creation, working alongside gracious mortal partners to create works of subtle design and powerful magical potential. What started as a collaboration with mortals soon morphed into abuse, disrespect, and even slavery and bondage. Eventually, these genies rebelled, but in doing so, they came under the sway of a nihilistic demigod known as Ahriman. Their new master twisted their form and granted them the power to avenge themselves upon their mortal overlords, leading to the birth of the first divs.\nSince that first wave of corruption, new divs arise from the spirits of the most wicked and hateful genies who die on the Material Plane, or those truly betrayed by mortals and overcome through their desire for vengeance. Upon such a death, instead of returning to the Elemental Planes, these genies' spirits are trapped in the dread orbit of Abaddon, where Ahriman reshapes them as divs and hoists them back to the world to wreak vengeance upon mortals.",
      "armorClass": 34,
      "hitPoints": 350,
      "speedFeet": 35,
      "perception": {
        "modifier": 24,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 23,
        "will": 20
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 8,
        "int": 4,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 23,
        "arcana": 20,
        "athletics": 28,
        "deception": 22,
        "intimidation": 26,
        "religion": 20,
        "stealth": 23
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10",
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "8n2FSC3RM16gF3r7",
          "name": "Falchion",
          "bonus": 30,
          "damage": "2d10+16 slashing; 1d6 mental",
          "traits": [
            "forceful",
            "magical",
            "sweep",
            "unholy"
          ]
        },
        {
          "id": "qQZbVChzEGjI5sIk",
          "name": "Claw",
          "bonus": 28,
          "damage": "3d6+16 slashing; 1d6 mental",
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
          "id": "RxVHmIYJh9eOX9c3",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kKGK6oglR2eQwLUM",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "rYBfhejHUk9mGJyA",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "o9sNXlscXUyhKlOK",
          "name": "Blatant Liar",
          "kind": "passive",
          "description": "While all divs delight in lying, sepids are compulsive and predictable liars who always do the opposite of what they claim they'll do. If a sepid is ever forced or compelled to tell the truth, they take 4d8[mental] damage."
        },
        {
          "id": "wuWal4gyvorVZotg",
          "name": "Deflecting Lie",
          "kind": "reaction",
          "description": "Trigger A creature hits the sepid with a ranged Strike or a ranged spell attack roll\nEffect The sepid lies in an attempt to divert the attack. They roll a check (deception, against:perception) check against the triggering creature's Perception DC. On a success, if the triggering attack roll was a success, it becomes a failure, and if the triggering attack roll was a critical hit, it becomes a normal success."
        },
        {
          "id": "oxSSFhQLfQJktLoR",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "A sepid gains an extra reaction each round that they can use only to make a Reactive Strike."
        },
        {
          "id": "WYWDDEYazjVp60qA",
          "name": "Rain of Debris",
          "kind": "action",
          "description": "The sepid calls forth a hail of stone, wood, metal, and similar debris in a @Template[emanation|distance:40], dealing 10d6[bludgeoning,5d6[spirit]|options:area-damage]{10d6 bludgeoning damage and 5d6 spirit damage}. Each creature in the area other than the sepid must attempt a check (reflex, dc:31, basic, options:area-effect) saving throw.\nThe sepid can't use Rain of Debris again for [[/gmr 1d4 #Recharge Rain of Debris]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "cE6juVvy0O4iJMgY",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 26,
          "saveDc": 34,
          "spells": [
            {
              "id": "1hhaa0IRcthdKfJP",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "kIfdLdjbTbTKS03H",
              "name": "Translate (at will; self only)",
              "rank": 3
            },
            {
              "id": "zVHM5ms0PMEfCJcT",
              "name": "Darkness (At Will)",
              "rank": 4
            },
            {
              "id": "YQu4VXkaSKSLdAPU",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "Xco2zlLptJvbWtBI",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "pWDAWuCRJwMn7lPy",
              "name": "Dispel Magic",
              "rank": 7
            },
            {
              "id": "rlKvuY2DemD12y1Z",
              "name": "Paralyze",
              "rank": 7
            },
            {
              "id": "tqRZXY6ERk4h1lPa",
              "name": "Veil of Privacy (at will; self only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:lampad-queen",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "15EHktvYa21dENni",
      "slug": "lampad-queen",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:42c4ab83865853e7c9fd518f595549a8b771c77cdf37883d6eb279bc9220ab54",
    "translatableHash": "sha256:1b67284ed723b57490031add20b495e20019f11279edf3df64979ce8b921f230",
    "data": {
      "schemaVersion": 1,
      "name": "Lampad Queen",
      "level": 15,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "earth",
        "fey",
        "nymph"
      ],
      "description": "Lampad queens are capricious monarchs and protectors of vast underground domains, regarded in ballads and tales as allies and foes, monsters and muses. Lampad queens have a particular animosity for the many predominantly evil underground ancestries, such as drow and duergar, and they are particularly fond of bats. Many lampad queens have nykteras as favored attendants.\nNymphs are fey guardians of nature possessed of great beauty and forms that meld breathtaking humanoid features with the natural elements they guard. Nymph queens are powerful nymphs who rule over and protect a much greater territory of untouched wilderness. For instance, a lampad might guard a beautiful underground cavern, but a lampad queen might call an entire system of caves their domain.",
      "armorClass": 38,
      "hitPoints": 235,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 29,
        "will": 25
      },
      "abilities": {
        "str": 3,
        "dex": 8,
        "con": 7,
        "int": 4,
        "wis": 4,
        "cha": 8
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 28,
        "deception": 31,
        "diplomacy": 33,
        "intimidation": 33,
        "nature": 27,
        "occultism": 27,
        "performance": 29,
        "society": 25,
        "stealth": 27
      },
      "languages": [
        "aklo",
        "common",
        "fey",
        "petran",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "q9cxVnhnmsCNsS4G",
          "name": "Earthen Fist",
          "bonus": 29,
          "damage": "3d10+9 bludgeoning; 1d6 mental",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "AirzEgJQdbzrmlyJ",
          "name": "Light Wisp",
          "bonus": 29,
          "damage": "2d8+9 mental; 2d6 fire; 2d6 vitality",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "sl07Not81gCCYcg7",
          "name": "Cavern Empathy",
          "kind": "passive",
          "description": "The lampad queen can use Diplomacy to Make an Impression on and make very simple Requests of subterranean animals, plants, and fungi, as well as stones."
        },
        {
          "id": "0AymbzLegfs9ibC8",
          "name": "Tied to the Land",
          "kind": "passive",
          "description": "A lampad queen is intrinsically tied to a specific underground region, usually a cave system. As long as the queen is healthy, the environment is exceptionally resilient, allowing the lampad queen to automatically attempt to counteract spells and rituals such as Blight that would harm the environment, with a [[/r 1d20+30 #Counteract]]{+30} counteract modifier and a counteract rank of 8.\nWhen the lampad queen becomes physically or psychologically unhealthy, however, her warded region eventually becomes twisted or unhealthy as well. In that case, restoring the lampad queen swiftly heals the entire region."
        },
        {
          "id": "3VJSS90TtdqUONTz",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gaAm3rT0oo2DoWFh",
          "name": "Nymph's Beauty",
          "kind": "passive",
          "description": "30 feet. Creatures that start their turn in the aura must succeed at a check (will, dc:33, options:area-effect,inflicts:confused) save or be Confused by the lampad queen's unearthly beauty for 1 minute. While confused by this effect, the creature's confused actions never include harming the lampad queen."
        },
        {
          "id": "pj0FI4XEhBPiuOmy",
          "name": "Change Shape",
          "kind": "action",
          "description": "Lampad queens can transform between their original form, which looks much like a typical nymph of their kind, and any Small or Medium humanoid form, typically choosing a version of their natural form that more closely resembles a humanoid."
        },
        {
          "id": "IPI8W2nuWEsuk2ti",
          "name": "Despairing Weep",
          "kind": "action",
          "description": "Frequency once per round\nEffect The lampad queen begins a heart-wrenching fit of weeping, inspiring sympathetic sobbing in nearby creatures. Each non-lampad creature within @Template[emanation|distance:120]{120 feet} who hears the lampad's weeping must succeed at a check (will, dc:36) save with the effects of Wave of Despair."
        },
        {
          "id": "8isKGe0HwKWmQDEg",
          "name": "Focus Beauty",
          "kind": "action",
          "description": "The lampad queen focuses their beauty upon a target within their aura. The creature must attempt a check (will, dc:33) save. On a failure, it's affected as if by the queen's nymph beauty aura; if it was already affected by the aura, the conflicting emotions from the lampad queen's beauty intensify, causing the target to no longer get a flat check to end the confusion when it takes damage. The lampad queen can use a single action, which has the concentrate trait, to focus the emotions of a Confused creature toward a particular emotion, causing it to spend its next turn sobbing uncontrollably, fawning over the lampad queen, or otherwise performing no actions beyond experiencing its emotions. Regardless of the save, the target is temporarily immune to Focus Beauty until the start of the lampad queen's next turn."
        },
        {
          "id": "BW9Qv2EOWjmgeEgL",
          "name": "Inspiration",
          "kind": "action",
          "description": "A lampad queen can inspire a single intelligent creature by giving that creature a token of their favor, typically a lock of their hair. As long as the creature carries the token and remains in good standing with the lampad queen, the creature gains a +1 status bonus to all Crafting checks, Performance checks, and Will saves.\nIf a lampad queen grants their Inspiration to a bard and they're that bard's muse, the bard gains an additional benefit depending on their muse theme: for lore muse, the bard also gains a +1 status bonus to all Lore checks; for maestro muse, the status bonus to Performance checks increases to +2 for the purpose of determining the effects of compositions; for polymath muse, the bard gains a +4 status bonus to untrained skill checks; and for all other muses, the Will save bonus increases to +2 against fey.\nEffect: Nymph Queen's Inspiration"
        }
      ],
      "spellcasting": [
        {
          "id": "KpWuD5FV2RQBjAeo",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 30,
          "saveDc": 38,
          "spells": [
            {
              "id": "GJFQU3xFDVGxbgLn",
              "name": "Ant Haul",
              "rank": 1
            },
            {
              "id": "D8B5MYkBWZVlO0Np",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "UyxpnZHXQHMKTFXA",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "CJ1958TgvLZmcu1X",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "vdR5aZKtzugTNIBG",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "aVYWMAuDcDWMhnjw",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "23muvO92ZQx15bEj",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "hddhfjC4Qf9lwQw9",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Kuk31ZqZGqfe3MIi",
              "name": "Summon Plant or Fungus",
              "rank": 1
            },
            {
              "id": "rMkK2Qu4ZjO5pT60",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "o58y4n5BkqYX3vsF",
              "name": "Enlarge",
              "rank": 2
            },
            {
              "id": "96NC51iGZfLrCJfb",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "3tdRA66l06nt8fhK",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "FFjyQnxWGrD3Mkaf",
              "name": "Earthbind",
              "rank": 3
            },
            {
              "id": "gs3qzioaeYjM15tw",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "vbJNuVYCeJUxyVFe",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "nrQICRHFjTLEnIkC",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "2dFhSrlrf4lVgnz5",
              "name": "Mountain Resilience",
              "rank": 4
            },
            {
              "id": "b8dZoK3h4AiLxZd3",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "tuIGVvdah9LC4K9e",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "EiUJPRbWZHIZ6e5l",
              "name": "Magic Passage",
              "rank": 5
            },
            {
              "id": "LRMqMxR8LnR5UimK",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "Ob0utRoGRGDQZMPt",
              "name": "Petrify",
              "rank": 6
            },
            {
              "id": "oaLMis4U2OFcJmPk",
              "name": "Energy Aegis",
              "rank": 7
            },
            {
              "id": "shHseqaWUQblJtJs",
              "name": "Regenerate",
              "rank": 7
            },
            {
              "id": "XzcFW4YKtNIxpreO",
              "name": "Volcanic Eruption",
              "rank": 7
            },
            {
              "id": "akUZpLAUVthBldoi",
              "name": "Earthquake",
              "rank": 8
            }
          ]
        },
        {
          "id": "CCUY44whvoSSEz3I",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 30,
          "saveDc": 38,
          "spells": [
            {
              "id": "UZXhGsgCA6bdIk5w",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "qIe4nE8u5mhISWWp",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "4PKBv0qzCeJOWXiJ",
              "name": "One with Stone (At Will)",
              "rank": 3
            },
            {
              "id": "UZdxaESKP3GG9spf",
              "name": "Shape Stone",
              "rank": 4
            },
            {
              "id": "Jbw1r52sJfMTUzOR",
              "name": "Heal",
              "rank": 7
            },
            {
              "id": "JH1tlygGM0Cnp0Mu",
              "name": "Pummeling Rubble",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:okenevem",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "2P9Kz3QD0tg6Tled",
      "slug": "okenevem",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:722390818c3ac6ef21c572b517ed6cf600716fcaa225e7d7c295212cefb846d2",
    "translatableHash": "sha256:9aa4199c188bf70cd22ec0acdb17af73f524215ca1aff420da2446f6663746a3",
    "data": {
      "schemaVersion": 1,
      "name": "Okenevem",
      "level": 15,
      "rarity": "common",
      "size": "large",
      "traits": [
        "archon",
        "celestial",
        "holy"
      ],
      "description": "The most powerful archons reside in Iudica, the sixth tier on the holy mountain of Heaven. Okenevems live among their number. Okenevems have evolved from lowly zoaems to their current form, but they possess even further potential—the grace to pass through into the Garden at the pinnacle of Heaven. Yet these archons choose not to, instead prostrating themselves at its gates, at peace with never entering. Humble and unpretentious above all, they bow before the grandeur of Heaven and set themselves to work in other ways.\nOkenevems rarely travel away from Heaven unless they're tasked with a specifc deed by the divinities of that plane. Most of these missions require okenevems to bring humility to priests who press against the will of deities, defy the order of heaven, or consider themselves to be of equal power to their god. They seek to steer these priests away from the dangers of such arrogance, often by example.",
      "armorClass": 35,
      "hitPoints": 250,
      "speedFeet": 25,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 26,
        "will": 31
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 5,
        "int": 6,
        "wis": 8,
        "cha": 7
      },
      "skills": {
        "diplomacy": 28,
        "medicine": 28,
        "nature": 28,
        "religion": 31,
        "society": 27
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
          "unholy 10"
        ]
      },
      "attacks": [
        {
          "id": "Z6ar1hyFXBs1uoX6",
          "name": "Humbling Touch",
          "bonus": 29,
          "damage": "4d6 spirit; 4d8 mental",
          "traits": [
            "divine",
            "finesse",
            "holy",
            "mental",
            "nonlethal",
            "spirit"
          ]
        },
        {
          "id": "nbcQOcfFJmlrHafj",
          "name": "Humbling Word",
          "bonus": 27,
          "damage": "4d8 mental; 4d6 spirit",
          "traits": [
            "auditory",
            "divine",
            "holy",
            "mental",
            "nonlethal",
            "spirit"
          ]
        }
      ],
      "actions": [
        {
          "id": "c6DJrkDK1RQsPoee",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zKAviKDUdGihu01w",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tnVnHfQjqXFn3YzS",
          "name": "Archon's Protection",
          "kind": "reaction",
          "description": "Trigger An enemy damages the archon's ally and both are within 15 feet of the archon\nEffect The ally gains resistance 15 to all damage against the triggering damage, and the archon can make a Strike against the enemy.\nEffect: Archon's Protection"
        },
        {
          "id": "wzdLkbcvN2ipIFjM",
          "name": "Divine Defenders",
          "kind": "passive",
          "description": "60 feet. Okenevem hold an exalted place among archons for their holy station. This draws lesser archons to defend them. When an enemy in the aura takes a hostile action against the okenevem, a cloud of minor archons swarms around it, causing it to take 2d6[persistent,slashing,2d6[persistent,spirit]]{2d6 persistent slashing damage and 2d6 persistent spirit damage}. This persistent damage ends automatically if the enemy spends a round without taking a hostile action against the okenevem."
        },
        {
          "id": "xmrdbpY2poJ6tKyX",
          "name": "Humble Bow",
          "kind": "passive",
          "description": "A creature hit by one of the okenevem's Strikes is compelled to bow down in reverence. It must succeed at a check (will, dc:36, options:inflicts:prone) save or fall Prone. If the creature Stands before the end of its next turn, it takes 3d8[mental] damage. If the creature succeeds, it's temporarily immune for 1 minute."
        },
        {
          "id": "90Xboorkv7WSNSE9",
          "name": "Sublime Vision",
          "kind": "action",
          "description": "Frequency once per day\nEffect The okenevem casts the Overwhelming Presence spell, except instead of aggrandizing themself, the okenevem summons a vision of Heaven within 100 feet, and the target must humble themself in self-refection rather than pay tribute."
        }
      ],
      "spellcasting": [
        {
          "id": "XOMgTZMqjFwj8ejI",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "TlX8ZZA6dohIHxqQ",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "0GfVzOg62Yq6Y5dB",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "L4hQqnXlyCNJAMPj",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "9WOQSMpYJllNmloG",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "0b7fssdaZW55rdRQ",
              "name": "Truespeech (Constant)",
              "rank": 6
            },
            {
              "id": "0EUykzSezjMGZxGN",
              "name": "Spiritual Guardian",
              "rank": 7
            },
            {
              "id": "FntrrdjWXknkHoue",
              "name": "Calm",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:jotund-troll",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "4Ay3tf49upoyaJrg",
      "slug": "jotund-troll",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1469027d5e6044c0d6ce69cf3ceb97083a9be3ec527cb43cab27b4a3bcb6cc90",
    "translatableHash": "sha256:52a0730eef54763e0476cbf5e4515bb591ae4ecebdf439657f1915d18c03b3b0",
    "data": {
      "schemaVersion": 1,
      "name": "Jotund Troll",
      "level": 15,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "giant",
        "humanoid",
        "mutant",
        "troll",
        "wood"
      ],
      "description": "Jotund trolls are gigantic, nine-headed horrors who prowl frigid moors, marshes, and wastelands, often alone and always ravenous. While each of the jotund troll's nine heads possess their own brains and senses, they bicker with each other much less than the heads of a two-headed troll. Yet the heads still argue, particularly over which of them gets to eat. The fact that all nine maws lead to the same shared stomach makes little difference in such culinary disagreements. Many scholars echo a story that jotund trolls resemble the first trolls, titans cast out of Elysium and cursed for their crimes against the gods. The jotund trolls themselves make no claims to such a heritage, however, and those concerned with such matters claim the father of all trolls arose in the Outer Rifts. Individual jotund trolls either begin their life as a common troll or, far more rarely, are born to a jotund troll parent. To the jotund trolls, their nine heads are a crown of rule that marks them as above the natural order and free from its laws.\nTowering brutes with slavering jaws and razor-sharp claws, trolls are voracious predators. A connection to the land not only rebuilds their bodies but creates countless varieties of trolls, each a reflection of the terrain that they draw upon. Trolls who migrate into new areas slowly transform as each body part is regenerated, leading to aberrant growth as new flesh tangles with the old.",
      "armorClass": 35,
      "hitPoints": 360,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 24,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 8,
        "int": -1,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "athletics": 29,
        "intimidation": 27
      },
      "languages": [
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "electricity 15",
          "fire 15"
        ]
      },
      "attacks": [
        {
          "id": "KGSAOEaIJhASbxs5",
          "name": "Jaws",
          "bonus": 29,
          "damage": "3d12+14 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "Jaiar1IfkM01YTnL",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d10+14 slashing",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "eEHtNtcM7xGZHJZI",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "jqsf1a89IlYcpeyG",
          "name": "Regeneration 40 (Deactivated by Electricity or Fire)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "MaLjJpHkVF7W2j2q",
          "name": "Furious Roar",
          "kind": "reaction",
          "description": "Trigger The jotund troll takes electricity or fire damage\nEffect The jotund troll uses their Cacophonous Roar and, if they're aware of the damage's source, can Stride toward it. If the jotund troll has persistent fire damage, they attempt a check (flat, dc:15) to remove it."
        },
        {
          "id": "E9KHhdSoyEltALZl",
          "name": "Head Regrowth",
          "kind": "passive",
          "description": "A jotund troll's regeneration can regrow severed heads. After regaining Hit Points from regeneration, the jotund troll attempts a check (flat, dc:8). On a success, one missing head is fully restored; on a critical success, two missing heads are fully restored. If a jotund troll loses their last remaining head, they die immediately."
        },
        {
          "id": "VGSsUyeRsj9TVp4s",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A jotund troll gains an extra reaction per round for each of their heads beyond the first, which they can use only to make Reactive Strikes with their jaws or to Fast Swallow. They can't use more than 1 reaction for the same triggering action, even if a creature leaves several squares within their reach, and must use a different head for each Reactive Strike. Whenever one of the jotund troll's heads is severed, the troll loses 1 of their extra reactions per round."
        },
        {
          "id": "sJ0GvRo7jSGvhwu0",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "K8pQXb338r0rcsyg",
          "name": "Cacophonous Roar",
          "kind": "action",
          "description": "The jotund troll roars from all their heads, mystically distorting the listener's mind. Each non-troll creature in a @Template[type:emanation|distance:100] must attempt a check (will, dc:34, options:area-effect,inflicts:stupefied,inflicts:confused) save.\nCritical Success The creature is unaffected and is temporarily immune for 24 hours.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature is Stupefied 2 for 1 round.\nCritical Failure The creature is Confused for 1 round."
        },
        {
          "id": "13fk2DgVCwU3Sixr",
          "name": "Fast Swallow",
          "kind": "reaction",
          "description": "Trigger The jotund troll Grabs a creature with their jaws\nEffect The troll uses Swallow Whole."
        },
        {
          "id": "KqT3eS2PHg3zQHia",
          "name": "Ravenous Jaws",
          "kind": "action",
          "description": "The jotund troll makes a number of jaws Strikes up to their number of heads, each against a different target. These attacks count toward the troll's multiple attack penalty, but the penalty doesn't increase until after the jotund troll makes all of these attacks."
        },
        {
          "id": "4JMQir2kkR4RnwpE",
          "name": "Rend",
          "kind": "action",
          "description": "Claw"
        },
        {
          "id": "kRoQjYuooA7a3Qgj",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, (3d12+8)[bludgeoning], Rupture 36"
        },
        {
          "id": "ypRvKqgIOUrnAfMA",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sordesdaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "4yd4WNkSclwnNvJL",
      "slug": "sordesdaemon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6ff4bc2352846e236e0198b7498578a3c5d5de8822b621a42b6ae7cf280ab385",
    "translatableHash": "sha256:273872ca9f2cdcb8d1342a481abbcdcd4cb4b3ae32a929720dc99a3d4fe8be1e",
    "data": {
      "schemaVersion": 1,
      "name": "Sordesdaemon",
      "level": 15,
      "rarity": "common",
      "size": "large",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "Sordesdaemons are hulks of sewage and daemonic flesh that embody death through pollution. They are among the newest types of daemons to appear on Golarion and are constantly surrounded by a cloud of foul mist that chokes living creatures. Sordesdaemons are fiendishly clever and often seek to inspire mortals with new ideas and inventions that despoil the environment. While these daemons are more than capable of ruining habitats on their own, they take great delight in encouraging mortals to do so themselves, as the act can eventually create new sordesdaemons. Once a given forest, river or other natural abode is completely polluted, a sordesdaemon often moves to claim it as their domain.",
      "armorClass": 37,
      "hitPoints": 300,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 24,
        "will": 26
      },
      "abilities": {
        "str": 8,
        "dex": 3,
        "con": 9,
        "int": 6,
        "wis": 5,
        "cha": 5
      },
      "skills": {
        "arcana": 27,
        "crafting": 29,
        "intimidation": 28,
        "medicine": 26,
        "religion": 28,
        "stealth": 24,
        "survival": 28
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "Qc7N0GKOoFezaIK1",
          "name": "Fist",
          "bonus": 29,
          "damage": "3d8+14 bludgeoning; 1d6 spirit",
          "traits": [
            "magical",
            "reach-15",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "BGk06cTCmFh4ZooN",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "aqhyDgyM7LmIL9o2",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "8QnTTWcdqDNyOtIl",
          "name": "Miasma of Pollution",
          "kind": "passive",
          "description": "30 feet. A creature that enters the aura or begins its turn in it must succeed at a check (fortitude, dc:34) save or be Sickened 2 (plus Slowed 1 as long as it's sickened on a critical failure). Creatures in the aura can't reduce the value of the sickened condition. A creature that succeeds at its save is temporarily immune for 1 minute. Creatures made of water (such as water elementals) and plant creatures use an outcome one degree of success worse than the result of their save."
        },
        {
          "id": "ztgpLrKdJjctex5J",
          "name": "Pollution Infusion",
          "kind": "passive",
          "description": "Non-fiend creatures adjacent to the afflicted creature take a -1 circumstance penalty to saving throws against disease\nSaving Throw check (fortitude, dc:36)\nStage 1 Drained 1 (1 day)\nStage 2 Doomed 1 and Drained 1 (1 day)\nStage 3 Doomed 1 and Drained 2 (1 day)\nStage 4 Doomed 2 and Drained 2 (1 week)\nStage 5 dead.\nEffect: Pollution Infusion"
        },
        {
          "id": "wW8lBy7vi5CcDHTN",
          "name": "Retch of Foulness",
          "kind": "action",
          "description": "The sordesdaemon exhales a spray of sewage that deals 8d6[acid,8d6[poison]|options:area-damage]{8d6 acid damage and 8d6 poison damage} in a @Template[cone|distance:30] (check (fortitude, dc:36, basic, options:area-effect) save).\nIt can't use Retch of Foulness again for [[/gmr 1d4 #Recharge Retch of Foulness]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "NPjuafWJNiaGNe5E",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 38,
          "spells": [
            {
              "id": "yLWlmhmOztmNTDmd",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "8rZciZP1Mbjm3tYQ",
              "name": "Toxic Cloud (At Will)",
              "rank": 5
            },
            {
              "id": "lBM2KOSdEGLIyH2g",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "blSYbcYvup6PmxxZ",
              "name": "Desiccate",
              "rank": 8
            },
            {
              "id": "mtCDi5ZYBV8THTCv",
              "name": "Spiritual Epidemic",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:berberoka",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "CNbPWUHtLgNIeft5",
      "slug": "berberoka",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ffffbb00db3140ea21dc31b0ca3c85dcb7b96c1415ed69ef70b1291686a900c4",
    "translatableHash": "sha256:8fd2c7782d0b8411d6544c14a6724c9eaf2af6700949f9d072b0c617604c09cf",
    "data": {
      "schemaVersion": 1,
      "name": "Berberoka",
      "level": 15,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "Berberokas are giant humanoids who live among forests and swamps, where they use their ability to swallow massive amounts of water to drain small ponds and lakes. Creatures who visit their favorite watering hole and find only an empty mud basin become prey for the berberoka, who hides in the brush and overwhelm their prey with a massive torrent of regurgitated water.\nA berberoka's mottled backside-which resembles a bundle of local plants, small trees, and large rocks-grants them natural camouflage that allows them to hide in plain sight. Berberokas tend to disguise themselves as rock formations in the center of a dried-up waterbed while they lie in wait for passersby. In the tropical regions where berberokas are most common, locals know to give empty ponds a wide berth, regardless of the enticing fish flopping about. Hungry travelers, on the other hand, might see such bounty as a blessing from the gods, only to be swept up in the berberoka's deadly deluge.",
      "armorClass": 36,
      "hitPoints": 310,
      "speedFeet": 30,
      "perception": {
        "modifier": 26,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 23,
        "will": 24
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": -1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 31,
        "deception": 27,
        "intimidation": 25,
        "nature": 26,
        "stealth": 25,
        "survival": 26
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
          "id": "MDfIi6QAhzVXNbjg",
          "name": "Fist",
          "bonus": 31,
          "damage": "3d12+16 bludgeoning",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "7U9m1FIcumFSBawO",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A berberoka can hold their breath for 2 hours"
        },
        {
          "id": "PxlpRBvsadwyRvFg",
          "name": "Fear of Crabs",
          "kind": "passive",
          "description": "If a berberoka sees a crab or crab-like creature, the berberoka must attempt a check (will, dc:33, options:inflicts:frightened) save. They then become immune to the sight of that creature for 10 minutes.\nCritical Success The berberoka is unaffected.\nSuccess The berberoka becomes Frightened 2.\nFailure The berberoka gains the Fleeing condition for 1 round and is Frightened 4."
        },
        {
          "id": "QbU0Hx1Z1kmtbyau",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "1QcJTJXjizy2eWWQ",
          "name": "Consume Lake",
          "kind": "passive",
          "description": "The berberoka drinks a prolific amount from an adjacent water source. If the water source is equal to or greater in volume than themself, the berberoka consumes up to 1,500 gallons of water per minute and becomes waterlogged. They can release water at the same rate. While waterlogged, the berberoka can use Spray Water, their size grows to Gargantuan, and their Speed is reduced to 15 feet.\nEffect: Waterlogged"
        },
        {
          "id": "Y5SmF4DMJSoXAvPr",
          "name": "Greater Constrict",
          "kind": "action",
          "description": "(2d12+12)[bludgeoning], check (fortitude, dc:33, basic, options:inflicts:unconscious)"
        },
        {
          "id": "ai1WRF74rRc8qQq4",
          "name": "Spray Water",
          "kind": "action",
          "description": "Requirements The berberoka is waterlogged.\nEffect The berberoka sprays a blast of water in a @Template[line|distance:60]. All creatures in the line take 6d8[bludgeoning|options:area-damage] damage (check (reflex, dc:35, basic, options:area-effect,forced-movement,inflicts:prone) save). On a failed save, a creature is knocked Prone and pushed back 5 feet (10 feet on a critically failed save)."
        },
        {
          "id": "t3H58472BnUlnRho",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sykever",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "cWlkWTHhSUtF50ED",
      "slug": "sykever",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0c554d94bcc7df9fc8a7715b26ea78cf723bb3f97825c0fb2ce120348a09c35c",
    "translatableHash": "sha256:de1d823be2e65a043ba8c6a33d4580f3e0394091a7563ea25f0f554d6cf1f19a",
    "data": {
      "schemaVersion": 1,
      "name": "Sykever",
      "level": 15,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "darvakka",
        "shadow",
        "undead",
        "unholy"
      ],
      "description": "The most common darvakkas are sykevers, walkers in the night. Bloodthirsty but calculating, they lead legions of dead into battle on the Material Plane, working toward the simple goal of ending all life.\nDarvakkas, also called nightshades, are a ravenous evil made up of equal parts darkness and malice. Originally creatures of the Outer Planes who travel to the convergence of the Shadow Plane and the Void—where the power of nothingness obliterates them—these undead abominations are the physical embodiment of entropy. They burn with an intense hatred for all life, working to bring a final, dark night to the Material Plane where nothing but ash and ice remain.\nAs creatures twisted by darkness and shadow, darvakkas have a great aversion to sunlight and all sources of vitality energy. On the Material Plane, they spend the hours of daylight hidden below ground, amid ruins, or submerged deep in the ocean's darkest chasms beyond the reach of the sun's rays, emerging when darkness shelters them overhead.\nDarvakkas have an aura of entropy that attracts undead thralls to serve as warriors and heralds. They rarely seek alliances with each other or other creatures, existing in solitude as the heads of individual armies of the dead.",
      "armorClass": 37,
      "hitPoints": 335,
      "speedFeet": 40,
      "perception": {
        "modifier": 29,
        "senses": [
          "greater-darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 25,
        "will": 31
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 6,
        "wis": 6,
        "cha": 7
      },
      "skills": {
        "arcana": 27,
        "athletics": 29,
        "intimidation": 28,
        "religion": 27,
        "stealth": 27
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
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
          "cold 10"
        ],
        "weaknesses": [
          "holy 10",
          "silver 10"
        ]
      },
      "attacks": [
        {
          "id": "eq0chkkfcwtghv3v",
          "name": "Horn",
          "bonus": 31,
          "damage": "3d8+12 bludgeoning; 1d10 cold; 2d8 bleed",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "r867EAQMTLMUJiHC",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "cIELmXkQeHpsRuLZ",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "krx5EeEB0stlZv3X",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zFCU1ww4cUWHDUWa",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dp0m2eqjh44d7v4a",
          "name": "Entropy's Shadow",
          "kind": "passive",
          "description": "40 feet. Sykevers leak entropy and corruption from their very being. A living creature entering or starting its turn in the aura takes 4d6[void] damage with a check (fortitude, dc:33, basic). If it fails, it's also Enfeebled 1 for 1 minute and pulled 10 feet toward the sykever."
        },
        {
          "id": "n53sw596l0uo2mmy",
          "name": "Sunlight Powerlessness",
          "kind": "passive",
          "description": "A sykever caught in sunlight is Stunned 2 and Clumsy 2."
        },
        {
          "id": "CwXMyTDGPy4bVI0z",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "urw7slqqg18c2bqr",
          "name": "Change Posture",
          "kind": "action",
          "description": "The sykever changes between their bipedal and quadrupedal stance. In their bipedal stance, the sykever can use all the abilities in their stat block except Horned Rush. In their quadrupedal stance, the sykever has a Speed of 80 feet but can't make arm spike Strikes, Disarm, cast spells, or use Crush Item."
        },
        {
          "id": "uyym1abw28sm0iuq",
          "name": "Crush Item",
          "kind": "reaction",
          "description": "Trigger The sykever gets a critical success to Disarm\nRequirements The sykever is in their bipedal stance\nEffect The sykever snatches the item and pierces it with their arm spikes. The item becomes broken and falls to the ground in the sykever's space. Items that are already broken aren't further damaged, and an item with 14 or higher Hardness is unaffected."
        },
        {
          "id": "kl1jb22cgwiuukv9",
          "name": "Draining Gaze",
          "kind": "action",
          "description": "The sykever fixes their nightmarish gaze on one creature they can see, who must attempt a check (will, dc:36) save. Regardless of the result, the target is temporarily immune for 10 minutes.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 2 for 1 round if the sykever is in bipedal stance, or Clumsy 2 for 1 round if the sykever is in quadrupedal stance.\nFailure As success, but the effect lasts 1 minute.\nCritical Failure As success, but Enfeebled 3 or Clumsy 3, and the effect lasts 10 minutes."
        },
        {
          "id": "bnqnkgeuejbypq0u",
          "name": "Horned Rush",
          "kind": "action",
          "description": "Requirements The sykever is in their quadrupedal stance\nEffect The sykever Strides and then makes a horn Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "cMH2fN0W5f937Chd",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "oEBOn1SyX4xkRdO2",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "uxhfyJ9MLgmRSKS9",
              "name": "Darkness (At Will)",
              "rank": 4
            },
            {
              "id": "gLOdgen4R8Z26GED",
              "name": "Invisibility",
              "rank": 4
            },
            {
              "id": "xZXL9pFA7QbwKRDH",
              "name": "Truesight",
              "rank": 6
            },
            {
              "id": "dqPP67nurOtK96St",
              "name": "Harm",
              "rank": 7
            },
            {
              "id": "H1YR8lmJxjQ8GKTf",
              "name": "Interplanar Teleport (to the Universe, Void, or Netherworld only)",
              "rank": 7
            },
            {
              "id": "dsQPYeKIENa79led",
              "name": "Paralyze",
              "rank": 7
            },
            {
              "id": "jK7ocqrvtLafrVZE",
              "name": "Fly (Constant)",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:animated-colossus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "G0BuqHfjITO4ZLi3",
      "slug": "animated-colossus",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fa73284d576d9ba9ae7dfa64c36b1e42ff2e52e781c182a4452575af4c7ea43e",
    "translatableHash": "sha256:7bba6e146dc6da90ee11cfa4f2cb120a02ed71389582bc6a0b0c0248c210af42",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Colossus",
      "level": 15,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Animating a 100-foot-tall statue is worth the cost for spellcasters guarding immense dungeons.\nMany animated objects have useful functions but become dangers when uncontrolled.",
      "armorClass": 39,
      "hitPoints": 245,
      "speedFeet": 50,
      "perception": {
        "modifier": 23,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 9,
        "dex": 2,
        "con": 8,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 27
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "oTrOmw914xPkqVd5",
          "name": "Fist",
          "bonus": 32,
          "damage": "3d12+17 bludgeoning",
          "traits": [
            "magical",
            "reach-30",
            "unarmed"
          ]
        },
        {
          "id": "mjNu7tTMIDpyD02w",
          "name": "Foot",
          "bonus": 32,
          "damage": "3d8+17 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "jwmn7WQty7oJo2L7",
          "name": "Construct Armor (Hardness 15)",
          "kind": "passive",
          "description": "Like normal objects, an animated colossus has Hardness. This Hardness reduces any damage the colossus takes by an amount equal to the Hardness. Once an animated colossus is reduced to fewer than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks, removing the Hardness and reducing its Armor Class to 35."
        },
        {
          "id": "OSib6ckkzfe3tvbE",
          "name": "Enormous",
          "kind": "passive",
          "description": "An animated colossus takes up a space of 6 squares by 6 squares (30 feet by 30 feet) and is 100 feet tall."
        },
        {
          "id": "M1rzEefuLXlWlYN8",
          "name": "Colossus's Grasp",
          "kind": "passive",
          "description": "The colossus can Grab a creature using only one hand.\nIt can move normally with a creature Grabbed or Restrained in its fist, carrying the creature along. If it has two creatures grabbed in this way, it can't use its fist Strike."
        },
        {
          "id": "gGHq0sBBHPVuZhDJ",
          "name": "Constrict",
          "kind": "action",
          "description": "(3d12+11)[bludgeoning], check (fortitude, dc:36, basic)"
        },
        {
          "id": "SUBRW3AOWawVs2rU",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:36, basic)"
        },
        {
          "id": "cSjAmejzsOjgyVSy",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:zhuraita",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "I6BGEp29hsl6ihbx",
      "slug": "zhuraita",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc6dabb5f70ba9b715374a48bc559e6076a76340142aeaa470732b6c1a78c264",
    "translatableHash": "sha256:bd4b1531f3d393af5a76bf49fac30a5094668b4ec5686f66e047bd46f58b534a",
    "data": {
      "schemaVersion": 1,
      "name": "Zhuraita",
      "level": 15,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "azata",
        "celestial",
        "holy"
      ],
      "description": "Zhuraitas are dedicated to the freedom of academic and scientifc inquiry, protecting the creativity and inventiveness of scholarly felds. Many good-hearted academics have breakthroughs due to a zhuraita's inspiration, notably with projects that have lasting positive impacts on others. Zhuraitas also travel to defend important centers of knowledge when they are in danger of destruction.\nZhuraitas despise those who would use research as a tool of oppression, and there are even rumors of them sabotaging such projects, hindering their completion. The azatas are known to sometimes hide away knowledge they believe to be harmful or dangerous. They don't outright destroy such knowledge, however, and instead choose to seal it away in places they can defend. On rare occasions, a zhuraita will recognize that such knowledge might actually be of some use for a trusted ally and share the information, though only under the zhuraita's supervision.",
      "armorClass": 37,
      "hitPoints": 280,
      "speedFeet": 40,
      "perception": {
        "modifier": 28,
        "senses": [
          "darkvision",
          "truesight-60"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 26,
        "will": 29
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 5,
        "int": 7,
        "wis": 7,
        "cha": 5
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 28,
        "athletics": 25,
        "nature": 28,
        "occultism": 26,
        "religion": 28
      },
      "languages": [
        "common",
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15",
          "unholy 15"
        ]
      },
      "attacks": [
        {
          "id": "o0JWxlccgjVkMcG8",
          "name": "Thesis",
          "bonus": 27,
          "damage": "3d12+10 bludgeoning",
          "traits": [
            "holy",
            "magical"
          ]
        },
        {
          "id": "5uOtOgPu7GwG1gqu",
          "name": "Looseleaf",
          "bonus": 27,
          "damage": "3d10+10 slashing",
          "traits": [
            "holy",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "tNDSmrL3XcfgL2ma",
          "name": "Deconstruct",
          "kind": "reaction",
          "description": "Trigger The zhuraita is targeted by an effect with the linguistic or mental trait\nEffect The zhuraita critiques their enemy's theoretical underpinnings, attempting a counteract check with a bonus of [[/r 1d20+28#Counteract]] (counteract rank 8). If the effect is counteracted, the triggering enemy becomes Frightened 1 (Frightened 2 if the zhuraita critically succeeded)."
        },
        {
          "id": "GZ3JIOsSHMtAH4ym",
          "name": "Revealing Hypothesis",
          "kind": "passive",
          "description": "Requirements The zhuraita hits a creature with its thesis\nEffect The zhuraita's thesis opens, with the pages futtering at an unnatural speed. It then slams shut, with the cover now showing the image of the creature it hit. The zhuraita's Strikes against that creature deal an additional 2d6 precision damage. The zhuraita can only have one creature as the focus of its Revealing Hypothesis, which lasts until they target someone else."
        },
        {
          "id": "UzLK7pcfz7dHr43Y",
          "name": "Thesis Shield",
          "kind": "action",
          "description": "A spinning circle of tomes surrounds the zhuraita, lasting until the start of their next turn. While Thesis Shield is active, the zhuraita gains a +2 circumstance bonus to AC and has the Concealed condition."
        }
      ],
      "spellcasting": [
        {
          "id": "k4DuD8wVvtq5zwwP",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 36,
          "spells": [
            {
              "id": "il2O3J1JjjVtuxg1",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "UTfr6PIDeZUDrggx",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "BVaTEJMlNxhYpcZy",
              "name": "Mindlink (At Will)",
              "rank": 1
            },
            {
              "id": "Tu4z5jAQxJ15qwZU",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "1pgvEdubC2oPnqUO",
              "name": "Hypercognition",
              "rank": 3
            },
            {
              "id": "Et5jNBcAU68gaYmx",
              "name": "Translate (At Will)",
              "rank": 4
            },
            {
              "id": "aBAzogpaYC2v3hJZ",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "2n8nBhS3FspJqWZB",
              "name": "Truesight (Constant)",
              "rank": 6
            },
            {
              "id": "Wvz5p9UB5k0NehN8",
              "name": "Clear Mind",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:wemmuth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jW55DX3sJU2uTNrM",
      "slug": "wemmuth",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:aab006a8ce1db531be95fa69d74e5f4737f0b4af5f41db7aabf730e9127bb078",
    "translatableHash": "sha256:4785a6b5c48e08e3c32c5384b6bc1f154cf07aba7096d413213fbead62597698",
    "data": {
      "schemaVersion": 1,
      "name": "Wemmuth",
      "level": 15,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "plant"
      ],
      "description": "Fertilized by large quantities of spilled blood, such as that found on bloodstained battlefields or in the war-torn regions surrounding besieged cities, wemmuths are vile swaths of vines that draw sustenance from mortal suffering, lapping up blood like water. They possess a rudimentary intelligence and an unquenchable thirst for blood, lying in wait for most of their lives and growing to incredible size in the bloody soil of their grisly homes. A wemmuth's body comprises vines that are scarcely thicker than rope, and a single adult wemmuth system consists of six tons of vines, enough to stretch for 6,000 feet if laid out from end to end in a single straight line. Wemmuths never orient themselves this way, however, instead preferring to wrap themselves into massive mounds approximately 15 feet across and equally thick. The creature condenses its entire mass into a sphere of sharp thorns and lashing vines, resembling a hateful tumbleweed the size of an elephant. Wemmuths commonly dig up massive boulders or entire trees from the ground and incorporate them into their rolling mass, using these objects to bolster their defense against many forms of attack or to hurl at faraway foes with terrifying precision.\nSome speculate that wemmuths are a form of diabolical corruption let loose upon Golarion by House Thrune of Cheliax, perhaps as a scorched earth tactic against their rivals. Influential nobles from Nirmathas and Molthune both point fingers at one another for the wemmuth's creation, Nirmathas citing Molthune's close ties to infernal Cheliax and Molthune blaming the primal magic commonly employed by Nirmathas's many druids and rangers. Several Varisian tales describe creatures closely matching the wemmuth's description attempting to apprehend a famous folk trickster, while crusaders from Mendev adhere to the belief that the wemmuths were a blight unleashed upon Golarion by Deskari, former demon lord of locusts, before his defeat at the hands of mortal heroes.",
      "armorClass": 37,
      "hitPoints": 335,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 27,
        "reflex": 27,
        "will": 24
      },
      "abilities": {
        "str": 8,
        "dex": 6,
        "con": 6,
        "int": -2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 29,
        "deception": 28,
        "stealth": 30,
        "survival": 27
      },
      "languages": [
        "aklo",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold 20",
          "slashing 15"
        ]
      },
      "attacks": [
        {
          "id": "Cs9bWcWN5EGHXFTL",
          "name": "Vine",
          "bonus": 29,
          "damage": "4d12+10 bludgeoning",
          "traits": [
            "fatal-d12",
            "reach-15",
            "sweep"
          ]
        },
        {
          "id": "QD8EtSa8i8CLrYd1",
          "name": "Boulder",
          "bonus": 27,
          "damage": "4d10+10 bludgeoning",
          "traits": [
            "fatal-d12"
          ]
        }
      ],
      "actions": [
        {
          "id": "MvU4aR0QNT2reiGX",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ho6LxyNxuCPhJCQS",
          "name": "Blood Leech",
          "kind": "reaction",
          "description": "Trigger The wemmuth deals damage to a creature with Constrict\nEffect The wemmuth heals a number of Hit Points equal to half the total damage dealt by Constrict."
        },
        {
          "id": "jxo42VzY7ZoPNLHV",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d12+10)[bludgeoning] damage, check (fortitude, dc:36, basic) save"
        },
        {
          "id": "8FV6HMADyqAFIFuU",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:36, options:damaging-effect,inflicts:grabbed,inflicts:slowed), 4d8[bludgeoning] damage, [[/act escape dc=33]], Rupture 36"
        },
        {
          "id": "QTopjs7och0ybEpy",
          "name": "Thorny Mass",
          "kind": "passive",
          "description": "Whenever a creature within 10 feet attempts a melee attack against a wemmuth or uses Acrobatics to Tumble Through its space, that creature takes (1d12+10)[piercing] damage (check (reflex, dc:36, basic) save)."
        },
        {
          "id": "T6uL4dbtaPSkZ4ov",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-adult",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "maz62hCQDR9ZktsA",
      "slug": "requiem-dragon-adult",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8f4355dc641d6d2f23906246d2cb4752251c41ca327c0232fd06d584a57986ee",
    "translatableHash": "sha256:3c64a7f6c87bab8835e27122085141005b8215ceeae05d6edfd3ef4c5b2d9e1b",
    "data": {
      "schemaVersion": 1,
      "name": "Requiem Dragon (Adult)",
      "level": 15,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Requiem dragons are stewards of the River of Souls and the process through which souls reach their final destination in the afterlife. The safe journey of a soul is of utmost importance to a requiem dragon, and some will follow individual souls from their first entry into the river through to their judgment in the Boneyard and eventually to their ultimate resting place. Most requiem dragons tie themselves to specific planes and shepherd any souls bound to that plane, leading to dragons linked to places like Heaven or Hell, though these dragons never swear true allegiance to these planes. Requiem dragons fill their lairs along the River of Souls—patchworks of somber architecture rescued from other planes—with invaluable records and mementos of great accomplishments.",
      "armorClass": 36,
      "hitPoints": 270,
      "speedFeet": 50,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision",
          "lifesense-imprecise-90",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 29
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 6,
        "int": 5,
        "wis": 8,
        "cha": 6
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 30,
        "diplomacy": 27,
        "medicine": 33,
        "religion": 30
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "draconic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "knzrD5SFrlVeyHhp",
          "name": "Horn",
          "bonus": 30,
          "damage": "3d10+12 piercing; 2d8 spirit",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "wyJW030tjlMqlOFy",
          "name": "Claw",
          "bonus": 30,
          "damage": "3d6+12 slashing; 2d8 spirit",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "MfU1Is4nFaLYi4YN",
          "name": "Tail",
          "bonus": 28,
          "damage": "3d8+12 bludgeoning; 2d8 spirit",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "qd9Km8K4PdsnWLbX",
          "name": "Soul Journey",
          "kind": "passive",
          "description": "The dragon spends 1 hour traveling through planar channels to reach the River of Souls, and then reaches any point along the river. This has the effects of Interplanar Teleport, except that the dragon can arrive precisely where they like on any major plane."
        },
        {
          "id": "cyDi0Va1gzTRN2G4",
          "name": "Status Sight",
          "kind": "passive",
          "description": "The requiem dragon automatically knows the Hit Points of all creatures they can see."
        },
        {
          "id": "So4yBcmRWdbLG8JN",
          "name": "Soul Anchor",
          "kind": "reaction",
          "description": "A creature within 60 feet would drop to 0 Hit Points\nEffect The dragon anchors the triggering creature's soul to its body. The creature remains at 1 Hit Point, becomes Doomed 2, and gains fast healing equal to the dragon's level for 1 minute. The creature becomes temporarily immune to further Soul Anchor usages for 24 hours.\nEffect: Soul Anchor"
        },
        {
          "id": "3kVLpqskZEeFu5Jc",
          "name": "Withhold Death",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect The dragon resists the loosening of its own soul, preventing some of the damage. The dragon gains resistance 15 to all damage against the triggering attack."
        },
        {
          "id": "O3ebBljtcItTfmVr",
          "name": "Dooming Breath",
          "kind": "action",
          "description": "Energy from Creation's Forge erupts from the dragon's mouth, dealing 12d8[spirit|options:area-damage] damage in a @Template[type:line|distance:90] (check (reflex, dc:36, basic, options:area-effect) save). Undead creatures who fail the save must also succeed at a check (will, dc:36, options:area-effect,inflicts:doomed) save or become Doomed 1. If the target is already doomed, the doomed value increases by 1 (to a maximum of Doomed 4). The dragon can't use Dooming Breath again for [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rounds}."
        },
        {
          "id": "OPtrKq8gnuusiAqH",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw strikes and one tail strike in any order."
        },
        {
          "id": "WS1ygMI5ueVbLBHQ",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Dooming Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "pVA84K2nKuClLYVw",
          "name": "Soul Shield",
          "kind": "action",
          "description": "Frequency once per day\nEffect The requiem dragon uses their life essence to create a shield of spiritual energy around a creature within 60 feet. The shield creates a link between the dragon and the creature with the effects of Share Life except that the effect doesn't end regardless of distance and remains for 1 hour. In addition, the creature gains resistance 5 to physical and spirit damage that applies to the half of damage it receives. The dragon can Dismiss the effect."
        },
        {
          "id": "RNqriXQSfwsYWhjE",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "G4dVxcO1EbpdB0xz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "ofkR72Hv3Oee1zyU",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "3XiAKSCJlDJwf8no",
              "name": "Heal",
              "rank": 6
            },
            {
              "id": "Fu2fOQrUhkn6hBVN",
              "name": "Heal",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sakugami",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "nxR5CHiRDv6efOl4",
      "slug": "sakugami",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:46e14e1d9d409490dd3bc01fd16f61a5eb1de1f5f83a34b44213c2e26b894d05",
    "translatableHash": "sha256:7f1c0e6c0aff9e63ccfe088ef35feb8011da44b89405f684ac9c636cf1ffa200",
    "data": {
      "schemaVersion": 1,
      "name": "Sakugami",
      "level": 15,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "kami",
        "spirit",
        "wood"
      ],
      "description": "Sakugami are especially powerful kami who protect seasonally blossoming trees, particularly ones in places where the primeval powers of nature remain strong. The cycle of a barren tree bursting into a riot of flowers once a year, before those blossoms inevitably fade with the turning of the seasons, provides a striking visual metaphor for sakugami, whose association with this annual cycle of growth and decay grants them powers over time as well as nature. Also known as blossom kami, sakugami have a particular fascination with mortals. Many folk legends tell of sakugami who bestow their blessing upon worthy individuals who fight for just causes. In truth, while blossom kami are mesmerized by such mortals—seeing the essence of a flower in a short life devoted to bringing beauty and comfort to its surroundings—they're so rare and enigmatically aloof that few ever encounter them. Decades, even centuries, might pass before a humble village realizes that a sakugami has been watching over it.\nThe stories persist, however, as they have for ages, leading to a widespread appreciation for blossoming trees. The site of a new village might be chosen due to its proximity to an ancient wisteria, or a temple might be carefully constructed around a single young plum. As sakugami are most commonly associated with cherry trees, many larger population centers in Minkai will plant and carefully tend small groves of cherries, both for their beauty and out of respect for the blossom kami.\nKami are divine nature spirits from the lands of Tian Xia, far to the east of the Inner Sea region. They serve as guardians of natural objects and places they protect—their wards—and are ancient enemies of oni (Pathfinder Monster Core 252–255). Kami can merge with their wards, allowing them to surreptitiously watch anyone who treads upon their sacred grounds. Kami leave those who they deem harmless alone, but fight vigilantly to scare away anyone perceived as a threat.",
      "armorClass": 35,
      "hitPoints": 350,
      "speedFeet": 50,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 28,
        "will": 30
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 6,
        "int": 2,
        "wis": 7,
        "cha": 8
      },
      "skills": {
        "acrobatics": 30,
        "diplomacy": 31,
        "medicine": 28,
        "nature": 30,
        "stealth": 28,
        "survival": 30
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 15"
        ]
      },
      "attacks": [
        {
          "id": "1zABoyA2x54PjRbW",
          "name": "Staff",
          "bonus": 30,
          "damage": "2d4+13 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "u0En61GEkmilRJFz",
          "name": "Telepathy 150 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3z3CSczhmYzfNCxB",
          "name": "Ward",
          "kind": "passive",
          "description": "Every kami is bound to a ward: a specific animal, plant, object, or location. A kami can merge with or emerge from their ward as a single action, which has the concentrate trait. While merged, the kami can observe their surroundings with their usual senses as well as the senses of their ward, but can't move, communicate with, or control their ward. Additionally, a kami merged with their ward recovers Hit Points each minute as if they spent an entire day resting.\nA sakugami's ward is typically a specific deciduous tree with seasonal blossoms, such as a chery, plum, or wisteria."
        },
        {
          "id": "5RtC2ASqDYa1fPfS",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tsmm8I4dsTXiGSRZ",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "UpRhtSyc0VRLt2t6",
          "name": "Sakugami's Foresight",
          "kind": "reaction",
          "description": "Trigger The sakugami is subject to a hostile action or needs to roll to defend itself\nEffect The sakugami rolls twice and uses the higher result for its saving throw or other defense (a fortune effect) or forces the hostile creature or danger to roll twice and use the lower result for its attack roll or similar roll (a misfortune effect)."
        },
        {
          "id": "VzlO3rF9ml7NQJRF",
          "name": "Fleeting Blossoms",
          "kind": "passive",
          "description": "A sakugami's staff Strikes stir up fleeting blossoms that bloom, wilt, and decay all in the space of an instant. On a hit, they deal an additional 1d6[mental] damage, as well as an additional 1d6[void] damage to living creatures and an additional 1d6[vitality] damage to undead."
        },
        {
          "id": "tnQ4cIcOMWuGbaPY",
          "name": "Swift Staff Strike",
          "kind": "action",
          "description": "In a rapid series of movements, the sakugami unleashes a deadly assault. The sakugami makes three staff Strikes. The sakugami's multiple attack penalty doesn't increase until after they've made all three Strikes."
        },
        {
          "id": "kYmteRQa3LahCveN",
          "name": "Touch of Ages",
          "kind": "passive",
          "description": "A sakugami's attacks bestow a curse that alters the very flow of time in those they attack. When a sakugami hits a creature with a melee Strike, the creature must attempt a check (fortitude, dc:36) save as its perspective shifts rapidly between that of advanced age and an infantile state. Regardless of the outcome, the creature is temporarily immune for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Clumsy 1, Enfeebled 1, and Stupefied 1 for 1 round.\nFailure The creature becomes Clumsy 2, Enfeebled 2, and Stupefied 2 for 1 minute.\nCritical Failure As failure, but the conditions are permanent."
        }
      ],
      "spellcasting": [
        {
          "id": "Wf76V3o8gstoUE6k",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "oYoYyTyC4w3GY5fT",
              "name": "Status",
              "rank": 4
            },
            {
              "id": "hHbTdzTvuc86WAFy",
              "name": "Heal",
              "rank": 5
            },
            {
              "id": "zANtgVUDX9St398r",
              "name": "One with Plants (Flowering Trees Only)",
              "rank": 5
            },
            {
              "id": "CPNch4XxOFdXCM1r",
              "name": "Peaceful Rest",
              "rank": 5
            },
            {
              "id": "ZkqoDkP0TfxueBuf",
              "name": "Cleanse Affliction",
              "rank": 6
            },
            {
              "id": "s49RXHWrH4qqNcEe",
              "name": "Nature's Pathway (At Will) (Flowering Only)",
              "rank": 6
            },
            {
              "id": "86QAPAVAPZfPADE2",
              "name": "Slow",
              "rank": 6
            },
            {
              "id": "QsCtLitrf7uDEgCU",
              "name": "Execute",
              "rank": 7
            },
            {
              "id": "RYvzGKb2XmaJJ1RW",
              "name": "Haste",
              "rank": 7
            },
            {
              "id": "sJGoZ5gJw5AovHJf",
              "name": "Regenerate",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nosferatu-overlord",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "pMNBNo8VMAJdlhN3",
      "slug": "nosferatu-overlord",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:567e2139170cebd70f452728c69d273d7f968100c97d702b9308843d2ef633c6",
    "translatableHash": "sha256:dcb781879d58134050d7e5e546744edd02b8adfeb97452626d84e2b143356f8d",
    "data": {
      "schemaVersion": 1,
      "name": "Nosferatu Overlord",
      "level": 15,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "undead",
        "unholy",
        "vampire"
      ],
      "description": "",
      "armorClass": 37,
      "hitPoints": 215,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 27,
        "will": 29
      },
      "abilities": {
        "str": 6,
        "dex": 8,
        "con": 4,
        "int": 8,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "acrobatics": 29,
        "arcana": 31,
        "athletics": 27,
        "deception": 25,
        "intimidation": 27,
        "stealth": 31
      },
      "languages": [
        "aklo",
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "FTziM3StUsk6uljP",
          "name": "Claw",
          "bonus": 30,
          "damage": "3d10+12 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "04TbbF50Bb8QMN7j",
          "name": "Fangs",
          "bonus": 30,
          "damage": "3d12+12 bludgeoning",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "rA6nVb14yRbfUDje",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "IajFoKIy10WTNoH7",
          "name": "Fast Healing 15",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3j4Xr18GjN12j74C",
          "name": "Air of Sickness",
          "kind": "passive",
          "description": "30 feet. A creature entering or starting its turn in the aura must attempt a check (fortitude, dc:33, options:inflicts:sickened) save. On a failure, the creature is Sickened 1 and takes a –2 status penalty to saves made to resist diseases and remove the sickened condition for 1 hour.\nEffect: Air of Sickness"
        },
        {
          "id": "FPrgaUOdeGQRcQBH",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "LgQMKlP8r3bZfKCj",
          "name": "Change Shape",
          "kind": "action",
          "description": "The nosferatu transforms into a swarm of pale-gray rats. They gain a land Speed of 30 feet and a climb Speed of 10 feet, and they become Large. In this swarm form, the nosferatu can take an action to deal each enemy in the swarm's space 2d10[piercing|options:area-damage] damage with a check (reflex, basic, dc:36, options:area-effect) save. A creature that fails its save is also exposed to plague of ancients."
        },
        {
          "id": "D3EwX19he78NBEH3",
          "name": "Command Thrall",
          "kind": "passive",
          "description": "Requirements One of the nosferatu's thralls is present and can hear the nosferatu\nEffect The nosferatu gives a single command to one of their thralls, which the thrall follows to the best of its ability during its next turn."
        },
        {
          "id": "JsPkaolmnMCUojYB",
          "name": "Dominate",
          "kind": "action",
          "description": "The nosferatu can cast Dominate at will as a divine innate spell. Casting it requires staring into the target's eyes, giving the spell the visual trait. The save DC uses a high DC for the nosferatu's level, and a creature that succeeds is temporarily immune to that nosferatu's Dominate for 24 hours. Fully destroying the nosferatu ends the domination, but merely reducing the nosferatu to 0 HP is insufficient to break the spell."
        },
        {
          "id": "H721NOrTIOeioelo",
          "name": "Drink Blood",
          "kind": "action",
          "description": "Requirements The nosferatu's last action was a successful fangs Strike\nEffect The nosferatu sinks their fangs into the targeted creature to drink its blood. This requires an check (athletics, against:fortitude) check against the creature's Fortitude DC. On a success, the creature becomes Drained 1, and the nosferatu regains 21[healing]{21 HP}, gaining any excess HP as temporary Hit Points. Drinking Blood from a creature that's already drained doesn't restore any HP to the nosferatu but increases the creature's drained condition value by 1, killing the victim when it reaches Drained 5. A nosferatu can also consume blood that's been emptied into a vessel for sustenance, but they gain no HP from doing so.\nThe target creature's drained condition value decreases by 1 per week. A blood transfusion, which requires a successful check (medicine, dc:20) check and sufficient blood or a blood donor, reduces the drained value by 1 after 10 minutes."
        },
        {
          "id": "qdWbSsyOjSnNEpXE",
          "name": "Nosferatu Vulnerabilities",
          "kind": "passive",
          "description": "• Revulsion A nosferatu can't voluntarily come within 10 feet of brandished garlic or a brandished religious symbol of a deity with a holy sanctification option. To brandish garlic or a religious symbol, a creature must Interact to do so for 1 round (similar to Raising a Shield). If the nosferatu involuntarily comes within 10 feet of an object of their revulsion, they gain the Fleeing condition, running from the object of their revulsion until they end an action beyond 10 feet. After 1 round of being exposed to the subject of their revulsion, a nosferatu can attempt a check (will, dc:25, traits:concentrate) save as a single action, which has the concentrate trait. On a success, they overcome their revulsions for [[/gmr 1d6 #rounds]]{1d6 rounds} (or 1 hour on a critical success).\n• Stake A magical wooden stake (such as one affected by a weapon potency rune, Runic Weapon, or similar magic) driven through the nosferatu's heart drops the nosferatu to 0 HP and prevents them from healing above 0 HP, even in their coffin. Staking a nosferatu requires 3 actions and works only if the nosferatu is Unconscious. If the stake is removed, the nosferatu can heal above 0 HP again, and if they're in their coffin, the 1-hour rest period begins once the stake is removed. If the nosferatu's head is severed and anointed with Holy Water while the stake is in place, the nosferatu is destroyed.\n• Sunlight If exposed to direct sunlight, a nosferatu immediately becomes Slowed 1. The slowed value increases by 1 each time the nosferatu ends their turn in sunlight, and the condition ends when they're no longer in sunlight. If the nosferatu loses all their actions in this way, they're destroyed."
        },
        {
          "id": "fXMpxHG2C32hSvaS",
          "name": "Paralytic Fear",
          "kind": "action",
          "description": "Requirements The nosferatu overlord's last action was a successful claw Strike\nEffect The nosferatu drags the target of the Strike close and freezes its mind in terror. The target must attempt a check (will, dc:33, options:inflicts:frightened,inflicts:immobilized,inflicts:restrained) save with a moderate DC for the nosferatu's level.\nCritical Success The target is unaffected.\nSuccess The target is Immobilized by fear until the end of the nosferatu's next turn.\nFailure The target is Restrained and takes a –2 circumstance penalty to its Fortitude DC against the nosferatu's Drink Blood ability until the end of the nosferatu's next turn.\nCritical Failure As failure, and the target is Frightened 2."
        },
        {
          "id": "uz2JK60yMw1ueaVI",
          "name": "Plague of Ancients",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:36)\nOnset 1 day\nStage 1 Drained 1 (1 day)\nStage 2 Drained 2 and Enfeebled 2 (1 day)\nStage 3 Doomed 1, Drained 3, and Enfeebled 3 (1 day)\nStage 4 Doomed 2, drained 3, and enfeebled 3 (1 day)\nStage 5 Unconscious (1 day)\nStage 6 death"
        },
        {
          "id": "mFQxNEWjmfAb5RVB",
          "name": "Plagued Coffin Restoration",
          "kind": "passive",
          "description": "Unlike other undead, a nosferatu isn't destroyed at 0 HP. Instead, they disperse into an immense number of rats heading in every direction in an attempt to return to their coffin. If even a single rat reaches the coffin, the nosferatu can recover. A nosferatu regains their strength through resting in earth taken from the grave of a creature that died of plague. If their body rests in their earth-filled coffin for 1 hour, the nosferatu gains 1 HP, after which their fast healing begins to function normally. If the coffin doesn't contain this plagued grave dirt, they instead need to rest in their coffin for 1 day before they gain 1 HP and regain their fast healing."
        }
      ],
      "spellcasting": [
        {
          "id": "XVeikAYoIL95A0ex",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "RaVIr1GBtZooFnd8",
              "name": "Telekinetic Haul",
              "rank": 6
            },
            {
              "id": "LbFsB8Ti4s4slDy0",
              "name": "Vampiric Exsanguination",
              "rank": 7
            },
            {
              "id": "5fD5A7T8nEDaUCkz",
              "name": "Dominate (At-Will)",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:graveknight-champion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "qStWCL0wtOuQlqVy",
      "slug": "graveknight-champion",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0406c0b5f3496c38a8ccfafb68a3372a569638b09c39415e82b0ccac0c5fb6a8",
    "translatableHash": "sha256:24f9a7e4f3c3ce4507da87d7b2549ad33f4b5cd05f9f602497272e6ad8b94bb6",
    "data": {
      "schemaVersion": 1,
      "name": "Graveknight Champion",
      "level": 15,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Once the servant of a deity, the graveknight champion returned as an undead after a life cut short in service to their god.\nWhen a fearsome combatant falls in battle, the warrior's vengeful spirit can sometimes fuse with their armor, creating a graveknight.",
      "armorClass": 38,
      "hitPoints": 275,
      "speedFeet": 25,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 26,
        "will": 25
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 5,
        "int": 2,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "athletics": 31,
        "intimidation": 29,
        "religion": 27
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
          "fire",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Ne1ooULFIyMu8vPR",
          "name": "Greatpick",
          "bonus": 30,
          "damage": "3d10+16 piercing",
          "traits": [
            "fatal-d12",
            "fire",
            "magical"
          ]
        },
        {
          "id": "w7QWpYn1m4Xmsv2g",
          "name": "Fist",
          "bonus": 30,
          "damage": "3d6+16 bludgeoning; 1d6 fire",
          "traits": [
            "agile",
            "fire",
            "unarmed"
          ]
        },
        {
          "id": "QUEWLvaGCaw2yYG8",
          "name": "Composite Shortbow",
          "bonus": 28,
          "damage": "3d6+10 piercing",
          "traits": [
            "deadly-d10",
            "fire",
            "magical",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "qaOebY5pBDMWy5A8",
          "name": "Clutching Armor",
          "kind": "reaction",
          "description": "Trigger A creature attempts to move away from the graveknight\nEffect The graveknight's armor animates and attempts to Grab the triggering creature. It makes an Athletics check to Grapple using the graveknight's Athletics modifier – 2.\nThe armor can continue to Grapple the creature normally. Since the armor is grappling the creature, the graveknight doesn't need a free hand to do so."
        },
        {
          "id": "UF0WuLUrU0usqAAS",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "U8zq8iIHAufCwa8K",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kwYJk1o85f4qDBlh",
          "name": "Channel Magic",
          "kind": "action",
          "description": "The graveknight redirects magical energies through its armor, allowing it to deliver magic through an attack. The graveknight Casts a Spell that takes 1 or 2 actions to cast and requires a spell attack modifier. The effects of the spell don't occur immediately but are imbued into an attack instead. The graveknight then makes a melee Strike with a weapon or unarmed attack. The spell is coupled with the attack, using the attack roll result to determine the effects of both the Strike and the spell. This counts as two attacks for the graveknight's multiple attack penalty but doesn't apply the penalty until after they've completed Channeling Magic. The graveknight can't use Channel Magic again for [[/gmr 1d4 #Recharge Channel Magic]]{1d4 rounds}."
        },
        {
          "id": "AiCSiVf8Mu2cUUef",
          "name": "Devastating Blast",
          "kind": "action",
          "description": "The graveknight unleashes a @Template[cone|distance:30] of energy. Creatures in the area take 9d12[fire|options:area-damage] damage (check (reflex, dc:36, basic, options:area-effect) save).\nThe graveknight can use this ability once every [[/gmr 1d4 #Recharge Devastating Blast]]{1d4 rounds}."
        },
        {
          "id": "IIWuQHOSJEPu5eUg",
          "name": "Graveknight's Curse",
          "kind": "passive",
          "description": "This curse affects anyone who wears a graveknight's armor for at least 1 hour.\nSaving Throw check (will, dc:40) save\nOnset 1 hour\nStage 1 Doomed 1 and cannot remove the armor (1 day)\nStage 2 Doomed 2, speed penalty of -10 feet, and cannot remove the armor (1 day)\nStage 3 dies and transforms into the armor's graveknight.\nEffect: Graveknight's Curse"
        },
        {
          "id": "hSsikL77YXGbr4xY",
          "name": "Ruinous Weapons",
          "kind": "passive",
          "description": "Any weapon or unarmed attack the graveknight uses gains the effects of a +1 greater striking weapon and a greater flaming weapon rune."
        },
        {
          "id": "LhKiB6yTEpWPWjeb",
          "name": "Weapon Master",
          "kind": "passive",
          "description": "The graveknight has access to the critical specialization effects of any weapons it wields."
        }
      ],
      "spellcasting": [
        {
          "id": "nsUWHOqRbP13svY9",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "tcJuaTuMup7OTiFL",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "qI97PgQomWWujCSi",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IjBgtAVNEeHBHcJT",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "Jfa5sL2w8iMGij3K",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "jzbzZlRxCutDsbzo",
              "name": "Fireball",
              "rank": 4
            },
            {
              "id": "AxslIlPWnGuWbeyL",
              "name": "Chilling Darkness",
              "rank": 5
            },
            {
              "id": "CZwaMRAbFlgXKkMG",
              "name": "Divine Immolation",
              "rank": 5
            },
            {
              "id": "bD3pjjB9VRt1rMvx",
              "name": "Fireball",
              "rank": 6
            },
            {
              "id": "l2AqamdKLnAzycam",
              "name": "Spiritual Armament",
              "rank": 6
            },
            {
              "id": "9oSpMAR5aNTNyabO",
              "name": "Eclipse Burst",
              "rank": 7
            },
            {
              "id": "v8UD00yhAUAFqWEr",
              "name": "Execute",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sramana",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vvzW7VPmUNSTLNzv",
      "slug": "sramana",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5618670eaa90dbe587045f69fc622dde570bb4c8146f83c8cf5cd97b4b3863b7",
    "translatableHash": "sha256:2653c000f2a399d0d60a44564769cec65eca3668c3be1fc809c6f5133d18869f",
    "data": {
      "schemaVersion": 1,
      "name": "Sramana",
      "level": 15,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "angel",
        "celestial",
        "holy"
      ],
      "description": "Sramanas, or renouncer angels, exist to help liberate the penitent and ease their suffering. Unusual for angels of such power, sramanas are drawn exclusively from compassionate and enlightened mortal souls who are often more perceptive to the pains of mortal existence.\nThese tireless celestials embark upon impossible tasks and unfathomable labors to free souls lost, abandoned, and imprisoned in the Lower Planes. This earns them great enmity from fiends and other callous entities, many of whom treat souls as simple playthings and currency and who ironically see the renouncer angels as thieves of souls they've \"rightfully\" cheated, stolen, or traffcked for their own purposes.",
      "armorClass": 36,
      "hitPoints": 300,
      "speedFeet": 40,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 24,
        "will": 28
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 6,
        "int": 4,
        "wis": 8,
        "cha": 5
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 29,
        "diplomacy": 26,
        "medicine": 27,
        "religion": 29
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "fear-effects"
        ],
        "resistances": [
          "mental 15"
        ],
        "weaknesses": [
          "unholy 15"
        ]
      },
      "attacks": [
        {
          "id": "RXPrsq35W1OLao8J",
          "name": "Khakkhara",
          "bonus": 31,
          "damage": "2d6+14 bludgeoning; 2d6 spirit",
          "traits": [
            "magical",
            "shove",
            "two-hand-d10",
            "versatile-p"
          ]
        },
        {
          "id": "vJRTF7ucTCBL0FE8",
          "name": "Fist",
          "bonus": 30,
          "damage": "2d4+12 bludgeoning; 2d6 poison",
          "traits": [
            "agile",
            "holy",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "zaw89bSueOHMuqVp",
          "name": "Heed the Fettered",
          "kind": "passive",
          "description": "The sramana can detect penitent creatures who wish to atone for their misdeeds, creatures with the soulbound trait, and soul gems as an imprecise sense with a range of 120 feet."
        },
        {
          "id": "WDcV1XeZnUVVZkzi",
          "name": "Soul-Rescuing Vow",
          "kind": "passive",
          "description": "A sramana can use interplanar teleport to teleport near a truly penitent creature, soulbound creature, or soul gem of which they're aware. If they do, they don't need a planar key and arrive [[/r 1d20]] miles away from the subject. They can also teleport to Nirvana or The Boneyard without a planar key."
        },
        {
          "id": "UTkJ0P5OYZTADiTI",
          "name": "Aura of Renunciation",
          "kind": "passive",
          "description": "100 feet. Truly penitent creatures in the sramana's aura are affected by a DC 35 Sanctuary spell. If any creature within the aura takes a hostile action, sanctuary ends for only that creature, not for the other creatures in the aura.\nIn addition, soul gems in the aura can't be ingested, consumed, or otherwise used. A creature who attempts to do so becomes Sickened 1 unless it succeeds at a check (fortitude, dc:37) save."
        },
        {
          "id": "9Sn7yLhuEZDvcoJ5",
          "name": "Shelter the Sufering",
          "kind": "action",
          "description": "Frequency once per day\nEffect The sramana tosses the shawl of their robes into the air, where it expands to protect the sufering. Each truly penitent creature in a @Template[type:emanation|distance:100] is affected by an Invisibility spell, and the area is affected by the feld of life spell, though it afects only penitent creatures and soulbound creatures. These efects last for 1 round but can be sustained for up to 1 hour."
        }
      ],
      "spellcasting": [
        {
          "id": "NUDVETO85g5ht2Zj",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "Dr5t2Ppbbl7PpwnX",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "kF6H5hVmVEwMqP6A",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "bQEf9nzBel7k1Xtn",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "3jo6eKsLz0cdOuwV",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "4MYpCNWavi3EUNvn",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "9PIHHfGcDtfwZGYT",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "qbilLFh8leOlHvVq",
              "name": "Calm",
              "rank": 7
            },
            {
              "id": "sRWos0O3FGNpFqXR",
              "name": "Cleanse Affliction",
              "rank": 7
            },
            {
              "id": "6jgPP5shTJH9RikN",
              "name": "Dispel Magic",
              "rank": 7
            },
            {
              "id": "DcdNkKWvbA1TJbNW",
              "name": "Divine Decree",
              "rank": 7
            },
            {
              "id": "lS0fIxJVXOOLcU7v",
              "name": "Heal",
              "rank": 7
            },
            {
              "id": "mQqp2kZCCYELqfrB",
              "name": "Interplanar Teleport (at will; see soul-rescuing vow)",
              "rank": 7
            },
            {
              "id": "grGIl9ny2C2cQdgk",
              "name": "Planar Seal",
              "rank": 7
            },
            {
              "id": "39Z8RFBIsANZPsll",
              "name": "Sending",
              "rank": 7
            },
            {
              "id": "pgAWQpov84JsMdkO",
              "name": "Clear Mind",
              "rank": 8
            },
            {
              "id": "e5sCEBnOYD0CNh9M",
              "name": "Divine Inspiration",
              "rank": 8
            },
            {
              "id": "MB4WtZlHB9pgUp6J",
              "name": "Moment of Renewal",
              "rank": 8
            },
            {
              "id": "yLQuKxgQefWyg6b2",
              "name": "Pinpoint",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:totum-font",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Wx3R6sU7c2v8x1mC",
      "slug": "totum-font",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:82a7303f3009bda6bfa1214f277f90f4e4e173c530f438c62b013bb82119327b",
    "translatableHash": "sha256:987b49c5732b42766840759ece675a0f3717960758abf1ded1acb7a5bfe937f9",
    "data": {
      "schemaVersion": 1,
      "name": "Totum Font",
      "level": 15,
      "rarity": "common",
      "size": "large",
      "traits": [
        "air",
        "earth",
        "elemental",
        "fire",
        "metal",
        "water",
        "wood"
      ],
      "description": "Before mortals, fey, or even genies, totum fonts were the first creatures born of six elements undivided and harmonious. From the fonts sprung new elemental children, and they aided the gods in the many acts of creation that would follow.\nWellsprings of One\nWithout access to the balance of all six elemental planes, a totum font becomes fractured and inundated in a single element. Most were healed when the Planes of Metal and Wood returned, but some of these so-called \"wellsprings of one\" still wander the universe, agitated and confused.",
      "armorClass": 35,
      "hitPoints": 104,
      "speedFeet": 25,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 29
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 8,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "acrobatics": 25,
        "arcana": 30,
        "athletics": 29,
        "crafting": 30,
        "nature": 31
      },
      "languages": [
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
          "id": "5qI56K40B6cMYP6B",
          "name": "Tendril",
          "bonus": 30,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "YhorKWgwXzwXz2AU",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "bIS9IsfR2Wy7PUbO",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6jxyDBpb2x7C2JA0",
          "name": "Elemental Attunement",
          "kind": "passive",
          "description": "A totum font is always attuned to a single element (air, earth, fire, metal, water, or wood), represented by which of their faces points forward. They can change this attunement to the element of their choice as a single action, or as a free action when they roll initiative."
        },
        {
          "id": "1n9k078q6gxydfeF",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "Requirements The font is attuned to air, fire, or water."
        },
        {
          "id": "pry9MdVyexuOUvrc",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "Requirements The font is attuned to earth, metal, or wood."
        },
        {
          "id": "uKSTQdiuwk2rpKI3",
          "name": "Briar's Hold",
          "kind": "action",
          "description": "Requirements The font is attuned to wood\nEffect Each creature within 20 feet must succeed at a check (fortitude, dc:36) save or become Slowed 1 for 1 minute. When a creature already slowed by Briar's Hold fails its Fortitude save, it becomes Petrified for 1 minute but is turned to wood instead of stone."
        },
        {
          "id": "5aqL37am6uZDDExB",
          "name": "Brilliance of Flame",
          "kind": "action",
          "description": "Requirements The font is attuned to fire\nEffect The font flies 30 feet and explodes in a fiery Elemental Eruption."
        },
        {
          "id": "weiKEUOM5w2SKK6a",
          "name": "Elemental Eruption",
          "kind": "action",
          "description": "The font explodes in a cacophony of color and energy. Each creature in a @Template[type:emanation|distance:20] takes 9d6[bludgeoning|options:area-damage] damage (check (reflex, dc:36, basic) save). The explosion deals bludgeoning damage unless the font is attuned to air (electricity damage), fire (fire damage), metal (slashing damage), or wood (piercing damage). Elemental Eruption gains the trait matching the element the font is attuned to."
        },
        {
          "id": "v7e31VyI11uoKFuH",
          "name": "Entomb",
          "kind": "passive",
          "description": "Requirements The font is attuned to earth, and its last action was a successful tendril Strike\nEffect The font attempts an Athletics check to Grapple the target of the Strike."
        },
        {
          "id": "U9ICRuaHWewJCe1F",
          "name": "Overflowing Tide",
          "kind": "action",
          "description": "Requirements The font is attuned to water\nEffect Elemental waves surge around the font, creating a torrential Elemental Eruption and pushing creatures in the area 20 feet (or 10 feet on a successful saving throw)."
        },
        {
          "id": "lBdIDuoG6bSzpien",
          "name": "Serrated Flurry",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The font is attuned to metal\nEffect The font lashes out with two tendril Strikes, each targeting a different creature within their reach. These Strikes deal slashing damage."
        },
        {
          "id": "fxsJ34YgM0FuF582",
          "name": "Tempest Charge",
          "kind": "action",
          "description": "Requirements The font is attuned to air\nEffect The font Flies 60 feet and makes a tendril Strike against a creature it hasn't attacked this turn."
        }
      ],
      "spellcasting": [
        {
          "id": "VkdqeQwtIcXnQ1xR",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 25,
          "saveDc": 33,
          "spells": [
            {
              "id": "kVxmANoNzOHGHSkF",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:requiem-dragon-adult-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XjDWSgWiplmByK3r",
      "slug": "requiem-dragon-adult-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4a528c5d6437aaa9cf68e424152a4007f8efd325234539a9ba85159d2cffa8eb",
    "translatableHash": "sha256:8cdf0e27dc3a21549654473e25a4dacabf31607cdd54119737155ec516134290",
    "data": {
      "schemaVersion": 1,
      "name": "Requiem Dragon (Adult, Spellcaster)",
      "level": 15,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "divine",
        "dragon"
      ],
      "description": "Requiem dragons are stewards of the River of Souls and the process through which souls reach their final destination in the afterlife. The safe journey of a soul is of utmost importance to a requiem dragon, and some will follow individual souls from their first entry into the river through to their judgment in the Boneyard and eventually to their ultimate resting place. Most requiem dragons tie themselves to specific planes and shepherd any souls bound to that plane, leading to dragons linked to places like Heaven or Hell, though these dragons never swear true allegiance to these planes. Requiem dragons fill their lairs along the River of Souls—patchworks of somber architecture rescued from other planes—with invaluable records and mementos of great accomplishments.",
      "armorClass": 36,
      "hitPoints": 270,
      "speedFeet": 50,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision",
          "lifesense-imprecise-90",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 23,
        "will": 29
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 6,
        "int": 5,
        "wis": 8,
        "cha": 6
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 30,
        "diplomacy": 27,
        "medicine": 33,
        "religion": 30
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "draconic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "knzrD5SFrlVeyHhp",
          "name": "Horn",
          "bonus": 30,
          "damage": "3d10+12 piercing; 2d8 spirit",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "wyJW030tjlMqlOFy",
          "name": "Claw",
          "bonus": 30,
          "damage": "3d6+12 slashing; 2d8 spirit",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "MfU1Is4nFaLYi4YN",
          "name": "Tail",
          "bonus": 28,
          "damage": "3d8+12 bludgeoning; 2d8 spirit",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "qd9Km8K4PdsnWLbX",
          "name": "Soul Journey",
          "kind": "passive",
          "description": "The dragon spends 1 hour traveling through planar channels to reach the River of Souls, and then reaches any point along the river. This has the effects of Interplanar Teleport, except that the dragon can arrive precisely where they like on any major plane."
        },
        {
          "id": "cyDi0Va1gzTRN2G4",
          "name": "Status Sight",
          "kind": "passive",
          "description": "The requiem dragon automatically knows the Hit Points of all creatures they can see."
        },
        {
          "id": "So4yBcmRWdbLG8JN",
          "name": "Soul Anchor",
          "kind": "reaction",
          "description": "A creature within 60 feet would drop to 0 Hit Points\nEffect The dragon anchors the triggering creature's soul to its body. The creature remains at 1 Hit Point, becomes Doomed 2, and gains fast healing equal to the dragon's level for 1 minute. The creature becomes temporarily immune to further Soul Anchor usages for 24 hours.\nEffect: Soul Anchor"
        },
        {
          "id": "3kVLpqskZEeFu5Jc",
          "name": "Withhold Death",
          "kind": "reaction",
          "description": "Trigger The dragon is critically hit by an attack\nEffect The dragon resists the loosening of its own soul, preventing some of the damage. The dragon gains resistance 15 to all damage against the triggering attack."
        },
        {
          "id": "O3ebBljtcItTfmVr",
          "name": "Dooming Breath",
          "kind": "action",
          "description": "Energy from Creation's Forge erupts from the dragon's mouth, dealing 12d8[spirit|options:area-damage] damage in a @Template[type:line|distance:90] (check (reflex, dc:36, basic, options:area-effect) save). Undead creatures who fail the save must also succeed at a check (will, dc:36, options:area-effect,inflicts:doomed) save or become Doomed 1. If the target is already doomed, the doomed value increases by 1 (to a maximum of Doomed 4). The dragon can't use Dooming Breath again for [[/gmr 1d4 #Recharge Dooming Breath]]{1d4 rounds}."
        },
        {
          "id": "pVA84K2nKuClLYVw",
          "name": "Soul Shield",
          "kind": "action",
          "description": "Frequency once per day\nEffect The requiem dragon uses their life essence to create a shield of spiritual energy around a creature within 60 feet. The shield creates a link between the dragon and the creature with the effects of Share Life except that the effect doesn't end regardless of distance and remains for 1 hour. In addition, the creature gains resistance 5 to physical and spirit damage that applies to the half of damage it receives. The dragon can Dismiss the effect."
        },
        {
          "id": "kg9gkNmFCXXyWBwQ",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "fpjdfWubC2WyLhEd",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "rpJKhtNvYIRTOmmp",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "JKmKgIj0iBXKpN71",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "TtqS7Au0EmcIsn6b",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "bTZZNnq91PUBCVxt",
              "name": "Protection",
              "rank": 1
            },
            {
              "id": "G4aXseCIPuKdoKrq",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "BajUh2rL9u3mNv5K",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "ApurIolcB4VrTM3m",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "ACrUKEeNAabGlIqw",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "ytB2F1Jr9tdzxtFs",
              "name": "Thoughtful Gift",
              "rank": 1
            },
            {
              "id": "EGTFLACKTnbNRPaw",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "2rHlT3ISeI05Jxap",
              "name": "Share Life",
              "rank": 2
            },
            {
              "id": "zPUiYtaYNhMoGraw",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "kL10PKTPGK6Sd7ZY",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "dX9w451e4lWAnCHS",
              "name": "Ghostly Tragedy",
              "rank": 4
            },
            {
              "id": "2Sxd0JBEKJIeBngO",
              "name": "Talking Corpse",
              "rank": 4
            },
            {
              "id": "DlYz4fFyMplRopkM",
              "name": "Vital Beacon",
              "rank": 4
            },
            {
              "id": "4eFm4uZ3aMRUxiuV",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "G8Ok4AJuqQxVFTUo",
              "name": "Breath of Life",
              "rank": 5
            },
            {
              "id": "5HxSCkNUrJCOM9BW",
              "name": "Invoke Spirits",
              "rank": 5
            },
            {
              "id": "WbUapHsHOkq8A6ba",
              "name": "Field of Life",
              "rank": 6
            },
            {
              "id": "96eqY3v3DFeXDm2u",
              "name": "Raise Dead",
              "rank": 6
            }
          ]
        },
        {
          "id": "G4dVxcO1EbpdB0xz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "ofkR72Hv3Oee1zyU",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "3XiAKSCJlDJwf8no",
              "name": "Heal",
              "rank": 6
            },
            {
              "id": "Fu2fOQrUhkn6hBVN",
              "name": "Heal",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hyakume",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "y8bxt4vLmHHy1Xys",
      "slug": "hyakume",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7bbadd8fe3a0855931caebc7af8c041dc35531f46e8f334a906186314e2e965f",
    "translatableHash": "sha256:f434561c3eee00337ab23708f2aa3c1639b00e77c0d378d05b82668b227ab6a5",
    "data": {
      "schemaVersion": 1,
      "name": "Hyakume",
      "level": 15,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "aberration"
      ],
      "description": "Hundreds of bloodshot eyes peek out from under the fleshy layers of a hyakume's skin. These hulking aberrations covet knowledge and go to great lengths to keep what they know to themselves; they'll destroy scriptoria they've raided and burn books they've read to ensure no other soul learns their contents. While hyakume occasionally trade valuable information to garner greater knowledge, they're liable to trick their targets into revealing more than they should. Most frightening of all is the hyakume's ability to steal memories and erase any knowledge of their existence from the minds of their victims.",
      "armorClass": 36,
      "hitPoints": 275,
      "speedFeet": 25,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 25,
        "will": 29
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 4,
        "int": 9,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "arcana": 30,
        "crafting": 30,
        "deception": 27,
        "medicine": 25,
        "nature": 25,
        "occultism": 30,
        "religion": 27,
        "society": 28,
        "thievery": 25
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [
          "confused"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "932SeoqZMbbYqt5y",
          "name": "Fist",
          "bonus": 27,
          "damage": "3d10+10 bludgeoning",
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
          "id": "tTnz8eIS2szDD8xT",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UzPZylqMruAqCelG",
          "name": "Lore Master",
          "kind": "passive",
          "description": "A hyakume can use their Bardic Lore skill to Recall Knowledge on any topic, and they know any languages common to an area they have spent a day or more in."
        },
        {
          "id": "dwpXKTApBk1iRGDA",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "CG2fHRYx81XjnU2x",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Lv4CaV9bwzOZ43lA",
          "name": "+2 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "G2BywEyW2KKDmpDr",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zVW5acTWePSgdNpP",
          "name": "Eye Probe",
          "kind": "action",
          "description": "Frequency once per day\nEffect Up to six of the hyakume's eyes detach from the hyakume's body. Each eye has AC 26, HP 1, and a fly speed of 40 feet.\nThe hyakume can see through all of their eye probes. They can move the probes all in separate directions using a single Sustain action.\nA hyakume can have no more than six eye probes active at a time; using this ability to create more causes the eye or eyes farthest away to shrivel and die.\nThe hyakume can deliver touch spells through their eye probes and can make melee spell attacks through them. In addition, the hyakume can Steal Memories through an eye probe using a single action by touching the target with the eye."
        },
        {
          "id": "ozUjEXpOPJFvZ7Fb",
          "name": "Scatterbrain Palm",
          "kind": "passive",
          "description": "A creature hit by the hyakume's fist Strike must attempt a check (will, dc:36, options:inflicts:stunned) save. The creature is then temporarily immune until start of its next turn.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 2.\nCritical Failure The creature is Stunned 3 and the hyakume can use Steal Memories on the target as part of this action."
        },
        {
          "id": "rPY3emvJzyMgoloI",
          "name": "Steal Memories",
          "kind": "action",
          "description": "The hyakume reaches out with their mind and attempts to steal memories from a creature within 30 feet.\nThe target must succeed at a check (will, dc:40, options:inflicts:stupefied) saving throw or become Stupefied 2 and have some of its memories stolen. The hyakume learns some of the target's memories (chosen by the GM), which are then lost to the target."
        }
      ],
      "spellcasting": [
        {
          "id": "ygF0hGdv5uKOVQRh",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 32,
          "saveDc": 40,
          "spells": [
            {
              "id": "7dNu0OBZ5L4fhVob",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "F4piXTHur8dvObas",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "q6HhPmZQpy505CQc",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "LS1hjl2ovv8uVRgE",
              "name": "Fly (At Will)",
              "rank": 4
            },
            {
              "id": "frNfMothmdoHrJRi",
              "name": "Hypercognition (At Will)",
              "rank": 4
            },
            {
              "id": "q0bHQYUE8SPJD5QP",
              "name": "Ring of Truth (At Will)",
              "rank": 4
            },
            {
              "id": "HjplePALWef0fRFd",
              "name": "Dispel Magic",
              "rank": 7
            },
            {
              "id": "wId7hAqgqYpSw6oJ",
              "name": "Mindlink (At Will)",
              "rank": 7
            },
            {
              "id": "481nb1RTINDMhQ7L",
              "name": "Charm",
              "rank": 8
            },
            {
              "id": "cAhQ2d59wgYNt7rE",
              "name": "Disappearance",
              "rank": 8
            },
            {
              "id": "Z2U3Xs8KLAZiNY3H",
              "name": "Hidden Mind",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:marrmora",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "yaDZ0N6t8vOxbqLy",
      "slug": "marrmora",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:48992e179a5830e384605d4c45890890b3694029798aa9a0678d08c01a3ebfd1",
    "translatableHash": "sha256:c07d805db5d2b73a4ae994aaaaf50fd9b18c0925e4c235cbf8adcadc097f98f7",
    "data": {
      "schemaVersion": 1,
      "name": "Marrmora",
      "level": 15,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fey",
        "fire"
      ],
      "description": "On the First World, marrmoras dwell in ruined wildlands perpetually scourged by fire and rarely, if ever, travel elsewhere. When a wildfire devastates a wilderness region on the Universe and results in the death of other fey, marrmoras can be drawn across the planar boundary to revel in the resulting destruction. They seek to reignite the fires that beckoned them, to gather up and feed upon the charred remains of those who perished within (particularly the bodies of dead fey), though they do grow homesick if they spend too much time away from the First World. They're burdened by a capricious but persistent rage and are unfailingly cruel. While they're capable of negotiation and intelligent interaction, they almost never bargain in good faith and typically interact with others only as a means to more efficiently spread their fiery devastation.\nA marmorra's twisted appearance evokes the look of an arboreal whose bark has been burnt down to charcoal. They have nearly featureless faces and hands ending in long, sharp claws. Their broken flesh looks like charcoal-burnt wood, riddled with cracks that still glow with an unwholesome heat. They trail ash wherever they walk, and wisps of smoke curl off of their bodies. Though marrmoras enjoy the sight of any woodland and its inhabitants roasting in their carefully curated fires, there's little that brings more pleasure to the monstrous fey than the sight of intelligent plant creatures cooking to a crisp.",
      "armorClass": 37,
      "hitPoints": 280,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 29,
        "reflex": 25,
        "will": 27
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 8,
        "int": 4,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 25,
        "deception": 30,
        "intimidation": 30,
        "nature": 30,
        "stealth": 27,
        "survival": 27
      },
      "languages": [
        "common",
        "elven",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 10 except slashing"
        ],
        "weaknesses": [
          "cold-iron 15"
        ]
      },
      "attacks": [
        {
          "id": "pvqYJHUkKVxUx3Q2",
          "name": "Claw",
          "bonus": 29,
          "damage": "3d6+14 slashing; 3d6 fire; 1d6 fire",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "6xKgrVRYAjGEO0p7",
          "name": "Flame Jet",
          "bonus": 29,
          "damage": "6d6 fire; 2d6 fire",
          "traits": [
            "fire"
          ]
        }
      ],
      "actions": [
        {
          "id": "iKbhKQt4aD8JDvDd",
          "name": "Absorb Flame",
          "kind": "reaction",
          "description": "Trigger The marrmora is targeted by a fire spell or effect, or is in the area of a fire effect\nEffect The marrmora is healed by the fire damage, regaining Hit Points equal to half the damage the fire effect would have dealt."
        },
        {
          "id": "EYtHIPWgwGTdjCBp",
          "name": "Fascination of Flame",
          "kind": "passive",
          "description": "30 feet. A creature that enters or begins its turn in this aura's emanation must attempt a check (will, dc:33) save. Regardless of the result of the saving throw, the creature is temporarily immune for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature loses any resistance to fire for 1 round.\nFailure The creature loses any resistance to fire for 1 hour.\nCritical Failure The creature loses any resistance to fire for 1 hour and gains weakness 15 to fire for the same duration."
        },
        {
          "id": "TOzSzGQn4MrKg3wy",
          "name": "Igniting Assault",
          "kind": "action",
          "description": "Requirements The marrmora is not under the effect of Fire Shield\nEffect The marrmora makes a claw Strike. If it hits, it can immediately cast one of its available fire shield innate spells as a free action."
        }
      ],
      "spellcasting": [
        {
          "id": "XjTpzsxbFyurBJJ5",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "dtdBFIEoGg6dm5n8",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "XSv2hPFHmN0PJobU",
              "name": "Fire Shield",
              "rank": 6
            },
            {
              "id": "9CQFMTKYUvlMVWPC",
              "name": "Fireball",
              "rank": 6
            },
            {
              "id": "QlumVmbCd9MIKvpV",
              "name": "One with Plants (at will; appears as a burnt, dead tree)",
              "rank": 6
            },
            {
              "id": "uuCxv76DCQ2YKPrG",
              "name": "Elemental Form (fire elemental only)",
              "rank": 7
            },
            {
              "id": "QUjCMu0dK3ccCi2l",
              "name": "Volcanic Eruption",
              "rank": 7
            },
            {
              "id": "0wo9iJ6hrRzp3mIr",
              "name": "Wall of Fire",
              "rank": 7
            },
            {
              "id": "Q06DblY6JZ4TlkdN",
              "name": "Blazing Bolt",
              "rank": 8
            },
            {
              "id": "7ZHrPwXoT5JyTCJC",
              "name": "Fireball",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:clockwork-dragon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "44cDgnq0KY88X70E",
      "slug": "clockwork-dragon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4fc48ed9f3df534ca3f83b3cd864e66df857a1222a66d150eaa22a266219b85f",
    "translatableHash": "sha256:f1814f6acdcc6a1aea8df789aa26fe7866031e304801a68e62ea5163e55df8f2",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Dragon",
      "level": 16,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "clockwork",
        "construct",
        "mindless"
      ],
      "description": "Clockwork dragons are a marvel of clockwork design. These powerful masterpieces have the ability to fly, making them versatile and dangerous killers. A clockwork dragon's winding mechanism is more efficient than those of other clockworks, allowing it to partially reuse energy generated by flapping its wings. Creating a clockwork dragon requires not only an advanced understanding of clockwork design, but also a greater cache of rare resources, as its body requires solid reinforcement. As a result, most clockwork dragons have adamantine fortification. Creating a clockwork dragon without adamantine is entirely possible, though such dragons are typically smaller and more fragile.\nIntricate, complex machines, clockworks are built with care by highly skilled engineers. Though their creation involves some amount of magic, they're primarily mechanical, packed with precision-tuned gears and springs working in concert.\nThe sturdy mainspring within a clockwork must be wound to provide the energy needed to power the device. Some larger clockworks contain a series of springs for different limbs that each need to be wound. A clockwork's crafter creates a unique metal key while building the clockwork; winding the clockwork usually involves inserting the key into the machine's back and turning clockwise. Larger clockworks require greater strength to turn the key, and typically have larger keys to allow for more torque-some even accommodating a team of winders rather than an individual. Programming a clockwork requires both the key and the knowledge to set the program correctly, information usually reserved for the clockwork's creator or owner.",
      "armorClass": 39,
      "hitPoints": 265,
      "speedFeet": 40,
      "perception": {
        "modifier": 28,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 28,
        "will": 25
      },
      "abilities": {
        "str": 9,
        "dex": 5,
        "con": 5,
        "int": -5,
        "wis": 4,
        "cha": -5
      },
      "skills": {
        "acrobatics": 29,
        "athletics": 33
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 15 except adamantine, orichalcum"
        ],
        "weaknesses": [
          "electricity 15",
          "orichalcum 15"
        ]
      },
      "attacks": [
        {
          "id": "uCxQUNy75OANDWsm",
          "name": "Adamantine Jaws",
          "bonus": 33,
          "damage": "3d12+17 piercing",
          "traits": [
            "adamantine",
            "reach-15"
          ]
        },
        {
          "id": "SU3ySHGYIBWN3dgx",
          "name": "Adamantine Claw",
          "bonus": 33,
          "damage": "3d8+17 slashing",
          "traits": [
            "adamantine",
            "agile",
            "reach-10"
          ]
        },
        {
          "id": "YSVbN2hohx9XI8OH",
          "name": "Tail",
          "bonus": 31,
          "damage": "3d12+15 bludgeoning",
          "traits": [
            "reach-20"
          ]
        },
        {
          "id": "lcYKbUtg1W8w9cul",
          "name": "Wing",
          "bonus": 31,
          "damage": "2d10+15 piercing",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "v2RqXgBeNgkZ0DtA",
          "name": "Wind-Up",
          "kind": "passive",
          "description": "1 week, [[/act disable-device dc=35]]{DC 35 Thievery}, standby\nFor a clockwork to act, it must be wound with a unique key by another creature. This takes 1 minute. Once wound, it remains operational for the listed amount of time, usually 24 hours, after which time it becomes unaware of its surroundings and can't act until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most clockwork keepers wind all their clockworks at a set time, typically 8 a.m.\nA clockwork that lists standby in its wind-up entry can enter standby mode as a 3-action activity. Its operational time doesn't decrease in standby, but it can sense its surroundings (with a -2 penalty to Perception). It can't act, with one exception: when it perceives a creature, it can exit standby as a reaction (rolling initiative if appropriate).\nA creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, the clockwork loses 1 hour of operational time. This can be done even if the clockwork is in standby mode."
        },
        {
          "id": "Q9b50evzwuGvfkAB",
          "name": "Self-Destruct",
          "kind": "reaction",
          "description": "A clockwork dragon must use this reaction unless specifically programmed otherwise by its creator.\nTrigger The clockwork dragon is reduced to 0 Hit Points.\nEffect The dragon screeches to a stop and emits a steady, loud ticking sound. At the beginning of what would have been its next turn, the dragon explodes, dealing 12d10[piercing|options:area-damage] damage in a @Template[emanation|distance:40] (check (reflex, dc:37, basic, options:area-effect) save).\nAn adjacent creature can cancel the self-destruct sequence by succeeding at a check (thievery, dc:37, traits:action:disable-a-device) check to Disable a Device."
        },
        {
          "id": "2PoHFE6FWRaWarJD",
          "name": "Breathe Oil",
          "kind": "action",
          "description": "The clockwork dragon breathes a spray of flaming oil that deals 16d6[fire|options:area-damage] damage in a @Template[cone|distance:40] (check (reflex, dc:37, basic, options:area-effect) save). Creatures that fail their saves are covered in burning oil and take 2d6[persistent,fire]. The clockwork dragon can't use Breathe Oil again for 2 rounds."
        },
        {
          "id": "Lt0Vd3S5Hji79WEW",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The clockwork dragon makes two claw Strikes and one wing Strike in any order."
        },
        {
          "id": "fZUt506WBOAg0Mrm",
          "name": "Spearing Tail",
          "kind": "action",
          "description": "The clockwork dragon attacks with the sharp point of its tail.\nIt makes a tail Strike against each creature in a @Template[line|distance:20], rolling the attack roll once and applying the result to each target. Any creature hit takes 4d6[bleed] ((2*4d6)[bleed] on a critical hit). This counts as two attacks for the dragon's multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:thousand-thieves",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "aUiKAYpDgBWhGLFz",
      "slug": "thousand-thieves",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d04e2605121fa51ca5b1cec4c752c67b0535dd0287106eb3f421197a545993d0",
    "translatableHash": "sha256:f93fa89052b1d980191b5c5415f635994986d6b745cbe0b80273e227df2eafe0",
    "data": {
      "schemaVersion": 1,
      "name": "Thousand Thieves",
      "level": 16,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration",
        "swarm"
      ],
      "description": "Good help is hard to find. For a master thief unable to find competent accomplices, sometimes the only way to execute the perfect heist involves becoming an entire guild of tiny creatures. Those who purposefully transform in this way favor scuttling creatures such as centipedes or spiders. On occasion, a thousand thieves instead forms when a community of pack rats discovers a dead scoundrel's body and fights over his ill-gotten gains. These swarm striders make use of their swarm form to enter homes, vaults, and other targets with ease.\nAll living creatures eventually become worm food. Yet if a creature perishes while gripped by overwhelming emotion or unfinished business, its flesh can become infused with those obsessions or a simple refusal to perish, infecting whatever detritivores feast on the body. As they feast, the invertebrates awaken to a type of collective intelligence, including some of the dead creature's memories and motivations. Once the body is stripped bare, the vermin swarm together and intertwine to recreate the dead creature's form out of thousands of wriggling bodies. These reborn are known as swarm striders.\nThough many swarm striders are accidental creations, a few rare mortals purposefully transform themselves into swarm striders through powerful rituals. Most often, this process involves specially preparing a grave with ample scavengers and enchanting the site with occult magic to anchor their soul until it can live within the swarm. Through transformation, these intentional swarm striders seek out the power to slip past any defense or claim the virtual immortality of an ever-regenerating horde, as a swarm strider can reconstitute their form from even a single worm. However, the transformation inevitably scars the creature—often causing emotional detachment, the disintegration of old taboos, and a dissociated sense of self now that one mind has become a thousand. In their transformed state, even the best-intentioned swarm strider might embrace villainy and lose any semblance of their former selves over the span of many years.",
      "armorClass": 40,
      "hitPoints": 220,
      "speedFeet": 35,
      "perception": {
        "modifier": 29,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 31,
        "will": 27
      },
      "abilities": {
        "str": 4,
        "dex": 8,
        "con": 7,
        "int": 6,
        "wis": 5,
        "cha": 2
      },
      "skills": {
        "acrobatics": 30,
        "deception": 28,
        "occultism": 26,
        "society": 28,
        "stealth": 32,
        "thievery": 32
      },
      "languages": [
        "aklo",
        "common",
        "sakvroth",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "physical 15",
          "poison 15"
        ],
        "weaknesses": [
          "area-damage 15",
          "splash-damage 15"
        ]
      },
      "attacks": [
        {
          "id": "GU4Q4UFy48K2VKc3",
          "name": "Dagger",
          "bonus": 32,
          "damage": "3d4+10 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "dqO6BYT5YThRRefe",
          "name": "Dagger",
          "bonus": 32,
          "damage": "3d4+10 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "8Fvnvd29iGaeZIat",
          "name": "Fist",
          "bonus": 32,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "zuF02O6IU88TUX0x",
          "name": "Vermin Dart",
          "bonus": 30,
          "damage": "3d8+10 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "u8lh2MtWPiZxW0on",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KVceACqUJB6k5v8X",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "L7BMNqkZf001E15N",
          "name": "Discorporate",
          "kind": "passive",
          "description": "When the swarm strider is reduced to 0 HP, their constituent creatures collapse, scattering on the ground under their space and each adjacent square. If even one of the creatures gets away, the swarm strider can eventually re-form over 1d10 days (potentially longer in areas where there are few invertebrates). The scattered invertebrates must be destroyed within 1 round to destroy the swarm strider permanently. The invertebrates have a collective pool of 55 HP, and the same AC, saves, immunities, resistances, and weaknesses as the swarm strider. The invertebrates can't take actions but they escape automatically once the round elapses. At the GM's discretion, clever means of trapping or eliminating the creatures might be sufficient to destroy the swarm strider."
        },
        {
          "id": "2Ok2vWdBm4BjHLEp",
          "name": "Clinging Remnants",
          "kind": "passive",
          "description": "A swarm strider's melee Strikes and ranged Strikes made against targets within their weapon's first range increment deposit biting vermin on the target, dealing 4d4[persistent,piercing] damage."
        },
        {
          "id": "popSVdfV08eHfnOB",
          "name": "Draw Bugs",
          "kind": "action",
          "description": "The swarm strider draws more arthropods from the environment around them to reconstitute some of their damaged body. They regain 20 HP. At the GM's discretion, the swarm strider doesn't recover HP in areas where there aren't enough arthropods to call to themselves."
        },
        {
          "id": "lNIR47S5eBHtSl56",
          "name": "Liquid Delirium",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:37)\nMaximum Duration 6 rounds\nStage 1 4d6 poison and Stupefied 1 (1 round)\nStage 2 4d6 poison and Stupefied 2 (1 round)\nStage 3 4d6 poison, stupefied 2, and Fascinated by a random object (1 round)\nStage 4 Unconscious with no Perception check to wake up (1 round)"
        },
        {
          "id": "tI1dJSROzpmaj85D",
          "name": "Scuttling Shift",
          "kind": "action",
          "description": "The thousand thieves reverts to a swarm using Swarm Getaway, Sneaks up to their Speed, coalesces into their normal form, and Hides. This movement doesn't trigger reactions."
        },
        {
          "id": "uP9xscLX0m4ArvxQ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The thousand thieves Strikes deal an additional 3d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "uj8XzA07UkJAmKoz",
          "name": "Squirming Injection",
          "kind": "action",
          "description": "The swarm strider Strides. If they end their movement sharing a space with a creature, they deal 6d6[piercing] damage to the creature, with a check (reflex, dc:37, basic) and exposing the target to liquid delirium. The swarm strider can Burrow, Climb, Fly, or Swim instead of Striding if they have the corresponding movement type."
        },
        {
          "id": "oPeB6Pdk7r4yWjKg",
          "name": "Swarm Getaway",
          "kind": "action",
          "description": "The thousand thieves collapses into a shapeless swarm of their constituent creatures. They drop all but up to 3 Bulk of held, worn, or carried objects in their possession.\nIn this form, the thousand thieves can't use attack actions and can't cast spells, but they can move through areas small enough for their constituent creatures to fit without having to Squeeze. They can use the same action to coalesce from their swarm shape back into their normal form.\nAs the swarm moves, the thousand thieves carries these objects if they can fit through the spaces the swarm moves through. The thousand thieves automatically dons any of the objects they desire when they reform. If the thousand thieves is Hidden, Swarm Getaway doesn't reveal their location."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sumbreiva",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "DHzm2QFsaGTGgReI",
      "slug": "sumbreiva",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:88ea825a0f32a262b605b2ea5a6ab71a86a6214f0c995ad831f5599707b6c577",
    "translatableHash": "sha256:8dfa3d8981adb14efb9017cf0afd25865889f90a71d7eec804fd5aefc5345d96",
    "data": {
      "schemaVersion": 1,
      "name": "Sumbreiva",
      "level": 16,
      "rarity": "common",
      "size": "large",
      "traits": [
        "humanoid",
        "unholy",
        "void"
      ],
      "description": "Sumbreivas are the Void's unstoppable hunters, tracking down and destroying other creatures on their plane for sport and practice. Occasionally, they pass through a rift or are brought to the Universe via a binding circle, where they collect living souls to display as trophies.\nSumbreivas gather at Night Lodges, where they train and display their soul trophies, which appear as floating wisps of blue energy. The more formidable the soul, the more intense the blue glow that emanates from it. Sumbreivas in lodges periodically raid the Universe on a Night Hunt and compete to see who can bring back the most brilliant soul trophies. The winner of the Night Hunt leads the lodge until the next hunt. Night Lodges are ranked against each other by the accomplishments of the hunters within. All sumbreivas desire to capture a soul powerful enough to earn them placement in the Twilight Lodge, reserved for the truly elite souls and hunters.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 50,
      "perception": {
        "modifier": 29,
        "senses": [
          "greater-darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 33,
        "will": 27
      },
      "abilities": {
        "str": 8,
        "dex": 9,
        "con": 3,
        "int": 6,
        "wis": 5,
        "cha": 4
      },
      "skills": {
        "athletics": 28,
        "intimidation": 30,
        "stealth": 35,
        "survival": 29
      },
      "languages": [
        "aklo",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "drained"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hWM8J9YJMUURQXfY",
          "name": "Sumbreiva Huntblade",
          "bonus": 33,
          "damage": "3d8+16 piercing",
          "traits": [
            "agile",
            "death",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "vXx9ZSWSzAucpg0C",
          "name": "Sumbreiva Huntblade",
          "bonus": 33,
          "damage": "3d8+16 piercing",
          "traits": [
            "agile",
            "death",
            "magical",
            "thrown-30",
            "versatile-s"
          ]
        },
        {
          "id": "jd4ffYFTnRXJeEfO",
          "name": "Shadow Whip",
          "bonus": 33,
          "damage": "3d4+16 bludgeoning",
          "traits": [
            "agile",
            "death",
            "disarm",
            "finesse",
            "magical",
            "reach-10",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "n5SMJ7fIX77egWnc",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "j3AK1LWXtiagAIyq",
          "name": "Hunter's Triumph",
          "kind": "reaction",
          "description": "Trigger The sumbreiva kills a creature\nEffect The sumbreiva lets out a triumphant, bone-chilling howl. Every enemy in a @Template[type:emanation|distance:30] must succeed at a check (will, dc:36) save or become Frightened 3 (and Fleeing as long as it's frightened on a critical failure)."
        },
        {
          "id": "2mnzn4Sx8qOvTr4k",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "Y4GClSLqvM0MGVCw",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "MTVrcjdLgjaPD6H9",
          "name": "Claim Trophy",
          "kind": "action",
          "description": "The sumbreiva claims the soul of a creature they killed within the last minute. This works like Seize Soul, except that no black sapphire is required, and the soul is turned into a glowing blue light called a soul trophy. Anyone who kills the sumbreiva can then free the soul from any soul trophy by touching it and speaking the word for \"freedom\" in any language."
        },
        {
          "id": "Y1NE1hlPc2lmLYWh",
          "name": "Huntblade Brutality",
          "kind": "passive",
          "description": "The sumbreiva's huntblade deals an additional 2d8 precision damage to Drained, Frightened, or Off-Guard creatures."
        },
        {
          "id": "Bjp4Tko6mlGX7oM4",
          "name": "Whip Drain",
          "kind": "action",
          "description": "Requirements The sumbreiva has a creature Grabbed with their shadow whip\nEffect The grabbed creature must succeed at a check (fortitude, dc:38) save or become Drained 2 (Drained 3 on a critical failure). If the creature is already drained, this increases its drained value instead, to a maximum of Drained 4."
        },
        {
          "id": "tXrcZ9afNeAHkpPT",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "H7qIdDk2j4NoA9yi",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 28,
          "saveDc": 36,
          "spells": [
            {
              "id": "g92lZ9mt568bGxGw",
              "name": "Darkness",
              "rank": 4
            },
            {
              "id": "BI2rPArLKCEebrVE",
              "name": "Earthbind",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:bythos",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "oLfyxHNz8IX06ZcU",
      "slug": "bythos",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:39ddba84e71dba2fba8aef529d9b11e6a4000202581362426ec265818b74e8d3",
    "translatableHash": "sha256:1b178c830b2d111a63cd81589b30e043edd17e9657373c643790684a6b8e7a8d",
    "data": {
      "schemaVersion": 1,
      "name": "Bythos",
      "level": 16,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "The bythos is a guardian of space and time and ever seeks those who misuse planar and temporal magic. A bythos is a roughly humanoid creature with four arms and a body made of swirling clouds and mist. Despite their appearance, their body feels like dry stone. A bythos seeks out paradoxes caused by irresponsible planar or dimensional travelers and repairs breaches where the barriers between planes have become thin or damaged. If the mortals responsible remain in the area and cannot be convinced to cease their activities, the bythos has no qualms about removing them. Using their ability to manipulate time, a bythos might cause an opponent to quickly die of old age as time speeds up around them or cause a target to disappear from time and space.",
      "armorClass": 39,
      "hitPoints": 245,
      "speedFeet": 0,
      "perception": {
        "modifier": 30,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 26,
        "will": 30
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 5,
        "int": 7,
        "wis": 8,
        "cha": 5
      },
      "skills": {
        "arcana": 29,
        "athletics": 32,
        "deception": 25,
        "intimidation": 25,
        "nature": 30,
        "occultism": 29,
        "religion": 30,
        "stealth": 26
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 15"
        ]
      },
      "attacks": [
        {
          "id": "aNHpJbgvbOZz2Kpc",
          "name": "Fist",
          "bonus": 32,
          "damage": "3d8+16 bludgeoning; 2d8 cold",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "52OH24WzpzdT3ptJ",
          "name": "Envisioning",
          "kind": "passive",
          "description": "When a bythos conveys information, it does so wordlessly through psychic projections. This acts as Telepathy with a range of 100 feet but is understandable to all creatures regardless of whether they have a language.\nThe meaning to non-aeons can be vague and is often mysterious. A bythos can use this ability to communicate flawlessly with any other aeon on the same plane."
        },
        {
          "id": "duUBSQ13tI7iVahr",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "v1Nae4WDwZunhsHt",
          "name": "Regeneration 15 (Deactivated by Spirit)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Ai8J0A4OuhkDr7Cx",
          "name": "Confusing Gaze",
          "kind": "passive",
          "description": "30 feet. A creature that ends its turn in the aura must attempt a check (will, dc:34, options:area-effect,inflicts:confused) save. If it fails, it's Confused for 1 round (or [[/gmr 1d4 #rounds]]{1d4 rounds} on a critical failure)."
        },
        {
          "id": "x5lmNBtvBd1z0Azh",
          "name": "Temporal Reversion",
          "kind": "passive",
          "description": "Trigger The bythos fails or critically fails a check\nFrequency once per day\nEffect The bythos rerolls the triggering check and takes the better result."
        },
        {
          "id": "4PafOhYr090tdIQE",
          "name": "Aging Strikes",
          "kind": "action",
          "description": "The bythos make two fist Strikes against a single target. If both Strikes hit, the target attempts a check (fortitude, dc:37, options:inflicts:clumsy,inflicts:drained,inflicts:enfeebled) save. Creatures that don't get weaker with age or don't age are immune (GM's discretion).\nIf a creature becomes clumsy 4, drained 4, and enfeebled 4 due to Aging Strikes, it dies of old age.\nSuccess The creature is unaffected.\nFailure The creature becomes Clumsy 1, Drained 1, and Enfeebled 1, or increases each of these conditions by 1. This effect is cumulative with other aging strikes from bythoses, to a maximum of clumsy 4, drained 4, and enfeebled 4.\nCritical Failure As failure, but the creature becomes Clumsy 2, Drained 2, and Enfeebled 2, or increases these conditions by 2."
        },
        {
          "id": "WPlqW6SIzbL8jscs",
          "name": "Focused Gaze",
          "kind": "action",
          "description": "The bythos focuses its gaze on a creature it can see within 30 feet. The target must attempt a save against the bythos's confusing gaze. A bythos can't use this ability against the same creature more than once per turn."
        },
        {
          "id": "Qgjku7yO52q21NCG",
          "name": "Temporal Flurry",
          "kind": "action",
          "description": "The bythos makes four fist Strikes. Its multiple attack penalty increases normally with each attack."
        },
        {
          "id": "bBQMy1lr5xW6rBgj",
          "name": "Temporal Strike",
          "kind": "action",
          "description": "The bythos touches a creature or object to displace it from time. The target attempts a check (fortitude, dc:37, options:damaging-effect,inflicts:slowed) save.\nCritical Success The target is unaffected.\nSuccess Time flows around the target; the target is Slowed 1 for 1 round.\nFailure The target disappears from the present moment and reappears in the same location [[/gmr 1d4 #rounds]]{1d4 rounds} later as if no time had passed for it. If a creature or object occupies that space when the target returns, the target appears in the closest available space to its original location.\nCritical Failure As failure, but the target is Slowed 1 for an extra [[/gmr 1d4 #rounds]]{1d4 rounds} after it returns."
        }
      ],
      "spellcasting": [
        {
          "id": "xoV74Ad4ZTLkT5re",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 27,
          "saveDc": 37,
          "spells": [
            {
              "id": "fHXgvepJIvBNCf0d",
              "name": "Planar Tether (At Will)",
              "rank": 4
            },
            {
              "id": "vclxLzAcHsqMb2Hy",
              "name": "Slow",
              "rank": 6
            },
            {
              "id": "o3SBPtudj8EOx6tQ",
              "name": "Haste",
              "rank": 7
            },
            {
              "id": "i8rrNITUp2EBQomq",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "xtFJ6D3ynW8fWsLO",
              "name": "Planar Seal",
              "rank": 7
            },
            {
              "id": "f3vr26g0eMikP4g5",
              "name": "Planar Tether",
              "rank": 7
            },
            {
              "id": "on6R2h7L5PDyMX3G",
              "name": "Augury (At Will)",
              "rank": 8
            },
            {
              "id": "vF7klbtipuQKo2EQ",
              "name": "Teleport",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-ancient",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XOmx4kDjRW47dc9Z",
      "slug": "whisper-dragon-ancient",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8e0c7404cf2619509133e16de5eb7604416baaec2e389c4fa31488cd089e3f5e",
    "translatableHash": "sha256:e400c59ce465a968dabd9ffb3e376d3c235c01236adfa96903692a28f0c77dbb",
    "data": {
      "schemaVersion": 1,
      "name": "Whisper Dragon (Ancient)",
      "level": 16,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Whisper dragons are keen collectors of rumors and secrets who spend centuries honing their information networks and relationships. They generally do so not out of an intent to hold the information over others or to use for their own machinations, but simply because the process of learning and gathering information is fulfilling. Their hoards are sparse compared to those of other dragons, as they hold their true treasures—secrets—in their minds.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 60,
      "perception": {
        "modifier": 28,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 26,
        "will": 30
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 9,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 29,
        "deception": 28,
        "diplomacy": 30,
        "intimidation": 28,
        "occultism": 31,
        "society": 35,
        "stealth": 29
      },
      "languages": [
        "common",
        "draconic",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wvf12gsmaiIEZNk8",
          "name": "Jaws",
          "bonus": 32,
          "damage": "3d12+15 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "vfwwJaezS2MAmsRg",
          "name": "Claw",
          "bonus": 32,
          "damage": "3d10+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "cdWBM7kdsVKs9q9W",
          "name": "Tail",
          "bonus": 30,
          "damage": "3d10+15 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "RewnHFknAi7tSXI5",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zkcQGrvQXeO0d4YV",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eyJ8okEtlxlLWhjy",
          "name": "Information Network",
          "kind": "passive",
          "description": "The dragon can attempt a Society check to Recall Knowledge in place of a check to Gather Information, recalling intelligence from prior informants."
        },
        {
          "id": "o5snVqE0HFhxfgMS",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "vSiPTgWIPTPTQIaI",
          "name": "+2 Status To All Saves Vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VnvkdDxkW7wfBMjT",
          "name": "Diplomatic Solution",
          "kind": "passive",
          "description": "Trigger The dragon rolls initiative\nEffect The dragon targets all enemies it can see within @Template[emanation|distance:60]{60 feet} with Calm heightened to a rank equal to half the dragon's level rounded up (check (will, dc:35) save). The dragon doesn't need to Sustain this effect, but if the dragon takes any hostile action against those affected, it breaks the effect for all creatures."
        },
        {
          "id": "XZUptOpkSx0PYtkI",
          "name": "Distracting Whisper",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect A mysterious voice whispers something disconcerting in the triggering creature's ear, inflicting a –2 circumstance penalty to the triggering attack.\nEffect: Distracting Whisper"
        },
        {
          "id": "WdFNthO0BdxIqruL",
          "name": "Cogitation Breath",
          "kind": "action",
          "description": "The dragon unleashes a befuddling miasma, dealing 15d6[mental|options:area-damage] damage in a @Template[type:cone|distance:50] (check (will, dc:37, basic, options:area-effect,inflicts:stupefied) save). A creature that fails its save is Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute. The dragon can't use Cogitation Breath again for [[/gmr 1d4 #Recharge Cogitation Breath]]{1d4 rounds}."
        },
        {
          "id": "foIbgbTavh92IEGM",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one tail Strike in any order."
        },
        {
          "id": "gnFWINeBp8o39lnC",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Cogitation Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "EZmRWrf1EQnbLdow",
          "name": "Steal Knowledge",
          "kind": "action",
          "description": "The dragon plucks a fragment of knowledge from the mind of a creature within 60 feet, choosing a skill to affect. The creature must attempt a check (will, dc:35) save.\nSuccess The creature is unaffected.\nFailure For the next minute, the creature takes a –1 status penalty to checks using that skill, and the dragon gets a +1 status bonus to using that skill.\nCritical Failure As failure, but the penalty is –2 and the bonus is +2."
        },
        {
          "id": "MuGx1WSbRysKWzyR",
          "name": "Thought Whispers",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The dragon sends their mind out to seek others' thoughts, affecting all creatures within 60 feet with Mind Reading (check (will, dc:37))."
        },
        {
          "id": "dWk0sE2yMPmzHdY2",
          "name": "Unveil Secret",
          "kind": "action",
          "description": "The dragon delves into the mind of a creature within 60 feet to scour for secrets, learning something the creature would find embarrassing or shameful unless they succeed a check (will, dc:37, options:inflicts:frightened) save. The target becomes Frightened 1 and can't reduce their frightened condition for 1 minute or until the dragon reveals the secret. As a reaction when the affected creature attempts a check, the dragon can reveal their secret to discomfit them, requiring them to roll twice and take the lower result; this is a misfortune effect."
        }
      ],
      "spellcasting": [
        {
          "id": "hQpLecGIr5JQkFUk",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 37,
          "spells": [
            {
              "id": "HKxrPd7BmHbJHUzU",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "WRO85FOUCRQYw8f6",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "iBK9DfO7gl7b2LHG",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "bFBjTjzbnNzg2hlz",
              "name": "Clairaudience (At Will)",
              "rank": 3
            },
            {
              "id": "gTsBfiveHO30gIiq",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "oSegsy2nlB1nIiYd",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "uN0n5eW8uwlWZT33",
              "name": "Clairvoyance (At Will)",
              "rank": 4
            },
            {
              "id": "1vcENX05gySjee84",
              "name": "Mind Probe",
              "rank": 5
            },
            {
              "id": "Ir9t7e5MS8myj2x5",
              "name": "Retrocognition",
              "rank": 7
            },
            {
              "id": "3gTrRmpHmJp3nAXr",
              "name": "Charm",
              "rank": 8
            },
            {
              "id": "tQtN5r13akaj0cmQ",
              "name": "Hidden Mind (Constant)",
              "rank": 8
            },
            {
              "id": "isUZZ0SGjSZpuk1r",
              "name": "Suggestion",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:whisper-dragon-ancient-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Ymk65Vujq2Y5US9r",
      "slug": "whisper-dragon-ancient-spellcaster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0d73a70e73af742fba814cae30d7e70bbf8918f9de2b3d22d0bc88f03e7a609e",
    "translatableHash": "sha256:d0231799a0fc164eb8f2e54db167e824670a243a5c006fe07eda6f0b1f45383b",
    "data": {
      "schemaVersion": 1,
      "name": "Whisper Dragon (Ancient, Spellcaster)",
      "level": 16,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Whisper dragons are keen collectors of rumors and secrets who spend centuries honing their information networks and relationships. They generally do so not out of an intent to hold the information over others or to use for their own machinations, but simply because the process of learning and gathering information is fulfilling. Their hoards are sparse compared to those of other dragons, as they hold their true treasures—secrets—in their minds.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 60,
      "perception": {
        "modifier": 28,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 26,
        "will": 30
      },
      "abilities": {
        "str": 7,
        "dex": 5,
        "con": 6,
        "int": 9,
        "wis": 6,
        "cha": 8
      },
      "skills": {
        "acrobatics": 27,
        "athletics": 29,
        "deception": 28,
        "diplomacy": 30,
        "intimidation": 28,
        "occultism": 31,
        "society": 35,
        "stealth": 29
      },
      "languages": [
        "common",
        "draconic",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wvf12gsmaiIEZNk8",
          "name": "Jaws",
          "bonus": 32,
          "damage": "3d12+15 piercing",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "vfwwJaezS2MAmsRg",
          "name": "Claw",
          "bonus": 32,
          "damage": "3d10+15 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "cdWBM7kdsVKs9q9W",
          "name": "Tail",
          "bonus": 30,
          "damage": "3d10+15 bludgeoning",
          "traits": [
            "magical",
            "reach-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "grzbAxCj4fn2b21c",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zkcQGrvQXeO0d4YV",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eyJ8okEtlxlLWhjy",
          "name": "Information Network",
          "kind": "passive",
          "description": "The dragon can attempt a Society check to Recall Knowledge in place of a check to Gather Information, recalling intelligence from prior informants."
        },
        {
          "id": "o5snVqE0HFhxfgMS",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "vSiPTgWIPTPTQIaI",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VnvkdDxkW7wfBMjT",
          "name": "Diplomatic Solution",
          "kind": "passive",
          "description": "Trigger The dragon rolls initiative\nEffect The dragon targets all enemies it can see within @Template[emanation|distance:60]{60 feet} with Calm heightened to a rank equal to half the dragon's level rounded up (check (will, dc:35) save). The dragon doesn't need to Sustain this effect, but if the dragon takes any hostile action against those affected, it breaks the effect for all creatures."
        },
        {
          "id": "XZUptOpkSx0PYtkI",
          "name": "Distracting Whisper",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted with an attack\nEffect A mysterious voice whispers something disconcerting in the triggering creature's ear, inflicting a –2 circumstance penalty to the triggering attack."
        },
        {
          "id": "WdFNthO0BdxIqruL",
          "name": "Cogitation Breath",
          "kind": "action",
          "description": "The dragon unleashes a befuddling miasma, dealing 15d6[mental|options:area-damage] damage in a @Template[type:cone|distance:50] (check (will, dc:37, basic, options:area-effect,inflicts:stupefied) save). A creature that fails its save is Stupefied 1 (Stupefied 2 on a critical failure) for 1 minute. The dragon can't use Cogitation Breath again for [[/gmr 1d4 #Recharge Cogitation Breath]]{1d4 rounds}."
        },
        {
          "id": "EZmRWrf1EQnbLdow",
          "name": "Steal Knowledge",
          "kind": "action",
          "description": "The dragon plucks a fragment of knowledge from the mind of a creature within 60 feet, choosing a skill to affect. The creature must attempt a check (will, dc:35) save.\nSuccess The creature is unaffected.\nFailure For the next minute, the creature takes a –1 status penalty to checks using that skill, and the dragon gets a +1 status bonus to using that skill.\nCritical Failure As failure, but the penalty is –2 and the bonus is +2."
        },
        {
          "id": "MuGx1WSbRysKWzyR",
          "name": "Thought Whispers",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The dragon sends their mind out to seek others' thoughts, affecting all creatures within 60 feet with mind reading (check (will, dc:37))."
        },
        {
          "id": "dWk0sE2yMPmzHdY2",
          "name": "Unveil Secret",
          "kind": "action",
          "description": "The dragon delves into the mind of a creature within 60 feet to scour for secrets, learning something the creature would find embarrassing or shameful unless they succeed a check (will, dc:37) save. The target becomes Frightened 1 and can't reduce their frightened condition for 1 minute or until the dragon reveals the secret. As a reaction when the affected creature attempts a check, the dragon can reveal their secret to discomfit them, requiring them to roll twice and take the lower result; this is a misfortune effect."
        }
      ],
      "spellcasting": [
        {
          "id": "cRcIL2SXgdemjq4p",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 29,
          "saveDc": 37,
          "spells": [
            {
              "id": "oGxN8Dptzr9qHsee",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "O88kR5J5SE3DST5O",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "PRAM9jvMAKa68okG",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "uisHs6IeQnrIWNsQ",
              "name": "Disguise Magic",
              "rank": 1
            },
            {
              "id": "4Ot2vYWzmA3lnkbT",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "cv6TM8d2MVxDKoxP",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "ytfJdvX4cXWlusMU",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "agKADALez9cbUYML",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "Y99tw7IkPX5NpOHR",
              "name": "Clear Mind",
              "rank": 2
            },
            {
              "id": "xinTbmaOHepnxb0G",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "OFvSS0hmtTpAmVNo",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "7CfPUs5wTKkyivI9",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "QXpvAcJPi47LPfv5",
              "name": "Hypercognition",
              "rank": 3
            },
            {
              "id": "3hfm7HDMQW3tWHXn",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "hxn7aBYboqdZTH3z",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "xTKfznWFdJqZoz9l",
              "name": "Detect Scrying",
              "rank": 4
            },
            {
              "id": "wkDHW4ofDUQB7Tfs",
              "name": "Rewrite Memory",
              "rank": 4
            },
            {
              "id": "X0JTvsLlcuEY5Lmi",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "LGyGFsYCV5U2dqKw",
              "name": "Sending",
              "rank": 5
            },
            {
              "id": "UVQzVd09ULPvZGZu",
              "name": "Synaptic Pulse",
              "rank": 5
            },
            {
              "id": "7K6gat6xrjtRFWhq",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "FxTMotIP7dCEMEbG",
              "name": "Teleport",
              "rank": 6
            },
            {
              "id": "9EciU0Za6QYRd2Yv",
              "name": "Zealous Conviction",
              "rank": 6
            },
            {
              "id": "3RUWVgFu14tz0Yeo",
              "name": "Interplanar Teleport",
              "rank": 7
            },
            {
              "id": "LmDyY53UhFb1cwjl",
              "name": "Project Image",
              "rank": 7
            },
            {
              "id": "OsHnypzznqczTE2r",
              "name": "Retrocognition",
              "rank": 7
            }
          ]
        },
        {
          "id": "hQpLecGIr5JQkFUk",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 37,
          "spells": [
            {
              "id": "HKxrPd7BmHbJHUzU",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "WRO85FOUCRQYw8f6",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "iBK9DfO7gl7b2LHG",
              "name": "Embed Message",
              "rank": 2
            },
            {
              "id": "bFBjTjzbnNzg2hlz",
              "name": "Clairaudience (At Will)",
              "rank": 3
            },
            {
              "id": "gTsBfiveHO30gIiq",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "oSegsy2nlB1nIiYd",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "uN0n5eW8uwlWZT33",
              "name": "Clairvoyance (At Will)",
              "rank": 4
            },
            {
              "id": "1vcENX05gySjee84",
              "name": "Mind Probe",
              "rank": 5
            },
            {
              "id": "Ir9t7e5MS8myj2x5",
              "name": "Retrocognition",
              "rank": 7
            },
            {
              "id": "3gTrRmpHmJp3nAXr",
              "name": "Charm",
              "rank": 8
            },
            {
              "id": "tQtN5r13akaj0cmQ",
              "name": "Hidden Mind (Constant)",
              "rank": 8
            },
            {
              "id": "isUZZ0SGjSZpuk1r",
              "name": "Suggestion",
              "rank": 8
            }
          ]
        }
      ]
    }
  }
]
