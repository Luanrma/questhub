import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_11_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:lovers-gloves",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nZE16PtiyY7DWlzd",
      "slug": "lovers-gloves",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/lovers-gloves.webp"
    },
    "sourceHash": "sha256:7fe1db09890fefe5a7bc35986ecb2b45dffd5659aae5dfd19dab4c15bc2ee720",
    "translatableHash": "sha256:4591b43898233497d3685cbfd8c1565848b70e99a5efa87d60912b862025ad96",
    "data": {
      "schemaVersion": 1,
      "name": "Lover's Gloves",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "emotion",
        "invested",
        "magical",
        "mental"
      ],
      "description": "These white silk gloves are adorned in red hearts that glow faintly whenever you are adjacent to someone you feel particularly strongly toward. They buoy your spirit, giving you a +1 item bonus to Diplomacy checks.\nActivate—Bond 1 (manipulate)\nFrequency once per day\nEffect You grasp the hands of a willing creature you have strong positive feelings about, regardless of the nature of those feelings. The creature gains a +1 status bonus to saving throws and 10 temporary Hit Points for 10 minutes. If the creature shares your feelings, you gain the same benefits, and for the duration, when you both roll a success on a saving throw against an emotion effect that causes negative emotions, you both get a critical success instead.\nEffect: Lover's Gloves",
      "bulk": 0,
      "price": {
        "gp": 500
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 855,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Lover's Gloves",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Lover's Gloves",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Lover's Gloves",
          "sourceId": "3O5lvuX4VHqtpCkU",
          "name": "Effect: Lover's Gloves",
          "type": "effect"
        },
        "owner": {
          "sourceId": "nZE16PtiyY7DWlzd",
          "name": "Lover's Gloves",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:alloy-orb-standard-grade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OOli8iQmLZoMOoG0",
      "slug": "alloy-orb-standard-grade",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:60deef7393298199b475f5c493aab09e9c63615aed693b5411125ca486a9d1ca",
    "translatableHash": "sha256:9be107e85455bc24a0d52ee79b80057ff25774db831faf120970999bb296ca7d",
    "data": {
      "schemaVersion": 1,
      "name": "Alloy Orb (Standard-Grade)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nAlthough solid, this orb of metal swirls with bright silver and dark iron colors, as if made of liquid. When you activate the alloy orb, select cold iron or silver. The affixed weapon functions as the chosen material for 1 minute, suppressing its original material. This orb works on weapons of 15th level or lower.\nEffect: Alloy Orb (Standard-Grade)",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "affixed-to-a-metal-weapon",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 425,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Alloy Orb (Standard-Grade)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Alloy Orb (Standard-Grade)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Alloy Orb (Standard-Grade)",
          "sourceId": "GXEkmsf4Wre6zqG1",
          "name": "Effect: Alloy Orb (Standard-Grade)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "OOli8iQmLZoMOoG0",
          "name": "Alloy Orb (Standard-Grade)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bloodseeker-beak-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oTRUHPASPD4USU4o",
      "slug": "bloodseeker-beak-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b71a5064795cc6d08ba6111372e3d12c8ae1f0bf17e2321cd2b041ffaa2febd7",
    "translatableHash": "sha256:2e321338946a3fa46b9a553957451a4e5b41e1a159c7f4d25eae66fc6a6e3d2e",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodseeker Beak (Greater)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You hit an Off-Guard creature with the affixed weapon\nThis long, hollow proboscis is harvested from the notorious bloodseeker beast and drips a trickle of blood.\nWhen you activate the beak, you deal an extra 2d4 precision damage on your damage roll. If you deal sneak attack damage to the creature, you also deal 2d4 persistent bleed damage.\nEffect: Bloodseeker Beak",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 122,
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
          "sourceId": "oTRUHPASPD4USU4o",
          "name": "Bloodseeker Beak (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 514,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bloodseeker Beak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bloodseeker Beak",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bloodseeker Beak",
          "sourceId": "5XdkHIUgc6psBxQq",
          "name": "Effect: Bloodseeker Beak",
          "type": "effect"
        },
        "owner": {
          "sourceId": "oTRUHPASPD4USU4o",
          "name": "Bloodseeker Beak (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-envisioning",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rAkxflw4pNrPAq4p",
      "slug": "aeon-stone-envisioning",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-pale-orange-rhomboid.webp"
    },
    "sourceHash": "sha256:4a822d3baa4db5cd0392e91ee36977a9afe5d9db30291e52be0d0128f1609c4c",
    "translatableHash": "sha256:27b45059219abe6f5976553106e766647f2ab9893e0c71ae81470e6c96f1de49",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Envisioning)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Over millennia, these mysterious, intricately cut gemstones have been hoarded by mystics and fanatics hoping to discover their secrets. Despite their myriad forms and functions, these stones are purportedly all fragments of crystal tools used by otherworldly entities to construct the universe in primeval times.\nWhen you invest one of these precisely shaped crystals, the stone orbits your head instead of being worn on your body. You can stow an aeon stone with an Interact action, and an orbiting stone can be snatched out of the air with a successful Disarm action against you. A stowed or removed stone remains invested, but its effects are suppressed until you return it to orbit your head again.\nThere are various types of aeon stones, each with a different appearance and magical effect. Each aeon stone also gains a resonant power when slotted into a special magical item called a wayfinder.\nThis clear cube allows you to communicate with a limited form of telepathy to a range of 100 feet. The messages are transmitted as a simple image each round. These images are the quality of a hasty or childish sketch but can be roughly understood by creatures regardless of language. This provides no special ability to respond to your images.\nThe resonant power allows you to cast Translate as an occult innate spell once per day.",
      "bulk": 0,
      "price": {
        "gp": 425
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1357,
        "uuid": "Compendium.pf2e.spells-srd.Item.Translate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Translate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Translate",
          "sourceId": "vTQvfYu2llKQedmY",
          "name": "Translate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "rAkxflw4pNrPAq4p",
          "name": "Aeon Stone (Envisioning)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bountys-light",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RdJg2iIQx8lJyPWe",
      "slug": "bountys-light",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-fire.webp"
    },
    "sourceHash": "sha256:c4243f3735ae76d96359fa212ac4cf6ded38450e548d5198370e98cc4a35bda6",
    "translatableHash": "sha256:6009d0a8e30ad092a21162ddf009bd623fb6a69d0b2a786abc30f44570e924db",
    "data": {
      "schemaVersion": 1,
      "name": "Bounty's Light",
      "itemType": "weapon",
      "level": 8,
      "rarity": "unique",
      "traits": [
        "fire",
        "magical",
        "relic",
        "staff",
        "two-hand-d8"
      ],
      "description": "This magical torch that's made up of a bouquet of living summer flowers functions as a Staff of Fire (Greater). Its light turns on and off with an Interact action.",
      "bulk": 1,
      "price": {},
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
        "sourcePath": "/system/description/gm",
        "sourceIndex": 74,
        "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Heat Haze",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Heat Haze",
          "package": "pf2e",
          "sourcePack": "adventure-specific-actions",
          "documentType": "Item",
          "compendiumKey": "Heat Haze",
          "sourceId": "TspxQ2di6yfPrRnP",
          "name": "Heat Haze",
          "type": "action"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 140,
        "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Incandescent Sight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Incandescent Sight",
          "package": "pf2e",
          "sourcePack": "adventure-specific-actions",
          "documentType": "Item",
          "compendiumKey": "Incandescent Sight",
          "sourceId": "i2cNdSg1tT9vB4hQ",
          "name": "Incandescent Sight",
          "type": "action"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 250,
        "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Jet Propulsion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Jet Propulsion",
          "package": "pf2e",
          "sourcePack": "adventure-specific-actions",
          "documentType": "Item",
          "compendiumKey": "Jet Propulsion",
          "sourceId": "j8pRtLs0mW6cF3nV",
          "name": "Jet Propulsion",
          "type": "action"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 321,
        "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Searing Wave",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Searing Wave",
          "package": "pf2e",
          "sourcePack": "adventure-specific-actions",
          "documentType": "Item",
          "compendiumKey": "Searing Wave",
          "sourceId": "1pkGuWi0YdP0v6g2",
          "name": "Searing Wave",
          "type": "action"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 424,
        "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Blazing Soul",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.adventure-specific-actions.Item.Blazing Soul",
          "package": "pf2e",
          "sourcePack": "adventure-specific-actions",
          "documentType": "Item",
          "compendiumKey": "Blazing Soul",
          "sourceId": "b1zNgSl4rY7xH8qW",
          "name": "Blazing Soul",
          "type": "action"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 94,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Staff of Fire (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Staff of Fire (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Staff of Fire (Greater)",
          "sourceId": "KcjaeMgrsBGgwUWL",
          "name": "Staff of Fire (Greater)",
          "type": "weapon"
        },
        "owner": {
          "sourceId": "RdJg2iIQx8lJyPWe",
          "name": "Bounty's Light",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:collar-of-inconspicuousness",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Rsoh0Y3RQD8x8ito",
      "slug": "collar-of-inconspicuousness",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/companion-items/collar-of-inconspicuousness.webp"
    },
    "sourceHash": "sha256:1fb188b553160f041d5e8869cd0b2a150f572e935954ab0cfdd3be8755dcad9c",
    "translatableHash": "sha256:da63adf4455224b04f6a755eeeee9ee2e92fca50c23b426e54b1e2055b070efe",
    "data": {
      "schemaVersion": 1,
      "name": "Collar of Inconspicuousness",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "companion",
        "invested",
        "primal"
      ],
      "description": "This leather collar's worn and almost threadbare look belies its magical nature. When your companion wears and invests the collar, it gains the ability to change its appearance from that of a ferocious animal into a more inconspicuous form.\nActivate—Adorable Guise A envision\nEffect You touch your animal companion to transform it into a nonthreatening Tiny creature of the same family or a similar creature (for instance, a house cat instead of a tiger, or a puppy instead of a wolf). This has the effects of Pest Form (2nd rank, or 4th rank if your companion can fly). The effect lasts until you Dismiss it.",
      "bulk": 1,
      "price": {
        "gp": 475
      },
      "usage": "worncollar",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 602,
        "uuid": "Compendium.pf2e.spells-srd.Item.Pest Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Pest Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Pest Form",
          "sourceId": "gfPjmG6Fe6D3MFjl",
          "name": "Pest Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Rsoh0Y3RQD8x8ito",
          "name": "Collar of Inconspicuousness",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-widening-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TJaumkbZy11sIAgR",
      "slug": "wand-of-widening-3rd-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-widening.webp"
    },
    "sourceHash": "sha256:fca969716885bfe5ef08fecfe4bbf83c9db5c6ed00ddc3a969c5c32a4edfe4f4",
    "translatableHash": "sha256:03c1f5333a0949fa30733a59da30797627b59f63596dd8f2cdb373e732e93736",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Widening (3rd-Rank Spell)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The end of this wand is forked with a peridot setting.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally take 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and increase its area. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet; add 5 feet to the length of a cone or line that is normally 15 feet long or smaller; or add 10 feet to the length of a larger cone or line.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, can't have a duration, and must have an area of burst (10 feet or more), cone, or line.",
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
    "contentId": "pf2e:item:equipment-srd:gallows-tooth",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "u6g7AClRFEAj4lf4",
      "slug": "gallows-tooth",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e942ef76c3a2c46cd50b2383cba0a45f9ae2b492899d6a1c20a507a66bbee5b7",
    "translatableHash": "sha256:5954052a0f8a41548acac44cd307fb2d7d8a542cc31f0403a528f354403eb222",
    "data": {
      "schemaVersion": 1,
      "name": "Gallows Tooth",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (manipulate)\nThis grisly molar hangs from a cord threaded through a hole just above its dried, exposed root. When you activate this talisman, make a melee Strike against an adjacent creature. That creature is Off-Guard against the Strike and until the end of your turn.",
      "bulk": 0,
      "price": {
        "gp": 100
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 288,
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
          "sourceId": "u6g7AClRFEAj4lf4",
          "name": "Gallows Tooth",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:invisibility",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VDudQ4x2ozosAbTb",
      "slug": "invisibility",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:d4950f862fdf72a98a7b491f6e9676c43a4c938077ffabe736a4187762fb218d",
    "translatableHash": "sha256:a7d3d79a8d1c9bba2db6c2f32f38b399dc1dc8737f16484e2d2bcbf7bb46171c",
    "data": {
      "schemaVersion": 1,
      "name": "Invisibility",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "illusion",
        "magical"
      ],
      "description": "Light seems to partially penetrate this armor.\nActivate—Go Invisible 1 (concentrate)\nFrequency once per day\nEffect With a thought, you become invisible for 1 minute, gaining the effects of a 2nd-rank Invisibility spell.\nCraft Requirements Supply one casting of invisibility.",
      "bulk": 0,
      "price": {
        "gp": 500
      },
      "usage": "etched-onto-light-armor",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 316,
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
          "sourceId": "VDudQ4x2ozosAbTb",
          "name": "Invisibility",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:corrosive",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wm0X7Pfd1bfocPSv",
      "slug": "corrosive",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:f2854d365f75868d97dee3aca27f756d724ea303aaf1534be4868eda4851f00d",
    "translatableHash": "sha256:b1a29540863d3c11afa29f3f19c8c4f25ef4732cc7ef89894a1eb65be1a22453",
    "data": {
      "schemaVersion": 1,
      "name": "Corrosive",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "acid",
        "magical"
      ],
      "description": "Acid sizzles across the surface of the weapon. When you hit with the weapon, add 1d6 acid damage to the damage dealt. In addition, on a critical hit, the target's armor (if any) takes 3d6 acid damage (before applying Hardness); if the target has a shield raised, the shield takes this damage instead.",
      "bulk": 0,
      "price": {
        "gp": 500
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:marvelous-miniature-boat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WzsKbMMewXbf1nws",
      "slug": "marvelous-miniature-boat",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da0c3a6d1004f0a8d5283e35a87dabfefe4318996636050ac44b002bfd3eef30",
    "translatableHash": "sha256:ca30a13b99fd3e056af9edc694fc668c4737f30e078c1972b4140dfb1def7dae",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Miniature (Boat)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "common",
      "traits": [
        "consumable",
        "expandable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nEvery marvelous miniature is an exceptionally small replica of a real creature or object. The miniature is made from wood, pewter, or other simple materials, and features a rune etched into the underside of the replica's base. Marvelous miniatures sometimes come packaged together; for example, the camping set features the boat, campfire, and horse miniatures. Activating a marvelous miniature causes it to transform into another creature or object, which then can be used as normal for that object. Each miniature can be activated only once, with most of them permanently becoming the item in their description.\nThis miniature can be activated only when tossed into a large body of water, such as a lake or broad river. It transforms into a Cutter. The cutter lasts 1 day.",
      "bulk": 0,
      "price": {
        "gp": 76
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 876,
        "uuid": "Compendium.pf2e.vehicles.Actor.Cutter",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.vehicles.Actor.Cutter",
          "package": "pf2e",
          "sourcePack": "vehicles",
          "documentType": "Actor",
          "compendiumKey": "Cutter",
          "sourceId": "Qlvei5jjRXdsXUPo",
          "name": "Cutter",
          "type": "vehicle"
        },
        "owner": {
          "sourceId": "WzsKbMMewXbf1nws",
          "name": "Marvelous Miniature (Boat)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-healing-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XSwEE8wjHr6UXzpw",
      "slug": "staff-of-healing-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a294325c82506b7a9f3d483a75fb1afdb30d8eb4b14f48c6baf8837216540b84",
    "translatableHash": "sha256:de9621e317501afd25d2a11affc4cd4c9e967a2b233b6e527d32303efcb6a232",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Healing (Greater)",
      "itemType": "weapon",
      "level": 8,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This white wood staff is capped at each end with a golden cross adorned with ruby cabochons. A staff of healing grants a +2 item bonus to the Hit Points you restore anytime you cast the heal spell using your own spell slots or charges from the staff.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Stabilize\n• 1st Heal\n• 2nd Clear Mind Heal Sound Body\n• 3rd Cleanse Affliction Heal\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 470
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
        "sourceIndex": 467,
        "uuid": "Compendium.pf2e.spells-srd.Item.Stabilize",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Stabilize",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Stabilize",
          "sourceId": "SnjhtQYexDtNDdEg",
          "name": "Stabilize",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 545,
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
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 618,
        "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Clear Mind",
          "sourceId": "EfFMLVbmkBWmzoLF",
          "name": "Clear Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 668,
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
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 712,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sound Body",
          "sourceId": "Et8RSCLx8w7uOLvo",
          "name": "Sound Body",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 791,
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
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 849,
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
          "sourceId": "XSwEE8wjHr6UXzpw",
          "name": "Staff of Healing (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:flaming",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XszNvxnymWYRaoTp",
      "slug": "flaming",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:29225326ff7a13004eb012188a064ff6f118901a276701a3996ff3d07994be10",
    "translatableHash": "sha256:681e582b1de2d15aa9c52c68eb64a7cd8b5de32d23a8fff9c155ec21f1666ed4",
    "data": {
      "schemaVersion": 1,
      "name": "Flaming",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "fire",
        "magical"
      ],
      "description": "A weapon with this rune is empowered by flickering flame. The weapon deals an additional 1d6 fire damage on a successful Strike, plus 1d10 persistent fire damage on a critical hit.",
      "bulk": 0,
      "price": {
        "gp": 500
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:healers-gloves-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0GOHTXBxs6H6ARBz",
      "slug": "healers-gloves-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8ff3ca4999c8a61b9a6411f84a30ec7b0f5b4fcb41e9056d82493f9d12f1ca6f",
    "translatableHash": "sha256:8f344b72855830add1df480b28748ff0cffe09e3e3d18409917f99204d3e1e34",
    "data": {
      "schemaVersion": 1,
      "name": "Healer's Gloves (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These clean, white gloves never show signs of blood, even when used to stitch up wounds or treat other ailments. They give you a +2 item bonus to Medicine checks.\nActivate—Healer's Touch A (manipulate)\nFrequency once per day\nEffect You can soothe the wounds of a willing, living, adjacent creature, restoring (4d6+15)[vitality,healing|shortLabel:true] Hit Points to that creature. This is a healing vitality effect. You can't harm undead with this healing.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:persona-mask-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0PPQl3TEr1yNhhN6",
      "slug": "persona-mask-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/persona-mask.webp"
    },
    "sourceHash": "sha256:e6053e273fbda164ba924659d0b702d12d838763d5ae0b11fd17cbcda12da923",
    "translatableHash": "sha256:fd59c2a9adbf3b5f776fbb15fc443d7cf5762ae8f7a7477adda2f47241df2920",
    "data": {
      "schemaVersion": 1,
      "name": "Persona Mask (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "fortune",
        "invested",
        "magical"
      ],
      "description": "Despite covering the entire face, this alabaster mask does not hinder vision or other senses. Wearing the mask grants a +2 item bonus to Performance checks while acting, orating, performing comedy, or singing.\nActivate—Assume Role A (concentrate)\nEffect You change the mask's appearance into an artistic rendition of a dramatic character of your choice.\nActivate—Sacrifice Role R (concentrate, fortune)\nFrequency once per day\nTrigger You fail a Performance check that benefits from the mask's bonus\nEffect You change the mask's character and reroll the Performance check, using the second result.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pendant-of-the-occult-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1bvH8zFQvDYky9tr",
      "slug": "pendant-of-the-occult-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d07bd259f4dd88d39d5f3ce310dcca7494d023ef7b6acb742ffd3cc72ca7e38e",
    "translatableHash": "sha256:63e41fd62134228f8be09da079ee779dd45d13322223488735da4b4cefcb2ae4",
    "data": {
      "schemaVersion": 1,
      "name": "Pendant of the Occult (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "This amulet is hollow and shaped in the form of an unblinking eye. Its cavity typically holds some fragment of occult text. While wearing the pendant, you gain a +2 item bonus to Occultism checks, and you can cast the Guidance cantrip as an occult innate spell.\nThe pendant can be activated.\nActivate—Dream Message 10 minutes (concentrate, manipulate)\nFrequency once per day\nEffect You cast a 4th-rank Dream Message spell.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 221,
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
          "sourceId": "1bvH8zFQvDYky9tr",
          "name": "Pendant of the Occult (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 530,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dream Message",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dream Message",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dream Message",
          "sourceId": "yM3KTTSAIHhyuP14",
          "name": "Dream Message",
          "type": "spell"
        },
        "owner": {
          "sourceId": "1bvH8zFQvDYky9tr",
          "name": "Pendant of the Occult (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:sleeves-of-storage-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3hv6NVC2rVu4QCNt",
      "slug": "sleeves-of-storage-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/sleeves-of-storage.webp"
    },
    "sourceHash": "sha256:18d4d960f3349edee8686059ae612e0c659c7d4b2dfa7800b651a574bad130fc",
    "translatableHash": "sha256:2dc82eea8d8a6aff814e935b5b38c95d1e56c83ff909dc9a187a671ae1003718",
    "data": {
      "schemaVersion": 1,
      "name": "Sleeves of Storage (Greater)",
      "itemType": "container",
      "level": 9,
      "rarity": "common",
      "traits": [
        "extradimensional",
        "invested",
        "magical"
      ],
      "description": "This loose robe has wide, voluminous sleeves that each contain an extradimensional space. These spaces each function as a Spacious Pouch (Type I) that can hold up to 20 Bulk of items (for a total of 40 Bulk), though no individual item can be of more than 1 Bulk; the sleeves grow slightly heavy as you reach maximum capacity. You can add or remove an item from a sleeve with a single hand free as an Interact action.\nIf a sleeve is completely empty, you can place your own familiar into that extradimensional space. It can survive comfortably in your sleeve for up to 4 hours, after which it begins to suffocate. While in your sleeve, it can't be affected or targeted by any effects, but you don't benefit from any master abilities. A familiar can exit the sleeve of its own volition with a single action that has the manipulate and move traits. You can't place any other creature into your sleeves, nor can you place your familiar in a sleeve if it's larger than Tiny. If your familiar is in your sleeve, you can't place any items in the sleeve.",
      "bulk": 0,
      "price": {
        "gp": 600
      },
      "usage": "worngarment",
      "category": "backpack",
      "group": "backpack"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 125,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Spacious Pouch (Type I)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Spacious Pouch (Type I)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Spacious Pouch (Type I)",
          "sourceId": "jaEEvuQ32GjAa8jy",
          "name": "Spacious Pouch (Type I)",
          "type": "backpack"
        },
        "owner": {
          "sourceId": "3hv6NVC2rVu4QCNt",
          "name": "Sleeves of Storage (Greater)",
          "type": "backpack"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-shardstorm-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3Lexs7KnhbV0HgFh",
      "slug": "wand-of-shardstorm-3rd-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-manifold-missiles.webp"
    },
    "sourceHash": "sha256:21adf3ef681801ce966d3bfeafcbd522b76f90f1b5a3a3e84ebea54acd951674",
    "translatableHash": "sha256:12c9f6fe3c05151f3713a77802dc45a33062c264d0324bf445cbd2518a5a35e6",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Shardstorm (3rd-Rank Spell)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "magical",
        "manipulate",
        "wand"
      ],
      "description": "This wand features a carved dragon's head at its top and a polished metal sphere set in its midsection.\nActivate Cast a Spell\nFrequency Once per day, plus overcharge\nEffect You cast Force Barrage at 3rd rank.\nAfter you cast the spell, an additional shard or shards are released from the wand at the start of each of your turns, as though you cast the 1-action version of force barrage. Choose targets each time. This lasts for 1 minute, until you're no longer wielding the wand, or until you try to activate the wand again.\nCraft Requirements Supply a casting of force barrage of the appropriate rank.",
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
        "sourceIndex": 262,
        "uuid": "Compendium.pf2e.spells-srd.Item.Force Barrage",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Force Barrage",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Force Barrage",
          "sourceId": "gKKqvLohtrSJj3BM",
          "name": "Force Barrage",
          "type": "spell"
        },
        "owner": {
          "sourceId": "3Lexs7KnhbV0HgFh",
          "name": "Wand of Shardstorm (3rd-Rank Spell)",
          "type": "consumable"
        }
      },
      {
        "syntax": "UUID_VALUE",
        "sourcePath": "/system/spell/_stats/compendiumSource",
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
          "sourceId": "gPnTQLQJNgMUu9Z2",
          "name": "Force Barrage",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:retrieval-belt-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8jNsUCsNe6PyenNZ",
      "slug": "retrieval-belt-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ded430d57ed3aaed27953f4080669069a038eb95d75c7159e2d468bbb0aaddd1",
    "translatableHash": "sha256:0c55102ab4f66d8c0b308b7d919f7f7a799304fe03f07cd11ee5ff9d97d2e3ba",
    "data": {
      "schemaVersion": 1,
      "name": "Retrieval Belt (Greater)",
      "itemType": "container",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "extradimensional",
        "invested",
        "magical"
      ],
      "description": "This belt is covered in small pouches that clasp with buttons of painstakingly carved stone. The belt is tied to an extradimensional space that can hold up to three items of 1 Bulk or less. Anyone holding the belt can sense its contents, but only those who've invested it can store or retrieve items. Many retrieval belts are found with an item already inside.\nActivate—Store Item 1 (manipulate)\nRequirements There is room for an item in the belt\nEffect One item you're holding with a Bulk of 1 or less vanishes into the belt's extradimensional space.\nActivate—Retrieve Item F (manipulate)\nRequirements An item is stored in the belt and you have a free hand\nEffect The item stored in the belt appears in your hand. Neither Store Item nor Retrieve Item can be activated again for 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 600
      },
      "usage": "wornbelt",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potency-crystal-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aSRUX4WGfalK4A5J",
      "slug": "potency-crystal-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/potency-crystal.webp"
    },
    "sourceHash": "sha256:cd11fe5eb913d52dec2c774b30d4b6f45bb401404667b68989e74bf20bba9977",
    "translatableHash": "sha256:e8532221b1de532c84f244ba62dc1451c8d6fc7ba960621a3c6561a25d62c244",
    "data": {
      "schemaVersion": 1,
      "name": "Potency Crystal (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You make an attack with the affixed weapon, but you haven't rolled yet\nThis fluorite crystal glows with a strange phosphorescence. When you activate the crystal, the weapon becomes a +2 greater striking weapon on the Strike and until the end of this turn, gaining a +2 item bonus to the attack roll and increasing the damage to three weapon damage dice.\nEffect: Potency Crystal",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 493,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potency Crystal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potency Crystal",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Potency Crystal",
          "sourceId": "R5ugeFK3MPwkbv0s",
          "name": "Effect: Potency Crystal",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aSRUX4WGfalK4A5J",
          "name": "Potency Crystal (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:extending",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bJORQsO9E1JCJh6i",
      "slug": "extending",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:7a55880274905ddc86671828ecff6086779105fc49d343033a4d9e309a49228c",
    "translatableHash": "sha256:433828acb0b6eb48f55f292a5ea3d0b5b9321fefd2509ba4428f51ee30bc68ef",
    "data": {
      "schemaVersion": 1,
      "name": "Extending",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "An extending rune allows you to extend your weapon to impossible lengths.\nActivate—Extend 2 (manipulate)\nEffect You extend your weapon, giving you an impossible reach. You Strike with the weapon, and you have reach 60 feet for the Strike.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "etched-onto-melee-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadow-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bSm0Hki8N2L50OZw",
      "slug": "shadow-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:fb9abbf32187e2caffd56bb6f23543abd34106e1053d37e4dbf7c759ca25e277",
    "translatableHash": "sha256:b50170196f70a0d821181ba285179715e59ec59bd6de67365d466afef58c5620",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Armor etched with this rune takes on a hazy black appearance. You gain a +2 item bonus to Stealth checks while wearing the armor.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "etched-onto-lm-nonmetal-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-life-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "c21stU5rhN4F2fZl",
      "slug": "elixir-of-life-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/elixir-of-life.webp"
    },
    "sourceHash": "sha256:6363af9eaa2024655d5f8d45a6f193ca79f2b6277f48233d938b473df030f5cc",
    "translatableHash": "sha256:fc4cee5527e6fb548d44f30a325d11a48f1088ff1d761fec1356c53aa1fb28a7",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of Life (Moderate)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate A (manipulate)\nElixirs of life accelerate a living creature's natural healing processes and immune system. Upon drinking this elixir, you regain (5d6+12)[healing] Hit Points and gain +2 item bonus to saving throws against diseases and poisons for 10 minutes.\nEffect: Elixir of Life",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 350,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Elixir of Life",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Elixir of Life",
          "sourceId": "lPRuIRbu0rHBkoKY",
          "name": "Effect: Elixir of Life",
          "type": "effect"
        },
        "owner": {
          "sourceId": "c21stU5rhN4F2fZl",
          "name": "Elixir of Life (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:collar-of-empathy",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cO7ANYLkcmfCn9c9",
      "slug": "collar-of-empathy",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/companion-items/collar-of-empathy.webp"
    },
    "sourceHash": "sha256:1eadd7be7512411a3cc5598fbfebd9b574d1e91ae14070c0e791278f2e4fdf60",
    "translatableHash": "sha256:b0463d64b1c55d334057d21b1902f3230051f755496845260fa88309cc802f40",
    "data": {
      "schemaVersion": 1,
      "name": "Collar of Empathy",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "companion",
        "invested",
        "primal"
      ],
      "description": "This ornate collar of intertwined leather strips of contrasting colors is paired with a bracelet of a similar construction. When you wear and invest the bracelet and your companion wears and invests the collar, you gain a stronger connection to each other. You and your companion can always sense each other's emotional states and basic physical wants and needs.\nActivate—Empathic Link 1 (concentrate)\nEffect You perceive through your animal companion's senses instead of your own. You can Sustain the activation. You are unaware of your own surroundings for as long as you are using your animal companion's senses. In addition to the obvious use when you are separated from your companion, this ability might allow you to notice sounds, scents, and other stimuli that your companion's senses register but yours alone don't.",
      "bulk": 1,
      "price": {
        "gp": 600
      },
      "usage": "worncollar",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:force-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DIzZr0K20eCbNzQo",
      "slug": "force-shield",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/force-shield.webp"
    },
    "sourceHash": "sha256:2321b72288a4f8d34d3aadc13cb8e1a9baa3677f44577958acf8b365fac8ee2f",
    "translatableHash": "sha256:691a962944cb504410add0983a02a3099d022e728dcb2df2a801e0b1040b2908",
    "data": {
      "schemaVersion": 1,
      "name": "Force Shield",
      "itemType": "shield",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "force",
        "magical"
      ],
      "description": "The edges of this elaborately engraved steel shield (Hardness 8, HP 32, BT 16) bear tiny glass tiles set in mosaic patterns.\nActivate—Force Bubble A (concentrate, force)\nFrequency once per day\nEffect The shield surrounds you with a bubble of force that protects you from harm, granting you resistance 5 to physical damage for 1 minute. The activation ends if you cease holding the shield.\nEffect: Force Shield",
      "bulk": 0.1,
      "price": {
        "gp": 650
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 512,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Force Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Force Shield",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Force Shield",
          "sourceId": "A4FWOpQ8G45LMocX",
          "name": "Effect: Force Shield",
          "type": "effect"
        },
        "owner": {
          "sourceId": "DIzZr0K20eCbNzQo",
          "name": "Force Shield",
          "type": "shield"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:eyes-of-the-cat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dLTN4FU3qBoDZ5CJ",
      "slug": "eyes-of-the-cat",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/eyes-of-the-eagle.webp"
    },
    "sourceHash": "sha256:ed6bfb39c29961e1d970b0ed067dce4ed2c6292f3d4dfde872c29e64b59b9aba",
    "translatableHash": "sha256:df939f7ce1b3336d0cbbca3e5283475f8ef781d1a37b5e12b189cbedc5a54328",
    "data": {
      "schemaVersion": 1,
      "name": "Eyes of the Cat",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These lenses of amber crystal fit over your eyes. They grant you low-light vision and a +2 item bonus to Perception checks that involve sight.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ventriloquists-ring-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dolBtAdB5lpQpQpp",
      "slug": "ventriloquists-ring-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a843befebc2037a970e9b23a4f7d6329ec4513d69778e3cead64c62c34e1f487",
    "translatableHash": "sha256:e55a58bbd81e9844f9658d4a99a87c232a565a449a7aaf4f16b2d32065228c9e",
    "data": {
      "schemaVersion": 1,
      "name": "Ventriloquist's Ring (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This elegant copper ring has miniature images of songbirds engraved around its circumference. You gain a +2 item bonus to Deception checks.\nActivate—Throw Voice 2 (manipulate)\nFrequency any number of times per day\nEffect Twisting the ring around your finger allows you to magically throw your voice, with the effects of a 2nd-rank Ventriloquism spell (check (perception, dc:27)).",
      "bulk": 0,
      "price": {
        "gp": 670
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 447,
        "uuid": "Compendium.pf2e.spells-srd.Item.Ventriloquism",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Ventriloquism",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Ventriloquism",
          "sourceId": "yV7Ouzaoe7DHLESI",
          "name": "Ventriloquism",
          "type": "spell"
        },
        "owner": {
          "sourceId": "dolBtAdB5lpQpQpp",
          "name": "Ventriloquist's Ring (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:eternal-eruption-of-pale-mountain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FB8EAFOz2hS6Jbic",
      "slug": "eternal-eruption-of-pale-mountain",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e32d1e4f99e097238d6cd91207a47069c0e1ef6075ae69d0c1b88ff4d2dd8e1c",
    "translatableHash": "sha256:000df2225248bdd33299e7a94d4d2174d736f4cc930ecac6fb8b18a9b3bb5606",
    "data": {
      "schemaVersion": 1,
      "name": "Eternal Eruption of Pale Mountain",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "fire",
        "magical"
      ],
      "description": "Resembling frozen lava, an eternal eruption is made with the same type of time magic, but is built to loop through time, reforming itself after it's used. Determining the difference between the two requires a close examination to see a faint, repeating pattern of red runes.\nActivate—Lava Bomb 2 (concentrate, manipulate)\nEffect You fling the eternal eruption, with the effect of Frozen Lava of Pale Mountain. After [[/br 2d4 #hours]], the eternal eruption reforms itself in a container on your person, typically the one you most recently stored it in.\nEternal Eruption of Pale Mountain deals 9d6 fire damage on a check (reflex, dc:27, basic, options:area-effect).",
      "bulk": 0.1,
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
        "sourceIndex": 492,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Frozen Lava of Pale Mountain",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Frozen Lava of Pale Mountain",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Frozen Lava of Pale Mountain",
          "sourceId": "QGgTedo2uMi6e9PR",
          "name": "Frozen Lava of Pale Mountain",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "FB8EAFOz2hS6Jbic",
          "name": "Eternal Eruption of Pale Mountain",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:humbug-pocket",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FXdESP5mmP01tL2v",
      "slug": "humbug-pocket",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d644db2d504201d2378d5b78c45aa872b73b514da6bbdbaa91e66c0ebb93c2c1",
    "translatableHash": "sha256:42e613d2ca03b2d7c42110300a2d78df6735c79b45d55a5412cc7a77306dada1",
    "data": {
      "schemaVersion": 1,
      "name": "Humbug Pocket",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "Fine silk lines this fashionable pocket, which is typically cinched to a belt or tailored into a piece of formal clothing. The pocket can hold no more than one item of light Bulk, plus incidental items of negligible Bulk. The pocket grants you a +2 item bonus to Society and to Stealth checks to Conceal an Object in the pocket.\nThe pocket can produce stationery and writing implements of high quality. When you Create a Forgery, you can use the pocket to produce ideal materials to make the forgery. Any materials must be able to fit through the opening of the pocket, such as a roll of parchment, an inkwell, or a loupe. Though they're excellent tools, they don't have any value if sold and disappear once their function in making a forgery is fulfilled.\nActivate—Papers Please 1 (concentrate, manipulate)\nFrequency once per hour\nEffect You create a temporary forgery by imagining the document you need and pulling it from the pocket. Attempt to Create a Forgery of the document you desire, with the GM rolling the secret check as normal. Its quality is based on your check, but the document disintegrates after 1 hour.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 299,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Conceal an Object",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Conceal an Object",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Conceal an Object",
          "sourceId": "qVNVSmsgpKFGk9hV",
          "name": "Conceal an Object",
          "type": "action"
        },
        "owner": {
          "sourceId": "FXdESP5mmP01tL2v",
          "name": "Humbug Pocket",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create Forgery",
        "label": "Create a Forgery",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create Forgery",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create Forgery",
          "sourceId": "ftG89SjTSa9DYDOD",
          "name": "Create Forgery",
          "type": "action"
        },
        "owner": {
          "sourceId": "FXdESP5mmP01tL2v",
          "name": "Humbug Pocket",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:messengers-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HAtj6AGCIZHpD7Nl",
      "slug": "messengers-ring",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5e35a7df2258c0328af316f5da09b7a8c187c9e3d9ff2cb321822fe8f32b06f4",
    "translatableHash": "sha256:eeed1336124f6cdb01d45d209544e9ca72895737d70a67161cbaef230b21d1e7",
    "data": {
      "schemaVersion": 1,
      "name": "Messenger's Ring",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This silver signet ring changes to match the insignia of a lord or organization you serve (or your own face, if you serve no one else). It grants you a +2 item bonus to Diplomacy checks and lets you cast Message as an arcane innate spell at will.\nActivate—Dispatch Messenger 1 minute (concentrate)\nFrequency once per day\nEffect The ring casts Animal Messenger to your specification. The animal is a magical creature that springs from the ring, and its appearance suits the iconography or heraldry of the lord or organization represented by the ring.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 207,
        "uuid": "Compendium.pf2e.spells-srd.Item.Message",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Message",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Message",
          "sourceId": "vLzFcIaSXs7YTIqJ",
          "name": "Message",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HAtj6AGCIZHpD7Nl",
          "name": "Messenger's Ring",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 471,
        "uuid": "Compendium.pf2e.spells-srd.Item.Animal Messenger",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Animal Messenger",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Animal Messenger",
          "sourceId": "yhz9fF69uwRhnHix",
          "name": "Animal Messenger",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HAtj6AGCIZHpD7Nl",
          "name": "Messenger's Ring",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:mages-hat-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Hd1AfC08ytBg67Ey",
      "slug": "mages-hat-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c46fcc7afa00194f280dccc37a2794d33647e66091e3338ebcdc158dff6d1b63",
    "translatableHash": "sha256:813d1c29f1b33962088a5f9cc7c8be4d9e44b85639ec5c71aa3bfe9576666aad",
    "data": {
      "schemaVersion": 1,
      "name": "Mage's Hat (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "arcane",
        "invested"
      ],
      "description": "This hat comes in many forms, such as a colorful turban or a pointy hat with a brim, and is adorned with symbols or runes. It grants you a +2 item bonus to Arcana checks and allows you to cast the Prestidigitation cantrip as an arcane innate cantrip.\nThis larger, fancier hat can be activated. Each greater mage's hat has a specific 4th-rank summon spell from the arcane list woven into its fabric, typically Summon Animal or Summon Elemental. If you prepare arcane spells, you can change the spell to a different 4th-rank arcane summon spell you know when you invest it.\nActivate—Hat Spell Cast a Spell\nFrequency once per day\nEffect You doff the hat, causing magical energy to pour from it. You cast the spell stored in the hat.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 200,
        "uuid": "Compendium.pf2e.spells-srd.Item.Prestidigitation",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Prestidigitation",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Prestidigitation",
          "sourceId": "Qw3fnUlaUbnn7ipC",
          "name": "Prestidigitation",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Hd1AfC08ytBg67Ey",
          "name": "Mage's Hat (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 467,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Animal",
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Hd1AfC08ytBg67Ey",
          "name": "Mage's Hat (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 523,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Elemental",
          "sourceId": "lpT6LotUaQPfinjj",
          "name": "Summon Elemental",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Hd1AfC08ytBg67Ey",
          "name": "Mage's Hat (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:shining-symbol-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M7c4uXraP05HYNXs",
      "slug": "shining-symbol-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:31f68b1b8d1ee29c6080692b7d0310d11d46da466f5e22d612bda266b5aa296f",
    "translatableHash": "sha256:764e8808e80c1f09bb79730e53500a500c5602228555a2def258da74efe884ae",
    "data": {
      "schemaVersion": 1,
      "name": "Shining Symbol (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "divine",
        "invested",
        "light"
      ],
      "description": "If you worship a deity, this golden amulet transforms into your deity's religious symbol when you invest it. You gain a +2 item bonus to Religion. The symbol casts dim light in a 20-foot emanation.\nActivate—Spiritual Light 2 (concentrate, light, revelation)\nFrequency once per day\nEffect The light cast by the symbol becomes bright light for 10 minutes and shines through bodies to reveal hints of the spirits within. Creatures in the light receive a –2 status penalty to Deception and Stealth checks, and while it's active your enemies in the light gain weakness 5 to spirit damage.\nYou can Dismiss this activation.\nAura: Shining Symbol\nCraft Requirements You must be holy or unholy.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 762,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Aura: Shining Symbol",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Aura: Shining Symbol",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Aura: Shining Symbol",
          "sourceId": "NNxguHneoM3NvW1S",
          "name": "Aura: Shining Symbol",
          "type": "effect"
        },
        "owner": {
          "sourceId": "M7c4uXraP05HYNXs",
          "name": "Shining Symbol (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:trackers-goggles-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OYeYYJ4i66VtGY3O",
      "slug": "trackers-goggles-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/trackers-goggles.webp"
    },
    "sourceHash": "sha256:15fcd371bb54fb8d11aa77a03653471083b8a5e85ce0c6f35173ecbe58611c92",
    "translatableHash": "sha256:b4fe58babbfde6696f0eeb586ee122a71dca20f360f7af23e4e283b1b6da480e",
    "data": {
      "schemaVersion": 1,
      "name": "Tracker's Goggles (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These lenses of forest-green glass are bound in rough leather stitched with crude twine.\nWhile wearing these goggles, you gain a +2 bonus to Survival checks to Sense Direction and Track.\nIf you fail a check to Track, you can try again after 15 minutes rather than an hour.",
      "bulk": 0,
      "price": {
        "gp": 660
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bracers-of-missile-deflection-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P5nasaE0JgvkZyZp",
      "slug": "bracers-of-missile-deflection-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:238385362b66452804a914a7e30275817332ae1e5318c6145a3f6cc2c01466b0",
    "translatableHash": "sha256:0b6dcc37eea3a94e1a479b46fa276b2779924e2c62444f779796f0c52164d704",
    "data": {
      "schemaVersion": 1,
      "name": "Bracers of Missile Deflection (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These bracers are made from plates of durable dawnsilver and gleam like the summer sun.\nActivate R (manipulate)\nFrequency once every 10 minutes\nTrigger A ranged weapon attack hits you but doesn't critically hit\nRequirements You are aware of the attack and not off-guard\nEffect The bracers send the missile off-course. You gain a +2 circumstance bonus to AC against the triggering attack. If this would cause the attack to be a failure, the attack misses you.\nEffect: Bracers of Missile Deflection",
      "bulk": 0.1,
      "price": {
        "gp": 650
      },
      "usage": "wornbracers",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 630,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bracers of Missile Deflection",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bracers of Missile Deflection",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bracers of Missile Deflection",
          "sourceId": "PeiuJ951kkBPTCSM",
          "name": "Effect: Bracers of Missile Deflection",
          "type": "effect"
        },
        "owner": {
          "sourceId": "P5nasaE0JgvkZyZp",
          "name": "Bracers of Missile Deflection (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragonslayers-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Q8BscHUFiM1a86PO",
      "slug": "dragonslayers-shield",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/dragonslayers-shield.webp"
    },
    "sourceHash": "sha256:64f115bcdadb09cbe5da63ce5f2cf87573ff3f51c16d7fd0ad726b8e53a4e446",
    "translatableHash": "sha256:a35ee99dc524222877c0f4ab681eec97affc7b50244f8b0f60f8f25d6efbf4a3",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonslayer's Shield",
      "itemType": "shield",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A dragonslayer's shield is a steel shield covered with dragonhide from a specific dragon, which visually distinguishes each shield from the others. While raised, this steel shield (Hardness 8, HP 32, BT 16) grants its circumstance bonus to Reflex saves against area effects (as well as to AC, as normal).\nWhile you hold the shield, it also grants you a +2 circumstance bonus to Will saves against a dragon's frightful presence ability. The shield has resistance 10 against the damage type corresponding to the dragon breath of the dragon whose hide was used in its creation (for example, a dragonslayer's shield made with the hide of a diabolic dragon would grant resistance to fire); this applies after reducing the damage for Hardness, so when you use Shield Block, the dragonslayer's shield takes 18 less damage from attacks of that damage type. You can use Shield Block against effects that deal damage of that type.\nCraft Requirements The initial raw materials must include at least 30 gp of dragonhide.",
      "bulk": 1,
      "price": {
        "gp": 670
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:frozen-lava-of-pale-mountain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QGgTedo2uMi6e9PR",
      "slug": "frozen-lava-of-pale-mountain",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f2df86846f166d08684fb6b3f5a11c1eb91356414382efcaf2e5d6a37bc3af45",
    "translatableHash": "sha256:5481f80936c25a8aa6c555f6433fab6c884dbb9b61878443f18845dd88d4cef3",
    "data": {
      "schemaVersion": 1,
      "name": "Frozen Lava of Pale Mountain",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "fire",
        "magical"
      ],
      "description": "Activate A (manipulate)\nThis blueberry-sized bead appears to be a sphere of glass with a flickering light at its core. In truth, the \"glass\" is a bubble of solidified time magic, containing suspended lava at the exact point before a volcanic eruption. When activated, it becomes a tiny beacon of bright light before unleashing its power. After you Activate frozen lava, it quickly heats up. If you or anyone else hurls it (an Interact action), it detonates as a Fireball where it lands. Your toss can place the center of the fireball anywhere within 70 feet, though at the GM's discretion, you might need to make an attack roll if the throw is unusually challenging. If no one hurls the bead by the start of your next turn, it pops like an ostentatious but harmless firework.\nFrozen lava comes in many varieties, made of lava taken from notable volcanoes on Golarion and across the planes.\nFrozen lava of Pale Mountain deals 9d6 fire damage on a check (reflex, dc:27, basic, options:area-effect).",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 537,
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
          "sourceId": "QGgTedo2uMi6e9PR",
          "name": "Frozen Lava of Pale Mountain",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:dancing-scarf-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QJ1PhbtbLzwhRlY0",
      "slug": "dancing-scarf-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/dancing-scarf.webp"
    },
    "sourceHash": "sha256:16d0a5ebf88bc47bc0b775d15a639c1bc1d4a207450977693f52eb15fb33efcb",
    "translatableHash": "sha256:ea68fa250aff9c67015c2e0279c41057f6d73a8ef94b618ad86f580ad5e55cc1",
    "data": {
      "schemaVersion": 1,
      "name": "Dancing Scarf (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "visual"
      ],
      "description": "This long and billowing scarf is typically woven of silk or sheer fabric and adorned with bells or other jangling bits of shiny metal. It grants a +2 item bonus to Performance checks to dance.\nActivate—Swirling Scarf A (manipulate)\nRequirements On your most recent action, you succeeded at a Performance check to dance\nEffect You become Concealed until the beginning of your next turn. You can also Stride up to half your Speed or Step.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "wornbelt",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 453,
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
          "sourceId": "QJ1PhbtbLzwhRlY0",
          "name": "Dancing Scarf (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:grievous",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qUnDHEXteUQGE8yp",
      "slug": "grievous",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:bbfa80fa33a428c0358e1166f912a4cbba4f89c2282d0227d7db2e05aa8912ed",
    "translatableHash": "sha256:ce62aedea85464ed2b92eff6728fea4e6d7a294d220daf05a700e0ad1397fe65",
    "data": {
      "schemaVersion": 1,
      "name": "Grievous",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "When your attack roll with this weapon is a critical hit and gains the critical specialization effect, you gain an additional benefit depending on the weapon group.\nAxe You can damage a third creature, with the same restrictions.\nBow The Athletics check to pull the missile free is DC 20.\nBrawling The target takes a -4 circumstance penalty to its save.\nClub You can knock the target up to 15 feet away.\nCrossbow If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile, as the bow critical specialization.\nDart The base Persistent Bleed Damage increases to 2d6.\nFirearm The target takes a -4 circumstance penalty to its save.\nFlail You move the target 5 feet. You can't move it away from you, but you can move it in another direction of your choice.\nHammer You can also knock the target 5 feet away from you.\nKnife The target takes a –5-foot status penalty to its Speed while it has the Persistent Bleed Damage.\nPick The extra damage from the critical specialization effect increases to 4 per weapon damage die.\nPolearm You can move the target up to 10 feet.\nShield You can knock the target up to 10 feet away.\nSling The target also takes a –10-foot status penalty to its Speed for 1 round if it fails the save.\nSpear The clumsy condition lasts for 2 rounds.\nSword The target is Off-Guard until the end of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 716,
        "uuid": "Compendium.pf2e.conditionitems.Item.Persistent Damage",
        "label": "Persistent Bleed Damage",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Persistent Damage",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Persistent Damage",
          "sourceId": "lDVqvLKA6eF3Df60",
          "name": "Persistent Damage",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qUnDHEXteUQGE8yp",
          "name": "Grievous",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1241,
        "uuid": "Compendium.pf2e.conditionitems.Item.Persistent Damage",
        "label": "Persistent Bleed Damage",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Persistent Damage",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Persistent Damage",
          "sourceId": "lDVqvLKA6eF3Df60",
          "name": "Persistent Damage",
          "type": "condition"
        },
        "owner": {
          "sourceId": "qUnDHEXteUQGE8yp",
          "name": "Grievous",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1839,
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
          "sourceId": "qUnDHEXteUQGE8yp",
          "name": "Grievous",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-continuation-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "R88HWv9rw1VNMRer",
      "slug": "wand-of-continuation-3rd-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-continuation.webp"
    },
    "sourceHash": "sha256:26cf3da6a16d473fa433acfb886643fa05a38cfae965e67dc718611018652ece",
    "translatableHash": "sha256:c8455158678e6c6561cef9980fdff6767a14ffefcf24b181d6a19b97cc45c252",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Continuation (3rd-Rank Spell)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand increases a spell's duration. Yellow embers spiral over its surface until the spell ends.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and its duration is increased by half.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2 and a duration no less than 10 minutes and no greater than 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:explosive-ammunition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rKknk8odXDBpON5l",
      "slug": "explosive-ammunition",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/explosive-ammunition.webp"
    },
    "sourceHash": "sha256:709c6910a2b7df9116991748b52dddc29fe7b3eef28343f54ba9a67df9ad4b40",
    "translatableHash": "sha256:f71a2d90999430375f42f408e8ecf7fdb51c8ac4eb54acc3ab049ceddca60090",
    "data": {
      "schemaVersion": 1,
      "name": "Explosive Ammunition",
      "itemType": "ammunition",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "fire",
        "magical"
      ],
      "description": "Ammunition any\nActivate A (manipulate)\nThis piece of ammunition is coated in gritty black soot. When activated explosive ammunition hits a target, the missile explodes in a 10-foot burst, dealing 6d6 fire damage to each creature in the area (including the target). Each creature must attempt a check (reflex, dc:25, basic, options:area-effect) save.",
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
    "contentId": "pf2e:item:equipment-srd:arboreal-boots-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rRAx62TLPTZSiaLD",
      "slug": "arboreal-boots-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1b0c3e8dea627377ba7fd4cdaea921364d1cac63d29ef744afb641823ce17285",
    "translatableHash": "sha256:525cba49650e649cdbebe816bac20229d57c37d6a3fc6d8d544e1b737d169c30",
    "data": {
      "schemaVersion": 1,
      "name": "Arboreal Boots (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "These soft leather boots are embossed with simple woodland scenes. The boots grant a +2 item bonus to Acrobatics and allow you to ignore difficult terrain from plants and fungi.\nYou also gain a 10-foot climb Speed while climbing plants or fungi and don't need to use your hands to Climb them.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:coyote-cloak-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sls3pfkhgCbW723f",
      "slug": "coyote-cloak-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/coyote-cloak.webp"
    },
    "sourceHash": "sha256:8080ee76863d618e9f73db68f0b4e663794975333bf8e21724c66496787f44a6",
    "translatableHash": "sha256:1ef857839cf728efd94a93596fdca984491f054e98076e00703e6ecf6fabb2d9",
    "data": {
      "schemaVersion": 1,
      "name": "Coyote Cloak (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This dusty coat is made of mangy brown-and-gray coyote fur. You gain a +2 item bonus to Survival checks. If you critically succeed at your Survival check to Subsist, you can feed four times as many additional creatures.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:magic-wand-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Sn7v9SsbEDMUIwrO",
      "slug": "magic-wand-4th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:1c669dfd7031b4556af87b6bf9299a2ce229612507d6ae108ce51a6b722d910a",
    "translatableHash": "sha256:88884c918532416659cb485e4ecc6bf73ff2b154730a9b043296e332c6df6305",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Wand (4th-Rank Spell)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This baton is about a foot long and contains a single spell. The appearance typically relates to the spell within.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank.\nCraft Requirements Supply a casting of the spell at the listed rank.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cheetahs-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "t4X6GDybqLmt7UkN",
      "slug": "cheetahs-elixir-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/cheetahs-elixir.webp"
    },
    "sourceHash": "sha256:9cedc7d0ea284c95097aea91447a814a3bfa14fcf42c991778ded8e5c0438c1e",
    "translatableHash": "sha256:69424cace8df3ecc96efdcbf2fca5d0f8742c055c72105f9a96e10789beb02c7",
    "data": {
      "schemaVersion": 1,
      "name": "Cheetah's Elixir (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate A (manipulate)\nEnzymatic compounds in this elixir strengthen and excite the muscles in your legs. You gain a +10 foot status bonus to your Speed for 1 hour.\nEffect: Cheetah's Elixir (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 239,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Cheetah's Elixir (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Cheetah's Elixir (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Cheetah's Elixir (Greater)",
          "sourceId": "PeuUz7JaabCgl6Yh",
          "name": "Effect: Cheetah's Elixir (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "t4X6GDybqLmt7UkN",
          "name": "Cheetah's Elixir (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:charlatans-gloves-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "t8RXms7xq8atF9W7",
      "slug": "charlatans-gloves-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8bfe8a4c47e5fc384209b701dd3b1cc30026414ffd83c85ee1f1b171a809a43e",
    "translatableHash": "sha256:343afb748ead5869a96be5f858836d1bd5f83ffc8687be3bb31f29ffa6eae489",
    "data": {
      "schemaVersion": 1,
      "name": "Charlatan's Gloves (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Tiny silver hooks decorate these fine silk gloves. They grant a +2 item bonus to Thievery and allow you to cast Telekinetic Hand as an innate occult spell.\nIf you are also wearing a charlatan's cape, whenever you would move an object using telekinetic hand, you may instead have it disappear in a puff of smoke and reappear hovering in a space adjacent to yours. This is a teleportation effect. The item hovers until the end of your turn or until retrieved with an Interact action.",
      "bulk": 0.1,
      "price": {
        "gp": 600
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 115,
        "uuid": "Compendium.pf2e.spells-srd.Item.Telekinetic Hand",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Telekinetic Hand",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Telekinetic Hand",
          "sourceId": "pwzdSlJgYqN7bs2w",
          "name": "Telekinetic Hand",
          "type": "spell"
        },
        "owner": {
          "sourceId": "t8RXms7xq8atF9W7",
          "name": "Charlatan's Gloves (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:scroll-of-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tjLvRWklAylFhBHQ",
      "slug": "scroll-of-5th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fe950a2767036c887a461866ba0c0df4c7f59baf2ffc8ec01b54dada52470da8",
    "translatableHash": "sha256:ea4f661c0de59c865e4d7a081dada3487f344d1f6820136406617ba6742bfcd1",
    "data": {
      "schemaVersion": 1,
      "name": "Scroll of 5th-rank Spell",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "scroll"
      ],
      "description": "Casting a Spell from a scroll requires holding the scroll in one hand and activating it with a Cast a Spell activity using the normal number of actions for that spell.\nThe spell must appear on your spell list. Because you're the one Casting the Spell, use your spell attack modifier and spell DC. The spell also gains the appropriate trait for your tradition (arcane, divine, occult, or primal).\nAny physical costs are provided when a scroll is created, so you don't need to provide them when casting from a scroll. If the spell requires a locus, you must have that locus to Cast the Spell from a scroll.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "scroll",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:emerald-grasshopper-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VeqgYabyGPd7kuSg",
      "slug": "emerald-grasshopper-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/emerald-grasshopper.webp"
    },
    "sourceHash": "sha256:95478d8d04ad5748c6c25484507b3953c0b1d784abb8d1d57855ab5d99759ddf",
    "translatableHash": "sha256:cce2c27e11d802e4f8f6ccff4677e4edfb0c26d19912e2c912a4af212015d47a",
    "data": {
      "schemaVersion": 1,
      "name": "Emerald Grasshopper (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nRequirements You're trained in Athletics\nThis metal grasshopper studded with emeralds is usually clasped to the legs of a suit of armor.\nWhen you activate it, make a Leap, traveling up to 100 feet horizontally and up to 30 feet vertically.\nThis benefit applies to any other Leaps you make before the end of your turn.\nIf you don't end your jump on solid ground, you flutter in the air until the end of your turn, then fall harmlessly at a rate of 60 feet per round until you reach the ground.",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 290,
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
          "sourceId": "VeqgYabyGPd7kuSg",
          "name": "Emerald Grasshopper (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:basilisk-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vL6AtFbcxbipGvtf",
      "slug": "basilisk-eye",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/basilisk-eye.webp"
    },
    "sourceHash": "sha256:ccff559d34dbb25d3e7c7aa54fbdb606ff5224f1ff4005c798e43402dc7d657b",
    "translatableHash": "sha256:aeaf98035a2615f66bd1feed8eb67ad86fed1168e20c12acc3630533f009cec6",
    "data": {
      "schemaVersion": 1,
      "name": "Basilisk Eye",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "visual"
      ],
      "description": "Activate F (concentrate)\nTrigger You Shield Block a melee attack with the affixed shield\nThis slimy green stone glows with a strong light whenever the shield it adorns blocks a melee attack. When the eye is activated, the attacker must succeed at a check (fortitude, dc:25) save or become Slowed 1 for 1 minute as its body slowly stiffens in partial petrification.",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "affixed-to-a-shield",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 115,
        "uuid": "Compendium.pf2e.feats-srd.Item.Shield Block",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Shield Block",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Shield Block",
          "sourceId": "jM72TjJ965jocBV8",
          "name": "Shield Block",
          "type": "feat"
        },
        "owner": {
          "sourceId": "vL6AtFbcxbipGvtf",
          "name": "Basilisk Eye",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 416,
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
          "sourceId": "vL6AtFbcxbipGvtf",
          "name": "Basilisk Eye",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:gloom-blade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "w5ZX1R3dPvuLcuRx",
      "slug": "gloom-blade",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/gloom-blade.webp"
    },
    "sourceHash": "sha256:069d574fedb8981c494791ee5d423e3c712dfdde93cdec5f9e2dc5e427299c27",
    "translatableHash": "sha256:c9843a1d04b22da0eb27e3a5f95be7558d146ad5f3fbb8a80c5dc8000f3d3c2d",
    "data": {
      "schemaVersion": 1,
      "name": "Gloom Blade",
      "itemType": "weapon",
      "level": 9,
      "rarity": "common",
      "traits": [
        "agile",
        "finesse",
        "magical",
        "versatile-s"
      ],
      "description": "As black as coal, this blade grows more potent in darkness. While in bright light, it functions as a +1 shortsword and doesn't appear to radiate a magic aura to Detect Magic or similar spells unless the spells are 4th rank or higher.\nIn dim light or darkness, the gloom blade becomes a +2 striking shortsword. Whenever you use the gloom blade to attack a creature you're undetected by, you deal 1d6 additional precision damage.\nTo upgrade the gloom blade's fundamental runes, start with the base +1 shortsword, but if you improve it beyond a +2 striking shortsword, the runes apply in dim light or darkness as well.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 173,
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
          "sourceId": "w5ZX1R3dPvuLcuRx",
          "name": "Gloom Blade",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:trident-of-lightning",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wDhqRxuXPQfyD0eX",
      "slug": "trident-of-lightning",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/javelin-of-lightning.webp"
    },
    "sourceHash": "sha256:43f0fefcb2fb5b490aec15722cabe99e695136e89a4cba9cc35bada04fc9534c",
    "translatableHash": "sha256:e9f340079752a2ffcccb8fd9305f6ac702de2d8931341bd8022aa9da4d1bd037",
    "data": {
      "schemaVersion": 1,
      "name": "Trident of Lightning",
      "itemType": "consumable",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "electricity",
        "magical"
      ],
      "description": "Activate 2 (concentrate, manipulate)\nThis item looks like a normal trident carved with Gozren motifs. If thrown without being activated, it wobbles in the air and fails to strike true.\nWhen you Activate the trident, the carvings crackle with electricity. You then hurl the trident. It shatters immediately after leaving your hand and unleashes its magic as a 4th-rank Lightning Bolt originating from your space.\nThe bolt deals 5d12 electricity damage and has a check (reflex, dc:25, basic) save.\nCraft Requirements Supply a casting of lightning bolt (4th rank).",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 443,
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
          "sourceId": "wDhqRxuXPQfyD0eX",
          "name": "Trident of Lightning",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:armbands-of-athleticism",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wI4Tj8bNwpZHequC",
      "slug": "armbands-of-athleticism",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:20806e09ca175522886e954bb4c2f8579c839af7e739425ff9a49613447d9d37",
    "translatableHash": "sha256:57aa78449bdebe2c3653284060a82c82f2a71adf97ea4e07b72d8aed09dc5219",
    "data": {
      "schemaVersion": 1,
      "name": "Armbands of Athleticism",
      "itemType": "equipment",
      "level": 9,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Skilled awl work has imprinted images of a muscled weightlifter into these tiered leather bands, which grant you enhanced stamina and skill when performing athletic exercises.\nWhile fastened to your upper arms, the armbands give you a +2 item bonus to Athletics checks.\nIn addition, whenever you use an action to Climb or Swim and you succeed at the Athletics check, add a +5-foot item bonus to the distance you move.",
      "bulk": 0.1,
      "price": {
        "gp": 645
      },
      "usage": "wornarmbands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellstrike-ammunition-type-iv",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WSZl9S0Nui7pTMa8",
      "slug": "spellstrike-ammunition-type-iv",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/spellstrike-ammunition.webp"
    },
    "sourceHash": "sha256:b9c7cf36caa280a02a6dacae0e733507e5ee22b2df203efd7aafcea943ed1bfc",
    "translatableHash": "sha256:db05c8a6ab430c1b5a7c5b1d0883a99cb5b55551e1ee69e4d535c90140838d4d",
    "data": {
      "schemaVersion": 1,
      "name": "Spellstrike Ammunition (Type IV)",
      "itemType": "ammunition",
      "level": 9,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 2 Cast a Spell\nMystic patterns create a magic reservoir within this ammunition. You activate spellstrike ammunition by Casting a Spell into the ammunition. The spell must be of a spell rank the ammunition can hold, and the spell must be able to target a creature other than the caster. A creature hit by activated spellstrike ammunition is targeted by the spell. If the creature isn't a valid target for the spell, the spell is lost.\nThe ammunition affects only the target hit, even if the spell would normally affect more than one target. If the spell requires a spell attack roll, use the result of your ranged attack roll with the ammunition to determine the degree of success of the spell. If the spell requires a saving throw, the target attempts the save against your spell DC. Combine the Strike and spell's damage for the purpose of resistances and weaknesses.\nThe maximum rank of spell the ammunition can hold determines its item level and Price.\nMaximum Spell Rank 4th",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chaplains-cudgel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yHtlXoXKPis7eTR0",
      "slug": "chaplains-cudgel",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/mace.webp"
    },
    "sourceHash": "sha256:bb8dfe6e968be2b30794de276643bd9b2d9bbaeb29eb121d0f42bbca0ddd99b6",
    "translatableHash": "sha256:07d3048d1680d2dfb3f81b8843242b048efce715618deee035075adc25154f02",
    "data": {
      "schemaVersion": 1,
      "name": "Chaplain's Cudgel",
      "itemType": "weapon",
      "level": 9,
      "rarity": "common",
      "traits": [
        "magical",
        "shove"
      ],
      "description": "This simple wooden +1 striking mace transforms in the hands of a wielder with great faith in a deity.\nActivate—Bow to a Higher Power 1 (concentrate)\nRequirements You worship a deity\nEffect You supplicate yourself to your deity, and the chaplain's cudgel becomes a conduit for their power. It transforms into your deity's favored weapon, as the Shifting rune except that it functions even if the favored weapon is a ranged weapon, a weapon requiring two hands, or both. Etchings of your deity's religious symbol and other divine depictions spread across the weapon from end to end. This lasts until this activation is used again. While the weapon is attuned to you in this way, you get the following benefits.\n• If you have the holy or unholy trait, you can add that trait to Strikes you make with the weapon.\n• Whenever you cast a divine spell that takes 2 actions or more to cast, the next Strike you make with this weapon before the end of your next turn gets a status bonus to its damage roll equal to the weapon's number of damage dice. Casting a spell matching the options from your deity's divine font grants this benefit no matter how many actions you spent casting it.",
      "bulk": 1,
      "price": {
        "gp": 650
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 480,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Shifting",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Shifting",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Shifting",
          "sourceId": "roeYtwlIe65BPMJ1",
          "name": "Shifting",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "yHtlXoXKPis7eTR0",
          "name": "Chaplain's Cudgel",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:mistform-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "04giYigfDL5geu5f",
      "slug": "mistform-elixir-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fc6dcb17804d72c24ad07172e8d004e7228ea0517010830a9be4a7c8d14807d6",
    "translatableHash": "sha256:8e1064710d17ab104c1f797aae0033fe25af676696ebef8518c4bf40028093e1",
    "data": {
      "schemaVersion": 1,
      "name": "Mistform Elixir (Greater)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "illusion",
        "visual"
      ],
      "description": "Activate A (manipulate)\nA faint mist emanates from your skin, making you Concealed for 5 minutes.\nAs usual being concealed when your position is still obvious, you can't use this concealment to Hide or Sneak.",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 141,
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
          "sourceId": "04giYigfDL5geu5f",
          "name": "Mistform Elixir (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 312,
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
          "sourceId": "04giYigfDL5geu5f",
          "name": "Mistform Elixir (Greater)",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 360,
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
          "sourceId": "04giYigfDL5geu5f",
          "name": "Mistform Elixir (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadow-signet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1T1TJB929nC7wBtC",
      "slug": "shadow-signet",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/shadow-signet.webp"
    },
    "sourceHash": "sha256:e20cb587047f5df929216c8789888539e6710f24d507bbca5ccf9c9797f92c6d",
    "translatableHash": "sha256:1b01e5946f49d5e50b19baba90b7178e5ae989263de5ab27eadb74d4a90ddd31",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Signet",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This obsidian ring allows you to partially warp your spells through the Netherworld, allowing them to strike directly at a target's body.\nActivate f (concentrate, spellshape)\nEffect If your next action is to Cast a Spell that requires a spell attack roll against Armor Class, choose Fortitude DC or Reflex DC. You make your spell attack roll against that defense instead of AC. If the spell has multiple targets, the choice of DC applies to all of them.",
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
    "contentId": "pf2e:item:equipment-srd:maestros-instrument-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3mprh9aZ670HfNhT",
      "slug": "maestros-instrument-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/maestros-instrument.webp"
    },
    "sourceHash": "sha256:77e561793ad0ff4bfea2f452728cd61012cd96e041b68a90daad6ebf7bcbd4be",
    "translatableHash": "sha256:17380b81a3c99cfa8019e5493bba251a06b83ca720ca250bbf7c1e16739c6c05",
    "data": {
      "schemaVersion": 1,
      "name": "Maestro's Instrument (Moderate)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A maestro's instrument can be crafted in the form of any variety of handheld musical instruments. A maestro's instrument grants you a +2 item bonus to Performance checks while playing music with the instrument.\nActivate—Charming Performance 2 (manipulate)\nFrequency once per day\nEffect You play the instrument, causing it to cast a 4th-rank Charm spell with DC 27.\nCraft Requirements You must supply a casting of charm of the appropriate rank.",
      "bulk": 1,
      "price": {
        "gp": 900
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 473,
        "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Charm",
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "3mprh9aZ670HfNhT",
          "name": "Maestro's Instrument (Moderate)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:crown-of-witchcraft",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4v8FIJSPaJUbccLz",
      "slug": "crown-of-witchcraft",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c4e282699907d23ca03ce00bdd3d155f189c123d60d226e7020d4b171d379a4c",
    "translatableHash": "sha256:58ea81f437a59fa6d0b0d100d3c69869c1fe1f290d5c9dc693d2ee8800e4d0e0",
    "data": {
      "schemaVersion": 1,
      "name": "Crown of Witchcraft",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "magical"
      ],
      "description": "An elegant accoutrement for a witch who has come into the higher echelons of power, a crown of witchcraft typically looks like a garland of flowering twigs, a jeweled circlet, or a tall hat of fine fabric. You gain a +1 item bonus to Intimidation checks, and if you're a witch, you gain a +2 item bonus to your patron skill.\nIf you have a familiar, you can attach a small portion of the crown's material to your familiar, such as a strip of fabric from a hat tied around its tail or a sprig of natural material linked to its collar; the familiar doesn't need to invest the item itself. If you do this, your familiar gains the tough pet ability as long as the crown is invested by you.\nActivate—Defiant Hex F (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a witch hex spell. If you don't spend this point by the end of this turn, it is lost.\nCraft Requirements You are a witch.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clandestine-cloak-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6jRXUXzYKIpm2uNp",
      "slug": "clandestine-cloak-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/clandestine-cloak.webp"
    },
    "sourceHash": "sha256:c05bf23a9ea254443db4ea1effebd7592db36dad17a6c51a842c88e6ba377a80",
    "translatableHash": "sha256:0ab2ed830e0dcd5aa8218425a4b9d2c19eb998617fde43a949ed03121246d155",
    "data": {
      "schemaVersion": 1,
      "name": "Clandestine Cloak (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "When you pull up the hood of this nondescript gray cloak (an Interact action), you become drab and uninteresting, gaining a +2 item bonus to Stealth checks and to Deception checks to Impersonate a forgettable background character, such as a servant, but also taking a -1 item penalty to Diplomacy and Intimidation checks.\nActivate—Cloak Identity 2 (concentrate, manipulate)\nFrequency once per day\nEffect You pull the cloak's hood up and gain the benefits of a 5th-rank Veil of Privacy for 8 hours or until you pull the hood back down, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 900
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 186,
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
          "sourceId": "6jRXUXzYKIpm2uNp",
          "name": "Clandestine Cloak (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 628,
        "uuid": "Compendium.pf2e.spells-srd.Item.Veil of Privacy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Veil of Privacy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Veil of Privacy",
          "sourceId": "EoKBlgf6Smt8opaU",
          "name": "Veil of Privacy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "6jRXUXzYKIpm2uNp",
          "name": "Clandestine Cloak (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:tideplate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7jGnVnqFt2gFtU1g",
      "slug": "tideplate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9b5bb70029e96a96a550b81ce295cf4b25db6efbb3f4fea9f003f286db1d79a6",
    "translatableHash": "sha256:30892597b583100e2e515f6de92ebc6135936cbce5a0fbde54e0cdbd886617f7",
    "data": {
      "schemaVersion": 1,
      "name": "Tideplate",
      "itemType": "armor",
      "level": 10,
      "rarity": "common",
      "traits": [],
      "description": "Rippling water motifs decorate this simple suit of +1 resilient full plate. The plate has been altered for underwater use, so it's check penalty doesn't apply to Acrobatics or Athletics checks in water or similar liquids. While wearing the armor, you gain a +2 item bonus to Athletics checks to Swim, and you can breathe underwater.\nActivate—Ride the Waves 2 (concentrate, manipulate)\nFrequency once per hour\nEffect The ripples on the armor begin to undulate, matching the movement of any nearby water. The armor casts Water Walk on you.\nActivate—Submerge 2 (concentrate, manipulate, polymorph)\nFrequency once per day\nRequirements You're in water that covers at least half of your body.\nEffect You merge with the water for 10 minutes. While merged, you can't move, you can see through the water if it's clear enough, and you can hear what's going on outside of the water. Water typically can't take damage, but if the water you're merged in is subject to electricity damage or an ability or effect that destroys or dries water, you're expelled from the water and take 10d6 damage. Control water expels you without dealing damage.",
      "bulk": 4,
      "price": {
        "gp": 1000
      },
      "usage": "",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 6,
        "dexterityCap": 0,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 644,
        "uuid": "Compendium.pf2e.spells-srd.Item.Water Walk",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Water Walk",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Water Walk",
          "sourceId": "Seaah9amXg70RKw2",
          "name": "Water Walk",
          "type": "spell"
        },
        "owner": {
          "sourceId": "7jGnVnqFt2gFtU1g",
          "name": "Tideplate",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:electric-eelskin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8HxM35X8DDt2gw9d",
      "slug": "electric-eelskin",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/electric-eelskin.webp"
    },
    "sourceHash": "sha256:d38a0f58caaa38d9261348d6ed39c6f1743fd22f865c40d53600b80c1e75f5da",
    "translatableHash": "sha256:164db1a671ed4cb123270dcda0a1c40a8d552f31eb7a72680c41351714aa9557",
    "data": {
      "schemaVersion": 1,
      "name": "Electric Eelskin",
      "itemType": "armor",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Shining, slippery eelskin covers the plates of this +1 resilient greater slick leather armor. The armor gives you the ability to breathe water and grants you a +2 item bonus to Athletics checks to Swim and Stealth checks you attempt in the water.\nActivate—Unleash Charge 2 (manipulate)\nFrequency once per hour\nEffect You cast a 2nd-rank Thunderstrike with a check (reflex, dc:29, basic, traits:electricity,sonic,spell).\nCraft Requirements Supply one casting of thunderstrike.",
      "bulk": 1,
      "price": {
        "gp": 950
      },
      "usage": "",
      "category": "light",
      "group": "leather",
      "armor": {
        "armorClassBonus": 1,
        "dexterityCap": 4,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 469,
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
          "sourceId": "8HxM35X8DDt2gw9d",
          "name": "Electric Eelskin",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:explorers-yurt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9Y86NM6nt2WtYBOy",
      "slug": "explorers-yurt",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/structures/explorers-yurt.webp"
    },
    "sourceHash": "sha256:8a9d04a996b91344c680ff7909471fcaca2f253e40f7ecdcf618e3bf4916f4b0",
    "translatableHash": "sha256:24f48bbdad50541d968ca1c24e6e6d3f444f593a1c52c197dc1c61ed08cc4e5f",
    "data": {
      "schemaVersion": 1,
      "name": "Explorer's Yurt",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "structure"
      ],
      "description": "Before activation, this item appears to be nothing more than a simple rolled-up tent, barely large enough to fit four Medium creatures. Despite attempts to clean it, the tent is perpetually smudged with dirt in various places.\nActivate—Unroll (10 minutes) (manipulate)\nFrequency once per day\nEffect The rolled-up tent expands into a spacious yurt complete with a fire pit, 10 bedrolls, various cooking utensils, and basic food and water.\nThe yurt can house and feed you and up to nine other Medium creatures that eat roughly as much as a human does; they need not attempt a Survival check to Subsist when you use the yurt. Fires and light inside the yurt do not extend illumination into the area surrounding the yurt, making it harder to spot from a distance.\nA large loop of red cloth hangs from one wall. If this loop is pulled, which takes an Interact action, the entire yurt immediately folds back up into its deactivated form, ready for further travel.",
      "bulk": 1,
      "price": {
        "gp": 880
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-the-dead-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ab5EjJyoRSec5YrW",
      "slug": "staff-of-the-dead-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b301c1c890141b3bf0f85262d52cf6409c050440f5a2ea9b380cbfd5c550475e",
    "translatableHash": "sha256:67ce360ba8e1437723a5a5f2b25bf0c213a928907f4676c037ab28ac5d058b82",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Dead (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This twisted and grim-looking staff is adorned with hideous skull and bone motifs. Creatures summoned using this staff gain a number of temporary Hit Points equal to the rank of the spell used to summon them.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Void Warp\n• 1st Grim Tendrils, Summon Undead\n• 2nd Peaceful Rest, Summon Undead\n• 3rd Summon Undead, Vampiric Feast\n• 4th Summon Undead, Vision of Death\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 411,
        "uuid": "Compendium.pf2e.spells-srd.Item.Void Warp",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Void Warp",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Void Warp",
          "sourceId": "mAMEt4FFbdqoRnkN",
          "name": "Void Warp",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 490,
        "uuid": "Compendium.pf2e.spells-srd.Item.Grim Tendrils",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Grim Tendrils",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Grim Tendrils",
          "sourceId": "k34hDOfIIMAxNL4a",
          "name": "Grim Tendrils",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 544,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Undead",
          "sourceId": "9WGeBwIIbbUuWKq0",
          "name": "Summon Undead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 627,
        "uuid": "Compendium.pf2e.spells-srd.Item.Peaceful Rest",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Peaceful Rest",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Peaceful Rest",
          "sourceId": "xRgU9rrhmGAgG4Rc",
          "name": "Peaceful Rest",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 681,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Undead",
          "sourceId": "9WGeBwIIbbUuWKq0",
          "name": "Summon Undead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 764,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Undead",
          "sourceId": "9WGeBwIIbbUuWKq0",
          "name": "Summon Undead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 818,
        "uuid": "Compendium.pf2e.spells-srd.Item.Vampiric Feast",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Vampiric Feast",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Vampiric Feast",
          "sourceId": "N1Z1oLPdBxaSgrEE",
          "name": "Vampiric Feast",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 902,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Undead",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Undead",
          "sourceId": "9WGeBwIIbbUuWKq0",
          "name": "Summon Undead",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 956,
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
          "sourceId": "Ab5EjJyoRSec5YrW",
          "name": "Staff of the Dead (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:spirit-bulb",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AeL8qd4hqaNN5MxP",
      "slug": "spirit-bulb",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2355ae4954d4c420f9d89e30492427f61fa51fc59050457a585d268007d8e798",
    "translatableHash": "sha256:d60b5c653891ac72c24d161047848ac381560bba157b9a3961773e2881a601af",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Bulb",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "plant"
      ],
      "description": "Activate 2 (concentrate, manipulate)\nThis magical bulb is harvested from an ancient grove rich in primal plant magic. When you activate the bulb, you either eat it to have it cast a 5th-rank Plant Form spell affecting you, or plant it in the ground next to you to have it cast a 5th-rank Summon Plant or Fungus spell. If you choose the summoning option, the plant or fungus appears where you planted the bulb, and you can Sustain the activation to keep control of the creature.",
      "bulk": 0,
      "price": {
        "gp": 200
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 259,
        "uuid": "Compendium.pf2e.spells-srd.Item.Plant Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Plant Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Plant Form",
          "sourceId": "zCcfPS4y5SrZzU2x",
          "name": "Plant Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "AeL8qd4hqaNN5MxP",
          "name": "Spirit Bulb",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 395,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Plant or Fungus",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Plant or Fungus",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Plant or Fungus",
          "sourceId": "jSRAyd57kd4WZ4yE",
          "name": "Summon Plant or Fungus",
          "type": "spell"
        },
        "owner": {
          "sourceId": "AeL8qd4hqaNN5MxP",
          "name": "Spirit Bulb",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:winged-sandals",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aKoMqPDmVzPI7Q20",
      "slug": "winged-sandals",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/winged-boots.webp"
    },
    "sourceHash": "sha256:5d8ed51ee1c48f9ffa86dadbd593a764e7c6609b5f896696cc2288f10af7c3b6",
    "translatableHash": "sha256:0e3890be2997a788f8a9f79ec700660fa58aaaaf337fb3c6d44e4b59e2e7b1f4",
    "data": {
      "schemaVersion": 1,
      "name": "Winged Sandals",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "air",
        "invested",
        "magical"
      ],
      "description": "Made from soft leather, with delicate white wings attached near the ankles, these sandals are ensorcelled with powerful air magic.\nWhenever you fall while wearing these sandals, they automatically cast Gentle Landing on you. This benefit can't trigger again for 10 minutes.\nActivate—Awaken Wings 2 (air, concentrate)\nFrequency once per day\nEffect The wings grow in size and propel you through the air, granting you a fly Speed of 30 feet for 10 minutes.\nEffect: Winged Sandals",
      "bulk": 0.1,
      "price": {
        "gp": 850
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 212,
        "uuid": "Compendium.pf2e.spells-srd.Item.Gentle Landing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Gentle Landing",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Gentle Landing",
          "sourceId": "TTwOKGqmZeKSyNMH",
          "name": "Gentle Landing",
          "type": "spell"
        },
        "owner": {
          "sourceId": "aKoMqPDmVzPI7Q20",
          "name": "Winged Sandals",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 623,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Winged Sandals",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Winged Sandals",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Winged Sandals",
          "sourceId": "1S51uIRb9bnZtpFU",
          "name": "Effect: Winged Sandals",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aKoMqPDmVzPI7Q20",
          "name": "Winged Sandals",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:fluid-form-staff-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bQynfb23iexSu8zU",
      "slug": "fluid-form-staff-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f555fa5fd6235883cad2b32a74dea56b98b2c210b9e0ea2ce738b4cd984386c2",
    "translatableHash": "sha256:95576a7d32c29194e736590cadab1eac695eb1791eef5f9cbb8ca4adb1426ed3",
    "data": {
      "schemaVersion": 1,
      "name": "Fluid Form Staff (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A glass orb atop this metal staff contains fine sand. While wielding the staff, you gain a +2 circumstance bonus to Perception checks to identify morph and polymorph magic.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• 1st Pest Form\n• 2nd Animal Form, Enlarge, Shrink\n• 3rd Feet to Fins, Insect Form\n• 4th Aerial Form, Animal Form, Dinosaur Form\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
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
        "sourceIndex": 371,
        "uuid": "Compendium.pf2e.spells-srd.Item.Pest Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Pest Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Pest Form",
          "sourceId": "gfPjmG6Fe6D3MFjl",
          "name": "Pest Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 450,
        "uuid": "Compendium.pf2e.spells-srd.Item.Animal Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Animal Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Animal Form",
          "sourceId": "wp09USMB3GIW1qbp",
          "name": "Animal Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 502,
        "uuid": "Compendium.pf2e.spells-srd.Item.Enlarge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Enlarge",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Enlarge",
          "sourceId": "wzctak6BxOW8xvFV",
          "name": "Enlarge",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 550,
        "uuid": "Compendium.pf2e.spells-srd.Item.Shrink",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Shrink",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Shrink",
          "sourceId": "PjhUmyKnq6K5uDby",
          "name": "Shrink",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 626,
        "uuid": "Compendium.pf2e.spells-srd.Item.Feet to Fins",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Feet to Fins",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Feet to Fins",
          "sourceId": "RvBlSIJmxiqfCpR9",
          "name": "Feet to Fins",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 679,
        "uuid": "Compendium.pf2e.spells-srd.Item.Insect Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Insect Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Insect Form",
          "sourceId": "XI6Lzd2B5pernkPd",
          "name": "Insect Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 760,
        "uuid": "Compendium.pf2e.spells-srd.Item.Aerial Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Aerial Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Aerial Form",
          "sourceId": "NzXpEzcZAjuDTZjK",
          "name": "Aerial Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 812,
        "uuid": "Compendium.pf2e.spells-srd.Item.Animal Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Animal Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Animal Form",
          "sourceId": "wp09USMB3GIW1qbp",
          "name": "Animal Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 864,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dinosaur Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dinosaur Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dinosaur Form",
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bQynfb23iexSu8zU",
          "name": "Fluid Form Staff (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:choker-of-elocution-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "br4eClrcGeLTL6Ba",
      "slug": "choker-of-elocution-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/choker-of-elocution.webp"
    },
    "sourceHash": "sha256:af9d2e0f75ac39c06ca81abfff8e314d5a274125c4b7290c34564783020b65cf",
    "translatableHash": "sha256:e8aae6fed62ceaa2c3b5d03df790caf525faddea056bf7c610d1abb65437f410",
    "data": {
      "schemaVersion": 1,
      "name": "Choker of Elocution (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This platinum choker bears characters from three language's alphabet, and it gives knowledge of those languages and the associated culture's customs.\nYou gain a +2 item bonus to Society checks and the ability to understand, speak, and write the chosen languages.\nYour excellent elocution reduces the DC of the flat check to perform an auditory action while deafened from 5 to 3.\nCraft Requirements You know the languages the choker grants.",
      "bulk": 0.1,
      "price": {
        "gp": 850
      },
      "usage": "worncollar",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reinforcing-rune-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bvROhtzAez0KP7Vt",
      "slug": "reinforcing-rune-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3f4c135a92434e7bcd8c4382f2eef95813afd70282a94ce0290c4c5ac0efb92b",
    "translatableHash": "sha256:7fbdd7b42bbde436689b7c65a2f143879ac7c5c97bb26df800f7743e5641f1bd",
    "data": {
      "schemaVersion": 1,
      "name": "Reinforcing Rune (Moderate)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Reinforcing runes make a shield significantly more durable, allowing it to effectively block more powerful attacks.\nThe shield's Hardness increases by 3, it gains an additional 64 Hit Points, and its BT increases by 32 (maximum 13 Hardness, 104 HP, and 52 BT).",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "etched-onto-a-shield",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:invisibility-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bxz885LMjLCkpDq3",
      "slug": "invisibility-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:61a6246fad779e1bb89b33cd2f0c5266e4130df2f3b9f022c15bdea7356c664d",
    "translatableHash": "sha256:81f1e1c3075c410f973035fc836df2c4df2d99fc4d42c6e49857c6cef6f74106",
    "data": {
      "schemaVersion": 1,
      "name": "Invisibility (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "illusion",
        "magical"
      ],
      "description": "Light seems to partially penetrate this armor.\nActivate—Go Invisible 1 (concentrate)\nFrequency three times per day\nEffect With a thought, you become invisible for 1 minute, gaining the effects of a 2nd-rank Invisibility spell.\nCraft Requirements Supply one casting of invisibility.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "etched-onto-light-armor",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 323,
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
          "sourceId": "bxz885LMjLCkpDq3",
          "name": "Invisibility (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-control-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "d5dnhOf5RHFFnsiB",
      "slug": "staff-of-control-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-enchantment.webp"
    },
    "sourceHash": "sha256:66f28ab42423350e7d6cf94cb4b96207633f8f560ae02f2606a5bba17d003902",
    "translatableHash": "sha256:0c159628a4d11e8361ac428f7a75dd1c97fea6ceb92e5f1f620c29955fd47489",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Control (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "An array of dazzling gemstones lines the twisting head of the golden staff. While wielding the staff, you gain a +1 status bonus to Diplomacy checks to make a Request.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Charm, Command\n• 2nd Laughing Fit, Stupefy\n• 3rd Enthrall\n• 4th Charm, Confusion, Suggestion\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 162,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Request",
          "sourceId": "DCb62iCBrJXy0Ik6",
          "name": "Request",
          "type": "action"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 410,
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
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 484,
        "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Charm",
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 530,
        "uuid": "Compendium.pf2e.spells-srd.Item.Command",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Command",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Command",
          "sourceId": "aIHY2DArKFweIrpf",
          "name": "Command",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 607,
        "uuid": "Compendium.pf2e.spells-srd.Item.Laughing Fit",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Laughing Fit",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Laughing Fit",
          "sourceId": "tlSE7Ly8vi1Dgddv",
          "name": "Laughing Fit",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 660,
        "uuid": "Compendium.pf2e.spells-srd.Item.Stupefy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Stupefy",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Stupefy",
          "sourceId": "CQb8HtQ1BPeZmu9h",
          "name": "Stupefy",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 737,
        "uuid": "Compendium.pf2e.spells-srd.Item.Enthrall",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Enthrall",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Enthrall",
          "sourceId": "IihxWhRfpsBgQ5jS",
          "name": "Enthrall",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 815,
        "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Charm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Charm",
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 861,
        "uuid": "Compendium.pf2e.spells-srd.Item.Confusion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Confusion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Confusion",
          "sourceId": "LiGbewa9pO0yjbsY",
          "name": "Confusion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 911,
        "uuid": "Compendium.pf2e.spells-srd.Item.Suggestion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Suggestion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Suggestion",
          "sourceId": "qwlh6aDgi86U3Q7H",
          "name": "Suggestion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "d5dnhOf5RHFFnsiB",
          "name": "Staff of Control (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:accolade-robe",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D8VKhm7rSBozJkMN",
      "slug": "accolade-robe",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4e66df258cf4eb39e4fecf6d6f66e8c11d0e473e844a0f47cc6008cd766719d3",
    "translatableHash": "sha256:aefec01483e6713cbb05615090f68e8dfacb9e01da122f3d434b6c78d117e64f",
    "data": {
      "schemaVersion": 1,
      "name": "Accolade Robe",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "arcane",
        "focused",
        "invested"
      ],
      "description": "Although not all wizards have gone through formal training, it's become tradition to enchant robes representing the arduous training required and festoon them with honors one has earned. Typically, an accolade robe is styled after a single wizard school, with appropriate colors and symbols. Wearing these robes grants a +2 item bonus to Arcana checks.\nThe pockets of the robe tie to an extradimensional space that can hold 1 Bulk of items, none of which can have greater than light Bulk. The items must be related to spellcasting and academics—spellbooks, scrolls, wands, scholarly journals, and other academic supplies the GM allows. These items do not count against your Bulk limit. You can Interact to retrieve or stow items normally.\nActivate—Review 1 (concentrate, manipulate)\nEffect You retrieve an item of your choice from the robe's storage, then Recall Knowledge.\nActivate—Extra Credit F (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a school spell. If you don't spend this Focus Point by the end of this turn, it is lost.\nCraft Requirements You are a wizard of the associated school.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vanishing-coin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dBevXop3G2P3PGjp",
      "slug": "vanishing-coin",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/vanishing-coin.webp"
    },
    "sourceHash": "sha256:b3c971748d4d6beed9e3de9ddb183cc0b66e5f698a21cebd608af755cfe7f9c3",
    "translatableHash": "sha256:7995129cbf403022b6d9398a5f421b25ef79b7aed965ab66f7d80ca2c4cfec8b",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Coin",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "illusion",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You attempt a Stealth check for initiative, but you haven't rolled yet\nRequirements You are trained in Stealth\nThis copper coin dangles from a leather strip strung through a hole drilled in the center. Until activated, the coin becomes invisible for a few seconds at random intervals every few minutes.\nWhen you activate the coin, it casts a 2nd-rank Invisibility spell on you, lasting until the end of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 507,
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
          "sourceId": "dBevXop3G2P3PGjp",
          "name": "Vanishing Coin",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-resistance-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dzfmP3WsA15puenS",
      "slug": "potion-of-resistance-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-resistance.webp"
    },
    "sourceHash": "sha256:02f92dbcbcbb6ed458bbf0858b3594d2777efd1b8a953f7ccb421240ea5a0cf1",
    "translatableHash": "sha256:cf4e728371ca6ecff5b99b3bdeaa4c0c3f67b629960414e15aaf433457c3e367",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Resistance (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this thick, fortifying potion grants 10 resistance against a single damage type for 1 hour. Each potion of resistance is created to defend against acid, cold, electricity, fire, or sonic damage (and is called a lesser potion of fire resistance or the like).",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:barding-of-the-zephyr",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eoI3M6FXtcPWeg7i",
      "slug": "barding-of-the-zephyr",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:17967b3fabac8896cda08d9575ef9c6accc344ebdd8e57611b5698eb0320147b",
    "translatableHash": "sha256:5576498d3fe297b1aad48d49e6cada035c9a29d9e228f58800e4b16cdc8d866e",
    "data": {
      "schemaVersion": 1,
      "name": "Barding of the Zephyr",
      "itemType": "armor",
      "level": 10,
      "rarity": "common",
      "traits": [
        "companion",
        "invested",
        "primal"
      ],
      "description": "This light barding is covered in stylized wind motifs. When you suit up your animal companion, the barding adjusts to fit your animal companion regardless of its shape.\nWhen your companion falls, wind picks it up from below; it gains the effects of Gentle Landing.\nActivate—Take Flight 2 (manipulate)\nFrequency once per day\nEffect You trace a finger along the wind motifs on the barding, granting your companion wearing the barding a fly Speed of 30 feet for 10 minutes. Even if the companion doesn't have the mount special ability, it can still Fly while being ridden.\nEffect: Barding of the Zephyr",
      "bulk": 0.1,
      "price": {
        "gp": 900
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
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 259,
        "uuid": "Compendium.pf2e.spells-srd.Item.Gentle Landing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Gentle Landing",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Gentle Landing",
          "sourceId": "TTwOKGqmZeKSyNMH",
          "name": "Gentle Landing",
          "type": "spell"
        },
        "owner": {
          "sourceId": "eoI3M6FXtcPWeg7i",
          "name": "Barding of the Zephyr",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 737,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Barding of the Zephyr",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Barding of the Zephyr",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Barding of the Zephyr",
          "sourceId": "P7Y7pO2ulZ5wBgxU",
          "name": "Effect: Barding of the Zephyr",
          "type": "effect"
        },
        "owner": {
          "sourceId": "eoI3M6FXtcPWeg7i",
          "name": "Barding of the Zephyr",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-cold-resistance-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "evdDpgFpiFZt9UyA",
      "slug": "potion-of-cold-resistance-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-cold-resistance.webp"
    },
    "sourceHash": "sha256:5daef684601e9c950a9d6aa0412e7a1a2c4d78e94ea9ff32cf305f2e790a20bd",
    "translatableHash": "sha256:72de65a2c1ae68f65a6c45e98d53ac9221b235c62b8d6a7ff8074f603d6fbc08",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Cold Resistance (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this thick, fortifying potion grants resistance 10 against cold damage for 1 hour.\nEffect: Potion of Cold Resistance",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 189,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Cold Resistance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Cold Resistance",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Potion of Cold Resistance",
          "sourceId": "Iw3CtHFpD3gGVjis",
          "name": "Effect: Potion of Cold Resistance",
          "type": "effect"
        },
        "owner": {
          "sourceId": "evdDpgFpiFZt9UyA",
          "name": "Potion of Cold Resistance (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:iron-medallion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ewzJzyJ4Vo9lZKvp",
      "slug": "iron-medallion",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/iron-medallion.webp"
    },
    "sourceHash": "sha256:0ca50d26794a5a9a25dc5769214e894ddc80e95648acc1935dda96757e5c48cd",
    "translatableHash": "sha256:5049bf526d7988980b31b0fba35f82750aded0e09e3fd462d2c76fda36b11b94",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Medallion",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You attempt a Will save against a fear effect but haven't rolled yet\nThis small medallion is shaped like a shield. When you activate it, you gain a +2 status bonus to the triggering save and other saves against fear for 1 minute. On the triggering save, if the outcome of your roll is a failure, you get a success instead. If the outcome is a critical failure, you get a failure instead.\nEffect: Iron Medallion",
      "bulk": 0,
      "price": {
        "gp": 175
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 520,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Iron Medallion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Iron Medallion",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Iron Medallion",
          "sourceId": "xV9rME2l1f10mnF9",
          "name": "Effect: Iron Medallion",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ewzJzyJ4Vo9lZKvp",
          "name": "Iron Medallion",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-summoning-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GeAz02cQMU4X9nYp",
      "slug": "staff-of-summoning-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-conjuration.webp"
    },
    "sourceHash": "sha256:acf414ae1c827a35d73ff3a4cd856af94a3ebde9801579051648e436a9ebbec1",
    "translatableHash": "sha256:132525a8d5193f0f94d0c7597aacee6bf1dccadeac3c1f56153c4f51f05b18ba",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Summoning (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This ash staff is decorated with animals, elementals, and dragons. Creatures summoned using this staff gain a number of temporary Hit Points equal to the rank of the spell used to summon them.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Tangle Vine\n• 1st Summon Animal\n• 2nd Marvelous Mount, Mist, Summon Animal, Summon Elemental\n• 3rd Summon Animal, Summon Elemental\n• 4th Marvelous Mount, Summon Animal, Summon Elemental\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 395,
        "uuid": "Compendium.pf2e.spells-srd.Item.Tangle Vine",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Tangle Vine",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Tangle Vine",
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 476,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Animal",
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 559,
        "uuid": "Compendium.pf2e.spells-srd.Item.Marvelous Mount",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Marvelous Mount",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Marvelous Mount",
          "sourceId": "WPKJOhEihhcIm2uQ",
          "name": "Marvelous Mount",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 615,
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
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 660,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Animal",
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 714,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Elemental",
          "sourceId": "lpT6LotUaQPfinjj",
          "name": "Summon Elemental",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 800,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Animal",
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 854,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Elemental",
          "sourceId": "lpT6LotUaQPfinjj",
          "name": "Summon Elemental",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 940,
        "uuid": "Compendium.pf2e.spells-srd.Item.Marvelous Mount",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Marvelous Mount",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Marvelous Mount",
          "sourceId": "WPKJOhEihhcIm2uQ",
          "name": "Marvelous Mount",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 996,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Animal",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Animal",
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1050,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Elemental",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Elemental",
          "sourceId": "lpT6LotUaQPfinjj",
          "name": "Summon Elemental",
          "type": "spell"
        },
        "owner": {
          "sourceId": "GeAz02cQMU4X9nYp",
          "name": "Staff of Summoning (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:living-mantle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hvlEFx25ogf1K1C2",
      "slug": "living-mantle",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6817e1d047dace1f44f8d4f2473b6583070a98a6d905c5679a730f6a4b5130af",
    "translatableHash": "sha256:c1bda8ca5035795775213133d4235e5f75a7d2cb5c96669a165ba28ce092c279",
    "data": {
      "schemaVersion": 1,
      "name": "Living Mantle",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "plant",
        "primal"
      ],
      "description": "The base of this cloak is a thick layer of moss, but it slowly picks up native plants from each area it spends time in. You gain a +2 item bonus to Nature checks. You also suffer no effects from severe cold and severe heat.\nActivate—Druidic Secrets F (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast an order spell. If you don't spend this Focus Point by the end of this turn, it is lost.\nCraft Requirements You are a druid.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:entertainers-cincture",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IM9W5fovv44ZKDRQ",
      "slug": "entertainers-cincture",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2d31b3c5c20a3cb5c8a04644577479cbad6d4ab6b1f8d24551ee52fb7f6279ba",
    "translatableHash": "sha256:6ec40f6bd72676ab8489801f08a74319ee802c96761b821690d21ec88c493d1a",
    "data": {
      "schemaVersion": 1,
      "name": "Entertainer's Cincture",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "occult"
      ],
      "description": "The designs adorning these lush sashes often imitate the decor of famous opera houses, theaters, and museums. When you invest this item, choose Deception, Diplomacy, Intimidation, or Performance; you gain a +2 item bonus to that skill.\nActivate—Encore! F (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a bard composition spell. If you don't spend this point by the end of this turn, it is lost.\nActivate—Transcribe 1 (manipulate)\nFrequency once per day\nEffect You tuck a small roll of paper into the cincture. For the next 10 minutes or until you Dismiss the activation, any performance you make is recorded on the paper, and the paper expands as necessary to accommodate it. Depending on the type of performance, this might take the form of sheet music, a transcript, or a diagram of dance moves.\nCraft Requirements You are a bard.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "wornbelt",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-the-unblinking-eye-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jUL4ZdztH8VODBuv",
      "slug": "staff-of-the-unblinking-eye-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:91a5de1aedac10aa419225d88443388b94f9a3d9d5818f89b800030980350306",
    "translatableHash": "sha256:34f36ef982db20b646de18f75ced05369e48bed6029c15c93833b6bfa39be3bd",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Unblinking Eye (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "The stone head piece of this smooth wooden staff is carved to look like a lidless eye. While wielding it, you gain a +1 status bonus to Perception checks made for initiative.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Detect Magic\n• 1st Sure Strike\n• 2nd Darkvision, See the Unseen, Translate\n• 3rd Darkvision, Mind Reading\n• 4th Clairvoyance, Detect Scrying, Telepathy\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 377,
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
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 459,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sure Strike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sure Strike",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sure Strike",
          "sourceId": "Gb7SeieEvd0pL2Eh",
          "name": "Sure Strike",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 540,
        "uuid": "Compendium.pf2e.spells-srd.Item.Darkvision",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Darkvision",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Darkvision",
          "sourceId": "pZTqGY1MLRjgKasV",
          "name": "Darkvision",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 591,
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
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 646,
        "uuid": "Compendium.pf2e.spells-srd.Item.Translate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Translate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Translate",
          "sourceId": "vTQvfYu2llKQedmY",
          "name": "Translate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 725,
        "uuid": "Compendium.pf2e.spells-srd.Item.Darkvision",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Darkvision",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Darkvision",
          "sourceId": "pZTqGY1MLRjgKasV",
          "name": "Darkvision",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 776,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mind Reading",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mind Reading",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mind Reading",
          "sourceId": "KHnhPHL4x1AQHfbC",
          "name": "Mind Reading",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 858,
        "uuid": "Compendium.pf2e.spells-srd.Item.Clairvoyance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Clairvoyance",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Clairvoyance",
          "sourceId": "zvKWclOZ7A53DObE",
          "name": "Clairvoyance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 911,
        "uuid": "Compendium.pf2e.spells-srd.Item.Detect Scrying",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Detect Scrying",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Detect Scrying",
          "sourceId": "AnWCohzPgK4L9GVl",
          "name": "Detect Scrying",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 966,
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
          "sourceId": "jUL4ZdztH8VODBuv",
          "name": "Staff of the Unblinking Eye (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-sonic-resistance-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kbjspHV7kwKKULmd",
      "slug": "potion-of-sonic-resistance-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-sonic-resistance.webp"
    },
    "sourceHash": "sha256:92ffe64bb87bf34e5ff83732f3eb11dcb7b363aec59070010c5c4481b2f50342",
    "translatableHash": "sha256:dd6d35a807475d31ec7117c5e63639be28de9d0b029f1df3221c488ce0cc4b6e",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Sonic Resistance (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this thick, fortifying potion grants resistance 10 against sonic damage for 1 hour.\nEffect: Potion of Sonic Resistance",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 190,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Sonic Resistance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Sonic Resistance",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Potion of Sonic Resistance",
          "sourceId": "nBGodDOQTCWBXjNd",
          "name": "Effect: Potion of Sonic Resistance",
          "type": "effect"
        },
        "owner": {
          "sourceId": "kbjspHV7kwKKULmd",
          "name": "Potion of Sonic Resistance (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-electricity-resistance-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MHoghQhxbvZRyyaB",
      "slug": "potion-of-electricity-resistance-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-electricity-resistance.webp"
    },
    "sourceHash": "sha256:a1b0e3a18bb6715137bf9d8e1ae88f7f85136d23330213e6105f382a73315012",
    "translatableHash": "sha256:be009ed0df496935f0b6cb7b2558433fbda4219ac09ec8c73c25224f0d55819d",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Electricity Resistance (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this thick, fortifying potion grants resistance 10 against electrical damage for 1 hour.\nEffect: Potion of Electricity Resistance",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 195,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Electricity Resistance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Electricity Resistance",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Potion of Electricity Resistance",
          "sourceId": "DbUEGIKxH6d1GgVw",
          "name": "Effect: Potion of Electricity Resistance",
          "type": "effect"
        },
        "owner": {
          "sourceId": "MHoghQhxbvZRyyaB",
          "name": "Potion of Electricity Resistance (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:daredevil-boots",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mmdnWrQsh7vDspLK",
      "slug": "daredevil-boots",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed8687a7c0846a4631eee231a8a88b7d887b2e214896e19ee657b482acda392b",
    "translatableHash": "sha256:9580a750a4251fee13e4b5d384aa99d62efe2acba9f85ab40c17956a172bc6f9",
    "data": {
      "schemaVersion": 1,
      "name": "Daredevil Boots",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These brightly colored, soft-soled boots motivate you to perform risky stunts and grant you the agility to succeed. The boots grant you a +2 item bonus to Acrobatics checks and a +1 circumstance bonus to checks to [[/act tumble-through]] an enemy's space.\nThe boots can grip solid surfaces and help you avoid a fall, allowing you to use the [[/act grab-an-edge]] reaction even if your hands aren't free. You treat falls as 10 feet shorter or, if you have the Cat Fall feat, treat your proficiency rank in Acrobatics as one degree better to determine the benefits of that feat. If you have Cat Fall and are already legendary in Acrobatics, you can choose the speed of your fall, from 60 feet per round up to normal falling speed.",
      "bulk": 0.1,
      "price": {
        "gp": 900
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 469,
        "uuid": "Compendium.pf2e.feats-srd.Item.Cat Fall",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Cat Fall",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Cat Fall",
          "sourceId": "LQw0yIMDUJJkq1nD",
          "name": "Cat Fall",
          "type": "feat"
        },
        "owner": {
          "sourceId": "mmdnWrQsh7vDspLK",
          "name": "Daredevil Boots",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:forge-warden",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NoTUhKkiTY5BQU5T",
      "slug": "forge-warden",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/forge-warden.webp"
    },
    "sourceHash": "sha256:80f1cb7c13f722f959f5d985393f7357809f73ba2825b7602049624d04d9aa1b",
    "translatableHash": "sha256:26df97d1c0af8f486d691e2d94650411e6e92bc708233e30b66dec5e863151ce",
    "data": {
      "schemaVersion": 1,
      "name": "Forge Warden",
      "itemType": "shield",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "The religious symbol of Torag, the forge god-an ornate hammer of dwarven construction-adorns the face of this lesser reinforcing steel shield (Hardness 8, HP 72, BT 36). The shield is a religious symbol of Torag.\nYou and any adjacent allies have fire resistance 5 while you have the shield raised. When used for a Shield Block, the forge warden rings out like the hammer strike of a blacksmith, and the symbol glows as if lit by the fires of a furnace.\nActivate—Forge Fires F (concentrate, fire)\nTrigger You use the forge warden to Shield Block an adjacent creature's attack and the shield takes damage\nEffect The attacking creature takes 2d6 fire damage.",
      "bulk": 1,
      "price": {
        "gp": 975
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-elemental-power-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nvSZioRW4J1sMtO7",
      "slug": "staff-of-elemental-power-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-evocation.webp"
    },
    "sourceHash": "sha256:66db771ca25d90e5d4845b67724c0a25650614dad3cfa0909a472304c5fffbe4",
    "translatableHash": "sha256:9f3db9a18f008ede575ae593b080c0a12d3b8a74f22f56a5576f1906fba1fcdc",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Elemental Power (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is tapered at the base and carved into a gem-studded twist at the top. While wielding the staff, you gain a +2 circumstance bonus to checks to identify elemental creatures.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Frostbite\n• 1st Breathe Fire, Pummeling Rubble, Thunderstrike\n• 2nd Blazing Bolt, Resist Energy\n• 3rd Fireball, Lightning Bolt\n• 4th Resist Energy, Wall of Fire\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 386,
        "uuid": "Compendium.pf2e.spells-srd.Item.Frostbite",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Frostbite",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Frostbite",
          "sourceId": "IxhGEKl63R4QBvkj",
          "name": "Frostbite",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 465,
        "uuid": "Compendium.pf2e.spells-srd.Item.Breathe Fire",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Breathe Fire",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Breathe Fire",
          "sourceId": "y6rAdMK6EFlV6U0t",
          "name": "Breathe Fire",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 518,
        "uuid": "Compendium.pf2e.spells-srd.Item.Pummeling Rubble",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Pummeling Rubble",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Pummeling Rubble",
          "sourceId": "Rn2LkoSq1XhLsODV",
          "name": "Pummeling Rubble",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 575,
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
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 658,
        "uuid": "Compendium.pf2e.spells-srd.Item.Blazing Bolt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Blazing Bolt",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Blazing Bolt",
          "sourceId": "ZxHC7V7HtjUsB8zH",
          "name": "Blazing Bolt",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 711,
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
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 794,
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
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 843,
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
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 927,
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
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 981,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Fire",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Fire",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wall of Fire",
          "sourceId": "IarZrgCeaiUqOuRu",
          "name": "Wall of Fire",
          "type": "spell"
        },
        "owner": {
          "sourceId": "nvSZioRW4J1sMtO7",
          "name": "Staff of Elemental Power (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bravos-brew-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oCuwJ9IUDAuzsUwa",
      "slug": "bravos-brew-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/bravos-brew.webp"
    },
    "sourceHash": "sha256:ac6733630f1444aaea3814ba3e51b4ed5a885409a00ba55d3eafdc66179e7d0b",
    "translatableHash": "sha256:1ee11a3d5174a5a252e4cebaa60c12597b325a4aa6b8af3a52f69e818afd3f87",
    "data": {
      "schemaVersion": 1,
      "name": "Bravo's Brew (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mental"
      ],
      "description": "Activate A (manipulate)\nThis flask of foaming beer grants courage. For the next hour after drinking this elixir, you gain a +2 item bonus to Will saves, or +3 when attempting Will saves against fear.\nEffect: Bravo's Brew",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 273,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bravo's Brew",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Bravo's Brew",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bravo's Brew",
          "sourceId": "eh7EqmDBDW30ShCu",
          "name": "Effect: Bravo's Brew",
          "type": "effect"
        },
        "owner": {
          "sourceId": "oCuwJ9IUDAuzsUwa",
          "name": "Bravo's Brew (Moderate)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:antiplague-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ORDaAzMZLrf6Hn8A",
      "slug": "antiplague-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/antiplague.webp"
    },
    "sourceHash": "sha256:9f2a1ee90aa227944106ce03523b13ee7080c375c514d0896e4c5532962bcacc",
    "translatableHash": "sha256:24f87e3ae9f07ed8725698c6c3476657a67baec134f96a36f86b22472012134d",
    "data": {
      "schemaVersion": 1,
      "name": "Antiplague (Greater)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate A (manipulate)\nAntiplague can fortify the body's defenses against diseases. Upon drinking an antiplague, you gain a +4 item bonus to Fortitude saving throws against diseases for 24 hours; this applies to your daily save against a disease's progression.\nEffect: Antiplague",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 335,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Antiplague",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Antiplague",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Antiplague",
          "sourceId": "mVgLCbZgafIylRzh",
          "name": "Effect: Antiplague",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ORDaAzMZLrf6Hn8A",
          "name": "Antiplague (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:ring-of-lies",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OTeONq4r10Xm6gSy",
      "slug": "ring-of-lies",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5d1098ec9e916b985b0da31a90b95f8da3bd214288c2337c9ff4ae620b1e66d5",
    "translatableHash": "sha256:5d55b6331e61a6c43146a40b8c7afa67977e7d2f8664484b18d5ddfeab9c6099",
    "data": {
      "schemaVersion": 1,
      "name": "Ring of Lies",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This plain silver ring has an almost oily sheen. While wearing the ring, you gain a +2 item bonus to Deception checks.\nActivate—Sweeten Lies 2 (manipulate)\nFrequency once per day\nEffect Snapping your fingers on the hand that wears the ring causes the ring to cast Honeyed Words on you with no visual manifestations of a spell being cast.",
      "bulk": 0,
      "price": {
        "gp": 850
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 380,
        "uuid": "Compendium.pf2e.spells-srd.Item.Honeyed Words",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Honeyed Words",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Honeyed Words",
          "sourceId": "JyxTmqjYYn63V5LY",
          "name": "Honeyed Words",
          "type": "spell"
        },
        "owner": {
          "sourceId": "OTeONq4r10Xm6gSy",
          "name": "Ring of Lies",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:sturdy-shield-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pNQJ9PTOEHxEZCgp",
      "slug": "sturdy-shield-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/sturdy-shield.webp"
    },
    "sourceHash": "sha256:94cee0c6309a7cd3c03a0e911c9387e3e8f5c8fe91d1fc029040449daef794c7",
    "translatableHash": "sha256:13e04081064f2396dfaccb5bbf31cc4f1f02556b5f411ed1cb86f4e503f76561",
    "data": {
      "schemaVersion": 1,
      "name": "Sturdy Shield (Moderate)",
      "itemType": "shield",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "With a superior design and excellent craftsmanship, this steel shield has higher Hardness than its non-magical counterparts, making it harder to break and destroy.\nThe shield has Hardness 13, HP 104, and BT 52.",
      "bulk": 1,
      "price": {
        "gp": 1000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:weapon-potency-2",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pOoEiuEuITm4I2Il",
      "slug": "weapon-potency-2",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-weapon-runes/weapon-potency.webp"
    },
    "sourceHash": "sha256:4233f3a935ab8b0d0e046d3c5f73c6f8481f0d06fabb0d3bdbb536407f46b335",
    "translatableHash": "sha256:18252a041466bd82dacfc2859231d0e89411d785942308cf5a6a8562dc935f99",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Potency (+2)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Magical enhancements make this weapon strike true. Attack rolls with this weapon gain a +2 item bonus, and the weapon can be etched with two property rune.\nYou can upgrade the weapon potency rune already etched on a weapon to a stronger version, increasing the values of the existing rune to those of the new rune. You must have the formula of the stronger rune to do so, and the Price of the upgrade is the difference between the two runes' Prices.\nCraft Requirements You are a master in Crafting.",
      "bulk": 0,
      "price": {
        "gp": 935
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thurible-of-revelation-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QEPx1fCf74xdpXBH",
      "slug": "thurible-of-revelation-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/thurible-of-revelation.webp"
    },
    "sourceHash": "sha256:0aeaf9a3510db5bc20975217ab5c0619c3cfbc1aff43a25e74462a9e54af5a06",
    "translatableHash": "sha256:bb6f0edb976d2fe92eeedeffe0f97914d537b44c8ee4b00ce99e37a84a53cb1d",
    "data": {
      "schemaVersion": 1,
      "name": "Thurible of Revelation (Moderate)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "divine"
      ],
      "description": "This brass censer dangles on a length of chain. Most thuribles of revelation are adorned with swirling Empyrean text, though some are iron and feature Diabolic or Chthonian text.\nActivate—Burn Incense 2 (manipulate)\nCost incense worth at least 5 gp\nEffect You light the incense inside the censer, and it burns for 1 hour. During that time, as long you are holding the thurible, you gain a +2 item bonus to Religion checks, and any critical failure you roll when you Decipher Writing of a religious nature is a failure instead.\nOnce per day, when you activate the thurible, you can increase its revelations. During that activation, you can hold the thurible up to your eyes with an Interact action to gain the effects of See the Unseen for 1 round by peering through the smoke.\nEffect: Thurible of Revelation",
      "bulk": 1,
      "price": {
        "gp": 900
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 850,
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
          "sourceId": "QEPx1fCf74xdpXBH",
          "name": "Thurible of Revelation (Moderate)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 953,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Thurible of Revelation",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Thurible of Revelation",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Thurible of Revelation",
          "sourceId": "lO95TwgihBdTilAB",
          "name": "Effect: Thurible of Revelation",
          "type": "effect"
        },
        "owner": {
          "sourceId": "QEPx1fCf74xdpXBH",
          "name": "Thurible of Revelation (Moderate)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-mask-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "shKPtYN0YUOe07K2",
      "slug": "demon-mask-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/demon-mask.webp"
    },
    "sourceHash": "sha256:c435b35d1ddcd2acd9368f0f6b0524e8ed06936182c12da1ad33b1f55b08f1e1",
    "translatableHash": "sha256:25902c59e9b72b5308ea6a8544cf21bb394f8b35ab16ac6841a073bb4e0b77f2",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Mask (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This terrifying mask is crafted in the visage of a leering demon and grants a +2 item bonus to Intimidation checks.\nActivate—Leering Mask 2 (manipulate)\nFrequency once per day\nEffect The mask casts a 3rd-rank Fear spell with a DC of 29.",
      "bulk": 0.1,
      "price": {
        "gp": 900
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 325,
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
          "sourceId": "shKPtYN0YUOe07K2",
          "name": "Demon Mask (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-phantasms-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Svq02kCaFadVPOSq",
      "slug": "staff-of-phantasms-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/staff-of-illusion.webp"
    },
    "sourceHash": "sha256:8a691d8fb991def6668af93439e8cdb736d711c177772e4c74259f3335f02d71",
    "translatableHash": "sha256:e956fcc5eda4b4b552123e8928f247a88e7da2f8c1c4234f2241e70c9e689e55",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Phantasms (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This ornate metal staff shines with precious inlays of gold. When you Cast a Spell from the staff, the illusory image of something you desire flashes across its surface. While wielding the staff, you gain a +2 status bonus to checks to disbelieve an illusion.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Figment\n• 1st Illusory Disguise, Illusory Object\n• 2nd Illusory Creature, Illusory Object, Item Facade\n• 3rd Illusory Disguise, Item Facade\n• 4th Illusory Creature, Illusory Scene, Illusory Disguise\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 462,
        "uuid": "Compendium.pf2e.spells-srd.Item.Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Figment",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Figment",
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 539,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Disguise",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 597,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Object",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Object",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Object",
          "sourceId": "2oH5IufzdESuYxat",
          "name": "Illusory Object",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 682,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Creature",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Creature",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Creature",
          "sourceId": "f8SBoXiXQjlCKqly",
          "name": "Illusory Creature",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 740,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Object",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Object",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Object",
          "sourceId": "2oH5IufzdESuYxat",
          "name": "Illusory Object",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 796,
        "uuid": "Compendium.pf2e.spells-srd.Item.Item Facade",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Item Facade",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Item Facade",
          "sourceId": "4ZGte0i9YbLh4dRi",
          "name": "Item Facade",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 877,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Disguise",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 935,
        "uuid": "Compendium.pf2e.spells-srd.Item.Item Facade",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Item Facade",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Item Facade",
          "sourceId": "4ZGte0i9YbLh4dRi",
          "name": "Item Facade",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1016,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Creature",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Creature",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Creature",
          "sourceId": "f8SBoXiXQjlCKqly",
          "name": "Illusory Creature",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1074,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Scene",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Scene",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Scene",
          "sourceId": "Ucf8eynbZMfUucjE",
          "name": "Illusory Scene",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1129,
        "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Illusory Disguise",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Illusory Disguise",
          "sourceId": "i35dpZFI7jZcRoBo",
          "name": "Illusory Disguise",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Svq02kCaFadVPOSq",
          "name": "Staff of Phantasms (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:charlatans-cape",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uiJAR3jQbQHhiP3Q",
      "slug": "charlatans-cape",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/cape-of-the-mountebank.webp"
    },
    "sourceHash": "sha256:cbe1ee973fd1272da06c775b5c9410c7d06b4b8be5502715cab92fa11ce65e9a",
    "translatableHash": "sha256:aecf2229170a91000ceeb1ed101b06267c2358e270dab2809bd2537287ec0d2a",
    "data": {
      "schemaVersion": 1,
      "name": "Charlatan's Cape",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This bright red-and-gold cape is often interlaced with glittery threads and serves as a distraction. While wearing the cape, you gain a +2 item bonus to Deception checks.\nActivate—Puff of Smoke 2 (manipulate)\nFrequency once per day\nEffect You cast Translocate. The space you leave and the one you appear in are filled with puffs of smoke that make anyone within Concealed until they leave the smoke or the end of your next turn, at which point the smoke dissipates. Strong winds immediately disperse the smoke.",
      "bulk": 0.1,
      "price": {
        "gp": 980
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 364,
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
          "sourceId": "uiJAR3jQbQHhiP3Q",
          "name": "Charlatan's Cape",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 517,
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
          "sourceId": "uiJAR3jQbQHhiP3Q",
          "name": "Charlatan's Cape",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:mummified-bat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UnDjPxFOs6bldlcM",
      "slug": "mummified-bat",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/mummified-bat.webp"
    },
    "sourceHash": "sha256:cefc1cf983983e957a3c727bbdca7184a2f50c10039101f23554de56cfa69e90",
    "translatableHash": "sha256:32a7a937f2f8bd7c233901326cae327cd7aace98af4795e7576beea7720443bb",
    "data": {
      "schemaVersion": 1,
      "name": "Mummified Bat",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nThis talisman is the magically treated corpse of a tiny bat bound in papyrus. When activated, the affixed weapon detects vibrations around you and guides your perception. For 1 minute, you don't need to succeed at a flat check to target Concealed creatures. You're not Off-Guard to creatures that are Hidden from you (unless you're off-guard to them for reasons other than the hidden condition), and you need only a successful check (flat, dc:5) to target a hidden creature. While you're adjacent to an undetected creature of your level or lower, it's instead only hidden from you.\nIf you have the Blind-Fight feat, you gain imprecise echolocation with a range of 30 feet for 1 minute. This makes creatures that would be undetected by you because you can't see them hidden instead.\nEffect: Mummified Bat",
      "bulk": 0,
      "price": {
        "gp": 175
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 328,
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
          "sourceId": "UnDjPxFOs6bldlcM",
          "name": "Mummified Bat",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 403,
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
          "sourceId": "UnDjPxFOs6bldlcM",
          "name": "Mummified Bat",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 478,
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
          "sourceId": "UnDjPxFOs6bldlcM",
          "name": "Mummified Bat",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 824,
        "uuid": "Compendium.pf2e.feats-srd.Item.Blind-Fight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Blind-Fight",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Blind-Fight",
          "sourceId": "y2XeMe1F18lIyo59",
          "name": "Blind-Fight",
          "type": "feat"
        },
        "owner": {
          "sourceId": "UnDjPxFOs6bldlcM",
          "name": "Mummified Bat",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1053,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Mummified Bat",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Mummified Bat",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Mummified Bat",
          "sourceId": "3dvpk7jwcQbmLsUA",
          "name": "Effect: Mummified Bat",
          "type": "effect"
        },
        "owner": {
          "sourceId": "UnDjPxFOs6bldlcM",
          "name": "Mummified Bat",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:symbol-of-conflict-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wtm4JdxeTLQi3zQI",
      "slug": "symbol-of-conflict-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4f4e996895f43c4a1b2790d5bb031ad105c7a9ece883ff80c12fde93470fa971",
    "translatableHash": "sha256:28b52bcdfc1fe63b91759964d45feaad6828f11feaf6e2a0f01b86673d962bf6",
    "data": {
      "schemaVersion": 1,
      "name": "Symbol of Conflict (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "invested"
      ],
      "description": "This tarnished necklace can be attuned only by someone who is holy or unholy. When you attune it, it transforms into your deity's religious symbol or a personal symbol if you don't have a deity. You receive a +2 item bonus to Religion and a +1 circumstance bonus to saves against holy and unholy effects.\nActivate—Presence 2 (concentrate, manipulate)\nFrequency once per day\nEffect The symbol casts 4th-rank Bane, Bless, Divine Wrath, or Cleanse Affliction.\nThe counteract DC of these effects is 27, and the counteract modifier is +17.\nCraft Requirements You must be holy or unholy.",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 521,
        "uuid": "Compendium.pf2e.spells-srd.Item.Bane",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Bane",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Bane",
          "sourceId": "7ZinJNzxq0XF0oMx",
          "name": "Bane",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Wtm4JdxeTLQi3zQI",
          "name": "Symbol of Conflict (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 566,
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
          "sourceId": "Wtm4JdxeTLQi3zQI",
          "name": "Symbol of Conflict (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 612,
        "uuid": "Compendium.pf2e.spells-srd.Item.Divine Wrath",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Divine Wrath",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Divine Wrath",
          "sourceId": "hVU9msO9yGkxKZ3J",
          "name": "Divine Wrath",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Wtm4JdxeTLQi3zQI",
          "name": "Symbol of Conflict (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 668,
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
          "sourceId": "Wtm4JdxeTLQi3zQI",
          "name": "Symbol of Conflict (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:charm-of-resistance-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X3Nfa7bByYFrg1lU",
      "slug": "charm-of-resistance-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9730a4db4204b16f2ee05e72b531a5d6c8499611f184cb8e31870ffed4d9c2ef",
    "translatableHash": "sha256:7f2c30c88e4755439caf5c8dd50a047e57a8cc1f787546cea68c8c4aed647915",
    "data": {
      "schemaVersion": 1,
      "name": "Charm of Resistance (Greater)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This charm, normally hung from the belt or worn around the neck, grants you resistance 10 against one type of energy damage: acid, cold, electricity, fire, or sonic. Each charm is crafted to protect against a particular type of energy damage, and its design usually embodies the type of energy it protects the wearer from in some way. For instance, a charm of cold resistance could be carved in the shape of a yeti, whereas a charm of fire resistance would be made from volcanic glass.",
      "bulk": 0,
      "price": {
        "gp": 975
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-protection-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XE8AxkahYPVzeLCW",
      "slug": "staff-of-protection-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eda2c1cff79aa07c1a0a437424e30c8142c152c4cff83ce378de8817601161b6",
    "translatableHash": "sha256:50fa5dfec91be55c06625870f141e3d42a33b8277a19774a966eae37f557566c",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Protection (Greater)",
      "itemType": "weapon",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This wooden staff is remarkably sturdy and unyielding. While wielding the staff, you gain a +1 circumstance bonus to your DC to avoid being shoved or tripped.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Shield\n• 1st Alarm, Mystic Armor\n• 2nd Dispel Magic, Environmental Endurance, Resist Energy\n• 3rd Alarm, Safe Passage\n• 4th Dispel Magic, Mystic Armor, Resist Energy\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
        "sourceIndex": 361,
        "uuid": "Compendium.pf2e.spells-srd.Item.Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Shield",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Shield",
          "sourceId": "TVKNbcgTee19PXZR",
          "name": "Shield",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 437,
        "uuid": "Compendium.pf2e.spells-srd.Item.Alarm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Alarm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Alarm",
          "sourceId": "4WAib3GichxLjp5p",
          "name": "Alarm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 483,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mystic Armor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mystic Armor",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mystic Armor",
          "sourceId": "aAbfKn8maGjJjk2W",
          "name": "Mystic Armor",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 565,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 618,
        "uuid": "Compendium.pf2e.spells-srd.Item.Environmental Endurance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Environmental Endurance",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Environmental Endurance",
          "sourceId": "5esP2GVzvxWsMgaX",
          "name": "Environmental Endurance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 682,
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
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 765,
        "uuid": "Compendium.pf2e.spells-srd.Item.Alarm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Alarm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Alarm",
          "sourceId": "4WAib3GichxLjp5p",
          "name": "Alarm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 811,
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
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 893,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dispel Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dispel Magic",
          "sourceId": "9HpwDN4MYQJnW0LG",
          "name": "Dispel Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 946,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mystic Armor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mystic Armor",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mystic Armor",
          "sourceId": "aAbfKn8maGjJjk2W",
          "name": "Mystic Armor",
          "type": "spell"
        },
        "owner": {
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 999,
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
          "sourceId": "XE8AxkahYPVzeLCW",
          "name": "Staff of Protection (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:eagle-eye-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xWCdsGSwLLTeX6tQ",
      "slug": "eagle-eye-elixir-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/eagle-eyes-elixir.webp"
    },
    "sourceHash": "sha256:9faef010b1b79306c2bc60b0c31361ddd4ece53fe70dda4c715f0d7175f5ab8f",
    "translatableHash": "sha256:6a3ac11fdab9a4134605b89e966f98eae154861e7ddfb4e42ae4c3c3ba0de320",
    "data": {
      "schemaVersion": 1,
      "name": "Eagle Eye Elixir (Greater)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate A (manipulate)\nAfter you drink this elixir, you notice subtle visual details. For the next hour, you gain a +3 item bonus to Perception checks, or +4 when attempting to find secret doors and traps.\nEffect: Eagle Eye Elixir",
      "bulk": 0.1,
      "price": {
        "gp": 200
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 280,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Eagle Eye Elixir",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Eagle Eye Elixir",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Eagle Eye Elixir",
          "sourceId": "VOSQ77DV4BnAkP7m",
          "name": "Effect: Eagle Eye Elixir",
          "type": "effect"
        },
        "owner": {
          "sourceId": "xWCdsGSwLLTeX6tQ",
          "name": "Eagle Eye Elixir (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:antidote-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XWkeL34yJK6t5qUE",
      "slug": "antidote-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/antidote.webp"
    },
    "sourceHash": "sha256:93523e738a7ef1beb03b9d5a558391ed86efb5dbc0fc16601d168ce85195eb34",
    "translatableHash": "sha256:3935b8a66d89b47e88857b160fa27155458e8f8ba7256bd408c8817c39756d97",
    "data": {
      "schemaVersion": 1,
      "name": "Antidote (Greater)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate A (manipulate)\nAn antidote protects you against toxins. Upon drinking an antidote, you gain a +4 item bonus to Fortitude saving throws against poisons for 6 hours.\nEffect: Antidote",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 246,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Antidote",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Antidote",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Antidote",
          "sourceId": "TjBxxlTvb6tJP1jS",
          "name": "Effect: Antidote",
          "type": "effect"
        },
        "owner": {
          "sourceId": "XWkeL34yJK6t5qUE",
          "name": "Antidote (Greater)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-acid-resistance-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yG6Za8FaG3hpXUGh",
      "slug": "potion-of-acid-resistance-moderate",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-acid-resistance.webp"
    },
    "sourceHash": "sha256:cd5eb8510e493221cd1e7b87c88575c2b7bce6913e80e93577a52b88a900ffe5",
    "translatableHash": "sha256:dbde868f577211de55ed5f5f268cfb23a5b64a86ec802f5aadd11edc1df55ac8",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Acid Resistance (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this thick, fortifying potion grants resistance 10 against acid damage for 1 hour.\nEffect: Potion of Acid Resistance",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 189,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Acid Resistance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Potion of Acid Resistance",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Potion of Acid Resistance",
          "sourceId": "k8Gt8zfPOhkYOn1A",
          "name": "Effect: Potion of Acid Resistance",
          "type": "effect"
        },
        "owner": {
          "sourceId": "yG6Za8FaG3hpXUGh",
          "name": "Potion of Acid Resistance (Moderate)",
          "type": "consumable"
        }
      }
    ]
  }
]
