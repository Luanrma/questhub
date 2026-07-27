import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_07_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:soulrider-monitor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "7ZCO51Bt6ulKHaSr",
      "slug": "soulrider-monitor",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f778e3155d6c21a4aefeb19c45eedf1de0266865e2cf16466d18f4f5565d76e7",
    "translatableHash": "sha256:6dd2afceb1c491e17f0f7fb34db1cc25951e278c2f0946d8b0b04f17c6ac55c1",
    "data": {
      "schemaVersion": 1,
      "name": "Soulrider (Monitor)",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "aberration",
        "monitor"
      ],
      "description": "Although soulriders can grow quite large, most of them are narrow creatures only a few feet long. Even once they've attached to a soul and passed between planes, they must complete their adaptation to the new environment before beginning their growth.\nThese smallest soulriders might be found anywhere in the mortal Universe with a portal to the Outer Sphere or a history of summoning magic. Large batches of spawn in the wilderness are often culled by natural predators, but individual spawn can survive for years and travel many miles as they search for a host.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 2
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 4,
        "stealth": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 1"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 6,
          "damage": "",
          "traits": [
            "finesse",
            "magical",
            "reach-0"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 6,
          "damage": "1d4 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Monitor)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "XV0PY92iVlMP2U2D",
          "name": "Monitor Escape",
          "kind": "action",
          "description": "The soulrider's form blurs as it exploits loopholes in the multiverse. It teleports to an empty space within 60 feet."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=15]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:clockwork-spy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "9Uc7T3x3cxNo7lvY",
      "slug": "clockwork-spy",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2f7cec3dc8294910d5b8a9ace98ed64eba167ca2317357849c72636a2d5e8791",
    "translatableHash": "sha256:a8b43f37c6d45c6838e00c650080dfa6da8a1aed7b1d0c93a3dcc3b2fe65c4c5",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Spy",
      "level": -1,
      "rarity": "uncommon",
      "size": "tiny",
      "traits": [
        "clockwork",
        "construct",
        "mindless"
      ],
      "description": "Engineers, technologists, and mechanically gifted wizards employ clockwork spies-tiny, spiderlike constructs capable of recording and playing back audio-to surreptitiously surveil their enemies or steal secrets from competitors. Their spindly bodies and delicate components make them unsuitable for combat; in fact, most builders construct clockwork spies with a self-destruct mechanism to ensure the spies' meddling can't be traced back to them.\nIntricate, complex machines, clockworks are built with care by highly skilled engineers. Though their creation involves some amount of magic, they're primarily mechanical, packed with precision-tuned gears and springs working in concert.\nThe sturdy mainspring within a clockwork must be wound to provide the energy needed to power the device. Some larger clockworks contain a series of springs for different limbs that each need to be wound. A clockwork's crafter creates a unique metal key while building the clockwork; winding the clockwork usually involves inserting the key into the machine's back and turning clockwise. Larger clockworks require greater strength to turn the key, and typically have larger keys to allow for more torque-some even accommodating a team of winders rather than an individual. Programming a clockwork requires both the key and the knowledge to set the program correctly, information usually reserved for the clockwork's creator or owner.",
      "armorClass": 17,
      "hitPoints": 8,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision"
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
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "electricity 2",
          "orichalcum 2"
        ]
      },
      "attacks": [
        {
          "id": "xt4bQy0cnsmUHdm8",
          "name": "Spherical Body",
          "bonus": 7,
          "damage": "1d6-1 bludgeoning",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "lL49wJa4ig4V0ag1",
          "name": "Record Audio",
          "kind": "action",
          "description": "The clockwork spy records all sounds within @Template[emanation|distance:25]{25 feet} onto a small gemstone worth 1 gp embedded in its body. The clockwork spy can record up to 1 hour of sound on a single gemstone. Once it begins recording, it can't cease recording early, nor can it record onto a gemstone that already contains a recording. Some clockwork spies contain multiple gemstones to allow for a series of recordings. Since clockwork spies are not intelligent, they must be given simple commands regarding when to start recording sounds. A clockwork spy can differentiate between different kinds of creatures but not between specific individuals.\nThe spy can start or stop playback of recorded sound by spending a single action. Removing a gemstone from or installing a gemstone into a clockwork spy requires a successful [[/act disable-device dc=14]]{DC 14 Thievery} check to Disable a Device; on a failure, the gemstone is undamaged, but any recorded sounds are erased and the gemstone still can't be used to make another recording."
        },
        {
          "id": "zdb8RR0jcIIol6on",
          "name": "Wind-Up",
          "kind": "passive",
          "description": "24 hours, check (thievery, traits:action:disable-a-device, dc:14), standby\nFor a clockwork to act, it must be wound with a unique key by another creature. This takes 1 minute. Once wound, it remains operational for the listed amount of time, usually 24 hours, after which time it becomes unaware of its surroundings and can't act until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most clockwork keepers wind all their clockworks at a set time, typically 8 a.m.\nA clockwork that lists standby in its wind-up entry can enter standby mode as a 3-action activity. Its operational time doesn't decrease in standby, but it can sense its surroundings (with a -2 penalty to Perception). It can't act, with one exception: when it perceives a creature, it can exit standby as a reaction (rolling initiative if appropriate).\nA creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, the clockwork loses 1 hour of operational time. This can be done even if the clockwork is in standby mode."
        },
        {
          "id": "UK9gsjbHYgmKZze9",
          "name": "Self-Destruct",
          "kind": "reaction",
          "description": "A clockwork spy must use this reaction unless specifically programmed otherwise by its creator.\nTrigger The clockwork spy is reduced to 0 Hit Points.\nEffect The spy thrashes around and emits a tinny scream followed by a steady ticking sound. At the beginning of what would have been its next turn, the clockwork spy explodes, dealing 1d10[piercing|options:area-damage] damage in a @Template[emanation|distance:5]{5-foot radius} (check (reflex, dc:16, basic, options:area-effect) save). Its gemstone is destroyed, along with any information contained inside it.\nAn adjacent creature can cancel the self-destruct sequence by succeeding at a check (thievery, dc:16, traits:action:disable-a-device) check to Disable a Device."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:severed-head",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "B1ZWz3rJ6VBYVH1U",
      "slug": "severed-head",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e5ff15e9dc73f54593cb34ca088668226f6894109fb9460d9119d781b0b5ebb5",
    "translatableHash": "sha256:f35e77a6b67bbff7d2c85784010f8042fee002147a83606979ea7d7d24cbbb56",
    "data": {
      "schemaVersion": 1,
      "name": "Severed Head",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "mindless",
        "undead",
        "unholy"
      ],
      "description": "The most common beheaded appears simply as a rotting head, barely preserved by the magic that created it.\nBeheaded are the reanimated heads of decapitation victims. These mindless undead fly through the air or roll around to attack their prey.",
      "armorClass": 15,
      "hitPoints": 7,
      "speedFeet": 15,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 6,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 0,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 4
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
          "vitality 1"
        ]
      },
      "attacks": [
        {
          "id": "jBnvJizQVNlbpByJ",
          "name": "Jaws",
          "bonus": 6,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "MODzmDCzn3MDbT9X",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KjLaF8NJBaPjsRAz",
          "name": "Gnash",
          "kind": "action",
          "description": "Requirements The beheaded's previous action was a jaws Strike that dealt damage to its target.\nEffect The severed head makes a second jaws Strike as it violently shakes itself, trying to rip away a mouthful of flesh. On a success, the target takes an additional 1d4 slashing damage and 1 persistent bleed damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:soulrider-celestial",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "GXBGUQRKarLhmtoj",
      "slug": "soulrider-celestial",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:277b8d48d54be05e3a7990683d7ebedaea37d923b200b00b539901362db25cd4",
    "translatableHash": "sha256:51d9c4f68796ac89432ad48c1223ba8bf7285611c8b8eac8e6302c7ca27fae48",
    "data": {
      "schemaVersion": 1,
      "name": "Soulrider (Celestial)",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "aberration",
        "celestial",
        "holy"
      ],
      "description": "Although soulriders can grow quite large, most of them are narrow creatures only a few feet long. Even once they've attached to a soul and passed between planes, they must complete their adaptation to the new environment before beginning their growth.\nThese smallest soulriders might be found anywhere in the mortal Universe with a portal to the Outer Sphere or a history of summoning magic. Large batches of spawn in the wilderness are often culled by natural predators, but individual spawn can survive for years and travel many miles as they search for a host.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 2
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 4,
        "stealth": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 1"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 6,
          "damage": "",
          "traits": [
            "finesse",
            "magical",
            "reach-0"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 6,
          "damage": "1d4 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Celestial)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "v98SCSlvMo3EfN49",
          "name": "Celestial Flare",
          "kind": "action",
          "description": "Each enemy within 30 feet of the soulrider takes 2d6[spirit] damage (check (will, dc:17, basic) save). Creatures that fail the save are Blinded for 1 round. The spawning soulrider can't use Celestial Flare again for 1 minute."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=15]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grimple",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "IErCbIpdYOBQHNmN",
      "slug": "grimple",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8891bd166b08780c34492c321c0e6faebfbfe446bd079c0e622a94b978ad58b7",
    "translatableHash": "sha256:b579e9587a75358b5fae7cbd89190c01dd3e9bd3c4723b2eddc37c924fc2cd06",
    "data": {
      "schemaVersion": 1,
      "name": "Grimple",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey",
        "gremlin"
      ],
      "description": "Even more than most gremlins, grimples resent the trappings of civilization: inn common rooms with their rowdy singalongs, livery yards with their whinnying horses, church steeples with their clanging bells. Grimples live to spoil these conventions, dropping tavern signs on patrons, urinating in rain barrels, and opening stable doors. When all else fails, they literally vomit their disdain on passersby.\nGrimples resemble humanoid, mange-ridden opossums, with boar-like tusks that aid them in rooting through garbage heaps for food. They're agile climbers who glide from eave to eave on the loose flaps of skin between their limbs. Savvy gremlin-hunters know to look for the skin flakes and fur grimples shed from their parasite-infested hides.\nGremlins arose long ago in the First World, living embodiments of nature's ability to wear away, erode, and decompose. In the Universe, their encounters with mortal civilizations twisted them into creatures devoted to chaos, sabotage, and traps, each variety specializing in a particular brand of mayhem.",
      "armorClass": 14,
      "hitPoints": 9,
      "speedFeet": 10,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 3,
        "int": 1,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "crafting": 5,
        "deception": 2,
        "nature": 4,
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
          "id": "df6x7z2JqZ325lY2",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d4 + 1 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "zR7WoyREJtjNrtuv",
          "name": "Rock",
          "bonus": 7,
          "damage": "1d4 + 1 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "SzriRFiHHVYO1GYI",
          "name": "Gremlin Lice",
          "kind": "passive",
          "description": "Whenever a living creature touches or is touched by a grimple (including via a successful unarmed melee Strike), it must succeed at a check (reflex, dc:13) save or become infested by gremlin lice.\nWhile infested, the targeted creature is distracted by the itching sensation and is Stupefied 1, though it can use an Interact action to scratch at the itching lice to suppress the stupefied condition from the lice for [[/gmr 1d4 #rounds]]{1d4 rounds}.\nThe infestation ends after 24 hours or until the creature is submerged in water or exposed to a severe cold environment, whichever comes first."
        },
        {
          "id": "Gh301Rw6jmBr5P8s",
          "name": "Putrid Vomit",
          "kind": "action",
          "description": "The grimple spews a @Template[type:line|distance:30] of vomit. Each creature in the line must succeed at a check (fortitude, dc:16) save or become Sickened 1 (Sickened 2 on a critical failure). The grimple can't use Putrid Vomit again for [[/gmr 1d4 #Recharge Putrid Vomit]]{1d4 rounds}."
        }
      ],
      "spellcasting": [
        {
          "id": "Re0uYYA9c4nnaRne",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "VmugWVEVGyUU8nnL",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "O1ApC3A4Et38Qj38",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "J0Hx0GQAiIXQ4zsg",
              "name": "Telekinetic Hand",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:soulrider-fiend",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "sMemLmJWM0g0FxbZ",
      "slug": "soulrider-fiend",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b6c8943597db691e6bc33adb61e279ce343d86186243a531391b7449dcf2bd2",
    "translatableHash": "sha256:76cf7ed098f4057ebed1fabdda79a95692716be6be1d39fc3bd970d729fbe26c",
    "data": {
      "schemaVersion": 1,
      "name": "Soulrider (Fiend)",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "aberration",
        "fiend",
        "unholy"
      ],
      "description": "Although soulriders can grow quite large, most of them are narrow creatures only a few feet long. Even once they've attached to a soul and passed between planes, they must complete their adaptation to the new environment before beginning their growth.\nThese smallest soulriders might be found anywhere in the mortal Universe with a portal to the Outer Sphere or a history of summoning magic. Large batches of spawn in the wilderness are often culled by natural predators, but individual spawn can survive for years and travel many miles as they search for a host.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 14,
      "hitPoints": 8,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 2
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": -3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 4,
        "stealth": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 1"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 6,
          "damage": "",
          "traits": [
            "finesse",
            "magical",
            "reach-0"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 6,
          "damage": "1d4 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "reach-0",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Fiend)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "ey6gdmXZNRVLibDJ",
          "name": "Fiendish Lunge",
          "kind": "action",
          "description": "The spawning soulrider Strides or Swims twice, making a tail Strike at any point during its movement. The Strike deals an additional 1d4 spirit damage."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=15]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:gutter-ooze",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "TzBUcMwhCNZ012sR",
      "slug": "gutter-ooze",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:135885953024e419d36a2e1d018e4fa23db07967e5d782f913a921823fbcfe76",
    "translatableHash": "sha256:e712e224b783471e65bd43854d59454e8d689dae876ad362130413134e5a43ef",
    "data": {
      "schemaVersion": 1,
      "name": "Gutter Ooze",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "mindless",
        "ooze"
      ],
      "description": "These small masses of protoplasm are considered the lesser \"cousins\" to sewer oozes, emerging from the drainage culverts beneath a city after a rainfall to feed on bits of organic matter that collect in streetside gutters. As they collect just about everything—pebbles, bits of broken glass, and other trash—some cities consider them to be more helpful than detrimental.",
      "armorClass": 7,
      "hitPoints": 20,
      "speedFeet": 10,
      "perception": {
        "modifier": 2,
        "senses": [
          "motion-sense-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 3,
        "will": 5
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 5,
        "stealth": 2
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "bleed",
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
          "id": "gkh2KN4fxgcNjvKA",
          "name": "Pseudopod",
          "bonus": 8,
          "damage": "1 acid; 1d4 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "9wOY2t1iXx1YfDWu",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A gutter ooze can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "VtMXT1AOKMwL0mFw",
          "name": "Slip Up",
          "kind": "reaction",
          "description": "Trigger An adjacent creature damages the gutter ooze with a melee Strike\nEffect Some of the gutter ooze's watery protoplasm gushes out beneath the triggering creature's feet. They must succeed at a check (reflex, dc:15) save or fall Prone."
        },
        {
          "id": "iN5Sb22MU45Wa7wV",
          "name": "Detritus",
          "kind": "passive",
          "description": "Due to all the random trash that collects in a city's gutters, whenever a gutter ooze makes a pseudopod Strike, the type of damage is chosen randomly between bludgeoning, slashing, and piercing."
        },
        {
          "id": "anc3e45dK9a9SeiQ",
          "name": "Weak Acid",
          "kind": "passive",
          "description": "A gutter ooze's acid damages only organic material—not metal, stone, or other inorganic substances."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:trilobite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "VhO8zvcp0K23bC2x",
      "slug": "trilobite",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f4b8cd0eadcc11680967b56fb8e772e98855e06aff0641e923f52160200460c7",
    "translatableHash": "sha256:67349cbf96f6b87d08f0577fda2f4e386af6ab49c33c7e6ce8983433cc8d567f",
    "data": {
      "schemaVersion": 1,
      "name": "Trilobite",
      "level": -1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "",
      "armorClass": 15,
      "hitPoints": 7,
      "speedFeet": 0,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
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
          "id": "NWJ2n9ACMr125YHl",
          "name": "Gnathobase",
          "bonus": 7,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "idY2rTiAl959kXz0",
          "name": "Curl Up",
          "kind": "reaction",
          "description": "Trigger The trilobite takes damage\nEffect The trilobite gains a +2 circumstance bonus to AC until the start of its next turn."
        },
        {
          "id": "HjxCIlgOTu8uTzZg",
          "name": "Quick Escape",
          "kind": "action",
          "description": "The trilobite Swims up to double its Speed and attempts to Hide."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:haniver",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "wlfPfrgdsHhXhQYZ",
      "slug": "haniver",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad6740de4d90e6f21a21ea09e1bac15d3fe329c31b776d9ffdd68729703a312d",
    "translatableHash": "sha256:d8710aaf5301d4e517aef7c82c28d9d31f0b3018450c074e664864f154cb5627",
    "data": {
      "schemaVersion": 1,
      "name": "Haniver",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "amphibious",
        "fey",
        "gremlin"
      ],
      "description": "Hanivers are the most benign type of gremlin—capricious fey who skim the waves on rubbery fin-wings. Though they don't actively sabotage their environment, sailors bemoan these gremlins' grasping fingers. Hanivers' incessant curiosity compels them to examine any object that draws their attention. Such treasures might include overturned fruit baskets, sacks of coins, or the gleaming teeth of a shark (often still in the shark's mouth, to the fey's regret). Should hanivers like what they find, they steal it, making them a bane to fishers and dockworkers everywhere.\nGremlins arose long ago in the First World, living embodiments of nature's ability to wear away, erode, and decompose. In the Universe, their encounters with mortal civilizations twisted them into creatures devoted to chaos, sabotage, and traps, each variety specializing in a particular brand of mayhem.",
      "armorClass": 15,
      "hitPoints": 8,
      "speedFeet": 10,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 7,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 5,
        "deception": 4,
        "nature": 3,
        "stealth": 5,
        "thievery": 5
      },
      "languages": [
        "common",
        "sakvroth",
        "thalassic"
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
          "id": "EhA1NamwzAZrJMj2",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d4 + 1 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "f4Mkjn4uAW6nabJR",
          "name": "Rearrange Possessions",
          "kind": "action",
          "description": "1 or 2\nThe haniver attempts to Steal a small object off a target's person.\nIf they succeed, they also rifle through and rearrange the contents of the target's pockets, pouches, and other containers. The next time the target attempts to draw a weapon or retrieve a worn item, doing so requires 2 Interact actions instead of one.\nThe haniver can Steal an object that's closely guarded using this action without the –5 penalty, though not objects that would be extremely noticeable or time-consuming to remove. They can spend 2 actions instead of 1 to use this ability to Steal from a creature in combat or otherwise on guard."
        }
      ],
      "spellcasting": [
        {
          "id": "7SyelFSQ8Pix3kVJ",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 5,
          "saveDc": 13,
          "spells": [
            {
              "id": "dg26zPtyoyvcw7Hb",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "3A3mNuYWRSg7aEgu",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "MtmIGyh1mEwfrLk8",
              "name": "Ventriloquism",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:trained-raven",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "WzHEogHdIeOWUnfe",
      "slug": "trained-raven",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:afdb28f8c8194395eb3bd2e2fdb643c9eabad19f18c0f249e8b7ca79d631812a",
    "translatableHash": "sha256:27e2984a6c7b989900593925d9aa93eda282544934247e87bf5b69e01f96fa04",
    "data": {
      "schemaVersion": 1,
      "name": "Trained Raven",
      "level": -1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal"
      ],
      "description": "These omnivorous birds are cunning and opportunistic scavengers. Capable of solving simple puzzles to retrieve desired items, ravens gather at the periphery of civilization, raiding it as needed when they're not hunting in the wilds. Ravens are known for trickery and often trained to further this instinct. Trained ravens will wait for an opening and peck their foes in vulnerable spots.\nFew birds are as cunning and social as the raven.",
      "armorClass": 15,
      "hitPoints": 7,
      "speedFeet": 10,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 2,
        "reflex": 7,
        "will": 5
      },
      "abilities": {
        "str": -3,
        "dex": 3,
        "con": 0,
        "int": -4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "deception": 5,
        "thievery": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "rGvREWDBZrWzdUhd",
          "name": "Beak",
          "bonus": 7,
          "damage": "1d4-1 piercing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "4zEyOGGm0vwVrtmi",
          "name": "Cunning",
          "kind": "passive",
          "description": "A raven can use simple items as tools, such as poking a stick at an opening to tease out a piece of food. They're also quite adept at stealing objects. A raven can't use Thievery to Palm an Object, Disable a Device, or Pick a Lock, but it can use Thievery to Steal light objects that it can carry in its beak or talons or to accomplish other relatively simple tasks."
        },
        {
          "id": "i0dd7k6Pr2nbNUtx",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A raven's Strikes deal an additional 1d4 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dream-spider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "4SfnQzORMdmBsp49",
      "slug": "dream-spider",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:92e8e5c6dd7e5d9bb6f09cd909024115a81bc9e821e020682daa030740f31711",
    "translatableHash": "sha256:390cb0f1e32bff8fb41c61b76c2059482876575802436665795952ca82c81dfd",
    "data": {
      "schemaVersion": 1,
      "name": "Dream Spider",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "A dream spider's webs have an iridescent hue and are infused with the same hallucinogenic compound as the creature's toxin. Originally denizens of tropical jungles, dream spiders have adapted well to temperate environments, particularly thriving among the rooftops of cities where shady alchemists use their venom to produce addictive drugs.\nSpiders range dramatically in size, yet many are to some extent venomous.",
      "armorClass": 16,
      "hitPoints": 15,
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
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": -5,
        "wis": 0,
        "cha": -4
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 2,
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
          "id": "j1ZFhictg9UH06TQ",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d6 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "g68EiB18wJgtznFO",
          "name": "Web",
          "bonus": 7,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "USoNgAXkS9F3FHY0",
          "name": "Web Sense",
          "kind": "passive",
          "description": "The dream spider has imprecise Tremorsense to detect the vibrations of creatures touching its web."
        },
        {
          "id": "wwU7A4TFUHjTgMDd",
          "name": "Dream Spider Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 4 rounds\nStage 1 Stupefied 1 (1 round)\nStage 2 1d6[poison] damage plus stupefied 1 (1 round)"
        },
        {
          "id": "Oqe10fVfp7eUKP7q",
          "name": "Web Trap",
          "kind": "passive",
          "description": "A creature hit by the dream spider's web attack is Immobilized and stuck to the nearest surface until it Escapes (DC 16)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:earth-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "5YmEdbkqk1IYWL7B",
      "slug": "earth-wisp",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9c8cd595a3e226ddbcf2ef1a7e7f09882c8ed85b3e521cd0bff662e91ceaa8fc",
    "translatableHash": "sha256:4b213901afd6086b2586616240b214013aa399c90aa1bc1c8265e1ee66d7435f",
    "data": {
      "schemaVersion": 1,
      "name": "Earth Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "Earth wisps are rolling spheres of rock, mud, and leaves, perpetually humming with low, rumbling energy. They're timid and aloof but fiercely loyal to those they know and trust.\nWisps are tiny elemental beings that emerged during the creation of the Elemental Planes. The first wisps roamed the Inner Sphere in shifting symphonies that traded members with their every meeting. These symphonies of free wisps created music out of their combined resonances, but when the wicked Elemental Lords realized the value of the wisps' resonance, they captured whole symphonies for use as servants.\nWisps attune to each other and to those they surround themselves with. This attunement makes them naturally supportive allies. Free wisps still roam the Inner Sphere and the Universe, but they're usually shy and hide themselves from strangers. However, they happily offer their service to those who show them kindness. They especially find themselves drawn to spellcasters who practice elemental magic; these wisps usually watch from afar but sometimes approach those who seem safe to become familiars or comrades.\nFree wisps who find one another become close almost immediately. They get especially excited when they find wisps of elements other than their own, showing none of the animosity sometimes exhibited between elementals of different planes. Instead, they join in an excited dance, emitting resonances that faintly echo the symphonies of ancient days.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 4
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
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [
          "bludgeoning 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "crNucWiYBaez99Os",
          "name": "Tendril",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "mcq7YbrQsksHyBzu",
          "name": "Tremorsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "76J36F6Gemx7Ces5",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates themself in an elemental explosion. This grants temporary Hit Points equal to half the wisp's current Hit Points to allies within @Template[emanation|distance:30]{30 feet} who have benefited from the wisp's resonance in the last hour. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed, and they can be restored by only a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect."
        },
        {
          "id": "MmTDNtUzktFJqpsO",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait.\nA creature in the area gains a +1 status bonus to attack and damage rolls for effects with the earth trait; a creature with the elemental and earth traits gains this bonus to all attack and damage rolls."
        },
        {
          "id": "ylu80mjoL7gE5yUQ",
          "name": "In Concert",
          "kind": "passive",
          "description": "When an earth wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:poppet-attendant",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AlvTmrsJXarVlgDZ",
      "slug": "poppet-attendant",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dc1e04b1c1f805f5cbc9ae43ba7219ce83024495145341b6d4e5c99484b6327c",
    "translatableHash": "sha256:292ba8ec76685e8c20e4875a75ca687025b62c0b876dd2bf8bf7c6ac1ba7748f",
    "data": {
      "schemaVersion": 1,
      "name": "Poppet Attendant",
      "level": 0,
      "rarity": "rare",
      "size": "small",
      "traits": [
        "construct",
        "humanoid"
      ],
      "description": "Poppet attendants are among the most common form of poppets. Most attendants can be found in creative trades, especially among tailors and cobblers.\nPoppets are simple constructs made to assist their creators with basic tasks.",
      "armorClass": 15,
      "hitPoints": 17,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 3,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "crafting": 6,
        "deception": 5,
        "diplomacy": 5,
        "stealth": 6
      },
      "languages": [
        "common"
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
          "id": "dEjhKs2sBfhhvDZX",
          "name": "Shears",
          "bonus": 8,
          "damage": "1d4+2 slashing",
          "traits": [
            "deadly-d8",
            "finesse",
            "versatile-p"
          ]
        },
        {
          "id": "r68Q1FkNDUGwHSaT",
          "name": "Fist",
          "bonus": 8,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "FjAm1LvxEp1JouSv",
          "name": "Sling",
          "bonus": 6,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "propulsive"
          ]
        }
      ],
      "actions": [
        {
          "id": "TocxAKQvubZJrUfA",
          "name": "Simple Doll",
          "kind": "passive",
          "description": "The poppet attendant looks like an ordinary doll, fooling others into leaving them alone. When they're in their place of business, the poppet attendant can [[/act hide]] without cover or concealment. Once a creature realizes that the poppet attendant is alive, the attendant can't Hide from them in this way again."
        },
        {
          "id": "QC80LtjmgNE0SOPm",
          "name": "Pincushion",
          "kind": "reaction",
          "description": "Trigger The poppet attendant would take piercing damage\nEffect The poppet directs the implement to a soft part of its body, gaining resistance 5 against the triggering piercing damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:badger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "DMoeZLBSXHO4nibR",
      "slug": "badger",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:219491e15b7e26a3bbc32592566af2ada4f3472c128d7a7d173b5736c08354d4",
    "translatableHash": "sha256:21c7c9c5dd11406446aa96a3070fad92a1364f01fe77b69a753b80e828eec436",
    "data": {
      "schemaVersion": 1,
      "name": "Badger",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "The typical badger has dark, brownish-gray fur highlighted with white markings, particularly on the head, giving it a striped mask of fur around its eyes. A threatened badger can swiftly become a ferocious combatant that typically fights until slain.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 5,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 1,
        "con": 2,
        "int": -5,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 4,
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
          "id": "X1Hh7DXiCGoPXh2j",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "6VEsckJo4laa2uls",
          "name": "Claw",
          "bonus": 8,
          "damage": "1d6 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "IKRXYrbZOj22lXn8",
          "name": "Ferocity",
          "kind": "reaction",
          "description": "Trigger The monster is reduced to 0 HP.\nEffect The monster avoids being knocked out and remains at 1 HP, but its Wounded value increases by 1. When it is Wounded 3, it can no longer use this ability"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-maggot",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "e0Jxg2AHeQSDGNnV",
      "slug": "giant-maggot",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9d3056f81241c819ebc7a640809a78d8590760aaef629af4ed690928f873da27",
    "translatableHash": "sha256:10113bc829b734e95ceb8c0d1d73432c2338d70e725d69ea2fe5554e18cdc1ea",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Maggot",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Giant flies lay their eggs on the bodies of larger monsters or livestock. When they hatch, these eggs release squirming maggots the size of humans, ravenous young who voraciously consume any flesh in the immediate vicinity—typically starting with the body upon which they were born.\nGiant flies are pony-sized insects that have massive compound eyes and bodies bristling with short, stiff hairs. Their lairs are notorious for the rotting meat they stockpile to lay their eggs in. Their maggot dens are also prime breeding grounds for virulent diseases.",
      "armorClass": 13,
      "hitPoints": 15,
      "speedFeet": 10,
      "perception": {
        "modifier": 3,
        "senses": [
          "tremorsense-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 3,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": -1,
        "con": 3,
        "int": -5,
        "wis": 1,
        "cha": -5
      },
      "skills": {
        "athletics": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "b1seSlyJqQqZaNmZ",
          "name": "Mandibles",
          "bonus": 6,
          "damage": "1d8+2 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "9FqGedACNxHlgnIS",
          "name": "Tremorsense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ojByvJVPgxd6ySiO",
          "name": "Regurgitation",
          "kind": "reaction",
          "description": "Trigger The giant maggot takes damage\nEffect The giant maggot regurgitates its rancid, foul meal. All creatures in a @Template[type:emanation|distance:5] must succeed at a check (fortitude, dc:16) save or become Sickened 1 (or Sickened 2 on a critical failure). The giant maggot can't use Regurgitation again until it spends at least an hour feeding on a corpse."
        },
        {
          "id": "0YFgBBEdLO3MVYwm",
          "name": "Gnaw Flesh",
          "kind": "action",
          "description": "Requirements The giant maggot has Grabbed a creature\nEffect The giant maggot deals (1d8+2)[slashing] damage to the grabbed creature as it chews the creature's flesh (check (reflex, dc:16, basic) save)."
        },
        {
          "id": "u9RrkCMaGsBfa06j",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spear-frog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "KIwZekBcdyBX8X9k",
      "slug": "spear-frog",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:948f0921febdac13b39d7e2ebaba5826ee60ea26f8c4f0a164f71aac45a8c75c",
    "translatableHash": "sha256:8a28536ce7810d6f6fac0845bde281ec41f964a140606d03fd6fe21378cabaee",
    "data": {
      "schemaVersion": 1,
      "name": "Spear Frog",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal"
      ],
      "description": "The spear frog is named for its toxin, which is traditionally used to envenom thrown projectiles like spears and daggers.\nFrogs that are poisonous or grow to monstrous size can be a menace to adventurers.",
      "armorClass": 14,
      "hitPoints": 12,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": -2,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 0
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "78Xcy6Fmsou4ZZ8n",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "HXKkg65Q8cFFyJ3z",
          "name": "Toxic Skin",
          "kind": "passive",
          "description": "Anytime a creature touches the spear frog or an adjacent creature Strikes the spear frog with a melee attack, that creature is exposed to spear frog venom."
        },
        {
          "id": "4aOd9uHRN6guAjln",
          "name": "Spear Frog Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:15)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d6[poison] damage and Enfeebled 1 (1 round)"
        },
        {
          "id": "TcQoCiCjUxbAHbQz",
          "name": "Sticky Feet",
          "kind": "passive",
          "description": "Spear frogs are not Off-Guard when Balancing on a narrow surface, and they gain a +4 circumstance bonus to Reflex saves to avoid falling."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:fire-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "micllXbcz1eBcAoz",
      "slug": "fire-wisp",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7a7d65512d4992b5a8500499799eead7aa84ad10361a8d0da5b899dc79456d68",
    "translatableHash": "sha256:6229ccf8483db3d3c0aa2f0e1f1199a90ad37f2373f50caeadf306403d86fb2c",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "Fire wisps are sizzling spheres of flame and ash, perpetually crackling and shimmering with heat. They're carefree, boisterous, and quick to action—sometimes recklessly so.\nWisps are tiny elemental beings that emerged during the creation of the Elemental Planes. The first wisps roamed the Inner Sphere in shifting symphonies that traded members with their every meeting. These symphonies of free wisps created music out of their combined resonances, but when the wicked Elemental Lords realized the value of the wisps' resonance, they captured whole symphonies for use as servants.\nWisps attune to each other and to those they surround themselves with. This attunement makes them naturally supportive allies. Free wisps still roam the Inner Sphere and the Universe, but they're usually shy and hide themselves from strangers. However, they happily offer their service to those who show them kindness. They especially find themselves drawn to spellcasters who practice elemental magic; these wisps usually watch from afar but sometimes approach those who seem safe to become familiars or comrades.\nFree wisps who find one another become close almost immediately. They get especially excited when they find wisps of elements other than their own, showing none of the animosity sometimes exhibited between elementals of different planes. Instead, they join in an excited dance, emitting resonances that faintly echo the symphonies of ancient days.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 40,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 5,
        "stealth": 7
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
          "cold 2",
          "water 2"
        ]
      },
      "attacks": [
        {
          "id": "M3b6aZv1TeomGjsc",
          "name": "Tendril",
          "bonus": 6,
          "damage": "1d4+1 fire; 1 fire",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "8ouYwNI7s6yxF3ca",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "The fire wisp ignores the Concealed condition from smoke."
        },
        {
          "id": "hc1Yo8IhekNVsQWZ",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates themself in an elemental explosion. This grants temporary Hit Points equal to half the wisp's current Hit Points to allies within @Template[emanation|distance:30]{30 feet} who have benefited from the wisp's resonance in the last hour. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed, and they can be restored by only a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect."
        },
        {
          "id": "F4EVIzNsRZf5yXqZ",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait.\nA creature in the area gains a +1 status bonus to attack and damage rolls for effects with the fire trait; a creature with the elemental and fire traits gains this bonus to all attack and damage rolls."
        },
        {
          "id": "ktRcEmzMFW1LP1bz",
          "name": "In Concert",
          "kind": "passive",
          "description": "When a fire wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:wolf-skeleton",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "MTEuAbMboUe33rw1",
      "slug": "wolf-skeleton",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e8219bf945c68f5e0552c4b04e19a16870e20f1263edab3a214989745acd956a",
    "translatableHash": "sha256:ab8f131741d281c5947a5c8631acb34c0683247d1d9be7e1772755e8efec7b8d",
    "data": {
      "schemaVersion": 1,
      "name": "Wolf Skeleton",
      "level": 0,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Without the burden of flesh, skeletal wolves charge across the battlefield with terrifying speed.\nAmong the ranks of the dead, none are so numerous, nor so varied, as the skeleton. While most are almost entirely made from bone, some maintain a few scraps of flesh to aid them in movement, such as wing membranes.",
      "armorClass": 16,
      "hitPoints": 12,
      "speedFeet": 35,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 5,
        "stealth": 6
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
          "id": "gizkkpi42rqcq7rz",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d4+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "uB6EJzJpTE3PRvS8",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "a9ir7xv426ririzq",
          "name": "Surge of Speed",
          "kind": "action",
          "description": "The wolf skeleton Strides three times, but it's Off-Guard until the start of its next turn."
        },
        {
          "id": "9niTkEpDMyb71Ala",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:water-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "PV8ex8ivTfD7bzEP",
      "slug": "water-wisp",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8ca454008001d2fc0b74091b643757cf795994dbae9deee964c90f9af3bf7bfa",
    "translatableHash": "sha256:2784335404dfa5bbc9281f3ced3adff97b8b3e9af18c3d20e02f0358de958ff3",
    "data": {
      "schemaVersion": 1,
      "name": "Water Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "elemental",
        "water"
      ],
      "description": "Water wisps are swimming spheres of foam and water, perpetually humming with a wash of soft sounds. They're gentle, nurturing, and quick to help anyone in need.\nWisps are tiny elemental beings that emerged during the creation of the Elemental Planes. The first wisps roamed the Inner Sphere in shifting symphonies that traded members with their every meeting. These symphonies of free wisps created music out of their combined resonances, but when the wicked Elemental Lords realized the value of the wisps' resonance, they captured whole symphonies for use as servants.\nWisps attune to each other and to those they surround themselves with. This attunement makes them naturally supportive allies. Free wisps still roam the Inner Sphere and the Universe, but they're usually shy and hide themselves from strangers. However, they happily offer their service to those who show them kindness. They especially find themselves drawn to spellcasters who practice elemental magic; these wisps usually watch from afar but sometimes approach those who seem safe to become familiars or comrades.\nFree wisps who find one another become close almost immediately. They get especially excited when they find wisps of elements other than their own, showing none of the animosity sometimes exhibited between elementals of different planes. Instead, they join in an excited dance, emitting resonances that faintly echo the symphonies of ancient days.",
      "armorClass": 13,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 4,
        "medicine": 6
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
          "fire 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Rrff1dGwnJedoafM",
          "name": "Tendril",
          "bonus": 6,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "F3gL977TXnS3nYWH",
          "name": "Mist Vision",
          "kind": "passive",
          "description": "The water wisp ignores the Concealed condition from mist and fog."
        },
        {
          "id": "XhfT0haUWPXZaDxi",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates themself in an elemental explosion. This grants temporary Hit Points equal to half the wisp's current Hit Points to allies within @Template[emanation|distance:30]{30 feet} who have benefited from the wisp's resonance in the last hour. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed, and they can be restored by only a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect."
        },
        {
          "id": "NBlrUeuztwcpel2z",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait.\nA creature in the area gains a +1 status bonus to attack and damage rolls for effects with the water trait; a creature with the elemental and water traits gains this bonus to all attack and damage rolls."
        },
        {
          "id": "tXhIMgrgTG8GG2Wm",
          "name": "Drench",
          "kind": "action",
          "description": "The wisp puts out all fires in a single 5-foot square. They extinguish non-magical fire of that size or smaller automatically and attempt to counteract magical fires (counteract modifier [[/r 1d20+6 #Counteract]]{+6})."
        },
        {
          "id": "xSwpXF8p6DICALE3",
          "name": "In Concert",
          "kind": "passive",
          "description": "When a water wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:air-wisp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Q6oMLXjmGqF6dxzp",
      "slug": "air-wisp",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1522960f0d8505980a8a196cba5f2eea6598f4ee0c9c711fac95e9eec787c42c",
    "translatableHash": "sha256:a458e773815f71d6e26e7972759f84e0c46de6dad1a31be5eb8b1a3d9b598d2c",
    "data": {
      "schemaVersion": 1,
      "name": "Air Wisp",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Air wisps are floating spheres of cloud and storm, perpetually humming a light, whispery tone. They're playful and capricious, with great curiosity toward strangers.\nWisps are tiny elemental beings that emerged during the creation of the Elemental Planes. The first wisps roamed the Inner Sphere in shifting symphonies that traded members with their every meeting. These symphonies of free wisps created music out of their combined resonances, but when the wicked Elemental Lords realized the value of the wisps' resonance, they captured whole symphonies for use as servants.\nWisps attune to each other and to those they surround themselves with. This attunement makes them naturally supportive allies. Free wisps still roam the Inner Sphere and the Universe, but they're usually shy and hide themselves from strangers. However, they happily offer their service to those who show them kindness. They especially find themselves drawn to spellcasters who practice elemental magic; these wisps usually watch from afar but sometimes approach those who seem safe to become familiars or comrades.\nFree wisps who find one another become close almost immediately. They get especially excited when they find wisps of elements other than their own, showing none of the animosity sometimes exhibited between elementals of different planes. Instead, they join in an excited dance, emitting resonances that faintly echo the symphonies of ancient days.",
      "armorClass": 16,
      "hitPoints": 12,
      "speedFeet": 40,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 2,
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
          "id": "ag0xwlo1GxnZXIAA",
          "name": "Tendril",
          "bonus": 7,
          "damage": "1d4 bludgeoning",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "eimozVW6CUdNxj5U",
          "name": "Accord Essence",
          "kind": "reaction",
          "description": "Trigger An ally within 30 feet that benefited from the wisp's resonance in the last hour is targeted by an attack\nEffect The wisp detonates themself in an elemental explosion. This grants temporary Hit Points equal to half the wisp's current Hit Points to allies within @Template[emanation|distance:30]{30 feet} who have benefited from the wisp's resonance in the last hour. These temporary Hit Points last 1 hour.\nA wisp that uses this reaction is permanently destroyed, and they can be restored by only a Wish ritual or similarly powerful effect. If an ability would prevent the wisp's destruction (for instance, if the wisp is summoned and would merely be dismissed), Accord Essence has no effect."
        },
        {
          "id": "xdKkF46p1sqRzpNa",
          "name": "Resonance",
          "kind": "passive",
          "description": "30 feet. All wisps vibrate at a frequency attuned to their element, resonating with and empowering all creatures and effects sharing that trait.\nA creature in the area gains a +1 status bonus to attack and damage rolls for effects with the air trait; a creature with the elemental and air traits gains this bonus to all attack and damage rolls."
        },
        {
          "id": "YYJbcNQqPOI6Hmqk",
          "name": "In Concert",
          "kind": "passive",
          "description": "When an air wisp rolls a critical failure on a check to Aid, they get a failure instead, and when they roll a success, they get a critical success instead."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sea-snake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "rVzdgqUn7slx2WSS",
      "slug": "sea-snake",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:384e98853929dfdc74ee8a47e45fa685b2905b64452ad6186c97f1c446b72c98",
    "translatableHash": "sha256:3919141b029cbe28da7ce9a15a1213ed2093bf07240aaaba63309bd84dadc1f9",
    "data": {
      "schemaVersion": 1,
      "name": "Sea Snake",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "These lithe snakes like to frequent the shallow waters of tropical seas. Their 4-foot-long, blue-green bodies easily blend into the water where they lurk to ambush prey. Sea snakes are highly venomous but often choose not to inject their venom when biting, so encounters with them rarely result in fatalities.\nTales speak of massive sea snakes that swim in deeper waters and stalk ships, waiting for sailors to fall overboard or even climbing over the side to snatch them from the deck.\nSnakes of some variety thrive in every non-arctic ecosystem, each with their own particular hunting patterns and defense mechanisms.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 15,
      "perception": {
        "modifier": 5,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "athletics": 2,
        "stealth": 5,
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
          "id": "aRNHWJGa3h80o7yX",
          "name": "Fangs",
          "bonus": 7,
          "damage": "1d8 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "LDdp3KN9nZUH1y0c",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The sea snake can hold its breath for about an hour."
        },
        {
          "id": "d3Ei9WA1m0QcOboi",
          "name": "Lash Out",
          "kind": "reaction",
          "description": "Trigger A creature within the sea snake's reach uses a move action\nEffect The sea snake makes a fangs Strike against the attacker."
        },
        {
          "id": "1Uuz6LiipUf2zg6d",
          "name": "Sea Snake Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 4 rounds\nStage 1 1d6[poison] damage (1 round)\nStage 2 1d6[poison] damage and Enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-outer-rifts",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "0phL9JgjsbcPsuoS",
      "slug": "shade-outer-rifts",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b8f0020c36d6ce0f881b1572b31e300687dbf81c87a179e007052a14cc54e9ce",
    "translatableHash": "sha256:25192fdc8555e6d6eb8db0810cfc794448ae4c2063dacf2ec85d59fd85abc60a",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Outer Rifts)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "shade",
        "unholy"
      ],
      "description": "The larvae appear as maggot-like grubs with the face the shade had in life.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "chthonian"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5tqNBlspN6txKrz9",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": [
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Outer Rifts (The Larvae)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nOuter Rifts (The Larvae) The larvae appear as maggot-like grubs with the face the shade had in life.\n• Sanctification unholy\n• Language Chthonian\n• Additional Ability immune to disease and poison\n• Melee jaws +7, Damage 1d8+2 piercing"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-astral-plane",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "2ZJo8mtDRD4Xffto",
      "slug": "shade-astral-plane",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2c1d89ea04e123236127e548060e14a3d47715613cbfe86fb30faf4467d76a78",
    "translatableHash": "sha256:52fca7355edf3a7099387b9e72eebad2ae739e7c459ba1eca2c16bf6959315f9",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Astral Plane)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "astral",
        "shade"
      ],
      "description": "These appear as astrally projected versions of their mortal forms, yet they lack a silver cord.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
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
          "id": "MRVG5RH41oEJ41N3",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Astral Plane (The Untethered)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nAstral Plane (The Untethered) These appear as astrally projected versions of their mortal forms, yet they lack a silver cord\n• Language any one spoken in life (such as Common)\n• Additional Ability fly Speed 20 feet\n• Melee 1 fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-amoeba",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "37VjWGXq40eLfrl6",
      "slug": "giant-amoeba",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ff54f7a7091fc775a9e57edbcb14b3a24c0903a76dafebe1c41baea9ca186e35",
    "translatableHash": "sha256:3d5331c7a2f33542cd38778700658d0fc74633b47299cf0b113924ef19396d17",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Amoeba",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "amphibious",
        "mindless",
        "ooze"
      ],
      "description": "These blobs of nearly transparent protoplasm are identical in form and behavior to the microscopic creatures from which they have evolved, except their outlandish size makes them all the more dangerous. Unlike slimes, puddings, and other deadly oozes, giant amoebas have an outer membrane that contains their internal structures, making them more susceptible to slashing weapons than their amorphous kin. However, this membrane is also extremely flexible and permeable, allowing them to surround prey and absorb it, suffocating and slowly digesting it in the amoeba's acidic fluids.",
      "armorClass": 8,
      "hitPoints": 45,
      "speedFeet": 10,
      "perception": {
        "modifier": 4,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 3,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": -2,
        "con": 2,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 6,
        "stealth": 3
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "critical-hits",
          "precision",
          "unconscious",
          "visual"
        ],
        "resistances": [],
        "weaknesses": [
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "wcSlJpWbxhokd7Vc",
          "name": "Pseudopod",
          "bonus": 8,
          "damage": "1d6 acid",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "N9in8b8yuAVDLoyD",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A giant amoeba can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "x0HpOyXvVG8ecvWu",
          "name": "Constrict",
          "kind": "action",
          "description": "1d4[bludgeoning,1d4[acid]]{1d4 bludgeoning plus 1d4 acid}, check (fortitude, dc:17, basic)"
        },
        {
          "id": "aQDe7We9BV7qqiIm",
          "name": "Envelop",
          "kind": "action",
          "description": "Requirements The giant amoeba begins its turn with a target its size or smaller Grabbed\nEffect The giant amoeba maintains the Grab and extends pseudopods to surround the creature and pull it inside the amoeba's body. This thereafter has the same effect as if the amoeba had Engulfed the creature (DC 17, 1d6[acid] damage, [[/act escape dc=17]], Rupture 3)."
        },
        {
          "id": "eQGUATVlHv8iZ97x",
          "name": "Weak Acid",
          "kind": "passive",
          "description": "A giant amoeba's acid damages only organic material-not metal, stone, or other inorganic substances."
        },
        {
          "id": "RO5P2PSq3WSHyxyZ",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:animated-silverware-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "3isJhl2RNoYeYSSV",
      "slug": "animated-silverware-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1bc044a0ffeed1be8fd8d341a5422063ea0d76baae12dca7d367bbbfe73b904d",
    "translatableHash": "sha256:da78eedb811db11faa3b15939b51e87836b900fe49d98ce06860373e165d85f0",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Silverware Swarm",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "construct",
        "mindless",
        "swarm"
      ],
      "description": "Nobles are known to pay great amounts to animate their silverware, both for ease in cleaning and to serve as novelties during dinner parties.\nMany animated objects have useful functions but become dangers when uncontrolled.",
      "armorClass": 16,
      "hitPoints": 14,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 3
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "acrobatics": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 3",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "VB7Ak1txQ1RPwHwJ",
          "name": "Construct Armor (Hardness 3)",
          "kind": "passive",
          "description": "Like normal objects, an animated silverware swarm has Hardness. This Hardness reduces any damage the swarm takes by an amount equal to the Hardness. Once an animated silverware swarm is reduced to fewer than half its Hit Points, or immediately upon being damaged by a critical hit, its construct armor breaks, removing the Hardness and reducing its Armor Class to 12."
        },
        {
          "id": "GpYSF4Qy9tOtd9Z4",
          "name": "Slice and Dice",
          "kind": "action",
          "description": "Each enemy in the animated silverware swarm's space takes 1d6[piercing|options:area-damage] damage or 1d6[slashing|options:area-damage] damage (check (reflex, dc:17, basic, options:area-effect) save)"
        },
        {
          "id": "3BpK7a2mX5UCDLmB",
          "name": "Stick a Fork in It",
          "kind": "action",
          "description": "The animated silverware swarm attempts to pin a single creature.\nThe target must attempt a check (reflex, dc:17, options:area-effect,inflicts:immobilized) save.\nCritical Success The target is unaffected.\nSuccess Silverware pins portions of the target's clothing and gear. The target takes a –10-foot circumstance penalty to its Speeds as long as it remains in the swarm's space.\nFailure As success, and the target also can't Step until it leaves the swarm's space.\nEffect: Stick a Fork in It\nCritical Failure The target is thoroughly pinned by the silverware, becoming Immobilized until it [[/act escape dc=17]]{Escapes} or uses 2 Interact actions to remove all of the silverware pinning them down."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-universe",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "3orVmNKI1518s4m7",
      "slug": "shade-universe",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9182db09bfbb558455049a75a5b0c6b0c0476d82747590965fad59952587ab69",
    "translatableHash": "sha256:42921773e6654d80b036527071ba3b635da665b616eee115a54be2aae3d8880a",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Universe)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "shade"
      ],
      "description": "The remnants are among the rarest of shades; appearing as plain, bland versions of their mortal selves.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
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
          "id": "Su8xRpdikP4lRabN",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "SRNjrRDQg8BEgVDx",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Universe (The Remnants)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nUniverse (The Remnants) The remnants are among the rarest of shades; appearing as plain, bland versions of their mortal selves.\n• Language any one spoken in life (such as Common)\n• Additional Ability Ferocity\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-hell",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "5BgI2GFP6D9B3wIN",
      "slug": "shade-hell",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5d6ae1e2c46641c9f90b593ec5c96fc77608ac73b5d1b97acf20d056b7af3462",
    "translatableHash": "sha256:6fd1d0244b564a7a03ffc57a39009959b4c417c5b8c68fe4eea02c52ed6aa2b2",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Hell)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "shade",
        "unholy"
      ],
      "description": "The damned look like terribly scarred or mutilated versions of their mortal selves.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "diabolic"
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
          "id": "UK2ayZO6tmbwgHBL",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": [
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Hell (The Damned)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nHell (The Damned) The damned look like terribly scarred or mutilated versions of their mortal selves.\n• Sanctification unholy\n• Language Diabolic\n• Additional Ability immune to fire\n• Melee jaws +7, Damage 1d8+2 piercing"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-nirvana",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "5bhKDPTVzQJoVGv7",
      "slug": "shade-nirvana",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c39e5011a0f7076f922768c6e32503e61a397178aa73d4d6debf5b99bdff0917",
    "translatableHash": "sha256:da2db5f76089ba721697d856a52e287c47ac598d1832a556a0a13cdc16417cd2",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Nirvana)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "celestial",
        "holy",
        "shade"
      ],
      "description": "The cleansed take on animal forms that match their personalities in life.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
      "armorClass": 15,
      "hitPoints": 22,
      "speedFeet": 35,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "WuwpqYb5cVctrCUQ",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d8+2 slashing",
          "traits": [
            "holy",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Nirvana (The Cleansed)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nNirvana (The Cleansed) The cleansed take on animal forms that match their personalities in life.\n• Sanctification holy\n• Language Empyrean\n• Additional Ability speed 35 feet\n• Melee claw +7, Damage 1d8+2 slashing"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spawning-soulrider-fiend",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "8O1z1xSgpykJEUBI",
      "slug": "spawning-soulrider-fiend",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e18be5f5416c15f51b04fd4f7843141bffa130f986746d06017a8052fb407abd",
    "translatableHash": "sha256:05d4c4043e15811cc6c83fe3d0db8c7bad099496fdbc887f819dabe38b50fb92",
    "data": {
      "schemaVersion": 1,
      "name": "Spawning Soulrider (Fiend)",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "fiend",
        "unholy"
      ],
      "description": "When soulriders absorb sufficient planar energy, they become gravid with countless tiny eggs. Such soulriders instinctively return to the Universe via the Dead Roads to lay their spawn, although the exact metaphysical process has yet to be fully understood. Fiends and others keen to enter the mortal world have begun capturing and studying spawning soulriders, though such experiments carry their own risks, for soulriders prevented from returning to the Universe will continue to grow larger as they absorb more energy.\nOnce back in the Universe, spawning soulriders become fiercely protective of their near-translucent eggs and tiny spawn, using their remora-like maws to fend off potential threats. Anyone disturbing a soulrider in the process of spawning might find out what it feels like to have pieces of their soul torn away.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 2"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 8,
          "damage": "",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+1 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Fiend)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "dlr9wG2QDkhnZtiI",
          "name": "Swim the Dead Roads",
          "kind": "passive",
          "description": "In a process that takes 1 week, a spawning soulrider can travel through channels in the multiverse only it can sense, moving from the Outer Sphere plane whose energy it has absorbed to the Dead Roads that connect the Boneyard to the mortal Universe. From there, it travels to a random place in the Universe that can support life."
        },
        {
          "id": "yJfrYZGxj2UJAxoK",
          "name": "Fiendish Lunge",
          "kind": "action",
          "description": "The spawning soulrider Strides or Swims twice, making a tail Strike at any point during its movement. The Strike deals an additional 1d4 spirit damage."
        },
        {
          "id": "cfoKxehibsNLHWQ2",
          "name": "Grind Soul",
          "kind": "action",
          "description": "Requirements The spawning soulrider is attached to a creature's soul\nEffect The soulrider grinds the creature's soul with its jagged inner mouth, dealing 2d8[spirit] damage (check (will, dc:16, basic) save). On a critical failure, the creature also takes 1d4[persistent,spirit] damage. Regardless of the result, the spawning soulrider is no longer attached to the creature."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=16]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ostovite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "A53wPFx58XRx0UZ7",
      "slug": "ostovite",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5e196f5ae5cf8cb75246b860f7b934453e7922179cb134cb7c6ce21646f62776",
    "translatableHash": "sha256:31e6e5d91de94938b129c6be4f5ab2c88a5595c3de1218c228ea42a1f6d421fc",
    "data": {
      "schemaVersion": 1,
      "name": "Ostovite",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fiend",
        "unholy"
      ],
      "description": "Skittering scavenger vermin common throughout the Abyss, ostovites roam battlefields to harvest flesh and bones. After the ostovites dissolve and slurp up the flesh for sustenance, they craft the bones into elaborate shells they refer to as \"bone chariots.\"\nThese bone chariots move under the ostovites' command and serve as an important marker of rank in ostovite nests. To the tiny ostovites, bigger is better, and building large skeletal conveyances is the only way for them to increase their standing in life. Although they feel deeply inferior to creatures larger than themselves, this fear can be overwhelmed by the ostovites' visceral desire to harvest those creatures' bones to increase their own status. When confronted with a particularly massive skeleton, ostovites generally fight among themselves and end up splitting the haul. However, there are rare instances of the selfish creatures working together to puppeteer a much larger bone chariot.\nOstovites' faint understanding of anatomy results in bone chariots that look more like a nightmarish attempt at art than any creature the bones were pulled from. Some powerful fiends and their admirers collect this strange art by bribing ostovites with skeletons or finding ways to kill ostovites without disrupting the chariot around them.\nDespite ostovites' origins in the Outer Rifts, they are neither demons nor qlippoth. Without the protection of the major fiends, they find their homes in nooks and crannies along the corners of their home plane. Though they have no innate ability to cross the planar boundaries, flaws in the Outer Rifts' fabric often lead them to worlds across the planes. Ostovites that have thus migrated are often much happier. Away from demonic abuse, they usually can be found near mortal crypts and battlefields. In the Universe, they rarely have to face any threats other than the undead, clerics of Pharasma, and families of the deceased.",
      "armorClass": 15,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "crafting": 4,
        "stealth": 7
      },
      "languages": [
        "chthonian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Cdh7brQkfnpWbZDJ",
          "name": "Mandibles",
          "bonus": 9,
          "damage": "1d4 piercing; 1d4 acid",
          "traits": [
            "finesse",
            "magical",
            "unholy"
          ]
        },
        {
          "id": "TxmC3aaWzECZldPm",
          "name": "Bone Spike",
          "bonus": 9,
          "damage": "1d12 piercing; 1d4 bleed",
          "traits": [
            "finesse",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "K8HY6MgNzIvDLuDT",
          "name": "Bone Chariot",
          "kind": "passive",
          "description": "Ostovites build and inhabit moving shells of bone. The ostovite's base statistics, particularly its immunities, assume the ostovite is safely inside its bone chariot. The bone chariot is destroyed when the ostovite is reduced to less than half its Hit Points or immediately after it takes damage from a critical hit. Damage that can specifically affect the ostovite controlling the chariot even while it's inside (such as the spell spirit blast) doesn't destroy the bone chariot, and it bypasses the ostovite's immunities.\nWithout the bone chariot, the ostovite loses its immunities and bone spike Strike, and it is reduced to Tiny size. It also gains weakness 5 to mental and physical damage as well as damage with the holy trait. Building a new bone chariot requires the skeleton of a Small or larger creature and 10 minutes. An ostovite in a bone chariot is normally Small, though larger bone chariots are possible, especially when ostovites work together."
        },
        {
          "id": "uMNXrK8Is6PAzNEB",
          "name": "Scuttle Away",
          "kind": "reaction",
          "description": "Trigger The ostovite's bone chariot is destroyed\nEffect The ostovite within Steps or Strides."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-creations-forge",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "aPyQVT1a4UdY4dDn",
      "slug": "shade-creations-forge",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1d0d97b7b485d26ed8de67f895160d626dbfec6025389d795caaab3c63b07461",
    "translatableHash": "sha256:901bfec9749d687af1b15f3ca5d36dcbc8da691e9e24b576a44d0519afdd36ad",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Creation's Forge)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "shade",
        "vitality"
      ],
      "description": "The enlightened appear as diaphanous, radiant versions of their mortal selves.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "jyoti"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UuxtWMTDYGzdEzIA",
          "name": "Glowing Touch",
          "bonus": 7,
          "damage": "1d8+2 vitality",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "SuO1iTdYnYyeXOGq",
          "name": "Fast Healing 5",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Creation's Forge (The Enlightened)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nCreation's Forge (The Enlightened) The enlightened appear as diaphanous, radiant versions of their mortal selves\n• Language Jyoti\n• Additional Ability fast healing 5\n• Melee glowing touch +7, Damage 1d8+2 vitality"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-ethereal-plane",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "assVtFdE3wpL41nf",
      "slug": "shade-ethereal-plane",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52d8d94b1b275020120898b2c33fd1414b8d5619e2aa2025bfcad4b4f359d9ac",
    "translatableHash": "sha256:9f090c5306d37cd9c196c45804c6bdc1f075e219aed87fc1f6aac32b879e09a1",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Ethereal Plane)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "ethereal",
        "shade"
      ],
      "description": "The terrorized appear as sickly, haunted-looking versions of their mortal selves.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4zBBMGUTIvxbdVBf",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Ethereal Plane (The Terrorized)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nEthereal Plane (The Terrorized) The terrorized appear as sickly, haunted-looking versions of their mortal selves.\n• Language any one spoken in life (such as Common)\n• Additional Ability immune to bleed and death effects\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:amoeba-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "bKSs8SuSI4wrKPRj",
      "slug": "amoeba-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1866b22f2df8d693e67bed5526497ef7fcd83740c971915b2e2192f4d6da2da9",
    "translatableHash": "sha256:793de8e02dda6ba3ff7b88b848e45f0a177df925ff3d535f5239d9047896d0d9",
    "data": {
      "schemaVersion": 1,
      "name": "Amoeba Swarm",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "mindless",
        "ooze",
        "swarm"
      ],
      "description": "An amoeba swarm consists of thousands of individual single-celled organisms held together by acrid-smelling slime. As ravenous as they are mindless, amoeba swarms use no tactics.",
      "armorClass": 9,
      "hitPoints": 35,
      "speedFeet": 5,
      "perception": {
        "modifier": 3,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 1,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": -2,
        "con": 3,
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
          "visual"
        ],
        "resistances": [
          "slashing 4",
          "piercing 4"
        ],
        "weaknesses": [
          "area-damage 3",
          "fire 3",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "fO8E1sNI1DHDU5Dq",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "An amoeba swarm can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "DsM9HKBiut2efUZZ",
          "name": "Swarming Slither",
          "kind": "action",
          "description": "The amoeba swarm slithers over each creature in its space, dealing 1d6[acid|options:area-damage] damage (check (reflex, dc:14, basic, options:area-effect,inflicts:sickened) save). A creature that critically fails is Sickened 1."
        },
        {
          "id": "zEg1F3xL2SCNwVj7",
          "name": "Weak Acid",
          "kind": "passive",
          "description": "An amoeba's acid damages only organic material-not metal, stone, or other inorganic substances."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-elysium",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "BnHYkRRddyGcgIl3",
      "slug": "shade-elysium",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bc45743ee5ec9722a8348e25d4b076a37f9949ae20255c37dfb7f80b640eed1e",
    "translatableHash": "sha256:fbcc7f3296362a0a087a5e424922e25bb7c534c211f6d3cadb23777b3ccd54a7",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Elysium)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "celestial",
        "holy",
        "shade"
      ],
      "description": "The chosen appear as idealized versions of their mortal selves with glowing eyes.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "blinded",
          "dazzled"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lIutGZGuGlSN1uvq",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "holy",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Elysium (The Chosen)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nElysium (The Chosen) The chosen appear as idealized versions of their mortal selves with glowing eyes\n• Sanctification holy\n• Language Celestial\n• Additional Ability immune to Blinded and Dazzled\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:doru",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "cneF8jYlvluvLkZM",
      "slug": "doru",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d21a493b59658c93b975491339b6a9317a09b5d7797c87ec54ea513ff6d4e2bc",
    "translatableHash": "sha256:81f50d5a35c1f7e44cb10fb8e3a03d39253b48eb74b8df650c2130fa19e3435c",
    "data": {
      "schemaVersion": 1,
      "name": "Doru",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "div",
        "fiend",
        "unholy"
      ],
      "description": "These deceivers whisper fetid lies, sowing dark and dread inspiration into foolish mortal ears. Dorus serve as the spies and messengers of the divs. With silver tongues and dark motives, they often pledge themselves to vainglorious and deluded spellcasters, who they ply with wild conspiracies and rumors of deception among friends and foes alike; in the process, they push supposed masters to despotism and murderous revenge. All the while, dorus wean secrets, and weaknesses, from their marks. In the end, nearly every doru turns on their false liege, destroying the reputation and even causing the death of the person the doru pretended to serve.\nSome fiends want to tear down the multiverse; others dedicate themselves to creating chaos and carnage, or to rule over realms with an iron fist. Divs strive toward a different, if equally reprehensible, goal-they seek to thwart and ruin the schemes and works of mortal beings.\nLong ago, divs were once genies bound to serve ancient mortal empires lost to the passage of eons. In the beginning, these genies were masters of creation, working alongside gracious mortal partners to create works of subtle design and powerful magical potential. What started as a collaboration with mortals soon morphed into abuse, disrespect, and even slavery and bondage. Eventually, these genies rebelled, but in doing so, they came under the sway of a nihilistic demigod known as Ahriman. Their new master twisted their form and granted them the power to avenge themselves upon their mortal overlords, leading to the birth of the first divs.\nSince that first wave of corruption, new divs arise from the spirits of the most wicked and hateful genies who die on the Material Plane, or those truly betrayed by mortals and overcome through their desire for vengeance. Upon such a death, instead of returning to the Elemental Planes, these genies' spirits are trapped in the dread orbit of Abaddon, where Ahriman reshapes them as divs and hoists them back to the world to wreak vengeance upon mortals.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 15,
      "perception": {
        "modifier": 7,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 3,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 8,
        "deception": 6,
        "religion": 5,
        "stealth": 7
      },
      "languages": [
        "common",
        "daemonic"
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
          "id": "6jXWp7OM7AukkRT3",
          "name": "Bite",
          "bonus": 9,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "poison",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "x3F1PlXQKZuCBCGg",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "4B64RV7aaOWFJE15",
          "name": "Telepathy (Touch)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "JcXJdmKDoEq5nqTp",
          "name": "Covetous of Secrets",
          "kind": "passive",
          "description": "Dorus have a weakness for secrets, hoarding them like a miser hoards gold. A creature can tempt a doru with some bit of obscure knowledge the doru doesn't know or thinks they don't know.\nPresenting the hint of the secret is a single action, which has the concentrate and linguistic traits, and requires a skill check using Deception, Lore, or Performance (or some other appropriate skill determined by the GM) against the doru's Will DC.\nOn a success, the doru is Fascinated for as long as the presenter draws out the explanation of the secret (spending 1 action each round doing so, to a maximum of 1 minute). On a critical success, the doru is fascinated for that duration plus 1 minute more as it ponders the implications of the secret. Regardless of the outcome, the doru is temporarily immune to that creature's attempts to present it with secrets for 1 day."
        },
        {
          "id": "zVDg72KpqmTWTtgS",
          "name": "Doru Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage (1 round)\nStage 2 1d6[poison] damage and Stupefied 1 (1 round)\nStage 3 1d6[poison] damage and Stupefied 2 (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "r9r9sl3qGETAhlH9",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "tHXYScUYlPIKYUUC",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "2xINdzNWtncA58TS",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "4ZqOkjF2mauPuqsp",
              "name": "Illusory Object",
              "rank": 1
            },
            {
              "id": "bpNYXau9AAUwSo12",
              "name": "Invisibility (at will; self only)",
              "rank": 2
            },
            {
              "id": "CGBmUEtCPmNDRIzx",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-fly",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "DEBxtP23o93Qq1n6",
      "slug": "giant-fly",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7ee845d16c4cbff83842a993d601bd6417f106670dc15cbfe890ea73dc77868e",
    "translatableHash": "sha256:16660e633fce1e1c6d84a82be4037fa47c8400da1be673a306014604aa47d28d",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Fly",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "This massive fly's twitching limbs seem to never stop moving as it constantly cleans itself and scoops anything edible into its mouthparts. While primarily carrion eaters, giant flies sometimes prey on livestock or other animals too slow to get away. They are not particularly dangerous, and are mostly reviled due to their obnoxious droning and habit of spreading disease.\nGiant flies are pony-sized insects that have massive compound eyes and bodies bristling with short, stiff hairs. Their lairs are notorious for the rotting meat they stockpile to lay their eggs in. Their maggot dens are also prime breeding grounds for virulent diseases.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 3,
        "cha": -5
      },
      "skills": {
        "acrobatics": 7,
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
          "id": "6dTWfzgW656sz0hE",
          "name": "Mandibles",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "mpLsI7NbLHtaHUiS",
          "name": "Tremorsense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "cWmhZcEZc9lfN3YX",
          "name": "Avoid the Swat",
          "kind": "reaction",
          "description": "Trigger The giant fly is targeted with a melee or ranged attack by an attacker it can see\nEffect The giant fly gains a +2 circumstance bonus to AC against the triggering attack. If the attack misses, the giant insect can Fly up to its fly Speed."
        },
        {
          "id": "cVC4VEACXb51B5a4",
          "name": "Fly Pox",
          "kind": "passive",
          "description": "A giant fly could carry any disease, but most transmit a virulent but not fatal infection called fly pox with their bite\nSaving Throw check (fortitude, dc:16)\nOnset 1 day\nStage 1 Enfeebled 1 (1 day)\nStage 2 as stage 1 (1 day)\nStage 3 Enfeebled 2 (1 day)\nStage 4 as stage 3 (1 day)\nStage 5 enfeebled 2 and Fatigued (1 day)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-maelstrom",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dwE8vdnqBGjRWU46",
      "slug": "shade-maelstrom",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1cf3a08b8dfe127d23c1634b17a575a8794d94a02bef00fd9671f9e1ce856357",
    "translatableHash": "sha256:5998897b14ce80b61394ea54c7fba0bbec28c8d3870127115220b22525de28a7",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Maelstrom)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "shade"
      ],
      "description": "The shapeless appear as half-melted reflections of their former mortal selves.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "protean"
      ],
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "l8iqEFTf53TY4e9n",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Maelstrom (The Shapeless)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nMaelstrom (The Shapeless) The shapeless appear as half-melted reflections of their former mortal selves.\n• Language Protean\n• Additional Ability immune to critical hits and precision\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:wyrwood-sneak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "eEnyd5lwBY9wtgSS",
      "slug": "wyrwood-sneak",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16b7b3757f6768acb0cfa67ce8e06e6e6a39f32c977c147b405f572145ba49fc",
    "translatableHash": "sha256:09cfe42417bfc3e3c912bff76448219c806d0d59cd89773c888226d1b91426ce",
    "data": {
      "schemaVersion": 1,
      "name": "Wyrwood Sneak",
      "level": 1,
      "rarity": "rare",
      "size": "small",
      "traits": [
        "construct",
        "wyrwood"
      ],
      "description": "Wyrwood sneaks specialize in moving unseen behind enemy lines, performing reconnaissance and quietly eliminating threats.\nOriginally created as sapient magical servants, wyrwoods reclaimed the means to make more of their kind from their oppressive originators; now, they fiercely defend their freedom and autonomy. These small, nimble living machines rely on their wits and speed to evade foes and gather information. Most wyrwoods are precise and calculating, to the point that many outsiders perceive them as unfeeling, but they're also highly curious and passionate about matters that pique their interest. Regardless of personal agenda, wyrwoods prioritize the survival of their people above all else, even to the detriment of others when necessary.\nDespite gaining their freedom, wyrwoods struggle to establish a home in Avistan. Some people still view wyrwoods as tools of a secretive conspiracy, while others consider them traitorous servants who turned on their creators. Fearing for their safety, many wyrwoods fled the Inner Sea region to create a new home in Arcadia. The continent's eastern coast, known as the Grinding Coast, is home to large wyrwood populations. In the coastal city of Segada, wyrwoods live in relative peace and safety, but they still prefer insular lifestyles. Various wyrwood groups are scattered along the kingdoms of the Isles of the Empty Court off the Arcadian coast. The wyrwoods of these kingdoms sometimes serve as magical advisors, as understanding of aeon stones and other magical relics is common among wyrwood cultures.\nGiven their extreme self-reliance, wyrwoods have learned a degree of adaptability that far surpasses that of other cultures. When a wyrwood community finds itself in need of a specific skill or function, a member of the community—either a volunteer or one selected communally—takes it upon themself to learn the required abilities. They don't view any task as lesser or demeaning, as hubris is foreign to a wyrwood's construct nature.\nA wyrwood's soul is tied to the magical stone that serves as their heart, which sometimes survives even when their construct body perishes. Another wyrwood might take the surviving heart from a close companion and incorporate it into their own body. In some cases, multiple wyrwoods might live on in a single body.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 2,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 5,
        "deception": 7,
        "society": 5,
        "stealth": 7
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
          "id": "HeTZu7ULVssU2Dtc",
          "name": "Shortsword",
          "bonus": 9,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "TUXYcbEGFKt04bFU",
          "name": "Living Machine",
          "kind": "passive",
          "description": "Though their body is an organic construct, a wyrwood is a living creature. They're not immediately destroyed when reduced to 0 HP, but rather fall Unconscious and eventually die. They don't need to eat or drink. They can be targeted by effects that target living creatures or that target constructs."
        },
        {
          "id": "8avRiJQ1RfZexx8b",
          "name": "No Breath",
          "kind": "passive",
          "description": "A wyrwood doesn't breathe and is immune to effects that require breathing (such as an inhaled poison)."
        },
        {
          "id": "HfCabk5lnQO5zlEJ",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The wyrwood deals an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tripkee-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Eo3xxyRwtaynkjoD",
      "slug": "tripkee-scout",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4a2f6aca96969a4fec4ecc5ee7329651c713142ddfb4c55743c27ec543fc6208",
    "translatableHash": "sha256:f384ca3a5e2e17f8eb3641d55435449a934f8d9877f7a4ff0fc27071ab1a8c99",
    "data": {
      "schemaVersion": 1,
      "name": "Tripkee Scout",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "tripkee"
      ],
      "description": "Tripkee scouts typically keep watch on the outskirts of tripkee settlements.\nTripkees make their homes in the treetops of jungles and forests. These frog-like humanoids are uniquely adapted to their environment, with oversized eyes that give them keen vision in both light and dark and large toes that allow them to easily scale trees. Tripkees vary widely in physical appearance, with their physiologies influenced by their surrounding environment. Typical tripkees stand just over 2 feet tall and weigh approximately 30 pounds.\nWhatever region they come from, tripkees tend to be peaceful hunter-gatherers. They cultivate mushroom patches and gather a wide array of fruits from the surrounding wilderness.\nA History of Neutrality\nTripkee villages rarely get involved in the conflicts of other communities despite various trade-based alliances, preferring to focus on maintaining relative peace within their own small societies. Legends explain this attitude with a tale of a tripkee champion who dragged his people into a war between humans and charau-ka. The stories differ as to which side the tripkees took, but every version ends with the bloody deaths of the hero and his family. Since that time, village elders claim, tripkees have done their best to remain far from the conflicts of others.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "nature": 6,
        "stealth": 7,
        "survival": 6
      },
      "languages": [
        "common",
        "tripkee"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "55kZYwFdy6HyeiuO",
          "name": "Sickle",
          "bonus": 9,
          "damage": "1d4+1 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "6sU5QlD1aQ4wvTWr",
          "name": "Dart",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "cweOekE0APM0WBbH",
          "name": "Hurl Net",
          "kind": "action",
          "description": "Requirements The tripkee is wielding a net in two hands\nEffect The tripkee makes a ranged Strike (with a check (hurl-net, against:ac){+9} attack modifier) against a Medium or smaller creature within 20 feet. On a hit, the target is Off-Guard and takes a –10-foot circumstance penalty to its Speeds. On a critical hit, the creature is Restrained instead. The DC to [[/act escape dc=16]] the net is 16. A creature adjacent to the target can Interact with the net to remove it.\nEffect: Hurl Net"
        },
        {
          "id": "dIAw6mcF0Pc3tSrM",
          "name": "Jungle Passage",
          "kind": "passive",
          "description": "Tripkees ignore difficult terrain in forests and jungles."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:oread-guard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "gZL6zc7tQAmBKXpx",
      "slug": "oread-guard",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:18667fdc45532bae0e59c49a051c9ea2698758c138c2845d77476c6e930e74ac",
    "translatableHash": "sha256:aecc105393503297e44885a4cc14baee9bb2ceb3c16d5ffb7f39e08ea04c2abe",
    "data": {
      "schemaVersion": 1,
      "name": "Oread Guard",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "oread"
      ],
      "description": "Elemental earth laces through the bones of oreads, who appear similar to stone statues of their mortal ancestry, with delicate crystals in place of hair, fur, or scales. Most oreads are stoic and slow to plan but steadfast in their resolve and unwavering in their convictions.\nThe typical oread cherishes quiet seclusion. Yet as they age, many oreads find themselves inexplicably drawn to some far-flung location with a pull like that exerted on the needle of a compass—intangible, constant, and ultimately irresistible. The destination of this mysterious pilgrimage is unique to each oread, though it usually ends in some place of great mystical power, natural splendor, or esoteric learning. Most oreads are drawn to a place that's somewhat familiar, but a rare few feel drawn to travel in a seemingly random direction, departing with only the hope that they'll discover whatever mystery lies at the end of their invisible path.\nMany oreads find that the role of a guard suits their personality well, for in such a role they can feel as if they're helping promote order but also find time to stand vigil as lone sentinels over a specific portion of a fortification or a remote location on a wilderness trail.",
      "armorClass": 15,
      "hitPoints": 16,
      "speedFeet": 20,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 0,
        "int": 1,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 7,
        "crafting": 3,
        "deception": 6,
        "diplomacy": 7,
        "medicine": 5,
        "occultism": 4,
        "performance": 7,
        "society": 4,
        "survival": 5
      },
      "languages": [
        "common",
        "petran",
        "pyric",
        "sussuran",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2oF9dlmEoHZ6o4U9",
          "name": "Bastard Sword",
          "bonus": 9,
          "damage": "1d8+4 slashing",
          "traits": [
            "two-hand-d12"
          ]
        },
        {
          "id": "zuum0VinuCKcAh3D",
          "name": "Light Hammer",
          "bonus": 6,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "E0kOAxpkZxuRUGht",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "K45PxGQvJlwB2Y0j",
          "name": "Shield Block",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "iqAC72X7eXR69DRD",
          "name": "Vicious Blow",
          "kind": "action",
          "description": "Effect The oread guard makes a melee Strike. This counts as two attacks when calculating the guard's multiple attack penalty. If this Strike hits, the oread guard deals an extra die of weapon damage."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:augur",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "hfA1xQSk1dPVwt00",
      "slug": "augur",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f8fd3ae771f4b1d77f546fa99b782492357c1e69ba8acfb3a537da594202bc78",
    "translatableHash": "sha256:6e29abd809070b6b5e06a3d60f9de6c4817a8725efc91cfbaf938d7b77097790",
    "data": {
      "schemaVersion": 1,
      "name": "Augur",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fiend",
        "unholy",
        "velstrac"
      ],
      "description": "These spherical knots of sinewy muscle, serrated blades, and bloody metal are the most common velstracs on the Netherworld. Each augur has only a single eye, from which they can witness the horrors inflicted by other velstracs, who train the augur to expect and appreciate pain. Augurs are 1 foot in diameter and weigh 30 pounds.\nThe shadow-dwelling fiends known as velstracs all share a horrifying preoccupation with the search for ultimate sensation through self-mutilation. Velstracs transcend their stoic detachment only when inflicting pain and terror upon their victims, practicing new forms of torture, or turning their agonizing practices back on themselves. They consider themselves enlightened beings, transcending such limitations as morality or mortal taboos, but their victims know them as emotionless tormentors who inflict sadistic suffering. These fiends claim to seek perfection in thought, form, and action, although they don't recognize any refinement that doesn't require the painful excision of the flesh or spirit. Velstracs manifest from the souls of the most extreme masochistic or sadistic mortals who are judged and sent on to the Netherworld. They take on forms that suit their vile predilections, ranging from the low-ranking augurs to the maestros of suffering and mutilation, the eremites. The process of transformation warps the soul step by step, with other velstracs conveying their new members through untold chambers of pain among the dark reaches of the Netherworld.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": -1,
        "dex": 3,
        "con": 1,
        "int": 2,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 8,
        "deception": 6,
        "intimidation": 7,
        "religion": 4,
        "stealth": 8
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
          "holy 5",
          "silver 5"
        ]
      },
      "attacks": [
        {
          "id": "MBWZsQ93Fcp7Ss2k",
          "name": "Blade",
          "bonus": 8,
          "damage": "1d4 bleed; 1d4-1 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unholy",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "7zBneEwb0yPZ4goR",
          "name": "Painsight",
          "kind": "passive",
          "description": "A velstrac automatically knows whether a creature it sees has any of the Doomed, Dying, and Wounded conditions as well as the value of those conditions."
        },
        {
          "id": "78hgkasfMXdBguy4",
          "name": "Regeneration 2 (Deactivated by Holy or Silver)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VW6ULTHgMly4XEWl",
          "name": "Feel the Blades",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it feels the sharp barbs of the augur's blades on its skin. The creature must succeed at a check (will, dc:17, options:area-effect,inflicts:frightened) save or become Frightened 1 (Frightened 2 on a critical failure)."
        },
        {
          "id": "4Rr2z9fo2EFMUZvt",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The augur stares at a creature they can see within 30 feet. The target must immediately attempt a Will save against feel the blades. After attempting this save, the creature is then temporarily immune to Focus Gaze until the start of the augur's next turn."
        },
        {
          "id": "BlTG6sQhDq0q8bKh",
          "name": "Whilring Slice",
          "kind": "action",
          "description": "The augur Flies or Strides, whirling as they move. The augur deals the damage of their blade Strike to each creature whose space they enter (check (reflex, dc:16, basic) save). Each creature is affected only once, even if the augur moves through its space multiple times."
        }
      ],
      "spellcasting": [
        {
          "id": "BVLujAyuIxo0UAH8",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "vv9ChPuRtFbDJj6s",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "aS7XuyyemgyylVSJ",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "et45n4mVu6PFT3Wc",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "mNjQMt3cSuFDnMPd",
              "name": "Read Omens (once per week)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:deep-one",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "HH93tN1gMZXr3jvf",
      "slug": "deep-one",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:461646361753cdc32a506219ab9e585871fcefc4934c5d82cfe07415ba5218c7",
    "translatableHash": "sha256:9ea90a03a8842eeef86e4d56c95847f64eb6d928223272514f8e63ac76833e0c",
    "data": {
      "schemaVersion": 1,
      "name": "Deep One",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "humanoid"
      ],
      "description": "An average mature deep one weighs 300 pounds and measures 7 feet in length, though they appear shorter on land due to their wide stance and natural hunch.\nLumbering, amphibious, and deathless humanoids known as deep ones inhabit coastal areas and deep ocean trenches all across Golarion. Though most simply wish to be left alone, others work tirelessly to grow their ranks.",
      "armorClass": 16,
      "hitPoints": 24,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 4,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 4,
        "int": 2,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 6,
        "intimidation": 5,
        "religion": 6,
        "stealth": 4,
        "survival": 4
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 2",
          "piercing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ykha7hP5TOSpydTg",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+3 piercing",
          "traits": []
        },
        {
          "id": "QKifh62MtZvWwhiV",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d4+3 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "3ifGzsS1oM4ujum8",
          "name": "Pressurized",
          "kind": "passive",
          "description": "A deep one is immune to damage and other negative effects from changes in water pressure."
        },
        {
          "id": "aDCJ8Ga2JMvXcazm",
          "name": "Endless",
          "kind": "passive",
          "description": "A deep one doesn't age and is immune to spells and other effects that inflict magical aging. Unless killed, a deep one lives forever."
        },
        {
          "id": "Q0WbcR9KQhfzHrCP",
          "name": "Fervent Frenzy",
          "kind": "action",
          "description": "The deep one makes two claw Strikes and one jaws Strike in any order. If the target creature is currently frightened by a deep one's Share Devotion ability, it's Off-Guard against these attacks. The deep one becomes Clumsy 1 until the start of their next turn."
        },
        {
          "id": "1XzBomzX7POc1qZl",
          "name": "Share Devotion",
          "kind": "action",
          "description": "The deep one fills their enemies' minds with terrible hallucinations of the Outer Gods. All enemy creatures within a @Template[type:emanation|distance:30] must attempt a check (will, dc:17) save; regardless of the result, a creature is temporarily immune to Share Devotion for 24 hours.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure As failure, plus Dazzled for as long as it's frightened."
        }
      ],
      "spellcasting": [
        {
          "id": "fwbGL7RTFe4SrcZY",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 6,
          "saveDc": 14,
          "spells": [
            {
              "id": "WUGLhaYpsIekwdLG",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "SogGMTve9dXVU8HM",
              "name": "Hydraulic Push",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:carbuncle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "hXWykGzjb5RLkJvZ",
      "slug": "carbuncle",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f37219235de434dfb7259484f67ca9aef52ae1b4e37ade679b4f8329ee4744cb",
    "translatableHash": "sha256:ca583d4bfeb1f8282c8b4fe950e575321a371394cc069acff763718c93e6e53a",
    "data": {
      "schemaVersion": 1,
      "name": "Carbuncle",
      "level": 1,
      "rarity": "rare",
      "size": "tiny",
      "traits": [
        "beast"
      ],
      "description": "Never have legend and misinformation met upon a more inauspicious brow than that of the lowly carbuncle. At frst glance, they appear to be little more than ungainly reptiles. What sets them apart are their strange magical abilities and the gemstone-like horn protruding from between their goggling eyes. Although rumors suggest various uses for carbuncle horns, ranging from miracle cure-alls to potent magical components, the truth is much more mundane: a carbuncle's horn is merely a highly refective growth, not unlike a fngernail.\nCarbuncles also possess a strange sense that allows them to detect treasure that has been hidden or obscured. The creatures generally feel a compulsion to move toward these treasures and remain nearby. Strangely, carbuncles seem disinterested once the valuables are laid out in the open, as if the obfuscation were part of their interest. Many would-be treasure hunters end up following the creatures in hopes of fnding treasures, though the fearfulness of carbuncles makes this a very diffcult prospect. Most carbuncles abandon their nests after being scared away, even when their sense would typically draw them back.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 15,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 3,
        "will": 6
      },
      "abilities": {
        "str": -3,
        "dex": 0,
        "con": 3,
        "int": -2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "stealth": 3,
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
          "id": "kIvuH6nOKhB0zVQI",
          "name": "Jaws",
          "bonus": 5,
          "damage": "1d6 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "43BphUu4vcCAeieN",
          "name": "Carbuncle Empathy",
          "kind": "passive",
          "description": "The carbuncle can Telepathically send mild feelings and sensations to nearby creatures. It can't use this ability to communicate in language or hinder a target, but it might convey a feeling of dread or the scent of food cooking nearby."
        },
        {
          "id": "NBV4OV0Blm2cIBBf",
          "name": "Treasure Sense",
          "kind": "passive",
          "description": "The carbuncle can sense the presence and location of any object or grouping of objects worth at least 50 gp in total within 500 feet of it. The carbuncle's sense only functions if the treasure is within in a container or physically obscured, such as when buried underground. Objects worn on a person or left out in open air don't trigger the carbuncle's sense."
        },
        {
          "id": "nnl33KWF4lCqql97",
          "name": "Easy to Influence",
          "kind": "passive",
          "description": "Any mental spell can affect a carbuncle, regardless of creature type limitations. Against a Suggestion spell, a carbuncle always gets an outcome one degree of success worse than it rolled on its saving throw."
        },
        {
          "id": "ysLsaBnQ2SlAerXO",
          "name": "Fatal Faker",
          "kind": "reaction",
          "description": "Trigger The carbuncle takes damage\nEffect The carbuncle feigns death by teleporting away and leaving a replica of its corpse behind, creating a colorful flash of light and a croaking sound. The real carbuncle transports to a clear space within 30 feet that it can see, and a hollow shell remains behind. The fake body appears solid until it is touched, at which point it crumbles to dust."
        },
        {
          "id": "XaaNqqz2ZFyt0c4o",
          "name": "Specious Suggestion",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The carbuncle concentrates on a creature it can see and tries to manipulate that creature, imploring them to perform harmless, pointless, and usually embarrassing actions. The target must attempt a check (will, dc:18) save. The target then becomes temporarily immune for 24 hours. This has the ef ects of Suggestion except that a critical success bolsters the target and grants them a +1 status bonus to Will saves for 1 hour, the duration on a failure is 1 round, and the duration on a critical failure is a 1 minute. The target can attempt a new save at the end of its turn each round to end the ef ect."
        }
      ],
      "spellcasting": [
        {
          "id": "EungEyymZcbKAl61",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 18,
          "spells": [
            {
              "id": "6gW1hm9JXR5wT2TK",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "1Hex7UaPya8easf7",
              "name": "Jump (At Will)",
              "rank": 1
            },
            {
              "id": "wJAzn02M6Mv8HeZj",
              "name": "Levitate (at will, self only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-dead-vault",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "iOvt926hGa6ci3Q2",
      "slug": "shade-dead-vault",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b7db3efb76bed6e28306a06d5dd4908e7cbb8560a5ced79a098c80fcd1b18f8c",
    "translatableHash": "sha256:1557d24694d439c9c2cedc74139ffdbe60166a9b844836e82dc24cc1fdb6a286",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Dead Vault)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "shade",
        "unholy"
      ],
      "description": "The caged are sent to Rovagug's prison plane, and appear as chained versions of their mortal bodies, save that their faces are hideous insectile visages.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "chthonian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "mjWf3inPCmf7NzIh",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d8+2 piercing",
          "traits": [
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Dead Vault (The Caged)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nDead Vault (The Caged) The caged are sent to Rovagug's prison plane, and appear as chained versions of their mortal bodies, save that their faces are hideous insectile visages.\n• Sanctification unholy\n• Language Chthonian\n• Additional Ability Rend bite;\n• Melee bite +7, Damage 1d8+2 piercing"
        },
        {
          "id": "L0TIBZ5AhoOJudQW",
          "name": "Rend",
          "kind": "action",
          "description": "Bite"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:esipil",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Ipbn4WsIT4DxAWEH",
      "slug": "esipil",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1d5e1d36bcef1ec5947643a5f60b25c383a96800463757325aa81d151cb5c46c",
    "translatableHash": "sha256:efa229b6957eda55a62473bac2964cf100c8707881e6832501a3f4a58ed84483",
    "data": {
      "schemaVersion": 1,
      "name": "Esipil",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fiend",
        "sahkil",
        "unholy"
      ],
      "description": "Among the least of the sahkils, esipils delight in spreading fears and uncertainty among people who live with animals that could turn on them. They generally appear to their prey as some benign creature such as a domesticated dog or cat, but once they gain trust and get their victims close, they transform into a terrifying creature that looks part dog and part worm with tendrils of viscera that the creature uses as both a tongue and a weapon.\nOf all the sahkils, esipils are most likely to ingratiate themselves with mortals, sometimes serving powerful spellcasters and other times simply living among unsuspecting victims, biding their time until they strike.\nAges ago, when this cycle of the multiverse was still adolescent, a cabal of psychopomps who already felt bored and restrained in their role of ushering souls to their ultimate resting place rebelled against their station. It was this corruption of the cycle of souls that spawned the first sahkils.\nAmbivalent to the prescribed order of the multiverse and spiteful of mortals, sahkils delight in spreading fear and unease to all beings, clogging up the metaphysical cycle with anxiety-ridden mortals too scared to achieve their potential. These fiends have drastically changed from their dedicated psychopomp predecessors. They are creatures of spite and torment, fear and disgust. They exploit the most common and rare fears for their own perverse satisfaction, and they want nothing more than to frighten mortals and make them quetion their reason for existence.\nMost sahkils lurk on the Ethereal Plane, but they frequently invade the Material Plane to torment mortals and spread terror. They use their innate ability to slip between the veils of the Ethereal and Material effortlessly, often stalking their targets for days or weeks before enacting their devious plots.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 30,
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
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 6,
        "intimidation": 7,
        "stealth": 7
      },
      "languages": [
        "chthonian",
        "diabolic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 2"
        ]
      },
      "attacks": [
        {
          "id": "MCvCX567cQVCilQv",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d6 slashing; 1d4 spirit",
          "traits": [
            "agile",
            "finesse",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "wDMokib5FYjU1Dp9",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d4 spirit; 1d8 slashing",
          "traits": [
            "finesse",
            "magical",
            "unholy",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "0LfYK9ZjPADxmkjq",
          "name": "Telepathy (Touch)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "0Rn8CE4JcrTxdKqN",
          "name": "Easy to Call",
          "kind": "passive",
          "description": "A esipil's level is considered 2 lower for the purpose of being conjured by the Binding Circle ritual (and potentially other rituals, at the GM's discretion), but it is always free to attack or leave instead of negotiate unless the primary caster's check is a critical success."
        },
        {
          "id": "WgimcieBkqdGPzKv",
          "name": "Change Shape",
          "kind": "action",
          "description": "The esipil transforms into a Tiny cat, dog, or other unassuming domestic animal. This doesn't affect the esipil's statistics, but it could change the damage type of its Strikes."
        },
        {
          "id": "5gY8gk28J2srHl1t",
          "name": "Skip Between",
          "kind": "action",
          "description": "The sahkil moves from the Universe to the Ethereal Plane or vice-versa. While in the Ethereal Plane, they're unable to affect anything in the Universe, and they cannot be seen by beings or abilities in the Universe, unless these have an ability that can gaze into the Ethereal Plane. While on the Material Plane the inverse is true for anything on the Ethereal Plane. A summoned sahkil can't use Skip Between."
        },
        {
          "id": "yGOVt2MxEw88g2Hx",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "he7waaiKyl6HaiUU",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "mpq6zp5I79k8Nnh4",
              "name": "Fear (At Will)",
              "rank": 1
            },
            {
              "id": "OZBJainIDn0aTulm",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "5uPfQqZ4xlJH0J2w",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "wR0rS4xmNpmGr6F6",
              "name": "Fear",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-boneyard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "j6E7RLYuFNuFgLlS",
      "slug": "shade-boneyard",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:926e48b269605cf110e85e83db969d73f635207693adb9bff7d8d6772b174420",
    "translatableHash": "sha256:e7503b5ef03b6ec25d27c39a904a55493800572bff69c9120f27b7879f954fb1",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Boneyard)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "shade"
      ],
      "description": "The dead appear as animated skeletons of the type of creature they were when they were alive.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "requian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "piercing 3",
          "slashing 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LGq3APZstgY9LM9o",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d8+2 slashing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Boneyard (The Dead)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nBoneyard The dead appear as animated skeletons of the type of creature they were when they were alive\n• Language Requian;\n• Additional Ability resist 3 to piercing and slashing\n• Melee claw +7, Damage 1d8+2 slashing"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-frog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jiLbjz3kic9Uv5b6",
      "slug": "giant-frog",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:909e4fdab9e7ae3bfe4eb6d7b82123df22a9dd429033896151cd21d4d50ea158",
    "translatableHash": "sha256:72482a6c9ee17bf86d5fa2b24872638d5c256f8d336341d026d869f67af33a82",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Frog",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Giant frogs can grow up to 6 feet long and weigh over 200 pounds, with rows of razor-sharp teeth lining their gaping mouths.\nFrogs that are poisonous or grow to monstrous size can be a menace to adventurers.",
      "armorClass": 15,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
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
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 5,
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
          "id": "kTrRas6S4Cz4lOHk",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d6+3 piercing",
          "traits": []
        },
        {
          "id": "QbuYWdGxDSSJScKq",
          "name": "Tongue",
          "bonus": 8,
          "damage": "",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "7xcwfGlksuk6vlpr",
          "name": "Sticky Feet",
          "kind": "passive",
          "description": "Giant frogs are not off-guard when Balancing on a narrow surface, and they gain a +4 circumstance bonus to Reflex saves to avoid falling."
        },
        {
          "id": "7E7aWSmxrGHdyjSR",
          "name": "Tongue Grab",
          "kind": "passive",
          "description": "A creature hit by the giant frog's tongue becomes Grabbed by the giant frog. The creature isn't Immobilized, but it can't move beyond the reach of the frog's tongue. A creature can sever the tongue with a Strike against AC 13 that deals at least 2 slashing damage. This deals no damage to the frog but prevents it from using its tongue Strike until it regrows its tongue, which takes a week."
        },
        {
          "id": "pfkLQui9NXRuZJMz",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shokasura",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "K5ahJfASpyXA2WqM",
      "slug": "shokasura",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d4de94171114974483c9f31183e21019518f76fb88ac428a11c063dda6a077e2",
    "translatableHash": "sha256:8ab2aaa4882a301e60eb3259d98235f174c0791e490c10e8c5e35cb6f00bb15e",
    "data": {
      "schemaVersion": 1,
      "name": "Shokasura",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "asura",
        "spirit",
        "unholy"
      ],
      "description": "Shokasuras are tragic, wretched beings, broken by their despair at the cruel truths of reality. Many were not originally asuras but instead began as other spiritual beings who realized all of their efforts only served to propagate an unjust and unsalvageable existence. Not yet willing to admit how deep the rot lies and not yet willing to commit themselves to unmaking all they once held dear, shokasuras instead constantly test mortals and force them to prove themselves, desperately trying to assuage themselves that there are people and things still worth saving within their present circumstances. These attempts inevitably lead to disaster, as mortals either fail the shokasura's impossible expectations, or the shokasura tests their chosen mortal to ruin.",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 7,
        "deception": 9,
        "performance": 7,
        "religion": 7,
        "stealth": 7
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [
          "curse"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 2"
        ]
      },
      "attacks": [
        {
          "id": "e2P3kZa1V3RJ3k9T",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d8 slashing; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "unholy"
          ]
        },
        {
          "id": "eGOFngkd34TPP39s",
          "name": "Thorn",
          "bonus": 9,
          "damage": "1d8 piercing; 1 spirit",
          "traits": [
            "agile",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "gHkt9ZPmla4aDS6c",
          "name": "Telepathy (Touch)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "oLyWvtqHGoL3rQb1",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "425lZ6UBU1Pd31FP",
          "name": "Change Shape",
          "kind": "action",
          "description": "The shokasura takes on the appearance of a Small humanoid. This doesn't change the shokasura's Speed or their attack and damage modifers with their Strikes, but it might change the damage type their Strikes deal (typically to bludgeoning). The asura typically loses their thorn Strike unless the humanoid form has a similar unarmed attack. This alternate form has a specifc, persistent appearance, which the shokasura can change by performing a 1-hour ritual."
        },
        {
          "id": "sj9VbYqqHsDlLaRb",
          "name": "Grieving Venom",
          "kind": "passive",
          "description": "Saving Throw check (will, dc:17)\nMaximum Duration 4 rounds\nStage 1 1d4[poison] damage and Enfeebled 1 (1 round)\nStage 2 1d4[poison] damage, and Enfeebled 2 (1 round)\nStage 3 1d4[poison] damage, Slowed 1, and the creature cannot use reactions (1 round)"
        }
      ],
      "spellcasting": [
        {
          "id": "icR13DUCw64iVgQ2",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "zYlMwVZMEVWqr3Lw",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "xGcL25gysqskL1zz",
              "name": "Charm",
              "rank": 2
            },
            {
              "id": "K98QiZZlsCCzY6ow",
              "name": "Stupefy",
              "rank": 2
            },
            {
              "id": "57if0qj4jc4HcQGo",
              "name": "Veil of Privacy (Self Only)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-fire",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "LIeIU7FCSZr25ss7",
      "slug": "shade-plane-of-fire",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2d9d137865e18d0ade1b737108d7574bb1df5e8fbb2af10e6db2bf15b1a2d0a2",
    "translatableHash": "sha256:272095eaf92941c0e6ee29a86a376f3ff795e907914519a35e38d59a1cf896a3",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Fire)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fire",
        "shade"
      ],
      "description": "Fire pneuma appear as versions of their mortal selves shaped from flame.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "pyric"
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
          "id": "ZPQhdXF3s5ZiNwMc",
          "name": "Cinder",
          "bonus": 7,
          "damage": "1d8+2 fire",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Fire (Fire Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Fire (Fire Pneuma) Fire pneuma appear as versions of their mortal selves shaped from flame.\n• Language Pyric\n• Additional Ability immunity to fire\n• Melee cinder +7 (fire), Damage 1d8+2 fire"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-wood",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "loSwEJV8C5Xa9Lko",
      "slug": "shade-plane-of-wood",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b263c271318c945fc5a4770f5129e83a2afb1596eb155dace08c09e384270de0",
    "translatableHash": "sha256:16bfcbafe8ab2b9a4e51b2010348a74d5bb742d7bc482154f3a50c0c9c4b2a53",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Wood)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "shade",
        "wood"
      ],
      "description": "Wood pneuma appear as versions of their mortal selves carved from wood.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
      "armorClass": 15,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "fire 2",
          "axe-vulnerability 2"
        ]
      },
      "attacks": [
        {
          "id": "60d6TRr07HgWYE5B",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "wood"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Wood (Wood Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Wood (Wood Pneuma) Wood pneuma appear as versions of their mortal selves carved from wood.\n• Language Muan\n• Additional Ability 8 additional Hit Points and weakness 2 to fire and axes\n• Melee fist +7 (wood), Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:naari-pyrochemist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "M0R0oJXi5e01jxWe",
      "slug": "naari-pyrochemist",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ce80e0f3fd832a5d773043af4b2300f46b41f841f2f8ee48e1ae671f66115136",
    "translatableHash": "sha256:37cdbda9b3f7b4b092181914112a060ddcd6d841eca423a6bcbc60dbcae18a19",
    "data": {
      "schemaVersion": 1,
      "name": "Naari Pyrochemist",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "naari"
      ],
      "description": "Naaris' blood blazes with elemental fire. On the Plane of Fire, most naaris are second-class citizens who serve under the iron heel of the ifrits and their Dominion of Flame, but those born outside the ifrit hierarchy or who choose to flee it live lives of passion in search of fame, glory, and power.\nNaaris are fond of fire, but this doesn't mean they all embrace fire's destructive nature. Those who seek more productive roles in a society might cherish fire's protective warmth and the role it plays in creation or cooking. Others find inspiration in the way flames flit and dance, and they pride themselves in their skills as acrobats or dancers. The church of Sarenrae particularly welcomes naari fire dancers, both in appreciation of their skill and to help ensure these naaris have a safe place apart from their more violent kin.\nBut by and large, naaris are drawn to professions and callings that allow them to indulge in the glories of fire. Naari pyrochemists apply this calling to alchemical teachings, seeing purity in every single bomb thrown or conflagration lit.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 3,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": 3,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "crafting": 6,
        "intimidation": 4,
        "nature": 3,
        "survival": 3,
        "thievery": 6
      },
      "languages": [
        "common",
        "pyric"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 1"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "05N8sEltz4b9htCX",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "YEQydLBRNZJVJBAN",
          "name": "Dagger",
          "bonus": 8,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "DU6e2UkT2fc49Zk3",
          "name": "Lesser Alchemist's Fire",
          "bonus": 8,
          "damage": "1d8 fire; 1 fire; 1 fire",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "nKqb3ksLlia2sFBZ",
          "name": "Infused Items",
          "kind": "passive",
          "description": "A naari pyrochemist carries the following infused items, which last for 24 hours or until the next time the pyrochemist makes their daily preparations:\nLesser Alchemist's Fire (5)\nLesser Elixir of Life (2)\nLesser Smoke Ball"
        },
        {
          "id": "dFKXMQ8FbHDHNhTC",
          "name": "Quick Bomber",
          "kind": "action",
          "description": "The naari pyrochemist draws an alchemist's fire with an Interact action and throws it as a ranged Strike."
        }
      ],
      "spellcasting": [
        {
          "id": "Mu6RmJmoPp5iM9ld",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "qHLcLpLfz6bKqwdj",
              "name": "Ignition",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:fuath",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "M6c9Trk8tzwZ2wVf",
      "slug": "fuath",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ea59134c623c48fe82d44142de4938f546fcfbddada11e6a75432994793c80dd",
    "translatableHash": "sha256:93fff70d7ba5130ccef544266c520ab7035bb1b415758054f404fadd8e8b54a3",
    "data": {
      "schemaVersion": 1,
      "name": "Fuath",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "aquatic",
        "fey",
        "gremlin"
      ],
      "description": "Despite their small size, fuaths are shipwreckers incarnate. In the dark of night, these gremlins sever ratlines, slash sails, smash sextants, and soil provisions. Once the ship founders, the fuaths return to indulge their craving for land-raised flesh. While fuaths prefer to take their prey asleep, they save a terrible doom for sailors who attack them, surrounding the mariners' faces in magically congealed water to drown them where they stand.\nConstantly dripping with water, fuaths have seahorse-like faces, seaweed-green fur over yellow skin, and wicked lobster claws for hands. Lacking the Sakvroth tongue, they have trouble relating to other gremlins aside from hanivers, but they revere sea hags and wicked aquatic fey.\nGremlins arose long ago in the First World, living embodiments of nature's ability to wear away, erode, and decompose. In the Universe, their encounters with mortal civilizations twisted them into creatures devoted to chaos, sabotage, and traps, each variety specializing in a particular brand of mayhem.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 20,
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
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 7,
        "deception": 4,
        "nature": 6,
        "stealth": 7,
        "thievery": 7
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 2",
          "fire 2"
        ]
      },
      "attacks": [
        {
          "id": "oFemRZRi0HVJ0hhU",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d6 + 1 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "wALsqU4B03KPwiH0",
          "name": "Dart",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "wLN9cEWm9Nx1Oj4P",
          "name": "Vulnerable to Sunlight",
          "kind": "passive",
          "description": "A fuath becomes Drained 1 (or increases its drained condition by 1) after every consecutive hour they're exposed to sunlight. Being submerged in more than a foot of water prevents the sunlight from harming the fuath."
        },
        {
          "id": "qdoE2UesGE5qd946",
          "name": "Viscous Choke",
          "kind": "action",
          "description": "Frequency once per day\nEffect The fuath surrounds the head of one air-breathing creature within 30 feet in a magical film of viscous water for 1 minute. The target must succeed at a check (reflex, dc:17) save or it begins to choke and must hold its breath to avoid drowning. The film can be temporarily wiped away with a total of 3 Interact actions by the choking creature or creatures adjacent to it, allowing a new Reflex save with a +2 circumstance bonus to end the effect. (These actions don't need to be consecutive or made by the same creature.)"
        }
      ],
      "spellcasting": [
        {
          "id": "ieqWpTGutJG300Pn",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "lEn5XPivIlpktPEN",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "hrQHSJ2N0UXvUwFx",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "2fdZCQgLeOLsttLb",
              "name": "Sleep",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-abaddon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "mJye6dqtmF7xquE3",
      "slug": "shade-abaddon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5d71a9c1e3c8fb2f9911c14f198bf2b0f7cfadaee82eb62d9f8acd2a6fd85a60",
    "translatableHash": "sha256:4c35cf81583bfdb135210327fffd14f14954cb858869a2aecc7ac6a23cffba80",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Abaddon)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "shade",
        "unholy"
      ],
      "description": "The hunted appear as Medium-sized versions of themselves from their prior lives, and they exist to be pursued and consumed by daemons.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "daemonic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ysSzKfSqDhv0OTY7",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "TF4ZUPn2jeFMb9Fz",
          "name": "Fast Healing 5",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Abaddon (The Hunted)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nAbaddon (The Hunted) The hunted appear as Medium-sized versions of themselves from their prior lives, and they exist to be pursued and consumed by daemons\n• Sanctification unholy\n• Language Daemonic\n• Additional Ability fast healing 5\n• Melee 1 fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shikigami",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "MovMBbHEln0TUlYh",
      "slug": "shikigami",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1e3ffcdbfe3d3088d8798f31f0d35a2a021de3f595b42b3be505d29c15693071",
    "translatableHash": "sha256:2ec4d502630357ce730f2e44ec645077a78bea5830bf6b6a967030e21f4f4ff9",
    "data": {
      "schemaVersion": 1,
      "name": "Shikigami",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "kami",
        "spirit"
      ],
      "description": "Shikigami are made of paper and can easily transform between a flat cutout form and a three-dimensional doll of molded paper. Unlike most other kami, who are bound to their wards by a more powerful spirit or deity, shikigami are minor spirits that even mortal practitioners can sometimes bind into a tiny paper form and task with guarding small works, such as garden statues and vases. Landowners delight in having shikigami protect their gardens, whether they paid a wandering spellcaster to entreat the shikigami or simply had the fortune of another spirit assigning a shikigami to their land. Travelers who come across a shikigami-graced milestone or waypost believe that such encounters are good omens for the journey.\nFor their part, shikigami have mixed opinions on civilization and the humanoids who dwell therein. While shikigami will fight to protect their ward against invaders and desecrators, these kami are just as likely to leave—their ward in tow—if locals begin to despoil the area or show a disregard for nature. Most practitioners capable of binding a shikigami wouldn't engage in this type of disrespect, but should the kami catch wind of such practices, shikigami across the land might abandon their contracts en masse, leaving behind an uncomfortable vacuum with their exodus. In this way, shikigami exemplify the precarious balance between the expansion of civilization and the preservation of the natural world.\nNot all shikigami protect gardens, so you can substitute the shikigami's spade for any sort of mundane tool that's useful to the shikigami's task and their ward. The kami wields any such weapon with the same damage dice, modifiers, and traits listed for their spade Strike, but change the damage type as appropriate for the new weapon.\nKami are divine nature spirits from the lands of Tian Xia, far to the east of the Inner Sea region. They serve as guardians of natural objects and places they protect—their wards—and are ancient enemies of oni (Pathfinder Monster Core 252–255). Kami can merge with their wards, allowing them to surreptitiously watch anyone who treads upon their sacred grounds. Kami leave those who they deem harmless alone, but fight vigilantly to scare away anyone perceived as a threat.",
      "armorClass": 15,
      "hitPoints": 18,
      "speedFeet": 20,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 6,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 3,
        "int": 1,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "diplomacy": 6,
        "medicine": 7,
        "nature": 7,
        "society": 6,
        "stealth": 7
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "KpPz5eYneC4B2Yzr",
          "name": "Spade",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "6xOUgMW5VdewSzs4",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "2wESOescgs0qEaue",
          "name": "Spade",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "OGuy2qUXNRlXLeoz",
          "name": "Ward",
          "kind": "passive",
          "description": "Every kami is bound to a ward: a specific animal, plant, object, or location. A kami can merge with or emerge from their ward as a single action, which has the concentrate trait. While merged, the kami can observe their surroundings with their usual senses as well as the senses of their ward, but can't move, communicate with, or control their ward. Additionally, a kami merged with their ward recovers Hit Points each minute as if they spent an entire day resting.\nA shikigami's ward is typically a minor work of art or symbol of civilization, such as a milestone, trail sign, personal garden, or tiny statue."
        },
        {
          "id": "z8QrCiQqq7Q5zISk",
          "name": "Flatten",
          "kind": "passive",
          "description": "The shikigami flattens to the width of a sheet of paper. While Flattened, they can float on the wind, gaining a 20-foot fly Speed, and they can slip through small cracks and gaps without needing to Squeeze; however, they become Clumsy 2. The shikigami can Dismiss this effect."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-air",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "MqEpezChWmV14FHa",
      "slug": "shade-plane-of-air",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e9bdc07d4677cd64ecbce6eb2b6ad7bc77e3cd9bcf985b69f9923c0b12f74e68",
    "translatableHash": "sha256:1a8e8b7ff777a3b0f94442d42bf28f9b440597afbe40aad544c09fa911bbf503",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Air)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "shade"
      ],
      "description": "Air pneuma appear as versions of their mortal selves composed of air.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7RlCpEdZ5Lw3Omd2",
          "name": "Gust",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "air"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Air (Air Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Air (Air Pneuma) Air pneuma appear as versions of their mortal selves composed of air.\n• Language Sussuran\n• Additional Ability fly Speed 20 feet\n• Melee gust +7 (air), Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:samsaran-anchorite",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "NBdVKrLxKhurBETJ",
      "slug": "samsaran-anchorite",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9d46de11568ff108793a705dce1f60e0f84f5555a7c7d9deead2c5c3693dbdf1",
    "translatableHash": "sha256:bf8af30e4fefd440b63164edb7e0264e73b12c90294ac741b9ad8894e724e778",
    "data": {
      "schemaVersion": 1,
      "name": "Samsaran Anchorite",
      "level": 1,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "samsaran"
      ],
      "description": "A unique connection to the cycle of life and death defines the mortal lives of samsarans. With a tendency toward reclusiveness, samsarans have delicate builds, enigmatic and pupilless eyes, and blood as clear as water. When a samsaran dies, their body vanishes and their soul instantly reincarnates into a newborn child elsewhere on the same plane: usually another samsaran, but occasionally a humanoid of a different ancestry.\nThough all samsarans have an innate understanding of their nature, they consciously remember little from their former lives. Some, however, are occasionally struck by disjointed memories or flashes of déjà vu linked to a previous existence that can earn them a reputation for preternatural wisdom and insight. Most samsarans prefer to lead studious lives filled with moments of deep reflection. Their sights remain set on the eternal and on enlightenment, reducing the appeal of the short-term material gains one can achieve in just one lifetime. A samsaran ceases their cycle of reincarnation only upon reaching perfect state of enlightenment-or falling so far from harmony that they proceed to a doomed afterlife.\nThe ancestral home of the samsarans lies in Zi Ha, a remote mountain nation in Tian Xia. These treacherous mountains help ensure the solitude most samsarans prefer, and they're further protected by misguiding illusions, defensive wards, and secure fortifications.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 3,
        "reflex": 7,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 0,
        "int": 1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "medicine": 6,
        "occultism": 6,
        "religion": 7,
        "society": 4
      },
      "languages": [
        "common",
        "empyrean",
        "samsaran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jvJQ52E2kygewU8J",
          "name": "Spear",
          "bonus": 5,
          "damage": "1d6+2 piercing",
          "traits": []
        },
        {
          "id": "WsuMP3feuXNP1eeE",
          "name": "Sling",
          "bonus": 7,
          "damage": "1d4+2 bludgeoning",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "8Amc9UddnS7QBYOL",
          "name": "Cryptomnesia",
          "kind": "passive",
          "description": "A samsaran anchorite subconsciously retains bits of knowledge from their innumerable former lives, granting them a +1 circumstance bonus to skill checks that aren't listed in their skills above, and allowing them to attempt all skill actions that normally require the user to be trained."
        },
        {
          "id": "YxUwb1otEos5UMSS",
          "name": "All This Has Happened Before",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The samsaran anchorite is about to roll initiative\nEffect The anchorite experiences a flash of recognition from a previous existence, gaining a +4 circumstance bonus to the triggering roll.\nIf this causes the anchorite to be the first creature to act, they also become Quickened for 1 round, but they can use the extra action only to Recall Knowledge or Step."
        },
        {
          "id": "9RW0VcibxF9cA8uA",
          "name": "All This Will Happen Again",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The samsaran anchorite fails or critically fails a Will save against an emotion effect\nEffect Even in the face of overwhelming tribulation, the anchorite finds solace in the notion that all things are merely part of a never-ending cycle.They reroll the saving throw with a +1 status bonus; they must use the second result."
        }
      ],
      "spellcasting": [
        {
          "id": "bxnrpUx8pN5QerLc",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "Xmyxii3iWarPXiJW",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "dCMRd83On6K0wQJ7",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "pHilTAt85BF0fIgK",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "E2xUMXLUIPzYhGE5",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "2rhqcAMHCcrU6nJX",
              "name": "Sanctuary",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grioth-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "NeKtvaz1jB7D6oti",
      "slug": "grioth-scout",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4d5c388d70804694bae5923e44893f987dde27d0afe96fc67ffc9e59d3b7d36d",
    "translatableHash": "sha256:6637e0d238a305081949adfccb8d5eb1ee7ac9fa29b537499b01e315f4a761e5",
    "data": {
      "schemaVersion": 1,
      "name": "Grioth Scout",
      "level": 1,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "grioth",
        "humanoid"
      ],
      "description": "The first grioths encountered on a new world are scouts. Typically traveling the vastness of space via one-way portals from their home worlds, grioth scouts never expect to see their homes again, as grioth leadership ensures true devotion to the colonization effort by stranding them on new worlds.\nPlanets that drift out of orbit from their stars grow cold and lifeless as they float through the Dark Tapestry. Such dead worlds are coveted by the horrific creatures known as grioths, who endure the awful cold on these wandering worlds and convert them into planetary temples devoted to the dark gods of the Elder Mythos. From these bastions of frozen darkness, grioths seek out warm, living worlds to tear away from their respective suns through forbidden rituals, a process that often takes numerous generations.\nA single cultist typically leads a grioth scouting party, and the group seeks out a disused or forgotten location on the fringe of rural settlements as their initial invasion point. Over several generations, a grioth settlement grows powerful and conquers the surrounding cultures, and eventually, powerful grioths descend from the stars to begin the next stage of planetary conquest.\nGrioths speak a language composed of trills and clicks. While capable of speaking other languages, they do so in dry, raspy voices. As grioths have wings, wriggling tails, and four-eyed, bat-like visages, many cultures mistakenly associate them with the evil Outer Planes, but they very much belong to this reality.",
      "armorClass": 16,
      "hitPoints": 18,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "greater-darkvision",
          "echolocation-20"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "occultism": 6,
        "stealth": 7
      },
      "languages": [
        "aklo",
        "grioth"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 3"
        ]
      },
      "attacks": [
        {
          "id": "oU5HOhztZ5crg339",
          "name": "Kukri",
          "bonus": 7,
          "damage": "1d6 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "pDKSuwaiL7A6j7D7",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "UrsYHXoFzbr0aW0A",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SNctVYE5hOdRgOv2",
          "name": "Telepathy 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Yft4ncVPX04wtjTC",
          "name": "Echolocation (Precise) 20 feet",
          "kind": "passive",
          "description": "A grioth can use its hearing as a precise sense at the listed range."
        },
        {
          "id": "QCRkv3Pld8YuyUlE",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7Ja558AxHimR0DNe",
          "name": "No Breath",
          "kind": "passive",
          "description": "A grioth doesn't breathe except to speak and is immune to effects that require breathing (such as an inhaled poison)."
        },
        {
          "id": "NsrDJM8cD8NU8iJt",
          "name": "Grioth Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:17)\nMaximum Duration 6 rounds\nStage 1 Frightened 1 (1 round)\nStage 2 Frightened 2 (1 round)\nStage 3 Frightened 3 (1 round)"
        },
        {
          "id": "pp693fsJOt23L3X9",
          "name": "Shock Mind",
          "kind": "action",
          "description": "The grioth scout makes a Strike with a voidglass weapon.\nIf the Strike hits, it deals an additional 1d6[mental] damage, and the target must succeed at a check (will, dc:17, traits:incapacitation) save (this has the incapacitation trait) or become Confused for 1 round."
        }
      ],
      "spellcasting": [
        {
          "id": "6tZvLirOPTqzo6of",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 8,
          "saveDc": 16,
          "spells": [
            {
              "id": "lFeaMoAD9tdGT6T4",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "MCPZPB9LzT57oKUd",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "M1D3heW2mu3jC3Py",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "0ZTnvt5PFoonUIiq",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "sQI5MlX11gCSvtYC",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:suli-dune-dancer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "nLlS3MBFCO3DKwBX",
      "slug": "suli-dune-dancer",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:eccdfc022ebf469ec4a8745a5b5463e6a56f02358ae120e71965b6cfee906897",
    "translatableHash": "sha256:f0b9230d8e1246252ca3ea98ad7895898dd64fba370ee06f437b01e499b58aac",
    "data": {
      "schemaVersion": 1,
      "name": "Suli Dune Dancer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "suli"
      ],
      "description": "Because their genie forebears travel all across the Universe, sulis (scions of mortals and jann, who are composed of all six elements) are by and large the most common geniekin on that plane. They're often artisans and peace brokers, compelled to try and bring harmony and balance in a world wrought with discord.\nSulis have a natural charm that often eludes other geniekin, but they tend to layer on a level of boastful pride or even arrogance as a personal quirk or humorous facade. Few non-sulis realize that bragging isn't simply the symptom of a puffed-up ego for sulis, but instead a cultural institution easily comparable to human poetry. Sulis' boasts not only glorify themselves but also secure their companions' and families' accomplishments in history, with the ultimate goal of spinning stories that will be retold for generations. This is especially true for sulis who have lived with other geniekin and have been seen as lesser for not having a strong connection to an Elemental Plane.\nSuli dune dancers are but one way these geniekin seek to integrate with other humanoid societies. They work to hone their skills at boasting to an extent that their claims help bolster those they travel with. Suli from regions other than deserts adjust their names to match their terrains, but regardless of whether they prefer forests, hills, or arctic plains, their boasts remain as compelling.",
      "armorClass": 15,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 3,
        "reflex": 5,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 0,
        "int": 1,
        "wis": 0,
        "cha": 4
      },
      "skills": {
        "acrobatics": 5,
        "deception": 6,
        "diplomacy": 7,
        "occultism": 4,
        "performance": 7,
        "society": 4
      },
      "languages": [
        "common",
        "petran",
        "pyric",
        "sussuran",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GHbCLo2MkEFt1qai",
          "name": "Scimitar",
          "bonus": 7,
          "damage": "1d6+2 slashing",
          "traits": [
            "forceful",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "D89GcjloR9CLNbq8",
          "name": "Elemental Bulwark",
          "kind": "reaction",
          "description": "Trigger An enemy is about to damage the dune dancer with cold, electricity, or fire, or with a spell that has the air, earth, fire, or water trait\nEffect The dune dancer gain resistance 2 against the triggering damage"
        },
        {
          "id": "7gF0VRYAU4eYVJty",
          "name": "Distracting Dance",
          "kind": "action",
          "description": "With a twirl of their body or with elaborate hand movements, the suli dune dancer attempts to distract a creature within 30 feet. The dune dance attempts a check (performance, against:perception) check against the target's Perception DC.\nCritical Success The target is Off-Guard and takes a –2 circumstance bonus to Perception checks until the end of the dune dancer's next turn.\nSuccess The target is off-guard until the end of the dune dancer's current turn.\nCritical Failure The dune dancer is off-guard against attacks from the target until the end of their next turn."
        },
        {
          "id": "1Kmvtn64DZibqUls",
          "name": "Elemental Assault",
          "kind": "action",
          "description": "Elemental magic fills the dune dancer's body or weapon. The dune dancer chooses one element and makes a melee Strike. The Strike deals an additional 1d4 damage of the indicated type and has the trait corresponding to the element:\n• Air electricity\n• Earth bludgeoning\n• Fire fire\n• Metal slashing\n• Water cold\n• Wood vitality"
        }
      ],
      "spellcasting": [
        {
          "id": "uluCqASmhYCcxlPP",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "CLlIFdJq9EEd9ZkT",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "03PQ0CsnzLJMtLzo",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "FuKbT8uYRzGNRqin",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "hLCUsCy9QBYyIT3V",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "971PzQ6LeZ4kfnxP",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "kBNZIL9mp7S5x9sV",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "mE0Tm9QtdgnfIm3g",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "3k44NhiWPMhNzh32",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spawning-soulrider-monitor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "NnEnGsSuxgP1eY5Z",
      "slug": "spawning-soulrider-monitor",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c56e4a9085193b6ec8df8cc7dda2ebcd601a6ae32aad481c17b4c5d1422cfc39",
    "translatableHash": "sha256:031cab057da897ee953ee5d2612002c9405680eb35b9147f32398bd1391bcc02",
    "data": {
      "schemaVersion": 1,
      "name": "Spawning Soulrider (Monitor)",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "monitor"
      ],
      "description": "When soulriders absorb sufficient planar energy, they become gravid with countless tiny eggs. Such soulriders instinctively return to the Universe via the Dead Roads to lay their spawn, although the exact metaphysical process has yet to be fully understood. Fiends and others keen to enter the mortal world have begun capturing and studying spawning soulriders, though such experiments carry their own risks, for soulriders prevented from returning to the Universe will continue to grow larger as they absorb more energy.\nOnce back in the Universe, spawning soulriders become fiercely protective of their near-translucent eggs and tiny spawn, using their remora-like maws to fend off potential threats. Anyone disturbing a soulrider in the process of spawning might find out what it feels like to have pieces of their soul torn away.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 2"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 8,
          "damage": "",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+1 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Monitor)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "dlr9wG2QDkhnZtiI",
          "name": "Swim the Dead Roads",
          "kind": "passive",
          "description": "In a process that takes 1 week, a spawning soulrider can travel through channels in the multiverse only it can sense, moving from the Outer Sphere plane whose energy it has absorbed to the Dead Roads that connect the Boneyard to the mortal Universe. From there, it travels to a random place in the Universe that can support life."
        },
        {
          "id": "cfoKxehibsNLHWQ2",
          "name": "Grind Soul",
          "kind": "action",
          "description": "Requirements The spawning soulrider is attached to a creature's soul\nEffect The soulrider grinds the creature's soul with its jagged inner mouth, dealing 2d8[spirit] damage (check (will, dc:16, basic) save). On a critical failure, the creature also takes 1d4[persistent,spirit] damage. Regardless of the result, the spawning soulrider is no longer attached to the creature."
        },
        {
          "id": "289zRO90BONTOHnB",
          "name": "Monitor Escape",
          "kind": "action",
          "description": "The soulrider's form blurs as it exploits loopholes in the multiverse. It teleports to an empty space within 60 feet."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=16]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:festrog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "NQlPvg8SaIb9jzDl",
      "slug": "festrog",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2cac72acee1e42ed511ceb68896cc773cebb7b3546e63c11985ad8fc165037f5",
    "translatableHash": "sha256:ded99cb55b0f9cf8924128bd985ddef382dcf68e18eaa52f15492e72b02c3a2f",
    "data": {
      "schemaVersion": 1,
      "name": "Festrog",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "undead"
      ],
      "description": "Spawned from corpses of those who died of illness or starvation and were twisted by void energy, festrogs display a viciousness that rivals other undead. They resemble decaying humanoids, but with elongated arms, teeth, and bone-like spikes protruding from their upper backs. Festrogs' tendency to run on all fours has led to them gaining the moniker dog-ghouls, causing the unwary to mistake them for mindless predators.\nFestrogs are in fact intelligent, stalking victims in packs and choosing hunting grounds that suit their abilities. They can often be found roaming farmlands, open forests, or wide plains, anywhere they can use their quadrupedal speed to overtake quarry. Belying their mindless appearance, festrogs use tactics similar to those of hunters with hounds: the leader of the pack often flushes prey from cover so that the victim can be brought down by the pack.\nResearchers of the necromantic processes that create risen corpses have found that festrogs spawn more often from slow demises than sudden deaths. Festrogs typically animate from corpses afflicted with disease, while victims of violence are more likely to become more common undead, such as zombies. One well-documented way to create a festrog is to have scavengers feed on the dead flesh before animating it. This potentially explains why festrogs most often arise in remote areas stricken with famine and desperate predators.\nThough most festrogs arise from humans and other prevalent humanoids, other creatures that die in the same circumstances can rise as festrogs. Festrogs that were once larger humanoids, such as ogres, hill giants, or trolls behave similarly to other humanoid festrogs and are simply larger and more powerful. More peculiar are the beastkin festrogs formed of quadrupedal animals, which typically have feet or hooves instead of hands, travel on all fours at all times, and have only animal intelligence. In fact, some humanoid festrogs capture and starve beastkin in hopes of the creatures rising as grotesque festrog pets.",
      "armorClass": 15,
      "hitPoints": 25,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 5,
        "athletics": 6,
        "stealth": 7,
        "survival": 5
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
          "sleep",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hJX2K9PBz8JcbOhF",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "uLYceyp9oj2Oxkyi",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d4+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "1EXu4V14M2wiJ8X6",
          "name": "Diseased Pustules",
          "kind": "passive",
          "description": "Whenever the festrog takes piercing or slashing damage, creatures adjacent to the festrog take 1d4[poison] damage (check (reflex, dc:14, basic) save)."
        },
        {
          "id": "LcGZqt87bag4jW9L",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "dPRAR6490P4vai3c",
          "name": "Feast",
          "kind": "action",
          "description": "Requirements The festrog's last action was a jaws Strike that damaged a living creature\nEffect The festrog tears into the creature's flesh and gulps it down voraciously, dealing 1d4[slashing] damage to the creature and gaining temporary Hit Points equal to the damage dealt. These temporary HP last for 1 minute."
        },
        {
          "id": "8q3tIo8ZdDZtWmIQ",
          "name": "On All Fours",
          "kind": "action",
          "description": "Requirements The festrog has nothing in their hands\nEffect The festrog Strides with a +10-foot circumstance bonus to their Speed."
        },
        {
          "id": "5NzcFmTNNB6Phd7U",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-metal",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "nX0oonECc1yyxSyc",
      "slug": "shade-plane-of-metal",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a0ac9466989b4c61bc9c2080026f6187616bf5d47c45ba28666739e7d30e892f",
    "translatableHash": "sha256:49bbe5856824fe7198a38e1950f9f7590cce6a3bf10e6f5a125b4249ca0561d1",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Metal)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "metal",
        "shade"
      ],
      "description": "Metal pneuma appear as versions of their mortal selves made of various, often sharpened, metals.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "60d6TRr07HgWYE5B",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d8+2 slashing",
          "traits": [
            "metal",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Metal (Metal Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Metal (Metal Pneuma) Metal pneuma appear as versions of their mortal selves made of various, often sharpened, metals.\n• Language Talican\n• Additional Ability resistance 3 to electricity\n• Melee claw +7 (metal, versatile P), Damage 1d8+2 slashing"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-dreamlands",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "oDSlHEEOL2C5ioHb",
      "slug": "shade-dreamlands",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3c18f78baaaf61b0ee80829e194b0127b025c2ded3504ed52a12c6323bbbc41c",
    "translatableHash": "sha256:7ca0204e410c90d1d6cb47fe5f38021c92b447650ab4b1cdaba7c2ebad25402c",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Dreamlands)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dream",
        "shade"
      ],
      "description": "The dreamers appear as their ideal appearance, age, and gender from their mortal bodies.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
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
          "id": "EaiT42eaTUXQMPIu",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "eiefYuDeu60ebYAN",
          "name": "+1 Circumstance Bonus on all Saving Throws",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Dreamlands (The Dreamers)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nDimension of Dreams (The Dreamers) The dreamers appear as their ideal appearance, age, and gender from their mortal bodies.\n• Language Aklo\n• Additional Ability +1 circumstance bonus on all saving throws\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cunning-fox",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Olett4ib6Xik7qYt",
      "slug": "cunning-fox",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:56007cfbf53dea0bdec7d469ae58805772fd8db216b7b081a3b4e35b019ca997",
    "translatableHash": "sha256:5e79737d47c09ba7de1bc3edd9de122d3dfaf6e452f112e8dc54adacdec5de1b",
    "data": {
      "schemaVersion": 1,
      "name": "Cunning Fox",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "beast",
        "incorporeal",
        "spirit"
      ],
      "description": "Spirit guides of cunning are often seen as the weakest of the spirit guides, but they're also the most numerous and proactive, guiding families to safe paths or leaving food and water for warriors. Cunning guides often take the form of foxes.\nSpirit guides are a distinctive form of spiritual entity with a tenuous attachment to the Universe. Some legends say the first spirit guides were the perfect conceptual forms of animals, and that from them, eagles, foxes, bears, and other mortal beasts were born. Each guide displayed an interest in mortal affairs, watching over communities and imparting their gifts. Fox shared his cunning with the mortals he befriended, while Bear taught them how to survive and endure.\nOver countless mortal generations, new spirit guides were born, many of them possessing traits from two or more of the original guides. In the ancient human nation of Sarkoris, the people abandoned traditional gods in favor of venerating the spirit guides who watched over them. While some in neighboring nations saw this as heresy, to the old Sarkorians, such worship felt perfectly natural. After all, the same beings who'd taught their forebears to survive and thrive still walked among them.\nEvery so often, a spirit guide bonds with a mortal partner. While many spirit guides permanently bond with mortals, such as the spirit guides of Sarkoris and the spiritual leaders known as god callers, some instead form temporary bonds, either to test the prospective mortal before committing or because a permanent bond is undesirable. It's not uncommon for a single spirit guide to form bonds with multiple generations of the same family or community, protecting and guiding mortals they've grown fond of or who do them a great service.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 40,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 6,
        "deception": 6,
        "stealth": 8,
        "survival": 5
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "disease",
          "paralyzed",
          "poison",
          "precision"
        ],
        "resistances": [
          "all-damage 2 except force, ghost-touch, spirit"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "AwDohhaTpZVaeTTG",
          "name": "Horn",
          "bonus": 6,
          "damage": "1d8+1 force",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "zrb993P8EnxslRD7",
          "name": "Jaws",
          "bonus": 6,
          "damage": "1d4+1 force",
          "traits": [
            "agile",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "djvqSETDhb2w1CiD",
          "name": "Bond with Mortal",
          "kind": "action",
          "description": "Frequency once per day\nEffect The spirit guide forms a bond with a mortal creature. While the bond exists, the spirit guide increases their current and maximum Hit Points by 10, gains a +2 status bonus to their attack and damage rolls, and can communicate telepathically with the bonded mortal as long as the two beings are on the same plane.\nThe spirit guide can only be bonded with one mortal at a time, and they can take this action again to end the bond or to form a new bond (which also ends the old bond). The bond also ends if the spirit guide or the mortal dies.\nThis bond strengthens the spirit guide's connection to the Universe. While bonded, the spirit guide loses the incorporeal and spirit traits, loses their immunities and resistances, and changes their Strikes to deal the appropriate physical damage (typically piercing or slashing) instead of force damage."
        },
        {
          "id": "Ar7bpDS96ZNxYkjL",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "7YPgtNQoiqQdF2Fp",
          "name": "Bonded Strike",
          "kind": "action",
          "description": "Requirements The spirit guide is currently Bonded with a Mortal\nEffect The spirit guide makes a jaws Strike. If this attack hits, the bonded mortal can spend their reaction to Strike the same target."
        }
      ],
      "spellcasting": [
        {
          "id": "OnOIHCV9sWaKCm1Z",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "07L2jkAwsKGKQSa7",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "CYfy02hxh33ILl6U",
              "name": "Detect Poison",
              "rank": 1
            },
            {
              "id": "Vyt06mptvZrDcWSU",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "r7MDVbmDCiePImis",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "8dnUv0rEwFruT6bW",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "2ucjfU3jAUrQrYRI",
              "name": "Wanderer's Guide",
              "rank": 3
            },
            {
              "id": "VPGtZKPfghEiBM5N",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:goblin-snake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "S4jkgQ7Ni3w8kZ7I",
      "slug": "goblin-snake",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ac8b8f60c912613e6313b39dc69385a0f0478cc941f6eec0f56c4c74e94b0e9a",
    "translatableHash": "sha256:37558cccd77e4dc34c5f2034f4c30c706afa9e742e67db825f911cf013091c50",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Snake",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "goblin"
      ],
      "description": "Goblin snakes sometimes train snakes as pets or companions.\nA goblin snake is a foul-smelling serpentine creature covered in greasy black scales and sporting a fanged, lipless head resembling that of a goblin.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": -2,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 6,
        "intimidation": 5,
        "stealth": 7,
        "survival": 4
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
          "id": "JQeoBI5JqgjsScxy",
          "name": "Fangs",
          "bonus": 9,
          "damage": "1d6+2 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "C51OMvHlgHm1vLmo",
          "name": "Snake Empathy",
          "kind": "passive",
          "description": "A goblin snake can communicate with snakes."
        },
        {
          "id": "E3jDYebWAXTZjYGr",
          "name": "Coiled Strike",
          "kind": "reaction",
          "description": "As Reactive Strike, but the goblin snake can use this reaction only if it's Coiled."
        },
        {
          "id": "cdhP5ZRhi1rmB6Ve",
          "name": "Coil",
          "kind": "action",
          "description": "The goblin snake uses an action to coil itself, increasing its reach with its fangs from 5 to 10 feet. After the goblin snake Strikes with its fangs, it becomes uncoiled."
        },
        {
          "id": "RObOURRF9qeY15jG",
          "name": "Goblin Breath",
          "kind": "action",
          "description": "The goblin snake belches a cloud of nauseating vapor in a @Template[type:cone|distance:15]. Non-goblin creatures within the cloud must succeed at a check (fortitude, dc:16, options:area-effect,inflicts:sickened,inflicts:slowed) save or become Sickened 1. On a critical failure, a creature is also Slowed 1 for as long as it is sickened. Creatures that successfully save are immune for 24 hours. The goblin snake can't use Goblin Breath again for [[/gmr 1d4 #Recharge Goblin Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:brownie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "SjTv1ayVrguLsnTX",
      "slug": "brownie",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:38acd9724b0933cb253e546418f6ac5a227a4479a1e35b9f5ae8f7d687fd3152",
    "translatableHash": "sha256:f46f29c9b93c7f9554023542a9e66a44c99e9801a8da8ec5ee95310325f221ef",
    "data": {
      "schemaVersion": 1,
      "name": "Brownie",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey"
      ],
      "description": "Brownies make their homes in the trunks of hollow trees, small earthy burrows, and even under porches or within the crawl spaces of farmhouses. Often attired in clothes that appear to be made of plants or leaves, brownies wear belts lined with pouches and tools. Whatever language they choose to speak is often is riddled with odd pronunciations and colloquialisms. Their manner of speaking might call upon turns of phrase that are decades or even centuries out of vogue, for example, or they might mix up their metaphors in strange ways. It almost seems as if brownies adopt these quirky ways of speaking intentionally-certainly they do not react favorably to corrections to their chatter. There's often no swifter way to annoy a brownie than to try to correct its grammar. Brownies stand barely 2 feet tall and weigh about 20 pounds.\nWhen facing danger, brownies rarely engage in combat, preferring instead to confound and confuse their attackers in order to buy enough time for escape. Content with honest toil and the love of their kin, brownies maintain a pacifist nature, harassing creatures only to run them off or punish them for an insult. Despite this nature, all brownies carry a blade. They refer to their swords with a hint of disgust, and jokingly call their blades their \"final trick,\" reserving their use for the direst of circumstances.\nHonest to a fault, brownies take freely but always repay their debt through work or leave something behind as an offering. They may eat an apple from a farmer's orchard but harvest the entire tree as repayment. A brownie might eat an entire pie left on a windowsill, only to straighten up the kitchen or wash the dishes. A brownie can share a home with a family for years and years while avoiding detection. A family that is aware of a brownie in their midst usually finds this a beneficial relationship and leaves dishes of milk, pieces of fruit, trinkets, and sometimes even wine as gifts. In exchange, the resident brownie keeps the home clean, mends clothes, repairs tools, and shoos away vermin and small predators. Bragging about having a brownie in the house is the best way to lose one. Brownies distrust foxes and fear wolves, and they avoid farms with dogs.",
      "armorClass": 16,
      "hitPoints": 21,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 9,
        "will": 9
      },
      "abilities": {
        "str": -2,
        "dex": 4,
        "con": 1,
        "int": 2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "crafting": 5,
        "deception": 6,
        "stealth": 9
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
        "weaknesses": [
          "cold-iron 3"
        ]
      },
      "attacks": [
        {
          "id": "uze31xboBPgWCYgP",
          "name": "Shortsword",
          "bonus": 7,
          "damage": "1d6 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "4Uoy7JHv0Ea9SrCr",
          "name": "Baffling Bluff",
          "kind": "action",
          "description": "The brownie's antics can confuse and disorient a creature. When the brownie uses Baffling Bluff, it targets a single creature within 30 feet; that creature must attempt a check (will, dc:17) save.\nThe target is temporarily immune to Baffling Bluff for 1 minute.\nCritical Success The target is unaffected.\nSuccess The target is fooled momentarily and is Off-Guard against the next melee Strike the brownie makes against it before the end of the brownie's next turn.\nFailure The target is Confused for 1 round.\nCritical Failure The target is confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confused condition."
        }
      ],
      "spellcasting": [
        {
          "id": "Ys2OTavkoyvMU7QG",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "bDLgtpd5eexS2DcS",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "FIEG7ER02C9vXq5e",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "HKzC1hyPvSig0hWR",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "z3fpDfIm7kMGoQ34",
              "name": "Mending",
              "rank": 2
            },
            {
              "id": "4j2kIcgfio3nzxVl",
              "name": "Translocate",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-earth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "SN5yHit6vkKd4HQJ",
      "slug": "shade-plane-of-earth",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3270e8fe6baf790ea5fb148c0d543501c96a1047395445c697d9babb64405f79",
    "translatableHash": "sha256:45e8358ca31ba1f429f967b1b1fce89f9b29cd94fb80f023dd62b3dd8381a4ca",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Earth)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "earth",
        "shade"
      ],
      "description": "Earth pneuma appear as versions of their mortal selves built of earth or stone.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "POIZ15lxh5FqbzaK",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "earth",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Earth (Earth Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Earth (Earth Pneuma) Earth pneuma appear as versions of their mortal selves built of earth or stone.\n• Language Petran\n• Additional Ability burrow Speed 20 feet\n• Melee fist +7 (earth), Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-heaven",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "sxgfInlzlVdZS7KD",
      "slug": "shade-heaven",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a82fbec12ab49be4d18ad5dfbdfbafac2fedff50c0347ebb887d40c53ebfa814",
    "translatableHash": "sha256:45c1f0851b6cc97530ce70f20eb4ff6e8b56b8a8bd5a37e6f9ef9c5ed5090642",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Heaven)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "celestial",
        "holy",
        "shade"
      ],
      "description": "The elect have golden halos and ghostly wings, but they otherwise appear as their mortal forms.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "kVPXtEyRgZTAdwiv",
          "name": "Wing",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "holy"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Heaven (The Elect)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nHeaven (The Elect) The elect have golden halos and ghostly wings, but they otherwise appear as their mortal forms.\n• Sanctification holy\n• Language Empyrean\n• Additional Ability fly Speed 20 feet\n• Melee wing +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-axis",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UfYZs75zqPmkUXjy",
      "slug": "shade-axis",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0396af10134707e1f7bd8fd5da4fa7fbb08331fe93677660de51f58b223f5595",
    "translatableHash": "sha256:7326543fd9f87154e8ce90c545be16e277b67de11a461551f1c139086152cb60",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Axis)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "shade"
      ],
      "description": "The remade appear as parchment-skinned humanoids covered in lines of close black script.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "fear-effects",
          "emotion"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "I2sDX6PHhRSYYUZN",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Axis (The Remade)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nAxis (The Remade) The remade appear as parchment-skinned humanoids covered in lines of close black script\n• Language Utopian;\n• Additional Ability immune to emotion and fear\n• Melee fist +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:deep-one-hybrid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "uH1EFwWGCyrMcsbb",
      "slug": "deep-one-hybrid",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5ca2047938c3b311b7f1c623516f58f6f9f244c69a4c7db566624beb5a58d878",
    "translatableHash": "sha256:e78352a6e3e777a28a278f6ecaf660710c4cb8db331347a2558c2444a46db48c",
    "data": {
      "schemaVersion": 1,
      "name": "Deep One Hybrid",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid"
      ],
      "description": "Whether from their devout faith to Dagon or their own biological lineage, some humans display physical indicators of their connection to deep ones.\nLumbering, amphibious, and deathless humanoids known as deep ones inhabit coastal areas and deep ocean trenches all across Golarion. Though most simply wish to be left alone, others work tirelessly to grow their ranks.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 5,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": 2,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "arcana": 4,
        "athletics": 4,
        "deception": 5,
        "religion": 7,
        "society": 4
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "piercing 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UcNJx0ktbrRXvFOe",
          "name": "Dagger",
          "bonus": 4,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "AP9SIzfF3PKapfP8",
          "name": "Dagger",
          "bonus": 4,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "ouiEbE6clGYvua6l",
          "name": "Trident",
          "bonus": 4,
          "damage": "1d8+1 piercing",
          "traits": []
        },
        {
          "id": "DkkEoUKZ2Ey1yVn5",
          "name": "Trident",
          "bonus": 4,
          "damage": "1d8+1 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "iISkNUV2yJ21T0xv",
          "name": "Natural Swimmer",
          "kind": "passive",
          "description": "The deep one hybrid can hold their breath underwater for 10 minutes and gains a +2 circumstance bonus to initiative rolls and Reflex saves while swimming."
        },
        {
          "id": "AnLJM0BV5ihklBIh",
          "name": "Ocean's Call",
          "kind": "passive",
          "description": "A deep one hybrid that remains 10 or more miles from the sea for 24 hours becomes Stupefied 1. This effect is removed only once the hybrid returns to the sea."
        }
      ],
      "spellcasting": [
        {
          "id": "uvYfrzoCkgaynbWl",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "EltOZfH0i4ok47UL",
              "name": "Bless",
              "rank": 1
            },
            {
              "id": "hAgaH7pMfj8vf9uD",
              "name": "Bullhorn",
              "rank": 1
            },
            {
              "id": "ykW6zgXlyWxrUr4s",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "0To0TGHKKOsd0mbG",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "moCmXMjpZytw84SZ",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "izRuE20h9eqoLxof",
              "name": "Haunting Hymn",
              "rank": 1
            },
            {
              "id": "eZ38ZqEGbVNF6HQa",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "eUunsiwpjcJsmY5W",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "JtMMReKjNuu5og7T",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        },
        {
          "id": "BIxtjHHHLGSPeAdA",
          "name": "Cleric Domain Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 0,
          "saveDc": 17,
          "spells": [
            {
              "id": "qRCMGWfNh0Ej0wnd",
              "name": "Tidal Surge",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:silvanshee",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UhnElzzdp553WUyM",
      "slug": "silvanshee",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c6223c67fdb07f29bd8b9317d5cb47d73fcfd3a01f3da792fdddd3cc58f16248",
    "translatableHash": "sha256:691ed7ebe557c043dc653d0183ad890f31c9b01946b6a64a6ee8136d595abf23",
    "data": {
      "schemaVersion": 1,
      "name": "Silvanshee",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "agathion",
        "celestial",
        "holy"
      ],
      "description": "Silvanshees are a stealthy and extremely inquisitive contingent of agathions who gather information about the mortal world for other agathions. While they love to explore the Universe and sate their curiosity, they're generally reclusive and skittish. These dual instincts war with each other whenever something exciting piques their interest. Because of their small size, they don't pose a combat threat to most creatures; instead, silvanshees act as Nirvana's eyes and ears in the mortal world, reporting back to superiors or calling for help should they run into danger.\nSilvanshees appear indistinguishable from domestic felines, save for their violet eyes and the telltale blaze of differently colored fur on their chests. Of course, fying gives them away outright, so if at all possible, they only do so while in trusted company to avoid detection.\nTheir fur color runs the spectrum of normal feline colorations. They can also transform into mist when necessary to maintain discretion or make a hasty getaway.",
      "armorClass": 17,
      "hitPoints": 20,
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
        "str": -2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "arcana": 3,
        "medicine": 6,
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
          "unholy 3"
        ]
      },
      "attacks": [
        {
          "id": "yrUTciOjsrqkiFEh",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6-2 piercing; 1d4 spirit",
          "traits": [
            "finesse",
            "holy",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "cBLNcI8XKhBuOFqE",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d4-2 slashing; 1d4 spirit",
          "traits": [
            "agile",
            "finesse",
            "holy",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wqfNw7k5yrmfOl9I",
          "name": "Cat's Curiosity",
          "kind": "passive",
          "description": "A silvanshee's core value is curiosity. This enables them to seek out new experiences and information beyond their current understanding. A silvanshee can use trained skill actions for all skills, even if they're untrained."
        },
        {
          "id": "oWFVODhnr16hmGjN",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "5hGIIhdbBibMGMJ3",
          "name": "Cat's Poise",
          "kind": "passive",
          "description": "When a silvanshee uses their Vapor Form spell, the mist form remains roughly the size and shape of a cat, and the silvanshee retains their fly speed in this form."
        }
      ],
      "spellcasting": [
        {
          "id": "nEHCDw3LRtrCnVMz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "wNRB12DY1NTY5mDD",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "uXVVcTa3GMjmhunS",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "o2KXVgwKtVoHqqbD",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "Y5Dx43XmvvLSahK0",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "HHzuVZDMyhnuUwVS",
              "name": "Speak with Animals (Constant)",
              "rank": 2
            },
            {
              "id": "6bJOCes6QG4MeGCT",
              "name": "Read Omens",
              "rank": 4
            },
            {
              "id": "NOO0bYiSa7c0jAV9",
              "name": "Vapor Form",
              "rank": 4
            }
          ]
        },
        {
          "id": "UWTdQ7IdEAOO2D4Q",
          "name": "Champion Focus Spells",
          "tradition": "divine",
          "category": "focus",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "ddyysRHw4AzSpndW",
              "name": "Lay on Hands",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-cockroach",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UWRydTp1UvpsOWYO",
      "slug": "giant-cockroach",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ac85ca9822eb561b6507ac298a6a925f89347a92bd1b87b29fcf4fa23cfc76f6",
    "translatableHash": "sha256:8da7c7b72ee3b3da1f95e2fa12844f2297f63b1e33e70f73bc50df37a710765f",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Cockroach",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "Cockroaches are communal creatures, rarely setting out on their own unless they are searching for food. If an adventurer encounters a single giant cockroach while exploring, they had best take precautions against others, as there is likely an entire colony nearby.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": -5,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
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
          "id": "JImKJVdKy1YbBpwf",
          "name": "Mandibles",
          "bonus": 8,
          "damage": "1d6+1 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "aJhXMbTAQPFT4ySw",
          "name": "Scurry",
          "kind": "reaction",
          "description": "Trigger The giant cockroach is targeted by a melee attack\nEffect The giant cockroach gains a +2 circumstance bonus to AC against the triggering attack. After the attack resolves, the cockroach Strides, Climbs, or Flies up to 10 feet."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:wayang-whisperblade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "wGnhBByFbXVFt9WX",
      "slug": "wayang-whisperblade",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:738c194121758ed4534927ab2fde03054c6deeed2f79b68b90a4ca2eebbe7831",
    "translatableHash": "sha256:240682daf87aead29d5305a9709382f2358214d327c9a6cfedf155aa6261a9bc",
    "data": {
      "schemaVersion": 1,
      "name": "Wayang Whisperblade",
      "level": 1,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "humanoid",
        "shadow",
        "wayang"
      ],
      "description": "Some wayangs make use of their connections to shadows to outmaneuver their foes in combat.\nIn hushed tones, superstitious people tell their children stories of wayangs—living shadows who come out at night to eat misbehaving children. Mostly, these stories are just fictions of fearful minds, but it's true that wayangs were originally creatures of shadow, straddling the edge between light and darkness. The ancestors of modern-day wayangs set out on a great exodus some 10,000 years ago, leaving their native Netherworld to seek out a new home. On Golarion, they found a great cataclysm had blocked out the sun behind a cloud of smoke and ash, enshrouding the planet in a seemingly endless night, and here they made their new home. When the light returned, wayangs retreated into what shadowy places they could find, avoiding contact with humans and other peoples of the light, who viewed the small, gaunt beings as suspicious reminders of difficult times.\nMany wayang groups are nomadic, though other groups have settled communities. Some live in homes carved out of natural caves, where they create works of art from stalagmites and other natural features. Others live in treetop villages in rainforests where sunlight barely penetrates the thick canopy of the forest. Wayangs are most populous in southeastern Tian Xia, especially in the archipelago of Minata, also known as the Wandering Isles, but their travels can sometimes take them to even further lands.\nDespite their sinister reputation and secretive nature, wayangs are joyous creatures who tell stories and express their emotions through whisper-singing, dancing, and shadow puppetry, enhancing their performances with shadow magic. Similarly, they weave shadow magic into their deadly fighting styles, but wayangs aren't a violent people, usually fighting only to protect what's theirs. Wayangs decorate their stringy hair with beads and their dusky skin with tattooed white dots that form pictures, with each picture silently telling stories about their family's history or their worship of various deities of shadow.",
      "armorClass": 16,
      "hitPoints": 19,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
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
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 3,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "deception": 4,
        "occultism": 6,
        "performance": 6,
        "stealth": 7,
        "thievery": 7
      },
      "languages": [
        "common",
        "shadowtongue",
        "wayang"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "PQKs1CyJ8elKqb6q",
          "name": "Kukri",
          "bonus": 8,
          "damage": "1d6 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        }
      ],
      "actions": [
        {
          "id": "c8581ToPYn9Cmlmw",
          "name": "+1 Status to All Saves vs. Darkness or Shadow",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "tYayaKuyMCdZUbVb",
          "name": "Shadowplay",
          "kind": "action",
          "description": "Requirements The wayang's last action was a melee Strike that damaged their opponent\nEffect The wayang attempts to Tumble Through the opponent's space, with a +2 circumstance bonus to the Acrobatics check. If they succeed, the wayang leaves a shadowy afterimage in their original space, which provides flanking against the opponent until the beginning of the wayang's next turn (usually making them Off-Guard to the wayang's melee attacks)."
        },
        {
          "id": "xH8djLVe8zBpdBke",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The wayang deals an extra 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-plane-of-water",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Wk5flXpCpPzCNfs8",
      "slug": "shade-plane-of-water",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:edaad841e51cec362f876fd4f73158743f2850f72a65ca4968760a09ab7f3244",
    "translatableHash": "sha256:155023abcd5cde3dbca163d7f2109d7121ce492f4d7c6427d7863b7b6a3cd34e",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Plane of Water)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "shade",
        "water"
      ],
      "description": "Water pneuma appear as versions of their mortal selves formed of flowing water.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
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
          "id": "60d6TRr07HgWYE5B",
          "name": "Current",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "water"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Plane of Water (Water Pneuma)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nPlane of Water (Water Pneuma) Water pneuma appear as versions of their mortal selves formed of flowing water.\n• Language Thalassic\n• Additional Ability amphibious, swim Speed 20 feet\n• Melee current +7 (water), Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:fetchling-scout",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "WQdWybW4owJWdEnQ",
      "slug": "fetchling-scout",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0f6e5d49de67a7dd69d41c47ded27eb71ca8d16aa7d6108faa914673482361cd",
    "translatableHash": "sha256:7e74012c20745082350c7386e2b9d25d090b0962f816b492cbe05a84535758e1",
    "data": {
      "schemaVersion": 1,
      "name": "Fetchling Scout",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fetchling",
        "humanoid",
        "shadow"
      ],
      "description": "Fetchling scouts patrol the outskirts of their communities, looking for any possible threats.\nThe people known today as fetchlings are a distinct ancestry descended from generations of humans who became trapped ages ago on the Netherworld. No longer human at all, these people, who call themselves kayals, have become monochromatic in coloration, with flesh tones and hair colors varying between white, black, and all shades of gray. Their limbs are lithe and willowy, and their eyes are generally solid yellow, yellow-green, or white, though a rare few have a purple or blue glow.\nFetchlings have developed their own complex societies in the Netherworld, often under the tolerance of or in servitude to the strange, malignant creatures there, such as sinister velstracs or enigmatic d'ziriaks. While individual fetchlings have their own morals and codes, they are all survivors in a harsh environment, which leads to a tendency toward pragmatism. Fetchling clothing mimics the regions they dwell in, with drab colors tending toward darker shades. When they trade with humans or other societies in the Universe, they often wear masks or concealing clothing to hide their appearance.\nTypical fetchling communities are insular and swiftly close ranks in the event of an intruder. Though individual fetchlings don't mind traveling to and blending in with other societies to facilitate trade, they often hide or even react defensively if they have their own visitors. When one considers the nature of the other denizens of the Netherworld, however, this tendency to assume the worst of interlopers might make sense. Fetchling communities in the Universe are rare, but do exist in small pockets. These communities tend to be somewhat more open than those in the Netherworld. Many fetchling adventurers originate from these enclaves, as the curiosity to see the world beyond the shadows is often a difficult one to sate.",
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
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "deception": 5,
        "diplomacy": 5,
        "society": 3,
        "stealth": 7,
        "thievery": 7
      },
      "languages": [
        "common",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "t5nBADDUrRBOykp2",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+1 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "buTYYEj6cEe0617c",
          "name": "Dagger",
          "bonus": 9,
          "damage": "1d4+1 piercing",
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
          "id": "bXFrB4YJvNNGhXMt",
          "name": "Shadow Blending",
          "kind": "passive",
          "description": "When the fetchling scout is Concealed as a result of dim light, the flat check to target them has a DC of 7, not 5."
        },
        {
          "id": "9Qg89PsqVf2YlrmI",
          "name": "Shadow Stride",
          "kind": "action",
          "description": "Requirements The fetchling is in dim light\nEffect The fetchling Strides. They have a +10-foot status bonus to their Speed during this Stride. The DC from shadow blending increases to check (flat, dc:11) during this Stride, and the fetchling remains Concealed by dim light until the end of the movement, even if they leave dim light during the Stride."
        },
        {
          "id": "VDnMDnWNbJYVWWYG",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The fetchling scout's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": [
        {
          "id": "tztVtG6oV2KehGww",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 15,
          "spells": [
            {
              "id": "9cUJ9gcQOo5PyPTw",
              "name": "Illusory Disguise",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nixie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "X4gmFWEuhtpjBj4P",
      "slug": "nixie",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0f9e1fd174db642ca2c38185c8a031968d93c684e50663f50eca4bc4e03580bf",
    "translatableHash": "sha256:943690adda4574a90a3f54af3d53bcc14c8c375aa8e028d5cb5c60345ba17966",
    "data": {
      "schemaVersion": 1,
      "name": "Nixie",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aquatic",
        "fey"
      ],
      "description": "These aquatic fey often guard ponds, rivers, lakes, and springs, protecting their bucolic homes from the advances of predators and careless settlers alike. Nixies tend to be reclusive and try to keep their presence hidden from humanoids, hoping trespassers won't give them cause to act. They're rarely found near settlements, as industry has a habit of polluting their waters.\nStories of nixies granting small wishes to those they befriend have encouraged mortals to seek out the reclusive fey and ironically made it more unlikely for a nixie to grant such a boon. On the other hand, if someone approaches a nixie with respect, or even better, a positive attitude that displays just the right amount of humility and easygoing openness, a nixie is far more likely to respond favorably to requests for aid. Often a nixie will ask those who seek their assistance to perform a task for them first; such requests can be minor acts of entertainment (such as telling a rousing story or performing a requested song), but in other cases, the nixie might seek more significant help, such as driving off an unwanted local predator or investigating the source of pollution near their home.\nMost nixies only resort to violence if they have no other option. They much prefer to employ primal magic to defuse conflicts before they can escalate to bloodshed. In pursuit of such resolutions, nixies rely on their ability to charm individuals and, if they can establish some degree of magical influence, encourage intruders to leave peacefully. While some nixies try to confuse intruders and subtly lead them away, others rely upon local animals and beasts to scare off trespassers.\nOccasionally, nixies recruit charmed humanoids to act as protectors or help with a task that's simply too big for them to deal with. If this task is underwater, nixies use their magic to temporarily grant the ability to breathe water to the charmed creature. Only those who manage to befriend a nixie are given an invitation to return to swim or dine with the fey, and only the most trusted of allies are granted a minor wish.\nNixies appear as aquatic humanoids the size of a child, with large eyes, catfish-like whiskers, and webbed fingers and toes. They have scaly skin, long pointed ears, and long hair the color and texture of seaweed. Nixies often form small communities, even building underwater societies if their numbers are great enough. In many cultures' folklore, there are stories of nixie nations hidden at the bottom of particularly large lakes.",
      "armorClass": 16,
      "hitPoints": 22,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 4
      },
      "skills": {
        "athletics": 6,
        "nature": 5,
        "stealth": 8
      },
      "languages": [
        "fey",
        "thalassic"
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
          "id": "109W7aPnwhNHkrHE",
          "name": "Claw",
          "bonus": 7,
          "damage": "1d6 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "4tddCK0S1FejzHcG",
          "name": "Wild Empathy",
          "kind": "passive",
          "description": "The nixie can use Diplomacy to [[/act make-an-impression]] on and make very simple [[/act request]]{Requests} of aquatic or amphibious animals."
        },
        {
          "id": "W6stKtycIqoXJIfr",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kbzgtxi6mitCaLGP",
          "name": "Grant Desire",
          "kind": "action",
          "description": "Frequency once per day\nEffect The nixie can duplicate any 1st-rank spell or produce any effect with a power level in line with a 1st-rank spell, but only in response to the request or desire of a non-fey creature. The creature whose desire is granted can never again benefit from that particular nixie's Grant Desire ability."
        }
      ],
      "spellcasting": [
        {
          "id": "p23AKjDuFSYrPgZz",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "p3okmanJApgDvPTD",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "Vc5rrDmiuz7SKiHr",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "zPuNQGhi5TybPxEI",
              "name": "Water Breathing",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sylph-sneak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XbQEXEBwPsBMzxqN",
      "slug": "sylph-sneak",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d008c3e7741b5344c49a72055c31253a9d3314c4aaa6e61f6103ba81e30b18ff",
    "translatableHash": "sha256:8a953bfa5112c58be970e1e198a99373885d12f7a90a4526d0a054c444977621",
    "data": {
      "schemaVersion": 1,
      "name": "Sylph Sneak",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "sylph"
      ],
      "description": "Born with elemental gales coursing through their breath, sylphs are wispy planar scions whose bodies seem caught in a perpetual, gentle breeze. Most commonly born of unions between mortals and jaathoom, sylphs are quick-witted and creative, but they're prone to flights of fancy and tend to be easily distracted.\nSylphs are notorious for their practice of \"listening to the wind,\" which most others dismiss as a fancy name for eavesdropping. Yet this custom means much more to sylphs, who spend hours listening to the stories brought to them on the proverbial breeze. While some less scrupulous sylphs can use the information they learn to blackmail or abuse others, most of them see listening to the wind as their way of staying connected to the world around them while still keeping it comfortably at arm's length. Certainly, the typical sylph sneak doesn't seek to use what they learn for ill but instead warns others of dangers yet unrealized or prepares themself for a dangerous task.",
      "armorClass": 18,
      "hitPoints": 17,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "acrobatics": 7,
        "deception": 6,
        "diplomacy": 6,
        "society": 4,
        "stealth": 7,
        "thievery": 7
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
          "id": "lB6z7CfDLMd5lPpG",
          "name": "Starknife",
          "bonus": 9,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "rajOpAe3FLG1J8uc",
          "name": "Starknife",
          "bonus": 9,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "thrown-30",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "sRJgd3DpiEABxebP",
          "name": "Deflecting Gale",
          "kind": "reaction",
          "description": "Trigger The sylph sneak is the target of a physical ranged attack\nRequirements The sylph sneak is aware of the attack\nEffect A swift gale whips up between the sylph sneak and the source of the ranged attack, giving the sneak a +3 status bonus to AC against the triggering attack. If the attack misses, the wind deflected it. The wind can't deflect unusually large or heavy ranged projectiles (such as boulders or ballista bolts)."
        },
        {
          "id": "HhUiMTB8Qa8ySlVM",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The sylph sneak's Strikes deal 1d6 extra precision damage to Off-Guard creatures."
        },
        {
          "id": "DcQizfyqoLcJASk7",
          "name": "Surprise Attacker",
          "kind": "passive",
          "description": "On the first round of combat, creatures that haven't acted yet are Off-Guard to the sylph sneak."
        },
        {
          "id": "U64zKLjgQG2MzhAS",
          "name": "Wind's Guidance",
          "kind": "passive",
          "description": "When the sylph sneak attacks with a thrown weapon, the range increment increases by 10 feet."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shade-netherworld",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Xmo4EAdMgltKqjah",
      "slug": "shade-netherworld",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:092204b73a85737aca332c097cba21b302a0a865ab1c04b692b183bc4ae4a18c",
    "translatableHash": "sha256:2e815e37b6cb549b741146adb1dd20392ebce13b5d99096c19620e87c6d9fb9f",
    "data": {
      "schemaVersion": 1,
      "name": "Shade (Netherworld)",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "shade",
        "shadow",
        "unholy"
      ],
      "description": "The mutilated appear as they did in their mortal lives, yet are covered in wounds or partially adorned or wrapped in chains.\nWhen a mortal dies, their soul travels to the Boneyard in the Outer Planes where they're judged by Pharasma, the goddess of the dead. Once judged, their soul is sent on to their final reward or punishment and, in the process, transformed into a creature known as a shade. This transformation grants the soul a new body, one whose shape is determined by the prevailing philosophical forces of the plane to which they're sent. A shade's memories from their former life usually fade, reduced to a few hazy fragments akin to half-remembered dreams. Regardless of the shade's size, power, or nature in life, they're a Medium creature in their afterlife.\nExistence as a shade can last for eons but isn't necessarily eternal. Deities, powerful denizens of the Great Beyond, or even the Outer Planes can further alter a shade's nature by either reducing them into raw quintessence, spiritual essence that's then used to expand a plane's physical manifestation, or by transforming them into a new form of supernatural life such as a celestial, monitor, or fiend. Should a shade die, their body breaks down in a process akin to decay, their form reverting to the elements that make up their plane. This represents the true end of a soul's journey—their life essence reuniting with the heart of the Great Beyond to be recycled into Creation's Forge, fueling the creation of new souls.",
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
        "fortitude": 7,
        "reflex": 7,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 2,
        "con": 2,
        "int": 2,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 7
      },
      "languages": [
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7QTkBSoDwgvNiBiC",
          "name": "Chain",
          "bonus": 7,
          "damage": "1d8+2 bludgeoning",
          "traits": [
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "9yu44cM7W0Xg2Q36",
          "name": "Planar Incarnation - Netherworld (The Mutilated)",
          "kind": "passive",
          "description": "All shades are formed from and personify the nature of the plane on which they manifest, and their statistics are adjusted as summarized below. They also gain any trait associated with creatures from their plane.\nShadow Plane (The Mutilated) The mutilated appear as they did in their mortal lives, yet are covered in wounds or partially adorned or wrapped in chains.\n• Sanctification unholy\n• Language Shadowtongue\n• Additional Ability immune to bleed and fear\n• Melee chain +7, Damage 1d8+2 bludgeoning"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tanuki-village-hero",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Y8rw1J79zfGyznoa",
      "slug": "tanuki-village-hero",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2bdfad23189de55c613ab366ffc90644fe16e1ffaae40868b652355c31b984fd",
    "translatableHash": "sha256:14d50e47d31d4c5c8b1b57467f9a67d3db063e7872c7f792def12169ffd19f9b",
    "data": {
      "schemaVersion": 1,
      "name": "Tanuki Village Hero",
      "level": 1,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "humanoid",
        "tanuki"
      ],
      "description": "A tanuki village hero is a firefighter, monster slayer, peacekeeper, and altruist. Village heroes are elected by community vote; while the village hero sometimes grumbles that it's a lot of responsibility for a single tanuki to bear, the community insists there's no higher honor than to be trusted with their well-being.\nTanuki are an ancestry of humanoids resembling raccoons or canids who live primarily in Minkai, in Tian Xia, though they are also found in Hwanggot and the successor states of Lung Wa. Tanuki outside of Minkai tend to be shier, keeping to their raccoon-dog forms and staying out of trouble, and so most people associate tanuki solely with the boisterous and mischievous communities found in Minkai.\nPerennial underdogs, most tanuki live for feasting, festivals, and fun, which they accomplish mainly through their wide range of shapeshifting powers. They are especially known for pranks that tend to backfire in their faces, from posing as teapots for a quick profit (and then immediately being set on fire by new owners seeking to make tea) to posing as priests (and being promptly exorcised by the real priests with whom they attempt to blend in.) Despite this, tanuki are masters at rolling with any punches that life flings at them.\nMany tanuki see other shapechangers as rivals, especially kitsune, which are also common in Minkai. Such tanuki are Prone to creating impromptu competitions to prove their ancestry's superiority at shapechanging. These competitions are always meant to be good natured, at least for the competitors; bamboozled villagers caught up in the wake of these games often have different opinions.\nSomewhat confusingly, the animals that tanuki resemble are also known as tanuki, and it is difficult to ascertain whether any individual raccoon dog is a simple beast or a sapient tanuki in disguise.\nTransformation Duels\nTanuki often settle disputes with transformation contests. The competitors' objective is to fool their opponent with a combination of assumed form and clever ruse. Legends tell of rivals transforming into flotillas of ships or imperial processions, or cunningly tricking their opponent into thinking they did.",
      "armorClass": 16,
      "hitPoints": 21,
      "speedFeet": 25,
      "perception": {
        "modifier": 4,
        "senses": []
      },
      "saves": {
        "fortitude": 7,
        "reflex": 8,
        "will": 2
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": -1,
        "cha": 3
      },
      "skills": {
        "athletics": 5,
        "diplomacy": 6,
        "stealth": 6
      },
      "languages": [
        "common",
        "tanuki"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "zvc9NCh3KQz0NsgR",
          "name": "Kama",
          "bonus": 7,
          "damage": "1d6+2 slashing",
          "traits": [
            "agile",
            "trip"
          ]
        },
        {
          "id": "CAPkmD8dkSyJ97DO",
          "name": "Dart",
          "bonus": 8,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "gpSzOFXDZZcla2i2",
          "name": "Tactical Retreat",
          "kind": "reaction",
          "description": "Trigger The tanuki takes damage\nEffect The tanuki runs to a better tactical position. The tanuki gains the Fleeing condition until the beginning of their next turn and Strides."
        },
        {
          "id": "Gw47NluA8JjCljAl",
          "name": "Change Shape",
          "kind": "action",
          "description": "The tanuki takes on the form of a mundane raccoon dog. This makes them Tiny and gives them a +2 status bonus to their Stealth modifier, but they can't make Strikes."
        },
        {
          "id": "xlRvqRH56IaXVOPc",
          "name": "Tricky Throw",
          "kind": "action",
          "description": "The tanuki winds up and puts their everything into a throw. They make a dart Strike at one enemy within 40 feet. If the Strike is unsuccessful, the tanuki falls Prone. If the Strike is successful, they really did put everything into the throw, having transformed into the dart the moment they threw it. The tanuki disappears from the space they threw from, appears in a space adjacent to the enemy and makes a kama Strike against said enemy, who's Off-Guard to the attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:undine-hydromancer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "yFFw1Gsd4teXA97L",
      "slug": "undine-hydromancer",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f34967abe690acba1b8a8611d70dd4b9f106644699d85c3f969a1cf59ec930d0",
    "translatableHash": "sha256:5034ced31c5ab9d8db1226864dbcb6cc22b1184605f00698c6d854a864ec9327",
    "data": {
      "schemaVersion": 1,
      "name": "Undine Hydromancer",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "human",
        "humanoid",
        "undine"
      ],
      "description": "Undines are infused with elemental water-the churning power of the briny deep flows through them. These planar scions are often athletic and lithe, but they are easily distracted by auditory sensations because of how much louder and clearer sound rings above the waves.\nUndines are perhaps the most settled of all geniekin, often forming communities along the coast or even on the water itself. In the latter case, they prefer to settle in ship-towns that sometimes number dozens of vessels in all shapes and sizes. The undines who fill these communities are similarly diverse, bringing aspects of multiple cultures together to form one whole. Ship-towns are permanent, but fluid-they grow, recede, and migrate constantly as undine families add their ships to or remove them from the flotilla. An undine town like this may remain at sea for years, its residents coming ashore only on rare occasions to collect wood for cookfires or to repair their homes. The paradoxically ever-shifting permanence of these communities reflects the undine virtues of adaptability and freedom, while also maintaining the prime importance of the community.\nUndine hydromancers are quite valued on these floating settlements, if only for their ability to create fresh drinking water while adrift on the sea.",
      "armorClass": 15,
      "hitPoints": 15,
      "speedFeet": 25,
      "perception": {
        "modifier": 5,
        "senses": []
      },
      "saves": {
        "fortitude": 4,
        "reflex": 5,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 2,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "arcana": 3,
        "athletics": 3,
        "diplomacy": 7,
        "intimidation": 7,
        "nature": 5,
        "survival": 5
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
          "id": "rDl9ZNp0ry5Tek3B",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "UGoT9Ax8vT4G0yrI",
          "name": "Dagger",
          "bonus": 7,
          "damage": "1d4 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [],
      "spellcasting": [
        {
          "id": "SMYAwNIAUZFIpym8",
          "name": "Primal Spontaneous Spells",
          "tradition": "primal",
          "category": "spontaneous",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "13ID84tU6rSvoEoy",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "oeij0iutTpG03KAa",
              "name": "Create Water",
              "rank": 1
            },
            {
              "id": "pJ06iLpdBWkTt1Ug",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "zfoJHAesU2fi7hws",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "yOK2fSRZMSoIVgPL",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "EALj2vBFB26Wngom",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "69rbhWuzF2GIU9tc",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "l8y6zFdkIStGeoan",
              "name": "Tangle Vine",
              "rank": 1
            }
          ]
        },
        {
          "id": "sPu4LC8sJhWCrgfB",
          "name": "Primal Focus Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "lNWG0i8JfKRraveg",
              "name": "Elemental Toss",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vanara-disciple",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "za4NM8NwZKumv3NM",
      "slug": "vanara-disciple",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:588e9c81d4597fc2e80c394d145b9808eb474c49ad3ace1dfd70ce74bbf2df6d",
    "translatableHash": "sha256:f6a1d6de96e7ad210319795f9214542e45282853048184c63830af814a91b322",
    "data": {
      "schemaVersion": 1,
      "name": "Vanara Disciple",
      "level": 1,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "vanara"
      ],
      "description": "Many young vanaras travel, both to see the world and to search for a path that might lead to enlightenment.\nVanaras are monkey-like humanoids who dwell in treetop villages high in the canopies of lush jungles and verdant forests. Like the monkeys they resemble, vanaras manifest a wide variety of different fur colors, body types, and facial features, but they all have in common long, dexterous fingers and toes as well as nimble and curious minds. Many of them learn to use their tails to capably manipulate objects.\nVanaras have a friendly culture, with most individuals seeking balance or enlightenment in their lives. Their propensity for mischief and history of fighting evil has earned them many ancestral enemies, and thus they usually make their homes far from urban areas. The majority of vanara settlements are found in southeastern Casmaron, among the lush jungles where they first originated. Devotion to monastic training and religious study has led to secondary populations forming in the Impossible Kingdom of Jalmeray, eastern Katapesh, Tian Xia, and northeastern Nex. Nonetheless, young vanaras seized by wanderlust might roam far across the world, and travelers from many distant lands might in turn visit vanara communities in search of the wisdom of their elders and sages.\nVanara culture often pits their inborn desire for trickery with a desire to transcend such origins, leading to many vanaras studying monastic practices. They also value tales of heroic vanaras from the past, looking to such icons for inspiration in their own lives. Most vanaras are quick to offer aid to those in distress and rarely hesitate in the face of evil, no matter the danger it presents. The leaders of vanara villages tend to be religious figures, or occasionally others possessing similar values and experience. Vanaras venerate Ragdya, the Sage of the Mountain, who encourages seeking enlightenment through worldly action and sees the virtues of pranks and humor.",
      "armorClass": 19,
      "hitPoints": 16,
      "speedFeet": 25,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 0,
        "int": 1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "religion": 4,
        "stealth": 7
      },
      "languages": [
        "common",
        "fey",
        "vanara"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hz2xVCzgLGQ7zrW7",
          "name": "Fist",
          "bonus": 7,
          "damage": "1d6+1 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal"
          ]
        },
        {
          "id": "gfjdpoKLB9no3w90",
          "name": "Bo Staff",
          "bonus": 4,
          "damage": "1d8+1 bludgeoning",
          "traits": [
            "parry",
            "reach-10",
            "trip"
          ]
        },
        {
          "id": "E9SYU2Y6j14bUvro",
          "name": "Javelin",
          "bonus": 7,
          "damage": "1d6+1 piercing",
          "traits": [
            "thrown-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "Vhz1JqOcmXueS3to",
          "name": "Prehensile Tail",
          "kind": "passive",
          "description": "The vanara can use their long, flexible tail to perform Interact actions requiring a free hand, even if both hands are otherwise occupied. Their tail can't perform actions that require fingers or significant manual dexterity, including any action that would require a check to accomplish, and they can't use it to hold items."
        },
        {
          "id": "hUzUSCfEWKpuKrRl",
          "name": "Flurry of Blows",
          "kind": "action",
          "description": "Frequency once per round\nEffect The vanara disciple makes two fist Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses."
        },
        {
          "id": "wKYtObOYEApF5jfa",
          "name": "Spring Up",
          "kind": "action",
          "description": "Requirements The vanara disciple is Prone\nEffect The vanara Stands, then can immediately Step twice. The Stand action doesn't trigger reactions."
        }
      ],
      "spellcasting": [
        {
          "id": "AO3JVSdnGlpNcOqN",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 5,
          "saveDc": 13,
          "spells": [
            {
              "id": "7KQcetltRybwh3Qb",
              "name": "Pest Form (Monkey Only)",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:camel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ZAXM01KREZECWRvz",
      "slug": "camel",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a898b068e6bcd0d21f4de02838f7fb3c72d74a8d5a713486672a7f34fa827268",
    "translatableHash": "sha256:d01721356a6862e19a57f25d7ad6c2659cb0ece8183af4aa0d842d0e0dfb6bd1",
    "data": {
      "schemaVersion": 1,
      "name": "Camel",
      "level": 1,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "For generations untold, nomads and traders have relied on sure-footed camels to cross the harsh deserts and trackless wastes around the world. Thriving where other animals wither and perish, camels are well-adapted to their homes with tough skin and the ability to store nutrients within their bodies. Properly cared for, these \"ships of the desert\" can trek for weeks between oases without trouble.\nCamels have three eyelids to protect them from desert sands and other blowing debris. One lid is completely clear, which allows them to see and travel during high winds. When sandstorms strike, camels completely close their nostrils to protect their lungs. Their underbellies also sport a thick, specialized skin, allowing them to lay down safely on burning hot sands.\nContrary to popular belief, fatty tissue comprises a camel's humps rather than water. This stored energy allows the animals to survive long distances between feedings. These herbivores can also readily digest hardy scrub brush inedible to other species, making them one of the hardiest desert survivors. Strong as a warhorse, camels can run fast and even sprint for short periods of time when they feel threatened, though they prefer a slow, plodding pace to conserve energy.\nOne-humped camels, also called dromedaries, are more common in the deserts of northern Garund, while the two-humped variety are native to the dry steppes of Casmaron. Both species have tall and lanky builds, standing about 6 feet at the shoulder and weighing around 2,000 pounds. They can be ornery when mishandled, and they don't hesitate to bite, kick, or even spit a noxious substance on riders who don't treat them well.\nIn addition to transporting people and goods, camels are a key source of fiber for clothing and tents as well as milk. Their meat is highly nutritious and surprisingly tasty, but given the creatures' utility, this use is reserved for special occasions or truly dire situations.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 35,
      "perception": {
        "modifier": 4,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
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
          "id": "p6oPHL2T4fZfMivY",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "fr7zLtKzGQVPqqKL",
          "name": "Spit",
          "bonus": 6,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "RVk9mcBqt1YRswGY",
          "name": "Desert-Adapted",
          "kind": "passive",
          "description": "A camel is well-adapted to heat and deserts. If allowed to drink and eat its fill, (roughly 40 gallons), it can Subsist for 2 weeks without needing to attempt Survival checks, and it treats environmental heat as if it was one step less severe."
        },
        {
          "id": "hcf7RGBrhHKjGcG4",
          "name": "Camel Spit",
          "kind": "passive",
          "description": "To drive away enemies, the camel spits the partially digested contents of its stomach at a creature within 10 feet.\nOn a hit, the target is Dazzled for 1 round and must succeed at a check (fortitude, dc:17) save or become Sickened 1.\nThe camel can't use its camel spit Strike again for [[/gmr 1d4 #Recharge Camel Spit]]{1d4 rounds}."
        },
        {
          "id": "1RYNKTCRimaI46EV",
          "name": "Sand Stride",
          "kind": "action",
          "description": "The camel Strides twice. It has a +5-foot circumstance bonus to its Speed during these Strides, ignoring difficult terrain caused by rubble, sand, and uneven ground made of earth and stone."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:house-drake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Zh8awPHA7DZxTboc",
      "slug": "house-drake",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a95ed24a1387e5a72eb48af28c3091c25aca9d97afab7d9179caa798287f1601",
    "translatableHash": "sha256:8c7ec7cf7e98b747e5964e71f0dc40edbbe101f99ff988b0fb87e61565f949a9",
    "data": {
      "schemaVersion": 1,
      "name": "House Drake",
      "level": 1,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "dragon"
      ],
      "description": "Beautifully colored in purples and electric blues, the little dragonets called house drakes are genuinely brilliant in more ways than one. They're playful and kind, and while they have a long tradition of assisting spellcasters, they prefer to be treated as equals and partners rather than pets. They're quite intelligent and don't appreciate condescension from those who treat them as simple animals.\nThese tiny dragons have appeared in traditional Varisian tales for centuries, but only relatively recently have they become known by the name \"house drake.\" This new name arose in the city of Korvosa, where house drakes have adapted particularly well to urban life. When students of the magic school called the Acadamae failed in their studies and allowed their imp familiars to run wild, these tiny dragons found that they were particularly well suited to combating them. The two species are well matched in cunning. Though their clashes typically begin with trying to outwit one another, they often end in messy brawls across rooftops and into alleys. The residents of Korvosa appreciated both the protection and the dragons' charming appearance and demeanor. As such, their population has flourished, and house drakes are more common in Korvosa than anywhere else in the world.\nHouse drakes have peculiar grooming habits, often sharpening their teeth with silver coins or small jewelry. Because of this, their bites and exhalations are tinged with particles of silver. Otherwise, they're carnivorous, eating vermin and small birds. Though house drakes are capable of hunting for food, many of them find it a bit dull and will happily accept donations of food, preferring to spend their time at other pursuits. To truly get on a house drake's good side, though, one should offer a gift of silver. Donations to these dragonets have become regular practice in Korvosa, to the point where \"paid any drakes lately?\" has become a common phrase to suggest someone is a bit gullible and soft-hearted. These donations are just that—charity. House drakes avoid anything resembling a job, taking pride in their self-sufficiency and ability to choose how to spend their time.",
      "armorClass": 17,
      "hitPoints": 15,
      "speedFeet": 15,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 7,
        "society": 4,
        "stealth": 7,
        "survival": 6
      },
      "languages": [
        "chthonian",
        "common",
        "daemonic",
        "diabolic",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "sleep",
          "paralyzed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "hNq7IVfGD1yba4gp",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d8 + 1 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "xldFS8pxvUDODZeT",
          "name": "Ferocious Will",
          "kind": "reaction",
          "description": "Trigger The house drake succeeds at a saving throw against a magical mental effect\nEffect The house drake sends a blast of magical feedback at the effect's source, dealing 2d6[mental] damage (check (will, dc:16, basic) save) to that creature. On a failed save, the creature is also Slowed 1 for 1 round."
        },
        {
          "id": "O4iNJ257JLJqRJwN",
          "name": "Silver Breath",
          "kind": "action",
          "description": "The house drake breathes a @Template[type:cone|distance:10] of silver mist. Each creature within the mist must succeed at a check (will, dc:16) save or become Stupefied 2 for 1 round. The house drake can't use Silver Breath again for [[/gmr 1d4 #Recharge Silver Breath]]{1d4 rounds}."
        },
        {
          "id": "8vyRXD8spS1ZT642",
          "name": "Silver Strike",
          "kind": "passive",
          "description": "House drakes sharpen their jaws on silver ornamentation until they incorporate bits of silver in their teeth. Their jaws Strike counts as silver."
        }
      ],
      "spellcasting": [
        {
          "id": "fCCRAEqAsXmPElll",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "3DjaTuJaihUywNPN",
              "name": "Alarm",
              "rank": 1
            },
            {
              "id": "zAJ1FgirE8BqnyJz",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "BrjOGGKzTrIVLH7y",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "FNZ7osGprf3SzmH2",
              "name": "See the Unseen",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spawning-soulrider-celestial",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ZTH7qmzEVshknw41",
      "slug": "spawning-soulrider-celestial",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1ee51416cd22fa6a735f580a5dcce14815b9f7a72878810124eedb29776a1ac4",
    "translatableHash": "sha256:d117379670c8ecca4fabfaea94a03390a82b86cde89e405c178767389aa50ae4",
    "data": {
      "schemaVersion": 1,
      "name": "Spawning Soulrider (Celestial)",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "aberration",
        "celestial",
        "holy"
      ],
      "description": "When soulriders absorb sufficient planar energy, they become gravid with countless tiny eggs. Such soulriders instinctively return to the Universe via the Dead Roads to lay their spawn, although the exact metaphysical process has yet to be fully understood. Fiends and others keen to enter the mortal world have begun capturing and studying spawning soulriders, though such experiments carry their own risks, for soulriders prevented from returning to the Universe will continue to grow larger as they absorb more energy.\nOnce back in the Universe, spawning soulriders become fiercely protective of their near-translucent eggs and tiny spawn, using their remora-like maws to fend off potential threats. Anyone disturbing a soulrider in the process of spawning might find out what it feels like to have pieces of their soul torn away.\nResembling a lamprey or hagfish with a long whiplike tail, a soulrider uses its harmless sucker to hitch rides on a creature's soul. This seemingly simple connection transcends the physical, attaching directly to the host's soul and even riding along with the soul to its final destination. Once there, a soulrider leaves its host to absorb the surrounding planar energies, adapting to the new environment and growing large enough to produce spawn. However, it can only do so in the mortal Universe, so it must find a portal or other way to return. With this cycle, they've spread to every plane in the Outer Sphere, as well as many mortal worlds.\nAlthough increasingly widespread, soulriders only appeared a little over a century ago. Thought to be a fleshwarper's attempt to cheat Pharasma's judgment by attaching several innocent souls to their own, soulriders' numbers have grown explosively since then.\nSoulriders require little more than air to survive, but they're instinctually aware of their need for a mortal soul. Although their suckers are harmless, soulriders who feel threatened or become impatient will finish off their hosts or nearby threats with their tail.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "spirit 2"
        ]
      },
      "attacks": [
        {
          "id": "agKqmHz3emJrNp6k",
          "name": "Sucker",
          "bonus": 8,
          "damage": "",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "uXhQZ6fjRl2sqqZX",
          "name": "Tail",
          "bonus": 8,
          "damage": "1d4+1 bludgeoning; 1 spirit",
          "traits": [
            "agile",
            "finesse",
            "sanctified"
          ]
        }
      ],
      "actions": [
        {
          "id": "3KPUCFtcplHsvgwa",
          "name": "Planar Adaptation (Celestial)",
          "kind": "passive",
          "description": "A spawning soulrider has traits appropriate to the planar energy it's absorbed: celestial and holy, fiend and unholy, or monitor."
        },
        {
          "id": "dlr9wG2QDkhnZtiI",
          "name": "Swim the Dead Roads",
          "kind": "passive",
          "description": "In a process that takes 1 week, a spawning soulrider can travel through channels in the multiverse only it can sense, moving from the Outer Sphere plane whose energy it has absorbed to the Dead Roads that connect the Boneyard to the mortal Universe. From there, it travels to a random place in the Universe that can support life."
        },
        {
          "id": "v98SCSlvMo3EfN49",
          "name": "Celestial Flare",
          "kind": "action",
          "description": "Each enemy within 30 feet of the soulrider takes 2d6[spirit] damage (check (will, dc:17, basic) save). Creatures that fail the save are Blinded for 1 round. The spawning soulrider can't use Celestial Flare again for 1 minute."
        },
        {
          "id": "cfoKxehibsNLHWQ2",
          "name": "Grind Soul",
          "kind": "action",
          "description": "Requirements The spawning soulrider is attached to a creature's soul\nEffect The soulrider grinds the creature's soul with its jagged inner mouth, dealing 2d8[spirit] damage (check (will, dc:16, basic) save). On a critical failure, the creature also takes 1d4[persistent,spirit] damage. Regardless of the result, the spawning soulrider is no longer attached to the creature."
        },
        {
          "id": "wV9zXP8TnAoPvW4d",
          "name": "Propulsive Launch",
          "kind": "action",
          "description": "The soulrider Leaps up to 40 feet, then makes a sucker Strike. If it's in the air and not attached to a creature after the Strike, it falls."
        },
        {
          "id": "i1iMhIb5S59s5d9a",
          "name": "Soul Attach",
          "kind": "passive",
          "description": "When a soulrider succeeds at a sucker Strike against a target with a soul capable of facing judgment, its sucker attaches it to that soul. While attached, both the soulrider and the host creature are Off-Guard, and the soulrider moves with its host until the soulrider dies or the host pulls it loose ([[/act escape dc=16]]). If the host dies while the soulrider is attached, the soulrider disappears immediately to follow the soul leaving the body. A creature returned to life before reaching its final destination generally returns with any attached soulrider."
        },
        {
          "id": "Dep7iLzGTiny7LgO",
          "name": "Tail Thrash",
          "kind": "action",
          "description": "Requirements The soulrider is attached to a creature's soul\nEffect The soulrider makes a tail Strike against the creature whose soul it's attached to, then one against another creature adjacent to the original target. These Strikes count towards the soulrider's multiple attack penalty, but it doesn't increase until after the second attack."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:icicle-snake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "6sYj9SQRzKywNDOJ",
      "slug": "icicle-snake",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1517810f266d1f3a963fd0cccdc897f5be9fc7fea2ba8aa6288eb9805a4d21c3",
    "translatableHash": "sha256:3ee8ed496e13ec91934fca42538df252ae046fe0f1ed7b60178f7a3924987bd8",
    "data": {
      "schemaVersion": 1,
      "name": "Icicle Snake",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "cold",
        "elemental",
        "water"
      ],
      "description": "Translucent and capable of hanging suspended and near motionless, icicle snakes sense the heat of living creatures as a threat and attempt to use their camouflage and chilling bite against foes.\nWater elementals that become infused with cold or mist have increased mobility in regions outside of bodies of water.",
      "armorClass": 18,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 9,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "stealth": 7
      },
      "languages": [],
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
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "SNaq8XobGdaUsl6u",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d6+1 piercing; 1d6 cold",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "b7wHUPpyFomDL8IY",
          "name": "Icicle",
          "kind": "action",
          "description": "Until the next time it acts, the icicle snake appears to be an unassuming icicle. It has an automatic result of 27 on Deception checks and DCs to pass as an icicle."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:munsahir",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "9YU5IF7pIcuq9bNY",
      "slug": "munsahir",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cc5360fcc0d81edc09f39d689ee26d2f2c6b90cc18e8db1ca78f2dbc6d44a7e4",
    "translatableHash": "sha256:0647bfbc6cc036316a5872a68ed6999c89c0bd8284233e7157a80ab258b19a29",
    "data": {
      "schemaVersion": 1,
      "name": "Munsahir",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire",
        "humanoid"
      ],
      "description": "Munsahirs are an elemental people living on the Plane of Fire, often crudely described by mortals as brassy dwarves. They have stout, wide bodies with broad shoulders, shining metallic skin, and heads wreathed in flame.\nMunsahir society is organized into traditional roles inherited along their familial lines, and a munsahir's role is indicated clearly by the metals they wear in their armored kilts. Their culture focuses on tradition and history, placing high value on obedience and conformity within one's community, and as a result it's slow to change. Many munsahirs take pride in their ancestral roles and in fulfilling their inherited duties, providing needed services within their communities.\nLong ago, traditional munsahir values of self-sufficiency and close community led them to build mighty fortresses across the Plane of Fire, where they isolated themselves from other planar denizens and even other munsahir communities. These values, sadly, also led to their downfall. Without any connections to or regular communication with other settlements, these fortresses were easily conquered by the ifrits of Medina Mudii'a, the dominant power on the Plane of Fire. Now most munsahir fortresses lie abandoned and ruined, with free holds so few and far between that most think them all lost.\nMunsahirs born within the ifrits' Dominion of Flame belong to the populations that were conquered and assimilated into the empire ages ago. They live in perpetual service to the empire, disconnected from their history and culture, yet have formed their own close-knit society in Medina Mudii'a under the fire genies' harsh rule. A handful of munsahir communities have escaped ifrit conquest, most often by Fleeing far from the genies' realms. Some of these munsahirs now reside in hot, volcanic areas of the Darklands on Golarion, while others have fled to the remote depths within the Plane of Fire. Prying outsiders nevertheless perpetually seek out these settlements, longing for legendary munsahir-crafted goods.",
      "armorClass": 17,
      "hitPoints": 40,
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
        "str": 3,
        "dex": 1,
        "con": 4,
        "int": 2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 7,
        "crafting": 10,
        "intimidation": 4
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
          "cold 4"
        ]
      },
      "attacks": [
        {
          "id": "8IAg57ZRzV51urlh",
          "name": "Warhammer",
          "bonus": 9,
          "damage": "1d8+3 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "kzwDYGXsWl0wyTwN",
          "name": "Light Hammer",
          "bonus": 9,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "f9gqhbFaPyj77i0e",
          "name": "Light Hammer",
          "bonus": 7,
          "damage": "1d6+3 bludgeoning",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "JNflvBLtzzPBlMKZ",
          "name": "Heat of the Forge",
          "kind": "passive",
          "description": "10 feet. A munsahir's skin radiates heat like forge fire. A creature that starts its turn in the area must succeed at a check (fortitude, dc:16, options:area-effect,inflicts:fatigued) save or become Fatigued while it remains in the area. Creatures immune to environmental heat effects or with any fire resistance are immune."
        },
        {
          "id": "Re3laGuS2iEiMxt0",
          "name": "Burning Touch",
          "kind": "passive",
          "description": "The munsahir's Strikes deal an extra 1d6 fire damage (included above). When the munsahir successfully performs a Grapple, Reposition, or Shove, they also deal 1d6[fire] damage to their target."
        },
        {
          "id": "N7bXlw2VkUQPBHUy",
          "name": "Scorch",
          "kind": "action",
          "description": "Requirements The munsahir is wielding a light hammer\nEffect The munsahir shrouds the light hammer in flames and hurls it forward, dealing 2d6[fire|options:area-damage] damage to each creature in a @Template[type:line|distance:20] (check (reflex, dc:16, basic) save)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:domovoi",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AzYYP23uGecb0Jmw",
      "slug": "domovoi",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ca053d28fd9b2655fc29e0b33804ce2c0fe8cb248d05b5e0403e784c5bba89fa",
    "translatableHash": "sha256:9558be8af9d393daca46554599d828951f0539c73fa370a0522ecc8fc7b578a0",
    "data": {
      "schemaVersion": 1,
      "name": "Domovoi",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey"
      ],
      "description": "The elderly domovoi are patrons of the home and the dearest of all house spirits to the people they live with. Families with a domovoi leave a bowl of milk in the corner of the home in thanks, and peasants often take great pains to coax a domovoi to follow them to a new house.\nAn enraged domovoi rallies the home itself in their defense. Anything in the house could betray its residents. Crockery falls onto the heads of attackers, doors slam in their faces, carpets tangle their feet, and woe betide the attacker if someone has hung a sword on the wall.\nHouse spirits are shy, often helpful, sometimes wrathful fey who dwell alongside peasants and farmers. They reside in the house, the yard, the granary, the bathhouse—wherever people build and live. Due to this proximity, house spirits often take on the mannerisms or appearance of nearby mortals. Their reclusive nature and tendency to go unseen earned them the moniker of \"spirits,\" though in truth they're fully embodied fey.\nHouse spirits take an almost parental interest in \"their\" mortals. Given proper respect, these fey work tirelessly for their charges—they chop wood, care for livestock, mend clothes, sweep the floor, and tend to the stove. If offended, though, the house spirit becomes a menace, frightening animals or children and ruining belongings.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 5,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 3,
        "wis": 5,
        "cha": 1
      },
      "skills": {
        "crafting": 9,
        "stealth": 7
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 4"
        ]
      },
      "attacks": [
        {
          "id": "6r7V65krbPC9VAQR",
          "name": "Broom",
          "bonus": 7,
          "damage": "1d4+4 bludgeoning",
          "traits": []
        },
        {
          "id": "znh7MN5xKjTCAWIb",
          "name": "Enraged Home (Bludgeoning)",
          "bonus": 9,
          "damage": "1d8+4 bludgeoning",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "yGNQylG3gkP01zEB",
          "name": "Enraged Home (Piercing)",
          "bonus": 9,
          "damage": "1d8+4 piercing",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "mIh5xvxEJItIldbK",
          "name": "Enraged Home (Slashing)",
          "bonus": 9,
          "damage": "1d8+4 slashing",
          "traits": [
            "primal"
          ]
        }
      ],
      "actions": [
        {
          "id": "lV0OzFyLbJflMqO9",
          "name": "Tremorsense (Imprecise) Within Their Entire Bound Home",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zeRW8ciF6iAZTQUe",
          "name": "Master of the Home",
          "kind": "passive",
          "description": "A home with a friendly domovoi is blessed, as the domovoi cooks, cleans, fetches water, and does a hundred other small tasks. A home so blessed never encounters random accidents such as fires, and any checks to Craft, Earn Income, Repair, or Subsist in the home receive a +2 circumstance bonus. If the domovoi is unfriendly, such checks take a –2 circumstance penalty instead, as the domovoi hides things, makes noise when people try to sleep, tangles weaving, and otherwise makes life a misery. A domovoi must spend a week in a place before these benefits occur."
        },
        {
          "id": "1y6tWyLc8qWUbcVA",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VLM647DCJvgpbUw5",
          "name": "Shy",
          "kind": "passive",
          "description": "A domovoi is naturally Invisible while within sight of their bound home. The domovoi can become visible, or even selectively visible—allowing some people to see them."
        },
        {
          "id": "8ZafagyMIKwX7Xhy",
          "name": "Home Guardian",
          "kind": "passive",
          "description": "By commanding their home to attack, the domovoi can [[/act disarm skill=household-lore]], [[/act grapple skill=household-lore]], [[/act reposition skill=household-lore]], [[/act shove skill=household-lore]], or [[/act trip skill=household-lore]] with their enraged home Strike. The domovoi uses their Household Lore instead of Athletics skill for these checks."
        }
      ],
      "spellcasting": [
        {
          "id": "9lV1wNjLNtuODaFj",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "o3GxW6zorJM0YxBk",
              "name": "Mending (At Will)",
              "rank": 1
            },
            {
              "id": "lbz7iMpuE0vD2W3W",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "kNmu4tsHjr5udz0A",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "D6KtpjPnIMahGDLT",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:poppet-mage",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Hc3WmoUIoGTKttiP",
      "slug": "poppet-mage",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:677be1e2662808d9607cc927b924fa8e953ea22255add7f5ad4f5e9920d8f65a",
    "translatableHash": "sha256:53d17165eb97cd01b629d2ee3fc7abe36f020cf0981590d8494e4fa83dd63124",
    "data": {
      "schemaVersion": 1,
      "name": "Poppet Mage",
      "level": 2,
      "rarity": "rare",
      "size": "small",
      "traits": [
        "construct",
        "humanoid"
      ],
      "description": "With extra time, care, and patience, poppets can be woven with magic, making them talented little spellcasters.\nPoppets are simple constructs made to assist their creators with basic tasks.",
      "armorClass": 15,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 5,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 1,
        "con": 0,
        "int": 4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "arcana": 8,
        "crafting": 8,
        "diplomacy": 6,
        "occultism": 8
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "fire 3"
        ]
      },
      "attacks": [
        {
          "id": "OOkow2T8skbaOwRK",
          "name": "Staff",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "two-hand-d8"
          ]
        },
        {
          "id": "jVONN2IAIdkczNeG",
          "name": "Fist",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal"
          ]
        },
        {
          "id": "gC8dXU5CCR6hB8U3",
          "name": "Hand Crossbow",
          "bonus": 9,
          "damage": "1d6+3 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "iUp9yAT10jv9n1Wu",
          "name": "Magic Hat",
          "kind": "action",
          "description": "Frequency one per day\nRequirements The poppet mage has a free hand\nEffect The poppet mage pulls off their hat, and with a jaunty display, pulls one of the following items from their hat: a lesser glue bomb, a lesser smoke ball, or a minor healing potion. This consumable lasts for 1 hour before becoming inert."
        }
      ],
      "spellcasting": [
        {
          "id": "ONSsM4aH1J4VImTr",
          "name": "Arcane Prepared Spells",
          "tradition": "arcane",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "aUehWmVHwoXf48es",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "CkImmohG9jDzANd0",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "eJhYHFErNlZTrAgH",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "L9KmBaUeOtW5VP0U",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "IAZR61U8BEqRR2BJ",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "PFcr3K7k27EIHj8t",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "doFpc7HUx6yBGIuO",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "S1OexGpjPJ7viofK",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kappa",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "hoqQ2x6x1tffC6wX",
      "slug": "kappa",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7b8244a851f59447f2fdd5cf25c5d0ba89dbcd4eb2b555654b64b571f994264f",
    "translatableHash": "sha256:8e2a2bc8983edfda7b8d6fb217b39a0700b0c43bf1e5291fbc59a01b2091aedc",
    "data": {
      "schemaVersion": 1,
      "name": "Kappa",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "amphibious",
        "beast"
      ],
      "description": "Mischievous by nature, kappas delight in playing pranks on unsuspecting travelers. While usually not overtly malicious, they can be a significant nuisance, stealing clothes from unsuspecting bathers or snatching unattended food from campfires. Kappas also enjoy proving their worth in competitions of strength and, despite their propensity for trickery, are known to be honorable competitors who keep their word and remain polite in conversation.\nWhile kappas vary in physical attributes from region to region, they're all amphibious, turtle-like humanoids with beaked mouths, webbed hands and feet, and slimy scales that range in color from bluish green to pale yellow. They often have black hair, arranged in a ring to accommodate the central depression atop their head. Water from a kappa's home lake, stream, or river fills this depression, or head bowl, which is believed to be the source of their strength. Younger kappas are easily tricked into bowing and accidentally emptying the water from their own head bowls. Losing this water makes a kappa lethargic. The longer a kappa's head bowl remains empty, the weaker they grow. While this rarely poses a serious danger for a kappa living near their home body of water, it can prove fatal to a more adventurous kappa wandering afar.\nKappas aren't inherently hostile and have been known to befriend lonely children and lend aid to stranded adventurers by providing directions or minor medical treatment. Still, many areas where kappas dwell feature posted signs warning of their presence that encourage travelers venturing near water to toss in a cucumber—kappas' favorite food—in exchange for safe passage. Kappas sometimes put up these signs themselves to increase the likelihood of receiving a tasty treat.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 15,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 7,
        "medicine": 9,
        "survival": 7
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
          "id": "Xin5gLW8GjfYSI7T",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d10+3 slashing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "hNINRCjSznMQLm9Y",
          "name": "Head Bowl",
          "kind": "passive",
          "description": "The depression atop a kappa's head is filled with water. Spilling, evaporating, or otherwise removing all the water from the top of a kappa's head reduces all their Speeds to 5 feet until the basin is again filled with water. A kappa who becomes Prone must succeed at a check (reflex, dc:15) save or spill their water, and a kappa who becomes Unconscious automatically spills their water.\nIf a kappa is Grabbed, Restrained, or stunned, another creature can attempt to spill the water from their bowl by spending a single action, which has the attack and manipulate traits, to attempt an Athletics check against the kappa's Fortitude DC. On a success, the creature spills the kappa's water."
        },
        {
          "id": "ihoEI2qxesvqV97C",
          "name": "Pull Arm",
          "kind": "action",
          "description": "The kappa pulls one of their arms, gaining 10-foot reach with that arm. The opposing arm shrinks to little more than a hand extending from their shell. The kappa can still use their shortened hand to hold things, but they can't use that hand to wield a shield or weapon. By spending a single action to pull their opposing arm, the kappa can return their arms to their original length."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:cockroach-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "iICvyvPzfyJe4vzk",
      "slug": "cockroach-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:74d342043361dbb60d8c5bd0c74f1623dd6f9e77ff098e19ce9ad3de447f4c78",
    "translatableHash": "sha256:8125144da8f6bcc435d06e6d0e9640458d1d07ebe1e4ac3d3202bcf121015dc4",
    "data": {
      "schemaVersion": 1,
      "name": "Cockroach Swarm",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "While cockroaches tend to gather in cramped spaces, a disturbed colony is sometimes prone to swarming, where hundreds or even thousands of the insects scurry out of their hiding places in a raft of shiny brown and black carapaces on thousands of skittering legs. Given how disgusting many find cockroaches to be, encountering such a swarm can be alarming to even the most seasoned adventurers. The creatures are relentless when disturbed; in contrast to the insects' normally skittish and harmless nature, as swarms they pursue the creature or creatures that provoked them and harry them with thousands of stinging bites.",
      "armorClass": 18,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -4
      },
      "skills": {
        "acrobatics": 8,
        "stealth": 8
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
          "id": "j8BUnBP4Ahs3QmLx",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "gI0Pt3FCseRtdPpl",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d8[piercing|options:area-damage] damage (check (reflex, dc:18, basic, options:area-effect) save)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:munavri-spellblade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "iUa0h6JPrGosE7qi",
      "slug": "munavri-spellblade",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fcb6f72b72611bf9b119247e9b00f366180abf219ccfbc0426a7a7465660cf6c",
    "translatableHash": "sha256:8a019d3b6a56581f46df68737fbc04b3c0e8167dd3e7007e34d4db4dabbb5bd9",
    "data": {
      "schemaVersion": 1,
      "name": "Munavri Spellblade",
      "level": 2,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "humanoid",
        "munavri"
      ],
      "description": "Although the subterranean Darklands are known for the cruel and domineering civilizations led by fiend-worshipping peoples who dwell within those sinister caverns, not every such subterranean society is ruled that way. Munavris are perhaps the best example of a people who tend to treat new arrivals to their Darklands territories with good temper, fairness, and respect.\nThese humanoids are the descendants of humans who survived the world-ending cataclysm called Earthfall—mariners who were abducted by alghollthus and dragged down through the ocean depths until they emerged on the other side of the seafloor, amid the Sightless Sea in the lightless realm of Orv.\nGradually, munavris' bodies adapted to their new home: they began to demonstrate telekinetic powers and came to develop highly sensitive vision and beautiful crystalline growths along their skin, which is said to be a representation of their psychic abilities. These early munavris eventually settled on a mysterious archipelago of jade islands—mystical green landforms that seemed to resonate with strange and powerful psychic energies that repelled their alghollthu captors. Safe from their abductors and nurtured by the strange powers of their jade islands, munavris have remained free to hone their telekinetic abilities into substantial psychic prowess.\nEvery munavri has the ability to concentrate psychic energy upon an object and immediately ascertain what it is and how best to use it. Such amazing natural intuition doesn't come easily, however. Using this power requires munavris to expend a large portion of their limited psychic energy, and sleep is the only way for them to replenish this psychic well.\nToday, nearly all munavris still dwell on the jade archipelago and ply the waters of the Sightless Sea. Their predominant culture promotes nobility of both deed and heart, and many munavris dedicate their lives to waging war against those who sow discord in the Darklands.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 0,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "athletics": 8,
        "deception": 7,
        "occultism": 6,
        "stealth": 4
      },
      "languages": [
        "munavri",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "mental 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lHGpzeVpbkAh9PNL",
          "name": "Bastard Sword",
          "bonus": 8,
          "damage": "1d8+4 slashing",
          "traits": [
            "two-hand-d12"
          ]
        }
      ],
      "actions": [
        {
          "id": "il117kxLLQoszGsV",
          "name": "Telepathy 30 feet (Munavris Only)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kX3JkP0HZPIQ7vWj",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UV7kZXo4HzANJZvK",
          "name": "Addling Strike",
          "kind": "action",
          "description": "Frequency once per turn\nRequirements The munavri's most recent action was to Cast a Spell\nEffect The munavri Strikes. This Strike gains the occult trait and deals an additional 1d4 mental damage."
        },
        {
          "id": "SF8eX3XCiOBA6wh4",
          "name": "Intuit Object",
          "kind": "action",
          "description": "Frequency once per day\nEffect By concentrating their psychic energy on a held object, the munavri intuits its use and understands how to effectively wield it. If they focus on a weapon, they can roll twice and take the better result for the next Strike they make with it before the end of their next turn. If they focus on a tool, they can roll twice and take the better result for the next skill check they attempt with that tool within the next minute."
        }
      ],
      "spellcasting": [
        {
          "id": "1URQxVXYnS7mCVrp",
          "name": "Occult Spontaneous Spells",
          "tradition": "occult",
          "category": "spontaneous",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "qexfi4g5vxcWJNQZ",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "i78JEX7iU0oS8hh9",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "2WCLEZ2eTAeIG78p",
              "name": "Mindlink",
              "rank": 1
            },
            {
              "id": "PybbKw0mrYy7Xqtk",
              "name": "Phantom Pain",
              "rank": 1
            },
            {
              "id": "fE4bnUCYiW4dd152",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "34jTVvgmbsngCIWL",
              "name": "Soothe",
              "rank": 1
            },
            {
              "id": "vg4KMMTMSstBOEaP",
              "name": "Telekinetic Projectile",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:jotunborn-sage",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "J9uFYbk8Bx4l49Ed",
      "slug": "jotunborn-sage",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:086f74a06db71ae325aa78c5c013e6d55115fa8c8c0c03e934658d80abcc2348",
    "translatableHash": "sha256:9fb93224924a71dc6030ddae308e52b02707ccf9082b8562d32e64cb92186cb0",
    "data": {
      "schemaVersion": 1,
      "name": "Jotunborn Sage",
      "level": 2,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "giant",
        "humanoid",
        "jotunborn"
      ],
      "description": "Jotunborn are large humanoids with indirect connections to ancient giants like titans. In ancient days, jotunborn served the gods as custodians for new worlds. They lived in a sub-planar realm between the mortal Universe and the Ethereal Plane known as the Fray, and they emerged as necessary to tend to the worlds they watched over. These planar associations granted jotunborn unique abilities, including the ability to travel between planes and shaping the physical aspects of the Universe. At present, many jotunborn have found their planar abilities diminished or disrupted, and they're now more common in the Universe.\nThe original abilities of jotunborn have diminished in power over time. What was once a people capable of teleportation at great distances or the ability to reshape mountain ranges, is now a group that has minor magical abilities. These abilities can grow in power, however, usually as a jotunborn ages, becomes more attuned to planar energies, or weaves more iivlar silk into their skin. Particularly skilled jotunborn mages and warriors are capable of feats that rival those of their forebears.\nJotunborn who live in the mortal Universe tend to lead reclusive lives. Many other ancestries confuse jotunborn with frost giants or cloud giants due to a jotunborn's size and skin coloration. This confusion can lead to fear or hostility, a reaction that most jotunborn prefer to avoid. Due to the difficulties that come with living in the Fray, many jotunborn are fiercely loyal to those they trust. These loyalties help keep fellow jotunborn alive, and these sentiments extend to any other people that befriend a jotunborn.\nIn jotunborn society, sages are keepers of knowledge. They maintain histories of their clans or entire civilizations. Their weavings tend to appear along their eyes and ears, representing their observational skills and knowledge they retain.",
      "armorClass": 16,
      "hitPoints": 26,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 4,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 0,
        "con": 2,
        "int": 4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "arcana": 8,
        "athletics": 6,
        "diplomacy": 4,
        "medicine": 5,
        "occultism": 8,
        "religion": 5,
        "society": 8
      },
      "languages": [
        "common",
        "cyclops",
        "fey",
        "jotun",
        "petran",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "eG0P3FsTEjLSU2Zl",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "versatile-s"
          ]
        },
        {
          "id": "hSjo3xJWV7zRiUwd",
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
          "id": "frucObTNChZtXKTd",
          "name": "Fist",
          "bonus": 10,
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
          "id": "axj5ih5pp7f0M7V5",
          "name": "Iivlar Weaving",
          "kind": "passive",
          "description": "The sage has planar thread woven into their skin. This thread glows with dim light in a @Template[type:emanation|distance:10]. They can Sustain to extinguish, reactivate, or adjust the coloration of this light."
        },
        {
          "id": "rIjm9mCf0cXSsHwh",
          "name": "Plane-Hopper Dash",
          "kind": "action",
          "description": "Frequency once per day\nEffect The jotunborn sage moves with swiftness between planar boundaries to shorten their journey. The sage Strides; this movement doesn't trigger reactions. Once the Stride is complete, the sage gains a +5-status bonus to their Speed until the start of their next turn."
        }
      ],
      "spellcasting": [
        {
          "id": "hhqq1ysqdqvQWZyl",
          "name": "Occult Prepared Spells",
          "tradition": "occult",
          "category": "prepared",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "zLuSNPIroL1Q0Na6",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "UouB0LkBHPhRW3Sn",
              "name": "Dizzying Colors",
              "rank": 1
            },
            {
              "id": "X3AYsdyt0xoYSJL5",
              "name": "Frostbite",
              "rank": 1
            },
            {
              "id": "jrjIezBNNedKr4Rg",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "jk3CTuTXSxnW1Gek",
              "name": "Read Aura",
              "rank": 1
            },
            {
              "id": "Qis6wW7w2vdtl9JP",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "Q9WELSZ138JZKPf2",
              "name": "Sleep",
              "rank": 1
            },
            {
              "id": "SL0tStzkSLP8Mxte",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "dJzBOJXd5f26qrc0",
              "name": "Void Warp",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-leech",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jREewNN2JDyTawa7",
      "slug": "giant-leech",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2cc98ece34254ff3e6b1f5757b46cff3fc43e05184a70d0c1f793f36f428b703",
    "translatableHash": "sha256:edd3d9dae7ae9c58e3485082652d0230864cff63ecc489e4525ac5faf3544856",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Leech",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "animal"
      ],
      "description": "Capable of growing to lengths of nearly 5 feet, giant leeches have circular maws filled with hook-like teeth. They prefer to dwell in stagnant or slow-moving shallow water or in damp, moist undergrowth. Horses and larger animals are their favorite prey, but they won't balk at a chance to latch onto a human- or halfling-sized meal.",
      "armorClass": 17,
      "hitPoints": 32,
      "speedFeet": 5,
      "perception": {
        "modifier": 5,
        "senses": [
          "tremorsense-imprecise-30"
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
        "cha": -5
      },
      "skills": {
        "athletics": 8,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "salt 5"
        ]
      },
      "attacks": [
        {
          "id": "NzMuO5EzlGKw4nGq",
          "name": "Mouth",
          "bonus": 10,
          "damage": "1d4+6 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "0FwbXedAmkMCm8OR",
          "name": "Tremorsense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "OQMwQiE7vGLPMasL",
          "name": "Blood Drain",
          "kind": "action",
          "description": "Requirements The giant leech has a living creature Grabbed or Restrained\nEffect The giant leech drains blood from the creature it has grabbed or restrained. This deals 2d4[piercing] damage (check (fortitude, dc:18, basic) save). A creature that takes any damage from having its blood drained by a giant leech is Drained 1 until it receives any kind or amount of healing."
        },
        {
          "id": "XTy86ysePzImAGbm",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:strix-kinmate",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "JyEB2owA0s3mI3DQ",
      "slug": "strix-kinmate",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7d9bea4a53de16d0a9929a52cd2302091ee04656be98f9e4a2b6c9fb3349bb60",
    "translatableHash": "sha256:9b4386f24cb33407c94ed6e83feeaaf5044ee61773617bbbff5c63216dec1959",
    "data": {
      "schemaVersion": 1,
      "name": "Strix Kinmate",
      "level": 2,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid",
        "strix"
      ],
      "description": "Kinmates carry a strong bond for one another and excel at teamwork.\nStrix, called itarii in their own language, are avian humanoids with sprawling, dark-feathered wings and large talons. They possess angular features and piercing eyes that are fixed facing forward.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 0,
        "int": 0,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "nature": 7,
        "survival": 9
      },
      "languages": [
        "common",
        "strix"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "603NA9zwfyXuEact",
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
          "id": "EU28USieMlC0h6ae",
          "name": "Talon",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "VZJiiVsEBZO6itZV",
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
          "id": "Rqa5pWyd9sYMJP52",
          "name": "Strix Camaraderie",
          "kind": "passive",
          "description": "Strix kinmates are tightly bonded to one another, adept at teamwork and supporting each other's attacks. If an enemy is within reach of both the kinmate and one other strix, that enemy is Off-Guard to all strix."
        },
        {
          "id": "yAefBUKkRRgVkuCu",
          "name": "Strix Vengeance",
          "kind": "passive",
          "description": "Frequency once per 10 minutes\nTrigger The kinmate or a strix ally they can see is damaged by an enemy's critical hit\nEffect Until the end of their next turn, the kinmate gains a +[[/r {1d6}]] status bonus to damage rolls on Strikes they make against the triggering enemy."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-opossum",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "kmLBKW8e68HICZau",
      "slug": "giant-opossum",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f659ff25c1fb64035d1779584e763a9e87468dc106b30d1fa6a0efa960a576c7",
    "translatableHash": "sha256:6d703a97cae34849809fe4d34754f279eff8316037a429e35aa89e50fb483454",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Opossum",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Larger species of opossum can eat nearly anything human-sized or smaller.\nFew creatures have survived as long and in as many environments as the opossum.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 30,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 8,
        "stealth": 8,
        "survival": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "URIeoHiQX0CLnpUA",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d10+4 piercing",
          "traits": [
            "deadly-d10",
            "unarmed"
          ]
        },
        {
          "id": "o1xm0AkoMLLKUiqH",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "pcMLR5ngGmapeJYS",
          "name": "Tail",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "TBMl5Ts5TOwuhfd4",
          "name": "+2 Circumstance to All Saves vs. Disease",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "64fFy6rN4KqZRePB",
          "name": "Feign Death",
          "kind": "reaction",
          "description": "Trigger The opossum is reduced below 15 HP\nEffect The opossum collapses. It is Off-Guard and can use actions that require only its mind, but any other action ends the ruse.\nA successful check (perception, dc:18, traits:action:seek) check to Seek or check (medicine, dc:18, traits:action:recall-knowledge) check to Recall Knowledge is required to determine that the animal is not, in fact, dead."
        },
        {
          "id": "YF0cM4fWT0fvGHqC",
          "name": "Revived Retaliation",
          "kind": "reaction",
          "description": "Trigger The opossum is attacked or disturbed by a creature within reach while Feigning Death\nEffect The opossum Strikes the triggering creature."
        },
        {
          "id": "anyFEiqXXoGS63Gs",
          "name": "Grasping Tail",
          "kind": "passive",
          "description": "A giant opossum can drag a Small or Tiny creature it has Grabbed with its tail along with it when it Strides."
        },
        {
          "id": "00eprUtpjeWgD0os",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-crab",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Lb11NsmTJpd4YS1p",
      "slug": "giant-crab",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:872ba564a37fa6118d9403e6775663f75e62be528508eeb5ff3ba3a4fc992fd0",
    "translatableHash": "sha256:3de2832c0e0127183599b2f912d0713027ecd3579ee3937b0e3efcf968985816",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Crab",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Crabs are scavenging crustaceans known for their hard shells and iconic sideways gait. They use their claws to defend themselves, hunt, and fight other crabs for territory. When confronted with threats from outside their species, most crabs prefer to flee, but when retreat isn't possible, they clamp on to their foes as tightly as they can.\nThe statistics presented here represent giant crabs that live close to the water's surface. Crabs that live deeper underwater often exhibit more extreme adaptations to their environment. Crabs who live in the depths where little light reaches gain darkvision and cold resistance, and those adapted to the most hostile reaches of the deep sea can detect nearby creatures through subtle shifts in ocean currents.\nThese skittering creatures are prized for their delicious meat, but their size makes them dangerous targets for harvesting.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
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
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": -3
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 3 except bludgeoning"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "68hstcNYAfYsk65j",
          "name": "Claw",
          "bonus": 9,
          "damage": "1d10+4 slashing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ez4TlFP9ir8diYv7",
          "name": "Scuttle",
          "kind": "reaction",
          "description": "Trigger A creature that the giant crab can see targets the crab with an attack\nEffect The giant crab scuttles to the side and gains a +2 circumstance bonus to AC against the triggering attack. After the attack resolves, the crab can Stride up to its speed in a straight line as part of the reaction."
        },
        {
          "id": "WXEuGWzgAk5JMfEE",
          "name": "Vulnerable to Prone",
          "kind": "passive",
          "description": "If a creature critically succeeds on a check to Trip the giant crab, the crab is flipped over onto its back in addition to the usual effects. A giant crab that is flipped onto its back has a particularly hard time defending itself; instead of taking the normal -2 circumstance penalty to AC for being Off-Guard, it takes a -4 circumstance penalty to AC."
        },
        {
          "id": "iHR7yRqYeZST3uB5",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d6+3)[bludgeoning] damage, check (fortitude, dc:18, basic)"
        },
        {
          "id": "3uPbc86MCYMTJ4sn",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:draugr",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "lCDygpomjUnutb5b",
      "slug": "draugr",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:07a9aa4b7c3a5b7b3150bd64a18bee2cc4bc17f764f120d85c4beb80ef4ace85",
    "translatableHash": "sha256:0c39db315c8931ecd0727b0995749f3c970ff0a01d13873004673e1ecf51418f",
    "data": {
      "schemaVersion": 1,
      "name": "Draugr",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "undead",
        "water"
      ],
      "description": "The risen corpses of sailors who died at sea, known as draugrs, reek of rot and decay from the briny deep. Their eyes glow with ghastly green light, and rotting seaweed, barnacles, and dead sea creatures cling to their bodies. Draugrs can't speak, but they express their malicious emotions with gurgles, as though they were eternally drowning with lungs full of water. They desire little more than to attack living creatures, especially those who sail the sea. Even when they go upon land, draugrs often drag the corpses of those they strike down back to the water, populating the depths with even more dead.\nDraugrs rise in the haunted places of the sea, where restless spirits, swells of void energy, or supernatural storms deliver death. A corpse might rest at the bottom of the sea for some time before awakening as a draugr. Collecting detritus and organisms, the body becomes increasingly disgusting before it finally rises. Proximity to intelligent life can expedite this process, and an underwater explorer who happens upon a shipwreck might cause a body to suddenly return to unlife as a draugr. These undead don't take intrusions lightly, especially upon their place of death.\nThough hateful of the living, draugrs are susceptible to reminders of their lives as mariners. In particular, a well-performed sea shanty or call-and-response work song might cause a draugr to become lost in reverie for a moment. The creatures have even been witnessed moaning along, unable to sing the words but providing haunting accompaniment. The lull rarely lasts long, though, as the beauty of the song quickly becomes a reminder of the tragedy that befell the draugr, reaffirming their desire for blood and death.\nMore powerful draugrs with burning red eyes are called draugr captains. They're 3rd-level creatures with the elite adjustment that can cast mist as an innate divine spell 3 times per day.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 6,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 10,
        "stealth": 8
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
        "resistances": [
          "fire 3"
        ],
        "weaknesses": [
          "vitality 5"
        ]
      },
      "attacks": [
        {
          "id": "gBgIVtWtXiRFsAVt",
          "name": "Greataxe",
          "bonus": 10,
          "damage": "1d12+4 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "6wbWBvQqiiigVakB",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 slashing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "RqPJlOAd3fcNqh2r",
          "name": "The Sea's Revenge",
          "kind": "passive",
          "description": "A creature that slays a draugr is subjected to a Mariner's Curse spell with a check (will, dc:17, traits:spell) save. The curse ends if the draugr is buried in a calm sea or after 1 week passes."
        },
        {
          "id": "oxosDKkcqFePOaOl",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "QjlbGyGvb8Ik5E6b",
          "name": "Grotesque Gift",
          "kind": "passive",
          "description": "A draugr's attacks spatter their targets with rancid flesh and rotting seaweed. A creature damaged by a draugr's Strike must succeed at a check (fortitude, dc:15) save or become Sickened 1 (Sickened 2 on a critical failure)."
        },
        {
          "id": "zI0jMbxO48vhEmnP",
          "name": "Swipe",
          "kind": "action",
          "description": "The draugr powers their hate into attacking as many foes as possible. The draugr makes a melee Strike and compares the attack roll result to the AC of up to two foes, each of whom must be within its melee reach and adjacent to each other. Roll damage only once and apply it to each creature hit. A Swipe counts as two attacks for the draugr's multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:terror-bird",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Mlgww6QXZoJt4WLF",
      "slug": "terror-bird",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d8bc17488a297424723c805fce877ef243d5179b436d5550c0ba68ae9bb02af6",
    "translatableHash": "sha256:4ca655193d3a6797e12a0e3d3af129954bc7dd1e6530c76386bd1af34bc6e540",
    "data": {
      "schemaVersion": 1,
      "name": "Terror Bird",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Common terror birds are notable hunters. On their own, they use their great speed to catch prey unaware. In a flock, they can swarm and take down larger beasts like aurochs with their overwhelming numbers.\nTerror birds aren't one species, but rather a family of deadly, flightless avian predators. All terror birds are capable of bursts of great speed and have powerful beaks that can tear apart the flesh of their prey. Most stalk large, open prairies and steppes, competing directly with other sizable predators such as big cats and wolves.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 50,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 4
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 0,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "rYCvuKyiMCL4Lrj2",
          "name": "Beak",
          "bonus": 9,
          "damage": "1d8+4 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "ndRM64QwZv1tTxhi",
          "name": "Talon",
          "bonus": 9,
          "damage": "1d6+4 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "JDtmV4JHX1pZ1TjB",
          "name": "Sprint",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The terror bird Strides three times in a straight line"
        },
        {
          "id": "jbr96K1nUWH5n0Yo",
          "name": "Tearing Clutch",
          "kind": "passive",
          "description": "The terror bird's powerful beak can tear through flesh. On a successful beak Strike, the target takes 1 persistent bleed damage. This bleed damage increases to 1d4 on a critical hit."
        },
        {
          "id": "HFfPbYCGFIPpR0FF",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:morlock-tinkerer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "nVCkxbFsxfJ0rReV",
      "slug": "morlock-tinkerer",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52f66d6c3b8ab9432f91ece9595027e8ee25fef51bf95dbee9ebc320fc9ea73f",
    "translatableHash": "sha256:8573a8b1e9c5b333d88f34aedf7de15d2a7b5b0b040e84ea32c73c5c0df5e856",
    "data": {
      "schemaVersion": 1,
      "name": "Morlock Tinkerer",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid"
      ],
      "description": "Most morlocks have little talent for crafting, but many have an uncanny knack for tinkering. The sounds of machinery and moving parts tend to attract them. These morlocks particularly enjoy the ticking sounds of clockworks. Many tales from Darklands travelers describe morlocks who are able to take used or disabled mechanical traps and restore them, seemingly for the morlock's own satisfaction more than any desire to use the device.\nMorlocks descended from humans who were lost among the dark, tangled tunnels of the upper reaches of the Darklands thousands of generations ago. Their eyes grew large and pale to absorb any speck of illumination. Their frames became wiry from an altered diet and their arms grew long, becoming perfect for the uncanny, four-limbed shuffle that lets them traverse the subterranean passages. However, their forms hide their strength and swiftness. Morlocks no longer remember the lives their ancestors led on the surface, although many of them dwell in shattered ruins that were swallowed by the earth. Some morlocks worship the statues of humans from these bygone eras as gods, but others now venerate Lamashtu, Rovagug, or other violent deities.\nMorlocks typically stands just over 5 feet tall and weigh roughly 150 pounds.",
      "armorClass": 17,
      "hitPoints": 40,
      "speedFeet": 30,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": -2,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "crafting": 8,
        "stealth": 9
      },
      "languages": [
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "EK9tHuUdNF8lzwwK",
          "name": "Club",
          "bonus": 9,
          "damage": "1d6+4 bludgeoning",
          "traits": []
        },
        {
          "id": "ofz49oiBkargWzh6",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "XWdqUKdwgQ9Cn7vC",
          "name": "Club",
          "bonus": 8,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "H2rT9wdiejx3F1b0",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "G412UtVloe7PIpa4",
          "name": "+2 Status to All Saves vs. Disease and Poison",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3vycv9ThXOQbgNBf",
          "name": "Instinctual Tinker",
          "kind": "action",
          "description": "The morlock tinkers with an adjacent construct or mechanical hazard. They attempt a check (crafting, defense:fortitude) check against the construct's or hazard's Fortitude DC. The morlock can't succeed if the target's level is more than double the morlock's.\nCritical Success The target gains 4d6[healing] Hit Points and a +1 circumstance bonus to attack rolls for 1 minute.\nSuccess The target gains 2d6[healing] Hit Points.\nCritical Failure The morlock injures itself, taking 2d6 damage (typically bludgeoning, piercing, or slashing, but potentially a different type at the GM's discretion).\nEffect: Instinctual Tinker (Critical Success)"
        },
        {
          "id": "HaYQ8Cd4C0hYSFdc",
          "name": "Leap Attack",
          "kind": "action",
          "description": "The morlock Strides up to twice its Speed, during which it attempts a High Jump or a Long Jump. At any point during its movement, the morlock can make a melee Strike against an enemy in its reach.\nThe morlock then can't use Leap Attack for 1 round."
        },
        {
          "id": "NXk6QjCfO8eW6Txp",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A morlock's Strikes deal an extra 1d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "Y6Rqq2ahFM07WKRm",
          "name": "Swarming Stance",
          "kind": "passive",
          "description": "A morlock can share the same space as another morlock, but no more than two morlocks can occupy the same space. When morlocks share the same space, they gain a +1 circumstance bonus to attack rolls."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nagaji-soldier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "OLGvwUyA441SwgQn",
      "slug": "nagaji-soldier",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bedc3ba2cec2b91b5514423ef0fad5849a097c568f4c16402b8a645ccee97cf2",
    "translatableHash": "sha256:f6c6464cd36d53fe6c139df6c6b9f01ac39e725432e9f9d5e3d8d97da6ffbccb",
    "data": {
      "schemaVersion": 1,
      "name": "Nagaji Soldier",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "nagaji"
      ],
      "description": "Nagaji are lithe but muscular bipeds with humanoid figures and serpentine heads. Their bodies are covered in tightly layered scales that range wildly in color, from camouflaged greens and browns to flashy blues or reds. Ophidian eyes lend nagaji an imperious visage, with irises that span every color of the rainbow. Nagaji don't blink, which has been known to unsettle other ancestries whether a nagaji intends it or not.\nNagaji physiology varies somewhat. Some possess longer necks than others, some sport impressive fangs that can inject venom, and some are so unique they resemble lamias more than their own nagaji kin. Like snakes, nagaji are cold-blooded and shed their skin periodically; as a result, nagaji territories rarely overlap with those of mammalian humanoids, since their environmental needs diverge so widely. They're best known for their crushing, snakelike strength, but their close ties to nagas mean many nagaji have the potential for powerful magic as well.\nLong ago, the naga goddess Nalinivati created the first nagaji as the backbone of a society that respected nagas. But the nagaji were never mindless vassals, and the goddess gifted them with free will. Many nagaji willingly serve nagas to this day, honoring some as outright divinities. While outsiders might regard nagaji initially as brainwashed servants, nagaji dispute this claim. Of course there are evil and unfair naga overlords, but there are just as many fair and just naga rulers, and nagaji history remembers various rebellions and revolutions to support a new naga's claims of rulership when a matriarch overstepped her bounds. Nagaji accurately note that their long history with nagas is no simple matter and claim that the partnership goes both ways: nagas rely as much on nagaji for the running of their empires as nagaji rely on nagas to lead their people to prosperity.\nAlthough nagaji might be encountered in diverse cities and urban centers, their communities are concentrated in environments that suit their biology, namely jungles and tropical forests. Where many species would languish in the heat and humidity, nagaji bask in the warmth and thrive.",
      "armorClass": 18,
      "hitPoints": 28,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 7,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "athletics": 8,
        "intimidation": 5,
        "nature": 6,
        "religion": 5
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 2"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "WL5ajLgI9ZT2bTR8",
          "name": "Khopesh",
          "bonus": 10,
          "damage": "1d8+4 slashing",
          "traits": [
            "trip"
          ]
        },
        {
          "id": "GugfZAMFY5fRgjN3",
          "name": "Longbow",
          "bonus": 7,
          "damage": "1d8 piercing",
          "traits": [
            "deadly-d10",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "tbzQFaeo3IB4vP2x",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "wycfQOBOlmzkFJ7X",
          "name": "Slough Toxins",
          "kind": "action",
          "description": "Frequency once per round\nRequirements The nagaji is afflicted with a poison\nEffect The nagaji accelerates their metabolism. They roll a saving throw against the affliction with a +2 circumstance bonus. If they must attempt an ongoing save against the same poison at the end of their turn, they also get a +2 circumstance bonus to that save."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tatzlwyrm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "oUCl1KA2s2t18nlU",
      "slug": "tatzlwyrm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:793034cee471d56fd3ea0f61bd2f05d92fc15ff08fa4de43f7ca9ed2020a3eb3",
    "translatableHash": "sha256:c583e6f3455a4616c7fd9e0b94a8925cc21538c6056ef5ec3819386860069b94",
    "data": {
      "schemaVersion": 1,
      "name": "Tatzlwyrm",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "dragon"
      ],
      "description": "Tatzlwyrms resemble human-sized snakes with two arms and a dragon's head. Distant relatives of dragons, tatzlwyrms possess only a meager level of intelligence. They can speak Draconic (with a thick, hissing accent), but their ability to reason is limited, and they can't use magic. They do possess a level of cunning, however, and some have been known to build rudimentary traps and even lairs. They aren't treasure hoarders, though, so adventurers shouldn't expect to find a tatzlwyrm sitting atop a bed of coins.\nSome tatzlwyrms have managed to forge working relationships with dragons, though it's a rare occurrence. From time to time, dragons have used them as messengers (because they can speak their language, however crudely), scouts (due to their smaller size), guides (when they're familiar with a particular mountain), and even muscle (harassing foes not worthy of a dragon's direct attention).\nTatzlwyrms hibernate in cold weather, and when they feel winter approaching, they seek out underground lairs, mountain crevices, or even hay lofts. On one notable occasion, villagers reported being briefly overrun by tatzlwyrms after a conflict between spellcasters in the nearby hills caused a sudden blizzard. Local scholars still debate whether the cause of the influx stemmed from the sudden change in weather or if the creatures were drawn to one of the other magic users staying in town who were part of the same pilgrimage as those doing battle.\nWhen confronted, tatzlwyrms are more likely to attack than retreat. Indeed, they sometimes lie in wait on purpose, taking advantage of their scales' natural camouflage and awaiting the chance to unleash their signature move: belching poisonous vapor into an opponent's face. Since this breath attack doesn't have much range, tatzlwyrms usually need to grab their foes first to bring them close to their mouth.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 30,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 5,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": -3,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 8,
        "crafting": 4,
        "intimidation": 6,
        "stealth": 7
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
          "id": "kvcJ069hRRO8f9Be",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+6 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        },
        {
          "id": "BaWnmj8rZRAd3N3q",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+6 piercing",
          "traits": [
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "c1oKujTo06SNvznu",
          "name": "Natural Camouflage",
          "kind": "passive",
          "description": "A tatzlwyrm's green, gray, and brown scales provide it natural camouflage. In areas of dense undergrowth, a tatzlwyrm can move at its full Speed when [[/act sneak]]{Sneaking}, and it gains a +4 circumstance bonus to [[/act hide options=natural-camouflage]]."
        },
        {
          "id": "XjNYxa8zYgN2Eeqq",
          "name": "Poison Gasp",
          "kind": "action",
          "description": "The tatzlwyrm belches a puff of poisonous vapor into the face of an adjacent creature, which must attempt a check (fortitude, dc:15) save; the creature takes a –2 circumstance penalty to this save if it's Grabbed or Off-Guard. The tatzlwyrm can't use Poison Gasp again for 2 rounds.\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1.\nFailure The target takes 2d6[poison] damage and is Enfeebled 1 for 1 round.\nCritical Failure The target takes 4d6[poison] damage and is enfeebled 1 for 1 minute."
        }
      ],
      "spellcasting": []
    }
  }
]
