import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_04_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bogwid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "UuAvrw7KUEjOM6uN",
      "slug": "bogwid",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c778fe8802b47169a644c7e0db641bd14a30c621c0ff9a7c9c3c8c34212b70ab",
    "translatableHash": "sha256:40e3b2349401f24bd03b37bf2d73333e2a699c6190d7d1affcab73d0f46155ce",
    "data": {
      "schemaVersion": 1,
      "name": "Bogwid",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "The abhorrent combination between a toad and an octopus, a bogwid drags its bloated green body through the swamps in search of a meal for the many larvae it carries on its back. Despite its absurd appearance and its pervasive scent, a bogwid is an ambush hunter. It will hide itself in sand, vegetation, or whatever happens to be around and wait patiently until a larger creature, such as a humanoid or a crocodile, approaches, before it attacks. A desperate bogwid may even attack a small group in search of food for both it and its young. Once it has a suitably large corpse, the larvae on its back will leap onto it and begin fighting each other for their one chance at survival. The remaining larva buries itself in the body and begins devouring it over the next couple of weeks. Afterward, a fully grown bogwid emerges from what is left of the rotting corpse. Within a week of its new life, the young bogwid too will begin asexually producing larvae on its back, repeating the cycle.\nBogwids earned their name due to their environment. They are almost exclusively found in bogs and swamps. Occasionally one might be found in a suitable warm environment closer to civilization, but they are too often hunted if they are seen near a town or settlement. Some have discovered that bogwids have an extremely negative reaction when introduced to the cold and will violently attack whatever they perceive to be the source.",
      "armorClass": 20,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 4,
        "int": -4,
        "wis": -2,
        "cha": 1
      },
      "skills": {
        "athletics": 13,
        "intimidation": 11,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "mIr5E0PJnahh7KLN",
          "name": "Tentacle",
          "bonus": 15,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "OaCA55JKpVAQqYIc",
          "name": "Larval Spit",
          "bonus": 14,
          "damage": "2d8 bleed",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "exg8Iba4z6oaCjn4",
          "name": "Revolting Aura",
          "kind": "passive",
          "description": "20 feet.\nA creature entering the aura or begins their turn in the aura must succeed at a check (fortitude, dc:20, options:area-effect,inflicts:sickened) save or become Sickened 1 (or Sickened 2 on a critical failure). A creature that succeeds is temporarily immune to the aura for 1 minute."
        },
        {
          "id": "66T3Q6Azf009sHhc",
          "name": "Bogwid Fever",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nOnset 1 day\nStage 1 Enfeebled 1 (1 day)\nStage 2 Enfeebled 2, and the DC to recover from persistent bleed is increased by 2 (1 day)\nStage 3 Enfeebled 3, and the DC to recover from persistent bleed is increased by 5 (1 day)\nStage 4 Enfeebled 4, the DC to recover from persistent bleed is increased by 5, and you take 1d8[bleed]{1d8 persistent bleed damage} every [[/gmr 1d4 #hours]]{1d4 hours} (1 day)\nEffect: Bogwid Fever"
        },
        {
          "id": "1a3FizXwR28wkECc",
          "name": "Ravenous Young",
          "kind": "passive",
          "description": "The larvae launched from the bogwid attach themselves to the target and begin to feed. Once a larva is attached, the target becomes Drained 1. While the larva remains attached, the target cannot recover from persistent bleed. To remove the larva, the target can attempt to [[/act escape dc=21]]. Additionally, any area damage dealt to the target destroys all attached larvae.\nEffect: Ravenous Young"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-moray-eel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WamGnH8v0QHz8NFr",
      "slug": "giant-moray-eel",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f988751ec4717313eae593f2c0ec39f518dc2336fb9f60e123b7f25872869ec4",
    "translatableHash": "sha256:2e3d60ebc2299829238bb09e0c66b6d15efdc531e621ae9cfd9b2d3ca92cdbb7",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Moray Eel",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Giant moray eels dwell in warm, tropical waters and build lairs in narrow, twisting caves made of coral. Their size, speed, and powerful bite make them dangerous to divers and fishers. Giant moray eels have rubbery hides that secrete a layer of mucus, making them difficult to harm with some weapons.\nAlthough these long, narrow fish share similarities in appearance, eels are a diverse group of creatures.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 10,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 13,
        "will": 9
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 13,
        "stealth": 13
      },
      "languages": [],
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
          "id": "QUcIjJglRfQBcSRB",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d6+8 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Pgjjt3dWPTpOGD8c",
          "name": "Ambush",
          "kind": "reaction",
          "description": "Trigger A target creature passes within 20 feet of the giant moray eel's hiding place and has not detected the giant moray eel\nEffect The giant moray eel lunges out of its hiding place, Swims directly toward the triggering creature, and makes a jaws Strike against it. The target creature is Off-Guard to this attack."
        },
        {
          "id": "sIfVG6GaZyAaZ3xW",
          "name": "Pharyngeal Jaws",
          "kind": "action",
          "description": "Requirements The giant moray eel has a creature Grabbed in its jaws\nEffect The giant moray eel uses its second set of jaws to pull the prey into its gullet. The eel deals (1d6+4)[piercing] damage to the grabbed creature and gains a +2 circumstance bonus to its Swallow Whole attempts and to the DC for the creature to Escape. This effect ends if the target Escapes or the giant moray eel Swallows it Whole."
        },
        {
          "id": "7pkevpR7Am9eNCD5",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Small, (1d6+6)[bludgeoning], Rupture 12"
        },
        {
          "id": "G9f4Fx5llYjESmPt",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:living-whirlwind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "XgGeD4fz5m7nQQlN",
      "slug": "living-whirlwind",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ca65dd39cc76c6add295ac206fc25db13f9492564dd6a5eee4f1c410d1c6ab71",
    "translatableHash": "sha256:ec7afd5a93319db0dad2cb4d38e9454b80da9049e22d8323e4fbd3081dd1ec65",
    "data": {
      "schemaVersion": 1,
      "name": "Living Whirlwind",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "A living whirlwind resembles a dust devil with a vague mouth and eyes formed among the dust and debris swirling within it.\nHailing from the Plane of Air, these beings appear in a variety of sizes and shapes. They're noted for being elusive, swift, and often difficult to detect due to being composed primarily of air.",
      "armorClass": 24,
      "hitPoints": 50,
      "speedFeet": 0,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 16,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": -2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 16,
        "stealth": 14
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
          "id": "el4yrHrtMr3LobtV",
          "name": "Gust",
          "bonus": 14,
          "damage": "2d6+7 bludgeoning",
          "traits": [
            "finesse",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "LDLJlCLplbi1fPsU",
          "name": "Disperse",
          "kind": "reaction",
          "description": "Trigger The living whirlwind takes damage from a hostile action;\nEffect The living whirlwind disperses. Until the end of the current turn, it can't be attacked or targeted, doesn't take up space, and its high winds aura is suppressed.\nAt the end of the turn, the living whirlwind reforms in any unoccupied space within 25 feet of where it dispersed, and its high winds are restored."
        },
        {
          "id": "h4JxMWrNuvhBlfaI",
          "name": "High Winds",
          "kind": "passive",
          "description": "20 feet.\nAir within the emanation is difficult terrain for Flying creatures that don't have the air trait."
        },
        {
          "id": "2UpzHQ985k9cDkOT",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The living whirlwind's movement doesn't trigger reactions."
        },
        {
          "id": "KBCiI9Z1MpSiac6f",
          "name": "Forceful Winds",
          "kind": "action",
          "description": "The living whirlwind creates a @Template[line|distance:60] of violent wind. Creatures in the area must succeed at a check (fortitude, dc:25) save or be pushed back 10 feet and knocked Prone."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lawbringer-warpriest",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "xTnBWwbZKbhCfHgJ",
      "slug": "lawbringer-warpriest",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d6daa2f0d5856e2eae767a64626d65dfc6d1fa477c89b4301a6659becca16cd4",
    "translatableHash": "sha256:5937f3efc20501fec45fe4e049aacc3e7bf9e98f63931f35ff4bf1fed6cf6040",
    "data": {
      "schemaVersion": 1,
      "name": "Lawbringer Warpriest",
      "level": 5,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "nephilim"
      ],
      "description": "Mortals whose ancestry has been influenced by archons are called lawbringers. They may have mortal ancestors who fought alongside archons against the forces of evil and entropy, or they may have been born from a union between an archon and a mortal. Many lawbringers seek adventure to bringing order to the world.\nMany immortals dwell upon the other planes of the Great Beyond. Some are benevolent and kind, like angels. Others are cruel and destructive, like demons. And some fit roles outside of morality, like psychopomps. It's far from unheard of for mortals and immortals alike to become entangled romantically, and the children of such engagements carry a supernatural element in their bloodlines for generations to follow. After the first generation, this otherworldly influence usually lies dormant, but now and then, the influence can manifest strongly in descendants many years later. These inheritors of extraplanar legacies are known collectively as planar scions.\nNephilim\nNephilim are planar scions with a connection to the planes of the Outer Sphere. Some are obviously tied to realms such as Heaven or Hell, while others are cryptic amalgams of metaphysical traits.",
      "armorClass": 23,
      "hitPoints": 64,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 8,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 11,
        "diplomacy": 11,
        "medicine": 10,
        "religion": 12,
        "society": 7
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
          "id": "Wt9iZcp4Ev6R9LEB",
          "name": "Greatsword",
          "bonus": 13,
          "damage": "1d12+7 slashing",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "i7ekQiw5lntgdpAT",
          "name": "Crossbow",
          "bonus": 11,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ITkyellSfoRYxVGk",
          "name": "Responsive Recovery",
          "kind": "reaction",
          "description": "Trigger One of the lawbringer's allies is reduced to 0 Hit Points\nRequirements The lawbringer has a heal spell prepared\nEffect Before the ally falls Unconscious or dies, the lawbringer Strides toward them and casts a 2-action Heal spell targeting the ally. The ally remains standing."
        },
        {
          "id": "eOj1lBtBYURSS36K",
          "name": "Channel Smite",
          "kind": "action",
          "description": "Requirements The lawbringer has a Heal or Harm spell prepared\nEffect The lawbringer makes a melee Strike and expends a harm or heal spell. On a hit, they cast the 1-action version of the spell to damage the target. The target automatically gets a failure on its save (or a critical failure if the lawbringer's Strike was a critical hit). The spell doesn't have the manipulate trait when cast this way."
        }
      ],
      "spellcasting": [
        {
          "id": "zpzVthq8QUGhDFIL",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "XKjERc7Jq2JKymEL",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "DcWpnn74sEA1J2uB",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "pgtcZTN0lQCT7rou",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "nx6lpHv8DmIfOR0p",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "JiPPSH2Fu6UMEI3U",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "vqoczKJ7TQm9eKjM",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "O120PM6XD4OgTK2r",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "ePKpEN8tLGwKUbDl",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "FqBKc5uaJDZVD9sw",
              "name": "Enlarge",
              "rank": 2
            },
            {
              "id": "0dAvMHPFsgGTvUds",
              "name": "Blindness",
              "rank": 3
            },
            {
              "id": "0YFk1PeSppnTXAgu",
              "name": "Haste",
              "rank": 3
            }
          ]
        },
        {
          "id": "twAXCnyazvqJJHaZ",
          "name": "Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "zexrybHpN8khghrF",
              "name": "Athletic Rush",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:poltergeist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "zpd6b6UPP72ZELCj",
      "slug": "poltergeist",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3cf01c91cdecbdcc0d60e411b7f00ea1ce9c8058828d61d4b3c24f1fd304cae4",
    "translatableHash": "sha256:49b5079c32c922b1c6f3ee190c4593550ef8b3d95f6c30eb369319816e8c6df4",
    "data": {
      "schemaVersion": 1,
      "name": "Poltergeist",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "spirit",
        "undead",
        "unholy"
      ],
      "description": "When a creature dies, and for whatever reason its spirit is unable or unwilling to leave the site of its death, that spirit may manifest as a poltergeist: a restless, invisible spirit that is still able to manipulate physical objects. Many poltergeists perished in a way that resulted from or led to extreme emotional trauma.",
      "armorClass": 22,
      "hitPoints": 55,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": -5,
        "dex": 5,
        "con": 0,
        "int": -1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 14,
        "intimidation": 15,
        "stealth": 14
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
          "precision",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "all-damage 5 except force, ghost-touch, vitality, spirit"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "AuhMdlvvBkXqKNG8",
          "name": "Telekinetic Object",
          "bonus": 13,
          "damage": "2d12 untyped",
          "traits": [
            "magical",
            "occult"
          ]
        }
      ],
      "actions": [
        {
          "id": "Yi4K7PbKaZWlXxWj",
          "name": "Site Bound",
          "kind": "passive",
          "description": "A poltergeist is tied to a location and can't travel more than 120 feet from the place where it was created or formed. Some poltergeists are instead bound to a specific room, building, or similar area"
        },
        {
          "id": "smEk0yh1Pe95Nvsc",
          "name": "Natural Invisibility",
          "kind": "passive",
          "description": "A poltergeist is naturally Invisible. It becomes visible only when it uses Frighten."
        },
        {
          "id": "pvdHMw62l3uanob8",
          "name": "Rejuvenation",
          "kind": "passive",
          "description": "When a poltergeist is destroyed, it reforms, fully healed, where it was destroyed after [[/br 2d4 #Rejuvenation]]{2d4 days}. A poltergeist can be permanently destroyed only if someone determines the reason for its existence and sets right whatever prevents the spirit from resting."
        },
        {
          "id": "KZ4sC23Z3r4PS4V6",
          "name": "Telekinetic Defense",
          "kind": "reaction",
          "description": "Trigger A creature approaches within 10 feet of the poltergeist\nEffect The poltergeist makes a telekinetic object Strike against the triggering creature."
        },
        {
          "id": "sfMHUPWP5MmQUH7W",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "v8X1W0LmbkWRpOS6",
          "name": "Frighten",
          "kind": "action",
          "description": "Requirements The poltergeist must be Invisible\nEffect The poltergeist becomes visible, appearing as a skeletal, ghostlike humanoid. Each creature within 30 feet must attempt a check (will, dc:21) save, becoming Frightened 2 on a failure. On a critical failure, it's also Fleeing for as long as it's frightened. On a success, the creature is temporarily immune for 1 minute.\nAt the start of its next turn, the poltergeist becomes invisible again."
        },
        {
          "id": "RJlLjrzqdXREWyPR",
          "name": "Telekinetic Storm",
          "kind": "action",
          "description": "The poltergeist telekinetically throws numerous small objects, such as dozens of pieces of silverware or books, either spreading them out among multiple foes or directing them at one target.\n• When this effect is spread out among multiple foes, the poltergeist makes a telekinetic object Strike at a -2 penalty against each creature within @Template[emanation|distance:30]{30 feet}. These count as one attack for the poltergeist's multiple attack penalty, and the penalty doesn't increase until after all the attacks.\n• When this effect has only one target, the poltergeist makes a telekinetic object Strike against the target, and the damage increases to 3d12. It deals 1d12[untyped] damage on a failure, and no damage on a critical failure."
        }
      ],
      "spellcasting": [
        {
          "id": "6ptXWWAwrafuOZ7Z",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 23,
          "spells": [
            {
              "id": "jwxU9gWWpjWenmI5",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "zvfQTClGtdN6QkMr",
              "name": "Telekinetic Maneuver (At Will)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:awakened-tree",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "0Dsy2I3mu86Czjm0",
      "slug": "awakened-tree",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:67d06934e93acbce7b70036387d276014ca698f549e46dd98cc510affab2f900",
    "translatableHash": "sha256:3369a4c6f48cd92d8f6b6e009c68420724914e2dda7c208a4dad2406b2dbceb2",
    "data": {
      "schemaVersion": 1,
      "name": "Awakened Tree",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "plant",
        "wood"
      ],
      "description": "Arboreal regents and other wielders of powerful primal magic grant temporary sentience to trees in order to protect the forest. Invested with a workable set of instincts and the ability to mobilize and attack, these awakened trees follow the commands of their master and fight to protect their home. The statistics below work just as well for foliage that has become animate via other methods, such as a mystical influence from another dimension, a capricious fey spirit, or the like.\nArboreals are guardians of the forest and representatives of the trees. As long-lived as the woods they watch over, arboreals consider themselves parents and shepherds of trees rather than their gardeners. Consequently, while arboreals tend to be slow and methodical, they are terrifyingly swift when forced to fight in defense of the woods. Though they rarely seek out the companionship of short-lived folk—even elves are fugacious in the eyes of arboreals—and have an inherent distrust of change, arboreals have been known to tolerate those who seek to learn from their long-winded, rambling monologues, especially if such pupils also express a desire to protect the timberlands. Against those who threaten their realm, such as loggers eager to harvest lumber or settlers aiming to establish croplands or a town, arboreals' wrath is unwavering and devastating. Perhaps ironically, arboreals are gifted at tearing down what others build—a trait that serves vengeful members of their kind well.",
      "armorClass": 22,
      "hitPoints": 100,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 9,
        "will": 13
      },
      "abilities": {
        "str": 6,
        "dex": -1,
        "con": 6,
        "int": -5,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 14,
        "stealth": 9
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
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "VwuUYBwpcwv3BGFP",
          "name": "Branch",
          "bonus": 16,
          "damage": "2d8+6 bludgeoning",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "pqbk6QDDIpUVuKRX",
          "name": "Root",
          "bonus": 16,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "trip"
          ]
        }
      ],
      "actions": [],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sargassum-heap",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2A7jnl9tpmeTBkQy",
      "slug": "sargassum-heap",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bda7556e190b85f2fa617964168e37138127f08bc6724169eab0d751d513088a",
    "translatableHash": "sha256:bb249f8daee6af5e22bfa8006224172eb88e3bb80f3a2d72b7585bdd9542125a",
    "data": {
      "schemaVersion": 1,
      "name": "Sargassum Heap",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "plant"
      ],
      "description": "A sargassum heap is a mass of semi-intelligent seaweed that floats through the ocean, luring in its victims with hallucinogenic spores. Those affected by the spores are drawn towards the heap, envisioning their heart's desire. This might be a lost loved one, a child in need of help, an enchanting mermaid, the promise of dry land, and so on. Once their prey is close enough, the sargassum heap lashes out with its seaweed tendrils and crushes it to death.",
      "armorClass": 14,
      "hitPoints": 180,
      "speedFeet": 10,
      "perception": {
        "modifier": 10,
        "senses": [
          "wavesense-60"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 5,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 17,
        "stealth": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision",
          "unconscious"
        ],
        "resistances": [
          "cold 5"
        ],
        "weaknesses": [
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "fGIqoufVhknWWQSm",
          "name": "Tendril",
          "bonus": 17,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "tFHbDvewCsRDa8hf",
          "name": "Wavesense (Precise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pCbQWvnnKijSXzRs",
          "name": "Mirage Spores",
          "kind": "passive",
          "description": "120 feet.\nThe sargassum heap constantly produces a field of hallucinogenic spores that causes those affected to see the monster as whatever they desire most. Each creature within the emanation must succeed a check (will, dc:22) save or become Fascinated with the sargassum heap and compelled to move toward it on the creature's turn. Creatures fascinated this way are also Off-Guard. If the sargassum heap attacks, the fascinated condition ends only for the creature that is attacked. On a successful save, a creature is temporarily immune to mirage spores for 24 hours."
        },
        {
          "id": "ZbgwZKFvI1wyjUPu",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d8+3)[bludgeoning], check (fortitude, dc:23, basic)"
        },
        {
          "id": "8YXIMyLcdqA8Hn2d",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-tarantula",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "4ISm82EYQeOndynw",
      "slug": "giant-tarantula",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f30bbd611815a259a1b9ad80ce8a5e4af2a415f371e2e29d4fadec869a2d9222",
    "translatableHash": "sha256:10a2e710331be974756dda2632b0aa68b5ca0011d99ae8cac6486e5f6ea1cc0d",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Tarantula",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Tarantulas are ambush predators, but will attack prey in the open.\nFew everyday vermin inspire as much dread as the infamous spider.",
      "armorClass": 21,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 13,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 5,
        "int": -5,
        "wis": 2,
        "cha": -4
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 16,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "MxiNEcQrKuXmCuWD",
          "name": "Fangs",
          "bonus": 17,
          "damage": "2d8+8 piercing",
          "traits": []
        },
        {
          "id": "28PBBJfMs67GTIf3",
          "name": "Leg",
          "bonus": 17,
          "damage": "1d12+8 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "pzO0JwhFqVcRKzAN",
          "name": "Giant Tarantula Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:23)\nMaximum Duration 8 rounds\nStage 1 1d10[poison] damage (1 round)\nStage 2 1d12[poison] damage, Clumsy 1, and Off-Guard (1 round)\nStage 3 2d6[poison] damage, Clumsy 2, and off-guard (1 round)\nStage 4 2d6 poison damage and Paralyzed (1 round)"
        },
        {
          "id": "xGPdcgIZR0tAI9IY",
          "name": "Hair Barrage",
          "kind": "action",
          "description": "The tarantula flicks its legs, flinging spiky hairs in a @Template[cone|distance:15]. This deals 4d6[piercing|options:area-damage] damage with a check (reflex, dc:25, basic, options:area-effect) save."
        },
        {
          "id": "lLwtc5h1JK4M6Nzi",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:wyvern",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5iqkL9Me5164H7NY",
      "slug": "wyvern",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:700f6c046788134208cbb600aa9509a48a9c32876e68863eca7a88421416138a",
    "translatableHash": "sha256:159e1eaef2694692d01614f93529438d2142d9033a4c140cc12bc097c65b5b0a",
    "data": {
      "schemaVersion": 1,
      "name": "Wyvern",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon"
      ],
      "description": "A wyvern is a venomous drake with a well-earned reputation for impatience and aggression. As much as 15 feet long and weighing up to 1,000 pounds, a wyvern's resilient body allows them to crash talons-first into large prey without serious risk to themself. A wyvern uses their momentum to stun their target before injecting it with searing venom or carrying it over the side of a nearby cliff. Because a wyvern lacks the strength to haul their prey all the way to their nest intact, they're far more likely to lift and drop their victim over a gully or canyon and let gravity do its work before they descend to pick apart the carcass.\nConversation is of little interest to a wyvern, as the creature typically speaks only to taunt their prey, issue territorial claims, or demand tribute. Even so, many wyverns enjoy grim humor and tales of violent acts, particularly if those acts were committed by the storyteller. A wyvern properly appeased with meat, entertainment, and treasure sometimes agrees to provide assistance ranging from giving directions to serving as a mount for a powerful humanoid. However, these arrangements rarely last more than a few weeks before the wyvern's pride, malice, or insolence inspires them to flee or even betray their allies. Only the truly cruel can cow a wyvern into servitude for an extended period, as most wyverns are so self-interested that they go out of their way to avoid helping others.\nRavenous, bestial, and driven by instinct, drakes are draconic monsters who bear a fraction of the terrifying might of the primal dragons they share evolutionary roots with. While they're weaker, slower, and less inclined toward reason than dragons, drakes are nonetheless a menace to creatures and settlements around them. Their propensity for forming raiding parties—small social groups fittingly called \"rampages\"—makes them all the more dangerous; a single rampage of river drakes can quickly lay waste to a waterside village, and roving rampages of desert drakes are a plague to caravan traders.\nDrakes share a number of physical characteristics that unite them as one species despite their wide variety of habitats and abilities. For example, drakes lack forearms, leaving them with their formidable jaws and thickscaled tails to use in close combat. Most drakes would rather avoid this, however, preferring to use their magical breath to wreak havoc in wide swaths from comfortable distances while flying overhead. Finally, all drakes have small reservoirs of their ancestral draconic power that they can tap into to perform incredible feats of speed.\nDifferent species of drakes rarely come into conflict. Part of this is their distinct habitats, but drakes are open to negotiating simple agreements between rampages. This courtesy does not extend to dragonets, which drakes happily take as prey. Solitary tamed drakes are also excluded from such agreements and considered free game if their tamer isn't strong enough to protect them.\nDrake Eggs\nWhile drake hides aren't any more valuable than those of similarly sized creatures, drake eggs are prized commodities. They are used as components in powerful spells as well as eaten by various cultures, but the most common use for drake eggs is hatching and rearing drakes to serve as mounts and guardians.\nA typical drake lays a clutch of 2d4 eggs every 5 years. Eggs hatch within 3 to 6 weeks, during which time they must be kept in conditions appropriate to their natural environment, perhaps the most difficult aspect of drake husbandry. While it is generally easy for breeders to incubate the eggs of desert or jungle drakes (which require mildly warm temperatures to hatch) or river drakes (which must be submerged in running water), the eggs of flame and frost drakes require extreme temperatures in order to hatch, which can be difficult to replicate safely.\nA drake egg is an object with Hardness 3, 5 HP, and no Broken Threshold. The coloration of drake eggs varies only slightly from one species to the next. A creature must succeed at a check (nature, dc:20) check, or a relevant DC 20 Lore check, to identify the drake species of a specific egg.\nOnce a drake hatches, they imprint on the first creature that they see. A creature imprinted on in this way can use Nature to Train and Command that drake. The market price of a drake egg varies depending on the type of drake and the exact legal situation. Because drakes are dangerous and intelligent creatures, many societies do not condone the trade of drake eggs and criminalize those who engage in it.\nIt takes 2 years for a drake hatchling to grow to full size. A well-trained drake can make a fearsome mount or guardian, but many careless would-be drake trainers are devoured by their charges.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 13
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 15,
        "stealth": 12
      },
      "languages": [
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
          "id": "s5DYWIxSytUTy1x2",
          "name": "Fangs",
          "bonus": 17,
          "damage": "2d12+5 piercing",
          "traits": []
        },
        {
          "id": "Ptn3Zb1Syk7YdL4y",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d8+5 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "SPTwJf1wzeADk4sn",
          "name": "Stinger",
          "bonus": 15,
          "damage": "2d6+5 piercing",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "s6mBK13aH38nfCAp",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "R8f6nx9jMnFB03qP",
          "name": "Savage",
          "kind": "reaction",
          "description": "Trigger A creature Grabbed or Restrained by the wyvern critically fails a skill check to Escape\nEffect The wyvern makes a stinger Strike against the triggering creature."
        },
        {
          "id": "kq0boAEZsA01NsEH",
          "name": "Powerful Dive",
          "kind": "action",
          "description": "The wyvern Flies up to their fly Speed and must both move forward at least 20 feet and descend at least 10 feet. If they end the movement within melee reach of at least one enemy their size or smaller, they can make a claw Strike against that enemy. If the claw hits, as a free action, the wyvern can either automatically Grab the target or knock it Prone."
        },
        {
          "id": "2ECIwvcXVQ6w8vi5",
          "name": "Punishing Momentum",
          "kind": "action",
          "description": "Requirements The wyvern Grabbed a creature this turn using Powerful Dive\nEffect The wyvern can Fly at half Speed while holding the creature in their claws, carrying that creature along with them and dropping it at the end of their movement. Alternatively, the wyvern can Strike the creature with their stinger with a +2 circumstance bonus."
        },
        {
          "id": "Mj7eIolH2KmKRos4",
          "name": "Wyvern Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22)\nMaximum Duration 6 rounds\nStage 1 2d6[poison] damage (1 round)\nStage 2 3d6[poison] damage (1 round)\nStage 3 4d6[poison] damage (1 round)"
        },
        {
          "id": "o1Dh44Cl7px3KGea",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:smilodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "6EgJNAJss45TQqpa",
      "slug": "smilodon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:14321c6836f58c6fa5127c3d17a6f8d4c8344eeae460d3af07b80c50e7b51e25",
    "translatableHash": "sha256:2f5607588503dbe28cb64b091abeea9af1727c6c728dbe8a7b4b5bf964063f1e",
    "data": {
      "schemaVersion": 1,
      "name": "Smilodon",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Smilodons are large saber-toothed cats, apex predators that are significantly more muscular and broader than the other species of big cats. They often kill prey with a quick stab to the throat or other vulnerable spot. The smilodon's oversized fangs are particularly sought after as trophies.\nFew predators of the natural world can match the cat's talent for stalking and stealth. Large cats can be found in almost any environment, usually keeping their distance from settlements. When civilization encroaches onto a big cat's hunting grounds, the animals are often driven to making desperate attacks against unwary travelers.",
      "armorClass": 23,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 16,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hook1XGZNlxXtjvJ",
          "name": "Fangs",
          "bonus": 16,
          "damage": "2d10+6 piercing",
          "traits": []
        },
        {
          "id": "nbVDArIMsO5ljcOd",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d8+6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ONo2JspAa1GnoAlR",
          "name": "Pierce Armor",
          "kind": "action",
          "description": "The smilodon makes a fangs Strike against a creature that's Grabbed or Restrained.\nIf the attack hits, the creature is knocked Prone; if the creature is wearing armor with hardness 10 or lower, the armor is Broken.\nIf this Strike breaks a creature's armor or damages a creature who is unarmored or wearing broken armor, the creature also takes 2d6[bleed]. This Strike doesn't further damage armor that's already broken."
        },
        {
          "id": "QtiX9tEriHb92lTU",
          "name": "Pounce",
          "kind": "action",
          "description": "The smilodon Strides and makes a Strike at the end of that movement. If the smilodon began this action Hidden, it remains hidden until after this ability's Strike."
        },
        {
          "id": "WBvBXluaSwwxLaJ4",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The smilodon deals 1d6 extra precision damage to creatures that are Off-Guard."
        },
        {
          "id": "6ORqPbdQEDKtPs55",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:choral",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9SNpsnwlzZjH4DQf",
      "slug": "choral",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a2f1b2d43cab8bbe104d748b76cdf609d2292c452fd0c29d258a535f347356c2",
    "translatableHash": "sha256:114757eca8ec9ff8d61a8bc0699214d20594987cb31e8bee721eeb1a7983cbfe",
    "data": {
      "schemaVersion": 1,
      "name": "Choral",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "angel",
        "celestial",
        "holy"
      ],
      "description": "Choral angels are incredible singers who fill the halls of Nirvana with pious chants and sacred hymns. Most form from the souls of talented bards and other performers, though anyone who takes superlative joy in music might ascend to their ranks. Though their duties are typically to spread peace and joy through their music, their holy incantations also brim with mystic purpose, their songs bolstering angelic wards and strengthening the very fabric of the celestial planes themselves.\nWhile choral angels shy away from conflict, they will brave the mortal realm to deliver good omens and auspicious messages. Choral angels often serve the goddess Shelyn, but they can also serve other good deities and empyreal lords.\nThe celestial hosts of angels are messengers and warriors, divided into choirs based on their abilities and purviews. Angels were one of the first creations of the gods, and many still assist their righteous creators throughout the cosmos. Most angels in modern times are not direct creations of the divine, however, instead consisting of ascended mortal souls drawn from the celestial planes.\nThe majority of unaffiliated angels live in Nirvana, the plane of virtue and enlightenment. Angels who are affiliated with deities dwell in those deities' domains or other areas where that god holds influence. Regardless of residence or service, angels remain benevolent messengers possessed with magical auras to aid their allies.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 16
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 12,
        "diplomacy": 15,
        "performance": 17,
        "religion": 14
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "sonic 5"
        ],
        "weaknesses": [
          "unholy 5"
        ]
      },
      "attacks": [
        {
          "id": "LfFpWQJ2gEIy0oiZ",
          "name": "Fist",
          "bonus": 14,
          "damage": "2d6+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "holy",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "fegp7nmVFKZeTSA5",
          "name": "Piercing Hymn",
          "bonus": 17,
          "damage": "4d6 sonic",
          "traits": [
            "holy",
            "magical",
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "jHMa3BEv2PfjTB2d",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "rtbwOcOPVCHoeTWz",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "eFUBcFVqZ2zpFt8W",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "8cJQY3xEuodUaxz6",
          "name": "Harmonizing Aura",
          "kind": "passive",
          "description": "20 feet.\nAllies in the aura gain a +2 status bonus to sonic damage rolls and a +1 status bonus to AC and all saves against effects with the auditory or sonic trait. Enemies in the aura take a –2 status penalty to sonic damage rolls and a –1 status penalty to AC and all saves against sonic and auditory effects."
        },
        {
          "id": "09tr8RqXPJwNExtR",
          "name": "Deafening Aria",
          "kind": "passive",
          "description": "On a critical hit with piercing hymn, the target is Deafened for one minute."
        },
        {
          "id": "kpuj3LrmPskjllD8",
          "name": "Harmonize",
          "kind": "action",
          "description": "The choral angel lends their harmony to a choral angel ally within their harmonizing aura.\nThe ally can, on their next turn, expend their 3rd-rank Noise Blast to instead cast Calm, Heroism, or 4th-rank noise blast.\nIf the ally is benefiting from 5 or more chorals' Harmonize actions, they can instead choose Divine Decree."
        }
      ],
      "spellcasting": [
        {
          "id": "mj8uCZ5iH2m6ZQXF",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "XFR7l2CTQXGBp5D1",
              "name": "Counter Performance (At Will)",
              "rank": 1
            },
            {
              "id": "r8LujUFkxLRB6emz",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "3LvRDRcpBKsijueR",
              "name": "Uplifting Overture",
              "rank": 1
            },
            {
              "id": "MVjgUWTNAKH8RZrY",
              "name": "Invisibility (At Will) (Self Only)",
              "rank": 2
            },
            {
              "id": "dYZSCcbxcmGEfPdC",
              "name": "Noise Blast (At Will)",
              "rank": 2
            },
            {
              "id": "qiU6wSlx0cvr2SnE",
              "name": "Cleanse Affliction",
              "rank": 3
            },
            {
              "id": "iXIb76K7ZsaYUorA",
              "name": "Clear Mind (At Will)",
              "rank": 3
            },
            {
              "id": "T5pJtpdkElkUimci",
              "name": "Heal",
              "rank": 3
            },
            {
              "id": "UF1xjy8thLLeAFU7",
              "name": "Noise Blast",
              "rank": 3
            },
            {
              "id": "vWIFbh2Je9EY0c6H",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:jungle-drake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "aYDbWuOj66nve8r4",
      "slug": "jungle-drake",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:aca0aa01fa0fba440f7491b6c781f4a4b627031db161e78c00e96c3928aa543a",
    "translatableHash": "sha256:9847d318d1e37ccdeee051f135595e3ea8aa17c6c4507967df3c0763b283584a",
    "data": {
      "schemaVersion": 1,
      "name": "Jungle Drake",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "wood"
      ],
      "description": "Believed to be related to horned dragons, jungle drakes are dangerous hunters equipped with a debilitating venom delivered by a large barbed stinger or their noxious phlegm. Their wings are equipped with vestigial claws that allow them to deftly maneuver through thick jungle foliage both in flight and on foot. Jungle drakes prefer to ambush their prey using hit-and-run tactics, picking off the weakest members of a group and dragging their victims off to finish their meals as they please. Rampages of jungle drakes will often drag prey in many directions to divide pursuit.\nRavenous, bestial, and driven by instinct, drakes are draconic monsters who bear a fraction of the terrifying might of the primal dragons they share evolutionary roots with. While they're weaker, slower, and less inclined toward reason than dragons, drakes are nonetheless a menace to creatures and settlements around them. Their propensity for forming raiding parties—small social groups fittingly called \"rampages\"—makes them all the more dangerous; a single rampage of river drakes can quickly lay waste to a waterside village, and roving rampages of desert drakes are a plague to caravan traders.\nDrakes share a number of physical characteristics that unite them as one species despite their wide variety of habitats and abilities. For example, drakes lack forearms, leaving them with their formidable jaws and thickscaled tails to use in close combat. Most drakes would rather avoid this, however, preferring to use their magical breath to wreak havoc in wide swaths from comfortable distances while flying overhead. Finally, all drakes have small reservoirs of their ancestral draconic power that they can tap into to perform incredible feats of speed.\nDifferent species of drakes rarely come into conflict. Part of this is their distinct habitats, but drakes are open to negotiating simple agreements between rampages. This courtesy does not extend to dragonets, which drakes happily take as prey. Solitary tamed drakes are also excluded from such agreements and considered free game if their tamer isn't strong enough to protect them.\nDrake Eggs\nWhile drake hides aren't any more valuable than those of similarly sized creatures, drake eggs are prized commodities. They are used as components in powerful spells as well as eaten by various cultures, but the most common use for drake eggs is hatching and rearing drakes to serve as mounts and guardians.\nA typical drake lays a clutch of 2d4 eggs every 5 years. Eggs hatch within 3 to 6 weeks, during which time they must be kept in conditions appropriate to their natural environment, perhaps the most difficult aspect of drake husbandry. While it is generally easy for breeders to incubate the eggs of desert or jungle drakes (which require mildly warm temperatures to hatch) or river drakes (which must be submerged in running water), the eggs of flame and frost drakes require extreme temperatures in order to hatch, which can be difficult to replicate safely.\nA drake egg is an object with Hardness 3, 5 HP, and no Broken Threshold. The coloration of drake eggs varies only slightly from one species to the next. A creature must succeed at a check (nature, dc:20) check, or a relevant DC 20 Lore check, to identify the drake species of a specific egg.\nOnce a drake hatches, they imprint on the first creature that they see. A creature imprinted on in this way can use Nature to Train and Command that drake. The market price of a drake egg varies depending on the type of drake and the exact legal situation. Because drakes are dangerous and intelligent creatures, many societies do not condone the trade of drake eggs and criminalize those who engage in it.\nIt takes 2 years for a drake hatchling to grow to full size. A well-trained drake can make a fearsome mount or guardian, but many careless would-be drake trainers are devoured by their charges.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 13,
        "stealth": 13,
        "survival": 11
      },
      "languages": [
        "draconic"
      ],
      "defenses": {
        "immunities": [
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
          "id": "NiysQhQQKa7jp0YE",
          "name": "Fangs",
          "bonus": 17,
          "damage": "2d10+7 piercing",
          "traits": []
        },
        {
          "id": "qrxSbCbHPvFU1sVs",
          "name": "Stinger",
          "bonus": 17,
          "damage": "2d6+7 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "esaeLxI8stHVxilE",
          "name": "Twisting Tail",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the jungle drake's stinger uses a move action or leaves a square during a move action it's using.\nEffect The jungle drake Strikes the target with its stinger. If it hits, the jungle drake disrupts the creature's action."
        },
        {
          "id": "rw75XVfj9XlY7JGq",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The jungle drake makes one Fangs Strike and two Stinger Strikes in any order."
        },
        {
          "id": "kiLj66ryWPKBgZKh",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The jungle drake ignores difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even plants manipulated by magic don't impede their progress."
        },
        {
          "id": "WQqo16zlXzVAyGHX",
          "name": "Jungle Drake Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:24)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 1d6[poison] damage and Enfeebled 2 (1 round)"
        },
        {
          "id": "kvbp3xXviiIXnVhS",
          "name": "Predatory Grab",
          "kind": "action",
          "description": "As Grab, but the jungle drake's Grab doesn't end if they move away. Instead, they carry the Grabbed creature with them. A jungle drake can't Fly while grabbing a creature unless that creature can also Fly."
        },
        {
          "id": "LDExFIGLfarrbJQa",
          "name": "Speed Surge",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The jungle drake Strides or Flies twice."
        },
        {
          "id": "4tkIBY4fl80WZyr6",
          "name": "Spit Venom",
          "kind": "action",
          "description": "A jungle drake can spit a sticky glob of their venom to a range of 50 feet that explodes in a @Template[burst|distance:10]. Those in the burst must succeed at a check (reflex, dc:24) save or be exposed to jungle drake venom.\nThe jungle drake can't use Spit Venom again for [[/gmr 1d6 #Recharge Spit Venom]]{1d6 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:cave-bear",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "AZIG0COCaDBronJa",
      "slug": "cave-bear",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:22b28c98ad76e9c7d96e949b352ffe0f23179c37f6d2fc2199f759c6717bd149",
    "translatableHash": "sha256:4b9d35142cda6c9aaee3eca76c3789d3b629393ae9559fb609acd8efc4af214f",
    "data": {
      "schemaVersion": 1,
      "name": "Cave Bear",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Larger, stronger, and far more aggressive than its smaller cousins, the cave bear is a behemoth that avoids civilized lands, preferring to dwell in remote places. As its name might suggest, the cave bear makes its den in natural caves, and like the grizzly bear, it is fiercely territorial. Unlike a grizzly bear, however, a cave bear is short tempered and will make sure its foe is dead before moving on, usually feasting on its prey's soft flesh once it has been incapacitated. Cave bears are often regarded as powerful guardian spirits by remotedwelling people, though they are also utilized as beasts of war by orcs or even giants. Stone giants in particular have an affinity for keeping trained cave bears as pets or guardians for their homes.\nBears are ferocious predators typically found in cold or temperate woodlands and hills. Many species of bear exist in addition to the two presented below, such as the smaller black bear or the arctic-dwelling polar bear.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 35,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 6,
        "int": -4,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "athletics": 16,
        "survival": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "PLLmu0Mc4VizpZYv",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d10+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "woTn67ogkZRQUfvH",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d8+6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "deLQWsbCp3jKrpIv",
          "name": "Mauler",
          "kind": "passive",
          "description": "The bear gains a +4 circumstance bonus to damage rolls against creatures it has Grabbed."
        },
        {
          "id": "X9lnoAMRNp4d62Iu",
          "name": "Rush",
          "kind": "action",
          "description": "The cave bear Strides and makes a Strike at the end of that movement. During the Stride, it gains a +10-foot circumstance bonus to its Speed."
        },
        {
          "id": "FSk7wzzH1ToTF3ie",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hydra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Bkr0soTDhQq1qjWx",
      "slug": "hydra",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:505ac8760e8a4a7901113a753686ed258e368fdabecb461657be28ef2f680278",
    "translatableHash": "sha256:8388c3124b784e5b250cf0dab42fbedf5a5b3d686f0a05164706231c8ec7ed82",
    "data": {
      "schemaVersion": 1,
      "name": "Hydra",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "Hydras are multiheaded, foul-tempered serpentine beasts with voracious appetites, widely feared for their regeneration abilities.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 5,
        "int": -3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 17,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hJ1mAKCkNvCy1GY0",
          "name": "Fangs",
          "bonus": 16,
          "damage": "2d6+7 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "qOhxTyF0N56kRCTR",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "a70MJXZ0VXENP2vX",
          "name": "Hydra Regeneration",
          "kind": "passive",
          "description": "The hydra has regeneration equal to 3 x the number of heads it has. If a hydra's body is missing any heads and the remaining stumps have not been cauterized, the hydra attempts a check (fortitude, immutable:true, dc:25) save after it regains Hit Points from regeneration. On a success, one uncauterized stump regrows two heads; on a critical success, two uncauterized stumps regrow into two heads each. The hydra can never grow more than double the number of heads it ordinarily has. The hydra's regeneration only fully deactivates if all its heads are severed and all stumps are cauterized, at which point it dies."
        },
        {
          "id": "m2aEAnMnepSKN57G",
          "name": "Head Regrowth",
          "kind": "passive",
          "description": "A hydra ordinarily has five heads. A creature can attempt to sever one of the hydra's heads by specifically targeting it and dealing damage equal to the head's Hit Points. A head that is not completely severed returns to full Hit Points at the end of any creature's turn.\nA hydra can regrow a severed head using hydra regeneration. A creature can prevent this regrowth by dealing acid or fire damage to the stump, cauterizing it. Single-target acid or fire effects need to be targeted at a specific stump, but effects that deal splash damage or affect areas covering the hydra's whole space cauterize all stumps if they deal acid or fire damage. If the attack that severs a head deals any acid or fire damage, the stump is cauterized instantly. If all five heads are cauterized, the hydra dies.\nHydra Head\n• Hit Points 15\n• Immunities Area Damage\n• Weaknesses Slashing 5\nEffect: Hydra Heads"
        },
        {
          "id": "pSKjTPdO8e9KO9LI",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A hydra gains an extra reaction per round for each of its heads beyond the first, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the hydra must use a different head for each Reactive Strike it makes. Whenever one of the hydra's heads is severed, the hydra loses 1 of its extra reactions per round."
        },
        {
          "id": "sJ3e2yeLEF8Nt8Nt",
          "name": "Reactive Strike (See Reactive Heads)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "FGm1xbUPgE0BRiSf",
          "name": "Focused Assault",
          "kind": "action",
          "description": "The hydra attacks a single target with its heads, overwhelming its foe with multiple attacks and leaving almost nowhere to dodge. The hydra Strikes with its fangs. On a successful attack, the hydra deals damage from its fangs Strike to the target, plus an additional 1d6 damage for every head it has beyond the first. On a failure (but not a critical failure), the hydra deals the damage from one fangs Strike to the target creature. This Strike counts as a number of attacks equal to the number of heads the hydra has toward the hydra's multiple attack penalty."
        },
        {
          "id": "0L6qwj5JpEiwbnph",
          "name": "Storm of Jaws",
          "kind": "action",
          "description": "The hydra makes a number of Strikes up to its number of heads, each against a different target. These attacks count toward the hydra's multiple attack penalty, but the multiple attack penalty doesn't increase until after the hydra makes all its attacks."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:revenant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bsrQp0pLgvjJr6mC",
      "slug": "revenant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f04534bf4aa484d7f89c59a55b109a355106baffcf5b97f6d325a50169985286",
    "translatableHash": "sha256:6407423e407fa780855a0eabf3150436b8971f9953087ede0d7269ada9a12452",
    "data": {
      "schemaVersion": 1,
      "name": "Revenant",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "undead"
      ],
      "description": "Revenants are obsessed, undead stalkers who arise from their own murders and are driven by only one thing: revenge against their killers. The common wisdom is that revenants arise only from individuals who have been utterly betrayed or abandoned to die a grueling death, but even then, such victims might not rise from their graves. In other cases, revenants might even rise from what might legitimately be considered an accident if the revenant doesn't understand the full circumstances of their demise. In such cases, it doesn't matter that the \"murderer\" may not have intended to kill, for revenants understands no pity and can never forgive. Revenants have little memory of their lives other than anything they might need to recall in order to achieve their goal of vengeance.",
      "armorClass": 23,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 13,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 14
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
        "resistances": [
          "physical 5 except slashing"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "h10snW2DCZ2hS7fP",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d8+5 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "NJS22AHrPTckdEPS",
          "name": "Sense Murderer",
          "kind": "passive",
          "description": "A revenant knows the direction of their murderer (as long as both are on the same plane), but not the distance."
        },
        {
          "id": "Hn5PgfCFMwbKdN20",
          "name": "Self-Loathing",
          "kind": "passive",
          "description": "If a revenant sees their own reflection or any object that was important to them in life, they must attempt a check (will, dc:25) save.\nCritical Success The revenant is unaffected and can no longer be affected by that reflection or object in this way.\nSuccess The revenant is distracted by self-loathing and becomes Slowed 1 for 1 round.\nFailure The revenant becomes Fascinated by the source that triggered their self-loathing and does everything they can to destroy it until the end of the revenant's next turn.\nCritical Failure The revenant becomes Immobilized as long as the source of their self-loathing is apparent, until they're attacked, or until they see their murderer."
        },
        {
          "id": "nPZlZs1rfnERketf",
          "name": "Undying Vendetta",
          "kind": "passive",
          "description": "If the revenant's murderer dies, the revenant is immediately destroyed. A revenant that can't sense their murderer must attempt a check (flat, dc:11) check once every 24 hours to avoid becoming Immobilized and Prone; they immediately rise again once they can sense their murderer. A murderer who becomes undead does not trigger the revenant's destruction until the murderer is finally destroyed. The revenant gains a +2 status bonus to checks and DCs against their murderer."
        },
        {
          "id": "BsWqKRfyrcDU8ksf",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "azVkPps7BUkHzups",
          "name": "Baleful Shriek",
          "kind": "action",
          "description": "The revenant wails horribly. Each creature within a @Template[burst|distance:60] must attempt a check (will, dc:23) save. Regardless of the outcome of their saving throw, affected creatures are then immune to Baleful Shriek for 1 hour. The revenant's murderer never improves their degree of success due to this ability's incapacitation trait.\nThe revenant can't use Baleful Shriek again for [[/gmr 1d4 #Recharge Baleful Shriek]]{1d4 rounds}.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 2.\nFailure The creature is frightened 2 and Paralyzed for 1 round.\nCritical Failure The creature is Frightened 3 and paralyzed for [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        {
          "id": "uekYQ2OOlHBFFZEA",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d6+5)[bludgeoning], check (fortitude, dc:24, basic)"
        },
        {
          "id": "MPbG99HGshwvN1vm",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ankylosaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CYt04IKRQeiC9Ly9",
      "slug": "ankylosaurus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:550bb91829d0382786ac9d78a9ff1b1385cb135aab2b07c2d4e34f7cdf12ec03",
    "translatableHash": "sha256:ebc2ce73b083be8893c403cf851da758b181915be108b1fa49997a901181e2af",
    "data": {
      "schemaVersion": 1,
      "name": "Ankylosaurus",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Squat, heavily armored quadrupeds, ankylosauruses are stubborn and irascible. Although they're herbivores, ankylosauruses have been known to attack trespassers simply out of ill temper.\nAnkylosauruses have few natural predators, as their bony hides are covered in spiked nubs that jut in many different directions to discourage larger creatures from biting them. An ankylosaurus is about 30 feet long, 10 feet tall at the shoulder, and weighs over 3 tons.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 26,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 10,
        "will": 12
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 17
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "inK7m9JBf4286NW2",
          "name": "Tail",
          "bonus": 17,
          "damage": "2d8+7 bludgeoning",
          "traits": [
            "backswing",
            "reach-15"
          ]
        },
        {
          "id": "BlUA1CHpOuotxrV7",
          "name": "Foot",
          "bonus": 17,
          "damage": "2d6+7 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "hbr6Uqs0GRk0t1JI",
          "name": "Punishing Tail",
          "kind": "passive",
          "description": "A creature struck by the ankylosaurus's tail must attempt a check (fortitude, dc:24) save.\nOn a failure, it's Stunned 1; on a critical failure, it's Stunned 3."
        },
        {
          "id": "qZG63nOxzyyLxiMs",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, foot, check (reflex, dc:24, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zombie-hulk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "EDYKUdYmilw3rgJg",
      "slug": "zombie-hulk",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:61a736eac475601e4768ceaa0f413e02e6183d408321179ef7e6f9f0f322893e",
    "translatableHash": "sha256:3346d9b1599bd1eddc6c729ea04fd9d4cc3a6491ff4eb51669a0949c2e9d2ef5",
    "data": {
      "schemaVersion": 1,
      "name": "Zombie Hulk",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "mindless",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "These towering horrors rise from monstrous, gigantic corpses.\nA zombie's only desire is to consume the living. Unthinking and ever-shambling harbingers of death, zombies stop only when they're destroyed.",
      "armorClass": 21,
      "hitPoints": 160,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 7,
        "dex": -1,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -2
      },
      "skills": {
        "athletics": 18
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
          "id": "u0GbWrE4hwJyEA08",
          "name": "Hunk Of Meat",
          "bonus": 17,
          "damage": "2d10+9 bludgeoning",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "qGnxEwt7F2yY8OvT",
          "name": "Corpse",
          "bonus": 17,
          "damage": "2d6+9 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "TBlBPLZKvFBHjjgU",
          "name": "Slow",
          "kind": "passive",
          "description": "A zombie is permanently slowed 1 and can't use reactions."
        },
        {
          "id": "27wudVSiScZejHwt",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "iTAZj4rMOPRWWJDP",
          "name": "Corpse Throwing",
          "kind": "passive",
          "description": "A zombie hulk can throw Medium or smaller corpses at foes. They can also throw Medium or smaller zombies for this purpose, who take just as much damage as the target they hit. A zombie that survives being thrown falls Prone."
        },
        {
          "id": "DTXq4teaiLU9haNE",
          "name": "Wide Swing",
          "kind": "action",
          "description": "The zombie hulk makes two hunk of meat Strikes against different targets within its reach."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:wraith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Gu0cJHGwPd547OtC",
      "slug": "wraith",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f2e73beb1a35516fa64ea91cdc0c3592bc1a4978b1e805f1ed492a674446a095",
    "translatableHash": "sha256:b83359729790309e6ce84d5f9bb55946a811b70bb8bf20de0b884f09fbee0054",
    "data": {
      "schemaVersion": 1,
      "name": "Wraith",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "undead",
        "unholy",
        "wraith"
      ],
      "description": "Wraiths are malevolent undead who drain life and shun light. Their shadowy forms are covered by insubstantial robes that they wear like a badge of office and marked with peering eyes that reflect their judgment of the living. A wraith can be created by foul magic or direct exposure to the Void, but more often they are the result of death on a tragic scale. When a tragedy is too great for even reality to witness, a temporary manifestation of the Void can leave behind countless wraiths in a horde of darkness. A wraith's existence is one of emptiness and need, with a desire to call others to the same emptiness exemplified by the Void.\nWraiths can haunt any location where they can safely interact with the living, looking for those worthy to become new wraiths and disposing of the rest, though their vulnerability to sunlight confines them to the shadowy places of the world—places where they can blend in seamlessly with their dark surroundings before silently engulfing their prey. Wraiths' opinions on who is worthy vary, but they typically choose those closest to the Void already, whether from a metaphysical connection or exposure to countless deaths. A new wraith created this way carries these aspects, with the rest of their personality warped or scoured away by exposure to the Void.\nWraiths gather with others of their kind in places where death and mayhem are commonplace—countrysides ravaged by war, metropolitan underworlds run by criminal overlords, or sites of fiendish rituals. In these places, the living do well to keep to the light. Wraiths are smart enough to take advantage of their incorporeality in combat, so they keep to tortuous caverns or structures with hallways, and avoid open areas.",
      "armorClass": 24,
      "hitPoints": 80,
      "speedFeet": 0,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 14
      },
      "abilities": {
        "str": -5,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 12,
        "diplomacy": 13,
        "intimidation": 15,
        "stealth": 16
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
          "precision",
          "unconscious",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lYeYZZa66BG9v3KY",
          "name": "Wraith Touch",
          "bonus": 17,
          "damage": "3d8 void",
          "traits": [
            "agile",
            "divine",
            "finesse",
            "void"
          ]
        }
      ],
      "actions": [
        {
          "id": "XXiHxjwFvBeHoJUK",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6tSYdMbuSY1NSMOt",
          "name": "Sunlight Powerlessness",
          "kind": "passive",
          "description": "While in sunlight, a wraith is Blinded and Slowed 2."
        },
        {
          "id": "cRpfBVlR934upDge",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "c8oIWV04qJhdiZ0C",
          "name": "Grip of Fear",
          "kind": "action",
          "description": "The wraith reaches into an adjacent creature's chest, gripping their heart. The target takes 6d6[mental] damage with a check (will, dc:24, basic) save. On a critical failure, the creature is also Paralyzed until the start of the wraith's next turn."
        },
        {
          "id": "ZcnrTHwnr0hYa74P",
          "name": "Robes of Welcome",
          "kind": "action",
          "description": "Frequency once per round\nEffect The wraith wraps its robes around an adjacent living creature, exposing it to void's embrace. If any creature is cursed by the wraith's void's embrace, the wraith can't impose void's embrace on another creature."
        },
        {
          "id": "UHqRmL7WFwTZuFam",
          "name": "Void's Embrace",
          "kind": "passive",
          "description": "If the victim succeeds at a saving throw against this curse while in sunlight, the curse ends. While you have this curse, you bypass the resistance of the wraith that cursed you.\nSaving Throw check (will, dc:24)\nStage 1 the victim is Dazzled in any light (1 hour)\nStage 2 the victim gains lifesense 30 feet but is Blinded in any light (1 hour)\nStage 3 as stage 2, but the creature also has Void Healing (1 hour)\nStage 4 the victim becomes Unconscious and can't awaken (1 day)\nStage 5 the creature dies and becomes a wraith, its body crumbling to ash"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:manticore-scorpion-tail",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "k89Kw65a4Ip2ZSGA",
      "slug": "manticore-scorpion-tail",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:00379099039a5e2fbe14379781722a1d45d0cdc3d39fb012f44a8681be00f19f",
    "translatableHash": "sha256:890ddc077c2d441a4e02c374522edb4c663b51fb0a030ccacaafcf69e39cc218",
    "data": {
      "schemaVersion": 1,
      "name": "Manticore (Scorpion Tail)",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "A manticore is a monstrous amalgamation of lion, dragon, and human with a penchant for feasting on human flesh. Its distinctive tail is festooned with large quills like those of a porcupine, which the manticore flings at prey by whipping its tail like a sling. These deadly spikes give the manticore the power to slaughter even well-armed warriors from the safety of the sky.\nAlthough the anthropomorphic face of the manticore suggests a keen intellect, most creatures of its kind are single-minded killers. They can be clever liars, however, and their voices have a strangely musical sound that has lured many unwitting travelers into an ambush. A manticore discovered by uneducated or spiteful humanoids can sometimes become the center of adoration and even worship. A manticore in this situation swiftly gives in to its laziness and allows its acolytes to bring it tribute in the form of food and treasure, feasting upon its own followers when offerings become scarce. Stronger humanoids who encounter a manticore can cow it through intimidation and violence, sometimes even forcing it into service as a mount. As long as the manticore is well fed with human flesh and its master leads it to victory, a manticore mount can prove surprisingly loyal.\nA manticore enjoys taking plunder from the corpses of its prey as trophies that flatter its vanity and testify to its strength. It has little interest in money, but sometimes accepts gold and jewels as tribute. Because manticores prefer lonely places in the wilderness far from humanoids, they remain content to enjoy their spoils alone rather than show them off to visitors.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -2,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 15,
        "intimidation": 11,
        "survival": 12
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
          "id": "jHv2A4kh5nyPGSxF",
          "name": "Jaws",
          "bonus": 17,
          "damage": "2d8+8 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "WzNNAcPz7ibjxcS8",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "SndM1V5FDCAciHzN",
          "name": "Stinger",
          "bonus": 17,
          "damage": "1d8+8 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZBtCPkUsbHV2Q27J",
          "name": "Manticore Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22)\nMaximum Duration 6 rounds\nStage 1 1d10[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d10[poison] damage and enfeebled 1 (1 round)\nStage 3 2d10[poison] damage and Enfeebled 2 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:will-o-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "KgJq51AeYrENo3Db",
      "slug": "will-o-wisp",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c686574cb3442e46ec72fb17fe71e8fe652eb77c27807297c6535f9e347630f4",
    "translatableHash": "sha256:41903a1c2e018c196591f6b31ec88e54063957b0541eb4905419abe328f9748d",
    "data": {
      "schemaVersion": 1,
      "name": "Will-o'-Wisp",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "air"
      ],
      "description": "Malevolent balls of colored light, will-o'-wisps haunt lonely marshes and forests, where they lure unsuspecting travelers into danger. Will-o'-wisps can vary the color and illumination they shed, and delight in mimicking bobbing lanterns or distant fires to draw lost or disoriented travelers off of safe trails. They can extinguish their illumination entirely to become Invisible, and they enjoy doing so once their victims are wholly lost and have realized that the bobbing light in the distance isn't, in fact, leading them to safety. Even invisible, however, a will-o'-wisp rarely ventures far from its target, as it feasts upon the panic and dread felt by its victims.\nBeneath its glow, a will-o'-wisp's body is a spongy ball approximately 1 foot in diameter and weighing less than 5 pounds. Although most will-o'-wisps are merely translucent, featureless orbs, gaining definition only in the shifting illumination they create, a few have dark mottling that makes them resemble a skull when viewed closely. Will-o'-wisps have no need for mundane nourishment, and in fact, lack the ability to consume matter of any kind; they find all the sustenance they need in the terror of nearby creatures. For this reason, they like to work alongside undead that produce terror in their victims. Will-o'-wisps are long-lived, if not effectively immortal, and they have good memories. A cowed or defeated will-o'-wisp can be a good source of lore and information, though acquiring such cooperation from such a sinister monster is no easy feat.\nWill-o'-wisps inhabit desolate swamps and forests and are generally active at twilight and after dark. They are therefore reluctant to lead victims into immediately fatal areas such as deadfalls, but instead prefer hazards where their victims suffer over a long time, such as pockets of stale or poisonous air, patches of quicksand, and dens of bigger monsters. According to will-o'-wisps, different types of fear have subtle differences in flavor. The lurking dread in the pit of the stomach that gnaws at those who slowly become aware of the fact that they're lost produces a much different taste than the sudden, stark terror of imminent death in the face of a towering monster. Because of this, will-o'-wisps try to vary the ways in which they induce terror in their prey, to ensure they don't tire of certain flavors of fear.",
      "armorClass": 27,
      "hitPoints": 50,
      "speedFeet": 0,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": -5,
        "dex": 6,
        "con": 0,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 18,
        "deception": 12,
        "intimidation": 12,
        "stealth": 16
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2rAKighB6Ywhk5s3",
          "name": "Shock",
          "bonus": 17,
          "damage": "2d8+4 electricity",
          "traits": [
            "electricity",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "wChn2PEw9GYziq2n",
          "name": "Glow",
          "kind": "passive",
          "description": "20 feet.\nA will-o'-wisp is itself naturally invisible, but glows with a colored light, casting bright light in the aura and making it visible."
        },
        {
          "id": "3Eksrmh390T4SrP7",
          "name": "Magic Immunity",
          "kind": "passive",
          "description": "A will-o'-wisp is immune to all spells except Force Barrage, Quandary, and Revealing Light."
        },
        {
          "id": "F8xpT7h5a5ZviXU5",
          "name": "Feed on Fear",
          "kind": "action",
          "description": "Frequency once per round\nRequirements An enemy within 15 feet is under a fear effect or Dying\nEffect The will-o'-wisp feeds on the creature's terror. It regains 2d4[healing] Hit Points, and if it has Gone Dark, its glow reignites."
        },
        {
          "id": "USCoVo5LJNs12zB4",
          "name": "Go Dark",
          "kind": "action",
          "description": "The will-o'-wisp extinguishes its glow, becoming Invisible. It can end this effect with another use of this action. If it uses its shock attack while invisible, the arc of electricity lets any observer determine its location, making the will-o'-wisp only Hidden to all observers until it moves."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:iron-hag",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "lfUUnFazGLAtqRsP",
      "slug": "iron-hag",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52c9c88ac18f3f660f4d78a550f6ca20dbccec65bb2928ecc653e1fbb5ecf643",
    "translatableHash": "sha256:5d44edf29b5986166c3b1d1d66446357016cf51cae873a07ab3cd039c58fbb4e",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Hag",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "hag",
        "humanoid"
      ],
      "description": "Iron hags are kidnappers, targeting those too young to even remember to fight back. They most often snatch babies from their cradles, though they sometimes target fearful children or youths who suffer from anxiety. They then imprison their new wards in towers or enchanted dungeons, terrifying their victims with stories of the outside world to discourage them from even trying to escape. If these methods fail to be effective, iron hags become more straightforward in their methods of imprisonment, insisting it's for their captives' own good.\nAn iron hag's true form has unnaturally long arms. True to their name, they have teeth made of iron, as well as long iron toenails and claws.\nHags are malevolent predators who use magic and manipulation to lure children and young adults into their clutches. Though their true forms are eldritch and horrifying, hags spend much of their lives disguised as ordinary women. They seek out targets who are unhappy, innocent, or otherwise vulnerable, preying on their weaknesses before snatching them up. The typical hag is abusive, controlling, and narcissistic. Though less malicious hags possibly exist, they rarely reveal their true forms, making them nearly impossible to find.",
      "armorClass": 24,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 14
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
        "acrobatics": 12,
        "athletics": 14,
        "deception": 13,
        "diplomacy": 11,
        "intimidation": 13,
        "stealth": 16
      },
      "languages": [
        "aklo",
        "common",
        "jotun"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 3 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "RoXgi9s2uTlVyDiq",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d8+6 slashing",
          "traits": [
            "agile",
            "cold-iron",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "r3be0JK93VuISORj",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d6+6 piercing",
          "traits": [
            "cold-iron",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "51uNm4VZXCCKduJt",
          "name": "Coven",
          "kind": "passive",
          "description": "An iron hag adds Earthbind, Impaling Spike, and Spellwrack to their coven's spells. Their spell DC when leading a coven is 24."
        },
        {
          "id": "S4fkYk7Id7nDaDF3",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "MpWqSRwt012KZnGl",
          "name": "Bonds of Iron",
          "kind": "action",
          "description": "Frequency once per day\nEffect The hag causes a cage built of cold iron fingernails to spring out of nothingness around one creature within 30 feet, attempting an Athletics check to [[/act grapple]] against the target's Fortitude DC; if the target has a weakness to cold iron, the iron hag gains a +2 circumstance bonus to this check.\nOn a success, the creature is Grabbed by the magical fingernails (or Restrained on a critical success). If the creature successfully [[/act escape dc=24]]{Escapes}, the cage crumbles into rust.\nAny creature can attempt to destroy the cage by attacking it. It has an AC of 19, Hardness 10, and 40 Hit Points."
        },
        {
          "id": "2xwKWCTraWTbO2QT",
          "name": "Change Shape",
          "kind": "action",
          "description": "The iron hag can take on the appearance of any Medium female humanoid. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "y5dVpyMy5aFYReOk",
          "name": "Embrace of Iron",
          "kind": "action",
          "description": "Requirements A creature is Grabbed or Restrained by the iron hag's claw\nEffect The hag's nails tear into their captured victim, dealing 2d8[piercing|traits:cold-iron] damage (the nails are cold iron). Then the hag can attempt to Reposition the creature. If the creature is adjacent to the hag, they can then attempt a jaws Strike against it."
        },
        {
          "id": "3ps9jwhU6IKTI1lp",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "WOtXGBdiDdwdPd7H",
          "name": "Coven Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "i1Qg8gaDpNrF740s",
              "name": "Augury",
              "rank": 5
            },
            {
              "id": "79MqOnorpxm48Hu9",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "jkiJzx3jOfNeXHhk",
              "name": "Clairaudience",
              "rank": 5
            },
            {
              "id": "5E8iqHSeg1Dkft7Y",
              "name": "Clairvoyance",
              "rank": 5
            },
            {
              "id": "bAOa72murTUDqFB2",
              "name": "Dream Message",
              "rank": 5
            },
            {
              "id": "rbVhmFLXoGgu2nQV",
              "name": "Earthbind",
              "rank": 5
            },
            {
              "id": "e2FGk7zNWUCrNE5U",
              "name": "Illusory Disguise",
              "rank": 5
            },
            {
              "id": "U0HhyQPaLOoMYHF0",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "GIuFoIGw9SCRtPGe",
              "name": "Impaling Spike",
              "rank": 5
            },
            {
              "id": "PQKgwO6o7Vgn37Za",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "M0FNLk1UFEeLz3Zl",
              "name": "Talking Corpse",
              "rank": 5
            },
            {
              "id": "teOkj0V1x5xhgdBb",
              "name": "Spellwrack",
              "rank": 6
            },
            {
              "id": "1KkSb6qGV75q4a3J",
              "name": "Cursed Metamorphosis",
              "rank": 8
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:woolly-rhinoceros",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "loYbh3SealeYmxai",
      "slug": "woolly-rhinoceros",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c318789e304766bcf1caed4cf6cf86c739a9b6c099944ef2a5d32ae7a3d6c3c5",
    "translatableHash": "sha256:fbbdff304f8d9057f280d278c4fba5702a3b5768da064daa8e002f292fd74ce6",
    "data": {
      "schemaVersion": 1,
      "name": "Woolly Rhinoceros",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Even bulkier than their non-woolly cousins, these rhinoceroses have a shaggy pelt of long, thick fur and a huge, crescent-shaped horn. Woolly rhinos inhabit areas of arid tundra and cold steppes, spending much of their day grazing for sustenance.\nThis hefty animal is easily recognizable by the distinctive upward-thrusting horn on its snout. Rhinoceroses are herbivorous and, in spite of their hulking size, can run at considerable speed. While rhinos have good hearing and a keen sense of smell, their eyesight is relatively poor.",
      "armorClass": 25,
      "hitPoints": 100,
      "speedFeet": 35,
      "perception": {
        "modifier": 11,
        "senses": [
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 5,
        "int": -4,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 16,
        "survival": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "HWKLKpUPvbnvqEcp",
          "name": "Horn",
          "bonus": 16,
          "damage": "2d12+6 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "chTQW4y1K5vGGjVn",
          "name": "Foot",
          "bonus": 16,
          "damage": "2d8+6 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "V5T3AbuMZAg9AjCZ",
          "name": "+2 Status to All Saves vs. Cold",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ivy8kuAr2Ml8VdAF",
          "name": "Cold Adaptation",
          "kind": "passive",
          "description": "The woolly rhinoceros treats environmental cold effects as if they were one step less extreme."
        },
        {
          "id": "HQTX3r7nEv9YINQh",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "vCEb36Sv06OtmLaz",
          "name": "Rhinoceros Charge",
          "kind": "action",
          "description": "The woolly rhinoceros Strides twice, then makes a horn Strike. As long as the woolly rhinoceros moved at least 20 feet, the Strike's damage increases to (3d12+6)[piercing] damage. A Medium or smaller creature struck by this attack must succeed at a check (reflex, dc:24) save or be automatically Shoved back 5 feet and knocked Prone by the force of the blow."
        },
        {
          "id": "vorcYiRkw5YIs0Qy",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, foot, check (reflex, dc:21, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:aapoph-granitescale",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "MXSKccQqbQqQ77Ii",
      "slug": "aapoph-granitescale",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2075f0dfbb749ee8d40104952fcfe3341b2ce84394ce8b515bb8c9535f52632a",
    "translatableHash": "sha256:c18b74100bb7fbcdc8b85131b4a83e7b58dcce7eb1ccb2498a3072ab79cac827",
    "data": {
      "schemaVersion": 1,
      "name": "Aapoph Granitescale",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "mutant",
        "serpentfolk"
      ],
      "description": "The mutated aapophs dubbed granitescales have bulky frames covered in hard gray plates. These scales offer protection but shed when struck with too much force. Granitescales like to carve their shed scales into small chips and attach them as rattles to their spears.\nMany an unsuspecting victim has heard the hiss of a granitescale's rattle too late.\nBefore their ancient clash with humanity devastated their civilization, serpentfolk were masters of a sprawling underground empire. Their power was shattered and their god Ydersius decapitated (although not quite slain). The cunning, intelligence, and magical abilities of serpentfolk have diminished from their ancient heights, and most are born without these boons. This is partially the result of cruel genetic meddling among serpentfolk—though the ruling class, zyss, are born with an innate spellcasting ability, their blood runs thin, making them susceptible to wounds. Seen as the failures of the serpentfolk's experiments are the aapophs, who are strong but prone to mutation and lack innate spellcasting.\nToday, the central realm of the Darklands retains the old name of the serpentfolk empire that once dominated this region—Sekamina. This name is also the source of the serpentfolk's Aklo title, sekmin, which they are often called in ancient texts. Serpentfolk dominion had declined before ghouls, gugs, umbral gnomes, and other forces. Yet their recent ventures have brought them back to a stronger place in the Darklands. Many serpentfolk sleeping in torpor in secluded vaults have awakened.\nZyss serpentfolk tend toward megalomania, with dreams of returning to their place of dominance. Many of their plans hinge on resurrecting Ydersius, their decapitated god. His headless body still thrashes about, mindless, in the Darklands, waiting to be reunited with his lost skull. Serpentfolk numbers are so small that reclaiming their dominance seems a distant dream, especially since their reproduction is slow. Though a parent can birth a dozen young at once, the gestation period lasts up to a decade, and the likelihood that even one will be zyss is low. There's no telling whether a child will be zyss or aapoph, regardless of parentage. A coveted zyss child is just as likely to arise from aapoph parents as from two zyss, and every serpentfolk colony has someone in charge of sorting the young, identifying the earliest signs of magic in them.",
      "armorClass": 24,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 4,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 15,
        "intimidation": 15
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
          "id": "wtg60qyerpiu10b6",
          "name": "Longspear",
          "bonus": 17,
          "damage": "1d8+11 piercing",
          "traits": [
            "reach"
          ]
        },
        {
          "id": "lzofcehgylqe2gbw",
          "name": "Fangs",
          "bonus": 17,
          "damage": "1d8+11 piercing",
          "traits": []
        },
        {
          "id": "m19xwfdc1h3pgjq9",
          "name": "Javelin",
          "bonus": 16,
          "damage": "1d6+11 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "ZfCAuBCYMMiJPlw6",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "JXrZ0SJ83IHG2pOC",
          "name": "+2 Status to Will Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6hviophykqthjby5",
          "name": "Chipping Scales",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The granitescale is about to take piercing or slashing damage\nEffect The granitescale twists to take the blow on their hardest scales, which they shed to reduce the incoming force. The granitescale gains resistance 15 to the damage, but their AC is reduced by 2 for 1 day, when the shed scales regrow."
        },
        {
          "id": "wBdDLlQRxV4GsQnt",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "rhepats7ajh5230c",
          "name": "Rattling Spear",
          "kind": "action",
          "description": "Requirements The granitescale's last action was a successful longspear Strike\nEffect The granitescale rattles the base of their spear, attempting an Intimidation check to Demoralize all enemies within 30 feet (compare the check result to the targets' Will DCs individually)."
        },
        {
          "id": "8cz8x6blr9b9fc9a",
          "name": "Serpentfolk Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22, basic)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d4[poison] damage and enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sedacthy-speaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "NAKHn3jzuaZTerir",
      "slug": "sedacthy-speaker",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:aedfe8f0b089f486e9aaa75ef3e1f9fd5d3292393bb2ecd92cfb38a0a82360f3",
    "translatableHash": "sha256:30a152a0ff21d6553aff48510c4845ee19a69f30fc01de34c31ac12cf23c9594",
    "data": {
      "schemaVersion": 1,
      "name": "Sedacthy Speaker",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "humanoid",
        "sedacthy"
      ],
      "description": "High-ranking sedacthies are expected to both plan campaigns and wade into battle. These speakers achieve their rank by accumulating several large servants or a single massive creature like a megalodon.\nSedacthies are amphibious, fish-like humanoids who lurk in Golarion's oceans and are known for leading their animal servants ashore to devour air breathers. When an entire fishing village disappears overnight, sedacthies are the first suspects. Sedacthies pride themselves as natural leaders, with ambition limited only by their strict adherence to hierarchy. A sedacthy's station is determined by the strength of the animal servants they press into service, and the mettle they prove during hunts and in battles against outsiders.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "athletics": 16,
        "crafting": 14,
        "diplomacy": 13,
        "intimidation": 15,
        "nature": 15
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
          "id": "XHfvFP7lVEq3yg4v",
          "name": "Claw",
          "bonus": 16,
          "damage": "1d6+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "HkR8xZZIpeW3b4vm",
          "name": "Jaws",
          "bonus": 16,
          "damage": "1d4 bleed; 1d6+8 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "2qHaS9yXdzCCFoFJ",
          "name": "Trident",
          "bonus": 17,
          "damage": "1d8+10 piercing",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "uIEP65rsETPj3GX3",
          "name": "Trident",
          "bonus": 14,
          "damage": "1d8+8 piercing",
          "traits": [
            "magical",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "PFfgCTnWRutUzMOD",
          "name": "Sea Speech",
          "kind": "passive",
          "description": "A sedacthy speaking Thalassic can be understood by any animal that has a swim Speed or the amphibious or aquatic trait. By spending a week regularly interacting with such an animal, the sedacthy can make it permanently helpful."
        },
        {
          "id": "Fdy6HLhgD096Hzgr",
          "name": "Wavesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7WqmKOuf1bKUnKdR",
          "name": "Speaker's Privilege",
          "kind": "reaction",
          "description": "Trigger The sedacthy speaker takes damage\nRequirements The sedacthy speaker has cover from an animal ally\nEffect The animal takes the damage instead."
        },
        {
          "id": "hHrQ4WSEOgLDG3sS",
          "name": "Animal Shield",
          "kind": "action",
          "description": "Requirements The sedacthy speaker is adjacent to a Large or larger animal ally\nEffect The speaker gains cover until the start of their next turn or when they're no longer adjacent to the animal, whichever comes first."
        },
        {
          "id": "ibcHqcbH6AzTkqNw",
          "name": "Exploit Weakness",
          "kind": "passive",
          "description": "The speaker's Strikes deal 1d6 additional damage to creatures that are Frightened or Sickened."
        },
        {
          "id": "ATKHBM0qbxjbsWcu",
          "name": "Painful Cry",
          "kind": "action",
          "description": "The sedacthy shrieks across a range of painfully high tones, dealing 3d6[sonic,1d6[mental]|options:area-damage]{3d6 sonic damage and 1d6 mental damage} to all creatures in a @Template[cone|distance:30], with a check (fortitude, dc:23, basic, options:area-effect) save. A creature that fails its save is Sickened 1."
        },
        {
          "id": "hULMhVeHFZ1ioUV5",
          "name": "Shared Feast",
          "kind": "action",
          "description": "The sedacthy makes a jaws Strike. If it hits, an ally of their choice can spend a reaction to make a jaws Strike against the same target. Allies with beaks or similar attacks can use those instead of jaws."
        },
        {
          "id": "CMagHoZtQFJXiBkG",
          "name": "Swim Together",
          "kind": "action",
          "description": "Requirements The speaker is adjacent to an animal ally\nEffect The speaker and the animal both Swim, ending their movement adjacent to one another."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:vampire-count",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "pPQyoQHTxrE2U7px",
      "slug": "vampire-count",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:db6cde056f12e19043283148989354767f470ffeec4b77bbe024a2e6c1a54a74",
    "translatableHash": "sha256:ec076dd124d3980f9ae6f445762bf7fff53fba714e1c2eeb23c9fecbbe2a07e1",
    "data": {
      "schemaVersion": 1,
      "name": "Vampire Count",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy",
        "vampire"
      ],
      "description": "Vampire counts rule their demesnes and subjects through a mix of fear and cruelty.\nVampires are undead creatures that feed on the blood of the living.",
      "armorClass": 24,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 13,
        "deception": 14,
        "diplomacy": 14,
        "intimidation": 16,
        "society": 14,
        "stealth": 13
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
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "bgkXxmVMntPQOmND",
          "name": "Rapier",
          "bonus": 17,
          "damage": "1d6+11 piercing",
          "traits": [
            "deadly-d8",
            "disarm"
          ]
        },
        {
          "id": "ziSz2omKZDCD4A0e",
          "name": "Claw",
          "bonus": 17,
          "damage": "1d8+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "TjOmyfilNvHKI58M",
          "name": "Children of the Night",
          "kind": "passive",
          "description": "The vampire's presence brings forth creatures of the night to do the master's bidding. These typically include Rat Swarms, Bat Swarms, and Wolves, but can include other creatures.\nThe vampire can give telepathic orders to these creatures as long as they are within 100 feet, but they can't communicate back."
        },
        {
          "id": "KeTrwbKWih6HyuoM",
          "name": "Fast Healing 7",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gRQ32Y4BWrQbWOlS",
          "name": "Coffin Restoration",
          "kind": "passive",
          "description": "Unlike other undead, a vampire isn't destroyed at 0 HP. Instead, it falls Unconscious. If its body rests in its coffin for 1 hour, the vampire gains 1 HP, after which its fast healing begins to function normally."
        },
        {
          "id": "iuyYNQtDMprDDoZH",
          "name": "Mist Escape",
          "kind": "passive",
          "description": "Trigger The vampire is reduced to 0 HP.\nEffect The vampire uses Turn to Mist. They can take move actions to move toward its coffin even though it's at 0 HP. While at 0 HP in this form, the vampire is unaffected by further damage.\nThey automatically returns to its corporeal form, unconscious, if they reaches their coffin or after 2 hours, whichever comes first."
        },
        {
          "id": "OgOkCo3ZpgcUbZr1",
          "name": "Vampire Vulnerabilities",
          "kind": "passive",
          "description": "All vampires possess the following vulnerabilities.\n• Compulsions Vampires are creatures with strange and unknowable compulsions. A typical vampire can't voluntarily cross running water unless they're transported while they hide within their coffin, nor can they enter a private dwelling unless invited in by someone with the authority to do so. At your discretion, vampires might have different compulsions—a pirate vampire might not be able to set foot on solid ground without being invited, for example. The vampire can still be forced to do these things and might be able to overcome their compulsion just as they do their revulsion.\n• Revulsion A vampire can't voluntarily come within 10 feet of brandished garlic or a brandished religious symbol of a deity with a holy sanctification option. To brandish garlic or a religious symbol, a creature must Interact to do so, and it remains brandished for 1 round (similar to Raising a Shield). If the vampire involuntarily comes within 10 feet of an object of their revulsion, they gain the Fleeing condition, running from the object of their revulsion until they end an action beyond 10 feet. After 1 round of being exposed to the subject of their revulsion, a vampire can attempt a check (will, dc:25) save as a single action, which has the concentrate trait. On a success, they overcome their revulsions for [[/gmr 1d6 #rounds]]{1d6 rounds} (or 1 hour on a critical success).\n• Stake A wooden stake driven through a vampire's heart drops the vampire to 0 HP and prevents them from healing above 0 HP, even in their coffin. Staking a vampire requires 3 actions and works only if the vampire is Unconscious. If the stake is removed, the vampire can heal above 0 HP again, and if they're in their coffin, the 1-hour rest period begins once the stake is removed. If the vampire's head is severed and anointed with holy water while the stake is in place, the vampire is destroyed.\n• Sunlight If exposed to direct sunlight, a vampire immediately becomes Slowed 1. The slowed value increases by 1 each time the vampire ends their turn in sunlight, and the condition ends when they're no longer in sunlight. If the vampire loses all their actions in this way, they're destroyed. Due to their supernatural aversion to light, vampires don't cast shadows or show a reflection in mirrors"
        },
        {
          "id": "0w3FhoNrrNel3ZcH",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QpzMidSalFaHGivw",
          "name": "Change Shape",
          "kind": "action",
          "description": "The vampire transforms into one of its animal forms or back into its normal form. Most vampires can turn into a bat, but some can turn into a different creature, such as a rat or a wolf.\n• Giant Bat\n• Senses echolocation 40 feet,\n• Speed 20 feet, fly 30 feet,\n• Melee fangs +15 Damage 1d8+9 piercing"
        },
        {
          "id": "jnZDE6piOq3rzmdg",
          "name": "Create Servitor",
          "kind": "passive",
          "description": "If a creature dies after being reduced to 0 HP by Drink Blood, the vampire can turn this victim into a vampire servitor by donating some of their own blood to the victim and burying the victim in earth for 3 nights.\nA vampiric servitor is compelled to obey its creator, but if a vampire controls too many vampiric servitors at once (as determined by the GM), or if the servitor is a higher level than the vampire that created it, strongwilled servitors can free themselves by succeeding at a check (will, defense:will) saving throw against the vampire's Will DC."
        },
        {
          "id": "AWS8p85NHI3IGL2n",
          "name": "Dominate",
          "kind": "action",
          "description": "The vampire can cast Dominate at will as a divine innate spell. Casting it requires staring into the target's eyes, giving the spell the visual trait (check (will, dc:22)). The save DC uses the high spell DC of the vampire's level, and a creature that succeeds is temporarily immune to that vampire's Dominate for 24 hours.\nFully destroying the vampire ends the domination, but merely reducing the vampire to 0 HP is insufficient to break the spell."
        },
        {
          "id": "KESgZ7EFPclSlLY8",
          "name": "Drink Blood",
          "kind": "action",
          "description": "Requirement A Grabbed, Paralyzed, Restrained, Unconscious, or willing creature is within the vampire's reach.\nEffect The vampire sinks its fangs into that creature to drink its blood. This requires an check (athletics, defense:fortitude) check against the victim's Fortitude DC if the victim is grabbed and is automatic for any of the other conditions.\nThe victim is Drained 2 and the vampire regains 10[healing]{10 HP}, gaining any excess HP as temporary Hit Points. Drinking Blood from a creature that's already drained doesn't restore any HP to the vampire but increases the victim's drained value by 1, killing the victim when it reaches drained 5. A vampire can also consume blood that's been emptied into a vessel for sustenance, but it gains no HP from doing so.\nA victim's drained condition decreases by 1 per week. A blood transfusion, which requires a check (medicine, dc:20, name:Blood Transfusion) check and sufficient blood or a blood donor, reduces the drain by 1 after 10 minutes."
        },
        {
          "id": "AVpXnwBBGoOo68pw",
          "name": "Turn to Mist",
          "kind": "action",
          "description": "The vampire turns into a cloud of vapor, as the Vapor Form spell, or back to its normal form. The vampire loses fast healing while in gaseous form.\nThe vampire can remain in this form indefinitely."
        },
        {
          "id": "JUgPxjF2b7DYZwEu",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "JqajO4nisN5Ddc6s",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "YI0ylNDmvxevAqnt",
              "name": "Dominate (At Will) (See Dominate)",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:nightmare",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qRUqoezeEnQ2KdyT",
      "slug": "nightmare",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:be13d0e1310b2ff445fa1de9de10f8faebf73ca14f83a49077dee7e710bb3bc6",
    "translatableHash": "sha256:9a010789fd213045e02818b036d6a96ebadc32578d0a8e553cac5f0d3af82300",
    "data": {
      "schemaVersion": 1,
      "name": "Nightmare",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "fiend",
        "unholy"
      ],
      "description": "Nightmares are flaming equine harbingers of death.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 40,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 3,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 16,
        "intimidation": 14,
        "survival": 12
      },
      "languages": [
        "chthonian",
        "daemonic",
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
          "id": "hvrW7fEOtezPrmRv",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d10+8 piercing",
          "traits": [
            "magical",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "NHSqYE5ZeWiln3Vx",
          "name": "Hoof",
          "bonus": 16,
          "damage": "1d8+8 bludgeoning; 1d6 fire",
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
          "description": "15 feet.\nThe nightmare continually exhales black smoke. Creatures within the aura are Concealed to those outside it, and creatures outside the aura are concealed to creatures within it. Nightmares and their riders can see through this smoke.\nA creature that begins its turn in the area must succeed at a check (fortitude, dc:23, options:area-effect,inflicts:sickened, traits:inhaled,poison) save or be Sickened 2. It's then temporarily immune to being sickened by the smoke for 1 minute. This is an inhaled poison, and the nightmare and its rider are immune to it."
        },
        {
          "id": "Huqh2NJEkx1xBpoO",
          "name": "Flaming Gallop",
          "kind": "action",
          "description": "The nightmare Strides or Flies up to triple its Speed. Its hooves burst with intense flame, dealing 3d6[fire] damage with a check (reflex, dc:24, basic) save to each creature other than the nightmare's rider that the nightmare moves adjacent to during its gallop. Each creature can be affected only once during a single use of Flaming Gallop."
        }
      ],
      "spellcasting": [
        {
          "id": "jW0BtgVKN8XQhLKs",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core:elananx",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "RJFpwZIGbuOuCtXr",
      "slug": "elananx",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bda100052348adf513b37dfb0c0c08fdd4cb2fda268074913e46d4f68b2be0bf",
    "translatableHash": "sha256:0d6546a3b0e72c370710adac4611c08f4eb86ff7f37b3da5e286a29039bc1dd4",
    "data": {
      "schemaVersion": 1,
      "name": "Elananx",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fey",
        "fire"
      ],
      "description": "These strange, fey felines resemble large, broad bobcats from a distance, but a closer view reveals something amiss. Their forms ripple and billow with heat, and their eyes glow from within as if they contained tiny, flickering flames. The pungent scent of rotting leaves smoldering in a bonfire clings to their fur. Yet those who have the chance to watch elananxes hunt or attack prey witness the greatest indication that these creatures are something more than mere predators, for they act with cruel and savvy instincts, reveling in the pain they inflict.\nElananxes typically hunt alone, but sometimes these cunning and malicious hunters of the First World roam in packs called billows to take down large prey. Like many house cats, elananxes are not content to merely track and devour prey, but prefer to toy with their victims, drawing joy from the fear and pain of those they capture. To this end, elananxes rarely use their cinder dispersal ability to evade their targets, instead opting to foil their quarry just before the end of the hunt—though, as selfish creatures who wish to live to hunt again, elananxes often reserve one use of this ability, just in case.\nBecause of their clever and malicious ways, elananxes are favored as hunting companions by redcaps, who go out of their way to befriend or make deals with these creatures. Redcaps also find great sport in hunts where competing elananxes chase a single creature. Although they're large enough to serve as mounts for redcaps, elananxes despise being ridden and resist such attempts—little is as sure to cause a supposedly friendly elananx to turn on its redcap ally as a foolhardy attempt to treat the fey cat as a horse!\nElananxes have a strange affinity with forest fires. Because they are immune to the damage caused by flickering flames, they enjoy capering and caterwauling through the smoky, burning ruins of forest infernos. Some have even been known to use their burning bites to deliberately light undergrowth on fire, simply so they might experience the beauty of the flames combined with the inevitable pain such disasters inflict on other creatures.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 16,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": -3,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 14,
        "survival": 14
      },
      "languages": [
        "fey"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "kTCYz9Dnx9Zw1RHa",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d6+8 piercing; 1d6 fire",
          "traits": [
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "ohDZuFtUD8Y2pTMN",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "grrOo0mi2kz2urJF",
          "name": "Cinder Dispersal",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The elananx takes damage from a hostile source\nEffect The elananx disperses into a cloud of smoke and cinders, filling its space and a @Template[emanation|distance:20]. While in this form, the elananx can't be attacked or targeted, and it doesn't take up space. Anything inside this cloud is Concealed, and any creature ending its turn there takes 2d6[fire|options:area-damage] damage. At the start of its turn, the elananx returns to its normal form in any square the cloud covered. If the elananx Strikes a creature using its first action after returning to its normal form, the target is Off-Guard and the Strike deals an extra 1d6 fire damage."
        },
        {
          "id": "izty6IGZL6BowyUS",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The elananx's Strikes deal an extra 1d6 damage to creatures within the reach of at least two of its allies."
        },
        {
          "id": "ST2LDOW64VO0qAVl",
          "name": "Pounce",
          "kind": "action",
          "description": "The elananx Strides and makes a Strike at the end of that movement. If the elananx began this action Hidden, it remains hidden until after the attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lamia",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "vqYrJ33XgoeQUUle",
      "slug": "lamia",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0e8dad9db52c2b772ff5282bce595b60169e707cf35603aa3650ca7861f9909e",
    "translatableHash": "sha256:a0265d8969577d0b9e7e387359b3878c981f7c4e2bf099dc5e69382b322e3add",
    "data": {
      "schemaVersion": 1,
      "name": "Lamia",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "humanoid"
      ],
      "description": "Just as they were cursed long ago, lamias can inflict a curse on those they touch, clouding the victim's mind and pushing conscious thought toward animalistic instincts. Creatures affected by this curse grow reckless, becoming unaware of the consequences of their own actions. This makes the hapless victim all the more susceptible to the lamia's cunning illusions and insidious charms. The lamia's animalistic nature and the effect of their cursed touch have led some scholars to theorize that the original lamias must have, millennia ago, turned away from their own reason and intellect and embraced the life of simple beasts. Whether this change was rewarded as a monstrous gift from Lamashtu or inflicted as a curse for abandoning their responsibilities by Pharasma, remains a subject of debate to this day.\nWhatever the source of this ancient transformation, lamias have grown to enjoy the strengths it has granted them. They continue to cling to a hatred of the gods, seeing them as the cause of their eternal exile from the societies they watch with jealous eyes while hidden amid the ruins of lost civilizations. Because lamias blame divine powers for their curse, they take special delight in the downfall of temples, the suffering and death of divine spellcasters, and the spread of dissension within organized religions.\nWhile they can briefly assume humanoid form with magic, lamias are usually forced to hide from civilization, making their homes in the barren wilderness. There, they attract cults of their own. With the help of these cultists, lamias strive to bring down popular faiths, introduce schisms into flourishing churches, and humiliate or defame high-profile religious leaders. Most lamias have no true religious faith in anything, hearing instead a mystical calling that manifests as sighs on the desert wind or murmurs from the dark places between the stars.\nLamias are traditionally matriarchal, revering the eldest female among them as leader, mother, and shaman.\nLamias are bloodthirsty victims of an ancient curse for which they blame the gods. Most lamias are humanoid from the waist up but have the lower bodies of serpents. Sinister magic comes naturally to a lamia, and they prefer the use of illusions to deceive prey for later consumption, or simply to torture.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 40,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "athletics": 16,
        "deception": 15,
        "diplomacy": 11,
        "intimidation": 13,
        "stealth": 15,
        "survival": 11
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
          "id": "Ej293LsxUUFjWNK8",
          "name": "Spear",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": []
        },
        {
          "id": "B6szcvpWsKu9fNp6",
          "name": "Tail",
          "bonus": 16,
          "damage": "1d6+10 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "J9d2rpUp8ZsHKZWW",
          "name": "Spear",
          "bonus": 14,
          "damage": "1d6+10 piercing",
          "traits": [
            "thrown-10"
          ]
        },
        {
          "id": "yntcM5gKBjUuNen1",
          "name": "Javelin",
          "bonus": 13,
          "damage": "1d6+10 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "oyHWuTde1I33SKT6",
          "name": "Lamia's Caress",
          "kind": "action",
          "description": "The lamia touches a creature, who must succeed at a check (will, dc:23) save or become Stupefied 1. If the target fails additional saves against this ability, the condition value increases by 1 (to a maximum of Stupefied 4). This condition value decreases by 1 every 24 hours."
        },
        {
          "id": "zTWAKdDMdVslc62l",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "acAG7Wir41UpIJRx",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "tP4ZIVuA54L3bsJ5",
              "name": "Illusory Disguise (At Will)",
              "rank": 1
            },
            {
              "id": "75DxWIhLD9bX4O9C",
              "name": "Illusory Object (At Will)",
              "rank": 1
            },
            {
              "id": "SMkVM2bU3GVaaAAp",
              "name": "Ventriloquism (At Will)",
              "rank": 1
            },
            {
              "id": "A6qofBgJ1Okm5gQi",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "ppjNzzAe843rXraz",
              "name": "Humanoid Form (At Will)",
              "rank": 2
            },
            {
              "id": "2IJlhkOAm0QFgPOa",
              "name": "Sleep",
              "rank": 3
            },
            {
              "id": "HOSZW0t31G5GgBep",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "4U1RZTuhyq31r5hG",
              "name": "Suggestion",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:zecui",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "vVs0N3mcWYHsyccc",
      "slug": "zecui",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:adad177e9ebd041320ce4280434c68af7bb0efc267932e7a9c85e8b0c7e063c9",
    "translatableHash": "sha256:6ea0d0131b8329768cb2f38213aa3338c0a8c92f4ec702de752ef237e0539eba",
    "data": {
      "schemaVersion": 1,
      "name": "Zecui",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "These chitinous entities can only grow to adulthood within a host creature, usually a humanoid or larger animal. When such hosts are particularly plentiful, zecuis can multiply at a horrifying rate, sealing hosts in subterranean chambers until their larvae grow to adulthood. However, during lean times, zecui adults will sate their hunger by eating those hosts along with any unlucky larvae gestating within, unable to be infested by their own young.\nBetween periods of wakefulness, zecuis hibernate for decades in burrows or buried within the soil. Sometimes an unincubated larva will be buried this way, waiting for a living host to come in contact with it. Once a zecui larva has gestated long enough to take control of its host, it may seek out larger and more powerful entities to devour the host, transferring themselves to a more plentiful source of food.",
      "armorClass": 23,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 12
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 15,
        "crafting": 12,
        "medicine": 14,
        "stealth": 17
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UNwOQlidkjFE1NlH",
          "name": "Shortsword",
          "bonus": 17,
          "damage": "2d6+7 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "WGTVgvcRVCR5pgFY",
          "name": "Mandibles",
          "bonus": 15,
          "damage": "2d8+7 piercing",
          "traits": []
        },
        {
          "id": "PLGOfhjM3R69ItqK",
          "name": "Claws",
          "bonus": 17,
          "damage": "2d4+7 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "8YZFgk6rwyBcdSrs",
          "name": "Spit",
          "bonus": 17,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "yLPvFv25zZNeeAXs",
          "name": "Preserve Prey",
          "kind": "reaction",
          "description": "Trigger A living creature within 30 feet is reduced to 0 Hit Points\nEffect The zecui channels corrupt vitality into the triggering creature, which still goes Unconscious but does not gain the dying condition. While that creature is unconscious, the residual energy attempts to counteract any vitality spell healing that creature with a [[/r 1d20+15 #Counteract]]{+15} counteract modifier."
        },
        {
          "id": "xzwBcprcmbh0IRzY",
          "name": "Dual Stab",
          "kind": "action",
          "description": "Frequency once per round\nEffect The zecui makes two shortsword Strikes against an Immobilized or Off-Guard target. These strikes count towards the zecui's multiple attack penalty, but it doesn't increase until after the second attack."
        },
        {
          "id": "HNqdnWUXrupdarUM",
          "name": "Harden Chitin",
          "kind": "action",
          "description": "The zecui fuses much of their chitin into a black metallic shell. They gain resistance 5 to all damage (except mental and spirit) until they next take a move action."
        },
        {
          "id": "73HgI0QpWEVw0nDe",
          "name": "Spit Mucus",
          "kind": "passive",
          "description": "A creature hit by the zecui's spit attack is Immobilized by the larva-infested mucus and stuck to the nearest surface until it [[/act escape dc=25]]{Escapes}. While that creature is immobilized, it is exposed to zecui larvae at the end of each of its turns."
        },
        {
          "id": "BKL2zhQ7nn8sYC4b",
          "name": "Zecui Larvae",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25)\nStage 1 visible lumps as the larvae move but no ill effect (1 day)\nStage 2 Drained 1 (1 day)\nStage 3 Drained 2 (1 day)\nStage 4 Drained 3 and controlled by the zecui larva (1 day)\nStage 5 the creature dies and the adult zecui can emerge from the corpse as an Interact action"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:hobgoblin-general",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "xgKDQB6ZYmAutwAm",
      "slug": "hobgoblin-general",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6f342c337fdbfa0a86642ec05ad114e74b728e6f92b3b2962bcdad61dca79815",
    "translatableHash": "sha256:e10fbd3876a1802686bc77baaca4d42b7c034c93c412392ff67092968eaa969e",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin General",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "hobgoblin",
        "humanoid"
      ],
      "description": "Hobgoblin generals serve as leaders of entire armies and rulers of hobgoblin settlements. A general does not permit the luxuries of rule to soften them. They lead their forces on the field of battle and view this opportunity to excel in a fight at the head of an army as the true reward for a life spent honing one's skills in battle.\nHobgoblins may appear to outsiders to be the most civilized of goblinkind, but their civilization is hardly one of kindness and equality-instead, they revel in all that is militaristic, tyrannical, cruel, and destructive. Hobgoblins are singularly devoted to war, and their entire culture is built upon fostering and maintaining conflict while simultaneously proving their superiority in battle. Hobgoblins are highly organized, and they work efficiently and effectively in groups, whether that group is a small raiding party, a roving war band, or a fully regimented army. Hobgoblin rulers require little provocation before declaring war, and more often than not, such wars are waged to gain slaves or territory. Physically, hobgoblins stand about as tall as humans and have gray, ashen skin.\nHobgoblin society is organized along military lines, and every hobgoblin is effectively a member of the army. Each hobgoblin in a community has a rank in the military hierarchy, and individuals are naturally ambitious and obsessed with advancement. Hobgoblins are constantly expected to prove that they're fearless, ruthless, cunning, and strong. Demonstrating such aptitudes is an individual hobgoblin's best hope for promotion through the ranks, but failure leads only to cruel exploitation at the hands of their superiors. Though brutal, hobgoblin society is a true meritocracy, and all hobgoblins, regardless of age, gender, or birth, wield authority and earn respect from their peers based on their skill in battle. Even those individuals who serve in non-combat roles in hobgoblin society-blacksmiths, builders, cooks, messengers, quartermasters, and the like-know that they perform vital jobs that support the larger hobgoblin army, though they rarely rise above the rank of common soldier. Everyone contributes to the larger whole, ensuring that hobgoblin society is the strongest and most efficient it can be, and anyone who fails to do so is culled from the army and this hobgoblin society as dead weight. Hobgoblins don't usually engage in trade with other races, or even with other hobgoblin tribes, preferring to take what they want by force.",
      "armorClass": 25,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 15,
        "intimidation": 14,
        "stealth": 12
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
          "id": "kXAwzMH9r670KlCp",
          "name": "Glaive",
          "bonus": 17,
          "damage": "1d8+10 slashing",
          "traits": [
            "deadly-d8",
            "forceful",
            "reach-10"
          ]
        },
        {
          "id": "t1tq9YiGmfqQQV5C",
          "name": "Composite Shortbow",
          "bonus": 15,
          "damage": "1d6+8 piercing",
          "traits": [
            "brutal",
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "fWTtIUDtbSfOzgqv",
          "name": "General's Cry",
          "kind": "passive",
          "description": "When a hobgoblin general rolls initiative, as long as they can perceive at least one foe, they can yell a mighty battle cry. The hobgoblin general attempts an Intimidate check to [[/act demoralize]] a single foe within 60 feet as a free action. If successful, any ally can, as its first action on its first turn of the combat, Stride up to double its speed as a single action."
        },
        {
          "id": "1gKtaE366xqxGDdV",
          "name": "Formation",
          "kind": "passive",
          "description": "When it's adjacent to at least two other allies, the hobgoblin general gains a +1 circumstance bonus to AC and saving throws. This bonus increases to +2 to Reflex saves against area effects."
        },
        {
          "id": "M8RNAgw0OgnUOpKP",
          "name": "Polearm Critical Specialization",
          "kind": "passive",
          "description": "On a critical hit, the target of the critical hit is moved 5 feet in a direction of the hobgoblin general's choice."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mummy-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "XZWUQklzWF6YFPmG",
      "slug": "mummy-guardian",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:19e6cfb26e75db714dd295f03170be9488b93512b75c61021aef140a2089ec3e",
    "translatableHash": "sha256:5816cc5d16be40a667c2389f7e08140b7eac484a319b717ecd66aa38cec7130b",
    "data": {
      "schemaVersion": 1,
      "name": "Mummy Guardian",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mummy",
        "undead",
        "unholy"
      ],
      "description": "The majority of mummy guardians were created by cruel and selfish masters to serve as guardians to protect their tombs from intruders. The traditional method of creating a mummy guardian is a laborious and sadistic process that begins well before the poor soul to be transformed is dead. The victim is ritualistically starved of nourishing food and instead fed strange spices, preservative agents, and toxins intended to quicken the desiccation of the flesh. The victim remains immobile but painfully aware during the final stages, as its now-useless entrails are extracted. The victim is then shrouded in funerary wrappings and entombed within a necromantically ensorcelled sarcophagus to await instructions in the potentially distant future. While it's certainly possible to use other methods to create a mummy guardian from an already-deceased body, those who seek to create these foul undead as their guardians in the afterlife often feel that such methods result in inferior undead—the pain and agony of death by mummification being an essential step in the process.\nRegardless of the method of their creation, mummy guardians are more than just physical shells of flesh and bone. They retain fragmented, distorted versions of their minds, with only enough memories of their living personality remaining to fuel their undead anger and jealousy of those who yet live. This burning rage only intensifies over the centuries of waiting within a crypt for the chance to actually act, and thus, when most mummy guardians are awoken by tomb robbers or adventurers, they stop at nothing in pursuit of spiteful slaughter.\nWhile many cultures practice mummification for benign reasons, undead mummies are created through grueling rituals, typically to provide eternally vigilant guardians. Much more rarely, a body mummified without those special rites can rise again due to its hatred of the living.",
      "armorClass": 23,
      "hitPoints": 125,
      "speedFeet": 20,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 10,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 2,
        "int": -2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "stealth": 11
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
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 5",
          "alchemical 5"
        ]
      },
      "attacks": [
        {
          "id": "ontgzVU2z1qYMBe0",
          "name": "Fist",
          "bonus": 16,
          "damage": "2d10+7 bludgeoning",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "PwrDf49KhBAgWAGl",
          "name": "Alchemical Weakness",
          "kind": "passive",
          "description": "The guardian's weakness to alchemical items not only applies to damage from alchemical items, but the guardian also takes 5 damage when splashed with non-damaging alchemical items or dosed with alchemical poisons, even if they're immune to their other effects."
        },
        {
          "id": "F11GjKJxm8bHuaf6",
          "name": "Blighted Consumption",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet eats or drinks (including an alchemical item or potion)\nEffect The food or drink burns like the caustic substances fed to the mummy before its death. If the creature fails a check (fortitude, dc:24) save, they become Sickened 2 after they finish the consumption and can't reduce their sickened condition while within 30 feet of any mummy."
        },
        {
          "id": "koQZhbeUGolCUc4q",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "uvteCuJBp9CEBvPJ",
          "name": "Choking Pain",
          "kind": "action",
          "description": "Requirements The mummy's last action was a successful fist Strike\nEffect The mummy shares the pain of its dying moments with the target of that Strike. That creature takes 3d8[void] damage with a check (will, dc:24, basic) save. If the creature critically fails the saving throw, it can't speak for 1 round, including to Cast a Spell."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:rhu-chalik",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yj2nhIS8ZsAJh2l5",
      "slug": "rhu-chalik",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:86a72b0f1c287ec2f89c16d06d8e6abdaa5e2b7bb57a4f7dfef3f47651cc8231",
    "translatableHash": "sha256:b14372c01035826cd11f8016ce999859ef2de5cb82dd1dfb69a64da0d129b4d8",
    "data": {
      "schemaVersion": 1,
      "name": "Rhu-Chalik",
      "level": 6,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "aberration"
      ],
      "description": "Also called void wanderers, rhu-chaliks can survive the depths of space indefinitely, passing between worlds over the eons and scouting those planets for the Dominion of the Black. Rhu-chaliks prefer to work alone in order to reduce potential overlap in their mental predations, but sometimes receive assistance from those who believe the transmission of memories is transcendent. The furtive beings are calculating and infinitely patient, seeking only the most exceptional minds to cast beyond the stars to their masters.\nThe Dominion of the Black is a conglomeration of deep-space conquerors with a strong presence on Aucturn, the most remote planet in Golarion's solar system. The Dominion has secret outposts all over Golarion; most of its members on the planet are scouts, using their skills to steal brains and identities, gathering information without any consideration for the inhabitants of the worlds they infiltrate.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 5,
      "perception": {
        "modifier": 17,
        "senses": [
          "greater-darkvision",
          "tremorsense-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 11,
        "will": 17
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 4,
        "int": 2,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "athletics": 13,
        "deception": 13,
        "diplomacy": 13,
        "intimidation": 13,
        "stealth": 15
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "DNMBuy0G69bflxTr",
          "name": "Tendril",
          "bonus": 15,
          "damage": "2d4+6 bludgeoning; 1d6 mental",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "FHWDKbm2r5ltPmmK",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Sryn4awFAiEFPWJi",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9jFyWZvzSML2VT0Y",
          "name": "Thoughtsense 60 feet",
          "kind": "passive",
          "description": "The rhu-chalik senses a creature's mental essence as a precise sense with the listed range; it cannot sense mindless creatures with thoughtsense."
        },
        {
          "id": "sBY73yijWI9qogpX",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AErcLCe3qBLb8HU0",
          "name": "No Breath",
          "kind": "passive",
          "description": "A rhu-chalik doesn't breathe and is immune to effects that require breathing (such as inhaled poisons)."
        },
        {
          "id": "lBss0k9IK6iCcQEo",
          "name": "Excruciating Enzyme",
          "kind": "passive",
          "description": "A rhu-chalik's tendrils secrete an enzyme that causes intense pain. A living creature hit by a tendril Strike must succeed at a check (fortitude, dc:24) save or become Sickened 1 from the pain."
        },
        {
          "id": "JCVCYsMSue62ekID",
          "name": "Label Memories",
          "kind": "action",
          "description": "The rhu-chalik invades the mind of a target within 100 feet, sorting the memories into alien structures for transmission. The target must attempt a check (will, dc:24) save.\nCritical Success The target creature is unaffected and temporarily immune to Label Memories for 1 minute.\nSuccess The target is unaffected.\nFailure The target becomes Stupefied 2 for 1 minute as its mind is reorganized to fit the rhu-chalik's needs. If it's already stupefied by this effect, the target instead becomes Confused for 1 minute or until it recovers due to taking damage.\nCritical Failure As failure, but if the target is already stupefied by Label Memories, they become Paralyzed for 1 minute instead of confused."
        },
        {
          "id": "vJiApMctVhXsoq99",
          "name": "Transmit Memories",
          "kind": "action",
          "description": "Requirements The rhu-chalik is adjacent to a creature Paralyzed due to Label Memories\nEffect The rhu-chalik copies the creature's consciousness and mentally sends this copied consciousness through the void of space to their waiting masters. The target creature is deeply disoriented by this procedure, becoming Stupefied 2 for 1 day afterward."
        }
      ],
      "spellcasting": [
        {
          "id": "hpbnFFNrcbDIDwkP",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "8YB1Ghz9CBsNGNNe",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "szK7m2cRz0pWuEUb",
              "name": "Mind Reading (At Will)",
              "rank": 3
            },
            {
              "id": "wqpNrDGJDldCFrA0",
              "name": "Rewrite Memory",
              "rank": 4
            },
            {
              "id": "hXg4plyXaaVn2V3L",
              "name": "Mind Probe",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:manticore-quill-tail",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ZeUxgpNi5AXr9pX6",
      "slug": "manticore-quill-tail",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fd4d7d69588baaa23a85d20ac49c64b77e6dbce7d7cc45e4da8507133864c577",
    "translatableHash": "sha256:92caafdcffff342043ebb734bb7100896b4c3838349118a480e3fb42b973d856",
    "data": {
      "schemaVersion": 1,
      "name": "Manticore (Quill Tail)",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "A manticore is a monstrous amalgamation of lion, dragon, and human with a penchant for feasting on human flesh. Its distinctive tail is festooned with large quills like those of a porcupine, which the manticore flings at prey by whipping its tail like a sling. These deadly spikes give the manticore the power to slaughter even well-armed warriors from the safety of the sky.\nAlthough the anthropomorphic face of the manticore suggests a keen intellect, most creatures of its kind are single-minded killers. They can be clever liars, however, and their voices have a strangely musical sound that has lured many unwitting travelers into an ambush. A manticore discovered by uneducated or spiteful humanoids can sometimes become the center of adoration and even worship. A manticore in this situation swiftly gives in to its laziness and allows its acolytes to bring it tribute in the form of food and treasure, feasting upon its own followers when offerings become scarce. Stronger humanoids who encounter a manticore can cow it through intimidation and violence, sometimes even forcing it into service as a mount. As long as the manticore is well fed with human flesh and its master leads it to victory, a manticore mount can prove surprisingly loyal.\nA manticore enjoys taking plunder from the corpses of its prey as trophies that flatter its vanity and testify to its strength. It has little interest in money, but sometimes accepts gold and jewels as tribute. Because manticores prefer lonely places in the wilderness far from humanoids, they remain content to enjoy their spoils alone rather than show them off to visitors.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -2,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 15,
        "intimidation": 11,
        "survival": 12
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
          "id": "jHv2A4kh5nyPGSxF",
          "name": "Jaws",
          "bonus": 17,
          "damage": "2d8+8 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "WzNNAcPz7ibjxcS8",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "YuzoCdKpCzawAPTJ",
          "name": "Spike",
          "bonus": 14,
          "damage": "1d10+5 piercing",
          "traits": [
            "propulsive"
          ]
        }
      ],
      "actions": [
        {
          "id": "hHLGOCYOj0KZUdYI",
          "name": "Spike Volley",
          "kind": "action",
          "description": "The manticore flings up to two spikes from its tail, targeting either two different creatures or a single creature. If the manticore targets two different creatures, these creatures must be within 20 feet of one another, and the manticore makes a separate Strike against each; this counts as only one Strike for the manticore's multiple attack penalty, and the penalty doesn't increase until after both attacks.\nIf the manticore flings both spikes at the same creature, it makes a single Strike. If the attack hits, it deals the damage of a single spike, but the target is pinned in place, rendering it Immobilized. A creature can get free if it [[/act force-open dc=23]]{Forces Open} the spike or [[/act escape dc=23]]{Escapes}; either option is DC 23.\nA manticore can hurl no more than 12 spikes in 24 hours."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:elephant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "1x0BdpVQLX7o3rrA",
      "slug": "elephant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e510dbc1e906e3dcacab8ecea26f1d5051648e1165c7d30b13c89d3a505040d4",
    "translatableHash": "sha256:5bf7bd2467ffb7be64b454ed63d087a52392ce3ffd577635ceaa74dda4ddaf0e",
    "data": {
      "schemaVersion": 1,
      "name": "Elephant",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "Those who live near elephants have learned to be wary of angering the beasts, but even with precautions in place, elephants sometimes still rampage. There is little an individual person can do when even a single elephant becomes enraged. Furthermore, a herd of angry or frightened elephants can easily destroy an entire village.\nImmediately recognizable by their long, prehensile trunks and impressive tusks, elephants have different characteristics depending on where they are found. Elephants are used as beasts of burden in many regions, but they are extremely clever and must be handled with great care.",
      "armorClass": 23,
      "hitPoints": 130,
      "speedFeet": 40,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 17,
        "survival": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "eGqp10EE3Ein6SqI",
          "name": "Tusk",
          "bonus": 16,
          "damage": "3d8+9 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "idWgJAjZ5pi1uI2C",
          "name": "Trunk",
          "bonus": 18,
          "damage": "",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "FHuTUU6djcJ06GPe",
          "name": "Foot",
          "bonus": 16,
          "damage": "2d10+9 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "qX4zB0ycmWv3B6wH",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, foot, check (reflex, dc:24, basic)"
        },
        {
          "id": "5O3D1KLFuAtqX80b",
          "name": "Grabbing Trunk",
          "kind": "passive",
          "description": "A Medium or smaller creature hit by the elephant's trunk is Grabbed. If the elephant moves, it can bring the Grabbed creature along with it."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:pukwudgie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "1ZRHjuGOluR4IUrs",
      "slug": "pukwudgie",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e1a7470a2d88acd79950d5d7978797d13c81636e527de326a369bb3980878615",
    "translatableHash": "sha256:33a776ffea9f6909248354748006aea9886e00ee92644efc1a03c560f3a8a52f",
    "data": {
      "schemaVersion": 1,
      "name": "Pukwudgie",
      "level": 7,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fey"
      ],
      "description": "Pukwudgies go by many names in many regions, but those who know of them agree that defying their mischievous nature provokes their wrath.\nIn ancient times, pukwudgies traveled to the Universe from the First World, perhaps in the wake of the gnome emigration. These proud fey are obsessed with displays of respect, and while they first attempted to befriend mortals, each attempt ended in tragedy as the pukwudgies perceived any potential slight as a grave insult. Mortals, fearing these reactions, began to view pukwudgies as dangerous nuisances. Pukwudgies, in turn, began to resent mortals and the gods that favored them.\nAt their best, pukwudgies play cruel jokes on mortals they encounter. At their worst, they've been known to kidnap and even kill those who don't treat them with proper respect. Violent fey like twigjacks and redcaps often gather under pukwudgie leadership, much to the pukwudgies' glee.\nPukwudgies make their villages in the oldest forests, concealed under Mirage spells. They travel freely between the Universe and the First World through tiny portals beneath hills, trees, or stones. No strangers to violence, pukwudgies rarely travel alone and often anoint their quills or weapons with a custom-brewed poison before entering hostile situations.\nStanding about 2 feet tall, a pukwudgie sports sharp quills growing from their head that extends down their back. Their skin tone varies by the region in which they live, ranging from pale gray to brown.",
      "armorClass": 25,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 17
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 3,
        "int": 4,
        "wis": 6,
        "cha": 3
      },
      "skills": {
        "crafting": 15,
        "deception": 14,
        "medicine": 15,
        "nature": 17,
        "stealth": 17,
        "thievery": 15
      },
      "languages": [
        "common",
        "elven",
        "fey",
        "gnomish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 5"
        ],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "iYWcxAxjnGp9gag8",
          "name": "Hatchet",
          "bonus": 17,
          "damage": "1d6+10 slashing",
          "traits": [
            "agile",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "WUlRpT25Akwrbx9n",
          "name": "Hatchet",
          "bonus": 19,
          "damage": "1d6+10 slashing",
          "traits": [
            "magical",
            "thrown-10"
          ]
        },
        {
          "id": "c3sGdZtwuCDBGlig",
          "name": "Shortbow",
          "bonus": 18,
          "damage": "1d6+6 piercing",
          "traits": [
            "deadly-d10"
          ]
        }
      ],
      "actions": [
        {
          "id": "JQcN49zNIu4wTuSg",
          "name": "Defensive Quills",
          "kind": "passive",
          "description": "A creature that hits a pukwudgie with an unarmed Strike or a non-reach melee Strike takes 3d8[piercing] damage (check (reflex, dc:22, basic) save). On a critical failure, the creature also takes 1d6[persistent,poison] from the poisoned quills.\nNote: A DC was not provided for this ability by Paizo. The DC present here is a moderate DC for the creature level according to the GM Core creature building Tables"
        },
        {
          "id": "e81mjeZGp9mKBDKv",
          "name": "Change Shape",
          "kind": "action",
          "description": "The pukwudgie takes on the physical form of a giant porcupine or resumes their natural form. In porcupine form, their size changes to Medium, they lose their weapon Strikes, and they gain a quill Strike (+18 for 2d8+6 piercing plus 1d8 persistent poison)."
        },
        {
          "id": "lV8lCapoUOFDMPz8",
          "name": "Pukwudgie Poison",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Stupefied 1 (1 round)\nStage 2 1d6[poison] damage and Stupefied 2 (1 round)\nStage 3 1d6[poison] damage, Confused, and stupefied 2 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "hzAD0q71nN1lkiVO",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "lGFDmPhDxFNEVo95",
              "name": "Invisibility (At Will) (Self Only)",
              "rank": 2
            },
            {
              "id": "tYLgXaVtJNSgndKC",
              "name": "Wall of Thorns",
              "rank": 3
            },
            {
              "id": "WZWMBHRgvQvdTOBt",
              "name": "Mirage",
              "rank": 4
            },
            {
              "id": "l2hYHP4cOYImVdvP",
              "name": "Unfettered Movement",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:frost-drake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "2SixuEUfKpEyfOEY",
      "slug": "frost-drake",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9790c470ecc6077daa3d3a5e20657d82bd6a793514e7097739cf7b1340a0d04e",
    "translatableHash": "sha256:a831449173d725402f6ae470f125cace9179fb2e5eba5bd500bfe6d263d8d617",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Drake",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "cold",
        "dragon"
      ],
      "description": "Frost drakes pose an immense danger in the frozen reaches they call home, where they roam far and wide to hunt for prey such as caribou, wolves, small bears, tundra-dwelling people, and even lone frost giants. These drakes take advantage of long distances to hide from the repercussions of their actions, as they are usually among the most depraved and openly malicious of the drakes. They are also especially insolent and are less likely to back down from a fight compared to other drakes. Many frost drakes have met their ends trying to enact cruelties beyond their means, such as singly taking on a frost giant clan or well-fortified township.\nFrost drakes hunt alone more often than other drakes, due to a scarcity of prey and simple temperament. Although a single frost drake can wreak much destruction on their own, tales of village-dwelling northerners banding together to defend their homes from these rogue menaces are fairly common.\nA frost drake's hunting grounds are quite large. Those frost drakes that live upon the permanently frozen peaks of high mountains have been known to swoop down to snatch up prey from the lowlands, leaving frozen swaths of earth from their breath as the only sign of their passing. Their frostcovered scales range from deep royal blue to crisp cyan and sometimes feature sporadic patches of violet. Their hides are thinner than most drakes'; when a frost drake is inhaling in preparation to launch their signature frozen breath, the monster's ice-blue blood can be seen beneath their scales.\nRavenous, bestial, and driven by instinct, drakes are draconic monsters who bear a fraction of the terrifying might of the primal dragons they share evolutionary roots with. While they're weaker, slower, and less inclined toward reason than dragons, drakes are nonetheless a menace to creatures and settlements around them. Their propensity for forming raiding parties—small social groups fittingly called \"rampages\"—makes them all the more dangerous; a single rampage of river drakes can quickly lay waste to a waterside village, and roving rampages of desert drakes are a plague to caravan traders.\nDrakes share a number of physical characteristics that unite them as one species despite their wide variety of habitats and abilities. For example, drakes lack forearms, leaving them with their formidable jaws and thickscaled tails to use in close combat. Most drakes would rather avoid this, however, preferring to use their magical breath to wreak havoc in wide swaths from comfortable distances while flying overhead. Finally, all drakes have small reservoirs of their ancestral draconic power that they can tap into to perform incredible feats of speed.\nDifferent species of drakes rarely come into conflict. Part of this is their distinct habitats, but drakes are open to negotiating simple agreements between rampages. This courtesy does not extend to dragonets, which drakes happily take as prey. Solitary tamed drakes are also excluded from such agreements and considered free game if their tamer isn't strong enough to protect them.\nDrake Eggs\nWhile drake hides aren't any more valuable than those of similarly sized creatures, drake eggs are prized commodities. They are used as components in powerful spells as well as eaten by various cultures, but the most common use for drake eggs is hatching and rearing drakes to serve as mounts and guardians.\nA typical drake lays a clutch of 2d4 eggs every 5 years. Eggs hatch within 3 to 6 weeks, during which time they must be kept in conditions appropriate to their natural environment, perhaps the most difficult aspect of drake husbandry. While it is generally easy for breeders to incubate the eggs of desert or jungle drakes (which require mildly warm temperatures to hatch) or river drakes (which must be submerged in running water), the eggs of flame and frost drakes require extreme temperatures in order to hatch, which can be difficult to replicate safely.\nA drake egg is an object with Hardness 3, 5 HP, and no Broken Threshold. The coloration of drake eggs varies only slightly from one species to the next. A creature must succeed at a check (nature, dc:20) check, or a relevant DC 20 Lore check, to identify the drake species of a specific egg.\nOnce a drake hatches, they imprint on the first creature that they see. A creature imprinted on in this way can use Nature to Train and Command that drake. The market price of a drake egg varies depending on the type of drake and the exact legal situation. Because drakes are dangerous and intelligent creatures, many societies do not condone the trade of drake eggs and criminalize those who engage in it.\nIt takes 2 years for a drake hatchling to grow to full size. A well-trained drake can make a fearsome mount or guardian, but many careless would-be drake trainers are devoured by their charges.",
      "armorClass": 25,
      "hitPoints": 115,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 15,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": -1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 17,
        "intimidation": 14,
        "stealth": 15
      },
      "languages": [
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "cold",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "M6zs0ZmCJlyphS5N",
          "name": "Fangs",
          "bonus": 17,
          "damage": "2d12+8 piercing; 1d6 cold",
          "traits": []
        },
        {
          "id": "9aYwSAhxxa0rnngi",
          "name": "Tail",
          "bonus": 17,
          "damage": "2d10+8 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "7XIYM7XKRyeIRUn6",
          "name": "Snow Vision",
          "kind": "passive",
          "description": "Snow doesn't impair a frost drake's vision; they ignore Concealment from snowfall."
        },
        {
          "id": "RAFn5P8tJAjf5eEe",
          "name": "Retaliatory Strike",
          "kind": "reaction",
          "description": "Trigger A creature within reach of the frost drake's tail successfully damages the frost drake with a Strike\nEffect The frost drake attempts to Strike with their tail. If the Strike hits, it deals an additional 1d6 damage."
        },
        {
          "id": "QmJkEvQgW1G9i7g9",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The frost drake makes two Fangs Strikes and one Tail Strike in any order."
        },
        {
          "id": "GcJJKFDfrv0jW0K3",
          "name": "Freezing Mist Breath",
          "kind": "action",
          "description": "The frost drake spits a ball of liquid up to 60 feet that explodes into a @Template[burst|distance:20] cloud of freezing mist. Those in the burst take 8d6[cold|options:area-damage] damage (check (reflex, dc:25, basic, options:area-effect) save).\nThe frost drake can't use Freezing Mist Breath again for [[/gmr 1d6 #Recharge Freezing Mist Breath]]{1d6 rounds}, during which the mist cakes all surfaces in the area with a sheet of slippery ice that turns the area into difficult terrain."
        },
        {
          "id": "dRF3nPzB91HYIbXx",
          "name": "Ice Climb",
          "kind": "passive",
          "description": "A frost drake isn't impeded by difficult terrain caused by snow or ice, nor do they need to attempt Acrobatics checks to keep from falling on slippery ice."
        },
        {
          "id": "TWiy088AD8uOCDGQ",
          "name": "Speed Surge",
          "kind": "action",
          "description": "Frequency three times per day;\nEffect The frost drake Strides or Flies twice."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:greater-shadow",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5meW7DytYnF7Iq2V",
      "slug": "greater-shadow",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b312a0901960f9366798398da0adb56b8a729c95fd09b386b9b30696437a5e90",
    "translatableHash": "sha256:72b605069360f90b0f50bd78c298183bf88774692452fa78f9d925107e48c03a",
    "data": {
      "schemaVersion": 1,
      "name": "Greater Shadow",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "incorporeal",
        "undead",
        "unholy"
      ],
      "description": "Shadows that spend long amounts of time on the Netherworld and absorb its magic become greater shadows.\nThe mysterious undead known as shadows lurk in dark places and feed on those who stray too far from the light.",
      "armorClass": 24,
      "hitPoints": 75,
      "speedFeet": 0,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 18,
        "will": 15
      },
      "abilities": {
        "str": -5,
        "dex": 5,
        "con": 0,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 16,
        "stealth": 20
      },
      "languages": [
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "precision",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "all-damage 10 except force, ghost-touch, vitality, spirit"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Vy2pPgrGJ3SguoOn",
          "name": "Shadow Hand",
          "bonus": 18,
          "damage": "2d10+6 void",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "kppTcx5TylWkpfF1",
          "name": "Light Vulnerability",
          "kind": "passive",
          "description": "Attacks against the shadow are treated as magical if made by a creature who is in magical light or with an object that is in magical light (such as from the Light spell)."
        },
        {
          "id": "rn6en1AHFB9ns8VB",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zadQdUq4eeiDSHSq",
          "name": "Shadow Spawn",
          "kind": "passive",
          "description": "When a creature's shadow is pulled free by Steal Shadow, it becomes a shadow spawn under the command of the shadow that created it. This Shadow Spawn doesn't have Steal Shadow. If the creature the shadow spawn was pulled from dies, the shadow spawn becomes a full-fledged, autonomous shadow. If the creature recovers from its enfeeblement, its shadow returns to it and the shadow spawn is extinguished."
        },
        {
          "id": "VB81WcGgMngyyh3E",
          "name": "Slink in Shadows",
          "kind": "passive",
          "description": "The shadow can Hide or end its Sneak in a creature's or object's shadow."
        },
        {
          "id": "sslSR9PEr8cWdVop",
          "name": "Steal Shadow",
          "kind": "action",
          "description": "Requirements The shadow hit a living creature with a shadow hand Strike on its previous action\nEffect The shadow pulls at the target's shadow, making the creature Enfeebled 2 (Enfeebled 3 on a critical hit). This is cumulative with other enfeebled conditions from shadows, to a maximum of Enfeebled 4. If this increases a creature's enfeebled value to 3 or more, the target's shadow is separated from its body (see shadow spawn). The enfeebled value from Steal Shadow decreases by 1 every hour."
        }
      ],
      "spellcasting": [
        {
          "id": "UluC5rRvQl0yriAj",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "sGyeCvgDJThi1CYg",
              "name": "Darkness",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:vanth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "74TxKGaW7RPzTdbm",
      "slug": "vanth",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c62521c40b96adda0062aed88e3a3099d45b8a0393403ada184568976f990127",
    "translatableHash": "sha256:6dae9bc0847594e1af147b803647544ea9cf05ca025e02855c565240528c2639",
    "data": {
      "schemaVersion": 1,
      "name": "Vanth",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "psychopomp"
      ],
      "description": "Protectors of the Boneyard, the stern and resolute guardians of the dead, vanths are psychopomps who resemble skeletons with raven-like wings and a mask resembling a vulture's skull. Vanths carry black scythes to fight against those who would disturb the natural progression of souls, and they consider any visitor to the Boneyard a potential troublemaker. They rarely speak and even more rarely show any emotion other than a grim adherence to duty.\nWhen the psychopomp armies go to war, vanths serve as front-line soldiers. In particular, daemons continually stage raids on the River of Souls, requiring constant patrol. Implacable warriors, vanths fly in perfect formation. This can backfire, as they often suppress any adaptability they possess as they wage war.\nPsychopomps are guardians and shepherds of the dead in the Boneyard, the vast plane of graves where mortal souls are judged and sent on to their eternal rewards or damnations. Psychopomps ensure that the dead come to terms with their transition from mortality and are properly sorted into the appropriate afterlife. They also protect souls from being preyed upon by supernatural predators. Nearly all psychopomps wear masks, especially when they're likely to be interacting with mortals, although the types of masks they wear are as varied as the psychopomps themselves. The courts of the Boneyard preside in Requian, a somber yet melodic language spoken slowly with various tonal shifts.\nMany psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.",
      "armorClass": 27,
      "hitPoints": 105,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 13,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 17,
        "intimidation": 15,
        "occultism": 13,
        "religion": 13,
        "stealth": 17
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
          "void 10",
          "poison 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "mKNSE9q3LtnCb49y",
          "name": "Scythe",
          "bonus": 18,
          "damage": "1d10+8 slashing",
          "traits": [
            "deadly-d10",
            "magical",
            "trip"
          ]
        },
        {
          "id": "EG42MTaDcKnzDi6h",
          "name": "Jaws",
          "bonus": 17,
          "damage": "1d6+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "5cC1uj7hBSGN8tix",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3R3kclVNbu40dMpB",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "mzcBU4P7MDB5Kav4",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "20 feet. check (will, dc:22, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "1yOIwEcZJUFIB9jj",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "de7GnRXapzBCdDoL",
          "name": "Infuse Weapon",
          "kind": "passive",
          "description": "A vanth's scythe is its symbol of office and gains a measure of its personal power. This scythe becomes a +1 scythe and is treated as if it were adamantine while the vanth wields it. A vanth whose scythe is taken or destroyed can infuse a new one with an hour of work."
        },
        {
          "id": "oBV1Ybwqj4dpXeff",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "A vanth's Strikes affect incorporeal creatures with the effects of a Ghost Touch property rune and deal 2d6[void] damage to living creatures and 2d6[vitality] damage to undead."
        },
        {
          "id": "Sep8lU0AriLntZmy",
          "name": "Vanth's Curse",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The vanth bestows a curse on a creature by touching it with its scythe. The creature must attempt a check (will, dc:25) save.\nCritical Success The target is unaffected and is temporarily immune to Vanth's Curse for 24 hours.\nSuccess The target feels a momentary shudder of doom and is Stupefied 1 for 1 minute by the distracting sensation.\nFailure The target becomes morose and glum as it accepts its own inevitable fate. For 1 hour, the target is Stupefied 2. Each time the target gains the dying condition, the stupefied condition value increases by 1, to a maximum value of Stupefied 4.\nCritical Failure As failure, but the effect is permanent."
        }
      ],
      "spellcasting": [
        {
          "id": "d2h0zilfslOI1NGH",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "HCJtAhd3Ndwn9N8x",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "AYJ1JWhONbfetAx8",
              "name": "Holy Light",
              "rank": 3
            },
            {
              "id": "sFx2JfttYzWTkSpH",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "k9HDmK6UBQ1e1HJT",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "5UcCFhu1Ot6o2afd",
              "name": "Translocate",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:omen-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "7Uf4Q9w3dCDEV30e",
      "slug": "omen-dragon-young",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fc1569fb47aa149cf50c97f3a1ae0bc56879b616e71f879d84dc1a38aeb3dac4",
    "translatableHash": "sha256:21ea8647af136e987a7042994d472436f97b13f43545b0858094805e13b0db6d",
    "data": {
      "schemaVersion": 1,
      "name": "Omen Dragon (Young)",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Fate is a fickle matter on Golarion. Even with prophecy broken on the world, there are ways to look to the immediate future or acquire a vague sense of long-term events. Omen dragons are bound to see the future—nebulous though it might be—at all times. Visions of the future hound them like a quiet song that never stops playing in their minds. While an omen dragon can focus on or ignore the music of fate at any time, the song plays all the same. At a glance, omen dragons resemble other occult dragons in appearance, save for the mirror-like interior membrane of their wings. An omen dragon's wings offer glimpses into the future. These glimpses are cloudy and vague, but generally correct, if only technically. Omen dragons have a natural compulsion to share the futures they see. These dragons have no compunctions about what the visions show and share their knowledge equally with innocent villagers as they do with wicked tyrants.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 40,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 6,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 16,
        "diplomacy": 13,
        "occultism": 17,
        "society": 17
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "doomed",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "kedVETOWoA0CREjI",
          "name": "Jaws",
          "bonus": 16,
          "damage": "1d8 mental; 2d8+5 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "jK2GHuJJpy7W3D8B",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d6+5 slashing; 1d8 mental",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "AZJG3Rj1tW9Ku5pc",
          "name": "Tail",
          "bonus": 14,
          "damage": "2d8+5 bludgeoning; 1d8 mental",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "i0EbyCtqgYqnRaIU",
          "name": "Wing",
          "bonus": 14,
          "damage": "1d8 mental; 1d8+5 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "7jMTgXw900gW0HWP",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NcECPJpz8Y3Qd9BE",
          "name": "Challenge Fate",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted by an attack;\nEffect This fate is not set in stone. The attacker rolls the triggering attack twice and uses the worse result."
        },
        {
          "id": "m1wESAZSSsfNS2AF",
          "name": "Untethered to Fate",
          "kind": "passive",
          "description": "The dragon can choose to negate any fortune or misfortune effects that would affect them; other creatures remain affected normally."
        },
        {
          "id": "I2kJG5snUvdVtlrm",
          "name": "Destiny Breath",
          "kind": "action",
          "description": "The dragon breathes a translucent mist of potentialities that overwhelms creatures with visions of possible features, dealing 6d6[mental|options:area-damage] damage in a @Template[cone|distance:20] (check (will, dc:25, options:area-effect) save). A creature that fails its save is Slowed 1 for 1 round (or Slowed 2 on a critical failure) as it struggles with the visions.\nThe dragon can't use Destiny Breath again for [[/gmr 1d4 #Recharge Destiny Breath]]{1d4 rounds}."
        },
        {
          "id": "aJ5Jw0ozWjNooF13",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon makes two claw Strikes and one wing Strike in any order."
        },
        {
          "id": "WjY0WmlZBVHL6RtF",
          "name": "Draconic Momentum",
          "kind": "passive",
          "description": "The dragon recharges their Destiny Breath whenever they score a critical hit with a Strike."
        },
        {
          "id": "2phPU9xYaMSKFNol",
          "name": "Prophetic Wings",
          "kind": "passive",
          "description": "The dragon or any ally can glimpse into the future through the dragon's wings in a process that requires 10 minutes of concentration. This casts a 4th-rank Augury spell, except that the wings can predict results up to 1 day into the future and the dragon always speaks a few cryptic words related to the result of the prediction.\nThe dragon can use their wings in this way only once per hour, and a given creature can seek a future in the wings only once per week."
        }
      ],
      "spellcasting": [
        {
          "id": "oPIb4SBdJ2xgXMpz",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "JbFJbVf79USAyGJe",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "5iajVcLPHVhOJnIM",
              "name": "Ill Omen",
              "rank": 3
            },
            {
              "id": "Dyr8SRqSWqlVnlO9",
              "name": "Mindlink",
              "rank": 3
            },
            {
              "id": "DMPfFaAmPzxoVemd",
              "name": "Sure Strike",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:quetzalcoatlus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "a4LgD3NrgkiINvru",
      "slug": "quetzalcoatlus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7a8ef14c1122aafff8ba65ad1d485680f51f4c7cc36a7ade1717bee793f6b0ec",
    "translatableHash": "sha256:1048cee701646397ed7856fa3fd8b0d49bd0e007b2f42512423e35ebe3c3f244",
    "data": {
      "schemaVersion": 1,
      "name": "Quetzalcoatlus",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "Quetzalcoatlus are the largest flying members of the pterosaur family and are often mistaken for dragons due to their immense size and 40-foot wingspans. Using the joints of their massive wings as forelimbs, they are also quite capable of moving on land, snatching smaller prey from the ground or out of streams.\nQuetzalcoatlus are carnivorous, feeding on a variety of reptiles, mammals, large fish, amphibians, and other vertebrates. They are not inherently aggressive creatures and are happy to scavenge for food, but when presented with live prey they readily attack almost any creature smaller than themselves.\nPterosaurs are primitive flying creatures. While many are smaller than a human or even small enough to perch on a shoulder, the two presented below are quite a bit larger. Each of these creatures could pose a serious threat to a person.\nThese flying reptiles can be found in a wide selection of regions, but they tend to soar above warm or temperate climates. They sometimes spread outside their natural range as pets and hunting companions for lizardfolk or giants. Cloud giants living in isolated valleys also train the largest pterosaurs to carry their messages to the outside world.",
      "armorClass": 25,
      "hitPoints": 110,
      "speedFeet": 15,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 12
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 17
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LkSajmBAzMTZ4Wk4",
          "name": "Beak",
          "bonus": 17,
          "damage": "2d10+10 piercing; 1d8 bleed",
          "traits": [
            "deadly-d10",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "0QQqIESJlQrO4KUL",
          "name": "Talon",
          "bonus": 17,
          "damage": "2d8+10 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "JEBTVmt5rc6G8tOb",
          "name": "Carry",
          "kind": "passive",
          "description": "A quetzalcoatlus can Fly at half Speed while it has a single creature Grabbed or Restrained. Both its talons are occupied while it does this."
        },
        {
          "id": "I7qCrIGJsKvrguZB",
          "name": "Swoop",
          "kind": "action",
          "description": "The quetzacoaltus Flies up to its Speed and makes one beak or talon Strike at any point during that movement."
        },
        {
          "id": "L9mTxpzjmfkBOHto",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:con-rit",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "aCTOWweRtjucLmfe",
      "slug": "con-rit",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bfa537dad158d1054c9edc791ac43ceb952016c994c2c7b40a66090784362a0f",
    "translatableHash": "sha256:4fcdb22bb82d90d24a58ae4df29a586a61c44165dab9c552d9556044c0c47d42",
    "data": {
      "schemaVersion": 1,
      "name": "Con Rit",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "The con rit is a hulking aquatic centipede that has traded its hundreds of legs for just as many fins. This sea insect swims with a grace that is just as majestic as it is unnerving. The con rit is dark brown on its dorsal side and sickly yellow on its ventral surface. This makes it much more difficult to spot, whether looking from above or below. Its exoskeleton is as hard as iron, and the shifting of its plates makes an elongated, eerie ringing sound as it swims.\nMany once thought the con rit to be a dragon of some kind. This was due not only to its massive size but also to its ability to launch its venom in a concentrated blast. It would use this technique to shoot birds out of the sky or knock sailors off ships. Their movement through the water is also not entirely dissimilar to that of dragons. Those who seek out a con rit's lair in search of treasure are usually disappointed (when they aren't eaten alive by the huge insect).\nThere are legends that a con rit, much like a phoenix, is reborn after its death. This, however, is not the case. A con rit will make a nest far below the surface of its territory, usually in underwater caves. Throughout its life, a con rit will lay thousands of eggs in its cave that will never hatch. The con rit will eat any egg that gets too old, but there are always large numbers of them remaining. When a con rit dies, it releases a strong-smelling chemical into the air and water that triggers the hatching process. The eggs will slowly crack open within the month, and hundreds of baby con rits will begin to fight each other for territory. By year's end, one will win and reach full maturity. This cycle is what has led to the legends of endless rebirth. Other stories say that every generation of the con rit is ever so slightly smaller, leading to tales of ancient con rits that were hundreds of feet long. However, the size of such legendary insects has yet to be confirmed by scholars who study such things.",
      "armorClass": 27,
      "hitPoints": 100,
      "speedFeet": 10,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 1,
        "cha": -4
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 18,
        "stealth": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "slashing 5",
          "piercing 5"
        ],
        "weaknesses": [
          "bludgeoning 5"
        ]
      },
      "attacks": [
        {
          "id": "eVCQpWjdYnim5UQM",
          "name": "Mandible",
          "bonus": 18,
          "damage": "2d10+8 piercing",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "YFAXnwgejVd3jvv8",
          "name": "Con Rit Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25);\nMaximum Duration 6 rounds\nStage 1 1d10[poison] (1 round)\nStage 2 2d10[poison] and Off-Guard (1 round);\nStage 3 2d10 poison, off-guard, and Slowed 1 (1 round)"
        },
        {
          "id": "uJF1TjO0gDfZr2NX",
          "name": "Spit Venom",
          "kind": "action",
          "description": "The con rit spits a propulsive blast of venom that deals 2d10[poison,2d10[bludgeoning]|options:area-damage] damage in a @Template[line|distance:30] (check (fortitude, dc:25, basic, options:area-effect) save). Creatures who fail their save are also pushed 10 feet.\nThe con rit cannot use Spit Venom again for [[/gmr 1d4 #Recharge Spit Venom]]{1d4 rounds}."
        },
        {
          "id": "1AR7cN1zlEwxiuGD",
          "name": "Undulate",
          "kind": "action",
          "description": "The con rit Swims. During this movement, it can pass through spaces as narrow as 5 feet without Squeezing."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:smaranava",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CYyxzpymkIZxX4Zo",
      "slug": "smaranava",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:63271f50ea76f45076164dc97e4f62b00613531b33b9254bab814796a67ae753",
    "translatableHash": "sha256:21c6adfb8370f21a8178acf5f35325ffebdd6f06f2001e80cd8ef2829bd2a808",
    "data": {
      "schemaVersion": 1,
      "name": "Smaranava",
      "level": 7,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Many view clouded nagas as jealous, malevolent creatures. Only those with the courage to see clearly can recognize these beings for what they truly are: tragic, wounded beings who have been trapped and corrupted by fate. The betrayal and beheading of the naga's mother goddess, Ravithra, cascaded trauma onto all of her creations. Smaranavas have never recovered from this divine wound, and these cursed serpents live wretched half-lives, attempting to fulfill Ravithra's forgotten purpose by tempting and testing mortals they encounter. In this way, they separate the wicked from the righteous, the worthy from the unworthy.\nSmaranavas have dark scales that are rendered dull gray by stuck shed skin, their eyes a milky white due to opaque caps over their eyes. Many ritually scar their necks out of sorrow for their mother Ravithra. Legends claim that the wise and enlightened can free clouded naga from their fates, allowing them to shed their forms and emerge as an awakener naga.\nNagas are serpentine beings with magical powers and keen intellects. Physically, they resemble massive snakes, though they often wear jewelry and other ornaments that clearly separate them from their animal kin. Nagas use their innate magic and poisonous fangs to keep all but the most stalwart foes at bay. They keep their own counsel, viewing their cosmic role to be sacrosanct and beyond the understanding of outside scholars. Their unwillingness to explain themselves or entertain the suggestion of alliances has led to a long history of conflict with their neighbors, who read them as aloof, arrogant, or duplicitous.\nNagas often have a powerful sense of duty to their perceived role within the universe, even if this role leads them to violent or tragic ends. Many see them as harsh and stern due to their devotion, terrifying in their majesty yet possessed of an aura of transcendence.",
      "armorClass": 27,
      "hitPoints": 115,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 2,
        "dex": 6,
        "con": 4,
        "int": 3,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 17,
        "arcana": 16,
        "athletics": 13,
        "deception": 16,
        "intimidation": 16,
        "stealth": 19
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
          "id": "MyKZIoRnhZ7XB8Od",
          "name": "Fangs",
          "bonus": 20,
          "damage": "2d10+5 piercing",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "9PxjMrxwZlW7E68Z",
          "name": "Tail",
          "bonus": 20,
          "damage": "2d8+5 bludgeoning",
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
          "id": "m4v6mQ47uFgY7Am8",
          "name": "Coils of Knowledge",
          "kind": "passive",
          "description": "The naga's grip is more spiritual than physical. A creature hit by a smaranava's tail must succeed at a check (will, dc:25) save or become Grabbed by the tail until they Escape, the naga releases them with an Interact action, or the naga dies.\nA captive takes a –4 status penalty to Escape, but can choose to attempt an Occultism or Religion check to Escape instead of the usual options without taking this penalty"
        },
        {
          "id": "J96Da1WLPtixjqAJ",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d8+5)[bludgeoning], check (fortitude, dc:25, basic)"
        },
        {
          "id": "QKkhHytcLYYdIf7H",
          "name": "Smaranava Venom",
          "kind": "passive",
          "description": "When a holy creature succeeds at a saving throw against this poison, it is immediately cured\nSaving Throw check (will, dc:25)\nMaximum Duration 5 minutes\nStage 1 Slowed 1 (1 round)\nStage 2 Slowed 2 (1 round)\nStage 3 Unconscious with no Perception check to wake up (1 minute)"
        }
      ],
      "spellcasting": [
        {
          "id": "aI9zRTlYOFCwQlVU",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "W8E5iVnVTIRVdYA0",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "DBAOHBdubLv5oRdQ",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "FwhbIYTfkDk6AKO1",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "R5VvfdnP4ny1uyhb",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "7V6guSwDGqOJbyuQ",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "xTkQc2DXtj57Frzp",
              "name": "Mind Reading",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:quatoid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "dfshMY9yEEXOUoMo",
      "slug": "quatoid",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f40cc6929d00943d1efc45bccdce125e8820006134f7a86e938481a04388a137",
    "translatableHash": "sha256:3a5554342839c692612849a03cb6e4318e0da43181c67b35d2e6bb62778fdeb9",
    "data": {
      "schemaVersion": 1,
      "name": "Quatoid",
      "level": 7,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aquatic",
        "elemental",
        "water"
      ],
      "description": "Quatoids are peculiar elementals native to the Plane of Water that resemble four-tentacled octopuses with eerily humanoid faces on their mantles. Mysterious even to other elementals, quatoids nevertheless respond to mortal summons. They assist these mortals in combat but seem to prefer offering calm advice, looking for alternate solutions even in the midst of bloody conflict.\nWith the return of their elemental lord from her long imprisonment, quatoids are slowly becoming more active on the Plane of Water. However, much of their activity still seems to be centered on the mortal realm.\nWater elementals can be very destructive, but often not intentionally so; just as water can bring life to mortals in need, its waves can pound shores and rains can flood cities. Water elementals are similarly difficult to predict.",
      "armorClass": 25,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 15,
        "diplomacy": 12,
        "occultism": 17,
        "society": 17,
        "stealth": 13
      },
      "languages": [
        "common",
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
          "bludgeoning 5",
          "fire 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "8JKL1RJJmQI5QjnF",
          "name": "Tentacle",
          "bonus": 16,
          "damage": "2d12+6 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wLZyJd6TuntCoSpo",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QphofWAqcVVsApgN",
          "name": "Calming Bioluminescence",
          "kind": "passive",
          "description": "30 feet.\nThe aura sheds dim light. Creatures in the emanation gain a +2 circumstance bonus to saving throws against emotion effects. The quatoid can activate or deactivate its calming bioluminescence as a single action, which has the concentrate trait.\nEffect: Calming Bioluminescence"
        },
        {
          "id": "ryo9HmpaThFAUxD6",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d12+6)[bludgeoning], check (fortitude, dc:25, basic)"
        },
        {
          "id": "yB58WUUckQC7pMxy",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "2PnyMPtvBpBFJJyw",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 27,
          "spells": [
            {
              "id": "Zo1gKFEHyKae5EQL",
              "name": "Hydraulic Push (At Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:living-tar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "EWYXtfIQYhUbWK4R",
      "slug": "living-tar",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:96b8e1b1a2a9853580b05434f447a72010fbc72eb3e4284d4c7f795b368aab48",
    "translatableHash": "sha256:8b7f91a9256dd49bf3d1c8fc5888a04670932d1cc360e6752c5ab7133abf3441",
    "data": {
      "schemaVersion": 1,
      "name": "Living Tar",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "mindless",
        "ooze"
      ],
      "description": "Most often found belowground, these oozes scour caves for objects to dissolve with their corrosive secretions. These sticky masses are often filled with bones, fossils, and discarded weaponry from adventurers.\nSlimes, molds, and other oozes can be found in dank dungeons and shadowed forests. While not necessarily evil, some grow to enormous sizes and have insatiable appetites.",
      "armorClass": 14,
      "hitPoints": 165,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 6,
        "will": 11
      },
      "abilities": {
        "str": 7,
        "dex": -5,
        "con": 7,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "bleed",
          "bludgeoning",
          "critical-hits",
          "mental",
          "precision",
          "unconscious",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "fyPEZAB9BOSxQbT7",
          "name": "Pseudopod",
          "bonus": 18,
          "damage": "2d6 acid; 2d8+7 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VkpGCfaWthWOk6LA",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A living tar can feel nearby motion through vibration and air movement."
        },
        {
          "id": "bIxkrVgnqAW34gtg",
          "name": "Adhesive Mass",
          "kind": "passive",
          "description": "A weapon that hits the living tar is stuck to the ooze. Removing it requires a successful check (athletics, dc:23, options:action:force-open) check to Break Open. The living tar can have any number of objects or creatures stuck to it at a time.\nIt can release a stuck object with an Interact action, and the adhesive dissolves 1 minute after the ooze dies, releasing all stuck objects and creatures."
        },
        {
          "id": "jErun631uU4je7wk",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d8+7)[bludgeoning,1d6[acid]], check (fortitude, dc:26, basic)"
        },
        {
          "id": "fTxeknuoM1qldgQJ",
          "name": "Engulf",
          "kind": "action",
          "description": "check (reflex, dc:22, options:damaging-effect,inflicts:grabbed,inflicts:slowed), (4d6)[acid] damage, [[/act escape dc=22]], Rupture 15"
        },
        {
          "id": "J49sVMgc7qSD5gu8",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dullahan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "GNwLVbfFx8EPz7xO",
      "slug": "dullahan",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6b1190a2d6ed2d68e23481a38dd504cec076ca974c9f448c92525609ce427e81",
    "translatableHash": "sha256:4e80f6ff34256de247341defdbfe05a664beadba49945957883453fa425a9266",
    "data": {
      "schemaVersion": 1,
      "name": "Dullahan",
      "level": 7,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Riding on a horse as black as night, the headless hunter known as the dullahan tracks down and takes the heads of those they deem unfit to continue living. When closing in for the kill, the dullahan first whispers their victim's name, then swiftly collects their prize, casting a pall of dread upon all who witness the grim execution.\nA dullahan manifests when a particularly violent warrior is beheaded and the warrior's soul stubbornly clings to material existence (or is refused entry to the afterlife). Most dullahans return to their former homelands, where they can exact vengeance on those they feel wronged them in life (or their living descendants). A dullahan's concept of justice is swift and merciless, and once they've selected a target, they're unwavering in their cause.\nPerhaps even more than revenge, a dullahan desires their own rotted head. An individual who wields the head of a dullahan is powerful indeed, for a dullahan will grudgingly serve such a master in the hopes of reclaiming their missing skull. Mighty fiends such as devils command dullahans to harvest souls or lead armies for them, while a mortal might use such an undead warrior to fulfill a personal vendetta. A dullahan won't hesitate to kill their liege and reclaim their head when the opportunity presents itself.",
      "armorClass": 28,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 14,
        "senses": [
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 15,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "intimidation": 17,
        "stealth": 13,
        "survival": 15
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "fear-effects",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "RMbB0Cy1iBEXCD5A",
          "name": "Keen Longsword",
          "bonus": 18,
          "damage": "1d8+10 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "bo8qDCWaF4txPsi1",
          "name": "Keen Returning Hatchet",
          "bonus": 17,
          "damage": "1d6+10 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        },
        {
          "id": "pVi8f6cZ7YOZDd1k",
          "name": "Fist",
          "bonus": 18,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "ORBRYCSr88txQyIM",
          "name": "Keen Returning Hatchet",
          "bonus": 14,
          "damage": "2d8+10 slashing",
          "traits": [
            "agile",
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "GM1uYxLGklcQScOG",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7bniftpjEDrMSUN2",
          "name": "Fast Healing 5",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UHxzFiyQ9sL32HBv",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "30 feet. check (will, dc:23, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "d0IyyC0eOGytOaOr",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "VXiR6GGa6NxxxBMb",
          "name": "Head Hunter",
          "kind": "passive",
          "description": "Any slashing weapon gains the Keen rune while a dullahan wields it, and any hatchet they wield gains the Returning rune as well. If the dullahan kills a creature with a critical hit using a slashing weapon, the target is decapitated as though the dullahan had used Reap on the target."
        },
        {
          "id": "pG17snAKOgqgqba1",
          "name": "Reap",
          "kind": "action",
          "description": "The dullahan removes the head of a dead creature within reach. Each creature within the area of the dullahan's frightful presence must attempt a new save, even if it is temporarily immune."
        },
        {
          "id": "VRVvTkZmbfIqx7uw",
          "name": "Summon Steed",
          "kind": "action",
          "description": "The dullahan summons a war horse with elite adjustments and the fiend and unholy traits. This steed remains until it is slain, the dullahan Dismisses this effect, or the dullahan Summons a Steed again."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:naiad-queen",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "H8lGFF3PKUv2yRL2",
      "slug": "naiad-queen",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3fd800c1c58a3e06c67395bfad2335191ed776952ffee980ee00f45e42dc7608",
    "translatableHash": "sha256:6261f761dd4ed6e686e702a5b2bf615ea674592913d3347a02b6afa5beeb13cd",
    "data": {
      "schemaVersion": 1,
      "name": "Naiad Queen",
      "level": 7,
      "rarity": "uncommon",
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
          "fire 10"
        ],
        "weaknesses": [
          "cold-iron 10"
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
          "description": "The naiad can ask questions of, receive answers from, and use the Diplomacy skill with animals."
        },
        {
          "id": "Gm902B0XQR5W4eLu",
          "name": "Tied to the Land",
          "kind": "passive",
          "description": "The queen is tied to a body of water or area with a great deal of water features.\nA nymph queen is intrinsically tied to a specific region. As long as the queen is healthy, the environment is exceptionally resilient, allowing the nymph queen to automatically attempt to counteract any spell that would harm the environment (such as the Blight ritual), using her spell DC with a counteract rank equal to the highest-rank druid spell she can cast.\nWhen the nymph queen becomes physically or psychologically unhealthy, however, her warded region eventually becomes twisted or unhealthy as well. In that case, restoring the nymph queen swiftly heals the entire region."
        },
        {
          "id": "xqRgagTvArv2abwD",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y44FxT7CY4R6SkdW",
          "name": "Nymph's Beauty",
          "kind": "passive",
          "description": "30 feet. A creature that fails its save is Stunned 1 and becomes stunned 1 each time it starts its turn within the aura for the next 24 hours, even if it can't see the naiad queen.\nCreatures that start their turn in the aura must succeed at a check (will, dc:23, options:area-effect,inflicts:stunned) save or suffer an effect described in the nymph queen's entry."
        },
        {
          "id": "z1Wnid4gCPgKMoV8",
          "name": "Water Healing",
          "kind": "passive",
          "description": "For every 10 minutes a naiad spends soaking in any body of water in her domain, she regains 30[healing]{30 Hit Points}."
        },
        {
          "id": "yQ0WKMlep02TPvLi",
          "name": "Change Shape",
          "kind": "action",
          "description": "Nymph queens can transform between their original form, which looks much like a typical nymph of their kind, and any Small or Medium humanoid form, typically choosing a more humanoid-looking version of their natural form."
        },
        {
          "id": "P658sPuiyqAqTdkz",
          "name": "Focus Beauty",
          "kind": "action",
          "description": "If a target already affected by nymph's beauty fails its save, the image of the queen sears into the creature's mind, effectively blinding the creature until its vision is restored with sound body or a similar effect.\nThe naiad queen can Dismiss the effect.\nThe nymph queen focuses her beauty upon a target, who must attempt a save against her nymph's beauty aura (check (will, dc:23) save). If the creature fails and was already affected by the aura, it takes a greater effect described in the nymph queen's entry.\nA nymph queen can Focus Beauty on a given creature only once per turn."
        },
        {
          "id": "lQKrggSbzpvqq4YB",
          "name": "Inspiration",
          "kind": "action",
          "description": "The nymph queen inspires a single intelligent creature by giving that creature a token of her favor, typically a lock of her hair, though it can be some other significant object as well. As long as the creature carries her token and remains in good standing with her, the creature gains a +1 status bonus to all Crafting checks, Performance checks, and Will saves.\nIf the nymph grants her token to a bard, and she's the bard's muse, the queen chooses one additional benefit granted by her token: a +1 status bonus to all Lore checks, a +2 status bonus to Performance checks when determining the effects of compositions, a +4 status bonus to untrained skill checks, or a +2 status bonus to Will saves against fey.\nEffect: Nymph Queen's Inspiration"
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
              "name": "Tidal Surge",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:phade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "HKXa9E91WLy6dAZA",
      "slug": "phade",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8dcd5fd6bb6f244ae9b7a12514004849088d4312ba4397761159a49c9f76ee94",
    "translatableHash": "sha256:c2e7cf274db09f0d18cfc9124a75e47d9e75972f4639bd9be8228d4145ae1960",
    "data": {
      "schemaVersion": 1,
      "name": "Phade",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "On the Plane of Air, and throughout the Inner Sphere, phades serve as spies and assassins for their creators. Even when summoned into the mortal Universe, phades are generally called for unsavory and violent purposes, giving the phades that have turned their back on their creator a poor opinion of mortals as well.\nHailing from the Plane of Air, these beings appear in a variety of sizes and shapes. They're noted for being elusive, swift, and often difficult to detect due to being composed primarily of air.",
      "armorClass": 26,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 18,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 6,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 16,
        "nature": 15,
        "stealth": 18,
        "survival": 15
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
          "id": "zHzxiV7sS8c8LmWL",
          "name": "Fist",
          "bonus": 18,
          "damage": "1d10+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "6TdllGeax8h6457M",
          "name": "Naturally Invisible",
          "kind": "passive",
          "description": "The phade is Invisible at all times, though when it takes a hostile action of any kind, it is Hidden instead of undetected until the start of its next turn, as the vague outline of its humanoid form is faintly visible for a short period of time."
        },
        {
          "id": "ANyC8NZ6FUDU74w1",
          "name": "Hush",
          "kind": "action",
          "description": "The phade calms the air in a @Template[emanation|distance:30] until the beginning of its next turn, reducing sounds in it to a whisper that can't be heard outside the emanation.\nThis doesn't prevent casting spells, but a phade attempts to counteract any auditory or sonic effect originating in the area with a [[/r 1d20+17 #Counteract]]{+17} counteract modifier. If the counteract attempt fails, Hush ends early."
        },
        {
          "id": "hh5R2THIk2h54UOV",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The phade deals 2d6 extra precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:kanya",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "hmcXFrf8xwrYQIg6",
      "slug": "kanya",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9434af0d01153fee58fb058a28721a1b3e1dbc16522c2a0f372778bbfa2072f5",
    "translatableHash": "sha256:04c6794704e15612d79d33c5dc9e84e6ac2bcbfa0ae3a077ff0885375ea253da",
    "data": {
      "schemaVersion": 1,
      "name": "Kanya",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "azata",
        "celestial",
        "holy"
      ],
      "description": "Kanyas are bearers of blessings and fortune, as well as harbingers of wisdom and spiritual growth. They are generally peaceful but quick to act if a community they are residing in is threatened. They pride themselves on inspiring mortals to such joy that they express it through the arts, leading to their common moniker as \"muses.\" More than one bard looks to a kanya as their personal inspiration, yet much like inspiration, kanyas come and go as they please. They wander the world as they will, offering rain, generosity, wisdom, and support to whomever pleases them.\nKanyas sometimes secretly follow the adventures of mortal heroes to record their stories as epic poems and songs, which they then perform in the packed mead halls of Elysium. When pursuing such goals, kanyas take pains to use their innate spells to remain in hiding, as they would rather observe and record events without \"polluting\" them with their own intervention. Nevertheless, a kanya who sees their charge faced with certain death often cannot resist the urge to intervene and save the day. Inevitably, this brings a close to the kanya's chronicles, as their relationship with their subject invariably shifts from one of detached observation to friendship or more. Yet, kanyas remain hesitant to involve themselves for overlong in a mortal's life, in part because they fear what sort of fiendish attention their presence might attract, but mostly out of respect for the mortal's own destiny. A kanya would, all things being equal, prefer to let mortals choose their own fate rather than run the risk of sending someone down a path to which their heart is not set.\nAzatas are manifestations of freedom and unestrained joy—kindly celestials with a penchant for curious exploration, spontaneous revelry, and whimsical quests. Born of good dreams and heartfelt wishes for a better world, they reside in the untamable wilds of Elysium. Azatas are passionate and mercurial, as beautiful and bright as a child's fantasy, but also fiercely loyal to those they hold dear. They act quickly and directly against fiendish and foul influences, but they tend to avoid guiding mortal affairs otherwise, allowing people to choose their own destiny without the meddling of otherworldly forces.\nAzatas reject the dual chains of both duty and tyranny, but also the heavy chains of despair that reality so often inflicts upon those who live in it. This can give them a dubious reputation with other celestials, who consider azatas to be flighty and unreliable, but azatas know that unrelenting self-sacrifice can be just as destructive to the soul as evil. Azatas refuse to compromise the beauty of the world with such banality, instead living without regret and savoring every triumph and agony they encounter upon the way.",
      "armorClass": 25,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 16,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 5,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 17,
        "deception": 16,
        "diplomacy": 18,
        "nature": 14,
        "performance": 20,
        "religion": 14,
        "survival": 12
      },
      "languages": [
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
          "id": "xECw5sCWsHZAUjFv",
          "name": "Longsword",
          "bonus": 18,
          "damage": "1d8+10 slashing; 1d6 sonic",
          "traits": [
            "holy",
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "HF4Dnnv97ezTQ1sy",
          "name": "Tail",
          "bonus": 17,
          "damage": "2d6+10 bludgeoning",
          "traits": [
            "agile",
            "holy",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "Ads9d3lRyv0Z8u5p",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "IXjaAxkgZsz5958E",
          "name": "Free Expression",
          "kind": "passive",
          "description": "A kanya's auditory and sonic effects attempt to counteract any effect that would directly control, manipulate, or prevent them from expressing themself freely, such as Silence. They can also spend an action, which has concentrate trait, to speak forcefully and counteract such effects. The counteract modifier is [[/r 1d20+16 #Counteract]]{+16} in either case."
        },
        {
          "id": "4G2TniPxICsNjk3Y",
          "name": "Muse's Courage",
          "kind": "passive",
          "description": "Any Courageous Anthem the kanya casts grants a +2 status bonus instead of +1.\nSpell Effect: Courageous Anthem (Kanya)"
        },
        {
          "id": "D71sSjwa6Oa7yHvw",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "e7Rk8yVGVqEP62yA",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "W7FgwI6OVHfHW7zc",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "p0tsCoD5OjQL79KK",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "6A7TBJj1r3UA0PES",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "KurLn7VM9tnOjEmT",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "VZhse5yjZ5v0KBiq",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "IHeWX8CdohZV85Sm",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "0tNjAITf1ADylFdw",
              "name": "Uplifting Overture",
              "rank": 1
            },
            {
              "id": "c8L2sj5ovaD2Pzkn",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "6QVO5QvCS9rm8VRU",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "Ufbr1NBYryNgpsAd",
              "name": "Clear Mind",
              "rank": 4
            },
            {
              "id": "AW71P1cTx8xnC3Zh",
              "name": "Counter Performance",
              "rank": 4
            },
            {
              "id": "HCJCCOW7dDBnZ56p",
              "name": "Noise Blast",
              "rank": 4
            },
            {
              "id": "ctbW853tYEeOVJ3u",
              "name": "Soothe",
              "rank": 4
            },
            {
              "id": "IYfghoI2y4C2dAGp",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "A6QXR1khVrcieezn",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-animated-statue",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "I00S3LWnDJfCn4zv",
      "slug": "giant-animated-statue",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:89433f73598ee3d3dea8ac00ce2972432c8ab9ef033f4f7bd1c36f2aa0faeaeb",
    "translatableHash": "sha256:689d6be857866edc77d9a71fd67bde717f79b4f3a474d0d3f70b71806eeaedb0",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Animated Statue",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Giant animated statues' increased size and power make them most useful in large vaults, spacious chambers, or outdoor locations. Tasks beyond their capabilities typically require a more advanced construct, not an animated object.\nGranted a semblance of life through the use of rituals or other strange magic, animated objects take many forms and serve a variety of uses. A few examples of typical animated objects are listed below. Many of these creatures serve as guardians, surprising unsuspecting adventurers when they suddenly attack. Others serve as idle distractions for the exceptionally rich, simple servants created to handle odd jobs, and the like.",
      "armorClass": 26,
      "hitPoints": 100,
      "speedFeet": 30,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 10,
        "will": 9
      },
      "abilities": {
        "str": 6,
        "dex": -1,
        "con": 6,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 17
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "aGg1kw2fRdZFdeew",
          "name": "Stone Fist",
          "bonus": 19,
          "damage": "2d12+6 bludgeoning",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "ZtVK4wU2SnZ0H3zl",
          "name": "Flaming Coal",
          "bonus": 12,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "fire",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "FHYZijWKqxyPWq4b",
          "name": "Construct Armor (Hardness 10)",
          "kind": "passive",
          "description": "Like normal objects, a giant animated statue has Hardness. This Hardness reduces any damage it takes by an amount equal to the Hardness. Once a giant animated statue is reduced to less than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks and its Armor Class is reduced to 22."
        },
        {
          "id": "v0n7ntTptPAp7TPz",
          "name": "Brazier",
          "kind": "passive",
          "description": "The statue carries a wide brazier full of hot coals. To make flaming coal Strikes or use Burn Alive, the statue must have the brazier held in one hand or otherwise have it within reach.\nInstead of targeting the statue with an attack, a creature can target the brazier directly. The brazier has the same AC and saves as the statue.\nDealing 15 cold damage to the brazier or dousing it with at least 2 gallons of water extinguishes the coals. This prevents the statue from using Burn Alive and causes its ranged attacks to no longer deal fire damage."
        },
        {
          "id": "M203mlcBNFvAqyIJ",
          "name": "Burn Alive",
          "kind": "action",
          "description": "The statue grinds a creature it has Grabbed or Restrained into the red-hot coals of its brazier. The target takes 3d8[fire,1d8[persistent,fire]] damage."
        },
        {
          "id": "J2jO45MMtWXrfesA",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:omen-dragon-young-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "IKmiLv4ZNiLD10zv",
      "slug": "omen-dragon-young-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cac4be470ff999736ba4b113935ca66e5ddc69f5f6f421758528b685934e4371",
    "translatableHash": "sha256:5637d9a612689c30da893487942240f50d24275752e3139d2c7b3c5e10f13230",
    "data": {
      "schemaVersion": 1,
      "name": "Omen Dragon (Young, Spellcaster)",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Fate is a fickle matter on Golarion. Even with prophecy broken on the world, there are ways to look to the immediate future or acquire a vague sense of long-term events. Omen dragons are bound to see the future—nebulous though it might be—at all times. Visions of the future hound them like a quiet song that never stops playing in their minds. While an omen dragon can focus on or ignore the music of fate at any time, the song plays all the same. At a glance, omen dragons resemble other occult dragons in appearance, save for the mirror-like interior membrane of their wings. An omen dragon's wings offer glimpses into the future. These glimpses are cloudy and vague, but generally correct, if only technically. Omen dragons have a natural compulsion to share the futures they see. These dragons have no compunctions about what the visions show and share their knowledge equally with innocent villagers as they do with wicked tyrants.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 40,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 6,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 16,
        "diplomacy": 13,
        "occultism": 17,
        "society": 17
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "confused",
          "doomed",
          "paralyzed",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "kedVETOWoA0CREjI",
          "name": "Jaws",
          "bonus": 16,
          "damage": "1d8 mental; 2d8+5 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "jK2GHuJJpy7W3D8B",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d6+5 slashing; 1d8 mental",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "AZJG3Rj1tW9Ku5pc",
          "name": "Tail",
          "bonus": 14,
          "damage": "2d8+5 bludgeoning; 1d8 mental",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "i0EbyCtqgYqnRaIU",
          "name": "Wing",
          "bonus": 14,
          "damage": "1d8 mental; 1d8+5 slashing",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "7jMTgXw900gW0HWP",
          "name": "+2 Status to All Saves vs. Occult",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NcECPJpz8Y3Qd9BE",
          "name": "Challenge Fate",
          "kind": "reaction",
          "description": "Trigger The dragon is targeted by an attack;\nEffect This fate is not set in stone. The attacker rolls the triggering attack twice and uses the worse result."
        },
        {
          "id": "m1wESAZSSsfNS2AF",
          "name": "Untethered to Fate",
          "kind": "passive",
          "description": "The dragon can choose to negate any fortune or misfortune effects that would affect them; other creatures remain affected normally."
        },
        {
          "id": "I2kJG5snUvdVtlrm",
          "name": "Destiny Breath",
          "kind": "action",
          "description": "The dragon breathes a translucent mist of potentialities that overwhelms creatures with visions of possible features, dealing 6d6[mental|options:area-damage] damage in a @Template[cone|distance:20] (check (will, dc:25, options:area-effect) save). A creature that fails its save is Slowed 1 for 1 round (or Slowed 2 on a critical failure) as it struggles with the visions.\nThe dragon can't use Destiny Breath again for [[/gmr 1d4 #Recharge Destiny Breath]]{1d4 rounds}."
        },
        {
          "id": "2phPU9xYaMSKFNol",
          "name": "Prophetic Wings",
          "kind": "passive",
          "description": "The dragon or any ally can glimpse into the future through the dragon's wings in a process that requires 10 minutes of concentration. This casts a 4th-rank Augury spell, except that the wings can predict results up to 1 day into the future and the dragon always speaks a few cryptic words related to the result of the prediction.\nThe dragon can use their wings in this way only once per hour, and a given creature can seek a future in the wings only once per week."
        }
      ],
      "spellcasting": [
        {
          "id": "KmfF6ad4p0pK9Te2",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "SUPYxrhgMH9JkXsj",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "P0y6LmPPsOUfA9P2",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "6SkUHzyT9u1wHGGX",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "WyrOsUMMX8Tjpzaa",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "uODo6wo8eADyijit",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "XNquesYFPhWPLulD",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "JoBJfN9xnfAf1ECY",
              "name": "Protection",
              "rank": 1
            },
            {
              "id": "1q4ikdaqyMIVrRJT",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "TBCheNthVYJ517aD",
              "name": "Clear Mind",
              "rank": 2
            },
            {
              "id": "MAjqmqR7d8oTqjDN",
              "name": "Status",
              "rank": 2
            },
            {
              "id": "LQvNLRHKFPwUgsJ5",
              "name": "Stupefy",
              "rank": 2
            },
            {
              "id": "PHb6vzz9f1vDuE0q",
              "name": "Dream Message",
              "rank": 3
            },
            {
              "id": "zcjfJYPKfRwqIj7U",
              "name": "Hypercognition",
              "rank": 3
            }
          ]
        },
        {
          "id": "oPIb4SBdJ2xgXMpz",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "JbFJbVf79USAyGJe",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "5iajVcLPHVhOJnIM",
              "name": "Ill Omen",
              "rank": 3
            },
            {
              "id": "Dyr8SRqSWqlVnlO9",
              "name": "Mindlink",
              "rank": 3
            },
            {
              "id": "DMPfFaAmPzxoVemd",
              "name": "Sure Strike",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:azarketi-tide-tamer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "jTszZSs0K6vOqidM",
      "slug": "azarketi-tide-tamer",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2821022c5cee3fa6581d812e12e92a2d2e8aa2100a793542019c7ff08e01ce35",
    "translatableHash": "sha256:ecd89225884ca8f5c275640f9a09d2582c03437f18d107bad3934e928bb2935b",
    "data": {
      "schemaVersion": 1,
      "name": "Azarketi Tide Tamer",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "azarketi",
        "humanoid"
      ],
      "description": "The most ambitious and capable azarketis become tide tamers, learning how to speak with and train aquatic animals.\nAzarketis, also known as gillmen, can be found all over Golarion, with a particularly high concentration around Absalom and the Inner Sea. Descendants of the ancient Azlanti, the azarketis survived the cataclysm of Earthfall by fleeing into the ocean, where they were warped into amphibious forms by the alghollthu.",
      "armorClass": 25,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 18,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 15,
        "nature": 12,
        "stealth": 15,
        "survival": 14
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
          "id": "Un3T3HNVYnJBbsZG",
          "name": "Trident",
          "bonus": 18,
          "damage": "1d8+7 piercing",
          "traits": []
        },
        {
          "id": "20LK8FqGVrz2fCso",
          "name": "Trident",
          "bonus": 18,
          "damage": "1d8+7 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "iUTM9WOzUZIkVt1D",
          "name": "Hand Crossbow",
          "bonus": 17,
          "damage": "1d6 piercing",
          "traits": [
            "reload-1"
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
          "id": "axdkeSbnyjnpjO2h",
          "name": "Speaker of the Oceans",
          "kind": "passive",
          "description": "An azarketi tide tamer can speak with animals that have the aquatic or amphibious trait."
        },
        {
          "id": "b65fCKLd7xxZXc5w",
          "name": "Aquatic Predator",
          "kind": "passive",
          "description": "An azarketi deals 2d8 additional damage on a successful weapon Strike while they are underwater."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:succubus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "md1fhwGMwDv4NNwO",
      "slug": "succubus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c210270586b732fbbd1a65924338fd4e884ef5910e253ba5332505d8aa48c55f",
    "translatableHash": "sha256:ad7383e5c0966e34a0a74bcbbbe68f890514c3379c15915321d5d0438f9bb55e",
    "data": {
      "schemaVersion": 1,
      "name": "Succubus",
      "level": 7,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Succubi are manifestations of the sin of destructive lust, and they are the most attractive of all demons—as befits their role in seducing mortals to fall to sin. The concept of gender is fluid to a succubus, as they can adopt countless humanoid forms of any gender to aid in their goals. Most succubi have a feminine true form (incubi, which usually have a masculine true form, are a different kind of demon), but regardless of gender, a lust demon is supernaturally beautiful or handsome, but with curving horns, bat wings, sharp claws, and a sinuous tail.\nWhen disguised as a mortal humanoid in the Universe, a succubus whispers into the ears of mortals, urging them to pursue their darkest and most destructive desires and pushing them into depravity, using magic only if persuasion fails. While mortals often fixate on succubi's application of sexual lust, these demons are can easily exploit lust for power, knowledge, fame, or any other desire as easily as more carnal appetites. Their ability to infiltrate societies makes them excellent spies, assassins, and political saboteurs as well. Ultimately, the succubus enjoys all means of upending mortal culture.\nWhen a sinful mortal soul is judged and sent on to the Outer Rifts, it can become a deadly fiend—a demon. Demons are living incarnations of sin—be they classic sins like wrath or gluttony, or more \"specialized\" depravities like an obsession with torture or the act of treason or treachery. Once formed, a demon's driving goals are twofold—the amassing of personal power, and the corruption of mortal souls to cause them to become tainted by sin. In this way demons ensure a never-ending supply of new demons to bolster their ever-growing ranks in the Outer Rifts.\nDemons are selfish and self-absorbed creatures, and most firmly believe that mortals only play at being more virtuous than fiends. They enjoy tempting mortals into damnation to both indulge their egos and swell their armies. Like many other fiends, one of the great rewards of this manipulation is fulfilling their hunger for souls. In their eyes, the primary use for these souls is to spawn new demons, who can serve as soldiers, slaves, pawns, or even currency for their more powerful masters.",
      "armorClass": 23,
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
        "reflex": 14,
        "will": 17
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 4,
        "int": 4,
        "wis": 2,
        "cha": 7
      },
      "skills": {
        "acrobatics": 14,
        "deception": 18,
        "diplomacy": 20,
        "intimidation": 16,
        "religion": 13,
        "society": 15,
        "stealth": 14
      },
      "languages": [
        "chthonian",
        "common",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "ztAIkCm5tn8PbtUr",
          "name": "Claw",
          "bonus": 16,
          "damage": "2d8+8 slashing",
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
          "id": "8wYxLklNMjT1ZPCT",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "GsaqDG9VKiNEXisx",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "FUgfYGhsCxf8KU54",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dK5Meg25B2t4B34g",
          "name": "Rejection Vulnerability",
          "kind": "passive",
          "description": "As succubi are beings of pure lust, creatures that reject their lust can metaphysically harm them. When a succubus fails a Diplomacy check to Embrace or Request, or when a creature succeeds at its save against a succubus's mental spell or ability, the succubus takes 2d6[mental] damage.\nFor 1 hour after causing mental damage to a succubus in this way, a creature can deal 2d6[mental] damage to the succubus with a successful Demoralize action incorporating its rejection."
        },
        {
          "id": "b3OSC1hy3efFqhm7",
          "name": "Seductive Presence",
          "kind": "passive",
          "description": "10 feet.\nAny creature in the aura that could be sexually attracted to a succubus takes a –2 circumstance penalty to checks and DCs to oppose the succubus's mental spells, Deception, and Diplomacy."
        },
        {
          "id": "ghngQIhTKh6viVvP",
          "name": "Change Shape",
          "kind": "action",
          "description": "The succubus can take on the appearance of any Small or Medium humanoid. This doesn't change their Speed or their attack and damage modifiers with their Strikes, but it might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "vkMvsL1nrlHkiJQQ",
          "name": "Embrace",
          "kind": "action",
          "description": "The succubus attempts to [[/act grapple skill=diplomacy]] a creature using their Diplomacy bonus instead of Athletics. If the creature is willing, the succubus automatically succeeds."
        },
        {
          "id": "NFPV2IK6zYWCTJbC",
          "name": "Passionate Kiss",
          "kind": "action",
          "description": "Frequency once per round\nEffect The succubus engages a creature they have Grabbed or Restrained in an embrace or other act of passion to drain its vital essence.\nThe kiss makes the creature Drained 1 or increases its drained value by 1, to a maximum of 4. The creature takes 3d6[void] damage and the succubus regains Hit Points equal to the damage dealt. The target must succeed at a check (will, dc:26) save or be affected by a Suggestion to submit to more actions of passion rather than trying to Escape."
        },
        {
          "id": "vgbSuZiK389nv7Tm",
          "name": "Profane Gift",
          "kind": "action",
          "description": "Frequency once per day\nEffect The succubus gives a willing humanoid a profane gift. That creature gains a +1 status bonus to attack rolls, skill checks, and saving throws. As long as the gift persists, the succubus can communicate telepathically with the target at any distance, see through the creature's senses, and target the creature with suggestion through the telepathic link. In addition, the creature uses an outcome one degree of success worse than it rolls on saving throws against the succubus's Suggestion spells.\nA humanoid can't have more than one profane gift at a time, and a succubus can't grant more than one profane gift at a time. Removing the gift requires an atone ritual. The succubus can remove the gift as a free action to give the recipient a curse, making them Stupefied 3 with an unlimited duration.\nA summoned succubus can't grant a profane gift.\nEffect: Profane Gift"
        }
      ],
      "spellcasting": [
        {
          "id": "ArpzcwnZJV6NMI5C",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "BpmOhvvFOeWcwME5",
              "name": "Charm (At Will)",
              "rank": 1
            },
            {
              "id": "dTQnIqFEKQGXaABe",
              "name": "Mind Reading (At Will)",
              "rank": 3
            },
            {
              "id": "QRnahY34q6Ut5lgn",
              "name": "Suggestion (At Will)",
              "rank": 4
            },
            {
              "id": "QxoUvPwEhbtilrhX",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "pZhcWio6dGTvdUro",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "w1NzMkjL2WpASvwU",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "SB8A3kBq8owumsak",
              "name": "Dominate",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ogre-boss",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "oopxVowT2jnUQJiS",
      "slug": "ogre-boss",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4359b42de7f2613ed5390f62e1a3a6b0bb53f4f79d04fafeb9b105e3fe27cc35",
    "translatableHash": "sha256:e5ba34e0caaa8a6d5b8aac703a71b0af2d3623977e09af0173699f6169811dae",
    "data": {
      "schemaVersion": 1,
      "name": "Ogre Boss",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "giant",
        "humanoid"
      ],
      "description": "In ogre society, might makes more than right—it makes the rules. The strongest or most violent ogre in a family (in most cases, this is the same ogre) is invariably that family's boss. Quick to hook fallen foes on their weapons, even other ogres fear the repercussions of displeasing an ogre boss. When an ogre boss barks out commands, the other members of the family move quickly to obey.\nFor many societies, ogres embody brutish, amoral violence and greedy cruelty. Standing 10 feet tall and densely muscled, ogres are usually as strong as they are vicious. The worst ogres are sadists, enjoying remorseless murder, torture, and violence in all of its forms. Although they prefer to vent their violent urges on other humanoids—the smaller the better—ogre captivity can end in a horrifying fate for anyone unlucky enough to fall within their meaty grasp: becoming dinner. But for all their creativity in inflicting pain, ogres often forget that their playthings lack their own robust fortitude and high pain tolerance, and many of their captives die sooner than the ogres might prefer. Meanwhile, those who manage to survive captivity in an ogre's larder often emerge with lasting mental scars. A captive able to keep their wits about them, however, can sometimes trick the brutes by promising treasure, more plentiful food sources, or other crude amusements, taking advantage of an ogre's often-limited intellect to engineer opportunities to escape or gain revenge.\nOgres are social creatures only in the most debased sense. They gather together in groups called families, though members are not always related by blood. The most powerful ogre in any family is the \"boss\"—usually the family's patriarch or matriarch—whom the other ogres in the family learn to quickly obey or risk being brutalized by the boss's loyal kin. Ogres lair in caves, crumbling ruins, or dilapidated shacks close enough to humanoid settlements or animal trails to make raiding easy. Their lairs are filthy and frequently contain all-too-recognizable evidence of their depravity, along with assorted treasures stolen from past captives.",
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
        "athletics": 16,
        "intimidation": 16,
        "stealth": 11
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
          "id": "DqDajSBQROiv8iPO",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "KxNiF9bYl6kA6FRd",
          "name": "Bellowing Command",
          "kind": "action",
          "description": "The ogre boss issues a command to hasten their fellows. Each ogre ally who hears and understands this command becomes Quickened until the end of that ally's next turn but can use the extra action only to Step or Stride."
        },
        {
          "id": "cg8c4dIdBFiff9le",
          "name": "Sweeping Hook",
          "kind": "reaction",
          "description": "Trigger The ogre boss successfully Trips a creature using an ogre hook\nEffect The ogre boss makes an ogre hook Strike against the creature they tripped."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:medusa",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "QCPpQya5TEUuIxQn",
      "slug": "medusa",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:af8377c46c3c8bc30e15ff11c53129dc16c80bc68d91050de0e1dcae49077a0e",
    "translatableHash": "sha256:8c916edbe2b666aa92846db9bf91a13f360fc732b719bc6cc45c0a6ced6726e9",
    "data": {
      "schemaVersion": 1,
      "name": "Medusa",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid"
      ],
      "description": "Monstrous humanoids that resemble humans with snakes instead of hair, medusas are best known for their petrifying gazes that—if lingered upon—can permanently transform mortals to stone. Medusas are shrewd and manipulative adversaries who collect and covet secrets, and who use threats and guile to exploit the fears of weaker creatures. A medusa may seek out powerful magic items, use divining magic to discover secret knowledge and unlock forbidden power, or infiltrate a society to beguile influential politicians. Their ability to worm their way into powerful organizations makes them natural leaders of criminal outfits and thieves' guilds, and their interest in magical phenomena leads some to pursue careers as oracles who offer to help adventurers find what they seek—for a price. Of course, if wit and deception prove insufficient, a medusa can always simply turn rivals into ornate stone decorations with little more than a glare. Many medusas build elaborate lairs to call home, often decorated with the statues of their foes turned into macabre trophies on prominent display.\nExceptionally agile and surprisingly hardy, a medusa rarely backs down from a conflict, even when cornered. Many adventurers who thought themselves readied to resist the effects of a medusa's gaze have nevertheless fallen to a medusa, as these creatures are also often deadly archers able to riddle their foes with venom-coated arrows from a distance. Still, a medusa may barter for their life if no alternatives remain, and the secrets carried by these powerful villains often make it more than worth sparing their lives.",
      "armorClass": 25,
      "hitPoints": 105,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 4,
        "int": 2,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "deception": 16,
        "diplomacy": 14,
        "stealth": 16
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
          "id": "z9bTah65DoASEDhP",
          "name": "Shortsword",
          "bonus": 18,
          "damage": "1d6+8 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "ltvMN7K0itu2l3WZ",
          "name": "Snake Fangs",
          "bonus": 16,
          "damage": "1d4+8 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "F8wXzsUNliJVU8bv",
          "name": "Composite Shortbow",
          "bonus": 19,
          "damage": "1d6+7 piercing",
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
          "id": "SaMUZistsZa0Bskd",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zGXZKhk95VPsSdKN",
          "name": "Biting Snakes",
          "kind": "reaction",
          "description": "Trigger A creature ends its turn adjacent to the medusa.\nEffect The medusa makes a snake fangs Strike against the creature."
        },
        {
          "id": "hSGaU1UT8mzmPFWl",
          "name": "Petrifying Gaze",
          "kind": "passive",
          "description": "30 feet.\nWhen a creature ends its turn in the aura, it must attempt a check (fortitude, dc:25, options:area-effect,inflicts:slowed) save. If the creature fails, it becomes Slowed 1 for 1 minute.\nThe medusa can deactivate or activate this aura by using a single action, which has the concentrate trait."
        },
        {
          "id": "2lGYb3ZO8pwxgMhD",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The medusa fixes their glare at a creature they can see within 30 feet. The target must immediately attempt a check (fortitude, dc:25, options:inflicts:slowed,inflicts:petrified) save against the medusa's petrifying gaze.\nIf the creature was already Slowed by petrifying gaze before attempting its save, a failed save causes it to be Petrified permanently. After attempting its save, the creature is then temporarily immune until the start of the medusa's next turn."
        },
        {
          "id": "FuDdgAP7wwq6LCFO",
          "name": "Serpent Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d6[poison] damage and Enfeebled 2 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:stegosaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qtJ36jlcRQw5sBnr",
      "slug": "stegosaurus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:63b3d4de47baf4e14433c559ee3e6fe958dd483e887a22f8fb12f40a54d3abe1",
    "translatableHash": "sha256:07ce0894416b1a78777e1aed0522de8c3c638d167aef6342cbb3bc1259e3a65b",
    "data": {
      "schemaVersion": 1,
      "name": "Stegosaurus",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "The stegosaurus is easily recognized by its twin rows of diamond-shaped dorsal plates that run down its spine and thick tail adorned with four large spikes. This configuration protects the herbivore, the plates deflecting attacks while it gores predators with its tail.\nThe stegosaurus is generally even-tempered and gentle, despite its size. This combination makes it even more popular as a trained pet or guard, but even then one should take care to not annoy the dinosaur—an angry stegosaurus can lash out with little warning.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 23,
      "hitPoints": 125,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 13
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 20
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Lt7N9rIlyS76DtRj",
          "name": "Tail",
          "bonus": 18,
          "damage": "2d8+9 piercing",
          "traits": [
            "reach-15",
            "sweep"
          ]
        },
        {
          "id": "VbE9aK6V1gA4Fbv9",
          "name": "Foot",
          "bonus": 18,
          "damage": "2d6+9 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "sSd80IXHhedyt6q5",
          "name": "Dorsal Deflection",
          "kind": "reaction",
          "description": "Trigger The stegosaurus is targeted with a melee attack.\nEffect The stegosaurus leans its dorsal plates into the attack, gaining a +2 circumstance bonus to its AC against the triggering attack. If the attack misses, the stegosaurus Steps after the attack."
        },
        {
          "id": "GoUIra7KXFd9kUhH",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, foot, check (reflex, dc:25, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:aesra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Re7B1kEJMFlgpaSc",
      "slug": "aesra",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a233380c14f8bd94748f3d6bec1f7b770b69a6f440802d95f37e40947a8a9a51",
    "translatableHash": "sha256:4b778a4f7531dabd1d630efeee58ac9a40c4ef4185ab13527e787486978cd0bd",
    "data": {
      "schemaVersion": 1,
      "name": "Aesra",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "archon",
        "celestial",
        "holy"
      ],
      "description": "Despite their flaming blades and ring of unblinking eyes, aesras are the diplomats of peace among the archons, preferring justice via compromise and mutual benefit rather than justice by the sword. Nonetheless, when forced to fight against fiendish powers aesras don't hesitate in battle, mounting offensives under divine commanders like Iomedae.\nArchons are guardians of Heaven and enemies of corruption. Before gods and their servants set foot in the celestial planes, archons already resided in Heaven, the original inhabitants of the realm. Upon meeting, the archons and divine angels quickly discovered they were of a kind, holding justice and righteousness in their hearts. An alliance was formed, and archons now serve as stalwart allies to all celestials and mortals they find worthy.\nWhile the first archons coalesced from the immense seven-tiered mountain of Heaven, they choose willing and worthy Heaven-bound souls to join their ranks. These mortals hear and answer the call of a mysterious voice, manifesting in the Garden at the mountain's peak. There they swear to forever serve the cause of justice and transform into their new archon forms.\nThough deeply concerned with defending mortal life and willing to sacrifice themselves in battle against fiends, archons often feel rote and inscrutable to others, and their forms can border on frightening and bizarre. For this reason, they often have issues with interacting with mortals, or with the free spirited azatas. Despite this, archons draw great strength from others, especially those who exemplify virtue.\nBeyond their celestial allies, archons also maintain ancient ties with aeons. The inscrutable factions can still be seen working together to defend longforgotten secrets and enforce rules that predate mortal life. Archons explain these missions as necessary without further elaboration, leaving even their angelic allies frustrated with archons' obstinance.",
      "armorClass": 27,
      "hitPoints": 100,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 15
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 13,
        "arcana": 14,
        "diplomacy": 16,
        "intimidation": 16,
        "religion": 13,
        "survival": 14
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
          "fire 15"
        ],
        "weaknesses": [
          "unholy 10"
        ]
      },
      "attacks": [
        {
          "id": "1RThW68qrsUA5hLy",
          "name": "Flame of Justice",
          "bonus": 18,
          "damage": "1d6 fire; 2d10+5 slashing",
          "traits": [
            "holy",
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "V2yYPZTHL77LPrCc",
          "name": "Flame of Justice",
          "bonus": 15,
          "damage": "1d6 fire; 2d10+5 slashing",
          "traits": [
            "holy",
            "magical",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "bgMzAFMFBZrTFUq0",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zrzd2MnSQaeEPKE3",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Nfhmy89ewNz1QL4i",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "iKlpYbQsSDmYjlml",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0AAIPvx9DMLg0gXR",
          "name": "Archon's Protection",
          "kind": "reaction",
          "description": "Trigger An enemy damages the archon's ally and both are within 15 feet of the archon\nEffect The ally gains resistance 10 to all damage against the triggering damage and the archon can make a Strike against the enemy."
        },
        {
          "id": "szXwy7jKQaOdBPKZ",
          "name": "Flame of Justice",
          "kind": "passive",
          "description": "An aesra's spirit of righteousness manifests as a two-handed sword of fire. If disarmed or thrown as a ranged weapon, the flame of justice vanishes after landing or dealing damage and reappears in the aesra's hands again instantly. On a critical hit, the target also takes 2d6[persistent,fire] damage."
        },
        {
          "id": "IEjzsHREqESBS5Kc",
          "name": "Flaming Slash",
          "kind": "action",
          "description": "The aesra sweeps their sword, creating a @Template[cone|distance:15] of sacred flame that deals 5d6[fire|options:area-damage] damage with a check (reflex, dc:23, basic, options:area-effect) save."
        },
        {
          "id": "yD3zTKzSmxnzONfs",
          "name": "Maintain Formation",
          "kind": "passive",
          "description": "When an aesra casts Translocate, they can bring an adjacent willing archon along with them. That archon appears in an empty space adjacent to the aesra's new space."
        }
      ],
      "spellcasting": [
        {
          "id": "rrCfXF9sptxgEDBp",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "RTOvdE2FtflyR9Z1",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "dXLMVNwPYVlFMSRf",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "DC0PJ3VOreLLJwNW",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "vHFwV3PukgrPZlmL",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "VPVXtdK9ufc7gkvQ",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:skeletal-hulk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "V4rVnbjJbcOIdC4Z",
      "slug": "skeletal-hulk",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6911db62fa9d1ab3337c0fc542a30f4ab74c33d40aa4f83975ea82af7f85a209",
    "translatableHash": "sha256:7c211846d30aa6c7e273879d015d8948c43a2db649e0130a87213881e8946044",
    "data": {
      "schemaVersion": 1,
      "name": "Skeletal Hulk",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Huge giants and other enormous creatures make powerful skeletons.\nAnimated skeletons are among the most common types of undead.",
      "armorClass": 25,
      "hitPoints": 105,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 15,
        "will": 13
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 20,
        "intimidation": 15
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
          "id": "Zn0AZHlLWAhHykEg",
          "name": "Claw",
          "bonus": 18,
          "damage": "2d6+11 slashing",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HScepbVGbS75R0W3",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y1v59ZBvVAomH20U",
          "name": "Broad Swipe",
          "kind": "action",
          "description": "The giant makes two Strikes with its claw against two adjacent foes, both of whom are within its reach. Both attacks count toward the giant's multiple attack penalty, but the penalty doesn't increase until after both attacks.."
        },
        {
          "id": "TGIpZcekBlTtMIW2",
          "name": "Massive Rush",
          "kind": "action",
          "description": "The hulk Strides and makes a claw Strike with a +4 circumstance bonus to damage. If the strike hits, the hulk automatically pushes the target 10 feet."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:coarti",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "VbN33np2jBfaxhAz",
      "slug": "coarti",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:224a92d94af2cd011b537c0ed79301d516296ca7de749db3fd0d2bb407817687",
    "translatableHash": "sha256:b612d6cb71272f9b5f342e94da06cf2d5b176d1279e4ec4996886427310aa127",
    "data": {
      "schemaVersion": 1,
      "name": "Coarti",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "The burning-winged coartis are marked by the onerous contracts they agreed to and bound to Hell by the machinations of a legalistic devil, usually a phistophilus. Some coartis are truly a type of fallen celestial, those trapped in horrible agreements for the greater good or due to grievous errors in judgment, but most arise from mortal souls that were on the path to become celestials yet were contractually bound to Hell. Coartis serve in public roles as messengers and personal attendants to demonstrate the power of Hell and the legal acumen of their corruptors.\nCelestials universally pity coartis and despise their creators, but their preferred methods of dealing with the corrupted beings differ. While angels argue against lost cases in Pharasma's courts, seeking loopholes in the voluminous contracts, azatas scheme daring heists against the contract storehouses. Archons are the most direct, working to end their blighted lives.\nMasters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks.\nEvery devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly orts perform subservient labor to more powerful and specialized devils, such as infantry and contract devils, while the greatest nessaris command entire infernal armies.\nAsmodeus stands at the apex of the structure he created, but the layers below him are marked by a constant jockeying for position. Most diabolic plans ultimately serve to improve the schemer's place in the hierarchy.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 4,
        "dex": 6,
        "con": 2,
        "int": 3,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 15,
        "deception": 17,
        "religion": 17
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
          "physical 5 except silver",
          "poison 5"
        ],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "kiNrCkfqHnUJgpgZ",
          "name": "Morningstar",
          "bonus": 18,
          "damage": "1d6+10 bludgeoning; 1d6 spirit",
          "traits": [
            "magical",
            "unholy",
            "versatile-p"
          ]
        },
        {
          "id": "eHcwPmNXaKUiGwUl",
          "name": "Wing",
          "bonus": 17,
          "damage": "1d6 fire; 1d6+7 bludgeoning",
          "traits": [
            "agile",
            "unholy",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "EVu8GIrwN7js4RwE",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "rR8LksPD2AC2FzmT",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NJle2eLdaECJP1zj",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kpMzQN5S45cvA2gB",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AqDp2RMfy7tCDCp9",
          "name": "Blood Contract",
          "kind": "passive",
          "description": "When the coarti takes damage from their holy weakness, blood flows freely from their eyes and the contract carved into their skin. They take 1d6[persistent,bleed] damage and are Dazzled as long as the persistent damage continues, but their Despairing Shriek recharges."
        },
        {
          "id": "DGplrJSHJTuOChkx",
          "name": "Despairing Shriek",
          "kind": "action",
          "description": "The coarti lets out a terrible cry, dealing 4d6[sonic|options:area-damage] damage to all creatures in a @Template[emanation|distance:30] with a check (will, dc:25, basic, options:area-effect) save. Holy creatures that fail this save are also Frightened 2; this added effect has the emotion, fear, and mental traits.\nThe coarti can't use Despairing Shriek again for [[/gmr 1d4 #Recharge Despairing Shriek]]{1d4 rounds}."
        },
        {
          "id": "pMNYKooksBaxnGND",
          "name": "Wing Snap",
          "kind": "action",
          "description": "Frequency once per turn\nEffect The coarti makes two wing Strikes, then falls if it's flying. It can't Fly until the end of its turn."
        }
      ],
      "spellcasting": [
        {
          "id": "2mKGg7ySCAkM9S33",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "Z360JnlJkZaMXJ8J",
              "name": "Darkness",
              "rank": 4
            },
            {
              "id": "4iDW62MHu5dB6921",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "uhfCEwfrsrn3pavt",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:jabali",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "WDBGcfNArKSpN7z0",
      "slug": "jabali",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3a2b3f4d34fd0a844f0327fceabc5d566c36e10e9922b492a1da5c514176bdec",
    "translatableHash": "sha256:58827d4978ac06e959fb12c66f6c36676d58d5ca56680fe4ec17cff919187787",
    "data": {
      "schemaVersion": 1,
      "name": "Jabali",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "earth",
        "elemental",
        "genie"
      ],
      "description": "The proud and brazen jabalis of the Plane of Earth value physical skill and love bargaining, games of chance, and working with metal and stone.\nBefore mortal history, genies were some of the first creations of the cosmos to possess free will. Formed of elemental matter, they traversed the Universe and the six elemental planes of air, earth, fire, metal, water, and wood. The genies who remained on each elemental plane found their matter replaced with those elements. Genies of metal and wood appear in Pathfinder Rage of Elements.\nGenie Shuyookhs\nOlder, wiser, and more powerful genies possess greater power and are revered with the title of shuyookh (typically adjusted to \"sheikha\" if the genie is female or \"sheikh\" for a male). Generally at least 5 levels higher than a typical example of their kind, a shuyookh gains additional spells. The basics of shuyookhs appear here in sidebars and are detailed further in Rage of Elements.\nThe most wondrous of their powers is their ability to grant wishes three times per year. This is not an innate ability but a ritual practice passed down over time in an attempt to replicate the wish-granting abilities of janns.",
      "armorClass": 25,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 4,
        "int": 3,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 19,
        "crafting": 14,
        "deception": 16,
        "nature": 15,
        "society": 14
      },
      "languages": [
        "common",
        "petran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "8B4xwRLas4rp2NnR",
          "name": "Falchion",
          "bonus": 20,
          "damage": "1d10+12 slashing",
          "traits": [
            "forceful",
            "magical",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "zxrTBcJcqEnRKZyA",
          "name": "Fist",
          "bonus": 19,
          "damage": "1d4+12 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "gxq2qiGUPuQ5wCW9",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "fctwwJ6S2jeNgFwD",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ztr88bB5WvLP8Ykt",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "The jabali can Burrow through dirt and stone at its full burrow Speed, leaving no tunnels or signs of its passing."
        },
        {
          "id": "d8HnQHeqQlzrKyFt",
          "name": "Stone Clutch",
          "kind": "passive",
          "description": "When the jabali Pushes a creature into a stone barrier, the surface grips it with fingers of stone. The target must succeed at a check (reflex, dc:22) save or become Grabbed by the surface ([[/act escape dc=28]])."
        },
        {
          "id": "pV2kE2wYrZjLyBiR",
          "name": "Push 10 feet",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "vgW6UmniZ0N09eeE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "Ua4Khu52dxBq42sM",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "IsERU8I2n8sZhbmW",
              "name": "Shape Stone (At Will)",
              "rank": 4
            },
            {
              "id": "lUL0CHNxkIIdGR0G",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "7OesZUoZBPIrmFrL",
              "name": "Wall of Stone",
              "rank": 5
            },
            {
              "id": "BHo40spxmEC4gZmk",
              "name": "Interplanar Teleport (to Astral Plane, Elemental Planes, or the Universe only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:lamia-matriarch",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "0qaGLx8ads9blcfS",
      "slug": "lamia-matriarch",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fb1d22772982d0cb648f598e08feacd8e6c08b28c2fbd0760882667ceb650597",
    "translatableHash": "sha256:09d700c42d856abad43cc54304b16b64af55b67335b1a0fec8a2c20562df8236",
    "data": {
      "schemaVersion": 1,
      "name": "Lamia Matriarch",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "humanoid"
      ],
      "description": "The brilliant and powerful lamia matriarchs possess boundless ambition, always seeking to bring more people and territory into the clutches of their kind. Consequently, they become rulers of other lamia. For all their cruelty toward other creatures, they're fierce protectors of other lamia, and consequently, they quickly come to rule cults or warbands. Regardless of the lamia's gender, these ascended lamias are always known as matriarchs. A lamia matriarch is set apart from their kindred by the occult power they pursue, and some have even had grand designs to break the animalistic curse that transformed them. However, every attempt so far has led to the matriarch's fall.\nLamias are bloodthirsty victims of an ancient curse for which they blame the gods. Most lamias are humanoid from the waist up but have the lower bodies of serpents. Sinister magic comes naturally to a lamia, and they prefer the use of illusions to deceive prey for later consumption, or simply to torture.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 18,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": 3,
        "wis": 3,
        "cha": 6
      },
      "skills": {
        "athletics": 18,
        "deception": 20,
        "diplomacy": 20,
        "intimidation": 18,
        "occultism": 17,
        "stealth": 16,
        "survival": 13
      },
      "languages": [
        "chthonian",
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "controlled"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "NBwQlH8AscMgK3TC",
          "name": "Scimitar",
          "bonus": 19,
          "damage": "2d6+10 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "aIqWT8KUlYwUY9x2",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "RHsGeVOoFFoGYyZ1",
          "name": "Change Shape",
          "kind": "action",
          "description": "The lamia matriarch can take on the appearance of a Medium humanoid. This doesn't change their Speed or their attack and damage modifiers with their Strikes, but it does prevent them from using their cursed touch. Each lamia matriarch has a fixed humanoid form that resembles their upper torso when in their true form. This is the only humanoid form they can adopt using this ability."
        },
        {
          "id": "PycbJPVh46UXYc9R",
          "name": "Matriarch's Caress",
          "kind": "action",
          "description": "The lamia matriarch touches a creature, who must succeed at a check (will, dc:28) save or become Stupefied 2 (Stupefied 4 on a critical failure). If the target fails additional saves against this ability, the condition value increases by 1 (increases by 2 on a critical failure, to a maximum of Stupefied 4). This condition value decreases by 1 every 24 hours."
        },
        {
          "id": "TyonmqwWHejYuBAN",
          "name": "Scimitar Storm",
          "kind": "action",
          "description": "The lamia matriarch makes a scimitar attack against each enemy within reach. Each attack counts toward their multiple attack penalty, but the penalty does not increase until after all the attacks. The first enemy they damage is subject to Matriarch's Caress."
        }
      ],
      "spellcasting": [
        {
          "id": "S32QCqZ8XlolYIfE",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "nTo00lpX6OiFrdKO",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "ghobcS1Fu5o6wDo8",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "QkfbFW865cnFI3HV",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "jIfXHnpOc1tFlReK",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "1k7hUgElzrdjb1tr",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "XoMcvMSnIBTe7LtW",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "6UBm7QfZ5WnZgCJr",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "gMOXHP61rN8vURN9",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "gCxQYxcGgimckhiB",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "MRHCxJXDvy7kJhkw",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "pn0e4by5iv7QW0Ob",
              "name": "Illusory Creature",
              "rank": 2
            },
            {
              "id": "iuTTERyQ69ITHoI2",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "iSM9qHxUyH2vKQ3G",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "yU7a3dl5O5MW1rAX",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "3YHSTWmHJbLnho04",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "fsOzKIyOiItOIt82",
              "name": "Mind Reading",
              "rank": 3
            }
          ]
        },
        {
          "id": "LfvR6qODwUM0OxAB",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "CMeCQrhGto6e8KFb",
              "name": "Ventriloquism (At Will)",
              "rank": 1
            },
            {
              "id": "iGzG561MFMosduYI",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "6GxNeMKadhnSQa6b",
              "name": "Illusory Disguise (At Will)",
              "rank": 2
            },
            {
              "id": "z4wuFZXT6O7ZpC4m",
              "name": "Illusory Object (At Will)",
              "rank": 2
            },
            {
              "id": "ZarkPmaa3moN1mhN",
              "name": "Sleep",
              "rank": 3
            },
            {
              "id": "7DTAqseQMKiG4Khq",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "u5sOQf9eDIyK5AyT",
              "name": "Suggestion",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "5lbXQ6MSn4AndglU",
      "slug": "horned-dragon-young",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3c65c5d80e091c0b76cafe6830975cad89486167cf592fe4e89046918e0671ad",
    "translatableHash": "sha256:d0a8fdc09378f614db6669a95bdebc411f12b67514f7505f1acd8bec5910e9b8",
    "data": {
      "schemaVersion": 1,
      "name": "Horned Dragon (Young)",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 28,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 16,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 13,
        "arcana": 16,
        "athletics": 17,
        "deception": 14,
        "diplomacy": 16,
        "intimidation": 16,
        "nature": 14,
        "occultism": 17,
        "society": 14,
        "stealth": 15
      },
      "languages": [
        "common",
        "draconic"
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
          "bonus": 20,
          "damage": "2d10+8 piercing; 2d4 poison",
          "traits": [
            "magical",
            "poison",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "zLSUNYt5ukMkU9zC",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d8+8 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "BWkGmIVrerzvJg6A",
          "name": "Tail",
          "bonus": 18,
          "damage": "2d8+7 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "zgg5I2ssn7V4bFRq",
          "name": "Horn",
          "bonus": 18,
          "damage": "1d12+7 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HJiQ5csE8Zk6bsoQ",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:24, options:area-effect,inflicts:frightened)"
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
          "description": "The dragon breathes a toxic cloud that deals 9d6[poison|options:area-damage] damage in a @Template[cone|distance:40] (check (fortitude, dc:25, basic, options:area-effect) save).\nThey can't use Poison Breath again for [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "m9dIszotbO8vukOI",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "fZbXpVIUqe3JYgab",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "lgDxJmtHFjvOF0sM",
              "name": "Entangling Flora",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:axiomite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "7v1gykqjBO1YHDfu",
      "slug": "axiomite",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f9530f850f92a9964d1b5926c3568756a687a82db73246371302684c198acb17",
    "translatableHash": "sha256:c3e523b887f486536b1eef5ede6dc27f37316cb380ee69e2c2fbac510bf5dd49",
    "data": {
      "schemaVersion": 1,
      "name": "Axiomite",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aeon",
        "monitor"
      ],
      "description": "According to axiomites, their kind rose from the raw mathematical underpinnings of the universe, manifesting as great builders who created the ancient, colossal cities of the Outer Planes. According to aeons, axiomites are part of the Monad, having both risen from and rebelled against it long ago. Since the Convergence, most axiomites have recognized this as a fundamental truth, particularly after the aeons showed the axiomites how the Utopian language has formed as an amalgam of aeon envisioning and formulaic mathematical expression. Most axiomites live in the perfect city of Axis, which they continually act to improve, thus refining the concept of perfection itself.\nA particular axiomite may look like any humanoid creature, though the particular form it takes on does not affect its abilities. Beneath this assumed form, all axiomites are the same—clouds of glowing, crystalline dust that constantly swirl and congeal into complex tangles of symbols and equations, evincing axiomite existence as literal creatures of pure mathematical law.\nAxiomites arise from the souls of mortals fascinated with the underpinnings of their Universe, particularly those who were, in life, mathematicians, architects, crafters, or philosophers. While these souls do not retain any memories of their lives in the transition into axiomites, their life skills and experiences nevertheless serve as a valuable metaphysical resource during formation.\nAeons have always been the caretakers of reality and defenders of the natural order of balance. Each type of aeon takes on some form of duality in its manifestation and works either to shape the multiverse within the aspects of this duality in some way, or to correct imbalances to the perfect order of existence. Aeons' machinations can raise a nation, raze it, or restore it from ruin. Their reasons are their own, and they rarely share their motivations with others—through their strange envisioning mode of communication, they simply create the results they insist are necessary to maintain the balance of the multiverse.\nAs a result of recent shifts in reality, aeons have begun to reassert a presence in the perfect planar city of Axis. To aeons, this is merely the latest in a recurring cycle, albeit one that mortals have not yet borne witness to. Aeons have a name for this cyclic return, in which they welcome their industrious axiomite brethren back to their fold: the Convergence. At the onset of the Convergence, a council of pleroma aeons appeared in the Eternal City of Axis, where they revealed that axiomites were wayward aeons, split off long ago to pursue the act of creation. With the latest cycle of change, it was time for axiomites—and their mortal creations and kin—to rejoin the aeon cause. While most axiomites fell in line, realizing perhaps on a fundamental level of reality that what the aeons said was the truth, some refused to heed the call and waited for the wrath of the aeons. That wrath has yet to come. The dual-natured aeons have responded to those who have declined in confusing ways. With some they treat and even bargain, while a handful of others they have destroyed, and a few have been exterminated by the axiomites. But most of these quiet insurgents they leave alone, allowing these axiomites to continue to create in peace. How—or if—this Convergence will end is as little understood as aeons themselves.",
      "armorClass": 26,
      "hitPoints": 155,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 16,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 5,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "acrobatics": 16,
        "crafting": 21,
        "diplomacy": 15,
        "occultism": 17,
        "religion": 17
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
        "draconic",
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
          "electricity 10",
          "mental 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2vkb6KDhuhqgqrlz",
          "name": "Warhammer",
          "bonus": 20,
          "damage": "2d8+11 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "HUT5houFl0hCEPKU",
          "name": "Fist",
          "bonus": 17,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "4eTyCDQcsGEifamr",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "goSE2P0nlOvFsVEH",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "WYRi6VyNroGIrEk6",
          "name": "Crystalline Dust Form",
          "kind": "action",
          "description": "The axiomite shifts their form to a cloud of crystalline dust in which strange symbols and equations flash.\nThey gain a fly Speed of 40 feet and can fit through even tiny apertures, similar to vapor form. They can cast spells but can't make melee or ranged attacks.\nThe axiomite can Dismiss this form to return to humanoid form."
        }
      ],
      "spellcasting": [
        {
          "id": "kCfoRidunIYcTXeZ",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 27,
          "spells": [
            {
              "id": "lDUP6SW3cgbZWjCh",
              "name": "Sure Strike (At Will)",
              "rank": 1
            },
            {
              "id": "i9gtoIMUAdJlvr6B",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "Ry593KVwsxkFHkHG",
              "name": "Telekinetic Maneuver",
              "rank": 2
            },
            {
              "id": "oX1uTc2SegaNZqqe",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "QQErSMDPrCdEZLBI",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "rgFud1TImGoUg4Wd",
              "name": "Dispel Magic",
              "rank": 4
            },
            {
              "id": "3gaNtYIjAZV7CvKS",
              "name": "Lightning Bolt",
              "rank": 4
            },
            {
              "id": "06JmDpAoEuu9SWrW",
              "name": "Telekinetic Haul",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:chimera",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bVn0EUj4xrOWjtna",
      "slug": "chimera",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc2df3ffbd5f0bd30e73f7207dd0bb1feec5f07701c98b2afa90d7b99311684d",
    "translatableHash": "sha256:e2b19b9883c0d9c548917f594736105a14f879b9d8e8966092c6c878dd26a664",
    "data": {
      "schemaVersion": 1,
      "name": "Chimera",
      "level": 8,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "The chimera is the archetypal example of an unnatural monster made up of a monstrous mix of wildly different component creatures: in this case, a lion, a dragon, and a goat. Wild, hateful, and hungry, it tries to eat any creature it sees, but sometimes a strong-willed master is able to compel a chimera to serve as a guardian or even a mount. If such an individual ever loses their control over the chimera, they are often the first to be devoured.",
      "armorClass": 27,
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
        "fortitude": 18,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": -3,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 18,
        "stealth": 18
      },
      "languages": [
        "draconic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "p4gHmixTKN3Gb87J",
          "name": "Dragon Jaws",
          "bonus": 20,
          "damage": "2d6+9 piercing",
          "traits": []
        },
        {
          "id": "XfQQjjOdt5sRiSb6",
          "name": "Lion Jaws",
          "bonus": 20,
          "damage": "2d10+9 piercing",
          "traits": []
        },
        {
          "id": "rog22HpLDkUnfolA",
          "name": "Goat Horns",
          "bonus": 20,
          "damage": "2d10+9 piercing",
          "traits": []
        },
        {
          "id": "sT4lUsg0seVtpUKQ",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d6+9 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "PQMwXaG8Zqcd02Oe",
          "name": "Multiple Reactions",
          "kind": "passive",
          "description": "A chimera gains 2 extra reactions each round that it can use only to make Reactive Strikes. It must use a different head for each reaction, and it can't use more than one on the same triggering action. If it loses one of its heads, it also loses one of these extra reactions."
        },
        {
          "id": "1LK2Wok9y4sfCTR4",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "7CQGpLGBAg2Jbtjv",
          "name": "Three Headed",
          "kind": "passive",
          "description": "Any ability that would sever a chimera's head (such as a critical hit with a Vorpal Weapon) severs one head at random. Losing a head doesn't kill a chimera (as long as it has one head left), but it does prevent it from making Strikes with the lost head or using the head's Dragon Breath."
        },
        {
          "id": "8PkUYYXKF3YdJiBM",
          "name": "Draconic Bite",
          "kind": "passive",
          "description": "A chimera's dragon head deals an extra 2d6[untyped] damage of a type matching the damage dealt by its Dragon Breath."
        },
        {
          "id": "9RDkmFyfywWSOj2V",
          "name": "Dragon Breath",
          "kind": "action",
          "description": "The chimera breathes a cone or line that deals 9d6 damage to all creatures in the area (DC 26 basic save of a type indicated below). The chimera's dragon head is linked to one of the traditions of magic, which determines the area of its Dragon Breath, the type of damage it deals, and the type of save to avoid it. This ability gains the related traits.\nThe chimera can't use Dragon Breath again for [[/gmr 1d4 #Recharge Dragon Breath]]{1d4 rounds}.\n• Arcane @Template[line|distance:60] of 9d6[force|options:area-damage]{force} (check (reflex, dc:26, basic, options:area-effect))\n• Divine @Template[line|distance:60] of 9d6[spirit|options:area-damage]{spirit} (check (reflex, dc:26, basic, options:area-effect)); this ability can also have the holy or unholy trait\n• Occult @Template[cone|distance:30] of 9d6[mental|options:area-damage]{mental} (check (will, dc:26, basic, options:area-effect))\n• Primal @Template[cone|distance:30] of 9d6[acid|options:area-damage]{acid}, 9d6[cold|options:area-damage]{cold}, 9d6[electricity|options:area-damage]{electricity}, 9d6[fire|options:area-damage]{fire}, or 9d6[sonic|options:area-damage]{sonic} (check (reflex, dc:26, basic, options:area-effect)); or 9d6[poison|options:area-damage]{poison} (check (fortitude, dc:26, basic, options:area-effect))"
        },
        {
          "id": "pEpgPRttHusG3elF",
          "name": "Three-Headed Strike",
          "kind": "action",
          "description": "The chimera makes a Strike with its dragon jaws, lion jaws, and goat horns, each at a -2 penalty and targeting a different creature. These Strikes count as only one attack for the chimera's multiple attack penalty, and the penalty doesn't increase until after it has made all three attacks."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "DQbHmsmYuodcQ2KC",
      "slug": "conspirator-dragon-young",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:25f448842cdfd53973068a3a11f10407e600571588c7d081792c19c28a7701fa",
    "translatableHash": "sha256:2c190fe2da55f9f934980fd13f22f7d96321884c6f877dc1c15f49d6ba1cf23b",
    "data": {
      "schemaVersion": 1,
      "name": "Conspirator Dragon (Young)",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Hidden among the shadows and upper echelons of society are the conspirator dragons. These dragons are schemers, always looking to manipulate and control others, either for personal gain or simply for the thrill of watching their machinations play out. Conspirator dragons see themselves above others and typically speak with infantilizing tones and words. However, as most conspirator dragons meet others while in disguise, they do their best to maintain their disguise.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 16,
        "deception": 18,
        "diplomacy": 18,
        "intimidation": 16,
        "occultism": 16,
        "performance": 18,
        "society": 16,
        "stealth": 16
      },
      "languages": [
        "common",
        "draconic",
        "shadowtongue"
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
          "bonus": 19,
          "damage": "2d8+8 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "aHZHZh4OikvB5foL",
          "name": "Claw",
          "bonus": 19,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "WYzVKov6bCQKHrul",
          "name": "Tail",
          "bonus": 17,
          "damage": "1d10+8 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "ece3eTIYzV4ZCJsH",
          "name": "Mental Blast",
          "bonus": 18,
          "damage": "3d6+3 mental",
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
          "id": "52gsYUMBdioNCyzU",
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
          "description": "Requirements The dragon is wearing their conjured disguise\nEffect The dragon erupts from the disguise, destroying it. The explosive revelation deals 9d6[bludgeoning|options:area-damage] damage to creatures in a @Template[emanation|distance:5] with a check (reflex, dc:26, basic, options:area-effect) save. A creature that fails its save is Dazzled for 1 round as it becomes covered in scraps from the disguise.\nAny creature sharing a space with the dragon after they erupt is pushed into the nearest empty space."
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
          "description": "The dragon unleashes a noxious cloud of smoke that deals 7d6[poison|options:area-damage] damage in a @Template[cone|distance:40] (check (fortitude, dc:26, basic, options:area-effect) save). The smoke remains for 1 minute. This has the effects of Mist, except it fills the cone's area.\nThe dragon can't use Smoke Breath again for [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rounds}."
        },
        {
          "id": "lhnqwfK5RkPmG7XJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 2d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "vMzkI80zGmPn011P",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "PVV9ShzfXdXEEjmV",
              "name": "Charm (At Will)",
              "rank": 1
            },
            {
              "id": "f1w810kyYTf8IT2y",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "WuqqgROOGcJWKepq",
              "name": "Mind Reading (At Will)",
              "rank": 4
            },
            {
              "id": "kJfHKnZbhbgRt7Yx",
              "name": "Rewrite Memory",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:krooth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "f15mNNhOT3aq66VQ",
      "slug": "krooth",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8fa4cf8ba4a711e22f1552806986c290117efce2fcaaf25352bff97e76f9f79c",
    "translatableHash": "sha256:91d5946b23a287354e2712e113b243229463a85a477b8d16b618ba59b09a9bd7",
    "data": {
      "schemaVersion": 1,
      "name": "Krooth",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "animal"
      ],
      "description": "Krooths, sometimes called crocodile eaters, are fast and vicious hunters of bogs and wetlands. While they are known to hunt and eat crocodiles, alligators, and virtually any creature with flesh, their favorite prey are lizardfolk, boggards, and dinosaurs.\nKrooths are found alone or in packs. Male krooths are solitary and territorial creatures—fierce, bold, and bloodthirsty. Female krooths, on the other hand, are more likely to shy away from potential predators but swiftly turn violent when their brood is threatened. Because their offspring are so vulnerable, female krooths gather in packs to raise their young, sending smaller groups to hunt for food while the rest of the pack watches the brood. Krooths mate only once every 4 or 5 years, and the mating process is a curiously gruesome spectacle. An entire pack of females will hunt as a group for a lone male krooth, claiming their prize in a frenzy that can last for an entire day and night. After the mating has finished, the females slay their mate and devour his nutrientrich flesh, and his organs in particular. These organs contain a unique chemical compound vital to gestation. Many naturalists will pay handsomely for the fresh remains of a male krooth so they can study the strange properties of the creature's blood and organs. In addition, krooths have poisonous, hollow teeth. When these creatures bite their prey, a tooth breaks off and causes the victim to bleed profusely as their blood pours through the hollow tooth.\nWhether male or female, krooths seem to be repelled by goblinoid flesh, especially that of bugbears. This doesn't mean krooths won't kill goblinoids, especially those threatening their young, but they typically do so using only their claws and tails, and they take great care to clean themselves thoroughly after such a killing.",
      "armorClass": 26,
      "hitPoints": 150,
      "speedFeet": 40,
      "perception": {
        "modifier": 16,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 6,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 18,
        "stealth": 18,
        "survival": 17
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "fQiZcSYvDH1xIFor",
          "name": "Jaws",
          "bonus": 20,
          "damage": "2d12+9 piercing",
          "traits": [
            "deadly-d10",
            "poison",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "eUjlMs7XKcwlCfZQ",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d8+9 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "lYpvPmdtgwwrvYGd",
          "name": "Tail",
          "bonus": 20,
          "damage": "2d8+9 piercing",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "LBCwTLpo7BDaFfpf",
          "name": "+4 Status to All Saves vs. Fear",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qY4Gqits5ZaytjDY",
          "name": "Pain Frenzy",
          "kind": "passive",
          "description": "Whenever the krooth is damaged by a critical hit, it gains a +2 status bonus to attack and damage rolls until the end of its next turn. It can't use reactions while this frenzy lasts.\nEffect: Pain Frenzy"
        },
        {
          "id": "btUdbKUPEnbC6sjL",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "abEaFObv46UrcGMU",
          "name": "Aquatic Ambush",
          "kind": "action",
          "description": "40 feet"
        },
        {
          "id": "QRArjmTp1QFxOrMG",
          "name": "Poison Tooth",
          "kind": "action",
          "description": "Requirements The krooth damaged a creature with its jaws on its most recent action this turn;\nEffect The krooth snaps off one of its teeth in the creature it hit. The creature takes 1d6[bleed]{1d6 persistent bleed damage} and is Drained 1. Neither can be healed while the tooth remains.\nRemoving the tooth safely requires a successful check (medicine, dc:26, traits:action:administer-first-aid) check to Administer First Aid. Instead of ending bleeding or stabilizing, this removes the tooth and the drained condition, but it doesn't automatically end the bleed damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:charnel-creation",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "GUjtk2h6Yj0NKifF",
      "slug": "charnel-creation",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4a508c287b451e0ef665c2fa3c9973970830a648c1d99874f24f8f7b941ecc11",
    "translatableHash": "sha256:99159ecdf745a1a30f8ab24c5cd7bacaeab8a6b58d6f51c9d231f7542f15c182",
    "data": {
      "schemaVersion": 1,
      "name": "Charnel Creation",
      "level": 8,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Made of odd scraps of skin and muscle, a charnel creation is a grotesque parody of life. Though it has no mind, it can still go into a berserk rage when harmed, giving it a faint semblance of emotion. These constructs are often fashioned to guard the secret laboratories, unhallowed funerary grounds, and bloody charnel houses of fleshwarpers and necromancers who feel no compunctions about desecrating corpses for their own ends. Though the first charnel creation is believed to have been a misguided attempt to create life from simple base elements, these monstrosities are far from human. In isolated cases, echoes of a personality might rise in a charnel creation if the brain used as part of its construction belonged to a particularly powerful personality, but such tragic instances are (thankfully) rare in the extreme.",
      "armorClass": 26,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 14,
        "will": 15
      },
      "abilities": {
        "str": 5,
        "dex": -1,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 19
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [
          "physical 5 except adamantine",
          "spells 5 except fire"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "k1kPrQ3Krhcipl4E",
          "name": "Fist",
          "bonus": 20,
          "damage": "2d10+7 bludgeoning",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "95kvqPPSJNio8vAK",
          "name": "Berserk",
          "kind": "passive",
          "description": "A severely damaged charnel creation has a chance of going berserk. If it has 40 or fewer HP at the start of its turn, the creation must succeed at a check (flat, dc:5) or go berserk. A berserk creation wildly attacks the nearest living creature, or the nearest object if no creatures are nearby. A creation loses its immunity to mental effects while berserk."
        },
        {
          "id": "m2SeB5lKyumYVumo",
          "name": "Electric Healing",
          "kind": "passive",
          "description": "Any time a charnel creation would be affected by an effect with the electricity trait, it loses any Slowed condition it has and gains HP equal to half the damage the spell would have dealt. If the creation starts its turn in an area that deals electricity damage, it gains 2d4[healing]{2d4 HP}."
        },
        {
          "id": "Hss992fc1sCOcDVo",
          "name": "Electric Reflexes",
          "kind": "reaction",
          "description": "Trigger The creation would be affected by an effect with the electricity trait and a creature is in its reach\nEffect The creation lashes out and tries to grab a nearby creature. The creation attempts an Athletics check to Grapple a creature within reach. The creature also takes 3d6[electricity] damage on a success, or 6d6[electricity] damage on a critical success."
        },
        {
          "id": "hvTnI184eIoLfwPq",
          "name": "Berserk Slam",
          "kind": "action",
          "description": "Requirements The charnel creation is berserk\nEffect The charnel creation Strikes with its fist at a –1 circumstance penalty. If it hits, it deals 1d6 extra damage and knocks the target Prone."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:desert-drake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "irl1wnfk4b83JWkY",
      "slug": "desert-drake",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fde3637a4ecb0a8372c85e0b1a84c39c67a7b423e0a2a469eda64f0ca6150922",
    "translatableHash": "sha256:ef533937bed5fee051c18507756817a825ba4fe76dc3cf1f0849b13f372f4e83",
    "data": {
      "schemaVersion": 1,
      "name": "Desert Drake",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "earth"
      ],
      "description": "These distant cousins of creatures like adamantine dragons are a pale echo that lacks their relatives' power and intelligence. Desert drakes are nonetheless dangerous ambush predators, preying upon isolated desert travelers and outposts for food and supplies. Desert drakes' scales range in coloration from rust-brown to light tan and ocher shades, mimicking the colors of the dunes they call home.\nLike frost drakes, a rampage of desert drakes often claims a huge span of territory, watching over an expanse of desert from a perch in nearby mountains or a nest among weathered ruins. Any creature visible on the surface is liable to be targeted by the drakes, especially humanoid caravans. Rampages along trade routes quickly learn to leave a member watching over each oasis for new prey. During especially lean times, the drakes will even dig out subterranean prey like ankhravs, giant scorpions, or entire nests of giant ants.\nDesert drakes are among the lightest and most compact of the drakes, though this shouldn't be mistaken for frailty. Their swooped-back horns and feather-thin wings are adapted to make burrowing as easy as possible. Indeed, a desert drake's powerful neck makes wriggling through sand and other loose scree as easy as walking for it.\nRavenous, bestial, and driven by instinct, drakes are draconic monsters who bear a fraction of the terrifying might of the primal dragons they share evolutionary roots with. While they're weaker, slower, and less inclined toward reason than dragons, drakes are nonetheless a menace to creatures and settlements around them. Their propensity for forming raiding parties—small social groups fittingly called \"rampages\"—makes them all the more dangerous; a single rampage of river drakes can quickly lay waste to a waterside village, and roving rampages of desert drakes are a plague to caravan traders.\nDrakes share a number of physical characteristics that unite them as one species despite their wide variety of habitats and abilities. For example, drakes lack forearms, leaving them with their formidable jaws and thickscaled tails to use in close combat. Most drakes would rather avoid this, however, preferring to use their magical breath to wreak havoc in wide swaths from comfortable distances while flying overhead. Finally, all drakes have small reservoirs of their ancestral draconic power that they can tap into to perform incredible feats of speed.\nDifferent species of drakes rarely come into conflict. Part of this is their distinct habitats, but drakes are open to negotiating simple agreements between rampages. This courtesy does not extend to dragonets, which drakes happily take as prey. Solitary tamed drakes are also excluded from such agreements and considered free game if their tamer isn't strong enough to protect them.\nDrake Eggs\nWhile drake hides aren't any more valuable than those of similarly sized creatures, drake eggs are prized commodities. They are used as components in powerful spells as well as eaten by various cultures, but the most common use for drake eggs is hatching and rearing drakes to serve as mounts and guardians.\nA typical drake lays a clutch of 2d4 eggs every 5 years. Eggs hatch within 3 to 6 weeks, during which time they must be kept in conditions appropriate to their natural environment, perhaps the most difficult aspect of drake husbandry. While it is generally easy for breeders to incubate the eggs of desert or jungle drakes (which require mildly warm temperatures to hatch) or river drakes (which must be submerged in running water), the eggs of flame and frost drakes require extreme temperatures in order to hatch, which can be difficult to replicate safely.\nA drake egg is an object with Hardness 3, 5 HP, and no Broken Threshold. The coloration of drake eggs varies only slightly from one species to the next. A creature must succeed at a check (nature, dc:20) check, or a relevant DC 20 Lore check, to identify the drake species of a specific egg.\nOnce a drake hatches, they imprint on the first creature that they see. A creature imprinted on in this way can use Nature to Train and Command that drake. The market price of a drake egg varies depending on the type of drake and the exact legal situation. Because drakes are dangerous and intelligent creatures, many societies do not condone the trade of drake eggs and criminalize those who engage in it.\nIt takes 2 years for a drake hatchling to grow to full size. A well-trained drake can make a fearsome mount or guardian, but many careless would-be drake trainers are devoured by their charges.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 15,
        "will": 13
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 5,
        "int": -1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 18,
        "intimidation": 13,
        "stealth": 15,
        "survival": 15
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
          "cold 10",
          "fire 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "C6VJPsP2T62aUaDR",
          "name": "Fangs",
          "bonus": 19,
          "damage": "2d12+10 piercing",
          "traits": []
        },
        {
          "id": "pMqdrNgUYaFMO0PK",
          "name": "Tail",
          "bonus": 19,
          "damage": "2d10+10 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "LzvMSUL01yhhmiux",
          "name": "Sandstorm Sight",
          "kind": "passive",
          "description": "Sandstorms don't impair a desert drake's vision; they ignore Concealment from sandstorms. They also are immune to being Dazzled or Blinded by sand or other grit."
        },
        {
          "id": "KddvbFPsHJAfqGAc",
          "name": "Wing Deflection",
          "kind": "reaction",
          "description": "Trigger The desert drake is targeted with an attack\nEffect The desert drake raises their wing, gaining a +2 circumstance bonus to AC against the triggering attack. If the desert drake is flying at the time they're attacked, they descend 10 feet after the attack is complete."
        },
        {
          "id": "y03xyojSlEvE4nQh",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The desert drake makes two Fangs Strikes and one Tail Strike in any order."
        },
        {
          "id": "AzIejcCA4nY9zlmB",
          "name": "Sandstorm Breath",
          "kind": "action",
          "description": "The desert drake spits a ball of abrasive sand with a range of 60 feet that explodes into a cloud with a @Template[burst|distance:15]. Creatures in the area take 9d6[slashing|options:area-damage] damage (check (reflex, dc:27, basic, options:area-effect) save).\nThe desert drake can't use Sandstorm Breath again for [[/gmr 1d6 #Recharge Sandstorm Breath]]{1d6 rounds}, during which the sandstorm lingers in the area. This lingering sandstorm grants Concealment to everything within it and conceals everything outside from them."
        },
        {
          "id": "W1EiRfnWuUIq6KoC",
          "name": "Speed Surge",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The desert drake Strides or Flies twice."
        },
        {
          "id": "63a8hHsiAUlNCTdu",
          "name": "Surprise Attacker",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to the desert drake."
        },
        {
          "id": "IjsncXWh3Ja5Fvdo",
          "name": "Push",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-octopus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "k5p4mRDT26DrDXPA",
      "slug": "giant-octopus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b685c3f988727d29ed867c50db20f8d73667032ae345e9798b898d851a766a12",
    "translatableHash": "sha256:da6ad46d2f876f8d92bfc07fca7ec7e0f8bc75b2b4160b69cf2ef3d8ad030c3b",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Octopus",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Giant octopuses are found in the heart of deep, dark oceans. Clever and adaptable, they hunt and devour all manner of animals. Despite growing up to 16 feet long, a giant octopus can compress its body to squeeze through small gaps as long as there's room for its beak.\nGiant octopuses favor shipwrecks, coral reefs, or underwater caverns as lairs, where they can take advantage of narrow confines for protection. Like their smaller kin, they're fond of adorning and decorating their lairs with found objects—many of which, in the giant octopus's case, are also magical weapons, shields, or works of art salvaged from sunken ships or fallen adventurers.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 15,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 20,
        "stealth": 17
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "IXWkQwpWIcMopGvV",
          "name": "Arm",
          "bonus": 20,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        },
        {
          "id": "Se0RGAQyLYAwETrV",
          "name": "Beak",
          "bonus": 20,
          "damage": "2d8+9 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "4fZp6kK5h1WOCAAq",
          "name": "Compression",
          "kind": "passive",
          "description": "A giant octopus can move through a gap at least 2 feet wide without Squeezing, and can Squeeze through a gap at least 1 foot wide."
        },
        {
          "id": "PgvThxPk7tH5CoXV",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d8+9)[bludgeoning], check (fortitude, dc:26, basic)"
        },
        {
          "id": "XK9Va6QKy2g8z1dZ",
          "name": "Giant Octopus Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26)\nMaximum Duration 6 rounds\nStage 1 2d6[poison] damage and Off-Guard (1 round)\nStage 2 2d6[poison] damage, Clumsy 1, and off-guard (1 round)\nStage 3 2d6[poison] damage, Clumsy 2, and off-guard (1 round)"
        },
        {
          "id": "jsgHC6kdtZdnAJMT",
          "name": "Ink Cloud",
          "kind": "action",
          "description": "The octopus emits a cloud of black ink in a @Template[emanation|distance:30]. This cloud has no effect outside of water. Creatures inside the cloud are Undetected and can't use their sense of smell. The cloud dissipates after 1 minute.\nThe octopus can't use Ink Cloud again for [[/br 2d6 #rounds]]{2d6 rounds}."
        },
        {
          "id": "3H0tPL2AeonSy2gM",
          "name": "Jet",
          "kind": "action",
          "description": "The octopus moves up to 200 feet in a straight line through the water without triggering reactions."
        },
        {
          "id": "coknqLEZIU2gBBH1",
          "name": "Writhing Arms",
          "kind": "action",
          "description": "The giant octopus makes up to four Strikes with different arms, each against a different target. Each attack counts separately for the octopus's multiple attack penalty, but the penalty doesn't increase the until the octopus has made all the attacks.\nIf the octopus subsequently uses the Grab action, it can Grab any number of creatures it hit with Writhing Arms."
        },
        {
          "id": "5NPT2o7xLwm4QVG0",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:xoarian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "mpkGWfPHmwAYPYJH",
      "slug": "xoarian",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:436b6d5d5e0140ff45edf329fd0697be8ac06ee5424f65db8df583950a093047",
    "translatableHash": "sha256:3dea53ad5a91e56ad3a74d546ffd57bb9b8890cd51205177d808c60dca7dcbf3",
    "data": {
      "schemaVersion": 1,
      "name": "Xoarian",
      "level": 8,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "aberration"
      ],
      "description": "The five-tentacled xoarians infiltrate many societies, although it's unclear how much of their activities are at the behest of the Dominion of the Black and how much is for their own perverse enjoyment. Known as corpse riders by Golarion scholars, little is understood of their origins beyond the suspicion that they come from a distant planet named Xoar.\nWhen a xoarian infiltrates a community, its first priority is to acquire a host body. They often choose the recently dead for this role, as murdering a living host could draw unwanted attention. When the aberration compresses itself into a host's brain cavity, it becomes able to move the host's body as its own. It also acquires a complex range of senses it normally lacks.\nEach new body brings the opportunity for new tastes, sounds, sights, and even pains. When gathered in groups, xoarians work to increase their status and taste the experiences denied to the lower classes. Xoarians controlling a body have little to fear but discovery, and even that simply pauses their games. Harm to the host is just another sensation to experience, and replacement bodies are easy to find.\nThe Dominion of the Black is a conglomeration of deep-space conquerors with a strong presence on Aucturn, the most remote planet in Golarion's solar system. The Dominion has secret outposts all over Golarion; most of its members on the planet are scouts, using their skills to steal brains and identities, gathering information without any consideration for the inhabitants of the worlds they infiltrate.",
      "armorClass": 26,
      "hitPoints": 130,
      "speedFeet": 35,
      "perception": {
        "modifier": 16,
        "senses": [
          "thoughtsense-60",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 16,
        "will": 18
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 4,
        "int": 5,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "athletics": 14,
        "deception": 20,
        "diplomacy": 16,
        "occultism": 17,
        "society": 17,
        "stealth": 18
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [
          "blinded",
          "controlled",
          "emotion",
          "possession"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Df55I0THWkpaAqiE",
          "name": "Tentacle",
          "bonus": 18,
          "damage": "2d10+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "QhpYM3kHvCQFBZPJ",
          "name": "Tremorsense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KVksDMfUEPBjQ1QW",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "xQIOoZLsi95B0aQC",
          "name": "Stolen Identity",
          "kind": "passive",
          "description": "While a xoarian uses Body Thief, it gains the ability to understand and speak all languages known by the host, as well as knowledge of the host body's abilities, identity, role in society, and personality. However, it does not gain the specific memories or knowledge of the host body."
        },
        {
          "id": "AprrZws05iHlgmeT",
          "name": "Thoughtsense 60 feet",
          "kind": "passive",
          "description": "The xoarian senses a creature's mental essence as a precise sense with the listed range; it cannot sense mindless creatures with thoughtsense."
        },
        {
          "id": "rve8KfBmapuJodhm",
          "name": "Body Thief",
          "kind": "action",
          "description": "The xoarian squeezes itself into the head of a creature dead no longer than a day, consuming and replacing that creature's brain. At the start of the xoarian's next turn, the body revives at its maximum Hit Points, controlled by the xoarian. The xoarian is conscious and can sense everything the possessed body could. Any effect that ends the possession kills the host body with the same effects as Exit Body. The xoarian can't use any of the host creature's spells with Body Thief but can use its own innate spells."
        },
        {
          "id": "fvdMcDZ6SQwY04yW",
          "name": "Exit Body",
          "kind": "action",
          "description": "Requirements The xoarian is controlling a body with Body Thief\nEffect The xoarian bursts out of its host body, which dies instantly and is no longer a suitable host for any Body Thief ability. The xoarian stretches to its full size in an adjacent space."
        },
        {
          "id": "ojtISzFdLgIDxKCO",
          "name": "Ravage",
          "kind": "action",
          "description": "The xoarian makes two tentacle Strikes against a single Paralyzed, Restrained, or Unconscious creature. If the target has 0 Hit Points after Ravage, the xoarian can use a free action with the death trait to kill the target and occupy it with Body Thief."
        }
      ],
      "spellcasting": [
        {
          "id": "4y2VGbW3d9u4AUUe",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "31X8XS3olsOKlNcU",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "2hJZ3z2rgaTDHre3",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "rAUD3IOMYgBCLMwU",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "2dO4KkbK702ba5XZ",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "bs3TZByEZKUWkcKe",
              "name": "Paranoia (At Will)",
              "rank": 2
            },
            {
              "id": "oJ75tvFMU81bGLMt",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "wuT0S93DRApGIO5l",
              "name": "Soothe",
              "rank": 3
            },
            {
              "id": "Q2U70Ei1XJRH9JYx",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "mWKFSojBWodLeyPL",
              "name": "Dispelling Globe",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:megaprimatus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "pyTr1VOPrPYH8UNg",
      "slug": "megaprimatus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:adc083f45a9efeb6bd876d92d6b727e7e2709ef3ea55451aca90ecdb06f61d01",
    "translatableHash": "sha256:bba7872b380bc4d585731e669ca2fe5d6c1e81dfef3d75e475b90649eeafed64",
    "data": {
      "schemaVersion": 1,
      "name": "Megaprimatus",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal"
      ],
      "description": "The megaprimatus is among the mightiest of apes, quick to confront any perceived intrusions into its domain. With a height of 40 feet, it towers over even most giants, and is used to being the top-tier predator in the region.\nWhile many apes exhibit peaceful or reclusive behavior, gorillas can be territorial, and the megaprimatus is especially aggressive and dangerous.",
      "armorClass": 26,
      "hitPoints": 150,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 16,
        "will": 13
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 5,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 19
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UvKqCH4Y10AWYyTl",
          "name": "Fist",
          "bonus": 21,
          "damage": "2d8+10 bludgeoning",
          "traits": [
            "agile",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "dsA6QTAsFP5Juo0N",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d10+10 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZxIVdGLdVzJ1RVHi",
          "name": "Mangling Rend",
          "kind": "action",
          "description": "A megaprimatus makes two fist Strikes against the same target. If both hit, the attack deals an additional 2d6[bludgeoning] damage, the target is Off-Guard, and the target takes a –20-foot status penalty to all Speeds until the end of its next turn.\nEffect: Mangling Rend"
        },
        {
          "id": "AuM50DWRYYFugkl6",
          "name": "Terrifying Display",
          "kind": "action",
          "description": "The megaprimatus beats its chest in a terrifying display. Creatures within @Template[emanation|distance:50]{50 feet} must attempt a check (will, dc:27, name:Frightening Display) save.\nWhile a creature is Frightened by this ability, it is Off-Guard to the megaprimatus and to gorillas.\nCritical Success No effect and temporarily immune for 1 minute.\nSuccess The creature is unaffected.\nFailure The creature is Frightened 1.\nCritical Failure The creature is Frightened 2 and Fleeing until the end of its next turn."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:balisse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "Q1wybC7rSc4MIF9g",
      "slug": "balisse",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d27f2ebdacd9f922d59380eac74687b213b5723eaf744f8cd66c8f0d09c5d419",
    "translatableHash": "sha256:b924b79e808f3899b1040da43789a525bb6ad2613d39732a568cb8831a65fff9",
    "data": {
      "schemaVersion": 1,
      "name": "Balisse",
      "level": 8,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "angel",
        "celestial",
        "holy"
      ],
      "description": "Balisses, or confessor angels, seek to assist mortals ensnared by moral dilemmas or crises of faith. They prefer to guide people to their own decisions rather than demand obedience to a higher cause, as intrinsic belief is even more powerful than unquestioning obedience. While most balisses are fundamentally honest, they use their guiding angel ability to seem less intimidating and decrease the chance the mortal will simply acquiesce to the opinion of an obviously divine being.\nWhile balisses can spring from any soul with suitable patience and strong counsel, they often form from souls of those who performed evil acts but were redeemed. These souls recognize the struggle and shame of those in similar situations, and can offer advice from the heart rather than from rote sympathy. Many serve the goddess Sarenrae, but they can serve other good deities and empyreal lords as well.\nThe celestial hosts of angels are messengers and warriors, divided into choirs based on their abilities and purviews. Angels were one of the first creations of the gods, and many still assist their righteous creators throughout the cosmos. Most angels in modern times are not direct creations of the divine, however, instead consisting of ascended mortal souls drawn from the celestial planes.\nThe majority of unaffiliated angels live in Nirvana, the plane of virtue and enlightenment. Angels who are affiliated with deities dwell in those deities' domains or other areas where that god holds influence. Regardless of residence or service, angels remain benevolent messengers possessed with magical auras to aid their allies.",
      "armorClass": 26,
      "hitPoints": 145,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": 1,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "acrobatics": 14,
        "diplomacy": 17,
        "religion": 18
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 15"
        ],
        "weaknesses": [
          "unholy 10"
        ]
      },
      "attacks": [
        {
          "id": "qyAQlXz42QsRrsCo",
          "name": "Scimitar",
          "bonus": 20,
          "damage": "2d6+8 slashing; 1d6 fire",
          "traits": [
            "fire",
            "forceful",
            "holy",
            "magical",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "eUM6B7UsajXf8yCV",
          "name": "+2 Bonus on Perception to Detect lies and illusions",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "J74rTsCbkYU9dqWn",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AS5E8Dafjstrafqy",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7CAtWwnu0VOFzaK9",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "E36GUJSTq2NvkRmA",
          "name": "Confessor's Aura",
          "kind": "passive",
          "description": "20 feet.\nCreatures in the balisse's aura are subject to Ring of Truth (check (will, dc:23)). Additionally, if these creatures choose to honestly express their own conflicted feelings, the aura makes it easier for them to put words to those feelings."
        },
        {
          "id": "Z4NC0zq5T9vj6Gu8",
          "name": "Brand of the Impenitent",
          "kind": "action",
          "description": "Frequency once per day\nEffect The balisse marks a creature within their confessor's aura as irredeemable. They can do so only after a failed attempt to convince the creature to repent. The touched creature takes a –1 status penalty to AC and saves, reduces all its resistances by 2, and gains weakness 2 to holy. The duration depends on the target's check (will, dc:26) save.\nCritical Success The creature is unaffected.\nSuccess The duration is 1 round.\nFailure The duration is 1 day.\nCritical Failure The duration is unlimited.\nEffect: Brand of the Impenitent"
        },
        {
          "id": "prLWsWvW54YcYyNa",
          "name": "Guiding Angel",
          "kind": "action",
          "description": "Requirements The balisse is Invisible\nEffect The balisse spiritually attaches themself to an adjacent mortal who doesn't have the unholy trait. They merge with the mortal's body and are unable to use any of their spells and abilities other than to interact with the mortal. They can Dismiss the effect to leave the mortal. While merged, the balisse can either communicate using a bodiless voice only the mortal can hear or can take a form of their choice that only the mortal can see, such as a small angel on the mortal's shoulder."
        }
      ],
      "spellcasting": [
        {
          "id": "lGFnrFxfKoCvDxWP",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "QeEVU8eMbgcGRpom",
              "name": "Invisibility (At Will) (Self Only)",
              "rank": 2
            },
            {
              "id": "hx1x2sKmfxqcaeWH",
              "name": "Clear Mind (At Will)",
              "rank": 3
            },
            {
              "id": "sqcA23kSYSolFlo0",
              "name": "Cleanse Affliction",
              "rank": 4
            },
            {
              "id": "ul2hvURZ1bl8KoVl",
              "name": "Divine Wrath",
              "rank": 4
            },
            {
              "id": "RWkXbOZa96zXRCDk",
              "name": "Heal",
              "rank": 4
            },
            {
              "id": "yreDzpKtc723U6ke",
              "name": "Paralyze",
              "rank": 4
            },
            {
              "id": "Fk4euQUVovneda9U",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:ankhrav-hive-mother",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "qYw2ToefDK5Vrwgu",
      "slug": "ankhrav-hive-mother",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:428c57ea5614d824e3a0b0ed3d5bc8c2c5a855d14abec3dc87e93d8cc7ec3951",
    "translatableHash": "sha256:f5bf50873c60684704c7fa129fa1c90e5bc4d2af1157f1bf0a55552381f32236",
    "data": {
      "schemaVersion": 1,
      "name": "Ankhrav Hive Mother",
      "level": 8,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "Ankhrav hive mothers are fearsome predators that one can easily distinguish from the typical ankhrav not only by their greater size, but the presence of a large pair of razor-sharp, mantis-like arms.\nAnkhravs are immense, burrowing, and insectile predators, considered by inhabitants of the rural areas of the world to be an all-too-common plague.",
      "armorClass": 29,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-90"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 20,
        "stealth": 11,
        "survival": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "BeuWnsp3t3NisaY3",
          "name": "Mandibles",
          "bonus": 20,
          "damage": "2d8+6 piercing; 2d6 acid",
          "traits": [
            "acid"
          ]
        },
        {
          "id": "vt7bc5rxJY8WxTy0",
          "name": "Acid Spit",
          "bonus": 17,
          "damage": "5d6 acid",
          "traits": [
            "acid"
          ]
        }
      ],
      "actions": [
        {
          "id": "lszUCBGYOxZzhPEU",
          "name": "Tremorsense (Imprecise) 90 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Y96oDJVAkzCieuN4",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "PIKiUX4h9vUWIM3Y",
          "name": "Armor-Rending Bite",
          "kind": "action",
          "description": "The hive mother makes a mandibles Strike; if the Strike hits, the target's armor takes the damage and the acid damage bypasses the armor's Hardness."
        },
        {
          "id": "2QnPX6haUy6RjKvT",
          "name": "Frenzy Pheromone",
          "kind": "action",
          "description": "The hive mother unleashes a pheromone that causes all other ankhravs within a @Template[emanation|distance:100] to become Quickened until the start of the hive mother's next turn, and they can use the extra action only for Burrow, Stride, or Strike actions.\nThe hive mother can't unleash the pheromone again for [[/gmr 1d4 #Recharge Frenzy Pheromone]]{1d4 rounds}."
        },
        {
          "id": "waCZVvDN6vAn7yCi",
          "name": "Spray Acid",
          "kind": "action",
          "description": "The hive mother spews acid in a @Template[cone|distance:60], dealing 8d6[acid,1d6[persistent,acid]|options:area-damage]{8d6 acid damage and 1d6 persistent acid damage} (check (reflex, dc:26, basic, options:area-effect) save).\nIt can't spew acid again for [[/gmr 1d4 #Recharge Spray Acid]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sphinx",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "rdgs2gxTWxkyanD6",
      "slug": "sphinx",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4dd36c6cbe6bd54fdd15090d3bcc5274c745cd0b385f9bb3cd04300d9bf280e2",
    "translatableHash": "sha256:90b277a3cf3ac0023bcd3318551a9a68565ec4020bab8d084b28618fbe022a51",
    "data": {
      "schemaVersion": 1,
      "name": "Sphinx",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Sphinxes are mystical beings with the body of a lion, the wings of a great bird, and the upper torso and head of a human. They are often maligned in legends as nothing more than monsters, and though they are quick to anger and are capable of exacting deadly retribution for perceived slights, they are also very intelligent.\nSphinxes are often associated with desert regions, but they can dwell in more moderate climates as well. They form small groups consisting of a single, extended family that hunts and works together to protect and teach their young. As they mature, sphinxes develop a wanderlust, a drive to gather hidden lore and solve the world's greatest riddles-the trait that is perhaps most often identified with their kind.\nWhile sometimes bound into service as guardians for powerful spellcasters, lone sphinxes may also be encountered on journeys of discovery and as purveyors of esoteric lore. If treated with the proper respect-and fed well-a sphinx can demonstrate a willingness to exchange information. Their favorite currency is, of course, riddles and secrets. One who can trade knowledge for knowledge has a much better chance of succeeding while bargaining with a sphinx. However, a sphinx's insatiable thirst for new riddles as well their extensive collection of secrets accumulated over hundreds of years of life-makes it difficult to offer them something they don't already know. Those who attempt to trade petty insight and stale riddles may invoke a sphinx's ire and will not live long enough to regret it.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 35,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 19
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 3,
        "int": 5,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "arcana": 17,
        "athletics": 18,
        "deception": 16,
        "diplomacy": 16,
        "intimidation": 18,
        "occultism": 17
      },
      "languages": [
        "common",
        "draconic",
        "sphinx"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "TfNCbBu8oaMSaeTO",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d6+9 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "B9QrAlNM1MoP8sDk",
          "name": "Bardic Lore",
          "kind": "passive",
          "description": "Sphinxes are naturally curious, and their love of puzzles and mysteries leads them to gather information on a broad range of topics. Sphinxes have Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic."
        },
        {
          "id": "NURzeRkXcWn2KGXj",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "1uZuWVNr0woQanKG",
          "name": "Claw Rake",
          "kind": "action",
          "description": "The sphinx rears back on their hind legs and makes two claw Strikes at the same target, using the same attack bonus as their highest melee attack. If both attacks deal damage, the target takes extra damage equal to one claw Strike."
        },
        {
          "id": "XbyGgxrnfchvOdm3",
          "name": "Pounce",
          "kind": "action",
          "description": "The sphinx Strides and makes a Strike at the end of that movement. If the sphinx began this action Hidden, they remain hidden until after the attack."
        },
        {
          "id": "Vyc7HceERBcZQuXT",
          "name": "Riddler's Rune",
          "kind": "passive",
          "description": "Once per week, a Sphinx can create a magical symbol as the Rune Trap ritual. The sphinx usually shapes it to take the form of a written riddle and sets the password to the answer.\nA creature that gives the wrong answer or tries to pass without answering must succeed at a check (will, dc:26) save or be affected by one of the following spells, chosen by the sphinx when creating the symbol: Synaptic Pulse (5th), Charm (4th), Fear (4th), Phantom Pain (4th), Sleep (4th). The sphinx learns the identity of any creature that answers the riddle and tends to be friendly to them if they answered correctly."
        }
      ],
      "spellcasting": [
        {
          "id": "pxfevBUBi49C9LID",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 19,
          "saveDc": 27,
          "spells": [
            {
              "id": "Gt4SUWjd6XIW7Ry2",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "rLtVXL1Qy4XvfFy4",
              "name": "See the Unseen (Constant)",
              "rank": 2
            },
            {
              "id": "EgloIafjtiEMYKlo",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "ile7CPh2AdBA58iF",
              "name": "Locate",
              "rank": 3
            },
            {
              "id": "12OpQAGRcR78nHve",
              "name": "Clairaudience (At Will)",
              "rank": 4
            },
            {
              "id": "WcEKHbDqO2VXU0FA",
              "name": "Clairvoyance (At Will)",
              "rank": 4
            },
            {
              "id": "eiT7Zx5h6S03h7uR",
              "name": "Cleanse Affliction",
              "rank": 4
            },
            {
              "id": "Icj8CRNThxINEjrC",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "Lcn5YGC8Thu01hcg",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:bone-prophet",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "SMLMW81mKN5VlcVV",
      "slug": "bone-prophet",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:179ba19a8cb2a8004eb6bf89f14e1de0e473d4eeb71eb1340f86f77fe27b01cf",
    "translatableHash": "sha256:9d46e736788f59d65e1a21da065b6f01806040f645764ff84f779893707f041e",
    "data": {
      "schemaVersion": 1,
      "name": "Bone Prophet",
      "level": 8,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "serpentfolk"
      ],
      "description": "The speakers for the dead known as bone prophets hold an esteemed place as voices for their decapitated god. Burial rites, necromantic rituals, and the delivery of cryptic utterances supposedly whispered to them by Ydersius all fall under the dominion of these priests.\nBefore their ancient clash with humanity devastated their civilization, serpentfolk were masters of a sprawling underground empire. Their power was shattered and their god Ydersius decapitated (although not quite slain). The cunning, intelligence, and magical abilities of serpentfolk have diminished from their ancient heights, and most are born without these boons. This is partially the result of cruel genetic meddling among serpentfolk—though the ruling class, zyss, are born with an innate spellcasting ability, their blood runs thin, making them susceptible to wounds. Seen as the failures of the serpentfolk's experiments are the aapophs, who are strong but prone to mutation and lack innate spellcasting.\nToday, the central realm of the Darklands retains the old name of the serpentfolk empire that once dominated this region—Sekamina. This name is also the source of the serpentfolk's Aklo title, sekmin, which they are often called in ancient texts. Serpentfolk dominion had declined before ghouls, gugs, umbral gnomes, and other forces. Yet their recent ventures have brought them back to a stronger place in the Darklands. Many serpentfolk sleeping in torpor in secluded vaults have awakened.\nZyss serpentfolk tend toward megalomania, with dreams of returning to their place of dominance. Many of their plans hinge on resurrecting Ydersius, their decapitated god. His headless body still thrashes about, mindless, in the Darklands, waiting to be reunited with his lost skull. Serpentfolk numbers are so small that reclaiming their dominance seems a distant dream, especially since their reproduction is slow. Though a parent can birth a dozen young at once, the gestation period lasts up to a decade, and the likelihood that even one will be zyss is low. There's no telling whether a child will be zyss or aapoph, regardless of parentage. A coveted zyss child is just as likely to arise from aapoph parents as from two zyss, and every serpentfolk colony has someone in charge of sorting the young, identifying the earliest signs of magic in them.",
      "armorClass": 27,
      "hitPoints": 115,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 15,
        "will": 19
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": 5,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "arcana": 15,
        "deception": 18,
        "intimidation": 16,
        "occultism": 17,
        "religion": 19,
        "society": 15,
        "stealth": 13
      },
      "languages": [
        "aklo",
        "common",
        "necril",
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
          "id": "CXc8oBEPlsp8HDTd",
          "name": "Staff",
          "bonus": 18,
          "damage": "2d4+9 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "AGZBKBnJMkp5NrlX",
          "name": "Fangs",
          "bonus": 17,
          "damage": "2d6+9 piercing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "GjmjXrm0BYOCXs5E",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "a0buN6CZs8L9kI0C",
          "name": "Thin of Blood",
          "kind": "passive",
          "description": "Bone Prophets recover slowly from injuries. When they take physical damage from a critical hit, they gain 2d4[persistent,bleed] damage. They take a –2 circumstance penalty to flat checks to recover from persistent damage and saving throws against afflictions."
        },
        {
          "id": "VRDZl6y3aAge5VyP",
          "name": "Raise Serpent",
          "kind": "action",
          "description": "Frequency once per day\nEffect The bone prophet animates corpses of snakes, serpentfolk, or similar serpentine creatures within a @Template[emanation|distance:30]. Any flesh on the bodies sloughs off, and they rise as skeletons. The bone prophet can raise one Large creature as a Skeletal Giant or up to three Medium creatures as Skeletal Champions; the equipment and attacks might be different depending on the corpses' possessions. These skeletons have the minion trait and are under the bone prophet's control; the bone prophet can give all these minions the same command with a single action that has the concentrate trait. Any skeletal minions that still remain after 10 minutes crumble to dust."
        },
        {
          "id": "pkqZFkDwe6SFvUXX",
          "name": "Serpentfolk Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d4[poison] damage and enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "LqorFNvTu3dYKgMS",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "dU12rMeS1xJ86hcI",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "AdmL9iL1SKJIFFIb",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "NEbJo4lPdAUfzeSA",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "3B3OhloZ4acHKFwU",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "ogF6GibZwF97cHGw",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "DZ8pAuo4AHNr5J9h",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "x3pICSau8mdvnEqT",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "8AMK0SFTnX7MrMI9",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "21oxdDiCp8Y0SnkW",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "qN9lR02R6Baa4ouj",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "E6XlPIqcDPEV2oGa",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "DWXhNR9ZKYsJ7JzF",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "FegXw0yTfj6tihbM",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "fv9KnIBuFRoTfyFu",
              "name": "Bind Undead",
              "rank": 3
            },
            {
              "id": "vg1yF9pukiTO6rGH",
              "name": "Blindness",
              "rank": 3
            },
            {
              "id": "ADUrPn6RbHSJzcK2",
              "name": "Chilling Darkness",
              "rank": 3
            },
            {
              "id": "EyB1uSmuxtuvoWXS",
              "name": "Vampiric Feast",
              "rank": 3
            },
            {
              "id": "DTs3FQwRw5WjDcqv",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "z1P06CsgyPOHIgPJ",
              "name": "Harm",
              "rank": 4
            },
            {
              "id": "rMvkHhTeLufQRERZ",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "GZ29nMznfiaxeB6d",
              "name": "Talking Corpse",
              "rank": 4
            }
          ]
        },
        {
          "id": "Hkm57fRjKQG62Gkr",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "KURewxDCAgdeK2fm",
              "name": "Ventriloquism (At Will)",
              "rank": 1
            },
            {
              "id": "CWTDttbrpPkN5UwR",
              "name": "Blur (Self Only, At Will)",
              "rank": 2
            },
            {
              "id": "Mq5kFgpzukimfyt0",
              "name": "Illusory Disguise (At Will)",
              "rank": 3
            },
            {
              "id": "ASoZxVsvDpj482RX",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "9FbKqPFZZhyRXD2D",
              "name": "Suggestion",
              "rank": 5
            },
            {
              "id": "Lp0X3Lrf2XatX1cp",
              "name": "Dominate",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:marsh-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "tuuSayyL0A5R6hZh",
      "slug": "marsh-giant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:88a4dd1eca36879f2f855865c6a92a55bc3287607f1e1abf28abac2feda424f3",
    "translatableHash": "sha256:5dbe86fe20be10bed6089a81d47542d0ba154004b7f1c356204b1e1442a16553",
    "data": {
      "schemaVersion": 1,
      "name": "Marsh Giant",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "giant",
        "humanoid",
        "water"
      ],
      "description": "Dwellers of brackish coastal salt marshes and fetid bogs and swamps, marsh giants appear hideous to most airbreathers, with fishlike mouths, slimy graygreen skin, and dark, beady eyes. They prefer to eat the flesh of those they slay in battle, including other marsh giants, and guzzle stagnant water from cauldrons or directly from their swampy homes.\nMarsh giant clans are insular, with each clan dedicating itself to zealous worship of a sea-dwelling deity, demon lord, or stranger entity. Whatever forces call to the marsh giants sometimes ensnare boggards and ogres as well, gathering in grim worship. Rather than favor these humanoid hangerson, marsh giants lavish attention on favored pets: krooths, giant octopuses, or primeval creatures like dinosaurs and the crocodilian deinosuchuses.\nBarely topping 11 feet tall and 1,000 pounds, marsh giants are small for giants but make up for their stature with their zealotry.\nGiants are massive humanoid creatures who live in remote regions throughout the world. They vary widely but are united in their hunger, requiring sustenance of their own element along with the feasts one would expect from such a massive humanoid. Although a simple matter for some giants, more esoteric types find this need a harsh reality. While a massive fistful of ice or snow alongside their meal will satisfy a frost giant, shadow giants hunger for the coagulated shadows of the Netherworld.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 35,
      "perception": {
        "modifier": 16,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 13,
        "will": 17
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
        "athletics": 18,
        "intimidation": 15,
        "nature": 15,
        "religion": 17
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
          "bonus": 20,
          "damage": "2d6+14 bludgeoning",
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
          "bonus": 20,
          "damage": "2d6+14 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "huY2kc7XivnkykqV",
          "name": "Spit",
          "bonus": 20,
          "damage": "5d6 bludgeoning",
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
          "description": "Requirements A creature is Prone within the marsh giant's reach\nEffect The marsh giant uses its gaff to push the creature down as water bubbles up below it. The target becomes submerged in water until they are no longer prone and must hold their breath if they cannot breathe water. They take 4d6[bludgeoning] damage (check (fortitude, dc:23, basic) save) and lose 3 rounds worth of air if they fail the save."
        },
        {
          "id": "eoLK3mAvvXiMTLnH",
          "name": "Twist the Hook",
          "kind": "action",
          "description": "The marsh giant makes a melee Strike with its gaff. If it hits, it twists and yanks the gaff to knock the target Prone and create an awful wound, dealing 2d6[persistent,bleed] damage to the creature."
        }
      ],
      "spellcasting": [
        {
          "id": "SOapd5GiFsybvQAC",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 23,
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core:sarglagon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "UMlGhyoHMvhVW6kv",
      "slug": "sarglagon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:afb2159b2cb77217a16602bbc6de00a12cffe61174b89aa6f942089debd3d9a1",
    "translatableHash": "sha256:f0d3e4ef4b61bb8d7a1070d4cf2ab7d4ecfaa33abdc9fb00a6e3098ce6cf6424",
    "data": {
      "schemaVersion": 1,
      "name": "Sarglagon",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "Sarglagons dwell in Hell's myriad waterways, lakes, and oceans. They serve as guardians of the Academy of Lies—the repository of secrets in Stygia, the fifth layer of Hell. Sarglagons breathe water and air with equal ease, and can move through water, land, and even air with uncanny swiftness. Few fiends travel the waterways of the multiverse, but where a river crosses the planes, odds are sarglagons have traveled it to further their infernal machinations. The only body of water they avoid is the River Styx, as the fiends have yet to develop any defense against that waterway's memory-sapping qualities. Mortal spellcasters sometimes bind sarglagons as guardians of precious secrets or treasures, particularly in aquatic areas. Most strangely, sarglagons sometimes act as unnerving caretakers to mortals who have no idea what they did to earn their unwanted protectors' attention. The constant uninvited vigilance of these devils is often disturbing and stifling to their wards.\nMasters of corruption and architects of conquest, devils seek both to tempt mortal life to join in their pursuit of all things profane and to spread tyranny throughout all worlds. The temptations they offer mortals range from great powers granted by the signing of an infernal contract to twisted favors following a whispered pledge to a diabolic patron, or any number of even subtler exchanges. Those who succumb to these temptations find themselves consigned to an afterlife of endless torment in the pits of Hell, wherein the only hope of escape lies in the chance of being promoted to become a devil in the infernal ranks.\nEvery devil has a specific role to play in the upkeep of the remorseless bureaucratic machine that is Hell, from soldiers and scholars to inquisitors, lawyers, judges, and executioners. Lowly orts perform subservient labor to more powerful and specialized devils, such as infantry and contract devils, while the greatest nessaris command entire infernal armies.\nAsmodeus stands at the apex of the structure he created, but the layers below him are marked by a constant jockeying for position. Most diabolic plans ultimately serve to improve the schemer's place in the hierarchy.",
      "armorClass": 27,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "greater-darkvision",
          "see-invisibility"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "arcana": 14,
        "athletics": 18,
        "deception": 15,
        "diplomacy": 15,
        "intimidation": 17,
        "stealth": 15
      },
      "languages": [
        "diabolic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 5 except silver",
          "poison 10"
        ],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "LbkW4zjvlyreuGX1",
          "name": "Fangs",
          "bonus": 20,
          "damage": "2d12+9 piercing",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "TfHuj8LvtfwsXfXQ",
          "name": "Tentacle Arm",
          "bonus": 20,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "BMv1jkvT4dSbEL8X",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7NjsgQKMg0FvxDmJ",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tIvtO7TbZgSNlr3F",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "GoYV1mj4XKxDiBOM",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tqSmdxFVDmY2CLns",
          "name": "Heavy Aura",
          "kind": "passive",
          "description": "10 feet.\nA creature that enters the heavy aura must attempt a check (will, dc:23) save. It is then temporarily immune for 10 minutes.\nSuccess The creature is unaffected.\nFailure The creature is encumbered while it remains in the area. If the creature is already encumbered, it is Immobilized while it remains within the aura.\nCritical Failure As failure, but the effect persists for 3 rounds after leaving the aura."
        },
        {
          "id": "myXt3SwrT2L8VMW4",
          "name": "Stygian Guardian",
          "kind": "reaction",
          "description": "Trigger A creature or object within the sarglagon's reach is targeted by an attack\nEffect The sarglagon interposes themself, giving the creature or object Standard Cover against the attack (+2 circumstance bonus to AC), or Greater Cover (+4 circumstance bonus to AC) if the sarglagon was already granting it lesser cover."
        },
        {
          "id": "nBbFutvNlcdf1cgZ",
          "name": "Drown",
          "kind": "action",
          "description": "The sarglagon conjures murky water to fill the lungs of a creature within 30 feet of it that can't breathe water. The target must attempt a check (fortitude, dc:26) save.\nCritical Success The target is unaffected.\nSuccess The target coughs up water and is Sickened 1.\nFailure The target is holding its breath. The only action it can take is to attempt a Fortitude save against Drown to expel the water, which is a single action.\nCritical Failure The target falls Unconscious and begins suffocating. If the target succeeds at its Fortitude save while suffocating, it coughs up the water and can breathe again."
        },
        {
          "id": "5Vw9VTB3I1sie1g1",
          "name": "Sarglagon Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26, options:damaging-effect,inflicts:clumsy)\nMaximum Duration 6 rounds\nStage 1 2d6[poison] damage and Clumsy 1 (1 round)\nStage 2 3d6[poison] damage and Clumsy 2 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "xxK8rXRDWK5Rwj9i",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 23,
          "spells": [
            {
              "id": "oIJY4ycXpaF4IjIM",
              "name": "See the Unseen (Constant)",
              "rank": 2
            },
            {
              "id": "Vah9RFP70HLmi2n5",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "mxpkzQTw0tzSwaUL",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "f6wcd2reTGcarw33",
              "name": "Unfettered Movement",
              "rank": 4
            },
            {
              "id": "ofhb2Xpvv2O62InP",
              "name": "Control Water",
              "rank": 5
            },
            {
              "id": "D0vga6qR9JJs237o",
              "name": "Translocate",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:horned-dragon-young-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "wdHIc6Tg1OBMGaK5",
      "slug": "horned-dragon-young-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2bf080d05a5a90ba4bcdf3c0fd7bbf2f29ec348512d46ebf7e19051845a612c6",
    "translatableHash": "sha256:1980f474e459959502bf1c39707e683f5adca55cd4eada468b9cbbce451a839e",
    "data": {
      "schemaVersion": 1,
      "name": "Horned Dragon (Young, Spellcaster)",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "dragon",
        "primal"
      ],
      "description": "The magic that flows through primal dragons can manifest more animalistic or bestial features in a given type of dragon. Notably among these are the massive paired horns of the horned dragon. While their bulky frames, natural coloration, and prominent ridged scales are all remarkable in their own way, it's the horns that are most obvious and striking at first glance. Horned dragons use their horns to impale their prey in a quick and brutal display of their might. They are generally contemplative and have a fixation on knowledge and self-discipline, traits belied by their bestial appearance. As a result, horned dragons are generally more open to speaking with outsiders.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 28,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 16,
        "will": 17
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 13,
        "arcana": 16,
        "athletics": 17,
        "deception": 14,
        "diplomacy": 16,
        "intimidation": 16,
        "nature": 14,
        "occultism": 17,
        "society": 14,
        "stealth": 15
      },
      "languages": [
        "common",
        "draconic"
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
          "bonus": 20,
          "damage": "2d10+8 piercing; 2d4 poison",
          "traits": [
            "magical",
            "poison",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "zLSUNYt5ukMkU9zC",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d8+8 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "BWkGmIVrerzvJg6A",
          "name": "Tail",
          "bonus": 18,
          "damage": "2d8+7 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "zgg5I2ssn7V4bFRq",
          "name": "Horn",
          "bonus": 18,
          "damage": "1d12+7 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HJiQ5csE8Zk6bsoQ",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:24, options:area-effect,inflicts:frightened)"
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
          "description": "The dragon breathes a toxic cloud that deals 9d6[poison|options:area-damage] damage in a @Template[cone|distance:40] (check (fortitude, dc:25, basic, options:area-effect) save).\nThey can't use Poison Breath again for [[/gmr 1d4 #Recharge Poison Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "V2pwtTaOQZEhUBYv",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 20,
          "saveDc": 26,
          "spells": [
            {
              "id": "Ys2XYnskcUx1dCV7",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "O3icG4mECbA5OqfR",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "FKH4ub94sthUqTka",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "0ZmQuhzhMgwcXBac",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "NGiItT416RGqr34P",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "SBRH81T9Rn1Nb0ZW",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "ARPQswjAPCHtrphr",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "Ua6t7CNTuhxqFFAx",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "5sdBbgiBq5UzsOQA",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "lLs7eV1i8pOXkcQQ",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "qWwyA1wYIfYxgx2A",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "yw0O9qzuCiFeHOWW",
              "name": "Sound Body",
              "rank": 2
            },
            {
              "id": "wE2ViaK091FgOQ9I",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "L7LECQkh9tJxTDmC",
              "name": "Veil of Privacy",
              "rank": 3
            },
            {
              "id": "jHXJYUSDIBpekpXq",
              "name": "Wall of Thorns",
              "rank": 3
            }
          ]
        },
        {
          "id": "m9dIszotbO8vukOI",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "fZbXpVIUqe3JYgab",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "lgDxJmtHFjvOF0sM",
              "name": "Entangling Flora",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-hippocampus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "wvP8zBmI0PDO1Uq2",
      "slug": "giant-hippocampus",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ba6e1d55281eb8ad1173413ba452763e34e0001dd6b6dc2d4db748dfc6f4471b",
    "translatableHash": "sha256:285be1cea965be9bdc89d3b191b6293146c2448082159d0b85fbc5313a0b0d4d",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Hippocampus",
      "level": 8,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Living in the deepest reaches of the ocean, giant hippocampi haven't been sighted near the shore and are often regarded as legends made up by sailors.\nThe strange beasts known as hippocampi resemble terrestrial horses from head to midbody, but on their legs, they have splayed fins instead of hooves, and in place of horses' hindquarters, they have powerful tails resembling those of fish. Hippocampi have colorful scales ranging from pearly white to seaweed green, and brilliant ribbed dorsal fins as manes. In the wild oceans, most types of hippocampi tend to congregate in the shallows near the beds of seaweed and kelp forests that provide them with food and shelter from predators. They form huge schools to provide safety in numbers, like landbound horses form herds.\nHippocampi are highly prized by undersea societies and surface dwellers alike, as they are as easy to train as horses and serve many of the same functions, be that as beasts of burden, war-trained mounts, transportation, or as pets. Though hippocampi are able to wear barding, it hampers them considerably, so most handlers outfit them with the lightest options available. More often, they are trained to pull specially designed underwater chariots or sleds. Hippocampi don't like to leave the water, as they are clumsy on land, can't bear riders while flopping about on the ground, and can't breathe air for long.\nNumerous variant species of hippocampi exist, although most of them differ from the common hippocampus only in coloration. Heartier species, such as polar hippocampi, dwell exclusively in arctic waters and are best presented as hippocampi with elite adjustments.",
      "armorClass": 27,
      "hitPoints": 170,
      "speedFeet": 10,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 7,
        "int": -4,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 20
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ElDo5C9tGNaFEyUo",
          "name": "Tail",
          "bonus": 18,
          "damage": "2d6+10 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "CeExWr00cFSdrZ4J",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:28)"
        },
        {
          "id": "FNSLMfCQHDGPvjsv",
          "name": "Sudden Retreat",
          "kind": "action",
          "description": "The giant hippocampus makes a tail Strike, then Swims with a +10-foot circumstance bonus to its swim Speed. It gains a +2 circumstance bonus to AC against reactions triggered by this movement."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:giant-anaconda",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "XDNJSVxOOryeuN44",
      "slug": "giant-anaconda",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:df09b3ce14e47b8810a7eccf4caead74e286fd80a52df2946351a0a9420ef814",
    "translatableHash": "sha256:c03d6e7eddafd0a75072d8261ee3f8d6b4d9261a8fe0333b8ea875acdba649f0",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Anaconda",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "The monstrous giant anaconda is a constrictor snake capable of swallowing whole creatures as big as horses—to say nothing of their riders. Although novice bushwhackers watch out for snakes that might drop on them from the jungle canopy above, giant anacondas are most commonly encountered in ponds and rivers, where they feed on prey including manatees and capybaras. This hunting tactic allows anacondas to drown their prey while constricting it, reducing the chance of injuries while hunting. Despite lurid and sensational stories spread by adventurers, these snakes rarely attack humanoids.\nSnakes come in an array of forms, from jungle-dwelling constrictors that wrap around their prey to venomous vipers with deadly bites. Regardless, all snakes consume their prey whole by unhinging their jaws and using powerful muscles to move the food down their throats and into their stomachs.",
      "armorClass": 25,
      "hitPoints": 175,
      "speedFeet": 30,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 17,
        "will": 15
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 6,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 21,
        "stealth": 15,
        "survival": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "WkPeg600zGONsuJz",
          "name": "Jaws",
          "bonus": 19,
          "damage": "2d10+7 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "a7b4jERQkCw4Wcb8",
          "name": "Tail",
          "bonus": 19,
          "damage": "2d8+7 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "UVwLwFSrhe9YIUEC",
          "name": "Tighten Coils",
          "kind": "reaction",
          "description": "Trigger A creature Grabbed or Restrained by the giant anaconda attempts to Escape.\nEffect The DC of the Escape check is increased by 2."
        },
        {
          "id": "plka6anhQ8CltSBM",
          "name": "Greater Constrict",
          "kind": "action",
          "description": "(1d10+7)[bludgeoning], check (fortitude, dc:26, basic, options:inflicts:unconscious)"
        },
        {
          "id": "VhwoW1Wd9SqC4MVO",
          "name": "Slither",
          "kind": "action",
          "description": "The giant anaconda Strides, Climbs, or Swims up to half its Speed, pulling any creatures it has Grabbed with it."
        },
        {
          "id": "4s0p8fCnssqfycUf",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, (1d10+7)[bludgeoning], Rupture 21"
        },
        {
          "id": "765hQtSimhXMwS7m",
          "name": "Wrap in Coils",
          "kind": "action",
          "description": "Requirements A Large or smaller creature is Grabbed or Restrained in the giant anaconda's jaws.\nEffect The giant anaconda moves the creature into its coils, freeing its jaws to make attacks, then uses Greater Constrict against the creature. The giant anaconda's coils can hold as many creatures as will fit in its space."
        },
        {
          "id": "kfjRR8MHRHoxgCkF",
          "name": "Grab",
          "kind": "action",
          "description": ""
        },
        {
          "id": "eOgrqVcnppzRiPms",
          "name": "Push 10 feet",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:phantom-beast",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YAGc6gQ5VrvWyR37",
      "slug": "phantom-beast",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0f89692c2c4783c6a3267120685c8cddbd48d6d93dc684ab1e26f420f779ad09",
    "translatableHash": "sha256:2cb3a06819fda062056f21fbfed72020ae063f1e846dbd0f3d92a734aa0136dc",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Beast",
      "level": 8,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "ethereal",
        "incorporeal",
        "phantom",
        "spirit"
      ],
      "description": "The River of Souls, alongside the souls of dead sapient humanoids, also carries the spirits of monsters, animals, and other creatures. Likewise, it draws souls from across reality, and thus human and elf souls mingle with those of far stranger creatures from untold worlds. Like any others, these far-flung spirits of strange creatures sometimes wash up on the shores of the Ethereal Plane, becoming phantoms far removed from the humanoid forms typically associated with ghosts and other undead.\nThe phantom below is one such entity: a strange beast from a distant world, echoing their behaviors from life as they search for their postmortem fate. Their unfamiliar appearance might lead observers to assume they're a monstrous being and attack, finding the phantom beast entirely willing to fight back. More compassionate adventurers might instead seek to help the phantom find their way back to the River of Souls to complete their spiritual journey.\nThe typical trajectory for souls passing to the afterlife is fairly straightforward, according to most theologians. When a mortal dies, their soul enters the River of Souls and eventually reaches the Boneyard, where it is judged by Pharasma. The judged soul moves onto its appropriate domain of final rest—Heaven, Hell, Abaddon, and so forth—where it becomes a shade.\nComplications arise, however, when a soul in queue for judgment prematurely departs from the River of Souls and is shunted into the Ethereal Plane. Whether as a result of nefarious interlopers like daemons or hags, malignant planar magic, or even fate, these souls become dislodged from the natural order of life and death and linger in a sort of purgatory. Unlike petitioners, these ethereal phantoms retain memories of their life before death, and unlike spirits such as ghosts, phantoms aren't tinged with the foul influences of undeath—at least, not at first, though the threat of corruption hangs heavy over a phantom's existence. Some eventually succumb to that fate, while others eventually rejoin the River of Souls. Until then, these wandering souls are a kind unto themselves—one without a true home, agenda, or purpose.\nMany phantoms have no desire to remain in their strange state of purgatory, either because they seek to continue their journey through the River of Souls or because they fear the corruption of undeath. In order to complete the natural spiritual cycle and become judged so they can continue to the afterlife, a phantom must find a way back into the River of Souls. Such a quest is no easy feat, however—the hazy mists of the Ethereal Plane can befuddle even the most experienced traveler, and numerous predators prowl the realm in search of stray souls to bind or devour.",
      "armorClass": 26,
      "hitPoints": 120,
      "speedFeet": 0,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 18,
        "will": 16
      },
      "abilities": {
        "str": -5,
        "dex": 6,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "diplomacy": 16,
        "intimidation": 18,
        "occultism": 14,
        "thievery": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "poison",
          "precision",
          "bleed"
        ],
        "resistances": [
          "all-damage 8 except force, ghost-touch, spirit"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Phi18mvpdKJpQmql",
          "name": "Phantom Horn",
          "bonus": 18,
          "damage": "2d8+8 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "Z79hB9KYIozan9AY",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Zu7OCWAY7oZL41Am",
          "name": "Walk the Ethereal Line",
          "kind": "action",
          "description": "The phantom walks the thin line between the Ethereal and Universe in order to exist on both planes simultaneously.\nThey can shift back to solely the Ethereal Plane by using this ability again."
        },
        {
          "id": "pxvM1CdSpuWlWrQ3",
          "name": "-1 Status to All Saves vs. Death Effects",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VMapQLoJPfFmzdaS",
          "name": "Susceptible to Death",
          "kind": "passive",
          "description": "Though phantoms aren't alive, neither are they undead, and they are uniquely vulnerable to the effects of death.\nA phantom whose Hit Points are reduced to 0 as a result of a death effect (such as from a spell like Execute) is immediately whisked away to the River of Souls, where their soul resumes the usual path to the afterlife."
        },
        {
          "id": "KhpwMZRcLcLGEKlH",
          "name": "Phantom Touch",
          "kind": "passive",
          "description": "Each time they make a Strike, a phantom can choose to deal spirit damage instead of the normal physical damage type."
        },
        {
          "id": "EuQQ73V8hJuBn5EU",
          "name": "Grab Item",
          "kind": "action",
          "description": "The phantom beast attempts to Steal one item of up to 1 Bulk from a creature, even if the creature is in combat, though the object still must not be one that is actively in use. If they succeed, they carry the object along with them telekinetically."
        }
      ],
      "spellcasting": [
        {
          "id": "IfgRYpjy1kMxYZ7N",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "BXwNW8Zaf8b7XyXX",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "7VSHOZ44E7Qo3Qat",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "v25mAQfOctNXRxKd",
              "name": "Phantom Pain",
              "rank": 4
            },
            {
              "id": "lkywQI2njvLExXB7",
              "name": "Sleep",
              "rank": 4
            },
            {
              "id": "OhQ6ozGdfJHwACZl",
              "name": "Spiritual Armament",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:conspirator-dragon-young-spellcaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YHoXWNZhIaZWdq0Y",
      "slug": "conspirator-dragon-young-spellcaster",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:748a3e5e9b982ebe1d96b1ac4d31f7c747e7b42042d53ff3a68e2c84fc9b49a2",
    "translatableHash": "sha256:0d2354f725e71d3569f635293da37a6f907ea86775871f4520a7c5d49c087107",
    "data": {
      "schemaVersion": 1,
      "name": "Conspirator Dragon (Young, Spellcaster)",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "occult"
      ],
      "description": "Hidden among the shadows and upper echelons of society are the conspirator dragons. These dragons are schemers, always looking to manipulate and control others, either for personal gain or simply for the thrill of watching their machinations play out. Conspirator dragons see themselves above others and typically speak with infantilizing tones and words. However, as most conspirator dragons meet others while in disguise, they do their best to maintain their disguise.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.\nDraconic Spellcasters\nEach dragon features a sidebar on spellcasting dragons of that type. To make a dragon spellcaster, remove the dragon's Draconic Frenzy and Draconic Momentum abilities, and give them the spells outlined in their sidebar. You can swap out any number of these with other spells, provided you keep the same number of spells for each rank. You might also want to increase the dragon's Intelligence, Wisdom, or Charisma modifier by 1 or 2 to reflect their mastery of magic.",
      "armorClass": 27,
      "hitPoints": 135,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 16,
        "deception": 18,
        "diplomacy": 18,
        "intimidation": 16,
        "occultism": 16,
        "performance": 18,
        "society": 16,
        "stealth": 16
      },
      "languages": [
        "common",
        "draconic",
        "shadowtongue"
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
          "bonus": 19,
          "damage": "2d8+8 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "aHZHZh4OikvB5foL",
          "name": "Claw",
          "bonus": 19,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "WYzVKov6bCQKHrul",
          "name": "Tail",
          "bonus": 17,
          "damage": "1d10+8 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "ece3eTIYzV4ZCJsH",
          "name": "Mental Blast",
          "bonus": 18,
          "damage": "3d6+3 mental",
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
          "id": "YJdT2cmW3fElQoO2",
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
          "description": "Requirements The dragon is wearing their conjured disguise\nEffect The dragon erupts from the disguise, destroying it. The explosive revelation deals 9d6[bludgeoning|options:area-damage] damage to creatures in a @Template[emanation|distance:5] with a check (reflex, dc:26, basic, options:area-effect) save. A creature that fails its save is Dazzled for 1 round as it becomes covered in scraps from the disguise.\nAny creature sharing a space with the dragon after they erupt is pushed into the nearest empty space."
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
          "description": "The dragon unleashes a noxious cloud of smoke that deals 7d6[poison|options:area-damage] damage in a @Template[cone|distance:40] (check (fortitude, dc:26, basic, options:area-effect) save). The smoke remains for 1 minute. This has the effects of Mist, except it fills the cone's area.\nThe dragon can't use Smoke Breath again for [[/gmr 1d4 #Recharge Smoke Breath]]{1d4 rounds}."
        },
        {
          "id": "lhnqwfK5RkPmG7XJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 2d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "Eq1ioA5936SrvNul",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 19,
          "saveDc": 26,
          "spells": [
            {
              "id": "18pisLR4R0tH4xlc",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "SLtHLEBJ8OqkujFO",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "iXXGYKVaUH4G4coE",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "u9fKO8Sla2GX9mS8",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "FGIJqdgy1DnR3g97",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "2y7vEkCiRLsU8HIp",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "M67C0SpqUw1bm25K",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "uHmdx9Dz6DHddcmW",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "Gi4D8PoW4ENMrPIK",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "kynuZl57xDvsIrjU",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "0zHaUiX17C8cCcNn",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "4kOQ5UQC51ny5x0q",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "R7z2CuxCiu9284QM",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "RTSDrptSpaXHH7zb",
              "name": "Veil of Privacy",
              "rank": 3
            }
          ]
        },
        {
          "id": "vMzkI80zGmPn011P",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "PVV9ShzfXdXEEjmV",
              "name": "Charm (At Will)",
              "rank": 1
            },
            {
              "id": "f1w810kyYTf8IT2y",
              "name": "Charm",
              "rank": 4
            },
            {
              "id": "WuqqgROOGcJWKepq",
              "name": "Mind Reading (At Will)",
              "rank": 4
            },
            {
              "id": "kJfHKnZbhbgRt7Yx",
              "name": "Rewrite Memory",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:jah-tohl",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "YUI465JYqM65iimj",
      "slug": "jah-tohl",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:93588c2a31f7285acc51c4761fa9fda1f24237b258178105cc6565e058568a15",
    "translatableHash": "sha256:f65fc0fcc99de5640562d1f04c4f04fa3fc2623553205598ea783fb6a67cc53e",
    "data": {
      "schemaVersion": 1,
      "name": "Jah-Tohl",
      "level": 8,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "aberration"
      ],
      "description": "The grotesque jah-tohl arrive in living starships to harvest the brains of intelligent creatures. These aberrations draw no nutrition from brains, instead storing them for analysis and as vessels for occult energies.\nA mind snatcher's form evokes that of a tailless scorpion, but the pulsing brain-filled blisters that glisten along its back make them impossible to mistake for oversized arachnids. Baleful eyes glare from the joints on their legs, and the unsettling, intrusive whisper-thoughts they telepathically broadcast into the minds of those they seek to feed on can be interpreted as threats or promises alike.\nMind snatchers have little empathy for the denizens of any world they visit, despite the fact that certain cults venerate them and the Dominion they hail from. To mind snatchers, terrestrial creatures are simply resources for their investigations. They have little interest in gods or being worshipped, instead practicing a philosophy that considers the primordial forces of deep space as worthy of faith and fear. Jah-tohlian philosophers contemplate these mysterious forces from many perspectives at once, burning through numerous brains in the search of insight.\nThe Dominion of the Black is a conglomeration of deep-space conquerors with a strong presence on Aucturn, the most remote planet in Golarion's solar system. The Dominion has secret outposts all over Golarion; most of its members on the planet are scouts, using their skills to steal brains and identities, gathering information without any consideration for the inhabitants of the worlds they infiltrate.",
      "armorClass": 26,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision",
          "thoughtsense-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 13,
        "will": 18
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 5,
        "int": 4,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 17,
        "arcana": 18,
        "athletics": 16,
        "occultism": 21,
        "stealth": 17
      },
      "languages": [
        "aklo",
        "chthonian",
        "draconic",
        "protean",
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
          "id": "koIcuQqgttVU1vlz",
          "name": "Jaws",
          "bonus": 20,
          "damage": "2d12+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "CZ7Y6ryNge5pbthf",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d8+6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "xa1KRhMM6JnsIsgl",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3DL5UJWwX9u1m4bv",
          "name": "Thoughtsense 60 feet",
          "kind": "passive",
          "description": "The jah-tohl senses a creature's mental essence as a precise sense with the listed range; it cannot sense mindless creatures with thoughtsense."
        },
        {
          "id": "EMWzNZneWpK3nLER",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9SCUupqh4itf7aTx",
          "name": "Brain Blisters",
          "kind": "passive",
          "description": "A jah-tohl has seven brain blisters on its back that it uses to house stolen brains. A jah-tohl without all seven blisters full is Stupefied with a value equal to the number of empty blisters."
        },
        {
          "id": "SE3QsBzRX2bmkrnR",
          "name": "Brain Loss",
          "kind": "passive",
          "description": "If a jah-tohl takes 30 damage from a critical hit or 25 mental damage, it must succeed at a DC 26 save (check (fortitude, dc:26){Fortitude} for critical damage or check (will, dc:26){Will} for mental damage) or one of its brain blisters is destroyed."
        },
        {
          "id": "mvKy4fox7C9GJNq4",
          "name": "Collect Brain",
          "kind": "action",
          "description": "The jah-tohl extracts the brain of a creature within its reach that has been dead for no more than 1 minute. It can then use an Interact action to secure the brain in one of its empty brain blisters and heal 20[healing] Hit Points."
        },
        {
          "id": "a8yy3kqZmWzMBKci",
          "name": "Mind Snatcher Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] and Enfeebled 1 (1 round)\nStage 2 1d6[poison], enfeebled 1, and Slowed 1 (1 round)\nStage 3 2d6[poison], Enfeebled 2, and slowed 1 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "Xe4Ca7mHwdqwZ7wZ",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "DKzOMGTsKsNpdgWc",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "Gr1TFTNLGLeel9DI",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "AyzJRJMOBnbWfCCO",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "oEiNAKH62bjkhpAG",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "eVIZpb408eOPro5H",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "IZxuZhhKXmWJ4MGS",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "N4XoYvzq21CBAMP3",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "nLpSnrSwwyvKEcht",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "7Y6OYseFGN7Q9Pnh",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "v3IZO7P4r8hbTwH2",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "rjK5J7Dead2CZM4U",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "epDeCENxVLjzKxmf",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "QW6AwVRttMgB4WA4",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "fCuRGUk1t9Cq5eUl",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "x6asRlNhkXi3Qjus",
              "name": "Vision of Death",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mountain-oni",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "yVS5i5U28fQyGz99",
      "slug": "mountain-oni",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:388474316d7a6f26a173766dc757e296886b0d8abf796995b7b1f687a199308c",
    "translatableHash": "sha256:2b9448f167a04fc889215bb4a81a2119766b50552dfc03aabcee4750a7595201",
    "data": {
      "schemaVersion": 1,
      "name": "Mountain Oni",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "giant",
        "humanoid",
        "oni"
      ],
      "description": "Mountain oni are the most common oni and often considered the least sophisticated. While other oni might have a stronger connection to the spiritual world, mountain oni have little interest in anything beyond satisfying their relentless appetites. Sloth and gluttony are common vices among mountain oni, which can allow them to coexist with nearby villages so long as they're well fed, but more ambitious mountain oni can often be found leading ogre war parties or orchestrating violent bandit raids. It's rare for mountain oni to live solitary existences, but those who do prefer to maraud the countryside or exploit villages and hoard the spoils for themselves.\nOni are large, brutal creatures originating in Tian Xia who resemble humanoids with brightly colored skin, tusks, and horns. Though commonly mistaken for fiends, the first oni were originally kami, tutelary nature spirits. These kami suffered a terrible trauma, losing their sacred wards to dramatic disasters or the callousness of others, and as a result transformed into the violent creatures they are today. While some believe that oni can be spiritually placated through proper ritual worship that transforms them back into kami, many of these would-be saviors fall to oni's notorious brute strength, flesh-rending teeth, and command of storms.\nOni possess the ability to disguise themselves as other humanoids. They are rarely creative in their disguises, often choosing a specific appearance similar to their oni form and sticking with it. This simplicity catches many by surprise, however, as people assume oni are limited to a single alternate form, which is by no means the case.",
      "armorClass": 26,
      "hitPoints": 165,
      "speedFeet": 30,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 16,
        "deception": 18,
        "intimidation": 18,
        "survival": 17
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 10"
        ]
      },
      "attacks": [
        {
          "id": "px9Ml061hOZWBjpS",
          "name": "Jaws",
          "bonus": 20,
          "damage": "2d6+9 piercing; 1d6 bleed",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "p198oSgaXJCztW9z",
          "name": "Tetsubo",
          "bonus": 21,
          "damage": "2d10+9 bludgeoning",
          "traits": [
            "magical",
            "razing",
            "reach-10",
            "shove",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "PVl8sc8qtB79eDiU",
          "name": "Bean Panic",
          "kind": "passive",
          "description": "Oni are curiously afraid of beans, especially as the seasons begin to change. If a creature Interacts to throw a handful of beans at the oni, the oni becomes Frightened 2. While frightened this way, their weakness to spirit damage is increased by 5. The oni then becomes immune to bean panic for 24 hours."
        },
        {
          "id": "Qfrugsr5o7w29pqO",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "jBHuj3372sKbbNz0",
          "name": "Change Shape",
          "kind": "action",
          "description": "The mountain oni can take on the appearance of any Medium or Large humanoid creature. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "m5UYSTpePcNsLonC",
          "name": "Thundering Iron",
          "kind": "action",
          "description": "The oni lifts their tetsubo and brings it down in a deafening peal. They make a tetsubo Strike. On a success, the target takes an additional 1d10 sonic damage.\nEach creature in a @Template[emanation|distance:10] around the target, other than the oni, take this damage as well and is pushed 5 feet away from the target."
        }
      ],
      "spellcasting": [
        {
          "id": "lxsWZN09WFvanWVx",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 17,
          "saveDc": 25,
          "spells": [
            {
              "id": "xeOeSKB1tB0nwsCm",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:arboreal-regent",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "z2l8K7woKYPkm0qz",
      "slug": "arboreal-regent",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52ae389d6a0168f1d57fbf0392df57aa7cb0fdc40d736f906dfff9a25d902c72",
    "translatableHash": "sha256:461debafc9877dcc41b7b59c94f637fd0572cefe5dba78ecd5f3e23453b2ada7",
    "data": {
      "schemaVersion": 1,
      "name": "Arboreal Regent",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "plant",
        "wood"
      ],
      "description": "Arboreal regents are lumbering, solitary creatures responsible for guarding an entire forest. They take an especially long view of affairs and never act brashly or without much deliberation. They occasionally come together in small groups called groves to share news and pass their wisdom down to the arboreal wardens that have sprouted under their watch. In times of grave danger, all the groves in a region may gather for a great months-long meeting to plan and, eventually, act upon a threat.\nThe typical arboreal regent is 30 feet tall, has a trunk 2 feet in diameter, and weighs 4,500 pounds.\nArboreals are guardians of the forest and representatives of the trees. As long-lived as the woods they watch over, arboreals consider themselves parents and shepherds of trees rather than their gardeners. Consequently, while arboreals tend to be slow and methodical, they are terrifyingly swift when forced to fight in defense of the woods. Though they rarely seek out the companionship of short-lived folk—even elves are fugacious in the eyes of arboreals—and have an inherent distrust of change, arboreals have been known to tolerate those who seek to learn from their long-winded, rambling monologues, especially if such pupils also express a desire to protect the timberlands. Against those who threaten their realm, such as loggers eager to harvest lumber or settlers aiming to establish croplands or a town, arboreals' wrath is unwavering and devastating. Perhaps ironically, arboreals are gifted at tearing down what others build—a trait that serves vengeful members of their kind well.",
      "armorClass": 26,
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
        "reflex": 11,
        "will": 16
      },
      "abilities": {
        "str": 7,
        "dex": -1,
        "con": 6,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 19,
        "diplomacy": 16,
        "intimidation": 16,
        "nature": 18,
        "stealth": 11
      },
      "languages": [
        "arboreal",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 5",
          "piercing 5"
        ],
        "weaknesses": [
          "axe-vulnerability 5",
          "fire 10"
        ]
      },
      "attacks": [
        {
          "id": "oSq2qYAln4B4sFY0",
          "name": "Branch",
          "bonus": 19,
          "damage": "2d12+7 bludgeoning",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "WeXirhh6gD0DCTGB",
          "name": "Root",
          "bonus": 19,
          "damage": "2d8+7 bludgeoning",
          "traits": [
            "trip"
          ]
        },
        {
          "id": "2T8gBoUiFYXYQ2wp",
          "name": "Rock",
          "bonus": 19,
          "damage": "2d10+7 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "DM0bCE11AyauvvEH",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9ROgeFg0LqFYjWto",
          "name": "Awaken Tree",
          "kind": "action",
          "description": "The arboreal regent causes a tree within 180 feet to uproot itself and fight as a minion using the statistics for an Awakened Tree. The arboreal regent can control up to two awakened trees at a time, and they can issue commands to both trees as a single action, which has the concentrate and auditory traits."
        },
        {
          "id": "0BMCA9P7mLMAMs10",
          "name": "Sunder Objects",
          "kind": "passive",
          "description": "When an arboreal regent damages an item or structure, it deals an additional 2d10 damage to that item or structure."
        },
        {
          "id": "QcXlYliyTvqiEDHM",
          "name": "Throw Rock",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "qqqYIHulqpSQmjAc",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "JgLAUNOR58PPWtCz",
              "name": "Speak with Plants (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:triceratops",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "zAxKR8XWtQm2rqh4",
      "slug": "triceratops",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:583c8342fdc9cebe3f716b081f4970473e21d2d0c7aabdbea422fabb46e6662a",
    "translatableHash": "sha256:3eeafc120eb13253cbf0d08290717fba5540a0f8c407228567f34888952105da",
    "data": {
      "schemaVersion": 1,
      "name": "Triceratops",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Triceratopses are muscular quadrupeds with powerful short legs, thick necks, and heads crowned by a wide, bony frill. Though they bear three large horns, they use these bony protrusions only to defend themselves or fight for dominance. Short-tempered and obstinate, triceratopses are unlikely to back down from a fight unless they are hopelessly outmatched, and the creatures are known to fight to the death for no apparent reason beyond stubbornness. Triceratopses often serve as mounts for humanoids, particularly giants, who can comfortably ride behind the dinosaurs' protective bone frills. A triceratops is 30 feet long and weighs as much as 10 tons.\nRemnants from the world's primeval era, these enormous reptilian animals still exist in large numbers in remote wildernesses or underground in magical Darklands caverns. Lizardfolk, orcs, giants, and other humanoids who live near dinosaurs use the animals as mounts, guards, or hunting beasts. Occasionally, rich nobles will collect dinosaurs to display them in menageries, which almost inevitably leads to cast-offs being nursed back to health by druids and other champions of nature. When dinosaurs establish themselves in regions outside their normal habitats, it's often the result of a large collection being released.",
      "armorClass": 26,
      "hitPoints": 140,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 21
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "tJF3MvlHvCalGkXk",
          "name": "Horns",
          "bonus": 19,
          "damage": "2d8+9 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "FtCodDvKYE5srIOI",
          "name": "Foot",
          "bonus": 19,
          "damage": "2d6+9 bludgeoning",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "D2tbPVYsNe8XmlsW",
          "name": "Frill Defense",
          "kind": "reaction",
          "description": "Trigger The rider is targeted with an attack.\nRequirements A creature must be mounted on the triceratops.\nEffect The triceratops intercepts the attack with its bony frill. The rider gains a +2 circumstance bonus to its AC against the triggering attack.\nEffect: Frill Defense"
        },
        {
          "id": "OW9KKx3Offpslmah",
          "name": "Lumbering Charge",
          "kind": "action",
          "description": "The triceratops Strides up to 10 feet and then makes a Strike."
        },
        {
          "id": "OKzqL9XBxnlVikDo",
          "name": "Trample",
          "kind": "action",
          "description": "Large or smaller, foot, check (reflex, dc:26, basic)"
        },
        {
          "id": "bWfE1BR1kz8fIanF",
          "name": "Vicious Gore",
          "kind": "passive",
          "description": "A triceratops deals 2d6 extra persistent bleed damage to Prone targets it hits with its horns."
        },
        {
          "id": "bcl3zcX6TOOupNt9",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:greater-herexen",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "ZlAzJNsHYz1ZtMVK",
      "slug": "greater-herexen",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:95b6f971e5a4e2f46efc58b534d5568cf401348b3ab6df4641e4437fc6b714df",
    "translatableHash": "sha256:4061c9340c6efdd01dee885d985dfea60a6ee2ced275de415285792f3ef7b4e9",
    "data": {
      "schemaVersion": 1,
      "name": "Greater Herexen",
      "level": 8,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "When a cleric rebels against their deity and dies in the grip of blasphemous rage, the heresies they committed in life may fuel their transformation into an undead herexen. Herexens seek vengeance against the deity they once worshipped, defiling temples, slaying the faithful, and rallying lesser undead and death cultists to aid them in their unholy quests. Though a herexen's divine gifts have mostly been corrupted into the vileness of undeath, they stubbornly cling to remnants of their former power, still wielding magic and armaments favored by the deity they so greatly despise.\nGroups of herexens that blasphemed against the same deity sometimes combine to form a mockery of a congregation, conducting blasphemous rites with something approaching euphoria. These congregations are often formed from a blasphemous cult whose members practiced their heresy together in life and died together, though some gather independent herexens of the same former faith.",
      "armorClass": 26,
      "hitPoints": 135,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 16,
        "will": 19
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 6,
        "cha": 4
      },
      "skills": {
        "athletics": 15,
        "deception": 16,
        "religion": 20,
        "stealth": 15
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
          "bonus": 20,
          "damage": "2d6+8 piercing",
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
          "description": "While wielding the favored weapon of its former deity (such as a dagger for an ex-Pharasmin herexen), the greater herexen's Strikes deal an additional 2d6 spirit damage to creatures with the holy trait."
        }
      ],
      "spellcasting": [
        {
          "id": "dYuJ14oybPHNyAOW",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 18,
          "saveDc": 26,
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
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "k4S2pT9WIcIQtkae",
              "name": "Death's Call",
              "rank": 1
            },
            {
              "id": "Cl4lMufamPTlUa8F",
              "name": "Eradicate Undeath",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:stone-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "zT3fSxNatEbrkCzN",
      "slug": "stone-giant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3ac7f565473308f012f1b3fd8a4daba94caff8ff4bf022a643a8f40346154c67",
    "translatableHash": "sha256:48d20c2390e8e220e04649989b3dae76c65e2cb03b3647ebccdd46c1cfb8cd85",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Giant",
      "level": 8,
      "rarity": "common",
      "size": "large",
      "traits": [
        "earth",
        "giant",
        "humanoid"
      ],
      "description": "Stone giants are stoic, reclusive herders and artists with a rich history and collection of traditions. They dwell in caves in tall mountains and craggy ranges, where their grayish skin allows them to blend in with their surroundings and go unnoticed, despite being around 12 feet tall. Benign travelers who come across a clan of stone giants need not worry, however, for stone giants do not actively invite confrontation or strife. They are, by and large, peaceful people who seek wisdom through exploration of nature and long meditations on the elements of the natural world. Their elders are among the wisest of giants, using their charisma and druidic magic to lead their clans to prosperity and harmony with nature.\nA stone giant clan will usually raise a number of animals as pets, favoring cave bears, elephants, or dinosaurs depending on the environment. Many clans also accept allies, considering arboreals, elementals, and even gargoyles as kin through their shared connection with the earth.\nGiants are massive humanoid creatures who live in remote regions throughout the world. They vary widely but are united in their hunger, requiring sustenance of their own element along with the feasts one would expect from such a massive humanoid. Although a simple matter for some giants, more esoteric types find this need a harsh reality. While a massive fistful of ice or snow alongside their meal will satisfy a frost giant, shadow giants hunger for the coagulated shadows of the Netherworld.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 35,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 14,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": 0,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 20,
        "intimidation": 14,
        "nature": 18,
        "stealth": 14
      },
      "languages": [
        "common",
        "jotun",
        "petran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GGPFGv65lu6xKmVn",
          "name": "Greatclub",
          "bonus": 21,
          "damage": "2d10+12 bludgeoning",
          "traits": [
            "backswing",
            "magical",
            "reach-10",
            "shove"
          ]
        },
        {
          "id": "UfLxn8BgeR2BOqee",
          "name": "Fist",
          "bonus": 20,
          "damage": "2d6+14 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "QtDv0dYBxOQuvIS5",
          "name": "Rock",
          "bonus": 18,
          "damage": "2d6+12 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "YyEGxAUm7o0RLfYo",
          "name": "Swat Projectile",
          "kind": "reaction",
          "description": "Requirements The stone giant must have a free hand but can Release anything as part of this reaction\nTrigger The giant is targeted by a physical ranged attack\nEffect The stone giant gains a +4 circumstance bonus to AC against the triggering attack. If the attack misses and the projectile was made of stone, the giant can throw it back at the attacker as a rock ranged Strike."
        },
        {
          "id": "206EmbcftIC6vntv",
          "name": "Big Swing",
          "kind": "action",
          "description": "The stone giant makes a greatclub Strike. The target is Pushed up to 10 feet on a hit or up to 20 feet on a critical hit.\nIf the target collides with a solid object, it takes bludgeoning damage as though it had fallen the distance it moved."
        },
        {
          "id": "VB54UJmkr2WquSvQ",
          "name": "Create Boulder",
          "kind": "action",
          "description": "The stone giant molds a boulder from primal earth and throws it as a rock Strike. A creature hit by the Strike must succeed at a check (reflex, dc:26) save or be knocked Prone."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:greater-hell-hound",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "15TyWlbDQWNjMKeL",
      "slug": "greater-hell-hound",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:73d642238b0692a1ef17b3f2bc137710980e86e1593bcc840d3d1fe40fdf6dce",
    "translatableHash": "sha256:d0c143f9653aa12958e746d8cb593d038c229de787871300ece410c5035ee262",
    "data": {
      "schemaVersion": 1,
      "name": "Greater Hell Hound",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "fiend",
        "fire",
        "unholy"
      ],
      "description": "Believed to be bred by the Kings of Hell themselves within vast kennels, greater hell hounds are the favored guards and hunting hounds of powerful fiends and, rarely, mortals who worship them and have earned their favor.\nHell hounds are fiendish, extraplanar canines hailing from the Pit that can hunt down quarry and breathe supernatural gouts of flame. They are temperamental and quick to exhibit aggressive behavior.",
      "armorClass": 28,
      "hitPoints": 150,
      "speedFeet": 40,
      "perception": {
        "modifier": 19,
        "senses": [
          "darkvision",
          "scent-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 19,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 5,
        "con": 5,
        "int": -2,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "acrobatics": 18,
        "athletics": 19,
        "stealth": 18,
        "survival": 20
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
          "cold 10"
        ]
      },
      "attacks": [
        {
          "id": "Id4tvbdVJaXtgOOu",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d8+6 piercing; 2d6 fire",
          "traits": [
            "magical",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "1hjabmTtR1jzUEh9",
          "name": "Hellish Revenge",
          "kind": "reaction",
          "description": "Trigger The greater hell hound is critically hit by any Strike\nEffect The greater hell hound's Hellfire Breath recharges. They can immediately use it as part of this reaction."
        },
        {
          "id": "escewXwusyFQw1t9",
          "name": "Hellfire Breath",
          "kind": "action",
          "description": "The hell hound breathes flames that deal 10d6[fire|options:area-damage] damage to all creatures in a @Template[cone|distance:15] (check (reflex, dc:28, basic, options:area-effect) save.)\nThe hell hound can't use Hellfire Breath again for [[/gmr 1d4 #Recharge Hellfire Breath]]{1d4 rounds}. If the greater hell hound would take fire damage or be targeted by a fire effect, their Hellfire Breath recharges."
        },
        {
          "id": "DXOTK3gZgiPc9AVG",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The greater hell hound's Strikes deal 1d8 extra damage to creatures within the reach of at least two of their allies."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:frost-giant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "893mp411SdYren3H",
      "slug": "frost-giant",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:af7c51a5d67c731dc529deadf9b1fa60e3b640541d81909f742e9661077e5de9",
    "translatableHash": "sha256:06c3998242cf8ab5fb5e9f5c451845f068f0643cb2c7d53ed1784b788f258b65",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Giant",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "cold",
        "giant",
        "humanoid"
      ],
      "description": "Frost giants are remorseless marauders who pillage and plunder from those who dare to live near them in desolate, frigid lands. Their clans range from extremely territorial hunters who ferociously defend their expanse of tundra to nomadic families that roam icy slopes in search of settlements to conquer. Frost giant clans are ruled by the family member who exhibits the greatest ferocity and prowess in battle—often a massive bully who demands absolute obedience from the rest.\nFrost giants' appearance is reflective of their icy homes, with flesh ranging from a translucent glacial blue to a slushy gray. A typical frost giant stands about 15 feet tall and weighs approximately 2,800 pounds. They often wear metal armor adorned with the furs, skin, teeth, and tusks of slain beasts and heft weapons as long as dining tables. A well-stocked frost giant clan will raise mammoth mounts or press witchwargs into service as hunting companions, but consider their environment too hostile for a soft concept like pets.\nGiants are massive humanoid creatures who live in remote regions throughout the world. They vary widely but are united in their hunger, requiring sustenance of their own element along with the feasts one would expect from such a massive humanoid. Although a simple matter for some giants, more esoteric types find this need a harsh reality. While a massive fistful of ice or snow alongside their meal will satisfy a frost giant, shadow giants hunger for the coagulated shadows of the Netherworld.",
      "armorClass": 29,
      "hitPoints": 150,
      "speedFeet": 30,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 16,
        "will": 16
      },
      "abilities": {
        "str": 6,
        "dex": 0,
        "con": 5,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 23,
        "crafting": 18,
        "intimidation": 18,
        "nature": 17,
        "stealth": 17
      },
      "languages": [
        "common",
        "jotun"
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
          "id": "eqCGFR9UmHOuUpMI",
          "name": "Greataxe",
          "bonus": 21,
          "damage": "2d12+12 slashing",
          "traits": [
            "magical",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "3VDIY4vCKlW0qvFl",
          "name": "Fist",
          "bonus": 21,
          "damage": "2d8+12 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "3GqX6rg7gxLsmuvd",
          "name": "Icicle",
          "bonus": 21,
          "damage": "3d6 cold; 2d8 piercing",
          "traits": [
            "cold",
            "primal"
          ]
        }
      ],
      "actions": [
        {
          "id": "P0c0u4UwdLFnplXT",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "VBMoJbMPEmzIPu5X",
          "name": "Chill Breath",
          "kind": "action",
          "description": "The frost giant breathes out a @Template[cone|distance:15] of freezing moisture that quickly condenses into ice, dealing 4d6[cold|options:area-damage] damage. Each creature in the cone must attempt a check (reflex, dc:28, basic, options:area-effect) save. A creature that fails its save is also Immobilized and takes 2d6[cold] damage at the end of each of its turns until it gets free ([[/act escape dc=28]]).\nThe giant can't use Chill Breath again for [[/gmr 1d4 #Recharge Chill Breath]]{1d4 rounds}."
        },
        {
          "id": "UkuRoGDf37QBLm8k",
          "name": "Ice Stride",
          "kind": "passive",
          "description": "A frost giant isn't impeded by difficult terrain caused by snow or ice, nor do they need to attempt Acrobatics checks to keep from falling on slippery ice."
        },
        {
          "id": "ZNWKdUJvc61evvBc",
          "name": "Wide Swing",
          "kind": "action",
          "description": "The frost giant makes a single greataxe Strike and compares the attack roll result to the ACs of up to two foes within their reach. This counts as two attacks for the frost giant's multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:mirage-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "8JbgbskxcU0EloJX",
      "slug": "mirage-dragon-young",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6f3b687abaaf4a2f17d2171e0537060c319b808e22a010c2427c550c00b2f59a",
    "translatableHash": "sha256:aab6a814551021a185cdc924b49d79598d2b08ab35baadb0ab8e55f9b7a481bf",
    "data": {
      "schemaVersion": 1,
      "name": "Mirage Dragon (Young)",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "arcane",
        "dragon"
      ],
      "description": "Mirage dragons are masters of illusion magic and use their powers to deceive others and further their own agendas. In addition to their magical prowess, mirage dragons possess a number of additional features to help them on hunts or mislead attackers, such as their camouflaging scales and a hallucinatory breath that can confound multiple foes at once. Mirage dragons are vain and egotistical figures. They ultimately care more about themselves than others.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 27,
      "hitPoints": 155,
      "speedFeet": 40,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 17,
        "will": 20
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 4,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 19,
        "arcana": 19,
        "athletics": 18,
        "crafting": 19,
        "deception": 21,
        "diplomacy": 19,
        "performance": 19,
        "stealth": 19,
        "thievery": 19
      },
      "languages": [
        "common",
        "draconic"
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
          "bonus": 20,
          "damage": "2d10+8 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "87YSOEdnlPfUeHN2",
          "name": "Claws",
          "bonus": 20,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "Yhg16IWJyaM5UijW",
          "name": "Tail",
          "bonus": 18,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
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
          "description": "The dragon breathes a cloud that assaults the senses and deals 7d6[mental|options:area-damage] damage in a @Template[cone|distance:30] (check (will, dc:27, options:area-effect) save). A creature that fails its save is also Confused for 1 round (1 minute on a critical failure) and is then temporarily immune to being confused by Hallucinatory Breath for 1 hour.\nThe dragon can't use Hallucinatory Breath again for [[/gmr 1d4 #Recharge Hallucinatory Breath]]{1d4 rounds}."
        },
        {
          "id": "YGFIBzztMdCKAOGu",
          "name": "Lunging Bite",
          "kind": "action",
          "description": "The dragon lunges their head forward, making a jaws Strike with an extended reach of 20 feet."
        },
        {
          "id": "5Ta2GgqbQiT1PrJW",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The dragon's Strikes deal an additional 2d6 precision damage to Off-Guard targets."
        }
      ],
      "spellcasting": [
        {
          "id": "NzgVuRgGbWE2SrTH",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 19,
          "saveDc": 27,
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
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "dm80Nb5wKZg8HVuk",
              "name": "Illusory Creature",
              "rank": 4
            },
            {
              "id": "fQwO0KFoOQqhpAdi",
              "name": "Illusory Object (At Will)",
              "rank": 4
            },
            {
              "id": "Ml59ZzimtLZdAUQR",
              "name": "Mirage",
              "rank": 4
            },
            {
              "id": "kNrGHpBqCkbxuQ7O",
              "name": "Illusory Scene",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:doldrums-heap",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9qlccWxGFcQmgL3h",
      "slug": "doldrums-heap",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:22e0b181b1baad03af2cfbfe89a873540927ec7f474d7555f07c61cc7dc0e9d4",
    "translatableHash": "sha256:18cbc797ccf4451f966e8c502d8a23bc2d436301ebcba39929e0f3b1111f2d53",
    "data": {
      "schemaVersion": 1,
      "name": "Doldrums Heap",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "plant"
      ],
      "description": "Though most sargassum heaps divide once they grow too large, occasionally a heap will continue to grow indefinitely. These \"doldrum heaps\" can tangle and immobilize ships, tearing them apart or feasting on the hapless passengers.\nA sargassum heap is a mass of semi-intelligent seaweed that floats through the ocean, luring in its victims with hallucinogenic spores. Those affected by the spores are drawn towards the heap, envisioning their heart's desire. This might be a lost loved one, a child in need of help, an enchanting mermaid, the promise of dry land, and so on. Once their prey is close enough, the sargassum heap lashes out with its seaweed tendrils and crushes it to death.",
      "armorClass": 16,
      "hitPoints": 300,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "wavesense-120"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 5,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 21,
        "stealth": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision",
          "unconscious"
        ],
        "resistances": [
          "cold 10"
        ],
        "weaknesses": [
          "slashing 10"
        ]
      },
      "attacks": [
        {
          "id": "jpFL72w3BboR07Yv",
          "name": "Tendrils",
          "bonus": 21,
          "damage": "2d12+10 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "DAGTYqxmYwmb1nUv",
          "name": "Wavesense (Precise) 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VbSNmrPiDeAQyG9N",
          "name": "Mirage Spores",
          "kind": "passive",
          "description": "300 feet.\nThe sargassum heap constantly produces a field of hallucinogenic spores that causes those affected to see the monster as whatever they desire most. Each creature within the emanation must succeed a check (will, dc:27) save or become Fascinated with the sargassum heap and compelled to move toward it on the creature's turn. Creatures fascinated this way are also Off-Guard. If the sargassum heap attacks, the fascinated condition ends only for the creature that is attacked. On a successful save, a creature is temporarily immune to mirage spores for 24 hours."
        },
        {
          "id": "5s5muUWtH0Wm60W5",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d12+10)[bludgeoning], check (fortitude, dc:28, basic)"
        },
        {
          "id": "p4OxahbPULEyOO31",
          "name": "Draw In",
          "kind": "action",
          "description": "The doldrums heap attempts to Reposition up to three creatures it has Grabbed or Restrained. These attempts neither apply nor count toward the heap's multiple attack penalty.\nIt can move them into its own space, dealing (1d12+10)[bludgeoning] damage."
        },
        {
          "id": "6CyMoYmnHC2gmehW",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:megalodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "9rXYGu7D3umIW1sv",
      "slug": "megalodon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4fb5feebddefa49e794d01991e4630208646272317ff89aaf0073aa9cf101343",
    "translatableHash": "sha256:5a413c7cab7c488ed89ac240a6ae8e78bc126fc29c37ee8d1e1016a2d2694efa",
    "data": {
      "schemaVersion": 1,
      "name": "Megalodon",
      "level": 9,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Prehistoric sharks of incredible size, strength, and ferocity, megalodons scour waters deep and shallow to sate their considerable hunger. The presence of a megalodon undeniably affects the local aquatic ecosystem.\nSharks of all shapes and sizes have stalked the oceans, largely unchanged, since primordial times. They are efficient, ruthless predators with multiple rows of razor-sharp teeth capable of rending prey in an instant. Their uncanny ability to smell blood in the water means sharks might show up at any scene of aquatic carnage.",
      "armorClass": 27,
      "hitPoints": 180,
      "speedFeet": 0,
      "perception": {
        "modifier": 20,
        "senses": [
          "scent-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 16,
        "will": 17
      },
      "abilities": {
        "str": 8,
        "dex": 2,
        "con": 5,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "athletics": 21,
        "stealth": 19,
        "survival": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EaebstxdYxHFj1bR",
          "name": "Jaws",
          "bonus": 22,
          "damage": "2d12+10 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "0IZG1AJ5MeYSR9mc",
          "name": "Tail",
          "bonus": 22,
          "damage": "2d8+10 piercing",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "5yDMt3Vna9iVApvJ",
          "name": "Blood Scent",
          "kind": "passive",
          "description": "The megaladon can smell blood in the water from up to 1 mile away."
        },
        {
          "id": "91Bz1Au1eeA0F5Kc",
          "name": "Breach",
          "kind": "action",
          "description": "The megalodon Swims up to its swim Speed, then Leaps vertically out of the water up to 25 feet high, making a Strike against a creature at any point during the jump (this lets it attack a creature within 35 feet of the water's surface or 40 feet with its tail). After the Strike, the megalodon splashes back down into the water."
        },
        {
          "id": "a4bag8JDNGO7xCiD",
          "name": "Savage",
          "kind": "action",
          "description": "Requirements The megalodon hit with a jaws Strike on its most recent action this turn.\nEffect The creature the megalodon hit takes 2d12[slashing] damage."
        },
        {
          "id": "gC0TpsGsMQ5RDDau",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, (2d8+5)[bludgeoning], Rupture 20"
        },
        {
          "id": "E3WrwhsH06axDfAu",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "JWS021oC5szbCrAS",
          "name": "Push 15 feet",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:leukodaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "bb5Z4z4EHb5LbCLK",
      "slug": "leukodaemon",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:902eb7725de2ab6aa8067c103fd36d1b25bddd8ad0cbd056d87f197a4d2242e2",
    "translatableHash": "sha256:dbd7b5e9608d3cb2dbe30da4cdb7d78485baa05086dcc4f33bd15e8ad2f00c4e",
    "data": {
      "schemaVersion": 1,
      "name": "Leukodaemon",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "These skull-headed, vulture-winged daemons are harbingers of pestilence and servants of their patron Apocalypse Rider, Apollyon. Manifestations of evil souls who perished from disease in life, leukodaemons work tirelessly alongside one another to spread disease across all the worlds of the multiverse.\nDenizens of the bleak and terrible plane of Abaddon, daemons are shaped by and devoted to the destruction of life in all its forms. They seek the death of every mortal being by the most painful and horrible means possible, in service to the Apocalypse Riders. Each kind of daemon represents a different way to die, and their powers are nearly always aimed at spreading that particular form of death. Through the use of these powers, they seek to drag all existence down into a pit of hopelessness and despair, and to commit all souls to oblivion.\nWhile mortals who summon daemons usually seek to use the creatures' destructive and corrupting powers for their own ends, daemons always look for ways to spread fear, doubt, and despair wherever they go. Often, daemons disguise their plots as the workings of other fiends, knowing that such confusion compounds mortals' fear and keeps those mortals from bringing the most effective weapons. As a result, learned mortals sometimes refer to daemons as \"riders\" after their leaders or \"soul mongers\" after their largest industry.\nWhile many fiends seek to tempt mortals into lives of nihilistic evil to increase their own numbers and power on their native planes, daemons are further driven by a supernatural hunger for mortal souls and use a variety of methods—not least of which is the cacodaemons' soul gems—to entrap them. On Abaddon and in other forbidding places across the multiverse, souls are simultaneously a delicacy, a trade good, and a source of magical power, and the daemons are among the greatest gluttons, merchants, and abusers of this spiritual \"resource.\"",
      "armorClass": 28,
      "hitPoints": 155,
      "speedFeet": 25,
      "perception": {
        "modifier": 20,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 6,
        "dex": 5,
        "con": 1,
        "int": 3,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "acrobatics": 18,
        "intimidation": 18,
        "medicine": 20,
        "religion": 20,
        "stealth": 18,
        "survival": 16
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
          "holy 10"
        ]
      },
      "attacks": [
        {
          "id": "R2OzRzNgkA2Ivtk0",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d12+9 piercing",
          "traits": [
            "disease",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "PHro3bLYo9Br5Q7R",
          "name": "Claw",
          "bonus": 21,
          "damage": "2d8+9 slashing",
          "traits": [
            "agile",
            "disease",
            "magical",
            "reach-10",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "UsbbZtRGFg0fzukO",
          "name": "Composite Longbow",
          "bonus": 21,
          "damage": "2d8+9 piercing",
          "traits": [
            "deadly-d10",
            "disease",
            "magical",
            "propulsive",
            "reload-0",
            "unholy",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "GrDnRSSifZtVibbk",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "uGne7svJszeghy3d",
          "name": "Plaguesense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "A leukodaemon senses any creature with a disease, and they know the type and current stage of all diseases carried by any creature within range."
        },
        {
          "id": "DG1zbZJXQydDgeBF",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "GoEK3KTZm6r0vhaU",
          "name": "Infectious Aura",
          "kind": "passive",
          "description": "30 feet.\nLeukodaemons radiate infection. All creatures within 30 feet of a leukodaemon take a –2 status penalty to saves against disease. If a creature within range contracts or progresses a disease, all adjacent creatures are exposed to the same disease, at the same DC.\nEffect: Infectious Aura"
        },
        {
          "id": "DjE8LDaTqE6Y8m1b",
          "name": "Daemonic Pestilence",
          "kind": "passive",
          "description": "The leukodaemon can telepathically communicate with the afflicted creature at any distance on the same plane\nSaving Throw check (fortitude, dc:28)\nStage 1 carrier (1 day)\nStage 2 Drained 1 (1 day)\nStage 3 Drained 2 (1 day)\nStage 4 drained 2 (1 day)\nStage 5 Drained 3 (1 week)\nStage 6 dead"
        },
        {
          "id": "cPq1a6i8dlZo6SPu",
          "name": "Plague Breath",
          "kind": "action",
          "description": "The leukodaemon exhales a cloud of corpse-bloated, biting black flies in a @Template[cone|distance:20]. Creatures within the cone take 4d8[piercing|options:area-damage] damage (check (reflex, dc:28, basic, options:area-effect,inflicts:sickened) save). A creature that fails the save becomes Sickened 1 (or Sickened 2 on a critical failure)."
        },
        {
          "id": "3ViZWXlxM2CUiPGG",
          "name": "Quicken Pestilence",
          "kind": "action",
          "description": "The leukodaemon coaxes a disease into full bloom. They choose a target in their aura of pestilence that's currently affected by a disease. That creature must attempt a Fortitude save against the disease as if the interval for the disease's current stage had passed."
        }
      ],
      "spellcasting": [
        {
          "id": "1dUCb8dBnYQ0kq4t",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "CHum1wuK6FBxJMNK",
              "name": "Dispel Magic",
              "rank": 4
            },
            {
              "id": "3VlLp5tyHAozkdRS",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "y8jolYikX4z8ZPNN",
              "name": "Translocate",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:faydhaan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CAEdqhfZDfMLmEyS",
      "slug": "faydhaan",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:005e8a0dd6cde6317c6cab84eeac45f6c87bf2c3d74a5afd095c688592958c3f",
    "translatableHash": "sha256:f2b93b682880c67e7d8b449fd105abc2417ee935d2d5238aeae61573501410b0",
    "data": {
      "schemaVersion": 1,
      "name": "Faydhaan",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "elemental",
        "genie",
        "water"
      ],
      "description": "The faydhaans of the Plane of Water are more powerful than the other genies dwelling on the elemental planes, but they prefer to forge alliances through diplomacy and flattery.\nBefore mortal history, genies were some of the first creations of the cosmos to possess free will. Formed of elemental matter, they traversed the Universe and the six elemental planes of air, earth, fire, metal, water, and wood. The genies who remained on each elemental plane found their matter replaced with those elements. Genies of metal and wood appear in Pathfinder Rage of Elements.\nGenie Shuyookhs\nOlder, wiser, and more powerful genies possess greater power and are revered with the title of shuyookh (typically adjusted to \"sheikha\" if the genie is female or \"sheikh\" for a male). Generally at least 5 levels higher than a typical example of their kind, a shuyookh gains additional spells. The basics of shuyookhs appear here in sidebars and are detailed further in Rage of Elements.\nThe most wondrous of their powers is their ability to grant wishes three times per year. This is not an innate ability but a ritual practice passed down over time in an attempt to replicate the wish-granting abilities of janns.",
      "armorClass": 28,
      "hitPoints": 145,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "wavesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 18,
        "will": 18
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "athletics": 19,
        "crafting": 16,
        "deception": 18,
        "diplomacy": 20,
        "nature": 18,
        "performance": 20,
        "society": 16,
        "stealth": 18
      },
      "languages": [
        "common",
        "thalassic",
        "muan",
        "petran",
        "pyric",
        "sussuran",
        "talican"
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
          "id": "nZfgUjjwZVrdR1bZ",
          "name": "Trident",
          "bonus": 20,
          "damage": "2d8+10 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "Z0xjQ4vMpyymQS0z",
          "name": "Fist",
          "bonus": 20,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "nonlethal",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "hskirvOc2VeALRbT",
          "name": "Trident",
          "bonus": 21,
          "damage": "2d8+10 piercing",
          "traits": [
            "magical",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "pXWT2pfQnO8lkVNs",
          "name": "Wavesense (Imprecise) 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7q0tz0RZaa6kAE5S",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "00dvi5eqFTozS4ym",
          "name": "Turbulent Seas",
          "kind": "passive",
          "description": "40 feet.\nWater in the aura that is also in the same body of water as the faydhaan is difficult terrain for Swimming creatures. Creatures with the water trait are immune."
        },
        {
          "id": "m9xKqsUED5sH6vqA",
          "name": "Change Shape",
          "kind": "action",
          "description": "The faydhaan transforms into a Small or Medium water elemental, aquatic animal, or humanoid. This doesn't affect their statistics, but it could change the damage type of their Strikes."
        },
        {
          "id": "63NX2BGzAfMmzZHR",
          "name": "Gift of Hospitality",
          "kind": "action",
          "description": "The faydhaan gives another willing creature a magical gift or an agreeable conversation. The creature gains a +2 status bonus to Society and Diplomacy checks. A creature can't have more than one gift at a time, and a faydhaan can't grant more than one gift at a time.\nThe gift ends if the target acts hostile, or if the faydhaan renounces the recipient (a single action).\nEffect: Gift of Hospitality"
        },
        {
          "id": "ZXotvZV2fYBkhfUy",
          "name": "Skewer",
          "kind": "action",
          "description": "The faydhaan makes a trident Strike, dealing an extra 2d6[bleed]{2d6 persistent bleed damage} on a hit (4d6[bleed]{4d6} on a critical hit)."
        }
      ],
      "spellcasting": [
        {
          "id": "EyTNAb0HgeYGoaPL",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 12,
          "saveDc": 24,
          "spells": [
            {
              "id": "KWdSQUgB0kkaCB58",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "TkIZ39LY9PV7gqpu",
              "name": "Create Water (At Will)",
              "rank": 2
            },
            {
              "id": "MqaeuIihkDuJ6OYz",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "hWzZ5T1mH5ep5Iaz",
              "name": "Water Breathing",
              "rank": 2
            },
            {
              "id": "RfQVd77S1HWrZsLX",
              "name": "Hydraulic Push (At Will)",
              "rank": 4
            },
            {
              "id": "CP5PlZb4OwawfEHg",
              "name": "Control Water (At Will)",
              "rank": 5
            },
            {
              "id": "5TSsbg2snVo5xuEU",
              "name": "Hydraulic Torrent",
              "rank": 5
            },
            {
              "id": "F8vYo1irCai1se3s",
              "name": "Truespeech (At Will)",
              "rank": 5
            },
            {
              "id": "hMg39jRhTrQDh5SW",
              "name": "Truespeech (Constant)",
              "rank": 5
            },
            {
              "id": "R9ngcrK8rNtddFup",
              "name": "Interplanar Teleport (to Astral Plane, Elemental Planes, or the Universe only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:adamantine-dragon-young",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "CXoAvRxBt3bJ5IZQ",
      "slug": "adamantine-dragon-young",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ce80a95ee888bae685bafe4c51c657fc1cb318e4739a7db4ebf5f509269dcb07",
    "translatableHash": "sha256:c782a09fdedf99883f87b828ef0bf1276445443b5beec9f29144bdd5d9c56666",
    "data": {
      "schemaVersion": 1,
      "name": "Adamantine Dragon (Young)",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "dragon",
        "primal"
      ],
      "description": "The powerful adamantine dragons are one of several dragons known as skymetal dragons. The innate magic that flows through these dragons causes them to draw particular metals to their bodies like magnets or, in some cases, naturally grow these skymetals on their bodies. Adamantine dragons begin their lives with tough scales that are naturally replaced with thicker and even tougher adamantine plating as they grow older. Adamantine dragons are typically steadfast and loyal. Once they commit to a certain purpose, changing their minds is nigh impossible.\nDragons come in myriad forms, with many having magical abilities or connections to magic. Some dragons draw greater power from magic than others, allowing them to manifest abilities or alter their physiques with prolonged exposure to magic. These dragons become more powerful as they age and strengthen their connections with their magical origins. Scholars debate the classification of these dragons, with some preferring the name magical dragons and others using traditional dragons due to their connection to specific magical traditions. Regardless of their names, these dragons share a number of characteristics: their ability to tap into magical energies, intensified might and cunning as they grow older, and an inclination to hoard vast amounts of treasure and wealth.",
      "armorClass": 27,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": [
          "darkvision",
          "scent-imprecise-60",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 15,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 21,
        "intimidation": 18,
        "nature": 17,
        "survival": 19
      },
      "languages": [
        "common",
        "draconic",
        "petran"
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
          "bonus": 21,
          "damage": "2d12+9 piercing",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "s64qcOc82MfOM1BV",
          "name": "Claw",
          "bonus": 21,
          "damage": "2d8+9 slashing",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "T1zx1v2pNRTAUXUg",
          "name": "Tail",
          "bonus": 19,
          "damage": "2d10+9 bludgeoning",
          "traits": [
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "xYDMD5k7o0XYnpVq",
          "name": "Rock",
          "bonus": 19,
          "damage": "2d8+9 bludgeoning",
          "traits": [
            "brutal"
          ]
        }
      ],
      "actions": [
        {
          "id": "iUZ1PAZ7TXwvyqjF",
          "name": "Tremorsense (Imprecise) 60 feet",
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
          "description": "90 feet. check (will, dc:26, options:area-effect,inflicts:frightened)"
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
          "description": "The dragon belches a mass of boulders that deals 8d8[bludgeoning|options:area-damage] damage in a @Template[cone|distance:30] (check (reflex, dc:28, basic, options:area-effect) save).\nThey can't use Avalanche Breath again for [[/gmr 1d4 #Recharge Avalanche Breath]]{1d4 rounds}."
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
          "id": "GxvACJ69DbxdcfgE",
          "name": "Rock Tunneler",
          "kind": "passive",
          "description": "The dragon can burrow through solid stone at a Speed of 20 feet. They can leave a tunnel if they desire, and they usually don't."
        },
        {
          "id": "uFP1Yw0V53Uii1mE",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, (2d12+4)[bludgeoning], Rupture 22"
        },
        {
          "id": "2iyCQPtD05LBG8Gz",
          "name": "Throw Rock",
          "kind": "action",
          "description": ""
        },
        {
          "id": "l6aNI0UsY2Dhl3kx",
          "name": "Grab",
          "kind": "action",
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
    "contentId": "pf2e:bestiary:pathfinder-monster-core:irnakurse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "DEZNEMDhWXvv7BrT",
      "slug": "irnakurse",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5218855a0100d143deb2a258c256ae75fc791b9caf981716f2c22605955917ee",
    "translatableHash": "sha256:bfbc47e6899dae729e45c6de8f1b8e20db4a468a4bdc9b3c4322a935a6606754",
    "data": {
      "schemaVersion": 1,
      "name": "Irnakurse",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "aberration"
      ],
      "description": "Irnakurse are believed to be elves who have been subjected to particularly cruel and humiliating fleshwarping practices, though they are so corrupted by their transformation it is nearly impossible to tell. The process of crafting an irnakurse twists the unfortunate elf into a mass of misplaced limbs, loose flesh, and bony protrusions—parts that should be internal are often left on full display to the world. These beings periodically crawl to the surface from the deepest reaches of the Darklands, leading some elven scholars to the gruesome suspicion that these are remnants of the elves who traveled underground in order to escape Earthfall.\nMagical mishaps, divine curses, and untested technology are all capable of wreaking drastic transformations on the body, and are all rampant on the world of Golarion and beyond. Creatures that have undergone changes so drastic they no longer can be considered the same ancestry as they were before are known as fleshwarps. These beings are rare, and their unsettling appearance often provokes horrified responses from other people.\nSome creatures revel in the total degradation of their defeated foes through fleshwarping. Though the technique was originally taught to mortals by the demon lord Haagenti, mortals have spent eons modifying and perfecting the method. Fleshcrafters torture their enemies in vats of churning magical reagents, reshaping their flesh and psyche alike into horrid and monstrous things.",
      "armorClass": 28,
      "hitPoints": 152,
      "speedFeet": 15,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 18,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 5,
        "con": 3,
        "int": -2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 20,
        "athletics": 20,
        "stealth": 20
      },
      "languages": [
        "chthonian",
        "elven",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "gH06P6rp2bswuGya",
          "name": "Jaws",
          "bonus": 20,
          "damage": "2d12+11 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "kJAxB9HM1zsPkPDC",
          "name": "Tentacle",
          "bonus": 20,
          "damage": "2d8+11 slashing",
          "traits": [
            "agile",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "o40ddeHAtx8cJ0uY",
          "name": "Mind Lash",
          "kind": "passive",
          "description": "A creature hit by an irnakurse's tentacle is overwhelmed with corrupted images of a ruined life and must succeed at a check (will, dc:28) save or be Stunned 2 (or Stunned 4 on a critical failure). After attempting this save, the creature is temporarily immune to mind lash for 24 hours."
        },
        {
          "id": "jr6lRjG0ZeZgW116",
          "name": "Soul Scream",
          "kind": "action",
          "description": "Frequency once per day\nEffect The irnakurse unleashes an alien shriek of nightmarish horror and pain. All non-aberration creatures within a @Template[emanation|distance:10] must attempt a check (will, dc:28) save.\nThe irnakurse can Sustain Soul Scream for up to 6 rounds; each time it does, it repeats the effect without a new save.\nCritical Success The creature is unaffected, and it's temporarily immune to Soul Scream for 24 hours.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature is stupefied 1. Further failed saves against Soul Scream increase the stupefied value by 1, to a maximum of Stupefied 4. Each time the character gets a full night's rest, the stupefied condition gained from Soul Scream decreases by 1.\nCritical Failure As failure, except the stupefied value increases by 2 instead of by 1."
        },
        {
          "id": "ml69ZMPwkVsbCTC7",
          "name": "Storm of Tentacles",
          "kind": "action",
          "description": "The irnakurse makes up to four tentacle Strikes, each against a different target. These attacks count toward the irnakurse's multiple attack penalty, but the multiple attack penalty doesn't increase until after it makes all of its attacks."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:nuckelavee",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "dY1wqHKN6PV4oJ07",
      "slug": "nuckelavee",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc56c8e89507aa7de885638b0714db85f571865fba4b1e3773ccc301cca94e68",
    "translatableHash": "sha256:221c0765d61f781d0ff13377386ef0efbdf6a08691ef3a7112330922e2cd9d32",
    "data": {
      "schemaVersion": 1,
      "name": "Nuckelavee",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "fey"
      ],
      "description": "When pollution despoils a natural waterway, it draws the dreaded nuckelavee to it from the First World. This spirit of wrath is a grisly sight to behold: a horselike monstrosity with the gnarled upper body of a humanoid growing directly from its back. Further enhancing its awfulness, not a patch of skin exists on the misshapen hybrid form, as though it survived its own flaying.\nWhen a nuckelavee rides forth from its domain, it wreaks a trail of destruction across the land surrounding its path. Nuckelavees are considered among the cruelest and most monstrous fey, seen by some as just desserts visited upon those who would befoul the waters of their homes. A nuckelavee, however, doesn't discriminate between those who pollute and those who merely have the misfortune to be in the wrong place at the wrong time.\nDespite their vile reputation among humanoids, nuckelavees are generally respectful of their fey counterparts. Once pollution has been cleansed and water fey like naiads return to a body of water, nuckelavees will peacefully withdraw.",
      "armorClass": 28,
      "hitPoints": 190,
      "speedFeet": 40,
      "perception": {
        "modifier": 16,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 16,
        "will": 20
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": 1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 19,
        "intimidation": 19,
        "nature": 16,
        "stealth": 18,
        "survival": 16
      },
      "languages": [
        "aklo",
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "0Nlywj3cWzzzNsFd",
          "name": "Bastard Sword",
          "bonus": 21,
          "damage": "2d8+12 slashing; 1d6 poison",
          "traits": [
            "magical",
            "reach-10",
            "two-hand-d12"
          ]
        },
        {
          "id": "BkLQtw75VewmqYSQ",
          "name": "Jaws",
          "bonus": 20,
          "damage": "2d8+12 piercing; 1d6 poison",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "OzuFfQ0SSo89GdPZ",
          "name": "Hoof",
          "bonus": 20,
          "damage": "2d6+12 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "GQ4af1lP9hWhVhkx",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "30 feet. check (will, dc:25, options:area-effect,inflicts:frightened)"
        },
        {
          "id": "aTTUtcIk2CfsuqEX",
          "name": "Purity Vulnerability",
          "kind": "passive",
          "description": "Unpolluted fresh water burns a nuckelavee like acid, dealing 1d6[acid] damage to it and causing it to be Sickened 2.\nA nuckelavee can't heal from damage when it's in an area that isn't polluted (subject to GM discretion)."
        },
        {
          "id": "KLTZOvnAaPfSeBEL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "JCHWJ2nJ8ZmLOBs5",
          "name": "Blight Breath",
          "kind": "action",
          "description": "The nuckelavee breathes a @Template[cone|distance:30] of foulness, dealing 8d6[void|options:area-damage] damage to living creatures in the area with a check (fortitude, dc:28, basic, options:area-effect) save. A creature that fails also takes 2d6[bleed|options:area-damage] damage.\nThe nuckelavee can't use Blight Breath again for [[/gmr 1d4 #Recharge Blight Breath]]{1d4 rounds}."
        },
        {
          "id": "1FR8UtVfDAC3RoWh",
          "name": "Mortasheen",
          "kind": "passive",
          "description": "The target can't recover from the fatigued condition caused by mortasheen until the disease is cured. Mortasheen gains the virulent trait against animals and plants\nSaving Throw check (fortitude, dc:28)\nStage 1 Carrier with no ill effect (1 day);\nStage 2 Drained 1 and Fatigued (1 day)\nStage 3 Drained 2 and fatigued (1 day)\nStage 4 dead"
        },
        {
          "id": "sJmlL0pxIhzEUZxO",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, hoof, check (reflex, dc:28, basic)"
        }
      ],
      "spellcasting": [
        {
          "id": "ZRC02nGn0m7GLUtZ",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 20,
          "saveDc": 28,
          "spells": [
            {
              "id": "bWBrbpzqLBZm2Dzn",
              "name": "Aqueous Orb",
              "rank": 3
            },
            {
              "id": "GD79FEdETWoVSjoM",
              "name": "Control Water",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:noxious-needler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "eqHTr6Wj1JadHSa1",
      "slug": "noxious-needler",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2ac4b070ab604af96308a3650d52e9197222d232e82aee889d98b110305419b6",
    "translatableHash": "sha256:041abe77504e9f2f1cfffd1a13c687102adf96d5852486a0082b88440a0fe136",
    "data": {
      "schemaVersion": 1,
      "name": "Noxious Needler",
      "level": 9,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "alchemical",
        "construct",
        "mindless"
      ],
      "description": "This construct is a walking alchemical nightmare capable of inflicting all manner of painful wounds. The noxious needlers' ability to follow orders is granted by the otherwise mindless humanoid brain that floats in their dome-like heads, allowing them to serve as laborers and guards for their creators.\nIn exceptionally rare cases, the brain used in their creation might retain fragments of memories or even an actual intellect, resulting in a noxious needler with a personality and agenda of its own. Unwilling creations often hunt down their creators, venting their rage on similar targets if revenge is impossible. Others blankly replicate the experiments from their last memory",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 19,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 22
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 10 except adamantine, bludgeoning",
          "spells 10 except sonic"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "deSS0MPuciBz6LLK",
          "name": "Syringe",
          "bonus": 22,
          "damage": "2d10+6 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "Yo23Art466hO6dEO",
          "name": "Bomb",
          "bonus": 20,
          "damage": "",
          "traits": [
            "magical",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "TpEz65tv1dwJ91cy",
          "name": "Alchemical Chambers",
          "kind": "passive",
          "description": "A noxious needler's body contains six alchemical chambers filled with different substances. When a noxious needler's ability calls upon a randomly determined alchemical effect, roll 1d6 and consult the following (if you roll the result of a chamber that was shattered, there is no alchemical effect):\n[[/gmr 1d6 #Alchemical Chambers]] | Alchemical Effect |\n1 | Acid Damage\n |\n2 | Cold Damage |\n3 | Electricity Damage |\n4 | Fire Damage |\n5 | Poison Damage |\n6 | Sickness: check (fortitude, dc:26, name:Alchemical Sickness, traits:disease) save or Sickened 1 (Sickened 2 on a critical failure) |"
        },
        {
          "id": "N0g5xdIF3LC3JDxP",
          "name": "Alchemical Rupture",
          "kind": "passive",
          "description": "When a noxious needler takes physical damage from a critical hit or is affected by a shatter spell, one glass chamber within its body shatters, spewing alchemical liquid in a @Template[emanation|distance:5]. Roll on the alchemical chambers list to determine which one shatters—on a roll of 1–5, creatures in the area take 10d6 damage of the appropriate type (DC 28 basic Reflex). On a roll of 6, creatures must instead save against the sickness effect.\n[[/gmr 1d6 #Alchemical Rupture]] | Alchemical Effect |\n1 | 10d6[acid|options:area-damage] damage check (reflex, dc:28, basic, options:area-effect, traits:acid)\n |\n2 | 10d6[cold|options:area-damage] damage check (reflex, dc:28, basic, options:area-effect, traits:cold) |\n3 | 10d6[electricity|options:area-damage] damage check (reflex, dc:28, basic, options:area-effect, traits:electricity) |\n4 | 10d6[fire|options:area-damage] damage check (reflex, dc:28, basic, options:area-effect, traits:fire) |\n5 | 10d6[poison|options:area-damage] damage check (reflex, dc:28, basic, options:area-effect, traits:poison) |\n6 | Sickness: check (fortitude, dc:26, name:Alchemical Sickness, options:area-effect, traits:disease) save or Sickened 1 (Sickened 2 on a critical failure) |"
        },
        {
          "id": "ahtVNJjKjna3LTc1",
          "name": "Alchemical Injection",
          "kind": "passive",
          "description": "When a noxious needler hits a creature with a syringe Strike, roll 1d6 on the alchemical chambers list to determine the additional effect of the attack. The syringe deals an additional 2d6 damage of the appropriate type (or exposes the target to the sickness effect, as appropriate).\n[[/gmr 1d6 #Alchemical Injection]] | Alchemical Effect |\n1 | 2d6[acid] damage\n |\n2 | 2d6[cold] damage |\n3 | 2d6[electricity] damage |\n4 | 2d6[fire] damage |\n5 | 2d6[poison] damage |\n6 | Sickness: check (fortitude, dc:26, name:Alchemical Sickness, traits:disease) save or Sickened 1 (Sickened 2 on a critical failure) |"
        },
        {
          "id": "IUmBG7HtxvrIOHUR",
          "name": "Generate Bomb",
          "kind": "action",
          "description": "The needler fills an empty vial from one of its alchemical chambers to create a bomb and then makes a bomb Strike. Roll 1d6 on the table below. On a roll of 1–5, the bomb deals 3d10 damage and 3 splash damage, matching the damage type of the chamber; you can instead choose to create an alchemical bomb of 11th level or lower that deals the same damage type, such as an acid flask on a roll of 1. On a roll of 6, it creates a sickness bomb, which exposes the target and all creatures in the splash radius to the sickness effect; creatures hit by only the splash receive a +2 circumstance bonus to their Fortitude saves.\n[[/gmr 1d6 #Generate Bomb]] |\nAlchemical Effect |\n1 |\nAcid Damage: 3d10[acid,(3[splash])[acid]] damage\n |\n2 |\nCold Damage: 3d10[cold,(3[splash])[cold]] damage |\n3 |\nElectricity Damage: 3d10[electricity,(3[splash])[electricity]] damage |\n4 |\nFire Damage: 3d10[fire,(3[splash])[fire]] damage |\n5 |\nPoison Damage: 3d10[poison,(3[splash])[poison]] damage |\n6 |\nSickness: check (fortitude, dc:26, name:Alchemical Sickness, traits:disease) save or Sickened 1 (Sickened 2 on a critical failure) |"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:dragon-turtle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kLhBdqKOMHDGjdFz",
      "slug": "dragon-turtle",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1af82847ee9273bbfc3ab282329870479f9498eb1125cff46f5db08000fe22fe",
    "translatableHash": "sha256:d789d762ffd3cb5bf2f14fb524cafb1cd03e7d5f3e6cd9f421f8902504782e57",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Turtle",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "dragon"
      ],
      "description": "These immense aquatic dragons have rocky shells similar to those of tortoises and flippers powerful enough to overturn hardy vessels. The fearsome creatures enjoy being considered as dangerous as storms or natural disasters by seafaring folk. Despite their reputation, many dragon turtles delight in secretly observing seafaring cities grow and evolve throughout the ages. They have even been known to protect such cities from pirates, invading armies, or even other dangerous sea creatures. According to rumor, these turtles have even hired adventurers to handle more inland threats. Such cities will often offer tribute to the great turtle if they discover its intervention. While a dragon turtle hoards the treasures of the ships it sinks, they consider the bounty freely offered from their protected city most precious.\nWhile many dragon turtles are already large enough to inspire awe, some can grow substantially larger. Those massive, ancient dragon turtles are somnolent, resembling rocky islands from a distance; their prodigious hoards can be a source of ancient sea lore. Legends persist of truly immense dragon turtles who spend centuries drifting on the surface of the ocean, far from established shipping lanes or charted waters, with shells that serve as islands capable of supporting entire ecosystems and even, some claim, small settlements whose inhabitants know nothing of land that doesn't drift across the sea.",
      "armorClass": 29,
      "hitPoints": 140,
      "speedFeet": 20,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 15,
        "will": 17
      },
      "abilities": {
        "str": 6,
        "dex": 0,
        "con": 4,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 21,
        "diplomacy": 18,
        "intimidation": 18,
        "stealth": 13,
        "survival": 17
      },
      "languages": [
        "common",
        "draconic",
        "thalassic"
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
          "id": "cGjIW67qp4XNCsT3",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d12+9 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "qoJNaA8ESyVt6CJS",
          "name": "Claw",
          "bonus": 21,
          "damage": "2d8+9 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "TXy3zvlvlJECNrWn",
          "name": "Shell Block",
          "kind": "reaction",
          "description": "Trigger A creature adjacent to the dragon turtle targets it with a melee attack.\nEffect The dragon turtle rolls its shell toward the triggering creature, gaining a +2 circumstance bonus to its AC against the triggering attack."
        },
        {
          "id": "BMYNq39vlF0aowNr",
          "name": "Capsize",
          "kind": "action",
          "description": "The dragon turtle tries to capsize an adjacent aquatic vessel of their size or smaller. The dragon turtle must succeed at a check (athletics, dc:30) check (reduce the DC by 5 for each size smaller than the dragon turtle) or the pilot's Sailing Lore DC, whichever is higher."
        },
        {
          "id": "TH60CRkCIzlaICKX",
          "name": "Conjure Storm",
          "kind": "action",
          "description": "The dragon turtle summons a mighty storm to rage around themself. The area in a @Template[emanation|distance:30] around the turtle becomes difficult terrain for all other flying and swimming creatures. The dragon turtle can end the storm by taking this action again."
        },
        {
          "id": "Vst7qvKg3u5uhWKG",
          "name": "Draconic Frenzy",
          "kind": "action",
          "description": "The dragon turtle makes two Claw Strikes and one Jaws Strike in any order."
        },
        {
          "id": "lW1fc32LlAwkAiq4",
          "name": "Tsunami",
          "kind": "action",
          "description": "The dragon turtle unleashes their destructive prowess by creating a massive growing wave that deals 7d6[bludgeoning|options:area-damage] damage in a @Template[cone|distance:60] (check (reflex, dc:27, basic, options:area-effect,inflicts:prone) save). The wave's damage increases by 10 for creatures who are more than 30 feet away. A creature that fails its save is knocked Prone.\nThe dragon turtle can't use Tsunami again for [[/gmr 1d4 #Recharge Tsunami]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core:cuckoo-hag",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core",
      "sourceId": "kngoPtu4Cr3BtgW8",
      "slug": "cuckoo-hag",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:48c5b2404ba61970c91a241a7bc6508b71177f0582210844fd3c7c9d445d66b9",
    "translatableHash": "sha256:a8bd54f18a2944ab6e85cd918fd963bd67a6ff5edbbda2a626795ca12375a127",
    "data": {
      "schemaVersion": 1,
      "name": "Cuckoo Hag",
      "level": 9,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "hag",
        "humanoid"
      ],
      "description": "Cuckoo hags seek out youths who are unhappy with their lives, disguising themselves as a trusted figure such as a friend or family member. These hags then weave magical, idealized worlds out of illusions and dream stuff to trap their victims. Once they convince a mortal to stay in their magical world forever, the cuckoo hag drains their prey of life force and imprisons their soul.\nA cuckoo hag's true form is a creature with the cracked pale skin of a broken porcelain doll and an almost impossibly thin neck and limbs.\nHags are malevolent predators who use magic and manipulation to lure children and young adults into their clutches. Though their true forms are eldritch and horrifying, hags spend much of their lives disguised as ordinary women. They seek out targets who are unhappy, innocent, or otherwise vulnerable, preying on their weaknesses before snatching them up. The typical hag is abusive, controlling, and narcissistic. Though less malicious hags possibly exist, they rarely reveal their true forms, making them nearly impossible to find.",
      "armorClass": 28,
      "hitPoints": 170,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 19,
        "will": 18
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": 4,
        "wis": 3,
        "cha": 6
      },
      "skills": {
        "arcana": 18,
        "crafting": 18,
        "deception": 21,
        "diplomacy": 19,
        "intimidation": 19,
        "occultism": 19,
        "religion": 18,
        "society": 18
      },
      "languages": [
        "aklo",
        "chthonian",
        "common",
        "daemonic",
        "diabolic",
        "fey",
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "sleep"
        ],
        "resistances": [
          "mental 10"
        ],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "ihuNuFlXMZxioKl0",
          "name": "Claw",
          "bonus": 20,
          "damage": "2d8+8 slashing; 1d6 spirit",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "pNhF7GFjrQ8VQQ9Y",
          "name": "Coven",
          "kind": "passive",
          "description": "A cuckoo hag adds Dominate, Nightmare, Outcast's Curse, and Scrying to their coven's spells."
        },
        {
          "id": "YfGqOsiIhx0TaiUj",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "E7jlxzaIihQdS5MA",
          "name": "Sound Imitation",
          "kind": "passive",
          "description": "A cuckoo hag who succeeds at a Deception check to [[/act lie options=sound-imitation]] can mimic the sound of any feminine voice they have heard (in cases where this may be unclear, the GM is the final arbiter) and have a +4 circumstance bonus to this check."
        },
        {
          "id": "1VEl4iJ7F2Ibvo7T",
          "name": "Change Shape",
          "kind": "action",
          "description": "The cuckoo hag can take on the appearance of any Medium female humanoid. This doesn't change their Speed or their attack and damage bonuses with their Strikes but might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "4aNVURqHi7XpEN03",
          "name": "Cuckoo's Lair",
          "kind": "passive",
          "description": "A cuckoo hag is intrinsically connected to a pocket dimension that serves as their home domain. The lair is an extradimensional space that is 40 feet wide, 40 feet deep, and 30 feet tall. It contains whatever mundane food, buildings, landscapes, and objects that the cuckoo hag desires, though anything removed from the cuckoo's lair dissolves into nothingness instantly.\nIn order to enter or leave the plane, the cuckoo hag must create a door in the physical world as a single action, which has the concentrate and manipulate traits. The door is Invisible by default, though the cuckoo hag can choose a target creature that can perceive the door normally. The cuckoo hag can Dismiss this door from reality, but only if they (and no other creature) are inside of their lair and alone."
        },
        {
          "id": "o4k078mKK1fQa1cc",
          "name": "Soul Covenant",
          "kind": "passive",
          "description": "Requirements The cuckoo hag can cast Seize Soul at will, but only to target a creature who has agreed to stay with them forever. They typically do so as soon as the agreement is made but might hold off to gain leverage over a situation.\nThey typically place the soul into a construct, typically a soulbound doll if they want a companion or a more powerful construct if they want a guardian."
        }
      ],
      "spellcasting": [
        {
          "id": "SXmAKsDPSPYlTSIc",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "9wYSJMHGecogM5lK",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "ndQjc1uBHargGwam",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "aeJD1Ukcw9JJ9jye",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "EdrsW3MySmQLx2hO",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "KhP4xupZ6r04zj56",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "xkMBoIA5XTkWkd7w",
              "name": "Invisibility (At Will)",
              "rank": 2
            },
            {
              "id": "XNn9clcjNBXkKEVK",
              "name": "Dream Message (At Will)",
              "rank": 3
            },
            {
              "id": "BPECRXJA5S7QJJRT",
              "name": "Sleep (At Will)",
              "rank": 3
            },
            {
              "id": "pXdcrqjgsrrOfpSv",
              "name": "Acid Grip",
              "rank": 4
            },
            {
              "id": "O6X1cCt1goUquzIo",
              "name": "Clairaudience",
              "rank": 4
            },
            {
              "id": "16OkGtDX6XMWyT95",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "4RUNIhNqCfZMFGuV",
              "name": "Fly",
              "rank": 4
            },
            {
              "id": "cQD2iQvA4JLfW0Fu",
              "name": "Dreaming Potential",
              "rank": 5
            },
            {
              "id": "gbVymv7ht68fVORd",
              "name": "Illusory Object",
              "rank": 5
            },
            {
              "id": "tLOdYuGX02krNObE",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "LOJ9enIL3X5YSjug",
              "name": "Mirage",
              "rank": 5
            },
            {
              "id": "Cw5zuZ6uqQKaPt3Z",
              "name": "Nightmare",
              "rank": 5
            },
            {
              "id": "CrCf0kbTtICWlVwk",
              "name": "Subconscious Suggestion",
              "rank": 5
            },
            {
              "id": "lV8mZBeaXo2P2fg8",
              "name": "Seize Soul (At Will, See Soul Covenant)",
              "rank": 9
            }
          ]
        },
        {
          "id": "khuoTbs3SZTanSgG",
          "name": "Coven Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 21,
          "saveDc": 29,
          "spells": [
            {
              "id": "OK14EKWMH204gq0Q",
              "name": "Augury",
              "rank": 5
            },
            {
              "id": "ukC6UJJj6YNcu9Un",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "mq8gDXN8r6zzJNLV",
              "name": "Clairaudience",
              "rank": 5
            },
            {
              "id": "zylAt8s2hOfT76dl",
              "name": "Clairvoyance",
              "rank": 5
            },
            {
              "id": "qj0j8QkzDf9xWxpu",
              "name": "Dream Message",
              "rank": 5
            },
            {
              "id": "ekzoFAYm5DmxEPl8",
              "name": "Illusory Disguise",
              "rank": 5
            },
            {
              "id": "IkP3UHy6LgDLPMDA",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "ByLAOaYpPOoeda5X",
              "name": "Nightmare",
              "rank": 5
            },
            {
              "id": "JgLNMc2zW5UqM6Pn",
              "name": "Outcast's Curse",
              "rank": 5
            },
            {
              "id": "2efpWCNnoCdGU4Uw",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "gvUYP6bWTA7Xwzjz",
              "name": "Talking Corpse",
              "rank": 5
            },
            {
              "id": "iS4wk9l5TH5KCI7s",
              "name": "Dominate",
              "rank": 6
            },
            {
              "id": "XWh7Kt7yazJCbv5U",
              "name": "Scrying",
              "rank": 6
            },
            {
              "id": "FKcuax56QowB3Co9",
              "name": "Cursed Metamorphosis",
              "rank": 8
            }
          ]
        }
      ]
    }
  }
]
