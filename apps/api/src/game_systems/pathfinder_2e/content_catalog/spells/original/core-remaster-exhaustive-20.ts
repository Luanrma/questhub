import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_20_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:mark-of-blood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Oy6qBhzayCnqOiEO",
      "slug": "mark-of-blood",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7dd7471b2f7a0555610439e4f46ce6c572566f06e67e23bffce614eee53a8636",
    "translatableHash": "sha256:f78428805fe2495cc4a4af0547abc87f6e749fc16a4177b22c729d99fec900a3",
    "data": {
      "schemaVersion": 1,
      "name": "Mark of Blood",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You place a drop of your blood on a weapon and charge it with magic so that you transfer a small amount of your life essence with your attack. The next creature you successfully Strike with the weapon during the spell's duration takes damage as normal from the attack and must then attempt a Will save; regardless of the outcome of this saving throw, the duration of mark of blood ends. You can have up to one creature cursed by mark of blood at any one time. If you use this spell to mark a different creature, the curse afflicting the previous creature ends.\nCritical Success The creature is unaffected.\nSuccess The creature gains a softly glowing mark that resembles Achaekek's symbol somewhere on their body (such as the forehead or back of the hand). This mark can be Concealed by clothing, but is otherwise permanent until the curse is removed.\nFailure As success, but you can Seek to attempt to know the direction and general distance (within a mile) to the marked creature if the creature is alive and both you and the creature are on the same plane of existence. When you Seek in this way, you attempt a Perception check against the marked creature's Will DC. On a success, you gain the information, which is accurate at the moment that you Seek. On a critical failure, the curse ends, and the creature's mark vanishes.\nCritical Failure As failure, but your Perception checks to Seek the marked creature are automatically successful.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 piercing or slashing weapon you're wielding",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 829,
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
          "sourceId": "Oy6qBhzayCnqOiEO",
          "name": "Mark of Blood",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1006,
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
          "sourceId": "Oy6qBhzayCnqOiEO",
          "name": "Mark of Blood",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bone-flense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "V4IpjSlefultlOuY",
      "slug": "bone-flense",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e71fefb74c7cca6f2cee0e7e29046087c7e914e23a7aa1d3b470cc6d25c03bd",
    "translatableHash": "sha256:5ae9af02dcdbe929d5ad077e514f79c8cd99859b126f150621dcfc414e10f5da",
    "data": {
      "schemaVersion": 1,
      "name": "Bone Flense",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "The target weapon becomes imbued with Achaekek's power and glows softly with crimson light akin to that shed by a candle. When a creature with a skeleton or exoskeleton takes damage from a Strike delivered by this weapon, the creature's bones nearest to the wound instantly sprout jagged, razor-sharp spurs that flense the muscle and flesh from inside out. The creature takes an additional 1d6 persistent bleed damage from the Strike. You can use the Erupting Spurs reaction.\nEffect: Bone Flense (Damage)\nEffect: Bone Flense (Reaction)\nHeightened 2 The persistent bleed damage increases by 1d6. The damage from Erupting Spurs increases by 4d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 weapon that is either wielded by a member of the Red Mantis or is a praying mantis's leg Strike",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The persistent bleed damage increases by 1d6. The damage from Erupting Spurs increases by 4d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 454,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Erupting Spurs",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Erupting Spurs",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Erupting Spurs",
          "sourceId": "wfUIsKBxCBfXi1TF",
          "name": "Erupting Spurs",
          "type": "action"
        },
        "owner": {
          "sourceId": "V4IpjSlefultlOuY",
          "name": "Bone Flense",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 526,
        "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Bone Flense (Damage)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Bone Flense (Damage)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bone Flense (Damage)",
          "sourceId": "P6f6UnvYSF5zATyu",
          "name": "Effect: Bone Flense (Damage)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "V4IpjSlefultlOuY",
          "name": "Bone Flense",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 604,
        "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Bone Flense (Reaction)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Bone Flense (Reaction)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Bone Flense (Reaction)",
          "sourceId": "5Zof6sC46ms4JLIl",
          "name": "Effect: Bone Flense (Reaction)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "V4IpjSlefultlOuY",
          "name": "Bone Flense",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantiss-grasp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Tl1QAqre7H0sQEXt",
      "slug": "mantiss-grasp",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8370169d48524cd2afc70616efd22dae598075dc96f0ac73528e39740eec0ae1",
    "translatableHash": "sha256:c01bc7913f760815843a1940069e39572f8175eedd28964f48af2bd65e8751c4",
    "data": {
      "schemaVersion": 1,
      "name": "Mantis's Grasp",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You cause red, ghostly mantis arms to sprout from a nearby surface and crush a creature, dealing 8d6 force damage and attempting to pin the target in place. The effects are determined by the creature's Reflex save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage and is Immobilized for 1 round.\nCritical Failure The target takes double damage and is immobilized for 1 minute. At the end of each of its turns, the target can attempt to Escape. The Escape DC is equal to your spell DC.\nHeightened (7th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (7th) You can target up to 5 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 420,
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
          "sourceId": "Tl1QAqre7H0sQEXt",
          "name": "Mantis's Grasp",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 652,
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
          "sourceId": "Tl1QAqre7H0sQEXt",
          "name": "Mantis's Grasp",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sawtooth-terrain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "I2IgZu4Rd2dz0J6v",
      "slug": "sawtooth-terrain",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c37c7eac7242b66754324f974e4e552d509ff6bdd028a2ccb2565ec5d4f9f63c",
    "translatableHash": "sha256:293bcdb61b308372111c0bc3e6afbae8376ca54b5771cae1dab029550c5d009f",
    "data": {
      "schemaVersion": 1,
      "name": "Sawtooth Terrain",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You cause long, serrated mantis limbs to appear, swiping at and obstructing creatures in the area. The area is difficult terrain. Each creature in the area when the spell is cast and who end their turn within the area take 3d6 slashing damage and 2d6 persistent bleed damage, as determined by its Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no persistent damage.\nFailure The creature takes full damage and a –10-foot circumstance penalty to their Speed until they receive magical healing or benefit from a successful Medicine check against your spell DC to Administer First Aid.\nCritical Failure The creature takes double damage and a –15-foot circumstance penalty to their Speed until they receive magical healing or benefit from a successful Medicine check against your spell DC to administer First Aid.\nHeightened 2 The damage increases by 3d6, and the persistent bleed damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d6, and the persistent bleed damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 719,
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
          "sourceId": "I2IgZu4Rd2dz0J6v",
          "name": "Sawtooth Terrain",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:crimson-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ExQk8AwDphmckEmZ",
      "slug": "crimson-breath",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:43bdeb10dbdf641455d65316da1aa03e489c89b64e1b9c4b6db02b1b23ef3b94",
    "translatableHash": "sha256:2c65d394ed26117ffe2c7999f10e7dd947b828778875e9ae8edecfd136a64389",
    "data": {
      "schemaVersion": 1,
      "name": "Crimson Breath",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You turn a creature toward you and exhale a blast of crimson mist from your mouth, exposing the target to a toxic miasma. The effects are determined by the creature's Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 8d6 poison damage.\nFailure The target is afflicted with breath of the mantis god poison at stage 1.\nCritical Failure The target is afflicted with breath of the mantis god poison at stage 2.\nBreath of the Mantis God\nSaving Throw check (fortitude, dc:29)\nMaximum Duration 6 minutes\nStage 1 3d6 persistent bleed and Drained 1 (1 minute)\nStage 2 3d8 persistent bleed and drained 1 (1 minute)\nStage 3 3d10 persistent bleed and Drained 2 (1 minute)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "8d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 746,
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
          "sourceId": "ExQk8AwDphmckEmZ",
          "name": "Crimson Breath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 955,
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
          "sourceId": "ExQk8AwDphmckEmZ",
          "name": "Crimson Breath",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:briny-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8lZhUreL1bRk1v4Z",
      "slug": "briny-bolt",
      "publicationTitle": "Pathfinder Adventure Path: Gatewalkers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/acid-storm.webp"
    },
    "sourceHash": "sha256:b1994fff0eb008eda13ff9ef9e60b060fbd7ed02e8fb72b60bd81a9192b5c71f",
    "translatableHash": "sha256:6d745c64e962569e5b42cd1b72278f8358be7497c1c825c029be2449c7bf17fe",
    "data": {
      "schemaVersion": 1,
      "name": "Briny Bolt",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You hurl a bolt of saltwater from your extended hand. Make a ranged spell attack against a target within range.\nCritical Success The creature takes 4d6 bludgeoning damage and is Blinded for 1 round and Dazzled for 1 minute as saltwater sprays into its eyes. The creature can spend an Interact action to rub its eyes and end the blinded condition, but not the dazzled condition.\nSuccess The creature takes 2d6 bludgeoning damage and is blinded for 1 round. The creature can spend an Interact action wiping the salt water from its eyes to end the blinded condition.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 212,
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
          "sourceId": "8lZhUreL1bRk1v4Z",
          "name": "Briny Bolt",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 279,
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
          "sourceId": "8lZhUreL1bRk1v4Z",
          "name": "Briny Bolt",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:advanced-scurvy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XEhzFKNTSARsofav",
      "slug": "advanced-scurvy",
      "publicationTitle": "Pathfinder Adventure Path: Gatewalkers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/animate-dead.webp"
    },
    "sourceHash": "sha256:205478222044883dc16b57b536a7382242c3b80c06e727df38e109cec1fcdab1",
    "translatableHash": "sha256:de304ddbfab0fd14be60f052acc931d050c804388d57909a4850fafba39f3bbf",
    "data": {
      "schemaVersion": 1,
      "name": "Advanced Scurvy",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "disease",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Your touch afflicts the target with an advanced form of scurvy, a mariner's disease stemming from improper nutrition. The symptoms of scurvy include fatigue, joint pain, loose teeth, and internal hemorrhaging.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 1 for 1 minute.\nFailure The target is afflicted with advanced scurvy at stage 1.\nCritical Failure The target is afflicted with advanced scurvy at stage 2.\nAdvanced Scurvy (disease)\nLevel 4\nfor 1 day after eating fresh fruit, a creature gains a +2 circumstance bonus to their next saving throw against this affliction\nStage 1 enfeebled 1 and the damage dealt by persistent bleed effects is increased by 1 (1 day)\nStage 2 enfeebled 1, Fatigued, and the damage dealt by persistent bleed effects is increased by 1d4 (2 days)\nStage 3 Enfeebled 2, fatigued, and the damage dealt by persistent bleed effects is increased by 1d6 (4 days)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 333,
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
          "sourceId": "XEhzFKNTSARsofav",
          "name": "Advanced Scurvy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 981,
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
          "sourceId": "XEhzFKNTSARsofav",
          "name": "Advanced Scurvy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1144,
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
          "sourceId": "XEhzFKNTSARsofav",
          "name": "Advanced Scurvy",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lashing-rope",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sbTxe4CGP4tn6y51",
      "slug": "lashing-rope",
      "publicationTitle": "Pathfinder Adventure Path: Gatewalkers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c9778b42821d8e85dd529c481f3130d684f9a9fc4a8823dfa86dd3e59af5b05c",
    "translatableHash": "sha256:e80ea3cb0d63541a57eae2006759bfbdee531702c3fea6b1b395bc9a51ae6ed6",
    "data": {
      "schemaVersion": 1,
      "name": "Lashing Rope",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cause a section of rope or a rope-like object to animate, slither to your square, and encircle you, wreathing you in twisting, lashing fibers.\nWhen you Cast the Spell and each time you Sustain the Spell, you can make a melee Strike with the rope, which uses and contributes to your multiple attack penalty. These rope Strikes are melee spell attacks; have the magical, reach, and trip weapon traits; and deal 3d6 slashing damage.\nIf you critically fail a check to Trip using the rope, you can't make any more Strikes with it this turn, nor can you use it to make an Attack of Opportunity until the beginning of your next turn. This replaces the usual results of a critical failure to Trip.\nHeightened 2 The damage from your rope Strikes increases by 2d6.",
      "castingTime": "2 actions",
      "range": "50 feet",
      "target": "up to 50 feet of unattended rope or an inanimate rope-like object",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage from your rope Strikes increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 485,
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
          "sourceId": "sbTxe4CGP4tn6y51",
          "name": "Lashing Rope",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lashuntas-life-bubble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8rAcQOvm0nFrqAUt",
      "slug": "lashuntas-life-bubble",
      "publicationTitle": "Pathfinder Adventure Path: Gatewalkers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/air-bubble.webp"
    },
    "sourceHash": "sha256:0f71757bb3c04bc1880bb852d0bc02b694921d5e51b111809c6df7a6e6ac9abd",
    "translatableHash": "sha256:4f06c99bf38b58d830cbbb7e8aa33901f3b03ba06d085b9c489783e186973565",
    "data": {
      "schemaVersion": 1,
      "name": "Lashunta's Life Bubble",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You create a replenishing protective bubble of fresh, temperate air around the target. The shell of air enables the target to breathe even underwater or in a vacuum, protects from severe cold and heat, and grants a +1 status bonus to the target's saves against inhaled dangers such as inhaled poisons and Toxic Cloud.\nSpell Effect: Lashunta's Life Bubble\nHeightened (6th) The bubble lasts until your next preparation.\nHeightened (8th) The bubble lasts until your next preparation, protects against extreme cold and heat, and grants a +2 status bonus instead of +1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The bubble lasts until your next preparation.\nHeightened (8th) The bubble lasts until your next preparation, protects against extreme cold and heat, and grants a +2 status bonus instead of +1."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 308,
        "uuid": "Compendium.pf2e.spells-srd.Item.Toxic Cloud",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Toxic Cloud",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Toxic Cloud",
          "sourceId": "MlpbeZ61Euhl0d60",
          "name": "Toxic Cloud",
          "type": "spell"
        },
        "owner": {
          "sourceId": "8rAcQOvm0nFrqAUt",
          "name": "Lashunta's Life Bubble",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 367,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Lashunta's Life Bubble",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Lashunta's Life Bubble",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Lashunta's Life Bubble",
          "sourceId": "nUJSdm4fy6fcwsvv",
          "name": "Spell Effect: Lashunta's Life Bubble",
          "type": "effect"
        },
        "owner": {
          "sourceId": "8rAcQOvm0nFrqAUt",
          "name": "Lashunta's Life Bubble",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:cycle-of-retribution",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "m2i7N8tnqar3gZDZ",
      "slug": "cycle-of-retribution",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ce78e44266c79486cb0383ca8d77e743ac2a79488fbd60887f6c2d3757e161d3",
    "translatableHash": "sha256:5554f2c7f0d9f55390c8b4ee62677efb5999095409e8257924bad2fc6814f8d8",
    "data": {
      "schemaVersion": 1,
      "name": "Cycle of Retribution",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "An understanding of how violence begets more violence fills your target, causing it mental anguish in the form of splitting headaches when it attempts to take violent actions. The target must attempt a Will saving throw, with the following results.\nCritical Success The target is unaffected.\nSuccess The next time the target takes a hostile action, the target takes 1d4 mental damage; the spell's duration then ends.\nFailure The first time in a round when the target takes a hostile action, the target takes 1d4 mental damage.\nCritical Failure Each time the target takes a hostile action, the target takes 1d4 mental damage.\nHeightened 1 The mental damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The mental damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fated-healing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X3RUan7TVqo6UpUG",
      "slug": "fated-healing",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e545287adaf5f9b203049a664b98cc8d19cd1aa70caa0fc7ae4b4be2be9a756d",
    "translatableHash": "sha256:bb2fa89d81641b5e2878d10cb14a1b96492e088c849a2d10dd209be4c686b72a",
    "data": {
      "schemaVersion": 1,
      "name": "Fated Healing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You speak about the consequences of actions people take against each other and how it's possible to break cycles of violence simply by making a different choice. The targets regain 1d4 Hit Points at the end of each of their own turns while the spell is in effect. If a target uses a hostile action against the other target, the spell ends for the target that used the hostile action.\nHeightened 1 The targets regain an additional 1d4 Hit Points at the end of their own turns.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "2 creatures who are hostile toward each other",
      "area": null,
      "duration": "5 rounds",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The targets regain an additional 1d4 Hit Points at the end of their own turns."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entangle-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "11haL5O9KMpY5Fv7",
      "slug": "entangle-fate",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:88839ea8f7273b2907cb04a0011db287a75c550af454f351cc4643e32587c841",
    "translatableHash": "sha256:55e92498e2ea81a1a582ce4edfcedd9fd12196d1212254a7e84ea1f2136a55a1",
    "data": {
      "schemaVersion": 1,
      "name": "Entangle Fate",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cause a swirl of energy to entangle the fates of all caught within the blast. Each creature in the area must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature's fate becomes distorted, and momentary conflicting glimpses of the immediate future cause the creature to become Off-Guard until the start of its next turn.\nFailure As success, but the creature is off-guard for the duration of the spell. If more than one of the targets failed to resist this spell, the creature also becomes Stupefied 1 for the duration of the spell as its fate and those of the other creatures continue to clash and strain against each other.\nCritical Failure As failure, but any creature that becomes stupefied 1 for the duration of the spell also becomes Enfeebled 1 and Clumsy 1 for the spell's duration.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "2 to 4 creatures in range",
      "area": null,
      "duration": "3 rounds",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 370,
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
          "sourceId": "11haL5O9KMpY5Fv7",
          "name": "Entangle Fate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 649,
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
          "sourceId": "11haL5O9KMpY5Fv7",
          "name": "Entangle Fate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 977,
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
          "sourceId": "11haL5O9KMpY5Fv7",
          "name": "Entangle Fate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1047,
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
          "sourceId": "11haL5O9KMpY5Fv7",
          "name": "Entangle Fate",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lifes-fresh-bloom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2TVc8NabmGpc092W",
      "slug": "lifes-fresh-bloom",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:31c22adb5c4d9d454be18002d9a53efa6e0fc480ac35102dcdb55947c7efed64",
    "translatableHash": "sha256:4fe70b43f8e28848fb02818cd6e54402546e14f1556c124e45bdac176c608375",
    "data": {
      "schemaVersion": 1,
      "name": "Life's Fresh Bloom",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "The ground around you blooms with life, sprouting sparkling grass, flowers, and small shrubs. Each living and non-nindoru creature that starts its turn standing on the ground in the area recovers 1d6 Hit Points and gains a +5-foot status bonus to its Speed until the end of its next turn. Nindoru fiends and undead that start their turn in the area of life's fresh bloom instead become Sickened 1 unless they succeed at a Fortitude saving throw.\nSpell Effect: Life's Fresh Bloom\nHeightened (7th) Increase the Hit Points restored to 1d8 and Sickened 2.\nHeightened (10th) Increase the Hit Points restored to 1d10 and Sickened 3.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "20 burst",
      "duration": "5 rounds",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened (7th) Increase the Hit Points restored to 1d8 and Sickened 2.\nHeightened (10th) Increase the Hit Points restored to 1d10 and Sickened 3."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 389,
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
          "sourceId": "2TVc8NabmGpc092W",
          "name": "Life's Fresh Bloom",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 509,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Life's Fresh Bloom",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Life's Fresh Bloom",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Life's Fresh Bloom",
          "sourceId": "yYDj0G4O3q5iGexx",
          "name": "Spell Effect: Life's Fresh Bloom",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2TVc8NabmGpc092W",
          "name": "Life's Fresh Bloom",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 674,
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
          "sourceId": "2TVc8NabmGpc092W",
          "name": "Life's Fresh Bloom",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 826,
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
          "sourceId": "2TVc8NabmGpc092W",
          "name": "Life's Fresh Bloom",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:tomorrows-dawn",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a0MfDnUa33oWM74s",
      "slug": "tomorrows-dawn",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2fe6f6752fb24ac4c14a05f9ef3cfb8c8ccdc734bcbb3088449905ae4d52c467",
    "translatableHash": "sha256:36e658c27dd16646d0bf3b2a72ae5c41fa7dd95737de63ccffb21d6ab74a315b",
    "data": {
      "schemaVersion": 1,
      "name": "Tomorrow's Dawn",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "The golden light of a new dawn and the promise of life beyond death radiates from your body. You radiate bright light in a 20-foot radius (and dim light for the next 20 feet) and gain mental resistance 5. Any nindoru fiend or undead that begins its turn adjacent to you must attempt a Will save with the following results.\nSpell Effect: Tomorrow's Dawn\nCritical Success The creature is unaffected and immune to this spell's effects for the remainder of the spell's duration.\nSuccess The creature is Sickened 1 until the end of its turn.\nFailure The creature is sickened 1. In addition, it becomes Slowed 1 until the end of its next turn.\nCritical Failure As failure, but Sickened 2 and the creature remains slowed 1 for the rest of the spell's duration.\nHeightened (6th) You gain mental resistance 10.\nHeightened (8th) You gain mental resistance 15.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You gain mental resistance 10.\nHeightened (8th) You gain mental resistance 15."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 333,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tomorrow's Dawn",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tomorrow's Dawn",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tomorrow's Dawn",
          "sourceId": "SyF5kpZlZuBF4lMf",
          "name": "Spell Effect: Tomorrow's Dawn",
          "type": "effect"
        },
        "owner": {
          "sourceId": "a0MfDnUa33oWM74s",
          "name": "Tomorrow's Dawn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 604,
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
          "sourceId": "a0MfDnUa33oWM74s",
          "name": "Tomorrow's Dawn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 779,
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
          "sourceId": "a0MfDnUa33oWM74s",
          "name": "Tomorrow's Dawn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 928,
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
          "sourceId": "a0MfDnUa33oWM74s",
          "name": "Tomorrow's Dawn",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lifes-flowing-river",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CgekONDD5jIxL8oM",
      "slug": "lifes-flowing-river",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2ad43bf31e20c57577b9592aa4f8b7e8d877ea02dc4005d09b150c1eb0d2eba1",
    "translatableHash": "sha256:a9cef620b25fd7ba8e4d56e94dc0a1a1fd326510ee9bcef59bac69624d7359b5",
    "data": {
      "schemaVersion": 1,
      "name": "Life's Flowing River",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You create a flowing river of ghostly water and that sheds dim light for 10 feet on each side. The river begins in an adjacent square to you and extends in a straight 5-foot path to its maximum range or until it hits a solid barrier, whichever comes first. A creature that begins its turn in the glowing waters of the river or who enters one of the river's spaces must attempt a Will save. If the creature is undead or a nindoru, it takes 4d6 mental damage, modified by the result of their Will save.\nCritical Success The creature ignores the river's effects until the start of its next turn. If the creature is undead or a nindoru, it takes no damage.\nSuccess The creature treats all squares occupied by the river as difficult terrain until the start of its next turn. If the creature is undead or a nindoru, it takes half damage.\nFailure As success, but the creature is also knocked Prone. If the creature is undead or a nindoru, it takes full damage.\nCritical Failure As failure, but the creature is pushed 20 feet along the river's path in the direction of flow. If the creature is undead or a nindoru, it takes double mental damage.\nHeightened 1 The mental damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The mental damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 975,
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
          "sourceId": "CgekONDD5jIxL8oM",
          "name": "Life's Flowing River",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-mirrors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eONVFSbBiqaDLGey",
      "slug": "wall-of-mirrors",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a8ccaacf8703c0aff6af60687f13258ddd0e9ad7ccdf43a7c99663080c5ae06",
    "translatableHash": "sha256:e82c0524e02e8835080727c296644f55f0b7c07712674791b1ee8a10066bb8a1",
    "data": {
      "schemaVersion": 1,
      "name": "Wall Of Mirrors",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a solid wall of shimmering reflective glass up to 50 feet long and 20 feet high. The wall is an inch thick and stands vertically. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. Each 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 40 Hit Points, and it's immune to critical hits and precision damage. Everything on each side of the wall is Concealed from creatures on the opposite side. If a creature Strikes the wall, the wall causes the creature to endure the mental anguish of that attack's pain as well; the creature takes 4d4 mental damage and can resist this damage with a basic Will save.\nHeightened 1 The Hit Points of each section of the wall increase by 10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "4d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The Hit Points of each section of the wall increase by 10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 456,
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
          "sourceId": "eONVFSbBiqaDLGey",
          "name": "Wall Of Mirrors",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sacred-nimbus",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GabRQPc9qD86jDGI",
      "slug": "sacred-nimbus",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a0d807b82108023a55ac524b001aabd3077b45f2f42729b4ecd9f0aba383c54c",
    "translatableHash": "sha256:033b6c4f9da0fae80b4dba9aaba955f42114a710e3a21cc9a38df8575805e29c",
    "data": {
      "schemaVersion": 1,
      "name": "Sacred Nimbus",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "holy",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You summon a small, fluffy white nimbus cloud that floats 10 feet above the ground and rains down pleasantly warm sanctified water. The rain deals 5d6 spirit damage to fiends, undead, and creatures that have a weakness to spirit damage in the area at the end of your turn. When you Sustain the spell, you can move the cloud at a fly speed of 15 feet to anywhere in the spell's range. The water dissipates as it makes contact with any creatures or surfaces, leaving only a bit of humidity in its place.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 square",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "5d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prophets-luck",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "n2CM3NeRuq5RSY19",
      "slug": "prophets-luck",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4fdaa0c66a15d612a2ef1cfa3e7c941137646ec393dfe6a7c53e7bb94b0a39ee",
    "translatableHash": "sha256:4cd17f2fa860dfbd86100aeef8a4b2fb0c24a724df5b67fa8da5b59bb43ce329",
    "data": {
      "schemaVersion": 1,
      "name": "Prophet's Luck",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "Trigger You or a creature within range attempts a saving throw against an obvious threat.\nYou prophesize the result of the triggering saving throw as either a success (including a critical success) or a failure (including a critical failure). The target gains a +1 status bonus to the save if you predict success or a –1 status penalty if you predict failure. If you predict the result correctly, fortune favors you, and you gain a +1 status bonus to saving throws. If you predict incorrectly, fortune spurns the target, imparting a –1 status penalty to its saving throws.\nHeightened (6th) The save bonus or penalty increases to +2 or –2.\nHeightened (9th) The save bonus or penalty increases to +3 or –3.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The save bonus or penalty increases to +2 or –2.\nHeightened (9th) The save bonus or penalty increases to +3 or –3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fateful-condemnation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ReUoodsqUYSTwSgE",
      "slug": "fateful-condemnation",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eacb6d3d4f187a5a4324c8ac54dd155fed6660a17e845ca3c5e898bcf08b28c1",
    "translatableHash": "sha256:53c97bf60901539ebe64096ada5c258e5ca01ff16313f156d5857631b295f711",
    "data": {
      "schemaVersion": 1,
      "name": "Fateful Condemnation",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You draw upon the target's negative fate, causing this lingering destiny to afflict it and its nearby allies with the unintended consequences of its past lives. Spiritual echoes of the target's past lives instill overwhelming feelings of doubt, regret, and despair into the minds of the target and its nearby allies. The effects depend on the target's Will save, with the following results.\nCritical Success The creature is unaffected.\nSuccess The creature takes 4d6 mental damage, and then an aura of shimmering mist with a 10-foot emanation surrounds the creature. This mist isn't dense enough to affect sight, but it does cause the creature and any of its allies in the aura to take a –1 status penalty to all skill checks.\nFailure As success, but the creature takes an initial 8d6 mental damage and is then Slowed 1 for the duration of the effect.\nCritical Failure As success, but the creature takes an initial 16d6 mental damage, then is slowed 1 for the duration of the effect. Any of the target's allies who begin their turn in the 10-foot emanation is slowed 1 for 1 round.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "8d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 906,
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
          "sourceId": "ReUoodsqUYSTwSgE",
          "name": "Fateful Condemnation",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bee-mans-summons",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BcqJqxIKYE0aoDiS",
      "slug": "bee-mans-summons",
      "publicationTitle": "Pathfinder #201: Pactbreaker",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6da8b2dbdc468102ca814ddd5aedf558905ee49bfbf367d68287e594faf769d8",
    "translatableHash": "sha256:f1cb0f3d6b55a02ccb65c1f001dc46936d7c36e47145d075ada4a08e3a074d12",
    "data": {
      "schemaVersion": 1,
      "name": "Bee-Man's Summons",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You recreate the Bee-Man's infamous ability to sense when someone utters their name. During the spell's duration, you mentally sense whenever someone (referred to as a speaker) speaks your full name while within the spell's area. You gain a vague sense of the speaker's identity, such as \"a local farmer\" or \"a halfling in distress,\" unless the speaker is someone you have met and interacted with before, in which case you recognize the speaker specifically. As a reaction within 1 minute of the speaker's utterance, you can send the speaker a telepathic prompt, asking if they intend to summon you. If they respond affirmatively, the spell's remaining duration decreases to sustained (up to 10 minutes), during which time you know the direction to where the speaker named you and how far away they are.\nHeightened (4th) The emanation's radius increases to 1,000 feet.\nHeightened (7th) The emanation's radius increases to 1 mile, and instead of locating the speaker, you can instead converse with the speaker for 5 minutes. This otherwise works as sending.\nHeightened (9th) As 7th, except the emanation's radius increases to 5 miles, and the duration of the conversation is 10 minutes.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "500 emanation",
      "duration": "until the next time you make your daily preparations or until discharged",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The emanation's radius increases to 1,000 feet.\nHeightened (7th) The emanation's radius increases to 1 mile, and instead of locating the speaker, you can instead converse with the speaker for 5 minutes. This otherwise works as sending.\nHeightened (9th) As 7th, except the emanation's radius increases to 5 miles, and the duration of the conversation is 10 minutes."
    }
  }
]
