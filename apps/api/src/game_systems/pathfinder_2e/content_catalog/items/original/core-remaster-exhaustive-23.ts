import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_23_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:shears",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IF6qUrR3i030v0dH",
      "slug": "shears",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shears.webp"
    },
    "sourceHash": "sha256:4165b92f8a094aa862293a0fcf8a0068558539248db53c8165eac0a0000f872c",
    "translatableHash": "sha256:596fdb02cc77a43106907b5e3c412cd33d6131a152b4474b296ab36109a6818c",
    "data": {
      "schemaVersion": 1,
      "name": "Shears",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "deadly-d8",
        "finesse",
        "versatile-p"
      ],
      "description": "",
      "bulk": 0.1,
      "price": {
        "sp": 5
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cytillesh-toolkit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "u6pDaIxMIimhQx7X",
      "slug": "cytillesh-toolkit",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7d6c88519148b58fa171757b7f547d9e1ba5a65ceab44f65627aa34f7773a38c",
    "translatableHash": "sha256:ecfd020a433800b07be6c6302aaf98a4a6d97a02b8bee84cbed724692fdaad92",
    "data": {
      "schemaVersion": 1,
      "name": "Cytillesh Toolkit",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "These healer's toolkits are collections of crystalline scalpels and gritty salves made of cytillesh. They all glow the same sickly blue. While the toolkit is outside its opaque container, it sheds dim light in a 5-foot radius. Any non-dero using or wearing the toolkit is Sickened 1 until 1 hour after they've stopped, which cannot be reduced during that time.",
      "bulk": 1,
      "price": {
        "gp": 5
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:darkening-poison",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zXcCVIzDCq3P1pqT",
      "slug": "darkening-poison",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b456eb1c13952e6ec37034289ec7f8718a708731f3ba98f3f5b70513b4c3ceb",
    "translatableHash": "sha256:426601bb7d28c1c7f5a140e6f15273ab4bf646b8d9794a745cca78bce30572ac",
    "data": {
      "schemaVersion": 1,
      "name": "Darkening Poison",
      "itemType": "consumable",
      "level": 0,
      "rarity": "common",
      "traits": [
        "consumable"
      ],
      "description": "Many calignis keep several doses of darkening poison, an uncommon injury poison made from Darklands spider venom, on hand to incapacitate foes.\nSaving Throw check (fortitude, dc:16)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage (1 round)\nStage 2 1d6 poison and creatures you can see only with darkvision are Concealed from you (1 round)\nStage 3 1d6 poison and creatures you can see only with darkvision are Hidden from you (1 round).",
      "bulk": 0.1,
      "price": {
        "gp": 5
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hag-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ACa9QlFqdmW4s2Th",
      "slug": "hag-eye",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hag-eye.webp"
    },
    "sourceHash": "sha256:66a16a477a8644db9166bad3cb222796e65c4d9800f93f689c5c65f369e58d9a",
    "translatableHash": "sha256:006eae6538ef3691fb290e6a33b95127189ed126cf18aca8c64748194c124676",
    "data": {
      "schemaVersion": 1,
      "name": "Hag Eye",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying"
      ],
      "description": "This item appears to be an ordinary semiprecious stone and is typically mounted on a brooch or ring, but the stone is, in fact, an eyeball. This illusion can be seen through with Truesight or similar magic, and anyone who interacts with the item feels its wet, sticky surface, allowing them to attempt to disbelieve the illusion (check (perception, dc:19, immutable:true)). Many hags claim a hag eye is more effective if plucked from a living, awake creature, but this is likely just a convenient excuse for sadism.\nThe hag eye produces no direct benefit for the wearer, but allows the hag who created it, or any member of their coven, to peer through the eye using the Seek action. This has no range limit, provided the hag is on the same plane.\nAny damage dealt to the eye destroys it. If this happens while a hag is looking through it, the hag is Blinded for 1 hour.\nCraft Requirements You are a hag.",
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
    "contentId": "pf2e:item:equipment-srd:blackaxe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "o9IErbpmItz9NZT3",
      "slug": "blackaxe",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/blackaxe.webp"
    },
    "sourceHash": "sha256:60f1c0254d2165490941c136e9d191616385b9a0f36de75e4970c82bc3f70596",
    "translatableHash": "sha256:6fbd6ad04fba7ad3fdc97185cbe720d2f3f08172c1c7cdbb116830b7fd025af4",
    "data": {
      "schemaVersion": 1,
      "name": "Blackaxe",
      "itemType": "weapon",
      "level": 25,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cursed",
        "primal",
        "sweep",
        "unholy"
      ],
      "description": "This potent weapon used by Treerazer is a +4 greater corrosive major striking obsidian greataxe that grants a +4 item bonus to attack rolls, deals an extra 2d6 damage to plants, and has the properties of adamantine. It deals an additional die of damage when wielded by Treerazer.\nActivate—Owner's Authority 1 (concentrate, scrying)\nRequirements You aren't wielding Blackaxe and you are its true owner\nEffect You sense the world around Blackaxe as though you were in its location and can use any of your innate spells through the link as if it were the source of the spell. If another creature is wielding Blackaxe, it must succeed at a check (will, dc:50) save or be Slowed 2 until it relinquishes the weapon.\nActivate—Owner's Reclamation F (concentrate, teleportation)\nRequirements You aren't wielding Blackaxe and you are its true owner\nEffect Blackaxe appears in your hands, teleporting instantly from its prior location.\nActivate—Rejuvenating Deforestation 1 (concentrate, death, healing, positive)\nFrequency once per minute\nEffect Make a Strike against a living tree with Blackaxe. If it hits, the tree withers to ash and you heal 250 Hit Points and gain the benefit of a 6th-rank Restoration (6th) and Sound Body spell.\nDestruction Chop a powerful magical tree with Blackaxe, and while the sap is still fresh, sever one of Cyth-V'sug's limbs. This makes Blackaxe explode violently.",
      "bulk": 2,
      "price": {},
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
    "contentId": "pf2e:item:equipment-srd:flawless-celestial-shawl",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iyXC3tIX3VmjCx6G",
      "slug": "flawless-celestial-shawl",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:34aa159ae511f15806c968d1231112f5e9822c50feacc78c75e3b4ffd170e93e",
    "translatableHash": "sha256:aae0da3b2f5a18ea5b61c4ad983ac353204cfb5ec7997f11523c387879696385",
    "data": {
      "schemaVersion": 1,
      "name": "Flawless Celestial Shawl",
      "itemType": "equipment",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine",
        "invested"
      ],
      "description": "Each flawless celestial shawl functions only for a specifc tennin and is the culmination of their immortal cultivation. The sash is made of celestial silken threads stronger than adamantine yet lighter than gossamer. The tennin can draw thread from the flawless celestial shawl to serve as a sterling artisan's toolkit and workshop to Craft. The sash can be used to work with precious materials of any grade. On any Crafting check the tennin attempts using the shawl, they use the outcome one degree of success better than the result of their roll.\nActivation—Reweave 3\nThe tennin uses the sash to Repair an item. This Repair activity loses the exploration trait.",
      "bulk": 0,
      "price": {},
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pyrite-rat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YmTGzsenhogSNDXK",
      "slug": "pyrite-rat",
      "publicationTitle": "Pathfinder Beginner Box",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wondrous-figurine-golden-lion.webp"
    },
    "sourceHash": "sha256:c17ecc1cbbf12c07ac7464e1d258d68c369dcd523c1e10750a55e3e5454e0900",
    "translatableHash": "sha256:78897b37f0103c0ea798caa289db072df0cc2d412df37b02cf9bae595925a9d9",
    "data": {
      "schemaVersion": 1,
      "name": "Pyrite Rat",
      "itemType": "equipment",
      "level": 2,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This lustrous, rat-shaped pyrite statuette is 1 inch tall. When activated, the statuette transforms into a flesh-and-blood giant rat. You can use the following action when you hold the pyrite rat. You can use this action only once per day, and the rat remains transformed for 1 hour.\nActivate—Transform Statue 2 (concentrate, manipulate)\nYou place the statue on solid ground and speak the rat's secret name, causing the statuette to transform into a living Giant Rat.\nIn creature form, the giant rat acts on your turn. It gets 2 actions and can't use reactions. You have to spend an action each turn to tell it what to do; otherwise, it tries to run away from danger or cowers where it is.\nIf the rat is slain while in animal form, it reverts to its statue shape and can't be transformed again until 1 week has passed. If the figurine is destroyed while in its statue form, it's shattered and its magical properties are lost forever.",
      "bulk": 0,
      "price": {
        "gp": 32
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:storm-hammer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EuTZxxwdVeN6Xg3A",
      "slug": "storm-hammer",
      "publicationTitle": "Pathfinder Beginner Box",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/warhammer.webp"
    },
    "sourceHash": "sha256:05948e0a66eba5bd48288761caf3b3a63504150157cde2ed1119653e06711a35",
    "translatableHash": "sha256:2f49229cf80dd444e0cf88e31d9ba263b445c0d650a1c1a90fd6399de0179b6d",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Hammer",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "shove"
      ],
      "description": "Sparks of crackling electricity arc from this +1 magic warhammer, and the head thrums with distant thunder. Any hit with this hammer deals 1 extra electricity damage. You can use a special action to transform the sparks into lightning bolts.\nActivate—Electrify 1 (concentrate)\nUntil the end of your turn, the hammer deals 1d6 extra electricity damage instead of just 1. After you activate the storm hammer, you can't activate it again for 10 minutes.",
      "bulk": 1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:essence-forge-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tjxoE6w85Hlg2To4",
      "slug": "essence-forge-moderate",
      "publicationTitle": "Pathfinder #214: The Broken Palace",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:83fb596defb99098c97587a72c1c1d8fc548edb24eb32f1075cc6f595b41f455",
    "translatableHash": "sha256:dad58c83aea7b69eb99fce61135336c7ca262d69ca1d3c783459313d7e48f15d",
    "data": {
      "schemaVersion": 1,
      "name": "Essence Forge (Moderate)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "An essence forge consists of a large stone workbench with a receptacle for fuel built into the left side. Sparkling crystals are embedded across the forge's structure, with additional flourishes made from a different material, as appropriate to the type of forge.\nLife forges are adorned with fossilized bones and petrified wood. They're used to craft items associated with the divine and primal magic traditions. One must attempt a Nature or Religion check to prime a life forge.\nMatter forges are decorated with strips of precious metal. They can be used to craft items associated with the arcane and primal magic traditions. One must attempt an Arcana or Nature check to prime a matter forge.\nMind forges are accentuated with glittering gemstones. They can be used to craft items associated with the arcane and occult magic traditions. One must attempt an Arcana or Occultism check to prime a mind forge.\nSpirit forges are emblazoned with strange runes and obscure symbols enhanced by different pigments. They can be used to craft items associated with the divine and occult magic traditions. One must attempt an Occultism or Religion check to prime a spirit forge.\nActivate—Prime the Forge 1 minute (concentrate, manipulate)\nRequirements The essence forge doesn't currently contain any stored essence\nEffect You prepare the essence forge for use by placing raw materials in its receptacle then spend an hour concentrating on the forge, using your own magical potential to consume the materials. The combined gp value of the raw materials sets the maximum price of the item you can craft with the essence forge. An essence forge's receptacle can hold no more than 3 Bulk of raw materials, so coins, gemstones, or small valuable objects or items make for the best sources of fuel. Attempt an check (arcana, dc:30), check (nature, dc:30), check (occultism, dc:30), or check (religion, dc:30) check as appropriate for the tradition of essence forge you're using to focus your magical potential on the receptacle.\nCritical Success The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials. Additional essence overflows back into you, granting a +2 item bonus to the skill you used to Prime the Forge for the next 24 hours.\nSuccess The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials.\nFailure The raw materials are consumed, but the burn is inefficient, and the essence forge stores essence equal to half the value of the raw materials.\nCritical Failure The raw materials are consumed and lost, but no essence is stored in the forge; the raw materials are wasted.\nActivate—Craft an Item 2 hours (concentrate, manipulate)\nRequirements The essence forge has been primed with raw materials equaling or exceeding the value of the item you intend to craft, and you are not Fatigued\nEffect You place your hands atop the forge's workspace and focus your concentration on the essence contained within the forge. Choose an item whose formula you have and whose level is equal to or less than the essence forge's level, or choose an Essence Charm. The essence forge begins to construct that item as you concentrate, causing an increasingly realistic illusion of the item to come into focus atop the forge's workspace. Attempt a Crafting check with a DC determined by the forge's type (lesser, moderate, or greater); this check earns Forge Points (using the Victory Point system). You can sustain this activation for up to 8 hours; each time you sustain the activation, attempt another Crafting check to earn Forge Points. When you choose to end the activation, you become fatigued, and any remaining essence stored in the forge dissipates with no further effect. Consult the Essence Forge Crafting section below to determine if you were successful in crafting the item you chose.\nActivate—Absorb Essence 1 (concentrate, healing, manipulate)\nRequirements The essence forge contains essence\nEffect You absorb the essence in the forge, emptying it and allowing it to be primed. If the essence value in the forge is equal to or greater than 400 gp, the forge heals you for 6d8+20 healing HP. Otherwise the absorbed essence has no effect.\nEssence Forge Crafting\nWhen you finish crafting with an essence forge, consult the following to determine how successful you were.\n0 or fewer Forge Points: The essence was tainted or your concentration was lacking. An illusory object manifests, but it's a non-magical, worthless level 0 replica of the item you intended to craft.\n1–3 Forge Points: The item you craft is functional but temporary. It falls apart after it's activated or after 24 hours, whichever comes first.\n4–5 Forge Points: You successfully craft the item.\n6 or more Forge Points: You successfully craft the item, and it works better than expected. Choose one of the following enhancements to add to the item:\n• If the item has an activation that has a frequency of once per day, that activation can be made an additional time each day.\n• If the item has an activation that has a save DC or Strike modifier, that DC or Strike gains a +1 bonus.\n• If the item is an invested item, it grants a +1 item bonus to initiative checks as long as you have it invested.\n• The item is well crafted and can be sold for 60%",
      "bulk": 20,
      "price": {
        "gp": 2000
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:psyche-salts-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eOUZqtwBKdXagplE",
      "slug": "psyche-salts-greater",
      "publicationTitle": "Pathfinder #214: The Broken Palace",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c98de3049ddcd4e5f357265069c431a9ac16cac9f9a17b515048097ee09eb311",
    "translatableHash": "sha256:5fcad99ab47ebbaf531f6c168fad37588841d4d7c29cbc61c066f70230cb66ed",
    "data": {
      "schemaVersion": 1,
      "name": "Psyche Salts (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nA dose of psyche salts is kept in a small, corked vial. When you activate psyche salts, you uncork and pass the open end of the vial near the head of an adjacent creature. The salts within fizz and evaporate, creating a sour-smelling cloud that envelops the creature's head before fading. As they do, the vapors attempt to clear harmful influences from the creature's mind. The creature gains the effect of a 8th-rank Clear Mind spell with a 1d20+27 counteract check modifier and a +3 item bonus to saving throws against mental effects for 10 minutes.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:essence-forge-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MIBPJ73gjQ17kweK",
      "slug": "essence-forge-greater",
      "publicationTitle": "Pathfinder #214: The Broken Palace",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3f68fdd5ceaceb3518ad8f854dc9ea771fd9018dcb846e5438c151d818c2d6e",
    "translatableHash": "sha256:3529d37224e0cbe4a582db44d3bf3073bdd6c17470658272340afc87f43a5d58",
    "data": {
      "schemaVersion": 1,
      "name": "Essence Forge (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "An essence forge consists of a large stone workbench with a receptacle for fuel built into the left side. Sparkling crystals are embedded across the forge's structure, with additional flourishes made from a different material, as appropriate to the type of forge.\nLife forges are adorned with fossilized bones and petrified wood. They're used to craft items associated with the divine and primal magic traditions. One must attempt a Nature or Religion check to prime a life forge.\nMatter forges are decorated with strips of precious metal. They can be used to craft items associated with the arcane and primal magic traditions. One must attempt an Arcana or Nature check to prime a matter forge.\nMind forges are accentuated with glittering gemstones. They can be used to craft items associated with the arcane and occult magic traditions. One must attempt an Arcana or Occultism check to prime a mind forge.\nSpirit forges are emblazoned with strange runes and obscure symbols enhanced by different pigments. They can be used to craft items associated with the divine and occult magic traditions. One must attempt an Occultism or Religion check to prime a spirit forge.\nActivate—Prime the Forge 1 minute (concentrate, manipulate)\nRequirements The essence forge doesn't currently contain any stored essence\nEffect You prepare the essence forge for use by placing raw materials in its receptacle then spend an hour concentrating on the forge, using your own magical potential to consume the materials. The combined gp value of the raw materials sets the maximum price of the item you can craft with the essence forge. An essence forge's receptacle can hold no more than 3 Bulk of raw materials, so coins, gemstones, or small valuable objects or items make for the best sources of fuel. Attempt an check (arcana, dc:40), check (nature, dc:40), check (occultism, dc:40), or check (religion, dc:40) check as appropriate for the tradition of essence forge you're using to focus your magical potential on the receptacle.\nCritical Success The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials. Additional essence overflows back into you, granting a +3 item bonus to the skill you used to Prime the Forge for the next 24 hours.\nSuccess The raw materials are consumed, and the essence forge stores essence equal to the value of the raw materials.\nFailure The raw materials are consumed, but the burn is inefficient, and the essence forge stores essence equal to half the value of the raw materials.\nCritical Failure The raw materials are consumed and lost, but no essence is stored in the forge; the raw materials are wasted.\nActivate—Craft an Item 2 hours (concentrate, manipulate)\nRequirements The essence forge has been primed with raw materials equaling or exceeding the value of the item you intend to craft, and you are not Fatigued\nEffect You place your hands atop the forge's workspace and focus your concentration on the essence contained within the forge. Choose an item whose formula you have and whose level is equal to or less than the essence forge's level, or choose an Essence Charm. The essence forge begins to construct that item as you concentrate, causing an increasingly realistic illusion of the item to come into focus atop the forge's workspace. Attempt a Crafting check with a DC determined by the forge's type (lesser, moderate, or greater); this check earns Forge Points (using the Victory Point system). You can sustain this activation for up to 8 hours; each time you sustain the activation, attempt another Crafting check to earn Forge Points. When you choose to end the activation, you become fatigued, and any remaining essence stored in the forge dissipates with no further effect. Consult the Essence Forge Crafting section below to determine if you were successful in crafting the item you chose.\nActivate—Absorb Essence 1 (concentrate, healing, manipulate)\nRequirements The essence forge contains essence\nEffect You absorb the essence in the forge, emptying it and allowing it to be primed. If the essence value in the forge is equal to or greater than 5,000 gp, the forge heals you for 8d8+30 healing HP. Otherwise the absorbed essence has no effect.\nEssence Forge Crafting\nWhen you finish crafting with an essence forge, consult the following to determine how successful you were.\n0 or fewer Forge Points: The essence was tainted or your concentration was lacking. An illusory object manifests, but it's a non-magical, worthless level 0 replica of the item you intended to craft.\n1–3 Forge Points: The item you craft is functional but temporary. It falls apart after it's activated or after 24 hours, whichever comes first.\n4–5 Forge Points: You successfully craft the item.\n6 or more Forge Points: You successfully craft the item, and it works better than expected. Choose one of the following enhancements to add to the item:\n• If the item has an activation that has a frequency of once per day, that activation can be made an additional time each day.\n• If the item has an activation that has a save DC or Strike modifier, that DC or Strike gains a +1 bonus.\n• If the item is an invested item, it grants a +1 item bonus to initiative checks as long as you have it invested.\n• The item is well crafted and can be sold for 60%",
      "bulk": 20,
      "price": {
        "gp": 24000
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-sun",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eLB9htTAvZeiXgW6",
      "slug": "clockwork-sun",
      "publicationTitle": "Pathfinder #214: The Broken Palace",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0b9e0c460c9c132be03be8a80020499872e5c8747760cbca8aa1bdc2b644e406",
    "translatableHash": "sha256:51d92b6f77c91866bc1965b8516cbb0cf4e0e4389e048804ce58e62e28e0ef27",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Sun",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "arcane",
        "artifact",
        "clockwork"
      ],
      "description": "AC 45\nFort +36, Ref +30\nHardness 20\nHP 300 (BT 150)\nImmunities critical hits, object immunities, precision damage\nWeaknesses electricity 20, orichalcum 20\nResistances physical 20 (except adamantine or orichalcum)\nSpeed 10 feet, climb 10 feet\nAt the height of the Azlant Empire, there were those who had the wealth and skill to elevate the hobby of terrarium-keeping into a truly breathtaking endeavor. By deploying a clockwork sun into a subterranean cavern, these power-drunk overlords introduced a day-night cycle to chambers that otherwise would never have felt the touch of sunlight. At Azlant's height, an elite association of powerful spellcasters and aristocrats kept vast underground terrariums outfitted with clockwork suns, competing to see who could create the most astounding \"personal world.\" Yet not all clockwork suns were the playthings of the rich and bored. The one in En-Gokal served a practical purpose, nurturing farmlands that kept the inmates and staff of the prison fed. Even now, centuries after the cataclysmic events of Earthfall, this clockwork sun continues its relentless crawl across the cavern above Underheaven.\nA clockwork sun is an elephant-sized sphere of polished bronze plates fitted with glowing crystals, all arranged around a heart of grinding gears. An array of magical lenses amplifies the energy shed by a single aeon stone set in the center of the artifact, generating light that mimics that of a real sun. A series of short, spider-like legs along one side of the sun grants the artifact lumbering mobility. So long as at least one of these appendages remains in contact with a solid surface, the clockwork sun moves as if gravity were pulling it toward that surface, allowing the sun to move along walls and across ceilings with ease (although a clockwork sun walking on a wall or ceiling immediately falls if it loses contact with this surface).\nActivate—Set Cycle 10 minutes (concentrate, manipulate)\nEffect You program the clockwork sun's motions and periods of illumination over the course of a 24-hour cycle. The clockwork sun follows this cycle exactly and must return to its starting point at the end of each cycle. If it does so, the act of the cycle automatically winds the clockwork sun, and it repeats the cycle. A clockwork sun that encounters an unexpected barrier can navigate simple blockades by moving around or climbing over them—as such, many users set a clockwork sun's cycle to take less time than 24 hours, giving the artifact plenty of time to return to its starting spot if it's forced take detours.\nAs part of setting the clockwork sun's cycle, you also determine the periods during which the artifact is illuminated; the total illumination time can't be longer than half the sun's total cycle time (typically 12 hours). While illuminated, a clockwork sun sheds bright light equivalent to that of a sunny day to a radius of 1 mile. A sighted creature that ends their turn within 20 feet of an illuminated clockwork sun and didn't Avert Gaze during their turn must succeed at a check (fortitude, dc:43) save or be Dazzled for 1 minute (Blinded for 1 minute on a critical failure). Creatures at a further distance can look directly at the light without fear, as it's not as intense as true sunlight.\nCreatures that are vulnerable to sunlight (such as deros or vampires) do not treat the light of a clockwork sun as true sunlight, but if they start their turn within the illumination, they must succeed at a check (will, dc:43) save or become Sickened 1 (Sickened 2 on a critical failure) from the minor but discomforting pain the near-sunlight induces.\nDestruction A clockwork sun can be destroyed by mundane means, but its armored frame and high Hit Points make them difficult to damage. A clockwork sun reduced to 0 HP is destroyed and explodes in a blast of shrapnel and fire in a 40-foot type:emanation. Creatures in the area take 10d6 piercing damage] damage (check (reflex, dc:43, basic) save).",
      "bulk": 24,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:schematic-scanner",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0X1s1F8HmEXu3vEj",
      "slug": "schematic-scanner",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35b62a17e3c3749fee60d737a5807cb6162dd30ce5c91ef00e2fa2c2e7b339f2",
    "translatableHash": "sha256:91131d7658790fea37d1639a99a2d1cdbbfeb2cd3e5b2cccaf081e9db066ae11",
    "data": {
      "schemaVersion": 1,
      "name": "Schematic Scanner",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A schematic scanner is a complex brass device featuring multiple mounted lenses, clamps, and apertures. A schematic scanner can hold the formulas for items as if it were a formula book with unlimited capacity. You can add a formula to the schematic scanner using the Store Schematics activation. A schematic scanner grants you a +2 item bonus to Crafting checks to craft an item whose formula is stored in the schematic scanner.\nActivate—Store Schematics 3 (manipulate)\nYou place the written formula for an item into the schematic scanner and view it through the mounted lenses, magically storing a copy of the formula inside the schematic scanner.\nActivate—Reverse Engineer Schematics (manipulate)\nYou place an item in front of the schematic scanner, then view the item through the mounted lenses, magically learning the formula for the targeted item, without disassembling or causing harm to the item, and storing the formula in the schematic scanner. Reverse engineering a formula in this way takes 10 minutes and doesn't cost any gold.",
      "bulk": 0.1,
      "price": {
        "gp": 230
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-crescent",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sPvip91GX8TYvr8Q",
      "slug": "aeon-stone-crescent",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d7e9e816d820ee0ff226b315d63ab5cd20ab73a5afb53183a3ddd8bcb1a44a2",
    "translatableHash": "sha256:060b8b93f79459c9c2a7ca70002b195a2887068414b32972a77bb74ef5083aa5",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Crescent)",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Aeon stones are magical, intricately cut gemstones that orbit the head of their owners and grant them a magical effect. The ancient Azlanti empire made many advances in aeon stone technology, creating countless new aeon stones and devising innovative methods to use aeon stones to their greatest effect. The first wayfinders—one of many devices in which aeon stones can be slotted to gain additional resonant powers—were created in Azlant.\nWhen you invest one of these precisely shaped crystals, the stone orbits your head instead of being worn on your body. You can stow an aeon stone with an Interact action, and an orbiting stone can be snatched out of the air with a successful Disarm action against you. A stowed or removed stone remains invested, but its effects are suppressed until you return it to orbit your head again.\nThere are various types of aeon stones, each with a different appearance, magical effect, and resonant power.\nOnce holy relics, the creation of crescent aeon stones was inspired by Acavna, goddess of the moon and protection. The crescent aeon stone continually sheds dim light in a 5-foot radius.\nActivate—Moonbeam 2 (concentrate, divine, holy, light, spirit)\nFrequency once per day\nEffect The crescent aeon stone fires a blast of silvery moonlight in a 100-foot type:line, dealing 4d12 spirit damage to all creatures in the area (check (reflex, dc:22, basic) save). This is silver damage for the purposes of weaknesses, resistances, and the like.\nThe resonant power enables you to cast forbidding ward as a divine innate cantrip.",
      "bulk": 0,
      "price": {
        "gp": 225
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:miniaturization-module",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6BGlAjt37jE4a6st",
      "slug": "miniaturization-module",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:241eaf3dbcd78b9f6fc9b71a0a8f5244e33f99e847fb9332ee6f42d991a42ea2",
    "translatableHash": "sha256:1cb4850f6b7e320aa0b9712a8ca382c1828de99535b922c101eb4925cf9ea32e",
    "data": {
      "schemaVersion": 1,
      "name": "Miniaturization Module",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A miniaturization module is a bulky clockwork belt interwoven with clear rubber tubing. These tubes are filled with distilled liquid magic, which serves as a power source. While wearing a miniaturization module, you gain a +1 item bonus to checks to Escape.\nActivate—Miniaturize Me! 2 (concentrate, manipulate)\nFrequency once per day\nEffect You instantly shrink, becoming Tiny in size. Your equipment shrinks with you but returns to its original size if removed. While Tiny, your reach changes to 0 feet. You remain Tiny for 10 minutes, but you can Dismiss this effect.\nActivate—Miraculous Escape r\nFrequency once per hour\nTrigger You become Grabbed, Immobilized, or Restrained\nEffect You instinctively trigger the miniaturization module and wiggle free, then move and grow larger, seemingly escaping in a flicker of motion. You become Tiny, then attempt to Escape the triggering effect, gaining a +4 circumstance bonus to this check. If you successfully Escape, you Step into an adjacent space. Regardless of the result, you then return to your original size.",
      "bulk": 0.1,
      "price": {
        "gp": 350
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nap-gas-dispenser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rpyBAmS3jeJdYsbz",
      "slug": "nap-gas-dispenser",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c4e661dcb97a5dcb004ed9998bd429418309a257cac31ea557d3cdcca1ea929",
    "translatableHash": "sha256:6cec2f86ea4955f065c762f0d44373d095b477fe9c5feb141738f3e9fdd4adea",
    "data": {
      "schemaVersion": 1,
      "name": "Nap Gas Dispenser",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nWhen you Activate a nap gas dispenser, you can either place it in an adjacent space or toss it up to 30 feet away. Once you've done so, the metallic canister instantly disperses knockout gas in a 15-foot type:burst. Creatures in the area must attempt a check (fortitude, dc:23) save, with the following results. This is a poison and incapacitation effect.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –2 status penalty to Perception checks and is Slowed 1 for 1 round.\nFailure The creature is slowed 1 for 1 minute. At the end of their next turn, they fall Prone and fall Unconscious for 1 minute. A creature can Interact to shake the creature awake as normal, but this doesn't shorten the duration of the slowed condition.\nCritical Failure As failure, but the creature is slowed 1 for 1 hour and it takes three Interact actions to wake them.",
      "bulk": 0.1,
      "price": {
        "gp": 70
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:security-badge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "v6J6LjXazHCHResN",
      "slug": "security-badge",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fc4e9eff458ea88f3a9736a34f70440a7ccaaf49643594d83a492f0f21702f6f",
    "translatableHash": "sha256:20065c0528fd2d062c60cb11d764d6e5acac9637f6aa296d3cdff9a496e1c438",
    "data": {
      "schemaVersion": 1,
      "name": "Security Badge",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "When displayed prominently, this iron badge grants you authority and gravitas. You gain a +1 item bonus to Intimidation checks.\nActivate—Authoritative Command 1 (auditory, concentrate, incapacitation, linguistic, mental)\nFrequency once per day\nEffect You shout at a foe within 60 feet, compelling them to stand in place and drop everything they're holding. The target attempts a check (will, dc:23) save with the following results.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 as it does one of the following at the beginning of its next turn: stand in place or release what it's holding.\nFailure The target is Slowed 2 as it stands in place and releases what it's holding at the beginning of its next turn.\nCritical Failure The target is Slowed 3 as it spends its next turn to stand in place, release what it's holding, and place its hands in the air.",
      "bulk": 0,
      "price": {
        "gp": 360
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-vital-amplification",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZtiSyJMXellZRPRB",
      "slug": "aeon-stone-vital-amplification",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9193a79095cbbac8808760453585a18816257bcc6739fa541b6f171799952560",
    "translatableHash": "sha256:7fcc8e75e0e67137ff936aee0a7ae65059f0c86f466c797112e662e9c07c1f57",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Vital Amplification)",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Aeon stones are magical, intricately cut gemstones that orbit the head of their owners and grant them a magical effect. The ancient Azlanti empire made many advances in aeon stone technology, creating countless new aeon stones and devising innovative methods to use aeon stones to their greatest effect. The first wayfinders—one of many devices in which aeon stones can be slotted to gain additional resonant powers—were created in Azlant.\nWhen you invest one of these precisely shaped crystals, the stone orbits your head instead of being worn on your body. You can stow an aeon stone with an Interact action, and an orbiting stone can be snatched out of the air with a successful Disarm action against you. A stowed or removed stone remains invested, but its effects are suppressed until you return it to orbit your head again.\nThere are various types of aeon stones, each with a different appearance, magical effect, and resonant power.\nA vital amplification aeon stone improves the flow of vital energy through your body, speeding the healing process and safeguarding your body from life-draining effects. Whenever you regain Hit Points, you regain an additional 1 Hit Point for each 10 Hit Points regained (minimum 1 additional Hit Point). The resonant power grants you resistance 5 to void damage.",
      "bulk": 0,
      "price": {
        "gp": 330
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-flickering",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4VZeiIiJl13Bhyxo",
      "slug": "aeon-stone-flickering",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-lavender-and-green-ellipsoid.webp"
    },
    "sourceHash": "sha256:8f4a86fb22173240af74246a9a1ab718a3d16bcf39f87d183f5b68ca4c0771f1",
    "translatableHash": "sha256:89a5aedc9736aba3aea568a76cc2cbf674e72f1021331846388d2a07da7c8aaa",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Flickering)",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Aeon stones are magical, intricately cut gemstones that orbit the head of their owners and grant them a magical effect. The ancient Azlanti empire made many advances in aeon stone technology, creating countless new aeon stones and devising innovative methods to use aeon stones to their greatest effect. The first wayfinders—one of many devices in which aeon stones can be slotted to gain additional resonant powers—were created in Azlant.\nWhen you invest one of these precisely shaped crystals, the stone orbits your head instead of being worn on your body. You can stow an aeon stone with an Interact action, and an orbiting stone can be snatched out of the air with a successful Disarm action against you. A stowed or removed stone remains invested, but its effects are suppressed until you return it to orbit your head again.\nThere are various types of aeon stones, each with a different appearance, magical effect, and resonant power.\nA flickering aeon stone contains a drop of orichalcum at its center. It remains slightly out of phase with reality, giving it a translucent appearance.\nActivate—Flicker 1\nFrequency once per day\nEffect The flickering aeon stone draws you slightly out of sync with the flow of time, causing you to flicker in and out of existence. You become Concealed for 1 minute, but you can't use this concealment to Hide or Sneak.\nActivate—Enter Stasis 1\nFrequency once per day\nEffect The flickering aeon stone pulls you from the flow of time completely, placing you in temporary stasis while you heal, then returning you to reality at the moment you left. You regain 2d10+8 healing Hit Points. If you have the clumsy, drained, enfeebled, or stupefied condition, the value of each of these conditions is reduced by 1.\nThe resonant power grants you a +1 circumstance bonus to initiative rolls.",
      "bulk": 0,
      "price": {
        "gp": 1200
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gravity-inverter",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "A7tMFLBkzhU0I0WN",
      "slug": "gravity-inverter",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dab895763baf4cca9ce76c7cee6387f12bfb83b6f3efa33760cb4cfea4cf9229",
    "translatableHash": "sha256:f092739370220ae6672c1224e5b818c91d2b7cd9e29c5b0f0bdb2099e93094fb",
    "data": {
      "schemaVersion": 1,
      "name": "Gravity Inverter",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget"
      ],
      "description": "Activate 1 (manipulate)\nWhen you Activate a gravity inverter, you can either place it in an adjacent space or toss it up to 30 feet away. Once you've done so, this metallic device implodes, creating a 10-foot cylinder of unstable gravity that lasts for 4 rounds.\nAll creatures and objects in the area when a gravity inverter is activated, who enter the area, or who begin their turn in the area float upward 10 feet, stopping harmlessly if they collide with a solid object or reach the top of the cylinder. While floating, a creature is Off-Guard and can't move unless they Push Off a surface or Fly. Pushing Off is a single action that has the move trait, allowing the creature to move half its Speed in a straight line through the area (if the creature remains in the area, this momentum will be disrupted by the gravity inverter at the beginning of the creature's next turn, as noted above). At the end of the duration, this gravity well fades—all creatures floating fall to the ground, taking falling damage as appropriate. Creatures who can fly are immune to this fall damage.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:champions-laurels-amateur",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0WIzDXaihyzPERdn",
      "slug": "champions-laurels-amateur",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:22395100db183c90294f651689e53cfba0597847999d44705a502169c54ead17",
    "translatableHash": "sha256:7ec112a476bc7d53ed996082857e5c25bab4f10d24091e56b5fbdd49cdd66ba7",
    "data": {
      "schemaVersion": 1,
      "name": "Champion's Laurels (Amateur)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You are about to roll an Acrobatics or Athletics check, and you are trained or better in the skill\nRequirements You can perceive at least 12 allies or friendly bystanders encouraging you.\nThis elegant crown of laurels can be worn on the head, atop a helmet, or even wrapped around the neck as a torc, signaling the wearer's athletic achievements in a past competition. When you Activate the laurels, you draw strength from your adoring crowd and gain a +1 status bonus to the triggering check. If you critically succeed at the check, you gain 2 temporary Hit Points that last for 1 minute.",
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
    "contentId": "pf2e:item:equipment-srd:death-tusk-helm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8l3IEK409fDYgRR9",
      "slug": "death-tusk-helm",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e292948fb90f071c430fa48a42d774573228b1303bc04cd56ed57ad9f868bb5",
    "translatableHash": "sha256:9f0bb1463c15c71d221be1605468bc9d042f6a967652f47902b98ee176083704",
    "data": {
      "schemaVersion": 1,
      "name": "Death Tusk Helm",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Slivers of boar tusk are sewn into this leather cap, creating a scaled helmet that channels dozens of boars' ferocity into the wearer.\nActivate—Boar's Last Stand 1 (auditory, concentrate)\nFrequency once per day\nTrigger Your turn begins\nRequirements You have a doomed or wounded value of 1 or higher\nEffect You unleash a fearsome roar. 1 creature of your choice within 30 feet must attempt a check (will, dc:16) save or become Frightened 1 (Frightened 2 on a critical failure). Increase this DC by the sum of your Doomed and Wounded values (maximum DC 20). You then gain 5 temporary Hit Points that last 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 55
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pyrefeather-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eqrqkIdQHYzueKmj",
      "slug": "pyrefeather-cloak",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d577ba8dfe2d7b8b478166c50dbee3c03bb1ca53705369ad0184b051236901ff",
    "translatableHash": "sha256:4607a6f5e80df6bcd40fae2c5a9f70b6e15e50677b2857907c26349ffa7864a9",
    "data": {
      "schemaVersion": 1,
      "name": "Pyrefeather Cloak",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The red and dark-orange feathers of a pyrefowl have been woven into a beautiful cloak.\nActivate—Deflect Flame r (manipulate)\nTrigger You would be affected by a fire effect\nFrequency once per day\nEffect You flourish the cloak, using the feathers to reduce the incoming heat. You gain fire resistance 5 and a +1 circumstance bonus to saving throws against the triggering effect until the beginning of your next turn. If you are taking persistent fire damage, you can immediately attempt a flat check to end the persistent damage.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pyrefeather-token",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iSwJvnJ6LuoQUi8f",
      "slug": "pyrefeather-token",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:af1b015aace0d3341677c2f93173cf121e9a497fe0a52bea852b05caa4d7f672",
    "translatableHash": "sha256:82ce12b56d56c68d3fd148db4a432f61c2c39776d3bd782eb1f3df4592323816",
    "data": {
      "schemaVersion": 1,
      "name": "Pyrefeather Token",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "vitality"
      ],
      "description": "Activate f (concentrate)\nTrigger You succeed at, fail, or critically fail a recovery check while Dying by 1.\nThis pyrefowl feather, accentuated with beadwork, stores a spark of the bird's self-healing power. When you Activate the token, you reduce the triggering recovery check's DC by 1, potentially improving your check's degree of success. You also gain 5 temporary Hit Points that last for 1 minute. You can Activate this talisman even while Unconscious.",
      "bulk": 0,
      "price": {
        "gp": 5
      },
      "usage": "affixed-to-armor",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gift-of-olives",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jt5WnZXTPR39epV7",
      "slug": "gift-of-olives",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4eff7308119238426b4bb9e16b854e35bfbfb34d0ea61ea4350b89446931d4dd",
    "translatableHash": "sha256:89884bc5e424366840ba169e6d57ccb5b295ad0b8afb977d9fe700e52befc9e6",
    "data": {
      "schemaVersion": 1,
      "name": "Gift of Olives",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "plant"
      ],
      "description": "This expertly trimmed olive branch remains lush and vibrant, even months after being ritually harvested. With a little soil and patience, it can quickly grow into a sheltering tree that later bestows the user with a new gift of olives.\nActivate—Sew the Cutting 2 (healing, manipulate, plant)\nRequirements You are outside and standing atop an unoccupied 5-foot square with some soil\nFrequency once per day\nEffect You drive one end of the cutting into the soil. The cutting immediately grows into an olive tree whose boughs shelter a 15-foot-diameter area. Creatures in the sheltered area gain resistance 3 to any environmental damage, gain a +1 status bonus to saving throws against environmental hazards, and gain a +1 status bonus to Survival checks to Subsist. After 10 minutes, the tree sprouts 8 olives, each of which can be eaten as an action to restore 1 Hit Point and nourish the eater as if they had consumed a full meal. After 8 hours, the olives lose their potency, and the gift of olives cutting detaches from the tree and falls harmlessly to the ground. The olive tree loses its protective abilities and becomes a normal, non-magical olive tree that survives so long as it's growing in a suitable location.",
      "bulk": 0.1,
      "price": {
        "gp": 48
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:champions-laurels-professional",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5w7BqWBjsmPVpGyB",
      "slug": "champions-laurels-professional",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6ead854fa2342ffdd90981f93d0909789dd8d28d7e72cfbf9764bf25e4646db6",
    "translatableHash": "sha256:898291e1aac6b0c5153b6dacaeaa8eb981e5a4c010cad4b89e7a565749cbee39",
    "data": {
      "schemaVersion": 1,
      "name": "Champion's Laurels (Professional)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You are about to roll an Acrobatics or Athletics check, and you are trained or better in the skill\nRequirements You can perceive at least 12 allies or friendly bystanders encouraging you.\nThis elegant crown of laurels can be worn on the head, atop a helmet, or even wrapped around the neck as a torc, signaling the wearer's athletic achievements in a past competition. When you Activate the laurels, you draw strength from your adoring crowd and gain a +2 status bonus to the triggering check. If you critically succeed at the check, you gain 10 temporary Hit Points that last for 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:champions-laurels-renowned",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "H7MTPfM3PsK6H26n",
      "slug": "champions-laurels-renowned",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3a1faf5c5513bdc93d586fe4f012949a6948c27cb7a681c70f49f8f092dd759e",
    "translatableHash": "sha256:a65d348312234430793e8ec410b1a9ff314cae643569ecdca240aae1713730d7",
    "data": {
      "schemaVersion": 1,
      "name": "Champion's Laurels (Renowned)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You are about to roll an Acrobatics or Athletics check, and you are trained or better in the skill\nRequirements You can perceive at least 12 allies or friendly bystanders encouraging you.\nThis elegant crown of laurels can be worn on the head, atop a helmet, or even wrapped around the neck as a torc, signaling the wearer's athletic achievements in a past competition. When you Activate the laurels, you draw strength from your adoring crowd and gain a +3 status bonus to the triggering check. If you critically succeed at the check, you gain 18 temporary Hit Points that last for 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 3200
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:protectors-final-gift",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D9vU4fADTYSaZpM9",
      "slug": "protectors-final-gift",
      "publicationTitle": "Pathfinder #217: Death Sails a Wine-Dark Sea",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/rapier.webp"
    },
    "sourceHash": "sha256:a4b2e51f36ab44eda788290520580a46bb6282f398e0e75d1fce91e55dde3ab6",
    "translatableHash": "sha256:22c0b557c83dd8cd2b34fcd3fcddb8472f8a34617bbdc59c00a84a3d84a0ac39",
    "data": {
      "schemaVersion": 1,
      "name": "Protector's Final Gift",
      "itemType": "weapon",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "deadly-d8",
        "disarm",
        "finesse",
        "poison"
      ],
      "description": "Within hives of giant bees, some become protectors of their hive and etch runes onto their stingers via dance. Upon such a bee's death, its stinger can be removed from its body and used as +1 striking rapier, though a hilt often needs to be attached for skilled swordsmanship. The imbued magic allows the stinger to slowly renew a small bit of its venom supply. The wielder can gather this and deliver it during a Strike. The victim is made to see prophetic flashes of their future as it courses through their system.\nActivate—Apiprophecy Sting f (manipulate)\nFrequency once per day\nEffect The protector's final gift secrets apiprophecy venom, which coats the blade and affects the next creature successfully struck with the blade within the next minute.\nApiprophecy Venom (poison)\nSaving Throw check (will, dc:20, traits:poison)\nMaximum Duration 4 rounds\nStage 1 2d6 mental damage and Dazzled",
      "bulk": 1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vortex-pouch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HfQLNzRcQNMUL6Ux",
      "slug": "vortex-pouch",
      "publicationTitle": "Pathfinder #217: Death Sails a Wine-Dark Sea",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5584ec66a1f778d046a987e06affb6664abef45c32b7b78452dcceefc188f97e",
    "translatableHash": "sha256:ba288b655b2ea6f49d6333c746b33d5d92b43d0f065cd6dbc173f2032c5c7719",
    "data": {
      "schemaVersion": 1,
      "name": "Vortex Pouch",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "air",
        "magical",
        "mythic"
      ],
      "description": "When empty, the vortex pouch's net seems too loose to hold much. However, when used to catch the wind, it stretches to hold the air. With nowhere for the wind to go, the air inside it swirls violently. If the caught wind includes a storm, clouds, fog, or similar effect, it's visible among the whirlwind.\nActivate—Catch Wind 2 (air, manipulate)\nRequirements The vortex pouch is empty\nEffect You gather the nearby air and wind within the vortex pouch. Creatures within a 20-foot type:emanation must attempt a check (fortitude, dc:20) save or be moved 5 feet closer toward you as the air rushes into the pouch. Targets that critically fail the save are moved 10 feet. You can Sustain the activation once per round, up to 1 minute, to continue Catching Wind. If you spend a Mythic Point when Catching Wind, the vortex pouch gathers air in a 10-mile radius; though the vortex is only strong enough to forcibly suck in creatures within the original 20-foot type:emanation, weaker creatures with the air trait and creatures associated with the sky in the 10-mile radius will know your general direction and feel a sense of unease, granting you a +2 status bonus to Intimidation checks against those creatures for 1 week. When you end the activation, the vortex pouch becomes 1 Bulk and you can empty it using Release Wind.\nActivate—Release Wind 2 (air, manipulate)\nRequirements The vortex pouch contains air or wind\nEffect Wind rushes out of the vortex pouch in a 30-foot type:cone. All creatures in the cone take 8d6 bludgeoning damage (check (fortitude, dc:20, basic) save). Creatures that fail their saving throw are pushed 5 feet away from you; creatures that critically fail are pushed 10 feet. If the caught wind included weather that might deal a different type of damage, Release Wind deals this damage instead (for instance, dealing electricity damage if it caught a thundercloud or cold damage if it caught a blizzard).",
      "bulk": 0,
      "price": {
        "gp": 240
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hydra-head-club",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nWUx4zEGOE8Uot1g",
      "slug": "hydra-head-club",
      "publicationTitle": "Pathfinder #217: Death Sails a Wine-Dark Sea",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5e84aa2bcfb3c660d8c9793dae0bbe2d2b8b0bc2c480da01b1c68d0618b429d3",
    "translatableHash": "sha256:0de937748a452e6ae570faa6f793391a6d1c1ca941023c0df4dc32461b2753f6",
    "data": {
      "schemaVersion": 1,
      "name": "Hydra Head Club",
      "itemType": "weapon",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "magical",
        "modular",
        "thrown-10"
      ],
      "description": "This spine and skull of a slain hydra has been picked clean by a carrion bird and crafted into this +1 striking club. In addition to its normal traits, the hydra head club also has the modular P trait, as it can be manipulated to cause the jaws to spring open. Even in death, its head twitches independently. The creature's famed regenerative powers are still present, despite the creature's death; if damaged, the hydra head club repairs itself at the rate of 1 Hit Point per minute, unless it has been completed destroyed.\nActivate—Reactive Snap f (attack)\nFrequency once per day\nTrigger You attempt a Strike as a Reaction\nEffect The hydra head club snaps with a momentary burst of its former glory. Your Strike attempt deals an additional 1d6 damage. If your Strike misses, the activation does not count against the hydra head club's activation frequency.\nCraft Requirements You must supply a skull and spine of a hydra when crafting this weapon.",
      "bulk": 1,
      "price": {
        "gp": 225
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soldiers-syrup-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6VbMcDOjk4OHzEfx",
      "slug": "soldiers-syrup-minor",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:461aa419716d753219e85b137acbe2a14d3208e31b4908712a1c20d06a1a7369",
    "translatableHash": "sha256:f7f7bd7817b228993adcd4ce05e7ea44c4827d8c6d95d1288774f354e33fc56e",
    "data": {
      "schemaVersion": 1,
      "name": "Soldier's Syrup (Minor)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "This thick syrup sweetens potions and creates a distinctive, metallic flavor associated with the festival days in Dhuraxilis. Partygoers are fond of mixing soldier's syrup with potions to extend their release.\nActivating a dose of soldier's syrup requires you to combine it with another consumable potion that takes 1 action to activate. After swirling the mixture for a few moments, you must either imbibe the augmented potion within 1 minute, or the potion reverts to its unaugmented state. The potion's level cannot exceed that of the soldier's syrup it is mixed with, otherwise the syrup is wasted.\nWhen consumed, a soldier's syrup–augmented potion does not immediately grant its benefits to you. Instead, you can activate the potion within the next hour as a single action, which has the concentrate trait. You can have only one soldier's syrup–augmented potion consumed at a time; consuming a second one renders the first one inert. If you do not activate the potion within 1 hour, the potion spoils inside you, and you become Enfeebled 1 for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soldiers-syrup-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5AD7oDOGBd7CrqL5",
      "slug": "soldiers-syrup-lesser",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9685db33698cacc32db01d6c43525bd168f57bd96735ee713ddc38c3d5df6a75",
    "translatableHash": "sha256:593b52eca80fa059413eb063a1198fa86caef612ea6aeac064c70fcd09b8cc98",
    "data": {
      "schemaVersion": 1,
      "name": "Soldier's Syrup (Lesser)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "This thick syrup sweetens potions and creates a distinctive, metallic flavor associated with the festival days in Dhuraxilis. Partygoers are fond of mixing soldier's syrup with potions to extend their release.\nActivating a dose of soldier's syrup requires you to combine it with another consumable potion that takes 1 action to activate. After swirling the mixture for a few moments, you must either imbibe the augmented potion within 1 minute, or the potion reverts to its unaugmented state. The potion's level cannot exceed that of the soldier's syrup it is mixed with, otherwise the syrup is wasted.\nWhen consumed, a soldier's syrup–augmented potion does not immediately grant its benefits to you. Instead, you can activate the potion within the next hour as a single action, which has the concentrate trait. You can have only one soldier's syrup–augmented potion consumed at a time; consuming a second one renders the first one inert. If you do not activate the potion within 1 hour, the potion spoils inside you, and you become Enfeebled 1 for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sparking-pepper-string",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JE2PATrlNNz23yaF",
      "slug": "sparking-pepper-string",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:72b1d23fed7a921bd0c13715ec385463c151d7b37fa7cf4da2cb02ddca49850e",
    "translatableHash": "sha256:d1e2df57b126b540446fb54cbdc113068fc36a39f8709a4383be19d2be944003",
    "data": {
      "schemaVersion": 1,
      "name": "Sparking Pepper String",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "electricity",
        "processed"
      ],
      "description": "Activate 1 Interact\nVendors sell these strings of roasted peppers on festival nights in Dhuraxilis. Their spiciness cuts through the fatty meats that are also popular during late nights, and the sparks from the peppers serve as a pick-me-up to maintain the energy for a party. After you eat a sparking pepper string, your body bristles with electricity until the end of your next turn. When you successfully Strike a target with an unarmed attack or a metal weapon, you can end this effect as a free action to have the attack deal an additional 1d6 electricity damage. If not expended before the duration ends, the electricity dissipates harmlessly.\nEffect: Sparking Pepper String",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:successor-doll",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6ZM8fiFi6QF7RNxM",
      "slug": "successor-doll",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:93ece3fda96b6c4e449e10a6f71f67884a3356ae50171defd68b046abcf3695f",
    "translatableHash": "sha256:c6665d8f8a90480e08e101e1abeba26b2b6d9c28728364a2adbbafbead952c3b",
    "data": {
      "schemaVersion": 1,
      "name": "Successor Doll",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "divine",
        "invested",
        "magical"
      ],
      "description": "This reversible doll shows Iapholi on one side and the harpy Ekriathe who preceded her in her line of reincarnation on the other. Non-magical successor dolls are popular gifts for children, and Iapholi often distributes them (including a handful of magical versions) on her birthday. Magical successor dolls sometimes frown, smile, or wink as if aware of their surroundings and nearby conversations.\nActivate—Big Eyes, Pleading Face r (concentrate, emotion, mental, visual)\nFrequency once per day\nTrigger You fail or critically fail to Request a favor\nEffect The doll's eyes grow large as its lips quiver, expressing adorable disappointment. Roll 1d4 and add the result to your Diplomacy check as a circumstance bonus, which might improve the degree of success.\nActivate—Fierce Gaze, Approving Smile r (concentrate, emotion, mental, visual)\nFrequency once per day\nTrigger You succeed or critically succeed when Coercing a creature\nEffect The doll smugly smirks at the creature, either reinforcing how wise it is to heed your demands or innocently reminding it how much happier it is for complying. After the creature finishes following your directives, it must attempt a check (will, dc:21) save.\nSuccess The creature is unaffected.\nFailure The creature's fond memory of the doll's approval overwhelms any hard feelings the creature has toward you; it doesn't act against you as a result of your coercion unless your demands were truly shocking (such as forcing them to violate any anathema they have or betray a close ally).",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soldiers-syrup-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Vnl0tgVKGKsqHvny",
      "slug": "soldiers-syrup-moderate",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c23fc84d0eda5893bc706140bd4e62ba21cdc290e9807a25aa5dfe1793d3493",
    "translatableHash": "sha256:22f902f58dd84842a88bc11be4b1447b1d2eb6fa011c1b0481437328217725a3",
    "data": {
      "schemaVersion": 1,
      "name": "Soldier's Syrup (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "This thick syrup sweetens potions and creates a distinctive, metallic flavor associated with the festival days in Dhuraxilis. Partygoers are fond of mixing soldier's syrup with potions to extend their release.\nActivating a dose of soldier's syrup requires you to combine it with another consumable potion that takes 1 action to activate. After swirling the mixture for a few moments, you must either imbibe the augmented potion within 1 minute, or the potion reverts to its unaugmented state. The potion's level cannot exceed that of the soldier's syrup it is mixed with, otherwise the syrup is wasted.\nWhen consumed, a soldier's syrup–augmented potion does not immediately grant its benefits to you. Instead, you can activate the potion within the next hour as a single action, which has the concentrate trait. You can have only one soldier's syrup–augmented potion consumed at a time; consuming a second one renders the first one inert. If you do not activate the potion within 1 hour, the potion spoils inside you, and you become Enfeebled 1 for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mask-of-shifting-monstrosity",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hKT6sixKQhu8f5zJ",
      "slug": "mask-of-shifting-monstrosity",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7f166286c9dbf0bf11e34b9a924be32d8af5c4749d48fec513306cd6014555d7",
    "translatableHash": "sha256:8173f15d4c829ccbadd4841eafefa7e4e73e9e1e1265657d6e2c7b41c07d56a8",
    "data": {
      "schemaVersion": 1,
      "name": "Mask of Shifting Monstrosity",
      "itemType": "equipment",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This mask's features shift between various non-human elements, with each version reveling in grotesque and monstrous variations. During the festivals in Dhuraxilis, these masks are worn by influential and rich humans (or human-appearing populations) to better blend in with the monstrous crowds as they join in the revelry. While wearing the mask, you gain a +1 item bonus to Deception checks.\nActivate—Monstrosity Meld 1 (concentrate, polymorph)\nFrequency once per day\nEffect You take on the general appearance of a type of non-humanoid creature that you can see, with the transformation lasting for 8 hours. Activating this effect doesn't change your traits or statistics, nor does it grant any of the special abilities of the creature you're imitating. It does not change your size, so a Medium creature that assumes the shape of a manticore remains Medium sized. This effect uses the same rules as the Impersonate activity of Deception. Onlookers always assume you're the chosen type of creature unless they're actively Seeking. You gain a +4 item bonus to your Deception DC against such Perception checks and add your level even if untrained.",
      "bulk": 0.1,
      "price": {
        "gp": 360
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:strand-of-the-seven-births",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XPcTty0E1jh4OIzT",
      "slug": "strand-of-the-seven-births",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f0500c2b27d61a646cd31c6e0d7314c6ca359c0ee648d56e4eebbd2ce18d4bf2",
    "translatableHash": "sha256:0d66e9cfdb73590912dacedcf500869ca8896d9dffd0755eb1322ff48775427b",
    "data": {
      "schemaVersion": 1,
      "name": "Strand of the Seven Births",
      "itemType": "equipment",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "divine",
        "invested",
        "magical"
      ],
      "description": "This strand of charms depicts the legendary harpy Ekriathe and her six reincarnated successors. Each charm can be removed and activated. When all of the charms are consumed, the strand becomes inert.\nActivate—Hero-God's Whisper 2 (auditory, interact, light)\nEffect You detach a charm, which creates a glowing ghostly image of the hero-god depicted on it. This image sheds bright light in a 20-foot radius (and dim light for the next 20 feet) for 1 hour. Allies within the image's bright light hear the constant whispers of Ekriathe or her successor's voice, and they gain a +2 status bonus to saving throws against auditory effects. Enemies entering or ending their term in the image's radius of bright light must attempt a check (will, dc:23) save. On a failure, the target is Fascinated and takes a –2 status penalty to auditory-based Perception checks while they remain in the radius. Creatures that succeed against this effect are temporarily immune for the next 24 hours.",
      "bulk": 0,
      "price": {
        "gp": 300
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aerekostes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "c4PSK2Q7ikF8jgrm",
      "slug": "aerekostes",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/falcata.webp"
    },
    "sourceHash": "sha256:8bfd8bd6c219889c672ef8fc5b57666bc35ee26ca2719c83809e2331845aeaac",
    "translatableHash": "sha256:ccf2e64446dbf10ac2bd2cfd67187696e1cd4d7a21d93aa9ee9303ee99873351",
    "data": {
      "schemaVersion": 1,
      "name": "Aerekostes",
      "itemType": "weapon",
      "level": 8,
      "rarity": "unique",
      "traits": [
        "divine",
        "fatal-d12",
        "intelligent",
        "mythic"
      ],
      "description": "Perception 1d20+16; precise vision 60 feet, imprecise hearing 60 feet\nCommunication telepathy\nSkills Arcana 1d20+18, Religion 1d20+16\nInt +6, Wis +4, Cha +3\nWill 1d20+16\nAerekostes is a +1 striking shifting falcata. Though unable to move on their own, Aerekostes can flex, adjust their center of mass, and make other adjustments to adapt to a chosen wielder's fighting style. For the purposes of proficiency, class abilities, and feats (except those that would increase the weapon's damage die size), a wielder that Aerekostes approves of can treat Aerekostes as a martial weapon that belongs to their choice of the axe, brawling, club, knife, pick, spear, or sword weapon group. Aerekostes does not actually change form and their critical specialization effect does not change. As a hero-god, Aerekostes is a mythic being who starts each session with their own pool of 3 Mythic Points. Whenever their wielder would regain 2 or more Mythic Points, Aerekostes regains 1 Mythic Point.\nActivate—Forward Planning 1 (concentrate, fortune)\nFrequency once per minute\nEffect Aerekostes studies the ongoing combat and myriad ways an upcoming attack might resolve. On the next attack made using Aerekostes before the end of their next turn, their wielder rolls twice and takes the better result.\nActivate—Spell Reserve 1 (concentrate)\nAerekostes channels their mythic power into a minor miracle. They spend 1 Mythic Point, then casts one of the following as a 3rd-rank spell (DC 24 save as appropriate): Bane, Bless, Heroism, Protection, Resist Energy, or Spiritual Armament. Aerekostes can use their actions to Sustain spells.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "advanced",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hydra-spear",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DA3hZ45tpmBuPkKZ",
      "slug": "hydra-spear",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8d8f74a5df417aa2669503b6e9d92b404d6501df70b6d1d0382aba716a5f37b8",
    "translatableHash": "sha256:9cf172aed36ad23f4352bef7479bb545a8cf2a9db7680384f00c6fada8b21bfb",
    "data": {
      "schemaVersion": 1,
      "name": "Hydra Spear",
      "itemType": "weapon",
      "level": 8,
      "rarity": "unique",
      "traits": [
        "magical",
        "reach"
      ],
      "description": "This +1 striking longspear of polished white bone features a tip of layered reptilian scales, compressed to form a sharp edge. Akki crafted this spear herself after she and her allies tangled with a hydra plaguing the marshes outside Aelyosos. She pressed the scales of the creature down into a spearpoint mostly through sheer stubbornness, granting it a unique ability.\nActivate—Hydra Swipe 2\nFrequency once per hour\nEffect The spearhead unravels and elongates into a group of snake heads. Make up to three melee Strikes with the Hydra Spear, each at a different creature within 20 feet. These attacks do not count toward your multiple attack penalty until all attacks have been resolved.",
      "bulk": 2,
      "price": {
        "gp": 465
      },
      "usage": "held-in-two-hands",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:worldscale-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EwZS3HoywMMJwnBZ",
      "slug": "worldscale-shield",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c540242c6ff35cea8c8fa773ea06a8f6f6b3b0666a20a0758fd21cda3f008f67",
    "translatableHash": "sha256:9edcc462d949e92c2f6b2499e3990b8a54dab6b776d3c170e4b2a0a7ae2ac306",
    "data": {
      "schemaVersion": 1,
      "name": "Worldscale Shield",
      "itemType": "shield",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "magical",
        "mythic"
      ],
      "description": "It's believed that four worldscale shields (Hardness 9, HP 60, BT 30) exist, each made from the scale of one of the four worldscale serpents rumored to burrow through the heart of the world. When a hero-god went to slay one of these serpents, they found that they first needed to tear a scale from the beast's body to reveal the vulnerable flesh beneath. These four scales removed became the four worldscale shields.\nActivate—Absorb Blow f\nTrigger You would take physical damage (bludgeoning, piercing, or slashing) from an attack and you have your worldscale shield Raised\nEffect Spend 1 Mythic Point. The worldscale shield completely absorbs the blow, preventing all damage that you would have taken from the attack. The worldscale shield breaks. If it was already broken, it is destroyed.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mythotoxin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i5DbxSLYu0LE52CV",
      "slug": "mythotoxin",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5282bcd79fc63eee1698716d96def2412a59fbc27279fa630fcef487dfd2fe7f",
    "translatableHash": "sha256:8185f4a5f6680d096c3f1edbe2e47e008c9def4a9a9c7c4730b1a2124e22c2dd",
    "data": {
      "schemaVersion": 1,
      "name": "Mythotoxin",
      "itemType": "consumable",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "mythic",
        "poison"
      ],
      "description": "Activate 1 (manipulate)\nMythotoxin is exceedingly difficult to produce, as it requires fresh venom from a mythic creature that must then be distilled into a more concentrated form. Mythic creatures take a –2 circumstance penalty to saves against mythotoxin.\nSaving Throw check (fortitude, dc:26)\nMaximum Duration 6 rounds\nStage 1 3d6 poison damage (1 round)\nStage 2 3d8 poison damage (1 round)\nStage 3 3d10 untyped damage and lose 1 Mythic Point, or become Doomed 1 if you have no Mythic Points to lose (1 round; doomed condition value has normal duration)",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-the-ruling-beast",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8RQDeP3MtVLELlAn",
      "slug": "staff-of-the-ruling-beast",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5a2a242e6018801300413bc5e48bcae822a80a8686d2007eb5fd4847df4aa2b",
    "translatableHash": "sha256:f7fa108582cf2e818ac06885bb2aa91404e92f87d5b4453815e45e07e73cd7ca",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Ruling Beast",
      "itemType": "weapon",
      "level": 9,
      "rarity": "unique",
      "traits": [
        "magical",
        "monk",
        "staff",
        "two-hand-d8"
      ],
      "description": "The Staff of the Ruling Beast appears as though it's made of myriad organic materials crudely woven together, from sinew and hide to bone and scales. The staff serves as a ceremonial sign of Iapholi's authority, and on rare occasions, she loans it to favored allies to speak in her name. Even then, she expects the staff will be returned at the task's conclusion, sending ferocious bounty hunters to retrieve it, if necessary.\nActivate—Overwhelming Sound 2 (auditory, manipulate)\nEffect With three sharp taps on the ground, the Staff of the Ruling Beast casts Bullhorn as a 5th-rank cantrip, affecting you so long as you hold the staff. While affected, you can make your words rumble with palpable force, allowing creatures (including those who cannot hear) to feel your speech and identify your location as if they were using an imprecise sense.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Concordant Choir\n• 1st Command, Ventriloquism\n• 2nd Blistering Invective, Calm\n• 3rd Dream Message, Enthrall\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 700
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
    "contentId": "pf2e:item:equipment-srd:preordained-spear",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FHZHhetgkhVvGiwv",
      "slug": "preordained-spear",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f1af45b754a8e9d4085d059ec11d9fffc9378e7bad47a3aa9572fe0d28952ec9",
    "translatableHash": "sha256:e6f3ae30eb41479a0c5c1213c4e875a23021996ca03a780ebbf52628ac01821f",
    "data": {
      "schemaVersion": 1,
      "name": "Preordained Spear",
      "itemType": "weapon",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "magical",
        "monk",
        "mythic",
        "thrown-20"
      ],
      "description": "This +1 striking spear seems to know when its wielder is about to die. Its wooden body bears countless carvings, leaving it thinner than most spears. While you are Doomed, a preordained spear glows with a faint red light that gives you a haunted look and sheds dim light within 5 feet.\nActivate—Delay Doom 1 (manipulate)\nRequirements Your name is not on the spear, and you have the doomed condition\nEffect Your name appears on the shaft of the preordained spear. Your doomed value decreases by 1, and you regain 1 Mythic Point. Your name fades from the spear the next time you make your daily preparations.",
      "bulk": 1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hero-killer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tdwPBrchFga79M9Q",
      "slug": "hero-killer",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:82f95cdcb802f17a807150739e31682ab497d8011139bd9f3997a506ba03cefd",
    "translatableHash": "sha256:25ed218b72a0f50403dbee55ac2ed25de50e6406011e8b216ef6316e8aafe09e",
    "data": {
      "schemaVersion": 1,
      "name": "Hero Killer",
      "itemType": "consumable",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "mythic",
        "poison"
      ],
      "description": "Activate 1 (manipulate)\nCrafted from nightshade plants that grow near sites of mythic power, this poison wreaks havoc on those with a mythic calling.\nSaving Throw check (fortitude, dc:28)\nOnset 1 round\nMaximum Duration 5 rounds\nStage 1 3d6 poison damage and lose 1 Mythic Point (1 round)\nStage 2 4d6 poison and Stupefied 1 (1 round)\nStage 3 6d6 poison damage, Stupefied 2, and lose all Mythic Points (1 round)",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shield-of-snakes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SwcWlWyN1IZPDnZ5",
      "slug": "shield-of-snakes",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1c026b5a33251444e109a66a8bb87322a1705087c83066e7b4fef3e8bc2d354a",
    "translatableHash": "sha256:8ec116497106c3cd4d4ae9da0894503404629689a73b03bd3756288de97ffd77",
    "data": {
      "schemaVersion": 1,
      "name": "Shield of Snakes",
      "itemType": "shield",
      "level": 10,
      "rarity": "unique",
      "traits": [
        "magical",
        "mythic"
      ],
      "description": "A shield of snakes (Hardness 10, HP 90, BT 45) is built to resemble a withering tangle of snakes. These serpents slither and hiss whenever you Raise the Shield.\nActivate—Snap Up r\nTrigger You roll initiative\nEffect The shield of snakes moves into position, allowing you to Raise the Shield.\nActivate—Snakebite 2 (attack)\nEffect You thrust one of the snake heads at a target, attempting a shield spikes Strike. If you spend 1 Mythic Point, you attempt this Strike at mythic proficiency. On a hit, you inflict damage normally, and then the snakes poison the target, inflicting an additional 2d6 poison damage (check (fortitude, dc:27, basic) save).",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soldiers-syrup-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qnBpdjITfJFSO7T8",
      "slug": "soldiers-syrup-greater",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d96b5c525328da67f2f0932b48787fcd7a899a34397e27aacda24fce2d4e81a7",
    "translatableHash": "sha256:6e897659b86ebf2bd2425708a79ac8e27dd0be5c102e97bd22cda7d2d59189ba",
    "data": {
      "schemaVersion": 1,
      "name": "Soldier's Syrup (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "This thick syrup sweetens potions and creates a distinctive, metallic flavor associated with the festival days in Dhuraxilis. Partygoers are fond of mixing soldier's syrup with potions to extend their release.\nActivating a dose of soldier's syrup requires you to combine it with another consumable potion that takes 1 action to activate. After swirling the mixture for a few moments, you must either imbibe the augmented potion within 1 minute, or the potion reverts to its unaugmented state. The potion's level cannot exceed that of the soldier's syrup it is mixed with, otherwise the syrup is wasted.\nWhen consumed, a soldier's syrup–augmented potion does not immediately grant its benefits to you. Instead, you can activate the potion within the next hour as a single action, which has the concentrate trait. You can have only one soldier's syrup–augmented potion consumed at a time; consuming a second one renders the first one inert. If you do not activate the potion within 1 hour, the potion spoils inside you, and you become Enfeebled 1 for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soldiers-syrup-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lgQK6qzBkEZOUr7k",
      "slug": "soldiers-syrup-major",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:217697e11c1514692ef9100c7d1972575dc9101e1b4d0290033574985beae75c",
    "translatableHash": "sha256:a1229e144d50a8ca1ca751756577a14dd35b6debd6d8c67cabd21d4d018c7702",
    "data": {
      "schemaVersion": 1,
      "name": "Soldier's Syrup (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "This thick syrup sweetens potions and creates a distinctive, metallic flavor associated with the festival days in Dhuraxilis. Partygoers are fond of mixing soldier's syrup with potions to extend their release.\nActivating a dose of soldier's syrup requires you to combine it with another consumable potion that takes 1 action to activate. After swirling the mixture for a few moments, you must either imbibe the augmented potion within 1 minute, or the potion reverts to its unaugmented state. The potion's level cannot exceed that of the soldier's syrup it is mixed with, otherwise the syrup is wasted.\nWhen consumed, a soldier's syrup–augmented potion does not immediately grant its benefits to you. Instead, you can activate the potion within the next hour as a single action, which has the concentrate trait. You can have only one soldier's syrup–augmented potion consumed at a time; consuming a second one renders the first one inert. If you do not activate the potion within 1 hour, the potion spoils inside you, and you become Enfeebled 1 for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-the-peaks-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8RMUxzQuyGA5ainJ",
      "slug": "elixir-of-the-peaks-lesser",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f504f02b335f8795f3dcd287cb97a1efac60076e317c7d01d119f4b5570a3289",
    "translatableHash": "sha256:b6b0b1bf3e89396baa63b8750f457c5edce00183b541fa25f98a13cc4c80d287",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of the Peaks (Lesser)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nWith much of New Thassilon located among the rugged heights of the Kodar Mountains, these elixirs have grown in popularity among those frequently travel the region. For 1 hour, drinking this elixir while in mountainous terrain protects you from the effects of severe cold and grants you a +1 item bonus to Athletics checks made to Climb, High Jump, or Long Jump, as well as to saving throws against the effects of high altitude.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-1st-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qEPyzpoZOygWRn09",
      "slug": "cyrusian-wand-1st-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:12dff3e13e643e13a27281585e3836e65fb3dc2e7fb998bfcae0ee10703a3ed6",
    "translatableHash": "sha256:422187ea6a0a070e505ad59fd7d4dc7b9a1ec070008f020fc9f65515ee870b2b",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (1st-Rank Spell)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
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
    "contentId": "pf2e:item:equipment-srd:sihedron-medallion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TkSY6tUfnsgd8xC7",
      "slug": "sihedron-medallion",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:29978a669ddadd2755caaec87ac6faa22c1fe04f5d5c316fe41e3988d21e02cb",
    "translatableHash": "sha256:fb6a41742946540582368fdeedf6ab2f02dee9480611e07a77a4eb9e8099792d",
    "data": {
      "schemaVersion": 1,
      "name": "Sihedron Medallion",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These amulets once served as tokens of loyalty between the runelords and their favored agents. Though they vary in appearance, they all share a common design—a leather or metallic cord attached to a metal disc inscribed with the seven-pointed star known as the Sihedron. For original Sihedron medallions created before Earthfall, a runelord of old Thassilon (not a actor with the runelord archetype) doesn't reduce the DC of any Scrying spell they cast against a creature that wears a Sihedron medallion even if they have never met the target or are unaware of the target's identity. If such a runelord successfully scries on a creature wearing an original Sihedron medallion, they can use the wearer's voice to issue messages to those in the vicinity. Sihedron medallions created in more modern times don't possess this disadvantage.\nA dead body that wears a Sihedron medallion doesn't decay, and bugs or other pests (such as maggots) are prevented from consuming the remains, but unlike the effects of Peaceful Rest, this doesn't offer any protection against undeath, nor does it have an impact on spells that require the corpse to have died within a certain amount of time.\nActivate—Bolster Flesh 2 (concentrate, manipulate)\nFrequency once per day\nEffect Your flesh is augmented with magical vitality. You gain 10 temporary Hit Points for 8 hours.\nEffect: Bolster Flesh",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sihedron-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gXxplAToptbrUS3D",
      "slug": "sihedron-ring",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f8f72cfebeee114fc0c6c6aa2a466e2c10c506e8b7b0d6efbc4eb97762f6700",
    "translatableHash": "sha256:e5efc3a52b28f5d9e61161aef2f3b474ae19d66ac2bbe97499cace9d9b7877fb",
    "data": {
      "schemaVersion": 1,
      "name": "Sihedron Ring",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Though simple in appearance, Sihedron rings are among the most treasured tokens a runelord would bestow on an agent in times past. Like the more common Sihedron medallion, Sihedron rings created by the original runelords allow for easier scrying of and speaking through those who wear them; Sihedron rings created in modern times don't have this disadvantage.\nAs long as it's invested, a Sihedron ring protects its wearer from environmental extremes, rendering them immune to severe cold and heat. The ring also grants a +1 status bonus to AC against attacks made during reactions.\nActivate—Costume Change 1 (concentrate)\nEffect You change the shape and appearance of any armor or clothing you wear to appear as ordinary or fancy clothing or armor of your imagining. The actual statistics for what you're wearing doesn't change. Only a creature that's benefiting from truesight or a similar effect can attempt to disbelieve this illusion, with a DC of 20.",
      "bulk": 0,
      "price": {
        "gp": 250
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZWroGcapvICFAQZt",
      "slug": "cyrusian-wand-2nd-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:554e2c4037cd63fbc8c860437287e0401eba00fb5694ece933ea015f1e168993",
    "translatableHash": "sha256:1499560e172bf14664ed3d6b90688a2d3ebe6e99defbcb0dc121b0a3cd420bee",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (2nd-Rank Spell)",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-the-peaks-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "h3ZAXh2w4JIhju4a",
      "slug": "elixir-of-the-peaks-moderate",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f2b092389dc5b835b58e47fe1fbce3c7e0485dbb0b56621416605405f5e32c11",
    "translatableHash": "sha256:932bc0e5d5227bdc88382c97b52ee5eb714e30c69c9f9b5751c748700e6a26d0",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of the Peaks (Moderate)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nWith much of New Thassilon located among the rugged heights of the Kodar Mountains, these elixirs have grown in popularity among those frequently travel the region. For 1 day, drinking this elixir while in mountainous terrain protects you from the effects of severe cold and grants you a +2 item bonus to Athletics checks made to Climb, High Jump, or Long Jump, as well as to saving throws against the effects of high altitude.",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "paMCEopsN26PQLXb",
      "slug": "cyrusian-wand-3rd-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f43a6ffdc78597ee14156318b2d72b24681ccae503257dcc31eb7a758a152b17",
    "translatableHash": "sha256:8ca41f262960ad566b9a62fa1c6c1d3374d6e7d355e137bc61ec349457234f05",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (3rd-Rank Spell)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sihedron-medallion-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UfzRhqqph3CtTaKT",
      "slug": "sihedron-medallion-greater",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bc2ee2f20a419dfe9a74a1c805d899979f95f75565e58130abe46bd460a2c463",
    "translatableHash": "sha256:006d88c7d48f33c5f0e71b8e5e8f2aa196f4c005cd472a2222372177c363b3fb",
    "data": {
      "schemaVersion": 1,
      "name": "Sihedron Medallion (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These amulets once served as tokens of loyalty between the runelords and their favored agents. Though they vary in appearance, they all share a common design—a leather or metallic cord attached to a metal disc inscribed with the seven-pointed star known as the Sihedron. For original Sihedron medallions created before Earthfall, a runelord of old Thassilon (not a actor with the runelord archetype) doesn't reduce the DC of any Scrying spell they cast against a creature that wears a Sihedron medallion even if they have never met the target or are unaware of the target's identity. If such a runelord successfully scries on a creature wearing an original Sihedron medallion, they can use the wearer's voice to issue messages to those in the vicinity. Sihedron medallions created in more modern times don't possess this disadvantage.\nA dead body that wears a Sihedron medallion doesn't decay, and bugs or other pests (such as maggots) are prevented from consuming the remains, but unlike the effects of Peaceful Rest, this doesn't offer any protection against undeath, nor does it have an impact on spells that require the corpse to have died within a certain amount of time.\nActivate—Bolster Flesh 2 (concentrate, manipulate)\nFrequency once per day\nEffect Your flesh is augmented with magical vitality. You gain a +1 item bonus to saving throws and 16 temporary Hit Points for 8 hours.\nEffect: Bolster Flesh",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "goPuyEiD7614ZEet",
      "slug": "cyrusian-wand-4th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7c750883129ab76056f640ecb61bc4b1bb1a4df9ae22609f7d6bd9060a1c07e7",
    "translatableHash": "sha256:22fc9621d0935205913c58e5cf1cff669e5d6083fd47d5daca5b340a8ebd4a98",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (4th-Rank Spell)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-the-peaks-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uS04H5rQ3mGny9Kl",
      "slug": "elixir-of-the-peaks-greater",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6f2050a3e2ac0394b5d4020e04917a53b4f7d434ae0b942517b9688ffa2ce4ac",
    "translatableHash": "sha256:4d858089143e91934b63e202b2908993d04149d4bb0a7f7c9f5353ef67528058",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of the Peaks (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nWith much of New Thassilon located among the rugged heights of the Kodar Mountains, these elixirs have grown in popularity among those frequently travel the region. For 1 day, drinking this elixir while in mountainous terrain protects you from the effects of severe cold and grants you a +3 item bonus to Athletics checks made to Climb, High Jump, or Long Jump, as well as to saving throws against the effects of high altitude. The elixir also protects against extreme cold.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EGvqYHkEw3k7wGL8",
      "slug": "cyrusian-wand-5th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:58190c927641ff9b3504768d618450cb126acda1cf3819750e3febc2d88557d6",
    "translatableHash": "sha256:5df0bbd53f7d91522e371e88f7a92d099fcc0d8e50a6f9cbe535915742db479c",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (5th-Rank Spell)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sihedron-ring-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RnSXwckGSwOnHz7F",
      "slug": "sihedron-ring-greater",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:53fd8c995dfb65d6bcf5ff78368c156858b50beea80a8fd2fd485eb7d812bbb7",
    "translatableHash": "sha256:c34ce93fea53e0739a5e308774112c829cf52eb8f79b12795a7de371cb5694b3",
    "data": {
      "schemaVersion": 1,
      "name": "Sihedron Ring (Greater)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Though simple in appearance, Sihedron rings are among the most treasured tokens a runelord would bestow on an agent in times past. Like the more common Sihedron medallion, Sihedron rings created by the original runelords allow for easier scrying of and speaking through those who wear them; Sihedron rings created in modern times don't have this disadvantage.\nAs long as it's invested, a Sihedron ring protects its wearer from environmental extremes, rendering them immune to severe cold and heat. The ring also grants a +2 status bonus to AC against attacks made during reactions.\nActivate—Costume Change 1 (concentrate)\nEffect You change the shape and appearance of any armor or clothing you wear to appear as ordinary or fancy clothing or armor of your imagining. The actual statistics for what you're wearing doesn't change. Only a creature that's benefiting from truesight or a similar effect can attempt to disbelieve this illusion, with a DC of 29.",
      "bulk": 0,
      "price": {
        "gp": 2000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hollow-robes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NYLdJKlM44kgqlUx",
      "slug": "hollow-robes",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5c83791414719714d0cebe22526f979baa60ef31ae3ea585166eaac0e78ecfc",
    "translatableHash": "sha256:db4f4cc06726d36eebd4ae3a8e7a0a07cb22e3ea9008ba0bfb7e23dfeaf9e4d4",
    "data": {
      "schemaVersion": 1,
      "name": "Hollow Robes",
      "itemType": "armor",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "comfort",
        "illusion",
        "invested",
        "mythic"
      ],
      "description": "These heavy cloth garments function as a set of +2 resilient explorer's clothing. They feature multiple stylish layers, voluminous sleeves, and long strings of Thassilonian runes along the hems. The robes employ potent illusion magic, sufficient to convince the wearer and any attackers that a devastating blow is nothing more than a flesh wound.\nActivate—Empty Robes 1 (concentration)\nFrequency once per hour\nEffect The wearer becomes Invisible inside the robes for one minute. Since the wearer's gear (including the robes) remain visible, they don't become Concealed, but they can't be visually identified unless the viewer can see invisible creatures. The unsettling nature of this effect grants the wearer a +2 item bonus to Intimidation checks made while the robes appear to be empty.\nActivate—Hollow Target r (concentration)\nRequirements Empty Robes is in effect\nTrigger You take persistent damage or a critical hit from a Strike\nEffect Spend 1 Mythic Point. You momentarily transform yourself into an illusory duplicate, rendering yourself \"hollow\" to the triggering damage or Strike. The damage from a critical hit Strike is reduced to 0. All persistent damage you're currently taking ends.\nActivate—Unseen Magic 1 (spellshape)\nRequirements Empty Robes is in effect\nEffect If your next action is to Cast a Spell that doesn't have the manipulate trait, that spell gains the subtle trait.\nCraft Requirements You must be a mythic arcane spellcaster capable of casting invisibility.",
      "bulk": 1,
      "price": {
        "gp": 3000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-6th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jieJqVjtvIEo9IcC",
      "slug": "cyrusian-wand-6th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:930f942ce6e3e1c21e51005bbb07f3333601c71e7e88378a9a953a96d5490dfd",
    "translatableHash": "sha256:e3fc297a60ac48e330bf1264adf72b1e9aa44377a3f9d27a9e9aff691893a47c",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (6th-Rank Spell)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:paradigm-cube",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zZwpFG8FY0Qwgz7e",
      "slug": "paradigm-cube",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:828e76c6121b49b1a49aa4f8796ef64698fbace56276c1fc3315138a0f19b6df",
    "translatableHash": "sha256:f9b937cc16244c458d33f9fb6760d8a7668a8226d66ea317e25cfca3bf52fd0e",
    "data": {
      "schemaVersion": 1,
      "name": "Paradigm Cube",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "illusion",
        "invested",
        "mythic"
      ],
      "description": "A paradigm cube is a perfect 5-inch-square cube of stone. Each side is inlaid with precious crystals of a different color: red, orange, yellow, green, blue, and indigo. When one activates a paradigm cube, one of these sides is selected—it glows with the matching color and then darkens to a shade of violet once the activation ends, indicating that the magic from that particular side of the cube has been expended for the day.\nActivate—Change Paradigm 1 (manipulate)\nFrequency six times per day (but only once per day per color)\nEffect Select one of the six colors of the cube that hasn't been activated today, then roll the cube on the ground at your feet and attempt a check (flat, dc:11). On a success, your chosen color activates as detailed below. On a failure, roll 1d6 to randomly determine which effect manifests; if the result of the roll is a color that's already been activated today, no effect occurs. The paradigm cube then immediately returns to your hand. If you spend 1 Mythic Point as part of this activation, your chosen color automatically activates without requiring a flat check, and the chosen effect's mythic enhancement unlocks. Once activated, the illusion created fills a 60-foot type:emanation from you and lasts for 1 minute. You can end the effect early by activating Change Paradigm again by tapping the currently active color.\n1—Red (emotion, mental, visual) Red is the color of anger and impatience. A crimson haze covers the area, setting everyone within the area on edge. Allies in the area gain a +2 item bonus to Intimidation checks to Coerce. Mythic Enhancement: Allies' saving throws against mental and incapacitation effects are attempted at mythic proficiency.\n2—Orange (light, visual) Orange is the color of glory and opulence. The area becomes bedecked in elegant images, glamorous decor, and spectacular displays, and becomes brightly lit. Allies in the area gain a +2 item bonus to Performance checks, and allies who Rage in the area gain an additional 3 temporary Hit Points above what they would normally gain. Mythic Enhancement: Allies' Perception checks and Diplomacy checks to Make an Impression or Request are attempted at mythic proficiency.\n3—Yellow (emotion, fear, light, mental, visual) Yellow is the color of terror and discord. The area's illumination, if any, takes on an unnerving, murky yellow tinge and becomes dim light. Allies in the area gain a +2 item bonus to Intimidation checks to Demoralize. Mythic Enhancement: Enemy creatures in the area who gain the frightened condition become Slowed 1 as long as they remain frightened, as the yellow light seems to cling to them and slow their movements to a nightmarish crawl.\n4—Green (revelation, visual) Green is the color of logic and clarity. Visible text in the area becomes softly illuminated when read. Allies in the area gain a +2 item bonus to Lore checks to Recall Knowledge. Mythic Enhancement: Attempts made by allies to counteract or disbelieve illusions or to save against confusion effects are attempted at mythic proficiency.\n5—Blue (emotion, light, mental, visual) Blue is the color of debilitating sadness and fractures in one's emotional facade. Somber light replaces the normal lighting, filling the area with dim illumination, and moods darken. Allies in the area gain a +2 item bonus to Perception checks to Sense Motive. Mythic Enhancement: An enemy in the area that fails an attack roll, saving throw, or skill check becomes Stupefied 1 from sadness until the end of their next turn (Stupefied 2 on a critical failure).\n6—Indigo (darkness, shadow) Indigo is the color of ignorance and the unknown. The area becomes cloaked in darkness, as per the darkness spell heightened to 6th rank. Allies in the area gain a +2 item bonus to Stealth checks to Hide. Mythic Enhancement: Allies' saving throws against fear, curse, or visual effects are attempted at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of attempting Crafting checks at mythic proficiency.",
      "bulk": 1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sihedron-medallion-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SBaAJjHhZfZTqbz5",
      "slug": "sihedron-medallion-major",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:99f43f1e684e1280c7cb88444eafc607d0198fb6060161206c3402fd2052aefd",
    "translatableHash": "sha256:46aa52a641afdd270bcdd974c9028d3fabe3c11aa44022645457900a87e0c251",
    "data": {
      "schemaVersion": 1,
      "name": "Sihedron Medallion (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These amulets once served as tokens of loyalty between the runelords and their favored agents. Though they vary in appearance, they all share a common design—a leather or metallic cord attached to a metal disc inscribed with the seven-pointed star known as the Sihedron. For original Sihedron medallions created before Earthfall, a runelord of old Thassilon (not a actor with the runelord archetype) doesn't reduce the DC of any Scrying spell they cast against a creature that wears a Sihedron medallion even if they have never met the target or are unaware of the target's identity. If such a runelord successfully scries on a creature wearing an original Sihedron medallion, they can use the wearer's voice to issue messages to those in the vicinity. Sihedron medallions created in more modern times don't possess this disadvantage.\nA dead body that wears a Sihedron medallion doesn't decay, and bugs or other pests (such as maggots) are prevented from consuming the remains, but unlike the effects of Peaceful Rest, this doesn't offer any protection against undeath, nor does it have an impact on spells that require the corpse to have died within a certain amount of time.\nActivate—Bolster Flesh 2 (concentrate, manipulate)\nFrequency once per day\nEffect Your flesh is augmented with magical vitality. You gain a +2 item bonus to saving throws and 25 temporary Hit Points for 8 hours.\nEffect: Bolster Flesh",
      "bulk": 0,
      "price": {
        "gp": 6500
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-the-peaks-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZF7dbHcqnnyFl7nY",
      "slug": "elixir-of-the-peaks-major",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1e48be4e6947765c58052e3cd2fb17574c7c5ea75c8b2a70379d2c052dd668e9",
    "translatableHash": "sha256:cf2639897f1aaa90648823d3fa9915ddf3a566d104b169a92b73b98b7ea19d60",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of the Peaks (Major)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nWith much of New Thassilon located among the rugged heights of the Kodar Mountains, these elixirs have grown in popularity among those frequently travel the region. For 7 days, drinking this elixir while in mountainous terrain protects you from the effects of severe cold and grants you a +3 item bonus to Athletics checks made to Climb, High Jump, or Long Jump, as well as to saving throws against the effects of high altitude. The elixir also protects against extreme cold.",
      "bulk": 0.1,
      "price": {
        "gp": 1200
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DLqIHv0gvwKx8B0O",
      "slug": "cyrusian-wand-7th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2e85b0c1a3b380dd89d6b4c45acf94f8777be9f68a8832a4b9afa67ab72c6d09",
    "translatableHash": "sha256:80e9134aefb904f52f89662414de1ca62fdd444609ba126539ffc355dbfbab81",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (7th-Rank Spell)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZblyK929eFFcIZqB",
      "slug": "cyrusian-wand-8th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:198c1c7f083d32a57f7dc399372c81ae0a3ade5a49d7a100c317a10e9ae0e947",
    "translatableHash": "sha256:f69aeafbac37ac94096893ff45d89cfeb7dce1a2d9534c821bcf60d6d71bb10e",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (8th-Rank Spell)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cyrusian-wand-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jfMBFb7xTo5OK8v8",
      "slug": "cyrusian-wand-9th-rank-spell",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5bebae097329b99ab406ce45c8e1fc48bbfe1ffdf229a20929f211bf1f7baba3",
    "translatableHash": "sha256:7e5adfbde7f519f330023f47a5bfc3385f7ee78913bc909e01f614ad47ceb04a",
    "data": {
      "schemaVersion": 1,
      "name": "Cyrusian Wand (9th-Rank Spell)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "arcane",
        "mythic",
        "wand"
      ],
      "description": "Runelord Xanderghul often crafted Cyrusian wands to bolster his access to his favorite illusion spells. All Cyrusian wands look different but equally audacious in their coloration, shape, and glittering gemstone adornments.\nA Cyrusian wand only ever contains an arcane spell with the illusion trait.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank. If you spend 1 Mythic Point as part of this activation, resolve the spell's effects at mythic proficiency.\nActivate—Presume Success r\nFrequency once per day\nTrigger You fail the check (flat, dc:10) when you overcharge the wand\nEffect You disbelieve your failure, willing the check to success. Spend 1 Mythic Point and reroll the flat check, then resolve the spell's effects at mythic proficiency.\nCraft Requirements You must be a mythic arcane spellcaster capable of supplying a casting of the spell at the listed rank.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:one-days-breath",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VdHD6t20H081MKJQ",
      "slug": "one-days-breath",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b34f3b3557a265e635296f3294ca11785fbf0f39569e82eb10290b4c31afae3",
    "translatableHash": "sha256:643400e880a06cef5ee3d46fb5b6cd3ccca2a0ce109f5fb3213c6ded557d309e",
    "data": {
      "schemaVersion": 1,
      "name": "One Day's Breath",
      "itemType": "consumable",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "air",
        "consumable",
        "magical",
        "mythic"
      ],
      "description": "This glass bottle holds breezes captured from the heart of the Plane of Air. When you inhale the bottle's contents, the air fills your lungs so completely that you no longer need to breathe, at least for a time. While the effect lasts, you also gain a status bonus against inhaled threats, such as inhaled poisons. If you spend 1 Mythic Point when you activate the day's breath, you inhale so deeply that you increase the effect's duration.\nYou don't need to breathe for 24 hours. While the effect lasts, you gain a +1 status bonus to saves against inhaled threats. If you spend 1 Mythic Point, you don't need to breathe for 7 days.",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:three-days-breath",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1INJVAVazL6p4gea",
      "slug": "three-days-breath",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8599eedba1b198330dc4a727aaed39c6191ea055bf01a39f1f4eab96b5fdd65d",
    "translatableHash": "sha256:178f31f8c68f5863fff1b52021e6a2a2e00afdd71586dc1489d3480c7a08b851",
    "data": {
      "schemaVersion": 1,
      "name": "Three Day's Breath",
      "itemType": "consumable",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "air",
        "consumable",
        "magical",
        "mythic"
      ],
      "description": "This glass bottle holds breezes captured from the heart of the Plane of Air. When you inhale the bottle's contents, the air fills your lungs so completely that you no longer need to breathe, at least for a time. While the effect lasts, you also gain a status bonus against inhaled threats, such as inhaled poisons. If you spend 1 Mythic Point when you activate the day's breath, you inhale so deeply that you increase the effect's duration.\nYou don't need to breathe for 3 days. While the effect lasts, you gain a +2 status bonus to saves against inhaled threats. If you spend 1 Mythic Point, you don't need to breathe for 30 days.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:effortless-garden",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wYYKU4iO1q9b8MDm",
      "slug": "effortless-garden",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:85bdbd25eb4215fa5e61dfc96bce33cc73c6598d397c1cae415f43ac5c0d88dd",
    "translatableHash": "sha256:76d1eaaa66709751b9f8d202cc1d2a5b1e0a9cfabbfebe27b04e8d94f32b689a",
    "data": {
      "schemaVersion": 1,
      "name": "Effortless Garden",
      "itemType": "consumable",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "mythic",
        "structure"
      ],
      "description": "Azeradni, third runelord of sloth, is said to have used solid-gold seeds to sow her legendary, self-sustaining gardens.\nActivate—Sow Garden 1 minute (concentrate, manipulate)\nEffect You place the seed on the ground in an adjacent space. Over the next minute, the seed's magic creates an elegant garden in a 40-foot-square area that includes the space where you placed the seed. As the garden grows, you choose to fill each 10-foot-square space with lawns (normal terrain), flower beds (difficult terrain), or hedgerows. Hedgerows are filled with 10-foot-tall hedges that grant standard cover and are greater difficult terrain. The garden withers after 24 hours.\nIf you place the seed on natural earth and spend 1 Mythic Point during the activation, the garden establishes itself in the area and grows indefinitely, so long as the plants receive adequate sunlight and rain. While it remains, the garden remains free of weeds and pests, with the plants never growing beyond their bounds, as if tended by a master gardener.",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "other",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:runic-skullcap",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5QE6CzD1DCnb6fLl",
      "slug": "runic-skullcap",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:29f4e03c40f62e88852d84ee4335605cbe8b92318b3b2065d163453c69269bd6",
    "translatableHash": "sha256:e8618ab7cb3cd3fc6ed3a79af7aa32e0f86b63ad89cfc4e8254f3aa6a5cdd132",
    "data": {
      "schemaVersion": 1,
      "name": "Runic Skullcap",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "divine",
        "focused",
        "invested",
        "mythic"
      ],
      "description": "This silver skullcap is etched with snake patterns and a single Sihedron rune. The skullcap grants a +2 item bonus to Arcana and Religion checks. If a check is attempted to Recall Knowledge about rune magic or Lissala, the wearer treats the results of a failure or critical failure as one degree of success better.\nActivate—Rewards of Service f (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a cleric domain spell for a domain belonging to Lissala. Lissala's domains are ambition, duty, fate, and knowledge. If you don't spend this point by the end of this turn, it is lost.\nActivate—Rewards of Rule 1 minute (concentrate)\nRequirements You have master or legendary proficiency in Arcana\nEffect Spend 1 Mythic Point when you invest the runic skullcap. Until the next time you invest the skullcap, you can also use the Focus Point granted by Rewards of Service to cast a focus spell from the runelord wizard school.\n• Envy: Cutting Eye\n• Greed: Precious Gleam\n• Sloth: Reclined Apport\n• Gluttony: All-Encompassing Hunger\n• Lust: Heart's Hook\n• Pride: Crescent Scepter\n• Wrath: Vengeful Glare",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ten-days-breath",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hl9eFPC7YoeT1lgR",
      "slug": "ten-days-breath",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:befcb7ec4efffc1eeb00d85307f408d4f520b0b2883e3d1c6469c2a4499a0e76",
    "translatableHash": "sha256:30b644fdfb26c22b3ba21d8d66694e27e8a74290c558f758af0ecceb79fd7e99",
    "data": {
      "schemaVersion": 1,
      "name": "Ten Day's Breath",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "air",
        "consumable",
        "magical",
        "mythic"
      ],
      "description": "This glass bottle holds breezes captured from the heart of the Plane of Air. When you inhale the bottle's contents, the air fills your lungs so completely that you no longer need to breathe, at least for a time. While the effect lasts, you also gain a status bonus against inhaled threats, such as inhaled poisons. If you spend 1 Mythic Point when you activate the day's breath, you inhale so deeply that you increase the effect's duration.\nYou don't need to breathe for 10 days. While the effect lasts, you gain a +3 status bonus to saves against inhaled threats. If you spend 1 Mythic Point, you don't need to breathe for 1 year.\nEffect: Ten Day's Breath",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-kardosian-fragments",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dP5OmTGy0NJl4a1D",
      "slug": "the-kardosian-fragments",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ff65e723f1fccb08fe22bd588dc5d895ffade85cc28ee833470dace536f528cc",
    "translatableHash": "sha256:8cc1defa5e001d3c956fed6ec4e15171f9788698355ef55fcfaf836a10df6673",
    "data": {
      "schemaVersion": 1,
      "name": "The Kardosian Fragments",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "arcane",
        "artifact"
      ],
      "description": "In preparation for Earthfall, Runelord Zutha bound his soul to the Gluttonous Tome—an expansive work that contained the entirety of the runelord's knowledge. To ensure the tome survived the oncoming apocalypse, Zutha divided the book into three parts: the Kardosian Codex, the Black Book, and the Bone Grimoire. Heroes used the Bone Grimoire on the risen isle of Xin 7 years ago to finally defeat Zutha, and in doing so, triggered the destruction of the three parts of the Gluttonous Tome.\nOver the centuries, copies of portions of each book have been made, but these copies lacked any of the original artifacts' powers. One such copy, though, now lies under lock and key in Korvosa's Acadamae: the Kardosian Fragments. Originally an incomplete copy of the Kardosian Codex, some time after Zutha's defeat, fragments of the destroyed original ended up the property of the Acadamae, and industrious wizardly professors painstakingly restored what they could, pasting these fragments into their incomplete copy of the book. The result is the Kardosian Fragments, a potent item that, while only a shadow of the power of the original, remains as dangerous as it is useful.\nThe Kardosian Fragments isn't a spellbook, but it does contain extensive notes on several spells that can be referenced to Learn a Spell. When used in this way, the cost of learning the spell is ignored, as the fragments themselves fulfill this need through remnants of arcane magic that still linger within. The spells that can be learned include False Vitality, Invoke Spirits, Summon Undead, Vampiric Exsanguination, and Vampiric Feast.\nIf the Kardosian Fragments are referenced as part of any attempt to Recall Knowledge on subjects associated with its contents, it grants a +3 item bonus to the skill check.\nActivate—Embrace the Void 1 (manipulate)\nFrequency once per hour\nRequirements You are not currently Drained\nEffect If your next action this round is to Cast a Spell that has the void trait and you're holding the Kardosian Fragments, you gain a number of temporary Hit Points equal to your level × 3. These temporary Hit Points last for 1 hour. When the temporary Hit Points are gone, you become Drained 1 if you aren't undead.\nEffect: The Kardosian Fragments (Temporary Hit Points)\nDestruction The text in the Kardosian Fragments fades away and the book itself becomes a nonmagical tome if an arcane spellcaster of at least 17th level and who follows the envy or lust schools of Thassilonian rune magic spends a year painstakingly refuting, redacting, and revising the contents of this book.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:beloveds-bracelets",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kbQVI1VS6yekJe86",
      "slug": "beloveds-bracelets",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b2b756d3eb2a385400bb8ed77d8e26210932a968a753c906808ed00f4c38b360",
    "translatableHash": "sha256:ed405dabf2a658b00b22357395d59f851d00f1061b3a1cd840fc86e3a9317ea7",
    "data": {
      "schemaVersion": 1,
      "name": "Beloved's Bracelets",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical",
        "mythic"
      ],
      "description": "The mightiest wizards of Eurythnia, the realm of lust, would sometimes share one of these pairs of bracelets—the silver, most often—with their closest confidantes and most trusted apprentices, while keeping the golden one for themselves.\nActivate—Grant Mythic Power 1 minute (concentrate)\nRequirements Both bracelets are invested and the silver bracelet is not already imbued with mythic power\nEffect The wearer of the golden bracelet imbues the silver bracelet with a portion of their mythic power by spending 1 Mythic Point. Until the silver bracelet is no longer imbued with mythic power, the maximum number of Mythic Points the wearer of the golden bracelet can have is reduced by 1. Whenever the wearer of the silver bracelet would attempt a skill check, they can choose to make the check at mythic proficiency. If they do, the silver bracelet loses its mythic power and the wearer of the golden bracelet is immediately aware of this, regardless of the distance between the two bracelets, even if they are on different planes of existence. If the creature who had invested in the silver bracelet dies before expending the mythic power in it, the silver bracelet immediately teleports into the possession of the wearer of the golden bracelet regardless of the distance between them, even if they are on different planes of existence.",
      "bulk": 0,
      "price": {
        "gp": 10000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chromatic-robe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ONjmHKPfUOmQt9bC",
      "slug": "chromatic-robe",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2dc599b8a5b591e2a0b0f284e512f887c06f86950721305a26cb8d58dd0d274f",
    "translatableHash": "sha256:fc8d3afe4d55672564be3f07066a859bd8ad2c1d6675fe567e41bc72dbf074ae",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Robe",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical",
        "mythic"
      ],
      "description": "The fabric of this robe is infused with ever-shifting magical energy. The robe grants resistance 5 to acid, cold, electricity, and fire damage.\nActivate—Align Energy 1 (concentrate)\nEffect Spend 1 Mythic Point. You align the robe's magical energies to provide heightened protection against a specific damage type, at the expense of all the others. Choose acid, cold, electricity, or fire. The robe grants resistance 15 to the chosen damage type but no resistance to the remaining three types. The effect lasts until the next time you make your daily preparations (at which point the robe returns to normal) or until you use this activation again.",
      "bulk": 0,
      "price": {
        "gp": 9500
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spindle-key",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GSVzDZFbnreVWGRD",
      "slug": "spindle-key",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8fd2dc0944cc4c7d3a9e6afeb00dcd1fdd1fc2391d778e92f973522537dd471d",
    "translatableHash": "sha256:5c5e81262e9add7453a38ae87aa35e8eca47e70ac49207c7493e86b1ca3b5b84",
    "data": {
      "schemaVersion": 1,
      "name": "Spindle Key",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "mythic",
        "occult"
      ],
      "description": "This foot-long, spindle-shaped puzzle box is made of otherworldly metal inlaid with a finely traced labyrinth pattern. By manipulating the key's length, the wider spindle can be caused to open, unfold, and move up and down along the shaft, often in ways that defy geometry.\nEvery spindle key is attuned to one of the prison-spires that float above the Oubliette Plains in the Dreamlands. As a 10-minute activity, a creature can solve a spindle key by attempting a check (occultism, dc:37) check. On a success, that PC can thereafter use both of the spindle key's activations. On a critical failure, the key's magic plays havoc with the creature's spatial awareness. The creature becomes Clumsy 1 for 24 hours (which can't be reduced by any means) and can't attempt to solve the spindle key again until the effect ends.\nActivate—Align Spindle 2 (concentrate, manipulate, occult)\nEffect You rotate the sections of the spindle key into an arrangement of your liking. As you do, the corresponding steel separators between floors of Liralarue's Oubliette spin to match that arrangement. If a creature is within the ten-foot-space between floors at this time, they take 10d6 bludgeoning damage (check (reflex, dc:37, basic) save) from being crushed and are then pushed into one of the adjoining rooms at random as the rotation seals it up.\nActivate—Breach 2 (concentrate, manipulate, occult)\nFrequency once per hour\nEffect You harness the key's occult geometry to bypass a lock within 30 feet. You attempt to Pick the Lock, using Occultism instead of Thievery for the check. You can spend a Mythic Point to attempt the check at mythic proficiency.",
      "bulk": 1,
      "price": {
        "gp": 14000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dream-hunters-lodge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VBCZuJMisbu0OXJK",
      "slug": "dream-hunters-lodge",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9ed77661fd2454b894c0c405cedda6114d607a503326b21efa25e6271b844cd9",
    "translatableHash": "sha256:b50c5aa86b7d16531f6599486e4d5f67aee7de34edaa4e81691048e9de6090ad",
    "data": {
      "schemaVersion": 1,
      "name": "Dream Hunter's Lodge",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "dream",
        "magical",
        "mythic",
        "structure"
      ],
      "description": "This miniature hunter's lodge fits comfortably into the palm of one's hand.\nActivate–Expand Lodge 2 (concentrate)\nFrequency once per day\nEffect You set the lodge on the ground, where it expands into a structure 40 feet long, 20 feet wide, and 20 feet high. The lodge is well-built, with a sturdy stone foundation, thick timber walls, and a peaked roof shingled with scraps of bark. The lodge's ground floor contains a dining hall on one end and a sitting area with a hearth surrounded by comfortable chairs on the other. A staircase connects the hall to the lodge's second floor, which consists of four simply furnished bedrooms. The lodge is decorated throughout with taxidermic beasts native to the Dimension of Dreams. If a creature inside the lodge spends 10 minutes studying these trophies, they gain a +3 item bonus to the next skill check they make in the next 24 hours to Recall Knowledge about any creature with the dream trait. Furnishings or decorations removed from the lodge disappear but return to their original locations inside the lodge with the next activation.\nYou can Dismiss the dream hunter's lodge to return it to its miniature form.\nActivate–Oneiric Expedition 10 minutes (concentrate)\nFrequency once per day\nRequirements The dream hunter's lodge has been expanded and you are inside\nEffect Spend 1 Mythic Point. You and all creatures inside the lodge fall into a magical slumber, and the lodge disappears from existence. After 8 hours, the lodge reappears in the Dimension of Dreams (or in the Universe, if the lodge was already in the Dimension of Dreams), as if transported there by an Interplanar Teleport spell. Upon arrival, creatures inside the lodge awaken, fully rested (but this effect does not increase the number of times per day you can do your daily preparations).",
      "bulk": 0.1,
      "price": {
        "gp": 13500
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fate-tempters-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "r3mVE6Lbkzv65A18",
      "slug": "fate-tempters-ring",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d559d06f60b8a0ec59144efb7e27910e67e807bb30d097e803745dc35e80ee58",
    "translatableHash": "sha256:54d7990b8bca2bf4e4b77449db82ac11dc963e2863d746b90a3182edcb1b1947",
    "data": {
      "schemaVersion": 1,
      "name": "Fate Tempter's Ring",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical",
        "mythic"
      ],
      "description": "When you invest this silver ring, choose a skill; you gain an item bonus to that skill equal to your doomed value.\nActivate—Tempt Fate f (concentrate)\nFrequency once per day\nTrigger Your Doomed value would decrease\nRequirements You currently have fewer than 3 Mythic Points\nEffect Your doomed value doesn't decrease. You gain 1 Mythic Point.",
      "bulk": 0,
      "price": {
        "gp": 22000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chromatic-robe-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MoL5LLA4Cuxz27h7",
      "slug": "chromatic-robe-greater",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6dfd5d76fd8474ee279eb978f8281bf5c7fd76600b1d8e9cd9a8f5fe9762c87d",
    "translatableHash": "sha256:c9adad61f45adba34d441c072fc0bd17c2f3c998648279bcd7f7f49f864360c0",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Robe (Greater)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical",
        "mythic"
      ],
      "description": "The fabric of this robe is infused with ever-shifting magical energy. The robe grants resistance 10 to acid, cold, electricity, and fire damage.\nActivate—Align Energy 1 (concentrate)\nEffect Spend 1 Mythic Point. You align the robe's magical energies to provide heightened protection against a specific damage type, at the expense of all the others. Choose acid, cold, electricity, or fire. The robe grants resistance 20 to the chosen damage type but no resistance to the remaining three types. The effect lasts until the next time you make your daily preparations (at which point the robe returns to normal) or until you use this activation again.",
      "bulk": 0,
      "price": {
        "gp": 65000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:doomsday-door",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ViQm1sR7y0hRb4N9",
      "slug": "doomsday-door",
      "publicationTitle": "Pathfinder #220: Crypt of Runes",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:446dfe76088b2f844d603255b2270714426abd21fbbfde56385693f5e6d19fe8",
    "translatableHash": "sha256:84a0ac2b46d22bfe5ee049c61678776bd387cf5ffd58e65449cb23c7016682b0",
    "data": {
      "schemaVersion": 1,
      "name": "Doomsday Door",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "artifact",
        "magical",
        "mythic"
      ],
      "description": "Each Doomsday Door varies in appearance, yet all are gargantuan wooden portals affixed into a solid anchored arch. All Doomsday Doors have two methods of activation; both of these are downtime activities, and you can't pursue other downtime or exploration activities while using either activation.\nActivate—Attune Door 1 week (concentrate, downtime)\nEffect You attune the Doomsday Door to a location associated with destruction, such as the heart of an active volcano. You must know the location exists. If it is on a different plane, a planar key must be present.\nEach day you spend Attuning, you must spend 1 Mythic Point or your doomed condition's value increases by 1. A creature assisting you with the rite can spend a Mythic Point instead, and you can avoid spending a Mythic Point by making an appropriate sacrifice, as determined by the GM.\nAfter seven days, the Doomsday Door attunes to your chosen location, then shuts. Until then, this activity can reattune to the door to a different location. You can also use this activation to negate a Doomsday Door's current attunement.\nActivate—Open Door 1 week (concentrate, downtime)\nRequirements The Doomsday Door is attuned\nEffect You perform an extended rite to open the Doomsday Door. Each day you spend performing the rite, you must spend 1 Mythic Point or your doomed condition's value increases by 1. A creature assisting you with the rite can spend a Mythic Point instead, and you can avoid spending a Mythic Point by making an appropriate sacrifice, as determined by the GM.\nAfter 7 days, the Doomsday Door opens, releasing an apocalypse related to the location to which the door is attuned. The consequences are determined by the GM but are always regional and far-reaching. A Doomsday Door attuned to the Void, for example, might release a burst of energy that causes the dead in a radius of hundreds of miles to rise from their graves.\nDestruction A Doomsday Door can be destroyed by using the Attune Door activation to attune it to a specific location of great creative potential, and then Opening the Door to let this antithesis of doom flow through the portal.",
      "bulk": 48,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:belimariuss-invidious-halberd",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "H23XWSdTgBV1UhBq",
      "slug": "belimariuss-invidious-halberd",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/halberd.webp"
    },
    "sourceHash": "sha256:661dfedcdc0fe12f94b9e53862bb0e27ebfd4799fcd9680bd36a25f9ca641766",
    "translatableHash": "sha256:1aeee7d7e90e291a85b7d193ec27e90e6e4e62203459873418b274273c49e20a",
    "data": {
      "schemaVersion": 1,
      "name": "Belimarius's Invidious Halberd",
      "itemType": "weapon",
      "level": 17,
      "rarity": "unique",
      "traits": [
        "reach",
        "versatile-s"
      ],
      "description": "Perception +29; darkvision, imprecise hearing within 60 feet\nCommunication speech (Azlanti, Elven, Thassilonian)\nSkills Arcana 1d20+33, Deception 1d20+29, Society 1d20+31\nInt +8, Wis +6, Cha +4\nWill 1d20+31\nBelimarius's Invidious Halberd is a +3 greater striking keen spell reservoir high-grade dawnsilver halberd (at this time, their spell reservoir contains Slow). As the halberd passed from the hands of one runelord of envy to the next, the halberd's self-loathing and hatred of the arcane spellcasters they were forced to serve grew. Their own limited arcane magic paled in comparison to their powerful wielders, after all, and the halberd seethed at this perceived inequality. They only grudgingly abide their wielders—runelord or otherwise—and are only truly happy when they're used to cut down those who can cast arcane spells. The halberd can use 3 actions per turn, acting on their wielder's turn, and has a reaction. These actions and reaction don't count against their wielder's.\nActivate—Absorb Arcana r (arcane, concentrate)\nTrigger The halberd damages a creature capable of casting arcane spells\nEffect The halberd attempts to absorb one of the creature's prepared arcane spells or arcane spell slots. If the creature struck fails a check (will, dc:37) save, it loses an arcane spell (or lose an unused arcane spell slot) as if it'd cast that spell. The spell or slot lost is randomly determined from the highest rank available, starting at 6th rank and working down. The halberd passes this absorbed energy on to their wielder, who becomes Quickened for 1 round and can use the extra action only to Strike with the halberd.\nActivate—Detonate Magic 2 (arcane, concentrate)\nFrequency once per day\nEffect The halberd casts Detonate Magic (DC 37).\nActivate—Manipulate Mind 2 (arcane, concentrate)\nFrequency once per hour\nEffect The halberd casts a 9th-rank Rewrite Memory (DC 37).\nActivate—Shattermind f (arcane, concentrate)\nTrigger The halberd critically hits a creature capable of casting arcane spells\nEffect The creature struck is targeted with a 9th-rank Never Mind spell (DC 37).\nDestruction Belimarius's Invidious Halberd is destroyed if it's hurled under the feet of the Oliphaunt of Jandelay while there's no current runelord of envy living in the world.",
      "bulk": 2,
      "price": {
        "gp": 2
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:robes-of-xin-edasseril",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Yzsxn8w4Uuf9awBy",
      "slug": "robes-of-xin-edasseril",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d57c4baeab489b4d6197ee4b649c833f14ca3965bc73373775dc88592d576286",
    "translatableHash": "sha256:4d3d5b8e37aa2b0e50d3e200cdd8892575d14c3d1132637dd49b62ba76825dac",
    "data": {
      "schemaVersion": 1,
      "name": "Robes of Xin-Edasseril",
      "itemType": "armor",
      "level": 19,
      "rarity": "unique",
      "traits": [
        "comfort",
        "invested",
        "magical"
      ],
      "description": "These robes, the traditional raiment of the runelord of envy, function as +3 greater resilient antimagic greater energy-resistant explorer's clothing. The energy resistance granted by these robes can be selected from acid, cold, electricity, or fire when you perform your daily preparations—without these preparations, the robes default to cold resistance. The robe's pockets function as a Retrieval Belt (Major).",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:timeflaying-blade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8MD6Fwjjgb9cMXQb",
      "slug": "timeflaying-blade",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ff570e5ad92e6ae93939ca3f2f4a2199ffd789e67f52dee36175f1f1f718b40c",
    "translatableHash": "sha256:32d0e6c2e8e305d2ba597f4174685dc55ed7b8d7c5ab354547a363bdbe21c508",
    "data": {
      "schemaVersion": 1,
      "name": "Timeflaying Blade",
      "itemType": "weapon",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "magical",
        "mythic",
        "two-hand-d12"
      ],
      "description": "Timeflaying blades are forged around shards of collapsed paradoxes. Their existence is largely an enigma. In the furthest corners of esoteric scholarship, they're mentioned in passing or simply alluded to without ever being named outright. They're associated with Stethelos, the legendary city said to lie at the heart of the Dimension of Time, though it's unclear if they were made there, were discovered there, or are bound to return there at the end of time itself.\nA timeflaying blade is a +3 greater striking greater corrosive keen quickstrike orichalcum bastard sword. Acid damage caused by a timeflaying blade appears not to be caused by liquid, but by the act of material simply eroding away into dust as if thousands of years passed in an instant (this doesn't impact a creature or object's acid immunity, resistance, or weakness, though).\nActivate—Flay Time 1 (concentrate, incapacitation, manipulate)\nFrequency once per minute\nEffect Spend 1 Mythic Point. You swing the timeflaying blade through the air as if slicing something while you attempt to sever a creature within 120 feet from time itself. The creature must attempt a check (will, dc:43) save.\nCritical Success The creature is Slowed 1 for 1 round.\nSuccess The creature is hurled 1d4 into the future. They disappear in a flash of white light, only to reappear in the same space on their initiative after the duration. If that space is occupied, the creature is shunted harmlessly aside to the closest unoccupied space.\nFailure As success, but the creature is hurled forward in time 1d4.\nCritical Failure As success, but the creature is hurled into an entirely alternate timeline. At your discretion, the creature's gear is left behind in your timeline. Whether or not the creature will ever return to your timeline depends on the GM's whim, but at the very least, it should never return within the span of a year's passing.",
      "bulk": 1,
      "price": {
        "gp": 68000
      },
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
    "contentId": "pf2e:item:equipment-srd:apocalypse-seed",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JsRaJz8Lo1FE1R0P",
      "slug": "apocalypse-seed",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ff0c97196a8b01581c24583954c1d99f5193376d2a5199b0e7a62399b5da877c",
    "translatableHash": "sha256:684dbc03d1695b4a08de8456ea770bf9ca7dd85a044ba0e90e2e1ee5f746dc0b",
    "data": {
      "schemaVersion": 1,
      "name": "Apocalypse Seed",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "magical",
        "mythic"
      ],
      "description": "When the runelord of greed Gimmel summoned and briefly controlled the Oliphaunt of Jandelay, he set into motion events he couldn't have guessed, and the aftermath of the visitation would forever change Golarion. Neither the forces of Azlant nor Thassilon could challenge the Oliphaunt once it broke free of Gimmel's control, but that doesn't mean it didn't leave behind some small part of itself—a fragment of one of its teeth that served as a sort of seed, promising an eventual apocalypse in the land's far future. It was this tooth fragment that first drew the Ashen Man's attention to Golarion so long ago.\nThe Apocalypse Seed might be but a fragment of one of the Oliphaunt's teeth, but it's still as large as a barrel. The huge chunk of ivory retains a jagged edge on the side where it broke off. Otherwise, it's unblemished and of an unsettling yellow tint in coloration. Sometimes, when caught on the edge of one's peripheral vision, the surface seems covered with writhing spiral sigils, but they fade from view if directly observed. The first time a creature touches the Apocalypse Seed, they hear phantom sounds of titanic footsteps and the far-off trumpet of annihilation, drawing inexorably closer for a few moments before the sensation fades, never to be repeated for that creature again.\nActivate—Oliphaunt's Cry 2 (concentrate, manipulate, sonic)\nEffect Spend 1 Mythic Point. You summon the echo of the Oliphaunt's trumpeting blast, creating a 120-foot type:cone of sound. Each creature in the area must attempt a check (fortitude, dc:45) save with the following effects.\nCritical Success The creature is unaffected.\nSuccess The creature takes 5d10 sonic damage and is Deafened for 1 round.\nFailure The creature takes 10d10 sonic damage, is Slowed 1 for 2 rounds, and is deafened for 2 rounds.\nCritical Failure The creature takes 20d10 sonic damage, is Slowed 2 for 2 rounds, and is deafened for 4 rounds.\nDestruction The Apocalypse Seed is destroyed if it's returned to Jandelay and thrown into the Oliphaunt's mouth. This lifts the promised apocalypse from Golarion and makes it impossible for the Oliphaunt to ever return to this world unless a new Apocalypse Seed is created and buried somewhere on Golarion.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sorshens-scintillating-garment",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TYs0oqRjEa9wBJ7N",
      "slug": "sorshens-scintillating-garment",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f714f12b1de9c9d784bea122244366a904eaaf6ebf1832e6f7311b08d72bca7c",
    "translatableHash": "sha256:ac4cc9412895833535f83eb637dd1e9c66e74f4058aa54bd7dbea3424fa4873d",
    "data": {
      "schemaVersion": 1,
      "name": "Sorshen's Scintillating Garment",
      "itemType": "armor",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "apex",
        "artifact",
        "comfort",
        "mythic"
      ],
      "description": "The traditional robes of Sorshen, Runelord of Lust, this garment combines a powerful artifact with a sign of office, as with many runelords' accoutrements. Woven of the finest silks and accented with precious stones, the garment is light and easy to move in. Sorshen created, then expanded on the artifact throughout her time as the runelord of lust, adding to it during much of the Age of Legend.\nThis ever-shifting garment of silk and gems subtly reshapes itself in response to its wearer, adopting an appearance most flattering to their form. It's a set of +3 greater resilient explorer's clothing. The garment's four pockets each function as separate Spacious Pouches (Type IV). While wearing the garment, you're immune to mental effects unless you choose otherwise. When you invest Sorshen's Scintillating Garment, you increase your Charisma modifier by 1, or increase it to +4, whichever would give you a higher value.\nActivate—Scintillating Colors 2 (arcane, aura, visual)\nFrequency once per hour\nEffect Sorshen's Scintillating Garment casts Dizzying Colors (DC 41), heightened to 10th rank, to your specifications. If you spend 1 Mythic Point as part of this activation, the spell's area changes to a 20-foot type:emanation, and you can designate any number of creatures in that area to be immune to the spell's effects, and the spell loses the incapacitation trait.\nDestruction Sorshen's Scintillating Garment is destroyed if it's immersed in the waters of a destroyed Runewell of Lust.",
      "bulk": 0.1,
      "price": {},
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:runewell-of-lust",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2gkG6hqPnSuPrdPD",
      "slug": "runewell-of-lust",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e7cbbd48b4511113b21d90bb6b39839bdaae84d6ee6ffbbc44e075d27cde3c88",
    "translatableHash": "sha256:53bfed10bebaf90658e55edbaee0e3bc9697dd1d95de2d504ff4115846872628",
    "data": {
      "schemaVersion": 1,
      "name": "Runewell of Lust",
      "itemType": "equipment",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "The Runewell of Lust is a potent artifact and was the first of its kind among the runelords. As with all runewells, the Runewell of Lust is immobile and located within a demiplane that's inexorably linked to it, but the anima focus that allows access to the demiplane and the runewell can be transported to new locations through a series of complex rites known only to Sorshen herself.\nOriginally, the Runewell of Lust could absorb soul fragments of those who served Sorshen upon their deaths, granting her an essentially limitless supply of magical power she could use to fund potent rituals or craft magical items, but she disabled this ability soon after she woke years ago and decided it was time for a change. The Runewell of Lust appears as a hot spring filled with soothing 3-foot-deep waters.\nActivate—Exit the Eye 1 (concentrate, manipulate)\nEffect By splashing the runewell's water on yourself while you stand within it, you transport yourself back to a space of your choice within 30 feet of the anima focus, which is currently located in Sorshen's atrium.\nDestruction If Sorshen is slain, the waters within the Runewell of Lust immediately become normal water, destroying the runewell in the process. The Eye of Desire is destroyed as well. Creatures not native to the Eye of Desire are immediately transported to the vicinity of the runewell's linked anima focus and become Stunned 3; any foreign objects within the Eye of Desire at the time are similarly ejected.",
      "bulk": 0.1,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sorshens-sinuous-guisarme",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yYVbgyLGfhRJaNEY",
      "slug": "sorshens-sinuous-guisarme",
      "publicationTitle": "Pathfinder #221: Into the Apocalypse Archive",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/guisarme.webp"
    },
    "sourceHash": "sha256:1ada46f30685c356c53298b28a9cc0db6b2a017805cdf8afa39504372f441eb1",
    "translatableHash": "sha256:a7fac6a60075e77d9d02f8a030cb26e0f8160a646a7d6e33613d08dc7841b090",
    "data": {
      "schemaVersion": 1,
      "name": "Sorshen's Sinuous Guisarme",
      "itemType": "weapon",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "intelligent",
        "magical",
        "mythic",
        "reach",
        "trip"
      ],
      "description": "Perception +37; precise vision 300 feet, imprecise hearing 300 feet, darkvision\nCommunication telepathy (Aklo, Azlanti, Chthonian, and Thassilonian)\nSkills Arcana 1d20+43, Occultism 1d20+38, Society 1d20+36\nInt +6, Wis +6, Cha +8\nWill 1d20+37\nSorshen's Sinuous Guisarme is a +4 mythic striking keen quickstrike shifting spell reservoir high-grade dawnsilver guisarme. The weapon's unique double-bladed design combined with her magical nature grants her the twin weapon trait. Her spell reservoir rune typically contains blindness. Her power and intelligence are derived from a magical gemstone containing 13 of Sorshen's dreams, all so outlandish or salacious that most would consider them to be nightmares—although these dreams have been transforming into less horrific visions as Sorshen's changing philosophies continue to influence her weapon. The guisarme can use 3 actions per turn, acting on her wielder's turn. These actions don't count against her wielder's.\nActivate—Arcane Shift f (concentrate)\nFrequency once per day\nTrigger You activate the guisarme's shifting rune to Shift Weapon\nEffect The guisarme transforms into a Staff of Control (Major) with 10 charges. If you spend 1 Mythic Point when you Cast a Spell from this staff and expend 10 charges, the spell is heightened to 10th rank, and its save DC and attack rolls are calculated at mythic proficiency. While in major staff of control form, none of the guisarme's weapon runes are active, nor can she Impose Will, but she remains a high-grade dawnsilver item and retains her intelligence—she can use her actions to Cast a Spell from the staff but can't spend Mythic Points to heighten spells to 10th rank. She automatically reverts to guisarme form once all her charges are expended or if you command the staff to revert to guisarme form by using Shift Weapon again.\nActivate—Impose Will 2 Cast a Spell\nFrequency once per day per spell\nEffect Sorshen's Sinuous Guisarme casts one of the following spells, heightened to 10th rank, to your specifications: Charm (DC 45), Flicker, or Subconscious Suggestion (DC 45). The guisarme can use this activation. If you use this activation and spend 1 Mythic Point, the save DC for the spell increases to DC 50.\nDestruction Sorshen's Sinuous Guisarme can be destroyed if it's hurled under the crushing feet of the Oliphaunt of Jandelay, but only if there's no current runelord of lust living in the world. Note that when Sorshen took on the mantle of ruler of New Thassilon, she abandoned her role as runelord of lust, so at this time, half of this destruction requirement is already fulfilled. Of course, a PC who decides to toss this weapon under the Oliphaunt's feet during the course of this adventure will likely disappoint—or perhaps even enrage—Queen Sorshen, who might seek retaliation in the future.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:evercursed-crystal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lfrhhbTG1nf0fNAQ",
      "slug": "evercursed-crystal",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e0ab115ea75bd03b22e3e0a1f86f878de0d2d2f5d25a5311ba97d3c92878a434",
    "translatableHash": "sha256:c988e44cd306e3b4ab9d3452ad990106fd67078105e4a8b3f879386ac81140dd",
    "data": {
      "schemaVersion": 1,
      "name": "Evercursed Crystal",
      "itemType": "equipment",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "cursed",
        "light",
        "magical"
      ],
      "description": "Most of the Everlight Crystals that once lit so much of Castle Arudora have been destroyed over the years, but those that remain have illuminated certain locations (particularly the reception halls) for hundreds of years since the curse fell—becoming cursed themselves in the process. As long as an evercursed crystal remains in a lantern, chandelier, sconce, or other mounting found in Bastardhall, it remains harmless and sheds light as an everlight crystal. As soon as a creature removes an evercursed crystal from its mounting, though, the light it exudes forever changes to a dim, unnerving red glow the same strength as a candle. A actor takes a –1 item penalty to all saving throws against curse effects while carrying an evercursed crystal, but fortunately these minor cursed items lack the ability to fuse to a actor.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulheart",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8WxFFZm6OcBCCARR",
      "slug": "soulheart",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed9942ea288a3008fd972c621a9a6f66a2fa11e86d8be938f1a2111c0c971667",
    "translatableHash": "sha256:e9d899d44e0a833bd2a4d79fd169ff69658dc07f778aeef9b3771e70640a553d",
    "data": {
      "schemaVersion": 1,
      "name": "Soulheart",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "A soulheart is a crystallized sphere of red ectoplasm about the size of a human eye. When held by a living creature, a faint red light shimmers within the crystal, pulsating in a synchronized beat with the creature's heartbeat and providing illumination equivalent to that of a candle.\nActivate—Bolster Life 2 (concentrate, manipulate)\nFrequency once per day\nEffect When held to the chest and focused upon, the soul energy within the soulheart floods outward and bolsters your life force, granting you 6 temporary Hit Points (or 3 temporary Hit Points if it's nighttime). These temporary Hit Points last for 8 hours.\nEffect: Bolster Life\nActivate—Bolster Maiserene Phantom 2 (concentrate, manipulate)\nEffect When touched to a rank 0 Maiserene phantom, the soulheart flashes with bright red light and is destroyed. As it does so, it permanently increases the targeted phantom to rank 1, and increases each PC's maximum Hit Points by 1 for as long as they remain within Bastardhall while the castle remains cursed.\nDestruction A soulheart is destroyed when it is activated to Bolster Maiserene Phantom.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:graverose-garland",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FeTIulA91s33rExI",
      "slug": "graverose-garland",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4011508a81cb3bc380b8b9e3f383c1ce1ad62c488912d508c33a30da1c793326",
    "translatableHash": "sha256:85d7d9e791136b251be5334f674c2a2c85c084fa9e35c051ed4992f13bc41b25",
    "data": {
      "schemaVersion": 1,
      "name": "Graverose Garland",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "invested"
      ],
      "description": "This long, scarf-like garment appears to be made of living vines on which a dozen black roses bloom. While the vines appear to be thorny, they lack the capability to puncture or scratch, allowing the garland to be worn comfortably as a scarf or belt. The scent of the black roses evokes faint feelings of melancholy and nostalgia to the living, but undead find the odor to be unnerving and distracting. As long as you have a graverose garland invested, it grants a +1 item bonus to Deception and Intimidation checks against undead.\nActivate—To the Grave with You! 2 (emotion, fear, manipulation, mental)\nFrequency once per day\nEffect You lift some of the garland to your lips and blow, sending the scent of the black roses outward to target an undead creature you can see within 60 feet. The targeted undead becomes filled with the conviction that it belongs in its grave, and it must attempt a check (will, dc:19, options:inflicts:off-guard,inflicts:prone,inflicts:frightened,inflicts:fleeing, traits:emotion,fear,manipulation,mental) save against the following effects.\nCritical Success The undead creature is unaffected.\nSuccess The undead creature becomes Off-Guard until the start of your next turn.\nFailure The undead creature becomes Frightened 2 and is off-guard as long as it remains frightened.\nCritical Failure As failure, but Frightened 3, and the undead is also Fleeing as long as it remains frightened. If the undead knows of a nearby empty grave, it must flee toward that grave—if it enters the grave, it drops Prone into the grave and remains prone until it is no longer frightened.",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "wornbelt",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vile-remnant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JmlPFAbjPvbhhKeu",
      "slug": "vile-remnant",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:449bfb5bec40da6060765f44d7a9997e57b98fe45db1174c1c45c1ed0724819f",
    "translatableHash": "sha256:b3f5e19540eefba31239d6c06d8bdb4238ec71e515e652255913c24e159e1cee",
    "data": {
      "schemaVersion": 1,
      "name": "Vile Remnant",
      "itemType": "equipment",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "artifact",
        "cursed",
        "occult",
        "unholy"
      ],
      "description": "",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:commanders-signet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Mi9zCb0x3M40C0kL",
      "slug": "commanders-signet",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f356fd86e8f838cc3cf00bf2617a339b44284883c3f831f2605b62e59be8fd46",
    "translatableHash": "sha256:a29cc15704bf8566062f17bebd4086e645d3bdfafc0fba4becb5b72ee5d6eabe",
    "data": {
      "schemaVersion": 1,
      "name": "Commander's Signet",
      "itemType": "equipment",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A commander’s signet is typically a silver ring emblazoned with the coat of arms or heraldry of a wealthy noble family, or the insignia of a mercenary group. A badge of office often worn by soldiers during the Shining Crusade in Ustalav, many commander’s signets bear iconography associated with Aroden, Arazni, or Iomedae, but those found in this adventure bear the heraldry of the Arudora family. The signet grants a +1 item bonus to Diplomacy checks made to Make an Impression or to Intimidation checks made to Coerce, and can be activated to bolster the morale of a nearby target.\nActivate—Bolster Bravery 2 (concentrate, manipulate, mental)\nFrequency once per day\nEffect You fill a creature you touch with bravery and heroic conviction, granting it a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks for 1 minute. The status bonus is doubled for saving throws made against fear effects.\nEffect: Commander's Signet",
      "bulk": 0,
      "price": {
        "gp": 360
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:velicarns-cursed-coin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nBSlq58UkK86jYOO",
      "slug": "velicarns-cursed-coin",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7f09e8b59d4635582de87c1dc09d7050a7e0ce223d03e3f5b8d803581e23c020",
    "translatableHash": "sha256:e3614989632bfb671fe02220de24f690b041aaf146703b266e49892edeea74dd",
    "data": {
      "schemaVersion": 1,
      "name": "Velicarn's Cursed Coin",
      "itemType": "equipment",
      "level": 7,
      "rarity": "unique",
      "traits": [
        "cursed",
        "invested",
        "occult"
      ],
      "description": "This platinum coin was minted in Caliphas in the year 4192, the same year that Velicarn, the eponymous bastard of Bastardhall, was born. While the design of coins has changed in the 500 or so years since this one was minted, anyone who is at least an expert in Society recognizes that this coin's design resembles no known Ustalavic tradition—and in fact, when the coin became cursed on that vile night in 4213, its imagery forever changed. In the present day, one side of the coin depicts a distorted image of the Arudora family crest, while the other depicts a set of monstrous eyes peering through the cracks in a crumbling wall (identifiable as the religious symbol of Charg with a Religion check to Recall Knowledge DC 25).\nThe coin feels unusually heavy for being made of platinum, and no merchant will accept it as cash as a result. Most merchants and collectors who are presented with the coin have an instinctual distaste for its strange weight and slightly greasy feel. As soon as someone carries Velicarn's cursed coin for longer than a minute, it automatically becomes invested, fuses with that person, and continues to count against that actor's invested items, even without being reinvested each day. As long as the coin is carried, sahkils prefer to target the coin's carrier with their attacks (although they are not forced to do so), often behaving as if they can smell the \"stink of the Typhon Wheel\" on them. Fortunately for a actor cursed by this item, the coin has no further debilitating effects, save for when it is activated.\nActivate—Daring or Dread 1 (manipulate)\nFrequency once per day\nEffect You r, with a 50/50 chance of getting heads (the Arudora crest) or tails (the symbol of Charg). If the result is heads, you become immune to fear effects for 1 hour. If the result is tails, you gain a –2 item penalty against fear saves for 24 hours. If it's after dark in Bastardhall when you activate Velicarn's cursed coin, you must twice check to determine if you get heads or tails, and you only get the heads result if both coin flips result in heads; otherwise, the result is tails.\nEffect: Velicarn's Cursed Coin",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poets-fritter-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QXW6txYvNIlQK0qE",
      "slug": "poets-fritter-lesser",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2b917b7bf1aa688b654877dc914748b9a93213e28e8abc1988d18e3d0f59fffd",
    "translatableHash": "sha256:872076b5e90a781f869769b332c58ca6741fda6976231e2503088240131897e4",
    "data": {
      "schemaVersion": 1,
      "name": "Poet's Fritter (Lesser)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "The flavor of the cinnamon apple pastry called a poet's fritter is more than delicious—it inspires the tongue to great acts of spoken eloquence. When eaten, a poet's fritter not only bolsters your knack at telling stories and entertaining with your voice, it also fills your thoughts with the ability to swiftly and adroitly defend your mind from unpleasant mental agonies. For 1 hour, you gain a +1 item bonus to Deception checks to Lie and to Performance checks made for vocal-based performances, and resistance 5 against mental damage.\nEffect: Poet's Fritter",
      "bulk": 0,
      "price": {
        "gp": 65
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kindler-cameo",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RLNM5W7ZtiozXtuf",
      "slug": "kindler-cameo",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6739813383664b6f4878f5f1188b43783b429882de062f63271ded53635718c6",
    "translatableHash": "sha256:6c7d502065e645a910610ef95d7e5020915f97db780eb8d2c4545ef3b8e9dbc9",
    "data": {
      "schemaVersion": 1,
      "name": "Kindler Cameo",
      "itemType": "equipment",
      "level": 7,
      "rarity": "unique",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "This small gold cameo in the shape of an oval hangs on a delicate silver chain. When opened, the cameo reveals tiny paintings of a man and a woman—Florin Kindler's parents. When the Kindler cameo is invested, the images within shift in appearance to portray the two most important people in the wearer's life.\nActivate—Recall Better Times2 (concentrate, manipulate)\nFrequency once per day\nEffect You open the cameo and regard the images within of the two most important people in your life, bolstering yourself with fond memories. You regain 3d10+12 healing Hit Points, and you gain a +2 status bonus to Will saves for 1 minute. You also immediately recover from any persistent damage you're currently taking.\nEffect: Kindler Cameo\nActivate—Sense Soulheart 1 minute (concentrate)\nFrequency once per day\nRequirements You are in Bastardhall while the castle is cursed\nEffect By clutching the closed cameo in a fist, shutting your eyes, and concentrating, the cameo's magic reaches out through Bastardhall toward the closest soulheart. At the end of a minute of concentration, you know the direction and approximate distance to a nearby soulheart (this is typically, but not always, the closest soulheart). This activation doesn't discern between soulhearts whose locations you already know about or not, and as such, Activating this power while you or a nearby ally carry a soulheart isn't particularly helpful. The cameo can't detect a soulheart that's still within a section of Bastardhall that hasn't yet been unlocked. If no soulhearts can be detected, you know this, but the activation's daily use is still consumed.",
      "bulk": 0,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:illusionists-hat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "27huDHK9waL4V3jA",
      "slug": "illusionists-hat",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:74515d5a05d9d8c466558452f69ef14846aa33d8ed726268cfff92bb831a045f",
    "translatableHash": "sha256:d7d015d4d532777866cda2dec6d54bdd871fa80c26502340ec1ba81e5338b124",
    "data": {
      "schemaVersion": 1,
      "name": "Illusionist's Hat",
      "itemType": "equipment",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "The illusionist's hat appears as a tall, black hat with a wide brim and a colorful band around its base. Although popularly associated with themes of magic, this hat is more the province of the entertainer or even the charlatan than of a proper arcanist, and many wizards scoff at those who openly wear such items. You gain a +1 item bonus to Deception checks made to Create a Diversion and to Thievery checks made to Palm an Object.\nActivate—What's In My Hat? 2 (concentrate, manipulate)\nFrequency once per day\nEffect With a flourish, you remove your hat and sweep it before you. The illusionist's hat casts a 3rd-rank Illusory Creature to your specifications, save that the creature created must be an animal. As long as you continue to hold your hat in one hand, you can Sustain this illusion as a free action. Unlike with most illusory creatures, you cannot use your actions to speak through the creature.",
      "bulk": 0,
      "price": {
        "gp": 500
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulheart-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5nNs3OFkRXH8yU1D",
      "slug": "soulheart-greater",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:083f1682b6d7aaca73ebb399c8585b7a78f2f92671fb72013645c4758423da1e",
    "translatableHash": "sha256:4d9e0b7876632cafe062b5aff5d71c50b8efe485aff01fdc9a6dad9208f2b868",
    "data": {
      "schemaVersion": 1,
      "name": "Soulheart (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "A soulheart is a crystallized sphere of red ectoplasm about the size of a human eye. When held by a living creature, a faint red light shimmers within the crystal, pulsating in a synchronized beat with the creature's heartbeat and providing illumination equivalent to that of a candle.\nActivate—Bolster Life 2 (concentrate, manipulate)\nFrequency once per day\nEffect When held to the chest and focused upon, the soul energy within the soulheart floods outward and bolsters your life force, granting you 12 temporary Hit Points (or 6 temporary Hit Points if it's nighttime). These temporary Hit Points last for 8 hours.\nEffect: Bolster Life\nActivate—Bolster Maiserene Phantom 2 (concentrate, manipulate)\nEffect When touched to a rank 1 Maiserene phantom, the soulheart flashes with bright red light and is destroyed. As it does so, it permanently increases the targeted phantom to rank 2, and increases each PC's maximum Hit Points by 2 for as long as they remain within Bastardhall while the castle remains cursed.\nDestruction A soulheart is destroyed when it is activated to Bolster Maiserene Phantom.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poets-fritter-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iWiKC10ojE0fiykT",
      "slug": "poets-fritter-moderate",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:664815bfbbaf04bc2ae1a1b1c62e901d9814c27d70bc8ede9dedf1b8f5962c78",
    "translatableHash": "sha256:697625e729cee368899570b3f9cf10e2b827bbca42ff9290c0753911434f9a23",
    "data": {
      "schemaVersion": 1,
      "name": "Poet's Fritter (Moderate)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "The flavor of the cinnamon apple pastry called a poet's fritter is more than delicious—it inspires the tongue to great acts of spoken eloquence. When eaten, a poet's fritter not only bolsters your knack at telling stories and entertaining with your voice, it also fills your thoughts with the ability to swiftly and adroitly defend your mind from unpleasant mental agonies. For 1 hour, you gain a +2 item bonus to Deception checks to Lie and to Performance checks made for vocal-based performances, and resistance 10 against mental damage.\nEffect: Poet's Fritter",
      "bulk": 0,
      "price": {
        "gp": 275
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bonebloom-rose",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "53dn4PNE8muEC8Ep",
      "slug": "bonebloom-rose",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:987737671d055f2b7be002fdfe24f068f0174802c88789d6ff9411e8cffd4eeb",
    "translatableHash": "sha256:96354f9947061d1e3634a6e3ea2bc70212f20ef35c9e7af461be8b749ee8878d",
    "data": {
      "schemaVersion": 1,
      "name": "Bonebloom Rose",
      "itemType": "consumable",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "consumable",
        "divine",
        "healing",
        "plant"
      ],
      "description": "Activate 2 (concentrate, manipulate)\nA bonebloom rose appears as a blue-petaled rose, often found growing within the ribs of a skeleton buried in a grave under Pharasma's protection. These consumable items can also be crafted as any other item. When you activate a bonebloom rose, you inhale deeply from its petals while squeezing the stem hard enough that its thorns painfully (but otherwise harmlessly) pierce your flesh. The rose then withers and crumbles to dust, and you gain 40 temporary Hit Points for 1 hour. As long as you have at least 1 of these temporary Hit Points remaining (and they haven't been replaced by temporary Hit Points from a different source), your Strikes deal an additional 2 spirit damage to undead.\nEffect: Bonebloom Rose",
      "bulk": 0,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fearcutter",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "w7usWIc20eklVVXT",
      "slug": "fearcutter",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2b9bd5731b7cd85de47f725e391adbcd202b94971406c1d1a89bf20b6853055c",
    "translatableHash": "sha256:f244d63db059d874b79c3952734a005c8f767662432381513a7413aa42338949",
    "data": {
      "schemaVersion": 1,
      "name": "Fearcutter",
      "itemType": "weapon",
      "level": 12,
      "rarity": "unique",
      "traits": [
        "versatile-p"
      ],
      "description": "In his days as an adventurer, Eragayl Arudora made a name for himself as a champion of Shelyn. Devoted to the cause of grandeur, Eragayl eschewed the typical glaive of her champions and instead focused his skills on the longsword and shield. It was his shield that gained Shelyn's blessings, but by the time he retired and began building Castle Arudora, Eragayl's sword, Fearcutter, was arguably his most legendary belonging. With this blade, he slew countless undead and fiends, including the monstrous sahkil Vormingundur, who for many years tormented a dozen small settlements along the southwest border of Varno before meeting his end on this blade's edge.\nFearcutter is a +2 striking astral vitalizing longsword that grants a +2 item bonus to saving throws against fear effects while you carry it unsheathed. When you critically hit a creature with the unholy trait with Fearcutter, the target becomes Frightened 1.\nActivate—Cut Fear 1 (divine, manipulate)\nFrequency once per round\nEffect You swing Fearcutter through the air near a frightened creature. Reduce that creature's frightened value by 1.\nActivate—Cut Cruelty 2 (divine, manipulate)\nFrequency once per day\nEffect You brandish Fearcutter forcefully, and the sword casts a 5th-rank Crisis of Faith (check (will, dc:29) save) at an unholy target in range.",
      "bulk": 1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whispering-remnant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "14kIZ6GRkAW8vZw8",
      "slug": "whispering-remnant",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c69ec5d2d1466c6abfa57c077cd75774b2775f8c57fcef8940f8ca74c1aaea4",
    "translatableHash": "sha256:4bd8ea0af24616b7367ac8c3fd40c33fe235d3af97511ad6c36868da27b50dd5",
    "data": {
      "schemaVersion": 1,
      "name": "Whispering Remnant",
      "itemType": "equipment",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "artifact",
        "cursed",
        "occult",
        "unholy"
      ],
      "description": "A whispering remnant appears as a raw, decaying mass of flesh, fur, and gristle—a teratoma consisting of warty skin, sightless eyes, a finger or a toe, tufts of bristly hair, or teeth without mouths or lips to hide them. Each whispering remnant's shape is wildly different and uniquely unsettling.\nActivate—Hear My Words 2 (concentrate, manipulate)\nFrequency once per day\nEffect The whispering remnant casts a DC 30 Enthrall spell to your specifications. Creatures that fail or critically fail to resist this spell perceive and remember the whispering remnant in your hand as something commonplace to the region, such as a farming tool, book, or fresh-baked pie, for as long as they remain enthralled. If you don't take advantage of this to subtly guide any affected creatures toward undermining their society, the whispering remnant can't be activated to Hear My Words again by you for 1 week. Additionally, the next time you sleep, you endure horrific nightmares and must succeed at a check (will, dc:23) save upon waking to avoid becoming Stupefied 1 for 24 hours (this is a mental effect).",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:generals-signet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SxyhYuj3sl4CIxwJ",
      "slug": "generals-signet",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:499ac14b0883fdd2e5e50ea2019ece4bfcd70658b98fb13df6b50ac1d5245994",
    "translatableHash": "sha256:30de26519a8baaefb41e29c52a8027f663386f42b21f800725897c7800202eaf",
    "data": {
      "schemaVersion": 1,
      "name": "General's Signet",
      "itemType": "equipment",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A general’s signet is typically a silver ring emblazoned with the coat of arms or heraldry of a wealthy noble family, or the insignia of a mercenary group. A badge of office often worn by soldiers during the Shining Crusade in Ustalav, many general’s signets bear iconography associated with Aroden, Arazni, or Iomedae, but those found in this adventure bear the heraldry of the Arudora family. The signet grants a +2 item bonus to Diplomacy checks made to Make an Impression or to Intimidation checks made to Coerce, and can be activated to bolster the morale of a nearby target.\nActivate—Bolster Bravery 2 (concentrate, manipulate, mental)\nFrequency once per day\nEffect You fill a creature you touch with bravery and heroic conviction, granting it a +2 status bonus to attack rolls, Perception checks, saving throws, and skill checks for 1 minute. The status bonus is doubled for saving throws made against fear effects.\nEffect: Commander's Signet",
      "bulk": 0,
      "price": {
        "gp": 2700
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:irrokciss-medallion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0LrDMdMNqUb9cxSV",
      "slug": "irrokciss-medallion",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5fe561efeda127003e4bc3377b1d2fcfe59d26811c3e41d9ebe3be3f4584137",
    "translatableHash": "sha256:8236166e6cf28ecd996406aa8ff13dbea885f603c950dd7b2381b9c62089c69c",
    "data": {
      "schemaVersion": 1,
      "name": "Irrokcis's Medallion",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ryhasphineas-hourglass",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3c9AEoBCXmdltdr2",
      "slug": "ryhasphineas-hourglass",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7dd7df7c1f0bcaa8f609cc4fa5c6c42a087c0c7fe0bb542590de50a664bad6c8",
    "translatableHash": "sha256:55f6f94b9ec2981f75a6292b73cd16e9af7e30e20f20c7871b78b479c65b97d6",
    "data": {
      "schemaVersion": 1,
      "name": "Ryhasphinea's Hourglass",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:jinniveres-riding-crop",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fZDL0jQQy1jQTg4c",
      "slug": "jinniveres-riding-crop",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b22d81236308e0519516a6966b876142a7d4420822859374b56b00f530c2fd47",
    "translatableHash": "sha256:fc333d497c966c481202e09c74fdb2d85296124e940f8dd5381dadf6634af8b4",
    "data": {
      "schemaVersion": 1,
      "name": "Jinnivere's Riding Crop",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dazeriens-thumbscrew",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HKSpj0db5owAuA1v",
      "slug": "dazeriens-thumbscrew",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3199963f0024c7b2aa26ea806e567aa6c48493620b5cc3f63ad57fc1460fb416",
    "translatableHash": "sha256:6f9b3122ac2ccccbe891bfb50f2acd81bfd120d13a0d665d9ff0fb2383531b3f",
    "data": {
      "schemaVersion": 1,
      "name": "Dazerien's Thumbscrew",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:raudltzs-telescope",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iPD5FDdwUmRG7Erl",
      "slug": "raudltzs-telescope",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:599fa429607e0f39689e1c7ecd151e59f0bf0d429a85cb89bfbaeea66f657e2e",
    "translatableHash": "sha256:fdb9ee22406d0cb964607c0a83b4961b2f2cbf0882540f3cb82b067f7426472f",
    "data": {
      "schemaVersion": 1,
      "name": "Raudltz's Telescope",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alisendras-fan",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kasxhW2drfCOZZq1",
      "slug": "alisendras-fan",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:efba7d64dbd1f875399b619154e780d925a5439149afa27b96bb7cb3fbe1ed79",
    "translatableHash": "sha256:26f5faad1c3cfaf4ae3ca61d760c9b29e74b897ff142ab2524bcf5b08b3facce",
    "data": {
      "schemaVersion": 1,
      "name": "Alisendra's Fan",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:augstens-cudgel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Z3yVkW6v7hzuXJa2",
      "slug": "augstens-cudgel",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fd0806f50cad668f7508879b87fa6439447db3ba0a40f09db5237324646cb5d6",
    "translatableHash": "sha256:1e7b18f54735155bf526fa95aca0d8bc5b71d27badb498cf1e31df6dbd8f7ad7",
    "data": {
      "schemaVersion": 1,
      "name": "Augsten's Cudgel",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulheart-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "05h3LWflr74iJiVg",
      "slug": "soulheart-major",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3c2686062f708ef5f5a5eecd6aef2ab5ca9e50597c240f6ed1cb21e0b0cbb736",
    "translatableHash": "sha256:851140c9ed55ccca2b61fecff6e7768897133b07e976b45183f98f8624393212",
    "data": {
      "schemaVersion": 1,
      "name": "Soulheart (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "A soulheart is a crystallized sphere of red ectoplasm about the size of a human eye. When held by a living creature, a faint red light shimmers within the crystal, pulsating in a synchronized beat with the creature's heartbeat and providing illumination equivalent to that of a candle.\nActivate—Bolster Life 2 (concentrate, manipulate)\nFrequency once per day\nEffect When held to the chest and focused upon, the soul energy within the soulheart floods outward and bolsters your life force, granting you 18 temporary Hit Points (or 9 temporary Hit Points if it's nighttime). These temporary Hit Points last for 8 hours.\nEffect: Bolster Life\nActivate—Bolster Maiserene Phantom 2 (concentrate, manipulate)\nEffect When touched to a rank 2 Maiserene phantom, the soulheart flashes with bright red light and is destroyed. As it does so, it permanently increases the targeted phantom to rank 3, and increases each PC's maximum Hit Points by 3 for as long as they remain within Bastardhall while the castle remains cursed.\nDestruction A soulheart is destroyed when it is activated to Bolster Maiserene Phantom.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poets-fritter-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CNkugF5infTbBDsF",
      "slug": "poets-fritter-greater",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a98f4f4dc919ab6bd0596eb2cd3549cd2e2d016ac0af2aa492ff65085babbf39",
    "translatableHash": "sha256:2467cbddebb5723d97d376ac751f659146750a9156321b1f45cd0eb94339df09",
    "data": {
      "schemaVersion": 1,
      "name": "Poet's Fritter (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "The flavor of the cinnamon apple pastry called a poet's fritter is more than delicious—it inspires the tongue to great acts of spoken eloquence. When eaten, a poet's fritter not only bolsters your knack at telling stories and entertaining with your voice, it also fills your thoughts with the ability to swiftly and adroitly defend your mind from unpleasant mental agonies. For 1 hour, you gain a +3 item bonus to Deception checks to Lie and to Performance checks made for vocal-based performances, and resistance 15 against mental damage.\nEffect: Poet's Fritter",
      "bulk": 0,
      "price": {
        "gp": 1200
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulheart-pure",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "klQlruwrLO0xvPjl",
      "slug": "soulheart-pure",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ddfb0ea050b47672c3fbab38c25604e7ffb51c268668df812a3825f607811d74",
    "translatableHash": "sha256:8b9b9a59d669b7ae0917c48dffd5c907ad23c626ddecc2b6093dbf7153d3146f",
    "data": {
      "schemaVersion": 1,
      "name": "Soulheart (Pure)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "A soulheart is a crystallized sphere of red ectoplasm about the size of a human eye. When held by a living creature, a faint red light shimmers within the crystal, pulsating in a synchronized beat with the creature's heartbeat and providing illumination equivalent to that of a candle.\nActivate—Restore Life 1 minute (concentrate, manipulate)\nEffect By holding a pure soulheart against the remains of a dead creature of 20th level or lower that has been dead for no more than a year and concentrating for one minute, the pure soulheart flashes with red light and is destroyed. The targeted dead creature is restored to life with 1 Hit Point, no spells prepared or spell slots available, no points in any pools or any other daily resources, and is still affected by any long-term debilitations of the old body.\nDestruction A pure soulheart is destroyed when it is activated to Restore Life.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulheart-angelic",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Y10KCgi8mOL2iAkS",
      "slug": "soulheart-angelic",
      "publicationTitle": "Pathfinder Adventure Path: Bastion of Blasphemies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:04ad31613a937092e4f0df164a1cb9f30861f60ef731da8b8c20eb2ff2555a9b",
    "translatableHash": "sha256:90df2cf263fbd16cc124b0e63d4850c4ce39eb70b32cad12b521da3635aa74d9",
    "data": {
      "schemaVersion": 1,
      "name": "Soulheart (Angelic)",
      "itemType": "equipment",
      "level": 21,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "A soulheart is a crystallized sphere of red ectoplasm about the size of a human eye. When held by a living creature, a faint red light shimmers within the crystal, pulsating in a synchronized beat with the creature's heartbeat and providing illumination equivalent to that of a candle.\nActivate—Defy Charg 1 (concentrate, manipulate)\nRequirements Pharasma's favor (earned by restoring the temple clock tower in Bastardhall), Shelyn's favor (earned by restoring the gallery in Bastardhall's reception halls), and Caydserris Arudora is defeated\nEffect By presenting the angelic soulheart to Charg at the climax of this Adventure Path, you can fully remove the Bastardhall Curse and free all of the souls trapped within!\nDestruction An angelic soulheart is destroyed when it is activated to Defy Charg.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warpriests-cascade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "g9JXE1u023zcmXxk",
      "slug": "warpriests-cascade",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:96fd66039a50db1437d1309dd2bd9c00a7123147036433e85dc97cbe56457f4c",
    "translatableHash": "sha256:336737b9529e76959c4b5afe7c306a54feb028e42d460435fc946774273f9a55",
    "data": {
      "schemaVersion": 1,
      "name": "Warpriest's Cascade",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This iron thurible—originally crafted by a Caydenite priest to disperse symbolic libations—swings from the end of an extendable shaft, allowing you to sprinkle the contents over an entire troop.\nThe thurible's container can hold a magical potion up to the item level of the warpriest's cascade, dispersing its contents over an entire troop over the course of 1 minute. However, spreading out the potion lessens its duration. Potions with a duration of 1 hour or more affect a troop for only 10 minutes, and potions with a duration of 8 hours or more affect a troop for only 1 hour. Potions with a duration less than 1 hour don't work inside of a warpriest's cascade.",
      "bulk": 0.1,
      "price": {
        "gp": 145
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:banner-of-common-cause",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PyBc9ZIKHXdwvkoO",
      "slug": "banner-of-common-cause",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:94086256099412feded8a28659a53abf6ea27726089a545fd6e1d0e980a83ca1",
    "translatableHash": "sha256:2c8cc7d7ee5982ebb24d9d37f057108c0b3bc17dbf41b1a72b30a233cb0645ce",
    "data": {
      "schemaVersion": 1,
      "name": "Banner of Common Cause",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "magical"
      ],
      "description": "Embroidered with symbols of unity, this banner inspires even the meekest warrior to step up and lead when circumstances demand.\nActivate—Pass the Banner r (fortune)\nFrequency once per day\nTrigger You're knocked Unconscious\nRequirements You're leading a troop\nEffect A member of the troop you're leading picks up and displays the banner, maintaining the troop's cohesion. When attempting its rout check due to losing its leader, the troop rolls its Will save twice and uses the better result.\nActivate—Stand Firm f (emotion, mental, visual)\nFrequency once per day\nTrigger A frightened ally begins their turn within your banner's aura\nEffect Reduce the ally's frightened condition by 1.",
      "bulk": 0.1,
      "price": {
        "gp": 350
      },
      "usage": "affixed-or-held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warmasters-baton",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gUlsLMYHZriqYyYK",
      "slug": "warmasters-baton",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dbde3b3c8dd06b2feda8a53980c57ce1fa2701db350046a4fdd6402b339d129b",
    "translatableHash": "sha256:5a6576829355da59742b3ee9bb3c3aa0d6025030938c927ed348a545ba987ae5",
    "data": {
      "schemaVersion": 1,
      "name": "Warmaster's Baton",
      "itemType": "weapon",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "magical",
        "shove"
      ],
      "description": "This double-ended silver baton functions as a mundane silver mace. Its shining surface glimmers in the light, making it easy to signal and inspire troops.\nActivate—Rally Forth f (concentrate)\nFrequency once per day\nTrigger An enemy triggers a reaction from a troop you're currently commanding, but that troop has already used its reaction this turn\nEffect The troop under your command gains a second reaction that they must immediately use against the triggering enemy.",
      "bulk": 1,
      "price": {
        "gp": 850
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warpriests-cascade-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uU0CpaUyUVnVmTab",
      "slug": "warpriests-cascade-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a6c15ef6d491e625c2af3f12466b5678536722a49e7f66d26bf11c2374f28d5",
    "translatableHash": "sha256:a8d76cfc27f0af10f65829b9b8e26e4c8c0c5ceb510c3d8c0e4eb16297d29987",
    "data": {
      "schemaVersion": 1,
      "name": "Warpriest's Cascade (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This iron thurible—originally crafted by a Caydenite priest to disperse symbolic libations—swings from the end of an extendable shaft, allowing you to sprinkle the contents over an entire troop.\nThe thurible's container can hold a magical potion up to the item level of the warpriest's cascade, dispersing its contents over an entire troop over the course of 1 minute. However, spreading out the potion lessens its duration. Potions with a duration of 1 hour or more affect a troop for only 10 minutes, and potions with a duration of 8 hours or more affect a troop for only 1 hour. Potions with a duration less than 1 hour don't work inside of a warpriest's cascade.",
      "bulk": 0.1,
      "price": {
        "gp": 900
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warpriests-cascade-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2570LATnOPLMXonm",
      "slug": "warpriests-cascade-major",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:61de05dc07c1be41cd5d8425f9608660baf34a2e0f260f352f50573c7a958529",
    "translatableHash": "sha256:359dafc6b1213144e06ecd7ee867b48d4dc3a5f6c0f40343ec1074f038aa8217",
    "data": {
      "schemaVersion": 1,
      "name": "Warpriest's Cascade (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This iron thurible—originally crafted by a Caydenite priest to disperse symbolic libations—swings from the end of an extendable shaft, allowing you to sprinkle the contents over an entire troop.\nThe thurible's container can hold a magical potion up to the item level of the warpriest's cascade, dispersing its contents over an entire troop over the course of 1 minute. However, spreading out the potion lessens its duration. Potions with a duration of 1 hour or more affect a troop for only 10 minutes, and potions with a duration of 8 hours or more affect a troop for only 1 hour. Potions with a duration less than 1 hour don't work inside of a warpriest's cascade.",
      "bulk": 0.1,
      "price": {
        "gp": 5500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warmasters-baton-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vWpchgC4NSR6Z5vd",
      "slug": "warmasters-baton-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:51ea7880d3d5d81d9efbd471847ce655e9972946efc75a7f9884601e214e93e5",
    "translatableHash": "sha256:b224cc261916dbd330af59b86a13a7871e63f78c59f24bae2da1a7c9a71d2092",
    "data": {
      "schemaVersion": 1,
      "name": "Warmaster's Baton (Greater)",
      "itemType": "weapon",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "magical",
        "shove"
      ],
      "description": "This double-ended silver baton functions as a mundane silver mace. Its shining surface glimmers in the light, making it easy to signal and inspire troops.\nActivate—Rally Forth f (concentrate)\nFrequency once per hour\nTrigger An enemy triggers a reaction from a troop you're currently commanding, but that troop has already used its reaction this turn\nEffect The troop under your command gains a second reaction that they must immediately use against the triggering enemy.",
      "bulk": 1,
      "price": {
        "gp": 8500
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-liberators-feather",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rmcgeto8lTgAQAuO",
      "slug": "golden-liberators-feather",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:114e75e1abab151cb799513d280b71ef345afa56745143a8191952248e0b22dc",
    "translatableHash": "sha256:6ca2cceb8abccbe4fde05cbf74278ba7476a5ff6d34ff7d9fa8e86f23b363360",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Liberator's Feather",
      "itemType": "consumable",
      "level": 19,
      "rarity": "rare",
      "traits": [
        "consumable",
        "divine",
        "magical",
        "talisman"
      ],
      "description": "Activate F or 1 (concentrate)\nRequirements You don't have the unholy trait.\nThis pristine feather is plucked from a mighty celestial, such as Talmandor. When you activate the talisman, you sprout feathery wings until the end of your turn, granting you a fly Speed of 50 feet and a +4 circumstance bonus to AC against reactions triggered by your movement. You then Fly. If you activate the talisman with 1 action, the wings buffet adjacent enemies either before or after you Fly, dealing 8d8 spirit damage (check (fortitude, dc:41, basic) save).",
      "bulk": 0.1,
      "price": {
        "gp": 5400
      },
      "usage": "affixed-to-armor",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:amulet-of-the-slumberer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "an9xWmkKH87Vbnkq",
      "slug": "amulet-of-the-slumberer",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8dee373d5d52879613944f23eeb6bb238f75d81f4f2a8120ecef20cbc1ae17f5",
    "translatableHash": "sha256:ac47870027c5c434ffe67206a7a025dac4c503cb674e319fdbfb34705813389f",
    "data": {
      "schemaVersion": 1,
      "name": "Amulet of the Slumberer",
      "itemType": "equipment",
      "level": 21,
      "rarity": "unique",
      "traits": [
        "artifact",
        "invested",
        "occult"
      ],
      "description": "Companion Item to The Eye of the Slumberer.\nOnly one such amulet can exist at any given time, and the artifact can grow a new one in 10 minutes if the original is destroyed. The Eye's abilities that require a saving throw use the higher of the amulet wearer's spell DC or class DC.",
      "bulk": 0.1,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-eye-of-the-slumberer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "L6HpgX8EsBWCRJ3u",
      "slug": "the-eye-of-the-slumberer",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3068f38b6bf01c2bdcf42649324509b43b7987eb140ad641439bbb0c47166a27",
    "translatableHash": "sha256:23418d0748bf907e3a65accc1232c455658863a872d1ca19a928caf79df09c69",
    "data": {
      "schemaVersion": 1,
      "name": "The Eye of the Slumberer",
      "itemType": "equipment",
      "level": 21,
      "rarity": "unique",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "The Eye of the Slumberer is an alghollthu relic resembling a tangle of barnacle-encrusted tentacles. Though the orb is too large to move easily, the artifact's owner (referred to as the bearer) can activate its powers by wearing the Amulet of the Slumberer, a companion item shaped like a barnacle-encrusted cephalopod eye; this is a worn item that has the invested and occult traits. Only one such amulet can exist at any given time, and the artifact can grow a new one in 10 minutes if the original is destroyed. The Eye's abilities that require a saving throw use the higher of the amulet wearer's spell DC or class DC.\nAs one of the alghollthus' ancient contingencies to control their servitors, the Eye absorbs thoughts—especially those of pain and anguish—storing them like a battery. On command, it can unleash the stored energy, potentially stunning whole ecosystems. Each time a creature with the aquatic, amphibious, or water trait falls asleep or otherwise passes the night within 1 mile of the Eye of the Slumberer, it dreams fitfully of the artifact; creatures that don't dream are immune to this effect. When it awakens, the creature must succeed at a check (will, dc:45) save or become friendly toward the bearer (or helpful on a critical failure) until the next time it rests; this is an emotion and mental effect. The Amulet's bearer isn't automatically aware of creatures influenced in this fashion, but they can identify such creatures on sight.\nActivate—Open the Eye 2 (manipulate, occult)\nFrequency once per day\nRequirements You are wearing the Amulet of the Slumberer and are within 100 feet of the Eye of the Slumberer\nEffect The amulet's eye opens and absorbs fears from creatures within a 20-foot type:emanation, subjecting them to nightmare as if they'd spent a night under the influence of the spell. Additionally, each creature with the dream or incorporeal trait within 500 feet of the Eye of the Slumberer takes 20d6 force damage (check (reflex, dc:45, basic) save).\nActivate—Vortex 1 (occult, water)\nRequirements You're wearing the Amulet of the Slumberer, you're within 100 feet of the Eye of the Slumberer, and the Eye is within water\nEffect The water around the Eye churns violently in a 30-foot type:emanation, becoming difficult terrain for swimming creatures that don't have the water trait. You can use this action again to Dismiss this effect.\nDestruction The Eye of the Slumberer is destroyed if it's brought to the Dreamlands and either fed to a Great Old One or encircled by joyful celebrants for 101 days, during which time none of the dancers can experiences despair.",
      "bulk": 50,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:atrophy-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ey9g17eK5KxeuOIR",
      "slug": "atrophy-bomb-lesser",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:920147d81f37ca0841aabcbf92e943d3f76fd827643ea3ca01fcc585e58626a3",
    "translatableHash": "sha256:0b4c8adc63c60e2407e2507c5adaa65b2c88547700e076aef189aa5d8b6f7e14",
    "data": {
      "schemaVersion": 1,
      "name": "Atrophy Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nAtrophy bombs contain powerful chemicals developed by Urgathoan alchemists that sap a living creature's strength and drain their energy. The bomb deals 1d4 persistent void damage and 1 void splash damage, and the target is Enfeebled 1 until the start of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:harpys-talon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rJqth4cFwWnSiCr1",
      "slug": "harpys-talon",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f6cbef8bf5bb43d899c63e721af868aca8afed112f145b5138110edbe1eace5e",
    "translatableHash": "sha256:81d9fbc1d2206d077d8eb687c502b9119705ee3ef35aa48f5af33f82ce797086",
    "data": {
      "schemaVersion": 1,
      "name": "Harpy's Talon",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You successfully Strike a creature with the affixed weapon.\nThis sharp metal claw is used to inflict additional pain upon your enemies. When you activate the harpy's talon, the weapon deals persistent bleed damage equal to the number of weapon damage dice. If the Strike was a critical success, the persistent bleed damage increases to twice the number of weapon damage dice.\nEffect: Harpy's Talon",
      "bulk": 0,
      "price": {
        "gp": 3
      },
      "usage": "affixed-to-a-slashing-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:serene-smelling-salts",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TaC5Eln00j3PMyiu",
      "slug": "serene-smelling-salts",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ba45b8107c8b679ac350942349cb3206f5ce3c9c528862576a94092903b35aed",
    "translatableHash": "sha256:9a515a0a5452d533a508fcd4c12770c21d816d5756fb90a619d52a7795570226",
    "data": {
      "schemaVersion": 1,
      "name": "Serene Smelling Salts",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nThis package of smelling salts has such a pungent stench, it can snap any creature out of a panicked state. When used on yourself or a creature within your reach, that target reduces the value of its frightened condition by 1 and becomes temporarily immune to any serene smelling salts for 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:greased-axle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5ayGokKzSBMCGJD8",
      "slug": "greased-axle",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:935938c01ff7ff7f82754608b8f414f38f8d955c12302b492cce266e9d923794",
    "translatableHash": "sha256:17b2dc2ab4d4b202c58d2b1e697e5c496f78334daf791c73cb1235f7b5af9201",
    "data": {
      "schemaVersion": 1,
      "name": "Greased Axle",
      "itemType": "consumable",
      "level": 2,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate 1 (concentrate)\nRequirements You're Grabbed or Restrained.\nWhen rogues and scoundrels find themselves in sticky situations, a greased axle is a quick way out. You attempt a check to Escape, with a +1 item bonus to your check. If you critically fail, you get a failure instead.\nEffect: Greased Axle",
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
    "contentId": "pf2e:item:equipment-srd:marvelous-miniature-swift-sparrow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AB9MZTjKQMTBXyi4",
      "slug": "marvelous-miniature-swift-sparrow",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1fa08f52a7d5a71ff2dac22e782243c62c993bfaaca053e8cd90ea1da2c90fd7",
    "translatableHash": "sha256:3e3615ac998cfa341678215ca48d6c89838da0bddee66c8c9db0ddc011f13f41",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Miniature, Swift Sparrow",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "expandable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nWhen activated, this miniature transforms into a seemingly mundane sparrow. The sparrow flies to a destination of your choice within 200 feet that you can see, then Seek in a 30-foot type:burst using your Perception modifier before returning. The sparrow then unravels into a small map of the area it perceived, including any creatures it saw. The map is rudimentary and doesn't reveal anything the sparrow failed to perceive.",
      "bulk": 0,
      "price": {
        "gp": 6
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bortled-favorite-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SN3zU6CpyN79OINk",
      "slug": "bortled-favorite-lesser",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b18ddefd3634dad54ee26734cc012067a12fd5c8b2ddc424be10c25a1643b485",
    "translatableHash": "sha256:7faf67ddf747b307949f334e685d45258ffe96c856ae62642f9c50925af2d2d3",
    "data": {
      "schemaVersion": 1,
      "name": "Bortled Favorite (Lesser)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "Activate 1 (manipulate)\nAn Isgeri specialty from Etran's Folly, this root vegetable porridge was named after the dwarf trader Bort Bargith. When you eat this porridge, you can Hustle for an additional 10 minutes during exploration. This lasts for 24 hours or until you make your next daily preparations, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 5
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whispering-wire",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VeLs0UGkFu3Ga8Cd",
      "slug": "whispering-wire",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cf1760dcef3f888e92a516132d131fbd13381ede525c9fca1ce31347fe8525b4",
    "translatableHash": "sha256:c782080bb2ab9b61f448737e1b593988733a079cb12c20fc76c8fc2db2349d38",
    "data": {
      "schemaVersion": 1,
      "name": "Whispering Wire",
      "itemType": "equipment",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This coiled cord of brightly colored wire can be twisted neatly into any shape.\nActivate—Words on the Wind 1 (concentrate)\nFrequency once per 10 minutes\nEffect You quietly mouth words to the wire, which sends them to a target with the effects of the Message cantrip.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:smugglers-padlock",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4jjhUwHiEY2v8afe",
      "slug": "smugglers-padlock",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a4b9c66ed4928a7fa35cbfa52d698bf416aa217dd0e59e6585c4dacbeac2f4e",
    "translatableHash": "sha256:610ac6f383c4924de59ed8585fc6a767657da321b87d710efdd3bccfc605dae6",
    "data": {
      "schemaVersion": 1,
      "name": "Smuggler's Padlock",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "extradimensional",
        "magical"
      ],
      "description": "Activate 1 minute (manipulate)\nThis padlock exists in a dormant state while it's closed and its associated key is in the keyhole. To activate this item, you remove the key, which causes the keyhole to become a portal to an extradimensional space. This space can hold a single object of up to 1 Bulk by pressing it against the keyhole. At any point within the next 24 hours, the key can be used to open the lock with an Interact action, which safely releases the item onto the ground in your space.\nIf the lock isn't opened within the next 24 hours, the key disintegrates, and from then on, a creature who succeeds at a check (thievery, dc:16) check can Pick the Lock open to release the item. On a critical failure, the padlock is destroyed and its contents are lost forever",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:magnetic-bola",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6dizJBq0Dqevbf3L",
      "slug": "magnetic-bola",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e0b4b6c1771066b1ba6e31bfc0fc760634defe1062da56351a358b978768b3c4",
    "translatableHash": "sha256:c8c90e7714046846e9596817555819e24a29bd54f94e9f4ff0131c5107e21d19",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Bola",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "nonlethal",
        "ranged-trip",
        "thrown"
      ],
      "description": "This heavy metallic +1 bola is a favorite tool of rebels and rabble-rousers against armored opponents. Due to its weight, it has a range increment of 15 feet. When you successfully Strike a creature made of metal or wearing metal armor with this weapon, the bola attaches to the metal and the targeted creature takes a –10-foot circumstance penalty to its Speed until it spends an Interact action to remove the bola.\nEffect: Magnetic Bola (Speed Penalty)\nActivate—Overcharge 1 (electricity, manipulate, metal)\nFrequency once per day\nEffect You overcharge the magnetic properties of the bola. You deal an extra 1d6 electricity damage with your next Strike with this weapon. On a hit, the target must also succeed at a check (reflex, dc:18) save or become Clumsy 1 round (or Clumsy 2 on a critical failure), in addition to the normal effects. If the target is wearing metal armor, they take a –2 circumstance penalty to their save.\nEffect: Magnetic Bola (Damage)\nCraft Requirements The initial raw materials must include a conductive metal.",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sling",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:unassuming-face-paint",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gxnMdbLRgWsWyVGA",
      "slug": "unassuming-face-paint",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da30657a4530fa0c227660d73897344775d6b1a387e71360daa259c7e30f83fd",
    "translatableHash": "sha256:54e6afc4e2cd403e31c85979ad71ab0423a2f9419d9e0d398dad1f7183d681ac",
    "data": {
      "schemaVersion": 1,
      "name": "Unassuming Face Paint",
      "itemType": "consumable",
      "level": 3,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 3 (manipulate)\nWhen these drab pigments are applied to your face, you appear plain and inconspicuous for 10 minutes. You gain a +2 item bonus to Stealth checks and DCs while blending into a crowd during this time. If you take a hostile action, the effects of unassuming face paint immediately end.\nEffect: Unassuming Face Paint",
      "bulk": 0.1,
      "price": {
        "gp": 16
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:atrophy-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Jgi6iWyH9ihgXC7w",
      "slug": "atrophy-bomb-moderate",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4179055d2bae79e9f6de598cb634faf6124a91a210283e35779b9572683f850b",
    "translatableHash": "sha256:c7676a403dc533d5c6d9c011b6292e21b86ef86b1ffbe7f27ce2f4a83ba52080",
    "data": {
      "schemaVersion": 1,
      "name": "Atrophy Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nAtrophy bombs contain powerful chemicals developed by Urgathoan alchemists that sap a living creature's strength and drain their energy. The bomb deals 2d4 persistent void damage and 2 void splash damage, and the target is Enfeebled 1 until the start of your next turn. You gain a +1 item bonus to attack rolls with this bomb.",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silverscrap-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QvfHp3lgIQqqiCQF",
      "slug": "silverscrap-bomb-lesser",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c39278f60ff3ab881a5e78fbf31d423cf0fb1290ed9a990a4a84620478dfd7f0",
    "translatableHash": "sha256:686e9e6e4f7627b7d064f7210e64e930b8501add457e748eb0a74f4f5db7e0b7",
    "data": {
      "schemaVersion": 1,
      "name": "Silverscrap Bomb (Lesser)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSilverscrap bombs are compact clusters of silver shards that explode upon impact, shredding everything in the vicinity. The bomb grants a +1 item bonus to attack rolls and deals 2d4 piercing damage and 2 piercing splash damage. All damage from the bomb is treated as silver for the purposes of weaknesses, resistances, and the like.",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crimson-thorn",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sAhQdzMThRXu4556",
      "slug": "crimson-thorn",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/asp-coil.webp"
    },
    "sourceHash": "sha256:c15b6509259d68214799ead6a7318b6edc3d2ee80edcb3ca1e3705d73952305b",
    "translatableHash": "sha256:21514486105dc361a848420b4d49dfa12721a24081a85a77ddd4e3426a56ca66",
    "data": {
      "schemaVersion": 1,
      "name": "Crimson Thorn",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "reach",
        "versatile-p"
      ],
      "description": "This +1 asp coil is used by many trained Sisters of the Golden Erinys. It has a deep-red hue on each segment of the blade complemented by a pitch-black pommel. Death isn't the worst outcome for someone on the receiving end of its lashes.\nActivate—Taste the Pain f (manipulate, visual)\nFrequency once per hour\nTrigger Your last action was a Strike with the crimson thorn that dealt damage to a creature\nEffect Attempt an Intimidation check to Demoralize the creature you dealt damage to with a +2 item bonus to the roll. You don't take any penalties to this check for not sharing a language.",
      "bulk": 1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:robe-of-the-erinys",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Sdb13IJJMmryDqox",
      "slug": "robe-of-the-erinys",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c27697f418b3241e36be1b37b54c32bf60ca6260f83d82708491120b42623e33",
    "translatableHash": "sha256:f4c044652fbffe44920bf09a8c4903743cfc1d24c9bb1359ae36bf99c9e0dcc8",
    "data": {
      "schemaVersion": 1,
      "name": "Robe of the Erinys",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This exquisite scarlet robe embroidered with golden depictions of fiends and their weapons is fashioned after the garb of the cloistered Sisters of the Golden Erinys. The robe's belt is embroidered to look like a snake, complete with metal fangs.\nActivate—Biting Belt 2 (concentrate, manipulate)\nFrequency once per day\nEffect You remove the robe's belt and snap it at an enemy within your reach. As you do, it briefly animates to bite that foe, dealing 2d8 poison damage with a check (fortitude, dc:18, basic, options:inflicts:sickened, traits:concentrate,manipulate) save. On a critical failure, the target is also Sickened 1.",
      "bulk": 0,
      "price": {
        "gp": 55
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thorn-of-milani-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TzGABJvUoCJVmLlE",
      "slug": "thorn-of-milani-lesser",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4ca323bee24f7203b604f497b28a8ee864663137851da2d9b8b6a28b166160cb",
    "translatableHash": "sha256:5acb604db948545ec311a7e341d2a67615b28c1823fce88edba637aad886824f",
    "data": {
      "schemaVersion": 1,
      "name": "Thorn of Milani (Lesser)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You hit a creature with the affixed weapon.\nThis pure white thorn glows bright with the spirit of justice. When you activate the thorn, you deal an additional 1d4 spirit damage with the holy trait. You then gain weakness 1 to unholy until the end of your next turn.\nEffect: Thorn of Milani (Spirit Damage)\nEffect: Thorn of Milani (Unholy Weakness)",
      "bulk": 0,
      "price": {
        "gp": 12
      },
      "usage": "affixed-to-weapon",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:platter-of-putrid-dreams",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7Dj3iXpYMA7b5p74",
      "slug": "platter-of-putrid-dreams",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:39812bc3cdded26c3d9ac11ffb014130bc4c85836984475a9c8f878c77360c2a",
    "translatableHash": "sha256:48d7a7790a077ddb2a2849da9d463da779d7c0c24a5b89b7b64c7086f0fcb2f5",
    "data": {
      "schemaVersion": 1,
      "name": "Platter of Putrid Dreams",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "divine"
      ],
      "description": "This silver platter and cloche set is intricately carved with scenes of overflowing feast tables. When you speak the command word, a dish is created for your lips and tongue alone. Anyone else who tries to eat the summoned food is compelled to immediately vomit it back up, unchewed and undigested.\nActivate—Savory Feast 10 minutes (concentrate, exploration, manipulate)\nFrequency once per week\nEffect Speaking \"savor\" as you lift the lid creates a dish you've never tasted before, whether it's the unique delicacy of a far-flung region or the forbidden flesh of a sapient creature. If you spend 10 minutes consuming the entire meal, you regain 2d6+8 healing Hit Points and gain a +2 status bonus to saving throws against being sickened for 24 hours, but if you attempt to ingest anything else in that time—including elixirs and potions—you must first succeed at a check (flat, dc:5) or the action is wasted.\nEffect: Platter of Putrid Dreams",
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
    "contentId": "pf2e:item:equipment-srd:dreamcrusher",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9QugctA7ZTeCIsx2",
      "slug": "dreamcrusher",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d57101cbb95a2298af23a40aa51e657b1cd7e6777f8b010a0945a18832f97704",
    "translatableHash": "sha256:23a6b0a652d59c33dee390528c1c2dd3a4339acad582c7c696f10ea744889dda",
    "data": {
      "schemaVersion": 1,
      "name": "Dreamcrusher",
      "itemType": "weapon",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "magical",
        "versatile-p"
      ],
      "description": "The Order of the Rack uses weapons like the dreamcrusher to crush those who dare stand in the way. This +1 longsword has additional weight at the tip of its blade for the wielder to drive home their strikes.\nActivate—Doom the Rebel 1 (concentrate, mental)\nFrequency once per 10 minutes\nRequirements Your last action was a Strike with the dreamcrusher that critically hit a creature\nEffect The creature you critically hit must attempt a check (will, dc:19, traits:mental) save. On a failure, they take a –1 status penalty to attack rolls and skill checks for 1 round (1 minute on a critical failure).\nEffect: Dreamcrusher",
      "bulk": 1,
      "price": {
        "gp": 80
      },
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
    "contentId": "pf2e:item:equipment-srd:shacklebreaker",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DdxmBp8ULtLESATE",
      "slug": "shacklebreaker",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e53cdbcee2126be6b7b1a88f21ef58e94fe982d8d6f009d8214aebe5887334b",
    "translatableHash": "sha256:2500fcd16d530ef0f6d67c95d7520a9e0bd554fde91a5ff72cfa44de00210681",
    "data": {
      "schemaVersion": 1,
      "name": "Shacklebreaker",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This bracelet has three charms depicting a dagger, a shield, and a rose. While wearing this bracelet, you gain a +1 item bonus to Thievery checks. Whenever you roll a success to free someone from manacles, it counts as two successes (three on a critical success).\nActivate—No Chains r (manipulate)\nFrequency once per day\nTrigger A creature attempts to Grapple you\nRequirements You are aware of the creature and aren't Off-Guard\nEffect The bracelet yanks your body in one direction, attempting to throw off your attacker's grip. You gain a +1 circumstance bonus to your Fortitude DC against the triggering Grapple.",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:abrogail-i-script",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GOSnin5vDXi7DX1f",
      "slug": "abrogail-i-script",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e24d4ee6957bddf0108e282abe5914d6a1641caf85893b82117b7c3a58364a3a",
    "translatableHash": "sha256:c14a6fdb35deafbf39d320247f4d885bdd3b34f5b44110d5847b0492e9259323",
    "data": {
      "schemaVersion": 1,
      "name": "Abrogail I Script",
      "itemType": "equipment",
      "level": 4,
      "rarity": "rare",
      "traits": [],
      "description": "This satirical play by Amalia Wraxton was published in 4710 ar. Its controversial content, depicting the eponymous queen as the lover of Asmodeus and a coconspirator in the death of Aroden, caused an uproar that led to violent suppression and a defiant uprising. The play has since been banned and can be found only among the secret collections of art connoisseurs. If you own a copy of this play, you can publicly perform parts of Abrogail I as a downtime activity with a successful check (performance, dc:19) check. This activity lasts four hours including setup, rehearsal, and attracting a crowd, and you can't perform this play again in this settlement for a week.\nCritical Success As success, but you gain 2 Uprising Points.\nSuccess The people are roused by your performance. You gain 1 Uprising Point.\nFailure The authorities crack down on rebellious activity, stopping you from performing in this settlement again for 1 month.\nCritical Failure As failure, but the people are intimidated and you lose 1 Uprising Point.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:devilwing-badge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hQ442kcLpkHPZ7Nk",
      "slug": "devilwing-badge",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:705494847deae83298767a250d31838e144d1afb4dc2c6ff92bcb20078188e31",
    "translatableHash": "sha256:7d3c1eb779fedd79cc69d29317fd4db2b0b56d9d58513cc841a6f04d9dbbbc65",
    "data": {
      "schemaVersion": 1,
      "name": "Devilwing Badge",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This small tearing of a devil's wing has been cleansed with holy water before being mounted onto a silver badge. The spell attack modifier of any spell cast by Activating this item is +8, and the spell DC is 18.\n• Armor You gain resistance 2 to fire and unholy.\n• Weapon After you cast a spell by Activating the devilwing badge, your Strikes with the weapon deal an additional 1d4 spirit damage until the end of your next turn.\nEffect: Devilwing Badge (Armor)\nEffect: Devilwing Badge (Weapon)\nActivate Cast a Spell\nEffect You cast Divine Lance.",
      "bulk": 0,
      "price": {
        "gp": 90
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fiendsbane-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Q3cmIfjVVNWzyR2f",
      "slug": "fiendsbane-shield",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:07a5a9ff48aba74560c62a981b2f91a2ae1a38bc292c3ed18af42755e7b7adc5",
    "translatableHash": "sha256:3b173315f9b5f5b82ee80a943646196db598b37c492e5270657a01369b806af3",
    "data": {
      "schemaVersion": 1,
      "name": "Fiendsbane Shield",
      "itemType": "shield",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "holy",
        "magical"
      ],
      "description": "This low-grade silver shield is equipped with a +1 shield boss emblazoned with the image of a beheaded fiend. Any creature with the unholy trait that wields the shield becomes Enfeebled 2 and can't recover from this condition while wielding the shield.\nActivate—Silvery Backlash f (concentrate, holy)\nFrequency once per day\nTrigger You Shield Block an attack from a creature with the unholy trait\nEffect The fiendsbane shield's Hardness increases to 10, and the symbol of the beheaded demon lashes out in silvery ribbons, dealing 3d6 slashing damage (check (reflex, dc:19, basic) save) to the creature whose attack you blocked. This damage is treated as silver for the purposes of weaknesses, resistances, and the like.\nHardness | HP | BT |\n3 | 12 | 6 |",
      "bulk": 1,
      "price": {
        "gp": 70
      },
      "usage": "",
      "category": "shield",
      "group": "fiendsbane-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bortled-favorite-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DVPP0DF0ijId1ZYO",
      "slug": "bortled-favorite-moderate",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b39cd480c88d2f57d8813f3db3f90065460334808ae4995941a2e818596d605d",
    "translatableHash": "sha256:0503429ec888fe7449a6ab0d7ab5eeca9c087b2d9f1ae9511a4a1541f878fda3",
    "data": {
      "schemaVersion": 1,
      "name": "Bortled Favorite (Moderate)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "Activate 1 (manipulate)\nAn Isgeri specialty from Etran's Folly, this root vegetable porridge was named after the dwarf trader Bort Bargith. When you eat this porridge, you can Hustle for an additional 20 minutes during exploration. This lasts for 24 hours or until you make your next daily preparations, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 25
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lazybones-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eRDtYkNm8lQHwo4g",
      "slug": "lazybones-pendant",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3a315c011457b9fff60f354fab3ec73c2d69bc3253aa7db3f348e5f390a07891",
    "translatableHash": "sha256:5fb9016df6bf514774b656f09aa98113deed80a8d33bb01808f16e43ec18334f",
    "data": {
      "schemaVersion": 1,
      "name": "Lazybones Pendant",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A lazybones pendant is a six-sided die pendant carved from the regretful bones of Work-Too-Hard Whappa, a goblin unusually industrious in life and said to be making up for a long-overdue rest in his afterlife. Depicted on the five sides of this six-sided die are representations of Whappa engaged in various acts of slothful mischief, while the remaining side is utterly blank; apparently, he's so engrossed in his indolence that even his image has forgotten to show up on that side of the die.\nWhen you wear and invest in this pendant, you gain a +1 item bonus to checks when you Follow the Expert.\nActivate—Can't Someone Else Do It? 3 (concentrate, manipulate, occult)\nFrequency once per day\nEffect You cast Phantasmal Minion, summoning an ephemeral version of yourself. When you Activate the pendant and each time you Sustain the spell, your phantasmal minion gains a reaction that can be used only to Aid an ally. It uses your skills for any skill checks and can't Aid an attack.",
      "bulk": 0,
      "price": {
        "gp": 130
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whispering-wire-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lJBKINXBmSq7njTi",
      "slug": "whispering-wire-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4eae234ffc9b9f02008a8b9c079e06f160b33737f423aaea71dde262e112b4a",
    "translatableHash": "sha256:38ab0b34b9601a74d34cc3e9fb0ef7d8b3c7bf5b91e95de0e82d1a2b39663eca",
    "data": {
      "schemaVersion": 1,
      "name": "Whispering Wire (Greater)",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This coiled cord of brightly colored wire can be twisted neatly into any shape.\nActivate—Words on the Wind 1 (concentrate)\nFrequency once per 10 minutes\nEffect You quietly mouth words to the wire, which sends them to a target with the effects of the 3rd-rank Message cantrip.",
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
    "contentId": "pf2e:item:equipment-srd:restful-salve",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M7lC4RUuPlx2I8fP",
      "slug": "restful-salve",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/toadskin-salve.webp"
    },
    "sourceHash": "sha256:94adce6574c4470828e39a27de2c9462a713f3f9f0ea877ec912a05c57afbb0f",
    "translatableHash": "sha256:6b15123d3105d2cfb5bac3d1ede02c0785e059387d5a607b5045992e8f70b9c9",
    "data": {
      "schemaVersion": 1,
      "name": "Restful Salve",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nA restful salve is a compound that can be applied to the skin to prevent undeath. If applied to a fresh corpse, the corpse doesn't decay, nor can it be transformed into an undead or otherwise controlled until the sun rises the next morning. If applied to a living creature, this salve lasts for only 1 hour due to the body's natural excretions. For that duration, the salve wards off effects that would cause undeath upon dying.",
      "bulk": 0.1,
      "price": {
        "gp": 30
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:verdant-poultice",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "U0jReHtTNpb0eH58",
      "slug": "verdant-poultice",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cab4ce435a0643bcf41173a1a29d49c875040f2b92df248ad4dba5f881a20510",
    "translatableHash": "sha256:deca082704a633c50f547c786b1858ff299c83a35528bdc461ddb31627f8202e",
    "data": {
      "schemaVersion": 1,
      "name": "Verdant Poultice",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThis poultice of herbs and dried berries found throughout Isger was invented by those fighting against Cheliax's diabolic intrusion and those warring against demons at the Worldwound. You can use a verdant poultice on a creature that's taking persistent damage from a fiend; attempt a check (nature) check with a +1 item bonus against the DC of the effect that caused the persistent damage. On a success, the persistent damage ends.",
      "bulk": 0,
      "price": {
        "gp": 27
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lifebloom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2NDH3AX5Ewu4MLT6",
      "slug": "lifebloom",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:95053e3726b991aa961ec6cd153ce442b1451e53f90fcc5e0baa297849bcc713",
    "translatableHash": "sha256:18aa574d17d61f53057219bfa587b1aa28a0bfbccd946b9a16fe0f5956b520bb",
    "data": {
      "schemaVersion": 1,
      "name": "Lifebloom",
      "itemType": "weapon",
      "level": 6,
      "rarity": "unique",
      "traits": [
        "deadly-d8",
        "forceful",
        "magical",
        "reach",
        "relic",
        "wood"
      ],
      "description": "This +1 vitalizing striking glaive is said to have been carved from a single branch of an ancient white ash tree deep in the Arthfell Forest. The grain of the weapon's blade is especially tight, giving the weapon both incredible durability and a finish that resembles silver and steel folded by a master smith.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warding-paste",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GBaUehNIPMxLS5KN",
      "slug": "warding-paste",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:70ca4239f7352c58dae7a34f7624125098cadc2ecdbe95539ef95e60fa246ee6",
    "translatableHash": "sha256:9f39a64d40b819e47a4e22eb3501f0f93893dbed4337f421dabaec2b3ede211e",
    "data": {
      "schemaVersion": 1,
      "name": "Warding Paste",
      "itemType": "consumable",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "consumable"
      ],
      "description": "Activate 3 (manipulate)\nSilver filings to ward off fiends, cold iron filings to repulse demons and fey, and powders made from garlic, peppers, and wort to repel undead creatures are combined into this gritty paste. A container of warding paste contains enough to cover one suit of armor or set of clothes. For the next hour, creatures with the unholy trait take a -1 circumstance penalty to melee attacks against the affected outfit's wearer.\nEffect: Warding Paste (Wearer)",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:imposing-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Hkjqt1Y98payfa37",
      "slug": "imposing-shield",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/steel-shield.webp"
    },
    "sourceHash": "sha256:27c407f8db0918b3bce9aada9626d3b3c39b7b0e5e1312b09fff534244b21e54",
    "translatableHash": "sha256:11b6cf7c3e0f53f03e3a9d19ca2968d85e93bd251c578bdc86a741cd99d15d4c",
    "data": {
      "schemaVersion": 1,
      "name": "Imposing Shield",
      "itemType": "shield",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A favorite of Hellknights, this steel shield is often emblazoned with the symbol of a Hellknight order and often notched with the number of times it has absorbed damage.\nActivate—Terrifying Block f (concentrate, emotion, fear, mental)\nFrequency once per 10 minutes\nTrigger You Shield Block\nEffect When a weapon strikes an imposing shield, the sigil glows with a chilling light. The creature that made the attack that triggered your Shield Block becomes Frightened 2. If the Shield Block reduced the incoming damage to 0, the creature instead becomes Frightened 3.\nHardness | HP | BT |\n6 | 36 | 18 |",
      "bulk": 1,
      "price": {
        "gp": 245
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:token-of-salt-and-earth",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OXZHwDQVxDXxEYTv",
      "slug": "token-of-salt-and-earth",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5760f9ea6c32d916b0cb2278954aa0843324d611871eaefac111d3dc27311edc",
    "translatableHash": "sha256:808867cc5903e25094b3d3452277459d94d6709ad58bcf5d939b58dc477b735f",
    "data": {
      "schemaVersion": 1,
      "name": "Token of Salt and Earth",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This charm is usually worn around the neck or hanging from a belt. It consists of a three-part hourglass with individual glass bulbs filled with sea salts, charcoal ash, and minute slivers of silver. It grants the wearer a +1 item bonus to Stealth checks to Hide and Sneak from creatures with the unholy trait.\nActivate—Hide from the Hateful 2 (illusion, manipulate, occult, subtle)\nFrequency once per day\nEffect By rotating the charm along one of its concentric rings, you become Invisible to creatures with the fiend, fey, or undead trait (your choice) for 1 minute. If you use a hostile action, you're no longer invisible after the action is completed.",
      "bulk": 0,
      "price": {
        "gp": 225
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hellhusk-shroud",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yWr6S7pytCcDlCcR",
      "slug": "hellhusk-shroud",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:98342f407be968b2ab413234187fa419be90e3f90d637926c194a0972bbda2ea",
    "translatableHash": "sha256:5a9a71f0dcce649e01cc7230a88450439a4c5e5792d8970ccec5072b0576acdc",
    "data": {
      "schemaVersion": 1,
      "name": "Hellhusk Shroud",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This hooded cloak is popular among those who must evade or surveil fiendish authorities. The grisly secrets behind this garment belies its innocuous appearance; its fabrics include threads woven from the hair, blood, and scales of various devils. When invested, a hellhusk shroud doesn't appear to radiate a magic aura to Detect Magic or similar spells unless the spells are 4th rank or higher. As long as you're wearing the cloak, you can read and speak Diabolic.\nActivate—Horned Husk 1 (illusion, manipulate, olfactory, visual)\nFrequency once per day\nEffect The cloak wraps around you, becoming a second skin that suffuses you with Hell's corrosive brimstone. Your appearance becomes that of a nondescript low-level devil, and you gain a +1 status bonus to your Deception checks when you Lie to maintain your disguise. To creatures with scent, you also smell like a devil.\nActivate—Hellish Senses 1 (concentrate, manipulate)\nFrequency once per day\nEffect You pull your hood up, allowing the remnants of fallen devils to nestle closely and whisper Hell's secrets. You gain fiendsense as an imprecise sense within 60 feet, allowing you to sense creatures with the fiend trait as a vague sense. This effect lasts for 10 minutes or until you take this action again.",
      "bulk": 0,
      "price": {
        "gp": 230
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pallid-crystal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1K8xqplmaXW9Yto3",
      "slug": "pallid-crystal",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c8cfb1a1a2fc71b3ee5b7410c461797e6f4702ffdcef45ba2b76403be1fb9740",
    "translatableHash": "sha256:b62f66fc0b0355c5d7a070b76f98a65d50a18f26b3c9dbd125684b1ba59ae111",
    "data": {
      "schemaVersion": 1,
      "name": "Pallid Crystal",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "invested"
      ],
      "description": "Requirements You're a follower of Urgathoa.\nThis finger-shaped crystal on a thin strip of leather bridges the worlds of life and undeath, shifting from a pale opaque pink when worn by a living creature to a deep translucent purple when worn by an undead creature. While wearing the necklace, rotten food and drink taste as if they were fresh and can be eaten with no ill effects. If you're healed by healing vitality effects, you gain void resistance 5, but if you're healed by void effects, you instead gain vitality resistance 5.",
      "bulk": 0,
      "price": {
        "gp": 360
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ring-of-fair-assessment",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1rOwO8kOQjpjPXKQ",
      "slug": "ring-of-fair-assessment",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:aaf802a38e3dd434898b12accdea530dae184080bf21eb4a9df5c85520a5727e",
    "translatableHash": "sha256:bdfd2a9c15f7beecc6d8ca7d5573810e6e9036369dd14d472ddde5fae5651a92",
    "data": {
      "schemaVersion": 1,
      "name": "Ring of Fair Assessment",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "While the Kalistocrats of Druma profiteer off selling weapons to both Hellbreakers and Hellknights, they also offer options suitable for intelligence and counterintelligence efforts. This white gold ring grants you a +1 item bonus to skill checks to Decipher Writing that's primarily numerical or mathematical in nature as well as to skill checks to Make an Impression and Coerce to convince others of the fairness or accuracy of your judgments.\nActivate—Fair Assessment 2 (concentrate, manipulate, mental)\nFrequency once per hour\nEffect The Prophecies of Kalistrade reveal the secrets of wealth to you; this appears as a balance sheet of numbers only you can see. Choose an area of up to 1 cubic foot within 30 feet; you can estimate the value in gold pieces of any items within this area. If you attempt to estimate the value of items worn or held by a creature, you must succeed at a Society check to Decipher Writing against their Will DC.",
      "bulk": 0,
      "price": {
        "gp": 350
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thorn-of-milani-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hkcRHApzlqRVhfEv",
      "slug": "thorn-of-milani-moderate",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7ec8bff8e18e1b3a80d9cbbb16b345c4862764f98173b2c35d7904a965d167c7",
    "translatableHash": "sha256:1c0b1bc4d5cb3cdac66548c2ef30a3f6b7e4e209c3897efa9330975a567114ff",
    "data": {
      "schemaVersion": 1,
      "name": "Thorn of Milani (Moderate)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You hit a creature with the affixed weapon.\nThis pure white thorn glows bright with the spirit of justice. When you activate the thorn, you deal an additional 2d4 spirit damage with the holy trait.\nEffect: Thorn of Milani (Spirit Damage)",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "affixed-to-weapon",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reapers-sigh",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HofVPZ0eimPVK9jb",
      "slug": "reapers-sigh",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/scythe.webp"
    },
    "sourceHash": "sha256:a756122279b43b91a35b25e706e70a5404bba254a878dd19e2385b6f8d7288a9",
    "translatableHash": "sha256:b46c5e3371fe31d478e07f19fe2356ff51e1bb535a67f5d28c3303992bb260a9",
    "data": {
      "schemaVersion": 1,
      "name": "Reaper's Sigh",
      "itemType": "weapon",
      "level": 7,
      "rarity": "unique",
      "traits": [
        "deadly-d10",
        "magical",
        "relic",
        "trip",
        "wood"
      ],
      "description": "This +1 wounding striking scythe is a weapon of intricately embellished blackened metals and polished surfaces. It was originally intended to venerate Urgathoa in her role as the herald of autumn in pre-Taldor Isger but has recently found more malevolent meaning. With the scythe in her hands, Urgathoa was said to cull the harvest for feast to usher in the cold, bleak winters. As Urgathoa's legends took a darker tone, the scythe's own legend was reclaimed to venerate Erastil and Pharasma as part of the holiday for which it now claims a name.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:martyrs-shield-hellbreakers",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "stlTN5eb1qRJMHgB",
      "slug": "martyrs-shield-hellbreakers",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/steel-shield.webp"
    },
    "sourceHash": "sha256:df8a24772a514881c0e67854cd563233e5b47c3b9c220e240199604dafeef30e",
    "translatableHash": "sha256:31a6378b61d6de9dc81d2f13b0640d1d260e2ca61798f0d97975dc74ae4c6a6a",
    "data": {
      "schemaVersion": 1,
      "name": "Martyr's Shield (Hellbreakers)",
      "itemType": "shield",
      "level": 7,
      "rarity": "uncommon",
      "traits": [],
      "description": "This silvery minor reinforcing steel shield bears the image of two soldiers standing side-by-side.\nActivate—Self Sacrifice r (manipulate)\nFrequency once per minute\nTrigger An ally within 20 feet of you would take physical damage\nRequirements The martyr's shield is raised\nEffect When you activate this shield, it magically imposes itself in front of the triggering ally and takes the damage for them with the effects of Shield Block. Any damage that isn't prevented by the shield is transferred onto you.\nHardness | HP | BT |\n8 | 64 | 32 |",
      "bulk": 1,
      "price": {
        "gp": 360
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:devilwing-badge-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "G6njXf4pRdYsE7E7",
      "slug": "devilwing-badge-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6d6223f25079bd79c73eca402a92378efc5595f9d87de17a9b4ea36a71dbe502",
    "translatableHash": "sha256:5c3d27f6e8379b308222a8b1ae2891ae5430c3c43d38ba300898582a68a2e675",
    "data": {
      "schemaVersion": 1,
      "name": "Devilwing Badge (Greater)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This small tearing of a devil's wing has been cleansed with holy water before being mounted onto a silver badge. The spell attack modifier of any spell cast by Activating this item is +14, and the spell DC is 24.\n• Armor You gain resistance 5 to fire and unholy.\n• Weapon After you cast a spell by Activating the devilwing badge, your Strikes with the weapon deal an additional 1d6 spirit damage until the end of your next turn.\nEffect: Devilwing Badge (Armor)\nEffect: Devilwing Badge (Weapon)\nActivate Cast a Spell\nEffect You cast Divine Lance.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Crisis of Faith.",
      "bulk": 0,
      "price": {
        "gp": 425
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:impelling-symbol",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KMuzxjJehmJgoQ7h",
      "slug": "impelling-symbol",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ac9ed74f73016dc8ac12643f27eeb0e768a1f1fb88b19fa07a762d8bd22c164a",
    "translatableHash": "sha256:8bc37e3617c3820bbd94d5559dce2ae4911f060a9e0a0b0fff3ac58622f26570",
    "data": {
      "schemaVersion": 1,
      "name": "Impelling Symbol",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "vitality"
      ],
      "description": "Activate F (concentrate)\nTrigger You Cast a Spell that restores Hit Points to another creature.\nThis simple religious symbol bolsters you when you help others. When you activate it, you gain a number of temporary Hit Points equal to your level plus the rank of the spell you cast. These temporary Hit Points last for 1 minute.\nEffect: Impelling Symbol",
      "bulk": 0,
      "price": {
        "gp": 75
      },
      "usage": "applied-to-armor",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:robe-of-the-erinys-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PtlGktLAPSkBOlzJ",
      "slug": "robe-of-the-erinys-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:72b8dfd13147a4b0b404930ab9c27265b61e300b14ed5a6f2bfedc2589d332c6",
    "translatableHash": "sha256:a94a8ebbe9032cdb0c74108e7e1899f4225ee10066fbbd35a4076662967b8713",
    "data": {
      "schemaVersion": 1,
      "name": "Robe of the Erinys (Greater)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This exquisite scarlet robe embroidered with golden depictions of fiends and their weapons is fashioned after the garb of the cloistered Sisters of the Golden Erinys. The robe's belt is embroidered to look like a snake, complete with metal fangs.\nActivate—Biting Belt 2 (concentrate, manipulate)\nFrequency once per day\nEffect You remove the robe's belt and snap it at an enemy within your reach. As you do, it briefly animates to bite that foe, dealing 4d8 poison damage with a basic check (fortitude, dc:24) save. On a critical failure, the target is also Sickened 1.",
      "bulk": 0,
      "price": {
        "gp": 475
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:calamity",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YqhEmz8dmf02b99u",
      "slug": "calamity",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e258521d13def34a498229f30cf6c2ed55250ad2968a886315c300111b9115d3",
    "translatableHash": "sha256:43c9147d202a4a84e7c155451c71b1818e8a7ccf4adea699a9680c53ec2c00d6",
    "data": {
      "schemaVersion": 1,
      "name": "Calamity",
      "itemType": "weapon",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "versatile-p"
      ],
      "description": "Hewn from a solid block of ensorcelled stone, this +1 striking greatsword is monumental in heft as well as destructive force. The weapon is named for the disbelieving leaders of the Seventh Army of Exploration, who denied the power of such a weapon and claimed their losses came from natural disasters. When wielded against creatures that are larger than you, the sword gains the sweep trait.\nActivate—Shatter Legions 2 (earth)\nFrequency once per day\nEffect You smash the sword down upon the ground with the anger of a conquered land and a subjugated people. Each creature in a 30-foot type:cone takes 4d12 piercing damage with a check (reflex, dc:24, basic, traits:earth, options:area-damage) save as the earth shatters beneath their feet. Until the beginning of your next turn, you gain the benefits of standard cover from the broken soil around you.",
      "bulk": 2,
      "price": {
        "gp": 500
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d12",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shacklebreaker-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0BpLj6rmLsC8LMbd",
      "slug": "shacklebreaker-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:01e707302e7cebbbf5a337020df460d0e23424ef56e9e00b81fa919d94fff6e6",
    "translatableHash": "sha256:61c348015e32d9414d6b92cf9486b650fc29c6d070a3a8ab4ffccf202bcbce87",
    "data": {
      "schemaVersion": 1,
      "name": "Shacklebreaker (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This bracelet has three charms depicting a dagger, a shield, and a rose. While wearing this bracelet, you gain a +2 item bonus to Thievery checks. Whenever you roll a success to free someone from manacles, it counts as two successes (three on a critical success).\nActivate—No Chains r (manipulate)\nFrequency once per day\nTrigger A creature attempts to Grapple you\nRequirements You are aware of the creature and aren't Off-Guard\nEffect The bracelet yanks your body in one direction, attempting to throw off your attacker's grip. You gain a +2 circumstance bonus to your Fortitude DC against the triggering Grapple.",
      "bulk": 0.1,
      "price": {
        "gp": 950
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:woe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rikanygoG7zWhb59",
      "slug": "woe",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9ffd98447200c565650bd743c2736dbe42a9b61ae96f7b3223e801cf9dddd17b",
    "translatableHash": "sha256:85d1ca8a6bbb1c5fc1a7e923530022a03d5aad11edc62b766ccee937b7246f54",
    "data": {
      "schemaVersion": 1,
      "name": "Woe",
      "itemType": "equipment",
      "level": 10,
      "rarity": "unique",
      "traits": [
        "magical",
        "relic",
        "water"
      ],
      "description": "Little is known about the origins of this wintry cloak of snowflakes, which functions as a Living Mantle but with snow instead of plants.",
      "bulk": 0.1,
      "price": {},
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:atrophy-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Nqy9whrqYrChgkHh",
      "slug": "atrophy-bomb-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e008c1d329cc9cf580f04d11d392a190305cecb5b81e3dd14e012d09e285ff5b",
    "translatableHash": "sha256:69927ebd79949624496d2722f5198e7229d61e62b6f5ee8fc137c49250bc2bff",
    "data": {
      "schemaVersion": 1,
      "name": "Atrophy Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nAtrophy bombs contain powerful chemicals developed by Urgathoan alchemists that sap a living creature's strength and drain their energy. The bomb deals 3d4 persistent void damage and 3 void splash damage, and the target is Enfeebled 2 until the start of your next turn. You gain a +2 item bonus to attack rolls with this bomb.",
      "bulk": 0.1,
      "price": {
        "gp": 255
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silverscrap-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WCA8vovbzZuoHzu9",
      "slug": "silverscrap-bomb-moderate",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a181d86a551212ab42686bf92489e79057079a029e284067dc37aec948b22f07",
    "translatableHash": "sha256:7bc530521d20dc9b88541d3e584a4b1027264fc1ea94edc5c8aebc297018f02b",
    "data": {
      "schemaVersion": 1,
      "name": "Silverscrap Bomb (Moderate)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSilverscrap bombs are compact clusters of silver shards that explode upon impact, shredding everything in the vicinity. The bomb grants a +2 item bonus to attack rolls and deals 3d4 piercing damage and 3 piercing splash damage. All damage from the bomb is treated as silver for the purposes of weaknesses, resistances, and the like.",
      "bulk": 0.1,
      "price": {
        "gp": 255
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:devilwing-badge-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "B1SiT510ndPAP7xz",
      "slug": "devilwing-badge-major",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a8ac17b75189d2749a52343d36e43edfa159795338f918d7a91219748758955e",
    "translatableHash": "sha256:90196ba0309337a8aab071fe906f5e74eeeb148c9b8d9075bb3f646793bc3b8a",
    "data": {
      "schemaVersion": 1,
      "name": "Devilwing Badge (Major)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This small tearing of a devil's wing has been cleansed with holy water before being mounted onto a silver badge. The spell attack modifier of any spell cast by Activating this item is +19, and the spell DC is 29.\n• Armor You gain resistance 10 to fire and unholy.\n• Weapon After you cast a spell by Activating the devilwing badge, your Strikes with the weapon deal an additional 1d8 spirit damage until the end of your next turn.\nEffect: Devilwing Badge (Armor)\nEffect: Devilwing Badge (Weapon)\nActivate Cast a Spell\nEffect You cast Divine Lance.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 4th-rank Crisis of Faith.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Divine Wrath.",
      "bulk": 0,
      "price": {
        "gp": 1750
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:robe-of-the-erinys-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "08w0aIB1JRipvrUN",
      "slug": "robe-of-the-erinys-major",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a409fb80f37ef7b097a48ea343d741b41c856ac0e8b6d511e9fae26a55d79f4",
    "translatableHash": "sha256:e9798154f773c1dcb93b49420f3a8c95d8610c948b69161c028dabd3a7c760b2",
    "data": {
      "schemaVersion": 1,
      "name": "Robe of the Erinys (Major)",
      "itemType": "equipment",
      "level": 13,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This exquisite scarlet robe embroidered with golden depictions of fiends and their weapons is fashioned after the garb of the cloistered Sisters of the Golden Erinys. The robe's belt is embroidered to look like a snake, complete with metal fangs.\nActivate—Biting Belt 2 (concentrate, manipulate)\nFrequency once per day\nEffect You remove the robe's belt and snap it at an enemy within your reach. As you do, it briefly animates to bite that foe, dealing 6d8 poison damage with a basic check (fortitude, dc:31) save. On a critical failure, the target is also Sickened 1.",
      "bulk": 0,
      "price": {
        "gp": 2750
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silverscrap-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ECqOpC2J3dc6kNjM",
      "slug": "silverscrap-bomb-greater",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ad901fbbb7c7838d248bc1f77901384649a6468ca83d9ec4bd15f97866203e77",
    "translatableHash": "sha256:b627eb97d88530d9147ccd92927998d0c839ecb11a6abf9ae2f4546bcf3ddcd0",
    "data": {
      "schemaVersion": 1,
      "name": "Silverscrap Bomb (Greater)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSilverscrap bombs are compact clusters of silver shards that explode upon impact, shredding everything in the vicinity. The bomb grants a +3 item bonus to attack rolls and deals 4d4 piercing damage and 4 piercing splash damage. All damage from the bomb is treated as silver for the purposes of weaknesses, resistances, and the like.",
      "bulk": 0.1,
      "price": {
        "gp": 2550
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:atrophy-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HuVDfEm6U7Quq9Y4",
      "slug": "atrophy-bomb-major",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:51e0d27d5275b4c68423de7714ab38e58fbec9353a308ffbdf65e5521e1cf30d",
    "translatableHash": "sha256:edf1f4420e6c26209d769c19fd707754de0a59fca55d189725488c0aaeab3157",
    "data": {
      "schemaVersion": 1,
      "name": "Atrophy Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nAtrophy bombs contain powerful chemicals developed by Urgathoan alchemists that sap a living creature's strength and drain their energy. The bomb deals 4d4 persistent void damage and 4 void splash damage, and the target is Enfeebled 2 until the start of your next turn. You gain a +3 item bonus to attack rolls with this bomb.",
      "bulk": 0.1,
      "price": {
        "gp": 2550
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sakuras-sprig",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4l3NyEhXW6nct5cN",
      "slug": "sakuras-sprig",
      "publicationTitle": "Pathfinder Society Scenario #6-05: Silver Bark, Golden Blades",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0d4ca27dc8fd1ee59355858bb1ddf03e6980483321b1243e4f1c25251fc80ccd",
    "translatableHash": "sha256:7f272afa849a2780dfde762c8b7f2d417f972d80f7da37a196565b1b0be82763",
    "data": {
      "schemaVersion": 1,
      "name": "Sakura's Sprig",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You strike an unholy target with the affixed weapon\nRequirements You're trained in the affixed weapon.\nThis small glowing sprig of cherry tree flowers is only granted by Sakura, the kami of Silvertree. When activated, the affixed weapon gains the holy trait for the triggering attack and all other attacks for 1 minute.\nEffect: Sakura's Sprig",
      "bulk": 0,
      "price": {},
      "usage": "affixed-to-weapon",
      "category": "other",
      "group": "consumable"
    }
  }
]
