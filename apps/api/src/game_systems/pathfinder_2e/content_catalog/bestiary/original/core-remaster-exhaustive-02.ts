import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_02_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ghoul-stalker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "iLkQt8A99nQWUI8k",
      "slug": "ghoul-stalker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2cd6882b6346d49de074d954e44d0b5a43a30f7b4c3e96c12f313d9617b3a9a0",
    "translatableHash": "sha256:420b1d060fdadacda00be5ee8c4537806802546e0bfb7d28aa2f8c0191c21abc",
    "data": {
      "schemaVersion": 1,
      "name": "Ghoul Stalker",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "ghoul",
        "undead",
        "unholy"
      ],
      "description": "Ghouls stalkers are ravenous undead who haunt graveyards and eat corpses.\nFew creatures are more ubiquitous to sinister locations such as lonely graveyards and ruined crypts than the flesh-eating undead known as ghouls.",
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
        "fortitude": 4,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "stealth": 7,
        "survival": 5
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
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XJHXZOImLOORwInT",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d8+1 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "A97t9GcQF8k7V7By",
          "name": "Claw",
          "bonus": 9,
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
          "id": "YzGXgyojcjzXVipz",
          "name": "Stench",
          "kind": "passive",
          "description": "10 feet. check (fortitude, dc:14, options:area-effect,inflicts:sickened,inflicts:slowed)"
        },
        {
          "id": "dSMYHVMIltxeN4ms",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7RTjFlVzsxhjtwX4",
          "name": "Consume Flesh",
          "kind": "action",
          "description": "Requirements The ghoul is adjacent to the corpse of a creature that died within the last hour.\nEffect The ghoul devours a chunk of the corpse and regains 1d6[healing] Hit Points.\nIt can regain Hit Points from any given corpse only once."
        },
        {
          "id": "jShRo5PDthe4aFDT",
          "name": "Ghoul Whispers",
          "kind": "action",
          "description": "Requirements A Grabbed, Paralyzed, Restrained, or Unconscious creature is within the ghoul's reach\nEffect The ghoul whispers dark thoughts and vile cravings into the creature's ears. The creature must save against the forbidden cravings curse.\nForbidden Cravings (curse) A creature can still eat and drink while sickened by this curse\nSaving Throw check (will, dc:17, traits:curse)\nStage 1 carrier with no ill effects (1 day)\nStage 2 2d6[void] damage and the target is Sickened 1 until it consumes raw meat (1 day)\nStage 3 as stage 2\nStage 4 as stage 2 unless the target has consumed raw meat in the past 24 hours, then it takes 4d6[void] damage and is Sickened 2 until it consumes raw meat;\nStage 5 if the creature has eaten raw meat in the past 24 hours, it dies and rises as a ghoul, if not, it returns to stage 4"
        },
        {
          "id": "Eio9qRZi4Wxz6XXD",
          "name": "Grave Knowledge",
          "kind": "passive",
          "description": "[[/r 1d20+7]]{+7} skill modifier\nFrequency once per hour\nEffect The ghoul calls upon knowledge it retains from one creature it has consumed in the past 7 days. The ghoul attempts a skill check using a skill in which the consumed creature was trained (if it's unclear whether the creature was trained, the GM decides). The ghoul is treated as trained and uses the high skill modifier for the ghoul's level. This takes the same amount of actions or time as usual for the check.\nThe ghoul can instead automatically learn something specific known by a creature it consumed in the last 7 days, like the location of a Hidden treasure or the name of a loved one. The ghoul can do this only once for a given creature, no matter how much of its flesh the ghoul consumed."
        },
        {
          "id": "rvraBop9oOSwcjkq",
          "name": "Swift Leap",
          "kind": "action",
          "description": "The ghoul jumps up to half its Speed. This movement doesn't trigger reactions."
        },
        {
          "id": "NaSXwkNPzNz5tsgw",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lyrakien",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "iNwaxIYuD0OTDNjJ",
      "slug": "lyrakien",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1ee04835f3c6c2a9333ccfeb1b7a855e28280f64942140daa49c67c238d2b452",
    "translatableHash": "sha256:2bc006f8b066372264e17e4fc43194fdcaeff9e5a9ffcb1d70ee136e740c3b1a",
    "data": {
      "schemaVersion": 1,
      "name": "Lyrakien",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "azata",
        "celestial",
        "holy"
      ],
      "description": "Lyrakiens are musical messengers and embodiments of free travel. They serve Desna and other deities and empyreal lords of Elysium but are quite fond of free time as a fundamental concept and are always on the hunt for opportunities to pause in their duties to enjoy music or appreciate a moment of beauty. They love contests, stories, and songs, and they often challenge mortals to musical contests or pester them to share grand tales of their exploits. Lyrakiens rely on their agility to avoid conflicts, but they do their best to defend places of great natural beauty, especially against foes they can damage with their starlight. Lyrakiens have an innate wanderlust and rarely stay in the same place for very long. Some travel alongside adventurers, often writing songs about their quests and feats of derring-do.\nThough light-hearted creatures, lyrakiens don't let their whimsical personalities get in the way of protecting breathtaking natural locations. Sometimes called \"glistenwings\" by gnomes and halflings, they are frequently mistaken for sprites or similar fey, a bit of confusion that many lyrakiens find amusing and fertile ground for shenanigans involving those they deem deserving of a bit of unexpected fun and discord in their lives.\nAzatas are manifestations of freedom and unestrained joy—kindly celestials with a penchant for curious exploration, spontaneous revelry, and whimsical quests. Born of good dreams and heartfelt wishes for a better world, they reside in the untamable wilds of Elysium. Azatas are passionate and mercurial, as beautiful and bright as a child's fantasy, but also fiercely loyal to those they hold dear. They act quickly and directly against fiendish and foul influences, but they tend to avoid guiding mortal affairs otherwise, allowing people to choose their own destiny without the meddling of otherworldly forces.\nAzatas reject the dual chains of both duty and tyranny, but also the heavy chains of despair that reality so often inflicts upon those who live in it. This can give them a dubious reputation with other celestials, who consider azatas to be flighty and unreliable, but azatas know that unrelenting self-sacrifice can be just as destructive to the soul as evil. Azatas refuse to compromise the beauty of the world with such banality, instead living without regret and savoring every triumph and agony they encounter upon the way.",
      "armorClass": 17,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "acrobatics": 9,
        "diplomacy": 6,
        "performance": 8,
        "religion": 6,
        "stealth": 7
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
          "cold-iron 3",
          "unholy 3"
        ]
      },
      "attacks": [
        {
          "id": "kNOnudI7TvbeSrjS",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4-2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "holy",
            "magical",
            "reach-0",
            "unarmed"
          ]
        },
        {
          "id": "8Eq3jy4LyDtP6mLP",
          "name": "Starlight Ray",
          "bonus": 7,
          "damage": "2d4 spirit",
          "traits": [
            "holy",
            "light"
          ]
        }
      ],
      "actions": [
        {
          "id": "hWuV8klRcI0Txecg",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "mB9tYATe35GSN6Tm",
          "name": "Starlight Blast",
          "kind": "action",
          "description": "The lyrakien unleashes a blast of holy starlight in a @Template[emanation|distance:5]. Enemies in the area take 2d6[spirit|options:area-damage] damage with a check (reflex, dc:17, basic, options:area-effect) save. The lyrakien can't use Starlight Blast or their starlight ray ranged attack for [[/gmr 1d4 #Recharge Starlight Attacks]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "wmnFY6ylzPcsOlEb",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "O2nvLV0zV5VlUnb7",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "SCTex0N6bEQHR6FF",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "SBHZGCHCMW3baIOB",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "uvKxUDTfMZkIwvAd",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "pTPVH5l4QWXBn04a",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "kYfwr0Z0pbJ3tCeu",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "FurBAMUZahFmaexn",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hryngar-bombardier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KDbJ402jFuvn5frX",
      "slug": "hryngar-bombardier",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0dc61a16cdcf3ee4e46d87fa3dd81c676a3a11a0aa33dcca182e4e0ce0c26775",
    "translatableHash": "sha256:c631406126314e058b01af9d4c09b7661a582b98a1e0f617e8fc0db65b5ddf53",
    "data": {
      "schemaVersion": 1,
      "name": "Hryngar Bombardier",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "duergar",
        "dwarf",
        "humanoid"
      ],
      "description": "Hryngar chemists have a knack for creating alchemical grenades. Their traditions often motivate them to constantly experiment and innovate, though the hostile nature of their environs tends to focus these innovations on weapons or other tools of war. Hryngar bombardiers eagerly steal notes and secrets from their underlings, pushing their students to cut corners to produce results while gleefully pillaging the credit and profits. For those hryngar bombardiers who find themselves pressed into combat service, each thrown grenade represents a new opportunity to observe the suffering they inflict, before eagerly incorporating that data into their next experiment or innovation to create an even more terrible tool of torment.\nDeep beneath the surface, the dour dwarves known as hryngars stubbornly toil, claiming the ancestral subterranean homelands of other dwarves as their own. Long ago, hryngar leaders refused to venture to the surface along with their \"cousins,\" forsaking the Quest for Sky. An exiled dwarven deity named Droskar offered hryngars salvation from the horrors that beset them in the Darklands, offering them power, cunning, and knowledge in exchange for their unending servitude. Many hryngar believe that by working harder than their brethren, they can build a society far greater than anything under the sun, claiming unending riches from the planet's metallic veins in days of relentless toil.\nThrough Droskar's blessings and their own fearsome work ethic, hryngar kingdoms now rule a significant portion of the upper Darklands region of NarVoth, and it's common to see hryngar caravans moving through the tunnels, drawn by teams of immense beetles. Hryngar leadership typically consists of powerful divine servants of Droskar, along with fearsomely implacable warriors whose martial prowess, backed by innate occult magic, ensures they can overcome any direct threat to hryngar rule. Almost every aspect of hryngar society is controlled by a strict hierarchy of leadership, with taskmasters directing subordinates across all walks of life.",
      "armorClass": 18,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 3,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "crafting": 6,
        "occultism": 6,
        "stealth": 6,
        "survival": 4
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
          "id": "zzGNgcKnTWZFH3Jk",
          "name": "Warhammer",
          "bonus": 4,
          "damage": "1d8+1 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "3CnrHzUIOLwPADKX",
          "name": "Alchemical Grenade",
          "bonus": 8,
          "damage": "1d6 acid",
          "traits": [
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "eC2m3UsmYtbLG0VQ",
          "name": "Alchemical Grenades",
          "kind": "passive",
          "description": "A hryngar bombardier carries 6 alchemical grenades that deal either acid, cold, or fire damage plus 1 persistent damage and 1 splash damage of the same type (typically two of each). The bombardier replenishes these grenades each day using easily collected materials."
        },
        {
          "id": "bWytg8B4wFHQLuzN",
          "name": "+2 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Q8ir96PaHjj9G372",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KyvMw6gZ8XlbMZI6",
          "name": "Quick Bombardier",
          "kind": "action",
          "description": "The hryngar bombardier draws an alchemical grenade with an Interact action and throws it as a ranged Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "L6gROwj7mQVM2d4k",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "IVPjG9IPgI3sJsCT",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "M2Cc9dfxVi3n0JuQ",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "7Euxh7ROvGz96aCW",
              "name": "Paranoia",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:goblin-pyro",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Ky5eNRvN71O0tY9l",
      "slug": "goblin-pyro",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d595b33e2aeae7d7cdac34d292b84a514708fd81e8ea2d438c6426977c8ae858",
    "translatableHash": "sha256:19937f615b15f9874ceacb2c02a4c64fffaaf25395715ebd4967bf25f7d55541",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Pyro",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "Some goblins take their people's admiration of fire fully into the realm of deadly obsession. These pyromaniacs can be a great boon to a band of goblin raiders eager to torch their enemies and wreak havoc. More often, however, their presence is a double-edged sword; in the heat of the moment, goblin pyros sometimes lose sight of their tribe's goals and simply set fire to anything that will burn—including their own allies. Goblin squads are also prone to distraction, and more than one goblin raid has failed because its members were too busy watching a massive blaze.\nThese small humanoids typically have green or gray skin and large heads with wide ears. While some goblins are civilized and have worked hard to be considered upstanding members of humanoid communities, many are impetuous and vicious creatures who delight in wreaking havoc. These goblins think nothing of slaughtering livestock, stealing, or burning down a building purely for momentary delight. They revel in playing malicious tricks on taller humanoids, whom they call \"longshanks.\"\nGoblins are superstitious, with an intense awe of magic and a fascination with fire; goblins who master magic or fire earn great respect from their kin. Most other humanoids find it difficult to understand goblins' outlook: they hate canines but eagerly share their lairs with so-called \"goblin dogs,\" they fearlessly attack larger creatures but are terrified of horses, and they despise vegetables yet consider pickles a delicacy. To a goblin, of course, these are all perfectly sensible life choices.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": -1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "stealth": 7
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
      "attacks": [],
      "actions": [
        {
          "id": "otqsXx9gjh7rnOpU",
          "name": "Goblin Scuttle",
          "kind": "reaction",
          "description": "Trigger A goblin ally ends a move action adjacent to the goblin.\nEffect The goblin pyro Steps."
        }
      ],
      "spellcasting": [
        {
          "id": "M22baNr3EaRn3JZr",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 6,
          "saveDc": 16,
          "spells": [
            {
              "id": "DetGVSE89umH0luA",
              "name": "Breathe Fire",
              "rank": 1
            },
            {
              "id": "pnvP3R3Su3lzlcuO",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "rl60B9SQZ9lf7wKH",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "uhu8UqT03F4VMNRh",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "AczKn79L1zrglwmW",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "R5pfnHcUBsW1GlLj",
              "name": "Telekinetic Hand",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:halfling-troublemaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "L39Fr3dewrvIK2LE",
      "slug": "halfling-troublemaker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:69097034927b8b2bc64fb2f08362189fce52ec40c4bd00bb8c2876246841ddd2",
    "translatableHash": "sha256:b0f26fbc3d65ca7c901df7eee3d5f0748a4aba80797c6b03109c1a46fc2252e0",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Troublemaker",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "halfling",
        "humanoid"
      ],
      "description": "A halfling's bravado can sometimes lead them into trouble. These tricksters often roam in groups trying to one-up each other's last prank. While troublemakers rarely intend to kill, occasionally their pranks get out of hand.\nDespite their small stature, a halfling can prove to be a mighty foe if you find yourself on the wrong side of their frying pan.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 3,
        "deception": 5,
        "stealth": 7,
        "thievery": 7
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
          "id": "vHbA9tHrabp07oBC",
          "name": "Filcher's Fork",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6",
            "finesse"
          ]
        },
        {
          "id": "HPnWIiqWhmig1JEu",
          "name": "Filcher's Fork",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "upfgXZWcGklPhe0Z",
          "name": "Graffiti Egg",
          "kind": "action",
          "description": "The halfling troublemaker throws an egg filled with paint, glitter, and confetti at a creature within 30 feet. The target must succeed a check (reflex, dc:17, options:inflicts:dazzled) saving throw or become Dazzled for 1 round (or 1 minute on a critical failure)."
        },
        {
          "id": "BoBYJI6l42pBuF55",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of it.\nWhenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one."
        },
        {
          "id": "ozDaOzY9F0Tj8vaI",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The troublemaker deals an extra 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:jinkin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "lFDYJOIp2knQ0IRY",
      "slug": "jinkin",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fb0eb080f495f3eb7b707162eefb0ebf0a8cd33d626f92358d699aa2c6b0a2f4",
    "translatableHash": "sha256:e56c9476544ee090d6140faee50664722b4ae3aeadf7cd867beeb847075118e2",
    "data": {
      "schemaVersion": 1,
      "name": "Jinkin",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "gremlin"
      ],
      "description": "Jinkins are sadistic tinkers who steal and sabotage items and take great pride in their power to curse precious objects. They hold grudges and create convoluted plans for revenge when they feel slighted, such as when a creature dares to remove one of their curses. Rarely content to wreak simple mayhem, jinkins also take immense pleasure in torture and murder, though they prefer to lead victims into traps designed to capture or incapacitate rather than just kill them outright. Deep pits are a preferred method, since victims who survive their fall face a slow death from starvation and thirst while jinkins gather at the edge of pits to tease and torment them.\nGremlins are cruel fey tricksters and saboteurs who have fully acclimated to life in the Universe, finding distinct niches for their inventive destructiveness. Nearly all gremlins delight in ruining or breaking things, whether it's something physical like a device or vehicle or something intangible such as an alliance or relationship. A gremlin's greatest joy is watching the collapse of complex creations, preferably after the slightest, carefully targeted nudge from the gremlin. Gremlins tend to denigrate, bully, or even slaughter their lesser kin, particularly mitflits, whom stronger gremlins derisively call \"baggies.\"",
      "armorClass": 15,
      "hitPoints": 19,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "crafting": 5,
        "deception": 5,
        "nature": 5,
        "stealth": 7,
        "thievery": 7
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
          "id": "pJ0uK52j5EXZwNhb",
          "name": "Shortsword",
          "bonus": 9,
          "damage": "1d6-2 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "oObpBdGWzojxRdfS",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The jinkin deals 1d6 extra precision damage to Off-Guard creatures."
        },
        {
          "id": "fHam88iT0r3U5tcl",
          "name": "Tinker",
          "kind": "passive",
          "description": "A group of six jinkins can work together for an hour to imbue an item with a curse at a range of 60 feet. While this process is lengthy, it's also unobtrusive and can be performed while Hiding. Jinkins prefer to use this ability on magic items. The curse makes the item unreliable (check (flat, dc:5) check or waste any action to Interact with or Activate the item), adds a bizarre requirement to use the item, or imparts some other curse of a similar caliber."
        }
      ],
      "spellcasting": [
        {
          "id": "5rP5cz0JHgxkYHIF",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "iqKvwR33VgnA6XRV",
              "name": "Prestidigitation",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-gecko",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mathcxCcrQmn9Jj8",
      "slug": "giant-gecko",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:820500ce71dddd4964fd1a5bd3465209df6ecab2f71d6e9e0c10db02d6e05f9f",
    "translatableHash": "sha256:3d413ff0985b35449b7ff0506389fa53d9e143964b80bc898f49685cf2ef6a3a",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Gecko",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "These roughly human-sized reptiles have amazing feet capable of clinging tenaciously to any surface. Giant geckos are typically docile and shy but can be aggressive when cornered or defending their territory. These large-eyed lizards are found in a wide variety of habitats, from rain forests and deserts to mountain slopes or even underground caverns. They spend most of their time climbing around in large trees or on rocky cliffs, whether hunting for small animals or hiding from predators. A giant gecko's scales are often quite brightly colored or decorated in intricate patterns. Giant geckos span nearly 8 feet in length from head to tail, and they weigh about 120 pounds.\nGiant geckos are sometimes used by smaller humanoids as guardians or mounts, as their docile nature makes them relatively easy to tame and train. Their superior climbing skills make giant geckos particularly popular within societies that dwell underground or near cliffs, such as goblins and kobolds. Their bright coloration also makes them favorite pets in high society.\nLizards have a wide range of appearances and abilities, but most share a basic reptilian shape—long tails, wide toothy mouths, and four legs. While a few species are capable of movement on two legs for short periods of time, most are strictly quadrupedal. The three species presented here represent the most common and well-known of the larger species.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 5,
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
          "id": "JUlSpx5USh1nfM12",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VMzhTqEkTw0QRQvq",
          "name": "Uncanny Climber",
          "kind": "passive",
          "description": "A giant gecko's feet allow it to climb virtually any surface, no matter how slick or sheer. If a giant gecko attempts an Athletics check to Climb and critically fails, it gets a failure instead."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:air-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "MSm1im7lZA5i82rz",
      "slug": "air-scamp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:03cc09fd74885aa0c8fdd156c4c0ae0927923dd701d3e49d73738a587e18bc25",
    "translatableHash": "sha256:fe91c00d0eb4b02aaaf937ced330c44ad7fd56adc200f14d36276b2e51a71d01",
    "data": {
      "schemaVersion": 1,
      "name": "Air Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "A pale blue head and paper-thin wings peek out from the cloud that clings to the air scamp. Air scamps are short-sighted and flighty, even relative to their kin; they are as likely to fly recklessly into battle as they are to whine in terror at a loud noise.\nElemental scamps are bat-like critters marked by elemental powers. Scamps are dispatched from the Elemental Planes by more powerful residents or called to the Universe by neophyte summoners. All scamps have a hint of magical power due to a lingering connection to their home plane, which they largely use to pull simple pranks.\nScamps rapidly form a pecking order of cleverness. Humanoids often confuse scamps when meeting such creatures for the first time. These confused scamps usually resort to an escalating series of pranks and mischief, seeing what they can get away with to establish their place in the hierarchy.",
      "armorClass": 16,
      "hitPoints": 12,
      "speedFeet": 20,
      "perception": {
        "modifier": 3,
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
        "str": 1,
        "dex": 4,
        "con": 0,
        "int": -2,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "stealth": 7
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
          "id": "E9s0EguOmTjyEDD4",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+1 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "1CENtBTrhih9EKVU",
          "name": "Fog Vision",
          "kind": "passive",
          "description": "The air scamp ignores the Concealed condition from fog and mist."
        },
        {
          "id": "sh5CdmNRuEnm3Trx",
          "name": "Fast Healing 2 (In Open Air)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "yC1vWH3Q9V6GoICd",
          "name": "Sirocco Breath",
          "kind": "action",
          "description": "The air scamp creates cutting winds in a @Template[cone|distance:15] that deal 2d6[slashing|options:area-damage] damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save). A creature that fails its save is also pushed back 10 feet.\nThe air scamp can't use Sirocco Breath again for [[/gmr 1d4 #Recharge Sirocco Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "qqFbimQkMmmxBV9V",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "yTMfK57lVPwaYPar",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "lB8ogfWSKxbKbYS1",
              "name": "Blur",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:raktavarna",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "nFhAJSpbJz1w71EU",
      "slug": "raktavarna",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1643b6db3520df57c3545f158c14dd7b01d9d1c4e53ddf1e2ec9fea555f8283a",
    "translatableHash": "sha256:6133b62aadbf9d974f1134b65e32f652122e5e43e21fe877774a9ec0581e045e",
    "data": {
      "schemaVersion": 1,
      "name": "Raktavarna",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "rakshasa",
        "spirit",
        "unholy"
      ],
      "description": "Raktavarnas are simple rakshasa incarnations of betrayal and assassination, often existing to test the mettle of those who were treacherous or poisonous in a previous life. They typically appear as a snake with blood-red eyes and oversized fangs, though they just as often appear in the guise of a sword or a piece of jewelry.\nRakshasas are primordial, divine beings who serve as incarnations of all that is foul within creation, born the moment that the concepts of good and evil were first conceived. It is their divine purpose to exemplify the profane—by murdering their own kin, eating the flesh of sapient beings, and performing thousands of other atrocities, they define these acts as obscene and taboo, so that mortals know these acts to be crimes in the eyes of the holy. It is a role they must play, in the same way that a stage play must have an actor to serve as the villain, a role that damned all rakshasas from the moment of their genesis.\nMost rakshasas enjoy their role, in the same way an actor enjoys delivering a masterful performance, yet there is an element of tragedy to their existence. They are fated to serve solely as foils to others, to corrupt the unworthy and fall to the heroic, never free to forge their own path. They are condemned to perform the most heinous of deeds, even if it rankles their sensibilities and conscience. To do otherwise is to defy their nature and their purpose: the greatest sin a rakshasa can perform.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
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
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 6,
        "deception": 7,
        "diplomacy": 7,
        "stealth": 7
      },
      "languages": [
        "common",
        "diabolic",
        "sakvroth",
        "chthonian",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "holy 3"
        ]
      },
      "attacks": [
        {
          "id": "HeSYt5jeXQwluP8x",
          "name": "Fangs",
          "bonus": 9,
          "damage": "1d6+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "b8MhSEnrYG0hWLqw",
          "name": "+2 Status to All Saves vs. Divine Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "1dXvJWfe5HkVq2S2",
          "name": "Knowledge of Delusion",
          "kind": "passive",
          "description": "A creature that fails a Recall Knowledge check or a Perception check to Sense Motive on a rakshasa is Off-Guard until the end of its next turn."
        },
        {
          "id": "IFdZ6sCgOn9Xztp5",
          "name": "Betraying Bite",
          "kind": "passive",
          "description": "A raktavarna gains a +2 bonus to Strikes against any creature that is holding it."
        },
        {
          "id": "xJGiCaAnnERzWXes",
          "name": "Change Shape",
          "kind": "action",
          "description": "The raktavarna takes on the appearance of a Tiny inanimate object. If, while transformed, the raktavarna takes any action other than the purely mental (such as Recall Knowledge), they immediately revert to their original form. Until then, they can use Deception to Impersonate the object."
        },
        {
          "id": "IE75LW4gCgc5TOPJ",
          "name": "Designate Master",
          "kind": "passive",
          "description": "The raktavarna spends 10 minutes on an invocation alongside another creature. That creature becomes the raktavarna's master until the raktavarna dies or Dismisses the effect. The master gains the Master's Eyes activity as long as the bond lasts.\nMaster's Eye"
        },
        {
          "id": "bgr9Qyvp6pX1W3KQ",
          "name": "Raktavarna Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Stupefied 1 (1 round)\nStage 2 1d4[poison] damage and Stupefied 2 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "svqKqAYsrMhgU25p",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "Sfuu5bqrirH6fcqf",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "guqC34iTkyF5ib0Y",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "a0qAioyhxrsckrdK",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "XLIHhRcRq6GC63cI",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hobgoblin-soldier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "NW68bxCLC6oDHxL9",
      "slug": "hobgoblin-soldier",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2c7498f07a76a702438e58a18850f04dcb3e65d20378e3f2a21a4f4cb582c8d5",
    "translatableHash": "sha256:10a60747cf572b1e1721f7d06c1b42912ab72ce4d6db7a99b7dc1dd69ef0cf36",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin Soldier",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "hobgoblin",
        "humanoid"
      ],
      "description": "Soldiers make up the bulk of hobgoblin society, whether that society is a village or a military unit.\nHobgoblins may appear to outsiders to be the most civilized of goblinkind, but their civilization is hardly one of kindness and equality-instead, they revel in all that is militaristic, tyrannical, cruel, and destructive. Hobgoblins are singularly devoted to war, and their entire culture is built upon fostering and maintaining conflict while simultaneously proving their superiority in battle. Hobgoblins are highly organized, and they work efficiently and effectively in groups, whether that group is a small raiding party, a roving war band, or a fully regimented army. Hobgoblin rulers require little provocation before declaring war, and more often than not, such wars are waged to gain slaves or territory. Physically, hobgoblins stand about as tall as humans and have gray, ashen skin.\nHobgoblin society is organized along military lines, and every hobgoblin is effectively a member of the army. Each hobgoblin in a community has a rank in the military hierarchy, and individuals are naturally ambitious and obsessed with advancement. Hobgoblins are constantly expected to prove that they're fearless, ruthless, cunning, and strong. Demonstrating such aptitudes is an individual hobgoblin's best hope for promotion through the ranks, but failure leads only to cruel exploitation at the hands of their superiors. Though brutal, hobgoblin society is a true meritocracy, and all hobgoblins, regardless of age, gender, or birth, wield authority and earn respect from their peers based on their skill in battle. Even those individuals who serve in non-combat roles in hobgoblin society-blacksmiths, builders, cooks, messengers, quartermasters, and the like-know that they perform vital jobs that support the larger hobgoblin army, though they rarely rise above the rank of common soldier. Everyone contributes to the larger whole, ensuring that hobgoblin society is the strongest and most efficient it can be, and anyone who fails to do so is culled from the army and this hobgoblin society as dead weight. Hobgoblins don't usually engage in trade with other races, or even with other hobgoblin tribes, preferring to take what they want by force.",
      "armorClass": 18,
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
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 6,
        "stealth": 6
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
          "id": "PzpzmSnCSWrwxzDO",
          "name": "Longsword",
          "bonus": 8,
          "damage": "1d8+3 slashing",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "CHS0DAe3ekrw8ve1",
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
          "id": "OgkLVLhW0uOMdbGj",
          "name": "Formation",
          "kind": "passive",
          "description": "When it's adjacent to at least two other allies, the hobgoblin soldier gains a +1 circumstance bonus to AC and saving throws. This bonus increases to +2 to Reflex saves against area effects."
        },
        {
          "id": "vgzaSMX0NqZa33aX",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "ZAfWR0kF2UEGEEDh",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:arbiter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "oaxKg1yQDmK2PWXG",
      "slug": "arbiter",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fa4d92ffdcb02a953531a1302c3a4e44b9e859c9a5d7d5cdede9df8c6db386ca",
    "translatableHash": "sha256:b7192b4fc2cce912e4454efc43f82d3d35e50c1aa3baa3267f2c186701102274",
    "data": {
      "schemaVersion": 1,
      "name": "Arbiter",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "These spherical aeons are scouts and diplomats. Found throughout the multiverse, they have traditionally kept watch over chaos and its agents. With the announcement of the Convergence, many arbiters now serve as go-betweens among the aeon alliance and its mortal associates.\nAeons have always been the caretakers of reality and defenders of the natural order of balance. Each type of aeon takes on some form of duality in its manifestation and works either to shape the multiverse within the aspects of this duality in some way, or to correct imbalances to the perfect order of existence. Aeons' machinations can raise a nation, raze it, or restore it from ruin. Their reasons are their own, and they rarely share their motivations with others—through their strange envisioning mode of communication, they simply create the results they insist are necessary to maintain the balance of the multiverse.\nAs a result of recent shifts in reality, aeons have begun to reassert a presence in the perfect planar city of Axis. To aeons, this is merely the latest in a recurring cycle, albeit one that mortals have not yet borne witness to. Aeons have a name for this cyclic return, in which they welcome their industrious axiomite brethren back to their fold: the Convergence. At the onset of the Convergence, a council of pleroma aeons appeared in the Eternal City of Axis, where they revealed that axiomites were wayward aeons, split off long ago to pursue the act of creation. With the latest cycle of change, it was time for axiomites—and their mortal creations and kin—to rejoin the aeon cause. While most axiomites fell in line, realizing perhaps on a fundamental level of reality that what the aeons said was the truth, some refused to heed the call and waited for the wrath of the aeons. That wrath has yet to come. The dual-natured aeons have responded to those who have declined in confusing ways. With some they treat and even bargain, while a handful of others they have destroyed, and a few have been exterminated by the axiomites. But most of these quiet insurgents they leave alone, allowing these axiomites to continue to create in peace. How—or if—this Convergence will end is as little understood as aeons themselves.",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "diplomacy": 6,
        "stealth": 9
      },
      "languages": [
        "common",
        "diabolic",
        "empyrean",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "emotion",
          "poison",
          "unconscious"
        ],
        "resistances": [
          "electricity 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "iJVGp2XuaslAOfcc",
          "name": "Shortsword",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-0",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "xH8E3TYe6R3G6KEv",
          "name": "Locate Aeon",
          "kind": "passive",
          "description": "An arbiter can always sense the direction of the nearest non-arbiter aeon on the plane, but it can't sense the range to the aeon."
        },
        {
          "id": "kayBhD4IXys5Ppt8",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Qc7duDVeN4puhd9w",
          "name": "Electrical Burst",
          "kind": "action",
          "description": "The arbiter releases an electrical burst from its body that deals 3d6[electricity|options:area-damage] damage to all creatures in a @Template[emanation|distance:10], with a check (reflex, dc:17, basic, options:area-effect) save. The arbiter is then Stunned for 24 hours."
        }
      ],
      "spellcasting": [
        {
          "id": "mS16mfAS5hbK048v",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "1AVEDCYseyeJLtb8",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "43d95EaoCTpuIvKz",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "41WwdI9v5RAhSNrc",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "syyUh0WOgLKpCRdF",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kobold-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "PcHQDmPTztw32PhL",
      "slug": "kobold-scout",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b654e233f51337a44d75b83d01bba680e963cc7990affba2d41e6f0e76c61a63",
    "translatableHash": "sha256:94ebebf67a6be49ef88e2bfeb0ca3e547cfd8b0648b974ed55933fede6a49a50",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Scout",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "Most kobolds encountered outside of a well-defended warren or lair are kobold scouts, those trained for stalking and hunting. They're also often in the thick of the fighting when a warren is invaded, buying time for their comrades to set up various traps and deadfalls.\nKobolds are small reptilian humanoids. They lurk in dark spaces, usually tunnels and mines beneath the earth, in either warrens of their own design or complexes discovered and colonized after the original builders have moved on. Though kobolds are far more pragmatic than courageous, they use every inch of their cunning to even the playing field between themselves and other, stronger creatures. They attack from the darkness and at range, and kobold artificers and engineers master the art of simple but effective traps, which they use to protect their lairs. Kobolds are skilled at working together by necessity, and they often set up ambushes or hit-and-run assaults that allow them to do the most damage possible without being harmed in return.\nKobolds are diligent and hardworking creatures. While some kobolds live in communal collectives that maintain neutral relations with the creatures around them, they can be easily swayed into serving malevolent powers or megalomaniacal leaders. This is in part due to kobolds' innate pragmatism, as they would rather concede to servitude than risk being killed, but it is also in part due to a reverence for the power they generally lack. Notably, kobold eggs left in the proximity of magical creatures or places tend to absorb similar traits from the exposure. The resulting physical changes mark the appearance of each tribe, but a few lucky kobolds are also born with magical power that reflects their tribe's patron.",
      "armorClass": 16,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
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
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "crafting": 3,
        "nature": 6,
        "stealth": 7,
        "survival": 6
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
          "id": "vTjkwNzpCJmsbg6R",
          "name": "Shortsword",
          "bonus": 9,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "38uEEYKxUvG8TDFw",
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
          "id": "6qRNTIsnLLzKOid7",
          "name": "+1 Circumstance to All Defenses vs. Traps",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "XvdX4HJlRrKbOFkf",
          "name": "Construct Trap",
          "kind": "action",
          "description": "The kobold scout creates a rudimentary trap on any square adjacent to it. This must be on a surface, such as a floor, wall, or ceiling. The trap activates the next time a creature moves adjacent to it.\nThe creature takes (1d6)[piercing,(1)[bleed]]{1d6 piercing damage and 1 persistent bleed damage} with a check (reflex, dc:16, basic) save. The trap is destroyed when activated or after 1 hour, whichever comes first.\nThe scout typically carries enough raw materials to make one trap."
        },
        {
          "id": "0qvSsLdTulsncbsi",
          "name": "Scamper",
          "kind": "action",
          "description": "Requirements The kobold scout is adjacent to at least one enemy.\nEffect The kobold scout Strides up to its Speed plus 5 feet and gains a +2 circumstance bonus to AC against reactions triggered by this movement. It must end this movement in a space that's not adjacent to any enemy."
        },
        {
          "id": "MO9W8NpBALoHHtTS",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The kobold scout deals an extra 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:catfolk-pouncer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "PvYl5kItb7xoE8Is",
      "slug": "catfolk-pouncer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9f0e5243e4955ba2d53fb5a4e7e275a1457ae5a45d7c86cc8231d437b480b7a4",
    "translatableHash": "sha256:320a96bed0c31fbf0bacf18d9c4812f4f64d2b282b590511a95d84364a5afc69",
    "data": {
      "schemaVersion": 1,
      "name": "Catfolk Pouncer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "catfolk",
        "humanoid"
      ],
      "description": "Catfolk pouncers travel the world in search of new experiences. With a spring in their step and a positive attitude, a pouncer can usually lithely avoid or quickly bounce back from negative ordeals, much to their enemies' chagrin.\nLithe and agile, with catlike features and long tails, the amurruns are wanderers, explorers, and extroverts who share a gregarious nature and an unbridled curiosity. This latter characteristic leads many individual amurruns into trouble, yet this inquisitiveness is paired with a penchant for good fortune that offsets much of their self-induced peril. They accept the term \"catfolk\" as a name for their people with grace and a hint of amusement.\nEver eager to explore and learn, catfolk have spread to other parts of the world from their native nations in the southern tropics, yet never in large groups. A lone amurrun can be found anywhere in the world, but it's rare to find a settlement beyond their traditional national borders. This is due to their innate wanderlust and insatiable wonder. As many an amurrun might say, \"I've lived with my people my whole life, but you? You're new and different! There's so much to learn from you!\"\nLongstanding amurrun legends claim the catfolk were first created as guardians and were then charged with protecting the world from those sinister forces that exist at its fringes. Often, this charge manifests as a longstanding opposition to cultists of demon lords, archdevils, and other fiendish demigods. Many catfolk worship the spirits of creation, using serendipitous rituals to attract good fortune and banish ill luck in the spirits' name, while others venerate their own small pantheon of divinities.\nThose who travel often find comfort in the worship of Desna, whose teachings closely match their own predilections. Catfolk adapt well to adventuring roles, and can be quite diverse in their areas of study and specialization. Those who follow the traditions of rangers and rogues are perhaps the most commonly encountered, but not overwhelmingly so. Their natural curiosity leads some catfolk to take up mystical arts, training as wizards or following a divine path to become clerics.",
      "armorClass": 17,
      "hitPoints": 17,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 6,
        "nature": 4,
        "stealth": 7,
        "survival": 4
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
          "id": "RnOot5zAIUVb7mhI",
          "name": "Greataxe",
          "bonus": 8,
          "damage": "1d12+3 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "gRxrSsVY96KSKqtT",
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
          "id": "eV57jOK1dKxrsVkO",
          "name": "Dagger",
          "bonus": 9,
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
          "id": "0ZKaotgANUyAmZDc",
          "name": "Cat's Luck",
          "kind": "reaction",
          "description": "Trigger The catfolk pouncer fails or critically fails a Reflex saving throw.\nFrequency Once per day.\nEffect Reroll that saving throw and take the better result."
        },
        {
          "id": "LbGQE0qrzbORDYH9",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "The catfolk pouncer Strides up to double their Speed. If the catfolk ends their movement within melee reach of at least one enemy, they can make a melee Strike against that enemy."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:reefclaw",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Rr1u6WvZEdPw1s6v",
      "slug": "reefclaw",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:09b15cd38166b9a6c5bbb48ada2657474bb30b0d8026ce8833b44f87b2fbd476",
    "translatableHash": "sha256:0c719e3358e413d16bb54f88d4777db9d52515a8590efc1f6e3ca7fae798a2ca",
    "data": {
      "schemaVersion": 1,
      "name": "Reefclaw",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "aquatic"
      ],
      "description": "Reefclaws are aquatic monsters that resemble huge shrimp or lobsters. As one might expect from its name, a reefclaw's oversized claws are powerful weapons with a viselike grip and the ability to inject potent venom into unfortunate prey.\nThough reefclaws can't speak, they are intelligent enough to understand the local language of humanoids near their hunting grounds. The creatures sometimes listen to conversations, either to gain intelligence on the best place to ambush aquatic or land-dwelling prey, or merely for entertainment value—reefclaws are particularly fond of listening to people with high-pitched voices. Reefclaws are usually solitary hunters, but small swarms of female reefclaws have been known to gather around a single male for mating purposes or together for the communal raising of their broods. In the latter case, the females will perform widespread hunts in order to bring back a large enough bounty to feed their young. Such hunting parties are extremely dangerous—they've been known to tip over small fishing boats and attack those who fall overboard.\nOnce a reefclaw has decided upon a course of action, it follows through even if doing so spells its own end. More than one reefclaw survivor has said that the creature released its bone-crushing grasp only after the brains were leaking from its broken skull, and even then, the reefclaw was able to perform a terrible last slash as part of its dying breath. During mating season, female reefclaws are often a little more pragmatic and release their prey before endangering themselves and their offspring.\nDespite their intelligence and the accompanying moral quandaries, reefclaws frequently find their way onto the dinner plates of land-dwelling hunters such as humans and hobgoblins. According to those who have a taste for reefclaw flesh, the meat is either delectably sweet (for reefclaws raised in colder waters) or slightly tangy (in the case of warm-water reefclaws). Most people who know of reefclaws' intellect find the act of eating them distasteful, but this does not dissuade unscrupulous nobles in coastal regions, for whom reefclaw meat is a delicacy well worth the expense. Likewise, fishers whose focus is on the bottom line of their ledgers are more than willing to hunt the dangerous creatures—or, even better, hire out the task to naive adventurers.",
      "armorClass": 20,
      "hitPoints": 17,
      "speedFeet": 5,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": -3,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4
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
          "id": "oGR3hLNhUlAR66Kw",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d6+1 slashing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "D2ezhwANZLcMNbz9",
          "name": "Death Frenzy",
          "kind": "reaction",
          "description": "Trigger The reefclaw is reduced to 0 Hit Points.\nEffect The reefclaw makes a claw Strike before dying."
        },
        {
          "id": "eIQH5yy2l8qe0bvR",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d6)[bludgeoning], check (fortitude, dc:17, basic)"
        },
        {
          "id": "We6LladGR4C687q0",
          "name": "Reefclaw Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:17)\nMaximum Duration 4 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 1d6[poison] damage and Enfeebled 2 (1 round)"
        },
        {
          "id": "rXhfsoFPa9y2NdHs",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:boggard-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "s2TkernjfKVEhlJY",
      "slug": "boggard-scout",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c15bc0b470a8544181ca0672c536a30b23a0aa67ef099af72ceed2760efb8624",
    "translatableHash": "sha256:1c1d1fb17abaef9d0587c746149e69ddd9f13bb45375be298f04ebd20c006b8e",
    "data": {
      "schemaVersion": 1,
      "name": "Boggard Scout",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "boggard",
        "humanoid"
      ],
      "description": "Often tasked with patrolling the borders of their lands, boggard scouts learn to speak another language (typically Common) to deal with trespassers.\nBoggards are aggressive humanoid amphibians who thrive in swamps, marshes, and even some rain forests. Boggards hatch from eggs into tadpoles, fiercely competing for food and even consuming their siblings in that struggle. Over 3 years, the surviving boggards develop arms, legs, and lungs while learning the rudiments of hunting, crafts, and warfare—everything needed to survive in their might-makes-right society. At the top of most boggard hierarchies lords a hulking swampseer imbued with sinister divine magic.",
      "armorClass": 16,
      "hitPoints": 24,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 5,
        "will": 7
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 4,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 8,
        "stealth": 7
      },
      "languages": [
        "boggard",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "b9p4QWRBH39ePPdV",
          "name": "Morningstar",
          "bonus": 8,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "jL2ksRd3mnetwWV2",
          "name": "Tongue",
          "bonus": 8,
          "damage": "",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "GIxGQeMwhYMa5aqt",
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
          "id": "VxA7WerDGElBkdYj",
          "name": "Swamp Passage",
          "kind": "passive",
          "description": "A boggard scout ignores difficult terrain caused by swamp terrain features."
        },
        {
          "id": "8LvVStEHJB30KVCE",
          "name": "Terrifying Croak",
          "kind": "action",
          "description": "The boggard scout unleashes a terrifying croak. Any non-boggard within @Template[emanation|distance:30]{30 feet} becomes Frightened 1 unless they succeed at a check (will, dc:17) save; those who critically succeed are temporarily immune for 1 minute."
        },
        {
          "id": "kGQg9F0ZgW7fp4DB",
          "name": "Tongue Grab",
          "kind": "passive",
          "description": "If the boggard scout hits a creature with their tongue, that creature becomes Grabbed by the boggard. Unlike with a normal Grab, the creature isn't Immobilized, but it can't move beyond the reach of the boggard's tongue. A creature can sever the tongue by hitting AC 13 and dealing at least 2 slashing damage. Though this doesn't deal any damage to the boggard, it prevents them from using their tongue Strike until they regrow their tongue, which takes a week."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:goblin-commando",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "sA2dFdRUwiapo69Z",
      "slug": "goblin-commando",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:df7fb20eb857101c88859df32af12a6f1d9ddb24daea693c2d517e5cb219d43b",
    "translatableHash": "sha256:971c668f21bd9b52127db7545e8de8ba38d68a206a527a1228ecde53509f05a2",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Commando",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "The theoretical leaders of goblin raids are called goblin commandos. In practice, goblin commandos rarely continue to lead their comrades once a battle has begun. Most shirk their responsibilities in favor of wading into the fray and claiming more glory from their tribe-mates.\nThese small humanoids typically have green or gray skin and large heads with wide ears. While some goblins are civilized and have worked hard to be considered upstanding members of humanoid communities, many are impetuous and vicious creatures who delight in wreaking havoc. These goblins think nothing of slaughtering livestock, stealing, or burning down a building purely for momentary delight. They revel in playing malicious tricks on taller humanoids, whom they call \"longshanks.\"\nGoblins are superstitious, with an intense awe of magic and a fascination with fire; goblins who master magic or fire earn great respect from their kin. Most other humanoids find it difficult to understand goblins' outlook: they hate canines but eagerly share their lairs with so-called \"goblin dogs,\" they fearlessly attack larger creatures but are terrified of horses, and they despise vegetables yet consider pickles a delicacy. To a goblin, of course, these are all perfectly sensible life choices.",
      "armorClass": 17,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 6,
        "intimidation": 5,
        "nature": 5,
        "stealth": 6
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
          "id": "7swXlOjSl2oHLuDv",
          "name": "Horsechopper",
          "bonus": 8,
          "damage": "1d8+3 slashing",
          "traits": [
            "reach-10",
            "trip",
            "versatile-p"
          ]
        },
        {
          "id": "wBppFKxjdSadJQj2",
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
          "id": "YdD2kpKW2TNfcupL",
          "name": "Goblin Scuttle",
          "kind": "reaction",
          "description": "Trigger A goblin ally ends a move action adjacent to the goblin.\nEffect The goblin commando Steps."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:elf-ranger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "sd6BsHgVrw4FgR70",
      "slug": "elf-ranger",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:088283c687fdbb38fb2302132edc68ce4234c769d36e2bb88f29fc4906bac804",
    "translatableHash": "sha256:1ba1b92a3dc61acd8a36279881704027c2ceaa24a987dc99ff0d90e343164ac0",
    "data": {
      "schemaVersion": 1,
      "name": "Elf Ranger",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elf",
        "humanoid"
      ],
      "description": "Many elves learn the bow before even picking up their first blade. Because of this, many elves act as rangers at some point in their long lives.\nElves are mysterious and intelligent, and graceful and cunning in battle.",
      "armorClass": 16,
      "hitPoints": 17,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 3,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 3,
        "deception": 3,
        "nature": 6,
        "stealth": 7,
        "survival": 6
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
          "id": "DDsDAFmbxXEIRVkL",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "pYHgCv3L5NiMr0bo",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "eqmE8gNHICFs77Mq",
          "name": "Shortbow",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "deadly-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "9EZfRj8o6hw8Tj7l",
          "name": "Double Shot",
          "kind": "action",
          "description": "The elf ranger makes two shortbow Strikes targeting two different creatures within the shortbow's first range increment. Both Strikes uses the elf's current multiple attack penalty, but each strike takes a –2 penalty."
        },
        {
          "id": "pYGGmMFSULyq9LQz",
          "name": "Elf Step",
          "kind": "action",
          "description": "The elf Steps twice."
        },
        {
          "id": "2gFl2T3FtxWRsmct",
          "name": "Unimpeded Journey",
          "kind": "passive",
          "description": "The elf ranger ignores difficult terrain."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:caligni-dancer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "SZCf0IZkf36plwVd",
      "slug": "caligni-dancer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e0c9ddde3d94f6d665c5b4a9302b22d630b82aa0d464eb2a83c8c2c8a3418a8a",
    "translatableHash": "sha256:bdbe8e7472ce535dade049662723d640eb13c38815ebd3f6ad9a580ffac4ddff",
    "data": {
      "schemaVersion": 1,
      "name": "Caligni Dancer",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "caligni",
        "humanoid"
      ],
      "description": "Caligni dancers serve as intermediaries between caligni factions, carrying messages and negotiating deals between the notoriously independent groups. Although physically fragile, the dancers serve an important role within caligni society and are rarely seen without guards.\nCalignis lurk in subterranean cities, with each caligni growing into a specific role and form determined by supernatural influences in caligni society. Regardless of their size or role, all calignis are gaunt, with pale flesh and white eyes. Many relish the chance to creep above ground at night to steal resources, shadow their surface counterparts, or simply make mischief.",
      "armorClass": 17,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "diplomacy": 8,
        "performance": 6,
        "stealth": 7,
        "thievery": 7
      },
      "languages": [
        "caligni"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "s1vorlaJQl2JXBN2",
          "name": "Baton",
          "bonus": 9,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove"
          ]
        },
        {
          "id": "Sj3qaBkh1exbNXJY",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "0Hf2BPIsl4GkboQ4",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "2gy1EqZ99rbJPoec",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "2eV3trm8nKeqQ2Z4",
          "name": "Distracting Frolic",
          "kind": "reaction",
          "description": "Trigger An ally within 10 feet of the dancer rolls a saving throw against a mental or illusion effect\nEffect The target ally can roll the save twice and take the better result.\nEffect: Distracting Frolic"
        },
        {
          "id": "tNVPutTbdl3sPaGf",
          "name": "Final Dance",
          "kind": "passive",
          "description": "When the dancer dies, their body dissolves into a swirling mass of darkness and light. All creatures in a @Template[emanation|distance:10] must succeed at a check (will, dc:17, options:area-effect,inflicts:dazzled) save or be Dazzled for [[/gmr 1d4 #rounds]]{1d4 rounds}.\nThe dancer's possessions are left in a pile where they died."
        },
        {
          "id": "BhAemzsQzTnyMQTs",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UKfFDeN7IDKW1okj",
          "name": "Dancer's Curse",
          "kind": "action",
          "description": "The caligni dancer touches a foe and curses it.\nIf the target fails a check (will, dc:18) save, it gains Clumsy 1 and Stupefied 1.\nThe target is then temporarily immune for 24 hours.\nThese conditions persist until the curse is removed. The victim can attempt a new check (will, dc:18) save once per hour to end the curse."
        },
        {
          "id": "23duj3dLvK5Gn9tK",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The caligni dancer deals 1d6 extra precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": [
        {
          "id": "pZX2G1Vh8XNn8DCw",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "gb4nDUEQffh7bVIu",
              "name": "Counter Performance (Visual Only)",
              "rank": 1
            },
            {
              "id": "uwicbWWUQqNyx9jA",
              "name": "Courageous Anthem",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hyena",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "tUWchW8dXavTFeBy",
      "slug": "hyena",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c87e0fa4e4f04cb44059cf83872b1960b3f1ba9c08eb368985e4a5894ba2145f",
    "translatableHash": "sha256:ac64ba1f856cf1b2625c480830937b63a8600fd6db6a192aa45924de5169ede5",
    "data": {
      "schemaVersion": 1,
      "name": "Hyena",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Hyenas are cunning, powerfully built carnivores that bear a heavy resemblance to dogs and other canines, though they are not themselves canines. Though all hyenas are often maligned as cowardly carrion eaters, their tactics depend on their specific breed: spotted hyenas are active pack hunters that kill most of their prey themselves, while striped and brown hyenas are more likely to be loners and scavengers. Their jaws are exceptionally powerful, allowing hyenas to seize a victim and pull it to the rest of the pack.\nHyenas are pack-hunting scavengers known for their unnerving, laughterlike cries. The most well-known hyenas are the socially gregarious spotted hyenas, who travel in packs and work together to hunt or drive off larger creatures. Hyenas are typically nocturnal creatures who scavenge meat, insects, and fruit, though they aren't above supplementing their carrion diets with fresh prey.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 40,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 7,
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
          "id": "W9vP5WtfdUoAWPDY",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Y198r9S2vz19SRbK",
          "name": "Drag",
          "kind": "action",
          "description": "The hyena makes a jaws Strike against a Prone enemy. If it hits, in addition to dealing damage, the hyena Strides up to 10 feet, dragging the enemy along."
        },
        {
          "id": "A53fmiOtIr4DZqy0",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The hyena deals an extra 1d4 damage to any creature that's within reach of at least two of the hyena's allies."
        },
        {
          "id": "n06PGBhrUKKUVnsV",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fire-scamp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "UwvAf8riRdMaitA4",
      "slug": "fire-scamp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d30305e843987b96c539f57645675c8b777c824674ba93e22ed750d88aa8104",
    "translatableHash": "sha256:56d39ddfabe01ecb8962190a8aafc55b4b7af519dc1f1c2731b3fffa75672b4b",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Scamp",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "Although arguably quite friendly, fire scamps are considered far more dangerous than their kin. They delight in fire and playing pranks on everyone they befriend. Even given time to understand others' dislike of fire, most fire scamps enjoy the feel of flames enough to constantly test their limits.\nCompared to the nations of other scamps, the nations on the Plane of Fire are by far the strongest. This backing inspires fire scamps to challenge authority more quickly than the others.\nElemental scamps are bat-like critters marked by elemental powers. Scamps are dispatched from the Elemental Planes by more powerful residents or called to the Universe by neophyte summoners. All scamps have a hint of magical power due to a lingering connection to their home plane, which they largely use to pull simple pranks.\nScamps rapidly form a pecking order of cleverness. Humanoids often confuse scamps when meeting such creatures for the first time. These confused scamps usually resort to an escalating series of pranks and mischief, seeing what they can get away with to establish their place in the hierarchy.",
      "armorClass": 17,
      "hitPoints": 16,
      "speedFeet": 20,
      "perception": {
        "modifier": 3,
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
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": -2,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "deception": 7
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 3"
        ]
      },
      "attacks": [
        {
          "id": "ceCMdeJVcFk3YwLx",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d4 fire; 1d6 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "JPfXLDy2dYseqUop",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "The fire scamp ignores the Concealed condition from smoke."
        },
        {
          "id": "cLrASbjqkG0mqXXT",
          "name": "Fast Healing 2 (While Touching Fire)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gMRZ46sjaLERrmao",
          "name": "Flame Breath",
          "kind": "action",
          "description": "The fire scamp breathes flames in a @Template[cone|distance:15] that deals 2d4[fire|options:area-damage] damage to each creature within the area (check (reflex, dc:17, basic, options:area-effect) save). Creatures that fail the save also take 1d4[persistent,fire] damage.\nThe fire scamp can't use Flame Breath again for [[/gmr 1d4 #Recharge Flame Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "8r4SGJ6SHvgBDYNC",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "pbwBlKWlKZnR14cq",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "pMR9CP5XEhteoZWp",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "aCZKvsTxqFbS2qmy",
              "name": "Light",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lizardfolk-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "V8w4iOwUMPqYnqVE",
      "slug": "lizardfolk-scout",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a74bf353f5306ef6c650c60b7d1c4d5be6ee00c39b9a264b199db7f420c7ecc3",
    "translatableHash": "sha256:14bbc7faf23f401b8d55d4e958311f8199b0bf3b49f50881bd04b24b513c217f",
    "data": {
      "schemaVersion": 1,
      "name": "Lizardfolk Scout",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "lizardfolk"
      ],
      "description": "Iruxi scouts are the lizardfolk most often encountered by adventurers, for these unsentimental explorers and hunters spend most of their lives on the move, constantly patrolling the territories held by their enclave. If intruders are driven off, it is the responsibility of iruxi scouts to track them, observe them, and learn their ways and weaknesses so as to report back to the community and aid in the defense against potential reprisals.\nCapable and adaptable predators, the reptilian beings known as lizardfolk are heirs to truly ancient civilizations. Their oral traditions cover thousands of years, and they revere the bones of their ancestors. Fossilized lizardfolk are even built into the walls of lizardfolk's stone and glass cities, to allow these predecessors to watch over their kin. Lizardfolk likewise have longstanding traditions of religious worship and astrology, with eyes on the past, the future, and the stars whenever they make a large decision. Their long history has taught them to be patient in all things, though this has seen them losing ground to hastier peoples in modern times.\nLizardfolk refer to themselves as \"iruxi,\" though they have taken their common moniker among other peoples in stride. Most of their settlements are entirely communal, with hatchlings raised by anyone with the time and temperament for such a role. Iruxis dwell and thrive in all tropical and temperate biomes, but they are most at home in swamplands, coastal regions, and river lands. They are talented swimmers, and many of their major cities are partially submerged to take advantage of this fact, causing them to often be overlooked by others. Fish and aquatic plants make up a large part of their preferred diets.",
      "armorClass": 17,
      "hitPoints": 17,
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
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": -1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 5,
        "diplomacy": 4,
        "nature": 6,
        "stealth": 6,
        "survival": 8
      },
      "languages": [
        "common",
        "draconic",
        "iruxi"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HAOtod2wxXg71n8U",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "SksyTvUlilzyBVLq",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "COureLl9794sHLIb",
          "name": "Blowgun",
          "bonus": 8,
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
          "id": "rk9Qa3TRqh7vnR4r",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A lizardfolk scout can hold their breath for 150 rounds (15 minutes)."
        },
        {
          "id": "A6gmij9OXIW0o9vj",
          "name": "Giant Centipede Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:14)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d4[poison] damage and Off-Guard (1 round)\nStage 3 1d4[poison] damage, Clumsy 1, and Fatigued (1 round)"
        },
        {
          "id": "hH9lWhV3jA9NQJuG",
          "name": "Hidden Movement",
          "kind": "passive",
          "description": "If the lizardfolk scout starts its turn Hidden from or undetected by a creature, that creature is Off-Guard against the scout's attacks until the end of the turn."
        },
        {
          "id": "LpOv4VRyaN38UswN",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The lizardfolk scout deals an extra 1d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "55Hvc61MUgVoahwb",
          "name": "Terrain Advantage",
          "kind": "passive",
          "description": "Non-lizardfolk creatures that are in difficult terrain or are in water and lack a swim Speed are Off-Guard to the lizardfolk defender."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:orc-veteran",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "V90OYOMyyPLPJuod",
      "slug": "orc-veteran",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e6c1bf824baf59949229145b5164207662efb2821e5eb7e90adcd0907601eea2",
    "translatableHash": "sha256:aefd5cc99a68a6c837f620cd1ca7387b104ff297629e081a0f4c26ba66cd2acc",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Veteran",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "Orc veterans have survived several bloody and chaotic conflicts, coming out the other side with scars and experience that make them even more dangerous opponents.\nMany orcs are forged in the fires of violence and conflict, often from the moment they're born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance, taming a powerful beast, or slaying a fearsome monster.\nTall and powerful, with long arms and thickly muscled legs, many orcs top 7 feet in height. Their heavy limbs and broad, almost bow-legged stances combine with a tendency to slouch forward to create an almost contradictory set of circumstances where an orc can tower over other humanoids while simultaneously staring them in the eye. These features, alongside a tendency to scar easily, can make them seem quite intimidating.\nThe half-orc dromaars, most commonly born of unions between orcs and humans, are often tested even more harshly than their full orc kin, but those who endure these tests can rise to positions of authority. \"An orc can have what an orc can hold\" is a saying that not only applies to an individual's ability to secure their own destiny and position, but is also likely the root of orcs referring to their communities as holds.",
      "armorClass": 18,
      "hitPoints": 23,
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
        "intimidation": 4,
        "survival": 4
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
          "id": "mHS7Uj0GKGKhQiNo",
          "name": "Orc Necksplitter",
          "bonus": 7,
          "damage": "1d8+4 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        },
        {
          "id": "54j0gybWlIAueFkZ",
          "name": "Shortsword",
          "bonus": 7,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "versatile-p"
          ]
        },
        {
          "id": "U7gmP0tQ6eQor3xT",
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
          "id": "freYXZtmDhD5zIrA",
          "name": "Javelin",
          "bonus": 5,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "AtTvfif8mNvTl8HD",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "YXU677N9VVDxJO9s",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:goblin-war-chanter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "wepiUEi2Lxl8j1BH",
      "slug": "goblin-war-chanter",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:146a63f66c4bd2c78d9ebb079adb046fe344235b4a59e39bf7ea826fe23ead21",
    "translatableHash": "sha256:6fb1683bb621d1eaa14646aa95326bde13fb99e4b1f5dc3da79417beda092603",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin War Chanter",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "While all goblins enjoy singing, goblin war chanters pride themselves on mastering the art of vocal performance. Their ballads and jingles are undeniably catchy, and serve their purpose in battle well, inspiring goblins and distracting foes. Whether they are actually enjoyable is entirely subjective.\nThese small humanoids typically have green or gray skin and large heads with wide ears. While some goblins are civilized and have worked hard to be considered upstanding members of humanoid communities, many are impetuous and vicious creatures who delight in wreaking havoc. These goblins think nothing of slaughtering livestock, stealing, or burning down a building purely for momentary delight. They revel in playing malicious tricks on taller humanoids, whom they call \"longshanks.\"\nGoblins are superstitious, with an intense awe of magic and a fascination with fire; goblins who master magic or fire earn great respect from their kin. Most other humanoids find it difficult to understand goblins' outlook: they hate canines but eagerly share their lairs with so-called \"goblin dogs,\" they fearlessly attack larger creatures but are terrified of horses, and they despise vegetables yet consider pickles a delicacy. To a goblin, of course, these are all perfectly sensible life choices.",
      "armorClass": 17,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 6,
        "deception": 7,
        "occultism": 4,
        "performance": 7,
        "stealth": 6
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
          "id": "4uh4OO7zv1oZkB4W",
          "name": "Dogslicer",
          "bonus": 8,
          "damage": "1d6+2 slashing",
          "traits": [
            "agile",
            "backstabber",
            "finesse"
          ]
        },
        {
          "id": "OQyH3C1xWSTxRaOA",
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
          "id": "VcfZ8SToykQ7MnHU",
          "name": "Goblin Scuttle",
          "kind": "reaction",
          "description": "Trigger A goblin ally ends a move action adjacent to the goblin.\nEffect The goblin war chanter Steps."
        },
        {
          "id": "zqXzm6YAzfHGm8sq",
          "name": "Goblin Song",
          "kind": "action",
          "description": "The war chanter sings annoying goblin songs, distracting foes with silly and repetitive lyrics. The chanter attempts a check (performance, traits:auditory,concentrate,linguistic) check against the Will DCs of up to two enemies within @Template[emanation|distance:30]{30 feet}. This has the usual traits and restrictions for a Performance check.\nCritical Success The target takes a -1 status penalty to Perception checks and Will saves for 1 minute. Effect: Goblin Song (Critical Success)\nSuccess As critical success, but the target is affected for only one round. Effect: Goblin Song (Success)\nCritical Failure The target is temporarily immune to Goblin Song for 1 hour."
        }
      ],
      "spellcasting": [
        {
          "id": "VpVNCwsAHOKuj0UI",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 7,
          "saveDc": 17,
          "spells": [
            {
              "id": "IXkZPKf9ouDk9G6o",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "7rdIJNlg0RBV8B23",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "npPeMlWAcr7gmmD7",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "1WtNqx99KWQ8eeqN",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "P8WAFjSEUAnxpp0n",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "nXEGFCbfHCG9V4WO",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "R6Z2Chy1JQdTLv6A",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zoaem",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "wycu7XN9VgiSpSfB",
      "slug": "zoaem",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fc5485fb48b5c50ca23f14a292de1c177518eb307af20e4fd8636259f80b4f68",
    "translatableHash": "sha256:5db5e51cf486e1d69f1c8828e3c20fb30d2839b10db573410029f0aa82c3ff24",
    "data": {
      "schemaVersion": 1,
      "name": "Zoaem",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "archon",
        "celestial",
        "holy"
      ],
      "description": "These endlessly curious archons are formed from spinning wheels of golden light given corporeal shape. They serve as lookouts and mobile support troops for the archon legions, at times uniting to form powerful warriors of light called gestalts. Larger collectives of zoaems can even temporarily fuse into greater archons, approaching the power of the first zoaem, which broke itself apart to serve Heaven more efficiently.\nArchons are guardians of Heaven and enemies of corruption. Before gods and their servants set foot in the celestial planes, archons already resided in Heaven, the original inhabitants of the realm. Upon meeting, the archons and divine angels quickly discovered they were of a kind, holding justice and righteousness in their hearts. An alliance was formed, and archons now serve as stalwart allies to all celestials and mortals they find worthy.\nWhile the first archons coalesced from the immense seven-tiered mountain of Heaven, they choose willing and worthy Heaven-bound souls to join their ranks. These mortals hear and answer the call of a mysterious voice, manifesting in the Garden at the mountain's peak. There they swear to forever serve the cause of justice and transform into their new archon forms.\nThough deeply concerned with defending mortal life and willing to sacrifice themselves in battle against fiends, archons often feel rote and inscrutable to others, and their forms can border on frightening and bizarre. For this reason, they often have issues with interacting with mortals, or with the free spirited azatas. Despite this, archons draw great strength from others, especially those who exemplify virtue.\nBeyond their celestial allies, archons also maintain ancient ties with aeons. The inscrutable factions can still be seen working together to defend longforgotten secrets and enforce rules that predate mortal life. Archons explain these missions as necessary without further elaboration, leaving even their angelic allies frustrated with archons' obstinance.",
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
        "fortitude": 6,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": -5,
        "dex": 3,
        "con": 1,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "intimidation": 6,
        "religion": 6
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
        "resistances": [
          "fire 3"
        ],
        "weaknesses": [
          "unholy 3"
        ]
      },
      "attacks": [
        {
          "id": "r2dQHqLD5Y6JODLb",
          "name": "Eye Ray",
          "bonus": 8,
          "damage": "1d8 fire",
          "traits": [
            "agile",
            "fire",
            "holy",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "N0FCMAYG0PsnfxzG",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Hf4E1qVjqrhb5vFf",
          "name": "Archon's Protection",
          "kind": "reaction",
          "description": "Trigger An enemy damages the archon's ally and both are within 15 feet of the archon\nEffect The ally gains resistance 3 to all damage against the triggering damage and the archon can make a Strike against the enemy."
        },
        {
          "id": "gnvV509JFw3HvNvr",
          "name": "Behold!",
          "kind": "action",
          "description": "Frequency once per hour\nEffect The zoaem's rings and wings move in a complex pattern, mesmerizing creatures in the zoaem's choice of a @Template[emanation|distance:10] or a @Template[burst|distance:5] within 60 feet. Each creature must succeed at a check (will, dc:17, options:area-effect,inflicts:fascinated,inflicts:stunned) save or be Fascinated with the zoaem for 1 minute and Stunned 1 (or stunned for 1 round on a critical failure)."
        },
        {
          "id": "uh9FAiIuWjmsH9Sp",
          "name": "Light of Truth",
          "kind": "action",
          "description": "The zoaem shines an intense light of truth, as Revealing Light (check (reflex, dc:17) save) but in a @Template[line|distance:60]. Against creatures affected by this light, the zoaem and their allies gain a +1 status bonus to damage rolls and Recall Knowledge checks. The zoaem can't use Light of Truth again for [[/gmr 1d4 #Recharge Light of Truth]]{1d4 rounds}.\nEffect: Light of Truth"
        }
      ],
      "spellcasting": [
        {
          "id": "LuEtjZU04QhnXDDV",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "TtDi7Ie2iM7WuXrb",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "B1OobqcaTS7Yz5Hl",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "5gS4mGLJi1nW1Cq3",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lizardfolk-defender",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WZRHV2WU0SkpbtJI",
      "slug": "lizardfolk-defender",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e5302f3b2bd1d65613b7ea288a12f9beaa143686044019ceeef1e03eba829064",
    "translatableHash": "sha256:aba73b5783e98ed8926f45009f8940340f1eb8edb649f343f913fcc8d4eec8e2",
    "data": {
      "schemaVersion": 1,
      "name": "Lizardfolk Defender",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "lizardfolk"
      ],
      "description": "A lizardfolk defender serves as a protector of the young, guardian of the settlement, and when no other options are available, a soldier in times of war. They eagerly rise to the defense of their kin but do not revel in battle. An iruxi defender would rather turn back intruders and allow them to flee with the knowledge they were beaten, in hopes that such word prevents further invasions, but they are not naive. Iruxis understand the need for revenge, and when they allow a foe to escape, they do not forget.\nCapable and adaptable predators, the reptilian beings known as lizardfolk are heirs to truly ancient civilizations. Their oral traditions cover thousands of years, and they revere the bones of their ancestors. Fossilized lizardfolk are even built into the walls of lizardfolk's stone and glass cities, to allow these predecessors to watch over their kin. Lizardfolk likewise have longstanding traditions of religious worship and astrology, with eyes on the past, the future, and the stars whenever they make a large decision. Their long history has taught them to be patient in all things, though this has seen them losing ground to hastier peoples in modern times.\nLizardfolk refer to themselves as \"iruxi,\" though they have taken their common moniker among other peoples in stride. Most of their settlements are entirely communal, with hatchlings raised by anyone with the time and temperament for such a role. Iruxis dwell and thrive in all tropical and temperate biomes, but they are most at home in swamplands, coastal regions, and river lands. They are talented swimmers, and many of their major cities are partially submerged to take advantage of this fact, causing them to often be overlooked by others. Fish and aquatic plants make up a large part of their preferred diets.",
      "armorClass": 16,
      "hitPoints": 21,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 5
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
        "acrobatics": 5,
        "athletics": 6,
        "stealth": 5
      },
      "languages": [
        "draconic",
        "iruxi",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "r035iPNnkvHhoCqt",
          "name": "Flail",
          "bonus": 8,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "disarm",
            "sweep",
            "trip"
          ]
        },
        {
          "id": "HG3k71Iu7dao9DNr",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "MKqjvJ1d8GxOUuDF",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "f4yHe8ZeeX1UHyWc",
          "name": "Javelin",
          "bonus": 7,
          "damage": "1d6+3 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "BAUuPU4vutfkBzYn",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "yGiXa7MzVzw31w7B",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "nlnYY25ImmMf9WxI",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A lizardfolk defender can hold their breath for 15 minutes."
        },
        {
          "id": "8wxpM0AIu2KtOOy1",
          "name": "Terrain Advantage",
          "kind": "passive",
          "description": "Non-lizardfolk creatures that are in difficult terrain or are in water and lack a swim Speed are Off-Guard to the lizardfolk defender."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:python",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Yadztw8CmYuWfA7k",
      "slug": "python",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a3e9be23f58c7171bb452bdb7e8074247dcbb07dc5ae41ece9ef361f34554089",
    "translatableHash": "sha256:c73a9db1331446c31bff92f716842b1aa8082e9010edad15f0dc8e569ef78027",
    "data": {
      "schemaVersion": 1,
      "name": "Python",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "This nonvenomous family of snakes is rarely a threat to anything but small mammals and birds, hunting by coiling around prey and crushing victims with their powerful muscles. Nonetheless, larger pythons can be dangerous due to their strength. Herpetologists sometimes keep pythons as pets.\nSnakes come in an array of forms, from jungle-dwelling constrictors that wrap around their prey to venomous vipers with deadly bites. Regardless, all snakes consume their prey whole by unhinging their jaws and using powerful muscles to move the food down their throats and into their stomachs.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 6,
        "stealth": 6,
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
          "id": "ZQs5C40PhQ6fLEOd",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "NeJvQpMPGMIfzdCG",
          "name": "Tighten Coils",
          "kind": "reaction",
          "description": "Trigger A creature Grabbed or Restrained by the python attempts to Escape.\nEffect The DC of the Escape check is increased by 2."
        },
        {
          "id": "aZ0lzdc6SrYbvfX6",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d8)[bludgeoning], check (fortitude, dc:17, basic)"
        },
        {
          "id": "l6OEi0DzuPlz6OeT",
          "name": "Wrap in Coils",
          "kind": "action",
          "description": "Requirements A Medium or smaller creature is Grabbed or Restrained in the python's jaws.\nEffect The python moves the creature into its coils, freeing its jaws to make attacks, then uses Constrict against the creature. The python's coils can hold one creature."
        },
        {
          "id": "CMFwSAQpmkkqeHxH",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:goblin-dog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yclRuradTmZbdKFQ",
      "slug": "goblin-dog",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:333ff33e653a7baaba23928988bc4929f2f27bf6065d82a85ceb5977d136bd72",
    "translatableHash": "sha256:345d3171375cf13b474f81728d54beeca834cb356249b88c7530b02a6458f395",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Dog",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Goblins' eponymous pets aren't true canines at all but rather large, blunt-nosed rodents with thin bodies and long legs. Often as cowardly as they are ugly, goblin dogs prefer to lurk behind bushes or in deep shadows, only pouncing upon lone or wounded prey. Goblin dogs frequently roam in packs, but they are likely to flee from a fight if injured, even if it means abandoning their packmates.\nGoblin dogs take their name from a long association with goblins, who breed the beasts as guard animals and mounts. Most goblins take issue with the name, as the average goblin is appalled at the suggestion that their favored mounts have anything at all to do with actual dogs. Of course, being goblins, they haven't bothered to come up with their own unique name for the creatures.\nEven the most pampered goblin dogs have itchy mange and prolific dander that tenaciously affects those who come in contact with them. This \"goblin pox\" causes itchy hives and festering sores that are as unsightly as they are irritating and distracting. Goblin dog dander causes allergic reactions in nearly all other creatures that don't share goblin dogs' terrible hygiene—with the notable exception being, of course, goblins, who remain entirely immune to the disease regardless of cleanliness.\nHunger can drive goblin dogs to bouts of uncharacteristic violence, and crueler goblins sometimes purposefully starve their pets on the eve of battle. Goblin dogs subsist on whatever organic material they can scavenge; they particularly enjoy fresh carrion. Although goblins are far from picky eaters themselves, they value goblin dogs because the noisome animals will consume material that even goblins won't touch. In fact, \"Will It Eat?\" is one of the most popular games goblins play with their pets, where a wide range of morsels (not always edible or safe to consume) are dangled before a goblin dog's snout. Sadly, the game \"Will It Die?\" is often played after \"Will It Eat?\" Goblin dogs that survive the second game earn renown for their digestive prowess and often become favored tribal pets, treated even better than most of the rank-and-file goblins.",
      "armorClass": 15,
      "hitPoints": 17,
      "speedFeet": 40,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 2,
        "int": -4,
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
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "FrlYBDNV4RyfqLaY",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "M1Uh0E4VLZObTo3I",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:17)"
        },
        {
          "id": "WU4cXLzhnoCczalO",
          "name": "Irritating Dander",
          "kind": "passive",
          "description": "A creature that hits the goblin dog with an unarmed attack, tries to Grapple it, or otherwise touches it is exposed to goblin pox."
        },
        {
          "id": "OWImE1DpRm2byzUX",
          "name": "Juke",
          "kind": "reaction",
          "description": "Requirements A creature must be mounted on the goblin dog.\nTrigger The rider issues a command to the goblin dog.\nEffect The goblin dog Steps before following the command."
        },
        {
          "id": "1AbBtZhPY7lYpSm0",
          "name": "Goblin Pox",
          "kind": "passive",
          "description": "Goblins and goblin dogs are immune to goblin pox.\nSaving Throw check (fortitude, dc:17)\nStage 1 Sickened 1 (1 round)\nStage 2 sickened 1 and Slowed 1 (1 round)\nStage 3 Sickened 2 and can't reduce its sickened value below 1 (1 day)"
        },
        {
          "id": "oEnTmvBRzYBAWuou",
          "name": "Scratch",
          "kind": "action",
          "description": "The goblin dog vigorously scratches itself, exposing all adjacent creatures to goblin pox."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:cythnigot",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YhVYGhzNrOFQROui",
      "slug": "cythnigot",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0385502ebebdbb158e4c6dfa7b49b8d9228bb7dac05927c915a24bc97307078e",
    "translatableHash": "sha256:9f7172c0cfc8775777ecb48a2c7a333851705c054d8fdffbd2ae7c5e78f5364f",
    "data": {
      "schemaVersion": 1,
      "name": "Cythnigot",
      "level": 1,
      "rarity": "uncommon",
      "size": "tiny",
      "traits": [
        "fiend",
        "qlippoth",
        "unholy"
      ],
      "description": "The cythnigot is a foul fungal parasite that grows and thrives in the corpses of small creatures. It wears these bodies like a suit, but also adjusts and tailors the fleshy covering to fit its needs, and the body ends up looking as alien as anything else spawned from the Chthonian depths. The cythnigot's most identifying feature is the long stalk of fungal material that extends from creature's body, ending in a surprisingly strong set of fanged jaws.\nLong before the creatures known as demons came to be the dominant force in the Outer Rifts, qlippoth ruled the innumerable cracks of the Outer Sphere. These inimical creatures are a form of primordial and alien evil that predates mortal life, and most immortal life as well. Since the rise of mortal sin and the associated expansion of demonic life through the Outer Rifts, qlippoth have been driven to their deepest reaches, and they seethe with rancor at the loss of their realms. Yet, rather than directly oppose demons, qlippoth instead turn to the source—mortal sin—and wage an endless war to eradicate all creatures capable of sinful acts so that the demonic tide might be turned back. To ensure they do not bolster their foe's ranks, they enact horrific transformations on their targets, converting their victims into beings incapable of discerning right from wrong; this renders them unable to be judged by Pharasma's courts and thus incapable of becoming fiends. Most mortals consider the ministrations of a qlippoth to be far worse than any fate awaiting them in the afterlife.",
      "armorClass": 16,
      "hitPoints": 14,
      "speedFeet": 30,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "occultism": 7,
        "stealth": 6
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
          "mental 3",
          "physical 3 except cold-iron"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Y3O7AOvH1wkpSV2Z",
          "name": "Bite",
          "bonus": 8,
          "damage": "1d10+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-0",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "1qBTVbPZxVREvpnT",
          "name": "Telepathy (Touch Only)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Kv1pkf5Ma30A8n58",
          "name": "Sickening Display",
          "kind": "action",
          "description": "The cythnigot presents its awful appearance fully, and creatures in a @Template[emanation|distance:10] must attempt a check (will, dc:17) save. Once a creature attempts this save, it's temporarily immune to further Sickening Displays for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Off-Guard until its next turn.\nFailure The creature is Sickened 1 and is off-guard for as long as it's sickened.\nCritical Failure As failure but Sickened 2."
        },
        {
          "id": "GCC6Zf1NaPihfEJ0",
          "name": "Tangle Spores",
          "kind": "passive",
          "description": "A creature bitten by a cythnigot becomes afflicted by fast-growing spores that swiftly grow into twitching spikes and hideous pallid growths of hairlike fibers. These growths erupt from the bite wound and writhe and wrap around the creature's limbs. Plant creatures take a –2 circumstance penalty to save against tangle spores\nSaving Throw check (fortitude, dc:17);\nMaximum Duration 6 rounds\nStage 1 Clumsy 1 (1 round)\nStage 2 clumsy 1 and Off-Guard (1 round)\nStage 3 Clumsy 2, off-guard, and if you attempt a manipulate action, you must succeed at a check (flat, dc:5) or it's lost; roll the check after spending the action, but before any effects are applied (1 round)."
        }
      ],
      "spellcasting": [
        {
          "id": "FWHFEirBNdz22BqV",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "UCGj8X2bujP6XdM5",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "BdcVSeA4V75UhHEy",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "NseIrcE3QAGkK3Uf",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "RzS2QU0XdbW5zrbf",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "WHBP4SIbsV8XYdn8",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:merfolk-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YiGZxwT2xTVYQyTu",
      "slug": "merfolk-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2ef9e5558457c17c7338adf4892b14c709f65a6ccd027257211658b55d67c67c",
    "translatableHash": "sha256:270d079aad17b0a555ecb70fb7688cbc9a22a4d02196f074261fa99a986c0705",
    "data": {
      "schemaVersion": 1,
      "name": "Merfolk Warrior",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aquatic",
        "humanoid",
        "merfolk"
      ],
      "description": "Merfolk warriors form the bulk of the militias of their vast underwater realms and meet potential aggressors head-on with uncompromising force.\nElegant, mysterious, and graceful; all this and more can be said of merfolk. These enigmatic people resemble humanoids with delicate features from the waist up but with the fins and tail of a massive fish from the waist down. Found in nearly all of Golarion's oceans, merfolk are as varied in appearance as humans, their skin ranging from pale to umber and all shades in between, while their gleaming scales shimmer with the majesty of the sea.",
      "armorClass": 18,
      "hitPoints": 19,
      "speedFeet": 5,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "medicine": 4
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
          "id": "s2SFLAZVqryeGl0O",
          "name": "Trident",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": []
        },
        {
          "id": "ErhX9xAIKos8xjgd",
          "name": "Trident",
          "bonus": 9,
          "damage": "1d8+2 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "bDogEMyUIoxPMls3",
          "name": "Aquatic Dash",
          "kind": "action",
          "description": "The merfolk warrior swims and attacks in one of two patterns. They either Swim twice and Strike at the end of their movement, or Swim once and Strike at any point during their movement."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:imp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yPYQC2bfOYmqcfIB",
      "slug": "imp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bffbb5a33418043624c9696ce7ecaac7ae931d319ed1f3b16823b826fe5fc05c",
    "translatableHash": "sha256:a7ab034ac7cbedca28b6fae734720edc3829f62a5f95f8fa1e30f75b75731e7e",
    "data": {
      "schemaVersion": 1,
      "name": "Imp",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fiend",
        "unholy"
      ],
      "description": "Imps are fiendish infiltrators and corrupters who, despite their diminutive stature, are more than capable of subtly influencing a weak-willed individual into performing increasingly evil acts over time. An imp will often agree to serve a mortal and act docile and loyal in a long-term plot to eventually get their master killed or damn their soul. Imps are born directly from the Outer Planes themselves, rather than from mortal souls, and thus they serve outside any fiendish hierarchies, granting them leeway to pursue their specialties. Despite standing a mere 2 feet tall, imps can be vicious combatants, flying out of reach and turning invisible to escape should the odds turn against them.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": -1,
        "dex": 4,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 6,
        "deception": 7,
        "religion": 5
      },
      "languages": [
        "common",
        "diabolic",
        "chthonian",
        "daemonic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 3"
        ],
        "weaknesses": [
          "holy 3"
        ]
      },
      "attacks": [
        {
          "id": "LD8TK8mGL7ubLU4I",
          "name": "Stinger",
          "bonus": 9,
          "damage": "1d4-1 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-0",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "ah6fU0jl6IqyfBw4",
          "name": "Telepathy (Touch)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kZEJMwLRJaBvJMSU",
          "name": "Change Shape",
          "kind": "action",
          "description": "The imp takes on the appearance of a Medium or smaller animal. While transformed, the imp loses their normal senses, innate spells, and special actions, but doesn't otherwise change their statistics and can still speak and use telepathy. The imp also gains any special senses of the animal and any Speeds the animal has.\nThis doesn't change the attack and damage modifiers of their Strikes but might change the damage type their Strikes deal (depending on what kinds of attacks the animal has) and prevents them from exposing creatures to imp venom."
        },
        {
          "id": "ATs94SggOJoPD71u",
          "name": "Fiendish Healing",
          "kind": "action",
          "description": "Frequency once per round.\nEffect The imp regains 1d6[healing] Hit Points."
        },
        {
          "id": "RZv15pm5vEmZAZhK",
          "name": "Fiendish Temptation",
          "kind": "action",
          "description": "Frequency once per day\nEffect The imp offers a nonfiend within 15 feet a bargain, granting a boon of good luck if the creature accepts voluntarily. The boon lasts for 1 hour once accepted.\nOnce during the hour, the creature can roll an attack roll or saving throw twice and use the higher result. If the creature dies while the boon is in place, the imp decides where the creature's soul travels. This typically makes the soul bound for eternity in the imp's home plane, and the creature unable to be raised or resurrected except by the Wish ritual or similar magic."
        },
        {
          "id": "hwvMSx3qTN1uk4iN",
          "name": "Imp Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Clumsy 1 (1 round)\nStage 2 1d6[poison] damage, clumsy 1, and Slowed 1 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "AuBndTd199sHLYXX",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "1dpMc0MTl3sBJ1yR",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "3kk2mTRbqYBvm4Rt",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "VpJedVOR1dcpVdbe",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "ljWqi7Rdo10zXj2j",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:velociraptor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ZW8ARUrNdc3zewLM",
      "slug": "velociraptor",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ec7dd0a7a8bffa6c9b8ac1e8c4103606d85471881dd066750c720164933a7f33",
    "translatableHash": "sha256:2439e74892271069a1eb5a9f742c6f9b84a0bc45af915c817a6b0aeed1b70bbf",
    "data": {
      "schemaVersion": 1,
      "name": "Velociraptor",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "A smaller cousin of the deinonychus, the velociraptor is a swift, cunning pack hunter. It has no fear of larger creatures, and a group of these dinosaurs won't hesitate to attack prey the size of a horse. They have manes of feathery plumage that extend down their backs and along the sides of their arms, legs, and tail, while their underbellies and flanks are scaly. These feathers allow them to blend into their natural terrain with ease, but when startled, a velociraptor can puff and frill this plumage to expose brighter colors normally covered by the longer feathers. A typical velociraptor is 1-1/2 feet tall, 7 feet long, and weighs 35 pounds.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 40,
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
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 5,
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
          "id": "FrOech6HlG52AZBy",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "o78IIdQ4zpSjDrZe",
          "name": "Talon",
          "bonus": 8,
          "damage": "1d4+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "FoGyFrPjwdSydW4U",
          "name": "Leaping Charge",
          "kind": "action",
          "description": "The velociraptor Strides up to 10 feet, ignoring difficult terrain as it leaps over obstacles. It then makes a Strike with its talons, gaining a +1 circumstance bonus to its attack roll."
        },
        {
          "id": "RibPgalaxUxyuwym",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The velociraptor deals 1d4 extra damage to any creature that's within reach of at least two of the velociraptor's allies."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zyss-serpentfolk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "0jSkyGbnMiN6kzwH",
      "slug": "zyss-serpentfolk",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:94c763b82ffb8cfbee5b993482d4ca9b1d67d4c208e3c56243c6c9e3f15cfae3",
    "translatableHash": "sha256:78d9e5957790b3ef52a3ad8cd77616eda83037f10c20ea54fe58bda224605375",
    "data": {
      "schemaVersion": 1,
      "name": "Zyss Serpentfolk",
      "level": 2,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "serpentfolk"
      ],
      "description": "Even the least among zyss serpentfolk consider themselves greater than any mammal. Their magical abilities, most notably their telepathy, are all the reason they need to hold this view. And it's true enough that the instinctual skill and magic of any zyss is enough to best the average human.\nBefore their ancient clash with humanity devastated their civilization, serpentfolk were masters of a sprawling underground empire. Their power was shattered and their god Ydersius decapitated (although not quite slain). The cunning, intelligence, and magical abilities of serpentfolk have diminished from their ancient heights, and most are born without these boons. This is partially the result of cruel genetic meddling among serpentfolk—though the ruling class, zyss, are born with an innate spellcasting ability, their blood runs thin, making them susceptible to wounds. Seen as the failures of the serpentfolk's experiments are the aapophs, who are strong but prone to mutation and lack innate spellcasting.\nToday, the central realm of the Darklands retains the old name of the serpentfolk empire that once dominated this region—Sekamina. This name is also the source of the serpentfolk's Aklo title, sekmin, which they are often called in ancient texts. Serpentfolk dominion had declined before ghouls, gugs, umbral gnomes, and other forces. Yet their recent ventures have brought them back to a stronger place in the Darklands. Many serpentfolk sleeping in torpor in secluded vaults have awakened.\nZyss serpentfolk tend toward megalomania, with dreams of returning to their place of dominance. Many of their plans hinge on resurrecting Ydersius, their decapitated god. His headless body still thrashes about, mindless, in the Darklands, waiting to be reunited with his lost skull. Serpentfolk numbers are so small that reclaiming their dominance seems a distant dream, especially since their reproduction is slow. Though a parent can birth a dozen young at once, the gestation period lasts up to a decade, and the likelihood that even one will be zyss is low. There's no telling whether a child will be zyss or aapoph, regardless of parentage. A coveted zyss child is just as likely to arise from aapoph parents as from two zyss, and every serpentfolk colony has someone in charge of sorting the young, identifying the earliest signs of magic in them.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 8,
        "will": 8
      },
      "abilities": {
        "str": -1,
        "dex": 4,
        "con": -2,
        "int": 4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 8,
        "arcana": 8,
        "deception": 9,
        "occultism": 8,
        "society": 8
      },
      "languages": [
        "aklo",
        "common",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "FHyqgRwAZouh37Gw",
          "name": "Fangs",
          "bonus": 10,
          "damage": "1d6+1 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "ewIhUHZqcxVqsG7x",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "wY7gOSBgpUJ4wcUI",
          "name": "Shortbow",
          "bonus": 10,
          "damage": "1d6+2 piercing",
          "traits": [
            "deadly-d10"
          ]
        }
      ],
      "actions": [
        {
          "id": "9tpWx4QY08q4Nv5G",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SWHeFZZnyyOl1BOv",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "I0PsDsrRfXytYKkG",
          "name": "+4 Status to Will Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "lCLl43OZ5Ug0QmfK",
          "name": "Thin of Blood",
          "kind": "passive",
          "description": "Zyss serpentfolk recover slowly from injuries. When they take physical damage from a critical hit, they gain 1d4[persistent,bleed] damage. They take a –2 circumstance penalty to flat checks to recover from persistent damage and saving throws against afflictions."
        },
        {
          "id": "TQzV6HYAwG8ru5Jc",
          "name": "Serpentfolk Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d4[poison] damage and enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "yZqrximA9jX4lr29",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "CZh0sJkqcSdR6tyg",
              "name": "Illusory Disguise (At Will)",
              "rank": 1
            },
            {
              "id": "3M2SYWM5VaJw4Y1F",
              "name": "Ventriloquism (At Will)",
              "rank": 1
            },
            {
              "id": "BWCrqGDD3Mu8DvWk",
              "name": "Blur (Self Only, At Will)",
              "rank": 2
            },
            {
              "id": "RDBnEuMvSkK8ZmQS",
              "name": "Suggestion",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-calm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "0PNjXE892kU89LyV",
      "slug": "soulbound-doll-calm",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:acc1a5f28e76f72d31862b3770826f580c1e17bdc695a9d994154f358adc8ad1",
    "translatableHash": "sha256:27f8b67b750e0a8cfb898f356813ff42a25b0a049f5b3e3feead9f12b438ca0e",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Calm)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "8pCLgrVEHRlbOsGn",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:wererat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2k0JX3RFTVRf0KS2",
      "slug": "wererat",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1dfaa7c597aec7f854bc036f0310932c04a2af7c7cc8e295b20ab08c2a3921bc",
    "translatableHash": "sha256:3942d6a408744839d8194ae48bc6e91ebce20e42307aa3ed6dd132c962f0b6e2",
    "data": {
      "schemaVersion": 1,
      "name": "Wererat",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast",
        "human",
        "humanoid",
        "werecreature"
      ],
      "description": "Wererats tend to be selfishly opportunistic, avaricious, and paranoid as a result of their curse. Because wererats typically dwell in metropolitan areas where they can hide in plain sight, practically any city goer could be a wererat in disguise—from the quiet shopkeep to the city's criminal mastermind. The bustle of crowds and countless rat holes make ghettos and shantytowns favored homes for wererats, especially since in these poorer districts the wererat can kill out of greed or fear with little chance of the authorities noticing. In some cities, wererats operate entire thieves' guilds or organized crime rings, and membership requires willfully submitting to the wererat's cursed bite. Wererats look very similar to ratfolk when in hybrid form, apart from potential differences in size, but ratfolk have no love for wererats.\nWerecreatures are humanoids doomed to transform into animals and animalhumanoid hybrids under the light of the full moon. These shapechanging creatures are the result of an ancient primal curse that they can, in turn, transmit through their own bites. Their ability to lurk unseen in the wilds as well as among people, combined with the contagiousness of their condition, makes werecreatures a perennial cause of panicked suspicion.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 6,
        "deception": 5,
        "society": 4,
        "stealth": 8
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "silver 5"
        ]
      },
      "attacks": [
        {
          "id": "uB2gaJscmmSbNNVZ",
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
          "id": "ib3hNOxGFodAt0fV",
          "name": "Hand Crossbow",
          "bonus": 10,
          "damage": "1d6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "TTpnkaK9B6Lsytya",
          "name": "Rat Empathy",
          "kind": "passive",
          "description": "The wererat can communicate with rodents.\nThe werecreature can ask questions of, receive answers from, and use the Diplomacy skill with animals of its general kind."
        },
        {
          "id": "3HkWPtBVUhYiB7al",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger A creature targets the wererat with an attack and the wererat can see the attacker;\nEffect The wererat gains a +2 circumstance bonus to AC against the triggering attack."
        },
        {
          "id": "E11uRLNnDwbjSmiw",
          "name": "Change Shape",
          "kind": "action",
          "description": "• Human\n• Melee fist +10 Damage 1d4+2 bludgeoning\n• Rat\n• Size small\n• Speed 30 feet, climb 10 feet\nThe werecreature changes into its humanoid, hybrid, or animal shape. Each shape has a specific, persistent appearance. A true werecreature's natural form is its hybrid shape.\nIn humanoid shape, the werecreature uses its original humanoid size, loses its jaws and claws Strikes, and gains a melee fist Strike that deals bludgeoning damage equal to the slashing damage dealt by its claw.\nIn animal shape, its Speed and size change to that of the animal, it gains any special Strike effects of the animal that it didn't already have (such as Grab), and it loses its weapon Strikes."
        },
        {
          "id": "pK7TW7mAgEFfJu0Q",
          "name": "Curse of the Wererat",
          "kind": "passive",
          "description": "This curse affects only humanoids.\nSaving Throw check (fortitude, dc:15)\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into the same kind of werecreature until dawn.\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn."
        },
        {
          "id": "rBKIlYFoV3vW1kEN",
          "name": "Moon Frenzy",
          "kind": "passive",
          "description": "When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its jaws by 2.\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is Fatigued for [[/br 2d4 #hours]]{2d4 hours}.\nEffect: Moon Frenzy"
        },
        {
          "id": "KiBIFxCCOgpsuMvK",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The wererat deals 1d6 extra precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ghoul-soldier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2KUe0AMwqswKivRo",
      "slug": "ghoul-soldier",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6b1b286f0e1bec9947807ba59f945800c15881a1fa865fd6ca56b8127c571519",
    "translatableHash": "sha256:a1931b65a6794c083aa275b73d8c05c80e9487712c472e41fe47b6326d6f9541",
    "data": {
      "schemaVersion": 1,
      "name": "Ghoul Soldier",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "ghoul",
        "undead",
        "unholy"
      ],
      "description": "Retaining their martial skill, these powerful ghouls are not afraid to meet their foe in the open, feeding on the flesh of their fallen opponents to learn their combat abilities.\nFew creatures are more ubiquitous to sinister locations such as lonely graveyards and ruined crypts than the flesh-eating undead known as ghouls.",
      "armorClass": 17,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 9,
        "stealth": 8,
        "survival": 6
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
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "phoQ0yOkbf9saI2l",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d10+3 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "OcYo8NrM7fSjcymh",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d8+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "cgMXJ3KiHJ0IbqiP",
          "name": "Bastard Sword",
          "bonus": 11,
          "damage": "1d8+3 slashing",
          "traits": [
            "two-hand-d12"
          ]
        }
      ],
      "actions": [
        {
          "id": "tsi3wc3I1BjGeGIn",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "COzGJcenMBosgUok",
          "name": "Stench",
          "kind": "passive",
          "description": "10 feet. check (fortitude, dc:15, options:area-effect,inflicts:sickened,inflicts:slowed)"
        },
        {
          "id": "fOC8WUEyTD05fnXv",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Z7PO71C8UMa9vrP4",
          "name": "Consume Flesh",
          "kind": "action",
          "description": "Requirements The ghoul is adjacent to the corpse of a creature that died within the last hour.\nEffect The ghoul devours a chunk of the corpse and regains 2d6[healing] Hit Points.\nIt can regain Hit Points from any given corpse only once."
        },
        {
          "id": "KHysHMKYybPFeqI5",
          "name": "Ghoul Whispers",
          "kind": "action",
          "description": "Requirements A Grabbed, Paralyzed, Restrained, or Unconscious creature is within the ghoul's reach\nEffect The ghoul whispers dark thoughts and vile cravings into the creature's ears. The creature must save against the forbidden cravings curse.\nForbidden Cravings (curse) A creature can still eat and drink while sickened by this curse\nSaving Throw check (will, dc:18, traits:curse)\nStage 1 carrier with no ill effects (1 day)\nStage 2 2d6[void] damage and the target is Sickened 1 until it consumes raw meat (1 day)\nStage 3 as stage 2\nStage 4 as stage 2 unless the target has consumed raw meat in the past 24 hours, then it takes 4d6[void] damage and is Sickened 2 until it consumes raw meat;\nStage 5 if the creature has eaten raw meat in the past 24 hours, it dies and rises as a ghoul, if not, it returns to stage 4"
        },
        {
          "id": "dbJMknRXkshhKBXb",
          "name": "Grave Knowledge",
          "kind": "passive",
          "description": "[[/r 1d20+8]]{+8} skill modifier\nFrequency once per hour\nEffect The ghoul calls upon knowledge it retains from one creature it has consumed in the past 7 days. The ghoul attempts a skill check using a skill in which the consumed creature was trained (if it's unclear whether the creature was trained, the GM decides). The ghoul is treated as trained and uses the high skill modifier for the ghoul's level. This takes the same amount of actions or time as usual for the check.\nThe ghoul can instead automatically learn something specific known by a creature it consumed in the last 7 days, like the location of a Hidden treasure or the name of a loved one. The ghoul can do this only once for a given creature, no matter how much of its flesh the ghoul consumed."
        },
        {
          "id": "R9q9hezMY3S2b5ha",
          "name": "Swift Leap",
          "kind": "action",
          "description": "The ghoul jumps up to half its Speed. This movement doesn't trigger reactions."
        },
        {
          "id": "pSnwIT18UYLFZJMR",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:crocodile",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2rMLYkUR47ZCQMUg",
      "slug": "crocodile",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9581c14272c248cc238dd5ee018fc84d7d8a71dafe348aaa964f615a212c2f89",
    "translatableHash": "sha256:ed4d05b7c220356b5a57756267524c8578d63929a6062385d83c28c798ea572d",
    "data": {
      "schemaVersion": 1,
      "name": "Crocodile",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Crocodiles can be found basking on riverbanks, lurking in swamps, or floating in lakes. They are usually indistinguishable from logs when viewed from afar—at least until they attack. Alligators have similar statistics, but because they often live in more temperate climates, they endure cold temperatures better. Unlike alligators, crocodiles can tolerate salt water. Both are formidable predators that are likely to devour careless adventurers who fail to watch where they step.\nPowerful and primeval in appearance, crocodiles are dangerous natural predators that dwell in marshes, riverbeds, swamps, and other wetlands.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": -5,
        "wis": 1,
        "cha": -4
      },
      "skills": {
        "athletics": 8,
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
          "id": "7Tl0EsClc5Q8xh8G",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d10+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "gjQiQcNp4NjkcKFX",
          "name": "Tail",
          "bonus": 10,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "A0HAbzH4Gjn59ZLw",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The crocodile can hold its breath for about 2 hours."
        },
        {
          "id": "eGGqJI9VH7B5iZnC",
          "name": "Aquatic Ambush",
          "kind": "action",
          "description": "35 feet"
        },
        {
          "id": "WLCM7iPJWfoRusL5",
          "name": "Death Roll",
          "kind": "action",
          "description": "Requirements The crocodile must have a creature Grabbed\nEffect The crocodile tucks its legs and rolls rapidly, twisting its victim. It makes a jaws Strike with a +2 circumstance bonus to the attack roll against the grabbed creature. If it hits, it also knocks the creature Prone. If it fails, it releases the creature."
        },
        {
          "id": "OzGatkJy0uyM9zZJ",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:envyspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "3nUt7cW8fqE5IpyE",
      "slug": "envyspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4e3e187e031b03c0e202022e9bff5e3e727bcd1cb7c1d6bd80dc5f2733beaef3",
    "translatableHash": "sha256:1731157f0c04d4c00ce56171b84f0bc617f6b050371b3097a6c2503308d7d135",
    "data": {
      "schemaVersion": 1,
      "name": "Envyspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "deception": 7,
        "stealth": 9,
        "survival": 6
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "bM07jpk0MBwdCENe",
          "name": "Halberd",
          "bonus": 10,
          "damage": "1d10+4 piercing",
          "traits": [
            "reach-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Enfeebled 2 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-timid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "59eY2OOFIuuj4f72",
      "slug": "soulbound-doll-timid",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:221633e92ed562da54aeb82b80a6719da1c84a77fcbb4a1353809f096356a09c",
    "translatableHash": "sha256:104ebebcdbc6898d74ac372b7d2aac97d342d59d67ec6f7cb6f7604df58892b0",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Timid)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "e48yRm7tQxsh60eD",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-impish",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5NnKgWCNbEzbSEN8",
      "slug": "soulbound-doll-impish",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:79196ad9d03d4948ae3f9c39992678187b48a098a6d27590ad5a18e74b9f7416",
    "translatableHash": "sha256:ceffa7490ed2b8791c14d719beeaf40e7473aa9f16e4cd7dd609678fcfa5b5c5",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Impish)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "AWkvIiHHlypRCFAs",
              "name": "Disguise Magic",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-kind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6WgkWAumJDId0vuJ",
      "slug": "soulbound-doll-kind",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:32700855cee8dc4865d7ff8bfe170040fe0bb1f2fa7f6481c7a7407b482a78b7",
    "translatableHash": "sha256:6f5b5181b1b4c8e5f3524044e3cf957f75ca2998131296b7f0988f48b1ca3ac3",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Kind)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "jMP6iDbjeAzggL22",
              "name": "Heal",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bugbear-prowler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9cBuzDV8seJqhNKJ",
      "slug": "bugbear-prowler",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:44362cd1ebc2e5527be609f2a352bbb78b70c4974eba5fa3b642901d9718ac72",
    "translatableHash": "sha256:ec9bf5297d3b93454d57fbd1074458c7864820e6829e415f0bd563619e1cc1be",
    "data": {
      "schemaVersion": 1,
      "name": "Bugbear Prowler",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "bugbear",
        "humanoid"
      ],
      "description": "Bugbear prowlers specialize in the art of lurking in the shadows.\nThese stealthy and cruel goblinoid creatures delight in spreading fear and tormenting their victims. Bugbears are the monsters lurking in the closet and hiding under the bed. Preying on remote farmsteads, bugbears reveal their presence with thumps in the night or creaks of boards to build lurking dread and arouse suspicion and fear.",
      "armorClass": 17,
      "hitPoints": 34,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 5
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
        "acrobatics": 6,
        "athletics": 7,
        "intimidation": 4,
        "stealth": 6
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
          "id": "zyYihJ8eYGtYRh9u",
          "name": "Bastard Sword",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "two-hand-d12"
          ]
        },
        {
          "id": "LUPkzJMY0W8x0Vsd",
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
          "id": "KlVVVsJad72RahoI",
          "name": "Javelin",
          "bonus": 8,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "e8BUlHLevzRJnHEc",
          "name": "Bushwhack",
          "kind": "action",
          "description": "The bugbear prowler Strides up to 10 feet and attempts to Grapple a creature they're Undetected by. If they succeed, they also deal fist damage to that creature."
        },
        {
          "id": "naotn6A029XPnJc1",
          "name": "Mauler",
          "kind": "passive",
          "description": "The bugbear prowler gains a +3 circumstance bonus to damage rolls against creatures they have Grabbed."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:caligni-skulker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9YPFqikAmURwcTEO",
      "slug": "caligni-skulker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8b772b2f13a93ddc989e9b67c251d264cc44a6c1ebf95b7afaa2954f6c585b30",
    "translatableHash": "sha256:f415d88ced477f073b32111b26598c2ddb939383974d53aca095180fe5331864",
    "data": {
      "schemaVersion": 1,
      "name": "Caligni Skulker",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "caligni",
        "humanoid"
      ],
      "description": "Most often found on the surface are caligni skulkers, stealing staple goods and luxuries alike. When pressed into combat by more powerful caligni, skulkers will often be sacrificed in waves to wear down the enemy. Otherwise, skulkers are fairly cautious and prefer to flee unwinnable situations.\nCalignis lurk in subterranean cities, with each caligni growing into a specific role and form determined by supernatural influences in caligni society. Regardless of their size or role, all calignis are gaunt, with pale flesh and white eyes. Many relish the chance to creep above ground at night to steal resources, shadow their surface counterparts, or simply make mischief.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 4,
        "stealth": 10,
        "thievery": 8
      },
      "languages": [
        "caligni"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qFvtSo4GpY09J6wr",
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
          "id": "tBCaXMwzwsRxvg1U",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "oAM6tsN2NTZwvnTf",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "hIxE6LMA92SPk1eC",
          "name": "Final Night",
          "kind": "passive",
          "description": "When the caligni skulker dies, their remains dissolve into a @Template[emanation|distance:20] of inky darkness before dissipating. The darkness extinguishes non-magical light sources and attempts to counteract magical light as a 1st-rank effect with a [[/r 1d20+10 #Counteract]]{+10} counteract modifier.\nThe skulker's possessions are left in a pile where they died."
        },
        {
          "id": "OVmDA2DweiDfmQwN",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UipChONJlSGScaQZ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The caligni skulker deals 1d6 extra precision damage to Off-Guard creatures."
        },
        {
          "id": "SPSZzNELLZWaMLrU",
          "name": "Tumble Behind",
          "kind": "passive",
          "description": "When the caligni skulker Tumbles Through a creature's space, that creature is Off-Guard against the next attack the skulker makes against it before the end of its turn."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-viper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "AJ5LuNMVPLCydryP",
      "slug": "giant-viper",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3e2f367b7819d649b4a136c692f623e4132ba7d8b5ebc80b2e187088634d25c6",
    "translatableHash": "sha256:9a765cb4e55c476576ade7096847e5f8cd96c806e3dfc55da77ecc27a59c0bdf",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Viper",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "The giant viper's fangs are a frightening sight, with injection tubes as long as daggers. The sheer amount of venom injected by a giant viper can cause severe blood clotting and leave a victim utterly drained of vitality.\nSnakes come in an array of forms, from jungle-dwelling constrictors that wrap around their prey to venomous vipers with deadly bites. Regardless, all snakes consume their prey whole by unhinging their jaws and using powerful muscles to move the food down their throats and into their stomachs.",
      "armorClass": 17,
      "hitPoints": 26,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "stealth": 8,
        "survival": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "3g9yO52wil4VC4Dz",
          "name": "Fangs",
          "bonus": 11,
          "damage": "1d8+3 piercing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "MEjtnkYdPhtWGyzF",
          "name": "Coiled Strike (Special)",
          "kind": "reaction",
          "description": "As Reactive Strike, but the snake can use this reaction only if it's Coiled."
        },
        {
          "id": "1fzwu2J1jldVzBPc",
          "name": "Coil",
          "kind": "action",
          "description": "The giant viper uses an action to coil itself. While Coiled, the reach of its fangs is 10 feet and it has the Reactive Strike reaction. After the giant viper Strikes with its fangs, it becomes uncoiled."
        },
        {
          "id": "lqMgsu5wZAOsEwK2",
          "name": "Giant Viper Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:17)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage (1 round)\nStage 2 1d6[poison] damage and Drained 1"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pipefox",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "aZNYR8Zn18ljILfO",
      "slug": "pipefox",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b09a1ad5c3e041230c510809ebbf04570abbe068c901ed58eeb90124398945be",
    "translatableHash": "sha256:6a49a77c784b7d08df1e395b8630e2d585579a49dc7574b4c8bfa07d4b9b532d",
    "data": {
      "schemaVersion": 1,
      "name": "Pipefox",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "beast"
      ],
      "description": "Pipefoxes are small, fluffy snakes with the head of a fox. They spend their days lurking in dark corners, hanging from trees, coiled around pipes, or otherwise lounging anywhere they can observe something interesting in peace and quiet. Pipefoxes are neither pests nor pets; they simply skulk around, acquiring knowledge and searching for a worthy scholar to disseminate their observations to.\nPipefoxes are as intense as they are capricious with their fixations. One might study blacksmithing for six months before suddenly switching their entire attention to studying the slang used by a group of local thieves, or the gossip of servants behind their employer's back. Regardless of the topic, they always study from a distance lest the object of their observation alter their behaviors. If a pipefox is discovered, they usually attempt to flee, only fighting as a last resort.\nPipefoxes view their knowledge as a form of currency that they protect at all costs. Because of this, they are secretive by nature. If they choose to reveal themselves to someone, it will be after much study and consideration. A pipefox will only approach someone they believe to be as invested in the pursuit of knowledge as they are. They are most attracted to spellcasters, alchemists, and inventors for this reason. However, while a pipefox may choose to approach and share what they know, they never do so freely. Like all currencies, knowledge must be equally exchanged.\nMany scholars believe pipefoxes to be spirits and keepers of knowledge; in the event of a massive cataclysm, pipefoxes will be able to return lost knowledge to the world, preventing great dark ages. For this reason, many institutions of knowledge are aware of the spying of pipefoxes but pretend not to notice and prevent others from discovering them. This encourages pipefoxes to stay while also providing a backup cache of important knowledge in the form of a small, fluffy snake.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
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
        "con": 3,
        "int": 4,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 8,
        "arcana": 9,
        "athletics": 7,
        "occultism": 9,
        "society": 9,
        "stealth": 8
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
          "id": "o7FVgc0maG0n6wuZ",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d6+4 piercing",
          "traits": [
            "finesse",
            "reach-0",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "oLWT4CcCrPivRudh",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "drohf7IhPZqL1G92",
          "name": "Master of Tongues",
          "kind": "passive",
          "description": "Even if the pipefox does not speak a creature's language, it can rapidly pick up on inflection, root words, and body language. If the pipefox interacts or observes a creature for at least 10 minutes and that creature can speak a language, it can communicate basic concepts to that creature."
        },
        {
          "id": "3tQ9IouJLzsp5YJG",
          "name": "Rapid Erudition",
          "kind": "action",
          "description": "Requirements The pipefox saw a cantrip cast within the last minute;\nEffect The pipefox can cast the cantrip it saw as an innate arcane spell for 1 minute."
        }
      ],
      "spellcasting": [
        {
          "id": "m1SORUQkDDSPNlOE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 18,
          "spells": [
            {
              "id": "EUMZZqHP56aL4Lp7",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "wTe0iaAVGVjfHIF7",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "soVFBOr9f4s11H9A",
              "name": "Translate (Constant)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-cruel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bdarrRaLjNmlYvNa",
      "slug": "soulbound-doll-cruel",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:96c732a322e927bc6c2652eebc8554d879a769082e447a1ae7715b1b1e86a797",
    "translatableHash": "sha256:33da7b48e190d0af1761728f97b6febe08a1261d4041d3d6239fcace4a4eff03",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Cruel)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "yjKfEl341GMzA8gt",
              "name": "Harm",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pteranodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bGp2t0UteEYu3BGe",
      "slug": "pteranodon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:08d4f2636a9103d8de88bed2d6fb993abdc68502f95531cb9fd3c4cd8d530571",
    "translatableHash": "sha256:beea3898353d9fee50661e5e613673f752c34f92d21b0bc30651e92b17a93923",
    "data": {
      "schemaVersion": 1,
      "name": "Pteranodon",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Pteranodons are quick and agile reptiles with 20-foot wingspans that enable them to hover on wind currents for hours. These creatures have long beaks and equally long crests that protrude from the backs of their heads.\nPterosaurs are primitive flying creatures. While many are smaller than a human or even small enough to perch on a shoulder, the two presented below are quite a bit larger. Each of these creatures could pose a serious threat to a person.\nThese flying reptiles can be found in a wide selection of regions, but they tend to soar above warm or temperate climates. They sometimes spread outside their natural range as pets and hunting companions for lizardfolk or giants. Cloud giants living in isolated valleys also train the largest pterosaurs to carry their messages to the outside world.",
      "armorClass": 16,
      "hitPoints": 25,
      "speedFeet": 10,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 10,
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
          "id": "auqHGoaXoCI4Z25O",
          "name": "Beak",
          "bonus": 10,
          "damage": "1d10+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "3b7IgOx3d3REF2NR",
          "name": "Swoop",
          "kind": "action",
          "description": "The pteranodon Flies up to its Speed and makes one beak Strike at any point during that movement."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fungus-leshy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BoXCGLACP9vuIZkZ",
      "slug": "fungus-leshy",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a4c7c2988f23959865a71c1f5b141de50c91b0d13f47b87b41976ab8a7c1696c",
    "translatableHash": "sha256:d38573acccb9b30c1fd3c1bcc5fcded4a3d1f391588831ca2d2227fcf5eee767",
    "data": {
      "schemaVersion": 1,
      "name": "Fungus Leshy",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fungus",
        "leshy"
      ],
      "description": "Fungus leshies guard caves, bogs, and damp, dark places. Their fungus gardens are bizarre by most standards, but fungus leshies are extremely proud of their works.\nLeshies are intelligent plant creatures who guard areas of primeval wilderness or earthly power. Originally created by powerful fey, they manifest when a skilled practitioner of primal magic—typically a druid—combines a nature spirit with a body carefully grown and crafted from local vegetation. The rites and materials required to create a leshy vary depending on the type of leshy. They are typically given life in an area of great natural significance, such as an arboreal's grove, a druidic circle, a fairy ring, or a great natural wonder.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 6
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
        "athletics": 6,
        "nature": 6,
        "stealth": 8
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
          "id": "tMZ3S5BdHrl0iX7R",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "0vN6RMlNxCUWYSPj",
          "name": "Spore Pod",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "1hVVgtzFCajMz7zR",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y2DikEsO4R95MHFo",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When a fungus leshy dies, a burst of primal energy explodes from its body, restoring 2d8[healing] Hit Points to each fungi creature in a @Template[emanation|distance:30]. This area is filled with fungi, becoming difficult terrain.\nIf the terrain is not a viable environment for this fungi, they wither after 24 hours."
        },
        {
          "id": "ki3C4xNREH5G9Knv",
          "name": "Change Shape",
          "kind": "action",
          "description": "The fungus leshy transforms into a giant mushroom or patch of fungi. This ability otherwise uses the effects of One with Plants."
        },
        {
          "id": "LCFMKpxw0iDxWGXu",
          "name": "Spore Cloud",
          "kind": "action",
          "description": "A fungus leshy can unleash a cloud of spores that irritates the eyes and throats of non-fungus creatures in a @Template[emanation|distance:15]. Each creature must succeed at a check (fortitude, dc:16, options:area-effect,damaging-effect) save or take 1[persistent,poison|options:area-damage] damage.\nA creature has its vision reduced as long as the persistent damage continues and can see only within 20 feet."
        },
        {
          "id": "ARWbmjbxbCd0JMUv",
          "name": "Spores",
          "kind": "passive",
          "description": "A creature that takes damage from a fungus leshy's spore pod Strike must attempt a saving throw with the same DC (check (fortitude, dc:16)) and effect as its Spore Cloud ability"
        }
      ],
      "spellcasting": [
        {
          "id": "TziDQnLmJx7Ty2df",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "amSvuFJZrW9kA3mr",
              "name": "Speak with Plants (Constant, Fungi Only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dhampir-wizard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bveW59P2mTiiFVIt",
      "slug": "dhampir-wizard",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5fc52406db4d690ae3a39869a8a843f852d1b27728d6c6000f893fb890a5c3ce",
    "translatableHash": "sha256:d40a64b9155ffe7037c0d383b61a0136e2e2bd82be50038c59139b4acccd4ec6",
    "data": {
      "schemaVersion": 1,
      "name": "Dhampir Wizard",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dhampir",
        "human",
        "humanoid"
      ],
      "description": "This dhampir is a svetocher, the child of a moroi vampire.\nAs the mortal offspring of a vampire and a living parent, dhampirs occupy an unusual place among the living. Their vampiric parentage lends them elongated incisors, an unearthly beauty and physical grace, ghostly pallor, and a piercing gaze. Perhaps their most distinctive feature, however, is their connection to energy from the Void, which heals them, leaving them as vulnerable to life energy as any undead creature. Though they don't suffer the full range of a vampire's vulnerabilities, they do share certain characteristics with their vampire parent, leading to several distinct dhampir heritages across Golarion. By far the most common dhampirs are svetochers, the children of the more common moroi vampires.\nMany dhampirs grow up as orphans because their mortal parent perished as a result of a difficult childbirth, or else they believed their child to be cursed and abandoned them. Often outcast, some dhampirs leverage their charisma and personal magnetism to manipulate those around them, while others struggle to form even basic relationships. Mistrust of a dhampir's ancestry presents further challenges when dhampirs attempt to integrate into mortal society. Those who seek out their vampiric parent often find themselves judged as inferior, rejected as they were by mortals but for different reasons. But in regions like Nidal, Geb, and Ustalav, where vampires are viewed with some degree of respect, dhampirs can find their heritage empowering.\nDhampirs fill countless roles within many communities. Some prefer to blend in as best they can, holding regular jobs and building families (most children born to dhampirs share an ancestry with the dhampir's mortal parent, but a rare few are born as dhampirs themselves). Those who learn to make the most of their inherited charm can achieve high societal status, whether leveraging traditional avenues of power or gathering followers enamored by the dhampir's abilities. With a lifespan rivaling that of an elf, a dhampir can develop extensive influence and engage in long-reaching schemes of massive scope. Further, their ancestry lends them a proclivity to necromancy and the occult arts.",
      "armorClass": 17,
      "hitPoints": 22,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 8,
        "deception": 5,
        "intimidation": 5,
        "society": 8,
        "stealth": 7
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5nrxrLm9SgLXHRhi",
          "name": "Staff",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "lieMSuY1PxRJK0CX",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "299QeGFE4AGQTEx0",
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
          "id": "nBRuDFyex8gXfL4s",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "4pcckxSu3lSKQKx9",
          "name": "+2 Circumstance to All Saves vs. Disease",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "J6pZtpCOYKA1AxsU",
          "name": "Blood of the Night",
          "kind": "passive",
          "description": "The dhampir's penalty and Hit Point reduction from the Drained condition are reduced as though the condition value were 1 lower."
        },
        {
          "id": "C0y22etsAkFpPbDt",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "Tdu73gvdkQpD4ZFK",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 8,
          "saveDc": 18,
          "spells": [
            {
              "id": "uqqHrf1J9I99v1Ce",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "ZMdYzWrzb4kFlOqo",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "2d1pEBvaB1IOWQfj",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "GD0eXrsFOEcE4agI",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "yRs3zOF6O4Je62aV",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "giXi57zOtiCoGpEO",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "TqsRVChIfGtrvU8I",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "NuXZHya3lwuD3WW5",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dero-stalker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BxOlYmZiwLRpxGWp",
      "slug": "dero-stalker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:76f4492649738a0aab3dbcf24accada23a1d058aee6e614d7c9855d9ece2d594",
    "translatableHash": "sha256:a7cc2823b90734401dc1847f2bd18a1baef53505651a510dd17667b943e43e95",
    "data": {
      "schemaVersion": 1,
      "name": "Dero Stalker",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "dero",
        "humanoid"
      ],
      "description": "Dero stalkers explore the surface world by night, seeking out victims to abduct. While hiding from the burning light of day, stalkers often assist with magisters' experiments.\nDeros are short, wiry humanoids with milky white eyes, gray-blue skin, and wild shocks of off-white or gray hair. The descendants of a mysterious type of fey abandoned in the deepest, darkest caverns of Golarion, deros are the subject of fearful legends and folk tales to most of the world's surface races. They skulk beneath major metropolitan areas, performing cruel and twisted experiments on unwilling subjects.\nDeros, particularly the leading magisters, are fixated with curing their allergy to sunlight. To understand how the surface dwellers can withstand the light of the sun, deros conduct late-night raids on surface cities, abducting victims and performing terrible experiments on them. Those who survive are often returned with much of their memory erased and their bodies bearing mysterious scars.\nThe largest dero settlements are built around esoteric machines of floating crystals. As these crystals grind against each other and hum with sickening blue energy, crystal flakes and powdery residue collect beneath the machinery. Dero magisters gather these products, creating tools and repurposing the crystals to power magical items.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": -1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "medicine": 5,
        "stealth": 8,
        "thievery": 8
      },
      "languages": [
        "aklo",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "confused"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4twxUVm3Ja1EnTXf",
          "name": "Club",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": []
        },
        {
          "id": "etxx2zbgWqF6JiBa",
          "name": "Club",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "A9dQ5VfBZ9Baprm2",
          "name": "Hand Crossbow",
          "bonus": 10,
          "damage": "1d6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "6BFQljbOQZkiMjjS",
          "name": "Vulnerable to Sunlight",
          "kind": "passive",
          "description": "A dero stalker takes 4[untyped] damage for every hour they're exposed to sunlight."
        },
        {
          "id": "UJk00lLdw11ZWbLV",
          "name": "Dero Medicine",
          "kind": "action",
          "description": "Requirements The dero is wearing a cytillesh toolkit and has a hand free\nEffect The dero excises damaged flesh and crudely stitches wounds shut, healing themself or an ally in reach for 2d8[healing]{2d8 Hit Points}. For 1 hour, the target has slashing weakness 2 and is immune to Dero Medicine.\nEffect: Dero Medicine"
        },
        {
          "id": "g2Gu5PQFbAxk9HpY",
          "name": "Exploit Lethargy",
          "kind": "passive",
          "description": "A creature afflicted with Lethargy Poison is Off-Guard to the dero stalker, and the stalker can choose to add the nonlethal trait to their attacks against the creature without taking the normal penalty."
        },
        {
          "id": "eI1CqQ6uSb4iGiLS",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A dero stalker deals 1d6 extra precision damage to creatures who are Off-Guard."
        }
      ],
      "spellcasting": [
        {
          "id": "u1eOXRbLwSvouuEB",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "KDSYCvqvPSy2jtbS",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "p55S3Z9bhgyHRDKx",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "kU6nvW30Ba5q5Dzp",
              "name": "Read Aura",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:aiuvarin-elementalist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "C9a1JvKRo43I1nx3",
      "slug": "aiuvarin-elementalist",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c7ec6f2aa73971603ea3ecb683f39ed53c7181dc9899b63f5efec122d1dde998",
    "translatableHash": "sha256:4c92c590c8794de0c0e8bedb0eb62c664b4187fbea3bb77b31e92762aad15739",
    "data": {
      "schemaVersion": 1,
      "name": "Aiuvarin Elementalist",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aiuvarin",
        "elf",
        "human",
        "humanoid"
      ],
      "description": "Commonly referred to as half-elves, aiuvarins often have trouble fitting into society. This can lead to many aiuvarins diverting their full attention towards their own personal pursuits, such as studying spellcasting.\nElves are mysterious and intelligent, and graceful and cunning in battle.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
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
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 8,
        "athletics": 5,
        "deception": 4,
        "nature": 6,
        "stealth": 7
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
          "id": "wyTny5pJ98z9ka84",
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
          "id": "gxgyOqImNZPVUqVu",
          "name": "Dagger",
          "bonus": 9,
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
          "id": "8vghvmECBI3rKMmv",
          "name": "Elemental Field",
          "kind": "action",
          "description": "The elementalist unleashes powerful static electricity in a @Template[emanation|distance:20] that lasts for 1 minute. All squares in the area become hazardous terrain for other creatures. A creature takes 1[electricity|options:area-damage] damage each time it moves into one of these squares. While in the area, creatures take a –1 status penalty to saves against electricity spells.\nEffect: Elemental Field"
        },
        {
          "id": "1wf9jTihNjCNB1TM",
          "name": "Elf Step",
          "kind": "action",
          "description": "The elementalist Steps twice."
        }
      ],
      "spellcasting": [
        {
          "id": "nwlXZZe6jxVn0B6R",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "xyURPH7fzPWt0WXV",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "5e8m2kxyripPCadD",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "XhfXhvU43p2VevaQ",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "N7YLPakqRc64O6xX",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "C8kd29tPmizuoWp8",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "4rfE1lzHZMHk73GQ",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "u2VECcIdKEWmWlrs",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "KzTu9PZNZtn9ABDk",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "qfQ6uEq5h43VhbZH",
              "name": "Thunderstrike",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:slothspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ccAeM0tNgf5aVokj",
      "slug": "slothspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4842efc7a51443612949b3b105b809d89783b1d13879e382460d2940f9d84f40",
    "translatableHash": "sha256:dbe0720350d4bdbe3d114769248adc46ca19ce239348f4cacaaecb55c1e2e8fe",
    "data": {
      "schemaVersion": 1,
      "name": "Slothspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "society": 6,
        "stealth": 9,
        "survival": 6
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "oJaD5ykfIFuICr1K",
          "name": "Longspear",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus –10-foot status penalty to their Speeds for 1 minute\nEffect: Sinful Bite"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:animated-armor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CFlx1tkRxKC9qAC7",
      "slug": "animated-armor",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:14cee80defef83690660bdda7be96dc3dc079ca72e1b3acf818eee7abc39422b",
    "translatableHash": "sha256:7c84932cb9e100f5fbb551eda4da28590a46a6b4043921c7ed4a4813113eb6d3",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Armor",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Suits of animated armor see use both as guardians and as training partners in high-end martial academies able to afford the extravagance. Often, a warrior's old suit of armor can be turned into animated armor once it accrues too much battle damage to provide adequate protection. They're found most often in wizard laboratories and ancient dungeons.\nGranted a semblance of life through the use of rituals or other strange magic, animated objects take many forms and serve a variety of uses. A few examples of typical animated objects are listed below. Many of these creatures serve as guardians, surprising unsuspecting adventurers when they suddenly attack. Others serve as idle distractions for the exceptionally rich, simple servants created to handle odd jobs, and the like.",
      "armorClass": 17,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 3,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": -3,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "MCgl5uKpwtTh48E4",
          "name": "Glaive",
          "bonus": 10,
          "damage": "1d8+4 slashing",
          "traits": [
            "deadly-d8",
            "forceful",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "jAZY8WC1BtImPyEF",
          "name": "Gauntlet",
          "bonus": 9,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile",
            "free-hand",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "GhnXpFtWM1vyvu8V",
          "name": "Construct Armor (Hardness 9)",
          "kind": "passive",
          "description": "Like normal objects, an animated armor has Hardness. This Hardness reduces any damage it takes by an amount equal to the Hardness. Once an animated armor is reduced to less than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks and its Armor Class is reduced to 13."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:tengu-sneak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ClAXGpqu4ZsYuNle",
      "slug": "tengu-sneak",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:696aa332fecec6f4d1649f1ae1f997484bfc01a7f4154031c759ec63e46754f8",
    "translatableHash": "sha256:47fec26931285c288c4c30e70fcc3ee9c0e76f1799509a493892846b2437ed95",
    "data": {
      "schemaVersion": 1,
      "name": "Tengu Sneak",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "tengu"
      ],
      "description": "Tengu are an adaptable people originally from the continent of Tian Xia, but whose travels have taken them across all of Golarion. As a people in diaspora, tengu are almost always found within larger kingdoms and communities of other peoples, with the exception of their home nation of Kwanlai. As a result, tengu tend to gather in close-knit social groups both with other tengu as well as with other peoples of non-majority ancestries, collecting words and customs from other cultures the way a bird collects trinkets for its nest.\nAlthough humanoid, tengu have very distinct, birdlike features, and many would say that they resemble crows more than they do humans. They have strong, thick beaks, as well as sharp talons at the ends of their arms and legs. Most of a tengu's body is covered in small feathers that range in color from dark brown and midnight blue to glossy black, with lighter colors being rare but not unheard of. Like many avian creatures, tengu have hollow bones, making them much lighter than other humanoids of their size, and some tengu even possess wings that allow them to fly.\nTengu have a strong cultural focus on the sky, considering tall mountaintops sacred places and worshipping gods associated with nature and storms, like Gozreh or Hei Feng. They have a long and proud tradition of both martial arts and smithing, and many aspiring Tian heroes have sought out a tengu mentor or swordsmith. Tengu magic revolves around using tengu feathers, bound into a fan, as a medium to command wind and lightning, and some tengu even have the power to \"eat\" misfortune—skills that only help tengu as they continue expanding across Golarion to new lands.",
      "armorClass": 19,
      "hitPoints": 27,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 6,
        "deception": 7,
        "diplomacy": 5,
        "society": 5,
        "stealth": 8,
        "thievery": 8
      },
      "languages": [
        "common",
        "tengu"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XJKtPma1TpZuVUUA",
          "name": "Beak",
          "bonus": 10,
          "damage": "1d6+2 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "itRhYjKbOFBEcNHc",
          "name": "Wakizashi",
          "bonus": 10,
          "damage": "1d4+2 slashing",
          "traits": [
            "agile",
            "deadly-d8",
            "finesse",
            "versatile-p"
          ]
        },
        {
          "id": "ZP1PiehJLtBoKijM",
          "name": "Shortbow",
          "bonus": 10,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "PJP0vRErOZnsKwDu",
          "name": "Eat Fortune",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger A creature within 60 feet uses a fortune or misfortune effect\nEffect The tengu negates the attempt to manipulate fate and fortune. Eat Fortune gains the opposing trait, and the triggering effect is disrupted."
        },
        {
          "id": "mosP4GWMjmCsjixi",
          "name": "Feather Fan Dustup",
          "kind": "action",
          "description": "Frequency once per 10 minutes;\nEffect The tengu waves their feather fan, summoning a small magical breeze that kicks up dust in a @Template[burst|distance:5] centered on a corner of their space, which lasts for [[/gmr 1d4 #rounds]]{1d4 rounds}. All creatures within that area are Concealed, and all other creatures are concealed to them."
        },
        {
          "id": "xgyBlDJ39BUcAINW",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The tengu deals an additional 1d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "DpI5QZQJMNjqef3w",
          "name": "Surprise Attacker",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to the tengu."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-jolly",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "cPRdGSSOmIIvAZVy",
      "slug": "soulbound-doll-jolly",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e4cf2e21181859e75aa676a9d268ee378ffc4040192cd1c23412fbebe7b128ac",
    "translatableHash": "sha256:226ca95c75890cbcf8d07126f0698a701179240bf364f1ec39a9b14a36576fa2",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Jolly)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "hf83o79a9nZid7JU",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hippogriff",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "eFGPKbhix65FSG9u",
      "slug": "hippogriff",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:31ec3d6d2f30751997af306b73964225e3c736b6500f25d6d21d622cb32ea8e5",
    "translatableHash": "sha256:6701efd21211208f3ee0e32f8894f9c9c45b9907ac654f22d5ea0ede39ceda95",
    "data": {
      "schemaVersion": 1,
      "name": "Hippogriff",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "With the proud bearing of a great raptor and the magnificence of a powerful horse, hippogriffs are thought to be an accidental fusion of creatures or perhaps the creation of a flesh-warping wizard with a keen aesthetic sense. Regardless of their original source, these animals are now a common sight in the skies above their favored plains or hill country.\nHippogriffs bear the wings, forelegs, and head of a bird of prey, with feather coloration similar to that of a hawk or eagle, though some breeders have managed to produce specimens with stark white or coal-black feathers. Their torso, hindquarters, and tail resemble those of a horse and usually are colored bay, chestnut, or gray, with some coats bearing black, pinto, or even palomino coloration.\nHippogriffs are similar in size to large horses. Much like their equine cousins, hippogriffs often have to keep wary eyes on the skies above them, as both are preferred meals for hungry griffons and wyverns. Only hippogriffs' superior speed helps protect them from these predators.\nHippogriffs are exceptionally territorial and fiercely protect the lands under their domain. They typically favor sweeping grasslands, rolling hills, and prairies. Exceptionally hardy hippogriffs make their homes nestled into niches on canyon walls, from which they comb the rocky deserts for coyotes, deer, and the occasional humanoid. Hippogriffs prefer mammalian prey, but they graze after every meal to aid in digestion.\nSince hippogriff hunting habits can be dangerous to both ranchers and their livestock, such communities often set bounties on hippogriffs. As a result, preserved hippogriffs frequently decorate frontier taverns and remote outposts alongside the taxidermied remains of deer, elk, and bears.\nHowever, other communities train hippogriffs from hatching to be ridden by elite soldiers in combat—the most notable among these groups in the Inner Sea region is the Sable Company Mercenaries in the city-state of Korvosa. Attempts are sometimes made to train adult hippogriffs in the same manner, but this often proves far more difficult. Hippogriff riders must use special saddles and combat techniques that allow them to act in concert with their mount, fighting effectively while avoiding interfering with the movement of their companion's wings.",
      "armorClass": 18,
      "hitPoints": 32,
      "speedFeet": 30,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7,
        "survival": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dplDPboVsTPEngpW",
          "name": "Beak",
          "bonus": 9,
          "damage": "1d10+3 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "yiiBFzSFMWspwb05",
          "name": "Talon",
          "bonus": 9,
          "damage": "1d6+3 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "jJAZZAqxbrSxGLXv",
          "name": "Wing",
          "bonus": 9,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "F1orhEfNkIuGNlEh",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:17)"
        },
        {
          "id": "NWD8KA0NNOrEyrvq",
          "name": "Flying Strafe",
          "kind": "action",
          "description": "The hippogriff Flies up to its fly speed and makes two talon Strikes at any point during that movement. Each Strike must target a different creature. The attacks take the normal multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:boggard-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "EH84J9FedbK3ax50",
      "slug": "boggard-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9e3f6980cc191d8f5fb8bb0970854f476f961c2dc284d1bde981ebdc35a0dab3",
    "translatableHash": "sha256:5ef41dc7515770428e66c5d312b7cf73b2523e12b16636633af2d7ad66bc7574",
    "data": {
      "schemaVersion": 1,
      "name": "Boggard Warrior",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "boggard",
        "humanoid"
      ],
      "description": "Boggard warriors exalt single combat and prefer to fight alone so that no one can contest their kills. They have been known to pursue enemies who flee combat with a single-mindedness that seems almost supernatural.\nBoggards are aggressive humanoid amphibians who thrive in swamps, marshes, and even some rain forests. Boggards hatch from eggs into tadpoles, fiercely competing for food and even consuming their siblings in that struggle. Over 3 years, the surviving boggards develop arms, legs, and lungs while learning the rudiments of hunting, crafts, and warfare—everything needed to survive in their might-makes-right society. At the top of most boggard hierarchies lords a hulking swampseer imbued with sinister divine magic.",
      "armorClass": 17,
      "hitPoints": 38,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 5,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 4,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 8,
        "intimidation": 5,
        "stealth": 6
      },
      "languages": [
        "boggard"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Xv9vTEwIVBxtTfxZ",
          "name": "Club",
          "bonus": 10,
          "damage": "1d6+6 bludgeoning",
          "traits": []
        },
        {
          "id": "mw30E878JJp7tVVh",
          "name": "Tongue",
          "bonus": 10,
          "damage": "",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "p1oWXCxvOv782fSp",
          "name": "Javelin",
          "bonus": 6,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        },
        {
          "id": "wBs1NoPWhm38PmMP",
          "name": "Club",
          "bonus": 6,
          "damage": "1d6+6 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "momzHh7zAZRC7Hob",
          "name": "Swamp Passage",
          "kind": "passive",
          "description": "A boggard warrior ignores difficult terrain caused by swamp terrain features."
        },
        {
          "id": "up8Xcig2FrwgbFfb",
          "name": "Terrifying Croak",
          "kind": "action",
          "description": "The boggard warrior unleashes a terrifying croak. Any non-boggard within @Template[emanation|distance:30]{30 feet} becomes Frightened 1 unless they succeed at a check (will, dc:18) save; those who critically succeed are temporarily immune for 1 minute."
        },
        {
          "id": "MEAPfylvHHHbTqOf",
          "name": "Tongue Grab",
          "kind": "passive",
          "description": "If the boggard warrior hits a creature with their tongue, that creature becomes Grabbed by the boggard. Unlike with a normal Grab, the creature isn't Immobilized, but it can't move beyond the reach of the boggard's tongue. A creature can sever the tongue by hitting AC 15 and dealing at least 3 slashing damage. Though this doesn't deal any damage to the boggard, it prevents them from using their tongue Strike until they regrow their tongue, which takes a week."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hryngar-taskmaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "eI6rRuxIPSZcm9OC",
      "slug": "hryngar-taskmaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bf76276a5a5de4081ea6938b6e24ece8164030dfc1519ec3bf67bf1348768848",
    "translatableHash": "sha256:9ea43138138e18d272d536799163a72f354c98a3c200eaeec038091a0dab5b11",
    "data": {
      "schemaVersion": 1,
      "name": "Hryngar Taskmaster",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "duergar",
        "dwarf",
        "humanoid"
      ],
      "description": "Hryngar priests of the taskmaster god Droskar often assume leadership roles within their communities, advancing the goals of their deity through coercion and displays of force. Often referred to as hryngar taskmasters, these leaders issue commands to hryngar subordinates and subjugated contractual clients in the same breath, treating the two as if they were interchangeable. As a result, hryngar taskmasters are equally loathed by practically everyone.\nDeep beneath the surface, the dour dwarves known as hryngars stubbornly toil, claiming the ancestral subterranean homelands of other dwarves as their own. Long ago, hryngar leaders refused to venture to the surface along with their \"cousins,\" forsaking the Quest for Sky. An exiled dwarven deity named Droskar offered hryngars salvation from the horrors that beset them in the Darklands, offering them power, cunning, and knowledge in exchange for their unending servitude. Many hryngar believe that by working harder than their brethren, they can build a society far greater than anything under the sun, claiming unending riches from the planet's metallic veins in days of relentless toil.\nThrough Droskar's blessings and their own fearsome work ethic, hryngar kingdoms now rule a significant portion of the upper Darklands region of NarVoth, and it's common to see hryngar caravans moving through the tunnels, drawn by teams of immense beetles. Hryngar leadership typically consists of powerful divine servants of Droskar, along with fearsomely implacable warriors whose martial prowess, backed by innate occult magic, ensures they can overcome any direct threat to hryngar rule. Almost every aspect of hryngar society is controlled by a strict hierarchy of leadership, with taskmasters directing subordinates across all walks of life.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 7,
        "deception": 7,
        "intimidation": 7,
        "occultism": 5,
        "religion": 6,
        "survival": 6
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
          "id": "hJqSeI5DW3ilBBgA",
          "name": "Pick",
          "bonus": 8,
          "damage": "1d6+6 piercing",
          "traits": [
            "fatal-d10"
          ]
        }
      ],
      "actions": [
        {
          "id": "QVSO6xmJIGdqfP0G",
          "name": "+2 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NUE54wJoG2LAVMO1",
          "name": "Iron Mind",
          "kind": "passive",
          "description": "Hryngar taskmasters automatically disbelieve all illusions of 1st rank or lower."
        },
        {
          "id": "7Q1l6xgw6nJEEbEr",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Fuv2PWZEnIbyJ99B",
          "name": "Take Them Down!",
          "kind": "action",
          "description": "The hryngar taskmaster smashes their maul into the ground and invokes Droskar's name to rally their allies to action. All allied hryngars of equal or lower level that are within @Template[emanation|distance:20]{20 feet} of the hryngar taskmaster gain a +1 status bonus to attack rolls and damage rolls until the end of the hryngar taskmaster's next turn.\nEffect: Take Them Down!"
        }
      ],
      "spellcasting": [
        {
          "id": "smLfVxCrxxL5qnzw",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "dmNF9r26lyvHD87l",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "H1CAFA80O60wKbk5",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "gjbYq6XjMaKZQrBQ",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "MuzOa1YoMgdUW1F3",
              "name": "Runic Weapon",
              "rank": 1
            },
            {
              "id": "qMQ9rPoWMt4576le",
              "name": "Shield",
              "rank": 1
            }
          ]
        },
        {
          "id": "GpF7MRIldG6kiEBK",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "kbHfeNdME71iyfFV",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "RJ50KjXR6hMMcZFe",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "atSdHhBgAOQbGCm6",
              "name": "Paranoia",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:gluttonyspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "eke1AhiUjNPpyRhG",
      "slug": "gluttonyspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b7367a6084b73d674f3a13dfca993edd98f61813e92b6f85c86478a378dbb24e",
    "translatableHash": "sha256:be8d1249b70e51df3b9f3c39add93c07731df138a75711dc5d016b9f331c700e",
    "data": {
      "schemaVersion": 1,
      "name": "Gluttonyspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "stealth": 9,
        "survival": 10
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "u2MD5UZWyjHaERTs",
          "name": "Scythe",
          "bonus": 10,
          "damage": "1d10+4 slashing",
          "traits": [
            "deadly-d10",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Drained 1 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:war-horse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ExVmw8bSvUd2wYkI",
      "slug": "war-horse",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0c8531169598fe5a448edd5d42b241c449b7a90f4c0eff5523378beb53baee4f",
    "translatableHash": "sha256:a8b98cea7a45e3678afd47d779ba2a8996dbb987700a9161bbfe6f3e3f5013d6",
    "data": {
      "schemaVersion": 1,
      "name": "War Horse",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Horses serve as mounts and beasts of burden in many societies. They are loyal and typically gentle creatures, and they are invaluable to those looking to travel long distances. Smaller folk, like gnomes and halflings, often utilize ponies as mounts, while horses are the favored steeds for humans and other Medium humanoids. Most horses that the average humanoid encounters are domesticated, though large herds can be found in the wild.",
      "armorClass": 17,
      "hitPoints": 36,
      "speedFeet": 40,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 7,
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
          "id": "pu2uW299sl7fVAeT",
          "name": "Hoof",
          "bonus": 9,
          "damage": "1d6+5 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "TfSlL9Vupc8WC8jy",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:17)"
        },
        {
          "id": "xeAR997MOrxz4cyA",
          "name": "Gallop",
          "kind": "action",
          "description": "The war horse Strides twice. It has a +10-foot circumstance bonus to its Speed during these Strides."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skeletal-champion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "FH58AcRBZIfrHKvv",
      "slug": "skeletal-champion",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4a073a327636f4a81b73bf2790160169bc1a06bb0de4576821e7225286ef3a9d",
    "translatableHash": "sha256:96a348d6a6a4a4b2d32727374d53237d54787616cc772fc95c516c312ae6ed66",
    "data": {
      "schemaVersion": 1,
      "name": "Skeletal Champion",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "These skeletons retain the cunning they possessed in life.\nAnimated skeletons are among the most common types of undead.",
      "armorClass": 19,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
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
        "str": 4,
        "dex": 4,
        "con": 1,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "intimidation": 7
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
          "id": "uoJMsbcXlm58cnei",
          "name": "Longsword",
          "bonus": 10,
          "damage": "1d8+4 slashing",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "81RWhoONaToFh2uz",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "383lohD54D45DNRU",
          "name": "Lance",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "deadly-d8",
            "jousting-d6",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "Tk3QwDJnKsbzqcif",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "54pvmAtUtSvN1SQx",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "5EvbvNghD1THDwUR",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lizardfolk-stargazer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "gGdIV6uUHzX23vz6",
      "slug": "lizardfolk-stargazer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:55cd9371f1426ed666b105429b54ed05ed6226a2a19f218ceff5451ea37a7eb8",
    "translatableHash": "sha256:ec4ac4eac9be116b6847b55221f32f50899321d01bcbeb591bef61ce2dad46a3",
    "data": {
      "schemaVersion": 1,
      "name": "Lizardfolk Stargazer",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "lizardfolk"
      ],
      "description": "The tradition of astrology and looking to the stars for both navigation and prognostication is well-established in iruxi society, and their wise and observant stargazers are among the people's most respected members. Even the lowliest stargazer, as presented here, has a number of useful primal spells to aid their kin; in larger iruxi settlements, stargazers wield even greater powers.\nCapable and adaptable predators, the reptilian beings known as lizardfolk are heirs to truly ancient civilizations. Their oral traditions cover thousands of years, and they revere the bones of their ancestors. Fossilized lizardfolk are even built into the walls of lizardfolk's stone and glass cities, to allow these predecessors to watch over their kin. Lizardfolk likewise have longstanding traditions of religious worship and astrology, with eyes on the past, the future, and the stars whenever they make a large decision. Their long history has taught them to be patient in all things, though this has seen them losing ground to hastier peoples in modern times.\nLizardfolk refer to themselves as \"iruxi,\" though they have taken their common moniker among other peoples in stride. Most of their settlements are entirely communal, with hatchlings raised by anyone with the time and temperament for such a role. Iruxis dwell and thrive in all tropical and temperate biomes, but they are most at home in swamplands, coastal regions, and river lands. They are talented swimmers, and many of their major cities are partially submerged to take advantage of this fact, causing them to often be overlooked by others. Fish and aquatic plants make up a large part of their preferred diets.",
      "armorClass": 17,
      "hitPoints": 30,
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
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "diplomacy": 4,
        "nature": 8,
        "stealth": 6,
        "survival": 8
      },
      "languages": [
        "draconic",
        "iruxi",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LUK2Wptf0GJyjbxC",
          "name": "Staff",
          "bonus": 8,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "KNWnF8Mev9iFqlOl",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "FCz6EfXJsvdhlDq5",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "1N1JI8DtK2Tm842J",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A lizardfolk stargazer can hold their breath for 20 minutes."
        }
      ],
      "spellcasting": [
        {
          "id": "rlBRYOIKCiyQfcQ8",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "pQ368xwz7IYUEQGf",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "HFpQANVgMMZsuOyh",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "OAKRWCfZx8XIrT0N",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "zN9mtEXrVGYwoRVc",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "9H2dOs2f8T2cuNk6",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "4wVYUWwVVqOz389w",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "I6YCbcdl7fJS3ydK",
              "name": "Pest Form",
              "rank": 1
            },
            {
              "id": "3n9D9aop6j6rCKxZ",
              "name": "Runic Body",
              "rank": 1
            },
            {
              "id": "kqJAtzGjWZxRjwne",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "sq0krljsuyNEy6nc",
              "name": "Summon Animal",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:umbral-gnome-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "GJShyw6HgV25ywqU",
      "slug": "umbral-gnome-warrior",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c22dfb3012eb79b0fde626e4b32ce1007e0e0eb2a3232c8e9708e2f97c5a6945",
    "translatableHash": "sha256:41dfd537fce0898ae60f7e0d76dafe53efaa98bde08409c5ba6ecfb08c990a7f",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Gnome Warrior",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "Umbral gnome warriors are quick to charge into battle but focus on defending their kin and their homes over more aggressive tactics when a choice is available.\nGnomes are known for being creative and curious. They stand at around 3 feet tall, and their vivid personalities match their naturally vivid hair and eye color. Gnomes possess a natural connection to their ancestral home, the First World. They crave adventure and new experiences to fight off an ancestry-wide affliction known as the Bleaching. Gnomes who fail to dream and innovate begin to slowly lose their color and fall into a deep depression.\nA notable subgroup of gnomes called umbral gnomes typically have gray or brown skin with a stony texture, and thin, pale hair or bald pates. Umbral gnomes are most numerous in the Darklands, where they go by the name drathnelar. Umbral gnomes often attribute these physical changes to the gnome deity regarded as the first of their kind, Nivi Rhombodazzle. Nivi was a surface gnome who traveled deep into the Darklands and was ultimately rewarded with demigodhood when she exchanged a particular gemstone with the dwarven deity, Torag. Nivi is immune to the Bleaching, and umbral gnomes are often immune or resistant to it as well.",
      "armorClass": 18,
      "hitPoints": 34,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "athletics": 8,
        "intimidation": 5,
        "stealth": 5
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
          "id": "0IyzaM7Q6UJqM2St",
          "name": "Spear",
          "bonus": 10,
          "damage": "1d6+4 piercing",
          "traits": []
        },
        {
          "id": "xYOVclWnoxsqGBCY",
          "name": "Heavy Crossbow",
          "bonus": 8,
          "damage": "1d10 piercing",
          "traits": [
            "reload-2"
          ]
        }
      ],
      "actions": [
        {
          "id": "3oya4AMMIxxgbFON",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "78Qh6xRwrVxslcAx",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "C5NNlv2jeZwTRcPG",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "q3CqrHCyh69Iy0is",
              "name": "Illusory Disguise",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pridespawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "h4cMwW2K34KheWtD",
      "slug": "pridespawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a8cce14c30cd8787c5c3741f96d1418fe5b65cdad44a1d36fe54b1c12c9c4a82",
    "translatableHash": "sha256:4743b1aac64de9b0a5a450179c7712240d0789b386171ad1bb4e4d1db7e71d37",
    "data": {
      "schemaVersion": 1,
      "name": "Pridespawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "intimidation": 7,
        "stealth": 9,
        "survival": 6
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "eewMjb6HShos73ZE",
          "name": "Maul",
          "bonus": 10,
          "damage": "1d12+4 bludgeoning",
          "traits": [
            "shove"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Clumsy 1 and Enfeebled 1 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:merfolk-wavecaller",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "IxezJU9rIKKyd3LY",
      "slug": "merfolk-wavecaller",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2fd286e8aec160ec9a6aca377183c536dba5a3607a2af29f604a1d2f387f6202",
    "translatableHash": "sha256:b843ce9948f5239e8fda20b3b97c2fb5b6555e37417af5a7069148432e6f9cce",
    "data": {
      "schemaVersion": 1,
      "name": "Merfolk Wavecaller",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aquatic",
        "humanoid",
        "merfolk"
      ],
      "description": "Merfolk wavecallers use their primal magic to defend their people. Their ability to asphyxiate airbreathers makes them crucial when surface dwellers invade.\nElegant, mysterious, and graceful; all this and more can be said of merfolk. These enigmatic people resemble humanoids with delicate features from the waist up but with the fins and tail of a massive fish from the waist down. Found in nearly all of Golarion's oceans, merfolk are as varied in appearance as humans, their skin ranging from pale to umber and all shades in between, while their gleaming scales shimmer with the majesty of the sea.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 5,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 6,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 0,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 7,
        "deception": 6,
        "nature": 8,
        "religion": 8
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
          "id": "aCvMYE328wAIa1Kx",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "oFnlUf41ozZQtvKs",
          "name": "Dagger",
          "bonus": 9,
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
          "id": "tQ1m9uzdwC96pkCY",
          "name": "Hydraulic Asphyxiation",
          "kind": "action",
          "description": "Requirements The target is fully submerged in water, within 30 feet of the merfolk wavecaller, and holding its breath\nEffect The merfolk wavecaller commands the tides to crush their foe's throat, rooting the target in place and forcing it to choke up precious air. The target must succeed at a check (fortitude, dc:18) save or become Immobilized for 1 round and immediately lose [[/gmr 1d4 #rounds]]{1d4 rounds}' worth of air (or twice that on a critical failure)."
        }
      ],
      "spellcasting": [
        {
          "id": "8Aw8YNHiQ1odM8VY",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "E7HeF2XcygF8dG1a",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "ORRxqPmtl1tP0LJf",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "cUjBzv1hHh5skvmB",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "BIkyLk8AUQG5WHni",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "vlWQ31p2scRdrR7w",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "m99u0kkO5pgAxMNq",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "SsuzvE0j40fLMJ9O",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "NLWt99hvH9wpIUvc",
              "name": "Stabilize",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:boar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "IyhbcdTVmkV4pSju",
      "slug": "boar",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:61680d2ad5fdcfd36ac5ff03898915a38bf0a9bb60029c6ee4f435ab98f43f06",
    "translatableHash": "sha256:eacbd0537790be72364a0c2176b2f2812841a5ab816b88d0ee3bca773d7498e7",
    "data": {
      "schemaVersion": 1,
      "name": "Boar",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Boars are omnivorous mammals, hunted heavily because their meat is considered a delicacy. Boars are most likely to attack humanoids either in self-defense or during their mating season in the winter months, when the males grow an extra inch of tissue to protect their organs as they fight off rivals. Of course, in some cultures, boars are trained to become much more aggressive so they can fill the roles of warbeast and guardian. When such boars escape back into the wild, they can become true terrors in the region.\nWhile domesticated pigs are a staple of farm life, wild boars are much more dangerous. Foul-tempered warthogs are relatively common, while the lumbering, primeval beasts known as daeodons are less so. Voracious boars can ravage the countryside in which they live, making them a particular nuisance to farmers. Boars breed freely, and a pair of boars can rapidly grow to a large family.",
      "armorClass": 15,
      "hitPoints": 40,
      "speedFeet": 40,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 5,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -3
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 8,
        "survival": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "yfZjkf1LqlK3U7HM",
          "name": "Tusk",
          "bonus": 10,
          "damage": "2d6+4 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Onifi8y9OVLqK3Ea",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "jmPDVPebOQ3XVOwA",
          "name": "Boar Charge",
          "kind": "action",
          "description": "The boar Strides twice and then makes a tusk Strike. As long as it moved at least 20 feet, it gains a +2 circumstance bonus to its attack roll."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kobold-cavern-mage",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "JFmFuoOzCwc3hA1H",
      "slug": "kobold-cavern-mage",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6caf582fb0584845ab2c94f116a1586599b2d11ddf4163c8ef827c2071d2e91e",
    "translatableHash": "sha256:972501814e957b0c2691ac87f0bc517fd631b89f2d41a9a9c2fc4246579236d8",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Cavern Mage",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "Kobold cavern mages are born more than trained, hatching from eggs that absorbed particularly large amounts of primal earth energy. Although there are many elementals and even natural terrain features that can give rise to cavern mages, most are related to the cavern-dwelling earth nymphs known as lampads. These lonely and capricious fey are as enthusiastic to receive the company of a kobold tribe as the kobolds are for the protection they receive in return.\nKobolds are small reptilian humanoids. They lurk in dark spaces, usually tunnels and mines beneath the earth, in either warrens of their own design or complexes discovered and colonized after the original builders have moved on. Though kobolds are far more pragmatic than courageous, they use every inch of their cunning to even the playing field between themselves and other, stronger creatures. They attack from the darkness and at range, and kobold artificers and engineers master the art of simple but effective traps, which they use to protect their lairs. Kobolds are skilled at working together by necessity, and they often set up ambushes or hit-and-run assaults that allow them to do the most damage possible without being harmed in return.\nKobolds are diligent and hardworking creatures. While some kobolds live in communal collectives that maintain neutral relations with the creatures around them, they can be easily swayed into serving malevolent powers or megalomaniacal leaders. This is in part due to kobolds' innate pragmatism, as they would rather concede to servitude than risk being killed, but it is also in part due to a reverence for the power they generally lack. Notably, kobold eggs left in the proximity of magical creatures or places tend to absorb similar traits from the exposure. The resulting physical changes mark the appearance of each tribe, but a few lucky kobolds are also born with magical power that reflects their tribe's patron.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": -1,
        "int": 0,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "acrobatics": 6,
        "deception": 8,
        "diplomacy": 8,
        "intimidation": 8,
        "nature": 5,
        "stealth": 6
      },
      "languages": [
        "common",
        "fey",
        "petran",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "8LYUZymM9ZN8WDw9",
          "name": "Claw",
          "bonus": 6,
          "damage": "1d6+2 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "u6omxxhGcgdgLj6L",
          "name": "Light Hammer",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "PlhmgyPACVjDwLpA",
          "name": "Light Hammer",
          "bonus": 6,
          "damage": "1d6+2 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "JojW4TyiF3cPdVBJ",
          "name": "Inspiring Display",
          "kind": "action",
          "description": "Requirements The cavern mage's previous action was to Cast a Spell\nEffect The cavern mage uses their magical display to inspire another kobold within 30 feet. That kobold gains 4 temporary Hit Points that last until the start of the cavern mage's next turn.\nEffect: Inspiring Display"
        },
        {
          "id": "lkJGworLlLUoPpox",
          "name": "Scamper",
          "kind": "action",
          "description": "Requirements The kobold cavern mage is adjacent to at least one enemy\nEffect The kobold cavern mage Strides up to their Speed plus 5 feet and gains a +2 circumstance bonus to AC against reactions triggered by this movement. They must end this movement in a space that's not adjacent to any enemy."
        }
      ],
      "spellcasting": [
        {
          "id": "QV2kVLiVJ2l0PVgq",
          "name": "Primal Spontaneous Spells",
          "tradition": "primal",
          "category": "spontaneous",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "oUgc5QYhUnV0vzhH",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "QgnZTdsEVJ1LC6yS",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "oBCroWgjioShMKDC",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "87iUxZZcOhBPvdGg",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "tJH62orMRi8zz6AD",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "Z8QxjjZj5CCNzRiD",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "00kzL1RIVPnhyUsH",
              "name": "Pummeling Rubble",
              "rank": 1
            },
            {
              "id": "hDNxBKuwOCSGycAV",
              "name": "Runic Weapon",
              "rank": 1
            },
            {
              "id": "JyqgLPemzVcLMSTT",
              "name": "Tangle Vine",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lustspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "k4fqHhiax2GPrkbh",
      "slug": "lustspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4422f158309aa554e719961e6b8d8714464f38d113f2978572376267529f15da",
    "translatableHash": "sha256:185d0b3fdd5f7e538846bad9ade6552cae2da6422c9da3f3d9b2641095b710d2",
    "data": {
      "schemaVersion": 1,
      "name": "Lustspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "diplomacy": 7,
        "stealth": 9,
        "survival": 6
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "ttjEUNmJCQR3aUIy",
          "name": "Guisarme",
          "bonus": 10,
          "damage": "1d10+4 slashing",
          "traits": [
            "reach-10",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Stupefied 2 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:leopard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kB7FNn3vosp6cqQg",
      "slug": "leopard",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b3fec602ccd7e3a7ff386eecbb77c22e923686997e1084a24959bfe0274716ab",
    "translatableHash": "sha256:43e5189619cf613602731f354cd63c2261c5b9a0770fd751812c7145202d2706",
    "data": {
      "schemaVersion": 1,
      "name": "Leopard",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Leopards are among the smallest of the big cats, yet they are still dangerous creatures to tangle with. Leopard statistics can also be used for black panthers, white-spotted snow leopards, or tawny-coated cougars.\nFew predators of the natural world can match the cat's talent for stalking and stealth. Large cats can be found in almost any environment, usually keeping their distance from settlements. When civilization encroaches onto a big cat's hunting grounds, the animals are often driven to making desperate attacks against unwary travelers.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 7,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOUQcokkfOtGgPNG",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d10+3 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "YZxhBg9R5m8ydWm1",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "uEjliLhQWBsVYCsE",
          "name": "Maul",
          "kind": "action",
          "description": "The leopard makes two claw Strikes against a creature it has Grabbed. Both count toward its multiple attack penalty, but the penalty increases only after both attacks are made."
        },
        {
          "id": "iuFRjKw2PLJl3E3F",
          "name": "Pounce",
          "kind": "action",
          "description": "The leopard Strides and makes a Strike at the end of that movement. If the leopard began this action Hidden, it remains hidden until after this ability's Strike."
        },
        {
          "id": "8Hc25NUrYBwSHQuO",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The leopard deals 1d4 extra precision damage to Off-Guard creatures."
        },
        {
          "id": "5o4Qh26axxAvJeUp",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-careful",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "meVRbBCY7LwIZq3t",
      "slug": "soulbound-doll-careful",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:adaf6647d1b043f1643ead9c049bd1778c0b195e4cff0f9fb108a809229ce3b0",
    "translatableHash": "sha256:a155873c42f3e34eb4fca664062f7dbc821e8b7d804e2f2480e30ab8ac8c0f73",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Careful)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "1QSzGx6guGrP9Dgw",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-ant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mEZUTqNIgu0ASApu",
      "slug": "giant-ant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:141c7aef95d98e0e27b50456bdbbd830ed60f622bc27ca00414cb9cb43725f6d",
    "translatableHash": "sha256:fd0e3db75e05550ad425db405613b0fbb030e75cc1c815cb0bd4ca95068cb085",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Ant",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Giant ants are much like their smaller kin in their industrious habits, though growing to the size of ponies makes them much deadlier.\nAnts are industrious insects that aid the natural processes of decay and renewal.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 40,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": -5,
        "wis": 1,
        "cha": -4
      },
      "skills": {
        "athletics": 8,
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
          "id": "iSvQy8CUUD5u4nsG",
          "name": "Mandibles",
          "bonus": 9,
          "damage": "1d8+4 slashing",
          "traits": []
        },
        {
          "id": "TvDY3FqPJsHE5Bz7",
          "name": "Stinger",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "izA7GPk45mKcDG02",
          "name": "Giant Ant Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nMaximum Duration 4 rounds\nStage 1 1d8[poison] and Enfeebled 1 (1 round)\nStage 2 1d10[poison] and Enfeebled 2 (1 round)\nStage 3 1d12[poison] and Enfeebled 3 (1 round)"
        },
        {
          "id": "EhmJLz0h6EUzbywV",
          "name": "Haul Away",
          "kind": "action",
          "description": "Requirements The giant ant has a Large or smaller creature Grabbed\nEffect The giant ant Strides up to its full Speed, carrying the grabbed creature with it. It is Encumbered if the grabbed creature is Medium or larger."
        },
        {
          "id": "Zt3p0OLPOAG0F5xm",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:herexen",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "oNR29GreK0AxLucN",
      "slug": "herexen",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:33be104985c3b46a78d1d8fbd559022ee290a0e2a6d1a6717b998ca12f5ddd18",
    "translatableHash": "sha256:78a19f24fa806d1694118b377f76aef22cda520afc2be5b3ccf631f7bced9d7b",
    "data": {
      "schemaVersion": 1,
      "name": "Herexen",
      "level": 2,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "When a cleric rebels against their deity and dies in the grip of blasphemous rage, the heresies they committed in life may fuel their transformation into an undead herexen. Herexens seek vengeance against the deity they once worshipped, defiling temples, slaying the faithful, and rallying lesser undead and death cultists to aid them in their unholy quests. Though a herexen's divine gifts have mostly been corrupted into the vileness of undeath, they stubbornly cling to remnants of their former power, still wielding magic and armaments favored by the deity they so greatly despise.\nGroups of herexens that blasphemed against the same deity sometimes combine to form a mockery of a congregation, conducting blasphemous rites with something approaching euphoria. These congregations are often formed from a blasphemous cult whose members practiced their heresy together in life and died together, though some gather independent herexens of the same former faith.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 6,
        "deception": 7,
        "religion": 10,
        "stealth": 6
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
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "v9Q0Mz13HzloiDTp",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d6 + 4 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "dpMfwwbltlZ55vSZ",
          "name": "Final Blasphemy",
          "kind": "passive",
          "description": "When the herexen is destroyed, it explodes in a wave of void energy with the effects of a 3-action Harm spell (check (fortitude, dc:18)).\nThe herexen is destroyed, so it doesn't gain any Hit Points from this use of harm, and it doesn't need to have any harm spells remaining to use this ability"
        },
        {
          "id": "9kiCgRcrTLqrvzAj",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VXQuJ8bq1mVA48Xh",
          "name": "Heretic's Smite",
          "kind": "passive",
          "description": "While wielding the favored weapon of its former deity (such as a dagger for an ex-Pharasmin herexen), the herexen's Strikes deal an additional 1d6 spirit damage to creatures with the holy trait."
        }
      ],
      "spellcasting": [
        {
          "id": "dYuJ14oybPHNyAOW",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "2O485eOfecMJuSjt",
              "name": "Harm",
              "rank": 1
            }
          ]
        },
        {
          "id": "7q0sH9B8Zn1uCrNj",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "k4S2pT9WIcIQtkae",
              "name": "Death's Call",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pusk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "OoUrk7aHE5wq9nLs",
      "slug": "pusk",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9322a76a9cc4b60cef0a23c4f5689e77c86f4e8de2d7ce182502f5c3e87e97c2",
    "translatableHash": "sha256:5c30a80893ff525fa63563688a98481dda5a404c3fb73b1a1e9e5324337fb655",
    "data": {
      "schemaVersion": 1,
      "name": "Pusk",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Among the lowest and least powerful of all demons, the wretched pusks are just as vicious and cruel as their more powerful brethren. They happily vent their frustrations on anything weaker than themselves.\nBorn from the souls of the slothful, these demons appear vaguely humanoid in appearance with awkward limbs and slack lumps of skin hanging from their frames. Supposedly, a single slothful soul of sufficient depravity and strength can spawn an entire horde of these creatures. However, as weaker demons, their lot in life is to suffer at the hands of more powerful Abyssal predators, and only a tiny number of pusks ever manage to become something more. For this reason, pusks are quite accommodating when summoned by mortals. They're usually content to work under conditions few other fiends would accept, although they'll still gladly turn on even the kindest of masters who show even the slightest hint of weakness.\nWhen a sinful mortal soul is judged and sent on to the Outer Rifts, it can become a deadly fiend—a demon. Demons are living incarnations of sin—be they classic sins like wrath or gluttony, or more \"specialized\" depravities like an obsession with torture or the act of treason or treachery. Once formed, a demon's driving goals are twofold—the amassing of personal power, and the corruption of mortal souls to cause them to become tainted by sin. In this way demons ensure a never-ending supply of new demons to bolster their ever-growing ranks in the Outer Rifts.\nDemons are selfish and self-absorbed creatures, and most firmly believe that mortals only play at being more virtuous than fiends. They enjoy tempting mortals into damnation to both indulge their egos and swell their armies. Like many other fiends, one of the great rewards of this manipulation is fulfilling their hunger for souls. In their eyes, the primary use for these souls is to spawn new demons, who can serve as soldiers, slaves, pawns, or even currency for their more powerful masters.",
      "armorClass": 17,
      "hitPoints": 36,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 4,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 4,
        "int": -3,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 8,
        "deception": 6,
        "stealth": 6
      },
      "languages": [
        "chthonian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 3",
          "holy 3"
        ]
      },
      "attacks": [
        {
          "id": "oQ1wQPUo6g2iysB1",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "wncZzBRw5mBr1I3b",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
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
          "id": "EbsFN4gbz3zpDwft",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "p6uToNU7wgFDgDDH",
          "name": "Sloth",
          "kind": "passive",
          "description": "When a pusk regains their actions, roll [[/gmr 1d4 #Actions Regained]]{1d4}. The pusk regains that many actions for the turn (to a maximum of 3, or 2 if the pusk is a minion).\nEffects like the slowed condition can further reduce their number of actions."
        },
        {
          "id": "Lb8baU3vfeAtn1Nw",
          "name": "Cower",
          "kind": "action",
          "description": "The pusk makes itself as small as possible, protecting its vital organs with its limbs. It gains a +4 circumstance bonus to AC but takes a –2 penalty to attack rolls. This lasts until the pusk moves from its current space, falls Unconscious, or ends the effect as a free action."
        },
        {
          "id": "h8caQJMnKj4F22zZ",
          "name": "Frenzied Slashes",
          "kind": "action",
          "description": "The pusk makes three claw Strikes, each at a –2 penalty, all targeting the same creature. The pusk's multiple attack penalty doesn't increase until after it has made all three attacks. The pusk gains the Clumsy 2 condition until the beginning of its next turn."
        },
        {
          "id": "xdQJFj57QglkQXeG",
          "name": "Vicious Criticals",
          "kind": "passive",
          "description": "A pusk makes the most of any weakness it finds. Whenever a pusk scores a critical hit with its claw Strike, the target takes an additional 1d6[bleed]{1d6 persistent bleed} damage."
        }
      ],
      "spellcasting": [
        {
          "id": "gOiaDjo5WK8ESJHN",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "ugATBRw6Dd80sfYi",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "kXNpZJNwP0OyD0ds",
              "name": "Slow",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-monitor-lizard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "oyfheSs1ta4xvtEg",
      "slug": "giant-monitor-lizard",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8958a3790eb64921a02efac62b424f17fddf2ea1e4d6c467f4410578275c683c",
    "translatableHash": "sha256:1cd665d37796fa8c9ab38cae46d500cb66542d95fcefe31ee9abf8ff52038a35",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Monitor Lizard",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Large and seemingly ponderous, a monitor lizard is a deceptively swift and ruthless predator. It ambushes its prey by rushing out from cover and biting the target with its powerful jaws. A giant monitor lizard's saliva is venomous, allowing it to bring down prey larger than it can easily haul away in its jaws. Giant monitor lizards grow up to 14 feet long, including their long tails, and they weigh about 350 pounds. Their bodies are normally dark brown with patches of yellow or green.\nWhen nesting, a giant monitor lizard digs a deep burrow to hide in. The burrow serves as both a safe haven and a location from which the lizard can ambush larger prey such as deer, boars, or even humanoids. A giant monitor lizard can consume nearly its own body weight in a single meal, and its loosely articulated jaws allow it to swallow surprisingly large prey.\nLizards have a wide range of appearances and abilities, but most share a basic reptilian shape—long tails, wide toothy mouths, and four legs. While a few species are capable of movement on two legs for short periods of time, most are strictly quadrupedal. The three species presented here represent the most common and well-known of the larger species.",
      "armorClass": 18,
      "hitPoints": 36,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 9,
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
          "id": "1rQD15HWHf8e3q5K",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d10+3 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "QKo6NtH208FCd8UB",
          "name": "Gnashing Grip",
          "kind": "reaction",
          "description": "Trigger A creature Grabbed by the giant monitor lizard's jaws fails a check to Escape.\nEffect The giant monitor lizard's jaws deal 1d6[piercing] damage and the triggering creature is exposed to monitor lizard venom."
        },
        {
          "id": "B2QWyyEvVmWZPUkk",
          "name": "Lurching Charge",
          "kind": "action",
          "description": "The giant monitor lizard Strides twice and then makes a jaws Strike. If the lizard moved at least 20 feet away from its starting position, it gains a +2 circumstance bonus to this attack roll."
        },
        {
          "id": "VYGyp2X6IJdSS0b2",
          "name": "Monitor Lizard Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:17)\nMaximum Duration 6 rounds\nStage 1 Enfeebled 1 (1 round)\nStage 2 1d6[poison] damage and Enfeebled 2 (1 round)"
        },
        {
          "id": "rQ1dAhk5hHaVicBP",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:greedspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "pkhNqTDUttoAzcKn",
      "slug": "greedspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:19ad3bba57a5b3a9bfb770b274c6880d30c46a16730d9382d6c7c566a5d57d7b",
    "translatableHash": "sha256:7acd80c311b0ebc9f35a0464336a759eafcf100a3dca6e5127f7dee7bf89cf54",
    "data": {
      "schemaVersion": 1,
      "name": "Greedspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 8,
        "stealth": 9,
        "survival": 6,
        "thievery": 9
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "nQA2ksXUJhTw0O7I",
          "name": "Glaive",
          "bonus": 10,
          "damage": "1d8+4 slashing",
          "traits": [
            "deadly-d8",
            "forceful",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Clumsy 2 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:orc-commander",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "PLZk6zY5iwccPTPS",
      "slug": "orc-commander",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f2a6a9f7e80424a139e110bf95a1c2dc28d7799609725e62a571c4a3b7481bb0",
    "translatableHash": "sha256:cbfa21bbb8032fb92c9011327cde03e7b87dc60ee10f9ad59d9960e090479de6",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Commander",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "When orcs raid, the strongest is chosen as the leader, backed up by their siblings and other immediate family. If leadership is contested, candidates vie for control with displays of physical prowess or stirring speeches.\nMany orcs are forged in the fires of violence and conflict, often from the moment they're born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance, taming a powerful beast, or slaying a fearsome monster.\nTall and powerful, with long arms and thickly muscled legs, many orcs top 7 feet in height. Their heavy limbs and broad, almost bow-legged stances combine with a tendency to slouch forward to create an almost contradictory set of circumstances where an orc can tower over other humanoids while simultaneously staring them in the eye. These features, alongside a tendency to scar easily, can make them seem quite intimidating.\nThe half-orc dromaars, most commonly born of unions between orcs and humans, are often tested even more harshly than their full orc kin, but those who endure these tests can rise to positions of authority. \"An orc can have what an orc can hold\" is a saying that not only applies to an individual's ability to secure their own destiny and position, but is also likely the root of orcs referring to their communities as holds.",
      "armorClass": 19,
      "hitPoints": 32,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 1,
        "int": -1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 8,
        "intimidation": 6,
        "survival": 5
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
          "id": "fI8bsqTQlNTlSpdF",
          "name": "Greatclub",
          "bonus": 10,
          "damage": "1d10+4 bludgeoning",
          "traits": [
            "backswing",
            "shove"
          ]
        },
        {
          "id": "dvuK2slsg05eHdpZ",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "shove",
            "unarmed"
          ]
        },
        {
          "id": "v9Xt73Wj9wclc3ef",
          "name": "Javelin",
          "bonus": 8,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "xDUpwWQaZevQOkYQ",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "emCqHPRohfunMmH1",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "yeHohyJSYfiTwghO",
          "name": "Battle Cry",
          "kind": "action",
          "description": "Bellowing mightily, the orc commander gives themself and all orc allies within @Template[emanation|distance:60]{60 feet} a +1 status bonus to attack and damage rolls until the start of the orc commander's next turn.\nEffect: Battle Cry"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:fey-dragonet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "QIXc18xHrEWDmtKW",
      "slug": "fey-dragonet",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7bb00a174c5d675d20279f7b04e20f5d50285da2336186db026ceed94d781e6a",
    "translatableHash": "sha256:ccdbca17ff95a78b3dd035e7c4b2bce0a473ef2e8c4835f0ab68b03afdb3ee05",
    "data": {
      "schemaVersion": 1,
      "name": "Fey Dragonet",
      "level": 2,
      "rarity": "uncommon",
      "size": "tiny",
      "traits": [
        "dragon",
        "fey"
      ],
      "description": "Although they are much smaller than their larger dragon cousins, fey dragonets have many of the same physiological attributes, including long necks, toothy maws, sinuous tails, and sharp claws. They flit about on iridescent butterfly wings, the coloring of which changes based on where they live, giving them a natural camouflage. Unlike their larger kin, an adult fey dragonet remains the same size throughout their lifespan. The only visual clue to the age of a fey dragonet is the sheen on their scales, a glimmer that becomes more lustrous the older they get.\nFey dragonets usually exhibit pleasant and good-natured temperaments, though they have a mischievous streak that leads them to play tricks on those around them. In search of amusement, they prefer harmless annoyances over wounding malice. While often spontaneous, they may also spend months, if not years, planning the perfect prank. Especially responsive targets endear themselves to fey dragonets and may create a lifelong bond. A fey dragonet's reputation as a trickster leads many to associate them with fey, with whom the tiny dragons have cordial relationships, and this association gives them their name.\nPeaceful by nature, fey dragonets don't enjoy confrontation. If faced with hostility, they prefer to remain at a distance and breathe euphoric gas at their foes, diffusing the skirmish by creating an atmosphere of bliss. If conflict escalates, they target their opponents with spells, using their renowned trickery to escape. If their companions are in danger, however, their desire to remain out of combat changes. Fey dragonets protect their friends by any means available, including physical combat.\nSometimes, as fey dragonets grow older, their connection to the First World grows stronger. In addition to growing more lustrous and vibrant in appearance, these fey dragonets gain an increasing amount of magical primal power. Such fey dragonets increase in strength as appropriate—a fey dragonet of 20th level or even higher is possible, but it's exceptionally unusual to encounter a fey dragonet of 9th level or higher beyond the most remote regions of the First World. When creating a more powerful fey dragonet, change their spellcasting tradition to primal and grant them primal spells appropriate for a druid of their level. Fey dragonets don't grow much larger, regardless of how powerful they become. It's often difficult to tell how powerful one of these tiny dragons truly is at a glance!",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 12,
        "will": 11
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "deception": 8,
        "diplomacy": 8,
        "nature": 4,
        "stealth": 10
      },
      "languages": [
        "common",
        "draconic",
        "fey"
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
          "id": "XpcWHnvqjcngSTyK",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d4 piercing",
          "traits": [
            "finesse",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HQToKWTC3drtqduN",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "2vBMTexIigEtaKt3",
          "name": "Euphoric Breath",
          "kind": "action",
          "description": "The dragonet breathes euphoric gas in a @Template[cone|distance:15]. Each creature in the area must succeed at a check (fortitude, dc:18) save or become Stupefied 2 and Slowed 1 for [[/gmr 1d4 #rounds]]{1d4 rounds}; on a critical failure, the duration is 1 minute.\nThe fey dragonet can't use Euphoric Breath again for [[/gmr 1d4 #Recharge Euphoric Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "8yN0Tb58TCHXqGYI",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "oEIxLIIp8al7E2xF",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "qP7IntT2xowWGDvK",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "aN9D0U4u1t8rles3",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "4SqOgSRRbITuO4JC",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "Snll9sxch5CAJk6v",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "w3131eVtMt2pN86E",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "Mr1fDT6k5BnxrBbi",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "2IHlcjKLvqDaOFcv",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        },
        {
          "id": "uj64Am9tI0929tfx",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "eN762ag1BwsEj2mG",
              "name": "Invisibility (Self Only)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kholo-hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qOAuCiPgsjpjDgA1",
      "slug": "kholo-hunter",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:48ec53f7d02b3e6c28a10d20a7be22b433208793d2c06d39887bd9b6324a6012",
    "translatableHash": "sha256:a4f022f22b3058d643956e5f270c58bcd17c8f3799305cdb35f4c80d06fdb628",
    "data": {
      "schemaVersion": 1,
      "name": "Kholo Hunter",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "kholo"
      ],
      "description": "Kholo are tall, hyena-headed humanoids who dwell in savannas, warm grasslands, and arid hills. Given their appearance, their affinity for hyenas should not be surprising; kholos share their homes, food, and even many of their behaviors with these animals. Much like hyenas, kholos have a notorious reputation, for much the same reason—their uncanny laughter, frightening intelligence, and efficient pack tactics make them intimidating competition or foes. Kholos are keen to lean into these rumors, using them as a form of psychological warfare against their enemies.\nAlso like hyenas, kholos prefer to hunt in packs, and are exceptionally skilled at setting up ambushes or separating individual targets from larger groups. As kholo packs value all their members highly, any tactic that gives them an advantage in dangerous situations is seen as virtuous, while chivalry and honor are derided as pointlessly risky. It's a philosophy borne from a deep respect and love for their kholo brethren, but to most other people, it makes kholos terrible neighbors.\nKholos willingly eat nearly any other creature, including dead kholos, which can evoke strong reactions from people and cultures with a taboo against cannibalism or desecrating the dead. To a kholo, it's often more offensive to not eat a dead body, no matter its origin; kholos see no point in wasting precious meat in a harsh and challenging world. Worse still is the refusal to eat the flesh of a dead kholo, which they consider an insult to that kholo's memory and an implication that their flesh is unworthy of consumption. Eating the flesh of honored enemies is, for kholos, a respectful ritual, allowing that being to live on within the pack instead of rotting like trash on the ground.\nKholo women are often larger and stronger than kholo men and are typically considered the leaders of their hunting packs and clans.",
      "armorClass": 18,
      "hitPoints": 29,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "intimidation": 4,
        "stealth": 7,
        "survival": 5
      },
      "languages": [
        "kholo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EnBK4J1yRnqIdTCA",
          "name": "Battle Axe",
          "bonus": 10,
          "damage": "1d8+4 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "mKMByZgGjo3KcHwj",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+2 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "wJnJT5Ecr1w6xix3",
          "name": "Shortbow",
          "bonus": 10,
          "damage": "1d6 piercing",
          "traits": [
            "deadly-d10"
          ]
        }
      ],
      "actions": [
        {
          "id": "pWm5TTC2umXroqjo",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "A kholo hunter deals 1d4 extra damage to any creature that's within reach of at least two of the kholo hunter's allies."
        },
        {
          "id": "NxXkXhUBYYX8UsfS",
          "name": "Rugged Travel",
          "kind": "passive",
          "description": "A kholo ignores the first square of difficult terrain they move into each time they Step or Stride."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sedacthy-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qRUezfNovWdrZtdt",
      "slug": "sedacthy-scout",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a79e01601986f95e6a22891f362119f5678a77aef398bcde6f34a8b6c177282c",
    "translatableHash": "sha256:a9cc9a88fa511d0b7ef8abaf83347ca8379a49b4b7e56c4f35c17ea6457c9728",
    "data": {
      "schemaVersion": 1,
      "name": "Sedacthy Scout",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "humanoid",
        "sedacthy"
      ],
      "description": "Scouts, usually young sedacthies, ply the ocean in search of animal servants or tread ashore to hunt. Scouts hunting on the surface press crocodiles and snakes into service, while those underwater prefer electric eels and hippocampi.\nSedacthies are amphibious, fish-like humanoids who lurk in Golarion's oceans and are known for leading their animal servants ashore to devour air breathers. When an entire fishing village disappears overnight, sedacthies are the first suspects. Sedacthies pride themselves as natural leaders, with ambition limited only by their strict adherence to hierarchy. A sedacthy's station is determined by the strength of the animal servants they press into service, and the mettle they prove during hunts and in battles against outsiders.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "athletics": 8,
        "intimidation": 9,
        "stealth": 8,
        "survival": 7
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
          "id": "7MQABqBBrZmdmtix",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d4 bleed; 1d4+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "uoEKO9y00bjIH6m4",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "WiiQYUORZ31Lmtve",
          "name": "Spear",
          "bonus": 10,
          "damage": "1d6+6 piercing",
          "traits": []
        },
        {
          "id": "KAaNNeL7IAUvWQUo",
          "name": "Spear",
          "bonus": 10,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "B0SPjSFAOw4yPnrw",
          "name": "Sea Speech",
          "kind": "passive",
          "description": "A sedacthy speaking Thalassic can be understood by any animal that has a swim Speed or the amphibious or aquatic trait. By spending a week regularly interacting with such an animal, the sedacthy can make it permanently helpful."
        },
        {
          "id": "kEC0xBIk7QKOmXsZ",
          "name": "Wavesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "xkke602pekBofSGw",
          "name": "Shared Feast",
          "kind": "action",
          "description": "The sedacthy makes a jaws Strike. If it hits, an ally of their choice can spend a reaction to make a jaws Strike against the same target. Allies with beaks or similar attacks can use those instead of jaws."
        },
        {
          "id": "MOtTrezqGvDKD7fj",
          "name": "Wriggling Rush",
          "kind": "action",
          "description": "Frequency once per round;\nEffect The scout takes a Stride action and a Swim action, in either order. They ignore difficult terrain from mud, quicksand, and similar terrain during this movement."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-rash",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "rATBpWa62XUPnGZb",
      "slug": "soulbound-doll-rash",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6997101d0d69aa5b4be6f696e4aa20f5d065030db5db22b542cfe788ccdc47dd",
    "translatableHash": "sha256:72dea26670c21ef39339f0c402347b816ac43f8c58cf930a58edf95a3c2a23e4",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Rash)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "LZNviPPJE3IOnHJg",
              "name": "Breathe Fire",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:xulgath-skulker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "S1XgBHtXIOV3JjLy",
      "slug": "xulgath-skulker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b1a8ecd84430b4eda7d7bc2c83e6a0e8a152d3d9386e09bc851159eedb8eb06",
    "translatableHash": "sha256:dce161673ef6d6b9b2f184fb2fdfcf4d69b3ecf9689f44a7a633934558229760",
    "data": {
      "schemaVersion": 1,
      "name": "Xulgath Skulker",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "xulgath"
      ],
      "description": "Xulgath warrens are patrolled—some might say \"haunted\"—by the community's skulkers. These xulgaths specialize in stealth, striking swiftly from the shadows and otherwise ambushing foes.\nReptilian humanoids who live in the uppermost reaches of the Darklands, xulgaths (known as troglodytes to many surface-dwelling folk) often attack intruders in their territory on sight. They live in simple familial communities called clutches, battling rival groups and other aggressive Darklands inhabitants in order to survive. They occasionally raid surface settlements, usually at the behest of cruel, bloodthirsty leaders who are often themselves in the thrall of more powerful creatures like nagas or demons. A typical xulgath has dull gray, dark gray, or ashen scales, with a long tail and bony protrusions that run the length of their spine. A typical xulgath is 5 feet tall and weighs 150 pounds.\nAlthough today the xulgaths are brutal and scattered, they were one of the first intelligent humanoids to rise in the primeval world, once ruling over a mighty empire that stretched throughout the Darklands. Today, all that remains of this era are ruins of massive stone ziggurats and crumbling cities found within some of the larger caverns. Some groups of xulgaths continue to live among these ruins, venerating their ancestors' accomplishments, while others consider these areas taboo and leave them to become infested with Darklands vermin. Sages don't agree on why the ancient xulgath civilization fell. Some suspect it was the result of losing several wars waged against serpentfolk, while others suggest that the corruptive influence of demon worship rotted their culture from within.\nCertainly, many xulgath settlements continue to worship demons to this day, paying homage and offering live sacrifices to demons or other terrible creatures from the Outer Rifts. Occasionally, a xulgath mystic can call forth and bind a lesser demon to help serve the group, but one who delves too deep into occultism might summon a more powerful fiend that either tears the xulgaths to pieces or seizes control of the settlement.",
      "armorClass": 17,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "stealth": 8,
        "thievery": 8
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
          "id": "3XNydMhIMm8EBfhy",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "cTy576jgZ9YTvVnf",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "bOieIj9yjp8Tyi0J",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d4+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "V1nFWeg7OxNxkntU",
          "name": "Dagger",
          "bonus": 10,
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
          "id": "I9twZ33KuTCBenAT",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:16, options:area-effect,inflicts:sickened,inflicts:slowed)"
        },
        {
          "id": "c4LXwYKMdM5R7B7K",
          "name": "Hidden Movement",
          "kind": "passive",
          "description": "If a xulgath skulker starts their turn Undetected by a creature or merely Hidden from it, that creature is Off-Guard against the skulker's attacks until the end of the skulker's turn."
        },
        {
          "id": "iA3NXKVAiWzxGVaO",
          "name": "Mask Stench",
          "kind": "passive",
          "description": "The stalker masks their stench with curated herbs, suppressing their stench aura. The skulker can resume their stench aura as a free action."
        },
        {
          "id": "HavBnXAT02rDNben",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A xulgath skulker deals an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:slurk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "tashopA1s2fAbSXA",
      "slug": "slurk",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1f455429ff552ab4b9a1568d524c901796b0f4e74c09560156b1295522a90592",
    "translatableHash": "sha256:9172479db754c4e588636bd6656ce1c1fdd5918c773f0e258d3aa55acf8c7260",
    "data": {
      "schemaVersion": 1,
      "name": "Slurk",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "The slurk is a sticky, tusked frog-beast found in underground lairs and caves. It has two massive tusks that it uses to gore prey and tangle with rival slurks. With the slurk's natural ability to climb walls and cling effortlessly to ceilings, it can be easy for unwary cave explorers to end up on the wrong end of these formidable ivory tusks.\nSlurks exude two very different types of foul-smelling secretions from their pale white skin. Large pustules on the slurk's back drip a sticky resin-like slime that quickly hardens upon exposure to air. By flexing its skin, the slurk can burst these pustules in the direction of intruders, covering its foes in sticky goo and severely limiting their ability to withstand the monster's other attacks, including the effects of its other secretion. Glands along the slurk's ventral side excrete an incredibly slippery and fetid grease, which protects the slurk from the immobilizing effects of its own back slime but also has the added benefit of making it extremely difficult to grapple and capture. The best way to discover if a slurk is in the vicinity is to look for hard clumps of such grease, which accumulate and dry in cave corners and amid rock piles where slurks rest between meals.\nSlurks are thought to be descendants of a failed dwarven attempt to domesticate and breed large subterranean frogs as food and labor animals. Despite this apparent failure, others who live underground often befriend slurks. The sticky frog-beasts have proven extremely desirable to kobolds (page 210), who now domesticate and train slurks as powerful mounts and guardians. While other creatures, particularly boggards, sometimes train slurks to serve as guardians, kobolds remain those who use these creatures the most. A kobold mounted on a slurk will often hide in the upper ledges of a cave, using the advantages of height and surprise to harry foes with ranged attacks. Kobold riders also take advantage of the slurk's ability to climb, and charge at their enemies from the walls of a cavern.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 6,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": -4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 8,
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
          "id": "gJlDdyxfSGMpZN7a",
          "name": "Tusks",
          "bonus": 11,
          "damage": "1d8+4 piercing",
          "traits": [
            "deadly-d10"
          ]
        },
        {
          "id": "bdbMvBqIkhaOvg4j",
          "name": "Slime Squirt",
          "bonus": 9,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "uLf1dk5gMycZYjBy",
          "name": "+2 to Fortitude Saves vs. Grapple, Reposition, or Shove",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pbydRoHQnSpw50iV",
          "name": "Belly Grease",
          "kind": "action",
          "description": "The slurk extrudes a slippery grease from its ventral glands to coat the floor under it and in a @Template[emanation|distance:5], turning the affected area into uneven ground for 10 minutes, after which it dries to a putrid crust. The DC to [[/act balance dc=18]] across the slime is 18."
        },
        {
          "id": "Tf3oOPGPRrko1wvW",
          "name": "Entangling Slime",
          "kind": "passive",
          "description": "A creature struck by a slurk's slime squirt becomes Clumsy 1 and takes a –5-foot penalty to Speed for 1 hour or until the slime is removed.\nThe slime can be removed with a total of three Interact actions by the entangled creature or creatures adjacent to the creature. These actions don't need to be consecutive or made by the same creature.\nEffect: Entangling Slime"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-brave",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "uaKlWSKuyZmt88ol",
      "slug": "soulbound-doll-brave",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:391a2c8453773806814983292128600561c5a894d619c5d2272db840aff98813",
    "translatableHash": "sha256:67ce0ff31a56d48e94655da6b8e357ecec261738818e498d3cf9898bb521dde4",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Brave)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "G0p4HB1gDU0EYMpp",
              "name": "Enlarge",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-sassy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "v3jXIOHyQqXvImbc",
      "slug": "soulbound-doll-sassy",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4510a4d62932a7ea87426ad613f33377b440819301fef94b0b2d4ac90eb1d10d",
    "translatableHash": "sha256:be0f7c13c03440b35d03946e1312c8c71fc68d2510b8d6d4f9c7701b490b548d",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Sassy)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "mocTJksWYUltdQMh",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:soulbound-doll-gentle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "w2jByvjeZbAclGWf",
      "slug": "soulbound-doll-gentle",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f791730c17eceb6fa7cf0239d78147732aa5161ea3c18a28d0bc1cfaaca429cf",
    "translatableHash": "sha256:78fa40c185d0be699563873526277114dc022431ba99f0f7cde71f57471ca1dc",
    "data": {
      "schemaVersion": 1,
      "name": "Soulbound Doll (Gentle)",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "construct",
        "soulbound"
      ],
      "description": "Soulbound dolls are eerie mannequins or playthings that have been imbued with a small piece of a deceased mortal's soul. These little constructs are created for a variety of reasons—such as to serve as companions or servants—but their free will means their obedience to their creators is hardly a given. Followers of Pharasma generally abhor soulbound dolls, viewing them as a perversion of the natural cycle of souls, and those who worship the Lady of Graves see the destruction of a soulbound doll, regardless of the construct's behavior, as an important service to the Great Beyond.\nSoulbound dolls are the simplest in a series of soulbound constructs, including human-sized soulbound mannequins, powerful soulbound shells, and sentinel soulbound terra-cotta warriors. Creating them from unwilling living creatures is cruel, and an unwilling donor can resist the process with a successful Will save against the creator's Craft DC, ruining the doll if not preventing the donor's death. A doll can also be crafted from the soul of a person who has given consent to such use before their death.\nSoulbound dolls encountered by adventurers are typically guardians of some sort; despite their diminutive size, the soul fragment's power makes the doll's fist more dangerous than a casual observer would expect. Further, it grants the doll a single spell of outsized power, given its stature. Because of their autonomy and remarkable intelligence, soulbound dolls are occasionally employed by their crafters as administrators over much more powerful but mindless constructs, allowing such dolls to control defenses far beyond their own capabilities.\nThough soulbound dolls contain a small fragment of a soul extracted during or shortly after a person's death, this doesn't affect the deceased's resurrection or progress to the afterlife. This extraction process is typically lethal to otherwise living prospective soul donors.\nThe soul fragment resides in a soul focus gem (Hardness 10) typically embedded in the doll's neck or chest. The soul fragment generally clings to a strong personality trait of the original soul, but the doll continues to learn from its initial state, meaning its personality and abilities can change, possibly growing closer to the donor's or moving farther afield on its own individual path. The soulbound doll's focus gem retains the doll's memories even after the doll's destruction. The intact soul focus gem of a destroyed doll can even be placed into a new doll body by someone knowledgeable in the creation of soulbound creatures, effectively reconstituting the soulbound doll.",
      "armorClass": 17,
      "hitPoints": 23,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 4,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jG0R8rvY0cpJadHK",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d6+2 bludgeoning",
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
          "id": "iaTfEZ50lrTlV5Ku",
          "name": "Personality Fragments",
          "kind": "passive",
          "description": "A soulbound doll shares fragments of its donor soul's personality, though none of that creature's memories. This causes a soulbound doll to match a strong personality trait of the donor soul. Because of its soul sliver, a soulbound doll is not immune to spirit as most constructs are."
        }
      ],
      "spellcasting": [
        {
          "id": "AAFWcmRlGxb76Pps",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "MrpxQUM65ckrdbND",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IzGhkczHk82ogq6M",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "1U307HDIL9E54zyp",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "FoFszgk3PmOdEpY4",
              "name": "Peaceful Rest",
              "rank": 2
            },
            {
              "id": "IbxT3V3a7VcR5Sj1",
              "name": "Levitate",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zombie-brute",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WioQ6rOeMRuTOliY",
      "slug": "zombie-brute",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0db24ad13cb966066f2dfca82ed71143212e2fd6e5849299546df5fa3f21a96e",
    "translatableHash": "sha256:c6f3fa083ae779c97305ad9470592993a7833786d2fb4cfa888a84151579eb26",
    "data": {
      "schemaVersion": 1,
      "name": "Zombie Brute",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mindless",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "Necromantic augmentations have granted this zombie increased size and power.\nA zombie's only desire is to consume the living. Unthinking and ever-shambling harbingers of death, zombies stop only when they're destroyed.",
      "armorClass": 15,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 3,
        "will": 6
      },
      "abilities": {
        "str": 5,
        "dex": -3,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 11
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
          "id": "wdsdNrRHG7tMUw5P",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d12+5 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "TtcFIJZjrZ4Vaaml",
          "name": "Slow",
          "kind": "passive",
          "description": "A zombie is permanently Slowed 1 and can't use reactions."
        },
        {
          "id": "BOFFwI5nKDfABluP",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Is4V63biDtNBVpi2",
          "name": "Improved Push",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dromaar-mountaineer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WlbwkGQPAenbSUKJ",
      "slug": "dromaar-mountaineer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3c9409972b46c5e53834b3a7754f208b1b3c04ed792ee94c871ccdac6b961b2c",
    "translatableHash": "sha256:e18f569c1467182fc397880388dd683fa0fd4e4906a9bf30ed39f9c9d87e6b85",
    "data": {
      "schemaVersion": 1,
      "name": "Dromaar Mountaineer",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dromaar",
        "human",
        "humanoid",
        "orc"
      ],
      "description": "Dromaar mountaineers are hardened half-orc scouts who often lead raiding or scouting parties on dangerous expeditions. Dromaar scouts who lead many successful expeditions can rise to positions of prominence within their holds, and those who command enough loyalty may even claim a hold of their own.\nMany orcs are forged in the fires of violence and conflict, often from the moment they're born. As they live lives that are frequently cut brutally short, orcs revel in testing their strength against worthy foes, whether by challenging a higher-ranking member of their community for dominance, taming a powerful beast, or slaying a fearsome monster.\nTall and powerful, with long arms and thickly muscled legs, many orcs top 7 feet in height. Their heavy limbs and broad, almost bow-legged stances combine with a tendency to slouch forward to create an almost contradictory set of circumstances where an orc can tower over other humanoids while simultaneously staring them in the eye. These features, alongside a tendency to scar easily, can make them seem quite intimidating.\nThe half-orc dromaars, most commonly born of unions between orcs and humans, are often tested even more harshly than their full orc kin, but those who endure these tests can rise to positions of authority. \"An orc can have what an orc can hold\" is a saying that not only applies to an individual's ability to secure their own destiny and position, but is also likely the root of orcs referring to their communities as holds.",
      "armorClass": 19,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7,
        "survival": 8
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
          "id": "gqhSOIHFsrDivzG3",
          "name": "Pick",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "iQ991sAdn5uFPmYG",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile",
            "shove",
            "unarmed"
          ]
        },
        {
          "id": "pUFcagnw3F2Ju23C",
          "name": "Bola",
          "bonus": 9,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "nonlethal",
            "ranged-trip",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "yhBF2qPve94KQMDy",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "G777V3D4iEFRLrXm",
          "name": "Tangle Prey",
          "kind": "action",
          "description": "The dromaar draws a bola and Strikes a target within 20 feet. On a success, the dromaar immediately rolls an check (athletics, defense:fortitude) check against the target's Fortitude DC to Trip them."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:deinonychus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "wNkS1ArFjS6ZsrPS",
      "slug": "deinonychus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:43a75af0831f1fc900666bd618e9a4fe85ec16c656b02a793e619ee44824ef87",
    "translatableHash": "sha256:dc9722f383647524e167f283a5862137ecfd2d06a717f664fd14c030f2bf9c94",
    "data": {
      "schemaVersion": 1,
      "name": "Deinonychus",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Deinonychuses are wily hunters that attack in groups of up to a dozen individuals, ripping apart prey with sharp talons and powerful jaws. They are lean, muscular, and have two powerful legs and a long tail that helps them maintain balance. Although deinonychuses don't use their dexterous clawed forelimbs to attack, the dinosaurs can use them to pull aside small barriers. Although some of these dinosaurs have scaly skin, most have thatches of vibrantly colored feathers as well. A deinonychus is about 6 feet tall and weighs about 150 pounds.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 9,
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
          "id": "JBSyvkullKxEJ94w",
          "name": "Jaws",
          "bonus": 9,
          "damage": "2d6+3 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "LLDqAQlq7w0YWyO0",
          "name": "Talon",
          "bonus": 9,
          "damage": "1d6+3 slashing; 1d4 bleed",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ROtcz4ACRnmedQua",
          "name": "Darting Strike",
          "kind": "action",
          "description": "The deinonychus Strides up to 10 feet and then makes a Strike, or makes a Strike and then Strides up to 10 feet."
        },
        {
          "id": "0xo9GafMlJXTsSNk",
          "name": "Predator's Advantage",
          "kind": "passive",
          "description": "Bleeding creatures are Off-Guard to the deinonychus."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skeletal-horse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "X2vz6CrMaHIso0ha",
      "slug": "skeletal-horse",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ebc57742f35657504d39c7a4b4b3fc3aff420a00f98feaca3ae6460ca28f66df",
    "translatableHash": "sha256:23d20419421e2f6488818365875b9682e2863e0ee25e2a41a640b7e6db0cf921",
    "data": {
      "schemaVersion": 1,
      "name": "Skeletal Horse",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Skeletal horses are sometimes used as mounts by other undead or monsters.\nAnimated skeletons are among the most common types of undead.",
      "armorClass": 16,
      "hitPoints": 33,
      "speedFeet": 40,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
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
          "id": "UCRM8G3tekG92tUj",
          "name": "Hoof",
          "bonus": 9,
          "damage": "1d8+5 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "MQbK2a6aQPbnYNCw",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ohwAZH20CeE3uGMp",
          "name": "Gallop",
          "kind": "action",
          "description": "The horse Strides twice, with its Speed increased by 10 feet."
        },
        {
          "id": "1AzFNDZFiaJxTAJf",
          "name": "Undead Steed",
          "kind": "passive",
          "description": "Undead and creatures allied with them can Command a skeletal steed without needing to attempt a skill check."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:warg",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "x7Aa4Tvr9eBaHryF",
      "slug": "warg",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6b05b49f8833f45d5e963d8ce770b7c4dd3b5521b2c7df1935e62da5eb1184f9",
    "translatableHash": "sha256:acb84977d3097d9b0fc2e2195dc45c113355f8edc903958ad43bd3928df493b2",
    "data": {
      "schemaVersion": 1,
      "name": "Warg",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast"
      ],
      "description": "Wargs hunt in packs like wolves, but their penchant for taunting victims makes them easy to distinguish from their cousins. Orcs and hobgoblins frequently recruit wargs. Most wargs are amenable to this arrangement, but if food should run out, wargs are more than willing to integrate goblinoid flesh into their diet.\nThe warg is an intelligent and malevolent wolf that dwells among goblins, hobgoblins, orcs, and violent humanoids.",
      "armorClass": 17,
      "hitPoints": 36,
      "speedFeet": 40,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "deception": 6,
        "intimidation": 6,
        "stealth": 7,
        "survival": 8
      },
      "languages": [
        "common",
        "goblin",
        "orcish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "9EIwBDwTdZ56ngZa",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d8+4 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "z4Mouf0sgt0pO2Vz",
          "name": "Avenging Bite",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the warg's jaws attacks one of the warg's allies.\nEffect The warg makes a jaws Strike against the triggering creature."
        },
        {
          "id": "VfGIlE5o88e6ZuW6",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The warg's Strikes deals an extra 1d4 damage to any creature within reach of at least two of the warg's allies."
        },
        {
          "id": "gxJrJPqtpVlM0Xe6",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Small, (1d6+2)[bludgeoning], Rupture 9"
        },
        {
          "id": "ydL0czc2qFw4RnCW",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-bat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "xnpuGO8jEMba9wy5",
      "slug": "giant-bat",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2ea2eafeb729da87d827000f01a3339361b927d77ecad98c862fc75de649d923",
    "translatableHash": "sha256:eee96e8ae93881e006445105c315635a6dda04251773623175e4c05b640e358a",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Bat",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "While big bats are certainly not uncommon in dark caves and abandoned ruins and may instill fear in squeamish spelunkers, the so-called giant bat is a true monster, weighing well over 100 pounds and having a wingspan of nearly 15 feet. It primarily eats fruit and bugs, but can be incited to violence through fear or hunger. Giant bat attacks can quickly give rise to rumors of more dangerous monsters—many mistake these massive animals for some sort of demon or vampiric monster. But like other bats, giant bats are simply social and intelligent mammals. They are sometimes used as mounts by smaller humanoids, commonly those who hail from or dwell in mountainous or underground regions.\nA wide range of bats dwell throughout the world. Most of these nocturnal animals are harmless insectivores, but deadly breeds of vampire bats and oversized bats the size of horses pose much more significant threats to adventurers.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 11,
        "senses": [
          "echolocation-40",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "pFP0EC770FgwQQ6K",
          "name": "Fangs",
          "bonus": 9,
          "damage": "1d10+4 piercing",
          "traits": []
        },
        {
          "id": "SWBrXQjy0PikJ1wd",
          "name": "Wing",
          "bonus": 9,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "8cb0jB7NP8JMjdkx",
          "name": "Echolocation (Precise) 40 feet",
          "kind": "passive",
          "description": "A bat can use its hearing as a precise sense at the listed range."
        },
        {
          "id": "UufKTkmVCcXkrBVb",
          "name": "Wing Thrash",
          "kind": "reaction",
          "description": "Trigger An adjacent enemy damages the giant bat\nEffect The bat makes one or two wing Strikes—one against the triggering creature and one against another adjacent creature."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:wrathspawn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yv7hdQ3MO3pLgCF5",
      "slug": "wrathspawn",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0a10e9e4a21efb04bc84669a74912f9e236b43297c21f7969943141e804c5d68",
    "translatableHash": "sha256:2295e60554d1248681c1167709d3b7bbe92796bd0cc0b86b33008bc93c9dafc3",
    "data": {
      "schemaVersion": 1,
      "name": "Wrathspawn",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Sinspawn were created by one of seven ancient wizards known collectively as runelords—each of whom embraced and embodied one of seven sins. The first sinspawn was created by the Runelord of Wrath, utilizing techniques that have since gone on to influence fleshwarping practices. It wasn't long before the technique used to create sinspawn fell into the hands of the other runelords, and while each tried their own hand at crafting variants of their own design, today, sinspawn of wrath remain the most numerous and notorious of their kind.\nBearing only a vague resemblance to the humanoids from whose flesh they were formed, sinspawn generally appear horrifically emaciated and have unnaturally long arms and digitigrade legs, each with a trio of stubby, taloned digits. Veins bulge across sinspawn's bodies in sanguine patterns that suspiciously resemble twisted runes, and their flesh is pale and hairless. Their heads are elongated, with slits for a nose, red eyes, and disturbing lower jaws that split in half at the chin, revealing pedipalps that end in tiny, three-fingered hands and framing a long, lolling tongue.\nSinspawn stand 6-1/2 feet tall and typically weigh as much as an emaciated human of their size. They behave in a manner consistent with their associated sin and have physical characteristics that hint at these qualities. For example, greedspawn's veins appear to run with gold, while envyspawn appear even more gaunt than the rest of their kin.",
      "armorClass": 16,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 12,
        "stealth": 9,
        "survival": 6
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lOGhyEufGuD2T8aX",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "El6yEwdcVoYxSpbv",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "b4VPzag6lVAYu0Qk",
          "name": "Ranseur",
          "bonus": 10,
          "damage": "1d10+4 piercing",
          "traits": [
            "disarm",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "hk7qH9BpvzM7rFGe",
          "name": "Sin Scent (Imprecise) 30 feet",
          "kind": "passive",
          "description": "A sinspawn can smell creatures that reflect its sin as the scent ability. The GM determines which creatures are appropriately sinful."
        },
        {
          "id": "d8HKHc0xY8ipNaHu",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nMOq1aUvaAjrygsK",
          "name": "+4 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KC0EDtBsU8uqFaKL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "MpNlJrdPvv9bECNE",
          "name": "Sinful Bite",
          "kind": "passive",
          "description": "A creature hit by the jaws of a sinspawn must attempt a check (will, dc:18) save as it is assailed by sinful thoughts.\nCritical Success Unaffected\nSuccess Sickened 1\nFailure Sickened 2\nCritical Failure sickened 2 plus Drained 1 and Enfeebled 1 for 1 minute"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hyaenodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "1Qqu3b4J4aJYEQOX",
      "slug": "hyaenodon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:049280e1fc04adea2e7035cac135a75b3477718251e994b5ceae8fe0e207c7b9",
    "translatableHash": "sha256:32b5cdfbd97a330e0b3e56ee49762e5cda1503ca21fe8c95ad5b00d08a6d0290",
    "data": {
      "schemaVersion": 1,
      "name": "Hyaenodon",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Hyaenodons are ferocious primeval creatures that resemble hyenas. Looming, shaggy-furred animals nearly the size of a horse, hyaenodons are truly formidable predators to be reckoned with, due both to their size and to their flesh-shearing jaws. Hyaenodons prey on small horses, camels, and even young rhinoceroses. Kholo clans find these creatures particularly useful as mounts and guardians.\nHyenas are pack-hunting scavengers known for their unnerving, laughterlike cries. The most well-known hyenas are the socially gregarious spotted hyenas, who travel in packs and work together to hunt or drive off larger creatures. Hyenas are typically nocturnal creatures who scavenge meat, insects, and fruit, though they aren't above supplementing their carrion diets with fresh prey.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 40,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 8,
        "will": 7
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 12,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ebr1KbgBZOCMt92B",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d10+5 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Afsdsjz6Zk8smEoN",
          "name": "Bonecrunching Bite",
          "kind": "passive",
          "description": "A creature that is critically hit by a hyaenodon must succeed at a check (fortitude, dc:20) save or become Wounded 1 as the creature's bones or cartilage are crushed by the beast's jaws."
        },
        {
          "id": "fX3ZS6kW7CqzkJuu",
          "name": "Drag",
          "kind": "action",
          "description": "The hyaenodon makes a jaws Strike against a Prone enemy. If it hits, in addition to dealing damage, the hyaenodon Strides up to 10 feet, dragging the enemy along."
        },
        {
          "id": "pYg2FGHWnoS7Le78",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The hyaenodon deals an extra 1d6 damage to any creature within reach of at least two of the hyaenodon's allies."
        },
        {
          "id": "YWBW2zZbIggEH4rW",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-wasp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6aaBmiOgqZ5h2IhW",
      "slug": "giant-wasp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:64a53ce0a52b1aea24e14bb93f426ef9dee7cacb748e6b440931b0ed78498d00",
    "translatableHash": "sha256:17b2935ad5e6b96d1fa3b1bcc0717f699f484e95881456bd9c1dad40debde064",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Wasp",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Giant wasps are much more dangerous but less common than their smaller kin, and—to the relief of those who encounter them—they tend to be solitary.\nWhile the common wasp poses little threat to a hardy adventurer aside from an uncomfortable sting, a large and aggressive swarm of these territorial insects—to say nothing of their oversized kin—can lay low an entire party of heroes. The wasps represented here are of the common variety, also known as yellow jackets, but many other sorts of dangerous wasps exist, such as a Garundi variant that swarms in such great numbers that it can decimate entire villages.",
      "armorClass": 17,
      "hitPoints": 45,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 11,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 4,
        "int": -5,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dIKN1uas299xNK54",
          "name": "Stinger",
          "bonus": 12,
          "damage": "1d12+4 piercing",
          "traits": [
            "poison"
          ]
        }
      ],
      "actions": [
        {
          "id": "K56mdzOHeveTvQ5D",
          "name": "Giant Wasp Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:19)\nMaximum Duration 6 rounds\nStage 1 no effect (1 round)\nStage 2 Clumsy 2 (1 round)\nStage 3 Paralyzed (1 round)"
        },
        {
          "id": "0SVph284K2Css2S6",
          "name": "Implant Eggs",
          "kind": "action",
          "description": "The giant wasp lays eggs in an adjacent creature that is Paralyzed or Unconscious, exposing it to the wasp larva disease."
        },
        {
          "id": "Crv6pRa77FWxBY6M",
          "name": "Wasp Larva",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:21)\nStage 1 carrier with no ill effect ([[/gmr 1d6 #days]]{1d6 days})\nStage 2 Drained 1 ([[/gmr 1d4 #days]]{1d4 days})\nStage 3 5d6[untyped] damage, larva emerges (disease ends)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:grizzly-bear",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6K4RWus85o8iqy0t",
      "slug": "grizzly-bear",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c1686a080e931d5bd6b100da5405684f601e6e29fd2d244ee88a572c05cfd954",
    "translatableHash": "sha256:eca523bb519888bf5d74fca9c5e3aa726b553675fa9324392950b3239a85339d",
    "data": {
      "schemaVersion": 1,
      "name": "Grizzly Bear",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "This large and powerful omnivore inhabits forested hills. While it typically sustains itself on nuts, berries, fish, and small mammals, it's fiercely territorial and will chase off or kill any creature it views as competition. Grizzly bears are especially temperamental when their young are nearby. In combat, a grizzly bear often attempts to grab and maul its foe with surprising ferocity. It continues its assault until its foe seems like it is no longer a threat, though if the bear is hungry, it will not hesitate to feed.\nBears are ferocious predators typically found in cold or temperate woodlands and hills. Many species of bear exist in addition to the two presented below, such as the smaller black bear or the arctic-dwelling polar bear.",
      "armorClass": 17,
      "hitPoints": 59,
      "speedFeet": 35,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 6,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 5,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "athletics": 11,
        "survival": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IJhY1kNU4OIS7fL4",
          "name": "Jaws",
          "bonus": 11,
          "damage": "2d8+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "p51DG64tQvgJwgyu",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d10+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Emupr9krjKNn5xjb",
          "name": "Mauler",
          "kind": "passive",
          "description": "The grizzly bear gains a +2 circumstance bonus to damage rolls against creatures it has Grabbed."
        },
        {
          "id": "sqpUsCajoWHMhg1o",
          "name": "Rush",
          "kind": "action",
          "description": "The grizzly bear Strides and makes a Strike at the end of that movement. During the Stride, the grizzly bear gains a +10-foot circumstance bonus to its Speed."
        },
        {
          "id": "M7sBCYj1yfPikRDu",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6KF6TQvLHHpE0uAM",
      "slug": "lion",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2b12f7bbb0586312875262e653cf07472556b77ea64dadba8845fe53951f82ca",
    "translatableHash": "sha256:e355a8853259706158987a3b6e0283ccf792a3770d16d1f74c0b34ba702aef59",
    "data": {
      "schemaVersion": 1,
      "name": "Lion",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Lions are cooperative hunters, ambushing dangerous prey in groups of lionesses that work in tandem to trap and kill their prey. Male lions are typically larger, with long manes, and when they hunt, they tend to do so on their own.\nFew predators of the natural world can match the cat's talent for stalking and stealth. Large cats can be found in almost any environment, usually keeping their distance from settlements. When civilization encroaches onto a big cat's hunting grounds, the animals are often driven to making desperate attacks against unwary travelers.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 9,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "y8SLwokMHGSHm0S9",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d10+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "ugytuxGqE0wsYOff",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d8+6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "hYcrjabm50sPyqBV",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The lion deals 1d4 extra damage to any creature that's within reach of at least two of the lion's allies."
        },
        {
          "id": "LxnGNDFd9yCEkOAt",
          "name": "Pounce",
          "kind": "action",
          "description": "The lion Strides and makes a Strike at the end of that movement. If the lion began this action Hidden, it remains hidden until after this ability's Strike."
        },
        {
          "id": "387c1CSiNx4uWeqZ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The lion deals 1d6 extra precision damage to Off-Guard creatures."
        },
        {
          "id": "XTXRL6O388nfibXc",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:xulgath-leader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "7w1w7VTnIWMBdFux",
      "slug": "xulgath-leader",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bda37ce1a4b171c3c3a0a8fac73145dcdb59bc9cb37dfa183ddee057d6b091f8",
    "translatableHash": "sha256:0a6da888ca92bed59c213f103df53f6467e2e64654ada77253b4ed68d7d7e0f0",
    "data": {
      "schemaVersion": 1,
      "name": "Xulgath Leader",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "xulgath"
      ],
      "description": "Xulgath leaders are usually the strongest, most violent members of a community—although in some cases, particularly in larger groups, xulgath clutches are led by powerful demon cultists or other monsters who seek to use the xulgaths as servants or sacrifices.\nReptilian humanoids who live in the uppermost reaches of the Darklands, xulgaths (known as troglodytes to many surface-dwelling folk) often attack intruders in their territory on sight. They live in simple familial communities called clutches, battling rival groups and other aggressive Darklands inhabitants in order to survive. They occasionally raid surface settlements, usually at the behest of cruel, bloodthirsty leaders who are often themselves in the thrall of more powerful creatures like nagas or demons. A typical xulgath has dull gray, dark gray, or ashen scales, with a long tail and bony protrusions that run the length of their spine. A typical xulgath is 5 feet tall and weighs 150 pounds.\nAlthough today the xulgaths are brutal and scattered, they were one of the first intelligent humanoids to rise in the primeval world, once ruling over a mighty empire that stretched throughout the Darklands. Today, all that remains of this era are ruins of massive stone ziggurats and crumbling cities found within some of the larger caverns. Some groups of xulgaths continue to live among these ruins, venerating their ancestors' accomplishments, while others consider these areas taboo and leave them to become infested with Darklands vermin. Sages don't agree on why the ancient xulgath civilization fell. Some suspect it was the result of losing several wars waged against serpentfolk, while others suggest that the corruptive influence of demon worship rotted their culture from within.\nCertainly, many xulgath settlements continue to worship demons to this day, paying homage and offering live sacrifices to demons or other terrible creatures from the Outer Rifts. Occasionally, a xulgath mystic can call forth and bind a lesser demon to help serve the group, but one who delves too deep into occultism might summon a more powerful fiend that either tears the xulgaths to pieces or seizes control of the settlement.",
      "armorClass": 18,
      "hitPoints": 44,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 2,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 11,
        "intimidation": 6,
        "stealth": 6
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
          "id": "JWlYLXxlI4IRYbeF",
          "name": "Greataxe",
          "bonus": 11,
          "damage": "1d10+6 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "p1OayYNJswICCP7g",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d6+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "wEVWlNgGdVwq51Y9",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d4+6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "VcMwjaxqor5ucwyE",
          "name": "Javelin",
          "bonus": 8,
          "damage": "1d6+4 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "UKffxjoJRg2IEdFH",
          "name": "Stench",
          "kind": "passive",
          "description": "30 feet. check (fortitude, dc:19, options:area-effect,inflicts:sickened,inflicts:slowed)"
        },
        {
          "id": "1BwIo7mgXKcuS2Vg",
          "name": "Weakening Strike",
          "kind": "passive",
          "description": "A creature hit by a xulgath leader's jaws or claw Strike is Enfeebled 1 (or Enfeebled 2 on a critical hit) for 1 round."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:twigjack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9sGgANyNFCKnu06t",
      "slug": "twigjack",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ca789338d6d1278f355dcdd824fc8be04d807a5c5a52c98e949e51c8c989a7a7",
    "translatableHash": "sha256:8761bd999499538a45127fb89013171d90911b71818edc85d1fd1188fd4e65fd",
    "data": {
      "schemaVersion": 1,
      "name": "Twigjack",
      "level": 3,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "plant",
        "wood"
      ],
      "description": "\"True\" twigjacks, as they consider themselves, are found in wild forests alongside the fey they idolize.\nMaladjusted forest denizens, twigjacks form from the cruel and prankish combination of fey and the very woods in which they reside. A twigjack's body is made up of prickly brambles woven with vines. Shaggy, mossy growth, not unlike hair, tops a twigjack's head. Its mouth is just a canyon of splintered and broken sticks bisecting its face. Leaves and sprigs of new growth randomly sprout from the creature's body. Many dense forests on Golarion have at least a handful of twigjacks living in the undergrowth.\nWhile truculent and violent, twigjacks care deeply for what they consider to be their forests. These creatures harass outsiders who delve deep into their wooded domains, forcing back even the most determined explorers, foresters, and travelers, especially when those intruders cut roads through the forest. However, they are not terribly territorial when it comes to other forest creatures. When sylvan creatures, especially fey, rally against an outside threat, twigjacks in the area eagerly arrive to fight, even if they were not invited.",
      "armorClass": 19,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 9,
        "nature": 7,
        "stealth": 11
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "fire 5",
          "axe-vulnerability 5"
        ]
      },
      "attacks": [
        {
          "id": "x7o1u8JU3bkG8XjR",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d10+4 slashing",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "unarmed"
          ]
        },
        {
          "id": "W7Wjl7sNOZeiCQDu",
          "name": "Splinter",
          "bonus": 11,
          "damage": "1d6+4 piercing",
          "traits": [
            "deadly-d6"
          ]
        }
      ],
      "actions": [
        {
          "id": "1abnSJGdHEvG6Lyl",
          "name": "Bramble Jump",
          "kind": "action",
          "description": "Requirements The twigjack is in undergrowth\nEffect The twigjack scrambles into the undergrowth and instantly teleports to a square of undergrowth within 60 feet. This movement doesn't trigger reactions."
        },
        {
          "id": "dOcDYCNGkTD6GGcZ",
          "name": "Splinter Spray",
          "kind": "action",
          "description": "The twigjack sprays a barrage of splinters and brambles from its body in a @Template[cone|distance:15], dealing 4d6[piercing|options:area-damage] damage (check (reflex, dc:20, basic, options:area-effect) save).\nIt can't use Splinter Spray again for [[/gmr 1d4 #Recharge Splinter Spray]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dire-wolf",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "AFWmiIBJ7ypgydQD",
      "slug": "dire-wolf",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6b934d2cb56ff4a7d6432228540ae3b79a6a5fbafde2ff2aed26c99ad55b7c3a",
    "translatableHash": "sha256:a12e084c47cacf6ccd53003c393492c7495b75468c5dbd87d9b1b6b94000164a",
    "data": {
      "schemaVersion": 1,
      "name": "Dire Wolf",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Much larger and more foul-tempered than their common cousins, dire wolves haunt primeval lands that accommodate their massive size and proportionately large hunting grounds and appetites. Orcs are fond of using dire wolves as mounts, finding their vicious tempers perfect for hunting and warfare. Dire wolves are far more likely to prey on humanoids than ordinary wolves, considering them nothing but another kind of smaller, nutritious animal.\nWolves roam forests, hills, and other wild lands, where they hunt in packs to beleaguer and surround their prey before going in for the kill. Like most predatory animals, wolves prefer to attack the weakest or most vulnerable prey they can find.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 35,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 10,
        "stealth": 8,
        "survival": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "16mvgME2H3Zp8aMW",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d10+5 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "xswRs14UWcUn7b5S",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:20)"
        },
        {
          "id": "zFNrz9di2EnI53hz",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The dire wolf's Strikes deal 1d6 extra damage to creatures within reach of at least two of the wolf's allies."
        },
        {
          "id": "M0BuH1pWhtWsVIYm",
          "name": "Worry",
          "kind": "action",
          "description": "Requirements The dire wolf has a creature Grabbed or Restrained in its jaws\nEffect The dire wolf fiercely shakes the creature with its teeth, dealing (1d10+2)[piercing] damage with a check (fortitude, dc:20, basic) save."
        },
        {
          "id": "aidpPDwvXoVTKC6j",
          "name": "Grab",
          "kind": "action",
          "description": ""
        },
        {
          "id": "m2lc6stQx0fMmqPO",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pitborn-adept",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BCPpwj9uCiS7bF9C",
      "slug": "pitborn-adept",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8e168d1e345be53978edbe7139340b8a46d690e4ac15b5e766a2af3021712143",
    "translatableHash": "sha256:a55a03a50d66b73a4532f90430493fb6c6afb1256419c3ddaae223c25c950a51",
    "data": {
      "schemaVersion": 1,
      "name": "Pitborn Adept",
      "level": 3,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "nephilim"
      ],
      "description": "One of the most common types of nephilim is the pitborn, who bear a demonic corruption infesting their mortal bloodline.\nMany immortals dwell upon the other planes of the Great Beyond. Some are benevolent and kind, like angels. Others are cruel and destructive, like demons. And some fit roles outside of morality, like psychopomps. It's far from unheard of for mortals and immortals alike to become entangled romantically, and the children of such engagements carry a supernatural element in their bloodlines for generations to follow. After the first generation, this otherworldly influence usually lies dormant, but now and then, the influence can manifest strongly in descendants many years later. These inheritors of extraplanar legacies are known collectively as planar scions.\nNephilim\nNephilim are planar scions with a connection to the planes of the Outer Sphere. Some are obviously tied to realms such as Heaven or Hell, while others are cryptic amalgams of metaphysical traits.",
      "armorClass": 17,
      "hitPoints": 29,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 9,
        "deception": 9,
        "intimidation": 7,
        "occultism": 9,
        "religion": 6,
        "society": 9,
        "stealth": 7
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
          "id": "H88Ay3ZweyXm4sL3",
          "name": "Staff",
          "bonus": 6,
          "damage": "1d6 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        }
      ],
      "actions": [
        {
          "id": "qjRGAO0ktmv3fxHQ",
          "name": "Drain Bonded Item",
          "kind": "passive",
          "description": "Frequency once per day\nRequirements The adept hasn't acted yet on this turn\nEffect The adept expends the power stored in its staff. This gives the adept the ability to cast one prepared spell it had already previously cast today (choosing a different spell rank each time), without spending a spell slot. The adept must still Cast the Spell and meet the spell's other requirements."
        }
      ],
      "spellcasting": [
        {
          "id": "FrDW4cm9w2zRRONj",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 11,
          "saveDc": 21,
          "spells": [
            {
              "id": "XfHs0HWYrV9GLYRT",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "PEXHGgav63yt8Upo",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "oqD1St1XZSglPHgt",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "kcSH33kNmKXbvopY",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "CsWLXJAf0iK61ZkX",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "23OauMyXY5tAgvNj",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "LisM3Mib71zR5MmW",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "yGmQ8BYQhzZszalI",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "w65FtqoPmv8lI231",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "n3TuCMWlrVQzxZbW",
              "name": "Invisibility",
              "rank": 2
            }
          ]
        },
        {
          "id": "99NmF28aoamnNDi6",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "bNfGqKIhHO7lhkzU",
              "name": "Darkness",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-scorpion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "BWm17BRQYGMLqtNe",
      "slug": "giant-scorpion",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9fd6c10be7bdea5c07c8aca923abb8cbae74abe515e8ad0487f6f2a96ec3a626",
    "translatableHash": "sha256:a6f6f8c675d4f4f9e6d89d8602aaa32a75455e6b19d0004d9da3660a3242fdad",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Scorpion",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "These massive, terrifying arachnids are typically 8 feet long from head to the base of the tail. Giant scorpions are the favored pack animals and war beasts of various desert-dwelling creatures, particularly kholos. They are most commonly encountered in the wild, however. There they lair in mountainside caves or burrow beneath shallow layers of sand where they lie in wait for prey to wander near.\nChitinous scourges of deserts, forests, savannas, and badlands, scorpions are deadly arachnids with powerful pincers and a painful sting. Scorpions can be found in nearly every climate, where they hunt their prey with a mixture of patient stealth and raw strength. Most scorpions live in underground burrows, either as lone hunters or part of a larger colony. These arachnids are so feared and dangerous that in many cultures, they are treated as deities or dualistic symbols of both death and protection from said death.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 40,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -5,
        "wis": 2,
        "cha": -4
      },
      "skills": {
        "athletics": 11,
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
          "id": "YYsOPt3KeLlEyyOR",
          "name": "Pincer",
          "bonus": 11,
          "damage": "1d8+6 slashing",
          "traits": [
            "agile",
            "reach-10"
          ]
        },
        {
          "id": "xx3DbCuNgwUZWSha",
          "name": "Stinger",
          "bonus": 11,
          "damage": "1d6+6 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "rQa09Nb9LtSI9UYi",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VuCv5cbhAYUoEEgF",
          "name": "Reactive Strike (Stinger Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "5PDURAzo537r6kje",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d6+4)[bludgeoning], check (fortitude, dc:20, basic)"
        },
        {
          "id": "WuUxcHe2LEnb3BVQ",
          "name": "Giant Scorpion Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nMaximum Duration 6 rounds\nStage 1 1d10[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d10[poison] damage and enfeebled 1 (1 round)\nStage 3 2d10 poison damage and Enfeebled 2 (1 round)"
        },
        {
          "id": "JJc1A4ggjxl0zB12",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  }
]
