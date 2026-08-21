import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_13_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:runaway-blueblood",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "CxsBGAxeNqzp2568",
      "slug": "runaway-blueblood",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:80953a4da19b53e6b41e200b030a4f78bfe6336a665f69ee1342beba08a55361",
    "translatableHash": "sha256:4211645fb24b2f428483e164ce913ae5121b89215d96756c09d3975351cab748",
    "data": {
      "schemaVersion": 1,
      "name": "Runaway Blueblood",
      "level": 3,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Dissatisfied with their privileged upbringing, the runaway blueblood has left the life of luxury behind to forge a new path for themself.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "deception": 9,
        "diplomacy": 9,
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
          "id": "1Dz4SoeztsegE8fA",
          "name": "Shortsword",
          "bonus": 10,
          "damage": "1d6+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "EOa0PFyYsqPDRIXf",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "fK3fkhhhE22F6Nz0",
          "name": "Dueling Pistol",
          "bonus": 10,
          "damage": "1d6+4 piercing",
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
          "id": "FISSmeW1YwcQNDSc",
          "name": "\"Courageous\" Retreat",
          "kind": "action",
          "description": "Requirements The runaway blueblood is adjacent to at least one enemy\nEffect The runaway blueblood gains the Fleeing condition, gains a +5-foot status bonus to their Speed, and gains a +2 circumstance bonus to their AC against reactions triggered by their movement. The blueblood Strides. The effects last until the end of the blueblood's current turn.",
          "traits": []
        },
        {
          "id": "64nZaFNkx6WnlUjR",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The runaway blueblood deals an extra 1d6 damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:artillerist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "D3SJlR6iZYMgL2s8",
      "slug": "artillerist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d0e3fa04f8608d0f209400f35ae01d1a9263e89ac823234814a439ef63665897",
    "translatableHash": "sha256:657f3f93eb6ffeb10d0e3bea1dbfbd4e543338e148bfc1c7301e64bca6a68069",
    "data": {
      "schemaVersion": 1,
      "name": "Artillerist",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The maintenance and operation of a siege weapon is the highest form of art for the artillerist. They are second to none in terms of reliability and speed due to years of experience and training. Their mastery is such that they often construct smaller models of their preferred weapon to mount on their shoulders. Many will insist this is in case of an emergency, but they often truly enjoy crafting, designing, and perfecting their personal piece of artillery. Traditionally, artillerists are used on both side of a siege. Massive weapons are both fired towards the walls and from the walls. In such battles, artillerists are invaluable. However, artillerists are seen in other places outside of massive wars. For example, artillerists are often employed on ships to manage their cannons and harpoons.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 12,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "crafting": 9,
        "diplomacy": 9,
        "society": 9,
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
          "id": "XPrAc5v0cINleOFN",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "owlsZRihFBK6IOaE",
          "name": "Light Hammer",
          "bonus": 10,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "G0X5NTY9zkD9mOdc",
          "name": "Light Hammer",
          "bonus": 10,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "U1SfHxwloAN8Ch0R",
          "name": "Dueling Pistol",
          "bonus": 10,
          "damage": "1d6+3 piercing",
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
          "id": "3qXRqtGN9GQB9uVH",
          "name": "Siege Acumen",
          "kind": "passive",
          "description": "The artillerist is permanently quickened. They can use this extra action only to Aim, Load, or Launch a siege weapon.",
          "traits": []
        },
        {
          "id": "lnKcxanCqxdXvGZG",
          "name": "Siege Shield",
          "kind": "passive",
          "description": "While adjacent to a siege weapon, the artillerist gains a +1 circumstance bonus to AC.",
          "traits": []
        },
        {
          "id": "BKAZUyxs7ojI3Lc0",
          "name": "Siege Weapons Expert",
          "kind": "passive",
          "description": "The artillerist gains a +2 bonus to check (perception, options:siege-weapon) if the artillerist is crewing a siege weapon. Additionally, they gain a +2 bonus to check (engineering-lore, options:siege-weapon) and check (explosive-lore, options:siege-weapon) for siege weapons.",
          "traits": []
        },
        {
          "id": "axHGPBgPqDgvP4Ej",
          "name": "Bombard",
          "kind": "action",
          "description": "The artillerist activates a shoulder-mounted artillery piece to launch an explosive shell up to 120 feet away that explodes in 10-foot type:burst. Creatures within the burst take 2d6 piercing damage|options:area-damage] damage with a check (reflex, dc:19, basic, options:area-effect,inflicts:prone) save. A creature that fails its save is also knocked Prone. The artillerist can't use Bombard again until they reload the artillery with 2 Interact actions; these actions don't have to be consecutive.",
          "traits": [
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:fiend-caller",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "DHouUgsIwlktV1Pr",
      "slug": "fiend-caller",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d9a7cd3ccaae7eaf7b09cb262cdfb24adf00840ac6f1773d7846180540f977bd",
    "translatableHash": "sha256:51cc1e0b8649edef3efab48eddf6f34f9ad2d5e7a94015efb1ae9aa396ce6df6",
    "data": {
      "schemaVersion": 1,
      "name": "Fiend Caller",
      "level": 3,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "Fiend callers act as intermediaries to help mortals sell their souls or make other deals with fiends. You can adjust a fiend caller to be accompanied by a bound fiend. The fiend gains the minion trait, and you can replace the fiend caller's Spiritual Armament spell with Final Sacrifice.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "deception": 10,
        "diplomacy": 15,
        "intimidation": 10,
        "occultism": 16,
        "religion": 13,
        "society": 12
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "diabolic",
        "requian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hwjSVaTmDfZSkYI1",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+6 piercing; 1d4 bleed",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "QcdJFwU1smZJflNQ",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4 bleed; 1d4+6 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "8sD9UyZguY7T3flW",
          "name": "Fist",
          "bonus": 9,
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
          "id": "8AZlaMs2Q4MqXIZZ",
          "name": "Legal Specialist",
          "kind": "passive",
          "description": "For encounters involving contracts and negotiations, the fiend caller is an 8th-level challenge.",
          "traits": []
        },
        {
          "id": "s0t39CToxCO0bv1k",
          "name": "Fiendish Contract",
          "kind": "passive",
          "description": "The fiend caller spends 1 day of downtime setting up a bargain between a mortal creature and a fiend the fiend caller knows well. The fiend caller attempts a Legal Lore check against the higher of the fiend's check (legal-lore, against:will) or check (legal-lore, against:diplomacy).\nSuccess The mortal party receives one favor from the fiend, or the fiend becomes the mortal's minion for [[/gmr 1d4 #days]] if they're on the same plane. Alternatively, if the GM allows the option, the mortal can receive a bargained contract of the fiend's level or lower.\nFailure The fiend caller fails to strike the bargain.\nCritical Failure The process fails, and the magical backlash makes the fiend caller Drained 2.",
          "traits": [
            "downtime",
            "occult"
          ]
        },
        {
          "id": "hbvWnnuQXeSYbh5d",
          "name": "Fiendish Ritualist",
          "kind": "passive",
          "description": "A fiend caller can cast Binding Circle and Commune to contact fiends even though the rituals are beyond the normal rank the fiend caller could cast. Furthermore, they can use Legal Lore for the primary check when they do so instead of the listed skill.",
          "traits": []
        },
        {
          "id": "fQc2VOadDzyNn25L",
          "name": "Planar Communique",
          "kind": "passive",
          "description": "A fiend caller can cast Sending at will as an occult innate spell, but only to target a fiend they know well. The fiend can be on any plane.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "yXIorWzVkK3BGFi9",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "eWYMU9OcVtVvcYEy",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "5HsEq3owQWtXIqGg",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "OnD7fBMfducivvoC",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "bK18TicIFP068ezS",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "6jmw9EfndcPBUnRj",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "AznMTAGw15KhBdFn",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "hcXtRS7ugoVRYTdd",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "1JMXFXHKgEoJhjK8",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "J66Pno9bvYavhaSe",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "4iKMZ6dgpLrIW9Qk",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "8tXZoqJdv8wieE5w",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "PJ6UHZGfSbx91UhQ",
              "name": "Spiritual Armament",
              "rank": 2
            }
          ]
        },
        {
          "id": "L4Fu7guo4LfcMfe9",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "Q8pqKVnMpb6DQ4o1",
              "name": "Sending (At-Will)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:sibyl",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "gJDjwGcTryITVTTo",
      "slug": "sibyl",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3fba3ab2819a33a0b867d232d9ffee7b83730a02254370b96df9e1dc7b5354e0",
    "translatableHash": "sha256:6340418e92d1c5721979a7f31cd08fcfb69fb5d6686ced266ec1424fe975918c",
    "data": {
      "schemaVersion": 1,
      "name": "Sibyl",
      "level": 3,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Sibyls are oracular diviners who often fall deep into trances with their oracular curses to spur a frenzied mental state. In this trance, they connect with gods and spirits, albeit in a disorganized haze. Some false sibyls will use substances to try and attempt to bring on this same frantic connection, often with deadly results.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 8,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": -1,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "diplomacy": 9,
        "occultism": 9,
        "performance": 9,
        "religion": 11
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
          "id": "B4padp3FEaGEF2i3",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing; 1d6 spirit",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "Dbzx46pANARJg5wD",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+4 piercing; 1d6 spirit",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "XnpqvLymO3PKjAp9",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning; 1d6 spirit",
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
          "id": "ykoQZJpT2fydsLY4",
          "name": "Induce Awe",
          "kind": "passive",
          "description": "The sibyl can use Religion instead of Intimidation to [[/act coerce skill=religion]] or [[/act demoralize skill=religion]].",
          "traits": []
        },
        {
          "id": "E0NCiPy7YnRwRSKb",
          "name": "Foresight",
          "kind": "reaction",
          "description": "Trigger The sibyl becomes the target of a spell with the detection, prediction, revelation, or scrying trait\nEffect The sibyl's oracular awareness alerts them to danger. They gain a +2 circumstance bonus to their saving throw or AC against the spell.",
          "traits": []
        },
        {
          "id": "4oPCy2fCIKMYlypf",
          "name": "Divine Frenzy",
          "kind": "action",
          "description": "Requirements The sibyl isn't Fatigued or in a frenzy\nEffect The sibyl enters into a divine frenzy that lasts 1 minute. The sibyl can't voluntarily stop frenzying. While in a divine frenzy, the sibyl takes a –2 penalty to Perception checks and Will saves and gains a +2 status bonus to their spell DC and spell attack modifier. During a divine frenzy, the sibyl can't use actions with the concentrate trait unless they're Casting a Spell or Seeking. The frenzy lasts for 1 minute, until the sibyl falls Unconscious, or the encounter ends, whichever comes first. The sibyl can't voluntarily end the frenzy.",
          "traits": [
            "concentrate",
            "divine",
            "emotion",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "8FmqlOR60cpDaNqn",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "EbqZG3kufpn5O9Su",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "0iAz3l6zYUv3pJNK",
              "name": "Concordant Choir",
              "rank": 1
            },
            {
              "id": "SaIjTlfjIYt3cDca",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "0RrdTHRLW2eHkI3P",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "eSuZnggfRoTQfX7v",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "zs9hGyAoSiDXtb0I",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "q2L5SUXYu6n5oGhv",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "9qpnwYaHP97j4K2b",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "Y2mzxyA9dYpnBjgg",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "HMIktlzoagLUyus2",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "aTy4xxrKrjWff4tl",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "fcyGG1jREis2rJkF",
              "name": "Sudden Blight",
              "rank": 2
            }
          ]
        },
        {
          "id": "VWbRUZ6KQl8KfQrp",
          "name": "Oracle Focus Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "3dNO6MriO4qs91nS",
              "name": "Brain Drain",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gambling-companion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "HnitCC674ywMuqkS",
      "slug": "gambling-companion",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a5d91e4c69665577e5db7b09b273cd9034a8f21b12bf9ad501cf2c29bf28d17e",
    "translatableHash": "sha256:96c20f273de56942e945dcaf6f0179cd7add9b596ee0c514f6e322835bdcc3cc",
    "data": {
      "schemaVersion": 1,
      "name": "Gambling Companion",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "tengu"
      ],
      "description": "A reputation for protecting against bad luck, combined with skill and knowledge, establish these tengu as ideal gambling companions. Their role includes providing local knowledge of establishments as well as the various games available. Refined skills of observation and an ability to read other players increases the value of their services. The example provided is for a companion who frequents the finer establishments. For some areas, a patron would look for a companion with greater fighting skills to also fill the role of bodyguard\nOriginally hailing from the continent of Tian Xia, tengu have spread across the globe. Though some staunchly uphold traditions, gazing at the sky from the tallest mountaintops, other tengu remain on the ground, adapting and blending into the societies in which they settle.",
      "armorClass": 18,
      "hitPoints": 46,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 12,
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
        "deception": 11,
        "diplomacy": 11,
        "society": 9,
        "thievery": 9
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
          "id": "ElOKMxGCrwxe3vcl",
          "name": "Beak",
          "bonus": 10,
          "damage": "1d6+2 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "GENCnh72fzz04o52",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "6pucib74i9HvvO4U",
          "name": "Dagger",
          "bonus": 10,
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
          "id": "2UGwylnfcWptWs5I",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "g827tssEKjaW3MWi",
          "name": "Social Specialist",
          "kind": "passive",
          "description": "For social encounters involving gaming or gambling, the gambling companion is a 5th-level challenge",
          "traits": []
        },
        {
          "id": "V0PBTcwoJcgrbpP2",
          "name": "Gamer's Guidance",
          "kind": "passive",
          "description": "When the gambling companion successfully Aids a skill check related to games or gambling, the ally rolls twice and takes the higher result instead of gaining the usual bonus.",
          "traits": [
            "fortune"
          ]
        },
        {
          "id": "OkkL7DSD3tgTcL7x",
          "name": "Distracting Trick",
          "kind": "action",
          "description": "Requirements The gambling companion is wielding cards or dice\nEffect The gambling companion performs a quick trick with the cards or dice to Feint, then makes a beak Strike against the same target. If the Feint succeeds, the Strike deals an additional 1d6 precision damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:swarm-voice",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lpDE9fesv4uLKUQK",
      "slug": "swarm-voice",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f721ed86b2a32359831a5f80d7c80a1738c380af58c0494998cf9db04d580774",
    "translatableHash": "sha256:b17c4907f55c5b92d740d0f4225a1dd9f8f534722f2d324a69ef149f87f6237a",
    "data": {
      "schemaVersion": 1,
      "name": "Swarm Voice",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "ratfolk"
      ],
      "description": "The swarm voice is the secular leader of a ysoki warren or one family in a larger warren. If there is a dispute, the swarm voice resolves it. If there is a negotiation, they orchestrate it. If war is about to break out, they declare it. The swarm voice is the welcoming hand and the iron fist of their colony.\nYsoki (or, as outsiders call them, ratfolk) in their warrens have a society that is both stern and democratic, caring and ever vigilant. And at the top is a handful of intimidating and protective figures who make sure the swarm remains safe.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 11
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
        "acrobatics": 8,
        "athletics": 9,
        "diplomacy": 17,
        "intimidation": 15,
        "performance": 15,
        "society": 16,
        "survival": 10
      },
      "languages": [
        "common",
        "ysoki"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OndSHyGpTtmCCk44",
          "name": "Longspear",
          "bonus": 11,
          "damage": "1d8+5 piercing",
          "traits": [
            "reach"
          ]
        },
        {
          "id": "Lgup0t9TmJGLgNdb",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "G2UJ3e7Kn6j2Xa4g",
          "name": "Alchemical Bomb",
          "bonus": 10,
          "damage": "1 acid; 1d6 acid; 1 acid",
          "traits": [
            "bomb",
            "consumable",
            "splash"
          ]
        },
        {
          "id": "iWBX0AcnEeA6RsLC",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "TVYCGu42YwZnB4rj",
          "name": "+9 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "EYA0HX6Ub5Bmbcxn",
          "name": "Voice of the Swarm",
          "kind": "passive",
          "description": "For encounters involving negotiation or diplomacy, the swarm voice is a 7th-level challenge.",
          "traits": []
        },
        {
          "id": "qxNIuN6XAGO8q66q",
          "name": "Advise Swarm",
          "kind": "action",
          "description": "The swarm voice issues orders to move. Each ratfolk from the same warren in a 15-foot type:emanation can spend a reaction to Step, Stride, or Take Cover.",
          "traits": [
            "auditory",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "5NeEt8gjMzn1p01V",
          "name": "Chittering Terror",
          "kind": "action",
          "description": "The swarm voice chitters, creating a terrifying din, and encourages their allies to join in. Each enemy within 30-foot emanation must succeed at a check (will, dc:19, options:inflicts:frightened) save or be Frightened 1 (or Frightened 2 on a critical failure). An enemy takes a –2 circumstance penalty to its save if it's adjacent to one or more ratfolk allied with the swarm voice. Regardless of the result of a creature's save, it's then temporarily immune for 1 hour.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "IuOX7Y181NszqARq",
          "name": "Swarming",
          "kind": "passive",
          "description": "A swarm voice can end their movement in the same square as an ally that also has this ability. Only two such creatures can share the same space.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:inspector",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lqg82WmGcps3BEcd",
      "slug": "inspector",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:784fea4e53cd34d93c9c269da2d7c3e329a0e8e32a12be0ff66745cb843093b5",
    "translatableHash": "sha256:8181c2bce82cff04d8e8279398b6a09225b2d9a234ff537f5c20b1761287aa89",
    "data": {
      "schemaVersion": 1,
      "name": "Inspector",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Inspectors cultivate a wide selection of skills to investigate arson, murder, and other serious crimes, usually in major urban centers. They can assist adventurers, perhaps noticing an object or creature that seems out of the ordinary without being sure why.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 19,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 10,
        "will": 12
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 9,
        "diplomacy": 12,
        "intimidation": 13,
        "medicine": 8,
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
          "id": "ehhZWeILiMtz1Vpc",
          "name": "Shortsword",
          "bonus": 12,
          "damage": "1 piercing; 1d6+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "Lv5OmE8UqKiBaK5E",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+4 bludgeoning; 1 bludgeoning",
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
          "id": "rDeSnWJM8Lgkk68J",
          "name": "+3 to Sense Motive, Seek, or Search",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "pH7p1UOToVTey5ro",
          "name": "Investigation Specialist",
          "kind": "passive",
          "description": "For encounters involving investigation, the inspector is a 5th-level challenge.",
          "traits": []
        },
        {
          "id": "bG26LgL7q2FRJdZf",
          "name": "Sense Demise",
          "kind": "passive",
          "description": "The inspector can [[/act sense-motive]] on a corpse, learning about the creature in the moments before its death.",
          "traits": []
        },
        {
          "id": "FX2hWDNJKU3geumm",
          "name": "Unavoidable Question",
          "kind": "action",
          "description": "Frequency once per turn\nEffect The inspector [[/act demoralize]] a creature and asks a question. On a success, the next Strike the inspector attempts against that target deals an additional 1d6 precision damage. If the target spends an action on their next turn to answer the question, either truthfully or by succeeding at a check (deception, dc:25) check, they are temporarily immune to the inspector's Unavoidable Question for 1 minute.",
          "traits": [
            "linguistic"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:noble",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lSRNLWRwi9Vhfy25",
      "slug": "noble",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8896ab6b48247fa0d61838e857f9ef7386265261feea89431d33f5b8178e4f57",
    "translatableHash": "sha256:f6490a5e04b523278f25307979f87babc020cdf121ad73eb553a7620f914a3e6",
    "data": {
      "schemaVersion": 1,
      "name": "Noble",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Envied by many and detested by some, nobles exude confidence and gentility. Gossip and gambling are often nobles' favorite pastimes. Dayto-day life for a noble is usually a mixture of business and leisure, and to an onlooker, such a lifestyle can appear to be nothing more than a string of meals, parties, and game halls.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "deception": 10,
        "diplomacy": 10,
        "intimidation": 9,
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
          "id": "Eq3KajvZR0XWgw2w",
          "name": "Rapier",
          "bonus": 10,
          "damage": "1d6+6 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "9OxsjzXYOnydXvcb",
          "name": "Fist",
          "bonus": 10,
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
          "id": "h0oO1nc9v9yl5OgB",
          "name": "Lip Reader",
          "kind": "passive",
          "description": "After years of sticking their nose where it doesn't belong, the noble has learned to read lips from afar. If they're trying to read lips in an encounter or attempting a difficult feat of lip reading, they are Fascinated and Off-Guard, and might need to succeed at a check (society) check with a DC determined by the GM.",
          "traits": []
        },
        {
          "id": "UQoNtmlZuh2NnKd0",
          "name": "Noble's Ruse",
          "kind": "action",
          "description": "Frequency Once per round\nEffect The noble [[/act feint]]. On a success, the noble Strikes the target.",
          "traits": []
        },
        {
          "id": "EHw3qV7vYGDQdfPB",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The noble deals an additional 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:kobold-egg-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "m7UKHHTw1WpDCfsL",
      "slug": "kobold-egg-guardian",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9304024e4d0c1abfb2f91f429bf14095389ba6ede35e8c286f17b5b0d12b0e4d",
    "translatableHash": "sha256:920bc6c1606ff2838afbd7554b842d6d65c6a7d4b9245817669acb607e457a4c",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Egg Guardian",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "Kobold egg guardians are some of the best warriors in a tribe, tasked with protecting the next generation. They pledge to give their lives to protect the tribe's eggs, though not before exhausting all their tricks.\nKobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.",
      "armorClass": 19,
      "hitPoints": 48,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 11,
        "deception": 9,
        "diplomacy": 9
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
          "id": "gu0vFd426Wpc3rfF",
          "name": "Longspear",
          "bonus": 12,
          "damage": "1d8+5 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "Xbnaq2n7m6tx6fD9",
          "name": "Claw",
          "bonus": 12,
          "damage": "1d4+5 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "pepLlwNUFsOEqgcF",
          "name": "Crossbow",
          "bonus": 12,
          "damage": "1d8+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "JmbXE6S1dC2bJyTM",
          "name": "Immobilizing Thrust",
          "kind": "action",
          "description": "The kobold egg guardian makes a longspear Strike. If the Strike hits, the target must attempt a check (reflex, dc:20) save. On a failure, the creature is Immobilized until the kobold egg guardian moves, attacks with the longspear, or is no longer wielding the longspear.",
          "traits": []
        },
        {
          "id": "6hrmsdeYwplTAnxR",
          "name": "Luring Retreat",
          "kind": "action",
          "description": "The kobold egg guardian screams and Strides up to their Speed. Each enemy who sees or hears the kobold egg guardian must succeed at a check (will, dc:17) save or be Fascinated by the egg guardian for 1 round. On the creature's turn, it must use at least 1 action (or 2 actions on a critical failure) to move closer to the kobold egg guardian (while avoiding obvious dangers). Regardless of the result of the save, targets are then immune to Luring Retreat for 24 hours.",
          "traits": [
            "auditory",
            "mental",
            "visual"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hobgoblin-spellbreaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "O0n4NLOuY3ZkEKbF",
      "slug": "hobgoblin-spellbreaker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c40b67b45b574c336f3ad4fd79d65d1b50ec7df239302c6a9161bb7555480265",
    "translatableHash": "sha256:3788259dec6dd565b2f5cd4cc74631ce5de1b786b892f2b6aa99902d69142ef7",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin Spellbreaker",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "hobgoblin",
        "humanoid"
      ],
      "description": "Largely due to an ancestral grudge against all things elven, many hobgoblins have an inherent distrust for magic, particularly the \"elf magic\" of the arcane tradition. Most hobgoblin armies maintain a contingent of special \"spellbreaker\" forces trained to assassinate high-value spellcasting targets prior to military engagement or quickly identify and terminate enemy battle mages.\nHobgoblins are respected across Golarion for their unmatched expertise in the art of war. The recent foundation of the hobgoblin nation of Oprak and its unprecedented acts of diplomacy, including non-aggression pacts with the neighboring nations of Nidal and Nirmathas, has given some hope that a lasting peace might finally be established; however, there remains no shortage of unaffiliated hobgoblin raiders and pillagers.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 6,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 1,
        "int": 3,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "arcana": 10,
        "athletics": 10,
        "intimidation": 9,
        "stealth": 9
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
          "id": "FgGU6EyvqNp32PKp",
          "name": "Breaching Pike",
          "bonus": 12,
          "damage": "1d6+6 piercing",
          "traits": [
            "razing",
            "reach"
          ]
        },
        {
          "id": "YVSvNdNYJABfMC9r",
          "name": "Shortsword",
          "bonus": 12,
          "damage": "1d6+6 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "nmK3sZLA9bMcPUVo",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "LJqrOkapSxP4YPbm",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "loLdDazPRkauXpk3",
          "name": "Arcane Magic Sense",
          "kind": "passive",
          "description": "The hobgoblin spellbreaker can detect the source of any arcane magic within range as an imprecise sense.",
          "traits": []
        },
        {
          "id": "ri6d10aEeezcDbDg",
          "name": "Shatter Spell",
          "kind": "action",
          "description": "The hobgoblin spellbreaker attempts a melee Strike against a creature under the effects of a beneficial arcane spell. If the Strike hits and deals damage, the hobgoblin spellbreaker can attempt to counteract a single arcane spell or arcane magical effect on the target (counteract rank 2, [[/r 1d20+10 #Counteract]]). If it fails, the hobgoblin spellbreaker can't attempt to counteract the same effect for 1 hour.",
          "traits": []
        },
        {
          "id": "w4sRIFwc8okhDdKG",
          "name": "Spellbreaking Reactive Strike",
          "kind": "reaction",
          "description": "As Reactive Strike, but if it was triggered by a creature casting an arcane spell, the target must succeed at a check (flat, dc:11) or the spell is disrupted. If the Strike was a critical hit, the spell is disrupted automatically.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:chronicler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "qtD7Xa8Mgl0Y63os",
      "slug": "chronicler",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d9e12e6383bdb7816cf7fa1ad84f5f631ae61512b6b5910f770a0a0a05946a3",
    "translatableHash": "sha256:2fa669e096c35e023b4e70db5886072af4bdeeceef30ab58af1a74b4f9cc0203",
    "data": {
      "schemaVersion": 1,
      "name": "Chronicler",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Exploration means very little if no account of the details exist. Members of adventuring bands cherish chroniclers who record tales of their deeds.\nThe world is a wide, open place fraught with peril and adventure. Explorers use their knowledge of nature and survival skills to see every corner of the land.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 9,
        "will": 10
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 3,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "nature": 10,
        "society": 9,
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
          "id": "GhbdiBXGiH9AN1pw",
          "name": "Staff",
          "bonus": 8,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "CBdfbdVgCB7hU8Lb",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "idDuTdr00COQcUDv",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "N2zTtu5nPcVsgFzS",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "wPucfhAZe8Uqamyu",
          "name": "Crossbow",
          "bonus": 7,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ll3LaxvkACnszsxH",
          "name": "Live to Tell the Tale",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The chronicler would gain the Dying condition\nEffect The chronicler instead falls Unconscious for [[/gmr 1d4 #hours]] or until they regain 1 Hit Point.",
          "traits": []
        },
        {
          "id": "OqsCqhHLnN6naAWU",
          "name": "Scroll Mastery",
          "kind": "passive",
          "description": "The chronicler can activate any scroll of a 2nd-rank spell or lower, regardless of its magical tradition.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "GvFkJmDJIJRneI79",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "85jKTOE3KlXzs4YW",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "Cyeuz5jv3Q16BCcn",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "Uu2EMWBC2gtzZh5V",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "ttn7cPh9TttWghXR",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "wHGguzjZv947jJV8",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "bNHO3QFQ1Kl2yw8H",
              "name": "Tailwind",
              "rank": 1
            },
            {
              "id": "ncvlxCBEF4c7zyEQ",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "KzAN2ght4jKof9ej",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "bkdGfEeOyfyfMmeP",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "38R5pmOjGA3CD1v8",
              "name": "Floating Flame",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mime",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "sAurhtXSqv3kPAlJ",
      "slug": "mime",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:33dc24e7e58e6bad77f90736eae11b77c5fb8242154eee1da5d9f8c3191653a3",
    "translatableHash": "sha256:abad4cf31d86c1b314c89a6cb72130e15b4df9c1524235afd43ae9cdad779cac",
    "data": {
      "schemaVersion": 1,
      "name": "Mime",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Mimes are performers who use movement, gestures, and expressions without any speech to act out a scene or situation for onlookers.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 8,
        "deception": 10,
        "performance": 10,
        "stealth": 10
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "sonic 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dO3EXREMO84WeHGl",
          "name": "Fist",
          "bonus": 12,
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
          "id": "zgWpWhSL5eFPDsek",
          "name": "Mimicry Specialist",
          "kind": "passive",
          "description": "For encounters involving mimicry or pantomime, the mime is a 6th-level challenge.",
          "traits": []
        },
        {
          "id": "LonbjPHiKpQ0rZpu",
          "name": "Skill Mimicry",
          "kind": "passive",
          "description": "The mime receives a +1 circumstance bonus to skill checks to perform actions they have witnessed another creature successfully perform in the last minute, or +2 if they witness a creature critically succeed instead.",
          "traits": []
        },
        {
          "id": "esZ7IFO1aPcIn4T5",
          "name": "Versatile Performance",
          "kind": "passive",
          "description": "The mime can use Performance instead of Diplomacy to [[/act make-an-impression statistic=performance]], instead of Intimidation to [[/act demoralize statistic=performance]], and instead of Deception to [[/act impersonate statistic=performance]].",
          "traits": []
        },
        {
          "id": "I6oggW1yXL9bI8Iz",
          "name": "Mimic Assault",
          "kind": "action",
          "description": "Frequency once per round\nRequirements A creature damaged the mime with a weapon Strike since their previous turn\nEffect The mime makes a check (performance, against:perception) check against the Perception DC of the creature who damaged them, gesturing as if making an attack with the same weapon. On a success, the mime deals two dice of damage to the creature, using the same type and die size as the required weapon Strike.",
          "traits": [
            "attack",
            "mental",
            "visual"
          ]
        },
        {
          "id": "3KRBTeawv2IY2roA",
          "name": "Pantomime",
          "kind": "action",
          "description": "The mime uses exaggerated movements to emulate one of the following effects, which lasts until the end of their next turn. Any creature who sees this ability can attempt to disbelieve this ability as it is used with a check (will, dc:14) save. Creatures that disbelieve are temporarily immune to pantomime for 1 minute.\nBarrier: The mime creates an invisible 10-foot square stretch of wall adjacent to them and within their reach. The wall has AC 10, 5 hardness, and 10 HP. If the mime Sustains this effect, they can add an additional wall in the same manner.\nRope: The mime tugs an invisible rope, trying to knock over or pull at a creature within 15 feet. If the creature fails to disbelieve the pantomime, the mime can choose to either knock the creature Prone or to move it 5 feet towards them.\nWind: The mime creates a 30-foot type:line of imaginary wind. Creatures who don't disbelieve the pantomime treat this area as difficult terrain, and if they enter or begin their turn in the area, they fall prone.",
          "traits": [
            "illusion",
            "mental",
            "visual"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:musketeer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "tGndoQjOV5Mj5Foh",
      "slug": "musketeer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf0c9c7e405bc820118520ea902d86214c88d828a873e28a50b0ffdba0e2f1b6",
    "translatableHash": "sha256:1ef1383f175a8034748a5491497202a1578e9c40185d166b91e8f186d61467da",
    "data": {
      "schemaVersion": 1,
      "name": "Musketeer",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Flashy and confident, the musketeer isn't above using dirty tricks to gain the upper hand in a fight. Despite their bravado, musketeers are fiercely loyal to their allies.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 20,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 8,
        "deception": 8,
        "intimidation": 10,
        "stealth": 11,
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
          "id": "gN3M7AQN6HYbbIDU",
          "name": "Rapier",
          "bonus": 11,
          "damage": "1d6+5 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "4Avy2GEkkRr74ynY",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "fCAVgSMFbB7F05wH",
          "name": "Flintlock Musket",
          "bonus": 11,
          "damage": "1d6+4 piercing",
          "traits": [
            "concussive",
            "fatal-d10",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "FuRqBqNBG6h6r7cd",
          "name": "Musketeer's Advance",
          "kind": "action",
          "description": "Requirements The musketeer is wielding a flintlock musket\nEffect The musketeer makes a flintlock musket Strike. If the Strike hits, the target is Off-Guard to melee attacks by the musketeer until the end of the musketeer's next turn. Regardless of whether the Strike hit, the musketeer then Interacts to swap their flintlock musket for their rapier and Strides toward the creature they attacked.",
          "traits": []
        },
        {
          "id": "lK3tALhh4hYqK6ZF",
          "name": "One for All",
          "kind": "action",
          "description": "Requirements The musketeer is wielding a single one-handed weapon in one hand and has their other hand free\nEffect The musketeer grants a +1 circumstance bonus to AC to themself until the start of their next turn. Allies also gain this bonus while adjacent to the musketeer. If a creature would benefit from more than one creature's One for All ability, the bonus is +2 instead of +1.\nEffect: One for All",
          "traits": []
        },
        {
          "id": "59nUwkzA3Ahd0cDq",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The musketeer deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:watch-officer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "thDJ5N0wUvI1JOa6",
      "slug": "watch-officer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5a161bb2939e5a8e7514af92976c9fb497a9efb0ec7070c03715a99b655d6cd3",
    "translatableHash": "sha256:69fc9b88fb99d8e04cb484e2275a75b6f4fb546b7da26e8963711f199b0891a3",
    "data": {
      "schemaVersion": 1,
      "name": "Watch Officer",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Often leading a small team of lower-ranking guards, watch officers patrol their assigned areas to maintain order and enforce laws. Watch officers get the job done, though their methods aren't always gentle or kind.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 6,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 11,
        "diplomacy": 6,
        "intimidation": 9,
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
          "id": "qu7Gla2a7DxXInkc",
          "name": "Warhammer",
          "bonus": 13,
          "damage": "1d8+7 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "d8BIFJSfmdwffGcU",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "pZfnSGB52sgqtEKM",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "wwLWKH0F1mtPQ2lE",
          "name": "+1 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "2PrqruymHWvMXHjI",
          "name": "Air of Authority",
          "kind": "passive",
          "description": "10 feet. Creatures in the aura who are the same or lower level than the watch officer take a -2 status penalty to their Will DC against the watch officer's attempts to [[/act coerce]] or [[/act demoralize]] them.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "hjekwptdXb14cWSj",
          "name": "Bravery",
          "kind": "passive",
          "description": "When the watch officer rolls a success on a Will save against a fear effect, they get a critical success instead. In addition, any time they gain the Frightened condition, reduce its value by 1.",
          "traits": []
        },
        {
          "id": "zm7yZwOX41g7dSK0",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "OkdkQX03m4gr7M3e",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "UhDwKtMaA99YE2vC",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "Frequency once per round\nEffect The watch officer Strides twice. If they end their movement within melee reach of at least one enemy, they can make a melee Strike against that enemy.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:conscript-squad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Tz3i25jdW5XZanxZ",
      "slug": "conscript-squad",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4e2acfeb068b00d1bf8289745b687289b1b9d36bd4ca111e28d50785f12e66c0",
    "translatableHash": "sha256:d88a568e86a7450e813b93da45708d3190cebd06f9b9977b4fa1453ec964218a",
    "data": {
      "schemaVersion": 1,
      "name": "Conscript Squad",
      "level": 3,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Not all soldiers are on the battlefield by choice. Often armed with modified farm implements, conscripts are usually poorly trained and poorly organized. In the heat of battle, they're prone to misunderstand or disobey orders, causing casualties on both sides.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 18,
      "hitPoints": 54,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": -1,
        "cha": 0
      },
      "skills": {
        "athletics": 9
      },
      "languages": [
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
          "id": "xkJaiE9SYnq3sknY",
          "name": "–2 Circumstance to All Saves vs. Fear",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "aQTITTspzPSgisAy",
          "name": "Untrained Rabble",
          "kind": "passive",
          "description": "At the start of each of its turns, the conscript squad must succeed at a check (will, dc:10) save or be Confused that turn.",
          "traits": []
        },
        {
          "id": "RLqDZY4g9Fsb6LOJ",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 36 (3 segments), 18 (2 segments)",
          "traits": []
        },
        {
          "id": "OzYZ5ba4O423y3Th",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "gxRiahFByUpo6ApY",
          "name": "Indiscriminate Assault",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The conscript squad lashes out at each other creature in a 5-foot type:emanation, friend and foe, with a check (reflex, dc:17, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d8 piercing damage\n2 (1d8+4)[piercing|options:area-damage] damage\n3 (2d8+4)[piercing|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:propagandist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "uCZmZ9wCwvLA57cp",
      "slug": "propagandist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4de03a631d2a59d68d01e69aa82e7854b175939b5c776387fb4849b2fb067eb9",
    "translatableHash": "sha256:ea730334dfb313edb74af4e0a57523b43e85d40b810701488f1242fc5f10a682",
    "data": {
      "schemaVersion": 1,
      "name": "Propagandist",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The misleadings, half-facts, and effortless spin propagandists cast over events create proof of whatever their bosses need them to prove.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 17,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "diplomacy": 11,
        "performance": 10,
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
          "id": "XmjwmYoZK4XOVrAC",
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
          "id": "pjz0Dc69rQWN9UEi",
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
          "id": "5KQKOuMnsCSUo9Dq",
          "name": "Shortsword",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "wT6gn8XFdvr7xd6K",
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
          "id": "7kdNdHbR0DpafTo6",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "TqHrm04cviH8w0wW",
          "name": "Nuanced Spin",
          "kind": "passive",
          "description": "The propagandist phrases everything loosely and vaguely enough that, though it's always misleading, none of it is false. The propagandist can use Diplomacy instead of Deception to Create a Diversion or [[/act feint statistic=diplomacy]], and instead of Intimidation to [[/act coerce statistic=diplomacy]]. A creature attempting to Sense Motive against the propagandist gets a result one degree of success worse than they rolled.",
          "traits": []
        },
        {
          "id": "P789gN78vbI3JWRR",
          "name": "No Hard Feelings",
          "kind": "action",
          "description": "The propagandist offers amnesty and other benefits to all who choose to join them. All enemies who can hear the propagandist must attempt a check (will, dc:19) save. If any of the propagandist's allies is currently benefiting from one of the propagandist's bard composition spells, any enemy who is aware of that takes a –2 circumstance penalty to the save.\nCritical Success The creature sees through the propagandist's pitch and is temporarily immune for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature's conviction stumbles. Until the end of its next turn, the creature must succeed at a check (flat, dc:5) to target the propagandist with a hostile action.\nCritical Failure The creature finds the propagandist's offer too good to pass up, switching sides in the combat and instantly gaining any benefits the propagandist is currently granting their allies. At the end of each of its turns, the creature can attempt another check (will, dc:19) save to snap out of it and rejoin their allies.",
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
          "id": "w8D7IFRgRRihgilN",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "IHgH9TDsMj1CZHfx",
              "name": "Bullhorn",
              "rank": 1
            },
            {
              "id": "8V9dbBZBxGVifCmd",
              "name": "Concordant Choir",
              "rank": 1
            },
            {
              "id": "zBFf8igdv7bMUNcL",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "xM9NVkBggybg5zib",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "PMYKKlU3cgg7ihHc",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "o9n9wfrnDkqBJEV1",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "SRdHwTaH1LclQIHL",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "v1DsiF1DG01Li2fO",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "3OFI7H6j6kPpmfMs",
              "name": "Blistering Invective",
              "rank": 2
            },
            {
              "id": "dX6iiKwM4NRQwMRN",
              "name": "Paranoia",
              "rank": 2
            }
          ]
        },
        {
          "id": "j3GfUAgZ3oVVWebi",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "oyRdEpFt4WF5YjUL",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "QBeCJKVEF6oCYOmZ",
              "name": "Hymn of Healing",
              "rank": 1
            },
            {
              "id": "q8NrdDxhvM20evox",
              "name": "Lingering Composition",
              "rank": 1
            },
            {
              "id": "T0uvRRS0cKBsaahR",
              "name": "Rallying Anthem",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:harbormaster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "vGcspyaP2VOwurMk",
      "slug": "harbormaster",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c9c96d0d912171179e7791453ca6ed08fcfb64d90385fe05e1524da725ef25ee",
    "translatableHash": "sha256:37e6fa9f2a9f2d1177ee38a4891fa1758514e8ee8b03a1d2762b880e79aec714",
    "data": {
      "schemaVersion": 1,
      "name": "Harbormaster",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A port must sustain itself on different types of flows: the seaward and coastal flows, marked by the rising and falling of the tides, and the constant flow of trade. A harbormaster is expected to know the former reflexively and encourage the latter within the jurisdictional rules of law.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 9,
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
          "id": "t7aKwycZ4ehsFtFB",
          "name": "Hatchet",
          "bonus": 12,
          "damage": "1d6+7 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        },
        {
          "id": "SvCtowtaw8hmMZKz",
          "name": "Hatchet",
          "bonus": 10,
          "damage": "1d6+7 slashing",
          "traits": [
            "agile",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "pV410EZUceUKu3Vt",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "vgPpoUOgBxWLd4Ne",
          "name": "Steady Balance",
          "kind": "passive",
          "description": "Whenever the harbormaster rolls a success on a check to [[/act balance]], they get a critical success instead. They're not Off-Guard while Balancing on narrow surfaces and uneven ground.",
          "traits": []
        },
        {
          "id": "NKmPaEo138UaRnmO",
          "name": "Experienced Hand",
          "kind": "passive",
          "description": "The harbormaster has endured their share of adverse conditions at sea. Any creature that's in adverse weather or aboard a vessel on rough water is Off-Guard to the harbormaster.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mage-for-hire",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "x7Mnb3F4r6JvXD9C",
      "slug": "mage-for-hire",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a759b827f9b1011988af872c4532f1c9fb7d65fb20b87f82071dceb56474d099",
    "translatableHash": "sha256:26319a450c4295c84b61db5f684317052328e3174c26eafe80d1d9d802bf5145",
    "data": {
      "schemaVersion": 1,
      "name": "Mage for Hire",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Some mercenaries sell magical talents to earn a living. While there are many types of mages for hire, some of the sneakiest are specialized in scrying, using their skills for infiltration and sabotage.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 9,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "arcana": 11,
        "society": 9,
        "stealth": 7,
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
          "id": "faHeGcwx1wCdYYfb",
          "name": "Staff",
          "bonus": 7,
          "damage": "1d4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        }
      ],
      "actions": [],
      "spellcasting": [
        {
          "id": "k9K8sDyQuswjVTOd",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "Ef4XGW8YgJ4Fkkpn",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "44dmJY3jaMASsFg9",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "gmuTdBUv3ffM6WOJ",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "ZgE5MnJdHrAp8Law",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "b6d54oXgFgfxFSJ4",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "pfviTJ90O92l87cb",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "gD65O4wllKp2xOrb",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "n4XlWkKXhsoxo5Yx",
              "name": "Mystic Armor",
              "rank": 1
            },
            {
              "id": "V0qOohFmgnYE9Kv9",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "osrAH4TT7l43EWJU",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "jLcdB7PgyiVUSW41",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "FrVGz4ObainAeGOl",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "YOMXvUNpXPORzdAf",
              "name": "Knock",
              "rank": 2
            },
            {
              "id": "hE2a5Bga3s0Ht0PH",
              "name": "See the Unseen",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bosun",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "XrXTfNGxEWLE9Qqb",
      "slug": "bosun",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4f48550a6c48dac1cedaf6b18811a99aaa3024f9be8b348b123e913c43080ad0",
    "translatableHash": "sha256:7f925a9922cb1be817f3d1e8774348708b3cd8d47e3d919bb1303f88c56fe274",
    "data": {
      "schemaVersion": 1,
      "name": "Bosun",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A ship's boatswain, or bosun, leads the deckhands who maintain the ship.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 9,
        "intimidation": 9
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
          "id": "598qUP8bkS1TdMEY",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "FXduVQD4iGJxgXX2",
          "name": "Naval Pike",
          "bonus": 11,
          "damage": "1d6+5 piercing",
          "traits": []
        },
        {
          "id": "O4GUtfCmOYOhNgf2",
          "name": "Dagger",
          "bonus": 13,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "S0MOf3jyFwTZYtAP",
          "name": "Naval Pike",
          "bonus": 13,
          "damage": "1d6+5 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "u6QEft9DxfittKI2",
          "name": "Bosun's Command",
          "kind": "action",
          "description": "Frequency once per round\nEffect The bosun orders an ally to attack or to get in position. Until the end of the ally's next turn, they gain the bosun's choice of a +2 status bonus to attack rolls or a +10-foot status bonus to their Speeds.\nEffect: Bosun's Command",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "0Z0tfKCoRaKagvVT",
          "name": "Pike and Strike",
          "kind": "action",
          "description": "The bosun makes a melee Strike with their naval pike.\nIf this Strike hits, the bosun can either move the target 5 feet within the pike's reach or make a fist Strike against the target without increasing their multiple attack penalty until after the fist Strike.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tumbleweed-leshy-courier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "YSAw2CrLp8WnC1M2",
      "slug": "tumbleweed-leshy-courier",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ab367bb314069a96f82f36b57f283523e50ab56599bb8e78239246ba6008e973",
    "translatableHash": "sha256:cdd8363d0319a3032f80a5a5855ea294b13685405e0d9fe054e0a34cc75596c5",
    "data": {
      "schemaVersion": 1,
      "name": "Tumbleweed Leshy Courier",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "leshy",
        "plant"
      ],
      "description": "A tumbleweed leshy's ability to move quickly across long distances with ease allows them to act as messengers and go-betweens. Druids often entrust these couriers with delivering important messages to their home druid circles or other druids they're acquainted with. Some even induct the couriers into the circle to teach them Wildsong for secure communication and basic magic for self-defense.\nNature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.",
      "armorClass": 19,
      "hitPoints": 35,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 11,
        "diplomacy": 8,
        "nature": 10,
        "society": 7,
        "stealth": 9,
        "survival": 10
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
          "id": "IMvUIvZ6QWOF8UUq",
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
          "id": "9aZvZxrMkCqJ9NM7",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Tmq1ktj7ELNWLp7X",
          "name": "Crossbow",
          "bonus": 12,
          "damage": "1d8+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "nB76Ig6XS6Wv86JA",
          "name": "Tumbling Traveler",
          "kind": "passive",
          "description": "The tumbleweed leshy courier gains a +10-foot circumstance bonus to Speed while traveling during exploration mode.",
          "traits": []
        },
        {
          "id": "Bcv0cDl1eItdbixX",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The tumbleweed leshy courier is targeted with an attack by an attacker they can see\nEffect The leshy gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "xTcDZSkp3WAdhSKI",
          "name": "Spiny Burst",
          "kind": "passive",
          "description": "When the tumbleweed leshy courier dies, a burst of primal energy explodes from their body, restoring 2d8 healing Hit Points to each plant creature in a 30-foot type:emanation. This area immediately fills with brambles and thistles, becoming difficult terrain. Any creature that moves through the area takes 1 piercing damage per square traversed. If the terrain is not a viable environment for these plants, they wither after 24 hours.",
          "traits": [
            "healing",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "yB7IqUJb0VoQlhoB",
          "name": "Change Shape",
          "kind": "action",
          "description": "The tumbleweed leshy courier transforms into a Small tumbleweed. This ability otherwise uses the effects of One with Plants. Additionally, when the leshy uses their Change Shape ability, they still have a Speed of 10 feet for the purpose of travel during exploration mode.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "DKvgwTBxfbe7Txnl",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 17,
          "spells": [
            {
              "id": "2HHg2g4OoPZJPAb0",
              "name": "Speak with Plants (tumbleweeds and scrubland brush only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:diver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Z5MNKwVxTNilWRT4",
      "slug": "diver",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3384061f7c4af01d3fef1b975f68065a445251328ee291c0217bc887b71e7af5",
    "translatableHash": "sha256:8ad80f1a5fcdf51c802855107ac7d20a3f25e4689b28ce6b4d63dec98ad04ce8",
    "data": {
      "schemaVersion": 1,
      "name": "Diver",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Divers can often make large amounts of money by diving for treasures and selling them at a markup to tourists and antiquities dealers.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 17,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 10,
        "nature": 9,
        "thievery": 9
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
          "id": "9gsh1iqY4KWVAnvE",
          "name": "Trident",
          "bonus": 12,
          "damage": "1d8+5 piercing",
          "traits": []
        },
        {
          "id": "n1xTzBBV2PpoJoQh",
          "name": "Trident",
          "bonus": 12,
          "damage": "1d8+5 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "zeppbfAE2LZB0zl5",
          "name": "Fist",
          "bonus": 12,
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
          "id": "MLkGDyrjKUCE7hKg",
          "name": "Adjusted Eyes",
          "kind": "passive",
          "description": "Divers are used to the murky conditions underwater and train for them. If the diver spends 1 hour preparing for their dive, they have low-light vision while underwater.",
          "traits": []
        },
        {
          "id": "nB7C5idGWVEQtPnO",
          "name": "Diving Specialist",
          "kind": "passive",
          "description": "For encounters involving underwater exploration, the diver is a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "xncFsSepCPewZuyQ",
          "name": "Skilled Diver",
          "kind": "passive",
          "description": "The diver gains a +12 circumstance bonus to any skill check involved in underwater exploration activities and is considered a master in the skill for such checks. This bonus also applies to any initiative roll while the driver is underwater.",
          "traits": []
        },
        {
          "id": "66uRUxIPoc3zmnwR",
          "name": "Strong Lungs",
          "kind": "passive",
          "description": "The diver can hold their breath for up to 5 minutes (50 rounds).",
          "traits": []
        },
        {
          "id": "6wHu4CCSDnbcEopw",
          "name": "Underwater Fighter",
          "kind": "passive",
          "description": "The diver isn't Off-Guard underwater and doesn't take penalties for using a bludgeoning or slashing melee weapon in water.",
          "traits": []
        },
        {
          "id": "f0DDarr5MFdbqCMt",
          "name": "Underwater Awareness",
          "kind": "reaction",
          "description": "Trigger An enemy Strikes the diver while they're underwater\nEffect The diver senses the movement of their enemy in the water and jerks back in time. They gain a +2 circumstance bonus to their AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "xTj7OVv1uH9YPuEK",
          "name": "Dive",
          "kind": "action",
          "description": "The diver moves up to twice their swim Speed downward.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:zealot-of-asmodeus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "0iyGP5rLXE6NxdRr",
      "slug": "zealot-of-asmodeus",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a6007e1a7e32b0b733790b7e65585fb3d216012a4f3999cb3cd7dca3554b2328",
    "translatableHash": "sha256:6fd1a1397d1c592220fc4706c5828c94ed8a8f89fd0948da7f66e56c27f71f4c",
    "data": {
      "schemaVersion": 1,
      "name": "Zealot of Asmodeus",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "Zealots ferret out plots against their religion and seek justice for their church's followers. This zealot serves Asmodeus, but others might serve Abadar, Calistria, Iomedae, Norgorber, Pharasma, Sarenrae, or Zon-Kuthon. They often ride a War Horse wearing light barding. To depict a zealot's mount, add this horse to the encounter as an additional monster with its own actions, adjusting the encounter's XP budget accordingly.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 22,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 7,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 9,
        "deception": 10,
        "intimidation": 10,
        "religion": 12,
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
          "id": "xaMA9x6oxfo6Cp24",
          "name": "Mace",
          "bonus": 12,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "GWL6lbiJj2xPB7Wm",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Ez19LFouIxbB67Nd",
          "name": "Composite Shortbow",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "qQfETAyjFjGSYQV3",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "0fWZn3xodpxwco8r",
          "name": "Swear Vengeance",
          "kind": "reaction",
          "description": "Trigger A creature the zealot can see damages a follower of Asmodeus other than the zealot\nEffect The zealot is affected by a Sure Strike spell. If the zealot makes an attack roll against anyone other than the triggering creature, the sure strike ends with no effect.",
          "traits": []
        },
        {
          "id": "db0QJhDLMLOerNa6",
          "name": "Channel Smite",
          "kind": "action",
          "description": "Cost the zealot expends a Harm spell\nEffect The zealot makes a melee Strike. If it hits, they damage the target with a 1-action harm spell. The target automatically gets a failure (or a critical failure if the Strike was a critical hit). The spell doesn't have the manipulate trait when cast this way.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "BHcpl6Nlf6nVff26",
          "name": "Deadly Simplicity",
          "kind": "passive",
          "description": "The zealot deals 1d8 damage with their mace instead of 1d6.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "rWb3x7u63QvEkLfQ",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "3fvAPEzrDnakE2YW",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "HiKm5lOfUGMH3xKU",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "yEKd58C4M0Ti3Esm",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "dZlYGHlcbueSC2JU",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "vaLNG3EkIoVXgZ0X",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "OCcvzowVOHHoJRT0",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "lKgSMpyNmlUFv4Rn",
              "name": "Runic Weapon",
              "rank": 1
            },
            {
              "id": "wkerDZfJZD894Up5",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "vpZoHrjQWH51ssTB",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "aRlfVhusoQb3hUa4",
              "name": "Cleanse Affliction",
              "rank": 2
            },
            {
              "id": "TZV12E3RIhgUWnIX",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "LlbDw3HN5Iwkk4Yx",
              "name": "Share Life",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:corn-leshy-throng",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1GaKFngjw3Fp93CV",
      "slug": "corn-leshy-throng",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f9a836af501aead1b9f1acfb9f77ea5b0b35ed4ef6bfa32b5de452d557226719",
    "translatableHash": "sha256:7cd3806684e0722dfa99bfd5f5702c56c054859fa3381615e4936cddcae064fc",
    "data": {
      "schemaVersion": 1,
      "name": "Corn Leshy Throng",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "leshy",
        "plant",
        "troop"
      ],
      "description": "A thick forest or flourishing farm sometimes sees an explosion of primal magic leading to the creation of a multitude of leshies. When still young, these spirits might band together with their crop-mates for protection or to achieve a mutual goal. Used to growing in rows, many corn leshies can form a sizable legion.\nNature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.",
      "armorClass": 21,
      "hitPoints": 54,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 13,
        "will": 10
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 10,
        "nature": 12
      },
      "languages": [
        "common",
        "fey"
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
          "id": "T1MNWB2LKh3KRpgH",
          "name": "Encircling Maze",
          "kind": "passive",
          "description": "A corn leshy throng is arranged in rows of stalks to envelop foes, stretching upward to block their vision. It can move into other creatures' spaces, and other creatures can move into its squares.\nWhen a Medium or smaller creature attempts to enter any of the corn leshy throng's spaces, it must attempt a check (survival, dc:20) check. If the creature fails, it gets turned around—all the throng's squares are greater difficult terrain for it until the end of this turn. A creature needs to attempt this check only the first time in a round it attempts to enter one of the throng's squares.",
          "traits": []
        },
        {
          "id": "WC6W0nMY51Alm2io",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 36 (3 segments), 18 (2 segments)",
          "traits": []
        },
        {
          "id": "TMnioRa4zcBnP012",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "7642MJdP6gXjL3QY",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When the corn leshy throng dies, a burst of primal energy explodes from their body, restoring 3d8 healing Hit Points to each plant creature in a 30-foot type:emanation. This area immediately fills with stalks of corn, becoming difficult terrain. If the terrain is not a viable environment for these plants, they wither after 24 hours.",
          "traits": []
        },
        {
          "id": "hPm8yFM9mgIGHYL6",
          "name": "Boxing Ears",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The corn leshy throng lashes out with hardened ears of corn to attack each enemy in its space and in a 5-foot type:emanation, with a check (reflex, dc:18, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 bludgeoning damage\n2 (2d6+4)[bludgeoning|options:area-damage] damage\n3 (2d6+8)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "56TBiiZbleUC5RaS",
          "name": "Kernel Barrage",
          "kind": "action",
          "description": "The throng's members fling a bombardment of corn kernels. Each creature in a 30-foot type:cone takes 2d6 bludgeoning damage with a check (reflex, dc:18, basic, options:area-effect) save. When the throng is reduced to 2 or fewer segments, this area decreases to a 15-foot type:cone.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:standard-bearer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1jMXYVdmSPvnFfxS",
      "slug": "standard-bearer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f14170f77cd56f982e50c6b7908b9646d929f11b425875198c612346fc327929",
    "translatableHash": "sha256:2f08829b7541df38f654bea0950eaa0f7f505fa477ad9f7c8c044abd58c76e66",
    "data": {
      "schemaVersion": 1,
      "name": "Standard Bearer",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Within a troop, the standard bearer is a beacon of morale, cohesion, and camaraderie. They proudly wave the flag of the entity they fight for. Whether they lead the spearhead or provide support from the back lines, their presence alone is usually enough to rally the soldiers around them to continue fighting.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 8,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "diplomacy": 11,
        "medicine": 10,
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
          "id": "Ob5bRvW4f9QAopSw",
          "name": "Ranseur",
          "bonus": 12,
          "damage": "1d10+8 piercing",
          "traits": [
            "disarm",
            "reach-10"
          ]
        },
        {
          "id": "GpDNQy0NCncK5bRI",
          "name": "Shortsword",
          "bonus": 12,
          "damage": "1d6+8 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "ajDndEknnnY4CSBx",
          "name": "Fist",
          "bonus": 12,
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
          "id": "0Gms6hhglq8V6LWq",
          "name": "Inspiring Aura",
          "kind": "passive",
          "description": "60 feet. The standard bearer and each ally in the aura who can see their battle standard gains a +1 status bonus to initiative rolls and saves against fear effects. Each time an affected creature gains the Frightened condition, reduce the frightened value by 1.",
          "traits": [
            "aura",
            "emotion",
            "mental",
            "visual"
          ]
        },
        {
          "id": "HweaC1GJDpZHQEUw",
          "name": "Signal the Advance!",
          "kind": "action",
          "description": "The standard bearer raises their flag to the sky, signaling their allies to charge. Each ally affected by inspiring aura can use a reaction to Stand, Step, or Stride.",
          "traits": [
            "mental",
            "visual"
          ]
        },
        {
          "id": "N6sjiHcqWYVRbEXC",
          "name": "Stay in the Fight!",
          "kind": "action",
          "description": "The standard bearer shouts an inspiring cry. Each ally affected by inspiring aura gains 10 temporary Hit Points that last for 1 minute.\nEffect: Stay in the Fight!",
          "traits": [
            "auditory",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tidewater-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3Hv0EXBkCOcSOTfp",
      "slug": "tidewater-guard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8d2ae1e472fdeefede86a87c119ce73081f479bbd57a8bdfa2b4a8bf57d8ccf5",
    "translatableHash": "sha256:84a3b939ce58423bcfe89cd78480ee876845bf3f7d9bb4317c04e325e1e70c18",
    "data": {
      "schemaVersion": 1,
      "name": "Tidewater Guard",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "lizardfolk"
      ],
      "description": "Iruxi tidewater guards are capable fighters skilled at amphibious attacks and overpowering vessels along any shore. Because lizardfolk settlements are typically constructed partially underwater and partially above, they have need of defenders who can guard from attacks in both environments.\nThe special spaulders tidewater guards wear set them apart from other lizardfolk warriors. These protect their shoulders from cutlass and axe strikes, and might be constructed of dragon scales, turtle or giant chiton shells, lacquered wood, or even sea urchin tests. The recipe for the special resin iruxi armorers apply to harden these spaulders is a closely guarded secret, and each iruxi community's supply of the resin is small, precious, and closely guarded.\nLizardfolk culture has flowered in recent years. With that revival has come a new generation of iruxis (as they call themselves) more willing to engage with the wider world, bringing with them their society's reverence for the past, facility with nature, and willingness to defend itself.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 12,
        "nature": 10,
        "stealth": 11,
        "survival": 10
      },
      "languages": [
        "common",
        "iruxi"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dqNQiBABGFOmJtbi",
          "name": "Trident",
          "bonus": 14,
          "damage": "1d8+7 piercing",
          "traits": [
            "tethered"
          ]
        },
        {
          "id": "SvcdgkuvMMxBKJav",
          "name": "Trident",
          "bonus": 13,
          "damage": "1d8+7 piercing",
          "traits": [
            "tethered",
            "thrown-20"
          ]
        },
        {
          "id": "CxUIJuMfI8HGtdjH",
          "name": "Claw",
          "bonus": 14,
          "damage": "1d6+7 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "RkcBwoznHV3Iui4W",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A tidewater guard can hold their breath for 20 minutes.",
          "traits": []
        },
        {
          "id": "RulWRLEbBd5kVP9K",
          "name": "Tethered Tridents",
          "kind": "passive",
          "description": "The tidewater guard's tridents are specially prepared to be aquadynamic and tethered by ropes. They have the tethered trait, meaning that a wielder who has a free hand can Interact to pull the weapon back into their grasp after they have thrown it as a ranged attack or after it has been disarmed (unless it is being held by another creature).",
          "traits": []
        },
        {
          "id": "NGPpMldaSQ6UDTg2",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "zGwJmmu4HExz7PlU",
          "name": "Reel In",
          "kind": "action",
          "description": "The tidewater guard makes a ranged Strike with their trident. If the Strike hits, the guard can haul on the attached line, moving the target up to 30 feet in a straight line toward the iruxi.",
          "traits": []
        },
        {
          "id": "EvFyDhY5fz8MJPWT",
          "name": "Terrain Advantage",
          "kind": "passive",
          "description": "Non-lizardfolk creatures that are in difficult terrain or are in water and lack a swim Speed are Off-Guard to the tidewater guard.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:exuberant-apprentice",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "7A0foSLz3KU3G4jL",
      "slug": "exuberant-apprentice",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:946a9c33c0fe11ee0e198f65f257a63ae7a950745f1d02588fbfcfbb9c09289a",
    "translatableHash": "sha256:4c05d05ec2137a070b263fcffbdc3673028946988fd3986b30e52abe554cf0b6",
    "data": {
      "schemaVersion": 1,
      "name": "Exuberant Apprentice",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Bright-eyed and bushy-tailed, these young mages seamlessly combine boundless curiosity, vigorous enthusiasm, and a complete lack of survival instincts.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 2,
        "int": 4,
        "wis": -2,
        "cha": 4
      },
      "skills": {
        "arcana": 12
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
          "id": "kBoLDrufofrd2wS7",
          "name": "Textbook",
          "bonus": 12,
          "damage": "1d6+5 bludgeoning",
          "traits": []
        },
        {
          "id": "IhDGebHjKCauEdW2",
          "name": "Fist",
          "bonus": 13,
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
          "id": "ZqsTx9SmEIjQ6xNa",
          "name": "Overambitious Spell",
          "kind": "action",
          "description": "Frequency once per day\nEffect The exuberant apprentice's teacher has told them they're not ready for this spell, but desperate times call for desperate measures. The exuberant apprentice attempts to cast Fireball as a 3rd-rank arcane spell but must first attempt a check (flat, dc:11).\nCritical Success The spell is cast flawlessly and heightened to 4th rank. The apprentice is Stunned 2 from sheer shock.\nSuccess Nothing goes wrong, and the spell is cast normally.\nFailure The spell fizzles and creates only a harmless puff of smoke.\nCritical Failure Academic ablaze! The apprentice takes 6d6 fire damage as the magic backfires",
          "traits": [
            "arcane"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "2H75xRdExZNriwFQ",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "t93kW4cGnx1XNzSE",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "d2Xu4qvNDQSbj0EP",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "a9BJXEIVMBCYtN7e",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "MWZgaSi5FhBu1xA9",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "85NLKnzXDSZ5GCx1",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "msbZ4noP4aeDm4p8",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "vaVEUWZUaNX7iIUt",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "Av9Q46vPSZLn0OiF",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "iXB31R7hnlbhjyUE",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "v2P6yCVQJ2biev3u",
              "name": "Acid Grip",
              "rank": 2
            },
            {
              "id": "VbnAUEoVXLxMORYC",
              "name": "Darkvision",
              "rank": 2
            },
            {
              "id": "jQ5R790CKb2O2V8k",
              "name": "Revealing Light",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:palace-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "94fOoBeUT8PgTywH",
      "slug": "palace-guard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ecde6e23def0ac0b529544e7041434bfd900c75b035006455608231434be8682",
    "translatableHash": "sha256:8b003f0bb0db32b7349c9260d0bc3c5a39ca71ff7573bccda77a83d56b2b89ea",
    "data": {
      "schemaVersion": 1,
      "name": "Palace Guard",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Often the younger offspring of minor nobility or those from long lines of trusted staff, palace guards are in charge of defending the royal family and their inner stronghold. Their days consist of guarding doorways, escorting nobles, and keeping those in their charge as safe as possible.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 14,
        "diplomacy": 8,
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
          "id": "W3jbnf0RJFBtiRto",
          "name": "Halberd",
          "bonus": 14,
          "damage": "1d10+7 piercing",
          "traits": [
            "reach-10",
            "versatile-s"
          ]
        },
        {
          "id": "JVQnk3tWMv7fuQax",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "OfWomwkyJsv0dnzp",
          "name": "+2 to Perception to Initiative",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "hXy0j4ACQoHCnM0b",
          "name": "Guard's Parry",
          "kind": "reaction",
          "description": "Trigger A creature attacks the palace guard's liege, and the liege is within the guard's melee reach\nEffect The liege gains a +2 circumstance bonus to AC against the triggering attack, and the palace guard gains a +2 circumstance bonus to attack and damage rolls until the end of their next turn.\nEffect: Guard's Parry (Guard)\nEffect: Guard's Parry (Liege)",
          "traits": []
        },
        {
          "id": "ghImAxC8N1K9wqqJ",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "OkhA2ahcwNqlYweN",
          "name": "Crowd Control",
          "kind": "action",
          "description": "Requirements The palace guard's last action was a successful halberd Strike\nEffect The palace guard attempts to Reposition the creature they hit using their halberd's reach. This attempt neither applies nor counts toward the guard's multiple attack penalty.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:enigmatic-conspirant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "9ZKIadbfdzrJJGOk",
      "slug": "enigmatic-conspirant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:99a0b3237b4fbdc3912309461ef95790488cb8e0b3a8b850326cc1ec392191ea",
    "translatableHash": "sha256:5f64c55e9be1aca3d634bb122141cccdc629be42fbf058ae783914717e388565",
    "data": {
      "schemaVersion": 1,
      "name": "Enigmatic Conspirant",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Powerful organizations work out of public view, shaping lives while facing few consequences. Searching for these secret societies, whether to join them or destroy them, has given the enigmatic conspiracist uncanny insight.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 12,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 12,
        "deception": 9,
        "intimidation": 11,
        "occultism": 12,
        "society": 12,
        "stealth": 10
      },
      "languages": [
        "aklo",
        "common",
        "elven",
        "sakvroth"
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
          "id": "7Bjo1WMY6NFDJnC0",
          "name": "Rapier",
          "bonus": 14,
          "damage": "1d8+6 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "WPNNvuLGdG7QT9gZ",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "YPLUUwPa5iGHUTk2",
          "name": "Shortbow",
          "bonus": 14,
          "damage": "1d6+6 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "wFYlJWp87mpIj1VH",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ZQPGMLgPd97Bgino",
          "name": "Knowing Glance",
          "kind": "reaction",
          "description": "Trigger The enigmatic conspiracist is targeted by a melee Strike or touch spell\nEffect With an uncanny look, the enigmatic conspiracist [[/act demoralize]] the creature that targeted them. Demoralize loses the auditory trait and gains the visual trait, and the conspiracist doesn't take a penalty if the creature doesn't understand their language. If the Intimidation check critically succeeds, the conspiracist disrupts the triggering action.",
          "traits": [
            "concentrate",
            "emotion",
            "fear",
            "mental",
            "visual"
          ]
        },
        {
          "id": "fdOcHNvtJXNaqSqp",
          "name": "Spill Secrets",
          "kind": "passive",
          "description": "When the conspiracist critically hits with a Strike, the target must succeed at a check (will, dc:21) save or the enigmatic conspiracist perceives the target's surface thoughts for 1 round, as mind reading. This grants the conspiracist a +1 circumstance bonus to AC and saving throws against any creature whose mind they're reading.\nEffect: Spill Secrets",
          "traits": [
            "mental",
            "occult"
          ]
        },
        {
          "id": "DejDtFjggAqLgKhW",
          "name": "Unbelievable Connection",
          "kind": "action",
          "description": "The enigmatic conspiracist recites a convoluted conspiracy theory about a creature within 30 feet, then attempts an check (occultism, against:will, options:inflicts:stupefied) check against the Will DC of that creature. On a success, the target is Stupefied 1 for 1 minute and Off-Guard against the conspiracist's attacks until no longer stupefied.\nEffect: Unbelievable Connection",
          "traits": [
            "auditory",
            "concentrate",
            "occult"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:deluded-mob",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ct7EwIepldAqv572",
      "slug": "deluded-mob",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f07dc72fc12f81b87f546152f1ce694f9244115722c3d2b95852ea7ba6c6c144",
    "translatableHash": "sha256:e3205b6cba7b90cd384d80aa9d7bcd6daec0d930c924cdabd621ea3e4be7c054",
    "data": {
      "schemaVersion": 1,
      "name": "Deluded Mob",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Pulled astray by lies, bribes, and propaganda, these desperate people are convinced to fight on their behalf of utter villains. Conspiracists, propagandists, masterminds, despots, and more take advantage of these mobs.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 19,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 6,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": -1,
        "cha": 1
      },
      "skills": {
        "athletics": 12,
        "intimidation": 9
      },
      "languages": [
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
          "id": "5eNFXUwgvwkzlFgK",
          "name": "Irrational",
          "kind": "passive",
          "description": "The deluded mob is severely disconnected from reality. Diplomacy checks to Make an Impression or otherwise sway their worldview automatically fail.",
          "traits": []
        },
        {
          "id": "2WUSYCBvaCJjNNCc",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 50 (3 segments), 25 (2 segments)",
          "traits": []
        },
        {
          "id": "1ax2TM4pDZI2SGog",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "TtcgXNBYc4EFepM0",
          "name": "Victim Complex",
          "kind": "passive",
          "description": "As they lose members, the deluded mob takes the opposition against them as proof that they're right, bolstering their resolve. The deluded mob gains a +2 circumstance bonus to Will saves at 50 or fewer Hit Points, or a +4 circumstance bonus at 25 HP or fewer.",
          "traits": []
        },
        {
          "id": "cVkvmZHTd8VjFwYT",
          "name": "Flail Desperately",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The deluded mob uses their fists, wooden planks, and anything else they can pick up to attack each enemy in a 5-foot type:emanation with fervor, if not coordination (check (reflex, dc:18, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d8 untyped damage\n2 (1d8+6)[untyped|options:area-damage,action:cost:2] damage\n3 (2d8+6)[untyped|options:area-damage,action:cost:3] damage",
          "traits": []
        },
        {
          "id": "93wHXWZVtAn5Jm53",
          "name": "Surrounded",
          "kind": "passive",
          "description": "When they feel cornered, the mob lashes out more recklessly. While the deluded mob is flanked, Flail Desperately and Throw Detritus are DC 17 and deal an additional 2 damage per action spent on the activity.",
          "traits": []
        },
        {
          "id": "aEZR3IjhkqAzFTzg",
          "name": "Throw Detritus",
          "kind": "action",
          "description": "The deluded mob hurls detritus in a 10-foot type:burst within 30 feet that deals 2d8 bludgeoning damage with a check (reflex, dc:18, basic, options:area-effect) save. When the mob is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bounty-hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "dNATu2RQLFYY3hYn",
      "slug": "bounty-hunter",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9b2e86e53c420a27943b17cbcb7ca455f7c13d948d6ac86b99c8ffdc2216338c",
    "translatableHash": "sha256:72f7c29a45fee595d932e5d9cf8e1f92e63e64f5ecf8d440183f6811becd0d74",
    "data": {
      "schemaVersion": 1,
      "name": "Bounty Hunter",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Bounty hunters are constantly on the move, whether within city walls or the wilderness, trailing their fugitive quarries for capture... or disposal. Often relying on stealth or deception as much as martial skill, bounty hunters employ a vast array of talents to accomplish their goals and collect the hefty payout.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 9,
        "deception": 10,
        "diplomacy": 8,
        "intimidation": 8,
        "stealth": 12,
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
          "id": "erMgbyNlTUBjOhqo",
          "name": "Falchion",
          "bonus": 13,
          "damage": "1d10+6 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        },
        {
          "id": "MpZVk32vk8f54dFz",
          "name": "Crossbow",
          "bonus": 14,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "mCWRIeeB6PFExTmR",
          "name": "Hunt Prey",
          "kind": "action",
          "description": "The bounty hunter designates a single creature they can see and hear, or one they're Tracking or Gathering Information about, as their prey. The bounty hunter gains a +2 circumstance bonus to Perception checks to Seek the prey, to Survival checks to Track the prey, and to Diplomacy checks to Gather Information about the prey. This effect lasts until they use Hunt Prey again.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "yEaUAKruElpCN6zI",
          "name": "Posse's Edge",
          "kind": "passive",
          "description": "The bounty hunter and their allies gain a +1 circumstance bonus on initiative rolls if the opposing side includes their hunted prey.\nEffect: Posse's Edge",
          "traits": []
        },
        {
          "id": "LvkfpNccs65oqyIV",
          "name": "Precision Edge",
          "kind": "passive",
          "description": "The first time the bounty hunter hits their hunted prey in a round, they deal an additional 1d8 precision damage.",
          "traits": []
        },
        {
          "id": "hyLN8l8Z2WSxFAXC",
          "name": "Running Reload",
          "kind": "action",
          "description": "The bounty hunter Strides, Steps, or Sneaks, and then Interacts to reload.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:beast-tamer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "eF87AWFclYpu1cgD",
      "slug": "beast-tamer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:742b89a7a784c769531f92ab5e5237d426c7b006dd84a5aeaa2d8d104a4dc305",
    "translatableHash": "sha256:7913d8f81094ce0a3168018b79e4745c3757357d7bac0555802386d947adb254",
    "data": {
      "schemaVersion": 1,
      "name": "Beast Tamer",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Beast tamers bring the wild to civilization, rearing and training creatures to follow their commands and perform flashy tricks that entertain audiences. The beast tamer typically fights alongside a trained animal ally of its level or lower, most likely a tiger (Monster Core 51).\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 20,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 12
      },
      "abilities": {
        "str": 2,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 8,
        "diplomacy": 8,
        "intimidation": 8,
        "nature": 12,
        "performance": 8,
        "survival": 10
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
          "id": "DjeP7DBDv1Ue87eW",
          "name": "Whip",
          "bonus": 12,
          "damage": "1d4+6 slashing",
          "traits": [
            "disarm",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "tbW3A1Qy82ZEPfqq",
          "name": "Fist",
          "bonus": 12,
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
          "id": "4baqnRP77X4lxpxU",
          "name": "Wild Empathy",
          "kind": "passive",
          "description": "The beast tamer can use Diplomacy to [[/act make-an-impression]] on animals and to make very simple [[/act request]] of them.",
          "traits": []
        },
        {
          "id": "p0JJ5Z6nze1w1CXi",
          "name": "Animal Trick",
          "kind": "passive",
          "description": "The beast tamer gains the support benefit appropriate to its trained animal companion. Unlike for an animal companion, this doesn't require the animal to use any of its actions. The benefit for a Tiger is as follows: Until the start of the beast tamer's next turn, their Strikes that deal damage to a creature within the tiger's reach make the target Off-Guard until the end of the beast tamer's next turn.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "3FUfdj3U5vEftIPg",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 13,
          "saveDc": 22,
          "spells": [
            {
              "id": "rIGEzVm9ZrfffZXy",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "EHrvUtDpALTcvGy0",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "BlCcE6bC9MoLDRzO",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "MD9oVEkmQjNHobdy",
              "name": "Jump",
              "rank": 1
            },
            {
              "id": "10uHkEZx4sVWPiFt",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "ePkcZtMW8I8DYIjF",
              "name": "Runic Body",
              "rank": 1
            },
            {
              "id": "uN30G5kP0H9yhj4b",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "Wlmp0XV9CyPpkK7w",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "VHGplTbRiOobRvub",
              "name": "Animal Form",
              "rank": 2
            },
            {
              "id": "ZsO185LhwAYAHVy7",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "3sCXNqi2HOfvP8mE",
              "name": "Speak with Animals",
              "rank": 2
            }
          ]
        },
        {
          "id": "N85njvyWLxpngIQ4",
          "name": "Druid Order Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 13,
          "saveDc": 22,
          "spells": [
            {
              "id": "F3zp6I8TEJbKqKLN",
              "name": "Heal Animal",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mastermind",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "fBd8Cfe7fRtF8HoJ",
      "slug": "mastermind",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7abdcfe1aa9ef6a35729f2f295e95b55d1f35c09209ec852e761fb6d3559d5ac",
    "translatableHash": "sha256:7d062b40d9ae2c41035f4ea70a882ecc2165e2d1551e9580a0a8b4755cb242ce",
    "data": {
      "schemaVersion": 1,
      "name": "Mastermind",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Masterminds weave long-ranged plots to see their nefarious goals come to fruition, deftly manipulating those around them, turning enemies into friends and then pitting them against one another.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 20,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 16
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "arcana": 13,
        "deception": 15,
        "diplomacy": 15,
        "intimidation": 15,
        "occultism": 15,
        "performance": 17,
        "religion": 11,
        "society": 17,
        "stealth": 11,
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
          "id": "OSqvPT6Kb8Od7g2m",
          "name": "Shortsword",
          "bonus": 13,
          "damage": "1d6+6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "uIlZMbbMIb5xfie3",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "49sfbmwEvN94dGhS",
          "name": "Hand Crossbow",
          "bonus": 13,
          "damage": "1d6+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "WPfgNQXR7Zw6gYO5",
          "name": "+7 to Sense Motive",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "36ET5jV2rkhYn3A0",
          "name": "Manipulation Specialist",
          "kind": "passive",
          "description": "When competing in a social or intellectual arena, the mastermind is a 7th-level challenge.",
          "traits": []
        },
        {
          "id": "dSa8OQfOz63lYKQ2",
          "name": "Versatile Performance",
          "kind": "passive",
          "description": "The mastermind can use Performance instead of Diplomacy to [[/act make-an-impression skill=performance]] and instead of Deception to [[/act impersonate skill=performance]].",
          "traits": []
        },
        {
          "id": "v3VQfpzwMQ3vAQCU",
          "name": "Scoundrel's Feint",
          "kind": "passive",
          "description": "When the mastermind successfully [[/act feint]], the target is Off-Guard against the mastermind's melee attacks until the end of the mastermind's next turn. On a critical success, the target is off-guard against all melee attacks for that time, not just the mastermind's.",
          "traits": []
        },
        {
          "id": "86tScORfgOX4zuix",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The mastermind deals an extra 1d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "XCCNdWgAwDmYJNUr",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "rGyIwB0bqWe3IQup",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "0bFkMzbRnm4TRQFF",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "qb4pQfJk65QwKH67",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "H6pGKSfbQkmiEPxM",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "z69fp46oQ9nXfj07",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "yDQs4b74OWNloCq0",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "8jKSrWVduJ8bQG9J",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "CjozizNJfWBKZ7Zn",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "F8Cm6GzNwdp4AWbe",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "bzQvo7tvzuLxH0el",
              "name": "Charm",
              "rank": 2
            },
            {
              "id": "zlvvEAxBYtzDOFd9",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "SZ6flhrNIAKnWXqg",
              "name": "Paranoia",
              "rank": 2
            }
          ]
        },
        {
          "id": "vfhKr3Ly9XjE7PhV",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "UOvoAm6SRqvz12Kw",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "ZcHiHKg3lfNMSNtq",
              "name": "Uplifting Overture",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:orc-gamekeeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "hXcBMFGA45ES01Lb",
      "slug": "orc-gamekeeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e399395a1879ace324e395fac72447e8b51e4705a3784a02ed6001d12422897f",
    "translatableHash": "sha256:6d8f70f1d31011dcfa3ced85766d50328151e3d69b9b8e6f85877002bd358109",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Gamekeeper",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "orc"
      ],
      "description": "Gamekeepers live on the outskirts of the hold, usually remaining solitary and tending to animals they've captured. Every part of a trapped animal can be useful for making supplies or trading.\nOrcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 0,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 13,
        "diplomacy": 9,
        "nature": 13,
        "stealth": 12,
        "survival": 11
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
          "id": "CCtnKHddiiQltVkn",
          "name": "Bola",
          "bonus": 14,
          "damage": "1d6+9 bludgeoning",
          "traits": [
            "nonlethal",
            "ranged-trip",
            "thrown-20"
          ]
        },
        {
          "id": "FH2P4Ub7DxWDqCTV",
          "name": "Whip",
          "bonus": 14,
          "damage": "1d4+9 slashing",
          "traits": [
            "disarm",
            "finesse",
            "nonlethal",
            "reach",
            "trip"
          ]
        },
        {
          "id": "NbXUEPqawUmoiCBJ",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+9 bludgeoning",
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
          "id": "Vyjc348MEF8eDk6S",
          "name": "Insistent Command",
          "kind": "passive",
          "description": "When the gamekeeper rolls a success to [[/act command-an-animal]], they get a critical success instead; if they roll a critical failure, they get a failure instead.",
          "traits": []
        },
        {
          "id": "z14fU7mise4W1BMI",
          "name": "Play Chicken",
          "kind": "reaction",
          "description": "Trigger An adjacent enemy misses the gamekeeper with melee attack\nEffect The gamekeeper attempts to capture the flailing assailant. They attempt an Athletics check to [[/act grapple]] the attacker.",
          "traits": []
        },
        {
          "id": "K8GiCfuGTZ5WMvO2",
          "name": "Animal Tandem",
          "kind": "action",
          "description": "The orc gamekeeper makes a Strike against a creature adjacent to one of the gamekeeper's animal allies. If it hits, the animal ally deals one die of damage to the target, using the highest damage die among its unarmed attacks.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:demolitionist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ICvWcraGWylA1k9d",
      "slug": "demolitionist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8bd5a814e1dbc8a2a67ce04948239ac49289ec935efc784ed3f8ee1b95bc6bda",
    "translatableHash": "sha256:f18f3b6e9932a6dd9ba68c813602e2e13ca0cb4df0284150d6fa6af69469ed00",
    "data": {
      "schemaVersion": 1,
      "name": "Demolitionist",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "While most engineers take immense pride in their work constructing something that may survive many lifetimes, the demolitionist takes pride in destroying such pompous things in the most spectacular way possible. Every design has a flaw, and that flaw usually involves large quantities of explosives. Demolitionists are often pragmatic and calculated, taking great care to destroy whatever lies before them as efficiently as possible.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 3,
        "int": 4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "athletics": 9,
        "crafting": 12,
        "intimidation": 10,
        "thievery": 11
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "xMbeInXllB2x46YK",
          "name": "Light Mace",
          "bonus": 13,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove"
          ]
        },
        {
          "id": "XNwpzlpfUUhZOJ3y",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+7 bludgeoning",
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
          "id": "M4tUVZ57LnlsVriD",
          "name": "Explosive Demise",
          "kind": "passive",
          "description": "When the demolitionist is reduced to 0 Hit Points while they have any explosives still in their bag, the remaining explosives detonate, unleashing an explosion of fire upon all creatures in a 30-foot type:emanation. Each creature in the area takes 3d6 fire damage with a check (reflex, dc:19, options:area-effect,damaging-effect) save.",
          "traits": [
            "fire"
          ]
        },
        {
          "id": "rqNEdoNhB4yL45nE",
          "name": "Replenish Explosives",
          "kind": "passive",
          "description": "The demolitionist can replenish their stock of explosives with 4 hours of downtime.",
          "traits": []
        },
        {
          "id": "t0b0yEnyv2pVCm3z",
          "name": "Plant Mine",
          "kind": "action",
          "description": "1 to 2\nThe demolitionist plants a mine in an adjacent square. If a creature moves onto a space with a mine, the mine explodes. This deals 3d8 fire damage to the creature with a check (reflex, dc:21, basic) save. The demolitionist can use 2 actions to Plant a Mine to hide the mine, granting it a Stealth DC of 21. Creatures that didn't see the mine as it was planted must actively search for it (using the Search activity while exploring or the Seek action in an encounter).",
          "traits": [
            "fire",
            "manipulate"
          ]
        },
        {
          "id": "r6LO8ir3PNpVTR5g",
          "name": "Toss Dynamite",
          "kind": "action",
          "description": "The demolitionist quickly throws a stick of dynamite up to 20 feet away that explodes in 5-foot type:burst. Creatures within the burst take 4d4 fire damage with a check (reflex, dc:21, basic, options:area-effect) save.",
          "traits": [
            "fire",
            "manipulate"
          ]
        },
        {
          "id": "L3ZG758QkjjpEMSL",
          "name": "Wall Charge",
          "kind": "action",
          "description": "The demolitionist plants a powerful wall charge on a flat surface such as a door or wall. Once the charge is planted, it explodes after 1 minute, dealing 60 fire damage to the surface and ignoring up to 15 of the surface's Hardness. The explosive also deals 5d6 fire damage to creatures within 30-foot burst of the explosive with a check (reflex, dc:25, basic, options:area-effect) save.",
          "traits": [
            "fire",
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:jinx-eater",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "l5QgLQKKxM2pqcSl",
      "slug": "jinx-eater",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:93b2f7eefb451d6193ca85a8120f56620266e4eef980e9039a3e66f9a6bc4abd",
    "translatableHash": "sha256:028fdf049278c450fd5904f729e6ca230ae043add6b1941a462ef0e17480276e",
    "data": {
      "schemaVersion": 1,
      "name": "Jinx Eater",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "tengu"
      ],
      "description": "Whether kidnapped, conscripted, or having entered voluntary service, a tengu in the role of jinx eater on a ship's crew is tasked with keeping the crew free of misfortune. Those with the necessary skill to do so often achieve a respected and privileged position on board.\nOriginally hailing from the continent of Tian Xia, tengu have spread across the globe. Though some staunchly uphold traditions, gazing at the sky from the tallest mountaintops, other tengu remain on the ground, adapting and blending into the societies in which they settle.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 9,
        "deception": 12,
        "intimidation": 12,
        "occultism": 10
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
          "id": "tnliHASEnoYbFFtV",
          "name": "Tengu Gale Blade",
          "bonus": 13,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "NpT4VvnPKOtelOcA",
          "name": "Beak",
          "bonus": 13,
          "damage": "1d6+4 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "g4JzECR4LR7MJmVr",
          "name": "Eat Fortune",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger A creature within 60 feet uses a fortune or misfortune effect\nEffect The tengu negates the attempt to manipulate fate and fortune. Eat Fortune gains the opposing trait, and the triggering effect is disrupted.",
          "traits": [
            "concentrate",
            "divine"
          ]
        },
        {
          "id": "ldxQGW1Q2qu1yPas",
          "name": "Jinxed Call",
          "kind": "action",
          "description": "The jinx eater gives an eerie croak. Each non-tengu in a 30-foot type:emanation must succeed at a check (will, dc:21, options:inflicts:clumsy) save or be Clumsy 1 for 1 round (or 1 minute on a critical failure). Regardless of the results, each creature is then temporarily immune to Jinxed Call for 1 minute.",
          "traits": [
            "auditory",
            "occult"
          ]
        },
        {
          "id": "qRrGPu3UP7hix307",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The jinx eater deals 1d6 extra precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:trained-bat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ltUwrAv3r1udJRXu",
      "slug": "trained-bat",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2275aa9c63e8bf763546eac82b877d2e4ff759bca9bd2f69c6938c3af2ee4510",
    "translatableHash": "sha256:dad8ab83f24d37ad47669dc0cba2e0bb205aa70b9f81bb73a3d3c5c137370f3a",
    "data": {
      "schemaVersion": 1,
      "name": "Trained Bat",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "",
      "armorClass": 21,
      "hitPoints": 50,
      "speedFeet": 15,
      "perception": {
        "modifier": 10,
        "senses": [
          "echolocation-20",
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 9,
        "intimidation": 6,
        "stealth": 12,
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
          "id": "je6tDZp24ApnFIxs",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d6+6 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "nAInbHHxdQ6QWaXa",
          "name": "Wing",
          "bonus": 14,
          "damage": "2d4+6 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "YqzotBgfKVLya7Cq",
          "name": "Echolocation",
          "kind": "passive",
          "description": "A bat can use hearing as a precise sense at the listed range.",
          "traits": []
        },
        {
          "id": "kxwj9airdo8wY0bZ",
          "name": "Wing Thrash",
          "kind": "action",
          "description": "The trained bat thrashes wildly with its wings, making wing Strikes against up to three adjacent foes. Each attack counts toward the bat's multiple attack penalty, but the penalty increases only after all the attacks have been made.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:pack-leader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mkyMSRTbDV4lho2o",
      "slug": "pack-leader",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7f30fea544b8bf9a035dd913881b5a1141375d64717401713542bead5b73c5e2",
    "translatableHash": "sha256:0b9e5d8de6455e634f83c973ef283f1ff8dc8692a287a524c51af6d67b8dc657",
    "data": {
      "schemaVersion": 1,
      "name": "Pack Leader",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Primal spellcasters with a particular affinity for animals often aid their community by training and healing their domesticated animals. Others focus their time on preserving endangered species and helping them propagate or adapt to a changing environment. The pack leader is most often paired with the Trained Bat companion.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 20,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 6,
        "diplomacy": 9,
        "nature": 12,
        "stealth": 9,
        "survival": 10
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
          "id": "bFEafDty71LuWmGO",
          "name": "Sickle",
          "bonus": 11,
          "damage": "1d4+4 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "78FElrLETwmEnULr",
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
          "id": "7mkfqbM8jJumSNNo",
          "name": "Sling",
          "bonus": 11,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "0rfQ5Yx0cKAEXQY3",
          "name": "Animal Empathy",
          "kind": "passive",
          "description": "The pack leader can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "gO53SZiM0HtN4M3a",
          "name": "Stay Strong!",
          "kind": "reaction",
          "description": "Trigger An allied animal within 30 feet attempts a saving throw\nEffect The pack leader shouts a word of encouragement, granting the allied animal a +1 circumstance bonus to the save.\nEffect: Stay Strong!",
          "traits": []
        },
        {
          "id": "aOhlGrHOhl9PSeQM",
          "name": "Timely Trick",
          "kind": "action",
          "description": "The pack leader commands an animal ally within 30 feet to perform a specific action; the target can spend its reaction to immediately Step, Stride, or Strike.",
          "traits": [
            "auditory",
            "concentrate",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "5J2YI9CCvWwvf8vd",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "dYXa8HeS21NDvcJq",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "N9ETlvgHPuDpKTBg",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "KeKXZtjkEWazuYvK",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "ZOZnFFcykjXFXC11",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "rRMlqRy47JCnGLQC",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "Y5wAtUN0LTkT5N5U",
              "name": "Pet Cache",
              "rank": 1
            },
            {
              "id": "CI3SzZVFwkYmyxrf",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "yntX66bTpHFaYmIh",
              "name": "Summon Animal",
              "rank": 1
            },
            {
              "id": "skUG2mfkboejHthM",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "QpFfr7Ji9pocfacu",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "G6i1hn7KUDHEHsKD",
              "name": "Enlarge",
              "rank": 2
            }
          ]
        },
        {
          "id": "abCcgWyz8dguOJqw",
          "name": "Druid Order Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 0,
          "saveDc": 20,
          "spells": [
            {
              "id": "PSEwo3o2fCtrs4GU",
              "name": "Heal Animal",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:kobold-earth-diver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mYbZJQPzpXx9DfIq",
      "slug": "kobold-earth-diver",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:67ef3f684c5adfd07dbe42eb6062d3262733486aab7a176d6a328f932ee10c9e",
    "translatableHash": "sha256:6353eaf8a0c76602e7bc7f9934ad81069693acac57af19135fdf6bc479de1d19",
    "data": {
      "schemaVersion": 1,
      "name": "Kobold Earth Diver",
      "level": 4,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "humanoid",
        "kobold"
      ],
      "description": "Kobold earth divers study the geology of the areas near their communities. The mystical influence of their community's patron or years of extensive training at digging or earth magic allow them to swiftly burrow through the ground and to feel movements in the ground beneath their feet.\nKobolds are drawn to beings and objects of power, establishing their communities near them. Once a warren has been formed, the resident kobolds construct traps and set up ambushes to deter interlopers.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-10"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 12,
        "nature": 10,
        "stealth": 10,
        "survival": 8
      },
      "languages": [
        "common",
        "petran",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "t36Vykkh4I1GiXYq",
          "name": "Pick",
          "bonus": 14,
          "damage": "1d6+10 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "Cj2g11ZLBpw4UfES",
          "name": "Claw",
          "bonus": 14,
          "damage": "1d4+10 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "8RemLHrQUJC2fmsC",
          "name": "Crossbow",
          "bonus": 13,
          "damage": "1d8+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "4CAhJHuQyee19QJx",
          "name": "Sinkhole",
          "kind": "action",
          "description": "Requirements The earth diver is burrowed beneath a Medium or smaller creature aboveground\nEffect The earth diver creates a small sinkhole under the creature, who must attempt a check (reflex, dc:20) save. Regardless of the result, the target's space becomes difficult terrain.\nFailure The creature falls into the sinkhole and is Restrained until it [[/act escape dc=18]].\nCritical Failure As failure, and the creature takes 2d8 bludgeoning damage.",
          "traits": []
        },
        {
          "id": "yuynsVSsUSCdk5SC",
          "name": "Pick Smash",
          "kind": "action",
          "description": "The kobold earth diver smashes their pick into the ground, sending debris exploding in a 5-foot type:emanation. All creatures and unattended objects in range take 3d6 bludgeoning damage with a check (reflex, dc:20, basic, options:area-effect) save. A creature that is Restrained by an earth diver's Sinkhole takes an additional 1d6 bludgeoning damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:guide",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ndCqM6yNTg2QPZwK",
      "slug": "guide",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b7e7e8aa18b940df4d12980f0769935e64a0359fcb91a992821cc136014f147c",
    "translatableHash": "sha256:74ed13774448a9b92c856d7abcc570df57f49d829006e971f527d3e4269e9c03",
    "data": {
      "schemaVersion": 1,
      "name": "Guide",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Guides bring travelers, tourists, and adventurers into the wondrous natural world, using their expertise to avoid deadly monsters and gruesome hazards.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 12,
        "nature": 8,
        "stealth": 10,
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
          "id": "DDRbAS5r8U0XMma7",
          "name": "Greataxe",
          "bonus": 12,
          "damage": "1d12+8 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "DuhHkxBp1I2bLSbc",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "7uXdmkkS4JVZOIyN",
          "name": "Composite Shortbow",
          "bonus": 9,
          "damage": "1d6+6 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "kcXoIhefcYSfr7CL",
          "name": "Guide's Warning",
          "kind": "reaction",
          "description": "Trigger The guide is about to roll a Perception or Survival check to determine their initiative\nEffect The guide visually or audibly warns allies, granting them a +1 circumstance bonus to their initiative rolls. This bonus increases to +2 if the guide was Scouting. Depending on how the guide warns allies, this action has the auditory or visual trait.\nEffect: Guide's Warning",
          "traits": []
        },
        {
          "id": "aMJGSTnE6Wgp9MBr",
          "name": "Guiding Words",
          "kind": "action",
          "description": "The guide points out a weakness of a creature within 30 feet. Until the start of the guide's next turn, the guide and all allies that can hear the guiding words gain a +1 circumstance bonus to attack rolls against that creature, and the guide's Strikes deal an extra 1d4 precision damage to that creature.\nEffect: Guiding Words (Guide)",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:equestrian-constable",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "nVV8UBPEB9gHOh1R",
      "slug": "equestrian-constable",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c51c77d394e781c07a01b938116b9247fc72ca652458cd87d97f039be0ca58fb",
    "translatableHash": "sha256:f8257e76849db2686604fdfc84c913df5a7226cdf1b0235c298132ca9f695100",
    "data": {
      "schemaVersion": 1,
      "name": "Equestrian Constable",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Equestrian constables patrol for criminals on horseback in wealthy areas or serve as reeves to enforce court orders. Some patrol major roads far from the protection of the city guard.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 12,
        "nature": 10
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
          "id": "R639Wn6gSEo6YcVk",
          "name": "Guisarme",
          "bonus": 14,
          "damage": "1d8+8 slashing",
          "traits": [
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "2LtS5kSuhSpS0IQJ",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "tce4VDcn60HVz0Ph",
          "name": "Crossbow",
          "bonus": 11,
          "damage": "1d8+4 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "F9hkKRLXEPkVWkXa",
          "name": "Trained Animal",
          "kind": "passive",
          "description": "The equestrian constable rides a trained mount of their level or lower, usually a War Horse or, for elite equestrian constables, a Veteran War Horse. The animal has the standard number of actions, uses its normal stat block, and counts toward the encounter's XP budget normally.",
          "traits": []
        },
        {
          "id": "UAxdD8Lz8ceCdbQT",
          "name": "Opportune Maneuver",
          "kind": "reaction",
          "description": "Trigger A creature within 10 feet uses an action with the move trait or leaves a space within the constable's reach during its move action\nEffect The constable attempts to [[/act trip]] the triggering creature. On a success, the triggering action is disrupted.",
          "traits": []
        },
        {
          "id": "jxquO6ViuCAkhUt4",
          "name": "Vigilant Vantage",
          "kind": "action",
          "description": "The equestrian constable [[/act seek]] or Points Out a target. They can Interact to draw an item or Command an Animal to approach or attack the target.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:false-priest",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "OAxxUyACpMlX3q1X",
      "slug": "false-priest",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:61bd92ffc82cbfa65ba6ed8777a428353d1c6633901b6c5efcd3d8ef98fe102d",
    "translatableHash": "sha256:9b4ff426e74c9ce41ade4a40800d037609083fc332b097ca54caacc5f4b2a85e",
    "data": {
      "schemaVersion": 1,
      "name": "False Priest",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Belief is perhaps the strongest force in the universe. Instilling belief only to use it against someone in deceit, however, is the purview of a false priest.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 21,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 8,
        "deception": 12,
        "performance": 12,
        "religion": 8,
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
          "id": "22PsMMGp8JINhVoi",
          "name": "Rapier",
          "bonus": 12,
          "damage": "1d6+8 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "7yaoCck7JC3aLreY",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "0PlCgdUO4JNfJMKr",
          "name": "Hand Crossbow",
          "bonus": 12,
          "damage": "1d6+4 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Oq7EJED40zeLYJUJ",
          "name": "Deceiver's Surprise",
          "kind": "passive",
          "description": "On the first round of combat, if the false priest rolls Deception or Performance for initiative, creatures that haven't acted yet are Off-Guard to the false priest.",
          "traits": []
        },
        {
          "id": "9UbRDyf3EovxiABp",
          "name": "Fickle Prophecy",
          "kind": "action",
          "description": "The false priest convinces someone of their omnipotence by attempting a check (deception, against:will) check compared to the creature's Will DC.\nIf successful, the target gains 1d8+4 temporary Hit Points that last for 1 hour or until the false priest removes them by rebuking the target, whichever occurs first.\nEffect: Fickle Prophecy",
          "traits": [
            "emotion",
            "mental"
          ]
        },
        {
          "id": "YCf4WMESlKy1zF6l",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The false priest deals an extra 1d6 precision damage to Off-Guard creatures. This increases to 2d6 precision damage against creatures off-guard due to the false priest's Feint or deceiver's surprise.",
          "traits": []
        },
        {
          "id": "wYUI9xidJaJLYynz",
          "name": "The Jig Is Up",
          "kind": "reaction",
          "description": "Frequency once per hour\nTrigger The false priest critically fails a Deception or Performance check\nEffect The false priest Strides.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:burglar",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "sSa18Ra6zGc4Mp71",
      "slug": "burglar",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8db8977cb42a3f2859feaa9c49a4ec66cbf36a13cefb43a0e3569e7331e34043",
    "translatableHash": "sha256:7effc918246798d2b5561c3c8499a8767e21332541f39dbe8233e802f7fd0cd2",
    "data": {
      "schemaVersion": 1,
      "name": "Burglar",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These criminals specialize in breaking and entering, gaining access to secure buildings and bypassing security measures undetected.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 8,
        "deception": 7,
        "society": 7,
        "stealth": 12,
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
          "id": "WZzoPHc7f4dTn3iC",
          "name": "Shortsword",
          "bonus": 14,
          "damage": "1d6+5 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "BkeWWDUMX2mrTySc",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Ja5QiBYnwlN8lKXg",
          "name": "Composite Shortbow",
          "bonus": 14,
          "damage": "1d6+4 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "pdXfhk4J4QR9Rhw5",
          "name": "+1 Bonus on Perception to Find Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Y4ZPmVCbnUAexfGS",
          "name": "+1 Circumstance to All Saves vs. Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "vD0S2rfhIBKjlOjn",
          "name": "+1 AC vs. Traps",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "sDwLsrlMceRxlzIo",
          "name": "Deny Advantage",
          "kind": "passive",
          "description": "The burglar isn't Off-Guard to creatures of 4th level or lower that are Hidden, Undetected, flanking, or using Surprise Attack.",
          "traits": []
        },
        {
          "id": "zS04tb23VRw9X9kX",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The burglar is targeted with a melee or ranged attack by an attacker it can see.\nEffect The burglar gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "OzTxpPbEz9oZ7Oxz",
          "name": "Mobility",
          "kind": "passive",
          "description": "When the burglar Strides half their speed or less, that movement does not trigger reactions.",
          "traits": []
        },
        {
          "id": "J2jz17JAQtHVQs5I",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The burglar deals 1d6 extra precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "Laex9xerP0tAva7M",
          "name": "Surprise Attack",
          "kind": "passive",
          "description": "On the first round of combat, if the burglar rolls Deception or Stealth for initiative, creatures that haven't acted are Off-Guard to them.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:goblin-scavenger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Vi0Ydmt5JGqjWhpA",
      "slug": "goblin-scavenger",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4cbb98cb5630f9a8b50a9d256607b5dfeb49813eb955eefe50fd43afce8abc2f",
    "translatableHash": "sha256:87418e845468d8997c7c69ef52559fee261de597f93f81617dd365a3796d4b1c",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Scavenger",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "Many goblins scavenge materials, shiny objects, and anything else they can get their hands on, but a goblin scavenger is the best at finding such useful items. More importantly, they're great at making use of them without killing themselves. Most of the time.\nGoblins can be found across Golarion, sometimes threatening taller humanoids (whom they refer to as \"longshanks\") and sometimes redeeming harmful history by working alongside others.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "crafting": 12,
        "society": 8,
        "stealth": 11,
        "survival": 10,
        "thievery": 9
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
          "id": "0zmzfjMTtDfjGSuX",
          "name": "Dogslicer",
          "bonus": 12,
          "damage": "2d6+3 slashing",
          "traits": [
            "agile",
            "backstabber",
            "finesse"
          ]
        },
        {
          "id": "NJHAJ8Yf86EITbyd",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d8+3 bludgeoning",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "qqM1hq2wYkV3Ysfj",
          "name": "Big Boom Gun",
          "bonus": 14,
          "damage": "2d6+2 piercing",
          "traits": [
            "cobbled",
            "fatal-d12",
            "modular",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "Qe7glpieAJCHif4i",
          "name": "Big Boom Gun",
          "kind": "passive",
          "description": "The scavenger's gun is a comically oversized hand cannon that has the fatal d12 trait and a 20-foot range increment. If a Strike with it critically fails, the weapon misfires and explodes, dealing 1d12 fire damage to its wielder. It's a martial one-handed weapon with 2 Bulk and a Price of 10 gp. It has the uncommon, cobbled, and goblin traits. The cobbled trait means that on a failed attack roll with the gun, the user must succeed at a check (flat, dc:5) or the weapon misfires.",
          "traits": []
        },
        {
          "id": "9XYp2RwkRUnY3MH7",
          "name": "Finders Keepers",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet drops an item\nRequirements The goblin scavenger has a hand free\nEffect The goblin scavenger Strides up to their speed to an adjacent square and Interacts to pick up the item. The movement triggers reactions as normal, but the Interact action to pick up the item does not.",
          "traits": []
        },
        {
          "id": "GQG8SpRzw32r0PWq",
          "name": "Fireworks Barrage",
          "kind": "action",
          "description": "Requirements The goblin scavenger has a free hand\nEffect The goblin scavenger draws a bundle of fireworks and launches them toward a point within 60 feet, where they explode, dealing 1d10 fire damage|options:area-damage] damage in a 10-foot type:burst. Every creature in the area must attempt a check (reflex, dc:21, options:area-effect,damaging-effect) save.\nCritical Success The creature is unaffected. The goblin scavenger realizes that's because a firework fell at their feet and takes 2 fire damage when it explodes in their face.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Dazzled and Deafened for 1 round.\nCritical Failure As failure, except the creature is also Stunned 1.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "reNJDXnKDqqioJhK",
          "name": "One Person's Junk",
          "kind": "passive",
          "description": "The goblin scavenger intuitively knows how to make use of junk. When they use a weapon with the goblin trait or an improvised weapon, they do an additional die of damage (already included in the Strikes above).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:advisor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "14yAShROmGYdRS1Z",
      "slug": "advisor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c7c2c5efeed74aa34ae002b43ef024f185df55e112f8aa595bdfd41bb2a12d03",
    "translatableHash": "sha256:071c66fac3faeb943b0c4911665605c2f7d287665532d81e1fbcb631bc5b7b44",
    "data": {
      "schemaVersion": 1,
      "name": "Advisor",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Trusted counselors of the court, advisors whisper words of guidance into the ears of those in power. Many nobles lean so heavily on their advisor's counsel that they make few decisions without them and insist on their attendance at all meetings and public events. Advisors are often master manipulators.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": -1,
        "int": 3,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "deception": 14,
        "diplomacy": 14,
        "occultism": 10,
        "performance": 12,
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
          "id": "XHVHeWTU0zqmjJWZ",
          "name": "Whip",
          "bonus": 11,
          "damage": "1d4+4 slashing",
          "traits": [
            "disarm",
            "finesse",
            "nonlethal",
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "Bz5e5nzwVDHVigQ0",
          "name": "Dagger",
          "bonus": 11,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "TFSWS9GfHfeAzqrF",
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
          "id": "3LcqeSNm2BGnGC1G",
          "name": "Placate",
          "kind": "passive",
          "description": "An advisor is well versed in soothing agitated nobles. Their claming voice gives them a +2 circumstance bonus to Deception and Diplomacy checks when dealing with members of the nobility.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "2HONqJ3KSR0h25We",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "YXYsSXTtKnxEey6j",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "zdT2STfRnaWorYqx",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "U13sN8NudIufvn7U",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "07xHe5KCBRDzBJh7",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "LSth6BtXROEwr9lq",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "ZiWbjW605d82HXeh",
              "name": "Protection",
              "rank": 1
            },
            {
              "id": "dnBhVCcBV5X1bOaH",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "2daECih9tRJ6rQbF",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "r2eErwJsxx1rB87A",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "q3tb59afb6qRgJaH",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "16JGukayRD2ASFAK",
              "name": "Cleanse Affliction",
              "rank": 2
            },
            {
              "id": "6OAfqHa0VlueUyxx",
              "name": "Stupefy",
              "rank": 2
            },
            {
              "id": "AfOPyFuhgzUMNINp",
              "name": "Mind Reading",
              "rank": 3
            },
            {
              "id": "9bwi04y5u680KOYO",
              "name": "Ring of Truth",
              "rank": 3
            }
          ]
        },
        {
          "id": "cnmmUfSvnBHbPJ3N",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "sg57qASqVpv8e8CM",
              "name": "Counter Performance",
              "rank": 1
            },
            {
              "id": "rsJwMYbZNyKuvepY",
              "name": "Courageous Anthem",
              "rank": 1
            },
            {
              "id": "mGk3EQmw3Hg7nxlI",
              "name": "Uplifting Overture",
              "rank": 1
            },
            {
              "id": "EkK8Q2eskacqCa7K",
              "name": "Rallying Anthem",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:demonbane-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "62L0yQBRKjnsDmzH",
      "slug": "demonbane-warrior",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:656e19b2d606548f58f990b9052d81c352338dfabf07d1d9b2ab1f5832d1747d",
    "translatableHash": "sha256:a721bcd5aebad7e87522292e8bd9600692c2905b6bf9ca58125d86278e945602",
    "data": {
      "schemaVersion": 1,
      "name": "Demonbane Warrior",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elf",
        "humanoid"
      ],
      "description": "Elves' long lives give them centuries to delve into studies, artistry, or exploration.",
      "armorClass": 22,
      "hitPoints": 76,
      "speedFeet": 30,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "religion": 11,
        "stealth": 10,
        "survival": 11
      },
      "languages": [
        "chthonian",
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
          "id": "8lUltOwD0gpQzbda",
          "name": "Cold Iron Elven Branched Spear",
          "bonus": 15,
          "damage": "1d6+9 piercing",
          "traits": [
            "cold-iron",
            "deadly-d8",
            "finesse",
            "reach"
          ]
        },
        {
          "id": "PM8TiIi3ipnD8136",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "e7COyGWqb7xSqBSR",
          "name": "Composite Shortbow",
          "bonus": 15,
          "damage": "1d6+7 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "jTml2T3Yz1vQAlls",
          "name": "Sin Sense",
          "kind": "passive",
          "description": "A demonbane warrior automatically learns all weaknesses of a demon they've identified by Recalling Knowledge.",
          "traits": []
        },
        {
          "id": "uY2zTpA8ouzRf9Jr",
          "name": "Demonbane",
          "kind": "passive",
          "description": "A demonbane warrior gains a +1 circumstance bonus to damage rolls against demons. If their actions force a demon to take damage from its sin vulnerability, increase the damage from the vulnerability by 2.",
          "traits": []
        },
        {
          "id": "kaeprYU0kP8mJHhl",
          "name": "Imbue Righteousness",
          "kind": "action",
          "description": "The warrior imbues a weapon they wield with holy energy. Until the start of their next turn, their Strikes with that weapon gain the holy trait and deal an additional 1d6 spirit damage to unholy creatures.",
          "traits": [
            "divine",
            "holy"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bill-band",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "9mNCRx22F1RQDmFq",
      "slug": "bill-band",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d1a03eca6eef9eb336088f67ed2077f3859e257987fb64c1d2f3a81044efe213",
    "translatableHash": "sha256:20c03a0b5c9ca3663729b8a1761dcc1ddaf22a8b21e7b472a05c13fadf4f5905",
    "data": {
      "schemaVersion": 1,
      "name": "Bill-Band",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "halfling",
        "humanoid",
        "troop"
      ],
      "description": "Boisterous collectives of thrill-seeking halflings join in bill-bands to engage in spirited competitions and lively sports. They foster a sense of camaraderie among their members while leaving a trail of chaos in their wake.\nHalflings thrive on simple pleasures—having a pint at the pub or warming their feet by the hearth.",
      "armorClass": 20,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": -1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 13,
        "intimidation": 13
      },
      "languages": [
        "common",
        "halfling"
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
          "id": "qZl8La3mvQLwoQR3",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of them. Whenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one.",
          "traits": []
        },
        {
          "id": "fUkzezYofKOCiL3t",
          "name": "+3 Status vs. Intimidation Checks",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "xEBJu8HZGmlqQzgg",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "tfbLqiaPEJea0IhK",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "2WU0nTlGKvhnVyEl",
          "name": "Down to Our Level",
          "kind": "action",
          "description": "Frequency once per round\nEffect The bill-band deliberately gets under the feet of their opponents, proving they are greater than the sum of their parts. The bill-band attempts to [[/act trip]] all creatures in or adjacent to their space. They roll one Athletics check and compare the result to the Reflex DC of each target.",
          "traits": []
        },
        {
          "id": "zCAnyZMXYvnXxyYI",
          "name": "Firecracker Salvo",
          "kind": "action",
          "description": "Frequency once per round\nEffect The bill-band launches a barrage of lit firecrackers that, upon impact, burst into light and sound. Each creature in a 10-foot type:burst within 60 feet takes 1d12 sonic damage with a check (reflex, dc:19, basic, options:area-effect) save. A creature that fails its save is also Dazzled for 1 round. When the bill-band is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "LzpGUvNElpSBZsqU",
          "name": "Overwhelming Scrum",
          "kind": "passive",
          "description": "The bill-band swarms in and around other creatures. They can move into other creatures' spaces, and other creatures can move into their spaces. The bill-band's spaces are difficult terrain to other creatures.",
          "traits": []
        },
        {
          "id": "mZkWPJLkxc4o0vyq",
          "name": "Stick It to 'Em!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The bill-band swings barely coordinated fists and feet at each enemy in their space and in a 5-foot type:emanation, with a check (reflex, dc:19, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 bludgeoning damage\n2 (2d6+4)[bludgeoning|options:area-damage] damage\n3 (3d6+6)[bludgeoning|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:necromancer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "BcSzGmSxCn0uWkxU",
      "slug": "necromancer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:74f59d0375a604e452e9fafbbf2d7152de40215b7c00f50ab7f847ffdb69cf2c",
    "translatableHash": "sha256:7dbbd97e2cd98ab5f0012c479588090f6a78d649bc608c1c074e9a1ae571a47e",
    "data": {
      "schemaVersion": 1,
      "name": "Necromancer",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Defiling the natural order and spitting in the face of convention, the necromancer remains dutifully committed to understanding what forces await beyond the mortal boundaries of life and death.\nHidden secrets and occult powers have an irresistible lure for many. Since the majority of these NPCs are spellcasters, consider using alternative spell lists to adjust their themes.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "arcana": 11,
        "intimidation": 8,
        "occultism": 13
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
          "id": "Xo7vz0G7GjTFg4yo",
          "name": "Light Mace",
          "bonus": 14,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove"
          ]
        },
        {
          "id": "cQNgpbGJ2HqT0Q44",
          "name": "Fist",
          "bonus": 14,
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
          "id": "XCtQzAvxzCKT6NIl",
          "name": "Stench of Decay",
          "kind": "passive",
          "description": "The necromancer emits a scent of putrid rot in a 5-foot emanation. A living creature that enters or begins its turn in the aura is Sickened 1.",
          "traits": [
            "aura",
            "occult",
            "olfactory"
          ]
        },
        {
          "id": "tMnnKkqtdsnxMe99",
          "name": "Undead, Arise!",
          "kind": "action",
          "description": "The necromancer summons two Medium undead entities in different empty squares up to 30 feet away. These undead entities can take the form of zombies, skeletons, or ghosts, chosen by the necromancer. The entities block movement as though they were creatures and can be attacked. Each entity has 1 Hit Point and the same AC and saves as the necromancer. They can't take actions of their own and deteriorate if the necromancer is reduced to 0 Hit Points. The necromancer can have up to four undead entities at any given time. If they call another, the oldest undead entity deteriorates.",
          "traits": [
            "concentrate",
            "manipulate",
            "occult"
          ]
        },
        {
          "id": "97BKY16vMkTbaNcV",
          "name": "Undead, Attack!",
          "kind": "action",
          "description": "Requirements The necromancer has at least one undead entity active\nEffect The necromancer commands all their undead entities to attack. Each entity can Stride up to 20 feet into an empty square and make a Strike. The Strike has a [[/r 1d20+15 #Attack]] attack modifier and deals 2d12 bludgeoning damage (or 2d12 spirit damage if the entity is a spirit). The Strike has the magical trait, and no multiple attack penalty applies to it.",
          "traits": [
            "concentrate",
            "occult"
          ]
        },
        {
          "id": "vUdceUlCZdmoJ5ZC",
          "name": "Wave of Death",
          "kind": "action",
          "description": "Requirements The necromancer isn't drained and has at least one undead entity active\nEffect The necromancer overloads their undead entities with void energy, causing all of them to explode. Each entity is destroyed, dealing 4d12 void damage to each creature in a 10-foot type:emanation with a check (fortitude, dc:23, basic, options:area-effect) save. A creature in more than one explosion is damaged only once. The necromancer becomes Drained 1.",
          "traits": [
            "concentrate",
            "manipulate",
            "occult",
            "void"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "1gpQXNR9p7henV5H",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "OBcrUfqXaRXucSGZ",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:unsanctioned-sheriff",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "CCxgC3FIPsEZqZEo",
      "slug": "unsanctioned-sheriff",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9fcd3aeef99b9fa5da681e66e79a3bddd0b989830b0223a00d5f30125fe7d57c",
    "translatableHash": "sha256:ff8d54a5893280c1764866cfef6cc4829b374cc09f8d3d15539a4ecb5c0461be",
    "data": {
      "schemaVersion": 1,
      "name": "Unsanctioned Sheriff",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Believing the ends justify the means, the unsanctioned sheriff is unafraid to use others for their own gain, through bribes, manipulation, or force.\nThese lone wolves have an aura of mystery, bravado, and swagger.",
      "armorClass": 22,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
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
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "YzX0jrSGCSpNwtDn",
          "name": "Sap",
          "bonus": 15,
          "damage": "1d6+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "6U8PkkS2LIhiy5C1",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "jHH3niN37Td2qqfi",
          "name": "Dueling Pistol",
          "bonus": 13,
          "damage": "1d6+5 piercing",
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
          "id": "iJl4Jkphlc9wVqln",
          "name": "Greased Palms",
          "kind": "passive",
          "description": "Money talks, and no one knows that better than the unsanctioned sheriff. A creature that pays the sheriff at least 5 gp gains a +2 status bonus to Gather Information in the sheriff's settlement for the next 24 hours.\nEffect: Greased Palms",
          "traits": []
        },
        {
          "id": "tsxETjrcWSPwPbej",
          "name": "+2 to Sense Motive",
          "kind": "passive",
          "description": "",
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
          "id": "9Lb2uBWOkclGTiow",
          "name": "Lay Down the Law",
          "kind": "action",
          "description": "Requirements The sheriff's last action this turn was a successful Strike against a creature within 30 feet\nEffect The sheriff yells a command at the creature they hit. The target must succeed at a check (will, dc:22) save or spend the first action on its next turn doing as commanded (or all its actions on its next turn on a critical failure). The sheriff can command a creature to approach the sheriff, release what its holding, or drop Prone. Regardless of the result of its save, the creature is temporarily immune for 10 minutes.",
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
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tournament-combatant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "EiRyw8CAoZoEZVbt",
      "slug": "tournament-combatant",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:46e68948eb9c6281eeacabdcec13d704678084b4ad2801965bed11279b081ef7",
    "translatableHash": "sha256:ec690fd51e29b29d0050ea4c62d15caf92b55b9cf34a1cd31ac6df3da9c1e697",
    "data": {
      "schemaVersion": 1,
      "name": "Tournament Combatant",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Tournaments attract martial artists like moths to a flame, with participants crossing vast distances for the chance to test their might.\nMartial artists strive to master the art of hand-to-hand fighting.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 35,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 15,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 12,
        "intimidation": 11,
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
          "id": "aR5Gfg1cfzdg6Y21",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d8+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "6BdtgWTTJTgD8BGw",
          "name": "Nunchaku",
          "bonus": 14,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "backswing",
            "disarm",
            "finesse"
          ]
        },
        {
          "id": "iViVq504WTsTFEQ3",
          "name": "Shuriken",
          "bonus": 14,
          "damage": "1d6+5 piercing",
          "traits": [
            "agile",
            "reload-0",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "ovhSaPlMYl4IVOPv",
          "name": "Work the Crowd",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nRequirements The combatant is within 50 feet of at least three spectators\nEffect With a flashy flurry of moves, the tournament combatant elicits cheers. The tournament combatant is Quickened for 1 minute. They can use the extra action only to Strike or Stride.",
          "traits": [
            "emotion",
            "mental"
          ]
        },
        {
          "id": "h8LJcB8x085D236F",
          "name": "Flying Attack",
          "kind": "action",
          "description": "The tournament combatant makes a Leap, High Jump, or Long Jump. At any point during the jump, if they're adjacent to an enemy, they can Strike that enemy with a fist or nunchaku Strike, even in midair. The combatant falls to the ground after the Strike. If the distance they fall is no more than the height of their jump, they land upright and take no damage.",
          "traits": []
        },
        {
          "id": "xG2XdPLKaNlhnpCD",
          "name": "Powerful Fists",
          "kind": "passive",
          "description": "The tournament combatant's fist Strikes don't take penalties when making lethal attacks.",
          "traits": []
        },
        {
          "id": "tifNPh4tDPBkO9za",
          "name": "Somersault Attack",
          "kind": "action",
          "description": "The tournament combatant attempts to [[/act tumble-through]] a target's space. If they succeed on their Acrobatics check, the tournament combatant can make a fist or nunchaku Strike against that target while moving through its space.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:fence",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "HBcKkBXyGaWXZxSs",
      "slug": "fence",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bd7cf2d12296fad2f0336c99ab66a39ab61b554068730ccf14d57b170e8a0fd8",
    "translatableHash": "sha256:767b06a561a05da01441fae420dc27cfd04fe26d62ac1f3f34bc51460f1238e1",
    "data": {
      "schemaVersion": 1,
      "name": "Fence",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Fences make themselves indispensable to the underworld by paying for stolen goods only to resell them later, whether through a seemingly legitimate business or to a closed group of elite buyers.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 10,
        "crafting": 13,
        "deception": 13,
        "diplomacy": 11,
        "intimidation": 11,
        "society": 11,
        "stealth": 10,
        "thievery": 10
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
          "id": "DKvgSCXQLX4OaU29",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "mQzWlMw7TaETe0se",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "q9mV2TsKH1Z46vF5",
          "name": "Shortsword",
          "bonus": 14,
          "damage": "1d6+6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "EN5G8FNoxJ13WPTb",
          "name": "Fist",
          "bonus": 14,
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
          "id": "blPj44XSQdjiu1MS",
          "name": "Fence's Eye",
          "kind": "passive",
          "description": "Fences can use check (underworld-lore, traits:action:identify-magic) to identify an item's value and Identify Magic on an item. They gain a +2 circumstance bonus to Underworld Lore checks when doing so, and to all Underworld Lore checks related to stolen items.",
          "traits": []
        },
        {
          "id": "0WoLHxcEDfHig6LB",
          "name": "Fence's Feint",
          "kind": "action",
          "description": "The fence [[/act feint]], then can Step. If the feint succeeds, the target is Off-Guard against the fence's melee attacks until the end of the fence's next turn (or to all melee attacks on a critical success).",
          "traits": []
        },
        {
          "id": "cMz56RGF3H0a0ZQi",
          "name": "Quick Rummage",
          "kind": "action",
          "description": "The fence always has a few items close at hand. The fence Interacts to draw a weapon or an item that takes a single action to activate, and then Strikes with the weapon or Activates the Item.",
          "traits": []
        },
        {
          "id": "ttSdjINAYV0VxPZk",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The fence deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:avuncular-professor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "hZ2ch39MaaKFKgtJ",
      "slug": "avuncular-professor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7e37ea9f717b32b55b1e97230065252287c45ca6bf094f4c5f7ccf126ae58258",
    "translatableHash": "sha256:76edd7f880e9aba98e5cd6a42cecc6ecfd5e2bc54e3d672703dba7cd0f667485",
    "data": {
      "schemaVersion": 1,
      "name": "Avuncular Professor",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These world-wise scholars know that there's more to life than just research. There are also good meals at the university refectory, comfortable beds, and captive audiences of students.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 11,
        "will": 15
      },
      "abilities": {
        "str": 0,
        "dex": 0,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "deception": 18,
        "diplomacy": 18,
        "occultism": 12,
        "performance": 18,
        "society": 16
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
          "id": "isr3bkkLclaMuBbP",
          "name": "Sword Cane",
          "bonus": 11,
          "damage": "1d6+6 piercing",
          "traits": [
            "agile",
            "concealable"
          ]
        },
        {
          "id": "9NrmyAYgqOX67Ukr",
          "name": "Fist",
          "bonus": 11,
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
          "id": "Ii1nfNM9MGNrBHnI",
          "name": "Academic Politics Specialist",
          "kind": "passive",
          "description": "When it comes to wining and dining or other social situations, the avuncular professor is an 8th-level challenge.",
          "traits": []
        },
        {
          "id": "qovIBYesXonJTOoK",
          "name": "Duelist of Wits",
          "kind": "passive",
          "description": "The avuncular professor may cultivate the appearance of an unworldly academic, but they know how to stick the rhetorical knife in. Once per hour, if the avuncular professor succeeds at a Deception or Diplomacy check, they can choose to roll a Society or Academia Lore check at the same DC—if they succeed on the second check, the initial success is upgraded to a critical success, though if they fail the second check, their initial success also turns into a failure.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "0q5eANCJmJcPUlm4",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "RZyGTXI8wZUTdHsh",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "MVtp2yZbEaGHkFEx",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "wHRZ8gVEDNMvBdG6",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "MHd4XlETYRg5VK0j",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "1ozCm3KA9UFrJWmb",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "hcuzTNGEv1FhL3NJ",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "bmAE7h7eQfTGfFgH",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "vh0FWStkRJxJ9fMx",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "hAAEzxcvIyUjnHzj",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "ze6inKea7G1pDsSu",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "bU1sVwy3MQDhttxs",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "uXY47imfhzIK3CvO",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "NkTHeOEsJcUQ0v98",
              "name": "Hypnotize",
              "rank": 3
            }
          ]
        },
        {
          "id": "P28HRjzfidU6ZkMm",
          "name": "Bard Composition Spells",
          "tradition": "occult",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "vjxF7jMdxgvBWjtq",
              "name": "Uplifting Overture",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:subaquatic-marauder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "iJSCvkA3XQgO8GjG",
      "slug": "subaquatic-marauder",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04f3a83984762e84c353a09f908624f28073e20e6fca2597e8d40c17f3eb2b33",
    "translatableHash": "sha256:2b12311ac07cbcbaed3b2b87b1bc2c0a1fb20ab96e94dbb5ddea1c99469a1889",
    "data": {
      "schemaVersion": 1,
      "name": "Subaquatic Marauder",
      "level": 5,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A new breed of pirate, these raiders strike at unsuspecting ships from beneath the cover of the waves. The bulky, reinforced diving suits they wear also serve as armor and clockwork mechanisms augment their strength.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 23,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 7,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": 2,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 13,
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
          "id": "5FW4oD0o6vDKRjZn",
          "name": "Gauntlet",
          "bonus": 15,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "free-hand"
          ]
        },
        {
          "id": "Xoq7XQ5QDqwORPSQ",
          "name": "Javelin",
          "bonus": 15,
          "damage": "1d6+8 piercing",
          "traits": [
            "tethered",
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "x2XuUiCRgLDUA2L5",
          "name": "Sealed Diving Suit",
          "kind": "passive",
          "description": "The marauder's diving suit is a technological marvel. When sealed, it provides 1 hour of fresh air and protects the wearer from exposure to inhaled threats. Personalized modifications and a need for constant tinkering mean that other creatures are unable to take advantage of the special abilities of the diving suit and treat it as an ordinary suit of half plate.",
          "traits": []
        },
        {
          "id": "5c8aHhTBn3er6vtq",
          "name": "Depth Charge",
          "kind": "action",
          "description": "The marauder pulls a release valve on their suit, expelling a pressure wave that deals 3d6 sonic damage|options:area-damage] damage (check (fortitude, dc:22, basic, options:area-effect) save) to all creatures in a 10-foot type:emanation. Creatures that fail the save take a –2 circumstance penalty to Acrobatics checks to Balance and Athletics checks to Swim for 1 minute as their inner ear is impaired. Creatures that critically fail the save are also Deafened for 1 minute. The marauder can't use Depth Charge again for [[/gmr 1d4 #Recharge Depth Charge]].\nEffect: Depth Charge",
          "traits": [
            "air",
            "manipulate",
            "sonic"
          ]
        },
        {
          "id": "XBt9rKjZc8zqJsL8",
          "name": "Retract",
          "kind": "action",
          "description": "Requirements The marauder's last action was a successful javelin strike\nEffect The marauder reels in a chain connected to the javelin, pulling the target up to 10 feet closer. They then Interact to return the javelin to their hand.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:city-guard-squadron",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "jAdRgBHut1h1et10",
      "slug": "city-guard-squadron",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1b16db345f52dea91da6af66d0e16d3b46ff625636288fac00c1c748a1e3aaf9",
    "translatableHash": "sha256:d26c15fab22112bf9cf037bd493dadb9eb6552aa3607c48164f7f9cbc3213c71",
    "data": {
      "schemaVersion": 1,
      "name": "City Guard Squadron",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Garrisons of professional guards are given the duties of patrolling the streets, assisting citizenry, and acting as a quick military response in times of crisis.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 22,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 14,
        "intimidation": 11
      },
      "languages": [
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
          "id": "4vjdVbvQ2cPvkxA1",
          "name": "Seek Quarry",
          "kind": "passive",
          "description": "City guards can spend 1 minute to designate a single creature for whom they have a physical description as their quarry. They gain a +2 circumstance bonus to Perception checks against their quarry.",
          "traits": []
        },
        {
          "id": "cn62mtE1Ei3ps8SE",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 50 (3 segments), 25 (2 segments)",
          "traits": []
        },
        {
          "id": "j1sGR5RPmvgh6of8",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "IwHXGWYNDTd1AETH",
          "name": "City Passage",
          "kind": "passive",
          "description": "City guards ignore difficult terrain caused by crowds or from movement through narrow spaces such as alleyways.",
          "traits": []
        },
        {
          "id": "BCsGqHil1Dziu3FX",
          "name": "Lower Halberds!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round.\nEffect The city guards engage in a coordinated melee attack against each enemy within 10-foot emanation, with a check (reflex, dc:19, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d10 untyped damage\n2 (1d10+7)[untyped|options:area-damage] damage\n3 (1d10+10)[untyped|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "cLFteTTZ1b4O3AoI",
          "name": "Shoot Crossbows!",
          "kind": "action",
          "description": "The city guards draw or reload their crossbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 120 feet that deals 2d8 piercing damage with a check (reflex, dc:19, basic, options:area-effect) save. When the city guards are reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:sniper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "liMzj39g48s8ZtIf",
      "slug": "sniper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:20c24c812ffdc3c3d7f2717f3a4154574ff67b684a8d8e3bb36eb27ca6d15418",
    "translatableHash": "sha256:b40097033a653ff47f504b0df5e76b00bf466bb1b328011ce0effa509436975d",
    "data": {
      "schemaVersion": 1,
      "name": "Sniper",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A keen eye, a steady hand, and a killer instinct combine to form a ruthless, emotionless harbinger of death. A sniper usually works alone, though they're occasionally seen alongside a spotter or as part of a larger squad.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 15,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 11,
        "medicine": 11,
        "stealth": 15,
        "survival": 11
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
          "id": "Z7oTGvEbKXogqTIz",
          "name": "Dagger",
          "bonus": 15,
          "damage": "1d4+8 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "X5qsbYVrUobI4FBY",
          "name": "Dagger",
          "bonus": 15,
          "damage": "1d4+8 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "PqVjybDBEmhPxOA7",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "yoLqLgxbXSKc5GTN",
          "name": "Arquebus",
          "bonus": 15,
          "damage": "1d8+6 piercing",
          "traits": [
            "concussive",
            "fatal-d12",
            "kickback",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "XunhCsr1zHfDRomY",
          "name": "Silencer",
          "kind": "passive",
          "description": "A Silencer is an uncommon item worth 1 sp. It has light Bulk and can be attached to a firearm in 1 minute; the sniper typically already has one attached before going into combat. The first time a shot is fired through it, the silencer is consumed and reduces the report to a quiet noise. A silencer doesn't work on scatter firearms.",
          "traits": []
        },
        {
          "id": "BVB355JhAHogkxhY",
          "name": "Concussive Shot",
          "kind": "action",
          "description": "The sniper makes an arquebus Strike against a creature within the weapon's first range increment. On a success, the creature must succeed at a check (fortitude, dc:21) save or be Stunned 1 (Stunned 2 on a critical failure).",
          "traits": []
        },
        {
          "id": "FyFIRoWjKDG22nQw",
          "name": "Full Bore",
          "kind": "action",
          "description": "The sniper makes an arquebus Strike against two creatures that are adjacent to each other. The attack ignores any lesser cover one target provides the other. Roll damage once, and apply it to each creature the sniper hits. This counts as two attacks when determining the sniper's multiple attack penalty.",
          "traits": []
        },
        {
          "id": "D1hu15dN2GBPyimX",
          "name": "Sniper's Edge",
          "kind": "passive",
          "description": "The sniper's ranged Strikes deal 2d6 extra precision damage to Off-Guard creatures.",
          "traits": []
        },
        {
          "id": "h6yXbl50QM3FgRog",
          "name": "Surprise Attack",
          "kind": "passive",
          "description": "All enemy creatures that have not yet acted in combat are Off-Guard to the sniper.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mountaineer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "lX6pkCTREEzPzmuY",
      "slug": "mountaineer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7c6bc04e4f3d3362da5a49a63f2ee9c6042a7736637448d2a875ec865da81afa",
    "translatableHash": "sha256:4447af62ea96caaf7477edf635eea4532c7389ce4a89e209a9a5de725dabb7d4",
    "data": {
      "schemaVersion": 1,
      "name": "Mountaineer",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Mountaineers usually travel solo, but some guide expeditions into dangerous terrain.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 21,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 13,
        "nature": 12,
        "survival": 12
      },
      "languages": [
        "common",
        "petran",
        "pyric"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UbS0E94ZYyyHUr9v",
          "name": "Pick",
          "bonus": 14,
          "damage": "1d6+10 piercing",
          "traits": [
            "fatal-d10"
          ]
        },
        {
          "id": "BCPry34uPy1y1k8i",
          "name": "Hatchet",
          "bonus": 14,
          "damage": "1d6+10 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        },
        {
          "id": "h4wa8FxQNV5TUgGJ",
          "name": "Hatchet",
          "bonus": 13,
          "damage": "1d6+10 slashing",
          "traits": [
            "agile",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "qxxhXvBj4PgG6Ed5",
          "name": "Fist",
          "bonus": 14,
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
          "id": "ZTGKyyFQeMFjOte7",
          "name": "Chasm Crossing",
          "kind": "action",
          "description": "The mountaineer Strides twice and Leaps up to 20 feet horizontally.",
          "traits": []
        },
        {
          "id": "ikZNbNoxs3PAlIDP",
          "name": "Experienced Steps",
          "kind": "passive",
          "description": "A mountaineer isn't impeded by difficult terrain caused by snow or ice. They gain a +2 circumstance bonus to Acrobatics checks to Balance on slippery ice.",
          "traits": []
        },
        {
          "id": "2BDELM8yYqMubA1k",
          "name": "Lost My Footing",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The mountaineer critically fails a check to Balance or Climb\nEffect Training kicks in, and the mountaineer catches themself, improving the check from a critical failure to a failure.",
          "traits": []
        },
        {
          "id": "oiCI0teImTfvopsV",
          "name": "Professional Climber",
          "kind": "passive",
          "description": "While climbing, the mountaineer can have up to five allies Following the Expert and grants a +3 circumstance bonus to Athletics checks to Climb.",
          "traits": []
        },
        {
          "id": "ZfqQ2fEVPVHPY4kv",
          "name": "Team Awareness",
          "kind": "action",
          "description": "Requirements A creature is undetected by one or more of the mountaineer's allies but is observed by the mountaineer\nEffect The mountaineer Points Out an enemy and makes a Strike against them.",
          "traits": []
        },
        {
          "id": "WWuBvvD7X8s5KPJi",
          "name": "Tuck and Roll",
          "kind": "passive",
          "description": "During an avalanche, the mountaineer gains a +2 circumstance bonus to their Reflex save against bludgeoning damage and natural disasters.",
          "traits": []
        },
        {
          "id": "rnSThYXF2AlrRTtc",
          "name": "Arctic Passage",
          "kind": "passive",
          "description": "The mountaineer ignores difficult terrain caused by ice or snow.",
          "traits": []
        },
        {
          "id": "mkv6SrL4YfsuCExL",
          "name": "Quick Draw",
          "kind": "action",
          "description": "The mountaineer Interacts to draw their hatchet or pick, then Strikes with the weapon.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dromaar-lorekeeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "msItO7UjfQfWe9nZ",
      "slug": "dromaar-lorekeeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bd3e3f5c9be94c042bbb0c2a23b6cbf32d51978f9e768c56bdb12e86e1fd5ca7",
    "translatableHash": "sha256:cafac8dbac944a8095ed5579f7e057a772c498ee81c4e645986742f18902cd49",
    "data": {
      "schemaVersion": 1,
      "name": "Dromaar Lorekeeper",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dromaar",
        "human",
        "humanoid",
        "orc"
      ],
      "description": "Lorekeepers are meticulous keepers of the colorful and often misunderstood history of orcs and dromaar. They're jovial wanderers, telling their stories to anyone who will listen.\nOrcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 13
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "diplomacy": 12,
        "occultism": 11,
        "performance": 12,
        "society": 13
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
          "id": "3YvMlN8Cau8dvgrP",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+4 piercing; 1d10 sonic",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "p270ryfmQEW0yGaV",
          "name": "Dagger",
          "bonus": 15,
          "damage": "1d4+4 piercing; 1d10 sonic",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "T0YNTSAcr08YOx3Y",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+4 bludgeoning; 1d10 sonic",
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
          "id": "9RHbb1KxZNCgTiOl",
          "name": "Spotlight Ready",
          "kind": "passive",
          "description": "When performing for crowds of 10 or more, the dromaar lorekeeper gains a +2 circumstance bonus to their check (performance, options:spotlight-ready) checks.",
          "traits": []
        },
        {
          "id": "kncx0bYwrBayzY3a",
          "name": "Final Tale",
          "kind": "passive",
          "description": "When the lorekeeper dies, they utter a brief but poignant final story that shakes those nearby to their core. Each creature in a 10-foot type:emanation must succeed at a check (will, dc:20, options:inflicts:paralyzed) save or be Paralyzed for 1 round.",
          "traits": [
            "auditory",
            "mental",
            "occult"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "IbXMWzBpCi0EwThp",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "nTVWa0Ed2oM3vLB6",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "qdigJqzE0F57k2rb",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "FdWe6DBSVPn79QXf",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "qZfjNjqbrisTlHE4",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "gUfhk1LlIzraiI8H",
              "name": "Phantasmal Minion",
              "rank": 1
            },
            {
              "id": "AsXOFHUZF3O5bDBQ",
              "name": "Summon Instrument",
              "rank": 1
            },
            {
              "id": "ZQZ7LRToIWbjPgO9",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "Qw8XZoxmMbsTtTLX",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "DNZC8iIHFWFS8r34",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "FHXKJqSsKlNKqKLb",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "LizGWzxaLQglVDOi",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "ZU1ZTfiJAFk0hoIY",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "6WI98bnPuu83vzdh",
              "name": "Heroism",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:goblin-get-gang",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "oizqaHsnhlKbL7ZO",
      "slug": "goblin-get-gang",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:060f590bc846c80d2d5b4e88bfbc6525d0f349ef359e9d733a1d77c7a9ca2916",
    "translatableHash": "sha256:db1794fc178f76770338580e8cefa0356bd1f9a795ffc5ee0a53396b587b0591",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Get Gang",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "goblin",
        "humanoid",
        "troop"
      ],
      "description": "There is little more terrifying than a goblin raiding party out to take from its neighbors. A swarming mix of commandos, pyros, and war chanters armed with dogslicers, horsechoppers, burning torches, and sharp teeth, this troop enjoys pillaging unprepared communities. Their song is an unsettling counterpart to the screams of their victims.\nGoblins can be found across Golarion, sometimes threatening taller humanoids (whom they refer to as \"longshanks\") and sometimes redeeming harmful history by working alongside others.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 14,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": -1,
        "cha": 4
      },
      "skills": {
        "athletics": 12,
        "intimidation": 13,
        "performance": 13,
        "stealth": 10
      },
      "languages": [
        "common",
        "goblin"
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
          "id": "ygsZ7JFmN3IdnDZI",
          "name": "Goblins Chant and Goblins Sing!",
          "kind": "passive",
          "description": "30 feet. The goblin get gang's disharmonious chorus of disturbing lyrics makes it difficult to concentrate. Any creature performing a concentrate action in the area must succeed at a check (will, dc:19) save or the action is lost. On a critical success, the creature is temporarily immune for 1 minute.",
          "traits": [
            "auditory",
            "aura"
          ]
        },
        {
          "id": "NIlPngmky5p5piFb",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "KMva0mLBOKeLl8un",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "eQNNfRdajN7kmA5J",
          "name": "Goblins Bound and Goblins Swing!",
          "kind": "passive",
          "description": "Goblins have difficulty staying in formation, especially during combat. The goblin get gang can take a move action only if it has used at least one action to Goblins Slash and Goblins Scar! this turn or if there are no conscious enemies adjacent to it.",
          "traits": []
        },
        {
          "id": "nydeMYmeBrzWte4x",
          "name": "Goblins Burn and Goblins Char!",
          "kind": "action",
          "description": "The troop's members throw a barrage of burning torches. Each creature in a 10-foot type:burst within 30 feet of the troop takes 2d8 fire damage with a check (reflex, dc:20, basic, options:area-effect) save. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "9PPJKcSTyWJ1Csi6",
          "name": "Goblins Slash and Goblins Scar!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The goblin get gang uses dogslicers, horsechoppers, and burning torches to attack each enemy in a 5-foot type:emanation, with a check (reflex, dc:20, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d6 slashing damage|options:area-damage] damage\n2 (1d6+6)[slashing,1d6 fire damage|options:area-damage] damage\n3 (1d6+9)[slashing,1d6 fire damage|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:castaway",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "OuMZr5YNGlMY9SVb",
      "slug": "castaway",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cf5f391fe9283953da63cacae7375ec639eb541aba21befd43c9831bcd9a2275",
    "translatableHash": "sha256:7ea1fbe289b2bb95a0cddcedeefd41d4e57f8ba853638c35c4d9f5fb01f883f2",
    "data": {
      "schemaVersion": 1,
      "name": "Castaway",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Be it the result of shipwreck, forcible marooning, or personal choice, surviving alone on an island long enough tends to weed out the weak of body and mind. Lack of social interaction tends to breed belligerence towards outsiders, but hostilities are not a certainty.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 21,
      "hitPoints": 80,
      "speedFeet": 30,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 13,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 4,
        "cha": -1
      },
      "skills": {
        "athletics": 13,
        "crafting": 12,
        "nature": 11,
        "stealth": 11,
        "survival": 15
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
          "id": "QWn7bQWXZJT1HXvY",
          "name": "Hatchet",
          "bonus": 15,
          "damage": "1d6+7 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        },
        {
          "id": "yRCRKbOSq133OTlP",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "pcW68lIyhPRzXAAB",
          "name": "Blowgun",
          "bonus": 15,
          "damage": "1 piercing; 2d6 poison; 1d6 poison",
          "traits": [
            "agile",
            "nonlethal",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "09j7nyB7xIsDzUjQ",
          "name": "Skittish",
          "kind": "reaction",
          "description": "Trigger The castaway takes damage from a Strike\nEffect The castaway Steps away from the source of the Strike.",
          "traits": []
        },
        {
          "id": "Uw90ORYkncHQoIko",
          "name": "Cockamamie Rant",
          "kind": "action",
          "description": "The castaway launches into a nonsensical verbal stream of consciousness. Creatures in a 30-foot type:emanation must succeed at a check (will, dc:19, options:inflicts:confused) save or be Confused for 1 round. Once a creature has succeeded at a save against the castaway's Cockamamie Rant, they are immune to its effects for 24 hours.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "SY7NSR2TRJp2YPXQ",
          "name": "Snare Master",
          "kind": "action",
          "description": "Frequency five times per day\nEffect By scrounging local materials, the castaway constructs a simple but effective deadfall without expending resources. Treat this as a snare with a check (perception, dc:19) check to spot, and a check (thievery, dc:23) check to disable. It occupies a single 5-foot square and lasts 24 hours before falling apart. The first creature that enters the space takes 6d6 bludgeoning damage (check (reflex, dc:22, basic) save).",
          "traits": [
            "manipulate",
            "trap"
          ]
        },
        {
          "id": "iHLxm1peDk99GVaW",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The castaways deals 1d6 extra precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:watchmage",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "SK7BA4K7ALWtfNBe",
      "slug": "watchmage",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1fc1ec4f6a474432b4cea0377482d638b1471e02d733a6f1a8c444474f6ec38b",
    "translatableHash": "sha256:29250a54f97b28b06dec7d8cf9cb1a1b1c05b1c6d6738576992ba199fd59f49a",
    "data": {
      "schemaVersion": 1,
      "name": "Watchmage",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "A watchmage uses a mix of magic and martial training to enforce the law. They magically detect invisible criminals, locate stolen property, and counter illegal spells.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "arcana": 13,
        "athletics": 10,
        "intimidation": 9,
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
          "id": "ZP5SzIci8DlvSpg8",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "eG1I4q5ccO1NpjXb",
          "name": "Shortbow",
          "bonus": 15,
          "damage": "1d6+4 piercing",
          "traits": [
            "deadly-d10",
            "magical",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "gcs26pIHID48TUdP",
          "name": "Arcane Watch",
          "kind": "passive",
          "description": "The watchmage can either Investigate or Search while using the Detect Magic exploration activity.",
          "traits": []
        },
        {
          "id": "6sz1UfpfaZl4UW3Z",
          "name": "Counter Escape",
          "kind": "reaction",
          "description": "Trigger A creature Casts a Spell with the teleportation trait or as a reaction\nEffect The watchmage expends a spell slot of the same rank or higher as the trigger creature's spell and attempts to counteract the triggering spell (counteract modifier [[/r 1d20+11 #Counteract]]).",
          "traits": [
            "arcane"
          ]
        },
        {
          "id": "7mleAGFfBWpFQl7d",
          "name": "Eldritch Arms",
          "kind": "passive",
          "description": "In a brief ritual that takes 10 minutes, the watchmage chooses a single weapon or unarmed attack through which they can focus their magic. Strikes the watchmage makes with that weapon are magical and deal 1d6 additional force damage.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "hTuNAi9LMU6sxtte",
          "name": "Spellbound Strike",
          "kind": "action",
          "description": "Requirements The watchmage is wielding the weapon chosen with Eldritch Arms\nEffect The watchmage Casts a Spell that takes 1 or 2 actions to cast, imbuing that spell into the weapon. The watchmage Strikes with the required weapon. This counts as two attacks for the watchmage's multiple attack penalty. On a hit, the target is also affected by the spell, though the target gets any normal defenses allowed by the spell.\nIf the spell is targeted, it targets the creature that was hit and no one else. If the spell is an area, the target must be in the area. A burst is centered on a corner of the target's square if the target is Medium or smaller, or the corner of a square closest to the creature's center if it's Large or larger. A cone or line emits from a square of the watchmage's choice adjacent to the target.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "29shlbNACAjnJLD9",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "WrXH7Upj6kFyvs4G",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "aiuPhWT0qND0NtnV",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "iv7tk7yyoeyni5vj",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "u5ARLhCnGfIaISnf",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "Y61Q4es6ITruXLHB",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "Z3G89kbEiyEFAt81",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "mPcd3CkCyxGyH7Kl",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "dsbhZQrQQn1EyuUL",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "xPkHCIIX1yoOqt3D",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "hp1orl8mGWI5abqE",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "c9AuAbimxx6aVpdR",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "C1gFOddSKcNP3KJT",
              "name": "Slow",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:champion-of-rovagug",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "swsUKYW00lGAH55r",
      "slug": "champion-of-rovagug",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a1237248b4dc1e7f8185b2a2dd94e39f0eb302f23e739510918b1d0b6444c304",
    "translatableHash": "sha256:09223f447d4d3db212184dd0941a36315f05384adcb2a2df65c61393ce88d00a",
    "data": {
      "schemaVersion": 1,
      "name": "Champion of Rovagug",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "There are perhaps no mortals more anathematic to peace than champions of Rovagug or other destructive deities.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 25,
      "hitPoints": 70,
      "speedFeet": 20,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "athletics": 13,
        "deception": 10,
        "intimidation": 12,
        "religion": 8,
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
          "id": "ZcVfcVHFVcJZhIQI",
          "name": "Fearsome Greataxe",
          "bonus": 13,
          "damage": "1d12+8 slashing",
          "traits": [
            "magical",
            "sweep"
          ]
        },
        {
          "id": "087PGXgVjLNGs7lG",
          "name": "Javelin",
          "bonus": 10,
          "damage": "1d6+8 piercing",
          "traits": [
            "thrown-30"
          ]
        },
        {
          "id": "0gQYxOktZ5Io4N1K",
          "name": "Gauntlet",
          "bonus": 13,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "free-hand"
          ]
        }
      ],
      "actions": [
        {
          "id": "JPfhAGCkOiNO4l5C",
          "name": "Champion's Aura",
          "kind": "passive",
          "description": "15 feet. Any follower of Rovagug in the aura knows the champion is a champion of Rovagug. Enemies in the aura take a –1 circumstance penalty to saves against fear, and an enemy that ends its turn in the aura can't reduce the value of its Frightened condition below 1. The aura can be suppressed or resumed with a single action, which has the concentrate trait, and ends if the champion falls Unconscious.",
          "traits": [
            "aura",
            "divine"
          ]
        },
        {
          "id": "XFo44PTU8F1rJam8",
          "name": "Destructive Vengeance",
          "kind": "reaction",
          "description": "Trigger An enemy in the champion's aura damages the champion\nEffect The champion increases the amount of damage they take by 2d6 and deals 2d6 spirit damage to the triggering enemy. In addition, until the end of the champion's next turn, the champion's Strikes against the triggering creature deals 2 extra spirit damage.",
          "traits": [
            "divine"
          ]
        },
        {
          "id": "ukrKHlplaukPtbEY",
          "name": "Axe Swipe",
          "kind": "action",
          "description": "The champion makes a melee Strike with a +1 circumstance bonus to the attack roll and compares the roll to the AC of up to two foes that are in reach and adjacent to each other. The champion rolls damage only once and applies it to each creature they hit. This counts as two attacks toward their multiple attack penalty.",
          "traits": []
        },
        {
          "id": "WWpESEUIJ0EQdUuy",
          "name": "Fearsome Armament",
          "kind": "passive",
          "description": "The champion grants their greataxe the Fearsome rune while they wield it.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "YEsqZ1pmCAbdEHfI",
          "name": "Champion Devotion Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "4OFNlh90eUu8uq1T",
              "name": "Touch of the Void",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:razzle-dazzler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "t3z2RrO7pirntByc",
      "slug": "razzle-dazzler",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f08f760b223f77bedbf9853e621be03b6bd1fa14d7c2b698d6e8c92bfe9414b2",
    "translatableHash": "sha256:e4e755fd4687f51e13eb46ee91ed968c914e47a0dda66798f3bdcad30bd54a1b",
    "data": {
      "schemaVersion": 1,
      "name": "Razzle Dazzler",
      "level": 5,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "The razzle dazzler is a particularly beguiling sort of entertainer who specializes in delighting with illusions and showy displays. Whether with their illusory double or some well-timed fireworks, they are exceptionally good at keeping their audiences focused on one display to distract from the secrets that make their magic possible.\nBecause their ancestors came from the First World, gnomes are intrinsically linked to the realm of the fey and crave the mystical and unpredictable. They seek to create daring works of art, voyage to new places, and have experiences they've never had before. Otherwise, they could fall victim to the terrible gnomish illness known as the Bleaching, which not only drains them of their color but of their spirits as well.",
      "armorClass": 20,
      "hitPoints": 78,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "arcana": 10,
        "deception": 14,
        "diplomacy": 14,
        "intimidation": 12,
        "performance": 14,
        "thievery": 12
      },
      "languages": [
        "common",
        "elven",
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
          "id": "gAwqpxztGZ1OLGjY",
          "name": "Dagger",
          "bonus": 13,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "xBIQiQ8xhHjxXlZm",
          "name": "Dagger",
          "bonus": 13,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "hlP6tTRO6b6EAY0s",
          "name": "Fist",
          "bonus": 13,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "H6pGWCcPfDvIZ7UA",
          "name": "Hand Crossbow",
          "bonus": 13,
          "damage": "1d6+2 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "16GapaocUFBhDvDr",
          "name": "Daunting Charisma",
          "kind": "passive",
          "description": "Trigger The razzle dazzler rolls initiative using Deception or Performance\nEffect The razzle dazzler can attempt to [[/act demoralize]] one creature they can see.",
          "traits": []
        },
        {
          "id": "qJml3cgdrzvlNocV",
          "name": "Dazzling Duplicate",
          "kind": "action",
          "description": "The razzle dazzler creates an illusory duplicate of themself in their space that lasts for 1 round. A creature who attacks the razzle dazzler must first attempt a check (flat, dc:11). On a failure, the attack misses the razzle dazzler and destroys the illusion instead, ending this effect.",
          "traits": [
            "arcane",
            "concentrate",
            "illusion",
            "manipulate"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "7Q2JXUoOMgTKj2NK",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 15,
          "saveDc": 22,
          "spells": [
            {
              "id": "EEjn61jhPTj7jNgU",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "VDeCELJungrf467o",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Ap6h4rC8hxReFxv0",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "GDiHhdDbrWIixYVG",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "YOommOG9riMydBcQ",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "A1H1MNQFU8bY9C38",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "zan8LWhJN8dHE8Tz",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "9WffcagonbXvf1n5",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "tXDzEcyLhWRO7tHQ",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "w7ncAsLI22Eixw7S",
              "name": "Illusory Creature",
              "rank": 2
            },
            {
              "id": "mEnLzAC5Ej0UCSZk",
              "name": "Illusory Object",
              "rank": 2
            },
            {
              "id": "WlkuyiYLbZFwnUm9",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "eoKnHwBxATgrja5Y",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "1KqMQvG8dAYzB7GZ",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "QOLvmDqybNTreLvJ",
              "name": "Hypnotize",
              "rank": 3
            },
            {
              "id": "4xCZaVCH2Tcb7ScH",
              "name": "Illusory Disguise",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:plague-doctor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "txVORfqTxVCMD75C",
      "slug": "plague-doctor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8ef2dcafc9410f8f92e6e3a228834f267515d17f492d340b40cb32c9245f43db",
    "translatableHash": "sha256:ea81d173e3a0809c136ba59fedc398b8f0b57cc9724095bfac9429d973d76a93",
    "data": {
      "schemaVersion": 1,
      "name": "Plague Doctor",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These healers, often seen wearing distinctive masks and burning powders to defend against airborne plagues, are as much feared as they are respected. To see a plague doctor signals that disease has infested the land—and that it might have already taken hold.\nThe world is a dangerous place. Thankfully, there are those who devote their lives to easing the pain and suffering of others.",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 13,
        "reflex": 8,
        "will": 13
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 4,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "intimidation": 9,
        "medicine": 13,
        "religion": 13
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
          "id": "Rgd5z8pZXoiA9cop",
          "name": "Staff",
          "bonus": 9,
          "damage": "1d4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "L6ijn0YF1Wtr2VZo",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "jHMJPUtmDcCC20ND",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "wsQHQNWgznslk6yH",
          "name": "+2 Circumstance Bonus on Saves vs. Disease",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ZtFKTs16yHUY48WF",
          "name": "Healing Hands",
          "kind": "passive",
          "description": "When the plague doctor casts Heal, they roll d10s instead of d8s.",
          "traits": []
        },
        {
          "id": "DzrwPVv4yZGfqMNf",
          "name": "Improved Communal Healing",
          "kind": "passive",
          "description": "When the plague doctor casts Heal targeting a single creature, the plague doctor also restores Hit Points equal to the spell's rank to themself or any other creature within range of the spell.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "6kOiyngYv38Ec0lB",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "Rj0levpcKQ1JZOKh",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "qPFLQsQtIs4RuEsi",
              "name": "Detect Poison",
              "rank": 1
            },
            {
              "id": "zyAMmesyX1SUlIsq",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "9RGSy2utcO4QELJF",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "USYz99EOWO3qfW20",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "8R1BWgT8zL3LuDjB",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "Ea30o7Qv2H68Dgiz",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "IkEbv7AXsUqNGzQi",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "aacKJrz62pQ5sDCE",
              "name": "Cleanse Affliction",
              "rank": 2
            },
            {
              "id": "5vYqQ37cGlomlLFl",
              "name": "Clear Mind",
              "rank": 2
            },
            {
              "id": "wtVBXKprYy0nkjov",
              "name": "Peaceful Rest",
              "rank": 2
            }
          ]
        },
        {
          "id": "BbtsWaLbyjDHtboq",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "JX0uTkcb3D2eux1g",
              "name": "Healer's Blessing",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:despot",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "u1Np0sUKfkTxrNT1",
      "slug": "despot",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6760df13dcda45258bdc127b21427d078dbedb9464f951325c6680d9732990a6",
    "translatableHash": "sha256:0af76f9aef61954b3c78c27b9e4993dfbb45fc4da54a3b97db6297e5846e9b1b",
    "data": {
      "schemaVersion": 1,
      "name": "Despot",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Despots live to amass and exploit power over others.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 9,
        "will": 13
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "athletics": 11,
        "deception": 13,
        "diplomacy": 11,
        "intimidation": 13,
        "performance": 13,
        "religion": 11,
        "society": 13
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EcZNmPHnSyEBOxnM",
          "name": "Spiked Gauntlet",
          "bonus": 15,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "free-hand"
          ]
        }
      ],
      "actions": [
        {
          "id": "QC9XTxcZnqyYC6zU",
          "name": "Persistent Lies",
          "kind": "passive",
          "description": "Any creature deceived by the despot's Deception skill believes the deception more readily on the next day. Any later Perception checks attempted against the despot's Deception DC take a –2 circumstance penalty, as do other creatures' attempts to convince the creature otherwise, such as through Diplomacy or further Deception.",
          "traits": []
        },
        {
          "id": "XU2BqSl9PcE8og5Q",
          "name": "Sorcerous Potency",
          "kind": "passive",
          "description": "When the despot Casts a Spell from a spell slot that deals damage, they gain a status bonus to the spell's initial damage equal to the spell's rank.",
          "traits": []
        },
        {
          "id": "XnRBTxbwE4cyslE3",
          "name": "Tongue of Flame",
          "kind": "passive",
          "description": "When the despot casts Charm, Diabolic Edict, Enthrall, or Floating Flame, either a target takes 1 fire damage per spell rank, or the despot gains a +2 status bonus to Deception checks for 1 round.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "fo4rIPJJxb2JfFED",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 23,
          "spells": [
            {
              "id": "A6yUgW6fdLpqitTb",
              "name": "Bane",
              "rank": 1
            },
            {
              "id": "eaVLzsbPNVg4OjkT",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "Jvkl3LgcwToJFj0i",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "ZGD1urwPSU36eEiA",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "DbgEHuwv0UtrdzzZ",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "op1eFfst23z8p4Z9",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "gAjMp4yE2VMq7f9V",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "2OoLPgt16IE3w12o",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "U9bO7Im9guIC3jCL",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "cbfDUIiayly9F4Kl",
              "name": "Blood Vendetta",
              "rank": 2
            },
            {
              "id": "bIPWHmBYz0iBjXrI",
              "name": "Calm",
              "rank": 2
            },
            {
              "id": "NbzUidqZtnEOoLJ4",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "VoTWXL9XPnJY5ncg",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "D78wULVhTqPGRaDB",
              "name": "Chilling Darkness",
              "rank": 3
            },
            {
              "id": "tsUMjU6246kTQ766",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "PUAZIR7elWRiWHJb",
              "name": "Harm",
              "rank": 3
            }
          ]
        },
        {
          "id": "flLLoUGHSVJire4L",
          "name": "Sorcerer Bloodline Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "YbgiSSTIiLEjRMkh",
              "name": "Diabolic Edict",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:spirit-priest",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "wuniRDzgL6STnyPa",
      "slug": "spirit-priest",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d2fb17ac24156ccc699fa222a3021bff305e9da2e3ca58c439e3019bc113049a",
    "translatableHash": "sha256:9bd39f2cb4b5a2d867080020ba0602c54975bddae4b79fe6d09f5a666a6d32a7",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Priest",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dwarf",
        "humanoid"
      ],
      "description": "While dwarves worship gods like most any other ancestry, many dwarves also look to the spirits of the world for guidance and support. Most every object and environment in the world, from a simple rock to an expansive river to the largest of mountains, contains some kind of spirit. Dwarven spirit priests learn how to communicate with these spirits. This spiritual attunement allows these priests to use magic, as well as call on these spirits in times of need.\nFrom the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.",
      "armorClass": 19,
      "hitPoints": 78,
      "speedFeet": 20,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 9,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 3,
        "int": 0,
        "wis": 5,
        "cha": 2
      },
      "skills": {
        "athletics": 12,
        "diplomacy": 12,
        "occultism": 10,
        "religion": 14
      },
      "languages": [
        "common",
        "dwarven",
        "empyrean",
        "fey",
        "petran",
        "pyric"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Lg5eI8ZLBhpl4Lag",
          "name": "Clan Dagger",
          "bonus": 11,
          "damage": "1d4+6 piercing",
          "traits": [
            "agile",
            "parry",
            "versatile-b"
          ]
        },
        {
          "id": "cGPYaLbzroNItFV1",
          "name": "Fist",
          "bonus": 11,
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
          "id": "hRgSJclrdYkLuHrx",
          "name": "Spirit's Interference",
          "kind": "action",
          "description": "The spirit priest calls out to a local spirit to assault the priest's enemies. The spirit unleashes a blast of rocks, attacks with a set of vines, or uses some other appropriate part of the environment to attack all creatures in a 10-foot type:burst within 30 feet of the priest. The attack deals 6d6 bludgeoning damage with a check (reflex, dc:18, basic, options:area-effect) save. The spirit priest can't use Spirit's Interference for [[/gmr 1d4 #rounds]]. The GM might have this ability deal a different damage type based on the local spirits, such as fire damage when calling on a fire spirit.",
          "traits": []
        },
        {
          "id": "KZRrUi16iTJeV3Cz",
          "name": "Spiritual Edge",
          "kind": "action",
          "description": "The spirit priest aligns their spirit with their magical effects, enhancing the power of their spells. If their next action is to Cast a Spell that deals damage and doesn't have a duration, the spell deals additional spirit damage equal to the spell's rank.",
          "traits": [
            "concentrate",
            "spellshape",
            "spirit"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "RMJDdV9QiD50R5R9",
          "name": "Divine Spontaneous Spells",
          "tradition": "divine",
          "category": "spontaneous",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "5h2GGmeq6kwzGhrO",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "roRSCoxurfip6es9",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "NPmSXK7Y9QI23Vso",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "UtFapdYO3sbTYJIt",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "YavOH5K6BWd1lw5j",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "7cRdg5UWs3NY4Xbk",
              "name": "Infuse Vitality",
              "rank": 1
            },
            {
              "id": "9sYz69PbkLnH3dCU",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "3iJMOWXHP7hoex4f",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "daryTeuCNg1fXghy",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "64JIH0KAuoo2JVGd",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "XXRCMBcLlBhCcXSK",
              "name": "Heal",
              "rank": 2
            },
            {
              "id": "exiESo80a7FUBJhw",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "9eLIFDSrxjhRhXaB",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "kN8kvvP96bUF37mW",
              "name": "Noise Blast",
              "rank": 3
            },
            {
              "id": "UPhs3W3UIg2cyaYB",
              "name": "Safe Passage",
              "rank": 3
            },
            {
              "id": "JP3dKPOC2pFDzniK",
              "name": "Spiritual Armament",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tomb-raider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "Yl6pxCXAoFECt89L",
      "slug": "tomb-raider",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a316a571f402e5326105e3c2450b3d4912248e9001fbfa882f67f2f0e67432c",
    "translatableHash": "sha256:d4975920fae5ee0d143d27469251822c89047a2d924ef7a3d261126b013cf2c0",
    "data": {
      "schemaVersion": 1,
      "name": "Tomb Raider",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Great treasure awaits those willing to explore the hazardous depths of ancient tombs and forgotten dungeons. Some tomb raiders seek the riches of bygone eras; others recover pieces of history thought lost to the sands of time.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 15,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 13,
        "deception": 7,
        "society": 9,
        "stealth": 11,
        "thievery": 13
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
          "id": "b8lQp0O8fNE08x0h",
          "name": "Kukri",
          "bonus": 15,
          "damage": "1d6+9 slashing",
          "traits": [
            "agile",
            "trip"
          ]
        },
        {
          "id": "DvRKoQBoF36Q1NJX",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "vOk7ftvRMJXLkNWY",
          "name": "Hand Crossbow",
          "bonus": 15,
          "damage": "1d6+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "taX3Q0r1h37NNYFO",
          "name": "Hazard Spotter",
          "kind": "passive",
          "description": "Even if the tomb raider isn't Searching, they get a check to find traps that normally require them to be Searching.",
          "traits": []
        },
        {
          "id": "XPYr9hMESgVNjbVp",
          "name": "Trick Attack",
          "kind": "action",
          "description": "The tomb raider chooses one of their weapons. The next attack with that weapon this turn deals an additional 2d6 precision damage. In addition, the tomb raider can Interact to draw or reload the weapon.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:veteran-war-horse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "ylxh6qisFZuVWVaf",
      "slug": "veteran-war-horse",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1c694503a351e39f5fec7ff59d949988519dd05a0b0bab8c5b39fc6694fe65f7",
    "translatableHash": "sha256:2c1ec29b98ac81a876eae4404270f5fbcbcd3ece1145867519e063c75c6ed004",
    "data": {
      "schemaVersion": 1,
      "name": "Veteran War Horse",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "A veteran war horse has not only been extensively trained but has also experienced battle several times. They have grown used to the chaos of war and fearlessly strides forward, striking fear into their enemies. A veteran war horse could accompany a champion, champion of Rovagug, captain of the guard, deific champion, equestrian constable, or orc gamekeeper.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 40,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 15,
        "intimidation": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jteKhtR64eztcRn4",
          "name": "Hoof",
          "bonus": 13,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "imqx5kElZPehYdTx",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:21)",
          "traits": []
        },
        {
          "id": "ySUdQ32Yd0LBp7c5",
          "name": "Gallop",
          "kind": "action",
          "description": "The veteran war horse Strides twice. It has a +10-foot circumstance bonus to its Speed during these Strides.",
          "traits": []
        },
        {
          "id": "vjhC9fHFdm7SJzRk",
          "name": "Into the Fray",
          "kind": "action",
          "description": "The veteran war horse Strides then [[/act demoralize]] an adjacent Medium or smaller creature. When it does, Demoralize loses the auditory trait and gains the visual trait, and it doesn't take a penalty for the veteran war horse not speaking a language.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:puppeteer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1GVm2vOnSKHTIvGA",
      "slug": "puppeteer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:df95d73bd60242cd6f4b717cb7987845d3e08a8035c32afeb2f4282899b63933",
    "translatableHash": "sha256:101e8f4d35e91bbd0479111a63eadaa3cd03df38e887f696e068949fd87ee654",
    "data": {
      "schemaVersion": 1,
      "name": "Puppeteer",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "On the surface, puppeteers are simply providers of entertainment to the masses. With their little puppets and simple stories, their pantomimes are fun for the whole family. However, some puppeteers have a secret. They can animate their puppets with magic, sending them out to cause all manner of mischief in the dead of night. Puppeteers of this ilk tend to travel by themselves, though they might be found as part of a traveling group if they become lonely. They may serve as an innocent front for more illicit dealings or as lackeys to a larger group of thieves and ne'er do wells.\nPerformances come in a wide variety of forms, from musical methods like singing and instruments to physical dancing and juggling to simple orating and conversing.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 15
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "crafting": 15,
        "occultism": 13,
        "performance": 13,
        "thievery": 9
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
          "id": "KkY2FgGmZ6syEXzW",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+7 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "mQcneujnoeTSxLnq",
          "name": "Dagger",
          "bonus": 14,
          "damage": "1d4+7 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "zwm1Ac2p3NM22lFI",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ysKGhrqsWxcWnC4V",
          "name": "Puppets",
          "kind": "passive",
          "description": "The puppeteer has three animate puppets under their control—a smart puppet, a strong puppet, and a swift puppet. A puppet is a Tiny object that can be share a space with another creature. The usually begin combat in the puppeteer's space. A puppet has AC 23, Hardness 5, 20 Hit Points, and object immunities. If a puppet is destroyed, the puppeteer takes 15 nonlethal damage. A puppeteer can rebuild a puppet with 7 days of work. If the puppeteer dies while any of their puppets are still active, the active puppets become independent, but lose the will to fight in their grief.",
          "traits": []
        },
        {
          "id": "SoFniGftxKGmhTco",
          "name": "Manipulate Puppets",
          "kind": "action",
          "description": "The puppeteer pulls at invisible strings to control their puppets. Each puppet Strides up to 30 feet. Each puppet can then make a Strike as described below. Each attack counts towards the puppeteer's multiple attack penalty, but their penalty does not increase until all attacks have been made.\n• Smart Puppet The smart puppet is covered in runes that give it occult power. It makes a ranged Strike against a creature within 30 feet at a +15 attack modifier. A successful Strike deals 2d6 mental damage.\n• Strong Puppet The strong puppet wields a tiny sword and shield. It makes a melee Strike against a creature whose space it shares at a +15 attack modifier. A successful Strike deals 2d8 slashing damage. In addition, the strong puppet gains a +1 circumstance bonus to AC for 1 round.\n• Swift Puppet The swift puppet wields two tiny daggers. It makes a melee Strike against a creature whose space it shares at a +15 attack modifier. A successful Strike deals 2d4 piercing damage. If the swift puppet hits a creature that was hit by another puppet this round, its Strike deals an additional 1d4 precision damage.\nAlternative Puppets\nThis alternate set of villainous puppets Strikes with a +15 attack modifier.\n• Fiend Puppet The puppet makes a ranged Strike against a creature within 30 feet for 1d10 spirit damage, plus 1d4 spirit damage if the target is holy.\n• Poisoner Puppet The puppet makes a melee Strike with a tiny syringe of poison against a creature whose space it shares, dealing 1d4 piercing damage plus 1d6 persistent poison damage.\n• Undead Puppet The puppet makes a melee Strike against a creature whose space it shares, dealing 2d8 void damage and making the target Frightened 1 (or Frightened 2 on a critical hit).",
          "traits": [
            "concentrate",
            "manipulate",
            "occult"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:interrogator",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "1V3cvVmMte15i5sJ",
      "slug": "interrogator",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5a0ea36357a704832cf66c5c1038526a376bfdb33599c7aede543039095a89f3",
    "translatableHash": "sha256:646274460c58e472c56a0988522078a9ce0cadba866403fb20ad260770a53b6c",
    "data": {
      "schemaVersion": 1,
      "name": "Interrogator",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Interrogators use pain and intimidation against prisoners and other helpless victims to force \"confessions.\"\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 22,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 12,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 13,
        "medicine": 13
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
          "id": "nJF8NpWEqcib6Rtq",
          "name": "Dart",
          "bonus": 15,
          "damage": "1d4+7 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "A8pw40bMildkcqjT",
          "name": "War Razor",
          "bonus": 17,
          "damage": "1d4+10 slashing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d8",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "uh1Q19dqb6ZkWpOw",
          "name": "Fist",
          "bonus": 16,
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
          "id": "KWh3flz7jjTYz2Rb",
          "name": "Blood and Fear",
          "kind": "action",
          "description": "The interrogator Strikes with a slashing melee weapon. If they hit and deal damage, the target takes an additional 1d4 persistent bleed damage and is Frightened 1 (or 2d4 persistent bleed damage and Frightened 2 on a critical hit).\nEach of the interrogator's other enemies in a 30-foot type:emanation around the target that witnesses the bloodshed must succeed at a check (will, dc:19, options:area-effect,inflicts:frightened, traits:emotion,fear,mental,visual) save or be frightened 1. The frightened part of this ability is an emotion, fear, mental, and visual effect.",
          "traits": []
        },
        {
          "id": "5lWzxa4oDKBEY6Bv",
          "name": "Hobble",
          "kind": "action",
          "description": "Requirements A creature is Grabbed or Restrained by the interrogator\nEffect One creature grabbed or restrained by the interrogator takes 2d6 bludgeoning damage with a check (fortitude, dc:23, basic) save. If the creature fails its save, it also gains a condition of the interrogator's choice: Clumsy 2 for 1 minute, Enfeebled 2 for 1 minute, or Drained 1.",
          "traits": []
        },
        {
          "id": "9sEjcGcCgW3dkPKD",
          "name": "Torment",
          "kind": "passive",
          "description": "The interrogator's Strikes deal an additional 1d8 mental damage to Frightened creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:monster-hunter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3qDYEHtyAobpCg5r",
      "slug": "monster-hunter",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:08ceee4c548670ff1c94bd057f842c19ff2c3a075f340622e230e8ac5ba797a5",
    "translatableHash": "sha256:49ce69d92833e04c7fa3d578e4fe342392e1c68e5819ddd9f410a58c6473394d",
    "data": {
      "schemaVersion": 1,
      "name": "Monster Hunter",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Some mercenaries eschew the complications of politics and fealty and just get paid to hunt monsters. It's a straightforward form of mercenary service, often dangerous in the extreme, but one that can yield glory and fame.\nWhether they're hired to wage war, protect a caravan, or infiltrate an impenetrable fortress, there's ample work for mercenaries all over Golarion.",
      "armorClass": 22,
      "hitPoints": 105,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": 1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 15,
        "stealth": 13,
        "survival": 11
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
          "id": "9KFKSYQInYw7RRFw",
          "name": "Greataxe",
          "bonus": 15,
          "damage": "1d12+8 slashing",
          "traits": [
            "magical",
            "sweep"
          ]
        },
        {
          "id": "Vqjb5Zoa5sSTgnDg",
          "name": "Composite Longbow",
          "bonus": 14,
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
          "id": "QHjaZGpjLk4jCh9j",
          "name": "Favored Game",
          "kind": "passive",
          "description": "A monster hunter specializes in bringing down certain non-humanoid creatures. These favored game are typically animals and beasts, but an individual might hunt dragons, plants, or more specialized creatures like tigers or manticores.",
          "traits": []
        },
        {
          "id": "cFHJlVinmzogV39U",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "Trigger A creature within your reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.\nYou lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action, you disrupt that action. This Strike doesn't count toward your multiple attack penalty, and your multiple attack penalty doesn't apply to this Strike.",
          "traits": []
        },
        {
          "id": "z6dAfzucPpphEx6T",
          "name": "Hunter's Onslaught",
          "kind": "action",
          "description": "Frequency once per hour\nRequirements The monster hunter isn't Fatigued\nEffect The monster hunter leads an attack against their monstrous foe. The monster hunter chooses an enemy they can see that qualifies as their favored game. The monster hunter becomes Fascinated by that creature and gains 10 temporary Hit Points that last as long as the onslaught does. During the onslaught, the hunter gains a +8 status bonus to damage rolls against the designated enemy, and allies in a 30-foot aura around the hunter gain half that bonus. The onslaught lasts for 1 minute or until either the monster hunter or the designated creature falls Unconscious.",
          "traits": [
            "concentrate",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "rMyFoyfbCFtTsk1T",
          "name": "Primal Fear",
          "kind": "passive",
          "description": "When the monster hunter hits a creature that qualifies as their favored game, that creature is Frightened 1 (or Frightened 2 on a critical hit).",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "ggCUTswEGOjGvjj0",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "The monster hunter Strides twice and makes a melee Strike.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:sage",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "3R2J90R84AUgFJH2",
      "slug": "sage",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7595a3e3a5f5eff5e0d7d4e9d475bde49480bf4b9f0bd8514f6bac56778dfb8b",
    "translatableHash": "sha256:92245e0ae44f99e1fbf4cf79494582b8950b818bf40dcc0677e179913f391ffa",
    "data": {
      "schemaVersion": 1,
      "name": "Sage",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The greatest knowledge comes from experience. Village elders, ancient seers, and advisors to royalty are examples of those valued for such wisdom. Sages educate and guide their people from straying from their cultures' norms and traditions.\nTrue power comes from knowledge—the power to shape the growth of kingdoms by mere whispers, stay three steps ahead of adversaries, or even know which flora is best for creating untraceable poisons.",
      "armorClass": 22,
      "hitPoints": 86,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 16
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "arcana": 12,
        "diplomacy": 13,
        "medicine": 12,
        "nature": 14,
        "occultism": 12,
        "religion": 12,
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
          "id": "MLCrUvDlugE5BKqe",
          "name": "Staff",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "Hcuoxxe2F5IxOXGv",
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
          "id": "mOaqXByjpJOQroyH",
          "name": "Timely Advice",
          "kind": "reaction",
          "description": "Trigger An ally is about to attempt an attack roll or skill check and has not yet rolled\nEffect The sage gives the ally a savvy piece of advice, providing valuable insight. The ally gains a +2 circumstance bonus to the triggering roll.\nEffect: Timely Advice",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "pCgvFzMbb4y6tLfW",
          "name": "Sage's Analysis",
          "kind": "action",
          "description": "The sage studies a creature, attempting an check (arcana), check (nature), check (occultism), check (religion), or check (society) check against the creature's Recall Knowledge DC. On a success, the sage gains a +2 circumstance bonus to attack rolls and AC against that creature and deals an additional 2d6 damage to the creature with weapon attacks.\nThese benefits last for 1 minute or until the sage uses this ability again.\nEffect: Sage's Analysis",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:bone-mother",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "AMkz31YZPeFVdOVR",
      "slug": "bone-mother",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9bec2e6c9f1bf94c7f25c3ef3a7bce405a34ffb7a790c4ddb8dae970c96368f1",
    "translatableHash": "sha256:694dfe787822cf2270e9d78bc6246bc00d53fcfd33d0831270c53f5ba68bc35b",
    "data": {
      "schemaVersion": 1,
      "name": "Bone Mother",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "ratfolk"
      ],
      "description": "The bone mother—a warren's oracle—cuts an imposing figure. Bone mothers can be any gender despite the name, wearing the skull of a giant rat and covering their clothing in dangling bones. When a member of the warren dies, they gift a bone (usually a finger bone) to the oracle, who exists as both a physical repository of those who came before and a living history of their warren.\nYsoki (or, as outsiders call them, ratfolk) in their warrens have a society that is both stern and democratic, caring and ever vigilant. And at the top is a handful of intimidating and protective figures who make sure the swarm remains safe.",
      "armorClass": 23,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "deception": 14,
        "intimidation": 14,
        "medicine": 13,
        "occultism": 16,
        "performance": 14,
        "religion": 13,
        "society": 12
      },
      "languages": [
        "common",
        "requian",
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
          "id": "DWaSUsio1CsOzcXX",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+6 piercing; 1d10 spirit",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "cta1H1olOkAaq4Zd",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+6 piercing; 1d10 spirit",
          "traits": [
            "agile",
            "magical",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "vH0TIGSGFf9st7QN",
          "name": "Jaws",
          "bonus": 15,
          "damage": "1d4+6 piercing; 1d10 spirit",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "erUOYsgrGptiiYkw",
          "name": "Rattling Bones",
          "kind": "reaction",
          "description": "Trigger The bone mother or another ratfolk in their square takes damage from a melee Strike\nEffect Spirits from the bones emerge to deal 2d6 spirit damage to the attacker with a check (will, dc:24, basic) save.",
          "traits": [
            "occult",
            "spirit"
          ]
        },
        {
          "id": "0lO5biVc23eHTzsk",
          "name": "Swarming",
          "kind": "passive",
          "description": "A ysoki can end their movement in the same square as an ally that also has this ability. Only two such creatures can share the same space.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "Se5Cz0DiY03VJOVC",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "ee048Mk1JZCzI9PT",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "XGzCRS5g0HU89mHL",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "qMrZBnwheOuPmrVm",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "ySKQWTKRwKWQyaru",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "6JOs7Nl2VQGydIJq",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "u938bsc4U6peSU6J",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "ThuxqklqYGS85hxf",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "ZRde4MJ0OMSTfxjI",
              "name": "Sanctuary",
              "rank": 1
            },
            {
              "id": "ObzkvTm69tWwpc30",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "bNL0WFEDSHcFPaz0",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "mJgbXT3zaoTeg2X0",
              "name": "Cleanse Affliction",
              "rank": 2
            },
            {
              "id": "ccTDunfLN7UP9xyj",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "ymbRJlwSW5SwAw1U",
              "name": "Translate",
              "rank": 2
            },
            {
              "id": "ANKIQBFFhZIKAyMD",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "EsQTR70bNYHO180g",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "mzvcuzY3imtGKx5y",
              "name": "Paralyze",
              "rank": 3
            },
            {
              "id": "Ey9eloBDmulQPMlP",
              "name": "Ring of Truth",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:catfolk-name-collector",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "AxB7Sh2Bbt9AcDPp",
      "slug": "catfolk-name-collector",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b90f8cc446f0cfb61ce30b505a38c5b30d0851592e9523df9a0d8f5c1ddd5542",
    "translatableHash": "sha256:a044c0346b439657f91aac3dfdbaf9a914b60de7a1281b2eb0452571e2a9fcd9",
    "data": {
      "schemaVersion": 1,
      "name": "Catfolk Name Collector",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "catfolk",
        "humanoid"
      ],
      "description": "Name collectors are esteemed touchstones of catfolk culture. They record the adventures of catfolk heroes, speak to spirits, and tell legends about strange and faraway places.\nCatfolk can be found traveling almost anywhere, and they are quick to settle down for a chat when they encounter fellow travelers. Some trade stories, act as guides, or operate at the fringes of polite society.",
      "armorClass": 24,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision",
          "spiritsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "occultism": 12,
        "performance": 14,
        "society": 12
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
          "id": "2IV5650EhDrPTHtl",
          "name": "Sickle",
          "bonus": 15,
          "damage": "1d4+9 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "trip"
          ]
        },
        {
          "id": "pku4Kw7I0FZMksqV",
          "name": "Claw",
          "bonus": 14,
          "damage": "1d4+9 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "AYevol3n9xOykPwz",
          "name": "Spiritsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": "The name collector senses spirits, embodied or not (including living creatures, most non-mindless undead, and haunts).",
          "traits": []
        },
        {
          "id": "9BbbNDYHyWG0fc7P",
          "name": "Name the Worthy",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger Another creature critically succeeds at a check\nEffect The name collector honors the achievement with a new name. The creature gets a +1 status bonus on the same check until their next daily preparations. They become temporarily immune for 1 month.",
          "traits": [
            "auditory",
            "linguistic",
            "mental"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "d8FI7Fpi2dXSLcLU",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "2VL9HmCeOPEeNsf4",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "1TXIhJaS7mBb4rPG",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "rpDvyi34bYopyhgg",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "xHFF2gyXA7jD30DA",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "kP73jjtOpUVUADDB",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "p2VNHOFaUrjsR6ll",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "6gBJVFcdjxNPgRQH",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "Nt5O4PsdwKPoGB0U",
              "name": "Illusory Creature",
              "rank": 2
            },
            {
              "id": "njI6wtrPOskDfItF",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "s2OcBI5uka0VzD2W",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "Sl6jPEtCe3zroTlF",
              "name": "Heroism",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:ship-captain",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "bMKM6SKTBN8M4I8K",
      "slug": "ship-captain",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:922a1dc12298963d998b9910dbf84d0266d62009febd38757b166899bc634f80",
    "translatableHash": "sha256:2a6a559cf8175272f954dc41178a82451385c2702523ea3dbe35ef5e04362982",
    "data": {
      "schemaVersion": 1,
      "name": "Ship Captain",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The captain is the ultimate authority on a vessel, responsible for the livelihood and well-being of everyone on the ship.\nAdventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
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
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "keHqnY2IJOfiVKRj",
          "name": "Rapier",
          "bonus": 17,
          "damage": "1d6+10 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "magical"
          ]
        },
        {
          "id": "3EX2JaX17gPKVhcb",
          "name": "Main-Gauche",
          "bonus": 16,
          "damage": "1d4+10 piercing",
          "traits": [
            "agile",
            "disarm",
            "parry",
            "versatile-s"
          ]
        },
        {
          "id": "D26IrbWdbEUTaMxm",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "pZ0qTSs1z35vx57T",
          "name": "Hand Crossbow",
          "bonus": 14,
          "damage": "1d6+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "FMRFRcuXn2QHFX2v",
          "name": "Bravery",
          "kind": "passive",
          "description": "When the Ship Captain rolls a success on a Will save against a fear effect, they get a critical success instead. In addition, any time they gain the Frightened condition, reduce its value by 1.",
          "traits": []
        },
        {
          "id": "5iTqDt4fDSnYuJIg",
          "name": "Dual Disarm",
          "kind": "action",
          "description": "The captain makes two Strikes, one with their rapier and one with their main-gauche (in either order). If both Strikes hit, the ship captain can attempt to [[/act disarm]] the target.\nTheir multiple attack penalty increases only after all the attacks are made.",
          "traits": []
        },
        {
          "id": "OjePIuXOLgAEb4RG",
          "name": "No Quarter!",
          "kind": "action",
          "description": "The captain orders their shipmates to fight without mercy. All allied creatures of equal or lower level within 20 feet of the ship captain gain a +1 status bonus to attack rolls and damage rolls until the end of the ship captain's next turn.\nEffect: No Quarter!",
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
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gourd-leshy-witch",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "dgKQirSInfVaPMYq",
      "slug": "gourd-leshy-witch",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:562b93d95cf33cd263e8c871b37fe931255048f171c08b79b658b932d8b25dce",
    "translatableHash": "sha256:db73245fdf9a78eb0190af9566266a6e022f2d1300787b861ae39040d7779ff3",
    "data": {
      "schemaVersion": 1,
      "name": "Gourd Leshy Witch",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "leshy",
        "plant"
      ],
      "description": "Some spooky leshies learn the ways of occult spellcasting from strange spirits of nature that lurk just out of sight or under cover of darkness. These witches treat their brooms as their familiars, imbuing the wood and straw with a sliver of sentience.\nNature spirits inhabit bodies made of plants or fungi, blooming from primal magic to become the small people called leshies. They come in a truly immense number of diverse shapes and sizes, more so than most peoples of Golarion. This variety of forms means a leshy could have a place in nearly any type of setting for any type of story.",
      "armorClass": 22,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 1,
        "int": 4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 12,
        "intimidation": 13,
        "nature": 14,
        "occultism": 16,
        "survival": 12
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
          "id": "nCrQi4oAWuu6VrCB",
          "name": "Broom",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning; 1d6 void",
          "traits": [
            "magical",
            "two-hand-d8"
          ]
        },
        {
          "id": "0GfP9xHwRo0n4HNb",
          "name": "Dagger",
          "bonus": 12,
          "damage": "1d4+6 piercing; 1d6 void",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "dD6xoisD5YVqpakB",
          "name": "Dagger",
          "bonus": 12,
          "damage": "1d4+6 piercing; 1d6 void",
          "traits": [
            "agile",
            "finesse",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "0KZhsY19lNCOaapo",
          "name": "Fist",
          "bonus": 12,
          "damage": "1d4+6 bludgeoning; 1d6 void",
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
          "id": "HnUH2oxiJLoIgEyf",
          "name": "Verdant Burst",
          "kind": "passive",
          "description": "When the gourd leshy witch dies, a burst of primal energy explodes from their body, restoring 4d8 healing Hit Points to each plant creature in a 30-foot type:emanation. This area immediately fills with gourds, becoming difficult terrain. If the terrain is not a viable environment for these plants, they wither after 24 hours.",
          "traits": [
            "healing",
            "primal",
            "vitality"
          ]
        },
        {
          "id": "27M12c0Sfw4uzScs",
          "name": "Change Shape",
          "kind": "action",
          "description": "The gourd leshy witch transforms into a Small gourd. This ability otherwise uses the effects of One with Plants.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "gph5kKQ1rfac9Ri3",
          "name": "Short Flight",
          "kind": "action",
          "description": "1 to 2\nFrequency once per round\nRequirements The gourd leshy witch is wielding a broom\nEffect The gourd leshy hops on their broom, which briefly takes flight. The witch Flies 20 feet (or 40 feet if they spend 2 actions), though they must end this movement on solid ground or fall at the end of their turn.",
          "traits": [
            "concentrate",
            "occult"
          ]
        },
        {
          "id": "yLrhpgFiKuvDYdnJ",
          "name": "Sweeping Spell",
          "kind": "action",
          "description": "Requirements The gourd leshy witch is wielding their broom\nEffect If the next action the gourd leshy witch uses is to cast a non-cantrip spell that deals damage to a single target, the witch's broom flies out and attempts to [[/act shove options=sweeping-spell]] that creature with an Athletics modifier of +16. On a critical success, the target is also knocked Prone. The broom immediately returns to the gourd leshy witch's hand.",
          "traits": [
            "manipulate",
            "occult",
            "spellshape"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "nvBjH0CaEiyYMAmU",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "IZrRtlw17nJc1s6j",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "3Uqz3T76b0AFtPAK",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "ZkItCvrJuWXyK9vL",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "DINkUtObdDDNvtrL",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "Rapz8oLzLj8rLive",
              "name": "Force Barrage",
              "rank": 1
            },
            {
              "id": "pZH8f87Tem70lchM",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "GJCH3iERNAXUe9uL",
              "name": "Ill Omen",
              "rank": 1
            },
            {
              "id": "zIJb4yC2NW2GfZtw",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "S1hqMhdSxYj7T5lm",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "GopdQs57SFrnjDRK",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "N6tBhmXaQ9g3BoZy",
              "name": "Slow",
              "rank": 3
            },
            {
              "id": "KzTxbAcqYDCe8Wh7",
              "name": "Vampiric Feast",
              "rank": 3
            }
          ]
        },
        {
          "id": "kqJzyL4wHGbdNjSJ",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 24,
          "spells": [
            {
              "id": "ODmxw4MdNFDFbrdR",
              "name": "Speak with Plants (Gourds Only) (Constant)",
              "rank": 3
            }
          ]
        },
        {
          "id": "Sj9uYx646OV5qrF0",
          "name": "Witch Hex Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 0,
          "saveDc": 24,
          "spells": [
            {
              "id": "UlCZfYTqTPKnyfdp",
              "name": "Wilding Word",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:priest-of-sarenrae",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "DYqFgKrgZBf07NZS",
      "slug": "priest-of-sarenrae",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:67d259ed3bd4c294feee4a0ee9acaa6d1bdbf6a0c7232d129e5d94692ead573c",
    "translatableHash": "sha256:b569a9e3a14fc39ef52099b75d6221ab97b1ba8c646ab0293aac1e1bf147512a",
    "data": {
      "schemaVersion": 1,
      "name": "Priest of Sarenrae",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "holy",
        "human",
        "humanoid"
      ],
      "description": "Cloistered priests safeguard their temples and communities. They are the stalwart keepers of their god's tenets, devoted to spreading the word. Their guidance or healing services come at the cost of a donation.\nReligions inspire devout individuals to uphold their tenets.",
      "armorClass": 21,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "diplomacy": 12,
        "medicine": 14,
        "religion": 14,
        "society": 11,
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
          "id": "yv4VScmftpotsOOF",
          "name": "Scimitar",
          "bonus": 14,
          "damage": "1d6+8 slashing",
          "traits": [
            "forceful",
            "magical",
            "sweep"
          ]
        },
        {
          "id": "RASVqN7322gZrFQS",
          "name": "Fist",
          "bonus": 13,
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
          "id": "vBQpFXPNoYoOoH6d",
          "name": "Healing Hands",
          "kind": "passive",
          "description": "When the priest casts Heal, they roll d10s instead of d8s.",
          "traits": []
        },
        {
          "id": "ZKJy0VYFxH9lvrt8",
          "name": "Steady Spellcasting",
          "kind": "passive",
          "description": "If another creature's reaction disrupts the priest's spellcasting action, the priest attempts a check (flat, dc:15). If the priest succeeds, their action isn't disrupted.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "k3ht8oaXrypKzQzG",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "rcFenx54JUMf32ti",
              "name": "Breathe Fire",
              "rank": 1
            },
            {
              "id": "RjMrsZVzOAXntptz",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "olfLxKeiJvp0Q5fP",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "wCgFOyWPLDSMQIC6",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "kBlusXEBv5jMAzjY",
              "name": "Infuse Vitality",
              "rank": 1
            },
            {
              "id": "IThV9tgDJ0HipHES",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "4GXOzwy1lg1sHz1s",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "vtEe5AHPZSQZFTuN",
              "name": "Spirit Link",
              "rank": 1
            },
            {
              "id": "2yV3l2Q5vr1OsBsc",
              "name": "Vitality Lash",
              "rank": 1
            },
            {
              "id": "9kH3eoK2HSckP4Yj",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "NIXNgsjsKRa77dIc",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "KXgDzxs95RICDMUl",
              "name": "Spiritual Armament",
              "rank": 2
            },
            {
              "id": "nlRyxsORRJEhj9sG",
              "name": "Fireball",
              "rank": 3
            },
            {
              "id": "YnxReGJos1TDRpUh",
              "name": "Holy Light",
              "rank": 3
            }
          ]
        },
        {
          "id": "JAisSlW12cblUTUE",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "foRJJozSVa7eT8xO",
              "name": "Dazzling Flash",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:veteran-noble",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "e4f7h4XJ6Hmm8jZl",
      "slug": "veteran-noble",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:483d2ec51ab736a9b95424ec0ba7b68c9eeb3765141a1754496ed5d14b5c9b26",
    "translatableHash": "sha256:1b9bcbdf25fa57fbc392d01a07f89776084d0c22c5bf9398e800a952c4489615",
    "data": {
      "schemaVersion": 1,
      "name": "Veteran Noble",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Veteran nobles have survived battles in the past, both social and physical. These movers and shakers are often the patrons or mentors of bold adventurers.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 24,
      "hitPoints": 85,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 14,
        "will": 16
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 0,
        "int": 2,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 13,
        "deception": 12,
        "diplomacy": 12,
        "intimidation": 14
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
          "id": "KPNp9v0JCIjAYIOe",
          "name": "Longsword",
          "bonus": 16,
          "damage": "1d8+11 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "Q7p1BbA36M3IBXpV",
          "name": "Dagger",
          "bonus": 15,
          "damage": "1d4+11 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "XlwbPNLxJFpXKLeI",
          "name": "Dagger",
          "bonus": 15,
          "damage": "1d4+11 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "aQuc2A1NUxGe27kb",
          "name": "Gauntlet",
          "bonus": 15,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "free-hand"
          ]
        }
      ],
      "actions": [
        {
          "id": "5OEa5xea4dhkVZmg",
          "name": "Battle Scarred",
          "kind": "passive",
          "description": "The first time each day the veteran noble would be reduced to 0 HP, they remain at 1 HP and are Enfeebled 2 for the rest of the day.",
          "traits": []
        },
        {
          "id": "rzlTPdNspCjT7haO",
          "name": "Noble Pride",
          "kind": "reaction",
          "description": "Trigger An opponent attempts to Demoralize the veteran noble or one of the noble's allies within 30 feet\nEffect The veteran noble attempts to Demoralize the triggering opponent before the opponent rolls. On a critical success, the triggering action is disrupted as well.",
          "traits": [
            "auditory",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "emn9HH5bvLabTJnO",
          "name": "Tactical Command",
          "kind": "action",
          "description": "Frequency once per round\nEffect The veteran noble directs an ally. The ally can immediately use their reaction to Strike or to Stride without triggering reactions. The ally gains a +2 status bonus to their Strike if the veteran noble has dealt with that creature or an organization that creature belongs to before, as the veteran offers hard-earned tactical advice.\nEffect: Tactical Command",
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
    "contentId": "pf2e:bestiary:pathfinder-npc-core:halfling-smuggler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GPRL88DEmTVn0jkY",
      "slug": "halfling-smuggler",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5295fa4ab1b30d7f9281fc9b9138831b9c96b5219d95553bcf8d34a8440a4d96",
    "translatableHash": "sha256:7584d4fb82d3e2f51514851e78ae74e2e0e55fc835cf4cd582eaeb5222619120",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Smuggler",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "halfling",
        "humanoid"
      ],
      "description": "Halfling smugglers are sought out for their ability to deftly navigate the shadowy underworld to move illicit goods and information.\nHalflings thrive on simple pleasures—having a pint at the pub or warming their feet by the hearth.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 16,
        "will": 13
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 11,
        "deception": 14,
        "intimidation": 14,
        "society": 10,
        "stealth": 15,
        "thievery": 16
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
          "id": "V7BqhsWunwtvpiN8",
          "name": "Filcher's Fork",
          "bonus": 17,
          "damage": "1d4+9 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "mVSFhFnCbMSrEXZP",
          "name": "Filcher's Fork",
          "bonus": 17,
          "damage": "1d4+9 piercing",
          "traits": [
            "agile",
            "backstabber",
            "deadly-d6",
            "magical",
            "thrown-20"
          ]
        },
        {
          "id": "38zcG4NxMKPTcyFi",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "6G8oX4uPiXDahhWN",
          "name": "Sling",
          "bonus": 16,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "WvEDneUNZbnLdVLj",
          "name": "Grease Some Palms",
          "kind": "passive",
          "description": "A smuggler is adept at navigating official channels and makes network contacts in order to keep their goods moving. They gain a +2 circumstance bonus to Make an Impression and Request with members of the local bureaucracy.",
          "traits": []
        },
        {
          "id": "B3ax6hAslzRNcDvK",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of them. Whenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one.",
          "traits": []
        },
        {
          "id": "REDittofWMSRrU98",
          "name": "Distracting Escape",
          "kind": "action",
          "description": "Frequency once per round\nEffect Smugglers succeed by making a move only after they've diverted others' attention. The smuggler [[/act create-a-diversion]]. If the smuggler became Hidden to at least one creature, the smuggler can then Sneak.",
          "traits": []
        },
        {
          "id": "RxJnF7MlKwqVD1zj",
          "name": "Hidden Pockets",
          "kind": "passive",
          "description": "Frequency once per round\nEffect The smuggler Interacts to draw an item of light Bulk concealed in one of their hidden pockets. The pockets can store up to four objects of light Bulk. For most smugglers, these items are Arsenic, an Elixir of Life (Lesser), a Smoke Ball (Lesser), and a Thieves' Toolkit. The smuggler can refill the pockets over the course of 1 minute.",
          "traits": []
        },
        {
          "id": "HFXdCrPdWwvZMbuQ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The smuggler deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:hobgoblin-battalion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "GZxDz6PKbHs9f2WN",
      "slug": "hobgoblin-battalion",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:152e421baa504e9371b0fb769a39f7913e38e781e57f80aa6502d49f1711d505",
    "translatableHash": "sha256:babaad2c157e621436f95230274d76051d8e69a1b3efc442f214efb9bb6f8c8e",
    "data": {
      "schemaVersion": 1,
      "name": "Hobgoblin Battalion",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "hobgoblin",
        "humanoid",
        "troop"
      ],
      "description": "A hobgoblin battalion is usually composed of multiple soldiers and archers commanded by a single captain, although every battalion also has its own internal hierarchy that clearly defines the chain of command should the current captain fall in battle.\nHobgoblins are respected across Golarion for their unmatched expertise in the art of war. The recent foundation of the hobgoblin nation of Oprak and its unprecedented acts of diplomacy, including non-aggression pacts with the neighboring nations of Nidal and Nirmathas, has given some hope that a lasting peace might finally be established; however, there remains no shortage of unaffiliated hobgoblin raiders and pillagers.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 14
      },
      "languages": [
        "common",
        "goblin"
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
          "id": "EzfatqZSnczonYGD",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "1fLRsRZCW4JKp48e",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 60 (3 segments), 30 (2 segments)",
          "traits": []
        },
        {
          "id": "W291eDEk2jWer0KB",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "A3iRCw1rjvafnZxN",
          "name": "Coordinated Strikes",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The battalion thrusts their spears at each enemy in a 5-foot type:emanation with a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d6+2)[slashing|options:area-damage] damage\n2 (2d6+5)[slashing|options:area-damage] damage\n3 (3d12+7)[slashing|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "cEC3FjTPb84L7Any",
          "name": "Focused Volley",
          "kind": "action",
          "description": "The hobgoblin battalion's archers draw or reload their crossbows, then launch a ranged attack in the form of a volley. This volley is a 10-foot type:burst within 120 feet that deals 2d8 piercing damage with a check (reflex, dc:21, basic, options:area-effect) save. When the hobgoblin battalion is reduced to 2 or fewer segments, this area is reduced to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "Tffn3VziTZohT4pV",
          "name": "Perfect Formation",
          "kind": "action",
          "description": "The battalion raises a perfect guard against explosions. It gains a +2 item bonus to AC and a +2 status bonus to Reflex saves until the start of its next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:line-infantry",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "iYGdNF9BarBiJUJJ",
      "slug": "line-infantry",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f6f564f3e0de30fbb5e0e02d0022711b9d367f463eece438d055f02377b03cf5",
    "translatableHash": "sha256:4817c16d4cf4cb64e226552eaa00fb5ca4ffff51ecbd1c3899e331e75090c39a",
    "data": {
      "schemaVersion": 1,
      "name": "Line Infantry",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "Infantry are the backbone of most armies. These professional soldiers, marked by matching uniforms, straightforward tactics, and the drive to follow well-practiced orders, make up the bulk of most military forces—but are often considered the most expendable.\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 24,
      "hitPoints": 96,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 15
      },
      "languages": [
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
          "id": "ws8Ynp3fDMErh2tj",
          "name": "No Retreat",
          "kind": "passive",
          "description": "These soldiers have been extensively trained to hold their ground no matter the situation. If any effect would force the line infantry to move, reduce the distance by 5 feet. Any time they would be affected by the Fleeing condition, the line infantry is instead Slowed 2 for the same duration.",
          "traits": []
        },
        {
          "id": "u10PNRpeaLHvNObO",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 64 (3 segments), 32 (2 segments)",
          "traits": []
        },
        {
          "id": "aqcviTG9erIRohnd",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "ZPXu4TvscTOjN44e",
          "name": "Bolt Salvo",
          "kind": "action",
          "description": "The line infantry draws, loads, and shoots a salvo from their crossbows. The salvo is a 10-foot type:burst within 120 feet that deals 2d8 piercing damage (check (reflex, dc:21, basic, options:area-effect) save). When the line infantry is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "dT41anVs1Byhwbok",
          "name": "Clash of Steel",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The line infantry lays into each enemy in a 5-foot type:emanation, with a check (reflex, dc:21, basic, options:area-effect) save. The damage depends on the number of actions.\n1 (1d6+2)[slashing|options:area-damage] damage\n2 (2d6+7)[slashing|options:area-damage] damage\n3 (3d6+10)[slashing|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "hX2JzZ4j0RfmZTNb",
          "name": "Drilled in Formations",
          "kind": "action",
          "description": "Frequency once per round\nEffect The line infantry uses Change Formation. A line infantry unit typically knows the marching column and wedge formations.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gadgeteer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "jx5KZC2tbgJIJnOq",
      "slug": "gadgeteer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8497d2d8c606cd7e9225fbf106afd575ccf75aee7d3a823514d538c8345d9ce3",
    "translatableHash": "sha256:6f35658884e12491e1e9185356d55121d945a543d79d7a09f047450cf849ef69",
    "data": {
      "schemaVersion": 1,
      "name": "Gadgeteer",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Few are as prepared to be unprepared as a gadgeteer, who are masters at building seemingly impossible creations out of almost anything. They're always useful to have when a plan inevitably goes wrong because they can quickly craft the perfect tool needed to get out of even the stickiest predicament. Every now and again, someone tries to hire a gadgeteer to perfect a single design to replicate it and make more permanent versions of their thrown-together gadgets. This effort is often in vain, as even the most talented gadgeteers are unlikely to perfectly replicate a design they made in the moment, even with the same materials. In fact, when put on the spot, they will likely create a functional gadget differently every time, even if they have access to the same material. This process makes duplication nearly impossible.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "crafting": 16,
        "society": 12,
        "thievery": 14
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
          "id": "1JNxYujzGAMiVbIS",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "Rx0CBxxIvF7OCOhk",
          "name": "Heavy Wrench",
          "bonus": 16,
          "damage": "1d6+7 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "VBwSY5AZcxKbaemI",
          "name": "Crossbow",
          "bonus": 16,
          "damage": "1d8+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "PjEFMPtJD5xfFUVU",
          "name": "Gadget Specialist",
          "kind": "passive",
          "description": "For encounters involving crafting gadgets, the gadgeteer is a 9th-level challenge.",
          "traits": []
        },
        {
          "id": "fGxEd4o5r4hXlUtn",
          "name": "Create Gadget",
          "kind": "action",
          "description": "The gadgeteer uses their bag of junk and nearby scraps to create one of the following gadgets. Gadgets created this way fall apart after a single use or after 1 hour, whichever happens first.\n• Flash Bang 1 (manipulate) The gadgeteer throws a flash bang up to 20 feet away that explodes in a 5-foot type:burst. Creatures in the burst must succeed a check (fortitude, dc:24, options:area-effect) save or become Blinded for 1 round.\n• Glider 1 (move) The gadgeteer leaps off a precipice with the glider in their hands. They fall only 60 feet per round, and for every 10 feet they fall, they can travel 5 feet forward.\n• Makeshift Key 1 (manipulate) The gadgeteer attempts to Pick a Lock with a +4 item bonus to the check.\n• Recorder 1 (manipulate) The gadgeteer records up to 25 spoken words on this device. Activating this gadget causes it to either repeat the recorded words once before falling apart or play the message on a loop for up to 10 minutes before falling apart.\n• Shocking Rod 1 (manipulate) An adjacent creature takes 3d12 electricity damage with a check (reflex, dc:24, basic) save.",
          "traits": [
            "concentrate",
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mountain-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "mD4gjp3Yus8TXGUs",
      "slug": "mountain-guardian",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c359a2195f5cb43c10d540778e13785136faccbe17e91004f50df5259fcf970f",
    "translatableHash": "sha256:7e78857cb942119cc171ea19f60d8c0b67c86efa60ac8019bba9daba65bf4492",
    "data": {
      "schemaVersion": 1,
      "name": "Mountain Guardian",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Those who have unlocked the secrets of opening a kinetic gate to an elemental plane within themselves wield immense power over that element. Practitioners who specialize in elemental earth are hardy and defense-minded. The mountain guardian is surrounded by heavy armor made of stone held together with elemental magic.\nA primalist is a wielder of primal energies and magic, sometimes taught by forces of primal power, including powerful elementals or fey of the First World. Primalists protect the natural world, offering strong medicine to those in need while facing suspicion from those who don't understand their ways.\nA great many primalists belong to druidic circles, and even those who aren't members tend to be familiar with the most prominent ones in their homeland.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": [
          "tremorsense-imprecise-10"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 11,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 15,
        "intimidation": 13,
        "nature": 11,
        "survival": 9
      },
      "languages": [
        "common",
        "petran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "earth 6",
          "poison 6"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ZgtpOsBQwSbByvBX",
          "name": "Elemental Blast",
          "bonus": 16,
          "damage": "2d8+4 bludgeoning",
          "traits": [
            "concentrate",
            "earth",
            "impulse",
            "primal",
            "versatile-p"
          ]
        },
        {
          "id": "BdRm2YbrBJjYCdjy",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "BMYTcScxLcZJg6vb",
          "name": "Elemental Blast",
          "bonus": 16,
          "damage": "2d8 bludgeoning",
          "traits": [
            "concentrate",
            "earth",
            "impulse",
            "primal",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "HZEpXjD71c5PniJl",
          "name": "+2 to Reflex vs. Damaging Effects",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "z2fATEv95c5CeRid",
          "name": "Kinetic Aura",
          "kind": "passive",
          "description": "10 feet. Pieces of rock and earth float in the aura. The aura must be active for the guardian to use impulse actions, and deactivates if the guardian uses an overflow impulse, is knocked out, or Dismisses it. The guardian can Channel Elements to reactivate it.",
          "traits": [
            "aura",
            "earth",
            "primal"
          ]
        },
        {
          "id": "8vsZl6kXGembKqhs",
          "name": "Weight of Stone",
          "kind": "action",
          "description": "The mountain guardian calls down boulders in a cylinder 10-foot cylinder and 80 feet high within 120 feet. Each creature in the area takes 4d8 bludgeoning damage with a check (reflex, dc:24, basic, options:area-effect,forced-movement) save. A creature that fails is also pushed downward 40 feet (80 feet on a critical failure) without taking falling damage and can't leave the ground for 1 round.",
          "traits": [
            "concentrate",
            "earth",
            "impulse",
            "overflow",
            "primal"
          ]
        },
        {
          "id": "bebHn8ZDmnBLO13f",
          "name": "Base Kinesis",
          "kind": "action",
          "description": "The mountain guardian generates, moves, or suppresses up to 1 Bulk of naturally occurring earthen matter within 15 feet. Generating creates earthen matter, moving moves existing matter up to 20 feet into any direction, and suppressing destroys a piece of that element (which can't be a durable crafted good, only natural forms of the element).",
          "traits": []
        },
        {
          "id": "fAsNDMMG3uBqks6s",
          "name": "Channel Elements",
          "kind": "action",
          "description": "The mountain guardian reactivates their kinetic aura and can make an elemental blast Strike.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "qVBAufS6c7TZAqDU",
          "name": "Empowered Blast",
          "kind": "action",
          "description": "The mountain guardian makes a melee or ranged elemental blast Strike with a +4 status bonus to damage.",
          "traits": []
        },
        {
          "id": "HLSb3Hxa9yNvAbbN",
          "name": "Tremor",
          "kind": "action",
          "description": "The mountain guardian stomps on natural earth or stone, causing a localized tremor. All creatures in a 10-foot type:burst within 30 feet take 3d10 bludgeoning damage with a check (fortitude, dc:24, basic, options:area-effect,inflicts:prone) save. A creature that critically fails is knocked Prone. Earth and stone in the area is difficult terrain until the start of the mountain guardian's next turn.",
          "traits": [
            "concentrate",
            "earth",
            "impulse",
            "overflow",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:executioner",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "pHaQew7IEmk198Wz",
      "slug": "executioner",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:45e14a7905c1e9cf1a09d99ab97fdf462ebdbc81c0f8d36839f8777e53214dab",
    "translatableHash": "sha256:c8ea6602baf23e455313b049b7e99469aa15af2afa6c4e4edbf4c53d42d57a01",
    "data": {
      "schemaVersion": 1,
      "name": "Executioner",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Executioners carry out sentences from cruel tyrants and legitimate rulers alike. Most remain numb to the necessity of their duty, but some evil executioners grow to love the power of having someone else's life in their hands.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 23,
      "hitPoints": 105,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 13,
        "medicine": 10
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
          "id": "emTBNypG9xLkrGmv",
          "name": "Greataxe",
          "bonus": 16,
          "damage": "1d12+9 slashing",
          "traits": [
            "magical",
            "sweep"
          ]
        },
        {
          "id": "8m0RYHcRZ78bB73w",
          "name": "Fist",
          "bonus": 15,
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
          "id": "Q3RfoNXTp5dIw2Mx",
          "name": "Behead",
          "kind": "action",
          "description": "Requirements The executioner is adjacent to a dying creature or a creature specifically prepared for a killing blow\nEffect The executioner Strikes the creature with their greataxe. On a hit, in addition to taking damage, the target must attempt a check (fortitude, dc:23, options:inflicts:dying) save or be reduced to 0 HP and become Dying 1. If the creature was already dying (including if it was reduced to 0 HP by the Strike's damage), the creature's dying value increases by 1, in addition to any increase from the Strike. On a critical failure, the creature dies instantly. If the executioner's Strike was a critical hit, the target uses the outcome one degree of success worse than the result of their saving throw.",
          "traits": []
        },
        {
          "id": "RnJieV2KgJwl8PgM",
          "name": "Intimidating Strike",
          "kind": "action",
          "description": "The executioner makes a melee Strike. If it hits and deals damage, the target is Frightened 1, or Frightened 2 on a critical hit.",
          "traits": [
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "85x1pisleQwObtMf",
          "name": "Mark for Death",
          "kind": "action",
          "description": "The executioner marks a single creature they can see for death. The first time each round the executioner Strikes that creature, the Strike deals an extra 1d12 precision damage.\nThe creature remains marked for death until the executioner is knocked out, marks a different creature for death, or the encounter ends.",
          "traits": [
            "concentrate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:spy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "PXukrrvpLA40chXN",
      "slug": "spy",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a81d8347d0749ee1ede529fe05e14775befb10354bea4aecac95e90e1e1a401c",
    "translatableHash": "sha256:3d31cad5a7d8d561aa1644fc0020a059d7b7c6e1bfea9e962f5417b9cdf25c5b",
    "data": {
      "schemaVersion": 1,
      "name": "Spy",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Any number of nobles could be spies—a beloved confidante of the queen or even the court jester. Spies use their skills to subtly manipulate courtiers, turn enemies against one another, and collect valuable information.\nThe denizens of a noble court are the most powerful people in a civilization, primed with wealth, station, and authority above the common people.",
      "armorClass": 23,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 14,
        "deception": 16,
        "diplomacy": 14,
        "intimidation": 14,
        "society": 14,
        "stealth": 16,
        "thievery": 14
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
          "id": "0mY6UXKCPuoJcVKz",
          "name": "Rapier",
          "bonus": 17,
          "damage": "1d6+7 piercing",
          "traits": [
            "deadly-d8",
            "disarm",
            "finesse",
            "magical"
          ]
        },
        {
          "id": "gR4dKLczaBfAG1bO",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+7 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "P0tgN4S9ekiaXzvN",
          "name": "Dagger",
          "bonus": 16,
          "damage": "1d4+7 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "0sgibEk9uWvq0bX3",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+7 bludgeoning",
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
          "id": "WHOLkEuYaCAMaFl1",
          "name": "Noble's Ally",
          "kind": "passive",
          "description": "The spy has positioned themself to seem a trusted ally, gaining a +2 circumstance bonus to [[/act gather-information options=nobles-ally]] or to [[/act make-an-impression options=nobles-ally]] among the nobles of that court.",
          "traits": []
        },
        {
          "id": "uE9nqIQImKOG8Vr0",
          "name": "Hidden Blade",
          "kind": "action",
          "description": "Frequency once per round\nEffect The spy draws a weapon and then Strikes with it. The target of the strike is Off-Guard against the attack.",
          "traits": []
        },
        {
          "id": "ue4Y2G3CCizn6XEG",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The spy deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gamekeeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "RQTIsAmhiMkfcgsb",
      "slug": "gamekeeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4b6df18b8b335ab39ca270ba64ce940ea9e373f1b793ae533a56efdad0aea9d1",
    "translatableHash": "sha256:cf35d2412b597db082f764f68a462d17ec70a7d2451562c74037715e227e0ff7",
    "data": {
      "schemaVersion": 1,
      "name": "Gamekeeper",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Gamekeepers know every beast that walks, slithers, flies, or swims in their territory and where to find them; try to keep up with the pack if you think you can. The land has chosen these people as guardians, giving them mysterious powers while in their territory. They are prepared to keep balance.\nExplorers are often well-equipped and well-trained for any type of hazard and are eager to lead others into the wild.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 17,
        "reflex": 13,
        "will": 12
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 13,
        "diplomacy": 11,
        "intimidation": 13,
        "nature": 15,
        "survival": 15
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
          "id": "Ih7QDfEToepMwEar",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+9 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "QQ2wRxTrRAKl78I6",
          "name": "Club",
          "bonus": 15,
          "damage": "1d6+9 bludgeoning",
          "traits": []
        },
        {
          "id": "iR6mpiXvRooJNr8l",
          "name": "Arbalest",
          "bonus": 17,
          "damage": "1d10+6 piercing",
          "traits": [
            "backstabber",
            "magical",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZUjpZ8qa5zU67u4f",
          "name": "Keeper's Revenge",
          "kind": "passive",
          "description": "When the gamekeeper dies, all creatures in a 60-foot type:emanation that have damaged the gamekeeper in the last minute must succeed a check (will, dc:24) saving throw or be cursed. All animals the cursed creature encounters have an initial attitude toward them that is one step worse. This curse can be removed only by an effect that specifically targets curses.",
          "traits": [
            "curse",
            "primal"
          ]
        },
        {
          "id": "mnYkgDdgH982pZxa",
          "name": "Move It!",
          "kind": "passive",
          "description": "The gamekeeper can Hustle for 30 minutes longer and is not affected by difficult terrain while in their territory.",
          "traits": []
        },
        {
          "id": "40j55TPg1eH7egi1",
          "name": "Sic 'Em!",
          "kind": "reaction",
          "description": "Trigger An animal within 60 feet of the gamekeeper is killed\nEffect The gamekeeper stokes the ire of the wild. Until the end of the gamekeeper's next turn, they and all animals in a 60-foot type:emanation gain a +1 status bonus to attack rolls and a +2 status bonus to damage rolls.\nEffect: Sic 'Em!",
          "traits": [
            "auditory",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "fIusYGjNJuL9pseZ",
          "name": "Leader of the Pack",
          "kind": "passive",
          "description": "The gamekeeper depends on a small pack of dogs or other pack animals suitable for the environment to patrol their area. Creatures that are adjacent to a hostile animal are considered Off-Guard to the gamekeeper.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:rocketeer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "SHQHNG2o1T172Qm4",
      "slug": "rocketeer",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:946661161c0741281817d0c31137dda988b2831e1c6a65dc56677e202990252f",
    "translatableHash": "sha256:2364ecb84c454f2c2061d6e490b22153c4b4ed25784273cb0c771527fa8b9ed3",
    "data": {
      "schemaVersion": 1,
      "name": "Rocketeer",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "It takes a very specific personality to strap on a tank filled with a highly flammable alchemical substance and set it afire to launch oneself into the sky, so it is perhaps unsurprising that most rocketeers are reckless and bombastic individuals who delight in the theatrics inherent in their craft. While the unpredictability of rocketeering devices and the high casualty rate among those who use them make such devices generally unsuitable for military applications, a few courageous souls have used them to become dashing folk heroes or performing daredevils, many of whose most memorable performances culminate in their own dramatic demises.\nAlthough relatively uncommon across much of Golarion, the frequently eccentric but undeniably brilliant minds who create elaborate devices of clockwork, gunpowder, and steam often loom much larger in the public eye than their numbers would suggest.",
      "armorClass": 23,
      "hitPoints": 85,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 12,
        "reflex": 16,
        "will": 14
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "crafting": 14,
        "performance": 12
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
          "id": "lnYX8kYZIlB2k6SV",
          "name": "Heavy Wrench",
          "bonus": 14,
          "damage": "1d6+8 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "LQbj4uc9my6VXYyp",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "q5q4xeRI9oCnNxNH",
          "name": "Slide Pistol",
          "bonus": 17,
          "damage": "1d6+6 piercing",
          "traits": [
            "capacity-5",
            "concussive",
            "fatal-d10",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "w2Qns4pyBHyweSJt",
          "name": "Fuel Tank Vulnerability",
          "kind": "passive",
          "description": "When the rocketeer is struck by a critical hit that deals piercing or fire damage, they must attempt a check (flat, dc:5). On a failure, the rocketeer's fuel tank explodes, dealing 6d6 fire damage to the rocketeer and all creatures in a 20-foot type:emanation and knocking the rocketeer Prone. The rocketeer loses their fly Speed and can't use Explosive Liftoff, Mid-air Collision, or Rocketing Strafe until they repair their jet pack, which requires an appropriate set of artisan's tools and takes 2 hours.",
          "traits": []
        },
        {
          "id": "IAb9MKH3eOSfwzhu",
          "name": "Explosive Liftoff",
          "kind": "action",
          "description": "Frequency once per 10 minutes\nRequirements The rocketeer is standing on a horizontal surface\nEffect The rocketeer unleashes the full strength of their jets to launch themself into the air, dealing 7d6 fire damage|options:area-damage] damage to all creatures in a 15-foot type:emanation with a check (reflex, dc:24, basic, options:area-effect) save. The rocketeer Flies twice, straight up into the air.",
          "traits": []
        },
        {
          "id": "vRAaJhxbnqU4B6ba",
          "name": "Mid-air Collision",
          "kind": "action",
          "description": "The rocketeer Flies twice, then attempts to [[/act trip options=mid-air-collision]] or [[/act shove options=mid-air-collision]] another flying creature. If they roll a success on the Athletics check, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "dckyXWp7Kf2iQEKe",
          "name": "Rocketing Strafe",
          "kind": "action",
          "description": "The rocketeer Flies and makes two melee Strikes at any point during that movement. Each Strike must target a different creature. The rocketeer can forgo the melee Strikes to instead make one slide pistol Strike at any point during that movement and Interact to select the next loaded chamber of their slide pistol; they can do these in either order. Any Strike made as part of a Rocketing Strafe deals an additional 2d6 damage and takes the normal multiple attack penalty.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:warden",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "UcyRCjAUf7mijca0",
      "slug": "warden",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3703a835416881c3eff46a8f1703444a8c3e9688d659894e2fd6e03b53ef03d6",
    "translatableHash": "sha256:2b922a769eb1c0e7167620fe6ef87d0544a64f8da3fab6f3a9d76e013e5f9997",
    "data": {
      "schemaVersion": 1,
      "name": "Warden",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Wardens are the chief guardians of borders and frontiers. Whether standing watch over a single village or an entire region, wardens keep a vigilant eye out for threats to their charges. Wardens are stalwart folk, often called to duty by Erastil to protect those around them. Be it times of war or along the frontier, wardens are often the balanced edge of a blade between a community and the wilds at its fringes.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
        "senses": []
      },
      "saves": {
        "fortitude": 15,
        "reflex": 15,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 15,
        "nature": 11,
        "stealth": 13,
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
          "id": "tYBrwLh84hOMoQb4",
          "name": "Bastard Sword",
          "bonus": 16,
          "damage": "1d8+10 slashing",
          "traits": [
            "two-hand-d12"
          ]
        },
        {
          "id": "uJs1qklFIzBJxA4T",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+10 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "28SnHCyal79ByXz4",
          "name": "Composite Longbow",
          "bonus": 17,
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
          "id": "vtgkJ23YrCFVTyTP",
          "name": "Warding Strike",
          "kind": "reaction",
          "description": "Trigger One of the warden's enemies within 100 feet attacks one of the warden's allies or a person the warden is sworn to protect\nEffect The warden Strikes the triggering enemy. If the Strike hits, the enemy's attack is deflected, reducing its damage by 8, or by 16 if the warden's Strike was a critical hit.",
          "traits": []
        },
        {
          "id": "22gFqjuhKcKMgJKN",
          "name": "Warden's Protection",
          "kind": "passive",
          "description": "A warden deals an extra 1d8 damage to any creature trespassing on the territory the warden protects.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:ocean-nomad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "UTDcZPzjM6D26MZK",
      "slug": "ocean-nomad",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:49fad8100b44bc6b30f619e379b95a795eda05fa510ff3622958e5d0cf1f56c3",
    "translatableHash": "sha256:2b9dcfd5ca4f10cd0495109451ede0e879278f2e2ef207bbe874ed0d90286f62",
    "data": {
      "schemaVersion": 1,
      "name": "Ocean Nomad",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Adventurers may need passage on a swift vessel, or they might face danger from raiders at sea or in coastal settlements.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 15,
        "nature": 10,
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
          "id": "UWzndrWnhGl9AKQN",
          "name": "Trident",
          "bonus": 17,
          "damage": "1d8+10 piercing",
          "traits": []
        },
        {
          "id": "juweMaD44CxoMm6y",
          "name": "Trident",
          "bonus": 17,
          "damage": "1d8+10 piercing",
          "traits": [
            "thrown-20"
          ]
        },
        {
          "id": "sKiicqKAcGl0vRyf",
          "name": "Fist",
          "bonus": 16,
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
          "id": "AyYpXg40iFtAPUbN",
          "name": "Master Sailor",
          "kind": "passive",
          "description": "Any watercraft the ocean nomad pilots gains a +10-foot circumstance bonus to its Speed and reduces the minimum distance it must move to turn by half. An ocean nomad ignores difficult terrain or uneven ground from a ship's motion.",
          "traits": []
        },
        {
          "id": "fRHQeFHktoqB5nDG",
          "name": "Practiced Swimmer",
          "kind": "passive",
          "description": "When the ocean nomad rolls a success on an Athletics check to [[/act swim]], they get a critical success instead.",
          "traits": []
        },
        {
          "id": "RAdehvlJ7VN9XCvD",
          "name": "Strong Lungs",
          "kind": "passive",
          "description": "The ocean nomad can hold their breath for up to 10 minutes (100 rounds).",
          "traits": []
        },
        {
          "id": "fqJ1prMOusZdiKlm",
          "name": "Tidal Pressure",
          "kind": "reaction",
          "description": "Trigger An adjacent creature attempts an Athletics check to Swim\nEffect The ocean nomad chooses to either prop the swimmer up or yanks them down into the depths. Increase or decrease the result of the Athletics check by one step. If the ocean nomad chooses to decrease the result, the creature can attempt a check (fortitude, dc:24) save to negate the effect.",
          "traits": [
            "water"
          ]
        },
        {
          "id": "Epuaahg9qkvoUAXW",
          "name": "Stab and Twist",
          "kind": "action",
          "description": "Requirements The ocean nomad's last action was a successful melee trident Strike\nEffect The ocean nomad wrenches out the barbed tines of their trident, inflicting 1d6 persistent bleed damage to the target.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gnome-conservationist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "V2wfIJdGvD4mQ1pU",
      "slug": "gnome-conservationist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc6e4cc9917c90b12831c6592526228061178c0c1de163aef13f1f86188ce0aa",
    "translatableHash": "sha256:8ca9457613f3bc46ee295e99ddeb21a132af2135d60c1006fd12a06ca81714de",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Conservationist",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "gnome",
        "humanoid"
      ],
      "description": "The natural world boasts unsurpassed beauty and countless variety, and the gnome conservationist is devoted to experiencing and protecting as many examples of this grandeur as they possibly can. These gnomes are stalwart allies to animals and plants, and they find it exceptionally easy to build an outstanding rapport with almost all creatures they encounter on their travels.\nBecause their ancestors came from the First World, gnomes are intrinsically linked to the realm of the fey and crave the mystical and unpredictable. They seek to create daring works of art, voyage to new places, and have experiences they've never had before. Otherwise, they could fall victim to the terrible gnomish illness known as the Bleaching, which not only drains them of their color but of their spirits as well.",
      "armorClass": 23,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 17,
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
        "str": 2,
        "dex": 1,
        "con": 1,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "athletics": 13,
        "crafting": 11,
        "nature": 15,
        "survival": 15
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
          "id": "AeQbL1shMVjFTbuY",
          "name": "Trowel",
          "bonus": 14,
          "damage": "1d4+8 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "iUmgDIi5w2pa9pQA",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d4+8 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "UBZa1MzQgRNCXqzx",
          "name": "Sling",
          "bonus": 16,
          "damage": "1d6+7 bludgeoning",
          "traits": [
            "magical",
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "oRqAdJMlwfOdiI4J",
          "name": "Animal Elocutionist",
          "kind": "passive",
          "description": "The conservationist can ask questions of, receive answers from, and use the Diplomacy skill with animals.",
          "traits": []
        },
        {
          "id": "wVyWfOGdi8lS6LEn",
          "name": "Wild Leadership",
          "kind": "action",
          "description": "With a primal incantation, the gnome conservationist inspires a willing animal. The animal becomes Quickened for 1 round. It can use this additional action only to Climb, Burrow, Fly, Stride, or Strike.",
          "traits": [
            "auditory",
            "concentrate",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "qzrw406EcyTZ7CAT",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 17,
          "saveDc": 24,
          "spells": [
            {
              "id": "idWfNsHaC8bqDELK",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "uKGUia7yucYzd5jK",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "dCCMyP6BHS5LOrMf",
              "name": "Gentle Landing",
              "rank": 1
            },
            {
              "id": "J3EwYBAiP0CsnTyo",
              "name": "Gouging Claw",
              "rank": 1
            },
            {
              "id": "r9ndk6eHWhkPz06T",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "ajdr3I47lSRc2l0D",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "JORO3FRqyZu2j0Ws",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "L4bq7Penr82gHtAE",
              "name": "Runic Body",
              "rank": 1
            },
            {
              "id": "p7CDxE5Myf0vgnet",
              "name": "Spider Sting",
              "rank": 1
            },
            {
              "id": "V6NgSa26e0LsTVrZ",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "GWcGg8SEgNmYrGTH",
              "name": "Animal Messenger",
              "rank": 2
            },
            {
              "id": "15RwvDJJ20cAVz0d",
              "name": "Darkvision",
              "rank": 2
            },
            {
              "id": "dtBiTebLvWF1Hid0",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "KpWY09YpnrdUjfRE",
              "name": "Oaken Resilience",
              "rank": 2
            },
            {
              "id": "htd9ZcVbeN1GDNdb",
              "name": "Mad Monkeys",
              "rank": 3
            },
            {
              "id": "or1ABArvgW22C0Xl",
              "name": "Safe Passage",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:captain-of-the-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "vEdg4AXGWfet1Cgy",
      "slug": "captain-of-the-guard",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c383dcc21089dd4a2f6bb189ec824878b90ac9b9fd75fcba3e22f077311e9f39",
    "translatableHash": "sha256:77d4e0c804cbf751858cc9dc7e71e337c3435139fdea3a953d8bccb6eb397a76",
    "data": {
      "schemaVersion": 1,
      "name": "Captain Of The Guard",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "The captain of the guard leads a troop of soldiers who serve as security forces for a powerful individual, most often a high-ranking noble or very rich merchant, though this stat block could also represent a lowerranking captain of the guard for the leader of a nation. A formidable opponent in their own right, the captain of the guard skillfully employs their troops to protect the life and health of their ward.\nLarger societies rely on those with the authority and the ability to interpret and enforce laws. Some carry out these duties fairly, but others are harsh and cruel, imposing severe punishments on anyone unable to pay for clemency.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 14,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 3
      },
      "skills": {
        "athletics": 15,
        "diplomacy": 11,
        "intimidation": 13,
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
          "id": "J0gZtGInMyuCyCuB",
          "name": "Longsword",
          "bonus": 18,
          "damage": "1d8+11 slashing",
          "traits": [
            "magical",
            "versatile-p"
          ]
        },
        {
          "id": "9TZH3pAbS5oTyrsx",
          "name": "Fist",
          "bonus": 17,
          "damage": "1d4+11 bludgeoning",
          "traits": [
            "agile",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "3k43BvFaLIDzoL5a",
          "name": "Crossbow",
          "bonus": 12,
          "damage": "1d8+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "T7oZcH7OKDm1O4cw",
          "name": "Aura of Command",
          "kind": "passive",
          "description": "30 feet. The captain of the guard bolsters lower-level guards under their command, granting them a +1 status bonus to their attack rolls and a +2 status bonus to their Will saves.\nEffect: Under Command\nEffect: Aura of Command",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "HXCEPfKkb2TP6NVy",
          "name": "Bravery",
          "kind": "passive",
          "description": "When the captain of the guard rolls a success on a Will save against a fear effect, they get a critical success instead. In addition, any time they gain the Frightened condition, reduce its value by 1.",
          "traits": []
        },
        {
          "id": "xhPxc3RAH6O3eaBL",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "YwrQgUMRREzx7e1i",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "9hxxkHZZGdkhbZvg",
          "name": "Shield Warden",
          "kind": "passive",
          "description": "When the captain has their shield raised, they can Shield Block when an attack is made against an adjacent ally. If they do, the shield prevents that ally from taking damage instead of the captain.",
          "traits": []
        },
        {
          "id": "drNAUPLqWo7QSh3l",
          "name": "Shielded Advance",
          "kind": "action",
          "description": "Requirements The captain of the guard has their shield raised\nEffect The captain of the guard presses forward, using their shield to push back foes. The captain Strides and [[/act shove]], in either order. The multiple attack penalty doesn't apply to this Shove, though the Shove does count toward the captain's multiple attack penalty.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:phalanx-formation",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "VpWPOE31dJc6vOsB",
      "slug": "phalanx-formation",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:987742744495f7caba66e932ef45432e134fa0ba538299c055102dcacf0c67a3",
    "translatableHash": "sha256:0294208a0ec040684f53edc484b0d49ee30b9e469caadc09da3b3bc92b225ce5",
    "data": {
      "schemaVersion": 1,
      "name": "Phalanx Formation",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "human",
        "humanoid",
        "troop"
      ],
      "description": "A proper phalanx formation requires the simultaneous use of spear and shield in order to attack enemies near and far while defending each other. Impressive amounts of teamwork are not only beneficial but essential to the survival of the troop\nA military serves to defend and fight on behalf of nations and can be trained and deployed in various ways.",
      "armorClass": 23,
      "hitPoints": 99,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 17,
        "intimidation": 14
      },
      "languages": [
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
          "id": "zFF0o2Atwb8aKra7",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 66 (3 segments), 33 (2 segments)",
          "traits": []
        },
        {
          "id": "qoiaUhxU4SjQ6PfN",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "AmPtA9dgeeJH41nu",
          "name": "Hurl Javelins",
          "kind": "action",
          "description": "The troop's members throw a volley of spears. Each creature in a 10-foot type:burst within 30 feet of the troop takes (2d6+5)[piercing|options:area-damage] damage with a check (reflex, dc:21, basic, options:area-effect) save. When the phalanx formation is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "Z4cFBG25p2j5acgR",
          "name": "Shields Up!",
          "kind": "action",
          "description": "The phalanx formation raises their shields to protect one another. The formation gains a +2 circumstance bonus to AC and Reflex until the start of their next turn. This bonus increases to +3 against physical ranged attacks.",
          "traits": []
        },
        {
          "id": "8hhbtRmUrKfrln1a",
          "name": "Spears Out!",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The phalanx formation thrusts their longspears out in all directions, striking all unfortunate enough to be near them. Each enemy in a 10-foot type:emanation must attempt a check (reflex, dc:21, basic, options:area-effect) save.\nThe damage depends on the number of actions.\n1 (1d8+2)[piercing|options:area-damage] damage\n2 (2d8+5)[piercing|options:area-damage] damage\n3 (3d8+5)[piercing|options:area-damage] damage",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:legbreaker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "WzBMIigC3lfvZyhJ",
      "slug": "legbreaker",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7179503eff41099c45255745120203a27a3c153f86468ee160d7e0ec2a19aa09",
    "translatableHash": "sha256:73509777789816d4ed0b9b29679f62ee1eeebaa682d02ef21b654cf253808718",
    "data": {
      "schemaVersion": 1,
      "name": "Legbreaker",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Criminal organizations are always happy to loan out money at exorbitant rates, and their legbreakers are always happy to collect.\nIn the underbelly of society, the lawless reign supreme.",
      "armorClass": 23,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": []
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
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dXznel7vuVPWhsQn",
          "name": "Maul",
          "bonus": 17,
          "damage": "1d10+10 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "WMD2iZZH3jNfGTgC",
          "name": "Fist",
          "bonus": 16,
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
          "description": "The legbreaker makes a maul Strike against an adjacent creature. If it hits, the creature is knocked Prone and becomes Clumsy 1 for 1 minute. As long as this clumsy condition lasts, the creature also takes a –5-foot penalty to its Speeds and has weakness 5 to the legbreaker's Strikes.\nEffect: Break Legs!",
          "traits": []
        },
        {
          "id": "u3p3LeRECuD5PFwU",
          "name": "Rushing Strike",
          "kind": "action",
          "description": "The legbreaker Strides twice. If they end their movement within melee reach of an enemy, they can make a melee Strike against that enemy.",
          "traits": []
        },
        {
          "id": "0gE6l2oSZZRPjEyT",
          "name": "Stampeding Shove",
          "kind": "action",
          "description": "The legbreaker [[/act shove options=stampeding-shove]] a creature, gaining a +2 circumstance bonus to their Athletics check if the target is Prone. If the Shove succeeds, the target takes 2d10 bludgeoning damage (double damage on a critical success).",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:dwarf-battalion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "xnHaTClGCleGFoLP",
      "slug": "dwarf-battalion",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:51f1c3daa1d405109c5a2970675d1e678c3f0afcaf8e9977cf16f37a5136ff70",
    "translatableHash": "sha256:fdbee293b02b54db829eba64179c39aff955cb7798a09e93b1b943193cf7abd2",
    "data": {
      "schemaVersion": 1,
      "name": "Dwarf Battalion",
      "level": 6,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "dwarf",
        "humanoid",
        "troop"
      ],
      "description": "Dwarven soldiers make formidable units, capable of holding their own against most enemies. In combat, a dwarf battalion is a well-oiled machine, unleashing coordinated attacks against foes.\nFrom the dwarven perspective, most things in life are best done correctly, and that means taking one's time. Dwarves are a focused and intentional people, taking years or even decades to ply their trades, doing their best to make every detail perfect. The patience and dedication required for such tasks pays off, and many dwarves become experts in their respective field, trade, or area of focus. Many dwarves uphold traditions, and since dwarven origins trace back to underground life, many still hone skills focused on life underground.",
      "armorClass": 22,
      "hitPoints": 105,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 15,
        "survival": 13
      },
      "languages": [
        "common",
        "dwarven"
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
          "id": "T6b3Bxelknz5jLLD",
          "name": "Dwarven Doughtiness",
          "kind": "passive",
          "description": "Dwarves are often calm and collected in the face of imminent danger. At the end of the battalion's turn, reduce its Frightened condition by 2 instead of 1.",
          "traits": []
        },
        {
          "id": "28kKwAmqOvF2gKQM",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "cLjl1raI396dieHc",
          "name": "Shield Block",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "AaRy3AVixeUqrlb0",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 70 (3 segments), 35 (2 segments)",
          "traits": []
        },
        {
          "id": "kzbXoimojz0hgVKs",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "HK3El8JaNgkSuAIQ",
          "name": "Bombing Barrage",
          "kind": "action",
          "description": "The dwarf battalion draws alchemical bombs, then hurls them at distant foes. This volley is a 10-foot type:burst within 60 feet that deals 3d6 effect value damage with a check (reflex, dc:21, basic, options:area-effect) save. The damage is either acid, fire, or electricity damage, depending on which type of bombs the battalion used. When the dwarf battalion is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": []
        },
        {
          "id": "ajOvxZZwNfyldDXc",
          "name": "Coordinated Pummel",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The dwarf battalion unleashes a storm of warhammer blows against each enemy in a 5-foot type:emanation (check (reflex, dc:21, basic, options:area-effect) save). The damage depends on the number of actions.\n1 1d8 bludgeoning damage\n2 (2d8+5)[bludgeoning|options:area-damage] damage\n3 (3d8+5)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "9eLEaLdSVPXS10q4",
          "name": "Dwarven War Song",
          "kind": "action",
          "description": "The battalion joins together to sing a traditional song of battle. Each enemy in a 30-foot type:emanation must succeed at a check (will, dc:23, options:inflicts:frightened) save or be Frightened 1 (or Frightened 2 on a critical failure). Each enemy is then temporarily immune for 10 minutes.",
          "traits": [
            "auditory",
            "concentrate",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "z17MMNf9Z1J6nJKp",
          "name": "Shields Up!",
          "kind": "reaction",
          "description": "The battalion raises their steel shields. It gains a +2 circumstance bonus to AC and Reflex saves until the start of its next turn.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tengu-bladesmith",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "YBNskadw9c8n1E21",
      "slug": "tengu-bladesmith",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:be00d91042f0ea009a87060df73ec5dcafe75d2836ac06de8c96a3a92c4906ef",
    "translatableHash": "sha256:765eae01ea270cdb6de4f251f97ac6e79a28fa50e3ce9008ab597576b1741ecc",
    "data": {
      "schemaVersion": 1,
      "name": "Tengu Bladesmith",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "tengu"
      ],
      "description": "With the tengu diaspora spreading across much of Golarion, their knowledge and tradition of blade crafting has been passed through the generations to those who show interest and aptitude. Many tengu bladesmiths have experience as warriors; others learn their sword craft to improve their knowledge and understanding of the weapons they produce.\nOriginally hailing from the continent of Tian Xia, tengu have spread across the globe. Though some staunchly uphold traditions, gazing at the sky from the tallest mountaintops, other tengu remain on the ground, adapting and blending into the societies in which they settle.",
      "armorClass": 24,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 16,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 16,
        "crafting": 16,
        "deception": 14,
        "intimidation": 16
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
          "id": "jIRyzpa65dOnqA9T",
          "name": "Cold Iron Wakizashi",
          "bonus": 15,
          "damage": "1d4+7 slashing",
          "traits": [
            "agile",
            "cold-iron",
            "deadly-d8",
            "versatile-p"
          ]
        },
        {
          "id": "xDi4CaD3QS1Erzc2",
          "name": "Katana",
          "bonus": 17,
          "damage": "1d6+7 slashing; 1d4 bleed",
          "traits": [
            "deadly-d8",
            "magical",
            "two-hand-d10",
            "versatile-p"
          ]
        },
        {
          "id": "0CE4ny72Tnai6nN9",
          "name": "Beak",
          "bonus": 15,
          "damage": "1d6+7 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "zEydcQi8EQL0kJOl",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "AO1PwYAxRUtQbDo7",
          "name": "Feinting Failure",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The tengu bladesmith's previous action this turn was a Strike that failed or critically failed\nEffect The tengu bladesmith Strikes the same target, who is Off-Guard against this attack. On a hit, the bladesmith deals 1d6 additional precision damage.",
          "traits": []
        },
        {
          "id": "BYGJVc968SkiMPhL",
          "name": "Swirling Blade",
          "kind": "action",
          "description": "The tengu bladesmith Interacts to draw a weapon in the sword group, then attempts to [[/act disarm]] a weapon held by a foe within reach. The weapon the tengu bladesmith draws gains the disarm trait for this attempt.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:big-boss-goblin",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "yr7kC9piMmRKrSop",
      "slug": "big-boss-goblin",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f8aa47d733a043f3ad1d0d984a7b2287ba56461c0fe71e582e17e5003eac3e17",
    "translatableHash": "sha256:3110d45952fac30fc6df1423585125b36998e151e462d1f32da37037844f2df4",
    "data": {
      "schemaVersion": 1,
      "name": "Big Boss Goblin",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "goblin",
        "humanoid"
      ],
      "description": "Big boss goblins order members of their band around and deal with any longshanks they come across—sometimes via violence or diplomacy, and sometimes by ordering another goblin to deal with them (in ways that the big boss goblin approves of if they work or claims were awful ideas they never would have tried if they don't). These goblin leaders often insist on impressive titles or sobriquets like \"The Exceedingly Incendiary,\" \"Snake Singer,\" or \"Most Gluttonest,\" though these can often be exaggerated by several degrees for dramatic effect or even change at the big boss goblin's whim (often to one-up a rival).\nGoblins can be found across Golarion, sometimes threatening taller humanoids (whom they refer to as \"longshanks\") and sometimes redeeming harmful history by working alongside others.",
      "armorClass": 22,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 11,
        "will": 14
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 3,
        "int": 1,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "athletics": 15,
        "diplomacy": 13,
        "intimidation": 15,
        "stealth": 11
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
          "id": "TKoAcYfDAReXgrD7",
          "name": "Horsechopper",
          "bonus": 17,
          "damage": "1d8+5 slashing",
          "traits": [
            "magical",
            "reach-10",
            "trip",
            "versatile-p"
          ]
        },
        {
          "id": "RJM8dbxrYDKK267n",
          "name": "Jaws",
          "bonus": 15,
          "damage": "1d6+5 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "nAmyiEazwAKBU6Mc",
          "name": "Shortbow",
          "bonus": 14,
          "damage": "1d6+2 piercing",
          "traits": [
            "deadly-d10",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "TgAafWHSGZBCMhwb",
          "name": "Not Me!",
          "kind": "reaction",
          "description": "Trigger The big boss goblin is targeted with an attack, and a goblin is adjacent to them\nEffect The big boss goblin yanks the goblin in front of the attack to face the consequences in their stead. The big boss goblin gains a +2 circumstance bonus to their AC against the triggering attack. If it hits, the big boss goblin takes half damage, and the other goblin takes the remaining half.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "uQZpuQwUBNr5MlG7",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "NUWCrk36qJzeNAuW",
          "name": "No Fight Fair",
          "kind": "passive",
          "description": "A big boss goblin fights dirty, slashing at a foe's hamstrings. Whenever the big boss goblin hits an Off-Guard foe, the creature takes a –5-foot status penalty to its speed (–10-foot on a critical hit) until the creature regains any amount of Hit Points. As with all penalties to Speed, this can't reduce a creature's Speed below 5 feet.\nEffect: No Fight Fair",
          "traits": []
        },
        {
          "id": "UXTu6H3vuKZK9TRt",
          "name": "Stab it! Stab it! Stab it!",
          "kind": "action",
          "description": "The big boss goblin picks a target they can see within 30 feet and orders any allied goblins to attack. A single goblin with a lower level than the big boss goblin that is adjacent to the target can immediately use their reaction to Strike the target. In addition, until the start of the big boss goblin's next turn, their attacks against that target deal 1 additional damage dice as the big boss goblin leads them.\nEffect: Stab it! Stab it! Stab it!",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:reckless-scientist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "zqesJ7AlPM39Qqcw",
      "slug": "reckless-scientist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c183bfe51755605d8989a736b8f4db2863db3d65b31e68807146bc62dad371a9",
    "translatableHash": "sha256:ab795257e591503715aa887001ba897cb9ae65351259ed831ff23fd48e84f239",
    "data": {
      "schemaVersion": 1,
      "name": "Reckless Scientist",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "It's the reckless scientist's job to break the rules of reality, no matter the cost.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 23,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 4,
        "int": 4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 12,
        "crafting": 16,
        "deception": 9,
        "medicine": 10,
        "stealth": 14
      },
      "languages": [
        "common"
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
          "id": "cviTvCcO5isNFaU7",
          "name": "Sickle",
          "bonus": 17,
          "damage": "1d4+7 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "trip"
          ]
        },
        {
          "id": "LHKrI2drE35rhFEs",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d4+7 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "9vmB4BnE4F94fvr0",
          "name": "Alchemical Grenade",
          "bonus": 16,
          "damage": "2 untyped; 2 untyped; 2d6 untyped",
          "traits": [
            "splash"
          ]
        }
      ],
      "actions": [
        {
          "id": "E00krW5owLvGqBHn",
          "name": "Unstable Collection",
          "kind": "passive",
          "description": "A reckless scientist carries a collection of poorly stowed alchemical items: 3 elixirs of life and 6 alchemical grenades. The scientist replenishes these items each day using scavenged materials. The alchemical grenades deal either acid, cold, or fire damage plus 2 persistent damage and 2 splash damage of the same type (typically the collection contains two of each grenade).",
          "traits": []
        },
        {
          "id": "x8s1JWo1Jcm4elFK",
          "name": "+1 Status to All Saves vs. Poison",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "LMckIZmrAQt7HWW3",
          "name": "Unstable Explosion",
          "kind": "passive",
          "description": "When an attacker scores a critical hit against the reckless scientist, one of the scientist's alchemical items bursts. The GM determines the item randomly. If it was a bomb, the alchemist takes damage from the bomb, and any creature adjacent to the alchemist takes the splash damage. Any other item is wasted.",
          "traits": []
        },
        {
          "id": "d9TOZvyquMo6o18K",
          "name": "Quick Grenadier",
          "kind": "action",
          "description": "The reckless scientist Interacts to draw an alchemical grenade with an Interact action and throws it as a ranged Strike.",
          "traits": []
        },
        {
          "id": "ziPz3z2a6Db63N9r",
          "name": "Reckless Alchemy",
          "kind": "action",
          "description": "The reckless scientist attempts to combine two alchemical grenades or two elixirs of life into one item. They can Interact to draw the items if necessary. They attempt a check (crafting, dc:22) check, destroying both component items to create one new item.\nSuccess The new item has the full effect of both component items, and the reckless scientist can Activate it. If they don't Activate it before the end of their turn, the item explodes (as critical failure).\nFailure The new item is inert.\nCritical Failure The unstable item explodes, dealing 3d6 piercing damage to the reckless scientist.",
          "traits": [
            "concentrate",
            "manipulate"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:mixed-martial-artist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "2hBS767YPGZwXeiP",
      "slug": "mixed-martial-artist",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:febda1696f04c4d7142fb2a2594bc436e548f372cbed8f3455e36ba1c81e93fd",
    "translatableHash": "sha256:38053db6b0566c5fe62979c4c26f6b5c8b41744f8b07a6c478f4ba474b333b9c",
    "data": {
      "schemaVersion": 1,
      "name": "Mixed Martial Artist",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "These fighters combine the takedowns of a wrestler with aggressive stances and unorthodox blows, ensuring that contenders won't know what hit them.\nMartial artists strive to master the art of hand-to-hand fighting.",
      "armorClass": 24,
      "hitPoints": 130,
      "speedFeet": 35,
      "perception": {
        "modifier": 15,
        "senses": []
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 17
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
          "id": "D7smmciyWo1lXrqP",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d8+6 bludgeoning",
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
          "id": "kANvoQt5YyS0b5z3",
          "name": "Powerful Fists",
          "kind": "passive",
          "description": "The mixed martial artist's fist Strikes don't take penalties when making lethal attacks.",
          "traits": []
        },
        {
          "id": "wOQjx80hxdIebHPz",
          "name": "Stance Shift",
          "kind": "action",
          "description": "The mixed martial artist enters a stance of their choice, gaining the listed circumstance bonus and Strike but losing the ability to make other Strikes.\n• Elbow Knockout Stance +2 to Athletics checks to [[/act shove]] or [[/act trip]]; Melee 1 cross elbow +16 (nonlethal, trip, unarmed) Damage 2d6+8 bludgeoning\n• Secure Grapple Stance +2 to Athletics checks to [[/act grapple]]; Melee 1 grappling limb +16 (grapple, nonlethal, unarmed) Damage 2d4+8 bludgeoning\n• Thrashing Barrage Stance +2 to damage against Off-Guard opponents; Melee 1 thrashing fist +16 (forceful, nonlethal, unarmed) Damage 2d8+8 bludgeoning",
          "traits": [
            "stance"
          ]
        },
        {
          "id": "sc9JhTai8KCOcOWy",
          "name": "Takedown Fluidity",
          "kind": "reaction",
          "description": "Trigger The mixed martial artist's last action was a successful Grapple, Shove, or Trip.\nEffect The mixed martial artist uses Stance Shift.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:halfling-yarnspinner",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "9EzCOBw3rMsyfr5Q",
      "slug": "halfling-yarnspinner",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a7389a7a708fd587a767adb61dc0c51aba00cc3fdb62a8348885b393fba8e0d",
    "translatableHash": "sha256:526b1b93bf7644dac3e12cf17da1df711371c36b655b293739a57765d36da2d8",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Yarnspinner",
      "level": 7,
      "rarity": "common",
      "size": "small",
      "traits": [
        "halfling",
        "humanoid"
      ],
      "description": "Yarnspinners weave captivating tales that entertain, educate, and preserve the rich heritage of the halfling people across generations.\nHalflings thrive on simple pleasures—having a pint at the pub or warming their feet by the hearth.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 15,
        "will": 18
      },
      "abilities": {
        "str": -1,
        "dex": 4,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "arcana": 16,
        "deception": 16,
        "diplomacy": 16,
        "intimidation": 14,
        "occultism": 17,
        "performance": 19,
        "religion": 15,
        "society": 15
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
          "id": "j2P95efbrgCVUIXt",
          "name": "Shortsword",
          "bonus": 16,
          "damage": "1d6+3 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "qTJjqZQCHmflRtgY",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "onTPM7z5PRs6b9q6",
          "name": "Halfling Sling Staff",
          "bonus": 16,
          "damage": "1d10+3 bludgeoning",
          "traits": [
            "magical",
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "1ybGVGiiZvKRpwj6",
          "name": "Keen Eyes",
          "kind": "passive",
          "description": "The halfling gains a +2 circumstance bonus when using the Seek action to find Hidden or Undetected creatures within 30 feet of them. Whenever the halfling targets a creature that is Concealed or hidden from them, reduce the DC of the flat check to check (flat, dc:3) for a concealed target or check (flat, dc:9) for a hidden one.",
          "traits": []
        },
        {
          "id": "IQNTWspsqaGDIDRb",
          "name": "Tale Specialist",
          "kind": "passive",
          "description": "For encounters involving storytelling, local history, or lore, the yarnspinner is a 10th-level challenge.",
          "traits": []
        },
        {
          "id": "7r5gV2gIAB62lc4v",
          "name": "Guidance Through Tales",
          "kind": "reaction",
          "description": "Trigger An ally the yarnspinner can see fails a skill check\nEffect The yarnspinner offers a brief reminder about a legendary hero, granting their ally a +2 circumstance bonus to the triggering skill check, potentially turning the failure into a success.",
          "traits": [
            "auditory",
            "concentrate",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "1lH0btC4rnVMf7RA",
          "name": "Mesmerizing Tale",
          "kind": "action",
          "description": "The yarnspinner weaves a long-winded but captivating narrative that enchants those nearby. Any creature that's in a 20-foot type:emanation or starts its turn in the aura must attempt a check (will, dc:24) save. The Mesmerizing Tale lasts until the end of the yarnspinner's next turn, but can be Sustained. The first time the yarnspinner Sustains the aura on subsequent rounds, the aura expands by 10 feet, to a maximum of 60 feet.\nCritical Success The creature is unaffected, and is temporarily immune for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature becomes Fascinated with the yarnspinner until the start of its next turn, and must spend all its actions to move closer to the yarnspinner and listen to the tale.",
          "traits": [
            "auditory",
            "aura",
            "incapacitation",
            "linguistic",
            "mental",
            "occult"
          ]
        },
        {
          "id": "uZGRPTmda1grN4Gf",
          "name": "Resonant Weapons",
          "kind": "passive",
          "description": "If the yarnspinner's Mesmerizing Tale aura is active or they have cast a spell within the last round, their Strikes with magic weapons deal an additional 2d10 sonic damage.",
          "traits": [
            "occult",
            "sonic"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "HWKqS2hb8WK0TBCm",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 18,
          "saveDc": 26,
          "spells": [
            {
              "id": "xnKfOYA6SBHecHtW",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "6jF3aOFcbsmDr0pN",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "16BinSB7LL3jCMb6",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "8jST2uP7iBH2sJwZ",
              "name": "Illusory Disguise",
              "rank": 1
            },
            {
              "id": "jec2CxjfHlUcra9q",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "v7GdlKa3zsqHm8Wm",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "i1uUK7Nk3lweImLv",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "D5NpOSaOo2E9xNw5",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "USSbv7lZ3XG6fkkT",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "DmMovMzFeBE3xy8l",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "dgJDHNa30Y8iVogQ",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "KrDI3MOdeLBjhW4z",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "xcfPcc3XoZyUpQ4y",
              "name": "Soothe",
              "rank": 2
            },
            {
              "id": "KGvtLR1TNaUbIiKn",
              "name": "Haste",
              "rank": 3
            },
            {
              "id": "CldktW7Wr0XPw00x",
              "name": "Heroism",
              "rank": 3
            },
            {
              "id": "Gj8RNfKlh2QwPAyw",
              "name": "Ring of Truth",
              "rank": 3
            },
            {
              "id": "qla3s1PMN2vhfaVr",
              "name": "Soothe",
              "rank": 3
            },
            {
              "id": "KwbOiR6yBuCKocsR",
              "name": "Confusion",
              "rank": 4
            },
            {
              "id": "JvPREd34ZS6EyPr8",
              "name": "Honeyed Words",
              "rank": 4
            },
            {
              "id": "c3e5nBZ9ATyY9dI4",
              "name": "Translocate",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:gang-leader",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "AdZ4EklEmpHViycl",
      "slug": "gang-leader",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8641d98af45a7655a4f1e0502a0c54cdddf257130b86f84cbb2410277b4b6bea",
    "translatableHash": "sha256:783dbf8057b397c5c9d136922c1990b8b77918d735df32f026856084c3a36848",
    "data": {
      "schemaVersion": 1,
      "name": "Gang Leader",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Gang leaders direct cutthroats, killers, thieves, and toughs. The gang leader often appears alongside a bandit gang or other criminals.\nVillains pursue selfish and cruel goals, trampling over anyone in their way.",
      "armorClass": 24,
      "hitPoints": 110,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": []
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
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "06QUpYDzeWLuHjVF",
          "name": "Shortsword",
          "bonus": 18,
          "damage": "1d6+10 piercing",
          "traits": [
            "agile",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "9xpaU4kcENt6pjtN",
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
          "id": "y77GcQxQjHDAiISd",
          "name": "Sling",
          "bonus": 17,
          "damage": "1d6+8 bludgeoning",
          "traits": [
            "propulsive",
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "kSd8rIlnXiVczYg0",
          "name": "Deny Advantage",
          "kind": "passive",
          "description": "The gang leader isn't Off-Guard to creatures of 7th level or lower that are Hidden, Undetected, flanking, or using surprise attack.",
          "traits": []
        },
        {
          "id": "Ht7knXtXeyTkKi2n",
          "name": "Evasive Reflexes",
          "kind": "passive",
          "description": "When the gang leader rolls a success on a Reflex save, they get a critical success instead.",
          "traits": []
        },
        {
          "id": "fp3XmyB0pcpjCBex",
          "name": "Nimble Dodge",
          "kind": "reaction",
          "description": "Trigger The gang leader is targeted with an attack by an attacker they can see\nEffect The gang leader gains a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "qNEPB3RKC3SlV4YE",
          "name": "Surprise Attacker",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted are Off-Guard to the gang leader.",
          "traits": []
        },
        {
          "id": "wXgvnztT7r9jO7Px",
          "name": "Brutal Rally",
          "kind": "reaction",
          "description": "Trigger The gang leader rolls a critical hit against a creature\nEffect All allies that can see the gang leader gain a +1 circumstance bonus to attack rolls until the start of the gang leader's next turn.\nEffect: Brutal Rally",
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
          "description": "Any enemy is Off-Guard against the gang leader's melee attacks due to flanking as long as the enemy is within melee reach of both the gang leader and one of the gang leader's allies.",
          "traits": []
        },
        {
          "id": "PDidp7qMSw5qRoXU",
          "name": "Quick Draw",
          "kind": "action",
          "description": "The gang leader Interacts to draw a weapon, then Strikes with that weapon.",
          "traits": []
        },
        {
          "id": "j1wf4dSXkGypJjRs",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The gang leader deals an extra 2d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:tripkee-fiend-keeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "bQsdRYWGcUvXdp5G",
      "slug": "tripkee-fiend-keeper",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7977e09bcd6b8a56b3a61e800297a29ce52943d0a3feb5ff33c457bc8b60c4cf",
    "translatableHash": "sha256:a100106b8a241cf4fe30722be0b7d7e3837bf6a9b9f10dc87e3e5bac793c7e2b",
    "data": {
      "schemaVersion": 1,
      "name": "Tripkee Fiend-Keeper",
      "level": 7,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "tripkee"
      ],
      "description": "Tripkees have a technique for dealing with unholy threats that has been passed down through the generations. A fiend keeper can absorb unholy spirits into their body before those entities can cause trouble for their kin. Though they can tap into this power when necessary, tripkee fiend keepers try to cleanse themselves of its evil influence by undertaking good deeds.\nTraditionally making their homes in the treetops of tropical jungles and forests, these frog-like humanoids are often seen as resourceful and cautious, preferring to live and hunt hidden in the branches of tall trees.",
      "armorClass": 25,
      "hitPoints": 125,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
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
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 13,
        "nature": 16,
        "religion": 16,
        "stealth": 17,
        "survival": 16
      },
      "languages": [
        "chthonian",
        "common",
        "diabolic",
        "tripkee"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "AahzSdoK7N21IYTi",
          "name": "Cruuk",
          "bonus": 14,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "magical",
            "shove"
          ]
        },
        {
          "id": "cq7QB4CrxpI8yn8K",
          "name": "Cruuk",
          "bonus": 17,
          "damage": "1d6+5 bludgeoning",
          "traits": [
            "magical",
            "thrown-30"
          ]
        },
        {
          "id": "D4hB5yx5MuAzhQAj",
          "name": "Fist",
          "bonus": 16,
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
          "id": "jrXffWSrX8LutkCI",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The fiend keeper ignores difficult terrain caused by plants, such as bushes, vines, and undergrowth.",
          "traits": []
        },
        {
          "id": "C1xO1yedBaxAXJDa",
          "name": "Hunter of Virtue",
          "kind": "passive",
          "description": "Whenever the tripkee fiend keeper critically hits an unholy creature, they reduce the value of their Stupefied condition by 1.",
          "traits": []
        },
        {
          "id": "KDWPCHtHzOmFyl27",
          "name": "Bounce Cruuk",
          "kind": "action",
          "description": "The tripkee fiend keeper makes a ranged Strike with their cruuk against a target within 30 feet. Once the Strike is complete, the cruuk ricochets back into the tripkee fiend keeper's hand. If their hands are full when the cruuk returns, it falls to the ground in their space.",
          "traits": []
        },
        {
          "id": "9ycBz0EsYq1yOQMm",
          "name": "Harness Wickedness",
          "kind": "action",
          "description": "Requirements The tripkee fiend keeper isn't stupefied\nEffect The tripkee fiend keeper allows a portion of the fiendish power they have absorbed to flow through their body. For the next minute, the tripkee fiend keeper's Strikes deal an additional die of damage and gain the unholy trait. The tripkee fiend keeper also gains 10 temporary Hit Points, a +5-foot status bonus to Speed for the duration, and weakness 5 to holy. At the end of the duration, the tripkee fiend keeper is Stupefied 1 for 1 hour.",
          "traits": [
            "concentrate",
            "divine",
            "unholy"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-npc-core:orc-skullcrushers",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-npc-core",
      "sourceId": "C8Bo22NBYGoj9Fwd",
      "slug": "orc-skullcrushers",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f54742f0ffc6af3f3fb4ac5d81f95280376c46e60988c7eb34bba6f16dcf8678",
    "translatableHash": "sha256:2c2979ee213e80cda917bb4b7f21fb4c48ab406b1c7077b7c4e2d222deae8179",
    "data": {
      "schemaVersion": 1,
      "name": "Orc Skullcrushers",
      "level": 7,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "humanoid",
        "orc",
        "troop"
      ],
      "description": "Orc warriors search for more effective weapons and tactics—most physical, but some magical. As they fought back against the undead on their borders, they formed bands of skullcrushers to crush hordes of skeletons.\nOrcs have a strict moral code encompassing valor and accomplishment, and they cast out those unwilling to follow it. For the last few generations, orcs have been trying to erase the narratives around their culture as being solely focused on war and violence. They invite other races and adventuring parties inside their holds so they may experience the truth of who the orcs are.",
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
        "fortitude": 17,
        "reflex": 16,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 17,
        "intimidation": 15,
        "stealth": 16,
        "survival": 13
      },
      "languages": [
        "common",
        "orcish"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "void 8"
        ],
        "weaknesses": [
          "area-damage 8",
          "splash-damage 8"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "Qq6s3g7aSeWWwCHj",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 80 (3 segments), 40 (2 segments)",
          "traits": []
        },
        {
          "id": "BLQwA5hwABLVd8Nl",
          "name": "Troop Movement",
          "kind": "passive",
          "description": "Whenever a troop moves, you move one of its segments and the other segments follow behind it. At the end of the movement, you can group the other segments adjacent to the one you moved as you see fit, provided none of them moves farther than the moving segment. If you choose not to move the troop any distance, you can instead reshape the position of all the segments as long as one stays in place.",
          "traits": []
        },
        {
          "id": "LVoDxxciLYCJxBEj",
          "name": "Chant of Dominance",
          "kind": "action",
          "description": "Effect Orc war drummers lead the other skullcrushers in a holy chant extolling their superiority in battle. Any creature damaged by the skullcrushers this turn also takes 1d6 persistent spirit damage.",
          "traits": [
            "divine",
            "holy",
            "spirit"
          ]
        },
        {
          "id": "01ootqljUXSiF6Ff",
          "name": "Crush Skulls",
          "kind": "action",
          "description": "1 to 3\nFrequency once per round\nEffect The skullcrushers smash their mauls and clubs against each enemy in a 5-foot type:emanation, with a check (reflex, dc:22, basic, options:area-effect) save. The damage depends on the number of actions.\n1 1d12 bludgeoning damage\n2 (1d12+8)[bludgeoning|options:area-damage] damage\n3 (2d12+8)[bludgeoning|options:area-damage] damage",
          "traits": []
        },
        {
          "id": "o7RippHQ22wnFDkR",
          "name": "Sacred Salvo",
          "kind": "action",
          "description": "The skullcrushers fling a fusillade of sling bullets enchanted with life energy intended to destroy undead. This barrage is a 10-foot type:burst within 50 feet that deals 3d6 bludgeoning damage plus 1d6 vitality damage to undead, with a check (reflex, dc:22, basic, options:area-effect) save. When the troop is reduced to 2 or fewer segments, this area decreases to a 5-foot type:burst.",
          "traits": [
            "divine",
            "vitality"
          ]
        }
      ],
      "spellcasting": []
    }
  }
]
