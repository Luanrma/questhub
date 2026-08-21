import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_05_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-disguise-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QNub2kTE7LpdMPII",
      "slug": "potion-of-disguise-lesser",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-disguise.webp"
    },
    "sourceHash": "sha256:adfc8b5b99ab85df131751c031f50f6dbc7e3e6abcfe961243a1e994b08c7af6",
    "translatableHash": "sha256:083419ccea1b274c7ba3a37ed3ba4fa819bda9fd70e64af86aa1d191e786f322",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Disguise (Lesser)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "polymorph",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nUpon imbibing this potion, you take on the appearance of a specific type of creature for [[/br 2d12 #hours]]{2d12 hours}. The type of creature is determined when the potion is created. For example, you might have a potion of elf disguise or potion of frog disguise. Drinking the potion doesn't impart the knowledge of how long the effect lasts; the GM rolls the duration in secret.\nThe disguise doesn't change your traits or statistics, nor does it give you any of the special abilities of the creature you're imitating. It might affect what items you can hold or wear (for example, your new form might lack opposable thumbs). The potion shrinks you down to a minimum of size Small, or maintains your size if the creature is your size or larger. For example, if you are Medium and drink a potion of fire giant disguise, you'll take on the appearance of a fire giant but remain Medium. The creature has to be of a specific kind, such as \"leopard\" or \"lion\" rather than just \"cat\", or \"fire giant\" or \"ogre\" rather than just \"giant\", but the potion can't cause you to mimic a specific individual creature.\nThe effects of this potion use the same rules as the Impersonate activity of Deception. Onlookers always assume you're the chosen type of creature unless they're actively Seeking. You gain a +4 status bonus to your Deception DC against such Perception checks and add your level even if untrained.\nCraft Requirements Initial raw materials must include a bit of blood, hair, or flesh of the creature the potion will allow the drinker to imitate.",
      "bulk": 0.1,
      "price": {
        "gp": 30
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1288,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "QNub2kTE7LpdMPII",
          "name": "Potion of Disguise (Lesser)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:absolute-solvent-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QSVIv5obLhKkmy67",
      "slug": "absolute-solvent-lesser",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/universal-solvent.webp"
    },
    "sourceHash": "sha256:1e17eb7e3f45a9c50e33f9124fcaf7c5832b49e3d85afdc5b3164e3dc6229466",
    "translatableHash": "sha256:c528b971441720e41af61dbb8a8bcb94dee5fd539538d5c8147cca72a37de5a2",
    "data": {
      "schemaVersion": 1,
      "name": "Absolute Solvent (Lesser)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nOriginally formulated as a means of dissolving Everlasting Adhesive, this powerful solvent can break almost any adhesive's grip. As absolute solvent is particularly effective against everlasting adhesive, it automatically dissolves everlasting adhesive. It attempts to counteract any other adhesives, such as Glue Bombs, at 3rd-rank and has a counteract modifier of [[/r 1d20+9 #Counteract]]{+9}.",
      "bulk": 0.1,
      "price": {
        "gp": 21
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 137,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Everlasting Adhesive",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Everlasting Adhesive",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Everlasting Adhesive",
          "sourceId": "7IrQPyMm76nLVoXx",
          "name": "Everlasting Adhesive",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "QSVIv5obLhKkmy67",
          "name": "Absolute Solvent (Lesser)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 441,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Glue Bomb (Lesser)",
        "label": "Glue Bombs",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Glue Bomb (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Glue Bomb (Lesser)",
          "sourceId": "T6Appwwl6nUl56Xj",
          "name": "Glue Bomb (Lesser)",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "QSVIv5obLhKkmy67",
          "name": "Absolute Solvent (Lesser)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:exploding-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "slQRh4FVDzP8h1wj",
      "slug": "exploding-shield",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/exploding-shield.webp"
    },
    "sourceHash": "sha256:29c7797ffb4b12fe8fe62661d8c8717f8aec4d21f4b36236201ebc8d56ccf9d3",
    "translatableHash": "sha256:6898b9b6dca7ecc8c495e13fc04a4b410598eaf71b0a8a7bdde2a55c61c4cdaa",
    "data": {
      "schemaVersion": 1,
      "name": "Exploding Shield",
      "itemType": "shield",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "The magic within this wooden shield (Hardness 3, HP 12, BT 6) lashes out at your foes as the shield is destroyed.\nActivate—Splintering Boom f (manipulate)\nTrigger The exploding shield is destroyed\nEffect The shield explodes outward, dealing 4d6[piercing] damage to each creature in a @Template[cone|distance:15] (check (reflex, dc:19, basic) save).\nHardness | HP | BT |\n3 | 12 | 6 |",
      "bulk": 1,
      "price": {
        "gp": 25
      },
      "usage": "",
      "category": "shield",
      "group": "wooden-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:freezing-ammunition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Xnmx6SJ6OkJOfYxF",
      "slug": "freezing-ammunition",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:491f7d2775b01d96a917f3a79d90a129c9559b098b5d4082605c884812073294",
    "translatableHash": "sha256:b72c809371e59d195df65e7101c34e2d23e80e6d8f88d6018587ef6a0a5463a6",
    "data": {
      "schemaVersion": 1,
      "name": "Freezing Ammunition",
      "itemType": "ammunition",
      "level": 5,
      "rarity": "common",
      "traits": [
        "cold",
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThis chilly ammunition is dark blue and cold to the touch. When activated freezing ammunition hits a target, the target must succeed at a check (fortitude, dc:19) save or be Slowed 1 for 1 round by the intense cold (slowed 1 for 1 minute on a critical failure).",
      "bulk": 0,
      "price": {
        "gp": 25
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 272,
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
          "sourceId": "Xnmx6SJ6OkJOfYxF",
          "name": "Freezing Ammunition",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:mariners-splint",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YfRwH0wIEmuNDL7I",
      "slug": "mariners-splint",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:402bdef4fbf5549c871cffac118430fa9bd44049d4fe8ecc178373bb355c25fe",
    "translatableHash": "sha256:2d79bdea6ad08e4ed468b662e61f660822686d4232d59ac55e94b83c3b98ee08",
    "data": {
      "schemaVersion": 1,
      "name": "Mariner's Splint",
      "itemType": "armor",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This suit of +1 splint mail is worn by veteran sailors aboard warships who want as much protection as possible but still need to remain mobile enough to climb up rigging or swim should the need arise. The plates are arranged for maximum flexibility and the undercoat of padded armor is often no more than a cotton shrift. The armor grants you a +1 item bonus to Athletics checks to Climb or Swim and increases the distance you move when you successfully Climb or Swim by 5 feet.",
      "bulk": 3,
      "price": {
        "gp": 180
      },
      "usage": "",
      "category": "heavy",
      "group": "composite",
      "armor": {
        "armorClassBonus": 5,
        "dexterityCap": 1,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-the-tempest",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0S8lZFSEP7ZlLFqA",
      "slug": "staff-of-the-tempest",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dacbf177a450c39ad2dec8e6b124a0f17217d70c056a720ff40aa3ab975f49da",
    "translatableHash": "sha256:8dcede427e0b9975f6bbb37295b19ca7c402d5290a519f7eed28d0e16a791459",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Tempest",
      "itemType": "weapon",
      "level": 6,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A staff of the tempest is usually crafted from the wood of a tree struck by lightning. It's often gnarled and blackened with the occasional spark of electricity flashing from its length. While wielding the staff, your vision is less inhibited by stormy weather. While you hold the staff, you ignore the Concealed condition from mist, precipitation, and the like.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Electric Arc\n• 1st Hydraulic Push, Thunderstrike\n• 2nd Mist, Resist Energy (electricity only), Thunderstrike\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 230
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 315,
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
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 613,
        "uuid": "Compendium.pf2e.spells-srd.Item.Electric Arc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Electric Arc",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Electric Arc",
          "sourceId": "kBhaPuzLUSwS6vVf",
          "name": "Electric Arc",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 694,
        "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Push",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Push",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Hydraulic Push",
          "sourceId": "jfVCuOpzC6mUrf6f",
          "name": "Hydraulic Push",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 749,
        "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Thunderstrike",
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 831,
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
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 876,
        "uuid": "Compendium.pf2e.spells-srd.Item.Resist Energy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Resist Energy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Resist Energy",
          "sourceId": "Fr58LDSrbndgld9n",
          "name": "Resist Energy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 949,
        "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Thunderstrike",
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "0S8lZFSEP7ZlLFqA",
          "name": "Staff of the Tempest",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-fire-retaliation-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AgBIZtwciSsCZeNN",
      "slug": "potion-of-fire-retaliation-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-fire-retalliation.webp"
    },
    "sourceHash": "sha256:f1db24fd2b1391b8eba717269755f9e52d193eebac589d6890c620001e4211d2",
    "translatableHash": "sha256:097476479107e92be96398992ad363ebb0355677c065c118c081c4b08b2c57de",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Fire Retaliation (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of fire retaliation, you glow with a faint aura of fire energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes fire damage.\nThe aura deals 2d4[fire] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bomb-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "axU0I9xIm4xm2VPH",
      "slug": "bomb-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/bomb-snare.webp"
    },
    "sourceHash": "sha256:e1066a5b8bc4a4014a87029321708674df7ffb48ac7d168f678466ec36522b5e",
    "translatableHash": "sha256:406cadfb24f908681bca11d71d071f4b483a6eef3b3772e3fbc8b664e7fd283b",
    "data": {
      "schemaVersion": 1,
      "name": "Bomb Snare",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You create a snare that causes three 3rd-level moderate alchemical bombs of the same type to explode when a creature triggers the snare. The target and all creatures in adjacent squares must attempt a check (reflex, showDC:all, dc:24) save, as the snare deals damage equal to three times the direct hit damage from one of the component bombs (for example, 6d6 electricity damage from three moderate bottled lightnings) with no splash damage or other effects.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no other effects.\nFailure The creature takes full damage. It also takes all other effects of a direct hit from one of the component bombs (such as Off-Guard from bottled lightning or persistent damage from an acid flask).\nCritical Failure The creature takes double damage, plus all other effects of a direct hit (as failure).\nCraft Requirements Supply three of the same damaging 3rd-level moderate alchemical bomb.",
      "bulk": 0,
      "price": {
        "gp": 40
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 772,
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
          "sourceId": "axU0I9xIm4xm2VPH",
          "name": "Bomb Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghoul-hide",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hRwnNTMj7wa8S4Ji",
      "slug": "ghoul-hide",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/ghoul-hide.webp"
    },
    "sourceHash": "sha256:598e34670cae2107e9adabd96467b254dbe94f48aa9d7cefaeec852d45d425c0",
    "translatableHash": "sha256:908517bb8b322fb2fc2313fa80dbf7ce71ce164b26f48109acf39c8fed3acf93",
    "data": {
      "schemaVersion": 1,
      "name": "Ghoul Hide",
      "itemType": "armor",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Stitched together from pieces of ghoul skin, this suit of +1 hide armor grants you a +1 item bonus to saving throws against curses and makes you immune to the stench of ghouls. Ghoul hide with a resilient rune increases the resilient rune's item bonus to saving throws against curses by 1 (maximum +4).",
      "bulk": 2,
      "price": {
        "gp": 220
      },
      "usage": "",
      "category": "medium",
      "group": "leather",
      "armor": {
        "armorClassBonus": 3,
        "dexterityCap": 2,
        "checkPenalty": -2,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-cold-retaliation-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M6pES1Nck1S6SWX9",
      "slug": "potion-of-cold-retaliation-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-cold-retalliation.webp"
    },
    "sourceHash": "sha256:d179c6069813990beeed8f98f14fbb6362a749da0559475bab876c924efdd35f",
    "translatableHash": "sha256:e2b05342792e308d8b5129de4074d98e69541f92400758ba89cf0b800ae4c62e",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Cold Retaliation (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of cold retaliation, you glow with a faint aura of cold energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes cold damage.\nThe aura deals 2d4[cold] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nauseating-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MbPboT76BBKVGepB",
      "slug": "nauseating-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7f52190254658133714ba86e5f846bcf545c6168d29f5e3968cdf7ff6edbeb20",
    "translatableHash": "sha256:15048b2b7a9d05aeb9b2d1ab62fa64bf430e265ed3ab8f7e1e56a29a71d4599c",
    "data": {
      "schemaVersion": 1,
      "name": "Nauseating Snare",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "poison",
        "snare",
        "trap"
      ],
      "description": "You position particularly foul substances to splash over a creature. The first creature to enter the square must attempt a check (fortitude, showDC:all, dc:24) saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Sickened 1.\nFailure The creature becomes Sickened 2.\nCritical Failure The creature becomes Sickened 3.",
      "bulk": 0,
      "price": {
        "gp": 40
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 302,
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
          "sourceId": "MbPboT76BBKVGepB",
          "name": "Nauseating Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 420,
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
          "sourceId": "MbPboT76BBKVGepB",
          "name": "Nauseating Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 547,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 3",
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
          "sourceId": "MbPboT76BBKVGepB",
          "name": "Nauseating Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-electricity-retaliation-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oDfucsKeWpJmmWN1",
      "slug": "potion-of-electricity-retaliation-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-electricity-retalliation.webp"
    },
    "sourceHash": "sha256:54a031a42f3972e0fcac99853f46f66c402d94eb9344c1cd28b2429850d5108e",
    "translatableHash": "sha256:85ddd1d0d1c26c9a0c05468aaf968cce88acefacd9dbefd7bc68bacba4ca689e",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Electricity Retaliation (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of electricity retaliation, you glow with a faint aura of electrical energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes electricity damage.\nThe aura deals 2d4[electricity] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-acid-retaliation-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OWPOTwMsrYma9d0v",
      "slug": "potion-of-acid-retaliation-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-acid-retalliation.webp"
    },
    "sourceHash": "sha256:30e02d483f61503d8e7dda396526cd93aa2c202b182f859c0fab5483ffd89ab3",
    "translatableHash": "sha256:011db80764d61bc223e925af076aac7c2aba4d519657264bf4e0fa2dc20e2406",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Acid Retaliation (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of acid retaliation, you glow with a faint aura of acid energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes acid damage.\nThe aura deals 2d4[acid] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:giant-scorpion-venom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QGXNqpP5KvSldoZz",
      "slug": "giant-scorpion-venom",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3a0839b325f64ef2a6ea92d4d74463b18617721916101977ad8e8e49c96358d",
    "translatableHash": "sha256:3b526f62b98a6f337457a677ca95666b87301dd6887a27964ccd306e89509834",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Scorpion Venom",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "The venom of a giant scorpion is excruciating and its effects are somewhat debilitating.\nActivate 2 (manipulate)\nSaving Throw check (fortitude, dc:22, showDC:all)\nMaximum Duration 6 rounds\nStage 1 2d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d8[poison] damage and enfeebled 1 (1 round)\nStage 3 2d10[poison] damage and Enfeebled 2 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 40
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 365,
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
          "sourceId": "QGXNqpP5KvSldoZz",
          "name": "Giant Scorpion Venom",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 592,
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
          "sourceId": "QGXNqpP5KvSldoZz",
          "name": "Giant Scorpion Venom",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-gender-transformation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rDM6rxWVzKtFQOKg",
      "slug": "elixir-of-gender-transformation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e546e0135952845800a76763a5066bcb8b7c015bca7f5743e90f2c2aeeae815",
    "translatableHash": "sha256:44cd29f2a87f1ab572d163ee14339dcb002863cd62816fcfca2cfc72e6287733",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of Gender Transformation (Greater)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThis clear, bitter liquid can be ingested to change certain secondary sex characteristics. Different formulations create different changes—for example, one variety might cause the voice to deepen and promote body and facial hair growth, while another might cause fat redistribution around the hips and the growth of breasts. These changes tend to be accompanied by shifting of the fat in the face, sometimes dramatically or sometimes more subtly changing the user's appearance.\nThe elixir must be taken once, and changes occur over the course of 6 months.",
      "bulk": 0.1,
      "price": {
        "gp": 35
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:terrifying-ammunition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ROdjFw7wby982qf5",
      "slug": "terrifying-ammunition",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/terrifying-ammunition.webp"
    },
    "sourceHash": "sha256:a3a9feadd0fae87ba448ec78c845ebba7f520f1c1bf76c46db6c329e6a033a1a",
    "translatableHash": "sha256:d831754cfb18a263f4849438b484bc0dbb010d2e49c1b698ca334c7e52875d9c",
    "data": {
      "schemaVersion": 1,
      "name": "Terrifying Ammunition",
      "itemType": "ammunition",
      "level": 6,
      "rarity": "common",
      "traits": [
        "consumable",
        "emotion",
        "fear",
        "magical",
        "mental"
      ],
      "description": "Activate 1 (manipulate)\nThis black-and-gray ammunition is etched with occult symbols and tiny, grinning skulls. When activated terrifying ammunition damages a creature, it fills the creature's mind with visions of their own failures, tragedies, and eventually, their own death. The creature must attempt a check (will, dc:20) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 1 and can't reduce its frightened value below 1 until it spends an action, which has the concentrate trait, to calm itself down.\nCritical Failure As failure, but the creature is Frightened 2.",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 519,
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
          "sourceId": "ROdjFw7wby982qf5",
          "name": "Terrifying Ammunition",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 636,
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
          "sourceId": "ROdjFw7wby982qf5",
          "name": "Terrifying Ammunition",
          "type": "ammo"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 904,
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
          "sourceId": "ROdjFw7wby982qf5",
          "name": "Terrifying Ammunition",
          "type": "ammo"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-impossible-visions",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WA5eoFFuAsyx7A2t",
      "slug": "staff-of-impossible-visions",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1458f2acde083b1cdfbffdb81c4d15bb17b238d60065a1da2fa5dc317ec676a3",
    "translatableHash": "sha256:f41705e6f4bb9e6d6839de4c90f1917c6d1bc3227e35dd216faa8c31ae478d11",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Impossible Visions",
      "itemType": "weapon",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This bizarre staff is made from oak, capped with a cluster of eye-shaped gemstones that seem to move and undulate at the corner of your vision. While wielding the staff, you can peer through the eyes on the staff rather than your own, using your normal visual senses (including any benefits of spells like See the Unseen). You can maneuver the staff to see things around corners, at higher elevations, or in places where the staff can fit but your head can't. This doesn't provide sufficient line of effect to target creatures around corners. The eyes are as vulnerable as your eyes and can be affected by anything that alters your vision, such as a blinding flash of light.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Fear, Phantom Pain\n• 2nd Augury, Paranoia\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 230
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "See the Unseen",
          "sourceId": "jwK43yKsHTkJQvQ9",
          "name": "See the Unseen",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 912,
        "uuid": "Compendium.pf2e.spells-srd.Item.Daze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Daze",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Daze",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 985,
        "uuid": "Compendium.pf2e.spells-srd.Item.Fear",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Fear",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Fear",
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1030,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantom Pain",
          "sourceId": "R8bqnYiThB6MYTxD",
          "name": "Phantom Pain",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1111,
        "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Augury",
          "sourceId": "41TZEjhO6D1nWw2X",
          "name": "Augury",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1158,
        "uuid": "Compendium.pf2e.spells-srd.Item.Paranoia",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Paranoia",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Paranoia",
          "sourceId": "Mkbq9xlAUxHUHyR2",
          "name": "Paranoia",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WA5eoFFuAsyx7A2t",
          "name": "Staff of Impossible Visions",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-providence",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XeTmuhuNnhGf7c4t",
      "slug": "staff-of-providence",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5ac55ca6390301a650deaa576662fd74f0cbb786a786984fb9d88df1d0e912f3",
    "translatableHash": "sha256:5b448b2c3f46ef637c2388557f378fa7e18c28ff050164a58781c09344b6e567",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Providence",
      "itemType": "weapon",
      "level": 6,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A large, stylized symbol of an eye adorns the top of this wooden staff, representing the watchful eye of the divine powers. The bearer of the staff can guide and protect, seeing bounties and tragedies that could befall them in the future. When wielding this staff, you gain a +1 item bonus to Survival checks to Sense Direction or Subsist and to Religion checks to Recall Knowledge.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Guidance\n• 1st Bless, Create Water\n• 2nd Augury, Create Food, See the Unseen, Status\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 230
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 315,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sense Direction",
          "sourceId": "fJImDBQfqfjKJOhk",
          "name": "Sense Direction",
          "type": "action"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 374,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Subsist",
          "sourceId": "49y9Ec4bDii8pcD3",
          "name": "Subsist",
          "type": "action"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 448,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 701,
        "uuid": "Compendium.pf2e.spells-srd.Item.Guidance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Guidance",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Guidance",
          "sourceId": "izcxFQFwf3woCnFs",
          "name": "Guidance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 778,
        "uuid": "Compendium.pf2e.spells-srd.Item.Bless",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Bless",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Bless",
          "sourceId": "XSujb7EsSwKl19Uu",
          "name": "Bless",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 824,
        "uuid": "Compendium.pf2e.spells-srd.Item.Create Water",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Create Water",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Create Water",
          "sourceId": "WzLKjSw6hsBhuklC",
          "name": "Create Water",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 905,
        "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Augury",
          "sourceId": "41TZEjhO6D1nWw2X",
          "name": "Augury",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 952,
        "uuid": "Compendium.pf2e.spells-srd.Item.Create Food",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Create Food",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Create Food",
          "sourceId": "Mt6ZzkVX8Q4xigFq",
          "name": "Create Food",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1004,
        "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "See the Unseen",
          "sourceId": "jwK43yKsHTkJQvQ9",
          "name": "See the Unseen",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1059,
        "uuid": "Compendium.pf2e.spells-srd.Item.Status",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Status",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Status",
          "sourceId": "HTou8cG05yuSkesj",
          "name": "Status",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XeTmuhuNnhGf7c4t",
          "name": "Staff of Providence",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hopeless-night-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZJ3ahspZOXL4CK4J",
      "slug": "wand-of-hopeless-night-2nd-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-hopeless-night.webp"
    },
    "sourceHash": "sha256:182b199006b9bcd1724382ed61f32763f936e49e5df263a32ceebfe3b80e48b9",
    "translatableHash": "sha256:ab1f4dadad12ed07f791f03e70a783c7135d068e16915e9b0a584158bfc9ba6a",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hopeless Night (2nd-Rank Spell)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "common",
      "traits": [
        "darkness",
        "magical",
        "wand"
      ],
      "description": "This wand is a length of wrought black iron.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Darkness at 2nd-rank. Each creature that ends its turn within the spell's area must succeed at a check (will, dc:20) save or become Frightened 1 (Frightened 2 on a critical failure).\nCraft Requirements Supply a casting of darkness at 2nd-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 203,
        "uuid": "Compendium.pf2e.spells-srd.Item.Darkness",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Darkness",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Darkness",
          "sourceId": "4GE2ZdODgIQtg51c",
          "name": "Darkness",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ZJ3ahspZOXL4CK4J",
          "name": "Wand of Hopeless Night (2nd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 373,
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
          "sourceId": "ZJ3ahspZOXL4CK4J",
          "name": "Wand of Hopeless Night (2nd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 442,
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
          "sourceId": "ZJ3ahspZOXL4CK4J",
          "name": "Wand of Hopeless Night (2nd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
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
          "sourceId": "p2mmNDGQ7zAaOXvd",
          "name": "Darkness",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
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
          "sourceId": "p2mmNDGQ7zAaOXvd",
          "name": "Darkness",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:tangle-root-toxin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "76T49dJYfxIrPvQe",
      "slug": "tangle-root-toxin",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/malyass-root-paste.webp"
    },
    "sourceHash": "sha256:251208536f50d4a31e275d1cffecd02139f4a9d79f378c6d4cff144117cd5345",
    "translatableHash": "sha256:f511f8510d3ea2cbcd3fbe4851f018ac8cf29a8bd7a5b952a194db755b80bc7a",
    "data": {
      "schemaVersion": 1,
      "name": "Tangle Root Toxin",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "Tangle root toxin sees use to impede opponents in athletic competitions, in addition to espionage and tracking.\nActivate 1 (manipulate)\nSaving Throw check (fortitude, dc:26, showDC:all)\nOnset 1 minute\nMaximum Duration 6 minutes\nStage 1 Clumsy 1 and –10-foot status penalty to all Speeds (1 minute)\nStage 2 Clumsy 2 and –20-foot status penalty to all Speeds (1 minute)\nStage 3 Clumsy 3, Off-Guard, and –30-foot status penalty to all Speeds (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 55
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 396,
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
          "sourceId": "76T49dJYfxIrPvQe",
          "name": "Tangle Root Toxin",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 541,
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
          "sourceId": "76T49dJYfxIrPvQe",
          "name": "Tangle Root Toxin",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 686,
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
          "sourceId": "76T49dJYfxIrPvQe",
          "name": "Tangle Root Toxin",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 747,
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
          "sourceId": "76T49dJYfxIrPvQe",
          "name": "Tangle Root Toxin",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:everlasting-adhesive",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7IrQPyMm76nLVoXx",
      "slug": "everlasting-adhesive",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/soverign-glue.webp"
    },
    "sourceHash": "sha256:9f6ed57d2cc68375c0eeaab8fbc7b33fca1bdeac6099867715797158998e963e",
    "translatableHash": "sha256:565e20e4182407efd5a631eeddde0a9ed0482063dc3e5991e5da6ca5906eb5d3",
    "data": {
      "schemaVersion": 1,
      "name": "Everlasting Adhesive",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 minute (manipulate)\nThis peculiar amber adhesive bonds two surfaces together almost inseparably. A single flask covers an area up to 1 square foot and must be used all at once to form a single bond between two surfaces. If the activation is interrupted, the bond fails, and the adhesive is wasted.\nOnce two surfaces are joined with everlasting adhesive, a creature can separate them only with a successful check (athletics, dc:50) check. The adhered objects tend to break before the adhesive does unless they're particularly durable, though a creature determined to separate the objects can break off the parts connected by the everlasting adhesive and later Repair the objects.\nThe adhesive can affect creatures only if they're willing, and its bond can be broken by exfoliating the outermost layer of skin.",
      "bulk": 0.1,
      "price": {
        "gp": 55
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:corrosive-ammunition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "903CuhvVUhE1lmoB",
      "slug": "corrosive-ammunition",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/corrosive-ammunition.webp"
    },
    "sourceHash": "sha256:e153e7931ff6b7c06934d88926023392c9e670b07c23753da690cdc39904565a",
    "translatableHash": "sha256:15f78db47a9ab840ba56811e3dfab7f8baa6e58033825821003d57f88b52ff39",
    "data": {
      "schemaVersion": 1,
      "name": "Corrosive Ammunition",
      "itemType": "ammunition",
      "level": 7,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThis peculiar ammunition is coated in yellow dust that leaves a stain on anything it touches. When activated corrosive ammunition hits a target, it dissolves across the target's armor. The armor takes 1d8[persistent,acid] damage that ignores the armor's Hardness; if the target isn't wearing armor, it takes the acid damage instead. This damage occurs at the end of the target's turns.\nThe creature can end this effect by spending an Interact action to wipe off the corrosive dust, and otherwise the effect ends once the armor becomes broken.",
      "bulk": 0,
      "price": {
        "gp": 70
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ration-tonic-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EkC2W5A5fohoIKSd",
      "slug": "ration-tonic-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/ration-tonic.webp"
    },
    "sourceHash": "sha256:5863dcbb2e024bf1fd537703c32ad8848968d1de3f832520db082bb269b5fab6",
    "translatableHash": "sha256:df05fb549c24db2d9338867c3d6e384176acf17d6646587554831206cef7b01c",
    "data": {
      "schemaVersion": 1,
      "name": "Ration Tonic (Greater)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nThis slender vial appears to hold clean, clear water with a faintly fruity scent. Drinking a ration tonic magically nourishes you with the equivalent of a week's worth of food and water, distributing the nourishment in a constant and healthy flow across the week. The tonic has a subtle, pleasant taste, its particulars chosen when the potion is crafted.",
      "bulk": 0.1,
      "price": {
        "gp": 55
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skinstitch-salve",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FgAPV0iLE6R1QMJ5",
      "slug": "skinstitch-salve",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/skinitch-salve.webp"
    },
    "sourceHash": "sha256:633c24dcff7429bfdd2bc7e670554bb30f788f0d121cbcdcaa74a9ddaa795324",
    "translatableHash": "sha256:4a68130a31826d25dad436a4084da39c4fb147ccfde54e72cbc13f4bc057eb0f",
    "data": {
      "schemaVersion": 1,
      "name": "Skinstitch Salve",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "This sticky salve stubbornly holds wounds closed and encourages swift natural healing. You can activate the salve in either of the following ways.\nActivate—Administer Stitch 1 (manipulate)\nEffect You Administer First Aid without requiring Healer's Toolkit. You either gain a +2 item bonus to the Medicine check, or you can use the skinstitch salve's Medicine modifier of [[/r 1d20+13]] instead of your own.\nActivate—Stitch Wounds f (manipulate)\nTrigger You Treat Wounds or use Battle Medicine\nEffect You gain a +2 item bonus to the triggering Medicine check. If you roll a success on the Medicine check, you get a critical success instead.\nEffect: Skinstitch Salve",
      "bulk": 0.1,
      "price": {
        "gp": 55
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 290,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Administer First Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Administer First Aid",
          "sourceId": "MHLuKy4nQO2Z4Am1",
          "name": "Administer First Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "FgAPV0iLE6R1QMJ5",
          "name": "Skinstitch Salve",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 369,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Healer's Toolkit",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Healer's Toolkit",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Healer's Toolkit",
          "sourceId": "s1vB3HdXjMigYAnY",
          "name": "Healer's Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "FgAPV0iLE6R1QMJ5",
          "name": "Skinstitch Salve",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 716,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Wounds",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Wounds",
          "sourceId": "1kGNdIIhuglAjIp9",
          "name": "Treat Wounds",
          "type": "action"
        },
        "owner": {
          "sourceId": "FgAPV0iLE6R1QMJ5",
          "name": "Skinstitch Salve",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 776,
        "uuid": "Compendium.pf2e.feats-srd.Item.Battle Medicine",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Battle Medicine",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Battle Medicine",
          "sourceId": "wYerMk6F1RZb0Fwt",
          "name": "Battle Medicine",
          "type": "feat"
        },
        "owner": {
          "sourceId": "FgAPV0iLE6R1QMJ5",
          "name": "Skinstitch Salve",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1008,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Skinstitch Salve",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Skinstitch Salve",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Skinstitch Salve",
          "sourceId": "zlSNbMDIlTOpcO8R",
          "name": "Effect: Skinstitch Salve",
          "type": "effect"
        },
        "owner": {
          "sourceId": "FgAPV0iLE6R1QMJ5",
          "name": "Skinstitch Salve",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:comprehension-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OcBPjVplvy2GbQ8P",
      "slug": "comprehension-elixir-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/comprehension-elixir.webp"
    },
    "sourceHash": "sha256:df8db0fe0612caae50113af9ac2b2a6258a571233eef94d165410a17dc5ad799",
    "translatableHash": "sha256:0e02aceca1b0af1f3b82d3f377fc86f7c2739dd6de59e62aa965a8bf6109596b",
    "data": {
      "schemaVersion": 1,
      "name": "Comprehension Elixir (Greater)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mental"
      ],
      "description": "Activate 1 (manipulate)\nThis bitter draught opens your mind to the potential of the written word. For the listed duration after drinking this elixir, you can understand any words you read, so long as they are written in a common language. This elixir doesn't automatically allow you to understand codes or extremely esoteric passages-you still need to attempt a skill check to Decipher Writing. The duration is 10 minutes.",
      "bulk": 0.1,
      "price": {
        "gp": 54
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-the-spider-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tf69NMnUoUAYrWtj",
      "slug": "wand-of-the-spider-2nd-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-the-snowfields.webp"
    },
    "sourceHash": "sha256:3a715f858e785d166cecefe6e7dd782818324e4e1c5980d341f1cdf568d459be",
    "translatableHash": "sha256:3c9c717976f71a257c7217438761af09e4868fd30e170993ac6e0e3b89252378",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of the Spider (2nd-Rank Spell)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "magical",
        "poison",
        "wand"
      ],
      "description": "The length of this wand is a pair of twisted giant spider legs.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Web at 2nd-rank, but the strands of webbing are toxic. Any creature that fails its Athletics check or Reflex save to navigate the web takes 1d6[poison] damage.\nCraft Requirements Supply a casting of web at 2nd-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 360
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.spells-srd.Item.Web",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Web",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Web",
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        },
        "owner": {
          "sourceId": "tf69NMnUoUAYrWtj",
          "name": "Wand of the Spider (2nd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.9s5tqqXNzcoKamWx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.9s5tqqXNzcoKamWx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "9s5tqqXNzcoKamWx",
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Yjtg54emXCN3r1SP",
          "name": "Web",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
        "sourceIndex": 380,
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
          "sourceId": "Yjtg54emXCN3r1SP",
          "name": "Web",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
        "sourceIndex": 1505,
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
          "sourceId": "Yjtg54emXCN3r1SP",
          "name": "Web",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:twisting-twine-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ULHYQIoVL2gKN7TM",
      "slug": "twisting-twine-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0f19a54f4b860b22aff6b3222b5f49c49fc0f200c38212f06b98c3d64ba57283",
    "translatableHash": "sha256:57f9ce785aecbecd7478e555c5e1ab30566073c7329a7f5ef50e3e8ad8d3065a",
    "data": {
      "schemaVersion": 1,
      "name": "Twisting Twine (Greater)",
      "itemType": "equipment",
      "level": 7,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This ball of hempen twine resists efforts to unravel it by hand.\nActivate—Unravel Twine 1 (manipulate)\nEffect You toss the ball of twine into a square within 20 feet. The twine then unravels and animates, attempting to Disarm or Trip (your choice) a creature in the square with a total of +15 to the Athletics check. At the end of your turn, the twine winds itself back into a ball and returns to your hand; if you don't have a free hand, it returns to your space instead.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
        "label": null,
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
          "sourceId": "ULHYQIoVL2gKN7TM",
          "name": "Twisting Twine (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 359,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Trip",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Trip",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Trip",
          "sourceId": "ge56Lu1xXVFYUnLP",
          "name": "Trip",
          "type": "action"
        },
        "owner": {
          "sourceId": "ULHYQIoVL2gKN7TM",
          "name": "Twisting Twine (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellguard-blade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "v6LpzpIA0BmKvEtK",
      "slug": "spellguard-blade",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/spellguard-blade.webp"
    },
    "sourceHash": "sha256:9d979d94be95479b02debfb30540e488245988875be9bee785a4b4d49a0a72ac",
    "translatableHash": "sha256:f4a1b5bf643e258a4b109cabe94673ef8c8fab10e3a932608395a90bfe5f15e7",
    "data": {
      "schemaVersion": 1,
      "name": "Spellguard Blade",
      "itemType": "weapon",
      "level": 7,
      "rarity": "common",
      "traits": [
        "agile",
        "disarm",
        "finesse",
        "magical",
        "parry",
        "versatile-s"
      ],
      "description": "The guard of this +1 striking main-gauche is inscribed with eldritch glyphs that guard against magic.\nWhen you are benefiting from the +1 circumstance bonus to AC from this weapon's parry trait, you also apply that circumstance bonus to your saving throws against spells that target you.\nEffect: Spellguard Blade",
      "bulk": 0.1,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 314,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Spellguard Blade",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Spellguard Blade",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Spellguard Blade",
          "sourceId": "zqKzWGLODgIvtiKf",
          "name": "Effect: Spellguard Blade",
          "type": "effect"
        },
        "owner": {
          "sourceId": "v6LpzpIA0BmKvEtK",
          "name": "Spellguard Blade",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:candle-of-revealing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XpmPX3ScEOBgAoKd",
      "slug": "candle-of-revealing",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/candle-of-revealing.webp"
    },
    "sourceHash": "sha256:e8da305eed214e42d1225aea72e710d89b35ad91ee20c279c455f3a8bc1a8452",
    "translatableHash": "sha256:3ca340cefb0f991863011fe8dcba530eb637867879f46a8dc7929c2d6460bdf2",
    "data": {
      "schemaVersion": 1,
      "name": "Candle of Revealing",
      "itemType": "consumable",
      "level": 7,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nWhen lit, this black candle's eerie blue flame reveals the presence of Invisible creatures. Within a 10-foot radius of the lit candle, creatures don't benefit from the invisible condition. Their bodies are outlined, not fully visible, so they're Concealed. Once lit, the candle burns for 1 minute, after which the effect ends. If extinguished, it can't be relit.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 161,
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
          "sourceId": "XpmPX3ScEOBgAoKd",
          "name": "Candle of Revealing",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 379,
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
          "sourceId": "XpmPX3ScEOBgAoKd",
          "name": "Candle of Revealing",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-disguise-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "25Rr05SIfTj0GA31",
      "slug": "potion-of-disguise-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-disguise.webp"
    },
    "sourceHash": "sha256:c832b29c0a667f5693c6ac33975b6cebdc1f7d0071c6ea40a731ad41fc87ff1e",
    "translatableHash": "sha256:bb3a8dcb5da4b7271b8369fa30d795073e8c8353cd01fdd5d97d86daa442557f",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Disguise (Moderate)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "polymorph",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nUpon imbibing this potion, you take on the appearance of a specific type of creature for [[/br 2d12 #hours]]{2d12 hours}. The type of creature is determined when the potion is created. For example, you might have a potion of elf disguise or potion of frog disguise. Drinking the potion doesn't impart the knowledge of how long the effect lasts; the GM rolls the duration in secret.\nThe disguise doesn't change your traits or statistics, nor does it give you any of the special abilities of the creature you're imitating. It might affect what items you can hold or wear (for example, your new form might lack opposable thumbs). The potion shrinks you down to a minimum of size Tiny, or increases your size if the creature is larger than you, to a maximum of Large. This does not change any of your statistics, with the exception of reducing your reach to 0 as a Tiny creature. The creature has to be of a specific kind, such as \"leopard\" or \"lion\" rather than just \"cat\", or \"fire giant\" or \"ogre\" rather than just \"giant\", but the potion can't cause you to mimic a specific individual creature.\nThe effects of this potion use the same rules as the Impersonate activity of Deception. Onlookers always assume you're the chosen type of creature unless they're actively Seeking. You gain a +4 status bonus to your Deception DC against such Perception checks and add your level even if untrained.\nCraft Requirements Initial raw materials must include a bit of blood, hair, or flesh of the creature the potion will allow the drinker to imitate.",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1270,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "25Rr05SIfTj0GA31",
          "name": "Potion of Disguise (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:dust-of-corpse-animation",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2koNKqbQV05myfuL",
      "slug": "dust-of-corpse-animation",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:801ea6c8f3dbf6ebd9bf0745fec112f29644d56915ca533c5676518c764c86c0",
    "translatableHash": "sha256:143b08195776f844069534b16688946659b4e0cb5e0f8d1a6757ef4b640634d2",
    "data": {
      "schemaVersion": 1,
      "name": "Dust of Corpse Animation",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nThis black pouch contains what appears to be fine bone dust. Pouring the dust in a special pattern over a corpse turns it into an undead creature. The type of undead created depends on the condition of the corpse, resulting in either a skeleton or a zombie. If the undead's level would be greater than 3, the dust fails to animate it. The body must be of an appropriate size and type for the undead you wish to create-for example, you must sprinkle the dust on a horse's skeleton to animate a skeletal horse. If more than one undead in the level range is appropriate, such as skeletal guard or skeletal champion for a Medium humanoid skeleton, you choose.\nThe animated undead has the minion trait, meaning it can use 2 actions when you Command it. You can issue a Command for the current turn as part of the activation. The undead creature remains animated for 1 minute before collapsing back into its corpse form. As usual, you can have a maximum of four minions under your control.",
      "bulk": 0,
      "price": {
        "gp": 100
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spiritsight-crossbow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2UX3tlC5vKeQjG7t",
      "slug": "spiritsight-crossbow",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e89a3890138341037805baa71f0184ea2033da8ec628d91809a2219b7adf814",
    "translatableHash": "sha256:450eaec674d3206d947f4750defe9ce5a9b9195b4bf2282226fa43376f1acfac",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritsight Crossbow",
      "itemType": "weapon",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "teleportation"
      ],
      "description": "This +1 striking ghost touch crossbow has an array of crystalline lenses and silver fittings along the stock and feels strangely light.\nActivate—Ethereal Vision 1 (concentrate)\nFrequency once per minute\nEffect You aim through the crossbow's crystalline lenses, gaining imprecise vision onto the Ethereal Plane with a range of 60 feet in addition to your normal senses until the end of your turn. You can sense through objects in the Universe this way, and the sense is precise for detecting creatures. Because this sense detects spiritual energy, a creature that's immune to spirit can't be detected in this way.\nActivate—Ethereal Shot 1\nRequirements Ethereal Vision is active\nEffect You Strike with the spiritsight crossbow. This shot travels through the Ethereal Plane, allowing it to pass through and ignore cover from physical objects within the range of your Ethereal Vision.",
      "bulk": 2,
      "price": {
        "gp": 450
      },
      "usage": "held-in-two-hands",
      "category": "simple",
      "group": "crossbow",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:striking-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6KdYdFovFBivwI8M",
      "slug": "striking-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/striking-snare.webp"
    },
    "sourceHash": "sha256:33cfbf1a5baef6c8dddc2346f1af738beeb8f8fb16ba4979dc2a806d124e3f28",
    "translatableHash": "sha256:7d4606284a13b2ca0c64661a7fa8f89251867800917a2793105549dc2b6bbb92",
    "data": {
      "schemaVersion": 1,
      "name": "Striking Snare",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You affix a trip line or other trigger to a group of either stones or wooden stakes to strike a creature that enters the snare's square. The creature must attempt a check (reflex, showDC:all, dc:26, basic) saving throw. If you choose stones, the snare deals 9d8[bludgeoning] damage; if you choose spikes, it deals 9d8[piercing] damage.",
      "bulk": 0,
      "price": {
        "gp": 75
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-dynamism",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "C0kSU5KWMzLngvTa",
      "slug": "oil-of-dynamism",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-object-animation.webp"
    },
    "sourceHash": "sha256:936735e94a7d87b567d826da8e1062668f3ade1b7ea0121ac8d56bfeed5a3872",
    "translatableHash": "sha256:c1ca6ef78dbd0475f9a00e6964c5cb69ef0cffe778ff0363f0b0a9569ab20044",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Dynamism",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 2 (manipulate)\nThis fine golden oil comes in a small blue canister. Carefully spreading the oil over an object turns it into an animated object of the same type. For example, sprinkling it on a statue makes an animated statue. If the animated object's level would be greater than 3, the oil struggles to animate it and ultimately fails.\nThis animated object has the minion trait, meaning it can use 2 actions when you Command it. You can issue a Command for the current turn as part of the activation. The object remains animated for 1 minute before falling inert. As usual, you can have a maximum of four minions under your control.",
      "bulk": 0,
      "price": {
        "gp": 85
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-smoldering-fireballs-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "c2Oa9UbhjwAsZaPp",
      "slug": "wand-of-smoldering-fireballs-3rd-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-smoldering-fireballs.webp"
    },
    "sourceHash": "sha256:d41d1ff2fc84598b384bc150d839bdb7dfce208c57a92b2526cebaf865959ad5",
    "translatableHash": "sha256:692bbb609264bb024978a15ce4390cb23258b32a9574d5b95a70c1838a4e02ed",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Smoldering Fireballs (3rd-Rank Spell)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "This blackened, heavily burned stick smells faintly of saltpeter.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Fireball at 3rd-rank. Each creature that fails its save takes 1d6[persistent,fire] damage.\nCraft Requirements Supply a casting of fireball at 3rd-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 224,
        "uuid": "Compendium.pf2e.spells-srd.Item.Fireball",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Fireball",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Fireball",
          "sourceId": "sxQZ6yqTn0czJxVd",
          "name": "Fireball",
          "type": "spell"
        },
        "owner": {
          "sourceId": "c2Oa9UbhjwAsZaPp",
          "name": "Wand of Smoldering Fireballs (3rd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.sxQZ6yqTn0czJxVd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.sxQZ6yqTn0czJxVd",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "sxQZ6yqTn0czJxVd",
          "sourceId": "sxQZ6yqTn0czJxVd",
          "name": "Fireball",
          "type": "spell"
        },
        "owner": {
          "sourceId": "LktRviFN5ykGRdiK",
          "name": "Fireball",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:jade-bauble",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cKqZe5imzxqSnzwD",
      "slug": "jade-bauble",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/jade-bauble.webp"
    },
    "sourceHash": "sha256:d4d39356f20dd93695c5481d27ad62ba4e7a4ec7585e8e9896a5a93f980eb0a4",
    "translatableHash": "sha256:d06de271aa9368a60431e490e32ea0445e09de6bb8ffb0229d6b754b7d14588b",
    "data": {
      "schemaVersion": 1,
      "name": "Jade Bauble",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nThis bit of jade is usually carved in the shape of a duelist, or sometimes a multi-armed creature. When you activate the bauble, it magically draws the attention of foes. Until the start of your next turn, enemies within the reach of the weapon the talisman is affixed to are Off-Guard.",
      "bulk": 0,
      "price": {
        "gp": 100
      },
      "usage": "affixed-to-melee-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 367,
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
          "sourceId": "cKqZe5imzxqSnzwD",
          "name": "Jade Bauble",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:nettleweed-residue",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KdeeRCrtsDCJLfgc",
      "slug": "nettleweed-residue",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/nettleweed-residue.webp"
    },
    "sourceHash": "sha256:0c1774f217795d635c645346da9c36e45895a1c7186b49bcd27c942957085014",
    "translatableHash": "sha256:1578fddccf3180afb49a4ea7c11acb833164a91f7bcebf995f3b843d92d43005",
    "data": {
      "schemaVersion": 1,
      "name": "Nettleweed Residue",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "Concentrated sap of stinging weeds makes an effective toxin.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:27, showDC:all)\nOnset 1 minute\nMaximum Duration 6 minutes\nStage 1 3d6[poison] damage (1 minute)\nStage 2 4d6[poison] damage (1 minute)\nStage 3 6d6[poison] damage (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 75
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-crackling-lightning-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NmhKGflbT5NnKduz",
      "slug": "wand-of-crackling-lightning-3rd-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-crackling-lightning.webp"
    },
    "sourceHash": "sha256:915f927679f3ce5dd22a64ee9b315c96f3737de150ea295dc69a546e822efe7b",
    "translatableHash": "sha256:ef1e9618de7097cf154e2b7b4f884d1a2a6c516ccef85c4ed44f54a1ab352489",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Crackling Lightning (3rd-Rank Spell)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "wand"
      ],
      "description": "This wand is made of two copper plates and a ceramic center.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Lightning Bolt at 3rd-rank, but the spell's area is twice as wide (two adjacent and parallel @Template[line|distance:120|width:10]{120-foot lines}) and creatures that fail their save are Off-Guard for 1 round.\nCraft Requirements Supply a casting of lightning bolt at 3rd-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 219,
        "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Lightning Bolt",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "NmhKGflbT5NnKduz",
          "name": "Wand of Crackling Lightning (3rd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 445,
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
          "sourceId": "NmhKGflbT5NnKduz",
          "name": "Wand of Crackling Lightning (3rd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
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
          "sourceId": "AY48o7p8D4qpkO3Q",
          "name": "Lightning Bolt",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:grasping-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TFnr9Gq7VXPJu0GQ",
      "slug": "grasping-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6e0781f1fd16cf972416cc75535cd3c5e376d7e8c168d116591e6fb1c0cf043f",
    "translatableHash": "sha256:f20f9db70774a721a92bc896672f15bfb975afcfa093d09978a4c836b6751a60",
    "data": {
      "schemaVersion": 1,
      "name": "Grasping Snare",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You rig vines and ropes to hold a creature in place. The first creature to enter the square must attempt a check (reflex, showDC:all, dc:26) save with the following effects.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –5-foot status penalty to its Speed for 1 minute or until it [[/act escape show-dc=all dc=26]]{Escapes}.\nFailure The creature is Immobilized for 1 round, then takes a –5-foot status penalty to its Speed for 1 minute. Both effects end early if it Escapes (DC 26).\nCritical Failure The creature is immobilized for 1 minute or until it Escapes (DC 26).\nEffect: Grasping Snare",
      "bulk": 0,
      "price": {
        "gp": 75
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 455,
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
          "sourceId": "TFnr9Gq7VXPJu0GQ",
          "name": "Grasping Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 750,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Grasping Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Grasping Snare",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Grasping Snare",
          "sourceId": "N5L79du6FpRgc9Cd",
          "name": "Effect: Grasping Snare",
          "type": "effect"
        },
        "owner": {
          "sourceId": "TFnr9Gq7VXPJu0GQ",
          "name": "Grasping Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:surging-serum-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tslVf3qtQE7V1YvG",
      "slug": "surging-serum-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/sinew-shock-serum.webp"
    },
    "sourceHash": "sha256:7cba764bd6da441166a85348af9abc059a8f2a5cf206b8ed3528dc8205119ccb",
    "translatableHash": "sha256:ba7c72521f219ba4f78b5219af7b4d3df866e2bc231d0c74384e5d35028590bd",
    "data": {
      "schemaVersion": 1,
      "name": "Surging Serum (Moderate)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nInvoluntary jolts and surges of energy move through the drinker's body as it restores normal muscle control. When you drink this elixir, it attempts to counteract each effect that's inflicting the Clumsy or Enfeebled condition on you, using a 4th-rank counteract and a [[/r 1d20+14 #Counteract]]{+14 counteract modifier}.",
      "bulk": 0.1,
      "price": {
        "gp": 75
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 287,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": null,
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
          "sourceId": "tslVf3qtQE7V1YvG",
          "name": "Surging Serum (Moderate)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 340,
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
          "sourceId": "tslVf3qtQE7V1YvG",
          "name": "Surging Serum (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wyvern-poison",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WL4O32qFifxnMj0H",
      "slug": "wyvern-poison",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ca4e32a5ef60f72a0313885df4f816058e697719ff6f13fbbe51e4c5bd3814b6",
    "translatableHash": "sha256:b499f10cc5ac83939b56d6faaaa8541e54102c0a6821c02f59e576d0d2530d01",
    "data": {
      "schemaVersion": 1,
      "name": "Wyvern Poison",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Properly harvested, distilled, and preserved, the poison from a wyvern's sting is effective and direct.\nActivate 2 (manipulate)\nSaving Throw check (fortitude, dc:26, showDC:all)\nMaximum Duration 6 rounds\nStage 1 3d6[poison] damage (1 round)\nStage 2 3d8[poison] damage (1 round)\nStage 3 3d10[poison] damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bottled-catharsis-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XfcSVHwMA60JxUXJ",
      "slug": "bottled-catharsis-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/focus-cathartic.webp"
    },
    "sourceHash": "sha256:4bae5adc2c64d2d3368113f5f760ce75360645a1d0e583b77c332425544460b0",
    "translatableHash": "sha256:c257d37c91b310ee5d492c00d6df900b70087434af983c35e4b41f28412ea1f4",
    "data": {
      "schemaVersion": 1,
      "name": "Bottled Catharsis (Moderate)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThis drink unlocks a flood of emotions that helps reset your mental state. When you drink this elixir, the elixir attempts to counteract at 4th-rank and has a [[/r 1d20+14 #Counteract]]{+14} counteract modifier each effect on you that has the emotion trait or is inflicting the Stupefied condition on you, using the listed counteract rank and modifier.",
      "bulk": 0.1,
      "price": {
        "gp": 75
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 368,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": null,
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
          "sourceId": "XfcSVHwMA60JxUXJ",
          "name": "Bottled Catharsis (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:urn-of-ashes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3G2No6QaU1wSPTh6",
      "slug": "urn-of-ashes",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/urn-of-ashes.webp"
    },
    "sourceHash": "sha256:5303283e4f0b88e5ae63a1f1f6ca1b5e349203b0b3c77e48eec3e18c8fd624a8",
    "translatableHash": "sha256:1087de3c2c254018066b5a918622c57205a39110220f3631f4daa4f325fe32ba",
    "data": {
      "schemaVersion": 1,
      "name": "Urn of Ashes",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical",
        "void"
      ],
      "description": "This sealed pewter urn contains the ashes of a benevolent ancestor, with a sliver of lingering spirit that strives to protect you.\nActivate—Doom the Urn r (concentrate)\nTrigger You would become Doomed, or your doomed value would increase\nRequirements The ashes aren't doomed\nEffect The ashes in the urn intervene, taking the doomed condition in your place, and you don't gain or increase the value of your doomed condition. Each night when you get a full night's rest, you can reduce your own doomed condition or that of the urn, but not both.\nActivate—Spirit's Wrath 1 (attack, concentrate, manipulate)\nFrequency once per round\nEffect The urn shoots a bolt of void energy at a foe within 30 feet. Attempt a spell attack roll against the target's AC, using a modifier of [[/r 1d20+15 #Spell]]{+15} or your own spell attack modifier, whichever is higher. On a success, the bolt deals 4d4[void] damage (doubled on a critical success).",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 279,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "3G2No6QaU1wSPTh6",
          "name": "Urn of Ashes",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:onslaught-hide",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "C4XKMcHZoGzrAZBl",
      "slug": "onslaught-hide",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/rhino-hide.webp"
    },
    "sourceHash": "sha256:171dec5b12988201972085d9d053c3548bf7a473cc2fb5e951afc7792f338f4b",
    "translatableHash": "sha256:3c8c046b54038c7a56ecee3dca666ff6750b94999d4deff50961f7abee23ca7c",
    "data": {
      "schemaVersion": 1,
      "name": "Onslaught Hide",
      "itemType": "armor",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This +1 resilient hide armor is decorated with the horns of many slain beasts. It has an armor check penalty of –1 instead of –2. When you use the Sudden Charge class feat while wearing this armor, your Strike deals an additional 1d8[untyped] damage.",
      "bulk": 2,
      "price": {
        "gp": 700
      },
      "usage": "",
      "category": "medium",
      "group": "leather",
      "armor": {
        "armorClassBonus": 3,
        "dexterityCap": 2,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 159,
        "uuid": "Compendium.pf2e.feats-srd.Item.Sudden Charge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Sudden Charge",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Sudden Charge",
          "sourceId": "qQt3CMrhLkUV1wCv",
          "name": "Sudden Charge",
          "type": "feat"
        },
        "owner": {
          "sourceId": "C4XKMcHZoGzrAZBl",
          "name": "Onslaught Hide",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:enervating-powder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ca2lzxfJxvuLDrKu",
      "slug": "enervating-powder",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/lich-dust.webp"
    },
    "sourceHash": "sha256:33a6ea655421d6482a75c383ee2a9b1e95ff115b39146cd128740388b22dc85c",
    "translatableHash": "sha256:0bc6c89a9da76313ced400012d5dcb56da33167c1c5e201697161a032a4f54bf",
    "data": {
      "schemaVersion": 1,
      "name": "Enervating Powder",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "This carefully concocted mixture of fungal spores and ground bones has paralytic properties that make it a valuable poison.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:28, showDC:all)\nOnset 10 minutes\nMaximum Duration 6 minutes\nStage 1 Fatigued (1 minute)\nStage 2 5d6[poison] damage and fatigued (1 minute)\nStage 3 6d6[poison] damage, fatigued, and Paralyzed (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 410,
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
          "sourceId": "ca2lzxfJxvuLDrKu",
          "name": "Enervating Powder",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 632,
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
          "sourceId": "ca2lzxfJxvuLDrKu",
          "name": "Enervating Powder",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:earthsight-box",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kZKK4Va3e7n3p3tv",
      "slug": "earthsight-box",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:32564d544e45626b765d6594cc129a9271571e5f8d8553cd7ba678b5f916b189",
    "translatableHash": "sha256:b6e193ab0c49e105b6846c02bf9170d39dd2354252f06ffd3019cd1965db5a3a",
    "data": {
      "schemaVersion": 1,
      "name": "Earthsight Box",
      "itemType": "equipment",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "scrying"
      ],
      "description": "This fine wooden box is inlaid with Dwarven runes, with hinges and a clasp of forged iron. The box contains a few handfuls of fine sand.\nActivate—Replicate Earth 1 minute (concentrate, manipulate)\nFrequency once per day\nEffect You hold the box closed and, while envisioning the terrain, turn the box clockwise three times. When you open the box, the sand reveals, in miniature, the stone terrain surrounding you, to a range of 60 feet. This shows details of paths, hills, embankments, boulders, and even artificial structures like walls and ditches, as long as they're made of stone and earth. If you're underground, it reveals tunnels and voids in the earth within 60 feet at your current depth. The sand maintains its shape until you close the box.",
      "bulk": 0.1,
      "price": {
        "gp": 575
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spider-root",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oOXvk18K4izaJzG7",
      "slug": "spider-root",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d2e6ae261b7a65c3dcbaa25549c3d2502899d0b12a137deedeec3f5d71f61408",
    "translatableHash": "sha256:f7879de0c9a38b394b92861d7e2e5847ed053914c61b88c8edcfb5ca90566ec1",
    "data": {
      "schemaVersion": 1,
      "name": "Spider Root",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "A paste made by mashing the fine, threadlike roots of a certain creeper vine, spider root renders a victim clumsy and maladroit.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:28, showDC:all)\nOnset 1 minute\nMaximum Duration 6 minutes\nStage 1 3d6[poison] damage and Clumsy 1 (1 minute)\nStage 2 4d6[poison] damage and Clumsy 2 (1 minute)\nStage 3 6d6[poison] damage and Clumsy 3 (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 445,
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
          "sourceId": "oOXvk18K4izaJzG7",
          "name": "Spider Root",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 580,
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
          "sourceId": "oOXvk18K4izaJzG7",
          "name": "Spider Root",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 715,
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
          "sourceId": "oOXvk18K4izaJzG7",
          "name": "Spider Root",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qQpcBE7ngv7TIAW3",
      "slug": "wand-of-overflowing-life-3rd-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:4ec136000bc4845dad167b32e8e9a92e8359e6cb1dc913b4deca3064e9e6b996",
    "translatableHash": "sha256:2958c676988207d8383c2251bcf66310868747948081b01912ea4c909593ce08",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (3rd-Rank Spell)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 3rd-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 3rd-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 3rd-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 210,
        "uuid": "Compendium.pf2e.spells-srd.Item.Heal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Heal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Heal",
          "sourceId": "rfZpqmj0AIIdkVIs",
          "name": "Heal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "qQpcBE7ngv7TIAW3",
          "name": "Wand of Overflowing Life (3rd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "rfZpqmj0AIIdkVIs",
          "sourceId": "rfZpqmj0AIIdkVIs",
          "name": "Heal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "EidOfILYVrkul5DU",
          "name": "Heal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:storm-arrow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RpvH9EDquO0jS3Jz",
      "slug": "storm-arrow",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/storm-arrow.webp"
    },
    "sourceHash": "sha256:070bea552429b6053d43edf3905e49c49f335be4109005b4a85c7d08d93aec71",
    "translatableHash": "sha256:eb7eaef7865db7d478cefeda05ffac6b73e494bdd6a3fcf6475fff34bcc4e6c3",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Arrow",
      "itemType": "ammunition",
      "level": 9,
      "rarity": "common",
      "traits": [
        "air",
        "consumable",
        "electricity",
        "magical"
      ],
      "description": "Activate A (manipulate)\nThe head of this arrow is made from gleaming copper.\nWhen an activated storm arrow hits a target, it is buffeted by raging winds and struck by a bolt of lightning that deals 3d12[electricity] damage and the target must attempt a check (reflex, dc:25) saving throw. If this arrow is shot from a weapon with a shock property rune, the save DC increases to 27, though the attack doesn't benefit from the shock property rune itself.\nCritical Success The foe is unaffected.\nSuccess The foe takes half damage and isn't affected by the wind.\nFailure The foe takes full damage and is buffeted by winds for 1 round, taking a -2 circumstance penalty to ranged attack rolls and a –10-foot circumstance penalty to its fly Speed.\nCritical Failure As failure, but the foe takes double damage.",
      "bulk": 0,
      "price": {
        "gp": 130
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:guise-of-the-smirking-devil",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tr2eOlJMmBKBZtI9",
      "slug": "guise-of-the-smirking-devil",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/mask-of-the-banshee.webp"
    },
    "sourceHash": "sha256:99154b5a24b97f5f2f4fb0163ac7381e898308fd09daad334765483937992d6a",
    "translatableHash": "sha256:ad8c0b636929fe80e96d9b561edb989d44549130987dc5f4ac33d3354ac85f7e",
    "data": {
      "schemaVersion": 1,
      "name": "Guise of the Smirking Devil",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "auditory",
        "invested",
        "magical",
        "void"
      ],
      "description": "This ice-blue half-mask is adorned with a wicked silver grin that covers the wearer's mouth, leaving the rest of the face uncovered. You gain a +2 item bonus to Intimidation checks.\nActivate—Hideous Wail 2 (concentrate, manipulate)\nFrequency once per day\nEffect The mask emits a soul-chilling scream that deals 6d10[void|options:area-damage] damage to each living creature in a @Template[emanation|distance:20] (check (fortitude, dc:25, basic, options:area-effect) save).\nCraft Requirements Supply a casting of Wails of the Damned.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 660,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wails of the Damned",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wails of the Damned",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wails of the Damned",
          "sourceId": "FEsuyf203wTNE2et",
          "name": "Wails of the Damned",
          "type": "spell"
        },
        "owner": {
          "sourceId": "tr2eOlJMmBKBZtI9",
          "name": "Guise of the Smirking Devil",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:fire-jump-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "64mxKuxc9k98FkUi",
      "slug": "fire-jump-ring",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/fire-jump-ring.webp"
    },
    "sourceHash": "sha256:a621b38e3399cbac124490a431aa432475037bfe128f5e97b46617c436360178",
    "translatableHash": "sha256:fcfd87ef5a7214139742986d1f4991f18787e7752f51dae9ecac69d488e1b306",
    "data": {
      "schemaVersion": 1,
      "name": "Fire-Jump Ring",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "invested",
        "magical"
      ],
      "description": "This black, metal ring is inset with rubies that occasionally give off wisps of smoke. It grants you a +2 item bonus to Athletics checks.\nActivate—Fire Jump 2 (concentrate, manipulate, teleportation)\nFrequency once per day\nEffect You Stride (or Burrow or Fly, if you have the corresponding Speed) into any fire large enough to contain you, including magical fires. You vanish into the fire and take no damage from it. You can sense all sufficiently large fires within 100 feet of where you vanish, and you reemerge from any of those fires, either within the fire or adjacent to it. If you end your movement in the fire, it affects you as normal.",
      "bulk": 0,
      "price": {
        "gp": 940
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prognostic-veil",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7wuDdrF6HKPXyxqj",
      "slug": "prognostic-veil",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d18a5eb65f4297ac17475847c73cb2786c06704422227734032d431edc44e9bf",
    "translatableHash": "sha256:eca00c2d8d305ac5e483b49830f0c81a6e235f0b1b66b6c8a914ae30f0b274e9",
    "data": {
      "schemaVersion": 1,
      "name": "Prognostic Veil",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "focused",
        "invested"
      ],
      "description": "This gauzy purple veil is embroidered with symbols of divinatory significance. As your curse worsens, the veil ripples in an ever-increasing unseen wind. You gain a +2 item bonus to Religion checks.\nActivate—Remember the Future f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a revelation spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nActivate—Twist the Skeins of Fate r (concentrate)\nFrequency once per day\nTrigger An ally within 30 feet is about to attempt a saving throw\nRequirements You have the Cursebound condition\nEffect The ally gains a status bonus to the saving throw equal to the value of your cursebound condition.\nEffect: Twist the Skeins of Fate\nCraft Requirements You're an oracle.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 837,
        "uuid": "Compendium.pf2e.conditionitems.Item.Cursebound",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Cursebound",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Cursebound",
          "sourceId": "zXZjC8HLaRoLR17U",
          "name": "Cursebound",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7wuDdrF6HKPXyxqj",
          "name": "Prognostic Veil",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1043,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Twist the Skeins of Fate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Twist the Skeins of Fate",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Twist the Skeins of Fate",
          "sourceId": "oBOYt4Aon6Po1hwa",
          "name": "Effect: Twist the Skeins of Fate",
          "type": "effect"
        },
        "owner": {
          "sourceId": "7wuDdrF6HKPXyxqj",
          "name": "Prognostic Veil",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-the-tempest-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8Ia2jOo23XoArpJm",
      "slug": "staff-of-the-tempest-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eee143153202364e1539df4cbe2e4c9351515b041c734aea703086cf7fbcefb1",
    "translatableHash": "sha256:ced9d2a00269707f01168dfa27a2430b57131b572e76e5f4863054498d81a785",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Tempest (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A staff of the tempest is usually crafted from the wood of a tree struck by lightning. It's often gnarled and blackened with the occasional spark of electricity flashing from its length. While wielding the staff, your vision is less inhibited by stormy weather. While you hold the staff, you ignore the Concealed condition from mist, precipitation, and the like.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Electric Arc\n• 1st Hydraulic Push, Thunderstrike\n• 2nd Mist, Resist Energy (electricity only), Thunderstrike\n• 3rd Lightning Bolt, Wall of Wind\n• 4th Hydraulic Torrent, Lightning Bolt\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 900
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 315,
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
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 613,
        "uuid": "Compendium.pf2e.spells-srd.Item.Electric Arc",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Electric Arc",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Electric Arc",
          "sourceId": "kBhaPuzLUSwS6vVf",
          "name": "Electric Arc",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 694,
        "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Push",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Push",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Hydraulic Push",
          "sourceId": "jfVCuOpzC6mUrf6f",
          "name": "Hydraulic Push",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 749,
        "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Thunderstrike",
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 831,
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
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 876,
        "uuid": "Compendium.pf2e.spells-srd.Item.Resist Energy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Resist Energy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Resist Energy",
          "sourceId": "Fr58LDSrbndgld9n",
          "name": "Resist Energy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 949,
        "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Thunderstrike",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Thunderstrike",
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1031,
        "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Lightning Bolt",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1086,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Wind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Wind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wall of Wind",
          "sourceId": "it4ZsAi6XgvGcodc",
          "name": "Wall of Wind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1167,
        "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Torrent",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Hydraulic Torrent",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Hydraulic Torrent",
          "sourceId": "Y3G6Y6EDgCY0s3fq",
          "name": "Hydraulic Torrent",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1225,
        "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Lightning Bolt",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8Ia2jOo23XoArpJm",
          "name": "Staff of the Tempest (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hopeless-night-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9ftc8XfloerPcJnI",
      "slug": "wand-of-hopeless-night-4th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-hopeless-night.webp"
    },
    "sourceHash": "sha256:8a8a45f1cac946a18756ddcfa02fd69da924550cd973620a93ce8aceb031d46b",
    "translatableHash": "sha256:d2e3dc04c83b69438aa407dccf3ac8e2ef179961cf0c10925be9d43607f34240",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hopeless Night (4th-Rank Spell)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "darkness",
        "magical",
        "wand"
      ],
      "description": "This wand is a length of wrought black iron.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Darkness at 4th-rank. Each creature that ends its turn within the spell's area must succeed at a check (will, dc:27) save or become Frightened 1 (Frightened 2 on a critical failure).\nCraft Requirements Supply a casting of darkness at 4th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 203,
        "uuid": "Compendium.pf2e.spells-srd.Item.Darkness",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Darkness",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Darkness",
          "sourceId": "4GE2ZdODgIQtg51c",
          "name": "Darkness",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9ftc8XfloerPcJnI",
          "name": "Wand of Hopeless Night (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 373,
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
          "sourceId": "9ftc8XfloerPcJnI",
          "name": "Wand of Hopeless Night (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 442,
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
          "sourceId": "9ftc8XfloerPcJnI",
          "name": "Wand of Hopeless Night (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
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
          "sourceId": "66lryxcpkB64eiDg",
          "name": "Darkness",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
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
          "sourceId": "66lryxcpkB64eiDg",
          "name": "Darkness",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:mudrock-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ap2Styg25sZMx3wn",
      "slug": "mudrock-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ee83b45f68f8d88f5eb00bc3346afe246523e8b7b9d5cf2f92f7f37cbc690821",
    "translatableHash": "sha256:1191a1c1a5510b2b3c5963ea02b99cf3827d216fa30b1e6365359aa59c139f1f",
    "data": {
      "schemaVersion": 1,
      "name": "Mudrock Snare",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "kobold",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "Fired clay covers a shallow pit of thin mud interspersed with fragile vials of a quick-drying agent. The first creature to step into the square breaks through the clay and sinks into the pit, fracturing the vials and releasing the chemicals that harden the mud. That creature must attempt a check (fortitude, showDC:all, dc:29) save as the mud solidifies over its legs.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –5-foot circumstance penalty to its Speed for 1 minute or until it [[/act escape show-dc=all dc=27]]{Escapes}.\nFailure The creature is Stunned 2, and it takes a –10-foot circumstance penalty to its Speed for 1 minute or until it Escapes (DC 27).\nCritical Failure The creature is Stunned 3, and it's Immobilized for 1 minute or until it Escapes (DC 27).\nEffect: Mudrock Snare",
      "bulk": 0,
      "price": {
        "gp": 170
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 657,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 2",
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
          "sourceId": "Ap2Styg25sZMx3wn",
          "name": "Mudrock Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 877,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 3",
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
          "sourceId": "Ap2Styg25sZMx3wn",
          "name": "Mudrock Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 949,
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
          "sourceId": "Ap2Styg25sZMx3wn",
          "name": "Mudrock Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1053,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Mudrock Snare",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Mudrock Snare",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Mudrock Snare",
          "sourceId": "6p2Sjl7XxCc55ft4",
          "name": "Effect: Mudrock Snare",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Ap2Styg25sZMx3wn",
          "name": "Mudrock Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:snagging-hook-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "j9G3tnrKQ1N1dLzN",
      "slug": "snagging-hook-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/snagging-hook-snare.webp"
    },
    "sourceHash": "sha256:35f93610d0a7ad3fa5be27312a941f9c288ca1e7a322a3ab2351c1fefb9d68ad",
    "translatableHash": "sha256:f9056d554c6c6f3e0c0213c2f4dff2de3e99178d7a9654f4d05c248db8f8e50f",
    "data": {
      "schemaVersion": 1,
      "name": "Snagging Hook Snare",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "This snare snags a creature with its wicked metal hooks. The first creature to enter the square takes 5d8[piercing,5d8[slashing]]{5d8 piercing damage and 5d8 slashing damage}, with a check (reflex, showDC:all, dc:29, basic) save.\nOn a critical failure, the hooks piercing its flesh make the creature Immobilized until it successfully [[/act escape show-dc=all dc=29]]{Escapes}.",
      "bulk": 0,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 316,
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
          "sourceId": "j9G3tnrKQ1N1dLzN",
          "name": "Snagging Hook Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wolfsbane",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NRoA1HpA3ElPGBEQ",
      "slug": "wolfsbane",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:125b5f4ebc94d57d8fd9084b4fc234521c2a7a6c84a79ffaa5770b2f1b2c1a59",
    "translatableHash": "sha256:c2462558838d27cdc4f2fba60ed12ccc4185123439ac0e3655260e62f9b7d1d1",
    "data": {
      "schemaVersion": 1,
      "name": "Wolfsbane",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "Wolfsbane appears in folklore for its link to werecreatures. If you are afflicted with the curse of a werecreature and survive stage 3 of wolfsbane, you're immediately cured of the curse.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:30, showDC:all)\nOnset 10 minutes\nMaximum Duration 6 minutes\nStage 1 3d10[poison] damage (1 minute)\nStage 2 4d10[poison] damage (1 minute)\nStage 3 5d10[poison] damage (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 155
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-crackling-lightning-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oyjDCHscjcLhzall",
      "slug": "wand-of-crackling-lightning-4th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-crackling-lightning.webp"
    },
    "sourceHash": "sha256:52bb7abe4254c5d92f61cdb90638cd891bc6d6ff010375e7a59a8bcc2dbe17b6",
    "translatableHash": "sha256:eb79c13755f404ae7a94c90a031ddce68db36f0a350c11d66c7c2639d61d930f",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Crackling Lightning (4th-Rank Spell)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "wand"
      ],
      "description": "This wand is made of two copper plates and a ceramic center.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Lightning Bolt at 4th-rank, but the spell's area is twice as wide (two adjacent and parallel @Template[line|distance:120|width:10]{120-foot lines}) and creatures that fail their save are Off-Guard for 1 round.\nCraft Requirements Supply a casting of lightning bolt at 4th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 219,
        "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Lightning Bolt",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Lightning Bolt",
          "sourceId": "9AAkVUCwF6WVNNY2",
          "name": "Lightning Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oyjDCHscjcLhzall",
          "name": "Wand of Crackling Lightning (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 445,
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
          "sourceId": "oyjDCHscjcLhzall",
          "name": "Wand of Crackling Lightning (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
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
          "sourceId": "QK96rd4WACCzIxVF",
          "name": "Lightning Bolt",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:sash-of-prowess",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Rr7dAVnfpnnQPAWh",
      "slug": "sash-of-prowess",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a2c08b336b59c8135c74386948d3151e416ee3890391582646638fd793e720cc",
    "translatableHash": "sha256:a4fcaa4d8953dc23432bb6d852ab64c9e289e95f4bb82a654b490a45c116da6d",
    "data": {
      "schemaVersion": 1,
      "name": "Sash of Prowess",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "magical"
      ],
      "description": "This humble sash can be worn around the waist or across the chest. A sash of prowess often bears a coloration or a pattern that represents the monastery in which you trained but can also sport religious symbology, such as the open hand of Irori. You gain a +2 item bonus to Acrobatics and Athletics skill checks.\nActivate—Effortless Mastery f (concentrate)\nFrequency once per day\nTrigger You succeed at an Acrobatics or Athletics skill check\nEffect You critically succeed instead.\nActivate—Reserves of Inner Strength f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a qi spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nCraft Requirements You're a monk who can cast qi spells.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warleaders-bulwark",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RUEAV5LMUGFHcXcW",
      "slug": "warleaders-bulwark",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:216fbb807f3ec81bc744f3b17ae24c14360e5dc345dcca45946b8b5431b402d0",
    "translatableHash": "sha256:a6b650f4f511e17ec8e7694dce1cb46f307bb1537ccfbe530273912bf2898156",
    "data": {
      "schemaVersion": 1,
      "name": "Warleader's Bulwark",
      "itemType": "armor",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This +1 resilient breastplate is made from shining bronze overlaid with reinforcing golden panels emblazoned with images of loyal soldiers. Wearing this breastplate grants you a commanding aura. You gain a +2 item bonus to Diplomacy checks, but you take a -2 item penalty to Stealth checks to Hide and Sneak and Deception checks to Impersonate.\nActivate—Command Bravery 1 (concentrate)\nFrequency once per day\nEffect You grant allies within 100 feet a +2 status bonus to saves against fear effects for 1 minute. When you activate this ability, each affected ally who's Frightened reduces their frightened value by 1.\nEffect: Command Bravery",
      "bulk": 2,
      "price": {
        "gp": 1000
      },
      "usage": "",
      "category": "medium",
      "group": "plate",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 305,
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
          "sourceId": "RUEAV5LMUGFHcXcW",
          "name": "Warleader's Bulwark",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 354,
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
          "sourceId": "RUEAV5LMUGFHcXcW",
          "name": "Warleader's Bulwark",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 424,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "RUEAV5LMUGFHcXcW",
          "name": "Warleader's Bulwark",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 816,
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
          "sourceId": "RUEAV5LMUGFHcXcW",
          "name": "Warleader's Bulwark",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 914,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Command Bravery",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Command Bravery",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Command Bravery",
          "sourceId": "G0lG7IIZnCZtYi6v",
          "name": "Effect: Command Bravery",
          "type": "effect"
        },
        "owner": {
          "sourceId": "RUEAV5LMUGFHcXcW",
          "name": "Warleader's Bulwark",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-providence-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "T1L6XbgMqJLDv2Pi",
      "slug": "staff-of-providence-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e41af41eb8657bfc6914ca7340e56fca684374d23734f46b230cefbdecaa68be",
    "translatableHash": "sha256:7b9277708c88a7f4de5709cc6125895f2fa4271e14895c22ab20cd24a71f8865",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Providence (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A large, stylized symbol of an eye adorns the top of this wooden staff, representing the watchful eye of the divine powers. The bearer of the staff can guide and protect, seeing bounties and tragedies that could befall them in the future. When wielding this staff, you gain a +1 item bonus to Survival checks to Sense Direction or Subsist and to Religion checks to Recall Knowledge.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Guidance\n• 1st Bless, Create Water\n• 2nd Augury, Create Food, See the Unseen, Status\n• 3rd Safe Passage, Wanderer's Guide\n• 4th Cleanse Affliction, Dispelling Globe, Status\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 900
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 315,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sense Direction",
          "sourceId": "fJImDBQfqfjKJOhk",
          "name": "Sense Direction",
          "type": "action"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 374,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Subsist",
          "sourceId": "49y9Ec4bDii8pcD3",
          "name": "Subsist",
          "type": "action"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 448,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 701,
        "uuid": "Compendium.pf2e.spells-srd.Item.Guidance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Guidance",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Guidance",
          "sourceId": "izcxFQFwf3woCnFs",
          "name": "Guidance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 778,
        "uuid": "Compendium.pf2e.spells-srd.Item.Bless",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Bless",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Bless",
          "sourceId": "XSujb7EsSwKl19Uu",
          "name": "Bless",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 824,
        "uuid": "Compendium.pf2e.spells-srd.Item.Create Water",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Create Water",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Create Water",
          "sourceId": "WzLKjSw6hsBhuklC",
          "name": "Create Water",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 905,
        "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Augury",
          "sourceId": "41TZEjhO6D1nWw2X",
          "name": "Augury",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 952,
        "uuid": "Compendium.pf2e.spells-srd.Item.Create Food",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Create Food",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Create Food",
          "sourceId": "Mt6ZzkVX8Q4xigFq",
          "name": "Create Food",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1004,
        "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "See the Unseen",
          "sourceId": "jwK43yKsHTkJQvQ9",
          "name": "See the Unseen",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1059,
        "uuid": "Compendium.pf2e.spells-srd.Item.Status",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Status",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Status",
          "sourceId": "HTou8cG05yuSkesj",
          "name": "Status",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1134,
        "uuid": "Compendium.pf2e.spells-srd.Item.Safe Passage",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Safe Passage",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Safe Passage",
          "sourceId": "IFuEzfmmWyNwVbhY",
          "name": "Safe Passage",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1187,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wanderer's Guide",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wanderer's Guide",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wanderer's Guide",
          "sourceId": "ppA1StEigPLKEQqR",
          "name": "Wanderer's Guide",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1272,
        "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Cleanse Affliction",
          "sourceId": "SUKaxVZW2TlM8lu0",
          "name": "Cleanse Affliction",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1331,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispelling Globe",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispelling Globe",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispelling Globe",
          "sourceId": "JOdOpbPDl7nqvJUm",
          "name": "Dispelling Globe",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1388,
        "uuid": "Compendium.pf2e.spells-srd.Item.Status",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Status",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Status",
          "sourceId": "HTou8cG05yuSkesj",
          "name": "Status",
          "type": "spell"
        },
        "owner": {
          "sourceId": "T1L6XbgMqJLDv2Pi",
          "name": "Staff of Providence (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:nethershade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wjkw0lEUOhypYvzo",
      "slug": "nethershade",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:84bdfedd5120c96fa3b5af46e80e2827193c4079b7044480ce509ef5fd3056c6",
    "translatableHash": "sha256:9704d1ccc1dca1058318a23ffde3b5be9e6dbd9adbebfe5fd71762d2e1769f19",
    "data": {
      "schemaVersion": 1,
      "name": "Nethershade",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison",
        "void"
      ],
      "description": "Distilled from the Netherworld, this oily substance imposes tenebrous effects. The enfeebled condition from nethershade lasts for 24 hours.\nActivate 2 (manipulate)\nSaving Throw check (fortitude, dc:29, showDC:all)\nMaximum Duration 6 rounds\nStage 1 2d6[void,2d6[poison]] damage (1 round)\nStage 2 3d6[void,2d6[poison]] damage, and Enfeebled 1 (1 round)\nStage 3 3d6[void,3d6[poison]] damage, and Enfeebled 2 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 507,
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
          "sourceId": "Wjkw0lEUOhypYvzo",
          "name": "Nethershade",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 658,
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
          "sourceId": "Wjkw0lEUOhypYvzo",
          "name": "Nethershade",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:sanguine-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xyTF5YznEskKIXpp",
      "slug": "sanguine-pendant",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:742690f2299bb71b7a165ac445e18dea6858dfc3331896414bb1d5a7f3af1d73",
    "translatableHash": "sha256:25bccaa6b7a715a6526d7c3f90c0135e8d90f89f07472cc5dfafbb7cc23b8a90",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Pendant",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This clear crystal pendant contains a drop of blood from a sorcerer that expands and contracts as you cast spells. A sanguine pendant is associated with a specific sorcerer bloodline, and only sorcerers with that bloodline can invest this item. This item gains the trait matching the tradition of that bloodline. The pendant grants a +2 item bonus to both of your bloodline skills.\nActivate—Blood's Call f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a bloodline spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nCraft Requirements You're a sorcerer with the associated bloodline.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghost-charge-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "28osNZINXLWzqzUL",
      "slug": "ghost-charge-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/ghost-charge.webp"
    },
    "sourceHash": "sha256:b674c931bd2074db50a329dd4afa91c9e01bd5bccad65e4151c1763fd35dc826",
    "translatableHash": "sha256:866e8a3479ae1e1a430266a9897fbee7a1c207486a335a92ca53e25262b8db70",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Charge (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "vitality"
      ],
      "description": "Activate A Strike\nThese spring-loaded metal canisters contain a mixture of chemicals and salts that drain and disintegrate nearby undead creatures.\nA ghost charge gives a +2 item bonus to attack rolls, deals 3d8 vitality damage and 3 vitality splash damage, though as usual for vitality damage, this damage harms only undead and creatures with void healing. A primary target that takes damage from a ghost charge becomes Enfeebled 2 until the start of your next turn.\nGhost charges are designed to explode even on contact with a spiritual substance, making them ideal for damaging incorporeal undead.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d8",
        "type": "vitality"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 514,
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
          "sourceId": "28osNZINXLWzqzUL",
          "name": "Ghost Charge (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "85GqeSGXjSQwLy07",
      "slug": "wand-of-overflowing-life-4th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:e236eb14847d5bf2dfc839536644f25488e0e9abd4a5011a949f95cc2e4f8bae",
    "translatableHash": "sha256:4b4c87f7ff00b0146cde4036131bb98ac121693bbee40f21cec2b2d62e7fec9e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (4th-Rank Spell)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 4th-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 4th-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 4th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 210,
        "uuid": "Compendium.pf2e.spells-srd.Item.Heal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Heal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Heal",
          "sourceId": "rfZpqmj0AIIdkVIs",
          "name": "Heal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "85GqeSGXjSQwLy07",
          "name": "Wand of Overflowing Life (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "rfZpqmj0AIIdkVIs",
          "sourceId": "rfZpqmj0AIIdkVIs",
          "name": "Heal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "YodolDQBh087Jd91",
          "name": "Heal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemist-goggles-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8XZqdeZStFAM4XnH",
      "slug": "alchemist-goggles-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/alchemist-goggles.webp"
    },
    "sourceHash": "sha256:fa91561ad5a2109834830c139ce9f2853833c00b48bb1ea40542cdde99f14848",
    "translatableHash": "sha256:675d3ce2812be992442de1892bfaba50a28a9df2da0ec1e647c9bd51cadea21f",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemist Goggles (Greater)",
      "itemType": "equipment",
      "level": 11,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These brass goggles are engraved with flame patterns and have thick, heavy lenses.\nWhile worn, they give you a +2 item bonus to Crafting checks to Craft alchemical items. When making Strikes with alchemical bombs, you ignore lesser cover.\nIf your Strike with an alchemical bomb fails (but doesn't critically fail), you gain a +2 item bonus to the splash damage the target of the Strike takes.",
      "bulk": 0,
      "price": {
        "gp": 1400
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 157,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Craft",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Craft",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Craft",
          "sourceId": "rmwa3OyhTZ2i2AHl",
          "name": "Craft",
          "type": "action"
        },
        "owner": {
          "sourceId": "8XZqdeZStFAM4XnH",
          "name": "Alchemist Goggles (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-the-spider-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9YtYO8u5UOg4q64Y",
      "slug": "wand-of-the-spider-4th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-the-snowfields.webp"
    },
    "sourceHash": "sha256:1fd72b4afaf98d479f50160a1509ef0a5730aadbc129d41b85c5a2c28ea727d0",
    "translatableHash": "sha256:1ff979e1332e1ae9cb3f70d68d4125105d82b97d6d795526a464799ae2605285",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of the Spider (4th-Rank Spell)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "magical",
        "poison",
        "wand"
      ],
      "description": "The length of this wand is a pair of twisted giant spider legs.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Web at 4th-rank, but the strands of webbing are toxic. Any creature that fails its Athletics check or Reflex save to navigate the web takes 2d6[poison,1d6[persistent,poison]]{2d6 poison damage plus 1d6 persistent poison damage}.\nCraft Requirements Supply a casting of web at 4th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 222,
        "uuid": "Compendium.pf2e.spells-srd.Item.Web",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Web",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Web",
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        },
        "owner": {
          "sourceId": "9YtYO8u5UOg4q64Y",
          "name": "Wand of the Spider (4th-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
        "sourceIndex": 0,
        "uuid": "Compendium.pf2e.spells-srd.Item.9s5tqqXNzcoKamWx",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.9s5tqqXNzcoKamWx",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "9s5tqqXNzcoKamWx",
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        },
        "owner": {
          "sourceId": "szQb3PZpYfwcjXYR",
          "name": "Web",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
        "sourceIndex": 380,
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
          "sourceId": "szQb3PZpYfwcjXYR",
          "name": "Web",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/spell/system/description/value",
        "sourceIndex": 1505,
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
          "sourceId": "szQb3PZpYfwcjXYR",
          "name": "Web",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:blightburn-resin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Cc4SokzVBoBCkHId",
      "slug": "blightburn-resin",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:06530f011175beedb3acdf9cf12af558e7dc8f040ef840228934c0d43c5de81b",
    "translatableHash": "sha256:97eaea3d59cbbeab3d2e5172ecc0ef2508b5d0251bd4d5dea746edf525a72d72",
    "data": {
      "schemaVersion": 1,
      "name": "Blightburn Resin",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "This tacky, hardened sap is harvested from trees infected by fungal blights and exposed to open flames.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:30, showDC:all)\nOnset 1 minute\nMaximum Duration 6 rounds\nStage 1 6d6[poison] damage (1 round)\nStage 2 7d6[poison] damage (1 round)\nStage 3 9d6[poison] damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 225
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blasting-stone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dsMkvuLgpOOGLWDy",
      "slug": "blasting-stone-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c16548de0ca4d502e81339d7eb5e3f12cba60e80897b6be7964dbe0b7f14efb3",
    "translatableHash": "sha256:c9256faea2f6d22ef2d502194d29938c99fdb4087928cff8d7b3fcd3faf60f59",
    "data": {
      "schemaVersion": 1,
      "name": "Blasting Stone (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "sonic",
        "splash"
      ],
      "description": "Activate 1 Strike\nWhen this pebble hits a creature or a hard surface, it explodes with a deafening bang. A blasting stone deals 3d4 sonic damage and 3 sonic splash damage, and each creature within 10 feet of the space in which the stone exploded must succeed at a check (fortitude, dc:28, name:Greater Blasting Stone, showDC:all) saving throw with the listed DC or be Deafened until the end of its next turn. You gain a +2 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d4",
        "type": "sonic"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 431,
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
          "sourceId": "dsMkvuLgpOOGLWDy",
          "name": "Blasting Stone (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:quicksilver-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eQDTsetadI8u8Kc0",
      "slug": "quicksilver-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/quicksilver-mutagen.webp"
    },
    "sourceHash": "sha256:b85bba9acabe70c471c20f17d7bf2043ec2a904bef5c7092eada8eb22d2cc407",
    "translatableHash": "sha256:d9f026c0ccdb279a5686e7d54a96f6e02da9fb0721c4c4913040f339950586d0",
    "data": {
      "schemaVersion": 1,
      "name": "Quicksilver Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYou become swifter and nimbler but also fragile.\nBenefit You gain a +3 item bonus to Acrobatics checks, Stealth checks, Thievery checks, Reflex saves, and Dexterity-based attack rolls, and you gain a +15 foot status bonus to your Speed.\nDrawback You take damage equal to twice your level; you can't recover Hit Points lost this way by any means while the mutagen lasts. You take a -2 penalty to Fortitude saves.\nDuration 1 hour.\nEffect: Quicksilver Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 598,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Quicksilver Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Quicksilver Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Quicksilver Mutagen (Greater)",
          "sourceId": "2Bds6d4UGQZqYSZM",
          "name": "Effect: Quicksilver Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "eQDTsetadI8u8Kc0",
          "name": "Quicksilver Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bestial-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gDheph8YteBtnyKp",
      "slug": "bestial-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:77eea7b22c5947c81f487466dd65101d912f39e36123e50ae270f2dfab5d02a2",
    "translatableHash": "sha256:65d6b4031ce59f5ba92059c11d6259ba69eafeeb8e619ad9b30ca3849bb2174b",
    "data": {
      "schemaVersion": 1,
      "name": "Bestial Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour features transform into something bestial and lumbering.\nBenefit You gain a +3 item bonus to Athletics checks and unarmed attack rolls. You gain a claw unarmed attack (3d8 slashing damage) with the agile trait and a jaws unarmed attack (3d10 piercing damage). Striking runes don't modify the damage caused by these attacks.\nDrawback You take a -2 penalty to Reflex saves, Acrobatics checks, and Stealth Checks.\nDuration 1 hour.\nEffect: Bestial Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 379,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Striking",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Striking",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Striking",
          "sourceId": "DxCuJKynlnMQZHgp",
          "name": "Striking",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "gDheph8YteBtnyKp",
          "name": "Bestial Mutagen (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 644,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bestial Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bestial Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bestial Mutagen (Greater)",
          "sourceId": "kwD0wuW5Ndkc9YXB",
          "name": "Effect: Bestial Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "gDheph8YteBtnyKp",
          "name": "Bestial Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:helm-of-zeal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "h2gpUvHN3hTRS7jv",
      "slug": "helm-of-zeal",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7c884f00b1242d1578cc3a4434b56e83cd5aa8af19684ebf2da86211f66e6f8f",
    "translatableHash": "sha256:0043976ae19b0b28dc8f05c0cca8d7eea9a1178eff700fff239f1b8b4a4a6b1b",
    "data": {
      "schemaVersion": 1,
      "name": "Helm Of Zeal",
      "itemType": "equipment",
      "level": 11,
      "rarity": "common",
      "traits": [
        "divine",
        "focused",
        "invested"
      ],
      "description": "This elaborate helmet is emblazoned with the divine symbols of a deity chosen when the helmet was crafted. You gain a +2 item bonus to that deity's Divine Skill.\nActivate—Rally to the Cause f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a devotion spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nActivate—Divine Fervor f (concentrate)\nFrequency once per day\nTrigger You've just used your champion's reaction\nEffect You gain an additional reaction you can use only for your champion's reaction. You lose this reaction if you don't use it by the start of your next turn.\nCraft Requirements You're a champion of the deity represented by the helmet.",
      "bulk": 0.1,
      "price": {
        "gp": 1250
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:frost-vial-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "intVPcEzbE9o4NQd",
      "slug": "frost-vial-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/frost-vial.webp"
    },
    "sourceHash": "sha256:5b1e3123f282b215ac072ced1b92cc4a40b4d08922883f28afe77b11815c5735",
    "translatableHash": "sha256:8d98a7749fb9ff7ad1fd0498a6c685de04c5c523459ed5c1dda2fa169f3f6de9",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Vial (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "cold",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThe bright blue liquid reagents in this vial rapidly absorb heat when exposed to air. A frost vial deals 3d6 cold damage and 3 cold splash damage. On a hit, the target takes a –10-foot status penalty to its Speeds until the end of its next turn. You gain a +2 item bonus to attack rolls.\nEffect: Frost Vial",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "cold"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 379,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Frost Vial",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Frost Vial",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Frost Vial",
          "sourceId": "LdmzgBOTjCete4F7",
          "name": "Effect: Frost Vial",
          "type": "effect"
        },
        "owner": {
          "sourceId": "intVPcEzbE9o4NQd",
          "name": "Frost Vial (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:blight-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LhMXIGelSrFPYild",
      "slug": "blight-bomb-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/blight-bomb.webp"
    },
    "sourceHash": "sha256:1f7ab1a54fdf38264860363679bb81a53a120f77cbba18e5bf66fa6c38130c8d",
    "translatableHash": "sha256:8935b341d7148b7d51b7eaaba94c4b29ea7e6f0f3e9d1f663e3fae742057c8ed",
    "data": {
      "schemaVersion": 1,
      "name": "Blight Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate A Strike\nBlight bombs contain volatile toxic chemicals that rot flesh. A blight bomb deals 3d4 poison damage, 3d4 persistent poison damage, and 3 poison splash damage. You gain a +2 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d4",
        "type": "poison"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ring-of-maniacal-devices",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nLvP7U50hLqz26Uy",
      "slug": "ring-of-maniacal-devices",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f645db59bd455e48c55a05786ee7fbf40b8c7353b300d90b0aa168c887230af2",
    "translatableHash": "sha256:e0be55be9560b0645e6f46e170a38d0e34d49e69688e5b409fa3fb654d68f6fd",
    "data": {
      "schemaVersion": 1,
      "name": "Ring of Maniacal Devices",
      "itemType": "equipment",
      "level": 11,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This magic ring seems like simple tarnished brass, but it enhances your curiosity about traps and devices of all kinds.\nYou can use an Interact action to pull a Thieves' Toolkit from the ring. This toolkit appears in your hand and any part of it folds back into the ring if they would leave your possession.\nThey grant you a +2 item bonus to Thievery checks to Disable a Device and to Pick a Lock, and the ring's insights grant you the same bonus to Crafting checks to Craft and Repair snares and traps.\nActivate—Fireball Trap 10 minutes (manipulate)\nFrequency once per day\nEffect You create the effects of a Rune Trap trap ritual containing Fireball. You can have only one trapped rune from a ring of maniacal devices active at a time, even if you have multiple rings, and the rune disappears if you lose your investiture in the ring.",
      "bulk": 0,
      "price": {
        "gp": 1175
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 171,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Thieves' Toolkit",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Thieves' Toolkit",
          "sourceId": "zvLyCVD8g2PdHJAc",
          "name": "Thieves' Toolkit",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 420,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disable a Device",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disable a Device",
          "sourceId": "cYdz2grcOcRt4jk6",
          "name": "Disable a Device",
          "type": "action"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 484,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Pick a Lock",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Pick a Lock",
          "sourceId": "2EE4aF4SZpYf0R6H",
          "name": "Pick a Lock",
          "type": "action"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 608,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Craft",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Craft",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Craft",
          "sourceId": "rmwa3OyhTZ2i2AHl",
          "name": "Craft",
          "type": "action"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 658,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Repair",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Repair",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Repair",
          "sourceId": "bT3skovyLUtP22ME",
          "name": "Repair",
          "type": "action"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 905,
        "uuid": "Compendium.pf2e.spells-srd.Item.Rune Trap",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Rune Trap",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Rune Trap",
          "sourceId": "o0l57UfBm9ScEUMW",
          "name": "Rune Trap",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 977,
        "uuid": "Compendium.pf2e.spells-srd.Item.Fireball",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Fireball",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Fireball",
          "sourceId": "sxQZ6yqTn0czJxVd",
          "name": "Fireball",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nLvP7U50hLqz26Uy",
          "name": "Ring of Maniacal Devices",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bottled-lightning-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "r2iTRbt1zpkAqHj2",
      "slug": "bottled-lightning-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/bottled-lightning.webp"
    },
    "sourceHash": "sha256:eca1f90d64f0e63573befe1793b0db0ad1511286e85e33d02dce4f57c0d4acad",
    "translatableHash": "sha256:47e9cda62a3d778fa765148938fbd353bd7cba59cfdd3638f760ddc9414ec6a7",
    "data": {
      "schemaVersion": 1,
      "name": "Bottled Lightning (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "electricity",
        "splash"
      ],
      "description": "Activate A Strike\nBottled lightning is packed with volatile reagents that create a blast of electricity when they are exposed to air. Bottled lightning deals 3d6 electricity damage and 3 electricity splash damage. On a hit, the target becomes Off-Guard until the start of your next turn. You gain a +2 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "electricity"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 309,
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
          "sourceId": "r2iTRbt1zpkAqHj2",
          "name": "Bottled Lightning (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-disguise-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ThX0ntpTqonGqguT",
      "slug": "potion-of-disguise-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-disguise.webp"
    },
    "sourceHash": "sha256:6339a18deaa97b5f9dc5fb6f67e33049a01c86fffbaf0d158e5bce95859cc75c",
    "translatableHash": "sha256:635413c375dbb73fef08e187a52443110c2507466acf21598e8c3f85053e526f",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Disguise (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "polymorph",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nUpon imbibing this potion, you take on the appearance of a specific type of creature for [[/br 2d12 #hours]]{2d12 hours}. The type of creature is determined when the potion is created. For example, you might have a potion of elf disguise or potion of frog disguise. Drinking the potion doesn't impart the knowledge of how long the effect lasts; the GM rolls the duration in secret.\nThe disguise doesn't change your traits or statistics, nor does it give you any of the special abilities of the creature you're imitating. It might affect what items you can hold or wear (for example, your new form might lack opposable thumbs). The potion shrinks you down to a minimum of size Tiny, or increases your size if the creature is larger than you, to a maximum of Large. This does not change any of your statistics, with the exception of reducing your reach to 0 as a Tiny creature. The creature has to be of a specific kind, such as \"leopard\" or \"lion\" rather than just \"cat\", or \"fire giant\" or \"ogre\" rather than just \"giant\", but the potion can't cause you to mimic a specific individual creature.\nThe effects of this potion use the same rules as the Impersonate activity of Deception. Onlookers always assume you're the chosen type of creature unless they're actively Seeking. You gain a +4 status bonus to your Deception DC against such Perception checks and add your level even if untrained.\nWhile drinking a greater potion of disguise, if you picture the specific form you want to transform into, the potion will change you into that form. You can attempt to Impersonate a specific individual, though you still need to roll Deception.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1270,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Impersonate",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Impersonate",
          "sourceId": "AJstokjdG6iDjVjE",
          "name": "Impersonate",
          "type": "action"
        },
        "owner": {
          "sourceId": "ThX0ntpTqonGqguT",
          "name": "Potion of Disguise (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:juggernaut-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TMtQnY6yvIRCpK9v",
      "slug": "juggernaut-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:663e81868ff59e724c1a5688169bf42c230d261a2d32f02df00e32df597ec542",
    "translatableHash": "sha256:31d74255555ba4bdf0421c81c289b4b4df75216d03a36d40952e32962ad79042",
    "data": {
      "schemaVersion": 1,
      "name": "Juggernaut Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour body becomes sturdy and ponderous.\nBenefit You gain a +3 item bonus to Fortitude saves and 30 temporary Hit Points. Whenever you are at maximum Hit Points for at least 1 full minute, you regain the temporary Hit Points. When you roll a success on a Fortitude save, you get a critical success instead.\nDrawback You take a -2 penalty to Will saves, Perception checks and initiative rolls.\nDuration 1 hour.\nEffect: Juggernaut Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 578,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Juggernaut Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Juggernaut Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Juggernaut Mutagen (Greater)",
          "sourceId": "xLilBqqf34ZJYO9i",
          "name": "Effect: Juggernaut Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "TMtQnY6yvIRCpK9v",
          "name": "Juggernaut Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:silvertongue-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uggpIk6vguWFXVli",
      "slug": "silvertongue-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c4d8a0de1b20f8d5ca797cc57232cf0fb5b5308af7537a863ff6e0006c49fce7",
    "translatableHash": "sha256:9c749f967bb9425a29cc3ac8c7205bacf01e85f0b6367719b88d90fb069b43c6",
    "data": {
      "schemaVersion": 1,
      "name": "Silvertongue Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour features become striking, and your voice becomes musical and commanding, though emotion clouds your reason.\nBenefit You gain a +3 item bonus to Deception, Diplomacy, Intimidation and Performance checks. Your critical failures with any of these skills become failures instead.\nDrawback You take a -2 item penalty to Arcana, Crafting, Lore, Occultism, and Society checks. Choose one skill in which you are trained; for the duration, you become untrained in that skill. All your failures to Recall Knowledge become critical failures.\nDuration 1 hour.\nEffect: Silvertongue Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 631,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "uggpIk6vguWFXVli",
          "name": "Silvertongue Mutagen (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 762,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Silvertongue Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Silvertongue Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Silvertongue Mutagen (Greater)",
          "sourceId": "oAewXfq9c0ecaSfw",
          "name": "Effect: Silvertongue Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "uggpIk6vguWFXVli",
          "name": "Silvertongue Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:drakeheart-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WuzLBK78DgIt8SsN",
      "slug": "drakeheart-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/drakeheart-mutagen.webp"
    },
    "sourceHash": "sha256:d7d5f064bec734b85017bf574d6d9d69de531e10a45dc93d8bff9832fa057dd9",
    "translatableHash": "sha256:ef116afbefbaaa7bec55696b44ce614892606569f7547cbd894418fa41a5f517",
    "data": {
      "schemaVersion": 1,
      "name": "Drakeheart Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour skin grows scales like a drake, and your eyesight become sharp and your pupils slitted, but your mind and reflexes slow.\nBenefit You gain +6 item bonus to AC, a Dexterity cap of +2 (as usual, use your lowest Dexterity cap if you have more than one), and a +3 item bonus to Perception checks. If you're wearing armor, you still calculate your proficiency bonus to AC based on your proficiency in the armor you're wearing, even if the drakeheart mutagen has a higher item bonus. You also gain the Final Surge action.\nDrawback You take a -1 penalty to Will saves, Reflex saves, and all skill checks to Recall Knowledge.\nDuration 1 hour or until you use Final Surge, whichever comes first.\nEffect: Drakeheart Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 614,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Final Surge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Final Surge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Final Surge",
          "sourceId": "EHa0owz6mccnmSBf",
          "name": "Final Surge",
          "type": "action"
        },
        "owner": {
          "sourceId": "WuzLBK78DgIt8SsN",
          "name": "Drakeheart Mutagen (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 782,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "WuzLBK78DgIt8SsN",
          "name": "Drakeheart Mutagen (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 940,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Drakeheart Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Drakeheart Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Drakeheart Mutagen (Greater)",
          "sourceId": "qwoLV4awdezlEJ60",
          "name": "Effect: Drakeheart Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "WuzLBK78DgIt8SsN",
          "name": "Drakeheart Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:serene-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Yej7lnnDYDZybGqo",
      "slug": "serene-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/serene-mutagen.webp"
    },
    "sourceHash": "sha256:670915563cd1e5a7d93ffe14c6973ff1d212bad355abe3df76502a90f7bfee53",
    "translatableHash": "sha256:ac6c1630786d1eb4cc0deecd2412f78a319a64ef4521252544676578fa4d71a7",
    "data": {
      "schemaVersion": 1,
      "name": "Serene Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYou gain inner serenity, but you find violence off-putting.\nBenefit You gain a +3 item bonus to Will saves and Perception, Medicine, Nature, Religion, and Survival checks. This bonus improves to +4 when you attempt Will saves against mental effects. When you roll a success on a Will save against a mental effect, you get a critical success instead.\nDrawback You take a -1 penalty to attack rolls and save DCs of offensive spells, and a -1 penalty per damage die to all weapon, unarmed attack, and spell damage.\nDuration 1 hour.\nEffect: Serene Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 698,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Serene Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Serene Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Serene Mutagen (Greater)",
          "sourceId": "jw6Tr9FbErjLAFLQ",
          "name": "Effect: Serene Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Yej7lnnDYDZybGqo",
          "name": "Serene Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:cognitive-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZGojRKG1yYiVWemR",
      "slug": "cognitive-mutagen-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e0ab9fd83121f65dac2c45d6921d549ca7d443d2e79982a003bc3eb89e73c191",
    "translatableHash": "sha256:5c74881123b25fe59b44e0bcaaf78520bc8469475410a1b497eaab6b68b31814",
    "data": {
      "schemaVersion": 1,
      "name": "Cognitive Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour mind becomes clear, but physical matters seem ephemeral.\nBenefit You gain a +3 item bonus to Arcana, Crafting, Lore, Occultism, and Society checks and all checks to Recall Knowledge. Your critical failures on Recall Knowledge checks become failures instead. You become trained in one Intelligence-based skill [Arcana, Crafting, Lore, Occultism, Society], chosen at creation.\nDrawback You take a -2 penalty to weapon and unarmed attack rolls, Athletics checks, and acrobatics checks. You can carry 2 less Bulk than normal before becoming encumbered, and the maximum Bulk you can carry is reduced by 4.\nDuration 1 hour.\nEffect: Cognitive Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 284,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Recall Knowledge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Recall Knowledge",
          "sourceId": "1OagaWtBpVXExToo",
          "name": "Recall Knowledge",
          "type": "action"
        },
        "owner": {
          "sourceId": "ZGojRKG1yYiVWemR",
          "name": "Cognitive Mutagen (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 832,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Cognitive Mutagen (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Cognitive Mutagen (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Cognitive Mutagen (Greater)",
          "sourceId": "qit1mLbJUyRTYcPU",
          "name": "Effect: Cognitive Mutagen (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ZGojRKG1yYiVWemR",
          "name": "Cognitive Mutagen (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:witchwarg-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2prxM8Q0F4sdSwPx",
      "slug": "witchwarg-elixir-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f545920d032464a4c129ac98b73d47ed0f9af40c400d0a44205240fc2eb9a9c7",
    "translatableHash": "sha256:11d4b03f52c6d0d8b9cfaed8926f6e2c1ad24d896c56d84eccb31a931f9dbbf2",
    "data": {
      "schemaVersion": 1,
      "name": "Witchwarg Elixir (Moderate)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThis elixir warms your core and improves your circulation. For 24 hours, you are protected from the effects of severe cold. You're also protected from extreme cold.",
      "bulk": 0.1,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:four-ways-dogslicer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3oexArva2aEm69WV",
      "slug": "four-ways-dogslicer",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/four-ways-dogslicer.webp"
    },
    "sourceHash": "sha256:6f79e686ab8caf4899286b8d64eb80345bb5b766d8fe6b9b8dc6b19a010a0c09",
    "translatableHash": "sha256:ace617db58a56783cfedac2b6bf07fee2068d25ebc4160a88127f1b0ce216e67",
    "data": {
      "schemaVersion": 1,
      "name": "Four-Ways Dogslicer",
      "itemType": "weapon",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "backstabber",
        "cold",
        "electricity",
        "finesse",
        "fire",
        "goblin",
        "magical"
      ],
      "description": "This +2 striking dogslicer is obviously the work of a brilliant but scrappy artisan who valued versatility over safety. Four toothy gems line the blade's cutting edge, three of which glow-one with fiery red light, one with a chill blue, and one that gives off sparks-while the last is a glistening black. Each of these gems embodies a weapon property rune, but only one rune can be active at a time.\nActivate-Gem Twist 1 (manipulate)\nEffect You twist the gem along the blade corresponding with the desired weapon rune: red for flaming, blue for frost, or yellow for shock. You take 1d6[untyped] damage of the type the chosen rune deals. You can instead twist the black gem to disable the active property rune, taking no damage.",
      "bulk": 0.1,
      "price": {
        "gp": 1700
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
    "contentId": "pf2e:item:equipment-srd:incense-of-distilled-death",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4RKfLoqVluZGWzLc",
      "slug": "incense-of-distilled-death",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/incense-of-distilled-death.webp"
    },
    "sourceHash": "sha256:f7b4b37bc6542b913b35c4492a2ae7c312d55ae79f8d77946d9cec27081a61f8",
    "translatableHash": "sha256:11958af2fee32251d2e0a8cbfa53a981d098779356bde4264c49126b50b4e331",
    "data": {
      "schemaVersion": 1,
      "name": "Incense of Distilled Death",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "void"
      ],
      "description": "Activate 1 (manipulate)\nThis black incense smells of fresh earth and ash. You activate the incense by lighting it, whereupon it fills a @Template[emanation|distance:10] with oily smoke and potent void energy. Undead creatures, including incorporeal undead, gain fast healing 4 while in the area; though this healing comes from void energy, it doesn't negatively impact living creatures. Once lit, the incense burns for 1 minute, and it can't be extinguished.",
      "bulk": 0,
      "price": {
        "gp": 350
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:surging-serum-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "62HxCEDwhlZaeR0Q",
      "slug": "surging-serum-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/sinew-shock-serum.webp"
    },
    "sourceHash": "sha256:c8eacfb62ba65e074e7a317b2fe3c417da4f1a685994c14d701490dcf73790c5",
    "translatableHash": "sha256:4772b36de27890297e2190af470e3f35cf65b7eada504b0de9cb727772174aff",
    "data": {
      "schemaVersion": 1,
      "name": "Surging Serum (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nInvoluntary jolts and surges of energy move through the drinker's body as it restores normal muscle control. When you drink this elixir, it attempts to counteract each effect that's inflicting the Clumsy or Enfeebled condition on you, using a 6th-rank counteract and a [[/r 1d20+19 #Counteract]]{+19 counteract modifier}.",
      "bulk": 0.1,
      "price": {
        "gp": 325
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 287,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": null,
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
          "sourceId": "62HxCEDwhlZaeR0Q",
          "name": "Surging Serum (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 340,
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
          "sourceId": "62HxCEDwhlZaeR0Q",
          "name": "Surging Serum (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bleeding-spines-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9Kk6P7idLGRhZJ2q",
      "slug": "bleeding-spines-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ceae56cf6dac063811652204e5f701683bd4cda590acb394709fac7509756c5a",
    "translatableHash": "sha256:1addb9364f07ba83630f32a202b26e12ab99454b947592d6985a3d9a1f5e44a4",
    "data": {
      "schemaVersion": 1,
      "name": "Bleeding Spines Snare",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "When a creature enters the square, thorny spines protrude out to stab it, dealing 8d8[piercing,2d8[bleed]]{8d8 piercing damage and 2d8 persistent bleed damage}. The creature must attempt a check (reflex, showDC:all, dc:31, basic). After the initial trigger, the spines retract and protrude again repeatedly for 1 minute, forcing any creature that enters the space or ends its turn in the space to take damage from the spines (attempting the same basic Reflex save).",
      "bulk": 0,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:stunning-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "a2XaerM1KkPyLIPM",
      "slug": "stunning-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:03e0e2e078440af0b6fedb73ff98817a55f5841de38f3cea11820431676ff202",
    "translatableHash": "sha256:b295b80c8291ebafb39cbafa2f4ac76f1d4c8c542b3e10ce6a2861032388c380",
    "data": {
      "schemaVersion": 1,
      "name": "Stunning Snare",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You rig a snare to disorient a creature with a quick bash, leaving it with little ability to defend itself. The trap deals 10d6[bludgeoning] damage to the first creature to enter its square; that creature must attempt a check (reflex, showDC:all, dc:32) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Off-Guard for 1 round and Stunned 1.\nFailure The creature takes full damage and is off-guard for 1 round and Stunned 2.\nCritical Failure The creature takes double damage and is off-guard for 1 minute and Stunned 4.",
      "bulk": 0,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 414,
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
          "sourceId": "a2XaerM1KkPyLIPM",
          "name": "Stunning Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 483,
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
          "sourceId": "a2XaerM1KkPyLIPM",
          "name": "Stunning Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 642,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 2",
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
          "sourceId": "a2XaerM1KkPyLIPM",
          "name": "Stunning Snare",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 813,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stunned",
        "label": "Stunned 4",
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
          "sourceId": "a2XaerM1KkPyLIPM",
          "name": "Stunning Snare",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:balisse-feather",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Do8vjuUBOslgPtyw",
      "slug": "balisse-feather",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:383414eda058033cba5d393671d75419e19e9e3f3ac6a0a88e1fa7cb495acb2e",
    "translatableHash": "sha256:b2e01aa7e71f2e7400403d191154d19bcc8f1820d45c40401a0d32ca07ae9e43",
    "data": {
      "schemaVersion": 1,
      "name": "Balisse Feather",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "holy",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to a weapon\nActivate F (concentrate)\nTrigger You deal damage using the affixed weapon to a creature that has the unholy trait or that you witnessed harm an ally, an innocent, or a noncombatant within the last minute.\nThis long, fire-red feather smolders from the weapon it adorns. When you activate the feather, the creature you damaged burns with sacred light. The creature must succeed at a check (will, dc:29, showDC:all) save or take a –2 status penalty to AC and saving throws and reduce its resistances by 5. These effects last until the end of your next turn. This item has no effect on a creature with the holy trait.\nEffect: Balisse Feather",
      "bulk": 0,
      "price": {
        "gp": 400
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 759,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Balisse Feather",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Balisse Feather",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Balisse Feather",
          "sourceId": "8wbfex9Hr9N1AGO5",
          "name": "Effect: Balisse Feather",
          "type": "effect"
        },
        "owner": {
          "sourceId": "Do8vjuUBOslgPtyw",
          "name": "Balisse Feather",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:berserkers-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DwLaGtbBdCh2NFbT",
      "slug": "berserkers-cloak",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:94628c76ece2c6d5fd7ce4d3af18c8df0d4e99cdaad3cea74d8175d64bd65d35",
    "translatableHash": "sha256:cfae0ca43d0f1e12ef005c1cdc247e10d8125d534cfea5d4ba0bb01fe56858bd",
    "data": {
      "schemaVersion": 1,
      "name": "Berserker's Cloak",
      "itemType": "equipment",
      "level": 12,
      "rarity": "common",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "This bearskin includes the head and bared teeth of the mighty creature from which it was taken. When worn, the cloak drapes over your head and around your shoulders, imbuing you with a bear's ferocity.\nIf you have the Rage action, while raging you grow jaws that deal 1d10 piercing damage and claws that deal 1d6 slashing damage and have the agile trait. This transformation is a morph effect, and both the jaws and claws are unarmed attacks in the brawling weapon group. You gain the benefits of a +1 weapon potency rune and a striking rune with these attacks (gaining a +1 item bonus to attack rolls and increasing the weapon damage dice by one).\nIf you have an animal instinct and the bestial rage instinct ability, instead of gaining these unarmed attacks, your unarmed attacks from the bestial rage instinct ability gain the benefits of a +2 weapon potency rune and a greater striking rune (granting a +2 item bonus to attack rolls and increasing the weapon damage dice by two).",
      "bulk": 1,
      "price": {
        "gp": 2000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 228,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Rage",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Rage",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Rage",
          "sourceId": "Ah5g9pDwWF9b9VW9",
          "name": "Rage",
          "type": "action"
        },
        "owner": {
          "sourceId": "DwLaGtbBdCh2NFbT",
          "name": "Berserker's Cloak",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:cooling-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EEJiqzU89Ofk7dr6",
      "slug": "cooling-elixir-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/salamander-elixir.webp"
    },
    "sourceHash": "sha256:851a6b23ba69f4cb41cb31dfc254da30a9ca03bb9c228e85656304cab4446e95",
    "translatableHash": "sha256:dfcafdb2242b3e67f904cf5cfeef157d34c338363d4e6211794b1878d08d8c2f",
    "data": {
      "schemaVersion": 1,
      "name": "Cooling Elixir (Moderate)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThis elixir is made from salamander scales to withstand fire. For 24 hours, you are protected from the effects of severe heat. You're also protected from extreme heat.",
      "bulk": 0.1,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-fire-retaliation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hMUYvp0neF0LAFqc",
      "slug": "potion-of-fire-retaliation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-fire-retalliation.webp"
    },
    "sourceHash": "sha256:a1e60e6fb5d4f6dcabc4bbb685d2eb22b37952f9fdd2d10f9bc27564ac90bdd0",
    "translatableHash": "sha256:c6691454eacfd76892d213ad2af37eb7f9096c0d0055e3fdc63290d3516debc7",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Fire Retaliation (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of fire retaliation, you glow with a faint aura of fire energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes fire damage.\nThe aura deals 3d6[fire] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cave-worm-venom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iRDCa4OVSTGUD3vi",
      "slug": "cave-worm-venom",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:57a83b0a9ca6450b0128156040ce7f99de8b6e7597cbf7e6423893b4d89a9478",
    "translatableHash": "sha256:d36ce064283e4ece6c60391ca2de34d9e1e5bae6f564b988fc8c1117738969d5",
    "data": {
      "schemaVersion": 1,
      "name": "Cave Worm Venom",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Venom from enormous cave worms leaves a victim weakened.\nActivate 2 (manipulate)\nSaving Throw check (fortitude, dc:32, showDC:all)\nMaximum Duration 6 rounds\nStage 1 5d6[poison] damage and Enfeebled 2 (1 round)\nStage 2 6d6[poison] damage and enfeebled 2 (1 round)\nStage 3 8d6[poison] damage and enfeebled 2 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 333,
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
          "sourceId": "iRDCa4OVSTGUD3vi",
          "name": "Cave Worm Venom",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:crystal-shards-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ivaL0xt33k6QNwQK",
      "slug": "crystal-shards-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/crystal-shards.webp"
    },
    "sourceHash": "sha256:99dc401cec88970349d25ef219309f226ee88e081fb434b3a6ad574f0baba9c0",
    "translatableHash": "sha256:ea5d80731a505a1b7974869a78c4a02e298a5f1e7de62032387fc1abd5f4bb80",
    "data": {
      "schemaVersion": 1,
      "name": "Crystal Shards (Greater)",
      "itemType": "weapon",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate A Strike\nThis flask holds a pressurized red-brown gas flecked with bits of sublimated crystal. You gain a +2 item bonus to attack rolls. When the bomb explodes, it deals 3d4[piercing] damage and (5[splash)[piercing]]{5 piercing splash damage} as the mixture suddenly turns into solid crystals flying at high speeds.\nOn a hit, the target takes 1[persistent,bleed] damage from the crystals embedded in its flesh. As long as the bleed damage persists, the target also takes a –5-foot penalty to its speed. The target can spend an Interact action to remove the crystals, reducing the DC to stop the bleeding.",
      "bulk": 0.1,
      "price": {
        "gp": 350
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
    "contentId": "pf2e:item:equipment-srd:potion-of-acid-retaliation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jVmTtUeNxDZMP5dU",
      "slug": "potion-of-acid-retaliation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-acid-retalliation.webp"
    },
    "sourceHash": "sha256:3d354ebe845abe5354aca2c3d45dd25b6ea40a9d9aa05741f61a9d9fab9c3148",
    "translatableHash": "sha256:b11eefdb294e2028141ef33055be31b59ea4f2d62308b53450b1a953aab4b2e6",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Acid Retaliation (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of acid retaliation, you glow with a faint aura of acid energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes acid damage.\nThe aura deals 3d6[acid] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:iron-equalizer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KrtZmC3qfZIGXu76",
      "slug": "iron-equalizer",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/iron-equalizer.webp"
    },
    "sourceHash": "sha256:ce3a11749f03552e4b3be7efa3c5aacf84e6a9a26ddd91ad848146cd95e1f4b0",
    "translatableHash": "sha256:7ee1d205d545377563cf372703e6e506a919492c56546b1a1bb86c8db554e58b",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Equalizer",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to a weapon\nActivate A (manipulate)\nThis small iron band has a shifting weight that helps equalize the affixed weapon's balance. When you activate it, you use Certain Strike, as the fighter feat. You must meet the normal requirements, including those of the press trait.\nIf you have the Certain Strike feat, the failure effect increases to deal the weapon's normal damage.",
      "bulk": 0,
      "price": {
        "gp": 400
      },
      "usage": "affixed-to-melee-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 263,
        "uuid": "Compendium.pf2e.feats-srd.Item.Certain Strike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Certain Strike",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Certain Strike",
          "sourceId": "h5DzKmKDADGhvmF9",
          "name": "Certain Strike",
          "type": "feat"
        },
        "owner": {
          "sourceId": "KrtZmC3qfZIGXu76",
          "name": "Iron Equalizer",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-impossible-visions-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KxSyomQx7rpwqemP",
      "slug": "staff-of-impossible-visions-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0a0d2acbad0b0d2742710f0ee34ba8e70301aad43008da8bf0d70994684830cf",
    "translatableHash": "sha256:adc3bdb23c08e2e27cb0e6a851bf5c7e586b0270ebd9dd6bc5aba08c6cf502b2",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Impossible Visions (Greater)",
      "itemType": "weapon",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This bizarre staff is made from oak, capped with a cluster of eye-shaped gemstones that seem to move and undulate at the corner of your vision. While wielding the staff, you can peer through the eyes on the staff rather than your own, using your normal visual senses (including any benefits of spells like See the Unseen). You can maneuver the staff to see things around corners, at higher elevations, or in places where the staff can fit but your head can't. This doesn't provide sufficient line of effect to target creatures around corners. The eyes are as vulnerable as your eyes and can be affected by anything that alters your vision, such as a blinding flash of light.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Fear, Phantom Pain\n• 2nd Augury, Paranoia\n• 3rd Hypnotize, Paralyze\n• 4th Countless Eyes, Vision of Death\n• 5th Strange Geometry\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 1800
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 309,
        "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.See the Unseen",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "See the Unseen",
          "sourceId": "jwK43yKsHTkJQvQ9",
          "name": "See the Unseen",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 912,
        "uuid": "Compendium.pf2e.spells-srd.Item.Daze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Daze",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Daze",
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 985,
        "uuid": "Compendium.pf2e.spells-srd.Item.Fear",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Fear",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Fear",
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1030,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantom Pain",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantom Pain",
          "sourceId": "R8bqnYiThB6MYTxD",
          "name": "Phantom Pain",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1111,
        "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Augury",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Augury",
          "sourceId": "41TZEjhO6D1nWw2X",
          "name": "Augury",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1158,
        "uuid": "Compendium.pf2e.spells-srd.Item.Paranoia",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Paranoia",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Paranoia",
          "sourceId": "Mkbq9xlAUxHUHyR2",
          "name": "Paranoia",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1235,
        "uuid": "Compendium.pf2e.spells-srd.Item.Hypnotize",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Hypnotize",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Hypnotize",
          "sourceId": "K2WpC3FFoHrqX9Q5",
          "name": "Hypnotize",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1285,
        "uuid": "Compendium.pf2e.spells-srd.Item.Paralyze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Paralyze",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Paralyze",
          "sourceId": "DCQHaLrYXMI37dvW",
          "name": "Paralyze",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1362,
        "uuid": "Compendium.pf2e.spells-srd.Item.Countless Eyes",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Countless Eyes",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Countless Eyes",
          "sourceId": "ykyKclKTCMp2SFXa",
          "name": "Countless Eyes",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1417,
        "uuid": "Compendium.pf2e.spells-srd.Item.Vision of Death",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Vision of Death",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Vision of Death",
          "sourceId": "Jmxru8zMdYMRuO5n",
          "name": "Vision of Death",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1501,
        "uuid": "Compendium.pf2e.spells-srd.Item.Strange Geometry",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Strange Geometry",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Strange Geometry",
          "sourceId": "m4Mc5XbdML92BKOE",
          "name": "Strange Geometry",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KxSyomQx7rpwqemP",
          "name": "Staff of Impossible Visions (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:absolute-solvent-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mR9RD9S08jIX1IPm",
      "slug": "absolute-solvent-moderate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/universal-solvent.webp"
    },
    "sourceHash": "sha256:074f9d5b5ea382498429d47756570d5d935f39c56bdb6400563e0da82ed5ad0f",
    "translatableHash": "sha256:fd46fcb84bb96b617a47cbf571edc8fc4eae1a419f433d0dfbe664b699ab1b65",
    "data": {
      "schemaVersion": 1,
      "name": "Absolute Solvent (Moderate)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nOriginally formulated as a means of dissolving Everlasting Adhesive, this powerful solvent can break almost any adhesive's grip. As absolute solvent is particularly effective against everlasting adhesive, it automatically dissolves everlasting adhesive. It attempts to counteract any other adhesives, such as Glue Bombs, at 6th-rank and has a counteract modifier of [[/r 1d20+19 #Counteract]]{+19}.",
      "bulk": 0.1,
      "price": {
        "gp": 325
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 137,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Everlasting Adhesive",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Everlasting Adhesive",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Everlasting Adhesive",
          "sourceId": "7IrQPyMm76nLVoXx",
          "name": "Everlasting Adhesive",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "mR9RD9S08jIX1IPm",
          "name": "Absolute Solvent (Moderate)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 441,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Glue Bomb (Lesser)",
        "label": "Glue Bombs",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Glue Bomb (Lesser)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Glue Bomb (Lesser)",
          "sourceId": "T6Appwwl6nUl56Xj",
          "name": "Glue Bomb (Lesser)",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "mR9RD9S08jIX1IPm",
          "name": "Absolute Solvent (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:scything-blade-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mWXaROc9ytjdGVVP",
      "slug": "scything-blade-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26c2d7b1a104656684c4337fdc2b201ce560738e08998c4820bbc0fcfa701f91",
    "translatableHash": "sha256:a169cd03fb367ee0db710563481ec921ad6d100b5347c93c131bcc681e5569d1",
    "data": {
      "schemaVersion": 1,
      "name": "Scything Blade Snare",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "This snare sends a powerful series of scything blades to slice through a creature entering the snare's square, dealing 10d8[slashing] damage (check (reflex, showDC:all, dc:32, basic) save).",
      "bulk": 0,
      "price": {
        "gp": 320
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-electricity-retaliation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QsYfjRMBz48H6UAp",
      "slug": "potion-of-electricity-retaliation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-electricity-retalliation.webp"
    },
    "sourceHash": "sha256:26dfce4c25c3d8968576ef165547c3922eb508c0f73f288b8d813160489aeae8",
    "translatableHash": "sha256:b7fda295a5f84254e66fe02b996c39a13caf811f3422c793aaa907bb1516e071",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Electricity Retaliation (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of electricity retaliation, you glow with a faint aura of electrical energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes electricity damage.\nThe aura deals 3d6[electricity] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  }
]
