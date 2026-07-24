import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_01_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:buckler",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1k3AsSW7lpU0kEpY",
      "slug": "buckler",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f036d5d73f80d2924af6b72c82af771f265096460c498ef6043458d1f84ec932",
    "translatableHash": "sha256:2637a6de42d5a46f4f1cd7d119a1d8697ddd0dbed3539edae91c394322740aa3",
    "data": {
      "schemaVersion": 1,
      "name": "Buckler",
      "itemType": "shield",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This very small shield is a favorite of duelists and quick, lightly armored warriors. It's typically made of steel and strapped to your forearm. You can Raise a Shield with your buckler as long as you have that hand free or are holding a light object that's not a weapon in that hand.\nHardness | HP | BT |\n3 | 6 | 3 |",
      "bulk": 0.1,
      "price": {
        "gp": 1
      },
      "usage": "",
      "category": "shield",
      "group": "buckler"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gnome-hooked-hammer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1U7Laa7Yt7i3G77L",
      "slug": "gnome-hooked-hammer",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/gnome-hooked-hammer.webp"
    },
    "sourceHash": "sha256:2c050152c00a4aa14d5e57c3da3bf3113545cd407bd6db57716cd8dbe323941d",
    "translatableHash": "sha256:bea7fe4873e406336dcf5e0b8f076774e2113ed995c84851e4625db0b88e681a",
    "data": {
      "schemaVersion": 1,
      "name": "Gnome Hooked Hammer",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "gnome",
        "trip",
        "two-hand-d10",
        "versatile-p"
      ],
      "description": "This gnome tool and weapon features a hammer at one end and a curved pick on the other. It's such a strange and awkward weapon that others think the gnomes are slightly erratic for using it.",
      "bulk": 1,
      "price": {
        "gp": 2
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:adventurers-pack",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2req0jGaxz8hScdB",
      "slug": "adventurers-pack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3c854b1eeceb0bd621eab1a28d5832ef422555ca21882a9307e187984482146c",
    "translatableHash": "sha256:ce7a41f31395d9a4b12269bb0c2208e2d45ad32672aa6a87eca690e86f4ba799",
    "data": {
      "schemaVersion": 1,
      "name": "Adventurer's Pack",
      "itemType": "kit",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This item is the starter kit for an adventurer, containing the essential items for exploration and survival. The Bulk value is for the entire pack together, but see the descriptions of individual items as necessary.\nThe pack contains the following items: a backpack, a bedroll, 10 pieces of chalk, flint and steel, 50 feet of rope, 2 weeks' rations, soap, 5 torches, and a waterskin.",
      "bulk": 0,
      "price": {
        "sp": 15
      },
      "usage": "",
      "category": "kit",
      "group": "kit"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:backpack",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3lgwjrFEsQVKzhh7",
      "slug": "backpack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:501e693d828d17a69097b97a233ff0a0ffc3ce28ce31cd104f2d033ccfe61ebd",
    "translatableHash": "sha256:a6e07b71f99c59b1a6688820046ada4e879a5722781f043436d9344ec3641207",
    "data": {
      "schemaVersion": 1,
      "name": "Backpack",
      "itemType": "container",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A backpack holds up to 4 Bulk of items and the first 2 Bulk of these items don't count against your Bulk limits. If you're carrying or stowing the pack rather than wearing it on your back, its Bulk is light instead of negligible",
      "bulk": 0,
      "price": {
        "sp": 1
      },
      "usage": "wornbackpack",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fishing-tackle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3tOyV4VZEZhwnAMO",
      "slug": "fishing-tackle",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b8f905d2c85bb332327a996f5a12222f09358f38c748d753dba50e7dff81eb3a",
    "translatableHash": "sha256:efc34ef55098ff8b5810a5fa2a88b0d9d89d100caa796b74ddf289dcac68300a",
    "data": {
      "schemaVersion": 1,
      "name": "Fishing Tackle",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This kit include a collapsible fishing pole, fishhooks, line, lures, and a fishing net.",
      "bulk": 1,
      "price": {
        "sp": 8
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:writing-set-extra-ink-and-paper",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3yLu12TCwN8utY0u",
      "slug": "writing-set-extra-ink-and-paper",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f44cb8d61cb04fb6f4990cf42f34ef37518a5fe922694e70d36d7479d8022afe",
    "translatableHash": "sha256:62b851523fc1911b035f8cdffccfba2dd4c9685b7842c897aab3956b88325dfb",
    "data": {
      "schemaVersion": 1,
      "name": "Writing Set (Extra Ink and Paper)",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Extra ink and paper to refill your writing set.",
      "bulk": 0,
      "price": {
        "sp": 1
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cane",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3ZHl40YXlI47uIrT",
      "slug": "cane",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:749078f125f747c3936a18b8eadb73730e9ba73552671671a3ba9431a5715b0d",
    "translatableHash": "sha256:6e818b93183d860e1b04f0f7563b159c39f3e2936a84dc3eec6a59fc49d17534",
    "data": {
      "schemaVersion": 1,
      "name": "Cane",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A cane is a straight cane with a curved handle, shaped like the tip of a hook. Its simple design helps with balance and only slightly assists with taking weight off the affected opposite leg. The cane is typically 2 to 3 feet long but can be lengthened or shortened as needed.",
      "bulk": 0.1,
      "price": {
        "sp": 5
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:greatpick",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3Zv5hSXXtlaDatUv",
      "slug": "greatpick",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/greatpick.webp"
    },
    "sourceHash": "sha256:7cc745a7bb617f0bf1df7639508398e4a41907362e109067edea97ad0e7158c8",
    "translatableHash": "sha256:96071f0ae6ab1d191d06af2f03f180eda6f7f446ea91dcffc8319273a3f08feb",
    "data": {
      "schemaVersion": 1,
      "name": "Greatpick",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "fatal-d12"
      ],
      "description": "This pick has a longer handle and broader head than a regular pick. It is too heavy to wield in one hand.",
      "bulk": 2,
      "price": {
        "gp": 1
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "pick",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crowbar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "44F1mfJei4GY8f2X",
      "slug": "crowbar",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/crowbar.webp"
    },
    "sourceHash": "sha256:9fae021b517aaadb1157194d7f4d3e9ae6483f96d770aba660775f08068ee130",
    "translatableHash": "sha256:430d838a1f893210d24e131c26855ea4e2cefe3de9ea8cd3d12978a78516b235",
    "data": {
      "schemaVersion": 1,
      "name": "Crowbar",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "When Forcing Open an object that doesn't have an easy grip, a crowbar makes it easier to gain the necessary leverage. Without a crowbar, prying something open takes a -2 item penalty to the Athletics check to Force Open.",
      "bulk": 0.1,
      "price": {
        "sp": 5
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemists-toolkit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4ftXXUCBHcf4b0MH",
      "slug": "alchemists-toolkit",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4e5fbaaa5c681fdc6cba97d73685357a8ca371745bb2f13d50dc3253b3f6dff1",
    "translatableHash": "sha256:308049e7fc7e0dfe40015e228a12576411696911032aba2446719340f2b8d9d8",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemist's Toolkit",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This mobile collection of vials and chemicals can be used for simple alchemical tasks. If you wear your alchemist's toolkit, you can draw and replace it as part of the action that uses it.",
      "bulk": 1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silver-pieces",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5Ew82vBF9YfaiY9f",
      "slug": "silver-pieces",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/currency/silver-pieces.webp"
    },
    "sourceHash": "sha256:95dac291a251e958e96872e9c5cecef63c08a2921b2e879f21782af3b8cb3db8",
    "translatableHash": "sha256:3947277f804a3b27cb7b02f581ceb4ebacf58891711354bd4f157be5714c1841",
    "data": {
      "schemaVersion": 1,
      "name": "Silver Pieces",
      "itemType": "treasure",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "",
      "bulk": 1,
      "price": {
        "sp": 1
      },
      "usage": "",
      "category": "coin",
      "group": "treasure"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:morningstar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5fu6dCtqhdBnHNqh",
      "slug": "morningstar",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:023e56d163d12c966b17ed9e8c9149c7231336eae28b13b551c33c9844b4c87d",
    "translatableHash": "sha256:4c4b239aec5471a8ac658abc91ab6131ca46bf26d4a3cc74380be280a6f51bf0",
    "data": {
      "schemaVersion": 1,
      "name": "Morningstar",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "versatile-p"
      ],
      "description": "This weapon has a short shaft ending in a metal ball studded with spikes.",
      "bulk": 1,
      "price": {
        "gp": 1
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
    "contentId": "pf2e:item:equipment-srd:ladder-10-foot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5j5KyZsGOfbrJNUZ",
      "slug": "ladder-10-foot",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89f02e1c898cfc28e51c50417695c28bd08f5753f800ae8e568459a0fae4f76f",
    "translatableHash": "sha256:d038d5b56ab35fe41a12ccee86dc807ddb763a96f75bf3e92caf2bbdc8b3e261",
    "data": {
      "schemaVersion": 1,
      "name": "Ladder (10-foot)",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "",
      "bulk": 3,
      "price": {
        "cp": 3
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:light-barding",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5yL2D3GPAggadZQN",
      "slug": "light-barding",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/light-barding.webp"
    },
    "sourceHash": "sha256:8e79b877a598c1b3ea27a15854261ae223583481cfb8563f3fdbefac26af0d6e",
    "translatableHash": "sha256:c080b11f29558e7d4630d1c86be2e3bf89ce76236af1c77e24644372ed140d32",
    "data": {
      "schemaVersion": 1,
      "name": "Light Barding",
      "itemType": "armor",
      "level": 0,
      "rarity": "common",
      "traits": [
        "barding",
        "companion"
      ],
      "description": "",
      "bulk": 2,
      "price": {
        "gp": 10
      },
      "usage": "",
      "category": "light-barding",
      "group": "armor",
      "armor": {
        "armorClassBonus": 1,
        "dexterityCap": 5,
        "checkPenalty": -1,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crossbow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "62nnVQvGhoVLLl2K",
      "slug": "crossbow",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:33f8921df663b02a1bbf81003d5b44e8313e1c22696a0cc5864a052ad139781f",
    "translatableHash": "sha256:735f4205e0406217f43b3fbe1348bb130854ec45298124c841b15134e458751f",
    "data": {
      "schemaVersion": 1,
      "name": "Crossbow",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This ranged weapon has a bow-like assembly mounted on a handled frame called a tiller. The tiller has a mechanism to lock the bowstring in place, attached to a trigger mechanism that releases the tension and launches a bolt.",
      "bulk": 1,
      "price": {
        "gp": 3
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
    "contentId": "pf2e:item:equipment-srd:mirror",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6cyw0yK91cNsbvSK",
      "slug": "mirror",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ab07384b6bac190c2d147793e8cee6065b7dccf56c6f65e9c50da9077f1cfdfa",
    "translatableHash": "sha256:7e683769eb3b80eee4664002987fd9c0f7826515d9bdf6bb41296f87993f4bc8",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "",
      "bulk": 0,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:grappling-hook",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6DCy7tEF1cxaIJMy",
      "slug": "grappling-hook",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/grapling-hook.webp"
    },
    "sourceHash": "sha256:424a9f30c9b374fb743c0959a191db1488e4a2355384a86dc9388bae53fa5a2b",
    "translatableHash": "sha256:d0cd1685c0462f2918a32cb1bb2794cc3f9952902429adfb1b487c3cf7602d06",
    "data": {
      "schemaVersion": 1,
      "name": "Grappling Hook",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "You can throw a grappling hook with a rope tied to it to make a climb easier. To anchor a grappling hook, make a ranged attack roll using your simple weapon proficiency against a DC depending on the target, typically at least DC 20. This attack has the secret trait. On a success, your hook has a firm hold, but on a critical failure, the hook seems like it will hold but actually falls when you're partway up",
      "bulk": 0.1,
      "price": {
        "sp": 1
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pick",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6I4YJAQUbTAqbpsI",
      "slug": "pick",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c5956fee2985fde351c2b02a04b1c2ba1a62e4f8a7b0bbca1d209a58b5252b7f",
    "translatableHash": "sha256:d26c3a0e118d9fd67ba93082a6f6ff82a91e212060e70f15b0326655904c7da1",
    "data": {
      "schemaVersion": 1,
      "name": "Pick",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "fatal-d10"
      ],
      "description": "A pick designed solely for combat has a sturdy wooden shaft and a heavy, pointed head to deliver devastating blows.",
      "bulk": 1,
      "price": {
        "sp": 7
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "pick",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bastard-sword",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6KWYmeRMxsQfWhhJ",
      "slug": "bastard-sword",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4051a5870906159e41a84a55767cb7337c3f91eddae4fa5b29fcd6f6064b9e9",
    "translatableHash": "sha256:61673b26d763dc89aa05b478e652822706c9a9a7c0e452512243447fe318e47d",
    "data": {
      "schemaVersion": 1,
      "name": "Bastard Sword",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "two-hand-d12"
      ],
      "description": "This broad-bladed sword, sometimes called the hand-and-a-half sword, has a longer grip so it can be held in one hand or used with two hands to provide extra slashing power.",
      "bulk": 1,
      "price": {
        "gp": 4
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
    "contentId": "pf2e:item:equipment-srd:caltrops",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7fSnvJ2xoSfa6JXD",
      "slug": "caltrops",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f0b51696a7517495133b79637d30a6cc8bd840b1a6c076e8b3fa06f853d961f7",
    "translatableHash": "sha256:fec730e88b63974ef69caa542f60e651c5fd7f6790d64ebaeb3b919bb2e25bba",
    "data": {
      "schemaVersion": 1,
      "name": "Caltrops",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "These four-pronged metal spikes can damage a creature's feet. You can scatter caltrops in an empty square adjacent to you with an Interact action. The first creature that moves into that square must succeed at a check (acrobatics, dc:14, name:Avoid Caltrops, showDC:all) check or take 1d4[piercing] damage and 1 persistent bleed damage. A creature taking persistent bleed damage from caltrops takes a –5-foot penalty to its Speed. Spending an Interact action to pluck the caltrops free reduces the DC to stop the bleeding. Once a creature takes damage from caltrops, enough are ruined that other creatures moving into the square are safe. Deployed caltrops can be salvaged and reused if no creatures took damage from them. Otherwise, enough are ruined that they can't be salvaged.\nEffect: Caltrops",
      "bulk": 0.1,
      "price": {
        "sp": 3
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shortsword",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7tKkkF8eZ4iCLJtp",
      "slug": "shortsword",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:77bdaa2fbfc681fd53e99e6aa30a3dd38b6cb99cc084ddb93a2be751aef00ce4",
    "translatableHash": "sha256:8af67ada7f956012d33cbbae0fea8744b9450eb2f0803d878a10edaeed08f67b",
    "data": {
      "schemaVersion": 1,
      "name": "Shortsword",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "agile",
        "finesse",
        "versatile-s"
      ],
      "description": "These blades come in a variety of shapes and styles, but they are typically 2 feet long.",
      "bulk": 0.1,
      "price": {
        "sp": 9
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
    "contentId": "pf2e:item:equipment-srd:soap",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "81aHsD27HFGnq1Nt",
      "slug": "soap",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:81ac838291464cbd65785fb68f87f57f055866352d0d5d735f882ef9e7ec3ace",
    "translatableHash": "sha256:bd2dfe28cf2587a81ab9fc438a5cc29bfb8c4891400ec74d89cd9b60fc151a4f",
    "data": {
      "schemaVersion": 1,
      "name": "Soap",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Bar of soap.",
      "bulk": 0,
      "price": {
        "cp": 2
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:greataxe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8COlYvHe6hKCXY8x",
      "slug": "greataxe",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ffa7f734f9a4d561bf91e7e5f6d7603728813b7d303e228007150f2ac63d0d83",
    "translatableHash": "sha256:3dd1db3238517f1fa9cf434a0aae961e5e0f0623cf45be58129a252524bf706a",
    "data": {
      "schemaVersion": 1,
      "name": "Greataxe",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "sweep"
      ],
      "description": "This large battle axe is too heavy to wield with only one hand. Many greataxes incorporate two blades, and they are often \"bearded,\" having a hook at the bottom to increase the strength of their chopping power.",
      "bulk": 2,
      "price": {
        "gp": 2
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
    "contentId": "pf2e:item:equipment-srd:torch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8Jdw4yAzWYylGePS",
      "slug": "torch",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3adc1dd6f0858879b9d2963d70448f45bc465b32cc1226bb3c23edeab3f4fc34",
    "translatableHash": "sha256:307366accb68008ba66af0285fbb9d3d21edbb53e7172d6d9b53e51db4f3e819",
    "data": {
      "schemaVersion": 1,
      "name": "Torch",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A torch sheds bright light in a 20-foot radius (and dim light to the next 20 feet) for 1 hour. It can be used as an improvised weapon that deals 1d4 bludgeoning damage plus 1 fire damage.",
      "bulk": 0.1,
      "price": {
        "cp": 1
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mace",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9iDqOLNFKxiTcFKE",
      "slug": "mace",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a28b6eeefb9a8b201795754c149a07ce344d907608ebbcc362a19cad7f788397",
    "translatableHash": "sha256:380ad0256cc9e9986986eaf5d5519e66b6419f4e08d88bc09344b124b68118f3",
    "data": {
      "schemaVersion": 1,
      "name": "Mace",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "shove"
      ],
      "description": "With a stout haft and a heavy metal head, a mace is sturdy and allows its wielder to deliver powerful blows and dent armor.",
      "bulk": 1,
      "price": {
        "gp": 1
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
    "contentId": "pf2e:item:equipment-srd:climbing-kit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9UJbMaglf35GVzaZ",
      "slug": "climbing-kit",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:999a4f2f6e200491d7c60954d7b77a007ab2f8048747a3416f4b92b8d39e4b94",
    "translatableHash": "sha256:d3b13dde2e7c922a210859114d66a8d715a2128e430f1abe6f60f5993e44a772",
    "data": {
      "schemaVersion": 1,
      "name": "Climbing Kit",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This satchel includes 50 feet of rope, pulleys, a dozen pitons, a hammer, a grappling hook, and one set of crampons. Climbing kits allow you to attach yourself to the wall you're Climbing, moving half as quickly as usual (minimum 5 feet) but letting you attempt a check (flat, dc:5) whenever you critically fail to prevent a fall. A single kit has only enough materials for one climber; each climber needs their own kit. If you wear your climbing kit, you can access it as part of a Climb action.",
      "bulk": 1,
      "price": {
        "sp": 5
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bolts",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AITVZmakiu3RgfKo",
      "slug": "bolts",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/bolts.webp"
    },
    "sourceHash": "sha256:a4d70399fd3635cfdb0154fb71aaea9e28c1aa2f225db706fcb59f4308a21866",
    "translatableHash": "sha256:612ab81330214ed55aff0b95431de7546f4410074024b5cc10a531b476158964",
    "data": {
      "schemaVersion": 1,
      "name": "Bolts",
      "itemType": "ammunition",
      "level": 0,
      "rarity": "common",
      "traits": [
        "consumable"
      ],
      "description": "Shorter than traditional arrows but similar in construction, bolts are the ammunition used by crossbows.",
      "bulk": 0.1,
      "price": {
        "sp": 1
      },
      "usage": "",
      "category": "ammo",
      "group": "bolts"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hide-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AnwzlOs0njF9Jqnr",
      "slug": "hide-armor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:686272936b6eb0729cf150316cff7760c2c65e8f67edc63e29d4d2d0d49e54e0",
    "translatableHash": "sha256:b4929075259e10ca9b76c7050ad8a41c05e5661e9d8f561c032653dcdc8e6219",
    "data": {
      "schemaVersion": 1,
      "name": "Hide Armor",
      "itemType": "armor",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A mix of furs, sturdy hide, and sometimes molded boiled leather, this armor provides protection due to its layers of leather, though its bulkiness slows the wearer down and decreases mobility.",
      "bulk": 2,
      "price": {
        "gp": 2
      },
      "usage": "",
      "category": "medium",
      "group": "leather",
      "armor": {
        "armorClassBonus": 3,
        "dexterityCap": 2,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:longspear",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aXuJh4i8HqSu6NYV",
      "slug": "longspear",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e6122df4ac49fe298bef326a725578c1fe32d8596e1326117ae26bd7ea045fda",
    "translatableHash": "sha256:b31cfaa9f081cc17b62c0fe0c79f0844ddc4baf93920873eedc9c77068db3a54",
    "data": {
      "schemaVersion": 1,
      "name": "Longspear",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "reach"
      ],
      "description": "This very long spear, sometimes called a pike, is purely for thrusting rather than throwing. Used by many soldiers and city watch for crowd control and defense against charging enemies, it must be wielded with two hands.",
      "bulk": 2,
      "price": {
        "sp": 5
      },
      "usage": "held-in-two-hands",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gold-pieces",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "B6B7tBWJSqOBz5zz",
      "slug": "gold-pieces",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/currency/gold-pieces.webp"
    },
    "sourceHash": "sha256:432d60a9d48355c93a2e49de3c4ec0df662d545e75aa42fc0b74d6fb97401643",
    "translatableHash": "sha256:8d313bdf31c669d9d6c1bb5db4f38beb673e146dd376ff48d0e07f31112214ec",
    "data": {
      "schemaVersion": 1,
      "name": "Gold Pieces",
      "itemType": "treasure",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "",
      "bulk": 1,
      "price": {
        "gp": 1
      },
      "usage": "",
      "category": "coin",
      "group": "treasure"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tack",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Bu2xT8NfB6xaeTJa",
      "slug": "tack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/tack.webp"
    },
    "sourceHash": "sha256:e16ee531f2aab14993a98a7748d59d62e6632f80fa15ec9e97670732fece6ccd",
    "translatableHash": "sha256:88c4b17758aa6a6104f0362964ee09faa8830c1cc017ee0ad6beab6897a83af5",
    "data": {
      "schemaVersion": 1,
      "name": "Tack",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Tack includes all the gear required to outfit a riding animal, including a saddle, bit and bridle, and stirrups if necessary. Especially large or oddly shaped animals might require specialty saddles. These can be more expensive or hard to find, as determined by the GM. The Bulk value given is for tack worn by a creature. If carried, the Bulk increases to 2.",
      "bulk": 2,
      "price": {
        "gp": 4
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:club",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "c58wczIzH2gzeXQL",
      "slug": "club",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:82486178a1d057b3a0551d2e904bc787ddaa55aa775a9aca46bd5877ae00c89c",
    "translatableHash": "sha256:cd5638b7387f84663524b3ed29f30059f7947a59c0f5f135cecbcfe2be7f6933",
    "data": {
      "schemaVersion": 1,
      "name": "Club",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "thrown-10"
      ],
      "description": "This is a piece of stout wood shaped or repurposed to bludgeon an enemy. Clubs can be intricately carved pieces of martial art or as simple as a tree branch or piece of wood.",
      "bulk": 1,
      "price": {},
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
    "contentId": "pf2e:item:equipment-srd:ten-foot-pole",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ccsgob2TZ7WqTrp7",
      "slug": "ten-foot-pole",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/ten-foot-pole.webp"
    },
    "sourceHash": "sha256:baf381274d1c3e5636214aa5235ccc82c28a69b9ccd95f33d7dceccabbe1d440",
    "translatableHash": "sha256:ecdcb996c840f41d921c54d9e07c56b4b6c95dd28b19bae49d4c408315ebca25",
    "data": {
      "schemaVersion": 1,
      "name": "Ten-Foot Pole",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "When wielding this long pole, you can use Seek to search a square up to 10 feet away. The pole is not sturdy enough to use as a weapon.",
      "bulk": 1,
      "price": {
        "cp": 1
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:musical-instrument-heavy",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "csfJtggwGCF28U2j",
      "slug": "musical-instrument-heavy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/musical-instrument-heavy.webp"
    },
    "sourceHash": "sha256:c980c47b1375e93dbec030bbb29aaa1eb48b14f8408797c4776debcdfed31c7e",
    "translatableHash": "sha256:fcf8c3ec9803caa39963a5d5ae779bead2080554909e446bbf0df1290aa80cb2",
    "data": {
      "schemaVersion": 1,
      "name": "Musical Instrument (Heavy)",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Handheld instruments include bagpipes, a small set of chimes, small drums, fiddles and viols, flutes and recorders, small harps, lutes, trumpets, and similarly sized instruments. The GM might rule that an especially large handheld instrument (like a tuba) has greater Bulk. Heavy instruments such as large drums, a full set of chimes, and keyboard instruments are less portable and generally need to be stationary while played.",
      "bulk": 16,
      "price": {
        "gp": 2
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:filchers-fork",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CVTgOpNuRE7hsnc1",
      "slug": "filchers-fork",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ebb3f566a4a81604f982c1d522dea3bf4dbb6f7188ff93dd4e73f41d5e324607",
    "translatableHash": "sha256:5e98cfba267f48eb37b755d11d770ae7055d2f896bfe14296b31a7a84a261aca",
    "data": {
      "schemaVersion": 1,
      "name": "Filcher's Fork",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "backstabber",
        "deadly-d6",
        "finesse",
        "halfling",
        "thrown-20"
      ],
      "description": "This halfling weapon looks like a long, two-pronged fork and is used as both a weapon and a cooking implement.",
      "bulk": 0.1,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dueling-cape",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DA3HgyEBGEbtRNOo",
      "slug": "dueling-cape",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/dueling-cape.webp"
    },
    "sourceHash": "sha256:1cf928bc79f8d7bf121e68019942296bb4d7575b2fd22b95d6e7f4e821f028a6",
    "translatableHash": "sha256:beb1f7a63268fb0599f1bfcf1b79067d1ddc3f2a8a350e56dac8eca844256514",
    "data": {
      "schemaVersion": 1,
      "name": "Dueling Cape",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "You can pull a dueling cape you're wearing from your shoulder and wrap it around your arm with an Interact action. While wielding the dueling cape this way, the cape uses that arm and hand, and you can't hold anything else in that hand.\nWhile you do so, you can spend an action to hold it in a protective position, giving you a +1 circumstance bonus to AC and to Deception checks to Feint until the start of your next turn.\nEffect: Dueling Cape",
      "bulk": 0.1,
      "price": {
        "sp": 5
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:explorers-clothing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dDIPA1WE9ESF67EB",
      "slug": "explorers-clothing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2eff01fc7811615ff3fc1ef8e81bb942795bac3be8b60ba51842c79fad91aaf2",
    "translatableHash": "sha256:73420eaaab1a0f4b02e65eed651f2a581cb629283607b3206e2f2ee284c90f61",
    "data": {
      "schemaVersion": 1,
      "name": "Explorer's Clothing",
      "itemType": "armor",
      "level": 0,
      "rarity": "common",
      "traits": [
        "comfort"
      ],
      "description": "Adventurers who don't wear armor travel in durable clothing. Though it's not armor and uses your unarmored defense proficiency, it still has a Dex Cap and can grant an item bonus to AC if etched with potency runes.",
      "bulk": 0.1,
      "price": {
        "sp": 1
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
    "contentId": "pf2e:item:equipment-srd:shield-boss",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dfum7DpOEkwxwTsT",
      "slug": "shield-boss",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shield-boss.webp"
    },
    "sourceHash": "sha256:1140cfcb9137fb9c870d993731ac167e7c92e74d87587aa16b7e78084bf79cdf",
    "translatableHash": "sha256:c39f10eacc3fef0e098b81d2b1ed06e256a18daa9f86dce8deee2b4a37998b6e",
    "data": {
      "schemaVersion": 1,
      "name": "Shield Boss",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "attached-to-shield"
      ],
      "description": "Typically a round, convex, or conical piece of thick metal attached to the center of a shield, a shield boss increases the bludgeoning damage of a shield bash.",
      "bulk": 0,
      "price": {
        "sp": 5
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "shield",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:halberd",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dgWxsYm0DWHb27h6",
      "slug": "halberd",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/halberd.webp"
    },
    "sourceHash": "sha256:8a5e7ed5f24ea822e8383586bf2d91cc144b7010d1c1c7c8b9d74831780be258",
    "translatableHash": "sha256:81a1dd47fd7d76f95c756573be325274ee71d2e74a194a3db939f1d622796e08",
    "data": {
      "schemaVersion": 1,
      "name": "Halberd",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "reach",
        "versatile-s"
      ],
      "description": "This polearm has a relatively short, 5-foot shaft. The business end is a long spike with an axe blade attached.",
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
    "contentId": "pf2e:item:equipment-srd:lantern-hooded",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dIRZ0LL7G31fJNYz",
      "slug": "lantern-hooded",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d9e470e76a8db1310cfdff5b70a48cf7e224737f9f63800f63627d19f3c67471",
    "translatableHash": "sha256:56661ab864dd8b7364e0cf0364d374cbb938be9599addc780fd62b44671bc7ee",
    "data": {
      "schemaVersion": 1,
      "name": "Lantern (Hooded)",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A lantern sheds bright light and requires 1 pint of oil to function for 6 hours. A hooded lantern sheds light in a 30-foot radius (and dim light in the next 30 feet) and is equipped with shutters, which you can close to block the light. Closing or opening the shutters takes an Interact action.",
      "bulk": 0.1,
      "price": {
        "sp": 7
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-1-pint",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Du05UxCyCM0ZWH8z",
      "slug": "oil-1-pint",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:876a39ef1be8ff4a3c2b1a36da34748a2f80996ce83502b9ed74cf13b315421f",
    "translatableHash": "sha256:6d2929bcf6e576259f931a66305b55db32937adcff43b1bc31ef267b7445aaf1",
    "data": {
      "schemaVersion": 1,
      "name": "Oil (1 pint)",
      "itemType": "consumable",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "You can use oil to fuel lanterns, but you can also set a pint of oil aflame and throw it. You must first spend an Interact action preparing the oil, then throw it with another action as a ranged attack. If you hit, it splatters on the creature or in a single 5-foot square you target. You must succeed at a check (flat, dc:10) for the oil to ignite successfully when it hits. If the oil ignites, the target takes 1d6[fire] damage.",
      "bulk": 0,
      "price": {
        "cp": 1
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sack",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DujblC14ytJEZMaz",
      "slug": "sack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6fe188b2707df1d2ed4ba34f624c9173c9771f7108459f9d5d15e71cf7764d5a",
    "translatableHash": "sha256:75826ea2d744d16057fbd176d294d61912bafe941f5995e3b7cc219ccf4acd29",
    "data": {
      "schemaVersion": 1,
      "name": "Sack",
      "itemType": "container",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A sack can hold up to 8 Bulk worth of items. A sack containing 2 Bulk or less can be worn on the body, usually tucked into a belt. You can carry a sack with one hand, but must use two hands to transfer items in and out.",
      "bulk": 0.1,
      "price": {
        "cp": 1
      },
      "usage": "held-in-one-hand",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:halfling-sling-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DV4qelKHrviM0O5i",
      "slug": "halfling-sling-staff",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:881f17fa4ba9cdf8ee663f80bea2b6e31464675a040513e0e4f66bb76977c7b6",
    "translatableHash": "sha256:968040e4e7d46672cd77852b46ba4f39a9cc64bea39ab558398a97d30f578738",
    "data": {
      "schemaVersion": 1,
      "name": "Halfling Sling Staff",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "halfling",
        "propulsive"
      ],
      "description": "This staff ends in a Y-shaped split that cradles a sling. The length of the staff provides excellent leverage when used two-handed to fling rocks or bullets from the sling.",
      "bulk": 1,
      "price": {
        "gp": 5
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "sling",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:studded-leather-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ewQZ0VeL38v3qFnN",
      "slug": "studded-leather-armor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:983a50984354bdecc7535fc535cfa5b4e1735f88c4acbe9ce698ff9c29075291",
    "translatableHash": "sha256:c245a93209dc2a04789cc7483b4a6a99ef7a40c23329d1ec0f48c9b144114a22",
    "data": {
      "schemaVersion": 1,
      "name": "Studded Leather Armor",
      "itemType": "armor",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "This leather armor is reinforced with metal studs and sometimes small metal plates, providing most of the flexibility of leather armor with more robust protection.",
      "bulk": 1,
      "price": {
        "gp": 3
      },
      "usage": "",
      "category": "light",
      "group": "leather",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wooden-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ezVp13Uw8cWW08Da",
      "slug": "wooden-shield",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dacdd8d062863818cb1453e008e912b7591f6ed75890fdb9060a23d92102fa27",
    "translatableHash": "sha256:06651001d42dc756e281b69de3cae6a72b7a0e78949540512822803f6f35fde2",
    "data": {
      "schemaVersion": 1,
      "name": "Wooden Shield",
      "itemType": "shield",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Though they come in a variety of shapes and sizes, the protection offered by wooden shields comes from the stoutness of their materials. While wooden shields are less expensive than steel shields, they break more easily.\nHardness | HP | BT |\n3 | 12 | 6 |",
      "bulk": 1,
      "price": {
        "gp": 1
      },
      "usage": "",
      "category": "shield",
      "group": "wooden-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whip",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "f1gwoTkf3Nn0v3PN",
      "slug": "whip",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/whip.webp"
    },
    "sourceHash": "sha256:bb105678f86c917a124f9c5250eeef355cfd00399113a94ef736d27716d4a4b8",
    "translatableHash": "sha256:c0974aea7ccd9e0198a8699f6b2ac9282bf240c1143ba657b081eae7fbb7e2db",
    "data": {
      "schemaVersion": 1,
      "name": "Whip",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "disarm",
        "finesse",
        "nonlethal",
        "reach",
        "trip"
      ],
      "description": "This long strand of thick leather, often braided, delivers a painful but nonlethal slash at a distance, usually accompanied by a distinctive cracking sound.",
      "bulk": 1,
      "price": {
        "sp": 1
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "flail",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bedroll",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fagzYdmfYyMQ6J77",
      "slug": "bedroll",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a571ccff4526f28143f71030217cdd3623d96587a541160b2ec121487613468e",
    "translatableHash": "sha256:375d12d3934e6251cc6a65bca18ad62ff6aa427388fbbd3d870c9f75f0ac4ded",
    "data": {
      "schemaVersion": 1,
      "name": "Bedroll",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "A rolled up bed.",
      "bulk": 0.1,
      "price": {
        "cp": 2
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:katar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Fg3GkCDkszj5WtgQ",
      "slug": "katar",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2039277cd6de5ef90870fe4f356fc7e6e204add0fbe749ec8c2d98cf411556d6",
    "translatableHash": "sha256:6161afde4784616d76e8ce71626ab6bc07ce866e8e357ef0258795411771b49a",
    "data": {
      "schemaVersion": 1,
      "name": "Katar",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "deadly-d6",
        "monk"
      ],
      "description": "Also known as punching daggers, katars are characterized by their H-shaped hand grip that allows the blade to jut out from the knuckles.",
      "bulk": 0.1,
      "price": {
        "sp": 3
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:light-hammer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FibwLZ12EIEwLGhw",
      "slug": "light-hammer",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9b7f211513d70de39f21011e7b2de2ed465b8a3c13ff71224e58bc14a98439d8",
    "translatableHash": "sha256:cc1b46b0487aeb07a6e23caa9b87e8364e1f04a69ee4db693f9060559df778bf",
    "data": {
      "schemaVersion": 1,
      "name": "Light Hammer",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "agile",
        "thrown-20"
      ],
      "description": "This smaller version of the warhammer has a wooden or metal shaft ending in a metal head. Unlike its heavier cousin, it is light enough to throw.",
      "bulk": 0.1,
      "price": {
        "sp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shuriken",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fjkwYZ0hRmBztwBG",
      "slug": "shuriken",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shuriken.webp"
    },
    "sourceHash": "sha256:70ac34c072462612700ee256e863e9e4dc5c861aef9e9e1561e0e08df5e1ed12",
    "translatableHash": "sha256:843e6d77bf30a3fccc1e193b55c483c85da77371bc4ec81ef63b88f186f8d4ee",
    "data": {
      "schemaVersion": 1,
      "name": "Shuriken",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "monk",
        "thrown"
      ],
      "description": "This \"throwing star\" is a small piece of flat metal with sharp edges, designed to be flung with a flick of the wrist.",
      "bulk": 0,
      "price": {
        "cp": 1
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "dart",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  }
]
