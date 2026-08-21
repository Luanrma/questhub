import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_09_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:weapon-potency-1",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DKWuJb2rSgiotOG7",
      "slug": "weapon-potency-1",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-weapon-runes/weapon-potency.webp"
    },
    "sourceHash": "sha256:b193dfdd942c8071a752f8680345090852585b1da81a3d65360388bc830405fd",
    "translatableHash": "sha256:37f064dff2eea696ea4fee7815663adb62b9a54388a324a60775c52669c35557",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Potency (+1)",
      "itemType": "equipment",
      "level": 2,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Magical enhancements make this weapon strike true. Attack rolls with this weapon gain a +1 item bonus, and the weapon can be etched with one property rune.\nYou can upgrade the weapon potency rune already etched on a weapon to a stronger version, increasing the values of the existing rune to those of the new rune. You must have the formula of the stronger rune to do so, and the Price of the upgrade is the difference between the two runes' Prices.\nCraft Requirements You are an expert in Crafting.",
      "bulk": 0,
      "price": {
        "gp": 35
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:handwraps-of-mighty-blows",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FNDq4NFSN0g2HKWO",
      "slug": "handwraps-of-mighty-blows",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ce556b05b919cc573c3342163e7a171dcdbb85189b5e641d60e71507ff1379b5",
    "translatableHash": "sha256:744537fe32fc40f0ca930e41ee56516cf53058d2aa7105e386eb41d5dfc03006",
    "data": {
      "schemaVersion": 1,
      "name": "Handwraps of Mighty Blows",
      "itemType": "weapon",
      "level": 2,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "As you invest these embroidered strips of cloth, you must meditate and slowly wrap them around your hands. These handwraps have weapon runes etched into them to give your unarmed attacks the benefits of those runes, making your unarmed attacks work like magic weapons. For example, +1 striking handwraps of mighty blows would give you a +1 item bonus to attack rolls with your unarmed attacks and increase the damage of your unarmed attacks from one weapon die to two (normally 2d4 instead of 1d4, but if your fists have a different weapon damage die or you have other unarmed attacks, use two of that die size instead).\nYou can upgrade, add, and transfer runes to and from the handwraps just as you would for a weapon, and you can attach talismans to the handwraps. Treat the handwraps as melee weapons of the brawling group with light Bulk for these purposes. Property runes apply only when they would be applicable to the unarmed attack you're using. For example, a property that must be applied to a slashing weapon wouldn't function when you attacked with a fist, but you would gain its benefits if you attacked with a claw or some other slashing unarmed attack.",
      "bulk": 0,
      "price": {
        "gp": 35
      },
      "usage": "worngloves",
      "category": "unarmed",
      "group": "brawling",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:masquerade-scarf",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fvpLYx1Lo42cdleQ",
      "slug": "masquerade-scarf",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9c29b0b4b6a0744bb215f760c62505d6cbe319aad417c640f97a1a35013545b5",
    "translatableHash": "sha256:c112162c76f28e29a321251c3090f9abe1064c7978989a4d961bbe3ce7ca051f",
    "data": {
      "schemaVersion": 1,
      "name": "Masquerade Scarf",
      "itemType": "equipment",
      "level": 2,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This delicately embroidered scarf matches with every outfit and can even complete a costume or disguise with illusions.\nActivate—Masquerade 1 minute (manipulate)\nFrequency once per day\nEffect You arrange the scarf over your lower face, and it casts a 1st-rank Illusory Disguise spell on you, which ends immediately if the scarf is removed. You can alter the scarf's appearance or make it invisible as part of the illusory disguise, but it can still be felt if touched.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wayfinder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gbwr57aT9ou8yKWT",
      "slug": "wayfinder",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/wayfinder.webp"
    },
    "sourceHash": "sha256:eab1ca8ada8c350ad771a0128cac5d96c688ec6949049604baeaa9cc173b840f",
    "translatableHash": "sha256:d119f8c0aa7c0268c23900735f279d4dba9144f514d9ce0a10ef6c23f6ddfa75",
    "data": {
      "schemaVersion": 1,
      "name": "Wayfinder",
      "itemType": "equipment",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Access member of the Pathfinder Society\nThis compact compass repurposes ancient technology to draw fantastic powers from the mysterious magical items called aeon stones. It serves as a badge of office for agents of the Pathfinder Society and as a status symbol among adventurers of any stripe. A wayfinder functions as a compass.\nAn indentation in the middle of the wayfinder can hold a single aeon stone. Placing an aeon stone in this indentation provides you all the benefits of having the aeon stone orbiting your head, but it protects the stone from being noticed or stolen as easily. You invest a wayfinder and the aeon stone within it simultaneously, and they count as only one item toward your investiture limit. An invested aeon stone slotted in a wayfinder also grants its resonant power.\nIf you have more than one wayfinder with an invested aeon stone on your person at a given time, destructive interference from their resonance prevents you from gaining benefits from any of them. You can still benefit from additional aeon stones orbiting your head, just not in wayfinders.\nActivate—Light A (concentrate)\nEffect The wayfinder is targeted by a 1st-rank Light spell.",
      "bulk": 0,
      "price": {
        "gp": 28
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crying-angel-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HHELOoN5GVonUiIa",
      "slug": "crying-angel-pendant",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0cddadee775dca763c3933f5f69b9715c4253bf94759a21e2c1542fa7b428ea2",
    "translatableHash": "sha256:2fdcf16c1a42e49d0d3055b89c954d52050cc0b15e882d48ca8008feab4e0525",
    "data": {
      "schemaVersion": 1,
      "name": "Crying Angel Pendant",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "divine",
        "talisman"
      ],
      "description": "Activate 2 (concentrate)\nWhen you activate this alabaster pendant, attempt to Administer First Aid using Medicine with a +1 item bonus to the check. If you succeed, and you were trying to stabilize, the target regains 1 Hit Point, losing the dying condition and becoming conscious as normal. If you succeed, and you were trying to stop bleeding, the bleeding ends.",
      "bulk": 0,
      "price": {
        "gp": 7
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-potency",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "j2CHumvbjmlLQX2i",
      "slug": "oil-of-potency",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-potency.webp"
    },
    "sourceHash": "sha256:49b6428f02efa1f554d1027bb9bd38a8695e82803789e289af122e2df5947e5b",
    "translatableHash": "sha256:4b26bbaa21a74beb3d332e9def4e748801d1bda0c68e1ce7f1d1d0f5539c4625",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Potency",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nWhen you apply this thick, viscous oil to a weapon or suit of armor, that item immediately becomes magically potent. If the item is a weapon, it temporarily becomes a +1 striking weapon, or, if it's armor, it temporarily becomes +1 resilient armor. This lasts for 1 minute.\nEffect: Oil of Potency",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:monkey-pin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jdDDqv9LbEYX2wAE",
      "slug": "monkey-pin",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/monkey-pin.webp"
    },
    "sourceHash": "sha256:d57a8c4d024791e983381e31f68e71273b9b126f87d6d1f62a53284786b01362",
    "translatableHash": "sha256:2430ad1ef74c8e93d203a60e7f0a3a06f66d42102d5b536b923f367a5fe8ab4d",
    "data": {
      "schemaVersion": 1,
      "name": "Monkey Pin",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nThis small brass pin is shaped like a monkey climbing a tree. When you activate this talisman, use a Climb action with a +1 item bonus on the check. On this check and until the end of your turn, if you succeed on an Athletics check to Climb, you move your full Speed during the Climb. If you roll a critical failure, you get a failure instead.",
      "bulk": 0,
      "price": {
        "gp": 6
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bronze-bull-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nXStoLxPrrP2b6WB",
      "slug": "bronze-bull-pendant",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c82aca2ac97d52805803b909330a913b14758637f62702de28a0a2c07e5041ab",
    "translatableHash": "sha256:ec783136af80f7472b83be3fe687e7b05ee10ef243a8ea26e69d9dcb4113dd08",
    "data": {
      "schemaVersion": 1,
      "name": "Bronze Bull Pendant",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate 1 (concentrate)\nThis pendant is forged from grainy steel and depicts a snorting bull's face. The pendant must be attached to the chest area or on a shoulder guard. When you activate the pendant, attempt an Athletics check to Shove with a +1 item bonus to check. Increase the distance you Shove your target to 10 feet on a success or 20 feet on a critical success.\nEffect: Bronze Bull Pendant",
      "bulk": 0,
      "price": {
        "gp": 7
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:savior-spike",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qeTWg0TWw9CwMKCO",
      "slug": "savior-spike",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/savior-spike.webp"
    },
    "sourceHash": "sha256:9c0a1321e6b08dd3a468745902e74c28e6e9feaa5d72a18d783da1b9b1e6dac8",
    "translatableHash": "sha256:58f60e4b0eba445ce9e903c51f7358d4660b9aad4905410b75f049d5023dd909",
    "data": {
      "schemaVersion": 1,
      "name": "Savior Spike",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "force",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You attempt to Grab an Edge but haven't rolled\nThis pyramid-shaped spike is attached to an armor's chest piece. When you activate the spike, it shoots a strand of force to help you gain purchase, giving you a +1 item bonus to the check. If you roll a success on the triggering attempt, you get a critical success instead. If you roll a critical failure, you get a failure instead.",
      "bulk": 0,
      "price": {
        "gp": 7
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:effervescent-ampoule",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VPvyyQXjn2HBjnTS",
      "slug": "effervescent-ampoule",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/effervescent-ampoule.webp"
    },
    "sourceHash": "sha256:2be6880369ca21a94d404c2f679c5708c4fd0c45213d184b2b17271a330920f4",
    "translatableHash": "sha256:10e14d14b22bfe59d37241bf5e3629bf27234f7ace6ce78b37a6272fcf9d67ec",
    "data": {
      "schemaVersion": 1,
      "name": "Effervescent Ampoule",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (manipulate)\nRequirements You're trained in Acrobatics\nLight spring water fizzes and bubbles within this small glass globe, spilling onto the affixed armor when activated.\nUntil the end of your turn, you can move across water and other liquids as if they were solid ground. Your movement does not trigger any device or hazard that relies on a weight-sensitive pressure plate or similar device.\nWhen the ampoule's effect ends, you sink, fall, break through flimsy ground, or land on pressure plates as normal for your current location.",
      "bulk": 0,
      "price": {
        "gp": 7
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bravos-brew-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zM9VX3QwM81DzDUA",
      "slug": "bravos-brew-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/bravos-brew.webp"
    },
    "sourceHash": "sha256:fe13f200096803d0a9754d7c66de95830fff9ecf0cd970809354a0d162c3e6de",
    "translatableHash": "sha256:4232ed003b39142f3e316bb6488ab316688bb120c749739e777880b6de1b3704",
    "data": {
      "schemaVersion": 1,
      "name": "Bravo's Brew (Lesser)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mental"
      ],
      "description": "Activate A (manipulate)\nThis flask of foaming beer grants courage. For the next hour after drinking this elixir, you gain a +1 item bonus to Will saves, or +2 when attempting Will saves against fear.\nEffect: Bravo's Brew",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:feather-step-stone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0CNSvLpeSM4aIfPJ",
      "slug": "feather-step-stone",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/feather-step-stone.webp"
    },
    "sourceHash": "sha256:00f71d3076a96c7f4fe2abbd4943b7fc965625268b579af47acbe552a0a99318",
    "translatableHash": "sha256:d6ba0eb26d61b30ae6db4d8fa936e7e5c1be7febad3abad8babb0c5ea58699a7",
    "data": {
      "schemaVersion": 1,
      "name": "Feather Step Stone",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You Stride or Step\nRequirements You are trained in Acrobatics\nThis stone, usually shaped as a cabochon, is a small chunk of amber with a bit of feather or a flying insect caught within it. When you activate the stone, you ignore the effects of any difficult terrain and greater difficult terrain you move through until the end of your turn.",
      "bulk": 0,
      "price": {
        "gp": 8
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ventriloquists-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1r6StS0irdvi5JHY",
      "slug": "ventriloquists-ring",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:298a2e3a4e9cd2e8367bbc58eb81cf02ec55717ef6addaf1306506e39663ca1e",
    "translatableHash": "sha256:4e646f00993af435685665ba7ac477a98b84c549f7b4ee6b7d79216bb01b317c",
    "data": {
      "schemaVersion": 1,
      "name": "Ventriloquist's Ring",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This elegant copper ring has miniature images of songbirds engraved around its circumference. You gain a +1 item bonus to Deception checks.\nActivate—Throw Voice 2 (manipulate)\nFrequency once per day\nEffect Twisting the ring around your finger allows you to magically throw your voice, with the effects of a Ventriloquism spell (check (perception, dc:19)).",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:channel-protection-amulet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3vxoffA4slKHXtj2",
      "slug": "channel-protection-amulet",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/channel-protection-amulet.webp"
    },
    "sourceHash": "sha256:6d25b40e816e51c5df7e65b87b7e00fc9f7b852704b2a5a11a2d9512fbeb02db",
    "translatableHash": "sha256:03b1a3ca8d0d8a42b5fe13d380e15ceef7f473ac0536a910f1f0ecc706eabd67",
    "data": {
      "schemaVersion": 1,
      "name": "Channel Protection Amulet",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This nugget of polished tektite is trapped in a cage of braided wire and hangs from a silken cord. When wearing this amulet, you gain resistance 5 against damage from Harm spells if you're living, or against Heal spells if you're undead.",
      "bulk": 0,
      "price": {
        "gp": 56
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:maestros-instrument-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bAfyWCvgsYDyw3ff",
      "slug": "maestros-instrument-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/maestros-instrument.webp"
    },
    "sourceHash": "sha256:c8e2f465e5f289f3127df4852962dc699ae12695744b16e03612fdfb7dcc72c0",
    "translatableHash": "sha256:e181de2b28c2d2ecd68f20fc73815d11dc9dbf584422d89f8cb4b47182c02bb1",
    "data": {
      "schemaVersion": 1,
      "name": "Maestro's Instrument (Lesser)",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A maestro's instrument can be crafted in the form of any variety of handheld musical instruments. A maestro's instrument grants you a +1 item bonus to Performance checks while playing music with the instrument.\nActivate—Charming Performance 2 (manipulate)\nFrequency once per day\nEffect You play the instrument, causing it to cast a DC 17 Charm spell.\nCraft Requirements You must supply a casting of charm of the appropriate rank.",
      "bulk": 1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bracelet-of-dashing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BKdzb8hu3kZtKH3Z",
      "slug": "bracelet-of-dashing",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/bracelet-of-dashing.webp"
    },
    "sourceHash": "sha256:37c7000755048f7389fbc7b680e24e25b02e00acb79d1451d32cd847d87a3c96",
    "translatableHash": "sha256:a72ba76614818a21788eb3add99d68f48b4d4f144c4bea4c6f620e5b05d79287",
    "data": {
      "schemaVersion": 1,
      "name": "Bracelet of Dashing",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This jangling, silvery bracelet makes you lighter on your feet, giving you a +1 item bonus to Acrobatics checks.\nActivate—Jangling Dash A (concentrate)\nFrequency once per day\nEffect You gain a +10-foot status bonus to Speed for 1 minute.\nEffect: Bracelet of Dashing",
      "bulk": 0.1,
      "price": {
        "gp": 58
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-unlife-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BSInwFNVBVkfFK0B",
      "slug": "oil-of-unlife-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-unlife.webp"
    },
    "sourceHash": "sha256:fb6a145630844c379ef875051954e074eb71965a3825640c7e1613ec5c1dbdde",
    "translatableHash": "sha256:8a7e0c9c4c4587d0d4cc609c10ad567bf8e118472492acb5e1a61d0d7558d3a0",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Unlife (Lesser)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil",
        "void"
      ],
      "description": "Activate 1 (manipulate)\nThis thin, black liquid imparts a bone-deep chill while rapidly repairing an undead creature's physical or spiritual form. When you dash oil of unlife onto an undead creature, or a living creature with void healing, the oil absorbs quickly into its body, and the creature regains (2d8+5)[healing]{2d8+5 Hit Points}. You can pour oil of unlife on an incorporeal undead; in this case, the creature absorbs the oil into itself.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:marvelous-miniature-chest",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Dn2KQgIeWNijaUzL",
      "slug": "marvelous-miniature-chest",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:85ed7a5737cb437a8c267e101b43442c1fc12dc5b51f8f093e0222498252fc34",
    "translatableHash": "sha256:2abc2d4580b84b8ff7e1e572e0ef902931fce2361732b9b09475990bb5d84068",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Miniature (Chest)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "expandable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nEvery marvelous miniature is an exceptionally small replica of a real creature or object. The miniature is made from wood, pewter, or other simple materials, and features a rune etched into the underside of the replica's base. Marvelous miniatures sometimes come packaged together; for example, the camping set features the boat, campfire, and horse miniatures. Activating a marvelous miniature causes it to transform into another creature or object, which then can be used as normal for that object. Each miniature can be activated only once, with most of them permanently becoming the item in their description.\nWhen you use this miniature, a small wooden chest appears and immediately opens. This chest can hold up to 10 Bulk worth of items. Once the chest is closed, it transforms again—this time into a key—taking all of the stored items with it. You can activate this key by spending an Interact action to turn it in an imaginary lock, which causes it to transform back into a chest with all of the items still inside.\nOnce it has turned into a chest a second time, it forever remains a wooden chest",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:doubling-rings",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DwMXEqy7Ws8NYQQh",
      "slug": "doubling-rings",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/doubling-rings.webp"
    },
    "sourceHash": "sha256:6b03e7684c7fa6c0693531d94ba850e682e28bc7e6f5d31b4027f048892651c4",
    "translatableHash": "sha256:c1bcaa46bee5bad93ba2961803a7ba9d29b0773408bc1e7993f4c8bc53e6e35d",
    "data": {
      "schemaVersion": 1,
      "name": "Doubling Rings",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This item consists of two magically linked rings: an intricate, gleaming golden ring with a square-cut ruby, and a thick, plain iron ring. When you wield a melee weapon in the hand wearing the golden ring, the weapon's fundamental runes are replicated onto any melee weapon you wield in the hand wearing the iron ring. (The fundamental runes are weapon potency and striking, which add an item bonus to attack rolls and extra weapon damage dice, respectively.) Any fundamental runes on the weapon in the hand wearing the iron ring are suppressed.\nThe replication functions only if you wear both rings, and it ends as soon as you cease wielding a melee weapon in one of your hands. Consequently, the benefit doesn't apply to thrown attacks or if you're holding a weapon but not wielding it (such as holding in one hand a weapon that requires two hands to wield).",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:healing-potion-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "e0vSAQfxhHauiAoD",
      "slug": "healing-potion-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a9caf9356780f0dd5b74deeaa2be2dd27a5d9bc501eed7d67ae3418d12cdfa94",
    "translatableHash": "sha256:a33a5962df50790d0880693fbf742c04e0ab3e4bb85d2cbc2fa593a93aeac7d1",
    "data": {
      "schemaVersion": 1,
      "name": "Healing Potion (Lesser)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "potion",
        "vitality"
      ],
      "description": "Activate A (manipulate)\nA healing potion is a vial of a ruby-red liquid that imparts a tingling sensation as the drinker's wounds heal rapidly. When you drink a healing potion, you regain (2d8+5)[healing] Hit Points.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vine-arrow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eEnzHpPEbdGgRETM",
      "slug": "vine-arrow",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/vine-arrow.webp"
    },
    "sourceHash": "sha256:fe912cd9bd56bfbda940d5db50fd4837990d9b9db951323f02db39781446d526",
    "translatableHash": "sha256:2213c4ed5cc887559ebdaa998e99d4201c683881f329e0529d1270793bde7471",
    "data": {
      "schemaVersion": 1,
      "name": "Vine Arrow",
      "itemType": "ammunition",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate A (concentrate)\nLeafy stalks protrude from the shaft of this rustic arrow. When an activated vine arrow hits a target, the arrow's shaft splits and grows, wrapping the target in vines.\nThe target takes a –10-foot circumstance penalty to its Speeds for [[/r 2d4]] rounds, or until it Escapes against a DC of 19. On a critical hit, the target is also Immobilized until it Escapes.",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dancing-scarf",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Epc1e1Q9M9bcwOR0",
      "slug": "dancing-scarf",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/dancing-scarf.webp"
    },
    "sourceHash": "sha256:c66dbb739a743e2f3dee8e7677e852e43d70d9fa70135df94743e53f0012eecd",
    "translatableHash": "sha256:216a0b98e5a7bffeaf62eba4264233b9624362d0aa03f23e54ddfe5ae0bb6ae2",
    "data": {
      "schemaVersion": 1,
      "name": "Dancing Scarf",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "visual"
      ],
      "description": "This long and billowing scarf is typically woven of silk or sheer fabric and adorned with bells or other jangling bits of shiny metal. It grants a +1 item bonus to Performance checks to dance.\nActivate—Swirling Scarf A (manipulate)\nRequirements On your most recent action, you succeeded at a Performance check to dance\nEffect You become Concealed until the beginning of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "wornbelt",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bracers-of-missile-deflection",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eurAnvH8bK0ZctOR",
      "slug": "bracers-of-missile-deflection",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:de395e3a1ccd956d142c677b45dd65762a990f77a2fa5a9a52a5bd7164378f19",
    "translatableHash": "sha256:338efbe6bbaeeb6f96bcfef2ed4f2d58d1b4c25b2d2f9104dfd0a8ccc699de4c",
    "data": {
      "schemaVersion": 1,
      "name": "Bracers of Missile Deflection",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These bracers are made from plates of durable dawnsilver and gleam like the summer sun.\nActivate R (manipulate)\nFrequency once per day\nTrigger A ranged weapon attack hits you but doesn't critically hit\nRequirements You are aware of the attack and not off-guard\nEffect The bracers send the missile off-course. You gain a +2 circumstance bonus to AC against the triggering attack. If this would cause the attack to be a failure, the attack misses you.\nEffect: Bracers of Missile Deflection",
      "bulk": 0.1,
      "price": {
        "gp": 52
      },
      "usage": "wornbracers",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:glue-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "evBPzM1VsuYcoenn",
      "slug": "glue-bomb-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:850c0f08305b161587315f2713da5da94bf86b819d34f601d78ba15d5fbf6182",
    "translatableHash": "sha256:09e215d215bb5f5d71a89225f34eb2a886c8afd18e0e6451fd882ad41a42cb14",
    "data": {
      "schemaVersion": 1,
      "name": "Glue Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable"
      ],
      "description": "Activate 1 Strike\nA glue bomb is a harmless explosive mechanism bursting with sticky substances. When you hit a creature with a glue bomb, that creature takes a –15-foot status penalty to its Speeds for 1 minute. You gain a +1 item bonus to attack rolls, and the Escape DC is [[/act escape dc=19]]{19}.\nOn a critical hit, a creature in contact with a solid surface becomes stuck to the surface and Immobilized for 1 round, and a creature flying via wings has its wings tangled, causing it to fall safely to the ground and become unable to Fly again for 1 round. Glue bombs are not effective when used on a creature that is in water.\nThe target can end any effects by Escaping or spending a total of 3 Interact actions to carefully remove the sticky substances. These Interact actions don't have to be consecutive, and other creatures can provide the actions as well.\nEffect: Glue Bomb",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 0,
        "die": "",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemists-fire-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gWr4q4HiyGhETA8H",
      "slug": "alchemists-fire-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/alchemists-fire.webp"
    },
    "sourceHash": "sha256:384a2f1c98ca39a8b24effde7a0b081ccb542da292b8560ca29783555bfee900",
    "translatableHash": "sha256:3c5b8e4f266c54c856d6f84fe39ef740d7319731e1190934e43ca87601c02686",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemist's Fire (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate A Strike\nAlchemist's fire is a combination of volatile liquids that ignite when exposed to air. Alchemist's fire deals 2d8 fire damage, 2 persistent fire damage, and 2 fire splash damage. You gain a +1 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d8",
        "type": "fire"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dread-ampoule-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IvFEJqp2MUew65nQ",
      "slug": "dread-ampoule-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/dread-ampoule.webp"
    },
    "sourceHash": "sha256:740ec776ad64cc5ac33c903c5169760fca173700a5cb0559f0b54430280a4411",
    "translatableHash": "sha256:eb5cdb9d4c24af329dc160f5676a76fc907639aaa496e0b495fd61895d348b29",
    "data": {
      "schemaVersion": 1,
      "name": "Dread Ampoule (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "emotion",
        "fear",
        "mental",
        "poison",
        "splash"
      ],
      "description": "Activate A Strike\nThis flask is filled with a murky purple gas that briefly interferes with normal brain activity. A dread ampoule deals 2d6 mental damage and 2 mental splash damage.\nOn a hit, the target becomes Frightened 1, or Frightened 2 on a critical hit. Many types also grant an item bonus to attack rolls.\nYou gain a +1 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d6",
        "type": "mental"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fighters-fork",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Kx6FQS5GyVB6jlrW",
      "slug": "fighters-fork",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/fighters-fork.webp"
    },
    "sourceHash": "sha256:e27ae117005e7652fa5c9b6293bc5e3d6f568f0c692cfbb54c385abdac0b5df1",
    "translatableHash": "sha256:271b5452484d4073822a27dfc4fb1e1be6bc9f4964c45e30948f126b65387722",
    "data": {
      "schemaVersion": 1,
      "name": "Fighter's Fork",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical",
        "thrown-20"
      ],
      "description": "This +1 trident, usually engraved with a decorative pattern resembling fish scales, is a common weapon among warriors of aquatic ancestries.\nActivate—Fluid Length A manipulate\nEffect You extend or shorten the trident's haft. When extended, the trident requires two hands to wield and gains the reach trait, but loses the trident's normal thrown trait.",
      "bulk": 1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:charlatans-gloves",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LKdgj4UVmOvUwkZu",
      "slug": "charlatans-gloves",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:138f7eaced40c1c00d16c0fa11e46e399a12701ffe77a4c68b6ab53a8e22e6e4",
    "translatableHash": "sha256:b2df18a0c91e685f53679b96d3501eff4d21c2c6fdc0aaf98204048736ce0486",
    "data": {
      "schemaVersion": 1,
      "name": "Charlatan's Gloves",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Tiny silver hooks decorate these fine silk gloves. They grant a +1 item bonus to Thievery and allow you to cast Telekinetic Hand as an innate occult spell.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:persona-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MKupH1T018JubYJW",
      "slug": "persona-mask",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/persona-mask.webp"
    },
    "sourceHash": "sha256:4fb7690ec08e60a20091431ad79e15b8cf8ce4208a8c927181b0cc71192f798a",
    "translatableHash": "sha256:d23e31b8d4bea105fd6aafb53efcadf761619ce674ca1f21340153a4e39a77c3",
    "data": {
      "schemaVersion": 1,
      "name": "Persona Mask",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "fortune",
        "invested",
        "magical"
      ],
      "description": "Despite covering the entire face, this alabaster mask does not hinder vision or other senses. Wearing the mask grants a +1 item bonus to Performance checks while acting, orating, performing comedy, or singing.\nActivate—Assume Role A (concentrate)\nEffect You change the mask's appearance into an artistic rendition of a dramatic character of your choice.",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:coyote-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mvMeloQxSiEGIlhL",
      "slug": "coyote-cloak",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/coyote-cloak.webp"
    },
    "sourceHash": "sha256:20a905e76f0b7d2e88c6d6288fc17c8ef9a21cd0a3ac71283c411daa1c55fa9f",
    "translatableHash": "sha256:9fbc97a14e0d22198e8f28d70f85c71c26635f5cc9d2f1a0578fb0a43d9addf2",
    "data": {
      "schemaVersion": 1,
      "name": "Coyote Cloak",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This dusty coat is made of mangy brown-and-gray coyote fur. You gain a +1 item bonus to Survival checks. If you critically succeed at your Survival check to Subsist, you can feed twice as many additional creatures.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellstrike-ammunition-type-i",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NSo0bFX7DGGjqKKl",
      "slug": "spellstrike-ammunition-type-i",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/spellstrike-ammunition.webp"
    },
    "sourceHash": "sha256:7216c259c4ede0a68ebc956c2e02385de817b8c3d55b13956d02ed838e49bde3",
    "translatableHash": "sha256:b2f00aa1315fbfa03b3b1de14986eea384d51e55452377432f3de11840679d92",
    "data": {
      "schemaVersion": 1,
      "name": "Spellstrike Ammunition (Type I)",
      "itemType": "ammunition",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 2 Cast a Spell\nMystic patterns create a magic reservoir within this ammunition. You activate spellstrike ammunition by Casting a Spell into the ammunition. The spell must be of a spell rank the ammunition can hold, and the spell must be able to target a creature other than the caster. A creature hit by activated spellstrike ammunition is targeted by the spell. If the creature isn't a valid target for the spell, the spell is lost.\nThe ammunition affects only the target hit, even if the spell would normally affect more than one target. If the spell requires a spell attack roll, use the result of your ranged attack roll with the ammunition to determine the degree of success of the spell. If the spell requires a saving throw, the target attempts the save against your spell DC. Combine the Strike and spell's damage for the purpose of resistances and weaknesses.\nThe maximum rank of spell the ammunition can hold determines its item level and Price.\nMaximum Spell Rank 1st",
      "bulk": 0,
      "price": {
        "gp": 12
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-fire",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "opfpl1JmKgrfds9P",
      "slug": "staff-of-fire",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-fire.webp"
    },
    "sourceHash": "sha256:b02f014cfca8dc7da52625d750f74ade845b478351dbc681ff716bc81c90429f",
    "translatableHash": "sha256:b7f26a2aa87e67ceaadfe5d573875febac6d8062a6174a6be1c5cadcd3618471",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Fire",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff resembles a blackened and burned length of ashen wood. You can Interact to touch the tip of this staff to a torch, tinder, or a flammable substance to ignite a flame.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Ignition\n• 1st Breathe Fire\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:retribution-axe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "q6ZvspNDkzJSP6dg",
      "slug": "retribution-axe",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/retribution-axe.webp"
    },
    "sourceHash": "sha256:ae17548d20b0f88dcdf3b3a5eecb742c4f70f344ba703b06ae0d0fd3ac5f726b",
    "translatableHash": "sha256:c6e9298eefeebc72a1be7f5b0cf67bc83404cdef830ff092996d63317ef8e422",
    "data": {
      "schemaVersion": 1,
      "name": "Retribution Axe",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical",
        "sweep"
      ],
      "description": "The blade of this +1 greataxe bears a design of a human skull.\nWhenever a creature damages you with an attack, the skull changes its appearance to look like the face of that creature. You gain a +2 circumstance bonus to your next damage roll against that creature before the end of your next turn.\nBecause the face reshapes each time you're damaged, you get the additional damage only if you attack the creature that damaged you most recently.",
      "bulk": 2,
      "price": {
        "gp": 60
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "axe",
      "damage": {
        "dice": 1,
        "die": "d12",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:returning",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qlunQzfnzPQpMG6U",
      "slug": "returning",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:bb93a7caaeb356728e06f388de0f09645870853e00b82b1223ecd4ed4da844e7",
    "translatableHash": "sha256:09dec2aea39855bbe99a09b1a40883949784bf28fb6d0481363f27006bcb161b",
    "data": {
      "schemaVersion": 1,
      "name": "Returning",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "When you make a thrown Strike with this weapon, it flies back to your hand after the Strike is complete. If your hands are full when the weapon returns, it falls to the ground in your space.",
      "bulk": 0,
      "price": {
        "gp": 55
      },
      "usage": "etched-onto-thrown-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-mending",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QN8UIz0nMcnLUWHu",
      "slug": "oil-of-mending",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-mending.webp"
    },
    "sourceHash": "sha256:c4212964b48c36c3802fce176f226ef917b9ccaec90d3bdbbd9768b4eebd7fc5",
    "translatableHash": "sha256:9fe33b2ec23465bbc47c2acdf80af23e439e871879ed91450cb6b8363e3ddcea",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Mending",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 minute (manipulate)\nA vial of oil of mending appears to have countless translucent threads swirling within. Applying this oil to an item casts a 2nd-rank Mending spell to repair the item.",
      "bulk": 0.1,
      "price": {
        "gp": 9
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crafters-eyepiece",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RgNBGpBc9G2yw1C2",
      "slug": "crafters-eyepiece",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e2e6f245b4654d3245347df8dbe38a0a57a7932498f873fa3131baa49b310656",
    "translatableHash": "sha256:984717b3998002d35541f37ced02181d9bdd7fe5912f39a7ab17722d56804cf8",
    "data": {
      "schemaVersion": 1,
      "name": "Crafter's Eyepiece",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This rugged metal eyepiece etched with square patterns is designed to be worn over a single eye. Twisting the lens reveals a faint three-dimensional outline of an item you plan to build or repair, with helpful labels on the component parts.\nYou gain a +1 item bonus to Crafting checks. When you Repair an item, increase the Hit Points restored to 10 + 10 per proficiency rank on a success or 15 + 15 per proficiency rank on a critical success.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:acid-flask-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SgtqZxt26BdjUmEB",
      "slug": "acid-flask-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/acid-flask.webp"
    },
    "sourceHash": "sha256:86fb800ccb975abf816ebe49d82a4fd31c763accbdd17349c381dde2a9d3bd65",
    "translatableHash": "sha256:ec46215feb62a786ad3961df1b7dfa76534702888833e7b576e352de82fa2670",
    "data": {
      "schemaVersion": 1,
      "name": "Acid Flask (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "acid",
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate A Strike\nThis flask filled with corrosive acid deals 1 acid damage, 2d6 persistent acid damage, and 2 acid splash damage. You gain a +1 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "",
        "type": "acid"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mages-hat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SswqJqeAWGtX3tTF",
      "slug": "mages-hat",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3bd74ca92e9a7093a486f812d339ff8c562592ba5b9e8ba3974800249988152b",
    "translatableHash": "sha256:60d9398957df0647e72e40a7806eb6be6f851e2a96b5f009af80416a63b4fb22",
    "data": {
      "schemaVersion": 1,
      "name": "Mage's Hat",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "arcane",
        "invested"
      ],
      "description": "This hat comes in many forms, such as a colorful turban or a pointy hat with a brim, and is adorned with symbols or runes. It grants you a +1 item bonus to Arcana checks and allows you to cast the Prestidigitation cantrip as an arcane innate cantrip.",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:beacon-shot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "taAjenWKjBJpQyrE",
      "slug": "beacon-shot",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/beacon-shot.webp"
    },
    "sourceHash": "sha256:fde4f83b0d071f7f8ebdaa35b595d6996cf8cb262543224c9067bf715a59989a",
    "translatableHash": "sha256:c5c416c1972706cb90e5b899531c6f00f7ace351cf7e5b6dc7a19536e3638892",
    "data": {
      "schemaVersion": 1,
      "name": "Beacon Shot",
      "itemType": "ammunition",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition arrow, bolt\nActivate A (manipulate)\nThe shaft of a beacon shot is studded with tiny flecks of glimmering gemstones. When an activated beacon shot hits a target, it embeds itself into that target and spews sparks for 1 minute. If the target is Invisible, it becomes merely Hidden to creatures who would otherwise be unable to see it. The sparks also negate the Concealed condition if the target was otherwise concealed.\nA creature can remove the arrow or bolt by using an Interact basic action and succeeding at a check (athletics, dc:20, name:Remove Beacon Shot) check.",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:magic-wand-1st-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UJWiN0K3jqVjxvKk",
      "slug": "magic-wand-1st-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:8670ac919e4c40dea589cb3dddf1272df8bdf49297c2db0059dd9046c4c3409f",
    "translatableHash": "sha256:ef648ef3acdbba7ba36aae648f2c9441f609466a8231c8ed44ae96fe529fff31",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Wand (1st-Rank Spell)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This baton is about a foot long and contains a single spell. The appearance typically relates to the spell within.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank.\nCraft Requirements Supply a casting of the spell at the listed rank.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-water-breathing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WQhnfj1LbrEzvh8z",
      "slug": "potion-of-water-breathing",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-water-breathing.webp"
    },
    "sourceHash": "sha256:91426328b38010379db0420391fa63e6ad02b5de6abca08b74afd26320172a38",
    "translatableHash": "sha256:f42cca3b50378bab0bc2aa419bd58ea911c0790535d3156a6a118dd6919f1633",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Water Breathing",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nThis filmy, gray potion smells of an old fish midden and tastes even worse. After drinking this potion, you gain the effects of a 2nd-rank Water Breathing spell for 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alloy-orb-low-grade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X345VfEx9DZwO47G",
      "slug": "alloy-orb-low-grade",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b54870145628db9441d7c41fc3e0bdca30647e582e5ed457e283b01e8a22c5c9",
    "translatableHash": "sha256:23a037a9a09906a0b50a07472ee8458afcf099c4ba15c041abc10dc371af8060",
    "data": {
      "schemaVersion": 1,
      "name": "Alloy Orb (Low-Grade)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nAlthough solid, this orb of metal swirls with bright silver and dark iron colors, as if made of liquid. When you activate the alloy orb, select cold iron or silver. The affixed weapon functions as the chosen material for 1 minute, suppressing its original material. This orb only works on weapons of 8th level or lower.\nEffect: Alloy Orb (Low-Grade)",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "affixed-to-a-metal-weapon",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thurible-of-revelation-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xaWuuQoBJiMLzggR",
      "slug": "thurible-of-revelation-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/thurible-of-revelation.webp"
    },
    "sourceHash": "sha256:1b7494641994ad283541722fd49709feacb8b47717ffa08018719949703ac7ce",
    "translatableHash": "sha256:2ff17685eb67c4454c3704dadd3796c42da2cb504f4fa35e465d64fd2662e3ec",
    "data": {
      "schemaVersion": 1,
      "name": "Thurible of Revelation (Lesser)",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "divine"
      ],
      "description": "This brass censer dangles on a length of chain. Most thuribles of revelation are adorned with swirling Empyrean text, though some are iron and feature Diabolic or Chthonian text.\nActivate—Burn Incense 2 (manipulate)\nCost incense worth at least 5 gp\nEffect You light the incense inside the censer, and it burns for 1 hour. During that time, as long you are holding the thurible, you gain a +1 item bonus to Religion checks, and any critical failure you roll when you Decipher Writing of a religious nature is a failure instead.\nEffect: Thurible of Revelation",
      "bulk": 1,
      "price": {
        "gp": 55
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:scroll-of-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Y7UD64foDbDMV9sx",
      "slug": "scroll-of-2nd-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:757344e3e7c243f466c1bdbbdac3565d9dcb16691e326d3fd1f296cce8b00acf",
    "translatableHash": "sha256:b9d9de499105fd8712febfdb1c1063668a7ff73331490e8d9f94881dc9dae6bf",
    "data": {
      "schemaVersion": 1,
      "name": "Scroll of 2nd-rank Spell",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "scroll"
      ],
      "description": "Casting a Spell from a scroll requires holding the scroll in one hand and activating it with a Cast a Spell activity using the normal number of actions for that spell.\nThe spell must appear on your spell list. Because you're the one Casting the Spell, use your spell attack modifier and spell DC. The spell also gains the appropriate trait for your tradition (arcane, divine, occult, or primal).\nAny physical costs are provided when a scroll is created, so you don't need to provide them when casting from a scroll. If the spell requires a locus, you must have that locus to Cast the Spell from a scroll.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "scroll",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shining-symbol",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YVtXlsEWb3NIkDyy",
      "slug": "shining-symbol",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5342294cea6f517a12b59c30f527af8a9fb0f18809953ca8d511126b28463d7c",
    "translatableHash": "sha256:1749b8ddd28857bb30cb4299ded7578b365a521564185af37640ee73be40114a",
    "data": {
      "schemaVersion": 1,
      "name": "Shining Symbol",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "divine",
        "invested",
        "light"
      ],
      "description": "If you worship a deity, this golden amulet transforms into your deity's religious symbol when you invest it. You gain a +1 item bonus to Religion. The symbol casts dim light in a @Template[emanation|distance:20].\nActivate—Spiritual Light 2 (concentrate, light, revelation)\nFrequency once per day\nEffect The light cast by the symbol becomes bright light for 10 minutes and shines through bodies to reveal hints of the spirits within. Creatures in the light receive a –1 status penalty to Deception and Stealth checks.\nYou can Dismiss this activation.\nAura: Shining Symbol\nCraft Requirements You must be holy or unholy.",
      "bulk": 0,
      "price": {
        "gp": 55
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:trackers-goggles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZEqAx8jEc6zhX3V1",
      "slug": "trackers-goggles",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/trackers-goggles.webp"
    },
    "sourceHash": "sha256:200a7169023a6b2ccb9e3b5569f3603d8b52f36e2230a893012ebf8c4ac753d6",
    "translatableHash": "sha256:296cd71140fc85121c1bf68f83e3a40003a6ea71966c3c15f4afbc581fcfbc5c",
    "data": {
      "schemaVersion": 1,
      "name": "Tracker's Goggles",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These lenses of forest-green glass are bound in rough leather stitched with crude twine.\nWhile wearing these goggles, you gain a +1 bonus to Survival checks to Sense Direction and Track.\nIf you fail a check to Track, you can try again after 30 minutes rather than an hour.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pendant-of-the-occult",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zPhqmCvWyHO8i9ws",
      "slug": "pendant-of-the-occult",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:68574394a28521bfee0068ba865c1f59cf746f151d0befc179cef7d99926a208",
    "translatableHash": "sha256:eefb3d73fd85a9f5b3e1f94e4f84dc804c3c850bfa2b5e152fc86ce0267e63d8",
    "data": {
      "schemaVersion": 1,
      "name": "Pendant of the Occult",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "This amulet is hollow and shaped in the form of an unblinking eye. Its cavity typically holds some fragment of occult text. While wearing the pendant, you gain a +1 item bonus to Occultism checks, and you can cast the Guidance cantrip as an occult innate spell.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sleeves-of-storage",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1pglC9PQx6yOgcKL",
      "slug": "sleeves-of-storage",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/sleeves-of-storage.webp"
    },
    "sourceHash": "sha256:b160a326e5da9317ac2fe9d7bcfb83032d14f48397f6c854d039d2a57971def6",
    "translatableHash": "sha256:abe18d4aefaa433fc55f06fa7d35ff3dbd09ede7f6c5df068e9a68d198c3544b",
    "data": {
      "schemaVersion": 1,
      "name": "Sleeves of Storage",
      "itemType": "container",
      "level": 4,
      "rarity": "common",
      "traits": [
        "extradimensional",
        "invested",
        "magical"
      ],
      "description": "This loose robe has wide, voluminous sleeves that each contain an extradimensional space. These spaces each function as a Spacious Pouch (Type I) that can hold up to 5 Bulk of items (for a total of 10 Bulk), though no individual item can be of more than 1 Bulk; the sleeves grow slightly heavy as you reach maximum capacity. You can add or remove an item from a sleeve with a single hand free as an Interact action.\nIf a sleeve is completely empty, you can place your own familiar into that extradimensional space. It can survive comfortably in your sleeve for up to 1 hour, after which it begins to suffocate. While in your sleeve, it can't be affected or targeted by any effects, but you don't benefit from any master abilities. A familiar can exit the sleeve of its own volition with a single action that has the manipulate and move traits. You can't place any other creature into your sleeves, nor can you place your familiar in a sleeve if it's larger than Tiny. If your familiar is in your sleeve, you can't place any items in the sleeve.",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "worngarment",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2gYZiUw9yjtb0yJY",
      "slug": "demon-mask",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/demon-mask.webp"
    },
    "sourceHash": "sha256:d6fec147ffd99fb1f9afc89c83e4a334fb71a75468e24a3e31928c5ac9d8a65e",
    "translatableHash": "sha256:9ca6682abe29b1cfe3420dc72834e468eeea7fc99531a8a5c88cd199214c8c4e",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Mask",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This terrifying mask is crafted in the visage of a leering demon and grants a +1 item bonus to Intimidation checks.\nActivate—Leering Mask 2 (manipulate)\nFrequency once per day\nEffect The mask casts a Fear spell with a DC of 20.",
      "bulk": 0.1,
      "price": {
        "gp": 85
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-healing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3OkOKxCee9WruGU5",
      "slug": "staff-of-healing",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7cb085cc9596b36dd50d2a3c60b0ad437b65bc5889b0dcc596ae3d7f4343b986",
    "translatableHash": "sha256:a3343db91bb5704f2742693888de34d181ce178438033b2cfe7fdb18dd50488e",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Healing",
      "itemType": "weapon",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This white wood staff is capped at each end with a golden cross adorned with ruby cabochons. A staff of healing grants a +1 item bonus to the Hit Points you restore anytime you cast the heal spell using your own spell slots or charges from the staff.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Stabilize\n• 1st Heal\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 90
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:symbol-of-conflict",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BHjJpNILf85M2LJE",
      "slug": "symbol-of-conflict",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b420d721d68d6a835ad4fa7ecf232ea39f64dd53a819f5caaad6c611754df9a0",
    "translatableHash": "sha256:d978b41e8aeb1ec904e3d68ef6bfd56f7b16401058576e01ca912271883e8af5",
    "data": {
      "schemaVersion": 1,
      "name": "Symbol of Conflict",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "invested"
      ],
      "description": "This tarnished necklace can be attuned only by someone who is holy or unholy. When you attune it, it transforms into your deity's religious symbol or a personal symbol if you don't have a deity. You receive a +1 item bonus to Religion and a +1 circumstance bonus to saves against holy and unholy effects.\nActivate—Presence 2 (concentrate, manipulate)\nFrequency once per day\nEffect The symbol casts Bane or Bless.\nThe counteract DC of these effects is 18, and the counteract modifier is +8.\nCraft Requirements You must be holy or unholy.",
      "bulk": 0,
      "price": {
        "gp": 90
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:invisibility-potion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bikFUFRLwfdvX2x2",
      "slug": "invisibility-potion",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d26f8274b18bc15911d288c4e04800777b03fa6c8a506750dc12c2270b912af8",
    "translatableHash": "sha256:8bfbdaceba8d3c1d1c3eef9c06ade425e36cd41b5fd88dc6dd23f9a29de59832",
    "data": {
      "schemaVersion": 1,
      "name": "Invisibility Potion",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "illusion",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nAn invisibility potion is colorless and oddly lightweight. Upon drinking it, you gain the effects of a 2nd-rank Invisibility spell.",
      "bulk": 0.1,
      "price": {
        "gp": 20
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:striking",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DxCuJKynlnMQZHgp",
      "slug": "striking",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-weapon-runes/striking.webp"
    },
    "sourceHash": "sha256:4be65b0bd70656c89f7d6ec361d4205e0207521b3caee22ce3f2031afd8d844a",
    "translatableHash": "sha256:8970c3ae299f27a7518849853d51769770a4822d862ad97090f959726dee3da1",
    "data": {
      "schemaVersion": 1,
      "name": "Striking",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A striking rune stores destructive magic in the weapon, increasing the weapon damage dice it deals to two instead of one. For instance, a +1 striking dagger would deal 2d4 damage instead of 1d4 damage.\nYou can upgrade the striking rune already etched on a weapon to a stronger version, increasing the values of the existing rune to those of the new rune. You must have the formula of the stronger rune to do so, and the Price of the upgrade is the difference between the two runes' Prices.",
      "bulk": 0,
      "price": {
        "gp": 65
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sturdy-shield-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "f9ygr5Cjrmop8LWV",
      "slug": "sturdy-shield-minor",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/sturdy-shield.webp"
    },
    "sourceHash": "sha256:3c824133bb530cbec65a326d6ad715517afa03cb93e0fd32fa01f7108d29357a",
    "translatableHash": "sha256:32820c9ef340640aaba937f542ad03fcf2701f9399b8ee7fc15ba6aa4b16c912",
    "data": {
      "schemaVersion": 1,
      "name": "Sturdy Shield (Minor)",
      "itemType": "shield",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "With a superior design and excellent craftsmanship, this steel shield has higher Hardness than its non-magical counterparts, making it harder to break and destroy.\nThe shield has Hardness 8, HP 64, and BT 32.",
      "bulk": 1,
      "price": {
        "gp": 100
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shrinking-potion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FqbDpztscJfM4XMe",
      "slug": "shrinking-potion",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/shrinking-potion.webp"
    },
    "sourceHash": "sha256:9b715a6182dce6f7722bebc482e4ac7a5b63dc5334cd27fda4b1f924e4dedc3b",
    "translatableHash": "sha256:636c504a5458a93e965d6860c09e13a9b4f5a98a243006fcac7555035bef9b1b",
    "data": {
      "schemaVersion": 1,
      "name": "Shrinking Potion",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nThis fungus-flavored potion conveys the effects of the Shrink spell to make you and all your gear smaller. After the onset, you remain small for 10 minutes.\nOnset 1 minute\nEffect: Shrinking Potion",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lifting-belt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "g2oaOGSpttfH1q6W",
      "slug": "lifting-belt",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0845a7bf56266826cbe73cf0eaff4769fba0586c3675a33b26dd95cc56cbc1dd",
    "translatableHash": "sha256:c1a99268372afde933c1a52f9dfc27c43ce9cb2fc37a03849a2e8ae15b961736",
    "data": {
      "schemaVersion": 1,
      "name": "Lifting Belt",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This wide leather belt grants you a +1 item bonus to Athletics checks and increases the amount you can easily carry. You can carry Bulk equal to 6 + your Strength modifier before becoming encumbered, and you can hold and carry a total Bulk up to 11 + your Strength modifier.\nActivate—Assisted Lift 2 (manipulate)\nEffect You lift an object of up to 8 Bulk as though it were weightless. This requires two hands, and if the object is locked or otherwise held in place, you can attempt to Force it Open using Athletics as part of this activation. The object still has its full weight and Bulk for all other purposes-you just ignore that weight. The effect lasts until the end of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "wornbelt",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragon-turtle-scale",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GnXKCkgZQG0UmuHz",
      "slug": "dragon-turtle-scale",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/dragon-turtle-scale.webp"
    },
    "sourceHash": "sha256:2257c2693ad5ed9b7e5854a19c1918fbdeb6e08bc90f643df0a4bd40539f0029",
    "translatableHash": "sha256:3a10a1f7cd4285ffe512de29bfd17799f3a19f7facea25f6c46f1f316df2562e",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Turtle Scale",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nRequirements You're trained in Athletics\nThis shimmering green scale is usually attached to a golden clasp or chain.\nWhen you activate the scale, for 1 minute you gain a swim Speed equal to half your land Speed.\nEffect: Dragon Turtle Scale",
      "bulk": 0,
      "price": {
        "gp": 13
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mistform-elixir-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GyO89RBVjAKFxsFm",
      "slug": "mistform-elixir-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5292368d576e562b4ba260a12830580697249c7f8e64052b3363552ec2be5855",
    "translatableHash": "sha256:2ffc6d7a1d7eeb4ac00b34176608515d474675c2d3531e09f1fd4433e5f57174",
    "data": {
      "schemaVersion": 1,
      "name": "Mistform Elixir (Lesser)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "illusion",
        "visual"
      ],
      "description": "Activate A (manipulate)\nA faint mist emanates from your skin, making you Concealed for 3 rounds.\nAs usual being concealed when your position is still obvious, you can't use this concealment to Hide or Sneak.",
      "bulk": 0.1,
      "price": {
        "gp": 18
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spacious-pouch-type-i",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jaEEvuQ32GjAa8jy",
      "slug": "spacious-pouch-type-i",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/bag-of-holding.webp"
    },
    "sourceHash": "sha256:a1f419866efb638f549d3ec6760481e065012280a12c973f1304fba3069b88b8",
    "translatableHash": "sha256:1fb971dc61c60e098963ac913e327d756c42d06d9d1dd39fa18e0727683681e0",
    "data": {
      "schemaVersion": 1,
      "name": "Spacious Pouch (Type I)",
      "itemType": "container",
      "level": 4,
      "rarity": "common",
      "traits": [
        "extradimensional",
        "magical"
      ],
      "description": "Though it appears to be a cloth bag decorated with panels of richly colored silk or stylish embroidery, a spacious pouch opens into a magical space larger than its outside dimensions. The Bulk held inside the bag doesn't change the Bulk of the spacious pouch itself. The amount of Bulk the bag's extradimensional space can hold depends on its type.\nYou can Interact with the spacious pouch to stow items in it or remove them just like a mundane sack. Though the bag can hold a great amount of material, an object still needs to be able to fit through the opening of the sack to be stored inside.\nIf the bag is overloaded or broken, it ruptures and is ruined, causing the items inside to be lost forever. If it's turned inside out, the items inside spill out unharmed, but the bag must be put right before it can be used again. A living creature placed inside the bag has enough air for 10 minutes before it begins to suffocate, and it can attempt to Escape against a DC of 13. An item inside the bag provides no benefits unless it's retrieved first. An item in the bag can't be detected by magic that detects only things on the same plane.\nCapacity 25 Bulk",
      "bulk": 1,
      "price": {
        "gp": 75
      },
      "usage": "held-in-two-hands",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghost-touch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JQdwHECogcTzdd8R",
      "slug": "ghost-touch",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:9753a23766390977ff0846113d8848bf7987122d6a721f9918157797bc597a3c",
    "translatableHash": "sha256:b8c517b32cb2da3475d913075ead9a935d860f8343796e9527bfaba52a5abe2b",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Touch",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A weapon etched with this rune can harm creatures without physical form. A ghost touch weapon is particularly effective against incorporeal creatures, which almost always have a specific vulnerability to ghost touch weapons.\nIncorporeal creatures can touch, hold, and wield ghost touch weapons (unlike most physical objects).",
      "bulk": 0,
      "price": {
        "gp": 75
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bloodseeker-beak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "k6D64EAjcKMf8NZB",
      "slug": "bloodseeker-beak",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:86c704f0406bf302633ccba33ca5d3cbab59acfa03c8e99afc1c07fdc662bcb5",
    "translatableHash": "sha256:d6e397b31df348ed77a659bed3eae0380ebf9201d7bfbf53e9db41740f2a2efd",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodseeker Beak",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You hit an Off-Guard creature with the affixed weapon\nThis long, hollow proboscis is harvested from the notorious bloodseeker beast and drips a trickle of blood.\nWhen you activate the beak, you deal an extra 1d4 precision damage on your damage roll. If you deal sneak attack damage to the creature, you also deal 1d4[bleed].\nEffect: Bloodseeker Beak",
      "bulk": 0,
      "price": {
        "gp": 20
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:climbing-bolt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "n5L7HE9H8jn8ftQy",
      "slug": "climbing-bolt",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/climbing-bolt.webp"
    },
    "sourceHash": "sha256:13e98c621c1bcdcfa931b47d3a2e703f5109a93e76e7d59629d312c647d79d48",
    "translatableHash": "sha256:232be60c31679c77a08fa403cf0bc602e88e85988d6547843c4eeaba181b27aa",
    "data": {
      "schemaVersion": 1,
      "name": "Climbing Bolt",
      "itemType": "ammunition",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "The shaft of this bolt is wrapped with fine twine. When the bolt strikes a solid surface, the twine unwinds and enlarges into a 50-foot-long rope, securely fastened to the surface the bolt struck. The rope can be pulled free with an Interact action and a successful check (athletics, dc:20, name:Pull Free Rope) check.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:healers-gloves",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "o1zKhvYUUc1hE2AE",
      "slug": "healers-gloves",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a4540f0f60bbb572532f7ff43dafd503d64f866d2120fd631db05ffcf747c4eb",
    "translatableHash": "sha256:e68949116898f019313d7f34265c57542f39050c55a611af69551e3fff87fcaf",
    "data": {
      "schemaVersion": 1,
      "name": "Healer's Gloves",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These clean, white gloves never show signs of blood, even when used to stitch up wounds or treat other ailments. They give you a +1 item bonus to Medicine checks.\nActivate—Healer's Touch A (manipulate)\nFrequency once per day\nEffect You can soothe the wounds of a willing, living, adjacent creature, restoring (2d6+7)[vitality,healing|shortLabel:true] Hit Points to that creature. This is a healing vitality effect. You can't harm undead with this healing.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bombers-eye-elixir-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "T4ouD4mVFHA3EHs6",
      "slug": "bombers-eye-elixir-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/bombers-eye-elixir.webp"
    },
    "sourceHash": "sha256:079dbd6e1d98c748cb4cfb93343e06c00f838052cfd67e48a17b327b73cb1d2f",
    "translatableHash": "sha256:4857e3941d68583b0a7c2a0809b8e7e5c43e208d404af267daa5f976d80f549a",
    "data": {
      "schemaVersion": 1,
      "name": "Bomber's Eye Elixir (Lesser)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate A (manipulate)\nThis tincture lets you pinpoint your foes. For the next 5 minutes, your alchemical bomb Strikes reduce the circumstance bonus to AC your targets gain from cover by 1.\nEffect: Bomber's Eye Elixir",
      "bulk": 0.1,
      "price": {
        "gp": 14
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:marvelous-miniature-horse",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TknN7T2RDy9cUtKU",
      "slug": "marvelous-miniature-horse",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:64df5a5ff45c5d690c367f8605dcec896d8ca320e3beb74b7b94b17b90d3b666",
    "translatableHash": "sha256:ba83186803dd0b25ae2db65f4c7d8d54a5658074871c0d9b11edd2d2de9bbda8",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Miniature (Horse)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "expandable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nEvery marvelous miniature is an exceptionally small replica of a real creature or object. The miniature is made from wood, pewter, or other simple materials, and features a rune etched into the underside of the replica's base. Marvelous miniatures sometimes come packaged together; for example, the camping set features the boat, campfire, and horse miniatures. Activating a marvelous miniature causes it to transform into another creature or object, which then can be used as normal for that object. Each miniature can be activated only once, with most of them permanently becoming the item in their description.\nWhen activated, this miniature transforms into a horse. The horse can't attack or use reactions, but otherwise uses all the statistics of a Riding Horse and follows your basic commands. The horse doesn't need to eat or drink. After 8 hours, it reverts back to miniature form, then crumbles to dust.",
      "bulk": 0,
      "price": {
        "gp": 13
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bag-of-weasels",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W5znRDeklmWEGzFY",
      "slug": "bag-of-weasels",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/bag-of-holding.webp"
    },
    "sourceHash": "sha256:c01e50db94b82f70a6e2d60fe34eb1b213651a78901f66a897d6835b5cda664c",
    "translatableHash": "sha256:0870322bfada409d6a43d4850aa1248d66f8d527c41a00150fe3fa2af8394065",
    "data": {
      "schemaVersion": 1,
      "name": "Bag of Weasels",
      "itemType": "container",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "cursed",
        "extradimensional",
        "magical"
      ],
      "description": "This item appears to be and functions as a Spacious Pouch (Type I), until you try to retrieve an item from the bag. Whenever you retrieve an item from the bag of weasels, roll a check (flat, dc:11). On a success, you retrieve the item as normal. On a failure, the item you retrieve is transformed into a weasel; this doesn't affect artifacts, cursed items, or other hard-to-destroy items.\nThis weasel uses either the weasel statistics or a giant rat statistics and exudes an aura of magic. The weasel has no loyalty to you and typically attempts to escape as quickly as possible. If the weasel is counteracted, it transforms back into the original item that was taken from the bag of weasels. If it dies or is slain, the weasel disappears and the item is permanently destroyed. Because the weasel is a transformed item, you don't gain any benefit you would receive from attacking a creature, defeating one, damaging one, or the like, but you do gain any benefit you would gain from destroying an item.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:animal-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WcuknnE3xYfSdbhm",
      "slug": "animal-staff",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26748e736341793bcd4d822a1b819e8abc7c83c0be001cdb062cf52b1c1db89d",
    "translatableHash": "sha256:210464a596c79982449a8cc089cc47bf8656780f6999c2db127e9ff9fff2cf59",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Staff",
      "itemType": "weapon",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is topped with carved animal and monster heads. While wielding the staff, you gain a +2 circumstance bonus to Nature checks to identify animals.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Know the Way\n• 1st Runic Body Summon Animal\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 90
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reinforcing-rune-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "x9SNVpAAnXKJeoqp",
      "slug": "reinforcing-rune-minor",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed166235059e858da9bb5a8cd4308ee723663df10055912d36ac77f222829706",
    "translatableHash": "sha256:22dc4f61d8c6eb3a7b4db52733ef3afbab580fa48921cb204e9403c19cdb1eac",
    "data": {
      "schemaVersion": 1,
      "name": "Reinforcing Rune (Minor)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Reinforcing runes make a shield significantly more durable, allowing it to effectively block more powerful attacks.\nThe shield's Hardness increases by 3, it gains an additional 44 Hit Points, and its BT increases by 22 (maximum 8 Hardness, 64 HP, and 32 BT).",
      "bulk": 0,
      "price": {
        "gp": 75
      },
      "usage": "etched-onto-a-shield",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mentalists-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xwiZBOjispKVZzGA",
      "slug": "mentalists-staff",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/mentalist-staff.webp"
    },
    "sourceHash": "sha256:cd415a8c4f07bc64c6a3c443225716165e5321e73f07b6ca2eb6ed162e7ecb67",
    "translatableHash": "sha256:098fc405d8d0f5be2c47a6776af037933d4e1884a37c30b26e39d2d09e23a4b8",
    "data": {
      "schemaVersion": 1,
      "name": "Mentalist's Staff",
      "itemType": "weapon",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This polished wooden staff bears a swirling motif reminiscent of the folds of a brain. While wielding the staff, you gain a +2 circumstance bonus to checks to identify mental magic.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Mindlink Phantom Pain\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 90
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:darkvision-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Y8115p3cmQJBqk5d",
      "slug": "darkvision-elixir-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/darkvision-elixir.webp"
    },
    "sourceHash": "sha256:6e9836c28bac2871f0844aed2e489749dba82a7ec737ac5906838722ee0e3b06",
    "translatableHash": "sha256:96578c0b0a9c6073fda9b571e094d2071e0e143dfec295d4d4f9fd21af455cc6",
    "data": {
      "schemaVersion": 1,
      "name": "Darkvision Elixir (Moderate)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nAfter you drink this elixir, your sight becomes sharper in darkness. You gain darkvision for 1 hour.\nEffect: Darkvision Elixir (Moderate)",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:stone-fist-elixir",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YcvSw7Zn3oyqlJaw",
      "slug": "stone-fist-elixir",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/stone-fist-elixir.webp"
    },
    "sourceHash": "sha256:3f60566194ca5544f8677c25ba6103bae0aec63d2599c33cf569b437a82c4d34",
    "translatableHash": "sha256:421b5bba6b042cc5d452d49914710d920049bc0fb5cc016e4e63b94236612b61",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Fist Elixir",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "morph"
      ],
      "description": "Activate A (manipulate)\nYour fists become hard as stone. For 1 hour, your fists deal 1d6 bludgeoning damage and lose the nonlethal trait.\nEffect: Stone Fist Elixir",
      "bulk": 0.1,
      "price": {
        "gp": 13
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fear-gem",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZAtwiAPkk1zwCf82",
      "slug": "fear-gem",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f67c37cb18602bf6bb9c126ecb84f7faa4454d6e217e633977d323b3b22201b",
    "translatableHash": "sha256:ea610b0bebb07c54ecb6eb312af9823a517ad9fd6c277d61b1e3f6fd5d12a8e5",
    "data": {
      "schemaVersion": 1,
      "name": "Fear Gem",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "emotion",
        "fear",
        "magical",
        "mental",
        "talisman"
      ],
      "description": "Activate 2 (concentrate)\nDark smoke seems to writhe within this obsidian gem. When you activate the gem, make a melee Strike. If you hit and deal damage, the target is Frightened 1, or Frightened 2 on a critical hit.\nIf you have the Intimidating Strike feat, increase the frightened condition value caused by the Strike to Frightened 2, or Frightened 3 on a critical hit.",
      "bulk": 0,
      "price": {
        "gp": 20
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oak-potion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zC7LipQPHRYw2RXx",
      "slug": "oak-potion",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/barkskin-potion.webp"
    },
    "sourceHash": "sha256:ecd905777f125e1d72780f855a9bba4e5d5cc4b6ebca0eae8c4b064e3f67af9f",
    "translatableHash": "sha256:96879cc58a67d81d95f119fc52249a022f8bcbe6b62d4c21b4fc47b70c7dbfa7",
    "data": {
      "schemaVersion": 1,
      "name": "Oak Potion",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "plant",
        "potion",
        "primal",
        "wood"
      ],
      "description": "Activate A (manipulate)\nAfter you drink this bitter draft, your skin thickens like bark. You gain the effects of a 2nd-rank Oaken Resilience for 10 minutes.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-widening-1st-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Zw3BKaJYxxxzNZ0f",
      "slug": "wand-of-widening-1st-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-widening.webp"
    },
    "sourceHash": "sha256:1c9c0fa1d0113256a834e2d57e28d891b1b7acf47d84756ddee236d2648de0e8",
    "translatableHash": "sha256:920751a56a560630be019b63225b5c1f71768400c2731b2ce042b933b46d91b0",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Widening (1st-Rank Spell)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The end of this wand is forked with a peridot setting.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally take 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and increase its area. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet; add 5 feet to the length of a cone or line that is normally 15 feet long or smaller; or add 10 feet to the length of a larger cone or line.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, can't have a duration, and must have an area of burst (10 feet or more), cone, or line.",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sneaky-key",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1v1OK06JxdXn6MP4",
      "slug": "sneaky-key",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5053af27445912aa60d70350a9da9205db47d01036663cd4f6929c6e20832c44",
    "translatableHash": "sha256:d8694b4775bbd90097511085349f2fc3d5f9f0a2fb3c687c8d879af677ec0f52",
    "data": {
      "schemaVersion": 1,
      "name": "Sneaky Key",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (manipulate)\nRequirements You are trained in Thievery\nThis small silver skeleton key can be pinned to armor or a sleeve. When you turn the key to activate it, you gain a +1 status bonus to Thievery checks to Pick a Lock for 1 minute. The first time you get a success or critical success on an attempt to Pick a Lock, you achieve one additional success toward opening a complex lock.\nEffect: Sneaky Key",
      "bulk": 0,
      "price": {
        "gp": 22
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:caterwaul-sling",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2KNAip9W6IoBrfIU",
      "slug": "caterwaul-sling",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/sling.webp"
    },
    "sourceHash": "sha256:4d1dc6202a0e1c3c56d75b3ae774118c0f1b322870f788755c8aa315a7368d65",
    "translatableHash": "sha256:974930da93432e7fc8457a5a289119584b61aab051745a3c01d863fc2a94b87b",
    "data": {
      "schemaVersion": 1,
      "name": "Caterwaul Sling",
      "itemType": "weapon",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical",
        "propulsive"
      ],
      "description": "Made of shiny brown leather, this +1 striking sling has a single white thread interwoven into its cord.\nActivate—Unleash Roar 2 (manipulate, sonic)\nFrequency once per day\nEffect You pull the white thread free, then whirl the sling in circles at high speed. It lets out an ear-piercing wave of sound. Each creature in a @Template[cone|distance:30] takes 4d6[sonic|options:area-damage] damage (check (fortitude, dc:21, basic, options:area-effect) save). Any creature that fails is Deafened for 1 round, or 1 hour on a critical failure.",
      "bulk": 0.1,
      "price": {
        "gp": 155
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "sling",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:emerald-grasshopper",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3uhaf2YL9hmix3pe",
      "slug": "emerald-grasshopper",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/emerald-grasshopper.webp"
    },
    "sourceHash": "sha256:7ee5426cc96df8142e95f655139f8059c6b5cdcd734a3084bb8184b0eb163006",
    "translatableHash": "sha256:a5fc1fcf62b6a32531e51c2318ce00f9cef0ffcbc3ec739c69f732fbf5087017",
    "data": {
      "schemaVersion": 1,
      "name": "Emerald Grasshopper",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nRequirements You're trained in Athletics\nThis metal grasshopper studded with emeralds is usually clasped to the legs of a suit of armor.\nWhen you activate it, make a Leap, traveling up to 40 feet horizontally and up to 10 feet vertically.\nIf you don't end your jump on solid ground, you flutter in the air until the end of your turn, then fall harmlessly at a rate of 60 feet per round until you reach the ground.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:frozen-lava",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5lpBiEqrxiyj48JB",
      "slug": "frozen-lava",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:67eafd6ba9a952a4c18607934579de32833503f01307ea713285ce7aa7613d30",
    "translatableHash": "sha256:ba11e6f5f58a37c91b7a2afdb9e462d0cdc859bc292a6f760f6e2edb9a1b1154",
    "data": {
      "schemaVersion": 1,
      "name": "Frozen Lava",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "fire",
        "magical"
      ],
      "description": "Activate A (manipulate)\nThis blueberry-sized bead appears to be a sphere of glass with a flickering light at its core. In truth, the \"glass\" is a bubble of solidified time magic, containing suspended lava at the exact point before a volcanic eruption. When activated, it becomes a tiny beacon of bright light before unleashing its power. After you Activate frozen lava, it quickly heats up. If you or anyone else hurls it (an Interact action), it detonates as a Fireball where it lands. Your toss can place the center of the fireball anywhere within 70 feet, though at the GM's discretion, you might need to make an attack roll if the throw is unusually challenging. If no one hurls the bead by the start of your next turn, it pops like an ostentatious but harmless firework.\nFrozen lava comes in many varieties, made of lava taken from notable volcanoes on Golarion and across the planes.\nFrozen lava deals 5d6[fire|options:area-damage] on a check (reflex, dc:21, basic, options:area-effect).",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-continuation-1st-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "a60NH7OztaEaGlU8",
      "slug": "wand-of-continuation-1st-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-continuation.webp"
    },
    "sourceHash": "sha256:64950d45e015f6650be79a0e441e4a6236e94b7a4d8f10f7a4312020e384f043",
    "translatableHash": "sha256:9c5699dd6c3c791ea614ae5af3ddd36a0fc205a8650a25c70d2a68d4cfebafdf",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Continuation (1st-Rank Spell)",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand increases a spell's duration. Yellow embers spiral over its surface until the spell ends.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and its duration is increased by half.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2 and a duration no less than 10 minutes and no greater than 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:eternal-eruption",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aJEXZJYjzoMHc5Pm",
      "slug": "eternal-eruption",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5012340c7c1757ec4b3f70a359436caa4f2b43fb7e081f8a7addca1442fde739",
    "translatableHash": "sha256:5fd4ce8eebed2fb6c3595d31565f69f4e86962a4ecbb33312f173cec3e4a0425",
    "data": {
      "schemaVersion": 1,
      "name": "Eternal Eruption",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "fire",
        "magical"
      ],
      "description": "Resembling frozen lava, an eternal eruption is made with the same type of time magic, but is built to loop through time, reforming itself after it's used. Determining the difference between the two requires a close examination to see a faint, repeating pattern of red runes.\nActivate—Lava Bomb 2 (concentrate, manipulate)\nEffect You fling the eternal eruption, with the effect of Frozen Lava. After [[/br 2d4 #hours]]{2d4 hours}, the eternal eruption reforms itself in a container on your person, typically the one you most recently stored it in.\nEternal Eruption deals 5d6[fire|options:area-damage] on a check (reflex, dc:21, basic, options:area-effect).",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:arboreal-boots",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "amJW9azNUSJLmWGP",
      "slug": "arboreal-boots",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1bb75f2bd639a7eafbe3799212c660abc00dc202c0bc5c8335bf1b6800b9b139",
    "translatableHash": "sha256:f5c26a6aea079f7635ed6a754f4278aadb95e0bbdc566be9533d476bcd94e323",
    "data": {
      "schemaVersion": 1,
      "name": "Arboreal Boots",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "These soft leather boots are embossed with simple woodland scenes. The boots grant a +1 item bonus to Acrobatics and allow you to ignore difficult terrain from plants and fungi.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cheetahs-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AqLxu3ir4UGzdOaz",
      "slug": "cheetahs-elixir-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/cheetahs-elixir.webp"
    },
    "sourceHash": "sha256:20997b242bfc1003497d59733c1f1620ecc28332358ac62e1df7cbd50924a304",
    "translatableHash": "sha256:00b81917be005dab19a5e90e710cdba4aaa06611d6e2a3999b72a56419809b2a",
    "data": {
      "schemaVersion": 1,
      "name": "Cheetah's Elixir (Moderate)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate A (manipulate)\nEnzymatic compounds in this elixir strengthen and excite the muscles in your legs. You gain a +10 foot status bonus to your Speed for 10 minutes.\nEffect: Cheetah's Elixir (Moderate)",
      "bulk": 0.1,
      "price": {
        "gp": 25
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pocket-stage",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BNelZMBHKlPAWl9Z",
      "slug": "pocket-stage",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1e7290af57a2e15ff84c4a0c3fc513f0d4b5c65e3dcc1adb4b6bb1a89f9a8e0d",
    "translatableHash": "sha256:2abd5ebbac16bcc6e35193a69a1b5bc04c4402d5399ef01acba1fa9b457bc0da",
    "data": {
      "schemaVersion": 1,
      "name": "Pocket Stage",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical",
        "structure"
      ],
      "description": "This item appears to be a miniature replica of a theater. It includes a small pocket full of minute set dressing and costumed paper dolls.\nActivate—Play with Dolls (1 minute) (concentrate, manipulate)\nEffect You place the miniature theater on the ground, filling it with any set dressing and up to six figures you choose. Then, you tap a rhythm on the miniature, causing it to grow into a modest stage 20 feet wide and 15 feet deep. It's dressed with the decorations you selected, and simple mannequins wear the costumes you chose. A wooden proscenium arch frames the stage, and simple curtains along the sides conceal the wings. As a magical structure, the stage has the structure trait.\nAll the stage's set dressing is illusory and disappears if taken more than 20 feet from the stage. The costumes are physical but with illusory embellishments that fade at the same range, revealing only plain, white smocks.",
      "bulk": 0.1,
      "price": {
        "gp": 138
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skeleton-key",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fprUZviW8khm2BLo",
      "slug": "skeleton-key",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/skeleton-key.webp"
    },
    "sourceHash": "sha256:a7acc43a06f5e6e50efdd8ae357422c498259ff8af8b58c9206ca4e487bd67aa",
    "translatableHash": "sha256:9586f1e665fbb13edc87a6062904b9f0114623199d7dd6a80dff49a422e1914f",
    "data": {
      "schemaVersion": 1,
      "name": "Skeleton Key",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A grinning skull tops the bow of this macabre key. This key can be used in place of thieves' toolkit when attempting to Pick a Lock, and it grants a +1 item bonus to the Thievery check.\nIf the skeleton key becomes broken due to a critical failure on the check, it works as normal thieves' toolkit and loses its benefits until repaired.\nActivate—Loosen Lock F (manipulate)\nFrequency once per day\nTrigger You attempt to Pick a Lock but haven't rolled yet\nEffect The key casts Knock on the lock you're trying to pick.",
      "bulk": 0,
      "price": {
        "gp": 125
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:raiment",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iTxqImupNnm8gvoe",
      "slug": "raiment",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:2f8f341ac25432a4e652a6f934fa6e5fdb257b791459a1f77aabdc00615b2874",
    "translatableHash": "sha256:74834b1e2aa3b0b825e2babe5beac34c7b32fe7d90ddb5a2eb77f26fea18580a",
    "data": {
      "schemaVersion": 1,
      "name": "Raiment",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "illusion",
        "magical"
      ],
      "description": "This armor can be disguised with a mere thought.\nActivate—Costume Change 1 (concentrate)\nEffect You change the shape and appearance of this armor to appear as ordinary or fine clothes of your imagining. The armor's statistics don't change. Only a creature that's benefiting from truesight or a similar effect can attempt to disbelieve this illusion, with a DC of 25.",
      "bulk": 0,
      "price": {
        "gp": 140
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:diplomats-badge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JJZgRx6naNJmDa81",
      "slug": "diplomats-badge",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a570cb773af25f0bb4ae007ca3ccca20cb00f41c9bd815850ce93dc2cc603ef",
    "translatableHash": "sha256:a6293fc4166fb6b700a5f20479ea209582e1c45302b66b64182139d0f9716491",
    "data": {
      "schemaVersion": 1,
      "name": "Diplomat's Badge",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "When displayed prominently, this brass badge makes creatures find you more agreeable. You gain a +1 item bonus to Diplomacy checks.\nActivate—Diplomat's Bearing A (concentrate)\nFrequency once per day\nEffect Attempt a DC 20 check to Recall Knowledge about people of a human ethnicity, a non-human ancestry, or some other type of creature. (The GM determines what your options are.) If you succeed, the badge's bonus increases to +2 for Diplomacy checks with creatures of that group for the rest of the day.\nEffect: Diplomat's Badge",
      "bulk": 0,
      "price": {
        "gp": 125
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:obsidian-goggles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "K7VHhUamFz3kTnm5",
      "slug": "obsidian-goggles",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:98659fa0c142267c812dcf34a7c99a753916c384e9660cded806b3bf33e7f74e",
    "translatableHash": "sha256:f3242047195fb002e9ffd372eb0512c549b63ad85cd33e17cb0afcb7ea62284a",
    "data": {
      "schemaVersion": 1,
      "name": "Obsidian Goggles",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The sleek, black lenses of these goggles somehow make everything seem more brightly lit. While wearing the goggles, you gain a +1 item bonus to Perception checks involving sight.\nActivate—Darkvision 1 (manipulate)\nFrequency once per day\nEffect Adjusting your goggles, you gain darkvision for 1 hour.\nEffect: Obsidian Goggles",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kEy7Uc1VisizGgtf",
      "slug": "shadow",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:5bea354171f72d967639c9b4df29f3af548f8a76c06791b7d5ee33daee507b5b",
    "translatableHash": "sha256:c610423d095481eb8221fcc0a8abc4f6cbd0f1a11893318c79fcd086bac8637f",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Armor etched with this rune takes on a hazy black appearance. You gain a +1 item bonus to Stealth checks while wearing the armor.",
      "bulk": 0,
      "price": {
        "gp": 55
      },
      "usage": "etched-onto-lm-nonmetal-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-shardstorm-1st-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KPWN5tGGkvZR7K3K",
      "slug": "wand-of-shardstorm-1st-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-manifold-missiles.webp"
    },
    "sourceHash": "sha256:55a6d76ba15617ee96a61e3e5cf5b422e4edf630f431bb7b5a2b8a59707445e6",
    "translatableHash": "sha256:11fe7f2c52bd712123028b7c07bd7c5dc645a5418d2cfba9896e89e2ae306a97",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Shardstorm (1st-Rank Spell)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "magical",
        "manipulate",
        "wand"
      ],
      "description": "This wand features a carved dragon's head at its top and a polished metal sphere set in its midsection.\nActivate Cast a Spell\nFrequency Once per day, plus overcharge\nEffect You cast Force Barrage at 1st rank.\nAfter you cast the spell, an additional shard or shards are released from the wand at the start of each of your turns, as though you cast the 1-action version of force barrage. Choose targets each time. This lasts for 1 minute, until you're no longer wielding the wand, or until you try to activate the wand again.\nCraft Requirements Supply a casting of force barrage of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:eagle-eye-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lPcnDlBGz5QwCMYw",
      "slug": "eagle-eye-elixir-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/eagle-eyes-elixir.webp"
    },
    "sourceHash": "sha256:4e3abe65cdb786d413f64e184b8c7ea0c4c9336094e33616db0711c87490c1d2",
    "translatableHash": "sha256:7ef9d7da39c8cc059c673a0fbc45b05e1866038af881ec51f8e08f586817b0f1",
    "data": {
      "schemaVersion": 1,
      "name": "Eagle Eye Elixir (Moderate)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate A (manipulate)\nAfter you drink this elixir, you notice subtle visual details. For the next hour, you gain a +2 item bonus to Perception checks, or +3 when attempting to find secret doors and traps.\nEffect: Eagle Eye Elixir",
      "bulk": 0.1,
      "price": {
        "gp": 27
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vitalizing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LwQb7ryTC8FlOXgX",
      "slug": "vitalizing",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:fe915e4ac453b0f0966c756d7f0c5daf69eed3fadf084eab91c24f82e9e51540",
    "translatableHash": "sha256:85dac3536e303faa82c13e6300801814eaf96ed4749505683df12cc5441c4981",
    "data": {
      "schemaVersion": 1,
      "name": "Vitalizing",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A vitalizing weapon pulses with vital energy, dealing an extra 1d6 persistent vitality damage to undead. On a critical hit, the undead is also Enfeebled 1 until the end of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellstrike-ammunition-type-ii",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mmsuA7qPxFLLghtx",
      "slug": "spellstrike-ammunition-type-ii",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/spellstrike-ammunition.webp"
    },
    "sourceHash": "sha256:6a1e46f1356eefd293bb682f689e11b4d26e580e6a0ad5669ad04a99275ce835",
    "translatableHash": "sha256:2a13f78273ee98f7f0d53de1aa242e3f24d3f25d535c1c7ac5f612244ed56566",
    "data": {
      "schemaVersion": 1,
      "name": "Spellstrike Ammunition (Type II)",
      "itemType": "ammunition",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 2 Cast a Spell\nMystic patterns create a magic reservoir within this ammunition. You activate spellstrike ammunition by Casting a Spell into the ammunition. The spell must be of a spell rank the ammunition can hold, and the spell must be able to target a creature other than the caster. A creature hit by activated spellstrike ammunition is targeted by the spell. If the creature isn't a valid target for the spell, the spell is lost.\nThe ammunition affects only the target hit, even if the spell would normally affect more than one target. If the spell requires a spell attack roll, use the result of your ranged attack roll with the ammunition to determine the degree of success of the spell. If the spell requires a saving throw, the target attempts the save against your spell DC. Combine the Strike and spell's damage for the purpose of resistances and weaknesses.\nThe maximum rank of spell the ammunition can hold determines its item level and Price.\nMaximum Spell Rank 2nd",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:singing-sword",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OKAR7GIyJac8dmsi",
      "slug": "singing-sword",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/singing-sword.webp"
    },
    "sourceHash": "sha256:4aa6a52705149eb93fdd531434d6424b7fae62a349402c14e4134e60385cec7c",
    "translatableHash": "sha256:3eec1f3cac36edb6bd0cc95d63ccb17b29a1874add80a10afc2a5adef700a44a",
    "data": {
      "schemaVersion": 1,
      "name": "Singing Sword",
      "itemType": "weapon",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "intelligent",
        "occult",
        "versatile-p"
      ],
      "description": "Perception +11; precise vision 30 feet, imprecise hearing 30 feet\nCommunication speech (Common and four other common languages)\nSkills Performance +15\nInt +2, Wis +2, Cha +4\nWill +13 (+17 against attempts to quiet its singing)\nA singing sword is a +1 striking longsword imbued with the consciousness of a boisterous bard, and therefore constantly sings at all times. A singing sword can't stop singing and in fact communicates in no way other than by singing. A successful Diplomacy or Intimidation check against its Will DC can convince it to quiet its singing to a whisper for 10 minutes, or 20 minutes on a critical success, though it quickly grows displeased at anyone who attempts this repeatedly. The singing sword can spend its actions to attack on its own, with the effects of a dancing weapon's activation, except that its attack modifier is +12. Additionally, it can perform the following activations; each casts a composition spell and follows all the usual rules for compositions.\nActivate—Courageous Anthem A (concentrate)\nFrequency once per minute\nEffect The singing sword casts Courageous Anthem.\nActivate—Rallying Anthem A (concentrate)\nFrequency once per minute\nEffect The singing sword casts Rallying Anthem.\nActivate—Counter Performance R (concentrate)\nFrequency once per hour\nTrigger You or an ally within 60 feet rolls a saving throw against an auditory effect\nEffect The singing sword casts Counter Performance.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fearsome",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P6v2AtJw7AUwaDzf",
      "slug": "fearsome",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:a49d7453c91d911c2e635da6d89efadd84e0aa1456ce40e0c3c8a57bb6c58b84",
    "translatableHash": "sha256:9d987dfd39146d3e0d715fe05f6a192599195ea5d7a9237e00257216149e534d",
    "data": {
      "schemaVersion": 1,
      "name": "Fearsome",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "emotion",
        "fear",
        "magical",
        "mental"
      ],
      "description": "When you critically hit with this weapon, the target becomes Frightened 1.",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:armor-potency-1",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ro3g2JpJXrKXVyEr",
      "slug": "armor-potency-1",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-armor-runes/armor-potency.webp"
    },
    "sourceHash": "sha256:5afb87ae7dc3ae7d0953b2211251529eb2a97c338299c8614d3409f57d92ab88",
    "translatableHash": "sha256:ff7876cb2ac60265ecacd777cfbae71025b737e733fb9f91e981cbf7d4832ad0",
    "data": {
      "schemaVersion": 1,
      "name": "Armor Potency (+1)",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Magic wards deflect attacks. Increase the armor's item bonus to AC by 1. The armor can be etched with one property rune.\nYou can upgrade the armor potency rune already etched on a suit of armor using the normal process for upgrading items and runes.\nCraft Requirements You are an expert in Crafting.",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-leaping",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rzEQvcWfhR3T4FNd",
      "slug": "potion-of-leaping",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-leaping.webp"
    },
    "sourceHash": "sha256:490c3bfd77b841a19c4655d08a85f577061a8e081c236c2d3ed79d90d1fa4e31",
    "translatableHash": "sha256:4206b2d6060edb6e1f99b5b0d1b74990ced9445799e4ae1e56588b03052b2e4b",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Leaping",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nFor 1 minute after you drink this fizzy potion, whenever you Leap, you gain the effect of the 1st-rank Jump spell.",
      "bulk": 0.1,
      "price": {
        "gp": 21
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shark-tooth-charm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Tj4uaNw2lgevxGl7",
      "slug": "shark-tooth-charm",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:556a3aac91840f0b3c32ea68772d0740cd0977d6e76b62ee3adc736a382ae275",
    "translatableHash": "sha256:57595002ae102c70b52cedda1af7d3550e4108404c406968b3cb9dd23b2b38b5",
    "data": {
      "schemaVersion": 1,
      "name": "Shark Tooth Charm",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate 1 (concentrate)\nThis dried-seaweed bracelet is lined with charms shaped like small shark teeth. When you activate the bracelet, attempt to Escape using Acrobatics with a +1 item bonus to the check. If you roll a success, you get a critical success instead (if you roll a critical failure, you get a failure instead). If you fail the Acrobatics check against a grabbing creature, the creature must either release you as a free action or take 2d8[piercing] damage as shark's teeth momentarily emerge from your skin.\nEffect: Shark Tooth Charm",
      "bulk": 0,
      "price": {
        "gp": 23
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-life-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TZUskLT7yvP7N2co",
      "slug": "elixir-of-life-lesser",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/elixir-of-life.webp"
    },
    "sourceHash": "sha256:080a342e589a5a466ffb580f04af1b1d3a4d3ba59f21e29bc789b08f5f39f6c4",
    "translatableHash": "sha256:503449e607d1bbfa0ab4e00f6ffd9218a19b26360460919ff55aa79fd69b1ada",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of Life (Lesser)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate A (manipulate)\nElixirs of life accelerate a living creature's natural healing processes and immune system. Upon drinking this elixir, you regain (3d6+6)[healing] Hit Points and gain +1 item bonus to saving throws against diseases and poisons for 10 minutes.\nEffect: Elixir of Life",
      "bulk": 0.1,
      "price": {
        "gp": 30
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:slick",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uQOaRpfkUFVYD0Gx",
      "slug": "slick",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:84463519be4f5bd6ba856f76fa04569a9d8af43da96c101a93b4de05608eee91",
    "translatableHash": "sha256:75aad9bb78c224c169d7003830220f478118cc039d6169b558af0b5e941d79cd",
    "data": {
      "schemaVersion": 1,
      "name": "Slick",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This property makes armor slippery, as though it were coated with a thin film of oil. You gain a +1 item bonus to Acrobatics checks to Escape and Squeeze.",
      "bulk": 0,
      "price": {
        "gp": 45
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:magic-wand-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vJZ49cgi8szuQXAD",
      "slug": "magic-wand-2nd-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:319b2459615a024abca0056de1f4e7b798c28277bbd36bb4790e33dbe830ba87",
    "translatableHash": "sha256:5a92cfb34456bbe682fb72d282fda4d7e2bd5df09c2cb28a7a1653252409fe28",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Wand (2nd-Rank Spell)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This baton is about a foot long and contains a single spell. The appearance typically relates to the spell within.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank.\nCraft Requirements Supply a casting of the spell at the listed rank.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  }
]
