import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_06_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:honeyed-words",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JyxTmqjYYn63V5LY",
      "slug": "honeyed-words",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glibness.webp"
    },
    "sourceHash": "sha256:f9afd782183c18ef6dd6ea529f90bbd831ed6e59f8d1c6199b2fb1c5a694ee96",
    "translatableHash": "sha256:caaa104a56e4b29ffa5da1c2b2dd265da3b8bf6d1e533cf357873fac0d4383d7",
    "data": {
      "schemaVersion": 1,
      "name": "Honeyed Words",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "Falsehoods pass your lips as smoothly as silk. You gain a +4 status bonus to Deception checks to Lie and against Perception checks to discern if you are telling the truth, and you add your level even if untrained. If the implausibility of your lies prompts a circumstance penalty or a DC increase, reduce that penalty by half or increase it by half.\nSpell Effect: Honeyed Words",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 100,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Lie",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Lie",
          "sourceId": "ewwCglB7XOPLUz72",
          "name": "Lie",
          "type": "action"
        },
        "owner": {
          "sourceId": "JyxTmqjYYn63V5LY",
          "name": "Honeyed Words",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 400,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Honeyed Words",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Honeyed Words",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Honeyed Words",
          "sourceId": "6vodhSeI3ClMfOGd",
          "name": "Spell Effect: Honeyed Words",
          "type": "effect"
        },
        "owner": {
          "sourceId": "JyxTmqjYYn63V5LY",
          "name": "Honeyed Words",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dinosaur-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KhM8MhoUgoUjBMIz",
      "slug": "dinosaur-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dinosaur-form.webp"
    },
    "sourceHash": "sha256:1eb01f5d25b5415b38015e0d1aa4716f6a05b6f7b6815645e5a3ec61a4b51d75",
    "translatableHash": "sha256:ad09b6a241f29e3d0f82dd8be935323081f52bb5c3e81d24ca1f66623a02cab8",
    "data": {
      "schemaVersion": 1,
      "name": "Dinosaur Form",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You channel the primal forces of nature to transform into a Large animal battle form, specifically that of a powerful and terrifying dinosaur. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal, but this has no effect on the form's Size or statistics. While in this form, you gain the animal and dinosaur traits. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n• 15 temporary Hit Points.\n• Low-light vision and imprecise scent 30 feet.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +16, and your damage bonus is +9. These attacks are Strength based (for the purpose of the Enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +18, unless your own is higher.\nYou also gain specific abilities based on the form you choose:\n• Ankylosaurus\n• Speed 25 feet;\n• Melee 1 tail (backswing, reach 10 feet), Damage 2d6 bludgeoning;\n• Melee 1 foot, Damage 2d6 bludgeoning.\n• Brontosaurus\n• Speed 25 feet;\n• Melee 1 tail (reach 15 feet), Damage 2d6 bludgeoning;\n• Melee 1 foot, Damage 2d8 bludgeoning.\n• Deinonychus\n• Speed 40 feet;\n• Melee 1 talon (agile), Damage 2d4 piercing plus 1 persistent bleed;\n• Melee 1 jaws, Damage 1d10 piercing.\n• Stegosaurus\n• Speed 30 feet;\n• Melee 1 tail (reach 10 feet), Damage 2d8 piercing.\n• Triceratops\n• Speed 30 feet;\n• Melee 1 horn, Damage 2d8 piercing, plus 1d6 persistent bleed on a critical hit;\n• Melee 1 foot, Damage 2d6 bludgeoning.\n• Tyrannosaurus\n• Speed 30 feet;\n• Melee 1 jaws (deadly d12, reach 10 feet), Damage 1d12 piercing;\n• Melee 1 tail (reach 10 feet), Damage 1d10 bludgeoning.\nHeightened (5th) Your battle form is Huge and your attacks have 15-foot reach, or 20-foot reach if they started with 15-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.\nHeightened (7th) Your battle form is Gargantuan and your attacks have 20-foot reach, or 25-foot reach if they started with 15-foot reach. You instead gain AC = 21 + your level, 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Your battle form is Huge and your attacks have 15-foot reach, or 20-foot reach if they started with 15-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.\nHeightened (7th) Your battle form is Gargantuan and your attacks have 20-foot reach, or 25-foot reach if they started with 15-foot reach. You instead gain AC = 21 + your level, 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 940,
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
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1253,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Ankylosaurus)",
        "label": "Ankylosaurus",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Ankylosaurus)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Ankylosaurus)",
          "sourceId": "0Cyf07wboRp4CmcQ",
          "name": "Spell Effect: Dinosaur Form (Ankylosaurus)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1671,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Brontosaurus)",
        "label": "Brontosaurus",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Brontosaurus)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Brontosaurus)",
          "sourceId": "KkDRRDuycXwKPa6n",
          "name": "Spell Effect: Dinosaur Form (Brontosaurus)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2078,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Deinonychus)",
        "label": "Deinonychus",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Deinonychus)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Deinonychus)",
          "sourceId": "oJbcmpBSHwmx6FD4",
          "name": "Spell Effect: Dinosaur Form (Deinonychus)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2495,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Stegosaurus)",
        "label": "Stegosaurus",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Stegosaurus)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Stegosaurus)",
          "sourceId": "T6XnxvsgvvOrpien",
          "name": "Spell Effect: Dinosaur Form (Stegosaurus)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2782,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Triceratops)",
        "label": "Triceratops",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Triceratops)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Triceratops)",
          "sourceId": "iOKhr2El8R6cz6YI",
          "name": "Spell Effect: Dinosaur Form (Triceratops)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3213,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Tyrannosaurus)",
        "label": "Tyrannosaurus",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Dinosaur Form (Tyrannosaurus)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Dinosaur Form (Tyrannosaurus)",
          "sourceId": "542Keo6txtq7uvqe",
          "name": "Spell Effect: Dinosaur Form (Tyrannosaurus)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KhM8MhoUgoUjBMIz",
          "name": "Dinosaur Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:outcasts-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KSAEhNfZyXMO7Z7V",
      "slug": "outcasts-curse",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d9853fabb7983c84e0a996dc7d76806ce07f2ebc1ec7347deaafd76bac9fe06f",
    "translatableHash": "sha256:051aaf4ef598dcdd1260019fa2fa3a809f7bdb86de6c4e97d1f57092b1ff76ac",
    "data": {
      "schemaVersion": 1,
      "name": "Outcast's Curse",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental",
        "misfortune"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You afflict the target with a curse that makes its presence abrasive and off-putting. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess For 10 minutes, the target must roll twice and use the worse result whenever attempting a Deception, Diplomacy, Intimidation, or Performance check, and creatures they encounter have an initial attitude toward them of one step worse (for instance, Unfriendly instead of Indifferent).\nSpell Effect: Outcast's Curse (Success)\nFailure As success, but the effect is permanent.\nSpell Effect: Outcast's Curse (Failure)\nCritical Failure As failure, and creatures that the target encounters have an initial attitude toward them of two steps worse.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 477,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unfriendly",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unfriendly",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unfriendly",
          "sourceId": "I1ffBVISxLr2gC4u",
          "name": "Unfriendly",
          "type": "condition"
        },
        "owner": {
          "sourceId": "KSAEhNfZyXMO7Z7V",
          "name": "Outcast's Curse",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 542,
        "uuid": "Compendium.pf2e.conditionitems.Item.Indifferent",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Indifferent",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Indifferent",
          "sourceId": "fuG8dgthlDWfWjIA",
          "name": "Indifferent",
          "type": "condition"
        },
        "owner": {
          "sourceId": "KSAEhNfZyXMO7Z7V",
          "name": "Outcast's Curse",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 606,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Outcast's Curse (Success)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Outcast's Curse (Success)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Outcast's Curse (Success)",
          "sourceId": "hlgCesYXXHG8r9X4",
          "name": "Spell Effect: Outcast's Curse (Success)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KSAEhNfZyXMO7Z7V",
          "name": "Outcast's Curse",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 768,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Outcast's Curse (Failure)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Outcast's Curse (Failure)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Outcast's Curse (Failure)",
          "sourceId": "QccOlLHtnVEmD67m",
          "name": "Spell Effect: Outcast's Curse (Failure)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KSAEhNfZyXMO7Z7V",
          "name": "Outcast's Curse",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-tether",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ksLCg62cLOojw3gN",
      "slug": "planar-tether",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3bbe5ffd0827c2bd03d4ae595be0b8282c77307a1a403bf5f032172747db7a87",
    "translatableHash": "sha256:b628a06c8fc50535f5eddd889e1451af81241839fe542dec01085dd42166320e",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Tether",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You stitch the target to its current plane. While the target is affected by planar tether, the spell attempts to counteract any teleportation effect that would move the target, or any effect that would transport it to a different plane. Planar tether's duration is determined by the target's Will save.\nCritical Success The target is unaffected.\nSuccess The effect's duration is 1 minute.\nFailure The effect's duration is 10 minutes.\nCritical Failure The effect's duration is 1 hour.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:confusion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LiGbewa9pO0yjbsY",
      "slug": "confusion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/confusion.webp"
    },
    "sourceHash": "sha256:8139a2bb97269702858fb0309661e9abc82da722742e52149ae65b8c4f1c4134",
    "translatableHash": "sha256:3025d486f36103de8f9e373ebb4f296c026f0202f6613e0989979287df0be220",
    "data": {
      "schemaVersion": 1,
      "name": "Confusion",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You befuddle your target with strange impulses, causing it to act randomly. The effects are determined by the target's Will save. You can Dismiss the spell.\nCritical Success The target is unaffected.\nSuccess The target babbles incoherently and is Stunned 1.\nFailure The target is Confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.\nCritical Failure The target is Confused for 1 minute, with no save to end early.\nHeightened (8th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 10 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 305,
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
          "sourceId": "LiGbewa9pO0yjbsY",
          "name": "Confusion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 414,
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
          "sourceId": "LiGbewa9pO0yjbsY",
          "name": "Confusion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shape-stone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "McnPlLFvKtQVXNcG",
      "slug": "shape-stone",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shape-stone.webp"
    },
    "sourceHash": "sha256:102f2726159d747f34ef88cb040284a082a9ccd0cd338ae9ff8d42c55f9f5635",
    "translatableHash": "sha256:c87aef65994577556ae3c609c8110303ba10f422763f54e45d6f909e83a0708b",
    "data": {
      "schemaVersion": 1,
      "name": "Shape Stone",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You shape the stone into a rough shape of your choice. The shaping process is too crude to produce intricate parts, fine details, moving pieces, or the like. Any creatures standing atop the stone when you reshape it must each attempt a Reflex save or Acrobatics check.\nSuccess The creature is unaffected.\nFailure The creature falls Prone atop the stone.\nCritical Failure The creature falls off the stone (if applicable) and lands Prone.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "cube of stone 10 feet across or smaller",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 390,
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
          "sourceId": "McnPlLFvKtQVXNcG",
          "name": "Shape Stone",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:aerial-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NzXpEzcZAjuDTZjK",
      "slug": "aerial-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f0b1970244c0ca185c55486d3b96def25ac4de42d03e0def6231873ca1f844bd",
    "translatableHash": "sha256:0d56add0d3b119a7d473683d7e77110a60cdb9d64f93691223038aca4dfb9551",
    "data": {
      "schemaVersion": 1,
      "name": "Aerial Form",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You harness your mastery of primal forces to reshape your body into a Medium flying animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as an owl or eagle for bird), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n• 5 temporary Hit Points.\n• Low-light vision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +16, and your damage bonus is +5. These attacks are Dexterity based (for the purpose of the Clumsy condition, for example). If your attack modifier for Dexterity-based unarmed attacks is higher, you can use it instead.\n• Acrobatics modifier of +16, unless your own modifier is higher.\nYou also gain specific abilities based on the form you choose:\n• Bat\n• Speed 20 feet, fly Speed 30 feet; precise echolocation 40 feet;\n• Melee a fangs, Damage 2d8 piercing;\n• Melee a wing (agile), Damage 2d6 bludgeoning.\n• Bird\n• Speed 10 feet, fly Speed 50 feet;\n• Melee a beak, Damage 2d8 piercing;\n• Melee a talon (agile), Damage 1d10 slashing.\n• Pterosaur\n• Speed 10 feet, fly Speed 40 feet; imprecise scent 30 feet;\n• Melee a beak, Damage 3d6 piercing.\n• Wasp\n• Speed 20 feet, fly Speed 40 feet;\n• Melee a stinger, Damage 1d8 piercing plus 1d6 persistent poison.\nSpell Effect: Aerial Form\nHeightened (5th) Your battle form is Large and your fly Speed gains a +10-foot status bonus. You must have enough space to expand into or the spell is lost. You instead gain 10 temporary HP, attack modifier +18, damage bonus +8, and Acrobatics +20.\nHeightened (6th) Your battle form is Huge, your fly Speed gains a +15-foot status bonus, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, attack modifier +21, damage bonus +4 and double damage dice (including persistent damage), and Acrobatics +23.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Your battle form is Large and your fly Speed gains a +10-foot status bonus. You must have enough space to expand into or the spell is lost. You instead gain 10 temporary HP, attack modifier +18, damage bonus +8, and Acrobatics +20.\nHeightened (6th) Your battle form is Huge, your fly Speed gains a +15-foot status bonus, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, attack modifier +21, damage bonus +4 and double damage dice (including persistent damage), and Acrobatics +23."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 913,
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
          "sourceId": "NzXpEzcZAjuDTZjK",
          "name": "Aerial Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2461,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Aerial Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Aerial Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Aerial Form",
          "sourceId": "mvMWmP3m9Xawbwpx",
          "name": "Spell Effect: Aerial Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "NzXpEzcZAjuDTZjK",
          "name": "Aerial Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:liminal-doorway",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OM5NeD7a1CYNqy8S",
      "slug": "liminal-doorway",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mindscape-door.webp"
    },
    "sourceHash": "sha256:77b6269c6d8bdb2a4189f70ac058785ceab94528818b1556ac7dcb5f7f614725",
    "translatableHash": "sha256:9f2446e0f2274b69c10113b1ed25dbfc8a5fcb11f2eac2e680bdf245e1a331d4",
    "data": {
      "schemaVersion": 1,
      "name": "Liminal Doorway",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "extradimensional",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You draw a chalk doorway on an unbroken surface, which opens into an extradimensional space. Any creature treating the drawing as an actual door can Interact to touch the doorknob and pass through. The warped, chalk-drawn room beyond the door is 20 feet in width, depth, and height. The space is unadorned and empty, with chalk lines indicating the corners of the walls.\nIf the drawing is scrubbed away, the underlying surface is broken, or a creature attempts to enter the space that would put it over capacity, the space begins to collapse. The space ejects one creature at random each round, depositing it on the nearest open ground, until all creatures are returned outside.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:peaceful-bubble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "onjZCEHs3JJJRTD0",
      "slug": "peaceful-bubble",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/private-sanctum.webp"
    },
    "sourceHash": "sha256:a06c86d8818e466cc8ac0c7d1faf352a76612963446f65d6ef00ee17b6bf105e",
    "translatableHash": "sha256:b894760cd27a5bc3edd059c2e07978cb9f3f6b782c64a501b93117924dfb9a61",
    "data": {
      "schemaVersion": 1,
      "name": "Peaceful Bubble",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "An opaque shell of drifting, iridescent runes covers the area, creating a bubble. You can choose to make the burst smaller, in 10-foot increments. The runes don't block travel, but those inside the bubble can't perceive those outside it and vice versa. Detection and scrying effects are likewise blocked.\nCreatures sleeping within the bubble are immune to dreams sent by spells. Those sleeping 8 hours reduce their Doomed condition by 2 instead of 1.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "",
      "area": "100 burst",
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 425,
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
          "sourceId": "onjZCEHs3JJJRTD0",
          "name": "Peaceful Bubble",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:read-omens",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pkcOby5prOausy1k",
      "slug": "read-omens",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:64103170660b116887cc031ee48fa92f0a2f854906310b07137bf047e8af3989",
    "translatableHash": "sha256:b55d80e6855d76407cc41338e85b0d2864eca145d6adbf554e9bf77cba629631",
    "data": {
      "schemaVersion": 1,
      "name": "Read Omens",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You peek into the future. Choose a particular goal or activity you plan to engage in within 1 week, or an event you expect might happen within 1 week. You learn a cryptic clue or piece of advice that could help with the chosen event, often in the form of a rhyme or omen.",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:suggestion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qwlh6aDgi86U3Q7H",
      "slug": "suggestion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/suggestion.webp"
    },
    "sourceHash": "sha256:2956f98ede853d8daa15ca2102cb3aadbc9231ac8831e54c959fd71cb8d958ba",
    "translatableHash": "sha256:59743a0a117be2ffe2764414bb15a8964ef00f947802d00279d25c17ae6ae2c2",
    "data": {
      "schemaVersion": 1,
      "name": "Suggestion",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "linguistic",
        "manipulate",
        "mental",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Your honeyed words are difficult for creatures to resist. You suggest a course of action to the target, which must be phrased in such a way as to seem like a logical course of action to the target and can't be self-destructive or obviously against the target's self-interest. The target must attempt a Will save.\nCritical Success The target is unaffected and knows you tried to control it.\nSuccess The target is unaffected.\nFailure The target immediately follows your suggestion. The spell has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.\nCritical Failure As failure, but the base duration is 1 hour.\nHeightened (8th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:creation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TUj8eugNqAvB1vVR",
      "slug": "creation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:526668e94509bbaf36a0fe9608826aa647c1cba0826aaace56d08d8504461b48",
    "translatableHash": "sha256:38311e7717ac5b70df19885be84c04d390e1c929b49369b35e012e82fbabd81e",
    "data": {
      "schemaVersion": 1,
      "name": "Creation",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure a temporary object from magical energy. It must consist of earthen or plant-derived matter (such as wood, paper, brick, or stone) and be 5 cubic feet or smaller. It can't rely on intricate artistry or complex moving parts, never fulfills a cost or the like, and can't be made of precious materials or materials with a rarity of uncommon or higher. It is obviously temporarily conjured, and thus can't be sold or passed off as a genuine item. The spell gains the appropriate trait for the item created, typically earth, plant, or wood.\nHeightened (5th) The item is metal and can include common minerals, like feldspar or quartz. The spell gains the metal trait if used to create a metal object",
      "castingTime": "1 minute",
      "range": "0 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The item is metal and can include common minerals, like feldspar or quartz. The spell gains the metal trait if used to create a metal object"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nightmare",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Uqj344bezBq3ESdq",
      "slug": "nightmare",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:593cab490449f749ffd8c80081f4c09bf45c475f6f4e794d7e71d8221472aa03",
    "translatableHash": "sha256:0d47d0cd1d1f671f4db8048c946af9287a3e5c55de3e62160ef0b004f0b77583",
    "data": {
      "schemaVersion": 1,
      "name": "Nightmare",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You send disturbing nightmares to your target. The next time the target falls asleep, it must attempt a Will save. If you know the target only by name and have never met them, the target gets a +4 circumstance bonus to the Will save.\nCritical Success The target suffers no adverse effects and is temporarily immune for 1 week.\nSuccess The target experiences the nightmares but suffers no adverse effects other than unpleasant memories.\nFailure The target experiences the nightmares and awakens Fatigued.\nCritical Failure The target experiences the nightmares, awakens Fatigued, and is Drained 2 until it is no longer Fatigued.",
      "castingTime": "10 minutes",
      "range": "planetary",
      "target": "1 creature you know by name",
      "area": null,
      "duration": "1 day",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 576,
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
          "sourceId": "Uqj344bezBq3ESdq",
          "name": "Nightmare",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 734,
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
          "sourceId": "Uqj344bezBq3ESdq",
          "name": "Nightmare",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vapor-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "V8wXOsoejQhe6CyG",
      "slug": "vapor-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gaseous-form.webp"
    },
    "sourceHash": "sha256:9b0d929666744b8b0860529a0f5dfcc11ad89ada852accec2c332014f4376a7c",
    "translatableHash": "sha256:7da16e4e0cc41e9c606fe9b438442cdac174bdf8f2112db7a2b3fba212f8d0b8",
    "data": {
      "schemaVersion": 1,
      "name": "Vapor Form",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "The target transforms into a vaporous state. In this state, the target is amorphous. It loses any item bonus to AC and all other effects and bonuses from armor, and it uses its proficiency modifier for unarmored defense. It gains resistance 8 to physical damage and is immune to precision damage. It can't cast spells, activate items, or use actions that have the attack or manipulate trait. It gains a fly Speed of 10 feet and can slip through tiny cracks. The target can Dismiss the spell.\nSpell Effect: Vapor Form",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 502,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vapor Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vapor Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Vapor Form",
          "sourceId": "sILRkGTwoBywy0BU",
          "name": "Spell Effect: Vapor Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "V8wXOsoejQhe6CyG",
          "name": "Vapor Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:translocate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VlNcjmYyu95vOUe8",
      "slug": "translocate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:08163b6b81b8c4474be4172eeed43774d2ee778ff2fa13f1f2ac4244d67d7606",
    "translatableHash": "sha256:4d02086ec22cfe5b99e894ffc8cce45ddef944321296b84079632e05b667ef23",
    "data": {
      "schemaVersion": 1,
      "name": "Translocate",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space within range you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the spell is lost.\nHeightened (5th) The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative location and distance from you. You are then temporarily immune for 1 hour.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative location and distance from you. You are then temporarily immune for 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hydraulic-torrent",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Y3G6Y6EDgCY0s3fq",
      "slug": "hydraulic-torrent",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a7389b9e7cd078a660e8cb48c999097a0277c4b7e011b8417491ad2d6d1513e7",
    "translatableHash": "sha256:a409ec0913d60e8cef4653a7b829271b2f8cc093210caf0997279ad80bf6ec11",
    "data": {
      "schemaVersion": 1,
      "name": "Hydraulic Torrent",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A swirling torrent of water manifests along a straight line, battering creatures and unattended objects in its path and possibly pushing them away from you. The torrent deals 8d6 bludgeoning damage. Each creature in the area must attempt a basic Fortitude save; unattended objects automatically fail. Creatures and objects that fail are also knocked back 5 feet (10 feet on a critical failure).\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "8d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fire-shield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YrzBLPLd3r9m6t1p",
      "slug": "fire-shield",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da2618b284db6751f6705b5cd4a603fdf0d0caecf0fd45b049666162fd885379",
    "translatableHash": "sha256:7711ba664d65169c75e831bb578a52fc5a72bef73967ad81132d29bcaf87c840",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Shield",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a hovering shield made of fire. As long as the shield persists, its heat grants you cold resistance 5 and makes you immune to mild and severe environmental cold. You can Raise a Shield with the fire shield as a normal shield to gain a +1 circumstance bonus to AC. You can use the Shield Block reaction with the fire shield, which has Hardness 10, is immune to fire, and has 40 HP (with no Broken Threshold), and its Hardness is halved against effects that have the water trait. If you Shield Block a melee attack that is either an unarmed attack or made by an adjacent attacker, the attacker takes 2d6 fire damage.\nSpell Effect: Fire Shield\nHeightened (+2) The cold resistance increases by 5, the HP increase by 10, and the fire damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The cold resistance increases by 5, the HP increase by 10, and the fire damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 654,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fire Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fire Shield",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Fire Shield",
          "sourceId": "1RsScTvNdGD9zGWe",
          "name": "Spell Effect: Fire Shield",
          "type": "effect"
        },
        "owner": {
          "sourceId": "YrzBLPLd3r9m6t1p",
          "name": "Fire Shield",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:flicker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zR67Rt3UMHKC5evy",
      "slug": "flicker",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blink.webp"
    },
    "sourceHash": "sha256:fae97121204d77cdb126c732e03fbdbb650c47d8784878240f2649eed2e50c06",
    "translatableHash": "sha256:00f1f6aeecdfaea925a5978233599d4d26ce7594ccc1f081c98d0f9b974f06ac",
    "data": {
      "schemaVersion": 1,
      "name": "Flicker",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You flicker quickly between your current plane and another. You gain resistance 5 to all damage, except force. At the end of each of your turns, you automatically teleport 10 feet in a random direction, as determined by the GM. You can Sustain the spell to teleport in this way.\nSpell Effect: Flicker\nHeightened (+2) The resistance increases by 3.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The resistance increases by 3."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 289,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flicker",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flicker",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Flicker",
          "sourceId": "ZlsuhS9J0S3PuvCO",
          "name": "Spell Effect: Flicker",
          "type": "effect"
        },
        "owner": {
          "sourceId": "zR67Rt3UMHKC5evy",
          "name": "Flicker",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:clairvoyance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zvKWclOZ7A53DObE",
      "slug": "clairvoyance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/clairvoyance.webp"
    },
    "sourceHash": "sha256:84f1f22e954916c3acd797fcb9a21459b1e00f2ea9562c809a6c9fb017f4fb2e",
    "translatableHash": "sha256:f4a37c1f16acdc8faa8f071644bad3fa7ce8706f47877ed862ccf06425516bc6",
    "data": {
      "schemaVersion": 1,
      "name": "Clairvoyance",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an Invisible floating eye at a location within range (even if it's outside your line of sight or line of effect). The eye can't move, but you can see in all directions from that point as if using your normal visual senses.",
      "castingTime": "1 minute",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 17,
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
          "sourceId": "zvKWclOZ7A53DObE",
          "name": "Clairvoyance",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:magic-passage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "115Xp9E38CJENhNS",
      "slug": "magic-passage",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d43fe99850b805167a9781bfcef1571d1f87ffbfc6bf13f3661fc100533d01ac",
    "translatableHash": "sha256:aac4e0153b5687c00e3fc2e70452304d52445736906f196faf1a73f92686bc3e",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Passage",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a visible tunnel through the wall in the chosen area, replacing the area with empty space. If the wall is thicker than 10 feet, the tunnel ends 10 feet in. Even a small layer of metal in the wall prevents this spell from functioning. This spell doesn't reduce the integrity of the structure. When the spell ends, anyone inside the tunnel is shunted to the nearest exit.\nHeightened (7th) The tunnel can be up to 20 feet deep. The areas of the wall that contain your tunnel's entrance appear completely normal (unless viewed with truesight or a similar effect), despite the tunnel's existence. The tunnel's entrance functions as a solid wall, but you can specify a password or a trigger, allowing creatures to enter freely.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The tunnel can be up to 20 feet deep. The areas of the wall that contain your tunnel's entrance appear completely normal (unless viewed with truesight or a similar effect), despite the tunnel's existence. The tunnel's entrance functions as a solid wall, but you can specify a password or a trigger, allowing creatures to enter freely."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1K6AYGisvo9gqdhs",
      "slug": "elemental-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-form.webp"
    },
    "sourceHash": "sha256:6e5b2941aca6a3e28bea798721f0fbf33985f0623e945d9f5f338c7920d997a1",
    "translatableHash": "sha256:0b3ee5ebbc628b2622fcffa415b6f7e8334b89b27da7dc133e0ddeb27136f56d",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Form",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call upon the power of the planes to transform into a Medium elemental battle form. When you Cast this Spell, choose a listed element. While in this form, you gain the corresponding trait and the elemental trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 19 + your level. Ignore your armor's check penalty and Speed reduction.\n• 10 temporary Hit Points.\n• Darkvision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +18, and your damage bonus is +9. These are Dexterity based (air, fire, or metal) or Strength based (earth, water, or wood). If your corresponding unarmed attack modifier is higher, you can use it instead.\n• Acrobatics (air, fire, or metal) or Athletics (earth, water, or wood) modifier of +20; ignore this change if your own modifier is higher.\nYou also gain specific abilities based on the type of elemental you choose:\n• Air\n• fly 80 feet, movement doesn't trigger reactions;\n• Melee 1 gust, Damage 1d4 bludgeoning.\n• Earth\n• Speed 20 feet, burrow 20 feet;\n• Melee 1 boulder, Damage 2d10 bludgeoning.\n• Fire\n• Speed 50 feet; fire resistance 10, weakness 5 to cold and 5 to water;\n• Melee 1 tendril, Damage 1d8 fire plus 1d4 persistent fire.\n• Metal\n• Speed 40 feet, fly 20 feet;\n• Melee 1 blade (versatile piercing), Damage 1d8 slashing plus 1d4 electricity.\n• Water\n• Speed 20 feet, swim 60 feet; fire resistance 5;\n• Melee 1 wave, Damage 1d12 bludgeoning, and you can spend an action immediately after a hit to push the target 5 feet with the effects of a successful Shove.\n• Wood\n• Speed 20 feet, climb 30 feet;\n• Melee 1 branch, Damage 2d10 bludgeoning.\nHeightened (6th) Your battle form is Large and your attacks have 10-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 15 temporary HP, an attack modifier of +23, a damage bonus of +13, and Acrobatics or Athletics +23.\nHeightened (7th) Your battle form is Huge and your attacks have 15-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 20 temporary HP, an attack modifier of +25, a damage bonus of +11, double the number of damage dice (including persistent damage), and Acrobatics or Athletics +25.\nSpell Effect: Elemental Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Your battle form is Large and your attacks have 10-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 15 temporary HP, an attack modifier of +23, a damage bonus of +13, and Acrobatics or Athletics +23.\nHeightened (7th) Your battle form is Huge and your attacks have 15-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 20 temporary HP, an attack modifier of +25, a damage bonus of +11, double the number of damage dice (including persistent damage), and Acrobatics or Athletics +25.\nSpell Effect: Elemental Form"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2415,
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
          "sourceId": "1K6AYGisvo9gqdhs",
          "name": "Elemental Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3348,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Elemental Form",
          "sourceId": "Qp0dlhJaCzXIx73r",
          "name": "Spell Effect: Elemental Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "1K6AYGisvo9gqdhs",
          "name": "Elemental Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-fiend",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "29ytKctjg7qSW2ff",
      "slug": "summon-fiend",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-fiend.webp"
    },
    "sourceHash": "sha256:72a495c02847b55d3194cea7daa6e8415827930453575bdfbf7f80ad64219110",
    "translatableHash": "sha256:6f3430117b6f5cd1198ae346c71f14f39df2af34be5df2bb96a7a761df09cc52",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Fiend",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon",
        "unholy"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You summon a creature that has the fiend trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of fiends you can summon in certain cases. For instance, archdevils typically allow their followers to summon devils, but not other fiends.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 360,
        "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
        "label": "summon",
        "target": {
          "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
          "package": "pf2e",
          "sourcePack": "journals",
          "documentType": "JournalEntry",
          "compendiumKey": "S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF"
        },
        "owner": {
          "sourceId": "29ytKctjg7qSW2ff",
          "name": "Summon Fiend",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mind-probe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9BnhadUO8FMLmeZ3",
      "slug": "mind-probe",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mind-probe.webp"
    },
    "sourceHash": "sha256:410c34c76ebb799160d4168b8480b816b4c6e3e91a0ec036fd7f9fbfd2514126",
    "translatableHash": "sha256:9b76732532e42e7ea553c96c08747086e20686a5450c5d8342087bc3128f4bd0",
    "data": {
      "schemaVersion": 1,
      "name": "Mind Probe",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cast your thoughts through a creature's mind, sifting for information. You access the target's memories and knowledge unless it fends you off with a Will save.\nSuccess The target is unaffected.\nFailure Each round of the spell's duration, you can Sustain the spell to ask a different question and attempt to uncover the answer. For each question, the target can attempt a Deception check against your spell DC; if the target succeeds, you don't learn the answer, and on a critical success, the target gives you a false answer that you believe is truthful Once you've asked the target a given question, asking it again, even with a separate casting of mind probe, produces the same result.\nCritical Failure As failure, and the target takes a –4 circumstance penalty to Deception checks against your questions.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-immolation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "A16eFTRh82xIjMu8",
      "slug": "divine-immolation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3db1987bf99505bfecc18ddd77fb028b9b4ad0de3892962f4af749331934e945",
    "translatableHash": "sha256:5ce044bc69a6e2a7967a3aa964bb3eeac914ac089524bec40bbc984be32b360c",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Immolation",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "sanctified",
        "spirit"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Divine flames scour creatures within the area. Creatures take 6d6 fire damage and (@item.level -3)d6[persistent,fire] damage. The divine power within the flames scorches the spirit as well; a creature takes spirit damage instead of fire damage from divine immolation if that would be more detrimental to the creature (as determined by the GM).\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no persistent damage.\nFailure The creature takes full damage and persistent damage.\nCritical Failure The creature takes double damage and double persistent damage.\nHeightened (+1) The damage increases by 1d6 and persistent damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6 and persistent damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:banishment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bay4AfSu2iIozNNW",
      "slug": "banishment",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/banishment.webp"
    },
    "sourceHash": "sha256:0c8d60f1dbf6c8f3a131190ae6bb3279a8c41516cddf1793961bb4d2572eeffc",
    "translatableHash": "sha256:3fe9a120cbcd67b6155afcf6849074baf38c5d9dbc177c5281bd4ab0edec5ab5",
    "data": {
      "schemaVersion": 1,
      "name": "Banishment",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You send the target back to its home plane. The target must attempt a Will save. You can spend an extra action while Casting this Spell and add a cost to the spell to give the creature a –2 circumstance penalty to its save. The cost must be a specially gathered object that is anathema to the creature. This spell fails if you aren't on your home plane when you cast it.\nCritical Success The target resists being banished and you are Stunned 1.\nSuccess The target resists being banished.\nFailure The target is banished.\nCritical Failure The target is banished and can't return by any means to the plane it's banished from for 1 week.\nHeightened (9th) You can target up to 10 creatures. The extra cost affects targets to which it is anathema.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature that isn't on its home plane",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (9th) You can target up to 10 creatures. The extra cost affects targets to which it is anathema."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "bay4AfSu2iIozNNW",
          "name": "Banishment",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:synaptic-pulse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BilnTGuXrof9Dt9D",
      "slug": "synaptic-pulse",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:05c95b564c4e597acd77e2d70706b11bda3bfffd718b9b49ef533d7dce55a3d7",
    "translatableHash": "sha256:bfb46afef658a4a33d2ecc5d9fcfe9033a795fd5fdbcd59bfb9715f134ef8cca",
    "data": {
      "schemaVersion": 1,
      "name": "Synaptic Pulse",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You emit a pulsating mental blast that penetrates the minds of all enemies in the area. Each enemy in the area must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 2.\nCritical Failure The creature is Stunned for 1 round.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 264,
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
          "sourceId": "BilnTGuXrof9Dt9D",
          "name": "Synaptic Pulse",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 375,
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
          "sourceId": "BilnTGuXrof9Dt9D",
          "name": "Synaptic Pulse",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-giant",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "e9UJoVYUd5kJWUpi",
      "slug": "summon-giant",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-giant.webp"
    },
    "sourceHash": "sha256:faaae6772fe9f4ff02af51d811db54060c0489150b07932df83afdefee5f2d09",
    "translatableHash": "sha256:d33d9abb4a6e3b1a4c1496c9eb233174a6668dd1f365ad4521d457c0c78d2d84",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Giant",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You summon a creature that has the giant trait and whose level is 5 or lower to fight for you.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 157,
        "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
        "label": "summon",
        "target": {
          "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
          "package": "pf2e",
          "sourcePack": "journals",
          "documentType": "JournalEntry",
          "compendiumKey": "S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF"
        },
        "owner": {
          "sourceId": "e9UJoVYUd5kJWUpi",
          "name": "Summon Giant",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:scouting-eye",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ek5XI0aEdZhBgm21",
      "slug": "scouting-eye",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prying-eye.webp"
    },
    "sourceHash": "sha256:349fb07ba76a0c10c4612b02566321e19cda3eef09dc66d32c6b4d2d8920bc20",
    "translatableHash": "sha256:978f0da0beb94523bf64ec10b2db6e7a1f794b0e15905b307b111f71754412df",
    "data": {
      "schemaVersion": 1,
      "name": "Scouting Eye",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You create an Invisible, floating eye, 1 inch in diameter, at a location you can see within 500 feet. It sees in all directions with your normal visual senses and continuously transmits what it sees to you.\nThe first time you Sustain the spell each round, you can either move the eye up to 30 feet, seeing only things in front of the eye, or move it up to 10 feet, seeing everything in all directions around it. There is no limit to how far from you the eye can move, but the spell ends immediately if you and the eye ever cease to be on the same plane of existence. You can attempt Seek actions through the eye if you want to attempt Perception checks with it. Any damage dealt to the eye destroys it and ends the spell.",
      "castingTime": "1 minute",
      "range": "see text",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 17,
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
          "sourceId": "Ek5XI0aEdZhBgm21",
          "name": "Scouting Eye",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:natures-pathway",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "F1qxaqsEItmBura2",
      "slug": "natures-pathway",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:12be4089d7a3a437fe57a0da7f1828e4b69fd5eef6bd215d28fb03e361c83a24",
    "translatableHash": "sha256:9fc8cc7d0f6637a56a5659be3f69e3115030fbbb80898c80cf58664f0270fc34",
    "data": {
      "schemaVersion": 1,
      "name": "Nature's Pathway",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "plant",
        "teleportation"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You step into a living tree with a trunk big enough for you to fit inside it and instantly teleport to any tree within 5 miles that also has a sufficiently large trunk. Once you enter the first tree, you instantly know the rough locations of other sufficiently large trees within range and can exit from the original tree, if you prefer. You can't carry extradimensional spaces with you; if you attempt to do so, the spell fails.\nHeightened (6th) The tree you exit can be up to 50 miles away.\nHeightened (8th) The tree you exit can be up to 500 miles away.\nHeightened (9th) The tree you exit can be anywhere on the same planet.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The tree you exit can be up to 50 miles away.\nHeightened (8th) The tree you exit can be up to 500 miles away.\nHeightened (9th) The tree you exit can be anywhere on the same planet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wave-of-despair",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GaRQlC9Yw1BGKHfN",
      "slug": "wave-of-despair",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a5d1e46634aed6317837f57f4781b334c4a4489d2f468f3e93972dd17a3719d6",
    "translatableHash": "sha256:c41875261a76f2c95621d5e2f7ef4660296c82f03f6e0e26c6123b8d24cbdc4b",
    "data": {
      "schemaVersion": 1,
      "name": "Wave of Despair",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You inflict despair on creatures in the area. The effects for each creature are determined by its Will save.\nCritical Success The creature is unaffected.\nSuccess For 1 round, the creature can't use reactions and must attempt another save at the start of its turn; on a failure, it is Slowed 1 for that turn as it sobs uncontrollably.\nFailure As success, but the duration is 1 minute.\nCritical Failure As failure, and the creature is automatically slowed 1 for 1 minute.\nHeightened (7th) The area increases to a 60-foot cone.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "1 or more rounds",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) The area increases to a 60-foot cone."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 342,
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
          "sourceId": "GaRQlC9Yw1BGKHfN",
          "name": "Wave of Despair",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:subconscious-suggestion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GP3wewkQXEPrLxYj",
      "slug": "subconscious-suggestion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:50b56ce3f53e11c3f11f7655048ae1f0d2fc3fdd8428cd3ab809401db7b5ee4d",
    "translatableHash": "sha256:71b1595337eb5f8d27fdd27ed9f380f8188f6e6804ec4b4ae888e31434469981",
    "data": {
      "schemaVersion": 1,
      "name": "Subconscious Suggestion",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "linguistic",
        "manipulate",
        "mental",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You implant a subconscious suggestion deep within the target's mind for them to follow when a trigger you specify occurs. You suggest a course of action to the target. Your directive must be phrased in such a way as to seem like a logical course of action to the target, and it can't be self-destructive or obviously against the target's self-interest. The target must attempt a Will save.\nCritical Success The target is unaffected and knows you tried to control it.\nSuccess The target is unaffected and thinks you were talking to them normally, not casting a spell on them.\nFailure The suggestion remains in the target's subconscious until the next time you prepare. If the trigger occurs before then, the target immediately follows your suggestion. The effect has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.\nCritical Failure As failure, but the duration is 1 hour.\nHeightened (9th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (9th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invoke-spirits",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hghGRzOSzEl4UXdS",
      "slug": "invoke-spirits",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a4caec9f9eb05fc4b0fcbf8035a215a6abf012274bef873613c8c36ca15fc63d",
    "translatableHash": "sha256:14cb685aec93eedd6e48707de94c4b1ecf1a74fe5025876bb3ec20552a057212",
    "data": {
      "schemaVersion": 1,
      "name": "Invoke Spirits",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Ragged apparitions of the dead rise to stalk the living. They deal 2d4 mental damage and 2d4 void damage to each living creature in the area, with a basic Will save. Additionally, creatures that critically fail the save are Frightened 2 and are Fleeing for 1 round.\nOn subsequent rounds, the first time you Sustain the Spell each round, you can move the area up to 30 feet within the range of the spell. Living creatures in the new area must attempt saves with the same effects as above, except that critically failing doesn't make them flee.\nHeightened (+2) The mental damage and void damage each increase by 1d4.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "2d4",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "2d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The mental damage and void damage each increase by 1d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 227,
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
          "sourceId": "hghGRzOSzEl4UXdS",
          "name": "Invoke Spirits",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 303,
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
          "sourceId": "hghGRzOSzEl4UXdS",
          "name": "Invoke Spirits",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:breath-of-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Hnc7eGi7vyZenAIm",
      "slug": "breath-of-life",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d4efb78e7fb55c71c81883eab962d39044adc9a54fda1340175b00ad8869603c",
    "translatableHash": "sha256:599e441974715a612d02b0476a22af8e6ea5c34d1a3eda6ff741490cf8fb39d0",
    "data": {
      "schemaVersion": 1,
      "name": "Breath of Life",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "vitality"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Trigger A living creature within range would die.\nYour blessing revives a creature at the moment of its death. You prevent the target from dying and restore 5d8 Hit Points to the target. You can't use breath of life if the triggering effect was a death effect or an effect that leaves no remains, such as Disintegrate\nHeightened (+2) The healing increases by 1d8.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "5d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened (+2) The healing increases by 1d8."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 339,
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
          "sourceId": "Hnc7eGi7vyZenAIm",
          "name": "Breath of Life",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-entity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i1TvBID5QLyXrUCa",
      "slug": "summon-entity",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-entity.webp"
    },
    "sourceHash": "sha256:64f83404cf1942e833309c3a057f693dc74243d198498f4be72edc7f497ee81d",
    "translatableHash": "sha256:dd625ed535b0d99c3f6a5155f48ca5a64b5f166c212a76704e8488b853b8bc7b",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Entity",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You summon a creature that has the aberration trait and whose level is 5 or lower to fight for you.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 162,
        "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
        "label": "summon",
        "target": {
          "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
          "package": "pf2e",
          "sourcePack": "journals",
          "documentType": "JournalEntry",
          "compendiumKey": "S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF"
        },
        "owner": {
          "sourceId": "i1TvBID5QLyXrUCa",
          "name": "Summon Entity",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IqJ9URobmJ9L9UBG",
      "slug": "shadow-blast",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ffc3edb493a72660cd648f8afa2ec05ce27284f54adc2b0ed79935dd8e92cbad",
    "translatableHash": "sha256:d3dfe082174c091d0e0c308fc5a24f9da3768548782c2e1396b28c94b45d3787",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Blast",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Area varies\nDefense check (reflex, basic, options:area-effect) or check (will, basic, options:area-effect) (target's choice)\nYou shape the shadow substance of the Netherworld into a blast. Choose (@item.rank+1)d8[acid|options:area-damage], (@item.rank+1)d8[bludgeoning|options:area-damage], (@item.rank+1)d8[cold|options:area-damage], (@item.rank+1)d8[electricity|options:area-damage], (@item.rank+1)d8[fire|options:area-damage], (@item.rank+1)d8[force|options:area-damage], (@item.rank+1)d8[piercing|options:area-damage], (@item.rank+1)d8[slashing|options:area-damage], (@item.rank+1)d8[sonic|options:area-damage], or (@item.rank+1)d8[spirit|options:area-damage] damage, and choose a @Template[cone|distance:30], a @Template[burst|distance:15] within 120 feet, or a @Template[line|distance:50]. The blast deals 6d8 damage of the type you chose to each creature in the area.\nHeightened (+1) The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "varies",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+1) The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-guardian",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jQdm301h6e8hIY4U",
      "slug": "spiritual-guardian",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spiritual-guardian.webp"
    },
    "sourceHash": "sha256:890a8a9ed1965193b6020858a6311700ee89fe766ced63dc0a320784cf701744",
    "translatableHash": "sha256:39c943f8d224cb4a21a9618c43c0eab88447bf60f4253434820ff405b474ef0d",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Guardian",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "sanctified",
        "spirit"
      ],
      "traditions": [
        "divine"
      ],
      "description": "A Medium guardian made of magical force appears in an unoccupied space in range. The spiritual guardian is translucent and wields a ghostly echo of one weapon you're wielding or wearing. If you have a deity, the guardian takes the form of one of your deity's attendants or servitors. If you sanctify the spell, the guardian's attacks are sanctified as well.\nCreatures can move through the guardian's space but can't end their movement in it. You and your allies can flank with the guardian. The guardian doesn't have any other attributes a creature would normally have, aside from 50 Hit Points that it can't recover by any means and that it can lose only when protecting a creature (see below).\nWhen you Cast the Spell and each time you Sustain it, you can have the guardian move to any unoccupied space within 120 feet of you and either attack or protect.\n• Attack The guardian makes a melee spell attack against an adjacent creature, dealing 3d8 damage on a hit (or double damage on a critical hit). The damage type is the same as the chosen weapon (or any of its types for a versatile weapon). The attack deals spirit damage instead if that would be more detrimental to the creature (as determined by the GM). This attack uses and contributes to your multiple attack penalty.\n• Protect The guardian protects a creature of your choice. Each time the chosen creature would take damage and the guardian is adjacent to it, the guardian takes the first 10 damage instead of the ally. This protection lasts until you command the guardian to attack or to protect a different creature, or the guardian is destroyed.\nHeightened (+2) The guardian's damage increases by 1d8, and its Hit Points increase by 20.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d8",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The guardian's damage increases by 1d8, and its Hit Points increase by 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-dragon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kghwmH3tQjMIhdH1",
      "slug": "summon-dragon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-dragon.webp"
    },
    "sourceHash": "sha256:50b2749be9a04a2cc594a08154c65a122282850cf68a59633e997a77b99aeeaa",
    "translatableHash": "sha256:a8ba1af339e0b6a313d2533b42deee4ff67ec9fca726a662705e7adfff28e4f2",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Dragon",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You summon a creature that has the dragon trait and whose level is 5 or lower to fight for you. If the dragon has a magical tradition trait (arcane, divine, occult, or primal), you can summon it only if you're using that tradition to cast summon dragon.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 316,
        "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
        "label": "summon",
        "target": {
          "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
          "package": "pf2e",
          "sourcePack": "journals",
          "documentType": "JournalEntry",
          "compendiumKey": "S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF"
        },
        "owner": {
          "sourceId": "kghwmH3tQjMIhdH1",
          "name": "Summon Dragon",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-stone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kOa055FIrO9Smnya",
      "slug": "wall-of-stone",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9422b891a9025c9c591896b519bc026911e01d02dcbf80de89afeae2a8f5b48c",
    "translatableHash": "sha256:6107d2219639a3b5cac34a5fd1c70b7b9ee3c3078060d166a6b55c43974c91dc",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Stone",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You shape a wall of solid stone. You create a 1-inch-thick wall of stone up to 120 feet long, and 20 feet high. You can shape the wall's path, placing each 5 feet of the wall on the border between squares. The wall doesn't need to stand vertically, so you can use it to form a bridge or set of stairs, for example. You must conjure the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost.\nEach 10-foot-by-10-foot section of the wall has AC 10, Hardness 14, and 50 Hit Points, and it's immune to critical hits and precision damage. A destroyed section of the wall can be moved through, but the rubble created from it is difficult terrain.\nHeightened (+2) The Hit Points of each section of the wall increase by 15.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The Hit Points of each section of the wall increase by 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-celestial",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lTDixrrNKaCvLKwX",
      "slug": "summon-celestial",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3542e050d3ca79cad7ddc5d6a926c0ccfef65a40694908b46ca3f042678ffe1b",
    "translatableHash": "sha256:d0617a333d16c36b04214d5d6bd5e6078c674ef600209437cc7ad94d43b25b25",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Celestial",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You summon a creature that has the celestial trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of celestials you can summon in certain cases. For instance, Calistria doesn't typically allow her followers to summon aeons.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 350,
        "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
        "label": "summon",
        "target": {
          "uuid": "Compendium.pf2e.journals.JournalEntry.S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF",
          "package": "pf2e",
          "sourcePack": "journals",
          "documentType": "JournalEntry",
          "compendiumKey": "S55aqwWIzpQRFhcq.JournalEntryPage.8gcp880pEWZ9VPnF"
        },
        "owner": {
          "sourceId": "lTDixrrNKaCvLKwX",
          "name": "Summon Celestial",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:toxic-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MlpbeZ61Euhl0d60",
      "slug": "toxic-cloud",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1612e71ecaefee25356ca239cb5388d5d2ee3a2d4abbd5aa9ea31a787828c659",
    "translatableHash": "sha256:59bb098d7b80d748da7ab67ef78302f0c0095956cd9bafc540eae805b50273b2",
    "data": {
      "schemaVersion": 1,
      "name": "Toxic Cloud",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure a poisonous fog. This functions as Mist, except the area moves 10 feet away from you each round. You deal 6d8 poison damage to each breathing creature that starts its turn in the spell's area. You can Dismiss the spell.\nHeightened (+1) The damage increases by 1d8.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d8",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d8."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "MlpbeZ61Euhl0d60",
          "name": "Toxic Cloud",
          "type": "spell"
        }
      }
    ]
  }
]
