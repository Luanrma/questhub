import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_16_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:stonefish",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "3A8vgAWozHIc7gbY",
      "slug": "stonefish",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d78c04e464f552bb3dfc434563402de3748219ead0e04a46c75cda4e601d2f98",
    "translatableHash": "sha256:7e72781596b2740d34c99f23bced5a4885d11168e054036144bffd42726f7be2",
    "data": {
      "schemaVersion": 1,
      "name": "Stonefish",
      "level": 0,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Stonefish use their superior camouflage to lie in wait and devour small prey, becoming indistinguishable from the reefs they call home. Larger creatures are also at risk, although mostly through accidental contact with the stonefish's spines and their agonizing venom.",
      "armorClass": 16,
      "hitPoints": 15,
      "speedFeet": 0,
      "perception": {
        "modifier": 7,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 6,
        "will": 3
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 4,
        "stealth": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "sZfblYnM3149C0X8",
          "name": "Bite",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "iYmtGeAHJXnGPuID",
          "name": "Spines",
          "bonus": 6,
          "damage": "1d4+2 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "NEFPwQtJW3PaG1vO",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The stonefish can Hide in its natural environment even if it doesn't have cover.",
          "traits": []
        },
        {
          "id": "1f2PgrJfd3BP5KWT",
          "name": "Defensive Spines",
          "kind": "passive",
          "description": "When a creature moves into a space with one or more stonefish, that creature takes 1d4 piercing damage and is exposed to stonefish venom.",
          "traits": []
        },
        {
          "id": "u2l5vP3881zLQeZt",
          "name": "Stonefish Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:16)\nMaximum Duration 3 hours\nStage 1 Clumsy 1 (1 round)\nStage 2 Clumsy 2 (10 minutes)\nStage 3 3d6 poison damage and clumsy 2 (1 hour)",
          "traits": [
            "poison"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 138,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "u2l5vP3881zLQeZt",
          "name": "Stonefish Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 240,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "u2l5vP3881zLQeZt",
          "name": "Stonefish Venom",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:hardhead-mole",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "4Eu8d39hem9NAoXg",
      "slug": "hardhead-mole",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1df31f4cc638a0e1cc5261af9e0874c1901230085be94f1349a26d06865b4943",
    "translatableHash": "sha256:7120c467b57bbba3082358749b371b2fe7a943fea66888b5a3cbbe35779b8f25",
    "data": {
      "schemaVersion": 1,
      "name": "Hardhead Mole",
      "level": 0,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "Mischievous, burrowing hardhead moles reside mainly in the grasslands and plains. One can often spot their burrowing by following the upended ground they leave behind, which can span for hundreds of feet. Their signature physiological feature is a shiny, gem-like cranium that's thick enough to endure repeated hits and emits a flash of colorful light with each impact.\nAgrarian gnome communities have a close relationship with hardhead moles. Gnome children especially hold a great fondness for the creatures, and indeed, gave them their name. When they wander into the fields to play with these moles—typically by hitting them with small sticks, mallets, or any semi-blunt object—the moles are more than happy to oblige, darting from burrow to burrow with every sparkling blow in friendly games of hide-and-seek or tag.\nPerhaps the most famous hardhead mole is the gnome goddess Nivi Rhombodazzle's planar servitor Rummbrrlar, a hardhead mole imbued by Nivi with the powers of an earth elemental. Long ago, the mighty mole was slain while rescuing children from a Nivian orphanage. As a reward for his selfless actions, Rummbrrlar was transformed into a planar servitor with diamond skin and the ability to grow as large as a mighty dragon. When communities shared by gnomes and hardhead moles are threatened, Rummbrrlar often appears to whisk bystanders to safety in the face of natural hazards or stand guard against monstrous threats. For this reason, hardhead moles are seen as a good omen and a symbol of protection in gnome communities.\nThe average hardhead mole grows up to about 3 feet in length, but some become shorter as they age, their hard skulls flattening slightly after years of entertaining young gnomes. As they play, their heads (and the flashes of light they emit) darken in color, spanning shades of pink, red, crimson, and mauve; at seeing these darker hues, gnomes often give the moles some time to recover, as this indicates that a mole's cranium isn't getting enough blood flow. Though mischievous, hardhead moles are otherwise docile and friendly creatures. If placed in a fight-or-flight situation, they escape by creating deep networks of tunnels, which can span up to hundreds of feet in any direction.",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 8,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 5,
        "stealth": 5,
        "survival": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 3"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "DYemcdnqg7020lFU",
          "name": "Jaws",
          "bonus": 4,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "VnbrHdn59w08ioYl",
          "name": "Burrowing Retreat",
          "kind": "reaction",
          "description": "Trigger The hardhead mole is hit by a Strike\nEffect The hardhead mole immediately Burrows to a burrow hole if there is one within 20 feet. This movement doesn't trigger reactions.",
          "traits": []
        },
        {
          "id": "ldi5ToHOl7d3DIEZ",
          "name": "Shovel Earth",
          "kind": "action",
          "description": "The hardhead mole leaves a burrow hole in its square or an adjacent square. The square becomes difficult terrain but can be flattened back into normal terrain with an Interact action.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "lwcZ0Yi0pF8c0wnM",
          "name": "Unbalancing Burrow",
          "kind": "action",
          "description": "The hardhead mole Burrows up to 20 feet in a straight line, displacing the earth on the surface. Any creature it passes through takes 1d6 bludgeoning damage (check (reflex, dc:14, basic) save). On a failed save, a creature is knocked Prone. This creates a burrow hole at the beginning and end of the line.",
          "traits": [
            "move"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 245,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "lwcZ0Yi0pF8c0wnM",
          "name": "Unbalancing Burrow",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:troodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Rr6IJvc7GxRCeOhE",
      "slug": "troodon",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:96e38c35c66abc536e3ba7baa7d2e5c19fae4bf83aba10d852886bd579f69a61",
    "translatableHash": "sha256:262fb003c8a9795f9505025e6fa10d3838c18419b2744db2239ca4dbc42561ce",
    "data": {
      "schemaVersion": 1,
      "name": "Troodon",
      "level": 1,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Troodons stand roughly 3 feet tall and twice as long, with slender necks and large, inquisitive eyes. Although they don't fully understand language, troodons have a remarkable talent for speech mimicry.",
      "armorClass": 16,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 4,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 5,
        "deception": 8,
        "stealth": 8,
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
          "id": "LKz2SRg3Lr03MXRk",
          "name": "Jaws",
          "bonus": 8,
          "damage": "1d8+1 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "BaHAyByHp2FbbPIV",
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
          "id": "n8oCyZ449dRTuGuc",
          "name": "Mimicry",
          "kind": "action",
          "description": "The troodon repeats up to twelve words it heard in the last week. If it succeeds at a check (deception, defense:perception) check against the listeners' Perception DC, the sound is indistinguishable from the original. The troodon can't duplicate voice-based abilities or spells, although it can mimic the verbal sounds of spellcasting.",
          "traits": []
        },
        {
          "id": "169mTVhwXosKc4fm",
          "name": "Running Attack",
          "kind": "action",
          "description": "The troodon Strides and makes a claw Strike at any point during that movement.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:magnetic-gecko",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ShUcJ2v8mqCwCeMf",
      "slug": "magnetic-gecko",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:09a63543a4048c682354378829fcfde9533ad1c1864e43fbe09e834aa9efa6dc",
    "translatableHash": "sha256:f82ff296a5fb95dddde5d6a645a0eac70b63a9213f43929ea2ead773f46a8281",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Gecko",
      "level": 1,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "",
      "armorClass": 15,
      "hitPoints": 20,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 7,
        "will": 4
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 6,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "vKcFp5K4uK0gkUDx",
          "name": "Jaws",
          "bonus": 7,
          "damage": "1d6+2 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "BZAbHaoj6KIPVkU9",
          "name": "Tongue",
          "bonus": 7,
          "damage": "2d4 electricity",
          "traits": [
            "electricity",
            "finesse",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "WucKQghGz6D3Wla0",
          "name": "Greater Electrolocation",
          "kind": "passive",
          "description": "A magnetic gecko can sense minute electrical charges in living creatures, which it can use as a precise sense at a range of 20 feet. This distance increases to 100 feet against any creature that has used an electricity effect within the last minute.",
          "traits": []
        },
        {
          "id": "ARdeJ0ZKxKc9rJd9",
          "name": "Uncanny Climber",
          "kind": "passive",
          "description": "A magnetic gecko's feet allow it to climb virtually any surface, no matter how slick or sheer. If a gecko attempts an Athletics check to Climb and critically fails, it gets a failure instead.",
          "traits": []
        },
        {
          "id": "BXVPBRJja0TAlcDE",
          "name": "Launch Metal",
          "kind": "action",
          "description": "The gecko repulses the metal attached to its body in all directions, dealing 2d6 bludgeoning damage (check (reflex, dc:17, basic, options:area-effect) save) to all creatures in a 10-foot emanation. The gecko can't use Launch Metal again for 1d4.",
          "traits": []
        },
        {
          "id": "fUa7SCJuCTMftahm",
          "name": "Repel",
          "kind": "action",
          "description": "The gecko manipulates its magnetic field to repel metal, humming audibly and gaining resistance 2 to damage from metal weapons and metal effects until the beginning of its next turn.",
          "traits": []
        },
        {
          "id": "vcaQ5lJKm6s0xHQG",
          "name": "Static Cling",
          "kind": "passive",
          "description": "If the gecko hits Small or smaller creature with its tongue, and the target is made of metal or is wearing metallic armor, the gecko's tongue latches on to the creature. The creature must attempt a check (reflex, dc:17) save or become Grabbed. While the gecko is Grabbing a creature in this way, it can attempt an check (athletics, defense:fortitude) check against the target's Fortitude DC to pull the creature to a space adjacent to the gecko. A creature grabbed in this way can Escape normally.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 237,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "vcaQ5lJKm6s0xHQG",
          "name": "Static Cling",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 525,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "vcaQ5lJKm6s0xHQG",
          "name": "Static Cling",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:protoceratops",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "4XcnRHmgBtlnccEe",
      "slug": "protoceratops",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:03e0995505a438d7e31ef734c27d29141be5c0d5773297f2f1f7bdd6cd1da025",
    "translatableHash": "sha256:ee52c1ca2f2a1a721f068b1ca5551ca4de26aec5dcffda112a7a5cea02157f68",
    "data": {
      "schemaVersion": 1,
      "name": "Protoceratops",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Though it lacks the distinctive horns of its larger relative the triceratops, the protoceratops is more than capable of holding its own in combat, using its tail to knock enemies to the ground and its sturdy frill to turn away blows.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
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
          "id": "TtHjHHNsWBpSbHfZ",
          "name": "Head",
          "bonus": 10,
          "damage": "1d8+4 bludgeoning",
          "traits": []
        },
        {
          "id": "DFI4Sd1Bwc63wC2K",
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
          "id": "R72uRW5zGCfe84EQ",
          "name": "Defensive Posture",
          "kind": "action",
          "description": "The protoceratops tucks in its head and presents its sturdy frill, granting a +1 circumstance bonus to AC adjacent allies. The protoceratops remains in its Defensive Posture until the start of its next turn, but only grants the bonus while allies remain adjacent",
          "traits": []
        },
        {
          "id": "BNij3WTNhwLJRILS",
          "name": "Frill Block",
          "kind": "reaction",
          "description": "Requirements The protoceratops is in its Defensive Posture\nTrigger An adjacent ally would take damage from a physical attack\nEffect The protoceratops partially blocks the blow with its frill, reducing the damage by 5.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:harbor-seal",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ezjJIrMEQeLCk7jy",
      "slug": "harbor-seal",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:463fa5e67c5d0a43c5c668e773d57a7e4632c5bb88f1e45d2a714a163b9b7aa8",
    "translatableHash": "sha256:5f2fa86675e77590f3fcea0de9d2a2326bcc37bd20b9a173b6aa908ebcd55149",
    "data": {
      "schemaVersion": 1,
      "name": "Harbor Seal",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Harbor seals are the most common seals found in Golarion and famous for their soft, furry bodies. They're vicious hunters underwater, but typically shy of humanoids on the surface, preferring to hide among the waves rather than face down what seems to be a terrifying land predator.",
      "armorClass": 17,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "scent-imprecise-20"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 11,
        "will": 5
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 10,
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
          "id": "9kqWKCTEBWsy0jbT",
          "name": "Jaws",
          "bonus": 9,
          "damage": "1d8+4 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "JjJHiAGKr8tAiS9a",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A harbor seal can hold its breath for 30 minutes.",
          "traits": []
        },
        {
          "id": "nHssHIpUi4l0uxUW",
          "name": "Whisker Sense",
          "kind": "passive",
          "description": "A harbor seal can use its whiskers to sense vibrations as a precise sense at the listed range, but only underwater.",
          "traits": []
        },
        {
          "id": "11iQZclDuZeKVO4B",
          "name": "Aquatic Ambush",
          "kind": "action",
          "description": "40 feet.",
          "traits": []
        },
        {
          "id": "u1aCRdTrObUDWI2g",
          "name": "Aquatic Feast",
          "kind": "action",
          "description": "Requirements The harbor seal has a Medium or smaller creature Grabbed in its jaws\nEffect The harbor seal Swims up to 10 feet, carrying its grabbed creature along with it dealing 1d8 slashing damage (check (fortitude, dc:18, basic) save).",
          "traits": []
        },
        {
          "id": "5WAUQkWykhS0myJx",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.HBrBrUzjfvj2gDXB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.HBrBrUzjfvj2gDXB",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "HBrBrUzjfvj2gDXB",
          "sourceId": "HBrBrUzjfvj2gDXB",
          "name": "Aquatic Ambush",
          "type": "action"
        },
        "owner": {
          "sourceId": "11iQZclDuZeKVO4B",
          "name": "Aquatic Ambush",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/system/rules/1/uuid",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "11iQZclDuZeKVO4B",
          "name": "Aquatic Ambush",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 82,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "u1aCRdTrObUDWI2g",
          "name": "Aquatic Feast",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "5WAUQkWykhS0myJx",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:stony-goat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "HqZ2TrDL49tHhAvF",
      "slug": "stony-goat",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d43905f49c38efc6921896d0ecaa5756aacf20a702aba07e537aea4987b90e2b",
    "translatableHash": "sha256:87b6ded44411c82c9c7abf78a668bd09ca3ebbac7f09554c6129e1ae196759fc",
    "data": {
      "schemaVersion": 1,
      "name": "Stony Goat",
      "level": 2,
      "rarity": "rare",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "Stony goats diverge from their common cousins via their rock-like horns and unique appetites. These meek creatures love to eat mineral ores, using teeth tougher than diamonds to grind down rocks and metals. The indigestible components, such as refined chunks of metal and precious stones, coagulate into a cud the goat regurgitates to further ruminate on. In emergency situations, stony goats can even drain nutrition from their cud. These properties might make stony goats excellent companions for miners and metalworkers; however, the beasts are quite rare and famously difficult to train.\nStony goats are jumpy creatures with a prey animal's wide field of view and a strong survival instinct. They also have a unique defense mechanism: when startled, stony goats temporarily petrify into solid stone, dissuading predators through inedibility. This combination of weak nerves and tremendous climbing ability often leads to travelers discovering what appears to be a lone statue of a goat in an otherwise unoccupied mountainous area.\nKeen observers can discern a stony goat's recent diet via the mineral flakes that form in the goat's horns, such as light silver streaks indicating a meal of dawnsilver ore. Collectors often hunt stony goats and display horns with rare properties. If a stony goat destroys its cud for emergency nutrition, its horns appear as solid chunks of the minerals it consumed for about an hour before reverting to their rock-like norm.",
      "armorClass": 17,
      "hitPoints": 28,
      "speedFeet": 40,
      "perception": {
        "modifier": 11,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 5
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
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
          "id": "ZxSyBPGzBryXgEO8",
          "name": "Head",
          "bonus": 8,
          "damage": "1d8+3 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "JFdC8WSFlIpoumiM",
          "name": "Cliff Climber",
          "kind": "passive",
          "description": "A stony goat can trot across the steepest cliffs. It doesn't need to attempt Climb checks to scale inclines, and it isn't Off-Guard while Climbing an incline. It ignores difficult terrain caused by rocks, rubble, and uneven ground made of earth and stone.",
          "traits": []
        },
        {
          "id": "Ui3wvnYnz3DnOZGg",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ymqNbLM0VaieXXow",
          "name": "Self-Petrify",
          "kind": "reaction",
          "description": "Trigger The stony goat gains the Frightened condition or takes more than 8 damage in a single hit\nEffect The stony goat turns to stone in self-defense. It gains the Petrified condition for 1d4. If the goat is damaged while it's petrified, it immediately heals by that amount by absorbing minerals from its cud, causing its cud to lose value equal to the amount of Hit Points restored (for instance, losing 5 gp worth of value to restore 5 Hit Points); if the goat's cud is reduced to 0 gp, it has the minerals fully drained from it, and the goat won't form more cud until it has eaten a sufficient quantity of rock and slept.",
          "traits": [
            "polymorph"
          ]
        },
        {
          "id": "CKFDEB6XiCoXc9ie",
          "name": "Overhead Leap",
          "kind": "action",
          "description": "The stony goat Leaps up to 12 feet vertically and 20 feet horizontally; this movement doesn't trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "gtYvOmVkOoF5oQjc",
          "name": "Shove and Run",
          "kind": "action",
          "description": "The stony goat attempts to Shove the nearest creature and then Strides with a +20-foot circumstance bonus to Speed.",
          "traits": []
        },
        {
          "id": "WM49TxgFCDnEGfN0",
          "name": "Stone Bolt",
          "kind": "reaction",
          "description": "Trigger The stony goat loses the Petrified condition\nEffect The stony goat's first instinct is to escape. It Strides with a +20 circumstance bonus to its Speed.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 80,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Climb",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Climb",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Climb",
          "sourceId": "pprgrYQ1QnIDGZiy",
          "name": "Climb",
          "type": "action"
        },
        "owner": {
          "sourceId": "JFdC8WSFlIpoumiM",
          "name": "Cliff Climber",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 165,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "JFdC8WSFlIpoumiM",
          "name": "Cliff Climber",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "Ui3wvnYnz3DnOZGg",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 53,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ymqNbLM0VaieXXow",
          "name": "Self-Petrify",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 259,
        "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Petrified",
          "sourceId": "dTwPJuKgBQCMxixg",
          "name": "Petrified",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ymqNbLM0VaieXXow",
          "name": "Self-Petrify",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/system/rules/1/uuid",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Petrified",
          "sourceId": "dTwPJuKgBQCMxixg",
          "name": "Petrified",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ymqNbLM0VaieXXow",
          "name": "Self-Petrify",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 18,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaps",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "CKFDEB6XiCoXc9ie",
          "name": "Overhead Leap",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 30,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Shove",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Shove",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Shove",
          "sourceId": "7blmbDrQFNfdT731",
          "name": "Shove",
          "type": "action"
        },
        "owner": {
          "sourceId": "gtYvOmVkOoF5oQjc",
          "name": "Shove and Run",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 53,
        "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Petrified",
          "sourceId": "dTwPJuKgBQCMxixg",
          "name": "Petrified",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WM49TxgFCDnEGfN0",
          "name": "Stone Bolt",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:shotalashu",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "O7EJDExSclMdUFWo",
      "slug": "shotalashu",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a4f2ddfc5bb6556f96212df49ec76bbefe13231aa88869b5dc388e128d457256",
    "translatableHash": "sha256:07e3cfc4f56fc161228f95425c5fef2be031c2a261703aec2a0551523de01343",
    "data": {
      "schemaVersion": 1,
      "name": "Shotalashu",
      "level": 2,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "These reptilian beasts of burden are primarily known for their telepathic nature and close bond with their riders. Shotalashus are native to the planet Castrovel, where they are the traditional mounts of lashunta warriors, though some have appeared on Golarion thanks to travel between the two worlds. Both elves and lashuntas have brought shotalashus to Golarion, though elves are somewhat more likely to sell or give them away.\nMounted combatants covet these alien creatures, though taming one is not as simple as buying a horse or camel. A shotalashu must form a telepathic bond with their rider before any riding is permitted, and once the creature forms such a bond, they will not permit any other rider. While telepaths have the easiest time forming this bond, others have found ways to prove their worth.\nAny shotalashus encountered in the wilds of Golarion most likely escaped from captivity—a notable wild pack exists on the Isle of Kortos, descended from such runaways. Would-be riders are most likely to find available shotalashus in Absalom, Kyonin, and southern Garund. Shotalashus are extravagantly expensive to raise on Golarion, resulting in corresponding prices when they appear on the market. However, the friends of riders who've passed will often help the surviving shotalashus find a new rider once they're ready.",
      "armorClass": 18,
      "hitPoints": 35,
      "speedFeet": 40,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 11
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": -3,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "stealth": 8,
        "survival": 7
      },
      "languages": [
        "elven",
        "lashunta"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "LAZwyjak9LBwIAUj",
          "name": "Claws",
          "bonus": 10,
          "damage": "1d6+2 slashing; 1d4 mental",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "BetFmirFqNcNW9mI",
          "name": "Empathic Communication",
          "kind": "passive",
          "description": "While a shotalashu can't speak, even telepathically, it understands simple commands in the languages it knows. It returns telepathic sensations of emotion to creatures touching it or the partner of its telepathic link at any distance.",
          "traits": []
        },
        {
          "id": "1nZ2035uetODaoFs",
          "name": "Telepathic Link",
          "kind": "passive",
          "description": "A rider who would tame a shotalashu for a mount must first form a telepathic link with it. Establishing this link require spending a week with the desired mount and succeeding at a check (occultism, dc:21) check. Any creature with telepathic capabilities, such as telepathy, touch telepathy, empathic sense, or the ability to cast spells such as Telepathy, gains a +4 circumstance bonus to this check. This link remains and neither can form a new link until one member dies. The shock of a partner dying leaves the survivor Stupefied 2 for 24 hours and prevents forming a new link for at least a month.",
          "traits": [
            "mental",
            "occult"
          ]
        },
        {
          "id": "82XzBMw5oI7GUeuR",
          "name": "Jungle Stride",
          "kind": "passive",
          "description": "The shotalashu ignores difficult terrain due to vegetation.",
          "traits": []
        },
        {
          "id": "niDY9lm2zgxq1GvI",
          "name": "Telepathic Pounce",
          "kind": "action",
          "description": "The shotalashu hunts by pinning its foes with its mind. One creature within 30 feet must attempt a check (will, dc:18) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –5 foot status penalty to its Speeds for one round.\nFailure The creature takes a –10 foot status penalty to its Speeds for one round. The shotalashu can then Leap.\nCritical Failure The creature is Off-Guard and Immobilized for one round. The shotalashu can Leap.",
          "traits": [
            "mental",
            "occult"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 348,
        "uuid": "Compendium.pf2e.spells-srd.Item.Telepathy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Telepathy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Telepathy",
          "sourceId": "HqTI6wRrck1YXp3F",
          "name": "Telepathy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "1nZ2035uetODaoFs",
          "name": "Telepathic Link",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 565,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1nZ2035uetODaoFs",
          "name": "Telepathic Link",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 438,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "niDY9lm2zgxq1GvI",
          "name": "Telepathic Pounce",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 541,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "niDY9lm2zgxq1GvI",
          "name": "Telepathic Pounce",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 598,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "niDY9lm2zgxq1GvI",
          "name": "Telepathic Pounce",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:stonefish-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "rQYVJHpbcbBw6rnt",
      "slug": "stonefish-swarm",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d3646509630c11033ba2a50cfaf215215eb4002d106fbf2470774889eeeae46d",
    "translatableHash": "sha256:658497ff482afef663c21f97e7b15d82aa5be945addef762f2ebb6a0a8712cd6",
    "data": {
      "schemaVersion": 1,
      "name": "Stonefish Swarm",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic",
        "swarm"
      ],
      "description": "Stonefish occasionally band together where food is abundant, filling all nooks and crannies of a coral reef. In large numbers, stonefish can take on prey much larger than themselves.",
      "armorClass": 16,
      "hitPoints": 25,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 5
      },
      "abilities": {
        "str": 2,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 6,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 3",
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
          "id": "AWlVbiAbVePA0gpF",
          "name": "Defensive Spines",
          "kind": "passive",
          "description": "When a creature enters the stonefish swarm's space, that creature takes 1d4 piercing damage and is exposed to stonefish swarm venom.",
          "traits": []
        },
        {
          "id": "q8Xoe5BhuPRGZ9IQ",
          "name": "Reef Camouflage",
          "kind": "action",
          "description": "Until the next time it acts, the stonefish swarm appears to be a colorful coral reef. It has an automatic result of 26 on Deception checks and DCs to pass as a reef.",
          "traits": [
            "concentrate"
          ]
        },
        {
          "id": "30Xxn6WE11NrGrqJ",
          "name": "Inject Poison",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d4 piercing damage (check (reflex, dc:18, basic) save). Creatures that fail the save are exposed to stonefish swarm venom.",
          "traits": []
        },
        {
          "id": "jn9AnjvtJSsTXoFG",
          "name": "Stonefish Swarm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage and Clumsy 1 (1 round)\nStage 2 1d6 poison and Clumsy 2 (1 round)\nStage 3 2d6 poison damage and clumsy 2 (1 round)",
          "traits": [
            "poison"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 164,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "jn9AnjvtJSsTXoFG",
          "name": "Stonefish Swarm Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 281,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "jn9AnjvtJSsTXoFG",
          "name": "Stonefish Swarm Venom",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:flynkett",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "3SNjewODzhPcxx9y",
      "slug": "flynkett",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:28e125e191403656463ebbd641f58c94d84aedfcf125a63a6a0eeb2bb4d758c6",
    "translatableHash": "sha256:d1d18f2d9fb5d06832f4df0c2236ea9c3343be3186a95cd4bb410cb1fe84d7cd",
    "data": {
      "schemaVersion": 1,
      "name": "Flynkett",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "The piercing whistle of the flynkett can often be heard over the harsh jungle rains, shrieking dissonantly when its cries combine with others of its pack. Although generally effective as a warning to nearby predators, these sharp cries also serve as a lure for reckless alchemists eager to study the creature's potent enzymes.\nFlynketts' name, most theorize, is a corruption of \"flinging kettle\" or \"flying kettle.\" They can't truly fly, instead using their skin flaps to glide in a manner similar to flying squirrels. However, the primary use of their skin flaps isn't for movement, but digestion. When it rains, flynketts roll up their loose skin, creating a crude sort of kettle in which to catch precipitation. The remarkable creatures' acid combines with the falling water to break down wood, soil, or even rocks into a nutritional stew. Therefore, the flynkett can flourish when introduced to any environment with frequent rain, something solid to stand on, and a lack of natural predators.\nAlthough their acid can be harvested without harming a flynkett, the creatures rarely cooperate. If disturbed, particularly in the middle of feeding, they release clouds of acidic steam. They're also capable of spitting the fluid with deadly accuracy. Thankfully for those who run afoul of them, flynketts have no use for corpses and will generally break off pursuit when the interloper leaves their territory.\nSeveral organizations and individual scholars have desperately sought to domesticate flynketts for use in alchemical production. To date, none of these efforts have been successful, though several abandoned labs still contain aggressive packs of flynketts who protect their new territory with ferocious tenacity.",
      "armorClass": 19,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 9,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "acid 6"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "nZLRo7EoUuyGF4iZ",
          "name": "Acid Spit",
          "bonus": 11,
          "damage": "1d8 acid",
          "traits": [
            "acid"
          ]
        }
      ],
      "actions": [
        {
          "id": "6YnIhpOQ5MuJkq7l",
          "name": "Glide",
          "kind": "action",
          "description": "The flynkett stretches its flaps to glide through the air. It moves 5 feet down and up to 25 feet forward through the air. The flynkett can remain in the air long as it spends at least 1 action Gliding each round and does not Kettle Up.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "iUhS0qcMQrvdqAug",
          "name": "Kettle Up",
          "kind": "action",
          "description": "The flynkett uses its skin flaps to form a crude kettle. While Kettled Up, the flynkett can't use its claw Strike or take move actions. If the flynkett has been Kettled Up for 1 minute or longer, and its kettle is full of water (usually due to the flynkett being in the rain), the flynkett's kettle begins to boil, emitting a piercing whistle that causes all creatures within 30 feet to take a –2 penalty to Perception checks to hear sources other than the flynkett; this is an auditory effect. The flynkett can stop Kettling Up as a free action.",
          "traits": []
        },
        {
          "id": "bTPVUFyH1OjjS4CW",
          "name": "Spill",
          "kind": "reaction",
          "description": "Requirements The flynkett is Kettled Up\nTrigger The flynkett takes physical damage or is knocked Prone\nEffect The flynkett spills the contents of its full skin flaps, releasing its digestive juices in a cloud of acidic vapor that deals 2d8 acid damage to all non-flynkett creatures within 20-foot emanation (check (fortitude, dc:18, basic, options:area-effect) save). If the flynkett was boiling, the damage is increased to 4d8.",
          "traits": [
            "acid"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 141,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bTPVUFyH1OjjS4CW",
          "name": "Spill",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:fangtooth-school",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Am7MocGZO1bAKr7B",
      "slug": "fangtooth-school",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e10bd7d7aa418a88e52c038913527ffe534b3455bf6618ec48b349cf161b049a",
    "translatableHash": "sha256:5a64d7d84103b7eba99283f37b2d622abc7c55071c43c984d7883010552f0ed0",
    "data": {
      "schemaVersion": 1,
      "name": "Fangtooth School",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic",
        "swarm"
      ],
      "description": "The fearsome teeth of this fish are so massive that it's difficult for the creature to close its mouth. These fish must consider even much larger creatures as possible food, rising towards the surface during the darkness of night.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision",
          "scent-imprecise-120",
          "wavesense-15"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 10,
        "will": 9
      },
      "abilities": {
        "str": -2,
        "dex": 3,
        "con": 2,
        "int": -5,
        "wis": 2,
        "cha": -3
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 5",
          "piercing 2",
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
          "id": "x3ntggdoofZDoYrp",
          "name": "Sunless Sight",
          "kind": "passive",
          "description": "While in bright light, the fangtooth fish school is Blinded and Slowed 1.",
          "traits": []
        },
        {
          "id": "Tz7S0kxtKVZlVZ7i",
          "name": "Bite and Gnaw",
          "kind": "action",
          "description": "Each enemy in the school's space takes 2d8 piercing damage (check (reflex, dc:19, basic) save)",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 55,
        "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Blinded",
          "sourceId": "XgEqL1kFApUbl5Z2",
          "name": "Blinded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "x3ntggdoofZDoYrp",
          "name": "Sunless Sight",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/0/system/description/value",
        "sourceIndex": 110,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "x3ntggdoofZDoYrp",
          "name": "Sunless Sight",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:stony-bat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "cHAb5CflYMxet9pO",
      "slug": "stony-bat",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:146f8fa3b0a0bc55e36a8830f896381b95c47b06f77e35ad559c633e0f861293",
    "translatableHash": "sha256:657070ce5138713ad966f477e840a96ce67044c546473933565d95acbe27ca9d",
    "data": {
      "schemaVersion": 1,
      "name": "Stony Bat",
      "level": 3,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "beast"
      ],
      "description": "Gorgons are a broad group of animals that share a few peculiar traits. All gorgons are covered in armored plates and breathe petrifying gases. Other than these features, gorgons can resemble almost any animal. While some gorgons may seem like less physically imposing creatures, they should never be underestimated. Gorgons are canny hunters, and even a small puff of their breath can immobilize almost any prey.\nThese creatures resemble chubby bats covered in small overlapping metal plates. They can't exhale enough petrifying gas to paralyze a normal-sized humanoid, but it's effective on their usual prey of insects and other small animals, which they petrify before consuming. However, stony bats have learned how to use their petrification gas to defend themselves against larger creatures, freezing a limb or raining down pebbles of petrified water vapor.\nFurther, they can work together to bring down larger creatures, petrifying and consuming them limb by limb.\nStony bats generally live in caves in large groups, though they frequently fly out in small numbers for hunting. They typically aren't aggressive against non-prey they encounter outside, though they're very protective of their caves. Oreads and others who don't fear petrification sometimes keep stony bats as pets.",
      "armorClass": 18,
      "hitPoints": 48,
      "speedFeet": 15,
      "perception": {
        "modifier": 11,
        "senses": [
          "echolocation-30"
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
        "int": -3,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 11,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "petrified"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Kv753aTJrvXYfwBr",
          "name": "Jaws",
          "bonus": 11,
          "damage": "2d8+2 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "1WbksIeaf3hGSwB5",
          "name": "Echolocation",
          "kind": "passive",
          "description": "The stony bat can use hearing as a precise sense with the listed range.",
          "traits": []
        },
        {
          "id": "bpzkvokQICPTqRCn",
          "name": "Petrify Body Part",
          "kind": "action",
          "description": "The stony bat breathes a puff of petrifying gas onto an adjacent creature, targeting a specific body part. The target must succeed at a check (fortitude, dc:20) save or be partially petrified for 1 minute, with an effect varying with the body part targeted.\n• Face The creature's face stiffens and a film of stone partially blocks its vision. It is Dazzled.\n• Hand One of the creature's hands is petrified. It cannot Release items from that hand or use the hand for fine manipulation. Attack rolls with weapons held in that hand take a –2 status penalty.\n• Leg A patch of the creature's leg becomes inflexible and heavy. It takes a –10 status penalty to its Speed. If all of the creature's legs become petrified in this way, the creature's Speed is reduced down to 5 feet. At the GM's discretion, a creature with movement that doesn't rely on legs, such as creatures that Fly with wings, don't take a penalty to these other Speeds.",
          "traits": [
            "earth",
            "primal"
          ]
        },
        {
          "id": "sI3QMH0zN2o1CNCo",
          "name": "Petrify Vapor",
          "kind": "action",
          "description": "The stony bat breathes petrifying gas in a 15-foot cone, too thin to harm creatures in the area. However, it petrifies ambient moisture, raining down a cascade of tiny stones onto any creatures in the space directly below the cone. The falling rocks deal 4d6 bludgeoning damage (check (reflex, dc:20, basic, options:area-effect)). The stony bat can't use Petrify Vapor again for 1d4.",
          "traits": [
            "earth",
            "primal"
          ]
        },
        {
          "id": "hITWxw0rfE7Mw2zr",
          "name": "Stone Feast",
          "kind": "passive",
          "description": "The stony bat specifically targets petrified body parts, which it can consume, unlike flesh. The stony bat's jaws deal an extra 1d6 damage against a creature that has been petrified, either partially or completely, and ignore the Hardness of petrified creatures.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 379,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bpzkvokQICPTqRCn",
          "name": "Petrify Body Part",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:crying-cicada",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "cYXWihCjHGmprCPz",
      "slug": "crying-cicada",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a13ae29c5312d2c8090314fdf108fa3a393dbbe6af491f69b2415aa9b6e4a737",
    "translatableHash": "sha256:cf779dded5feae3d3daad34177a17b9a4838b41bd841f54a9a4fd88b07bde9da",
    "data": {
      "schemaVersion": 1,
      "name": "Crying Cicada",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "These small insects are a nuisance and danger to small villages within Brevoy, taking over entire forests and blending in with the foliage. Also known as calling beetles, due to their ability to mimic and repeat the voices of their previous victims, crying cicadas wait for passersby to lure into the trees, fascinating their victims with their cries before fluttering their wings to release toxic dust. Once a target is near death, crying cicadas will take flight from the trees and land on the body to feed.\nThe scale dust of crying cicadas can be turned into an effective ingested poison, but obtaining a cicada and harvesting these scales is so dangerous that most would-be poisoners simply die in the process. Even finding the insects is dangerous enough; crying cicadas' natural stealth and dark coloration make them difficult to locate among the trees of a forest, and following their cries often leads one to fall victim to the very creatures they're hunting.\nThe longer a colony of crying cicadas stays in a forest, the wider their collection of cries grows. Often, a young colony will be able to replicate only the sounds of small, dying creatures, but larger, more established colonies will have the ability to mimic the sounds of children and dragons.",
      "armorClass": 19,
      "hitPoints": 48,
      "speedFeet": 15,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 5,
        "int": -5,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "deception": 12,
        "stealth": 10,
        "survival": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "6mbayxPG3rJ5frUk",
          "name": "Proboscis",
          "bonus": 9,
          "damage": "1d8+5 piercing; 1d4 poison",
          "traits": []
        },
        {
          "id": "t2y2nnhYLrSdX0Yz",
          "name": "Slam",
          "bonus": 9,
          "damage": "1d6+4 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "p6CCIwIhLTWNlbfR",
          "name": "Steal Voice",
          "kind": "action",
          "description": "Requirements An enemy creature has spoken since the crying cicada's last turn\nEffect The crying cicada learns and mimics the sound of its opponent's voice. It can't make new sentences, but it can choose to repeat select parts of the phrases it has heard. All non-cicada creatures within 30 feet, other than the owner of the stolen voice, must succeed at a check (will, dc:19) save to disbelieve the mimicry.",
          "traits": [
            "auditory"
          ]
        },
        {
          "id": "mjky5VTu0lNXpdL8",
          "name": "Wings Flat",
          "kind": "passive",
          "description": "When the crying cicada is still and perched on a tree, it blends seamlessly into the environment. It has an automatic result of 30 on Deception checks and DCs to pass as part of the tree.",
          "traits": []
        },
        {
          "id": "YKTvAlrNoc9ohi3v",
          "name": "Crying Cicada Poison",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:19)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage plus Slowed 1 (1 round)\nStage 2 1d6 poison damage plus Slowed 2 (1 round)\nStage 3 2d6 poison damage plus slowed 2 and Stupefied 1 (1 round).",
          "traits": [
            "inhaled",
            "poison"
          ]
        },
        {
          "id": "Wl43DGa4w9p8kiCY",
          "name": "Sob",
          "kind": "action",
          "description": "The crying cicada mimics the noise of a wounded animal or crying child. Non-cicada creatures within a 150-foot emanation must attempt a check (will, dc:19) save or be distressed by the pleas for help. The effect lasts for 1 round, but if the cicada uses this ability again on subsequent rounds, it extends the duration by 1 round for all affected creatures. Once a creature succeeds at any save against Sob, that creature is temporarily immune to Sob for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature believes an animal or child needs help somewhere nearby. The creature is Fascinated, and it must spend each of its actions to Seek or move closer to the cicada as expediently as possible, while avoiding obvious dangers. If the creature is adjacent to the cicada, it stays still and doesn't act.",
          "traits": [
            "auditory",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "Iv7FApuZwIfSDKZ6",
          "name": "Wing Flurry",
          "kind": "action",
          "description": "The crying cicada beats its wings together, exposing all creatures within a 10-foot burst to crying cicada poison.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 172,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YKTvAlrNoc9ohi3v",
          "name": "Crying Cicada Poison",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 297,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YKTvAlrNoc9ohi3v",
          "name": "Crying Cicada Poison",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 445,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YKTvAlrNoc9ohi3v",
          "name": "Crying Cicada Poison",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 667,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fascinated",
          "sourceId": "AdPVz7rbaVSRxHFg",
          "name": "Fascinated",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Wl43DGa4w9p8kiCY",
          "name": "Sob",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 763,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "Wl43DGa4w9p8kiCY",
          "name": "Sob",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:weremoose",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "D8Y8P3XHLTMPLYJf",
      "slug": "weremoose",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:90563724692b73bec8722e860be33fa4340e331a5f02c02e7be3e0b636e397c2",
    "translatableHash": "sha256:2089f78864664c6e9b93a99e85346eac12ba2313a2121e15006dc1c2d4826482",
    "data": {
      "schemaVersion": 1,
      "name": "Weremoose",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "human",
        "humanoid",
        "werecreature"
      ],
      "description": "Werecreatures are humanoids who transform into animals and animal-humanoid hybrids under the light of the full moon. The fate of these shapechanging creatures derives from an ancient primal curse that they can, in turn, transmit through their own bites. The stat blocks in this section reflect werecreatures in their hybrid forms.\nA weremoose's tendencies toward stubbornness and a grumpy attitude make it difficult for them to get along with others. Most often, they live as hunters or hermits, taking in the peace of their natural surroundings. If their territory is invaded, they don't hide or retreat but are unlikely to attack. If someone else starts the fight, though, a weremoose retaliates without mercy.",
      "armorClass": 19,
      "hitPoints": 60,
      "speedFeet": 30,
      "perception": {
        "modifier": 6,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": -1,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "athletics": 9,
        "intimidation": 8
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
          "id": "dV4ohACXBUoqXB7Y",
          "name": "Greataxe",
          "bonus": 11,
          "damage": "1d12+6 slashing",
          "traits": [
            "sweep"
          ]
        },
        {
          "id": "DkN8Lh7r5N0cFW7C",
          "name": "Hatchet",
          "bonus": 11,
          "damage": "1d6+6 slashing",
          "traits": [
            "agile",
            "sweep"
          ]
        },
        {
          "id": "P5qawuu2q7UCD2NI",
          "name": "Hatchet",
          "bonus": 8,
          "damage": "1d6+6 slashing",
          "traits": [
            "agile",
            "thrown-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "PBbZheMzP1YRLCYf",
          "name": "Deer Empathy",
          "kind": "passive",
          "description": "A weremoose can communicate with deer, including moose.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "eAZIsoNkpFDUXhr2",
          "name": "Cold Adaptation",
          "kind": "passive",
          "description": "The weremoose treats environmental cold effects as if they were one step less extreme.",
          "traits": []
        },
        {
          "id": "iztAc9yj0XX0NQi0",
          "name": "Change Shape",
          "kind": "action",
          "description": "Medium human with fist +11 for 1d4+6 bludgeoning,\nor\nLarge moose with antler and hoof +11 for 1d8+6 bludgeoning.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "VVdmEh4xA1SlQGBa",
          "name": "Curse of the Weremoose",
          "kind": "passive",
          "description": "This curse affects only humanoids.\nSaving Throw check (fortitude, dc:17)\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into the same kind of werecreature until dawn.\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn.",
          "traits": [
            "curse",
            "primal"
          ]
        },
        {
          "id": "Daweg1i0kaXSnpof",
          "name": "Moon Frenzy",
          "kind": "passive",
          "description": "When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its antlers by 2.\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is Fatigued for 2d4.\nEffect: Moon Frenzy",
          "traits": [
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "w6LNTDUzUbVxW3Rj",
          "name": "Thundering Charge",
          "kind": "action",
          "description": "The weremoose Strides twice and then makes an antler Strike. A Medium or smaller creature damaged by this attack must succeed at a check (fortitude, dc:17) save or be Stunned 1.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.8COlYvHe6hKCXY8x",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.8COlYvHe6hKCXY8x",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "8COlYvHe6hKCXY8x",
          "sourceId": "8COlYvHe6hKCXY8x",
          "name": "Greataxe",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "VKJ9smSfh3kI2cfY",
          "name": "Greataxe",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.LGgvev6AV0So8tP9",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.LGgvev6AV0So8tP9",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "LGgvev6AV0So8tP9",
          "sourceId": "LGgvev6AV0So8tP9",
          "name": "Hatchet",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "RgC9JomMFtsNPR9K",
          "name": "Hatchet",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.FA0ri2fAcMa1HgZe",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.FA0ri2fAcMa1HgZe",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "FA0ri2fAcMa1HgZe",
          "sourceId": "FA0ri2fAcMa1HgZe",
          "name": "(Werecreature) Moon Frenzy",
          "type": "action"
        },
        "owner": {
          "sourceId": "Daweg1i0kaXSnpof",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 313,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Daweg1i0kaXSnpof",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 407,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Moon Frenzy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Moon Frenzy",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Moon Frenzy",
          "sourceId": "dRe8n1nBWMIXd8jh",
          "name": "Effect: Moon Frenzy",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Daweg1i0kaXSnpof",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 169,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "w6LNTDUzUbVxW3Rj",
          "name": "Thundering Charge",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.YMQr577asquZIP65",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "YMQr577asquZIP65",
          "sourceId": "YMQr577asquZIP65",
          "name": "Scale Mail",
          "type": "armor"
        },
        "owner": {
          "sourceId": "90QPn3aPtsVAcW7j",
          "name": "Scale Mail",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "eQM5hQ1W3d1uen97",
          "sourceId": "eQM5hQ1W3d1uen97",
          "name": "Change Shape",
          "type": "action"
        },
        "owner": {
          "sourceId": "iztAc9yj0XX0NQi0",
          "name": "Change Shape",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.ICnpftxZEilrYjn0",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.ICnpftxZEilrYjn0",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "ICnpftxZEilrYjn0",
          "sourceId": "ICnpftxZEilrYjn0",
          "name": "(Werecreature) Curse of the Werecreature",
          "type": "action"
        },
        "owner": {
          "sourceId": "VVdmEh4xA1SlQGBa",
          "name": "Curse of the Weremoose",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:swordfish",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "usNtfeE0DVJKg2nu",
      "slug": "swordfish",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:706eab00e57689512e2c2b2da41240a4ea01feb82dca8de5339c9b28c4f0eb77",
    "translatableHash": "sha256:3ecf7dae1efa3c0590273121cb2b3573d51480bffc91f694ef04aeb9f3c38133",
    "data": {
      "schemaVersion": 1,
      "name": "Swordfish",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Contrary to popular belief, the bill of the swordfish is not used for impaling its prey, but to stun or slash. Specialized organs help keep it warm in the coldest waters, increasing its already considerable speed and reflexes.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 7
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
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
          "id": "jCzhh1zwTEoBIUk4",
          "name": "Bill",
          "bonus": 12,
          "damage": "1d10+5 slashing",
          "traits": [
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "1tA3i1FWUctJmGlH",
          "name": "Warm Brain",
          "kind": "reaction",
          "description": "Requirements The swordfish is in cold water\nTrigger The swordfish rolls initiative\nEffect The swordfish Seeks or Swims.",
          "traits": []
        },
        {
          "id": "InDTSGE7SMMdWecU",
          "name": "Fast Sweep",
          "kind": "action",
          "description": "Frequency once per turn\nEffect The swordfish makes two bill Strikes against two adjacent targets, with a +1 circumstance bonus to its attack rolls.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 177,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": "Seeks",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "1tA3i1FWUctJmGlH",
          "name": "Warm Brain",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 232,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Swim",
        "label": "Swims",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Swim",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Swim",
          "sourceId": "c8TGiZ48ygoSPofx",
          "name": "Swim",
          "type": "action"
        },
        "owner": {
          "sourceId": "1tA3i1FWUctJmGlH",
          "name": "Warm Brain",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:rift-chameleon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ZyT4d8qw4oYclcb0",
      "slug": "rift-chameleon",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:180154d289429b57b70bada398df33549a70651ad680741a8b7f66f11b5179dc",
    "translatableHash": "sha256:5ccbdde0206bdf490ca27e93c79e0bc2e8d0b03cf05e4c88ee29ced8a6cdeb32",
    "data": {
      "schemaVersion": 1,
      "name": "Rift Chameleon",
      "level": 3,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "beast",
        "ethereal"
      ],
      "description": "Rift chameleons are best known for their unsettling ability to swallow creatures significantly larger than themselves, thanks to a digestive tract that connects to its own pocket of the Ethereal Plane. When two or more rift chameleons remain in proximity for extended periods of time, their partially extradimensional nature begins to subtly warp the surrounding terrain. Direction and distance become confused to all but the lizards, making it easy for locals to get lost in places they once thought familiar.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -2,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "athletics": 9,
        "stealth": 10,
        "survival": 8
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
          "id": "kSxZCAZUdZA1SadN",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d10+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Fn1PmwJ67vvKy7UF",
          "name": "Tail",
          "bonus": 11,
          "damage": "1d8+4 bludgeoning",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "c6uN20xlN08RQqpQ",
          "name": "Tongue",
          "bonus": 11,
          "damage": "",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "TThoeZuLbhpozxhc",
          "name": "Extradimensional Gullet",
          "kind": "passive",
          "description": "The rift chameleon's innards exist partially on the Ethereal Plane, allowing it to swallow any number of creatures, even ones larger than itself. Creatures that Escape or cut themselves free from the chameleon's stomach reappear in the Universe adjacent to the rift chameleon's position. Creatures cannot escape from the rift chameleon's gullet using teleportation effects unless those effects can also cross planar boundaries.",
          "traits": [
            "extradimensional"
          ]
        },
        {
          "id": "4ZR4SCFbblWF8wBu",
          "name": "Flickering Dash",
          "kind": "action",
          "description": "Frequency once per round\nEffect The rift chameleon Strides twice. During this movement, it flits quickly between the Universe and the Ethereal Plane, gaining resistance 5 to physical damage.",
          "traits": [
            "occult",
            "teleportation"
          ]
        },
        {
          "id": "0bKTQhiygTSORx6s",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "7vxFfLvgqYWDkQpU",
          "name": "Ethereal Camouflage",
          "kind": "passive",
          "description": "A rift chameleon can Hide, even if it doesn't have cover, but it cannot be Concealed from creatures on the Ethereal Plane.",
          "traits": []
        },
        {
          "id": "Jy7lpBjicK8ixrFC",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, 1d12+2 bludgeoning damage, Rupture 10",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "ib69NvASfvjsqsSg",
          "name": "Tongue Pull",
          "kind": "passive",
          "description": "Any creature hit by the rift chameleon's tongue is pulled adjacent to the chameleon. The creature is Off-Guard to the next Strike the rift chameleon makes against it this round.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 164,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "TThoeZuLbhpozxhc",
          "name": "Extradimensional Gullet",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "0bKTQhiygTSORx6s",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 24,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Hide",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Hide",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Hide",
          "sourceId": "XMcnh4cSI32tljXa",
          "name": "Hide",
          "type": "action"
        },
        "owner": {
          "sourceId": "7vxFfLvgqYWDkQpU",
          "name": "Ethereal Camouflage",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 118,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7vxFfLvgqYWDkQpU",
          "name": "Ethereal Camouflage",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "Jy7lpBjicK8ixrFC",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 104,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ib69NvASfvjsqsSg",
          "name": "Tongue Pull",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:giant-fangtooth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "4pazCyBIXu22a7FU",
      "slug": "giant-fangtooth",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0051b4cec02c491c5a3b8e40c2eeb72995d5d216a524449504f385aac05318c0",
    "translatableHash": "sha256:fe27aa86b46ad0adcb36d4eefe7da2c163617f1f7f1b852def8f0400d08c4ed4",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Fangtooth",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "A single bite from this creature's signature fangs can cause death by blood loss within minutes; what's worse, the giant fangtooth is willing to attack creatures far larger than itself.",
      "armorClass": 20,
      "hitPoints": 75,
      "speedFeet": 0,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision",
          "scent-imprecise-120",
          "wavesense-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": -5,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "gjSOMa3GBfSiK4Zr",
          "name": "Bite",
          "bonus": 15,
          "damage": "2d8+5 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "cvbTdPKEcpuu4Kmf",
          "name": "Sunless Sight",
          "kind": "passive",
          "description": "In an area of bright light, the giant fangtooth is Blinded and Slowed 1.",
          "traits": []
        },
        {
          "id": "DIpqKd7UHJ1FKYIB",
          "name": "Constrict",
          "kind": "action",
          "description": "2d8 piercing damage, check (fortitude, dc:21, basic)",
          "traits": []
        },
        {
          "id": "v7zAov3bUwcF8NFP",
          "name": "Deep Puncture",
          "kind": "passive",
          "description": "Creatures critically hit by the fangtooth's bite take an additional 1d8 persistent bleed damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 54,
        "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Blinded",
          "sourceId": "XgEqL1kFApUbl5Z2",
          "name": "Blinded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "cvbTdPKEcpuu4Kmf",
          "name": "Sunless Sight",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 109,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "cvbTdPKEcpuu4Kmf",
          "name": "Sunless Sight",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "g26YiEIfSHCpLocV",
          "sourceId": "g26YiEIfSHCpLocV",
          "name": "Constrict",
          "type": "action"
        },
        "owner": {
          "sourceId": "DIpqKd7UHJ1FKYIB",
          "name": "Constrict",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:mjolgat",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Aos5iPQ6FUaqoSV5",
      "slug": "mjolgat",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:65b01a75a01d8e413128dc4b09bb6994a10623d4f25eb9d741efb5436a67dc31",
    "translatableHash": "sha256:686bee92c3c4fc7c2be0e0b064441b490e465e931ebf8ad3479acaaca6c154fc",
    "data": {
      "schemaVersion": 1,
      "name": "Mjolgat",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "beast"
      ],
      "description": "Over the millennium that they mined the rich mineral deposits of the Shattered Range, the dwarves of Dongun Hold discovered the stalwart mjolgat, a beast that exhibits the uncanny ability to sniff out ore deposits with its incredible sense of smell. To this day, dwarves across Golarion rear mjolgats as companions and draft animals, training them to locate precious metals Hidden deep beneath the surface. Some dauntless dwarves even turn mjolgats into mounts, though those brave enough to do so often require ample ear protection, as the creatures release horrifying shrieks when threatened.\nExhibiting a temperament that rivals even a dwarf's surliness, mjolgats have large, cranial crests of bone as broad and heavy as the head of a giant's warhammer. While the rest of their face resembles a cross between an elephant and a yak—with elongated snouts, rodentlike muzzles, and a two sets of horns—their bodies resemble those of squat boars. A straggly mane of thick brown fur covers their massive necks, which develop and strengthen over their life spans to support the massive columns of bone atop their heads. Adolescent mjolgats often lack such athleticism, walking backward and dragging their heads behind them until they can hold their necks upright. A dwarf down on their luck is often compared to a young mjolgat unable to lift their head off the ground.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -3,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 10,
        "intimidation": 12,
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
          "id": "agBdFolp9qLMu0xn",
          "name": "Bone Crest",
          "bonus": 10,
          "damage": "2d10+7 bludgeoning",
          "traits": []
        },
        {
          "id": "oTKjYQDdw86pUqPH",
          "name": "Hoof",
          "bonus": 12,
          "damage": "2d6+4 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "VQfnnoTH9xAGAEhP",
          "name": "Orescent",
          "kind": "passive",
          "description": "A mjolgat can detect the ores of unrefined precious metals with its powerful nose. Common earth and stone do not impede the mjolgat from smelling ores deep within the ground.",
          "traits": []
        },
        {
          "id": "39iIvNupxbnuXPcd",
          "name": "Head On",
          "kind": "reaction",
          "description": "Trigger A creature the mjolgat can see targets the mjolgat with an attack\nEffect The mjolgat swings its crest in the direction of the danger, gaining a +2 circumstance bonus to AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "W1s77i863STIJgAY",
          "name": "Hammerhead",
          "kind": "action",
          "description": "The mjolgat rears upon its hind leg to crush an enemy with its jagged crest of bone. The mjolgat makes a bone crest Strike; on a hit, the mjolgat deals an extra die of damage. This counts as two attacks when calculating the mjolgat's multiple attack penalty",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "sw6WqmhgyEp1Q7a3",
          "name": "Punch-Drunk",
          "kind": "passive",
          "description": "If the mjolgat critically fails a bone crest Strike, it becomes Stunned 1 and Stupefied 1 for 1 round.",
          "traits": []
        },
        {
          "id": "dG1p2ew8Lk4jKSYy",
          "name": "Rockbreaker",
          "kind": "passive",
          "description": "When the mjolgat deals damage to an object (such as a shield or an ore deposit), it deals double damage.",
          "traits": []
        },
        {
          "id": "wgonJnufyL1Z1kXj",
          "name": "Shrieking Slam",
          "kind": "action",
          "description": "The mjolgat lets out a terrifying screech before bashing its head into the ground. Creatures within 30-foot emanation of the mjolgat must attempt a check (will, dc:21) save. Regardless of the result of the save, they are then immune to Shrieking Slam.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 1.\nFailure The target is Frightened 2.\nCritical Failure The target is Frightened 3 and Fleeing for 1 round.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 67,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "sw6WqmhgyEp1Q7a3",
          "name": "Punch-Drunk",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 133,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "sw6WqmhgyEp1Q7a3",
          "name": "Punch-Drunk",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 396,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wgonJnufyL1Z1kXj",
          "name": "Shrieking Slam",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 511,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wgonJnufyL1Z1kXj",
          "name": "Shrieking Slam",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 635,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wgonJnufyL1Z1kXj",
          "name": "Shrieking Slam",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 707,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wgonJnufyL1Z1kXj",
          "name": "Shrieking Slam",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/publicNotes",
        "sourceIndex": 377,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Aos5iPQ6FUaqoSV5",
          "name": "Mjolgat",
          "type": "npc"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:marp",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "FBB17RW7BoqiBOqL",
      "slug": "marp",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ff904cc4a8e69e3bf65b1a7676a9617b51536416348aa891d759931a471b44ed",
    "translatableHash": "sha256:a06d7b38d06cdb9ab001885469ae6c97a944cad4a4d43a6eea2122a72fd07c74",
    "data": {
      "schemaVersion": 1,
      "name": "Marp",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "beast"
      ],
      "description": "While many creatures hunger after gold, the blue-furred marp literally eats this precious metal as a vital part of their diet. Although a few marp families live near natural gold deposits, most sources of gold are already under some other creature's control. Therefore, marps generally survive by ingratiating themselves to those creatures. Once they have inured themselves with such a group, they will gather all the gold they can get.\nEven hungry marps ask first, a display that varies by region but is rarely more complex than gripping their hands in the air and asking \"gold?\" in a plaintive voice. Marp cultures consider this process of asking first to be virtuous, but they fundamentally think of gold as a food, not a trade good. As such, they will steal gold if refused, considering it justified the same way one might steal bread if starving. That being said, marps generally attempt to earn their keep by assisting in roles like prospectors or counterfeit detectors, for which their acute sense for gold makes them well suited.\nMarps rarely engage in direct combat, preferring to run away if attacked. On the rare occasions they meet other creatures that also eat minerals, they're generally willing to reach an equitable trade agreement.\nThe scent and feel of lead disgust marps. If a marp is given lead, they no longer approach that creature and leave them alone. Even a single lead coin in a bag of gold is enough to protect the bag from theft, making such coins an effective deterrent in regions frequented by marps.",
      "armorClass": 20,
      "hitPoints": 48,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": -2,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 10,
        "deception": 13,
        "thievery": 12
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
          "id": "1zzL3TkHyqT0CtSg",
          "name": "Jaws",
          "bonus": 12,
          "damage": "2d6+6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "IWCIzZCmumm2sZDx",
          "name": "Goldsense",
          "kind": "passive",
          "description": "Marps can sense any accumulation of gold within range. They also can precisely measure the purity of gold by touch.",
          "traits": []
        },
        {
          "id": "15reG9cAlQog2pqZ",
          "name": "Panicked Withdrawal",
          "kind": "reaction",
          "description": "Trigger The marp takes damage from a melee Strike\nEffect The marp drops any items held in their hands, then Climbs or Strides up to 15 feet.",
          "traits": []
        },
        {
          "id": "cJWmuj6LPrdNdwqH",
          "name": "Gold?",
          "kind": "action",
          "description": "The marp asks for gold from all creatures in a 30-foot emanation. Each target must attempt a check (will, dc:22) save or retrieve and drop gold valuables as a free action.\nCritical Success The target can refuse the request, though they can also choose to willingly hand over any amount of gold. If they do so, they gain a +1 status bonus to the next saving throw they attempt within 1 minute, and they're temporarily immune to Scampering Theft for 1 minute.\nSuccess The target can refuse the request.\nFailure The target must drop coins, gold jewelry, or other objects worth 20 gp.\nCritical Failure As failure, but 40 gp.",
          "traits": [
            "auditory",
            "emotion",
            "linguistic",
            "mental"
          ]
        },
        {
          "id": "cLIy3Rb3RWeVSc8s",
          "name": "Scampering Theft",
          "kind": "action",
          "description": "The marp runs and attempts to snatch a purse, pendant, or other such object. The marp Strides up to their Speed, and they can move through enemy spaces during this movement. They then attempt to steal valuables from the target, who must attempt a check (reflex, dc:22) save.\nSuccess The marp fails to steal anything from the target.\nFailure The marp steals one object from the target's possession that is made of or contains gold. They can't steal objects held by or permanently attached to the creature. If the object contains lead, the marp drops it at the target's feet. After stealing the object (or dropping it), the marp then Strides up to their Speed.",
          "traits": [
            "manipulate",
            "move"
          ]
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:ghost-ape",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "G2uIPaWPL3ZeZOUQ",
      "slug": "ghost-ape",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f1615f714cc879e94fb1ed858519bc1317d94f1e782611544cd9b3d866aea996",
    "translatableHash": "sha256:67a0b7a80e765f3560f7b983e32f8c6fee8af7d5f3a07f977683466e26c8f85e",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Ape",
      "level": 4,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast",
        "ethereal"
      ],
      "description": "Ghost apes are reclusive and territorial creatures that usually reveal themselves only when their homes are threatened. Most ghost apes will first attempt to use their imposing presence and natural teleportation to frighten and confuse their foes into fleeing. Ghost apes can speak but aren't particularly talkative, though they will, on rare occasions, treat with those who approach them with respect. Ghost apes can be powerful allies when motivated by a common cause, although they tend to be suspicious of outsiders, and their trust isn't easily earned.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 10,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 14,
        "intimidation": 10,
        "stealth": 12,
        "survival": 12
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
          "id": "msu3foywEs3F8x7G",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d8+5 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "wAIkNPz92VDaA6VH",
          "name": "Fist",
          "bonus": 14,
          "damage": "1d10+5 bludgeoning",
          "traits": [
            "agile",
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "L18NVH9z9Ly0dsnt",
          "name": "Phantom Step",
          "kind": "action",
          "description": "Frequency once per round\nEffect The ghost ape moves quickly, passing through the Ethereal Plane. They teleport up to a distance equal to twice their Speed within their line of sight.",
          "traits": [
            "concentrate",
            "teleportation"
          ]
        },
        {
          "id": "aiFPTTFcVillymnM",
          "name": "Ghost Stance",
          "kind": "action",
          "description": "The ghost ape phases partially out of existence, its form blurring and becoming difficult to pinpoint. While in this stance, they are Concealed to any creature that isn't adjacent to them. They can't use this concealment to Hide or Sneak. They also gain resistance 5 to physical damage. If the ghost ape takes force damage, this stance ends and they can't reenter it for 1d3.",
          "traits": [
            "concentrate",
            "illusion",
            "occult",
            "stance",
            "visual"
          ]
        },
        {
          "id": "Gw0KJig6ShsLpnlP",
          "name": "Terrifying Display",
          "kind": "action",
          "description": "The ghost ape beats their chest in a terrifying display. Creatures within 30-foot emanation must succeed a check (will, dc:20) save or become Frightened 1 (or Frightened 2 on a critical failure). While a creature is frightened by this ability, it's Off-Guard to the ape. On a success, the creature is temporarily immune for 1 minute.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 137,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "aiFPTTFcVillymnM",
          "name": "Ghost Stance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sneak",
          "sourceId": "VMozDqMMuK5kpoX4",
          "name": "Sneak",
          "type": "action"
        },
        "owner": {
          "sourceId": "aiFPTTFcVillymnM",
          "name": "Ghost Stance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 168,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Gw0KJig6ShsLpnlP",
          "name": "Terrifying Display",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 240,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Gw0KJig6ShsLpnlP",
          "name": "Terrifying Display",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 385,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Gw0KJig6ShsLpnlP",
          "name": "Terrifying Display",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:wereshark",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "IaTdqm2wFMKkogEC",
      "slug": "wereshark",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c9daf42ffd9b0d900c2c540c1289b52927b939ecab22c8d830dad392302cb5b0",
    "translatableHash": "sha256:9e60abd19605568c408ff2dea87895aaa3b88b0d352829361006536aea63e21a",
    "data": {
      "schemaVersion": 1,
      "name": "Wereshark",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "human",
        "humanoid",
        "werecreature"
      ],
      "description": "Werecreatures are humanoids who transform into animals and animal-humanoid hybrids under the light of the full moon. The fate of these shapechanging creatures derives from an ancient primal curse that they can, in turn, transmit through their own bites. The stat blocks in this section reflect werecreatures in their hybrid forms.\nThe curse of the wereshark in stills a crude and bloodthirsty attitude, along with an urge to travel the sea. They often become pirates or military sailors who quickly gain a reputation for capricious violence. The shark within makes weresharks born survivors. They will swiftly retreat if they're truly in danger and consider obeying a sense of honor utterly ridiculous.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 0,
      "perception": {
        "modifier": 10,
        "senses": [
          "scent-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": -1,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 12,
        "stealth": 9,
        "survival": 8
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
          "id": "XAdcVckTtsyoJ3kY",
          "name": "Trident",
          "bonus": 14,
          "damage": "1d8+7 piercing",
          "traits": []
        },
        {
          "id": "KwgudbbFTVgHiUqn",
          "name": "Trident",
          "bonus": 13,
          "damage": "1d8+7 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "2EsiHAMS4PDQklhS",
          "name": "Blood Scent",
          "kind": "passive",
          "description": "The wereshark can smell blood in the water from up to 1 mile away.",
          "traits": []
        },
        {
          "id": "JEzv3EMk0JHmeDYv",
          "name": "Shark Empathy",
          "kind": "passive",
          "description": "A wereshark can communicate with sharks.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "okSfSYHIUyG1GZeC",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "IR2MrKsw9GROfUZ6",
          "name": "Change Shape",
          "kind": "action",
          "description": "Medium human with fist +14 for 1d4+7 bludgeoning,\nor Large shark with jaws +14 for 1d12+7 piercing, no land Speed, and swim Speed 40 feet.\nThe wereshark doesn't have the amphibious trait in human or shark form and has the aquatic trait in shark form.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "mq4nQCSaqX6TDnvU",
          "name": "Curse of the Wereshark",
          "kind": "passive",
          "description": "This curse affects only humanoids.\nSaving Throw check (fortitude, dc:18)\nOn each full moon, the cursed creature must succeed at another Fortitude save or turn into the same kind of werecreature until dawn.\nThe creature is under the GM's control and goes on a rampage for half the night before falling unconscious until dawn.",
          "traits": [
            "curse",
            "primal"
          ]
        },
        {
          "id": "sSN3mmNLTMy2tN16",
          "name": "Fish Fork",
          "kind": "action",
          "description": "Requirements The wereshark critically hit with a trident Strike on their most recent action this turn\nEffect The wereshark digs their trident deep within their target, skewering it before taking a massive bite. The target of the Strike becomes Grabbed (Escape DC 18) and takes 1d4 persistent bleed damage, and the wereshark attempts a jaws Strike against it. The wereshark can't use their trident while they have a creature grabbed with it, but they can pull the trident free with a single action that has the manipulate trait.",
          "traits": []
        },
        {
          "id": "Q7MJ64l6TmTh1bIA",
          "name": "Moon Frenzy",
          "kind": "passive",
          "description": "When a full moon appears in the night sky, the werecreature must enter hybrid form, can't Change Shape thereafter, becomes one size larger, increases its reach by 5 feet, and increases the damage of its jaws by 2.\nWhen the moon sets or the sun rises, the werecreature returns to humanoid form and is Fatigued for 2d4.\nEffect: Moon Frenzy",
          "traits": [
            "polymorph",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.FJrsDoaIXksVjld9",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.FJrsDoaIXksVjld9",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "FJrsDoaIXksVjld9",
          "sourceId": "FJrsDoaIXksVjld9",
          "name": "Trident",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "wfrwsBFjEZcMZx2b",
          "name": "Trident",
          "type": "weapon"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.ewQZ0VeL38v3qFnN",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "ewQZ0VeL38v3qFnN",
          "sourceId": "ewQZ0VeL38v3qFnN",
          "name": "Studded Leather Armor",
          "type": "armor"
        },
        "owner": {
          "sourceId": "LcCDKy10hveBnyce",
          "name": "Studded Leather Armor",
          "type": "armor"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.FA0ri2fAcMa1HgZe",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.FA0ri2fAcMa1HgZe",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "FA0ri2fAcMa1HgZe",
          "sourceId": "FA0ri2fAcMa1HgZe",
          "name": "(Werecreature) Moon Frenzy",
          "type": "action"
        },
        "owner": {
          "sourceId": "Q7MJ64l6TmTh1bIA",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 310,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Q7MJ64l6TmTh1bIA",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 404,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Moon Frenzy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Moon Frenzy",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Moon Frenzy",
          "sourceId": "dRe8n1nBWMIXd8jh",
          "name": "Effect: Moon Frenzy",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Q7MJ64l6TmTh1bIA",
          "name": "Moon Frenzy",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "okSfSYHIUyG1GZeC",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "eQM5hQ1W3d1uen97",
          "sourceId": "eQM5hQ1W3d1uen97",
          "name": "Change Shape",
          "type": "action"
        },
        "owner": {
          "sourceId": "IR2MrKsw9GROfUZ6",
          "name": "Change Shape",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.ICnpftxZEilrYjn0",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.ICnpftxZEilrYjn0",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "ICnpftxZEilrYjn0",
          "sourceId": "ICnpftxZEilrYjn0",
          "name": "(Werecreature) Curse of the Werecreature",
          "type": "action"
        },
        "owner": {
          "sourceId": "mq4nQCSaqX6TDnvU",
          "name": "Curse of the Wereshark",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 293,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "sSN3mmNLTMy2tN16",
          "name": "Fish Fork",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:leopard-seal",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "IjI9p8ZpS7LVBKJC",
      "slug": "leopard-seal",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:673da1f7a6b0cb418eee010f1d464e2e1e9b03ea4e056cdffb6e59ebbce06559",
    "translatableHash": "sha256:4c266e0bfcce68ec5b438920c8c37e081e17c497cce295049231fb61ba498e2c",
    "data": {
      "schemaVersion": 1,
      "name": "Leopard Seal",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Leopard seals are a large species of seals, often growing up to ten feet long. They're the only species of seal known to pursue humanoids.",
      "armorClass": 20,
      "hitPoints": 65,
      "speedFeet": 15,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "scent-imprecise-40"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 14,
        "will": 8
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 14,
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
          "id": "BFsGfJIdcwBabXyD",
          "name": "Jaws",
          "bonus": 12,
          "damage": "2d8+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Ga73WB6ibsk0xm2d",
          "name": "Tail",
          "bonus": 12,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "fT5rpQPJhWcOTfol",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A leopard seal can hold its breath for 30 minutes.",
          "traits": []
        },
        {
          "id": "hCkw6rTwyaip2lSZ",
          "name": "Protective Blubber",
          "kind": "passive",
          "description": "A leopard seal treats environmental cold effects as if they were one step less extreme (incredible cold becomes extreme, extreme cold becomes severe, and so on).",
          "traits": []
        },
        {
          "id": "ufSDMesmDIjVUUrz",
          "name": "Whisker Sense",
          "kind": "passive",
          "description": "A leopard seal can use its whiskers to sense vibrations as a precise sense at the listed range, but only underwater.",
          "traits": []
        },
        {
          "id": "xPoexGjFq60iWbpM",
          "name": "Aquatic Ambush",
          "kind": "action",
          "description": "50 feet.",
          "traits": []
        },
        {
          "id": "MGMjpWoNmqWhhm8B",
          "name": "Predatory Slam",
          "kind": "action",
          "description": "Requirements The leopard seal is in water\nEffect The leopard seal travels up to 40 feet, ending its movement on land. Enemies adjacent to the leopard seal when it ends its movement take 2d10 bludgeoning damage (check (reflex, dc:21, basic) save) and are knocked Prone on a failure.",
          "traits": []
        },
        {
          "id": "jFK3aelUCPwPl7Ob",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.HBrBrUzjfvj2gDXB",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.HBrBrUzjfvj2gDXB",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "HBrBrUzjfvj2gDXB",
          "sourceId": "HBrBrUzjfvj2gDXB",
          "name": "Aquatic Ambush",
          "type": "action"
        },
        "owner": {
          "sourceId": "xPoexGjFq60iWbpM",
          "name": "Aquatic Ambush",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/system/rules/1/uuid",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "xPoexGjFq60iWbpM",
          "name": "Aquatic Ambush",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 321,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "MGMjpWoNmqWhhm8B",
          "name": "Predatory Slam",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "jFK3aelUCPwPl7Ob",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:hexworm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "IX2UM77aXajrTJ6x",
      "slug": "hexworm",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1f0770be506f9d9086160ff34b331c3388ebac437284d0ebbd8b34f253255b3d",
    "translatableHash": "sha256:d6ff948fcf5d0c77aedd3920a4a57992fcf6e6567e00f3a1031f732ab6f0e88c",
    "data": {
      "schemaVersion": 1,
      "name": "Hexworm",
      "level": 4,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal"
      ],
      "description": "These gray larvae inch across the ground with an instinct to feed on magic.",
      "armorClass": 20,
      "hitPoints": 45,
      "speedFeet": 20,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 6
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "arcana": 12,
        "stealth": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "spells 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "joWKAJKglqyCUbHQ",
          "name": "Mandibles",
          "bonus": 8,
          "damage": "2d6+2 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "KaYzaXzAaFRTho3N",
          "name": "Arcanosense",
          "kind": "passive",
          "description": "A hexworm can sense sources of magic at the listed range as though it has a 4th-rank Detect Magic constant innate spell.",
          "traits": []
        },
        {
          "id": "M8Fhux8L2hJKr1wO",
          "name": "Arcanovore",
          "kind": "passive",
          "description": "A hexworm has resistance 5 against all damage caused by spells.",
          "traits": []
        },
        {
          "id": "ssTJ7ittKqxoxFGP",
          "name": "Arcane Consumption",
          "kind": "action",
          "description": "The hexworm attempts to consume the magic of an adjacent magical effect or unattended magic item. It attempts a counteract check against the target with a +11 modifier. On a success, the magical effect ends. A magic item instead becomes a mundane item for 1 round. The hexworm gains 2d8 healing Hit Points.",
          "traits": []
        },
        {
          "id": "ncx7CJVlifhStQgC",
          "name": "Arcanotaxis",
          "kind": "passive",
          "description": "Requirements The hexworm has detected a source of magic with its arcanosense\nTrigger The hexworm's turn begins\nEffect The hexworm Strides up to its Speed toward the nearest source of magic it can detect.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 88,
        "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Detect Magic",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KaYzaXzAaFRTho3N",
          "name": "Arcanosense",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:almiraj",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ljcMqo6PKDxsmoth",
      "slug": "almiraj",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1b1f4fc628a64236d825c854f7b8f6fb2237d9010dd08e79a2d5968e18eea285",
    "translatableHash": "sha256:abe4d6fb6b1c478c7c57f54d538773d9158899d9799ef50e2ab9c262c716a46f",
    "data": {
      "schemaVersion": 1,
      "name": "Almiraj",
      "level": 4,
      "rarity": "uncommon",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "An almiraj closely resembles a yellow hare in almost all ways... except for the 2-foot-long black horn jutting from its forehead. Though it shares this trait with the docile unicorn, that's where their similarities end. Almirajes are vicious creatures, known to slaughter much larger cattle and, in times of desperation, people. Its stare is said to send even the bravest warrior running for their life.\nUnlike common hares, almirajes are solitary and intensely territorial. They're adaptable ambush hunters with the stamina and speed to chase down any prey. They attack with their jaws and claws but are primarily known for trying to gut their prey with a vicious stab from their horn. Many scholars believe that the terrifying magical aura the creatures exude originates from their horns. This line of thinking has led to an increase in almiraj attacks as local citizens try to capture the creature alive and remove the horn, hoping this will turn it into a more docile hare. These hopes have not proven fruitful, as an almiraj is just as aggressive, if not more so, after their horn has been removed.\nAdventurers often think themselves lucky if they manage to avoid the terrifying horn of this ferocious predator, but it's a much better alternative than being caught in its jaws. Almirajes have a nasty habit of grabbing their prey and vigorously shaking them until they go limp. If this fails, they'll drag their prey underground until they suffocate deep in the earth. Few have ever escaped the burrow of an almiraj.",
      "armorClass": 20,
      "hitPoints": 63,
      "speedFeet": 35,
      "perception": {
        "modifier": 14,
        "senses": [
          "tremorsense-imprecise-40"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "athletics": 13,
        "stealth": 10,
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
          "id": "afumtt0ijatl4oq0",
          "name": "Horn",
          "bonus": 13,
          "damage": "2d8+7 slashing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Ro9cq3rIVkTlfmKi",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d6+7 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "qxwQehJLMJxZLr0j",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d4+7 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Yllc8kTuEZymMZNX",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "5 feet. check (will, dc:22, options:area-effect,inflicts:frightened,inflicts:fleeing)\n Creatures that critically fail are also Fleeing for 1 round.",
          "traits": [
            "aura",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "glOxKwPlPrPkwFQq",
          "name": "Reactive Strike (Horn only)",
          "kind": "reaction",
          "description": "Fleeing creatures take an additional 1d6 persistent bleed damage. On a critical hit, the target is knocked Prone.",
          "traits": []
        },
        {
          "id": "wxslfNkCD8uhnRZR",
          "name": "Final Shake",
          "kind": "action",
          "description": "Requirements The almiraj has a creature Grabbed\nEffect The almiraj clamps its jaws down on the creature and shakes it vigorously, attempting to finish it off. The creature takes 2d6 bludgeoning damage and must succeed at a check (fortitude, dc:20, options:inflicts:enfeebled) save or become Enfeebled 1. Small or smaller creatures take a –2 circumstance penalty to their save.",
          "traits": []
        },
        {
          "id": "pjdVf0QiDu8QNlCa",
          "name": "Goring Charge",
          "kind": "action",
          "description": "The almiraj lowers its head and moves with ferocity toward its selected prey. The almiraj Strides twice. If it ends its movement within melee reach of at least one enemy, it makes a horn Strike against that enemy. This Strike deals an additional 1d6 persistent bleed damage.",
          "traits": []
        },
        {
          "id": "erq7htTm9cchOw4q",
          "name": "Into the Earth",
          "kind": "action",
          "description": "Requirements The almiraj has a Medium or smaller creature Grabbed\nEffect The almiraj attempts to flee with its meal, burrowing into the ground. The grabbed creature must succeed at a check (reflex, dc:20) save or be dragged beneath the ground as the almiraj Burrows up to its Speed. If the target succeeds at its save, it Escapes and the almiraj continues burrowing as normal; if it fails, the grabbed creature must hold its breath or begin suffocating under the dirt.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.etMnv73EIdEZrYYu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.etMnv73EIdEZrYYu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "etMnv73EIdEZrYYu",
          "sourceId": "etMnv73EIdEZrYYu",
          "name": "Frightful Presence",
          "type": "action"
        },
        "owner": {
          "sourceId": "Yllc8kTuEZymMZNX",
          "name": "Frightful Presence",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 198,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Yllc8kTuEZymMZNX",
          "name": "Frightful Presence",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "glOxKwPlPrPkwFQq",
          "name": "Reactive Strike (Horn only)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 64,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "glOxKwPlPrPkwFQq",
          "name": "Reactive Strike (Horn only)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 214,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "glOxKwPlPrPkwFQq",
          "name": "Reactive Strike (Horn only)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 60,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wxslfNkCD8uhnRZR",
          "name": "Final Shake",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 393,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "wxslfNkCD8uhnRZR",
          "name": "Final Shake",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 78,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "erq7htTm9cchOw4q",
          "name": "Into the Earth",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:morthak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "OEY3bg3YOjRPkyzI",
      "slug": "morthak",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:391f6b8e8e487443dd89f26b3ab648b59707bdf4bdc8a1b99fd8942bb11e1048",
    "translatableHash": "sha256:6ce45335844b9307a08c27ae36cebfc368301be6eb3e5330f5251bcf3c9aff5a",
    "data": {
      "schemaVersion": 1,
      "name": "Morthak",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast"
      ],
      "description": "Dischorans are a group of predators who hunt via focused sound. Though they possess protuberances that resemble eyes, these are actually auditory sensory organs that can pick up even the slightest sound and are used to locate prey with pinpoint accuracy.\nOnly a few types of dischorans have been identified, but they all share unifying features: front-facing pseudo-eyes, deceptive speed, and ravenous hunger. Their sensitivity to noise combined with their ability to weaponize sound are likely the primary reasons dischorans spend most of their time alone.\nMorthaks, being low, squat, and flat, resemble a crocodile rebuilt to dig like a mole. At home beneath vast meadows and plains, the only sign of their passing are the earthen mounds they leave behind when they emerge to hunt. Those who encounter them in the wild speak of the sub-aural rumble they produce as they disintegrate the earth with sonic blasts, a sound that's felt rather than heard.",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 20,
      "perception": {
        "modifier": 12,
        "senses": [
          "echolocation-90"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -3,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 13,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "sonic 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "tDGKTpOy2k3oFeYP",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d8+5 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "8gsyVHTjrtfO1fZq",
          "name": "Claw",
          "bonus": 13,
          "damage": "1d6+5 slashing; 1d6 sonic",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "9iArB4WWeDfV7YYr",
          "name": "Screech",
          "bonus": 10,
          "damage": "4d6 sonic",
          "traits": [
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "iJajFZP5ZYRFW9er",
          "name": "Sensitive Echolocation",
          "kind": "passive",
          "description": "The morthak can use its hearing as a precise sense with the listed range. If the morthak takes sonic damage beyond its resistance, its senses are overloaded and all creatures are Concealed from it for 1 round.",
          "traits": []
        },
        {
          "id": "VTKZhdASWtnV2Rf6",
          "name": "Auditory Swipe",
          "kind": "reaction",
          "description": "Trigger A creature within the morthak's reach uses an auditory action\nEffect The morthak makes a claw Strike against the triggering creature.",
          "traits": []
        },
        {
          "id": "HPmIXM7jcjdzcyhT",
          "name": "Shattering Scrape",
          "kind": "action",
          "description": "The morthak makes a claw Strike against a creature wearing stone or metal armor. If the Strike hits and the armor's Hardness is 12 or lower, that armor is broken.",
          "traits": [
            "sonic"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 182,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "iJajFZP5ZYRFW9er",
          "name": "Sensitive Echolocation",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:holdfast",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "VhS8LupBXLEcuztc",
      "slug": "holdfast",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b5e3bfb9c297ccae1d7a3ecb5aa6863e4e3dabe829b8ef131a0b81f7dcbd8bd1",
    "translatableHash": "sha256:41570c6dff0ca0ecc2013306aac23166b1ddbfdd30514340b7562b7fc42c33d1",
    "data": {
      "schemaVersion": 1,
      "name": "Holdfast",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "A sleek body, large talons, and keen senses make the holdfast an expert hunter, far deadlier than its small size might indicate. It typically approaches prey from below, then pounces in a flurry of teeth and talons, trying to crush the target's windpipe with its powerful jaws. This ambush strategy is further aided by its dappled gray fur, camouflaging it against the rocky terrain of its native habitat. Today, holdfasts have spread far, often because of orc holds adopting them as hunting companions. This has led to tension with other peoples, who often find holdfasts too difficult to work with and consider them an invasive species—even gnomes and druids who can speak with holdfasts find them distractable and murderously energetic.\nAlthough holdfasts watch over their litters very carefully, adults avoid each other outside of their short mating season. Despite this antipathy for others of their kind, holdfasts often trail other species of predators, acting as opportunistic scavengers. This typically ends with the holdfast bullying the other creature and stealing the greater share of any kill, but it can develop into a mutualistic arrangement. Many holdfasts have been observed hunting alongside eagles and other birds of prey, driving underground creatures to the surface for the birds to pick off.\nHoldfasts are difficult to contain, sliding through tiny openings and digging under fences, meaning proper enclosures must be made of stone or metal on all sides. Some orc communities instead lay out humane traps when their hunting parties are needed, using favorite treats as bait. In the orc-run nation of Belkzen, overlord Ardax the White-Hair's chief animal handler claims to have a unique and confidential training process that curbs the holdfasts' impulse to escape, but other handlers have yet to uncover or replicate it. In the Gravelands, the major orc communities face the unwelcome intrusion of undead headed by the Whispering Tyrant. While they maintain the original bond with holdfasts as hunting partners, the goal has changed from providing subsistence to eradicating undead.",
      "armorClass": 20,
      "hitPoints": 55,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 11,
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
          "id": "1cGZ5GtFlGgysv38",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d6+5 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "J59jifKgyJ3oVgsR",
          "name": "Talon",
          "bonus": 13,
          "damage": "2d4+5 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "aIHaQWOLI7iPiMZ7",
          "name": "Hold Tight",
          "kind": "reaction",
          "description": "Trigger A creature Grabbed by the holdfast's jaws takes damage from another creature's Strike\nEffect The holdfast Constricts the creature in its jaws.",
          "traits": []
        },
        {
          "id": "0moQPQHdnH8BplCL",
          "name": "Lithe",
          "kind": "passive",
          "description": "A holdfast treats any tight space it can barely fit its head in or wider as difficult terrain and doesn't need to Squeeze to move through it.",
          "traits": []
        },
        {
          "id": "g8miItlAeNmfA8N3",
          "name": "Burst from Below",
          "kind": "action",
          "description": "The holdfast Burrows and then Strikes. If the holdfast began this movement Hidden, it remains hidden until after this ability's Strike.",
          "traits": []
        },
        {
          "id": "BNANYNiAx6QMjezR",
          "name": "Constrict",
          "kind": "action",
          "description": "2d6+2 piercing damage plus crush throat, check (fortitude, dc:21, basic)",
          "traits": []
        },
        {
          "id": "IigZieTHo8vIeSAM",
          "name": "Crush Throat",
          "kind": "passive",
          "description": "When a creature fails a save against the holdfast's Constrict, the creature's throat is held tight, stopping them from speaking as long as they're Grabbed. This prevents the creature from casting spells with vocal incantations, as well as from using many sonic or auditory abilities.",
          "traits": []
        },
        {
          "id": "sudbnFBYltsWbBiS",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 39,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "aIHaQWOLI7iPiMZ7",
          "name": "Hold Tight",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 117,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Squeeze",
          "sourceId": "kMcV8e5EZUxa6evt",
          "name": "Squeeze",
          "type": "action"
        },
        "owner": {
          "sourceId": "0moQPQHdnH8BplCL",
          "name": "Lithe",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 78,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "g8miItlAeNmfA8N3",
          "name": "Burst from Below",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "g26YiEIfSHCpLocV",
          "sourceId": "g26YiEIfSHCpLocV",
          "name": "Constrict",
          "type": "action"
        },
        "owner": {
          "sourceId": "BNANYNiAx6QMjezR",
          "name": "Constrict",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 150,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "IigZieTHo8vIeSAM",
          "name": "Crush Throat",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "sudbnFBYltsWbBiS",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:goblin-shark",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "9Qx9RrwHo68au5eG",
      "slug": "goblin-shark",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:40470aeb4a815509c2f35c954f3cbd1c4ae1634ebad87b1a1b6261f032b6c1cb",
    "translatableHash": "sha256:c0d97d8894912e51decaf6426fa89de6eebfc4eca454cc7349117cacb1b8f06e",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Shark",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Numerous species of sharks make their homes in the ocean's depths, rarely encountered by land-dwellers.\nGoblin sharks are deep-sea hunters, dwelling near the ocean floor. They make up for their slow swimming speed with stealthy ambushes, allowing prey to get within reach before lashing out with their extending jaws.",
      "armorClass": 21,
      "hitPoints": 85,
      "speedFeet": 0,
      "perception": {
        "modifier": 15,
        "senses": [
          "scent-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 5,
        "int": -4,
        "wis": 3,
        "cha": -3
      },
      "skills": {
        "athletics": 13,
        "stealth": 15,
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
          "id": "fKDKMJtOFcpWNega",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d8+6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "sfQRtdBAWJHTnJV2",
          "name": "Blood Scent",
          "kind": "passive",
          "description": "The shark can smell blood in the water from up to 1 mile away.",
          "traits": []
        },
        {
          "id": "tCu2c5DeVynom0WZ",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The goblin shark's coloration blends in with the water. It doesn't need cover to attempt to Hide with a Stealth check while underwater.",
          "traits": []
        },
        {
          "id": "WpZf88V0PHKRdP5i",
          "name": "Electrolocation",
          "kind": "passive",
          "description": "A goblin shark can sense minute electrical charges in living creatures, which it can use as a precise sense at a range of 20 feet.",
          "traits": []
        },
        {
          "id": "Rze7860Wtweyc3aD",
          "name": "Grasping Jaws",
          "kind": "passive",
          "description": "Creatures that successfully Escape from the goblin shark's jaws take 1d6 persistent bleed damage as the shark's hold tears flesh away.",
          "traits": []
        },
        {
          "id": "lGnm3CvnrbbSSSPA",
          "name": "Lunging Bite",
          "kind": "action",
          "description": "The goblin shark dashes forward and extends its jaws bite a creature. It swims up to 10 feet in a straight line and makes a jaws Strike with a reach of 10 feet.",
          "traits": []
        },
        {
          "id": "sYC5VTkZvwfZXQXl",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 31,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "Rze7860Wtweyc3aD",
          "name": "Grasping Jaws",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "sYC5VTkZvwfZXQXl",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:taldan-cave-squirrel",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "hqJN853rWhcwJi6q",
      "slug": "taldan-cave-squirrel",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b5c75f1c9a6630f7404544449277c7a3a483db789c8202197a4115a254aab3af",
    "translatableHash": "sha256:f99105bc2c64dd6cc38b51cf195631977e160a2582e94fbb673d78985ce5f2e9",
    "data": {
      "schemaVersion": 1,
      "name": "Taldan Cave Squirrel",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Taldan cave squirrels, also known as tauhotis, are a curious cousin of the much smaller common ground squirrel, found anywhere with large, grassy flatlands. The creatures burrow underground, forming cave systems tall enough for giants in astonishingly little time. Once the caves are excavated, the squirrels turn their attention toward the largest quantities of gems or metals they can find—including those in the ground floors and vaults of nearby buildings. Nothing is off-limits, and no effort is too large when these squirrels go gem hunting.\nCave squirrels' desire for these precious stones and ores arises not from greed, but rather productivity. After returning to the cave system, cheek pouches full of treasure, the males deposit the stolen goods before the females, who lick and spit on the piles of gems and metals to form them into structural pillars. Given the cave squirrels' tireless work habits, these pillars can solidify in a matter of hours, easily displacing existing stone and soil. Many an Opparan groundskeeper has stepped outside after a lovely teatime to find months of work undone in a scene of utter, glittering chaos. Architects throughout history have attempted to recreate or imitate these gleaming pillars; however, they rarely succeeded, for they often lacked a certain unpredictable pragmatism the cave squirrels seem to effortlessly achieve.\nWhen threatened, cave squirrels will let out a high-pitched scream to warn their colony. They can spit out any food or building materials in their cheek pouches with deadly speeds at attackers.",
      "armorClass": 21,
      "hitPoints": 95,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60",
          "tremorsense-imprecise-40"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 15,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 5,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 12,
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
          "id": "j3dF4UMBOMsLxi5Q",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d6+4 piercing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "L0YWf8ADBKNrWU4a",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d8+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "YYb9FpbMgO7SBcBN",
          "name": "Gem Spit",
          "bonus": 15,
          "damage": "2d8+6 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "eb5bNipVYPMkjbDH",
          "name": "Studded Cheeks",
          "kind": "passive",
          "description": "The cave squirrel can store up to six gems in its cheeks. It typically begins combat with all six, and it loses a gem each time it uses gem spit.",
          "traits": []
        },
        {
          "id": "owT2QG52E3VwrS7Z",
          "name": "Defensive Scream",
          "kind": "reaction",
          "description": "Trigger The cave squirrel rolls initiative or has taken damage before initiative\nEffect The cave squirrel lets out an ear-piercing shriek, alerting any other cave squirrels in the area to its plight. It uses Screaming Force.",
          "traits": [
            "auditory"
          ]
        },
        {
          "id": "sPTW134116xLKB5N",
          "name": "Concussive Gem",
          "kind": "passive",
          "description": "On a critical hit on a gem spit Strike, the target must succeed at a check (fortitude, dc:22) save or become Stunned 1.",
          "traits": []
        },
        {
          "id": "Uw5Cs8JXh6arirCk",
          "name": "Forage for Gems",
          "kind": "action",
          "description": "The cave squirrel dives underground in search of gems. The cave squirrel Burrows up to its Speed. It must end its movement back on the surface. During its burrow, it happens upon 1d4 cheap gems (such as salt or quartz), which it stuffs in its cheeks, up to its maximum of 6.",
          "traits": []
        },
        {
          "id": "ZkT9jtUw3IqD4gOk",
          "name": "Natural Speed",
          "kind": "passive",
          "description": "A cave squirrel isn't affected by difficult terrain from earth or stone.",
          "traits": []
        },
        {
          "id": "S3o54Lnee9IO7n9L",
          "name": "Screaming Force",
          "kind": "action",
          "description": "The cave squirrel lets out a terrible scream. Non–cave squirrel creatures within 30-foot emanation must succeed at a check (fortitude, dc:22, options:area-effect,damaging-effect,inflicts:deafened) save or take 2d10 sonic damage. On a critical failure, a creature is Deafened for 1 minute. The cave squirrel can't use Screaming Force again for 1d4.",
          "traits": [
            "auditory",
            "sonic"
          ]
        },
        {
          "id": "ZU7Vt4UaCrzEFYgt",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 111,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "sPTW134116xLKB5N",
          "name": "Concussive Gem",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 321,
        "uuid": "Compendium.pf2e.conditionitems.Item.Deafened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Deafened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Deafened",
          "sourceId": "9PR9y0bi4JPKnHPR",
          "name": "Deafened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "S3o54Lnee9IO7n9L",
          "name": "Screaming Force",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "ZU7Vt4UaCrzEFYgt",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:storm-snake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Im1rZmVvTuMtKjTD",
      "slug": "storm-snake",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dc25db38fe0b52c5e9fa90824d7f84df45db60549e1801532df268d710069607",
    "translatableHash": "sha256:fed04693424bb2e22a7b7f6de350f109757c44bad8a7680346302c93b9171350",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Snake",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast",
        "dragon",
        "electricity"
      ],
      "description": "Storm snakes are reclusive creatures only seen in the wild during intense storms. The metallic scales that cover their bodies attract and absorb nearby lightning strikes, suffusing the creatures with a halo of blue or white light. Because storm snakes are most often sighted in solitude and disappear without a trace as soon as a storm recedes, a lot of folklore across Golarion considers them to be the emissaries of storm deities and harbingers of disaster.\nBefore live clutches of storm snake young were first discovered, it was hypothesized that the creatures were made of mist and vapor; many assumed them to be illusory shapes within the clouds themselves or fleeting dragon sightings. New zoological research has found, however, that storm snakes are actually a distant cousin of dragons. Raised on mountaintops in small broods, storm snakes have underdeveloped limbs and lack any form of wing. Instead, they expand and contract their metallic scales to capture the static electricity in wind currents, which keeps them aloft during high winds and storms.\nResearch has also shed light on the diet of these naturally shy creatures. Rather than consuming electricity, as many who'd observed them in storms believed, storm snakes are herbivorous, enjoying most varieties of grasses, plants, or tree leaves. This diet, considered alongside their flight patterns during thunderstorms, has been theorized to be a form of symbiosis; after all, any lightning strikes absorbed by a storm snake during a storm can't damage the plant growth below. Additionally, safely discharged electricity from a storm snake has been observed to stimulate growth in a wide variety of flora, all while having no adverse affects on the plants' palatability or nutritional benefits. Many farmers have tried in vain to capture, tame, or otherwise attract storm snakes to their fields to invigorate their crops during tough times, though few have succeeded.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": -1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "electricity 8"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2SSFWMDpkSizwAJF",
          "name": "Tail",
          "bonus": 12,
          "damage": "2d4+5 slashing; 1d4 electricity",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "BzxOo51mqHtteXxe",
          "name": "Static Shock",
          "kind": "reaction",
          "description": "Trigger A creature touches the storm snake or damages it with an unarmed melee attack or non-reach melee weapon\nEffect The triggering enemy is shocked for 2d8 electricity damage (check (fortitude, dc:19, basic) save). On a failed save, the target is Stunned 1.",
          "traits": []
        },
        {
          "id": "I7QrAlBGtdUJLHWm",
          "name": "Lightning Strike",
          "kind": "action",
          "description": "The storm snake redirects the lightning it has absorbed from storms, dealing 2d10 electricity damage to a single target within 20 feet (check (reflex, dc:19, basic) save). On a failure, the target is Dazzled until the end of its next turn.",
          "traits": []
        },
        {
          "id": "onLE1fcaDs0SR79p",
          "name": "Static Field",
          "kind": "action",
          "description": "The storm snake gathers all static electricity in the area before releasing it in a 30-foot emanation that deals 3d12 electricity damage to all non-plant creatures (check (reflex, dc:19, options:area-effect,damaging-effect) save) and grants plant creatures 5 temporary Hit Points that last for 1 minute. Plant life in the area begins to grow significantly faster than the average for plants of their genus; in forests, fields, or otherwise floral locations, this immediately transforms the area into non-magical difficult terrain. The storm snake can't use Static field again for 1d4.\nEffect: Static Field",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "BzxOo51mqHtteXxe",
          "name": "Static Shock",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 211,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "I7QrAlBGtdUJLHWm",
          "name": "Lightning Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 682,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Static Field",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Static Field",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Static Field",
          "sourceId": "MGlENdqYCAwBkyXt",
          "name": "Effect: Static Field",
          "type": "effect"
        },
        "owner": {
          "sourceId": "onLE1fcaDs0SR79p",
          "name": "Static Field",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:hooplamander",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ngtgQfPlr4zg45w9",
      "slug": "hooplamander",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9dbc42a0dd4c4868a9f5f73f42c073ce3724cb2add4a1f0df9f596fd99840007",
    "translatableHash": "sha256:7ebd754a90e5f31e59a1c5e216ba7193f7ed2d3c6455ae26399fc7ef346bc776",
    "data": {
      "schemaVersion": 1,
      "name": "Hooplamander",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Many a traveler has heard a loud rumble from behind and turned to see a strange wheel bearing down upon them. Even if they can dodge it, they still might not be safe, for once the wheel stops, it unfurls into a hooplamander. Though whispered of in the remote expanses of Arcadia and feared along the grassy plains of the Mwangi Expanse, many in urban areas believe the seemingly ridiculous hooplamanders to be nothing more than tall tales. As the flattened remains of many caravans can attest, however, these apex predators are very real.\nHooplamanders resemble large salamanders. They're born with retractable rear legs and an incredibly strong, flexible spine. Their sharp foreclaws feature sharp hooks that can rend flesh or stabilize it when it enters its wheel-shaped form. As they develop, hooplamanders learn how to leap and roll, hooking their tails beneath their mouths and stabilizing them with their foreclaws to form a crude wheel that they use their tail muscles to propel forward. Their backs are ridged with a tread-like pattern that gives significant traction and maneuvering power. Hooplamanders are particularly deadly when they use their hooked claws to inflict bleeding wounds before entering their \"wheels up\" form to dash around the battlefield, trampling foes and waiting for their prey to bleed out.\nHooplamanders can be found wherever the ground is flat and open. Their coloring matches where they hunt, with those in grassy plains sporting brown-green skin and those in snowy regions bearing a white hide. Some naturalists believe the creatures started out as salamanders that hatched within the acidic trail of the fabled ouroboros. Others believe that nature, in its infinite variety, doesn't need magic to create such creatures—only an environment flat enough to reward their cunning adaptation.",
      "armorClass": 21,
      "hitPoints": 78,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 9
      },
      "abilities": {
        "str": 5,
        "dex": 5,
        "con": 3,
        "int": -2,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 12,
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
          "id": "akGwtcXcpgIEY1wa",
          "name": "Hookclaw",
          "bonus": 13,
          "damage": "3d6 bleed; 1d4+5 slashing",
          "traits": [
            "agile",
            "versatile-p"
          ]
        },
        {
          "id": "PZoGKJqPZC4JT6Xk",
          "name": "Ridged Tail",
          "bonus": 13,
          "damage": "2d6+5 bludgeoning",
          "traits": [
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "2xeHumxQDHtpQASQ",
          "name": "Flexible Dodge",
          "kind": "reaction",
          "description": "Requirements The hooplamander is Unfurled\nTrigger The hooplamander is targeted by a Strike\nEffect The hooplamander gains a +2 circumstance bonus to AC against the triggering attack and enters its Wheels Up stance.",
          "traits": []
        },
        {
          "id": "cPjpKge1uZtIOSBa",
          "name": "Rollout Trample",
          "kind": "action",
          "description": "Requirements The hooplamander is Wheels Up\nEffect As Trample (Large or smaller, ridged tail, check (reflex, dc:22, basic)), except targets that critically fail their Reflex save are Stunned 1, and the hooplamander Unfurls at the end of its movement.",
          "traits": []
        },
        {
          "id": "CIeOlhvjmGLP4p9v",
          "name": "Unfurl",
          "kind": "action",
          "description": "Requirements The hooplamander is Wheels Up\nEffect The hooplamander releases its tail, Leaping up to 20 feet as it exits its wheeled shape and unfurls to land on its four legs.",
          "traits": []
        },
        {
          "id": "4ptp9pNHXJTjFHlT",
          "name": "Wheels Up",
          "kind": "action",
          "description": "Requirements The hooplamander is Unfurled\nEffect The hooplamander Leaps and then rolls into its wheeled form. Any creature within 5 feet must succeed at a check (reflex, dc:22) save or be Off-Guard for one round. While it's Wheels Up, the hooplamander can't make Strikes and its Speed increases to 40 feet.",
          "traits": [
            "stance"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 104,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Trample",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Trample",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Trample",
          "sourceId": "UNah0bxXxkcZjxO3",
          "name": "Trample",
          "type": "action"
        },
        "owner": {
          "sourceId": "cPjpKge1uZtIOSBa",
          "name": "Rollout Trample",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 289,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "cPjpKge1uZtIOSBa",
          "name": "Rollout Trample",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 137,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaping",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "CIeOlhvjmGLP4p9v",
          "name": "Unfurl",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 117,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaps",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "4ptp9pNHXJTjFHlT",
          "name": "Wheels Up",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 284,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4ptp9pNHXJTjFHlT",
          "name": "Wheels Up",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:sporeback-frog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "sHUhlm4zC6iK3GNn",
      "slug": "sporeback-frog",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:29a524a7870dda6fcd73dd567619d0ad039fd483c0990f152a8c94d2234a55ea",
    "translatableHash": "sha256:b64f9a2b884ddc3448cf5f47bef980d206747cb31cff5c4c278e0d5ba66c355e",
    "data": {
      "schemaVersion": 1,
      "name": "Sporeback Frog",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "This burrowing frog digs itself into moist earth so poisonous moss and toxic mushrooms can grow on its body.",
      "armorClass": 21,
      "hitPoints": 94,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 5,
        "int": -4,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 12,
        "stealth": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 8"
        ],
        "weaknesses": [
          "fire 4"
        ]
      },
      "attacks": [
        {
          "id": "RFHZXOSjLvrWSGkP",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d8+6 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "YVldUS2t42KMRCg8",
          "name": "Tongue",
          "bonus": 15,
          "damage": "",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "uzcy9ZSDv3LL6h9o",
          "name": "Seed Spores",
          "kind": "passive",
          "description": "A creature hit by the sporeback frog's tongue Strike takes 1d6 persistent poison damage as fungal spores begin to grow.",
          "traits": []
        },
        {
          "id": "qIeDtpx57l5sc4q4",
          "name": "Soporific Spores",
          "kind": "action",
          "description": "The sporeback frog shakes the plants and fungi on its back until they emit a cloud of spores in a 20-foot emanation. All creatures in the area must succeed a check (fortitude, dc:22) save or become Clumsy 2 and Stupefied 2 for 1 minute (Clumsy 3 and Stupefied 3 on a critical failure). This ability can't be used again for 1d4.",
          "traits": [
            "mental",
            "poison"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 215,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qIeDtpx57l5sc4q4",
          "name": "Soporific Spores",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 279,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qIeDtpx57l5sc4q4",
          "name": "Soporific Spores",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 359,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qIeDtpx57l5sc4q4",
          "name": "Soporific Spores",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 423,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qIeDtpx57l5sc4q4",
          "name": "Soporific Spores",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:scroungefeather",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "WZFZqUX1zDkSnuJP",
      "slug": "scroungefeather",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:94eb085291ab139fdeed164cf973a32529d2e1f35e7b991e94a0397e1a332472",
    "translatableHash": "sha256:7166dd72656f96dc0aa251096d8be58e13d6d368a812cd20fd1d526cf68130eb",
    "data": {
      "schemaVersion": 1,
      "name": "Scroungefeather",
      "level": 5,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "The large scavenger birds known as scroungefeathers make their homes near the sites of large battles. These birds feast on blood and carrion and have quickly learned that battlefields provide both in abundance. In spite of this grisly diet, they're best known for another strange adaptation: they build their nests from pieces of armor, weapons, and magic items scavenged on the battlefields. This leaves young scroungefeathers remarkably well protected, allowing both parents to leave the nest to search for food.\nAlarmingly, scroungefeathers have learned how to use the items they scavenge for their nests to fend off attackers, flinging arrowheads, thrashing about with knives, and even activating the occasional wand. A scroungefeather nest makes a tempting target for adventurers and thieves, as the treasures tucked within can be quite valuable, but the birds defend their nests fiercely, particularly when there are eggs or chicks inside.\nWhile the feathers of scroungefeathers don't have any magical properties, they're popular among thieves. Insignia for thieves' guilds often include the image of a black feather with two crimson stripes, and such organizations often send new recruits to raid a scroungefeather nest as part of their training.",
      "armorClass": 21,
      "hitPoints": 76,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 16,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "stealth": 12,
        "thievery": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "453RC49DsKSbOEEB",
          "name": "Beak",
          "bonus": 12,
          "damage": "2d8+3 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "zQC6gE9jWOryWDqO",
          "name": "Talon",
          "bonus": 12,
          "damage": "2d6+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "DURQZqvnE1WhBP0b",
          "name": "Junk Nest",
          "kind": "passive",
          "description": "The scroungefeather's nest of sharp metallic junk covers a 15-foot-by-15-foot area. The area is difficult terrain and hazardous terrain to any non-scroungefeather creatures. A creature that moves on the ground through the nest takes 3 piercing damage for each square of the area it moves into. Scroungefeathers can Take Cover at any point in the nest.",
          "traits": []
        },
        {
          "id": "Mem6QODpIHtqr1NO",
          "name": "Tossed Scraps",
          "kind": "action",
          "description": "Requirements The scroungefeather has Grabbed Debris\nEffect The scroungefeather flings the debris at a target within 20 feet, making an attack roll with a +12 modifier. On a success, the target takes 2d10+5 bludgeoning damage.",
          "traits": []
        },
        {
          "id": "P7J5DmONxucVFHWg",
          "name": "Grab Debris",
          "kind": "action",
          "description": "Requirements The scroungefeather is in its nest or another environment rich with debris\nEffect The scroungefeather uses an Interact action to grab an item with its beak, selected randomly; roll 1d4 to determine the type of debris. The scroungefeather gains access to the listed abilities until it uses Tossed Scraps to discard the debris or until it Releases the debris. The scroungefeather can't use its beak attack while it is using its beak to Grab Debris.\nd4 | Item | Effect |\n1 | Armor scrap | The scroungefeather gains a +2 circumstance bonus to its AC. |\n2 | Shattered blade | The scroungefeather gains a broken blade melee Strike with a +12 attack modifier that deals 2d10+6 slashing damage. |\n3 | Unexploded bomb | When the scroungefeather throws this with Tossed Scraps, all the damage is fire damage, and the bomb also deals 3 fire splash damage. |\n4 | Faulty wand | The scroungefeather gains a magic bolt ranged Strike witha +14 attack modifier that deals 2d6+6 force damage. |",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 328,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Take Cover",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Take Cover",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Take Cover",
          "sourceId": "ust1jJSCZQUhBZIz",
          "name": "Take Cover",
          "type": "action"
        },
        "owner": {
          "sourceId": "DURQZqvnE1WhBP0b",
          "name": "Junk Nest",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:magnegor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "2RkNeHGvkSWJmgCz",
      "slug": "magnegor",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0723d19f17f8b08f59a10039c3b6f111b82b509fcfe6e8527a64df5d2994d155",
    "translatableHash": "sha256:8d6bbd0873dd8d7d1d3e019fb55c264e3353465c9b621e7770b241a02685fcf7",
    "data": {
      "schemaVersion": 1,
      "name": "Magnegor",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "Magnegors roam the mountains of Golarion, grazing on wild berries, edible roots, and other plants that favor iron-rich soil and high elevations. These hulking, woolly bovines have four curved horns—two extending from behind their ears, and two from below their jaws—that frame their skulls in an X shape. Their bodies are covered in thick, stringy hair with a texture akin to copper wire, parted only by massive neural spines of dense, nearly indestructible keratin.\nMagnegors display a unique ability to manipulate magnetic fields through their coats and spines and have a strange predilection for crushing metals and precious ores by wallowing over them back and forth. As a result, unwary adventurers who accidentally wander into the middle of a magnegor herd rarely, if ever, make it out alive.",
      "armorClass": 21,
      "hitPoints": 100,
      "speedFeet": 40,
      "perception": {
        "modifier": 14,
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
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 15,
        "intimidation": 13,
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
          "id": "evJRF4VdPO5GrD0i",
          "name": "Horn",
          "bonus": 17,
          "damage": "2d8+5 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "SUcXTG82pMmewpem",
          "name": "Metal Allergy",
          "kind": "passive",
          "description": "When a magnegor takes damage from a metal weapon or an effect with the metal trait, it takes 5 untyped damage additional damage and must succeed at a check (flat, dc:5) or become Sickened 1. The value of the sickened condition increases each time the magnegor fails such a check, to a maximum of 3.",
          "traits": []
        },
        {
          "id": "CJ589AJOrRrFopWl",
          "name": "Excavating Spines",
          "kind": "passive",
          "description": "The magnegor inadvertently digs a 10-foot-deep continuous trench in any square it Wallows through, as long as the ground in that space isn't made of stone, rock, or some other surface too hard to excavate. The trench is greater difficult terrain. At the GM's discretion, any excavated square can reveal a deposit of sedimentary rock filled with metal ore that has Hardness 7 and 28 Hit Points.",
          "traits": [
            "earth"
          ]
        },
        {
          "id": "umjew4vPAU8Ye3xs",
          "name": "Magnetized Coat",
          "kind": "passive",
          "description": "When a magnegor comes within 30 feet of a metal object or a deposit of metal ore, its thousands of wiry hairs stand on end, pointing towards the metal and creating a magnetic field. Metal items of light or negligible Bulk that touch the magnegor's coat adhere to it magnetically, requiring an Interact action to be pried free. Creatures wearing or primarily composed of metal treat all squares in a 10-foot radius around the magnegor as difficult terrain, unless they are moving directly towards it.",
          "traits": []
        },
        {
          "id": "xsHOUZyFnSvFmKSt",
          "name": "Wallow",
          "kind": "action",
          "description": "Requirements The magnegor is Prone\nEffect The magnegor rolls on its spine-covered back, up to its Speed, furrowing the earth and crushing any Large or smaller creatures in its path. This deals 4d10 piercing damage with a check (reflex, dc:24, basic) save; on a failed save, a creature wearing metal armor or made of metal is Restrained by the magnegor's magnetized coat (Escape DC 24). For each metal object or piece of equipment a restrained creature chooses to leave stuck to the magnegor, it gains a +1 circumstance bonus to its attempts to Escape. A creature that relinquishes all its metal Escapes automatically. The magnegor can move at its full Speed while it has a creature restrained in this way, bringing the creature along.",
          "traits": [
            "move"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 184,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "SUcXTG82pMmewpem",
          "name": "Metal Allergy",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 49,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "xsHOUZyFnSvFmKSt",
          "name": "Wallow",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 427,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "xsHOUZyFnSvFmKSt",
          "name": "Wallow",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:drthak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "bFRTPIDVo2tmmj9w",
      "slug": "drthak",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f02a4735be1ccd987665ec7297758e57465eba26581768706c72b6bdcbe99dfe",
    "translatableHash": "sha256:203bebeaec80334ed96686eb88b296810d1afb615f3fd4c515ac6bd36fc453eb",
    "data": {
      "schemaVersion": 1,
      "name": "Drthak",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Dischorans are a group of predators who hunt via focused sound. Though they possess protuberances that resemble eyes, these are actually auditory sensory organs that can pick up even the slightest sound and are used to locate prey with pinpoint accuracy.\nOnly a few types of dischorans have been identified, but they all share unifying features: front-facing pseudo-eyes, deceptive speed, and ravenous hunger. Their sensitivity to noise combined with their ability to weaponize sound are likely the primary reasons dischorans spend most of their time alone.\nDrthaks are aquatic predators with long trailing fins that are rarely seen, clinging to coasts and estuaries where the high silt content makes them practically invisible to predators and prey alike. Some have been known to come inland, tracking their prey miles upriver before striking. The underwater environment alters the typical dischoran hunting behavior, with drthaks creating bubbles that implode to stun prey.",
      "armorClass": 23,
      "hitPoints": 110,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "echolocation-120"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 4,
        "int": -3,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 16,
        "stealth": 17,
        "survival": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "sonic 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ajj5B3btgsMtUWOt",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d8+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "eVTj5RtNUwJkmpKX",
          "name": "Screech",
          "bonus": 17,
          "damage": "4d6 sonic",
          "traits": [
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "3cXBNyDdx24wUtWg",
          "name": "Auditory Hunter",
          "kind": "reaction",
          "description": "Trigger A creature within 15 feet uses an auditory action\nEffect The drthak Strides or Swims towards the creature.",
          "traits": []
        },
        {
          "id": "9dGAZ4GeQWPy0w5R",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The drthak can hold its breath for about 2 hours.",
          "traits": []
        },
        {
          "id": "yes3Dw8znID2FuF6",
          "name": "Pull Under",
          "kind": "passive",
          "description": "The drthak can Swim at half Speed while it has a creature Grabbed or Restrained in its jaws, carrying the creature along with it.",
          "traits": []
        },
        {
          "id": "dPYjfixt9YiqsrCS",
          "name": "Sensitive Echolocation",
          "kind": "passive",
          "description": "The drthak can use its hearing as a precise sense with the listed range. If the drthak takes sonic damage beyond its resistance, its senses are overloaded and all creatures are Concealed from it for 1 round.",
          "traits": []
        },
        {
          "id": "zbH4SpmqS8avZqS2",
          "name": "Bubble Burst",
          "kind": "action",
          "description": "Requirements The drthak is underwater\nEffect The drthak uses sonic power to push aside water in a 30-foot emanation, which then collapses in a crushing torrent. All creatures in the area, other than the drthak, take 3d10 bludgeoning damage (check (fortitude, dc:24, basic, options:area-effect) save).",
          "traits": [
            "sonic",
            "water"
          ]
        },
        {
          "id": "g7fpjFdxAJa69lmZ",
          "name": "Resonant Jaws",
          "kind": "passive",
          "description": "When the drthak misses a screech Strike against a creature Grabbed or Restrained in its jaws, it deals that creature 2d6 sonic damage.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 61,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "yes3Dw8znID2FuF6",
          "name": "Pull Under",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 115,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "yes3Dw8znID2FuF6",
          "name": "Pull Under",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 180,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dPYjfixt9YiqsrCS",
          "name": "Sensitive Echolocation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 62,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "g7fpjFdxAJa69lmZ",
          "name": "Resonant Jaws",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 116,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "g7fpjFdxAJa69lmZ",
          "name": "Resonant Jaws",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:virtuosic-lyrebird",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "jqlOMCrrDW07KFB0",
      "slug": "virtuosic-lyrebird",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e394b3b22aadb672ab07bce26987f581b48103c40e2c79b683b6ab1413dc9a95",
    "translatableHash": "sha256:af8c3b8adadd98a074a15065ea6634dc8033e44ba8fac88fd5ee572e78d36329",
    "data": {
      "schemaVersion": 1,
      "name": "Virtuosic Lyrebird",
      "level": 6,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "beast"
      ],
      "description": "Virtuosic lyrebirds present an excellent case study in how specialty-bred animals can escape captivity and become pests. A small team of apprentice mages established the original virtuosic lyrebirds as part of their graduation thesis, in an attempt to create a familiar that could better aid in spellcasting. The vocal mimicry of these birds did indeed allow them to harmonize with their bonded spellcaster; however, initial progress was slow, and the impatient students chose to hastily elevate the birds' abilities before their thesis deadline using experimental magic. Unfortunately, the specimens' newfound vocal mimicry was so supreme that they could mimic spell incantations as easily as any other sound they heard. The virtuosic lyrebirds soon vaporized, teleported out of, or befuddled their keepers into opening their cages, escaping into the wild and flourishing.\nVirtuosic lyrebirds use their spellcasting abilities mostly to play pranks and alleviate boredom. They tend to travel in pairs, but when these pairs congregate into larger flocks, their mischief and fun can quickly turn dangerous.",
      "armorClass": 24,
      "hitPoints": 65,
      "speedFeet": 15,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 9,
        "reflex": 17,
        "will": 14
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 2,
        "int": 3,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "arcana": 14,
        "performance": 16,
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
          "id": "P4srqf1wN2x7cfTB",
          "name": "Beak",
          "bonus": 12,
          "damage": "2d8+4 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "Yl9oop0f4E8Na8Ch",
          "name": "Talon",
          "bonus": 12,
          "damage": "2d6+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "452LdrpT5OCYCH0j",
          "name": "Counter-Melody",
          "kind": "reaction",
          "description": "Trigger An opponent within 60 feet Casts a Spell\nEffect The virtuosic lyrebird makes a counteract check against the triggering spell (1d20+14 counteract modifier).",
          "traits": []
        },
        {
          "id": "iQyVAyqr5ERKcsoM",
          "name": "Arcane Harmony",
          "kind": "action",
          "description": "Effect The virtuosic lyrebird sings a subtle trill that others can use to embellish their magic. The next virtuosic lyrebird to Cast a Spell within 60 feet of the first lyrebird that used Arcane Harmony chooses one of the following two benefits, after which the Arcane Harmony ends.\n• The spell gains a +2 status bonus to damage per spell rank.\n• One target of the spell takes a –2 status penalty to saves against the spell.",
          "traits": [
            "arcane",
            "auditory"
          ]
        },
        {
          "id": "zaQeFovenkFyl9Mp",
          "name": "Spell Mimicry",
          "kind": "passive",
          "description": "Frequency once per day\nRequirements A creature Casts a Spell of 3rd rank or lower since the end of the virtuosic lyrebird' s last turn, and the virtuosic lyrebird heard the incantation for the spell\nEffect The virtuosic lyrebird learns the spell enough to mimic and cast it this turn, using as many actions as the original spell took.",
          "traits": []
        },
        {
          "id": "t2isDsAZlZxwt4lc",
          "name": "Spellsong Casting",
          "kind": "passive",
          "description": "The virtuosic lyrebird's exquisite vocal control lets it cast spells purely through its song. While it must be able to vocalize to Cast a Spell, it doesn't need to gesture, removing the manipulate trait from any spell that it casts. If it Casts a Spell with the linguistic trait (usually with its Spell Mimicry), it can Cast that Spell in Common, even though the bird doesn't truly understand the language.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "SIKX39Q5m1oVi8SX",
          "name": "Arcane Spontaneous Spells",
          "tradition": "arcane",
          "category": "spontaneous",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "T4ccPRiBgB9h4r7p",
              "name": "Bullhorn",
              "rank": 1
            },
            {
              "id": "1qZn82Vyi3mWqKDF",
              "name": "Command",
              "rank": 1
            },
            {
              "id": "W2wlcFKWXQNwBZ5N",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "4AvYJnvYJYduQCTZ",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "xwF6YZWBbyrDyrnQ",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "3BKZTB9XLtKxoZec",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "SjN3pDxEm6ahglhD",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "gVWGVc96TLIQ8aw2",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "kaIuUmexstOkHYSb",
              "name": "Breathe Fire",
              "rank": 2
            },
            {
              "id": "j5oB4hnk9rb4uNVf",
              "name": "Shatter",
              "rank": 2
            },
            {
              "id": "9tWyxyaX7Q5SIK7B",
              "name": "Force Barrage",
              "rank": 3
            },
            {
              "id": "LjGkXZPcL2LvzlBl",
              "name": "Hypnotize",
              "rank": 3
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.K2WpC3FFoHrqX9Q5",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.K2WpC3FFoHrqX9Q5",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "K2WpC3FFoHrqX9Q5",
          "sourceId": "K2WpC3FFoHrqX9Q5",
          "name": "Hypnotize",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LjGkXZPcL2LvzlBl",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 95,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LjGkXZPcL2LvzlBl",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 353,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "LjGkXZPcL2LvzlBl",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 452,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fascinated",
          "sourceId": "AdPVz7rbaVSRxHFg",
          "name": "Fascinated",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LjGkXZPcL2LvzlBl",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.g8QqHpv2CWDwmIm1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.g8QqHpv2CWDwmIm1",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "g8QqHpv2CWDwmIm1",
          "sourceId": "g8QqHpv2CWDwmIm1",
          "name": "Gust of Wind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "3BKZTB9XLtKxoZec",
          "name": "Gust of Wind",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 646,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3BKZTB9XLtKxoZec",
          "name": "Gust of Wind",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.6DfLZBl8wKIV03Iq",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "6DfLZBl8wKIV03Iq",
          "sourceId": "6DfLZBl8wKIV03Iq",
          "name": "Ignition",
          "type": "spell"
        },
        "owner": {
          "sourceId": "SjN3pDxEm6ahglhD",
          "name": "Ignition",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.60sgbuMWN0268dB7",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.60sgbuMWN0268dB7",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "60sgbuMWN0268dB7",
          "sourceId": "60sgbuMWN0268dB7",
          "name": "Telekinetic Projectile",
          "type": "spell"
        },
        "owner": {
          "sourceId": "gVWGVc96TLIQ8aw2",
          "name": "Telekinetic Projectile",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.1xbFBQDRs0hT5xZ9",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.1xbFBQDRs0hT5xZ9",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "1xbFBQDRs0hT5xZ9",
          "sourceId": "1xbFBQDRs0hT5xZ9",
          "name": "Shatter",
          "type": "spell"
        },
        "owner": {
          "sourceId": "j5oB4hnk9rb4uNVf",
          "name": "Shatter",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.y6rAdMK6EFlV6U0t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.y6rAdMK6EFlV6U0t",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "y6rAdMK6EFlV6U0t",
          "sourceId": "y6rAdMK6EFlV6U0t",
          "name": "Breathe Fire",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kaIuUmexstOkHYSb",
          "name": "Breathe Fire",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.W02bHXylIpoXbO4e",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.W02bHXylIpoXbO4e",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "W02bHXylIpoXbO4e",
          "sourceId": "W02bHXylIpoXbO4e",
          "name": "Bullhorn",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T4ccPRiBgB9h4r7p",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 529,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Coerce",
          "sourceId": "tHCqgwjtQtzNqVvd",
          "name": "Coerce",
          "type": "action"
        },
        "owner": {
          "sourceId": "T4ccPRiBgB9h4r7p",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 723,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Perform",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Perform",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Perform",
          "sourceId": "EEDElIyin4z60PXx",
          "name": "Perform",
          "type": "action"
        },
        "owner": {
          "sourceId": "T4ccPRiBgB9h4r7p",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 823,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bullhorn",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bullhorn",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bullhorn",
          "sourceId": "9yzlmYUdvdQshTDF",
          "name": "Spell Effect: Bullhorn",
          "type": "effect"
        },
        "owner": {
          "sourceId": "T4ccPRiBgB9h4r7p",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.aIHY2DArKFweIrpf",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.aIHY2DArKFweIrpf",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "aIHY2DArKFweIrpf",
          "sourceId": "aIHY2DArKFweIrpf",
          "name": "Command",
          "type": "spell"
        },
        "owner": {
          "sourceId": "1qZn82Vyi3mWqKDF",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 117,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1qZn82Vyi3mWqKDF",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 212,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1qZn82Vyi3mWqKDF",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 290,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Delay",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Delay",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Delay",
          "sourceId": "A72nHGUtNXgY5Ey9",
          "name": "Delay",
          "type": "action"
        },
        "owner": {
          "sourceId": "1qZn82Vyi3mWqKDF",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4gBIw4IDrSfFHik4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4gBIw4IDrSfFHik4",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "W2wlcFKWXQNwBZ5N",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 177,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "W2wlcFKWXQNwBZ5N",
          "name": "Daze",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4koZzrnMXhhosn0D",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4koZzrnMXhhosn0D",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4koZzrnMXhhosn0D",
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        },
        "owner": {
          "sourceId": "4AvYJnvYJYduQCTZ",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 182,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4AvYJnvYJYduQCTZ",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 297,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4AvYJnvYJYduQCTZ",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 421,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4AvYJnvYJYduQCTZ",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 493,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4AvYJnvYJYduQCTZ",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "xwF6YZWBbyrDyrnQ",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "xwF6YZWBbyrDyrnQ",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "xwF6YZWBbyrDyrnQ",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.gKKqvLohtrSJj3BM",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.gKKqvLohtrSJj3BM",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "gKKqvLohtrSJj3BM",
          "sourceId": "gKKqvLohtrSJj3BM",
          "name": "Force Barrage",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9tWyxyaX7Q5SIK7B",
          "name": "Force Barrage",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:majungasaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "McgVEJXOdaKXIejY",
      "slug": "majungasaurus",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52e08add108c80de4a1a6ab913d65b4689b456f1b11c4630bc32a47e345b7354",
    "translatableHash": "sha256:4be044c33a438afa60bc4affac7c6df11e0f97a1a1681a83abb6427006f7fea6",
    "data": {
      "schemaVersion": 1,
      "name": "Majungasaurus",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "The majungasaurus prowls in a crouched posture, carrying its bulk so low to the ground it is eye-to-eye with its prey. Unlike most carnivorous dinosaurs, the majungasaurus is primarily an ambush predator, patiently lying in wait for quarry to come within reach before bursting from cover with a signature cry to attack.",
      "armorClass": 23,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 17,
        "will": 12
      },
      "abilities": {
        "str": 6,
        "dex": 5,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 16,
        "intimidation": 14,
        "stealth": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "QsoK6ikMwruuDxoU",
          "name": "Jaws",
          "bonus": 16,
          "damage": "2d8+6 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "SXAJ0LMHbQon3HLb",
          "name": "Foot",
          "bonus": 16,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "prvIYvpPajDhdKWU",
          "name": "Frightened Prey",
          "kind": "passive",
          "description": "Frightened creatures are Off-Guard to a majungasaurus.",
          "traits": []
        },
        {
          "id": "19Hk9yB4fksq7w1P",
          "name": "Startling Roar",
          "kind": "passive",
          "description": "When the majungasaurus rolls initiative using Stealth, it can attempt to Demoralize each creature within 30-foot emanation as a free action. Regardless of the effect, each creature is then temporarily immune for 1 hour.",
          "traits": []
        },
        {
          "id": "saTF5z3Vo6RIF4hX",
          "name": "Crack Bones",
          "kind": "action",
          "description": "Requirements The majungasaurus has a creature Grabbed in its jaws\nEffect The majungasaurus deals that creature 3d8 bludgeoning damage (check (fortitude, dc:24, basic) save). A creature that fails this save is Clumsy 1 until it recovers to full Hit Points.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 3,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "prvIYvpPajDhdKWU",
          "name": "Frightened Prey",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 71,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "prvIYvpPajDhdKWU",
          "name": "Frightened Prey",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/system/rules/0/uuid",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "prvIYvpPajDhdKWU",
          "name": "Frightened Prey",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 66,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "saTF5z3Vo6RIF4hX",
          "name": "Crack Bones",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "saTF5z3Vo6RIF4hX",
          "name": "Crack Bones",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:carnotaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "7ABYJlJgL1iwCiIP",
      "slug": "carnotaurus",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:19ae887c591ff3e93b941234f2a9da56b3e721348111ec5cf451b0d771bcf308",
    "translatableHash": "sha256:bdb23d05cd838a98f3dae6bc0767f8e15c57ac29a9e58a6a1ec44a9e29c73abd",
    "data": {
      "schemaVersion": 1,
      "name": "Carnotaurus",
      "level": 7,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "This 2,000-pound predator lives up to its name by ramming its prey with its distinctive horns lowered, knocking them Prone, and viciously tearing into fallen victims before they can regain their footing. Do not let its size fool you; this massive dinosaur is deceptively quick when charging a potential meal. Aggressive and highly territorial, a carnotaurus will not hesitate to hunt down and slay any creature unlucky enough to cross its path.",
      "armorClass": 24,
      "hitPoints": 145,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 15,
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
        "athletics": 18,
        "survival": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "61CtEzeJE3UzbyD0",
          "name": "Jaws",
          "bonus": 18,
          "damage": "2d10+9 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "ELnUHPcIhYGPyULm",
          "name": "Horn",
          "bonus": 18,
          "damage": "1d12+9 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "S8ImYw2K1hGiXLRr",
          "name": "Headbutt",
          "kind": "reaction",
          "description": "Trigger A creature ends a move action within reach of the carnotaurus's horn Strike\nEffect The carnotaurus makes a horn Strike against the triggering creature.",
          "traits": []
        },
        {
          "id": "AVbQqFfDXCKjCT1Q",
          "name": "Powerful Charge",
          "kind": "action",
          "description": "The carnotaurus lowers its horns and surges toward a foe. It Strides twice, then makes a horn Strike. If it moved at least 20 feet from its starting position, the Strike's damage is increased to 2d12+9 and knocks the target Prone if successful.",
          "traits": []
        },
        {
          "id": "9Og1kqVtRbdxL6em",
          "name": "Vicious Mauling",
          "kind": "passive",
          "description": "The carnotaurus's jaws Strike deals an additional 1d8 persistent bleed damage to Prone targets.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 227,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "AVbQqFfDXCKjCT1Q",
          "name": "Powerful Charge",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 84,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9Og1kqVtRbdxL6em",
          "name": "Vicious Mauling",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/publicNotes",
        "sourceIndex": 120,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7ABYJlJgL1iwCiIP",
          "name": "Carnotaurus",
          "type": "npc"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:mirror-wolf",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "8DoyRTIl2TM4cDDI",
      "slug": "mirror-wolf",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1a382c3e0c6ed3c52119e40e78eebeb0487cede9d018a622482a48e859c0deb6",
    "translatableHash": "sha256:073c4ecec3513bb8c30a3da5009fe5fecb9fea7e4ad7c593fcd158ad1d8de8cc",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror Wolf",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast"
      ],
      "description": "",
      "armorClass": 24,
      "hitPoints": 117,
      "speedFeet": 35,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 19,
        "will": 15
      },
      "abilities": {
        "str": 3,
        "dex": 6,
        "con": 2,
        "int": 1,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 12,
        "intimidation": 11,
        "stealth": 19,
        "survival": 17
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "poison",
          "precision"
        ],
        "resistances": [
          "all-damage 7 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "p91LYw32RVv8eUUT",
          "name": "Jaws",
          "bonus": 17,
          "damage": "2d8+8 force",
          "traits": [
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Mfi8RXBWDcnlG8bV",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "0zQsy5U0xencZHog",
          "name": "Visage Strike",
          "kind": "reaction",
          "description": "Trigger A creature adjacent to the mirror wolf's visages damages mirror wolf's ally\nEffect The mirror wolf teleports to the visage's spot, destroying the visage, and makes a jaws Strike.",
          "traits": []
        },
        {
          "id": "cjK0ZNEaC96yw0EV",
          "name": "Bond with Mortal",
          "kind": "passive",
          "description": "Frequency once per day\nEffect The spirit guide spends 10 minutes to form a bond with a mortal creature. While the bond exists, the spirit guide increases their current and maximum Hit Points by 14, gains a +2 status bonus to their attack and damage rolls, and can communicate telepathically with the bonded mortal as long as the two beings are on the same plane. The spirit guide can only be bonded with one mortal at a time, and they can take this action again to end the bond or to form a new bond (which also ends the old bond). The bond also ends if the spirit guide or the mortal dies.\nThis bond strengthens the spirit guide's connection to the Universe. While bonded, the spirit guide loses the incorporeal and spirit traits, loses their immunity to disease, paralysis, and poison, along with their resistance to all damage, and changes their Strikes to deal the appropriate amount of physical damage (typically piercing or slashing) instead of force damage.",
          "traits": [
            "mental",
            "primal"
          ]
        },
        {
          "id": "WCkpAIbTRQdeSQzf",
          "name": "Bonded Strike",
          "kind": "action",
          "description": "Requirements The mirror wolf is currently Bonded with a Mortal\nEffect The mirror wolf makes a jaws Strike. If this attack hits, the bonded mortal can spend their reaction to Strike the same target.",
          "traits": []
        },
        {
          "id": "BQQ9CDsX6RwM2t04",
          "name": "Lingering Assailant",
          "kind": "passive",
          "description": "The mirror wolf attacks with such speed it leaves a visage of itself behind. When the mirror wolf Strikes, they leave behind a visage in an adjacent square. The visage is treated as an ally for effects such as flanking and pack attack. A visage has AC 10 and 1 HP and lasts for 1 round.",
          "traits": [
            "illusion",
            "visual"
          ]
        },
        {
          "id": "aKe1HEWVaLLqphsT",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The mirror wolf's Strikes deal 1d8 extra damage to creatures within reach of at least two of the mirror wolf's allies.",
          "traits": []
        },
        {
          "id": "lsx9VIlR2bllPQ7r",
          "name": "Strafing Strike",
          "kind": "action",
          "description": "The mirror wolf makes a jaws Strike against a creature within range. The mirror wolf can then Stride and make a second jaws Strike against the same creature.",
          "traits": []
        },
        {
          "id": "wuss5LfxIMAUVUaN",
          "name": "Knockdown",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "XGF9QQiAWPYlh6Kh",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 22,
          "spells": [
            {
              "id": "oHqLI41pbRAH1lwm",
              "name": "Revealing Light",
              "rank": 3
            },
            {
              "id": "69ZVRxzoQ9N2S4Ba",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "SwUiVavHKMWG7t5K",
          "sourceId": "SwUiVavHKMWG7t5K",
          "name": "Truespeech",
          "type": "spell"
        },
        "owner": {
          "sourceId": "69ZVRxzoQ9N2S4Ba",
          "name": "Truespeech (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.BCLvAx4Pz4MLa2pu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.BCLvAx4Pz4MLa2pu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "BCLvAx4Pz4MLa2pu",
          "sourceId": "BCLvAx4Pz4MLa2pu",
          "name": "Knockdown",
          "type": "action"
        },
        "owner": {
          "sourceId": "wuss5LfxIMAUVUaN",
          "name": "Knockdown",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0qaqksrGGDj74HXE",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0qaqksrGGDj74HXE",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0qaqksrGGDj74HXE",
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oHqLI41pbRAH1lwm",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 194,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "oHqLI41pbRAH1lwm",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 266,
        "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Invisible",
          "sourceId": "zJxUflt9np0q4yML",
          "name": "Invisible",
          "type": "condition"
        },
        "owner": {
          "sourceId": "oHqLI41pbRAH1lwm",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 331,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "oHqLI41pbRAH1lwm",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kakyXBG5WA8c6Zfd",
          "sourceId": "kakyXBG5WA8c6Zfd",
          "name": "Constant Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "Mfi8RXBWDcnlG8bV",
          "name": "Constant Spells",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:giant-coppermouth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "kGqR8nFoGHB3iccK",
      "slug": "giant-coppermouth",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c6e12177c0c9a815dc4e615587240627545808ee287b385f1b29d6d17b9f1ff4",
    "translatableHash": "sha256:86d956e9a7f137394ce1ef102d49c9cd9222a834769ed12d7dc345cbf8894173",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Coppermouth",
      "level": 7,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "Coppermouths are fierce and aggressive, even when alone, relying on their venom and ability to manipulate bioelectric impulses.",
      "armorClass": 25,
      "hitPoints": 115,
      "speedFeet": 30,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 18,
        "will": 12
      },
      "abilities": {
        "str": 3,
        "dex": 6,
        "con": 4,
        "int": -4,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "acrobatics": 17,
        "athletics": 14,
        "stealth": 17,
        "survival": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "lBqu6MnLr677oxyr",
          "name": "Fangs",
          "bonus": 18,
          "damage": "2d8+6 piercing; 1d4 electricity",
          "traits": [
            "electricity",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "AUuuQzN1AfvWUzGr",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The giant coppermouth can hold its breath for 1 hour.",
          "traits": []
        },
        {
          "id": "iX7BbgHyLmL3p3Uu",
          "name": "Greater Electrolocation",
          "kind": "passive",
          "description": "A giant coppermouth can sense minute electrical charges in living creatures, which it can use as a precise sense at a range of 20 feet. This distance increases to 100 feet against any creature that has used an electricity effect within the last minute.",
          "traits": []
        },
        {
          "id": "j6Z028nwBjcO1Eb1",
          "name": "Coppermouth Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage] (1 round)\nStage 2 2d6 poison damage] and Clumsy 1 (1 round)\nStage 3 2d6 poison damage] and Clumsy 2",
          "traits": [
            "electricity",
            "poison"
          ]
        },
        {
          "id": "VHDy7IecsO1lSpSZ",
          "name": "Quickening Jolt",
          "kind": "action",
          "description": "The coppermouth manipulates its own nervous system by increasing its reaction time, Striding and making two Strikes against different targets during the movement. Both attacks count toward its multiple attack penalty, but the penalty doesn't increase until after it has made both attacks.",
          "traits": [
            "electricity"
          ]
        },
        {
          "id": "sn26BFLP0AI27Z6F",
          "name": "Venomous Spit",
          "kind": "action",
          "description": "The coppermouth unleashes a stream of electrified venom in a 30-foot line. The venom deals 8d6 electricity damage (check (reflex, dc:22, basic, options:area-effect)) and creatures that take damage from the venom are immediately exposed to coppermouth venom. The copper mouth can't use Venomous Spit again for 1d4.",
          "traits": [
            "electricity",
            "poison"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 325,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "j6Z028nwBjcO1Eb1",
          "name": "Coppermouth Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 501,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "j6Z028nwBjcO1Eb1",
          "name": "Coppermouth Venom",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:apothecary-bee",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ooT4XgMteGVulk1U",
      "slug": "apothecary-bee",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:808d77c2463e8d1c52188e2a4d71d7eba730b37a7c0604396b1566b98208f1d7",
    "translatableHash": "sha256:f8ff17ac3c638b31322437849330fef8ea40f0eca1c0751fe01377c4de8bad2e",
    "data": {
      "schemaVersion": 1,
      "name": "Apothecary Bee",
      "level": 7,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "animal"
      ],
      "description": "These giant bees feed on the nectar of medicinal herbs and magical flowers, naturally processing the liquid into syrupy-sweet potions. Depending on the precise diet of the apothecary bees, they can produce a wide variety of potions, storing any excess in the waxy cells lining their nest. Apothecary bee workers are about a foot long, with yellow and black stripes. While carrying a potion, the bee's abdomen visibly swells and often changes color to match the potion within.\nThe value of the apothecary bees' potions has led to numerous attempts at domestication, a dangerous, expensive dream with both high risks and high rewards. Once a magical garden has been established, apothecary beehives tend to become self-sustaining. Beekeepers can potentially guide their cultivation, but they're no longer necessary for the hive's survival. Some ancient, long-abandoned gardens still grow along the Sphinx River in Osirion, where many apothecary bees prowl for flowers that meet their standards. Upon their most recent dig to the surface, surki communities quickly began the process of \"trading\" with the bees, establishing habitats and using their natural magic sense to better tend the massive fields a large hive needs. Miflits, on the other hand, often end up absorbed into the bees' social structure.\nThe potions a hive produces vary from season to season, depending on what flowers are available. Beekeepers have made strides in creating gardens that yield specific potions and have even developed harvesting techniques that increase potion effectiveness. These techniques are valuable, closely guarded secrets, but even defective potions with cursed results have found use among the followers of Calistria and Norgorber.",
      "armorClass": 25,
      "hitPoints": 115,
      "speedFeet": 10,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 19,
        "will": 13
      },
      "abilities": {
        "str": 1,
        "dex": 6,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 17,
        "stealth": 17,
        "thievery": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "qhkJDm7SbKQZdi5S",
          "name": "Stinger",
          "bonus": 19,
          "damage": "1d4+4 piercing; 3d6 poison",
          "traits": [
            "magical",
            "poison"
          ]
        }
      ],
      "actions": [
        {
          "id": "njwjHnMHM7JotGBs",
          "name": "Drain Potion",
          "kind": "action",
          "description": "Requirements The apothecary bee has no stored potions\nEffect The apothecary bee slurps up a potion within its reach, storing it internally. A creature can attempt a check (reflex, dc:25) save to protect a potion in its possession.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "Ux7MkNJ0woR1eBb6",
          "name": "Ingest Potion",
          "kind": "action",
          "description": "The apothecary bee consumes the potion it has stored in its body. If the potion has the healing trait, the apothecary bee heals for the maximum amount.",
          "traits": []
        },
        {
          "id": "VgW9B7ssvo9NV1DJ",
          "name": "Inject Potion",
          "kind": "action",
          "description": "The apothecary bee injects its stored potion into a willing creature within its reach. This deals 1 piercing damage and grants the recipient the normal effects of drinking the potion.",
          "traits": [
            "manipulate"
          ]
        },
        {
          "id": "1Xy7RCo9U1pE8GLk",
          "name": "Internal Cauldron",
          "kind": "passive",
          "description": "With an appropriate diet, an apothecary bee will create a potion of 6th level or lower every two weeks. Most often, this is a Healing Potion (Moderate). Each apothecary bee can store only one completed potion at a time. Unused potions can generally be harvested from an apothecary bee with a successful check (nature, dc:23) or check (survival, dc:23) check.",
          "traits": []
        },
        {
          "id": "HiQNiL6IgNMdZtnM",
          "name": "Potionsight",
          "kind": "passive",
          "description": "Apothecary bees' complex eyes let them see the auras of magical potions and instinctively identify potions of their level or lower. These auras are visible through mundane containers, though their eyes have no special ability to perceive or identify non-magical solutions, such as alchemical elixirs.",
          "traits": []
        },
        {
          "id": "5pHmqOCEuzkoWLPd",
          "name": "Smoke Susceptibility",
          "kind": "passive",
          "description": "An apothecary bee is Slowed 1 if it starts its turn in heavy smoke.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.equipment-srd.Item.G7haQ5gDt30ftJLC",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.G7haQ5gDt30ftJLC",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "G7haQ5gDt30ftJLC",
          "sourceId": "G7haQ5gDt30ftJLC",
          "name": "Healing Potion (Moderate)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "9Zs2g8sLGH67C5De",
          "name": "Healing Potion (Moderate)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 129,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Healing Potion (Moderate)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Healing Potion (Moderate)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Healing Potion (Moderate)",
          "sourceId": "G7haQ5gDt30ftJLC",
          "name": "Healing Potion (Moderate)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "1Xy7RCo9U1pE8GLk",
          "name": "Internal Cauldron",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 24,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "5pHmqOCEuzkoWLPd",
          "name": "Smoke Susceptibility",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:mist-bear",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "TMYd4qao23PYSnOT",
      "slug": "mist-bear",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6abab95fdaa5b2d27463c5f89f606d75d0db510cd467a01ef033924b6b053d7b",
    "translatableHash": "sha256:1266fa2c7660938436f9df4e36f7e6d7473b6c324f8f6e8a64d5cb0ce342a9bb",
    "data": {
      "schemaVersion": 1,
      "name": "Mist Bear",
      "level": 7,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast",
        "ethereal"
      ],
      "description": "Like the mundane bears they resemble, a mist bear is motivated by simple pursuits, such as food. Unlike other ursines, the mist bear can dissipate into a cloud of ethereal vapor, greatly complicating the efforts of neighboring humanoids to keep their provisions safe from the creature's depredations.\nFortunately, the mist bear follows a predictable pattern of behavior, usually foraging within the Universe for only a few months every year to gorge itself. Once sated, it then enters a state similar to hibernation where it drifts through the Ethereal Plane as a cloud of intangible vapor.",
      "armorClass": 24,
      "hitPoints": 140,
      "speedFeet": 35,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 5,
        "int": -3,
        "wis": 4,
        "cha": 2
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
          "id": "Z0lROa7FitkYg24I",
          "name": "Jaws",
          "bonus": 17,
          "damage": "2d10+8 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Twx2s3Atc5po1zHB",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d8+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "nxY3HK4bvu3FTNg0",
          "name": "Mist Form",
          "kind": "passive",
          "description": "Over the course of a minute, a mist bear can transmute its form into a cloud of ethereal vapor. In this state it has resistance 10 to physical damage, is immune to precision damage, and can't use any actions with the attack or manipulate trait. It has a fly Speed of 10 feet and can slip through tiny cracks. The mist bear can return to solid form as a single action.",
          "traits": [
            "concentrate",
            "exploration",
            "occult",
            "polymorph"
          ]
        },
        {
          "id": "9voCXlCcCWEyNhTI",
          "name": "Clouded Charge",
          "kind": "action",
          "description": "The mist bear Strides twice. During this movement, wisps of ethereal smoke trail from its body, making it Concealed. The mist bear then Strikes. The target is Off-Guard to this attack if the bear moved at least 20 feet.",
          "traits": [
            "concentrate",
            "occult",
            "visual"
          ]
        },
        {
          "id": "1rzp0hsF26PBfH7z",
          "name": "Misty Mauling",
          "kind": "action",
          "description": "Requirements The mist bear has a creature Grabbed\nEffect The mist bear digs its claws into the grabbed creature as it dissipates into mist. The grabbed creature takes 3d8 slashing damage (check (fortitude, dc:25, basic) save). The mist bear gains the benefits of its Mist Form, Flies up to 10 feet, and then returns to its solid form.",
          "traits": [
            "concentrate",
            "occult",
            "polymorph"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 109,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9voCXlCcCWEyNhTI",
          "name": "Clouded Charge",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 205,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9voCXlCcCWEyNhTI",
          "name": "Clouded Charge",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 62,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1rzp0hsF26PBfH7z",
          "name": "Misty Mauling",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:karkadann",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Xbvfyzs384giolF2",
      "slug": "karkadann",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:000a8f8893781f3c76e29cc948bef280a8b7ae8a9c7e7fba2694a204df523b04",
    "translatableHash": "sha256:8495844d1a407f2e4c3f1d725593b88c0ec3555db0416146516243129ff7a446",
    "data": {
      "schemaVersion": 1,
      "name": "Karkadann",
      "level": 7,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "fey",
        "holy"
      ],
      "description": "Karkadanns are a distant relation to unicorns, favoring more open terrain than their woodland kin. With the build of a buffalo, karkadanns have gray, scaly bodies, thicker hooves, and no mane. Despite their territoriality and harsh temperament, many karkadanns can be befriended by those who truly hold respect for nature in their hearts.",
      "armorClass": 25,
      "hitPoints": 120,
      "speedFeet": 45,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 14
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 6,
        "int": 0,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 17,
        "diplomacy": 13,
        "intimidation": 15,
        "medicine": 14,
        "survival": 14
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "su52DM949WAEgleA",
          "name": "Horn",
          "bonus": 17,
          "damage": "2d10+8 piercing",
          "traits": [
            "holy",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "C8ECp55x45zDMrLv",
          "name": "Hoof",
          "bonus": 17,
          "damage": "2d6+8 bludgeoning",
          "traits": [
            "holy",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "kiI7wCXrpRbMuVx1",
          "name": "Fearless Rush",
          "kind": "reaction",
          "description": "Trigger The karkadann becomes Frightened\nEffect The karkadann reduces their frightened value by 1 (to a minimum of 0). The karkadann then Strides toward an enemy.",
          "traits": []
        },
        {
          "id": "LxNxDOMQvkwRY1JC",
          "name": "Ghost Touch",
          "kind": "passive",
          "description": "A karkadann's Strikes have the effects of a ghost touch property rune.",
          "traits": []
        },
        {
          "id": "uMUbzmYaoWVaIbgm",
          "name": "Impaling Charge",
          "kind": "action",
          "description": "The karkadann Strides twice, then Strikes with their horn. If the Strike hits, it also deals 1d10 persistent bleed damage.",
          "traits": []
        },
        {
          "id": "hURbkmFyDpndlfUW",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, hoof, check (reflex, dc:25, basic)",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "kjCC3XMhjrCfGPdl",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 25,
          "spells": [
            {
              "id": "HiPRoaUxxQn2LOlF",
              "name": "Cleanse Cuisine",
              "rank": 1
            },
            {
              "id": "KsbniUDZXuCoOxKg",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "VeJY0DVdR26C3ZdR",
              "name": "Cleanse Affliction",
              "rank": 3
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.SUKaxVZW2TlM8lu0",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.SUKaxVZW2TlM8lu0",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "SUKaxVZW2TlM8lu0",
          "sourceId": "SUKaxVZW2TlM8lu0",
          "name": "Cleanse Affliction",
          "type": "spell"
        },
        "owner": {
          "sourceId": "VeJY0DVdR26C3ZdR",
          "name": "Cleanse Affliction",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.qXTB7Ec9yYh5JPPV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.qXTB7Ec9yYh5JPPV",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "qXTB7Ec9yYh5JPPV",
          "sourceId": "qXTB7Ec9yYh5JPPV",
          "name": "Cleanse Cuisine",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HiPRoaUxxQn2LOlF",
          "name": "Cleanse Cuisine",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WBmvzNDfpwka3qT4",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KsbniUDZXuCoOxKg",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Light",
          "sourceId": "cVVZXNbV0nElVOPZ",
          "name": "Spell Effect: Light",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KsbniUDZXuCoOxKg",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 50,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kiI7wCXrpRbMuVx1",
          "name": "Fearless Rush",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "UNah0bxXxkcZjxO3",
          "sourceId": "UNah0bxXxkcZjxO3",
          "name": "Trample",
          "type": "action"
        },
        "owner": {
          "sourceId": "hURbkmFyDpndlfUW",
          "name": "Trample",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:concert-frog",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "bH0T5d1uXWVRCvbo",
      "slug": "concert-frog",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a9048a6703287d5dece6b1fd28ecdbd478ebd65944016e97918df275f3253b66",
    "translatableHash": "sha256:13bc5dee9fba6233fae8ceb4068c3dd3f9b285113d2baeb014f29a62c21cf210",
    "data": {
      "schemaVersion": 1,
      "name": "Concert Frog",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "These massive frogs store their eggs inside their stomach. When an egg hatches, the froglet crawls its way up into its parent's mouth to add its celebratory chirps and croaks to the family's song.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 13,
        "will": 16
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 6,
        "int": -4,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 16,
        "athletics": 16,
        "performance": 19,
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
          "id": "tzptdlJDAdhoM6mR",
          "name": "Jaws",
          "bonus": 18,
          "damage": "2d10+11 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "aWjYJL5Ev7eMHY9U",
          "name": "Croak",
          "bonus": 17,
          "damage": "2d8+9 sonic",
          "traits": [
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "8t5Ell1WdxVDU0DO",
          "name": "Conduct",
          "kind": "action",
          "description": "One of the froglets begins to sing, granting one of three effects to the concert frog and all allies within 60 feet until the beginning of the concert frog's next turn.\nEffect: Conduct\n• Red Grants a +10-foot status bonus to their Speeds.\n• Blue Grants a +1 status bonus to AC and Fortitude saving throws.\n• Yellow Allies gain a +1 status bonus to attack rolls and deal an additional 1d4 sonic damage on successful melee Strikes as their attacks resonate.",
          "traits": [
            "auditory",
            "mental",
            "primal"
          ]
        },
        {
          "id": "vVWCORwSeynpO42i",
          "name": "Three-Frog Orchestra",
          "kind": "passive",
          "description": "The concert frog has three froglets perched behind its lips, each of a different color. A creature can specifically target a froglet. If any froglets have died, the concert frog attempts a check (flat, dc:11) at the end of its turn; on a success, new froglets hatch in its stomach and emerge at the concert frog's lips.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 179,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Conduct",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Conduct",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Conduct",
          "sourceId": "I4C55X7AzchlF9FM",
          "name": "Effect: Conduct",
          "type": "effect"
        },
        "owner": {
          "sourceId": "8t5Ell1WdxVDU0DO",
          "name": "Conduct",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:decapod-dinghy",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "f0Xp9Z8UH2cRlvOT",
      "slug": "decapod-dinghy",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:385b067d5afb218408664f34a80258efae0d8c1e43c38da93710c4831c59dbbb",
    "translatableHash": "sha256:f60d68f63780371dd0664a3625b91983e5050c44db0f0b84d99edd9fbbe4ff99",
    "data": {
      "schemaVersion": 1,
      "name": "Decapod Dinghy",
      "level": 8,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "amphibious",
        "beast"
      ],
      "description": "Decapod dinghies are massive crabs indigenous to the Okaiyo Ocean that often assist the local humanoids with transportation. They can understand Thalassic and are instantly recognizable by the colorful anemones they carry on their backs and in their front claws. Athamarus and merfolk are common sights atop decapod dinghies, lounging comfortably amidst the anemones and sharing food with their hosts.\nThis peaceful cooperation is indirectly caused by the legendary crustacean Tehialai-Thief-Of-Ships. Since Tehialai's rampages are a constant threat in the Okaiyo, the ancestors of the decapod dinghies bonded with other marine life to survive. Decapod dinghies' relationship with anemones is particularly tight, using the small creatures as poisonous extensions of their own bodies and using their response to movements in the water to compensate for the decapod dinghy's otherwise poor vision. In a region wracked by Tehialai's storms, everyone needs to band together, after all.",
      "armorClass": 28,
      "hitPoints": 145,
      "speedFeet": 30,
      "perception": {
        "modifier": 16,
        "senses": [
          "tremorsense-imprecise-30",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 18,
        "reflex": 15,
        "will": 15
      },
      "abilities": {
        "str": 7,
        "dex": 3,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 15,
        "athletics": 18,
        "nature": 17,
        "stealth": 15
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [],
        "weaknesses": [
          "bludgeoning 5"
        ]
      },
      "attacks": [
        {
          "id": "pP0zwLMDcuHCYkvH",
          "name": "Claw",
          "bonus": 19,
          "damage": "2d8+7 slashing; 2d6 poison",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "dJa2aQsLdSBHrxmH",
          "name": "Tentacle",
          "bonus": 19,
          "damage": "5d6 poison",
          "traits": [
            "poison",
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "O4muO4pMRqQNB7QE",
          "name": "All Aboard",
          "kind": "passive",
          "description": "A decapod dinghy can carry up to 30 Bulk of creatures or unattended items on their back, such as five Medium creatures. The anemones' gentle hold on the passengers is sufficient in most situations, but while in combat, those passengers are Slowed 1 if they want to take other actions while remaining on the decapod dinghy's back.",
          "traits": []
        },
        {
          "id": "GAUIJvPlnsI5pN4c",
          "name": "Anemone Transport",
          "kind": "action",
          "description": "The decapod dinghy and all their willing passengers teleport to a patch of anemones within 10 miles large enough for the decapod dinghy to stand among them. Although the decapod dinghy doesn't need to see the location, they must have been there before. All creatures transported are temporarily immune to this ability for 24 hours.",
          "traits": [
            "primal",
            "teleportation"
          ]
        },
        {
          "id": "dd6MzxdoX8ORkN4U",
          "name": "Inflate Anemones",
          "kind": "action",
          "description": "The anemones on the decapod dinghy's back inflate, enveloping all passengers and giving each passenger a +2 circumstance bonus to AC until the beginning of the decapod dinghy's next turn.",
          "traits": []
        },
        {
          "id": "sCWcIy8BPHqQn7X0",
          "name": "Protect Passenger",
          "kind": "reaction",
          "description": "Trigger An enemy within 20 feet damages one of the decapod dinghy's passengers\nEffect The decapod dinghy's anemones lash out for a tentacle Strike against the triggering creature.",
          "traits": []
        },
        {
          "id": "dpFoseZUoXpa9zMt",
          "name": "Stinging Anemones",
          "kind": "action",
          "description": "The decapod dinghy's anemones sting any number of creatures they choose among passengers and those the decapod dinghy has Grabbed or Restrained. The stings deal 5d6 poison damage (check (fortitude, dc:26, basic)). On a failed save, that creature is also Enfeebled 2 for 1 hour.",
          "traits": [
            "poison"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 243,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "O4muO4pMRqQNB7QE",
          "name": "All Aboard",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 125,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dpFoseZUoXpa9zMt",
          "name": "Stinging Anemones",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 179,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dpFoseZUoXpa9zMt",
          "name": "Stinging Anemones",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 351,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dpFoseZUoXpa9zMt",
          "name": "Stinging Anemones",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:hexmoth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "fursHtUvfJ7gkmky",
      "slug": "hexmoth",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7f65821f4ddde40713ecb72c2afd6d6539e6f6936ff3a6fac5400857259bec0c",
    "translatableHash": "sha256:94a2caf361788cf02f8ad759d98d5844c40335ba06cf10fa6e9e6effec706dd9",
    "data": {
      "schemaVersion": 1,
      "name": "Hexmoth",
      "level": 8,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal"
      ],
      "description": "A hexworm, upon consuming a sufficient quantity of magic, will spin a cocoon of magically infused silk, metamorphosing into its imago form.",
      "armorClass": 27,
      "hitPoints": 105,
      "speedFeet": 20,
      "perception": {
        "modifier": 19,
        "senses": []
      },
      "saves": {
        "fortitude": 19,
        "reflex": 16,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 6,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 16,
        "arcana": 18,
        "stealth": 14
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "spells 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Exy3iJU0IJzGl7Zq",
          "name": "Proboscis",
          "bonus": 13,
          "damage": "2d10+9 piercing",
          "traits": []
        },
        {
          "id": "rb60bIKDXKKF9YWR",
          "name": "Hexbolt",
          "bonus": 13,
          "damage": "2d8+6 untyped",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "bcKDmxNVReaEpTdA",
          "name": "Arcanosense",
          "kind": "passive",
          "description": "A hexmoth can sense sources of magic at the listed range as though it has a 4th-rank Detect Magic constant innate spell.",
          "traits": []
        },
        {
          "id": "dwWFsfMWeXI2jIJr",
          "name": "Advanced Arcanovore",
          "kind": "passive",
          "description": "A hexmoth has resistance 10 against all damage caused by spells. It's immune to one type of energy it consumed most as a hexworm, typically acid, cold, electricity, fire, or sonic.",
          "traits": []
        },
        {
          "id": "Ua8oTkrC5K1ndhsu",
          "name": "Arcane Consumption",
          "kind": "action",
          "description": "The hexmoth attempts to consume the magic of an adjacent magical effect or unattended magic item. It attempts a counteract check against the target with a +16 modifier. On a success, the magical effect ends. A magic item instead becomes a mundane item for 1 round. The hexmoth gains 2d8 healing Hit Points.",
          "traits": []
        },
        {
          "id": "VA9TdUI8uJQGwOOF",
          "name": "Arcanotaxis",
          "kind": "passive",
          "description": "Requirements The hexmoth has detected a source of magic with its arcanosense\nTrigger The hexmoth's turn begins\nEffect The hexmoth Flies or Strides up to its Speed toward the nearest source of magic it can detect.",
          "traits": []
        },
        {
          "id": "TRsQQLZDoflPQM4T",
          "name": "Hexdust Wind",
          "kind": "action",
          "description": "With a few fierce wingbeats, the hexmoth expels magical scale dust in a 30-foot cone. This deals 10d6 untyped damage of the type to which the hexmoth is immune (check (fortitude, dc:23, basic, options:area-effect) save). It can't use Hexdust Wind again for 1d4.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 88,
        "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Detect Magic",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bcKDmxNVReaEpTdA",
          "name": "Arcanosense",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:mammoth-land-star",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "vimDrfh4L7QJnmne",
      "slug": "mammoth-land-star",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2b55d582a0171db1b8cedf243ac1fc75524b707992f9d0a13e37c92ecfc68d96",
    "translatableHash": "sha256:32eab4baafceb86d0dc8e277937b06e02b659fbebc1cd7f5f1bd4ce2809fa3d6",
    "data": {
      "schemaVersion": 1,
      "name": "Mammoth Land Star",
      "level": 8,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "mindless"
      ],
      "description": "Mammoth land stars are unrelenting predators that move silently towards their potential meals on hundreds of tubular feet. There are several variations, but the most common have a diameter ranging from 8 to 12 feet and five total limbs. These mindless creatures weather any and all challenges in their hunt to devour their prey, using their superior sense of smell and keen observation of nearby movement to stalk prey from afar. Their paralytic venom and rapid digestive process spell a quick end for unsuspecting creatures caught in their grasp.\nTravelers who survive a mammoth land star's assault must take care to destroy the remains, as its regenerative ability will eventually revive it to continue its mission: feed. It is not uncommon for mammoth land star attacks to happen in succession one week after another, with greater numbers each time. This is often caused by leaving limbs to regrow and resume their initial attack.",
      "armorClass": 26,
      "hitPoints": 100,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "scent-100",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 19,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 6,
        "int": -5,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "athletics": 16,
        "stealth": 15,
        "survival": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "E92966nW4Esk7jDi",
          "name": "Feet",
          "bonus": 20,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "reach-10"
          ]
        },
        {
          "id": "CA68rsSG7WvYMyBu",
          "name": "Limb Spines",
          "bonus": 20,
          "damage": "2d8+6 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "oFNlkxcxCkaV0ITr",
          "name": "Regeneration 20 (reduced by 4 for each missing limb)",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "su08qYwM1EZB8BNV",
          "name": "Limb Regrowth",
          "kind": "passive",
          "description": "A healthy mammoth land star typically has five limbs. A creature can sever a limb by targeting it and dealing damage equal to the limb's Hit Points. The mammoth land star can regrow a missing limb over the course of 24 hours.\nEffect: Mammoth Land Star Limbs",
          "traits": []
        },
        {
          "id": "cPXzKyloAQRiS69B",
          "name": "Limbs",
          "kind": "passive",
          "description": "HP(limb) 25, regrowth; Immunities mental",
          "traits": []
        },
        {
          "id": "PcbvgtJAmPJMUMi0",
          "name": "Regrowth",
          "kind": "passive",
          "description": "Whenever a limb is severed, it must attempt a check (flat, dc:5). On a success, the limb will slowly begin to grow into a new mammoth land star over the course of a week, unless it is doused in acid or fire.",
          "traits": []
        },
        {
          "id": "5g4IJLaMtEhPW6ra",
          "name": "Detach",
          "kind": "action",
          "description": "Requirements The mammoth land star falls below half its total Hit Points\nEffect The mammoth land star severs one of its own limbs as a distraction, then Strides three times. This movement doesn't trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "fTN4TsTSO1TZ0TDT",
          "name": "Digest",
          "kind": "action",
          "description": "Requirements The mammoth land star has a target Grabbed\nEffect The mammoth land star extrudes its stomach onto its prey and digests it alive. The target takes 2d12+6 acid damage and is Drained 1.",
          "traits": []
        },
        {
          "id": "CD5zD0yBK4gwgKyE",
          "name": "Glide",
          "kind": "action",
          "description": "The land star blows air through its feet to hover 1 foot in the air and Strides twice with a +5-foot circumstance bonus to Speed, ignoring uneven ground and difficult terrain below it.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "qBZJ1ZbM6jBcfV4L",
          "name": "Pry",
          "kind": "action",
          "description": "Requirements The mammoth land star has a target Grabbed that is wearing armor\nEffect The mammoth land star makes a feet Strike against a creature it has grabbed. If that Strike hits and the creature is wearing armor with Hardness 12 or lower, the armor is broken. This Strike doesn't further damage armor that's already broken.",
          "traits": []
        },
        {
          "id": "9WlgMEC7dF3Vx1de",
          "name": "Spiny Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:26)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage and Slowed 1\nStage 2 2d6 poison damage and Slowed 2\nStage 3 2d8 poison damage and Paralyzed",
          "traits": [
            "incapacitation",
            "poison"
          ]
        },
        {
          "id": "4MFeo5zTaOyVe6m8",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Dby3ecpqPheBrgnT",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Dby3ecpqPheBrgnT",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Dby3ecpqPheBrgnT",
          "sourceId": "Dby3ecpqPheBrgnT",
          "name": "Effect: Mammoth Land Star Limbs",
          "type": "effect"
        },
        "owner": {
          "sourceId": "6Typ7XPcNRs2tSi3",
          "name": "Effect: Mammoth Land Star Limbs",
          "type": "effect"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 68,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qBZJ1ZbM6jBcfV4L",
          "name": "Pry",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 164,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9WlgMEC7dF3Vx1de",
          "name": "Spiny Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 281,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9WlgMEC7dF3Vx1de",
          "name": "Spiny Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 398,
        "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Paralyzed",
          "sourceId": "6uEgoh53GbXuHpTF",
          "name": "Paralyzed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9WlgMEC7dF3Vx1de",
          "name": "Spiny Venom",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "4MFeo5zTaOyVe6m8",
          "name": "Grab",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.lR9R5Vld8Eu2Dha5",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.lR9R5Vld8Eu2Dha5",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "lR9R5Vld8Eu2Dha5",
          "sourceId": "lR9R5Vld8Eu2Dha5",
          "name": "Regeneration",
          "type": "action"
        },
        "owner": {
          "sourceId": "oFNlkxcxCkaV0ITr",
          "name": "Regeneration 20 (reduced by 4 for each missing limb)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 236,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Mammoth Land Star Limbs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Mammoth Land Star Limbs",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Mammoth Land Star Limbs",
          "sourceId": "Dby3ecpqPheBrgnT",
          "name": "Effect: Mammoth Land Star Limbs",
          "type": "effect"
        },
        "owner": {
          "sourceId": "su08qYwM1EZB8BNV",
          "name": "Limb Regrowth",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 68,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "fTN4TsTSO1TZ0TDT",
          "name": "Digest",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 289,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "fTN4TsTSO1TZ0TDT",
          "name": "Digest",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:stargut-hydra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "4UWIFQn7WLOMoKEY",
      "slug": "stargut-hydra",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:79a84f30ff097af2b1b007637c0273398b77c531a6a4e26401600382d71d4974",
    "translatableHash": "sha256:c589355405875f2185c4e6391fe42289835e1c760a4731d3616a46cd8139d869",
    "data": {
      "schemaVersion": 1,
      "name": "Stargut Hydra",
      "level": 9,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "The most commonly seen hydra famously has five heads that it uses in unison to attack prey or assailants. Scattered across the Inner Sea region are more fantastical breeds of the beast, each with their own curious evolution and hunting behavior.\nWhile naturally carnivorous, the adaptable nature of hydras has led to an interesting divergence in the species and its preferred diet. The hydra population of Numeria, where organic prey is scarce, has developed the ability to digest stones and metal alloys. Those that strike upon a vein of skymetal for a meal can be forever changed by its properties, leading to a wide range of potential variations. As skymetal is a cornerstone of Numerian society, stargut hydras are treated in much the same way farmers view a swarm of corn weevils. The Black Sovereign Kevoth Kul offers a substantial standing bounty for the deaths of these creatures, in addition to purchasing whatever ore can be retrieved from their stomachs before it is digested.",
      "armorClass": 27,
      "hitPoints": 150,
      "speedFeet": 25,
      "perception": {
        "modifier": 19,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 18,
        "will": 14
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 6,
        "int": -3,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 20,
        "stealth": 18,
        "survival": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wsP3oaPtQKGwFMy2",
          "name": "Jaws",
          "bonus": 21,
          "damage": "2d8+8 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "kind": "passive",
          "description": "Each stargut hydra has at least one metamorphosis resulting from consuming a specific skymetal and internalizing its properties. If you give a stargut hydra more than one metamorphosis, you should consider increasing its level and changing its statistics.\nAdamantine The stargut hydra's Strikes bypass Hardness and are treated as adamantine. The stargut hydra gains resistance 10 to physical damage (except adamantine).\nAbysium (aura, poison) The stargut hydra emits an aura of nauseating radiation from the abysium in its body. Any creature that begins its turn within 30 feet of the stargut hydra is Sickened 1.\nDjezet (magical) The stargut hydra gains a +2 status bonus to saves against magic.\nInubrix The stargut hydra's Strikes ignore resistance to damage from metal armor's armor specialization effects and do not trigger the Shield Block reaction or reactions from armor property runes.\nNoqual The stargut hydra's Strikes and abilities gain a +2 status bonus to damage against creatures with the ability to Cast a Spell.\nOrichalcum When the stargut hydra has only two heads remaining, it is Quickened. It can use the extra action only to Stride or Strike.\nSiccatite After the stargut hydra takes fire damage, it becomes superheated, gaining immunity to fire and weakness 10 to cold. While superheated, cold damage can be used to cauterize a stump. After the stargut hydra takes cold damage, it becomes chilled, gaining immunity to cold and weakness 10 to fire.",
          "traits": []
        },
        {
          "id": "tcPFdSI3zPH0G6xz",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "LRRRKeQoeeCxpZFC",
          "name": "Hydra Regeneration",
          "kind": "passive",
          "description": "The stargut hydra has regeneration equal to 3 × the number of heads it has. If a hydra's body is missing any heads and the remaining stumps have not been cauterized, the hydra attempts a check (fortitude, immutable:true, dc:29) save after it regains Hit Points from regeneration. On a success, one uncauterized stump regrows two heads; on a critical success, two uncauterized stumps regrow into two heads each. The hydra can never grow more than double the number of heads it ordinarily has. The hydra's regeneration only fully deactivates if all its heads are severed and all stumps are cauterized, at which point it dies.",
          "traits": []
        },
        {
          "id": "vFIurAInqp3GyBPZ",
          "name": "Head Regrowth",
          "kind": "passive",
          "description": "A stargut hydra ordinarily has five heads. A creature can attempt to sever one of the hydra's heads by specifically targeting it and dealing damage equal to the head's Hit Points. A head that is not completely severed returns to full Hit Points at the end of any creature's turn. A hydra can regrow a severed head using hydra regeneration. A creature can prevent this regrowth by dealing acid or fire damage to the stump, cauterizing it. Single-target acid or fire effects need to be targeted at a specific stump, but effects that deal splash damage or affect areas covering the hydra's whole space cauterize all stumps if they deal acid or fire damage. If the attack that severs a head deals any acid or fire damage, the stump is cauterized instantly. If all five heads are cauterized, the hydra dies.\nEffect: Hydra Heads",
          "traits": []
        },
        {
          "id": "sY0gmlsyxj94fplt",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A stargut hydra gains an extra reaction per round for each of its heads beyond the first, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the hydra must use a different head for each Reactive Strike it makes. Whenever one of the hydra's heads is severed, the hydra loses 1 of its extra reactions per round.",
          "traits": []
        },
        {
          "id": "7bhoVWzRDiprd29X",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "MoCJXacpG1DfUnq0",
          "name": "Stargut Hydra Heads",
          "kind": "passive",
          "description": "HP (head) 22, head regrowth\nImmunities area damage\nWeaknesses slashing 10",
          "traits": []
        },
        {
          "id": "7Zuc7c1bOXD3I5JL",
          "name": "Vomit Meteorites",
          "kind": "action",
          "description": "The stargut hydra lurches its entire body, spewing forth chunks of meteorite in a 30-foot cone that deal 5d6 bludgeoning damage to all creatures in the area (check (reflex, dc:25, basic, options:area-effect)). The area becomes difficult terrain for 1 minute, though a creature can use an Interact action to clear one square of the rubble. The stargut hydra can't Vomit Meteorites for 1d4.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "uZJOdounIHaFDC1t",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "kivHkiHcmbAgdym2",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 274,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Adamantine)",
        "label": "Adamantine",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Adamantine)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Adamantine)",
          "sourceId": "Bds5RP9grJxhZALW",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Adamantine)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 576,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Abysium)",
        "label": "Abysium",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Abysium)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Abysium)",
          "sourceId": "lFRU108HnGlnMwqS",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Abysium)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 878,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 958,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Djezet)",
        "label": "Djezet",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Djezet)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Djezet)",
          "sourceId": "N4l6y6v9pKy8Nj5i",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Djezet)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1175,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Inubrix)",
        "label": "Inubrix",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Inubrix)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Inubrix)",
          "sourceId": "5bRdhgghjtWF1Vuu",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Inubrix)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1507,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Noqual)",
        "label": "Noqual",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Noqual)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Noqual)",
          "sourceId": "sTlptNnUX2eA0DIH",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Noqual)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1775,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Orichalcum)",
        "label": "Orichalcum",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Orichalcum)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Orichalcum)",
          "sourceId": "6Z0v9Tsthm9hyzb3",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Orichalcum)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1968,
        "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Quickened",
          "sourceId": "nlCjDvLMf2EkV2dl",
          "name": "Quickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 2091,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Siccatite)",
        "label": "Siccatite",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Stargut Hydra) Skymetal Metamorphosis (Siccatite)",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Stargut Hydra) Skymetal Metamorphosis (Siccatite)",
          "sourceId": "SXJRjw4R8m7NPDGc",
          "name": "(Stargut Hydra) Skymetal Metamorphosis (Siccatite)",
          "type": "action"
        },
        "owner": {
          "sourceId": "WpApOWeV9Yy8hi6U",
          "name": "Skymetal Metamorphosis",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "tcPFdSI3zPH0G6xz",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 813,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Hydra Heads",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vFIurAInqp3GyBPZ",
          "name": "Head Regrowth",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "7bhoVWzRDiprd29X",
          "name": "Reactive Strike",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:soniphak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "bu6iSeOO5ho0IIRS",
      "slug": "soniphak",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6a5066a2c9a3a44b0f4770822d6207dc45945c80af9bf729878cc1a0e4005a59",
    "translatableHash": "sha256:775af497aef99ccc212e8cbd95c29b93e54ae0c277ff6ea404b32252b0986348",
    "data": {
      "schemaVersion": 1,
      "name": "Soniphak",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "Dischorans are a group of predators who hunt via focused sound. Though they possess protuberances that resemble eyes, these are actually auditory sensory organs that can pick up even the slightest sound and are used to locate prey with pinpoint accuracy.\nOnly a few types of dischorans have been identified, but they all share unifying features: front-facing pseudo-eyes, deceptive speed, and ravenous hunger. Their sensitivity to noise combined with their ability to weaponize sound are likely the primary reasons dischorans spend most of their time alone.\nOften mistaken for drakes, soniphaks glide above rocky or barren ground, picking out prey with their hearing. A hunting soniphak disables its targets with concentrated bursts of sound before snatching them up and feasting on the move. Despite being able to speak, soniphaks are no more social than other dischorans, generally responding to even the quietest attempts at communication with destructive shouting.",
      "armorClass": 27,
      "hitPoints": 180,
      "speedFeet": 20,
      "perception": {
        "modifier": 21,
        "senses": [
          "echolocation-120"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 21,
        "will": 15
      },
      "abilities": {
        "str": 7,
        "dex": 6,
        "con": 4,
        "int": -2,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 19,
        "athletics": 20,
        "survival": 17
      },
      "languages": [
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "sonic 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "f3JxqruImVqGJps0",
          "name": "Jaws",
          "bonus": 19,
          "damage": "3d8+9 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "AOihw0udHrMNIBfN",
          "name": "Claw",
          "bonus": 19,
          "damage": "3d6+9 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "JCPmNxXQxLCGyHNm",
          "name": "Screech",
          "bonus": 19,
          "damage": "6d6 sonic",
          "traits": [
            "sonic"
          ]
        }
      ],
      "actions": [
        {
          "id": "F3A1wbRFUhHW7CqK",
          "name": "Sensitive Echolocation",
          "kind": "passive",
          "description": "The soniphak can use its hearing as a precise sense with the listed range. If the soniphak takes sonic damage beyond its resistance, its senses are overloaded and all creatures are Concealed from it for 1 round.",
          "traits": []
        },
        {
          "id": "ELLDkkqDHf5Yl8lp",
          "name": "Snatch",
          "kind": "passive",
          "description": "The soniphak can Fly at half Speed with a creature Grabbed or Restrained in its claws, carrying that creature along with it.",
          "traits": []
        },
        {
          "id": "GBUlcSToBzMlWQnF",
          "name": "Aftershock",
          "kind": "passive",
          "description": "Whenever a soniphak hits with a screech Strike, feedback deals each creature the soniphak has Grabbed or Restrained 1d6 sonic damage.",
          "traits": []
        },
        {
          "id": "D6TybuaAzhYJfP2K",
          "name": "Disruptive Screech",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet of the soniphak uses an auditory action\nEffect The soniphak makes a screech Strike against the triggering creature. This disrupts a triggering concentrate action if the Strike is a critical hit.",
          "traits": []
        },
        {
          "id": "sMs1a1cLWNZ7JWYx",
          "name": "Shattering Scream",
          "kind": "action",
          "description": "The soniphak can focus its screech at a stone or rock surface within 60 feet to create an explosion in a 15-foot burst from the point of impact. Creatures in the area take 5d6 piercing damage (check (reflex, dc:28, basic, options:area-effect) save), and the area becomes difficult terrain due to fragments of loose stone.",
          "traits": [
            "sonic"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 184,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "F3A1wbRFUhHW7CqK",
          "name": "Sensitive Echolocation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 54,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ELLDkkqDHf5Yl8lp",
          "name": "Snatch",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 108,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ELLDkkqDHf5Yl8lp",
          "name": "Snatch",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 97,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "GBUlcSToBzMlWQnF",
          "name": "Aftershock",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 151,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "GBUlcSToBzMlWQnF",
          "name": "Aftershock",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:giant-tardigrade",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "K7v1B9PG2wag1Diz",
      "slug": "giant-tardigrade",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5d4e5cb573975a345c110927c8fcaf6e46d28660216c1a2bf74aaa66f96c2330",
    "translatableHash": "sha256:d32ed1a0963f10a3a7178c6db83cbe02334330c657e4f501097e52f1a687dacb",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Tardigrade",
      "level": 9,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "amphibious",
        "animal"
      ],
      "description": "Tardigrades grow no larger than the width of a hair, but when their riverside environments are exposed to heightened levels of magic, these eight-legged omnivores can grow to tremendous sizes.",
      "armorClass": 23,
      "hitPoints": 120,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 23,
        "reflex": 16,
        "will": 16
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 6,
        "int": -5,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 19,
        "stealth": 14,
        "survival": 18
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "all-damage 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "dbknkUzLYQLHIWty",
          "name": "Stylet",
          "bonus": 19,
          "damage": "3d8+6 piercing; 1d8 bleed",
          "traits": []
        },
        {
          "id": "IfCBRGZRP11iICkO",
          "name": "Claws",
          "bonus": 19,
          "damage": "3d6+6 slashing",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "yKi8mo3zVgSwfhPk",
          "name": "Eyespots",
          "kind": "passive",
          "description": "A giant tardigrade can't see anything beyond 30 feet.",
          "traits": []
        },
        {
          "id": "t1gkQiBthXezL85x",
          "name": "Tun State",
          "kind": "passive",
          "description": "Trigger The tardigrade would be reduced to 0 Hit Points or would die due to starvation, suffocation, or similar environmental causes\nFrequency once per week\nRequirements The tardigrade isn't already in tun state\nEffect The giant tardigrade doesn't die but instead remains at 1 Hit Point and curls into a dry ball, called a tun. While in this tun state, the giant tardigrade is Unconscious, doesn't need to eat, drink, or breathe, and doubles its resistance to 20. It remains in tun state indefinitely until covered in significant amounts of water, at which point it begins to rehydrate, gaining regeneration 5. The regeneration persists until it reaches maximum Hit Points. The giant tardigrade then exits its tun state.",
          "traits": []
        },
        {
          "id": "zanTwx7iAQUEbNpS",
          "name": "Vacuum Mouth",
          "kind": "action",
          "description": "Requirements The giant tardigrade doesn't have a target Grabbed\nEffect The giant tardigrade draws in air with its mouth. All creatures in a 20-foot cone must succeed at a check (reflex, dc:25) save or be pulled adjacent to the giant tardigrade. The tardigrade chooses one creature that failed its save, Grabbing the target in its claws and making a stylet Strike.",
          "traits": []
        },
        {
          "id": "Kz5MAYhdulsMjRzv",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 476,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "t1gkQiBthXezL85x",
          "name": "Tun State",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/system/rules/1/uuid",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "t1gkQiBthXezL85x",
          "name": "Tun State",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 76,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zanTwx7iAQUEbNpS",
          "name": "Vacuum Mouth",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "Kz5MAYhdulsMjRzv",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:therizinosaurus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "oEsLvPz5woEJ4Z3p",
      "slug": "therizinosaurus",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c64187394d3c2cd5702ea31a8a8af5a6ae09215d0f5d1a14adb8c2746520a61a",
    "translatableHash": "sha256:541f9a600d06cb27dff298c902998a7f69b0b711875d67a8fa4de553a5ee1bf4",
    "data": {
      "schemaVersion": 1,
      "name": "Therizinosaurus",
      "level": 9,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "At first glance, the therizinosaurus, with its rotund, feathered body and bird-like beak, strikes many observers as almost comical. This impression tends to quickly fade at the sight of the creature's claws, six wicked, scythelike blades capable of disemboweling a foe with a single well-placed slash. Despite their intimidating appearance, these enormous claws are used primarily to separate tasty leaves and branches from the tops of the tall trees upon which the therizinosaurus feeds. Nonetheless, travelers through a therizinosaurus's territory are wisely advised to give the creature a wide berth, less they wind up on the wrong end of its notoriously foul temper.",
      "armorClass": 27,
      "hitPoints": 210,
      "speedFeet": 35,
      "perception": {
        "modifier": 18,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 16,
        "will": 16
      },
      "abilities": {
        "str": 7,
        "dex": 0,
        "con": 6,
        "int": -4,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 20,
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
          "id": "epLxliO4mzDfIffi",
          "name": "Claw",
          "bonus": 21,
          "damage": "2d12+7 slashing",
          "traits": [
            "reach-20",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "fmnvGP7coWwgi0Pv",
          "name": "Stomp Pests",
          "kind": "action",
          "description": "The therizinosaurus stomps about, dealing 5d8 bludgeoning damage (check (reflex, dc:28, basic) save) to each adjacent creature. Large or smaller creatures who fail their save are also knocked Prone.",
          "traits": []
        },
        {
          "id": "FZbkZYEUVtBk8Mcx",
          "name": "Swiping Claws",
          "kind": "action",
          "description": "The therizinosaurus makes two claw Strikes against different targets. Both attacks count toward its multiple attack penalty, but do not increase the penalty until it has made both attacks.",
          "traits": []
        },
        {
          "id": "zSVB7lKCzd3EnT8E",
          "name": "Winnowing Claws",
          "kind": "passive",
          "description": "Whenever the therizinosaurus successfully Strikes a Large or smaller creature with its claw, it pulls that creature 5 feet toward it (10 feet on a critical hit).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 203,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "fmnvGP7coWwgi0Pv",
          "name": "Stomp Pests",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:chaos-falcon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "DijQ9ujoBeVZBdNB",
      "slug": "chaos-falcon",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:37c83415804ec1b08d820d7208ad3c68c28c8982159fd2ce615cff5bf05f45b3",
    "translatableHash": "sha256:8218c556f8c25bab529f82ad5f6531e5cf224fe9264780ae0c9331fc4826e106",
    "data": {
      "schemaVersion": 1,
      "name": "Chaos Falcon",
      "level": 10,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "air",
        "beast",
        "electricity",
        "fire",
        "water"
      ],
      "description": "The extreme weather that gives birth to chaos falcons grants them a mix of abilities not found in other elemental birds. To them, lightning is as natural as fire and heat as comfortable as cold. The variability of their attacks makes them dangerous, even for the well prepared.\nLike their elemental cousins, chaos falcons are often the harbingers of storms. They're also seen as omens of volcanic activity, as they will travel across great distances to play and dance in the resulting eruption. Between this association and their tendency to rain both fire and ice, their presence is considered dangerous by nearby settlements.\nFortunately, chaos falcons are solitary birds that prefer to stay away from the noise of civilization. They nest in volcanic vents or areas with geothermal activity, relying on the heat of the earth to incubate their eggs while hunting in the wilderness nearby. Unless their peace is disrupted or their safety threatened, they're unlikely to attack creatures that move through their habitat.",
      "armorClass": 29,
      "hitPoints": 180,
      "speedFeet": 25,
      "perception": {
        "modifier": 18,
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
        "str": 5,
        "dex": 7,
        "con": 3,
        "int": 4,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 19,
        "nature": 19,
        "stealth": 19
      },
      "languages": [
        "common",
        "sussuran"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 10",
          "electricity 10",
          "cold 10"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5MR5AuUCs3eO5Zql",
          "name": "Beak",
          "bonus": 21,
          "damage": "3d10+10 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "p5k5p4UMeBR4dz2q",
          "name": "Talon",
          "bonus": 21,
          "damage": "3d6+10 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "AhdMkfthLUkAIfEi",
          "name": "Bolt",
          "bonus": 23,
          "damage": "6d6 untyped",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "u06jlFoOhZZGOwBk",
          "name": "Storm Bolt",
          "kind": "passive",
          "description": "The chaos falcon's bolt Strike always deals the damage type of their storm nexus aura.",
          "traits": []
        },
        {
          "id": "r4bPsbpazbrt1Ign",
          "name": "Stormsight",
          "kind": "passive",
          "description": "Wind, precipitation, and clouds don't impair a chaos falcon's vision; they ignore the Concealed condition from storms, mist, precipitation, and the like.",
          "traits": []
        },
        {
          "id": "q7YzgrwG28M1FPS5",
          "name": "Dive-bomb",
          "kind": "action",
          "description": "Requirements The chaos falcon is Flying\nEffect The chaos falcon Flies twice straight down. If they reach the ground or a similarly solid object at the end of this movement, their landing shatters that surface into sharp shards and droplets of molten stone deal 4d6 fire damage damage (check (reflex, dc:26, basic, options:area-effect) save) to all other creatures within 20-foot emanation.",
          "traits": [
            "earth",
            "fire",
            "primal"
          ]
        },
        {
          "id": "KNTmNvXUd4b54Ezg",
          "name": "Flash Storm",
          "kind": "action",
          "description": "Water condenses around the ash particles in the chaos falcon's 15-foot aura, pelting everything beneath it with driving rain. Creatures in that area must succeed at a check (reflex, dc:26, options:area-effect,forced-movement,inflicts:prone) save or be pushed 20 feet down, falling Prone if they start or end this movement on the ground.",
          "traits": [
            "air",
            "primal",
            "water"
          ]
        },
        {
          "id": "xb2XYGog1r8YfKUi",
          "name": "Storm Nexus",
          "kind": "passive",
          "description": "15 feet. 3d6 untyped damage, check (reflex, dc:26, basic, options:area-effect) save. The chaos falcon is surrounded by a cloud of volcanic ash, lightning arcing within the cloud as it glows hot in some areas and collects ice in others. A chaos falcon can change the damage type of this aura to cold, electricity, or fire as an action, which has the concentrate trait.",
          "traits": [
            "aura",
            "primal"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 89,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "r4bPsbpazbrt1Ign",
          "name": "Stormsight",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 282,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "KNTmNvXUd4b54Ezg",
          "name": "Flash Storm",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:helicoprion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "INzhFMFeyJDlIdFR",
      "slug": "helicoprion",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dd53a61f3992974c8e960c91d0b2ae5195afc4ae9d0df44db4eaafc941fd3a2d",
    "translatableHash": "sha256:4b2d1e65bd3df10b3dc07333de88c52092d0ed2ab9086c7d5c7a8ba413a7d362",
    "data": {
      "schemaVersion": 1,
      "name": "Helicoprion",
      "level": 10,
      "rarity": "uncommon",
      "size": "gargantuan",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "Numerous species of sharks make their homes in the ocean's depths, rarely encountered by land-dwellers.\nThough not a true shark, the helicoprion belongs to a similar lineage of cartilaginous fishes. The predator's most striking feature is its tooth whorls, which spiral outward in its lower jaw.",
      "armorClass": 28,
      "hitPoints": 230,
      "speedFeet": 0,
      "perception": {
        "modifier": 21,
        "senses": [
          "scent-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 19,
        "will": 16
      },
      "abilities": {
        "str": 8,
        "dex": 3,
        "con": 6,
        "int": -4,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 24,
        "stealth": 17,
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
          "id": "fKDKMJtOFcpWNega",
          "name": "Jaws",
          "bonus": 22,
          "damage": "2d10+12 slashing; 1d8 bleed",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "sfQRtdBAWJHTnJV2",
          "name": "Blood Scent",
          "kind": "passive",
          "description": "The helicoprion can smell blood in the water from up to 1 mile away.",
          "traits": []
        },
        {
          "id": "gs4TQWASo5vkCAmm",
          "name": "Deshell",
          "kind": "action",
          "description": "Requirements A creature is Grabbed or Restrained in the helicoprion's jaws\nEffect The shark rips into the creature dealing 3d10 slashing damage (check (reflex, dc:26, basic) save).",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "hA8CZfGS5qACaEHn",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, 2d10+10 bludgeoning damage, Rupture 22",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "BFqQeN3zNAOEAUfI",
          "name": "Improved Grab",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 47,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gs4TQWASo5vkCAmm",
          "name": "Deshell",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 101,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gs4TQWASo5vkCAmm",
          "name": "Deshell",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "hA8CZfGS5qACaEHn",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "i18TlebMzwONyPhI",
          "sourceId": "i18TlebMzwONyPhI",
          "name": "Improved Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "BFqQeN3zNAOEAUfI",
          "name": "Improved Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:vibrant-pup-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "anyIh7T5RKBjYTc3",
      "slug": "vibrant-pup-swarm",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a83ab68da835295bbaf85801485da7f0baf5eda1771efdef7b4a51a3211384e5",
    "translatableHash": "sha256:7910c3a3a363a7a814374722de0a975a06630c4794aa943c57a81debf47837ab",
    "data": {
      "schemaVersion": 1,
      "name": "Vibrant Pup Swarm",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "These tenacious little rodents travel in massive swarms across the desert, using the sun both as shield and sword during their long marches. Unlike other rodents, vibrant pups are eusocial, causing them to behave more like insects than other rodents. Only the queen can reproduce, and is fiercely protected for that reason. This social structure enables them to viciously attack and act as a single unit. Each of the pups also have specific roles within the family and the swarm. The worker pups gather and dig while in a den, but will act as a shield to protect the more valuable fighter pups while swarming.\nVibrant pups spend most of their lives underground, digging out elaborate tunnels in search for food. However, in the harsh deserts of Thuvia, food can be scarce. A family of vibrant pups will abandon their dens and set out on harsh multiday journeys in search of land that can sustain the queen long enough to have another litter of pups. These journeys can happen up to three times a year, following seasonal changes in resources. Outside of these local migrations, swarms will leave their dens only to repel a massive threat to the queen.\nVibrant pups have unusual and beautiful anatomical features. Their skin, while soft, is extremely reflective, which serves a dual purpose for the rodents since it can both reflect the harsh sun away to better thermoregulate as well as focus those rays toward threats, especially when multiple pups work in unison. The glinting of a pup swarm in migration can be seen from afar—rather than inviting challenges, this obvious display signals would-be predators to steer clear.\nAs of late, their reflective, soft skin has become quite fashionable in wealthy circles. While hunting such small creatures for their pelts is extremely impractical and dangerous, the high price tag has led to more frequent hunts. While these rodents do serve a unique ecological niche, many farmers are more than happy to rid their fields of these voracious eaters and will often point out nearby hives to local hunters.",
      "armorClass": 29,
      "hitPoints": 140,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "tremorsense-60"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": -2,
        "dex": 7,
        "con": 5,
        "int": -5,
        "wis": 5,
        "cha": -4
      },
      "skills": {
        "athletics": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 5",
          "piercing 10",
          "slashing 10"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "cuy3IgZ93Vnm8vNh",
          "name": "Feel No Pain",
          "kind": "reaction",
          "description": "Trigger The vibrant pup swarm is critically hit by a Strike\nEffect The worker pups become insensitive to pain and leap to the front. The swarm gains 10 temporary Hit Points that last for 1 round.",
          "traits": []
        },
        {
          "id": "lezQSO0htwcgHmIZ",
          "name": "Reflective Skin",
          "kind": "passive",
          "description": "10 feet. Other creatures in the aura are Dazzled. The aura automatically activates when the swarm is in bright light and deactivates in dim light or darkness.",
          "traits": [
            "aura",
            "light",
            "visual"
          ]
        },
        {
          "id": "q3FDvNCaWX2X7VEI",
          "name": "Focused Reflection",
          "kind": "action",
          "description": "Requirements The vibrant pup swarm is in bright light\nEffect The swarm simultaneously turns to focus the light in an arcing beam, dealing 6d12 fire damage to all creatures in a 30-foot cone (check (reflex, dc:30, basic, options:area-effect) save). A creature that fails its save is also Blinded for 1 round (or 1 minute on a critical failure). The swarm can't use Focused Reflection again for 1d4.",
          "traits": [
            "fire",
            "light"
          ]
        },
        {
          "id": "T2BEVw72KQFJGSNY",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d6 piercing damage (check (reflex, dc:30, basic, options:area-effect) save).",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 44,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "lezQSO0htwcgHmIZ",
          "name": "Reflective Skin",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 380,
        "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Blinded",
          "sourceId": "XgEqL1kFApUbl5Z2",
          "name": "Blinded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "q3FDvNCaWX2X7VEI",
          "name": "Focused Reflection",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:sky-fisher",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "DiU1sOTZHKbSQoKD",
      "slug": "sky-fisher",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fb3f1dcc93b93bae19f78bb4791166f2cc9e8a61e3d599a662bfe194edd0e603",
    "translatableHash": "sha256:b2d6305ddc45ae08bdca64f9291d46e7cdb2cbe59b95df2b02eb5069ffece283",
    "data": {
      "schemaVersion": 1,
      "name": "Sky Fisher",
      "level": 11,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "The sky fisher is an unusual aerial predator, mostly found in tropical jungle regions but occasionally seen as far north as Varisia. Naturalists believe it's a distant relative of the jellyfish that has evolved into a new ecological niche through prolonged exposure to elemental energies from the Plane of Air. That the biggest, most aggressive sky fishers are found (and thought to have originated) near powerful loci of elemental air, such as in Garund's Terwa Uplands or around the Eye of Abendego, lends further credence to this theory.\nIn appearance, a sky fisher resembles an enormous jellyfish, its many dangling tendrils hanging beneath a clear bulbous body. Although its appearance is quite difficult to accurately determine, as its natural transparent form is almost completely Invisible, its inside contain a complex chemical factory that produces lighter-than-air gases, paralyzing toxins, and flesh-eating enzymes. These enzymes are highly potent and often desired by toxicologists due to their unique properties. The creature hunts by hovering just above the forest canopy, using eye-like clusters on the ends of its tentacles as a kind of inverted periscope. When it spots prey, it floats close and waits for an opportune moment to sting. Then, as paralysis takes hold, the sky fisher hoists its meal into the sky to slowly consume it. Inside, enzymes break down the dead or paralyzed victims into a bloody slurry.\nA recently fed sky fisher can always be quickly identified by the looping coils of blood that circulate through its body—a beautiful, if terrible, sight.",
      "armorClass": 30,
      "hitPoints": 200,
      "speedFeet": 0,
      "perception": {
        "modifier": 18,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 22,
        "reflex": 22,
        "will": 15
      },
      "abilities": {
        "str": 5,
        "dex": 7,
        "con": 7,
        "int": -4,
        "wis": 0,
        "cha": -3
      },
      "skills": {
        "acrobatics": 21,
        "athletics": 21,
        "stealth": 23
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision"
        ],
        "resistances": [
          "bludgeoning 14",
          "poison 14"
        ],
        "weaknesses": [
          "piercing 7",
          "slashing 7"
        ]
      },
      "attacks": [
        {
          "id": "CIwM4Yq9dsm2cPib",
          "name": "Stinging Tentacle",
          "bonus": 24,
          "damage": "2d8+8 bludgeoning",
          "traits": [
            "agile",
            "reach-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "LuwGMxjIRQTDlHoq",
          "name": "Transparency",
          "kind": "passive",
          "description": "Unless it has fed recently, the sky fisher is naturally Invisible. Using non-hostile actions does not cause the sky fisher to become Hidden. When it takes a hostile action of any kind, the sky fisher is hidden instead of Undetected until the start of its next turn, as the vague outline of its many tendrils temporarily becomes faintly visible.",
          "traits": []
        },
        {
          "id": "0qVp9z4JPMeFgkn5",
          "name": "Abduct",
          "kind": "action",
          "description": "The sky fisher reels in a target Grabbed by its tentacles, pulling them into an adjacent space, and then attempts to Swallow them Whole (Large, 3d8+12 acid damage, Rupture 25). The sky fisher can only use Swallow Whole when using Abduct.",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "dkkw8bvkw35Kan9I",
          "name": "Enzymic Vent",
          "kind": "action",
          "description": "The sky fisher vents flesh-eating enzymes into the air, dealing 3d6 persistent acid damage in a 20-foot emanation (check (reflex, dc:25, basic, options:area-effect) save). It can't use Enzymic Vent again for 1d4.",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "7XedHDwtFnozsLZn",
          "name": "Jet",
          "kind": "action",
          "description": "The sky fisher quickly expels some of its gases to move swiftly through the air, Flying up to 100 feet in a straight line; this movement doesn't trigger reactions.",
          "traits": [
            "move"
          ]
        },
        {
          "id": "Xbic0yIcsOvXhcbw",
          "name": "Sky Fisher Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:25)\nMaximum Duration 6 rounds\nStage 1 3d6 poison damage, Clumsy 1, and can't speak above a whisper (1 round)\nStage 2 3d8 poison damage, Clumsy 2, and can't speak (1 round)\nStage 3 3d10 poison damage and Paralyzed (1 round)",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "4S5Mu8BVZh8h29qh",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 59,
        "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Invisible",
          "sourceId": "zJxUflt9np0q4yML",
          "name": "Invisible",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LuwGMxjIRQTDlHoq",
          "name": "Transparency",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 179,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LuwGMxjIRQTDlHoq",
          "name": "Transparency",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 310,
        "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Undetected",
          "sourceId": "VRSef5y1LmL2Hkjf",
          "name": "Undetected",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LuwGMxjIRQTDlHoq",
          "name": "Transparency",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 36,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "0qVp9z4JPMeFgkn5",
          "name": "Abduct",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 163,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Swallow Whole",
        "label": "Swallow them Whole",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Swallow Whole",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Swallow Whole",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "0qVp9z4JPMeFgkn5",
          "name": "Abduct",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 168,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Xbic0yIcsOvXhcbw",
          "name": "Sky Fisher Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 332,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Xbic0yIcsOvXhcbw",
          "name": "Sky Fisher Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 484,
        "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Paralyzed",
          "sourceId": "6uEgoh53GbXuHpTF",
          "name": "Paralyzed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Xbic0yIcsOvXhcbw",
          "name": "Sky Fisher Venom",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "4S5Mu8BVZh8h29qh",
          "name": "Grab",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/details/publicNotes",
        "sourceIndex": 798,
        "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Invisible",
          "sourceId": "zJxUflt9np0q4yML",
          "name": "Invisible",
          "type": "condition"
        },
        "owner": {
          "sourceId": "DiU1sOTZHKbSQoKD",
          "name": "Sky Fisher",
          "type": "npc"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:ascendant-griffon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "oAqmIVN0ddsni8D5",
      "slug": "ascendant-griffon",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a14633946852a0afbed48920bf48ed6953fac64b1d0ba59625ab0e5aa76ec15d",
    "translatableHash": "sha256:7cb6f3ef7884c590e6ce282b173b7a7e1df0e48ac4f391a605c3c396c9f773cc",
    "data": {
      "schemaVersion": 1,
      "name": "Ascendant Griffon",
      "level": 11,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "This griffon is aptly named for both its majestic appearance in flight and its increased ferocity over the common griffon. Despite its size, the sheer muscle mass present in this creature makes flight seem effortless, if preposterous. It makes its home among the canopies of the most ancient forests and atop the peaks of the greatest mountains, hunting its prey from above with silent and deadly accuracy. The ascendant griffon prefers to hunt other large creatures within its territory, such as bears, but they will not hesitate to attack smaller prey they perceive as a threat to their territory. Whether an ascendant griffon is a new evolutionary development or a throwback to a more primeval version of the creature is difficult to determine. Further research into these exceptional creatures may provide insight into their origins and perhaps the origins of all griffons.",
      "armorClass": 30,
      "hitPoints": 210,
      "speedFeet": 25,
      "perception": {
        "modifier": 25,
        "senses": [
          "darkvision",
          "scent-imprecise-120"
        ]
      },
      "saves": {
        "fortitude": 21,
        "reflex": 24,
        "will": 18
      },
      "abilities": {
        "str": 7,
        "dex": 6,
        "con": 5,
        "int": -4,
        "wis": 3,
        "cha": 7
      },
      "skills": {
        "acrobatics": 23,
        "athletics": 23,
        "intimidation": 25,
        "stealth": 21,
        "survival": 22
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OezvOTTZyqzkmRmT",
          "name": "Beak",
          "bonus": 24,
          "damage": "4d8+10 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "0FNf9qFHRNr5lmME",
          "name": "Wing",
          "bonus": 24,
          "damage": "4d6+10 slashing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "WI5VC2zKYdllqDpk",
          "name": "Talon",
          "bonus": 24,
          "damage": "4d6+10 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "Aud77Is9QFK0V09W",
          "name": "Feather",
          "bonus": 25,
          "damage": "2d8+10 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "e1Z1NtjcYsw6wjsJ",
          "name": "Dread Gaze",
          "kind": "reaction",
          "description": "Trigger A creature ends a move action within 30 feet of the ascendant griffon\nEffect The ascendant griffon turns its head to stare down the triggering creature, and attempts to Demoralize it. This use of Demoralize has the visual trait rather than the auditory trait, and the griffon does not take a penalty on its check for not sharing a language.",
          "traits": []
        },
        {
          "id": "17n9uAXARDmFSevf",
          "name": "Carry Off",
          "kind": "passive",
          "description": "An ascendant griffon can Fly at full speed with a creature Grabbed in its talons, moving that creature along with it.",
          "traits": []
        },
        {
          "id": "43omV52GL7Hlo6rl",
          "name": "Disembowel",
          "kind": "action",
          "description": "Requirements The ascendant griffon has a creature Grabbed in its talons\nEffect The griffon makes a beak Strike to rip at the flesh of its prey. If the Strike hits, that creature becomes Drained 1 (or increases its drained value by 1, to a maximum of 4).",
          "traits": []
        },
        {
          "id": "ETE17tmPQayEs1cw",
          "name": "Razor-Edged Flight",
          "kind": "action",
          "description": "The ascendant griffon glides violently forward, Flying twice. It makes a wing Strike at any point during the movement against up to two different targets; if either of these attacks is a critical hit, the target also takes 2d6 persistent bleed damage.",
          "traits": []
        },
        {
          "id": "bAoiJ2oxvkDfrngf",
          "name": "Terrifying Screech",
          "kind": "action",
          "description": "The ascendant griffon unleashes a fearsome cry that strikes terror into its prey. Each creature within 100-foot emanation must attempt a check (will, dc:30) save. Regardless of the result, creatures are temporarily immune for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is frightened 2 and Fleeing for 1 round.",
          "traits": [
            "auditory",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "nmFGdZaNWuNYsPuf",
          "name": "Improved Grab",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 228,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Demoralize",
          "sourceId": "2u915NdUyQan6uKF",
          "name": "Demoralize",
          "type": "action"
        },
        "owner": {
          "sourceId": "e1Z1NtjcYsw6wjsJ",
          "name": "Dread Gaze",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 62,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "17n9uAXARDmFSevf",
          "name": "Carry Off",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 70,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "43omV52GL7Hlo6rl",
          "name": "Disembowel",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 280,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "43omV52GL7Hlo6rl",
          "name": "Disembowel",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 387,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bAoiJ2oxvkDfrngf",
          "name": "Terrifying Screech",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 504,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Frightened",
          "sourceId": "TBSHQspnbcqxsmjL",
          "name": "Frightened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bAoiJ2oxvkDfrngf",
          "name": "Terrifying Screech",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 647,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fleeing",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fleeing",
          "sourceId": "sDPxOjQ9kx2RZE8D",
          "name": "Fleeing",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bAoiJ2oxvkDfrngf",
          "name": "Terrifying Screech",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "i18TlebMzwONyPhI",
          "sourceId": "i18TlebMzwONyPhI",
          "name": "Improved Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "nmFGdZaNWuNYsPuf",
          "name": "Improved Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:tyrafdir",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "VV19NGsVwqxL3X54",
      "slug": "tyrafdir",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3c384bd879cd49a0d32c71aa4570a4e4ca960859b1362b58e92c76874d1a6648",
    "translatableHash": "sha256:f3ffe4fa56041f32204a6f05ce1d9f7e5748d72c4225d99ee7142a1c8236ab43",
    "data": {
      "schemaVersion": 1,
      "name": "Tyrafdir",
      "level": 11,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "beast",
        "fey"
      ],
      "description": "The most commonly seen hydra famously has five heads that it uses in unison to attack prey or assailants. Scattered across the Inner Sea region are more fantastical breeds of the beast, each with their own curious evolution and hunting behavior.\nThe process of sapient species finding kinship with those who are less self-aware can be observed easily throughout the natural world. Humanoids keep dogs, kobolds care for reptiles, and so on. More terrifying, as it is on a grander scale, linnorms with a strong attachment to the First World sometimes keep mutated hydras as pets and guards. Known to Ulfens as tyrafdirs, these beasts have the unique ability to create illusory doubles from the ruined stumps of their necks. These serpentine guardians serve as strong protectors in the Land of the Linnorm Kings, where their fey-warped physiology deters many a would-be monarch from claiming their master's head. The domestication of tyrafdirs by especially powerful spellcasters to serve as guardians has been known to take place, often combined with magical traps that attack the intruder's mind.",
      "armorClass": 30,
      "hitPoints": 190,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 24,
        "reflex": 21,
        "will": 18
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 6,
        "int": -3,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 23,
        "deception": 21,
        "survival": 22
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "mental"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 10"
        ]
      },
      "attacks": [
        {
          "id": "wJHSko045HjaZ1VG",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d10+9 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "0BJlZpcbFREXoecg",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "volbbhoYsX3VRgOG",
          "name": "Hydra Regeneration",
          "kind": "passive",
          "description": "On a failure the tyrafdir grows two illusory heads.\nThe hydra has regeneration equal to 3 × the number of heads it has. If a hydra's body is missing any heads and the remaining stumps have not been cauterized, the hydra attempts a check (fortitude, immutable:true, dc:31) save after it regains Hit Points from regeneration. On a success, one uncauterized stump regrows two heads; on a critical success, two uncauterized stumps regrow into two heads each. The hydra can never grow more than double the number of heads it ordinarily has. The hydra's regeneration only fully deactivates if all its heads are severed and all stumps are cauterized, at which point it dies.",
          "traits": []
        },
        {
          "id": "IQVIxxRDsn8zGCTb",
          "name": "Deceptive Heads",
          "kind": "passive",
          "description": "A tyrafdir is cunning, if unintelligent, using illusions of regrown heads to confuse and harry opponents. When a tyrafdir fails, but does not critically fail, its Fortitude save to regrow a head, a phantasm materializes to mimic the regrowth. This creates two deceptive heads that function differently than real heads. The tyrafdir gains a deceptive jaws Strike as long as it has at least one deceptive head. Any creature that attacks a deceptive head or uses the Seek action to examine it can attempt to disbelieve the illusion (check (will, dc:27) save).\nEffect: Deceptive Heads",
          "traits": [
            "illusion"
          ]
        },
        {
          "id": "ePJWvJFe4lMaXPXQ",
          "name": "Deceptive Regrowth",
          "kind": "passive",
          "description": "A tyrafdir ordinarily has six heads. A creature can attempt to sever one of the tyrafdir's heads by specifically targeting it and dealing damage equal to the head's Hit Points. A head that is not completely severed returns to full Hit Points at the end of any creature's turn. A tyrafdir can regrow a severed head using Hydra Regeneration. A creature can prevent this regrowth by dealing fire damage to the stump, cauterizing it. Single-target fire effects need to be targeted at a specific stump, but effects that deal splash damage or affect areas covering the hydra's whole space cauterize all stumps if they deal fire damage. If the attack that severs a head deals any fire damage or is dealt by a cold-iron weapon, the stump is cauterized instantly. If all six heads are cauterized, the hydra dies.\nEffect: Hydra Heads",
          "traits": []
        },
        {
          "id": "TdIuHFKFunRMvQfU",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A hydra gains an extra reaction per round for each of its heads beyond the first, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the hydra must use a different head for each Reactive Strike it makes. Whenever one of the hydra's heads is severed, the hydra loses 1 of its extra reactions per round.",
          "traits": []
        },
        {
          "id": "If6YOqwfIky1CKHO",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "DMOJ4yLThF6IR3o3",
          "name": "Tyrafdir Heads",
          "kind": "passive",
          "description": "HP (head) 30, deceptive regrowth\nImmunities area damage\nWeakness cold iron 10, slashing 10",
          "traits": []
        },
        {
          "id": "8R6BDkL9QLaWq6eP",
          "name": "Noxious Exhalation",
          "kind": "action",
          "description": "The tyrafdir breathes out a noxious mist from all of its mouths, spreading in a 20-foot emanation that deals 4d10 poison damage to creatures within the area (check (reflex, dc:24, basic, options:area-effect) save). Any creature that fails its save must attempt a check (will, dc:24) save or gain weakness to mental 10 and a –1 status penalty to Will saves for 24 hours. The tyrafdir can't use Noxious Exhalation again for 1d4.\nEffect: Noxious Exhalation",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "uZJOdounIHaFDC1t",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "7jaG3I9LlfhIbUBX",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "0BJlZpcbFREXoecg",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 467,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Seek",
          "sourceId": "BlAOM2X92SI6HMtJ",
          "name": "Seek",
          "type": "action"
        },
        "owner": {
          "sourceId": "IQVIxxRDsn8zGCTb",
          "name": "Deceptive Heads",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 606,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Deceptive Heads",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Deceptive Heads",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Deceptive Heads",
          "sourceId": "NZ3MrmXkmfQuJp7S",
          "name": "Effect: Deceptive Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "IQVIxxRDsn8zGCTb",
          "name": "Deceptive Heads",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 814,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Hydra Heads",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ePJWvJFe4lMaXPXQ",
          "name": "Deceptive Regrowth",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "If6YOqwfIky1CKHO",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 528,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Noxious Exhalation",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Noxious Exhalation",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Noxious Exhalation",
          "sourceId": "G1pvduwOVRz4YFUF",
          "name": "Effect: Noxious Exhalation",
          "type": "effect"
        },
        "owner": {
          "sourceId": "8R6BDkL9QLaWq6eP",
          "name": "Noxious Exhalation",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:pale-horse",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "X28Cx35MnV8icCSH",
      "slug": "pale-horse",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad5cf6c2aaa8593c0e172568ccb384cc32d1551b3a87de5539f5feb77668c821",
    "translatableHash": "sha256:3665d1991129c1a1655d5e999cd90c774d0972ae8ea83349ce67b38de6b8fb76",
    "data": {
      "schemaVersion": 1,
      "name": "Pale Horse",
      "level": 11,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "incorporeal",
        "undead",
        "unholy"
      ],
      "description": "The death of a unicorn in a particularly cruel manner leads to the creation of a pale horse—a symbol of hope and purity transformed into one of hopelessness and despair.",
      "armorClass": 30,
      "hitPoints": 180,
      "speedFeet": 0,
      "perception": {
        "modifier": 21,
        "senses": [
          "darkvision",
          "lifesense-imprecise-90"
        ]
      },
      "saves": {
        "fortitude": 20,
        "reflex": 24,
        "will": 21
      },
      "abilities": {
        "str": -5,
        "dex": 8,
        "con": 3,
        "int": -2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "acrobatics": 26,
        "intimidation": 20,
        "stealth": 23
      },
      "languages": [
        "common",
        "fey",
        "necril"
      ],
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
          "all-damage 10 except force, ghost-touch, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "joNOo1Nzcl103gsT",
          "name": "Spectral Horn",
          "bonus": 24,
          "damage": "3d10+10 void",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "SIO6Rj1NrYqB3Yme",
          "name": "Hoof",
          "bonus": 24,
          "damage": "3d8+10 void",
          "traits": [
            "agile",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "lWFPmS0H0zSECgmE",
          "name": "Spectral Mount",
          "kind": "passive",
          "description": "A pale horse can accept a corporeal rider, but such a rider is left behind if the pale horse passes through a creature or object.",
          "traits": []
        },
        {
          "id": "Jsr2o1sS2Yu2fFjC",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "Xw8tomP14n2Bj8VB",
          "name": "Aura of Despair",
          "kind": "passive",
          "description": "30 feet. A living creature that begins its turn in the aura must succeed at a check (will, dc:27) save or become Slowed 1. A creature is temporarily immune to the aura for 1 hour if it critically succeeds.",
          "traits": [
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "fivZSuYRBZdOaMOO",
          "name": "Void Healing",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "V6SsPWfZ04OeUEDE",
          "name": "Spectral Charge",
          "kind": "action",
          "description": "The pale horse Flies twice and then makes a horn Strike. The pale horse can move through creatures.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "mWlPi3k2oYYdgk2z",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 27,
          "spells": [
            {
              "id": "K6cSqWwcOFAzGebi",
              "name": "Darkness (At-Will)",
              "rank": 2
            },
            {
              "id": "rAmUFcQyMM8kB8eP",
              "name": "Harm",
              "rank": 4
            },
            {
              "id": "PXlaPqZTPZpBP3nS",
              "name": "Toxic Cloud",
              "rank": 5
            },
            {
              "id": "qtC0cwZthgxUHia0",
              "name": "Translocate",
              "rank": 5
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.MlpbeZ61Euhl0d60",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.MlpbeZ61Euhl0d60",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "MlpbeZ61Euhl0d60",
          "sourceId": "MlpbeZ61Euhl0d60",
          "name": "Toxic Cloud",
          "type": "spell"
        },
        "owner": {
          "sourceId": "PXlaPqZTPZpBP3nS",
          "name": "Toxic Cloud",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 50,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mist",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mist",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mist",
          "sourceId": "9XHmC2JgTUIQ1CCm",
          "name": "Mist",
          "type": "spell"
        },
        "owner": {
          "sourceId": "PXlaPqZTPZpBP3nS",
          "name": "Toxic Cloud",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.TTCw5NusiSSkJU1x",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.TTCw5NusiSSkJU1x",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "TTCw5NusiSSkJU1x",
          "sourceId": "TTCw5NusiSSkJU1x",
          "name": "Void Healing",
          "type": "action"
        },
        "owner": {
          "sourceId": "fivZSuYRBZdOaMOO",
          "name": "Void Healing",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.VlNcjmYyu95vOUe8",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.VlNcjmYyu95vOUe8",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "VlNcjmYyu95vOUe8",
          "sourceId": "VlNcjmYyu95vOUe8",
          "name": "Translocate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qtC0cwZthgxUHia0",
          "name": "Translocate",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.4GE2ZdODgIQtg51c",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.4GE2ZdODgIQtg51c",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "4GE2ZdODgIQtg51c",
          "sourceId": "4GE2ZdODgIQtg51c",
          "name": "Darkness",
          "type": "spell"
        },
        "owner": {
          "sourceId": "K6cSqWwcOFAzGebi",
          "name": "Darkness (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 696,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "K6cSqWwcOFAzGebi",
          "name": "Darkness (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "wdA52JJnsuQWeyqz",
          "sourceId": "wdA52JJnsuQWeyqz",
          "name": "Harm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rAmUFcQyMM8kB8eP",
          "name": "Harm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "2YRDYVnC1eljaXKK",
          "sourceId": "2YRDYVnC1eljaXKK",
          "name": "At-Will Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "Jsr2o1sS2Yu2fFjC",
          "name": "At-Will Spells",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 115,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Xw8tomP14n2Bj8VB",
          "name": "Aura of Despair",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:desert-manticore",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "g3q76dFQYfSiCY00",
      "slug": "desert-manticore",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a20761c102bdc90143361b6e64393521f427048c04102fa2059e68540408acf2",
    "translatableHash": "sha256:cb44b70c35fe18b0edfd910643d21e3ce9c863b4e21da3101602fc1fa3f73cb2",
    "data": {
      "schemaVersion": 1,
      "name": "Desert Manticore",
      "level": 12,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Desert manticores are far more dangerous than their common cousins and only marginally cleverer. Instead of the usually spiked tail reminiscent of a porcupine, desert manticores have large scorpion tails, requiring them to adopt closer approaches and cunning ambushes. Desert manticores are known for their egos and constant attempts to outmatch sphinxes within their chosen territories. No accounts of such attempts have ever proved fruitful for the desert manticore.",
      "armorClass": 33,
      "hitPoints": 270,
      "speedFeet": 30,
      "perception": {
        "modifier": 22,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 22,
        "will": 22
      },
      "abilities": {
        "str": 7,
        "dex": 2,
        "con": 5,
        "int": -2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 25,
        "deception": 22,
        "intimidation": 26,
        "stealth": 22
      },
      "languages": [
        "common",
        "kelish",
        "osiriani"
      ],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5OXzOgTPrfRU4b91",
          "name": "Jaws",
          "bonus": 25,
          "damage": "4d8+10 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "HU1OvxPhcQVWcROm",
          "name": "Claw",
          "bonus": 25,
          "damage": "4d6+10 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "Pz98LIazkDO075lb",
          "name": "Stinger",
          "bonus": 25,
          "damage": "3d6+10 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "d99WnryfMnnDTyJi",
          "name": "Indomitable Beast",
          "kind": "reaction",
          "description": "Frequency once per day\nTrigger The desert manticore is reduced to 0 HP\nEffect The desert manticore avoids being knocked out and remains at 1 HP, then can make a stinger Strike against a creature in its reach.",
          "traits": []
        },
        {
          "id": "ZCJsvwGlqNS9EnMM",
          "name": "Manticore Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:32)\nMaximum Duration 6 rounds\nStage 1 3d8 poison damage and Drained 1 (1 round)\nStage 2 4d8 poison damage and Drained 2 (1 round)\nStage 3 5d8 poison damage and Drained 3 (1 round)",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "HejwVuqegoT2EPTQ",
          "name": "Scorpion Sting",
          "kind": "action",
          "description": "The desert manticore Strikes an Off-Guard creature with its stinger. The attack injects venom deeply, dealing an additional 4d8 poison damage and giving the target a –2 circumstance penalty to their initial save against the poison.",
          "traits": []
        },
        {
          "id": "MzLzgrHdlzSOT1XI",
          "name": "Venomous Flight",
          "kind": "action",
          "description": "The desert manticore Flies twice, dripping venom from its stinger. It chooses a creature it flew directly above during the flight, which is exposed to manticore venom. The desert manticore cannot fly further than 60 feet above the target or the venom becomes too dispersed in fall to take effect.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 171,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZCJsvwGlqNS9EnMM",
          "name": "Manticore Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 307,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZCJsvwGlqNS9EnMM",
          "name": "Manticore Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 443,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "ZCJsvwGlqNS9EnMM",
          "name": "Manticore Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 35,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HejwVuqegoT2EPTQ",
          "name": "Scorpion Sting",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:plated-python",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "iTEmT3ld9s0w0luF",
      "slug": "plated-python",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ad31e8126e52cf082d3513fd684d8973580aaa5dae873934c1e5fff283b43011",
    "translatableHash": "sha256:d4a4f487b3904acc95ddc592e5980e61b00ee6c982e6345556cded43ca81878d",
    "data": {
      "schemaVersion": 1,
      "name": "Plated Python",
      "level": 12,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "Gorgons are a broad group of animals that share a few peculiar traits. All gorgons are covered in armored plates and breathe petrifying gases. Other than these features, gorgons can resemble almost any animal. While some gorgons may seem like less physically imposing creatures, they should never be underestimated. Gorgons are canny hunters, and even a small puff of their breath can immobilize almost any prey.\nOne of the most fearsome gorgons is the gigantic plated python, covered from nose to tail in large metallic scales. Rather than the venom used by many other snakes, its breath turns both creatures and objects into stone. While this poses the most danger to the prey caught in its jaws, it can also transform large areas to brittle and lifeless stone that the snakes can easily tunnel through.\nPlated pythons typically live in pairs or trios and are extremely territorial. The fights between plated pythons over territory are vicious and tend to leave long-lasting effects on the landscape. They defend their territory aggressively against other creatures they see as a threat, including people and large animals. Their habitats can be identified by the stone tunnels left behind by their burrowing, and wary travelers use these as a sign to change course. Particularly bold adventurers might try to use the tunnels for passage, protected as they are from elements and other wildlife, but they do risk coming face to face with a plated python.",
      "armorClass": 33,
      "hitPoints": 215,
      "speedFeet": 40,
      "perception": {
        "modifier": 24,
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
        "int": -3,
        "wis": 6,
        "cha": 3
      },
      "skills": {
        "athletics": 25
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "petrified"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "KEVcZNwiR8j629dN",
          "name": "Jaws",
          "bonus": 24,
          "damage": "3d10+10 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "2VIMSKjGph3MGgTS",
          "name": "Tail",
          "bonus": 24,
          "damage": "3d8+10 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "I2UZ6UJv1xNo7ddo",
          "name": "Constrict",
          "kind": "action",
          "description": "2d10+10 bludgeoning damage, check (fortitude, dc:32, basic)",
          "traits": []
        },
        {
          "id": "mpJvew306eSdx2tM",
          "name": "Crumbling Earth",
          "kind": "action",
          "description": "The plated python lets its breath sink into the ground, transforming it to brittle stone within a 30-foot emanation. The stone is difficult terrain to all other creatures. Other creatures on the ground in this area when it transforms must succeed at a check (reflex, dc:29) save or be Immobilized as the stone beneath them crumbles to rubble. A creature immobilized in this way can Escape normally or use three total Interact actions to dig themself free.",
          "traits": [
            "earth",
            "primal"
          ]
        },
        {
          "id": "zaf8s9pW0xZzJfak",
          "name": "Petrify Prey",
          "kind": "passive",
          "description": "Requirements The plated python has a creature Grabbed\nTrigger The plated python begins its turn\nEffect The python's breath seeps into the grabbed creature. That creature must attempt a check (fortitude, dc:32) save.\nCritical Success The creature is unaffected.\nSuccess The creature's body hardens and stiffens, causing it to become Slowed 1 for 1 round.\nFailure The creature is Petrified for 1 round and Swallowed Whole.\nCritical Failure The creature is petrified permanently and Swallowed Whole.",
          "traits": [
            "earth",
            "incapacitation",
            "primal"
          ]
        },
        {
          "id": "qsKqIHUiHZAyoVOG",
          "name": "Stone Tunnel",
          "kind": "passive",
          "description": "When a plated python burrows through ground, it petrifies and destroys the material in front of it, leaving a 5-foot diameter tunnel in its wake. A plated python doesn't need to Squeeze to pass through any space at least that wide.",
          "traits": []
        },
        {
          "id": "OS8aeXhGNBCVVVQc",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, 3d10+5 acid damage, Rupture 20\nThis damage ignores the hardness of petrified creatures.",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "23PrYsW8p3mhE6Uh",
          "name": "Towering Bite",
          "kind": "action",
          "description": "The plated python lunges to its full length, making a jaws Strike with a reach of 60 feet. If the Strike hits, its target is Grabbed and pulled to an empty space adjacent to the plated python. The python can attack through any material it can burrow through, leaving a stone tunnel as normal.",
          "traits": []
        },
        {
          "id": "hgpCvuoNDil2ZdYE",
          "name": "Grab",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.g26YiEIfSHCpLocV",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "g26YiEIfSHCpLocV",
          "sourceId": "g26YiEIfSHCpLocV",
          "name": "Constrict",
          "type": "action"
        },
        "owner": {
          "sourceId": "I2UZ6UJv1xNo7ddo",
          "name": "Constrict",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 302,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "mpJvew306eSdx2tM",
          "name": "Crumbling Earth",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 442,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "mpJvew306eSdx2tM",
          "name": "Crumbling Earth",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 66,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zaf8s9pW0xZzJfak",
          "name": "Petrify Prey",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 504,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zaf8s9pW0xZzJfak",
          "name": "Petrify Prey",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 625,
        "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Petrified",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Petrified",
          "sourceId": "dTwPJuKgBQCMxixg",
          "name": "Petrified",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zaf8s9pW0xZzJfak",
          "name": "Petrify Prey",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 181,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Squeeze",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Squeeze",
          "sourceId": "kMcV8e5EZUxa6evt",
          "name": "Squeeze",
          "type": "action"
        },
        "owner": {
          "sourceId": "qsKqIHUiHZAyoVOG",
          "name": "Stone Tunnel",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "OS8aeXhGNBCVVVQc",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 128,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "23PrYsW8p3mhE6Uh",
          "name": "Towering Bite",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Tkd8sH4pwFIPzqTr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Tkd8sH4pwFIPzqTr",
          "sourceId": "Tkd8sH4pwFIPzqTr",
          "name": "Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "hgpCvuoNDil2ZdYE",
          "name": "Grab",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:tardigrade-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "R8b09QvQAxMnjHTk",
      "slug": "tardigrade-swarm",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:04777de9e7172bf06cc39f26e58a702c4a0160a79917d92b1e4b58aee6fddb8e",
    "translatableHash": "sha256:e92cfe7fa0b9f0b898113b749b5820a7332cd3fdff9ae085d41b7bbe61f2f59c",
    "data": {
      "schemaVersion": 1,
      "name": "Tardigrade Swarm",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "animal"
      ],
      "description": "Tardigrades grow no larger than the width of a hair, but when their riverside environments are exposed to heightened levels of magic, these eight-legged omnivores can grow to tremendous sizes.",
      "armorClass": 28,
      "hitPoints": 140,
      "speedFeet": 25,
      "perception": {
        "modifier": 21,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 21,
        "will": 19
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 6,
        "int": -5,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 19,
        "survival": 21
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "all-damage 5 except area-damage"
        ],
        "weaknesses": []
      },
      "attacks": [],
      "actions": [
        {
          "id": "IJhsgKvchGrIIKXn",
          "name": "Eyespots",
          "kind": "passive",
          "description": "A tardigrade swarm can't see anything beyond 30 feet.",
          "traits": []
        },
        {
          "id": "AqvYv5EgeNts4Nm8",
          "name": "Tun Marbles",
          "kind": "passive",
          "description": "As the tardigrade swarm is damaged, the bodies of those that enter a tun state make the ground treacherous. When the tardigrade swarm drops below 70 Hit Points, the space they occupy is considered difficult terrain.",
          "traits": []
        },
        {
          "id": "H3F0cDhkmIXQwrao",
          "name": "Stylets",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 4d8 piercing damage (check (reflex, dc:32, basic) save). Creatures that fail their save become Drained 1 or increase their drained condition by one, to a maximum of Drained 4.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 144,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "H3F0cDhkmIXQwrao",
          "name": "Stylets",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 266,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 4",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "H3F0cDhkmIXQwrao",
          "name": "Stylets",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:lightning-turtle",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "y4Sh40MIaLp0JH7q",
      "slug": "lightning-turtle",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f5160d46d05580ffdc72679090d41fe1a4d26a550ebf130fbd67a2e02bf513d7",
    "translatableHash": "sha256:77fb55c944e7c1d671f152e3afd0a0fa46f4a8d72f37b80109cc1a481450f88e",
    "data": {
      "schemaVersion": 1,
      "name": "Lightning Turtle",
      "level": 12,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Lightning turtles have a reputation as kind protectors of those lost or injured at sea. Their unique ability to promote healing by stimulating the body's natural bioelectricity has led to many attempts over the year to domesticate the creatures, but none have been successful.",
      "armorClass": 34,
      "hitPoints": 190,
      "speedFeet": 15,
      "perception": {
        "modifier": 22,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 19,
        "will": 22
      },
      "abilities": {
        "str": 5,
        "dex": 1,
        "con": 7,
        "int": -4,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "athletics": 25
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "g4lFHOkXnV68DXB6",
          "name": "Jaws",
          "bonus": 24,
          "damage": "2d12+5 piercing; 2d6 electricity",
          "traits": [
            "electricity",
            "unarmed"
          ]
        },
        {
          "id": "zU1rgQAWemlXt4dz",
          "name": "Electrical Burst",
          "bonus": 22,
          "damage": "4d10 electricity",
          "traits": [
            "electricity"
          ]
        }
      ],
      "actions": [
        {
          "id": "48vLPMzxvUYMyMDf",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The lightning turtle can hold its breath for 30 minutes.",
          "traits": []
        },
        {
          "id": "36l8JVIqqAV4edmp",
          "name": "Greater Electrolocation",
          "kind": "passive",
          "description": "A lightning turtle can sense minute electrical charges in living creatures, which it can use as a precise sense at a range of 20 feet. This distance increases to 100 feet against any creature that has used an electricity effect within the last minute.",
          "traits": []
        },
        {
          "id": "yNQF1eVE0WPEHDOz",
          "name": "Shell Shock",
          "kind": "reaction",
          "description": "Trigger A lightning turtle is hit by a melee or an unarmed attack\nEffect The lightning turtle releases some of its stored electrical power, inflicting 7d6 electricity damage to the creature attacking it.",
          "traits": [
            "electricity",
            "nonlethal"
          ]
        },
        {
          "id": "beRBWWg6xwZiT840",
          "name": "Healing Pulse",
          "kind": "action",
          "description": "The lightning turtle releases a pulse of low-intensity electricity from its body to promote healing. This restores 5d8 healing Hit Points to the turtle and each living ally within 10 feet, including creatures normally immune to electricity. The turtle can't use Healing Pulse again for 1 minute and is temporarily immune to the Healing Pulse of any lightning turtle for 1 minute.",
          "traits": [
            "electricity",
            "healing",
            "primal"
          ]
        },
        {
          "id": "auQMbsuySkuEV640",
          "name": "Sparking Shell",
          "kind": "action",
          "description": "The lightning turtle withdraws into its shell. This increases its AC to 36, but it can't act except to use Shell Shock or reemerge as a single action. While in its shell, the turtle's Shell Shock deals another 4d6 damage and loses the nonlethal trait.",
          "traits": []
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:greater-chimera",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "KmsvxZWttwkkhbNO",
      "slug": "greater-chimera",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7aad76cd4f46b5e109c46b4b35a337c4f82e1cb6cf8e781b315ff5e96143b153",
    "translatableHash": "sha256:7b1f7b41ceb2b374e72823b2ecc7ebe87efb97c6448f8f21f91f2acc918d32aa",
    "data": {
      "schemaVersion": 1,
      "name": "Greater Chimera",
      "level": 13,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "",
      "armorClass": 33,
      "hitPoints": 235,
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
        "dex": 4,
        "con": 5,
        "int": -2,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 22,
        "athletics": 27,
        "stealth": 27
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "1k3oaEXSgc36pOq8",
          "name": "Claw",
          "bonus": 25,
          "damage": "3d8+8 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "wymsHfsPASWtV1xM",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "4tYzMp9ipa1BDyJd",
          "name": "Three-Headed",
          "kind": "passive",
          "description": "Any ability that would sever a greater chimera's head (such as a critical hit with a Vorpal weapon) severs one head at random. Losing a head doesn't kill a chimera (as long as it has at least one head left), but it does prevent it from making Strikes with the lost head or using any abilities granted by the head.",
          "traits": []
        },
        {
          "id": "9NL3lOIW0zXEJDF8",
          "name": "Multiple Reactions",
          "kind": "passive",
          "description": "A greater chimera gains 2 extra reactions each round that it can use only to make Reactive Strikes. It must use a different head for each reaction, and it can't use more than one on the same triggering action. If it loses one of its heads, it also loses one of these extra reactions.",
          "traits": []
        },
        {
          "id": "D4IuyPjtV2i0vRCR",
          "name": "Three-Headed Strike",
          "kind": "action",
          "description": "The greater chimera makes a Strike with each of its heads, each at a –2 penalty and targeting a different creature. These Strikes count as only one attack for the greater chimera's multiple attack penalty, and the penalty doesn't increase until after it has made all three attacks.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "wymsHfsPASWtV1xM",
          "name": "Reactive Strike",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 88,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Vorpal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Vorpal",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Vorpal",
          "sourceId": "6xaxxKfvXED6LfIY",
          "name": "Vorpal",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "4tYzMp9ipa1BDyJd",
          "name": "Three-Headed",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:royal-basilisk",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "kuweiMAfqrigtGj1",
      "slug": "royal-basilisk",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8905071aa7006c762f3ee37dd5c0d4762e070c6d0f0bb90001eaf4dcca9bd249",
    "translatableHash": "sha256:b182e766754b539ade54efacf71ea458ecc70fa76de2e4ec5da4e6da6fce4d9a",
    "data": {
      "schemaVersion": 1,
      "name": "Royal Basilisk",
      "level": 13,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "The royal basilisk is aptly named, not for only the metal crown upon its head but also for the unique potency of its poison. The creature's poison manifests as a sort of cloying vapor that sticks onto and eats away at anything it touches. Their mastery of poison does appear to come at a cost, as the royal basilisk has no ability to petrify its prey. Although the royal basilisk can painstakingly shape a crown, some made of simple iron and others of rare skymetals, they much prefer to collect crowns crafted by other creatures.",
      "armorClass": 33,
      "hitPoints": 290,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision",
          "scent-imprecise-120",
          "tremorsense-60"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 22,
        "will": 23
      },
      "abilities": {
        "str": 8,
        "dex": 5,
        "con": 7,
        "int": -3,
        "wis": 6,
        "cha": 2
      },
      "skills": {
        "acrobatics": 24,
        "athletics": 27,
        "stealth": 24,
        "survival": 25
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [
          "acid 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "4C8gEzCpuYKGtdf0",
          "name": "Jaws",
          "bonus": 27,
          "damage": "4d10+11 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "ctmpmvuZtnrSdGaj",
          "name": "Tail",
          "bonus": 27,
          "damage": "4d8+11 bludgeoning",
          "traits": [
            "agile",
            "reach-15"
          ]
        },
        {
          "id": "DmXQSZe7Qj5HObRV",
          "name": "Spit",
          "bonus": 24,
          "damage": "5d10 poison",
          "traits": [
            "poison"
          ]
        }
      ],
      "actions": [
        {
          "id": "IVRkyNW8ZnlDFKUQ",
          "name": "Crowned Royalty",
          "kind": "passive",
          "description": "The royal basilisk's crown is firmly attached to its head but can be Disarmed as though it were a held item. Without a crown, the royal basilisk's mastery over poison is weakened enough that it loses its miasmatic shroud. The royal basilisk can equip a crown within its tail's reach as an Interact action. A royal basilisk's crown is normally made of iron and enables the basilisk to use miasmatic shroud, but crowns made of other, more exotic materials might confer different abilities.",
          "traits": []
        },
        {
          "id": "fwBO7BD8je9omBHJ",
          "name": "Miasmatic Shroud",
          "kind": "passive",
          "description": "15 feet. The poison in the breath of the royal basilisk makes the air around it a haze, concealing it from all creatures outside the aura, but it cannot use this concealment to Hide or Sneak. When a creature ends its turn within the aura, it is exposed to royal basilisk venom.",
          "traits": [
            "aura",
            "poison"
          ]
        },
        {
          "id": "FGDNgOQBoM5Xmqhh",
          "name": "Greater Constrict",
          "kind": "action",
          "description": "4d8+3 bludgeoning damage, check (fortitude, dc:32, basic, options:inflicts:unconscious)",
          "traits": []
        },
        {
          "id": "uvTvb2cBy4Nv0Ggv",
          "name": "Royal Basilisk Venom",
          "kind": "passive",
          "description": "Saving Throw DC 36\nMaximum Duration 6 rounds\nStage 1 2d10 poison damage and Clumsy 2 (1 round)\nStage 2 3d10 poison damage and Clumsy 3 (1 round)\nStage 3 4d10 poison damage, clumsy 3, and Slowed 1 (1 round)",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "XNwz0M9jFNsJD6gO",
          "name": "Stone-Hewing Spit",
          "kind": "action",
          "description": "The royal basilisk spits its poison with immense force, dealing 5d10 acid damage damage (check (reflex, dc:32, basic, options:area-effect) save) to creatures in a 240-foot line and exposing each creature that took damage to royal basilisk venom. The line penetrates barriers with Hardness of less than 20, ignoring any bonuses they'd provide from cover. The royal basilisk can't use Stone-Hewing Spit again for 1d4.",
          "traits": [
            "acid"
          ]
        },
        {
          "id": "pAoa79GMOBKKSOXJ",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, 5d10 acid damage, Rupture 30",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "Kzg1FKJxsglkhdRO",
          "name": "Wrap in Coils",
          "kind": "action",
          "description": "Requirements A Large or smaller creature is Grabbed or Restrained in the royal basilisk's jaws\nEffect The royal basilisk moves the creature into its coils, freeing its jaws to make attacks, then uses Greater Constrict against the creature. The royal basilisk's coils can hold as many creatures as will fit in its space.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 64,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Kzg1FKJxsglkhdRO",
          "name": "Wrap in Coils",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 118,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Kzg1FKJxsglkhdRO",
          "name": "Wrap in Coils",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 72,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
        "label": "Disarmed",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disarm",
          "sourceId": "Dt6B1slsBy8ipJu9",
          "name": "Disarm",
          "type": "action"
        },
        "owner": {
          "sourceId": "IVRkyNW8ZnlDFKUQ",
          "name": "Crowned Royalty",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 188,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sneak",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sneak",
          "sourceId": "VMozDqMMuK5kpoX4",
          "name": "Sneak",
          "type": "action"
        },
        "owner": {
          "sourceId": "fwBO7BD8je9omBHJ",
          "name": "Miasmatic Shroud",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.OmV6E3aELvq9CkK1",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.OmV6E3aELvq9CkK1",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "OmV6E3aELvq9CkK1",
          "sourceId": "OmV6E3aELvq9CkK1",
          "name": "Greater Constrict",
          "type": "action"
        },
        "owner": {
          "sourceId": "FGDNgOQBoM5Xmqhh",
          "name": "Greater Constrict",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 147,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "uvTvb2cBy4Nv0Ggv",
          "name": "Royal Basilisk Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 275,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "uvTvb2cBy4Nv0Ggv",
          "name": "Royal Basilisk Venom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 414,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "uvTvb2cBy4Nv0Ggv",
          "name": "Royal Basilisk Venom",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "pAoa79GMOBKKSOXJ",
          "name": "Swallow Whole",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:sunscale-serpent",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "PPk05PmGPKCB9X7v",
      "slug": "sunscale-serpent",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:52545db0746e7c98e017f511e1d896f66f70c63fb238b9319b855898ff3be679",
    "translatableHash": "sha256:4060a3837527bcb03ed0e96f786a0f175b4891f8f6d7254e47a76583c853dc23",
    "data": {
      "schemaVersion": 1,
      "name": "Sunscale Serpent",
      "level": 14,
      "rarity": "uncommon",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "",
      "armorClass": 36,
      "hitPoints": 251,
      "speedFeet": 40,
      "perception": {
        "modifier": 25,
        "senses": [
          "low-light-vision",
          "tremorsense-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 25,
        "reflex": 26,
        "will": 28
      },
      "abilities": {
        "str": 8,
        "dex": 4,
        "con": 3,
        "int": 1,
        "wis": 6,
        "cha": -1
      },
      "skills": {
        "acrobatics": 25,
        "athletics": 25,
        "stealth": 33,
        "survival": 28
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "poison",
          "precision"
        ],
        "resistances": [
          "all-damage 14 except force, ghost-touch, spirit, vitality"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "x50RCX6KjBk3u0hQ",
          "name": "Jaws",
          "bonus": 28,
          "damage": "3d8+11 force",
          "traits": [
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "b65Wa68FNI5d56P3",
          "name": "Tail",
          "bonus": 28,
          "damage": "3d6+11 force",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "T6Uv0yYO3KHmtSm2",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "aiMjaYRHJ2xpQP4Y",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "f7ggMymNLWhho7xl",
          "name": "Bond with Mortal",
          "kind": "passive",
          "description": "Frequency once per day\nEffect The spirit guide spends 10 minutes to form a bond with a mortal creature. While the bond exists, the spirit guide increases their current and maximum Hit Points by 28, gains a +2 status bonus to their attack and damage rolls, and can communicate telepathically with the bonded mortal as long as the two beings are on the same plane. The spirit guide can only be bonded with one mortal at a time, and they can take this action again to end the bond or to form a new bond (which also ends the old bond). The bond also ends if the spirit guide or the mortal dies.\nThis bond strengthens the spirit guide's connection to the Universe. While bonded, the spirit guide loses the incorporeal and spirit traits, loses their immunity to disease, paralysis, and poison, along with their resistance to all damage, and changes their Strikes to deal the appropriate amount of physical damage (typically piercing or slashing) instead of force damage.",
          "traits": [
            "mental",
            "primal"
          ]
        },
        {
          "id": "KVer6di68iaMUDTc",
          "name": "Bonded Strike",
          "kind": "action",
          "description": "Requirements The sunscale serpent is currently Bonded with a Mortal\nEffect The sunscale serpent makes a jaws Strike. If this attack hits, the bonded mortal can spend their reaction to Strike the same target.",
          "traits": []
        },
        {
          "id": "BnRSgGcCa2yWLnk6",
          "name": "Sun's Heat",
          "kind": "action",
          "description": "The sunscale serpent Flies up to its fly Speed. All creatures directly below the spaces it moves through must succeed at a check (fortitude, dc:31) save or be exposed to sun's touch poison. The serpent cannot fly further than 60 feet above the target or the poison becomes too dispersed in the fall to take effect.",
          "traits": []
        },
        {
          "id": "Rj9yAmOBbp5iNU68",
          "name": "Sun's Touch",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:34)\nMaximum Duration 6 rounds\nStage 1 6d8 poison damage and Clumsy 1 (1 round)\nStage 2 8d6 poison damage and Clumsy 2 (1 round)\nStage 3 6d10 poison damage and Fatigued (1 round)",
          "traits": [
            "poison"
          ]
        },
        {
          "id": "0i1UCyqY3N7tnf0I",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Large, 2d10+9 force damage], Rupture 32",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "HI5afO4uknNWUqlH",
          "name": "Unleash the Sun",
          "kind": "action",
          "description": "Requirements The sunscale serpent is flying\nEffect The sunscale serpent Flies up to its fly Speed, then crashes to the ground, releasing a wave of heat dealing 5d10 fire damage to all creatures within a 60-foot burst and searing their eyes with the erupting glory of its scales. Each creature in the area must attempt a check (reflex, dc:31, options:area-effect,damaging-effect,inflicts:blinded,inflicts:dazzled) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Dazzled for 1 round.\nCritical Failure The creature takes full damage, is Blinded for 1 round, and dazzled for 1 minute.",
          "traits": []
        },
        {
          "id": "OSoBPzZh5uE3W8fC",
          "name": "Improved Grab",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "l3vsTOyQaojlSPfC",
          "name": "Push",
          "kind": "action",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "w62gofL9tBZIXnmG",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 31,
          "spells": [
            {
              "id": "vQ1Z3K3aQ4XTWTSX",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "SwUiVavHKMWG7t5K",
          "sourceId": "SwUiVavHKMWG7t5K",
          "name": "Truespeech",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vQ1Z3K3aQ4XTWTSX",
          "name": "Truespeech (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "0i1UCyqY3N7tnf0I",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 723,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HI5afO4uknNWUqlH",
          "name": "Unleash the Sun",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 863,
        "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Blinded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Blinded",
          "sourceId": "XgEqL1kFApUbl5Z2",
          "name": "Blinded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HI5afO4uknNWUqlH",
          "name": "Unleash the Sun",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "i18TlebMzwONyPhI",
          "sourceId": "i18TlebMzwONyPhI",
          "name": "Improved Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "OSoBPzZh5uE3W8fC",
          "name": "Improved Grab",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.t6cx9FOODmeZQNYl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.t6cx9FOODmeZQNYl",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "t6cx9FOODmeZQNYl",
          "sourceId": "t6cx9FOODmeZQNYl",
          "name": "Push",
          "type": "action"
        },
        "owner": {
          "sourceId": "l3vsTOyQaojlSPfC",
          "name": "Push",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kakyXBG5WA8c6Zfd",
          "sourceId": "kakyXBG5WA8c6Zfd",
          "name": "Constant Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "T6Uv0yYO3KHmtSm2",
          "name": "Constant Spells",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "aiMjaYRHJ2xpQP4Y",
          "name": "Reactive Strike (Tail Only)",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 171,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Rj9yAmOBbp5iNU68",
          "name": "Sun's Touch",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 305,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Rj9yAmOBbp5iNU68",
          "name": "Sun's Touch",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 440,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Rj9yAmOBbp5iNU68",
          "name": "Sun's Touch",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:rumindrol",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "69M6tmEL26zl8vpY",
      "slug": "rumindrol",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:563c8ea1230e5aedd76d2919b647080eff9ea6115e5bb6add8658b764a0b1d44",
    "translatableHash": "sha256:d610c766e2aa81e172e9b13867a5fde9b68a56a12051c5f1dccfa4605a17b545",
    "data": {
      "schemaVersion": 1,
      "name": "Rumindrol",
      "level": 15,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "beast"
      ],
      "description": "The elusive rumindrol, an apex predator of the Darklands, lives deep below the surface of Golarion. Capable of emitting siren-like calls that reverberate far and wide through the tunnel systems surrounding its lair, a rumindrol feasts on the giant subterranean worms drawn to its call—as well as shulns and other creatures that feed in the worms' wake—by building up sickening subsonic vibrations within its targets until they are unable to move.",
      "armorClass": 37,
      "hitPoints": 295,
      "speedFeet": 20,
      "perception": {
        "modifier": 28,
        "senses": [
          "motion-sense-120"
        ]
      },
      "saves": {
        "fortitude": 30,
        "reflex": 26,
        "will": 23
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 7,
        "int": -1,
        "wis": 5,
        "cha": -1
      },
      "skills": {
        "athletics": 30,
        "deception": 27,
        "survival": 25
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 15",
          "sonic 15"
        ],
        "weaknesses": [
          "cold 10"
        ]
      },
      "attacks": [
        {
          "id": "4T7GnfLVLs5Rv5Og",
          "name": "Jaws",
          "bonus": 30,
          "damage": "3d12+15 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "r82YcNXlXCftCCgB",
          "name": "Leg",
          "bonus": 30,
          "damage": "3d8+15 slashing",
          "traits": [
            "agile",
            "reach-15"
          ]
        },
        {
          "id": "4G5BEKQXeBswEipM",
          "name": "Focused Resonance",
          "bonus": 30,
          "damage": "3d10+15 sonic",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "qoJZmD2HLQXVS5qY",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A rumindrol can sense nearby motion through vibration and air movement.",
          "traits": []
        },
        {
          "id": "AsHXubWWh9IZnPhY",
          "name": "Dreadful Resonance",
          "kind": "passive",
          "description": "60 feet. Each creature that enters or starts its turn in the emanation must succeed at a check (fortitude, dc:36, options:area-effect,damaging-effect,inflicts:enfeebled) save or become Enfeebled 1 (Enfeebled 2 on a critical failure) and take 3d8 sonic damage.",
          "traits": [
            "auditory",
            "aura",
            "incapacitation"
          ]
        },
        {
          "id": "rtr0WHiLIFMDOLrM",
          "name": "Enthralling Call",
          "kind": "passive",
          "description": "1 mile. Each non-rumindrol creature that enters or starts its turn within the emanation must succeed at a check (will, dc:26) save or become Fascinated. The creature then becomes temporarily immune to this effect for 1 day (1 hour on a critical failure). Any creature fascinated in this way will attempt to find the source of the rumindrol's cry, mindlessly wandering towards it.",
          "traits": [
            "auditory",
            "aura",
            "emotion",
            "mental"
          ]
        },
        {
          "id": "7KrYQNfJEo32CsPy",
          "name": "Entropic Cry",
          "kind": "action",
          "description": "The rumindrol focuses its sonic emanations on a creature it's aware of within the area of its enthralling call aura. The target must attempt a check (fortitude, dc:31) save.\nCritical Success The creature becomes temporarily immune to Entropic Cry for 1 hour.\nSuccess The target is Sickened 1.\nFailure The target is Sickened 2.\nCritical Failure The target is sickened 2, Enfeebled 1, and Stupefied 1.",
          "traits": [
            "auditory",
            "incapacitation"
          ]
        },
        {
          "id": "ZJJADpm0KkKvAPWt",
          "name": "Fast Swallow",
          "kind": "reaction",
          "description": "Trigger The rumindrol Grabs a creature\nEffect The rumindrol uses Swallow Whole.",
          "traits": []
        },
        {
          "id": "3K6igu8m8zgxofGA",
          "name": "Inexorable",
          "kind": "passive",
          "description": "The rumindrol recovers from the Paralyzed, Slowed, and Stunned conditions at the end of its turn. It's also immune to penalties to its Speeds and the Immobilized condition, and it ignores difficult terrain and greater difficult terrain.",
          "traits": []
        },
        {
          "id": "Duq5zfO7IqHBOKlt",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, 3d10+9 bludgeoning damage, Rupture 30",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "2Cv5TIKMVRX9Kkh2",
          "name": "Thrash",
          "kind": "action",
          "description": "The rumindrol attempts individual Strikes against each creature in its reach. It can attempt up to one jaws Strike and any number of leg Strikes. Each attack counts toward the rumindrol's multiple attack penalty, but the penalty doesn't increase until after it makes all the attacks.",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "HsuABbHIZfcAiChd",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, leg, check (reflex, dc:36, basic)",
          "traits": []
        },
        {
          "id": "te8JYBIDnvPAUdq2",
          "name": "Improved Grab",
          "kind": "passive",
          "description": "",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "UNah0bxXxkcZjxO3",
          "sourceId": "UNah0bxXxkcZjxO3",
          "name": "Trample",
          "type": "action"
        },
        "owner": {
          "sourceId": "HsuABbHIZfcAiChd",
          "name": "Trample",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.i18TlebMzwONyPhI",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "i18TlebMzwONyPhI",
          "sourceId": "i18TlebMzwONyPhI",
          "name": "Improved Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "te8JYBIDnvPAUdq2",
          "name": "Improved Grab",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 186,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "AsHXubWWh9IZnPhY",
          "name": "Dreadful Resonance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 253,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "AsHXubWWh9IZnPhY",
          "name": "Dreadful Resonance",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 143,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fascinated",
          "sourceId": "AdPVz7rbaVSRxHFg",
          "name": "Fascinated",
          "type": "condition"
        },
        "owner": {
          "sourceId": "rtr0WHiLIFMDOLrM",
          "name": "Enthralling Call",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 338,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7KrYQNfJEo32CsPy",
          "name": "Entropic Cry",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 449,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7KrYQNfJEo32CsPy",
          "name": "Entropic Cry",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 581,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7KrYQNfJEo32CsPy",
          "name": "Entropic Cry",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 652,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7KrYQNfJEo32CsPy",
          "name": "Entropic Cry",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 35,
        "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Paralyzed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Paralyzed",
          "sourceId": "6uEgoh53GbXuHpTF",
          "name": "Paralyzed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3K6igu8m8zgxofGA",
          "name": "Inexorable",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 89,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3K6igu8m8zgxofGA",
          "name": "Inexorable",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 144,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3K6igu8m8zgxofGA",
          "name": "Inexorable",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 282,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3K6igu8m8zgxofGA",
          "name": "Inexorable",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "Duq5zfO7IqHBOKlt",
          "name": "Swallow Whole",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:blooming-guardian",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "N3JcyxJZ05tGXZbf",
      "slug": "blooming-guardian",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d26e1363d9266f40a95efb816ef78ca3d1e9bfbdd4ed5622cc7875e5a76edd31",
    "translatableHash": "sha256:4fa5d4a54968042098b8241a7574fe3eda7c011629598d041c39e456e6b23a06",
    "data": {
      "schemaVersion": 1,
      "name": "Blooming Guardian",
      "level": 15,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "The pestilent blossoms adorning the antlers of a blooming guardian are most beautiful in moonlight, when they achieve full bloom and reveal their celestial glow. When blooming guardians near the end of their life cycle, they walk one final patrol of their forest as their ancient body decomposes into the understory.",
      "armorClass": 36,
      "hitPoints": 360,
      "speedFeet": 50,
      "perception": {
        "modifier": 29,
        "senses": [
          "low-light-vision",
          "scent-imprecise-40"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 23,
        "will": 25
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 5,
        "int": 1,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "athletics": 30,
        "intimidation": 21,
        "nature": 29,
        "survival": 27
      },
      "languages": [
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "void 15"
        ],
        "weaknesses": [
          "fire 15"
        ]
      },
      "attacks": [
        {
          "id": "phw58zMxVqdZUYbK",
          "name": "Antlers",
          "bonus": 28,
          "damage": "4d12+5 piercing",
          "traits": []
        },
        {
          "id": "ApHkKkrBHmWn5boI",
          "name": "Hooves",
          "bonus": 26,
          "damage": "4d10+5 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "H7IQtJQD9FmQfOV2",
          "name": "Petal Form",
          "kind": "passive",
          "description": "The blooming guardian can dissipate momentarily into a swirling cloud of petals and pollen to pass over brambles and slip through cracks. When Striding in woodland terrain, the blooming guardian ignores difficult terrain and can pass through obstacles so long as there is a small passageway.",
          "traits": []
        },
        {
          "id": "LoI8FYtpX669TzXU",
          "name": "Buck",
          "kind": "reaction",
          "description": "check (reflex, dc:36)",
          "traits": []
        },
        {
          "id": "TJzgGeRCww5GyIC9",
          "name": "Budding Siphon",
          "kind": "action",
          "description": "20 feet. A blooming guardian is in a constant state of decomposition; to keep this entropy at bay, the flowers that cover their antlers continually siphon life from the surrounding area. All living creatures that enter or start their turn in the emanation take 6d4 void damage (check (fortitude, dc:36, basic, options:area-effect) save). At the start of their turn in any round that the blooming guardian deals damage with siphoning buds, they gain 10 temporary Hit Points, plus 2 temporary Hit Points for each creature damaged beyond the first since the blooming guardian's last turn, to a maximum of 20 temporary Hit Points.",
          "traits": [
            "aura",
            "primal",
            "stance",
            "void"
          ]
        },
        {
          "id": "Wmct8iyApUEKtHqw",
          "name": "Full Bloom",
          "kind": "action",
          "description": "The flowers on the blooming guardian's antlers bloom, unveiling their brilliance as they eat away at their host. While in this stance, the blooming guardian's Strikes deal an additional 2d4 poison damage plus 5 persistent poison damage; on a hit, a target must succeed at a check (fortitude, dc:36, options:inflicts:enfeebled) save or become Enfeebled 2. The blooming guardian takes 5 persistent poison damage as long as it's in Full Bloom.",
          "traits": [
            "poison",
            "primal",
            "stance"
          ]
        },
        {
          "id": "XsYwIC33w2sSqec4",
          "name": "Goring Charge",
          "kind": "action",
          "description": "The blooming guardian Strides twice and makes an antlers Strike after either Stride. If the Strike hits, the blooming guardian deals an extra 2d12 bludgeoning damage, and the target takes a –2 circumstance penalty to its next Fortitude save against blossom siphon.",
          "traits": []
        },
        {
          "id": "SFUExku7yyhLDUFH",
          "name": "Wail of the Forest",
          "kind": "action",
          "description": "Requirements The blooming guardian is in Full Bloom\nEffect The blooming guardian confronts their mortality, causing their flowers to burst and spray their pollen. All creatures in a 40-foot cone take 10d10 void damage with a check (fortitude, dc:36, options:area-effect,damaging-effect,inflicts:drained) save. The blooming guardian then exits Full Bloom and can't enter it again for 1d4.\nCritical Success No effect.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and becomes Drained 1. Creatures that are Enfeebled lose that condition and increase the drained condition by the same value.\nCritical Failure As failure, but double damage.",
          "traits": [
            "primal",
            "void"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "FI4bTwgTPlgef4vr",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 33,
          "spells": [
            {
              "id": "QMxoiZ7EKUJQ9zat",
              "name": "Animal Vision",
              "rank": 3
            },
            {
              "id": "k6J8U3MCVlsU69jx",
              "name": "Speak with Animals (Constant)",
              "rank": 4
            },
            {
              "id": "byPFbTknWasgzqxl",
              "name": "Speak with Plants (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.1HfusQ8NDWutGvMx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.1HfusQ8NDWutGvMx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "1HfusQ8NDWutGvMx",
          "sourceId": "1HfusQ8NDWutGvMx",
          "name": "Animal Vision",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QMxoiZ7EKUJQ9zat",
          "name": "Animal Vision",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 722,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "SFUExku7yyhLDUFH",
          "name": "Wail of the Forest",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 804,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "SFUExku7yyhLDUFH",
          "name": "Wail of the Forest",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.qvwIwJ9QBihy8R0t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.qvwIwJ9QBihy8R0t",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "qvwIwJ9QBihy8R0t",
          "sourceId": "qvwIwJ9QBihy8R0t",
          "name": "Speak with Plants",
          "type": "spell"
        },
        "owner": {
          "sourceId": "byPFbTknWasgzqxl",
          "name": "Speak with Plants (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.BBvV7qoXGdw09q1C",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.BBvV7qoXGdw09q1C",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "BBvV7qoXGdw09q1C",
          "sourceId": "BBvV7qoXGdw09q1C",
          "name": "Speak with Animals",
          "type": "spell"
        },
        "owner": {
          "sourceId": "k6J8U3MCVlsU69jx",
          "name": "Speak with Animals (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.nZMQh4AaBr291TUf",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.nZMQh4AaBr291TUf",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "nZMQh4AaBr291TUf",
          "sourceId": "nZMQh4AaBr291TUf",
          "name": "Buck",
          "type": "action"
        },
        "owner": {
          "sourceId": "LoI8FYtpX669TzXU",
          "name": "Buck",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 343,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Enfeebled",
          "sourceId": "MIRkyAjyBeXivMa7",
          "name": "Enfeebled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "Wmct8iyApUEKtHqw",
          "name": "Full Bloom",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:alicorn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "SZNhJnoo03foGnhb",
      "slug": "alicorn",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:10d9762559c83952420e8e42b9370ea1dc941818e9eb2c85fa92f0217c86b2b5",
    "translatableHash": "sha256:12c5986f3ccb17d481209b21121fb86ae96307eb7d92bcb255acaefb17fb05b7",
    "data": {
      "schemaVersion": 1,
      "name": "Alicorn",
      "level": 15,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast",
        "fey",
        "holy"
      ],
      "description": "Alicorns are a creation of arcane intervention, a rare transformation that occurs when a unicorn is exposed to large sources of magic. Massive in size, their strong bodies are matched with two large wings on their back, a long spiraling horn, and a mane that continually ripples in an unseen wind.",
      "armorClass": 36,
      "hitPoints": 320,
      "speedFeet": 40,
      "perception": {
        "modifier": 27,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 26,
        "reflex": 26,
        "will": 29
      },
      "abilities": {
        "str": 8,
        "dex": 7,
        "con": 4,
        "int": 6,
        "wis": 4,
        "cha": 6
      },
      "skills": {
        "acrobatics": 27,
        "arcana": 27,
        "athletics": 27,
        "diplomacy": 30,
        "stealth": 25
      },
      "languages": [
        "common",
        "empyrean",
        "fey"
      ],
      "defenses": {
        "immunities": [
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "CquFaIPkYj7AX8Dc",
          "name": "Horn",
          "bonus": 29,
          "damage": "2d6 spirit; 4d10+10 piercing",
          "traits": [
            "holy",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "PY3IxQL7UJp3WCI7",
          "name": "Hoof",
          "bonus": 29,
          "damage": "4d6+10 piercing; 2d6 spirit",
          "traits": [
            "holy",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "kcEUekeC2m4hoh7P",
          "name": "Wing",
          "bonus": 29,
          "damage": "4d8+10 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "jv8ovLJKE1yASdO6",
          "name": "Wild Empathy",
          "kind": "passive",
          "description": "The alicorn has an empathic connection to the creatures of the natural world that. The alicorn can use Diplomacy to Make An Impression on animals and to make very simple Request of them.",
          "traits": []
        },
        {
          "id": "NZ5UUPllK2B6ROXy",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "V4lzL2hQ8JPSZS3q",
          "name": "Draw in Magic",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet of the alicorn Casts a Spell\nEffect The alicorn attempts to counteract the triggering spell (counteract modifier +28, counteract rank 8th). If successful, the alicorn can choose to gain the effects of the triggering spell as its sole target.",
          "traits": [
            "arcane",
            "concentrate"
          ]
        },
        {
          "id": "4iRClvmRfF2zlVPN",
          "name": "Aerial Attack",
          "kind": "action",
          "description": "The alicorn Flies and Strikes twice with their wings at any points during their movement. Each attack counts toward the alicorn's multiple attack penalty, but the penalty doesn't increase until after they make all the attacks.",
          "traits": []
        },
        {
          "id": "XCw63niaQc8PpjeX",
          "name": "Beam of Light",
          "kind": "action",
          "description": "The alicorn harnesses a powerful burning ray of light from their horn. Creatures in a 120-foot line take 16d6 fire damage (check (fortitude, dc:36, basic, options:area-effect) save). An unholy creature in the area takes an additional 8d6 spirit damage. If the light passes through an area of magical darkness or targets a creature affected by magical darkness, the beam attempts to counteract the darkness (counteract modifier +28, counteract rank 8th). The alicorn can't use its Beam of Light again for 1d4.",
          "traits": [
            "arcane",
            "concentrate",
            "fire",
            "holy",
            "light"
          ]
        },
        {
          "id": "aGDOPFkZvQXyKHde",
          "name": "Ghost Touch",
          "kind": "passive",
          "description": "An alicorn's Strikes have the effects of a ghost touch property rune.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "GSmKdOe7SresJjiE",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 36,
          "spells": [
            {
              "id": "CDX4v0bLTiMk1MUG",
              "name": "Gentle Landing (At-Will)",
              "rank": 1
            },
            {
              "id": "KCm4G2bn549EpwX9",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "CbhBPJqoHx3VmOOQ",
              "name": "Banishment",
              "rank": 5
            },
            {
              "id": "WtuQlZczhdiB7kYE",
              "name": "Telepathy",
              "rank": 6
            },
            {
              "id": "oS21S3Eg6gJVQ4QU",
              "name": "Wall of Force",
              "rank": 8
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.7Iela4GgVeO3LfAo",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.7Iela4GgVeO3LfAo",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "7Iela4GgVeO3LfAo",
          "sourceId": "7Iela4GgVeO3LfAo",
          "name": "Wall of Force",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oS21S3Eg6gJVQ4QU",
          "name": "Wall of Force",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 15,
        "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Invisible",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Invisible",
          "sourceId": "zJxUflt9np0q4yML",
          "name": "Invisible",
          "type": "condition"
        },
        "owner": {
          "sourceId": "oS21S3Eg6gJVQ4QU",
          "name": "Wall of Force",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 781,
        "uuid": "Compendium.pf2e.spells-srd.Item.Disintegrate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Disintegrate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Disintegrate",
          "sourceId": "r7ihOgKv19eJQnik",
          "name": "Disintegrate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oS21S3Eg6gJVQ4QU",
          "name": "Wall of Force",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "2YRDYVnC1eljaXKK",
          "sourceId": "2YRDYVnC1eljaXKK",
          "name": "At-Will Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "NZ5UUPllK2B6ROXy",
          "name": "At-Will Spells",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.bay4AfSu2iIozNNW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.bay4AfSu2iIozNNW",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "bay4AfSu2iIozNNW",
          "sourceId": "bay4AfSu2iIozNNW",
          "name": "Banishment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CbhBPJqoHx3VmOOQ",
          "name": "Banishment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 468,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stunned",
          "sourceId": "dfCMdR4wnpbYNTix",
          "name": "Stunned",
          "type": "condition"
        },
        "owner": {
          "sourceId": "CbhBPJqoHx3VmOOQ",
          "name": "Banishment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.HqTI6wRrck1YXp3F",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.HqTI6wRrck1YXp3F",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "HqTI6wRrck1YXp3F",
          "sourceId": "HqTI6wRrck1YXp3F",
          "name": "Telepathy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WtuQlZczhdiB7kYE",
          "name": "Telepathy",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.TTwOKGqmZeKSyNMH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.TTwOKGqmZeKSyNMH",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "TTwOKGqmZeKSyNMH",
          "sourceId": "TTwOKGqmZeKSyNMH",
          "name": "Gentle Landing",
          "type": "spell"
        },
        "owner": {
          "sourceId": "CDX4v0bLTiMk1MUG",
          "name": "Gentle Landing (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WBmvzNDfpwka3qT4",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KCm4G2bn549EpwX9",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Light",
          "sourceId": "cVVZXNbV0nElVOPZ",
          "name": "Spell Effect: Light",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KCm4G2bn549EpwX9",
          "name": "Light",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:titanosaur",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "6RFHl13b3MZE1vlo",
      "slug": "titanosaur",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:37f3d0a079071c5c4ec735fd226e99a2f8407a94593e7003f4dc47579b1e598b",
    "translatableHash": "sha256:46fb29da2400456c1c1513a7f4aeff9cd0738dca34a10b521bfdff2dc60e9eea",
    "data": {
      "schemaVersion": 1,
      "name": "Titanosaur",
      "level": 16,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Titanosaurs are some of the largest land animals ever to walk the surface of Golarion, massive sauropods that can reach over 100 feet in length and weigh more than 80 tons. While typically content to focus on consuming vast quantities of vegetation and ignore the presence of smaller creatures, titanosaurs that feel threatened can unleash destruction rivaling natural disasters.",
      "armorClass": 38,
      "hitPoints": 370,
      "speedFeet": 30,
      "perception": {
        "modifier": 27,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 33,
        "reflex": 28,
        "will": 29
      },
      "abilities": {
        "str": 10,
        "dex": 4,
        "con": 9,
        "int": -4,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "athletics": 34
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Uop0AUR4G0u3Dq90",
          "name": "Tail",
          "bonus": 32,
          "damage": "3d8+16 bludgeoning",
          "traits": [
            "reach-30"
          ]
        },
        {
          "id": "1CaSAQ7WIPYzg59h",
          "name": "Foot",
          "bonus": 32,
          "damage": "3d12+16 bludgeoning",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "A2j8VSHNeAkdCLDx",
          "name": "Majestic Presence",
          "kind": "passive",
          "description": "90 feet. Creatures of Huge size or smaller that enter the aura must attempt a check (will, dc:38) save. Regardless of the result of the saving throw, the creature is temporarily immune to the titanosaur's Majestic Presence for 1 hour.\nCritical Success The creature is unaffected.\nSuccess The creature is Fascinated by the titanosaur for 1 round.\nFailure The creature is fascinated for 2 rounds.\nCritical Failure The creature is fascinated for 1 minute.",
          "traits": [
            "aura",
            "emotion",
            "visual"
          ]
        },
        {
          "id": "n2Pm6UWT3TK2ss5u",
          "name": "Seismic Slam",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The titanosaur rears up on its hind legs before slamming its forelegs back on the ground with a thunderous crash, creating a localized tremor with the effects of an Earthquake spell centered on itself, though the effect is non-magical. Fissures do not form under the titanosaur.",
          "traits": []
        },
        {
          "id": "15vn04Bm1yucrFJI",
          "name": "Sweeping Tail",
          "kind": "action",
          "description": "The titanosaur lashes its tail in a 30-foot cone. Creatures in the area take 8d10 bludgeoning damage (check (reflex, dc:38, basic, options:area-effect) save). The momentum of the titanosaur's swing then makes it Off-Guard until the beginning of its next turn.",
          "traits": []
        },
        {
          "id": "KNiDUA7hZGNY0aAb",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:38, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 359,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fascinated",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fascinated",
          "sourceId": "AdPVz7rbaVSRxHFg",
          "name": "Fascinated",
          "type": "condition"
        },
        "owner": {
          "sourceId": "A2j8VSHNeAkdCLDx",
          "name": "Majestic Presence",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/3/system/description/value",
        "sourceIndex": 249,
        "uuid": "Compendium.pf2e.spells-srd.Item.Earthquake",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Earthquake",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Earthquake",
          "sourceId": "x7SPrsRxGb2Vy2nu",
          "name": "Earthquake",
          "type": "spell"
        },
        "owner": {
          "sourceId": "n2Pm6UWT3TK2ss5u",
          "name": "Seismic Slam",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 257,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "15vn04Bm1yucrFJI",
          "name": "Sweeping Tail",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "UNah0bxXxkcZjxO3",
          "sourceId": "UNah0bxXxkcZjxO3",
          "name": "Trample",
          "type": "action"
        },
        "owner": {
          "sourceId": "KNiDUA7hZGNY0aAb",
          "name": "Trample",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:prismhydra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "FUnnTzkARhfNi5cP",
      "slug": "prismhydra",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:800fcd86e38ea206b532aba1bc218609aeb151882a0c6392a6be7f854e5b14b7",
    "translatableHash": "sha256:30013d36c4108d855170e9877d98501066c15d869a4fc5f548b83f80f3b6728d",
    "data": {
      "schemaVersion": 1,
      "name": "Prismhydra",
      "level": 16,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "The most commonly seen hydra famously has five heads that it uses in unison to attack prey or assailants. Scattered across the Inner Sea region are more fantastical breeds of the beast, each with their own curious evolution and hunting behavior.\nPrismhydras, yet another inexplicable byproduct of the Mana Wastes' tumultuous magical properties, wander the land between Nex and Geb feasting on megafauna, mutants, and whatever else happens to cross their path. Their scales cascade in various colors, shifting in beautiful patterns that belie the threat of their powerful jaws. Only the most prepared adventurers can slay a prismhydra, for the means of stopping its regeneration is like a single card in an explosive deck.",
      "armorClass": 30,
      "hitPoints": 290,
      "speedFeet": 35,
      "perception": {
        "modifier": 28,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 28,
        "reflex": 26,
        "will": 24
      },
      "abilities": {
        "str": 9,
        "dex": 6,
        "con": 8,
        "int": -3,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 33,
        "stealth": 27,
        "survival": 29
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7Q2oqIav1kEc15i0",
          "name": "Fangs",
          "bonus": 31,
          "damage": "3d12+14 piercing",
          "traits": [
            "reach-15"
          ]
        },
        {
          "id": "JnXPhKibV082WlYF",
          "name": "Spittle",
          "bonus": 28,
          "damage": "1d12 acid",
          "traits": [
            "acid"
          ]
        }
      ],
      "actions": [
        {
          "id": "Z38PhK5nKWt7x9FL",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "TowRcjxa5ZN7kGUP",
          "name": "Hydra Regeneration",
          "kind": "passive",
          "description": "The hydra has regeneration equal to 3 × the number of heads it has. If a hydra's body is missing any heads and the remaining stumps have not been cauterized, the hydra attempts a check (fortitude, immutable:true, dc:39) save after it regains Hit Points from regeneration. On a success, one uncauterized stump regrows two heads; on a critical success, two uncauterized stumps regrow into two heads each. The hydra can never grow more than double the number of heads it ordinarily has. The hydra's regeneration only fully deactivates if all its heads are severed and all stumps are cauterized, at which point it dies.",
          "traits": []
        },
        {
          "id": "2hZrkUJrzTfsUVpv",
          "name": "Prismatic Backlash",
          "kind": "reaction",
          "description": "Trigger A creature successfully cauterizes one of the prismhydra's stumps\nEffect The unstable prismatic energies in the prismhydra's body surge forth. Each creature adjacent to the prismhydra is exposed to its chromatic explosion.",
          "traits": []
        },
        {
          "id": "tHcAM0IJtyMBlTXA",
          "name": "Prismatic Head Regrowth",
          "kind": "passive",
          "description": "A prismhydra ordinarily has eight heads. A creature can attempt to sever one of the hydra's heads by specifically targeting it and dealing damage equal to the head's Hit Points. A head that is not completely severed returns to full Hit Points at the end of any creature's turn. A hydra can regrow a severed head using hydra regeneration.\nEach head requires a different type of damage to cauterize; typically, two heads each are vulnerable to acid, cold, electricity, and fire damage, but other combinations or more exotic vulnerabilities are possible. When a prismhydra successfully regrows heads, all the heads regrown have the same vulnerability, which must be the same as the vulnerability of one of the prismhydra's unsevered heads.\nIf all eight heads are cauterized, the hydra dies.\nEffect: Hydra Heads",
          "traits": []
        },
        {
          "id": "CEXfPm5kOtVj4aSz",
          "name": "Prismhydra Heads",
          "kind": "passive",
          "description": "HP (head) 36, prismatic head regrowth\nImmunities area damage\nWeaknesses slashing 15",
          "traits": []
        },
        {
          "id": "PjV6SBjIY1Ge7WUB",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A hydra gains an extra reaction per round for each of its heads beyond the first, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the hydra must use a different head for each Reactive Strike it makes. Whenever one of the hydra's heads is severed, the hydra loses 1 of its extra reactions per round.",
          "traits": []
        },
        {
          "id": "FGdCWpMGifRh1eVg",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "k08YNB4ccJD1Ohew",
          "name": "Chromatic Explosion",
          "kind": "passive",
          "description": "A prismhydra's heads are replete with arcane energy. Whenever the prismhydra successfully Strikes an opponent with its spittle, or when an opponent cauterizes one of the prismhydra's heads, the opponent takes 6d6 damage of the type matching the head's vulnerability (typically 6d6 acid damage, 6d6 cold damage, 6d6 fire damage, or 6d6 electricity damage), with a check (reflex, dc:37, basic) save.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "uZJOdounIHaFDC1t",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2QzqOGUtRLmtvpCx",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "Z38PhK5nKWt7x9FL",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 812,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Hydra Heads",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "tHcAM0IJtyMBlTXA",
          "name": "Prismatic Head Regrowth",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "FGdCWpMGifRh1eVg",
          "name": "Reactive Strike",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:thruneosaurus-rex",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "NlG7uRoG4hPE5ink",
      "slug": "thruneosaurus-rex",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0518197277bddc292d139de92ff8ac3a9d1d7179f3d040baed5ac892228c968e",
    "translatableHash": "sha256:2e238361df935b30790f2ff02aed5ef611790fc5d6061abea569e34a99547b35",
    "data": {
      "schemaVersion": 1,
      "name": "Thruneosaurus Rex",
      "level": 17,
      "rarity": "rare",
      "size": "gargantuan",
      "traits": [
        "beast",
        "devil",
        "dinosaur",
        "unholy"
      ],
      "description": "The unholy terror known as the thruneosaurus rex is not a natural beast. They were created by Chelaxian diabolists who sought to combine the ferocity of dinosaurs with the power of Hell, infusing a clutch of tyrannosaurus rex eggs from Mediogalti Island with devil ichor and naming the monstrous hatchlings after their patrons. Although few records and fewer survivors tell exactly how the experiment went awry, the experimental subjects escaped, and their descendants are now most often sighted in the Whisperwood in eastern Cheliax.",
      "armorClass": 39,
      "hitPoints": 290,
      "speedFeet": 40,
      "perception": {
        "modifier": 29,
        "senses": [
          "greater-darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 31,
        "reflex": 25,
        "will": 29
      },
      "abilities": {
        "str": 10,
        "dex": 3,
        "con": 6,
        "int": -2,
        "wis": 6,
        "cha": 5
      },
      "skills": {
        "acrobatics": 30,
        "athletics": 35,
        "intimidation": 30
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
          "physical 15 except silver"
        ],
        "weaknesses": [
          "holy 15"
        ]
      },
      "attacks": [
        {
          "id": "vTNbf1shKiKvtSqr",
          "name": "Jaws",
          "bonus": 33,
          "damage": "3d12+16 piercing",
          "traits": [
            "magical",
            "reach-20",
            "unarmed"
          ]
        },
        {
          "id": "GAc0UZL6Q6kXsnbL",
          "name": "Foot",
          "bonus": 33,
          "damage": "3d10+16 bludgeoning",
          "traits": [
            "magical",
            "reach-15",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "yDLX2GlbNpM6KiPr",
          "name": "Frightful Presence",
          "kind": "passive",
          "description": "90 feet. check (will, dc:38, options:area-effect,inflicts:frightened)",
          "traits": [
            "aura",
            "divine",
            "emotion",
            "fear",
            "mental"
          ]
        },
        {
          "id": "9JFkjEnfVFnAuNdf",
          "name": "Instinctive Teleportation",
          "kind": "reaction",
          "description": "Trigger The thruneosaurus takes damage from a holy effect\nEffect The thruneosaurus teleports to an open space within 60 feet it can see, along with any creatures it has swallowed whole.",
          "traits": [
            "divine",
            "teleportation"
          ]
        },
        {
          "id": "DWRlaBfxXrVIyZMy",
          "name": "Hellfire Blast",
          "kind": "action",
          "description": "The thruneosaurus channels sulfurous hellfire in one of three ways. The thruneosaurus chooses the effect, but it can't make the same choice in two consecutive rounds.\n• Blistering Sun (divine, fire, unholy) The thruneosaurus ignites an orb of hellfire between its horns that radiates heat in a 30-foot emanation, dealing 2d8 persistent fire damage.\n• Choking Fumes (divine, poison, unholy) The thruneosaurus exhales a 60-foot cone of sulfurous smoke that deals 6d8 poison damage (check (fortitude, dc:38, traits:divine,poison,unholy, basic, options:area-effect) save). Creatures that fail their saves are Sickened 2.\n• Fiery Beam (divine, fire, unholy) A 120-foot line of hellish flame erupts from the thruneosaurus's eyes, dealing 6d10 fire damage (check (reflex, dc:38, traits:divine,fire,unholy, basic, options:area-effect) save).",
          "traits": []
        },
        {
          "id": "4fGuvczDlhRcOBA4",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Huge, 3d12+10 bludgeoning damage, Rupture 40",
          "traits": [
            "attack"
          ]
        },
        {
          "id": "A580uYihLCUrFhAz",
          "name": "Trample",
          "kind": "action",
          "description": "Huge or smaller, foot, check (reflex, dc:38, basic)",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.etMnv73EIdEZrYYu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.etMnv73EIdEZrYYu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "etMnv73EIdEZrYYu",
          "sourceId": "etMnv73EIdEZrYYu",
          "name": "Frightful Presence",
          "type": "action"
        },
        "owner": {
          "sourceId": "yDLX2GlbNpM6KiPr",
          "name": "Frightful Presence",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 723,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Sickened",
          "sourceId": "fesd1n5eVhpCSS18",
          "name": "Sickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "DWRlaBfxXrVIyZMy",
          "name": "Hellfire Blast",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.uJSseLa57HZYSMUu",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "uJSseLa57HZYSMUu",
          "sourceId": "uJSseLa57HZYSMUu",
          "name": "Swallow Whole",
          "type": "action"
        },
        "owner": {
          "sourceId": "4fGuvczDlhRcOBA4",
          "name": "Swallow Whole",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.UNah0bxXxkcZjxO3",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "UNah0bxXxkcZjxO3",
          "sourceId": "UNah0bxXxkcZjxO3",
          "name": "Trample",
          "type": "action"
        },
        "owner": {
          "sourceId": "A580uYihLCUrFhAz",
          "name": "Trample",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:mocking-chorus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "7peOc9dbnQuIx2AP",
      "slug": "mocking-chorus",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d0e628d05996c9786d983c1d8a106d7d5b333d828959d5ae27f64c6000105bbc",
    "translatableHash": "sha256:3d262b09b3bccdc71f0bdac4eb4c782cf8bf97e055b10198da17f44c3a5b5770",
    "data": {
      "schemaVersion": 1,
      "name": "Mocking Chorus",
      "level": 18,
      "rarity": "rare",
      "size": "huge",
      "traits": [
        "beast"
      ],
      "description": "Among the many unique creatures of the Inner Sea, the hydras known as mocking choruses that stalk the River Kingdoms may be one of the most reviled. While as ferocious in direct combat as others of their kind, chorusus are a singular type of challenge for warriors that hunt them due not to their sharp teeth, but instead a sharp and subtle tongue. Their strangely cunning tactics and power to turn longtime friends into bitter enemies brings doubt to even the closest of allies.\nMocking choruses exhibit behavior that seem to indicate a more elevated intelligence than other hydras. They do not appear to eat in large quantities, leaving little sign they have passed by and spurring rumors that they prey on settlements more for sport than sustenance. Every few years sees a new story of a whole village turning on itself. Neighbor against neighbor, the village tears itself apart; some go missing, and only the sounds of hissing laughter precede the event.",
      "armorClass": 41,
      "hitPoints": 340,
      "speedFeet": 35,
      "perception": {
        "modifier": 30,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 33,
        "reflex": 30,
        "will": 30
      },
      "abilities": {
        "str": 9,
        "dex": 4,
        "con": 6,
        "int": -2,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "athletics": 35,
        "deception": 36,
        "performance": 35
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "auditory",
          "sonic"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "K1AptqaFSIRcDK2e",
          "name": "Jaws",
          "bonus": 37,
          "damage": "4d12+14 piercing",
          "traits": [
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "dZ3oXRanwLOJQcnw",
          "name": "Harsh Language",
          "bonus": 35,
          "damage": "4d10+14 sonic",
          "traits": [
            "auditory"
          ]
        }
      ],
      "actions": [
        {
          "id": "GOAuy9ijyEzooVLR",
          "name": "Uncanny Mimicry",
          "kind": "passive",
          "description": "While unable to communicate for prolonged periods, a mocking chorus can precisely imitate a humanoid voice. If a creature speaks within audible range of the mocking chorus, the mocking chorus can speak using the creature's voice, even if it says different words than what were spoken. Creatures that hear the mocking chorus speak this way can attempt a check (will, dc:40) save to recognize the source. On a success, creatures gain a +1 circumstance bonus to all saving throws against the mocking chorus' abilities for 1 minute.",
          "traits": []
        },
        {
          "id": "qIF2Tt9LkgT4rhiN",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "LjUrbZvsKM9EoRtJ",
          "name": "Hydra Regeneration",
          "kind": "passive",
          "description": "The hydra has regeneration equal to 3 × the number of heads it has. If a hydra's body is missing any heads and the remaining stumps have not been cauterized, the hydra attempts a check (fortitude, immutable:true, dc:43) save after it regains Hit Points from regeneration. On a success, one uncauterized stump regrows two heads; on a critical success, two uncauterized stumps regrow into two heads each. The hydra can never grow more than double the number of heads it ordinarily has. The hydra's regeneration only fully deactivates if all its heads are severed and all stumps are cauterized, at which point it dies.",
          "traits": []
        },
        {
          "id": "ElsRoCwN3MxVJRly",
          "name": "Head Regrowth",
          "kind": "passive",
          "description": "A mocking chorus ordinarily has ten heads. A creature can attempt to sever one of the hydra's heads by specifically targeting it and dealing damage equal to the head's Hit Points. A head that is not completely severed returns to full Hit Points at the end of any creature's turn. A hydra can regrow a severed head using hydra regeneration. A creature can prevent this regrowth by dealing acid or fire damage to the stump, cauterizing it. Single-target acid or fire effects need to be targeted at a specific stump, but effects that deal splash damage or affect areas covering the hydra's whole space cauterize all stumps if they deal acid or fire damage. If the attack that severs a head deals any acid or fire damage, the stump is cauterized instantly. If all ten heads are cauterized, the hydra dies.\nEffect: Hydra Heads",
          "traits": []
        },
        {
          "id": "cXqMaFbDAXymsdwm",
          "name": "Mocking Chorus Head",
          "kind": "passive",
          "description": "HP (head) 35, head regrowth\nImmunities area damage\nWeakness slashing 10",
          "traits": []
        },
        {
          "id": "GMRmXeCJtb4dfXpG",
          "name": "Reactive Heads",
          "kind": "passive",
          "description": "A hydra gains an extra reaction per round for each of its heads beyond the first, which it can use only to make Reactive Strikes. It can't use more than 1 reaction on the same triggering action, even if a creature leaves several squares within its reach, and the hydra must use a different head for each Reactive Strike it makes. Whenever one of the hydra's heads is severed, the hydra loses 1 of its extra reactions per round.",
          "traits": []
        },
        {
          "id": "N9bWptF3zp8Wq4Uf",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": "",
          "traits": []
        },
        {
          "id": "LNIDuf4K5NOmol4v",
          "name": "Petty Whispers",
          "kind": "action",
          "description": "The mocking chorus adopts the voices of its enemies, spreading lies and jeers among would-be allies and tearing apart trusted friends. Creatures in a 60-foot emanation of the mocking chorus must attempt a check (will, dc:37, options:area-effect,damaging-effect) save. The mocking chorus can't use petty whispers again for 1 minute.\nCritical Success The creature is unaffected and is temporarily immune for 1 day.\nSuccess As failure, but the creature takes half damage and is not Confused.\nFailure The creature takes 12d10 mental damage and is confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.\nCritical Failure The creature takes 15d10 mental damage and is confused for 1 minute, with no save to end early.",
          "traits": [
            "auditory",
            "mental"
          ]
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/0/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.uZJOdounIHaFDC1t",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "uZJOdounIHaFDC1t",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "7tkuoaJ4BMY2oXmx",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 550,
        "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Confused",
          "sourceId": "yblD8fOR1J8rDwEQ",
          "name": "Confused",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LNIDuf4K5NOmol4v",
          "name": "Petty Whispers",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.9qV49KjZujZnSp6w",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "9qV49KjZujZnSp6w",
          "sourceId": "9qV49KjZujZnSp6w",
          "name": "All-Around Vision",
          "type": "action"
        },
        "owner": {
          "sourceId": "qIF2Tt9LkgT4rhiN",
          "name": "All-Around Vision",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 812,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Hydra Heads",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Hydra Heads",
          "sourceId": "uZJOdounIHaFDC1t",
          "name": "Effect: Hydra Heads",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ElsRoCwN3MxVJRly",
          "name": "Head Regrowth",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.W7SbTykXrNwxDzJc",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "W7SbTykXrNwxDzJc",
          "sourceId": "W7SbTykXrNwxDzJc",
          "name": "Reactive Strike",
          "type": "action"
        },
        "owner": {
          "sourceId": "N9bWptF3zp8Wq4Uf",
          "name": "Reactive Strike",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:barded-manticore",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "BTVLegvy1IhceQFf",
      "slug": "barded-manticore",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f058ee8ee66dd11145785c5b627a0d5decaf3d6284d88bf296e526ddd22c27a3",
    "translatableHash": "sha256:478c7eb932f8fdd83974456b0bfcb3dc7662db1b8af1ad723623ad7864281736",
    "data": {
      "schemaVersion": 1,
      "name": "Barded Manticore",
      "level": 18,
      "rarity": "rare",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Barded manticores are treacherous and dangerous beasts, and the only known member of the manticore species with the innate ability to cast spells. Luckily, these creatures are incredibly rare, mostly found near battlefields and other sources of worked metal, though stories tell of a particularly clever barded manticore attempting to make herself a home deep under the Magaambya.\nUnlike the other members of the species, a barded manticore has a face that resembles a human's and a torso coated in scales of varying metals, the exact composition depending on their diet. Thanks to these materials, most barded manticores are able to fend off just about any being attempting to encroach upon their territories, especially fiends and other creatures with weaknesses to specific metals. Barded manticores sift through metals obtained from their victims, whether that be local villagers coerced into giving them tribute or unlucky travelers, and seek the rarest, most valuable types to make part of their next meals.\nThis also includes armor and weapons inscribed with runes that grant a barded manticore the ability to cast spells, though these spells vary depending on the region the beast inhabits and what type of runes they consume. In rare areas where magic is suppressed, a barded manticore will be unable to grow their runed scales, rendering them less powerful than others of their kind. Pointing this out to such a barded manticore often ends in one's untimely demise at the manticore's claws and spines, no less sharp for the lack of enchantments.",
      "armorClass": 42,
      "hitPoints": 440,
      "speedFeet": 40,
      "perception": {
        "modifier": 33,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 32,
        "reflex": 30,
        "will": 29
      },
      "abilities": {
        "str": 9,
        "dex": 5,
        "con": 6,
        "int": 1,
        "wis": 5,
        "cha": 6
      },
      "skills": {
        "acrobatics": 31,
        "athletics": 35,
        "crafting": 29,
        "deception": 32,
        "intimidation": 32,
        "nature": 31
      },
      "languages": [
        "common",
        "mwangi"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "electricity 15"
        ]
      },
      "attacks": [
        {
          "id": "29OqtXhRNq3km1WH",
          "name": "Tail",
          "bonus": 33,
          "damage": "3d10+15 piercing; 1d12 electricity",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "RtmKtst46yPgfzpy",
          "name": "Claw",
          "bonus": 33,
          "damage": "3d8+15 slashing; 1d12 electricity",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        },
        {
          "id": "zVVyOSjfAgdEi7Dd",
          "name": "Spike",
          "bonus": 31,
          "damage": "3d8+15 piercing",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "HJT0yc4Pajblr1YZ",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ozg3kPXCLDVX4iV0",
          "name": "Spell Reflection",
          "kind": "reaction",
          "description": "Trigger An opponent casts a spell that targets the manticore and requires a saving throw\nEffect The manticore gains a +4 circumstance bonus to the saving throw. If they critically succeed at the save, they can choose a creature within 30 feet that was not originally targeted by the spell. That creature becomes a new target of the spell, who must attempt its own save against the same DC.",
          "traits": []
        },
        {
          "id": "qxNa3P8uZnbHTER0",
          "name": "Arrange Scales",
          "kind": "action",
          "description": "The barded manticore flexes the muscles under their scales to temporarily gain better protection. The manticore gains a +2 circumstance bonus to AC and resistance 15 to their choice of bludgeoning, piercing, or slashing damage. These benefits last until the beginning of the manticore's next turn or they use Arrange Scales again.",
          "traits": []
        },
        {
          "id": "RiXZj6oaa9kK9Som",
          "name": "Metallic Coating",
          "kind": "passive",
          "description": "A barded manticore's unarmed attacks (including spikes) count as adamantine, cold iron, dawnsilver, and silver.",
          "traits": []
        },
        {
          "id": "xOH25nEGFaWkOOeo",
          "name": "Paired Spikes",
          "kind": "action",
          "description": "The barded manticore flings two spikes from their tail, targeting up to two creatures within 20 feet of each other. They make a separate ranged Strike against each creature, which counts as a single Strike for the barded manticore's multiple attack penalty, and the penalty doesn't increase until they've made both Strikes. If the manticore targeted only one creature and hits, that creature takes normal damage for a single spike, but also gains weakness 15 to electricity damage until the spikes are removed with an Interact action.\nEffect: Paired Spikes",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "csBXQrxFqLKQBrPo",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 35,
          "saveDc": 40,
          "spells": [
            {
              "id": "pbFlPGv4kX3ghKJp",
              "name": "Detect Metal",
              "rank": 1
            },
            {
              "id": "kIEXDwg5DRAKByiX",
              "name": "Needle Darts",
              "rank": 1
            },
            {
              "id": "OzmeAyUvnep9y3xO",
              "name": "Tangle Vine",
              "rank": 1
            },
            {
              "id": "yD8UijO5DqawKTNw",
              "name": "One with Stone (At Will)",
              "rank": 3
            },
            {
              "id": "YVtgxeI6bPTgGigf",
              "name": "Impaling Spike (At-Will)",
              "rank": 5
            },
            {
              "id": "99gmG5IpMwSoHKla",
              "name": "Lightning Bolt (At-Will)",
              "rank": 5
            },
            {
              "id": "ALv35YfSuIivBdPx",
              "name": "Field of Razors",
              "rank": 6
            },
            {
              "id": "V6xPatf2nvkFuD6W",
              "name": "Tangling Creepers",
              "rank": 6
            },
            {
              "id": "qyW64plwy77HcWBi",
              "name": "Chain Lightning",
              "rank": 8
            },
            {
              "id": "jJt3CqWn57nL1Ono",
              "name": "Wrathful Storm",
              "rank": 9
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yLJROsQtyrPIKcDx",
          "sourceId": "yLJROsQtyrPIKcDx",
          "name": "Wrathful Storm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jJt3CqWn57nL1Ono",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 595,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "jJt3CqWn57nL1Ono",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 1209,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wrathful Storm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wrathful Storm",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Wrathful Storm",
          "sourceId": "SjxqjPDILhQWUcWf",
          "name": "Spell Effect: Wrathful Storm",
          "type": "effect"
        },
        "owner": {
          "sourceId": "jJt3CqWn57nL1Ono",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/10/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.uZK2BYzPnxUBnDjr",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "uZK2BYzPnxUBnDjr",
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        },
        "owner": {
          "sourceId": "OzmeAyUvnep9y3xO",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 146,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangle Vine",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangle Vine",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tangle Vine",
          "sourceId": "TwtUIEyenrtAbeiX",
          "name": "Spell Effect: Tangle Vine",
          "type": "effect"
        },
        "owner": {
          "sourceId": "OzmeAyUvnep9y3xO",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 283,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "OzmeAyUvnep9y3xO",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 435,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "OzmeAyUvnep9y3xO",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "2YRDYVnC1eljaXKK",
          "sourceId": "2YRDYVnC1eljaXKK",
          "name": "At-Will Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "HJT0yc4Pajblr1YZ",
          "name": "At-Will Spells",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/18/system/description/value",
        "sourceIndex": 545,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Paired Spikes",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Paired Spikes",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Paired Spikes",
          "sourceId": "nW9GbEP1NqFodqE0",
          "name": "Effect: Paired Spikes",
          "type": "effect"
        },
        "owner": {
          "sourceId": "xOH25nEGFaWkOOeo",
          "name": "Paired Spikes",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.TDNlDWbYb58Y55Da",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.TDNlDWbYb58Y55Da",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "TDNlDWbYb58Y55Da",
          "sourceId": "TDNlDWbYb58Y55Da",
          "name": "Chain Lightning",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qyW64plwy77HcWBi",
          "name": "Chain Lightning",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.MLYTWHfewOpI3Cz7",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.MLYTWHfewOpI3Cz7",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "MLYTWHfewOpI3Cz7",
          "sourceId": "MLYTWHfewOpI3Cz7",
          "name": "Field of Razors",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ALv35YfSuIivBdPx",
          "name": "Field of Razors",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.JbAcSLu62TU1OgNF",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.JbAcSLu62TU1OgNF",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "JbAcSLu62TU1OgNF",
          "sourceId": "JbAcSLu62TU1OgNF",
          "name": "Tangling Creepers",
          "type": "spell"
        },
        "owner": {
          "sourceId": "V6xPatf2nvkFuD6W",
          "name": "Tangling Creepers",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 513,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "V6xPatf2nvkFuD6W",
          "name": "Tangling Creepers",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 602,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": "Escapes",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "V6xPatf2nvkFuD6W",
          "name": "Tangling Creepers",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 713,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangling Creepers",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tangling Creepers",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tangling Creepers",
          "sourceId": "5RiskDnSXaRI6F4n",
          "name": "Spell Effect: Tangling Creepers",
          "type": "effect"
        },
        "owner": {
          "sourceId": "V6xPatf2nvkFuD6W",
          "name": "Tangling Creepers",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.oXeEbcUdgJGWHGEJ",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.oXeEbcUdgJGWHGEJ",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "oXeEbcUdgJGWHGEJ",
          "sourceId": "oXeEbcUdgJGWHGEJ",
          "name": "Impaling Spike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "YVtgxeI6bPTgGigf",
          "name": "Impaling Spike (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 568,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YVtgxeI6bPTgGigf",
          "name": "Impaling Spike (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 642,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "YVtgxeI6bPTgGigf",
          "name": "Impaling Spike (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/5/system/description/value",
        "sourceIndex": 987,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YVtgxeI6bPTgGigf",
          "name": "Impaling Spike (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.9AAkVUCwF6WVNNY2",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.9AAkVUCwF6WVNNY2",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "9AAkVUCwF6WVNNY2",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "99gmG5IpMwSoHKla",
          "name": "Lightning Bolt (At-Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.vh1RpbWfqdNC4L3P",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.vh1RpbWfqdNC4L3P",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "vh1RpbWfqdNC4L3P",
          "sourceId": "vh1RpbWfqdNC4L3P",
          "name": "One with Stone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "yD8UijO5DqawKTNw",
          "name": "One with Stone (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.vJZ83ehQiM906lea",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.vJZ83ehQiM906lea",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "vJZ83ehQiM906lea",
          "sourceId": "vJZ83ehQiM906lea",
          "name": "Detect Metal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "pbFlPGv4kX3ghKJp",
          "name": "Detect Metal",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 274,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "pbFlPGv4kX3ghKJp",
          "name": "Detect Metal",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/8/system/description/value",
        "sourceIndex": 346,
        "uuid": "Compendium.pf2e.spells-srd.Item.Invisibility",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Invisibility",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Invisibility",
          "sourceId": "XXqE1eY3w3z6xJCB",
          "name": "Invisibility",
          "type": "spell"
        },
        "owner": {
          "sourceId": "pbFlPGv4kX3ghKJp",
          "name": "Detect Metal",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.iYRDFxeVpJ5KIjmr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.iYRDFxeVpJ5KIjmr",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "iYRDFxeVpJ5KIjmr",
          "sourceId": "iYRDFxeVpJ5KIjmr",
          "name": "Needle Darts",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kIEXDwg5DRAKByiX",
          "name": "Needle Darts",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:warden-of-oceans-and-rivers",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "ApQvWxwCc5vtDvFD",
      "slug": "warden-of-oceans-and-rivers",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ef90e36fefbabf43e063c9a9bddd834d22907e64827dc46327985710f30a9e58",
    "translatableHash": "sha256:e74902e43fe7a142c960b829b6acae2c2122031b6a9c985ee1396a93a7d8633e",
    "data": {
      "schemaVersion": 1,
      "name": "Warden of Oceans and Rivers",
      "level": 22,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "aquatic",
        "beast",
        "water"
      ],
      "description": "A Vengeful Present\nIn past eras, the Warden of Oceans and Rivers was once connected to the world of landed creatures and deeply involved in their channels of commerce. Now the descendants of these creatures are unable to rely on the bounty of the sea and feel that they must take what they can to survive. Fishing folk must be swift and deliberate now that the oceans and rivers zealously protect their goods. It is for this reason not all agree with the new warden's tactics… and some wish to see the old ways restored.",
      "armorClass": 47,
      "hitPoints": 540,
      "speedFeet": 0,
      "perception": {
        "modifier": 39,
        "senses": [
          "darkvision",
          "scent-imprecise-200"
        ]
      },
      "saves": {
        "fortitude": 39,
        "reflex": 36,
        "will": 33
      },
      "abilities": {
        "str": 10,
        "dex": 9,
        "con": 12,
        "int": 6,
        "wis": 8,
        "cha": 6
      },
      "skills": {
        "acrobatics": 37,
        "athletics": 40,
        "intimidation": 36,
        "nature": 39,
        "stealth": 42,
        "survival": 42
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "controlled",
          "emotion",
          "mental",
          "poison",
          "precision"
        ],
        "resistances": [
          "bludgeoning 20",
          "cold 20"
        ],
        "weaknesses": [
          "electricity 15"
        ]
      },
      "attacks": [
        {
          "id": "135dFmYC9BQjv90E",
          "name": "Horned Crown",
          "bonus": 41,
          "damage": "2d8+15 cold; 2d8+15 poison",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "yCfEjoo6UvDDW8ZJ",
          "name": "Tentacle",
          "bonus": 43,
          "damage": "4d10+16 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "n7TzeTAoH4aBEHJB",
          "name": "Scent (Imprecise) 200 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "uqRchrc6ceHduMHl",
          "name": "Darkvision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "6SRhU9G1XZkwjfMR",
          "name": "Voice of Nature",
          "kind": "passive",
          "description": "Though the Wardens of the Wild do not speak in words, they can communicate complex concepts flawlessly and wordlessly with any animal, beast, plant, or other creature of the natural world through prolonged eye contact. Sapient creatures with strong ties to the natural world, such as animal instinct barbarians or druids who speak the Wildsong, can somewhat understand a Warden of the Wild, though the meaning can be vague.",
          "traits": []
        },
        {
          "id": "qq5PhCTOiPJctZ6R",
          "name": "Warden's Crown",
          "kind": "passive",
          "description": "A Warden of the Wild's horned crown commands respect from wild creatures. Wild creatures native to a warden's biome automatically improve their attitude toward it by one step (up to friendly) and typically do not take hostile actions towards each other while in the warden's presence.",
          "traits": []
        },
        {
          "id": "HCPqqVXXhdAZwHJD",
          "name": "+1 To All Saves vs. Primal",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "n7xlpAEzqjncArlj",
          "name": "Bioluminescent Maelstrom",
          "kind": "passive",
          "description": "30 feet. check (will, dc:45, options:area-effect,inflicts:dazzled)\nThe warden's wrath conjures a dazzling storm around them that makes the area difficult terrain. Creatures that enter the storm must attempt a Will save. A creature that succeeds at this save is temporarily immune to the luring visuals for 24 hours.\nSuccess The creature is unaffected.\nFailure The creature is Dazzled for 1 round, and for the first action on its next turn, the creature must use a single action to move as close to the warden as possible.\nCritical Failure The creature is dazzled for as long as it remains in the aura. Whenever the creature begins its turn within the aura, the creature must use the first action of its turn to move as close to the warden as possible. It can attempt a new save at the end of its turn, ending this effect on a success.",
          "traits": [
            "aura",
            "primal",
            "visual",
            "water"
          ]
        },
        {
          "id": "i4hk1NJdv96uNYdo",
          "name": "All Are One",
          "kind": "action",
          "description": "Frequency once per turn\nEffect The warden attracts organisms that extend their influence. The area of bioluminescent maelstrom and the reach of their tentacle Strike increase by 10 feet for 1 minute, to a maximum of an additional 30 feet.",
          "traits": []
        },
        {
          "id": "1YzPEJHi0V8SIf7l",
          "name": "Arctic Embrace",
          "kind": "action",
          "description": "All creatures in the warden's bioluminescent maelstrom take 10d6 cold damage (check (fortitude, dc:45, basic) save). On a failure, the creature is also Slowed 1 for 1 round.",
          "traits": [
            "cold"
          ]
        },
        {
          "id": "GzGiL0g8PtgRHP2r",
          "name": "Grasp of the Deep",
          "kind": "passive",
          "description": "Creatures struck by one of the warden's tentacles gain cold weakness 10 and take a –2 status penalty to Fortitude saves for 1 round.\nEffect: Grasp of the Deep",
          "traits": []
        },
        {
          "id": "avd6lE7DXF8bpEZv",
          "name": "I Am The Tide",
          "kind": "action",
          "description": "The warden creates three lines of rushing water, each 120-foot line. Creatures in the area take 18d8 bludgeoning damage (check (fortitude, dc:45, basic, options:area-effect) save). The warden can either push or pull, and all creatures that fail this save move up to 40 feet in the direction chosen. The warden can't use I Am The Tide again for 1d4.",
          "traits": [
            "primal",
            "water"
          ]
        },
        {
          "id": "YuQVBiDWQJ7MDC5X",
          "name": "What Lurks Beneath",
          "kind": "action",
          "description": "The warden attacks with their tentacles six times.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 143,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Grasp of the Deep",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Grasp of the Deep",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Grasp of the Deep",
          "sourceId": "HzPg4iUmO3F6tbK6",
          "name": "Effect: Grasp of the Deep",
          "type": "effect"
        },
        "owner": {
          "sourceId": "GzGiL0g8PtgRHP2r",
          "name": "Grasp of the Deep",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "rqfnQ5VHT5hxm25r",
          "sourceId": "rqfnQ5VHT5hxm25r",
          "name": "Scent",
          "type": "action"
        },
        "owner": {
          "sourceId": "n7TzeTAoH4aBEHJB",
          "name": "Scent (Imprecise) 200 feet",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "qCCLZhnp2HhP3Ex6",
          "sourceId": "qCCLZhnp2HhP3Ex6",
          "name": "Darkvision",
          "type": "action"
        },
        "owner": {
          "sourceId": "uqRchrc6ceHduMHl",
          "name": "Darkvision",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "QOwFuM3LwNzOSb6B",
          "sourceId": "QOwFuM3LwNzOSb6B",
          "name": "(Warden of the Wild) Voice of Nature",
          "type": "action"
        },
        "owner": {
          "sourceId": "6SRhU9G1XZkwjfMR",
          "name": "Voice of Nature",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "b0MH9TC5Cdnc9c0i",
          "sourceId": "b0MH9TC5Cdnc9c0i",
          "name": "(Warden of the Wild) Warden's Crown",
          "type": "action"
        },
        "owner": {
          "sourceId": "qq5PhCTOiPJctZ6R",
          "name": "Warden's Crown",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 446,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "n7xlpAEzqjncArlj",
          "name": "Bioluminescent Maelstrom",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 163,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "1YzPEJHi0V8SIf7l",
          "name": "Arctic Embrace",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:warden-of-peaks-and-skies",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "nQ6g5UbZFirINZoB",
      "slug": "warden-of-peaks-and-skies",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:406da4bb2ae9fbed8dbf297ad5bddd0cc402e4823033ea400abfe9d9435612be",
    "translatableHash": "sha256:abe915a390fa8e6b628c8c74cbbe8108bbc812945e0eb812a19ace6171c98df4",
    "data": {
      "schemaVersion": 1,
      "name": "Warden of Peaks and Skies",
      "level": 22,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "air",
        "beast"
      ],
      "description": "Warden's Blessing\nLegend says that the Warden of Peaks and Sky invites those who particularly earn their favor into their home, a nest within a hollow peak deep in the Kodar Mountains. There, the guest is treated to a grand feast, after which the warden offers to turn them into a thunderbird so they might enjoy the sky for the rest of their days, though they are not offended if anyone demurs.",
      "armorClass": 48,
      "hitPoints": 445,
      "speedFeet": 60,
      "perception": {
        "modifier": 40,
        "senses": [
          "darkvision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 36,
        "reflex": 40,
        "will": 38
      },
      "abilities": {
        "str": 8,
        "dex": 12,
        "con": 9,
        "int": 6,
        "wis": 10,
        "cha": 8
      },
      "skills": {
        "acrobatics": 42,
        "diplomacy": 34,
        "medicine": 38,
        "nature": 40,
        "survival": 38
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [
          "fire 15",
          "cold 15"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "C1DGneV06mtqJx96",
          "name": "Beak",
          "bonus": 41,
          "damage": "4d12+16 piercing",
          "traits": [
            "finesse",
            "magical",
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "YSewSdocRpcm8RvK",
          "name": "Horned Crown",
          "bonus": 41,
          "damage": "4d8+16 piercing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "JjHiKp0j8KrFAk7V",
          "name": "Gale Blast",
          "bonus": 39,
          "damage": "2d8+16 bludgeoning; 2d8 electricity",
          "traits": [
            "air",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "Gq6OE0nRVEbaqeuF",
          "name": "Scent (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "eRGyjwk9FcuBSfvt",
          "name": "Darkvision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "4S0TKyHtVQ0rTagU",
          "name": "Stormsight",
          "kind": "passive",
          "description": "Wind, precipitation, and clouds don't impair the warden's vision; she ignores the Concealed condition from storms, mist, precipitation, and the like.",
          "traits": []
        },
        {
          "id": "5W28CDdkSL1shdR1",
          "name": "Voice of Nature",
          "kind": "passive",
          "description": "Though the Wardens of the Wild do not speak in words, they can communicate complex concepts flawlessly and wordlessly with any animal, beast, plant, or other creature of the natural world through prolonged eye contact. Sapient creatures with strong ties to the natural world, such as animal instinct barbarians or druids who speak the Wildsong, can somewhat understand a Warden of the Wild, though the meaning can be vague.",
          "traits": []
        },
        {
          "id": "4XFCPLuB7hfdXmDz",
          "name": "Warden's Crown",
          "kind": "passive",
          "description": "A Warden of the Wild's horned crown commands respect from wild creatures. Wild creatures native to a warden's biome automatically improve their attitude toward it by one step (up to friendly) and typically do not take hostile actions towards each other while in the warden's presence.",
          "traits": []
        },
        {
          "id": "qE8cZAPciUC2VTkE",
          "name": "+1 To All Saves vs. Primal",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "m31f7gFeLKTcuV5I",
          "name": "Crystal Exhalation",
          "kind": "action",
          "description": "The warden breathes, creating a storm of ice crystals. All creatures in a 60-foot cone take 4d8 cold damage (check (reflex, dc:44, basic, options:area-effect) save). On a critical failure, a creature is Immobilized by ice. The warden then can't use Crystal Exhalation for 1d4.",
          "traits": [
            "cold",
            "primal"
          ]
        },
        {
          "id": "OSyHzaEUEnuN2yN4",
          "name": "Orogenesis Dive",
          "kind": "action",
          "description": "The warden flies 240 feet upward in a straight line. As she does so, the ground in a 30-foot burst from her starting point rises into a 120-foot-high rocky pillar topped with a mountainous peak that becomes greater difficult terrain. All other creatures in that burst must succeed at a check (fortitude, dc:44) save or be Fatigued by the sudden altitude shift. The warden then flies straight downward to the center of the pillar's peak, driving her horns into the stone. As she lands, the newly formed mountains tremble. All other creatures in the area must succeed at a check (reflex, dc:42) save or plummet off the peaks, falling 120 feet and landing in the nearest square outside the area. The pillar is permanent.",
          "traits": [
            "air",
            "earth",
            "move",
            "primal"
          ]
        },
        {
          "id": "qOrbqjETiPFlD3bW",
          "name": "Song of the Skies",
          "kind": "action",
          "description": "The warden trills a cheerful birdsong, granting a boon to all allies within 60-foot emanation and evoking the freedom of flight. For the next minute, affected allies gain Unfettered Movement, a fly speed of 60 feet, and treat creatures on the ground as Off-Guard when they are airborne.\nEffect: Song of the Skies",
          "traits": [
            "air",
            "auditory",
            "primal"
          ]
        },
        {
          "id": "vBzwVdv5SH12bUnj",
          "name": "Tempest Downdrafts",
          "kind": "passive",
          "description": "Trigger The warden Flies\nEffects The warden's flapping wings generate powerful gusts that blow smaller creatures off course. A 60-foot emanation, centered on the warden, fills with lightning-pierced winds until the beginning of the warden's next turn. Creatures must succeed at a check (reflex, dc:42, options:area-effect,damaging-effect,inflicts:prone) save to take any move action within the winds; flying creatures use the outcome one degree of success worse than what they roll. Creatures who critically fail are blown 30 feet away from the warden, knocked Prone, and take 4d6 electricity damage.",
          "traits": [
            "air",
            "primal"
          ]
        }
      ],
      "spellcasting": [
        {
          "id": "UgdTI4Nttl25n1iA",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 45,
          "spells": [
            {
              "id": "YjIyKxpkRwyxBSXr",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            },
            {
              "id": "507orp3stGtRHDW6",
              "name": "Soothing Spring",
              "rank": 9
            },
            {
              "id": "rvd8wj7oTSC3S2cg",
              "name": "Revival",
              "rank": 10
            },
            {
              "id": "UTLcX6C9M74jVscH",
              "name": "Wrathful Storm",
              "rank": 10
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.HpIJTVqgXorH9X0L",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.HpIJTVqgXorH9X0L",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "HpIJTVqgXorH9X0L",
          "sourceId": "HpIJTVqgXorH9X0L",
          "name": "Revival",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rvd8wj7oTSC3S2cg",
          "name": "Revival",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 265,
        "uuid": "Compendium.pf2e.spells-srd.Item.Raise Dead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Raise Dead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Raise Dead",
          "sourceId": "IkGYwHRLhkuoGReG",
          "name": "Raise Dead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rvd8wj7oTSC3S2cg",
          "name": "Revival",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/1/system/description/value",
        "sourceIndex": 688,
        "uuid": "Compendium.pf2e.spells-srd.Item.Disintegrate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Disintegrate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Disintegrate",
          "sourceId": "r7ihOgKv19eJQnik",
          "name": "Disintegrate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rvd8wj7oTSC3S2cg",
          "name": "Revival",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 85,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4S0TKyHtVQ0rTagU",
          "name": "Stormsight",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/11/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "QOwFuM3LwNzOSb6B",
          "sourceId": "QOwFuM3LwNzOSb6B",
          "name": "(Warden of the Wild) Voice of Nature",
          "type": "action"
        },
        "owner": {
          "sourceId": "5W28CDdkSL1shdR1",
          "name": "Voice of Nature",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "b0MH9TC5Cdnc9c0i",
          "sourceId": "b0MH9TC5Cdnc9c0i",
          "name": "(Warden of the Wild) Warden's Crown",
          "type": "action"
        },
        "owner": {
          "sourceId": "4XFCPLuB7hfdXmDz",
          "name": "Warden's Crown",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/14/system/description/value",
        "sourceIndex": 296,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "m31f7gFeLKTcuV5I",
          "name": "Crystal Exhalation",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/15/system/description/value",
        "sourceIndex": 339,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "OSyHzaEUEnuN2yN4",
          "name": "Orogenesis Dive",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/16/system/description/value",
        "sourceIndex": 198,
        "uuid": "Compendium.pf2e.spells-srd.Item.Unfettered Movement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Unfettered Movement",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Unfettered Movement",
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qOrbqjETiPFlD3bW",
          "name": "Song of the Skies",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/16/system/description/value",
        "sourceIndex": 319,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qOrbqjETiPFlD3bW",
          "name": "Song of the Skies",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/16/system/description/value",
        "sourceIndex": 403,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Song of the Skies",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Song of the Skies",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Song of the Skies",
          "sourceId": "dZDpfgU63rXbBHpe",
          "name": "Effect: Song of the Skies",
          "type": "effect"
        },
        "owner": {
          "sourceId": "qOrbqjETiPFlD3bW",
          "name": "Song of the Skies",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/17/system/description/value",
        "sourceIndex": 625,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "vBzwVdv5SH12bUnj",
          "name": "Tempest Downdrafts",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.yLJROsQtyrPIKcDx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "yLJROsQtyrPIKcDx",
          "sourceId": "yLJROsQtyrPIKcDx",
          "name": "Wrathful Storm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "UTLcX6C9M74jVscH",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 595,
        "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Concealed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Concealed",
          "sourceId": "DmAIPqOBomZ7H95W",
          "name": "Concealed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "UTLcX6C9M74jVscH",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/2/system/description/value",
        "sourceIndex": 1209,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wrathful Storm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Wrathful Storm",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Wrathful Storm",
          "sourceId": "SjxqjPDILhQWUcWf",
          "name": "Spell Effect: Wrathful Storm",
          "type": "effect"
        },
        "owner": {
          "sourceId": "UTLcX6C9M74jVscH",
          "name": "Wrathful Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.fH08MI4KP0KH2EQ9",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.fH08MI4KP0KH2EQ9",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "fH08MI4KP0KH2EQ9",
          "sourceId": "fH08MI4KP0KH2EQ9",
          "name": "Soothing Spring",
          "type": "spell"
        },
        "owner": {
          "sourceId": "507orp3stGtRHDW6",
          "name": "Soothing Spring",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.aqRYNoSvxsVfqglH",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.aqRYNoSvxsVfqglH",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "aqRYNoSvxsVfqglH",
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 207,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Escape",
          "sourceId": "SkZAQRkLLkmBQNB9",
          "name": "Escape",
          "type": "action"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 334,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 389,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/4/system/description/value",
        "sourceIndex": 573,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Unfettered Movement",
          "sourceId": "CdAyAiMGESvgNQtz",
          "name": "Spell Effect: Unfettered Movement",
          "type": "effect"
        },
        "owner": {
          "sourceId": "YjIyKxpkRwyxBSXr",
          "name": "Unfettered Movement (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/8/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "rqfnQ5VHT5hxm25r",
          "sourceId": "rqfnQ5VHT5hxm25r",
          "name": "Scent",
          "type": "action"
        },
        "owner": {
          "sourceId": "Gq6OE0nRVEbaqeuF",
          "name": "Scent (Imprecise) 60 feet",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/9/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "qCCLZhnp2HhP3Ex6",
          "sourceId": "qCCLZhnp2HhP3Ex6",
          "name": "Darkvision",
          "type": "action"
        },
        "owner": {
          "sourceId": "eRGyjwk9FcuBSfvt",
          "name": "Darkvision",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:warden-of-caverns-and-burrows",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "NYRk2xqxid0lfNka",
      "slug": "warden-of-caverns-and-burrows",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c471aad28d8b49bb05d6682542ed2696b03cd01b767d69142014a7076e068eed",
    "translatableHash": "sha256:e616696b32faf7c19a05b607d9f12ef6b1958f72f0c5ef4a78be22eda6905b6f",
    "data": {
      "schemaVersion": 1,
      "name": "Warden of Caverns and Burrows",
      "level": 22,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "beast",
        "earth"
      ],
      "description": "The Connected Depths\nAs much as air currents flow through the skies, and the oceans connect the waters of world, the caverns and depths connect to each other as well, via several means. Underground flows of lava create tunnels and passages. Water's erosion also forms cave systems out of the stone.",
      "armorClass": 45,
      "hitPoints": 500,
      "speedFeet": 40,
      "perception": {
        "modifier": 36,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 39,
        "reflex": 36,
        "will": 33
      },
      "abilities": {
        "str": 12,
        "dex": 8,
        "con": 10,
        "int": 6,
        "wis": 8,
        "cha": 9
      },
      "skills": {
        "athletics": 42,
        "intimidation": 37,
        "stealth": 37
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 10 except adamantine",
          "sonic 20"
        ],
        "weaknesses": [
          "cold 20"
        ]
      },
      "attacks": [
        {
          "id": "yDtPrdd81s73bI6r",
          "name": "Horned Crown",
          "bonus": 41,
          "damage": "4d12+22 piercing",
          "traits": [
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "sbAbmSMtwJCDICCv",
          "name": "Mandible",
          "bonus": 41,
          "damage": "4d10+22 bludgeoning",
          "traits": [
            "agile",
            "magical",
            "reach-15"
          ]
        },
        {
          "id": "98f2K4VExqOfoQT1",
          "name": "Chirp",
          "bonus": 33,
          "damage": "4d10+18 sonic",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "tUmYtOLVyIAMvnKh",
          "name": "Magma Jet",
          "bonus": 33,
          "damage": "4d8+13 fire; 2d6 fire",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "S9ryaRNbSNZdPBhU",
          "name": "Tremorsense (Imprecise) 60 feet",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "ntJGDp2qJoHuG1GP",
          "name": "Darkvision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "froEwR05j1sIErDb",
          "name": "Voice of Nature",
          "kind": "passive",
          "description": "Though the Wardens of the Wild do not speak in words, they can communicate complex concepts flawlessly and wordlessly with any animal, beast, plant, or other creature of the natural world through prolonged eye contact. Sapient creatures with strong ties to the natural world, such as animal instinct barbarians or druids who speak the Wildsong, can somewhat understand a Warden of the Wild, though the meaning can be vague.",
          "traits": []
        },
        {
          "id": "M6uEBleX6mMYU242",
          "name": "Warden's Crown",
          "kind": "passive",
          "description": "A Warden of the Wild's horned crown commands respect from wild creatures. Wild creatures native to a warden's biome automatically improve their attitude toward it by one step (up to friendly) and typically do not take hostile actions towards each other while in the warden's presence.",
          "traits": []
        },
        {
          "id": "VAexo9PzHHfjyq7w",
          "name": "+1 To All Saves vs. Primal",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "xZpqgaOSfAIieweF",
          "name": "Magmatic Reflex",
          "kind": "reaction",
          "description": "Trigger The warden is targeted with an attack\nEffect The warden issues a spray of magma as they jump away from danger. This spray deals 6d12 fire damage to all adjacent creatures (check (reflex, dc:42, basic) save). They then Leap or Step away, gaining a +2 circumstance bonus to their AC against the triggering attack.",
          "traits": []
        },
        {
          "id": "9y73RR8Oukdu0LR2",
          "name": "Bury Beneath Stone",
          "kind": "action",
          "description": "Requirements The warden has a creature Grabbed\nEffect The warden attempts to wedge a creature they have grabbed in their mandibles within a crack in the earth that opens beneath them. The warden attempts an check (athletics, defense:reflex) check against the grabbed creature's Reflex DC. If they succeed, they bury the creature in the ground. The creature takes 10d10 bludgeoning damage. It is also Restrained, Slowed 1, and has to hold its breath or start suffocating until it Escape DC 42. If the creature is still buried at the end of its turn, it takes 5d10 bludgeoning damage.",
          "traits": [
            "attack",
            "primal"
          ]
        },
        {
          "id": "1R03lSgMof62gZ9x",
          "name": "Called to Depths",
          "kind": "passive",
          "description": "The depths call to the warden, especially as they move through the air. When they Long Jump, they can use any unused movement from the Long Jump to Burrow. Additionally, the warden can Burrow through any earthen matter, including rock. When they do so, they move at their full burrow Speed.",
          "traits": []
        },
        {
          "id": "twmWdzuIfOtysw73",
          "name": "Erupting Jump",
          "kind": "action",
          "description": "The warden draws out a stream of lava, then jumps off the solidifying mass as it cools. The warden Leaps up to twice their Speed. When they land, the force of the impact deals 6d12 bludgeoning damage to all creatures within a 15-foot emanation with a check (fortitude, dc:42, basic, options:area-effect) save. On a critical failure, the creature is also pushed 10 feet away from the warden.",
          "traits": [
            "primal"
          ]
        },
        {
          "id": "tCBjmjZJjM3CRcp6",
          "name": "Obsidian Cage",
          "kind": "passive",
          "description": "Rapidly cooling obsidian clings to the target's body and stiffens around their limbs. The target must attempt a check (reflex, dc:42) save. On a failure, the target is Immobilized until they Escape DC 42. On a critical failure, the target is Off-Guard for as long as they remain immobilized.",
          "traits": []
        },
        {
          "id": "SMbxooGFfHJk1iAh",
          "name": "Vibratory Excavation",
          "kind": "action",
          "description": "The warden screeches with a resonant call that tears apart earth and stone. They create a 10-foot-square, 50-foot-deep pit in earthen material or stone within 60 feet.",
          "traits": [
            "manipulate",
            "primal"
          ]
        },
        {
          "id": "DbnyJTJcNZglKgOK",
          "name": "Wall Cling",
          "kind": "passive",
          "description": "The Warden of Caverns and Burrows clings to surfaces with their segmented feet. They do not need to use a hand to hold on to walls or ceilings.",
          "traits": []
        }
      ],
      "spellcasting": []
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 59,
        "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Grabbed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Grabbed",
          "sourceId": "kWc1fhmv9LBiTuei",
          "name": "Grabbed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9y73RR8Oukdu0LR2",
          "name": "Bury Beneath Stone",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 501,
        "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Restrained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Restrained",
          "sourceId": "VcDeM8A5oI6VqhbM",
          "name": "Restrained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9y73RR8Oukdu0LR2",
          "name": "Bury Beneath Stone",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/10/system/description/value",
        "sourceIndex": 556,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9y73RR8Oukdu0LR2",
          "name": "Bury Beneath Stone",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 85,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Long Jump",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Long Jump",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Long Jump",
          "sourceId": "JUvAvruz7yRQXfz2",
          "name": "Long Jump",
          "type": "action"
        },
        "owner": {
          "sourceId": "1R03lSgMof62gZ9x",
          "name": "Called to Depths",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/11/system/description/value",
        "sourceIndex": 191,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Burrow",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Burrow",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Burrow",
          "sourceId": "H6v1VgowHaKHnVlG",
          "name": "Burrow",
          "type": "action"
        },
        "owner": {
          "sourceId": "1R03lSgMof62gZ9x",
          "name": "Called to Depths",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/12/system/description/value",
        "sourceIndex": 102,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": "Leaps",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "twmWdzuIfOtysw73",
          "name": "Erupting Jump",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 170,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Immobilized",
          "sourceId": "eIcWbB5o3pP6OIMe",
          "name": "Immobilized",
          "type": "condition"
        },
        "owner": {
          "sourceId": "tCBjmjZJjM3CRcp6",
          "name": "Obsidian Cage",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/13/system/description/value",
        "sourceIndex": 296,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "tCBjmjZJjM3CRcp6",
          "name": "Obsidian Cage",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.j2wsK6IsW5yMW1jW",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.j2wsK6IsW5yMW1jW",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "j2wsK6IsW5yMW1jW",
          "sourceId": "j2wsK6IsW5yMW1jW",
          "name": "Tremorsense",
          "type": "action"
        },
        "owner": {
          "sourceId": "S9ryaRNbSNZdPBhU",
          "name": "Tremorsense (Imprecise) 60 feet",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.qCCLZhnp2HhP3Ex6",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "qCCLZhnp2HhP3Ex6",
          "sourceId": "qCCLZhnp2HhP3Ex6",
          "name": "Darkvision",
          "type": "action"
        },
        "owner": {
          "sourceId": "ntJGDp2qJoHuG1GP",
          "name": "Darkvision",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "QOwFuM3LwNzOSb6B",
          "sourceId": "QOwFuM3LwNzOSb6B",
          "name": "(Warden of the Wild) Voice of Nature",
          "type": "action"
        },
        "owner": {
          "sourceId": "froEwR05j1sIErDb",
          "name": "Voice of Nature",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "b0MH9TC5Cdnc9c0i",
          "sourceId": "b0MH9TC5Cdnc9c0i",
          "name": "(Warden of the Wild) Warden's Crown",
          "type": "action"
        },
        "owner": {
          "sourceId": "M6uEBleX6mMYU242",
          "name": "Warden's Crown",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/9/system/description/value",
        "sourceIndex": 285,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Leap",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Leap",
          "sourceId": "d5I6018Mci2SWokk",
          "name": "Leap",
          "type": "action"
        },
        "owner": {
          "sourceId": "xZpqgaOSfAIieweF",
          "name": "Magmatic Reflex",
          "type": "action"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:bestiary:howl-of-the-wild-bestiary:warden-of-forests-and-meadows",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "howl-of-the-wild-bestiary",
      "sourceId": "Z5c8wJajbyEMNhEB",
      "slug": "warden-of-forests-and-meadows",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:19e2cf354144d12f0167f54a033e5b83e17d3fe33ced87e09e94e2b5fa63b9a1",
    "translatableHash": "sha256:04e677f4fd14a498c1f60f2b85d4dafeec2e90d77876c6555201e2060176322d",
    "data": {
      "schemaVersion": 1,
      "name": "Warden of Forests and Meadows",
      "level": 22,
      "rarity": "unique",
      "size": "gargantuan",
      "traits": [
        "beast",
        "wood"
      ],
      "description": "",
      "armorClass": 48,
      "hitPoints": 435,
      "speedFeet": 60,
      "perception": {
        "modifier": 36,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 34,
        "reflex": 42,
        "will": 36
      },
      "abilities": {
        "str": 7,
        "dex": 10,
        "con": 8,
        "int": 11,
        "wis": 8,
        "cha": 12
      },
      "skills": {
        "acrobatics": 40,
        "deception": 44,
        "diplomacy": 40,
        "intimidation": 42,
        "nature": 36,
        "society": 39,
        "stealth": 42,
        "survival": 36,
        "thievery": 40
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "3aWBVEr9HRCkIg9u",
          "name": "Jaws",
          "bonus": 38,
          "damage": "4d10+15 piercing",
          "traits": [
            "finesse",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "OJKysl0zYDjsq0iN",
          "name": "Horned Crown",
          "bonus": 40,
          "damage": "4d8+15 piercing; 2d6 poison",
          "traits": [
            "finesse",
            "magical",
            "reach-10"
          ]
        },
        {
          "id": "2oCw2AGSxokDl7n3",
          "name": "Claw",
          "bonus": 40,
          "damage": "4d6+15 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "reach-15",
            "unarmed"
          ]
        },
        {
          "id": "aVaNQBhC7zeoa9iF",
          "name": "Fox's Laughter",
          "bonus": 40,
          "damage": "4d10 sonic; 3d6 mental",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "1R8PWuHBDbd9b0TC",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "IJZMgEcem0MQFSlW",
          "name": "Scent (Imprecise) 1 mile",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "jNiNkOIBxGv7ls8D",
          "name": "Voice of Nature",
          "kind": "passive",
          "description": "Though the Wardens of the Wild do not speak in words, they can communicate complex concepts flawlessly and wordlessly with any animal, beast, plant, or other creature of the natural world through prolonged eye contact. Sapient creatures with strong ties to the natural world, such as animal instinct barbarians or druids who speak the Wildsong, can somewhat understand a Warden of the Wild, though the meaning can be vague.",
          "traits": []
        },
        {
          "id": "SqsiYSb8KFHPnGDY",
          "name": "Warden's Crown",
          "kind": "passive",
          "description": "A Warden of the Wild's horned crown commands respect from wild creatures. Wild creatures native to a warden's biome automatically improve their attitude toward it by one step (up to friendly) and typically do not take hostile actions towards each other while in the warden's presence.",
          "traits": []
        },
        {
          "id": "iiSCtn7fVrib0nlZ",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "r04RtpdZGyU9kuHY",
          "name": "Constant Spells",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "JisHy0g8lu6mg8KG",
          "name": "+1 To All Saves vs. Primal",
          "kind": "passive",
          "description": "",
          "traits": []
        },
        {
          "id": "4hxuRQeozI2YcGao",
          "name": "Wild Trickery",
          "kind": "reaction",
          "description": "Trigger An enemy within 60 feet targets the warden with an attack, spell, or other ability\nEffect The triggering creature must attempt a check (will, dc:45) save. If it fails, the warden redirects the ability to target a different creature in range with a burst of mental laughter; this has no effect if there are no other eligible targets. The triggering creature is then temporarily immune for 24 hours unless it critically failed.",
          "traits": [
            "mental",
            "primal"
          ]
        },
        {
          "id": "mRMBYx28OBTaqHDC",
          "name": "Change Shape",
          "kind": "action",
          "description": "The warden transforms his size to Tiny, Small, Medium, or Huge (changing his reach to 0 feet for Tiny, 5 feet for Medium or Large, and 10 feet for Huge). The warden retains his shape but can change his color to any seasonal array.",
          "traits": [
            "concentrate",
            "polymorph",
            "primal"
          ]
        },
        {
          "id": "CSU1nwsLk8jcgev0",
          "name": "Forest Passage",
          "kind": "passive",
          "description": "The Warden of Forests and Meadows ignores difficult terrain and greater difficult terrain from non-magical foliage.",
          "traits": []
        },
        {
          "id": "q2Ut12vsCILmClE8",
          "name": "Fox's Wager",
          "kind": "action",
          "description": "The warden grants a boon to a willing creature he can see other than himself, requesting that the creature promise to use the granted power to destroy or undermine the creations of civilization. The target gains a +1 status bonus to attack rolls and a +5 status bonus to damage against constructs, objects, and structures constructed by humanoids. It also gains a +2 status bonus to Stealth checks against humanoids. The warden can have only one wager granted at a time. The wager ends if the target is captured or dies.\nEffect: Fox's Wager",
          "traits": [
            "concentrate",
            "mental",
            "primal"
          ]
        },
        {
          "id": "83BZB1SWTBDiRPsE",
          "name": "Idyllic Panorama",
          "kind": "action",
          "description": "Frequency once per hour\nEffect The warden creates an area of peaceful calm. This is identical to a 5th-rank Mirage depicting a peaceful meadow or forest, except the area is a 200-foot burst.\nWhile within the area of an Idyllic Panorama, the warden has significant control over the senses of creatures within the area and can cast Mislead and 2nd-rank Silence at will.",
          "traits": [
            "concentrate",
            "primal"
          ]
        },
        {
          "id": "dkMORZZnD9bglG5r",
          "name": "Magical Pounce",
          "kind": "action",
          "description": "The warden Strides up to his Speed, Leaps up to his Speed, or casts Translocate; at the end of that movement, the warden Strikes. If the warden began this action Hidden, he remains hidden until after this ability's Strike.",
          "traits": []
        },
        {
          "id": "83Iywqe20DHfskOo",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The warden deals an additional 3d6 precision damage to Off-Guard creatures.",
          "traits": []
        }
      ],
      "spellcasting": [
        {
          "id": "7ILmG1mGKeMECdm1",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 41,
          "saveDc": 45,
          "spells": [
            {
              "id": "vtJRimfTARI85B6v",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "5xY1DdTJO8FdEUw7",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "LaPTRGpzK0IQ9isS",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "rm6ZMQiF8ffRntpV",
              "name": "Truespeech (Constant)",
              "rank": 7
            },
            {
              "id": "umULVh3rmpjB3c58",
              "name": "Veil of Privacy (Constant)",
              "rank": 7
            },
            {
              "id": "2GYRWk1oEY0hR3QJ",
              "name": "Manifestation",
              "rank": 10
            },
            {
              "id": "82ZmcTblrv57vHOz",
              "name": "Petal Storm",
              "rank": 10
            }
          ]
        }
      ]
    },
    "sourceReferences": [
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/1/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.AuIiqc7jjiy1GZ75",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.AuIiqc7jjiy1GZ75",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "AuIiqc7jjiy1GZ75",
          "sourceId": "AuIiqc7jjiy1GZ75",
          "name": "Manifestation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2GYRWk1oEY0hR3QJ",
          "name": "Manifestation",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/12/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.4Ho2xMPEC05aSxzr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.4Ho2xMPEC05aSxzr",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "4Ho2xMPEC05aSxzr",
          "sourceId": "4Ho2xMPEC05aSxzr",
          "name": "Greater Darkvision",
          "type": "action"
        },
        "owner": {
          "sourceId": "1R8PWuHBDbd9b0TC",
          "name": "Greater Darkvision",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/13/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.rqfnQ5VHT5hxm25r",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "rqfnQ5VHT5hxm25r",
          "sourceId": "rqfnQ5VHT5hxm25r",
          "name": "Scent",
          "type": "action"
        },
        "owner": {
          "sourceId": "IJZMgEcem0MQFSlW",
          "name": "Scent (Imprecise) 1 mile",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/14/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.QOwFuM3LwNzOSb6B",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "QOwFuM3LwNzOSb6B",
          "sourceId": "QOwFuM3LwNzOSb6B",
          "name": "(Warden of the Wild) Voice of Nature",
          "type": "action"
        },
        "owner": {
          "sourceId": "jNiNkOIBxGv7ls8D",
          "name": "Voice of Nature",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/15/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.b0MH9TC5Cdnc9c0i",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "b0MH9TC5Cdnc9c0i",
          "sourceId": "b0MH9TC5Cdnc9c0i",
          "name": "(Warden of the Wild) Warden's Crown",
          "type": "action"
        },
        "owner": {
          "sourceId": "SqsiYSb8KFHPnGDY",
          "name": "Warden's Crown",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/16/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.2YRDYVnC1eljaXKK",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "2YRDYVnC1eljaXKK",
          "sourceId": "2YRDYVnC1eljaXKK",
          "name": "At-Will Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "iiSCtn7fVrib0nlZ",
          "name": "At-Will Spells",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/17/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.kakyXBG5WA8c6Zfd",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "kakyXBG5WA8c6Zfd",
          "sourceId": "kakyXBG5WA8c6Zfd",
          "name": "Constant Spells",
          "type": "action"
        },
        "owner": {
          "sourceId": "r04RtpdZGyU9kuHY",
          "name": "Constant Spells",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/2/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.SwUiVavHKMWG7t5K",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "SwUiVavHKMWG7t5K",
          "sourceId": "SwUiVavHKMWG7t5K",
          "name": "Truespeech",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rm6ZMQiF8ffRntpV",
          "name": "Truespeech (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/20/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.eQM5hQ1W3d1uen97",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "eQM5hQ1W3d1uen97",
          "sourceId": "eQM5hQ1W3d1uen97",
          "name": "Change Shape",
          "type": "action"
        },
        "owner": {
          "sourceId": "mRMBYx28OBTaqHDC",
          "name": "Change Shape",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/22/system/description/value",
        "sourceIndex": 531,
        "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Fox's Wager",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-effects.Item.Effect: Fox's Wager",
          "package": "pf2e",
          "sourcePack": "bestiary-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Fox's Wager",
          "sourceId": "Hc0BhuLHaldO3vqG",
          "name": "Effect: Fox's Wager",
          "type": "effect"
        },
        "owner": {
          "sourceId": "q2Ut12vsCILmClE8",
          "name": "Fox's Wager",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/23/system/description/value",
        "sourceIndex": 159,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mirage",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mirage",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mirage",
          "sourceId": "HBJPsonQnWcC3qdX",
          "name": "Mirage",
          "type": "spell"
        },
        "owner": {
          "sourceId": "83BZB1SWTBDiRPsE",
          "name": "Idyllic Panorama",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/23/system/description/value",
        "sourceIndex": 442,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mislead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mislead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mislead",
          "sourceId": "WPXzPl7YbMEIGWfi",
          "name": "Mislead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "83BZB1SWTBDiRPsE",
          "name": "Idyllic Panorama",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/23/system/description/value",
        "sourceIndex": 502,
        "uuid": "Compendium.pf2e.spells-srd.Item.Silence",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Silence",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Silence",
          "sourceId": "gIdDLrbswTV3OBJy",
          "name": "Silence",
          "type": "spell"
        },
        "owner": {
          "sourceId": "83BZB1SWTBDiRPsE",
          "name": "Idyllic Panorama",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/24/system/description/value",
        "sourceIndex": 71,
        "uuid": "Compendium.pf2e.spells-srd.Item.Translocate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Translocate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Translocate",
          "sourceId": "VlNcjmYyu95vOUe8",
          "name": "Translocate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "dkMORZZnD9bglG5r",
          "name": "Magical Pounce",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/24/system/description/value",
        "sourceIndex": 204,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dkMORZZnD9bglG5r",
          "name": "Magical Pounce",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/25/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.AWvNPE4U0kEJSL1T",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "AWvNPE4U0kEJSL1T",
          "sourceId": "AWvNPE4U0kEJSL1T",
          "name": "Sneak Attack",
          "type": "action"
        },
        "owner": {
          "sourceId": "83Iywqe20DHfskOo",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/25/system/description/value",
        "sourceIndex": 58,
        "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Off-Guard",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Off-Guard",
          "sourceId": "AJh5ex99aV6VTggg",
          "name": "Off-Guard",
          "type": "condition"
        },
        "owner": {
          "sourceId": "83Iywqe20DHfskOo",
          "name": "Sneak Attack",
          "type": "action"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/3/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.D31YX7zvRBvenTAz",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.D31YX7zvRBvenTAz",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "D31YX7zvRBvenTAz",
          "sourceId": "D31YX7zvRBvenTAz",
          "name": "Petal Storm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "82ZmcTblrv57vHOz",
          "name": "Petal Storm",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/4/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.VlNcjmYyu95vOUe8",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.VlNcjmYyu95vOUe8",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "VlNcjmYyu95vOUe8",
          "sourceId": "VlNcjmYyu95vOUe8",
          "name": "Translocate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LaPTRGpzK0IQ9isS",
          "name": "Translocate (At Will)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/5/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.EoKBlgf6Smt8opaU",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.EoKBlgf6Smt8opaU",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "EoKBlgf6Smt8opaU",
          "sourceId": "EoKBlgf6Smt8opaU",
          "name": "Veil of Privacy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "umULVh3rmpjB3c58",
          "name": "Veil of Privacy (Constant)",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/6/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.0zU8CPejjQFnhZFI",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "0zU8CPejjQFnhZFI",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "vtJRimfTARI85B6v",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "vtJRimfTARI85B6v",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/6/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vtJRimfTARI85B6v",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/items/7/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.WBmvzNDfpwka3qT4",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "WBmvzNDfpwka3qT4",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "5xY1DdTJO8FdEUw7",
          "name": "Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/items/7/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Light",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Light",
          "sourceId": "cVVZXNbV0nElVOPZ",
          "name": "Spell Effect: Light",
          "type": "effect"
        },
        "owner": {
          "sourceId": "5xY1DdTJO8FdEUw7",
          "name": "Light",
          "type": "spell"
        }
      }
    ]
  }
]
